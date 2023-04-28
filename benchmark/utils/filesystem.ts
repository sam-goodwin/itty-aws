import { exec } from "child_process";
import util from "util";

const execAsync = util.promisify(exec);

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
