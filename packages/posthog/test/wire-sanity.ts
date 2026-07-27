#!/usr/bin/env bun
/**
 * posthog-wire-sanity — offline wire checks for the PostHog SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * PosthogCredentials, then verifies:
 *   (a) annotationsRetrieve encodes GET
 *       {base}/api/projects/{project_id}/annotations/{id}/ with
 *       Authorization: Bearer and decodes a canned annotation payload
 *   (b) annotationsList flattens non-label input members into query params
 *       (limit/offset — DRF style, no pagination stream) — no request body
 *   (c) a 404 DRF `{ type, code, detail, attr }` envelope raises the
 *       op-declared typed NotFound with the detail as message; a 404 on the
 *       `{ error }` shape is also accepted; an unmatched-status
 *       envelope-less body raises UnknownPosthogError
 *
 * Run: bun packages/posthog/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { credentials } from "../src/credentials.ts";
import { UnknownPosthogError } from "../src/errors.ts";
import * as Retry from "../src/retry.ts";
import {
  annotationsList,
  annotationsRetrieve,
  NotFound,
} from "../src/services/annotations.ts";

// ---------------------------------------------------------------------------
// Stub HttpClient: scripted (request → canned Response) with capture
// ---------------------------------------------------------------------------

interface Captured {
  method: string;
  url: string;
  headers: Record<string, string>;
  bodyTag: string;
}

const captured: Captured[] = [];
let script: Array<() => Response> = [];

const stubClient = HttpClient.make((request) => {
  const cap: Captured = {
    method: request.method,
    url: request.url,
    headers: { ...request.headers } as Record<string, string>,
    bodyTag: (request.body as { _tag: string })._tag,
  };
  captured.push(cap);
  const next = script.shift();
  if (!next) throw new Error(`unexpected request: ${cap.method} ${cap.url}`);
  return Effect.succeed(HttpClientResponse.fromWeb(request, next()));
});

const provide = <A, E, R>(effect: Effect.Effect<A, E, R>) =>
  effect.pipe(
    Effect.provideService(HttpClient.HttpClient, stubClient),
    Effect.provide(credentials({ apiKey: "phx_test_key" })),
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

const cannedAnnotation = {
  id: 42,
  content: "Deployed v2.1.0",
  date_marker: "2026-07-01T12:00:00Z",
  creation_type: "GIT",
  scope: "project",
  deleted: false,
};

await Effect.runPromise(
  Effect.gen(function* () {
    // (a) — request line, auth header, typed decode -----------------------
    console.log("(a) annotationsRetrieve encode + decode");
    script = [() => json(cannedAnnotation)];
    const annotation = yield* provide(
      annotationsRetrieve({ project_id: "proj-1", id: 42 }),
    );
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === "https://us.posthog.com/api/projects/proj-1/annotations/42/",
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === "Bearer phx_test_key",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );
    assert(req.bodyTag === "Empty", "GET carries no body");
    assert(annotation.id === 42, "decoded annotation.id === 42");
    assert(
      annotation.content === "Deployed v2.1.0",
      "decoded annotation.content",
    );
    assert(
      annotation.creation_type === "GIT",
      "decoded enum member creation_type === 'GIT'",
    );

    // (b) — list query params (DRF offset/limit stays a plain op) ----------
    console.log("(b) annotationsList query encoding");
    script = [
      () =>
        json({
          count: 1,
          next: null,
          previous: null,
          results: [cannedAnnotation],
        }),
    ];
    const list = yield* provide(
      annotationsList({ project_id: "proj-1", limit: 5, offset: 10 }),
    );
    const listReq = captured.at(-1)!;
    const listUrl = new URL(listReq.url);
    assert(
      listUrl.origin + listUrl.pathname ===
        "https://us.posthog.com/api/projects/proj-1/annotations/",
      `list url path (${listReq.url})`,
    );
    assert(listUrl.searchParams.get("limit") === "5", "query limit=5");
    assert(listUrl.searchParams.get("offset") === "10", "query offset=10");
    assert(listReq.bodyTag === "Empty", "list GET carries no body");
    assert(list.count === 1, "decoded list.count === 1");
    assert(list.results[0]!.id === 42, "decoded list.results[0].id");
    assert(
      !("pages" in (annotationsList as object)),
      "no pagination stream on DRF offset/limit lists (v0 parity)",
    );

    // (c) — typed errors ---------------------------------------------------
    console.log("(c) DRF error envelope → typed NotFound");
    // annotationsRetrieve declares NotFound in its errors list, so the 404
    // surfaces as the typed class with the DRF `detail` as message.
    script = [
      () =>
        json(
          {
            type: "invalid_request",
            code: "not_found",
            detail: "Not found.",
            attr: null,
          },
          404,
        ),
    ];
    const notFound = yield* provide(
      annotationsRetrieve({ project_id: "proj-1", id: 999 }),
    ).pipe(Effect.flip);
    assert(
      notFound instanceof NotFound,
      `DRF 404 → typed NotFound (${(notFound as any)._tag})`,
    );
    assert(
      (notFound as InstanceType<typeof NotFound>).message === "Not found.",
      "message enriched from the DRF `detail`",
    );

    // The simpler `{ error }` envelope shape is accepted too (v0 parity).
    script = [() => json({ error: "annotation missing" }, 404)];
    const errShape = yield* provide(
      annotationsRetrieve({ project_id: "proj-1", id: 999 }),
    ).pipe(Effect.flip);
    assert(
      errShape instanceof NotFound &&
        (errShape as InstanceType<typeof NotFound>).message ===
          "annotation missing",
      "`{ error }` envelope also maps to NotFound with its message",
    );

    // Unmatched status + envelope-less body → UnknownPosthogError.
    script = [() => new Response("upstream exploded", { status: 418 })];
    const unknown = yield* provide(
      annotationsRetrieve({ project_id: "proj-1", id: 1 }),
    ).pipe(Effect.flip);
    assert(
      unknown instanceof UnknownPosthogError,
      `envelope-less unmatched status → UnknownPosthogError (${(unknown as any)._tag})`,
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
