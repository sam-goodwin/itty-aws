import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContactProperty } from "../src/operations/createContactProperty";
import { deleteContactProperty } from "../src/operations/deleteContactProperty";
import { runEffect, testRunId } from "./setup";

// Resend contact-property keys must be lowercase letters / numbers / underscores.
const propertyKey = (suffix: string): string =>
  `distilled_${suffix}_${testRunId}`.toLowerCase();

describe("createContactProperty", () => {
  it("creates a string contact property", async () => {
    const key = propertyKey("create");
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContactProperty({
          key,
          type: "string",
          fallback_value: "default",
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("creates a number contact property", async () => {
    const key = propertyKey("create_num");
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContactProperty({
          key,
          type: "number",
          fallback_value: 0,
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("fails with Conflict when creating a property with a duplicate key", async () => {
    const key = propertyKey("conflict");
    let createdId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const created = yield* createContactProperty({ key, type: "string" });
        createdId = created.id;
        return yield* createContactProperty({ key, type: "string" });
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

    expect(error._tag).toBe("Conflict");
  });

  it("fails with UnprocessableEntity for an empty key", async () => {
    const error = await runEffect(
      createContactProperty({ key: "", type: "string" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
