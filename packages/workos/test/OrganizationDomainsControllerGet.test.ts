import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationDomainsControllerCreate } from "../src/operations/OrganizationDomainsControllerCreate.ts";
import { OrganizationDomainsControllerDelete } from "../src/operations/OrganizationDomainsControllerDelete.ts";
import { OrganizationDomainsControllerGet } from "../src/operations/OrganizationDomainsControllerGet.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationDomainsControllerGet", () => {
  it(
    "retrieves an organization domain by id",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-domains-get-${testRunId}`,
          });

          const domain = `distilled-get-${testRunId}.example.com`;

          const created = yield* OrganizationDomainsControllerCreate({
            organization_id: org.id,
            domain,
          });

          return yield* OrganizationDomainsControllerGet({
            id: created.id,
          }).pipe(
            Effect.ensuring(
              OrganizationDomainsControllerDelete({ id: created.id }).pipe(
                Effect.ignore,
              ),
            ),
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(typeof result.organization_id).toBe("string");
      expect(result.domain).toBe(`distilled-get-${testRunId}.example.com`);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization domain id",
    async () => {
      const error = await runEffect(
        OrganizationDomainsControllerGet({
          id: `org_domain_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
