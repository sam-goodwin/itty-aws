import {
  CloudWatchLogsClient,
  DeleteLogGroupCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
  GetLogEventsCommand,
  GetLogEventsCommandInput,
  LogGroup,
  CloudWatchLogsClientConfig,
} from "@aws-sdk/client-cloudwatch-logs";
import {
  InvokeCommand,
  LambdaClient,
  LambdaClientConfig,
} from "@aws-sdk/client-lambda";
import { performance } from "node:perf_hooks";
import { BenchmarkConfig, CloudWatchLog } from "../../types";
import { roundToTwoDecimalPlaces } from "../../utils/format";
import { wait } from "../../utils/wait";
import { Agent } from "node:https";
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";

/**
 * This function initializes the cloud, runs the benchmark functions and collects the logs.
 * @returns {Promise<CloudWatchLog>}
 */
export async function runBenchmark({
  benchmarkConfig,
}: {
  benchmarkConfig: BenchmarkConfig;
}): Promise<CloudWatchLog> {
  // Setup
  const functionStartTime = performance.now();
  console.log("\n## Run the Benchmark functions");
  // Custom requestHandler for our clients. It fixes AWS SDK v3 causing unexpected/unexplained freezes.
  // source: https://github.com/aws/aws-sdk-js-v3/issues/3560#issuecomment-1484140333
  const clientConfig: CloudWatchLogsClientConfig & LambdaClientConfig = {
    requestHandler: new NodeHttpHandler({
      httpsAgent: new Agent({
        maxSockets: 50,
        keepAlive: true,
        keepAliveMsecs: 1000,
      }),
      socketTimeout: 5000,
    }),
  };
  const cloudWatchLogsClient = new CloudWatchLogsClient(clientConfig);
  const lambdaClient = new LambdaClient(clientConfig);

  // Init
  await deleteLogGroups({ cloudWatchLogsClient, benchmarkConfig });
  await initDatabase({ lambdaClient, benchmarkConfig });

  // Run
  await invokeBenchmarkFunctions({
    lambdaClient,
    benchmarkConfig,
  });
  await waitForCloudwatch({
    cloudWatchLogsClient,
    benchmarkConfig,
  });
  let cloudWatchLog: CloudWatchLog = await collectLogs({
    cloudWatchLogsClient,
    benchmarkConfig,
  });

  // Cleanup
  cloudWatchLogsClient.destroy();
  lambdaClient.destroy();
  const duration = performance.now() - functionStartTime;
  console.log(
    `\nRun the benchmark functions: done in ${roundToTwoDecimalPlaces(
      duration
    )} ms.`
  );

  return cloudWatchLog;
}

/**
 * Delete CloudWatch log groups for all functions in a benchmark configuration.
 *
 * @async
 * @function
 * @param {Object} options - The options object.
 * @param {CloudWatchLogsClient} options.cloudWatchLogsClient - The AWS SDK client for CloudWatch Logs.
 * @param {BenchmarkConfig} options.benchmarkConfig - The benchmark configuration.
 * @returns {Promise<void>} Resolves when all log groups deletions have been settled.
 */
async function deleteLogGroups({
  cloudWatchLogsClient,
  benchmarkConfig,
}: {
  cloudWatchLogsClient: CloudWatchLogsClient;
  benchmarkConfig: BenchmarkConfig;
}): Promise<void> {
  console.log("\n- Delete previous cloudwatch log groups if they exist");
  const logGroups = await getBenchmarklogGroups({
    cloudWatchLogsClient,
    benchmarkConfig,
  });
  for (const logGroup of logGroups) {
    try {
      const logGroupName = logGroup.logGroupName;
      const command = new DeleteLogGroupCommand({ logGroupName });
      process.stdout.write(`  - log group '${logGroupName}'`);
      const res = await cloudWatchLogsClient.send(command);
      process.stdout.write(` (status: ${res.$metadata.httpStatusCode})\n`);
    } catch (error) {
      // Do nothing, the log group does not exist
    }
  }
}

/**
 * Initializes the database by invoking the setup Lambda function using the provided
 * Lambda client.
 *
 * @param props - An object containing the Lambda client.
 * @param {lambdaClient} props.lambdaClient - The Lambda client to use for invocation.
 * @param {benchmarkConfig} props.benchmarkConfig - The benchmark configuration object.
 * @returns A promise that resolves when the Lambda function has been invoked.
 */
async function initDatabase({
  lambdaClient,
  benchmarkConfig,
}: {
  lambdaClient: LambdaClient;
  benchmarkConfig: BenchmarkConfig;
}): Promise<void> {
  process.stdout.write("\n- Init database");
  const command = new InvokeCommand({
    FunctionName: `${benchmarkConfig.stackName}-${benchmarkConfig.setupFunction.functionName}`,
  });
  const res = await lambdaClient.send(command);
  process.stdout.write(` (status: ${res.$metadata.httpStatusCode})\n`);
}

/**
 * Invoke the benchmark functions specified in the BenchmarkConfig object using the
 * given Lambda client. The function names are obtained by appending the run
 * number to the base function name. Each function is invoked `BenchmarkConfig.runs`
 * times. The invocations are run sequentially to avoid race conditions with the dynamodb table.
 *
 * @param {Object} props - The input object.
 * @param {lambdaClient} props.lambdaClient - The Lambda client to use for invocation.
 * @param {benchmarkConfig} props.BenchmarkConfig - The benchmark configuration object.
 * @returns {Promise<void>} A promise that resolves when all invocations are complete.
 */
async function invokeBenchmarkFunctions({
  lambdaClient,
  benchmarkConfig,
}: {
  lambdaClient: LambdaClient;
  benchmarkConfig: BenchmarkConfig;
}): Promise<void> {
  console.log("\n- Invoke the benchmark functions");
  for (let i = 0; i < benchmarkConfig.benchmarkFunctions.length; i++) {
    for (let j = 1; j <= benchmarkConfig.functionInstances; j++) {
      const FunctionName = `${benchmarkConfig.stackName}-${benchmarkConfig.benchmarkFunctions[i].functionName}-${j}`;
      console.log(`  - function '${FunctionName}'`);
      const command = new InvokeCommand({
        FunctionName,
      });
      for (let k = 1; k <= benchmarkConfig.functionRuns; k++) {
        process.stdout.write(`    - run #${k}`);
        const res = await lambdaClient.send(command);
        process.stdout.write(` (status: ${res.$metadata.httpStatusCode})\n`);
      }
    }
  }
}

/**
 * Wait for Cloudwatch to be ready.
 *
 * @async
 * @function
 * @param {Object} options - The options object.
 * @param {CloudWatchLogsClient} options.cloudWatchLogsClient - The client for accessing Cloudwatch logs.
 * @param {BenchmarkConfig} options.benchmarkConfig - The benchmark configuration object.
 * @returns {Promise<void>} - A Promise that resolves when Cloudwatch is ready.
 */
async function waitForCloudwatch({
  cloudWatchLogsClient,
  benchmarkConfig,
}: {
  cloudWatchLogsClient: CloudWatchLogsClient;
  benchmarkConfig: BenchmarkConfig;
}): Promise<void> {
  process.stdout.write("\n- Wait until cloudwatch logs are created "); // `process.stdout.write` is used to write to the on the same console line
  const expectedNumberOfLogGroups =
    benchmarkConfig.benchmarkFunctions.length *
      benchmarkConfig.functionInstances +
    1; // +1 is to take the setup function into account
  while (true) {
    await wait(3000);
    try {
      const logGroups = await getBenchmarklogGroups({
        cloudWatchLogsClient,
        benchmarkConfig,
      });
      if (expectedNumberOfLogGroups === logGroups.length) {
        process.stdout.write("\n");
        break;
      }
      // Log is not ready yet
      process.stdout.write(".");
    } catch {
      // Do nothing
    }
  }
  return;
}

/**
 * Collects logs for the given benchmarkConfig functions and runs using cloudWatchLogsClient.
 *
 * @param {Object} params - An object containing cloudWatchLogsClient
 * @param {CloudWatchLogsClient} params.cloudwatchClient - The client used to interact with CloudWatch.
 * @param {BenchmarkConfig} params.benchmarkConfig - The BenchmarkConfig used to construct the log group name pattern.
 * @returns {Promise<CloudWatchLog>} - A promise that resolves to an array of log events.
 */
async function collectLogs({
  cloudWatchLogsClient,
  benchmarkConfig,
}: {
  cloudWatchLogsClient: CloudWatchLogsClient;
  benchmarkConfig: BenchmarkConfig;
}): Promise<CloudWatchLog> {
  console.log("\n- Collect logs");
  let cloudWatchLog: CloudWatchLog = [];
  for (const fn of benchmarkConfig.benchmarkFunctions) {
    for (let i = 1; i <= benchmarkConfig.functionInstances; i++) {
      const logGroupName = `/aws/lambda/${benchmarkConfig.stackName}-${fn.functionName}-${i}`;
      console.log(`  - logGroup '${logGroupName}'`);
      const command = new DescribeLogStreamsCommand({ logGroupName });
      const { logStreams } = await cloudWatchLogsClient.send(command);
      if (logStreams) {
        const logStream = logStreams[0];
        let nextToken: string | undefined;
        do {
          const params: GetLogEventsCommandInput = {
            logGroupName,
            logStreamName: logStream.logStreamName,
            startFromHead: true,
            nextToken,
          };
          const command = new GetLogEventsCommand({ ...params });
          const { events, nextForwardToken } = await cloudWatchLogsClient.send(
            command
          );
          cloudWatchLog.push(...(events ?? []));
          if (nextToken === nextForwardToken) {
            nextToken = undefined;
          } else {
            nextToken = nextForwardToken;
          }
        } while (nextToken);
      }
    }
  }
  return cloudWatchLog;
}

/**
 * Returns an array of log groups for a given CloudWatchLogsClient and BenchmarkConfig.
 *
 * @param {object} params - An object containing the logGroupClient and benchmarkConfig.
 * @param {CloudWatchLogsClient} params.cloudWatchLogsClient - The CloudWatchLogsClient used to retrieve log groups.
 * @param {BenchmarkConfig} params.benchmarkConfig - The BenchmarkConfig used to construct the log group name pattern.
 * @returns {Promise<LogGroup[]>} - An array of log groups.
 */
async function getBenchmarklogGroups({
  cloudWatchLogsClient,
  benchmarkConfig,
}: {
  cloudWatchLogsClient: CloudWatchLogsClient;
  benchmarkConfig: BenchmarkConfig;
}): Promise<LogGroup[]> {
  const logGroupNamePattern = `/aws/lambda/${benchmarkConfig.stackName}`;
  const logGroups: LogGroup[] = [];
  let nextToken: string | undefined;

  do {
    const command = new DescribeLogGroupsCommand({
      logGroupNamePrefix: logGroupNamePattern,
      nextToken,
    });
    const { logGroups: logGroupsPage, nextToken: newNextToken } =
      await cloudWatchLogsClient.send(command);

    logGroups.push(...(logGroupsPage ?? []));
    if (nextToken === newNextToken) {
      nextToken = undefined;
    } else {
      nextToken = newNextToken;
    }
  } while (nextToken);

  return logGroups;
}
