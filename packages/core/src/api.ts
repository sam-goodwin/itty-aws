import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schedule from "effect/Schedule";
import * as S from "effect/Schema";
import type * as AST from "effect/SchemaAST";
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
  /** The protocol layer that knows how to encode/decode this operation's wire format. */
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
): (
  input: S.Schema.Type<I>,
) => Effect.Effect<
  S.Schema.Type<O>,
  InstanceType<E[number]> | PE | HttpClientError.HttpClientError,
  PR | HttpClient.HttpClient
> {
  const cfg = configFn();
  return ((input: unknown) =>
    Effect.gen(function* () {
      const protocol = yield* Protocol;
      const client = yield* HttpClient.HttpClient;
      const request = yield* protocol.encode({
        input,
        inputAst: cfg.input!.ast,
      });
      const response = yield* client.execute(request);
      return yield* protocol.decode({
        response,
        outputAst: cfg.output!.ast,
      });
    }).pipe(Effect.provide(cfg.protocol))) as any;
}

//#endregion
