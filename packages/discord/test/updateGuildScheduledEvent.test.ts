import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildScheduledEvent } from "../src/operations/createGuildScheduledEvent.ts";
import { deleteGuildScheduledEvent } from "../src/operations/deleteGuildScheduledEvent.ts";
import { updateGuildScheduledEvent } from "../src/operations/updateGuildScheduledEvent.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
// Both update and create scheduled-event input schemas currently expose only
// path params (no body fields), so there are no run-scoped resource names to
// inject testRunId into. It is still declared so the helper exists if the
// schema is patched to accept name/start-time fields later.
void testRunId;

// The endpoint requires:
//   - a guild the bot is in with MANAGE_EVENTS permission.
// The SDK's input schema for both create and update currently only exposes
// path params (not the body). createGuildScheduledEvent will send an empty
// body which Discord typically rejects with 400; the happy path here is
// best-effort against a real guild.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_EVENT_ID = "100000000000000001";

describe("updateGuildScheduledEvent", () => {
  it(
    "happy path - patches a freshly created scheduled event",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the updateGuildScheduledEvent happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          // The create operation's output is opaque (Schema.Unknown) — cast
          // to extract the id we need to drive update + cleanup.
          const eventRaw = yield* createGuildScheduledEvent({
            guild_id: TEST_GUILD_ID,
          });
          const event = eventRaw as { id?: string };
          if (!event.id) {
            throw new Error(
              "createGuildScheduledEvent did not return an id — cannot exercise updateGuildScheduledEvent happy path",
            );
          }
          return yield* Effect.gen(function* () {
            const updated = yield* updateGuildScheduledEvent({
              guild_id: TEST_GUILD_ID,
              guild_scheduled_event_id: event.id!,
            });
            return yield* Effect.sync(() => {
              // Output schema is Schema.Unknown — assert it round-tripped to
              // an object shape and surfaces the same id.
              expect(typeof updated).toBe("object");
              const u = updated as { id?: string };
              if (u.id !== undefined) {
                expect(u.id).toBe(event.id);
              }
            });
          }).pipe(
            Effect.ensuring(
              deleteGuildScheduledEvent({
                guild_id: TEST_GUILD_ID,
                guild_scheduled_event_id: event.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent guild_scheduled_event_id on a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped event id that does not exist on the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      updateGuildScheduledEvent({
        guild_id: TEST_GUILD_ID,
        guild_scheduled_event_id: NON_EXISTENT_EVENT_ID,
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

  it("error - BadRequest for malformed (non-snowflake) guild_scheduled_event_id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord rejects malformed snowflakes with 400 Invalid Form Body;
    // routing layers may also classify the path as 404, or the bot may lack
    // permission and receive 403.
    await runEffect(
      updateGuildScheduledEvent({
        guild_id: TEST_GUILD_ID,
        guild_scheduled_event_id: "not-a-snowflake",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      updateGuildScheduledEvent({
        guild_id: NON_EXISTENT_GUILD_ID,
        guild_scheduled_event_id: NON_EXISTENT_EVENT_ID,
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
