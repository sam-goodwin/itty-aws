#!/usr/bin/env bun
/**
 * github-wire-sanity — offline wire checks for the GitHub SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * GithubCredentials, then verifies:
 *   (a) repos.get encodes GET {base}/repos/{owner}/{repo} with the bearer
 *       token, the version-pinned Accept / X-GitHub-Api-Version headers and
 *       the User-Agent GitHub rejects requests without
 *   (b) a canned response decodes to typed output
 *   (c) query params (page / per_page) land on the URL and a BARE ARRAY
 *       response body decodes as the output itself (RawResponseRoot)
 *   (d) a 404 {message} body raises the op's typed NotFound, and an
 *       undeclared status falls back to the shared status map
 *   (e) 410 raises the GitHub-specific typed Gone
 *
 * Run: bun packages/github/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { credentials } from "../src/credentials.ts";
import * as Retry from "../src/retry.ts";
import { get, listForOrg, NotFound } from "../src/services/repos.ts";
import {
  get as getIssue,
  listForRepo,
  Gone as IssuesGone,
} from "../src/services/issues.ts";
import { Gone } from "../src/errors.ts";

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
    Effect.provide(credentials({ token: "ghp_test", userAgent: "wire-test" })),
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

const repo = {
  id: 1296269,
  name: "Hello-World",
  full_name: "octocat/Hello-World",
  private: false,
  default_branch: "main",
};

await Effect.runPromise(
  Effect.gen(function* () {
    // (a)+(b) — request line, auth + version headers, typed decode ---------
    console.log("(a)+(b) repos.get encode + decode");
    script = [() => json(repo)];
    const out = yield* provide(get({ owner: "octocat", repo: "Hello-World" }));
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === "https://api.github.com/repos/octocat/Hello-World",
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === "Bearer ghp_test",
      `Authorization bearer (got ${req.headers["authorization"]})`,
    );
    assert(
      req.headers["accept"] === "application/vnd.github+json",
      `Accept (got ${req.headers["accept"]})`,
    );
    assert(
      req.headers["x-github-api-version"] === "2022-11-28",
      `X-GitHub-Api-Version (got ${req.headers["x-github-api-version"]})`,
    );
    assert(
      req.headers["user-agent"] === "wire-test",
      `User-Agent (got ${req.headers["user-agent"]})`,
    );
    assert(out.full_name === "octocat/Hello-World", "decoded full_name");
    assert(out.id === 1296269, "decoded id");

    // (c) — query params + bare-array body --------------------------------
    console.log("(c) repos.listForOrg query params + bare-array response");
    script = [() => json([repo, { ...repo, id: 2, name: "Spoon-Knife" }])];
    const list = yield* provide(
      listForOrg({ org: "github", per_page: 2, page: 3 }),
    );
    const listReq = captured.at(-1)!;
    assert(
      listReq.url ===
        "https://api.github.com/orgs/github/repos?per_page=2&page=3",
      `url with query ${listReq.url}`,
    );
    assert(Array.isArray(list), "bare array body IS the output");
    assert(list.length === 2, `two items (got ${list.length})`);
    assert(list[0]!.name === "Hello-World", "first item decoded");

    // (d) — typed 404, then the status-map fallback ------------------------
    console.log("(d) 404 → typed NotFound");
    script = [() => json({ message: "Not Found" }, 404)];
    const failure = yield* provide(
      get({ owner: "octocat", repo: "nope" }),
    ).pipe(Effect.flip);
    assert(
      failure instanceof NotFound,
      `instance of typed NotFound (${(failure as any)._tag})`,
    );
    assert(
      (failure as InstanceType<typeof NotFound>).message === "Not Found",
      "message enriched from the error body",
    );
    // repos.get does not declare 401; it still surfaces a tagged error via
    // core's shared status map.
    script = [() => json({ message: "Bad credentials" }, 401)];
    const fallback = yield* provide(
      get({ owner: "octocat", repo: "Hello-World" }),
    ).pipe(Effect.flip);
    assert(
      (fallback as any)._tag === "Unauthorized",
      `undeclared 401 falls back to the shared status map (got ${(fallback as any)._tag})`,
    );

    // (e) — GitHub's 410 --------------------------------------------------
    // issues.get declares a 410 response, so it surfaces the module's own
    // typed class …
    console.log("(e) 410 → typed Gone");
    script = [
      () => json({ message: "Issues are disabled for this repo" }, 410),
    ];
    const gone = yield* provide(
      getIssue({ owner: "octocat", repo: "Hello-World", issue_number: 1 }),
    ).pipe(Effect.flip);
    assert(
      gone instanceof IssuesGone,
      `instance of the module's typed Gone (${(gone as any)._tag})`,
    );
    // … while issues.listForRepo does not, and rides the package's
    // status-map entry to the same tag.
    script = [() => json({ message: "Gone" }, 410)];
    const goneFallback = yield* provide(
      listForRepo({ owner: "octocat", repo: "Hello-World" }),
    ).pipe(Effect.flip);
    assert(
      goneFallback instanceof Gone,
      `undeclared 410 falls back to the package status map (got ${(goneFallback as any)._tag})`,
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
