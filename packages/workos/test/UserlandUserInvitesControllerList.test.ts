import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserInvitesControllerList } from "../src/operations/UserlandUserInvitesControllerList.ts";
import { runEffect } from "./setup.ts";

describe("UserlandUserInvitesControllerList", () => {
  it(
    "lists invitations with a small limit",
    async () => {
      const result = await runEffect(
        UserlandUserInvitesControllerList({ limit: 5 }),
      );
      expect(result).toBeDefined();
      if (result.data !== undefined) {
        expect(Array.isArray(result.data)).toBe(true);
        expect(result.data.length).toBeLessThanOrEqual(5);
        for (const invite of result.data) {
          expect(typeof invite.id).toBe("string");
          expect(typeof invite.email).toBe("string");
          expect(["pending", "accepted", "expired", "revoked"]).toContain(
            invite.state,
          );
        }
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when limit exceeds the allowed range",
    async () => {
      const error = await runEffect(
        UserlandUserInvitesControllerList({ limit: 1000 }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
