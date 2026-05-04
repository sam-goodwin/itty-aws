import { config } from "dotenv";
import { Effect, Layer, Schedule } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "../src/credentials";
import { v1ListAllProjects } from "../src/operations/v1ListAllProjects";
import { v1ListAllOrganizations } from "../src/operations/v1ListAllOrganizations";
import { v1CreateAProject } from "../src/operations/v1CreateAProject";
import { v1DeleteAProject } from "../src/operations/v1DeleteAProject";

// Load environment variables from .env file
config();

// Main layer providing credentials and HTTP client for all tests
export const TestLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

/**
 * Short random hex string generated once per test run.
 * Append this to resource names so parallel test runs don't collide.
 */
export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

/**
 * Run an Effect with the TestLayer provided.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(TestLayer)) as Effect.Effect<A, E, never>,
  );

// Sentinel constants for error tests
export const FAKE_REF = "nonexistent00000000ref";
export const FAKE_UUID = "00000000-0000-0000-0000-000000000000";

/**
 * Wrap a project-creating Effect so that hitting Supabase's free-tier
 * "active free projects" ceiling auto-recovers: we sweep every existing
 * `distilled-supabase-*` project from the account, wait for the deletes
 * to propagate, and retry. Bounded so a real, unrelated quota issue
 * still surfaces.
 *
 * Supabase's management API has no way to query "are there any deletions
 * still propagating?" — `v1DeleteAProject` returns immediately and the
 * project lingers as REMOVED for ~30s while still counting toward the
 * limit — so the recovery path waits a bit before each retry.
 */
export const retryOnFreeProjectLimit = <A, E, R>(
  effect: Effect.Effect<A, E, R>,
): Effect.Effect<A, E, R> => {
  const isLimit = (e: unknown): boolean =>
    typeof e === "object" &&
    e !== null &&
    (e as { _tag?: string })._tag === "FreeProjectLimitReached";
  // On limit: sweep + poll v1ListAllProjects until at least one
  // `distilled-supabase-*` project has fully disappeared (slot freed up),
  // then retry. Polling beats a fixed sleep because Supabase's tail varies
  // from ~30s to a couple of minutes — too short and we retry into the
  // same limit; too long and the test times out. Bounded to 3 attempts.
  const recover = effect.pipe(
    Effect.catch((e) =>
      isLimit(e)
        ? waitForCapacity().pipe(Effect.flatMap(() => Effect.fail(e)))
        : Effect.fail(e),
    ),
  ) as Effect.Effect<A, E, R>;
  return recover.pipe(
    Effect.retry({
      while: isLimit,
      schedule: Schedule.recurs(3),
    }),
  );
};

/**
 * Sweep every `distilled-supabase-*` project, then poll the account
 * listing until the test-project count drops by at least one — i.e. a
 * slot freed up. Capped at ~2 minutes; if nothing has cleared by then
 * we return anyway and let the outer retry surface the same limit error
 * to the caller, which is preferable to hanging.
 */
const waitForCapacity = (): Effect.Effect<void> =>
  Effect.gen(function* () {
    const before = yield* listTestProjects();
    for (const p of before) {
      yield* v1DeleteAProject({ ref: p.ref }).pipe(Effect.ignore);
    }
    yield* pollUntilFewer(before.length);
  }).pipe(Effect.provide(TestLayer)) as Effect.Effect<void>;

const listTestProjects = (): Effect.Effect<
  Array<{ ref: string; name: string }>,
  never,
  never
> =>
  v1ListAllProjects({}).pipe(
    Effect.orElseSucceed(() => [] as Array<{ ref: string; name: string }>),
    Effect.map((projects) =>
      projects.filter((p) => p.name.startsWith("distilled-supabase")),
    ),
  ) as Effect.Effect<Array<{ ref: string; name: string }>, never, never>;

const pollUntilFewer = (
  startingCount: number,
): Effect.Effect<void, never, never> =>
  listTestProjects().pipe(
    Effect.flatMap((current) =>
      current.length < startingCount
        ? Effect.void
        : Effect.fail("still-full" as const),
    ),
    Effect.retry({
      while: (e) => e === "still-full",
      schedule: Schedule.both(
        Schedule.spaced("5 seconds"),
        Schedule.recurs(24),
      ),
    }),
    Effect.match({
      onSuccess: () => undefined as void,
      onFailure: () => undefined as void,
    }),
  ) as Effect.Effect<void, never, never>;

// --------------------------------------------------------------------------
// Shared test project management
// --------------------------------------------------------------------------

const TEST_PROJECT_PREFIX = "distilled-supabase";

interface TestProject {
  id: string;
  ref: string;
  organization_id: string;
  organization_slug: string;
  name: string;
}

const testProjects = new Map<string, TestProject>();

/**
 * Get an existing ACTIVE_HEALTHY project for read-only tests, or undefined
 * if none exist (read-only tests then skip via `requireExistingProject`).
 *
 * Strict on `status === "ACTIVE_HEALTHY"`: Supabase's deletion is async and
 * `v1DeleteAProject` returns immediately, so a project lingers in REMOVED
 * state and shows up in `v1ListAllProjects` for ~30s after deletion. The
 * old fallback to `projects[0]` could pick a REMOVED project whose ref then
 * fails every read with "Resource has been removed".
 *
 * Cache only positive results: if the first call finds no healthy project
 * we re-check on the next call, so a project created later in the run
 * (e.g. by v1CreateAProject's happy path before the suite's read tests)
 * can still be picked up.
 */
let _cachedExistingProject: TestProject | undefined;
export async function getExistingProject(): Promise<TestProject | undefined> {
  if (_cachedExistingProject) return _cachedExistingProject;
  const projects = await runEffect(v1ListAllProjects({}));
  const active = projects.find((p) => p.status === "ACTIVE_HEALTHY");
  if (active) {
    _cachedExistingProject = {
      id: active.id,
      ref: active.ref,
      organization_id: active.organization_id,
      organization_slug: active.organization_slug,
      name: active.name,
    };
  }
  return _cachedExistingProject;
}

/**
 * Get an existing project or skip the test if none available.
 */
export async function requireExistingProject(ctx: {
  skip: (reason: string) => void;
}): Promise<TestProject> {
  const proj = await getExistingProject();
  if (!proj) {
    ctx.skip("No projects available");
    return undefined as any;
  }
  return proj;
}

/**
 * Get the first organization slug.
 */
let _cachedOrgSlug: string | undefined;
export async function getExistingOrgSlug(): Promise<string> {
  if (_cachedOrgSlug) return _cachedOrgSlug;
  const orgs = await runEffect(v1ListAllOrganizations({}));
  if (orgs.length === 0) throw new Error("No organizations found");
  _cachedOrgSlug = orgs[0].slug;
  return _cachedOrgSlug;
}

/**
 * Setup a test project for write tests. Creates a new project in the first org.
 */
export async function setupTestProject(suffix: string): Promise<TestProject> {
  const existing = testProjects.get(suffix);
  if (existing) return existing;

  const orgSlug = await getExistingOrgSlug();
  const name = `${TEST_PROJECT_PREFIX}-${suffix}-${testRunId}`;
  const dbPass = `TestPass${testRunId}!1`;

  const result = await runEffect(
    retryOnFreeProjectLimit(
      v1CreateAProject({
        name,
        organization_slug: orgSlug,
        db_pass: dbPass,
        region: "us-east-1",
        plan: "free",
      }),
    ),
  );

  const proj: TestProject = {
    id: result.id,
    ref: result.ref,
    organization_id: result.organization_id,
    organization_slug: result.organization_slug,
    name: result.name,
  };
  testProjects.set(suffix, proj);
  return proj;
}

/**
 * Teardown a test project.
 */
export async function teardownTestProject(suffix: string): Promise<void> {
  const proj = testProjects.get(suffix);
  if (!proj) return;
  await runEffect(v1DeleteAProject({ ref: proj.ref }).pipe(Effect.ignore));
  testProjects.delete(suffix);
}

export function getTestProject(suffix: string): TestProject {
  const proj = testProjects.get(suffix);
  if (!proj) throw new Error(`Test project '${suffix}' not set up yet`);
  return proj;
}
