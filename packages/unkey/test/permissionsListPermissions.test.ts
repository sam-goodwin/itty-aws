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
import { permissionsListPermissions } from "../src/operations/permissionsListPermissions.ts";
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

describe("permissionsListPermissions", () => {
  it(
    "happy path - lists permissions",
    { timeout: 30_000 },
    async () => {
      const firstPermissionInput = {
        name: `distilled-unkey-permission-list-read-${testRunId}`,
        slug: `distilled.unkey.${testRunId}.list.read`,
        description: `List read permission ${testRunId}`,
      };
      const secondPermissionInput = {
        name: `distilled-unkey-permission-list-write-${testRunId}`,
        slug: `distilled.unkey.${testRunId}.list.write`,
        description: `List write permission ${testRunId}`,
      };
      const firstPermission = {
        id: `perm_read_${testRunId}`,
        name: firstPermissionInput.name,
        slug: firstPermissionInput.slug,
        description: firstPermissionInput.description,
      };
      const secondPermission = {
        id: `perm_write_${testRunId}`,
        name: secondPermissionInput.name,
        slug: secondPermissionInput.slug,
        description: secondPermissionInput.description,
      };
      const listInput = {
        limit: 2,
        cursor: `cursor_${testRunId}`,
      };
      const permissions = new Map<string, typeof firstPermission>();
      const deletedPermissions: Array<string> = [];
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/permissions.createPermission") {
              const parsed = JSON.parse(body);
              const permission =
                parsed.slug === firstPermission.slug
                  ? firstPermission
                  : secondPermission;
              permissions.set(parsed.slug, permission);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { permissionId: permission.id },
              });
              return;
            }

            if (req.url === "/v2/permissions.listPermissions") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              sendJson(res, 200, {
                meta: { requestId: `req_list_${testRunId}` },
                data: [firstPermission, secondPermission],
                pagination: {
                  cursor: `next_${testRunId}`,
                  hasMore: false,
                },
              });
              return;
            }

            if (req.url === "/v2/permissions.deletePermission") {
              const parsed = JSON.parse(body);
              deletedPermissions.push(parsed.permission);
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
          const createdPermissions: Array<string> = [];

          const effect = Effect.gen(function* () {
            const firstCreated =
              yield* permissionsCreatePermission(firstPermissionInput);
            createdPermissions.push(firstPermissionInput.slug);

            const secondCreated =
              yield* permissionsCreatePermission(secondPermissionInput);
            createdPermissions.push(secondPermissionInput.slug);

            expect(firstCreated.data.permissionId).toBe(firstPermission.id);
            expect(secondCreated.data.permissionId).toBe(secondPermission.id);

            const result = yield* permissionsListPermissions(listInput);

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/permissions.listPermissions");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual(listInput);
            expect(result.meta.requestId).toBe(`req_list_${testRunId}`);
            expect(result.data).toEqual([firstPermission, secondPermission]);
            expect(result.pagination).toEqual({
              cursor: `next_${testRunId}`,
              hasMore: false,
            });
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                for (const permission of createdPermissions) {
                  yield* permissionsDeletePermission({ permission }).pipe(
                    Effect.ignore,
                  );
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deletedPermissions).toEqual([
            firstPermissionInput.slug,
            secondPermissionInput.slug,
          ]);
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
            "The page limit is invalid.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsListPermissions({
              limit: -1,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack permission list access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks permission list access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsListPermissions({
              limit: 10,
              cursor: `cursor_${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );
});
