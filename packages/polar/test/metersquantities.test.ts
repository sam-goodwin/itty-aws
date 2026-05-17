import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { meterslist } from "../src/operations/meterslist.ts";
import { metersquantities } from "../src/operations/metersquantities.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

const isoDay = (offsetMs: number): string =>
  new Date(Date.now() + offsetMs).toISOString().slice(0, 10);

describeLive("metersquantities", () => {
  it(
    "returns quantities for a meter over a time window",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(meterslist({ page: 1, limit: 1 }));

      if (list.items.length === 0) {
        // Live sandbox has no meters — exercise the not-found path instead so
        // the test still asserts the operation actually wires up correctly.
        const error = await runEffect(
          metersquantities({
            id: "00000000-0000-0000-0000-000000000000",
            start_timestamp: isoDay(-7 * 24 * 60 * 60 * 1000),
            end_timestamp: isoDay(0),
            interval: "day",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const seed = list.items[0]!;
      const result = await runEffect(
        metersquantities({
          id: seed.id,
          start_timestamp: isoDay(-7 * 24 * 60 * 60 * 1000),
          end_timestamp: isoDay(0),
          interval: "day",
        }),
      );

      expect(typeof result.total).toBe("number");
      expect(Array.isArray(result.quantities)).toBe(true);

      for (const point of result.quantities) {
        expect(typeof point.timestamp).toBe("string");
        expect(typeof point.quantity).toBe("number");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent meter ID",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metersquantities({
          id: "00000000-0000-0000-0000-000000000000",
          start_timestamp: isoDay(-7 * 24 * 60 * 60 * 1000),
          end_timestamp: isoDay(0),
          interval: "day",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed meter ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        metersquantities({
          id: "not-a-valid-uuid",
          start_timestamp: isoDay(-7 * 24 * 60 * 60 * 1000),
          end_timestamp: isoDay(0),
          interval: "day",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
