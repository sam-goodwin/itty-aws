# @distilled.cloud/clerk

Effect-native Clerk SDK generated from the official Clerk OpenAPI specifications. Covers both APIs Clerk publishes:

- **Platform API** — workspace / application management (private beta).
- **Backend API** — per-instance resources: users, sessions, organizations, JWTs, OAuth, etc.

Spec source: <https://github.com/clerk/openapi-specs>.

## Installation

```bash
npm install @distilled.cloud/clerk effect
```

## Quick Start

The Backend API covers the operations most server-side integrations need. Authenticate with your instance secret key (`sk_test_...` / `sk_live_...`):

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Backend } from "@distilled.cloud/clerk/Operations";
import { BackendCredentialsFromEnv } from "@distilled.cloud/clerk";

const program = Effect.gen(function* () {
  const instance = yield* Backend.GetInstance({});
  return instance;
});

const ClerkLive = Layer.mergeAll(
  FetchHttpClient.layer,
  BackendCredentialsFromEnv,
);

program.pipe(Effect.provide(ClerkLive), Effect.runPromise);
```

Platform API operations are namespaced under `Platform` and require the platform access token credential:

```typescript
import { Platform } from "@distilled.cloud/clerk/Operations";
import { PlatformCredentialsFromEnv } from "@distilled.cloud/clerk";

const apps = Platform.PlatformListApplications({});
// provide PlatformCredentialsFromEnv (and FetchHttpClient.layer)
```

## Configuration

Set whichever environment variable matches the API(s) you call:

```bash
# Backend API (per-instance secret key)
CLERK_SECRET_KEY=sk_test_...

# Platform API (workspace access token, private beta)
CLERK_PLATFORM_API_TOKEN=...
```

`CredentialsFromEnv` provides both layers at once if you use both APIs in the same program.

## Error Handling

All Clerk error responses share the same envelope (`{ errors: [{ message, long_message, code, meta }], clerk_trace_id }`). The SDK maps HTTP status codes to the standard typed errors from `@distilled.cloud/core` and falls back to `UnknownClerkError` for anything unrecognised:

```typescript
import { Effect } from "effect";
import { Backend } from "@distilled.cloud/clerk/Operations";
import { NotFound, UnknownClerkError } from "@distilled.cloud/clerk";

Backend.GetUser({ user_id: "user_missing" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    UnknownClerkError: (e: UnknownClerkError) =>
      Effect.fail(new Error(`Clerk error: ${e.message ?? "unknown"}`)),
  }),
);
```

## Services

The Backend API surface is large; here are the main groupings:

- **Users** — list, create, get, update, delete; ban/unban; lock/unlock; email/phone management
- **Sessions / Clients / Sign-in / Sign-up** — session lifecycle, JWT templates, sign-in tokens, OAuth access tokens
- **Organizations** — organizations, memberships, invitations, domains, roles, permissions
- **Allow-list / Block-list / Waitlist** — identifier-based access controls
- **OAuth applications & Enterprise connections** — SSO and OAuth app management
- **Billing & Commerce** — plans, prices, subscription items, statements, credit balances
- **API keys / M2M tokens** — service account credentials

Platform API operations are prefixed with `Platform*` and cover applications, application instances, domains, deployments, and application transfers.

Browse the full list of operations in `src/operations/{platform,backend}/`.

## License

MIT
