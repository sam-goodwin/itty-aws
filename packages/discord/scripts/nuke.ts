#!/usr/bin/env bun
/**
 * Discord Nuke Script
 *
 * Lists and deletes resources owned/managed by the authenticated Discord
 * application/bot. Supports --dry-run to preview without deleting.
 *
 * Cleans up:
 *   - Global application commands and application emojis (account-level)
 *   - Per-guild (for every guild the bot is a member of):
 *       guild application commands, scheduled events, auto-moderation rules,
 *       integrations, soundboard sounds, emojis, stickers, templates,
 *       webhooks (owned by this application), channels and roles (when the
 *       bot has permissions to manage them).
 *
 * The script never leaves guilds and never deletes the @everyone role,
 * managed roles, or roles/emojis owned by other integrations.
 *
 * Usage:
 *   bun packages/discord/scripts/nuke.ts --dry-run
 *   bun packages/discord/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (two levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (
  !process.env.DISCORD_BOT_TOKEN &&
  !process.env.DISCORD_TOKEN &&
  !process.env.DISCORD_BEARER_TOKEN
) {
  // Also try CWD/.env as fallback
  config();
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getMyApplication } from "../src/operations/getMyApplication.ts";
import { listMyGuilds } from "../src/operations/listMyGuilds.ts";
import { listApplicationCommands } from "../src/operations/listApplicationCommands.ts";
import { deleteApplicationCommand } from "../src/operations/deleteApplicationCommand.ts";
import { listApplicationEmojis } from "../src/operations/listApplicationEmojis.ts";
import { deleteApplicationEmoji } from "../src/operations/deleteApplicationEmoji.ts";
import { listGuildApplicationCommands } from "../src/operations/listGuildApplicationCommands.ts";
import { deleteGuildApplicationCommand } from "../src/operations/deleteGuildApplicationCommand.ts";
import { listGuildScheduledEvents } from "../src/operations/listGuildScheduledEvents.ts";
import { deleteGuildScheduledEvent } from "../src/operations/deleteGuildScheduledEvent.ts";
import { listAutoModerationRules } from "../src/operations/listAutoModerationRules.ts";
import { deleteAutoModerationRule } from "../src/operations/deleteAutoModerationRule.ts";
import { listGuildIntegrations } from "../src/operations/listGuildIntegrations.ts";
import { deleteGuildIntegration } from "../src/operations/deleteGuildIntegration.ts";
import { listGuildSoundboardSounds } from "../src/operations/listGuildSoundboardSounds.ts";
import { deleteGuildSoundboardSound } from "../src/operations/deleteGuildSoundboardSound.ts";
import { listGuildEmojis } from "../src/operations/listGuildEmojis.ts";
import { deleteGuildEmoji } from "../src/operations/deleteGuildEmoji.ts";
import { listGuildStickers } from "../src/operations/listGuildStickers.ts";
import { deleteGuildSticker } from "../src/operations/deleteGuildSticker.ts";
import { listGuildTemplates } from "../src/operations/listGuildTemplates.ts";
import { deleteGuildTemplate } from "../src/operations/deleteGuildTemplate.ts";
import { getGuildWebhooks } from "../src/operations/getGuildWebhooks.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { listGuildChannels } from "../src/operations/listGuildChannels.ts";
import { deleteChannel } from "../src/operations/deleteChannel.ts";
import { listGuildRoles } from "../src/operations/listGuildRoles.ts";
import { deleteGuildRole } from "../src/operations/deleteGuildRole.ts";

// ANSI colors
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// Counters
let totalFound = 0;
let totalSkipped = 0;
let totalDeleted = 0;
let totalFailed = 0;

// ============================================================================
// Nuke Config
// ============================================================================

interface ExcludeRule {
  type: string;
  ids?: string[];
  namePatterns?: string[];
  reason?: string;
}

interface NukeConfig {
  exclude?: ExcludeRule[];
}

const PKG_DIR = nodePath.resolve(import.meta.dir, "..");

function loadNukeConfig(): NukeConfig {
  const p = nodePath.join(PKG_DIR, "nuke-config.json");
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

function matchGlob(pattern: string, value: string): boolean {
  return new RegExp("^" + pattern.replace(/\*/g, ".*") + "$").test(value);
}

function isExcluded(
  config: NukeConfig,
  type: string,
  id: string,
  name?: string,
): ExcludeRule | undefined {
  return config.exclude?.find((rule) => {
    if (rule.type !== type) return false;
    if (rule.ids?.includes(id)) return true;
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name))) return true;
    return false;
  });
}

// ============================================================================
// Resource operations (application-level)
// ============================================================================

const nukeGlobalCommands = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  applicationId: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Global Application Commands${RESET}`);

    const cmds = yield* listApplicationCommands({
      application_id: applicationId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `  ${RED}Failed to list global application commands${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    if (cmds.length === 0) {
      yield* Console.log(`  ${DIM}No global commands found${RESET}`);
      return;
    }

    for (const cmd of cmds) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "ApplicationCommand",
        cmd.id,
        cmd.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ApplicationCommand: ${cmd.name} ${DIM}(${cmd.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ApplicationCommand: ${cmd.name} ${DIM}(${cmd.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ApplicationCommand: ${cmd.name} ${DIM}(${cmd.id})${RESET}`,
        );
        yield* deleteApplicationCommand({
          application_id: applicationId,
          command_id: cmd.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete command ${cmd.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeApplicationEmojis = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  applicationId: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Application Emojis${RESET}`);

    const result = yield* listApplicationEmojis({
      application_id: applicationId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `  ${RED}Failed to list application emojis${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => ({ items: [] as any[] }),
          ),
        ),
      ),
    );

    const items = result.items ?? [];
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No application emojis found${RESET}`);
      return;
    }

    for (const emoji of items) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "ApplicationEmoji",
        emoji.id,
        emoji.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ApplicationEmoji: ${emoji.name} ${DIM}(${emoji.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ApplicationEmoji: ${emoji.name} ${DIM}(${emoji.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ApplicationEmoji: ${emoji.name} ${DIM}(${emoji.id})${RESET}`,
        );
        yield* deleteApplicationEmoji({
          application_id: applicationId,
          emoji_id: emoji.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete emoji ${emoji.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

// ============================================================================
// Resource operations (guild-level)
// ============================================================================

const nukeGuildCommands = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  applicationId: string,
  guildId: string,
) =>
  Effect.gen(function* () {
    const cmds = yield* listGuildApplicationCommands({
      application_id: applicationId,
      guild_id: guildId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list guild commands for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const cmd of cmds) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "GuildApplicationCommand",
        cmd.id,
        cmd.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} GuildApplicationCommand: ${cmd.name} ${DIM}(${cmd.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GuildApplicationCommand: ${cmd.name} ${DIM}(${cmd.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GuildApplicationCommand: ${cmd.name} ${DIM}(${cmd.id})${RESET}`,
        );
        yield* deleteGuildApplicationCommand({
          application_id: applicationId,
          guild_id: guildId,
          command_id: cmd.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete guild command ${cmd.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeScheduledEvents = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
) =>
  Effect.gen(function* () {
    const events = yield* listGuildScheduledEvents({ guild_id: guildId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list scheduled events for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const evt of events) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const e = evt as any;
      const id = String(e.id ?? "");
      const name = String(e.name ?? "");
      if (!id) continue;

      totalFound++;
      const excluded = isExcluded(nukeConfig, "ScheduledEvent", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} ScheduledEvent: ${name} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} ScheduledEvent: ${name} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} ScheduledEvent: ${name} ${DIM}(${id})${RESET}`,
        );
        yield* deleteGuildScheduledEvent({
          guild_id: guildId,
          guild_scheduled_event_id: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete scheduled event ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeAutoModRules = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
) =>
  Effect.gen(function* () {
    const rules = yield* listAutoModerationRules({ guild_id: guildId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list auto-mod rules for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const rule of rules) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const r = rule as any;
      const id = String(r.id ?? "");
      const name = String(r.name ?? "");
      if (!id) continue;

      totalFound++;
      const excluded = isExcluded(nukeConfig, "AutoModRule", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} AutoModRule: ${name} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} AutoModRule: ${name} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} AutoModRule: ${name} ${DIM}(${id})${RESET}`,
        );
        yield* deleteAutoModerationRule({
          guild_id: guildId,
          rule_id: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete auto-mod rule ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeIntegrations = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
  selfUserId: string | undefined,
) =>
  Effect.gen(function* () {
    const integrations = yield* listGuildIntegrations({
      guild_id: guildId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list integrations for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const integration of integrations) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const i = integration as any;
      const id = String(i.id ?? "");
      const name = String(i.name ?? "");
      const integrationType = String(i.type ?? "");
      const appBotId = i.application?.bot?.id;
      if (!id) continue;

      // Never remove our own bot integration — that would kick the bot.
      if (selfUserId && appBotId && String(appBotId) === selfUserId) {
        yield* Console.log(
          `    ${DIM}[SKIP]${RESET} Integration: ${name} ${DIM}(${id}, type: ${integrationType}) — self bot${RESET}`,
        );
        continue;
      }

      totalFound++;
      const excluded = isExcluded(nukeConfig, "Integration", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Integration: ${name} ${DIM}(${id}, type: ${integrationType})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Integration: ${name} ${DIM}(${id}, type: ${integrationType})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Integration: ${name} ${DIM}(${id}, type: ${integrationType})${RESET}`,
        );
        yield* deleteGuildIntegration({
          guild_id: guildId,
          integration_id: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete integration ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeSoundboardSounds = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
) =>
  Effect.gen(function* () {
    const result = yield* listGuildSoundboardSounds({
      guild_id: guildId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list soundboard sounds for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => ({ items: [] as any[] }),
          ),
        ),
      ),
    );

    for (const sound of result.items ?? []) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "SoundboardSound",
        sound.sound_id,
        sound.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} SoundboardSound: ${sound.name} ${DIM}(${sound.sound_id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} SoundboardSound: ${sound.name} ${DIM}(${sound.sound_id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} SoundboardSound: ${sound.name} ${DIM}(${sound.sound_id})${RESET}`,
        );
        yield* deleteGuildSoundboardSound({
          guild_id: guildId,
          sound_id: sound.sound_id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete soundboard sound ${sound.sound_id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGuildEmojis = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
) =>
  Effect.gen(function* () {
    const emojis = yield* listGuildEmojis({ guild_id: guildId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list emojis for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const emoji of emojis) {
      // Skip managed emojis (owned by integrations)
      if (emoji.managed) continue;
      // Discord allows null id only for unicode emoji which can't be deleted.
      if (!emoji.id) continue;

      totalFound++;
      const excluded = isExcluded(nukeConfig, "GuildEmoji", emoji.id, emoji.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} GuildEmoji: ${emoji.name} ${DIM}(${emoji.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GuildEmoji: ${emoji.name} ${DIM}(${emoji.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GuildEmoji: ${emoji.name} ${DIM}(${emoji.id})${RESET}`,
        );
        yield* deleteGuildEmoji({
          guild_id: guildId,
          emoji_id: emoji.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete emoji ${emoji.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGuildStickers = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
) =>
  Effect.gen(function* () {
    const stickers = yield* listGuildStickers({ guild_id: guildId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list stickers for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const sticker of stickers) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "GuildSticker",
        sticker.id,
        sticker.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} GuildSticker: ${sticker.name} ${DIM}(${sticker.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GuildSticker: ${sticker.name} ${DIM}(${sticker.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GuildSticker: ${sticker.name} ${DIM}(${sticker.id})${RESET}`,
        );
        yield* deleteGuildSticker({
          guild_id: guildId,
          sticker_id: sticker.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete sticker ${sticker.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGuildTemplates = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
) =>
  Effect.gen(function* () {
    const templates = yield* listGuildTemplates({ guild_id: guildId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list templates for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const tpl of templates) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "GuildTemplate", tpl.code, tpl.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} GuildTemplate: ${tpl.name} ${DIM}(${tpl.code})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GuildTemplate: ${tpl.name} ${DIM}(${tpl.code})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GuildTemplate: ${tpl.name} ${DIM}(${tpl.code})${RESET}`,
        );
        yield* deleteGuildTemplate({
          guild_id: guildId,
          code: tpl.code,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete template ${tpl.code}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGuildWebhooks = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
  applicationId: string,
) =>
  Effect.gen(function* () {
    const hooks = yield* getGuildWebhooks({ guild_id: guildId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list webhooks for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const webhook of hooks) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = webhook as any;
      const id = String(w.id ?? "");
      const name = String(w.name ?? "");
      const ownerAppId = w.application_id ? String(w.application_id) : null;
      if (!id) continue;

      // Only delete webhooks owned by this application — touching others would
      // disrupt unrelated integrations.
      if (ownerAppId !== applicationId) {
        yield* Console.log(
          `    ${DIM}[SKIP]${RESET} Webhook: ${name} ${DIM}(${id}, owner: ${ownerAppId ?? "user"}) — not owned by this app${RESET}`,
        );
        continue;
      }

      totalFound++;
      const excluded = isExcluded(nukeConfig, "Webhook", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Webhook: ${name} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Webhook: ${name} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Webhook: ${name} ${DIM}(${id})${RESET}`,
        );
        yield* deleteWebhook({ webhook_id: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete webhook ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGuildChannels = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
) =>
  Effect.gen(function* () {
    const channels = yield* listGuildChannels({ guild_id: guildId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list channels for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    // Sort: leaf channels first, categories last (categories have type 4)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sorted = [...channels].sort((a: any, b: any) => {
      const aIsCat = a?.type === 4 ? 1 : 0;
      const bIsCat = b?.type === 4 ? 1 : 0;
      return aIsCat - bIsCat;
    });

    for (const channel of sorted) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const c = channel as any;
      const id = String(c.id ?? "");
      const name = String(c.name ?? "");
      const type = c.type;
      if (!id) continue;

      totalFound++;
      const excluded = isExcluded(nukeConfig, "Channel", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Channel: ${name} ${DIM}(${id}, type: ${type})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Channel: ${name} ${DIM}(${id}, type: ${type})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Channel: ${name} ${DIM}(${id}, type: ${type})${RESET}`,
        );
        yield* deleteChannel({ channel_id: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete channel ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGuildRoles = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  guildId: string,
) =>
  Effect.gen(function* () {
    const roles = yield* listGuildRoles({ guild_id: guildId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list roles for ${guildId}${RESET}`,
        ).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    for (const role of roles) {
      // The @everyone role has the same id as the guild and cannot be deleted
      if (role.id === guildId) continue;
      // Managed roles are owned by integrations and cannot be deleted directly
      if (role.managed) continue;

      totalFound++;
      const excluded = isExcluded(nukeConfig, "Role", role.id, role.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Role: ${role.name} ${DIM}(${role.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Role: ${role.name} ${DIM}(${role.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Role: ${role.name} ${DIM}(${role.id})${RESET}`,
        );
        yield* deleteGuildRole({
          guild_id: guildId,
          role_id: role.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete role ${role.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGuilds = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  applicationId: string,
  selfUserId: string | undefined,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Guilds${RESET}`);

    const guilds = yield* listMyGuilds({ limit: 200 }).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list guilds${RESET}`).pipe(
          Effect.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            () => [] as any[],
          ),
        ),
      ),
    );

    if (guilds.length === 0) {
      yield* Console.log(`  ${DIM}No guilds found${RESET}`);
      return;
    }

    for (const guild of guilds) {
      yield* Console.log(
        `\n  ${BOLD}Guild: ${guild.name}${RESET} ${DIM}(${guild.id}, owner: ${guild.owner})${RESET}`,
      );

      const guildExcluded = isExcluded(
        nukeConfig,
        "Guild",
        guild.id,
        guild.name,
      );
      const effectiveDryRun = dryRun || !!guildExcluded;
      if (guildExcluded) {
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Guild: ${guild.name} ${DIM}(${guild.id})${RESET} — ${guildExcluded.reason ?? "excluded"} (children listed but not deleted)`,
        );
      }

      // Delete child resources in dependency order. Roles/channels last so
      // earlier ops still have permission and references resolve.
      yield* nukeGuildCommands(
        effectiveDryRun,
        nukeConfig,
        applicationId,
        guild.id,
      );
      yield* nukeScheduledEvents(effectiveDryRun, nukeConfig, guild.id);
      yield* nukeAutoModRules(effectiveDryRun, nukeConfig, guild.id);
      yield* nukeIntegrations(
        effectiveDryRun,
        nukeConfig,
        guild.id,
        selfUserId,
      );
      yield* nukeSoundboardSounds(effectiveDryRun, nukeConfig, guild.id);
      yield* nukeGuildEmojis(effectiveDryRun, nukeConfig, guild.id);
      yield* nukeGuildStickers(effectiveDryRun, nukeConfig, guild.id);
      yield* nukeGuildTemplates(effectiveDryRun, nukeConfig, guild.id);
      yield* nukeGuildWebhooks(
        effectiveDryRun,
        nukeConfig,
        guild.id,
        applicationId,
      );
      yield* nukeGuildChannels(effectiveDryRun, nukeConfig, guild.id);
      yield* nukeGuildRoles(effectiveDryRun, nukeConfig, guild.id);
    }
  });

// ============================================================================
// Main command
// ============================================================================

const nuke = Command.make(
  "nuke",
  {
    dryRun: Flag.boolean("dry-run").pipe(
      Flag.withDescription("Only list resources without deleting them"),
      Flag.withDefault(false),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const nukeConfig = loadNukeConfig();
      const mode = config.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Discord Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE bot-owned resources across every guild the bot is a member of!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Resolve the application id (and self bot id, where available).
      const app = yield* getMyApplication({}).pipe(
        Effect.catch((err) => {
          console.error(
            `${RED}Failed to resolve current application via /applications/@me${RESET}`,
          );
          return Effect.fail(err);
        }),
      );

      const applicationId = app.id;
      const selfUserId = app.bot?.id;

      yield* Console.log(
        `${DIM}Application: ${app.name} (${applicationId}); bot user id: ${selfUserId ?? "<unknown>"}${RESET}`,
      );

      // 1. Application-level resources
      yield* nukeGlobalCommands(config.dryRun, nukeConfig, applicationId);
      yield* nukeApplicationEmojis(config.dryRun, nukeConfig, applicationId);

      // 2. Guild-level resources (per guild the bot is in)
      yield* nukeGuilds(config.dryRun, nukeConfig, applicationId, selfUserId);

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(
        `  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`,
      );
      if (!config.dryRun) {
        yield* Console.log(
          `  ${GREEN}Deleted:       ${totalDeleted}${RESET}`,
        );
        if (totalFailed > 0) {
          yield* Console.log(
            `  ${RED}Failed:        ${totalFailed}${RESET}`,
          );
        }
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(
  Command.withDescription(
    "List and delete all Discord resources owned by the authenticated bot/application",
  ),
);

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
