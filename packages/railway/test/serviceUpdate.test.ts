import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { serviceUpdate } from "../src/operations/serviceUpdate.ts";
import { getSharedService, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceUpdate", () => {
  it("happy path - renames the shared service and restores the original name", async () => {
    const service = await getSharedService();
    const renamed = `distilled-railway-su-svc-renamed-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const updated = yield* serviceUpdate({
          id: service.id,
          input: { name: renamed },
        });
        expect(updated.id).toBe(service.id);
        expect(updated.name).toBe(renamed);
        expect(updated.projectId).toBe(service.projectId);
      }).pipe(
        // Always restore the original name so subsequent tests see it.
        Effect.ensuring(
          serviceUpdate({
            id: service.id,
            input: { name: service.name },
          }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      serviceUpdate({
        id: NON_EXISTENT_UUID,
        input: { name: `distilled-railway-su-unauth-${testRunId}` },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent service id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      serviceUpdate({
        id: NON_EXISTENT_UUID,
        input: { name: `distilled-railway-su-nf-${testRunId}` },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty service id", async () => {
    const error = await runEffect(
      serviceUpdate({
        id: "",
        input: { name: `distilled-railway-su-inv-${testRunId}` },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
