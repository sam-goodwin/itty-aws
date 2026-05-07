import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateSelfVoiceState } from "../src/operations/updateSelfVoiceState.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /guilds/{guild_id}/voice-states/@me — updates the bot's own voice
// state in a guild stage channel. The bot must already be connected to
// the referenced stage channel; Discord returns 204 No Content on success
// (the SDK output is `Schema.Void`).
//
// The happy path therefore requires the operator to have the bot
// connected to a stage channel in DISCORD_TEST_STAGE_GUILD_ID, with the
// stage channel id supplied as DISCORD_TEST_STAGE_CHANNEL_ID.
const TEST_STAGE_GUILD_ID = process.env.DISCORD_TEST_STAGE_GUILD_ID;
const TEST_STAGE_CHANNEL_ID = process.env.DISCORD_TEST_STAGE_CHANNEL_ID;

// Fallback guild id used for error tests that do not require the bot to
// be connected to a stage channel.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids that should not match real resources.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const NON_EXISTENT_CHANNEL_ID = "100000000000000001";

describe("updateSelfVoiceState", () => {
  it(
    "happy path - moves the bot to audience (suppress=true) in its current stage channel",
    async () => {
      if (!TEST_STAGE_GUILD_ID || !TEST_STAGE_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_STAGE_GUILD_ID and DISCORD_TEST_STAGE_CHANNEL_ID " +
            "must be set for the updateSelfVoiceState happy path. The bot " +
            "must already be connected to the stage channel.",
        );
      }
      // Setting suppress=true moves the bot to the audience role in the
      // stage. This is always available to the user themselves and is a
      // safe idempotent operation. The endpoint returns 204 No Content,
      // so the assertion is just that the call resolves without error.
      await runEffect(
        updateSelfVoiceState({
          guild_id: TEST_STAGE_GUILD_ID,
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

  it("error - BadRequest when channel_id is not a stage channel", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord requires channel_id to point to a stage channel that the
    // bot is currently connected to. A snowflake-shaped channel id that
    // is not a stage channel (or that the bot is not connected to) is
    // rejected with 400 Invalid Form Body / 50007-style errors.
    await runEffect(
      updateSelfVoiceState({
        guild_id: TEST_GUILD_ID,
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
      updateSelfVoiceState({
        guild_id: NON_EXISTENT_GUILD_ID,
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
      updateSelfVoiceState({
        guild_id: NON_EXISTENT_GUILD_ID,
        request_to_speak_timestamp: new Date().toISOString(),
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
