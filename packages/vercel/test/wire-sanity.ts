#!/usr/bin/env bun
/**
 * vercel-wire-sanity — offline wire checks for the Vercel SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * VercelCredentials, then verifies:
 *   (a) readsAnAccessGroup encodes GET {base}/v1/access-groups/{idOrName}
 *       with the bearer token, and a canned body decodes to typed output
 *   (b) teamId/slug ride as QUERY params, not credentials, and a list
 *       response keeps its `pagination` envelope verbatim
 *   (c) a POST sends its flattened body members as JSON
 *   (d) Vercel's `{ error: { code, message } }` envelope enriches the typed
 *       404, and an undeclared status falls back to the shared status map
 *   (e) 410 raises the operation's typed Gone
 *   (f) uploadACacheArtifact sends raw bytes as application/octet-stream with
 *       the `x-Artifact-*` header inputs, and decodes its 202 body
 *   (g) checkIfACacheArtifactExists issues a real HEAD
 *
 * These are the parts of the pipeline the docs can't prove on their own: that
 * a header parameter table became a header, that a binary body is sent as
 * bytes, that 202 is a success. Run:
 *
 *   bun packages/vercel/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { credentials } from "../src/credentials.ts";
import * as Retry from "../src/retry.ts";
import {
  createsAnAccessGroup,
  listAccessGroupsForATeamProjectOrMember,
  readsAnAccessGroup,
  Gone,
} from "../src/services/access_groups.ts";
import {
  checkIfACacheArtifactExists,
  downloadACacheArtifact,
  uploadACacheArtifact,
  NotFound,
} from "../src/services/artifacts.ts";

// ---------------------------------------------------------------------------
// Stub HttpClient: scripted (request → canned Response) with capture
// ---------------------------------------------------------------------------

interface Captured {
  method: string;
  url: string;
  headers: Record<string, string>;
  body?: string;
}

const captured: Captured[] = [];
let script: Array<(req: Captured) => Response> = [];

const stubClient = HttpClient.make((request) =>
  Effect.gen(function* () {
    const cap: Captured = {
      method: request.method,
      url: request.url,
      headers: { ...request.headers } as Record<string, string>,
      body: yield* bodyText(request),
    };
    captured.push(cap);
    const next = script.shift();
    if (!next) throw new Error(`unexpected request: ${cap.method} ${cap.url}`);
    return HttpClientResponse.fromWeb(request, next(cap));
  }),
);

/** Read a request's body as text, whatever form it was set in. */
const bodyText = (request: {
  readonly body: unknown;
}): Effect.Effect<string | undefined> =>
  Effect.promise(async () => {
    const body = request.body as any;
    if (!body || body._tag === "Empty") return undefined;
    if (typeof body.body === "string") return body.body;
    if (body.body instanceof Uint8Array) {
      return new TextDecoder().decode(body.body);
    }
    if (body.body instanceof Blob) return await body.body.text();
    if (body.body instanceof ArrayBuffer) {
      return new TextDecoder().decode(new Uint8Array(body.body));
    }
    return undefined;
  });

const provide = <A, E, R>(effect: Effect.Effect<A, E, R>) =>
  effect.pipe(
    Effect.provideService(HttpClient.HttpClient, stubClient),
    Effect.provide(credentials({ token: "vercel_test_token" })),
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

const accessGroup = {
  accessGroupId: "ag_123",
  name: "Engineering",
  teamId: "team_abc",
  createdAt: "1704067200000",
  updatedAt: "1704067200000",
  membersCount: 4,
  projectsCount: 2,
  isDsyncManaged: false,
};

await Effect.runPromise(
  Effect.gen(function* () {
    // (a) — request line, bearer auth, typed decode ------------------------
    console.log("(a) accessGroups.readsAnAccessGroup encode + decode");
    script = [() => json(accessGroup)];
    const out = yield* provide(readsAnAccessGroup({ idOrName: "ag_123" }));
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === "https://api.vercel.com/v1/access-groups/ag_123",
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === "Bearer vercel_test_token",
      `Authorization bearer (got ${req.headers["authorization"]})`,
    );
    assert(out.name === "Engineering", "decoded name");
    assert(out.membersCount === 4, "decoded membersCount");

    // (b) — team scoping is a query param; pagination stays on the body ----
    console.log("(b) team scoping via query params + pagination passthrough");
    script = [
      () =>
        json({
          accessGroups: [accessGroup],
          pagination: { count: 1, next: null, prev: null },
        }),
    ];
    const list = yield* provide(
      listAccessGroupsForATeamProjectOrMember({
        teamId: "team_abc",
        limit: 20,
      }),
    );
    const listReq = captured.at(-1)!;
    assert(
      listReq.url ===
        "https://api.vercel.com/v1/access-groups?limit=20&teamId=team_abc",
      `url with query ${listReq.url}`,
    );
    assert(list.accessGroups?.length === 1, "decoded one access group");
    assert(
      list.pagination?.count === 1,
      "pagination envelope survives decoding",
    );

    // (c) — POST body members serialize as JSON ----------------------------
    console.log("(c) createsAnAccessGroup POST body");
    script = [() => json(accessGroup)];
    yield* provide(
      createsAnAccessGroup({ teamId: "team_abc", name: "Engineering" }),
    );
    const postReq = captured.at(-1)!;
    assert(postReq.method === "POST", `method POST (got ${postReq.method})`);
    assert(
      postReq.url === "https://api.vercel.com/v1/access-groups?teamId=team_abc",
      `teamId stays on the query string (${postReq.url})`,
    );
    assert(
      JSON.parse(postReq.body ?? "{}").name === "Engineering",
      `name in the JSON body (got ${postReq.body})`,
    );
    assert(
      JSON.parse(postReq.body ?? "{}").teamId === undefined,
      "teamId is NOT duplicated into the body",
    );

    // (d) — Vercel's error envelope, then the status-map fallback ----------
    console.log("(d) { error: { code, message } } → typed NotFound");
    script = [
      () =>
        json(
          { error: { code: "not_found", message: "Artifact not found" } },
          404,
        ),
    ];
    const failure = yield* provide(
      downloadACacheArtifact({ hash: "nope" }),
    ).pipe(Effect.flip);
    assert(
      failure instanceof NotFound,
      `instance of the module's typed NotFound (${(failure as any)._tag})`,
    );
    assert(
      (failure as InstanceType<typeof NotFound>).message ===
        "Artifact not found",
      "message read out of the error envelope",
    );
    // readsAnAccessGroup declares no 404 — the docs simply don't list one for
    // that endpoint — so an actual 404 rides core's shared status map to the
    // same tag rather than falling through to UnknownVercelError.
    script = [
      () => json({ error: { code: "not_found", message: "Nope" } }, 404),
    ];
    const fallback = yield* provide(
      readsAnAccessGroup({ idOrName: "ag_nope" }),
    ).pipe(Effect.flip);
    assert(
      (fallback as any)._tag === "NotFound",
      `undeclared 404 falls back to the shared status map (got ${(fallback as any)._tag})`,
    );

    // (e) — 410, which nearly every Vercel endpoint declares ---------------
    console.log("(e) 410 → typed Gone");
    script = [
      () =>
        json({ error: { code: "gone", message: "No longer available" } }, 410),
    ];
    const gone = yield* provide(
      readsAnAccessGroup({ idOrName: "ag_123" }),
    ).pipe(Effect.flip);
    assert(
      gone instanceof Gone,
      `instance of the module's typed Gone (${(gone as any)._tag})`,
    );

    // (f) — raw binary upload: header inputs + octet-stream body + 202 -----
    console.log("(f) uploadACacheArtifact binary body, headers, 202 decode");
    script = [() => json({ urls: ["https://vercel.com/artifact/abc"] }, 202)];
    const uploaded = yield* provide(
      uploadACacheArtifact({
        hash: "abc123",
        teamId: "team_abc",
        body: "artifact-bytes",
        contentLength: 14,
        xArtifactTag: "dGFn",
        xArtifactClientCi: "GITHUB_ACTIONS",
      }),
    );
    const putReq = captured.at(-1)!;
    assert(putReq.method === "PUT", `method PUT (got ${putReq.method})`);
    assert(
      putReq.url ===
        "https://api.vercel.com/v8/artifacts/abc123?teamId=team_abc",
      `url ${putReq.url}`,
    );
    assert(
      putReq.headers["x-artifact-tag"] === "dGFn",
      `x-Artifact-Tag header sent (got ${putReq.headers["x-artifact-tag"]})`,
    );
    assert(
      putReq.headers["x-artifact-client-ci"] === "GITHUB_ACTIONS",
      `x-Artifact-Client-Ci header sent (got ${putReq.headers["x-artifact-client-ci"]})`,
    );
    assert(
      putReq.headers["content-type"]?.startsWith("application/octet-stream"),
      `octet-stream content type (got ${putReq.headers["content-type"]})`,
    );
    assert(
      putReq.body === "artifact-bytes",
      `body sent verbatim (got ${putReq.body})`,
    );
    assert(
      uploaded.urls?.[0] === "https://vercel.com/artifact/abc",
      "202 response body decoded",
    );

    // (g) — HEAD probes ----------------------------------------------------
    console.log("(g) checkIfACacheArtifactExists issues HEAD");
    script = [() => new Response(null, { status: 200 })];
    yield* provide(checkIfACacheArtifactExists({ hash: "abc123" }));
    const headReq = captured.at(-1)!;
    assert(headReq.method === "HEAD", `method HEAD (got ${headReq.method})`);
    assert(
      headReq.url === "https://api.vercel.com/v8/artifacts/abc123",
      `url ${headReq.url}`,
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
