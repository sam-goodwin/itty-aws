import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createLobby } from "../src/operations/createLobby.ts";
import { getLobby } from "../src/operations/getLobby.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /lobbies/{lobby_id} fetches a lobby (Social SDK / Activities API).
// The bot's application must have the LOBBIES_WRITE scope. There is no
// deleteLobby endpoint — lobbies are reaped by `idle_timeout_seconds` after
// the last member leaves, so the test creates a short-idle lobby and lets
// it self-expire.
const TEST_LOBBY_ID = process.env.DISCORD_TEST_LOBBY_ID;

// Snowflake-shaped ids unlikely to resolve to any real lobby.
const NON_EXISTENT_LOBBY_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_LOBBY_ID = "100000000000000001";

describe("getLobby", () => {
  it("happy path - fetches a lobby", async () => {
    let lobbyId = TEST_LOBBY_ID;
    if (!lobbyId) {
      // Create a short-idle lobby. The application must have LOBBIES_WRITE.
      const created = await runEffect(
        createLobby({
          idle_timeout_seconds: 5,
          metadata: { distilled_test: testRunId },
        }),
      );
      lobbyId = created.id;
    }
    const result = await runEffect(getLobby({ lobby_id: lobbyId }));
    expect(typeof result.id).toBe("string");
    expect(result.id).toBe(lobbyId);
    expect(typeof result.application_id).toBe("string");
    expect(
      result.metadata === null || typeof result.metadata === "object",
    ).toBe(true);
    expect(Array.isArray(result.members)).toBe(true);
    for (const m of result.members) {
      expect(typeof m.id).toBe("string");
      expect(typeof m.flags).toBe("number");
    }
    expect(typeof result.flags).toBe("number");
  });

  it("error - NotFound for a non-existent lobby id", async () => {
    await runEffect(
      getLobby({ lobby_id: NON_EXISTENT_LOBBY_ID }).pipe(
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
      getLobby({ lobby_id: INACCESSIBLE_LOBBY_ID }).pipe(
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
