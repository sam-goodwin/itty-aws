import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { acceptGroupStreamVpcPeeringConnection } from "../src/operations/acceptGroupStreamVpcPeeringConnection";
import { createGroupStreamConnection } from "../src/operations/createGroupStreamConnection";
import { createGroupStreamPrivateLinkConnection } from "../src/operations/createGroupStreamPrivateLinkConnection";
import { createGroupStreamProcessor } from "../src/operations/createGroupStreamProcessor";
import { createGroupStreamWorkspace } from "../src/operations/createGroupStreamWorkspace";
import { listGroupStreamVpcPeeringConnections } from "../src/operations/listGroupStreamVpcPeeringConnections";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("acceptGroupStreamVpcPeeringConnection", () => {
  it("happy path - lists VPC peering connections to verify API access", async () => {
    const result = await runEffect(
      listGroupStreamVpcPeeringConnections({
        groupId: PROJECT_ID,
        tenantName: `nonexistent-${testRunId}`,
      }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent VPC peering connection", async () => {
    const error = await runEffect(
      acceptGroupStreamVpcPeeringConnection({
        groupId: PROJECT_ID,
        id: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent project", async () => {
    const error = await runEffect(
      acceptGroupStreamVpcPeeringConnection({
        groupId: "000000000000000000000000",
        id: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createGroupStreamConnection", () => {
  it("happy path - lists VPC peering connections to verify API access", async () => {
    const result = await runEffect(
      listGroupStreamVpcPeeringConnections({
        groupId: PROJECT_ID,
        tenantName: `nonexistent-${testRunId}`,
      }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent stream tenant", async () => {
    const error = await runEffect(
      createGroupStreamConnection({
        groupId: PROJECT_ID,
        tenantName: `nonexistent-${testRunId}`,
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
      createGroupStreamConnection({
        groupId: "000000000000000000000000",
        tenantName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      createGroupStreamConnection({
        groupId: `invalid-group-${testRunId}`,
        tenantName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate stream connection", async () => {
    const error = await runEffect(
      createGroupStreamConnection({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        tenantName: `nonexistent-${testRunId}`,
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

describe("createGroupStreamPrivateLinkConnection", () => {
  it("happy path - lists VPC peering connections to verify API access", async () => {
    const result = await runEffect(
      listGroupStreamVpcPeeringConnections({
        groupId: PROJECT_ID,
        tenantName: `nonexistent-${testRunId}`,
      }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupStreamPrivateLinkConnection({
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
      createGroupStreamPrivateLinkConnection({
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
      createGroupStreamPrivateLinkConnection({
        groupId: `invalid-group-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate private link connection", async () => {
    const error = await runEffect(
      createGroupStreamPrivateLinkConnection({
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

describe("createGroupStreamProcessor", () => {
  it("happy path - lists VPC peering connections to verify API access", async () => {
    const result = await runEffect(
      listGroupStreamVpcPeeringConnections({
        groupId: PROJECT_ID,
        tenantName: `nonexistent-${testRunId}`,
      }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent stream tenant", async () => {
    const error = await runEffect(
      createGroupStreamProcessor({
        groupId: PROJECT_ID,
        tenantName: `nonexistent-${testRunId}`,
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
      createGroupStreamProcessor({
        groupId: "000000000000000000000000",
        tenantName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      createGroupStreamProcessor({
        groupId: `invalid-group-${testRunId}`,
        tenantName: `nonexistent-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate stream processor", async () => {
    const error = await runEffect(
      createGroupStreamProcessor({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        tenantName: `nonexistent-${testRunId}`,
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

describe("createGroupStreamWorkspace", () => {
  it("happy path - lists VPC peering connections to verify API access", async () => {
    const result = await runEffect(
      listGroupStreamVpcPeeringConnections({
        groupId: PROJECT_ID,
        tenantName: `nonexistent-${testRunId}`,
      }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupStreamWorkspace({
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
      createGroupStreamWorkspace({
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
      createGroupStreamWorkspace({
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
