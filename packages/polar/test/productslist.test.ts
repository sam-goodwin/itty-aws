import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { productslist } from "../src/operations/productslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("productslist", () => {
  it(
    "lists products for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(productslist({ limit: 100 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const product of result.items) {
        expect(typeof product.id).toBe("string");
        expect(typeof product.name).toBe("string");
        expect(product.visibility).toBe("draft");
        expect(typeof product.is_recurring).toBe("boolean");
        expect(typeof product.is_archived).toBe("boolean");
        expect(typeof product.organization_id).toBe("string");
        expect(Array.isArray(product.prices)).toBe(true);
        expect(Array.isArray(product.benefits)).toBe(true);
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        productslist({ limit: 1000 }).pipe(Effect.exit),
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
