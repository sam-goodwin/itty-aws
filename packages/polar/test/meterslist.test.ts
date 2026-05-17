import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { meterslist } from "../src/operations/meterslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("meterslist", () => {
  it("lists meters with default pagination", { timeout: 30_000 }, async () => {
    const result = await runEffect(meterslist({ page: 1, limit: 10 }));

    expect(Array.isArray(result.items)).toBe(true);
    expect(typeof result.pagination.total_count).toBe("number");
    expect(typeof result.pagination.max_page).toBe("number");
    expect(result.items.length).toBeLessThanOrEqual(10);

    for (const meter of result.items) {
      expect(typeof meter.id).toBe("string");
      expect(typeof meter.name).toBe("string");
      expect(typeof meter.organization_id).toBe("string");
      expect(typeof meter.created_at).toBe("string");
      expect(meter.unit).toBe("scalar");
      expect(meter.filter.conjunction).toBe("and");
      expect(Array.isArray(meter.filter.clauses)).toBe(true);
      expect(meter.aggregation.func).toBe("count");
      expect(typeof meter.metadata).toBe("object");
    }
  });

  it(
    "fails with UnprocessableEntity for an out-of-range limit",
    { timeout: 30_000 },
    async () => {
      // Polar caps `limit` at 100; values above the cap are rejected with
      // a typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        meterslist({ limit: 100_000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a non-positive page",
    { timeout: 30_000 },
    async () => {
      // Pages are 1-indexed; `page=0` is rejected as a typed
      // UnprocessableEntity by the validation layer.
      const error = await runEffect(meterslist({ page: 0 }).pipe(Effect.flip));

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
