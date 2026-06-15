/**
 * Scripted fake `HttpClient` layer for account-free client tests.
 *
 * Each test provides a handler that maps an outbound request to a canned
 * response (status + JSON body + headers). This lets us exercise the full
 * `makeAPI` request/response pipeline — including multi-step flows like
 * long-running-operation polling — without any network or credentials.
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";

export interface FakeResponse {
  status: number;
  /** JSON-serialized into the response body. Omit for an empty body. */
  body?: unknown;
  headers?: Record<string, string>;
}

export type FakeHandler = (
  request: HttpClientRequest.HttpClientRequest,
) => FakeResponse;

/** A `Layer` providing an `HttpClient` whose responses come from `handler`. */
export const fakeHttpLayer = (
  handler: FakeHandler,
): Layer.Layer<HttpClient.HttpClient> =>
  Layer.succeed(
    HttpClient.HttpClient,
    HttpClient.make((request) => {
      const res = handler(request);
      const body = res.body === undefined ? null : JSON.stringify(res.body);
      return Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response(body, {
            status: res.status,
            headers: {
              "content-type": "application/json",
              ...res.headers,
            },
          }),
        ),
      );
    }),
  );
