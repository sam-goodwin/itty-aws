import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getEmailReceiving } from "../src/operations/getEmailReceiving";
import { listEmailReceiving } from "../src/operations/listEmailReceiving";
import { runEffect } from "./setup";

const NON_EXISTENT_EMAIL_ID = "00000000-0000-4000-8000-000000000000";

describe("getEmailReceiving", () => {
  it("retrieves a received email by id", async () => {
    // Received emails come from inbound mail to a configured Resend domain;
    // they cannot be created via this SDK. Pick the first existing received
    // email in the account and fetch it by id.
    const result = await runEffect(
      Effect.gen(function* () {
        const list = yield* listEmailReceiving({ limit: 1 });
        expect(list.data).toBeDefined();
        expect(list.data!.length).toBeGreaterThan(0);
        const email_id = list.data![0]!.id as string;
        expect(typeof email_id).toBe("string");
        return yield* getEmailReceiving({ email_id });
      }),
    );

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  it("fails with NotFound for a non-existent received email id", async () => {
    const error = await runEffect(
      getEmailReceiving({ email_id: NON_EXISTENT_EMAIL_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
