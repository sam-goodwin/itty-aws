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
import { portalCreateSession } from "../src/operations/portalCreateSession.ts";
import { portalExchangeSession } from "../src/operations/portalExchangeSession.ts";
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

describe("portalExchangeSession", () => {
  it(
    "happy path - exchanges a portal session",
    { timeout: 30_000 },
    async () => {
      const sessionInput = {
        slug: `distilled-unkey-portal-${testRunId}`,
        externalId: `distilled-unkey-user-${testRunId}`,
        permissions: [`distilled.unkey.${testRunId}.read`],
        preview: true,
      };
      const sessionId = `portal_session_${testRunId}`;
      const browserToken = `portal_token_${testRunId}`;
      const expiresAt = Date.now() + 86_400_000;
      const sessions = new Map<string, string>([[sessionId, browserToken]]);
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/portal.createSession") {
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: {
                  sessionId,
                  url: `https://portal.unkey.test/session/${sessionId}`,
                },
              });
              return;
            }

            if (req.url === "/v2/portal.exchangeSession") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              const token = sessions.get(parsed.sessionId);
              if (token === undefined) {
                sendApiError(
                  res,
                  400,
                  "Bad Request",
                  "The portal session is invalid or expired.",
                  "https://unkey.com/docs/errors/unkey/application/invalid_input",
                );
                return;
              }

              sessions.delete(parsed.sessionId);
              sendJson(res, 200, {
                meta: { requestId: `req_exchange_${testRunId}` },
                data: {
                  token,
                  expiresAt,
                },
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
          const effect = Effect.gen(function* () {
            const created = yield* portalCreateSession(sessionInput);

            const result = yield* portalExchangeSession({
              sessionId: created.data.sessionId,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/portal.exchangeSession");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({ sessionId });
            expect(result.meta.requestId).toBe(`req_exchange_${testRunId}`);
            expect(result.data.token).toBe(browserToken);
            expect(result.data.expiresAt).toBe(expiresAt);
            expect(sessions.has(sessionId)).toBe(false);
          });

          await runWithBaseUrl(baseUrl, effect);
        },
      );
    },
  );

  it(
    "error - BadRequest when the session ID is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The portal session ID is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            portalExchangeSession({
              sessionId: "",
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );
});
