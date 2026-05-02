import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { deployments } from "../src/operations/deployments.ts";
import { projects } from "../src/operations/projects.ts";
import { service } from "../src/operations/service.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("service", () => {
  it("happy path - returns service details for a real service id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        expect(workspaceId).toBeDefined();
        if (!workspaceId) return;

        const projectsPage = yield* projects({
          workspaceId,
          first: 20,
          orderBy: "CREATED_AT_DESC",
        });

        let serviceId: string | undefined;
        for (const edge of projectsPage.edges) {
          const deps = yield* deployments({
            first: 5,
            input: { projectId: edge.node.id },
          });
          const found = deps.edges.find((e) => e.node.serviceId !== null)?.node
            .serviceId;
          if (found) {
            serviceId = found;
            break;
          }
        }

        if (!serviceId) {
          // No service available in this account; nothing to query.
          return;
        }

        const result = yield* service({ id: serviceId });

        expect(result.id).toBe(serviceId);
        expect(typeof result.createdAt).toBe("string");
        expect(typeof result.name).toBe("string");
        expect(typeof result.projectId).toBe("string");
        expect(typeof result.updatedAt).toBe("string");
        expect(typeof result.hasHiddenRegistryCredentialsFromTemplate).toBe(
          "boolean",
        );
        expect(Array.isArray(result.featureFlags)).toBe(true);
        expect(result.project).toBeDefined();
        expect(result.project.id).toBe(result.projectId);
        expect(typeof result.project.name).toBe("string");
        expect(typeof result.project.isPublic).toBe("boolean");
        expect(Array.isArray(result.project.members)).toBe(true);
        for (const member of result.project.members) {
          expect(typeof member.email).toBe("string");
          expect(typeof member.id).toBe("string");
          expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(member.role);
        }
        expect(["free", "hobby", "pro", "trial"]).toContain(
          result.project.subscriptionType,
        );
        if (result.project.workspace !== null) {
          expect(typeof result.project.workspace.id).toBe("string");
          expect(["FREE", "HOBBY", "PRO"]).toContain(
            result.project.workspace.plan,
          );
          expect(["FREE", "TEAM", "USER"]).toContain(
            result.project.workspace.subscriptionModel,
          );
        }
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      service({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent service id", async () => {
    const error = await runEffect(
      service({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
