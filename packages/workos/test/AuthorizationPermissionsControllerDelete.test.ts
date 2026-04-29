import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationPermissionsControllerCreate } from "../src/operations/AuthorizationPermissionsControllerCreate.ts";
import { AuthorizationPermissionsControllerDelete } from "../src/operations/AuthorizationPermissionsControllerDelete.ts";
import { AuthorizationPermissionsControllerFind } from "../src/operations/AuthorizationPermissionsControllerFind.ts";
import { AuthorizationPermissionsControllerList } from "../src/operations/AuthorizationPermissionsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationPermissionsControllerDelete", () => {
  it(
    "deletes a permission",
    async () => {
      const slug = `delete_perm_${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          yield* AuthorizationPermissionsControllerCreate({
            slug,
            name: `Delete Permission ${testRunId}`,
          });

          yield* AuthorizationPermissionsControllerDelete({ slug });

          return yield* AuthorizationPermissionsControllerFind({ slug }).pipe(
            Effect.flip,
          );
        }),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent permission slug",
    async () => {
      const error = await runEffect(
        AuthorizationPermissionsControllerDelete({
          slug: `does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when deleting a system permission",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const list = yield* AuthorizationPermissionsControllerList({
            limit: 100,
          });

          const systemPermission = list.data.find((p) => p.system === true);

          if (!systemPermission) {
            return yield* Effect.fail({
              _tag: "Forbidden" as const,
              message: "no system permission found in environment",
            });
          }

          return yield* AuthorizationPermissionsControllerDelete({
            slug: systemPermission.slug,
          });
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );
});
