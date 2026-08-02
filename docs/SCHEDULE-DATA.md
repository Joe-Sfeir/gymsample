# Schedule Data

Samples in `content/classes.ts` are marked mock. Dates use YYYY-MM-DD, times use HH:mm, and the default IANA zone is `Asia/Beirut`. Statuses are Available, Nearly full, Full, Waitlist, and Cancelled.

Live adapters must calculate capacity server-side, preserve cancellation/replacement data, and distinguish recurring sessions. Filters are in `lib/schedule/filter.ts`; calendar exports are in `lib/calendar/ics.ts`. Export does not confirm a booking.
