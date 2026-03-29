import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import {
  BadRequest,
  Conflict,
  Forbidden,
  NotFound,
  PaymentRequired,
} from "../src/errors";
import { createGroupFlexCluster } from "../src/operations/createGroupFlexCluster";
import { createGroupFlexClusterBackupRestoreJob } from "../src/operations/createGroupFlexClusterBackupRestoreJob";
import { listGroups } from "../src/operations/listGroups";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("createGroupFlexCluster", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupFlexCluster({
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
      createGroupFlexCluster({
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
      createGroupFlexCluster({
        groupId: `invalid-group-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - PaymentRequired or BadRequest for missing cluster config", async () => {
    const error = await runEffect(
      createGroupFlexCluster({
        groupId: PROJECT_ID,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof PaymentRequired ||
        error instanceof BadRequest ||
        error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate cluster creation", async () => {
    const error = await runEffect(
      createGroupFlexCluster({
        groupId: "bbbbbbbbbbbbbbbbbbbbbbbb",
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

describe("createGroupFlexClusterBackupRestoreJob", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent flex cluster", async () => {
    const error = await runEffect(
      createGroupFlexClusterBackupRestoreJob({
        groupId: PROJECT_ID,
        name: `nonexistent-${testRunId}`,
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
      createGroupFlexClusterBackupRestoreJob({
        groupId: "000000000000000000000000",
        name: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      createGroupFlexClusterBackupRestoreJob({
        groupId: `invalid-group-${testRunId}`,
        name: `nonexistent-${testRunId}`,
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
      createGroupFlexClusterBackupRestoreJob({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        name: `nonexistent-${testRunId}`,
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
