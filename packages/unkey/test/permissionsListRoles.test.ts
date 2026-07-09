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
import { permissionsCreateRole } from "../src/operations/permissionsCreateRole.ts";
import { permissionsDeleteRole } from "../src/operations/permissionsDeleteRole.ts";
import { permissionsListRoles } from "../src/operations/permissionsListRoles.ts";
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

describe("permissionsListRoles", () => {
  it(
    "happy path - lists roles",
    { timeout: 30_000 },
    async () => {
      const firstRoleInput = {
        name: `distilled-unkey-role-list-read-${testRunId}`,
        description: `List read role ${testRunId}`,
      };
      const secondRoleInput = {
        name: `distilled-unkey-role-list-write-${testRunId}`,
        description: `List write role ${testRunId}`,
      };
      const firstRole = {
        id: `role_read_${testRunId}`,
        name: firstRoleInput.name,
        description: firstRoleInput.description,
        permissions: [
          {
            id: `perm_read_${testRunId}`,
            name: `distilled-unkey-permission-role-list-read-${testRunId}`,
            slug: `distilled.unkey.${testRunId}.role.read`,
            description: `Read permission for listed role ${testRunId}`,
          },
        ],
      };
      const secondRole = {
        id: `role_write_${testRunId}`,
        name: secondRoleInput.name,
        description: secondRoleInput.description,
        permissions: [
          {
            id: `perm_write_${testRunId}`,
            name: `distilled-unkey-permission-role-list-write-${testRunId}`,
            slug: `distilled.unkey.${testRunId}.role.write`,
            description: `Write permission for listed role ${testRunId}`,
          },
        ],
      };
      const listInput = {
        limit: 2,
        cursor: `cursor_${testRunId}`,
      };
      const roles = new Map<string, typeof firstRole>();
      const deletedRoles: Array<string> = [];
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/permissions.createRole") {
              const parsed = JSON.parse(body);
              const role =
                parsed.name === firstRole.name ? firstRole : secondRole;
              roles.set(parsed.name, role);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { roleId: role.id },
              });
              return;
            }

            if (req.url === "/v2/permissions.listRoles") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              sendJson(res, 200, {
                meta: { requestId: `req_list_${testRunId}` },
                data: [firstRole, secondRole],
                pagination: {
                  cursor: `next_${testRunId}`,
                  hasMore: false,
                },
              });
              return;
            }

            if (req.url === "/v2/permissions.deleteRole") {
              const parsed = JSON.parse(body);
              deletedRoles.push(parsed.role);
              roles.delete(parsed.role);
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
          const createdRoles: Array<string> = [];

          const effect = Effect.gen(function* () {
            const firstCreated = yield* permissionsCreateRole(firstRoleInput);
            createdRoles.push(firstRoleInput.name);

            const secondCreated =
              yield* permissionsCreateRole(secondRoleInput);
            createdRoles.push(secondRoleInput.name);

            expect(firstCreated.data.roleId).toBe(firstRole.id);
            expect(secondCreated.data.roleId).toBe(secondRole.id);

            const result = yield* permissionsListRoles(listInput);

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/permissions.listRoles");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual(listInput);
            expect(result.meta.requestId).toBe(`req_list_${testRunId}`);
            expect(result.data).toEqual([firstRole, secondRole]);
            expect(result.pagination).toEqual({
              cursor: `next_${testRunId}`,
              hasMore: false,
            });
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                for (const role of createdRoles) {
                  yield* permissionsDeleteRole({ role }).pipe(Effect.ignore);
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deletedRoles).toEqual([
            firstRoleInput.name,
            secondRoleInput.name,
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
            permissionsListRoles({
              limit: -1,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack role list access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks role list access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsListRoles({
              limit: 10,
              cursor: `cursor_${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the role page does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested role page does not exist.",
            "https://unkey.com/docs/errors/unkey/data/role_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsListRoles({
              limit: 10,
              cursor: `missing_${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
