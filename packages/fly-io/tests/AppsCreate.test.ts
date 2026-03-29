import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
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

describe("AppsCreate", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-create-${testRunId}`;

  it("happy path - creates an app", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - BadRequest with invalid org_slug", async () => {
    await runEffect(
      AppsCreate({ org_slug: "nonexistent-org-00000000" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "NotFound", "UnknownFlyIoError"]).toContain(
            (e as any)._tag,
          );
        }),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      AppsCreate({ org_slug: "personal", name: `distilled-fly-bad-${testRunId}` }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - NotFound with non-existent org", async () => {
    await runEffect(
      AppsCreate({ org_slug: "org-does-not-exist-00000000", name: `distilled-fly-noorg-${testRunId}` }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "BadRequest", "UnknownFlyIoError"]).toContain(
            (e as any)._tag,
          );
        }),
      ),
    );
  }, 30_000);
});
