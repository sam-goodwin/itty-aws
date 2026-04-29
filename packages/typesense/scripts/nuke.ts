#!/usr/bin/env bun
/**
 * Typesense Nuke Script
 *
 * Lists and deletes all resources in a Typesense cluster.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/typesense/scripts/nuke.ts --dry-run
 *   bun packages/typesense/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (three levels up from packages/typesense/scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.TYPESENSE_API_KEY) {
  // Also try CWD/.env as fallback
  config();
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getAliases } from "../src/operations/getAliases.ts";
import { deleteAlias } from "../src/operations/deleteAlias.ts";
import { getCollections } from "../src/operations/getCollections.ts";
import { deleteCollection } from "../src/operations/deleteCollection.ts";
import { getKeys } from "../src/operations/getKeys.ts";
import { deleteKey } from "../src/operations/deleteKey.ts";
import { retrieveSynonymSets } from "../src/operations/retrieveSynonymSets.ts";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet.ts";
import { retrieveCurationSets } from "../src/operations/retrieveCurationSets.ts";
import { deleteCurationSet } from "../src/operations/deleteCurationSet.ts";
import { retrieveAllConversationModels } from "../src/operations/retrieveAllConversationModels.ts";
import { deleteConversationModel } from "../src/operations/deleteConversationModel.ts";
import { retrieveAllNLSearchModels } from "../src/operations/retrieveAllNLSearchModels.ts";
import { deleteNLSearchModel } from "../src/operations/deleteNLSearchModel.ts";
import { retrieveStopwordsSets } from "../src/operations/retrieveStopwordsSets.ts";
import { deleteStopwordsSet } from "../src/operations/deleteStopwordsSet.ts";
import { retrieveAllPresets } from "../src/operations/retrieveAllPresets.ts";
import { deletePreset } from "../src/operations/deletePreset.ts";
import { retrieveAnalyticsRules } from "../src/operations/retrieveAnalyticsRules.ts";
import { deleteAnalyticsRule } from "../src/operations/deleteAnalyticsRule.ts";

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
// Resource handlers
// ============================================================================

const nukeAliases = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Aliases${RESET}`);

    const result = yield* getAliases({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list aliases${RESET}`).pipe(
          Effect.map(() => ({ aliases: [] as ReadonlyArray<{ name: string; collection_name: string }> })),
        ),
      ),
    );

    if (result.aliases.length === 0) {
      yield* Console.log(`  ${DIM}No aliases found${RESET}`);
      return;
    }

    for (const alias of result.aliases) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Alias", alias.name, alias.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Alias: ${alias.name} ${DIM}(-> ${alias.collection_name})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Alias: ${alias.name} ${DIM}(-> ${alias.collection_name})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Alias: ${alias.name} ${DIM}(-> ${alias.collection_name})${RESET}`,
        );
        yield* deleteAlias({ aliasName: alias.name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete alias ${alias.name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeAnalyticsRules = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Analytics Rules${RESET}`);

    const rules = yield* retrieveAnalyticsRules({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list analytics rules${RESET}`).pipe(
          Effect.map(
            () => [] as ReadonlyArray<{ name: string; collection: string; type: string }>,
          ),
        ),
      ),
    );

    if (rules.length === 0) {
      yield* Console.log(`  ${DIM}No analytics rules found${RESET}`);
      return;
    }

    for (const rule of rules) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "AnalyticsRule",
        rule.name,
        rule.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} AnalyticsRule: ${rule.name} ${DIM}(${rule.type}, collection: ${rule.collection})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} AnalyticsRule: ${rule.name} ${DIM}(${rule.type}, collection: ${rule.collection})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} AnalyticsRule: ${rule.name}${RESET}`,
        );
        yield* deleteAnalyticsRule({ ruleName: rule.name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete analytics rule ${rule.name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeSynonymSets = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Synonym Sets${RESET}`);

    const sets = yield* retrieveSynonymSets({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list synonym sets${RESET}`).pipe(
          Effect.map(
            () =>
              [] as ReadonlyArray<{
                name: string;
                items: ReadonlyArray<{ id: string }>;
              }>,
          ),
        ),
      ),
    );

    if (sets.length === 0) {
      yield* Console.log(`  ${DIM}No synonym sets found${RESET}`);
      return;
    }

    for (const set of sets) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "SynonymSet", set.name, set.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} SynonymSet: ${set.name} ${DIM}(${set.items.length} items)${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} SynonymSet: ${set.name} ${DIM}(${set.items.length} items)${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} SynonymSet: ${set.name}${RESET}`,
        );
        yield* deleteSynonymSet({ synonymSetName: set.name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete synonym set ${set.name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeCurationSets = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Curation Sets${RESET}`);

    const sets = yield* retrieveCurationSets({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list curation sets${RESET}`).pipe(
          Effect.map(
            () =>
              [] as ReadonlyArray<{
                name: string;
                items: ReadonlyArray<unknown>;
              }>,
          ),
        ),
      ),
    );

    if (sets.length === 0) {
      yield* Console.log(`  ${DIM}No curation sets found${RESET}`);
      return;
    }

    for (const set of sets) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "CurationSet", set.name, set.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} CurationSet: ${set.name} ${DIM}(${set.items.length} items)${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} CurationSet: ${set.name} ${DIM}(${set.items.length} items)${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} CurationSet: ${set.name}${RESET}`,
        );
        yield* deleteCurationSet({ curationSetName: set.name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete curation set ${set.name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeStopwordsSets = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Stopwords Sets${RESET}`);

    const result = yield* retrieveStopwordsSets({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list stopwords sets${RESET}`).pipe(
          Effect.map(
            () => ({ stopwords: [] as ReadonlyArray<{ id: string }> }),
          ),
        ),
      ),
    );

    if (result.stopwords.length === 0) {
      yield* Console.log(`  ${DIM}No stopwords sets found${RESET}`);
      return;
    }

    for (const set of result.stopwords) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "StopwordsSet", set.id, set.id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} StopwordsSet: ${set.id}${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} StopwordsSet: ${set.id}${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} StopwordsSet: ${set.id}${RESET}`,
        );
        yield* deleteStopwordsSet({ setId: set.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete stopwords set ${set.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukePresets = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Presets${RESET}`);

    const result = yield* retrieveAllPresets({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list presets${RESET}`).pipe(
          Effect.map(
            () => ({ presets: [] as ReadonlyArray<{ name: string }> }),
          ),
        ),
      ),
    );

    if (result.presets.length === 0) {
      yield* Console.log(`  ${DIM}No presets found${RESET}`);
      return;
    }

    for (const preset of result.presets) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Preset", preset.name, preset.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Preset: ${preset.name}${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Preset: ${preset.name}${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Preset: ${preset.name}${RESET}`,
        );
        yield* deletePreset({ presetId: preset.name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete preset ${preset.name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeConversationModels = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Conversation Models${RESET}`);

    const models = yield* retrieveAllConversationModels({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list conversation models${RESET}`).pipe(
          Effect.map(() => [] as ReadonlyArray<{ id: string }>),
        ),
      ),
    );

    if (models.length === 0) {
      yield* Console.log(`  ${DIM}No conversation models found${RESET}`);
      return;
    }

    for (const model of models) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "ConversationModel",
        model.id,
        model.id,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ConversationModel: ${model.id}${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ConversationModel: ${model.id}${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ConversationModel: ${model.id}${RESET}`,
        );
        yield* deleteConversationModel({ modelId: model.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete conversation model ${model.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeNLSearchModels = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}NL Search Models${RESET}`);

    const models = yield* retrieveAllNLSearchModels({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list NL search models${RESET}`).pipe(
          Effect.map(() => [] as ReadonlyArray<{ id: string }>),
        ),
      ),
    );

    if (models.length === 0) {
      yield* Console.log(`  ${DIM}No NL search models found${RESET}`);
      return;
    }

    for (const model of models) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "NLSearchModel",
        model.id,
        model.id,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} NLSearchModel: ${model.id}${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} NLSearchModel: ${model.id}${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} NLSearchModel: ${model.id}${RESET}`,
        );
        yield* deleteNLSearchModel({ modelId: model.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete NL search model ${model.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeCollections = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Collections${RESET}`);

    const collections = yield* getCollections({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list collections${RESET}`).pipe(
          Effect.map(
            () =>
              [] as ReadonlyArray<{
                name: string;
                num_documents: number;
                created_at: number;
              }>,
          ),
        ),
      ),
    );

    if (collections.length === 0) {
      yield* Console.log(`  ${DIM}No collections found${RESET}`);
      return;
    }

    for (const collection of collections) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "Collection",
        collection.name,
        collection.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Collection: ${collection.name} ${DIM}(docs: ${collection.num_documents})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Collection: ${collection.name} ${DIM}(docs: ${collection.num_documents})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Collection: ${collection.name} ${DIM}(docs: ${collection.num_documents})${RESET}`,
        );
        yield* deleteCollection({ collectionName: collection.name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete collection ${collection.name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeKeys = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}API Keys${RESET}`);

    const result = yield* getKeys({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list API keys${RESET}`).pipe(
          Effect.map(
            () => ({
              keys: [] as ReadonlyArray<{
                id?: number;
                description: string;
                value_prefix?: string;
                actions: ReadonlyArray<string>;
              }>,
            }),
          ),
        ),
      ),
    );

    if (result.keys.length === 0) {
      yield* Console.log(`  ${DIM}No API keys found${RESET}`);
      return;
    }

    // Auto-skip the key we're using right now to avoid bricking auth
    const ownKey = process.env.TYPESENSE_API_KEY ?? "";
    const ownPrefix = ownKey.slice(0, 4);

    for (const key of result.keys) {
      // Skip keys without an id (can't delete them anyway)
      if (key.id === undefined) continue;

      totalFound++;
      const idStr = String(key.id);

      // Self-protection: skip the key matching the one we're authenticated with
      if (
        ownPrefix.length > 0 &&
        key.value_prefix !== undefined &&
        key.value_prefix === ownPrefix
      ) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ApiKey: ${key.description} ${DIM}(id: ${key.id}, prefix: ${key.value_prefix})${RESET} — currently authenticated key`,
        );
        continue;
      }

      const excluded = isExcluded(nukeConfig, "ApiKey", idStr, key.description);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ApiKey: ${key.description} ${DIM}(id: ${key.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ApiKey: ${key.description} ${DIM}(id: ${key.id}, actions: ${key.actions.join(",")})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ApiKey: ${key.description} ${DIM}(id: ${key.id})${RESET}`,
        );
        yield* deleteKey({ keyId: key.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete API key ${key.id}${RESET}`,
            );
          }),
        );
      }
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
        `\n${BOLD}Typesense Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Deletion order matters:
      //
      // 1. Aliases — alias points at a collection name; remove first so
      //    a deleted collection can't leave a dangling alias.
      // 2. Analytics rules — reference a source/destination collection.
      // 3. Synonym sets / Curation sets — referenced by collection schemas
      //    but can be deleted independently. Remove before collections.
      // 4. Stopwords sets / Presets / NL search models / Conversation models
      //    — independent resources.
      // 5. Collections — biggest container; documents are removed with the
      //    collection.
      // 6. API keys last (excluding our own) so previous calls retain auth.
      //
      // Note: stemming dictionaries can be listed via listStemmingDictionaries
      // but the Typesense API does not expose a delete endpoint for them, so
      // they are not handled here.

      yield* nukeAliases(config.dryRun, nukeConfig);
      yield* nukeAnalyticsRules(config.dryRun, nukeConfig);
      yield* nukeSynonymSets(config.dryRun, nukeConfig);
      yield* nukeCurationSets(config.dryRun, nukeConfig);
      yield* nukeStopwordsSets(config.dryRun, nukeConfig);
      yield* nukePresets(config.dryRun, nukeConfig);
      yield* nukeNLSearchModels(config.dryRun, nukeConfig);
      yield* nukeConversationModels(config.dryRun, nukeConfig);
      yield* nukeCollections(config.dryRun, nukeConfig);
      yield* nukeKeys(config.dryRun, nukeConfig);

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
).pipe(Command.withDescription("List and delete all Typesense resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
