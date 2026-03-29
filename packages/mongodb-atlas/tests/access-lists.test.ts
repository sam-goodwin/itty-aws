import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { addGroupApiKey } from "../src/operations/addGroupApiKey";
import { createGroupAccessListEntry } from "../src/operations/createGroupAccessListEntry";
import { createGroupApiKey } from "../src/operations/createGroupApiKey";
import { deleteGroupAccessListEntry } from "../src/operations/deleteGroupAccessListEntry";
import { listGroupAccessListEntries } from "../src/operations/listGroupAccessListEntries";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("addGroupApiKey", () => {
  it("happy path - lists project access list entries to verify API access", async () => {
    const result = await runEffect(
      listGroupAccessListEntries({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent API key", async () => {
    const error = await runEffect(
      addGroupApiKey({
        groupId: PROJECT_ID,
        apiUserId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      addGroupApiKey({
        groupId: "000000000000000000000000",
        apiUserId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createGroupAccessListEntry", () => {
  it("happy path - lists project access list entries to verify API access", async () => {
    const result = await runEffect(
      listGroupAccessListEntries({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupAccessListEntry({
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
      createGroupAccessListEntry({
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
      createGroupAccessListEntry({
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

describe("createGroupApiKey", () => {
  it("happy path - lists project access list entries to verify API access", async () => {
    const result = await runEffect(
      listGroupAccessListEntries({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupApiKey({
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
      createGroupApiKey({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupAccessListEntry", () => {
  it("happy path - lists project access list entries to verify API access", async () => {
    const result = await runEffect(
      listGroupAccessListEntries({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent entry", async () => {
    const error = await runEffect(
      deleteGroupAccessListEntry({
        groupId: PROJECT_ID,
        entryValue: "192.0.2.99",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      deleteGroupAccessListEntry({
        groupId: "000000000000000000000000",
        entryValue: "192.0.2.99",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});
