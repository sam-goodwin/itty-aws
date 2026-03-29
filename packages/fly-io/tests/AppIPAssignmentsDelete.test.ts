import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { AppIPAssignmentsCreate } from "../src/operations/AppIPAssignmentsCreate";
import { AppIPAssignmentsDelete } from "../src/operations/AppIPAssignmentsDelete";
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

describe("AppIPAssignmentsDelete", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-ipdel-${testRunId}`;

  it("happy path - removes an IP assignment from an app", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const created = yield* AppIPAssignmentsCreate({
          app_name: appName,
          type: "shared_v4",
        } as any);
        expect(created.ip).toBeDefined();
        yield* AppIPAssignmentsDelete({
          app_name: appName,
          ip: created.ip,
        } as any);
        // Verify the IP is gone
        const list = yield* AppIPAssignmentsList({
          app_name: appName,
        } as any);
        const found = (list.ips ?? []).some((entry) => entry.ip === created.ip);
        expect(found).toBe(false);
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      AppIPAssignmentsDelete({
        app_name: "nonexistent-app-00000000",
        ip: "1.2.3.4",
      } as any).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect((e as any)._tag).toBe("NotFound");
        }),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent IP on valid app", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const error = yield* AppIPAssignmentsDelete({
          app_name: appName,
          ip: "192.0.2.99",
        } as any).pipe(Effect.flip);
        expect((error as any)._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      AppIPAssignmentsDelete({
        app_name: "nonexistent-app-00000000",
        ip: "1.2.3.4",
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
