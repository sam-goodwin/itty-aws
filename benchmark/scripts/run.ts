import {
  CloudWatchLogsClient,
  DeleteLogGroupCommand,
  DescribeLogStreamsCommand,
  GetLogEventsCommand,
  GetLogEventsCommandInput,
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
 * The main function is immediately invoked.
 * @returns {Promise<void>}
 */
(async function main(): Promise<void> {
  // Setup
  const scriptStatistics = {
    startTime: performance.now(),
  };
  const retryConfig = {
    retryMode: "adaptative",
    maxAttempts: 10,
  };
  const cloudwatchClient = new CloudWatchLogsClient({ ...retryConfig });
  const lambdaClient = new LambdaClient({ ...retryConfig });
  const logGroupClient = new CloudWatchLogsClient({ ...retryConfig });

  // Generate logs
  console.log(`Generate logs for branch '${benchmarkConfig.logs.gitBranch}'`);

  // Delete output folder
  console.log(
    `\n- Delete output log file : '${benchmarkConfig.logs.outputLogFilePath}'`
  );
  await deleteFile({
    path: benchmarkConfig.logs.outputLogFilePath,
  }); // Does not exist

  // Delete previous cloudwatch log groups if they exist to prevent collecting logs from previous executions.
  console.log("\n- Delete previous cloudwatch log groups if they exist");
  await deleteLogGroups({ cloudwatchClient, benchmarkConfig });

  // Init database
  console.log("\n- Init database");
  await initDatabase({ lambdaClient });

  console.log("\n- Invoke the benchmark functions");
  await invokeBenchmarkFunctions({
    lambdaClient,
    benchmarkConfig,
  });

  process.stdout.write("\n- Wait until the last log has been published ");
  await waitForCloudwatch({ logGroupClient, benchmarkConfig });

  // Collect logs
  console.log("\n- Collect logs");
  let outputLog: OutputLog = await collectLogs({
    logGroupClient,
    cloudwatchClient,
  });

  // Write logs
  console.log(`\n- Write raw data to '${benchmarkConfig.logs.outputDirPath}'`);
  await writeOutput({
    outputFilePath: benchmarkConfig.logs.outputLogFilePath,
    outputData: JSON.stringify(outputLog, null, 2),
  });

  // Cleanup
  cloudwatchClient.destroy();
  lambdaClient.destroy();
  logGroupClient.destroy();

  // Report
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
 * @throws {Error} If there was an error deleting the folder.
 * @returns {Promise<void>} Resolves when the folder is deleted successfully.
 */
async function deleteFile({ path }: { path: string }): Promise<void> {
  try {
    await fsPromises.access(path, constants.F_OK);
    await fsPromises.unlink(path);
  } catch {
    // Do nothing: the file does not exist
  }
}

/**
 * Deletes all CloudWatch Logs log groups for the functions specified in the
 * `CONFIG.functions` array. Each function will have `CONFIG.runs` log groups,
 * named `/aws/lambda/{functionName}-{runNumber}`.
 *
 * @param cloudwatchClient The AWS SDK client for CloudWatch Logs.
 */
async function deleteLogGroups({
  cloudwatchClient,
  benchmarkConfig,
}: {
  cloudwatchClient: CloudWatchLogsClient;
  benchmarkConfig: BenchmarkConfig;
}): Promise<void> {
  for (const fn of benchmarkConfig.functions) {
    for (let i = 1; i <= benchmarkConfig.runs; i++) {
      try {
        const logGroupName = `/aws/lambda/${fn.functionName}-${i}`;
        const command = new DeleteLogGroupCommand({ logGroupName });
        console.log(`  - log group '${logGroupName}'`);
        // Use a fresh client to avoid timeouts
        await cloudwatchClient.send(command);
      } catch {
        // do nothing : the group does not exist
      }
    }
  }
}

/**
 * Initializes the database by invoking the 'ddb-setup' Lambda function using the provided
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
  try {
    const command = new InvokeCommand({
      FunctionName: "ddb-setup",
    });
    await lambdaClient.send(command);
  } catch {
    // do nothing : the database is initialized
  }
}

/**
 * Invoke the benchmark functions specified in the BenchmarkConfig object using the
 * given Lambda client. The function names are obtained by appending the run
 * number to the base function name. Each function is invoked `BenchmarkConfig.runs`
 * times, and the invocation is logged to the console. The invocations are run
 * sequentially to avoid race conditions with the dynamodb table
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
  for (const fn of benchmarkConfig.functions) {
    for (let i = 1; i <= benchmarkConfig.runs; i++) {
      const FunctionName = `${fn.functionName}-${i}`;
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
 * @param {CloudWatchLogsClient} options.logGroupClient - The client for accessing Cloudwatch logs.
 * @param {BenchmarkConfig} options.benchmarkConfig - The benchmark configuration object.
 * @returns {Promise<void>} - A Promise that resolves when Cloudwatch is ready.
 */
async function waitForCloudwatch({
  logGroupClient,
  benchmarkConfig,
}: {
  logGroupClient: CloudWatchLogsClient;
  benchmarkConfig: BenchmarkConfig;
}): Promise<void> {
  const lastFunctionName =
    benchmarkConfig.functions[benchmarkConfig.functions.length - 1]
      .functionName;
  while (true) {
    await wait(2000);
    try {
      const command = new DescribeLogStreamsCommand({
        logGroupName: `/aws/lambda/${lastFunctionName}-${benchmarkConfig.runs}`,
      });
      await logGroupClient.send(command);
      process.stdout.write("\n");
      break;
    } catch {
      // Log is not ready yet
      process.stdout.write(".");
    }
  }
  return;
}

/**
 * Collects logs for the given benchmarkConfig functions and runs, using
 * logGroupClient and cloudwatchClient.
 *
 * @param {Object} params - An object containing logGroupClient and cloudwatchClient
 * @param {CloudWatchLogsClient} params.logGroupClient - The client used to interact with the log group.
 * @param {CloudWatchLogsClient} params.cloudwatchClient - The client used to interact with CloudWatch.
 * @returns {Promise<OutputLog>} - A promise that resolves to an array of log events.
 */
async function collectLogs({
  logGroupClient,
  cloudwatchClient,
}: {
  logGroupClient: CloudWatchLogsClient;
  cloudwatchClient: CloudWatchLogsClient;
}): Promise<OutputLog> {
  let outputLog: OutputLog = [];
  for (const fn of benchmarkConfig.functions) {
    for (let i = 1; i <= benchmarkConfig.runs; i++) {
      const logGroupName = `/aws/lambda/${fn.functionName}-${i}`;
      console.log(`  - logGroup '${logGroupName}'`);
      const command = new DescribeLogStreamsCommand({ logGroupName });
      const { logStreams } = await logGroupClient.send(command);
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
          const { events, nextForwardToken } = await cloudwatchClient.send(
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
