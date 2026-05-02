import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentLogs } from "../src/operations/environmentLogs.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("environmentLogs", () => {
  it("happy path - returns log entries for an existing environment", async () => {
    const projectName = `distilled-railway-env-logs-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projectName },
        });

        return yield* Effect.gen(function* () {
          const logs = yield* environmentLogs({
            environmentId: project.baseEnvironmentId!,
            beforeLimit: 50,
          });

          expect(Array.isArray(logs)).toBe(true);
          for (const entry of logs) {
            expect(typeof entry.message).toBe("string");
            expect(typeof entry.timestamp).toBe("string");
            expect(Array.isArray(entry.attributes)).toBe(true);
            for (const attr of entry.attributes) {
              expect(typeof attr.key).toBe("string");
              expect(typeof attr.value).toBe("string");
            }
          }
          return logs;
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );

    expect(Array.isArray(result)).toBe(true);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      environmentLogs({
        environmentId: NON_EXISTENT_UUID,
        beforeLimit: 10,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent environment id", async () => {
    const error = await runEffect(
      environmentLogs({
        environmentId: NON_EXISTENT_UUID,
        beforeLimit: 10,
      }).pipe(Effect.flip),
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
