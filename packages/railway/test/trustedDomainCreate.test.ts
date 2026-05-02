import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { trustedDomainCreate } from "../src/operations/trustedDomainCreate.ts";
import { trustedDomainDelete } from "../src/operations/trustedDomainDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("trustedDomainCreate", () => {
  it("happy path - registers a trusted domain on the authenticated workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        if (!workspaceId) {
          throw new Error("test setup: authenticated token has no workspaces");
        }
        const domainName = `distilled-railway-tdc-${testRunId}.example.com`;
        const created = yield* trustedDomainCreate({
          input: {
            domainName,
            role: "MEMBER",
            workspaceId,
          },
        });
        return yield* Effect.gen(function* () {
          expect(typeof created.id).toBe("string");
          expect(created.id).toBeTruthy();
          expect(created.domainName).toBe(domainName);
          expect(created.workspaceId).toBe(workspaceId);
          expect(["FAILED", "PENDING", "VERIFIED"]).toContain(created.status);
        }).pipe(
          Effect.ensuring(
            trustedDomainDelete({ id: created.id }).pipe(Effect.ignore),
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
      trustedDomainCreate({
        input: {
          domainName: `distilled-railway-tdc-unauth-${testRunId}.example.com`,
          role: "MEMBER",
          workspaceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty domainName", async () => {
    const error = await runEffect(
      trustedDomainCreate({
        input: {
          domainName: "",
          role: "MEMBER",
          workspaceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
