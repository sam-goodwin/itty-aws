# Contributing

Thanks for your interest in contributing to `itty-aws` - a teeny-tiny community owned AWS SDK for TypeScript.

## Pre-requisites

- Install [Node 18](https://nodejs.org/en/) - usually best to do this with [Node Verson Manage (NVM)](https://github.com/nvm-sh/nvm).
- Create an [AWS](https://aws.amazon.com) account.
- Install [pnpm](https://pnpm.io/).

## Generating the Types

`itty-aws` uses Proxies to implement a generic AWS Client for all services in just a few KB. Unlike AWS's official SDKs, the types for each service don't impact the size of a user's bundle because they are interface/type only - they are entirely erased after compilation.

Before you get started developing, run the following script to generate the types:

```
pnpm generate:types
```

This will generate a file, `./src/sdk.generated.ts` containing all the type definitions. Note that this file is in `.gitignore` and is not meant to be checked in to source.

## Building

After generating the types, you can now compile TypeScript to JavaScript:

```
pnpm build
```

This will create a folder, `lib/` containing the `.js`, `.d.ts` and `.d.ts.map` files.

We don't generate a Source Map for the JavaScript because the code is so small and the type definitions end up contributing many KB/MBs to a user's bundle. The code is small enough that a source map for it is not that helpful anyway.

## Testing

To run the tests, run the `test` script:

```
pnpm test
```

The tests require that you have credentials in your environment variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

Alternatively, you can use LocalStack with docker:

```sh
docker run \
  --rm -it \
  -p 4566:4566 \
  -p 4510-4559:4510-4559 \
  localstack/localstack
```

The test procedure is as follows:

- Run `vitest` which will run all the tests in [`./test/**.test.ts`](./test/). The tests will create and interact with Resources, putting and getting data, acting as tests for the AWS Data Plane.

## Benchmark

There are 2 NPM packages in the [./benchmark/](./benchmark/) folder, [functions](./benchmark/functions/) and [infra](./benchmark/infra/).

- `functions` contains implementations of Lambda Functions with identical functionality but using different AWS SDK configurations, e.g itty-aws, AWS SDK V2, AWS SDK v3 bundled, AWS SDK v3 excluded from the bundle, etc. AWS SDK v3 .send vs mono-client.
- `infra` is an AWS CDK application that deploys ech of the Functions to AWS.

TODO: implement a script that will make requests against the Functions to analyze the performance.
