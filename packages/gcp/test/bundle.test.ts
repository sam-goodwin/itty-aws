/**
 * Smoke test: the SDK must bundle cleanly with Rolldown (>= 1.1).
 *
 * Bundles from `src` (via the "bun" export condition) with third-party
 * dependencies external, so this exercises our generated code and its
 * `@__PURE__` annotations without requiring a prior build.
 */
import { fileURLToPath } from "node:url";
import { rolldown } from "rolldown";
import { expect, test } from "vitest";

const entries = ["../src/index.ts", "../src/services/storage-v1.ts"];

for (const entry of entries) {
  test(`bundles ${entry} with rolldown`, { timeout: 120_000 }, async () => {
    const bundle = await rolldown({
      input: fileURLToPath(new URL(entry, import.meta.url)),
      resolve: { conditionNames: ["bun", "import", "default"] },
      external: (id) =>
        !id.startsWith(".") && !id.startsWith("/") &&
        !id.startsWith("@distilled.cloud/"),
      logLevel: "silent",
    });
    try {
      const { output } = await bundle.generate({ format: "esm" });
      expect(output[0].code.length).toBeGreaterThan(0);
    } finally {
      await bundle.close();
    }
  });
}
