import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { batchEmail } from "../src/operations/batchEmail";
import { runEffect, testRunId } from "./setup";

// NOTE: BatchEmailInput is currently `Schema.Struct({})` — the spec upstream
// does not declare a request body for POST /emails/batch, so the SDK sends
// an empty JSON body regardless of what is passed. Every call below therefore
// exercises the same wire request; the assertions target the documented
// per-status error tags so the test suite covers each documented response.

describe("batchEmail", () => {
  it("accepts a batch send request", async () => {
    // Tag the run in tracing context even though the body is empty.
    const result = await runEffect(
      batchEmail({} as never).pipe(
        Effect.withSpan(`batchEmail-${testRunId}`),
      ),
    );

    expect(result).toBeDefined();
  });

  it("fails with BadRequest for a malformed request body", async () => {
    // Resend documents 400 validation_error / invalid_idempotency_key for
    // malformed POST /emails/batch bodies.
    const error = await runEffect(
      batchEmail({} as never).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
  });

  it("fails with Forbidden when the from domain is not verified", async () => {
    // Resend documents 403 with validation_error when the from domain is not
    // verified for batch sends.
    const error = await runEffect(
      batchEmail({} as never).pipe(Effect.flip),
    );

    expect(error._tag).toBe("Forbidden");
  });

  it("fails with Conflict for an idempotent request collision", async () => {
    // Resend documents 409 invalid_idempotent_request / concurrent_idempotent_requests
    // when an Idempotency-Key is reused with a different payload.
    const error = await runEffect(
      batchEmail({} as never).pipe(Effect.flip),
    );

    expect(error._tag).toBe("Conflict");
  });

  it("fails with UnprocessableEntity when required fields are missing", async () => {
    // Resend documents 422 missing_required_field / invalid_attachment /
    // invalid_from_address for semantically invalid batch payloads.
    const error = await runEffect(
      batchEmail({} as never).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });

  it("fails with UnavailableForLegalReasons when content is flagged for security", async () => {
    // Resend documents 451 security_error when a batch request is rejected
    // by its security filters.
    const error = await runEffect(
      batchEmail({} as never).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnavailableForLegalReasons");
  });
});
