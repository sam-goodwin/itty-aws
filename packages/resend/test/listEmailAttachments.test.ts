import { Effect, Schedule } from "effect";
import { describe, expect, it } from "vitest";
import { createEmail } from "../src/operations/createEmail";
import { getEmail } from "../src/operations/getEmail";
import { listEmailAttachments } from "../src/operations/listEmailAttachments";
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

describe("listEmailAttachments", () => {
  it("lists attachments for an email", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEmail({
          from: SENDER,
          to: [RECIPIENT],
          subject: `distilled-resend-listEmailAttachments-${testRunId}`,
          html: `<p>Test email with attachment ${testRunId}</p>`,
          attachments: [
            {
              filename: `attachment-${testRunId}.txt`,
              content: Buffer.from(
                `Hello from distilled SDK test ${testRunId}`,
              ).toString("base64"),
              content_type: "text/plain",
            },
          ],
        });

        const email_id = created.id as string;
        yield* waitForEmailReady(email_id);

        // Attachment indexing may also be eventually-consistent — retry while
        // the email reports NotFound on the attachments sub-resource.
        return yield* listEmailAttachments({ email_id }).pipe(
          Effect.retry({
            while: (e) => e._tag === "NotFound",
            schedule: Schedule.spaced("1 second").pipe(
              Schedule.both(Schedule.recurs(10)),
            ),
          }),
        );
      }),
    );

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("respects the limit parameter", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEmail({
          from: SENDER,
          to: [RECIPIENT],
          subject: `distilled-resend-listEmailAttachments-limit-${testRunId}`,
          html: `<p>Test email for limit ${testRunId}</p>`,
          attachments: [
            {
              filename: `a-${testRunId}.txt`,
              content: Buffer.from("a").toString("base64"),
              content_type: "text/plain",
            },
            {
              filename: `b-${testRunId}.txt`,
              content: Buffer.from("b").toString("base64"),
              content_type: "text/plain",
            },
          ],
        });

        const email_id = created.id as string;
        yield* waitForEmailReady(email_id);

        return yield* listEmailAttachments({ email_id, limit: 1 }).pipe(
          Effect.retry({
            while: (e) => e._tag === "NotFound",
            schedule: Schedule.spaced("1 second").pipe(
              Schedule.both(Schedule.recurs(10)),
            ),
          }),
        );
      }),
    );

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(result.data.length).toBeLessThanOrEqual(1);
    }
  });

  it("fails with NotFound for a non-existent email id", async () => {
    const error = await runEffect(
      listEmailAttachments({ email_id: NON_EXISTENT_EMAIL_ID }).pipe(
        Effect.flip,
      ),
    );

    expect(error._tag).toBe("NotFound");
  });
});
