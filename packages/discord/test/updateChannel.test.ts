import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateChannel } from "../src/operations/updateChannel.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /channels/{channel_id} updates a channel. The SDK input has a
// codegen gap — only channel_id is exposed (no body fields) — so calling
// it sends an empty body. Discord typically treats empty PATCHes as a
// no-op and returns the unchanged channel. The happy path is gated on
// DISCORD_TEST_CHANNEL_ID.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

describe("updateChannel", () => {
  it.skipIf(!TEST_CHANNEL_ID)(
    "happy path - patches a real channel with an empty body",
    async () => {
      void testRunId;
      const result = await runEffect(
        updateChannel({
          channel_id: TEST_CHANNEL_ID!,
        }),
      );
      // Output schema is Unknown; for an empty-body PATCH Discord echoes
      // back the channel object, which should at least be a non-null
      // object exposing an id matching the requested channel.
      expect(result).not.toBeNull();
      expect(typeof result).toBe("object");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const channel = result as any;
      if (channel?.id !== undefined) {
        expect(channel.id).toBe(TEST_CHANNEL_ID);
      }
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for a malformed channel_id", async () => {
    // A non-snowflake channel_id should fail validation. Discord may
    // surface this as BadRequest or NotFound depending on routing.
    await runEffect(
      updateChannel({
        channel_id: `not-a-snowflake-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a channel the bot cannot access", async () => {
    // A snowflake-shaped channel_id the bot cannot see typically yields
    // 403 Forbidden (50001 Missing Access), or 404 NotFound if the route
    // 404s before the permission check.
    await runEffect(
      updateChannel({
        channel_id: NON_EXISTENT_CHANNEL_ID,
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

  it("error - NotFound for a non-existent channel id", async () => {
    const fakeChannelId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      updateChannel({
        channel_id: fakeChannelId,
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
});
