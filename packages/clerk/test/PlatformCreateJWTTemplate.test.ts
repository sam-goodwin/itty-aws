import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCreateJWTTemplate } from "../src/operations/platform/PlatformCreateJWTTemplate";
import { PlatformDeleteJWTTemplate } from "../src/operations/platform/PlatformDeleteJWTTemplate";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_INSTANCE = `ins_does_not_exist_${testRunId}`;

const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformCreateJWTTemplate",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformCreateJWTTemplate`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformCreateJWTTemplate", () => {
  it("creates a new JWT template on an existing instance", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;
        const name = `create-jwt-${testRunId}`;

        let createdID: string | undefined;
        yield* Effect.gen(function* () {
          const result = yield* PlatformCreateJWTTemplate({
            applicationID,
            envOrInsID,
            name,
            claims: { sub: "{{user.id}}" },
          });
          createdID = result.id;

          expect(result.object).toBe("jwt_template");
          expect(typeof result.id).toBe("string");
          expect(result.name).toBe(name);
          expect(typeof result.lifetime).toBe("number");
          expect(typeof result.allowed_clock_skew).toBe("number");
          expect(typeof result.custom_signing_key).toBe("boolean");
          expect(typeof result.signing_algorithm).toBe("string");
          expect(typeof result.created_at).toBe("number");
          expect(typeof result.updated_at).toBe("number");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdID
                ? PlatformDeleteJWTTemplate({
                    applicationID,
                    envOrInsID,
                    templateID: createdID,
                  }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
        );
      }),
    );
  });

  it("returns BadRequest for a malformed environment/instance identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformCreateJWTTemplate({
          applicationID,
          // Whitespace-only path segment trips Clerk's input validation
          // (400) before any resource lookup.
          envOrInsID: " ",
          name: `bad-jwt-${testRunId}`,
          claims: { sub: "{{user.id}}" },
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns PaymentRequired when supplying a custom signing key on a non-eligible plan", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID,
          name: `pay-jwt-${testRunId}`,
          claims: { sub: "{{user.id}}" },
          // custom_signing_key + a user-supplied signing key is gated
          // behind paid plans on Clerk's default tiers.
          custom_signing_key: true,
          signing_algorithm: "HS256",
          signing_key: "a".repeat(64),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("PaymentRequired");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCreateJWTTemplate({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
          name: `forbidden-jwt-${testRunId}`,
          claims: { sub: "{{user.id}}" },
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a non-existent instance on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID: NON_EXISTENT_INSTANCE,
          name: `notfound-jwt-${testRunId}`,
          claims: { sub: "{{user.id}}" },
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns UnprocessableEntity when creating a template with a duplicate name", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;
        const name = `dup-jwt-${testRunId}`;

        const first = yield* PlatformCreateJWTTemplate({
          applicationID,
          envOrInsID,
          name,
          claims: { sub: "{{user.id}}" },
        });

        yield* Effect.gen(function* () {
          const error = yield* PlatformCreateJWTTemplate({
            applicationID,
            envOrInsID,
            name,
            claims: { sub: "{{user.id}}" },
          }).pipe(Effect.flip);

          expect(error._tag).toBe("UnprocessableEntity");
        }).pipe(
          Effect.ensuring(
            PlatformDeleteJWTTemplate({
              applicationID,
              envOrInsID,
              templateID: first.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });
});
