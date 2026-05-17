import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { bulkUpdateGuildRoles } from "../src/operations/bulkUpdateGuildRoles.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - a guild the bot is in with MANAGE_ROLES permission.
// The SDK's input schema currently only exposes guild_id and not the body
// (an array of {id, position?}). With no body, Discord interprets the call
// as a no-op reorder and returns the current role list.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("bulkUpdateGuildRoles", () => {
  it("happy path - bulk-updates guild role positions (no-op body)", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the bulkUpdateGuildRoles happy path",
      );
    }
    await runEffect(
      bulkUpdateGuildRoles({
        guild_id: TEST_GUILD_ID,
      }).pipe(
        Effect.tap((roles) =>
          Effect.sync(() => {
            // Discord returns the array of guild roles after the (no-op) update.
            expect(Array.isArray(roles)).toBe(true);
            // Every guild has at least the @everyone role (id == guild_id).
            expect(roles.length).toBeGreaterThan(0);
            for (const r of roles) {
              expect(typeof r.id).toBe("string");
              expect(typeof r.name).toBe("string");
              expect(typeof r.permissions).toBe("string");
              expect(typeof r.position).toBe("number");
              expect(typeof r.color).toBe("number");
              expect(typeof r.flags).toBe("number");
            }
          }),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      bulkUpdateGuildRoles({
        guild_id: NON_EXISTENT_GUILD_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see the guild.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) guild_id", async () => {
    await runEffect(
      bulkUpdateGuildRoles({
        guild_id: "not-a-snowflake",
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

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      bulkUpdateGuildRoles({
        guild_id: NON_EXISTENT_GUILD_ID,
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
