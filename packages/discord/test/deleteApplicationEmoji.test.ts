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

// Smallest valid 1x1 transparent PNG, encoded as a data URI.
const TINY_PNG_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=";

// Requires the bot's application_id.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_EMOJI_ID = "100000000000000001";

// Discord requires emoji names to match ^[a-zA-Z0-9_]{2,32}$.
const emojiName = (suffix: string): string => {
  const raw = `dt_${suffix}_${testRunId}`;
  return raw.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 32);
};

describe("deleteApplicationEmoji", () => {
  it("happy path - deletes a freshly created application emoji", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the deleteApplicationEmoji happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        const emoji = yield* createApplicationEmoji({
          application_id: TEST_APPLICATION_ID,
          name: emojiName("del"),
          image: TINY_PNG_DATA_URI,
        });
        return yield* deleteApplicationEmoji({
          application_id: TEST_APPLICATION_ID,
          emoji_id: emoji.id,
        }).pipe(
          Effect.tap(() =>
            // 204 No Content; output schema is Void.
            Effect.sync(() => {
              expect(true).toBe(true);
            }),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent emoji_id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    // Discord returns 404 NotFound for emoji_ids that do not exist on the
    // application.
    await runEffect(
      deleteApplicationEmoji({
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

  it("error - Forbidden when the bot does not own the application_id", async () => {
    // A snowflake-shaped application_id the bot's token does not own
    // typically yields 403 Forbidden, or 404 NotFound if the route 404s
    // before the ownership check.
    await runEffect(
      deleteApplicationEmoji({
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
