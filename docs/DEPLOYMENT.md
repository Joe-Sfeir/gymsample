# Deployment

Vercel: import the repository, keep detected Next.js settings, add reviewed environment values, deploy a preview, test keyboard/forms/consent, and set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin.

Other hosts: use Node.js 20+, run `npm ci`, `npm run test`, `npm run build`, then `npm run start` behind HTTPS. Static-only hosting is unsuitable because route handlers are used.
