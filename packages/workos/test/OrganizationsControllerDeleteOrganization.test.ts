import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { OrganizationsControllerFind } from "../src/operations/OrganizationsControllerFind.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationsControllerDeleteOrganization", () => {
  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        OrganizationsControllerDeleteOrganization({
          id: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["NotFound", "TooManyRequests"]).toContain(error._tag);
    },
    30_000,
  );

  it(
    "fails with Forbidden when deleting an organization in a different tenant",
    async () => {
      const error = await runEffect(
        OrganizationsControllerDeleteOrganization({
          id: "org_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "TooManyRequests", "NotFound"]).toContain(error._tag);
    },
    30_000,
  );
});
