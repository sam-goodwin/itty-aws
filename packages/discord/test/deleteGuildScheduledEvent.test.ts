import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteGuildScheduledEvent } from "../src/operations/deleteGuildScheduledEvent.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// createGuildScheduledEvent has a codegen gap — none of the required body
// fields (name, scheduled_start_time, entity_type, privacy_level, ...) are
// exposed on the SDK input. The happy path therefore requires a pre-existing
// throwaway scheduled event whose id is provided via env.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_GUILD_SCHEDULED_EVENT_ID =
  process.env.DISCORD_TEST_GUILD_SCHEDULED_EVENT_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_GUILD_SCHEDULED_EVENT_ID = "100000000000000001";

describe("deleteGuildScheduledEvent", () => {
  it(
    "happy path - deletes a pre-existing throwaway scheduled event",
    async () => {
      if (!TEST_GUILD_ID || !TEST_GUILD_SCHEDULED_EVENT_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_GUILD_SCHEDULED_EVENT_ID env vars are required for the deleteGuildScheduledEvent happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      const result = await runEffect(
        deleteGuildScheduledEvent({
          guild_id: TEST_GUILD_ID,
          guild_scheduled_event_id: TEST_GUILD_SCHEDULED_EVENT_ID,
        }),
      );
      // 204 No Content; output schema is Void.
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("error - NotFound for non-existent guild_scheduled_event_id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped guild_scheduled_event_id that does not exist on the
    // guild yields 404 NotFound. Discord may also surface 403 Forbidden
    // depending on which check fires first.
    await runEffect(
      deleteGuildScheduledEvent({
        guild_id: TEST_GUILD_ID,
        guild_scheduled_event_id: NON_EXISTENT_GUILD_SCHEDULED_EVENT_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for a guild_id the bot is not in", async () => {
    // A guild_id the bot is not a member of typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      deleteGuildScheduledEvent({
        guild_id: NON_EXISTENT_GUILD_ID,
        guild_scheduled_event_id: NON_EXISTENT_GUILD_SCHEDULED_EVENT_ID,
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
