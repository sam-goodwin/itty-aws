import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createRole } from "../src/operations/v2/createRole";
import { deleteRole } from "../src/operations/v2/deleteRole";
import { updateRole } from "../src/operations/v2/updateRole";
import { runEffect, testRunId } from "./setup";

describe("updateRole", () => {
  it(
    "updates an existing role and returns the refreshed record",
    async () => {
      const initialName = `distilled-axiom-updrole-${testRunId}`;
      const renamedName = `distilled-axiom-updrole-renamed-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createRole({
          name: initialName,
          description: "updateRole test fixture",
          orgCapabilities: {
            datasets: ["read"],
          },
        });
        createdId = created.id;

        const updated = yield* updateRole({
          id: created.id,
          name: renamedName,
          description: "updateRole happy path — renamed",
          orgCapabilities: {
            datasets: ["read", "create"],
          },
        });

        expect(updated.id).toBe(created.id);
        expect(updated.name).toBe(renamedName);
        expect(updated.orgCapabilities?.datasets).toContain("create");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteRole({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a role id that does not exist",
    async () => {
      // A syntactically-valid but non-existent role id should produce a
      // 404 → NotFound.
      const error = await runEffect(
        updateRole({
          id: `doesnotexist-${testRunId}`,
          name: `distilled-axiom-updrole-nf-${testRunId}`,
          orgCapabilities: { datasets: ["read"] },
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when the role name is empty",
    async () => {
      // `name` is required and must be non-empty; axiom surfaces this as 422.
      const initialName = `distilled-axiom-updrole-uneproc-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createRole({
          name: initialName,
          description: "updateRole UnprocessableEntity fixture",
          orgCapabilities: {
            datasets: ["read"],
          },
        });
        createdId = created.id;

        const error = yield* updateRole({
          id: created.id,
          name: "",
          orgCapabilities: {
            datasets: ["read"],
          },
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteRole({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );
});
