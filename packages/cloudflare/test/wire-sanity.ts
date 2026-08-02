#!/usr/bin/env bun
/**
 * cloudflare-wire-sanity — offline wire checks for the Cloudflare SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned envelope JSON) and
 * Credentials, then verifies:
 *   (a) zones listZones with the nested deep-object filter
 *       `{ account: { id } }` encodes the DOTTED query family
 *       `?account.id=…` (T.DeepQuery — v0-parity nested struct surface)
 *   (b) both nested fields expand (`account.id` + `account.name`) alongside
 *       plain query members, and null/undefined entries are skipped
 *   (c) the enveloped response decodes (unwrapped `result` + `resultInfo`)
 *
 * Run: bun packages/cloudflare/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as Cloudflare from "../src/index.ts";
import { listZones } from "../src/services/zones.ts";

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
    Effect.provide(Cloudflare.fromApiToken({ apiToken: "test-token" })),
    Cloudflare.Retry.none,
  ) as Effect.Effect<A, E, never>;

const envelope = (result: unknown, resultInfo?: unknown) =>
  new Response(
    JSON.stringify({
      success: true,
      errors: [],
      messages: [],
      result,
      ...(resultInfo !== undefined ? { result_info: resultInfo } : {}),
    }),
    { status: 200, headers: { "content-type": "application/json" } },
  );

const assert = (cond: unknown, msg: string) => {
  if (!cond) throw new Error(`ASSERT FAILED: ${msg}`);
  console.log(`  ✓ ${msg}`);
};

const BASE = "https://api.cloudflare.com/client/v4";

await Effect.runPromise(
  Effect.gen(function* () {
    // (a) — deep-object query filter encodes dotted params ------------------
    console.log("(a) listZones { account: { id } } → ?account.id=…");
    script = [() => envelope([])];
    yield* provide(listZones({ account: { id: "x" } }));
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === `${BASE}/zones?account.id=x`,
      `url encodes account.id (${req.url})`,
    );
    assert(
      req.headers["authorization"] === "Bearer test-token",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );

    // (b) — full family + plain query members, nullish skipped --------------
    console.log("(b) both nested fields + plain query params");
    script = [() => envelope([])];
    yield* provide(
      listZones({
        account: { id: "a", name: "n" },
        page: 2,
        perPage: 50,
      }),
    );
    assert(
      captured.at(-1)!.url ===
        `${BASE}/zones?account.id=a&account.name=n&page=2&per_page=50`,
      `dotted family alongside plain params (${captured.at(-1)!.url})`,
    );
    script = [() => envelope([])];
    yield* provide(listZones({ account: { id: "only" }, name: undefined }));
    assert(
      captured.at(-1)!.url === `${BASE}/zones?account.id=only`,
      `undefined nested/plain members are skipped (${captured.at(-1)!.url})`,
    );

    // (c) — enveloped response decodes --------------------------------------
    console.log("(c) envelope decode (result + resultInfo)");
    script = [
      () => envelope([], { page: 1, per_page: 20, count: 0, total_count: 0 }),
    ];
    const out = yield* provide(listZones({ account: { id: "x" } }));
    assert(Array.isArray(out.result), "result decodes to an array");
    assert(
      out.resultInfo?.page === 1,
      "resultInfo delivered from the envelope's result_info",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
