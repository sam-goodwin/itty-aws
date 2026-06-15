import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTemplate } from "../src/operations/createTemplate";
import { deleteTemplate } from "../src/operations/deleteTemplate";
import { publishTemplate } from "../src/operations/publishTemplate";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_TEMPLATE_ID = "00000000-0000-4000-8000-000000000000";

describe("publishTemplate", () => {
  it("publishes a template created in the test", async () => {
    const name = `distilled-resend-publishTemplate-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTemplate({
          name,
          from: "Distilled Test <onboarding@resend.dev>",
          subject: "Hello",
          html: "<p>Hello {{name}}</p>",
        });
        if (!created.id) {
          return yield* Effect.die("createTemplate did not return an id");
        }
        createdId = created.id;
        return yield* publishTemplate({ id: created.id });
      }).pipe(
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
    expect(result.id).toBe(createdId);
  });

  it("fails with NotFound for a non-existent template id", async () => {
    const error = await runEffect(
      publishTemplate({ id: NON_EXISTENT_TEMPLATE_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
