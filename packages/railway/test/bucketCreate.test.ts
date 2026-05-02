import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { bucketCreate } from "../src/operations/bucketCreate.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;
const bucketName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("bucketCreate", () => {
  it("happy path - creates a bucket in a freshly provisioned project", async () => {
    const projName = projectName("bucket-create");
    const bktName = bucketName("bkt");

    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projName },
        });
        return yield* Effect.gen(function* () {
          const result = yield* bucketCreate({
            input: { projectId: project.id, name: bktName },
          });

          expect(typeof result.id).toBe("string");
          expect(result.name).toBe(bktName);
          expect(result.projectId).toBe(project.id);
          expect(typeof result.createdAt).toBe("string");
          expect(typeof result.updatedAt).toBe("string");

          // project nested struct
          expect(result.project.id).toBe(project.id);
          expect(result.project.name).toBe(projName);
          expect(["free", "hobby", "pro", "trial"]).toContain(
            result.project.subscriptionType,
          );
          for (const m of result.project.members) {
            expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(m.role);
          }
          if (result.project.workspace !== null) {
            expect(["FREE", "HOBBY", "PRO"]).toContain(
              result.project.workspace.plan,
            );
            expect(["FREE", "TEAM", "USER"]).toContain(
              result.project.workspace.subscriptionModel,
            );
          }
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
      bucketCreate({
        input: {
          projectId: NON_EXISTENT_UUID,
          name: bucketName("bkt-unauth"),
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
      bucketCreate({
        input: { projectId: "", name: bucketName("bkt-invalid") },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
