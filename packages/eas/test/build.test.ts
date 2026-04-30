import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials.ts";
import { build } from "../src/operations/build.ts";
import { runEffect, testRunId } from "./setup.ts";

// Layer that injects an obviously invalid bearer token to exercise the
// 401-style auth failure path through matchError.
const BadAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make(`invalid-token-${testRunId}`),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

// Layer that injects a syntactically-valid-looking but non-functional bearer
// token (proper PAT prefix). The EAS backend treats this as an actor token
// without the privilege to invoke build mutations and emits
// extensions.errorCode = UNAUTHORIZED_ERROR (→ EasUnauthorizedOperation).
const RestrictedAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make(
      `expo_00000000000000000000000000000000${testRunId}`,
    ),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

// A buildId that is well-formed but does not correspond to any real build
// in the actor's account. Tests that need a "valid-shape but missing"
// reference use this.
const missingBuildId = `00000000-0000-0000-0000-${testRunId.padStart(12, "0")}`;

describe("build", () => {
  it(
    "happy path - executes the build mutation and returns a cancel selection",
    async () => {
      const result = await runEffect(build({ buildId: missingBuildId }));
      expect(result).toBeDefined();
      expect(result.cancel).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "error - Unauthorized when called with an invalid bearer token",
    async () => {
      const error = await Effect.runPromise(
        build({ buildId: missingBuildId }).pipe(
          Effect.flip,
          Effect.provide(BadAuthLayer),
        ) as Effect.Effect<{ readonly _tag: string }, never, never>,
      );

      expect(error._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasValidationError when the GraphQL operation is rejected by the server",
    async () => {
      // Passing a buildId that fails server-side input validation (e.g. a
      // value that is not a recognized ID format) causes the EAS backend to
      // emit extensions.errorCode = VALIDATION_ERROR.
      const error = await runEffect(
        build({ buildId: `not-a-valid-build-id-${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("EasValidationError");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasBuildDownForMaintenance when the EAS Build service is in maintenance mode",
    async () => {
      // The EAS Build service signals planned/forced maintenance windows by
      // emitting extensions.errorCode = EAS_BUILD_DOWN_FOR_MAINTENANCE on
      // every build mutation while the window is active.
      const error = await runEffect(
        build({ buildId: missingBuildId }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasBuildDownForMaintenance");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasBuildFreeTierDisabled when free-tier builds are disabled for the account",
    async () => {
      // Accounts with the free build tier administratively disabled receive
      // extensions.errorCode = EAS_BUILD_FREE_TIER_DISABLED on every attempt
      // to create or operate on a build.
      const error = await runEffect(
        build({ buildId: missingBuildId }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasBuildFreeTierDisabled");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasBuildFreeTierLimitExceeded when the free-tier build allowance is exhausted",
    async () => {
      // Once an account has consumed its monthly free-tier build allowance
      // the EAS backend emits extensions.errorCode =
      // EAS_BUILD_FREE_TIER_LIMIT_EXCEEDED on subsequent build operations.
      const error = await runEffect(
        build({ buildId: missingBuildId }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasBuildFreeTierLimitExceeded");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasBuildTooManyPendingBuilds when the actor has too many queued builds",
    async () => {
      // Concurrency throttling: when an account already has the maximum
      // permitted number of pending builds in the queue, the EAS backend
      // emits extensions.errorCode = EAS_BUILD_TOO_MANY_PENDING_BUILDS.
      const error = await runEffect(
        build({ buildId: missingBuildId }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasBuildTooManyPendingBuilds");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasBuildResourceClassNotAvailableInFreeTier when a paid resource class is requested under the free tier",
    async () => {
      // Free-tier accounts that target a resource class only available on
      // paid plans receive extensions.errorCode =
      // EAS_BUILD_RESOURCE_CLASS_NOT_AVAILABLE_IN_FREE_TIER.
      const error = await runEffect(
        build({ buildId: missingBuildId }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasBuildResourceClassNotAvailableInFreeTier");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasBuildLegacyResourceClassNotAvailable when a deprecated legacy resource class is requested",
    async () => {
      // Builds that reference a legacy resource class which has been retired
      // are rejected with extensions.errorCode =
      // EAS_BUILD_LEGACY_RESOURCE_CLASS_NOT_AVAILABLE.
      const error = await runEffect(
        build({ buildId: missingBuildId }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasBuildLegacyResourceClassNotAvailable");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasDeprecatedJobFormat when the supplied job description uses a deprecated format",
    async () => {
      // Builds whose job description uses a legacy/retired schema version
      // are rejected with extensions.errorCode = EAS_DEPRECATED_JOB_FORMAT.
      const error = await runEffect(
        build({ buildId: missingBuildId }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasDeprecatedJobFormat");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasUnauthorizedOperation when the actor lacks permission to operate on the build",
    async () => {
      // A token that authenticates as a real actor but does not carry the
      // role/grant required to invoke the build mutation wrapper is rejected
      // with extensions.errorCode = UNAUTHORIZED_ERROR — distinct from a
      // missing/invalid token (HTTP 401 → Unauthorized).
      const error = await Effect.runPromise(
        build({ buildId: missingBuildId }).pipe(
          Effect.flip,
          Effect.provide(RestrictedAuthLayer),
        ) as Effect.Effect<{ readonly _tag: string }, never, never>,
      );

      expect(error._tag).toBe("EasUnauthorizedOperation");
    },
    { timeout: 30_000 },
  );
});
