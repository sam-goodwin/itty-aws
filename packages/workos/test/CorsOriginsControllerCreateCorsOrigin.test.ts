import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { CorsOriginsControllerCreateCorsOrigin } from "../src/operations/CorsOriginsControllerCreateCorsOrigin.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("CorsOriginsControllerCreateCorsOrigin", () => {
  it(
    "creates a CORS origin",
    async () => {
      const origin = `https://distilled-cors-${testRunId}.example.com`;
      const result = await runEffect(
        CorsOriginsControllerCreateCorsOrigin({ origin }),
      );
      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(result.origin).toBe(origin);
      expect(typeof result.object).toBe("string");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when the origin already exists",
    async () => {
      const origin = `https://distilled-cors-conflict-${testRunId}.example.com`;
      await runEffect(CorsOriginsControllerCreateCorsOrigin({ origin }));

      const error = await runEffect(
        CorsOriginsControllerCreateCorsOrigin({ origin }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("Conflict");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for a malformed origin",
    async () => {
      const error = await runEffect(
        CorsOriginsControllerCreateCorsOrigin({
          origin: `not a url ${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
