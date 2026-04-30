import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationDomainsControllerCreate } from "../src/operations/OrganizationDomainsControllerCreate.ts";
import { OrganizationDomainsControllerDelete } from "../src/operations/OrganizationDomainsControllerDelete.ts";
import { OrganizationDomainsControllerGet } from "../src/operations/OrganizationDomainsControllerGet.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationDomainsControllerDelete", () => {
  it(
    "deletes an organization domain",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-domains-delete-${testRunId}`,
          });

          const domain = `distilled-delete-${testRunId}.example.com`;

          const created = yield* OrganizationDomainsControllerCreate({
            organization_id: org.id,
            domain,
          });

          yield* OrganizationDomainsControllerDelete({ id: created.id }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );

          // After deletion, fetching by the same id should fail with NotFound.
          const error = yield* OrganizationDomainsControllerGet({
            id: created.id,
          }).pipe(Effect.flip);

          expect(error._tag).toBe("NotFound");
        }),
      );
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization domain id",
    async () => {
      const error = await runEffect(
        OrganizationDomainsControllerDelete({
          id: `org_domain_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
