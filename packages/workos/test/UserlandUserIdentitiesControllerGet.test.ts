import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserIdentitiesControllerGet } from "../src/operations/UserlandUserIdentitiesControllerGet.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

const validProviders = [
  "AppleOAuth",
  "BitbucketOAuth",
  "DiscordOAuth",
  "GithubOAuth",
  "GitLabOAuth",
  "GoogleOAuth",
  "IntuitOAuth",
  "LinkedInOAuth",
  "MicrosoftOAuth",
  "SalesforceOAuth",
  "SlackOAuth",
  "VercelMarketplaceOAuth",
  "VercelOAuth",
  "XeroOAuth",
] as const;

describe("UserlandUserIdentitiesControllerGet", () => {
  it(
    "returns the list of identities for an existing user",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        const error = await runEffect(
          UserlandUserIdentitiesControllerGet({
            id: `user_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        UserlandUserIdentitiesControllerGet({ id: seed.id }),
      );
      expect(Array.isArray(result)).toBe(true);
      for (const identity of result) {
        expect(typeof identity.idp_id).toBe("string");
        expect(typeof identity.type).toBe("string");
        expect(validProviders).toContain(identity.provider);
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        UserlandUserIdentitiesControllerGet({
          id: `user_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
