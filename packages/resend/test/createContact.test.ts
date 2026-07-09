import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContact } from "../src/operations/createContact";
import { deleteContact } from "../src/operations/deleteContact";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_AUDIENCE_ID = "00000000-0000-4000-8000-000000000000";

describe("createContact", () => {
  it("creates a contact with an email only", async () => {
    const email = `distilled-resend-createContact-${testRunId}@example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContact({ email });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("creates a contact with first/last name and properties", async () => {
    const email = `distilled-resend-createContact-named-${testRunId}@example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContact({
          email,
          first_name: "Distilled",
          last_name: "Tester",
          unsubscribed: false,
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("fails with NotFound for a non-existent audience_id", async () => {
    const error = await runEffect(
      createContact({
        email: `distilled-resend-createContact-noaud-${testRunId}@example.com`,
        audience_id: NON_EXISTENT_AUDIENCE_ID,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for an invalid email", async () => {
    const error = await runEffect(
      createContact({ email: "not-a-valid-email" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
