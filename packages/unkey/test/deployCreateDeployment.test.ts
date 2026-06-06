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
  deployCreateDeployment,
  type DeployCreateDeploymentInput,
} from "../src/operations/deployCreateDeployment.ts";
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

const deploymentInput = (
  overrides: Partial<DeployCreateDeploymentInput> = {},
): DeployCreateDeploymentInput => ({
  project: `distilled-unkey-project-${testRunId}`,
  app: `distilled-unkey-app-${testRunId}`,
  keyspaceId: `ks_${testRunId}`,
  branch: `distilled-unkey-branch-${testRunId}`,
  environmentSlug: `distilled-unkey-env-${testRunId}`,
  dockerImage: `registry.example.com/distilled/unkey:${testRunId}`,
  gitCommit: {
    commitSha: `${testRunId}${testRunId}${testRunId}${testRunId}${testRunId}`,
    commitMessage: `distilled deployment ${testRunId}`,
    authorHandle: `distilled-${testRunId}`,
    timestamp: Date.now(),
  },
  ...overrides,
});

describe("deployCreateDeployment", () => {
  it(
    "happy path - creates a deployment",
    { timeout: 30_000 },
    async () => {
      const input = deploymentInput();
      const deploymentId = `dep_${testRunId}`;
      let requestMethod = "";
      let requestUrl = "";
      let authorization = "";
      let requestBody = "";

      await withServer(
        (req, res) => {
          void readBody(req).then((body) => {
            requestMethod = req.method ?? "";
            requestUrl = req.url ?? "";
            authorization = req.headers.authorization ?? "";
            requestBody = body;

            sendJson(res, 201, {
              meta: { requestId: `req_${testRunId}` },
              data: { deploymentId },
            });
          });
        },
        async (baseUrl) => {
          const result = await runWithBaseUrl(
            baseUrl,
            deployCreateDeployment(input),
          );

          expect(requestMethod).toBe("POST");
          expect(requestUrl).toBe("/v2/deploy.createDeployment");
          expect(authorization).toBe("Bearer unkey_test");
          expect(JSON.parse(requestBody)).toEqual(input);
          expect(result.meta.requestId).toBe(`req_${testRunId}`);
          expect(result.data.deploymentId).toBe(deploymentId);
        },
      );
    },
  );

  it(
    "error - BadRequest when the deployment input is invalid",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            400,
            "Bad Request",
            "The deployment docker image is required.",
            "https://unkey.com/docs/errors/unkey/application/invalid_input",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            deployCreateDeployment(deploymentInput({ dockerImage: "" })).pipe(
              Effect.flip,
            ),
          );

          expect((error as { _tag: string })._tag).toBe("BadRequest");
        },
      );
    },
  );

  it(
    "error - Forbidden when credentials lack deployment access",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            403,
            "Forbidden",
            "The root key lacks deployment access.",
            "https://unkey.com/docs/errors/unkey/authorization/insufficient_permissions",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            deployCreateDeployment(
              deploymentInput({
                project: `distilled-unkey-project-forbidden-${testRunId}`,
              }),
            ).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("Forbidden");
        },
      );
    },
  );

  it(
    "error - NotFound when the deployment project does not exist",
    { timeout: 30_000 },
    async () => {
      await withServer(
        (_req, res) => {
          sendApiError(
            res,
            404,
            "Not Found",
            "The requested project does not exist or has been deleted.",
            "https://unkey.com/docs/errors/unkey/data/project_not_found",
          );
        },
        async (baseUrl) => {
          const error = await runWithBaseUrl(
            baseUrl,
            deployCreateDeployment(
              deploymentInput({
                project: `distilled-unkey-project-missing-${testRunId}`,
              }),
            ).pipe(Effect.flip),
          );

          expect((error as { _tag: string })._tag).toBe("NotFound");
        },
      );
    },
  );
});
