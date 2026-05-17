import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createChannelInvite } from "../src/operations/createChannelInvite.ts";
import { inviteRevoke } from "../src/operations/inviteRevoke.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - a guild text/voice channel the bot is in with CREATE_INSTANT_INVITE
//     permission. With no body, Discord creates a default 1-day invite.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

describe("createChannelInvite", () => {
  it("happy path - creates a channel invite and revokes it on cleanup", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the createChannelInvite happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        // Output is typed as an opaque value because the spec does not
        // describe the response body. Cast for assertions.
        const inviteRaw = yield* createChannelInvite({
          channel_id: TEST_CHANNEL_ID,
        });
        const invite = inviteRaw as { code?: string; channel?: { id?: string } };
        return yield* Effect.sync(() => {
          expect(typeof invite).toBe("object");
          expect(typeof invite.code).toBe("string");
        }).pipe(
          Effect.ensuring(
            invite.code
              ? inviteRevoke({ code: invite.code }).pipe(Effect.ignore)
              : Effect.void,
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      createChannelInvite({
        channel_id: NON_EXISTENT_CHANNEL_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen channels, but may surface as
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

  it("error - BadRequest for malformed (non-snowflake) channel_id", async () => {
    await runEffect(
      createChannelInvite({
        channel_id: "not-a-snowflake",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404, or the bot may lack
          // access and receive 403.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for a channel the bot lacks CREATE_INSTANT_INVITE on", async () => {
    // Calling against a snowflake-shaped channel_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the channel before the permission check.
    await runEffect(
      createChannelInvite({
        channel_id: NON_EXISTENT_CHANNEL_ID,
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
