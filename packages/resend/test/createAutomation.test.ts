import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAutomation } from "../src/operations/createAutomation";
import { deleteAutomation } from "../src/operations/deleteAutomation";
import { runEffect, testRunId } from "./setup";

describe("createAutomation", () => {
  it("creates an automation with a trigger and contact_delete step", async () => {
    const name = `distilled-resend-createAutomation-${testRunId}`;
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
        createdId = created.id;
        return created;
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

  it("fails with UnprocessableEntity for an empty name", async () => {
    const eventName = `distilled-event-unproc-${testRunId}`;

    const error = await runEffect(
      createAutomation({
        name: "",
        steps: [
          {
            key: "trigger-1",
            type: "trigger",
            config: { event_name: eventName },
          },
        ],
        connections: [],
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });

  it("fails with UnprocessableEntity for no steps", async () => {
    const name = `distilled-resend-createAutomation-nosteps-${testRunId}`;

    const error = await runEffect(
      createAutomation({
        name,
        steps: [],
        connections: [],
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
