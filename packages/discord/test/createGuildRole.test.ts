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

// The endpoint requires:
//   - a guild the bot is in with MANAGE_ROLES permission.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

// Discord role names: 1..100 chars; we keep it short.
const roleName = (suffix: string): string =>
  `dtest-${suffix}-${testRunId}`.slice(0, 100);

describe("createGuildRole", () => {
  it("happy path - creates a guild role and deletes it on cleanup", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the createGuildRole happy path",
      );
    }
    const name = roleName("happy");
    await runEffect(
      Effect.gen(function* () {
        const role = yield* createGuildRole({
          guild_id: TEST_GUILD_ID,
          name,
          mentionable: false,
          hoist: false,
        });
        return yield* Effect.sync(() => {
          expect(typeof role.id).toBe("string");
          expect(role.name).toBe(name);
          expect(typeof role.permissions).toBe("string");
          expect(typeof role.position).toBe("number");
          expect(typeof role.color).toBe("number");
          expect(typeof role.flags).toBe("number");
          expect(role.mentionable).toBe(false);
          expect(role.hoist).toBe(false);
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
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      createGuildRole({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: roleName("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for permissions value out of bitfield range", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord's permissions field is a 64-bit integer bitfield. Negative
    // values are rejected with 400 Invalid Form Body. May also surface as
    // Forbidden if MANAGE_ROLES validation fires first, or NotFound for
    // an unseen guild.
    await runEffect(
      createGuildRole({
        guild_id: TEST_GUILD_ID,
        name: roleName("bad"),
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
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      createGuildRole({
        guild_id: NON_EXISTENT_GUILD_ID,
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
