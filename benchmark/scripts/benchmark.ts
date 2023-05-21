import { constants, promises as fsPromises } from "node:fs";
import { dirname } from "node:path";
import { performance } from "perf_hooks";
import { benchmarkConfig } from "../benchmarkConfig";
import { CloudWatchLog, LambdaExecutionLog } from "../types";
import { roundToTwoDecimalPlaces } from "../utils/format";
import { createLambdaExecutionLog } from "./steps/createFunctionExecutionsList";
import { runLambdaFunctions } from "./steps/runLambdaFunctions";
import { buildChartsDatasets } from "./steps/buildChartsDatasets";

/**
 *
 * This function is the entrypoint of the benchmark script. It is immediately invoked.
 * @returns {Promise<void>}
 */
(async function main(): Promise<void> {
  const scriptStartTime = performance.now();
  console.log(`# Benchmark branch '${benchmarkConfig.gitBranch}'`);
  // await deleteFile({
  //   path: benchmarkConfig.output.jsonFilePath,
  // });

  // const cloudWatchLog = await runLambdaFunctions({ benchmarkConfig });
  // await writeFile({
  //   path: `${benchmarkConfig.output.dirPath}/cloudWatchLog.json`,
  //   data: JSON.stringify(cloudWatchLog, null, 2),
  // });
  // const cloudWatchLog: CloudWatchLog = await readFile({
  //   path: `${benchmarkConfig.output.dirPath}/cloudWatchLog.json`,
  // });

  // const lambdaExecutionLog = createLambdaExecutionLog({
  //   cloudWatchLog,
  // });
  // await writeFile({
  //   path: `${benchmarkConfig.output.dirPath}/lambdaExecution.json`,
  //   data: JSON.stringify(lambdaExecutionLog, null, 2),
  // });
  // const lambdaExecutionLog: LambdaExecutionLog = await readFile({
  //   path: `${benchmarkConfig.output.dirPath}/lambdaExecution.json`,
  // });

  // const datasets = buildChartsDatasets({ lambdaExecutionLog, benchmarkConfig });
  // await writeFile({
  //   path: `${benchmarkConfig.output.dirPath}/datasets.json`,
  //   data: JSON.stringify(datasets, null, 2),
  // });
  const datasets: LambdaExecutionLog = await readFile({
    path: `${benchmarkConfig.output.dirPath}/datasets.json`,
  });

  const duration = performance.now() - scriptStartTime;
  console.log(`\nBenchmark: done in ${roundToTwoDecimalPlaces(duration)} ms.`);
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
  console.log(`\n- Delete file : '${path}'`);
  try {
    await fsPromises.access(path, constants.F_OK);
    await fsPromises.unlink(path);
  } catch {
    // Do nothing: the file probably does not exist
  }
}

/**
 * Writes the given data to the specified output file path.
 * If the directory of the output file does not exist, it will be created recursively.
 * @param props - An object containing the output file path and data to be written.
 * @returns A Promise that resolves when the data has been written to the output file.
 * @throws An error if there is an issue creating the directory or writing to the output file.
 */
export async function writeFile(props: {
  path: string;
  data: string;
}): Promise<void> {
  try {
    await fsPromises.mkdir(dirname(props.path), { recursive: true });
    await fsPromises.writeFile(props.path, props.data);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Returns a CloudWatchLog object parsed from a JSON file specified by the given path.
 *
 * @async
 * @function
 * @param {Object} props - An object containing a path property that specifies the path of the file to be read.
 * @param {string} props.path - A string representing the path of the file to be read.
 * @returns {Promise<CloudWatchLog>} - A Promise that resolves to a CloudWatchLog object.
 * @throws {Error} - If an error occurs while reading the file.
 */
export async function readFile<T>(props: { path: string }): Promise<T> {
  try {
    const res = await fsPromises.readFile(props.path);
    return JSON.parse(res.toString()) as T;
  } catch (error) {
    console.error(error);
    return [] as T;
  }
}
