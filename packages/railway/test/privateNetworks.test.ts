import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { privateNetworks } from "../src/operations/privateNetworks.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("privateNetworks", () => {
  it(
    "happy path - lists private networks for a freshly created project's base environment",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const project = yield* projectCreate({
            input: {
              name: `distilled-railway-private-networks-${testRunId}`,
            },
          });

          yield* Effect.gen(function* () {
            const networks = yield* privateNetworks({
              environmentId: project.baseEnvironmentId,
            });

            expect(Array.isArray(networks)).toBe(true);
            for (const net of networks) {
              expect(typeof net.dnsName).toBe("string");
              expect(typeof net.environmentId).toBe("string");
              expect(typeof net.name).toBe("string");
              expect(typeof net.networkId).toBe("string");
              expect(typeof net.projectId).toBe("string");
              expect(typeof net.publicId).toBe("string");
              expect(Array.isArray(net.tags)).toBe(true);
            }
          }).pipe(
            Effect.ensuring(
              projectDelete({ id: project.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );
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
        privateNetworks({ environmentId: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for a non-existent environmentId",
    async () => {
      const error = await runEffect(
        privateNetworks({ environmentId: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );
});
