/**
 * Credential providers and the token cache, no network: every token
 * endpoint is a fake HttpClient, and the environment is a ConfigProvider.
 */
import * as NodeFileSystem from "@effect/platform-node/NodeFileSystem";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as Fiber from "effect/Fiber";
import * as FileSystem from "effect/FileSystem";
import * as FetchHttpClient from "effect/http/FetchHttpClient";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientError from "effect/http/HttpClientError";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { describe, expect, test } from "vitest";
import {
  type AccessToken,
  Credentials,
  fromClientSecret,
  fromEnv,
  fromManagedIdentity,
  fromStaticToken,
  makeTokenCache,
} from "../src/credentials.ts";
import * as Retry from "../src/retry.ts";
import * as secrets from "../src/services/keyvault-secrets.ts";
import { GetResourceGroup, ListResourceGroups } from "../src/services/resources.ts";

interface Captured {
  readonly method: string;
  readonly url: URL;
  readonly headers: Record<string, string>;
  readonly body: string | undefined;
}

type Reply = { readonly status: number; readonly json?: unknown } | "unreachable";

/** A fake HttpClient: `route` answers each request; every request is captured. */
const fakeHttp = (route: (call: Captured) => Reply) => {
  const calls: Captured[] = [];
  const layer = Layer.succeed(
    HttpClient.HttpClient,
    HttpClient.make((request, url) =>
      Effect.suspend(() => {
        const call: Captured = {
          method: request.method,
          url,
          headers: { ...request.headers },
          body:
            request.body._tag === "Uint8Array"
              ? new TextDecoder().decode(request.body.body)
              : undefined,
        };
        calls.push(call);
        const reply = route(call);
        if (reply === "unreachable") {
          return Effect.fail(
            new HttpClientError.HttpClientError({
              reason: new HttpClientError.TransportError({ request, description: "ECONNREFUSED" }),
            }),
          );
        }
        return Effect.succeed(
          HttpClientResponse.fromWeb(
            request,
            new Response(reply.json === undefined ? "" : JSON.stringify(reply.json), {
              status: reply.status,
            }),
          ),
        );
      }),
    ),
  );
  return { calls, layer };
};

const env = (vars: Record<string, string>) =>
  Layer.succeed(ConfigProvider.ConfigProvider, ConfigProvider.fromUnknown(vars));

const run = <A, E>(
  effect: Effect.Effect<A, E, Credentials | HttpClient.HttpClient>,
  credentials: Layer.Layer<Credentials>,
  http: Layer.Layer<HttpClient.HttpClient>,
  vars: Record<string, string> = {},
) =>
  Effect.runPromise(
    effect.pipe(
      Retry.none,
      Effect.provide(credentials),
      Effect.provide(http),
      Effect.provide(env(vars)),
    ),
  );

const runFlip = <A, E>(
  effect: Effect.Effect<A, E, Credentials | HttpClient.HttpClient>,
  credentials: Layer.Layer<Credentials>,
  http: Layer.Layer<HttpClient.HttpClient>,
  vars: Record<string, string> = {},
) => run(Effect.flip(effect), credentials, http, vars);

/** The current `Config`, as the protocol resolves it. */
const config = Effect.gen(function* () {
  const resolve = yield* Credentials;
  return yield* resolve;
});

const nowSeconds = () => Math.floor(Date.now() / 1000);

const SP = {
  tenantId: "tenant-1",
  clientId: "client-1",
  clientSecret: "s3cret-value",
  subscriptionId: "00000000-0000-0000-0000-000000000001",
};

const LOGIN = "https://login.microsoftonline.com/tenant-1/oauth2/v2.0/token";
const VAULT_SCOPE = "https://vault.azure.net/.default";
const ARM_SCOPE = "https://management.azure.com/.default";

/** Entra ID issues `entra:<scope>` for any scope; ARM and data planes answer `{}`. */
const entraRoute = (call: Captured): Reply => {
  if (call.url.host === "login.microsoftonline.com") {
    const scope = new URLSearchParams(call.body).get("scope");
    return {
      status: 200,
      json: { token_type: "Bearer", expires_in: 3599, access_token: `entra:${scope}` },
    };
  }
  return { status: 200, json: { value: [] } };
};

describe("fromClientSecret", () => {
  test("posts the client-credentials grant and caches one token per scope", async () => {
    const { calls, layer } = fakeHttp(entraRoute);
    const result = await run(
      Effect.gen(function* () {
        const first = yield* config;
        const second = yield* config;
        const vault = yield* first.tokenFor!(VAULT_SCOPE);
        const vaultAgain = yield* second.tokenFor!(VAULT_SCOPE);
        return { first, second, vault, vaultAgain };
      }),
      fromClientSecret(SP),
      layer,
    );
    expect(Redacted.value(result.first.bearerToken)).toBe(`entra:${ARM_SCOPE}`);
    expect(Redacted.value(result.second.bearerToken)).toBe(`entra:${ARM_SCOPE}`);
    expect(Redacted.value(result.vault)).toBe(`entra:${VAULT_SCOPE}`);
    expect(Redacted.value(result.vaultAgain)).toBe(`entra:${VAULT_SCOPE}`);
    expect(result.first.subscriptionId).toBe(SP.subscriptionId);
    expect(result.first.tenantId).toBe("tenant-1");
    expect(calls).toHaveLength(2);
    const [arm, vault] = calls;
    expect(arm!.method).toBe("POST");
    expect(arm!.url.toString()).toBe(LOGIN);
    expect(arm!.headers["content-type"]).toBe("application/x-www-form-urlencoded");
    expect(Object.fromEntries(new URLSearchParams(arm!.body))).toEqual({
      grant_type: "client_credentials",
      client_id: "client-1",
      client_secret: "s3cret-value",
      scope: ARM_SCOPE,
    });
    expect(new URLSearchParams(vault!.body).get("scope")).toBe(VAULT_SCOPE);
  });

  test("an ARM operation sends the ARM token and a data-plane operation its audience's token", async () => {
    const { calls, layer } = fakeHttp(entraRoute);
    await run(
      Effect.gen(function* () {
        yield* ListResourceGroups({});
        yield* secrets.GetSecret({
          vaultBaseUrl: "https://my-vault.vault.azure.net",
          secretName: "s",
        });
      }),
      fromClientSecret(SP),
      layer,
    );
    const arm = calls.find((c) => c.url.host === "management.azure.com");
    const vault = calls.find((c) => c.url.host === "my-vault.vault.azure.net");
    expect(arm!.headers.authorization).toBe(`Bearer entra:${ARM_SCOPE}`);
    expect(arm!.url.pathname).toBe(`/subscriptions/${SP.subscriptionId}/resourcegroups`);
    expect(vault!.headers.authorization).toBe(`Bearer entra:${VAULT_SCOPE}`);
  });

  test("authorityHost and a sovereign apiBaseUrl change the endpoint and the ARM scope", async () => {
    const { calls, layer } = fakeHttp((call) => ({
      status: 200,
      json: { expires_in: 3599, access_token: `t:${new URLSearchParams(call.body).get("scope")}` },
    }));
    const result = await run(
      config,
      fromClientSecret({
        ...SP,
        clientSecret: Redacted.make(SP.clientSecret),
        authorityHost: "https://login.chinacloudapi.cn/",
        apiBaseUrl: "https://management.chinacloudapi.cn",
      }),
      layer,
    );
    expect(calls[0]!.url.toString()).toBe(
      "https://login.chinacloudapi.cn/tenant-1/oauth2/v2.0/token",
    );
    expect(Redacted.value(result.bearerToken)).toBe(
      "t:https://management.chinacloudapi.cn/.default",
    );
    expect(result.apiBaseUrl).toBe("https://management.chinacloudapi.cn");
  });

  test("a rejected secret fails with InvalidClientSecret and never echoes the secret", async () => {
    const { calls, layer } = fakeHttp(() => ({
      status: 401,
      json: {
        error: "invalid_client",
        error_description: "AADSTS7000215: Invalid client secret provided.",
        error_codes: [7000215],
      },
    }));
    const error = await runFlip(config, fromClientSecret(SP), layer);
    expect(error._tag).toBe("InvalidClientSecret");
    if (error._tag !== "InvalidClientSecret") throw error;
    expect(error.code).toBe("invalid_client");
    expect(error.status).toBe(401);
    expect(error.scope).toBe(ARM_SCOPE);
    expect(error.message).toContain("AADSTS7000215");
    expect(error.message).not.toContain(SP.clientSecret);
    // A credential error is not retried.
    expect(calls).toHaveLength(1);
  });

  test("another Entra ID error fails with TokenRequestFailed", async () => {
    const { layer } = fakeHttp(() => ({
      status: 400,
      json: {
        error: "invalid_scope",
        error_description: "AADSTS70011: The provided scope is invalid.",
      },
    }));
    const error = await runFlip(config, fromClientSecret(SP), layer);
    expect(error._tag).toBe("TokenRequestFailed");
    if (error._tag !== "TokenRequestFailed") throw error;
    expect(error.code).toBe("invalid_scope");
  });

  test("throttling and server errors are retried, a bounded number of times", async () => {
    let n = 0;
    const recovering = fakeHttp(() =>
      ++n === 1
        ? { status: 503 }
        : { status: 200, json: { expires_in: 3599, access_token: "after-retry" } },
    );
    const ok = await run(config, fromClientSecret(SP), recovering.layer);
    expect(Redacted.value(ok.bearerToken)).toBe("after-retry");
    expect(recovering.calls).toHaveLength(2);

    const down = fakeHttp(() => ({ status: 500, json: { error: "temporarily_unavailable" } }));
    const error = await runFlip(config, fromClientSecret(SP), down.layer);
    expect(error._tag).toBe("TokenRequestFailed");
    if (error._tag !== "TokenRequestFailed") throw error;
    expect(error.status).toBe(500);
    // One attempt plus three retries.
    expect(down.calls).toHaveLength(4);
  });

  test("an unreachable endpoint fails with TokenRequestFailed", async () => {
    const { calls, layer } = fakeHttp(() => "unreachable");
    const error = await runFlip(config, fromClientSecret(SP), layer);
    expect(error._tag).toBe("TokenRequestFailed");
    expect(error.message).toContain("request failed");
    expect(calls).toHaveLength(4);
  });
});

describe("fromManagedIdentity", () => {
  const APP_SERVICE = {
    IDENTITY_ENDPOINT: "http://localhost:42356/msi/token",
    IDENTITY_HEADER: "header-secret",
  };

  test("App Service / Functions / Container Apps: IDENTITY_ENDPOINT with X-IDENTITY-HEADER", async () => {
    const expiresOn = nowSeconds() + 86_400;
    const { calls, layer } = fakeHttp((call) => ({
      status: 200,
      json: {
        access_token: `mi:${call.url.searchParams.get("resource")}`,
        expires_on: String(expiresOn),
        resource: call.url.searchParams.get("resource"),
        token_type: "Bearer",
      },
    }));
    const result = await run(
      Effect.gen(function* () {
        const c = yield* config;
        const vault = yield* c.tokenFor!(VAULT_SCOPE);
        return { c, vault };
      }),
      fromManagedIdentity({ clientId: "user-assigned-1", subscriptionId: SP.subscriptionId }),
      layer,
      APP_SERVICE,
    );
    expect(Redacted.value(result.c.bearerToken)).toBe("mi:https://management.azure.com");
    expect(Redacted.value(result.vault)).toBe("mi:https://vault.azure.net");
    expect(result.c.subscriptionId).toBe(SP.subscriptionId);
    expect(calls).toHaveLength(2);
    const arm = calls[0]!;
    expect(arm.method).toBe("GET");
    expect(`${arm.url.origin}${arm.url.pathname}`).toBe("http://localhost:42356/msi/token");
    expect(Object.fromEntries(arm.url.searchParams)).toEqual({
      resource: "https://management.azure.com",
      "api-version": "2019-08-01",
      client_id: "user-assigned-1",
    });
    expect(arm.headers["x-identity-header"]).toBe("header-secret");
    expect(arm.headers.metadata).toBeUndefined();
  });

  test("VMs / AKS: IMDS with Metadata: true, system-assigned when no clientId", async () => {
    const { calls, layer } = fakeHttp(() => ({
      status: 200,
      json: {
        access_token: "imds-token",
        expires_in: "3599",
        expires_on: String(nowSeconds() + 3599),
      },
    }));
    const result = await run(config, fromManagedIdentity(), layer, {
      AZURE_SUBSCRIPTION_ID: SP.subscriptionId,
    });
    expect(Redacted.value(result.bearerToken)).toBe("imds-token");
    expect(result.subscriptionId).toBe(SP.subscriptionId);
    const imds = calls[0]!;
    expect(`${imds.url.origin}${imds.url.pathname}`).toBe(
      "http://169.254.169.254/metadata/identity/oauth2/token",
    );
    expect(Object.fromEntries(imds.url.searchParams)).toEqual({
      "api-version": "2018-02-01",
      resource: "https://management.azure.com",
    });
    expect(imds.headers.metadata).toBe("true");
  });

  test("IMDS 400 (no identity assigned) fails with ManagedIdentityUnavailable", async () => {
    const { layer } = fakeHttp(() => ({
      status: 400,
      json: { error: "invalid_request", error_description: "Identity not found" },
    }));
    const error = await runFlip(config, fromManagedIdentity({ clientId: "missing" }), layer);
    expect(error._tag).toBe("ManagedIdentityUnavailable");
    expect(error.message).toContain("Identity not found");
    expect(error.message).toContain("missing");
  });

  test("an unreachable IMDS fails with ManagedIdentityUnavailable", async () => {
    const { layer } = fakeHttp(() => "unreachable");
    const error = await runFlip(config, fromManagedIdentity(), layer);
    expect(error._tag).toBe("ManagedIdentityUnavailable");
    expect(error.message).toContain("IMDS");
  });

  test("IMDS 404 while it starts is retried", async () => {
    let n = 0;
    const { calls, layer } = fakeHttp(() =>
      ++n === 1
        ? { status: 404 }
        : { status: 200, json: { access_token: "late", expires_in: "3599" } },
    );
    const result = await run(config, fromManagedIdentity(), layer);
    expect(Redacted.value(result.bearerToken)).toBe("late");
    expect(calls).toHaveLength(2);
  });

  test("without a subscription, an ARM operation that needs one fails with ConfigError", async () => {
    const { calls, layer } = fakeHttp(() => ({
      status: 200,
      json: { access_token: "imds-token", expires_in: "3599" },
    }));
    const error = await runFlip(ListResourceGroups({}), fromManagedIdentity(), layer);
    expect(error._tag).toBe("ConfigError");
    expect(calls.every((c) => c.url.host === "169.254.169.254")).toBe(true);
  });
});

describe("fromStaticToken", () => {
  test("sends the one token to ARM and to data planes", async () => {
    const { calls, layer } = fakeHttp(() => ({ status: 200, json: {} }));
    await run(
      Effect.gen(function* () {
        yield* GetResourceGroup({ resourceGroupName: "rg" });
        yield* secrets.GetSecret({ vaultBaseUrl: "https://v.vault.azure.net", secretName: "s" });
      }),
      fromStaticToken({ bearerToken: "static", subscriptionId: SP.subscriptionId }),
      layer,
    );
    expect(calls.map((c) => c.headers.authorization)).toEqual(["Bearer static", "Bearer static"]);
  });
});

describe("fromEnv", () => {
  test("client secret first", async () => {
    const { calls, layer } = fakeHttp(entraRoute);
    const result = await run(config, fromEnv(), layer, {
      AZURE_TENANT_ID: SP.tenantId,
      AZURE_CLIENT_ID: SP.clientId,
      AZURE_CLIENT_SECRET: SP.clientSecret,
      AZURE_SUBSCRIPTION_ID: SP.subscriptionId,
      IDENTITY_ENDPOINT: "http://localhost:1/never",
      IDENTITY_HEADER: "h",
      AZURE_BEARER_TOKEN: "static",
    });
    expect(Redacted.value(result.bearerToken)).toBe(`entra:${ARM_SCOPE}`);
    expect(calls.map((c) => c.url.toString())).toEqual([LOGIN]);
  });

  test("then the App Service identity endpoint, with AZURE_CLIENT_ID as the user-assigned identity", async () => {
    const { calls, layer } = fakeHttp(() => ({
      status: 200,
      json: { access_token: "mi", expires_on: String(nowSeconds() + 3600) },
    }));
    const result = await run(config, fromEnv(), layer, {
      IDENTITY_ENDPOINT: "http://localhost:42356/msi/token",
      IDENTITY_HEADER: "h",
      AZURE_CLIENT_ID: "user-assigned-1",
      AZURE_BEARER_TOKEN: "static",
      AZURE_SUBSCRIPTION_ID: SP.subscriptionId,
    });
    expect(Redacted.value(result.bearerToken)).toBe("mi");
    expect(calls).toHaveLength(1);
    expect(calls[0]!.url.host).toBe("localhost:42356");
    expect(calls[0]!.url.searchParams.get("client_id")).toBe("user-assigned-1");
  });

  test("then IMDS when it answers the probe", async () => {
    const { calls, layer } = fakeHttp((call) =>
      call.headers.metadata === "true"
        ? { status: 200, json: { access_token: "imds", expires_in: "3599" } }
        : {
            status: 400,
            json: {
              error: "bad_request",
              error_description: "Required metadata header not specified",
            },
          },
    );
    const result = await run(config, fromEnv(), layer, { AZURE_BEARER_TOKEN: "static" });
    expect(Redacted.value(result.bearerToken)).toBe("imds");
    expect(calls).toHaveLength(2);
    expect(calls[0]!.headers.metadata).toBeUndefined();
    expect(calls[1]!.headers.metadata).toBe("true");
  });

  test("then a static token, and the choice is made once", async () => {
    const { calls, layer } = fakeHttp(() => "unreachable");
    const result = await run(
      Effect.gen(function* () {
        const first = yield* config;
        const second = yield* config;
        return { first, second };
      }),
      fromEnv(),
      layer,
      { AZURE_BEARER_TOKEN: "static", AZURE_SUBSCRIPTION_ID: SP.subscriptionId },
    );
    expect(Redacted.value(result.first.bearerToken)).toBe("static");
    expect(result.first.tokenFor).toBeUndefined();
    expect(Redacted.value(result.second.bearerToken)).toBe("static");
    // Only the first use probes IMDS.
    expect(calls).toHaveLength(1);
  });

  test("nothing configured fails with ConfigError", async () => {
    const { layer } = fakeHttp(() => "unreachable");
    const error = await runFlip(config, fromEnv(), layer);
    expect(error._tag).toBe("ConfigError");
    expect(error.message).toContain("AZURE_CLIENT_SECRET");
  });
});

describe("makeTokenCache", () => {
  const token = (value: string, lifetimeMs: number): AccessToken => ({
    token: Redacted.make(value),
    expiresOnMs: Date.now() + lifetimeMs,
  });

  test("refreshes a token within 5 minutes of expiry, and not before", async () => {
    const issued: string[] = [];
    const lifetimes = [4 * 60_000, 60 * 60_000];
    const cache = makeTokenCache((scope) =>
      Effect.sync(() => {
        issued.push(scope);
        return token(`t${issued.length}`, lifetimes[issued.length - 1] ?? 60 * 60_000);
      }),
    );
    const values = await Effect.runPromise(
      Effect.all([cache("a"), cache("a"), cache("a")]).pipe(
        Effect.map((ts) => ts.map(Redacted.value)),
      ),
    );
    // t1 expires in 4 min (inside the window), so the second call refreshes;
    // t2 lives an hour, so the third reuses it.
    expect(values).toEqual(["t1", "t2", "t2"]);
    expect(issued).toEqual(["a", "a"]);
  });

  test("concurrent callers share one request per scope", async () => {
    let requests = 0;
    const cache = makeTokenCache((scope) =>
      Effect.sync(() => ++requests).pipe(
        Effect.andThen(Effect.sleep("20 millis")),
        Effect.as(token(`for-${scope}`, 60 * 60_000)),
      ),
    );
    const values = await Effect.runPromise(
      Effect.all([cache("a"), cache("a"), cache("a"), cache("b"), cache("b")], {
        concurrency: "unbounded",
      }).pipe(Effect.map((ts) => ts.map(Redacted.value))),
    );
    expect(values).toEqual(["for-a", "for-a", "for-a", "for-b", "for-b"]);
    expect(requests).toBe(2);
  });

  test("an interrupted caller does not strand the others", async () => {
    let requests = 0;
    const cache = makeTokenCache(() =>
      Effect.sync(() => ++requests).pipe(
        Effect.andThen(Effect.sleep("30 millis")),
        Effect.as(token("shared", 60 * 60_000)),
      ),
    );
    const value = await Effect.runPromise(
      Effect.gen(function* () {
        const owner = yield* Effect.forkChild(cache("a"));
        yield* Effect.sleep("5 millis");
        const waiter = yield* Effect.forkChild(cache("a"));
        yield* Fiber.interrupt(owner);
        return Redacted.value(yield* Fiber.join(waiter));
      }),
    );
    expect(value).toBe("shared");
    expect(requests).toBe(1);
  });

  test("a failed refresh keeps a token that has not expired; a failure with no token is retried next call", async () => {
    let n = 0;
    const cache = makeTokenCache(() =>
      Effect.suspend(() => {
        n++;
        if (n === 1) return Effect.succeed(token("old", 60_000));
        if (n === 2) return Effect.fail("down" as const);
        return Effect.succeed(token("new", 60 * 60_000));
      }),
    );
    const values = await Effect.runPromise(
      Effect.all([cache("a"), cache("a"), cache("a")]).pipe(
        Effect.map((ts) => ts.map(Redacted.value)),
      ),
    );
    expect(values).toEqual(["old", "old", "new"]);

    let m = 0;
    const failing = makeTokenCache(() =>
      Effect.suspend(() =>
        ++m === 1 ? Effect.fail("down" as const) : Effect.succeed(token("ok", 60 * 60_000)),
      ),
    );
    const first = await Effect.runPromise(Effect.flip(failing("a")));
    expect(first).toBe("down");
    expect(Redacted.value(await Effect.runPromise(failing("a")))).toBe("ok");
  });
});

// Opt-in live check against the testing tenant; never part of a normal run.
// AZURE_TEST_CREDENTIALS_LIVE=1 reads the service principal from the
// alchemy-testing profile (`values.{tenantId,clientId,clientSecret,subscriptionId}`).
describe.skipIf(!process.env.AZURE_TEST_CREDENTIALS_LIVE)("live", () => {
  test("fromClientSecret lists resource groups and mints a Key Vault token", async () => {
    const result = await Effect.runPromise(
      Effect.gen(function* () {
        const fs = yield* FileSystem.FileSystem;
        const home = yield* Effect.sync(() => process.env.HOME ?? "");
        const text = yield* fs.readFileString(
          `${home}/.alchemy/profiles/alchemy-testing/azure.json`,
        );
        const { values } = JSON.parse(text) as { values: Record<string, string> };
        const live = fromClientSecret({
          tenantId: values.tenantId!,
          clientId: values.clientId!,
          clientSecret: Redacted.make(values.clientSecret!),
          subscriptionId: values.subscriptionId!,
        });
        return yield* Effect.gen(function* () {
          const groups = yield* ListResourceGroups({});
          const c = yield* config;
          const vault = yield* c.tokenFor!(VAULT_SCOPE);
          return { groups, vault: Redacted.value(vault) };
        }).pipe(Effect.provide(live));
      }).pipe(
        Effect.provide(FetchHttpClient.layer),
        Effect.provide(NodeFileSystem.layer),
        Effect.provide(env({})),
      ),
    );
    expect(Array.isArray(result.groups.value)).toBe(true);
    expect(result.groups.value!.length).toBeGreaterThan(0);
    // A v2.0 token names its audience by application ID: Azure Key Vault's.
    const payload = result.vault.split(".")[1]!;
    const claims = JSON.parse(Buffer.from(payload, "base64url").toString()) as { aud: string };
    expect(claims.aud).toBe("cfa8b339-82a2-471a-a3c9-0fc0be7a4093");
  }, 60_000);
});
