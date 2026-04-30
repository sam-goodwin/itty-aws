import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DataIntegrationsUserManagementControllerGetUserDataInstallation } from "../src/operations/DataIntegrationsUserManagementControllerGetUserDataInstallation.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DataIntegrationsUserManagementControllerGetUserDataInstallation", () => {
  it(
    "fetches a user's connected account, or surfaces a typed NotFound",
    async () => {
      // We can't reliably create a connected-account binding from a test, so
      // we probe a real user with a common provider slug. Either the SDK
      // returns the connected-account shape, or it surfaces a typed NotFound.
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedUserId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const result = await runEffect(
        DataIntegrationsUserManagementControllerGetUserDataInstallation({
          user_id: seedUserId,
          slug: "github",
        }).pipe(
          Effect.matchEffect({
            onSuccess: (account) =>
              Effect.succeed({ ok: true as const, account }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.account).toBeDefined();
        expect(typeof result.account.id).toBe("string");
        expect(Array.isArray(result.account.scopes)).toBe(true);
        expect([
          "connected",
          "needs_reauthorization",
          "disconnected",
        ]).toContain(result.account.state);
        expect(typeof result.account.created_at).toBe("string");
        expect(typeof result.account.updated_at).toBe("string");
      } else {
        expect(result.error._tag).toBe("NotFound");
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user/provider pair",
    async () => {
      const error = await runEffect(
        DataIntegrationsUserManagementControllerGetUserDataInstallation({
          user_id: `user_does_not_exist_${testRunId}`,
          slug: `provider_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
