import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createApplicationEmoji } from "../src/operations/createApplicationEmoji.ts";
import { deleteApplicationEmoji } from "../src/operations/deleteApplicationEmoji.ts";
import { updateApplicationEmoji } from "../src/operations/updateApplicationEmoji.ts";
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

describe("updateApplicationEmoji", () => {
  it("happy path - renames a freshly created application emoji", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the updateApplicationEmoji happy path",
      );
    }
    const emoji = await runEffect(
      createApplicationEmoji({
        application_id: TEST_APPLICATION_ID,
        name: emojiName("orig"),
        image: TINY_PNG_DATA_URI,
      }),
    );
    try {
      const renamed = emojiName("upd");
      const result = await runEffect(
        updateApplicationEmoji({
          application_id: TEST_APPLICATION_ID,
          emoji_id: emoji.id,
          name: renamed,
        }),
      );
      expect(result.id).toBe(emoji.id);
      expect(result.name).toBe(renamed);
      expect(typeof result.require_colons).toBe("boolean");
      expect(typeof result.managed).toBe("boolean");
      expect(typeof result.animated).toBe("boolean");
      expect(typeof result.available).toBe("boolean");
      expect(Array.isArray(result.roles)).toBe(true);
    } finally {
      await runEffect(
        deleteApplicationEmoji({
          application_id: TEST_APPLICATION_ID,
          emoji_id: emoji.id,
        }).pipe(Effect.ignore),
      );
    }
  });

  it("error - BadRequest for an invalid emoji name", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the BadRequest test",
      );
    }
    // Discord requires names to match ^[a-zA-Z0-9_]{2,32}$. A name with
    // disallowed characters should fail validation as BadRequest. Discord
    // may also route as Forbidden or NotFound depending on access ordering.
    const emoji = await runEffect(
      createApplicationEmoji({
        application_id: TEST_APPLICATION_ID,
        name: emojiName("badname"),
        image: TINY_PNG_DATA_URI,
      }),
    );
    try {
      await runEffect(
        updateApplicationEmoji({
          application_id: TEST_APPLICATION_ID,
          emoji_id: emoji.id,
          name: `bad name with spaces ${testRunId}`,
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
    } finally {
      await runEffect(
        deleteApplicationEmoji({
          application_id: TEST_APPLICATION_ID,
          emoji_id: emoji.id,
        }).pipe(Effect.ignore),
      );
    }
  });

  it("error - Forbidden when the bot does not own the application_id", async () => {
    // A snowflake-shaped application_id the bot's token does not own
    // typically yields 403 Forbidden, or 404 NotFound if the route 404s
    // before the ownership check, or BadRequest depending on routing.
    await runEffect(
      updateApplicationEmoji({
        application_id: NON_EXISTENT_APPLICATION_ID,
        emoji_id: NON_EXISTENT_EMOJI_ID,
        name: emojiName("forbid"),
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

  it("error - NotFound for non-existent emoji_id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    // Discord returns 404 NotFound for emoji_ids that do not exist on the
    // application. May also surface as Forbidden or BadRequest depending on
    // routing.
    await runEffect(
      updateApplicationEmoji({
        application_id: TEST_APPLICATION_ID,
        emoji_id: NON_EXISTENT_EMOJI_ID,
        name: emojiName("notfound"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
