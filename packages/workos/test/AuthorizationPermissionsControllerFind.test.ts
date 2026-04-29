import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationPermissionsControllerCreate } from "../src/operations/AuthorizationPermissionsControllerCreate.ts";
import { AuthorizationPermissionsControllerDelete } from "../src/operations/AuthorizationPermissionsControllerDelete.ts";
import { AuthorizationPermissionsControllerFind } from "../src/operations/AuthorizationPermissionsControllerFind.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationPermissionsControllerFind", () => {
  it(
    "retrieves a permission by slug",
    async () => {
      const slug = `find_perm_${testRunId}`;

      const permission = await runEffect(
        Effect.gen(function* () {
          yield* AuthorizationPermissionsControllerCreate({
            slug,
            name: `Find Permission ${testRunId}`,
          });

          return yield* AuthorizationPermissionsControllerFind({ slug });
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
      expect(permission.name).toBe(`Find Permission ${testRunId}`);
      expect(typeof permission.system).toBe("boolean");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent permission slug",
    async () => {
      const error = await runEffect(
        AuthorizationPermissionsControllerFind({
          slug: `does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
