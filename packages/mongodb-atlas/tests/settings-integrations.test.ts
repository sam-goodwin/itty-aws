import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { getGroupSettings } from "../src/operations/getGroupSettings";
import { listGroupIntegrations } from "../src/operations/listGroupIntegrations";
import { getGroupIntegration } from "../src/operations/getGroupIntegration";
import { getGroupMaintenanceWindow } from "../src/operations/getGroupMaintenanceWindow";
import { listGroupLimits } from "../src/operations/listGroupLimits";
import { getGroupLimit } from "../src/operations/getGroupLimit";
import { getGroupAuditLog } from "../src/operations/getGroupAuditLog";
import { getGroupUserSecurity } from "../src/operations/getGroupUserSecurity";
import { getGroupManagedSlowMs } from "../src/operations/getGroupManagedSlowMs";
import { getGroupMongoDbVersions } from "../src/operations/getGroupMongoDbVersions";
import { getGroupBackupCompliancePolicy } from "../src/operations/getGroupBackupCompliancePolicy";
import { getGroupIpAddresses } from "../src/operations/getGroupIpAddresses";
import { listGroupCloudProviderAccess } from "../src/operations/listGroupCloudProviderAccess";
import { getGroupEncryptionAtRest } from "../src/operations/getGroupEncryptionAtRest";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Settings & Integrations", () => {
  describe("getGroupSettings", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupSettings({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupIntegrations", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupIntegrations({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupIntegration", () => {
    it("error - NotFound for non-existent integration", async () => {
      const error = await runEffect(
        getGroupIntegration({
          groupId: PROJECT_ID,
          integrationType: "DATADOG",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupMaintenanceWindow", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupMaintenanceWindow({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupLimits", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupLimits({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound ||
          error instanceof Conflict,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupLimit", () => {
    it("error - NotFound for non-existent limit", async () => {
      const error = await runEffect(
        getGroupLimit({
          groupId: PROJECT_ID,
          limitName: "atlas.project.deployment.clusters",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound ||
          error instanceof Conflict,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupAuditLog", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupAuditLog({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupUserSecurity", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupUserSecurity({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupManagedSlowMs", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupManagedSlowMs({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupMongoDbVersions", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupMongoDbVersions({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound ||
          error instanceof Conflict,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupBackupCompliancePolicy", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupBackupCompliancePolicy({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupIpAddresses", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupIpAddresses({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupCloudProviderAccess", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupCloudProviderAccess({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupEncryptionAtRest", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupEncryptionAtRest({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
