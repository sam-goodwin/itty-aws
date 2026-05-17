import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listGuildEmojis } from "../src/operations/listGuildEmojis.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/emojis lists the custom emojis in a guild. The
// bot must be a member of the guild. The list is allowed to be empty.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("listGuildEmojis", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - lists emojis in a guild",
    async () => {
      const result = await runEffect(
        listGuildEmojis({ guild_id: TEST_GUILD_ID! }),
      );
      expect(Array.isArray(result)).toBe(true);
      for (const emoji of result) {
        expect(typeof emoji.id).toBe("string");
        expect(typeof emoji.name).toBe("string");
        expect(Array.isArray(emoji.roles)).toBe(true);
        expect(typeof emoji.require_colons).toBe("boolean");
        expect(typeof emoji.managed).toBe("boolean");
        expect(typeof emoji.animated).toBe("boolean");
        expect(typeof emoji.available).toBe("boolean");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      listGuildEmojis({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing guild as NotFound. Bot tokens calling
          // for a guild they aren't a member of typically receive Forbidden,
          // and malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a guild the bot is not a member of", async () => {
    await runEffect(
      listGuildEmojis({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list emojis in guilds it's a member of; for
          // any other guild Discord returns Forbidden, but it often returns
          // NotFound to avoid leaking existence.
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
