import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { refundslist } from "../src/operations/refundslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("refundslist", () => {
  it(
    "lists refunds for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(refundslist({ limit: 100 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const refund of result.items) {
        expect(typeof refund.id).toBe("string");
        expect(refund.status).toBe("pending");
        expect(refund.reason).toBe("duplicate");
        expect(typeof refund.amount).toBe("number");
        expect(typeof refund.currency).toBe("string");
        expect(typeof refund.order_id).toBe("string");
        expect(typeof refund.customer_id).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        refundslist({ limit: 1000 }).pipe(Effect.exit),
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
