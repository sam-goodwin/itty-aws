import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { bucketCreate } from "../src/operations/bucketCreate.ts";
import { bucketS3Credentials } from "../src/operations/bucketS3Credentials.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("bucketS3Credentials", () => {
  it("happy path - returns array of S3 credentials for a created bucket", async () => {
    const project = await getSharedProject();

    await runEffect(
      Effect.gen(function* () {
        const bucket = yield* bucketCreate({
          input: {
            projectId: project.id,
            environmentId: project.baseEnvironmentId,
            name: `bkt-s3-${testRunId}`,
          },
        });

        const creds = yield* bucketS3Credentials({
          bucketId: bucket.id,
          environmentId: project.baseEnvironmentId,
          projectId: project.id,
        });

        expect(Array.isArray(creds)).toBe(true);
        for (const c of creds) {
          expect(typeof c.accessKeyId).toBe("string");
          expect(typeof c.bucketName).toBe("string");
          expect(typeof c.endpoint).toBe("string");
          expect(typeof c.region).toBe("string");
          expect(typeof c.secretAccessKey).toBe("string");
          expect(typeof c.urlStyle).toBe("string");
          expect(typeof c.createdAt).toBe("string");
        }
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      bucketS3Credentials({
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

  it("error - non-existent bucket id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      bucketS3Credentials({
        bucketId: NON_EXISTENT_UUID,
        environmentId: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
