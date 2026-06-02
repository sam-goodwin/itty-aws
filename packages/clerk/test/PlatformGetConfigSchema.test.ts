import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformGetConfigSchema } from "../src/operations/platform/PlatformGetConfigSchema";
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
        "PlatformListApplications returned no applications - cannot test PlatformGetConfigSchema",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformGetConfigSchema`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformGetConfigSchema", () => {
  it("returns the JSON Schema for an existing application instance config", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const result = yield* PlatformGetConfigSchema({
          applicationID,
          envOrInsID,
        });

        expect(typeof result).toBe("object");
        if (result.$schema !== undefined) {
          expect(typeof result.$schema).toBe("string");
        }
        if (result.$id !== undefined) {
          expect(typeof result.$id).toBe("string");
        }
        if (result.type !== undefined) {
          expect(typeof result.type).toBe("string");
        }
        if (result.properties !== undefined) {
          expect(typeof result.properties).toBe("object");
        }
      }),
    );
  });

  it("returns BadRequest for a malformed environment/instance identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformGetConfigSchema({
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
        const error = yield* PlatformGetConfigSchema({
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

        const error = yield* PlatformGetConfigSchema({
          applicationID,
          envOrInsID: NON_EXISTENT_INSTANCE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
