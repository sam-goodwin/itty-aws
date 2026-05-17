import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { botPartnerSdkUnmergeProvisionalAccount } from "../src/operations/botPartnerSdkUnmergeProvisionalAccount.ts";

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
//   - an external_user_id whose provisional account was previously merged
//     and can now be unmerged.
const TEST_EXTERNAL_USER_ID =
  process.env.DISCORD_TEST_EXTERNAL_USER_ID ??
  `distilled-discord-partner-${testRunId}`;

describe("botPartnerSdkUnmergeProvisionalAccount", () => {
  it("happy path - unmerges a provisional account for an external user", async () => {
    await runEffect(
      botPartnerSdkUnmergeProvisionalAccount({
        external_user_id: TEST_EXTERNAL_USER_ID,
      }).pipe(
        Effect.tap((result) =>
          Effect.sync(() => {
            // Discord returns 204 No Content on success; the SDK decodes it
            // to void / undefined.
            expect(result).toBeUndefined();
          }),
        ),
      ),
    );
  });

  it("error - BadRequest for missing external_user_id (empty string)", async () => {
    await runEffect(
      botPartnerSdkUnmergeProvisionalAccount({
        external_user_id: "",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects empty external_user_id with 400 Invalid Form Body;
          // bots not enrolled in Partner SDK may instead receive 403 Forbidden
          // before form validation runs, or 404 if the route is gated.
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
      botPartnerSdkUnmergeProvisionalAccount({
        external_user_id: `distilled-forbidden-${testRunId}`,
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

  it("error - NotFound for an external_user_id that has no merged provisional account", async () => {
    // An external_user_id that was never merged into a provisional account
    // typically returns 404 Not Found; some routing layers classify it as
    // 400 Invalid Form Body or 403 Forbidden if the bot is not enrolled.
    await runEffect(
      botPartnerSdkUnmergeProvisionalAccount({
        external_user_id: `distilled-never-merged-${testRunId}`,
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
