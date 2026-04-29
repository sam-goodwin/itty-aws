# @distilled.cloud/workos

Effect-native WorkOS SDK generated from the [WorkOS OpenAPI specification](https://workos.com/docs/reference). Manage organizations, directories, SSO connections, user management, audit logs, and more — with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/workos effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { OrganizationsControllerList } from "@distilled.cloud/workos/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/workos";

const program = Effect.gen(function* () {
  const result = yield* OrganizationsControllerList({});
  return result.data;
});

const WorkosLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(WorkosLive), Effect.runPromise);
```

## Configuration

Set the following environment variables:

```bash
WORKOS_API_KEY=sk_example_123456789
# Optional — override the default base URL (https://api.workos.com)
WORKOS_API_URL=https://api.workos-test.com
```

Create an API key in the [WorkOS dashboard](https://dashboard.workos.com) under **API Keys**. WorkOS exposes both production (`https://api.workos.com`) and staging (`https://api.workos-test.com`) environments — set `WORKOS_API_URL` to target staging.

## Error Handling

```typescript
import { Effect } from "effect";
import { OrganizationsControllerFind } from "@distilled.cloud/workos/Operations";

OrganizationsControllerFind({ id: "org_missing" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    Unauthorized: (e) => Effect.fail(new Error(`Auth: ${e.message}`)),
    UnknownWorkosError: (e) => Effect.fail(new Error(`Unknown: ${e.message}`)),
  }),
);
```

## Services

- **API Keys** — validate and delete environment API keys
- **Applications & Connect** — manage Connect Applications, credentials, and authorized applications
- **Audit Logs** — emit events, manage validators, exports, and retention
- **Authorization** — roles, permissions, resources, and role assignments
- **Connections** — SSO connections (SAML, OIDC, OAuth)
- **Directories** — directory sync, groups, and users
- **Events** — query events and event streams
- **Feature Flags** — manage flags, targets, and organization/user scoping
- **Groups** — organize users into groups with memberships
- **Multi-Factor Auth** — factors and challenge verification
- **Organizations** — organizations, domains, memberships, and external IDs
- **Radar** — fraud detection assess and list management
- **SSO** — authorize, token, profile, JWKS, and logout endpoints
- **User Management** — users, sessions, invitations, magic auth, password resets, email verification, and JWT templates
- **Webhooks** — webhook endpoint configuration
- **Widgets & Portal Sessions** — issue widget tokens and admin portal sessions

## License

MIT
