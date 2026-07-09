import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getEmailReceivingAttachment } from "../src/operations/getEmailReceivingAttachment";
import { listEmailReceiving } from "../src/operations/listEmailReceiving";
import { listEmailReceivingAttachments } from "../src/operations/listEmailReceivingAttachments";
import { runEffect } from "./setup";

const NON_EXISTENT_EMAIL_ID = "00000000-0000-4000-8000-000000000000";
const NON_EXISTENT_ATTACHMENT_ID = "00000000-0000-4000-8000-000000000001";

describe("getEmailReceivingAttachment", () => {
  it("retrieves a single attachment for a received email", async () => {
    // Received emails come from inbound mail to a configured Resend domain;
    // they cannot be created via this SDK. Walk the most recent received
    // emails until one with an attachment is found.
    const result = await runEffect(
      Effect.gen(function* () {
        const list = yield* listEmailReceiving({ limit: 25 });
        expect(list.data).toBeDefined();
        expect(list.data!.length).toBeGreaterThan(0);

        for (const email of list.data!) {
          const email_id = email.id as string;
          const atts = yield* listEmailReceivingAttachments({ email_id });
          if (atts.data && atts.data.length > 0) {
            const attachment_id = atts.data[0]!.id as string;
            return yield* getEmailReceivingAttachment({
              email_id,
              attachment_id,
            });
          }
        }
        return yield* Effect.die(
          "no received email with attachments found in the test account",
        );
      }),
    );

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  it("fails with NotFound for a non-existent received email id", async () => {
    const error = await runEffect(
      getEmailReceivingAttachment({
        email_id: NON_EXISTENT_EMAIL_ID,
        attachment_id: NON_EXISTENT_ATTACHMENT_ID,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with NotFound for a non-existent attachment id on a real received email", async () => {
    const error = await runEffect(
      Effect.gen(function* () {
        const list = yield* listEmailReceiving({ limit: 1 });
        expect(list.data).toBeDefined();
        expect(list.data!.length).toBeGreaterThan(0);
        const email_id = list.data![0]!.id as string;
        return yield* getEmailReceivingAttachment({
          email_id,
          attachment_id: NON_EXISTENT_ATTACHMENT_ID,
        }).pipe(Effect.flip);
      }),
    );

    expect(error._tag).toBe("NotFound");
  });
});
