import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createEvent } from "../src/operations/createEvent";
import { deleteEvent } from "../src/operations/deleteEvent";
import { runEffect, testRunId } from "./setup";

describe("createEvent", () => {
  it("creates an event with a name", async () => {
    const name = `distilled_resend_createEvent_${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEvent({ name });
        createdId = created.id;
        return created;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteEvent({ identifier: createdId }).pipe(Effect.ignore)
              : deleteEvent({ identifier: name }).pipe(Effect.ignore),
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
  });

  it("creates an event with a JSON schema", async () => {
    const name = `distilled_resend_createEvent_schema_${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEvent({
          name,
          schema: {
            type: "object",
            properties: {
              user_id: { type: "string" },
              plan: { type: "string" },
            },
            required: ["user_id"],
          },
        });
        createdId = created.id;
        return created;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteEvent({ identifier: createdId }).pipe(Effect.ignore)
              : deleteEvent({ identifier: name }).pipe(Effect.ignore),
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
  });

  it("fails with UnprocessableEntity for an empty name", async () => {
    const error = await runEffect(
      createEvent({ name: "" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
