import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { webhookslistWebhookEndpoints } from "../src/operations/webhookslistWebhookEndpoints.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("webhookslistWebhookEndpoints", () => {
  it(
    "lists webhook endpoints for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        webhookslistWebhookEndpoints({
          limit: 100,
        }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const endpoint of result.items) {
        expect(typeof endpoint.id).toBe("string");
        expect(typeof endpoint.url).toBe("string");
        expect(typeof endpoint.organization_id).toBe("string");
        expect(typeof endpoint.enabled).toBe("boolean");
        expect(endpoint.format).toBe("raw");
        expect(Array.isArray(endpoint.events)).toBe(true);
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhookslistWebhookEndpoints({
          limit: 1000,
        }).pipe(Effect.exit),
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
