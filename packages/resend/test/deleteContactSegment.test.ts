import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createContact } from "../src/operations/createContact";
import { createContactSegment } from "../src/operations/createContactSegment";
import { createSegment } from "../src/operations/createSegment";
import { deleteContact } from "../src/operations/deleteContact";
import { deleteContactSegment } from "../src/operations/deleteContactSegment";
import { deleteSegment } from "../src/operations/deleteSegment";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteContactSegment", () => {
  it("removes a contact from a segment", async () => {
    const email = `distilled-resend-deleteContactSegment-${testRunId}@example.com`;
    const segmentName = `distilled-resend-deleteContactSegment-seg-${testRunId}`;
    let contactId: string | undefined;
    let segmentId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const contact = yield* createContact({ email });
        if (!contact.id) {
          return yield* Effect.die("createContact did not return an id");
        }
        contactId = contact.id;
        const segment = yield* createSegment({ name: segmentName });
        if (!segment.id) {
          return yield* Effect.die("createSegment did not return an id");
        }
        segmentId = segment.id;
        yield* createContactSegment({
          contact_id: contact.id,
          segment_id: segment.id,
        });
        return yield* deleteContactSegment({
          contact_id: contact.id,
          segment_id: segment.id,
        });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            segmentId
              ? deleteSegment({ id: segmentId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
        Effect.ensuring(
          Effect.suspend(() =>
            contactId
              ? deleteContact({ id: contactId }).pipe(Effect.ignore)
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

  it("fails with NotFound for a non-existent contact id", async () => {
    const segmentName = `distilled-resend-deleteContactSegment-noc-${testRunId}`;
    let segmentId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const segment = yield* createSegment({ name: segmentName });
        if (!segment.id) {
          return yield* Effect.die("createSegment did not return an id");
        }
        segmentId = segment.id;
        return yield* deleteContactSegment({
          contact_id: NON_EXISTENT_ID,
          segment_id: segment.id,
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

    expect(error._tag).toBe("NotFound");
  });
});
