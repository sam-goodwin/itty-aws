import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationDomainsControllerCreate } from "../src/operations/OrganizationDomainsControllerCreate.ts";
import { OrganizationDomainsControllerDelete } from "../src/operations/OrganizationDomainsControllerDelete.ts";
import { OrganizationDomainsControllerVerify } from "../src/operations/OrganizationDomainsControllerVerify.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationDomainsControllerVerify", () => {
  it(
    "initiates verification for an organization domain",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-domains-verify-${testRunId}`,
          });

          const domain = `distilled-verify-${testRunId}.example.com`;

          const created = yield* OrganizationDomainsControllerCreate({
            organization_id: org.id,
            domain,
          });

          return yield* OrganizationDomainsControllerVerify({
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
      expect(result.domain).toBe(`distilled-verify-${testRunId}.example.com`);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest for a malformed organization domain id",
    async () => {
      const error = await runEffect(
        OrganizationDomainsControllerVerify({
          id: `not a valid id ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
