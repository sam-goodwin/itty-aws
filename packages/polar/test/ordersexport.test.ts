import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { ordersexport } from "../src/operations/ordersexport.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("ordersexport", () => {
  it(
    "exports orders as CSV for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(ordersexport({}));

      expect(typeof result).toBe("string");
      // CSV exports always include at least a header row
      expect(result.length).toBeGreaterThan(0);
      expect(result).toContain(",");
    },
  );

  it(
    "rejects a malformed organization_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        ordersexport({ organization_id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
