import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listGuildAuditLogEntries } from "../src/operations/listGuildAuditLogEntries.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/audit-logs returns the audit log for a guild.
// The bot must have VIEW_AUDIT_LOG. The happy path queries the operator-
// supplied test guild (DISCORD_TEST_GUILD_ID) with a small limit. All
// arrays in the response are allowed to be empty.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("listGuildAuditLogEntries", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - returns the audit log for a guild",
    async () => {
      const result = await runEffect(
        listGuildAuditLogEntries({
          guild_id: TEST_GUILD_ID!,
          limit: 5,
        }),
      );
      expect(result).toBeDefined();
      expect(Array.isArray(result.audit_log_entries)).toBe(true);
      expect(Array.isArray(result.users)).toBe(true);
      expect(Array.isArray(result.integrations)).toBe(true);
      expect(Array.isArray(result.webhooks)).toBe(true);
      expect(Array.isArray(result.guild_scheduled_events)).toBe(true);
      expect(Array.isArray(result.threads)).toBe(true);
      expect(Array.isArray(result.application_commands)).toBe(true);
      expect(Array.isArray(result.auto_moderation_rules)).toBe(true);
      expect(result.audit_log_entries.length).toBeLessThanOrEqual(5);
      for (const entry of result.audit_log_entries) {
        expect(typeof entry.id).toBe("string");
      }
      for (const user of result.users) {
        expect(typeof user.id).toBe("string");
        expect(typeof user.username).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      listGuildAuditLogEntries({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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

  it("error - Forbidden or NotFound for a guild the bot cannot access", async () => {
    await runEffect(
      listGuildAuditLogEntries({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only read the audit log in guilds it's a member of
          // with VIEW_AUDIT_LOG; for any other guild Discord returns
          // Forbidden, but it often returns NotFound to avoid leaking
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
