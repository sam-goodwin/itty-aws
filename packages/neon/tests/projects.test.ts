import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  runEffect,
  testRunId,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { createProject } from "../src/operations/createProject";
import { getProject } from "../src/operations/getProject";
import { updateProject } from "../src/operations/updateProject";
import { deleteProject } from "../src/operations/deleteProject";
import { listProjects } from "../src/operations/listProjects";
import { listSharedProjects } from "../src/operations/listSharedProjects";

describe("Projects", () => {
  beforeAll(async () => {
    await runEffect(setupTestProject("projects"));
  }, 120_000);

  afterAll(async () => {
    await runEffect(teardownTestProject("projects"));
  }, 60_000);

  describe("createProject", () => {
    it("happy path - creates a project", async () => {
      const projectName = `distilled-neon-create-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProject({
            project: { name: projectName },
          });
          projectId = result.project.id;
          expect(result.project.id).toBeDefined();
          expect(result.project.name).toBe(projectName);
          expect(result.branch).toBeDefined();
          expect(result.databases.length).toBeGreaterThan(0);
          expect(result.roles.length).toBeGreaterThan(0);
          expect(result.endpoints.length).toBeGreaterThan(0);
          expect(result.connection_uris.length).toBeGreaterThan(0);
        }).pipe(
          Effect.ensuring(
            projectId
              ? deleteProject({ project_id: projectId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      );
      // Cleanup in case ensuring didn't run (projectId set after gen)
      if (projectId) {
        await runEffect(
          deleteProject({ project_id: projectId }).pipe(Effect.ignore),
        );
      }
    }, 60_000);
  });

  describe("getProject", () => {
    it("happy path - retrieves project details", async () => {
      const project = getTestProject("projects");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProject({ project_id: project.id });
          expect(result.project.id).toBe(project.id);
          expect(result.project.name).toBe(project.name);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        getProject({ project_id: "non-existent-project-id" }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateProject", () => {
    it("happy path - updates project name", async () => {
      const project = getTestProject("projects");
      const newName = `distilled-neon-updated-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* updateProject({
            project_id: project.id,
            project: { name: newName },
          });
          expect(result.project.id).toBe(project.id);
          expect(result.project.name).toBe(newName);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        updateProject({
          project_id: "non-existent-project-id",
          project: { name: "test" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("deleteProject", () => {
    it("happy path - deletes a project", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: `distilled-neon-del-${testRunId}` },
          });
          const result = yield* deleteProject({
            project_id: created.project.id,
          });
          expect(result.project.id).toBe(created.project.id);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        deleteProject({ project_id: "non-existent-project-id" }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listProjects", () => {
    it("happy path - lists projects", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjects({});
          expect(result.projects).toBeDefined();
          expect(Array.isArray(result.projects)).toBe(true);
        }),
      );
    }, 30_000);
  });

  describe("listSharedProjects", () => {
    it("happy path - lists shared projects", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listSharedProjects({});
          expect(result.projects).toBeDefined();
          expect(Array.isArray(result.projects)).toBe(true);
        }),
      );
    }, 30_000);
  });
});
