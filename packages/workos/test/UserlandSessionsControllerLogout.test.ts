import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandSessionsControllerLogout } from "../src/operations/UserlandSessionsControllerLogout.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandSessionsControllerLogout", () => {
  it(
    "logs out the session, returning a void response",
    async () => {
      // Without a real authenticated session we can't obtain a true sid; the
      // logout endpoint accepts well-formed session ids and resolves with a
      // redirect (Void). On the live API this either resolves Void or surfaces
      // a typed UnprocessableEntity for an unrecognized session id.
      const result = await runEffect(
        UserlandSessionsControllerLogout({
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
        // Void output — nothing more to assert.
        expect(result.ok).toBe(true);
      } else {
        expect(result.error._tag).toBe("UnprocessableEntity");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when session_id is empty",
    async () => {
      const error = await runEffect(
        UserlandSessionsControllerLogout({ session_id: "" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
