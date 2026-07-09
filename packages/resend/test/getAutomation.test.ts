import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAutomation } from "../src/operations/createAutomation";
import { deleteAutomation } from "../src/operations/deleteAutomation";
import { getAutomation } from "../src/operations/getAutomation";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_AUTOMATION_ID = "00000000-0000-4000-8000-000000000000";

describe("getAutomation", () => {
  it("retrieves a single automation by id", async () => {
    const name = `distilled-resend-getAutomation-${testRunId}`;
    const eventName = `distilled-event-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createAutomation({
          name,
          status: "disabled",
          steps: [
            {
              key: "trigger-1",
              type: "trigger",
              config: { event_name: eventName },
            },
            {
              key: "delete-1",
              type: "contact_delete",
              config: {},
            },
          ],
          connections: [
            { from: "trigger-1", to: "delete-1", type: "default" },
          ],
        });
        if (!created.id) {
          return yield* Effect.die("createAutomation did not return an id");
        }
        createdId = created.id;
        return yield* getAutomation({ automation_id: created.id });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteAutomation({ automation_id: createdId }).pipe(
                  Effect.ignore,
                )
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
    expect(result.name).toBe(name);
  });

  it("fails with NotFound for a non-existent automation id", async () => {
    const error = await runEffect(
      getAutomation({ automation_id: NON_EXISTENT_AUTOMATION_ID }).pipe(
        Effect.flip,
      ),
    );

    expect(error._tag).toBe("NotFound");
  });
});
