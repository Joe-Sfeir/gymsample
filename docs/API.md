# API

`POST /api/trial-bookings` uses `trialBookingSchema`; `POST /api/contact` uses `contactSchema`. Success includes `ok`, `id`, and mock mode. Validation returns 400; repository failure returns 503.

Before live use, add production rate limiting, origin controls, provider delivery, retention controls, and monitoring. Never log or send limitation notes to analytics, URLs, WhatsApp, or error breadcrumbs.
