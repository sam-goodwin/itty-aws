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
  sdkId: "ControlCatalog",
  serviceShapeName: "ControlCatalog",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "controlcatalog" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
              `https://controlcatalog-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://controlcatalog-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://controlcatalog.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://controlcatalog.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
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
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ControlArn = string;
export interface GetControlRequest {
  ControlArn: string;
}
const GetControlRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<GetControlRequest>;
export type ControlAlias = string;
export type ControlAliases = string[];
const ControlAliases = /*@__PURE__*/ __L.at(__c0, 1);
export type ControlBehavior = "PREVENTIVE" | "PROACTIVE" | "DETECTIVE" | (string & {});
const ControlBehavior = S.String;

export type ControlSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | (string & {});
const ControlSeverity = S.String;

export type ControlScope = "GLOBAL" | "REGIONAL" | (string & {});
const ControlScope = S.String;

export type RegionCode = string;
export type DeployableRegions = string[];
const DeployableRegions = ControlAliases as any as S.Schema<DeployableRegions>;
export interface RegionConfiguration {
  Scope: ControlScope;
  DeployableRegions?: string[];
}
const RegionConfiguration = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<RegionConfiguration>;
export type ImplementationType = string;
export type ImplementationIdentifier = string;
export interface ImplementationDetails {
  Type: string;
  Identifier?: string;
}
const ImplementationDetails = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<ImplementationDetails>;
export type ParameterRequirementSummary = "REQUIRED" | "OPTIONAL" | "NONE" | (string & {});
const ParameterRequirementSummary = S.String;

export type ControlParameterRequirement = "REQUIRED" | "OPTIONAL" | (string & {});
const ControlParameterRequirement = S.String;

export interface ControlParameter {
  Name: string;
  Requirement?: ControlParameterRequirement;
}
const ControlParameter = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<ControlParameter>;
export type ControlParameters = ControlParameter[];
const ControlParameters = /*@__PURE__*/ __L.at(__c0, 5);
export type GovernedResource = string;
export type GovernedResources = string[];
const GovernedResources = ControlAliases as any as S.Schema<GovernedResources>;
export type GovernedProvider = string;
export type GovernedProviders = string[];
const GovernedProviders = ControlAliases as any as S.Schema<GovernedProviders>;
export interface GetControlResponse {
  Arn: string;
  Aliases?: string[];
  Name: string;
  Description: string;
  Behavior: ControlBehavior;
  Severity?: ControlSeverity;
  RegionConfiguration: RegionConfiguration;
  Implementation?: ImplementationDetails;
  ParameterRequirementSummary?: ParameterRequirementSummary;
  Parameters?: ControlParameter[];
  CreateTime?: Date;
  GovernedResources?: string[];
  GovernedProviders?: string[];
}
const GetControlResponse = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<GetControlResponse>;
export type MaxListCommonControlsResults = number;
export type PaginationToken = string;
export type ObjectiveArn = string;
export interface ObjectiveResourceFilter {
  Arn?: string;
}
const ObjectiveResourceFilter = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<ObjectiveResourceFilter>;
export type ObjectiveResourceFilterList = ObjectiveResourceFilter[];
const ObjectiveResourceFilterList = /*@__PURE__*/ __L.at(__c1, 0);
export interface CommonControlFilter {
  Objectives?: ObjectiveResourceFilter[];
}
const CommonControlFilter = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<CommonControlFilter>;
export interface ListCommonControlsRequest {
  MaxResults?: number;
  NextToken?: string;
  CommonControlFilter?: CommonControlFilter;
}
const ListCommonControlsRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<ListCommonControlsRequest>;
export type CommonControlArn = string;
export type DomainArn = string;
export interface AssociatedDomainSummary {
  Arn?: string;
  Name?: string;
}
const AssociatedDomainSummary = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AssociatedDomainSummary>;
export interface AssociatedObjectiveSummary {
  Arn?: string;
  Name?: string;
}
const AssociatedObjectiveSummary = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<AssociatedObjectiveSummary>;
export interface CommonControlSummary {
  Arn: string;
  Name: string;
  Description: string;
  Domain: AssociatedDomainSummary;
  Objective: AssociatedObjectiveSummary;
  CreateTime: Date;
  LastUpdateTime: Date;
}
const CommonControlSummary = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<CommonControlSummary>;
export type CommonControlSummaryList = CommonControlSummary[];
const CommonControlSummaryList = /*@__PURE__*/ __L.at(__c1, 6);
export interface ListCommonControlsResponse {
  CommonControls: CommonControlSummary[];
  NextToken?: string;
}
const ListCommonControlsResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<ListCommonControlsResponse>;
export type MaxListControlMappingsResults = number;
export type ControlArnFilterList = string[];
const ControlArnFilterList = ControlAliases as any as S.Schema<ControlArnFilterList>;
export type CommonControlArnFilterList = string[];
const CommonControlArnFilterList = ControlAliases as any as S.Schema<CommonControlArnFilterList>;
export type MappingType = "FRAMEWORK" | "COMMON_CONTROL" | "RELATED_CONTROL" | (string & {});
const MappingType = S.String;

export type MappingTypeFilterList = MappingType[];
const MappingTypeFilterList = /*@__PURE__*/ __L.at(__c2, 0);
export interface ControlMappingFilter {
  ControlArns?: string[];
  CommonControlArns?: string[];
  MappingTypes?: MappingType[];
}
const ControlMappingFilter = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<ControlMappingFilter>;
export interface ListControlMappingsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filter?: ControlMappingFilter;
}
const ListControlMappingsRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<ListControlMappingsRequest>;
export type FrameworkName = string;
export type FrameworkItem = string;
export interface FrameworkMappingDetails {
  Name: string;
  Item: string;
}
const FrameworkMappingDetails = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<FrameworkMappingDetails>;
export interface CommonControlMappingDetails {
  CommonControlArn: string;
}
const CommonControlMappingDetails = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CommonControlMappingDetails>;
export type ControlRelationType =
  | "COMPLEMENTARY"
  | "ALTERNATIVE"
  | "MUTUALLY_EXCLUSIVE"
  | (string & {});
const ControlRelationType = S.String;

export interface RelatedControlMappingDetails {
  ControlArn?: string;
  RelationType: ControlRelationType;
}
const RelatedControlMappingDetails = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<RelatedControlMappingDetails>;
export type Mapping =
  | { Framework: FrameworkMappingDetails; CommonControl?: never; RelatedControl?: never }
  | { Framework?: never; CommonControl: CommonControlMappingDetails; RelatedControl?: never }
  | { Framework?: never; CommonControl?: never; RelatedControl: RelatedControlMappingDetails };
const Mapping = /*@__PURE__*/ __L.at(__c2, 6);
export interface ControlMapping {
  ControlArn: string;
  MappingType: MappingType;
  Mapping: Mapping;
}
const ControlMapping = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<ControlMapping>;
export type ControlMappings = ControlMapping[];
const ControlMappings = /*@__PURE__*/ __L.at(__c3, 0);
export interface ListControlMappingsResponse {
  ControlMappings: ControlMapping[];
  NextToken?: string;
}
const ListControlMappingsResponse = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ListControlMappingsResponse>;
export type MaxListControlsResults = number;
export type ImplementationTypeFilterList = string[];
const ImplementationTypeFilterList =
  ControlAliases as any as S.Schema<ImplementationTypeFilterList>;
export type ImplementationIdentifierFilterList = string[];
const ImplementationIdentifierFilterList =
  ControlAliases as any as S.Schema<ImplementationIdentifierFilterList>;
export interface ImplementationFilter {
  Types?: string[];
  Identifiers?: string[];
}
const ImplementationFilter = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ImplementationFilter>;
export type GovernedProviderFilterList = string[];
const GovernedProviderFilterList = ControlAliases as any as S.Schema<GovernedProviderFilterList>;
export interface ControlFilter {
  Implementations?: ImplementationFilter;
  GovernedProviders?: string[];
}
const ControlFilter = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ControlFilter>;
export interface ListControlsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filter?: ControlFilter;
}
const ListControlsRequest = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ListControlsRequest>;
export interface ImplementationSummary {
  Type: string;
  Identifier?: string;
}
const ImplementationSummary = ImplementationDetails as any as S.Schema<ImplementationSummary>;
export interface ControlSummary {
  Arn: string;
  Aliases?: string[];
  Name: string;
  Description: string;
  Behavior?: ControlBehavior;
  Severity?: ControlSeverity;
  ParameterRequirementSummary?: ParameterRequirementSummary;
  Implementation?: ImplementationSummary;
  CreateTime?: Date;
  GovernedResources?: string[];
  GovernedProviders?: string[];
}
const ControlSummary = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<ControlSummary>;
export type Controls = ControlSummary[];
const Controls = /*@__PURE__*/ __L.at(__c3, 6);
export interface ListControlsResponse {
  Controls: ControlSummary[];
  NextToken?: string;
}
const ListControlsResponse = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<ListControlsResponse>;
export type MaxListDomainsResults = number;
export interface ListDomainsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListDomainsRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<ListDomainsRequest>;
export interface DomainSummary {
  Arn: string;
  Name: string;
  Description: string;
  CreateTime: Date;
  LastUpdateTime: Date;
}
const DomainSummary = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<DomainSummary>;
export type DomainSummaryList = DomainSummary[];
const DomainSummaryList = /*@__PURE__*/ __L.at(__c4, 2);
export interface ListDomainsResponse {
  Domains: DomainSummary[];
  NextToken?: string;
}
const ListDomainsResponse = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<ListDomainsResponse>;
export type MaxListObjectivesResults = number;
export interface DomainResourceFilter {
  Arn?: string;
}
export type DomainResourceFilterList = DomainResourceFilter[];
const DomainResourceFilterList =
  ObjectiveResourceFilterList as any as S.Schema<DomainResourceFilterList>;
export interface ObjectiveFilter {
  Domains?: DomainResourceFilter[];
}
const ObjectiveFilter = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<ObjectiveFilter>;
export interface ListObjectivesRequest {
  MaxResults?: number;
  NextToken?: string;
  ObjectiveFilter?: ObjectiveFilter;
}
const ListObjectivesRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ListObjectivesRequest>;
export interface ObjectiveSummary {
  Arn: string;
  Name: string;
  Description: string;
  Domain: AssociatedDomainSummary;
  CreateTime: Date;
  LastUpdateTime: Date;
}
const ObjectiveSummary = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<ObjectiveSummary>;
export type ObjectiveSummaryList = ObjectiveSummary[];
const ObjectiveSummaryList = /*@__PURE__*/ __L.at(__c4, 7);
export interface ListObjectivesResponse {
  Objectives: ObjectiveSummary[];
  NextToken?: string;
}
const ListObjectivesResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ListObjectivesResponse>;
export type GetControlError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about a specific control, most notably a list of Amazon Web Services Regions where this control is supported. Input a value for the *ControlArn* parameter, in ARN form. `GetControl` accepts *controltower* or *controlcatalog* control ARNs as input. Returns a *controlcatalog* ARN format.
 *
 * In the API response, controls that have the value `GLOBAL` in the `Scope` field do not show the `DeployableRegions` field, because it does not apply. Controls that have the value `REGIONAL` in the `Scope` field return a value for the `DeployableRegions` field, as shown in the example.
 */
export const getControl: API.OperationMethod<
  GetControlRequest,
  GetControlResponse,
  GetControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetControlRequest,
  output: GetControlResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetControl",
}));

export type ListCommonControlsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of common controls from the Amazon Web Services Control Catalog.
 *
 * You can apply an optional filter to see common controls that have a specific objective. If you don't provide a filter, the operation returns all common controls.
 */
export const listCommonControls: API.PaginatedOperationMethod<
  ListCommonControlsRequest,
  ListCommonControlsResponse,
  ListCommonControlsError,
  Credentials | HttpClient.HttpClient,
  CommonControlSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCommonControlsRequest,
  output: ListCommonControlsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCommonControls",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CommonControls",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListControlMappingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of control mappings from the Control Catalog. Control mappings show relationships between controls and other entities, such as common controls or compliance frameworks.
 */
export const listControlMappings: API.PaginatedOperationMethod<
  ListControlMappingsRequest,
  ListControlMappingsResponse,
  ListControlMappingsError,
  Credentials | HttpClient.HttpClient,
  ControlMapping
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListControlMappingsRequest,
  output: ListControlMappingsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListControlMappings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ControlMappings",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListControlsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of all available controls in the Control Catalog library. Allows you to discover available controls. The list of controls is given as structures of type *controlSummary*. The ARN is returned in the global *controlcatalog* format, as shown in the examples.
 */
export const listControls: API.PaginatedOperationMethod<
  ListControlsRequest,
  ListControlsResponse,
  ListControlsError,
  Credentials | HttpClient.HttpClient,
  ControlSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListControlsRequest,
  output: ListControlsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListControls",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Controls",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDomainsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of domains from the Control Catalog.
 */
export const listDomains: API.PaginatedOperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | HttpClient.HttpClient,
  DomainSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDomainsRequest,
  output: ListDomainsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomains",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Domains",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListObjectivesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of objectives from the Control Catalog.
 *
 * You can apply an optional filter to see the objectives that belong to a specific domain. If you don't provide a filter, the operation returns all objectives.
 */
export const listObjectives: API.PaginatedOperationMethod<
  ListObjectivesRequest,
  ListObjectivesResponse,
  ListObjectivesError,
  Credentials | HttpClient.HttpClient,
  ObjectiveSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListObjectivesRequest,
  output: ListObjectivesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListObjectives",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Objectives",
    pageSize: "MaxResults",
  } as const,
})) as any;

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ControlArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/get-control" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetControlRequest" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({ Scope: ControlScope, DeployableRegions: S.optional(DeployableRegions) }),
      ).annotate({ identifier: "RegionConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Type: S.String, Identifier: S.optional(S.String) }),
      ).annotate({ identifier: "ImplementationDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Requirement: S.optional(ControlParameterRequirement) }),
      ).annotate({ identifier: "ControlParameter" });
    case 5:
      return S.Array(ControlParameter);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Aliases: S.optional(ControlAliases),
          Name: S.String,
          Description: S.String,
          Behavior: ControlBehavior,
          Severity: S.optional(ControlSeverity),
          RegionConfiguration: RegionConfiguration,
          Implementation: S.optional(ImplementationDetails),
          ParameterRequirementSummary: S.optional(ParameterRequirementSummary),
          Parameters: S.optional(ControlParameters),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          GovernedResources: S.optional(GovernedResources),
          GovernedProviders: S.optional(GovernedProviders),
        }),
      ).annotate({ identifier: "GetControlResponse" });
    case 7:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "ObjectiveResourceFilter",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ObjectiveResourceFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({ Objectives: S.optional(ObjectiveResourceFilterList) }),
      ).annotate({ identifier: "CommonControlFilter" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          CommonControlFilter: S.optional(CommonControlFilter),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/common-controls" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListCommonControlsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({ identifier: "AssociatedDomainSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({
        identifier: "AssociatedObjectiveSummary",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          Description: S.String,
          Domain: AssociatedDomainSummary,
          Objective: AssociatedObjectiveSummary,
          CreateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CommonControlSummary" });
    case 6:
      return S.Array(CommonControlSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ CommonControls: CommonControlSummaryList, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListCommonControlsResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MappingType);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ControlArns: S.optional(ControlArnFilterList),
          CommonControlArns: S.optional(CommonControlArnFilterList),
          MappingTypes: S.optional(MappingTypeFilterList),
        }),
      ).annotate({ identifier: "ControlMappingFilter" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          Filter: S.optional(ControlMappingFilter),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/list-control-mappings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListControlMappingsRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Name: S.String, Item: S.String })).annotate({
        identifier: "FrameworkMappingDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ CommonControlArn: S.String })).annotate({
        identifier: "CommonControlMappingDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ControlArn: S.optional(S.String), RelationType: ControlRelationType }),
      ).annotate({
        identifier: "RelatedControlMappingDetails",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Framework: FrameworkMappingDetails }),
        /*@__PURE__*/ S.Struct({ CommonControl: CommonControlMappingDetails }),
        /*@__PURE__*/ S.Struct({ RelatedControl: RelatedControlMappingDetails }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ ControlArn: S.String, MappingType: MappingType, Mapping: Mapping }),
      ).annotate({ identifier: "ControlMapping" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ControlMapping);
    case 1:
      return S.suspend(() =>
        S.Struct({ ControlMappings: ControlMappings, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListControlMappingsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Types: S.optional(ImplementationTypeFilterList),
          Identifiers: S.optional(ImplementationIdentifierFilterList),
        }),
      ).annotate({ identifier: "ImplementationFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Implementations: S.optional(ImplementationFilter),
          GovernedProviders: S.optional(GovernedProviderFilterList),
        }),
      ).annotate({ identifier: "ControlFilter" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          Filter: S.optional(ControlFilter),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/list-controls" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListControlsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Aliases: S.optional(ControlAliases),
          Name: S.String,
          Description: S.String,
          Behavior: S.optional(ControlBehavior),
          Severity: S.optional(ControlSeverity),
          ParameterRequirementSummary: S.optional(ParameterRequirementSummary),
          Implementation: S.optional(ImplementationSummary),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          GovernedResources: S.optional(GovernedResources),
          GovernedProviders: S.optional(GovernedProviders),
        }),
      ).annotate({ identifier: "ControlSummary" });
    case 6:
      return S.Array(ControlSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ Controls: Controls, NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListControlsResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/domains" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDomainsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          Description: S.String,
          CreateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DomainSummary" });
    case 2:
      return S.Array(DomainSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ Domains: DomainSummaryList, NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDomainsResponse" });
    case 4:
      return S.suspend(() => S.Struct({ Domains: S.optional(DomainResourceFilterList) })).annotate({
        identifier: "ObjectiveFilter",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          ObjectiveFilter: S.optional(ObjectiveFilter),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/objectives" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListObjectivesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          Description: S.String,
          Domain: AssociatedDomainSummary,
          CreateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "ObjectiveSummary" });
    case 7:
      return S.Array(ObjectiveSummary);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Objectives: ObjectiveSummaryList, NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListObjectivesResponse" });
  }
}
