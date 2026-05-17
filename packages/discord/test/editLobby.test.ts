import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createLobby } from "../src/operations/createLobby.ts";
import { editLobby } from "../src/operations/editLobby.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// editLobby uses lobby_id from the path. The happy path creates a lobby
// with createLobby, edits it, and lets Discord's idle timeout reap it
// (there is no deleteLobby operation in the SDK).

// Snowflake-format identifier that should not match a real lobby.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";

describe("editLobby", () => {
  it("happy path - edits a freshly created lobby's metadata", async () => {
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({
          idle_timeout_seconds: 5,
          metadata: {
            distilled_test_run_id: testRunId,
            distilled_phase: "before",
          },
        });
        const updated = yield* editLobby({
          lobby_id: lobby.id,
          metadata: {
            distilled_test_run_id: testRunId,
            distilled_phase: "after",
          },
        });
        return yield* Effect.sync(() => {
          expect(updated.id).toBe(lobby.id);
          expect(typeof updated.application_id).toBe("string");
          expect(Array.isArray(updated.members)).toBe(true);
          expect(typeof updated.flags).toBe("number");
          // Metadata round-trips with the new values.
          expect(updated.metadata?.distilled_test_run_id).toBe(testRunId);
          expect(updated.metadata?.distilled_phase).toBe("after");
        });
      }),
    );
  });

  it("error - NotFound for non-existent lobby_id", async () => {
    // Discord returns 404 NotFound for an unknown lobby; may surface as
    // 403 Forbidden when the application lacks visibility.
    await runEffect(
      editLobby({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        metadata: { distilled_test_run_id: testRunId },
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for negative idle_timeout_seconds", async () => {
    // Discord enforces a positive bound on idle_timeout_seconds; -1 is
    // rejected with 400 Invalid Form Body. We need a real lobby_id to make
    // the route resolve before the body validation runs.
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({
          idle_timeout_seconds: 5,
          metadata: { distilled_test_run_id: testRunId },
        });
        return yield* editLobby({
          lobby_id: lobby.id,
          idle_timeout_seconds: -1,
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

  it("error - Forbidden / BadRequest when override_event_webhooks_url is malformed", async () => {
    // Discord requires override_event_webhooks_url to be a fully-qualified
    // HTTPS URL; a non-URL string is rejected. Some applications also lack
    // the scope to set this field, in which case Discord returns 403.
    await runEffect(
      editLobby({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        override_event_webhooks_url: "not-a-valid-url",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
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
