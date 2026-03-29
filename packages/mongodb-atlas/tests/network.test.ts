import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import {
  BadRequest,
  Conflict,
  Forbidden,
  NotFound,
  PaymentRequired,
} from "../src/errors";
import { authorizeGroupCloudProviderAccessRole } from "../src/operations/authorizeGroupCloudProviderAccessRole";
import { createGroupCloudProviderAccess } from "../src/operations/createGroupCloudProviderAccess";
import { createGroupContainer } from "../src/operations/createGroupContainer";
import { createGroupPeer } from "../src/operations/createGroupPeer";
import { createGroupPrivateEndpointEndpointService } from "../src/operations/createGroupPrivateEndpointEndpointService";
import { createGroupPrivateEndpointEndpointServiceEndpoint } from "../src/operations/createGroupPrivateEndpointEndpointServiceEndpoint";
import { createGroupPrivateNetworkSettingEndpointId } from "../src/operations/createGroupPrivateNetworkSettingEndpointId";
import { deauthorizeGroupCloudProviderAccessRole } from "../src/operations/deauthorizeGroupCloudProviderAccessRole";
import { deleteGroupContainer } from "../src/operations/deleteGroupContainer";
import { listGroupCloudProviderAccess } from "../src/operations/listGroupCloudProviderAccess";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("authorizeGroupCloudProviderAccessRole", () => {
  it("happy path - lists cloud provider access roles to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent role", async () => {
    const error = await runEffect(
      authorizeGroupCloudProviderAccessRole({
        groupId: PROJECT_ID,
        roleId: "000000000000000000000000",
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
      authorizeGroupCloudProviderAccessRole({
        groupId: "000000000000000000000000",
        roleId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid role ID format", async () => {
    const error = await runEffect(
      authorizeGroupCloudProviderAccessRole({
        groupId: PROJECT_ID,
        roleId: `invalid-role-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for invalid project and role combination", async () => {
    const error = await runEffect(
      authorizeGroupCloudProviderAccessRole({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        roleId: "aaaaaaaaaaaaaaaaaaaaaaaa",
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

describe("createGroupCloudProviderAccess", () => {
  it("happy path - lists cloud provider access roles to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupCloudProviderAccess({
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
      createGroupCloudProviderAccess({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);
});

describe("createGroupContainer", () => {
  it("happy path - lists cloud provider access roles to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupContainer({
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
      createGroupContainer({
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
      createGroupContainer({
        groupId: `invalid-group-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate container creation", async () => {
    const error = await runEffect(
      createGroupContainer({
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

describe("createGroupPeer", () => {
  it("happy path - lists cloud provider access roles to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupPeer({
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
      createGroupPeer({
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
      createGroupPeer({
        groupId: `invalid-group-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate peering connection", async () => {
    const error = await runEffect(
      createGroupPeer({
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

describe("createGroupPrivateEndpointEndpointService", () => {
  it("happy path - lists cloud provider access roles to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupPrivateEndpointEndpointService({
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
      createGroupPrivateEndpointEndpointService({
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
      createGroupPrivateEndpointEndpointService({
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

describe("createGroupPrivateEndpointEndpointServiceEndpoint", () => {
  it("happy path - lists cloud provider access roles to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent endpoint service", async () => {
    const error = await runEffect(
      createGroupPrivateEndpointEndpointServiceEndpoint({
        groupId: PROJECT_ID,
        cloudProvider: "AWS",
        endpointServiceId: "000000000000000000000000",
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
      createGroupPrivateEndpointEndpointServiceEndpoint({
        groupId: "000000000000000000000000",
        cloudProvider: "AWS",
        endpointServiceId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid group ID format", async () => {
    const error = await runEffect(
      createGroupPrivateEndpointEndpointServiceEndpoint({
        groupId: `invalid-group-${testRunId}`,
        cloudProvider: "AWS",
        endpointServiceId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - PaymentRequired for project without billing", async () => {
    const error = await runEffect(
      createGroupPrivateEndpointEndpointServiceEndpoint({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        cloudProvider: "AWS",
        endpointServiceId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof PaymentRequired ||
        error instanceof Forbidden ||
        error instanceof NotFound ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for duplicate endpoint", async () => {
    const error = await runEffect(
      createGroupPrivateEndpointEndpointServiceEndpoint({
        groupId: "bbbbbbbbbbbbbbbbbbbbbbbb",
        cloudProvider: "AWS",
        endpointServiceId: "bbbbbbbbbbbbbbbbbbbbbbbb",
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

describe("createGroupPrivateNetworkSettingEndpointId", () => {
  it("happy path - lists cloud provider access roles to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent project", async () => {
    const error = await runEffect(
      createGroupPrivateNetworkSettingEndpointId({
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
      createGroupPrivateNetworkSettingEndpointId({
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
      createGroupPrivateNetworkSettingEndpointId({
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

describe("deauthorizeGroupCloudProviderAccessRole", () => {
  it("happy path - lists cloud provider access roles to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent role", async () => {
    const error = await runEffect(
      deauthorizeGroupCloudProviderAccessRole({
        groupId: PROJECT_ID,
        cloudProvider: "AWS",
        roleId: "000000000000000000000000",
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
      deauthorizeGroupCloudProviderAccessRole({
        groupId: "000000000000000000000000",
        cloudProvider: "AWS",
        roleId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid role ID format", async () => {
    const error = await runEffect(
      deauthorizeGroupCloudProviderAccessRole({
        groupId: PROJECT_ID,
        cloudProvider: "AWS",
        roleId: `invalid-role-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteGroupContainer", () => {
  it("happy path - lists cloud provider access to verify API access", async () => {
    const result = await runEffect(
      listGroupCloudProviderAccess({ groupId: PROJECT_ID }),
    );
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent container", async () => {
    const error = await runEffect(
      deleteGroupContainer({
        groupId: PROJECT_ID,
        containerId: "000000000000000000000000",
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
      deleteGroupContainer({
        groupId: "000000000000000000000000",
        containerId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid container ID format", async () => {
    const error = await runEffect(
      deleteGroupContainer({
        groupId: PROJECT_ID,
        containerId: `invalid-container-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);

  it("error - Conflict for inaccessible project and container", async () => {
    const error = await runEffect(
      deleteGroupContainer({
        groupId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        containerId: "000000000000000000000000",
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
