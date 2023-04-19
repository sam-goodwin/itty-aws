# itty-aws

This is a teeny-tiny AWS SDK implementation for TypeScript using [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that fits everything into `~49 KB`, including all Services and APIs. The name is an homage to the awesome [itty-router](https://github.com/kwhitley/itty-router).

> 🛠 This is a highly experimental API, do not use for anything serious.

## Supported APIs

Known to work:

- ✅ Any modern API using plain JSON protocol should work out of the box.
- ✅ DynamoDB
- ✅ EventBridge
- ✅ S3 `CreateBucket`, `GetObject`, `HeadObject`, `PutObject`, `DeleteObject`, `ListObjectsV2`
- ⛔️ S3 the remaining S3 APis likely don't work due to inconsistencies in the XML API.
- ⛔️ SQS (see: [#1](https://github.com/sam-goodwin/itty-aws/issues/1))
- ⛔️ SNS (see: [#2](https://github.com/sam-goodwin/itty-aws/issues/2))

## Why?

We want a lightweight AWS SDK that has no impact on Lambda cold starts and a standard API design. The AWS SDK v3 traded off usability to save on bundle size with the introduction of `client.send(Command)` and still didn't achieve a lightweight experience. None of this should be necessary - we can have our cake and eat it too!

## Problems with AWS SDK v3

This project aims to eliminate the following issues with the official AWS SDK:

1. Bundle size and cold start times degrades as a piece of code uses more AWS APIs
2. Some APIs are excessively heavy (looking at you, S3).
3. Relying on an AWS SDK provided in the Lambda environment doesn't always save time either, since just require/import-ing it takes time because of how large the code is.
4. Bring back the `client.apiName(..)` design without compromising performance (e.g. `dynamo.getItem(..)` instead of `dynamo.send(GetItemCommand)`).

## Status

The entire AWS SDK (including all Services and APIs) fits in to a

- Minified bundle size of: `49 KB`.
- Un-minified bundle size of: `95 KB`.

> 💪 It is possible to reduce this even further.

## Installation

```ts
npm install itty-aws
```

## Usage

Import the top-level `AWS` object from `itty-aws` and instantiate a client for the Service you want. The SDK is constant size, so your performance is not impacted by the number or choice of AWS services. The APIs are methods on the client - just like AWS SDK v2, except minus the `.promise()`.

```ts
import { AWS } from "itty-aws";

const ddb = new AWS.DynamoDB();

const response = await ddb.getItem({
  TableName,
  Key: {
    pk: {
      S: "key",
    },
  },
});

console.log(response.Item);
```

## How?

Instead of generating heavy classes and functions for the SDK like AWS does, we instead generate type declarations off of the AWS SDK v2 and provide a generic implementation for all clients using a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). You can find this file in [./src/index.ts](./src/index.ts).

## Benchmark

We compare itty-aws in various runtime environments and against AWS-SDK v2 and v3 to ensure it performs at least as well as the native tools provided by AWS.

Browse the results in [/benchmark](/benchmark/README.md)

## Known Issues

- Performance has not been tested - it's possible that our use of `https` or `fetch` is slower than whatever magic the AWS SDK is doing.
- We're still importing some heavy code from the AWS SDK for signing requests - including tslib (for whatever reason). We should investigate hand-rolling replacements that don't have these dependencies or at least minimize them.
