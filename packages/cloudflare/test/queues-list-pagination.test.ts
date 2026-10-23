import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Result from "effect/Result";
import * as Stream from "effect/Stream";
import { describe, expect, test } from "vitest";
import { fromApiToken } from "../src/credentials.ts";
import { listQueues } from "../src/services/queues.ts";

describe("Queues list pagination", () => {
  test("fetches every page of an account's queues", async () => {
    const requests: Array<URL> = [];
    const http = Layer.succeed(
      HttpClient.HttpClient,
      HttpClient.make((request) =>
        Effect.sync(() => {
          const url = new URL(Result.getOrThrow(HttpClientRequest.toWebResult(request)).url);
          requests.push(url);
          const page = Number(url.searchParams.get("page"));
          const result =
            page <= 2 ? [{ queue_id: `queue-${page}`, queue_name: `queue-${page}` }] : [];

          return HttpClientResponse.fromWeb(
            request,
            new Response(
              JSON.stringify({
                success: true,
                errors: [],
                messages: [],
                result,
                result_info: {
                  page,
                  per_page: 1,
                  count: result.length,
                  total_count: 2,
                  total_pages: 2,
                },
              }),
              { status: 200, headers: { "content-type": "application/json" } },
            ),
          );
        }),
      ),
    );

    const items = await Effect.runPromise(
      Stream.runCollect(listQueues.items({ accountId: "test-account", perPage: 1 })).pipe(
        Effect.provide(
          Layer.mergeAll(http, fromApiToken({ apiToken: Redacted.make("test-token") })),
        ),
      ),
    );

    expect(requests.map((url) => url.searchParams.get("page"))).toEqual(["1", "2", "3"]);
    expect(requests.map((url) => url.searchParams.get("per_page"))).toEqual(["1", "1", "1"]);
    expect(Array.from(items, (queue) => queue.queueName)).toEqual(["queue-1", "queue-2"]);
  });
});
