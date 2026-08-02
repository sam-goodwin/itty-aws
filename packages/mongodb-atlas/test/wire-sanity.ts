#!/usr/bin/env bun
/**
 * mongodb-atlas-wire-sanity — offline wire checks for the MongoDB Atlas SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * Credentials (fixed bearer token), then verifies:
 *   (a) getGroup encodes GET {base}/api/atlas/v2/groups/{groupId} with
 *       `Authorization: Bearer <token>` and the date-versioned
 *       `Accept: application/vnd.atlas.2023-01-01+json` header (plain
 *       application/json draws a 406 from the live API)
 *   (a') query members encode as query params (envelope/pretty)
 *   (b) a canned response decodes to typed output
 *   (c) a 404 Atlas error envelope maps to the operation's typed NotFound
 *       (message = detail-first, v0 parity)
 *   (c') an unmapped 4xx status falls through to UnknownMongodbAtlasError
 *        carrying the envelope
 *
 * Run: bun packages/mongodb-atlas/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as MongodbAtlas from "../src/index.ts";
import { getGroup, NotFound } from "../src/services/atlas.ts";

// ---------------------------------------------------------------------------
// Stub credentials: fixed bearer token, default base URL
// ---------------------------------------------------------------------------

const ACCESS_TOKEN = "test-access-token";

const stubCredentials = Layer.succeed(
  MongodbAtlas.Credentials,
  Effect.succeed({
    accessToken: Redacted.make(ACCESS_TOKEN),
    apiBaseUrl: MongodbAtlas.DEFAULT_API_BASE_URL,
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
    MongodbAtlas.Retry.none,
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
    // (a)+(b) — request line, bearer auth, versioned Accept, typed decode --
    console.log("(a)+(b) getGroup encode + decode");
    script = [
      () =>
        json({
          clusterCount: 2,
          created: "2024-05-01T00:00:00Z",
          id: "32b6e34b3d91647abb20e7b8",
          name: "prod-project",
          orgId: "32b6e34b3d91647abb20e7b9",
        }),
    ];
    const out = yield* provide(
      getGroup({ groupId: "32b6e34b3d91647abb20e7b8" }),
    );
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url ===
        "https://cloud.mongodb.com/api/atlas/v2/groups/32b6e34b3d91647abb20e7b8",
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === `Bearer ${ACCESS_TOKEN}`,
      "Authorization: Bearer <access token>",
    );
    assert(
      req.headers["accept"] === "application/vnd.atlas.2023-01-01+json",
      `Accept: application/vnd.atlas.2023-01-01+json (got ${req.headers["accept"]})`,
    );
    assert(out.name === "prod-project", "decoded name === 'prod-project'");
    assert(out.clusterCount === 2, "decoded clusterCount === 2");
    assert(
      out.orgId === "32b6e34b3d91647abb20e7b9",
      "decoded orgId round-trips",
    );

    // (a') — query members encode as query params --------------------------
    console.log("(a') query params");
    script = [
      () =>
        json({
          clusterCount: 0,
          created: "2024-05-01T00:00:00Z",
          name: "p",
          orgId: "o",
        }),
    ];
    yield* provide(
      getGroup({
        groupId: "32b6e34b3d91647abb20e7b8",
        envelope: false,
        pretty: true,
      }),
    );
    const qreq = captured.at(-1)!;
    const qs = new URL(qreq.url).searchParams;
    assert(qs.get("envelope") === "false", "?envelope=false encoded");
    assert(qs.get("pretty") === "true", "?pretty=true encoded");

    // (c) — 404 Atlas envelope → typed NotFound ----------------------------
    console.log("(c) 404 envelope → typed NotFound");
    script = [
      () =>
        json(
          {
            error: 404,
            errorCode: "GROUP_NOT_FOUND",
            reason: "Not Found",
            detail: "No group with ID 32b6e34b3d91647abb20e7b8 exists.",
          },
          404,
        ),
    ];
    const missing = yield* provide(
      getGroup({ groupId: "32b6e34b3d91647abb20e7b8" }),
    ).pipe(Effect.flip);
    assert(
      missing instanceof NotFound,
      `typed NotFound (${(missing as any)._tag})`,
    );
    assert(
      (missing as any).message ===
        "No group with ID 32b6e34b3d91647abb20e7b8 exists.",
      "message = envelope detail (detail-first, v0 parity)",
    );

    // (c') — unmapped status → UnknownMongodbAtlasError --------------------
    console.log("(c') unmapped status → UnknownMongodbAtlasError");
    script = [
      () =>
        json(
          {
            error: 418,
            errorCode: "TEAPOT",
            reason: "I'm a teapot",
          },
          418,
        ),
    ];
    const unknown = yield* provide(
      getGroup({ groupId: "32b6e34b3d91647abb20e7b8" }),
    ).pipe(Effect.flip);
    assert(
      unknown instanceof MongodbAtlas.UnknownMongodbAtlasError,
      `UnknownMongodbAtlasError (${(unknown as any)._tag})`,
    );
    assert(
      (unknown as InstanceType<typeof MongodbAtlas.UnknownMongodbAtlasError>)
        .errorCode === "TEAPOT",
      "errorCode carried from the envelope",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
