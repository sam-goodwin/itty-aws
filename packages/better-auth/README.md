# @distilled.cloud/better-auth

Effect-native client for a self-hosted [better-auth](https://better-auth.com) server's HTTP API — email/password auth, sessions, social account linking, and account management — with exhaustive error typing and retry policies.

This is a **client** for a better-auth server you run; it does not depend on or embed better-auth itself. It talks to the handler's HTTP API (default mount path `/api/auth`).

## Installation

```bash
npm install @distilled.cloud/better-auth effect
```

## Quick Start

Sign in to obtain a session token, then re-provide it as credentials for authenticated calls. The token is sent as `Authorization: Bearer <token>`, which the server resolves when the [`bearer`](https://better-auth.com/docs/plugins/bearer) plugin is enabled.

```typescript
import * as Effect from "effect/Effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import * as BetterAuth from "@distilled.cloud/better-auth";

const baseUrl = "https://app.example.com/api/auth";

const program = Effect.gen(function* () {
  // Public call — no token needed.
  const { token } = yield* BetterAuth.signInEmail({
    email: "ada@example.com",
    password: "correct-horse-battery-staple",
  });

  // Authenticated call — provide the session token.
  const session = yield* BetterAuth.getSession({}).pipe(
    Effect.provide(BetterAuth.layer({ baseUrl, token })),
  );

  return session; // { session, user } | null
}).pipe(
  Effect.provide(BetterAuth.layer({ baseUrl })),
  Effect.provide(FetchHttpClient.layer),
);
```

Errors are typed and matchable:

```typescript
BetterAuth.signInEmail({ email, password }).pipe(
  Effect.catch("Unauthorized", () => Effect.succeed(null)),
);
```

## Configuration

Credentials come from the environment via `CredentialsFromEnv`, or are built directly with `layer()`:

```bash
BETTER_AUTH_URL=https://app.example.com/api/auth   # base URL incl. mount path
BETTER_AUTH_TOKEN=...                               # optional session token
```

`BETTER_AUTH_URL` defaults to `http://localhost:3000/api/auth`.

## Operations

Authentication: `signUpEmail`, `signInEmail`, `signInSocial`, `signOut`.
Sessions: `getSession`, `listSessions`, `revokeSession`, `revokeSessions`, `revokeOtherSessions`.
Password & email: `requestPasswordReset`, `resetPassword`, `changePassword`, `verifyPassword`, `sendVerificationEmail`, `verifyEmail`, `changeEmail`.
Account: `updateUser`, `deleteUser`, `listAccounts`, `linkSocial`, `unlinkAccount`.
Health: `ok`.

Only the core endpoints (present with email/password + base session/social handling) are covered — plugin routes (`admin`, `organization`, `apiKey`, `twoFactor`, `magicLink`, `passkey`, ...) are not.

## License

Apache-2.0
