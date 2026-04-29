import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deletePreset } from "../src/operations/deletePreset";
import { upsertPreset } from "../src/operations/upsertPreset";
import { runEffect, testRunId } from "./setup";

describe("upsertPreset", () => {
  it(
    "creates a preset with a multi-search value",
    async () => {
      const presetId = `distilled-typesense-upspreset-${testRunId}`;

      const effect = Effect.gen(function* () {
        const result = yield* upsertPreset({
          presetId,
          value: {
            searches: [
              { collection: "products", q: "shoe", query_by: "name" },
            ],
          },
        });

        expect(result.name).toBe(presetId);
        expect(result.value).toBeDefined();
      }).pipe(
        Effect.ensuring(deletePreset({ presetId }).pipe(Effect.ignore)),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the preset value is not an object",
    async () => {
      const presetId = `distilled-typesense-upspreset-bad-${testRunId}`;

      // Typesense requires the preset value to be an object describing
      // either a single search or a multi-search; a primitive string
      // triggers a 400 with a validation message.
      const effect = upsertPreset({
        presetId,
        value: "not-an-object",
      })
        .pipe(Effect.flip)
        .pipe(
          Effect.ensuring(deletePreset({ presetId }).pipe(Effect.ignore)),
        );

      const error = await runEffect(effect);
      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
