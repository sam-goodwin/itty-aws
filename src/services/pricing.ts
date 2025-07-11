import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSPriceListService {
  describeServices(
    input: DescribeServicesRequest,
  ): Effect.Effect<
    {},
    ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  getAttributeValues(
    input: GetAttributeValuesRequest,
  ): Effect.Effect<
    {},
    ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  getPriceListFileUrl(
    input: GetPriceListFileUrlRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalErrorException | InvalidParameterException | NotFoundException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getProducts(
    input: GetProductsRequest,
  ): Effect.Effect<
    {},
    ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ThrottlingException | CommonAwsError
  >;
  listPriceLists(
    input: ListPriceListsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ExpiredNextTokenException | InternalErrorException | InvalidNextTokenException | InvalidParameterException | NotFoundException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
}

export type Pricing = AWSPriceListService;

export interface AccessDeniedException {
}
export type AttributeNameList = Array<unknown>;
export interface AttributeValue {
}
export type AttributeValueList = Array<unknown>;
export type BoxedInteger = number;

export type CurrencyCode = string;

export interface DescribeServicesRequest {
}
export interface DescribeServicesResponse {
}
export type EffectiveDate = Date | string;

export type errorMessage = string;

export interface ExpiredNextTokenException {
}
export type Field = string;

export type FileFormat = string;

export type FileFormats = Array<unknown>;
export interface Filter {
}
export type Filters = Array<unknown>;
export type FilterType = never;
export type FormatVersion = string;

export interface GetAttributeValuesRequest {
}
export interface GetAttributeValuesResponse {
}
export interface GetPriceListFileUrlRequest {
}
export interface GetPriceListFileUrlResponse {
}
export interface GetProductsRequest {
}
export interface GetProductsResponse {
}
export interface InternalErrorException {
}
export interface InvalidNextTokenException {
}
export interface InvalidParameterException {
}
export interface ListPriceListsRequest {
}
export interface ListPriceListsResponse {
}
export type MaxResults = number;

export interface NotFoundException {
}
export interface PriceList {
}
export type PriceListArn = string;

export type PriceListJsonItems = Array<unknown>;
export type PriceLists = Array<unknown>;
export type RegionCode = string;

export interface ResourceNotFoundException {
}
export interface Service {
}
export type ServiceCode = string;

export type ServiceList = Array<unknown>;
export type SynthesizedJsonPriceListJsonItem = string;

export interface ThrottlingException {
}
export type Value = string;

export declare namespace DescribeServices {
  export type Input = DescribeServicesRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

