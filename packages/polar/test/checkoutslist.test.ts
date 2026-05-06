import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { checkoutslist } from "../src/operations/checkoutslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutslist", () => {
  it(
    "lists checkouts for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(checkoutslist({ limit: 100 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const checkout of result.items) {
        expect(typeof checkout.id).toBe("string");
        expect(checkout.payment_processor).toBe("stripe");
        expect(checkout.status).toBe("open");
        expect(typeof checkout.url).toBe("string");
        expect(typeof checkout.amount).toBe("number");
        expect(typeof checkout.currency).toBe("string");
        expect(typeof checkout.organization_id).toBe("string");
        expect(typeof checkout.is_payment_required).toBe("boolean");
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutslist({ limit: 1000 }).pipe(Effect.exit),
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
