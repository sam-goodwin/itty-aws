import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContact } from "../src/operations/createContact";
import { deleteContact } from "../src/operations/deleteContact";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_CONTACT_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteContact", () => {
  it("deletes a contact created in the test", async () => {
    const email = `distilled-resend-deleteContact-${testRunId}@example.com`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContact({ email });
        if (!created.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        return yield* deleteContact({ id: created.id });
      }),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("fails with NotFound for a non-existent contact id", async () => {
    const error = await runEffect(
      deleteContact({ id: NON_EXISTENT_CONTACT_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
