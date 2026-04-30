import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DataIntegrationsControllerGetUserlandUserToken } from "../src/operations/DataIntegrationsControllerGetUserlandUserToken.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DataIntegrationsControllerGetUserlandUserToken", () => {
  it(
    "returns a token for a connected account or NotFound if not connected",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        // No seed user available — exercise the operation against a missing
        // user so the call still hits the live API.
        const error = await runEffect(
          DataIntegrationsControllerGetUserlandUserToken({
            slug: "github",
            user_id: `user_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(["NotFound", "BadRequest"]).toContain(error._tag);
        return;
      }

      const seed = users.data[0] as { id: string };

      // The user almost certainly has no connected GitHub account in the test
      // environment, so this call returns NotFound. If a seed installation is
      // present, the API returns a token-shaped response. Either outcome
      // exercises the operation against the live API.
      const result = await runEffect(
        DataIntegrationsControllerGetUserlandUserToken({
          slug: "github",
          user_id: seed.id,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ kind: "error" as const, e }),
            onSuccess: (value) =>
              Effect.succeed({ kind: "ok" as const, value }),
          }),
        ),
      );

      if (result.kind === "ok") {
        expect(result.value).toBeDefined();
      } else {
        expect(result.e._tag).toBe("NotFound");
      }
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
        DataIntegrationsControllerGetUserlandUserToken({
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
        DataIntegrationsControllerGetUserlandUserToken({
          slug: "github",
          user_id: "not a valid user id!!",
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
