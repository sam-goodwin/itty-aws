import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCreateRedirectURL } from "../src/operations/platform/PlatformCreateRedirectURL";
import { PlatformDeleteRedirectURL } from "../src/operations/platform/PlatformDeleteRedirectURL";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_REDIRECT = `ru_does_not_exist_${testRunId}`;

const redirectURL = (suffix: string): string =>
  `https://distilled-clerk-${suffix}-${testRunId}.example.com/oauth/callback`;

/**
 * Pick the first application/instance available on the Platform account.
 */
const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformDeleteRedirectURL",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformDeleteRedirectURL`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformDeleteRedirectURL", () => {
  it("deletes a redirect URL that was just created", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const created = yield* PlatformCreateRedirectURL({
          applicationID,
          envOrInsID,
          url: redirectURL("happy"),
        });

        const result = yield* PlatformDeleteRedirectURL({
          applicationID,
          envOrInsID,
          redirectURLID: created.id,
        });

        expect(result.deleted).toBe(true);
        expect(result.id).toBe(created.id);
        expect(typeof result.object).toBe("string");
      }),
    );
  });

  it("returns BadRequest for a malformed redirect URL identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformDeleteRedirectURL({
          applicationID,
          envOrInsID,
          // Whitespace-only path segment trips input validation (400)
          // before the resource lookup.
          redirectURLID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformDeleteRedirectURL({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
          redirectURLID: NON_EXISTENT_REDIRECT,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a redirect URL id that does not exist on a real instance", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformDeleteRedirectURL({
          applicationID,
          envOrInsID,
          redirectURLID: NON_EXISTENT_REDIRECT,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
