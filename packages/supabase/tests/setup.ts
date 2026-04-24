import { config } from "dotenv";
import { Effect, Layer } from "effect";
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
 * Get an existing ACTIVE_HEALTHY project for read-only tests.
 * Falls back to creating a fresh one if none exist.
 */
let _cachedExistingProject: TestProject | undefined;
let _existingProjectResolved = false;
export async function getExistingProject(): Promise<TestProject | undefined> {
  if (_existingProjectResolved) return _cachedExistingProject;
  _existingProjectResolved = true;
  const projects = await runEffect(v1ListAllProjects({}));
  // Prefer ACTIVE_HEALTHY, fall back to any project
  const active = projects.find((p) => p.status === "ACTIVE_HEALTHY") ?? projects[0];
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
export async function requireExistingProject(ctx: { skip: (reason: string) => void }): Promise<TestProject> {
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
    v1CreateAProject({
      name,
      organization_slug: orgSlug,
      db_pass: dbPass,
      region: "us-east-1",
      plan: "free",
    }),
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
