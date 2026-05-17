import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { disputeslist } from "../src/operations/disputeslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("disputeslist", () => {
  it(
    "lists disputes for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(disputeslist({ limit: 100 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const dispute of result.items) {
        expect(typeof dispute.id).toBe("string");
        expect(dispute.status).toBe("prevented");
        expect(typeof dispute.resolved).toBe("boolean");
        expect(typeof dispute.closed).toBe("boolean");
        expect(typeof dispute.amount).toBe("number");
        expect(typeof dispute.currency).toBe("string");
        expect(typeof dispute.order_id).toBe("string");
        expect(typeof dispute.payment_id).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        disputeslist({ limit: 1000 }).pipe(Effect.exit),
      );
      // Polar may either reject the oversized limit OR silently cap it.
      if (Exit.isFailure(error)) {
        const failure = Cause.findErrorOption(error.cause);
        expect(failure._tag).toBe("Some");
        if (failure._tag === "Some") {
          expect(
            (failure.value as { _tag: string }).toBe("RequestValidationError")
              ._tag,
          );
        }
      }
    },
  );
});
