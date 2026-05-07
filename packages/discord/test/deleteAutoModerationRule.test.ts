import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteAutoModerationRule } from "../src/operations/deleteAutoModerationRule.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The endpoint deletes an auto-moderation rule by id. The corresponding
// createAutoModerationRule operation has a codegen gap — its input only
// exposes guild_id and not the rule body — so we cannot reliably create a
// rule through the SDK to delete. Operators must supply a pre-existing
// throwaway rule via DISCORD_TEST_GUILD_ID + DISCORD_TEST_AUTO_MODERATION_RULE_ID
// for the happy path (this DELETE removes it).
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_AUTO_MODERATION_RULE_ID =
  process.env.DISCORD_TEST_AUTO_MODERATION_RULE_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_RULE_ID = "100000000000000001";

describe("deleteAutoModerationRule", () => {
  it("happy path - deletes a pre-existing auto-moderation rule", async () => {
    if (!TEST_GUILD_ID || !TEST_AUTO_MODERATION_RULE_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_AUTO_MODERATION_RULE_ID env vars are required for the deleteAutoModerationRule happy path. createAutoModerationRule has a codegen gap (no body), so the rule must be created out-of-band.",
      );
    }
    void testRunId;
    await runEffect(
      deleteAutoModerationRule({
        guild_id: TEST_GUILD_ID,
        rule_id: TEST_AUTO_MODERATION_RULE_ID,
      }).pipe(
        Effect.tap(() =>
          // 204 No Content; output schema is Void.
          Effect.sync(() => {
            expect(true).toBe(true);
          }),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent rule_id in a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // Discord returns 404 NotFound for rule_ids that do not exist on the guild.
    await runEffect(
      deleteAutoModerationRule({
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

  it("error - Forbidden when targeting a guild the bot cannot moderate", async () => {
    // A snowflake-shaped guild_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      deleteAutoModerationRule({
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
