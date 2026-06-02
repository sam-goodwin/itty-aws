import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformGetConfig } from "../src/operations/platform/PlatformGetConfig";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;
const NON_EXISTENT_INSTANCE = `ins_does_not_exist_${testRunId}`;

const pickApplication = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformGetConfig",
      ),
    );
  }
  return app;
});

describe("PlatformGetConfig", () => {
  it("returns the development instance config for an existing application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const app = yield* pickApplication;

        const result = yield* PlatformGetConfig({
          applicationID: app.application_id,
          envOrInsID: "development",
        });

        // The output schema only guarantees an optional config_version.
        // Assert the envelope shape without requiring it.
        expect(typeof result).toBe("object");
        if (result.config_version !== undefined) {
          expect(typeof result.config_version).toBe("string");
        }
      }),
    );
  });

  it("returns BadRequest for a malformed environment/instance identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const app = yield* pickApplication;

        const error = yield* PlatformGetConfig({
          applicationID: app.application_id,
          // Whitespace-only path segment trips Clerk's input validation
          // before any resource lookup.
          envOrInsID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformGetConfig({
          applicationID: NON_EXISTENT_APP,
          envOrInsID: "development",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a non-existent instance on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const app = yield* pickApplication;

        const error = yield* PlatformGetConfig({
          applicationID: app.application_id,
          envOrInsID: NON_EXISTENT_INSTANCE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
