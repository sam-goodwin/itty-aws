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

describe("customDomainDelete", () => {
  it("happy path - deletes a freshly created custom domain and returns true", async () => {
    const domain = domainName("cd-del-happy");

    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        if (!workspaceId) {
          throw new Error("test setup: authenticated token has no workspaces");
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

        const created = yield* customDomainCreate({
          input: { domain, environmentId, projectId, serviceId },
        });

        // Best-effort cleanup if the assertion fails
        return yield* Effect.gen(function* () {
          const result = yield* customDomainDelete({ id: created.id });
          expect(result).toBe(true);
        }).pipe(
          Effect.ensuring(
            customDomainDelete({ id: created.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      customDomainDelete({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent custom domain id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      customDomainDelete({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
