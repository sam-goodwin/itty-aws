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
import { keysVerifyKey } from "../src/operations/keysVerifyKey.ts";
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

describe("keysVerifyKey", () => {
  it(
    "happy path - verifies a key",
    { timeout: 30_000 },
    async () => {
      const apiId = `api_${testRunId}`;
      const apiName = `distilled-unkey-api-verify-key-${testRunId}`;
      const keyId = `key_${testRunId}`;
      const keyName = `distilled-unkey-key-verify-${testRunId}`;
      const plaintext = `sk_${testRunId}`;
      const now = Date.now();
      const verificationData = {
        valid: true,
        code: "VALID" as const,
        keyId,
        name: keyName,
        meta: {
          source: "distilled-test",
          testRunId,
        },
        expires: now + 86_400_000,
        credits: 498,
        enabled: true,
        permissions: [`distilled.unkey.${testRunId}.read`],
        roles: [`distilled-unkey-role-${testRunId}`],
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
        ratelimits: [
          {
            exceeded: false,
            id: `rl_${testRunId}`,
            name: `distilled-unkey-limit-${testRunId}`,
            limit: 100,
            duration: 60_000,
            reset: now + 60_000,
            remaining: 99,
            autoApply: true,
          },
        ],
      };
      const verifyInput = {
        key: plaintext,
        tags: [`distilled-unkey-tag-${testRunId}`],
        permissions: `distilled.unkey.${testRunId}.read`,
        credits: {
          cost: 2,
        },
        ratelimits: [
          {
            name: `distilled-unkey-limit-${testRunId}`,
            cost: 1,
            limit: 100,
            duration: 60_000,
          },
        ],
        migrationId: `migration_${testRunId}`,
      };
      const keys = new Map<string, typeof verificationData>();
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

              keys.set(plaintext, verificationData);
              sendJson(res, 200, {
                meta: { requestId: `req_create_key_${testRunId}` },
                data: { keyId, key: plaintext },
              });
              return;
            }

            if (req.url === "/v2/keys.verifyKey") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              const verification = keys.get(parsed.key);
              if (verification === undefined) {
                sendJson(res, 200, {
                  meta: { requestId: `req_verify_${testRunId}` },
                  data: {
                    valid: false,
                    code: "NOT_FOUND",
                  },
                });
                return;
              }

              sendJson(res, 200, {
                meta: { requestId: `req_verify_${testRunId}` },
                data: verification,
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
              permissions: verificationData.permissions,
              meta: verificationData.meta,
              recoverable: true,
            });

            const result = yield* keysVerifyKey({
              ...verifyInput,
              key: createdKey.data.key,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/keys.verifyKey");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual(verifyInput);
            expect(result.meta.requestId).toBe(`req_verify_${testRunId}`);
            expect(result.data.valid).toBe(true);
            expect(result.data.code).toBe("VALID");
            expect(result.data.keyId).toBe(keyId);
            expect(result.data.name).toBe(keyName);
            expect(result.data.meta).toEqual(verificationData.meta);
            expect(result.data.expires).toBe(now + 86_400_000);
            expect(result.data.credits).toBe(498);
            expect(result.data.enabled).toBe(true);
            expect(result.data.permissions).toEqual(
              verificationData.permissions,
            );
            expect(result.data.roles).toEqual(verificationData.roles);
            expect(result.data.identity).toEqual(verificationData.identity);
            expect(result.data.ratelimits).toEqual(
              verificationData.ratelimits,
            );
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
    "error - BadRequest when the key is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The key is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysVerifyKey({
              key: "",
              permissions: `distilled.unkey.${testRunId}.read`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack key verification access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks key verification access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysVerifyKey({
              key: `sk_forbidden_${testRunId}`,
              permissions: `distilled.unkey.${testRunId}.read`,
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
            keysVerifyKey({
              key: `sk_missing_${testRunId}`,
              permissions: `distilled.unkey.${testRunId}.read`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
