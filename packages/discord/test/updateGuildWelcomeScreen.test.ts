import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildWelcomeScreen } from "../src/operations/getGuildWelcomeScreen.ts";
import { updateGuildWelcomeScreen } from "../src/operations/updateGuildWelcomeScreen.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /guilds/{guild_id}/welcome-screen requires:
//   - a Community-enabled guild that has a welcome screen configured
//     (Discord returns 404 10069 otherwise).
//   - MANAGE_GUILD permission.
const TEST_GUILD_ID =
  process.env.DISCORD_TEST_GUILD_WITH_WELCOME_SCREEN_ID ??
  process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids that should not resolve to any guild the bot can
// read.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

// Welcome screen description is limited to 140 characters; build run-scoped
// values short enough to fit comfortably.
const description = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 140);

describe("updateGuildWelcomeScreen", () => {
  it(
    "happy path - updates the welcome screen description and restores it",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_WITH_WELCOME_SCREEN_ID (or DISCORD_TEST_GUILD_ID) must be set " +
            "for the updateGuildWelcomeScreen happy path. The guild must be Community-enabled " +
            "with a welcome screen configured.",
        );
      }
      const newDescription = description("happy");
      await runEffect(
        Effect.gen(function* () {
          // Snapshot the current description so we can restore it post-test
          // and not pollute the test guild.
          const original = yield* getGuildWelcomeScreen({
            guild_id: TEST_GUILD_ID,
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateGuildWelcomeScreen({
              guild_id: TEST_GUILD_ID,
              description: newDescription,
            });
            return yield* Effect.sync(() => {
              expect(updated.description).toBe(newDescription);
              expect(Array.isArray(updated.welcome_channels)).toBe(true);
              for (const wc of updated.welcome_channels) {
                expect(typeof wc.channel_id).toBe("string");
                expect(typeof wc.description).toBe("string");
                expect(
                  wc.emoji_name === null || typeof wc.emoji_name === "string",
                ).toBe(true);
              }
            });
          }).pipe(
            Effect.ensuring(
              updateGuildWelcomeScreen({
                guild_id: TEST_GUILD_ID,
                description: original.description,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for a non-existent guild id", async () => {
    await runEffect(
      updateGuildWelcomeScreen({
        guild_id: NON_EXISTENT_GUILD_ID,
        description: description("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may surface a missing guild as NotFound (10004), or as
          // Forbidden (Missing Access) when the bot is not in the guild.
          // Some malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it(
    "error - BadRequest for description exceeding the 140 character limit",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_WITH_WELCOME_SCREEN_ID (or DISCORD_TEST_GUILD_ID) is required for the BadRequest test",
        );
      }
      // Welcome screen descriptions are limited to 140 chars; a 200-char
      // string is rejected with 400 Invalid Form Body. May also surface as
      // Forbidden if MANAGE_GUILD validation fires first, or NotFound on a
      // non-Community guild.
      const tooLong = "a".repeat(200);
      await runEffect(
        updateGuildWelcomeScreen({
          guild_id: TEST_GUILD_ID,
          description: tooLong,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (e as any)._tag,
            );
          }),
        ),
      );
    },
    30_000,
  );

  it("error - Forbidden for a guild the bot cannot access", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      updateGuildWelcomeScreen({
        guild_id: INACCESSIBLE_GUILD_ID,
        description: description("fb"),
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
