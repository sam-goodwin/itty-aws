import { Effect, Schedule } from "effect";
import { describe, expect, it } from "vitest";
import { createEmail } from "../src/operations/createEmail";
import { getEmail } from "../src/operations/getEmail";
import { runEffect, testRunId } from "./setup";

const SENDER = "Distilled Test <onboarding@resend.dev>";
const RECIPIENT = "delivered@resend.dev";

// A well-formed UUID that should not exist in the account. Used to trigger
// NotFound for non-existent email ids.
const NON_EXISTENT_EMAIL_ID = "00000000-0000-4000-8000-000000000000";

describe("getEmail", () => {
  it("retrieves an email by id", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createEmail({
          from: SENDER,
          to: [RECIPIENT],
          subject: `distilled-resend-getEmail-${testRunId}`,
          html: `<p>Test email from distilled SDK run ${testRunId}</p>`,
        });

        expect(typeof created.id).toBe("string");
        const email_id = created.id as string;

        // Newly-created emails may not be immediately readable — retry on
        // NotFound until the email is indexed.
        return yield* getEmail({ email_id }).pipe(
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
    expect(result.id).toBeDefined();
    expect(typeof result.id).toBe("string");
  });

  it("fails with NotFound for a non-existent email id", async () => {
    const error = await runEffect(
      getEmail({ email_id: NON_EXISTENT_EMAIL_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with Forbidden for an unauthorized email id", async () => {
    // Resend documents 403 invalid_api_key on GET /emails/{email_id}. The
    // documented trigger surfaces when the API key is not permitted to read
    // the email — we exercise this path with a well-formed but unauthorized id.
    const error = await runEffect(
      getEmail({
        email_id: `forbidden-${testRunId}-00000000-0000-4000-8000-000000000000`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("Forbidden");
  });
});
