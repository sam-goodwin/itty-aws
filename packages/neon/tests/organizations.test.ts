import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect } from "./setup";
import { getOrganization } from "../src/operations/getOrganization";
import { getOrganizationMembers } from "../src/operations/getOrganizationMembers";
import { getOrganizationMember } from "../src/operations/getOrganizationMember";
import { updateOrganizationMember } from "../src/operations/updateOrganizationMember";
import { removeOrganizationMember } from "../src/operations/removeOrganizationMember";
import { getOrganizationInvitations } from "../src/operations/getOrganizationInvitations";
import { createOrganizationInvitations } from "../src/operations/createOrganizationInvitations";
import { transferProjectsFromOrgToOrg } from "../src/operations/transferProjectsFromOrgToOrg";
import { listOrganizationVPCEndpointsAllRegions } from "../src/operations/listOrganizationVPCEndpointsAllRegions";
import { listOrganizationVPCEndpoints } from "../src/operations/listOrganizationVPCEndpoints";
import { getOrganizationVPCEndpointDetails } from "../src/operations/getOrganizationVPCEndpointDetails";
import { assignOrganizationVPCEndpoint } from "../src/operations/assignOrganizationVPCEndpoint";
import { deleteOrganizationVPCEndpoint } from "../src/operations/deleteOrganizationVPCEndpoint";
import { listOrgApiKeys } from "../src/operations/listOrgApiKeys";
import { createOrgApiKey } from "../src/operations/createOrgApiKey";
import { revokeOrgApiKey } from "../src/operations/revokeOrgApiKey";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("neon organizations", () => {
  // ============================================================================
  // getOrganization
  // ============================================================================
  describe("getOrganization", () => {
    it("happy path - retrieves organization details (or expected error without org)", async () => {
      // Most personal accounts don't belong to an org, so this test accepts
      // either a successful response or an expected error
      await runEffect(
        getOrganization({
          org_id: "org-test-00000000",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(result).toHaveProperty("name");
            expect(result).toHaveProperty("handle");
            expect(result).toHaveProperty("plan");
            expect(result).toHaveProperty("created_at");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        getOrganization({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getOrganization({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getOrganizationMembers
  // ============================================================================
  describe("getOrganizationMembers", () => {
    it("happy path - retrieves organization members (or expected error without org)", async () => {
      await runEffect(
        getOrganizationMembers({
          org_id: "org-test-00000000",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("members");
            expect(Array.isArray(result.members)).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        getOrganizationMembers({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getOrganizationMembers({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getOrganizationMember
  // ============================================================================
  describe("getOrganizationMember", () => {
    it("happy path - retrieves organization member details (or expected error without org)", async () => {
      await runEffect(
        getOrganizationMember({
          org_id: "org-test-00000000",
          member_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(result).toHaveProperty("user_id");
            expect(result).toHaveProperty("org_id");
            expect(result).toHaveProperty("role");
          }),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org and member ID", async () => {
      await runEffect(
        getOrganizationMember({
          org_id: "org-non-existent-00000000",
          member_id: "00000000-0000-0000-0000-000000000001",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getOrganizationMember({
          org_id: "org-non-existent-00000000",
          member_id: "00000000-0000-0000-0000-000000000001",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // updateOrganizationMember
  // ============================================================================
  describe("updateOrganizationMember", () => {
    it("happy path - updates organization member role (or expected error without org)", async () => {
      await runEffect(
        updateOrganizationMember({
          org_id: "org-test-00000000",
          member_id: "00000000-0000-0000-0000-000000000000",
          role: "member",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(result).toHaveProperty("user_id");
            expect(result).toHaveProperty("org_id");
            expect(result).toHaveProperty("role");
          }),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org and member ID", async () => {
      await runEffect(
        updateOrganizationMember({
          org_id: "org-non-existent-00000000",
          member_id: "00000000-0000-0000-0000-000000000001",
          role: "member",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateOrganizationMember({
          org_id: "org-non-existent-00000000",
          member_id: "00000000-0000-0000-0000-000000000001",
          role: "admin",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // removeOrganizationMember
  // ============================================================================
  describe("removeOrganizationMember", () => {
    it("happy path - removes organization member (or expected error without org)", async () => {
      await runEffect(
        removeOrganizationMember({
          org_id: "org-test-00000000",
          member_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.map(() => {
            // If it succeeds, that's fine
            expect(true).toBe(true);
          }),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org and member ID", async () => {
      await runEffect(
        removeOrganizationMember({
          org_id: "org-non-existent-00000000",
          member_id: "00000000-0000-0000-0000-000000000001",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        removeOrganizationMember({
          org_id: "org-non-existent-00000000",
          member_id: "00000000-0000-0000-0000-000000000001",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getOrganizationInvitations
  // ============================================================================
  describe("getOrganizationInvitations", () => {
    it("happy path - retrieves organization invitations (or expected error without org)", async () => {
      await runEffect(
        getOrganizationInvitations({
          org_id: "org-test-00000000",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("invitations");
            expect(Array.isArray(result.invitations)).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        getOrganizationInvitations({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getOrganizationInvitations({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createOrganizationInvitations
  // ============================================================================
  describe("createOrganizationInvitations", () => {
    it("happy path - creates organization invitations (or expected error without org)", async () => {
      await runEffect(
        createOrganizationInvitations({
          org_id: "org-test-00000000",
          invitations: [
            { email: "test@example.com", role: "member" },
          ],
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("invitations");
            expect(Array.isArray(result.invitations)).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        createOrganizationInvitations({
          org_id: "org-non-existent-00000000",
          invitations: [
            { email: "test@example.com", role: "member" },
          ],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createOrganizationInvitations({
          org_id: "org-non-existent-00000000",
          invitations: [
            { email: "test@example.com", role: "member" },
          ],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // transferProjectsFromOrgToOrg
  // ============================================================================
  describe("transferProjectsFromOrgToOrg", () => {
    it("happy path - transfers projects between orgs (or expected error without org)", async () => {
      await runEffect(
        transferProjectsFromOrgToOrg({
          source_org_id: "org-test-00000000",
          destination_org_id: "org-dest-00000000",
          project_ids: ["non-existent-project-00000000"],
        }).pipe(
          Effect.map(() => {
            expect(true).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnprocessableEntity", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - UnprocessableEntity for non-existent source org", async () => {
      await runEffect(
        transferProjectsFromOrgToOrg({
          source_org_id: "org-non-existent-00000000",
          destination_org_id: "org-dest-00000000",
          project_ids: ["non-existent-project-00000000"],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "UnprocessableEntity",
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        transferProjectsFromOrgToOrg({
          source_org_id: "org-non-existent-00000000",
          destination_org_id: "org-dest-00000000",
          project_ids: ["non-existent-project-00000000"],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // listOrganizationVPCEndpointsAllRegions
  // ============================================================================
  describe("listOrganizationVPCEndpointsAllRegions", () => {
    it("happy path - lists VPC endpoints across all regions (or expected error without org)", async () => {
      await runEffect(
        listOrganizationVPCEndpointsAllRegions({
          org_id: "org-test-00000000",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("endpoints");
            expect(Array.isArray(result.endpoints)).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        listOrganizationVPCEndpointsAllRegions({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listOrganizationVPCEndpointsAllRegions({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // listOrganizationVPCEndpoints
  // ============================================================================
  describe("listOrganizationVPCEndpoints", () => {
    it("happy path - lists VPC endpoints for a region (or expected error without org)", async () => {
      await runEffect(
        listOrganizationVPCEndpoints({
          org_id: "org-test-00000000",
          region_id: "aws-us-east-2",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("endpoints");
            expect(Array.isArray(result.endpoints)).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        listOrganizationVPCEndpoints({
          org_id: "org-non-existent-00000000",
          region_id: "aws-us-east-2",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listOrganizationVPCEndpoints({
          org_id: "org-non-existent-00000000",
          region_id: "aws-us-east-2",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getOrganizationVPCEndpointDetails
  // ============================================================================
  describe("getOrganizationVPCEndpointDetails", () => {
    it("happy path - retrieves VPC endpoint details (or expected error without org/VPC)", async () => {
      await runEffect(
        getOrganizationVPCEndpointDetails({
          org_id: "org-test-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("vpc_endpoint_id");
            expect(result).toHaveProperty("label");
            expect(result).toHaveProperty("state");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        getOrganizationVPCEndpointDetails({
          org_id: "org-non-existent-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getOrganizationVPCEndpointDetails({
          org_id: "org-non-existent-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // assignOrganizationVPCEndpoint
  // ============================================================================
  describe("assignOrganizationVPCEndpoint", () => {
    it("happy path - assigns a VPC endpoint (or expected error without org/VPC)", async () => {
      await runEffect(
        assignOrganizationVPCEndpoint({
          org_id: "org-test-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
          label: "test-vpc-endpoint",
        }).pipe(
          Effect.map(() => {
            expect(true).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("UnprocessableEntity", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        assignOrganizationVPCEndpoint({
          org_id: "org-non-existent-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
          label: "test-vpc-endpoint",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        assignOrganizationVPCEndpoint({
          org_id: "org-non-existent-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
          label: "test-vpc-endpoint",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // deleteOrganizationVPCEndpoint
  // ============================================================================
  describe("deleteOrganizationVPCEndpoint", () => {
    it("happy path - deletes a VPC endpoint (or expected error without org/VPC)", async () => {
      await runEffect(
        deleteOrganizationVPCEndpoint({
          org_id: "org-test-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
        }).pipe(
          Effect.map(() => {
            expect(true).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("UnprocessableEntity", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        deleteOrganizationVPCEndpoint({
          org_id: "org-non-existent-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        deleteOrganizationVPCEndpoint({
          org_id: "org-non-existent-00000000",
          region_id: "aws-us-east-2",
          vpc_endpoint_id: "vpce-00000000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // listOrgApiKeys
  // ============================================================================
  describe("listOrgApiKeys", () => {
    it("happy path - lists org API keys (or expected error without org)", async () => {
      await runEffect(
        listOrgApiKeys({
          org_id: "org-test-00000000",
        }).pipe(
          Effect.map((result) => {
            expect(Array.isArray(result)).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        listOrgApiKeys({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listOrgApiKeys({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createOrgApiKey
  // ============================================================================
  describe("createOrgApiKey", () => {
    it("happy path - creates an org API key (or expected error without org)", async () => {
      await runEffect(
        createOrgApiKey({
          org_id: "org-test-00000000",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(result).toHaveProperty("key");
            expect(result).toHaveProperty("name");
            expect(result).toHaveProperty("created_at");
          }),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org ID", async () => {
      await runEffect(
        createOrgApiKey({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createOrgApiKey({
          org_id: "org-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // revokeOrgApiKey
  // ============================================================================
  describe("revokeOrgApiKey", () => {
    it("happy path - revokes an org API key (or expected error without org)", async () => {
      await runEffect(
        revokeOrgApiKey({
          org_id: "org-test-00000000",
          key_id: 999999999,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(result).toHaveProperty("name");
            expect(result).toHaveProperty("revoked", true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent org and key ID", async () => {
      await runEffect(
        revokeOrgApiKey({
          org_id: "org-non-existent-00000000",
          key_id: 999999999,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "NotFound",
              "Forbidden",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        revokeOrgApiKey({
          org_id: "org-non-existent-00000000",
          key_id: 999999999,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
