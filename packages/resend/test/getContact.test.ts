import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContact } from "../src/operations/createContact";
import { deleteContact } from "../src/operations/deleteContact";
import { getContact } from "../src/operations/getContact";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_CONTACT_ID = "00000000-0000-4000-8000-000000000000";

describe("getContact", () => {
  it("retrieves a contact created in the test", async () => {
    const email = `distilled-resend-getContact-${testRunId}@example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContact({
          email,
          first_name: "Distilled",
          last_name: "Tester",
        });
        if (!created.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        createdId = created.id;
        return yield* getContact({ id: created.id });
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

    expect(result).toBeDefined();
    expect(result.id).toBe(createdId);
    expect(result.email).toBe(email);
    expect(result.first_name).toBe("Distilled");
    expect(result.last_name).toBe("Tester");
  });

  it("fails with NotFound for a non-existent contact id", async () => {
    const error = await runEffect(
      getContact({ id: NON_EXISTENT_CONTACT_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
