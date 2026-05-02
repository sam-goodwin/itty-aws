import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { githubRepoUpdate } from "../src/operations/githubRepoUpdate.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("githubRepoUpdate", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced project/service/environment do not exist",
    async () => {
      // Updating a GitHub repo through a linked template requires a service
      // already deployed from a template-linked github repository, which
      // depends on an OAuth-linked GitHub account and is not available in
      // the shared test environment. Exercise the API with fabricated ids
      // and assert the typed RailwayNotFound instead.
      const error = await runEffect(
        githubRepoUpdate({
          input: {
            environmentId: NON_EXISTENT_UUID,
            projectId: NON_EXISTENT_UUID,
            serviceId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    60_000,
  );

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      githubRepoUpdate({
        input: {
          environmentId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotFound for a non-existent project/service/environment", async () => {
    const error = await runEffect(
      githubRepoUpdate({
        input: {
          environmentId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      githubRepoUpdate({
        input: {
          environmentId: NON_EXISTENT_UUID,
          projectId: "",
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
