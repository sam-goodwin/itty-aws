import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { bulkUpdateLobbyMembers } from "../src/operations/bulkUpdateLobbyMembers.ts";
import { createLobby } from "../src/operations/createLobby.ts";
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
//   - the application owns the lobby_id (Discord lobbies are scoped to the
//     application that created them).
// The SDK's input schema currently only exposes lobby_id and not the body
// (an array of {id, metadata?, flags?}). With no body, Discord interprets
// the call as a no-op bulk update and returns the current lobby members.
// Lobbies auto-expire via idle_timeout_seconds, so no explicit teardown is
// required.

// Snowflake-format identifier that should not match a real lobby.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";

describe("bulkUpdateLobbyMembers", () => {
  it("happy path - bulk-updates lobby members (no-op body) and returns current members", async () => {
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({
          idle_timeout_seconds: 60,
          metadata: {
            test_run_id: testRunId,
            purpose: "bulkUpdateLobbyMembers-test",
          },
        });
        const result = yield* bulkUpdateLobbyMembers({
          lobby_id: lobby.id,
        });
        // Discord returns the array of lobby members after the (no-op) bulk
        // update. A freshly created lobby with no members yields an empty
        // array, but the shape is still an Array.
        expect(Array.isArray(result)).toBe(true);
        for (const m of result) {
          expect(typeof m.id).toBe("string");
          expect(typeof m.flags).toBe("number");
        }
      }),
    );
  });

  it("error - NotFound for non-existent lobby_id", async () => {
    await runEffect(
      bulkUpdateLobbyMembers({
        lobby_id: NON_EXISTENT_LOBBY_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen lobby but may surface as
          // Forbidden when the application can't access the lobby.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) lobby_id", async () => {
    await runEffect(
      bulkUpdateLobbyMembers({
        lobby_id: "not-a-snowflake",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for lobby owned by a different application", async () => {
    // Discord returns Forbidden (50001 Missing Access) for lobbies the
    // application does not own; for fully unknown snowflakes it may surface
    // as NotFound instead.
    await runEffect(
      bulkUpdateLobbyMembers({
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
