# Routing

Main URLs are explicit App Router routes. Only `/classes/[slug]` is dynamic and unknown slugs use `notFound()`. Root `app/[[...slug]]` and `app/[...slug]` are prohibited.

Future localization can add explicit `/en`, `/ar`, and `/fr` trees or a required validated `[locale]` segment. Do not use an optional root catch-all. Shared components, locale content modules, and `localeDirection` support reuse and RTL.
