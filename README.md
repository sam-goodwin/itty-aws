# itty-aws

This is a teeny-tiny AWS SDK implementation for TypeScript using [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that fits everything into `~14 KB`, including all Services and APIs. The name is an homage to the awesome [itty-router](https://github.com/kwhitley/itty-router).

> 🛠 This is a highly experimental API, do not use for anything serious.

## Why?

We want a lightweight AWS SDK that has no impact on Lambda cold starts and a standard API design. The AWS SDK v3 traded off usability to save on bundle size with the introduction of `client.send(Command)` and still didn't achieve a lightweight experience. None of this should be necessary - we can have our cake and eat it to!

## Problems with AWS SDK v3

This project aims to eliminate the following issues with the official AWS SDK:

1. Bundle size and cold start times degrades as a piece of code uses more AWS APIs
2. Some APIs are excessively heavy (looking at you, S3).
3. Relying on an AWS SDK provided in the Lambda environment doesn't always save time either, since just require/import-ing it takes time because of how large the code is.
4. Bring back the `client.apiName(..)` design without compromising performance (e.g. `dynamo.getItem(..)` instead of `dynamo.send(GetItemCommand)`).

## Status

The entire AWS SDK (including all Services and APIs) fits in to a

- Minified bundle size of: `14.6 KB`.
- Un-minified bundle size of: `26.4 KB`.

> 💪 It is possible to reduce this even further.

## Installation

```ts
npm install itty-aws
```

## Pre-requisites

- Node 18+ - we use the internal `fetch` API which is only available in Node 18.

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

## Known Issues

- It only works with Node 18+ because we use Node Fetch APIs. You can polyfill to work around this, but we should do better in the library to automatically handle older node versions while still maintaining a minimal bundle size.
- It has only been tested with some AWS DynamoDB APIs. More thorough testing and enumeration of APIs is required.
- Performance has not been tested - it's possible that our use of Fetch is slower than whatever magic the AWS SDK is doing.
- We're still importing some heavy code from the AWS SDK for signing requests - including tslib (for whatever reason). We should investigate hand-rolling replacements that don't have these dependencies or at least minimize them.
