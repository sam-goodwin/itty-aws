import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { templateSourceForProject } from "../src/operations/templateSourceForProject.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("templateSourceForProject", () => {
  it("happy path - returns template source (or null) for a real project", async () => {
    const projectName = `distilled-railway-template-source-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({ input: { name: projectName } });
        return yield* Effect.gen(function* () {
          const result = yield* templateSourceForProject({
            projectId: project.id,
          });

          // A freshly created project (without a template) returns null.
          if (result === null) {
            expect(result).toBeNull();
          } else {
            expect(typeof result.id).toBe("string");
            expect(typeof result.code).toBe("string");
            expect(typeof result.name).toBe("string");
            expect(typeof result.createdAt).toBe("string");
            expect(typeof result.activeProjects).toBe("number");
            expect(typeof result.projects).toBe("number");
            expect(typeof result.recentProjects).toBe("number");
            expect(typeof result.totalPayout).toBe("number");
            expect(typeof result.isApproved).toBe("boolean");
            expect(typeof result.isV2Template).toBe("boolean");
            expect(typeof result.isVerified).toBe("boolean");
            expect(["HIDDEN", "PUBLISHED", "UNPUBLISHED"]).toContain(
              result.status,
            );
            expect(Array.isArray(result.similarTemplates)).toBe(true);
          }
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      templateSourceForProject({ projectId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent project id", async () => {
    const error = await runEffect(
      templateSourceForProject({ projectId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
      ),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
