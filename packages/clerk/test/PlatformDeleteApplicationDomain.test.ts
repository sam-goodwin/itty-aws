import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCreateApplication } from "../src/operations/platform/PlatformCreateApplication";
import { PlatformCreateApplicationDomain } from "../src/operations/platform/PlatformCreateApplicationDomain";
import { PlatformDeleteApplication } from "../src/operations/platform/PlatformDeleteApplication";
import { PlatformDeleteApplicationDomain } from "../src/operations/platform/PlatformDeleteApplicationDomain";
import { PlatformListApplicationDomains } from "../src/operations/platform/PlatformListApplicationDomains";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_DOMAIN = `dmn_does_not_exist_${testRunId}`;

const appName = (suffix: string): string =>
  `distilled-clerk-deldomain-${suffix}-${testRunId}`;

const providerDomainName = (suffix: string): string =>
  `satellite-${suffix}-${testRunId}.example.com`;

/**
 * Provision a fresh application with both development and production
 * instances. PlatformDeleteApplicationDomain operates on the production
 * instance's domains, so a production instance must exist. The whole
 * application is deleted afterwards.
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

describe("PlatformDeleteApplicationDomain", () => {
  it("deletes a provider domain that was added to the application", async () => {
    await runEffect(
      withFreshApplicationWithProduction("happy", (applicationID) =>
        Effect.gen(function* () {
          const provider = yield* PlatformCreateApplicationDomain({
            applicationID,
            name: providerDomainName("happy"),
          });

          const result = yield* PlatformDeleteApplicationDomain({
            applicationID,
            domainIDOrName: provider.id,
          });

          expect(result.deleted).toBe(true);
          expect(result.id).toBe(provider.id);
          expect(typeof result.object).toBe("string");
        }),
      ),
    );
  });

  it("returns BadRequest for a malformed domain identifier", async () => {
    await runEffect(
      withFreshApplicationWithProduction("bad-request", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformDeleteApplicationDomain({
            applicationID,
            // Whitespace-only path segment trips input validation (400)
            // before the resource lookup.
            domainIDOrName: " ",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("BadRequest");
        }),
      ),
    );
  });

  it("returns NotFound for a non-existent domain on a real application", async () => {
    await runEffect(
      withFreshApplicationWithProduction("not-found", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformDeleteApplicationDomain({
            applicationID,
            domainIDOrName: NON_EXISTENT_DOMAIN,
          }).pipe(Effect.flip);

          expect(error._tag).toBe("NotFound");
        }),
      ),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformDeleteApplicationDomain({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          domainIDOrName: NON_EXISTENT_DOMAIN,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns UnprocessableEntity when attempting to delete the primary domain", async () => {
    await runEffect(
      withFreshApplicationWithProduction("unproc", (applicationID) =>
        Effect.gen(function* () {
          // Per the operation docs: "Only provider domains can be deleted.
          // The primary domain cannot be deleted." Identify the primary
          // domain (the auto-provisioned production instance domain) and
          // attempt to delete it — the API must reject with 422.
          const domains = yield* PlatformListApplicationDomains({
            applicationID,
          });
          const primary =
            domains.data.find((d) => d.is_provider_domain === false) ??
            domains.data[0];
          if (!primary) {
            return yield* Effect.die(
              new Error(
                "Fresh application has no domains - cannot test primary-domain deletion guard",
              ),
            );
          }

          const error = yield* PlatformDeleteApplicationDomain({
            applicationID,
            domainIDOrName: primary.id,
          }).pipe(Effect.flip);

          expect(error._tag).toBe("UnprocessableEntity");
        }),
      ),
    );
  });
});
