# @distilled.cloud/railway

Effect-native SDK for the [Railway GraphQL API](https://docs.railway.com/integrations/api),
generated from the introspection schema mirrored in
[distilled-spec-railway](https://github.com/alchemy-run/distilled-spec-railway).

Railway's public API is a single GraphQL endpoint
(`https://backboard.railway.com/graphql/v2`). Each query and mutation maps to
one generated operation with a typed input (the GraphQL variables) and a typed
output (the selection set).

Operations are named verb-first: queries are prefixed with `get`
(`workspacePolicy` → `getWorkspacePolicy`) and mutations lead with their verb
(`trustedDomainCreate` → `createTrustedDomain`).

## Usage

```ts
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import * as Railway from "@distilled.cloud/railway";

const MainLayer = Layer.merge(
  Railway.CredentialsFromEnv, // reads RAILWAY_API_TOKEN
  FetchHttpClient.layer,
);

const program = Effect.gen(function* () {
  const user = yield* Railway.getMe({});
  const projects = yield* Railway.getProjects({ first: 10 });
  return { user, projects };
});

Effect.runPromise(program.pipe(Effect.provide(MainLayer)));
```

## Authentication

Set one of (see [token types](https://docs.railway.com/integrations/api)):

- `RAILWAY_API_TOKEN` — account or workspace token, sent as
  `Authorization: Bearer`
- `RAILWAY_PROJECT_TOKEN` — project token scoped to a single environment,
  sent as `Project-Access-Token`

`RAILWAY_API_URL` optionally overrides the API host (defaults to
`https://backboard.railway.com`).

## Error patching

Railway's schema does not declare errors. Operations initially fail with
`UnknownRailwayError`; as errors are observed they're recorded as patches in
`patches/{operationName}.json` and baked into each operation's typed error
channel on regeneration. See [patches/README.md](./patches/README.md) for the
format and workflow.

## Regenerating

```bash
bun run specs:fetch   # fetch the spec submodule
bun run generate      # regenerate src/operations from specs + patches
```
