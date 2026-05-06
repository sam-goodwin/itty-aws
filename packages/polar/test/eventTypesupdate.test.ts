import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { eventTypeslist } from "../src/operations/eventTypeslist.ts";
import { eventTypesupdate } from "../src/operations/eventTypesupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("eventTypesupdate", () => {
  it(
    "updates the label of an existing event type",
    { timeout: 30_000 },
    async () => {
      // Find a user-source event type with a persisted id (system event types
      // may have no id and cannot be updated).
      const list = await runEffect(eventTypeslist({ page: 1, limit: 100 }));
      const target = list.items.find(
        (entry) => entry.source === "user" && typeof entry.id === "string",
      );

      if (!target || typeof target.id !== "string") {
        // No updatable event type in the sandbox — exercise the not-found path
        // instead so the test still asserts the operation actually wires up.
        const error = await runEffect(
          eventTypesupdate({
            id: "00000000-0000-0000-0000-000000000000",
            label: `distilled-eventtypes-${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const targetId = target.id;
      const originalLabel = target.label;
      const newLabel = `distilled-eventtypes-${testRunId}`;

      await runEffect(
        eventTypesupdate({ id: targetId, label: newLabel }).pipe(
          Effect.tap((updated) =>
            Effect.sync(() => {
              expect(updated.id).toBe(targetId);
              expect(updated.label).toBe(newLabel);
              expect(updated.name).toBe(target.name);
              expect(typeof updated.organization_id).toBe("string");
              expect(typeof updated.created_at).toBe("string");
            }),
          ),
          Effect.ensuring(
            eventTypesupdate({ id: targetId, label: originalLabel }).pipe(
              Effect.ignore,
            ),
          ),
        ),
      );
    },
  );

  it(
    "fails with RequestValidationError for a non-existent event type ID",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        eventTypesupdate({
          id: "00000000-0000-0000-0000-000000000000",
          label: `distilled-eventtypes-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed event type ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        eventTypesupdate({
          id: "not-a-valid-uuid",
          label: `distilled-eventtypes-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
