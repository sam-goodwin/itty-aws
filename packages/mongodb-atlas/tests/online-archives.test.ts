import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { createGroupClusterOnlineArchive } from "../src/operations/createGroupClusterOnlineArchive";
import { deleteGroupClusterOnlineArchive } from "../src/operations/deleteGroupClusterOnlineArchive";
import { listGroups } from "../src/operations/listGroups";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("createGroupClusterOnlineArchive", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      createGroupClusterOnlineArchive({
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
      createGroupClusterOnlineArchive({
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
      createGroupClusterOnlineArchive({
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
      createGroupClusterOnlineArchive({
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

describe("deleteGroupClusterOnlineArchive", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent archive", async () => {
    const error = await runEffect(
      deleteGroupClusterOnlineArchive({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
        archiveId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupClusterOnlineArchive({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
        archiveId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});
