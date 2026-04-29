import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteCurationSet } from "../src/operations/deleteCurationSet";
import { upsertCurationSet } from "../src/operations/upsertCurationSet";
import { runEffect, testRunId } from "./setup";

describe("deleteCurationSet", () => {
  it(
    "deletes an existing curation set and returns its name",
    async () => {
      const curationSetName = `distilled-typesense-delcur-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Provision a curation set so the delete has a real target.
        yield* upsertCurationSet({
          curationSetName,
          items: [
            {
              rule: { query: "apple", match: "exact" },
              includes: [{ id: "doc-1", position: 1 }],
            },
          ],
          description: "test curation set",
        });

        // The actual operation under test.
        const result = yield* deleteCurationSet({ curationSetName });

        expect(result.name).toBe(curationSetName);
      }).pipe(
        // Defensive cleanup: a successful delete makes this a no-op; if
        // the test fails before the delete, this removes the residue.
        Effect.ensuring(
          deleteCurationSet({ curationSetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the curation set does not exist",
    async () => {
      const error = await runEffect(
        deleteCurationSet({
          curationSetName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
