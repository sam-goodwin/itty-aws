# itty-aws Design

## 1. What we get from the Smithy model files (`manifests/*.json`)

Each file is a **flattened Smithy IDL document** represented as JSON. The top-level key is `shapes`, a record mapping **absolute Shape IDs** (`namespace#ShapeName`) to their definitions.

Important shape kinds for our purposes:

1. `service` – One per file. Contains metadata traits such as `aws.api#service { sdkId }` that give us the **canonical SDK name** and sometimes a default endpoint prefix.
2. `operation` – Represents an RPC.  The payload looks like
   ```json
   "com.amazonaws.dynamodb#PutItem": {
     "type": "operation",
     "input":  { "target": "com.amazonaws.dynamodb#PutItemInput"  },
     "output": { "target": "com.amazonaws.dynamodb#PutItemOutput" },
     "errors": [
       { "target": "com.amazonaws.dynamodb#ConditionalCheckFailedException" },
       { "target": "com.amazonaws.dynamodb#InternalServerError" }
     ]
   }
   ```
   * `input` / `output` reference **structure shapes** that describe the payloads.
   * `errors` is an ordered list of **structure shapes** that are tagged in Smithy with `smithy.api#error` & `aws.protocols#awsJson1_0` traits.  In the flattened JSON we only see `{ "type": "structure" }` but the shape ID tells us everything we need – it is an *enumeration of exactly the errors the service can return for that operation*.
3. `structure`, `union`, `enum`, `list`, `map`, scalar shapes – Normal Smithy data shapes we can convert to TS *types only*; no runtime needed.

## 2. Desired public surface

For every AWS service we want **tree-shakable, zero-runtime type helpers** plus a tiny Effect-based runtime layer that:

```ts
import { aws } from "./src/client.ts";
import { Effect } from "effect";

// Get typed service client
const dynamodb = aws("us-east-1").dynamodb;

// All operations return Effects with precise error types
const result = dynamodb.putItem({ 
  TableName: "users", 
  Item: { id: { S: "123" } } 
});

// Handle specific AWS errors with type safety
const handled = result.pipe(
  Effect.catchTag("ConditionalCheckFailedException", (error) => 
    Effect.succeed({ message: "Item already exists" })
  )
);
```

Key goals:
* **Exact error modelling** – the `Effect` error channel is the tagged union of the operation's Smithy `errors` list, *plus* a small set of `CommonAwsError`s (network, auth, unknown).
* **No heavy dependencies** – only `effect` and the tiny `aws4fetch` signer (~1 kB).
* **Auto-generated, type-only** code – all runtime lives in one shared helper file.

## 3. Code-generation plan (**types only**)

We emit zero runtime helpers in `src/services/<service>.ts` – only
TypeScript *types* and *interfaces*.  All runtime logic lives in a single,
shared proxy in `src/client.ts`.

### 3.1 Generated Service File Structure
For each service *S* (e.g. `dynamodb`) we generate `src/services/dynamodb.ts`:

```ts
// Auto-generated - types only, zero runtime code
import type { Effect } from "effect";
import type { AwsErrorMeta, CommonAwsError } from "../client.ts";

// Type placeholder for inputs/outputs 
type _opaque = Record<string, unknown>;

// Service interface (at top for visibility)
export interface DynamoDB {
  putItem(input: PutItem.Input): Effect.Effect<PutItem.Output, PutItem.Error>;
  getItem(input: GetItem.Input): Effect.Effect<GetItem.Output, GetItem.Error>;
  // …one camelCase method per operation…
}

// Error interfaces
export interface InternalServerError extends AwsErrorMeta { readonly _tag: "InternalServerError" }
export interface ConditionalCheckFailedException extends AwsErrorMeta { readonly _tag: "ConditionalCheckFailedException" }
// …one interface per error shape – **no runtime code produced** …

// Operation namespaces (PascalCase)
export declare namespace PutItem {
  export type Input = _opaque;
  export type Output = _opaque;
  export type Error =
    | ConditionalCheckFailedException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetItem {
  export type Input = _opaque;
  export type Output = _opaque;
  export type Error =
    | InternalServerError
    | ProvisionedThroughputExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}
```

There is *zero* JavaScript emitted – only declarations.  Tree-shaking or
minification therefore drops the file entirely from user bundles.

### 3.2 Service Metadata
We also generate `src/services/metadata.ts` containing service configuration:

```ts
export const serviceMetadata = {
  "dynamodb": {
    sdkId: "DynamoDB",
    endpointPrefix: "dynamodb",
    protocol: "awsJson1_0",
    targetPrefix: "DynamoDB",
  },
  // …one entry per service…
} as const;
```

### 3.3 Runtime Implementation (`src/client.ts`)
* Uses `aws4fetch` for AWS request signing
* Uses `@aws-sdk/credential-providers` for credential resolution
* Implements double proxy pattern for type-safe service access
* Maps AWS error responses to tagged Effect errors

```ts
import { aws } from "./src/client.ts";

// Returns ServiceClientMap with typed service proxies
const client = aws("us-east-1");

// Type-safe access to DynamoDB operations
const dynamodb = client.dynamodb; // Type: Effect<DynamoDB, CommonAwsError>

// Each method returns Effect with precise error types
const putResult = dynamodb.putItem({ TableName: "test", Item: {} });
// Type: Effect<PutItem.Output, PutItem.Error>
```

Because the generated service files are *types only*, they contribute nothing
at runtime; the whole implementation weight is the tiny proxy + signer.

## 4. Proxy-based runtime architecture

The `aws()` function returns a double proxy:

1. **Service proxy**: `aws("region").dynamodb` creates a service client Effect
2. **Method proxy**: `dynamodb.putItem(input)` calls the AWS API with type safety

```ts
export const aws = (region: string = "us-east-1"): ServiceClientMap =>
  new Proxy({} as ServiceClientMap, {
    get(_, serviceName: string | symbol) {
      if (typeof serviceName !== "string") return undefined;
      
      // Return Effect that creates the service proxy
      return createServiceProxy(serviceName, region);
    }
  });
```

The inner proxy intercepts method calls and:
1. Converts `camelCase` method names to `PascalCase` AWS actions
2. Signs requests with aws4fetch
3. Maps error responses to tagged Effect errors
4. Returns precisely-typed Effect results

## 5. Error modeling with Effect

Error interfaces are type-only with `_tag` discriminators for Effect's tagged error system:

```ts
export interface ConditionalCheckFailedException extends AwsErrorMeta { 
  readonly _tag: "ConditionalCheckFailedException" 
}
```

Runtime creates instances of common error classes that implement these interfaces:

```ts
export class UnknownError extends Data.TaggedError("UnknownError")<
  AwsErrorMeta & { message: string }
> {}
```

Users get precise error handling:

```ts
result.pipe(
  Effect.catchTag("ConditionalCheckFailedException", (error) => {
    // error.statusCode, error.requestId available
    return Effect.succeed("handled");
  }),
  Effect.catchTag("ThrottlingException", (error) => 
    Effect.delay(Effect.succeed("retry"), 1000)
  )
)
```

## 6. Scripts

| Script | Purpose |
|--------|---------|
| `bun run scripts/fetch-manifests.ts` | Download/refresh Smithy JSON manifests from AWS SDK repo |
| `bun run scripts/generate-clients.ts` | Generate type-only service files + metadata |

Both scripts are **Effect** programs – typed, testable, and side-effect managed.

## 7. Bundle size optimization

- **Generated service files**: 0 runtime bytes (types only)
- **Core runtime**: ~5KB (`aws4fetch` + proxy logic)
- **Tree-shakable**: Only used services/operations included in bundle
- **No AWS SDK dependency**: Eliminates 2MB+ of AWS SDK runtime

## 8. Development workflow

1. **Add new service**: Update generator to process additional manifest files
2. **Regenerate types**: Run `bun run generate:clients` after manifest changes
3. **Update client map**: Add new service interface to `ServiceClientMap` in `client.ts`
4. **Type safety**: Full IntelliSense and error checking without runtime cost

---

This design achieves:
* **Precise compile-time knowledge** of every AWS error
* **Near-zero runtime size** (signer + tiny helper)
* **Fully functional Effect-ified developer experience**
* **Tree-shakable, type-safe AWS SDK alternative** 