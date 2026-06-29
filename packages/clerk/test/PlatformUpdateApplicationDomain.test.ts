import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createApplication as PlatformCreateApplication } from "../src/operations/platform/applications/createApplication";
import { deleteApplication as PlatformDeleteApplication } from "../src/operations/platform/applications/deleteApplication";
import { updateApplicationDomain as PlatformUpdateApplicationDomain } from "../src/operations/platform/domains/updateApplicationDomain";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;

const appName = (suffix: string): string =>
  `distilled-clerk-domain-${suffix}-${testRunId}`;

const happyDomain = (suffix: string): string =>
  `prod-${suffix}-${testRunId}.example.com`;

/**
 * Provision a fresh application (with both development and production
 * instances) for the duration of `testFn`. PlatformUpdateApplicationDomain
 * targets the production domain, so the app must have a production
 * instance for the happy path to be meaningful. The whole application is
 * deleted afterwards to avoid leaking resources between runs.
 */
const withFreshApplicationWithProduction = <A, E, R>(
  suffix: string,
  testFn: (applicationID: string) => Effect.Effect<A, E, R>,
) =>
  Effect.gen(function* () {
    const created = yield* PlatformCreateApplication({
      name: appName(suffix),
      environment_types: ["development", "production"],
    });
    return yield* testFn(created.application_id).pipe(
      Effect.ensuring(
        PlatformDeleteApplication({
          applicationID: created.application_id,
        }).pipe(Effect.ignore),
      ),
    );
  });

const withFreshApplication = <A, E, R>(
  suffix: string,
  testFn: (applicationID: string) => Effect.Effect<A, E, R>,
) =>
  Effect.gen(function* () {
    const created = yield* PlatformCreateApplication({
      name: appName(suffix),
    });
    return yield* testFn(created.application_id).pipe(
      Effect.ensuring(
        PlatformDeleteApplication({
          applicationID: created.application_id,
        }).pipe(Effect.ignore),
      ),
    );
  });

describe("PlatformUpdateApplicationDomain", () => {
  it("updates the production domain on an application", async () => {
    await runEffect(
      withFreshApplicationWithProduction("happy", (applicationID) =>
        Effect.gen(function* () {
          const updated = yield* PlatformUpdateApplicationDomain({
            applicationID,
            name: happyDomain("happy"),
          });

          expect(updated.object).toBe("domain");
          expect(updated.id).toMatch(/.+/);
          expect(updated.name).toMatch(/.+/);
          expect(updated.frontend_api_url).toMatch(/.+/);
          expect(typeof updated.created_at).toBe("string");
          expect(typeof updated.updated_at).toBe("string");
        }),
      ),
    );
  });

  it("returns BadRequest when the domain name is empty", async () => {
    await runEffect(
      withFreshApplicationWithProduction("bad-request", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformUpdateApplicationDomain({
            applicationID,
            name: "",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("BadRequest");
        }),
      ),
    );
  });

  it("returns UnprocessableEntity for a malformed domain", async () => {
    await runEffect(
      withFreshApplicationWithProduction("unproc", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformUpdateApplicationDomain({
            applicationID,
            name: "not a real domain",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("UnprocessableEntity");
        }),
      ),
    );
  });

  it("returns NotFound when the application has no production domain to update", async () => {
    await runEffect(
      withFreshApplication("not-found", (applicationID) =>
        Effect.gen(function* () {
          // A fresh application provisioned with the default
          // (development-only) environment has no production domain, so
          // the PATCH target resource does not exist.
          const error = yield* PlatformUpdateApplicationDomain({
            applicationID,
            name: happyDomain("not-found"),
          }).pipe(Effect.flip);

          expect(error._tag).toBe("NotFound");
        }),
      ),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformUpdateApplicationDomain({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          name: happyDomain("forbidden"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for an application id that does not exist", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformUpdateApplicationDomain({
          applicationID: NON_EXISTENT_APP,
          name: happyDomain("missing-app"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
