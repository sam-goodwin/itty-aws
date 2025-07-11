import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonSageMakerRuntime {
  invokeEndpoint(
    input: InvokeEndpointInput,
  ): Effect.Effect<
    InvokeEndpointOutput,
    | InternalDependencyException
    | InternalFailure
    | ModelError
    | ModelNotReadyException
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError
  >;
  invokeEndpointAsync(
    input: InvokeEndpointAsyncInput,
  ): Effect.Effect<
    InvokeEndpointAsyncOutput,
    InternalFailure | ServiceUnavailable | ValidationError | CommonAwsError
  >;
  invokeEndpointWithResponseStream(
    input: InvokeEndpointWithResponseStreamInput,
  ): Effect.Effect<
    InvokeEndpointWithResponseStreamOutput,
    | InternalFailure
    | InternalStreamFailure
    | ModelError
    | ModelStreamError
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError
  >;
}

export type SagemakerRuntime = AmazonSageMakerRuntime;

export type BodyBlob = Uint8Array | string;

export type CustomAttributesHeader = string;

export type EnableExplanationsHeader = string;

export type EndpointName = string;

export type ErrorCode = string;

export type Header = string;

export type InferenceComponentHeader = string;

export type InferenceId = string;

export type InputLocationHeader = string;

export declare class InternalDependencyException extends EffectData.TaggedError(
  "InternalDependencyException",
)<{
  readonly Message?: string;
}> {}
export declare class InternalFailure extends EffectData.TaggedError(
  "InternalFailure",
)<{
  readonly Message?: string;
}> {}
export declare class InternalStreamFailure extends EffectData.TaggedError(
  "InternalStreamFailure",
)<{
  readonly Message?: string;
}> {}
export type InvocationTimeoutSecondsHeader = number;

export interface InvokeEndpointAsyncInput {
  EndpointName: string;
  ContentType?: string;
  Accept?: string;
  CustomAttributes?: string;
  InferenceId?: string;
  InputLocation: string;
  RequestTTLSeconds?: number;
  InvocationTimeoutSeconds?: number;
}
export interface InvokeEndpointAsyncOutput {
  InferenceId?: string;
  OutputLocation?: string;
  FailureLocation?: string;
}
export interface InvokeEndpointInput {
  EndpointName: string;
  Body: Uint8Array | string;
  ContentType?: string;
  Accept?: string;
  CustomAttributes?: string;
  TargetModel?: string;
  TargetVariant?: string;
  TargetContainerHostname?: string;
  InferenceId?: string;
  EnableExplanations?: string;
  InferenceComponentName?: string;
  SessionId?: string;
}
export interface InvokeEndpointOutput {
  Body: Uint8Array | string;
  ContentType?: string;
  InvokedProductionVariant?: string;
  CustomAttributes?: string;
  NewSessionId?: string;
  ClosedSessionId?: string;
}
export interface InvokeEndpointWithResponseStreamInput {
  EndpointName: string;
  Body: Uint8Array | string;
  ContentType?: string;
  Accept?: string;
  CustomAttributes?: string;
  TargetVariant?: string;
  TargetContainerHostname?: string;
  InferenceId?: string;
  InferenceComponentName?: string;
  SessionId?: string;
}
export interface InvokeEndpointWithResponseStreamOutput {
  Body: ResponseStream;
  ContentType?: string;
  InvokedProductionVariant?: string;
  CustomAttributes?: string;
}
export type LogStreamArn = string;

export type Message = string;

export declare class ModelError extends EffectData.TaggedError("ModelError")<{
  readonly Message?: string;
  readonly OriginalStatusCode?: number;
  readonly OriginalMessage?: string;
  readonly LogStreamArn?: string;
}> {}
export declare class ModelNotReadyException extends EffectData.TaggedError(
  "ModelNotReadyException",
)<{
  readonly Message?: string;
}> {}
export declare class ModelStreamError extends EffectData.TaggedError(
  "ModelStreamError",
)<{
  readonly Message?: string;
  readonly ErrorCode?: string;
}> {}
export type NewSessionResponseHeader = string;

export type PartBlob = Uint8Array | string;

export interface PayloadPart {
  Bytes?: Uint8Array | string;
}
export type RequestTTLSecondsHeader = number;

export type ResponseStream =
  | {
      PayloadPart: PayloadPart;
      ModelStreamError?: undefined;
      InternalStreamFailure?: undefined;
    }
  | {
      PayloadPart?: undefined;
      ModelStreamError: ModelStreamError;
      InternalStreamFailure?: undefined;
    }
  | {
      PayloadPart?: undefined;
      ModelStreamError?: undefined;
      InternalStreamFailure: InternalStreamFailure;
    };
export declare class ServiceUnavailable extends EffectData.TaggedError(
  "ServiceUnavailable",
)<{
  readonly Message?: string;
}> {}
export type SessionIdHeader = string;

export type SessionIdOrNewSessionConstantHeader = string;

export type StatusCode = number;

export type TargetContainerHostnameHeader = string;

export type TargetModelHeader = string;

export type TargetVariantHeader = string;

export declare class ValidationError extends EffectData.TaggedError(
  "ValidationError",
)<{
  readonly Message?: string;
}> {}
export declare namespace InvokeEndpoint {
  export type Input = InvokeEndpointInput;
  export type Output = InvokeEndpointOutput;
  export type Error =
    | InternalDependencyException
    | InternalFailure
    | ModelError
    | ModelNotReadyException
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError;
}

export declare namespace InvokeEndpointAsync {
  export type Input = InvokeEndpointAsyncInput;
  export type Output = InvokeEndpointAsyncOutput;
  export type Error =
    | InternalFailure
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError;
}

export declare namespace InvokeEndpointWithResponseStream {
  export type Input = InvokeEndpointWithResponseStreamInput;
  export type Output = InvokeEndpointWithResponseStreamOutput;
  export type Error =
    | InternalFailure
    | InternalStreamFailure
    | ModelError
    | ModelStreamError
    | ServiceUnavailable
    | ValidationError
    | CommonAwsError;
}
