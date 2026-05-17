import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { eventTypeslist } from "../src/operations/eventTypeslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("eventTypeslist", () => {
  it(
    "lists event types with aggregated statistics",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(eventTypeslist({ page: 1, limit: 10 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      expect(result.items.length).toBeLessThanOrEqual(10);

      for (const entry of result.items) {
        expect(typeof entry.name).toBe("string");
        expect(typeof entry.label).toBe("string");
        expect(typeof entry.organization_id).toBe("string");
        expect(entry.source).toBe("system");
        expect(typeof entry.occurrences).toBe("number");
        expect(typeof entry.first_seen).toBe("string");
        expect(typeof entry.last_seen).toBe("string");
      }
    },
  );

  it(
    "fails with UnprocessableEntity for an out-of-range limit",
    { timeout: 30_000 },
    async () => {
      // Polar caps `limit` at 100; values above the cap are rejected with
      // a typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        eventTypeslist({ limit: 100_000 }).pipe(Effect.flip),
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
      const error = await runEffect(
        eventTypeslist({ page: 0 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
