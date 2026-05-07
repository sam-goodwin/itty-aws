import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
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

// createLobby has no path parameters and no required body fields. The bot's
// token determines the application context. Lobbies are auto-cleaned by
// Discord after idle_timeout_seconds, so the happy path uses a small idle
// timeout for ephemerality. There is no deleteLobby operation in the SDK to
// run explicit cleanup against.

// Snowflake-format identifier that should not match a real user.
const NON_EXISTENT_USER_ID = "100000000000000000";

describe("createLobby", () => {
  it("happy path - creates an empty lobby with a short idle timeout", async () => {
    void testRunId;
    await runEffect(
      createLobby({
        idle_timeout_seconds: 5,
        metadata: {
          distilled_test_run_id: testRunId,
        },
      }).pipe(
        Effect.tap((lobby) =>
          Effect.sync(() => {
            expect(typeof lobby.id).toBe("string");
            expect(lobby.id.length).toBeGreaterThan(0);
            expect(typeof lobby.application_id).toBe("string");
            expect(typeof lobby.flags).toBe("number");
            expect(Array.isArray(lobby.members)).toBe(true);
            // Metadata round-trips on the response.
            expect(lobby.metadata?.distilled_test_run_id).toBe(testRunId);
          }),
        ),
      ),
    );
  });

  it("error - BadRequest for negative idle_timeout_seconds", async () => {
    // Discord enforces a positive bound on idle_timeout_seconds; -1 is
    // rejected with 400 Invalid Form Body.
    await runEffect(
      createLobby({
        idle_timeout_seconds: -1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - NotFound for non-existent member user_id", async () => {
    // Adding a member whose user_id does not resolve typically yields 404
    // NotFound (error code 10013 — user does not exist), but Discord may also classify this as
    // 400 BadRequest (validation) or 403 Forbidden.
    await runEffect(
      createLobby({
        members: [
          {
            id: NON_EXISTENT_USER_ID,
          },
        ],
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "BadRequest", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden / BadRequest when override_event_webhooks_url is malformed", async () => {
    // Discord requires override_event_webhooks_url to be a fully-qualified
    // HTTPS URL. A non-URL string is rejected; some applications also lack
    // the scope to set this field, in which case Discord returns 403.
    await runEffect(
      createLobby({
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
