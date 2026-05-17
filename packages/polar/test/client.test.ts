import { describe, expect, it } from "vitest";
import { formatPolarErrorMessage } from "../src/client.ts";

describe("formatPolarErrorMessage", () => {
  it("includes FastAPI validation detail with the error summary", () => {
    const message = formatPolarErrorMessage({
      error: "RequestValidationError",
      detail: [
        {
          loc: ["body", "description"],
          msg: "String should have at most 42 characters",
          type: "string_too_long",
        },
      ],
    });

    expect(message).toBe(
      "RequestValidationError: body.description: String should have at most 42 characters",
    );
  });

  it("includes OAuth error descriptions", () => {
    const message = formatPolarErrorMessage({
      error: "invalid_token",
      error_description: "Registration access token is invalid.",
    });

    expect(message).toBe(
      "invalid_token: Registration access token is invalid.",
    );
  });

  it("joins multiple validation details", () => {
    const message = formatPolarErrorMessage({
      error: "RequestValidationError",
      detail: [
        {
          loc: ["body", "filter", "clauses", 0, "property"],
          msg: "Field required",
          type: "missing",
        },
        {
          loc: ["body", "aggregation", "func"],
          msg: "Input should be 'count', 'sum', 'max', 'min', 'avg' or 'unique'",
          type: "literal_error",
        },
      ],
    });

    expect(message).toBe(
      "RequestValidationError: body.filter.clauses.0.property: Field required; body.aggregation.func: Input should be 'count', 'sum', 'max', 'min', 'avg' or 'unique'",
    );
  });

  it("formats object details when Polar returns a structured detail payload", () => {
    const message = formatPolarErrorMessage({
      message: "Payment failed",
      detail: {
        reason: "card_declined",
        code: "insufficient_funds",
      },
    });

    expect(message).toBe(
      'Payment failed: {"reason":"card_declined","code":"insufficient_funds"}',
    );
  });

  it("uses detail text without duplicating an identical summary", () => {
    const message = formatPolarErrorMessage({
      message: "Not found",
      detail: "Not found",
    });

    expect(message).toBe("Not found");
  });

  it("falls back to error codes when Polar omits detail", () => {
    const message = formatPolarErrorMessage({
      code: "resource_locked",
    });

    expect(message).toBe("resource_locked");
  });

  it("formats validation entries that omit location metadata", () => {
    const message = formatPolarErrorMessage({
      error: "RequestValidationError",
      detail: [
        {
          msg: "Value is not a valid UUID",
          type: "uuid_parsing",
        },
        "unexpected validation branch",
      ],
    });

    expect(message).toBe(
      'RequestValidationError: Value is not a valid UUID; "unexpected validation branch"',
    );
  });

  it("returns an empty message when Polar returns an empty error object", () => {
    expect(formatPolarErrorMessage({})).toBe("");
  });
});
