# @distilled.cloud/turbopuffer

Effect-native Turbopuffer SDK generated from the [Turbopuffer OpenAPI specification](https://github.com/turbopuffer/turbopuffer-openapi). Covers namespace management, document writes, vector and full-text search, and schema management.

## Installation

```bash
npm install @distilled.cloud/turbopuffer effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { ListNamespaces } from "@distilled.cloud/turbopuffer/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/turbopuffer";

const program = Effect.gen(function* () {
  const result = yield* ListNamespaces({});
  return result.namespaces;
});

const TurbopufferLive = Layer.mergeAll(
  FetchHttpClient.layer,
  CredentialsFromEnv,
);

program.pipe(Effect.provide(TurbopufferLive), Effect.runPromise);
```

## Configuration

Set the following environment variables:

```bash
TURBOPUFFER_API_KEY=tpuf_...
TURBOPUFFER_REGION=gcp-us-central1  # optional, defaults to gcp-us-central1
TURBOPUFFER_BASE_URL=https://{region}.turbopuffer.com  # optional
```

Find your API key in the [Turbopuffer dashboard](https://app.turbopuffer.com).

For programmatic configuration use `fromToken`:

```typescript
import { fromToken } from "@distilled.cloud/turbopuffer";

const layer = fromToken("tpuf_...", { region: "aws-us-east-1" });
```

## Error Handling

Turbopuffer errors are dispatched by HTTP status code:

```typescript
import { QueryNamespace } from "@distilled.cloud/turbopuffer/Operations";

QueryNamespace({ namespace: "my-ns", body: { vector: [0.1, 0.2] } }).pipe(
  Effect.catchTags({
    NotFound: (e) => Effect.fail(new Error(`Namespace not found: ${e.message}`)),
    Unauthorized: (e) => Effect.fail(new Error(`Auth error: ${e.message}`)),
    TooManyRequests: (e) => Effect.fail(new Error(`Rate limited: ${e.message}`)),
    UnknownTurbopufferError: (e) =>
      Effect.fail(new Error(`Unknown error: ${e.message}`)),
  }),
);
```

## Operations

- **ListNamespaces** — list all namespaces (paginated)
- **WriteNamespace** — upsert or delete documents in a namespace
- **DeleteNamespace** — delete an entire namespace
- **QueryNamespace** — vector and full-text search
- **ExplainQuery** — explain a query plan
- **GetNamespaceSchema** — retrieve attribute schema
- **UpdateNamespaceSchema** — update attribute schema
- **GetNamespaceMetadata** — retrieve namespace metadata
- **UpdateNamespaceMetadata** — update metadata configuration (e.g. pinning)
- **HintCacheWarm** — signal turbopuffer to prepare for low-latency requests
- **DebugRecall** — evaluate recall quality

## License

Apache-2.0
