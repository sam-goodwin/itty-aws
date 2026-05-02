import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { domains } from "../src/operations/domains.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("domains", () => {
  it("happy path - returns custom and service domains for a service instance", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const tokenInfo = yield* apiToken({});
        const workspace = tokenInfo.workspaces[0];
        expect(workspace).toBeDefined();
        const workspaceId = workspace!.id;

        const projectsPage = yield* projects({
          workspaceId,
          first: 25,
          orderBy: "UPDATED_AT_DESC",
        });

        let projectId: string | null = null;
        let environmentId: string | null = null;
        let serviceId: string | null = null;
        for (const projectEdge of projectsPage.edges) {
          const deploysPage = yield* deployments({
            first: 5,
            input: { projectId: projectEdge.node.id },
          });
          const node = deploysPage.edges.find((e) => e.node.serviceId);
          if (node) {
            projectId = node.node.projectId;
            environmentId = node.node.environmentId;
            serviceId = node.node.serviceId!;
            break;
          }
        }

        expect(projectId).not.toBeNull();
        expect(environmentId).not.toBeNull();
        expect(serviceId).not.toBeNull();

        const domainsResult = yield* domains({
          projectId: projectId!,
          environmentId: environmentId!,
          serviceId: serviceId!,
        });

        expect(Array.isArray(domainsResult.customDomains)).toBe(true);
        expect(Array.isArray(domainsResult.serviceDomains)).toBe(true);

        for (const cd of domainsResult.customDomains) {
          expect(typeof cd.id).toBe("string");
          expect(typeof cd.domain).toBe("string");
          expect(typeof cd.environmentId).toBe("string");
          expect(typeof cd.serviceId).toBe("string");
          expect(typeof cd.status.verified).toBe("boolean");
          expect(typeof cd.cnameCheck.message).toBe("string");
        }
        for (const sd of domainsResult.serviceDomains) {
          expect(typeof sd.id).toBe("string");
          expect(typeof sd.domain).toBe("string");
          expect(typeof sd.environmentId).toBe("string");
          expect(typeof sd.serviceId).toBe("string");
        }
        return domainsResult;
      }),
    );

    expect(result).toBeDefined();
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      domains({
        projectId: NON_EXISTENT_UUID,
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for non-existent project/environment/service", async () => {
    const error = await runEffect(
      domains({
        projectId: NON_EXISTENT_UUID,
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
