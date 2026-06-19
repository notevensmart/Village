import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  HeartHandshake,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About us" },
  { id: "team", label: "Our team" },
  { id: "services", label: "Services" },
  { id: "faq", label: "FAQ" },
];

const pageTitles = {
  home: "Village Clinical Consultancy",
  about: "About us | Village Clinical Consultancy",
  team: "Our team | Village Clinical Consultancy",
  services: "Services | Village Clinical Consultancy",
  faq: "FAQ | Village Clinical Consultancy",
  contact: "Contact | Village Clinical Consultancy",
  privacy: "Privacy Policy | Village Clinical Consultancy",
  terms: "Terms and Conditions | Village Clinical Consultancy",
  disclaimer: "Website Disclaimer | Village Clinical Consultancy",
};

const assurancePanels = [
  {
    audience: "Care",
    title: "Care and support for the child",
    text: "Children are supported through a calm, paced assessment process that respects how they communicate and what helps them feel safe enough to participate.",
    proof: "Child-centred participation, not pressure",
    icon: HeartHandshake,
  },
  {
    audience: "Clarity",
    title: "A clear and transparent process",
    text: "Families, lawyers, and referrers know what is being assessed, what information is needed, what fees apply, and how timing will be managed.",
    proof: "Scope, fees, and timing set out upfront",
    icon: FileText,
  },
  {
    audience: "Balance",
    title: "Balanced, practical, useful outcomes",
    text: "Findings are tested through a dyadic, multidisciplinary lens so reports are careful, bias-aware, and focused on decisions people can actually use.",
    proof: "Two professional lenses strengthen report quality",
    icon: ShieldCheck,
  },
];

const heroHighlights = [
  {
    label: "For families",
    text: "Careful child-inclusive participation",
  },
  {
    label: "For lawyers",
    text: "Report-ready scope and communication",
  },
  {
    label: "For referrers",
    text: "Multidisciplinary clinical perspective",
  },
];

const services = [
  {
    name: "Private Family Reports",
    summary:
      "Independent family assessments to assist parents, lawyers, and courts with child-focused parenting decisions.",
    includes: ["Parent interviews", "Child-inclusive assessment where suitable", "Collateral review", "Written report"],
  },
  {
    name: "Dyadic Assessments",
    summary:
      "Assessment work completed through two professional lenses to strengthen balance, reflection, and quality assurance.",
    includes: ["Two-practitioner review", "Integrated formulation", "Bias-aware recommendations", "Clear next steps"],
  },
  {
    name: "Child and Family Consultation",
    summary:
      "Focused consultation for family dynamics, parenting concerns, and referral questions requiring specialist clinical input.",
    includes: ["Intake triage", "Family context mapping", "Professional consultation", "Referral guidance"],
  },
  {
    name: "Stakeholder and Lawyer Briefings",
    summary:
      "Concise communication with legal and referral partners so scope, process, expectations, and timing remain clear.",
    includes: ["Scope confirmation", "Document request checklist", "Timeline planning", "Progress communication"],
  },
];

const processSteps = [
  {
    label: "1",
    eyebrow: "Start",
    title: "Enquiry and triage",
    text: "We clarify who is involved, what question needs answering, and whether Village is the right professional fit before anything is booked.",
    outcome: "You leave with a clear next step.",
  },
  {
    label: "2",
    eyebrow: "Plan",
    title: "Scope, fees, and scheduling",
    text: "Appointments, document needs, indicative timing, flexible availability, and fees are set out in writing before work begins.",
    outcome: "The process is mapped before the family attends.",
  },
  {
    label: "3",
    eyebrow: "Assess",
    title: "Assessment appointments",
    text: "Parents, children, and relevant stakeholders are seen according to the agreed scope, with child participation handled carefully.",
    outcome: "Information is gathered through more than one lens.",
  },
  {
    label: "4",
    eyebrow: "Resolve",
    title: "Dyadic review and report",
    text: "Findings are tested through the dyadic model before the final report or consultation outcome is delivered.",
    outcome: "Recommendations are clearer, balanced, and usable.",
  },
];

const values = [
  "Child-centred practice",
  "Respect for every family member",
  "Evidence-informed assessment",
  "Clear communication",
  "Professional independence",
  "Practical recommendations",
];

const profiles = [
  {
    initials: "VP",
    name: "Village Practitioner",
    role: "Family Consultant",
    bio: "Placeholder biography for a senior clinician with experience in family assessment, child-inclusive practice, and professional report writing.",
    focus: ["Family reports", "Child-inclusive assessment", "Risk-informed practice"],
  },
  {
    initials: "CP",
    name: "Consulting Practitioner",
    role: "Mental Health Professional",
    bio: "Placeholder biography for a multidisciplinary practitioner contributing a second professional lens to assessments and recommendations.",
    focus: ["Dyadic review", "Family systems", "Collaborative care"],
  },
];

const faqs = [
  {
    question: "Who does Village work with?",
    answer:
      "Village works with families, parents, lawyers, law firms, and referral partners seeking professional family assessment and report services.",
  },
  {
    question: "What makes the assessment process different?",
    answer:
      "Village uses a multidisciplinary village approach and dyadic report format so assessment work is informed by multiple professional perspectives.",
  },
  {
    question: "Are after-hours appointments available?",
    answer:
      "Yes. Flexible appointment times, including after-hours and weekend options, may be available depending on the assessment scope and practitioner availability.",
  },
  {
    question: "How long does a report take?",
    answer:
      "Timeframes depend on availability, document volume, stakeholder input, and the agreed scope. Indicative timing is confirmed in writing before the assessment begins.",
  },
  {
    question: "How are costs confirmed?",
    answer:
      "Fees are confirmed in writing after scope is understood. The website uses pricing placeholders until the business confirms final fee wording for publication.",
  },
  {
    question: "Is the website legal information?",
    answer:
      "No. Website content is general information only and should be reviewed by the business owner and a lawyer before publication.",
  },
];

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This placeholder Privacy Policy outlines the type of information a professional clinical consultancy website may describe. It requires legal and business review before publication.",
    sections: [
      ["Information collected", "Village may collect contact details, referral information, enquiry messages, and information voluntarily submitted through website forms."],
      ["Use of information", "Information may be used to respond to enquiries, assess service suitability, manage referrals, and communicate with clients or professional referrers."],
      ["Confidentiality", "Clinical and legal matter information should be handled according to applicable privacy, professional, and record-keeping obligations."],
      ["Review required", "This policy is a placeholder and must be replaced or approved by the business owner and legal adviser before launch."],
    ],
  },
  terms: {
    title: "Terms and Conditions",
    intro:
      "These placeholder website terms are provided so the site has a professional legal structure. They are not legal advice.",
    sections: [
      ["Website use", "The website provides general information about Village Clinical Consultancy and its services."],
      ["No professional relationship", "Viewing this website or submitting an enquiry does not create a clinician-client, expert-client, or legal relationship."],
      ["Accuracy", "Service descriptions, pricing, and timelines should be confirmed directly with Village before relying on them."],
      ["Review required", "These terms must be reviewed by a lawyer and the business owner before publication."],
    ],
  },
  disclaimer: {
    title: "Website Disclaimer",
    intro:
      "This placeholder disclaimer helps separate general website information from professional assessment advice.",
    sections: [
      ["General information only", "Website content is general in nature and does not replace individual clinical, legal, or court-specific advice."],
      ["Assessment suitability", "Village must review each enquiry before confirming whether services are suitable or available."],
      ["Emergency support", "This website is not monitored for emergencies. People in immediate danger should contact emergency services."],
      ["Review required", "This disclaimer requires legal and business review before the site is published."],
    ],
  },
};

function getCurrentPage() {
  const page = window.location.hash.replace("#", "");
  return pageTitles[page] ? page : "home";
}

function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getCurrentPage();
      setPage(nextPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.title = pageTitles[page];
  }, [page]);

  const pageContent = useMemo(() => {
    if (page === "about") return <AboutPage />;
    if (page === "team") return <TeamPage />;
    if (page === "services") return <ServicesPage />;
    if (page === "faq") return <FaqPage />;
    if (page === "contact") return <ContactPage />;
    if (legalContent[page]) return <LegalPage pageId={page} />;
    return <HomePage />;
  }, [page]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header activePage={page} />
      <main id="main">{pageContent}</main>
      <Footer />
    </>
  );
}

function Header({ activePage }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-link" href="#home" aria-label="Village Clinical Consultancy home" title="Village Clinical Consultancy">
          <LogoLockup />
        </a>
        <nav className="nav-list" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activePage === item.id ? "active" : ""}
              href={`#${item.id}`}
              aria-current={activePage === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className={`nav-cta header-cta ${activePage === "contact" ? "active" : ""}`} href="#contact" aria-current={activePage === "contact" ? "page" : undefined}>
          Enquire
        </a>
      </div>
    </header>
  );
}

function LogoLockup() {
  return (
    <span className="logo-lockup" aria-label="Village Clinical Consultancy">
      <img src="/village-logo-wordmark.png" alt="" draggable="false" />
      <span className="logo-tagline">clinical consultancy</span>
    </span>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-heading">
        <div className="page-shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Child-centred family assessment and report services</p>
            <h1 id="home-heading">Professional family assessments with care, clarity, and balance.</h1>
            <p className="hero-text">
              Village Clinical Consultancy supports families, lawyers, and referral partners with calm multidisciplinary assessments, clear process design, and practical child-focused recommendations.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Send an enquiry
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="button secondary" href="#services">
                View services
              </a>
            </div>
            <div className="hero-highlights" aria-label="Village service highlights">
              {heroHighlights.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card" aria-label="Village assessment brand and child-centred care">
            <div className="hero-card-brand" title="Village Clinical Consultancy">
              <LogoLockup />
              <p>Multidisciplinary assessment and report services for complex family pathways.</p>
            </div>
            <figure className="hero-image-wrap">
              <img src="/village-hero-child.png" alt="Child drawing during a supportive family assessment appointment" />
            </figure>
            <div className="hero-card-footer" aria-label="Core Village trust signals">
              <span>Dyadic review</span>
              <span>Flexible appointments</span>
              <span>Clear expectations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust-section" aria-labelledby="unique-heading">
        <div className="page-shell">
          <div className="section-heading trust-heading">
            <p className="eyebrow">Why clients trust Village</p>
            <h2 id="unique-heading">The essentials should be clear before a family ever attends.</h2>
            <p>
              These are the promises that shape the assessment experience for children, parents, lawyers, and referral partners.
            </p>
          </div>
          <div className="assurance-grid">
            {assurancePanels.map((item) => (
              <AssurancePanel key={item.audience} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="snapshot-heading">
        <div className="page-shell split-section">
          <div>
            <p className="eyebrow">Snapshot</p>
            <h2 id="snapshot-heading">Support for family report and assessment pathways.</h2>
          </div>
          <div className="text-stack">
            <p>
              We provide structured family assessment services with clear intake, transparent scope setting, dyadic review, and child-focused recommendations.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 aria-hidden="true" />
                Independent family report and consultation pathways
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" />
                Flexible appointments where suitable for the family
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" />
                Communication designed for parents, lawyers, and referrers
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section band-slate" aria-labelledby="services-preview-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-preview-heading">Clear options for families and professionals.</h2>
          </div>
          <div className="service-grid compact">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.name} service={service} compact />
            ))}
          </div>
          <div className="center-action">
            <a className="button primary" href="#services">
              Explore all services
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Professional assessment grounded in care, clarity, and collaboration."
      />
      <section className="section" aria-labelledby="mission-heading">
        <div className="page-shell split-section">
          <div>
            <p className="eyebrow">Mission</p>
            <h2 id="mission-heading">To help families and professionals understand complex family circumstances with confidence.</h2>
          </div>
          <div className="text-stack">
            <p>
              Village exists to provide high quality assessment services that keep children, family context, safety, and practical recommendations at the centre of the work.
            </p>
            <p>
              The team works with lawyers, law firms, parents, and referral partners who need an independent process that feels organised, respectful, and professionally robust.
            </p>
          </div>
        </div>
      </section>
      <section className="section band-light" aria-labelledby="values-heading">
        <div className="page-shell">
          <div className="section-heading narrow">
            <p className="eyebrow">Values</p>
            <h2 id="values-heading">The standards behind the Village approach.</h2>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <div className="value-item" key={value}>
                <CheckCircle2 aria-hidden="true" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="approach-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Approach</p>
            <h2 id="approach-heading">A multidisciplinary village, not a single viewpoint.</h2>
          </div>
          <div className="feature-grid">
            <FeatureCard
              icon={HeartHandshake}
              title="Human and respectful"
              text="Families are often engaging during stressful circumstances. The process is designed to feel steady, clear, and respectful."
            />
            <FeatureCard
              icon={FileText}
              title="Structured and report-ready"
              text="Each assessment pathway is scoped with the final professional output in mind so expectations are clear from the beginning."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Independent and balanced"
              text="Dyadic review and multidisciplinary input support careful professional reflection and balanced recommendations."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Professional profiles that help families and referrers feel aligned."
      />
      <section className="section" aria-labelledby="team-heading">
        <div className="page-shell">
          <div className="section-heading narrow">
            <p className="eyebrow">Practitioners</p>
            <h2 id="team-heading">A village of specialist professionals.</h2>
          </div>
          <div className="profile-grid">
            {profiles.map((profile) => (
              <article className="profile-card" key={profile.name}>
                <div className="profile-photo" aria-label={`${profile.name} photo placeholder`}>
                  <span>{profile.initials}</span>
                </div>
                <div className="profile-content">
                  <p className="profile-role">{profile.role}</p>
                  <h3>{profile.name}</h3>
                  <p>{profile.bio}</p>
                  <div className="tag-list" aria-label={`${profile.name} focus areas`}>
                    {profile.focus.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Clear assessment services with expectations set early."
      />
      <section className="section" aria-labelledby="service-list-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Service menu</p>
            <h2 id="service-list-heading">What can be included.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section band-light" aria-labelledby="process-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2 id="process-heading">A clear pathway, stacked in the order families experience it.</h2>
          </div>
          <div className="process-stack" aria-label="Village assessment process">
            {processSteps.map((step) => (
              <article className="process-step" key={step.label}>
                <div className="process-marker">
                  <span>{step.label}</span>
                </div>
                <div className="process-card">
                  <p className="process-eyebrow">{step.eyebrow}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <div className="process-outcome">
                    <Sparkles aria-hidden="true" />
                    <span>{step.outcome}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="pricing-heading">
        <div className="page-shell pricing-layout">
          <div className="section-heading align-left">
            <p className="eyebrow">Pricing and timelines</p>
            <h2 id="pricing-heading">Transparent before booking, scoped to the matter.</h2>
            <p>
              Final fees and timeframes must be confirmed by Village before publication. This page uses professional placeholder wording so it can be reviewed without inventing fixed prices.
            </p>
          </div>
          <div className="pricing-panel">
            <InfoRow icon={Mail} label="Initial enquiry" value="Reviewed before suitability or availability is confirmed." />
            <InfoRow icon={FileText} label="Family report fees" value="Quote provided after referral scope, documents, and appointment needs are understood." />
            <InfoRow icon={Clock3} label="Indicative timeframe" value="Scheduling and delivery timelines are confirmed in writing before the assessment begins." />
            <InfoRow icon={CalendarDays} label="Flexible appointments" value="After-hours and weekend options may be available by arrangement." />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Direct answers for families, lawyers, and referrers."
      />
      <section className="section" aria-labelledby="faq-heading">
        <div className="page-shell faq-shell">
          <h2 id="faq-heading" className="visually-hidden">
            Village frequently asked questions
          </h2>
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Start with a clear, confidential enquiry."
      />
      <section className="section" aria-labelledby="contact-heading">
        <div className="page-shell contact-layout">
          <div className="contact-copy">
            <div className="contact-detail-group">
              <h2 id="contact-heading">Email</h2>
              <a href="mailto:hello@villageclinical.com.au">hello@villageclinical.com.au</a>
            </div>
            <div className="contact-detail-group">
              <h2>Operating Hours</h2>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="contact-note">After-hours and weekend appointments available upon request.</p>
            </div>
            <div className="contact-referrals">
              <h2>Referrals</h2>
              <p>
                We accept referrals directly from legal practitioners, family court orders, and private clients. All assessments are conducted by our dual-clinician team.
              </p>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <h2>Submit an Inquiry</h2>
            <div className="form-grid">
              <label>
                Full Name
                <input name="name" type="text" autoComplete="name" placeholder="Jane Doe" required />
              </label>
              <label>
                Email Address
                <input name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
              </label>
              <label>
                Phone Number
                <input name="phone" type="tel" autoComplete="tel" placeholder="0400 000 000" required />
              </label>
              <label>
                Matter Type
                <select name="matterType" required defaultValue="">
                  <option value="" disabled>
                    Select matter type
                  </option>
                  <option>Private family report</option>
                  <option>Dyadic assessment</option>
                  <option>Consultation</option>
                  <option>Stakeholder communication</option>
                  <option>Other enquiry</option>
                </select>
              </label>
              <label className="full-span">
                Message
                <textarea name="message" rows="7" placeholder="Please provide brief details about your inquiry..." required />
              </label>
            </div>
            <button className="button primary" type="submit">
              Send Inquiry
              <ArrowRight aria-hidden="true" />
            </button>
            {sent && (
              <p className="form-status" role="status">
                Thank you. Your enquiry has been noted for this website preview.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function LegalPage({ pageId }) {
  const page = legalContent[pageId];

  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} />
      <section className="section" aria-labelledby={`${pageId}-heading`}>
        <div className="page-shell legal-shell">
          <h2 id={`${pageId}-heading`}>Placeholder content for review</h2>
          {page.sections.map(([title, text]) => (
            <article key={title} className="legal-block">
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title }) {
  return (
    <section className="page-hero">
      <div className="page-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
    </section>
  );
}

function AssurancePanel({ icon: Icon, audience, title, text, proof }) {
  return (
    <article className="assurance-panel">
      <div className="assurance-topline">
        <span>{audience}</span>
        <Icon aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="proof-line">
        <CheckCircle2 aria-hidden="true" />
        <span>{proof}</span>
      </div>
    </article>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <article className="feature-card">
      <div className="card-icon">
        <Icon aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function ServiceCard({ service, compact = false }) {
  return (
    <article className={`service-card ${compact ? "compact-card" : ""}`}>
      <h3>{service.name}</h3>
      <p>{service.summary}</p>
      <ul>
        {service.includes.map((item) => (
          <li key={item}>
            <CheckCircle2 aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="info-row">
      <Icon aria-hidden="true" />
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

function CtaBand() {
  return (
    <section className="section cta-band" aria-labelledby="cta-heading">
      <div className="page-shell cta-inner">
        <div>
          <p className="eyebrow">Next step</p>
          <h2 id="cta-heading">Ready to discuss whether Village is the right fit?</h2>
        </div>
        <a className="button primary on-dark" href="#contact">
          Send an enquiry
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <LogoLockup />
          <p>
            Multidisciplinary family assessment and report services for families, lawyers, and professional referrers.
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          <a href="#about">About us</a>
          <a href="#team">Our team</a>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h2>Legal</h2>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms and Conditions</a>
          <a href="#disclaimer">Website Disclaimer</a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <p>Copyright 2026 Village Clinical Consultancy. All rights reserved.</p>
        <p>General website information only. Final legal and professional wording requires business review.</p>
      </div>
    </footer>
  );
}

export default App;
