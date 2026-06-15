import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createSegment } from "../src/operations/createSegment";
import { deleteSegment } from "../src/operations/deleteSegment";
import { runEffect, testRunId } from "./setup";

describe("createSegment", () => {
  it("creates a segment with a name", async () => {
    const name = `distilled-resend-createSegment-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createSegment({ name });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("fails with UnprocessableEntity for an empty name", async () => {
    const error = await runEffect(
      createSegment({ name: "" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
