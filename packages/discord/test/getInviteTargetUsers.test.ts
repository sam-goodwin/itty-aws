import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getInviteTargetUsers } from "../src/operations/getInviteTargetUsers.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /invites/{code}/target-users — returns the target users associated
// with an invite (used for "join activity" / stream invites). Output schema
// is Void in the SDK, so a successful call resolves with `undefined`.
//
// This endpoint is restrictive: most regular invites return 404. Operators
// must supply DISCORD_TEST_INVITE_TARGET_USERS_CODE pointing at an invite
// with target users (typically a stream / activity invite created in the
// test guild).
const TEST_INVITE_CODE = process.env.DISCORD_TEST_INVITE_TARGET_USERS_CODE;

// Invite codes are short opaque strings, not snowflakes. A made-up code
// that does not match any real invite should yield NotFound.
const NON_EXISTENT_INVITE_CODE = `distilled-no-such-${testRunId}`;

describe("getInviteTargetUsers", () => {
  it("happy path - fetches target users for an invite", async () => {
    if (!TEST_INVITE_CODE) {
      throw new Error(
        "DISCORD_TEST_INVITE_TARGET_USERS_CODE must be set for the getInviteTargetUsers " +
          "happy path. The invite must be one with target users (e.g. a stream / " +
          "activity invite).",
      );
    }
    const result = await runEffect(
      getInviteTargetUsers({ code: TEST_INVITE_CODE }),
    );
    // Output schema is Void — successful resolution is the assertion.
    expect(result).toBeUndefined();
  });

  it("error - NotFound for a non-existent invite code", async () => {
    await runEffect(
      getInviteTargetUsers({ code: NON_EXISTENT_INVITE_CODE }).pipe(
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

  it("error - NotFound or Forbidden for an obviously invalid code shape", async () => {
    await runEffect(
      getInviteTargetUsers({ code: `${NON_EXISTENT_INVITE_CODE}-x!` }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
