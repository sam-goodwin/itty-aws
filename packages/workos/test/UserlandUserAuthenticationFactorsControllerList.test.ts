import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserAuthenticationFactorsControllerList } from "../src/operations/UserlandUserAuthenticationFactorsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserAuthenticationFactorsControllerList", () => {
  it(
    "lists authentication factors for an existing user",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        // Without a seed user we still verify the SDK maps an excessive limit
        // to a typed UnprocessableEntity for an arbitrary user id.
        const error = await runEffect(
          UserlandUserAuthenticationFactorsControllerList({
            userlandUserId: `user_does_not_exist_${testRunId}`,
            limit: 1000,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("UnprocessableEntity");
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        UserlandUserAuthenticationFactorsControllerList({
          userlandUserId: seed.id,
          limit: 5,
        }),
      );
      expect(result).toBeDefined();
      expect(result.object).toBe("list");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
      for (const factor of result.data) {
        expect(typeof factor.id).toBe("string");
        expect(["generic_otp", "sms", "totp", "webauthn"]).toContain(
          factor.type,
        );
        expect(typeof factor.created_at).toBe("string");
        expect(typeof factor.updated_at).toBe("string");
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with UnprocessableEntity when limit exceeds the allowed maximum",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedUserId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      // The API documents limit as between 1 and 100; 1000 violates that bound.
      const error = await runEffect(
        UserlandUserAuthenticationFactorsControllerList({
          userlandUserId: seedUserId,
          limit: 1000,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
