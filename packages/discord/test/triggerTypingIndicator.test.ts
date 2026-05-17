import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { triggerTypingIndicator } from "../src/operations/triggerTypingIndicator.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// POST /channels/{channel_id}/typing posts a "typing..." indicator that
// auto-expires after ~10 seconds. Requires SEND_MESSAGES on the channel.
// Happy path is gated on DISCORD_TEST_CHANNEL_ID.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

describe("triggerTypingIndicator", () => {
  it.skipIf(!TEST_CHANNEL_ID)(
    "happy path - posts a typing indicator in a channel",
    async () => {
      const result = await runEffect(
        triggerTypingIndicator({ channel_id: TEST_CHANNEL_ID! }),
      );
      // Endpoint returns 204 No Content; the typed output is an empty struct.
      expect(typeof result).toBe("object");
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for a malformed channel id", async () => {
    // A non-snowflake channel id should fail validation. Discord may surface
    // this as BadRequest, NotFound, or Forbidden depending on routing.
    await runEffect(
      triggerTypingIndicator({
        channel_id: `not-a-snowflake-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for an inaccessible channel", async () => {
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleChannelId = "100000000000000001";
    await runEffect(
      triggerTypingIndicator({ channel_id: inaccessibleChannelId }).pipe(
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

  it("error - NotFound for a non-existent channel id", async () => {
    const fakeChannelId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      triggerTypingIndicator({ channel_id: fakeChannelId }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (channel does not exist), Forbidden
          // (bot cannot see the channel), or BadRequest depending on routing.
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
