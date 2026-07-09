import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createEvent } from "../src/operations/createEvent";
import { deleteEvent } from "../src/operations/deleteEvent";
import { getEvent } from "../src/operations/getEvent";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_EVENT_ID = "00000000-0000-4000-8000-000000000000";

describe("getEvent", () => {
  it("retrieves an event by id", async () => {
    const name = `distilled_resend_getEvent_${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEvent({ name });
        if (!created.id) {
          return yield* Effect.die("createEvent did not return an id");
        }
        createdId = created.id;
        return yield* getEvent({ identifier: created.id });
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
    expect(result.name).toBe(name);
  });

  it("retrieves an event by name", async () => {
    const name = `distilled_resend_getEvent_byname_${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEvent({ name });
        createdId = created.id;
        return yield* getEvent({ identifier: name });
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
    expect(result.name).toBe(name);
  });

  it("fails with NotFound for a non-existent event id", async () => {
    const error = await runEffect(
      getEvent({ identifier: NON_EXISTENT_EVENT_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
