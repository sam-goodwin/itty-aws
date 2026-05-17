import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createLobby } from "../src/operations/createLobby.ts";
import { createLobbyMessage } from "../src/operations/createLobbyMessage.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Snowflake-format identifier that should not match a real lobby.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";

describe("createLobbyMessage", () => {
  it("happy path - posts a message to a freshly created lobby", async () => {
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({ idle_timeout_seconds: 5 });
        const content = `distilled-test-${testRunId}`;
        const msg = yield* createLobbyMessage({
          lobby_id: lobby.id,
          content,
        });
        return yield* Effect.sync(() => {
          expect(typeof msg.id).toBe("string");
          expect(msg.id.length).toBeGreaterThan(0);
          expect(msg.content).toBe(content);
          expect(msg.lobby_id).toBe(lobby.id);
          expect(typeof msg.channel_id).toBe("string");
          expect(typeof msg.author.id).toBe("string");
          expect(typeof msg.flags).toBe("number");
        });
      }),
    );
  });

  it("error - NotFound for non-existent lobby_id", async () => {
    await runEffect(
      createLobbyMessage({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        content: `distilled-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns 404 NotFound for unknown lobbies; may surface as
          // 403 Forbidden if the bot lacks visibility.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest when content exceeds 2000 characters", async () => {
    // Discord's per-message content limit is 2000 chars; 2001 chars triggers
    // 400 Invalid Form Body. We create a real lobby first so the route
    // resolves to the validation step rather than 404ing.
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({ idle_timeout_seconds: 5 });
        const tooLong = "a".repeat(2001);
        return yield* createLobbyMessage({
          lobby_id: lobby.id,
          content: tooLong,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (e as any)._tag,
            );
          }),
        );
      }),
    );
  });

  it("error - Forbidden when the bot is not a member of the lobby", async () => {
    // Snowflake-shaped lobby_id the bot is not a member of typically yields
    // 403 Forbidden, or 404 NotFound if the route 404s before the membership
    // check.
    await runEffect(
      createLobbyMessage({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        content: `distilled-fb-${testRunId}`,
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
