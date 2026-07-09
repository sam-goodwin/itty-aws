import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createBroadcast } from "../src/operations/createBroadcast";
import { createSegment } from "../src/operations/createSegment";
import { deleteBroadcast } from "../src/operations/deleteBroadcast";
import { deleteSegment } from "../src/operations/deleteSegment";
import { runEffect, testRunId } from "./setup";

const SENDER = "Distilled Test <onboarding@resend.dev>";
const NON_EXISTENT_BROADCAST_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteBroadcast", () => {
  it("deletes a draft broadcast created in the test", async () => {
    const segmentName = `distilled-resend-deleteBroadcast-seg-${testRunId}`;
    let segmentId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const segment = yield* createSegment({ name: segmentName });
        if (!segment.id) {
          return yield* Effect.die("createSegment did not return an id");
        }
        segmentId = segment.id;
        const broadcast = yield* createBroadcast({
          name: `distilled-resend-deleteBroadcast-${testRunId}`,
          segment_id: segment.id,
          from: SENDER,
          subject: "Distilled test broadcast",
          html: "<p>Hello</p>",
          send: false,
        });
        if (!broadcast.id) {
          return yield* Effect.die("createBroadcast did not return an id");
        }
        return yield* deleteBroadcast({ id: broadcast.id });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            segmentId
              ? deleteSegment({ id: segmentId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("fails with NotFound for a non-existent broadcast id", async () => {
    const error = await runEffect(
      deleteBroadcast({ id: NON_EXISTENT_BROADCAST_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
