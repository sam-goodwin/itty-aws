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
import { permissionsGetPermission } from "../src/operations/permissionsGetPermission.ts";
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

describe("permissionsGetPermission", () => {
  it(
    "happy path - gets a permission",
    { timeout: 30_000 },
    async () => {
      const permissionId = `perm_${testRunId}`;
      const permissionInput = {
        name: `distilled-unkey-permission-get-${testRunId}`,
        slug: `distilled.unkey.${testRunId}.get`,
        description: `Permission read by distilled test ${testRunId}`,
      };
      const permissionDetails = {
        id: permissionId,
        name: permissionInput.name,
        slug: permissionInput.slug,
        description: permissionInput.description,
      };
      const permissions = new Map<string, typeof permissionDetails>();
      let deletedPermission = "";
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/permissions.createPermission") {
              const parsed = JSON.parse(body);
              permissions.set(parsed.slug, permissionDetails);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { permissionId },
              });
              return;
            }

            if (req.url === "/v2/permissions.getPermission") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              const permission = permissions.get(parsed.permission);
              if (permission === undefined) {
                sendApiError(
                  res,
                  404,
                  "Not Found",
                  "The requested permission does not exist.",
                  "https://unkey.com/docs/errors/unkey/data/permission_not_found",
                );
                return;
              }

              sendJson(res, 200, {
                meta: { requestId: `req_get_${testRunId}` },
                data: permission,
              });
              return;
            }

            if (req.url === "/v2/permissions.deletePermission") {
              const parsed = JSON.parse(body);
              deletedPermission = parsed.permission;
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

            const result = yield* permissionsGetPermission({
              permission: createdPermission,
            });

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/permissions.getPermission");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual({
              permission: permissionInput.slug,
            });
            expect(result.meta.requestId).toBe(`req_get_${testRunId}`);
            expect(result.data.id).toBe(permissionId);
            expect(result.data.name).toBe(permissionInput.name);
            expect(result.data.slug).toBe(permissionInput.slug);
            expect(result.data.description).toBe(permissionInput.description);
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
          expect(deletedPermission).toBe(permissionInput.slug);
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
            permissionsGetPermission({ permission: "" }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack permission read access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks permission read access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsGetPermission({
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
            permissionsGetPermission({
              permission: `distilled.unkey.${testRunId}.missing`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
