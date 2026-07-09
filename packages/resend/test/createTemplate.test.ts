import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTemplate } from "../src/operations/createTemplate";
import { deleteTemplate } from "../src/operations/deleteTemplate";
import { runEffect, testRunId } from "./setup";

describe("createTemplate", () => {
  it("creates a template with minimum required fields", async () => {
    const name = `distilled-resend-createTemplate-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTemplate({
          name,
          html: "<p>Hello {{name}}</p>",
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("creates a template with variables and metadata", async () => {
    const name = `distilled-resend-createTemplate-vars-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTemplate({
          name,
          alias: `distilled-resend-alias-${testRunId}`,
          from: "Distilled Test <onboarding@resend.dev>",
          subject: "Hello {{name}}",
          html: "<p>Hello {{name}}, you have {{count}} messages.</p>",
          text: "Hello {{name}}, you have {{count}} messages.",
          variables: [
            { key: "name", type: "string", fallback_value: "friend" },
            { key: "count", type: "number", fallback_value: 0 },
          ],
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("fails with UnprocessableEntity for an empty name", async () => {
    const error = await runEffect(
      createTemplate({
        name: "",
        html: "<p>Hello</p>",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
