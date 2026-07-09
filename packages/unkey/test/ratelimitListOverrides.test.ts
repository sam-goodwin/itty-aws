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
import { ratelimitListOverrides } from "../src/operations/ratelimitListOverrides.ts";
import { ratelimitSetOverride } from "../src/operations/ratelimitSetOverride.ts";
import { Retry } from "../src/retry.ts";

type Handler = (req: IncomingMessage, res: ServerResponse) => void;

type OverrideDetails = {
  namespace: string;
  overrideId: string;
  duration: number;
  identifier: string;
  limit: number;
};

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

const toOutputOverride = ({
  namespace: _namespace,
  ...override
}: OverrideDetails): Omit<OverrideDetails, "namespace"> => override;

describe("ratelimitListOverrides", () => {
  it(
    "happy path - lists ratelimit overrides",
    { timeout: 30_000 },
    async () => {
      const namespace = `distilled-unkey-ratelimit-${testRunId}`;
      const firstOverrideInput = {
        namespace,
        identifier: `distilled-unkey-user-primary-${testRunId}`,
        duration: 60_000,
        limit: 250,
      };
      const secondOverrideInput = {
        namespace,
        identifier: `distilled-unkey-user-secondary-${testRunId}`,
        duration: 120_000,
        limit: 500,
      };
      const overrides = new Map<string, OverrideDetails>();
      const deletedOverrides: Array<{ namespace: string; identifier: string }> =
        [];
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/ratelimit.setOverride") {
              const parsed = JSON.parse(body);
              const overrideId = `override_${parsed.identifier}_${testRunId}`;
              overrides.set(overrideKey(parsed.namespace, parsed.identifier), {
                namespace: parsed.namespace,
                overrideId,
                duration: parsed.duration,
                identifier: parsed.identifier,
                limit: parsed.limit,
              });
              sendJson(res, 200, {
                meta: { requestId: `req_set_${testRunId}` },
                data: { overrideId },
              });
              return;
            }

            if (req.url === "/v2/ratelimit.listOverrides") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              const listedOverrides = Array.from(overrides.values())
                .filter((override) => override.namespace === parsed.namespace)
                .slice(0, parsed.limit)
                .map(toOutputOverride);

              sendJson(res, 200, {
                meta: { requestId: `req_list_${testRunId}` },
                data: listedOverrides,
                pagination: {
                  cursor: `cursor_${testRunId}`,
                  hasMore: false,
                },
              });
              return;
            }

            if (req.url === "/v2/ratelimit.deleteOverride") {
              const parsed = JSON.parse(body);
              deletedOverrides.push({
                namespace: parsed.namespace,
                identifier: parsed.identifier,
              });
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
          const createdOverrides: Array<{
            namespace: string;
            identifier: string;
          }> = [];

          const effect = Effect.gen(function* () {
            const firstCreated =
              yield* ratelimitSetOverride(firstOverrideInput);
            createdOverrides.push({
              namespace,
              identifier: firstOverrideInput.identifier,
            });

            const secondCreated =
              yield* ratelimitSetOverride(secondOverrideInput);
            createdOverrides.push({
              namespace,
              identifier: secondOverrideInput.identifier,
            });

            expect(firstCreated.data.overrideId).toBe(
              `override_${firstOverrideInput.identifier}_${testRunId}`,
            );
            expect(secondCreated.data.overrideId).toBe(
              `override_${secondOverrideInput.identifier}_${testRunId}`,
            );

            const result = yield* ratelimitListOverrides({
              namespace,
              cursor: `cursor-start-${testRunId}`,
              limit: 10,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/ratelimit.listOverrides");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({
              namespace,
              cursor: `cursor-start-${testRunId}`,
              limit: 10,
            });
            expect(result.meta.requestId).toBe(`req_list_${testRunId}`);
            expect(result.data).toEqual([
              {
                overrideId: `override_${firstOverrideInput.identifier}_${testRunId}`,
                duration: firstOverrideInput.duration,
                identifier: firstOverrideInput.identifier,
                limit: firstOverrideInput.limit,
              },
              {
                overrideId: `override_${secondOverrideInput.identifier}_${testRunId}`,
                duration: secondOverrideInput.duration,
                identifier: secondOverrideInput.identifier,
                limit: secondOverrideInput.limit,
              },
            ]);
            expect(result.pagination).toEqual({
              cursor: `cursor_${testRunId}`,
              hasMore: false,
            });
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                for (const override of createdOverrides) {
                  yield* ratelimitDeleteOverride(override).pipe(Effect.ignore);
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deletedOverrides).toEqual([
            {
              namespace,
              identifier: firstOverrideInput.identifier,
            },
            {
              namespace,
              identifier: secondOverrideInput.identifier,
            },
          ]);
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
            ratelimitListOverrides({
              namespace: "",
              limit: 10,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack override list access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks ratelimit override list access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            ratelimitListOverrides({
              namespace: `distilled-unkey-ratelimit-${testRunId}`,
              limit: 10,
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
            ratelimitListOverrides({
              namespace: `distilled-unkey-ratelimit-missing-${testRunId}`,
              limit: 10,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
