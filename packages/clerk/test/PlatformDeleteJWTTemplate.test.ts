import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createJWTTemplate as PlatformCreateJWTTemplate } from "../src/operations/platform/jwtTemplates/createJWTTemplate";
import { deleteJWTTemplate as PlatformDeleteJWTTemplate } from "../src/operations/platform/jwtTemplates/deleteJWTTemplate";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_TEMPLATE = `jtmpl_does_not_exist_${testRunId}`;

const templateName = (suffix: string): string =>
  `distilled-clerk-deljwt-${suffix}-${testRunId}`;

const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformDeleteJWTTemplate",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformDeleteJWTTemplate`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformDeleteJWTTemplate", () => {
  it("deletes a JWT template that was just created", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const created = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID,
          name: templateName("happy"),
          claims: { foo: "bar" },
        });

        const result = yield* PlatformDeleteJWTTemplate({
          applicationID,
          envOrInsID,
          templateID: created.id,
        });

        expect(result.deleted).toBe(true);
        expect(result.id).toBe(created.id);
        expect(typeof result.object).toBe("string");
      }),
    );
  });

  it("returns BadRequest for a malformed template id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformDeleteJWTTemplate({
          applicationID,
          envOrInsID,
          // Whitespace-only path segment trips input validation (400)
          // before the resource lookup.
          templateID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformDeleteJWTTemplate({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
          templateID: NON_EXISTENT_TEMPLATE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a template id that does not exist on a real instance", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformDeleteJWTTemplate({
          applicationID,
          envOrInsID,
          templateID: NON_EXISTENT_TEMPLATE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
