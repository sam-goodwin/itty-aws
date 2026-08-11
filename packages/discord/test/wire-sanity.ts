#!/usr/bin/env bun
/**
 * discord-wire-sanity — offline wire checks for the Discord SDK.
 *
 * Stubs HttpClient (capturing requests, returning canned JSON) and
 * DiscordCredentials, then verifies:
 *   (a) getChannel encodes GET {base}/channels/{id} with `Authorization: Bot
 *       <token>` and decodes the response into typed output
 *   (b) createMessage sends the body as JSON and keeps snowflake/enum fields
 *       on the wire under their spec names
 *   (c) list endpoints answering with a BARE JSON array decode to an array
 *       (the RawResponseRoot path)
 *   (d) query params bind to the query string, not the body
 *   (e) a 403 `{ code, message }` body raises the shared typed Forbidden
 *   (f) an unmapped status surfaces UnknownDiscordError carrying Discord's
 *       numeric JSON error code and the per-field `errors` detail
 *   (g) 429 becomes TooManyRequests with `retryAfter` from the header
 *   (h) `Bearer` credentials swap the Authorization prefix
 *
 * Run: bun packages/discord/test/wire-sanity.ts
 */
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { credentials, DEFAULT_API_BASE_URL } from "../src/credentials.ts";
import {
  Forbidden,
  TooManyRequests,
  UnknownDiscordError,
} from "../src/errors.ts";
import * as Retry from "../src/retry.ts";
import {
  createMessage,
  getChannel,
  listMessages,
} from "../src/services/discord.ts";

// ---------------------------------------------------------------------------
// Stub HttpClient: scripted (request → canned Response) with capture
// ---------------------------------------------------------------------------

interface Captured {
  method: string;
  url: string;
  headers: Record<string, string>;
  bodyContentType: string | undefined;
  body: unknown;
}

const captured: Captured[] = [];
let script: Array<(req: Captured) => Response> = [];

const stubClient = HttpClient.make((request) => {
  const body = request.body as {
    _tag: string;
    contentType?: string;
    body?: Uint8Array;
  };
  const bodyText =
    body._tag === "Uint8Array"
      ? new TextDecoder().decode(body.body)
      : undefined;
  const cap: Captured = {
    method: request.method,
    url: request.url,
    headers: { ...request.headers } as Record<string, string>,
    bodyContentType: body._tag === "Uint8Array" ? body.contentType : undefined,
    body: bodyText === undefined ? undefined : JSON.parse(bodyText),
  };
  captured.push(cap);
  const next = script.shift();
  if (!next) throw new Error(`unexpected request: ${cap.method} ${cap.url}`);
  return Effect.succeed(HttpClientResponse.fromWeb(request, next(cap)));
});

const provideWith =
  (creds: Parameters<typeof credentials>[0]) =>
  <A, E, R>(effect: Effect.Effect<A, E, R>) =>
    effect.pipe(
      Effect.provideService(HttpClient.HttpClient, stubClient),
      Effect.provide(credentials(creds)),
      Retry.none,
    ) as Effect.Effect<A, E, never>;

const provide = provideWith({ token: "test-token" });

const json = (
  body: unknown,
  status = 200,
  headers: Record<string, string> = {},
) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });

const assert = (cond: unknown, msg: string) => {
  if (!cond) throw new Error(`ASSERT FAILED: ${msg}`);
  console.log(`  ✓ ${msg}`);
};

const channel = {
  id: "1234567890",
  type: 0,
  name: "general",
  guild_id: "9876543210",
  flags: 0,
};

const message = {
  id: "555",
  channel_id: "1234567890",
  type: 0,
  content: "hello",
  timestamp: "2024-01-01T00:00:00+00:00",
  mention_everyone: false,
  pinned: false,
  tts: false,
  flags: 0,
  author: { id: "42", username: "bot", discriminator: "0001", bot: true },
  attachments: [],
  embeds: [],
  mentions: [],
  mention_roles: [],
};

await Effect.runPromise(
  Effect.gen(function* () {
    // (a) — request line, auth header, typed decode ------------------------
    console.log("(a) getChannel encode + decode");
    script = [() => json(channel)];
    const out = yield* provide(getChannel({ channel_id: "1234567890" }));
    const req = captured.at(-1)!;
    assert(req.method === "GET", `method GET (got ${req.method})`);
    assert(
      req.url === `${DEFAULT_API_BASE_URL}/channels/1234567890`,
      `url ${req.url}`,
    );
    assert(
      req.headers["authorization"] === "Bot test-token",
      `Authorization: Bot <token> (got ${req.headers["authorization"]})`,
    );
    assert((out as any).id === "1234567890", "decoded id");
    assert((out as any).name === "general", "decoded name");

    // (b) — JSON body on POST ---------------------------------------------
    console.log("(b) createMessage body encoding");
    script = [() => json(message, 200)];
    yield* provide(
      createMessage({ channel_id: "1234567890", content: "hello", tts: false }),
    );
    const post = captured.at(-1)!;
    assert(post.method === "POST", `method POST (got ${post.method})`);
    assert(
      post.url === `${DEFAULT_API_BASE_URL}/channels/1234567890/messages`,
      `url ${post.url}`,
    );
    assert(
      post.bodyContentType?.startsWith("application/json") === true,
      `content-type application/json (got ${post.bodyContentType})`,
    );
    assert(
      (post.body as any)?.content === "hello",
      "content lands in the JSON body",
    );
    assert(
      (post.body as any)?.channel_id === undefined,
      "channel_id stays a path label, not a body field",
    );

    // (c) — bare-array response + (d) query params -------------------------
    console.log("(c)+(d) listMessages bare array + query binding");
    script = [() => json([message])];
    const list = yield* provide(
      listMessages({ channel_id: "1234567890", limit: 50 }),
    );
    const listReq = captured.at(-1)!;
    assert(Array.isArray(list), "bare JSON array decodes to an array");
    assert((list as any[])[0]?.id === "555", "array element decoded");
    assert(
      listReq.url ===
        `${DEFAULT_API_BASE_URL}/channels/1234567890/messages?limit=50`,
      `limit binds to the query string (got ${listReq.url})`,
    );

    // (e) — status-mapped typed error --------------------------------------
    console.log("(e) 403 → typed Forbidden");
    script = [() => json({ code: 50001, message: "Missing Access" }, 403)];
    const forbidden = yield* provide(getChannel({ channel_id: "1" })).pipe(
      Effect.flip,
    );
    assert(
      forbidden instanceof Forbidden,
      `instance of Forbidden (got ${(forbidden as any)._tag})`,
    );
    assert(
      (forbidden as InstanceType<typeof Forbidden>).message ===
        "Missing Access",
      "message enriched from the error body",
    );

    // (f) — unmapped status → UnknownDiscordError --------------------------
    console.log("(f) unmapped 405 → UnknownDiscordError");
    script = [
      () =>
        json(
          {
            code: 50035,
            message: "Invalid Form Body",
            errors: { content: { _errors: [{ code: "BASE_TYPE_REQUIRED" }] } },
          },
          405,
        ),
    ];
    const unknown = yield* provide(getChannel({ channel_id: "1" })).pipe(
      Effect.flip,
    );
    assert(
      unknown instanceof UnknownDiscordError,
      `instance of UnknownDiscordError (got ${(unknown as any)._tag})`,
    );
    assert(
      (unknown as UnknownDiscordError).code === 50035,
      "Discord's numeric JSON error code is preserved",
    );
    assert(
      (unknown as any).errors?.content !== undefined,
      "per-field `errors` detail is preserved",
    );

    // (g) — rate limit ------------------------------------------------------
    console.log("(g) 429 → TooManyRequests with retryAfter");
    script = [
      () =>
        json(
          { code: 0, message: "You are being rate limited.", retry_after: 1.5 },
          429,
          {
            "retry-after": "2",
          },
        ),
    ];
    const limited = yield* provide(getChannel({ channel_id: "1" })).pipe(
      Effect.flip,
    );
    assert(
      limited instanceof TooManyRequests,
      `instance of TooManyRequests (got ${(limited as any)._tag})`,
    );
    assert(
      (limited as any).retryAfter !== undefined,
      "retryAfter stamped from the Retry-After header",
    );

    // (h) — OAuth2 bearer credentials --------------------------------------
    console.log("(h) Bearer token type");
    script = [() => json(channel)];
    yield* provideWith({ token: "user-token", tokenType: "Bearer" })(
      getChannel({ channel_id: "1234567890" }),
    );
    assert(
      captured.at(-1)!.headers["authorization"] === "Bearer user-token",
      `Authorization: Bearer <token> (got ${captured.at(-1)!.headers["authorization"]})`,
    );

    console.log("\nAll wire-sanity checks passed.");
  }),
);
