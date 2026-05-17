# @distilled.cloud/discord

Effect-native Discord SDK generated from the [Discord HTTP API specification](https://github.com/discord/discord-api-spec). Manage applications, guilds, channels, members, messages, interactions, webhooks, and more with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/discord effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { getMyUser } from "@distilled.cloud/discord/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/discord";

const program = Effect.gen(function* () {
  const me = yield* getMyUser({});
  return me;
});

const DiscordLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(DiscordLive), Effect.runPromise);
```

## Configuration

Set one of the following environment variables:

```bash
# Bot token (most common) — sent as `Authorization: Bot <token>`
DISCORD_BOT_TOKEN=your-bot-token

# Or, for OAuth2 — sent as `Authorization: Bearer <token>`
DISCORD_BEARER_TOKEN=your-bearer-token

# Optional override
DISCORD_API_BASE_URL=https://discord.com/api/v10
```

`DISCORD_TOKEN` is accepted as an alias for `DISCORD_BOT_TOKEN`. Create a bot
token in the [Discord Developer Portal](https://discord.com/developers/applications)
under **Your App > Bot**.

## Error Handling

```typescript
import { Effect } from "effect";
import { getUser } from "@distilled.cloud/discord/Operations";
import {
  NotFound,
  DiscordRateLimited,
  UnknownDiscordError,
} from "@distilled.cloud/discord/Errors";

getUser({ user_id: "0" }).pipe(
  Effect.catchTags({
    NotFound: (_e: NotFound) => Effect.succeed(null),
    DiscordRateLimited: (e: DiscordRateLimited) =>
      Effect.fail(new Error(`Rate limited; retry after ${e.retryAfter}s`)),
    UnknownDiscordError: (e: UnknownDiscordError) =>
      Effect.fail(new Error(`Unknown: ${e.message}`)),
  }),
);
```

## Services

Operations cover the full Discord v10 HTTP API. Notable groups:

- **Applications** — get/update application, commands, emojis, entitlements, role connections
- **Guilds** — create, get, update, delete; members, roles, bans, invites, integrations, widgets, scheduled events, audit log
- **Channels** — create, get, update, delete; permissions, invites, pins, threads, followers
- **Messages** — create, get, list, update, delete, crosspost, reactions, bulk delete
- **Interactions** — respond, edit, delete; webhook follow-ups
- **Users** — current user, DMs, connections, guilds
- **Webhooks** — create, get, update, delete, execute (incl. Slack/GitHub-compatible)
- **Stage Instances, Stickers, Soundboard, Lobbies, Polls, Voice Regions, OAuth2**

See `src/operations/` for the full list (200+ operations).

## License

MIT
