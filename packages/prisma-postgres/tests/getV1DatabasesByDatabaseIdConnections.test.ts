import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { getV1DatabasesByDatabaseIdConnections } from "../src/operations/getV1DatabasesByDatabaseIdConnections";

describe("getV1DatabasesByDatabaseIdConnections", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("db-conns"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("db-conns"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists connections for a database", async () => {
    const project = getTestProject("db-conns");
    const databaseId = project.databaseId!;

    const result = await runEffect(
      getV1DatabasesByDatabaseIdConnections({ databaseId }),
    );

    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.pagination).toBeDefined();
    expect(typeof result.pagination.hasMore).toBe("boolean");
    // The project was created with a database, so there should be at least one connection
    expect(result.data.length).toBeGreaterThanOrEqual(1);
    const conn = result.data[0];
    expect(conn.id).toBeDefined();
    expect(conn.name).toBeDefined();
    expect(conn.kind).toBeDefined();
    expect(conn.database.id).toBe(databaseId);
  }, 30_000);

  it("happy path - supports limit parameter", async () => {
    const project = getTestProject("db-conns");
    const databaseId = project.databaseId!;

    const result = await runEffect(
      getV1DatabasesByDatabaseIdConnections({ databaseId, limit: 1 }),
    );

    expect(result.data).toBeDefined();
    expect(result.data.length).toBeLessThanOrEqual(1);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - UnprocessableEntity for malformed databaseId", async () => {
    await Effect.runPromise(
      getV1DatabasesByDatabaseIdConnections({ databaseId: "" }).pipe(
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

  it("error - NotFound for non-existent databaseId", async () => {
    await Effect.runPromise(
      getV1DatabasesByDatabaseIdConnections({
        databaseId: "non-existent-db-id-00000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);
});
