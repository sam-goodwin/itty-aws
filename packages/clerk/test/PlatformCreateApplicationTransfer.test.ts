import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCancelApplicationTransfer } from "../src/operations/platform/PlatformCancelApplicationTransfer";
import { PlatformCreateApplicationTransfer } from "../src/operations/platform/PlatformCreateApplicationTransfer";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;

/**
 * Pick the first application available on the Platform account. Used for both
 * happy-path and Conflict-path tests (Clerk allows only one pending transfer
 * per application).
 */
const pickApplication = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformCreateApplicationTransfer",
      ),
    );
  }
  return app.application_id;
});

describe("PlatformCreateApplicationTransfer", () => {
  it("creates a pending transfer for an owned application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const applicationID = yield* pickApplication;

        const transfer = yield* PlatformCreateApplicationTransfer({
          applicationID,
        });

        yield* Effect.gen(function* () {
          expect(transfer.object).toBe("application_transfer");
          expect(transfer.id).toMatch(/.+/);
          expect(transfer.code).toMatch(/.+/);
          expect(transfer.application_id).toBe(applicationID);
          expect(transfer.status).toBe("pending");
          expect(transfer.expires_at).toMatch(/.+/);
          expect(transfer.created_at).toMatch(/.+/);
          expect(transfer.canceled_at).toBeNull();
          expect(transfer.completed_at).toBeNull();
        }).pipe(
          Effect.ensuring(
            PlatformCancelApplicationTransfer({
              applicationID,
              transferID: transfer.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("returns Conflict when a pending transfer already exists for the application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const applicationID = yield* pickApplication;

        const first = yield* PlatformCreateApplicationTransfer({
          applicationID,
        });

        yield* Effect.gen(function* () {
          const error = yield* PlatformCreateApplicationTransfer({
            applicationID,
          }).pipe(Effect.flip);

          expect(error._tag).toBe("Conflict");
        }).pipe(
          Effect.ensuring(
            PlatformCancelApplicationTransfer({
              applicationID,
              transferID: first.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCreateApplicationTransfer({
          applicationID: NON_EXISTENT_APP,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });
});
