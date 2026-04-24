import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createView } from "../src/operations/v2/createView";
import { deleteView } from "../src/operations/v2/deleteView";
import { getView } from "../src/operations/v2/getView";
import { runEffect, testRunId } from "./setup";

describe("deleteView", () => {
  it(
    "deletes an existing view and subsequent fetches return NotFound",
    async () => {
      const viewName = `distilled-axiom-delview-${testRunId}`;
      let createdId: string | undefined;
      let deleted = false;

      const effect = Effect.gen(function* () {
        // createView's generated input schema is Struct({}); cast through
        // `unknown` to send a realistic payload. Its output schema omits
        // `id`, so extract it via an unknown-cast.
        const created = yield* createView({
          name: viewName,
          description: "deleteView happy path",
          aplQuery: "['_traces'] | limit 10",
        } as unknown as Record<string, never>);

        const viewId = (created as unknown as { id?: string }).id;
        expect(typeof viewId).toBe("string");
        createdId = viewId;

        yield* deleteView({ id: viewId as string });
        deleted = true;

        const afterDelete = yield* getView({ id: viewId as string }).pipe(
          Effect.flip,
        );
        expect((afterDelete as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined && !deleted) {
              yield* deleteView({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a view id that does not exist",
    async () => {
      const error = await runEffect(
        deleteView({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
