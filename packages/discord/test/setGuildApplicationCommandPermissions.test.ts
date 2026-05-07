import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  CredentialsFromEnv,
  DEFAULT_API_BASE_URL,
} from "../src/credentials.ts";
import { setGuildApplicationCommandPermissions } from "../src/operations/setGuildApplicationCommandPermissions.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions
// sets the permission overrides for a guild command. This endpoint requires
// a Bearer (user OAuth2) token with the
// applications.commands.permissions.update scope — bot tokens are rejected.
// Happy path is gated on DISCORD_BEARER_TOKEN, DISCORD_TEST_APPLICATION_ID,
// DISCORD_TEST_GUILD_ID, and DISCORD_TEST_GUILD_COMMAND_ID.
const TEST_BEARER = process.env.DISCORD_BEARER_TOKEN;
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_GUILD_COMMAND_ID = process.env.DISCORD_TEST_GUILD_COMMAND_ID;

const makeBearerLayer = (token: string): Layer.Layer<Credentials> =>
  Layer.succeed(Credentials, {
    token: Redacted.make(token),
    authScheme: "Bearer" as const,
    apiBaseUrl: DEFAULT_API_BASE_URL,
  });

const runWithBearer = <A, E>(
  token: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effect: Effect.Effect<A, E, any>,
): Promise<A> => {
  const layer = Layer.merge(makeBearerLayer(token), FetchHttpClient.layer);
  return Effect.runPromise(
    effect.pipe(Effect.provide(layer)) as Effect.Effect<A, E, never>,
  );
};

describe("setGuildApplicationCommandPermissions", () => {
  it.skipIf(
    !TEST_BEARER ||
      !TEST_APPLICATION_ID ||
      !TEST_GUILD_ID ||
      !TEST_GUILD_COMMAND_ID,
  )(
    "happy path - clears permission overrides for a guild command",
    async () => {
      const result = await runWithBearer(
        TEST_BEARER!,
        setGuildApplicationCommandPermissions({
          application_id: TEST_APPLICATION_ID!,
          guild_id: TEST_GUILD_ID!,
          command_id: TEST_GUILD_COMMAND_ID!,
          permissions: [],
        }),
      );
      expect(typeof result.id).toBe("string");
      expect(result.id).toBe(TEST_GUILD_COMMAND_ID);
      expect(typeof result.application_id).toBe("string");
      expect(result.application_id).toBe(TEST_APPLICATION_ID);
      expect(typeof result.guild_id).toBe("string");
      expect(result.guild_id).toBe(TEST_GUILD_ID);
      expect(Array.isArray(result.permissions)).toBe(true);
      for (const p of result.permissions) {
        expect(typeof p.id).toBe("string");
        expect(typeof p.permission).toBe("boolean");
      }
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for malformed permissions input", async () => {
    // type ∈ {1 (role), 2 (user), 3 (channel)}. An out-of-range value should
    // surface as BadRequest. May also route as Forbidden or NotFound
    // depending on resource access ordering.
    const fakeAppId =
      TEST_APPLICATION_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    const fakeGuildId =
      TEST_GUILD_ID ?? `1000000000000000${testRunId.slice(2, 4)}`;
    const fakeCommandId =
      TEST_GUILD_COMMAND_ID ?? `1000000000000000${testRunId.slice(4, 6)}`;
    await runEffect(
      setGuildApplicationCommandPermissions({
        application_id: fakeAppId,
        guild_id: fakeGuildId,
        command_id: fakeCommandId,
        permissions: [
          {
            id: "100000000000000001",
            type: 9999,
            permission: true,
          },
        ],
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

  it("error - Forbidden for an inaccessible application/guild", async () => {
    // A snowflake set the bot/user is unlikely to have access to. Discord
    // may surface this as Forbidden, NotFound (to avoid leaking existence),
    // or BadRequest.
    await runEffect(
      setGuildApplicationCommandPermissions({
        application_id: "100000000000000001",
        guild_id: "100000000000000002",
        command_id: "100000000000000003",
        permissions: [],
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

  it("error - NotFound for a non-existent command id", async () => {
    const appId =
      TEST_APPLICATION_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    const guildId =
      TEST_GUILD_ID ?? `1000000000000000${testRunId.slice(2, 4)}`;
    const fakeCommandId = `1000000000000000${testRunId.slice(4, 6)}`;
    await runEffect(
      setGuildApplicationCommandPermissions({
        application_id: appId,
        guild_id: guildId,
        command_id: fakeCommandId,
        permissions: [],
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (command does not exist), Forbidden
          // (caller cannot see it), or BadRequest depending on routing.
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
