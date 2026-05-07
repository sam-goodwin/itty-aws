import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Context from "effect/Context";
import { ConfigError } from "@distilled.cloud/core/errors";

export const DEFAULT_API_BASE_URL = "https://discord.com/api/v10";

/**
 * Discord auth scheme.
 *
 * - `"Bot"` — bot tokens (`Authorization: Bot <token>`). Default.
 * - `"Bearer"` — OAuth2 bearer tokens (`Authorization: Bearer <token>`).
 */
export type AuthScheme = "Bot" | "Bearer";

export interface Config {
  readonly token: Redacted.Redacted<string>;
  readonly authScheme: AuthScheme;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "DiscordCredentials",
) {}

/**
 * Load credentials from environment variables.
 *
 * - `DISCORD_BOT_TOKEN` (preferred) — bot token, used with `Authorization: Bot <token>`.
 * - `DISCORD_TOKEN` — alias for `DISCORD_BOT_TOKEN`.
 * - `DISCORD_BEARER_TOKEN` — OAuth2 bearer token, used with `Authorization: Bearer <token>`.
 *   If both are set, `DISCORD_BEARER_TOKEN` takes precedence.
 * - `DISCORD_API_BASE_URL` — overrides the default base URL (optional).
 */
export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const bearer = process.env.DISCORD_BEARER_TOKEN;
    const bot = process.env.DISCORD_BOT_TOKEN ?? process.env.DISCORD_TOKEN;
    const apiBaseUrl = process.env.DISCORD_API_BASE_URL ?? DEFAULT_API_BASE_URL;

    if (bearer) {
      return {
        token: Redacted.make(bearer),
        authScheme: "Bearer" as const,
        apiBaseUrl,
      };
    }

    if (bot) {
      return {
        token: Redacted.make(bot),
        authScheme: "Bot" as const,
        apiBaseUrl,
      };
    }

    return yield* new ConfigError({
      message:
        "DISCORD_BOT_TOKEN (or DISCORD_TOKEN) or DISCORD_BEARER_TOKEN environment variable is required",
    });
  }),
);
