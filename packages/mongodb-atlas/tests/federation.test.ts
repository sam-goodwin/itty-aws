import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { listFederationSettingConnectedOrgConfigs } from "../src/operations/listFederationSettingConnectedOrgConfigs";
import { getFederationSettingConnectedOrgConfig } from "../src/operations/getFederationSettingConnectedOrgConfig";
import { listFederationSettingIdentityProviders } from "../src/operations/listFederationSettingIdentityProviders";
import { getFederationSettingIdentityProvider } from "../src/operations/getFederationSettingIdentityProvider";
import { listFederationSettingConnectedOrgConfigRoleMappings } from "../src/operations/listFederationSettingConnectedOrgConfigRoleMappings";
import { getFederationSettingConnectedOrgConfigRoleMapping } from "../src/operations/getFederationSettingConnectedOrgConfigRoleMapping";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";
const ORG_ID = process.env.MONGODB_ATLAS_ORG_ID ?? "000000000000000000000000";

describe("Federation", () => {
  describe("listFederationSettingConnectedOrgConfigs", () => {
    it("error - NotFound for non-existent federation", async () => {
      const error = await runEffect(
        listFederationSettingConnectedOrgConfigs({
          federationSettingsId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getFederationSettingConnectedOrgConfig", () => {
    it("error - NotFound for non-existent org config", async () => {
      const error = await runEffect(
        getFederationSettingConnectedOrgConfig({
          federationSettingsId: "000000000000000000000000",
          orgId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("listFederationSettingIdentityProviders", () => {
    it("error - NotFound for non-existent federation", async () => {
      const error = await runEffect(
        listFederationSettingIdentityProviders({
          federationSettingsId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getFederationSettingIdentityProvider", () => {
    it("error - NotFound for non-existent identity provider", async () => {
      const error = await runEffect(
        getFederationSettingIdentityProvider({
          federationSettingsId: "000000000000000000000000",
          identityProviderId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("listFederationSettingConnectedOrgConfigRoleMappings", () => {
    it("error - NotFound for non-existent org role mappings", async () => {
      const error = await runEffect(
        listFederationSettingConnectedOrgConfigRoleMappings({
          federationSettingsId: "000000000000000000000000",
          orgId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getFederationSettingConnectedOrgConfigRoleMapping", () => {
    it("error - NotFound for non-existent role mapping", async () => {
      const error = await runEffect(
        getFederationSettingConnectedOrgConfigRoleMapping({
          federationSettingsId: "000000000000000000000000",
          orgId: "000000000000000000000000",
          id: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });
});
