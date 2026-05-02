import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { resourceAccess } from "../src/operations/resourceAccess.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("resourceAccess", () => {
  it("happy path - returns resource access for authenticated workspace", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const token = yield* apiToken({});
        const workspaceId = token!.workspace.id;
        return yield* resourceAccess({
          explicitResourceOwner: { id: workspaceId, type: "WORKSPACE" },
        });
      }),
    );

    expect(result).toBeDefined();
    expect(result.deployment).toBeDefined();
    expect(result.project).toBeDefined();
    if (result.deployment.disallowed !== null) {
      expect(typeof result.deployment.disallowed).toBe("string");
    }
    if (result.project.disallowed !== null) {
      expect(typeof result.project.disallowed).toBe("string");
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      resourceAccess({
        explicitResourceOwner: { id: NON_EXISTENT_UUID, type: "WORKSPACE" },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent workspace id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      resourceAccess({
        explicitResourceOwner: { id: NON_EXISTENT_UUID, type: "WORKSPACE" },
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
