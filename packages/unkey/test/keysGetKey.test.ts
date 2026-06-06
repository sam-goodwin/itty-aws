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
import { keysGetKey } from "../src/operations/keysGetKey.ts";
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

describe("keysGetKey", () => {
  it(
    "happy path - gets a key",
    { timeout: 30_000 },
    async () => {
      const apiId = `api_${testRunId}`;
      const apiName = `distilled-unkey-api-get-key-${testRunId}`;
      const keyId = `key_${testRunId}`;
      const keyName = `distilled-unkey-key-get-${testRunId}`;
      const plaintext = `sk_${testRunId}`;
      const createdAt = Date.now();
      const keyDetails = {
        keyId,
        start: "sk_te",
        enabled: true,
        name: keyName,
        meta: {
          source: "distilled-test",
          testRunId,
        },
        createdAt,
        updatedAt: createdAt + 1_000,
        lastUsedAt: createdAt + 2_000,
        expires: createdAt + 86_400_000,
        permissions: [`distilled.unkey.${testRunId}.read`],
        roles: [`distilled-unkey-role-${testRunId}`],
        credits: {
          remaining: 500,
          refill: {
            interval: "daily" as const,
            amount: 100,
          },
        },
        identity: {
          id: `identity_${testRunId}`,
          externalId: `distilled-unkey-identity-${testRunId}`,
          meta: {
            tier: "test",
            testRunId,
          },
          ratelimits: [
            {
              id: `identity_rl_${testRunId}`,
              name: `distilled-unkey-identity-limit-${testRunId}`,
              limit: 50,
              duration: 60_000,
              autoApply: true,
            },
          ],
        },
        plaintext,
        ratelimits: [
          {
            id: `rl_${testRunId}`,
            name: `distilled-unkey-limit-${testRunId}`,
            limit: 100,
            duration: 60_000,
            autoApply: true,
          },
        ],
      };
      const keys = new Map<string, typeof keyDetails>();
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

              keys.set(keyId, keyDetails);
              sendJson(res, 200, {
                meta: { requestId: `req_create_key_${testRunId}` },
                data: { keyId, key: plaintext },
              });
              return;
            }

            if (req.url === "/v2/keys.getKey") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              const key = keys.get(parsed.keyId);
              if (key === undefined) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested key does not exist or has been deleted.",
                  "https://unkey.com/docs/errors/unkey/data/key_not_found",
                );
                return;
              }

              sendJson(res, 200, {
                meta: { requestId: `req_get_${testRunId}` },
                data: key,
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
              recoverable: true,
            });

            const result = yield* keysGetKey({
              keyId: createdKey.data.keyId,
              decrypt: true,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/keys.getKey");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({
              keyId,
              decrypt: true,
            });
            expect(result.meta.requestId).toBe(`req_get_${testRunId}`);
            expect(result.data.keyId).toBe(keyId);
            expect(result.data.start).toBe("sk_te");
            expect(result.data.enabled).toBe(true);
            expect(result.data.name).toBe(keyName);
            expect(result.data.meta).toEqual(keyDetails.meta);
            expect(result.data.createdAt).toBe(createdAt);
            expect(result.data.updatedAt).toBe(createdAt + 1_000);
            expect(result.data.lastUsedAt).toBe(createdAt + 2_000);
            expect(result.data.expires).toBe(createdAt + 86_400_000);
            expect(result.data.permissions).toEqual(keyDetails.permissions);
            expect(result.data.roles).toEqual(keyDetails.roles);
            expect(result.data.credits).toEqual(keyDetails.credits);
            expect(result.data.identity).toEqual(keyDetails.identity);
            expect(Redacted.value(result.data.plaintext!)).toBe(plaintext);
            expect(result.data.ratelimits).toEqual(keyDetails.ratelimits);
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
            keysGetKey({ keyId: "" }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack key read access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks key read access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysGetKey({
              keyId: `key_forbidden_${testRunId}`,
              decrypt: true,
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
            keysGetKey({
              keyId: `key_missing_${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
