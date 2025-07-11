# itty-aws

A lightweight (34KB) AWS SDK implementation for [Effect](https://effect.website) implemented with a single [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and types generated from the AWS API specifications. `itty-aws` captures the entire AWS API surface area, including each API's exact error codes, in ~34KB of bundled JS.


```ts
import { AWS } from "itty-aws";
import { Effect, Schedule } from "effect";

const ddb = new AWS.DynamoDB({ region: "us-east-1" });

// Type-safe operations with built-in error handling
const program = Effect.gen(function* () {
  const user = yield* ddb.getItem({
    TableName: "users",
    Key: { id: { S: "123" } }
  }).pipe(
    Effect.catchTag("ResourceNotFoundException", () => 
      Effect.succeed({ Item: undefined })
    ),
    Effect.retry({
      times: 3,
      schedule: Schedule.exponential("1 second")
    })
  );

  return user.Item;
});

await Effect.runPromise(program);
```

> [!CAUTION]
> Only works with AWS APIs that accept JSON payloads. S3 (based on XML) is currently not supported, but will be in the future using Bun's built-in S3 client and a lightweight XML parser + aws4fetch for node.js.

## Bundle Size

The entire AWS SDK (including all Services and APIs) fits into:

- **Core bundle size**: `34.0 KB` (minified, excluding Effect.js)
- **Full bundle size**: `228.1 KB` (minified, with Effect.js)

## Why?

The official AWS SDK v3 is a massive 200+ NPM package monorepo. "@effect-aws/*" is another large monorepo that wraps the official AWS SDK v3 in Effect.js, adding additonal overhead on top of the official SDK.

The official AWS SDK v3 makes unfortunate trade-offs to support tree-shaking:
```ts
// instea dof just simply claling a method
await client.getItem()

// you have to cosntruct a Command, because methods are not tree-shakable
await client.send(new GetItemCommand());
```

`itty-aws` cuts the cord from AWS's official SDK and instead prioritizes a minimal, type-safe, lightweight library designed specifically for Effect.js with none of the bloat of the official SDK.

- 🪶 **Lightweight**: Much smaller than AWS SDK v3
- 🔄 **Effect.js**: Type-safe error handling, built-in retries, composable operations
- 🎯 **Simple API**: `client.apiName(..)` instead of `client.send(Command)`
- ⚡ **Fast cold starts**: No impact on Lambda startup times

## Installation

```bash
npm install itty-aws
```

## Usage

Import the `AWS` proxy and create a client for the service you want to use. The service will expose each API as a method that returns an `Effect` value with the correct response and error types.

```ts
import { AWS } from "itty-aws";
import { Effect, Console, Schedule } from "effect";

const ddb = new AWS.DynamoDB({ region: "us-east-1" });

const program = Effect.gen(function* () {
  // All operations return Effect values with typed errors
  const response = yield* ddb.getItem({
    TableName: "my-table",
    Key: { pk: { S: "user#123" } }
  }).pipe(
    // Handle specific AWS errors
    Effect.catchTag("ResourceNotFoundException", () => 
      Effect.succeed({ Item: undefined })
    ),
    // Built-in retry with exponential backoff
    Effect.retry({
      times: 3,
      schedule: Schedule.exponential("1 second"),
      while: (error) => error._tag === "ThrottlingException"
    }),
    Effect.timeout("30 seconds")
  );
  
  yield* Console.log("Item:", response.Item);
});

// Execute the program
Effect.runPromise(program);
```

## Exact Error Modeling

Each operation's `Effect.Effect` type specifies exactly which errors can occur:

```ts
putItem(
  input: PutItemInput,
): Effect.Effect<
  PutItemOutput,
  | ConditionalCheckFailedException
  | InternalServerError
  | InvalidEndpointException
  | ItemCollectionSizeLimitExceededException
  | ProvisionedThroughputExceededException
  | ReplicatedWriteConflictException
  | RequestLimitExceeded
  | ResourceNotFoundException
  | TransactionConflictException
  | CommonAwsError
>;
```

## How It Works

We scrape all of the `@aws-sdk/client-*` packages from NPM and then scrape each Service's Smithy Spec from the aws-sdk-js-v3 Github repo.

The spec is then used to generate TypeScript types (types only, no runtime code) for each service in [src/services](src/services).

The [src/client.ts](src/client.ts) file contains the `AWS` proxy that is used to dynamically construct:
1. the Client for a service.
2. TaggedError types for each error code.

The Service's Client is yet anothe Proxy that intercepts method calls to infer the API name and then submit the request to AWS via `aws4fetch` which signs the request.

All of the Service's errors are modeled with TaggedErrors, except purely as `declare class` to avoid the code size cost of a physical class. The `AWS` proxy detects references ending with `Exception` and dynamically constructs the correct `TaggedError` type on the fly.

This dynamic construction is possible because the AWS API has strict naming conventions and a RPC API implemented over REST with a compitable POST request.