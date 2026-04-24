import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createGroup } from "../src/operations/v2/createGroup";
import { deleteGroup } from "../src/operations/v2/deleteGroup";
import { runEffect, testRunId } from "./setup";

describe("createGroup", () => {
  it(
    "creates a group and returns the stored configuration",
    async () => {
      const groupName = `distilled-axiom-creategroup-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const group = yield* createGroup({
          name: groupName,
          description: "createGroup happy path",
        });

        expect(typeof group.id).toBe("string");
        expect(group.id.length).toBeGreaterThan(0);
        expect(group.name).toBe(groupName);
        createdId = group.id;
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
    "returns UnprocessableEntity when the group name is empty",
    async () => {
      // `name` is required and must be non-empty; axiom surfaces this as 422
      // → UnprocessableEntity.
      const error = await runEffect(
        createGroup({
          name: "",
          description: "createGroup UnprocessableEntity probe",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
