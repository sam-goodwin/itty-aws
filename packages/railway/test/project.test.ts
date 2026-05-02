import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { project } from "../src/operations/project.ts";
import { getSharedProject, runEffect } from "./setup.ts";

// A syntactically-valid UUID that no Railway resource will ever own.
const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("project", () => {
  it("happy path - returns the shared test project by id", async () => {
    const shared = await getSharedProject();

    const result = await runEffect(project({ id: shared.id }));

    expect(result.id).toBe(shared.id);
    expect(result.name).toBe(shared.name);
    expect(typeof result.createdAt).toBe("string");
    expect(typeof result.updatedAt).toBe("string");
    expect(typeof result.isPublic).toBe("boolean");
    expect(typeof result.isTempProject).toBe("boolean");
    expect(typeof result.botPrEnvironments).toBe("boolean");
    expect(typeof result.focusedPrEnvironments).toBe("boolean");
    expect(typeof result.prDeploys).toBe("boolean");
    expect(["free", "hobby", "pro", "trial"]).toContain(
      result.subscriptionType,
    );
    expect(Array.isArray(result.members)).toBe(true);
    for (const member of result.members) {
      expect(typeof member.id).toBe("string");
      expect(typeof member.email).toBe("string");
      expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(member.role);
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      project({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent projectId surfaces RailwayNotAuthorized", async () => {
    // Railway's resolvers can't tell "missing resource" from "resource
    // owned by someone else" when the caller is authenticated but the
    // resource isn't theirs — so a syntactically valid UUID that doesn't
    // exist in this workspace surfaces as RailwayNotAuthorized, not
    // RailwayNotFound.
    const error = await runEffect(
      project({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
