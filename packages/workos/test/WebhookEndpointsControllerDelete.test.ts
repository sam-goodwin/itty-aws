import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { WebhookEndpointsControllerCreate } from "../src/operations/WebhookEndpointsControllerCreate.ts";
import { WebhookEndpointsControllerDelete } from "../src/operations/WebhookEndpointsControllerDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("WebhookEndpointsControllerDelete", () => {
  it(
    "deletes a webhook endpoint, then a follow-up delete returns NotFound",
    async () => {
      const created = await runEffect(
        WebhookEndpointsControllerCreate({
          endpoint_url: `https://distilled-${testRunId}-delete.distilled.test/webhooks`,
          events: ["user.created"],
        }),
      );

      const result = await runEffect(
        WebhookEndpointsControllerDelete({ id: created.id }),
      );
      expect(result).toBeUndefined();

      const followUp = await runEffect(
        WebhookEndpointsControllerDelete({ id: created.id }).pipe(Effect.flip),
      );
      expect(followUp._tag).toBe("NotFound");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent webhook endpoint id",
    async () => {
      const error = await runEffect(
        WebhookEndpointsControllerDelete({
          id: `we_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
