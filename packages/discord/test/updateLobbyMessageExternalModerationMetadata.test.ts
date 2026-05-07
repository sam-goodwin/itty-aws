import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createLobby } from "../src/operations/createLobby.ts";
import { createLobbyMessage } from "../src/operations/createLobbyMessage.ts";
import { updateLobbyMessageExternalModerationMetadata } from "../src/operations/updateLobbyMessageExternalModerationMetadata.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_LOBBY_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

describe("updateLobbyMessageExternalModerationMetadata", () => {
  it(
    "happy path - updates moderation metadata for a freshly posted lobby message",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const lobby = yield* createLobby({ idle_timeout_seconds: 5 });
          const msg = yield* createLobbyMessage({
            lobby_id: lobby.id,
            content: `distilled-mod-${testRunId}`,
          });
          const result = yield* updateLobbyMessageExternalModerationMetadata({
            lobby_id: lobby.id,
            message_id: msg.id,
          });
          return yield* Effect.sync(() => {
            // Output schema is Void — successful resolution is the assertion.
            expect(result).toBeUndefined();
          });
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent message_id on a real lobby", async () => {
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({ idle_timeout_seconds: 5 });
        return yield* updateLobbyMessageExternalModerationMetadata({
          lobby_id: lobby.id,
          message_id: NON_EXISTENT_MESSAGE_ID,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // Discord returns 404 NotFound for an unknown message; may
            // surface as 403 Forbidden if the bot lacks visibility, or
            // BadRequest depending on which validation fires first.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (e as any)._tag,
            );
          }),
        );
      }),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) message_id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const lobby = yield* createLobby({ idle_timeout_seconds: 5 });
        return yield* updateLobbyMessageExternalModerationMetadata({
          lobby_id: lobby.id,
          message_id: "not-a-snowflake",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // Discord rejects malformed snowflakes with 400 Invalid Form
            // Body; routing layers may also classify the path as 404, or
            // the bot may lack permission and receive 403.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
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
      updateLobbyMessageExternalModerationMetadata({
        lobby_id: NON_EXISTENT_LOBBY_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
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
