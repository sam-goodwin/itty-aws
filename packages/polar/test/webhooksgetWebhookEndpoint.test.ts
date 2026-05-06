import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { webhookscreateWebhookEndpoint } from "../src/operations/webhookscreateWebhookEndpoint.ts";
import { webhooksdeleteWebhookEndpoint } from "../src/operations/webhooksdeleteWebhookEndpoint.ts";
import { webhooksgetWebhookEndpoint } from "../src/operations/webhooksgetWebhookEndpoint.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("webhooksgetWebhookEndpoint", () => {
  it("fetches a webhook endpoint by id", { timeout: 60_000 }, async () => {
    const url = `https://distilled.example.com/webhooks/get/${testRunId}`;
    const name = `distilled-webhookget-${testRunId}`;

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
          const fetched = yield* webhooksgetWebhookEndpoint({
            id: created.id,
          });
          return { created, fetched };
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

    expect(result.fetched.id).toBe(result.created.id);
    expect(result.fetched.url).toBe(url);
    expect(result.fetched.format).toBe("raw");
    expect(result.fetched.events).toContain("subscription.created");
    expect(typeof result.fetched.organization_id).toBe("string");
  });

  it(
    "fails with NotFound for a non-existent webhook endpoint id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhooksgetWebhookEndpoint({
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
        webhooksgetWebhookEndpoint({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
