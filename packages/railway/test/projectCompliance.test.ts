import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCompliance } from "../src/operations/projectCompliance.ts";
import { getSharedProject, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectCompliance", () => {
  it("happy path - returns compliance info for a freshly created project", async () => {
    const project = await getSharedProject();

    await runEffect(
      Effect.gen(function* () {
        const result = yield* projectCompliance({ projectId: project.id });

        expect(result.projectId).toBe(project.id);
        expect(typeof result.projectName).toBe("string");
        expect(typeof result.workspaceId).toBe("string");

        expect(Array.isArray(result.memberPermissions)).toBe(true);
        for (const member of result.memberPermissions) {
          expect(typeof member.email).toBe("string");
          expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(member.role);
        }

        expect(Array.isArray(result.serviceBackups)).toBe(true);
        for (const sb of result.serviceBackups) {
          expect(typeof sb.serviceId).toBe("string");
          expect(typeof sb.serviceName).toBe("string");
          expect(Array.isArray(sb.schedules)).toBe(true);
          for (const s of sb.schedules) {
            expect(["DAILY", "MONTHLY", "WEEKLY"]).toContain(s);
          }
        }

        expect(Array.isArray(result.twoFactorMembers)).toBe(true);
        for (const tf of result.twoFactorMembers) {
          expect(typeof tf.email).toBe("string");
          expect(typeof tf.twoFactorAuthEnabled).toBe("boolean");
          expect(Array.isArray(tf.enabledMethods)).toBe(true);
          for (const m of tf.enabledMethods) {
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
      projectCompliance({ projectId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent projectId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectCompliance({ projectId: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
