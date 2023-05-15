import { performance } from "perf_hooks";
import { roundToTwoDecimalPlaces } from "../utils/format";
import { constants, promises as fsPromises } from "node:fs";
import { benchmarkConfig } from "../benchmarkConfig";
import { dirname } from "node:path";
import { runBenchmark } from "./steps/runBenchmark";

/**
 *
 * This function is the entrypoint of the benchmark script. It is immediately invoked.
 * @returns {Promise<void>}
 */
(async function main(): Promise<void> {
  // Setup
  const scriptStartTime = performance.now();
  console.log(`# Benchmark branch '${benchmarkConfig.gitBranch}'`);

  // Init
  await deleteFile({
    path: benchmarkConfig.output.jsonFilePath,
  });

  // Run the benchmark
  const cloudWatchLog = await runBenchmark({ benchmarkConfig });

  // Write the results
  await writeFile({
    path: benchmarkConfig.output.jsonFilePath,
    data: JSON.stringify(cloudWatchLog, null, 2),
  });

  // Cleanup
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
