# @distilled.cloud/polar

Effect-native Polar SDK generated from Polar's OpenAPI specification.

## Installation

```bash
npm install @distilled.cloud/polar effect
```

## Quick Start

```ts
import * as Effect from "effect/Effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "@distilled.cloud/polar/Credentials";
import { productslist } from "@distilled.cloud/polar/Operations";

const program = Effect.gen(function* () {
  const products = yield* productslist({
    limit: 10,
  });

  return products.items;
});

program.pipe(
  Effect.provide(CredentialsFromEnv),
  Effect.provide(FetchHttpClient.layer),
);
```

## Configuration

Set `POLAR_ACCESS_TOKEN` to a Polar personal access token, organization access
token, or OAuth access token.

`POLAR_SERVER` is optional:

- `production` uses `https://api.polar.sh` (default)
- `sandbox` uses `https://sandbox-api.polar.sh`

Integration tests run only when `POLAR_ACCESS_TOKEN` is set and
`POLAR_SERVER=sandbox`. If you use a personal access token instead of an
organization access token, set `POLAR_ORGANIZATION_ID` as well.

## Error Handling

```ts
import * as Effect from "effect/Effect";
import { NotFound, UnknownPolarError } from "@distilled.cloud/polar/Errors";
import { productsget } from "@distilled.cloud/polar/Operations";

const program = productsget({ id: "product-id" }).pipe(
  Effect.catchTags({
    NotFound: (error: NotFound) => Effect.succeed(undefined),
    UnknownPolarError: (error: UnknownPolarError) => Effect.fail(error),
  }),
);
```

## Services

- Products — create, list, get, update, and update benefits
- Webhooks — create, list, update, delete endpoints, list deliveries, and redeliver events
- Benefits and grants
- Checkouts and checkout links
- Customers, members, and customer portal operations
- Orders, refunds, payments, disputes, and subscriptions
- License keys, files, metrics, meters, discounts, events, and organization access tokens

## License

MIT
