import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createSegment } from "../src/operations/createSegment";
import { deleteSegment } from "../src/operations/deleteSegment";
import { getSegment } from "../src/operations/getSegment";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_SEGMENT_ID = "00000000-0000-4000-8000-000000000000";

describe("getSegment", () => {
  it("retrieves a segment created in the test", async () => {
    const name = `distilled-resend-getSegment-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createSegment({ name });
        if (!created.id) {
          return yield* Effect.die("createSegment did not return an id");
        }
        createdId = created.id;
        return yield* getSegment({ id: created.id });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteSegment({ id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(result.id).toBe(createdId);
    expect(result.name).toBe(name);
  });

  it("fails with NotFound for a non-existent segment id", async () => {
    const error = await runEffect(
      getSegment({ id: NON_EXISTENT_SEGMENT_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
