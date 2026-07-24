#!/usr/bin/env bun
/**
 * neon-wire-sanity — offline wire checks for the Neon SDK pilot.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * NeonCredentials, then verifies:
 *   (a) listProjects encodes GET {base}/projects with Authorization: Bearer
 *   (b) a canned response decodes to typed output (incl. Redacted sensitive)
 *   (c) a 404 {code,message} body raises the typed NotFound, message enriched
 *   (d) cursor pagination advances through a two-page canned sequence
 *
 * Run: bun packages/neon/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Stream from "effect/Stream";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as Neon from "../src/index.ts";
import {
  getConnectionURI,
  getProjectBranchRolePassword,
  listProjects,
  NotFound,
} from "../src/services/neon.ts";

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
    Effect.provide(Neon.fromApiKey({ apiKey: "test-key" })),
    Neon.Retry.none,
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

const page1 = {
  projects: [{ id: "p1", name: "one" }],
  pagination: { cursor: "cursor-2" },
  applications: {},
  integrations: {},
};
const page2 = {
  projects: [{ id: "p2", name: "two" }],
  applications: {},
  integrations: {},
};

await Effect.runPromise(
  Effect.gen(function* () {
    // (a)+(b) — request line, auth header, typed decode -------------------
    console.log("(a)+(b) listProjects encode + decode");
    script = [() => json(page1)];
    const out = yield* provide(listProjects({ limit: 10 }));
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === "https://console.neon.tech/api/v2/projects?limit=10",
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === "Bearer test-key",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );
    assert(out.projects[0]!.id === "p1", "decoded projects[0].id === 'p1'");
    assert(
      out.pagination?.cursor === "cursor-2",
      "decoded pagination.cursor === 'cursor-2'",
    );

    // (b') — label + query encoding ---------------------------------------
    console.log("(b') getConnectionURI label + query encoding");
    script = [() => json({ uri: "postgres://user:pw@host/db" })];
    const conn = yield* provide(
      getConnectionURI({
        project_id: "p1",
        database_name: "db",
        role_name: "r",
      }),
    );
    assert(conn.uri === "postgres://user:pw@host/db", "uri decoded");
    const connReq = captured.at(-1)!;
    assert(
      connReq.url ===
        "https://console.neon.tech/api/v2/projects/p1/connection_uri?database_name=db&role_name=r",
      `label + query encoding (${connReq.url})`,
    );

    // (b'') — sensitive output member delivered as Redacted ---------------
    console.log("(b'') getProjectBranchRolePassword sensitive output");
    script = [() => json({ password: "hunter2" })];
    const pw = yield* provide(
      getProjectBranchRolePassword({
        project_id: "p1",
        branch_id: "b1",
        role_name: "r1",
      }),
    );
    assert(Redacted.isRedacted(pw.password), "password is Redacted<string>");
    assert(
      Redacted.value(pw.password as Redacted.Redacted<string>) === "hunter2",
      "Redacted unwraps to the wire value",
    );

    // (c) — typed 404 ------------------------------------------------------
    // getConnectionURI declares NotFound in its errors list (from the ported
    // v0 patch), so the 404 surfaces as the op's typed class instance.
    console.log("(c) 404 → typed NotFound");
    script = [
      () =>
        json({ code: "project_not_found", message: "no such project" }, 404),
    ];
    const failure = yield* provide(
      getConnectionURI({
        project_id: "nope",
        database_name: "db",
        role_name: "r",
      }),
    ).pipe(Effect.flip);
    assert(
      failure instanceof NotFound,
      `instance of typed NotFound (${(failure as any)._tag})`,
    );
    assert(
      (failure as InstanceType<typeof NotFound>).message === "no such project",
      "message enriched from the error body",
    );
    // An op that does NOT declare 404 still gets a NotFound-tagged error
    // (core status-map fallback).
    script = [() => json({ message: "nope" }, 404)];
    const fallback = yield* provide(listProjects({})).pipe(Effect.flip);
    assert(
      (fallback as any)._tag === "NotFound",
      "undeclared 404 falls back to the shared status-map NotFound",
    );

    // (d) — cursor pagination advances ------------------------------------
    console.log("(d) cursor pagination");
    captured.length = 0;
    script = [() => json(page1), () => json(page2)];
    const pages = yield* provide(
      Stream.runCollect(listProjects.pages({ limit: 2 })),
    );
    assert(pages.length === 2, `two pages collected (got ${pages.length})`);
    assert(
      captured[0]!.url === "https://console.neon.tech/api/v2/projects?limit=2",
      "first page has no cursor",
    );
    assert(
      captured[1]!.url ===
        "https://console.neon.tech/api/v2/projects?cursor=cursor-2&limit=2",
      `second page advances the cursor (${captured[1]!.url})`,
    );

    // (d') — .items() flattens across pages -------------------------------
    script = [() => json(page1), () => json(page2)];
    const items = yield* provide(
      Stream.runCollect(listProjects.items({ limit: 2 })),
    );
    assert(
      items.length === 2 &&
        (items as any)[0].id === "p1" &&
        (items as any)[1].id === "p2",
      ".items() yields the projects across pages",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
