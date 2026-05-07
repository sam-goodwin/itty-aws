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

// Requires a guild where the bot has Manage Guild. A guild may have at most
// one template at a time, so we delete first if necessary, create one fresh,
// then delete it.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
// A template code that should not exist on any guild.
const NON_EXISTENT_TEMPLATE_CODE = `dt-no-such-${testRunId}`;

// Discord requires template names of 1..100 chars.
const templateName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 100);

describe("deleteGuildTemplate", () => {
  it(
    "happy path - creates a guild template then deletes it and returns it",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the deleteGuildTemplate happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createGuildTemplate({
            guild_id: TEST_GUILD_ID,
            name: templateName("del"),
            description: "distilled test template",
          });
          const result = yield* deleteGuildTemplate({
            guild_id: TEST_GUILD_ID,
            code: created.code,
          }).pipe(
            // If the delete fails, attempt cleanup explicitly.
            Effect.ensuring(
              deleteGuildTemplate({
                guild_id: TEST_GUILD_ID,
                code: created.code,
              }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            // Discord returns the deleted template object.
            expect(result.code).toBe(created.code);
            expect(typeof result.name).toBe("string");
            expect(result.source_guild_id).toBe(TEST_GUILD_ID);
            expect(typeof result.usage_count).toBe("number");
            expect(typeof result.creator_id).toBe("string");
          });
        }),
      );
    },
    30_000,
  );

  it(
    "error - NotFound for a template code that does not exist on the guild",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
        );
      }
      // A template code that does not exist on the guild yields 404
      // NotFound. Discord may also surface 403 Forbidden depending on which
      // check fires first.
      await runEffect(
        deleteGuildTemplate({
          guild_id: TEST_GUILD_ID,
          code: NON_EXISTENT_TEMPLATE_CODE,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
          }),
        ),
      );
    },
  );

  it("error - Forbidden for a guild_id the bot is not in", async () => {
    // A guild_id the bot is not a member of typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      deleteGuildTemplate({
        guild_id: NON_EXISTENT_GUILD_ID,
        code: NON_EXISTENT_TEMPLATE_CODE,
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
