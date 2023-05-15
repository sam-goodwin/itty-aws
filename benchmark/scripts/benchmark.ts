import { constants, promises as fsPromises } from "node:fs";
import { dirname } from "node:path";
import { performance } from "perf_hooks";
import { benchmarkConfig } from "../benchmarkConfig";
import { CloudWatchLog } from "../types";
import { roundToTwoDecimalPlaces } from "../utils/format";
import { createFunctionExecutionsList } from "./steps/createFunctionExecutionsList";
import { runBenchmark } from "./steps/runBenchmark";

/**
 *
 * This function is the entrypoint of the benchmark script. It is immediately invoked.
 * @returns {Promise<void>}
 */
(async function main(): Promise<void> {
  const scriptStartTime = performance.now();
  console.log(`# Benchmark branch '${benchmarkConfig.gitBranch}'`);

  await deleteFile({
    path: benchmarkConfig.output.jsonFilePath,
  });

  const cloudWatchLog = await runBenchmark({ benchmarkConfig });
  const functionExecutionsList = await createFunctionExecutionsList({
    cloudWatchLog,
  });
  // const functionExecutionsList: FunctionExecutionsList = await readFile({
  //   path: benchmarkConfig.output.jsonFilePath,
  // });

  await writeFile({
    path: benchmarkConfig.output.jsonFilePath,
    data: JSON.stringify(functionExecutionsList, null, 2),
  });
  // console.log(functionExecutionsList);

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
export async function readFile(props: {
  path: string;
}): Promise<CloudWatchLog> {
  try {
    const res = await fsPromises.readFile(props.path);
    const cloudWatchLog: CloudWatchLog = JSON.parse(res.toString());
    return cloudWatchLog;
  } catch (error) {
    console.error(error);
    return [];
  }
}
