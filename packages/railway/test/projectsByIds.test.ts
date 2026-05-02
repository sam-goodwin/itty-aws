import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectsByIds } from "../src/operations/projectsByIds.ts";
import { getSharedProject, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectsByIds", () => {
  it("happy path - returns a freshly created project when fetched by id", async () => {
    const project = await getSharedProject();

    await runEffect(
      Effect.gen(function* () {
        const result = yield* projectsByIds({ ids: [project.id] });

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThanOrEqual(1);

        const found = result.find((p) => p.id === project.id);
        expect(found).toBeDefined();
        if (found) {
          expect(typeof found.name).toBe("string");
          expect(typeof found.createdAt).toBe("string");
          expect(typeof found.updatedAt).toBe("string");
          expect(typeof found.isPublic).toBe("boolean");
          expect(typeof found.isTempProject).toBe("boolean");
          expect(["free", "hobby", "pro", "trial"]).toContain(
            found.subscriptionType,
          );
        }
      }),
    );
  }, 60_000);

  it("happy path - returns an empty array for ids the caller cannot access", async () => {
    // The resolver skips inaccessible/non-existent ids (per docs) instead
    // of throwing, so this exercises the partial-denial behavior.
    await runEffect(
      Effect.gen(function* () {
        const result = yield* projectsByIds({ ids: [NON_EXISTENT_UUID] });
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(0);
      }),
    );
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      projectsByIds({ ids: [NON_EXISTENT_UUID] }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
