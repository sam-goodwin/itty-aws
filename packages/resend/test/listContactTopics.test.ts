import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContact } from "../src/operations/createContact";
import { deleteContact } from "../src/operations/deleteContact";
import { listContactTopics } from "../src/operations/listContactTopics";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_CONTACT_ID = "00000000-0000-4000-8000-000000000000";

describe("listContactTopics", () => {
  it("lists topics for a contact created in the test", async () => {
    const email = `distilled-resend-listContactTopics-${testRunId}@example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContact({ email });
        if (!created.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        createdId = created.id;
        return yield* listContactTopics({ contact_id: created.id });
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
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("lists contact topics with a limit parameter", async () => {
    const email = `distilled-resend-listContactTopics-limit-${testRunId}@example.com`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContact({ email });
        if (!created.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        createdId = created.id;
        return yield* listContactTopics({
          contact_id: created.id,
          limit: 5,
        });
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
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with NotFound for a non-existent contact id", async () => {
    const error = await runEffect(
      listContactTopics({ contact_id: NON_EXISTENT_CONTACT_ID }).pipe(
        Effect.flip,
      ),
    );

    expect(error._tag).toBe("NotFound");
  });
});
