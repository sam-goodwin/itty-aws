#!/usr/bin/env bun
/**
 * expo-eas wire-sanity — offline wire checks for the EAS GraphQL SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and the EAS
 * Credentials service, then verifies:
 *   (a) assetMetadata (a readonly GraphQL query — every EAS op is
 *       `POST /graphql`, there are no GET ops) encodes
 *       POST {apiBaseUrl}/graphql with `Authorization: Bearer <token>` and a
 *       `{ query, operationName, variables }` JSON envelope, and decodes a
 *       canned `data.asset.metadata` payload (payload-root list response)
 *   (b) an HTTP 200 envelope carrying `errors[]` with
 *       `extensions.errorCode: "EXPERIENCE_NOT_FOUND"` raises the typed
 *       EasExperienceNotFound; an envelope-less HTTP 400 raises
 *       UnknownEasError
 *
 * Run: bun packages/expo-eas/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { Credentials } from "../src/credentials.ts";
import { EasExperienceNotFound, UnknownEasError } from "../src/errors.ts";
import * as Retry from "../src/retry.ts";
import { assetMetadata } from "../src/services/eas.ts";

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

const stubCredentials = Layer.succeed(
  Credentials,
  Effect.succeed({
    accessToken: Redacted.make("expo-test-token"),
    apiBaseUrl: "https://api.expo.dev",
  }),
);

const provide = <A, E, R>(effect: Effect.Effect<A, E, R>) =>
  effect.pipe(
    Effect.provideService(HttpClient.HttpClient, stubClient),
    Effect.provide(stubCredentials),
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

await Effect.runPromise(
  Effect.gen(function* () {
    // (a) — request line, auth header, GraphQL envelope, typed decode -------
    console.log("(a) assetMetadata encode + decode");
    script = [
      () =>
        json({
          data: {
            asset: {
              metadata: [
                { status: "EXISTS", storageKey: "sk-1" },
                { status: "DOES_NOT_EXIST", storageKey: "sk-2" },
              ],
            },
          },
        }),
    ];
    const metadata = yield* provide(
      assetMetadata({ storageKeys: ["sk-1", "sk-2"] }),
    );
    const req = captured.at(-1)!;
    assert(req.method === "POST", `method POST (got ${req.method})`);
    assert(
      req.url === "https://api.expo.dev/graphql",
      `url ${req.url} — apiBaseUrl + /graphql`,
    );
    assert(
      req.headers["authorization"] === "Bearer expo-test-token",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
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
      envelope.operationName === "assetMetadata",
      "envelope operationName=assetMetadata",
    );
    assert(
      envelope.query.startsWith(
        "query assetMetadata($storageKeys: [String!]!)",
      ),
      "envelope carries the baked GraphQL document",
    );
    assert(
      JSON.stringify(envelope.variables) ===
        JSON.stringify({ storageKeys: ["sk-1", "sk-2"] }),
      "input IS the variables object (verbatim names)",
    );
    assert(metadata.length === 2, "decoded 2 asset metadata items");
    assert(
      metadata[0]!.status === "EXISTS" && metadata[0]!.storageKey === "sk-1",
      "decoded payload-root list item (data.asset.metadata unwrapped)",
    );

    // (b) — typed errors ----------------------------------------------------
    console.log("(b) error envelope dispatch");
    // GraphQL business error on HTTP 200: errors[].extensions.errorCode is
    // matched against EAS_ERROR_CODE_MAP.
    script = [
      () =>
        json({
          data: null,
          errors: [
            {
              message: "Experience with id 'xyz' does not exist.",
              extensions: { errorCode: "EXPERIENCE_NOT_FOUND" },
            },
          ],
        }),
    ];
    const notFound = yield* provide(
      assetMetadata({ storageKeys: ["sk-1"] }),
    ).pipe(Effect.flip);
    assert(
      notFound instanceof EasExperienceNotFound,
      `200 + errors[EXPERIENCE_NOT_FOUND] → EasExperienceNotFound (${(notFound as { _tag?: string })._tag})`,
    );
    assert(
      (notFound as EasExperienceNotFound).message ===
        "Experience with id 'xyz' does not exist.",
      "message carried through",
    );

    // Envelope-less / unparseable error body → UnknownEasError.
    script = [() => new Response("upstream exploded", { status: 400 })];
    const unknownFailure = yield* provide(
      assetMetadata({ storageKeys: ["sk-1"] }),
    ).pipe(Effect.flip);
    assert(
      unknownFailure instanceof UnknownEasError,
      `envelope-less 400 → UnknownEasError (${(unknownFailure as { _tag?: string })._tag})`,
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
