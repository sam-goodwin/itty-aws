import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getMyUser } from "../src/operations/getMyUser.ts";
import { getUser } from "../src/operations/getUser.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /users/{user_id} fetches any user visible to the bot. The happy path
// resolves the bot's own user id via /users/@me, which is always reachable
// with a Bot token, then fetches the same user via /users/{user_id}.

// Snowflake-shaped ids unlikely to resolve to any real user.
const NON_EXISTENT_USER_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_USER_ID = "100000000000000001";

describe("getUser", () => {
  it(
    "happy path - fetches a user by id",
    async () => {
      const me = await runEffect(getMyUser({}));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const myId = (me as any).id as string;
      expect(typeof myId).toBe("string");

      const result = await runEffect(getUser({ user_id: myId }));
      expect(result.id).toBe(myId);
      expect(typeof result.username).toBe("string");
      expect(typeof result.discriminator).toBe("string");
      expect(typeof result.public_flags).toBe("number");
      expect(typeof result.flags).toBe("number");
      expect(result.avatar === null || typeof result.avatar === "string").toBe(
        true,
      );
      expect(
        result.global_name === null || typeof result.global_name === "string",
      ).toBe(true);
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent user id", async () => {
    await runEffect(
      getUser({ user_id: NON_EXISTENT_USER_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing user as NotFound. Some malformed or
          // out-of-range snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a user the bot cannot access", async () => {
    await runEffect(
      getUser({ user_id: INACCESSIBLE_USER_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A user id the bot cannot resolve typically surfaces as Forbidden,
          // but Discord often returns NotFound to avoid leaking existence.
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
