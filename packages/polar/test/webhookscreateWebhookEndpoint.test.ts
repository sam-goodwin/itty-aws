import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { webhookscreateWebhookEndpoint } from "../src/operations/webhookscreateWebhookEndpoint.ts";
import { webhooksdeleteWebhookEndpoint } from "../src/operations/webhooksdeleteWebhookEndpoint.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("webhookscreateWebhookEndpoint", () => {
  it("creates a webhook endpoint", { timeout: 60_000 }, async () => {
    const url = `https://distilled.example.com/webhooks/${testRunId}`;
    const name = `distilled-webhook-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const endpointIdRef = yield* Ref.make<string | null>(null);
        return yield* Effect.gen(function* () {
          const created = yield* webhookscreateWebhookEndpoint({
            url,
            name,
            format: "raw",
            events: ["subscription.created", "subscription.updated"],
          });
          yield* Ref.set(endpointIdRef, created.id);
          return created;
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const id = yield* Ref.get(endpointIdRef);
              if (id !== null) {
                yield* webhooksdeleteWebhookEndpoint({ id }).pipe(
                  Effect.ignore,
                );
              }
            }),
          ),
        );
      }),
    );

    expect(typeof result.id).toBe("string");
    expect(result.url).toBe(url);
    expect(result.format).toBe("raw");
    expect(result.events).toContain("subscription.created");
    expect(result.events).toContain("subscription.updated");
    expect(typeof result.organization_id).toBe("string");
    expect(typeof result.enabled).toBe("boolean");
  });

  it(
    "rejects a webhook endpoint with a malformed URL",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhookscreateWebhookEndpoint({
          url: "not-a-valid-url",
          name: `distilled-webhook-bad-${testRunId}`,
          format: "raw",
          events: ["subscription.created"],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
