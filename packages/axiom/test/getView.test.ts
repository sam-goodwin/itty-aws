import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createView } from "../src/operations/v2/createView";
import { deleteView } from "../src/operations/v2/deleteView";
import { getView } from "../src/operations/v2/getView";
import { runEffect, testRunId } from "./setup";

describe("getView", () => {
  it(
    "fetches a view by id and returns its configuration",
    async () => {
      const viewName = `distilled-axiom-getview-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // The generated createView input schema is Struct({}); cast through
        // `unknown` to send a realistic payload. The output schema omits
        // `id`, so read it via a second unknown-cast.
        const created = yield* createView({
          name: viewName,
          description: "getView happy path",
          aplQuery: "['_traces'] | limit 10",
        } as unknown as Record<string, never>);

        const viewId = (created as unknown as { id?: string }).id;
        expect(typeof viewId).toBe("string");
        createdId = viewId;

        const fetched = yield* getView({ id: viewId as string });

        expect(fetched.name).toBe(viewName);
        expect(typeof fetched.aplQuery).toBe("string");
        expect(fetched.aplQuery.length).toBeGreaterThan(0);
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
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
        getView({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
