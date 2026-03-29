import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { AppIPAssignmentsCreate } from "../src/operations/AppIPAssignmentsCreate";
import { AppIPAssignmentsDelete } from "../src/operations/AppIPAssignmentsDelete";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("AppIPAssignmentsCreate", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-ipcr-${testRunId}`;

  it("happy path - assigns a shared IPv4 to an app", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const result = yield* AppIPAssignmentsCreate({
          app_name: appName,
          type: "shared_v4",
        } as any);
        expect(result).toHaveProperty("ip");
        expect(typeof result.ip).toBe("string");
        expect(result).toHaveProperty("shared");
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      AppIPAssignmentsCreate({
        app_name: "nonexistent-app-00000000",
        type: "shared_v4",
      } as any).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect((e as any)._tag).toBe("NotFound");
        }),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      AppIPAssignmentsCreate({
        app_name: "nonexistent-app-00000000",
        type: "shared_v4",
      } as any).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest with invalid IP type", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const error = yield* AppIPAssignmentsCreate({
          app_name: appName,
          type: "invalid_type_00000000",
        } as any).pipe(Effect.flip);
        expect(["BadRequest", "UnknownFlyIoError"]).toContain(
          (error as any)._tag,
        );
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);
});
