import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { organizationslist } from "../src/operations/organizationslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("organizationslist", () => {
  it(
    "lists organizations the access token can see",
    { timeout: 30_000 },
    async () => {
      const listed = await runEffect(organizationslist({ limit: 100 }));

      expect(Array.isArray(listed.items)).toBe(true);
      expect(typeof listed.pagination.total_count).toBe("number");
      expect(typeof listed.pagination.max_page).toBe("number");
      for (const org of listed.items) {
        expect(typeof org.id).toBe("string");
        expect(typeof org.slug).toBe("string");
        expect(typeof org.name).toBe("string");
      }
    },
  );

  it(
    "surfaces validation details when limit exceeds the maximum",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        organizationslist({ limit: 1000 }).pipe(Effect.exit),
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
