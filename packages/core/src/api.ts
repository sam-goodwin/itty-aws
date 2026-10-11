import * as Context from "effect/Context";
import type * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
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
import { isThrottling } from "./category.ts";
import * as Pagination from "./pagination.ts";
import {
  type Backoff,
  defaultOptions,
  type Options as RetryOptions,
  type Policy as RetryPolicy,
  resolveServerRetryHintCapMs,
  serverHintMillis,
} from "./retry.ts";

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
export class Protocol
  extends /*@__PURE__*/ Context.Service<
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
      /**
       * Optional whole-call implementation. When present, `API.make` runs a
       * call as `call(operation, input)` instead of encode -> HttpClient ->
       * decode, so a protocol can read the context once, build the request
       * synchronously and decode the response without intermediate effects.
       * It must read the `HttpClient` from the calling fiber's context and
       * produce the same request, result and errors as encode/decode.
       */
      readonly call?: (operation: PreparedOperation, input: unknown) => Effect.Effect<unknown>;
    }
  >()("Protocol") {}

/** The service a protocol layer provides. */
export type ProtocolShape = (typeof Protocol)["Service"];

/**
 * One operation as a protocol's {@link Protocol.call} sees it. Built once per
 * operation on its first call; the same object is passed on every call.
 */
export interface PreparedOperation {
  readonly config: ProtocolOperationConfig;
  readonly inputAst: AST.AST;
  readonly outputAst: AST.AST;
  readonly errors: ReadonlyArray<ApiErrorClass>;
  /** Per-operation slot owned by the operation's protocol (compiled codecs). */
  compiled?: unknown;
}

//#endregion

//#region Make

/**
 * Run `f` on the value of `effect` -- directly when `effect` is already a
 * successful `Exit` (e.g. a `Credentials` service holding
 * `Effect.succeed(config)`), so a resolved value costs no fiber step.
 */
export const withValue = <A, B>(
  effect: Effect.Effect<A, any, any>,
  f: (a: A) => Effect.Effect<B, any, any>,
): Effect.Effect<B, any, any> =>
  Exit.isExit(effect)
    ? Exit.isSuccess(effect)
      ? f(effect.value as A)
      : (effect as unknown as Effect.Effect<never, any>)
    : Effect.flatMap(effect, f);

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
  ((input: I) => Effect.Effect<O, E, R>) &
  OperationSchemas<I, O>;

/**
 * An operation's request and response schemas, built on first access.
 * Generated modules export operations, errors and types; the schemas
 * themselves are module-private, so this is how to reach them as values.
 */
export interface OperationSchemas<I, O> {
  readonly input: S.Codec<I, any>;
  readonly output: S.Codec<O, any>;
}

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
const protocolMemoMap = /*@__PURE__*/ Layer.makeMemoMapUnsafe();
const protocolScope = /*@__PURE__*/ Scope.makeUnsafe();
const protocolContexts = /*@__PURE__*/ new WeakMap<
  Layer.Layer<Protocol, any, any>,
  Context.Context<Protocol>
>();

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
/** Delay before retry `attempt` (0-based) under `b`, in milliseconds. */
const backoffDelay = (b: Backoff, attempt: number, error: unknown): Effect.Effect<number> => {
  const base = Math.min(b.baseMs * b.factor ** attempt, b.capMs);
  const jitter = () => Math.random() * (b.jitterMs ?? 0);
  if (b.serverHint && (error as { retryAfter?: unknown } | null)?.retryAfter !== undefined) {
    return Effect.map(resolveServerRetryHintCapMs(), (capMs) => {
      const hint = serverHintMillis(error, capMs);
      return (hint ?? base) + jitter();
    });
  }
  const floored =
    b.minThrottleMs !== undefined && base < b.minThrottleMs && isThrottling(error)
      ? b.minThrottleMs
      : base;
  return Effect.succeed(floored + jitter());
};

const NO_BACKOFF: Backoff = { baseMs: 0, factor: 1, capMs: 0 };

/**
 * Wrap one operation call with the caller-provided retry policy, if the
 * operation declares a retry tag. The call runs once with no retry
 * machinery; the policy is read only after a failure. Built-in policies are
 * {@link Backoff} data run by a small loop; a caller-supplied `schedule`
 * runs under `Effect.retry`, with the first failure replayed as attempt one
 * so delays and counts match running the whole call under it.
 */
const applyRetry = (
  base: Effect.Effect<any, any, any>,
  retryKey: Context.Key<any, RetryPolicy> | undefined,
): Effect.Effect<any, any, any> =>
  retryKey === undefined
    ? base
    : Effect.catch(base, (error) =>
        Effect.flatMap(Effect.serviceOption(retryKey), (opt) => {
          if (Option.isNone(opt)) return retryWith(base, defaultOptions, error);
          const policy = opt.value;
          if (typeof policy !== "function") return retryWith(base, policy, error);
          return Effect.flatMap(Ref.make<unknown>(error), (lastError) =>
            retryWith(
              Effect.tapError(base, (e) => Ref.set(lastError, e)),
              policy(lastError),
              error,
            ),
          );
        }),
      );

const retryWith = (
  base: Effect.Effect<any, any, any>,
  opts: RetryOptions,
  error: unknown,
): Effect.Effect<any, any, any> => {
  const keepGoing = opts.while;
  if (!keepGoing || !keepGoing(error)) return Effect.fail(error);
  if (opts.schedule) {
    // Drive the caller's schedule through its own `step`, as Effect.retry
    // does, without importing the Schedule module into every bundle: the
    // first failure is the schedule's first input; a step that fails means
    // the schedule is done.
    const schedule = opts.schedule as unknown as {
      readonly step: Effect.Effect<
        (now: number, input: unknown) => Effect.Effect<readonly [unknown, Duration.Input], unknown>
      >;
    };
    return Effect.flatMap(schedule.step, (next) => {
      const loop = (e: unknown): Effect.Effect<any, any, any> =>
        !keepGoing(e)
          ? Effect.fail(e)
          : Effect.clockWith((clock) =>
              Effect.matchEffect(next(clock.currentTimeMillisUnsafe(), e), {
                onFailure: () => Effect.fail(e),
                onSuccess: ([, delay]) =>
                  Effect.flatMap(Effect.sleep(delay), () => Effect.catch(base, loop)),
              }),
            );
      return loop(error);
    });
  }
  const b = opts.backoff ?? NO_BACKOFF;
  const step = (e: unknown, n: number): Effect.Effect<any, any, any> =>
    !keepGoing(e) || (b.maxRetries !== undefined && n >= b.maxRetries)
      ? Effect.fail(e)
      : Effect.flatMap(backoffDelay(b, n, e), (ms) =>
          Effect.flatMap(Effect.sleep(ms), () => Effect.catch(base, (next) => step(next, n + 1))),
        );
  return step(error, 0);
};

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

interface Prepared extends PreparedOperation {
  readonly cfg: OperationConfig<any, any, any, any, any>;
  /** The built protocol service, once its layer has been built. */
  service?: ProtocolShape;
}

const stateKey = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/api/OperationState");

// Lazily resolve the operation config + schema ASTs on first call, not at
// module-load time. Generated SDKs wrap each request/response schema in
// `Schema.suspend(() => ...)`; forcing them here (rather than when the
// `export const` is evaluated) keeps importing a service module cheap and
// only pays the schema-construction cost for operations that are actually
// called. Memoized so subsequent calls are free.
const prepare = (state: OperationState): Prepared => {
  if (state.prepared) return state.prepared;
  const cfg = state.configFn();
  return (state.prepared = {
    cfg,
    config: cfg,
    inputAst: cfg.input!.ast,
    outputAst: cfg.output!.ast,
    errors: cfg.errors ?? [],
    compiled: undefined,
    service: undefined,
  });
};

const stateOf = (op: unknown): OperationState => (op as Record<symbol, OperationState>)[stateKey]!;

const defineState = (op: unknown, state: OperationState): OperationState => {
  Object.defineProperty(op, stateKey, { value: state });
  return state;
};

const runWith = (
  p: Prepared,
  protocol: ProtocolShape,
  input: unknown,
): Effect.Effect<any, any, any> => {
  if (protocol.call !== undefined) return protocol.call(p, input);
  const { cfg, inputAst, outputAst, errors } = p;
  return Effect.flatMap(HttpClient.HttpClient, (client) =>
    Effect.flatMap(protocol.encode({ input, inputAst, config: cfg }), (request) =>
      Effect.flatMap(client.execute(request), (response) =>
        protocol.decode({ response, outputAst, errors, config: cfg }),
      ),
    ),
  );
};

const callOperation = (state: OperationState, input: unknown): Effect.Effect<any, any, any> => {
  // Warm path: the operation is prepared and its protocol built, so the call
  // is whatever the protocol returns, with no wrapper effects around it.
  const p = state.prepared;
  if (p?.service !== undefined) return applyRetry(runWith(p, p.service, input), p.cfg.retry);
  return Effect.suspend(() => {
    const prepared = prepare(state);
    const call = Effect.flatMap(protocolContext(prepared.cfg.protocol), (protocolCtx) => {
      const service = (prepared.service = Context.get(protocolCtx, Protocol));
      return runWith(prepared, service, input);
    });
    return applyRetry(call, prepared.cfg.retry);
  });
};

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
const OperationProto: object = /*@__PURE__*/ Object.setPrototypeOf(
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
  defineState(fn, state);
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
  PaginatedCall<I, O, E, R, Item> &
  OperationSchemas<I, O>;

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
  // Data operations carry their strategy in the config.
  const paginate =
    state.strategy ??
    (prepare(state).cfg as { strategy?: Pagination.PaginationStrategy }).strategy ??
    Pagination.paginateWithDefaults;
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

const PaginatedOperationProto: object = /*@__PURE__*/ Object.create(OperationProto, {
  pages: { get: /*@__PURE__*/ streamGetter("pages"), configurable: true },
  items: { get: /*@__PURE__*/ streamGetter("items"), configurable: true },
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

//#region Data operations

/**
 * Generated operations described by data instead of code.
 *
 * A service module holds each operation as one arrow that is both the
 * callable operation and the holder of its description:
 *
 *   export const getFile = API.op((i) => i === API.D ? ['{input:#1,...};__more', [__0, __4, ...]] : API.call(getFile, i));
 *
 * Called with {@link D}, it returns `[data, refs]`: `;`-separated entries
 * in a small expression language (below) and the values they name. `refs[0]`
 * is the schema-lite `at` (lazy schema wrapper). Schemas reached by more
 * than one operation live in shared holders, `function __d3() { return
 * [data, refs]; }`, named in `refs` so a bundler keeps only the holders an
 * operation reaches. Entry 0 of an operation is its config; the rest are
 * schemas and thunk bodies. Evaluating an entry calls the same
 * constructors the code form called, in the same order, so the result is
 * the same schema.
 *
 * Importing a module allocates one function per operation and one per
 * holder; the data stays text in the module source until first use. A
 * holder's refs may also be values built from module code on first use
 * (service traits, endpoint rules), which its value entries name.
 *
 * Grammar (`;` never appears outside an entry separator; strings escape it):
 *
 *   $N        refs[N]
 *   #N  #R:N  schema entry N of this holder / of the holder refs[R] (lazy, memoized)
 *   ~N  ~R:N  value entry N of this holder / of refs[R] (a constant, evaluated once)
 *   >N        thunk `() => entry N`
 *   "..." -1.5 true false null   JSON literal   u  undefined
 *   {k:e,"k":e}  object   [e,e]  array
 *   e(a,b)    call   e.name  member   e.name(a,b)  method call   e@"X"  e.annotate({ identifier: "X" })
 */
export const D: unique symbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/api/D") as any;

type DataFn = (i?: unknown) => any;

interface Source {
  readonly fn: DataFn;
  e?: string[];
  r?: ReadonlyArray<any>;
  b?: (j: number) => unknown;
  readonly c: unknown[];
  /** Data error classes: the built base class. */
  k?: Function;
}

const sources = /*@__PURE__*/ new WeakMap<DataFn, Source>();

const sourceOf = (fn: DataFn): Source => {
  let src = sources.get(fn);
  if (!src) sources.set(fn, (src = { fn, c: [] }));
  if (!src.e) {
    const [s, r] = fn(D);
    src.e = s.split(";");
    src.r = r;
  }
  return src;
};

/** Schema `j` of a holder, wrapped by `at` (lazy until first use). */
const schemaOf = (src: Source, j: number): unknown =>
  (src.c[j] ??= src.r![0]((src.b ??= (k: number) => evalEntry(src, k)), j));

/** A schema of a holder, for module-level code (error classes) that names one at import. */
export const schema = (fn: DataFn, j: number): any => schemaOf(sourceOf(fn), j);

const TOKEN = /"(?:[^"\\]|\\.)*"|[\w$.+-]*/y;
const NAME = /[\w$]*/y;

const evalEntry = (src: Source, j: number): any => {
  const s = src.e![j]!;
  const r = src.r!;
  let p = 0;
  const tok = (re = NAME): string => {
    re.lastIndex = p;
    const t = re.exec(s)![0];
    p += t.length;
    return t;
  };
  const list = (close: string): any[] => {
    const a: any[] = [];
    if (s[p] === close) p++;
    else
      do a.push(expr());
      while (s[p++] !== close);
    return a;
  };
  const expr = (): any => {
    let v: any;
    const c = s[p++]!;
    if (c === "{") {
      v = {};
      if (s[p] === "}") p++;
      else
        do {
          const k = tok(TOKEN);
          p++;
          v[k[0] === '"' ? JSON.parse(k) : k] = expr();
        } while (s[p++] !== "}");
    } else if (c === "[") v = list("]");
    else if ("$#~>".includes(c)) {
      let h = src;
      let k = +tok();
      if (s[p] === ":") {
        p++;
        h = sourceOf(r[k]);
        k = +tok();
      }
      // A value entry is evaluated once, unwrapped.
      v =
        c === "$"
          ? r[k]
          : c === ">"
            ? () => evalEntry(src, k)
            : c === "#"
              ? schemaOf(h, k)
              : (h.c[k] ??= evalEntry(h, k));
    } else {
      p--;
      const t = tok(TOKEN);
      v = t === "u" ? undefined : JSON.parse(t);
    }
    for (;;) {
      const d = s[p++];
      if (d === "(") v = v(...list(")"));
      else if (d === "@") v = v.annotate({ identifier: JSON.parse(tok(TOKEN)) });
      else if (d === ".") {
        const name = tok();
        v = s[p] === "(" ? (p++, v[name](...list(")"))) : v[name];
      } else return (p--, v);
    }
  };
  return expr();
};

// A data operation gets its state on first use, from this inherited getter.
const dataState = {
  get(this: DataFn): OperationState {
    return defineState(this, { configFn: () => evalEntry(sourceOf(this), 0) });
  },
  configurable: true,
};
let dataProto: object | undefined;
let dataPaginatedProto: object | undefined;

/**
 * The data of an operation whose name recurs in its strings: `%` in them
 * stands for `stem` (a literal `%` is escaped).
 */
export const named = (stem: string, data: string, refs: unknown): [string, unknown] => [
  data.replaceAll("%", stem),
  refs,
];

/** An operation described by data (see the region header). */
export const op = (fn: DataFn): any =>
  Object.setPrototypeOf(
    fn,
    (dataProto ??= Object.create(OperationProto, { [stateKey]: dataState })),
  );

/** A paginated operation described by data; its config may name a `strategy`. */
export const opPaginated = (fn: DataFn): any =>
  Object.setPrototypeOf(
    fn,
    (dataPaginatedProto ??= Object.create(PaginatedOperationProto, { [stateKey]: dataState })),
  );

/** The call path of a data operation. */
export const call = (op: unknown, input: unknown): Effect.Effect<any, any, any> =>
  callOperation(stateOf(op), input);

/**
 * Generated error classes described by data:
 *
 *   export const Oops = API.error(function Oops(i) {
 *     return API.newError(i, new.target, ['$1()("Oops",{...})', [...]]);
 *   });
 *
 * The function is the class callers see: `new Oops(props)` constructs, a
 * plain call returns the data. Entry 0 of the data is the expression the
 * class extended (e.g. `S.TaggedError()(...).pipe(category)`). The first
 * `new`, or the first read of a static the function does not own (`ast`,
 * `fields`, `identifier`, error matchers, ...), builds that base class and
 * puts it underneath: the function's statics and prototype then inherit
 * from it as `class Oops extends Base {}` did, so `instanceof`, `_tag`,
 * categories and subclasses behave as before. Until then an error class
 * costs one function. The `in` operator sees only `Function` members until
 * the class is built.
 */
const errorBase = (f: any): Function | undefined => {
  // `f` may be a subclass: find the data class it extends.
  while (f && Object.getPrototypeOf(f) !== lazyErrorStatics && !sources.get(f)?.k)
    f = Object.getPrototypeOf(f);
  if (!f) return undefined;
  const src = sourceOf(f);
  if (!src.k) {
    const base = evalEntry(src, 0) as Function;
    src.k = base;
    Object.setPrototypeOf(f, base);
    Object.setPrototypeOf(f.prototype, base.prototype);
  }
  return src.k;
};

// The statics of an unbuilt error class: `Function.prototype` members answer
// directly; any other read builds the class, then reads again. Made on first
// use, so bundles without data errors drop it.
let lazyErrorStatics: object | undefined;
const LazyErrorStatics = (): object =>
  (lazyErrorStatics ??= new Proxy(Object.create(Function.prototype), {
    get: (target, key, receiver) =>
      key in target || !errorBase(receiver)
        ? Reflect.get(target, key, receiver)
        : Reflect.get(receiver, key, receiver),
  }));

/** An error class described by data (see {@link errorBase}). */
export const error = (fn: DataFn): any => Object.setPrototypeOf(fn, LazyErrorStatics());

/**
 * The body of a data error class: with `new`, an instance of the built
 * base whose prototype is `newTarget`'s; called plainly, the class's data.
 */
export const newError = (props: unknown, newTarget: Function | undefined, data: unknown): any =>
  newTarget ? Reflect.construct(errorBase(newTarget)!, [props], newTarget) : data;

//#endregion
