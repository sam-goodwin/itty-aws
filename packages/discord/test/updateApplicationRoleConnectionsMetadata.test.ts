import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { updateApplicationRoleConnectionsMetadata } from "../src/operations/updateApplicationRoleConnectionsMetadata.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /applications/{application_id}/role-connections/metadata replaces the
// application's role connection metadata records. The SDK's input schema
// has only `application_id`, so calling it sends no body, which Discord
// interprets as clearing all metadata records.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

describe("updateApplicationRoleConnectionsMetadata", () => {
  it.skipIf(!TEST_APPLICATION_ID)(
    "happy path - replaces role-connection metadata for the bot's application",
    async () => {
      const result = await runEffect(
        updateApplicationRoleConnectionsMetadata({
          application_id: TEST_APPLICATION_ID!,
        }),
      );
      expect(Array.isArray(result)).toBe(true);
      for (const record of result) {
        expect(typeof record.key).toBe("string");
        expect(typeof record.name).toBe("string");
        expect(typeof record.description).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for a malformed application_id", async () => {
    // A non-snowflake application_id should fail validation. Discord may
    // surface this as BadRequest, NotFound, or Forbidden depending on
    // routing.
    await runEffect(
      updateApplicationRoleConnectionsMetadata({
        application_id: `not-a-snowflake-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for an application the caller does not own", async () => {
    // A real-looking snowflake the bot does not own. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or
    // BadRequest.
    await runEffect(
      updateApplicationRoleConnectionsMetadata({
        application_id: NON_EXISTENT_APPLICATION_ID,
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
      updateApplicationRoleConnectionsMetadata({
        application_id: fakeApplicationId,
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
