import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { OrganizationsControllerGetByExternalId } from "../src/operations/OrganizationsControllerGetByExternalId.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationsControllerGetByExternalId", () => {
  it(
    "gets an organization by its external_id",
    async () => {
      const externalId = `distilled-ext-get-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-orgs-get-ext-${testRunId}`,
            external_id: externalId,
          });
          return yield* OrganizationsControllerGetByExternalId({
            external_id: externalId,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: created.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(result.external_id).toBe(externalId);
      expect(typeof result.name).toBe("string");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound when the external_id does not exist",
    async () => {
      const error = await runEffect(
        OrganizationsControllerGetByExternalId({
          external_id: `distilled-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
