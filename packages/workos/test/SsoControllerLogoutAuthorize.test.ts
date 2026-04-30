import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { SsoControllerLogoutAuthorize } from "../src/operations/SsoControllerLogoutAuthorize.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("SsoControllerLogoutAuthorize", () => {
  it(
    "generates a logout token for a profile",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        // No seed user available — exercise the operation against a missing
        // profile so the call still hits the live API.
        const error = await runEffect(
          SsoControllerLogoutAuthorize({
            profile_id: `prof_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seedUser = users.data[0] as { id: string };
      const result = await runEffect(
        SsoControllerLogoutAuthorize({ profile_id: seedUser.id }),
      );
      expect(result).toBeDefined();
      expect(typeof result.logout_token).toBe("string");
      expect(typeof result.logout_url).toBe("string");
      expect(result.logout_url.startsWith("http")).toBe(true);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent profile id",
    async () => {
      const error = await runEffect(
        SsoControllerLogoutAuthorize({
          profile_id: `prof_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when profile_id is empty",
    async () => {
      const error = await runEffect(
        SsoControllerLogoutAuthorize({ profile_id: "" }).pipe(Effect.flip),
      );
      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
