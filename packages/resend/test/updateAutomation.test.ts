import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAutomation } from "../src/operations/createAutomation";
import { deleteAutomation } from "../src/operations/deleteAutomation";
import { updateAutomation } from "../src/operations/updateAutomation";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_AUTOMATION_ID = "00000000-0000-4000-8000-000000000000";

describe("updateAutomation", () => {
  it("updates an automation's name", async () => {
    const name = `distilled-resend-updateAutomation-${testRunId}`;
    const newName = `distilled-resend-updateAutomation-updated-${testRunId}`;
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
        return yield* updateAutomation({
          automation_id: created.id,
          name: newName,
        });
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
      updateAutomation({
        automation_id: NON_EXISTENT_AUTOMATION_ID,
        name: `distilled-resend-updateAutomation-nf-${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for invalid steps", async () => {
    const name = `distilled-resend-updateAutomation-unproc-${testRunId}`;
    const eventName = `distilled-event-unproc-${testRunId}`;
    let createdId: string | undefined;

    const error = await runEffect(
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
        return yield* updateAutomation({
          automation_id: created.id,
          steps: [],
        }).pipe(Effect.flip);
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

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
