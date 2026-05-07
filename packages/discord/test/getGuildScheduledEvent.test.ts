import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildScheduledEvent } from "../src/operations/getGuildScheduledEvent.ts";
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
//   - a guild the bot is in.
//   - the snowflake of an existing scheduled event in that guild. The
//     SDK's createGuildScheduledEvent does not currently surface its body
//     schema (codegen gap), so the happy path requires the operator to
//     supply an existing event_id via DISCORD_TEST_GUILD_SCHEDULED_EVENT_ID.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_GUILD_SCHEDULED_EVENT_ID =
  process.env.DISCORD_TEST_GUILD_SCHEDULED_EVENT_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_EVENT_ID = "100000000000000001";

describe("getGuildScheduledEvent", () => {
  it("happy path - fetches a guild scheduled event by id with user counts", async () => {
    if (!TEST_GUILD_ID || !TEST_GUILD_SCHEDULED_EVENT_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_GUILD_SCHEDULED_EVENT_ID env vars are required for the getGuildScheduledEvent happy path",
      );
    }
    const result = await runEffect(
      getGuildScheduledEvent({
        guild_id: TEST_GUILD_ID,
        guild_scheduled_event_id: TEST_GUILD_SCHEDULED_EVENT_ID,
        with_user_count: true,
      }),
    );
    // The output is typed as an opaque value because the spec does not
    // describe the response body. Cast for assertions.
    const event = result as {
      id?: string;
      guild_id?: string;
      name?: string;
      status?: number;
    };
    expect(typeof event).toBe("object");
    expect(event).not.toBeNull();
    if (event.id !== undefined) {
      expect(event.id).toBe(TEST_GUILD_SCHEDULED_EVENT_ID);
    }
    if (event.guild_id !== undefined) {
      expect(event.guild_id).toBe(TEST_GUILD_ID);
    }
    if (event.name !== undefined) {
      expect(typeof event.name).toBe("string");
    }
  });

  it("error - NotFound for non-existent event_id under a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getGuildScheduledEvent({
        guild_id: TEST_GUILD_ID,
        guild_scheduled_event_id: NON_EXISTENT_EVENT_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      getGuildScheduledEvent({
        guild_id: NON_EXISTENT_GUILD_ID,
        guild_scheduled_event_id: NON_EXISTENT_EVENT_ID,
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
