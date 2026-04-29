import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationPermissionsControllerCreate } from "../src/operations/AuthorizationPermissionsControllerCreate.ts";
import { AuthorizationPermissionsControllerDelete } from "../src/operations/AuthorizationPermissionsControllerDelete.ts";
import { AuthorizationPermissionsControllerList } from "../src/operations/AuthorizationPermissionsControllerList.ts";
import { AuthorizationPermissionsControllerUpdate } from "../src/operations/AuthorizationPermissionsControllerUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationPermissionsControllerUpdate", () => {
  it(
    "updates a permission's name and description",
    async () => {
      const slug = `update_perm_${testRunId}`;

      const permission = await runEffect(
        Effect.gen(function* () {
          yield* AuthorizationPermissionsControllerCreate({
            slug,
            name: `Original Name ${testRunId}`,
          });

          return yield* AuthorizationPermissionsControllerUpdate({
            slug,
            name: `Updated Name ${testRunId}`,
            description: "Updated description",
          });
        }).pipe(
          Effect.ensuring(
            AuthorizationPermissionsControllerDelete({ slug }).pipe(
              Effect.ignore,
            ),
          ),
        ),
      );

      expect(permission).toBeDefined();
      expect(permission.slug).toBe(slug);
      expect(permission.name).toBe(`Updated Name ${testRunId}`);
      expect(permission.description).toBe("Updated description");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent permission slug",
    async () => {
      const error = await runEffect(
        AuthorizationPermissionsControllerUpdate({
          slug: `does_not_exist_${testRunId}`,
          name: `New Name ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when updating a system permission",
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

          return yield* AuthorizationPermissionsControllerUpdate({
            slug: systemPermission.slug,
            name: `Hacked ${testRunId}`,
          });
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when name is empty",
    async () => {
      const slug = `update_perm_422_${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          yield* AuthorizationPermissionsControllerCreate({
            slug,
            name: `Original Name 422 ${testRunId}`,
          });

          return yield* AuthorizationPermissionsControllerUpdate({
            slug,
            name: "",
          });
        })
          .pipe(Effect.flip)
          .pipe(
            Effect.ensuring(
              AuthorizationPermissionsControllerDelete({ slug }).pipe(
                Effect.ignore,
              ),
            ),
          ),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
