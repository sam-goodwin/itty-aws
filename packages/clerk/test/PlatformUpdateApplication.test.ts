import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCreateApplication } from "../src/operations/platform/PlatformCreateApplication";
import { PlatformDeleteApplication } from "../src/operations/platform/PlatformDeleteApplication";
import { PlatformUpdateApplication } from "../src/operations/platform/PlatformUpdateApplication";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;

const appName = (suffix: string): string =>
  `distilled-clerk-updateapp-${suffix}-${testRunId}`;

const withFreshApplication = <A, E, R>(
  suffix: string,
  testFn: (applicationID: string) => Effect.Effect<A, E, R>,
) =>
  Effect.gen(function* () {
    const created = yield* PlatformCreateApplication({
      name: appName(`${suffix}-orig`),
    });
    return yield* testFn(created.application_id).pipe(
      Effect.ensuring(
        PlatformDeleteApplication({
          applicationID: created.application_id,
        }).pipe(Effect.ignore),
      ),
    );
  });

describe("PlatformUpdateApplication", () => {
  it("renames an existing application", async () => {
    await runEffect(
      withFreshApplication("happy", (applicationID) =>
        Effect.gen(function* () {
          const renamed = appName("happy-renamed");
          const updated = yield* PlatformUpdateApplication({
            applicationID,
            name: renamed,
          });

          expect(updated.application_id).toBe(applicationID);
          expect(updated.name).toBe(renamed);
          expect(Array.isArray(updated.instances)).toBe(true);
          for (const instance of updated.instances) {
            expect(typeof instance.instance_id).toBe("string");
            expect(["development", "production"]).toContain(
              instance.environment_type,
            );
          }
        }),
      ),
    );
  });

  it("returns BadRequest when the name is empty", async () => {
    await runEffect(
      withFreshApplication("bad-request", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformUpdateApplication({
            applicationID,
            name: "",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("BadRequest");
        }),
      ),
    );
  });

  it("returns UnprocessableEntity for a name that exceeds the allowed length", async () => {
    await runEffect(
      withFreshApplication("unproc", (applicationID) =>
        Effect.gen(function* () {
          // Clerk caps application names well below 10k characters; this
          // value is far beyond any reasonable limit so the server must
          // reject it as semantically invalid.
          const oversized = "x".repeat(10_000);
          const error = yield* PlatformUpdateApplication({
            applicationID,
            name: oversized,
          }).pipe(Effect.flip);

          expect(error._tag).toBe("UnprocessableEntity");
        }),
      ),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformUpdateApplication({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          name: appName("forbidden"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for an application id that does not exist", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformUpdateApplication({
          applicationID: NON_EXISTENT_APP,
          name: appName("not-found"),
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
