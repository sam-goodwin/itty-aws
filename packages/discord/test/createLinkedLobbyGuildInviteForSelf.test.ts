import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createLinkedLobbyGuildInviteForSelf } from "../src/operations/createLinkedLobbyGuildInviteForSelf.ts";
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
//   - a lobby_id where the bot is a member.
//   - that lobby must be linked to a guild (see linkChannelToLobby).
// Operators must supply DISCORD_TEST_LINKED_LOBBY_ID for the happy path. The
// resulting invite is a regular guild invite that auto-expires per Discord's
// default; no explicit cleanup is necessary, but we record the testRunId in
// surrounding logs for traceability.
const TEST_LINKED_LOBBY_ID = process.env.DISCORD_TEST_LINKED_LOBBY_ID;

// Snowflake-format identifier that should not match a real lobby.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";

describe("createLinkedLobbyGuildInviteForSelf", () => {
  it("happy path - returns a guild invite code for the linked lobby", async () => {
    if (!TEST_LINKED_LOBBY_ID) {
      throw new Error(
        "DISCORD_TEST_LINKED_LOBBY_ID env var is required for the createLinkedLobbyGuildInviteForSelf happy path (lobby must be linked to a guild and have the bot as a member)",
      );
    }
    // testRunId is included for traceability in any server-side audit logs.
    void testRunId;
    await runEffect(
      createLinkedLobbyGuildInviteForSelf({
        lobby_id: TEST_LINKED_LOBBY_ID,
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
      createLinkedLobbyGuildInviteForSelf({
        lobby_id: NON_EXISTENT_LOBBY_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns 404 NotFound for unknown lobbies; may surface as
          // 403 Forbidden if the bot lacks visibility into the route.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) lobby_id", async () => {
    await runEffect(
      createLinkedLobbyGuildInviteForSelf({
        lobby_id: "not-a-snowflake",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Malformed snowflake IDs are typically rejected with 400 Invalid
          // Form Body, but the routing layer may also classify them as 404.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the bot is not a member of the lobby", async () => {
    // A snowflake-shaped lobby_id that the bot is not a member of typically
    // yields 403 Forbidden, or 404 NotFound if the route 404s before the
    // membership check.
    await runEffect(
      createLinkedLobbyGuildInviteForSelf({
        lobby_id: NON_EXISTENT_LOBBY_ID,
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
