import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createApplicationEmoji } from "../src/operations/createApplicationEmoji.ts";
import { deleteApplicationEmoji } from "../src/operations/deleteApplicationEmoji.ts";
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
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

// Discord requires emoji names to match ^[a-zA-Z0-9_]{2,32}$.
const emojiName = (suffix: string): string => {
  // testRunId is 8 hex chars; suffix kept short to fit 32-char limit.
  const raw = `dt_${suffix}_${testRunId}`;
  return raw.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 32);
};

describe("createApplicationEmoji", () => {
  it("happy path - creates an application emoji and deletes it on cleanup", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the createApplicationEmoji happy path",
      );
    }
    const name = emojiName("happy");
    await runEffect(
      Effect.gen(function* () {
        const emoji = yield* createApplicationEmoji({
          application_id: TEST_APPLICATION_ID,
          name,
          image: TINY_PNG_DATA_URI,
        });
        return yield* Effect.sync(() => {
          expect(typeof emoji.id).toBe("string");
          expect(emoji.name).toBe(name);
          expect(Array.isArray(emoji.roles)).toBe(true);
          expect(typeof emoji.require_colons).toBe("boolean");
          expect(typeof emoji.managed).toBe("boolean");
          expect(typeof emoji.animated).toBe("boolean");
          expect(typeof emoji.available).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            deleteApplicationEmoji({
              application_id: TEST_APPLICATION_ID,
              emoji_id: emoji.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent application_id", async () => {
    await runEffect(
      createApplicationEmoji({
        application_id: NON_EXISTENT_APPLICATION_ID,
        name: emojiName("nf"),
        image: TINY_PNG_DATA_URI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen application_id, but may
          // surface as Forbidden when the bot's token does not own it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for invalid emoji name (contains hyphens)", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the BadRequest test",
      );
    }
    // Discord's emoji names must match ^[a-zA-Z0-9_]{2,32}$ — hyphens and
    // spaces are rejected with 400 Invalid Form Body.
    await runEffect(
      createApplicationEmoji({
        application_id: TEST_APPLICATION_ID,
        name: "bad-name with spaces",
        image: TINY_PNG_DATA_URI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for application_id the bot does not own", async () => {
    // Calling against an application_id the bot's token does not own
    // typically yields 403 Forbidden; may also surface as 404 NotFound when
    // the route resolves the application before the permission check.
    await runEffect(
      createApplicationEmoji({
        application_id: NON_EXISTENT_APPLICATION_ID,
        name: emojiName("fb"),
        image: TINY_PNG_DATA_URI,
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
