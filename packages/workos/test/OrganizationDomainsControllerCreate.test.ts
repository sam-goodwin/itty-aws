import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationDomainsControllerCreate } from "../src/operations/OrganizationDomainsControllerCreate.ts";
import { OrganizationDomainsControllerDelete } from "../src/operations/OrganizationDomainsControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationDomainsControllerCreate", () => {
  it(
    "creates an organization domain",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-domains-create-${testRunId}`,
          });

          const domain = `distilled-${testRunId}.example.com`;

          const created = yield* OrganizationDomainsControllerCreate({
            organization_id: org.id,
            domain,
          });

          yield* OrganizationDomainsControllerDelete({ id: created.id }).pipe(
            Effect.ignore,
          );
          yield* OrganizationsControllerDeleteOrganization({
            id: org.id,
          }).pipe(Effect.ignore);

          return created;
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(typeof result.organization_id).toBe("string");
      expect(result.domain).toBe(`distilled-${testRunId}.example.com`);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with Conflict when creating a domain that already exists on the organization",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-domains-409-${testRunId}`,
          });

          const domain = `distilled-dup-${testRunId}.example.com`;

          const first = yield* OrganizationDomainsControllerCreate({
            organization_id: org.id,
            domain,
          });

          return yield* OrganizationDomainsControllerCreate({
            organization_id: org.id,
            domain,
          }).pipe(
            Effect.ensuring(
              OrganizationDomainsControllerDelete({ id: first.id }).pipe(
                Effect.ignore,
              ),
            ),
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("Conflict");
    },
    { timeout: 60_000 },
  );
});
