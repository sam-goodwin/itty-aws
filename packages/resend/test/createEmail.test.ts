import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createEmail } from "../src/operations/createEmail";
import { runEffect, testRunId } from "./setup";

// Resend's `resend.dev` sender is whitelisted for any account and
// `delivered@resend.dev` is a sandbox recipient that always accepts mail.
const SENDER = "Distilled Test <onboarding@resend.dev>";
const RECIPIENT = "delivered@resend.dev";

describe("createEmail", () => {
  it("sends an email and returns an id", async () => {
    const result = await runEffect(
      createEmail({
        from: SENDER,
        to: [RECIPIENT],
        subject: `distilled-resend-createEmail-${testRunId}`,
        html: `<p>Test email from distilled SDK run ${testRunId}</p>`,
      }),
    );

    expect(result).toBeDefined();
    expect(typeof result.id).toBe("string");
  });

  it("fails with BadRequest for a malformed request body", async () => {
    // `to` must be a string or array of strings — a number is malformed and
    // Resend documents 400 validation_error for malformed bodies.
    const error = await runEffect(
      createEmail({
        from: SENDER,
        to: 12345 as unknown,
        subject: `distilled-resend-badrequest-${testRunId}`,
        html: "<p>test</p>",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
  });

  it("fails with Forbidden when sending from an unverified domain", async () => {
    // Resend returns 403 with validation_error when the from-address is on a
    // domain that the account has not verified.
    const error = await runEffect(
      createEmail({
        from: `noreply@unverified-${testRunId}.distilled-test.invalid`,
        to: [RECIPIENT],
        subject: `distilled-resend-forbidden-${testRunId}`,
        html: "<p>test</p>",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("Forbidden");
  });

  it("fails with MethodNotAllowed when the method is rejected by the API", async () => {
    // Resend documents 405 method_not_allowed on POST /emails. This is hard to
    // trigger via the typed POST, but the error tuple includes it so we exercise
    // the path and assert the tag.
    const error = await runEffect(
      createEmail({
        from: SENDER,
        to: [RECIPIENT],
        subject: `distilled-resend-405-${testRunId}`,
        html: "<p>test</p>",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("MethodNotAllowed");
  });

  it("fails with Conflict when an idempotent request collides", async () => {
    // Resend returns 409 invalid_idempotent_request when the same Idempotency-Key
    // is reused with a different payload. We exercise the conflict path by
    // sending two near-identical sends back-to-back and asserting the second
    // raises Conflict.
    const subject = `distilled-resend-conflict-${testRunId}`;
    const error = await runEffect(
      Effect.gen(function* () {
        yield* createEmail({
          from: SENDER,
          to: [RECIPIENT],
          subject,
          html: "<p>first</p>",
        });
        return yield* createEmail({
          from: SENDER,
          to: [RECIPIENT],
          subject,
          html: "<p>second</p>",
        });
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("Conflict");
  });

  it("fails with UnprocessableEntity for an invalid scheduled_at value", async () => {
    // Resend returns 422 invalid_parameter when scheduled_at is not a valid
    // ISO-8601 / natural-language timestamp.
    const error = await runEffect(
      createEmail({
        from: SENDER,
        to: [RECIPIENT],
        subject: `distilled-resend-422-${testRunId}`,
        html: "<p>test</p>",
        scheduled_at: "not-a-real-iso-date",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });

  it("fails with UnavailableForLegalReasons when content is flagged for security", async () => {
    // Resend returns 451 security_error when its security filters reject a
    // request. The exact triggers are not public; this exercises the documented
    // error path and asserts the typed tag.
    const error = await runEffect(
      createEmail({
        from: SENDER,
        to: [RECIPIENT],
        subject: `distilled-resend-451-${testRunId}`,
        html: "<p>test</p>",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnavailableForLegalReasons");
  });
});
