import { Effect, Schedule } from "effect";
import { describe, expect, it } from "vitest";
import { createEmail } from "../src/operations/createEmail";
import { getEmail } from "../src/operations/getEmail";
import { getEmailAttachment } from "../src/operations/getEmailAttachment";
import { listEmailAttachments } from "../src/operations/listEmailAttachments";
import { runEffect, testRunId } from "./setup";

const SENDER = "Distilled Test <onboarding@resend.dev>";
const RECIPIENT = "delivered@resend.dev";

const NON_EXISTENT_EMAIL_ID = "00000000-0000-4000-8000-000000000000";
const NON_EXISTENT_ATTACHMENT_ID = "00000000-0000-4000-8000-000000000001";

const waitForEmailReady = (email_id: string) =>
  getEmail({ email_id }).pipe(
    Effect.retry({
      while: (e) => e._tag === "NotFound",
      schedule: Schedule.spaced("1 second").pipe(
        Schedule.both(Schedule.recurs(10)),
      ),
    }),
  );

const waitForAttachmentsReady = (email_id: string) =>
  listEmailAttachments({ email_id }).pipe(
    Effect.retry({
      while: (e) => e._tag === "NotFound",
      schedule: Schedule.spaced("1 second").pipe(
        Schedule.both(Schedule.recurs(10)),
      ),
    }),
  );

describe("getEmailAttachment", () => {
  it("retrieves a single attachment for an email", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEmail({
          from: SENDER,
          to: [RECIPIENT],
          subject: `distilled-resend-getEmailAttachment-${testRunId}`,
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

        const attachments = yield* waitForAttachmentsReady(email_id);
        expect(attachments.data).toBeDefined();
        expect(attachments.data!.length).toBeGreaterThan(0);

        const attachment_id = attachments.data![0]!.id as string;
        expect(typeof attachment_id).toBe("string");

        return yield* getEmailAttachment({ email_id, attachment_id });
      }),
    );

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  it("fails with NotFound for a non-existent email id", async () => {
    const error = await runEffect(
      getEmailAttachment({
        email_id: NON_EXISTENT_EMAIL_ID,
        attachment_id: NON_EXISTENT_ATTACHMENT_ID,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with NotFound for a non-existent attachment id on a real email", async () => {
    const error = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEmail({
          from: SENDER,
          to: [RECIPIENT],
          subject: `distilled-resend-getEmailAttachment-404att-${testRunId}`,
          html: `<p>Test email ${testRunId}</p>`,
        });

        const email_id = created.id as string;
        yield* waitForEmailReady(email_id);

        return yield* getEmailAttachment({
          email_id,
          attachment_id: NON_EXISTENT_ATTACHMENT_ID,
        }).pipe(Effect.flip);
      }),
    );

    expect(error._tag).toBe("NotFound");
  });
});
