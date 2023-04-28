import {
  CloudWatchLogsClient,
  DeleteLogGroupCommand,
  DescribeLogStreamsCommand,
  GetLogEventsCommand,
  GetLogEventsCommandInput,
  OutputLogEvent,
} from "@aws-sdk/client-cloudwatch-logs";
import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import { promises as fsPromises } from "fs";
import path from "path";
import { CONFIG } from "../benchmarkConfig";
import { wait } from "../utils/wait";
import { getGitBranch, getGitTag } from "../utils/filesystem";

interface IBenckmarkResult {
  git: {
    branch: string;
    tag?: string;
  };
  time: { start: string; end: string };
  log: OutputLogEvent[];
}

/**
 * Generates logs for a series of AWS Lambda function invocations based on the given configuration.
 * Logs are collected from CloudWatch and written to a file.
 * @async
 * @function main
 * @returns {Promise<void>}
 */
async function main(): Promise<void> {
  // Setup
  const gitBranch = await getGitBranch();
  const gitTag = await getGitTag();
  const filePath = path.join(
    __dirname,
    CONFIG.logs.outputFolder,
    `${gitBranch}/raw.json`
  );
  const rawResult: IBenckmarkResult = {
    git: {
      branch: gitBranch,
      tag: gitTag,
    },
    time: { start: new Date().toISOString(), end: "" },
    log: [],
  };

  console.log(
    `Generate logs for branch '${gitBranch}' ${gitTag ? `(${gitTag})` : ""}`
  );

  // Delete if exist
  console.log("\n- Delete previous artifacts if they exist");
  // - previous results files
  try {
    console.log(`  - Previous result file: '${filePath}'`);
    await fsPromises.unlink(filePath);
  } catch {
    console.log(`    - not found`);
  }
  // - previous cloudwatch log groups
  for (const fn of CONFIG.functions) {
    for (let i = 1; i <= CONFIG.runs; i++) {
      const logGroupName = `/aws/lambda/${fn.functionName}-${i}`;
      const command = new DeleteLogGroupCommand({ logGroupName });
      console.log(`  - log group '${logGroupName}'`);
      try {
        // Use a fresh client to avoid timeouts
        const cloudwatchClient = new CloudWatchLogsClient({});
        await cloudwatchClient.send(command);
        cloudwatchClient.destroy();
      } catch {
        console.log(`    - not found`);
      }
    }
  }

  // Init database
  console.log("\n- Init database");
  try {
    const command = new InvokeCommand({
      FunctionName: "ddb-setup",
    });
    const lambdaClient = new LambdaClient({});
    await lambdaClient.send(command);
  } catch {
    null;
  }

  // Invoke each function instance `CONFIG.runs` times
  // The invocations are run sequentially to avoid race conditions with the dynamodb table
  console.log("\n- Invoke");
  for (const fn of CONFIG.functions) {
    for (let i = 1; i <= CONFIG.runs; i++) {
      const FunctionName = `${fn.functionName}-${i}`;
      console.log(`  - function '${FunctionName}'`);
      const command = new InvokeCommand({
        FunctionName,
      });
      for (let j = 1; j <= CONFIG.runs; j++) {
        console.log(`    - run #${j}`);
        const lambdaClient = new LambdaClient({});
        await lambdaClient.send(command);
        lambdaClient.destroy();
      }
    }
  }

  console.log("\n- Wait for 3 seconds, to let CloudWatch process the logs");
  await wait(3000);

  // Collect logs
  console.log("\n- Collect logs");
  let eventsLog: OutputLogEvent[] = [];
  for (const fn of CONFIG.functions) {
    for (let i = 1; i <= CONFIG.runs; i++) {
      const logGroupName = `/aws/lambda/${fn.functionName}-${i}`;
      console.log(`  - from '${logGroupName}'`);
      const logGroupClient = new CloudWatchLogsClient({});
      const command = new DescribeLogStreamsCommand({ logGroupName });
      const { logStreams } = await logGroupClient.send(command);
      logGroupClient.destroy();
      if (logStreams) {
        for (const logStream of logStreams) {
          const params: GetLogEventsCommandInput = {
            logGroupName,
            logStreamName: logStream.logStreamName,
            startFromHead: true,
          };
          let nextToken: string | undefined;
          do {
            params.nextToken = nextToken;
            console.log(`    - logStream '${params.logStreamName}'`);
            const logStreamClient = new CloudWatchLogsClient({});
            const command = new GetLogEventsCommand(params);
            const { events, nextForwardToken } = await logStreamClient.send(
              command
            );
            logStreamClient.destroy();
            if (events) eventsLog = [...eventsLog, ...events];
            if (nextToken === nextForwardToken) {
              nextToken = undefined;
            } else {
              nextToken = nextForwardToken;
            }
          } while (nextToken);
        }
      }
    }
  }

  // Write logs
  console.log(`\n- Write raw data to '${filePath}'`);
  rawResult.log = [...eventsLog];
  rawResult.time.end = new Date().toISOString();
  await fsPromises.writeFile(filePath, JSON.stringify(rawResult, null, "  "));

  console.log(`\nBenchmark done.`);
}
main();
