import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { events } from "../src/operations/events.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("events", () => {
  it(
    "happy path - returns paginated events for a project",
    async () => {
      const projectName = `distilled-railway-events-${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          const project = yield* projectCreate({
            input: { name: projectName },
          });

          return yield* Effect.gen(function* () {
            const evs = yield* events({
              projectId: project.id,
              first: 10,
            });

            expect(Array.isArray(evs.edges)).toBe(true);
            expect(typeof evs.pageInfo.hasNextPage).toBe("boolean");
            expect(typeof evs.pageInfo.hasPreviousPage).toBe("boolean");
            for (const edge of evs.edges) {
              expect(typeof edge.cursor).toBe("string");
              expect(typeof edge.node.id).toBe("string");
              expect(typeof edge.node.action).toBe("string");
              expect(typeof edge.node.object).toBe("string");
              expect(typeof edge.node.createdAt).toBe("string");
              expect(["CRITICAL", "INFO", "NOTICE", "WARNING"]).toContain(
                edge.node.severity,
              );
            }
            return evs;
          }).pipe(
            Effect.ensuring(projectDelete({ id: project.id }).pipe(Effect.ignore)),
          );
        }),
      );

      expect(result).toBeDefined();
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
        events({
          projectId: NON_EXISTENT_UUID,
          first: 5,
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
