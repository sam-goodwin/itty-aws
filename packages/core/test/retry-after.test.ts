import * as Duration from "effect/Duration";
import { describe, expect, it } from "vitest";
import {
  parseRatelimit,
  parseRetryAfter,
  parseServerRetryHint,
} from "../src/retry-after.ts";

describe("parseRetryAfter (RFC 7231 §7.1.3)", () => {
  it("parses delay-seconds (integer)", () => {
    const d = parseRetryAfter({ "retry-after": "120" });
    expect(d).toBeDefined();
    expect(Duration.toSeconds(d!)).toBe(120);
  });

  it("treats 0 seconds as a zero duration", () => {
    const d = parseRetryAfter({ "retry-after": "0" });
    expect(d).toBeDefined();
    expect(Duration.toMillis(d!)).toBe(0);
  });

  it("parses HTTP-date in the future as a positive duration", () => {
    const future = new Date(Date.now() + 5_000).toUTCString();
    const d = parseRetryAfter({ "retry-after": future });
    expect(d).toBeDefined();
    const ms = Duration.toMillis(d!);
    // toUTCString only has second-precision, so the parsed value is rounded
    // down by up to 999ms relative to the wall-clock target. Allow generous
    // slop on both sides for clock drift.
    expect(ms).toBeGreaterThanOrEqual(3_900);
    expect(ms).toBeLessThanOrEqual(5_200);
  });

  it("parses HTTP-date in the past as a zero duration", () => {
    const past = new Date(Date.now() - 60_000).toUTCString();
    const d = parseRetryAfter({ "retry-after": past });
    expect(d).toBeDefined();
    expect(Duration.toMillis(d!)).toBe(0);
  });

  it("returns undefined for missing header", () => {
    expect(parseRetryAfter({})).toBeUndefined();
    expect(parseRetryAfter(undefined)).toBeUndefined();
  });

  it("returns undefined for empty / whitespace value", () => {
    expect(parseRetryAfter({ "retry-after": "" })).toBeUndefined();
    expect(parseRetryAfter({ "retry-after": "   " })).toBeUndefined();
  });

  it("returns undefined for unparseable garbage", () => {
    expect(parseRetryAfter({ "retry-after": "not-a-date" })).toBeUndefined();
  });

  it("rejects negative integers (not a delay-seconds per RFC)", () => {
    // "-5" is not 1*DIGIT and Date.parse fails — must fall through to undefined.
    expect(parseRetryAfter({ "retry-after": "-5" })).toBeUndefined();
  });
});

describe("parseRatelimit (IETF httpapi-ratelimit-headers)", () => {
  it("parses compact `r=0, t=30` form", () => {
    const d = parseRatelimit({ ratelimit: "r=0, t=30" });
    expect(d).toBeDefined();
    expect(Duration.toSeconds(d!)).toBe(30);
  });

  it("parses verbose `remaining=0, reset=15` form", () => {
    const d = parseRatelimit({ ratelimit: "limit=100, remaining=0, reset=15" });
    expect(d).toBeDefined();
    expect(Duration.toSeconds(d!)).toBe(15);
  });

  it("returns undefined when remaining > 0 (not actually rate-limited)", () => {
    expect(parseRatelimit({ ratelimit: "r=10, t=30" })).toBeUndefined();
  });

  it("returns undefined when reset is missing", () => {
    expect(parseRatelimit({ ratelimit: "r=0" })).toBeUndefined();
  });

  it("returns undefined for missing header", () => {
    expect(parseRatelimit({})).toBeUndefined();
    expect(parseRatelimit(undefined)).toBeUndefined();
  });
});

describe("parseServerRetryHint", () => {
  it("prefers Retry-After when both are present", () => {
    const d = parseServerRetryHint({
      "retry-after": "5",
      ratelimit: "r=0, t=99",
    });
    expect(Duration.toSeconds(d!)).toBe(5);
  });

  it("falls back to Ratelimit when Retry-After is absent", () => {
    const d = parseServerRetryHint({ ratelimit: "r=0, t=42" });
    expect(Duration.toSeconds(d!)).toBe(42);
  });

  it("returns undefined when neither header is present", () => {
    expect(parseServerRetryHint({})).toBeUndefined();
  });
});
