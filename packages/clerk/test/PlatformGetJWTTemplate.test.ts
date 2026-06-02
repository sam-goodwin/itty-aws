import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createJWTTemplate as PlatformCreateJWTTemplate } from "../src/operations/platform/jwtTemplates/createJWTTemplate";
import { deleteJWTTemplate as PlatformDeleteJWTTemplate } from "../src/operations/platform/jwtTemplates/deleteJWTTemplate";
import { getJWTTemplate as PlatformGetJWTTemplate } from "../src/operations/platform/jwtTemplates/getJWTTemplate";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_TEMPLATE = `jtmpl_does_not_exist_${testRunId}`;

const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformGetJWTTemplate",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformGetJWTTemplate`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformGetJWTTemplate", () => {
  it("fetches an existing JWT template by id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const created = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID,
          name: `get-jwt-${testRunId}`,
          claims: { sub: "{{user.id}}" },
        });

        yield* Effect.gen(function* () {
          const result = yield* PlatformGetJWTTemplate({
            applicationID,
            envOrInsID,
            templateID: created.id,
          });

          expect(result.object).toBe("jwt_template");
          expect(result.id).toBe(created.id);
          expect(result.name).toBe(`get-jwt-${testRunId}`);
          expect(typeof result.lifetime).toBe("number");
          expect(typeof result.allowed_clock_skew).toBe("number");
          expect(typeof result.custom_signing_key).toBe("boolean");
          expect(typeof result.signing_algorithm).toBe("string");
          expect(typeof result.created_at).toBe("number");
          expect(typeof result.updated_at).toBe("number");
        }).pipe(
          Effect.ensuring(
            PlatformDeleteJWTTemplate({
              applicationID,
              envOrInsID,
              templateID: created.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("returns BadRequest for a malformed template id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformGetJWTTemplate({
          applicationID,
          envOrInsID,
          // Whitespace-only path segment trips Clerk's input validation
          // (400) before the resource lookup.
          templateID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformGetJWTTemplate({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
          templateID: NON_EXISTENT_TEMPLATE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a non-existent template id on a real instance", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformGetJWTTemplate({
          applicationID,
          envOrInsID,
          templateID: NON_EXISTENT_TEMPLATE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
