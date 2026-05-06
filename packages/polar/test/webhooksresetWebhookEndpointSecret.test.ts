import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { webhookscreateWebhookEndpoint } from "../src/operations/webhookscreateWebhookEndpoint.ts";
import { webhooksdeleteWebhookEndpoint } from "../src/operations/webhooksdeleteWebhookEndpoint.ts";
import { webhooksresetWebhookEndpointSecret } from "../src/operations/webhooksresetWebhookEndpointSecret.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("webhooksresetWebhookEndpointSecret", () => {
  it("regenerates a webhook endpoint secret", { timeout: 60_000 }, async () => {
    const url = `https://distilled.example.com/webhooks/reset/${testRunId}`;
    const name = `distilled-webhookreset-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const endpointIdRef = yield* Ref.make<string | null>(null);
        return yield* Effect.gen(function* () {
          const created = yield* webhookscreateWebhookEndpoint({
            url,
            name,
            format: "raw",
            events: ["subscription.created"],
          });
          yield* Ref.set(endpointIdRef, created.id);
          const reset = yield* webhooksresetWebhookEndpointSecret({
            id: created.id,
          });
          return { created, reset };
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

    expect(result.reset.id).toBe(result.created.id);
    expect(result.reset.url).toBe(url);
    expect(result.reset.format).toBe("raw");
    expect(typeof result.reset.organization_id).toBe("string");
    expect(result.reset.secret).toBeDefined();
  });

  it(
    "fails with NotFound for a non-existent webhook endpoint id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhooksresetWebhookEndpointSecret({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "surfaces validation details for a malformed webhook endpoint id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhooksresetWebhookEndpointSecret({ id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
