import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createView } from "../src/operations/v2/createView";
import { deleteView } from "../src/operations/v2/deleteView";
import { updateView } from "../src/operations/v2/updateView";
import { runEffect, testRunId } from "./setup";

describe("updateView", () => {
  it(
    "updates an existing view's name and APL query",
    async () => {
      const initialName = `distilled-axiom-upview-${testRunId}`;
      const renamed = `distilled-axiom-upview-renamed-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // The generated create/update view input schemas are Struct({}) /
        // Struct({id}); cast through `unknown` to send a realistic payload.
        // `buildRequestParts` only serialises fields the schema knows
        // about — a signal the input schemas need to be broadened — but
        // the underlying PUT accepts the full body. The output schema omits
        // `id`, so read it via an unknown-cast for downstream calls.
        const created = yield* createView({
          name: initialName,
          description: "updateView happy path",
          aplQuery: "['_traces'] | limit 10",
        } as unknown as Record<string, never>);

        const viewId = (created as unknown as { id?: string }).id;
        expect(typeof viewId).toBe("string");
        createdId = viewId;

        const updated = yield* updateView({
          id: viewId as string,
          name: renamed,
          description: "updateView happy path (renamed)",
          aplQuery: "['_traces'] | limit 25",
        } as unknown as { id: string });

        expect(updated.name).toBe(renamed);
        expect(updated.aplQuery).toBe("['_traces'] | limit 25");
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
        updateView({
          id: `doesnotexist-${testRunId}`,
          name: `distilled-axiom-upview-${testRunId}`,
          aplQuery: "['_traces'] | limit 10",
        } as unknown as { id: string }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when required update fields are missing",
    async () => {
      const viewName = `distilled-axiom-upview-422-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createView({
          name: viewName,
          description: "updateView 422 fixture",
          aplQuery: "['_traces'] | limit 10",
        } as unknown as Record<string, never>);

        const viewId = (created as unknown as { id?: string }).id;
        expect(typeof viewId).toBe("string");
        createdId = viewId;

        // Sending only `id` (no name/aplQuery) violates the required
        // update body; axiom surfaces this as 422.
        const error = yield* updateView({ id: viewId as string }).pipe(
          Effect.flip,
        );

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
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
});
