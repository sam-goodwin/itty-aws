import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getStarredQueries } from "../src/operations/v2/getStarredQueries";
import { updateStarred } from "../src/operations/v2/updateStarred";
import { runEffect, testRunId } from "./setup";

describe("updateStarred", () => {
  it(
    "updates an existing starred query and returns the refreshed record",
    async () => {
      // The generated updateStarred input schema only exposes `id` and
      // strips any extra fields during encoding. We still need a real
      // starred query to target, so we discover one via getStarredQueries.
      const effect = Effect.gen(function* () {
        const starred = yield* getStarredQueries({});
        if (starred.length === 0) {
          throw new Error(
            "Test prerequisite: axiom org must have at least one starred query; the generated input schema is incomplete so this test cannot create its own fixture.",
          );
        }

        const target = starred[0]!;

        // Cast through `unknown` to send a realistic body. Fields not
        // declared on the input schema are stripped by
        // `buildRequestParts`; this test also doubles as a signal that
        // the updateStarred input schema needs to be broadened.
        const updated = yield* updateStarred({
          id: target.id,
          name: target.name,
          kind: "apl",
          metadata: target.metadata ?? {},
          query: target.query,
          who: target.who,
          dataset: target.dataset,
        } as unknown as { id: string });

        expect(updated.id).toBe(target.id);
        expect(updated.kind).toBe("apl");
        expect(typeof updated.query.apl).toBe("string");
      });

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a starred-query id that does not exist",
    async () => {
      // A syntactically-valid but non-existent starred-query id should
      // produce a 404 → NotFound.
      const error = await runEffect(
        updateStarred({ id: `doesnotexist-${testRunId}` } as unknown as {
          id: string;
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when required body fields are missing",
    async () => {
      // PUT /v2/apl-starred-queries/{id} requires a full starred-query
      // payload (name, kind, query, etc.). The generated schema sends an
      // empty body, which should yield 422 → UnprocessableEntity for any
      // existing starred query.
      const effect = Effect.gen(function* () {
        const starred = yield* getStarredQueries({});
        if (starred.length === 0) {
          throw new Error(
            "Test prerequisite: axiom org must have at least one starred query to probe UnprocessableEntity against.",
          );
        }

        const target = starred[0]!;
        const error = yield* updateStarred({ id: target.id }).pipe(
          Effect.flip,
        );

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );
});
