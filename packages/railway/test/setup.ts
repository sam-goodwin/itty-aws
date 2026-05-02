/**
 * Shared test infrastructure for the Railway SDK.
 *
 * All tests share a single resource graph created on first access:
 *
 *   Workspace (the one tied to RAILWAY_API_TOKEN)
 *   └── Project   (created once, cleaned up at process exit)
 *       └── Environment ("production", auto-created with the project)
 *           └── Service (Docker image, no real deployment required for
 *                        most tests — we only need a valid id)
 *
 * Resources are created lazily so a test that doesn't need them doesn't
 * pay for setup. We register a `process.on("beforeExit")` cleanup that
 * polls until each resource is actually gone (Railway deletes are async
 * — `projectDelete` returns 200 immediately but the project takes ~30s
 * to leave the workspace).
 *
 * Because vitest runs in a single fork (see vitest.config.ts), all test
 * files share this module instance and therefore share these resources.
 */
import { Duration, Effect, Layer, Schedule } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { project as projectQuery } from "../src/operations/project.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";

// Main layer providing credentials and HTTP client for all tests.
export const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

/**
 * Short random hex string generated once per test run.
 * Append this to resource names so parallel test runs don't collide.
 */
export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

const log = (prefix: string, message: string) => {
  process.stderr.write(`[railway-test:${prefix}] ${message}\n`);
};

/**
 * Run an Effect with the MainLayer provided.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

/**
 * Brief sleep used after mutations that are followed immediately by reads.
 * Railway's GraphQL gateway has eventual-consistency on some resolvers,
 * so a `serviceUpdate` → `service({id})` round trip can otherwise see the
 * pre-update shape for a few hundred ms.
 */
export const briefSleep = (ms = 750) => Effect.sleep(Duration.millis(ms));

/**
 * Retry an Effect until it succeeds, with exponential backoff capped at
 * 8s and 6 attempts (~30s wall time worst-case). Used for hard-quota ops
 * that sometimes return RailwayRateLimited even after the SDK's internal
 * throttling retry has given up — e.g. `projectCreate` enforces a
 * 30s-per-user window.
 */
export const retryUntilSuccess = <A, E, R>(
  effect: Effect.Effect<A, E, R>,
): Effect.Effect<A, E, R> =>
  Effect.retry(effect, {
    schedule: Schedule.both(
      Schedule.exponential(Duration.seconds(2), 2),
      Schedule.recurs(6),
    ),
  });

// ---------------------------------------------------------------------------
// Workspace
// ---------------------------------------------------------------------------

let workspaceIdCache: string | null = null;

/**
 * The id of the workspace that owns RAILWAY_API_TOKEN.
 *
 * `apiToken({})` returns the workspaces the token can access. We use the
 * first workspace as the test workspace — distilled's CI account is
 * configured to have exactly one.
 */
export const getWorkspaceId = (): Effect.Effect<string, unknown> =>
  Effect.gen(function* () {
    if (workspaceIdCache) return workspaceIdCache;
    const me = yield* apiToken({});
    const id = me.workspaces[0]?.id;
    if (!id) {
      return yield* Effect.die(
        "Test setup: the configured RAILWAY_API_TOKEN has no workspaces.",
      );
    }
    workspaceIdCache = id;
    log("workspace", `using workspace ${id}`);
    return id;
  }).pipe(Effect.provide(MainLayer));

// ---------------------------------------------------------------------------
// Shared project
// ---------------------------------------------------------------------------

interface SharedProject {
  readonly id: string;
  readonly name: string;
  readonly baseEnvironmentId: string;
}

let sharedProjectPromise: Promise<SharedProject> | null = null;

/**
 * Get-or-create the shared project + production environment used by most
 * tests. Creating the project is a hard-quota op (30s/user), so we wrap
 * the call in `retryUntilSuccess`. The first call eats ~3-5 seconds; all
 * subsequent calls return the cached value.
 */
export const getSharedProject = (): Promise<SharedProject> => {
  if (sharedProjectPromise) return sharedProjectPromise;

  const name = `distilled-railway-${testRunId}`;
  log("project", `creating ${name}…`);

  sharedProjectPromise = Effect.runPromise(
    retryUntilSuccess(projectCreate({ input: { name } })).pipe(
      Effect.tap((p) =>
        Effect.sync(() => log("project", `created id=${p.id}`)),
      ),
      Effect.map((p) => ({
        id: p.id,
        name: p.name,
        baseEnvironmentId: p.baseEnvironmentId,
      })),
      Effect.provide(MainLayer),
    ) as Effect.Effect<SharedProject, unknown, never>,
  );

  return sharedProjectPromise;
};

// ---------------------------------------------------------------------------
// Shared service
// ---------------------------------------------------------------------------

interface SharedService {
  readonly id: string;
  readonly name: string;
  readonly projectId: string;
  readonly environmentId: string;
}

let sharedServicePromise: Promise<SharedService> | null = null;

// A small public image that boots fast and stays running. We don't need a
// successful deployment for most tests — they only need a valid service id.
const TEST_SERVICE_IMAGE = "ghcr.io/linuxserver/heimdall:latest";

/**
 * Get-or-create a shared service inside the shared project. Used by
 * `service*`, `deployment*`, `variable*`, and `serviceDomain*` tests.
 */
export const getSharedService = (): Promise<SharedService> => {
  if (sharedServicePromise) return sharedServicePromise;

  sharedServicePromise = (async () => {
    const proj = await getSharedProject();
    const name = `svc-${testRunId}`;
    log("service", `creating ${name} in project ${proj.id}…`);
    const svc = await Effect.runPromise(
      retryUntilSuccess(
        serviceCreate({
          input: {
            projectId: proj.id,
            environmentId: proj.baseEnvironmentId,
            name,
            source: { image: TEST_SERVICE_IMAGE },
          },
        }),
      ).pipe(Effect.provide(MainLayer)) as Effect.Effect<
        { id: string },
        unknown,
        never
      >,
    );
    log("service", `created id=${svc.id}`);
    return {
      id: svc.id,
      name,
      projectId: proj.id,
      environmentId: proj.baseEnvironmentId,
    };
  })();

  return sharedServicePromise;
};

// ---------------------------------------------------------------------------
// Cleanup
// ---------------------------------------------------------------------------

/**
 * Poll `project({id})` until it returns RailwayNotFound (or we hit the
 * cap). Railway's `projectDelete` is async — the project lingers in a
 * REMOVING state for up to 30s before fully disappearing.
 */
const waitForProjectGone = (id: string) =>
  Effect.retry(
    projectQuery({ id }).pipe(
      Effect.flatMap(() => Effect.fail({ _tag: "StillExists" as const })),
      Effect.catchTag("RailwayNotFound", () => Effect.void),
    ),
    {
      schedule: Schedule.both(
        Schedule.recurs(30),
        Schedule.spaced(Duration.seconds(2)),
      ),
      while: (e) =>
        typeof e === "object" &&
        e !== null &&
        "_tag" in e &&
        e._tag === "StillExists",
    },
  ).pipe(Effect.provide(MainLayer));

let cleanupRegistered = false;

const ensureCleanupRegistered = () => {
  if (cleanupRegistered) return;
  cleanupRegistered = true;
  // `beforeExit` is called when the event loop drains. Vitest waits for
  // `afterAll` hooks, but those run per-file — we want a single global
  // teardown that fires once after the last suite finishes.
  process.on("beforeExit", () => {
    if (!sharedProjectPromise) return;
    sharedProjectPromise
      .then(async (proj) => {
        log("cleanup", `deleting project ${proj.id}…`);
        await Effect.runPromise(
          projectDelete({ id: proj.id }).pipe(
            Effect.ignore,
            Effect.provide(MainLayer),
          ),
        );
        await Effect.runPromise(
          waitForProjectGone(proj.id).pipe(Effect.ignore),
        );
        log("cleanup", `project ${proj.id} gone`);
      })
      .catch((err) => {
        log("cleanup", `WARN: project teardown failed: ${err}`);
      });
  });
};

// Register cleanup eagerly so even tests that only call `getSharedProject`
// once get cleanup behaviour without each file having to wire it up.
ensureCleanupRegistered();
