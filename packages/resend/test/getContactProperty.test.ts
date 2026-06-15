import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContactProperty } from "../src/operations/createContactProperty";
import { deleteContactProperty } from "../src/operations/deleteContactProperty";
import { getContactProperty } from "../src/operations/getContactProperty";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_PROPERTY_ID = "00000000-0000-4000-8000-000000000000";

describe("getContactProperty", () => {
  it("retrieves a contact property created in the test", async () => {
    const key = `distilled_get_${testRunId}`.toLowerCase();
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContactProperty({
          key,
          type: "string",
          fallback_value: "default",
        });
        if (!created.id) {
          return yield* Effect.die(
            "createContactProperty did not return an id",
          );
        }
        createdId = created.id;
        return yield* getContactProperty({ id: created.id });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteContactProperty({ id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(result.id).toBe(createdId);
    expect(result.key).toBe(key);
  });

  it("fails with NotFound for a non-existent contact property id", async () => {
    const error = await runEffect(
      getContactProperty({ id: NON_EXISTENT_PROPERTY_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
