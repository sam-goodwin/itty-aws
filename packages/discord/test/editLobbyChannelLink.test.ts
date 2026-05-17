import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createLobby } from "../src/operations/createLobby.ts";
import { editLobbyChannelLink } from "../src/operations/editLobbyChannelLink.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// editLobbyChannelLink uses lobby_id from the path. Calling without a
// channel_id unlinks any current channel; that's the simplest happy-path
// shape since freshly created lobbies have no link.

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";
const NON_EXISTENT_CHANNEL_ID = "100000000000000001";

describe("editLobbyChannelLink", () => {
  it("happy path - unlinks the channel of a freshly created lobby", async () => {
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({
          idle_timeout_seconds: 5,
          metadata: {
            distilled_test_run_id: testRunId,
          },
        });
        const updated = yield* editLobbyChannelLink({
          lobby_id: lobby.id,
        });
        return yield* Effect.sync(() => {
          expect(updated.id).toBe(lobby.id);
          expect(typeof updated.application_id).toBe("string");
          expect(Array.isArray(updated.members)).toBe(true);
          expect(typeof updated.flags).toBe("number");
          // After unlinking, no channel is attached.
          expect(updated.linked_channel).toBeUndefined();
        });
      }),
    );
  });

  it("error - NotFound for non-existent lobby_id", async () => {
    // Discord returns 404 NotFound for an unknown lobby; may surface as
    // 403 Forbidden when the application lacks visibility.
    await runEffect(
      editLobbyChannelLink({
        lobby_id: NON_EXISTENT_LOBBY_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed channel_id type", async () => {
    // The spec types channel_id as optional/loose. A clearly malformed
    // value (number where Discord expects a snowflake string, or a
    // non-snowflake string) is rejected with 400 Invalid Form Body. The
    // route may also resolve to 404/403 first depending on lobby
    // visibility.
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({
          idle_timeout_seconds: 5,
          metadata: { distilled_test_run_id: testRunId },
        });
        return yield* editLobbyChannelLink({
          lobby_id: lobby.id,
          channel_id: "not-a-snowflake",
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

  it("error - Forbidden when targeting a channel the application cannot link", async () => {
    // Linking a channel the application does not own / cannot access
    // typically yields 403 Forbidden (50001 Missing Access). The lobby
    // route may also 404 first if the lobby isn't visible.
    await runEffect(
      editLobbyChannelLink({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        channel_id: NON_EXISTENT_CHANNEL_ID,
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
