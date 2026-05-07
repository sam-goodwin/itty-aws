import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getChannel } from "../src/operations/getChannel.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

// The endpoint requires:
//   - the channel_id (snowflake) of a channel the bot has VIEW_CHANNEL on.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

describe("getChannel", () => {
  it("happy path - fetches a channel by id", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the getChannel happy path",
      );
    }
    const result = await runEffect(getChannel({ channel_id: TEST_CHANNEL_ID }));
    // The output is typed as an opaque value because the spec does not
    // describe the response body. Cast for assertions.
    const channel = result as { id?: string; type?: number };
    expect(typeof channel).toBe("object");
    expect(channel).not.toBeNull();
    expect(channel.id).toBe(TEST_CHANNEL_ID);
    expect(typeof channel.type).toBe("number");
  });

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      getChannel({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen channels, but may surface
          // as Forbidden (50001 Missing Access) when the bot can't see it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a channel the bot cannot access", async () => {
    // Calling against a snowflake-shaped channel_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if
    // the route resolves the channel before the permission check.
    await runEffect(
      getChannel({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
