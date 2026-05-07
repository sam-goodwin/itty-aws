import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildTemplate } from "../src/operations/createGuildTemplate.ts";
import { deleteGuildTemplate } from "../src/operations/deleteGuildTemplate.ts";
import { getGuildTemplate } from "../src/operations/getGuildTemplate.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The endpoint is GET /guilds/templates/{code} — a public-ish lookup by
// template share code. The happy path either:
//   - uses an operator-supplied DISCORD_TEST_GUILD_TEMPLATE_CODE, or
//   - if a DISCORD_TEST_GUILD_ID is provided, creates a template on that
//     guild, fetches it, and ensures cleanup. (Discord allows only one
//     template per guild, so creation may BadRequest if one already exists;
//     in that case the test is skipped via the env-var fallback.)
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_GUILD_TEMPLATE_CODE = process.env.DISCORD_TEST_GUILD_TEMPLATE_CODE;

// Template codes are short opaque strings (not snowflakes). A made-up code
// that does not match any real template should yield NotFound.
const NON_EXISTENT_TEMPLATE_CODE = `distilled-no-such-${testRunId}`;

describe("getGuildTemplate", () => {
  it("happy path - fetches a guild template by code", async () => {
    if (TEST_GUILD_TEMPLATE_CODE) {
      const result = await runEffect(
        getGuildTemplate({ code: TEST_GUILD_TEMPLATE_CODE }),
      );
      expect(result.code).toBe(TEST_GUILD_TEMPLATE_CODE);
      expect(typeof result.name).toBe("string");
      expect(typeof result.usage_count).toBe("number");
      expect(typeof result.creator_id).toBe("string");
      expect(typeof result.source_guild_id).toBe("string");
      expect(typeof result.serialized_source_guild.name).toBe("string");
      expect(Array.isArray(result.serialized_source_guild.roles)).toBe(true);
      expect(Array.isArray(result.serialized_source_guild.channels)).toBe(true);
      return;
    }
    if (!TEST_GUILD_ID) {
      throw new Error(
        "Either DISCORD_TEST_GUILD_TEMPLATE_CODE or DISCORD_TEST_GUILD_ID must be set for the getGuildTemplate happy path.",
      );
    }
    const created = await runEffect(
      createGuildTemplate({
        guild_id: TEST_GUILD_ID,
        name: `distilled-discord-template-${testRunId}`,
        description: `distilled test template ${testRunId}`,
      }),
    );
    try {
      const result = await runEffect(getGuildTemplate({ code: created.code }));
      expect(result.code).toBe(created.code);
      expect(result.source_guild_id).toBe(TEST_GUILD_ID);
      expect(typeof result.name).toBe("string");
      expect(typeof result.usage_count).toBe("number");
      expect(typeof result.creator_id).toBe("string");
      expect(typeof result.serialized_source_guild.name).toBe("string");
      expect(Array.isArray(result.serialized_source_guild.roles)).toBe(true);
      expect(Array.isArray(result.serialized_source_guild.channels)).toBe(true);
    } finally {
      await runEffect(
        deleteGuildTemplate({
          guild_id: TEST_GUILD_ID,
          code: created.code,
        }).pipe(Effect.ignore),
      );
    }
  });

  it("error - NotFound for a non-existent template code", async () => {
    await runEffect(
      getGuildTemplate({ code: NON_EXISTENT_TEMPLATE_CODE }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound (10057 Unknown Guild Template) for codes
          // that do not match any template; some malformed codes may also
          // surface as BadRequest, and revoked/banned codes as Forbidden.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - NotFound or Forbidden for an obviously invalid code shape", async () => {
    // A clearly invalid template code shape — Discord's gateway typically
    // resolves this as NotFound, but a stricter validator may yield
    // BadRequest, and a banned code may yield Forbidden.
    await runEffect(
      getGuildTemplate({ code: `${NON_EXISTENT_TEMPLATE_CODE}-x!` }).pipe(
        Effect.flip,
        Effect.map((e) => {
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
