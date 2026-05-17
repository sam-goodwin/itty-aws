import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildChannel } from "../src/operations/createGuildChannel.ts";
import { deleteChannel } from "../src/operations/deleteChannel.ts";
import { deleteChannelPermissionOverwrite } from "../src/operations/deleteChannelPermissionOverwrite.ts";
import { setChannelPermissionOverwrite } from "../src/operations/setChannelPermissionOverwrite.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a guild where the bot has Manage Channels + Manage Roles.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_OVERWRITE_ID = "100000000000000001";

const channelName = (suffix: string): string =>
  `dt-delperm-${suffix}-${testRunId}`.slice(0, 100);

describe("deleteChannelPermissionOverwrite", () => {
  it(
    "happy path - sets a role overwrite on a fresh channel and deletes it",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the deleteChannelPermissionOverwrite happy path",
        );
      }
      // The @everyone role id equals the guild id by Discord convention,
      // making it a stable target for a permission overwrite (type 0 = role).
      const roleId = TEST_GUILD_ID;
      await runEffect(
        Effect.gen(function* () {
          const channel = yield* createGuildChannel({
            guild_id: TEST_GUILD_ID,
            name: channelName("happy"),
            type: 0,
          });
          return yield* Effect.gen(function* () {
            yield* setChannelPermissionOverwrite({
              channel_id: channel.id,
              overwrite_id: roleId,
              type: 0,
              // VIEW_CHANNEL bit, deny it for the role.
              allow: 0,
              deny: 1024,
            });
            const result = yield* deleteChannelPermissionOverwrite({
              channel_id: channel.id,
              overwrite_id: roleId,
            });
            return yield* Effect.sync(() => {
              expect(result).toBeUndefined();
            });
          }).pipe(
            Effect.ensuring(
              deleteChannel({ channel_id: channel.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      deleteChannelPermissionOverwrite({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        overwrite_id: NON_EXISTENT_OVERWRITE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A snowflake-shaped channel_id the bot cannot see typically yields
          // 404 NotFound. Discord may also surface 403 Forbidden (50001
          // Missing Access) if the route reaches the permission check.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it(
    "error - NotFound for an overwrite_id that does not exist on a real channel",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
        );
      }
      // Create a fresh channel that has no overwrites, then try to delete a
      // bogus overwrite_id on it. Discord returns 404 (error code 10009) or
      // 403 depending on which check fires first.
      await runEffect(
        Effect.gen(function* () {
          const channel = yield* createGuildChannel({
            guild_id: TEST_GUILD_ID,
            name: channelName("nf"),
            type: 0,
          });
          return yield* deleteChannelPermissionOverwrite({
            channel_id: channel.id,
            overwrite_id: NON_EXISTENT_OVERWRITE_ID,
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
            }),
            Effect.ensuring(
              deleteChannel({ channel_id: channel.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - Forbidden for a malformed channel_id", async () => {
    await runEffect(
      deleteChannelPermissionOverwrite({
        channel_id: "not-a-snowflake",
        overwrite_id: NON_EXISTENT_OVERWRITE_ID,
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
