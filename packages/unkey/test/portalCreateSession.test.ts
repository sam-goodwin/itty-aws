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

describe("portalCreateSession", () => {
  it(
    "happy path - creates a portal session",
    { timeout: 30_000 },
    async () => {
      const sessionInput = {
        slug: `distilled-unkey-portal-${testRunId}`,
        externalId: `distilled-unkey-user-${testRunId}`,
        permissions: [
          `distilled.unkey.${testRunId}.read`,
          `distilled.unkey.${testRunId}.write`,
        ],
        preview: true,
      };
      const sessionId = `portal_session_${testRunId}`;
      const sessionUrl = `https://portal.unkey.test/session/${sessionId}`;
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/portal.createSession") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              sendJson(res, 200, {
                meta: { requestId: `req_portal_${testRunId}` },
                data: {
                  sessionId,
                  url: sessionUrl,
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
          const result = await runWithBaseUrl(
            baseUrl,
            portalCreateSession(sessionInput),
          );

          expect(requestMethod).toBe("POST");
          expect(requestUrl).toBe("/v2/portal.createSession");
          expect(authorization).toBe("Bearer unkey_test");
          expect(JSON.parse(requestBody)).toEqual(sessionInput);
          expect(result.meta.requestId).toBe(`req_portal_${testRunId}`);
          expect(result.data.sessionId).toBe(sessionId);
          expect(result.data.url).toBe(sessionUrl);
        },
      );
    },
  );

  it(
    "error - BadRequest when the portal slug is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The portal slug is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            portalCreateSession({
              slug: "",
              externalId: `distilled-unkey-user-${testRunId}`,
              permissions: [`distilled.unkey.${testRunId}.read`],
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack portal access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks portal access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            portalCreateSession({
              slug: `distilled-unkey-portal-forbidden-${testRunId}`,
              externalId: `distilled-unkey-user-${testRunId}`,
              permissions: [`distilled.unkey.${testRunId}.read`],
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the portal configuration does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested portal configuration does not exist.",
            "https://unkey.com/docs/errors/unkey/data/portal_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            portalCreateSession({
              slug: `distilled-unkey-portal-missing-${testRunId}`,
              externalId: `distilled-unkey-user-${testRunId}`,
              permissions: [`distilled.unkey.${testRunId}.read`],
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
