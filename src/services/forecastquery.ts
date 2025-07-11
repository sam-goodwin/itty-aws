import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonForecastRuntime {
  queryForecast(
    input: QueryForecastRequest,
  ): Effect.Effect<
    QueryForecastResponse,
    | InvalidInputException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  queryWhatIfForecast(
    input: QueryWhatIfForecastRequest,
  ): Effect.Effect<
    QueryWhatIfForecastResponse,
    | InvalidInputException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Forecastquery = AmazonForecastRuntime;

export type Arn = string;

export type AttributeName = string;

export type AttributeValue = string;

export interface DataPoint {
  Timestamp?: string;
  Value?: number;
}
export type DateTime = string;

export type Double = number;

export type ErrorMessage = string;

export type Filters = Record<string, string>;
export interface Forecast {
  Predictions?: Record<string, Array<DataPoint>>;
}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type LongArn = string;

export type NextToken = string;

export type Predictions = Record<string, Array<DataPoint>>;
export interface QueryForecastRequest {
  ForecastArn: string;
  StartDate?: string;
  EndDate?: string;
  Filters: Record<string, string>;
  NextToken?: string;
}
export interface QueryForecastResponse {
  Forecast?: Forecast;
}
export interface QueryWhatIfForecastRequest {
  WhatIfForecastArn: string;
  StartDate?: string;
  EndDate?: string;
  Filters: Record<string, string>;
  NextToken?: string;
}
export interface QueryWhatIfForecastResponse {
  Forecast?: Forecast;
}
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Statistic = string;

export type TimeSeries = Array<DataPoint>;
export type Timestamp = string;

export declare namespace QueryForecast {
  export type Input = QueryForecastRequest;
  export type Output = QueryForecastResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace QueryWhatIfForecast {
  export type Input = QueryWhatIfForecastRequest;
  export type Output = QueryWhatIfForecastResponse;
  export type Error =
    | InvalidInputException
    | InvalidNextTokenException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}
