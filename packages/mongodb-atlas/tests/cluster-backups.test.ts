import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { getGroupBackupExportBucket } from "../src/operations/getGroupBackupExportBucket";
import { getGroupBackupPrivateEndpoint } from "../src/operations/getGroupBackupPrivateEndpoint";
import { getGroupClusterBackupRestoreJob } from "../src/operations/getGroupClusterBackupRestoreJob";
import { getGroupClusterBackupSchedule } from "../src/operations/getGroupClusterBackupSchedule";
import { getGroupClusterBackupSnapshot } from "../src/operations/getGroupClusterBackupSnapshot";
import { listGroupBackupExportBuckets } from "../src/operations/listGroupBackupExportBuckets";
import { listGroupBackupPrivateEndpoints } from "../src/operations/listGroupBackupPrivateEndpoints";
import { listGroupClusterBackupRestoreJobs } from "../src/operations/listGroupClusterBackupRestoreJobs";
import { listGroupClusterBackupSnapshots } from "../src/operations/listGroupClusterBackupSnapshots";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Cluster Backups", () => {
  describe("getGroupClusterBackupSchedule", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        getGroupClusterBackupSchedule({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupClusterBackupSnapshots", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        listGroupClusterBackupSnapshots({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupClusterBackupSnapshot", () => {
    it("error - NotFound for non-existent snapshot", async () => {
      const error = await runEffect(
        getGroupClusterBackupSnapshot({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
          snapshotId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupClusterBackupRestoreJobs", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        listGroupClusterBackupRestoreJobs({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupClusterBackupRestoreJob", () => {
    it("error - NotFound for non-existent restore job", async () => {
      const error = await runEffect(
        getGroupClusterBackupRestoreJob({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
          restoreJobId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupBackupExportBuckets", () => {
    it("error - NotFound for non-existent group", async () => {
      const error = await runEffect(
        listGroupBackupExportBuckets({
          groupId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupBackupExportBucket", () => {
    it("error - NotFound for non-existent export bucket", async () => {
      const error = await runEffect(
        getGroupBackupExportBucket({
          groupId: PROJECT_ID,
          exportBucketId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupBackupPrivateEndpoints", () => {
    it("error - NotFound for non-existent group with AWS provider", async () => {
      const error = await runEffect(
        listGroupBackupPrivateEndpoints({
          groupId: PROJECT_ID,
          cloudProvider: "AWS",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupBackupPrivateEndpoint", () => {
    it("error - NotFound for non-existent private endpoint", async () => {
      const error = await runEffect(
        getGroupBackupPrivateEndpoint({
          groupId: PROJECT_ID,
          cloudProvider: "AWS",
          endpointId: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });
});
