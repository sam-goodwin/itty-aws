#!/usr/bin/env bun
/**
 * kubernetes-wire-sanity — offline wire checks for the Kubernetes SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * Credentials, then verifies:
 *   (a) readCoreV1NamespacedPod encodes GET {base}/api/v1/namespaces/{ns}/pods/{name}
 *       with Authorization: Bearer, label + query params bound correctly
 *   (b) a canned Pod response decodes to typed output
 *   (c) a 404 `v1.Status` body raises the op's typed NotFound (ported 001 patch)
 *   (d) a 409 `v1.Status` body on create raises the typed Conflict (002 patch)
 *   (e) an unmapped status falls through to UnknownKubernetesError with `reason`
 *
 * Run: bun packages/kubernetes/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as Kubernetes from "../src/index.ts";
import {
  Conflict,
  createCoreV1NamespacedPod,
  NotFound,
  readCoreV1NamespacedPod,
} from "../src/services/core.ts";

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
      Kubernetes.fromToken({
        token: "test-token",
        apiBaseUrl: "https://cluster.example:6443",
      }),
    ),
    Kubernetes.Retry.none,
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

const cannedPod = {
  apiVersion: "v1",
  kind: "Pod",
  metadata: { name: "web-0", namespace: "default", labels: { app: "web" } },
  spec: { containers: [{ name: "web", image: "nginx:1.27" }] },
  status: { phase: "Running" },
};

/** Kubernetes error bodies follow the `v1.Status` schema. */
const v1Status = (code: number, reason: string, message: string) => ({
  kind: "Status",
  apiVersion: "v1",
  status: "Failure",
  message,
  reason,
  code,
});

await Effect.runPromise(
  Effect.gen(function* () {
    // (a)+(b) — request line, labels, query, auth header, typed decode ------
    console.log("(a)+(b) readCoreV1NamespacedPod encode + decode");
    script = [() => json(cannedPod)];
    const pod = yield* provide(
      readCoreV1NamespacedPod({
        namespace: "default",
        name: "web-0",
        pretty: "true",
      }),
    );
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url ===
        "https://cluster.example:6443/api/v1/namespaces/default/pods/web-0?pretty=true",
      `url labels + query encoded (${req.url})`,
    );
    assert(
      req.headers["authorization"] === "Bearer test-token",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );
    assert(pod.metadata?.name === "web-0", "decoded metadata.name === 'web-0'");
    assert(
      pod.spec?.containers[0]?.image === "nginx:1.27",
      "decoded spec.containers[0].image",
    );
    assert(pod.status?.phase === "Running", "decoded status.phase");

    // (c) — 404 v1.Status → typed NotFound (ported 001 patch) --------------
    console.log("(c) 404 → typed NotFound");
    script = [
      () => json(v1Status(404, "NotFound", 'pods "web-1" not found'), 404),
    ];
    const notFound = yield* provide(
      readCoreV1NamespacedPod({ namespace: "default", name: "web-1" }),
    ).pipe(Effect.flip);
    assert(
      notFound instanceof NotFound,
      `instance of typed NotFound (${(notFound as any)._tag})`,
    );
    assert(
      (notFound as InstanceType<typeof NotFound>).message ===
        'pods "web-1" not found',
      "message enriched from the v1.Status body",
    );

    // (d) — 409 v1.Status on create → typed Conflict (ported 002 patch) ----
    console.log("(d) 409 → typed Conflict");
    script = [
      () =>
        json(
          v1Status(409, "AlreadyExists", 'pods "web-0" already exists'),
          409,
        ),
    ];
    const conflict = yield* provide(
      createCoreV1NamespacedPod({
        namespace: "default",
        metadata: { name: "web-0" },
        spec: { containers: [{ name: "web", image: "nginx:1.27" }] },
      }),
    ).pipe(Effect.flip);
    const createReq = captured.at(-1)!;
    assert(createReq.method === "POST", `create is POST (${createReq.method})`);
    assert(
      createReq.url ===
        "https://cluster.example:6443/api/v1/namespaces/default/pods",
      `create url (${createReq.url})`,
    );
    assert(
      conflict instanceof Conflict,
      `instance of typed Conflict (${(conflict as any)._tag})`,
    );

    // (e) — unmapped status → UnknownKubernetesError with reason -----------
    console.log("(e) unmapped status → UnknownKubernetesError");
    script = [() => json(v1Status(418, "Teapot", "short and stout"), 418)];
    const unknown = yield* provide(
      readCoreV1NamespacedPod({ namespace: "default", name: "web-0" }),
    ).pipe(Effect.flip);
    assert(
      unknown instanceof Kubernetes.UnknownKubernetesError,
      `instance of UnknownKubernetesError (${(unknown as any)._tag})`,
    );
    assert(
      (unknown as Kubernetes.UnknownKubernetesError).reason === "Teapot",
      "reason recovered from the v1.Status body",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
