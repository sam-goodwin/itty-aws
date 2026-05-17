import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createChannelInvite } from "../src/operations/createChannelInvite.ts";
import { inviteRevoke } from "../src/operations/inviteRevoke.ts";
import { listGuildInvites } from "../src/operations/listGuildInvites.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/invites lists active invites in a guild. Requires
// MANAGE_GUILD. The happy path creates a fresh channel invite in an
// operator-supplied channel (DISCORD_TEST_CHANNEL_ID) inside the test
// guild (DISCORD_TEST_GUILD_ID), lists guild invites, asserts our created
// code appears, and revokes the created invite for cleanup.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("listGuildInvites", () => {
  it.skipIf(!TEST_GUILD_ID || !TEST_CHANNEL_ID)(
    "happy path - lists invites in a guild including a freshly created one",
    async () => {
      const created = await runEffect(
        createChannelInvite({ channel_id: TEST_CHANNEL_ID! }),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const code = (created as any).code as string;
      expect(typeof code).toBe("string");

      try {
        const result = await runEffect(
          listGuildInvites({ guild_id: TEST_GUILD_ID! }),
        );
        expect(Array.isArray(result)).toBe(true);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const codes = (result as any[]).map((inv) => inv.code);
        expect(codes).toContain(code);
        for (const inv of result) {
          // The output schema is Schema.Array(Schema.Unknown); validate the
          // documented invite shape defensively.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const i = inv as any;
          expect(typeof i.code).toBe("string");
          if (i.guild && typeof i.guild === "object") {
            expect(i.guild.id).toBe(TEST_GUILD_ID!);
          }
        }
      } finally {
        await runEffect(inviteRevoke({ code }).pipe(Effect.ignore));
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      listGuildInvites({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing guild as NotFound. Bot tokens calling
          // for a guild they aren't a member of typically receive Forbidden,
          // and malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a guild the bot cannot access", async () => {
    await runEffect(
      listGuildInvites({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list invites in guilds it's a member of with
          // MANAGE_GUILD; for any other guild Discord returns Forbidden, but
          // it often returns NotFound to avoid leaking existence.
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
