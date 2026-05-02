# @distilled.cloud/railway

Effect-native Railway SDK generated from the [Railway public GraphQL API](https://docs.railway.com/reference/public-api). Manage projects, environments, services, deployments, variables, volumes, and more with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/railway effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { projects } from "@distilled.cloud/railway/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/railway";

const program = Effect.gen(function* () {
  const result = yield* projects({});
  return result;
});

const RailwayLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(RailwayLive), Effect.runPromise);
```

## Configuration

Set the following environment variable:

```bash
RAILWAY_API_TOKEN=your-api-token
```

Create an API token in the [Railway dashboard](https://railway.com/account/tokens) under **Account Settings > Tokens**. `RAILWAY_TOKEN` is also accepted as a fallback. Override the API host with `RAILWAY_API_URL` if needed (defaults to `https://backboard.railway.com`).

## Error Handling

```typescript
import { Effect } from "effect";
import { project } from "@distilled.cloud/railway/Operations";
import { NotFound, UnknownRailwayError } from "@distilled.cloud/railway";

project({ id: "missing" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    UnknownRailwayError: (e) => Effect.fail(new Error(`Unknown: ${e.message}`)),
  }),
);
```

## Services

Railway exposes a single GraphQL endpoint. Operations are grouped by domain:

- **Projects** — `projects`, `project`, `projectCreate`, `projectUpdate`, `projectDelete`
- **Environments** — `environment`, `environments`, `environmentCreate`, `environmentDelete`
- **Services** — `service`, `serviceCreate`, `serviceUpdate`, `serviceDelete`, `serviceInstanceUpdate`
- **Deployments** — `deployment`, `deployments`, `deploymentTriggerCreate`, `deploymentRedeploy`, `deploymentRestart`, `deploymentRollback`, `deploymentRemove`
- **Variables** — `variables`, `variableUpsert`, `variableDelete`, `variableCollectionUpsert`
- **Volumes** — `volumeCreate`, `volumeUpdate`, `volumeDelete`, `volumeInstanceUpdate`, `volumeInstanceBackupCreate`, `volumeInstanceBackupRestore`
- **Custom Domains** — `customDomain`, `customDomainCreate`, `customDomainUpdate`, `customDomainDelete`
- **Workspaces & Teams** — `workspaceUpdate`, `workspaceDelete`, `workspaceUserInvite`, `workspaceUserRemove`
- **API Tokens** — `apiTokens`, `apiTokenCreate`, `apiTokenDelete`
- **Logs & Metrics** — `buildLogs`, `deploymentLogs`, `httpLogs`, `metrics`

See `src/operations/` for the full list of 275 generated operations.

## License

MIT
