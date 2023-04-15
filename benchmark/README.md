# 🧑‍🔬 On demand itty-AWS benchmark

## Why?

We compare Itty-AWS in various runtime environments and against AWS-SDK v2 and v3 to ensure it performs at least as well as the native tools provided by AWS.

## How does it work?

Edit the benchmarking settings in the `benchmark/.env` file.

Run `pnpm benchmark:run` to start the benchmarking and wait patiently.

Once the benchmarking is complete, serve the dashboard with `pnpm benchmark:serve` and browse the result in a nice UI.

The benchmark result should be commited to source code. To keep things simple you should commit only one benchmark per feature branch.

## Architecture

### Diagram

![architecture](docs/architecture.png?raw=true)

The following steps are executed in order by a local shell script.

### Step 1

A super simple performance benchmarking stack is deployed on the AWS Cloud:

- 1x DynamoDB table
- 1x CloudWatch retention
- 1x lambda to put a 10KB DynamoDB item
- 10x lambdas of each test configuration described in the following table:

| Name          | Runtime          | SDK               |
| ------------- | ---------------- | ----------------- |
| n16-sdk2-rntm | AWS Node.js 16.x | runtime AWS-SDKv2 |
| n16-sdk2-bndl | AWS Node.js 16.x | bundle AWS-SDKv2  |
| n16-itty-bndl | AWS Node.js 16.x | Itty-AWS          |
| n18-sdk3-rntm | AWS Node.js 18.x | runtime AWS-SDKv3 |
| n18-sdk3-bndl | AWS Node.js 18.x | bundle AWS-SDKv3  |
| n18-itty-bndl | AWS Node.js 18.x | Itty-AWS          |

The lambdas code is pretty simple. They perform a single read on DynamoDB with the target SDK and log the result.

The target document size is 10KB. We need some load, because if the document is too small, there's no point in measuring both TTFB and Duration: they're pretty much the same.

### Step 2

Each lambda is invoked 10x.

### Step 3

After all these invocations, all information stored in CloudWatch is aggregated, then a new JSON file is created and saved locally in the `/benchmark/data/` folder. For each lambda invocation, we collect:

- Total start time
- Total duration
- Max memory used
- DynamoDB write query latency
- DynamoDB write query duration
- And other useful information

### Step 4

The stack is deleted from the cloud.
