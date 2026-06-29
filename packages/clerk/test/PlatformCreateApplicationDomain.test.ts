import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createApplication as PlatformCreateApplication } from "../src/operations/platform/applications/createApplication";
import { createApplicationDomain as PlatformCreateApplicationDomain } from "../src/operations/platform/domains/createApplicationDomain";
import { deleteApplication as PlatformDeleteApplication } from "../src/operations/platform/applications/deleteApplication";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;

const appName = (suffix: string): string =>
  `distilled-clerk-createdomain-${suffix}-${testRunId}`;

const providerDomainName = (suffix: string): string =>
  `satellite-${suffix}-${testRunId}.example.com`;

/**
 * Provision a fresh application with both development and production
 * instances. PlatformCreateApplicationDomain attaches a provider domain
 * to the production instance, so the app must have one.
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

describe("PlatformCreateApplicationDomain", () => {
  it("creates a provider domain on an application", async () => {
    await runEffect(
      withFreshApplicationWithProduction("happy", (applicationID) =>
        Effect.gen(function* () {
          const domain = yield* PlatformCreateApplicationDomain({
            applicationID,
            name: providerDomainName("happy"),
          });

          expect(domain.object).toBe("domain");
          expect(domain.id).toMatch(/.+/);
          expect(domain.name).toMatch(/.+/);
          expect(domain.frontend_api_url).toMatch(/.+/);
          expect(typeof domain.created_at).toBe("string");
          expect(typeof domain.updated_at).toBe("string");
        }),
      ),
    );
  });

  it("returns BadRequest when the name is empty", async () => {
    await runEffect(
      withFreshApplicationWithProduction("bad-request", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformCreateApplicationDomain({
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
          const error = yield* PlatformCreateApplicationDomain({
            applicationID,
            name: "not a real domain",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("UnprocessableEntity");
        }),
      ),
    );
  });

  it("returns Conflict when the same domain is registered twice", async () => {
    await runEffect(
      withFreshApplicationWithProduction("conflict", (applicationID) =>
        Effect.gen(function* () {
          const name = providerDomainName("conflict");

          // First registration succeeds.
          yield* PlatformCreateApplicationDomain({ applicationID, name });

          // Re-registering the same name on the same application must
          // collide with the existing entry and return 409 Conflict.
          const error = yield* PlatformCreateApplicationDomain({
            applicationID,
            name,
          }).pipe(Effect.flip);

          expect(error._tag).toBe("Conflict");
        }),
      ),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCreateApplicationDomain({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          name: providerDomainName("forbidden"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for an application id that does not exist", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCreateApplicationDomain({
          applicationID: NON_EXISTENT_APP,
          name: providerDomainName("not-found"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
