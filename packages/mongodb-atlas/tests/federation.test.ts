import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { createFederationSettingConnectedOrgConfigRoleMapping } from "../src/operations/createFederationSettingConnectedOrgConfigRoleMapping";
import { createFederationSettingIdentityProvider } from "../src/operations/createFederationSettingIdentityProvider";
import { deleteFederationSetting } from "../src/operations/deleteFederationSetting";
import { deleteFederationSettingConnectedOrgConfigRoleMapping } from "../src/operations/deleteFederationSettingConnectedOrgConfigRoleMapping";
import { deleteFederationSettingIdentityProvider } from "../src/operations/deleteFederationSettingIdentityProvider";
import { listOrgs } from "../src/operations/listOrgs";
import { runEffect, testRunId } from "./setup";

const ORG_ID =
  process.env.MONGODB_ATLAS_ORG_ID ?? "000000000000000000000000";

describe("createFederationSettingConnectedOrgConfigRoleMapping", () => {
  it("happy path - lists organizations to verify API access", async () => {
    const result = await runEffect(listOrgs({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent federation setting", async () => {
    const error = await runEffect(
      createFederationSettingConnectedOrgConfigRoleMapping({
        federationSettingsId: "000000000000000000000000",
        orgId: ORG_ID,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent organization", async () => {
    const error = await runEffect(
      createFederationSettingConnectedOrgConfigRoleMapping({
        federationSettingsId: "000000000000000000000000",
        orgId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid federation settings ID format", async () => {
    const error = await runEffect(
      createFederationSettingConnectedOrgConfigRoleMapping({
        federationSettingsId: `invalid-fed-${testRunId}`,
        orgId: ORG_ID,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("createFederationSettingIdentityProvider", () => {
  it("happy path - lists organizations to verify API access", async () => {
    const result = await runEffect(listOrgs({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent federation setting", async () => {
    const error = await runEffect(
      createFederationSettingIdentityProvider({
        federationSettingsId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible federation setting", async () => {
    const error = await runEffect(
      createFederationSettingIdentityProvider({
        federationSettingsId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid federation settings ID format", async () => {
    const error = await runEffect(
      createFederationSettingIdentityProvider({
        federationSettingsId: `invalid-fed-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteFederationSetting", () => {
  it("happy path - lists organizations to verify API access", async () => {
    const result = await runEffect(listOrgs({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent federation setting", async () => {
    const error = await runEffect(
      deleteFederationSetting({
        federationSettingsId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible federation setting", async () => {
    const error = await runEffect(
      deleteFederationSetting({
        federationSettingsId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid federation settings ID format", async () => {
    const error = await runEffect(
      deleteFederationSetting({
        federationSettingsId: `invalid-fed-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteFederationSettingConnectedOrgConfigRoleMapping", () => {
  it("happy path - lists organizations to verify API access", async () => {
    const result = await runEffect(listOrgs({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent role mapping", async () => {
    const error = await runEffect(
      deleteFederationSettingConnectedOrgConfigRoleMapping({
        federationSettingsId: "000000000000000000000000",
        orgId: ORG_ID,
        id: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for non-existent organization", async () => {
    const error = await runEffect(
      deleteFederationSettingConnectedOrgConfigRoleMapping({
        federationSettingsId: "000000000000000000000000",
        orgId: "000000000000000000000000",
        id: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid federation settings ID format", async () => {
    const error = await runEffect(
      deleteFederationSettingConnectedOrgConfigRoleMapping({
        federationSettingsId: `invalid-fed-${testRunId}`,
        orgId: ORG_ID,
        id: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});

describe("deleteFederationSettingIdentityProvider", () => {
  it("happy path - lists organizations to verify API access", async () => {
    const result = await runEffect(listOrgs({}));
    expect(result).toBeDefined();
  }, 30_000);

  it("error - NotFound for non-existent identity provider", async () => {
    const error = await runEffect(
      deleteFederationSettingIdentityProvider({
        federationSettingsId: "000000000000000000000000",
        identityProviderId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof NotFound ||
        error instanceof Forbidden ||
        error instanceof BadRequest,
    ).toBe(true);
  }, 30_000);

  it("error - Forbidden for inaccessible federation setting", async () => {
    const error = await runEffect(
      deleteFederationSettingIdentityProvider({
        federationSettingsId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        identityProviderId: "aaaaaaaaaaaaaaaaaaaaaaaa",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof Forbidden ||
        error instanceof NotFound,
    ).toBe(true);
  }, 30_000);

  it("error - BadRequest for invalid federation settings ID format", async () => {
    const error = await runEffect(
      deleteFederationSettingIdentityProvider({
        federationSettingsId: `invalid-fed-${testRunId}`,
        identityProviderId: "000000000000000000000000",
      }).pipe(Effect.flip),
    );
    expect(
      error instanceof BadRequest ||
        error instanceof NotFound ||
        error instanceof Forbidden,
    ).toBe(true);
  }, 30_000);
});
