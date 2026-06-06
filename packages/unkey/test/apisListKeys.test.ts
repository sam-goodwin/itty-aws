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
import { apisListKeys } from "../src/operations/apisListKeys.ts";
import { keysCreateKey } from "../src/operations/keysCreateKey.ts";
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

describe("apisListKeys", () => {
  it(
    "happy path - lists keys for an API namespace",
    { timeout: 30_000 },
    async () => {
      const apiId = `api_${testRunId}`;
      const apiName = `distilled-unkey-api-list-keys-${testRunId}`;
      const keyId = `key_${testRunId}`;
      const keyName = `distilled-unkey-key-list-${testRunId}`;
      const createdAt = Date.now();
      let apiExists = false;
      let keyExists = false;
      let deletedApiId = "";
      let listMethod = "";
      let listUrl = "";
      let authorization = "";
      let listBody = "";

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

            if (req.url === "/v2/keys.createKey") {
              if (!apiExists || JSON.parse(body).apiId !== apiId) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested API does not exist or has been deleted.",
                  "https://unkey.com/docs/errors/unkey/data/api_not_found",
                );
                return;
              }

              keyExists = true;
              sendJson(res, 200, {
                meta: { requestId: `req_key_${testRunId}` },
                data: { keyId, key: `sk_${testRunId}` },
              });
              return;
            }

            if (req.url === "/v2/apis.listKeys") {
              listMethod = req.method ?? "";
              listUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              listBody = body;

              if (!apiExists || JSON.parse(body).apiId !== apiId) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested API does not exist or has been deleted.",
                  "https://unkey.com/docs/errors/unkey/data/api_not_found",
                );
                return;
              }

              sendJson(res, 200, {
                meta: { requestId: `req_list_${testRunId}` },
                data: keyExists
                  ? [
                      {
                        keyId,
                        start: "sk_te",
                        enabled: true,
                        name: keyName,
                        createdAt,
                      },
                    ]
                  : [],
                pagination: { hasMore: false },
              });
              return;
            }

            if (req.url === "/v2/apis.deleteApi") {
              deletedApiId = JSON.parse(body).apiId;
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

            const key = yield* keysCreateKey({
              apiId: createdApiId,
              name: keyName,
            });

            const result = yield* apisListKeys({
              apiId: createdApiId,
              limit: 10,
            });

            expect(listMethod).toBe("POST");
            expect(listUrl).toBe("/v2/apis.listKeys");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(listBody)).toEqual({ apiId, limit: 10 });
            expect(key.data.keyId).toBe(keyId);
            expect(result.meta.requestId).toBe(`req_list_${testRunId}`);
            expect(result.data).toHaveLength(1);
            expect(result.data[0]?.keyId).toBe(keyId);
            expect(result.data[0]?.name).toBe(keyName);
            expect(result.data[0]?.enabled).toBe(true);
            expect(result.data[0]?.createdAt).toBe(createdAt);
            expect(result.pagination?.hasMore).toBe(false);
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                if (createdApiId !== "") {
                  yield* apisDeleteApi({ apiId: createdApiId }).pipe(
                    Effect.ignore,
                  );
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deletedApiId).toBe(apiId);
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
            apisListKeys({ apiId: "" }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack key listing access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks key listing access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            apisListKeys({ apiId: `api_forbidden_${testRunId}` }).pipe(
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
            apisListKeys({ apiId: `api_missing_${testRunId}` }).pipe(
              Effect.flip,
            ),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
