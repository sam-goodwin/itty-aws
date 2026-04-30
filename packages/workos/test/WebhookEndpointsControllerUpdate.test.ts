import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { WebhookEndpointsControllerCreate } from "../src/operations/WebhookEndpointsControllerCreate.ts";
import { WebhookEndpointsControllerDelete } from "../src/operations/WebhookEndpointsControllerDelete.ts";
import { WebhookEndpointsControllerUpdate } from "../src/operations/WebhookEndpointsControllerUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const conflictOrUnprocessable = ["Conflict", "UnprocessableEntity"] as const;

describe("WebhookEndpointsControllerUpdate", () => {
  it(
    "updates a webhook endpoint, then cleans up",
    async () => {
      const endpointUrl = `https://distilled-${testRunId}-update.distilled.test/webhooks`;
      const updatedUrl = `https://distilled-${testRunId}-update-2.distilled.test/webhooks`;
      let createdId: string | undefined;

      await runEffect(
        Effect.gen(function* () {
          const created = yield* WebhookEndpointsControllerCreate({
            endpoint_url: endpointUrl,
            events: ["user.created"],
          });
          createdId = created.id;

          const result = yield* WebhookEndpointsControllerUpdate({
            id: created.id,
            endpoint_url: updatedUrl,
            events: ["user.updated"],
            status: "disabled",
          });
          expect(result).toBeDefined();
          expect(result.id).toBe(created.id);
          expect(result.endpoint_url).toBe(updatedUrl);
          expect(result.status).toBe("disabled");
          expect(result.events).toContain("user.updated");
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
    "fails with NotFound for a non-existent endpoint id",
    async () => {
      const error = await runEffect(
        WebhookEndpointsControllerUpdate({
          id: `we_does_not_exist_${testRunId}`,
          status: "disabled",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed Conflict when changing the endpoint_url to one already registered",
    async () => {
      const urlA = `https://distilled-${testRunId}-conflict-a.distilled.test/webhooks`;
      const urlB = `https://distilled-${testRunId}-conflict-b.distilled.test/webhooks`;
      let idA: string | undefined;
      let idB: string | undefined;

      await runEffect(
        Effect.gen(function* () {
          const a = yield* WebhookEndpointsControllerCreate({
            endpoint_url: urlA,
            events: ["user.created"],
          });
          idA = a.id;
          const b = yield* WebhookEndpointsControllerCreate({
            endpoint_url: urlB,
            events: ["user.created"],
          });
          idB = b.id;

          const error = yield* WebhookEndpointsControllerUpdate({
            id: b.id,
            endpoint_url: urlA,
          }).pipe(Effect.flip);
          expect(conflictOrUnprocessable).toContain(error._tag);
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              Effect.all(
                [
                  idA
                    ? WebhookEndpointsControllerDelete({ id: idA }).pipe(
                        Effect.ignore,
                      )
                    : Effect.void,
                  idB
                    ? WebhookEndpointsControllerDelete({ id: idB }).pipe(
                        Effect.ignore,
                      )
                    : Effect.void,
                ],
                { discard: true },
              ),
            ),
          ),
        ),
      );
    },
    { timeout: 90_000 },
  );

  it(
    "fails with UnprocessableEntity for a malformed endpoint_url update",
    async () => {
      const endpointUrl = `https://distilled-${testRunId}-unproc.distilled.test/webhooks`;
      let createdId: string | undefined;

      await runEffect(
        Effect.gen(function* () {
          const created = yield* WebhookEndpointsControllerCreate({
            endpoint_url: endpointUrl,
            events: ["user.created"],
          });
          createdId = created.id;

          const error = yield* WebhookEndpointsControllerUpdate({
            id: created.id,
            endpoint_url: "not-a-valid-url",
          }).pipe(Effect.flip);
          expect(error._tag).toBe("UnprocessableEntity");
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
});
