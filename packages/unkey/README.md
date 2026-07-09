# @distilled.cloud/unkey

Effect-native Unkey SDK generated from Unkey's OpenAPI 3.1 specification mirrored in `specs/distilled-spec-unkey`.

## Installation

```bash
npm install @distilled.cloud/unkey effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "@distilled.cloud/unkey";
import { permissionsListRoles } from "@distilled.cloud/unkey/operations";

const program = Effect.gen(function* () {
  const response = yield* permissionsListRoles({ limit: 10 });
  return response.data;
});

const UnkeyLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(UnkeyLive), Effect.runPromise);
```

## Configuration

Set the following environment variable:

```bash
UNKEY_API_KEY=your-root-key
```

The SDK sends this root key as `Authorization: Bearer <root-key>` to `https://api.unkey.com`.

## Error Handling

```typescript
import { Effect } from "effect";
import { apisGetApi } from "@distilled.cloud/unkey/operations";

apisGetApi({ apiId: "api_missing" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    UnknownUnkeyError: (error) =>
      Effect.fail(new Error(`Unknown Unkey error: ${error.message}`)),
  }),
);
```

## Services

- Analytics - query key verification analytics
- APIs - create, get, delete, and list keys for API namespaces
- Deployments - create and inspect deployments
- Identities - create, list, get, update, and delete identities
- Keys - create, verify, reroll, update, delete, and manage key roles and permissions
- Permissions - manage RBAC permissions and roles
- Portal - create and exchange portal sessions
- Rate limiting - check limits and manage namespace overrides
- Liveness - check API health

## License

MIT
