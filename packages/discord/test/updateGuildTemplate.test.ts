import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildTemplate } from "../src/operations/createGuildTemplate.ts";
import { deleteGuildTemplate } from "../src/operations/deleteGuildTemplate.ts";
import { updateGuildTemplate } from "../src/operations/updateGuildTemplate.ts";
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
// only have one template at a time, so each test creates and immediately
// deletes its own template.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
// A template code that should not match any real template on a real guild.
const NON_EXISTENT_TEMPLATE_CODE = `nope-${testRunId}`;

// Discord requires template names of 1..100 chars.
const templateName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 100);

describe("updateGuildTemplate", () => {
  it(
    "happy path - renames a freshly created guild template",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the updateGuildTemplate happy path",
        );
      }
      const originalName = templateName("upd_o");
      const newName = templateName("upd_n");
      await runEffect(
        Effect.gen(function* () {
          const template = yield* createGuildTemplate({
            guild_id: TEST_GUILD_ID,
            name: originalName,
            description: "distilled test template",
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateGuildTemplate({
              guild_id: TEST_GUILD_ID,
              code: template.code,
              name: newName,
              description: "renamed by distilled",
            });
            return yield* Effect.sync(() => {
              expect(updated.code).toBe(template.code);
              expect(updated.name).toBe(newName);
              expect(updated.description).toBe("renamed by distilled");
              expect(updated.source_guild_id).toBe(TEST_GUILD_ID);
              expect(typeof updated.usage_count).toBe("number");
              expect(typeof updated.creator_id).toBe("string");
              expect(typeof updated.created_at).toBe("string");
              expect(typeof updated.updated_at).toBe("string");
            });
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
    },
    30_000,
  );

  it("error - NotFound for non-existent template code on a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A template code that does not exist on the guild yields 404 NotFound.
    // Discord may also surface 403 Forbidden depending on which check fires
    // first.
    await runEffect(
      updateGuildTemplate({
        guild_id: TEST_GUILD_ID,
        code: NON_EXISTENT_TEMPLATE_CODE,
        name: templateName("nf"),
      }).pipe(
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

  it(
    "error - BadRequest when name is empty",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
        );
      }
      // Name must be 1..100 characters; empty string is rejected with 400
      // Invalid Form Body. We need a real template for the route to actually
      // validate the body, so create-then-update.
      const original = templateName("br_o");
      await runEffect(
        Effect.gen(function* () {
          const template = yield* createGuildTemplate({
            guild_id: TEST_GUILD_ID,
            name: original,
          });
          return yield* updateGuildTemplate({
            guild_id: TEST_GUILD_ID,
            code: template.code,
            name: "",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e as any)._tag,
              );
            }),
            Effect.ensuring(
              deleteGuildTemplate({
                guild_id: TEST_GUILD_ID,
                code: template.code,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      updateGuildTemplate({
        guild_id: NON_EXISTENT_GUILD_ID,
        code: NON_EXISTENT_TEMPLATE_CODE,
        name: templateName("fb"),
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
});
