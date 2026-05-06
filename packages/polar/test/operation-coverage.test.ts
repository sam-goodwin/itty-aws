import { readdir, readFile } from "node:fs/promises";
import { dirname, basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const operationsDir = join(packageRoot, "src", "operations");
const testDir = join(packageRoot, "test");

describe("generated Polar operation coverage", () => {
  it("keeps every generated operation referenced by a test", async () => {
    const operationNames = (await readdir(operationsDir))
      .filter((file) => file.endsWith(".ts") && file !== "index.ts")
      .map((file) => basename(file, ".ts"))
      .sort();
    const testFiles = (await readdir(testDir)).filter(
      (file) =>
        file.endsWith(".test.ts") && file !== "operation-coverage.test.ts",
    );
    const testSource = (
      await Promise.all(
        testFiles.map((file) => readFile(join(testDir, file), "utf8")),
      )
    ).join("\n");

    const missing = operationNames.filter(
      (operation) => !new RegExp(`\\b${operation}\\b`).test(testSource),
    );

    expect(missing).toEqual([]);
  });
});
