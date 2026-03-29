import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";
import { addBranchNeonAuthOauthProvider } from "../src/operations/addBranchNeonAuthOauthProvider";
import { addBranchNeonAuthTrustedDomain } from "../src/operations/addBranchNeonAuthTrustedDomain";
import { createBranchNeonAuthNewUser } from "../src/operations/createBranchNeonAuthNewUser";
import { createNeonAuth } from "../src/operations/createNeonAuth";
import { deleteBranchNeonAuthUser } from "../src/operations/deleteBranchNeonAuthUser";
import { createNeonAuthProviderSDKKeys } from "../src/operations/createNeonAuthProviderSDKKeys";
import { deleteBranchNeonAuthOauthProvider } from "../src/operations/deleteBranchNeonAuthOauthProvider";
import { deleteBranchNeonAuthTrustedDomain } from "../src/operations/deleteBranchNeonAuthTrustedDomain";
import { disableNeonAuth } from "../src/operations/disableNeonAuth";
import { getNeonAuth } from "../src/operations/getNeonAuth";
import { getNeonAuthEmailAndPasswordConfig } from "../src/operations/getNeonAuthEmailAndPasswordConfig";
import { getNeonAuthAllowLocalhost } from "../src/operations/getNeonAuthAllowLocalhost";
import { getNeonAuthEmailProvider } from "../src/operations/getNeonAuthEmailProvider";
import { getNeonAuthPluginConfigs } from "../src/operations/getNeonAuthPluginConfigs";
import { getNeonAuthWebhookConfig } from "../src/operations/getNeonAuthWebhookConfig";
import { listBranchNeonAuthOauthProviders } from "../src/operations/listBranchNeonAuthOauthProviders";
import { listBranchNeonAuthTrustedDomains } from "../src/operations/listBranchNeonAuthTrustedDomains";
import { sendNeonAuthTestEmail } from "../src/operations/sendNeonAuthTestEmail";
import { transferNeonAuthProviderProject } from "../src/operations/transferNeonAuthProviderProject";
import { updateBranchNeonAuthOauthProvider } from "../src/operations/updateBranchNeonAuthOauthProvider";
import { updateNeonAuthEmailAndPasswordConfig } from "../src/operations/updateNeonAuthEmailAndPasswordConfig";
import { updateNeonAuthEmailProvider } from "../src/operations/updateNeonAuthEmailProvider";
import { updateNeonAuthAllowLocalhost } from "../src/operations/updateNeonAuthAllowLocalhost";
import { updateNeonAuthOrganizationPlugin } from "../src/operations/updateNeonAuthOrganizationPlugin";
import { updateNeonAuthWebhookConfig } from "../src/operations/updateNeonAuthWebhookConfig";
import { updateNeonAuthUserRole } from "../src/operations/updateNeonAuthUserRole";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

beforeAll(async () => {
  await Effect.runPromise(setupTestProject("neon-auth"));
}, 120_000);

afterAll(async () => {
  await Effect.runPromise(teardownTestProject("neon-auth"));
}, 120_000);

describe("NeonAuth", () => {
  // ============================================================================
  // getNeonAuth
  // ============================================================================
  describe("getNeonAuth", () => {
    it("happy path - retrieves Neon Auth details (or expected error if not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuth({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("auth_provider");
            expect(result).toHaveProperty("branch_id");
            expect(result).toHaveProperty("db_name");
            expect(result).toHaveProperty("created_at");
            expect(result).toHaveProperty("owned_by");
            expect(result).toHaveProperty("jwks_url");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getNeonAuth({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuth({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getNeonAuth({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // createNeonAuth
  // ============================================================================
  describe("createNeonAuth", () => {
    it("happy path - enables Neon Auth on a branch", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        createNeonAuth({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          auth_provider: "stack_v2",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("auth_provider");
            expect(result.auth_provider).toBe("stack_v2");
            expect(result).toHaveProperty("auth_provider_project_id");
            expect(result).toHaveProperty("pub_client_key");
            expect(result).toHaveProperty("secret_server_key");
            expect(result).toHaveProperty("jwks_url");
            expect(result).toHaveProperty("schema_name");
            expect(result).toHaveProperty("table_name");
          }),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.ensuring(
            disableNeonAuth({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              delete_data: true,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createNeonAuth({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          auth_provider: "stack_v2",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        createNeonAuth({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          auth_provider: "stack_v2",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createNeonAuth({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          auth_provider: "stack_v2",
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
  // disableNeonAuth
  // ============================================================================
  describe("disableNeonAuth", () => {
    it("happy path - enables then disables Neon Auth on a branch", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        Effect.gen(function* () {
          // First enable Neon Auth so we can disable it
          yield* createNeonAuth({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            auth_provider: "stack_v2",
          }).pipe(Effect.catchTag("BadRequest", () => Effect.succeed(undefined)));

          // Now disable it
          yield* disableNeonAuth({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            delete_data: true,
          }).pipe(
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          );
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        disableNeonAuth({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        disableNeonAuth({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        disableNeonAuth({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // listBranchNeonAuthTrustedDomains
  // ============================================================================
  describe("listBranchNeonAuthTrustedDomains", () => {
    it("happy path - lists trusted domains (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        listBranchNeonAuthTrustedDomains({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("domains");
            expect(Array.isArray(result.domains)).toBe(true);
            if (result.domains.length > 0) {
              const domain = result.domains[0];
              expect(domain).toHaveProperty("domain");
              expect(domain).toHaveProperty("auth_provider");
            }
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        listBranchNeonAuthTrustedDomains({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        listBranchNeonAuthTrustedDomains({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listBranchNeonAuthTrustedDomains({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // addBranchNeonAuthTrustedDomain
  // ============================================================================
  describe("addBranchNeonAuthTrustedDomain", () => {
    it("happy path - adds a trusted domain (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        addBranchNeonAuthTrustedDomain({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          domain: `https://test-${testRunId}.example.com`,
          auth_provider: "stack_v2",
        }).pipe(
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        addBranchNeonAuthTrustedDomain({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          domain: "https://example.com",
          auth_provider: "stack_v2",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        addBranchNeonAuthTrustedDomain({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          domain: "https://example.com",
          auth_provider: "stack_v2",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        addBranchNeonAuthTrustedDomain({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          domain: "https://example.com",
          auth_provider: "stack_v2",
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
  // deleteBranchNeonAuthTrustedDomain
  // ============================================================================
  describe("deleteBranchNeonAuthTrustedDomain", () => {
    it("happy path - deletes a trusted domain (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        deleteBranchNeonAuthTrustedDomain({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          auth_provider: "stack_v2",
          domains: [{ domain: `https://test-${testRunId}.example.com` }],
        }).pipe(
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteBranchNeonAuthTrustedDomain({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          auth_provider: "stack_v2",
          domains: [{ domain: "https://example.com" }],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        deleteBranchNeonAuthTrustedDomain({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          auth_provider: "stack_v2",
          domains: [{ domain: "https://example.com" }],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        deleteBranchNeonAuthTrustedDomain({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          auth_provider: "stack_v2",
          domains: [{ domain: "https://example.com" }],
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
  // createNeonAuthProviderSDKKeys
  // ============================================================================
  describe("createNeonAuthProviderSDKKeys", () => {
    it("happy path - creates SDK keys (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        createNeonAuthProviderSDKKeys({
          project_id: project.id,
          auth_provider: "stack_v2",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("auth_provider");
            expect(result.auth_provider).toBe("stack_v2");
            expect(result).toHaveProperty("auth_provider_project_id");
            expect(result).toHaveProperty("pub_client_key");
            expect(result).toHaveProperty("secret_server_key");
            expect(result).toHaveProperty("jwks_url");
            expect(result).toHaveProperty("schema_name");
            expect(result).toHaveProperty("table_name");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createNeonAuthProviderSDKKeys({
          project_id: "non-existent-project-00000000",
          auth_provider: "stack_v2",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createNeonAuthProviderSDKKeys({
          project_id: "non-existent-project-00000000",
          auth_provider: "stack_v2",
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
  // createBranchNeonAuthNewUser
  // ============================================================================
  describe("createBranchNeonAuthNewUser", () => {
    it("happy path - creates a new auth user (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        createBranchNeonAuthNewUser({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          email: `test-${testRunId}@example.com`,
          name: `Test User ${testRunId}`,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(typeof result.id).toBe("string");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createBranchNeonAuthNewUser({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          email: "test@example.com",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        createBranchNeonAuthNewUser({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          email: "test@example.com",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createBranchNeonAuthNewUser({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          email: "test@example.com",
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
  // deleteBranchNeonAuthUser
  // ============================================================================
  describe("deleteBranchNeonAuthUser", () => {
    it("happy path - deletes an auth user (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        deleteBranchNeonAuthUser({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          auth_user_id: "non-existent-user-00000000",
        }).pipe(
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteBranchNeonAuthUser({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          auth_user_id: "non-existent-user-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        deleteBranchNeonAuthUser({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          auth_user_id: "non-existent-user-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        deleteBranchNeonAuthUser({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          auth_user_id: "non-existent-user-00000000",
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
  // updateNeonAuthUserRole
  // ============================================================================
  describe("updateNeonAuthUserRole", () => {
    it("happy path - updates auth user role (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthUserRole({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          auth_user_id: "non-existent-user-00000000",
          roles: ["admin"],
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(typeof result.id).toBe("string");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateNeonAuthUserRole({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          auth_user_id: "non-existent-user-00000000",
          roles: ["admin"],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthUserRole({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          auth_user_id: "non-existent-user-00000000",
          roles: ["admin"],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateNeonAuthUserRole({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          auth_user_id: "non-existent-user-00000000",
          roles: ["admin"],
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
  // transferNeonAuthProviderProject
  // ============================================================================
  describe("transferNeonAuthProviderProject", () => {
    it("happy path - transfers auth provider project (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        transferNeonAuthProviderProject({
          project_id: project.id,
          auth_provider: "stack_v2",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("url");
            expect(typeof result.url).toBe("string");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        transferNeonAuthProviderProject({
          project_id: "non-existent-project-00000000",
          auth_provider: "stack_v2",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        transferNeonAuthProviderProject({
          project_id: "non-existent-project-00000000",
          auth_provider: "stack_v2",
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
  // listBranchNeonAuthOauthProviders
  // ============================================================================
  describe("listBranchNeonAuthOauthProviders", () => {
    it("happy path - lists OAuth providers (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        listBranchNeonAuthOauthProviders({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("providers");
            expect(Array.isArray(result.providers)).toBe(true);
            if (result.providers.length > 0) {
              const provider = result.providers[0];
              expect(provider).toHaveProperty("id");
              expect(provider).toHaveProperty("type");
            }
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        listBranchNeonAuthOauthProviders({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        listBranchNeonAuthOauthProviders({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listBranchNeonAuthOauthProviders({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // addBranchNeonAuthOauthProvider
  // ============================================================================
  describe("addBranchNeonAuthOauthProvider", () => {
    it("happy path - adds an OAuth provider (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        addBranchNeonAuthOauthProvider({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          id: "github",
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(result).toHaveProperty("type");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        addBranchNeonAuthOauthProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          id: "github",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        addBranchNeonAuthOauthProvider({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          id: "github",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        addBranchNeonAuthOauthProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          id: "github",
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
  // updateBranchNeonAuthOauthProvider
  // ============================================================================
  describe("updateBranchNeonAuthOauthProvider", () => {
    it("happy path - updates an OAuth provider (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateBranchNeonAuthOauthProvider({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          oauth_provider_id: "github",
          client_id: `test-client-${testRunId}`,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(result).toHaveProperty("type");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateBranchNeonAuthOauthProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          oauth_provider_id: "github",
          client_id: "test-client",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateBranchNeonAuthOauthProvider({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          oauth_provider_id: "github",
          client_id: "test-client",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateBranchNeonAuthOauthProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          oauth_provider_id: "github",
          client_id: "test-client",
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
  // deleteBranchNeonAuthOauthProvider
  // ============================================================================
  describe("deleteBranchNeonAuthOauthProvider", () => {
    it("happy path - deletes an OAuth provider (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        deleteBranchNeonAuthOauthProvider({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          oauth_provider_id: "github",
        }).pipe(
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteBranchNeonAuthOauthProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          oauth_provider_id: "github",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        deleteBranchNeonAuthOauthProvider({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          oauth_provider_id: "github",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        deleteBranchNeonAuthOauthProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          oauth_provider_id: "github",
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
  // sendNeonAuthTestEmail
  // ============================================================================
  describe("sendNeonAuthTestEmail", () => {
    it("happy path - sends a test email (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        sendNeonAuthTestEmail({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("success");
            expect(typeof result.success).toBe("boolean");
          }),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        sendNeonAuthTestEmail({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        sendNeonAuthTestEmail({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        sendNeonAuthTestEmail({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // getNeonAuthEmailAndPasswordConfig
  // ============================================================================
  describe("getNeonAuthEmailAndPasswordConfig", () => {
    it("happy path - retrieves email and password config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthEmailAndPasswordConfig({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("enabled");
            expect(typeof result.enabled).toBe("boolean");
            expect(result).toHaveProperty("email_verification_method");
            expect(["link", "otp"]).toContain(result.email_verification_method);
            expect(result).toHaveProperty("require_email_verification");
            expect(result).toHaveProperty("auto_sign_in_after_verification");
            expect(result).toHaveProperty("send_verification_email_on_sign_up");
            expect(result).toHaveProperty("send_verification_email_on_sign_in");
            expect(result).toHaveProperty("disable_sign_up");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getNeonAuthEmailAndPasswordConfig({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthEmailAndPasswordConfig({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getNeonAuthEmailAndPasswordConfig({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // updateNeonAuthEmailAndPasswordConfig
  // ============================================================================
  describe("updateNeonAuthEmailAndPasswordConfig", () => {
    it("happy path - updates email and password config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthEmailAndPasswordConfig({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          enabled: true,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("enabled");
            expect(typeof result.enabled).toBe("boolean");
            expect(result).toHaveProperty("email_verification_method");
            expect(result).toHaveProperty("require_email_verification");
            expect(result).toHaveProperty("auto_sign_in_after_verification");
            expect(result).toHaveProperty("send_verification_email_on_sign_up");
            expect(result).toHaveProperty("send_verification_email_on_sign_in");
            expect(result).toHaveProperty("disable_sign_up");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateNeonAuthEmailAndPasswordConfig({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          enabled: true,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthEmailAndPasswordConfig({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          enabled: true,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateNeonAuthEmailAndPasswordConfig({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          enabled: true,
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
  // getNeonAuthEmailProvider
  // ============================================================================
  describe("getNeonAuthEmailProvider", () => {
    it("happy path - retrieves email provider config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthEmailProvider({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toBeDefined();
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getNeonAuthEmailProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthEmailProvider({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getNeonAuthEmailProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // updateNeonAuthEmailProvider
  // ============================================================================
  describe("updateNeonAuthEmailProvider", () => {
    it("happy path - updates email provider config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthEmailProvider({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toBeDefined();
          }),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateNeonAuthEmailProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthEmailProvider({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateNeonAuthEmailProvider({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // getNeonAuthAllowLocalhost
  // ============================================================================
  describe("getNeonAuthAllowLocalhost", () => {
    it("happy path - retrieves allow localhost config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthAllowLocalhost({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("allow_localhost");
            expect(typeof result.allow_localhost).toBe("boolean");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getNeonAuthAllowLocalhost({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthAllowLocalhost({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getNeonAuthAllowLocalhost({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // updateNeonAuthAllowLocalhost
  // ============================================================================
  describe("updateNeonAuthAllowLocalhost", () => {
    it("happy path - updates allow localhost config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthAllowLocalhost({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          allow_localhost: true,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("allow_localhost");
            expect(typeof result.allow_localhost).toBe("boolean");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateNeonAuthAllowLocalhost({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          allow_localhost: true,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthAllowLocalhost({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          allow_localhost: true,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateNeonAuthAllowLocalhost({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          allow_localhost: true,
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
  // getNeonAuthPluginConfigs
  // ============================================================================
  describe("getNeonAuthPluginConfigs", () => {
    it("happy path - retrieves all plugin configs (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthPluginConfigs({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toBeDefined();
            // All fields are optional, but the object should exist
            if (result.organization) {
              expect(result.organization).toHaveProperty("enabled");
              expect(result.organization).toHaveProperty("creator_role");
            }
            if (result.email_and_password) {
              expect(result.email_and_password).toHaveProperty("enabled");
            }
            if (result.oauth_providers) {
              expect(Array.isArray(result.oauth_providers)).toBe(true);
            }
            if (result.allow_localhost !== undefined) {
              expect(typeof result.allow_localhost).toBe("boolean");
            }
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getNeonAuthPluginConfigs({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthPluginConfigs({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getNeonAuthPluginConfigs({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // updateNeonAuthOrganizationPlugin
  // ============================================================================
  describe("updateNeonAuthOrganizationPlugin", () => {
    it("happy path - updates organization plugin config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthOrganizationPlugin({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          enabled: true,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("enabled");
            expect(typeof result.enabled).toBe("boolean");
            expect(result).toHaveProperty("organization_limit");
            expect(result).toHaveProperty("membership_limit");
            expect(result).toHaveProperty("creator_role");
            expect(["admin", "owner"]).toContain(result.creator_role);
            expect(result).toHaveProperty("send_invitation_email");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateNeonAuthOrganizationPlugin({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          enabled: true,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthOrganizationPlugin({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          enabled: true,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateNeonAuthOrganizationPlugin({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          enabled: true,
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
  // getNeonAuthWebhookConfig
  // ============================================================================
  describe("getNeonAuthWebhookConfig", () => {
    it("happy path - retrieves webhook config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthWebhookConfig({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("enabled");
            expect(typeof result.enabled).toBe("boolean");
            if (result.webhook_url !== undefined) {
              expect(typeof result.webhook_url).toBe("string");
            }
            if (result.enabled_events !== undefined) {
              expect(Array.isArray(result.enabled_events)).toBe(true);
            }
            if (result.timeout_seconds !== undefined) {
              expect(typeof result.timeout_seconds).toBe("number");
            }
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getNeonAuthWebhookConfig({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        getNeonAuthWebhookConfig({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getNeonAuthWebhookConfig({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
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
  // updateNeonAuthWebhookConfig
  // ============================================================================
  describe("updateNeonAuthWebhookConfig", () => {
    it("happy path - updates webhook config (or expected error if auth not configured)", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthWebhookConfig({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          enabled: false,
        }).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("enabled");
            expect(typeof result.enabled).toBe("boolean");
            if (result.webhook_url !== undefined) {
              expect(typeof result.webhook_url).toBe("string");
            }
            if (result.enabled_events !== undefined) {
              expect(Array.isArray(result.enabled_events)).toBe(true);
            }
            if (result.timeout_seconds !== undefined) {
              expect(typeof result.timeout_seconds).toBe("number");
            }
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateNeonAuthWebhookConfig({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          enabled: false,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("neon-auth");
      await runEffect(
        updateNeonAuthWebhookConfig({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          enabled: false,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateNeonAuthWebhookConfig({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          enabled: false,
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
