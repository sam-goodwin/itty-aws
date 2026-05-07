import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createLobby } from "../src/operations/createLobby.ts";
import { getMyUser } from "../src/operations/getMyUser.ts";
import { leaveLobby } from "../src/operations/leaveLobby.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// DELETE /lobbies/{lobby_id}/members/@me — the current user (bot) leaves a
// lobby. The happy path resolves the bot's own user id via /users/@me,
// creates a short-idle lobby with the bot listed as a member, and then
// calls leaveLobby. Lobbies auto-expire via `idle_timeout_seconds` after
// the last member departs.
//
// The application must have the LOBBIES_WRITE scope to create lobbies.

// Snowflake-shaped ids unlikely to resolve to any real lobby.
const NON_EXISTENT_LOBBY_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_LOBBY_ID = "100000000000000001";

describe("leaveLobby", () => {
  it(
    "happy path - the bot leaves a lobby it joined",
    async () => {
      const me = await runEffect(getMyUser({}));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const myId = (me as any).id as string;
      expect(typeof myId).toBe("string");

      const lobby = await runEffect(
        createLobby({
          idle_timeout_seconds: 5,
          members: [{ id: myId, metadata: { distilled_test: testRunId } }],
          metadata: { distilled_test: testRunId },
        }),
      );
      const lobbyId = lobby.id;

      const result = await runEffect(leaveLobby({ lobby_id: lobbyId }));
      // Discord returns 204 No Content on success.
      expect(result).toBeUndefined();
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent lobby id", async () => {
    await runEffect(
      leaveLobby({ lobby_id: NON_EXISTENT_LOBBY_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing lobby as NotFound. The application
          // may also see it as Forbidden when it does not own the lobby,
          // and malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a lobby the application cannot leave", async () => {
    await runEffect(
      leaveLobby({ lobby_id: INACCESSIBLE_LOBBY_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A lobby the bot is not a member of typically surfaces as
          // Forbidden, but Discord often returns NotFound to avoid leaking
          // existence.
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
