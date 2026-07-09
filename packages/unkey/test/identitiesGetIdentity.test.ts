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
import { identitiesCreateIdentity } from "../src/operations/identitiesCreateIdentity.ts";
import { identitiesDeleteIdentity } from "../src/operations/identitiesDeleteIdentity.ts";
import { identitiesGetIdentity } from "../src/operations/identitiesGetIdentity.ts";
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

describe("identitiesGetIdentity", () => {
  it(
    "happy path - gets an identity",
    { timeout: 30_000 },
    async () => {
      const externalId = `distilled-unkey-identity-get-${testRunId}`;
      const identityId = `identity_${testRunId}`;
      const meta = {
        source: "distilled-test",
        testRunId,
      };
      const createRatelimits = [
        {
          name: `distilled-unkey-identity-limit-${testRunId}`,
          limit: 250,
          duration: 60_000,
          autoApply: true,
        },
      ];
      const getRatelimits = [
        {
          id: `rl_${testRunId}`,
          ...createRatelimits[0],
        },
      ];
      const identities = new Map<
        string,
        {
          id: string;
          externalId: string;
          meta: typeof meta;
          ratelimits: typeof getRatelimits;
        }
      >();
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";
      let createdIdentityId = "";
      let deletedIdentityId = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/identities.createIdentity") {
              identities.set(JSON.parse(body).externalId, {
                id: identityId,
                externalId,
                meta,
                ratelimits: getRatelimits,
              });
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { identityId },
              });
              return;
            }

            if (req.url === "/v2/identities.getIdentity") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const identity = identities.get(JSON.parse(body).identity);
              if (identity === undefined) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested identity does not exist or has been deleted.",
                  "https://unkey.com/docs/errors/unkey/data/identity_not_found",
                );
                return;
              }

              sendJson(res, 200, {
                meta: { requestId: `req_get_${testRunId}` },
                data: identity,
              });
              return;
            }

            if (req.url === "/v2/identities.deleteIdentity") {
              const deleted = JSON.parse(body).identity;
              deletedIdentityId = deleted;

              for (const [external, identity] of identities) {
                if (identity.id === deleted) {
                  identities.delete(external);
                  break;
                }
              }

              sendJson(res, 200, {
                meta: { requestId: `req_delete_${testRunId}` },
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
            const created = yield* identitiesCreateIdentity({
              externalId,
              meta,
              ratelimits: createRatelimits,
            });
            createdIdentityId = created.data.identityId;

            const result = yield* identitiesGetIdentity({
              identity: externalId,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/identities.getIdentity");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({ identity: externalId });
            expect(result.meta.requestId).toBe(`req_get_${testRunId}`);
            expect(result.data.id).toBe(identityId);
            expect(result.data.externalId).toBe(externalId);
            expect(result.data.meta).toEqual(meta);
            expect(result.data.ratelimits).toEqual(getRatelimits);
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                if (createdIdentityId !== "") {
                  yield* identitiesDeleteIdentity({
                    identity: createdIdentityId,
                  }).pipe(Effect.ignore);
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deletedIdentityId).toBe(identityId);
        },
      );
    },
  );

  it(
    "error - BadRequest when the identity is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The identity is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            identitiesGetIdentity({ identity: "" }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack identity read access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks identity read access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            identitiesGetIdentity({
              identity: `distilled-unkey-identity-forbidden-${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the identity does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested identity does not exist or has been deleted.",
            "https://unkey.com/docs/errors/unkey/data/identity_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            identitiesGetIdentity({
              identity: `distilled-unkey-identity-missing-${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
