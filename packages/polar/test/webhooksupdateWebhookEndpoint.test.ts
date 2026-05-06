import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { webhookscreateWebhookEndpoint } from "../src/operations/webhookscreateWebhookEndpoint.ts";
import { webhooksdeleteWebhookEndpoint } from "../src/operations/webhooksdeleteWebhookEndpoint.ts";
import { webhooksupdateWebhookEndpoint } from "../src/operations/webhooksupdateWebhookEndpoint.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("webhooksupdateWebhookEndpoint", () => {
  it(
    "updates a webhook endpoint's url, events and enabled flag",
    { timeout: 60_000 },
    async () => {
      const initialUrl = `https://distilled.example.com/webhooks/upd/${testRunId}`;
      const updatedUrl = `https://distilled.example.com/webhooks/upd/${testRunId}/v2`;
      const initialName = `distilled-webhookupd-${testRunId}`;
      const updatedName = `distilled-webhookupd-${testRunId}-renamed`;

      const result = await runEffect(
        Effect.gen(function* () {
          const endpointIdRef = yield* Ref.make<string | null>(null);
          return yield* Effect.gen(function* () {
            const created = yield* webhookscreateWebhookEndpoint({
              url: initialUrl,
              name: initialName,
              format: "raw",
              events: ["subscription.created"],
            });
            yield* Ref.set(endpointIdRef, created.id);
            const updated = yield* webhooksupdateWebhookEndpoint({
              id: created.id,
              url: updatedUrl,
              name: updatedName,
              events: ["subscription.created", "subscription.updated"],
              enabled: false,
            });
            return { created, updated };
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

      expect(result.updated.id).toBe(result.created.id);
      expect(result.updated.url).toBe(updatedUrl);
      expect(result.updated.events).toContain("subscription.created");
      expect(result.updated.events).toContain("subscription.updated");
      expect(result.updated.enabled).toBe(false);
    },
  );

  it(
    "fails with NotFound for a non-existent webhook endpoint id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhooksupdateWebhookEndpoint({
          id: "00000000-0000-4000-8000-000000000000",
          name: `distilled-webhookupd-nf-${testRunId}`,
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
        webhooksupdateWebhookEndpoint({
          id: "not-a-uuid",
          name: `distilled-webhookupd-vd-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
