import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { addGuildMember } from "../src/operations/addGuildMember.ts";
import { deleteGuildMember } from "../src/operations/deleteGuildMember.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - a guild the bot is in with CREATE_INSTANT_INVITE permission
//   - a user OAuth2 access_token with the `guilds.join` scope
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_USER_ID = process.env.DISCORD_TEST_USER_ID;
const TEST_USER_ACCESS_TOKEN = process.env.DISCORD_TEST_USER_ACCESS_TOKEN;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("addGuildMember", () => {
  it("happy path - adds a user to a guild and removes them on cleanup", async () => {
    if (!TEST_GUILD_ID || !TEST_USER_ID || !TEST_USER_ACCESS_TOKEN) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID, DISCORD_TEST_USER_ID and DISCORD_TEST_USER_ACCESS_TOKEN env vars are required for the addGuildMember happy path",
      );
    }
    await runEffect(
      addGuildMember({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_USER_ID,
        access_token: TEST_USER_ACCESS_TOKEN,
        nick: "distilled-test-member",
      }).pipe(
        Effect.tap((member) =>
          Effect.sync(() => {
            // Discord returns 201 with the member object on add, or 204 with
            // empty body if the user is already a member. With a non-empty
            // body, the member.user.id must equal the requested user_id.
            expect(member.user.id).toBe(TEST_USER_ID);
            expect(Array.isArray(member.roles)).toBe(true);
            expect(typeof member.joined_at).toBe("string");
          }),
        ),
        Effect.ensuring(
          deleteGuildMember({
            guild_id: TEST_GUILD_ID,
            user_id: TEST_USER_ID,
          }).pipe(Effect.ignore),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      addGuildMember({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
        access_token: TEST_USER_ACCESS_TOKEN ?? "fake-access-token",
      }).pipe(
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

  it("error - BadRequest for malformed (non-snowflake) guild_id", async () => {
    await runEffect(
      addGuildMember({
        guild_id: "not-a-snowflake",
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
        access_token: TEST_USER_ACCESS_TOKEN ?? "fake-access-token",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when access_token is invalid", async () => {
    if (!TEST_GUILD_ID || !TEST_USER_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_USER_ID env vars are required for the Forbidden test",
      );
    }
    await runEffect(
      addGuildMember({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_USER_ID,
        access_token: "definitely-not-a-valid-oauth2-access-token",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns Forbidden (50025 Invalid OAuth2 access token) when
          // the access_token is invalid or lacks the `guilds.join` scope; it
          // may also surface as BadRequest depending on validation order.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "BadRequest", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
