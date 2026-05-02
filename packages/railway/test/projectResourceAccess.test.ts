import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { projectResourceAccess } from "../src/operations/projectResourceAccess.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectResourceAccess", () => {
  it("happy path - returns resource-access rules for a freshly created project", async () => {
    await runEffect(
      Effect.gen(function* () {
        const created = yield* projectCreate({
          input: { name: `distilled-railway-resource-access-${testRunId}` },
        });

        yield* Effect.gen(function* () {
          const result = yield* projectResourceAccess({
            projectId: created.id,
          });

          expect(result.customDomain).toBeDefined();
          expect(result.databaseDeployment).toBeDefined();
          expect(result.deployment).toBeDefined();
          expect(result.environment).toBeDefined();
          expect(result.plugin).toBeDefined();

          for (const key of [
            "customDomain",
            "databaseDeployment",
            "deployment",
            "environment",
            "plugin",
          ] as const) {
            const v = result[key].disallowed;
            if (v !== null) expect(typeof v).toBe("string");
          }
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: created.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      projectResourceAccess({ projectId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent projectId", async () => {
    const error = await runEffect(
      projectResourceAccess({ projectId: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
