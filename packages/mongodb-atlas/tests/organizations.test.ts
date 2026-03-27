import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { getOrg } from "../src/operations/getOrg";
import { getOrgApiKey } from "../src/operations/getOrgApiKey";
import { getOrgEvent } from "../src/operations/getOrgEvent";
import { getOrgFederationSettings } from "../src/operations/getOrgFederationSettings";
import { getOrgInvoice } from "../src/operations/getOrgInvoice";
import { getOrgResourcePolicy } from "../src/operations/getOrgResourcePolicy";
import { getOrgServiceAccount } from "../src/operations/getOrgServiceAccount";
import { getOrgSettings } from "../src/operations/getOrgSettings";
import { getOrgTeam } from "../src/operations/getOrgTeam";
import { getOrgTeamByName } from "../src/operations/getOrgTeamByName";
import { getOrgUser } from "../src/operations/getOrgUser";
import { listOrgApiKeys } from "../src/operations/listOrgApiKeys";
import { listOrgEvents } from "../src/operations/listOrgEvents";
import { listOrgInvoices } from "../src/operations/listOrgInvoices";
import { listOrgResourcePolicies } from "../src/operations/listOrgResourcePolicies";
import { listOrgServiceAccounts } from "../src/operations/listOrgServiceAccounts";
import { listOrgTeamUsers } from "../src/operations/listOrgTeamUsers";
import { listOrgTeams } from "../src/operations/listOrgTeams";
import { listOrgUsers } from "../src/operations/listOrgUsers";
import { listOrgs } from "../src/operations/listOrgs";
import { getOrgGroups } from "../src/operations/getOrgGroups";
import { runEffect } from "./setup";

const ORG_ID = process.env.MONGODB_ATLAS_ORG_ID ?? "000000000000000000000000";

describe("Organizations", () => {
  describe("listOrgs", () => {
    it("happy path - lists organizations", async () => {
      const result = await runEffect(listOrgs({}));
      expect(result).toBeDefined();
    }, 30_000);
  });

  describe("getOrg", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        getOrg({ orgId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgSettings", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        getOrgSettings({ orgId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgGroups", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        getOrgGroups({ orgId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("listOrgApiKeys", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        listOrgApiKeys({ orgId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgApiKey", () => {
    it("error - NotFound for non-existent org and apiUserId", async () => {
      const error = await runEffect(
        getOrgApiKey({
          orgId: "000000000000000000000000",
          apiUserId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listOrgTeams", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        listOrgTeams({ orgId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgTeam", () => {
    it("error - NotFound for non-existent org and teamId", async () => {
      const error = await runEffect(
        getOrgTeam({
          orgId: "000000000000000000000000",
          teamId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgTeamByName", () => {
    it("error - NotFound for non-existent org and teamName", async () => {
      const error = await runEffect(
        getOrgTeamByName({
          orgId: "000000000000000000000000",
          teamName: "nonexistent-team",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("listOrgTeamUsers", () => {
    it("error - NotFound for non-existent org and teamId", async () => {
      const error = await runEffect(
        listOrgTeamUsers({
          orgId: "000000000000000000000000",
          teamId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest ||
          error instanceof Conflict,
      ).toBe(true);
    }, 30_000);
  });

  describe("listOrgUsers", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        listOrgUsers({ orgId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgUser", () => {
    it("error - NotFound for non-existent org and userId", async () => {
      const error = await runEffect(
        getOrgUser({
          orgId: "000000000000000000000000",
          userId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("listOrgEvents", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        listOrgEvents({ orgId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgEvent", () => {
    it("error - NotFound for non-existent org and eventId", async () => {
      const error = await runEffect(
        getOrgEvent({
          orgId: "000000000000000000000000",
          eventId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgFederationSettings", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        getOrgFederationSettings({ orgId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("listOrgInvoices", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        listOrgInvoices({ orgId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgInvoice", () => {
    it("error - NotFound for non-existent org and invoiceId", async () => {
      const error = await runEffect(
        getOrgInvoice({
          orgId: "000000000000000000000000",
          invoiceId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listOrgServiceAccounts", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        listOrgServiceAccounts({ orgId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgServiceAccount", () => {
    it("error - NotFound for non-existent org and clientId", async () => {
      const error = await runEffect(
        getOrgServiceAccount({
          orgId: "000000000000000000000000",
          clientId: "mdb_sa_id_000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listOrgResourcePolicies", () => {
    it("error - NotFound for non-existent org", async () => {
      const error = await runEffect(
        listOrgResourcePolicies({ orgId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getOrgResourcePolicy", () => {
    it("error - NotFound for non-existent org and resourcePolicyId", async () => {
      const error = await runEffect(
        getOrgResourcePolicy({
          orgId: "000000000000000000000000",
          resourcePolicyId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });
});
