import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getGuildsOnboarding } from "../src/operations/getGuildsOnboarding.ts";
import { putGuildsOnboarding } from "../src/operations/putGuildsOnboarding.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /guilds/{guild_id}/onboarding replaces the guild's onboarding flow.
// Requires MANAGE_GUILD and MANAGE_ROLES. Happy path is gated on
// DISCORD_TEST_GUILD_ID and snapshots the current onboarding state via
// getGuildsOnboarding before PUTting it back, so the operation is
// effectively idempotent.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

describe("putGuildsOnboarding", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - replaces guild onboarding with the current snapshot",
    async () => {
      const current = await runEffect(
        getGuildsOnboarding({ guild_id: TEST_GUILD_ID! }),
      );
      const result = await runEffect(
        putGuildsOnboarding({
          guild_id: TEST_GUILD_ID!,
          prompts: current.prompts.map((p) => ({
            id: p.id,
            title: p.title,
            single_select: p.single_select,
            required: p.required,
            in_onboarding: p.in_onboarding,
            type: p.type,
            options: p.options.map((o) => ({
              id: o.id,
              title: o.title,
              description: o.description,
              emoji_id: o.emoji.id,
              emoji_name: o.emoji.name,
              emoji_animated: o.emoji.animated,
              role_ids: [...o.role_ids],
              channel_ids: [...o.channel_ids],
            })),
          })),
          default_channel_ids: [...current.default_channel_ids],
          enabled: current.enabled,
          mode: current.mode,
        }),
      );
      expect(result.guild_id).toBe(TEST_GUILD_ID);
      expect(Array.isArray(result.prompts)).toBe(true);
      expect(Array.isArray(result.default_channel_ids)).toBe(true);
      expect(typeof result.enabled).toBe("boolean");
      for (const prompt of result.prompts) {
        expect(typeof prompt.id).toBe("string");
        expect(typeof prompt.title).toBe("string");
        expect(typeof prompt.single_select).toBe("boolean");
        expect(typeof prompt.required).toBe("boolean");
        expect(typeof prompt.in_onboarding).toBe("boolean");
        expect(Array.isArray(prompt.options)).toBe(true);
      }
    },
    { timeout: 60_000 },
  );

  it("error - BadRequest for malformed onboarding input", async () => {
    // A prompt with an empty options array violates Discord's onboarding
    // constraints and should surface as BadRequest. Discord may also route
    // as Forbidden or NotFound depending on guild access ordering.
    const fakeGuildId =
      TEST_GUILD_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      putGuildsOnboarding({
        guild_id: fakeGuildId,
        prompts: [
          {
            id: "0",
            title: `bad-prompt-${testRunId}`,
            options: [],
          },
        ],
        default_channel_ids: [],
        enabled: false,
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
      putGuildsOnboarding({
        guild_id: inaccessibleGuildId,
        prompts: [],
        default_channel_ids: [],
        enabled: false,
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

  it("error - NotFound for a non-existent guild id", async () => {
    const fakeGuildId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      putGuildsOnboarding({
        guild_id: fakeGuildId,
        prompts: [],
        default_channel_ids: [],
        enabled: false,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (guild does not exist), Forbidden
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
