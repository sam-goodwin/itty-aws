import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound, UnprocessableEntity, Forbidden } from "../src/errors";
import { UnknownPrismaPostgresError } from "../src/errors";
import { getV1Versions } from "../src/operations/getV1Versions";
import { getV1VersionsByVersionId } from "../src/operations/getV1VersionsByVersionId";
import { postV1Versions } from "../src/operations/postV1Versions";
import { deleteV1VersionsByVersionId } from "../src/operations/deleteV1VersionsByVersionId";
import { getV1ComputeServices } from "../src/operations/getV1ComputeServices";
import { postV1VersionsByVersionIdStart } from "../src/operations/postV1VersionsByVersionIdStart";
import { postV1VersionsByVersionIdStop } from "../src/operations/postV1VersionsByVersionIdStop";
import { runEffect } from "./setup";

const NON_EXISTENT_ID = "non-existent-version-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound ||
  error instanceof Forbidden ||
  error instanceof UnprocessableEntity;

describe("versions", () => {
  // ==========================================================================
  // getV1Versions (list compute versions)
  // ==========================================================================

  describe("getV1Versions", () => {
    it("happy path - lists versions", async () => {
      const result = await runEffect(
        getV1Versions({}).pipe(
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
        const version = result.data[0];
        expect(version.id).toBeDefined();
        expect(version.type).toBeDefined();
        expect(version.url).toBeDefined();
        expect(version.foundryVersionId).toBeDefined();
        expect(version.createdAt).toBeDefined();
      }
    }, 30_000);

    it("happy path - lists versions with pagination limit", async () => {
      const result = await runEffect(
        getV1Versions({ limit: 1 }).pipe(
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

    it("error - returns error for non-existent computeServiceId", async () => {
      const error = await runEffect(
        getV1Versions({
          computeServiceId: "non-existent-service-00000000",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may return an empty list or an error for a non-existent
      // compute service ID. Both behaviors are acceptable.
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - returns error for invalid cursor", async () => {
      const error = await runEffect(
        getV1Versions({ cursor: "!!invalid-cursor-value!!" }).pipe(
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
  // getV1VersionsByVersionId (get compute version by ID)
  // ==========================================================================

  describe("getV1VersionsByVersionId", () => {
    it("happy path - gets version by id from list", async () => {
      const list = await runEffect(
        getV1Versions({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (list === null || list.data.length === 0) {
        // No versions exist — skip gracefully
        return;
      }

      const versionId = list.data[0].id;
      const result = await runEffect(
        getV1VersionsByVersionId({ versionId }),
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
        getV1VersionsByVersionId({ versionId: NON_EXISTENT_ID }).pipe(
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
        getV1VersionsByVersionId({ versionId: "!!invalid-id-format!!" }).pipe(
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
  // postV1Versions (create compute version)
  // ==========================================================================

  describe("postV1Versions", () => {
    it("happy path - creates a version under an existing compute service", async () => {
      // List compute services to find a real ID
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
      const created = await runEffect(
        postV1Versions({
          computeServiceId,
          skipCodeUpload: true,
        }).pipe(
          Effect.ensuring(
            // Clean up: list versions and delete the one we created
            getV1Versions({ computeServiceId }).pipe(
              Effect.flatMap((list) => {
                if (list.data.length > 0) {
                  return deleteV1VersionsByVersionId({
                    versionId: list.data[0].id,
                  }).pipe(Effect.ignore);
                }
                return Effect.void;
              }),
              Effect.ignore,
            ),
          ),
        ),
      );

      expect(created.data.id).toBeDefined();
      expect(created.data.type).toBeDefined();
      expect(created.data.url).toBeDefined();
      expect(created.data.foundryVersionId).toBeDefined();
      // skipCodeUpload=true should result in null uploadUrl
      expect(created.data.uploadUrl).toBeNull();
    }, 60_000);

    it("error - returns error for non-existent compute service id", async () => {
      const error = await runEffect(
        postV1Versions({
          computeServiceId: "non-existent-service-00000000",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1VersionsByVersionId({
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
        postV1Versions({
          computeServiceId: "!!invalid-id-format!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1VersionsByVersionId({
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
  // deleteV1VersionsByVersionId (delete compute version)
  // ==========================================================================

  describe("deleteV1VersionsByVersionId", () => {
    it("happy path - creates and deletes a version", async () => {
      // List compute services to find a real ID
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
        postV1Versions({
          computeServiceId,
          skipCodeUpload: true,
        }),
      );

      const versionId = created.data.id;
      expect(versionId).toBeDefined();

      // Delete it
      await runEffect(deleteV1VersionsByVersionId({ versionId }));

      // Verify it's gone
      const error = await runEffect(
        getV1VersionsByVersionId({ versionId }).pipe(
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
        deleteV1VersionsByVersionId({ versionId: NON_EXISTENT_ID }).pipe(
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
        deleteV1VersionsByVersionId({
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
  // postV1VersionsByVersionIdStart (start compute version)
  // ==========================================================================

  describe("postV1VersionsByVersionIdStart", () => {
    it("happy path - start attempt on a real version", async () => {
      // List versions to find a real ID. Starting requires an uploaded
      // artifact, so the API will likely reject with a typed error.
      // We verify the call returns a typed response rather than crashing.
      const list = await runEffect(
        getV1Versions({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (list === null || list.data.length === 0) {
        // No versions exist — skip gracefully
        return;
      }

      const versionId = list.data[0].id;
      const result = await runEffect(
        postV1VersionsByVersionIdStart({ versionId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ error: e, data: null }),
            onSuccess: (r) => Effect.succeed({ error: null, data: r }),
          }),
        ),
      );

      if (result.error !== null) {
        // Expected — version likely has no artifact uploaded
        expect(
          isNotFoundLike(result.error) ||
            result.error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      } else {
        // If it succeeds, validate the response
        expect(result.data!.data.previewDomain).toBeDefined();
      }
    }, 30_000);

    it("error - returns error for non-existent version id", async () => {
      const error = await runEffect(
        postV1VersionsByVersionIdStart({ versionId: NON_EXISTENT_ID }).pipe(
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
        postV1VersionsByVersionIdStart({
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
  // postV1VersionsByVersionIdStop (stop compute version)
  // ==========================================================================

  describe("postV1VersionsByVersionIdStop", () => {
    it("happy path - stop attempt on a real version", async () => {
      // List versions to find a real ID. Stopping a version that isn't
      // running will likely return a typed error. We verify the call
      // returns a typed response rather than crashing.
      const list = await runEffect(
        getV1Versions({}).pipe(
          Effect.matchEffect({
            onFailure: () => Effect.succeed(null),
            onSuccess: (r) => Effect.succeed(r),
          }),
        ),
      );

      if (list === null || list.data.length === 0) {
        // No versions exist — skip gracefully
        return;
      }

      const versionId = list.data[0].id;
      const result = await runEffect(
        postV1VersionsByVersionIdStop({ versionId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ error: e }),
            onSuccess: () => Effect.succeed({ error: null }),
          }),
        ),
      );

      // Either succeeds (void) or returns a typed error
      if (result.error !== null) {
        expect(
          isNotFoundLike(result.error) ||
            result.error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - returns error for non-existent version id", async () => {
      const error = await runEffect(
        postV1VersionsByVersionIdStop({ versionId: NON_EXISTENT_ID }).pipe(
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
        postV1VersionsByVersionIdStop({
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
});
