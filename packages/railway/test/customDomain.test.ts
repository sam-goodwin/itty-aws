import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { customDomain } from "../src/operations/customDomain.ts";
import { customDomainCreate } from "../src/operations/customDomainCreate.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { serviceCreate } from "../src/operations/serviceCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("customDomain", () => {
  it("happy path - returns custom domain details by id and projectId", async () => {
    const projectName = `distilled-railway-custom-domain-${testRunId}`;
    const domain = `test-${testRunId}.example.com`;

    const result = await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projectName },
        });

        return yield* Effect.gen(function* () {
          const service = yield* serviceCreate({
            input: {
              projectId: project.id,
              name: `svc-${testRunId}`,
            },
          });

          const created = yield* customDomainCreate({
            input: {
              domain,
              environmentId: project.baseEnvironmentId!,
              projectId: project.id,
              serviceId: service.id,
            },
          });

          const fetched = yield* customDomain({
            id: created.id,
            projectId: project.id,
          });

          expect(fetched.id).toBe(created.id);
          expect(fetched.domain).toBe(domain);
          expect(fetched.serviceId).toBe(service.id);
          expect(fetched.environmentId).toBe(project.baseEnvironmentId);
          expect(typeof fetched.status.verified).toBe("boolean");
          expect(Array.isArray(fetched.status.dnsRecords)).toBe(true);
          return fetched;
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );

    expect(result.domain).toBe(domain);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      customDomain({
        id: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for non-existent custom domain id", async () => {
    const error = await runEffect(
      customDomain({
        id: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
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
