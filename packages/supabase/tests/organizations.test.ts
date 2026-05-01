import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./setup";
import { v1CreateAnOrganization } from "../src/operations/v1CreateAnOrganization";
import { v1ListAllOrganizations } from "../src/operations/v1ListAllOrganizations";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Supabase's management API has no DELETE /v1/organizations/{slug} endpoint —
// every organization created by a test run is permanent. Gate org-creation
// tests behind an env var so CI and ordinary local runs don't accumulate
// undeletable residue in the user's account.
const runOrgCreationTests =
  !!process.env.SUPABASE_RUN_ORGANIZATION_CREATION_TESTS;

const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make("sbp_invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Organizations", () => {
  describe("v1ListAllOrganizations", () => {
    it("happy path - lists organizations", async () => {
      const result = await runEffect(v1ListAllOrganizations({}));
      expect(Array.isArray(result)).toBe(true);
      if (result.length > 0) {
        expect(result[0]).toHaveProperty("id");
        expect(result[0]).toHaveProperty("slug");
      }
    });

    it("error - Forbidden with invalid token", async () => {
      const err = await Effect.runPromise(
        v1ListAllOrganizations({}).pipe(
          Effect.provide(BadTokenLayer),
          Effect.flip,
        ),
      );
      expect(["Forbidden", "Unauthorized"]).toContain(err._tag);
    });
  });

  describe("v1CreateAnOrganization", () => {
    it.skipIf(!runOrgCreationTests)(
      "happy path - creates an organization (gated by SUPABASE_RUN_ORGANIZATION_CREATION_TESTS)",
      async () => {
        const name = `distilled-supabase-org-${testRunId}`;
        const result = await runEffect(v1CreateAnOrganization({ name }));
        expect(result.id).toBeDefined();
        expect(result.slug).toBeDefined();
        expect(result.name).toBe(name);
      },
      60_000,
    );

    it("error - Forbidden with invalid token", async () => {
      const err = await Effect.runPromise(
        v1CreateAnOrganization({
          name: `distilled-supabase-org-fail-${testRunId}`,
        }).pipe(Effect.provide(BadTokenLayer), Effect.flip),
      );
      expect(["Forbidden", "Unauthorized"]).toContain(err._tag);
    });
  });
});
