import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { serviceDomainCreate } from "../src/operations/serviceDomainCreate.ts";
import { serviceDomainDelete } from "../src/operations/serviceDomainDelete.ts";
import { serviceDomainUpdate } from "../src/operations/serviceDomainUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceDomainUpdate", () => {
  it("happy path - updates the targetPort of a freshly created service domain", async () => {
    void testRunId;
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
        let environmentId: string | undefined;
        let serviceId: string | undefined;
        for (const p of projList.edges) {
          const dep = yield* deployments({
            first: 1,
            input: { projectId: p.node.id },
          });
          const node = dep.edges[0]?.node;
          if (node && node.serviceId && node.environmentId) {
            environmentId = node.environmentId;
            serviceId = node.serviceId;
            break;
          }
        }
        if (!environmentId || !serviceId) {
          throw new Error(
            "test setup: no project with a deployed service found for the workspace",
          );
        }

        const created = yield* serviceDomainCreate({
          input: { environmentId, serviceId },
        });
        return yield* Effect.gen(function* () {
          const result = yield* serviceDomainUpdate({
            input: {
              domain: created.domain,
              environmentId,
              serviceDomainId: created.id,
              serviceId,
              targetPort: 8080,
            },
          });
          expect(result).toBe(true);
        }).pipe(
          Effect.ensuring(
            serviceDomainDelete({ id: created.id }).pipe(Effect.ignore),
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
      serviceDomainUpdate({
        input: {
          domain: `distilled-railway-sdu-${testRunId}.up.railway.app`,
          environmentId: NON_EXISTENT_UUID,
          serviceDomainId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent service domain id", async () => {
    const error = await runEffect(
      serviceDomainUpdate({
        input: {
          domain: `distilled-railway-sdu-nf-${testRunId}.up.railway.app`,
          environmentId: NON_EXISTENT_UUID,
          serviceDomainId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty serviceDomainId", async () => {
    const error = await runEffect(
      serviceDomainUpdate({
        input: {
          domain: `distilled-railway-sdu-inv-${testRunId}.up.railway.app`,
          environmentId: NON_EXISTENT_UUID,
          serviceDomainId: "",
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
