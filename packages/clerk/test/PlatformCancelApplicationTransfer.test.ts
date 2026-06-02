import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCancelApplicationTransfer } from "../src/operations/platform/PlatformCancelApplicationTransfer";
import { PlatformCreateApplicationTransfer } from "../src/operations/platform/PlatformCreateApplicationTransfer";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_APP = `app_does_not_exist_${testRunId}`;
const NON_EXISTENT_TRANSFER = `atrn_does_not_exist_${testRunId}`;

/**
 * Pick the first application available on the Platform account. Application
 * transfers are scoped to a specific application, so we need a real one.
 */
const pickApplication = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformCancelApplicationTransfer",
      ),
    );
  }
  return app.application_id;
});

describe("PlatformCancelApplicationTransfer", () => {
  it("cancels a pending transfer", async () => {
    await runEffect(
      Effect.gen(function* () {
        const applicationID = yield* pickApplication;
        const created = yield* PlatformCreateApplicationTransfer({
          applicationID,
        });

        const canceled = yield* PlatformCancelApplicationTransfer({
          applicationID,
          transferID: created.id,
        });

        expect(canceled.object).toBe("application_transfer");
        expect(canceled.id).toBe(created.id);
        expect(canceled.application_id).toBe(applicationID);
        expect(canceled.status).toBe("canceled");
        expect(canceled.canceled_at).not.toBeNull();
        expect(canceled.completed_at).toBeNull();
      }),
    );
  });

  it("returns NotFound for a non-existent transfer id on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const applicationID = yield* pickApplication;
        const error = yield* PlatformCancelApplicationTransfer({
          applicationID,
          transferID: NON_EXISTENT_TRANSFER,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformCancelApplicationTransfer({
          applicationID: NON_EXISTENT_APP,
          transferID: NON_EXISTENT_TRANSFER,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns Conflict when canceling a transfer that is no longer pending", async () => {
    await runEffect(
      Effect.gen(function* () {
        const applicationID = yield* pickApplication;
        const created = yield* PlatformCreateApplicationTransfer({
          applicationID,
        });

        // First cancel succeeds and moves the transfer out of `pending`.
        yield* PlatformCancelApplicationTransfer({
          applicationID,
          transferID: created.id,
        });

        // Second cancel must fail because only pending transfers can be canceled.
        const error = yield* PlatformCancelApplicationTransfer({
          applicationID,
          transferID: created.id,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Conflict");
      }),
    );
  });
});
