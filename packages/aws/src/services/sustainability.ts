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
  sdkId: "Sustainability",
  serviceShapeName: "AwsSustainabilityApiService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "sustainability" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = () => ({
    authSchemes: [
      { name: "sigv4a", signingRegionSet: ["*"] },
      { name: "sigv4", signingRegion: "us-gov-west-1" },
    ],
  });
  const _p1 = (_0: unknown) => ({
    authSchemes: [
      { name: "sigv4a", signingRegionSet: ["*"] },
      { name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` },
    ],
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(
      Endpoint,
      { authSchemes: [{ name: "sigv4a", signingRegionSet: ["*"] }, { name: "sigv4" }] },
      {},
    );
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (_.getAttr(PartitionResult, "name") === "aws" && UseFIPS === false) {
          return e(
            `https://api.sustainability.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            {
              authSchemes: [
                { name: "sigv4a", signingRegionSet: ["*"] },
                { name: "sigv4", signingRegion: "us-east-1" },
              ],
            },
            {},
          );
        }
        if (_.getAttr(PartitionResult, "name") === "aws-us-gov" && UseFIPS === false) {
          return e(
            `https://sustainability.us-gov.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(),
            {},
          );
        }
        if (_.getAttr(PartitionResult, "name") === "aws-us-gov" && UseFIPS === true) {
          return e(
            `https://sustainability-fips.us-gov.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(),
            {},
          );
        }
        if (UseFIPS === true) {
          return e(
            `https://sustainability-fips.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p1(PartitionResult),
            {},
          );
        }
        return e(
          `https://sustainability.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          _p1(PartitionResult),
          {},
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export interface TimePeriod {
  Start: Date;
  End: Date;
}
const TimePeriod = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<TimePeriod>;
export type Dimension = "USAGE_ACCOUNT_ID" | "REGION" | "SERVICE" | (string & {});
const Dimension = S.String;

export type DimensionList = Dimension[];
const DimensionList = /*@__PURE__*/ __L.at(__c0, 1);
export type DimensionValue = string;
export type DimensionValueList = string[];
const DimensionValueList = /*@__PURE__*/ __L.at(__c0, 2);
export type DimensionListMap = { [key in Dimension]?: string[] };
const DimensionListMap = /*@__PURE__*/ __L.at(__c0, 3);
export interface FilterExpression {
  Dimensions?: { [key: string]: string[] | undefined };
}
const FilterExpression = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<FilterExpression>;
export type EmissionsType =
  | "TOTAL_LBM_CARBON_EMISSIONS"
  | "TOTAL_MBM_CARBON_EMISSIONS"
  | "TOTAL_SCOPE_1_CARBON_EMISSIONS"
  | "TOTAL_SCOPE_2_LBM_CARBON_EMISSIONS"
  | "TOTAL_SCOPE_2_MBM_CARBON_EMISSIONS"
  | "TOTAL_SCOPE_3_LBM_CARBON_EMISSIONS"
  | "TOTAL_SCOPE_3_MBM_CARBON_EMISSIONS"
  | (string & {});
const EmissionsType = S.String;

export type EmissionsTypeList = EmissionsType[];
const EmissionsTypeList = DimensionList as any as S.Schema<EmissionsTypeList>;
export type TimeGranularity =
  | "YEARLY_CALENDAR"
  | "YEARLY_FISCAL"
  | "QUARTERLY_CALENDAR"
  | "QUARTERLY_FISCAL"
  | "MONTHLY"
  | (string & {});
const TimeGranularity = S.String;

export type Month = number;
export interface GranularityConfiguration {
  FiscalYearStartMonth?: number;
}
const GranularityConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<GranularityConfiguration>;
export type MaxResults = number;
export type NextToken = string;
export interface GetEstimatedCarbonEmissionsRequest {
  TimePeriod: TimePeriod;
  GroupBy?: Dimension[];
  FilterBy?: FilterExpression;
  EmissionsTypes?: EmissionsType[];
  Granularity?: TimeGranularity;
  GranularityConfiguration?: GranularityConfiguration;
  MaxResults?: number;
  NextToken?: string;
}
const GetEstimatedCarbonEmissionsRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<GetEstimatedCarbonEmissionsRequest>;
export type DimensionsMap = { [key in Dimension]?: string };
const DimensionsMap = /*@__PURE__*/ __L.at(__c0, 7);
export type ModelVersion = string;
export type EmissionsUnit = "MTCO2e" | (string & {});
const EmissionsUnit = S.String;

export interface Emissions {
  Value: number;
  Unit: EmissionsUnit;
}
const Emissions = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<Emissions>;
export type EmissionsMap = { [key in EmissionsType]?: Emissions };
const EmissionsMap = /*@__PURE__*/ __L.at(__c1, 1);
export interface EstimatedCarbonEmissions {
  TimePeriod: TimePeriod;
  DimensionsValues: { [key: string]: string | undefined };
  ModelVersion: string;
  EmissionsValues: { [key: string]: Emissions | undefined };
}
const EstimatedCarbonEmissions = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<EstimatedCarbonEmissions>;
export type EstimatedCarbonEmissionsList = EstimatedCarbonEmissions[];
const EstimatedCarbonEmissionsList = /*@__PURE__*/ __L.at(__c1, 3);
export interface GetEstimatedCarbonEmissionsResponse {
  Results: EstimatedCarbonEmissions[];
  NextToken?: string;
}
const GetEstimatedCarbonEmissionsResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<GetEstimatedCarbonEmissionsResponse>;
export interface GetEstimatedCarbonEmissionsDimensionValuesRequest {
  TimePeriod: TimePeriod;
  Dimensions: Dimension[];
  MaxResults?: number;
  NextToken?: string;
}
const GetEstimatedCarbonEmissionsDimensionValuesRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<GetEstimatedCarbonEmissionsDimensionValuesRequest>;
export interface DimensionEntry {
  Dimension: Dimension;
  Value: string;
}
const DimensionEntry = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<DimensionEntry>;
export type DimensionEntryList = DimensionEntry[];
const DimensionEntryList = /*@__PURE__*/ __L.at(__c1, 7);
export interface GetEstimatedCarbonEmissionsDimensionValuesResponse {
  Results?: DimensionEntry[];
  NextToken?: string;
}
const GetEstimatedCarbonEmissionsDimensionValuesResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<GetEstimatedCarbonEmissionsDimensionValuesResponse>;
export type WaterAllocationType = "TOTAL_WATER_WITHDRAWALS" | (string & {});
export type WaterAllocationTypeList = WaterAllocationType[];
const WaterAllocationTypeList = DimensionList as any as S.Schema<WaterAllocationTypeList>;
export interface GetEstimatedWaterAllocationRequest {
  TimePeriod: TimePeriod;
  GroupBy?: Dimension[];
  FilterBy?: FilterExpression;
  AllocationTypes?: WaterAllocationType[];
  Granularity?: TimeGranularity;
  MaxResults?: number;
  NextToken?: string;
}
const GetEstimatedWaterAllocationRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<GetEstimatedWaterAllocationRequest>;
export type WaterAllocationUnit = "m3" | (string & {});
export interface WaterAllocation {
  Value: number;
  Unit: WaterAllocationUnit;
}
export type WaterAllocationMap = { [key in WaterAllocationType]?: WaterAllocation };
const WaterAllocationMap = EmissionsMap as any as S.Schema<WaterAllocationMap>;
export interface EstimatedWaterAllocation {
  TimePeriod: TimePeriod;
  DimensionsValues: { [key: string]: string | undefined };
  ModelVersion: string;
  AllocationValues: { [key: string]: WaterAllocation | undefined };
}
const EstimatedWaterAllocation = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<EstimatedWaterAllocation>;
export type EstimatedWaterAllocationList = EstimatedWaterAllocation[];
const EstimatedWaterAllocationList = /*@__PURE__*/ __L.at(__c2, 3);
export interface GetEstimatedWaterAllocationResponse {
  Results: EstimatedWaterAllocation[];
  NextToken?: string;
}
const GetEstimatedWaterAllocationResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<GetEstimatedWaterAllocationResponse>;
export interface GetEstimatedWaterAllocationDimensionValuesRequest {
  TimePeriod: TimePeriod;
  Dimensions: Dimension[];
  MaxResults?: number;
  NextToken?: string;
}
const GetEstimatedWaterAllocationDimensionValuesRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<GetEstimatedWaterAllocationDimensionValuesRequest>;
export interface GetEstimatedWaterAllocationDimensionValuesResponse {
  Results: DimensionEntry[];
  NextToken?: string;
}
const GetEstimatedWaterAllocationDimensionValuesResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<GetEstimatedWaterAllocationDimensionValuesResponse>;
export type GetEstimatedCarbonEmissionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns estimated carbon emission values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */
export const getEstimatedCarbonEmissions: API.PaginatedOperationMethod<
  GetEstimatedCarbonEmissionsRequest,
  GetEstimatedCarbonEmissionsResponse,
  GetEstimatedCarbonEmissionsError,
  Credentials | HttpClient.HttpClient,
  EstimatedCarbonEmissions
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetEstimatedCarbonEmissionsRequest,
  output: GetEstimatedCarbonEmissionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEstimatedCarbonEmissions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Results",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetEstimatedCarbonEmissionsDimensionValuesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the possible dimension values available for a customer's account. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */
export const getEstimatedCarbonEmissionsDimensionValues: API.PaginatedOperationMethod<
  GetEstimatedCarbonEmissionsDimensionValuesRequest,
  GetEstimatedCarbonEmissionsDimensionValuesResponse,
  GetEstimatedCarbonEmissionsDimensionValuesError,
  Credentials | HttpClient.HttpClient,
  DimensionEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetEstimatedCarbonEmissionsDimensionValuesRequest,
  output: GetEstimatedCarbonEmissionsDimensionValuesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEstimatedCarbonEmissionsDimensionValues",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Results",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetEstimatedWaterAllocationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns estimated water allocation values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */
export const getEstimatedWaterAllocation: API.PaginatedOperationMethod<
  GetEstimatedWaterAllocationRequest,
  GetEstimatedWaterAllocationResponse,
  GetEstimatedWaterAllocationError,
  Credentials | HttpClient.HttpClient,
  EstimatedWaterAllocation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetEstimatedWaterAllocationRequest,
  output: GetEstimatedWaterAllocationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEstimatedWaterAllocation",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Results",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetEstimatedWaterAllocationDimensionValuesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the possible dimension values available for a customer's account. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */
export const getEstimatedWaterAllocationDimensionValues: API.PaginatedOperationMethod<
  GetEstimatedWaterAllocationDimensionValuesRequest,
  GetEstimatedWaterAllocationDimensionValuesResponse,
  GetEstimatedWaterAllocationDimensionValuesError,
  Credentials | HttpClient.HttpClient,
  DimensionEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetEstimatedWaterAllocationDimensionValuesRequest,
  output: GetEstimatedWaterAllocationDimensionValuesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEstimatedWaterAllocationDimensionValues",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Results",
    pageSize: "MaxResults",
  } as const,
})) as any;

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Start: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          End: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "TimePeriod" });
    case 1:
      return S.Array(Dimension);
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Record(Dimension, /*@__PURE__*/ DimensionValueList.pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ Dimensions: S.optional(DimensionListMap) })).annotate({
        identifier: "FilterExpression",
      });
    case 5:
      return S.suspend(() => S.Struct({ FiscalYearStartMonth: S.optional(S.Number) })).annotate({
        identifier: "GranularityConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: TimePeriod,
          GroupBy: S.optional(DimensionList),
          FilterBy: S.optional(FilterExpression),
          EmissionsTypes: S.optional(EmissionsTypeList),
          Granularity: S.optional(TimeGranularity),
          GranularityConfiguration: S.optional(GranularityConfiguration),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/estimated-carbon-emissions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEstimatedCarbonEmissionsRequest",
      });
    case 7:
      return S.Record(Dimension, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Value: S.Number, Unit: EmissionsUnit })).annotate({
        identifier: "Emissions",
      });
    case 1:
      return S.Record(EmissionsType, /*@__PURE__*/ Emissions.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: TimePeriod,
          DimensionsValues: DimensionsMap,
          ModelVersion: S.String,
          EmissionsValues: EmissionsMap,
        }),
      ).annotate({ identifier: "EstimatedCarbonEmissions" });
    case 3:
      return S.Array(EstimatedCarbonEmissions);
    case 4:
      return S.suspend(() =>
        S.Struct({ Results: EstimatedCarbonEmissionsList, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetEstimatedCarbonEmissionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: TimePeriod,
          Dimensions: DimensionList,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/estimated-carbon-emissions-dimension-values" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEstimatedCarbonEmissionsDimensionValuesRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Dimension: Dimension, Value: S.String })).annotate({
        identifier: "DimensionEntry",
      });
    case 7:
      return S.Array(DimensionEntry);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Results: S.optional(DimensionEntryList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetEstimatedCarbonEmissionsDimensionValuesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: TimePeriod,
          GroupBy: S.optional(DimensionList),
          FilterBy: S.optional(FilterExpression),
          AllocationTypes: S.optional(WaterAllocationTypeList),
          Granularity: S.optional(TimeGranularity),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/estimated-water-allocation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEstimatedWaterAllocationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: TimePeriod,
          DimensionsValues: DimensionsMap,
          ModelVersion: S.String,
          AllocationValues: WaterAllocationMap,
        }),
      ).annotate({ identifier: "EstimatedWaterAllocation" });
    case 3:
      return S.Array(EstimatedWaterAllocation);
    case 4:
      return S.suspend(() =>
        S.Struct({ Results: EstimatedWaterAllocationList, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetEstimatedWaterAllocationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TimePeriod: TimePeriod,
          Dimensions: DimensionList,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/estimated-water-allocation-dimension-values" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEstimatedWaterAllocationDimensionValuesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Results: DimensionEntryList, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetEstimatedWaterAllocationDimensionValuesResponse",
      });
  }
}
