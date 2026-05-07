import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getInviteTargetUsersJobStatus } from "../src/operations/getInviteTargetUsersJobStatus.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /invites/{code}/target-users/job-status — returns the status of the
// background job that resolves target users for an invite. Operators must
// supply DISCORD_TEST_INVITE_TARGET_USERS_CODE (an invite with target users)
// for the happy path; most regular invites return 404 here.
const TEST_INVITE_CODE = process.env.DISCORD_TEST_INVITE_TARGET_USERS_CODE;

// Invite codes are short opaque strings, not snowflakes. A made-up code
// that does not match any real invite should yield NotFound.
const NON_EXISTENT_INVITE_CODE = `distilled-no-such-${testRunId}`;

describe("getInviteTargetUsersJobStatus", () => {
  it("happy path - fetches the target-users job status for an invite", async () => {
    if (!TEST_INVITE_CODE) {
      throw new Error(
        "DISCORD_TEST_INVITE_TARGET_USERS_CODE must be set for the " +
          "getInviteTargetUsersJobStatus happy path. The invite must be one " +
          "with target users (e.g. a stream / activity invite).",
      );
    }
    const result = await runEffect(
      getInviteTargetUsersJobStatus({ code: TEST_INVITE_CODE }),
    );
    expect("status" in result).toBe(true);
    expect(typeof result.total_users).toBe("number");
    expect(result.total_users).toBeGreaterThanOrEqual(0);
    expect(typeof result.processed_users).toBe("number");
    expect(result.processed_users).toBeGreaterThanOrEqual(0);
    expect(
      result.created_at === null || typeof result.created_at === "string",
    ).toBe(true);
    expect(
      result.completed_at === null || typeof result.completed_at === "string",
    ).toBe(true);
    expect(
      result.error_message === null || typeof result.error_message === "string",
    ).toBe(true);
  });

  it("error - NotFound for a non-existent invite code", async () => {
    await runEffect(
      getInviteTargetUsersJobStatus({ code: NON_EXISTENT_INVITE_CODE }).pipe(
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
      getInviteTargetUsersJobStatus({
        code: `${NON_EXISTENT_INVITE_CODE}-x!`,
      }).pipe(
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
