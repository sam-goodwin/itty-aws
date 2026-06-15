import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContactProperty } from "../src/operations/createContactProperty";
import { deleteContactProperty } from "../src/operations/deleteContactProperty";
import { getContactProperty } from "../src/operations/getContactProperty";
import { updateContactProperty } from "../src/operations/updateContactProperty";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_PROPERTY_ID = "00000000-0000-4000-8000-000000000000";

describe("updateContactProperty", () => {
  it("updates a contact property's fallback_value", async () => {
    const key = `distilled_update_${testRunId}`.toLowerCase();
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContactProperty({
          key,
          type: "string",
          fallback_value: "original",
        });
        if (!created.id) {
          return yield* Effect.die(
            "createContactProperty did not return an id",
          );
        }
        createdId = created.id;
        const updated = yield* updateContactProperty({
          id: created.id,
          fallback_value: "updated",
        });
        const refetched = yield* getContactProperty({ id: created.id });
        return { updated, refetched };
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

    expect(result.updated).toBeDefined();
    expect(result.updated.id).toBe(createdId);
    expect(result.refetched.fallback_value).toBe("updated");
  });

  it("fails with NotFound for a non-existent contact property id", async () => {
    const error = await runEffect(
      updateContactProperty({
        id: NON_EXISTENT_PROPERTY_ID,
        fallback_value: "anything",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity when fallback_value type mismatches the property type", async () => {
    const key = `distilled_update_bad_${testRunId}`.toLowerCase();
    let createdId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContactProperty({
          key,
          type: "number",
          fallback_value: 0,
        });
        if (!created.id) {
          return yield* Effect.die(
            "createContactProperty did not return an id",
          );
        }
        createdId = created.id;
        return yield* updateContactProperty({
          id: created.id,
          fallback_value: "not-a-number",
        });
      })
        .pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId
                ? deleteContactProperty({ id: createdId }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
        )
        .pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
