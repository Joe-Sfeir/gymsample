# FORGE Training Club

Production-oriented Next.js website for a Lebanese strength and conditioning gym. It supports trial requests, class discovery, membership and WhatsApp inquiries, and future backend integration. Unknown business content is visibly labelled as placeholder data.

## Stack

Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4, React Hook Form, Zod, Vitest, and Testing Library. Server Components are the default; client boundaries are limited to interaction.

## Local development

1. Install Node.js 20+ and npm.
2. Run `npm install`.
3. Configure deployment values from `.env.example`; never commit `.env.local`.
4. Run `npm run dev` and open http://localhost:3000.

Checks: `npm run lint`, `npm run test`, and `npm run build`. Production: `npm run build` then `npm run start`.

## Edit the site

- Identity, contacts, map, hours, WhatsApp, and locales: `config/gym.ts`
- Classes and sample sessions: `content/classes.ts`
- Trainers: `content/trainers.ts`
- Memberships: `content/memberships.ts`
- Facilities, FAQ, rules, first visit: `content/site.ts`
- Replace approved images in `public/images/` and retain dimensions and alt text.

See the guides in `docs/` for content, design, schedule data, APIs, backend adapters, legal review, accessibility, routing, and deployment. Mock mode is the safe default. Repository interfaces live in `lib/repositories/interfaces.ts`. WhatsApp uses `NEXT_PUBLIC_WHATSAPP_NUMBER`; map configuration is centralized in `config/gym.ts`.

English placeholder copy is active. Arabic and French modules and an RTL direction utility are prepared. Locale-prefixed routes can be added later as documented without a root optional catch-all.

Vercel: import the repository, set environment values, and use detected Next.js settings. Other Node hosts: run `npm ci`, `npm run build`, and `npm run start` behind HTTPS.

Folders: `app/` routes/APIs; `components/` UI; `config/` business settings; `content/` typed content; `lib/` domain and backend layers; `types/` contracts; `tests/` checks; `docs/` guides; `prisma/` optional reference.

`app/[[...slug]]` and root `app/[...slug]` are prohibited: explicit routes preserve ownership, metadata, predictable 404 behavior, and conflict detection. Only `app/classes/[slug]` is dynamic.

# gymsample
