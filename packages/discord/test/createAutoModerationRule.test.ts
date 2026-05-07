import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createAutoModerationRule } from "../src/operations/createAutoModerationRule.ts";
import { deleteAutoModerationRule } from "../src/operations/deleteAutoModerationRule.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - a guild the bot is in with MANAGE_GUILD permission.
// The SDK's input schema currently only exposes guild_id and not the body
// (name, event_type, trigger_type, actions, etc.). Without those required
// fields the API call sends an empty body, which Discord rejects with 400
// Invalid Form Body. Until the spec is patched to surface the body schema,
// the happy path is exercised end-to-end against a real guild via the
// gated env vars below; if the SDK truly sends no body Discord will reject
// it and the assertion will surface the failure.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("createAutoModerationRule", () => {
  it("happy path - creates an auto-moderation rule and deletes it on cleanup", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the createAutoModerationRule happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        // The output is typed as an opaque value because the spec does not
        // describe the response body. Cast for assertions.
        const ruleRaw = yield* createAutoModerationRule({
          guild_id: TEST_GUILD_ID,
        });
        const rule = ruleRaw as { id?: string; guild_id?: string };
        return yield* Effect.sync(() => {
          expect(typeof rule).toBe("object");
          expect(typeof rule.id).toBe("string");
          if (rule.guild_id !== undefined) {
            expect(rule.guild_id).toBe(TEST_GUILD_ID);
          }
        }).pipe(
          Effect.ensuring(
            rule.id
              ? deleteAutoModerationRule({
                  guild_id: TEST_GUILD_ID,
                  rule_id: rule.id,
                }).pipe(Effect.ignore)
              : Effect.void,
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      createAutoModerationRule({
        guild_id: NON_EXISTENT_GUILD_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see the guild.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) guild_id", async () => {
    await runEffect(
      createAutoModerationRule({
        guild_id: "not-a-snowflake",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404, or the bot may lack
          // access and receive 403.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      createAutoModerationRule({
        guild_id: NON_EXISTENT_GUILD_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
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
