import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect } from "./setup";
import { getDatabase } from "../src/operations/getDatabase";
import { deleteDatabase } from "../src/operations/deleteDatabase";
import { getDatabaseConfiguration } from "../src/operations/getDatabaseConfiguration";
import { getDatabaseStats } from "../src/operations/getDatabaseStats";
import { getDatabaseUsage } from "../src/operations/getDatabaseUsage";
import { listDatabaseInstances } from "../src/operations/listDatabaseInstances";
import { getDatabaseInstance } from "../src/operations/getDatabaseInstance";
import { createDatabaseToken } from "../src/operations/createDatabaseToken";
import { invalidateDatabaseTokens } from "../src/operations/invalidateDatabaseTokens";
import { createDatabase } from "../src/operations/createDatabase";
import { getGroup } from "../src/operations/getGroup";
import { deleteGroup } from "../src/operations/deleteGroup";
import { createGroup } from "../src/operations/createGroup";
import { getGroupConfiguration } from "../src/operations/getGroupConfiguration";
import { createGroupToken } from "../src/operations/createGroupToken";
import { invalidateGroupTokens } from "../src/operations/invalidateGroupTokens";
import { transferGroup } from "../src/operations/transferGroup";
import { unarchiveGroup } from "../src/operations/unarchiveGroup";
import { addLocationToGroup } from "../src/operations/addLocationToGroup";
import { removeLocationFromGroup } from "../src/operations/removeLocationFromGroup";
import { getOrganization } from "../src/operations/getOrganization";
import { getOrganizationMember } from "../src/operations/getOrganizationMember";
import { removeOrganizationMember } from "../src/operations/removeOrganizationMember";
import { deleteOrganizationInviteByEmail } from "../src/operations/deleteOrganizationInviteByEmail";
import { revokeAPIToken } from "../src/operations/revokeAPIToken";
import { listOrganizations } from "../src/operations/listOrganizations";

// Get org slug dynamically
let orgSlug: string;

describe("Turso Error Discovery", () => {
  it("setup - get org slug", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* listOrganizations({});
        orgSlug = result[0].slug;
        expect(orgSlug).toBeDefined();
      }),
    );
  }, 30_000);

  describe("Database errors", () => {
    it("getDatabase - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabase({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("deleteDatabase - NotFound for non-existent database", async () => {
      await runEffect(
        deleteDatabase({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("getDatabaseConfiguration - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabaseConfiguration({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("getDatabaseStats - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabaseStats({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("getDatabaseUsage - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabaseUsage({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("listDatabaseInstances - NotFound for non-existent database", async () => {
      await runEffect(
        listDatabaseInstances({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("getDatabaseInstance - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabaseInstance({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
          instanceName: "foo",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("createDatabaseToken - NotFound for non-existent database", async () => {
      await runEffect(
        createDatabaseToken({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("invalidateDatabaseTokens - NotFound for non-existent database", async () => {
      await runEffect(
        invalidateDatabaseTokens({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("createDatabase - BadRequest for invalid name", async () => {
      await runEffect(
        createDatabase({
          organizationSlug: orgSlug,
          name: "INVALID NAME!!!",
          group: "default",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  describe("Group errors", () => {
    it("getGroup - NotFound for non-existent group", async () => {
      await runEffect(
        getGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("deleteGroup - NotFound for non-existent group", async () => {
      await runEffect(
        deleteGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("getGroupConfiguration - NotFound for non-existent group", async () => {
      await runEffect(
        getGroupConfiguration({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("createGroupToken - NotFound for non-existent group", async () => {
      await runEffect(
        createGroupToken({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("invalidateGroupTokens - NotFound for non-existent group", async () => {
      await runEffect(
        invalidateGroupTokens({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("transferGroup - NotFound for non-existent group", async () => {
      await runEffect(
        transferGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
          organization: "foo",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("unarchiveGroup - NotFound for non-existent group", async () => {
      await runEffect(
        unarchiveGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("addLocationToGroup - NotFound for non-existent group", async () => {
      await runEffect(
        addLocationToGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
          location: "iad",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("removeLocationFromGroup - NotFound for non-existent group", async () => {
      await runEffect(
        removeLocationFromGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
          location: "iad",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("createGroup - BadRequest for invalid location", async () => {
      await runEffect(
        createGroup({
          organizationSlug: orgSlug,
          name: "test-bad-loc",
          location: "zzz-invalid",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  describe("Organization errors", () => {
    it("getOrganization - NotFound for non-existent org", async () => {
      await runEffect(
        getOrganization({
          organizationSlug: "nonexistent-org-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("getOrganizationMember - NotFound for non-existent member", async () => {
      await runEffect(
        getOrganizationMember({
          organizationSlug: orgSlug,
          username: "nonexistent-user",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("removeOrganizationMember - NotFound for non-existent member", async () => {
      await runEffect(
        removeOrganizationMember({
          organizationSlug: orgSlug,
          username: "nonexistent-user",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("deleteOrganizationInviteByEmail - NotFound for non-existent invite", async () => {
      await runEffect(
        deleteOrganizationInviteByEmail({
          organizationSlug: orgSlug,
          email: "nonexistent@example.com",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("API Token errors", () => {
    it("revokeAPIToken - NotFound for non-existent token", async () => {
      await runEffect(
        revokeAPIToken({
          tokenName: "nonexistent-token-name",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
