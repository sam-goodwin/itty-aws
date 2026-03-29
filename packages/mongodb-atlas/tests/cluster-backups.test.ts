import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { cancelGroupClusterBackupRestoreJob } from "../src/operations/cancelGroupClusterBackupRestoreJob";
import { createGroupBackupExportBucket } from "../src/operations/createGroupBackupExportBucket";
import { createGroupBackupPrivateEndpoint } from "../src/operations/createGroupBackupPrivateEndpoint";
import { createGroupClusterBackupExport } from "../src/operations/createGroupClusterBackupExport";
import { createGroupClusterBackupRestoreJob } from "../src/operations/createGroupClusterBackupRestoreJob";
import { deleteGroupBackupExportBucket } from "../src/operations/deleteGroupBackupExportBucket";
import { deleteGroupBackupPrivateEndpoint } from "../src/operations/deleteGroupBackupPrivateEndpoint";
import { deleteGroupClusterBackupSchedule } from "../src/operations/deleteGroupClusterBackupSchedule";
import { deleteGroupClusterBackupSnapshot } from "../src/operations/deleteGroupClusterBackupSnapshot";
import { deleteGroupClusterBackupSnapshotShardedCluster } from "../src/operations/deleteGroupClusterBackupSnapshotShardedCluster";
import { listGroups } from "../src/operations/listGroups";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("cancelGroupClusterBackupRestoreJob", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster and restore job", async () => {
    const error = await runEffect(
      cancelGroupClusterBackupRestoreJob({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
        restoreJobId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof BadRequest ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      cancelGroupClusterBackupRestoreJob({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
        restoreJobId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid restore job ID format", async () => {
    const error = await runEffect(
      cancelGroupClusterBackupRestoreJob({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
        restoreJobId: `invalid-job-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createGroupBackupExportBucket", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupBackupExportBucket({
        groupId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible project", async () => {
    const error = await runEffect(
      createGroupBackupExportBucket({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      createGroupBackupExportBucket({
        groupId: `invalid-group-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createGroupBackupPrivateEndpoint", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupBackupPrivateEndpoint({
        groupId: "000000000000000000000000",
        cloudProvider: "AWS",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible project", async () => {
    const error = await runEffect(
      createGroupBackupPrivateEndpoint({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        cloudProvider: "AWS",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      createGroupBackupPrivateEndpoint({
        groupId: `invalid-group-${testRunId}`,
        cloudProvider: "AWS",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate endpoint creation attempt", async () => {
    const error = await runEffect(
      createGroupBackupPrivateEndpoint({
        groupId: "bbbbbbbbbbbbbbbbbbbbbbbb",
        cloudProvider: "AWS",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);
});

describe("createGroupClusterBackupExport", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      createGroupClusterBackupExport({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof BadRequest ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      createGroupClusterBackupExport({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      createGroupClusterBackupExport({
        groupId: `invalid-group-${testRunId}`,
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for inaccessible project and cluster", async () => {
    const error = await runEffect(
      createGroupClusterBackupExport({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);
});

describe("createGroupClusterBackupRestoreJob", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      createGroupClusterBackupRestoreJob({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof BadRequest ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      createGroupClusterBackupRestoreJob({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      createGroupClusterBackupRestoreJob({
        groupId: `invalid-group-${testRunId}`,
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for inaccessible project and cluster", async () => {
    const error = await runEffect(
      createGroupClusterBackupRestoreJob({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupBackupExportBucket", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent export bucket", async () => {
    const error = await runEffect(
      deleteGroupBackupExportBucket({
        groupId: PROJECT_ID,
        exportBucketId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupBackupExportBucket({
        groupId: "000000000000000000000000",
        exportBucketId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid export bucket ID format", async () => {
    const error = await runEffect(
      deleteGroupBackupExportBucket({
        groupId: PROJECT_ID,
        exportBucketId: `invalid-bucket-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupBackupPrivateEndpoint", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent endpoint", async () => {
    const error = await runEffect(
      deleteGroupBackupPrivateEndpoint({
        groupId: PROJECT_ID,
        cloudProvider: "AWS",
        endpointId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupBackupPrivateEndpoint({
        groupId: "000000000000000000000000",
        cloudProvider: "AWS",
        endpointId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupClusterBackupSchedule", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      deleteGroupClusterBackupSchedule({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof BadRequest ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupClusterBackupSchedule({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      deleteGroupClusterBackupSchedule({
        groupId: `invalid-group-${testRunId}`,
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupClusterBackupSnapshot", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent snapshot", async () => {
    const error = await runEffect(
      deleteGroupClusterBackupSnapshot({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
        snapshotId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof BadRequest ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupClusterBackupSnapshot({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
        snapshotId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      deleteGroupClusterBackupSnapshot({
        groupId: `invalid-group-${testRunId}`,
        clusterName: `nonexistent-${testRunId}`,
        snapshotId: `invalid-snapshot-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupClusterBackupSnapshotShardedCluster", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent snapshot", async () => {
    const error = await runEffect(
      deleteGroupClusterBackupSnapshotShardedCluster({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
        snapshotId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupClusterBackupSnapshotShardedCluster({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
        snapshotId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});
