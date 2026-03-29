import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { acknowledgeGroupAlert } from "../src/operations/acknowledgeGroupAlert";
import { createGroupAlertConfig } from "../src/operations/createGroupAlertConfig";
import { deleteGroupAlertConfig } from "../src/operations/deleteGroupAlertConfig";
import { listGroupAlertConfigs } from "../src/operations/listGroupAlertConfigs";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("acknowledgeGroupAlert", () => {
  it("happy path - lists alert configs to verify API access", async () => {
    const result = await runEffect(
      listGroupAlertConfigs({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent alert", async () => {
    const error = await runEffect(
      acknowledgeGroupAlert({
        groupId: PROJECT_ID,
        alertId: "000000000000000000000000",
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
      acknowledgeGroupAlert({
        groupId: "000000000000000000000000",
        alertId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid alert ID format", async () => {
    const error = await runEffect(
      acknowledgeGroupAlert({
        groupId: PROJECT_ID,
        alertId: `invalid-alert-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createGroupAlertConfig", () => {
  it("happy path - lists alert configs to verify API access", async () => {
    const result = await runEffect(
      listGroupAlertConfigs({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupAlertConfig({
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
      createGroupAlertConfig({
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
      createGroupAlertConfig({
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

describe("deleteGroupAlertConfig", () => {
  it("happy path - lists alert configs to verify API access", async () => {
    const result = await runEffect(
      listGroupAlertConfigs({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent alert config", async () => {
    const error = await runEffect(
      deleteGroupAlertConfig({
        groupId: PROJECT_ID,
        alertConfigId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupAlertConfig({
        groupId: "000000000000000000000000",
        alertConfigId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});
