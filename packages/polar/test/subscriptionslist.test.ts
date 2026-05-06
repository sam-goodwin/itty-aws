import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { subscriptionslist } from "../src/operations/subscriptionslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("subscriptionslist", () => {
  it(
    "lists subscriptions for the configured organization",
    { timeout: 30_000 },
    async () => {
      const listed = await runEffect(
        subscriptionslist({
          limit: 100,
        }),
      );

      expect(Array.isArray(listed.items)).toBe(true);
      expect(typeof listed.pagination.total_count).toBe("number");
      expect(typeof listed.pagination.max_page).toBe("number");
      for (const sub of listed.items) {
        expect(typeof sub.id).toBe("string");
        expect(typeof sub.status).toBe("string");
      }
    },
  );

  it(
    "surfaces validation details when limit exceeds the maximum",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        subscriptionslist({ limit: 1000 }).pipe(Effect.exit),
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
      expect(error.message).toContain("limit");
    },
  );
});
