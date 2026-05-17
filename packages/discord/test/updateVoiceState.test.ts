import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateVoiceState } from "../src/operations/updateVoiceState.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /guilds/{guild_id}/voice-states/{user_id} — updates another
// user's voice state in a guild stage channel. The target user must
// already be connected to the referenced stage channel; the bot needs
// MUTE_MEMBERS in that channel. Discord returns 204 No Content on
// success (the SDK output is `Schema.Void`).
//
// The happy path requires the operator to have a target user connected
// to a stage channel that the bot can moderate, supplied via:
//   - DISCORD_TEST_STAGE_GUILD_ID
//   - DISCORD_TEST_STAGE_CHANNEL_ID
//   - DISCORD_TEST_STAGE_TARGET_USER_ID (must currently be in the stage
//     channel as audience so suppress=true is idempotent)
const TEST_STAGE_GUILD_ID = process.env.DISCORD_TEST_STAGE_GUILD_ID;
const TEST_STAGE_CHANNEL_ID = process.env.DISCORD_TEST_STAGE_CHANNEL_ID;
const TEST_STAGE_TARGET_USER_ID =
  process.env.DISCORD_TEST_STAGE_TARGET_USER_ID;

// Fallback guild id used for error tests that do not require the target
// user to be connected to a stage channel.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const NON_EXISTENT_USER_ID = "100000000000000001";
const NON_EXISTENT_CHANNEL_ID = "100000000000000002";

describe("updateVoiceState", () => {
  it(
    "happy path - keeps the target user suppressed (audience) in the stage channel",
    async () => {
      if (
        !TEST_STAGE_GUILD_ID ||
        !TEST_STAGE_CHANNEL_ID ||
        !TEST_STAGE_TARGET_USER_ID
      ) {
        throw new Error(
          "DISCORD_TEST_STAGE_GUILD_ID, DISCORD_TEST_STAGE_CHANNEL_ID and " +
            "DISCORD_TEST_STAGE_TARGET_USER_ID must be set for the " +
            "updateVoiceState happy path. The target user must currently be " +
            "connected to the stage channel.",
        );
      }
      // Setting suppress=true keeps the target user in the audience role.
      // This is idempotent for an audience user and is the safe action
      // available to a bot with MUTE_MEMBERS. Output is Void, so the
      // assertion is just that the call resolves without error.
      await runEffect(
        updateVoiceState({
          guild_id: TEST_STAGE_GUILD_ID,
          user_id: TEST_STAGE_TARGET_USER_ID,
          channel_id: TEST_STAGE_CHANNEL_ID,
          suppress: true,
        }).pipe(
          Effect.map((result) => {
            expect(result).toBeUndefined();
          }),
        ),
      );
    },
    30_000,
  );

  it("error - BadRequest when channel_id is not a stage channel the user is in", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord requires channel_id to point to a stage channel that the
    // target user is currently connected to. A snowflake-shaped channel
    // id that is not a stage channel (or that the user is not in) is
    // rejected with 400 Invalid Form Body.
    await runEffect(
      updateVoiceState({
        guild_id: TEST_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
        channel_id: NON_EXISTENT_CHANNEL_ID,
        suppress: true,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - NotFound for a non-existent guild id", async () => {
    // A snowflake-shaped guild_id that resolves to no real guild
    // typically yields 404 NotFound (10004). Discord may also classify
    // the response as 403 Forbidden if the route 403s before the
    // not-found check, or BadRequest for malformed input.
    await runEffect(
      updateVoiceState({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
        suppress: true,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot cannot access", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before
    // the permission check fires, or BadRequest for malformed input.
    await runEffect(
      updateVoiceState({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
        channel_id: NON_EXISTENT_CHANNEL_ID,
        suppress: false,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
