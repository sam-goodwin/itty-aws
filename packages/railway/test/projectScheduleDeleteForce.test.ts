import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectScheduleDelete } from "../src/operations/projectScheduleDelete.ts";
import { projectScheduleDeleteForce } from "../src/operations/projectScheduleDeleteForce.ts";
import { getSharedProject, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectScheduleDeleteForce", () => {
  it("happy path - force-deletes a freshly scheduled-for-deletion project", async () => {
    const project = await getSharedProject();

    await runEffect(
      Effect.gen(function* () {
        yield* projectScheduleDelete({ id: project.id });
        const result = yield* projectScheduleDeleteForce({ id: project.id });
        expect(result).toBe(true);
      }),
    );
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectScheduleDeleteForce({
        id: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent project id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectScheduleDeleteForce({
        id: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
