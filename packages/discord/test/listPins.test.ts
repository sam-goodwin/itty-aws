import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listPins } from "../src/operations/listPins.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/messages/pins lists pinned messages in a channel.
// Requires READ_MESSAGES on the channel. Happy path is gated on a real
// DISCORD_TEST_CHANNEL_ID since it requires a real channel the bot can read.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

describe("listPins", () => {
  it.skipIf(!TEST_CHANNEL_ID)(
    "happy path - lists pinned messages in a channel",
    async () => {
      const result = await runEffect(
        listPins({ channel_id: TEST_CHANNEL_ID!, limit: 5 }),
      );
      expect(Array.isArray(result.items)).toBe(true);
      for (const pin of result.items) {
        expect(typeof pin.pinned_at).toBe("string");
        expect(typeof pin.message.content).toBe("string");
        expect(Array.isArray(pin.message.mentions)).toBe(true);
        expect(Array.isArray(pin.message.mention_roles)).toBe(true);
        expect(Array.isArray(pin.message.attachments)).toBe(true);
        for (const mention of pin.message.mentions) {
          expect(typeof mention.id).toBe("string");
          expect(typeof mention.username).toBe("string");
        }
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent channel id", async () => {
    const fakeChannelId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      listPins({ channel_id: fakeChannelId }).pipe(
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

  it("error - Forbidden for an inaccessible channel", async () => {
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleChannelId = "100000000000000001";
    await runEffect(
      listPins({ channel_id: inaccessibleChannelId }).pipe(
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
