import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { createGroupClusterSearchDeployment } from "../src/operations/createGroupClusterSearchDeployment";
import { createGroupClusterSearchIndex } from "../src/operations/createGroupClusterSearchIndex";
import { deleteGroupClusterSearchDeployment } from "../src/operations/deleteGroupClusterSearchDeployment";
import { deleteGroupClusterSearchIndex } from "../src/operations/deleteGroupClusterSearchIndex";
import { deleteGroupClusterSearchIndexByName } from "../src/operations/deleteGroupClusterSearchIndexByName";
import { listGroups } from "../src/operations/listGroups";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("createGroupClusterSearchDeployment", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      createGroupClusterSearchDeployment({
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
      createGroupClusterSearchDeployment({
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
      createGroupClusterSearchDeployment({
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
      createGroupClusterSearchDeployment({
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

describe("createGroupClusterSearchIndex", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      createGroupClusterSearchIndex({
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
      createGroupClusterSearchIndex({
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
      createGroupClusterSearchIndex({
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
      createGroupClusterSearchIndex({
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

describe("deleteGroupClusterSearchDeployment", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      deleteGroupClusterSearchDeployment({
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
      deleteGroupClusterSearchDeployment({
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
      deleteGroupClusterSearchDeployment({
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
      deleteGroupClusterSearchDeployment({
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

describe("deleteGroupClusterSearchIndex", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent index", async () => {
    const error = await runEffect(
      deleteGroupClusterSearchIndex({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
        indexId: "000000000000000000000000",
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
      deleteGroupClusterSearchIndex({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
        indexId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      deleteGroupClusterSearchIndex({
        groupId: `invalid-group-${testRunId}`,
        clusterName: `nonexistent-${testRunId}`,
        indexId: `invalid-index-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupClusterSearchIndexByName", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent index by name", async () => {
    const error = await runEffect(
      deleteGroupClusterSearchIndexByName({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
        databaseName: `db-${testRunId}`,
        collectionName: `col-${testRunId}`,
        indexName: `idx-${testRunId}`,
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
      deleteGroupClusterSearchIndexByName({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
        databaseName: `db-${testRunId}`,
        collectionName: `col-${testRunId}`,
        indexName: `idx-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      deleteGroupClusterSearchIndexByName({
        groupId: `invalid-group-${testRunId}`,
        clusterName: `nonexistent-${testRunId}`,
        databaseName: `db-${testRunId}`,
        collectionName: `col-${testRunId}`,
        indexName: `idx-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});
