import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getMyApplication } from "../src/operations/getMyApplication.ts";
import { listApplicationEmojis } from "../src/operations/listApplicationEmojis.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /applications/{application_id}/emojis lists the application-owned
// emojis for an application. The happy path resolves the bot's own
// application id via /applications/@me, then lists its emojis. The emoji
// list is allowed to be empty.

// Snowflake-shaped ids unlikely to resolve to any real application.
const NON_EXISTENT_APPLICATION_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_APPLICATION_ID = "100000000000000001";

describe("listApplicationEmojis", () => {
  it(
    "happy path - lists emojis for the bot's application",
    async () => {
      const app = await runEffect(getMyApplication({}));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const applicationId = (app as any).id as string;
      expect(typeof applicationId).toBe("string");

      const result = await runEffect(
        listApplicationEmojis({ application_id: applicationId }),
      );
      expect(result).toBeDefined();
      expect(Array.isArray(result.items)).toBe(true);
      for (const emoji of result.items) {
        expect(typeof emoji.id).toBe("string");
        expect(typeof emoji.name).toBe("string");
        expect(Array.isArray(emoji.roles)).toBe(true);
        expect(typeof emoji.require_colons).toBe("boolean");
        expect(typeof emoji.managed).toBe("boolean");
        expect(typeof emoji.animated).toBe("boolean");
        expect(typeof emoji.available).toBe("boolean");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent application_id", async () => {
    await runEffect(
      listApplicationEmojis({
        application_id: NON_EXISTENT_APPLICATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing application as NotFound. Bot tokens
          // calling for a different application typically receive Forbidden,
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

  it("error - Forbidden or NotFound for an application the bot does not own", async () => {
    await runEffect(
      listApplicationEmojis({
        application_id: INACCESSIBLE_APPLICATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list emojis for its own application; for any
          // other application Discord returns Forbidden, but it often returns
          // NotFound to avoid leaking existence.
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
