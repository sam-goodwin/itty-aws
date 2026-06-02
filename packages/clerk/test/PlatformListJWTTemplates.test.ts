import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { listJWTTemplates as PlatformListJWTTemplates } from "../src/operations/platform/jwtTemplates/listJWTTemplates";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_INSTANCE = `ins_does_not_exist_${testRunId}`;

const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformListJWTTemplates",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformListJWTTemplates`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformListJWTTemplates", () => {
  it("lists JWT templates for an existing application instance", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const result = yield* PlatformListJWTTemplates({
          applicationID,
          envOrInsID,
        });

        expect(Array.isArray(result)).toBe(true);

        for (const template of result) {
          expect(template.object).toBe("jwt_template");
          expect(typeof template.id).toBe("string");
          expect(typeof template.name).toBe("string");
          expect(typeof template.lifetime).toBe("number");
          expect(typeof template.allowed_clock_skew).toBe("number");
          expect(typeof template.custom_signing_key).toBe("boolean");
          expect(typeof template.signing_algorithm).toBe("string");
          expect(typeof template.created_at).toBe("number");
          expect(typeof template.updated_at).toBe("number");
        }
      }),
    );
  });

  it("returns BadRequest for a malformed environment/instance identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformListJWTTemplates({
          applicationID,
          // Whitespace-only path segment trips Clerk's input validation
          // (400) before the resource lookup.
          envOrInsID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformListJWTTemplates({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a non-existent instance on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformListJWTTemplates({
          applicationID,
          envOrInsID: NON_EXISTENT_INSTANCE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
