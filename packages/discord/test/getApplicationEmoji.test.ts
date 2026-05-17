import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createApplicationEmoji } from "../src/operations/createApplicationEmoji.ts";
import { deleteApplicationEmoji } from "../src/operations/deleteApplicationEmoji.ts";
import { getApplicationEmoji } from "../src/operations/getApplicationEmoji.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Smallest valid 1x1 transparent PNG, encoded as a data URI. Discord accepts
// data URIs of the form "data:image/{png,jpeg,gif};base64,...".
const TINY_PNG_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=";

// The endpoint requires:
//   - the bot's application_id (snowflake) — the bot's token must own it.
//   - the emoji_id (snowflake) of an emoji owned by that application.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_EMOJI_ID = "100000000000000001";

// Discord requires emoji names to match ^[a-zA-Z0-9_]{2,32}$.
const emojiName = (suffix: string): string => {
  const raw = `dt_${suffix}_${testRunId}`;
  return raw.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 32);
};

describe("getApplicationEmoji", () => {
  it("happy path - fetches a freshly created application emoji by id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the getApplicationEmoji happy path",
      );
    }
    const name = emojiName("get");
    await runEffect(
      Effect.gen(function* () {
        const created = yield* createApplicationEmoji({
          application_id: TEST_APPLICATION_ID,
          name,
          image: TINY_PNG_DATA_URI,
        });
        return yield* Effect.gen(function* () {
          const fetched = yield* getApplicationEmoji({
            application_id: TEST_APPLICATION_ID,
            emoji_id: created.id,
          });
          expect(fetched.id).toBe(created.id);
          expect(fetched.name).toBe(name);
          expect(Array.isArray(fetched.roles)).toBe(true);
          expect(typeof fetched.require_colons).toBe("boolean");
          expect(typeof fetched.managed).toBe("boolean");
          expect(typeof fetched.animated).toBe("boolean");
          expect(typeof fetched.available).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            deleteApplicationEmoji({
              application_id: TEST_APPLICATION_ID,
              emoji_id: created.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent emoji_id under the bot's application", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getApplicationEmoji({
        application_id: TEST_APPLICATION_ID,
        emoji_id: NON_EXISTENT_EMOJI_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for application_id the bot does not own", async () => {
    // Looking up an emoji under an application_id the bot's token does not
    // own typically yields 403 Forbidden; may also surface as 404 NotFound
    // when the route resolves the application before the permission check.
    await runEffect(
      getApplicationEmoji({
        application_id: NON_EXISTENT_APPLICATION_ID,
        emoji_id: NON_EXISTENT_EMOJI_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
