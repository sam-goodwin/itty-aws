import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getAutoModerationRule } from "../src/operations/getAutoModerationRule.ts";
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
//   - a guild the bot is in with MANAGE_GUILD permission.
//   - the snowflake of an auto-moderation rule that already exists in that
//     guild. The SDK's createAutoModerationRule does not currently surface
//     the body schema (codegen gap), so the happy path requires the operator
//     to supply an existing rule_id via DISCORD_TEST_AUTO_MODERATION_RULE_ID.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_AUTO_MODERATION_RULE_ID =
  process.env.DISCORD_TEST_AUTO_MODERATION_RULE_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_RULE_ID = "100000000000000001";

describe("getAutoModerationRule", () => {
  it("happy path - fetches an auto-moderation rule by id", async () => {
    if (!TEST_GUILD_ID || !TEST_AUTO_MODERATION_RULE_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_AUTO_MODERATION_RULE_ID env vars are required for the getAutoModerationRule happy path",
      );
    }
    const result = await runEffect(
      getAutoModerationRule({
        guild_id: TEST_GUILD_ID,
        rule_id: TEST_AUTO_MODERATION_RULE_ID,
      }),
    );
    // The output is typed as an opaque value because the spec does not
    // describe the response body. Cast for assertions.
    const rule = result as { id?: string; guild_id?: string };
    expect(typeof rule).toBe("object");
    expect(rule).not.toBeNull();
    if (rule.id !== undefined) {
      expect(rule.id).toBe(TEST_AUTO_MODERATION_RULE_ID);
    }
    if (rule.guild_id !== undefined) {
      expect(rule.guild_id).toBe(TEST_GUILD_ID);
    }
  });

  it("error - NotFound for non-existent rule_id under a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getAutoModerationRule({
        guild_id: TEST_GUILD_ID,
        rule_id: NON_EXISTENT_RULE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
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
      getAutoModerationRule({
        guild_id: NON_EXISTENT_GUILD_ID,
        rule_id: NON_EXISTENT_RULE_ID,
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
