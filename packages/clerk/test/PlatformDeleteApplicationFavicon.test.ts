import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformDeleteApplicationFavicon } from "../src/operations/platform/PlatformDeleteApplicationFavicon";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

// Reasonably-formed-but-fake IDs used to provoke specific 4xx responses.
const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;
const MALFORMED_APP = `bad id ${testRunId}`;

/**
 * Pick the first application available on the Platform account. We need a real
 * application to exercise the happy path; deleting the favicon on a test app
 * is fine because the operation is idempotent and only clears the favicon
 * field.
 */
const pickApplication = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformDeleteApplicationFavicon",
      ),
    );
  }
  return app;
});

describe("PlatformDeleteApplicationFavicon", () => {
  it("clears the favicon on an owned application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const app = yield* pickApplication;

        const result = yield* PlatformDeleteApplicationFavicon({
          applicationID: app.application_id,
        });

        expect(result.application_id).toBe(app.application_id);
        expect(typeof result.name).toBe("string");
        expect(Array.isArray(result.instances)).toBe(true);
        // Every application has at least one instance (development or production).
        expect(result.instances.length).toBeGreaterThan(0);
        for (const instance of result.instances) {
          expect(typeof instance.instance_id).toBe("string");
          expect(["development", "production"]).toContain(
            instance.environment_type,
          );
        }
      }),
    );
  });

  it("returns NotFound for an application id that does not exist", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformDeleteApplicationFavicon({
          applicationID: NON_EXISTENT_APP,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns Forbidden when the caller has no access to the application", async () => {
    await runEffect(
      Effect.gen(function* () {
        // A well-formed but foreign application id triggers an authorization
        // failure rather than a 404 - Clerk distinguishes scope-rejected ids
        // from id-shape rejections.
        const error = yield* PlatformDeleteApplicationFavicon({
          applicationID: `app_2ForeignApplicationOwnedBySomeoneElse${testRunId}`,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns BadRequest for a malformed application id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformDeleteApplicationFavicon({
          applicationID: MALFORMED_APP,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });
});
