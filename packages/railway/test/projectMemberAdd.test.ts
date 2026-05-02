import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectMemberAdd } from "../src/operations/projectMemberAdd.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectMemberAdd", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referenced project/user does not exist",
    async () => {
      // Adding a real project member requires an existing workspace
      // member as the userId; provisioning a second user account just to
      // add them is not feasible with a single-token test run. Exercise
      // the API with fabricated ids and assert the typed
      // RailwayInvalidInput instead.
      const error = await runEffect(
        projectMemberAdd({
          input: {
            projectId: NON_EXISTENT_UUID,
            role: "MEMBER",
            userId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        projectMemberAdd({
          input: {
            projectId: NON_EXISTENT_UUID,
            role: "MEMBER",
            userId: NON_EXISTENT_UUID,
          },
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
    "error - RailwayInvalidInput for an empty projectId",
    async () => {
      const error = await runEffect(
        projectMemberAdd({
          input: {
            projectId: "",
            role: "MEMBER",
            userId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
