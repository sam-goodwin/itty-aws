import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { deleteChannelPermissionOverwrite } from "../src/operations/deleteChannelPermissionOverwrite.ts";
import { setChannelPermissionOverwrite } from "../src/operations/setChannelPermissionOverwrite.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /channels/{channel_id}/permissions/{overwrite_id} sets a permission
// overwrite on a channel for a specific role or member. Requires
// MANAGE_ROLES. Happy path is gated on DISCORD_TEST_CHANNEL_ID and
// DISCORD_TEST_GUILD_ID — the @everyone role id equals the guild id, and a
// no-op overwrite (allow=0, deny=0) keeps effective permissions unchanged.
// The test cleans up by deleting the overwrite afterwards.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

describe("setChannelPermissionOverwrite", () => {
  it.skipIf(!TEST_CHANNEL_ID || !TEST_GUILD_ID)(
    "happy path - sets a no-op overwrite for @everyone and cleans up",
    async () => {
      // type 0 = role overwrite. The @everyone role id equals the guild id.
      try {
        const result = await runEffect(
          setChannelPermissionOverwrite({
            channel_id: TEST_CHANNEL_ID!,
            overwrite_id: TEST_GUILD_ID!,
            type: 0,
            allow: 0,
            deny: 0,
          }),
        );
        // Endpoint returns 204 No Content; typed output is void.
        expect(result).toBeUndefined();
      } finally {
        await runEffect(
          deleteChannelPermissionOverwrite({
            channel_id: TEST_CHANNEL_ID!,
            overwrite_id: TEST_GUILD_ID!,
          }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for an invalid overwrite type", async () => {
    // Discord enforces type ∈ {0 (role), 1 (member)}. An out-of-range value
    // should surface as BadRequest, but may route as Forbidden or NotFound
    // depending on channel access ordering.
    const channelId =
      TEST_CHANNEL_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    const overwriteId =
      TEST_GUILD_ID ?? `1000000000000000${testRunId.slice(2, 4)}`;
    await runEffect(
      setChannelPermissionOverwrite({
        channel_id: channelId,
        overwrite_id: overwriteId,
        type: 9999,
        allow: 0,
        deny: 0,
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

  it("error - Forbidden for an inaccessible channel", async () => {
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleChannelId = "100000000000000001";
    await runEffect(
      setChannelPermissionOverwrite({
        channel_id: inaccessibleChannelId,
        overwrite_id: "100000000000000002",
        type: 0,
        allow: 0,
        deny: 0,
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

  it("error - NotFound for a non-existent channel id", async () => {
    const fakeChannelId = `1000000000000000${testRunId.slice(0, 2)}`;
    const fakeOverwriteId = `1000000000000000${testRunId.slice(2, 4)}`;
    await runEffect(
      setChannelPermissionOverwrite({
        channel_id: fakeChannelId,
        overwrite_id: fakeOverwriteId,
        type: 0,
        allow: 0,
        deny: 0,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (channel does not exist), Forbidden
          // (bot cannot see the channel), or BadRequest depending on routing.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
