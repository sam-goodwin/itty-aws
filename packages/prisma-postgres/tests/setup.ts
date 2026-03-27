import { config } from "dotenv";
import { Effect, Layer, Schedule } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "../src/credentials";
import { postV1Projects } from "../src/operations/postV1Projects";
import { deleteV1ProjectsById } from "../src/operations/deleteV1ProjectsById";
import { getV1Databases } from "../src/operations/getV1Databases";

// Load environment variables from .env file
config();

// Main layer providing credentials and HTTP client for all tests
export const TestLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

const TEST_PROJECT_PREFIX = "distilled-prisma";

/**
 * Short random hex string generated once per test run.
 * Append this to resource names so parallel test runs don't collide.
 */
export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

/**
 * Test project configuration
 */
export interface TestProjectConfig {
  readonly projectId: string;
  readonly projectName: string;
  readonly databaseId?: string;
  readonly defaultConnectionId?: string;
  readonly workspaceId?: string;
}

// Shared state for test projects, keyed by suffix
const testProjects: Map<string, TestProjectConfig> = new Map();

/**
 * Get the project name with optional suffix
 */
const getProjectName = (suffix?: string): string =>
  suffix
    ? `${TEST_PROJECT_PREFIX}-${suffix}-${testRunId}`
    : `${TEST_PROJECT_PREFIX}-${testRunId}`;

/**
 * Get the test project config. Throws if not initialized.
 */
export const getTestProject = (suffix?: string): TestProjectConfig => {
  const key = suffix ?? "";
  const project = testProjects.get(key);
  if (!project) {
    const projectName = getProjectName(suffix);
    throw new Error(
      `Test project "${projectName}" not initialized. Call setupTestProject(${suffix ? `"${suffix}"` : ""}) in beforeAll.`,
    );
  }
  return project;
};

const log = (prefix: string, message: string) => {
  process.stderr.write(`[${prefix}] ${message}\n`);
};

/**
 * Wait for a database to become ready by polling
 */
const waitForDatabase = (projectId: string, prefix: string) =>
  Effect.gen(function* () {
    log(prefix, "waiting for database to be ready...");

    const result = yield* Effect.retry(
      getV1Databases({ projectId }).pipe(
        Effect.flatMap((result) => {
          const db = result.data.find((d) => d.status === "ready");
          if (db) {
            return Effect.succeed(db);
          }
          log(prefix, "database not ready yet...");
          return Effect.fail({ _tag: "NotReady" as const });
        }),
      ),
      {
        schedule: Schedule.both(
          Schedule.recurs(60),
          Schedule.spaced("5 seconds"),
        ),
        while: (e) =>
          typeof e === "object" &&
          e !== null &&
          "_tag" in e &&
          e._tag === "NotReady",
      },
    );

    log(prefix, `database ready: id=${result.id}`);
    return result;
  });

/**
 * Setup the test project. Call this in beforeAll.
 * Creates the project with a database and waits for it to be ready.
 */
export const setupTestProject = (suffix?: string) =>
  Effect.gen(function* () {
    const projectName = getProjectName(suffix);
    const prefix = suffix ?? "default";

    log(prefix, `creating project "${projectName}"...`);

    const created = yield* postV1Projects({
      name: projectName,
      createDatabase: true,
      region: "us-east-1",
    });

    const projectId = created.data.id;
    log(prefix, `created project: id=${projectId}`);

    // Wait for the database to become ready
    const db = yield* waitForDatabase(projectId, prefix);

    const projectConfig: TestProjectConfig = {
      projectId,
      projectName,
      databaseId: db.id,
      defaultConnectionId: db.defaultConnectionId ?? db.connections[0]?.id,
      workspaceId: created.data.workspace.id,
    };

    log(
      prefix,
      `project ready! db=${projectConfig.databaseId}, conn=${projectConfig.defaultConnectionId}`,
    );

    testProjects.set(suffix ?? "", projectConfig);
    return projectConfig;
  }).pipe(Effect.provide(TestLayer));

/**
 * Teardown the test project. Call this in afterAll.
 */
export const teardownTestProject = (suffix?: string) =>
  Effect.gen(function* () {
    const key = suffix ?? "";
    const project = testProjects.get(key);
    if (!project) return;

    const prefix = suffix ?? "default";
    log(prefix, "deleting project...");
    yield* deleteV1ProjectsById({
      id: project.projectId,
    }).pipe(Effect.ignore);
    log(prefix, "done");

    testProjects.delete(key);
  }).pipe(Effect.provide(TestLayer));

/**
 * Run an Effect with the TestLayer provided.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(TestLayer)) as Effect.Effect<A, E, never>,
  );
