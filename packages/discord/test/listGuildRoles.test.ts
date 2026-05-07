import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listGuildRoles } from "../src/operations/listGuildRoles.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/roles lists the roles in a guild. The bot must
// be a member of the guild. Every guild has at least the @everyone role,
// so a real test guild will always return at least one entry.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("listGuildRoles", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - lists roles in a guild",
    async () => {
      const result = await runEffect(
        listGuildRoles({ guild_id: TEST_GUILD_ID! }),
      );
      expect(Array.isArray(result)).toBe(true);
      // Every guild has @everyone.
      expect(result.length).toBeGreaterThanOrEqual(1);
      for (const role of result) {
        expect(typeof role.id).toBe("string");
        expect(typeof role.name).toBe("string");
        expect(
          role.description === null || typeof role.description === "string",
        ).toBe(true);
        expect(typeof role.permissions).toBe("string");
        expect(typeof role.position).toBe("number");
        expect(typeof role.color).toBe("number");
        expect(typeof role.colors.primary_color).toBe("number");
        expect(typeof role.hoist).toBe("boolean");
        expect(typeof role.managed).toBe("boolean");
        expect(typeof role.mentionable).toBe("boolean");
        expect(typeof role.flags).toBe("number");
      }
      // The @everyone role's id equals the guild id.
      const everyone = result.find((r) => r.id === TEST_GUILD_ID!);
      expect(everyone).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      listGuildRoles({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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
      listGuildRoles({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list roles in guilds it's a member of; for any
          // other guild Discord returns Forbidden, but it often returns
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
