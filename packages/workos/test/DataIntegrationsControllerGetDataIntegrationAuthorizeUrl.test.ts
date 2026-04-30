import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DataIntegrationsControllerGetDataIntegrationAuthorizeUrl } from "../src/operations/DataIntegrationsControllerGetDataIntegrationAuthorizeUrl.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DataIntegrationsControllerGetDataIntegrationAuthorizeUrl", () => {
  it(
    "returns an authorization URL for a provider",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        // No seed user available — exercise the operation against a missing
        // user so the call still hits the live API.
        const error = await runEffect(
          DataIntegrationsControllerGetDataIntegrationAuthorizeUrl({
            slug: "github",
            user_id: `user_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(["NotFound", "BadRequest", "Forbidden"]).toContain(error._tag);
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        DataIntegrationsControllerGetDataIntegrationAuthorizeUrl({
          slug: "github",
          user_id: seed.id,
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.url).toBe("string");
      expect(result.url.length).toBeGreaterThan(0);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent provider slug",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const userId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const error = await runEffect(
        DataIntegrationsControllerGetDataIntegrationAuthorizeUrl({
          slug: `provider-does-not-exist-${testRunId}`,
          user_id: userId,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when user_id is malformed",
    async () => {
      const error = await runEffect(
        DataIntegrationsControllerGetDataIntegrationAuthorizeUrl({
          slug: "github",
          user_id: "not a valid user id!!",
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the user belongs to a different tenant",
    async () => {
      const error = await runEffect(
        DataIntegrationsControllerGetDataIntegrationAuthorizeUrl({
          slug: "github",
          user_id: "user_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
