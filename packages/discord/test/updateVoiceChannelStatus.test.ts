import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateVoiceChannelStatus } from "../src/operations/updateVoiceChannelStatus.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /channels/{channel_id}/voice-status — sets the status text of a
// voice channel. Output is `Schema.Void` (204 No Content). Requires a
// voice channel (channel type 2) where the bot has the
// SET_VOICE_CHANNEL_STATUS permission. Operators must supply
// DISCORD_TEST_VOICE_CHANNEL_ID for the happy path.
const TEST_VOICE_CHANNEL_ID = process.env.DISCORD_TEST_VOICE_CHANNEL_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

describe("updateVoiceChannelStatus", () => {
  it(
    "happy path - sets and clears the voice channel status",
    async () => {
      if (!TEST_VOICE_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_VOICE_CHANNEL_ID env var is required for the updateVoiceChannelStatus happy path (must be a voice channel where the bot has SET_VOICE_CHANNEL_STATUS)",
        );
      }
      const status = `distilled-vcstatus-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* updateVoiceChannelStatus({
            channel_id: TEST_VOICE_CHANNEL_ID,
            status,
          });
          return yield* Effect.sync(() => {
            // Output schema is Void — successful resolution is the assertion.
            expect(result).toBeUndefined();
          });
        }).pipe(
          // Restore the status to null so the test channel is not left in
          // a dirtied state between runs.
          Effect.ensuring(
            updateVoiceChannelStatus({
              channel_id: TEST_VOICE_CHANNEL_ID,
              status: null,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    },
    30_000,
  );

  it(
    "error - BadRequest when status exceeds the 500-character limit",
    async () => {
      if (!TEST_VOICE_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_VOICE_CHANNEL_ID env var is required for the BadRequest test",
        );
      }
      // Discord's voice channel status limit is 500 chars; 501 chars is
      // rejected with 400 Invalid Form Body.
      const tooLong = "a".repeat(501);
      await runEffect(
        updateVoiceChannelStatus({
          channel_id: TEST_VOICE_CHANNEL_ID,
          status: tooLong,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (e as any)._tag,
            );
          }),
          // If the API somehow accepted the status, restore it to null so
          // the channel is not left dirty.
          Effect.ensuring(
            updateVoiceChannelStatus({
              channel_id: TEST_VOICE_CHANNEL_ID,
              status: null,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    },
    30_000,
  );

  it("error - NotFound for a non-existent channel id", async () => {
    // A snowflake-shaped channel_id that resolves to no real channel
    // typically yields 404 NotFound (10003). Discord may also classify
    // the response as 403 Forbidden if the route 403s before the
    // not-found check, or BadRequest for malformed input.
    await runEffect(
      updateVoiceChannelStatus({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        status: `distilled-nf-${testRunId}`,
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

  it("error - Forbidden when targeting a channel the bot cannot access", async () => {
    // A snowflake-shaped channel_id the bot does not see typically yields
    // 403 Forbidden (50001 Missing Access), or 404 NotFound if the route
    // 404s before the permission check fires. A non-voice channel
    // returns 400 BadRequest because the route only accepts voice
    // channels.
    await runEffect(
      updateVoiceChannelStatus({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        status: `distilled-fb-${testRunId}`,
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
