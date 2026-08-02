# Backend Integration

Contracts are in `lib/repositories/interfaces.ts`; mock adapters use typed content; services validate and normalize errors. Add a live adapter and select it in `lib/repositories/index.ts` while preserving mock mode.

Supabase/PostgreSQL, Firebase, custom REST/GraphQL, gym software, or Google Calendar can implement these interfaces. `lib/api/rest-client.ts` supports REST. `prisma/schema.prisma` is an optional reference only: Prisma is not installed and migrations are not applied.
