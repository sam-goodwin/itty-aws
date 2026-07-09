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
import { keysUpdateKey } from "../src/operations/keysUpdateKey.ts";
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

describe("keysUpdateKey", () => {
  it(
    "happy path - updates a key",
    { timeout: 30_000 },
    async () => {
      const apiId = `api_${testRunId}`;
      const apiName = `distilled-unkey-api-update-key-${testRunId}`;
      const keyId = `key_${testRunId}`;
      const keyName = `distilled-unkey-key-update-${testRunId}`;
      const updatedKeyName = `distilled-unkey-key-updated-${testRunId}`;
      const createdAt = Date.now();
      const updateInput = {
        keyId,
        name: updatedKeyName,
        externalId: `distilled-unkey-external-updated-${testRunId}`,
        meta: {
          source: "distilled-test",
          tier: "pro",
          testRunId,
        },
        expires: createdAt + 172_800_000,
        credits: {
          remaining: 900,
          refill: {
            interval: "monthly" as const,
            amount: 300,
            refillDay: 1,
          },
        },
        ratelimits: [
          {
            name: `distilled-unkey-limit-updated-${testRunId}`,
            limit: 200,
            duration: 60_000,
            autoApply: true,
          },
        ],
        enabled: false,
        roles: [`distilled-unkey-role-updated-${testRunId}`],
        permissions: [`distilled.unkey.${testRunId}.write`],
      };
      const initialKey = {
        keyId,
        name: keyName,
        enabled: true,
        createdAt,
        updatedAt: createdAt,
      };
      const updatedKey = {
        ...initialKey,
        ...updateInput,
        updatedAt: createdAt + 1_000,
      };
      const keys = new Map<string, Record<string, any>>();
      let apiExists = false;
      let deletedApiId = "";
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
              const parsed = JSON.parse(body);
              if (!apiExists || parsed.apiId !== apiId) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested API does not exist or has been deleted.",
                  "https://unkey.com/docs/errors/unkey/data/api_not_found",
                );
                return;
              }

              keys.set(keyId, initialKey);
              sendJson(res, 200, {
                meta: { requestId: `req_create_key_${testRunId}` },
                data: { keyId, key: `sk_${testRunId}` },
              });
              return;
            }

            if (req.url === "/v2/keys.updateKey") {
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

              keys.set(parsed.keyId, updatedKey);
              sendJson(res, 200, {
                meta: { requestId: `req_update_${testRunId}` },
                data: updatedKey,
              });
              return;
            }

            if (req.url === "/v2/apis.deleteApi") {
              deletedApiId = JSON.parse(body).apiId;
              apiExists = false;
              keys.clear();
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
            const createdApi = yield* apisCreateApi({ name: apiName });
            createdApiId = createdApi.data.apiId;

            const createdKey = yield* keysCreateKey({
              apiId: createdApiId,
              name: keyName,
            });

            const result = yield* keysUpdateKey({
              ...updateInput,
              keyId: createdKey.data.keyId,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/keys.updateKey");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual(updateInput);
            expect(result.meta.requestId).toBe(`req_update_${testRunId}`);
            expect(result.data).toEqual(updatedKey);
            expect(keys.get(keyId)).toEqual(updatedKey);
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
            keysUpdateKey({
              keyId: "",
              name: `distilled-unkey-key-bad-request-${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack key update access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks key update access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysUpdateKey({
              keyId: `key_forbidden_${testRunId}`,
              enabled: false,
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
            keysUpdateKey({
              keyId: `key_missing_${testRunId}`,
              name: `distilled-unkey-key-missing-${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
