import { readdir, readFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const operationsDir = join(packageRoot, "src", "operations");

describe("generated Polar operation exports", () => {
  it("exports every generated operation file from the operations barrel", async () => {
    const operationNames = (await readdir(operationsDir))
      .filter((file) => file.endsWith(".ts") && file !== "index.ts")
      .map((file) => basename(file, ".ts"))
      .sort();
    const barrel = await readFile(join(operationsDir, "index.ts"), "utf8");
    const missing = operationNames.filter(
      (operation) => !barrel.includes(`export * from "./${operation}.ts";`),
    );

    expect(missing).toEqual([]);
  });
});
