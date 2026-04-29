import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deletePreset } from "../src/operations/deletePreset";
import { retrievePreset } from "../src/operations/retrievePreset";
import { upsertPreset } from "../src/operations/upsertPreset";
import { runEffect, testRunId } from "./setup";

describe("retrievePreset", () => {
  it(
    "retrieves a preset by id",
    async () => {
      const presetId = `distilled-typesense-retpreset-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertPreset({
          presetId,
          value: {
            searches: [
              { collection: "products", q: "shoe", query_by: "name" },
            ],
          },
        });

        const result = yield* retrievePreset({ presetId });
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
    "fails with NotFound when the preset does not exist",
    async () => {
      const error = await runEffect(
        retrievePreset({
          presetId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
