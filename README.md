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

- 🪶 **Lightweight**: Much smaller than AWS SDK v3
- 🔄 **Effect.js**: Type-safe error handling, built-in retries, composable operations
- 🎯 **Simple API**: `client.apiName(..)` instead of `client.send(Command)`
- ⚡ **Fast cold starts**: No impact on Lambda startup times

## Installation

```bash
npm install itty-aws
```

## Usage

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

## Perfect Error Modeling

Every AWS API operation has its errors perfectly modeled by error code. Each operation's `Effect.Effect` type specifies exactly which errors can occur:

```ts
// DynamoDB.getItem() can only throw these specific errors:
ddb.getItem(input): Effect.Effect<
  GetItemOutput,
  | InternalServerError
  | InvalidEndpointException  
  | ProvisionedThroughputExceededException
  | RequestLimitExceeded
  | ResourceNotFoundException
  | CommonAwsError  // + common errors like ThrottlingException
>

// DynamoDB.putItem() has different possible errors:
ddb.putItem(input): Effect.Effect<
  PutItemOutput,
  | ConditionalCheckFailedException  // Only putItem can throw this
  | InternalServerError
  | InvalidEndpointException
  | ItemCollectionSizeLimitExceededException
  | ProvisionedThroughputExceededException
  | ReplicatedWriteConflictException
  | RequestLimitExceeded
  | ResourceNotFoundException
  | TransactionConflictException
  | CommonAwsError
>
```

### How It Works

1. **Generated from AWS specifications**: Error types are generated from official AWS service manifests
2. **Error code mapping**: AWS returns error codes like `"ResourceNotFoundException"` which map directly to TypeScript error types
3. **Tagged errors**: Each error is a `TaggedError` with the exact error code as its `_tag`
4. **Runtime error creation**: The client dynamically creates the correct error type based on AWS response

### Example: Type-Safe Error Handling

```ts
import { Effect } from "effect";

const program = Effect.gen(function* () {
  const result = yield* ddb.getItem({ 
    TableName: "users", 
    Key: { id: { S: "123" } } 
  }).pipe(
    // Handle specific DynamoDB errors
    Effect.catchTag("ResourceNotFoundException", () => 
      Effect.succeed({ Item: undefined })
    ),
    Effect.catchTag("ProvisionedThroughputExceededException", () =>
      Effect.fail(new Error("Rate limited - try again later"))
    ),
    // Handle common AWS errors  
    Effect.catchTag("ThrottlingException", () =>
      Effect.fail(new Error("Throttled by AWS"))
    ),
    // All other errors bubble up with full type safety
  );

  return result.Item;
});
```
