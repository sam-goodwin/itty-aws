import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildPreview } from "../src/operations/getGuildPreview.ts";
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
//   - the guild_id (snowflake) of a guild that is either discoverable
//     (DISCOVERABLE feature) or one the bot is a member of.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("getGuildPreview", () => {
  it("happy path - fetches the preview for the configured guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the getGuildPreview happy path",
      );
    }
    const result = await runEffect(getGuildPreview({ guild_id: TEST_GUILD_ID }));
    expect(result.id).toBe(TEST_GUILD_ID);
    expect(typeof result.name).toBe("string");
    expect(typeof result.approximate_member_count).toBe("number");
    expect(typeof result.approximate_presence_count).toBe("number");
    expect(Array.isArray(result.features)).toBe(true);
    expect(Array.isArray(result.emojis)).toBe(true);
    expect(Array.isArray(result.stickers)).toBe(true);
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      getGuildPreview({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see the guild
          // and the guild is not discoverable.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot cannot see and is not discoverable", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see and
    // which is not DISCOVERABLE typically yields Forbidden, or NotFound if
    // the route resolves the guild before the permission check.
    await runEffect(
      getGuildPreview({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
