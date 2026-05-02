import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectTransferConfirm } from "../src/operations/projectTransferConfirm.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectTransferConfirm", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the referenced ownership transfer does not exist", async () => {
    // Confirming a real project transfer requires a pre-existing
    // pending ownershipTransferId for a project the test account is
    // the recipient of, plus a destination workspace owned by that
    // account. Provisioning two workspaces and an in-flight transfer
    // is not feasible with a single-token test run, and confirming
    // would move the project away from the test account. Exercise the
    // API with fabricated ids and assert the typed RailwayNotFound
    // instead.
    const error = await runEffect(
      projectTransferConfirm({
        input: {
          ownershipTransferId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectTransferConfirm({
        input: {
          ownershipTransferId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent ownershipTransferId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectTransferConfirm({
        input: {
          ownershipTransferId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
