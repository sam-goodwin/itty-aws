import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTemplate } from "../src/operations/createTemplate";
import { deleteTemplate } from "../src/operations/deleteTemplate";
import { getTemplate } from "../src/operations/getTemplate";
import { updateTemplate } from "../src/operations/updateTemplate";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_TEMPLATE_ID = "00000000-0000-4000-8000-000000000000";

describe("updateTemplate", () => {
  it("updates an existing template's name and html", async () => {
    const originalName = `distilled-resend-updateTemplate-${testRunId}`;
    const updatedName = `distilled-resend-updateTemplate-renamed-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTemplate({
          name: originalName,
          html: "<p>Original</p>",
        });
        if (!created.id) {
          return yield* Effect.die("createTemplate did not return an id");
        }
        createdId = created.id;
        const updated = yield* updateTemplate({
          id: created.id,
          name: updatedName,
          html: "<p>Updated {{name}}</p>",
          subject: "Updated subject",
        });
        const refetched = yield* getTemplate({ id: created.id });
        return { updated, refetched };
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

    expect(result.updated).toBeDefined();
    expect(result.updated.id).toBe(createdId);
    expect(result.refetched.name).toBe(updatedName);
    expect(result.refetched.subject).toBe("Updated subject");
  });

  it("fails with NotFound for a non-existent template id", async () => {
    const error = await runEffect(
      updateTemplate({
        id: NON_EXISTENT_TEMPLATE_ID,
        name: `distilled-resend-updateTemplate-missing-${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for an invalid variable definition", async () => {
    const name = `distilled-resend-updateTemplate-bad-${testRunId}`;
    let createdId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTemplate({
          name,
          html: "<p>Hello</p>",
        });
        if (!created.id) {
          return yield* Effect.die("createTemplate did not return an id");
        }
        createdId = created.id;
        return yield* updateTemplate({
          id: created.id,
          variables: [{ key: "", type: "string" }],
        });
      })
        .pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId
                ? deleteTemplate({ id: createdId }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
        )
        .pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
