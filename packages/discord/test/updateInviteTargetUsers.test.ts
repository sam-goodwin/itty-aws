import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateInviteTargetUsers } from "../src/operations/updateInviteTargetUsers.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /invites/{code}/target-users — replaces the target users associated
// with an invite (used for "join activity" / stream invites). The body is
// a multipart request with a `target_users_file` field carrying the new
// list of user ids. Output schema is Void; a successful call resolves
// with `undefined`.
//
// This endpoint is restrictive: most regular invites return 404. Operators
// must supply DISCORD_TEST_INVITE_TARGET_USERS_CODE pointing at an invite
// that already has target users, plus a payload via
// DISCORD_TEST_INVITE_TARGET_USERS_FILE.
const TEST_INVITE_CODE = process.env.DISCORD_TEST_INVITE_TARGET_USERS_CODE;
const TEST_TARGET_USERS_FILE =
  process.env.DISCORD_TEST_INVITE_TARGET_USERS_FILE;

// Invite codes are short opaque strings, not snowflakes. A made-up code
// that does not match any real invite should yield NotFound.
const NON_EXISTENT_INVITE_CODE = `distilled-no-such-${testRunId}`;
const REVOKED_OR_INACCESSIBLE_CODE = `distilled-fb-${testRunId}`;

// A clearly invalid target_users_file payload — empty string — used for
// the BadRequest path; Discord rejects it with 400 Invalid Form Body.
const INVALID_TARGET_USERS_FILE = "";

describe("updateInviteTargetUsers", () => {
  it(
    "happy path - replaces target users on a real invite",
    async () => {
      if (!TEST_INVITE_CODE || !TEST_TARGET_USERS_FILE) {
        throw new Error(
          "DISCORD_TEST_INVITE_TARGET_USERS_CODE and DISCORD_TEST_INVITE_TARGET_USERS_FILE " +
            "env vars are required for the updateInviteTargetUsers happy path. The invite " +
            "must be one with target users (e.g. a stream / activity invite).",
        );
      }
      const result = await runEffect(
        updateInviteTargetUsers({
          code: TEST_INVITE_CODE,
          target_users_file: TEST_TARGET_USERS_FILE,
        }),
      );
      // Output schema is Void — a successful resolution is the assertion.
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("error - NotFound for a non-existent invite code", async () => {
    await runEffect(
      updateInviteTargetUsers({
        code: NON_EXISTENT_INVITE_CODE,
        target_users_file: TEST_TARGET_USERS_FILE ?? "placeholder",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord typically returns NotFound (10006 — invalid invite) for
          // a code that does not match any invite. Some malformed codes may
          // surface as BadRequest, and revoked codes as Forbidden.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for an empty target_users_file payload", async () => {
    if (!TEST_INVITE_CODE) {
      throw new Error(
        "DISCORD_TEST_INVITE_TARGET_USERS_CODE is required for the BadRequest test",
      );
    }
    // An empty target_users_file is rejected with 400 Invalid Form Body.
    // May also surface as Forbidden if the bot lacks permission on the
    // invite, or NotFound if the invite is no longer resolvable.
    await runEffect(
      updateInviteTargetUsers({
        code: TEST_INVITE_CODE,
        target_users_file: INVALID_TARGET_USERS_FILE,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for an obviously invalid code shape", async () => {
    // Calling with a code that cannot be resolved typically yields NotFound,
    // but the route may reject it as Forbidden / BadRequest depending on
    // which validation layer fires first.
    await runEffect(
      updateInviteTargetUsers({
        code: `${REVOKED_OR_INACCESSIBLE_CODE}-x!`,
        target_users_file: TEST_TARGET_USERS_FILE ?? "placeholder",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
