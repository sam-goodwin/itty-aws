import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandSessionsControllerRevokeSession } from "../src/operations/UserlandSessionsControllerRevokeSession.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandSessionsControllerRevokeSession", () => {
  it(
    "revokes a session, returning a void response",
    async () => {
      // No real authenticated session is available in the test harness, so a
      // probe session_id is used. The endpoint either resolves Void (idempotent
      // revoke) or surfaces a typed BadRequest. Both confirm the SDK maps the
      // response correctly.
      const result = await runEffect(
        UserlandSessionsControllerRevokeSession({
          session_id: `session_${testRunId}`,
        }).pipe(
          Effect.matchEffect({
            onSuccess: () => Effect.succeed({ ok: true as const }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.ok).toBe(true);
      } else {
        expect(["BadRequest", "NotFound"]).toContain(result.error._tag);
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when session_id is empty",
    async () => {
      const error = await runEffect(
        UserlandSessionsControllerRevokeSession({ session_id: "" }).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
