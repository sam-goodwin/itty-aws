#!/usr/bin/env bun
/**
 * supabase-wire-sanity — offline wire checks for the Supabase SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * Supabase Credentials, then verifies:
 *   (a) v1GetProjectApiKeys encodes GET {base}/v1/projects/{ref}/api-keys
 *       with the label + query params and Authorization: Bearer
 *   (b) a canned raw-array response decodes to typed output, with the
 *       sensitive api_key member delivered as Redacted
 *   (c) a 404 {message} body raises the op's typed NotFound, message enriched
 *   (c') Supabase's 406 not-found quirk remaps to the same typed NotFound
 *   (d) the "active free projects" message raises FreeProjectLimitReached
 *       before any status mapping
 *
 * Run: bun packages/supabase/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as Supabase from "../src/index.ts";
import { FreeProjectLimitReached } from "../src/errors.ts";
import {
  NotFound,
  v1GetASnippet,
  v1GetProjectApiKeys,
} from "../src/services/supabase.ts";

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
    Effect.provide(Supabase.credentials({ accessToken: "test-token" })),
    Supabase.Retry.none,
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

await Effect.runPromise(
  Effect.gen(function* () {
    // (a)+(b) — request line, auth header, typed + Redacted decode ---------
    console.log("(a)+(b) v1GetProjectApiKeys encode + decode");
    script = [
      () =>
        json([
          {
            api_key: "super-secret-key",
            id: "key-1",
            type: "legacy",
            name: "anon",
          },
        ]),
    ];
    const keys = yield* provide(
      v1GetProjectApiKeys({ ref: "abcdefghijklmnopqrst", reveal: true }),
    );
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url ===
        "https://api.supabase.com/v1/projects/abcdefghijklmnopqrst/api-keys?reveal=true",
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === "Bearer test-token",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );
    assert(keys.length === 1, "raw-array response decodes to one entry");
    assert(keys[0]!.name === "anon", "decoded keys[0].name === 'anon'");
    assert(
      Redacted.isRedacted(keys[0]!.api_key),
      "api_key is Redacted<string>",
    );
    assert(
      Redacted.value(keys[0]!.api_key as Redacted.Redacted<string>) ===
        "super-secret-key",
      "Redacted unwraps to the wire value",
    );

    // (c) — typed 404 ------------------------------------------------------
    // v1GetASnippet declares NotFound in its errors list (from the ported
    // v0 patches), so a 404 surfaces as the op's typed class instance.
    console.log("(c) 404 → typed NotFound");
    script = [() => json({ message: "no such snippet" }, 404)];
    const failure = yield* provide(v1GetASnippet({ id: "nope" })).pipe(
      Effect.flip,
    );
    assert(
      failure instanceof NotFound,
      `instance of typed NotFound (${(failure as any)._tag})`,
    );
    assert(
      (failure as InstanceType<typeof NotFound>).message === "no such snippet",
      "message enriched from the error body",
    );

    // (c') — 406 remapped to 404 before matcher evaluation -----------------
    console.log("(c') 406 → NotFound (snippet not-found quirk)");
    script = [() => json({ message: "Not Acceptable" }, 406)];
    const remapped = yield* provide(v1GetASnippet({ id: "nope" })).pipe(
      Effect.flip,
    );
    assert(
      remapped instanceof NotFound,
      `406 remaps to typed NotFound (${(remapped as any)._tag})`,
    );

    // (d) — free-tier project limit message → typed quota error ------------
    console.log("(d) free project limit message → FreeProjectLimitReached");
    script = [
      () => json({ message: "You can only have 2 active free projects" }, 402),
    ];
    const quota = yield* provide(
      v1GetProjectApiKeys({ ref: "abcdefghijklmnopqrst" }),
    ).pipe(Effect.flip);
    assert(
      quota instanceof FreeProjectLimitReached,
      `FreeProjectLimitReached before status mapping (${(quota as any)._tag})`,
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
