import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { templateDelete } from "../src/operations/templateDelete.ts";
import { templateGenerate } from "../src/operations/templateGenerate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("templateGenerate", () => {
  it("happy path - generates a template from a freshly created project", async () => {
    const projectName = `distilled-railway-tg-${testRunId}`;
    const serviceName = `distilled-railway-tg-svc-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled template generate test",
          },
        });
        return yield* Effect.gen(function* () {
          yield* serviceCreate({
            input: {
              projectId: project.id,
              name: serviceName,
              source: { image: "nginx:latest" },
            },
          });
          const template = yield* templateGenerate({
            input: { projectId: project.id },
          });
          return yield* Effect.gen(function* () {
            expect(typeof template.id).toBe("string");
            expect(template.id).toBeTruthy();
            expect(typeof template.code).toBe("string");
            expect(template.code).toBeTruthy();
            expect(["HIDDEN", "PUBLISHED", "UNPUBLISHED"]).toContain(
              template.status,
            );
          }).pipe(
            Effect.ensuring(
              templateDelete({ id: template.id, input: {} }).pipe(
                Effect.ignore,
              ),
            ),
          );
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
      templateGenerate({
        input: { projectId: NON_EXISTENT_UUID },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      templateGenerate({
        input: { projectId: "" },
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
