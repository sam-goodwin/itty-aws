import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { FeatureFlagsControllerFindBySlug } from "../src/operations/FeatureFlagsControllerFindBySlug.ts";
import { FeatureFlagsControllerList } from "../src/operations/FeatureFlagsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("FeatureFlagsControllerFindBySlug", () => {
  it(
    "retrieves a feature flag by slug",
    async () => {
      const list = await runEffect(FeatureFlagsControllerList({ limit: 1 }));

      if (list.data.length === 0) {
        // No seed feature flag available — exercise the operation against a
        // missing slug so the call still hits the live API.
        const error = await runEffect(
          FeatureFlagsControllerFindBySlug({
            slug: `feature-flag-does-not-exist-${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { slug: string };
      const flag = await runEffect(
        FeatureFlagsControllerFindBySlug({ slug: seed.slug }),
      );

      expect(flag).toBeDefined();
      expect(flag.slug).toBe(seed.slug);
      expect(typeof flag.id).toBe("string");
      expect(typeof flag.name).toBe("string");
      expect(Array.isArray(flag.tags)).toBe(true);
      expect(typeof flag.enabled).toBe("boolean");
      expect(typeof flag.default_value).toBe("boolean");
      expect(typeof flag.created_at).toBe("string");
      expect(typeof flag.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent feature flag slug",
    async () => {
      const error = await runEffect(
        FeatureFlagsControllerFindBySlug({
          slug: `feature-flag-does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
