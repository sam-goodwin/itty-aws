import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  runEffect,
  testRunId,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { createProjectEndpoint } from "../src/operations/createProjectEndpoint";
import { getProjectEndpoint } from "../src/operations/getProjectEndpoint";
import { updateProjectEndpoint } from "../src/operations/updateProjectEndpoint";
import { deleteProjectEndpoint } from "../src/operations/deleteProjectEndpoint";
import { listProjectEndpoints } from "../src/operations/listProjectEndpoints";
import { listProjectBranchEndpoints } from "../src/operations/listProjectBranchEndpoints";
import { startProjectEndpoint } from "../src/operations/startProjectEndpoint";
import { suspendProjectEndpoint } from "../src/operations/suspendProjectEndpoint";
import { restartProjectEndpoint } from "../src/operations/restartProjectEndpoint";

describe("Endpoints", () => {
  beforeAll(async () => {
    await runEffect(setupTestProject("endpoints"));
  }, 120_000);

  afterAll(async () => {
    await runEffect(teardownTestProject("endpoints"));
  }, 60_000);

  describe("createProjectEndpoint", () => {
    it("happy path - creates an endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectEndpoint({
            project_id: project.id,
            endpoint: {
              branch_id: project.defaultBranchId,
              type: "read_only",
            },
          });
          expect(result.endpoint).toBeDefined();
          expect(result.endpoint.id).toBeDefined();
          expect(result.endpoint.branch_id).toBe(project.defaultBranchId);
          // Cleanup
          yield* deleteProjectEndpoint({
            project_id: project.id,
            endpoint_id: result.endpoint.id,
          }).pipe(Effect.ignore);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        createProjectEndpoint({
          project_id: "non-existent-project-id",
          endpoint: {
            branch_id: "br-non-existent-000000",
            type: "read_only",
          },
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("getProjectEndpoint", () => {
    it("happy path - retrieves endpoint details", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const endpoints = yield* listProjectEndpoints({
            project_id: project.id,
          });
          expect(endpoints.endpoints.length).toBeGreaterThan(0);
          const endpointId = endpoints.endpoints[0].id;
          const result = yield* getProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
          });
          expect(result.endpoint.id).toBe(endpointId);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        getProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateProjectEndpoint", () => {
    it("happy path - updates endpoint settings", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const endpoints = yield* listProjectEndpoints({
            project_id: project.id,
          });
          const endpointId = endpoints.endpoints[0].id;
          const result = yield* updateProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
            endpoint: {
              pooler_enabled: true,
            },
          });
          expect(result.endpoint.id).toBe(endpointId);
          expect(result.endpoint.pooler_enabled).toBe(true);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        updateProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-000000",
          endpoint: { suspend_timeout_seconds: 600 },
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("deleteProjectEndpoint", () => {
    it("happy path - deletes an endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProjectEndpoint({
            project_id: project.id,
            endpoint: {
              branch_id: project.defaultBranchId,
              type: "read_only",
            },
          });
          const result = yield* deleteProjectEndpoint({
            project_id: project.id,
            endpoint_id: created.endpoint.id,
          });
          expect(result.endpoint.id).toBe(created.endpoint.id);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        deleteProjectEndpoint({
          project_id: "non-existent-project-id",
          endpoint_id: "ep-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listProjectEndpoints", () => {
    it("happy path - lists endpoints", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectEndpoints({
            project_id: project.id,
          });
          expect(result.endpoints).toBeDefined();
          expect(result.endpoints.length).toBeGreaterThan(0);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        listProjectEndpoints({
          project_id: "non-existent-project-id",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listProjectBranchEndpoints", () => {
    it("happy path - lists branch endpoints", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranchEndpoints({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          expect(result.endpoints).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        listProjectBranchEndpoints({
          project_id: project.id,
          branch_id: "br-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("startProjectEndpoint", () => {
    it("happy path - starts an endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const endpoints = yield* listProjectEndpoints({
            project_id: project.id,
          });
          const endpointId = endpoints.endpoints[0].id;
          const result = yield* startProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
          });
          expect(result.endpoint.id).toBe(endpointId);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        startProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("suspendProjectEndpoint", () => {
    it("happy path - suspends an endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        Effect.gen(function* () {
          const endpoints = yield* listProjectEndpoints({
            project_id: project.id,
          });
          const endpointId = endpoints.endpoints[0].id;
          const result = yield* suspendProjectEndpoint({
            project_id: project.id,
            endpoint_id: endpointId,
          });
          expect(result.endpoint.id).toBe(endpointId);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        suspendProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("restartProjectEndpoint", () => {
    it("error - NotFound for non-existent endpoint", async () => {
      const project = getTestProject("endpoints");
      await runEffect(
        restartProjectEndpoint({
          project_id: project.id,
          endpoint_id: "ep-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
