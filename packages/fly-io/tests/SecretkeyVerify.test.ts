import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { SecretkeyVerify } from "../src/operations/SecretkeyVerify";
import { SecretkeyGenerate } from "../src/operations/SecretkeyGenerate";
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

describe("SecretkeyVerify", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-skver-${testRunId}`;

  it("happy path - verify with nonexistent key", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const result = yield* SecretkeyVerify({
          app_name: appName,
          secret_name: "nonexistent-key",
        }).pipe(
          Effect.match({
            onFailure: (e) => ({ ok: false as const, error: e }),
            onSuccess: () => ({ ok: true as const }),
          }),
        );
        if (!result.ok) {
          expect(["NotFound", "BadRequest", "UnknownFlyIoError"]).toContain(
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
      SecretkeyVerify({
        app_name: "nonexistent-app-00000000",
        secret_name: "nonexistent-key",
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
      SecretkeyVerify({
        app_name: "nonexistent-app-00000000",
        secret_name: "nonexistent-key",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest verifying with invalid signature on existing key", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        // Generate an encryption key, then try to verify with it (wrong key type)
        yield* SecretkeyGenerate({
          app_name: appName,
          secret_name: "verify-test-key",
          type: "aead-aes256-gcm",
        }).pipe(
          Effect.match({
            onSuccess: () => true,
            onFailure: () => false,
          }),
        );
        const error = yield* SecretkeyVerify({
          app_name: appName,
          secret_name: "verify-test-key",
          plaintext: [72, 101, 108, 108, 111],
          signature: [0, 1, 2, 3],
        }).pipe(Effect.flip);
        expect(["BadRequest", "NotFound", "UnknownFlyIoError"]).toContain(
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
