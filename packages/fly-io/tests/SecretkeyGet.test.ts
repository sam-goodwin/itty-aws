import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { SecretkeyGet } from "../src/operations/SecretkeyGet";
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

describe("SecretkeyGet", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-skget-${testRunId}`;

  it("happy path - get secretkey from app (expects NotFound)", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const result = yield* SecretkeyGet({
          app_name: appName,
          secret_name: "nonexistent-key",
        }).pipe(
          Effect.match({
            onFailure: (e) => ({ error: (e as any)._tag }),
            onSuccess: (v) => ({ success: v }),
          }),
        );
        expect(result).toHaveProperty("error");
        expect((result as any).error).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      SecretkeyGet({
        app_name: "nonexistent-app-00000000",
        secret_name: "some-key",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect((e as any)._tag).toBe("NotFound");
        }),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent key on valid app", async (ctx) => {
    if (skipApps) return ctx.skip();
    const validAppName = `distilled-fly-skget2-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: validAppName });
        const error = yield* SecretkeyGet({
          app_name: validAppName,
          secret_name: "nonexistent-key",
        }).pipe(Effect.flip);
        expect((error as any)._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: validAppName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      SecretkeyGet({
        app_name: "nonexistent-app-00000000",
        secret_name: "some-key",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
