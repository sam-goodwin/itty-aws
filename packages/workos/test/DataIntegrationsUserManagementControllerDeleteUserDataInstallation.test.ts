import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DataIntegrationsUserManagementControllerDeleteUserDataInstallation } from "../src/operations/DataIntegrationsUserManagementControllerDeleteUserDataInstallation.ts";
import { DataIntegrationsUserManagementControllerGetUserDataInstallation } from "../src/operations/DataIntegrationsUserManagementControllerGetUserDataInstallation.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DataIntegrationsUserManagementControllerDeleteUserDataInstallation", () => {
  it(
    "deletes a user's connected account, or surfaces a typed NotFound",
    async () => {
      // We can't reliably create a connected-account binding from a test, so
      // we probe a real user with common provider slugs and only delete one
      // that exists. Either the SDK returns void (success) or it surfaces a
      // typed NotFound for an absent connection.
      const users = await runEffect(UserlandUsersControllerList({ limit: 100 }));
      const candidateSlugs = ["github", "slack", "notion", "google"] as const;

      let seed: { user_id: string; slug: string } | undefined;
      outer: for (const user of users.data as ReadonlyArray<{ id: string }>) {
        for (const slug of candidateSlugs) {
          const probe = await runEffect(
            DataIntegrationsUserManagementControllerGetUserDataInstallation({
              user_id: user.id,
              slug,
            }).pipe(
              Effect.matchEffect({
                onSuccess: () => Effect.succeed(true as const),
                onFailure: () => Effect.succeed(false as const),
              }),
            ),
          );
          if (probe) {
            seed = { user_id: user.id, slug };
            break outer;
          }
        }
      }

      if (!seed) {
        const fallbackUserId =
          users.data.length > 0
            ? (users.data[0] as { id: string }).id
            : `user_does_not_exist_${testRunId}`;
        const error = await runEffect(
          DataIntegrationsUserManagementControllerDeleteUserDataInstallation({
            user_id: fallbackUserId,
            slug: `provider_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        DataIntegrationsUserManagementControllerDeleteUserDataInstallation(
          seed,
        ),
      );
      expect(result).toBeUndefined();

      const followUp = await runEffect(
        DataIntegrationsUserManagementControllerGetUserDataInstallation(
          seed,
        ).pipe(Effect.flip),
      );
      expect(followUp._tag).toBe("NotFound");
    },
    { timeout: 120_000 },
  );

  it(
    "fails with NotFound for a non-existent user/provider pair",
    async () => {
      const error = await runEffect(
        DataIntegrationsUserManagementControllerDeleteUserDataInstallation({
          user_id: `user_does_not_exist_${testRunId}`,
          slug: `provider_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
