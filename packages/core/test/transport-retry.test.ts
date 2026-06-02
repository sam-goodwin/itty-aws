import {
  HttpClientError,
  TransportError,
  StatusCodeError,
  EncodeError,
} from "effect/unstable/http/HttpClientError";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { describe, expect, it } from "vitest";
import * as Category from "../src/category.ts";

const fakeRequest = HttpClientRequest.get("https://example.com");

describe("isTransientError — HttpClientError", () => {
  it("retries TransportError (undici ConnectTimeoutError, socket reset, …)", () => {
    const reason = new TransportError({
      request: fakeRequest,
      cause: new Error("Connect Timeout Error"),
    });
    const error = new HttpClientError({ reason });
    expect(Category.isTransientError(error)).toBe(true);
  });

  it("does NOT retry StatusCodeError (left to per-SDK API client)", () => {
    const response = HttpClientResponse.fromWeb(
      fakeRequest,
      new Response(null, { status: 503 }),
    );
    const reason = new StatusCodeError({ request: fakeRequest, response });
    const error = new HttpClientError({ reason });
    expect(Category.isTransientError(error)).toBe(false);
  });

  it("does NOT retry EncodeError (deterministic client bug)", () => {
    const reason = new EncodeError({
      request: fakeRequest,
      cause: new Error("bad body"),
    });
    const error = new HttpClientError({ reason });
    expect(Category.isTransientError(error)).toBe(false);
  });

  it("returns false for non-HttpClientError values", () => {
    expect(Category.isTransientError({ some: "object" })).toBe(false);
    expect(Category.isTransientError(undefined)).toBe(false);
    expect(Category.isTransientError(null)).toBe(false);
  });
});
