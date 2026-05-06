import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { webhookscreateWebhookEndpoint } from "../src/operations/webhookscreateWebhookEndpoint.ts";
import { webhooksdeleteWebhookEndpoint } from "../src/operations/webhooksdeleteWebhookEndpoint.ts";
import { webhooksgetWebhookEndpoint } from "../src/operations/webhooksgetWebhookEndpoint.ts";
import { webhookslistWebhookEndpoints } from "../src/operations/webhookslistWebhookEndpoints.ts";
import { webhooksresetWebhookEndpointSecret } from "../src/operations/webhooksresetWebhookEndpointSecret.ts";
import { webhooksupdateWebhookEndpoint } from "../src/operations/webhooksupdateWebhookEndpoint.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Webhook Endpoints", () => {
  it(
    "creates, gets, lists, updates, resets secret, and deletes a webhook endpoint",
    { timeout: 120_000 },
    async () => {
      const name = `distilled-polar-webhook-${testRunId}`;
      const url = `https://example.com/distilled/polar/${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* webhookscreateWebhookEndpoint({
            name,
            url,
            format: "raw",
            events: ["product.created"],
            organization_id: organizationId,
          });

          return yield* Effect.gen(function* () {
            const listed = yield* webhookslistWebhookEndpoints({
              limit: 100,
              organization_id: organizationId,
            });
            const fetched = yield* webhooksgetWebhookEndpoint({
              id: created.id,
            });
            const updated = yield* webhooksupdateWebhookEndpoint({
              id: created.id,
              name: `${name}-updated`,
              enabled: false,
            });
            const reset = yield* webhooksresetWebhookEndpointSecret({
              id: created.id,
            });
            const deleted = yield* webhooksdeleteWebhookEndpoint({
              id: created.id,
            });

            return { created, listed, fetched, updated, reset, deleted };
          }).pipe(
            Effect.ensuring(
              webhooksdeleteWebhookEndpoint({ id: created.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.name).toBe(name);
      expect(result.created.url).toBe(url);
      expect(
        result.listed.items.some(
          (endpoint) => endpoint.id === result.created.id,
        ),
      ).toBe(true);
      expect(result.fetched.id).toBe(result.created.id);
      expect(result.updated.name).toBe(`${name}-updated`);
      expect(result.updated.enabled).toBe(false);
      expect(result.reset.id).toBe(result.created.id);
      expect(result.deleted).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a missing webhook endpoint",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhooksdeleteWebhookEndpoint({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
