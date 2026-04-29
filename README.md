# Waleed Amazon Consultant — Landing Site

A minimal Next.js 15 + Tailwind landing page with a privacy policy, designed to be linked from a Meta (Facebook/Instagram) lead form.

## What this is

Two pages:

- `/` — A simple landing page (hero, services grid, contact info, footer).
- `/privacy-policy` — The full 20-section privacy policy required by Meta for lead-form ads.

No analytics, no tracking, no contact form. Just static content that renders fast on mobile.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

To verify a production build:

```bash
npm run build
npm run start
```

## What to replace before going live

The privacy policy page uses **highlighted yellow placeholders** for fields you still need to fill in. Open `app/privacy-policy/page.tsx` and search for these tokens:

- `[BUSINESS_NAME]` (Section 1)
- `[EMAIL]` (Sections 10, 16)
- `[CITY]` (Sections 19, 20)

Real values are already inlined in a few spots. If any of these change, find/replace across the project:

- `Waleed Amazon Consultant` — business name
- `Waleed Hassan` — owner name
- `Bahawalnagar` — city
- `waleed.hassan@ecompearls.org` — contact email

These appear in `app/layout.tsx` (metadata), `app/page.tsx` (home page), and `app/privacy-policy/page.tsx`.

## Deploy to Vercel

1. Initialize a Git repo and push to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   git push -u origin main
   ```

2. Go to <https://vercel.com> → **Add New** → **Project**.
3. **Import** your GitHub repo. Vercel auto-detects Next.js — no config needed.
4. Click **Deploy**. After ~30 seconds you'll get a URL like `https://your-repo.vercel.app`.
5. Copy that URL.

## Custom domain

In Vercel project settings → **Domains** → add your domain and follow the DNS instructions Vercel shows. Propagation usually takes a few minutes.

## Privacy policy URL for Meta

After deploy, the privacy policy lives at:

```
https://<your-domain>/privacy-policy
```

That's the URL to paste into the **Privacy Policy URL** field when you set up the Meta lead form.
