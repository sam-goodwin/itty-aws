import { exec } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import util from "node:util";
import { BenchmarkConfig } from "./types";

const execAsync = util.promisify(exec);

const gitBranch = await getGitBranch();
const dirPath = join(getRootDirname(), `/benchmark/data/${gitBranch}`);
const jsonFilePath = join(dirPath, "benchmark-results.json");

export const benchmarkConfig: BenchmarkConfig = {
  stackName: "benchmark",
  functionInstances: 1,
  functionRuns: 1,
  gitBranch,
  output: {
    dirPath,
    jsonFilePath,
  },
  setupFunction: {
    functionName: "setup",
    entryPath: "./functions/setup_handler",
  },
  benchmarkFunctions: [
    // Node.js 16.x, aws-sdk v2, runtime
    {
      functionName: "aws16-sdk2-runtime",
      entryPath: "./functions/aws16-sdk2-handler",
      chart: {
        order: 1,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64)",
      },
    },

    // Node.js 16.x, itty-aws, runtime
    {
      functionName: "aws16-itty-runtime",
      entryPath: "./functions/aws-itty-handler",
      useItty: true,
      chart: {
        order: 2,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64)",
      },
    },

    // Node.js 16.x, aws-sdk v2, bundle
    {
      functionName: "aws16-sdk2-bundle",
      entryPath: "./functions/aws16-sdk2-handler",
      useBundle: true,
      chart: {
        order: 3,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192)",
      },
    },

    // Node.js 16.x, itty-aws, bundle
    {
      functionName: "aws16-itty-bundle",
      entryPath: "./functions/aws-itty-handler",
      useItty: true,
      useBundle: true,
      chart: {
        order: 4,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192)",
      },
    },

    // Node.js 18.x, aws-sdk v3, runtime
    {
      functionName: "aws18-sdk3-runtime",
      entryPath: "./functions/aws18-sdk3-handler",
      runtimeName: "NODEJS_18_X",
      chart: {
        order: 5,
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86)",
      },
    },

    // Node.js 18.x, itty-aws, runtime
    {
      functionName: "aws18-itty-runtime",
      entryPath: "./functions/aws-itty-handler",
      runtimeName: "NODEJS_18_X",
      useItty: true,
      chart: {
        order: 6,
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86)",
      },
    },

    // Node.js 18.x, aws-sdk v3, bundle
    {
      functionName: "aws18-sdk3-bundle",
      entryPath: "./functions/aws18-sdk3-handler",
      runtimeName: "NODEJS_18_X",
      useBundle: true,
      chart: {
        order: 7,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235)",
      },
    },

    // Node.js 18.x, itty-aws, bundle
    {
      functionName: "aws18-itty-bundle",
      entryPath: "./functions/aws-itty-handler",
      runtimeName: "NODEJS_18_X",
      useItty: true,
      useBundle: true,
      chart: {
        order: 8,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235)",
      },
    },
  ],
};

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
