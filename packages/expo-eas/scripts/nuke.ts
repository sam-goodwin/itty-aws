#!/usr/bin/env bun
/**
 * EAS (Expo Application Services) Nuke Script
 *
 * Lists and (where supported) deletes all resources in an Expo / EAS account.
 *
 * Usage:
 *   bun packages/eas/scripts/nuke.ts --dry-run
 *   bun packages/eas/scripts/nuke.ts
 *
 * The EAS backend is a single GraphQL endpoint. The generated SDK exposes
 * one operation per top-level Query/Mutation field. The most useful entry
 * point for enumeration is the `viewer` query — it returns the authenticated
 * user, all of the accounts they're a member of, and a comprehensive set of
 * sub-resources hanging off each account (access tokens, signing certs, push
 * keys, App Store Connect API keys, Google service-account keys, GitHub app
 * installations, Convex/LogRocket/Sentry/Vexo integrations, pending user
 * invitations, …) plus the user's pinned apps and their per-app integrations
 * (devDomainName, githubBuildTriggers, githubJobRunTriggers, githubRepository,
 * githubRepositorySettings, sentryProject, logRocketProject, vexoApp,
 * appStoreConnectApp, convexProject, workerCustomDomain, …) and the user's
 * second-factor devices.
 *
 * IMPORTANT — Deletion limitations:
 *
 * The EAS GraphQL API performs deletes via "wrapper" mutations:
 *
 *   mutation { appleDistributionCertificate { delete(id: $id) { id } } }
 *
 * The current code generator emits one operation per top-level field but
 * does NOT expose the inner sub-mutations (.delete, .deleteAsync, …) as
 * standalone operations. That means there is no typed delete operation
 * available on the SDK surface for most resources. We therefore enumerate
 * everything via `viewer` and, in live mode, log each candidate as
 * "[DELETE-UNSUPPORTED]" rather than calling a wrapper that would either
 * be a no-op (empty selection set) or invoke an unrelated baked-in
 * destructive mutation (e.g. `me { scheduleCurrentUserDeletion }`).
 *
 * In --dry-run mode the script prints every resource it would consider
 * deleting; this is the primary, safe-to-run mode.
 */
import "dotenv/config";
import * as fs from "node:fs";
import * as nodePath from "node:path";

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";

import { CredentialsFromEnv } from "../src/credentials.ts";
import { viewer } from "../src/operations/viewer.ts";

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
let totalUnsupported = 0;
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
// Resource processing helper
// ============================================================================

const processResource = (
  type: string,
  id: string,
  name: string | undefined,
  meta: string | undefined,
  indent: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    totalFound++;
    const excluded = isExcluded(nukeConfig, type, id, name);
    const display = `${type}: ${name ?? id}${
      meta ? ` ${DIM}(${meta})${RESET}` : name ? ` ${DIM}(${id})${RESET}` : ""
    }`;
    if (excluded) {
      totalSkipped++;
      yield* Console.log(
        `${indent}${YELLOW}[SKIP]${RESET} ${display} — ${
          excluded.reason ?? "excluded"
        }`,
      );
      return;
    }

    if (dryRun) {
      yield* Console.log(`${indent}${RED}[DELETE]${RESET} ${display}`);
      return;
    }

    // Live mode: the generated SDK does not expose typed delete operations
    // for these resources (see header comment). Log instead of attempting
    // a destructive call that would either be a no-op or invoke an unrelated
    // baked-in mutation.
    totalUnsupported++;
    yield* Console.log(
      `${indent}${YELLOW}[DELETE-UNSUPPORTED]${RESET} ${display} — no typed delete operation in generated SDK`,
    );
  });

// ============================================================================
// Viewer-based enumeration
// ============================================================================

interface ResourceWithId {
  readonly id: string;
}
interface ResourceWithName {
  readonly id: string;
  readonly name: string;
}

const nukeViewer = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Fetching viewer + accounts${RESET}`);

    const v = yield* viewer({}).pipe(
      Effect.catch((err) =>
        Console.log(
          `  ${RED}Failed to query viewer: ${String(
            (err as { message?: string })?.message ?? err,
          )}${RESET}`,
        ).pipe(Effect.map(() => null)),
      ),
    );

    if (!v) {
      return;
    }

    yield* Console.log(
      `  ${DIM}Viewer: ${v.username} (${v.email}, id: ${v.id})${RESET}`,
    );

    // ---- Viewer-scoped: access tokens (the user's own) ----
    if (v.accessTokens.length > 0) {
      yield* Console.log(`\n${BOLD}${CYAN}Viewer Access Tokens${RESET}`);
      for (const t of v.accessTokens) {
        yield* processResource(
          "AccessToken",
          t.id,
          t.note ?? t.visibleTokenPrefix,
          `prefix: ${t.visibleTokenPrefix}, lastUsedAt: ${t.lastUsedAt ?? "—"}`,
          "  ",
          dryRun,
          nukeConfig,
        );
      }
    }

    // ---- Viewer-scoped: second-factor devices ----
    if (v.secondFactorDevices.length > 0) {
      yield* Console.log(`\n${BOLD}${CYAN}Second Factor Devices${RESET}`);
      for (const d of v.secondFactorDevices) {
        yield* processResource(
          "SecondFactorDevice",
          d.id,
          d.name,
          `method: ${d.method}, primary: ${d.isPrimary}`,
          "  ",
          dryRun,
          nukeConfig,
        );
      }
    }

    // ---- Viewer-scoped: pending user invitations ----
    if (v.pendingUserInvitations.length > 0) {
      yield* Console.log(`\n${BOLD}${CYAN}Pending User Invitations${RESET}`);
      for (const inv of v.pendingUserInvitations) {
        yield* processResource(
          "UserInvitation",
          inv.id,
          inv.email,
          `account: ${inv.accountName}, role: ${inv.role}`,
          "  ",
          dryRun,
          nukeConfig,
        );
      }
    }

    // ---- Per-account resources ----
    for (const acc of v.accounts) {
      yield* Console.log(
        `\n${BOLD}Account: ${acc.name}${RESET} ${DIM}(${acc.id}, displayName: ${
          acc.displayName ?? "—"
        })${RESET}`,
      );

      const child = (
        label: string,
        items: ReadonlyArray<ResourceWithId>,
        type: string,
        nameOf?: (r: ResourceWithId) => string | undefined,
        metaOf?: (r: ResourceWithId) => string | undefined,
      ) =>
        Effect.gen(function* () {
          if (items.length === 0) return;
          yield* Console.log(`  ${CYAN}${label}${RESET}`);
          for (const item of items) {
            yield* processResource(
              type,
              item.id,
              nameOf?.(item),
              metaOf?.(item),
              "    ",
              dryRun,
              nukeConfig,
            );
          }
        });

      yield* child(
        "Account Access Tokens",
        acc.accessTokens.filter((t): t is NonNullable<typeof t> => t !== null),
        "AccessToken",
        (t) => (t as { note?: string | null; visibleTokenPrefix: string }).note ?? undefined,
        (t) => `prefix: ${(t as { visibleTokenPrefix: string }).visibleTokenPrefix}`,
      );

      yield* child(
        "App Store Connect API Keys",
        acc.appStoreConnectApiKeys,
        "AppStoreConnectApiKey",
        (k) => (k as { name?: string | null }).name ?? undefined,
        (k) => `keyId: ${(k as { keyIdentifier: string }).keyIdentifier}`,
      );

      yield* child(
        "Apple Distribution Certificates",
        acc.appleDistributionCertificates,
        "AppleDistributionCertificate",
        () => undefined,
        (c) =>
          `serial: ${
            (c as { serialNumber: string }).serialNumber
          }, validUntil: ${(c as { validityNotAfter: string }).validityNotAfter}`,
      );

      yield* child(
        "Apple Push Keys",
        acc.applePushKeys,
        "ApplePushKey",
        () => undefined,
        (k) => `keyId: ${(k as { keyIdentifier: string }).keyIdentifier}`,
      );

      yield* child(
        "Convex Team Connections",
        acc.convexTeamConnections,
        "ConvexTeamConnection",
        () => undefined,
        (c) =>
          `team: ${(c as { convexTeamIdentifier: string }).convexTeamIdentifier}`,
      );

      yield* child(
        "GitHub App Installations",
        acc.githubAppInstallations,
        "GitHubAppInstallation",
        () => undefined,
        (g) =>
          `installationId: ${
            (g as { installationIdentifier: number }).installationIdentifier
          }`,
      );

      yield* child(
        "Google Service Account Keys",
        acc.googleServiceAccountKeys,
        "GoogleServiceAccountKey",
        (k) => (k as { clientEmail: string }).clientEmail,
        (k) =>
          `project: ${
            (k as { projectIdentifier: string }).projectIdentifier
          }, keyId: ${(k as { privateKeyIdentifier: string }).privateKeyIdentifier}`,
      );

      // Single-valued integrations on the account
      if (acc.logRocketOrganization) {
        yield* Console.log(`  ${CYAN}LogRocket Organization${RESET}`);
        yield* processResource(
          "LogRocketOrganization",
          acc.logRocketOrganization.id,
          acc.logRocketOrganization.orgName,
          `slug: ${acc.logRocketOrganization.orgSlug}`,
          "    ",
          dryRun,
          nukeConfig,
        );
      }

      if (acc.sentryInstallation) {
        yield* Console.log(`  ${CYAN}Sentry Installation${RESET}`);
        yield* processResource(
          "SentryInstallation",
          acc.sentryInstallation.id,
          acc.sentryInstallation.orgSlug,
          `installationId: ${acc.sentryInstallation.installationId}`,
          "    ",
          dryRun,
          nukeConfig,
        );
      }

      if (acc.pendingSentryInstallation) {
        yield* Console.log(`  ${CYAN}Pending Sentry Installation${RESET}`);
        yield* processResource(
          "SentryInstallation",
          acc.pendingSentryInstallation.id,
          acc.pendingSentryInstallation.orgSlug,
          `installationId: ${acc.pendingSentryInstallation.installationId}`,
          "    ",
          dryRun,
          nukeConfig,
        );
      }

      if (acc.ssoConfiguration) {
        yield* Console.log(`  ${CYAN}SSO Configuration${RESET}`);
        yield* processResource(
          "AccountSSOConfiguration",
          acc.ssoConfiguration.id,
          acc.ssoConfiguration.authProviderIdentifier,
          `protocol: ${acc.ssoConfiguration.authProtocol}, issuer: ${acc.ssoConfiguration.issuer}`,
          "    ",
          dryRun,
          nukeConfig,
        );
      }

      if (acc.vexoAccountConnection) {
        yield* Console.log(`  ${CYAN}Vexo Account Connection${RESET}`);
        yield* processResource(
          "VexoAccountConnection",
          acc.vexoAccountConnection.id,
          undefined,
          undefined,
          "    ",
          dryRun,
          nukeConfig,
        );
      }

      yield* child(
        "Account User Invitations",
        acc.userInvitations,
        "UserInvitation",
        (i) => (i as { email: string }).email,
        (i) =>
          `role: ${(i as { role: string }).role}, expires: ${
            (i as { expires: string }).expires
          }`,
      );
    }

    // ---- Pinned apps + per-app sub-resources ----
    if (v.pinnedApps.length > 0) {
      yield* Console.log(`\n${BOLD}${CYAN}Pinned Apps${RESET}`);
      for (const app of v.pinnedApps) {
        yield* Console.log(
          `\n  ${BOLD}App: ${app.fullName}${RESET} ${DIM}(${app.id}, slug: ${app.slug})${RESET}`,
        );

        // Per-app integrations & triggers
        const childApp = (
          label: string,
          items: ReadonlyArray<ResourceWithId>,
          type: string,
          nameOf?: (r: ResourceWithId) => string | undefined,
          metaOf?: (r: ResourceWithId) => string | undefined,
        ) =>
          Effect.gen(function* () {
            if (items.length === 0) return;
            yield* Console.log(`    ${CYAN}${label}${RESET}`);
            for (const item of items) {
              yield* processResource(
                type,
                item.id,
                nameOf?.(item),
                metaOf?.(item),
                "      ",
                dryRun,
                nukeConfig,
              );
            }
          });

        yield* childApp(
          "GitHub Build Triggers",
          app.githubBuildTriggers,
          "GitHubBuildTrigger",
          (g) =>
            `${(g as { platform: string }).platform}/${
              (g as { buildProfile: string }).buildProfile
            }`,
          (g) =>
            `type: ${(g as { type: string }).type}, src: ${
              (g as { sourcePattern: string }).sourcePattern
            }`,
        );

        yield* childApp(
          "GitHub Job Run Triggers",
          app.githubJobRunTriggers,
          "GitHubJobRunTrigger",
          (g) => (g as { jobType: string | null }).jobType ?? undefined,
          (g) =>
            `type: ${(g as { triggerType: string }).triggerType}, src: ${
              (g as { sourcePattern: string }).sourcePattern
            }`,
        );

        if (app.githubRepository) {
          yield* Console.log(`    ${CYAN}GitHub Repository${RESET}`);
          yield* processResource(
            "GitHubRepository",
            app.githubRepository.id,
            app.githubRepository.githubRepositoryUrl ?? undefined,
            `repoId: ${app.githubRepository.githubRepositoryIdentifier}`,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        if (app.githubRepositorySettings) {
          yield* Console.log(`    ${CYAN}GitHub Repository Settings${RESET}`);
          yield* processResource(
            "GitHubRepositorySettings",
            app.githubRepositorySettings.id,
            undefined,
            `baseDirectory: ${app.githubRepositorySettings.baseDirectory}`,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        if (app.appStoreConnectApp) {
          yield* Console.log(`    ${CYAN}App Store Connect App${RESET}`);
          yield* processResource(
            "AppStoreConnectApp",
            app.appStoreConnectApp.id,
            app.appStoreConnectApp.ascAppIdentifier,
            `webhookId: ${app.appStoreConnectApp.webhookIdentifier}`,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        if (app.convexProject) {
          yield* Console.log(`    ${CYAN}Convex Project${RESET}`);
          yield* processResource(
            "ConvexIntegration",
            app.convexProject.id,
            app.convexProject.convexProjectName,
            `slug: ${app.convexProject.convexProjectSlug}`,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        if (app.devDomainName) {
          yield* Console.log(`    ${CYAN}Dev Domain Name${RESET}`);
          yield* processResource(
            "DevDomainName",
            app.devDomainName.id,
            String(app.devDomainName.name),
            undefined,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        if (app.logRocketProject) {
          yield* Console.log(`    ${CYAN}LogRocket Project${RESET}`);
          yield* processResource(
            "LogRocketProject",
            app.logRocketProject.id,
            app.logRocketProject.logRocketProjectSlug,
            `orgId: ${app.logRocketProject.logRocketOrgId}`,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        if (app.sentryProject) {
          yield* Console.log(`    ${CYAN}Sentry Project${RESET}`);
          yield* processResource(
            "SentryProject",
            app.sentryProject.id,
            app.sentryProject.sentryProjectSlug,
            `installationId: ${app.sentryProject.sentryInstallationId}`,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        if (app.vexoApp) {
          yield* Console.log(`    ${CYAN}Vexo App${RESET}`);
          yield* processResource(
            "VexoApp",
            app.vexoApp.id,
            app.vexoApp.name,
            `slug: ${app.vexoApp.slug}, owner: ${app.vexoApp.owner}`,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        if (app.workerCustomDomain) {
          yield* Console.log(`    ${CYAN}Worker Custom Domain${RESET}`);
          yield* processResource(
            "CustomDomain",
            app.workerCustomDomain.id,
            app.workerCustomDomain.hostname,
            `devDomainName: ${String(app.workerCustomDomain.devDomainName)}`,
            "      ",
            dryRun,
            nukeConfig,
          );
        }

        // Finally, the app itself. Apps are the parent — list them last
        // so children are visible above. The wrapper-mutation pattern means
        // we can't actually invoke deleteAppAsync from this SDK surface.
        yield* Console.log(`    ${CYAN}App (parent)${RESET}`);
        yield* processResource(
          "App",
          app.id,
          app.fullName,
          `slug: ${app.slug}, owner: ${app.ownerAccount.name}`,
          "      ",
          dryRun,
          nukeConfig,
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
      yield* Console.log(`\n${BOLD}EAS Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`);

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: Live mode requested. Note: the generated EAS SDK does not currently expose typed delete operations for most resources, so candidates will be enumerated but flagged as DELETE-UNSUPPORTED. Use --dry-run for a preview.${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      yield* nukeViewer(config.dryRun, nukeConfig);

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:        ${totalFound}`);
      yield* Console.log(
        `  ${YELLOW}Skipped (excluded): ${totalSkipped}${RESET}`,
      );
      if (config.dryRun) {
        yield* Console.log(
          `  ${RED}Would delete:       ${
            totalFound - totalSkipped
          }${RESET}`,
        );
      } else {
        yield* Console.log(`  ${GREEN}Deleted:            ${totalDeleted}${RESET}`);
        yield* Console.log(
          `  ${YELLOW}Unsupported:        ${totalUnsupported}${RESET}`,
        );
        if (totalFailed > 0) {
          yield* Console.log(`  ${RED}Failed:             ${totalFailed}${RESET}`);
        }
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all EAS resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
