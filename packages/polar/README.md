# @distilled.cloud/polar

Effect-native [Polar](https://polar.sh) billing SDK, generated from the [Polar OpenAPI spec](https://api.polar.sh/openapi.json). Products, prices, subscriptions, customers, meters, events, checkouts, and benefits with exhaustive error typing, retry policies, and streaming pagination.

## Installation

```bash
npm install @distilled.cloud/polar effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as Stream from "effect/Stream";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "@distilled.cloud/polar";
import { organizationslist } from "@distilled.cloud/polar";

const PolarLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

const program = organizationslist({ limit: 20 }).pipe(Effect.provide(PolarLive));
```

Errors are typed and matchable:

```typescript
import { subscriptionsget } from "@distilled.cloud/polar";

subscriptionsget({ id }).pipe(
  Effect.catch("NotFound", () => Effect.succeed(null)),
);
```

## Configuration

```bash
POLAR_ACCESS_TOKEN=polar_pat_...   # Personal or Organization Access Token
POLAR_SERVER=production            # or "sandbox" (default: production)
POLAR_BASE_URL=...                 # optional, overrides POLAR_SERVER
```

Create a token in the [Polar dashboard](https://polar.sh/settings) under **Developers**. Or build credentials directly:

```typescript
import { layer } from "@distilled.cloud/polar";

const creds = layer({ accessToken: token, server: "sandbox" });
```

## Regenerating

```bash
bun run specs:update   # refresh specs/openapi.json from api.polar.sh
bun run generate       # regenerate src/operations from the spec
```

## License

Apache-2.0
