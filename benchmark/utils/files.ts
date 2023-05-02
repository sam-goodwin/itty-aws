import { exec } from "node:child_process";
import { promises as fsPromises } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import util from "node:util";

const execAsync = util.promisify(exec);

/**
 * Returns the name of the root folder of the project.
 *
 * @returns The name of the root folder of the project.
 */
export function getRootDirname(): string {
  const __filename = fileURLToPath(import.meta.url);
  // our function lives in /utils, so we return the parent folder name
  return dirname(dirname(__filename));
}

/**
 * Writes the given data to the specified output file path.
 * If the directory of the output file does not exist, it will be created recursively.
 * @param props - An object containing the output file path and data to be written.
 * @returns A Promise that resolves when the data has been written to the output file.
 * @throws An error if there is an issue creating the directory or writing to the output file.
 */
export async function writeOutput(props: {
  outputFilePath: string;
  outputData: string;
}): Promise<void> {
  try {
    await fsPromises.mkdir(dirname(props.outputFilePath), { recursive: true });
    await fsPromises.writeFile(props.outputFilePath, props.outputData);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Get the current Git branch name of the repository in the current directory.
 * @returns {Promise<string>} A Promise that resolves to the Git branch name as a string, or an empty string if not found.
 */
export async function getGitBranch(): Promise<string> {
  try {
    const res = await execAsync("git rev-parse --abbrev-ref HEAD 2>/dev/null", {
      encoding: "utf-8",
    });
    return res?.stdout.trim() ?? "";
  } catch {
    return "";
  }
}

/**
 * Retrieves the latest Git tag using `git describe`.
 *
 * @returns A Promise that resolves to a string representing the latest Git tag.
 */
export async function getGitTag(): Promise<string> {
  try {
    const res = await execAsync("git describe --tags --abbrev=0 2>/dev/null", {
      encoding: "utf-8",
    });
    return res?.stdout.trim() ?? "";
  } catch {
    return "";
  }
}
