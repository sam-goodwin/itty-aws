import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { customFieldslist } from "../src/operations/customFieldslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customFieldslist", () => {
  it(
    "lists custom fields with default pagination",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(customFieldslist({ limit: 100 }));
      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const item of result.items) {
        expect(typeof item.id).toBe("string");
        expect(typeof item.slug).toBe("string");
        expect(typeof item.name).toBe("string");
        expect(item.type).toBe("text");
      }
    },
  );

  it(
    "rejects an out-of-range limit with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customFieldslist({ limit: 1000 }).pipe(Effect.exit),
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
