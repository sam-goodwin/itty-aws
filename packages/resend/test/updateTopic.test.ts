import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createTopic } from "../src/operations/createTopic";
import { deleteTopic } from "../src/operations/deleteTopic";
import { getTopic } from "../src/operations/getTopic";
import { updateTopic } from "../src/operations/updateTopic";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_TOPIC_ID = "00000000-0000-4000-8000-000000000000";

describe("updateTopic", () => {
  it("updates a topic's name, description, and visibility", async () => {
    const originalName = `distilled-resend-updateTopic-${testRunId}`;
    const updatedName = `distilled-resend-updateTopic-renamed-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTopic({
          name: originalName,
          default_subscription: "opt_in",
        });
        if (!created.id) {
          return yield* Effect.die("createTopic did not return an id");
        }
        createdId = created.id;
        const updated = yield* updateTopic({
          id: created.id,
          name: updatedName,
          description: "Updated description",
          visibility: "private",
        });
        const refetched = yield* getTopic({ id: created.id });
        return { updated, refetched };
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

    expect(result.updated).toBeDefined();
    expect(result.updated.id).toBe(createdId);
    expect(result.refetched.name).toBe(updatedName);
    expect(result.refetched.description).toBe("Updated description");
    expect(result.refetched.visibility).toBe("private");
  });

  it("fails with NotFound for a non-existent topic id", async () => {
    const error = await runEffect(
      updateTopic({
        id: NON_EXISTENT_TOPIC_ID,
        name: `distilled-resend-updateTopic-missing-${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for an empty name", async () => {
    const name = `distilled-resend-updateTopic-bad-${testRunId}`;
    let createdId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const created = yield* createTopic({
          name,
          default_subscription: "opt_in",
        });
        if (!created.id) {
          return yield* Effect.die("createTopic did not return an id");
        }
        createdId = created.id;
        return yield* updateTopic({
          id: created.id,
          name: "",
        });
      })
        .pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId
                ? deleteTopic({ id: createdId }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
        )
        .pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
