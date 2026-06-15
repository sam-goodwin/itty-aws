#!/usr/bin/env bun
/**
 * Resend Nuke Script
 *
 * Lists and deletes all resources in a Resend account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/resend/scripts/nuke.ts --dry-run
 *   bun packages/resend/scripts/nuke.ts
 *
 * Exclusions may be configured via packages/resend/nuke-config.json.
 *
 * NOTES:
 *  - API keys are deleted last so that auth survives the rest of the run.
 *  - The currently-used API key cannot be reliably identified from the env
 *    (the env var holds the raw `re_...` secret while listApiKeys returns a
 *    UUID). Use nuke-config.json to protect specific key IDs/names.
 *  - Read-only listings are emitted for Emails, Email Receiving, Logs and
 *    Contact Imports — these resources cannot be deleted via the API.
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from package dir, then repo root, then CWD.
const PKG_DIR = nodePath.resolve(import.meta.dir, "..");
config({ path: nodePath.join(PKG_DIR, ".env") });
config({ path: nodePath.resolve(PKG_DIR, "../../.env") });
if (!process.env.RESEND_API_KEY) config();

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";

// List operations
import { listDomains } from "../src/operations/listDomains.ts";
import { listApiKeys } from "../src/operations/listApiKeys.ts";
import { listTemplates } from "../src/operations/listTemplates.ts";
import { listContacts } from "../src/operations/listContacts.ts";
import { listContactImports } from "../src/operations/listContactImports.ts";
import { listBroadcasts } from "../src/operations/listBroadcasts.ts";
import { listWebhooks } from "../src/operations/listWebhooks.ts";
import { listSegments } from "../src/operations/listSegments.ts";
import { listTopics } from "../src/operations/listTopics.ts";
import { listContactProperties } from "../src/operations/listContactProperties.ts";
import { listAutomations } from "../src/operations/listAutomations.ts";
import { listEvents } from "../src/operations/listEvents.ts";
import { listEmails } from "../src/operations/listEmails.ts";
import { listEmailReceiving } from "../src/operations/listEmailReceiving.ts";
import { listLogs } from "../src/operations/listLogs.ts";

// Delete operations
import { deleteDomain } from "../src/operations/deleteDomain.ts";
import { deleteApiKey } from "../src/operations/deleteApiKey.ts";
import { deleteTemplate } from "../src/operations/deleteTemplate.ts";
import { deleteContact } from "../src/operations/deleteContact.ts";
import { deleteBroadcast } from "../src/operations/deleteBroadcast.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { deleteSegment } from "../src/operations/deleteSegment.ts";
import { deleteTopic } from "../src/operations/deleteTopic.ts";
import { deleteContactProperty } from "../src/operations/deleteContactProperty.ts";
import { deleteAutomation } from "../src/operations/deleteAutomation.ts";
import { deleteEvent } from "../src/operations/deleteEvent.ts";

// ============================================================================
// ANSI colors
// ============================================================================

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// ============================================================================
// Counters
// ============================================================================

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

function loadNukeConfig(): NukeConfig {
  const p = nodePath.join(PKG_DIR, "nuke-config.json");
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, "utf-8")) as NukeConfig;
}

function matchGlob(pattern: string, value: string): boolean {
  return new RegExp(
    "^" + pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$",
  ).test(value);
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
// Helpers
// ============================================================================

type DeleteEffect = Effect.Effect<unknown, unknown, never>;

const deleteOne = (
  dryRun: boolean,
  type: string,
  label: string,
  id: string,
  name: string | undefined,
  nukeConfig: NukeConfig,
  del: () => DeleteEffect,
  indent = "  ",
) =>
  Effect.gen(function* () {
    totalFound++;
    const excluded = isExcluded(nukeConfig, type, id, name);
    if (excluded) {
      totalSkipped++;
      yield* Console.log(
        `${indent}${YELLOW}[SKIP]${RESET} ${type}: ${label} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
      );
      return;
    }

    yield* Console.log(
      `${indent}${RED}[DELETE]${RESET} ${type}: ${label} ${DIM}(${id})${RESET}`,
    );

    if (dryRun) return;

    yield* del().pipe(
      Effect.andThen(() => {
        totalDeleted++;
      }),
      Effect.catch((e) => {
        totalFailed++;
        return Console.log(
          `${indent}  ${RED}Failed to delete ${type} ${id}: ${String(e)}${RESET}`,
        );
      }),
    );
  });

// Paginate a list operation that returns { data?, has_more? }, using the last
// item's id as the `after` cursor. Hard cap at 1000 pages to avoid infinite
// loops if the API ever lies about has_more.
const paginate = <T extends { id?: string }>(
  list: (input: {
    limit?: number;
    after?: string;
  }) => Effect.Effect<
    { data?: readonly T[] | undefined; has_more?: boolean | undefined },
    unknown,
    never
  >,
): Effect.Effect<T[], unknown, never> =>
  Effect.gen(function* () {
    const all: T[] = [];
    let after: string | undefined;
    for (let i = 0; i < 1000; i++) {
      const res = yield* list({ limit: 100, after });
      const data = res.data ?? [];
      for (const item of data) all.push(item);
      if (!res.has_more || data.length === 0) break;
      const last = data[data.length - 1];
      if (!last?.id) break;
      after = last.id;
    }
    return all;
  });

const safeListMessage = (resource: string) => (e: unknown) =>
  Console.log(`  ${RED}Failed to list ${resource}: ${String(e)}${RESET}`);

// ============================================================================
// Per-resource nukers
// ============================================================================

const nukeWebhooks = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Webhooks${RESET}`);
    const items = yield* paginate(listWebhooks).pipe(
      Effect.catch((e) =>
        safeListMessage("webhooks")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No webhooks found${RESET}`);
      return;
    }
    for (const w of items) {
      if (!w.id) continue;
      yield* deleteOne(
        dryRun,
        "Webhook",
        w.endpoint ?? w.id,
        w.id,
        w.endpoint,
        nukeConfig,
        () => deleteWebhook({ webhook_id: w.id! }),
      );
    }
  });

const nukeBroadcasts = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Broadcasts${RESET}`);
    const items = yield* paginate(listBroadcasts).pipe(
      Effect.catch((e) =>
        safeListMessage("broadcasts")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No broadcasts found${RESET}`);
      return;
    }
    for (const b of items) {
      if (!b.id) continue;
      // Resend won't let you delete a broadcast that has already been sent.
      // We still attempt and let the API return the error.
      yield* deleteOne(
        dryRun,
        "Broadcast",
        b.name ?? b.id,
        b.id,
        b.name,
        nukeConfig,
        () => deleteBroadcast({ id: b.id! }),
      );
    }
  });

const nukeAutomations = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Automations${RESET}`);
    const items = yield* paginate(listAutomations).pipe(
      Effect.catch((e) =>
        safeListMessage("automations")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No automations found${RESET}`);
      return;
    }
    for (const a of items) {
      if (!a.id) continue;
      yield* deleteOne(
        dryRun,
        "Automation",
        a.name ?? a.id,
        a.id,
        a.name,
        nukeConfig,
        () => deleteAutomation({ automation_id: a.id! }),
      );
    }
  });

const nukeContacts = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Contacts${RESET}`);
    // listContacts has no `has_more` field in the schema, so paginate may stop
    // after one page. That's still fine — Resend caps page size at 100 and we
    // re-run pages by id when has_more is reported.
    const items = yield* paginate(listContacts as any).pipe(
      Effect.catch((e) =>
        safeListMessage("contacts")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No contacts found${RESET}`);
      return;
    }
    for (const c of items) {
      if (!c.id) continue;
      yield* deleteOne(
        dryRun,
        "Contact",
        c.email ?? c.id,
        c.id,
        c.email,
        nukeConfig,
        () => deleteContact({ id: c.id! }),
      );
    }
  });

const nukeSegments = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Segments${RESET}`);
    const items = yield* paginate(listSegments).pipe(
      Effect.catch((e) =>
        safeListMessage("segments")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No segments found${RESET}`);
      return;
    }
    for (const s of items) {
      if (!s.id) continue;
      yield* deleteOne(
        dryRun,
        "Segment",
        s.name ?? s.id,
        s.id,
        s.name,
        nukeConfig,
        () => deleteSegment({ id: s.id! }),
      );
    }
  });

const nukeTopics = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Topics${RESET}`);
    const items = yield* paginate(listTopics).pipe(
      Effect.catch((e) =>
        safeListMessage("topics")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No topics found${RESET}`);
      return;
    }
    for (const t of items) {
      if (!t.id) continue;
      yield* deleteOne(
        dryRun,
        "Topic",
        t.name ?? t.id,
        t.id,
        t.name,
        nukeConfig,
        () => deleteTopic({ id: t.id! }),
      );
    }
  });

const nukeContactProperties = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Contact Properties${RESET}`);
    const items = yield* paginate(listContactProperties).pipe(
      Effect.catch((e) =>
        safeListMessage("contact properties")(e).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No contact properties found${RESET}`);
      return;
    }
    for (const p of items) {
      if (!p.id) continue;
      yield* deleteOne(
        dryRun,
        "ContactProperty",
        p.key ?? p.id,
        p.id,
        p.key,
        nukeConfig,
        () => deleteContactProperty({ id: p.id! }),
      );
    }
  });

const nukeTemplates = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Templates${RESET}`);
    const items = yield* paginate(listTemplates as any).pipe(
      Effect.catch((e) =>
        safeListMessage("templates")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No templates found${RESET}`);
      return;
    }
    for (const t of items) {
      if (!t.id) continue;
      yield* deleteOne(
        dryRun,
        "Template",
        t.name ?? t.alias ?? t.id,
        t.id,
        t.name ?? t.alias,
        nukeConfig,
        () => deleteTemplate({ id: t.id! }),
      );
    }
  });

const nukeEvents = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Events${RESET}`);
    const items = yield* paginate(listEvents).pipe(
      Effect.catch((e) =>
        safeListMessage("events")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No events found${RESET}`);
      return;
    }
    for (const e of items) {
      if (!e.id) continue;
      yield* deleteOne(
        dryRun,
        "Event",
        e.name ?? e.id,
        e.id,
        e.name,
        nukeConfig,
        // The deleteEvent op accepts identifier = UUID or name.
        () => deleteEvent({ identifier: e.id! }),
      );
    }
  });

const nukeDomains = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Domains${RESET}`);
    const items = yield* paginate(listDomains).pipe(
      Effect.catch((e) =>
        safeListMessage("domains")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No domains found${RESET}`);
      return;
    }
    for (const d of items) {
      if (!d.id) continue;
      yield* deleteOne(
        dryRun,
        "Domain",
        d.name ?? d.id,
        d.id,
        d.name,
        nukeConfig,
        () => deleteDomain({ domain_id: d.id! }),
      );
    }
  });

const nukeApiKeys = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}API Keys${RESET}`);
    yield* Console.log(
      `  ${DIM}Note: the active key cannot be auto-detected. Use nuke-config.json to protect specific keys.${RESET}`,
    );
    const items = yield* paginate(listApiKeys as any).pipe(
      Effect.catch((e) =>
        safeListMessage("api keys")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No API keys found${RESET}`);
      return;
    }
    for (const k of items) {
      if (!k.id) continue;
      yield* deleteOne(
        dryRun,
        "ApiKey",
        k.name ?? k.id,
        k.id,
        k.name,
        nukeConfig,
        () => deleteApiKey({ api_key_id: k.id! }),
      );
    }
  });

// ============================================================================
// Read-only listings (no delete API)
// ============================================================================

const listEmailsReadOnly = () =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${CYAN}Emails${RESET} ${DIM}(list-only; historical emails cannot be deleted)${RESET}`,
    );
    const items = yield* paginate(listEmails).pipe(
      Effect.catch((e) =>
        safeListMessage("emails")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No emails found${RESET}`);
      return;
    }
    for (const e of items.slice(0, 25)) {
      yield* Console.log(
        `  ${DIM}- ${e.subject ?? "(no subject)"} → ${(e.to ?? []).join(", ")} ${DIM}(${e.id})${RESET}`,
      );
    }
    if (items.length > 25) {
      yield* Console.log(
        `  ${DIM}... and ${items.length - 25} more${RESET}`,
      );
    }
  });

const listEmailReceivingReadOnly = () =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${CYAN}Email Receiving${RESET} ${DIM}(list-only; received emails cannot be deleted via API)${RESET}`,
    );
    const items = yield* paginate(listEmailReceiving as any).pipe(
      Effect.catch((e) =>
        safeListMessage("email receiving")(e).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No received emails found${RESET}`);
      return;
    }
    yield* Console.log(`  ${DIM}${items.length} received email(s)${RESET}`);
  });

const listContactImportsReadOnly = () =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${CYAN}Contact Imports${RESET} ${DIM}(list-only; no delete API)${RESET}`,
    );
    const items = yield* paginate(listContactImports).pipe(
      Effect.catch((e) =>
        safeListMessage("contact imports")(e).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No contact imports found${RESET}`);
      return;
    }
    for (const ci of items) {
      yield* Console.log(
        `  ${DIM}- ${ci.id} status=${ci.status}${RESET}`,
      );
    }
  });

const listLogsReadOnly = () =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${CYAN}Logs${RESET} ${DIM}(list-only; no delete API)${RESET}`,
    );
    const items = yield* paginate(listLogs as any).pipe(
      Effect.catch((e) =>
        safeListMessage("logs")(e).pipe(Effect.map(() => [] as any[])),
      ),
    );
    yield* Console.log(`  ${DIM}${items.length} log entr(ies)${RESET}`);
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
  (cfg) =>
    Effect.gen(function* () {
      const nukeConfig = loadNukeConfig();
      const mode = cfg.dryRun ? `${YELLOW}DRY RUN${RESET}` : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Resend Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!cfg.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources in the Resend account!${RESET}`,
        );
        yield* Console.log(
          `${DIM}Past emails, received emails, contact imports and logs are listed only — they have no delete API.${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Deletion order (leaves → roots):
      // 1. Webhooks (independent, ephemeral integrations)
      yield* nukeWebhooks(cfg.dryRun, nukeConfig);
      // 2. Broadcasts (reference templates / segments / topics / audiences)
      yield* nukeBroadcasts(cfg.dryRun, nukeConfig);
      // 3. Automations (reference templates / topics)
      yield* nukeAutomations(cfg.dryRun, nukeConfig);
      // 4. Contacts (members of segments/topics)
      yield* nukeContacts(cfg.dryRun, nukeConfig);
      // 5. Segments (after broadcasts & contacts that reference them)
      yield* nukeSegments(cfg.dryRun, nukeConfig);
      // 6. Topics (after broadcasts/automations/contacts that reference them)
      yield* nukeTopics(cfg.dryRun, nukeConfig);
      // 7. Contact Properties (after contacts)
      yield* nukeContactProperties(cfg.dryRun, nukeConfig);
      // 8. Templates (after broadcasts/automations that reference them)
      yield* nukeTemplates(cfg.dryRun, nukeConfig);
      // 9. Events (event schema registry)
      yield* nukeEvents(cfg.dryRun, nukeConfig);
      // 10. Domains (after broadcasts/emails that reference them)
      yield* nukeDomains(cfg.dryRun, nukeConfig);
      // 11. API Keys LAST so auth survives the run
      yield* nukeApiKeys(cfg.dryRun, nukeConfig);

      // Read-only listings — never deleted, just shown for visibility.
      yield* listEmailsReadOnly();
      yield* listEmailReceivingReadOnly();
      yield* listContactImportsReadOnly();
      yield* listLogsReadOnly();

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(`  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`);
      if (!cfg.dryRun) {
        yield* Console.log(`  ${GREEN}Deleted:       ${totalDeleted}${RESET}`);
        if (totalFailed > 0) {
          yield* Console.log(`  ${RED}Failed:        ${totalFailed}${RESET}`);
        }
      } else {
        yield* Console.log(
          `  ${DIM}(dry-run: no deletions performed)${RESET}`,
        );
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all Resend resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
