import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationPermissionsControllerCreate } from "../src/operations/AuthorizationPermissionsControllerCreate.ts";
import { AuthorizationPermissionsControllerDelete } from "../src/operations/AuthorizationPermissionsControllerDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationPermissionsControllerCreate", () => {
  it(
    "creates a new permission",
    async () => {
      const slug = `test_perm_${testRunId}`;

      const permission = await runEffect(
        AuthorizationPermissionsControllerCreate({
          slug,
          name: `Test Permission ${testRunId}`,
          description: "Test permission created by distilled SDK tests",
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
      expect(permission.name).toBe(`Test Permission ${testRunId}`);
      expect(permission.description).toBe(
        "Test permission created by distilled SDK tests",
      );
      expect(permission.system).toBe(false);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when name is empty",
    async () => {
      const error = await runEffect(
        AuthorizationPermissionsControllerCreate({
          slug: `test_perm_400_${testRunId}`,
          name: "",
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent resource_type_slug",
    async () => {
      const error = await runEffect(
        AuthorizationPermissionsControllerCreate({
          slug: `test_perm_404_${testRunId}`,
          name: `Test Permission 404 ${testRunId}`,
          resource_type_slug: `does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when creating a permission with a duplicate slug",
    async () => {
      const slug = `dup_perm_${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          yield* AuthorizationPermissionsControllerCreate({
            slug,
            name: `First Permission ${testRunId}`,
          });

          return yield* AuthorizationPermissionsControllerCreate({
            slug,
            name: `Second Permission ${testRunId}`,
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

      expect(error._tag).toBe("Conflict");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when slug has invalid format",
    async () => {
      const error = await runEffect(
        AuthorizationPermissionsControllerCreate({
          slug: "Invalid Slug With Spaces!!!",
          name: `Test Permission 422 ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
