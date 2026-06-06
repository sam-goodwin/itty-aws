#!/usr/bin/env bun
/**
 * Unkey Nuke Script
 *
 * Lists and deletes all resources discoverable through the Unkey SDK.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/unkey/scripts/nuke.ts --dry-run
 *   bun packages/unkey/scripts/nuke.ts
 *
 * Optional scoped resource discovery:
 *   - Add apiIds to packages/unkey/nuke-config.json or set UNKEY_API_IDS
 *   - Add ratelimitNamespaces to packages/unkey/nuke-config.json or set
 *     UNKEY_RATELIMIT_NAMESPACES
 */
import "dotenv/config";
import { config as loadDotenv } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";
import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import {
  apisDeleteApi,
  apisGetApi,
  apisListKeys,
  CredentialsFromEnv,
  identitiesDeleteIdentity,
  identitiesListIdentities,
  keysDeleteKey,
  permissionsDeletePermission,
  permissionsDeleteRole,
  permissionsListPermissions,
  permissionsListRoles,
  ratelimitDeleteOverride,
  ratelimitListOverrides,
} from "@distilled.cloud/unkey";

const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
loadDotenv({ path: envPath });
if (!process.env.UNKEY_API_KEY) {
  loadDotenv();
}

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
let totalWouldDelete = 0;
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
  apiIds?: string[];
  ratelimitNamespaces?: string[];
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
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name))) {
      return true;
    }
    return false;
  });
}

function splitEnvList(name: string): string[] {
  return (process.env[name] ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
}

function unique(values: readonly string[]): string[] {
  return [...new Set(values)];
}

function configuredApiIds(config: NukeConfig): string[] {
  return unique([...(config.apiIds ?? []), ...splitEnvList("UNKEY_API_IDS")]);
}

function configuredRatelimitNamespaces(config: NukeConfig): string[] {
  return unique([
    ...(config.ratelimitNamespaces ?? []),
    ...splitEnvList("UNKEY_RATELIMIT_NAMESPACES"),
  ]);
}

// ============================================================================
// Helpers
// ============================================================================

type CursorPage<T> = {
  data: readonly T[];
  pagination?: {
    cursor?: string;
    hasMore: boolean;
  };
};

type DeleteEffect = () => Effect.Effect<unknown, unknown, unknown>;

function errorMessage(error: unknown): string {
  if (error && typeof error === "object") {
    const tagged = error as { _tag?: unknown; message?: unknown };
    if (typeof tagged._tag === "string" && typeof tagged.message === "string") {
      return `${tagged._tag}: ${tagged.message}`;
    }
    if (typeof tagged.message === "string") return tagged.message;
  }
  return String(error);
}

function reasonText(rule: ExcludeRule | undefined): string {
  return rule?.reason ?? "excluded";
}

function resourceLine(
  type: string,
  id: string,
  name?: string,
  meta?: string,
): string {
  return `${type}: ${name ?? id} ${DIM}(id: ${id}${meta ? `, ${meta}` : ""})${RESET}`;
}

function listAll<T, E, R>(
  list: (input: Record<string, unknown>) => Effect.Effect<CursorPage<T>, E, R>,
  baseInput: Record<string, unknown> = {},
): Effect.Effect<T[], E, R> {
  return Effect.gen(function* () {
    const items: T[] = [];
    let cursor: string | undefined;

    while (true) {
      const page = yield* list({
        ...baseInput,
        limit: 100,
        ...(cursor ? { cursor } : {}),
      });
      items.push(...page.data);

      if (page.pagination?.hasMore !== true) break;

      const nextCursor = page.pagination.cursor;
      if (!nextCursor || nextCursor === cursor) {
        yield* Console.log(
          `  ${YELLOW}Pagination stopped because the next cursor was missing or unchanged${RESET}`,
        );
        break;
      }
      cursor = nextCursor;
    }

    return items;
  });
}

function safeList<T, R>(
  label: string,
  list: () => Effect.Effect<T[], unknown, R>,
): Effect.Effect<T[], never, R> {
  return list().pipe(
    Effect.catch((error) =>
      Console.log(
        `  ${RED}Failed to list ${label}: ${errorMessage(error)}${RESET}`,
      ).pipe(
        Effect.map(() => {
          totalFailed++;
          return [] as T[];
        }),
      ),
    ),
  );
}

function handleDeletable<R>(opts: {
  dryRun: boolean;
  config: NukeConfig;
  type: string;
  id: string;
  name?: string;
  meta?: string;
  skipReason?: string;
  delete: DeleteEffect;
}): Effect.Effect<void, never, R> {
  return Effect.gen(function* () {
    totalFound++;

    const excluded = opts.skipReason
      ? undefined
      : isExcluded(opts.config, opts.type, opts.id, opts.name);
    const skipReason = opts.skipReason ?? reasonText(excluded);

    if (opts.skipReason || excluded) {
      totalSkipped++;
      yield* Console.log(
        `  ${YELLOW}[SKIP]${RESET} ${resourceLine(opts.type, opts.id, opts.name, opts.meta)} — ${skipReason}`,
      );
      return;
    }

    if (opts.dryRun) {
      totalWouldDelete++;
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} ${resourceLine(opts.type, opts.id, opts.name, opts.meta)}`,
      );
      return;
    }

    yield* Console.log(
      `  ${RED}[DELETE]${RESET} ${resourceLine(opts.type, opts.id, opts.name, opts.meta)}`,
    );
    yield* opts.delete().pipe(
      Effect.map(() => {
        totalDeleted++;
      }),
      Effect.catch((error) => {
        totalFailed++;
        return Console.log(
          `    ${RED}Failed to delete ${opts.type} ${opts.id}: ${errorMessage(error)}${RESET}`,
        );
      }),
    );
  }) as Effect.Effect<void, never, R>;
}

// ============================================================================
// Resource operations
// ============================================================================

const nukeKeysForApi = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  apiId: string,
  skipReason?: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${CYAN}Keys${RESET} ${DIM}(api: ${apiId})${RESET}`,
    );

    const keys = yield* safeList(`keys for API ${apiId}`, () =>
      listAll((input) => apisListKeys(input as any), { apiId }),
    );

    if (keys.length === 0) {
      yield* Console.log(`  ${DIM}No keys found${RESET}`);
      return;
    }

    for (const key of keys) {
      const typed = key as {
        keyId: string;
        name?: string;
        start: string;
        enabled: boolean;
        createdAt: number;
        identity?: { externalId?: string };
        roles?: readonly string[];
        permissions?: readonly string[];
      };

      const meta = [
        `api: ${apiId}`,
        `start: ${typed.start}`,
        `enabled: ${typed.enabled}`,
        typed.identity?.externalId
          ? `identity: ${typed.identity.externalId}`
          : undefined,
        typed.roles?.length ? `roles: ${typed.roles.length}` : undefined,
        typed.permissions?.length
          ? `permissions: ${typed.permissions.length}`
          : undefined,
      ]
        .filter((value): value is string => value !== undefined)
        .join(", ");

      yield* handleDeletable({
        dryRun,
        config: nukeConfig,
        type: "Key",
        id: typed.keyId,
        name: typed.name,
        meta,
        skipReason,
        delete: () => keysDeleteKey({ keyId: typed.keyId, permanent: true }),
      });
    }
  });

const nukeConfiguredApis = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  apiIds: readonly string[],
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}API Namespaces${RESET}`);

    if (apiIds.length === 0) {
      yield* Console.log(
        `  ${DIM}No API ids configured; the Unkey SDK has no list-APIs operation. Set apiIds in nuke-config.json or UNKEY_API_IDS to list keys and delete API namespaces.${RESET}`,
      );
      return;
    }

    for (const apiId of apiIds) {
      const api = yield* apisGetApi({ apiId }).pipe(
        Effect.catch((error) =>
          Console.log(
            `  ${RED}Failed to get API ${apiId}: ${errorMessage(error)}${RESET}`,
          ).pipe(
            Effect.map(() => {
              totalFailed++;
              return undefined;
            }),
          ),
        ),
      );

      const apiName = api?.data.name;
      const apiResourceId = api?.data.id ?? apiId;
      const excluded = api
        ? isExcluded(nukeConfig, "API", apiResourceId, apiName)
        : undefined;
      const skipReason = excluded
        ? `parent API excluded: ${reasonText(excluded)}`
        : undefined;

      yield* nukeKeysForApi(dryRun, nukeConfig, apiId, skipReason);

      if (!api) continue;

      yield* handleDeletable({
        dryRun,
        config: nukeConfig,
        type: "API",
        id: apiResourceId,
        name: apiName,
        meta: "namespace",
        delete: () => apisDeleteApi({ apiId: apiResourceId }),
      });
    }
  });

const nukeRatelimitOverrides = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  namespaces: readonly string[],
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Ratelimit Overrides${RESET}`);

    if (namespaces.length === 0) {
      yield* Console.log(
        `  ${DIM}No ratelimit namespaces configured; the Unkey SDK requires a namespace for ratelimit.listOverrides. Set ratelimitNamespaces in nuke-config.json or UNKEY_RATELIMIT_NAMESPACES.${RESET}`,
      );
      return;
    }

    for (const namespace of namespaces) {
      yield* Console.log(`\n  ${BOLD}Namespace: ${namespace}${RESET}`);
      const overrides = yield* safeList(
        `ratelimit overrides in namespace ${namespace}`,
        () =>
          listAll((input) => ratelimitListOverrides(input as any), {
            namespace,
          }),
      );

      if (overrides.length === 0) {
        yield* Console.log(`  ${DIM}No ratelimit overrides found${RESET}`);
        continue;
      }

      for (const override of overrides) {
        const typed = override as {
          overrideId: string;
          identifier: string;
          limit: number;
          duration: number;
        };
        yield* handleDeletable({
          dryRun,
          config: nukeConfig,
          type: "RatelimitOverride",
          id: typed.overrideId,
          name: typed.identifier,
          meta: `namespace: ${namespace}, limit: ${typed.limit}, duration: ${typed.duration}`,
          delete: () =>
            ratelimitDeleteOverride({
              namespace,
              identifier: typed.identifier,
            }),
        });
      }
    }
  });

const nukeIdentities = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Identities${RESET}`);

    const identities = yield* safeList("identities", () =>
      listAll((input) => identitiesListIdentities(input as any)),
    );

    if (identities.length === 0) {
      yield* Console.log(`  ${DIM}No identities found${RESET}`);
      return;
    }

    for (const identity of identities) {
      const typed = identity as {
        id: string;
        externalId: string;
        ratelimits?: readonly unknown[];
      };
      yield* handleDeletable({
        dryRun,
        config: nukeConfig,
        type: "Identity",
        id: typed.id,
        name: typed.externalId,
        meta: typed.ratelimits?.length
          ? `ratelimits: ${typed.ratelimits.length}`
          : undefined,
        delete: () => identitiesDeleteIdentity({ identity: typed.id }),
      });
    }
  });

const nukeRoles = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Roles${RESET}`);

    const roles = yield* safeList("roles", () =>
      listAll((input) => permissionsListRoles(input as any)),
    );

    if (roles.length === 0) {
      yield* Console.log(`  ${DIM}No roles found${RESET}`);
      return;
    }

    for (const role of roles) {
      const typed = role as {
        id: string;
        name: string;
        description?: string;
        permissions?: readonly unknown[];
      };
      yield* handleDeletable({
        dryRun,
        config: nukeConfig,
        type: "Role",
        id: typed.id,
        name: typed.name,
        meta: typed.permissions?.length
          ? `permissions: ${typed.permissions.length}`
          : undefined,
        delete: () => permissionsDeleteRole({ role: typed.name }),
      });
    }
  });

const nukePermissions = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Permissions${RESET}`);

    const permissions = yield* safeList("permissions", () =>
      listAll((input) => permissionsListPermissions(input as any)),
    );

    if (permissions.length === 0) {
      yield* Console.log(`  ${DIM}No permissions found${RESET}`);
      return;
    }

    for (const permission of permissions) {
      const typed = permission as {
        id: string;
        name: string;
        slug: string;
        description?: string;
      };
      yield* handleDeletable({
        dryRun,
        config: nukeConfig,
        type: "Permission",
        id: typed.id,
        name: typed.name,
        meta: `slug: ${typed.slug}`,
        delete: () => permissionsDeletePermission({ permission: typed.slug }),
      });
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
      const apiIds = configuredApiIds(nukeConfig);
      const ratelimitNamespaces = configuredRatelimitNamespaces(nukeConfig);
      const mode = config.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;

      yield* Console.log(
        `\n${BOLD}Unkey Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all discoverable resources!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Dependency order:
      // 1. Keys before API namespaces and before RBAC/identity resources.
      // 2. Ratelimit overrides before identities/RBAC cleanup.
      // 3. Identities before roles and permissions.
      // 4. Roles before permissions because roles reference permissions.
      yield* nukeConfiguredApis(config.dryRun, nukeConfig, apiIds);
      yield* nukeRatelimitOverrides(
        config.dryRun,
        nukeConfig,
        ratelimitNamespaces,
      );
      yield* nukeIdentities(config.dryRun, nukeConfig);
      yield* nukeRoles(config.dryRun, nukeConfig);
      yield* nukePermissions(config.dryRun, nukeConfig);

      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(`  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`);
      if (config.dryRun) {
        yield* Console.log(
          `  ${RED}Would delete:  ${totalWouldDelete}${RESET}`,
        );
      } else {
        yield* Console.log(`  ${GREEN}Deleted:       ${totalDeleted}${RESET}`);
      }
      yield* Console.log(`  ${RED}Failed:        ${totalFailed}${RESET}`);
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all Unkey resources"));

// ============================================================================
// Entry Point
// ============================================================================

const program = Effect.provide(
  Command.run(nuke, { version: "1.0.0" }),
  BunServices.layer,
) as Effect.Effect<void, unknown, never>;

BunRuntime.runMain(program);
