import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContact } from "../src/operations/createContact";
import { createTopic } from "../src/operations/createTopic";
import { deleteContact } from "../src/operations/deleteContact";
import { deleteTopic } from "../src/operations/deleteTopic";
import { updateContactTopic } from "../src/operations/updateContactTopic";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_CONTACT_ID = "00000000-0000-4000-8000-000000000000";

describe("updateContactTopic", () => {
  it("updates a contact's topic subscription", async () => {
    const email = `distilled-resend-updateContactTopic-${testRunId}@example.com`;
    const topicName = `distilled-resend-updateContactTopic-${testRunId}`;
    let contactId: string | undefined;
    let topicId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const contact = yield* createContact({ email });
        if (!contact.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        contactId = contact.id;

        const topic = yield* createTopic({
          name: topicName,
          default_subscription: "opt_in",
        });
        if (!topic.id) {
          return yield* Effect.die("createTopic did not return an id");
        }
        topicId = topic.id;

        return yield* updateContactTopic({
          contact_id: contact.id,
          topics: [{ id: topic.id, subscription: "opt_out" }],
        });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            topicId
              ? deleteTopic({ id: topicId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
        Effect.ensuring(
          Effect.suspend(() =>
            contactId
              ? deleteContact({ id: contactId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
  });

  it("fails with NotFound for a non-existent contact id", async () => {
    const topicName = `distilled-resend-updateContactTopic-nf-${testRunId}`;
    let topicId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const topic = yield* createTopic({
          name: topicName,
          default_subscription: "opt_in",
        });
        if (!topic.id) {
          return yield* Effect.die("createTopic did not return an id");
        }
        topicId = topic.id;

        return yield* updateContactTopic({
          contact_id: NON_EXISTENT_CONTACT_ID,
          topics: [{ id: topic.id, subscription: "opt_in" }],
        }).pipe(Effect.flip);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            topicId
              ? deleteTopic({ id: topicId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for an invalid topic id", async () => {
    const email = `distilled-resend-updateContactTopic-unproc-${testRunId}@example.com`;
    let contactId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const contact = yield* createContact({ email });
        if (!contact.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        contactId = contact.id;

        return yield* updateContactTopic({
          contact_id: contact.id,
          topics: [{ id: "not-a-valid-uuid", subscription: "opt_in" }],
        }).pipe(Effect.flip);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            contactId
              ? deleteContact({ id: contactId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
