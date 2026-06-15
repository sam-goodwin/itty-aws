import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createEvent } from "../src/operations/createEvent";
import { deleteEvent } from "../src/operations/deleteEvent";
import { updateEvent } from "../src/operations/updateEvent";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_EVENT_ID = "00000000-0000-4000-8000-000000000000";

describe("updateEvent", () => {
  it("updates an event's schema", async () => {
    const name = `distilled_resend_updateEvent_${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEvent({ name });
        if (!created.id) {
          return yield* Effect.die("createEvent did not return an id");
        }
        createdId = created.id;
        return yield* updateEvent({
          identifier: created.id,
          schema: {
            type: "object",
            properties: {
              user_id: { type: "string" },
              plan: { type: "string" },
            },
            required: ["user_id"],
          },
        });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteEvent({ identifier: createdId }).pipe(Effect.ignore)
              : deleteEvent({ identifier: name }).pipe(Effect.ignore),
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
  });

  it("clears an event's schema by setting it to null", async () => {
    const name = `distilled_resend_updateEvent_clear_${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEvent({
          name,
          schema: {
            type: "object",
            properties: { user_id: { type: "string" } },
          },
        });
        if (!created.id) {
          return yield* Effect.die("createEvent did not return an id");
        }
        createdId = created.id;
        return yield* updateEvent({
          identifier: created.id,
          schema: null,
        });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteEvent({ identifier: createdId }).pipe(Effect.ignore)
              : deleteEvent({ identifier: name }).pipe(Effect.ignore),
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
  });

  it("fails with NotFound for a non-existent event id", async () => {
    const error = await runEffect(
      updateEvent({
        identifier: NON_EXISTENT_EVENT_ID,
        schema: { type: "object" },
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
