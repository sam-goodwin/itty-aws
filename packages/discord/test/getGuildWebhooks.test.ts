import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildWebhooks } from "../src/operations/getGuildWebhooks.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/webhooks lists every webhook across all channels in
// the guild. Requires MANAGE_WEBHOOKS on the bot's guild member. The list
// may legitimately be empty.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids the bot cannot read. The first should produce
// NotFound (guild does not exist) and the second a Forbidden (or NotFound
// depending on Discord's resolution order) for an inaccessible guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("getGuildWebhooks", () => {
  it("happy path - lists webhooks for the test guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID must be set for the getGuildWebhooks happy path. " +
          "The bot must have MANAGE_WEBHOOKS on this guild.",
      );
    }
    const result = await runEffect(
      getGuildWebhooks({ guild_id: TEST_GUILD_ID }),
    );
    expect(Array.isArray(result)).toBe(true);
    // Each entry is an opaque webhook object; we don't assert its shape
    // because the output schema is `Array<unknown>`.
    for (const entry of result) {
      expect(entry).toBeDefined();
    }
  });

  it("error - NotFound for a non-existent guild id", async () => {
    await runEffect(
      getGuildWebhooks({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may surface a missing guild as NotFound (10004), or as
          // Forbidden (Missing Access) when the bot is not in the guild.
          // Some malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a guild the bot cannot access", async () => {
    await runEffect(
      getGuildWebhooks({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
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
