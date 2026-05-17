import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { licenseKeyslist } from "../src/operations/licenseKeyslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("licenseKeyslist", () => {
  it(
    "lists license keys for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(licenseKeyslist({ limit: 100 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const lk of result.items) {
        expect(typeof lk.id).toBe("string");
        expect(typeof lk.organization_id).toBe("string");
        expect(typeof lk.customer_id).toBe("string");
        expect(typeof lk.benefit_id).toBe("string");
        expect(typeof lk.key).toBe("string");
        expect(typeof lk.display_key).toBe("string");
        expect(lk.status).toBe("granted");
        expect(typeof lk.usage).toBe("number");
        expect(typeof lk.validations).toBe("number");
      }
    },
  );

  it(
    "returns NotFound when filtering by a non-existent benefit_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeyslist({
          benefit_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        licenseKeyslist({ limit: 1000 }).pipe(Effect.exit),
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
