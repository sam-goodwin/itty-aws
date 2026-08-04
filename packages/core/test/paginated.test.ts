/**
 * `makePaginated` — both call styles carry `.pages` / `.items`.
 *
 * An operation is usable two ways:
 *
 *   1. `yield* op(input)`               — direct call, requirements intact
 *   2. `const fn = yield* op; fn(input)` — captures the context once, then
 *                                          calls with no requirements left
 *
 * Style 2 used to drop the streaming methods entirely (distilled #145): the
 * yielded value was a bare arrow built by `make`'s `asEffect`, so `.pages` /
 * `.items` were missing at runtime AND absent from the type. These tests pin
 * both halves, plus the element type `.items()` yields in either style
 * (distilled #404 — the explicit `Item` argument generated services pass).
 *
 * Run: bun test packages/core/test/paginated.test.ts
 */
import { expect, it } from "bun:test";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as S from "effect/Schema";
import * as Stream from "effect/Stream";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as API from "../src/api.ts";

// ---------------------------------------------------------------------------
// Type-level assertions
// ---------------------------------------------------------------------------

type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

/** Compile-time only: fails to typecheck unless the argument is `true`. */
const assertType = <_Assertion extends true>(): void => {};

// ---------------------------------------------------------------------------
// A paginated operation over a stubbed protocol + HTTP client
// ---------------------------------------------------------------------------

const Thing = S.Struct({ id: S.String });
type Thing = S.Schema.Type<typeof Thing>;

const ListThingsRequest = S.Struct({ nextToken: S.optional(S.String) });
type ListThingsRequest = S.Schema.Type<typeof ListThingsRequest>;

const ListThingsResponse = S.Struct({
  things: S.Array(Thing),
  nextToken: S.optional(S.String),
});
type ListThingsResponse = S.Schema.Type<typeof ListThingsResponse>;

type ListThingsError = HttpClientError.HttpClientError;

/** Two canned pages; the second omits the token, ending traversal. */
const PAGES: ReadonlyArray<ListThingsResponse> = [
  { things: [{ id: "a" }], nextToken: "t2" },
  { things: [{ id: "b" }] },
];

/** Inputs the operation was actually called with, in order. */
let requested: unknown[] = [];

const StubProtocol: Layer.Layer<API.Protocol> = Layer.succeed(
  API.Protocol,
  API.Protocol.of({
    encode: ({ input }) =>
      Effect.sync(() => {
        requested.push(input);
        return HttpClientRequest.get("https://stub.test/things");
      }),
    // The page index follows the request count — the stub never touches the
    // wire, so pagination is exercised purely through the trait.
    decode: () => Effect.sync(() => PAGES[requested.length - 1] ?? {}),
  }),
);

const StubHttpClient = Layer.succeed(
  HttpClient.HttpClient,
  HttpClient.make((request) =>
    Effect.succeed(HttpClientResponse.fromWeb(request, new Response("{}"))),
  ),
);

const stub = Layer.mergeAll(StubProtocol, StubHttpClient);

/**
 * Annotated the way codegen annotates a paginated op: an explicit `Item`
 * argument resolved from the trait's items path, applied over the
 * `as any as` cast the generated consts use.
 */
const listThings: API.PaginatedOperationMethod<
  ListThingsRequest,
  ListThingsResponse,
  ListThingsError,
  HttpClient.HttpClient,
  Thing
> = API.makePaginated(() => ({
  input: ListThingsRequest,
  output: ListThingsResponse,
  protocol: StubProtocol,
  pagination: {
    mode: "token",
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "things",
  } as const,
})) as any;

/** Same operation with the `Item` argument left to the structural default. */
const listResults: API.PaginatedOperationMethod<
  ListThingsRequest,
  { readonly result: ReadonlyArray<Thing> },
  ListThingsError,
  HttpClient.HttpClient
> = API.makePaginated(() => ({
  input: ListThingsRequest,
  output: S.Struct({ result: S.Array(Thing) }),
  protocol: StubProtocol,
  pagination: { mode: "single", items: "result" } as const,
})) as any;

const reset = () => {
  requested = [];
};

// ---------------------------------------------------------------------------
// Style 1 — direct call
// ---------------------------------------------------------------------------

it("direct call: .pages()/.items() stream with the operation's requirements", async () => {
  reset();

  const pages = listThings.pages({});
  const items = listThings.items({});
  assertType<
    Equals<
      typeof pages,
      Stream.Stream<ListThingsResponse, ListThingsError, HttpClient.HttpClient>
    >
  >();
  assertType<
    Equals<
      typeof items,
      Stream.Stream<Thing, ListThingsError, HttpClient.HttpClient>
    >
  >();

  const collected = await Effect.runPromise(
    Stream.runCollect(items).pipe(Effect.provide(stub)),
  );
  expect([...collected].map((t) => t.id)).toEqual(["a", "b"]);
  expect(requested).toHaveLength(2);
});

// ---------------------------------------------------------------------------
// Style 2 — `yield*` the operation, then call the captured function (#145)
// ---------------------------------------------------------------------------

it("yielded operation: .pages()/.items() survive the yield, requirement-free", async () => {
  reset();

  // Capture inside the provided scope; run the streams OUTSIDE it. If the
  // streams weren't bound to the captured context this wouldn't typecheck
  // (runPromise needs R = never) and would die at runtime.
  const captured = await Effect.runPromise(
    Effect.gen(function* () {
      return yield* listThings;
    }).pipe(Effect.provide(stub)),
  );

  expect(typeof captured).toBe("function");
  expect(typeof captured.pages).toBe("function");
  expect(typeof captured.items).toBe("function");

  const pages = captured.pages({});
  const items = captured.items({});
  assertType<
    Equals<typeof pages, Stream.Stream<ListThingsResponse, ListThingsError>>
  >();
  assertType<Equals<typeof items, Stream.Stream<Thing, ListThingsError>>>();

  const collectedPages = await Effect.runPromise(Stream.runCollect(pages));
  expect([...collectedPages].map((p) => p.things[0]!.id)).toEqual(["a", "b"]);

  reset();
  const collectedItems = await Effect.runPromise(Stream.runCollect(items));
  expect([...collectedItems].map((t) => t.id)).toEqual(["a", "b"]);

  // The plain call function still works, and still carries no requirements.
  reset();
  const first = await Effect.runPromise(captured({}));
  expect(first.things[0]!.id).toBe("a");
});

// ---------------------------------------------------------------------------
// The `Item` default (hand-written ops that pass no explicit element type)
// ---------------------------------------------------------------------------

it("structural Item default resolves in both call styles", async () => {
  reset();

  const direct = listResults.items({});
  assertType<
    Equals<
      typeof direct,
      Stream.Stream<Thing, ListThingsError, HttpClient.HttpClient>
    >
  >();

  const captured = await Effect.runPromise(
    Effect.gen(function* () {
      return yield* listResults;
    }).pipe(Effect.provide(stub)),
  );
  const yielded = captured.items({});
  assertType<Equals<typeof yielded, Stream.Stream<Thing, ListThingsError>>>();
});

// ---------------------------------------------------------------------------
// A paginated operation is still an ordinary operation
// ---------------------------------------------------------------------------

it("stays assignable to OperationMethod", () => {
  const asOperation: API.OperationMethod<
    ListThingsRequest,
    ListThingsResponse,
    ListThingsError,
    HttpClient.HttpClient
  > = listThings;
  expect(typeof asOperation).toBe("function");
});
