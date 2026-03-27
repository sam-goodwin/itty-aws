import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId, FAKE_UUID } from "./setup";
import { v1ListAllOrganizations } from "../src/operations/v1ListAllOrganizations";
import { v1GetAnOrganization } from "../src/operations/v1GetAnOrganization";
import { v1GetAllProjectsForOrganization } from "../src/operations/v1GetAllProjectsForOrganization";
import { v1ListOrganizationMembers } from "../src/operations/v1ListOrganizationMembers";
import { v1GetOrganizationProjectClaim } from "../src/operations/v1GetOrganizationProjectClaim";

const NON_EXISTENT_ORG_SLUG = `nonexistent-org-${testRunId}`;

describe("Organizations", () => {
  // ============================================================================
  // v1ListAllOrganizations
  // ============================================================================
  describe("v1ListAllOrganizations", () => {
    it("happy path - lists organizations", async () => {
      const result = await runEffect(v1ListAllOrganizations({}));
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThanOrEqual(1);
      expect(result[0]).toHaveProperty("id");
      expect(result[0]).toHaveProperty("slug");
      expect(result[0]).toHaveProperty("name");
    }, 30_000);
  });

  // ============================================================================
  // v1GetAnOrganization
  // ============================================================================
  describe("v1GetAnOrganization", () => {
    it("happy path - gets an organization by slug", async () => {
      await runEffect(
        Effect.gen(function* () {
          const orgs = yield* v1ListAllOrganizations({});
          expect(orgs.length).toBeGreaterThanOrEqual(1);
          const org = yield* v1GetAnOrganization({ slug: orgs[0].slug });
          expect(org).toHaveProperty("id");
          expect(org).toHaveProperty("name");
          expect(org).toHaveProperty("opt_in_tags");
          expect(org).toHaveProperty("allowed_release_channels");
        }),
      );
    }, 30_000);

    it("error - Forbidden for non-existent org slug", async () => {
      await runEffect(
        v1GetAnOrganization({ slug: NON_EXISTENT_ORG_SLUG }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["Forbidden", "NotFound"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetAllProjectsForOrganization
  // ============================================================================
  describe("v1GetAllProjectsForOrganization", () => {
    it("happy path - lists projects for organization", async () => {
      await runEffect(
        Effect.gen(function* () {
          const orgs = yield* v1ListAllOrganizations({});
          const result = yield* v1GetAllProjectsForOrganization({ slug: orgs[0].slug });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - Forbidden for non-existent org slug", async () => {
      await runEffect(
        v1GetAllProjectsForOrganization({ slug: NON_EXISTENT_ORG_SLUG }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["Forbidden", "NotFound"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListOrganizationMembers
  // ============================================================================
  describe("v1ListOrganizationMembers", () => {
    it("happy path - lists organization members", async () => {
      await runEffect(
        Effect.gen(function* () {
          const orgs = yield* v1ListAllOrganizations({});
          const result = yield* v1ListOrganizationMembers({ slug: orgs[0].slug });
          expect(Array.isArray(result)).toBe(true);
          expect(result.length).toBeGreaterThanOrEqual(1);
        }),
      );
    }, 30_000);

    it("error - Forbidden for non-existent org slug", async () => {
      await runEffect(
        v1ListOrganizationMembers({ slug: NON_EXISTENT_ORG_SLUG }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["Forbidden", "NotFound"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetOrganizationProjectClaim
  // ============================================================================
  describe("v1GetOrganizationProjectClaim", () => {
    it("error - NotFound for non-existent claim token", async () => {
      await runEffect(
        v1GetOrganizationProjectClaim({ slug: NON_EXISTENT_ORG_SLUG, token: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            // API may return NotFound or Forbidden for non-existent org
            expect(["NotFound", "Forbidden", "BadRequest"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });
});
