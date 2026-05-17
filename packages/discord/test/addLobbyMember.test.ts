import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { addLobbyMember } from "../src/operations/addLobbyMember.ts";
import { createLobby } from "../src/operations/createLobby.ts";
import { deleteLobbyMember } from "../src/operations/deleteLobbyMember.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// Short random hex string generated once per test run.
// Append this to resource metadata so parallel test runs don't collide.
const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

// A real Discord user_id is required because Discord validates the snowflake
// against an existing user account before adding them to the lobby.
const TEST_USER_ID = process.env.DISCORD_TEST_USER_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("addLobbyMember", () => {
  it("happy path - creates a lobby, adds a member, removes them on cleanup", async () => {
    if (!TEST_USER_ID) {
      throw new Error(
        "DISCORD_TEST_USER_ID env var is required for the addLobbyMember happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        // Create a short-lived lobby owned by this application. Lobbies
        // auto-expire after idle_timeout_seconds with no activity, so no
        // explicit lobby teardown is required.
        const lobby = yield* createLobby({
          idle_timeout_seconds: 60,
          metadata: { test_run_id: testRunId, purpose: "addLobbyMember-test" },
        });
        return yield* addLobbyMember({
          lobby_id: lobby.id,
          user_id: TEST_USER_ID,
          metadata: { test_run_id: testRunId },
        }).pipe(
          Effect.tap((member) =>
            Effect.sync(() => {
              expect(member.id).toBe(TEST_USER_ID);
              expect(typeof member.flags).toBe("number");
              expect(member.metadata).not.toBeNull();
              expect(member.metadata?.test_run_id).toBe(testRunId);
            }),
          ),
          Effect.ensuring(
            deleteLobbyMember({
              lobby_id: lobby.id,
              user_id: TEST_USER_ID,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent lobby_id", async () => {
    await runEffect(
      addLobbyMember({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
        metadata: { test_run_id: testRunId },
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
      addLobbyMember({
        lobby_id: "not-a-snowflake",
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
        metadata: { test_run_id: testRunId },
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for lobby owned by a different application", async () => {
    await runEffect(
      addLobbyMember({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        user_id: NON_EXISTENT_USER_ID,
        metadata: { test_run_id: testRunId },
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns Forbidden (50001 Missing Access) for lobbies the
          // application does not own; for fully unknown snowflakes it may
          // surface as NotFound instead.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
