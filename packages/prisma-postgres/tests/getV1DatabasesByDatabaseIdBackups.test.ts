import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { getV1DatabasesByDatabaseIdBackups } from "../src/operations/getV1DatabasesByDatabaseIdBackups";

describe("getV1DatabasesByDatabaseIdBackups", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("db-backups"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("db-backups"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists backups for a database", async () => {
    const project = getTestProject("db-backups");
    const databaseId = project.databaseId!;

    const result = await runEffect(
      getV1DatabasesByDatabaseIdBackups({ databaseId }),
    );

    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.meta).toBeDefined();
    expect(typeof result.meta.backupRetentionDays).toBe("number");
    expect(result.pagination).toBeDefined();
    expect(typeof result.pagination.hasMore).toBe("boolean");
    if (result.data.length > 0) {
      const backup = result.data[0];
      expect(backup.id).toBeDefined();
      expect(backup.backupType).toBeDefined();
      expect(backup.createdAt).toBeDefined();
      expect(backup.status).toBeDefined();
    }
  }, 30_000);

  it("happy path - supports limit parameter", async () => {
    const project = getTestProject("db-backups");
    const databaseId = project.databaseId!;

    const result = await runEffect(
      getV1DatabasesByDatabaseIdBackups({ databaseId, limit: 1 }),
    );

    expect(result.data).toBeDefined();
    expect(result.data.length).toBeLessThanOrEqual(1);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent databaseId", async () => {
    await Effect.runPromise(
      getV1DatabasesByDatabaseIdBackups({
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

  it("error - UnprocessableEntity for malformed databaseId", async () => {
    await Effect.runPromise(
      getV1DatabasesByDatabaseIdBackups({ databaseId: "" }).pipe(
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
