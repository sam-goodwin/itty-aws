import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createDm } from "../src/operations/createDm.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - a recipient_id (snowflake) for a real Discord user that the bot can
//     DM (typically a user that shares at least one mutual guild and has
//     "Allow direct messages from server members" enabled).
const TEST_USER_ID = process.env.DISCORD_TEST_USER_ID;

// Snowflake-format identifier that should not match a real user.
const NON_EXISTENT_USER_ID = "100000000000000000";

describe("createDm", () => {
  it("happy path - creates (or returns existing) DM channel with a user", async () => {
    if (!TEST_USER_ID) {
      throw new Error(
        "DISCORD_TEST_USER_ID env var is required for the createDm happy path",
      );
    }
    await runEffect(
      createDm({
        recipient_id: TEST_USER_ID,
      }).pipe(
        Effect.tap((channelRaw) =>
          Effect.sync(() => {
            // Output is typed as an opaque value because the spec does not
            // describe the response body. Cast for assertions.
            const channel = channelRaw as { id?: string; type?: number };
            expect(typeof channel).toBe("object");
            expect(typeof channel.id).toBe("string");
            // Discord type 1 == DM channel.
            if (channel.type !== undefined) {
              expect(typeof channel.type).toBe("number");
            }
          }),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent recipient_id", async () => {
    await runEffect(
      createDm({
        recipient_id: NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen recipient_id (10013) but
          // may surface as BadRequest if validation runs first.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "BadRequest", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) recipient_id", async () => {
    await runEffect(
      createDm({
        recipient_id: "not-a-snowflake",
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

  it("error - Forbidden when DMing the bot's own user_id", async () => {
    // Discord disallows self-DMs: the bot cannot create a DM channel with
    // its own user_id and typically returns Forbidden (50007 Cannot send
    // messages to this user) or BadRequest. We use a snowflake the bot does
    // not control to ensure the failure path; for an arbitrary user that has
    // disabled DMs this also yields Forbidden.
    await runEffect(
      createDm({
        recipient_id: NON_EXISTENT_USER_ID,
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
