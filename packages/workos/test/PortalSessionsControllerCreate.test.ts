import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { PortalSessionsControllerCreate } from "../src/operations/PortalSessionsControllerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("PortalSessionsControllerCreate", () => {
  it(
    "generates a portal link for an organization",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-portal-${testRunId}`,
          });
          return yield* PortalSessionsControllerCreate({
            organization: org.id,
            return_url: "https://example.com/return",
            intent: "sso",
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result).toBeDefined();
      expect(typeof result.link).toBe("string");
      expect(result.link.startsWith("http")).toBe(true);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest when organization is missing",
    async () => {
      const error = await runEffect(
        PortalSessionsControllerCreate(
          {} as unknown as { organization: string },
        ).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        PortalSessionsControllerCreate({
          organization: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when generating a link for a different tenant",
    async () => {
      const error = await runEffect(
        PortalSessionsControllerCreate({
          organization: "org_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for an invalid contact email",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-portal-422-${testRunId}`,
          });
          return yield* PortalSessionsControllerCreate({
            organization: org.id,
            it_contact_emails: ["not-an-email"],
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 60_000 },
  );
});
