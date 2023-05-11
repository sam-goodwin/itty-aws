import {
  CloudWatchLogsClient,
  DeleteLogGroupCommand,
  DescribeLogGroupsCommand,
  DescribeLogStreamsCommand,
  GetLogEventsCommand,
  GetLogEventsCommandInput,
  LogGroup,
} from "@aws-sdk/client-cloudwatch-logs";
import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import { constants, promises as fsPromises } from "node:fs";
import { performance } from "node:perf_hooks";
import { benchmarkConfig } from "../benchmarkConfig";
import { BenchmarkConfig, OutputLog } from "../types";
import { writeOutput } from "../utils/files";
import { roundToTwoDecimalPlaces } from "../utils/format";
import { wait } from "../utils/wait";

/**
 * Entry point of the program.
 * This function is immediately invoked.
 * @returns {Promise<void>}
 */
(async function main(): Promise<void> {
  // Setup
  console.log(`Generate logs for branch '${benchmarkConfig.logs.gitBranch}'`);
  const scriptStatistics = {
    startTime: performance.now(),
  };
  const expectedNumberOfLogGroups =
    benchmarkConfig.benchmarkFunctions.length * benchmarkConfig.runs + 1; // +1 is to take the setup function into account
  const retryConfig = {
    retryMode: "adaptative",
    maxAttempts: 10,
  };
  const cloudWatchLogsClient = new CloudWatchLogsClient({ ...retryConfig });
  const lambdaClient = new LambdaClient({ ...retryConfig });

  // Init
  await deleteFile({
    path: benchmarkConfig.logs.outputLogFilePath,
  });
  await deleteLogGroups({ cloudWatchLogsClient, benchmarkConfig });
  await initDatabase({ lambdaClient });

  // Benchmark
  await invokeBenchmarkFunctions({
    lambdaClient,
    benchmarkConfig,
  });
  await waitForCloudwatch({
    cloudWatchLogsClient,
    expectedNumberOfLogGroups,
    benchmarkConfig,
  });
  let outputLog: OutputLog = await collectLogs({
    cloudWatchLogsClient,
  });
  console.log(`\n- Write raw data to '${benchmarkConfig.logs.outputDirPath}'`);
  await writeOutput({
    outputFilePath: benchmarkConfig.logs.outputLogFilePath,
    outputData: JSON.stringify(outputLog, null, 2),
  });

  // Cleanup
  cloudWatchLogsClient.destroy();
  lambdaClient.destroy();
  const duration = performance.now() - scriptStatistics.startTime;
  console.log(`\nDone in ${roundToTwoDecimalPlaces(duration)} ms.`);
})();

/**
 * Deletes the specified output folder.
 *
 * @async
 * @function
 * @param {Object} options - The options object.
 * @param {string} options.outputFolder - The path to the output folder.
 * @returns {Promise<void>} Resolves when the folder is deleted successfully.
 */
async function deleteFile({ path }: { path: string }): Promise<void> {
  console.log(
    `\n- Delete output log file : '${benchmarkConfig.logs.outputLogFilePath}'`
  );
  try {
    await fsPromises.access(path, constants.F_OK);
    await fsPromises.unlink(path);
  } catch {
    // Do nothing: the file probably does not exist
  }
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
      console.log(`  - log group '${logGroupName}'`);
      // Use a fresh client to avoid timeouts
      await cloudWatchLogsClient.send(command);
    } catch {
      // do nothing : the group does not exist
    }
  }
}

/**
 * Initializes the database by invoking the setup Lambda function using the provided
 * Lambda client.
 *
 * @param props - An object containing the Lambda client.
 * @returns A promise that resolves when the Lambda function has been invoked.
 */
async function initDatabase({
  lambdaClient,
}: {
  lambdaClient: LambdaClient;
}): Promise<void> {
  console.log("\n- Init database");
  try {
    const command = new InvokeCommand({
      FunctionName: `${benchmarkConfig.stackName}-${benchmarkConfig.setupFunction.functionName}`,
    });
    await lambdaClient.send(command);
  } catch {
    // do nothing : the database has already been initialized
  }
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
  for (const fn of benchmarkConfig.benchmarkFunctions) {
    for (let i = 1; i <= benchmarkConfig.runs; i++) {
      const FunctionName = `${benchmarkConfig.stackName}-${fn.functionName}-${i}`;
      console.log(`  - function '${FunctionName}'`);
      const command = new InvokeCommand({
        FunctionName,
      });
      for (let j = 1; j <= benchmarkConfig.runs; j++) {
        console.log(`    - run #${j}`);
        await lambdaClient.send(command);
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
  expectedNumberOfLogGroups,
}: {
  cloudWatchLogsClient: CloudWatchLogsClient;
  benchmarkConfig: BenchmarkConfig;
  expectedNumberOfLogGroups: number;
}): Promise<void> {
  process.stdout.write("\n- Wait until cloudwatch logs are created "); // `process.stdout.write` is used to write to the on the same console line
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
 * @returns {Promise<OutputLog>} - A promise that resolves to an array of log events.
 */
async function collectLogs({
  cloudWatchLogsClient,
}: {
  cloudWatchLogsClient: CloudWatchLogsClient;
}): Promise<OutputLog> {
  console.log("\n- Collect logs");
  let outputLog: OutputLog = [];
  for (const fn of benchmarkConfig.benchmarkFunctions) {
    for (let i = 1; i <= benchmarkConfig.runs; i++) {
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
          outputLog.push(...(events ?? []));
          if (nextToken === nextForwardToken) {
            nextToken = undefined;
          } else {
            nextToken = nextForwardToken;
          }
        } while (nextToken);
      }
    }
  }
  return outputLog;
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
