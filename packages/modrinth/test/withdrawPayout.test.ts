import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { withdrawPayout } from "../src/operations/withdrawPayout.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const OWNED_USER_ID = process.env.MODRINTH_TEST_OWNED_USER_ID;
// Withdrawing real money is irreversible, so the happy path is double-gated:
// callers must explicitly set MODRINTH_TEST_PAYOUT_WITHDRAWAL_AMOUNT to the
// (small) amount they're willing to withdraw, in addition to providing the
// owned user id. If the variable isn't set (or isn't a number), the happy
// path skips.
const RAW_AMOUNT = process.env.MODRINTH_TEST_PAYOUT_WITHDRAWAL_AMOUNT;
const PAYOUT_AMOUNT =
  RAW_AMOUNT && Number.isFinite(Number(RAW_AMOUNT))
    ? Number(RAW_AMOUNT)
    : undefined;
const SHOULD_RUN_HAPPY = !!OWNED_USER_ID && PAYOUT_AMOUNT !== undefined;

describe("withdrawPayout", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "withdraws the configured amount from the authenticated user's balance",
    async () => {
      // POST /user/{id_or_username}/payouts triggers a real payout to the
      // wallet configured on the user's account. There is no rollback —
      // funds leave Modrinth's balance and head to PayPal/Venmo — so the
      // test is gated on an explicit MODRINTH_TEST_PAYOUT_WITHDRAWAL_AMOUNT
      // opt-in. Output schema is Schema.Void; success means no thrown
      // error.
      const id = OWNED_USER_ID as string;
      await runEffect(
        withdrawPayout({ id_or_username: id, amount: PAYOUT_AMOUNT as number }),
      );
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a username that does not exist",
    async () => {
      // With a valid API key, Modrinth resolves the route, looks up the
      // user, and returns 404 when the username is unknown. Without auth
      // the same path collapses to a route-level 404 instead (see
      // Unauthorized note below), so this assertion only meaningfully
      // distinguishes "user not found" from "route hidden" when run with a
      // real PAT.
      const username = `zz-distilled-${testRunId}`;
      const error = await runEffect(
        withdrawPayout({
          id_or_username: username,
          amount: 0.01,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  // Unauthorized note:
  //   Like GET /user/{id}/payouts, the POST withdrawal route does *not*
  //   return 401 to unauthenticated callers — Modrinth answers
  //   `404 not_found "the requested route does not exist"` for every
  //   request without a valid token (no header, empty header, or a
  //   syntactically-valid invalid token). Empirically:
  //     - no Authorization header           → 404 not_found
  //     - empty Authorization header        → 404 not_found
  //     - syntactically-valid invalid token → 404 not_found
  //   The SDK's typed `matchError` faithfully maps the 404 response to
  //   `NotFound`, so there is no input the SDK can produce that surfaces
  //   the typed `Unauthorized` branch for this operation. The route hides
  //   itself from unauth'd callers as an information-leak protection,
  //   which makes `Unauthorized` unreachable through this typed
  //   operation.
});
