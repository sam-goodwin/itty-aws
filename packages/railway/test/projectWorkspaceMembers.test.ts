import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectWorkspaceMembers } from "../src/operations/projectWorkspaceMembers.ts";
import { getSharedProject, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectWorkspaceMembers", () => {
  it("happy path - returns workspace members for a freshly created project", async () => {
    const project = await getSharedProject();

    await runEffect(
      Effect.gen(function* () {
        const result = yield* projectWorkspaceMembers({
          projectId: project.id,
        });

        expect(result.projectId).toBe(project.id);
        expect(typeof result.projectName).toBe("string");
        expect(typeof result.workspaceId).toBe("string");
        expect(Array.isArray(result.members)).toBe(true);
        for (const member of result.members) {
          expect(typeof member.email).toBe("string");
          expect(typeof member.twoFactorAuthEnabled).toBe("boolean");
          expect(Array.isArray(member.enabledMethods)).toBe(true);
          for (const m of member.enabledMethods) {
            expect(["AUTHENTICATOR", "PASSKEY"]).toContain(m);
          }
        }
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      projectWorkspaceMembers({ projectId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent projectId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectWorkspaceMembers({ projectId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
      ),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
