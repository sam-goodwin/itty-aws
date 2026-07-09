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
import { keysCreateKey } from "../src/operations/keysCreateKey.ts";
import { keysDeleteKey } from "../src/operations/keysDeleteKey.ts";
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

describe("keysDeleteKey", () => {
  it(
    "happy path - deletes a key",
    { timeout: 30_000 },
    async () => {
      const apiId = `api_${testRunId}`;
      const apiName = `distilled-unkey-api-delete-key-${testRunId}`;
      const keyId = `key_${testRunId}`;
      const keyName = `distilled-unkey-key-delete-${testRunId}`;
      const keys = new Set<string>();
      let apiExists = false;
      let deletedApiId = "";
      let deletedKeyId = "";
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/apis.createApi") {
              apiExists = true;
              sendJson(res, 200, {
                meta: { requestId: `req_create_api_${testRunId}` },
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

              keys.add(keyId);
              sendJson(res, 200, {
                meta: { requestId: `req_create_key_${testRunId}` },
                data: { keyId, key: `sk_${testRunId}` },
              });
              return;
            }

            if (req.url === "/v2/keys.deleteKey") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              if (!keys.has(parsed.keyId)) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested key does not exist or has been deleted.",
                  "https://unkey.com/docs/errors/unkey/data/key_not_found",
                );
                return;
              }

              deletedKeyId = parsed.keyId;
              keys.delete(parsed.keyId);
              sendJson(res, 200, {
                meta: { requestId: `req_delete_key_${testRunId}` },
                data: {},
              });
              return;
            }

            if (req.url === "/v2/apis.deleteApi") {
              deletedApiId = JSON.parse(body).apiId;
              apiExists = false;
              keys.clear();
              sendJson(res, 200, {
                meta: { requestId: `req_delete_api_${testRunId}` },
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
            const createdApi = yield* apisCreateApi({ name: apiName });
            createdApiId = createdApi.data.apiId;

            const createdKey = yield* keysCreateKey({
              apiId: createdApiId,
              name: keyName,
            });

            const result = yield* keysDeleteKey({
              keyId: createdKey.data.keyId,
              permanent: true,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/keys.deleteKey");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({
              keyId,
              permanent: true,
            });
            expect(result.meta.requestId).toBe(`req_delete_key_${testRunId}`);
            expect(result.data).toEqual({});
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
          expect(deletedKeyId).toBe(keyId);
          expect(deletedApiId).toBe(apiId);
        },
      );
    },
  );

  it(
    "error - BadRequest when the key ID is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The key ID is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysDeleteKey({ keyId: "" }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack key delete access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks key delete access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysDeleteKey({
              keyId: `key_forbidden_${testRunId}`,
              permanent: true,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the key does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested key does not exist or has been deleted.",
            "https://unkey.com/docs/errors/unkey/data/key_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysDeleteKey({
              keyId: `key_missing_${testRunId}`,
              permanent: true,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
