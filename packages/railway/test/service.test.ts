import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { service } from "../src/operations/service.ts";
import { getSharedService, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("service", () => {
  it("happy path - returns service details for the shared service", async () => {
    const shared = await getSharedService();

    const result = await runEffect(service({ id: shared.id }));

    expect(result.id).toBe(shared.id);
    expect(typeof result.createdAt).toBe("string");
    expect(typeof result.name).toBe("string");
    expect(result.projectId).toBe(shared.projectId);
    expect(typeof result.updatedAt).toBe("string");
    expect(typeof result.hasHiddenRegistryCredentialsFromTemplate).toBe(
      "boolean",
    );
    expect(Array.isArray(result.featureFlags)).toBe(true);
    expect(result.project).toBeDefined();
    expect(result.project.id).toBe(shared.projectId);
    expect(typeof result.project.name).toBe("string");
    expect(typeof result.project.isPublic).toBe("boolean");
    expect(Array.isArray(result.project.members)).toBe(true);
    for (const member of result.project.members) {
      expect(typeof member.email).toBe("string");
      expect(typeof member.id).toBe("string");
      expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(member.role);
    }
    expect(["free", "hobby", "pro", "trial"]).toContain(
      result.project.subscriptionType,
    );
    if (result.project.workspace !== null) {
      expect(typeof result.project.workspace.id).toBe("string");
      expect(["FREE", "HOBBY", "PRO"]).toContain(result.project.workspace.plan);
      expect(["FREE", "TEAM", "USER"]).toContain(
        result.project.workspace.subscriptionModel,
      );
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      service({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent serviceId surfaces RailwayNotAuthorized", async () => {
    // See project.test.ts — Railway returns "Not Authorized" for unknown
    // resources because its resolvers don't distinguish missing from
    // forbidden when the bearer is valid.
    const error = await runEffect(
      service({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
