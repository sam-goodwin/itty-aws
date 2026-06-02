import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformListApplicationDomains } from "../src/operations/platform/PlatformListApplicationDomains";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { PlatformTriggerDNSCheck } from "../src/operations/platform/PlatformTriggerDNSCheck";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;
const NON_EXISTENT_DOMAIN = `dmn_does_not_exist_${testRunId}`;

/**
 * Pick the first application + one of its existing domains. Every Clerk
 * application has at least the default development domain.
 */
const pickAppAndDomain = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformTriggerDNSCheck",
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
        `Application ${app.application_id} has no domains - cannot test PlatformTriggerDNSCheck`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    domainID: domain.id,
  };
});

describe("PlatformTriggerDNSCheck", () => {
  it("triggers a DNS check and returns the current domain status", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, domainID } = yield* pickAppAndDomain;

        const result = yield* PlatformTriggerDNSCheck({
          applicationID,
          domainIDOrName: domainID,
        });

        expect(result.domain_id).toBe(domainID);
        expect(["complete", "incomplete"]).toContain(result.status);
        expect(["not_started", "in_progress", "complete"]).toContain(
          result.dns.status,
        );
        expect(typeof result.dns.cnames).toBe("object");
        expect(typeof result.ssl).toBe("object");
      }),
    );
  });

  it("returns BadRequest for a malformed domain identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndDomain;

        const error = yield* PlatformTriggerDNSCheck({
          applicationID,
          // Whitespace-only path segment trips input validation (400)
          // before the resource lookup.
          domainIDOrName: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformTriggerDNSCheck({
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

        const error = yield* PlatformTriggerDNSCheck({
          applicationID,
          domainIDOrName: NON_EXISTENT_DOMAIN,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns Conflict when a DNS check is already in flight or was recently performed", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, domainID } = yield* pickAppAndDomain;

        // Prime the cooldown / in-flight job. The outcome of this call
        // isn't asserted - it may succeed or already conflict depending
        // on prior trigger activity. Effect.either reifies the result so
        // we don't swallow it silently, we just don't gate on it.
        yield* PlatformTriggerDNSCheck({
          applicationID,
          domainIDOrName: domainID,
        }).pipe(Effect.either);

        // A subsequent trigger immediately afterwards must hit the
        // documented "at most one in-flight check" guard.
        const error = yield* PlatformTriggerDNSCheck({
          applicationID,
          domainIDOrName: domainID,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Conflict");
      }),
    );
  });
});
