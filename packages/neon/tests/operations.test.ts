import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./setup";
import { createProject } from "../src/operations/createProject";
import { deleteProject } from "../src/operations/deleteProject";
import { listProjectOperations } from "../src/operations/listProjectOperations";
import { getProjectOperation } from "../src/operations/getProjectOperation";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Operations", () => {
  // ============================================================================
  // listProjectOperations
  // ============================================================================
  describe("listProjectOperations", () => {
    it("happy path - lists operations for a project", async () => {
      const projectName = `distilled-neon-ops-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;
          const result = yield* listProjectOperations({
            project_id: created.project.id,
          });
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
          // A newly created project should have at least one operation
          expect(result.operations.length).toBeGreaterThan(0);
          expect(result.operations[0]).toHaveProperty("id");
          expect(result.operations[0]).toHaveProperty("project_id");
          expect(result.operations[0]).toHaveProperty("action");
          expect(result.operations[0]).toHaveProperty("status");
          expect(result.operations[0]).toHaveProperty("created_at");
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

    it("happy path - lists operations with limit", async () => {
      const projectName = `distilled-neon-opslim-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;
          const result = yield* listProjectOperations({
            project_id: created.project.id,
            limit: 1,
          });
          expect(result).toHaveProperty("operations");
          expect(result.operations.length).toBeLessThanOrEqual(1);
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
        listProjectOperations({
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
        listProjectOperations({
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
  // getProjectOperation
  // ============================================================================
  describe("getProjectOperation", () => {
    it("happy path - retrieves an operation by ID", async () => {
      const projectName = `distilled-neon-getop-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          // List operations to get a real operation ID
          const ops = yield* listProjectOperations({
            project_id: created.project.id,
            limit: 1,
          });
          expect(ops.operations.length).toBeGreaterThan(0);
          const operationId = ops.operations[0].id;

          const result = yield* getProjectOperation({
            project_id: created.project.id,
            operation_id: operationId,
          });
          expect(result).toHaveProperty("operation");
          expect(result.operation.id).toBe(operationId);
          expect(result.operation.project_id).toBe(created.project.id);
          expect(result.operation).toHaveProperty("action");
          expect(result.operation).toHaveProperty("status");
          expect(result.operation).toHaveProperty("created_at");
          expect(result.operation).toHaveProperty("total_duration_ms");
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

    it("error - NotFound for non-existent operation ID", async () => {
      const projectName = `distilled-neon-getopnf-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          yield* getProjectOperation({
            project_id: created.project.id,
            operation_id: "00000000-0000-0000-0000-000000000000",
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
        getProjectOperation({
          project_id: "non-existent-project-00000000",
          operation_id: "00000000-0000-0000-0000-000000000000",
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
        getProjectOperation({
          project_id: "non-existent-project-00000000",
          operation_id: "00000000-0000-0000-0000-000000000000",
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
