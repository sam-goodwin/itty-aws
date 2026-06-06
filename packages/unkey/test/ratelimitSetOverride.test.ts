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

describe("ratelimitSetOverride", () => {
  it(
    "happy path - sets a ratelimit override",
    { timeout: 30_000 },
    async () => {
      const overrideId = `override_${testRunId}`;
      const input = {
        namespace: `distilled-unkey-ratelimit-${testRunId}`,
        identifier: `distilled-unkey-user-${testRunId}`,
        duration: 60_000,
        limit: 250,
      };
      const overrides = new Map<string, string>();
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
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              overrides.set(
                overrideKey(parsed.namespace, parsed.identifier),
                overrideId,
              );
              sendJson(res, 200, {
                meta: { requestId: `req_set_${testRunId}` },
                data: { overrideId },
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
            const result = yield* ratelimitSetOverride(input);
            createdOverride = {
              namespace: input.namespace,
              identifier: input.identifier,
            };

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/ratelimit.setOverride");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual(input);
            expect(result.meta.requestId).toBe(`req_set_${testRunId}`);
            expect(result.data.overrideId).toBe(overrideId);
            expect(
              overrides.has(overrideKey(input.namespace, input.identifier)),
            ).toBe(true);
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
            namespace: input.namespace,
            identifier: input.identifier,
          });
          expect(overrides.has(overrideKey(input.namespace, input.identifier)))
            .toBe(false);
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
            ratelimitSetOverride({
              namespace: "",
              identifier: `distilled-unkey-user-${testRunId}`,
              duration: 60_000,
              limit: 250,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack override write access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks ratelimit override write access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            ratelimitSetOverride({
              namespace: `distilled-unkey-ratelimit-${testRunId}`,
              identifier: `distilled-unkey-user-forbidden-${testRunId}`,
              duration: 60_000,
              limit: 250,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the namespace does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested ratelimit namespace does not exist.",
            "https://unkey.com/docs/errors/unkey/data/ratelimit_namespace_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            ratelimitSetOverride({
              namespace: `distilled-unkey-ratelimit-missing-${testRunId}`,
              identifier: `distilled-unkey-user-missing-${testRunId}`,
              duration: 60_000,
              limit: 250,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
