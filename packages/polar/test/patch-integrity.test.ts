import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const packageRoot = import.meta.dirname ?? process.cwd();
const root = packageRoot.endsWith("/test")
  ? packageRoot.slice(0, -"/test".length)
  : packageRoot;
const patchesDir = join(root, "patches");

describe("Polar OpenAPI patches", () => {
  it("keeps each patch file documented and non-empty", async () => {
    const patchFiles = (await readdir(patchesDir))
      .filter((file) => file.endsWith(".patch.json"))
      .sort();

    expect(patchFiles.length).toBeGreaterThan(0);

    for (const file of patchFiles) {
      const parsed = JSON.parse(await readFile(join(patchesDir, file), "utf8"));

      expect(parsed.description, file).toEqual(expect.any(String));
      expect(parsed.description.trim().length, file).toBeGreaterThan(20);
      expect(parsed.patches, file).toEqual(expect.any(Array));
      expect(parsed.patches.length, file).toBeGreaterThan(0);

      for (const patch of parsed.patches) {
        expect(patch.op, file).toEqual(
          expect.stringMatching(/^(add|replace|remove)$/),
        );
        expect(patch.path, file).toEqual(expect.stringMatching(/^\//));

        if (patch.op !== "remove") {
          expect(patch, file).toHaveProperty("value");
        }
      }
    }
  });
});
