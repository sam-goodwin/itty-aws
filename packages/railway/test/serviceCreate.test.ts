import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("serviceCreate", () => {
  it("happy path - creates a service inside a freshly created project", async () => {
    const projectName = `distilled-railway-sc-${testRunId}`;
    const serviceName = `distilled-railway-sc-svc-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled service create test project",
          },
        });
        return yield* Effect.gen(function* () {
          const service = yield* serviceCreate({
            input: {
              projectId: project.id,
              name: serviceName,
              source: {
                image: "nginx:latest",
              },
            },
          });
          expect(service.id).toBeTruthy();
          expect(service.name).toBe(serviceName);
          expect(service.projectId).toBe(project.id);
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
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
      serviceCreate({
        input: {
          projectId: "00000000-0000-0000-0000-000000000000",
          name: `distilled-railway-sc-unauth-${testRunId}`,
          source: {
            image: "nginx:latest",
          },
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      serviceCreate({
        input: {
          projectId: "",
          name: `distilled-railway-sc-inv-${testRunId}`,
          source: {
            image: "nginx:latest",
          },
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
