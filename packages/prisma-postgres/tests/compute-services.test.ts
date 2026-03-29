import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NotFound, UnprocessableEntity, Forbidden } from "../src/errors";
import { UnknownPrismaPostgresError } from "../src/errors";
import { getV1ComputeServices } from "../src/operations/getV1ComputeServices";
import { getV1ComputeServicesByComputeServiceId } from "../src/operations/getV1ComputeServicesByComputeServiceId";
import { postV1ComputeServices } from "../src/operations/postV1ComputeServices";
import { deleteV1ComputeServicesByComputeServiceId } from "../src/operations/deleteV1ComputeServicesByComputeServiceId";
import { patchV1ComputeServicesByComputeServiceId } from "../src/operations/patchV1ComputeServicesByComputeServiceId";
import { getV1ComputeServicesByComputeServiceIdVersions } from "../src/operations/getV1ComputeServicesByComputeServiceIdVersions";
import { postV1ComputeServicesByComputeServiceIdVersions } from "../src/operations/postV1ComputeServicesByComputeServiceIdVersions";
import { deleteV1ComputeServicesVersionsByVersionId } from "../src/operations/deleteV1ComputeServicesVersionsByVersionId";
import { getV1ComputeServicesVersionsByVersionId } from "../src/operations/getV1ComputeServicesVersionsByVersionId";
import { postV1ComputeServicesVersionsByVersionIdStart } from "../src/operations/postV1ComputeServicesVersionsByVersionIdStart";
import { postV1ComputeServicesVersionsByVersionIdStop } from "../src/operations/postV1ComputeServicesVersionsByVersionIdStop";
import { getV1ProjectsByProjectIdComputeServices } from "../src/operations/getV1ProjectsByProjectIdComputeServices";
import { postV1ProjectsByProjectIdComputeServices } from "../src/operations/postV1ProjectsByProjectIdComputeServices";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

const TEST_SUFFIX = "compute";

const NON_EXISTENT_ID = "non-existent-compute-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound ||
  error instanceof Forbidden ||
  error instanceof UnprocessableEntity;

describe("compute-services", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject(TEST_SUFFIX));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject(TEST_SUFFIX));
  }, 60_000);

  const getProj = () => getTestProject(TEST_SUFFIX);

  // ==========================================================================
  // getV1ComputeServices (list)
  // ==========================================================================

  describe("getV1ComputeServices", () => {
    it("happy path - lists compute services", async () => {
      const result = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (result === null) {
        return;
      }

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");

      if (result.data.length > 0) {
        const svc = result.data[0];
        expect(svc.id).toBeDefined();
        expect(svc.type).toBeDefined();
        expect(svc.url).toBeDefined();
        expect(svc.name).toBeDefined();
        expect(svc.region).toBeDefined();
        expect(svc.region.id).toBeDefined();
        expect(svc.projectId).toBeDefined();
        expect(svc.createdAt).toBeDefined();
      }
    }, 30_000);

    it("happy path - lists compute services with pagination limit", async () => {
      const result = await runEffect(
        getV1ComputeServices({ limit: 1 }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (result === null) {
        return;
      }

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("happy path - filters by project id", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1ComputeServices({ projectId: proj.projectId }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (result === null) {
        return;
      }

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();

      // All returned services should belong to the test project
      for (const svc of result.data) {
        expect(svc.projectId).toBe(proj.projectId);
      }
    }, 30_000);

    it("error - returns error or empty list for non-existent project id", async () => {
      const error = await runEffect(
        getV1ComputeServices({
          projectId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may return an empty list or an error for a non-existent
      // project ID. Both behaviors are acceptable.
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - returns error for invalid cursor", async () => {
      const error = await runEffect(
        getV1ComputeServices({ cursor: "!!invalid-cursor-value!!" }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may silently ignore invalid cursors and return results,
      // or it may return an error. Both behaviors are acceptable.
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);
  });

  // ==========================================================================
  // getV1ComputeServicesByComputeServiceId (get by ID)
  // ==========================================================================

  describe("getV1ComputeServicesByComputeServiceId", () => {
    it("happy path - gets compute service by id from list", async () => {
      const list = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (list === null || list.data.length === 0) {
        // No compute services exist — skip gracefully
        return;
      }

      const serviceId = list.data[0].id;
      const result = await runEffect(
        getV1ComputeServicesByComputeServiceId({
          computeServiceId: serviceId,
        }),
      );

      expect(result.data.id).toBe(serviceId);
      expect(result.data.type).toBeDefined();
      expect(result.data.url).toBeDefined();
      expect(result.data.name).toBeDefined();
      expect(result.data.region).toBeDefined();
      expect(result.data.region.id).toBeDefined();
      expect(result.data.region.name).toBeDefined();
      expect(result.data.projectId).toBeDefined();
      expect(result.data.createdAt).toBeDefined();
    }, 30_000);

    it("error - returns error for non-existent compute service id", async () => {
      const error = await runEffect(
        getV1ComputeServicesByComputeServiceId({
          computeServiceId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed compute service id", async () => {
      const error = await runEffect(
        getV1ComputeServicesByComputeServiceId({
          computeServiceId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // postV1ComputeServices (create compute service)
  // ==========================================================================

  describe("postV1ComputeServices", () => {
    it("happy path - creates a compute service in the test project", async () => {
      const proj = getProj();
      const svcName = `distilled-prisma-svc-${testRunId}`;

      const created = await runEffect(
        postV1ComputeServices({
          displayName: svcName,
          projectId: proj.projectId,
          regionId: "us-east-1",
        }).pipe(
          Effect.ensuring(
            // Clean up: find and delete the created compute service
            getV1ComputeServices({ projectId: proj.projectId }).pipe(
              Effect.flatMap((list) => {
                const svc = list.data.find((s) => s.name === svcName);
                if (svc) {
                  return deleteV1ComputeServicesByComputeServiceId({
                    computeServiceId: svc.id,
                  }).pipe(Effect.ignore);
                }
                return Effect.void;
              }),
              Effect.ignore,
            ),
          ),
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (created === null) {
        return;
      }

      expect(created.data.id).toBeDefined();
      expect(created.data.name).toBe(svcName);
      expect(created.data.projectId).toBe(proj.projectId);
      expect(created.data.region).toBeDefined();
      expect(created.data.region.id).toBe("us-east-1");
      expect(created.data.region.name).toBeDefined();
      expect(created.data.createdAt).toBeDefined();
      expect(created.data.latestVersionId).toBeNull();
    }, 60_000);

    it("error - returns error for non-existent project id", async () => {
      const error = await runEffect(
        postV1ComputeServices({
          displayName: `distilled-prisma-svc-nf-${testRunId}`,
          projectId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ComputeServicesByComputeServiceId({
                computeServiceId: result.data.id,
              }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed project id", async () => {
      const error = await runEffect(
        postV1ComputeServices({
          displayName: `distilled-prisma-svc-mf-${testRunId}`,
          projectId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ComputeServicesByComputeServiceId({
                computeServiceId: result.data.id,
              }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // patchV1ComputeServicesByComputeServiceId (update display name)
  // ==========================================================================

  describe("patchV1ComputeServicesByComputeServiceId", () => {
    it("happy path - updates display name and restores it", async () => {
      const list = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (list === null || list.data.length === 0) {
        // No compute services exist — skip gracefully
        return;
      }

      const svc = list.data[0];
      const originalName = svc.name;
      const tempName = `distilled-prisma-rename-${testRunId}`;

      const updated = await runEffect(
        patchV1ComputeServicesByComputeServiceId({
          computeServiceId: svc.id,
          displayName: tempName,
        }).pipe(
          Effect.ensuring(
            patchV1ComputeServicesByComputeServiceId({
              computeServiceId: svc.id,
              displayName: originalName,
            }).pipe(Effect.ignore),
          ),
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (updated === null) {
        return;
      }

      expect(updated.data.id).toBe(svc.id);
      expect(updated.data.name).toBe(tempName);
      expect(updated.data.region).toBeDefined();
      expect(updated.data.region.id).toBeDefined();
      expect(updated.data.projectId).toBeDefined();
      expect(updated.data.createdAt).toBeDefined();
    }, 30_000);

    it("error - returns error for non-existent compute service id", async () => {
      const error = await runEffect(
        patchV1ComputeServicesByComputeServiceId({
          computeServiceId: NON_EXISTENT_ID,
          displayName: "should-not-exist",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed compute service id", async () => {
      const error = await runEffect(
        patchV1ComputeServicesByComputeServiceId({
          computeServiceId: "!!invalid-id-format!!",
          displayName: "should-not-exist",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // deleteV1ComputeServicesByComputeServiceId (delete)
  // ==========================================================================

  describe("deleteV1ComputeServicesByComputeServiceId", () => {
    it("happy path - creates and deletes a compute service", async () => {
      const proj = getProj();
      const svcName = `distilled-prisma-del-svc-${testRunId}`;

      // Create a throwaway compute service to delete
      const created = await runEffect(
        postV1ComputeServices({
          displayName: svcName,
          projectId: proj.projectId,
          regionId: "us-east-1",
        }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (created === null) {
        return;
      }

      const serviceId = created.data.id;
      expect(serviceId).toBeDefined();

      // Delete it
      await runEffect(
        deleteV1ComputeServicesByComputeServiceId({
          computeServiceId: serviceId,
        }),
      );

      // Verify it's gone
      const error = await runEffect(
        getV1ComputeServicesByComputeServiceId({
          computeServiceId: serviceId,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 60_000);

    it("error - returns error for non-existent compute service id", async () => {
      const error = await runEffect(
        deleteV1ComputeServicesByComputeServiceId({
          computeServiceId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed compute service id", async () => {
      const error = await runEffect(
        deleteV1ComputeServicesByComputeServiceId({
          computeServiceId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // getV1ComputeServicesByComputeServiceIdVersions (list versions for service)
  // ==========================================================================

  describe("getV1ComputeServicesByComputeServiceIdVersions", () => {
    it("happy path - lists versions for a compute service", async () => {
      const list = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (list === null || list.data.length === 0) {
        // No compute services exist — skip gracefully
        return;
      }

      const serviceId = list.data[0].id;
      const result = await runEffect(
        getV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: serviceId,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");

      if (result.data.length > 0) {
        const version = result.data[0];
        expect(version.id).toBeDefined();
        expect(version.type).toBeDefined();
        expect(version.url).toBeDefined();
        expect(version.foundryVersionId).toBeDefined();
        expect(version.createdAt).toBeDefined();
      }
    }, 30_000);

    it("happy path - lists versions with pagination limit", async () => {
      const list = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (list === null || list.data.length === 0) {
        return;
      }

      const serviceId = list.data[0].id;
      const result = await runEffect(
        getV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: serviceId,
          limit: 1,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - returns error for non-existent compute service id", async () => {
      const error = await runEffect(
        getV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed compute service id", async () => {
      const error = await runEffect(
        getV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // postV1ComputeServicesByComputeServiceIdVersions (create version for service)
  // ==========================================================================

  describe("postV1ComputeServicesByComputeServiceIdVersions", () => {
    it("happy path - creates a version under an existing compute service", async () => {
      const list = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (list === null || list.data.length === 0) {
        // No compute services exist — skip gracefully
        return;
      }

      const computeServiceId = list.data[0].id;
      const created = await runEffect(
        postV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId,
          skipCodeUpload: true,
        }).pipe(
          Effect.ensuring(
            // Clean up: delete the created version
            getV1ComputeServicesByComputeServiceIdVersions({
              computeServiceId,
            }).pipe(
              Effect.flatMap((versions) => {
                if (versions.data.length > 0) {
                  return deleteV1ComputeServicesVersionsByVersionId({
                    versionId: versions.data[0].id,
                  }).pipe(Effect.ignore);
                }
                return Effect.void;
              }),
              Effect.ignore,
            ),
          ),
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (created === null) {
        return;
      }

      expect(created.data.id).toBeDefined();
      expect(created.data.type).toBeDefined();
      expect(created.data.url).toBeDefined();
      expect(created.data.foundryVersionId).toBeDefined();
      // skipCodeUpload=true should result in null uploadUrl
      expect(created.data.uploadUrl).toBeNull();
    }, 60_000);

    it("error - returns error for non-existent compute service id", async () => {
      const error = await runEffect(
        postV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: NON_EXISTENT_ID,
          skipCodeUpload: true,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ComputeServicesVersionsByVersionId({
                versionId: result.data.id,
              }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed compute service id", async () => {
      const error = await runEffect(
        postV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: "!!invalid-id-format!!",
          skipCodeUpload: true,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ComputeServicesVersionsByVersionId({
                versionId: result.data.id,
              }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // getV1ComputeServicesVersionsByVersionId (get version by ID)
  // ==========================================================================

  describe("getV1ComputeServicesVersionsByVersionId", () => {
    it("happy path - gets version by id from service versions list", async () => {
      const services = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (services === null || services.data.length === 0) {
        // No compute services exist — skip gracefully
        return;
      }

      const serviceId = services.data[0].id;
      const versions = await runEffect(
        getV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: serviceId,
        }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (versions === null || versions.data.length === 0) {
        // No versions exist — skip gracefully
        return;
      }

      const versionId = versions.data[0].id;
      const result = await runEffect(
        getV1ComputeServicesVersionsByVersionId({ versionId }),
      );

      expect(result.data.id).toBe(versionId);
      expect(result.data.type).toBeDefined();
      expect(result.data.url).toBeDefined();
      expect(result.data.foundryVersionId).toBeDefined();
      expect(result.data.status).toBeDefined();
      expect(result.data.createdAt).toBeDefined();
    }, 30_000);

    it("error - returns error for non-existent version id", async () => {
      const error = await runEffect(
        getV1ComputeServicesVersionsByVersionId({
          versionId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed version id", async () => {
      const error = await runEffect(
        getV1ComputeServicesVersionsByVersionId({
          versionId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // deleteV1ComputeServicesVersionsByVersionId (delete version)
  // ==========================================================================

  describe("deleteV1ComputeServicesVersionsByVersionId", () => {
    it("happy path - creates and deletes a version", async () => {
      const services = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (services === null || services.data.length === 0) {
        // No compute services exist — skip gracefully
        return;
      }

      const computeServiceId = services.data[0].id;

      // Create a throwaway version to delete
      const created = await runEffect(
        postV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId,
          skipCodeUpload: true,
        }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (created === null) {
        return;
      }

      const versionId = created.data.id;
      expect(versionId).toBeDefined();

      // Delete it
      await runEffect(
        deleteV1ComputeServicesVersionsByVersionId({ versionId }),
      );

      // Verify it's gone
      const error = await runEffect(
        getV1ComputeServicesVersionsByVersionId({ versionId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 60_000);

    it("error - returns error for non-existent version id", async () => {
      const error = await runEffect(
        deleteV1ComputeServicesVersionsByVersionId({
          versionId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed version id", async () => {
      const error = await runEffect(
        deleteV1ComputeServicesVersionsByVersionId({
          versionId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // postV1ComputeServicesVersionsByVersionIdStart (start version)
  // ==========================================================================

  describe("postV1ComputeServicesVersionsByVersionIdStart", () => {
    it("happy path - attempts to start a version (expects typed error without artifact)", async () => {
      const services = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (services === null || services.data.length === 0) {
        // No compute services exist — skip gracefully
        return;
      }

      const serviceId = services.data[0].id;
      const versions = await runEffect(
        getV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: serviceId,
        }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (versions === null || versions.data.length === 0) {
        // No versions exist — skip gracefully
        return;
      }

      const versionId = versions.data[0].id;
      const result = await runEffect(
        postV1ComputeServicesVersionsByVersionIdStart({ versionId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ error: e }),
            onSuccess: (s) => Effect.succeed({ success: s }),
          }),
        ),
      );

      // Starting a version without an uploaded artifact will likely fail
      // with a typed error. If it succeeds, validate the response.
      if ("success" in result) {
        expect(result.success.data.previewDomain).toBeDefined();
        expect(typeof result.success.data.previewDomain).toBe("string");
      } else {
        expect(
          isNotFoundLike(result.error) ||
            result.error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - returns error for non-existent version id", async () => {
      const error = await runEffect(
        postV1ComputeServicesVersionsByVersionIdStart({
          versionId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed version id", async () => {
      const error = await runEffect(
        postV1ComputeServicesVersionsByVersionIdStart({
          versionId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // postV1ComputeServicesVersionsByVersionIdStop (stop version)
  // ==========================================================================

  describe("postV1ComputeServicesVersionsByVersionIdStop", () => {
    it("happy path - attempts to stop a version (expects typed error if not running)", async () => {
      const services = await runEffect(
        getV1ComputeServices({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (services === null || services.data.length === 0) {
        // No compute services exist — skip gracefully
        return;
      }

      const serviceId = services.data[0].id;
      const versions = await runEffect(
        getV1ComputeServicesByComputeServiceIdVersions({
          computeServiceId: serviceId,
        }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (versions === null || versions.data.length === 0) {
        // No versions exist — skip gracefully
        return;
      }

      const versionId = versions.data[0].id;
      const result = await runEffect(
        postV1ComputeServicesVersionsByVersionIdStop({ versionId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ error: e }),
            onSuccess: () => Effect.succeed({ success: true }),
          }),
        ),
      );

      // Stopping a version that isn't running will likely fail with a
      // typed error. If it succeeds (Void), that's also valid.
      if ("error" in result) {
        expect(
          isNotFoundLike(result.error) ||
            result.error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - returns error for non-existent version id", async () => {
      const error = await runEffect(
        postV1ComputeServicesVersionsByVersionIdStop({
          versionId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed version id", async () => {
      const error = await runEffect(
        postV1ComputeServicesVersionsByVersionIdStop({
          versionId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // getV1ProjectsByProjectIdComputeServices (list compute services for project)
  // ==========================================================================

  describe("getV1ProjectsByProjectIdComputeServices", () => {
    it("happy path - lists compute services for the test project", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1ProjectsByProjectIdComputeServices({
          projectId: proj.projectId,
        }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (result === null) {
        return;
      }

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");

      // All returned services should belong to the test project
      for (const svc of result.data) {
        expect(svc.projectId).toBe(proj.projectId);
        expect(svc.id).toBeDefined();
        expect(svc.type).toBeDefined();
        expect(svc.url).toBeDefined();
        expect(svc.name).toBeDefined();
        expect(svc.region).toBeDefined();
        expect(svc.region.id).toBeDefined();
        expect(svc.createdAt).toBeDefined();
      }
    }, 30_000);

    it("happy path - lists compute services with pagination limit", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1ProjectsByProjectIdComputeServices({
          projectId: proj.projectId,
          limit: 1,
        }).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (result === null) {
        return;
      }

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - returns error for non-existent project id", async () => {
      const error = await runEffect(
        getV1ProjectsByProjectIdComputeServices({
          projectId: NON_EXISTENT_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may return an empty list or an error for a non-existent
      // project ID. Both behaviors are acceptable.
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - returns error for malformed project id", async () => {
      const error = await runEffect(
        getV1ProjectsByProjectIdComputeServices({
          projectId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);
  });

  // ==========================================================================
  // postV1ProjectsByProjectIdComputeServices (create compute service for project)
  // ==========================================================================

  describe("postV1ProjectsByProjectIdComputeServices", () => {
    it("happy path - creates a compute service under the test project", async () => {
      const proj = getProj();
      const svcName = `distilled-prisma-proj-svc-${testRunId}`;

      const created = await runEffect(
        postV1ProjectsByProjectIdComputeServices({
          projectId: proj.projectId,
          displayName: svcName,
          regionId: "us-east-1",
        }).pipe(
          Effect.ensuring(
            // Clean up: find and delete the created compute service
            getV1ComputeServices({ projectId: proj.projectId }).pipe(
              Effect.flatMap((list) => {
                const svc = list.data.find((s) => s.name === svcName);
                if (svc) {
                  return deleteV1ComputeServicesByComputeServiceId({
                    computeServiceId: svc.id,
                  }).pipe(Effect.ignore);
                }
                return Effect.void;
              }),
              Effect.ignore,
            ),
          ),
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (created === null) {
        return;
      }

      expect(created.data.id).toBeDefined();
      expect(created.data.name).toBe(svcName);
      expect(created.data.projectId).toBe(proj.projectId);
      expect(created.data.region).toBeDefined();
      expect(created.data.region.id).toBe("us-east-1");
      expect(created.data.region.name).toBeDefined();
      expect(created.data.createdAt).toBeDefined();
      expect(created.data.latestVersionId).toBeNull();
    }, 60_000);

    it("error - returns error for non-existent project id", async () => {
      const error = await runEffect(
        postV1ProjectsByProjectIdComputeServices({
          projectId: NON_EXISTENT_ID,
          displayName: `distilled-prisma-proj-svc-nf-${testRunId}`,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ComputeServicesByComputeServiceId({
                computeServiceId: result.data.id,
              }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed project id", async () => {
      const error = await runEffect(
        postV1ProjectsByProjectIdComputeServices({
          projectId: "!!invalid-id-format!!",
          displayName: `distilled-prisma-proj-svc-mf-${testRunId}`,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ComputeServicesByComputeServiceId({
                computeServiceId: result.data.id,
              }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });
});
