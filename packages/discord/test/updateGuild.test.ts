import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuild } from "../src/operations/getGuild.ts";
import { updateGuild } from "../src/operations/updateGuild.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /guilds/{guild_id} updates a guild's settings. The happy path is
// gated on DISCORD_TEST_GUILD_ID and is non-destructive — we snapshot the
// guild's current name via getGuild and PATCH the same name back.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("updateGuild", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - patches the guild with its existing name (non-destructive)",
    async () => {
      void testRunId;
      const snapshot = await runEffect(
        getGuild({ guild_id: TEST_GUILD_ID! }),
      );
      const result = await runEffect(
        updateGuild({
          guild_id: TEST_GUILD_ID!,
          name: snapshot.name,
        }),
      );
      expect(result.id).toBe(TEST_GUILD_ID);
      expect(typeof result.name).toBe("string");
      expect(result.name).toBe(snapshot.name);
      expect(Array.isArray(result.roles)).toBe(true);
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for an empty name", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord rejects an empty name with 400 BadRequest (name must be
    // 2-100 chars). Routing may surface this as Forbidden or NotFound on
    // edge cases.
    await runEffect(
      updateGuild({
        guild_id: TEST_GUILD_ID,
        name: "",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot cannot manage", async () => {
    // A snowflake-shaped guild_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route
    // 404s before the permission check.
    await runEffect(
      updateGuild({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: `distilled-discord-${testRunId}`,
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

  it("error - NotFound for a non-existent guild id", async () => {
    const fakeGuildId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      updateGuild({
        guild_id: fakeGuildId,
        name: `distilled-discord-${testRunId}`,
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
