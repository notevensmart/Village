import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartHandshake,
  ReceiptText,
  ShieldCheck,
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

const trustPoints = [
  {
    title: "therapeutic",
    text: "Village Clinical Consultancy (VCC) is a collective of therapeutic, trauma-informed, strength-based, systems-conscious mental health clinicians from across the spectrum, including psychologists, counsellors, social workers, psychotherapists, and mental health social workers.",
    icon: HeartHandshake,
  },
  {
    title: "collaboratively",
    text: "VCC brings all these professions together to work collaboratively to ensure a high standard of clinical practice for those it works with.",
    icon: FileText,
  },
  {
    title: "specialist lens",
    text: "Every professional linked with VCC holds their own specialist lens, which contributes to their communities of practice through learning and internal upskilling, supporting all those in our Village and, by extension, the Village's client base.",
    icon: ShieldCheck,
  },
];

const heroHighlights = [
  {
    label: "psychologists",
    text: "counsellors",
  },
  {
    label: "social workers",
    text: "psychotherapists",
  },
  {
    label: "mental health",
    text: "social workers",
  },
];

const aboutParagraphs = [
  "Village Clinical Consultancy (VCC) is a collective of therapeutic, trauma-informed, strength-based, systems-conscious mental health clinicians from across the spectrum, including psychologists, counsellors, social workers, psychotherapists, and mental health social workers.",
  "VCC brings all these professions together to work collaboratively to ensure a high standard of clinical practice for those it works with.",
  "Every professional linked with VCC holds their own specialist lens, which contributes to their communities of practice through learning and internal upskilling, supporting all those in our Village and, by extension, the Village's client base.",
];

const services = [
  {
    name: "Child Impact Report (Early Intervention)",
    fee: "$4,500 + GST",
    delivery: "10 days",
    includes: [
      "Review of up to 150 pages",
      "Focused observations and interviews",
      "Interviews with two caregivers",
      "One face-to-face interview",
      "Parent–child observations (30 minutes per parent)",
      "Short-form report",
    ],
  },
  {
    name: "Standard Family Report Package",
    fee: "$7,500 + GST",
    delivery: "4–6 weeks",
    includes: [
      "Review of up to 300 pages",
      "All inclusions from the Child Impact Report",
      "Additional 1-hour parent telehealth sessions (if required)",
      "Child interviews (up to two children, 30–60 minutes each, subject to consent)",
    ],
  },
  {
    name: "Full Family Report – Complex / Blended Family Assessment Package",
    fee: "$11,000 + GST",
    delivery: "6–8 weeks",
    includes: [
      "All inclusions from the Standard Family Report",
      "Interviews with two additional adults",
      "Psychometric assessments of care providers",
      "Expanded risk assessment",
      "Clinical recommendations",
    ],
  },
];

const additionalServices = [
  ["Subpoena & Document Review", "$250/hour"],
  ["Addendum Report", "$1,500–$2,500"],
  ["Court Attendance (Full Day)", "$1,000/day"],
  ["Court Attendance (Half Day)", "$600/half-day"],
  ["Additional Interviewee", "$1,100/person"],
];

const profiles = [
  {
    initials: "SI",
    name: "Siri Indukuri",
    pronouns: "She/Her",
    heading: "Siri Indukuri (She/Her)",
    group: "Our Team",
    qualifications: ["clinical counsellor and psychotherapist"],
    experience: [
      "Siri is a clinical counsellor and psychotherapist who works with adolescents and young adults, as well as families and parents navigating complex emotional and relational experiences.",
    ],
    expertiseIntro: "She specialises in supporting individuals who are:",
    expertise: ["Neurodivergent", "Experiencing anxiety", "Experiencing depression"],
    biography:
      "Siri approaches therapy with warmth, curiosity, and an understanding that healing does not happen in isolation, but within the contexts and communities people move through every day.",
  },
  {
    initials: "TG",
    name: "Thomas Gould",
    pronouns: "He/Him",
    heading: "Thomas Gould (He/Him)",
    group: "Our Team",
    qualificationIntro: "Thomas Gould is a Mental Health Accredited Social Worker with:",
    qualifications: ["Clinical Masters in Family Therapy", "Master of Social Work", "Bachelor of Human Services"],
    experience: [
      "Thomas has worked for over 15 years with individuals and families experiencing complex trauma across both community and private sectors.",
    ],
    experienceIntro: "His experience includes:",
    experienceItems: ["Direct clinical work", "Training facilitation", "Mediation", "Team leadership", "Statewide program practice leadership"],
    expertiseIntro: "Thomas has specialist experience in:",
    expertise: ["Sexual abuse", "Family systems", "Family violence"],
    biography:
      "Thomas has worked for over 15 years with individuals and families experiencing complex trauma across both community and private sectors.",
  },
  {
    initials: "AK",
    name: "Angela Karamalakis",
    pronouns: "She/Her",
    heading: "Angela Karamalakis (She/Her)",
    group: "Consultants",
    qualificationIntro: "Angela holds:",
    qualifications: ["Masters of Professional Psychology", "Masters of Professional Psychology Practice"],
    experience: [
      "She has worked in the field for over 9 years.",
      "Angela has worked with:",
    ],
    workedWith: ["Parents", "Children", "Family systems"],
    workIncludes: ["Clinical support", "Psychoeducation", "Psychometric testing", "Diagnostic assessments"],
    roles: ["Private practice", "Neurodiverse specialist psychological support", "Team leadership", "Allied health management"],
    expertiseIntro:
      "Angela's direct practice focuses on supporting and scaffolding parents by providing strategies and upskilling to help them achieve their goals.",
    expertise: ["Parents", "Children", "Family systems"],
    biography:
      "Angela's direct practice focuses on supporting and scaffolding parents by providing strategies and upskilling to help them achieve their goals.",
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
            <p className="eyebrow">Village Clinical Consultancy (VCC)</p>
            <h1 id="home-heading">Village Clinical Consultancy (VCC)</h1>
            <p className="hero-text">{aboutParagraphs[0]}</p>
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
            <figure className="hero-image-wrap">
              <img src="/village-hero-child.png" alt="Child drawing during a supportive family assessment appointment" />
            </figure>
            <div className="hero-card-brand" title="Village Clinical Consultancy">
              <LogoLockup />
              <p>{aboutParagraphs[1]}</p>
            </div>
            <div className="hero-card-footer" aria-label="Core Village trust signals">
              <span>About Us</span>
              <span>Our Team</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust-section" aria-labelledby="unique-heading">
        <div className="page-shell">
          <div className="section-heading trust-heading">
            <p className="eyebrow">About Us</p>
            <h2 id="unique-heading">About Us</h2>
          </div>
          <div className="trust-grid">
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <article className="trust-point" key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-preview" aria-labelledby="services-preview-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-preview-heading">Services</h2>
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
        eyebrow="About Us"
        title="Village Clinical Consultancy (VCC)"
      />
      <section className="section" aria-labelledby="mission-heading">
        <div className="page-shell split-section">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 id="mission-heading">Village Clinical Consultancy (VCC)</h2>
          </div>
          <div className="text-stack">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="approach-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">About Us</p>
            <h2 id="approach-heading">About Us</h2>
          </div>
          <div className="feature-grid">
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <FeatureCard key={title} icon={Icon} title={title} text={text} />
            ))}
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
        eyebrow="Our Team"
        title="Our Team"
      />
      <section className="section" aria-labelledby="team-heading">
        <div className="page-shell">
          <div className="section-heading narrow">
            <p className="eyebrow">Our Team</p>
            <h2 id="team-heading">Our Team</h2>
          </div>
          <div className="profile-grid">
            {profiles.map((profile) => (
              <ProfileCard key={profile.name} profile={profile} />
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
        eyebrow="Services"
        title="Services"
      />
      <section className="section" aria-labelledby="service-list-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="service-list-heading">Services</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section band-light" aria-labelledby="additional-services-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Additional Services</p>
            <h2 id="additional-services-heading">Additional Services</h2>
          </div>
          <AdditionalServicesTable />
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

function ProfileCard({ profile }) {
  return (
    <article className="profile-card professional-profile">
      <div className="profile-photo" aria-label={`${profile.name} profile marker`}>
        <span>{profile.initials}</span>
      </div>
      <div className="profile-content">
        <p className="profile-role">{profile.group}</p>
        <h3>{profile.heading}</h3>
        <dl className="profile-meta">
          <div>
            <dt>Name</dt>
            <dd>{profile.name}</dd>
          </div>
          <div>
            <dt>Pronouns</dt>
            <dd>{profile.pronouns}</dd>
          </div>
        </dl>
        <div className="profile-section">
          <h4>Qualifications</h4>
          {profile.qualificationIntro && <p>{profile.qualificationIntro}</p>}
          <ul className="check-list">
            {profile.qualifications.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-section">
          <h4>Experience and Expertise</h4>
          {profile.experience.map((item) => (
            <p key={item}>{item}</p>
          ))}
          {profile.experienceIntro && <p>{profile.experienceIntro}</p>}
          {profile.workedWith && <ProfileList items={profile.workedWith} />}
          {profile.workIncludes && (
            <>
              <p>Her work includes:</p>
              <ProfileList items={profile.workIncludes} />
            </>
          )}
          {profile.roles && (
            <>
              <p>She has held roles in:</p>
              <ProfileList items={profile.roles} />
            </>
          )}
          {profile.experienceItems && <ProfileList items={profile.experienceItems} />}
        </div>
        <div className="profile-section">
          <h4>Areas of Expertise</h4>
          <p>{profile.expertiseIntro}</p>
          <div className="tag-list" aria-label={`${profile.name} areas of expertise`}>
            {profile.expertise.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="profile-section">
          <h4>Biography</h4>
          <p>{profile.biography}</p>
        </div>
      </div>
    </article>
  );
}

function ProfileList({ items }) {
  return (
    <ul className="check-list compact-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ServiceCard({ service, compact = false }) {
  return (
    <article className={`service-card ${compact ? "compact-card" : ""}`}>
      <div className="service-card-topline">
        <ReceiptText aria-hidden="true" />
        <span>Services</span>
      </div>
      <h3>{service.name}</h3>
      <div className="service-facts">
        <div>
          <span>Fee:</span>
          <strong>{service.fee}</strong>
        </div>
        <div>
          <span>Delivery:</span>
          <strong>{service.delivery}</strong>
        </div>
      </div>
      <h4>Includes</h4>
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

function AdditionalServicesTable() {
  return (
    <div className="additional-services-table" role="region" aria-labelledby="additional-services-heading">
      <table>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Fee</th>
          </tr>
        </thead>
        <tbody>
          {additionalServices.map(([service, fee]) => (
            <tr key={service}>
              <td>{service}</td>
              <td>{fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
        <a className="button primary" href="#contact">
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
