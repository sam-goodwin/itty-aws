import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { eventslist } from "../src/operations/eventslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("eventslist", () => {
  it("lists events with default pagination", { timeout: 30_000 }, async () => {
    const result = await runEffect(eventslist({ page: 1, limit: 10 }));

    expect(Array.isArray(result.items)).toBe(true);
    expect(typeof result.pagination.total_count).toBe("number");
    expect(typeof result.pagination.max_page).toBe("number");
    expect(result.items.length).toBeLessThanOrEqual(10);

    for (const event of result.items) {
      expect(typeof event.id).toBe("string");
      expect(typeof event.timestamp).toBe("string");
      expect(typeof event.organization_id).toBe("string");
      expect(typeof event.name).toBe("string");
      expect(event.source).toBe("system");
      expect(typeof event.metadata).toBe("object");
    }
  });

  it(
    "fails with UnprocessableEntity for an out-of-range limit",
    { timeout: 30_000 },
    async () => {
      // Polar caps `limit` at 100; values above the cap are rejected with
      // a typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        eventslist({ limit: 100_000 }).pipe(Effect.flip),
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
      const error = await runEffect(eventslist({ page: 0 }).pipe(Effect.flip));

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
