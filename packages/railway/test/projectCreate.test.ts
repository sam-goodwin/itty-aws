import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { retryUntilSuccess, runEffect, testRunId } from "./setup.ts";

describe("projectCreate", () => {
  it(
    "happy path - creates a project, exercises lifecycle, deletes it",
    async () => {
      const projectName = `distilled-railway-pc-${testRunId}`;

      // projectCreate is hard-quota'd at one project / 30s / user, and the
      // shared setup already created one earlier in the suite. Wrap in
      // retryUntilSuccess so we ride out the quota window.
      const project = await runEffect(
        retryUntilSuccess(
          projectCreate({
            input: {
              name: projectName,
              description: "distilled test project",
            },
          }),
        ),
      );
      try {
        expect(project.id).toBeTruthy();
        expect(project.name).toBe(projectName);
        expect(project.description).toBe("distilled test project");
      } finally {
        await runEffect(projectDelete({ id: project.id }).pipe(Effect.ignore));
      }
    },
    180_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        projectCreate({
          input: { name: `distilled-railway-pc-unauth-${testRunId}` },
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput when repo fields are empty",
    async () => {
      const error = await runEffect(
        projectCreate({
          input: {
            name: `distilled-railway-pc-inv-${testRunId}`,
            repo: { branch: "", fullRepoName: "" },
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
