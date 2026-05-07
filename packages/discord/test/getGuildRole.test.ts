import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildRole } from "../src/operations/createGuildRole.ts";
import { deleteGuildRole } from "../src/operations/deleteGuildRole.ts";
import { getGuildRole } from "../src/operations/getGuildRole.ts";
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

const roleName = (suffix: string): string =>
  `distilled-${suffix}-${testRunId}`.slice(0, 100);

describe("getGuildRole", () => {
  it("happy path - fetches a freshly created guild role by id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the getGuildRole happy path",
      );
    }
    const name = roleName("get");
    await runEffect(
      Effect.gen(function* () {
        const created = yield* createGuildRole({
          guild_id: TEST_GUILD_ID,
          name,
          mentionable: false,
          hoist: false,
        });
        return yield* Effect.gen(function* () {
          const fetched = yield* getGuildRole({
            guild_id: TEST_GUILD_ID,
            role_id: created.id,
          });
          expect(fetched.id).toBe(created.id);
          expect(fetched.name).toBe(name);
          expect(typeof fetched.permissions).toBe("string");
          expect(typeof fetched.position).toBe("number");
          expect(typeof fetched.color).toBe("number");
          expect(typeof fetched.hoist).toBe("boolean");
          expect(typeof fetched.managed).toBe("boolean");
          expect(typeof fetched.mentionable).toBe("boolean");
          expect(typeof fetched.flags).toBe("number");
          expect(typeof fetched.colors.primary_color).toBe("number");
        }).pipe(
          Effect.ensuring(
            deleteGuildRole({
              guild_id: TEST_GUILD_ID,
              role_id: created.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent role_id under a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getGuildRole({
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

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      getGuildRole({
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
