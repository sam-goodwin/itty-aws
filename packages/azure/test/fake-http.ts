/**
 * Recording, scripted fake `HttpClient` for account-free Azure client tests.
 *
 * `mockHttp(handler)` returns a `Layer` plus a `calls` log. The handler maps
 * each outbound request (and its 0-based index) to a canned response, letting a
 * test script a full ARM long-running-operation sequence
 * (`202` ack → monitor poll → final GET) and then assert on the URLs/methods the
 * poller actually hit.
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

export interface RecordedCall {
  method: string;
  url: string;
}

export type FakeHandler = (
  request: HttpClientRequest.HttpClientRequest,
  index: number,
) => FakeResponse;

export const mockHttp = (
  handler: FakeHandler,
): { layer: Layer.Layer<HttpClient.HttpClient>; calls: RecordedCall[] } => {
  const calls: RecordedCall[] = [];
  const layer = Layer.succeed(
    HttpClient.HttpClient,
    HttpClient.make((request) => {
      const index = calls.length;
      calls.push({ method: request.method, url: request.url });
      const res = handler(request, index);
      const body = res.body === undefined ? null : JSON.stringify(res.body);
      return Effect.succeed(
        HttpClientResponse.fromWeb(
          request,
          new Response(body, {
            status: res.status,
            headers: { "content-type": "application/json", ...res.headers },
          }),
        ),
      );
    }),
  );
  return { layer, calls };
};
