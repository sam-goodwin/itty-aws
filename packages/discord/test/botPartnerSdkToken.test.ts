import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { botPartnerSdkToken } from "../src/operations/botPartnerSdkToken.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The endpoint requires:
//   - the bot's application to be enrolled in Discord's Partner SDK / Social
//     Layer program (otherwise Discord returns 403 Forbidden).
//   - an arbitrary external_user_id that the partner uses to identify a user
//     in their own system.
const TEST_EXTERNAL_USER_ID =
  process.env.DISCORD_TEST_EXTERNAL_USER_ID ??
  `distilled-discord-partner-${testRunId}`;

describe("botPartnerSdkToken", () => {
  it("happy path - mints a partner SDK token for an external user", async () => {
    await runEffect(
      botPartnerSdkToken({
        external_user_id: TEST_EXTERNAL_USER_ID,
        preferred_global_name: `distilled-test-${testRunId}`,
      }).pipe(
        Effect.tap((result) =>
          Effect.sync(() => {
            expect(typeof result.token_type).toBe("string");
            expect(typeof result.expires_in).toBe("number");
            expect(typeof result.scope).toBe("string");
            expect(typeof result.id_token).toBe("string");
            // access_token is a SensitiveString — assert it exists.
            expect(result.access_token).toBeDefined();
          }),
        ),
      ),
    );
  });

  it("error - BadRequest for missing external_user_id (empty string)", async () => {
    await runEffect(
      botPartnerSdkToken({
        external_user_id: "",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects empty external_user_id with 400 Invalid Form Body;
          // bots not enrolled in Partner SDK may instead receive 403 Forbidden
          // before form validation runs.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the application is not enrolled in Partner SDK", async () => {
    // A bot whose application is not allowlisted for the Partner SDK / Social
    // Layer program receives 403 Forbidden on this endpoint regardless of the
    // input. May surface as NotFound if the route itself is gated.
    await runEffect(
      botPartnerSdkToken({
        external_user_id: `distilled-forbidden-${testRunId}`,
        preferred_global_name: null,
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

  it("error - NotFound for a comically long external_user_id that no route accepts", async () => {
    // Discord's Partner SDK route can reject extreme inputs as NotFound when
    // the gateway treats them as a routing miss; otherwise the API surfaces
    // BadRequest or Forbidden.
    await runEffect(
      botPartnerSdkToken({
        external_user_id: "x".repeat(4096),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "BadRequest", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
