import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformListApplicationTransfers } from "../src/operations/platform/PlatformListApplicationTransfers";
import { runEffect, testRunId } from "./setup";

const FOREIGN_TRANSFER_CURSOR = `apptr_foreign_workspace_${testRunId}`;

describe("PlatformListApplicationTransfers", () => {
  it("lists application transfers for the authenticated workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* PlatformListApplicationTransfers({});

        expect(Array.isArray(result.data)).toBe(true);
        expect(typeof result.total_count).toBe("number");
        expect(result.total_count).toBeGreaterThanOrEqual(0);

        for (const transfer of result.data) {
          expect(transfer.object).toBe("application_transfer");
          expect(typeof transfer.id).toBe("string");
          expect(typeof transfer.code).toBe("string");
          expect(typeof transfer.application_id).toBe("string");
          expect([
            "pending",
            "completed",
            "canceled",
            "expired",
          ]).toContain(transfer.status);
          expect(typeof transfer.expires_at).toBe("string");
          expect(typeof transfer.created_at).toBe("string");
        }
      }),
    );
  });

  it("honors the status filter and returns only matching transfers", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* PlatformListApplicationTransfers({
          status: "pending",
          limit: 5,
        });

        expect(Array.isArray(result.data)).toBe(true);
        for (const transfer of result.data) {
          expect(transfer.status).toBe("pending");
        }
      }),
    );
  });

  it("returns Forbidden when paginating with a cursor that belongs to another workspace", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformListApplicationTransfers({
          starting_after: FOREIGN_TRANSFER_CURSOR,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns UnprocessableEntity when limit is outside the allowed range", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformListApplicationTransfers({
          // The documented range is 1-500; 100k violates the upper bound.
          limit: 100_000,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("UnprocessableEntity");
      }),
    );
  });
});
