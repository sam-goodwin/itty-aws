import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createLobby } from "../src/operations/createLobby.ts";
import { getLobbyMessages } from "../src/operations/getLobbyMessages.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /lobbies/{lobby_id}/messages — lists messages in a lobby. The bot's
// application must have the LOBBIES_WRITE scope. There is no deleteLobby
// endpoint; lobbies are reaped by `idle_timeout_seconds`. The list may
// legitimately be empty for a freshly-created lobby.
const TEST_LOBBY_ID = process.env.DISCORD_TEST_LOBBY_ID;

// Snowflake-shaped ids unlikely to resolve to any real lobby.
const NON_EXISTENT_LOBBY_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_LOBBY_ID = "100000000000000001";

describe("getLobbyMessages", () => {
  it("happy path - lists messages in a lobby", async () => {
    let lobbyId = TEST_LOBBY_ID;
    if (!lobbyId) {
      const created = await runEffect(
        createLobby({
          idle_timeout_seconds: 5,
          metadata: { distilled_test: testRunId },
        }),
      );
      lobbyId = created.id;
    }
    const result = await runEffect(getLobbyMessages({ lobby_id: lobbyId }));
    expect(Array.isArray(result)).toBe(true);
    for (const msg of result) {
      expect(typeof msg.id).toBe("string");
      expect(typeof msg.content).toBe("string");
      expect(msg.lobby_id).toBe(lobbyId);
      expect(typeof msg.channel_id).toBe("string");
      expect(typeof msg.author.id).toBe("string");
      expect(typeof msg.author.username).toBe("string");
      expect(typeof msg.flags).toBe("number");
    }
  });

  it("happy path - honors the limit query parameter", async () => {
    let lobbyId = TEST_LOBBY_ID;
    if (!lobbyId) {
      const created = await runEffect(
        createLobby({
          idle_timeout_seconds: 5,
          metadata: { distilled_test: testRunId },
        }),
      );
      lobbyId = created.id;
    }
    const result = await runEffect(
      getLobbyMessages({ lobby_id: lobbyId, limit: 5 }),
    );
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeLessThanOrEqual(5);
  });

  it("error - NotFound for a non-existent lobby id", async () => {
    await runEffect(
      getLobbyMessages({ lobby_id: NON_EXISTENT_LOBBY_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may surface a missing lobby as NotFound, or as Forbidden
          // when the application does not own the lobby. Some malformed
          // snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a lobby the application cannot access", async () => {
    await runEffect(
      getLobbyMessages({ lobby_id: INACCESSIBLE_LOBBY_ID }).pipe(
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
