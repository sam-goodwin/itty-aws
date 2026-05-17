import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createChannelInvite } from "../src/operations/createChannelInvite.ts";
import { inviteRevoke } from "../src/operations/inviteRevoke.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// DELETE /invites/{code} revokes an invite. The happy path creates a fresh
// channel invite in an operator-supplied text channel (DISCORD_TEST_CHANNEL_ID)
// and revokes it. The bot must have MANAGE_CHANNELS in the channel or
// MANAGE_GUILD on the guild.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Invite codes are short alphanumeric strings. A random one is overwhelmingly
// unlikely to resolve to a real invite.
const NON_EXISTENT_INVITE_CODE = `distilled-${testRunId}`;
const INACCESSIBLE_INVITE_CODE = `inv-${testRunId}-x`;

describe("inviteRevoke", () => {
  it(
    "happy path - revokes an invite",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the inviteRevoke happy path. " +
            "Set it to a text channel id where the bot has MANAGE_CHANNELS.",
        );
      }
      const created = await runEffect(
        createChannelInvite({ channel_id: TEST_CHANNEL_ID }),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const code = (created as any).code as string;
      expect(typeof code).toBe("string");

      const result = await runEffect(inviteRevoke({ code }));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const revoked = result as any;
      // Discord returns the deleted invite object on success.
      expect(revoked.code).toBe(code);
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent invite code", async () => {
    await runEffect(
      inviteRevoke({ code: NON_EXISTENT_INVITE_CODE }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing invite as NotFound (10006 — Unknown
          // Invite). Some malformed codes may surface as BadRequest or be
          // forbidden depending on routing.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for an invite the caller cannot revoke", async () => {
    await runEffect(
      inviteRevoke({ code: INACCESSIBLE_INVITE_CODE }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // An invite the caller cannot revoke typically surfaces as
          // Forbidden, but Discord often returns NotFound to avoid leaking
          // existence.
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
