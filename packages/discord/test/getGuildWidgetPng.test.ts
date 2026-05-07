import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildWidgetPng } from "../src/operations/getGuildWidgetPng.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/widget.png returns a PNG image of the guild widget.
// Output schema is Void — the SDK simply resolves on a 2xx response. The
// guild must have the widget feature enabled, otherwise Discord responds 403
// (Widget Disabled → Forbidden). The bot does not need to be in the guild.
const TEST_GUILD_ID =
  process.env.DISCORD_TEST_GUILD_WITH_WIDGET_ID ??
  process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("getGuildWidgetPng", () => {
  it("happy path - fetches the widget PNG for the test guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_WITH_WIDGET_ID (or DISCORD_TEST_GUILD_ID) must be set " +
          "for the getGuildWidgetPng happy path. The guild must have the widget enabled.",
      );
    }
    const result = await runEffect(
      getGuildWidgetPng({ guild_id: TEST_GUILD_ID }),
    );
    // Output schema is Void — successful resolution is the assertion.
    expect(result).toBeUndefined();
  });

  it("happy path - accepts a `style` query parameter", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_WITH_WIDGET_ID (or DISCORD_TEST_GUILD_ID) must be set " +
          "for the getGuildWidgetPng happy path. The guild must have the widget enabled.",
      );
    }
    const result = await runEffect(
      getGuildWidgetPng({ guild_id: TEST_GUILD_ID, style: "banner1" }),
    );
    expect(result).toBeUndefined();
  });

  it("error - NotFound for a non-existent guild id", async () => {
    await runEffect(
      getGuildWidgetPng({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (10004 — guild does not exist), or
          // Forbidden (Widget Disabled) for guilds whose widget is not
          // enabled. Some malformed snowflakes may surface as BadRequest.
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
    await runEffect(
      getGuildWidgetPng({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
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
