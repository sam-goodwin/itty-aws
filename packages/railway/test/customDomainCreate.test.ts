import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { customDomainCreate } from "../src/operations/customDomainCreate.ts";
import { customDomainDelete } from "../src/operations/customDomainDelete.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const domainName = (label: string) =>
  `distilled-railway-${label}-${testRunId}.example.com`;

describe("customDomainCreate", () => {
  it(
    "happy path - creates a custom domain on a discovered service",
    async () => {
      const domain = domainName("cd-happy");

      await runEffect(
        Effect.gen(function* () {
          const me = yield* apiToken({});
          const workspaceId = me.workspaces[0]?.id;
          if (!workspaceId) {
            throw new Error(
              "test setup: authenticated token has no workspaces",
            );
          }
          const projList = yield* projects({
            workspaceId,
            first: 25,
            orderBy: "CREATED_AT_DESC",
          });
          let projectId: string | undefined;
          let environmentId: string | undefined;
          let serviceId: string | undefined;
          for (const p of projList.edges) {
            const dep = yield* deployments({
              first: 1,
              input: { projectId: p.node.id },
            });
            const node = dep.edges[0]?.node;
            if (node && node.serviceId && node.environmentId) {
              projectId = node.projectId;
              environmentId = node.environmentId;
              serviceId = node.serviceId;
              break;
            }
          }
          if (!projectId || !environmentId || !serviceId) {
            throw new Error(
              "test setup: no project with a deployed service found for the workspace",
            );
          }

          return yield* Effect.gen(function* () {
            const created = yield* customDomainCreate({
              input: { domain, environmentId, projectId, serviceId },
            });

            expect(typeof created.id).toBe("string");
            expect(created.domain).toBe(domain);
            expect(created.environmentId).toBe(environmentId);
            expect(created.serviceId).toBe(serviceId);
            if (created.projectId !== null) {
              expect(created.projectId).toBe(projectId);
            }

            expect([
              "ACTIVE",
              "CREATING",
              "DELETED",
              "DELETING",
              "UNSPECIFIED",
              "UPDATING",
            ]).toContain(created.syncStatus);

            expect(["ERROR", "INFO", "INVALID", "VALID", "WAITING"]).toContain(
              created.cnameCheck.status,
            );
            expect(typeof created.cnameCheck.message).toBe("string");

            expect([
              "CERTIFICATE_STATUS_TYPE_ISSUE_FAILED",
              "CERTIFICATE_STATUS_TYPE_ISSUING",
              "CERTIFICATE_STATUS_TYPE_UNSPECIFIED",
              "CERTIFICATE_STATUS_TYPE_VALID",
              "CERTIFICATE_STATUS_TYPE_VALIDATING_OWNERSHIP",
              "UNRECOGNIZED",
            ]).toContain(created.status.certificateStatus);
            expect(typeof created.status.verified).toBe("boolean");
            expect(Array.isArray(created.status.dnsRecords)).toBe(true);

            return yield* Effect.succeed(created.id);
          }).pipe(
            Effect.tap((id) =>
              customDomainDelete({ id }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    120_000,
  );

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      customDomainCreate({
        input: {
          domain: domainName("cd-unauth"),
          environmentId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty domain", async () => {
    const error = await runEffect(
      customDomainCreate({
        input: {
          domain: "",
          environmentId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
