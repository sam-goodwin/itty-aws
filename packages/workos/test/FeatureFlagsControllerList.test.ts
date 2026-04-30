import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { FeatureFlagsControllerList } from "../src/operations/FeatureFlagsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("FeatureFlagsControllerList", () => {
  it(
    "lists feature flags",
    async () => {
      const result = await runEffect(
        FeatureFlagsControllerList({ limit: 10 }),
      );

      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();

      for (const flag of result.data) {
        expect(typeof flag.id).toBe("string");
        expect(typeof flag.slug).toBe("string");
        expect(typeof flag.name).toBe("string");
        expect(Array.isArray(flag.tags)).toBe(true);
        expect(typeof flag.enabled).toBe("boolean");
        expect(typeof flag.default_value).toBe("boolean");
        expect(typeof flag.created_at).toBe("string");
        expect(typeof flag.updated_at).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest for a malformed cursor",
    async () => {
      const error = await runEffect(
        FeatureFlagsControllerList({
          after: "not a valid cursor!!",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when paginating with a non-existent cursor",
    async () => {
      const error = await runEffect(
        FeatureFlagsControllerList({
          after: `feature_flag_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when limit exceeds the allowed range",
    async () => {
      const error = await runEffect(
        FeatureFlagsControllerList({ limit: 1000 }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
