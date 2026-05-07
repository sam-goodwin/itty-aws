import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildsOnboarding } from "../src/operations/getGuildsOnboarding.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

// The endpoint requires:
//   - a guild the bot is in. Discord returns the onboarding object even
//     when onboarding is disabled (with `enabled: false` and possibly empty
//     prompts/default_channel_ids), so any test guild works.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("getGuildsOnboarding", () => {
  it("happy path - fetches the onboarding configuration for the configured guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the getGuildsOnboarding happy path",
      );
    }
    const result = await runEffect(
      getGuildsOnboarding({ guild_id: TEST_GUILD_ID }),
    );
    expect(result.guild_id).toBe(TEST_GUILD_ID);
    expect(typeof result.enabled).toBe("boolean");
    expect(Array.isArray(result.prompts)).toBe(true);
    expect(Array.isArray(result.default_channel_ids)).toBe(true);
    for (const prompt of result.prompts) {
      expect(typeof prompt.id).toBe("string");
      expect(typeof prompt.title).toBe("string");
      expect(typeof prompt.single_select).toBe("boolean");
      expect(typeof prompt.required).toBe("boolean");
      expect(typeof prompt.in_onboarding).toBe("boolean");
      expect(Array.isArray(prompt.options)).toBe(true);
    }
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      getGuildsOnboarding({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see the guild.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      getGuildsOnboarding({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
