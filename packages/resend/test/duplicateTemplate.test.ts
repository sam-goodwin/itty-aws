import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTemplate } from "../src/operations/createTemplate";
import { deleteTemplate } from "../src/operations/deleteTemplate";
import { duplicateTemplate } from "../src/operations/duplicateTemplate";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_TEMPLATE_ID = "00000000-0000-4000-8000-000000000000";

describe("duplicateTemplate", () => {
  it("duplicates a template created in the test", async () => {
    const name = `distilled-resend-duplicateTemplate-${testRunId}`;
    let createdId: string | undefined;
    let duplicateId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTemplate({
          name,
          html: "<p>Original {{name}}</p>",
        });
        if (!created.id) {
          return yield* Effect.die("createTemplate did not return an id");
        }
        createdId = created.id;
        const duplicated = yield* duplicateTemplate({ id: created.id });
        duplicateId = duplicated.id;
        return duplicated;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            duplicateId
              ? deleteTemplate({ id: duplicateId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteTemplate({ id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
    expect(result.id).not.toBe(createdId);
  });

  it("fails with NotFound for a non-existent template id", async () => {
    const error = await runEffect(
      duplicateTemplate({ id: NON_EXISTENT_TEMPLATE_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
