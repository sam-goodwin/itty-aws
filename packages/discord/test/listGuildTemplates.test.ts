import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listGuildTemplates } from "../src/operations/listGuildTemplates.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/templates lists guild templates. Requires the bot
// to have MANAGE_GUILD in the guild. The list is allowed to be empty.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("listGuildTemplates", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - lists templates for a guild",
    async () => {
      const result = await runEffect(
        listGuildTemplates({ guild_id: TEST_GUILD_ID! }),
      );
      expect(Array.isArray(result)).toBe(true);
      for (const tpl of result) {
        expect(typeof tpl.code).toBe("string");
        expect(typeof tpl.name).toBe("string");
        expect(
          tpl.description === null || typeof tpl.description === "string",
        ).toBe(true);
        expect(typeof tpl.usage_count).toBe("number");
        expect(typeof tpl.creator_id).toBe("string");
        expect(typeof tpl.created_at).toBe("string");
        expect(typeof tpl.updated_at).toBe("string");
        expect(tpl.source_guild_id).toBe(TEST_GUILD_ID!);
        expect(tpl.serialized_source_guild).toBeDefined();
        expect(typeof tpl.serialized_source_guild.name).toBe("string");
        expect(Array.isArray(tpl.serialized_source_guild.roles)).toBe(true);
        expect(Array.isArray(tpl.serialized_source_guild.channels)).toBe(true);
        expect(tpl.is_dirty === null || typeof tpl.is_dirty === "boolean").toBe(
          true,
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      listGuildTemplates({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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

  it("error - Forbidden or NotFound for a guild the bot cannot access", async () => {
    await runEffect(
      listGuildTemplates({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list templates in guilds it's a member of with
          // MANAGE_GUILD; for any other guild Discord returns Forbidden, but
          // it often returns NotFound to avoid leaking existence.
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
