import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformCancelApplicationTransfer } from "../src/operations/platform/PlatformCancelApplicationTransfer";
import { PlatformCreateApplicationTransfer } from "../src/operations/platform/PlatformCreateApplicationTransfer";
import { PlatformGetApplicationTransfer } from "../src/operations/platform/PlatformGetApplicationTransfer";
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
        "PlatformListApplications returned no applications - cannot test PlatformGetApplicationTransfer",
      ),
    );
  }
  return app.application_id;
});

describe("PlatformGetApplicationTransfer", () => {
  it("retrieves a transfer that was just created", async () => {
    await runEffect(
      Effect.gen(function* () {
        const applicationID = yield* pickApplication;
        const created = yield* PlatformCreateApplicationTransfer({
          applicationID,
        });

        yield* Effect.gen(function* () {
          const fetched = yield* PlatformGetApplicationTransfer({
            applicationID,
            transferID: created.id,
          });

          expect(fetched.object).toBe("application_transfer");
          expect(fetched.id).toBe(created.id);
          expect(fetched.code).toBe(created.code);
          expect(fetched.application_id).toBe(applicationID);
          expect(fetched.status).toBe("pending");
          expect(fetched.expires_at).toBe(created.expires_at);
          expect(fetched.created_at).toBe(created.created_at);
          expect(fetched.canceled_at).toBeNull();
          expect(fetched.completed_at).toBeNull();
        }).pipe(
          Effect.ensuring(
            PlatformCancelApplicationTransfer({
              applicationID,
              transferID: created.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("returns NotFound for a non-existent transfer id on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const applicationID = yield* pickApplication;
        const error = yield* PlatformGetApplicationTransfer({
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
        const error = yield* PlatformGetApplicationTransfer({
          applicationID: NON_EXISTENT_APP,
          transferID: NON_EXISTENT_TRANSFER,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });
});
