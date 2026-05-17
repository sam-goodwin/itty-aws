import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildRole } from "../src/operations/createGuildRole.ts";
import { deleteGuildRole } from "../src/operations/deleteGuildRole.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a guild where the bot has Manage Roles.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_ROLE_ID = "100000000000000001";

// Role names must be 1..100 chars.
const roleName = (suffix: string): string =>
  `dt-delrole-${suffix}-${testRunId}`.slice(0, 100);

describe("deleteGuildRole", () => {
  it(
    "happy path - creates a role then deletes it",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the deleteGuildRole happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const role = yield* createGuildRole({
            guild_id: TEST_GUILD_ID,
            name: roleName("happy"),
            // No permissions, no hoist, not mentionable.
            permissions: 0,
            hoist: false,
            mentionable: false,
          });
          const result = yield* deleteGuildRole({
            guild_id: TEST_GUILD_ID,
            role_id: role.id,
          }).pipe(
            // If the delete fails, attempt cleanup explicitly.
            Effect.ensuring(
              deleteGuildRole({
                guild_id: TEST_GUILD_ID,
                role_id: role.id,
              }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            // 204 No Content; output schema is Void.
            expect(result).toBeUndefined();
          });
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent role_id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped role_id that is not a role of the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      deleteGuildRole({
        guild_id: TEST_GUILD_ID,
        role_id: NON_EXISTENT_ROLE_ID,
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
      deleteGuildRole({
        guild_id: NON_EXISTENT_GUILD_ID,
        role_id: NON_EXISTENT_ROLE_ID,
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
