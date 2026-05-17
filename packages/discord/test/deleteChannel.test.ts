import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildChannel } from "../src/operations/createGuildChannel.ts";
import { deleteChannel } from "../src/operations/deleteChannel.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a guild where the bot has Manage Channels.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

const channelName = (suffix: string): string =>
  `dt-delch-${suffix}-${testRunId}`.slice(0, 100);

describe("deleteChannel", () => {
  it(
    "happy path - creates a channel then deletes it and returns the deleted channel",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the deleteChannel happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createGuildChannel({
            guild_id: TEST_GUILD_ID,
            name: channelName("happy"),
            // type 0 = GUILD_TEXT
            type: 0,
          });
          const result = yield* deleteChannel({
            channel_id: created.id,
          }).pipe(
            // If deleteChannel fails for any reason, ensure we still try to
            // clean up the channel we just created.
            Effect.ensuring(
              deleteChannel({ channel_id: created.id }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            // Discord returns the deleted channel object. The SDK types it as
            // unknown, so narrow defensively before asserting.
            expect(result).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const r = result as any;
            expect(typeof r.id).toBe("string");
            expect(r.id).toBe(created.id);
          });
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      deleteChannel({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A snowflake-shaped channel_id the bot cannot see typically
          // surfaces as 404 NotFound. Discord may also return 403 Forbidden
          // (50001 Missing Access) if the route reaches the permission check.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden / NotFound for a malformed channel_id", async () => {
    // A non-snowflake string is rejected by Discord's routing layer.
    await runEffect(
      deleteChannel({ channel_id: "not-a-snowflake" }).pipe(
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
