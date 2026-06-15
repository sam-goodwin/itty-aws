import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAutomation } from "../src/operations/createAutomation";
import { deleteAutomation } from "../src/operations/deleteAutomation";
import { stopAutomation } from "../src/operations/stopAutomation";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_AUTOMATION_ID = "00000000-0000-4000-8000-000000000000";

describe("stopAutomation", () => {
  it("stops an enabled automation", async () => {
    const name = `distilled-resend-stopAutomation-${testRunId}`;
    const eventName = `distilled-event-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createAutomation({
          name,
          status: "enabled",
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
        return yield* stopAutomation({ automation_id: created.id });
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
  });

  it("fails with NotFound for a non-existent automation id", async () => {
    const error = await runEffect(
      stopAutomation({ automation_id: NON_EXISTENT_AUTOMATION_ID }).pipe(
        Effect.flip,
      ),
    );

    expect(error._tag).toBe("NotFound");
  });
});
