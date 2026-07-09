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
import { apisCreateApi } from "../src/operations/apisCreateApi.ts";
import { apisDeleteApi } from "../src/operations/apisDeleteApi.ts";
import { Retry } from "../src/retry.ts";

type Handler = (req: IncomingMessage, res: ServerResponse) => void;

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

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

describe("apisDeleteApi", () => {
  it(
    "happy path - deletes an API namespace",
    { timeout: 30_000 },
    async () => {
      const apiId = `api_${testRunId}`;
      const apiName = `distilled-unkey-api-delete-${testRunId}`;
      let apiExists = false;
      let deleted = false;
      let deleteMethod = "";
      let deleteUrl = "";
      let authorization = "";
      let deleteBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/apis.createApi") {
              apiExists = true;
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { apiId },
              });
              return;
            }

            if (req.url === "/v2/apis.deleteApi") {
              deleteMethod = req.method ?? "";
              deleteUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              deleteBody = body;

              if (!apiExists || deleted || JSON.parse(body).apiId !== apiId) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested API does not exist or has been deleted.",
                  "https://unkey.com/docs/errors/unkey/data/api_not_found",
                );
                return;
              }

              deleted = true;
              sendJson(res, 200, {
                meta: { requestId: `req_delete_${testRunId}` },
                data: {},
              });
              return;
            }

            sendApiError(
              res,
              404,
              "Not Found",
              "Route not found.",
              "https://unkey.com/docs/errors/unkey/data/route_not_found",
            );
          });
        },
        async (baseUrl) => {
          let createdApiId = "";

          const effect = Effect.gen(function* () {
            const created = yield* apisCreateApi({ name: apiName });
            createdApiId = created.data.apiId;

            const result = yield* apisDeleteApi({ apiId: createdApiId });

            expect(deleteMethod).toBe("POST");
            expect(deleteUrl).toBe("/v2/apis.deleteApi");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(deleteBody)).toEqual({ apiId });
            expect(result.meta.requestId).toBe(`req_delete_${testRunId}`);
            expect(result.data).toEqual({});
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                if (createdApiId !== "" && !deleted) {
                  yield* apisDeleteApi({ apiId: createdApiId }).pipe(
                    Effect.ignore,
                  );
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deleted).toBe(true);
        },
      );
    },
  );

  it(
    "error - BadRequest when the API ID is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The API ID is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            apisDeleteApi({ apiId: "" }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack API deletion access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks API deletion access.",
            "https://unkey.com/docs/errors/unkey/authorization/forbidden",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            apisDeleteApi({ apiId: `api_forbidden_${testRunId}` }).pipe(
              Effect.flip,
            ),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the API does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested API does not exist or has been deleted.",
            "https://unkey.com/docs/errors/unkey/data/api_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            apisDeleteApi({ apiId: `api_missing_${testRunId}` }).pipe(
              Effect.flip,
            ),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );

  it(
    "error - PreconditionFailed when delete protection is enabled",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            412,
            "Precondition Failed",
            "This API has delete protection enabled. Disable it before attempting to delete.",
            "https://unkey.com/docs/errors/unkey/application/protected_resource",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            apisDeleteApi({ apiId: `api_protected_${testRunId}` }).pipe(
              Effect.flip,
            ),
          );

          expect((error as { _tag: string })._tag).toBe("PreconditionFailed");
        },
      );
    },
  );
});
