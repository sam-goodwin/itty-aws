import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createGroup } from "../src/operations/v2/createGroup";
import { deleteGroup } from "../src/operations/v2/deleteGroup";
import { updateGroup } from "../src/operations/v2/updateGroup";
import { runEffect, testRunId } from "./setup";

describe("updateGroup", () => {
  it(
    "updates an existing group and returns the refreshed record",
    async () => {
      const initialName = `distilled-axiom-updgroup-${testRunId}`;
      const renamedName = `distilled-axiom-updgroup-renamed-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createGroup({
          name: initialName,
          description: "updateGroup test fixture",
        });
        createdId = created.id;

        const updated = yield* updateGroup({
          id: created.id,
          name: renamedName,
          description: "updateGroup happy path — renamed",
        });

        expect(updated.id).toBe(created.id);
        expect(updated.name).toBe(renamedName);
        expect(updated.description).toBe(
          "updateGroup happy path — renamed",
        );
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
        updateGroup({
          id: `doesnotexist-${testRunId}`,
          name: `distilled-axiom-updgroup-nf-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when the group name is empty",
    async () => {
      // `name` is required and must be non-empty; axiom surfaces this as 422.
      const initialName = `distilled-axiom-updgroup-uneproc-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createGroup({
          name: initialName,
          description: "updateGroup UnprocessableEntity fixture",
        });
        createdId = created.id;

        const error = yield* updateGroup({
          id: created.id,
          name: "",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
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
});
