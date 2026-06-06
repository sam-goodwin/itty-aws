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
import { identitiesListIdentities } from "../src/operations/identitiesListIdentities.ts";
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

describe("identitiesListIdentities", () => {
  it(
    "happy path - lists identities",
    { timeout: 30_000 },
    async () => {
      const externalId = `distilled-unkey-identity-list-${testRunId}`;
      const identityId = `identity_${testRunId}`;
      const meta = {
        source: "distilled-test",
        testRunId,
      };
      const createRatelimits = [
        {
          name: `distilled-unkey-identity-limit-${testRunId}`,
          limit: 500,
          duration: 60_000,
          autoApply: true,
        },
      ];
      const listedIdentity = {
        id: identityId,
        externalId,
        meta,
        ratelimits: [
          {
            id: `rl_${testRunId}`,
            ...createRatelimits[0],
          },
        ],
      };
      const identities = new Map<string, typeof listedIdentity>();
      const deletedIdentityIds: Array<string> = [];
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";
      let createdIdentityId = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/identities.createIdentity") {
              identities.set(JSON.parse(body).externalId, listedIdentity);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { identityId },
              });
              return;
            }

            if (req.url === "/v2/identities.listIdentities") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              sendJson(res, 200, {
                meta: { requestId: `req_list_${testRunId}` },
                data: [...identities.values()],
                pagination: {
                  cursor: `cursor_${testRunId}`,
                  hasMore: false,
                },
              });
              return;
            }

            if (req.url === "/v2/identities.deleteIdentity") {
              const deleted = JSON.parse(body).identity;
              deletedIdentityIds.push(deleted);

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

            const result = yield* identitiesListIdentities({ limit: 10 });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/identities.listIdentities");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({ limit: 10 });
            expect(result.meta.requestId).toBe(`req_list_${testRunId}`);
            expect(result.data).toEqual([listedIdentity]);
            expect(result.pagination.cursor).toBe(`cursor_${testRunId}`);
            expect(result.pagination.hasMore).toBe(false);
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
          expect(deletedIdentityIds).toEqual([identityId]);
        },
      );
    },
  );

  it(
    "error - BadRequest when the limit is invalid",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The limit must be greater than zero.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            identitiesListIdentities({ limit: -1 }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack identity list access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks identity list access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            identitiesListIdentities({ limit: 10 }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );
});
