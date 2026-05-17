import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createOrJoinLobby } from "../src/operations/createOrJoinLobby.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// createOrJoinLobby has no path parameters. The `secret` is a stable
// identifier per application — calling with the same secret joins the
// existing lobby, calling with a fresh secret creates a new one. Lobbies
// auto-clean via idle_timeout_seconds; there is no deleteLobby operation.

describe("createOrJoinLobby", () => {
  it("happy path - creates a lobby for a fresh secret and idempotently joins it", async () => {
    const secret = `distilled-secret-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const first = yield* createOrJoinLobby({
          secret,
          idle_timeout_seconds: 5,
          lobby_metadata: {
            distilled_test_run_id: testRunId,
          },
        });
        const second = yield* createOrJoinLobby({
          secret,
          idle_timeout_seconds: 5,
        });
        return yield* Effect.sync(() => {
          expect(typeof first.id).toBe("string");
          expect(first.id.length).toBeGreaterThan(0);
          expect(typeof first.application_id).toBe("string");
          expect(typeof first.flags).toBe("number");
          expect(first.metadata?.distilled_test_run_id).toBe(testRunId);
          // Same secret should resolve to the same lobby.
          expect(second.id).toBe(first.id);
        });
      }),
    );
  });

  it("error - BadRequest for negative idle_timeout_seconds", async () => {
    // Discord enforces a positive bound on idle_timeout_seconds; -1 is
    // rejected with 400 Invalid Form Body.
    await runEffect(
      createOrJoinLobby({
        secret: `distilled-bad-${testRunId}`,
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

  it("error - NotFound / BadRequest when override fields reference non-resolvable values", async () => {
    // Some optional fields require resolvable references (e.g. metadata
    // entries that name resources). Discord may return 404 NotFound or 400
    // BadRequest for unrecognized values.
    await runEffect(
      createOrJoinLobby({
        secret: `distilled-nf-${testRunId}`,
        // Empty string is not a valid metadata key; Discord rejects it.
        lobby_metadata: { "": "v" },
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

  it("error - Forbidden / BadRequest when secret is empty", async () => {
    // The secret is required for the create-or-join semantics. An empty
    // secret is rejected; some applications also lack the scope to call
    // this endpoint, in which case Discord returns 403.
    await runEffect(
      createOrJoinLobby({
        secret: "",
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
