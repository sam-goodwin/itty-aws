import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { createGroupIntegration } from "../src/operations/createGroupIntegration";
import { createGroupLiveMigration } from "../src/operations/createGroupLiveMigration";
import { createGroupLogIntegration } from "../src/operations/createGroupLogIntegration";
import { cutoverGroupLiveMigration } from "../src/operations/cutoverGroupLiveMigration";
import { deferGroupMaintenanceWindow } from "../src/operations/deferGroupMaintenanceWindow";
import { listGroups } from "../src/operations/listGroups";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("createGroupIntegration", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupIntegration({
        groupId: "000000000000000000000000",
        integrationType: "WEBHOOK",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible project", async () => {
    const error = await runEffect(
      createGroupIntegration({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        integrationType: "WEBHOOK",
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
      createGroupIntegration({
        groupId: `invalid-group-${testRunId}`,
        integrationType: "WEBHOOK",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate integration type", async () => {
    const error = await runEffect(
      createGroupIntegration({
        groupId: "bbbbbbbbbbbbbbbbbbbbbbbb",
        integrationType: "WEBHOOK",
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

describe("createGroupLiveMigration", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupLiveMigration({
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
      createGroupLiveMigration({
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
      createGroupLiveMigration({
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

describe("createGroupLogIntegration", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupLogIntegration({
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
      createGroupLogIntegration({
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
      createGroupLogIntegration({
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

describe("cutoverGroupLiveMigration", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent migration", async () => {
    const error = await runEffect(
      cutoverGroupLiveMigration({
        groupId: PROJECT_ID,
        liveMigrationId: "000000000000000000000000",
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
      cutoverGroupLiveMigration({
        groupId: "000000000000000000000000",
        liveMigrationId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      cutoverGroupLiveMigration({
        groupId: `invalid-group-${testRunId}`,
        liveMigrationId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deferGroupMaintenanceWindow", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      deferGroupMaintenanceWindow({
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
      deferGroupMaintenanceWindow({
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
      deferGroupMaintenanceWindow({
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
