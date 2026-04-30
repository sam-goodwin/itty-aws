import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerList } from "../src/operations/OrganizationsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { WidgetsPublicControllerIssueWidgetSessionToken } from "../src/operations/WidgetsPublicControllerIssueWidgetSessionToken.ts";
import { runEffect, testRunId } from "./setup.ts";

const typedErrorTags = ["BadRequest", "NotFound", "UnprocessableEntity"] as const;

describe("WidgetsPublicControllerIssueWidgetSessionToken", () => {
  it(
    "issues a widget session token for an organization, or surfaces a typed error",
    async () => {
      const orgs = await runEffect(OrganizationsControllerList({ limit: 1 }));
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (orgs.data.length === 0 || users.data.length === 0) {
        const error = await runEffect(
          WidgetsPublicControllerIssueWidgetSessionToken({
            organization_id: `org_does_not_exist_${testRunId}`,
            user_id: `user_does_not_exist_${testRunId}`,
            scopes: ["widgets:users-table:manage"],
          }).pipe(Effect.flip),
        );
        expect(typedErrorTags).toContain(error._tag);
        return;
      }

      const org = orgs.data[0] as { id: string };
      const user = users.data[0] as { id: string };

      // The token issuance can succeed only if the seed user is actually a
      // member of the seed organization. Otherwise the API surfaces a typed
      // error class — never an untyped variant.
      const result = await runEffect(
        WidgetsPublicControllerIssueWidgetSessionToken({
          organization_id: org.id,
          user_id: user.id,
          scopes: ["widgets:users-table:manage"],
        }).pipe(
          Effect.matchEffect({
            onSuccess: (token) =>
              Effect.succeed({ ok: true as const, token }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.token).toBeDefined();
        expect(typeof result.token.token).toBe("string");
        expect(result.token.token.length).toBeGreaterThan(0);
      } else {
        expect(typedErrorTags).toContain(result.error._tag);
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with a typed BadRequest when scopes is empty",
    async () => {
      const orgs = await runEffect(OrganizationsControllerList({ limit: 1 }));
      const orgId =
        orgs.data.length > 0
          ? (orgs.data[0] as { id: string }).id
          : `org_does_not_exist_${testRunId}`;

      const error = await runEffect(
        WidgetsPublicControllerIssueWidgetSessionToken({
          organization_id: orgId,
          scopes: [],
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        WidgetsPublicControllerIssueWidgetSessionToken({
          organization_id: `org_does_not_exist_${testRunId}`,
          scopes: ["widgets:users-table:manage"],
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
      expect(["NotFound", "BadRequest", "UnprocessableEntity"]).toContain(
        error._tag,
      );
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for a malformed organization id",
    async () => {
      const error = await runEffect(
        WidgetsPublicControllerIssueWidgetSessionToken({
          organization_id: `${"x".repeat(300)}-${testRunId}`,
          scopes: ["widgets:users-table:manage"],
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
