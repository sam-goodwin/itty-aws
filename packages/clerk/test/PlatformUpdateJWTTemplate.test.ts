import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCreateJWTTemplate } from "../src/operations/platform/PlatformCreateJWTTemplate";
import { PlatformDeleteJWTTemplate } from "../src/operations/platform/PlatformDeleteJWTTemplate";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { PlatformUpdateJWTTemplate } from "../src/operations/platform/PlatformUpdateJWTTemplate";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;
const NON_EXISTENT_TEMPLATE = `jtmpl_does_not_exist_${testRunId}`;

const templateName = (suffix: string): string =>
  `distilled-clerk-jwt-${suffix}-${testRunId}`;

/**
 * Pick the first application/instance available on the Platform account.
 * Every Platform API token has at least one app+instance to act on.
 */
const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformUpdateJWTTemplate",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformUpdateJWTTemplate`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformUpdateJWTTemplate", () => {
  it("updates an existing JWT template", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const created = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID,
          name: templateName("happy-orig"),
          claims: { foo: "bar" },
        });

        yield* Effect.gen(function* () {
          const newName = templateName("happy-renamed");
          const updated = yield* PlatformUpdateJWTTemplate({
            applicationID,
            envOrInsID,
            templateID: created.id,
            name: newName,
            claims: { baz: "qux" },
            lifetime: 600,
          });

          expect(updated.object).toBe("jwt_template");
          expect(updated.id).toBe(created.id);
          expect(updated.name).toBe(newName);
          expect(updated.lifetime).toBe(600);
          expect(updated.updated_at).toBeGreaterThanOrEqual(created.updated_at);
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

  it("returns NotFound for a non-existent template id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;
        const error = yield* PlatformUpdateJWTTemplate({
          applicationID,
          envOrInsID,
          templateID: NON_EXISTENT_TEMPLATE,
          name: templateName("not-found"),
          claims: { foo: "bar" },
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformUpdateJWTTemplate({
          applicationID: NON_EXISTENT_APP,
          envOrInsID: "ins_does_not_exist",
          templateID: NON_EXISTENT_TEMPLATE,
          name: templateName("forbidden"),
          claims: { foo: "bar" },
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns BadRequest when the name is empty", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const created = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID,
          name: templateName("bad-request"),
          claims: { foo: "bar" },
        });

        yield* Effect.gen(function* () {
          const error = yield* PlatformUpdateJWTTemplate({
            applicationID,
            envOrInsID,
            templateID: created.id,
            name: "",
            claims: { foo: "bar" },
          }).pipe(Effect.flip);

          expect(error._tag).toBe("BadRequest");
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

  it("returns UnprocessableEntity for an invalid signing algorithm", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const created = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID,
          name: templateName("unproc"),
          claims: { foo: "bar" },
        });

        yield* Effect.gen(function* () {
          const error = yield* PlatformUpdateJWTTemplate({
            applicationID,
            envOrInsID,
            templateID: created.id,
            name: templateName("unproc"),
            claims: { foo: "bar" },
            signing_algorithm: "NOT_A_REAL_ALGORITHM",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("UnprocessableEntity");
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

  it("returns PaymentRequired when a paid-only feature is requested without a qualifying plan", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const created = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID,
          name: templateName("payment"),
          claims: { foo: "bar" },
        });

        yield* Effect.gen(function* () {
          // Toggling `custom_signing_key` on is a paid plan feature on Clerk;
          // on a non-paid instance the API responds with 402 Payment Required.
          const error = yield* PlatformUpdateJWTTemplate({
            applicationID,
            envOrInsID,
            templateID: created.id,
            name: templateName("payment"),
            claims: { foo: "bar" },
            custom_signing_key: true,
            signing_algorithm: "HS256",
            signing_key: "test-signing-key-only-for-422-or-402-discrimination",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("PaymentRequired");
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
});
