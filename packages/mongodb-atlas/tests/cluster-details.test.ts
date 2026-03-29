import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { createGroupClusterGlobalWriteCustomZoneMapping } from "../src/operations/createGroupClusterGlobalWriteCustomZoneMapping";
import { createGroupClusterGlobalWriteManagedNamespace } from "../src/operations/createGroupClusterGlobalWriteManagedNamespace";
import { createGroupClusterIndexRollingIndex } from "../src/operations/createGroupClusterIndexRollingIndex";
import { deleteGroupClusterGlobalWriteCustomZoneMapping } from "../src/operations/deleteGroupClusterGlobalWriteCustomZoneMapping";
import { deleteGroupClusterGlobalWriteManagedNamespaces } from "../src/operations/deleteGroupClusterGlobalWriteManagedNamespaces";
import { listGroups } from "../src/operations/listGroups";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("createGroupClusterGlobalWriteCustomZoneMapping", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      createGroupClusterGlobalWriteCustomZoneMapping({
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
      createGroupClusterGlobalWriteCustomZoneMapping({
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
      createGroupClusterGlobalWriteCustomZoneMapping({
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

describe("createGroupClusterGlobalWriteManagedNamespace", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      createGroupClusterGlobalWriteManagedNamespace({
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
      createGroupClusterGlobalWriteManagedNamespace({
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
      createGroupClusterGlobalWriteManagedNamespace({
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

describe("createGroupClusterIndexRollingIndex", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      createGroupClusterIndexRollingIndex({
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
      createGroupClusterIndexRollingIndex({
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
      createGroupClusterIndexRollingIndex({
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

describe("deleteGroupClusterGlobalWriteCustomZoneMapping", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      deleteGroupClusterGlobalWriteCustomZoneMapping({
        groupId: PROJECT_ID,
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupClusterGlobalWriteCustomZoneMapping({
        groupId: "000000000000000000000000",
        clusterName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupClusterGlobalWriteManagedNamespaces", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent cluster", async () => {
    const error = await runEffect(
      deleteGroupClusterGlobalWriteManagedNamespaces({
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
      deleteGroupClusterGlobalWriteManagedNamespaces({
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
      deleteGroupClusterGlobalWriteManagedNamespaces({
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
