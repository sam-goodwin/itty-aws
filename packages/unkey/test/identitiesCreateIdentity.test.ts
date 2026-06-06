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
import {
  identitiesCreateIdentity,
  type IdentitiesCreateIdentityInput,
} from "../src/operations/identitiesCreateIdentity.ts";
import { identitiesDeleteIdentity } from "../src/operations/identitiesDeleteIdentity.ts";
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

const identityInput = (
  externalId: string,
  overrides: Partial<IdentitiesCreateIdentityInput> = {},
): IdentitiesCreateIdentityInput => ({
  externalId,
  meta: {
    source: "distilled-test",
    testRunId,
  },
  ratelimits: [
    {
      name: `distilled-unkey-identity-limit-${testRunId}`,
      limit: 100,
      duration: 60_000,
      autoApply: true,
    },
  ],
  ...overrides,
});

describe("identitiesCreateIdentity", () => {
  it(
    "happy path - creates an identity",
    { timeout: 30_000 },
    async () => {
      const externalId = `distilled-unkey-identity-create-${testRunId}`;
      const input = identityInput(externalId);
      const identityId = `identity_${testRunId}`;
      const identities = new Map<string, string>();
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
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              identities.set(JSON.parse(body).externalId, identityId);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { identityId },
              });
              return;
            }

            if (req.url === "/v2/identities.deleteIdentity") {
              const deleted = JSON.parse(body).identity;
              deletedIdentityId = deleted;

              for (const [external, id] of identities) {
                if (id === deleted) {
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
            const result = yield* identitiesCreateIdentity(input);
            createdIdentityId = result.data.identityId;

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/identities.createIdentity");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual(input);
            expect(result.meta.requestId).toBe(`req_create_${testRunId}`);
            expect(result.data.identityId).toBe(identityId);
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
    "error - BadRequest when the external ID is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The external ID is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            identitiesCreateIdentity(identityInput("")).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack identity creation access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks identity creation access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            identitiesCreateIdentity(
              identityInput(`distilled-unkey-identity-forbidden-${testRunId}`),
            ).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - Conflict when the external ID already exists",
    { timeout: 30_000 },
    async () => {
      const externalId = `distilled-unkey-identity-conflict-${testRunId}`;
      const input = identityInput(externalId);
      const identityId = `identity_conflict_${testRunId}`;
      const identities = new Map<string, string>();
      let createdIdentityId = "";
      let deletedIdentityId = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/identities.createIdentity") {
              if (identities.has(JSON.parse(body).externalId)) {
                sendApiError(
                  res,
                  409,
                  "Conflict",
                  "An identity with this external ID already exists.",
                  "https://unkey.com/docs/errors/unkey/application/conflict",
                );
                return;
              }

              identities.set(JSON.parse(body).externalId, identityId);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { identityId },
              });
              return;
            }

            if (req.url === "/v2/identities.deleteIdentity") {
              const deleted = JSON.parse(body).identity;
              deletedIdentityId = deleted;

              for (const [external, id] of identities) {
                if (id === deleted) {
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
            const created = yield* identitiesCreateIdentity(input);
            createdIdentityId = created.data.identityId;

            const error = yield* identitiesCreateIdentity(input).pipe(
              Effect.flip,
            );

            expect((error as { _tag: string })._tag).toBe("Conflict");
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
});
