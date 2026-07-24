#!/usr/bin/env bun
/**
 * coinbase-wire-sanity — offline wire checks for the Coinbase CDP SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * CoinbaseCredentials (freshly generated EC P-256 key), then verifies:
 *   (a) getEvmAccount encodes GET {base}/v2/evm/accounts/{address} with a
 *       valid ES256 JWT bearer token (sub/iss/aud/uri claims + signature)
 *   (b) a canned response decodes to typed output
 *   (b') sensitive output member (webhook secret) delivered as Redacted
 *   (c) errorType dispatch: "already_exists" → AlreadyExists (Coinbase map),
 *       "not_found" → core NotFound (standard map)
 *
 * Run: bun packages/coinbase/test/wire-sanity.ts
 */
import * as crypto from "node:crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as Coinbase from "../src/index.ts";
import { getEvmAccount, getWebhookSubscription } from "../src/services/cdp.ts";

// ---------------------------------------------------------------------------
// Stub credentials: freshly generated EC P-256 (ES256) key pair
// ---------------------------------------------------------------------------

const API_KEY_ID = "test-key-id";
const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
  namedCurve: "prime256v1",
});
const privatePem = privateKey
  .export({ type: "pkcs8", format: "pem" })
  .toString();

const stubCredentials = Layer.succeed(
  Coinbase.Credentials,
  Effect.succeed({
    apiKeyId: API_KEY_ID,
    apiKeySecret: Redacted.make(privatePem),
    apiBaseUrl: Coinbase.DEFAULT_API_BASE_URL,
  }),
);

// ---------------------------------------------------------------------------
// Stub HttpClient: scripted (request → canned Response) with capture
// ---------------------------------------------------------------------------

interface Captured {
  method: string;
  url: string;
  headers: Record<string, string>;
}

const captured: Captured[] = [];
let script: Array<(req: Captured) => Response> = [];

const stubClient = HttpClient.make((request) => {
  const cap: Captured = {
    method: request.method,
    url: request.url,
    headers: { ...request.headers } as Record<string, string>,
  };
  captured.push(cap);
  const next = script.shift();
  if (!next) throw new Error(`unexpected request: ${cap.method} ${cap.url}`);
  return Effect.succeed(HttpClientResponse.fromWeb(request, next(cap)));
});

const provide = <A, E, R>(effect: Effect.Effect<A, E, R>) =>
  effect.pipe(
    Effect.provideService(HttpClient.HttpClient, stubClient),
    Effect.provide(stubCredentials),
    Coinbase.Retry.none,
  ) as Effect.Effect<A, E, never>;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const assert = (cond: unknown, msg: string) => {
  if (!cond) throw new Error(`ASSERT FAILED: ${msg}`);
  console.log(`  ✓ ${msg}`);
};

const b64urlJson = (segment: string): any =>
  JSON.parse(Buffer.from(segment, "base64url").toString());

await Effect.runPromise(
  Effect.gen(function* () {
    // (a)+(b) — request line, JWT bearer auth, typed decode ----------------
    console.log("(a)+(b) getEvmAccount encode + decode");
    script = [
      () => json({ address: "0xAbC123", name: "main", policies: ["p-1"] }),
    ];
    const out = yield* provide(getEvmAccount({ address: "0xAbC123" }));
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url ===
        "https://api.cdp.coinbase.com/platform/v2/evm/accounts/0xAbC123",
      `url ${req.url}`,
    );
    const auth = req.headers["authorization"] ?? "";
    assert(auth.startsWith("Bearer "), "Authorization: Bearer <jwt>");
    const [h64, p64, s64] = auth.slice("Bearer ".length).split(".");
    const header = b64urlJson(h64!);
    const payload = b64urlJson(p64!);
    assert(
      header.alg === "ES256" && header.kid === API_KEY_ID,
      `JWT header alg=ES256 kid=${API_KEY_ID}`,
    );
    assert(payload.sub === API_KEY_ID, "JWT sub = API key id");
    assert(payload.iss === "cdp", 'JWT iss = "cdp"');
    assert(
      Array.isArray(payload.aud) && payload.aud[0] === "cdp_service",
      'JWT aud = ["cdp_service"]',
    );
    assert(
      payload.uri ===
        "GET api.cdp.coinbase.com/platform/v2/evm/accounts/0xAbC123",
      `JWT uri claim (${payload.uri})`,
    );
    assert(payload.exp - payload.nbf === 120, "JWT exp = nbf + 120s");
    const sigOk = crypto.verify(
      "sha256",
      Buffer.from(`${h64}.${p64}`),
      { key: publicKey, dsaEncoding: "ieee-p1363" },
      Buffer.from(s64!, "base64url"),
    );
    assert(sigOk, "JWT ES256 signature verifies against the key pair");
    assert(out.address === "0xAbC123", "decoded address === '0xAbC123'");
    assert(out.name === "main", "decoded name === 'main'");
    assert(out.policies?.[0] === "p-1", "decoded policies[0] === 'p-1'");

    // (b') — sensitive output member delivered as Redacted -----------------
    console.log("(b') getWebhookSubscription sensitive output");
    script = [
      () =>
        json({
          createdAt: "2026-01-01T00:00:00Z",
          eventTypes: ["wallet.activity.detected"],
          isEnabled: true,
          secret: "whsec_hunter2",
          subscriptionId: "sub-1",
          target: { url: "https://example.com/hook" },
        }),
    ];
    const sub = yield* provide(
      getWebhookSubscription({ subscriptionId: "sub-1" }),
    );
    assert(
      captured.at(-1)!.url ===
        "https://api.cdp.coinbase.com/platform/v2/data/webhooks/subscriptions/sub-1",
      "label-substituted webhook url",
    );
    assert(Redacted.isRedacted(sub.secret), "secret is Redacted<string>");
    assert(
      Redacted.value(sub.secret as Redacted.Redacted<string>) ===
        "whsec_hunter2",
      "Redacted unwraps to the wire value",
    );

    // (c) — global errorType dispatch --------------------------------------
    console.log("(c) errorType dispatch → typed errors");
    script = [
      () =>
        json(
          {
            errorType: "already_exists",
            errorMessage: "account already exists",
            correlationId: "corr-1",
          },
          409,
        ),
    ];
    const conflict = yield* provide(
      getEvmAccount({ address: "0xAbC123" }),
    ).pipe(Effect.flip);
    assert(
      conflict instanceof Coinbase.AlreadyExists,
      `Coinbase errorType map → AlreadyExists (${(conflict as any)._tag})`,
    );
    assert(
      (conflict as InstanceType<typeof Coinbase.AlreadyExists>).errorMessage ===
        "account already exists",
      "errorMessage carried from the error body",
    );

    script = [
      () =>
        json({ errorType: "not_found", errorMessage: "no such account" }, 404),
    ];
    const missing = yield* provide(getEvmAccount({ address: "0xdead" })).pipe(
      Effect.flip,
    );
    assert(
      (missing as any)._tag === "NotFound",
      `standard errorType map → core NotFound (${(missing as any)._tag})`,
    );
    assert(
      (missing as any).message === "no such account",
      "message enriched from the error body",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
