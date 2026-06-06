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

describe("permissionsCreateRole", () => {
  it(
    "happy path - creates a role",
    { timeout: 30_000 },
    async () => {
      const roleId = `role_${testRunId}`;
      const roleInput = {
        name: `distilled-unkey-role-create-${testRunId}`,
        description: `Role created by distilled test ${testRunId}`,
      };
      const roles = new Map<string, string>();
      let deletedRole = "";
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/permissions.createRole") {
              requestMethod = req.method ?? "";
              requestUrl = req.url ?? "";
              authorization = req.headers.authorization ?? "";
              requestBody = body;

              const parsed = JSON.parse(body);
              roles.set(parsed.name, roleId);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { roleId },
              });
              return;
            }

            if (req.url === "/v2/permissions.deleteRole") {
              const parsed = JSON.parse(body);
              deletedRole = parsed.role;
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
          let createdRole = "";

          const effect = Effect.gen(function* () {
            const result = yield* permissionsCreateRole(roleInput);
            createdRole = roleInput.name;

            expect(requestMethod).toBe("POST");
            expect(requestUrl).toBe("/v2/permissions.createRole");
            expect(authorization).toBe("Bearer unkey_test");
            expect(JSON.parse(requestBody)).toEqual(roleInput);
            expect(result.meta.requestId).toBe(`req_create_${testRunId}`);
            expect(result.data.roleId).toBe(roleId);
            expect(roles.get(roleInput.name)).toBe(roleId);
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                if (createdRole !== "") {
                  yield* permissionsDeleteRole({ role: createdRole }).pipe(
                    Effect.ignore,
                  );
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deletedRole).toBe(roleInput.name);
        },
      );
    },
  );

  it(
    "error - BadRequest when the name is empty",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The role name is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsCreateRole({
              name: "",
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack role creation access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks role creation access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            permissionsCreateRole({
              name: `distilled-unkey-role-forbidden-${testRunId}`,
            }).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - Conflict when the role already exists",
    { timeout: 30_000 },
    async () => {
      const roleId = `role_conflict_${testRunId}`;
      const roleInput = {
        name: `distilled-unkey-role-conflict-${testRunId}`,
        description: `Duplicate role test ${testRunId}`,
      };
      const roles = new Map<string, string>();
      let deletedRole = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            if (req.url === "/v2/permissions.createRole") {
              const parsed = JSON.parse(body);
              if (roles.has(parsed.name)) {
                sendApiError(
                  res,
                  409,
                  "Conflict",
                  "A role with this name already exists.",
                  "https://unkey.com/docs/errors/unkey/data/conflict",
                );
                return;
              }

              roles.set(parsed.name, roleId);
              sendJson(res, 200, {
                meta: { requestId: `req_create_${testRunId}` },
                data: { roleId },
              });
              return;
            }

            if (req.url === "/v2/permissions.deleteRole") {
              const parsed = JSON.parse(body);
              deletedRole = parsed.role;
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
          let createdRole = "";

          const effect = Effect.gen(function* () {
            const created = yield* permissionsCreateRole(roleInput);
            createdRole = roleInput.name;

            expect(created.data.roleId).toBe(roleId);

            const error = yield* permissionsCreateRole(roleInput).pipe(
              Effect.flip,
            );

            expect((error as { _tag: string })._tag).toBe("Conflict");
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                if (createdRole !== "") {
                  yield* permissionsDeleteRole({ role: createdRole }).pipe(
                    Effect.ignore,
                  );
                }
              }),
            ),
          );

          await runWithBaseUrl(baseUrl, effect);
          expect(deletedRole).toBe(roleInput.name);
        },
      );
    },
  );
});
