import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listEmailReceiving } from "../src/operations/listEmailReceiving";
import { listEmailReceivingAttachments } from "../src/operations/listEmailReceivingAttachments";
import { runEffect } from "./setup";

const NON_EXISTENT_EMAIL_ID = "00000000-0000-4000-8000-000000000000";

describe("listEmailReceivingAttachments", () => {
  it("lists attachments for a received email", async () => {
    // Received emails come from inbound mail to a configured Resend domain;
    // they cannot be created via this SDK. Pick the first existing received
    // email in the account and list its attachments.
    const result = await runEffect(
      Effect.gen(function* () {
        const list = yield* listEmailReceiving({ limit: 1 });
        expect(list.data).toBeDefined();
        expect(list.data!.length).toBeGreaterThan(0);
        const email_id = list.data![0]!.id as string;
        return yield* listEmailReceivingAttachments({ email_id });
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
        const list = yield* listEmailReceiving({ limit: 1 });
        expect(list.data).toBeDefined();
        expect(list.data!.length).toBeGreaterThan(0);
        const email_id = list.data![0]!.id as string;
        return yield* listEmailReceivingAttachments({ email_id, limit: 1 });
      }),
    );

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(result.data.length).toBeLessThanOrEqual(1);
    }
  });

  it("fails with NotFound for a non-existent received email id", async () => {
    const error = await runEffect(
      listEmailReceivingAttachments({
        email_id: NON_EXISTENT_EMAIL_ID,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
