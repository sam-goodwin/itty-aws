import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createLinkedLobbyGuildInviteForUser } from "../src/operations/createLinkedLobbyGuildInviteForUser.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The endpoint requires:
//   - a lobby_id linked to a guild.
//   - a user_id that is a member of the lobby.
// Operators must supply DISCORD_TEST_LINKED_LOBBY_ID + DISCORD_TEST_LOBBY_USER_ID
// for the happy path. The resulting invite is a regular guild invite.
const TEST_LINKED_LOBBY_ID = process.env.DISCORD_TEST_LINKED_LOBBY_ID;
const TEST_LOBBY_USER_ID = process.env.DISCORD_TEST_LOBBY_USER_ID;

// Snowflake-format identifiers that should not match a real lobby/user.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("createLinkedLobbyGuildInviteForUser", () => {
  it("happy path - returns a guild invite code for the lobby member", async () => {
    if (!TEST_LINKED_LOBBY_ID || !TEST_LOBBY_USER_ID) {
      throw new Error(
        "DISCORD_TEST_LINKED_LOBBY_ID and DISCORD_TEST_LOBBY_USER_ID env vars are required for the createLinkedLobbyGuildInviteForUser happy path",
      );
    }
    void testRunId;
    await runEffect(
      createLinkedLobbyGuildInviteForUser({
        lobby_id: TEST_LINKED_LOBBY_ID,
        user_id: TEST_LOBBY_USER_ID,
      }).pipe(
        Effect.tap((invite) =>
          Effect.sync(() => {
            expect(typeof invite.code).toBe("string");
            expect(invite.code.length).toBeGreaterThan(0);
          }),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent lobby_id", async () => {
    await runEffect(
      createLinkedLobbyGuildInviteForUser({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        user_id: TEST_LOBBY_USER_ID ?? NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns 404 NotFound for unknown lobbies; may also surface
          // as 403 Forbidden if the bot lacks visibility.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) lobby_id", async () => {
    await runEffect(
      createLinkedLobbyGuildInviteForUser({
        lobby_id: "not-a-snowflake",
        user_id: NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Malformed snowflakes are typically 400 Invalid Form Body, but the
          // routing layer may also classify as 404.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the user is not a member of the lobby", async () => {
    // A snowflake-shaped user_id who is not a lobby member typically yields
    // 403 Forbidden (or 404 NotFound if the route 404s before the membership
    // check).
    await runEffect(
      createLinkedLobbyGuildInviteForUser({
        lobby_id: TEST_LINKED_LOBBY_ID ?? NON_EXISTENT_LOBBY_ID,
        user_id: NON_EXISTENT_USER_ID,
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
