import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectUpdate } from "../src/operations/projectUpdate.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectUpdate", () => {
  it("happy path - updates a freshly created project's description", async () => {
    const project = await getSharedProject();

    const updatedDescription = `distilled updated description ${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const updated = yield* projectUpdate({
          id: project.id,
          input: {
            description: updatedDescription,
          },
        });
        expect(updated.id).toBe(project.id);
        expect(updated.description).toBe(updatedDescription);
      }),
    );
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          description: `distilled-railway-pu-unauth-${testRunId}`,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent project id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          description: `distilled-railway-pu-nf-${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty project id", async () => {
    const error = await runEffect(
      projectUpdate({
        id: "",
        input: {
          description: `distilled-railway-pu-inv-${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
