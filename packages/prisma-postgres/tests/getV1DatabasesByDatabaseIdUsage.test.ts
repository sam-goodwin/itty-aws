import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { getV1DatabasesByDatabaseIdUsage } from "../src/operations/getV1DatabasesByDatabaseIdUsage";

describe("getV1DatabasesByDatabaseIdUsage", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("db-usage"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("db-usage"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - gets usage metrics for a database", async () => {
    const project = getTestProject("db-usage");
    const databaseId = project.databaseId!;

    const result = await runEffect(
      getV1DatabasesByDatabaseIdUsage({ databaseId }),
    );

    expect(result.period).toBeDefined();
    expect(result.period.start).toBeDefined();
    expect(result.period.end).toBeDefined();
    expect(result.metrics).toBeDefined();
    expect(result.metrics.operations).toBeDefined();
    expect(typeof result.metrics.operations.used).toBe("number");
    expect(result.metrics.operations.unit).toBeDefined();
    expect(result.metrics.storage).toBeDefined();
    expect(typeof result.metrics.storage.used).toBe("number");
    expect(result.metrics.storage.unit).toBeDefined();
    expect(result.generatedAt).toBeDefined();
  }, 30_000);

  it("happy path - gets usage with date range", async () => {
    const project = getTestProject("db-usage");
    const databaseId = project.databaseId!;

    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const startDate = thirtyDaysAgo.toISOString();
    const endDate = now.toISOString();

    const result = await runEffect(
      getV1DatabasesByDatabaseIdUsage({ databaseId, startDate, endDate }),
    );

    expect(result.period).toBeDefined();
    expect(result.metrics).toBeDefined();
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent databaseId", async () => {
    await Effect.runPromise(
      getV1DatabasesByDatabaseIdUsage({
        databaseId: "non-existent-db-id-00000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest for invalid date range", async () => {
    const project = getTestProject("db-usage");
    const databaseId = project.databaseId!;

    await Effect.runPromise(
      getV1DatabasesByDatabaseIdUsage({
        databaseId,
        startDate: "not-a-date",
        endDate: "also-not-a-date",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "UnprocessableEntity"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for malformed databaseId", async () => {
    await Effect.runPromise(
      getV1DatabasesByDatabaseIdUsage({ databaseId: "" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["UnprocessableEntity", "NotFound", "BadRequest"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);
});
