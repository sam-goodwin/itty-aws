import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAutomation } from "../src/operations/createAutomation";
import { deleteAutomation } from "../src/operations/deleteAutomation";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_AUTOMATION_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteAutomation", () => {
  it("deletes an automation created in the test", async () => {
    const name = `distilled-resend-deleteAutomation-${testRunId}`;
    const eventName = `distilled-event-${testRunId}`;

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
        return yield* deleteAutomation({ automation_id: created.id });
      }),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("fails with NotFound for a non-existent automation id", async () => {
    const error = await runEffect(
      deleteAutomation({ automation_id: NON_EXISTENT_AUTOMATION_ID }).pipe(
        Effect.flip,
      ),
    );

    expect(error._tag).toBe("NotFound");
  });
});
