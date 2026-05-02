import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("projectCreate", () => {
  it("happy path - creates a project and returns the new project record", async () => {
    const projectName = `distilled-railway-pc-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled test project",
          },
        });
        expect(project.id).toBeTruthy();
        expect(project.name).toBe(projectName);
        expect(project.description).toBe("distilled test project");
        return project;
      }).pipe(
        Effect.flatMap((project) =>
          projectDelete({ id: project.id }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectCreate({
        input: {
          name: `distilled-railway-pc-unauth-${testRunId}`,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput when repo fields are empty", async () => {
    const error = await runEffect(
      projectCreate({
        input: {
          name: `distilled-railway-pc-inv-${testRunId}`,
          repo: {
            branch: "",
            fullRepoName: "",
          },
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
