import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createSegment } from "../src/operations/createSegment";
import { deleteSegment } from "../src/operations/deleteSegment";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_SEGMENT_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteSegment", () => {
  it("deletes a segment created in the test", async () => {
    const name = `distilled-resend-deleteSegment-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createSegment({ name });
        if (!created.id) {
          return yield* Effect.die("createSegment did not return an id");
        }
        return yield* deleteSegment({ id: created.id });
      }),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("fails with NotFound for a non-existent segment id", async () => {
    const error = await runEffect(
      deleteSegment({ id: NON_EXISTENT_SEGMENT_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
