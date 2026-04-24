import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createRole } from "../src/operations/v2/createRole";
import { deleteRole } from "../src/operations/v2/deleteRole";
import { runEffect, testRunId } from "./setup";

describe("createRole", () => {
  it(
    "creates a role with minimal org capabilities",
    async () => {
      const roleName = `distilled-axiom-createrole-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const role = yield* createRole({
          name: roleName,
          description: "createRole happy path",
          orgCapabilities: {
            datasets: ["read"],
          },
        });

        expect(typeof role.id).toBe("string");
        expect(role.id.length).toBeGreaterThan(0);
        expect(role.name).toBe(roleName);
        expect(role.orgCapabilities?.datasets).toContain("read");
        createdId = role.id;
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
    "returns UnprocessableEntity when the role name is empty",
    async () => {
      // `name` is required and must be non-empty; axiom surfaces this as 422
      // → UnprocessableEntity.
      const error = await runEffect(
        createRole({
          name: "",
          description: "createRole UnprocessableEntity probe",
          orgCapabilities: {
            datasets: ["read"],
          },
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
