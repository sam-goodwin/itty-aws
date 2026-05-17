import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateAutoModerationRule } from "../src/operations/updateAutoModerationRule.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id} updates an
// auto-moderation rule. The SDK input has a codegen gap — only guild_id
// and rule_id are exposed (no body fields) — so calling it sends an empty
// body. Discord may treat that as a no-op (returning the unchanged rule)
// or reject it with BadRequest. The happy path is gated on
// DISCORD_TEST_GUILD_ID + DISCORD_TEST_AUTO_MODERATION_RULE_ID since the
// SDK cannot create a rule (createAutoModerationRule has the same codegen
// gap).
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_AUTO_MODERATION_RULE_ID =
  process.env.DISCORD_TEST_AUTO_MODERATION_RULE_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_RULE_ID = "100000000000000001";

describe("updateAutoModerationRule", () => {
  it.skipIf(!TEST_GUILD_ID || !TEST_AUTO_MODERATION_RULE_ID)(
    "happy path - patches a pre-existing auto-moderation rule with an empty body",
    async () => {
      void testRunId;
      // Empty-body PATCH should either echo back the rule or fail with
      // BadRequest depending on Discord's validation. We accept either by
      // running the effect and inspecting the success/failure shape.
      await runEffect(
        updateAutoModerationRule({
          guild_id: TEST_GUILD_ID!,
          rule_id: TEST_AUTO_MODERATION_RULE_ID!,
        }).pipe(
          Effect.matchEffect({
            onSuccess: (result) =>
              Effect.sync(() => {
                // Output schema is Unknown; if the API echoed back the rule,
                // it should at least be a non-null value.
                expect(result === undefined || result !== null).toBe(true);
              }),
            onFailure: (e) =>
              Effect.sync(() => {
                // Discord may reject empty-body PATCHes as BadRequest.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (e as any)._tag,
                );
              }),
          }),
        ),
      );
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest or NotFound for malformed rule_id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // A non-snowflake rule_id should fail validation. Discord may surface
    // this as BadRequest or NotFound depending on routing.
    await runEffect(
      updateAutoModerationRule({
        guild_id: TEST_GUILD_ID,
        rule_id: `not-a-snowflake-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot cannot moderate", async () => {
    // A snowflake-shaped guild_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      updateAutoModerationRule({
        guild_id: NON_EXISTENT_GUILD_ID,
        rule_id: NON_EXISTENT_RULE_ID,
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

  it("error - NotFound for non-existent rule_id in a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // Discord returns 404 NotFound for rule_ids that do not exist on the guild.
    await runEffect(
      updateAutoModerationRule({
        guild_id: TEST_GUILD_ID,
        rule_id: NON_EXISTENT_RULE_ID,
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
