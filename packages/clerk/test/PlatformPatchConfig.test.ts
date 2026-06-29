import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { patchConfig as PlatformPatchConfig } from "../src/operations/platform/config/patchConfig";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_INSTANCE = `ins_does_not_exist_${testRunId}`;

const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformPatchConfig",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformPatchConfig`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformPatchConfig", () => {
  it("previews a config patch via dry_run on an existing instance", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const result = yield* PlatformPatchConfig({
          applicationID,
          envOrInsID,
          dry_run: true,
        });

        // Output envelope is fully optional; assert shape where present.
        expect(typeof result).toBe("object");
        if (result.config_version !== undefined) {
          expect(typeof result.config_version).toBe("string");
        }
        if (result.dry_run !== undefined) {
          expect(typeof result.dry_run).toBe("boolean");
        }
        if (result.before !== undefined) {
          expect(typeof result.before).toBe("object");
        }
        if (result.after !== undefined) {
          expect(typeof result.after).toBe("object");
        }
      }),
    );
  });

  it("returns BadRequest for a malformed environment/instance identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformPatchConfig({
          applicationID,
          // Whitespace-only path segment trips Clerk's input validation
          // (400) before the resource lookup.
          envOrInsID: " ",
          dry_run: true,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns PaymentRequired when attempting a destructive patch that requires a paid plan", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformPatchConfig({
          applicationID,
          envOrInsID,
          // Destructive patches (clearing config keys via null) are
          // gated behind paid plans on Clerk's default tiers.
          destructive: true,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("PaymentRequired");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformPatchConfig({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
          dry_run: true,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a non-existent instance on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformPatchConfig({
          applicationID,
          envOrInsID: NON_EXISTENT_INSTANCE,
          dry_run: true,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns Conflict when the submitted config version is stale", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        // Clerk's PATCH enforces optimistic concurrency via the config
        // version. Submitting back-to-back patches without a fresh
        // version produces a 409 on the second call.
        yield* PlatformPatchConfig({
          applicationID,
          envOrInsID,
          dry_run: true,
        }).pipe(Effect.either);

        const error = yield* PlatformPatchConfig({
          applicationID,
          envOrInsID,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Conflict");
      }),
    );
  });

  it("returns UnprocessableEntity when dry_run and destructive flags conflict semantically", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        // Combining dry_run preview with destructive clearing is a
        // semantic contradiction Clerk surfaces as 422.
        const error = yield* PlatformPatchConfig({
          applicationID,
          envOrInsID,
          dry_run: true,
          destructive: true,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("UnprocessableEntity");
      }),
    );
  });
});
