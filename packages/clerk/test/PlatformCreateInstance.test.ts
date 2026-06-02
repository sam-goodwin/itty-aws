import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCreateApplication } from "../src/operations/platform/PlatformCreateApplication";
import { PlatformCreateInstance } from "../src/operations/platform/PlatformCreateInstance";
import { PlatformDeleteApplication } from "../src/operations/platform/PlatformDeleteApplication";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;

const appName = (suffix: string): string =>
  `distilled-clerk-instance-${suffix}-${testRunId}`;

const happyDomain = (suffix: string): string =>
  `prod-${suffix}-${testRunId}.example.com`;

/**
 * Provision a fresh application for the duration of `testFn`. The application
 * (and any production instance created under it) is removed via
 * `PlatformDeleteApplication` afterwards so test runs don't accumulate
 * orphaned resources on the Platform account.
 */
const withFreshApplication = <A, E, R>(
  suffix: string,
  testFn: (applicationID: string) => Effect.Effect<A, E, R>,
) =>
  Effect.gen(function* () {
    const created = yield* PlatformCreateApplication({
      name: appName(suffix),
    });
    return yield* testFn(created.application_id).pipe(
      Effect.ensuring(
        PlatformDeleteApplication({
          applicationID: created.application_id,
        }).pipe(Effect.ignore),
      ),
    );
  });

describe("PlatformCreateInstance", () => {
  it("creates a production instance on a fresh application", async () => {
    await runEffect(
      withFreshApplication("happy", (applicationID) =>
        Effect.gen(function* () {
          const instance = yield* PlatformCreateInstance({
            applicationID,
            domain: happyDomain("happy"),
            environment_type: "production",
          });

          expect(instance.object).toBe("instance");
          expect(instance.id).toMatch(/.+/);
          expect(instance.environment_type).toBe("production");
          expect(instance.active_domain.object).toBe("domain");
          expect(instance.active_domain.name).toMatch(/.+/);
          expect(instance.active_domain.frontend_api_url).toMatch(/.+/);
          expect(instance.publishable_key).toMatch(/.+/);
          expect(typeof instance.created_at).toBe("number");
          expect(typeof instance.updated_at).toBe("number");
        }),
      ),
    );
  });

  it("returns BadRequest when the domain is empty", async () => {
    await runEffect(
      withFreshApplication("bad-request", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformCreateInstance({
            applicationID,
            domain: "",
            environment_type: "production",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("BadRequest");
        }),
      ),
    );
  });

  it("returns UnprocessableEntity for a malformed domain", async () => {
    await runEffect(
      withFreshApplication("unproc", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformCreateInstance({
            applicationID,
            domain: "not a real domain",
            environment_type: "production",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("UnprocessableEntity");
        }),
      ),
    );
  });

  it("returns PaymentRequired when the workspace plan does not allow production instances", async () => {
    await runEffect(
      withFreshApplication("payment", (applicationID) =>
        Effect.gen(function* () {
          // Production instance creation is a paid plan feature on Clerk.
          // Workspaces without a qualifying plan receive 402 Payment Required.
          const error = yield* PlatformCreateInstance({
            applicationID,
            domain: happyDomain("payment"),
            environment_type: "production",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("PaymentRequired");
        }),
      ),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCreateInstance({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          domain: happyDomain("forbidden"),
          environment_type: "production",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for an application id that does not exist", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCreateInstance({
          applicationID: NON_EXISTENT_APP,
          domain: happyDomain("not-found"),
          environment_type: "production",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
