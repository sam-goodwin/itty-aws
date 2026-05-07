import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildWidgetSettings } from "../src/operations/getGuildWidgetSettings.ts";
import { updateGuildWidgetSettings } from "../src/operations/updateGuildWidgetSettings.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /guilds/{guild_id}/widget updates widget settings (enabled + target
// channel). Requires MANAGE_GUILD on the bot's member of the guild.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to a guild the bot can access.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("updateGuildWidgetSettings", () => {
  it(
    "happy path - toggles the widget enabled flag and restores it",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID must be set for the updateGuildWidgetSettings happy path. " +
            "The bot must have MANAGE_GUILD on this guild.",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          // Snapshot current settings so we can restore afterwards and not
          // leave the test guild in a flipped state.
          const original = yield* getGuildWidgetSettings({
            guild_id: TEST_GUILD_ID,
          });
          const flipped = !original.enabled;
          return yield* Effect.gen(function* () {
            const updated = yield* updateGuildWidgetSettings({
              guild_id: TEST_GUILD_ID,
              enabled: flipped,
            });
            return yield* Effect.sync(() => {
              expect(updated.enabled).toBe(flipped);
              // channel_id is opaque on the response — Discord returns
              // either a snowflake string or null. We assert only that the
              // property round-tripped on the response.
              expect("channel_id" in updated).toBe(true);
            });
          }).pipe(
            Effect.ensuring(
              updateGuildWidgetSettings({
                guild_id: TEST_GUILD_ID,
                enabled: original.enabled,
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
      updateGuildWidgetSettings({
        guild_id: NON_EXISTENT_GUILD_ID,
        enabled: true,
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

  it("error - BadRequest for malformed (non-snowflake) channel_id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID is required for the BadRequest test",
      );
    }
    // channel_id must be a snowflake string (or null) referring to a channel
    // in the same guild. A non-snowflake value is rejected with 400 Invalid
    // Form Body. May also surface as Forbidden if MANAGE_GUILD validation
    // fires first.
    await runEffect(
      updateGuildWidgetSettings({
        guild_id: TEST_GUILD_ID,
        channel_id: "not-a-snowflake",
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
  });

  it("error - Forbidden for a guild the bot cannot access", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      updateGuildWidgetSettings({
        guild_id: INACCESSIBLE_GUILD_ID,
        enabled: true,
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
