import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createBroadcast } from "../src/operations/createBroadcast";
import { createSegment } from "../src/operations/createSegment";
import { deleteBroadcast } from "../src/operations/deleteBroadcast";
import { deleteSegment } from "../src/operations/deleteSegment";
import { getBroadcast } from "../src/operations/getBroadcast";
import { updateBroadcast } from "../src/operations/updateBroadcast";
import { runEffect, testRunId } from "./setup";

const SENDER = "Distilled Test <onboarding@resend.dev>";
const NON_EXISTENT_BROADCAST_ID = "00000000-0000-4000-8000-000000000000";

describe("updateBroadcast", () => {
  it("updates an existing broadcast's name and subject", async () => {
    const segmentName = `distilled-resend-updateBroadcast-seg-${testRunId}`;
    const originalName = `distilled-resend-updateBroadcast-${testRunId}`;
    const updatedName = `distilled-resend-updateBroadcast-renamed-${testRunId}`;
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
          name: originalName,
          segment_id: segment.id,
          from: SENDER,
          subject: "Original subject",
          html: "<p>Original</p>",
          send: false,
        });
        if (!broadcast.id) {
          return yield* Effect.die("createBroadcast did not return an id");
        }
        broadcastId = broadcast.id;
        const updated = yield* updateBroadcast({
          id: broadcast.id,
          name: updatedName,
          subject: "Updated subject",
          html: "<p>Updated</p>",
        });
        const refetched = yield* getBroadcast({ id: broadcast.id });
        return { updated, refetched };
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

    expect(result.updated).toBeDefined();
    expect(result.updated.id).toBe(broadcastId);
    expect(result.refetched.name).toBe(updatedName);
    expect(result.refetched.subject).toBe("Updated subject");
  });

  it("fails with NotFound for a non-existent broadcast id", async () => {
    const error = await runEffect(
      updateBroadcast({
        id: NON_EXISTENT_BROADCAST_ID,
        subject: "Anything",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for an invalid from address", async () => {
    const segmentName = `distilled-resend-updateBroadcast-bad-seg-${testRunId}`;
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
          name: `distilled-resend-updateBroadcast-bad-${testRunId}`,
          segment_id: segment.id,
          from: SENDER,
          subject: "Original subject",
          html: "<p>Original</p>",
          send: false,
        });
        if (!broadcast.id) {
          return yield* Effect.die("createBroadcast did not return an id");
        }
        broadcastId = broadcast.id;
        return yield* updateBroadcast({
          id: broadcast.id,
          from: "not-a-valid-email",
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
