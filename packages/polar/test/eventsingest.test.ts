import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { eventsingest } from "../src/operations/eventsingest.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("eventsingest", () => {
  it("ingests a batch of events", { timeout: 30_000 }, async () => {
    const eventName = `distilled-polar-eventsingest-${testRunId}`;

    const result = await runEffect(
      eventsingest({
        events: [
          {
            name: eventName,
            external_customer_id: `external-${testRunId}`,
            metadata: {
              test_run_id: testRunId,
              source: "distilled-test",
            },
          },
        ],
      }),
    );

    expect(typeof result.inserted).toBe("number");
    expect(result.inserted).toBeGreaterThanOrEqual(1);
  });

  it(
    "fails with UnprocessableEntity when an event is missing required fields",
    { timeout: 30_000 },
    async () => {
      // The `name` field is required; sending an event without it is rejected
      // with a typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        eventsingest({
          events: [
            // @ts-expect-error — intentionally omitting required `name`
            {
              external_customer_id: `external-${testRunId}`,
              metadata: { test_run_id: testRunId },
            },
          ],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
