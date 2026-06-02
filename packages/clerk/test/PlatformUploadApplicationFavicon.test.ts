import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createApplication as PlatformCreateApplication } from "../src/operations/platform/applications/createApplication";
import { deleteApplication as PlatformDeleteApplication } from "../src/operations/platform/applications/deleteApplication";
import { uploadApplicationFavicon as PlatformUploadApplicationFavicon } from "../src/operations/platform/applications/uploadApplicationFavicon";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;

const appName = (suffix: string): string =>
  `distilled-clerk-upfav-${suffix}-${testRunId}`;

/**
 * Minimal valid 1x1 transparent PNG (67 bytes). Decoded from the canonical
 * smallest-PNG byte sequence and represented as a binary string so it can be
 * passed through `file: Schema.String`.
 */
const TINY_PNG_BYTES = new Uint8Array([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d, 0x49,
  0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x08, 0x06,
  0x00, 0x00, 0x00, 0x1f, 0x15, 0xc4, 0x89, 0x00, 0x00, 0x00, 0x0d, 0x49, 0x44,
  0x41, 0x54, 0x78, 0x9c, 0x62, 0x00, 0x01, 0x00, 0x00, 0x05, 0x00, 0x01, 0x0d,
  0x0a, 0x2d, 0xb4, 0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42,
  0x60, 0x82,
]);
const TINY_PNG = String.fromCharCode(...TINY_PNG_BYTES);

/**
 * Roughly 11 MB string used to provoke PayloadTooLarge. Clerk's image upload
 * endpoints cap body size at 10 MB.
 */
const OVERSIZED_FILE = "x".repeat(11 * 1024 * 1024);

/**
 * Provision a fresh application for the duration of `testFn`, then delete it
 * afterwards so uploaded favicons and the app itself don't accumulate.
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

describe("PlatformUploadApplicationFavicon", () => {
  it("uploads a favicon to a fresh application", async () => {
    await runEffect(
      withFreshApplication("happy", (applicationID) =>
        Effect.gen(function* () {
          const result = yield* PlatformUploadApplicationFavicon({
            applicationID,
            file: TINY_PNG,
          });

          expect(result.application_id).toBe(applicationID);
          expect(typeof result.name).toBe("string");
          expect(Array.isArray(result.instances)).toBe(true);
          expect(result.instances.length).toBeGreaterThan(0);
          for (const instance of result.instances) {
            expect(typeof instance.instance_id).toBe("string");
            expect(["development", "production"]).toContain(
              instance.environment_type,
            );
          }
        }),
      ),
    );
  });

  it("returns BadRequest when the file field is empty", async () => {
    await runEffect(
      withFreshApplication("bad-request", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformUploadApplicationFavicon({
            applicationID,
            file: "",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("BadRequest");
        }),
      ),
    );
  });

  it("returns UnprocessableEntity when the file is not a valid image", async () => {
    await runEffect(
      withFreshApplication("unproc", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformUploadApplicationFavicon({
            applicationID,
            file: "this is plain text, definitely not an image",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("UnprocessableEntity");
        }),
      ),
    );
  });

  it("returns PayloadTooLarge when the file exceeds the size limit", async () => {
    await runEffect(
      withFreshApplication("too-large", (applicationID) =>
        Effect.gen(function* () {
          const error = yield* PlatformUploadApplicationFavicon({
            applicationID,
            file: OVERSIZED_FILE,
          }).pipe(Effect.flip);

          expect(error._tag).toBe("PayloadTooLarge");
        }),
      ),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformUploadApplicationFavicon({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          file: TINY_PNG,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for an application id that does not exist", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformUploadApplicationFavicon({
          applicationID: NON_EXISTENT_APP,
          file: TINY_PNG,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
