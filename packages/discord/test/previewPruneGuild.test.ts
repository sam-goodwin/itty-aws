import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { previewPruneGuild } from "../src/operations/previewPruneGuild.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/prune returns the number of members that would be
// pruned by an actual prune. This is read-only — no members are removed.
// Requires KICK_MEMBERS. Happy path is gated on DISCORD_TEST_GUILD_ID.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

describe("previewPruneGuild", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - returns count of members that would be pruned",
    async () => {
      const result = await runEffect(
        previewPruneGuild({
          guild_id: TEST_GUILD_ID!,
          days: 7,
        }),
      );
      expect(result.pruned === null || typeof result.pruned === "number").toBe(
        true,
      );
      if (result.pruned !== null) {
        expect(result.pruned).toBeGreaterThanOrEqual(0);
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild id", async () => {
    const fakeGuildId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      previewPruneGuild({ guild_id: fakeGuildId }).pipe(
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

  it("error - Forbidden for an inaccessible guild", async () => {
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleGuildId = "100000000000000001";
    await runEffect(
      previewPruneGuild({ guild_id: inaccessibleGuildId }).pipe(
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
