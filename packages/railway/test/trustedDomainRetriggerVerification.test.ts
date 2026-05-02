import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { trustedDomainCreate } from "../src/operations/trustedDomainCreate.ts";
import { trustedDomainDelete } from "../src/operations/trustedDomainDelete.ts";
import { trustedDomainRetriggerVerification } from "../src/operations/trustedDomainRetriggerVerification.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("trustedDomainRetriggerVerification", () => {
  it(
    "happy path - retriggers verification for a freshly registered trusted domain",
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
          const domainName = `distilled-railway-tdrv-${testRunId}.example.com`;
          const created = yield* trustedDomainCreate({
            input: {
              domainName,
              role: "MEMBER",
              workspaceId,
            },
          });
          return yield* Effect.gen(function* () {
            const result = yield* trustedDomainRetriggerVerification({
              id: created.id,
            });
            expect(result).not.toBeNull();
            if (result === null) return;
            expect(result.id).toBe(created.id);
            expect(result.domainName).toBe(domainName);
            expect(result.workspaceId).toBe(workspaceId);
            expect(["FAILED", "PENDING", "VERIFIED"]).toContain(result.status);
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
        trustedDomainRetriggerVerification({ id: NON_EXISTENT_UUID }).pipe(
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
        trustedDomainRetriggerVerification({ id: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
        ),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );
});
