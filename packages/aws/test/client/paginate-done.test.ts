/**
 * Unit tests for paginator done-detection.
 *
 * `makePaginated` streams pages until the response's continuation token is
 * terminal. AWS marks the final page by omitting the token, returning it as
 * `null`, or — for several services (e.g. SSM, CloudWatch Logs) — as an
 * empty string. Treating `""` as a live token re-requests the first page
 * with `NextToken: ""` forever. The official aws-sdk-js-v3 paginators stop
 * on any falsy token (`hasNext = !!token`); `isTerminalPageToken` matches
 * that behavior while keeping object tokens (DynamoDB `LastEvaluatedKey`)
 * live.
 */
import { describe, expect, it } from "vitest";
import { isTerminalPageToken } from "../../src/client/api.ts";

describe("isTerminalPageToken", () => {
  it("treats an absent token as terminal", () => {
    expect(isTerminalPageToken(undefined)).toBe(true);
  });

  it("treats a null token as terminal", () => {
    expect(isTerminalPageToken(null)).toBe(true);
  });

  it("treats an empty-string token as terminal (SSM/CloudWatch Logs style)", () => {
    expect(isTerminalPageToken("")).toBe(true);
  });

  it("treats a non-empty string token as a live token", () => {
    expect(isTerminalPageToken("AAAAKgEB...")).toBe(false);
  });

  it("treats an object token (DynamoDB LastEvaluatedKey) as live", () => {
    expect(isTerminalPageToken({ pk: { S: "a" } })).toBe(false);
    // even an empty key object is not a documented terminal marker
    expect(isTerminalPageToken({})).toBe(false);
  });

  it("treats a numeric token as live", () => {
    expect(isTerminalPageToken(0)).toBe(false);
    expect(isTerminalPageToken(2)).toBe(false);
  });
});
