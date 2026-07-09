import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTopic } from "../src/operations/createTopic";
import { deleteTopic } from "../src/operations/deleteTopic";
import { getTopic } from "../src/operations/getTopic";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_TOPIC_ID = "00000000-0000-4000-8000-000000000000";

describe("getTopic", () => {
  it("retrieves a topic created in the test", async () => {
    const name = `distilled-resend-getTopic-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTopic({
          name,
          default_subscription: "opt_in",
        });
        if (!created.id) {
          return yield* Effect.die("createTopic did not return an id");
        }
        createdId = created.id;
        return yield* getTopic({ id: created.id });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteTopic({ id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(result.id).toBe(createdId);
    expect(result.name).toBe(name);
    expect(result.default_subscription).toBe("opt_in");
  });

  it("fails with NotFound for a non-existent topic id", async () => {
    const error = await runEffect(
      getTopic({ id: NON_EXISTENT_TOPIC_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
