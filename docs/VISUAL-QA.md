# Visual QA — FORGE

Checked against the local production build on 24 August 2026.

## Viewports

- 1440 × 900: homepage hero and navigation
- 1280 × 800: memberships and pricing controls
- 768 × 1024: facilities plan and tablet navigation
- 390 × 844: homepage, mobile menu, schedule, and trial booking

## Interaction and accessibility evidence

- Mobile menu opens as a labelled dialog and exposes the full navigation.
- Schedule filters announce the result count; filtering to Engine reduced the list to one demonstration session.
- Trial form validation and a complete successful submission were exercised in the rendered production build.
- The success state explicitly confirms that no data was retained and no appointment was created.
- WhatsApp opens Spline's real contact number, `96176300011`, with concept-specific copy. The demo-bot number is not present in this project.
- No horizontal overflow at 390 or 768 pixels.
- Production browser console: zero errors and zero warnings.
- Reduced-motion handling is present in both the motion controller and CSS.
- All internal links exposed by the homepage returned HTTP 200.

## Bounded defect pass

The first pass found operational-sounding consent copy and a visible “mock endpoint” label. Both were replaced with precise, non-retaining demonstration language, tests were updated, and the production build was confirmed again.

