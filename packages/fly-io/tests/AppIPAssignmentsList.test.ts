import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { AppIPAssignmentsList } from "../src/operations/AppIPAssignmentsList";
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

describe("AppIPAssignmentsList", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-iplist-${testRunId}`;

  it("happy path - lists IP assignments for an app", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const result = yield* AppIPAssignmentsList({
          app_name: appName,
        } as any);
        expect(result).toHaveProperty("ips");
        expect(Array.isArray(result.ips)).toBe(true);
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      AppIPAssignmentsList({
        app_name: "nonexistent-app-00000000",
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
      AppIPAssignmentsList({
        app_name: "nonexistent-app-00000000",
      } as any).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
