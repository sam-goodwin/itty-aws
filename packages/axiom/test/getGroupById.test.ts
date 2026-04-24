import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createGroup } from "../src/operations/v2/createGroup";
import { deleteGroup } from "../src/operations/v2/deleteGroup";
import { getGroupById } from "../src/operations/v2/getGroupById";
import { runEffect, testRunId } from "./setup";

describe("getGroupById", () => {
  it(
    "returns a group by id",
    async () => {
      const groupName = `distilled-axiom-getgroup-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // Prerequisite: a group must exist to fetch.
        const created = yield* createGroup({
          name: groupName,
          description: "getGroupById test fixture",
        });
        createdId = created.id;

        const fetched = yield* getGroupById({ id: created.id });

        expect(fetched.id).toBe(created.id);
        expect(fetched.name).toBe(groupName);
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteGroup({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a group id that does not exist",
    async () => {
      // A syntactically-valid but non-existent group id should produce a
      // 404 → NotFound.
      const error = await runEffect(
        getGroupById({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
