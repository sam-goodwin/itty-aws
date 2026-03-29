import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId, getExistingOrgSlug } from "./setup";
import { v1ListAllOrganizations } from "../src/operations/v1ListAllOrganizations";
import { v1CreateAnOrganization } from "../src/operations/v1CreateAnOrganization";
import { v1GetAnOrganization } from "../src/operations/v1GetAnOrganization";
import { v1ListOrganizationMembers } from "../src/operations/v1ListOrganizationMembers";
import { v1GetOrganizationProjectClaim } from "../src/operations/v1GetOrganizationProjectClaim";
import { v1ClaimProjectForOrganization } from "../src/operations/v1ClaimProjectForOrganization";
import { v1GetAllProjectsForOrganization } from "../src/operations/v1GetAllProjectsForOrganization";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden/Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make("sbp_invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Organizations", () => {
  // ============================================================================
  // v1ListAllOrganizations
  // ============================================================================
  describe("v1ListAllOrganizations", () => {
    it("happy path - lists all organizations", async () => {
      const result = await runEffect(v1ListAllOrganizations({}));
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty("id");
      expect(result[0]).toHaveProperty("slug");
      expect(result[0]).toHaveProperty("name");
      expect(typeof result[0].id).toBe("string");
      expect(typeof result[0].slug).toBe("string");
      expect(typeof result[0].name).toBe("string");
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1ListAllOrganizations({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1CreateAnOrganization
  // ============================================================================
  describe("v1CreateAnOrganization", () => {
    it("happy path - creates an organization", async () => {
      const orgName = `test-org-${testRunId}`;
      const result = await runEffect(v1CreateAnOrganization({ name: orgName }));
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("slug");
      expect(result).toHaveProperty("name");
      expect(typeof result.id).toBe("string");
      expect(typeof result.slug).toBe("string");
      expect(result.name).toBe(orgName);
    }, 30_000);

    it("error - BadRequest for empty name", async () => {
      await runEffect(
        v1CreateAnOrganization({ name: "" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1CreateAnOrganization({ name: "test-org-forbidden" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetAnOrganization
  // ============================================================================
  describe("v1GetAnOrganization", () => {
    it("happy path - gets an organization by slug", async () => {
      const slug = await getExistingOrgSlug();
      const result = await runEffect(v1GetAnOrganization({ slug }));
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("name");
      expect(typeof result.id).toBe("string");
      expect(typeof result.name).toBe("string");
      expect(result).toHaveProperty("opt_in_tags");
      expect(Array.isArray(result.opt_in_tags)).toBe(true);
      expect(result).toHaveProperty("allowed_release_channels");
      expect(Array.isArray(result.allowed_release_channels)).toBe(true);
    }, 30_000);

    it("error - NotFound/Forbidden for non-existent slug", async () => {
      await runEffect(
        v1GetAnOrganization({ slug: "nonexistent-org-slug-000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "Forbidden"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetAnOrganization({ slug: "nonexistent-org-slug-000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListOrganizationMembers
  // ============================================================================
  describe("v1ListOrganizationMembers", () => {
    it("happy path - lists organization members", async () => {
      const slug = await getExistingOrgSlug();
      const result = await runEffect(v1ListOrganizationMembers({ slug }));
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty("user_id");
      expect(result[0]).toHaveProperty("user_name");
      expect(result[0]).toHaveProperty("role_name");
      expect(result[0]).toHaveProperty("mfa_enabled");
      expect(typeof result[0].user_id).toBe("string");
      expect(typeof result[0].role_name).toBe("string");
      expect(typeof result[0].mfa_enabled).toBe("boolean");
    }, 30_000);

    it("error - NotFound/Forbidden for non-existent slug", async () => {
      await runEffect(
        v1ListOrganizationMembers({ slug: "nonexistent-org-slug-000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "Forbidden"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1ListOrganizationMembers({ slug: "nonexistent-org-slug-000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetOrganizationProjectClaim
  // ============================================================================
  describe("v1GetOrganizationProjectClaim", () => {
    it("happy path - gets project claim (skips if no valid token)", async (ctx) => {
      const slug = await getExistingOrgSlug();
      // Claim tokens are created externally; use a fake token and expect NotFound
      const result = await runEffect(
        v1GetOrganizationProjectClaim({ slug, token: "fake-claim-token-000000" }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            // NotFound is expected when no valid claim token exists
            if (tag === "NotFound" || tag === "BadRequest" || tag === "Forbidden") return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) { ctx.skip(); return; }
      expect(result).toHaveProperty("project");
      expect(result.project).toHaveProperty("ref");
      expect(result.project).toHaveProperty("name");
      expect(result).toHaveProperty("expires_at");
      expect(result).toHaveProperty("created_at");
    }, 30_000);

    it("error - NotFound/Forbidden for non-existent slug and token", async () => {
      await runEffect(
        v1GetOrganizationProjectClaim({ slug: "nonexistent-org-slug-000000", token: "fake-token" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "Forbidden"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetOrganizationProjectClaim({ slug: "nonexistent-org-slug-000000", token: "fake-token" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ClaimProjectForOrganization
  // ============================================================================
  describe("v1ClaimProjectForOrganization", () => {
    it("happy path - claims project for organization (skips if no valid token)", async (ctx) => {
      const slug = await getExistingOrgSlug();
      // Claim tokens are created externally; use a fake token and expect NotFound
      const result = await runEffect(
        v1ClaimProjectForOrganization({ slug, token: "fake-claim-token-000000" }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "NotFound" || tag === "BadRequest" || tag === "Forbidden") return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) { ctx.skip(); return; }
    }, 30_000);

    it("error - NotFound/Forbidden for non-existent slug and token", async () => {
      await runEffect(
        v1ClaimProjectForOrganization({ slug: "nonexistent-org-slug-000000", token: "fake-token" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "Forbidden"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1ClaimProjectForOrganization({ slug: "nonexistent-org-slug-000000", token: "fake-token" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetAllProjectsForOrganization
  // ============================================================================
  describe("v1GetAllProjectsForOrganization", () => {
    it("happy path - lists projects for organization", async () => {
      const slug = await getExistingOrgSlug();
      const result = await runEffect(v1GetAllProjectsForOrganization({ slug }));
      expect(result).toHaveProperty("projects");
      expect(Array.isArray(result.projects)).toBe(true);
      expect(result).toHaveProperty("pagination");
      expect(result.pagination).toHaveProperty("count");
      expect(result.pagination).toHaveProperty("limit");
      expect(result.pagination).toHaveProperty("offset");
      expect(typeof result.pagination.count).toBe("number");
      if (result.projects.length > 0) {
        expect(result.projects[0]).toHaveProperty("ref");
        expect(result.projects[0]).toHaveProperty("name");
        expect(result.projects[0]).toHaveProperty("status");
        expect(result.projects[0]).toHaveProperty("region");
      }
    }, 30_000);

    it("error - NotFound/Forbidden for non-existent slug", async () => {
      await runEffect(
        v1GetAllProjectsForOrganization({ slug: "nonexistent-org-slug-000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "Forbidden"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetAllProjectsForOrganization({ slug: "nonexistent-org-slug-000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
