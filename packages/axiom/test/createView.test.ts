import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createView } from "../src/operations/v2/createView";
import { deleteView } from "../src/operations/v2/deleteView";
import { runEffect, testRunId } from "./setup";

describe("createView", () => {
  it(
    "creates a view with an APL query and returns the stored record",
    async () => {
      const viewName = `distilled-axiom-view-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // The generated createView input schema is Struct({}) so TS rejects
        // real view fields. Cast through `unknown` to send a realistic
        // payload; `buildRequestParts` only serialises fields the schema
        // knows about — a signal the input schema needs to be broadened —
        // but the underlying POST accepts the full body. Similarly the
        // output schema omits `id`, which axiom does return; we read it via
        // an unknown-cast for cleanup.
        const view = yield* createView({
          name: viewName,
          description: "createView happy path",
          aplQuery: "['_traces'] | limit 10",
        } as unknown as Record<string, never>);

        expect(view.name).toBe(viewName);
        expect(typeof view.aplQuery).toBe("string");
        expect(view.aplQuery.length).toBeGreaterThan(0);

        const maybeId = (view as unknown as { id?: string }).id;
        if (typeof maybeId === "string" && maybeId.length > 0) {
          createdId = maybeId;
        }
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
    "returns UnprocessableEntity when required view fields are missing",
    async () => {
      // Empty body violates required fields (name, aplQuery). Axiom surfaces
      // this as 422, which the SDK's matchError maps to the typed
      // UnprocessableEntity class.
      const error = await runEffect(
        createView({} as Record<string, never>).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
