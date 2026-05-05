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
});
