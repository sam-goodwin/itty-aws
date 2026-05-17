import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { addLobbyMember } from "../src/operations/addLobbyMember.ts";
import { createLobby } from "../src/operations/createLobby.ts";
import { deleteLobbyMember } from "../src/operations/deleteLobbyMember.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a real user_id that the bot can manage as a lobby member.
// The bot must be the lobby owner (it is, since we create the lobby here).
const TEST_LOBBY_USER_ID = process.env.DISCORD_TEST_LOBBY_USER_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("deleteLobbyMember", () => {
  it(
    "happy path - adds a member to a lobby then removes them",
    async () => {
      if (!TEST_LOBBY_USER_ID) {
        throw new Error(
          "DISCORD_TEST_LOBBY_USER_ID env var is required for the deleteLobbyMember happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      await runEffect(
        Effect.gen(function* () {
          // No deleteLobby SDK operation exists, so we use a short
          // idle_timeout_seconds to let Discord auto-clean up afterwards.
          const lobby = yield* createLobby({
            idle_timeout_seconds: 5,
            metadata: { testRunId, op: "deleteLobbyMember" },
          });
          yield* addLobbyMember({
            lobby_id: lobby.id,
            user_id: TEST_LOBBY_USER_ID,
            metadata: { testRunId },
          });
          const result = yield* deleteLobbyMember({
            lobby_id: lobby.id,
            user_id: TEST_LOBBY_USER_ID,
          }).pipe(
            // If the delete fails, attempt cleanup explicitly so the test
            // member doesn't linger until the lobby idle-times out.
            Effect.ensuring(
              deleteLobbyMember({
                lobby_id: lobby.id,
                user_id: TEST_LOBBY_USER_ID,
              }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            // 204 No Content; output schema is Void.
            expect(result).toBeUndefined();
          });
        }),
      );
    },
    30_000,
  );

  it(
    "error - NotFound for a user_id that is not a member of the lobby",
    async () => {
      // Create a fresh lobby with no members and try to remove a bogus user.
      // Discord returns 404 NotFound (10094 / similar) for a missing
      // member, or 403 Forbidden depending on which check fires first.
      await runEffect(
        Effect.gen(function* () {
          const lobby = yield* createLobby({
            idle_timeout_seconds: 5,
            metadata: { testRunId, op: "deleteLobbyMember-nf" },
          });
          return yield* deleteLobbyMember({
            lobby_id: lobby.id,
            user_id: NON_EXISTENT_USER_ID,
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
            }),
          );
        }),
      );
    },
    30_000,
  );

  it("error - Forbidden for a lobby_id the bot does not own", async () => {
    // A lobby_id the bot's application does not own typically yields 403
    // Forbidden, or 404 NotFound if the route 404s before the ownership
    // check.
    await runEffect(
      deleteLobbyMember({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        user_id: NON_EXISTENT_USER_ID,
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
