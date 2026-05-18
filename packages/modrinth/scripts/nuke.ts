#!/usr/bin/env bun
/**
 * Modrinth Nuke Script
 *
 * Lists and deletes all resources owned by the authenticated Modrinth user.
 * Supports --dry-run to preview without deleting.
 *
 * Resources nuked (in dependency order):
 *   1. Versions     — child of Project; deleted first so projects with
 *                     external dependents can be removed cleanly.
 *   2. Projects     — owned by the authed user (DELETE /project/{id_or_slug}).
 *   3. FollowedProject — unfollow each followed project.
 *   4. Notifications — delete each notification on the authed user.
 *
 * Usage:
 *   bun packages/modrinth/scripts/nuke.ts --dry-run
 *   bun packages/modrinth/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (three levels up from scripts/), then CWD as fallback.
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.MODRINTH_API_KEY) {
  config();
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getUserFromAuth } from "../src/operations/getUserFromAuth.ts";
import { getUserProjects } from "../src/operations/getUserProjects.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { deleteVersion } from "../src/operations/deleteVersion.ts";
import { deleteProject } from "../src/operations/deleteProject.ts";
import { getFollowedProjects } from "../src/operations/getFollowedProjects.ts";
import { unfollowProject } from "../src/operations/unfollowProject.ts";
import { getUserNotifications } from "../src/operations/getUserNotifications.ts";
import { deleteNotification } from "../src/operations/deleteNotification.ts";

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
// Resource operations
// ============================================================================

const nukeProjectVersions = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  projectId: string,
  projectSlug: string,
) =>
  Effect.gen(function* () {
    const versions = yield* getProjectVersions({ id_or_slug: projectId }).pipe(
      Effect.catch(() =>
        Console.log(
          `      ${RED}Failed to list versions for project ${projectSlug}${RESET}`,
        ).pipe(Effect.map(() => [] as any[])),
      ),
    );

    if (versions.length === 0) {
      yield* Console.log(`      ${DIM}No versions${RESET}`);
      return;
    }

    for (const version of versions) {
      const versionId = version.id ?? "unknown";
      const versionName = version.version_number ?? version.name ?? "unknown";
      totalFound++;

      const excluded = isExcluded(
        nukeConfig,
        "Version",
        versionId,
        versionName,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `      ${YELLOW}[SKIP]${RESET} Version: ${versionName} ${DIM}(id: ${versionId}, project: ${projectSlug})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} Version: ${versionName} ${DIM}(id: ${versionId}, status: ${version.status ?? "unknown"})${RESET}`,
        );
      } else {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} Version: ${versionName} ${DIM}(id: ${versionId})${RESET}`,
        );
        yield* deleteVersion({ id: versionId }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch((err) => {
            totalFailed++;
            return Console.log(
              `        ${RED}Failed to delete version ${versionId}: ${(err as any)?._tag ?? "unknown"}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeProjects = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  userId: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Projects${RESET}`);

    const projects = yield* getUserProjects({ id_or_username: userId }).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list user projects${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (projects.length === 0) {
      yield* Console.log(`  ${DIM}No projects found${RESET}`);
      return;
    }

    // Pass 1: delete all versions for each project (so dependents don't block).
    yield* Console.log(
      `\n  ${BOLD}${CYAN}→ Pass 1: Versions (children of projects)${RESET}`,
    );
    for (const project of projects) {
      const projectId = project.id ?? "unknown";
      const projectSlug =
        (project as any).slug ?? (project as any).title ?? projectId;
      yield* Console.log(
        `\n    ${BOLD}Project: ${projectSlug}${RESET} ${DIM}(id: ${projectId})${RESET}`,
      );
      yield* nukeProjectVersions(
        dryRun,
        nukeConfig,
        projectId,
        String(projectSlug),
      );
    }

    // Pass 2: delete the projects themselves.
    yield* Console.log(
      `\n  ${BOLD}${CYAN}→ Pass 2: Projects${RESET}`,
    );
    for (const project of projects) {
      const projectId = project.id ?? "unknown";
      const projectSlug =
        (project as any).slug ?? (project as any).title ?? projectId;
      const projectName = (project as any).title ?? String(projectSlug);
      totalFound++;

      const excluded = isExcluded(
        nukeConfig,
        "Project",
        projectId,
        String(projectSlug),
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Project: ${projectName} ${DIM}(id: ${projectId}, slug: ${projectSlug})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Project: ${projectName} ${DIM}(id: ${projectId}, slug: ${projectSlug})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Project: ${projectName} ${DIM}(id: ${projectId})${RESET}`,
        );
        yield* deleteProject({ id_or_slug: projectId }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch((err) => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete project ${projectSlug}: ${(err as any)?._tag ?? "unknown"} ${(err as any)?.message ?? ""}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeFollowedProjects = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  userId: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Followed Projects${RESET}`);

    const follows = yield* getFollowedProjects({
      id_or_username: userId,
    }).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list followed projects${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (follows.length === 0) {
      yield* Console.log(`  ${DIM}No followed projects${RESET}`);
      return;
    }

    for (const project of follows) {
      const projectId = project.id ?? "unknown";
      const projectSlug =
        (project as any).slug ?? (project as any).title ?? projectId;
      totalFound++;

      const excluded = isExcluded(
        nukeConfig,
        "FollowedProject",
        projectId,
        String(projectSlug),
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} FollowedProject: ${projectSlug} ${DIM}(id: ${projectId})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[UNFOLLOW]${RESET} FollowedProject: ${projectSlug} ${DIM}(id: ${projectId})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[UNFOLLOW]${RESET} FollowedProject: ${projectSlug} ${DIM}(id: ${projectId})${RESET}`,
        );
        yield* unfollowProject({ id_or_slug: projectId }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch((err) => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to unfollow project ${projectSlug}: ${(err as any)?._tag ?? "unknown"}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeNotifications = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  userId: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Notifications${RESET}`);

    const notifications = yield* getUserNotifications({
      id_or_username: userId,
    }).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list notifications${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (notifications.length === 0) {
      yield* Console.log(`  ${DIM}No notifications${RESET}`);
      return;
    }

    for (const notification of notifications) {
      const notificationId = notification.id ?? "unknown";
      const title = notification.title ?? "(untitled)";
      totalFound++;

      const excluded = isExcluded(
        nukeConfig,
        "Notification",
        notificationId,
        title,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Notification: ${title} ${DIM}(id: ${notificationId})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Notification: ${title} ${DIM}(id: ${notificationId}, type: ${notification.type ?? "unknown"}, read: ${notification.read})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Notification: ${title} ${DIM}(id: ${notificationId})${RESET}`,
        );
        yield* deleteNotification({ id: notificationId }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch((err) => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete notification ${notificationId}: ${(err as any)?._tag ?? "unknown"}${RESET}`,
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
  (cfg) =>
    Effect.gen(function* () {
      const nukeConfig = loadNukeConfig();
      const mode = cfg.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Modrinth Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!cfg.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources owned by the authed user!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Resolve the authenticated user — every list endpoint we use is keyed on
      // the user's id (or username). Without a token this 404s/401s and we abort.
      const me = yield* getUserFromAuth({}).pipe(
        Effect.catch((err) =>
          Console.log(
            `${RED}Failed to resolve authed user: ${(err as any)?._tag ?? "unknown"} ${(err as any)?.message ?? ""}${RESET}\n${DIM}Set MODRINTH_API_KEY to a valid PAT and re-run.${RESET}`,
          ).pipe(Effect.andThen(() => Effect.fail("no-auth" as const))),
        ),
      );

      yield* Console.log(
        `${DIM}Authenticated as: ${me.username} (id: ${me.id}, role: ${me.role})${RESET}`,
      );

      // Dependency order: versions before projects (children first), then
      // independent resources (follows, notifications).
      yield* nukeProjects(cfg.dryRun, nukeConfig, me.id);
      yield* nukeFollowedProjects(cfg.dryRun, nukeConfig, me.id);
      yield* nukeNotifications(cfg.dryRun, nukeConfig, me.id);

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(
        `  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`,
      );
      if (!cfg.dryRun) {
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
      Effect.catch((err) =>
        err === "no-auth"
          ? Effect.void
          : Console.log(
              `${RED}Unexpected failure: ${String((err as any)?.message ?? err)}${RESET}`,
            ),
      ),
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all Modrinth resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
