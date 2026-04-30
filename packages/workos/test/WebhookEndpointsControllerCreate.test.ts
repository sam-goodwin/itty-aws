import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { WebhookEndpointsControllerCreate } from "../src/operations/WebhookEndpointsControllerCreate.ts";
import { WebhookEndpointsControllerDelete } from "../src/operations/WebhookEndpointsControllerDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const typedErrorTags = ["Conflict", "UnprocessableEntity"] as const;

describe("WebhookEndpointsControllerCreate", () => {
  it(
    "creates a webhook endpoint, then cleans up",
    async () => {
      const endpointUrl = `https://distilled-${testRunId}.distilled.test/webhooks`;
      let createdId: string | undefined;

      await runEffect(
        Effect.gen(function* () {
          const result = yield* WebhookEndpointsControllerCreate({
            endpoint_url: endpointUrl,
            events: ["user.created"],
          });
          createdId = result.id;
          expect(result).toBeDefined();
          expect(typeof result.id).toBe("string");
          expect(result.endpoint_url).toBe(endpointUrl);
          expect(["enabled", "disabled"]).toContain(result.status);
          expect(Array.isArray(result.events)).toBe(true);
          expect(result.events).toContain("user.created");
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.updated_at).toBe("string");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId
                ? WebhookEndpointsControllerDelete({ id: createdId }).pipe(
                    Effect.ignore,
                  )
                : Effect.void,
            ),
          ),
        ),
      );
    },
    { timeout: 60_000 },
  );

  it(
    "fails with a typed Conflict when the endpoint url is already registered",
    async () => {
      const endpointUrl = `https://distilled-${testRunId}-conflict.distilled.test/webhooks`;
      let createdId: string | undefined;

      await runEffect(
        Effect.gen(function* () {
          const first = yield* WebhookEndpointsControllerCreate({
            endpoint_url: endpointUrl,
            events: ["user.created"],
          });
          createdId = first.id;

          const error = yield* WebhookEndpointsControllerCreate({
            endpoint_url: endpointUrl,
            events: ["user.created"],
          }).pipe(Effect.flip);
          expect(typedErrorTags).toContain(error._tag);
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId
                ? WebhookEndpointsControllerDelete({ id: createdId }).pipe(
                    Effect.ignore,
                  )
                : Effect.void,
            ),
          ),
        ),
      );
    },
    { timeout: 60_000 },
  );

  it(
    "fails with UnprocessableEntity for a malformed endpoint url",
    async () => {
      const error = await runEffect(
        WebhookEndpointsControllerCreate({
          endpoint_url: "not-a-valid-url",
          events: ["user.created"],
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
