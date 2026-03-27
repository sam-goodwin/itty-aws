import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NotFound, UnprocessableEntity, Forbidden } from "../src/errors";
import { getV1Projects } from "../src/operations/getV1Projects";
import { getV1ProjectsById } from "../src/operations/getV1ProjectsById";
import { postV1Projects } from "../src/operations/postV1Projects";
import { patchV1ProjectsById } from "../src/operations/patchV1ProjectsById";
import { deleteV1ProjectsById } from "../src/operations/deleteV1ProjectsById";
import { getV1ProjectsByProjectIdDatabases } from "../src/operations/getV1ProjectsByProjectIdDatabases";
import { postV1ProjectsByIdTransfer } from "../src/operations/postV1ProjectsByIdTransfer";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

const TEST_SUFFIX = "projects";

const NON_EXISTENT_ID = "non-existent-project-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound ||
  error instanceof Forbidden ||
  error instanceof UnprocessableEntity;

describe("projects", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject(TEST_SUFFIX));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject(TEST_SUFFIX));
  }, 60_000);

  const getProj = () => getTestProject(TEST_SUFFIX);

  // ==========================================================================
  // getV1Projects (list)
  // ==========================================================================

  describe("getV1Projects", () => {
    it("happy path - lists projects", async () => {
      const result = await runEffect(getV1Projects({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("happy path - lists projects with pagination", async () => {
      const result = await runEffect(getV1Projects({ limit: 1 }));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
    }, 30_000);
  });

  // ==========================================================================
  // getV1ProjectsById
  // ==========================================================================

  describe("getV1ProjectsById", () => {
    it("happy path - gets project by id", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1ProjectsById({ id: proj.projectId }),
      );

      expect(result.data.id).toBe(proj.projectId);
      expect(result.data.name).toBeDefined();
      expect(result.data.createdAt).toBeDefined();
      expect(result.data.workspace).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getV1ProjectsById({ id: NON_EXISTENT_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // patchV1ProjectsById
  // ==========================================================================

  describe("patchV1ProjectsById", () => {
    it("happy path - updates project name", async () => {
      const proj = getProj();
      const newName = `${proj.projectName}-updated`;

      const updated = await runEffect(
        patchV1ProjectsById({ id: proj.projectId, name: newName }),
      );

      expect(updated.data.name).toBe(newName);

      // Restore original name
      await runEffect(
        patchV1ProjectsById({
          id: proj.projectId,
          name: proj.projectName,
        }).pipe(Effect.ignore),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        patchV1ProjectsById({ id: NON_EXISTENT_ID, name: "test" }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // getV1ProjectsByProjectIdDatabases
  // ==========================================================================

  describe("getV1ProjectsByProjectIdDatabases", () => {
    it("happy path - lists databases for project", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1ProjectsByProjectIdDatabases({ projectId: proj.projectId }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThan(0);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getV1ProjectsByProjectIdDatabases({
          projectId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // postV1ProjectsByIdTransfer
  // ==========================================================================

  describe("postV1ProjectsByIdTransfer", () => {
    // NOTE: Cannot test happy path without a valid recipient access token

    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        postV1ProjectsByIdTransfer({
          id: NON_EXISTENT_ID,
          recipientAccessToken: "fake-token",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // postV1Projects & deleteV1ProjectsById (create + delete lifecycle)
  // ==========================================================================

  describe("postV1Projects & deleteV1ProjectsById", () => {
    it("happy path - creates and deletes a project", async () => {
      const projectName = `distilled-prisma-create-${testRunId}`;
      let createdProjectId: string | null = null;

      try {
        const created = await runEffect(
          postV1Projects({
            name: projectName,
            region: "us-east-1",
          }),
        );

        createdProjectId = created.data.id;
        expect(created.data.name).toBe(projectName);
        expect(created.data.id).toBeDefined();
        expect(created.data.workspace).toBeDefined();

        // Verify project exists
        const fetched = await runEffect(
          getV1ProjectsById({ id: createdProjectId }),
        );
        expect(fetched.data.id).toBe(createdProjectId);
      } finally {
        if (createdProjectId) {
          await runEffect(
            deleteV1ProjectsById({ id: createdProjectId }).pipe(Effect.ignore),
          );
        }
      }
    }, 120_000);

    it("error - NotFound when deleting non-existent project", async () => {
      const error = await runEffect(
        deleteV1ProjectsById({ id: NON_EXISTENT_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);
  });
});
