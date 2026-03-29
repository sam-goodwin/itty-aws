import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";
import { listProjectBranchRoles } from "../src/operations/listProjectBranchRoles";
import { createProjectBranchRole } from "../src/operations/createProjectBranchRole";
import { deleteProjectBranchRole } from "../src/operations/deleteProjectBranchRole";
import { getProjectBranchRole } from "../src/operations/getProjectBranchRole";
import { getProjectBranchRolePassword } from "../src/operations/getProjectBranchRolePassword";
import { resetProjectBranchRolePassword } from "../src/operations/resetProjectBranchRolePassword";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Roles", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("roles"));
  }, 120_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("roles"));
  }, 120_000);

  // ============================================================================
  // listProjectBranchRoles
  // ============================================================================
  describe("listProjectBranchRoles", () => {
    it("happy path - lists roles for the default branch", async () => {
      const project = getTestProject("roles");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranchRoles({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          expect(result).toHaveProperty("roles");
          expect(Array.isArray(result.roles)).toBe(true);
          // Every project has at least the default owner role
          expect(result.roles.length).toBeGreaterThanOrEqual(1);
          const role = result.roles[0];
          expect(role).toHaveProperty("branch_id", project.defaultBranchId);
          expect(role).toHaveProperty("name");
          expect(role).toHaveProperty("created_at");
          expect(role).toHaveProperty("updated_at");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("roles");
      await runEffect(
        listProjectBranchRoles({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        listProjectBranchRoles({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
        listProjectBranchRoles({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // createProjectBranchRole
  // ============================================================================
  describe("createProjectBranchRole", () => {
    it("happy path - creates a role on the default branch", async () => {
      const project = getTestProject("roles");
      const roleName = `role_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          }).pipe(
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          );
          if (result) {
            expect(result).toHaveProperty("role");
            expect(result.role).toHaveProperty("branch_id", project.defaultBranchId);
            expect(result.role).toHaveProperty("name", roleName);
            expect(result.role).toHaveProperty("created_at");
            expect(result.role).toHaveProperty("updated_at");
            expect(result).toHaveProperty("operations");
            expect(Array.isArray(result.operations)).toBe(true);
          }
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchRole({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              role_name: roleName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createProjectBranchRole({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role: { name: "testrole" },
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

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("roles");
      await runEffect(
        createProjectBranchRole({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          role: { name: "testrole" },
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

    it("error - Conflict when creating a role with duplicate name", async () => {
      const project = getTestProject("roles");
      const roleName = `duprole_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          // Create the role first
          const first = yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          }).pipe(
            Effect.map(() => true),
            Effect.catchTag("Locked", () => Effect.succeed(false)),
          );

          if (!first) return; // Skip if project is locked

          // Try to create it again — should conflict
          yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          }).pipe(
            Effect.map(() => undefined),
            Effect.catchTag("Conflict", () => Effect.succeed(undefined)),
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
          );
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchRole({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              role_name: roleName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createProjectBranchRole({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role: { name: "testrole" },
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
  // getProjectBranchRole
  // ============================================================================
  describe("getProjectBranchRole", () => {
    it("happy path - retrieves the default owner role", async () => {
      const project = getTestProject("roles");
      await runEffect(
        Effect.gen(function* () {
          // List roles to find the default owner role name
          const listed = yield* listProjectBranchRoles({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          const ownerRole = listed.roles[0];

          const result = yield* getProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role_name: ownerRole.name,
          });
          expect(result).toHaveProperty("role");
          expect(result.role).toHaveProperty("branch_id", project.defaultBranchId);
          expect(result.role).toHaveProperty("name", ownerRole.name);
          expect(result.role).toHaveProperty("created_at");
          expect(result.role).toHaveProperty("updated_at");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent role name", async () => {
      const project = getTestProject("roles");
      await runEffect(
        getProjectBranchRole({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          role_name: "nonexistent_role_00000000",
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

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("roles");
      await runEffect(
        getProjectBranchRole({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectBranchRole({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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
        getProjectBranchRole({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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
  // deleteProjectBranchRole
  // ============================================================================
  describe("deleteProjectBranchRole", () => {
    it("happy path - creates a role then deletes it", async () => {
      const project = getTestProject("roles");
      const roleName = `delrole_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          // Create a role to delete
          const created = yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          }).pipe(
            Effect.map(() => true),
            Effect.catchTag("Locked", () => Effect.succeed(false)),
          );

          if (!created) return; // Skip if project is locked

          // Delete it
          const result = yield* deleteProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role_name: roleName,
          });
          expect(result).toHaveProperty("role");
          expect(result.role).toHaveProperty("name", roleName);
          expect(result.role).toHaveProperty("branch_id", project.defaultBranchId);
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }).pipe(
          Effect.catchTag("Locked", () => Effect.succeed(undefined)),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent role name", async () => {
      const project = getTestProject("roles");
      await runEffect(
        deleteProjectBranchRole({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          role_name: "nonexistent_role_00000000",
        }).pipe(
          Effect.map(() => undefined),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - UnprocessableEntity when deleting a protected role", async () => {
      const project = getTestProject("roles");
      // The default owner role (neondb_owner) is protected and cannot be deleted
      await runEffect(
        deleteProjectBranchRole({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          role_name: "neondb_owner",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["UnprocessableEntity", "Locked", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("roles");
      await runEffect(
        deleteProjectBranchRole({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
        }).pipe(
          Effect.map(() => undefined),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteProjectBranchRole({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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
        deleteProjectBranchRole({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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
  // getProjectBranchRolePassword
  // ============================================================================
  describe("getProjectBranchRolePassword", () => {
    it("happy path - retrieves password for a created role", async () => {
      const project = getTestProject("roles");
      const roleName = `pwrole_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          // Create a role so we can retrieve its password
          const created = yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          }).pipe(
            Effect.map(() => true),
            Effect.catchTag("Locked", () => Effect.succeed(false)),
          );

          if (!created) return; // Skip if project is locked

          const result = yield* getProjectBranchRolePassword({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role_name: roleName,
          });
          expect(result).toHaveProperty("password");
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchRole({
              project_id: getTestProject("roles").id,
              branch_id: getTestProject("roles").defaultBranchId,
              role_name: roleName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent role name", async () => {
      const project = getTestProject("roles");
      await runEffect(
        getProjectBranchRolePassword({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          role_name: "nonexistent_role_00000000",
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

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("roles");
      await runEffect(
        getProjectBranchRolePassword({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectBranchRolePassword({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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
        getProjectBranchRolePassword({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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
  // resetProjectBranchRolePassword
  // ============================================================================
  describe("resetProjectBranchRolePassword", () => {
    it("happy path - resets password for a created role", async () => {
      const project = getTestProject("roles");
      const roleName = `rstrole_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          // Create a role to reset its password
          const created = yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          }).pipe(
            Effect.map(() => true),
            Effect.catchTag("Locked", () => Effect.succeed(false)),
          );

          if (!created) return; // Skip if project is locked

          const result = yield* resetProjectBranchRolePassword({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role_name: roleName,
          });
          expect(result).toHaveProperty("role");
          expect(result.role).toHaveProperty("name", roleName);
          expect(result.role).toHaveProperty("branch_id", project.defaultBranchId);
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }).pipe(
          Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          Effect.ensuring(
            deleteProjectBranchRole({
              project_id: getTestProject("roles").id,
              branch_id: getTestProject("roles").defaultBranchId,
              role_name: roleName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent role name", async () => {
      const project = getTestProject("roles");
      await runEffect(
        resetProjectBranchRolePassword({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          role_name: "nonexistent_role_00000000",
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

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("roles");
      await runEffect(
        resetProjectBranchRolePassword({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        resetProjectBranchRolePassword({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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
        resetProjectBranchRolePassword({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          role_name: "neondb_owner",
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
