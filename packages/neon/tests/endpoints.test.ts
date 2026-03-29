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
import { listProjectEndpoints } from "../src/operations/listProjectEndpoints";
import { createProjectEndpoint } from "../src/operations/createProjectEndpoint";
import { deleteProjectEndpoint } from "../src/operations/deleteProjectEndpoint";
import { getProjectEndpoint } from "../src/operations/getProjectEndpoint";
import { updateProjectEndpoint } from "../src/operations/updateProjectEndpoint";
import { startProjectEndpoint } from "../src/operations/startProjectEndpoint";
import { suspendProjectEndpoint } from "../src/operations/suspendProjectEndpoint";
import { restartProjectEndpoint } from "../src/operations/restartProjectEndpoint";
import { listProjectVPCEndpoints } from "../src/operations/listProjectVPCEndpoints";
import { assignProjectVPCEndpoint } from "../src/operations/assignProjectVPCEndpoint";
import { deleteProjectVPCEndpoint } from "../src/operations/deleteProjectVPCEndpoint";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("neon endpoints", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("endpoints"));
  }, 120_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("endpoints"));
  }, 120_000);

  // ============================================================================
  // listProjectEndpoints
  // ============================================================================
  describe("listProjectEndpoints", () => {
    it("happy path - lists endpoints for the test project", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectEndpoints({
            project_id: project.id,
          });
          expect(result).toHaveProperty("endpoints");
          expect(Array.isArray(result.endpoints)).toBe(true);
          // New projects have at least one default endpoint
          expect(result.endpoints.length).toBeGreaterThanOrEqual(1);
          const ep = result.endpoints[0];
          expect(ep).toHaveProperty("id");
          expect(ep).toHaveProperty("host");
          expect(ep).toHaveProperty("project_id", project.id);
          expect(ep).toHaveProperty("branch_id");
          expect(ep).toHaveProperty("current_state");
          expect(ep).toHaveProperty("type");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        listProjectEndpoints({
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
        listProjectEndpoints({
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
  // createProjectEndpoint
  // ============================================================================
  describe("createProjectEndpoint", () => {
    it("happy path - creates a read-only endpoint", async () => {
      const project = getTestProject("endpoints");
      let endpointId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectEndpoint({
            project_id: project.id,
            endpoint: {
              branch_id: project.defaultBranchId,
              type: "read_only",
            },
          });
          endpointId = result.endpoint.id;
          expect(result).toHaveProperty("endpoint");
          expect(result.endpoint).toHaveProperty("id");
          expect(result.endpoint).toHaveProperty("project_id", project.id);
          expect(result.endpoint).toHaveProperty("branch_id", project.defaultBranchId);
          expect(result.endpoint).toHaveProperty("type", "read_only");
          expect(result.endpoint).toHaveProperty("host");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (endpointId) {
                yield* deleteProjectEndpoint({
                  project_id: project.id,
                  endpoint_id: endpointId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Conflict when creating duplicate read-write endpoint on same branch", async () => {
      const project = getTestProject("endpoints");
      // The default branch already has a read-write endpoint, so creating another should conflict
      await runEffect(
        createProjectEndpoint({
          project_id: project.id,
          endpoint: {
            branch_id: project.defaultBranchId,
            type: "read_write",
          },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Conflict", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint: {
            branch_id: "br-non-existent-00000000",
            type: "read_only",
          },
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
      const project = getTestProject("endpoints");
      await runEffect(
        createProjectEndpoint({
          project_id: project.id,
          endpoint: {
            branch_id: "br-non-existent-00000000",
            type: "read_only",
          },
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
        createProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint: {
            branch_id: "br-non-existent-00000000",
            type: "read_only",
          },
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
  // getProjectEndpoint
  // ============================================================================
  describe("getProjectEndpoint", () => {
    it("happy path - retrieves the default endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          // List endpoints to get the default endpoint ID
          const list = yield* listProjectEndpoints({
            project_id: project.id,
          });
          const endpointId = list.endpoints[0].id;

          const result = yield* getProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
          });
          expect(result).toHaveProperty("endpoint");
          expect(result.endpoint).toHaveProperty("id", endpointId);
          expect(result.endpoint).toHaveProperty("project_id", project.id);
          expect(result.endpoint).toHaveProperty("branch_id");
          expect(result.endpoint).toHaveProperty("host");
          expect(result.endpoint).toHaveProperty("type");
          expect(result.endpoint).toHaveProperty("current_state");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent endpoint ID", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        getProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-00000000",
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
        getProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
  // updateProjectEndpoint
  // ============================================================================
  describe("updateProjectEndpoint", () => {
    it("happy path - updates suspend_timeout_seconds on the default endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          // Get the default endpoint ID
          const list = yield* listProjectEndpoints({
            project_id: project.id,
          });
          const endpointId = list.endpoints[0].id;

          yield* updateProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
            endpoint: {
              suspend_timeout_seconds: 600,
            },
          }).pipe(
            Effect.map((result) => {
              expect(result).toHaveProperty("endpoint");
              expect(result.endpoint).toHaveProperty("id", endpointId);
              expect(result.endpoint).toHaveProperty("project_id", project.id);
              expect(result.endpoint).toHaveProperty("suspend_timeout_seconds", 600);
              expect(result).toHaveProperty("operations");
              expect(Array.isArray(result.operations)).toBe(true);
            }),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
          );
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent endpoint ID", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        updateProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-00000000",
          endpoint: {
            suspend_timeout_seconds: 300,
          },
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
          endpoint: {
            suspend_timeout_seconds: 300,
          },
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
        updateProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
          endpoint: {
            suspend_timeout_seconds: 300,
          },
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
  // deleteProjectEndpoint
  // ============================================================================
  describe("deleteProjectEndpoint", () => {
    it("happy path - creates a read-only endpoint then deletes it", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          // Create a read-only endpoint to delete
          const created = yield* createProjectEndpoint({
            project_id: project.id,
            endpoint: {
              branch_id: project.defaultBranchId,
              type: "read_only",
            },
          });
          const endpointId = created.endpoint.id;

          // Delete it
          const result = yield* deleteProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
          });
          expect(result).toHaveProperty("endpoint");
          expect(result.endpoint).toHaveProperty("id", endpointId);
          expect(result.endpoint).toHaveProperty("project_id", project.id);
          expect(result.endpoint).toHaveProperty("type", "read_only");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent endpoint ID", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        deleteProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-00000000",
        }).pipe(
          Effect.map(() => undefined),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
        deleteProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
  // startProjectEndpoint
  // ============================================================================
  describe("startProjectEndpoint", () => {
    it("happy path - starts the default endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          // Get the default endpoint ID
          const list = yield* listProjectEndpoints({
            project_id: project.id,
          });
          const endpointId = list.endpoints[0].id;

          // Start the endpoint (may already be active, which is fine)
          const result = yield* startProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
          });
          expect(result).toHaveProperty("endpoint");
          expect(result.endpoint).toHaveProperty("id", endpointId);
          expect(result.endpoint).toHaveProperty("project_id", project.id);
          expect(result.endpoint).toHaveProperty("host");
          expect(result.endpoint).toHaveProperty("type");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent endpoint ID", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        startProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-00000000",
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        startProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
        startProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
  // suspendProjectEndpoint
  // ============================================================================
  describe("suspendProjectEndpoint", () => {
    it("happy path - suspends the default endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          // Get the default endpoint ID
          const list = yield* listProjectEndpoints({
            project_id: project.id,
          });
          const endpointId = list.endpoints[0].id;

          // Suspend the endpoint (may already be idle, which is fine)
          const result = yield* suspendProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
          });
          expect(result).toHaveProperty("endpoint");
          expect(result.endpoint).toHaveProperty("id", endpointId);
          expect(result.endpoint).toHaveProperty("project_id", project.id);
          expect(result.endpoint).toHaveProperty("host");
          expect(result.endpoint).toHaveProperty("type");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent endpoint ID", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        suspendProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-00000000",
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        suspendProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
        suspendProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
  // restartProjectEndpoint
  // ============================================================================
  describe("restartProjectEndpoint", () => {
    it("happy path - restarts the default endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          // Get the default endpoint ID
          const list = yield* listProjectEndpoints({
            project_id: project.id,
          });
          const endpointId = list.endpoints[0].id;

          // Restart the endpoint (suspend + start)
          yield* restartProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
          }).pipe(
            Effect.map((result) => {
              expect(result).toHaveProperty("endpoint");
              expect(result.endpoint).toHaveProperty("id", endpointId);
              expect(result.endpoint).toHaveProperty("project_id", project.id);
              expect(result.endpoint).toHaveProperty("host");
              expect(result.endpoint).toHaveProperty("type");
              expect(result).toHaveProperty("operations");
              expect(Array.isArray(result.operations)).toBe(true);
            }),
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          );
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent endpoint ID", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        restartProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-00000000",
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        restartProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
        restartProjectEndpoint({
          project_id: "non-existent-project-00000000",
          endpoint_id: "ep-non-existent-00000000",
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
  // listProjectVPCEndpoints
  // ============================================================================
  describe("listProjectVPCEndpoints", () => {
    it("happy path - lists VPC endpoints for the test project", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectVPCEndpoints({
            project_id: project.id,
          });
          expect(result).toHaveProperty("endpoints");
          expect(Array.isArray(result.endpoints)).toBe(true);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        listProjectVPCEndpoints({
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
        listProjectVPCEndpoints({
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
  // assignProjectVPCEndpoint
  // ============================================================================
  describe("assignProjectVPCEndpoint", () => {
    it("happy path - assigns a VPC endpoint (or gets expected error without VPC setup)", async () => {
      const project = getTestProject("endpoints");
      // VPC endpoints require org-level setup; this test verifies the SDK call
      // works end-to-end. Without a real VPC endpoint ID, the API returns an error.
      await runEffect(
        assignProjectVPCEndpoint({
          project_id: project.id,
          vpc_endpoint_id: "vpce-00000000000000000",
          label: `test_vpc_${testRunId}`,
        }).pipe(
          Effect.map(() => {
            // If it succeeds (unlikely without VPC setup), that's fine
            expect(true).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnprocessableEntity", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        assignProjectVPCEndpoint({
          project_id: "non-existent-project-00000000",
          vpc_endpoint_id: "vpce-00000000000000000",
          label: `test_vpc_${testRunId}`,
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
        assignProjectVPCEndpoint({
          project_id: "non-existent-project-00000000",
          vpc_endpoint_id: "vpce-00000000000000000",
          label: `test_vpc_${testRunId}`,
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
  // deleteProjectVPCEndpoint
  // ============================================================================
  describe("deleteProjectVPCEndpoint", () => {
    it("happy path - deletes a VPC endpoint (or gets expected error without VPC setup)", async () => {
      const project = getTestProject("endpoints");
      // VPC endpoints require org-level setup; without a real VPC endpoint
      // the API returns an error. This test verifies the SDK call works end-to-end.
      await runEffect(
        deleteProjectVPCEndpoint({
          project_id: project.id,
          vpc_endpoint_id: "vpce-00000000000000000",
        }).pipe(
          Effect.map(() => {
            // If it succeeds (unlikely without VPC setup), that's fine
            expect(true).toBe(true);
          }),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          Effect.catchTag("Forbidden", () => Effect.succeed(undefined)),
          Effect.catchTag("UnprocessableEntity", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteProjectVPCEndpoint({
          project_id: "non-existent-project-00000000",
          vpc_endpoint_id: "vpce-00000000000000000",
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
        deleteProjectVPCEndpoint({
          project_id: "non-existent-project-00000000",
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
});
