import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { pruneGuild } from "../src/operations/pruneGuild.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// POST /guilds/{guild_id}/prune actually prunes inactive members from the
// guild. This is destructive — it kicks members. Happy path is gated on
// DISCORD_TEST_GUILD_ID. Uses days=30 (max) and compute_prune_count=false
// to minimize execution time. Operators must point this at a dedicated test
// guild where pruning is acceptable.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

describe("pruneGuild", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - prunes inactive members and returns count",
    async () => {
      const result = await runEffect(
        pruneGuild({
          guild_id: TEST_GUILD_ID!,
          days: 30,
          compute_prune_count: false,
        }),
      );
      // When compute_prune_count is false, Discord returns null. When true,
      // it returns the number of pruned members.
      expect(result.pruned === null || typeof result.pruned === "number").toBe(
        true,
      );
      if (typeof result.pruned === "number") {
        expect(result.pruned).toBeGreaterThanOrEqual(0);
      }
    },
    { timeout: 60_000 },
  );

  it("error - BadRequest for an invalid days value", async () => {
    // Discord enforces 1 <= days <= 30 and surfaces out-of-range values as
    // BadRequest. May also route as Forbidden or NotFound depending on
    // guild access ordering.
    const fakeGuildId =
      TEST_GUILD_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      pruneGuild({
        guild_id: fakeGuildId,
        days: 9999,
        compute_prune_count: false,
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
      pruneGuild({
        guild_id: inaccessibleGuildId,
        days: 7,
        compute_prune_count: false,
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
      pruneGuild({
        guild_id: fakeGuildId,
        days: 7,
        compute_prune_count: false,
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
