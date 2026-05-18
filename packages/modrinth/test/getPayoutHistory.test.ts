import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getPayoutHistory } from "../src/operations/getPayoutHistory.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const OWNED_USER_ID = process.env.MODRINTH_TEST_OWNED_USER_ID;

describe("getPayoutHistory", () => {
  it.skipIf(!OWNED_USER_ID)(
    "returns the payout history of the authenticated user",
    async () => {
      // GET /user/{id_or_username}/payouts requires auth and returns the
      // caller's lifetime/last-month payout totals plus a list of payout
      // entries. The payout list may legitimately be empty for users who
      // have never received a payout, so we only assert on the response
      // shape rather than on specific values.
      const id = OWNED_USER_ID as string;
      const result = await runEffect(getPayoutHistory({ id_or_username: id }));

      expect(typeof result).toBe("object");
      if (result.payouts !== undefined) {
        expect(Array.isArray(result.payouts)).toBe(true);
        for (const payout of result.payouts) {
          if (payout.amount !== undefined) {
            expect(typeof payout.amount).toBe("number");
          }
          if (payout.created !== undefined) {
            expect(typeof payout.created).toBe("string");
          }
          if (payout.status !== undefined) {
            expect(typeof payout.status).toBe("string");
          }
        }
      }
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a username that does not exist",
    async () => {
      // With auth Modrinth resolves the route, looks up the user, and
      // returns 404 when the username is unknown. Note: this route also
      // returns 404 to unauth'd callers (see Unauthorized note below), so
      // the assertion only meaningfully distinguishes "user not found"
      // from "route hidden" when run with a valid API key.
      const username = `zz-distilled-${testRunId}`;
      const error = await runEffect(
        getPayoutHistory({ id_or_username: username }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  // Unauthorized note:
  //   Modrinth's /user/{id}/payouts route is one of the few endpoints that
  //   does *not* return 401 for unauthenticated requests. Instead, the API
  //   returns `404 not_found "the requested route does not exist"` for
  //   every request without a valid authentication token (no header,
  //   empty header, or an invalid token shape). Empirically:
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
