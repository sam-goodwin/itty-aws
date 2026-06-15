import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTopic } from "../src/operations/createTopic";
import { deleteTopic } from "../src/operations/deleteTopic";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_TOPIC_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteTopic", () => {
  it("deletes a topic created in the test", async () => {
    const name = `distilled-resend-deleteTopic-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTopic({
          name,
          default_subscription: "opt_in",
        });
        if (!created.id) {
          return yield* Effect.die("createTopic did not return an id");
        }
        return yield* deleteTopic({ id: created.id });
      }),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("fails with NotFound for a non-existent topic id", async () => {
    const error = await runEffect(
      deleteTopic({ id: NON_EXISTENT_TOPIC_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
