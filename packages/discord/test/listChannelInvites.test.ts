import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createChannelInvite } from "../src/operations/createChannelInvite.ts";
import { inviteRevoke } from "../src/operations/inviteRevoke.ts";
import { listChannelInvites } from "../src/operations/listChannelInvites.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/invites lists active invites for a channel.
// The happy path creates a fresh invite in an operator-supplied channel
// (DISCORD_TEST_CHANNEL_ID), lists invites, asserts our created code is
// present, then revokes the created invite for cleanup.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-shaped ids unlikely to resolve to any real channel.
const NON_EXISTENT_CHANNEL_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_CHANNEL_ID = "100000000000000001";

describe("listChannelInvites", () => {
  it(
    "happy path - lists invites for a channel including a freshly created one",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the listChannelInvites happy path. " +
            "Set it to a text/voice channel id where the bot has MANAGE_CHANNELS and CREATE_INSTANT_INVITE.",
        );
      }

      const created = await runEffect(
        createChannelInvite({ channel_id: TEST_CHANNEL_ID }),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const code = (created as any).code as string;
      expect(typeof code).toBe("string");

      try {
        const result = await runEffect(
          listChannelInvites({ channel_id: TEST_CHANNEL_ID }),
        );
        expect(Array.isArray(result)).toBe(true);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const codes = (result as any[]).map((inv) => inv.code);
        expect(codes).toContain(code);
        for (const inv of result) {
          // The output schema is Schema.Array(Schema.Unknown); validate the
          // documented shape defensively.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const i = inv as any;
          expect(typeof i.code).toBe("string");
          if (i.channel && typeof i.channel === "object") {
            expect(i.channel.id).toBe(TEST_CHANNEL_ID);
          }
        }
      } finally {
        await runEffect(inviteRevoke({ code }).pipe(Effect.ignore));
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent channel_id", async () => {
    await runEffect(
      listChannelInvites({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing channel as NotFound. Bot tokens calling
          // for a channel they cannot access typically receive Forbidden, and
          // malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a channel the bot cannot access", async () => {
    await runEffect(
      listChannelInvites({ channel_id: INACCESSIBLE_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list invites in channels it can MANAGE_CHANNELS;
          // for any other channel Discord returns Forbidden, but it often
          // returns NotFound to avoid leaking existence.
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
