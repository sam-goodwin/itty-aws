import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { bucketCreate } from "../src/operations/bucketCreate.ts";
import { bucketCredentialsReset } from "../src/operations/bucketCredentialsReset.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;
const bucketName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("bucketCredentialsReset", () => {
  it("happy path - resets credentials for a freshly created bucket", async () => {
    const projName = projectName("bkt-creds-reset");
    const bktName = bucketName("bkt");

    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projName },
        });
        return yield* Effect.gen(function* () {
          const environmentId = project.primaryEnvironmentId;
          if (!environmentId) {
            throw new Error(
              "test setup: created project has no primaryEnvironmentId",
            );
          }

          const bucket = yield* bucketCreate({
            input: { projectId: project.id, name: bktName },
          });

          const creds = yield* bucketCredentialsReset({
            bucketId: bucket.id,
            environmentId,
            projectId: project.id,
          });

          expect(typeof creds.accessKeyId).toBe("string");
          expect(creds.accessKeyId.length).toBeGreaterThan(0);
          expect(typeof creds.bucketName).toBe("string");
          expect(creds.bucketName.length).toBeGreaterThan(0);
          expect(typeof creds.createdAt).toBe("string");
          expect(typeof creds.endpoint).toBe("string");
          expect(creds.endpoint.length).toBeGreaterThan(0);
          expect(typeof creds.region).toBe("string");
          expect(typeof creds.secretAccessKey).toBe("string");
          expect(creds.secretAccessKey.length).toBeGreaterThan(0);
          expect(typeof creds.urlStyle).toBe("string");
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
      bucketCredentialsReset({
        bucketId: NON_EXISTENT_UUID,
        environmentId: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent bucket/environment/project ids surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      bucketCredentialsReset({
        bucketId: NON_EXISTENT_UUID,
        environmentId: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
