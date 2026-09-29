# Village Clinical Consultancy Website

Polished MVP website for Village Clinical Consultancy, built as a Vercel-ready React/Vite project.

## Setup

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
```

Preview the built site locally with:

```bash
npm run preview
```

## Enquiry Email

The Contact form posts to the Vercel function at `/api/enquiry`, which sends the enquiry to `admin@villageclinicalconsultancy.com.au` through Resend. Set these server-side environment variables in the Vercel project:

```text
RESEND_API_KEY=your_resend_api_key
VCC_FROM_EMAIL=enquiries@villageclinicalconsultancy.com.au
```

Verify the sending domain in Resend before using `VCC_FROM_EMAIL`. The visitor's email is used as the reply-to address; visitors can submit from any email domain. The form requires a name, email, phone number, matter type, and message. `npm run dev` serves the Vite frontend only; use `vercel dev` to exercise the email function locally.

## Deployment

This project is ready for Vercel:

1. Import the repository into Vercel.
2. Use the default Vite settings.
3. Build command: `npm run build`.
4. Output directory: `dist`.

## Project Structure

```text
.
├── public/                  # Web assets used by the site
├── src/
│   ├── App.jsx              # Site pages, content, and components
│   ├── main.jsx             # React entry point
│   └── styles.css           # Brand system and responsive styling
├── index.html               # HTML shell and SEO metadata
├── package.json             # Scripts and dependencies
└── vite.config.js           # Vite configuration
```

## Content Notes

The team profiles, contact details, pricing, timelines, and legal pages include placeholder wording for business review. They should be confirmed by Village Clinical Consultancy and reviewed by a lawyer before publication.
