import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformGetApplication } from "../src/operations/platform/PlatformGetApplication";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;
const NON_EXISTENT_FOREIGN_APP = `app_2ForeignApplicationOwnedBySomeoneElse${testRunId}`;
const MALFORMED_APP = `bad id ${testRunId}`;

/**
 * Pick the first application available on the Platform account. Every
 * Platform API token has at least one app to fetch.
 */
const pickApplication = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformGetApplication",
      ),
    );
  }
  return app;
});

describe("PlatformGetApplication", () => {
  it("returns details for an owned application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const app = yield* pickApplication;

        const result = yield* PlatformGetApplication({
          applicationID: app.application_id,
        });

        expect(result.application_id).toBe(app.application_id);
        expect(typeof result.name).toBe("string");
        expect(Array.isArray(result.instances)).toBe(true);
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
        const error = yield* PlatformGetApplication({
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
        const error = yield* PlatformGetApplication({
          applicationID: NON_EXISTENT_FOREIGN_APP,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns BadRequest for a malformed application id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformGetApplication({
          applicationID: MALFORMED_APP,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });
});
