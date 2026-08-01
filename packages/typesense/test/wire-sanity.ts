#!/usr/bin/env bun
/**
 * typesense-wire-sanity — offline wire checks for the Typesense SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * TypesenseCredentials, then verifies:
 *   (a) getCollection encodes GET {base}/collections/{name} with the
 *       X-TYPESENSE-API-KEY header from credentials
 *   (b) a canned response decodes to typed output
 *   (c) a 404 {message} body raises the op's typed NotFound
 *
 * Run: bun packages/typesense/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { credentials } from "../src/credentials.ts";
import * as Retry from "../src/retry.ts";
import {
  getCollection,
  getCollections,
  NotFound,
} from "../src/services/typesense.ts";

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
    Effect.provide(
      credentials({
        apiKey: "test-key",
        apiBaseUrl: "http://localhost:8108",
      }),
    ),
    Retry.none,
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

const booksCollection = {
  name: "books",
  fields: [{ name: "title", type: "string" }],
  num_documents: 42,
};

await Effect.runPromise(
  Effect.gen(function* () {
    // (a)+(b) — request line, auth header, typed decode -------------------
    console.log("(a)+(b) getCollection encode + decode");
    script = [() => json(booksCollection)];
    const out = yield* provide(getCollection({ collectionName: "books" }));
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === "http://localhost:8108/collections/books",
      `url ${req.url}`,
    );
    assert(
      req.headers["x-typesense-api-key"] === "test-key",
      `X-TYPESENSE-API-KEY header (got ${req.headers["x-typesense-api-key"]})`,
    );
    assert(out.name === "books", "decoded name === 'books'");
    assert(out.num_documents === 42, "decoded num_documents === 42");

    // (c) — typed 404 ------------------------------------------------------
    // getCollection declares NotFound in its errors list, so the 404
    // surfaces as the op's typed class instance.
    console.log("(c) 404 → typed NotFound");
    script = [() => json({ message: "Not Found" }, 404)];
    const failure = yield* provide(
      getCollection({ collectionName: "nope" }),
    ).pipe(Effect.flip);
    assert(
      failure instanceof NotFound,
      `instance of typed NotFound (${(failure as any)._tag})`,
    );
    assert(
      (failure as InstanceType<typeof NotFound>).message === "Not Found",
      "message enriched from the error body",
    );
    // An op that does NOT declare 404 still gets a NotFound-tagged error
    // (core status-map fallback).
    script = [() => json({ message: "nope" }, 404)];
    const fallback = yield* provide(getCollections({})).pipe(Effect.flip);
    assert(
      (fallback as any)._tag === "NotFound",
      "undeclared 404 falls back to the shared status-map NotFound",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
