import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { serviceDelete } from "../src/operations/serviceDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("serviceDelete", () => {
  it("happy path - deletes a service that was just created", async () => {
    const projectName = `distilled-railway-sd-${testRunId}`;
    const serviceName = `distilled-railway-sd-svc-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled service delete test project",
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
          const result = yield* serviceDelete({ id: service.id });
          expect(result).toBe(true);
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
      serviceDelete({ id: "00000000-0000-0000-0000-000000000000" }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent service id", async () => {
    const error = await runEffect(
      serviceDelete({ id: "00000000-0000-0000-0000-000000000000" }).pipe(
        Effect.flip,
      ),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
