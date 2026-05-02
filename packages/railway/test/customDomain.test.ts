import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { customDomain } from "../src/operations/customDomain.ts";
import { customDomainCreate } from "../src/operations/customDomainCreate.ts";
import { customDomainDelete } from "../src/operations/customDomainDelete.ts";
import { getSharedService, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("customDomain", () => {
  it("happy path - returns custom domain details by id and projectId", async () => {
    const service = await getSharedService();
    const domain = `test-${testRunId}.example.com`;

    await runEffect(
      Effect.gen(function* () {
        const created = yield* customDomainCreate({
          input: {
            domain,
            environmentId: service.environmentId,
            projectId: service.projectId,
            serviceId: service.id,
          },
        });

        return yield* Effect.gen(function* () {
          const fetched = yield* customDomain({
            id: created.id,
            projectId: service.projectId,
          });

          expect(fetched.id).toBe(created.id);
          expect(fetched.domain).toBe(domain);
          expect(fetched.serviceId).toBe(service.id);
          expect(fetched.environmentId).toBe(service.environmentId);
          expect(typeof fetched.status.verified).toBe("boolean");
          expect(Array.isArray(fetched.status.dnsRecords)).toBe(true);
        }).pipe(
          Effect.ensuring(
            customDomainDelete({ id: created.id }).pipe(Effect.ignore),
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
      customDomain({
        id: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent custom domain id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      customDomain({
        id: NON_EXISTENT_UUID,
        projectId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
