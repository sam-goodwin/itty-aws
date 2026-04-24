import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getStarred } from "../src/operations/v2/getStarred";
import { getStarredQueries } from "../src/operations/v2/getStarredQueries";
import { runEffect, testRunId } from "./setup";

describe("getStarred", () => {
  it(
    "returns a starred query by id",
    async () => {
      // The generated createStarred input schema is empty and cannot
      // reliably produce a fixture, so we discover an existing starred
      // query via getStarredQueries.
      const effect = Effect.gen(function* () {
        const starred = yield* getStarredQueries({});
        if (starred.length === 0) {
          throw new Error(
            "Test prerequisite: axiom org must have at least one starred query; createStarred input schema is incomplete and cannot be used as setup.",
          );
        }

        const target = starred[0]!;
        const fetched = yield* getStarred({ id: target.id });

        expect(fetched.id).toBe(target.id);
        expect(fetched.name).toBe(target.name);
        expect(fetched.kind).toBe("apl");
        expect(typeof fetched.query.apl).toBe("string");
        expect(typeof fetched.who).toBe("string");
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "returns NotFound for a starred-query id that does not exist",
    async () => {
      // A syntactically-valid but non-existent starred-query id should
      // produce a 404 → NotFound.
      const error = await runEffect(
        getStarred({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
