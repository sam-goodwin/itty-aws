import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createGuildTemplate } from "../src/operations/createGuildTemplate.ts";
import { deleteGuildTemplate } from "../src/operations/deleteGuildTemplate.ts";
import { syncGuildTemplate } from "../src/operations/syncGuildTemplate.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /guilds/{guild_id}/templates/{code} re-syncs an existing guild template
// to the current guild state. Requires MANAGE_GUILD. Happy path is gated on
// DISCORD_TEST_GUILD_ID; the test creates a fresh template, syncs it, then
// deletes it. Discord allows only one template per guild — operators must
// ensure the test guild has no existing template before running.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

describe("syncGuildTemplate", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - syncs an existing template to the current guild state",
    async () => {
      const created = await runEffect(
        createGuildTemplate({
          guild_id: TEST_GUILD_ID!,
          name: `sync-test-${testRunId}`,
          description: "syncGuildTemplate test",
        }),
      );
      try {
        const result = await runEffect(
          syncGuildTemplate({
            guild_id: TEST_GUILD_ID!,
            code: created.code,
          }),
        );
        expect(result.code).toBe(created.code);
        expect(result.source_guild_id).toBe(TEST_GUILD_ID);
        expect(typeof result.name).toBe("string");
        expect(typeof result.usage_count).toBe("number");
        expect(typeof result.creator_id).toBe("string");
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.updated_at).toBe("string");
        expect(typeof result.serialized_source_guild.name).toBe("string");
        expect(typeof result.serialized_source_guild.system_channel_flags).toBe(
          "number",
        );
        expect(Array.isArray(result.serialized_source_guild.roles)).toBe(true);
        expect(Array.isArray(result.serialized_source_guild.channels)).toBe(
          true,
        );
        expect(
          result.is_dirty === null || typeof result.is_dirty === "boolean",
        ).toBe(true);
      } finally {
        await runEffect(
          deleteGuildTemplate({
            guild_id: TEST_GUILD_ID!,
            code: created.code,
          }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 60_000 },
  );

  it("error - BadRequest for a malformed template code", async () => {
    // An empty / invalid template code should surface as BadRequest. Discord
    // may also route as Forbidden or NotFound depending on guild access
    // ordering.
    const guildId =
      TEST_GUILD_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      syncGuildTemplate({
        guild_id: guildId,
        code: " ",
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

  it("error - Forbidden for an inaccessible guild", async () => {
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleGuildId = "100000000000000001";
    await runEffect(
      syncGuildTemplate({
        guild_id: inaccessibleGuildId,
        code: `bogus-${testRunId}`,
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

  it("error - NotFound for a non-existent template code", async () => {
    const guildId =
      TEST_GUILD_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    const fakeCode = `nonexistent-template-${testRunId}`;
    await runEffect(
      syncGuildTemplate({
        guild_id: guildId,
        code: fakeCode,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (template does not exist), Forbidden
          // (bot is not in the guild), or BadRequest depending on routing.
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
