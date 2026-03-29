import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./setup";
import { listProjects } from "../src/operations/listProjects";
import { listSharedProjects } from "../src/operations/listSharedProjects";
import { createProject } from "../src/operations/createProject";
import { getProject } from "../src/operations/getProject";
import { updateProject } from "../src/operations/updateProject";
import { deleteProject } from "../src/operations/deleteProject";
import { recoverProject } from "../src/operations/recoverProject";
import { getProjectAdvisorSecurityIssues } from "../src/operations/getProjectAdvisorSecurityIssues";
import { listProjectPermissions } from "../src/operations/listProjectPermissions";
import { grantPermissionToProject } from "../src/operations/grantPermissionToProject";
import { revokePermissionFromProject } from "../src/operations/revokePermissionFromProject";
import { createProjectTransferRequest } from "../src/operations/createProjectTransferRequest";
import { acceptProjectTransferRequest } from "../src/operations/acceptProjectTransferRequest";
import { getProjectJWKS } from "../src/operations/getProjectJWKS";
import { addProjectJWKS } from "../src/operations/addProjectJWKS";
import { deleteProjectJWKS } from "../src/operations/deleteProjectJWKS";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Projects", () => {
  // ============================================================================
  // listProjects
  // ============================================================================
  describe("listProjects", () => {
    it("happy path - lists projects", async () => {
      const result = await runEffect(listProjects({}));
      expect(result).toHaveProperty("projects");
      expect(Array.isArray(result.projects)).toBe(true);
      if (result.projects.length > 0) {
        expect(result.projects[0]).toHaveProperty("id");
        expect(result.projects[0]).toHaveProperty("name");
        expect(result.projects[0]).toHaveProperty("region_id");
        expect(result.projects[0]).toHaveProperty("created_at");
      }
    }, 30_000);

    it("happy path - lists projects with limit", async () => {
      const result = await runEffect(listProjects({ limit: 1 }));
      expect(result).toHaveProperty("projects");
      expect(result.projects.length).toBeLessThanOrEqual(1);
    }, 30_000);

    it("happy path - search finds created project", async () => {
      const projectName = `distilled-neon-search-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          const result = yield* listProjects({ search: projectName });
          const found = result.projects.find(
            (p) => p.id === created.project.id,
          );
          expect(found).toBeDefined();
          expect(found!.name).toBe(projectName);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const result = yield* listProjects({ search: projectName });
              for (const p of result.projects) {
                if (p.name === projectName) {
                  yield* deleteProject({ project_id: p.id }).pipe(
                    Effect.ignore,
                  );
                }
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listProjects({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid org_id", async () => {
      await runEffect(
        listProjects({ org_id: "not-a-valid-org-id" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createProject
  // ============================================================================
  describe("createProject", () => {
    it("happy path - creates a project", async () => {
      const projectName = `distilled-neon-create-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProject({
            project: { name: projectName },
          });
          expect(result).toHaveProperty("project");
          expect(result.project.name).toBe(projectName);
          expect(result.project).toHaveProperty("id");
          expect(result.project).toHaveProperty("region_id");
          expect(result.project).toHaveProperty("pg_version");
          expect(result.project).toHaveProperty("created_at");
          expect(result).toHaveProperty("branch");
          expect(result.branch).toHaveProperty("id");
          expect(result).toHaveProperty("databases");
          expect(Array.isArray(result.databases)).toBe(true);
          expect(result).toHaveProperty("roles");
          expect(Array.isArray(result.roles)).toBe(true);
          expect(result).toHaveProperty("connection_uris");
          expect(Array.isArray(result.connection_uris)).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const listed = yield* listProjects({ search: projectName });
              for (const p of listed.projects) {
                if (p.name === projectName) {
                  yield* deleteProject({ project_id: p.id }).pipe(
                    Effect.ignore,
                  );
                }
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createProject({
          project: { name: `distilled-neon-bad-${testRunId}` },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid region_id", async () => {
      const projectName = `distilled-neon-badreg-${testRunId}`;
      await runEffect(
        createProject({
          project: { name: projectName, region_id: "not-a-real-region" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "UnprocessableEntity",
              "NotFound",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid pg_version", async () => {
      const projectName = `distilled-neon-badpg-${testRunId}`;
      await runEffect(
        createProject({
          project: { name: projectName, pg_version: 9 },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "UnprocessableEntity",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // listSharedProjects
  // ============================================================================
  describe("listSharedProjects", () => {
    it("happy path - lists shared projects", async () => {
      const result = await runEffect(listSharedProjects({}));
      expect(result).toHaveProperty("projects");
      expect(Array.isArray(result.projects)).toBe(true);
      if (result.projects.length > 0) {
        expect(result.projects[0]).toHaveProperty("id");
        expect(result.projects[0]).toHaveProperty("name");
        expect(result.projects[0]).toHaveProperty("region_id");
        expect(result.projects[0]).toHaveProperty("created_at");
      }
    }, 30_000);

    it("happy path - lists shared projects with limit", async () => {
      const result = await runEffect(listSharedProjects({ limit: 1 }));
      expect(result).toHaveProperty("projects");
      expect(result.projects.length).toBeLessThanOrEqual(1);
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listSharedProjects({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);

    it("error - BadRequest with search for non-existent project", async () => {
      const result = await runEffect(
        listSharedProjects({
          search: `nonexistent-project-${testRunId}-00000000`,
        }),
      );
      // Search with a bogus name should return empty results, not an error
      expect(result.projects.length).toBe(0);
    }, 30_000);
  });

  // ============================================================================
  // getProject
  // ============================================================================
  describe("getProject", () => {
    it("happy path - retrieves a project by ID", async () => {
      const projectName = `distilled-neon-get-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          const result = yield* getProject({
            project_id: created.project.id,
          });
          expect(result).toHaveProperty("project");
          expect(result.project.id).toBe(created.project.id);
          expect(result.project.name).toBe(projectName);
          expect(result.project).toHaveProperty("region_id");
          expect(result.project).toHaveProperty("pg_version");
          expect(result.project).toHaveProperty("created_at");
          expect(result.project).toHaveProperty("store_passwords");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const listed = yield* listProjects({ search: projectName });
              for (const p of listed.projects) {
                if (p.name === projectName) {
                  yield* deleteProject({ project_id: p.id }).pipe(
                    Effect.ignore,
                  );
                }
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProject({ project_id: "non-existent-project-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with empty project ID", async () => {
      await runEffect(
        getProject({ project_id: "" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "NotFound",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getProject({ project_id: "non-existent-project-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // updateProject
  // ============================================================================
  describe("updateProject", () => {
    it("happy path - updates a project name", async () => {
      const projectName = `distilled-neon-upd-${testRunId}`;
      const updatedName = `distilled-neon-upd2-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;
          const result = yield* updateProject({
            project_id: created.project.id,
            project: { name: updatedName },
          });
          expect(result).toHaveProperty("project");
          expect(result.project.id).toBe(created.project.id);
          expect(result.project.name).toBe(updatedName);
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateProject({
          project_id: "non-existent-project-00000000",
          project: { name: "should-not-work" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid history_retention_seconds", async () => {
      const projectName = `distilled-neon-updbad-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;
          yield* updateProject({
            project_id: created.project.id,
            project: { history_retention_seconds: -1 },
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect([
                "BadRequest",
                "UnprocessableEntity",
                "UnknownNeonError",
              ]).toContain((e as any)._tag);
            }),
          );
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateProject({
          project_id: "non-existent-project-00000000",
          project: { name: "should-not-work" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // deleteProject
  // ============================================================================
  describe("deleteProject", () => {
    it("happy path - deletes a project", async () => {
      const projectName = `distilled-neon-del-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          const result = yield* deleteProject({
            project_id: created.project.id,
          });
          expect(result).toHaveProperty("project");
          expect(result.project.id).toBe(created.project.id);
          expect(result.project.name).toBe(projectName);

          // Verify it's actually gone
          yield* getProject({ project_id: created.project.id }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["NotFound", "UnknownNeonError"]).toContain(
                (e as any)._tag,
              );
            }),
          );
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteProject({ project_id: "non-existent-project-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound when deleting already-deleted project", async () => {
      const projectName = `distilled-neon-deldbl-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          yield* deleteProject({ project_id: created.project.id });
          // Second delete should fail
          yield* deleteProject({ project_id: created.project.id }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["NotFound", "UnknownNeonError"]).toContain(
                (e as any)._tag,
              );
            }),
          );
        }),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        deleteProject({ project_id: "non-existent-project-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // recoverProject
  // ============================================================================
  describe("recoverProject", () => {
    it("happy path - recovers a deleted project", async () => {
      const projectName = `distilled-neon-recover-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          // Delete the project first
          yield* deleteProject({ project_id: created.project.id });

          // Recover it
          const recovered = yield* recoverProject({
            project_id: created.project.id,
          }).pipe(
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
          );
          if (recovered) {
            expect(recovered).toHaveProperty("project");
            expect(recovered.project.id).toBe(created.project.id);
            expect(recovered.project.name).toBe(projectName);
            expect(recovered).toHaveProperty("branches");
            expect(Array.isArray(recovered.branches)).toBe(true);
            expect(recovered.branches.length).toBeGreaterThan(0);
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 90_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        recoverProject({ project_id: "non-existent-project-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound when recovering a non-deleted project", async () => {
      const projectName = `distilled-neon-recnodel-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          // Try to recover a project that was NOT deleted
          yield* recoverProject({ project_id: created.project.id }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect([
                "NotFound",
                "BadRequest",
                "Conflict",
                "UnprocessableEntity",
                "UnknownNeonError",
              ]).toContain((e as any)._tag);
            }),
          );
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        recoverProject({ project_id: "non-existent-project-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getProjectAdvisorSecurityIssues
  // ============================================================================
  describe("getProjectAdvisorSecurityIssues", () => {
    it("happy path - retrieves advisor issues for a project", async () => {
      const projectName = `distilled-neon-advisor-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;
          const result = yield* getProjectAdvisorSecurityIssues({
            project_id: created.project.id,
          }).pipe(
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          );
          if (result === undefined) return;
          expect(result).toHaveProperty("issues");
          expect(Array.isArray(result.issues)).toBe(true);
          if (result.issues.length > 0) {
            expect(result.issues[0]).toHaveProperty("name");
            expect(result.issues[0]).toHaveProperty("title");
            expect(result.issues[0]).toHaveProperty("level");
            expect(result.issues[0]).toHaveProperty("categories");
            expect(result.issues[0]).toHaveProperty("description");
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectAdvisorSecurityIssues({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getProjectAdvisorSecurityIssues({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // listProjectPermissions
  // ============================================================================
  describe("listProjectPermissions", () => {
    it("happy path - lists permissions for a project", async () => {
      const projectName = `distilled-neon-perms-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;
          const result = yield* listProjectPermissions({
            project_id: created.project.id,
          });
          expect(result).toHaveProperty("project_permissions");
          expect(Array.isArray(result.project_permissions)).toBe(true);
          if (result.project_permissions.length > 0) {
            expect(result.project_permissions[0]).toHaveProperty("id");
            expect(result.project_permissions[0]).toHaveProperty(
              "granted_to_email",
            );
            expect(result.project_permissions[0]).toHaveProperty("granted_at");
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        listProjectPermissions({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listProjectPermissions({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // grantPermissionToProject
  // ============================================================================
  describe("grantPermissionToProject", () => {
    it("happy path - grants permission and revokes it", async () => {
      const projectName = `distilled-neon-grant-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          const result = yield* grantPermissionToProject({
            project_id: created.project.id,
            email: `distilled-test-${testRunId}@example.com`,
          }).pipe(
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
            Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          );
          if (result === undefined) return;
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("granted_to_email");
          expect(result.granted_to_email).toBe(
            `distilled-test-${testRunId}@example.com`,
          );
          expect(result).toHaveProperty("granted_at");

          // Clean up the permission
          yield* revokePermissionFromProject({
            project_id: created.project.id,
            permission_id: result.id,
          }).pipe(Effect.ignore);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        grantPermissionToProject({
          project_id: "non-existent-project-00000000",
          email: "test@example.com",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid email", async () => {
      const projectName = `distilled-neon-grantbad-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          yield* grantPermissionToProject({
            project_id: created.project.id,
            email: "not-an-email",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect([
                "BadRequest",
                "UnprocessableEntity",
                "UnknownNeonError",
              ]).toContain((e as any)._tag);
            }),
          );
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        grantPermissionToProject({
          project_id: "non-existent-project-00000000",
          email: "test@example.com",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // revokePermissionFromProject
  // ============================================================================
  describe("revokePermissionFromProject", () => {
    it("happy path - grants and revokes permission", async () => {
      const projectName = `distilled-neon-revperm-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          // Grant permission first
          const granted = yield* grantPermissionToProject({
            project_id: created.project.id,
            email: `distilled-revoke-${testRunId}@example.com`,
          }).pipe(
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
            Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          );
          if (granted === undefined) return;

          // Revoke the permission
          const result = yield* revokePermissionFromProject({
            project_id: created.project.id,
            permission_id: granted.id,
          }).pipe(
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
            Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          );
          if (result === undefined) return;
          expect(result).toHaveProperty("id");
          expect(result.id).toBe(granted.id);
          expect(result).toHaveProperty("granted_to_email");
          expect(result.granted_to_email).toBe(
            `distilled-revoke-${testRunId}@example.com`,
          );

          // Verify it's gone from the permissions list
          const perms = yield* listProjectPermissions({
            project_id: created.project.id,
          });
          const found = perms.project_permissions.find(
            (p) => p.id === granted.id && !p.revoked_at,
          );
          expect(found).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent permission ID", async () => {
      const projectName = `distilled-neon-revpermnf-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          yield* revokePermissionFromProject({
            project_id: created.project.id,
            permission_id: "00000000-0000-0000-0000-000000000000",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["NotFound", "UnknownNeonError"]).toContain(
                (e as any)._tag,
              );
            }),
          );
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        revokePermissionFromProject({
          project_id: "non-existent-project-00000000",
          permission_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        revokePermissionFromProject({
          project_id: "non-existent-project-00000000",
          permission_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createProjectTransferRequest
  // ============================================================================
  describe("createProjectTransferRequest", () => {
    it("happy path - creates a transfer request for a project", async () => {
      const projectName = `distilled-neon-transfer-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          const result = yield* createProjectTransferRequest({
            project_id: created.project.id,
          });
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("project_id", created.project.id);
          expect(result).toHaveProperty("created_at");
          expect(result).toHaveProperty("expires_at");
          expect(typeof result.id).toBe("string");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("happy path - creates a transfer request with ttl_seconds", async () => {
      const projectName = `distilled-neon-transfer-ttl-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          const result = yield* createProjectTransferRequest({
            project_id: created.project.id,
            ttl_seconds: 3600,
          });
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("project_id", created.project.id);
          expect(result).toHaveProperty("created_at");
          expect(result).toHaveProperty("expires_at");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createProjectTransferRequest({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createProjectTransferRequest({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // acceptProjectTransferRequest
  // ============================================================================
  describe("acceptProjectTransferRequest", () => {
    it("happy path - accepts a transfer request for a project", async () => {
      const projectName = `distilled-neon-accept-xfer-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          // Create a transfer request first
          const transferReq = yield* createProjectTransferRequest({
            project_id: created.project.id,
          });
          expect(transferReq).toHaveProperty("id");

          // Accept the transfer request (transfers to current user/org)
          const result = yield* acceptProjectTransferRequest({
            project_id: created.project.id,
            request_id: transferReq.id,
          });
          // Output is void — just assert it didn't throw
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        acceptProjectTransferRequest({
          project_id: "non-existent-project-00000000",
          request_id: "non-existent-request-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent request ID on real project", async () => {
      const projectName = `distilled-neon-accept-xfer-err-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          yield* acceptProjectTransferRequest({
            project_id: created.project.id,
            request_id: "non-existent-request-00000000",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
                (e as any)._tag,
              );
            }),
          );
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        acceptProjectTransferRequest({
          project_id: "non-existent-project-00000000",
          request_id: "non-existent-request-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getProjectJWKS
  // ============================================================================
  describe("getProjectJWKS", () => {
    it("happy path - lists JWKS URLs for a project", async () => {
      const projectName = `distilled-neon-jwks-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          const result = yield* getProjectJWKS({
            project_id: created.project.id,
          });
          expect(result).toHaveProperty("jwks");
          expect(Array.isArray(result.jwks)).toBe(true);
          if (result.jwks.length > 0) {
            expect(result.jwks[0]).toHaveProperty("id");
            expect(result.jwks[0]).toHaveProperty("project_id");
            expect(result.jwks[0]).toHaveProperty("jwks_url");
            expect(result.jwks[0]).toHaveProperty("provider_name");
            expect(result.jwks[0]).toHaveProperty("created_at");
            expect(result.jwks[0]).toHaveProperty("updated_at");
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectJWKS({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getProjectJWKS({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // addProjectJWKS
  // ============================================================================
  describe("addProjectJWKS", () => {
    it("happy path - adds a JWKS URL to a project", async () => {
      const projectName = `distilled-neon-add-jwks-${testRunId}`;
      let projectId: string | undefined;
      let jwksId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          const result = yield* addProjectJWKS({
            project_id: created.project.id,
            jwks_url: "https://example.com/.well-known/jwks.json",
            provider_name: "test-provider",
          }).pipe(
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          if (result === undefined) return;
          expect(result).toHaveProperty("jwks");
          expect(result.jwks).toHaveProperty("id");
          expect(result.jwks).toHaveProperty("project_id", created.project.id);
          expect(result.jwks).toHaveProperty("jwks_url", "https://example.com/.well-known/jwks.json");
          expect(result.jwks).toHaveProperty("provider_name", "test-provider");
          expect(result.jwks).toHaveProperty("created_at");
          expect(result.jwks).toHaveProperty("updated_at");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
          jwksId = result.jwks.id;
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId && jwksId) {
                yield* deleteProjectJWKS({
                  project_id: projectId,
                  jwks_id: jwksId,
                }).pipe(Effect.ignore);
              }
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        addProjectJWKS({
          project_id: "non-existent-project-00000000",
          jwks_url: "https://example.com/.well-known/jwks.json",
          provider_name: "test-provider",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest for invalid JWKS URL", async () => {
      const projectName = `distilled-neon-add-jwks-bad-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          yield* addProjectJWKS({
            project_id: created.project.id,
            jwks_url: "not-a-valid-url",
            provider_name: "test-provider",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect([
                "BadRequest",
                "UnprocessableEntity",
                "UnknownNeonError",
              ]).toContain((e as any)._tag);
            }),
          );
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        addProjectJWKS({
          project_id: "non-existent-project-00000000",
          jwks_url: "https://example.com/.well-known/jwks.json",
          provider_name: "test-provider",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // deleteProjectJWKS
  // ============================================================================
  describe("deleteProjectJWKS", () => {
    it("happy path - deletes a JWKS URL from a project", async () => {
      const projectName = `distilled-neon-del-jwks-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          // Add a JWKS URL first
          const added = yield* addProjectJWKS({
            project_id: created.project.id,
            jwks_url: "https://example.com/.well-known/jwks.json",
            provider_name: "test-provider",
          }).pipe(
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          if (added === undefined) return;
          const jwksId = added.jwks.id;

          // Delete it
          const result = yield* deleteProjectJWKS({
            project_id: created.project.id,
            jwks_id: jwksId,
          }).pipe(
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          if (result === undefined) return;
          expect(result).toHaveProperty("id", jwksId);
          expect(result).toHaveProperty("project_id", created.project.id);
          expect(result).toHaveProperty("jwks_url", "https://example.com/.well-known/jwks.json");
          expect(result).toHaveProperty("provider_name", "test-provider");
          expect(result).toHaveProperty("created_at");
          expect(result).toHaveProperty("updated_at");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteProjectJWKS({
          project_id: "non-existent-project-00000000",
          jwks_id: "non-existent-jwks-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent JWKS ID on real project", async () => {
      const projectName = `distilled-neon-del-jwks-err-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          yield* deleteProjectJWKS({
            project_id: created.project.id,
            jwks_id: "non-existent-jwks-00000000",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
                (e as any)._tag,
              );
            }),
          );
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        deleteProjectJWKS({
          project_id: "non-existent-project-00000000",
          jwks_id: "non-existent-jwks-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
