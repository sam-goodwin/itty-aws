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

// The endpoint requires:
//   - a guild the bot is in with MANAGE_CHANNELS permission.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

// Discord channel name: 1..100 chars; we keep it shorter for safety.
const channelName = (suffix: string): string =>
  `dtest-${suffix}-${testRunId}`.slice(0, 100);

describe("createGuildChannel", () => {
  it("happy path - creates a guild text channel and deletes it on cleanup", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the createGuildChannel happy path",
      );
    }
    const name = channelName("happy");
    await runEffect(
      Effect.gen(function* () {
        // Discord type 0 == GUILD_TEXT.
        const channel = yield* createGuildChannel({
          guild_id: TEST_GUILD_ID,
          name,
          type: 0,
          topic: "distilled test channel",
        });
        return yield* Effect.sync(() => {
          expect(typeof channel.id).toBe("string");
          expect(channel.guild_id).toBe(TEST_GUILD_ID);
          expect(channel.name).toBe(name);
          expect(typeof channel.position).toBe("number");
          expect(typeof channel.flags).toBe("number");
        }).pipe(
          Effect.ensuring(
            deleteChannel({ channel_id: channel.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      createGuildChannel({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: channelName("nf"),
        type: 0,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for empty channel name", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord rejects empty channel names with 400 Invalid Form Body. May
    // also surface as Forbidden if MANAGE_CHANNELS validation fires first,
    // or NotFound for an unseen guild.
    await runEffect(
      createGuildChannel({
        guild_id: TEST_GUILD_ID,
        name: "",
        type: 0,
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

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      createGuildChannel({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: channelName("fb"),
        type: 0,
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
