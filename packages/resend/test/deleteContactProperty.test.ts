import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContactProperty } from "../src/operations/createContactProperty";
import { deleteContactProperty } from "../src/operations/deleteContactProperty";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_PROPERTY_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteContactProperty", () => {
  it("deletes a contact property created in the test", async () => {
    const key = `distilled_delete_${testRunId}`.toLowerCase();

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContactProperty({
          key,
          type: "string",
        });
        if (!created.id) {
          return yield* Effect.die(
            "createContactProperty did not return an id",
          );
        }
        return yield* deleteContactProperty({ id: created.id });
      }),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("fails with NotFound for a non-existent contact property id", async () => {
    const error = await runEffect(
      deleteContactProperty({ id: NON_EXISTENT_PROPERTY_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
