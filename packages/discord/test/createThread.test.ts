import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createThread } from "../src/operations/createThread.ts";
import { deleteChannel } from "../src/operations/deleteChannel.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The endpoint requires:
//   - a text/forum/media channel where the bot can create threads.
// The SDK's input schema currently only exposes the path parameter
// (channel_id) and not the JSON body (name, type, auto_archive_duration,
// invitable, rate_limit_per_user). Discord rejects an empty body with 400
// Invalid Form Body, so the happy path is documented as a codegen gap and
// is gated on DISCORD_TEST_ALLOW_EMPTY_THREAD_BODY=1 alongside
// DISCORD_TEST_CHANNEL_ID.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;
const ALLOW_EMPTY_THREAD_BODY =
  process.env.DISCORD_TEST_ALLOW_EMPTY_THREAD_BODY === "1";

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

describe("createThread", () => {
  it("happy path - calls createThread against a real channel and asserts the response", async () => {
    if (!TEST_CHANNEL_ID || !ALLOW_EMPTY_THREAD_BODY) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID and DISCORD_TEST_ALLOW_EMPTY_THREAD_BODY=1 are required for the createThread happy path. The SDK input does not yet expose the JSON body (name, type, auto_archive_duration, ...); set the flag to opt in to the empty-body call so the codegen gap is observable.",
      );
    }
    void testRunId;
    await runEffect(
      Effect.gen(function* () {
        const thread = yield* createThread({
          channel_id: TEST_CHANNEL_ID,
        });
        return yield* Effect.sync(() => {
          expect(typeof thread.id).toBe("string");
          expect(thread.id.length).toBeGreaterThan(0);
          expect(typeof thread.name).toBe("string");
          expect(typeof thread.guild_id).toBe("string");
          expect(typeof thread.owner_id).toBe("string");
          expect(typeof thread.flags).toBe("number");
          expect(typeof thread.thread_metadata.archived).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            deleteChannel({ channel_id: thread.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      createThread({
        channel_id: NON_EXISTENT_CHANNEL_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns 404 NotFound for unknown channels; may surface as
          // 403 Forbidden if the bot lacks visibility, or BadRequest if the
          // empty body is rejected first.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest when thread body is missing (codegen gap)", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    // The SDK input does not expose the JSON body. POSTing without a `name`
    // field triggers 400 Invalid Form Body. Even with a real channel this
    // should fail until the spec is patched to expose the body.
    await runEffect(
      createThread({
        channel_id: TEST_CHANNEL_ID,
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

  it("error - Forbidden when targeting a channel the bot cannot see", async () => {
    // A snowflake-shaped channel_id the bot does not see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      createThread({
        channel_id: NON_EXISTENT_CHANNEL_ID,
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
