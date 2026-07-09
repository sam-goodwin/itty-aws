import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAutomation } from "../src/operations/createAutomation";
import { deleteAutomation } from "../src/operations/deleteAutomation";
import { getAutomationRun } from "../src/operations/getAutomationRun";
import { listAutomationRuns } from "../src/operations/listAutomationRuns";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_AUTOMATION_ID = "00000000-0000-4000-8000-000000000000";
const NON_EXISTENT_RUN_ID = "00000000-0000-4000-8000-000000000001";

describe("getAutomationRun", () => {
  it("retrieves an automation run if one exists, otherwise no-op", async () => {
    const name = `distilled-resend-getAutomationRun-${testRunId}`;
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

        const runs = yield* listAutomationRuns({
          automation_id: created.id,
          limit: 1,
        });
        const first = runs.data?.[0];
        if (!first?.id) {
          return null;
        }
        return yield* getAutomationRun({
          automation_id: created.id,
          run_id: first.id,
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

    if (result === null) {
      // Freshly created automation has no runs; the list call succeeded.
      return;
    }

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
  });

  it("fails with NotFound for a non-existent run id under a real automation", async () => {
    const name = `distilled-resend-getAutomationRun-nf-${testRunId}`;
    const eventName = `distilled-event-nf-${testRunId}`;
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
        return yield* getAutomationRun({
          automation_id: created.id,
          run_id: NON_EXISTENT_RUN_ID,
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

    expect(error._tag).toBe("NotFound");
  });

  it("fails with NotFound for a non-existent automation id", async () => {
    const error = await runEffect(
      getAutomationRun({
        automation_id: NON_EXISTENT_AUTOMATION_ID,
        run_id: NON_EXISTENT_RUN_ID,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
