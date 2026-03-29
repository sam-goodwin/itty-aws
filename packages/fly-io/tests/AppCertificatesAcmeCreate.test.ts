import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { AppCertificatesAcmeCreate } from "../src/operations/AppCertificatesAcmeCreate";
import { AppCertificatesDelete } from "../src/operations/AppCertificatesDelete";
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

describe("AppCertificatesAcmeCreate", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-acme-${testRunId}`;
  const hostname = `${testRunId}.example.com`;

  it("happy path - requests an ACME certificate", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const result = yield* AppCertificatesAcmeCreate({
          app_name: appName,
          hostname,
        } as any);
        expect(result).toHaveProperty("hostname");
        expect(result.hostname).toBe(hostname);
      }).pipe(
        Effect.ensuring(
          AppCertificatesDelete({ app_name: appName, hostname } as any)
            .pipe(Effect.ignore)
            .pipe(
              Effect.andThen(
                AppsDelete({ app_name: appName }).pipe(Effect.ignore),
              ),
            ),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      AppCertificatesAcmeCreate({
        app_name: "nonexistent-app-00000000",
        hostname: "test.example.com",
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
      AppCertificatesAcmeCreate({
        app_name: "nonexistent-app-00000000",
        hostname: "test.example.com",
      } as any).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest with empty hostname", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const error = yield* AppCertificatesAcmeCreate({
          app_name: appName,
          hostname: "",
        } as any).pipe(Effect.flip);
        expect(["BadRequest", "UnprocessableEntity", "UnknownFlyIoError"]).toContain(
          (error as any)._tag,
        );
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity with invalid hostname", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const error = yield* AppCertificatesAcmeCreate({
          app_name: appName,
          hostname: "!!!invalid-hostname!!!",
        } as any).pipe(Effect.flip);
        expect(["UnprocessableEntity", "BadRequest", "UnknownFlyIoError"]).toContain(
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
