import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSMPEntitlementService {
  getEntitlements(
    input: GetEntitlementsRequest,
  ): Effect.Effect<
    GetEntitlementsResult,
    | InternalServiceErrorException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type MarketplaceEntitlementService = AWSMPEntitlementService;

export type MarketplaceEntitlementServiceBoolean = boolean;

export type Double = number;

export interface Entitlement {
  ProductCode?: string;
  Dimension?: string;
  CustomerIdentifier?: string;
  CustomerAWSAccountId?: string;
  Value?: EntitlementValue;
  ExpirationDate?: Date | string;
}
export type EntitlementList = Array<Entitlement>;
export interface EntitlementValue {
  IntegerValue?: number;
  DoubleValue?: number;
  BooleanValue?: boolean;
  StringValue?: string;
}
export type ErrorMessage = string;

export type FilterValue = string;

export type FilterValueList = Array<string>;
export type GetEntitlementFilterName =
  | "CUSTOMER_IDENTIFIER"
  | "DIMENSION"
  | "CUSTOMER_AWS_ACCOUNT_ID";
export type GetEntitlementFilters = Record<
  GetEntitlementFilterName,
  Array<string>
>;
export interface GetEntitlementsRequest {
  ProductCode: string;
  Filter?: Record<GetEntitlementFilterName, Array<string>>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetEntitlementsResult {
  Entitlements?: Array<Entitlement>;
  NextToken?: string;
}
export type Integer = number;

export declare class InternalServiceErrorException extends EffectData.TaggedError(
  "InternalServiceErrorException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export type NonEmptyString = string;

export type PageSizeInteger = number;

export type ProductCode = string;

export type MarketplaceEntitlementServiceString = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export declare namespace GetEntitlements {
  export type Input = GetEntitlementsRequest;
  export type Output = GetEntitlementsResult;
  export type Error =
    | InternalServiceErrorException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}
