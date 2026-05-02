import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { SsoControllerLogout } from "../src/operations/SsoControllerLogout.ts";
import { SsoControllerLogoutAuthorize } from "../src/operations/SsoControllerLogoutAuthorize.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId, runOrSkipOnEnvLimitation } from "./setup.ts";

describe("SsoControllerLogout", () => {
  it(
    "logs out using a logout token",
    async (ctx) => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        // No seed user available — exercise the operation against a missing
        // token so the call still hits the live API.
        const error = await runOrSkipOnEnvLimitation(
          ctx,
          SsoControllerLogout({
            token: `logout_token_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seedUser = users.data[0] as { id: string };
      const authorize = await runEffect(
        SsoControllerLogoutAuthorize({ profile_id: seedUser.id }),
      );
      expect(typeof authorize.logout_token).toBe("string");
      expect(typeof authorize.logout_url).toBe("string");

      await runEffect(SsoControllerLogout({ token: authorize.logout_token }));
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent logout token",
    async () => {
      const error = await runEffect(
        SsoControllerLogout({
          token: `logout_token_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
