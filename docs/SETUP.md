# Setup

Requirements: Node.js 20+, npm, and no mandatory external service.

Run `npm ci`, then `npm run dev`. Validate with `npm run lint`, `npm run test`, and `npm run build`. Mock mode is enabled unless `MOCK_DATA_MODE=false`. Use deployment settings based on `.env.example`. Never expose database, email-provider, analytics-server, rate-limit, monitoring, or map-provider secrets with `NEXT_PUBLIC_`.
