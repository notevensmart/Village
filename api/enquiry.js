const recipient = "admin@villageclinicalconsultancy.com.au";
const matterTypes = new Set([
  "Private family report",
  "Dyadic assessment",
  "Consultation",
  "Stakeholder communication",
  "Other enquiry",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  if (!request.headers["content-type"]?.startsWith("application/json")) {
    return response.status(415).json({ error: "Expected a JSON enquiry" });
  }

  if (Number(request.headers["content-length"] || 0) > 20000) {
    return response.status(413).json({ error: "Enquiry is too long" });
  }

  let submission;
  try {
    submission = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
  } catch {
    return response.status(400).json({ error: "Invalid enquiry" });
  }

  if (!submission || typeof submission !== "object" || Array.isArray(submission)) {
    return response.status(400).json({ error: "Invalid enquiry" });
  }

  const { name, email, phone, matterType, message } = submission;
  const validText = (value, maxLength) =>
    typeof value === "string" && value.trim().length > 0 && value.trim().length <= maxLength;

  if (
    !validText(name, 120) ||
    !validText(email, 254) ||
    !emailPattern.test(email.trim()) ||
    !validText(phone, 50) ||
    !matterTypes.has(matterType) ||
    !validText(message, 4000)
  ) {
    return response.status(400).json({ error: "Please complete all required details with a valid email address" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.VCC_FROM_EMAIL?.trim();

  if (!apiKey || !sender || !emailPattern.test(sender)) {
    return response.status(503).json({ error: "Enquiry email is not configured" });
  }

  try {
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Village Clinical Consultancy <${sender}>`,
        to: [recipient],
        reply_to: email.trim(),
        subject: `New website enquiry: ${matterType}`,
        text: [
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          `Phone: ${phone.trim()}`,
          `Matter type: ${matterType}`,
          "",
          "Message:",
          message.trim(),
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!sent.ok || !(await sent.json()).id) {
      return response.status(502).json({ error: "Enquiry could not be sent" });
    }

    return response.status(200).json({ ok: true });
  } catch {
    return response.status(502).json({ error: "Enquiry could not be sent" });
  }
}
