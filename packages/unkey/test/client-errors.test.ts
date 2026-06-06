import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
} from "node:http";
import type { AddressInfo } from "node:net";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apisGetApi } from "../src/operations/apisGetApi.ts";
import { liveness } from "../src/operations/liveness.ts";
import { Retry } from "../src/retry.ts";

type Handler = (req: IncomingMessage, res: ServerResponse) => void;

const withServer = async <A>(
  handler: Handler,
  run: (baseUrl: string) => Promise<A>,
): Promise<A> => {
  const server = createServer(handler);

  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  try {
    const { port } = server.address() as AddressInfo;
    return await run(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
};

const runWithBaseUrl = <A, E>(
  baseUrl: string,
  effect: Effect.Effect<A, E, any>,
): Promise<A> =>
  Effect.runPromise(
    effect.pipe(
      Effect.provide(
        Layer.mergeAll(
          FetchHttpClient.layer,
          Layer.succeed(Credentials, {
            rootKey: Redacted.make("unkey_test"),
            apiBaseUrl: baseUrl,
          }),
          Layer.succeed(Retry, { while: () => false }),
        ),
      ),
    ) as Effect.Effect<A, E, never>,
  );

describe("client error matching", () => {
  it("maps a non-JSON 404 response to NotFound", async () => {
    await withServer(
      (_req, res) => {
        res.statusCode = 404;
        res.setHeader("content-type", "text/plain; charset=utf-8");
        res.end("404 page not found\n");
      },
      async (baseUrl) => {
        const error = await runWithBaseUrl(
          baseUrl,
          apisGetApi({ apiId: "api_missing" }).pipe(Effect.flip),
        );

        expect((error as { _tag: string })._tag).toBe("NotFound");
        expect((error as { message: string }).message).toBe(
          "404 page not found",
        );
      },
    );
  });

  it("maps a non-JSON 405 response to MethodNotAllowed", async () => {
    await withServer(
      (_req, res) => {
        res.statusCode = 405;
        res.setHeader("content-type", "text/plain; charset=utf-8");
        res.end("Method Not Allowed\n");
      },
      async (baseUrl) => {
        const error = await runWithBaseUrl(
          baseUrl,
          liveness({}).pipe(Effect.flip),
        );

        expect((error as { _tag: string })._tag).toBe("MethodNotAllowed");
        expect((error as { message: string }).message).toBe(
          "Method Not Allowed",
        );
      },
    );
  });

  it("omits retryAfter when a retryable response has no server retry hint", async () => {
    await withServer(
      (_req, res) => {
        res.statusCode = 429;
        res.setHeader("content-type", "application/json");
        res.end(
          JSON.stringify({
            meta: { requestId: "req_test" },
            error: {
              detail: "Rate limit exceeded",
              status: 429,
              title: "Too Many Requests",
              type: "https://unkey.com/docs/errors/unkey/rate_limit",
            },
          }),
        );
      },
      async (baseUrl) => {
        const error = await runWithBaseUrl(
          baseUrl,
          apisGetApi({ apiId: "api_missing" }).pipe(Effect.flip),
        );

        expect((error as { _tag: string })._tag).toBe("TooManyRequests");
        expect("retryAfter" in (error as object)).toBe(false);
      },
    );
  });
});
