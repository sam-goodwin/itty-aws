import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getMyApplication } from "../src/operations/getMyApplication.ts";
import { listGuildApplicationCommandPermissions } from "../src/operations/listGuildApplicationCommandPermissions.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /applications/{application_id}/guilds/{guild_id}/commands/permissions
// lists per-command permission overrides for the bot's application in a
// guild. The happy path resolves the bot's application id via
// /applications/@me, then lists permissions for an operator-supplied guild
// (DISCORD_TEST_GUILD_ID). The list is allowed to be empty.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real application/guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_APPLICATION_ID = "100000000000000001";

describe("listGuildApplicationCommandPermissions", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - lists per-command permissions for the bot's application in a guild",
    async () => {
      const app = await runEffect(getMyApplication({}));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const applicationId = (app as any).id as string;
      expect(typeof applicationId).toBe("string");

      const result = await runEffect(
        listGuildApplicationCommandPermissions({
          application_id: applicationId,
          guild_id: TEST_GUILD_ID!,
        }),
      );
      expect(Array.isArray(result)).toBe(true);
      for (const entry of result) {
        expect(typeof entry.id).toBe("string");
        expect(entry.application_id).toBe(applicationId);
        expect(entry.guild_id).toBe(TEST_GUILD_ID!);
        expect(Array.isArray(entry.permissions)).toBe(true);
        for (const p of entry.permissions) {
          expect(typeof p.id).toBe("string");
          expect(typeof p.permission).toBe("boolean");
        }
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    const app = await runEffect(getMyApplication({}));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const applicationId = (app as any).id as string;
    await runEffect(
      listGuildApplicationCommandPermissions({
        application_id: applicationId,
        guild_id: NON_EXISTENT_GUILD_ID,
      }).pipe(
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

  it("error - Forbidden or NotFound for an application the bot does not own", async () => {
    await runEffect(
      listGuildApplicationCommandPermissions({
        application_id: INACCESSIBLE_APPLICATION_ID,
        guild_id: TEST_GUILD_ID ?? NON_EXISTENT_GUILD_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list permissions for its own application; for
          // any other application Discord returns Forbidden, but it often
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
