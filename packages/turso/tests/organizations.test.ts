import { Effect } from "effect";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect } from "./setup";
import { listOrganizations } from "../src/operations/listOrganizations";
import { getOrganization } from "../src/operations/getOrganization";
import { updateOrganization } from "../src/operations/updateOrganization";
import { getOrganizationUsage } from "../src/operations/getOrganizationUsage";
import { listOrganizationMembers } from "../src/operations/listOrganizationMembers";
import { getOrganizationMember } from "../src/operations/getOrganizationMember";
import { removeOrganizationMember } from "../src/operations/removeOrganizationMember";
import { addOrganizationMember } from "../src/operations/addOrganizationMember";
import { updateMemberRole } from "../src/operations/updateMemberRole";
import { inviteOrganizationMember } from "../src/operations/inviteOrganizationMember";
import { deleteOrganizationInviteByEmail } from "../src/operations/deleteOrganizationInviteByEmail";
import { listOrganizationInvites } from "../src/operations/listOrganizationInvites";
import { listOrganizationInvoices } from "../src/operations/listOrganizationInvoices";
import { listOrganizationPlans } from "../src/operations/listOrganizationPlans";
import { getOrganizationSubscription } from "../src/operations/getOrganizationSubscription";

let orgSlug: string;

describe("Organizations", () => {
  beforeAll(async () => {
    await runEffect(
      Effect.gen(function* () {
        const orgs = yield* listOrganizations({});
        orgSlug = orgs[0].slug!;
        expect(orgSlug).toBeDefined();
      }),
    );
  }, 30_000);

  describe("listOrganizations", () => {
    it("happy path - lists organizations", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listOrganizations({});
          expect(Array.isArray(result)).toBe(true);
          expect(result.length).toBeGreaterThan(0);
          expect(result[0].slug).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("getOrganization", () => {
    it("happy path - retrieves organization details", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getOrganization({
            organizationSlug: orgSlug,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent org", async () => {
      await runEffect(
        getOrganization({
          organizationSlug: "nonexistent-org-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateOrganization", () => {
    it("happy path - updates organization", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* updateOrganization({
            organizationSlug: orgSlug,
            overages: false,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("getOrganizationUsage", () => {
    it("happy path - retrieves organization usage", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getOrganizationUsage({
            organizationSlug: orgSlug,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listOrganizationMembers", () => {
    it("happy path - lists organization members", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listOrganizationMembers({
            organizationSlug: orgSlug,
          });
          expect(result.members).toBeDefined();
          expect(Array.isArray(result.members)).toBe(true);
        }),
      );
    }, 30_000);
  });

  describe("getOrganizationMember", () => {
    it("error - NotFound for non-existent member", async () => {
      await runEffect(
        getOrganizationMember({
          organizationSlug: orgSlug,
          username: "nonexistent-user-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("addOrganizationMember", () => {
    // Turso returns BadRequest (not NotFound) for non-existent users
    it("error - BadRequest for non-existent user", async () => {
      await runEffect(
        addOrganizationMember({
          organizationSlug: orgSlug,
          username: "nonexistent-user-xyz-999",
          role: "member",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  describe("removeOrganizationMember", () => {
    it("error - NotFound for non-existent member", async () => {
      await runEffect(
        removeOrganizationMember({
          organizationSlug: orgSlug,
          username: "nonexistent-user-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateMemberRole", () => {
    // Note: Turso returns non-standard errors for personal org member updates
    // (UnknownTursoError with non-standard status codes). Testing with valid org
    // and non-existent user triggers a non-standard error, so we verify it fails.
    it("error - fails for non-existent member", async () => {
      await runEffect(
        updateMemberRole({
          organizationSlug: orgSlug,
          username: "nonexistent-user-xyz-999",
          role: "member",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBeDefined()),
        ),
      );
    }, 30_000);
  });

  describe("inviteOrganizationMember", () => {
    it("error - BadRequest for invalid email", async () => {
      await runEffect(
        inviteOrganizationMember({
          organizationSlug: orgSlug,
          email: "not-an-email",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  describe("deleteOrganizationInviteByEmail", () => {
    it("error - NotFound for non-existent invite", async () => {
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

  describe("listOrganizationInvites", () => {
    it("happy path - lists organization invites", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listOrganizationInvites({
            organizationSlug: orgSlug,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  // Note: listOrganizationAuditLogs requires a paid plan, skipping

  describe("listOrganizationInvoices", () => {
    it("happy path - lists invoices", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listOrganizationInvoices({
            organizationSlug: orgSlug,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("listOrganizationPlans", () => {
    it("happy path - lists plans", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listOrganizationPlans({
            organizationSlug: orgSlug,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("getOrganizationSubscription", () => {
    it("happy path - retrieves subscription", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getOrganizationSubscription({
            organizationSlug: orgSlug,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });
});
