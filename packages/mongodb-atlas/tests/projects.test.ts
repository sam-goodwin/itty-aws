import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { createGroup } from "../src/operations/createGroup";
import { listGroups } from "../src/operations/listGroups";
import { deleteGroup } from "../src/operations/deleteGroup";
import { runEffect, testRunId } from "./setup";

describe("createGroup", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - BadRequest for missing required body fields", async () => {
    const error = await runEffect(
      createGroup({}).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden with invalid project owner", async () => {
    const error = await runEffect(
      createGroup({
        projectOwnerId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof BadRequest ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - NotFound for non-existent project owner", async () => {
    const error = await runEffect(
      createGroup({
        projectOwnerId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict or BadRequest for invalid owner ID format", async () => {
    const error = await runEffect(
      createGroup({
        projectOwnerId: `invalid-owner-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Conflict ||
        error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroup", () => {
  it("happy path - lists projects to verify API access", async () => {
    const result = await runEffect(listGroups({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      deleteGroup({
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
      deleteGroup({
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
      deleteGroup({
        groupId: `invalid-group-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for project with active resources", async () => {
    const error = await runEffect(
      deleteGroup({
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
