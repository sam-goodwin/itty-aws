import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteGuildIntegration } from "../src/operations/deleteGuildIntegration.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Guild integrations cannot be created via the bot REST API — they are
// installed when a user authorizes an OAuth2 application, connects a
// Twitch/YouTube/X account, or installs a bot. The happy path therefore
// requires a pre-existing throwaway integration plus an explicit opt-in
// flag because the deletion is destructive and not reversible from the API.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_INTEGRATION_ID = process.env.DISCORD_TEST_INTEGRATION_ID;
const ALLOW_DELETE_INTEGRATION =
  process.env.DISCORD_TEST_ALLOW_DELETE_INTEGRATION === "1";

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_INTEGRATION_ID = "100000000000000001";

describe("deleteGuildIntegration", () => {
  it(
    "happy path - removes a pre-existing throwaway integration from the guild",
    async () => {
      if (
        !TEST_GUILD_ID ||
        !TEST_INTEGRATION_ID ||
        !ALLOW_DELETE_INTEGRATION
      ) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID, DISCORD_TEST_INTEGRATION_ID and DISCORD_TEST_ALLOW_DELETE_INTEGRATION=1 are required for the deleteGuildIntegration happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      const result = await runEffect(
        deleteGuildIntegration({
          guild_id: TEST_GUILD_ID,
          integration_id: TEST_INTEGRATION_ID,
        }),
      );
      // 204 No Content; output schema is Void.
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("error - NotFound for non-existent integration_id on a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped integration_id that does not exist on the guild
    // yields 404 NotFound. Discord may also surface 403 Forbidden depending
    // on which check fires first.
    await runEffect(
      deleteGuildIntegration({
        guild_id: TEST_GUILD_ID,
        integration_id: NON_EXISTENT_INTEGRATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for a guild_id the bot is not in", async () => {
    // A guild_id the bot is not a member of typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      deleteGuildIntegration({
        guild_id: NON_EXISTENT_GUILD_ID,
        integration_id: NON_EXISTENT_INTEGRATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
