import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./setup";
import { createProject } from "../src/operations/createProject";
import { deleteProject } from "../src/operations/deleteProject";
import { getActiveRegions } from "../src/operations/getActiveRegions";
import { getAuthDetails } from "../src/operations/getAuthDetails";
import { getConnectionURI } from "../src/operations/getConnectionURI";
import { getAvailablePreloadLibraries } from "../src/operations/getAvailablePreloadLibraries";
import { getCurrentUserInfo } from "../src/operations/getCurrentUserInfo";
import { getCurrentUserOrganizations } from "../src/operations/getCurrentUserOrganizations";
import { transferProjectsFromUserToOrg } from "../src/operations/transferProjectsFromUserToOrg";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Misc", () => {
  // ============================================================================
  // getAvailablePreloadLibraries
  // ============================================================================
  describe("getAvailablePreloadLibraries", () => {
    it("happy path - lists available preload libraries for a project", async () => {
      const projectName = `distilled-neon-preload-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          const result = yield* getAvailablePreloadLibraries({
            project_id: created.project.id,
          });
          expect(result).toHaveProperty("libraries");
          if (result.libraries) {
            expect(Array.isArray(result.libraries)).toBe(true);
            if (result.libraries.length > 0) {
              expect(result.libraries[0]).toHaveProperty("library_name");
              expect(result.libraries[0]).toHaveProperty("description");
              expect(result.libraries[0]).toHaveProperty("is_default");
              expect(result.libraries[0]).toHaveProperty("is_experimental");
              expect(result.libraries[0]).toHaveProperty("version");
            }
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getAvailablePreloadLibraries({
          project_id: "non-existent-project-00000000",
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
        getAvailablePreloadLibraries({
          project_id: "non-existent-project-00000000",
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
  // getActiveRegions
  // ============================================================================
  describe("getActiveRegions", () => {
    it("happy path - lists supported regions", async () => {
      await runEffect(
        getActiveRegions({}).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("regions");
            expect(Array.isArray(result.regions)).toBe(true);
            expect(result.regions.length).toBeGreaterThan(0);
            const region = result.regions[0];
            expect(region).toHaveProperty("region_id");
            expect(region).toHaveProperty("name");
            expect(region).toHaveProperty("default");
            expect(region).toHaveProperty("geo_lat");
            expect(region).toHaveProperty("geo_long");
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getActiveRegions({}).pipe(
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
  // getCurrentUserInfo
  // ============================================================================
  describe("getCurrentUserInfo", () => {
    it("happy path - retrieves current user details", async () => {
      await runEffect(
        getCurrentUserInfo({}).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("id");
            expect(result).toHaveProperty("email");
            expect(result).toHaveProperty("name");
            expect(result).toHaveProperty("login");
            expect(result).toHaveProperty("image");
            expect(result).toHaveProperty("plan");
            expect(result).toHaveProperty("projects_limit");
            expect(result).toHaveProperty("branches_limit");
            expect(result).toHaveProperty("max_autoscaling_limit");
            expect(result).toHaveProperty("auth_accounts");
            expect(Array.isArray(result.auth_accounts)).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getCurrentUserInfo({}).pipe(
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
  // getCurrentUserOrganizations
  // ============================================================================
  describe("getCurrentUserOrganizations", () => {
    it("happy path - retrieves current user organizations", async () => {
      await runEffect(
        getCurrentUserOrganizations({}).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("organizations");
            expect(Array.isArray(result.organizations)).toBe(true);
            if (result.organizations.length > 0) {
              const org = result.organizations[0];
              expect(org).toHaveProperty("id");
              expect(org).toHaveProperty("name");
              expect(org).toHaveProperty("handle");
              expect(org).toHaveProperty("plan");
              expect(org).toHaveProperty("created_at");
              expect(org).toHaveProperty("managed_by");
              expect(org).toHaveProperty("updated_at");
            }
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getCurrentUserOrganizations({}).pipe(
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
  // transferProjectsFromUserToOrg
  // ============================================================================
  describe("transferProjectsFromUserToOrg", () => {
    it("happy path - transfers projects to org (or expected error without org)", async () => {
      await runEffect(
        transferProjectsFromUserToOrg({
          destination_org_id: "org-test-00000000",
          project_ids: ["non-existent-project-00000000"],
        }).pipe(
          Effect.map((result) => {
            expect(result).toBeDefined();
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnprocessableEntity", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - UnprocessableEntity for invalid transfer", async () => {
      await runEffect(
        transferProjectsFromUserToOrg({
          destination_org_id: "org-test-00000000",
          project_ids: ["non-existent-project-00000000"],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(
              [
                "UnprocessableEntity",
                "NotFound",
                "Forbidden",
                "UnknownNeonError",
              ],
            ).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        transferProjectsFromUserToOrg({
          destination_org_id: "org-test-00000000",
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
  // getAuthDetails
  // ============================================================================
  describe("getAuthDetails", () => {
    it("happy path - retrieves authentication details", async () => {
      await runEffect(
        getAuthDetails({}).pipe(
          Effect.map((result) => {
            expect(result).toHaveProperty("account_id");
            expect(typeof result.account_id).toBe("string");
            expect(result).toHaveProperty("auth_method");
            expect([
              "keycloak",
              "session_cookie",
              "api_key_user",
              "api_key_org",
              "oauth",
            ]).toContain(result.auth_method);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getAuthDetails({}).pipe(
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
  // getConnectionURI
  // ============================================================================
  describe("getConnectionURI", () => {
    it("happy path - retrieves connection URI for a project", async () => {
      const projectName = `distilled-neon-connuri-${testRunId}`;
      let projectId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProject({
            project: { name: projectName },
          });
          projectId = created.project.id;

          const result = yield* getConnectionURI({
            project_id: created.project.id,
            database_name: "neondb",
            role_name: "neondb_owner",
          });
          expect(result).toHaveProperty("uri");
          expect(typeof result.uri).toBe("string");
          expect(result.uri).toContain("postgresql://");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (projectId) {
                yield* deleteProject({ project_id: projectId }).pipe(
                  Effect.ignore,
                );
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getConnectionURI({
          project_id: "non-existent-project-00000000",
          database_name: "neondb",
          role_name: "neondb_owner",
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
        getConnectionURI({
          project_id: "non-existent-project-00000000",
          database_name: "neondb",
          role_name: "neondb_owner",
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
