#!/usr/bin/env bun
/**
 * gcp-wire-sanity — offline wire checks for the GCP SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * Credentials, then verifies:
 *   (a) storage_v1 getBuckets encodes GET
 *       https://storage.googleapis.com/storage/v1/b/{bucket} with
 *       Authorization: Bearer, label + query params bound correctly
 *   (b) a canned Bucket response decodes to typed output
 *   (c) a 404 GCP error envelope raises the op's typed NotFound with the
 *       envelope message and gRPC-style `status` populated
 *   (d) an unmapped status falls through to UnknownGCPError carrying the
 *       envelope `code` and raw body
 *
 * Run: bun packages/gcp/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { fromAccessToken, Retry, UnknownGCPError } from "../src/index.ts";
import { getBuckets, NotFound } from "../src/services/storage_v1.ts";

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
      fromAccessToken({ accessToken: "test-token", project: "test-project" }),
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

const cannedBucket = {
  kind: "storage#bucket",
  id: "my-bucket",
  name: "my-bucket",
  location: "US-EAST1",
  storageClass: "STANDARD",
  iamConfiguration: { uniformBucketLevelAccess: { enabled: true } },
};

/** GCP standard error envelope <https://cloud.google.com/apis/design/errors>. */
const gcpError = (code: number, status: string, message: string) => ({
  error: {
    code,
    message,
    status,
    errors: [{ message, domain: "global", reason: status }],
  },
});

await Effect.runPromise(
  Effect.gen(function* () {
    // (a)+(b) — request line, label, query, auth header, typed decode -------
    console.log("(a)+(b) storage_v1 getBuckets encode + decode");
    script = [() => json(cannedBucket)];
    const bucket = yield* provide(
      getBuckets({ bucket: "my-bucket", projection: "full" }),
    );
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url ===
        "https://storage.googleapis.com/storage/v1/b/my-bucket?projection=full",
      `url = baseUrl + label + query (${req.url})`,
    );
    assert(
      req.headers["authorization"] === "Bearer test-token",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );
    assert(bucket.name === "my-bucket", "decoded name === 'my-bucket'");
    assert(bucket.location === "US-EAST1", "decoded location");
    assert(
      bucket.iamConfiguration?.uniformBucketLevelAccess?.enabled === true,
      "decoded nested iamConfiguration",
    );

    // (c) — 404 envelope → typed NotFound ----------------------------------
    console.log("(c) 404 → typed NotFound");
    script = [
      () =>
        json(
          gcpError(404, "NOT_FOUND", "The specified bucket does not exist."),
          404,
        ),
    ];
    const notFound = yield* provide(getBuckets({ bucket: "nope" })).pipe(
      Effect.flip,
    );
    assert(
      (notFound as { _tag?: string })._tag === "NotFound",
      `_tag === "NotFound" (got ${(notFound as { _tag?: string })._tag})`,
    );
    const nf = notFound as InstanceType<typeof NotFound>;
    assert(
      nf.message === "The specified bucket does not exist.",
      "message from the error envelope",
    );
    assert(
      nf.status === "NOT_FOUND",
      `gRPC-style status tacked on (${nf.status})`,
    );

    // (d) — unmapped status → UnknownGCPError ------------------------------
    console.log("(d) unmapped status → UnknownGCPError");
    script = [() => json(gcpError(418, "TEAPOT", "short and stout"), 418)];
    const unknown = yield* provide(getBuckets({ bucket: "my-bucket" })).pipe(
      Effect.flip,
    );
    assert(
      unknown instanceof UnknownGCPError,
      `instance of UnknownGCPError (${(unknown as { _tag?: string })._tag})`,
    );
    const ue = unknown as InstanceType<typeof UnknownGCPError>;
    assert(ue.code === 418, `envelope code recovered (${ue.code})`);
    assert(ue.message === "short and stout", "envelope message recovered");

    console.log("\nAll wire-sanity checks passed.");
  }),
);
