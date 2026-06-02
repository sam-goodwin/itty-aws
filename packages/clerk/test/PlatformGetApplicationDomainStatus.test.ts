import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getApplicationDomainStatus as PlatformGetApplicationDomainStatus } from "../src/operations/platform/domains/getApplicationDomainStatus";
import { listApplicationDomains as PlatformListApplicationDomains } from "../src/operations/platform/domains/listApplicationDomains";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;
const NON_EXISTENT_DOMAIN = `dmn_does_not_exist_${testRunId}`;

/**
 * Pick the first application + one of its existing domains. Every Clerk
 * application has at least the default development domain, so this should
 * always yield a real (applicationID, domainID) pair.
 */
const pickAppAndDomain = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformGetApplicationDomainStatus",
      ),
    );
  }
  const domains = yield* PlatformListApplicationDomains({
    applicationID: app.application_id,
  });
  const domain = domains.data[0];
  if (!domain) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no domains - cannot test PlatformGetApplicationDomainStatus`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    domainID: domain.id,
  };
});

describe("PlatformGetApplicationDomainStatus", () => {
  it("returns the status of an existing application domain", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, domainID } = yield* pickAppAndDomain;

        const status = yield* PlatformGetApplicationDomainStatus({
          applicationID,
          domainIDOrName: domainID,
        });

        expect(["complete", "incomplete"]).toContain(status.status);
        expect(["not_started", "in_progress", "complete"]).toContain(
          status.dns.status,
        );
        expect(typeof status.dns.cnames).toBe("object");
        expect(typeof status.ssl).toBe("object");
      }),
    );
  });

  it("returns BadRequest for a malformed domain identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndDomain;

        const error = yield* PlatformGetApplicationDomainStatus({
          applicationID,
          // A whitespace-only path segment triggers Clerk's input
          // validation (400) rather than a 404 lookup miss.
          domainIDOrName: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformGetApplicationDomainStatus({
          applicationID: NON_EXISTENT_APP,
          domainIDOrName: NON_EXISTENT_DOMAIN,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a non-existent domain on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndDomain;

        const error = yield* PlatformGetApplicationDomainStatus({
          applicationID,
          domainIDOrName: NON_EXISTENT_DOMAIN,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
