import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listAutoModerationRules } from "../src/operations/listAutoModerationRules.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/auto-moderation/rules lists all auto-moderation
// rules for a guild. Requires the bot to be a member of the guild and to
// have the MANAGE_GUILD permission. The list is allowed to be empty.

const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("listAutoModerationRules", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - lists auto-moderation rules for a guild",
    async () => {
      const result = await runEffect(
        listAutoModerationRules({ guild_id: TEST_GUILD_ID! }),
      );
      expect(Array.isArray(result)).toBe(true);
      for (const rule of result) {
        // The output schema is Schema.Array(Schema.Unknown); validate the
        // documented shape defensively.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const r = rule as any;
        expect(typeof r.id).toBe("string");
        expect(typeof r.guild_id).toBe("string");
        expect(r.guild_id).toBe(TEST_GUILD_ID!);
        expect(typeof r.name).toBe("string");
        expect(typeof r.creator_id).toBe("string");
        expect(typeof r.event_type).toBe("number");
        expect(typeof r.trigger_type).toBe("number");
        expect(Array.isArray(r.actions)).toBe(true);
        expect(typeof r.enabled).toBe("boolean");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      listAutoModerationRules({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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
      listAutoModerationRules({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list auto-moderation rules in guilds it is a
          // member of with MANAGE_GUILD; for any other guild Discord returns
          // Forbidden, but it often returns NotFound to avoid leaking
          // existence.
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
