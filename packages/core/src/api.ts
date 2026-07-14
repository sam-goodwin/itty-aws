import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as S from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import { pipeArguments } from "effect/Pipeable";
import * as Ref from "effect/Ref";
import * as Scope from "effect/Scope";
import type * as Stream from "effect/Stream";
import { SingleShotGen } from "effect/Utils";
import * as Pagination from "./pagination.ts";
import { makeDefault, type Policy as RetryPolicy } from "./retry.ts";
import * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import type * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";

//#region Protocol

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
    }) => Effect.Effect<HttpClientRequest.HttpClientRequest>;
    readonly decode: (args: {
      readonly response: HttpClientResponse.HttpClientResponse;
      readonly outputAst: AST.AST;
      /**
       * The operation's declared error classes (from `OperationConfig.errors`).
       * Protocols use these to surface wire failures as the operation's typed
       * errors — e.g. by consulting matcher metadata stamped on the class.
       */
      readonly errors: ReadonlyArray<ApiErrorClass>;
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
 * The shape of a generated SDK operation — usable two ways (mirrors the
 * distilled repo's OperationMethod):
 *
 * 1. Direct call: `yield* operation(input)` — an Effect with requirements.
 * 2. Yield first: `const fn = yield* operation` — captures the current
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

/**
 * Generated SDKs may wrap each request/response schema in
 * `Schema.suspend(() => ...)`, whose `.ast` is a `Suspend` node rather than the
 * real node — force it here. `Suspend.thunk` memoizes, so this only pays once,
 * and the ast is returned untouched when it isn't a Suspend (the common case
 * for non-suspended schemas).
 */
const resolveAst = (ast: AST.AST): AST.AST =>
  ast._tag === "Suspend" ? resolveAst(ast.thunk()) : ast;

/**
 * Protocol layers are built once per process and shared by every operation
 * call (keyed by layer value identity — generated operations all reference the
 * same module-level layer const). The build runs against a process-lifetime
 * scope, and concurrent first calls are deduplicated through a private
 * MemoMap.
 *
 * Contract for protocol implementations: the layer build must not capture
 * per-call context. Anything call-dependent — credentials, per-request
 * options — must be resolved inside `encode`/`decode`, which execute on the
 * calling fiber and therefore see the caller's services on every request.
 */
const protocolMemoMap = Layer.makeMemoMapUnsafe();
const protocolScope = Scope.makeUnsafe();
const protocolContexts = new WeakMap<
  Layer.Layer<Protocol, any, any>,
  Context.Context<Protocol>
>();

const protocolContext = <PE, PR>(
  layer: Layer.Layer<Protocol, PE, PR>,
): Effect.Effect<Context.Context<Protocol>, PE, PR> => {
  const cached = protocolContexts.get(layer);
  if (cached) return Effect.succeed(cached);
  return Effect.map(
    Layer.buildWithMemoMap(layer, protocolMemoMap, protocolScope),
    (ctx) => {
      protocolContexts.set(layer, ctx);
      return ctx;
    },
  );
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
   * reference the same layer value — it must resolve call-dependent services
   * (credentials etc.) inside encode/decode, not at build time.
   */
  protocol: Layer.Layer<Protocol, PE, PR>;
  /**
   * SDK-specific retry service tag (see `core/retry`). When provided and the
   * caller's context carries a policy under this tag, every call is retried
   * per that policy (e.g. `Layer.succeed(Cloudflare.Retry.Retry, factory)`).
   */
  retry?: Context.Key<any, RetryPolicy>;
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
    : Effect.flatMap(Effect.serviceOption(retryKey), (opt) =>
        Effect.gen(function* () {
          const lastError = yield* Ref.make<unknown>(undefined);
          // No policy in context → makeDefault (transient/throttling/server
          // errors, capped exponential backoff + jitter, honors server
          // retryAfter hints). Mirrors the distilled client.
          const policy = Option.isSome(opt) ? opt.value : makeDefault;
          const opts =
            typeof policy === "function" ? policy(lastError) : policy;
          if (!opts.while) return yield* base;
          return yield* base.pipe(
            Effect.tapError((e) => Ref.set(lastError, e)),
            Effect.retry({
              while: (e: unknown) => opts.while!(e),
              ...(opts.schedule ? { schedule: opts.schedule as any } : {}),
            }),
          );
        }),
      );

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
  // Lazily resolve the operation config + schema ASTs on first call, not at
  // module-load time. Generated SDKs wrap each request/response schema in
  // `Schema.suspend(() => ...)`; forcing them here (rather than when the
  // `export const` is evaluated) keeps importing a service module cheap and
  // only pays the schema-construction cost for operations that are actually
  // called. Memoized so subsequent calls are free.
  interface Prepared {
    readonly cfg: OperationConfig<I, O, PE, PR, E>;
    readonly inputAst: AST.AST;
    readonly outputAst: AST.AST;
  }
  let prepared: Prepared | undefined;
  const prepare = (): Prepared => {
    if (prepared) return prepared;
    const cfg = configFn();
    prepared = {
      cfg,
      inputAst: resolveAst(cfg.input!.ast),
      outputAst: resolveAst(cfg.output!.ast),
    };
    return prepared;
  };
  const fn = (input: unknown) =>
    Effect.suspend(() => {
      const { cfg, inputAst, outputAst } = prepare();
      const call = Effect.flatMap(
        protocolContext(cfg.protocol),
        (protocolCtx) =>
          Effect.gen(function* () {
            const protocol = yield* Protocol;
            const client = yield* HttpClient.HttpClient;
            const request = yield* protocol.encode({ input, inputAst });
            const response = yield* client.execute(request);
            return yield* protocol.decode({
              response,
              outputAst,
              errors: cfg.errors ?? [],
            });
          }).pipe(Effect.provideContext(protocolCtx)),
      );
      return applyRetry(call, cfg.retry);
    });

  // Make the operation itself yieldable: `yield* operation` captures the
  // current context and returns a requirement-free call function (mirrors
  // the distilled repo's OperationMethod).
  const Proto = {
    [Symbol.iterator](this: any) {
      return new SingleShotGen(this.asEffect());
    },
    pipe(this: any) {
      return pipeArguments(this.asEffect(), arguments);
    },
    asEffect() {
      return Effect.map(
        Effect.context(),
        (context) => (input: unknown) =>
          Effect.provideContext(fn(input), context),
      );
    },
  };

  return Object.assign(fn, Proto) as any;
}

//#endregion

//#region MakePaginated

/**
 * The element type `.items()` yields: the array element of the page response
 * itself, of its `result` member, or `unknown` when no items shape applies.
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
 * A paginated operation: callable like any {@link OperationMethod}, plus
 * `.pages(input)` streaming every page response and `.items(input)` streaming
 * the individual items across pages.
 */
export type PaginatedOperationMethod<I, O, E, R> = OperationMethod<
  I,
  O,
  E,
  R
> & {
  readonly pages: (input: I) => Stream.Stream<O, E, R>;
  readonly items: (input: I) => Stream.Stream<PaginatedItem<O>, E, R>;
};

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
  const fn: any = make(configFn);
  // configFn is a cheap object literal over already-constructed consts —
  // re-invoking it here just reads the pagination trait (memoized).
  let pagination: Pagination.PaginatedTrait | undefined;
  const pag = () => (pagination ??= configFn().pagination);
  const paginate = strategy ?? Pagination.paginateWithDefaults;
  fn.pages = (input: Record<string, unknown>) => paginate(fn, input, pag());
  fn.items = (input: Record<string, unknown>) => {
    const p = pag();
    return p.items
      ? Pagination.extractItems(fn.pages(input), p.items)
      : fn.pages(input);
  };
  return fn;
}

//#endregion
