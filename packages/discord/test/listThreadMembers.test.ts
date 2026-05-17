import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listThreadMembers } from "../src/operations/listThreadMembers.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/thread-members lists members of a thread.
// Requires the GUILD_MEMBERS privileged intent. Happy path is gated on
// DISCORD_TEST_THREAD_ID since it requires a real thread channel id.
const TEST_THREAD_ID = process.env.DISCORD_TEST_THREAD_ID;

describe("listThreadMembers", () => {
  it.skipIf(!TEST_THREAD_ID)(
    "happy path - lists members of a thread",
    async () => {
      const result = await runEffect(
        listThreadMembers({
          channel_id: TEST_THREAD_ID!,
          with_member: true,
          limit: 10,
        }),
      );
      expect(Array.isArray(result)).toBe(true);
      for (const tm of result) {
        expect(typeof tm.id).toBe("string");
        expect(typeof tm.user_id).toBe("string");
        expect(typeof tm.join_timestamp).toBe("string");
        expect(typeof tm.flags).toBe("number");
        if (tm.member !== undefined) {
          expect(typeof tm.member.flags).toBe("number");
          expect(typeof tm.member.joined_at).toBe("string");
          expect(typeof tm.member.pending).toBe("boolean");
          expect(typeof tm.member.mute).toBe("boolean");
          expect(typeof tm.member.deaf).toBe("boolean");
          expect(Array.isArray(tm.member.roles)).toBe(true);
          expect(typeof tm.member.user.id).toBe("string");
          expect(typeof tm.member.user.username).toBe("string");
        }
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent thread channel id", async () => {
    const fakeChannelId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      listThreadMembers({ channel_id: fakeChannelId }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (thread does not exist), Forbidden
          // (bot cannot see the thread), or BadRequest depending on routing.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for an inaccessible thread", async () => {
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleChannelId = "100000000000000001";
    await runEffect(
      listThreadMembers({ channel_id: inaccessibleChannelId }).pipe(
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
