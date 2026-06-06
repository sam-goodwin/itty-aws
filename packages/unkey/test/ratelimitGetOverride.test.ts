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
import { ratelimitDeleteOverride } from "../src/operations/ratelimitDeleteOverride.ts";
import { ratelimitGetOverride } from "../src/operations/ratelimitGetOverride.ts";
import { ratelimitSetOverride } from "../src/operations/ratelimitSetOverride.ts";
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

const overrideKey = (namespace: string, identifier: string): string =>
  `${namespace}:${identifier}`;

describe("ratelimitGetOverride", () => {
  it(
    "happy path - gets a ratelimit override",
    { timeout: 30_000 },
    async () => {
      const overrideId = `override_${testRunId}`;
      const overrideInput = {
        namespace: `distilled-unkey-ratelimit-${testRunId}`,
        identifier: `distilled-unkey-user-${testRunId}`,
        duration: 60_000,
        limit: 250,
      };
      const overrideDetails = {
        overrideId,
        duration: overrideInput.duration,
        identifier: overrideInput.identifier,
        limit: overrideInput.limit,
      };
      const overrides = new Map<string, typeof overrideDetails>();
      let deletedOverride:
        | {
            namespace: string;
            identifier: string;
          }
        | undefined;
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/ratelimit.setOverride") {
              const parsed = JSON.parse(body);
              overrides.set(
                overrideKey(parsed.namespace, parsed.identifier),
                overrideDetails,
              );
              sendJson(res, 200, {
                meta: { requestId: `req_set_${testRunId}` },
                data: { overrideId },
              });
              return;
            }

            if (req.url === "/v2/ratelimit.getOverride") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              const override = overrides.get(
                overrideKey(parsed.namespace, parsed.identifier),
              );
              if (override === undefined) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested ratelimit override does not exist.",
                  "https://unkey.com/docs/errors/unkey/data/ratelimit_override_not_found",
                );
                return;
              }

              sendJson(res, 200, {
                meta: { requestId: `req_get_${testRunId}` },
                data: override,
              });
              return;
            }

            if (req.url === "/v2/ratelimit.deleteOverride") {
              const parsed = JSON.parse(body);
              deletedOverride = {
                namespace: parsed.namespace,
                identifier: parsed.identifier,
              };
              overrides.delete(overrideKey(parsed.namespace, parsed.identifier));
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
          let createdOverride:
            | {
                namespace: string;
                identifier: string;
              }
            | undefined;

          const effect = Effect.gen(function* () {
            const created = yield* ratelimitSetOverride(overrideInput);
            createdOverride = {
              namespace: overrideInput.namespace,
              identifier: overrideInput.identifier,
            };

            expect(created.data.overrideId).toBe(overrideId);

            const result = yield* ratelimitGetOverride({
              namespace: overrideInput.namespace,
              identifier: overrideInput.identifier,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/ratelimit.getOverride");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({
              namespace: overrideInput.namespace,
              identifier: overrideInput.identifier,
            });
            expect(result.meta.requestId).toBe(`req_get_${testRunId}`);
            expect(result.data).toEqual(overrideDetails);
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                if (createdOverride !== undefined) {
                  yield* ratelimitDeleteOverride(createdOverride).pipe(
                    Effect.ignore,
                  );
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deletedOverride).toEqual({
            namespace: overrideInput.namespace,
            identifier: overrideInput.identifier,
          });
        },
      );
    },
  );

  it(
    "error - BadRequest when the namespace is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The ratelimit namespace is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            ratelimitGetOverride({
              namespace: "",
              identifier: `distilled-unkey-user-${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack override read access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks ratelimit override read access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            ratelimitGetOverride({
              namespace: `distilled-unkey-ratelimit-${testRunId}`,
              identifier: `distilled-unkey-user-forbidden-${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the override does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested ratelimit override does not exist.",
            "https://unkey.com/docs/errors/unkey/data/ratelimit_override_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            ratelimitGetOverride({
              namespace: `distilled-unkey-ratelimit-${testRunId}`,
              identifier: `distilled-unkey-user-missing-${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
