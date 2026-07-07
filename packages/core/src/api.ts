import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import * as S from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import * as Scope from "effect/Scope";
import * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import type * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { hasCategory } from "./error-category.ts";
import { RETRYABLE } from "./errors.ts";

//#region RetryPolicy
export type RetrySchedule = Schedule.Schedule<unknown, any, never, never>;

export type RetryPolicyFn = (
  error: unknown,
) => Effect.Effect<Option.Option<RetrySchedule>>;

export const RetryPolicies: Context.Reference<ReadonlyArray<RetryPolicyFn>> =
  Context.Reference<ReadonlyArray<RetryPolicyFn>>("RetryPolicies", {
    defaultValue: () => [],
  });

export type DefaultRetryPolicyFn = (
  error: unknown,
) => Effect.Effect<RetrySchedule>;

export const DefaultRetryPolicy: Context.Reference<DefaultRetryPolicyFn> =
  Context.Reference<DefaultRetryPolicyFn>("DefaultRetryPolicy", {
    defaultValue: () => (error) =>
      Effect.succeed(
        hasCategory(RETRYABLE)(error)
          ? Schedule.forever
          : Schedule.exponential(Duration.millis(100), 2).pipe(
              Schedule.take(3),
            ),
      ),
  });

const resolveRetrySchedule = (error: unknown) =>
  Effect.gen(function* () {
    const stack = yield* RetryPolicies;
    //* reverse through the retry policies to see if any handle
    for (let i = stack.length - 1; i >= 0; i--) {
      const r = yield* stack[i]!(error);
      if (Option.isSome(r)) return r.value;
    }
    const defaultPolicy = yield* DefaultRetryPolicy;
    return yield* defaultPolicy(error);
  });

export const addRetryPolicy = (
  fn: RetryPolicyFn | ((error: unknown) => Option.Option<RetrySchedule>),
): Layer.Layer<never> => {
  const lifted: RetryPolicyFn = (error) => {
    const r = fn(error);
    return Effect.isEffect(r) ? r : Effect.succeed(r);
  };
  return Layer.updateService(Layer.empty, RetryPolicies, (prev) => [
    ...prev,
    lifted,
  ]);
};

//#endregion

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
 * The shape of a generated SDK operation: a plain function from input to
 * Effect. Generated service files annotate every exported operation with this
 * type explicitly (against their hand-emitted interfaces), so the compiler
 * never has to infer it back out of the schema generics.
 */
export type OperationMethod<I, O, E, R> = (input: I) => Effect.Effect<O, E, R>;

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
  retryPolicy?: RetryPolicyFn;
}

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
  return ((input: unknown) =>
    Effect.suspend(() => {
      const { cfg, inputAst, outputAst } = prepare();
      return Effect.flatMap(protocolContext(cfg.protocol), (protocolCtx) =>
        Effect.gen(function* () {
          const protocol = yield* Protocol;
          const client = yield* HttpClient.HttpClient;
          const request = yield* protocol.encode({ input, inputAst });
          const response = yield* client.execute(request);
          return yield* protocol.decode({ response, outputAst });
        }).pipe(Effect.provideContext(protocolCtx)),
      );
    })) as any;
}

//#endregion
