#!/usr/bin/env bun
/**
 * prisma-postgres wire-sanity — offline wire checks for the Prisma Postgres
 * SDK. Stubs HttpClient (capturing requests, returning canned JSON) and
 * Credentials (fixed bearer token), then verifies:
 *   (a) getV1DatabasesByDatabaseId encodes GET {base}/v1/databases/{id} with
 *       `Authorization: Bearer <token>`
 *   (b) a canned response decodes to typed output
 *   (c) a 404 `{ error: { code, message } }` body returns the typed NotFound
 *       error with the envelope message (the wire `code` is a string like
 *       "P6xxx"; per protocol.ts it is swallowed for status-matched classes,
 *       so the class's numeric `code` defaults to 0 — mirroring v0)
 *
 * Run: bun packages/prisma-postgres/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as PrismaPostgres from "../src/index.ts";
import {
  getV1DatabasesByDatabaseId,
  NotFound,
} from "../src/services/management.ts";

// ---------------------------------------------------------------------------
// Stub credentials
// ---------------------------------------------------------------------------

const API_TOKEN = "pp-test-token-123";
const stubCredentials = PrismaPostgres.fromApiToken({ apiToken: API_TOKEN });

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
    PrismaPostgres.Retry.none,
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
    // (a)+(b) — request line, bearer auth, typed decode ---------------------
    console.log("(a)+(b) getV1DatabasesByDatabaseId encode + decode");
    script = [
      () =>
        json({
          data: {
            id: "db-1",
            type: "database",
            url: "https://console.prisma.io/db-1",
            name: "main-db",
            status: "ready",
            createdAt: "2026-01-01T00:00:00Z",
            isDefault: true,
            defaultConnectionId: "conn-1",
            connections: [],
            project: {
              id: "proj-1",
              url: "https://console.prisma.io/proj-1",
              name: "my-project",
            },
            region: null,
            source: null,
            branchId: "br-1",
          },
        }),
    ];
    const out = yield* provide(
      getV1DatabasesByDatabaseId({ databaseId: "db-1" }),
    );
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === "https://api.prisma.io/v1/databases/db-1",
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === `Bearer ${API_TOKEN}`,
      "Authorization: Bearer <apiToken>",
    );
    assert(out.data.id === "db-1", "decoded data.id === 'db-1'");
    assert(out.data.name === "main-db", "decoded data.name === 'main-db'");
    assert(out.data.status === "ready", "decoded data.status === 'ready'");
    assert(
      out.data.project.name === "my-project",
      "decoded nested project.name",
    );
    assert(out.data.region === null, "nullable region decodes to null");

    // (c) — typed error from the { error: {...} } envelope ------------------
    console.log("(c) 404 envelope → typed NotFound");
    script = [
      () =>
        json(
          {
            error: {
              code: "P6006",
              message: "Database db-missing not found",
              hint: "Check the database ID",
            },
          },
          404,
        ),
    ];
    const failure = yield* provide(
      getV1DatabasesByDatabaseId({ databaseId: "db-missing" }),
    ).pipe(Effect.flip);
    assert(
      failure instanceof NotFound,
      `status 404 → NotFound (${(failure as any)._tag})`,
    );
    assert(
      (failure as InstanceType<typeof NotFound>).message ===
        "Database db-missing not found",
      "message carried from the error envelope",
    );
    assert(
      (failure as InstanceType<typeof NotFound>).code === 0,
      "string wire code swallowed → numeric code defaults to 0 (v0 parity)",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
