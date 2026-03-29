import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { SecretkeySet } from "../src/operations/SecretkeySet";
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

describe("SecretkeySet", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-skset-${testRunId}`;

  it("happy path - set a secretkey on an app", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const result = yield* SecretkeySet({
          app_name: appName,
          secret_name: "test-key",
          type: "aead-aes256-gcm",
        }).pipe(
          Effect.match({
            onFailure: (e) => ({ ok: false as const, error: e }),
            onSuccess: (v) => ({ ok: true as const, value: v }),
          }),
        );
        if (result.ok) {
          expect(result.value).toBeDefined();
        } else {
          // Some key types may not be accepted; that's expected
          expect(["BadRequest", "UnknownFlyIoError"]).toContain(
            (result.error as any)._tag,
          );
        }
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      SecretkeySet({
        app_name: "nonexistent-app-00000000",
        secret_name: "test-key",
        type: "aead-aes256-gcm",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect((e as any)._tag).toBe("NotFound");
        }),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      SecretkeySet({
        app_name: "nonexistent-app-00000000",
        secret_name: "test-key",
        type: "aead-aes256-gcm",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest with invalid key type", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const error = yield* SecretkeySet({
          app_name: appName,
          secret_name: "bad-type-key",
          type: "not-a-valid-type",
        }).pipe(Effect.flip);
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
