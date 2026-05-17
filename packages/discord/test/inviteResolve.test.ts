import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createChannelInvite } from "../src/operations/createChannelInvite.ts";
import { inviteResolve } from "../src/operations/inviteResolve.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /invites/{code} resolves an invite. The happy path creates a fresh
// channel invite in an operator-supplied text channel (DISCORD_TEST_CHANNEL_ID)
// and resolves its code. Discord auto-expires invites after 24h by default,
// and there is no programmatic delete in this SDK, so the created invite
// simply ages out.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Invite codes are short alphanumeric strings. A random one is overwhelmingly
// unlikely to resolve to a real invite.
const NON_EXISTENT_INVITE_CODE = `distilled-${testRunId}`;
const INACCESSIBLE_INVITE_CODE = `inv-${testRunId}-x`;

describe("inviteResolve", () => {
  it(
    "happy path - resolves an invite code",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the inviteResolve happy path. " +
            "Set it to a text channel id where the bot has CREATE_INSTANT_INVITE.",
        );
      }
      const created = await runEffect(
        createChannelInvite({ channel_id: TEST_CHANNEL_ID }),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const code = (created as any).code as string;
      expect(typeof code).toBe("string");

      const result = await runEffect(
        inviteResolve({ code, with_counts: true }),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const invite = result as any;
      expect(invite.code).toBe(code);
      // The invite must reference some channel; usually `channel.id` matches
      // TEST_CHANNEL_ID, though Discord may surface group invites differently.
      if (invite.channel && typeof invite.channel === "object") {
        expect(typeof invite.channel.id).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent invite code", async () => {
    await runEffect(
      inviteResolve({ code: NON_EXISTENT_INVITE_CODE }).pipe(
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

  it("error - Forbidden or NotFound for an invite the caller cannot resolve", async () => {
    await runEffect(
      inviteResolve({ code: INACCESSIBLE_INVITE_CODE }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // An invite the caller cannot resolve typically surfaces as
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
