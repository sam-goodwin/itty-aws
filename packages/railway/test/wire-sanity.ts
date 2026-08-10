#!/usr/bin/env bun
/**
 * railway wire-sanity — offline wire checks for the Railway GraphQL SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and the
 * Railway Credentials service, then verifies:
 *   (a) `apiTokens` (a readonly GraphQL query — every Railway op is
 *       `POST /graphql/v2`, there are no GET ops) encodes
 *       POST {apiBaseUrl}/graphql/v2 with `Authorization: Bearer <token>` and
 *       a `{ query, operationName, variables }` JSON envelope, and decodes a
 *       canned `data.apiTokens` connection
 *   (b) a project-scoped token travels in `Project-Access-Token` instead of
 *       `Authorization` — the two token kinds are not interchangeable
 *   (c) `apiTokenCreate` (a mutation returning a bare `String!`) decodes as a
 *       payload-root scalar
 *   (d) an HTTP 200 envelope carrying `errors[].extensions.code` raises the
 *       typed class; an envelope-less HTTP 400 raises UnknownRailwayError
 *   (e) Relay pagination: `.items()` streams NODES (not edges) across pages,
 *       feeds `pageInfo.endCursor` back as `after`, and stops on
 *       `hasNextPage: false` without requesting a further page
 *
 * Run: bun packages/railway/test/wire-sanity.ts
 */
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Stream from "effect/Stream";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { Credentials, type TokenKind } from "../src/credentials.ts";
import {
  RailwayNotFound,
  RailwayRateLimited,
  UnknownRailwayError,
} from "../src/errors.ts";
import * as Retry from "../src/retry.ts";
import {
  apiTokenCreate,
  apiTokens,
  type ApiTokensResponseEdgesItemNode,
} from "../src/services/railway.ts";

// ---------------------------------------------------------------------------
// Stub HttpClient: scripted (request → canned Response) with capture
// ---------------------------------------------------------------------------

interface Captured {
  method: string;
  url: string;
  headers: Record<string, string>;
  bodyText: string | undefined;
  bodyContentType: string | undefined;
}

const captured: Captured[] = [];
let script: Array<() => Response> = [];

const stubClient = HttpClient.make((request) => {
  const body = request.body as {
    _tag: string;
    body?: Uint8Array;
    contentType?: string;
  };
  const cap: Captured = {
    method: request.method,
    url: request.url,
    headers: { ...request.headers } as Record<string, string>,
    bodyText:
      body._tag === "Uint8Array"
        ? new TextDecoder().decode(body.body)
        : undefined,
    bodyContentType: body._tag === "Uint8Array" ? body.contentType : undefined,
  };
  captured.push(cap);
  const next = script.shift();
  if (!next) throw new Error(`unexpected request: ${cap.method} ${cap.url}`);
  return Effect.succeed(HttpClientResponse.fromWeb(request, next()));
});

const credentialsFor = (tokenKind: TokenKind) =>
  Layer.succeed(
    Credentials,
    Effect.succeed({
      token: Redacted.make("railway-test-token"),
      tokenKind,
      apiBaseUrl: "https://backboard.railway.com",
    }),
  );

const provideAs =
  (tokenKind: TokenKind) =>
  <A, E, R>(effect: Effect.Effect<A, E, R>) =>
    effect.pipe(
      Effect.provideService(HttpClient.HttpClient, stubClient),
      Effect.provide(credentialsFor(tokenKind)),
      Retry.none,
    ) as Effect.Effect<A, E, never>;

const provide = provideAs("account");

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

/** One `apiTokens` page. */
const tokenPage = (
  nodes: ReadonlyArray<ApiTokensResponseEdgesItemNode>,
  pageInfo: {
    endCursor: string | null;
    hasNextPage: boolean;
  },
) => ({
  data: {
    apiTokens: {
      edges: nodes.map((node) => ({ cursor: `c-${node.id}`, node })),
      pageInfo: {
        ...pageInfo,
        hasPreviousPage: false,
        startCursor: nodes.length ? `c-${nodes[0]!.id}` : null,
      },
    },
  },
});

const token = (id: string): ApiTokensResponseEdgesItemNode => ({
  displayToken: `tok_${id}`,
  expiresAt: null,
  id,
  name: `token-${id}`,
  workspaceId: null,
});

const assert = (cond: unknown, msg: string) => {
  if (!cond) throw new Error(`ASSERT FAILED: ${msg}`);
  console.log(`  ✓ ${msg}`);
};

await Effect.runPromise(
  Effect.gen(function* () {
    // (a) — request line, auth header, GraphQL envelope, typed decode -------
    console.log("(a) apiTokens encode + decode");
    script = [
      () =>
        json(
          tokenPage([token("a"), token("b")], {
            endCursor: "c-b",
            hasNextPage: false,
          }),
        ),
    ];
    const page = yield* provide(apiTokens({ first: 2 }));
    const req = captured.at(-1)!;
    assert(req.method === "POST", `method POST (got ${req.method})`);
    assert(
      req.url === "https://backboard.railway.com/graphql/v2",
      `url ${req.url} — apiBaseUrl + /graphql/v2`,
    );
    assert(
      req.headers["authorization"] === "Bearer railway-test-token",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );
    assert(
      req.headers["project-access-token"] === undefined,
      "account token does NOT set Project-Access-Token",
    );
    assert(
      req.bodyContentType?.startsWith("application/json") === true,
      `content-type application/json (got ${req.bodyContentType})`,
    );
    const envelope = JSON.parse(req.bodyText!) as {
      query: string;
      operationName: string;
      variables: Record<string, unknown>;
    };
    assert(
      envelope.operationName === "apiTokens",
      "envelope operationName=apiTokens",
    );
    assert(
      envelope.query.startsWith("query apiTokens($after: String"),
      "envelope carries the baked GraphQL document",
    );
    assert(
      JSON.stringify(envelope.variables) === JSON.stringify({ first: 2 }),
      "input IS the variables object (undefined members dropped)",
    );
    assert(page.edges.length === 2, "decoded 2 edges");
    assert(
      page.edges[0]!.node.displayToken === "tok_a",
      "decoded the node under data.apiTokens.edges[].node",
    );
    assert(page.pageInfo.hasNextPage === false, "decoded pageInfo.hasNextPage");

    // (b) — project tokens use a different header ---------------------------
    console.log("(b) project-token header");
    script = [
      () => json(tokenPage([], { endCursor: null, hasNextPage: false })),
    ];
    yield* provideAs("project")(apiTokens({}));
    const projectReq = captured.at(-1)!;
    assert(
      projectReq.headers["project-access-token"] === "railway-test-token",
      `Project-Access-Token header (got ${projectReq.headers["project-access-token"]})`,
    );
    assert(
      projectReq.headers["authorization"] === undefined,
      "project token does NOT set Authorization",
    );

    // (c) — payload-root scalar response ------------------------------------
    console.log("(c) mutation with a bare scalar result");
    script = [() => json({ data: { apiTokenCreate: "rw_live_abc123" } })];
    const created = yield* provide(
      apiTokenCreate({ input: { name: "ci", workspaceId: null } }),
    );
    assert(
      created === "rw_live_abc123",
      `payload-root String response returned verbatim (got ${JSON.stringify(created)})`,
    );

    // (d) — typed errors ----------------------------------------------------
    console.log("(d) error envelope dispatch");
    // GraphQL business error on HTTP 200: errors[].extensions.code is matched
    // against RAILWAY_ERROR_CODE_MAP.
    script = [
      () =>
        json({
          data: null,
          errors: [
            {
              message: "Project not found",
              extensions: { code: "NOT_FOUND" },
            },
          ],
        }),
    ];
    const notFound = yield* provide(apiTokens({})).pipe(Effect.flip);
    assert(
      notFound instanceof RailwayNotFound,
      `200 + errors[NOT_FOUND] → RailwayNotFound (${(notFound as { _tag?: string })._tag})`,
    );
    assert(
      (notFound as RailwayNotFound).message === "Project not found",
      "message carried through",
    );

    // Rate limiting picks up the Retry-After hint.
    script = [
      () =>
        new Response(
          JSON.stringify({
            errors: [
              { message: "slow down", extensions: { code: "RATE_LIMITED" } },
            ],
          }),
          {
            status: 200,
            headers: {
              "content-type": "application/json",
              "retry-after": "30",
            },
          },
        ),
    ];
    const limited = yield* provide(apiTokens({})).pipe(Effect.flip);
    assert(
      limited instanceof RailwayRateLimited,
      `errors[RATE_LIMITED] → RailwayRateLimited (${(limited as { _tag?: string })._tag})`,
    );
    const retryAfter = (limited as RailwayRateLimited).retryAfter;
    assert(
      retryAfter !== undefined && Duration.toSeconds(retryAfter) === 30,
      `Retry-After parsed to a 30s Duration (got ${JSON.stringify(retryAfter)})`,
    );

    // Envelope-less / unparseable error body → UnknownRailwayError.
    script = [() => new Response("upstream exploded", { status: 400 })];
    const unknownFailure = yield* provide(apiTokens({})).pipe(Effect.flip);
    assert(
      unknownFailure instanceof UnknownRailwayError,
      `envelope-less 400 → UnknownRailwayError (${(unknownFailure as { _tag?: string })._tag})`,
    );

    // (e) — Relay pagination -------------------------------------------------
    console.log("(e) Relay .items() streaming");
    captured.length = 0;
    script = [
      () =>
        json(
          tokenPage([token("1"), token("2")], {
            endCursor: "c-2",
            hasNextPage: true,
          }),
        ),
      () =>
        json(tokenPage([token("3")], { endCursor: "c-3", hasNextPage: false })),
    ];
    const items = yield* provide(
      apiTokens.items({ first: 2 }).pipe(Stream.runCollect),
    );
    assert(
      items.length === 3,
      `.items() streamed 3 nodes across 2 pages (got ${items.length})`,
    );
    assert(
      items.every((i) => typeof i.displayToken === "string"),
      ".items() yields NODES, not edge wrappers",
    );
    assert(
      items.map((i) => i.id).join(",") === "1,2,3",
      `nodes in page order (got ${items.map((i) => i.id).join(",")})`,
    );
    assert(
      captured.length === 2,
      `stopped after hasNextPage:false — 2 requests, no third (got ${captured.length})`,
    );
    const secondVars = (
      JSON.parse(captured[1]!.bodyText!) as {
        variables: Record<string, unknown>;
      }
    ).variables;
    assert(
      secondVars.after === "c-2",
      `page 2 fed pageInfo.endCursor back as \`after\` (got ${JSON.stringify(secondVars.after)})`,
    );
    assert(secondVars.first === 2, "page size carried into every page request");

    // `.pages()` yields whole connections rather than nodes.
    script = [
      () =>
        json(tokenPage([token("1")], { endCursor: "c-1", hasNextPage: false })),
    ];
    const pages = yield* provide(
      apiTokens.pages({ first: 1 }).pipe(Stream.runCollect),
    );
    assert(
      pages.length === 1 && pages[0]!.edges.length === 1,
      ".pages() yields whole connection responses",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
