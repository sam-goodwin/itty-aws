import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildTemplate } from "../src/operations/createGuildTemplate.ts";
import { deleteGuildTemplate } from "../src/operations/deleteGuildTemplate.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a guild the bot is in with MANAGE_GUILD permission. Each guild can
// only have one template at a time, so the happy path immediately deletes the
// template it created.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

// Discord requires template names of 1..100 chars.
const templateName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 100);

describe("createGuildTemplate", () => {
  it("happy path - creates a guild template and deletes it on cleanup", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the createGuildTemplate happy path",
      );
    }
    const name = templateName("happy");
    await runEffect(
      Effect.gen(function* () {
        const template = yield* createGuildTemplate({
          guild_id: TEST_GUILD_ID,
          name,
          description: "distilled test template",
        });
        return yield* Effect.sync(() => {
          expect(typeof template.code).toBe("string");
          expect(template.name).toBe(name);
          expect(template.source_guild_id).toBe(TEST_GUILD_ID);
          expect(typeof template.usage_count).toBe("number");
          expect(typeof template.creator_id).toBe("string");
        }).pipe(
          Effect.ensuring(
            deleteGuildTemplate({
              guild_id: TEST_GUILD_ID,
              code: template.code,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      createGuildTemplate({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: templateName("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may surface 50001 Missing Access (Forbidden) instead of
          // NotFound for guilds the bot can't see.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest when name is empty", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Name must be 1..100 characters; empty string is rejected with 400
    // Invalid Form Body.
    await runEffect(
      createGuildTemplate({
        guild_id: TEST_GUILD_ID,
        name: "",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      createGuildTemplate({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: templateName("fb"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
