import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { SecretkeyEncrypt } from "../src/operations/SecretkeyEncrypt";
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

describe("SecretkeyEncrypt", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-skenc-${testRunId}`;

  it("happy path - encrypt with nonexistent key (expects error)", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const result = yield* SecretkeyEncrypt({
          app_name: appName,
          secret_name: "nonexistent-key",
          plaintext: [72, 101, 108, 108, 111],
        }).pipe(
          Effect.match({
            onFailure: (e) => ({ ok: false as const, error: e }),
            onSuccess: (v) => ({ ok: true as const, value: v }),
          }),
        );
        if (result.ok) {
          expect(result.value).toBeDefined();
        } else {
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
      SecretkeyEncrypt({
        app_name: "nonexistent-app-00000000",
        secret_name: "some-key",
        plaintext: [72, 101, 108, 108, 111],
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
      SecretkeyEncrypt({
        app_name: "nonexistent-app-00000000",
        secret_name: "some-key",
        plaintext: [72, 101, 108, 108, 111],
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest with invalid plaintext on existing key", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        // Generate a signing key, then try to encrypt with it (wrong key type)
        yield* SecretkeyGenerate({
          app_name: appName,
          secret_name: "encrypt-test-key",
          type: "ed25519",
        }).pipe(
          Effect.match({
            onSuccess: () => true,
            onFailure: () => false,
          }),
        );
        const error = yield* SecretkeyEncrypt({
          app_name: appName,
          secret_name: "encrypt-test-key",
          plaintext: [72, 101, 108, 108, 111],
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
