import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { trustedDomainCreate } from "../src/operations/trustedDomainCreate.ts";
import { trustedDomainDelete } from "../src/operations/trustedDomainDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("trustedDomainDelete", () => {
  it(
    "happy path - deletes a freshly registered trusted domain",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const me = yield* apiToken({});
          const workspaceId = me.workspaces[0]?.id;
          if (!workspaceId) {
            throw new Error(
              "test setup: authenticated token has no workspaces",
            );
          }
          const domainName = `distilled-railway-tdd-${testRunId}.example.com`;
          const created = yield* trustedDomainCreate({
            input: {
              domainName,
              role: "MEMBER",
              workspaceId,
            },
          });
          return yield* Effect.gen(function* () {
            const result = yield* trustedDomainDelete({ id: created.id });
            expect(result).toBe(true);
          }).pipe(
            Effect.ensuring(
              trustedDomainDelete({ id: created.id }).pipe(Effect.ignore),
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
        trustedDomainDelete({ id: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for a non-existent trusted domain id",
    async () => {
      const error = await runEffect(
        trustedDomainDelete({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );
});
