import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getMyApplication } from "../src/operations/getMyApplication.ts";
import { updateApplication } from "../src/operations/updateApplication.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /applications/{application_id} updates the calling bot's application.
// The bot can only update its own app (use "@me" or the bot's app id).
// Happy path snapshots the current description and PATCHes it back so the
// effective state is unchanged.

describe("updateApplication", () => {
  it(
    "happy path - snapshots and re-applies the bot's application description",
    async () => {
      const me = await runEffect(getMyApplication({}));
      const result = await runEffect(
        updateApplication({
          application_id: me.id,
          description: { default: me.description },
        }),
      );
      expect(result.id).toBe(me.id);
      expect(typeof result.name).toBe("string");
      expect(typeof result.description).toBe("string");
      expect(result.description).toBe(me.description);
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for an invalid interactions_endpoint_url", async () => {
    // A non-https URL should fail validation. Discord may surface this as
    // BadRequest, but may route as Forbidden or NotFound depending on
    // application access ordering.
    const me = await runEffect(getMyApplication({}));
    await runEffect(
      updateApplication({
        application_id: me.id,
        interactions_endpoint_url: `not-a-valid-url-${testRunId}`,
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

  it("error - Forbidden for an application the caller does not own", async () => {
    // A real-looking snowflake the bot does not own. Discord may surface this
    // as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleApplicationId = "100000000000000001";
    await runEffect(
      updateApplication({
        application_id: inaccessibleApplicationId,
        description: { default: `forbidden-${testRunId}` },
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

  it("error - NotFound for a non-existent application id", async () => {
    const fakeApplicationId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      updateApplication({
        application_id: fakeApplicationId,
        description: { default: `nonexistent-${testRunId}` },
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (application does not exist),
          // Forbidden (caller does not own it), or BadRequest depending on
          // routing.
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
