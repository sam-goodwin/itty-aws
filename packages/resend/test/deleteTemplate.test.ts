import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTemplate } from "../src/operations/createTemplate";
import { deleteTemplate } from "../src/operations/deleteTemplate";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_TEMPLATE_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteTemplate", () => {
  it("deletes a template created in the test", async () => {
    const name = `distilled-resend-deleteTemplate-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTemplate({
          name,
          html: "<p>Hello</p>",
        });
        if (!created.id) {
          return yield* Effect.die("createTemplate did not return an id");
        }
        return yield* deleteTemplate({ id: created.id });
      }),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("fails with NotFound for a non-existent template id", async () => {
    const error = await runEffect(
      deleteTemplate({ id: NON_EXISTENT_TEMPLATE_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
