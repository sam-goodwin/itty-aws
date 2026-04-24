# @distilled.cloud/axiom

Effect-native [Axiom](https://axiom.co) SDK generated from Axiom's [public OpenAPI specification](https://github.com/axiomhq/docs/tree/main/restapi/versions). Covers the control-plane API (`v2`), the edge ingest API (`v1-edge-ingest`), and the edge query API (`v1-edge-query`) with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/axiom effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { getDatasets } from "@distilled.cloud/axiom/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/axiom";

const program = Effect.gen(function* () {
  const datasets = yield* getDatasets({});
  return datasets;
});

const AxiomLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(AxiomLive), Effect.runPromise);
```

## Configuration

Set the following environment variables:

```bash
AXIOM_TOKEN=your-api-token          # or AXIOM_API_KEY
AXIOM_ORG_ID=your-org-id            # required for Personal Access Tokens
AXIOM_URL=https://api.axiom.co      # optional: override for self-hosted / regional edge
```

Create an API token in the [Axiom console](https://app.axiom.co/settings/api-tokens) under **Settings > API Tokens**. For a Personal Access Token, set `AXIOM_ORG_ID` to the organization you want to operate on — it's sent on every request as the `X-Axiom-Org-ID` header.

## Error Handling

```typescript
import { Effect } from "effect";
import { getDataset } from "@distilled.cloud/axiom/Operations";

getDataset({ id: "missing" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    UnknownAxiomError: (e) => Effect.fail(new Error(`Unknown: ${e.message}`)),
  }),
);
```

## Services

- **Datasets** — list, create, get, update, delete datasets and trim/vacuum them
- **Ingest (edge)** — `ingestToDataset` — stream JSON/NDJSON/CSV events into a dataset
- **Query (edge)** — `queryApl`, `batchQuery`, plus metric/tag discovery endpoints
- **Monitors & Notifiers** — manage alerting rules and delivery channels
- **Dashboards, Views, Starred** — saved dashboards, views, and starred queries
- **Annotations** — create and manage event annotations
- **Users, Groups, Roles** — user lifecycle and access control
- **API Tokens** — create, list, regenerate, and revoke tokens
- **Organizations & Billing** — organization settings and billing endpoints
- **Virtual Fields** — computed fields defined per dataset

## License

MIT
