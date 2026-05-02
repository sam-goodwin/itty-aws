import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { serviceDelete } from "../src/operations/serviceDelete.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

describe("serviceCreate", () => {
  it("happy path - creates and tears down a service inside the shared project", async () => {
    const project = await getSharedProject();
    const serviceName = `distilled-railway-sc-svc-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const service = yield* serviceCreate({
          input: {
            projectId: project.id,
            name: serviceName,
            source: { image: "nginx:latest" },
          },
        });

        return yield* Effect.gen(function* () {
          expect(service.id).toBeTruthy();
          expect(service.name).toBe(serviceName);
          expect(service.projectId).toBe(project.id);
        }).pipe(
          Effect.ensuring(
            serviceDelete({ id: service.id }).pipe(Effect.ignore),
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
          source: { image: "nginx:latest" },
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      serviceCreate({
        input: {
          projectId: "",
          name: `distilled-railway-sc-inv-${testRunId}`,
          source: { image: "nginx:latest" },
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
