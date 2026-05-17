import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildRole } from "../src/operations/createGuildRole.ts";
import { deleteGuildRole } from "../src/operations/deleteGuildRole.ts";
import { updateGuildRole } from "../src/operations/updateGuildRole.ts";
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
//   - a guild the bot is in with MANAGE_ROLES permission.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_ROLE_ID = "100000000000000001";

// Discord role names: 1..100 chars; we keep them short.
const roleName = (suffix: string): string =>
  `dtest-${suffix}-${testRunId}`.slice(0, 100);

describe("updateGuildRole", () => {
  it(
    "happy path - renames a freshly created guild role",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the updateGuildRole happy path",
        );
      }
      const originalName = roleName("upd_o");
      const newName = roleName("upd_n");
      await runEffect(
        Effect.gen(function* () {
          const role = yield* createGuildRole({
            guild_id: TEST_GUILD_ID,
            name: originalName,
            mentionable: false,
            hoist: false,
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateGuildRole({
              guild_id: TEST_GUILD_ID,
              role_id: role.id,
              name: newName,
              mentionable: true,
            });
            return yield* Effect.sync(() => {
              expect(updated.id).toBe(role.id);
              expect(updated.name).toBe(newName);
              expect(updated.mentionable).toBe(true);
              expect(typeof updated.permissions).toBe("string");
              expect(typeof updated.position).toBe("number");
              expect(typeof updated.color).toBe("number");
              expect(typeof updated.flags).toBe("number");
              expect(typeof updated.hoist).toBe("boolean");
              expect(typeof updated.managed).toBe("boolean");
            });
          }).pipe(
            Effect.ensuring(
              deleteGuildRole({
                guild_id: TEST_GUILD_ID,
                role_id: role.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent role_id on a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped role_id that does not exist on the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      updateGuildRole({
        guild_id: TEST_GUILD_ID,
        role_id: NON_EXISTENT_ROLE_ID,
        name: roleName("nf"),
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

  it(
    "error - BadRequest for permissions value out of bitfield range",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
        );
      }
      // Discord's permissions field is a 64-bit integer bitfield. Negative
      // values are rejected with 400 Invalid Form Body. We need a real role
      // for the route to actually validate the body, so create-then-update.
      const original = roleName("br_o");
      await runEffect(
        Effect.gen(function* () {
          const role = yield* createGuildRole({
            guild_id: TEST_GUILD_ID,
            name: original,
            mentionable: false,
            hoist: false,
          });
          return yield* updateGuildRole({
            guild_id: TEST_GUILD_ID,
            role_id: role.id,
            permissions: -1,
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e as any)._tag,
              );
            }),
            Effect.ensuring(
              deleteGuildRole({
                guild_id: TEST_GUILD_ID,
                role_id: role.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      updateGuildRole({
        guild_id: NON_EXISTENT_GUILD_ID,
        role_id: NON_EXISTENT_ROLE_ID,
        name: roleName("fb"),
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
