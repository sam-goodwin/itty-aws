import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { getConnectionURI } from "../src/operations/getConnectionURI";
import { listProjectPermissions } from "../src/operations/listProjectPermissions";
import { getProjectBranchSchema } from "../src/operations/getProjectBranchSchema";

describe("Miscellaneous", () => {
  beforeAll(async () => {
    await runEffect(setupTestProject("misc"));
  }, 120_000);

  afterAll(async () => {
    await runEffect(teardownTestProject("misc"));
  }, 60_000);

  describe("getConnectionURI", () => {
    it("happy path - retrieves connection URI", async () => {
      const project = getTestProject("misc");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getConnectionURI({
            project_id: project.id,
            database_name: "neondb",
            role_name: "neondb_owner",
          });
          expect(result.uri).toBeDefined();
          expect(result.uri).toContain("postgresql://");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        getConnectionURI({
          project_id: "non-existent-project-id",
          database_name: "neondb",
          role_name: "neondb_owner",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listProjectPermissions", () => {
    it("happy path - lists permissions", async () => {
      const project = getTestProject("misc");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectPermissions({
            project_id: project.id,
          });
          expect(result.project_permissions).toBeDefined();
          expect(Array.isArray(result.project_permissions)).toBe(true);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        listProjectPermissions({
          project_id: "non-existent-project-id",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("getProjectBranchSchema", () => {
    it("happy path - retrieves branch schema", async () => {
      const project = getTestProject("misc");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProjectBranchSchema({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            db_name: "neondb",
          });
          // Schema should return sql or json
          expect(result.sql !== undefined || result.json !== undefined).toBe(
            true,
          );
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch", async () => {
      const project = getTestProject("misc");
      await runEffect(
        getProjectBranchSchema({
          project_id: project.id,
          branch_id: "br-non-existent-000000",
          db_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
