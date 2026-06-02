import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformGetApplicationDomain } from "../src/operations/platform/PlatformGetApplicationDomain";
import { PlatformListApplicationDomains } from "../src/operations/platform/PlatformListApplicationDomains";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;
const NON_EXISTENT_DOMAIN = `dmn_does_not_exist_${testRunId}`;

const pickAppAndDomain = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformGetApplicationDomain",
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
        `Application ${app.application_id} has no domains - cannot test PlatformGetApplicationDomain`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    domainID: domain.id,
  };
});

describe("PlatformGetApplicationDomain", () => {
  it("fetches an application domain by id and returns the full envelope", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, domainID } = yield* pickAppAndDomain;

        const result = yield* PlatformGetApplicationDomain({
          applicationID,
          domainIDOrName: domainID,
        });

        expect(result.object).toBe("domain");
        expect(result.id).toBe(domainID);
        expect(typeof result.name).toBe("string");
        expect(typeof result.frontend_api_url).toBe("string");
        expect(typeof result.development_origin).toBe("string");
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.updated_at).toBe("string");

        if (result.application) {
          expect(result.application.object).toBe("application");
          expect(typeof result.application.id).toBe("string");
        }
        if (result.instance) {
          expect(result.instance.object).toBe("instance");
          expect(["production", "development"]).toContain(
            result.instance.environment_type,
          );
        }
      }),
    );
  });

  it("returns BadRequest for a malformed domain identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndDomain;

        const error = yield* PlatformGetApplicationDomain({
          applicationID,
          // Whitespace-only path segment trips Clerk's input validation
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
        const error = yield* PlatformGetApplicationDomain({
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

        const error = yield* PlatformGetApplicationDomain({
          applicationID,
          domainIDOrName: NON_EXISTENT_DOMAIN,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
