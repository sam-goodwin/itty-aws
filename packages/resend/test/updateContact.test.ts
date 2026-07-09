import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContact } from "../src/operations/createContact";
import { deleteContact } from "../src/operations/deleteContact";
import { getContact } from "../src/operations/getContact";
import { updateContact } from "../src/operations/updateContact";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_CONTACT_ID = "00000000-0000-4000-8000-000000000000";

describe("updateContact", () => {
  it("updates a contact's name and unsubscribed flag", async () => {
    const email = `distilled-resend-updateContact-${testRunId}@example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContact({
          email,
          first_name: "Original",
          last_name: "Name",
        });
        if (!created.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        createdId = created.id;
        const updated = yield* updateContact({
          id: created.id,
          first_name: "Updated",
          last_name: "Person",
          unsubscribed: true,
        });
        const refetched = yield* getContact({ id: created.id });
        return { updated, refetched };
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteContact({ id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result.updated).toBeDefined();
    expect(result.updated.id).toBe(createdId);
    expect(result.refetched.first_name).toBe("Updated");
    expect(result.refetched.last_name).toBe("Person");
    expect(result.refetched.unsubscribed).toBe(true);
  });

  it("fails with NotFound for a non-existent contact id", async () => {
    const error = await runEffect(
      updateContact({
        id: NON_EXISTENT_CONTACT_ID,
        first_name: "Ghost",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for an invalid email", async () => {
    const email = `distilled-resend-updateContact-bad-${testRunId}@example.com`;
    let createdId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContact({ email });
        if (!created.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        createdId = created.id;
        return yield* updateContact({
          id: created.id,
          email: "not-a-valid-email",
        });
      })
        .pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId
                ? deleteContact({ id: createdId }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
        )
        .pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
