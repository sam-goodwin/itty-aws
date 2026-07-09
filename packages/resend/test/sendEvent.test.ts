import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContact } from "../src/operations/createContact";
import { createEvent } from "../src/operations/createEvent";
import { deleteContact } from "../src/operations/deleteContact";
import { deleteEvent } from "../src/operations/deleteEvent";
import { sendEvent } from "../src/operations/sendEvent";
import { runEffect, testRunId } from "./setup";

describe("sendEvent", () => {
  it("sends an event for a contact", async () => {
    const eventName = `distilled_resend_sendEvent_${testRunId}`;
    const email = `distilled-resend-sendEvent-${testRunId}@example.com`;
    let createdEventId: string | undefined;
    let createdContactId: string | undefined;

    await runEffect(
      Effect.gen(function* () {
        const event = yield* createEvent({ name: eventName });
        createdEventId = event.id;

        const contact = yield* createContact({ email });
        if (!contact.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        createdContactId = contact.id;

        yield* sendEvent({
          event: eventName,
          contact_id: contact.id,
          payload: { test_run_id: testRunId },
        });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdContactId
              ? deleteContact({ id: createdContactId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
        Effect.ensuring(
          Effect.suspend(() =>
            createdEventId
              ? deleteEvent({ identifier: createdEventId }).pipe(Effect.ignore)
              : deleteEvent({ identifier: eventName }).pipe(Effect.ignore),
          ),
        ),
      ),
    );
  });

  it("fails with UnprocessableEntity for an empty event name", async () => {
    const error = await runEffect(
      sendEvent({
        event: "",
        email: `distilled-resend-sendEvent-empty-${testRunId}@example.com`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
