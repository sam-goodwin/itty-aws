import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { actionGuildJoinRequest } from "../src/operations/actionGuildJoinRequest.ts";
import { getGuildJoinRequests } from "../src/operations/getGuildJoinRequests.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match any real Discord resource.
// Discord IDs are 17–19 digit numeric snowflakes.
const NON_EXISTENT_REQUEST_ID = "100000000000000000";
const NON_EXISTENT_GUILD_ID = "100000000000000001";

describe("actionGuildJoinRequest", () => {
  it("happy path - approves a pending guild join request", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the actionGuildJoinRequest happy path",
      );
    }
    const result = await runEffect(
      Effect.gen(function* () {
        // Find a pending join request to action. The bot must have Manage Guild
        // (or equivalent) on TEST_GUILD_ID and at least one PENDING request must
        // exist for this test to exercise the success path.
        const list = yield* getGuildJoinRequests({
          guild_id: TEST_GUILD_ID,
          status: "PENDING",
        });
        const pending = list.guild_join_requests?.[0];
        if (!pending) {
          throw new Error(
            `No pending join requests in guild ${TEST_GUILD_ID} - cannot exercise happy path. Submit a join request first.`,
          );
        }
        return yield* actionGuildJoinRequest({
          guild_id: TEST_GUILD_ID,
          request_id: pending.id,
          action: "APPROVED",
        });
      }),
    );
    expect(result.id).toBeDefined();
    expect(result.guild_id).toBe(TEST_GUILD_ID);
    expect(result.user_id).toBeDefined();
    expect(result.reviewed_at).not.toBeNull();
  });

  it("error - NotFound for non-existent request_id in real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      actionGuildJoinRequest({
        guild_id: TEST_GUILD_ID,
        request_id: NON_EXISTENT_REQUEST_ID,
        action: "APPROVED",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unknown request_id; some tenants
          // surface it as Forbidden if the bot lacks Manage Guild.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) guild_id", async () => {
    await runEffect(
      actionGuildJoinRequest({
        guild_id: "not-a-snowflake",
        request_id: NON_EXISTENT_REQUEST_ID,
        action: "APPROVED",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for guild bot has no access to", async () => {
    await runEffect(
      actionGuildJoinRequest({
        guild_id: NON_EXISTENT_GUILD_ID,
        request_id: NON_EXISTENT_REQUEST_ID,
        action: "APPROVED",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // For a guild the bot is not in, Discord typically returns
          // Forbidden (50001 Missing Access) but may surface as NotFound.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
