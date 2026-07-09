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
import { analyticsGetVerifications } from "../src/operations/analyticsGetVerifications.ts";
import { Retry } from "../src/retry.ts";

type Handler = (req: IncomingMessage, res: ServerResponse) => void;

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
const validQuery =
  "SELECT COUNT(*) as count FROM key_verifications_v1 WHERE time >= now() - INTERVAL 1 DAY";

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

const readBody = (req: IncomingMessage): Promise<string> =>
  new Promise((resolve, reject) => {
    const chunks: Array<Buffer> = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("error", reject);
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });

const sendJson = (
  res: ServerResponse,
  status: number,
  body: Record<string, any>,
): void => {
  res.statusCode = status;
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(body));
};

const sendApiError = (
  res: ServerResponse,
  status: number,
  title: string,
  detail: string,
  type: string,
): void =>
  sendJson(res, status, {
    meta: { requestId: `req_${testRunId}` },
    error: {
      detail,
      status,
      title,
      type,
    },
  });

describe("analyticsGetVerifications", () => {
  it(
    "happy path - returns verification analytics rows",
    { timeout: 30_000 },
    async () => {
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            requestMethod = req.method ?? "";
            requestUrl = req.url ?? "";
            authorization = req.headers.authorization ?? "";
            requestBody = body;

            sendJson(res, 200, {
              meta: { requestId: `req_${testRunId}` },
              data: [{ count: 1, key_space_id: `ks_${testRunId}` }],
            });
          });
        },
        async (baseUrl) => {
          const result = await runWithBaseUrl(
            baseUrl,
            analyticsGetVerifications({ query: validQuery }),
          );

          expect(requestMethod).toBe("POST");
          expect(requestUrl).toBe("/v2/analytics.getVerifications");
          expect(authorization).toBe("Bearer unkey_test");
          expect(JSON.parse(requestBody)).toEqual({ query: validQuery });
          expect(result.meta.requestId).toBe(`req_${testRunId}`);
          expect(result.data).toEqual([
            { count: 1, key_space_id: `ks_${testRunId}` },
          ]);
        },
      );
    },
  );

  it(
    "error - BadRequest for invalid SQL",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The analytics query is invalid.",
            "https://unkey.com/docs/errors/user/bad_request/invalid_analytics_query",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            analyticsGetVerifications({
              query: "SELCT COUNT(*) FROM key_verifications_v1",
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack analytics access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks analytics access.",
            "https://unkey.com/docs/errors/unkey/authorization/forbidden",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            analyticsGetVerifications({ query: validQuery }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound for a missing key space filter",
    { timeout: 30_000 },
    async () => {
      const query = `SELECT COUNT(*) FROM key_verifications_v1 WHERE key_space_id = 'ks_missing_${testRunId}'`;

      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested key space was not found.",
            "https://unkey.com/docs/errors/unkey/data/key_space_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            analyticsGetVerifications({ query }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );

  it(
    "error - UnprocessableEntity when query limits are exceeded",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            422,
            "Unprocessable Entity",
            "The analytics query exceeded resource limits.",
            "https://unkey.com/docs/errors/user/unprocessable_entity/query_rows_limit_exceeded",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            analyticsGetVerifications({
              query:
                "SELECT key_id, region, outcome, COUNT(*) as count FROM key_verifications_v1 GROUP BY key_id, region, outcome",
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe(
            "UnprocessableEntity",
          );
        },
      );
    },
  );
});
