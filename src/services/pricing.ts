import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSPriceListService {
  describeServices(
    input: DescribeServicesRequest,
  ): Effect.Effect<
    DescribeServicesResponse,
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getAttributeValues(
    input: GetAttributeValuesRequest,
  ): Effect.Effect<
    GetAttributeValuesResponse,
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getPriceListFileUrl(
    input: GetPriceListFileUrlRequest,
  ): Effect.Effect<
    GetPriceListFileUrlResponse,
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getProducts(
    input: GetProductsRequest,
  ): Effect.Effect<
    GetProductsResponse,
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listPriceLists(
    input: ListPriceListsRequest,
  ): Effect.Effect<
    ListPriceListsResponse,
    | AccessDeniedException
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Pricing = AWSPriceListService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AttributeNameList = Array<string>;
export interface AttributeValue {
  Value?: string;
}
export type AttributeValueList = Array<AttributeValue>;
export type BoxedInteger = number;

export type CurrencyCode = string;

export interface DescribeServicesRequest {
  ServiceCode?: string;
  FormatVersion?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeServicesResponse {
  Services?: Array<Service>;
  FormatVersion?: string;
  NextToken?: string;
}
export type EffectiveDate = Date | string;

export type errorMessage = string;

export declare class ExpiredNextTokenException extends EffectData.TaggedError(
  "ExpiredNextTokenException",
)<{
  readonly Message?: string;
}> {}
export type Field = string;

export type FileFormat = string;

export type FileFormats = Array<string>;
export interface Filter {
  Type: FilterType;
  Field: string;
  Value: string;
}
export type Filters = Array<Filter>;
export type FilterType = "TERM_MATCH";
export type FormatVersion = string;

export interface GetAttributeValuesRequest {
  ServiceCode: string;
  AttributeName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetAttributeValuesResponse {
  AttributeValues?: Array<AttributeValue>;
  NextToken?: string;
}
export interface GetPriceListFileUrlRequest {
  PriceListArn: string;
  FileFormat: string;
}
export interface GetPriceListFileUrlResponse {
  Url?: string;
}
export interface GetProductsRequest {
  ServiceCode: string;
  Filters?: Array<Filter>;
  FormatVersion?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetProductsResponse {
  FormatVersion?: string;
  PriceList?: Array<string>;
  NextToken?: string;
}
export declare class InternalErrorException extends EffectData.TaggedError(
  "InternalErrorException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
}> {}
export interface ListPriceListsRequest {
  ServiceCode: string;
  EffectiveDate: Date | string;
  RegionCode?: string;
  CurrencyCode: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPriceListsResponse {
  PriceLists?: Array<PriceList>;
  NextToken?: string;
}
export type MaxResults = number;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface PriceList {
  PriceListArn?: string;
  RegionCode?: string;
  CurrencyCode?: string;
  FileFormats?: Array<string>;
}
export type PriceListArn = string;

export type PriceListJsonItems = Array<string>;
export type PriceLists = Array<PriceList>;
export type RegionCode = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface Service {
  ServiceCode: string;
  AttributeNames?: Array<string>;
}
export type ServiceCode = string;

export type ServiceList = Array<Service>;
export type PricingString = string;

export type SynthesizedJsonPriceListJsonItem = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Value = string;

export declare namespace DescribeServices {
  export type Input = DescribeServicesRequest;
  export type Output = DescribeServicesResponse;
  export type Error =
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAttributeValues {
  export type Input = GetAttributeValuesRequest;
  export type Output = GetAttributeValuesResponse;
  export type Error =
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetPriceListFileUrl {
  export type Input = GetPriceListFileUrlRequest;
  export type Output = GetPriceListFileUrlResponse;
  export type Error =
    | AccessDeniedException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetProducts {
  export type Input = GetProductsRequest;
  export type Output = GetProductsResponse;
  export type Error =
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListPriceLists {
  export type Input = ListPriceListsRequest;
  export type Output = ListPriceListsResponse;
  export type Error =
    | AccessDeniedException
    | ExpiredNextTokenException
    | InternalErrorException
    | InvalidNextTokenException
    | InvalidParameterException
    | NotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}
