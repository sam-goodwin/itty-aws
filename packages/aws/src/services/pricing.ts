import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Pricing",
  serviceShapeName: "AWSPriceListService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "pricing" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-10-15");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://api.pricing-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://api.pricing-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://api.pricing.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        if ("aws" === _.getAttr(PartitionResult, "name")) {
          return e(`https://api.pricing.${Region}.amazonaws.com`);
        }
        return e(`https://api.pricing.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ExpiredNextTokenException
  extends /*@__PURE__*/ S.TaggedError<ExpiredNextTokenException>()(
    "ExpiredNextTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalErrorException>()(
    "InternalErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()(
    "InvalidNextTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export type FormatVersion = string;
export type DescribeServicesMaxResults = number;
export interface DescribeServicesRequest {
  ServiceCode?: string;
  FormatVersion?: string;
  NextToken?: string;
  MaxResults?: number;
}
const DescribeServicesRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<DescribeServicesRequest>;
export type AttributeNameList = string[];
const AttributeNameList = /*@__PURE__*/ __L.at(__c0, 1);
export interface Service {
  ServiceCode: string;
  AttributeNames?: string[];
}
const Service = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<Service>;
export type ServiceList = Service[];
const ServiceList = /*@__PURE__*/ __L.at(__c0, 3);
export interface DescribeServicesResponse {
  Services?: Service[];
  FormatVersion?: string;
  NextToken?: string;
}
const DescribeServicesResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<DescribeServicesResponse>;
export type GetAttributeValuesMaxResults = number;
export interface GetAttributeValuesRequest {
  ServiceCode: string;
  AttributeName: string;
  NextToken?: string;
  MaxResults?: number;
}
const GetAttributeValuesRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<GetAttributeValuesRequest>;
export interface AttributeValue {
  Value?: string;
}
const AttributeValue = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<AttributeValue>;
export type AttributeValueList = AttributeValue[];
const AttributeValueList = /*@__PURE__*/ __L.at(__c0, 7);
export interface GetAttributeValuesResponse {
  AttributeValues?: AttributeValue[];
  NextToken?: string;
}
const GetAttributeValuesResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<GetAttributeValuesResponse>;
export type PriceListArn = string;
export type FileFormat = string;
export interface GetPriceListFileUrlRequest {
  PriceListArn: string;
  FileFormat: string;
}
const GetPriceListFileUrlRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<GetPriceListFileUrlRequest>;
export interface GetPriceListFileUrlResponse {
  Url?: string;
}
const GetPriceListFileUrlResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<GetPriceListFileUrlResponse>;
export type FilterType =
  | "TERM_MATCH"
  | "EQUALS"
  | "CONTAINS"
  | "ANY_OF"
  | "NONE_OF"
  | (string & {});
const FilterType = S.String;

export type Field = string;
export type Value = string;
export interface Filter {
  Type: FilterType;
  Field: string;
  Value: string;
}
const Filter = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Filter>;
export type Filters = Filter[];
const Filters = /*@__PURE__*/ __L.at(__c1, 4);
export type GetProductsMaxResults = number;
export interface GetProductsRequest {
  ServiceCode: string;
  Filters?: Filter[];
  FormatVersion?: string;
  NextToken?: string;
  MaxResults?: number;
}
const GetProductsRequest = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<GetProductsRequest>;
export type SynthesizedJsonPriceListJsonItem = string;
export type PriceListJsonItems = string[];
const PriceListJsonItems = AttributeNameList as any as S.Schema<PriceListJsonItems>;
export interface GetProductsResponse {
  FormatVersion?: string;
  PriceList?: string[];
  NextToken?: string;
}
const GetProductsResponse = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<GetProductsResponse>;
export type ServiceCode = string;
export type EffectiveDate = Date;
export type RegionCode = string;
export type CurrencyCode = string;
export type MaxResults = number;
export interface ListPriceListsRequest {
  ServiceCode: string;
  EffectiveDate: Date;
  RegionCode?: string;
  CurrencyCode: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListPriceListsRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<ListPriceListsRequest>;
export type FileFormats = string[];
const FileFormats = AttributeNameList as any as S.Schema<FileFormats>;
export interface PriceList {
  PriceListArn?: string;
  RegionCode?: string;
  CurrencyCode?: string;
  FileFormats?: string[];
}
const PriceList = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<PriceList>;
export type PriceLists = PriceList[];
const PriceLists = /*@__PURE__*/ __L.at(__c2, 1);
export interface ListPriceListsResponse {
  PriceLists?: PriceList[];
  NextToken?: string;
}
const ListPriceListsResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<ListPriceListsResponse>;
export type ErrorMessage = string;
export type DescribeServicesError =
  | AccessDeniedException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as `AmazonEC2`, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are `volumeType`, `maxIopsVolume`, `operation`, `locationType`, and `instanceCapacity10xlarge`.
 */
export const describeServices: API.PaginatedOperationMethod<
  DescribeServicesRequest,
  DescribeServicesResponse,
  DescribeServicesError,
  Credentials | HttpClient.HttpClient,
  Service
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeServicesRequest,
  output: DescribeServicesResponse,
  errors: [
    AccessDeniedException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServices",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Services",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetAttributeValuesError =
  | AccessDeniedException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of attribute values. Attributes are similar to the details in a Price List API offer file. For a list of available attributes, see Offer File Definitions in the Billing and Cost Management User Guide.
 */
export const getAttributeValues: API.PaginatedOperationMethod<
  GetAttributeValuesRequest,
  GetAttributeValuesResponse,
  GetAttributeValuesError,
  Credentials | HttpClient.HttpClient,
  AttributeValue
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetAttributeValuesRequest,
  output: GetAttributeValuesResponse,
  errors: [
    AccessDeniedException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAttributeValues",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AttributeValues",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetPriceListFileUrlError =
  | AccessDeniedException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * * **This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the Amazon Web Services Service Terms (Section 1.10).** *
 *
 * This returns the URL that you can retrieve your Price List file from. This URL is based on the `PriceListArn` and `FileFormat` that you retrieve from the ListPriceLists response.
 */
export const getPriceListFileUrl: API.OperationMethod<
  GetPriceListFileUrlRequest,
  GetPriceListFileUrlResponse,
  GetPriceListFileUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPriceListFileUrlRequest,
  output: GetPriceListFileUrlResponse,
  errors: [
    AccessDeniedException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPriceListFileUrl",
}));

export type GetProductsError =
  | AccessDeniedException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of all products that match the filter criteria.
 */
export const getProducts: API.PaginatedOperationMethod<
  GetProductsRequest,
  GetProductsResponse,
  GetProductsError,
  Credentials | HttpClient.HttpClient,
  SynthesizedJsonPriceListJsonItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetProductsRequest,
  output: GetProductsResponse,
  errors: [
    AccessDeniedException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProducts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PriceList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPriceListsError =
  | AccessDeniedException
  | ExpiredNextTokenException
  | InternalErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | NotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * * **This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the Amazon Web Services Service Terms (Section 1.10).** *
 *
 * This returns a list of Price List references that the requester if authorized to view, given a `ServiceCode`, `CurrencyCode`, and an `EffectiveDate`. Use without a `RegionCode` filter to list Price List references from all available Amazon Web Services Regions. Use with a `RegionCode` filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the `PriceListArn` from the response to get your preferred Price List files through the GetPriceListFileUrl API.
 */
export const listPriceLists: API.PaginatedOperationMethod<
  ListPriceListsRequest,
  ListPriceListsResponse,
  ListPriceListsError,
  Credentials | HttpClient.HttpClient,
  PriceList
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPriceListsRequest,
  output: ListPriceListsResponse,
  errors: [
    AccessDeniedException,
    ExpiredNextTokenException,
    InternalErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    NotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPriceLists",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PriceLists",
    pageSize: "MaxResults",
  } as const,
})) as any;

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ServiceCode: S.optional(S.String),
          FormatVersion: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeServicesRequest" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({ ServiceCode: S.String, AttributeNames: S.optional(AttributeNameList) }),
      ).annotate({ identifier: "Service" });
    case 3:
      return S.Array(Service);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Services: S.optional(ServiceList),
          FormatVersion: S.optional(S.String),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeServicesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceCode: S.String,
          AttributeName: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetAttributeValuesRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Value: S.optional(S.String) })).annotate({
        identifier: "AttributeValue",
      });
    case 7:
      return S.Array(AttributeValue);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AttributeValues: S.optional(AttributeValueList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetAttributeValuesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PriceListArn: S.String, FileFormat: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetPriceListFileUrlRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Url: S.optional(S.String) })).annotate({
        identifier: "GetPriceListFileUrlResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Type: FilterType, Field: S.String, Value: S.String }),
      ).annotate({ identifier: "Filter" });
    case 4:
      return S.Array(Filter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceCode: S.String,
          Filters: S.optional(Filters),
          FormatVersion: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetProductsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FormatVersion: S.optional(S.String),
          PriceList: S.optional(PriceListJsonItems),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetProductsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ServiceCode: S.String,
          EffectiveDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          RegionCode: S.optional(S.String),
          CurrencyCode: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPriceListsRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PriceListArn: S.optional(S.String),
          RegionCode: S.optional(S.String),
          CurrencyCode: S.optional(S.String),
          FileFormats: S.optional(FileFormats),
        }),
      ).annotate({ identifier: "PriceList" });
    case 1:
      return S.Array(PriceList);
    case 2:
      return S.suspend(() =>
        S.Struct({ PriceLists: S.optional(PriceLists), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPriceListsResponse" });
  }
}
