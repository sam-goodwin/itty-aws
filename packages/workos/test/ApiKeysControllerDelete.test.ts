import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApiKeysControllerDelete } from "../src/operations/ApiKeysControllerDelete.ts";
import { OrganizationApiKeysControllerCreate } from "../src/operations/OrganizationApiKeysControllerCreate.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ApiKeysControllerDelete", () => {
  it(
    "deletes an API key created for an organization",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-apikey-delete-${testRunId}`,
          });

          return yield* Effect.gen(function* () {
            const apiKey = yield* OrganizationApiKeysControllerCreate({
              organizationId: org.id,
              name: `distilled-workos-apikey-${testRunId}`,
            });

            const result = yield* ApiKeysControllerDelete({ id: apiKey.id });
            expect(result).toBeUndefined();
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent API key id",
    async () => {
      const error = await runEffect(
        ApiKeysControllerDelete({
          id: `api_key_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
