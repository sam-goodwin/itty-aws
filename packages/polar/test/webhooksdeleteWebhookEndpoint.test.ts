import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { webhookscreateWebhookEndpoint } from "../src/operations/webhookscreateWebhookEndpoint.ts";
import { webhooksdeleteWebhookEndpoint } from "../src/operations/webhooksdeleteWebhookEndpoint.ts";
import { webhooksgetWebhookEndpoint } from "../src/operations/webhooksgetWebhookEndpoint.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("webhooksdeleteWebhookEndpoint", () => {
  it("deletes a webhook endpoint", { timeout: 60_000 }, async () => {
    const url = `https://distilled.example.com/webhooks/del/${testRunId}`;
    const name = `distilled-webhookdel-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* webhookscreateWebhookEndpoint({
          url,
          name,
          format: "raw",
          events: ["subscription.created"],
        });
        yield* webhooksdeleteWebhookEndpoint({ id: created.id });
        const lookupTag = yield* webhooksgetWebhookEndpoint({
          id: created.id,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e._tag),
            onSuccess: () => Effect.succeed("ok"),
          }),
        );
        return { created, lookupTag };
      }),
    );

    expect(typeof result.created.id).toBe("string");
    expect(result.lookupTag).toBe("ResourceNotFound");
  });

  it(
    "fails with NotFound for a non-existent webhook endpoint id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhooksdeleteWebhookEndpoint({
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
        webhooksdeleteWebhookEndpoint({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
