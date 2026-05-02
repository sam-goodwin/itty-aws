import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { serviceRemoveUpstreamUrl } from "../src/operations/serviceRemoveUpstreamUrl.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceRemoveUpstreamUrl", () => {
  it("happy path - removes upstream url from a freshly created image-source service", async () => {
    const projectName = `distilled-railway-sruu-${testRunId}`;
    const serviceName = `distilled-railway-sruu-svc-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled service remove upstream url test",
          },
        });
        return yield* Effect.gen(function* () {
          const service = yield* serviceCreate({
            input: {
              projectId: project.id,
              name: serviceName,
              source: { image: "nginx:latest" },
            },
          });
          const updated = yield* serviceRemoveUpstreamUrl({
            id: service.id,
          });
          expect(updated.id).toBe(service.id);
          expect(updated.projectId).toBe(project.id);
          expect(updated.name).toBe(serviceName);
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
      serviceRemoveUpstreamUrl({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent service id", async () => {
    const error = await runEffect(
      serviceRemoveUpstreamUrl({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
