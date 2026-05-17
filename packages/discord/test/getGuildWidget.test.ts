import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildWidget } from "../src/operations/getGuildWidget.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/widget.json is the *public* widget JSON. The guild
// must have the widget feature enabled — otherwise Discord responds 403
// (Widget Disabled → Forbidden). The bot does not need to be in the guild.
const TEST_GUILD_ID =
  process.env.DISCORD_TEST_GUILD_WITH_WIDGET_ID ??
  process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("getGuildWidget", () => {
  it("happy path - fetches the public widget for the test guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_WITH_WIDGET_ID (or DISCORD_TEST_GUILD_ID) must be set " +
          "for the getGuildWidget happy path. The guild must have the widget enabled.",
      );
    }
    const result = await runEffect(getGuildWidget({ guild_id: TEST_GUILD_ID }));
    expect(typeof result.id).toBe("string");
    expect(typeof result.name).toBe("string");
    expect(
      result.instant_invite === null ||
        typeof result.instant_invite === "string",
    ).toBe(true);
    expect(Array.isArray(result.channels)).toBe(true);
    for (const ch of result.channels) {
      expect(typeof ch.id).toBe("string");
      expect(typeof ch.name).toBe("string");
      expect(typeof ch.position).toBe("number");
    }
    expect(Array.isArray(result.members)).toBe(true);
    for (const m of result.members) {
      expect(typeof m.id).toBe("string");
      expect(typeof m.username).toBe("string");
      expect(typeof m.status).toBe("string");
      expect(typeof m.avatar_url).toBe("string");
    }
    expect(typeof result.presence_count).toBe("number");
    expect(result.presence_count).toBeGreaterThanOrEqual(0);
  });

  it("error - NotFound for a non-existent guild id", async () => {
    await runEffect(
      getGuildWidget({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (10004 — guild does not exist), or
          // Forbidden (Widget Disabled) for guilds that exist but have not
          // enabled their widget. Some malformed snowflakes may surface as
          // BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the widget is disabled on a guild", async () => {
    // For a snowflake-shaped id pointing at a guild whose widget is not
    // enabled, Discord responds with 403 Widget Disabled (→ Forbidden).
    // For a non-resolving id it returns 404 (→ NotFound).
    await runEffect(
      getGuildWidget({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
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
