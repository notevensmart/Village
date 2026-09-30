import assert from "node:assert/strict";
import test from "node:test";
import handler from "./enquiry.js";

const validEnquiry = {
  name: "Jane Doe",
  email: "jane@anotherdomain.org",
  phone: "0494 823 141",
  matterType: "Consultation",
  message: "Please contact me about an assessment.",
};

function makeResponse() {
  return {
    statusCode: 200,
    body: null,
    setHeader() { return this; },
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; },
  };
}

function makeRequest(body) {
  return { method: "POST", headers: { "content-type": "application/json" }, body };
}

test("sends an enquiry from any email domain without a phone number", async (context) => {
  const originalFetch = global.fetch;
  const originalApiKey = process.env.RESEND_API_KEY;
  const originalSender = process.env.VCC_FROM_EMAIL;
  context.after(() => {
    global.fetch = originalFetch;
    if (originalApiKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalApiKey;
    if (originalSender === undefined) delete process.env.VCC_FROM_EMAIL;
    else process.env.VCC_FROM_EMAIL = originalSender;
  });

  process.env.RESEND_API_KEY = "test-key";
  delete process.env.VCC_FROM_EMAIL;
  let emailPayload;
  global.fetch = async (_url, options) => {
    emailPayload = JSON.parse(options.body);
    return { ok: true, json: async () => ({ id: "test-email-id" }) };
  };

  const response = makeResponse();
  await handler(makeRequest({ ...validEnquiry, phone: "" }), response);

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.body, { ok: true });
  assert.deepEqual(emailPayload.to, ["admin@villageclinicalconsultancy.com.au"]);
  assert.equal(emailPayload.from, "Village Clinical Consultancy <enquiries@villageclinicalconsultancy.com.au>");
  assert.equal(emailPayload.reply_to, "jane@anotherdomain.org");
  assert.match(emailPayload.text, /Phone: Not provided/);
  assert.match(emailPayload.text, /Please contact me about an assessment/);
});

test("rejects missing details and invalid email addresses", async () => {
  for (const body of [
    { ...validEnquiry, message: "" },
    { ...validEnquiry, email: "not-an-email" },
  ]) {
    const response = makeResponse();
    await handler(makeRequest(body), response);
    assert.equal(response.statusCode, 400);
  }
});

test("does not report success when email delivery fails", async (context) => {
  const originalFetch = global.fetch;
  const originalApiKey = process.env.RESEND_API_KEY;
  const originalSender = process.env.VCC_FROM_EMAIL;
  context.after(() => {
    global.fetch = originalFetch;
    if (originalApiKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalApiKey;
    if (originalSender === undefined) delete process.env.VCC_FROM_EMAIL;
    else process.env.VCC_FROM_EMAIL = originalSender;
  });

  process.env.RESEND_API_KEY = "test-key";
  process.env.VCC_FROM_EMAIL = "enquiries@villageclinicalconsultancy.com.au";
  global.fetch = async () => ({ ok: false });

  const response = makeResponse();
  await handler(makeRequest(validEnquiry), response);
  assert.equal(response.statusCode, 502);
  assert.equal(response.body.ok, undefined);
});
