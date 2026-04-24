import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createRole } from "../src/operations/v2/createRole";
import { deleteRole } from "../src/operations/v2/deleteRole";
import { getRoleById } from "../src/operations/v2/getRoleById";
import { runEffect, testRunId } from "./setup";

describe("getRoleById", () => {
  it(
    "returns a role by id",
    async () => {
      const roleName = `distilled-axiom-getrolebyid-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // Prerequisite: a role must exist to fetch.
        const created = yield* createRole({
          name: roleName,
          description: "getRoleById test fixture",
          orgCapabilities: {
            datasets: ["read"],
          },
        });
        createdId = created.id;

        const fetched = yield* getRoleById({ id: created.id });

        expect(fetched.id).toBe(created.id);
        expect(fetched.name).toBe(roleName);
        expect(fetched.orgCapabilities?.datasets).toContain("read");
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
        getRoleById({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
