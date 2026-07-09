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
import { keysMigrateKeys } from "../src/operations/keysMigrateKeys.ts";
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

describe("keysMigrateKeys", () => {
  it(
    "happy path - migrates keys into an API",
    { timeout: 30_000 },
    async () => {
      const apiId = `api_${testRunId}`;
      const apiName = `distilled-unkey-api-migrate-keys-${testRunId}`;
      const migrationId = `migration_${testRunId}`;
      const migrated = [
        {
          hash: `hash_${testRunId}_0`,
          keyId: `key_${testRunId}_0`,
        },
        {
          hash: `hash_${testRunId}_1`,
          keyId: `key_${testRunId}_1`,
        },
      ];
      const migrationInput = {
        migrationId,
        apiId,
        keys: [
          {
            hash: migrated[0].hash,
            name: `distilled-unkey-migrated-key-0-${testRunId}`,
            externalId: `distilled-unkey-external-0-${testRunId}`,
            meta: {
              source: "distilled-test",
              testRunId,
            },
            roles: [`distilled-unkey-role-${testRunId}`],
            permissions: [`distilled.unkey.${testRunId}.read`],
            expires: Date.now() + 86_400_000,
            enabled: true,
            credits: {
              remaining: 100,
              refill: {
                interval: "daily" as const,
                amount: 10,
              },
            },
            ratelimits: [
              {
                name: `distilled-unkey-limit-0-${testRunId}`,
                limit: 100,
                duration: 60_000,
                autoApply: true,
              },
            ],
          },
          {
            hash: migrated[1].hash,
            name: `distilled-unkey-migrated-key-1-${testRunId}`,
            externalId: `distilled-unkey-external-1-${testRunId}`,
            enabled: true,
          },
        ],
      };
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

            if (req.url === "/v2/keys.migrateKeys") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

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
                meta: { requestId: `req_migrate_${testRunId}` },
                data: {
                  migrated,
                  failed: [],
                },
              });
              return;
            }

            if (req.url === "/v2/apis.deleteApi") {
              deletedApiId = JSON.parse(body).apiId;
              apiExists = false;
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

            const result = yield* keysMigrateKeys(migrationInput);

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/keys.migrateKeys");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual(migrationInput);
            expect(result.meta.requestId).toBe(`req_migrate_${testRunId}`);
            expect(result.data.migrated).toEqual(migrated);
            expect(result.data.failed).toEqual([]);
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
    "error - BadRequest when no keys are provided",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "At least one key is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysMigrateKeys({
              migrationId: `migration_bad_request_${testRunId}`,
              apiId: `api_bad_request_${testRunId}`,
              keys: [],
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack key creation access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks key creation access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            keysMigrateKeys({
              migrationId: `migration_forbidden_${testRunId}`,
              apiId: `api_forbidden_${testRunId}`,
              keys: [
                {
                  hash: `hash_forbidden_${testRunId}`,
                  name: `distilled-unkey-migrated-key-forbidden-${testRunId}`,
                },
              ],
            }).pipe(Effect.flip),
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
            keysMigrateKeys({
              migrationId: `migration_missing_${testRunId}`,
              apiId: `api_missing_${testRunId}`,
              keys: [
                {
                  hash: `hash_missing_${testRunId}`,
                  name: `distilled-unkey-migrated-key-missing-${testRunId}`,
                },
              ],
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
