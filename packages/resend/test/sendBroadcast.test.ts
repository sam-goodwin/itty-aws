import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createBroadcast } from "../src/operations/createBroadcast";
import { createSegment } from "../src/operations/createSegment";
import { deleteBroadcast } from "../src/operations/deleteBroadcast";
import { deleteSegment } from "../src/operations/deleteSegment";
import { sendBroadcast } from "../src/operations/sendBroadcast";
import { runEffect, testRunId } from "./setup";

const SENDER = "Distilled Test <onboarding@resend.dev>";
const NON_EXISTENT_BROADCAST_ID = "00000000-0000-4000-8000-000000000000";

// A scheduled_at far in the future so the broadcast does not actually send
// during the test run (Resend allows scheduling weeks/months ahead).
const farFuture = (): string => {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString();
};

describe("sendBroadcast", () => {
  it("schedules a broadcast for a future delivery time", async () => {
    const segmentName = `distilled-resend-sendBroadcast-seg-${testRunId}`;
    let segmentId: string | undefined;
    let broadcastId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const segment = yield* createSegment({ name: segmentName });
        if (!segment.id) {
          return yield* Effect.die("createSegment did not return an id");
        }
        segmentId = segment.id;
        const broadcast = yield* createBroadcast({
          name: `distilled-resend-sendBroadcast-${testRunId}`,
          segment_id: segment.id,
          from: SENDER,
          subject: "Distilled test broadcast",
          html: "<p>Hello</p>",
          send: false,
        });
        if (!broadcast.id) {
          return yield* Effect.die("createBroadcast did not return an id");
        }
        broadcastId = broadcast.id;
        return yield* sendBroadcast({
          id: broadcast.id,
          scheduled_at: farFuture(),
        });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            broadcastId
              ? deleteBroadcast({ id: broadcastId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
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
    expect(result.id).toBe(broadcastId);
  });

  it("fails with NotFound for a non-existent broadcast id", async () => {
    const error = await runEffect(
      sendBroadcast({ id: NON_EXISTENT_BROADCAST_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for a malformed scheduled_at", async () => {
    const segmentName = `distilled-resend-sendBroadcast-bad-seg-${testRunId}`;
    let segmentId: string | undefined;
    let broadcastId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const segment = yield* createSegment({ name: segmentName });
        if (!segment.id) {
          return yield* Effect.die("createSegment did not return an id");
        }
        segmentId = segment.id;
        const broadcast = yield* createBroadcast({
          name: `distilled-resend-sendBroadcast-bad-${testRunId}`,
          segment_id: segment.id,
          from: SENDER,
          subject: "Distilled test broadcast",
          html: "<p>Hello</p>",
          send: false,
        });
        if (!broadcast.id) {
          return yield* Effect.die("createBroadcast did not return an id");
        }
        broadcastId = broadcast.id;
        return yield* sendBroadcast({
          id: broadcast.id,
          scheduled_at: "not-a-valid-date",
        });
      })
        .pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              broadcastId
                ? deleteBroadcast({ id: broadcastId }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
          Effect.ensuring(
            Effect.suspend(() =>
              segmentId
                ? deleteSegment({ id: segmentId }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
        )
        .pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
