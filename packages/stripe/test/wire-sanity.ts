#!/usr/bin/env bun
/**
 * stripe-wire-sanity — offline wire checks for the Stripe SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * StripeCredentials, then verifies:
 *   (a) GetChargesCharge encodes GET {base}/v1/charges/{id} with
 *       Authorization: Bearer and decodes a canned charge payload
 *   (b) GET list inputs flatten into Stripe bracket-notation query params
 *       (created[gte], expand[]) — no request body
 *   (c) POST bodies encode as application/x-www-form-urlencoded with
 *       deepObject bracket expansion (metadata[order_id]); per-call
 *       RequestOptions surface as Idempotency-Key
 *   (d) a 402 { error: { type: "card_error", … } } envelope raises the
 *       typed CardError; an invalid_request_error raises
 *       InvalidRequestError; an envelope-less body raises
 *       UnknownStripeError
 *
 * Run: bun packages/stripe/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { credentials } from "../src/credentials.ts";
import {
  CardError,
  InvalidRequestError,
  UnknownStripeError,
} from "../src/errors.ts";
import { withRequestOptions } from "../src/protocol.ts";
import * as Retry from "../src/retry.ts";
import {
  GetCharges,
  GetChargesCharge,
  PostCharges,
} from "../src/services/stripe.ts";

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

const provide = <A, E, R>(effect: Effect.Effect<A, E, R>) =>
  effect.pipe(
    Effect.provideService(HttpClient.HttpClient, stubClient),
    Effect.provide(credentials({ apiKey: "sk_test_abc123" })),
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

const cannedCharge = {
  id: "ch_3XyzAbc",
  object: "charge",
  amount: 2000,
  currency: "usd",
  status: "succeeded",
  captured: true,
  metadata: { order_id: "6735" },
};

await Effect.runPromise(
  Effect.gen(function* () {
    // (a) — request line, auth header, typed decode -----------------------
    console.log("(a) GetChargesCharge encode + decode");
    script = [() => json(cannedCharge)];
    const charge = yield* provide(GetChargesCharge({ charge: "ch_3XyzAbc" }));
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === "https://api.stripe.com/v1/charges/ch_3XyzAbc",
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === "Bearer sk_test_abc123",
      `Authorization: Bearer header (got ${req.headers["authorization"]})`,
    );
    assert(req.bodyText === undefined, "GET carries no body");
    assert(charge.id === "ch_3XyzAbc", "decoded charge.id");
    assert(charge.amount === 2000, "decoded charge.amount === 2000");
    assert(
      charge.metadata?.order_id === "6735",
      "decoded nested metadata.order_id",
    );

    // (b) — GET query bracket expansion ------------------------------------
    console.log("(b) GetCharges bracket-notation query");
    script = [
      () =>
        json({
          object: "list",
          data: [cannedCharge],
          has_more: false,
          url: "/v1/charges",
        }),
    ];
    const list = yield* provide(
      GetCharges({
        limit: 3,
        created: { gte: 1700000000 },
        expand: ["data.customer"],
      }),
    );
    const listReq = captured.at(-1)!;
    const listUrl = new URL(listReq.url);
    assert(
      listUrl.origin + listUrl.pathname === "https://api.stripe.com/v1/charges",
      `list url path (${listReq.url})`,
    );
    assert(
      listUrl.searchParams.get("limit") === "3",
      "query limit=3 flattened from body-bound member",
    );
    assert(
      listUrl.searchParams.get("created[gte]") === "1700000000",
      "nested object → created[gte]=… bracket notation",
    );
    assert(
      listUrl.searchParams.get("expand[]") === "data.customer",
      "array → expand[]=… bracket notation",
    );
    assert(list.data[0]!.id === "ch_3XyzAbc", "decoded list.data[0].id");

    // (c) — POST form-urlencoded deepObject body + request options ---------
    console.log("(c) PostCharges form-urlencoded body + Idempotency-Key");
    script = [() => json(cannedCharge)];
    yield* provide(
      PostCharges({
        amount: 2000,
        currency: "usd",
        metadata: { order_id: "6735" },
      }).pipe(withRequestOptions({ idempotencyKey: "ch-create-1" })),
    );
    const postReq = captured.at(-1)!;
    assert(postReq.method === "POST", `method POST (got ${postReq.method})`);
    assert(
      postReq.url === "https://api.stripe.com/v1/charges",
      `url ${postReq.url}`,
    );
    assert(
      postReq.bodyContentType === "application/x-www-form-urlencoded",
      `content-type form-urlencoded (got ${postReq.bodyContentType})`,
    );
    const form = new URLSearchParams(postReq.bodyText);
    assert(form.get("amount") === "2000", "body amount=2000");
    assert(form.get("currency") === "usd", "body currency=usd");
    assert(
      form.get("metadata[order_id]") === "6735",
      "deepObject expansion metadata[order_id]=6735",
    );
    assert(
      postReq.headers["idempotency-key"] === "ch-create-1",
      "Idempotency-Key from withRequestOptions",
    );

    // (d) — typed errors ---------------------------------------------------
    console.log("(d) error envelope dispatch");
    script = [
      () =>
        json(
          {
            error: {
              type: "card_error",
              code: "card_declined",
              decline_code: "insufficient_funds",
              message: "Your card has insufficient funds.",
              charge: "ch_3XyzAbc",
            },
          },
          402,
        ),
    ];
    const cardFailure = yield* provide(
      PostCharges({ amount: 2000, currency: "usd" }),
    ).pipe(Effect.flip);
    assert(
      cardFailure instanceof CardError,
      `402 card_error → CardError (${(cardFailure as any)._tag})`,
    );
    assert(
      (cardFailure as CardError).decline_code === "insufficient_funds",
      "decline_code carried through",
    );
    assert(
      (cardFailure as CardError).message ===
        "Your card has insufficient funds.",
      "message carried through",
    );

    script = [
      () =>
        json(
          {
            error: {
              type: "invalid_request_error",
              message: "No such charge: 'ch_nope'",
              param: "charge",
            },
          },
          404,
        ),
    ];
    const invalidFailure = yield* provide(
      GetChargesCharge({ charge: "ch_nope" }),
    ).pipe(Effect.flip);
    assert(
      invalidFailure instanceof InvalidRequestError,
      `invalid_request_error → InvalidRequestError (${(invalidFailure as any)._tag})`,
    );
    assert(
      (invalidFailure as InvalidRequestError).param === "charge",
      "param carried through",
    );

    // Envelope-less / unparseable error body → UnknownStripeError.
    script = [() => new Response("upstream exploded", { status: 400 })];
    const unknownFailure = yield* provide(
      GetChargesCharge({ charge: "ch_x" }),
    ).pipe(Effect.flip);
    assert(
      unknownFailure instanceof UnknownStripeError,
      `envelope-less 400 → UnknownStripeError (${(unknownFailure as any)._tag})`,
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
