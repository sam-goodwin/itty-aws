import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import type * as HttpClientError from "effect/http/HttpClientError";
import type * as HttpClientRequest from "effect/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import { pipeArguments } from "effect/Pipeable";
import * as Ref from "effect/Ref";
import * as S from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import * as Scope from "effect/Scope";
import type * as Stream from "effect/Stream";
import { SingleShotGen } from "effect/Utils";
import * as Pagination from "./pagination.ts";
import { makeDefault, type Policy as RetryPolicy } from "./retry.ts";

//#region Protocol

/**
 * The view of an operation's config that protocols receive on every
 * encode/decode call. The object is the same memoized config instance for
 * every call to a given operation, so protocols can key per-operation
 * preprocessing (handler construction, error maps) off its identity in a
 * WeakMap.
 */
export interface ProtocolOperationConfig {
  readonly input?: S.Top;
  readonly output?: S.Top;
  readonly errors?: ReadonlyArray<ApiErrorClass>;
  /**
   * The wire operation name (e.g. the Smithy operation shape name). RPC-style
   * protocols address operations by name (AWS JSON's `X-Amz-Target`, AWS
   * Query's `Action=`) and unwrap responses by it; REST protocols ignore it.
   */
  readonly operationName?: string;
  /**
   * The smithy `smithy.api#endpoint` hostPrefix (e.g. `sync-` for Step
   * Functions' StartSyncExecution). Protocols prepend it to the resolved
   * endpoint host, substituting `{memberName}` labels from the input.
   */
  readonly endpointHostPrefix?: string;
  readonly pagination?: Pagination.PaginatedTrait;
}

/**
 * The Protocol service knows how to turn a value into an HTTP request using
 * only the input schema's trait annotations, and how to turn a response back
 * into an output value using the output schema's trait annotations.
 *
 * Swap implementations by providing a different `Layer<Protocol>`.
 */
export class Protocol extends Context.Service<
  Protocol,
  {
    readonly encode: (args: {
      readonly input: unknown;
      readonly inputAst: AST.AST;
      /** The operation's config (memoized per operation -- see {@link ProtocolOperationConfig}). */
      readonly config: ProtocolOperationConfig;
    }) => Effect.Effect<HttpClientRequest.HttpClientRequest>;
    readonly decode: (args: {
      readonly response: HttpClientResponse.HttpClientResponse;
      readonly outputAst: AST.AST;
      /**
       * The operation's declared error classes (from `OperationConfig.errors`).
       * Protocols use these to surface wire failures as the operation's typed
       * errors -- e.g. by consulting matcher metadata stamped on the class.
       */
      readonly errors: ReadonlyArray<ApiErrorClass>;
      /** The operation's config (memoized per operation -- see {@link ProtocolOperationConfig}). */
      readonly config: ProtocolOperationConfig;
    }) => Effect.Effect<unknown>;
  }
>()("Protocol") {}

//#endregion

//#region Make

export type ApiErrorClass = {
  new (...args: any[]): {
    readonly _tag: string;
    readonly message: string;
  };
};

/**
 * The shape of a generated SDK operation -- usable two ways (mirrors the
 * distilled repo's OperationMethod):
 *
 * 1. Direct call: `yield* operation(input)` -- an Effect with requirements.
 * 2. Yield first: `const fn = yield* operation` -- captures the current
 *    context and returns a requirement-free call function.
 *
 * Generated service files annotate every exported operation with this type
 * explicitly (against their hand-emitted interfaces), so the compiler never
 * has to infer it back out of the schema generics.
 */
export type OperationMethod<I, O, E, R> = Effect.Effect<
  (input: I) => Effect.Effect<O, E, never>,
  never,
  R
> &
  ((input: I) => Effect.Effect<O, E, R>);

// NOTE: request/response ASTs are handed to the protocol RAW (Suspend nodes
// included). Pre-resolving Suspends here would drop annotations that sit on
// intermediate nodes -- e.g. a bare-payload response whose payload type is
// itself a suspended schema carries its EnvelopePayloadRoot marker on the
// inner Suspend, and unwrapping it silently degrades decode to the struct
// path. The protocol helpers (core/protocol-http getAnn/getProps) descend
// Suspends themselves, and `Suspend.thunk` memoizes, so raw ASTs cost
// nothing extra.

/**
 * Protocol layers are built once per process and shared by every operation
 * call (keyed by layer value identity -- generated operations all reference the
 * same module-level layer const). The build runs against a process-lifetime
 * scope, and concurrent first calls are deduplicated through a private
 * MemoMap.
 *
 * Contract for protocol implementations: the layer build must not capture
 * per-call context. Anything call-dependent -- credentials, per-request
 * options -- must be resolved inside `encode`/`decode`, which execute on the
 * calling fiber and therefore see the caller's services on every request.
 */
const protocolMemoMap = Layer.makeMemoMapUnsafe();
const protocolScope = Scope.makeUnsafe();
const protocolContexts = new WeakMap<Layer.Layer<Protocol, any, any>, Context.Context<Protocol>>();

const protocolContext = <PE, PR>(
  layer: Layer.Layer<Protocol, PE, PR>,
): Effect.Effect<Context.Context<Protocol>, PE, PR> => {
  const cached = protocolContexts.get(layer);
  if (cached) return Effect.succeed(cached);
  return Effect.map(Layer.buildWithMemoMap(layer, protocolMemoMap, protocolScope), (ctx) => {
    protocolContexts.set(layer, ctx);
    return ctx;
  });
};

export interface OperationConfig<
  I extends S.Top,
  O extends S.Top,
  PE,
  PR,
  E extends readonly ApiErrorClass[] = readonly ApiErrorClass[],
> {
  input?: I;
  output?: O;
  errors?: E;
  /**
   * The protocol layer that knows how to encode/decode this operation's wire
   * format. Built once per process and shared across all operations that
   * reference the same layer value -- it must resolve call-dependent services
   * (credentials etc.) inside encode/decode, not at build time.
   */
  protocol: Layer.Layer<Protocol, PE, PR>;
  /**
   * SDK-specific retry service tag (see `core/retry`). When provided and the
   * caller's context carries a policy under this tag, every call is retried
   * per that policy (e.g. `Layer.succeed(Cloudflare.Retry.Retry, factory)`).
   */
  retry?: Context.Key<any, RetryPolicy>;
  /**
   * The wire operation name for RPC-style protocols (see
   * {@link ProtocolOperationConfig.operationName}).
   */
  operationName?: string;
  /**
   * Host prefix from the smithy endpoint trait (see
   * {@link ProtocolOperationConfig.endpointHostPrefix}).
   */
  endpointHostPrefix?: string;
}

/**
 * Wrap one operation call with the caller-provided retry policy, if the
 * operation declares a retry tag and the context carries a policy for it.
 */
const applyRetry = (
  base: Effect.Effect<any, any, any>,
  retryKey: Context.Key<any, RetryPolicy> | undefined,
): Effect.Effect<any, any, any> =>
  retryKey === undefined
    ? base
    : // Run once with no retry machinery; build it only after a failure the
      // policy retries. Most calls succeed first time, and a Ref + schedule
      // per call is a large share of a mocked call's cost.
      Effect.catch(base, (error) =>
        Effect.flatMap(Effect.serviceOption(retryKey), (opt) => {
          // No policy in context -> makeDefault (transient/throttling/server
          // errors, capped exponential backoff + jitter, honors server
          // retryAfter hints). Mirrors the distilled client.
          const policy = Option.isSome(opt) ? opt.value : makeDefault;
          return Effect.flatMap(Ref.make<unknown>(error), (lastError) => {
            const opts = typeof policy === "function" ? policy(lastError) : policy;
            if (!opts.while || !opts.while(error)) return Effect.fail(error);
            // The first "attempt" replays the failure we already have, so the
            // schedule's first delay comes before the next request, exactly
            // as if the whole call had run under Effect.retry.
            let replay = true;
            const attempt = Effect.suspend(() => {
              if (replay) {
                replay = false;
                return Effect.fail(error);
              }
              return Effect.tapError(base, (e) => Ref.set(lastError, e));
            });
            return Effect.retry(attempt, {
              while: (e: unknown) => opts.while!(e),
              ...(opts.schedule ? { schedule: opts.schedule as any } : {}),
            });
          });
        }),
      );

/**
 * Per-operation state. Kept to one small object per exported operation:
 * importing a service module creates every operation in it, so anything
 * allocated here is paid hundreds of times per import (EC2 has 807
 * operations) whether or not the operation is ever called.
 */
interface OperationState {
  readonly configFn: () => OperationConfig<any, any, any, any, any>;
  prepared?: Prepared;
  /** Paginated operations only. */
  readonly strategy?: Pagination.PaginationStrategy;
}

interface Prepared {
  readonly cfg: OperationConfig<any, any, any, any, any>;
  readonly inputAst: AST.AST;
  readonly outputAst: AST.AST;
}

const stateKey = Symbol.for("@distilled.cloud/core/api/OperationState");

// Lazily resolve the operation config + schema ASTs on first call, not at
// module-load time. Generated SDKs wrap each request/response schema in
// `Schema.suspend(() => ...)`; forcing them here (rather than when the
// `export const` is evaluated) keeps importing a service module cheap and
// only pays the schema-construction cost for operations that are actually
// called. Memoized so subsequent calls are free.
const prepare = (state: OperationState): Prepared => {
  if (state.prepared) return state.prepared;
  const cfg = state.configFn();
  return (state.prepared = { cfg, inputAst: cfg.input!.ast, outputAst: cfg.output!.ast });
};

const stateOf = (op: unknown): OperationState => (op as Record<symbol, OperationState>)[stateKey]!;

const callOperation = (state: OperationState, input: unknown): Effect.Effect<any, any, any> =>
  Effect.suspend(() => {
    const { cfg, inputAst, outputAst } = prepare(state);
    // A plain flatMap chain: no generator, and the protocol is read from its
    // cached context instead of being provided around the call.
    const call = Effect.flatMap(protocolContext(cfg.protocol), (protocolCtx) => {
      const protocol = Context.get(protocolCtx, Protocol);
      return Effect.flatMap(HttpClient.HttpClient, (client) =>
        Effect.flatMap(protocol.encode({ input, inputAst, config: cfg }), (request) =>
          Effect.flatMap(client.execute(request), (response) =>
            protocol.decode({ response, outputAst, errors: cfg.errors ?? [], config: cfg }),
          ),
        ),
      );
    });
    return applyRetry(call, cfg.retry);
  });

/**
 * `const fn = yield* operation`: a requirement-free call function over the
 * current context. The captured context is a FALLBACK, not a snapshot:
 * entries present on the calling fiber at call time win, so per-call
 * overrides -- e.g. providing `Endpoint` with a discovered data-plane address
 * around one invocation -- take effect instead of being shadowed by the
 * context captured at yield time.
 */
const bindContext = (op: (input: unknown) => Effect.Effect<any, any, any>) =>
  Effect.map(
    Effect.context(),
    (context) => (input: unknown) =>
      // `Context` is contravariant, so `Context<never>` is not assignable
      // to the `Context<any>` updateContext expects -- the widening cast is
      // sound (the merge only ever adds entries).
      Effect.updateContext(op(input), (current): Context.Context<any> =>
        Context.merge(context, current),
      ),
  );

/**
 * Shared by every operation function (its prototype; it inherits from
 * `Function.prototype`, so operations stay ordinary callables). Makes the
 * operation yieldable -- `yield* operation` returns a requirement-free call
 * function, mirroring the distilled repo's OperationMethod -- and carries the
 * debug/introspection surface (`op.input` / `.output` / `.errors` /
 * `.operationName` / `.pagination`) as lazy getters, so importing a service
 * module doesn't force its suspended schemas.
 */
const OperationProto: object = Object.setPrototypeOf(
  {
    [Symbol.iterator](this: any) {
      return new SingleShotGen(this.asEffect());
    },
    pipe(this: any) {
      return pipeArguments(this.asEffect(), arguments);
    },
    asEffect(this: any) {
      return bindContext(this);
    },
    get input() {
      return prepare(stateOf(this)).cfg.input;
    },
    get output() {
      return prepare(stateOf(this)).cfg.output;
    },
    get errors() {
      return prepare(stateOf(this)).cfg.errors ?? [];
    },
    get operationName() {
      return prepare(stateOf(this)).cfg.operationName;
    },
    get pagination() {
      return (prepare(stateOf(this)).cfg as PaginatedOperationConfig<any, any, any, any>)
        .pagination;
    },
  },
  Function.prototype,
);

const makeOperation = (state: OperationState, proto: object): any => {
  const fn = (input: unknown) => callOperation(state, input);
  Object.defineProperty(fn, stateKey, { value: state });
  return Object.setPrototypeOf(fn, proto);
};

export function make<
  I extends S.Top,
  O extends S.Top,
  PE,
  PR,
  const E extends readonly ApiErrorClass[] = readonly [],
>(
  configFn: () => OperationConfig<I, O, PE, PR, E>,
): OperationMethod<
  S.Schema.Type<I>,
  S.Schema.Type<O>,
  InstanceType<E[number]> | PE | HttpClientError.HttpClientError,
  PR | HttpClient.HttpClient
> {
  return makeOperation({ configFn }, OperationProto);
}

//#endregion

//#region MakePaginated

/**
 * STRUCTURAL fallback for the element type `.items()` yields: the array
 * element of the page response itself, or of its `result` member.
 *
 * It can only see shapes it was taught, so any other envelope
 * (`{ branches: [...] }`, `{ data: [...] }`, ...) lands on `unknown` -- which is
 * why generators pass the item type EXPLICITLY as
 * {@link PaginatedOperationMethod}'s `Item` argument, resolved from the
 * pagination trait's `items` path against the response shape. This default
 * only applies to hand-written operations.
 */
export type PaginatedItem<A> =
  A extends ReadonlyArray<infer Item>
    ? Item
    : A extends { result: ReadonlyArray<infer Item> }
      ? Item
      : A extends { result?: ReadonlyArray<infer Item> | null | undefined }
        ? Item
        : unknown;

/**
 * The callable half of a paginated operation: the operation call itself, plus
 * `.pages(input)` streaming every page response and `.items(input)` streaming
 * the individual items across pages.
 *
 * Used twice in {@link PaginatedOperationMethod} -- once with the operation's
 * requirements (`R`) for the direct-call style, once with `R = never` for the
 * value `yield* operation` hands back, which has the caller's context baked in.
 */
export interface PaginatedCall<I, O, E, R, Item> {
  (input: I): Effect.Effect<O, E, R>;
  readonly pages: (input: I) => Stream.Stream<O, E, R>;
  readonly items: (input: I) => Stream.Stream<Item, E, R>;
}

/**
 * A paginated operation: usable both ways an {@link OperationMethod} is, with
 * `.pages` / `.items` on BOTH -- the operation object for
 * `yield* op.items(input)`, and the requirement-free call function for
 * `const op = yield* operation; yield* op.items(input)` (distilled #145).
 */
export type PaginatedOperationMethod<I, O, E, R, Item = PaginatedItem<O>> = Effect.Effect<
  PaginatedCall<I, O, E, never, Item>,
  never,
  R
> &
  PaginatedCall<I, O, E, R, Item>;

export interface PaginatedOperationConfig<
  I extends S.Top,
  O extends S.Top,
  PE,
  PR,
  E extends readonly ApiErrorClass[] = readonly ApiErrorClass[],
> extends OperationConfig<I, O, PE, PR, E> {
  /** How to advance between pages (mirrors the `smithy.api#paginated` trait). */
  pagination: Pagination.PaginatedTrait;
}

/** `.pages` / `.items` over any call function (the operation itself or a context-bound one). */
const streamsOf = (state: OperationState, call: (input: any) => Effect.Effect<any, any, any>) => {
  const pag = () => (prepare(state).cfg as PaginatedOperationConfig<any, any, any, any>).pagination;
  const paginate = state.strategy ?? Pagination.paginateWithDefaults;
  const pages = (input: Record<string, unknown>) => paginate(call, input, pag());
  const items = (input: Record<string, unknown>) => {
    const p = pag();
    return p.items ? Pagination.extractItems(pages(input), p.items) : pages(input);
  };
  return { pages, items };
};

/**
 * `.pages` / `.items` are getters that build the stream functions on first
 * access and cache them on the operation, so they cost nothing until used
 * and stay detachable (`const { items } = op` works).
 */
const streamGetter = (name: "pages" | "items") =>
  function (this: any) {
    const fns = streamsOf(stateOf(this), this);
    Object.defineProperties(this, {
      pages: { value: fns.pages, configurable: true },
      items: { value: fns.items, configurable: true },
    });
    return fns[name];
  };

const PaginatedOperationProto: object = Object.create(OperationProto, {
  pages: { get: streamGetter("pages"), configurable: true },
  items: { get: streamGetter("items"), configurable: true },
  // `yield* operation` returns a fresh context-bound function; give it
  // `.pages` / `.items` too (distilled #145). Same fallback (not snapshot)
  // semantics as the plain operation.
  asEffect: {
    value(this: any) {
      const state = stateOf(this);
      return Effect.map(bindContext(this), (call) => Object.assign(call, streamsOf(state, call)));
    },
    configurable: true,
    writable: true,
  },
});

/**
 * Like {@link make}, plus `.pages()` / `.items()` streaming built on the
 * operation's pagination trait. The SDK can pass a provider-specific
 * {@link Pagination.PaginationStrategy} (e.g. Cloudflare stops page-mode
 * traversal on the first empty page); the default dispatches on
 * `pagination.mode`.
 */
export function makePaginated<
  I extends S.Top,
  O extends S.Top,
  PE,
  PR,
  const E extends readonly ApiErrorClass[] = readonly [],
>(
  configFn: () => PaginatedOperationConfig<I, O, PE, PR, E>,
  strategy?: Pagination.PaginationStrategy,
): PaginatedOperationMethod<
  S.Schema.Type<I>,
  S.Schema.Type<O>,
  InstanceType<E[number]> | PE | HttpClientError.HttpClientError,
  PR | HttpClient.HttpClient
> {
  return makeOperation(strategy ? { configFn, strategy } : { configFn }, PaginatedOperationProto);
}

//#endregion
