import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getMyGuildMember } from "../src/operations/getMyGuildMember.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /users/@me/guilds/{guild_id}/member is an OAuth2-only route. It
// requires a Bearer token with the `guilds.members.read` scope; bot tokens
// cannot use any /users/@me endpoint. The happy path therefore requires the
// SDK to be configured with DISCORD_BEARER_TOKEN (CredentialsFromEnv flips
// to Bearer scheme automatically when that env var is set) and
// DISCORD_TEST_GUILD_ID for a guild the bearer token's user is a member of.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const HAS_BEARER = Boolean(process.env.DISCORD_BEARER_TOKEN);

// Snowflake-shaped ids unlikely to resolve to a guild the user belongs to.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("getMyGuildMember", () => {
  it("happy path - returns the current user's member object for a guild", async () => {
    if (!HAS_BEARER) {
      throw new Error(
        "DISCORD_BEARER_TOKEN must be set for the getMyGuildMember happy path. " +
          "The token must be an OAuth2 Bearer with the `guilds.members.read` scope.",
      );
    }
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID must be set for the getMyGuildMember happy path. " +
          "The bearer token's user must be a member of this guild.",
      );
    }
    const result = await runEffect(
      getMyGuildMember({ guild_id: TEST_GUILD_ID }),
    );
    expect(result.avatar === null || typeof result.avatar === "string").toBe(
      true,
    );
    expect(result.banner === null || typeof result.banner === "string").toBe(
      true,
    );
    expect(
      result.communication_disabled_until === null ||
        typeof result.communication_disabled_until === "string",
    ).toBe(true);
    expect(typeof result.flags).toBe("number");
    expect(typeof result.joined_at).toBe("string");
    expect(result.nick === null || typeof result.nick === "string").toBe(true);
    expect(typeof result.pending).toBe("boolean");
    expect(
      result.premium_since === null ||
        typeof result.premium_since === "string",
    ).toBe(true);
    expect(Array.isArray(result.roles)).toBe(true);
    for (const role of result.roles) {
      expect(typeof role).toBe("string");
    }
    expect(typeof result.user.id).toBe("string");
    expect(typeof result.user.username).toBe("string");
    expect(typeof result.mute).toBe("boolean");
    expect(typeof result.deaf).toBe("boolean");
  });

  it("error - NotFound for a non-existent guild id", async () => {
    if (!HAS_BEARER) {
      throw new Error(
        "DISCORD_BEARER_TOKEN must be set for the getMyGuildMember error tests.",
      );
    }
    await runEffect(
      getMyGuildMember({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may surface a missing guild as NotFound (10004), or as
          // Forbidden when the user is not a member of the guild. Some
          // malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a guild the user is not in", async () => {
    if (!HAS_BEARER) {
      throw new Error(
        "DISCORD_BEARER_TOKEN must be set for the getMyGuildMember error tests.",
      );
    }
    await runEffect(
      getMyGuildMember({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
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
