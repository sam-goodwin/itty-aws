import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createBroadcast } from "../src/operations/createBroadcast";
import { createSegment } from "../src/operations/createSegment";
import { deleteBroadcast } from "../src/operations/deleteBroadcast";
import { deleteSegment } from "../src/operations/deleteSegment";
import { runEffect, testRunId } from "./setup";

const SENDER = "Distilled Test <onboarding@resend.dev>";

describe("createBroadcast", () => {
  it("creates a draft broadcast targeting a created segment", async () => {
    const segmentName = `distilled-resend-createBroadcast-seg-${testRunId}`;
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
          name: `distilled-resend-createBroadcast-${testRunId}`,
          segment_id: segment.id,
          from: SENDER,
          subject: "Distilled test broadcast",
          html: "<p>Hello from Distilled</p>",
          send: false,
        });
        broadcastId = broadcast.id;
        return broadcast;
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
    expect(typeof result.id).toBe("string");
  });

  it("fails with UnprocessableEntity for an invalid from address", async () => {
    const segmentName = `distilled-resend-createBroadcast-bad-${testRunId}`;
    let segmentId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const segment = yield* createSegment({ name: segmentName });
        if (!segment.id) {
          return yield* Effect.die("createSegment did not return an id");
        }
        segmentId = segment.id;
        return yield* createBroadcast({
          segment_id: segment.id,
          from: "not-a-valid-email",
          subject: "Distilled test broadcast",
          html: "<p>Hello</p>",
        });
      })
        .pipe(
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
