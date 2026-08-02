#!/usr/bin/env bun
/**
 * cloudflare-wire-sanity — offline wire checks for the Cloudflare SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned envelope JSON) and
 * Credentials, then verifies:
 *   (a) zones listZones with the nested deep-object filter
 *       `{ account: { id } }` encodes the DOTTED query family
 *       `?account.id=…` (T.DeepQuery — v0-parity nested struct surface)
 *   (b) both nested fields expand (`account.id` + `account.name`) alongside
 *       plain query members, and null/undefined entries are skipped
 *   (c) the enveloped response decodes (unwrapped `result` + `resultInfo`)
 *   (d) Worker declarative exports encode in multipart metadata and the
 *       reconciliation response decodes with its snake_case wire fields
 *
 * Run: bun packages/cloudflare/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import type * as HttpBody from "effect/unstable/http/HttpBody";
import * as Cloudflare from "../src/index.ts";
import { putScript } from "../src/services/workers.ts";
import { listZones } from "../src/services/zones.ts";

// ---------------------------------------------------------------------------
// Stub HttpClient: scripted (request → canned Response) with capture
// ---------------------------------------------------------------------------

interface Captured {
  method: string;
  url: string;
  headers: Record<string, string>;
  body: HttpBody.HttpBody;
}

const captured: Captured[] = [];
let script: Array<(req: Captured) => Response> = [];

const stubClient = HttpClient.make((request) => {
  const cap: Captured = {
    method: request.method,
    url: request.url,
    headers: { ...request.headers } as Record<string, string>,
    body: request.body,
  };
  captured.push(cap);
  const next = script.shift();
  if (!next) throw new Error(`unexpected request: ${cap.method} ${cap.url}`);
  return Effect.succeed(HttpClientResponse.fromWeb(request, next(cap)));
});

const provide = <A, E, R>(effect: Effect.Effect<A, E, R>) =>
  effect.pipe(
    Effect.provideService(HttpClient.HttpClient, stubClient),
    Effect.provide(Cloudflare.fromApiToken({ apiToken: "test-token" })),
    Cloudflare.Retry.none,
  ) as Effect.Effect<A, E, never>;

const envelope = (result: unknown, resultInfo?: unknown) =>
  new Response(
    JSON.stringify({
      success: true,
      errors: [],
      messages: [],
      result,
      ...(resultInfo !== undefined ? { result_info: resultInfo } : {}),
    }),
    { status: 200, headers: { "content-type": "application/json" } },
  );

const assert = (cond: unknown, msg: string): asserts cond => {
  if (!cond) throw new Error(`ASSERT FAILED: ${msg}`);
  console.log(`  ✓ ${msg}`);
};

const BASE = "https://api.cloudflare.com/client/v4";

await Effect.runPromise(
  Effect.gen(function* () {
    // (a) — deep-object query filter encodes dotted params ------------------
    console.log("(a) listZones { account: { id } } → ?account.id=…");
    script = [() => envelope([])];
    yield* provide(listZones({ account: { id: "x" } }));
    const req = captured.at(-1);
    assert(req !== undefined, "listZones request was captured");
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === `${BASE}/zones?account.id=x`,
      `url encodes account.id (${req.url})`,
    );
    assert(
      req.headers["authorization"] === "Bearer test-token",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );

    // (b) — full family + plain query members, nullish skipped --------------
    console.log("(b) both nested fields + plain query params");
    script = [() => envelope([])];
    yield* provide(
      listZones({
        account: { id: "a", name: "n" },
        page: 2,
        perPage: 50,
      }),
    );
    assert(
      captured.at(-1)!.url ===
        `${BASE}/zones?account.id=a&account.name=n&page=2&per_page=50`,
      `dotted family alongside plain params (${captured.at(-1)!.url})`,
    );
    script = [() => envelope([])];
    yield* provide(listZones({ account: { id: "only" }, name: undefined }));
    assert(
      captured.at(-1)!.url === `${BASE}/zones?account.id=only`,
      `undefined nested/plain members are skipped (${captured.at(-1)!.url})`,
    );

    // (c) — enveloped response decodes --------------------------------------
    console.log("(c) envelope decode (result + resultInfo)");
    script = [
      () => envelope([], { page: 1, per_page: 20, count: 0, total_count: 0 }),
    ];
    const out = yield* provide(listZones({ account: { id: "x" } }));
    assert(Array.isArray(out.result), "result decodes to an array");
    assert(
      out.resultInfo?.page === 1,
      "resultInfo delivered from the envelope's result_info",
    );

    // (d) — declarative Worker exports request + response ------------------
    console.log("(d) Worker exports multipart encode + reconciliation decode");
    script = [
      () =>
        envelope({
          startup_time_ms: 0,
          exports: {
            Admin: {
              type: "worker",
              cache: { enabled: false },
            },
            Counter: {
              type: "durable-object",
              storage: "sqlite",
            },
            Incoming: {
              type: "durable-object",
              state: "expecting-transfer",
              storage: "legacy-kv",
              transfer_from: "source-worker",
            },
          },
          exports_reconciliation: {
            created: ["Counter"],
            updated: [],
            deleted: [],
            renamed: [{ from: "OldCounter", to: "Counter" }],
            transferred: [],
            transfer_pending: [{ class: "Incoming", from: "source-worker" }],
            warnings: [],
            info: [
              {
                class: "OldCounter",
                scenario: "tombstone_class_still_in_code",
                message: "Remove the old class export after rollout.",
                namespace_id: "namespace",
                referencing_scripts: ["consumer-worker"],
              },
            ],
            removable_entries: ["DeletedCounter"],
          },
        }),
    ];
    const worker = yield* provide(
      putScript({
        accountId: "account",
        scriptName: "worker",
        metadata: {
          mainModule: "index.mjs",
          exports: {
            Admin: {
              type: "worker",
              cache: { enabled: false },
            },
            Counter: {
              type: "durable-object",
              storage: "sqlite",
            },
            DeletedCounter: {
              type: "durable-object",
              state: "deleted",
            },
            OldCounter: {
              type: "durable-object",
              state: "renamed",
              renamedTo: "Counter",
            },
            TransferredCounter: {
              type: "durable-object",
              state: "transferred",
              transferredTo: "target-worker",
            },
            Incoming: {
              type: "durable-object",
              state: "expecting-transfer",
              storage: "legacy-kv",
              transferFrom: "source-worker",
            },
          },
        },
      }),
    );
    const upload = captured.at(-1);
    assert(upload !== undefined, "putScript request was captured");
    assert(
      upload.body._tag === "FormData",
      "putScript uses multipart form data",
    );
    const metadata = upload.body.formData.get("metadata");
    assert(typeof metadata === "string", "metadata is a JSON form field");
    const expectedMetadata = JSON.stringify({
      main_module: "index.mjs",
      exports: {
        Admin: {
          type: "worker",
          cache: { enabled: false },
        },
        Counter: {
          type: "durable-object",
          storage: "sqlite",
        },
        DeletedCounter: {
          type: "durable-object",
          state: "deleted",
        },
        OldCounter: {
          type: "durable-object",
          state: "renamed",
          renamed_to: "Counter",
        },
        TransferredCounter: {
          type: "durable-object",
          state: "transferred",
          transferred_to: "target-worker",
        },
        Incoming: {
          type: "durable-object",
          state: "expecting-transfer",
          storage: "legacy-kv",
          transfer_from: "source-worker",
        },
      },
    });
    assert(
      metadata === expectedMetadata,
      `exports preserve their map keys and wire names (${metadata})`,
    );
    assert(
      worker.exports?.Counter?.type === "durable-object",
      "live Durable Object exports decode",
    );
    const admin = worker.exports.Admin;
    const incoming = worker.exports.Incoming;
    assert(
      admin?.type === "worker" &&
        admin.cache?.enabled === false &&
        incoming?.state === "expecting-transfer" &&
        incoming.transferFrom === "source-worker",
      "live export nested wire names decode",
    );
    assert(
      worker.exportsReconciliation?.created[0] === "Counter",
      "exports_reconciliation decodes",
    );
    assert(
      worker.exportsReconciliation.renamed[0]?.from === "OldCounter" &&
        worker.exportsReconciliation.transferPending[0]?.from ===
          "source-worker" &&
        worker.exportsReconciliation.info[0]?.referencingScripts?.[0] ===
          "consumer-worker" &&
        worker.exportsReconciliation.removableEntries[0] === "DeletedCounter",
      "nested reconciliation wire names decode",
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
