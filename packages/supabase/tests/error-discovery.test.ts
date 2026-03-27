import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { TestLayer, testRunId } from "./setup";
import {
  v1GetProject,
  v1DeleteAProject,
  v1GetABranch,
  v1DeleteABranch,
  v1GetAFunction,
  v1DeleteAFunction,
  v1GetASsoProvider,
  v1DeleteASsoProvider,
  v1GetASnippet,
  v1GetHostnameConfig,
  v1GetAuthServiceConfig,
  v1GetPostgrestServiceConfig,
  v1ListAllSecrets,
  v1GetNetworkRestrictions,
  v1GetSslEnforcementConfig,
  v1GenerateTypescriptTypes,
  v1ListAllBranches,
  v1ListAllFunctions,
  v1GetAnOrganization,
  v1GetProjectApiKey,
  v1GetProjectApiKeys,
  v1ListMigrationHistory,
  v1RunAQuery,
  v1GetVanitySubdomainConfig,
  v1GetPgsodiumConfig,
  v1GetServicesHealth,
  v1GetReadonlyModeStatus,
} from "../src/operations";

const FAKE_REF = "nonexistent00000000ref";
const FAKE_UUID = "00000000-0000-0000-0000-000000000000";

const runAndCaptureError = <A, E>(effect: Effect.Effect<A, E, any>) =>
  Effect.runPromise(
    effect.pipe(
      Effect.matchEffect({
        onFailure: (e) => Effect.succeed({ type: "error" as const, error: e }),
        onSuccess: (v) => Effect.succeed({ type: "success" as const, value: v }),
      }),
      Effect.provide(TestLayer),
    ),
  );

describe("Supabase Error Discovery", () => {
  // ============================================================================
  // Projects - 404 errors for non-existent project ref
  // ============================================================================
  describe("Projects", () => {
    it("v1GetProject - invalid ref returns BadRequest", async () => {
      const result = await runAndCaptureError(v1GetProject({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetProject error:", JSON.stringify(result.error, null, 2));
        expect((result.error as any)._tag).toBe("BadRequest");
      }
    }, 30_000);

    it("v1DeleteAProject - non-existent ref returns 404", async () => {
      const result = await runAndCaptureError(v1DeleteAProject({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1DeleteAProject error:", JSON.stringify(result.error, null, 2));
        expect((result.error as any)._tag).toBeDefined();
      }
    }, 30_000);
  });

  // ============================================================================
  // Project sub-resources - 404 for non-existent project ref
  // ============================================================================
  describe("Project sub-resources with non-existent ref", () => {
    it("v1GetAuthServiceConfig - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetAuthServiceConfig({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetAuthServiceConfig error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetPostgrestServiceConfig - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetPostgrestServiceConfig({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetPostgrestServiceConfig error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1ListAllSecrets - non-existent ref", async () => {
      const result = await runAndCaptureError(v1ListAllSecrets({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1ListAllSecrets error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetNetworkRestrictions - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetNetworkRestrictions({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetNetworkRestrictions error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetSslEnforcementConfig - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetSslEnforcementConfig({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetSslEnforcementConfig error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GenerateTypescriptTypes - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GenerateTypescriptTypes({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GenerateTypescriptTypes error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetVanitySubdomainConfig - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetVanitySubdomainConfig({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetVanitySubdomainConfig error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetPgsodiumConfig - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetPgsodiumConfig({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetPgsodiumConfig error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetServicesHealth - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetServicesHealth({ ref: FAKE_REF, services: "auth,db" }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetServicesHealth error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetReadonlyModeStatus - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetReadonlyModeStatus({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetReadonlyModeStatus error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1ListAllBranches - non-existent ref", async () => {
      const result = await runAndCaptureError(v1ListAllBranches({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1ListAllBranches error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1ListAllFunctions - non-existent ref", async () => {
      const result = await runAndCaptureError(v1ListAllFunctions({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1ListAllFunctions error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetProjectApiKeys - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetProjectApiKeys({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetProjectApiKeys error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1ListMigrationHistory - non-existent ref", async () => {
      const result = await runAndCaptureError(v1ListMigrationHistory({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1ListMigrationHistory error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1GetHostnameConfig - non-existent ref", async () => {
      const result = await runAndCaptureError(v1GetHostnameConfig({ ref: FAKE_REF }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetHostnameConfig error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1RunAQuery - non-existent ref", async () => {
      const result = await runAndCaptureError(v1RunAQuery({ ref: FAKE_REF, query: "SELECT 1" }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1RunAQuery error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);
  });

  // ============================================================================
  // Branches - 404 for non-existent branch
  // ============================================================================
  describe("Branches", () => {
    it("v1GetABranch - non-existent branch", async () => {
      const result = await runAndCaptureError(v1GetABranch({ ref: FAKE_REF, name: "nonexistent-branch" }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetABranch error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1DeleteABranch - non-existent branch", async () => {
      const result = await runAndCaptureError(v1DeleteABranch({ branch_id_or_ref: FAKE_UUID }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1DeleteABranch error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);
  });

  // ============================================================================
  // Functions - 404 for non-existent function
  // ============================================================================
  describe("Functions", () => {
    it("v1GetAFunction - non-existent function", async () => {
      const result = await runAndCaptureError(v1GetAFunction({ ref: FAKE_REF, function_slug: "nonexistent-fn" }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetAFunction error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1DeleteAFunction - non-existent function", async () => {
      const result = await runAndCaptureError(v1DeleteAFunction({ ref: FAKE_REF, function_slug: "nonexistent-fn" }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1DeleteAFunction error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);
  });

  // ============================================================================
  // Organizations - 404 for non-existent org
  // ============================================================================
  describe("Organizations", () => {
    it("v1GetAnOrganization - non-existent org", async () => {
      const result = await runAndCaptureError(v1GetAnOrganization({ slug: "nonexistent-org-slug-" + testRunId }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetAnOrganization error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);
  });

  // ============================================================================
  // SSO Providers - 404 for non-existent provider
  // ============================================================================
  describe("SSO Providers", () => {
    it("v1GetASsoProvider - non-existent provider", async () => {
      const result = await runAndCaptureError(v1GetASsoProvider({ ref: FAKE_REF, provider_id: FAKE_UUID }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetASsoProvider error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);

    it("v1DeleteASsoProvider - non-existent provider", async () => {
      const result = await runAndCaptureError(v1DeleteASsoProvider({ ref: FAKE_REF, provider_id: FAKE_UUID }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1DeleteASsoProvider error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);
  });

  // ============================================================================
  // API Keys - 404 for non-existent key
  // ============================================================================
  describe("API Keys", () => {
    it("v1GetProjectApiKey - non-existent key", async () => {
      const result = await runAndCaptureError(v1GetProjectApiKey({ ref: FAKE_REF, id: FAKE_UUID }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetProjectApiKey error:", JSON.stringify(result.error, null, 2));
      }
    }, 30_000);
  });

  // ============================================================================
  // Snippets - 406 mapped to NotFound
  // ============================================================================
  describe("Snippets", () => {
    it("v1GetASnippet - non-existent snippet returns NotFound (API returns 406)", async () => {
      const result = await runAndCaptureError(v1GetASnippet({ id: FAKE_UUID }));
      expect(result.type).toBe("error");
      if (result.type === "error") {
        console.log("v1GetASnippet error:", JSON.stringify(result.error, null, 2));
        expect((result.error as any)._tag).toBe("NotFound");
      }
    }, 30_000);
  });
});
