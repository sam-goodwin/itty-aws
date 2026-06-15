import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createEvent } from "../src/operations/createEvent";
import { deleteEvent } from "../src/operations/deleteEvent";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_EVENT_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteEvent", () => {
  it("deletes an event created in the test", async () => {
    const name = `distilled_resend_deleteEvent_${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEvent({ name });
        if (!created.id) {
          return yield* Effect.die("createEvent did not return an id");
        }
        return yield* deleteEvent({ identifier: created.id });
      }),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("deletes an event by name", async () => {
    const name = `distilled_resend_deleteEvent_byname_${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        yield* createEvent({ name });
        return yield* deleteEvent({ identifier: name });
      }),
    );

    expect(result).toBeDefined();
  });

  it("fails with NotFound for a non-existent event id", async () => {
    const error = await runEffect(
      deleteEvent({ identifier: NON_EXISTENT_EVENT_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
