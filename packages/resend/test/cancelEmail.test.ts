import { Effect, Schedule } from "effect";
import { describe, expect, it } from "vitest";
import { cancelEmail } from "../src/operations/cancelEmail";
import { createEmail } from "../src/operations/createEmail";
import { getEmail } from "../src/operations/getEmail";
import { runEffect, testRunId } from "./setup";

const SENDER = "Distilled Test <onboarding@resend.dev>";
const RECIPIENT = "delivered@resend.dev";

const NON_EXISTENT_EMAIL_ID = "00000000-0000-4000-8000-000000000000";

// Wait for a freshly-created email to be readable. Newly-created ids are
// briefly not indexed and return NotFound.
const waitForEmailReady = (email_id: string) =>
  getEmail({ email_id }).pipe(
    Effect.retry({
      while: (e) => e._tag === "NotFound",
      schedule: Schedule.spaced("1 second").pipe(
        Schedule.both(Schedule.recurs(10)),
      ),
    }),
  );

describe("cancelEmail", () => {
  it("cancels a scheduled email", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const scheduledAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
        const created = yield* createEmail({
          from: SENDER,
          to: [RECIPIENT],
          subject: `distilled-resend-cancelEmail-${testRunId}`,
          html: `<p>Scheduled email for cancel test ${testRunId}</p>`,
          scheduled_at: scheduledAt,
        });

        expect(typeof created.id).toBe("string");
        const email_id = created.id as string;

        yield* waitForEmailReady(email_id);

        return yield* cancelEmail({ email_id });
      }),
    );

    expect(result).toBeDefined();
  });

  it("fails with NotFound for a non-existent email id", async () => {
    const error = await runEffect(
      cancelEmail({ email_id: NON_EXISTENT_EMAIL_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with Forbidden for an unauthorized email id", async () => {
    // Resend documents 403 invalid_api_key on POST /emails/{email_id}/cancel.
    // We exercise the documented error path with a well-formed but unauthorized id.
    const error = await runEffect(
      cancelEmail({
        email_id: `forbidden-${testRunId}-00000000-0000-4000-8000-000000000000`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("Forbidden");
  });
});
