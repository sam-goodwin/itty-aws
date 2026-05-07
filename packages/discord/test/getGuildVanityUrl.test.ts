import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildVanityUrl } from "../src/operations/getGuildVanityUrl.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/vanity-url returns the vanity invite URL config for
// the guild. Requires MANAGE_GUILD on the bot's member of that guild.
// The guild itself does not need to have a vanity code set — Discord returns
// `{ code: null, uses: 0 }` in that case (still 200).
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// A snowflake unlikely to correspond to any real guild — Discord typically
// responds with 404 (Unknown Guild → NotFound) or 403 (Missing Access →
// Forbidden) depending on how it interprets the lookup.
const NON_EXISTENT_GUILD_ID = `100000000000000000-${testRunId}`.slice(0, 18);

describe("getGuildVanityUrl", () => {
  it("happy path - fetches the vanity url config for a guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID must be set for the getGuildVanityUrl happy path. " +
          "The bot must have MANAGE_GUILD on this guild.",
      );
    }
    const result = await runEffect(
      getGuildVanityUrl({ guild_id: TEST_GUILD_ID }),
    );
    // `code` is nullable: null when the guild has no vanity URL configured,
    // or a string when it does.
    expect(result.code === null || typeof result.code === "string").toBe(true);
    expect(typeof result.uses).toBe("number");
    expect(result.uses).toBeGreaterThanOrEqual(0);
  });

  it("error - NotFound for a non-existent guild id", async () => {
    await runEffect(
      getGuildVanityUrl({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may surface a missing guild as NotFound (10004 Unknown
          // Guild), or as Forbidden (Missing Access) when the bot is not in
          // the guild. Some malformed snowflakes may surface as BadRequest.
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
    // Use a snowflake-shaped id that is extremely unlikely to belong to a
    // guild the bot can read. Discord prefers Forbidden when the resource
    // exists-but-inaccessible, and NotFound when it does not exist.
    await runEffect(
      getGuildVanityUrl({ guild_id: "100000000000000001" }).pipe(
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
