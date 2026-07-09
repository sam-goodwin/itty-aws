import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTopic } from "../src/operations/createTopic";
import { deleteTopic } from "../src/operations/deleteTopic";
import { runEffect, testRunId } from "./setup";

describe("createTopic", () => {
  it("creates a topic with the minimum required fields", async () => {
    const name = `distilled-resend-createTopic-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTopic({
          name,
          default_subscription: "opt_in",
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("creates a topic with description and visibility", async () => {
    const name = `distilled-resend-createTopic-full-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTopic({
          name,
          default_subscription: "opt_out",
          description: "Distilled SDK integration test topic",
          visibility: "private",
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("fails with UnprocessableEntity for an empty name", async () => {
    const error = await runEffect(
      createTopic({ name: "", default_subscription: "opt_in" }).pipe(
        Effect.flip,
      ),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
