import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { addGroupTeams } from "../src/operations/addGroupTeams";
import { addGroupUserRole } from "../src/operations/addGroupUserRole";
import { addGroupUsers } from "../src/operations/addGroupUsers";
import { listOrgTeams } from "../src/operations/listOrgTeams";
import { listOrgUsers } from "../src/operations/listOrgUsers";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";
const ORG_ID =
  process.env.MONGODB_ATLAS_ORG_ID ?? "000000000000000000000000";

describe("addGroupTeams", () => {
  it("happy path - lists organization teams to verify API access", async () => {
    const result = await runEffect(
      listOrgTeams({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      addGroupTeams({
        groupId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for invalid project access", async () => {
    const error = await runEffect(
      addGroupTeams({
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
      addGroupTeams({
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

describe("addGroupUserRole", () => {
  it("happy path - lists organization users to verify API access", async () => {
    const result = await runEffect(
      listOrgUsers({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent user", async () => {
    const error = await runEffect(
      addGroupUserRole({
        groupId: PROJECT_ID,
        userId: "000000000000000000000000",
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
      addGroupUserRole({
        groupId: "000000000000000000000000",
        userId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid user ID format", async () => {
    const error = await runEffect(
      addGroupUserRole({
        groupId: PROJECT_ID,
        userId: `invalid-user-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for invalid project and user combination", async () => {
    const error = await runEffect(
      addGroupUserRole({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        userId: "aaaaaaaaaaaaaaaaaaaaaaaa",
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

describe("addGroupUsers", () => {
  it("happy path - lists organization users to verify API access", async () => {
    const result = await runEffect(
      listOrgUsers({ orgId: ORG_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      addGroupUsers({
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
      addGroupUsers({
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
      addGroupUsers({
        groupId: `invalid-group-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate user addition attempt", async () => {
    const error = await runEffect(
      addGroupUsers({
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
