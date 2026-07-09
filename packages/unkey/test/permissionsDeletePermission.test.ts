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
import { permissionsCreatePermission } from "../src/operations/permissionsCreatePermission.ts";
import { permissionsDeletePermission } from "../src/operations/permissionsDeletePermission.ts";
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

describe("permissionsDeletePermission", () => {
  it(
    "happy path - deletes a permission",
    { timeout: 30_000 },
    async () => {
      const permissionId = `perm_${testRunId}`;
      const permissionInput = {
        name: `distilled-unkey-permission-delete-${testRunId}`,
        slug: `distilled.unkey.${testRunId}.delete`,
        description: `Permission deleted by distilled test ${testRunId}`,
      };
      const permissions = new Map<string, string>();
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/permissions.createPermission") {
              const parsed = JSON.parse(body);
              permissions.set(parsed.slug, permissionId);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { permissionId },
              });
              return;
            }

            if (req.url === "/v2/permissions.deletePermission") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              if (!permissions.has(parsed.permission)) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested permission does not exist.",
                  "https://unkey.com/docs/errors/unkey/data/permission_not_found",
                );
                return;
              }

              permissions.delete(parsed.permission);
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
          let createdPermission = "";

          const effect = Effect.gen(function* () {
            const created =
              yield* permissionsCreatePermission(permissionInput);
            createdPermission = permissionInput.slug;

            expect(created.data.permissionId).toBe(permissionId);

            const result = yield* permissionsDeletePermission({
              permission: createdPermission,
            });
            createdPermission = "";

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/permissions.deletePermission");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({
              permission: permissionInput.slug,
            });
            expect(result.meta.requestId).toBe(`req_delete_${testRunId}`);
            expect(result.data).toEqual({});
            expect(permissions.has(permissionInput.slug)).toBe(false);
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                if (createdPermission !== "") {
                  yield* permissionsDeletePermission({
                    permission: createdPermission,
                  }).pipe(Effect.ignore);
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
        },
      );
    },
  );

  it(
    "error - BadRequest when the permission is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The permission is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsDeletePermission({ permission: "" }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack permission delete access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks permission delete access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsDeletePermission({
              permission: `distilled.unkey.${testRunId}.forbidden`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the permission does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested permission does not exist.",
            "https://unkey.com/docs/errors/unkey/data/permission_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsDeletePermission({
              permission: `distilled.unkey.${testRunId}.missing`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
