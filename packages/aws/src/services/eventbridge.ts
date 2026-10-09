import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://events.amazonaws.com/doc/2015-10-07");
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "EventBridge", serviceShapeName: "AWSEvents" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "events" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-10-07");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint, EndpointId } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = () => ({
    authSchemes: [{ name: "sigv4a", signingName: "events", signingRegionSet: ["*"] }],
  });
  {
    const PartitionResult = _.partition(Region);
    if (
      !(Endpoint != null) &&
      Region != null &&
      PartitionResult != null &&
      PartitionResult !== false &&
      _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
      UseFIPS === true &&
      UseDualStack === true
    ) {
      return e(`https://events.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
    }
  }
  {
    const PartitionResult = _.partition(Region);
    if (
      EndpointId != null &&
      Region != null &&
      PartitionResult != null &&
      PartitionResult !== false
    ) {
      if (_.isValidHostLabel(EndpointId, true)) {
        if (UseFIPS === false) {
          if (Endpoint != null) {
            return e(Endpoint, _p0(), {});
          }
          if (UseDualStack === true) {
            if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
              return e(
                `https://${EndpointId}.endpoint.events.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
                _p0(),
                {},
              );
            }
            return err("DualStack is enabled but this partition does not support DualStack");
          }
          return e(
            `https://${EndpointId}.endpoint.events.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            _p0(),
            {},
          );
        }
        return err(
          "Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints.",
        );
      }
      return err("EndpointId must be a valid host label.");
    }
  }
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
              `https://events-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (Region === "us-gov-east-1") {
              return e("https://events.us-gov-east-1.amazonaws.com");
            }
            if (Region === "us-gov-west-1") {
              return e("https://events.us-gov-west-1.amazonaws.com");
            }
            return e(`https://events-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://events.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://events.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class EventBusHasRules
  extends /*@__PURE__*/ S.TaggedError<EventBusHasRules>()(
    "EventBusHasRules",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationException",
      message: { includes: "has rules" },
    }),
  ).pipe(C.withConflictError) {}
export class IllegalStatusException
  extends /*@__PURE__*/ S.TaggedError<IllegalStatusException>()("IllegalStatusException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError) {}
export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()("InternalException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withServerError, C.withRetryableError) {}
export class InvalidEventPatternException
  extends /*@__PURE__*/ S.TaggedError<InvalidEventPatternException>()(
    "InvalidEventPatternException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withBadRequestError) {}
export class InvalidStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidStateException>()("InvalidStateException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withConflictError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withQuotaError) {}
export class ManagedRuleException
  extends /*@__PURE__*/ S.TaggedError<ManagedRuleException>()("ManagedRuleException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class OperationDisabledException
  extends /*@__PURE__*/ S.TaggedError<OperationDisabledException>()("OperationDisabledException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class PolicyLengthExceededException
  extends /*@__PURE__*/ S.TaggedError<PolicyLengthExceededException>()(
    "PolicyLengthExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withQuotaError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()("ThrottlingException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withThrottlingError, C.withRetryableError) {}
export type EventSourceName = string;
export interface ActivateEventSourceRequest {
  Name: string;
}
export interface ActivateEventSourceResponse {}
export type ReplayName = string;
export interface CancelReplayRequest {
  ReplayName: string;
}
export type ReplayArn = string;
export type ReplayState =
  | "STARTING"
  | "RUNNING"
  | "CANCELLING"
  | "COMPLETED"
  | "CANCELLED"
  | "FAILED"
  | (string & {});
export type ReplayStateReason = string;
export interface CancelReplayResponse {
  ReplayArn?: string;
  State?: ReplayState;
  StateReason?: string;
}
export type ApiDestinationName = string;
export type ApiDestinationDescription = string;
export type ConnectionArn = string;
export type HttpsEndpoint = string;
export type ApiDestinationHttpMethod =
  | "POST"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | (string & {});
export type ApiDestinationInvocationRateLimitPerSecond = number;
export interface CreateApiDestinationRequest {
  Name: string;
  Description?: string;
  ConnectionArn: string;
  InvocationEndpoint: string;
  HttpMethod: ApiDestinationHttpMethod;
  InvocationRateLimitPerSecond?: number;
}
export type ApiDestinationArn = string;
export type ApiDestinationState = "ACTIVE" | "INACTIVE" | (string & {});
export interface CreateApiDestinationResponse {
  ApiDestinationArn?: string;
  ApiDestinationState?: ApiDestinationState;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export type ArchiveName = string;
export type EventBusArn = string;
export type ArchiveDescription = string;
export type EventPattern = string;
export type RetentionDays = number;
export type KmsKeyIdentifier = string;
export interface CreateArchiveRequest {
  ArchiveName: string;
  EventSourceArn: string;
  Description?: string;
  EventPattern?: string;
  RetentionDays?: number;
  KmsKeyIdentifier?: string;
}
export type ArchiveArn = string;
export type ArchiveState =
  | "ENABLED"
  | "DISABLED"
  | "CREATING"
  | "UPDATING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | (string & {});
export type ArchiveStateReason = string;
export interface CreateArchiveResponse {
  ArchiveArn?: string;
  State?: ArchiveState;
  StateReason?: string;
  CreationTime?: Date;
}
export type ConnectionName = string;
export type ConnectionDescription = string;
export type ConnectionAuthorizationType =
  | "BASIC"
  | "OAUTH_CLIENT_CREDENTIALS"
  | "API_KEY"
  | (string & {});
export type AuthHeaderParameters = string;
export type AuthHeaderParametersSensitive = string | redacted.Redacted<string>;
export interface CreateConnectionBasicAuthRequestParameters {
  Username: string;
  Password: string | redacted.Redacted<string>;
}
export interface CreateConnectionOAuthClientRequestParameters {
  ClientID: string;
  ClientSecret: string | redacted.Redacted<string>;
}
export type ConnectionOAuthHttpMethod = "GET" | "POST" | "PUT" | (string & {});
export type HeaderKey = string;
export type HeaderValueSensitive = string | redacted.Redacted<string>;
export interface ConnectionHeaderParameter {
  Key?: string;
  Value?: string | redacted.Redacted<string>;
  IsValueSecret?: boolean;
}
export type ConnectionHeaderParametersList = ConnectionHeaderParameter[];
export type QueryStringKey = string;
export type QueryStringValueSensitive = string | redacted.Redacted<string>;
export interface ConnectionQueryStringParameter {
  Key?: string;
  Value?: string | redacted.Redacted<string>;
  IsValueSecret?: boolean;
}
export type ConnectionQueryStringParametersList = ConnectionQueryStringParameter[];
export type SensitiveString = string | redacted.Redacted<string>;
export interface ConnectionBodyParameter {
  Key?: string;
  Value?: string | redacted.Redacted<string>;
  IsValueSecret?: boolean;
}
export type ConnectionBodyParametersList = ConnectionBodyParameter[];
export interface ConnectionHttpParameters {
  HeaderParameters?: ConnectionHeaderParameter[];
  QueryStringParameters?: ConnectionQueryStringParameter[];
  BodyParameters?: ConnectionBodyParameter[];
}
export interface CreateConnectionOAuthRequestParameters {
  ClientParameters: CreateConnectionOAuthClientRequestParameters;
  AuthorizationEndpoint: string;
  HttpMethod: ConnectionOAuthHttpMethod;
  OAuthHttpParameters?: ConnectionHttpParameters;
}
export interface CreateConnectionApiKeyAuthRequestParameters {
  ApiKeyName: string;
  ApiKeyValue: string | redacted.Redacted<string>;
}
export type ResourceConfigurationArn = string;
export interface ConnectivityResourceConfigurationArn {
  ResourceConfigurationArn: string;
}
export interface ConnectivityResourceParameters {
  ResourceParameters: ConnectivityResourceConfigurationArn;
}
export interface CreateConnectionAuthRequestParameters {
  BasicAuthParameters?: CreateConnectionBasicAuthRequestParameters;
  OAuthParameters?: CreateConnectionOAuthRequestParameters;
  ApiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
  ConnectivityParameters?: ConnectivityResourceParameters;
}
export interface CreateConnectionRequest {
  Name: string;
  Description?: string;
  AuthorizationType: ConnectionAuthorizationType;
  AuthParameters: CreateConnectionAuthRequestParameters;
  InvocationConnectivityParameters?: ConnectivityResourceParameters;
  KmsKeyIdentifier?: string;
}
export type ConnectionState =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "AUTHORIZED"
  | "DEAUTHORIZED"
  | "AUTHORIZING"
  | "DEAUTHORIZING"
  | "ACTIVE"
  | "FAILED_CONNECTIVITY"
  | (string & {});
export interface CreateConnectionResponse {
  ConnectionArn?: string;
  ConnectionState?: ConnectionState;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export type EndpointName = string;
export type EndpointDescription = string;
export type HealthCheck = string;
export interface Primary {
  HealthCheck: string;
}
export type Route = string;
export interface Secondary {
  Route: string;
}
export interface FailoverConfig {
  Primary: Primary;
  Secondary: Secondary;
}
export interface RoutingConfig {
  FailoverConfig: FailoverConfig;
}
export type ReplicationState = "ENABLED" | "DISABLED" | (string & {});
export interface ReplicationConfig {
  State?: ReplicationState;
}
export type NonPartnerEventBusArn = string;
export interface EndpointEventBus {
  EventBusArn: string;
}
export type EndpointEventBusList = EndpointEventBus[];
export type IamRoleArn = string;
export interface CreateEndpointRequest {
  Name: string;
  Description?: string;
  RoutingConfig: RoutingConfig;
  ReplicationConfig?: ReplicationConfig;
  EventBuses: EndpointEventBus[];
  RoleArn?: string;
}
export type EndpointArn = string;
export type EndpointState =
  | "ACTIVE"
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
export interface CreateEndpointResponse {
  Name?: string;
  Arn?: string;
  RoutingConfig?: RoutingConfig;
  ReplicationConfig?: ReplicationConfig;
  EventBuses?: EndpointEventBus[];
  RoleArn?: string;
  State?: EndpointState;
}
export type EventBusName = string;
export type EventBusDescription = string;
export type ResourceArn = string;
export interface DeadLetterConfig {
  Arn?: string;
}
export type IncludeDetail = "NONE" | "FULL" | (string & {});
export type Level = "OFF" | "ERROR" | "INFO" | "TRACE" | (string & {});
export interface LogConfig {
  IncludeDetail?: IncludeDetail;
  Level?: Level;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateEventBusRequest {
  Name: string;
  EventSourceName?: string;
  Description?: string;
  KmsKeyIdentifier?: string;
  DeadLetterConfig?: DeadLetterConfig;
  LogConfig?: LogConfig;
  Tags?: Tag[];
}
export interface CreateEventBusResponse {
  EventBusArn?: string;
  Description?: string;
  KmsKeyIdentifier?: string;
  DeadLetterConfig?: DeadLetterConfig;
  LogConfig?: LogConfig;
}
export type AccountId = string;
export interface CreatePartnerEventSourceRequest {
  Name: string;
  Account: string;
}
export interface CreatePartnerEventSourceResponse {
  EventSourceArn?: string;
}
export interface DeactivateEventSourceRequest {
  Name: string;
}
export interface DeactivateEventSourceResponse {}
export interface DeauthorizeConnectionRequest {
  Name: string;
}
export interface DeauthorizeConnectionResponse {
  ConnectionArn?: string;
  ConnectionState?: ConnectionState;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  LastAuthorizedTime?: Date;
}
export interface DeleteApiDestinationRequest {
  Name: string;
}
export interface DeleteApiDestinationResponse {}
export interface DeleteArchiveRequest {
  ArchiveName: string;
}
export interface DeleteArchiveResponse {}
export interface DeleteConnectionRequest {
  Name: string;
}
export interface DeleteConnectionResponse {
  ConnectionArn?: string;
  ConnectionState?: ConnectionState;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  LastAuthorizedTime?: Date;
}
export interface DeleteEndpointRequest {
  Name: string;
}
export interface DeleteEndpointResponse {}
export interface DeleteEventBusRequest {
  Name: string;
}
export interface DeleteEventBusResponse {}
export interface DeletePartnerEventSourceRequest {
  Name: string;
  Account: string;
}
export interface DeletePartnerEventSourceResponse {}
export type RuleName = string;
export type EventBusNameOrArn = string;
export interface DeleteRuleRequest {
  Name: string;
  EventBusName?: string;
  Force?: boolean;
}
export interface DeleteRuleResponse {}
export interface DescribeApiDestinationRequest {
  Name: string;
}
export interface DescribeApiDestinationResponse {
  ApiDestinationArn?: string;
  Name?: string;
  Description?: string;
  ApiDestinationState?: ApiDestinationState;
  ConnectionArn?: string;
  InvocationEndpoint?: string;
  HttpMethod?: ApiDestinationHttpMethod;
  InvocationRateLimitPerSecond?: number;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export interface DescribeArchiveRequest {
  ArchiveName: string;
}
export interface DescribeArchiveResponse {
  ArchiveArn?: string;
  ArchiveName?: string;
  EventSourceArn?: string;
  Description?: string;
  EventPattern?: string;
  State?: ArchiveState;
  StateReason?: string;
  KmsKeyIdentifier?: string;
  RetentionDays?: number;
  SizeBytes?: number;
  EventCount?: number;
  CreationTime?: Date;
}
export interface DescribeConnectionRequest {
  Name: string;
}
export type ResourceAssociationArn = string;
export interface DescribeConnectionResourceParameters {
  ResourceConfigurationArn: string;
  ResourceAssociationArn: string;
}
export interface DescribeConnectionConnectivityParameters {
  ResourceParameters: DescribeConnectionResourceParameters;
}
export type ConnectionStateReason = string;
export type SecretsManagerSecretArn = string;
export interface ConnectionBasicAuthResponseParameters {
  Username?: string;
}
export interface ConnectionOAuthClientResponseParameters {
  ClientID?: string;
}
export interface ConnectionOAuthResponseParameters {
  ClientParameters?: ConnectionOAuthClientResponseParameters;
  AuthorizationEndpoint?: string;
  HttpMethod?: ConnectionOAuthHttpMethod;
  OAuthHttpParameters?: ConnectionHttpParameters;
}
export interface ConnectionApiKeyAuthResponseParameters {
  ApiKeyName?: string;
}
export interface ConnectionAuthResponseParameters {
  BasicAuthParameters?: ConnectionBasicAuthResponseParameters;
  OAuthParameters?: ConnectionOAuthResponseParameters;
  ApiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
  ConnectivityParameters?: DescribeConnectionConnectivityParameters;
}
export interface DescribeConnectionResponse {
  ConnectionArn?: string;
  Name?: string;
  Description?: string;
  InvocationConnectivityParameters?: DescribeConnectionConnectivityParameters;
  ConnectionState?: ConnectionState;
  StateReason?: string;
  AuthorizationType?: ConnectionAuthorizationType;
  SecretArn?: string;
  KmsKeyIdentifier?: string;
  AuthParameters?: ConnectionAuthResponseParameters;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  LastAuthorizedTime?: Date;
}
export type HomeRegion = string;
export interface DescribeEndpointRequest {
  Name: string;
  HomeRegion?: string;
}
export type EndpointId = string;
export type EndpointUrl = string;
export type EndpointStateReason = string;
export interface DescribeEndpointResponse {
  Name?: string;
  Description?: string;
  Arn?: string;
  RoutingConfig?: RoutingConfig;
  ReplicationConfig?: ReplicationConfig;
  EventBuses?: EndpointEventBus[];
  RoleArn?: string;
  EndpointId?: string;
  EndpointUrl?: string;
  State?: EndpointState;
  StateReason?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export interface DescribeEventBusRequest {
  Name?: string;
}
export type ManagedBy = string;
export interface DescribeEventBusResponse {
  Name?: string;
  Arn?: string;
  Description?: string;
  KmsKeyIdentifier?: string;
  DeadLetterConfig?: DeadLetterConfig;
  Policy?: string;
  LogConfig?: LogConfig;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  ManagedBy?: string;
}
export interface DescribeEventSourceRequest {
  Name: string;
}
export type EventSourceState = "PENDING" | "ACTIVE" | "DELETED" | (string & {});
export interface DescribeEventSourceResponse {
  Arn?: string;
  CreatedBy?: string;
  CreationTime?: Date;
  ExpirationTime?: Date;
  Name?: string;
  State?: EventSourceState;
}
export interface DescribePartnerEventSourceRequest {
  Name: string;
}
export interface DescribePartnerEventSourceResponse {
  Arn?: string;
  Name?: string;
}
export interface DescribeReplayRequest {
  ReplayName: string;
}
export type ReplayDescription = string;
export type Arn = string;
export type ReplayDestinationFilters = string[];
export interface ReplayDestination {
  Arn: string;
  FilterArns?: string[];
}
export interface DescribeReplayResponse {
  ReplayName?: string;
  ReplayArn?: string;
  Description?: string;
  State?: ReplayState;
  StateReason?: string;
  EventSourceArn?: string;
  Destination?: ReplayDestination;
  EventStartTime?: Date;
  EventEndTime?: Date;
  EventLastReplayedTime?: Date;
  ReplayStartTime?: Date;
  ReplayEndTime?: Date;
}
export interface DescribeRuleRequest {
  Name: string;
  EventBusName?: string;
}
export type RuleArn = string;
export type ScheduleExpression = string;
export type RuleState =
  | "ENABLED"
  | "DISABLED"
  | "ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS"
  | (string & {});
export type RuleDescription = string;
export type RoleArn = string;
export type CreatedBy = string;
export interface DescribeRuleResponse {
  Name?: string;
  Arn?: string;
  EventPattern?: string;
  ScheduleExpression?: string;
  State?: RuleState;
  Description?: string;
  RoleArn?: string;
  ManagedBy?: string;
  EventBusName?: string;
  CreatedBy?: string;
}
export interface DisableRuleRequest {
  Name: string;
  EventBusName?: string;
}
export interface DisableRuleResponse {}
export interface EnableRuleRequest {
  Name: string;
  EventBusName?: string;
}
export interface EnableRuleResponse {}
export type NextToken = string;
export type LimitMax100 = number;
export interface ListApiDestinationsRequest {
  NamePrefix?: string;
  ConnectionArn?: string;
  NextToken?: string;
  Limit?: number;
}
export interface ApiDestination {
  ApiDestinationArn?: string;
  Name?: string;
  ApiDestinationState?: ApiDestinationState;
  ConnectionArn?: string;
  InvocationEndpoint?: string;
  HttpMethod?: ApiDestinationHttpMethod;
  InvocationRateLimitPerSecond?: number;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export type ApiDestinationResponseList = ApiDestination[];
export interface ListApiDestinationsResponse {
  ApiDestinations?: ApiDestination[];
  NextToken?: string;
}
export interface ListArchivesRequest {
  NamePrefix?: string;
  EventSourceArn?: string;
  State?: ArchiveState;
  NextToken?: string;
  Limit?: number;
}
export interface Archive {
  ArchiveName?: string;
  EventSourceArn?: string;
  State?: ArchiveState;
  StateReason?: string;
  RetentionDays?: number;
  SizeBytes?: number;
  EventCount?: number;
  CreationTime?: Date;
}
export type ArchiveResponseList = Archive[];
export interface ListArchivesResponse {
  Archives?: Archive[];
  NextToken?: string;
}
export interface ListConnectionsRequest {
  NamePrefix?: string;
  ConnectionState?: ConnectionState;
  NextToken?: string;
  Limit?: number;
}
export interface Connection {
  ConnectionArn?: string;
  Name?: string;
  ConnectionState?: ConnectionState;
  StateReason?: string;
  AuthorizationType?: ConnectionAuthorizationType;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  LastAuthorizedTime?: Date;
}
export type ConnectionResponseList = Connection[];
export interface ListConnectionsResponse {
  Connections?: Connection[];
  NextToken?: string;
}
export interface ListEndpointsRequest {
  NamePrefix?: string;
  HomeRegion?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface Endpoint {
  Name?: string;
  Description?: string;
  Arn?: string;
  RoutingConfig?: RoutingConfig;
  ReplicationConfig?: ReplicationConfig;
  EventBuses?: EndpointEventBus[];
  RoleArn?: string;
  EndpointId?: string;
  EndpointUrl?: string;
  State?: EndpointState;
  StateReason?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
const Endpoint = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<Endpoint>;
export type EndpointList = Endpoint[];
export interface ListEndpointsResponse {
  Endpoints?: Endpoint[];
  NextToken?: string;
}
export interface ListEventBusesRequest {
  NamePrefix?: string;
  NextToken?: string;
  Limit?: number;
}
export interface EventBus {
  Name?: string;
  Arn?: string;
  Description?: string;
  Policy?: string;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  ManagedBy?: string;
}
export type EventBusList = EventBus[];
export interface ListEventBusesResponse {
  EventBuses?: EventBus[];
  NextToken?: string;
}
export type EventSourceNamePrefix = string;
export interface ListEventSourcesRequest {
  NamePrefix?: string;
  NextToken?: string;
  Limit?: number;
}
export interface EventSource {
  Arn?: string;
  CreatedBy?: string;
  CreationTime?: Date;
  ExpirationTime?: Date;
  Name?: string;
  State?: EventSourceState;
}
export type EventSourceList = EventSource[];
export interface ListEventSourcesResponse {
  EventSources?: EventSource[];
  NextToken?: string;
}
export interface ListPartnerEventSourceAccountsRequest {
  EventSourceName: string;
  NextToken?: string;
  Limit?: number;
}
export interface PartnerEventSourceAccount {
  Account?: string;
  CreationTime?: Date;
  ExpirationTime?: Date;
  State?: EventSourceState;
}
export type PartnerEventSourceAccountList = PartnerEventSourceAccount[];
export interface ListPartnerEventSourceAccountsResponse {
  PartnerEventSourceAccounts?: PartnerEventSourceAccount[];
  NextToken?: string;
}
export type PartnerEventSourceNamePrefix = string;
export interface ListPartnerEventSourcesRequest {
  NamePrefix: string;
  NextToken?: string;
  Limit?: number;
}
export interface PartnerEventSource {
  Arn?: string;
  Name?: string;
}
export type PartnerEventSourceList = PartnerEventSource[];
export interface ListPartnerEventSourcesResponse {
  PartnerEventSources?: PartnerEventSource[];
  NextToken?: string;
}
export interface ListReplaysRequest {
  NamePrefix?: string;
  State?: ReplayState;
  EventSourceArn?: string;
  NextToken?: string;
  Limit?: number;
}
export interface Replay {
  ReplayName?: string;
  EventSourceArn?: string;
  State?: ReplayState;
  StateReason?: string;
  EventStartTime?: Date;
  EventEndTime?: Date;
  EventLastReplayedTime?: Date;
  ReplayStartTime?: Date;
  ReplayEndTime?: Date;
}
export type ReplayList = Replay[];
export interface ListReplaysResponse {
  Replays?: Replay[];
  NextToken?: string;
}
export type TargetArn = string;
export interface ListRuleNamesByTargetRequest {
  TargetArn: string;
  EventBusName?: string;
  NextToken?: string;
  Limit?: number;
}
export type RuleNameList = string[];
export interface ListRuleNamesByTargetResponse {
  RuleNames?: string[];
  NextToken?: string;
}
export interface ListRulesRequest {
  NamePrefix?: string;
  EventBusName?: string;
  NextToken?: string;
  Limit?: number;
}
export interface Rule {
  Name?: string;
  Arn?: string;
  EventPattern?: string;
  State?: RuleState;
  Description?: string;
  ScheduleExpression?: string;
  RoleArn?: string;
  ManagedBy?: string;
  EventBusName?: string;
}
export type RuleResponseList = Rule[];
export interface ListRulesResponse {
  Rules?: Rule[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface ListTargetsByRuleRequest {
  Rule: string;
  EventBusName?: string;
  NextToken?: string;
  Limit?: number;
}
export type TargetId = string;
export type TargetInput = string;
export type TargetInputPath = string;
export type InputTransformerPathKey = string;
export type TransformerPaths = { [key: string]: string | undefined };
export type TransformerInput = string;
export interface InputTransformer {
  InputPathsMap?: { [key: string]: string | undefined };
  InputTemplate: string;
}
export type TargetPartitionKeyPath = string;
export interface KinesisParameters {
  PartitionKeyPath: string;
}
export type RunCommandTargetKey = string;
export type RunCommandTargetValue = string;
export type RunCommandTargetValues = string[];
export interface RunCommandTarget {
  Key: string;
  Values: string[];
}
export type RunCommandTargets = RunCommandTarget[];
export interface RunCommandParameters {
  RunCommandTargets: RunCommandTarget[];
}
export type LimitMin1 = number;
export type LaunchType = "EC2" | "FARGATE" | "EXTERNAL" | (string & {});
export type StringList = string[];
export type AssignPublicIp = "ENABLED" | "DISABLED" | (string & {});
export interface AwsVpcConfiguration {
  Subnets: string[];
  SecurityGroups?: string[];
  AssignPublicIp?: AssignPublicIp;
}
export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration;
}
export type CapacityProvider = string;
export type CapacityProviderStrategyItemWeight = number;
export type CapacityProviderStrategyItemBase = number;
export interface CapacityProviderStrategyItem {
  capacityProvider: string;
  weight?: number;
  base?: number;
}
export type CapacityProviderStrategy = CapacityProviderStrategyItem[];
export type PlacementConstraintType = "distinctInstance" | "memberOf" | (string & {});
export type PlacementConstraintExpression = string;
export interface PlacementConstraint {
  type?: PlacementConstraintType;
  expression?: string;
}
export type PlacementConstraints = PlacementConstraint[];
export type PlacementStrategyType = "random" | "spread" | "binpack" | (string & {});
export type PlacementStrategyField = string;
export interface PlacementStrategy {
  type?: PlacementStrategyType;
  field?: string;
}
export type PlacementStrategies = PlacementStrategy[];
export type PropagateTags = "TASK_DEFINITION" | (string & {});
export type ReferenceId = string;
export interface EcsParameters {
  TaskDefinitionArn: string;
  TaskCount?: number;
  LaunchType?: LaunchType;
  NetworkConfiguration?: NetworkConfiguration;
  PlatformVersion?: string;
  Group?: string;
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PlacementConstraints?: PlacementConstraint[];
  PlacementStrategy?: PlacementStrategy[];
  PropagateTags?: PropagateTags;
  ReferenceId?: string;
  Tags?: Tag[];
}
export interface BatchArrayProperties {
  Size?: number;
}
export interface BatchRetryStrategy {
  Attempts?: number;
}
export interface BatchParameters {
  JobDefinition: string;
  JobName: string;
  ArrayProperties?: BatchArrayProperties;
  RetryStrategy?: BatchRetryStrategy;
}
export type MessageGroupId = string;
export interface SqsParameters {
  MessageGroupId?: string;
}
export type PathParameter = string;
export type PathParameterList = string[];
export type HeaderValue = string;
export type HeaderParametersMap = { [key: string]: string | undefined };
export type QueryStringValue = string;
export type QueryStringParametersMap = { [key: string]: string | undefined };
export interface HttpParameters {
  PathParameterValues?: string[];
  HeaderParameters?: { [key: string]: string | undefined };
  QueryStringParameters?: { [key: string]: string | undefined };
}
export type RedshiftSecretManagerArn = string;
export type Database = string;
export type DbUser = string;
export type Sql = string | redacted.Redacted<string>;
export type StatementName = string;
export type Sqls = (string | redacted.Redacted<string>)[];
export interface RedshiftDataParameters {
  SecretManagerArn?: string;
  Database: string;
  DbUser?: string;
  Sql?: string | redacted.Redacted<string>;
  StatementName?: string;
  WithEvent?: boolean;
  Sqls?: (string | redacted.Redacted<string>)[];
}
export type SageMakerPipelineParameterName = string;
export type SageMakerPipelineParameterValue = string;
export interface SageMakerPipelineParameter {
  Name: string;
  Value: string;
}
export type SageMakerPipelineParameterList = SageMakerPipelineParameter[];
export interface SageMakerPipelineParameters {
  PipelineParameterList?: SageMakerPipelineParameter[];
}
export type MaximumRetryAttempts = number;
export type MaximumEventAgeInSeconds = number;
export interface RetryPolicy {
  MaximumRetryAttempts?: number;
  MaximumEventAgeInSeconds?: number;
}
export type GraphQLOperation = string | redacted.Redacted<string>;
export interface AppSyncParameters {
  GraphQLOperation?: string | redacted.Redacted<string>;
}
export interface Target {
  Id: string;
  Arn: string;
  RoleArn?: string;
  Input?: string;
  InputPath?: string;
  InputTransformer?: InputTransformer;
  KinesisParameters?: KinesisParameters;
  RunCommandParameters?: RunCommandParameters;
  EcsParameters?: EcsParameters;
  BatchParameters?: BatchParameters;
  SqsParameters?: SqsParameters;
  HttpParameters?: HttpParameters;
  RedshiftDataParameters?: RedshiftDataParameters;
  SageMakerPipelineParameters?: SageMakerPipelineParameters;
  DeadLetterConfig?: DeadLetterConfig;
  RetryPolicy?: RetryPolicy;
  AppSyncParameters?: AppSyncParameters;
}
export type TargetList = Target[];
export interface ListTargetsByRuleResponse {
  Targets?: Target[];
  NextToken?: string;
}
export type EventTime = Date;
export type EventResource = string;
export type EventResourceList = string[];
export type NonPartnerEventBusNameOrArn = string;
export type TraceHeader = string;
export interface PutEventsRequestEntry {
  Time?: Date;
  Source?: string;
  Resources?: string[];
  DetailType?: string;
  Detail?: string;
  EventBusName?: string;
  TraceHeader?: string;
}
export type PutEventsRequestEntryList = PutEventsRequestEntry[];
export interface PutEventsRequest {
  Entries: PutEventsRequestEntry[];
  EndpointId?: string;
}
export type EventId = string;
export type ErrorCode = string;
export type ErrorMessage = string;
export interface PutEventsResultEntry {
  EventId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type PutEventsResultEntryList = PutEventsResultEntry[];
export interface PutEventsResponse {
  FailedEntryCount?: number;
  Entries?: PutEventsResultEntry[];
}
export interface PutPartnerEventsRequestEntry {
  Time?: Date;
  Source?: string;
  Resources?: string[];
  DetailType?: string;
  Detail?: string;
}
export type PutPartnerEventsRequestEntryList = PutPartnerEventsRequestEntry[];
export interface PutPartnerEventsRequest {
  Entries: PutPartnerEventsRequestEntry[];
}
export interface PutPartnerEventsResultEntry {
  EventId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type PutPartnerEventsResultEntryList = PutPartnerEventsResultEntry[];
export interface PutPartnerEventsResponse {
  FailedEntryCount?: number;
  Entries?: PutPartnerEventsResultEntry[];
}
export type NonPartnerEventBusName = string;
export type Action = string;
export type Principal = string;
export type StatementId = string;
export interface Condition {
  Type: string;
  Key: string;
  Value: string;
}
export interface PutPermissionRequest {
  EventBusName?: string;
  Action?: string;
  Principal?: string;
  StatementId?: string;
  Condition?: Condition;
  Policy?: string;
}
export interface PutPermissionResponse {}
export interface PutRuleRequest {
  Name: string;
  ScheduleExpression?: string;
  EventPattern?: string;
  State?: RuleState;
  Description?: string;
  RoleArn?: string;
  Tags?: Tag[];
  EventBusName?: string;
}
export interface PutRuleResponse {
  RuleArn?: string;
}
export interface PutTargetsRequest {
  Rule: string;
  EventBusName?: string;
  Targets: Target[];
}
export interface PutTargetsResultEntry {
  TargetId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type PutTargetsResultEntryList = PutTargetsResultEntry[];
export interface PutTargetsResponse {
  FailedEntryCount?: number;
  FailedEntries?: PutTargetsResultEntry[];
}
export interface RemovePermissionRequest {
  StatementId?: string;
  RemoveAllPermissions?: boolean;
  EventBusName?: string;
}
export interface RemovePermissionResponse {}
export type TargetIdList = string[];
export interface RemoveTargetsRequest {
  Rule: string;
  EventBusName?: string;
  Ids: string[];
  Force?: boolean;
}
export interface RemoveTargetsResultEntry {
  TargetId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type RemoveTargetsResultEntryList = RemoveTargetsResultEntry[];
export interface RemoveTargetsResponse {
  FailedEntryCount?: number;
  FailedEntries?: RemoveTargetsResultEntry[];
}
export interface StartReplayRequest {
  ReplayName: string;
  Description?: string;
  EventSourceArn: string;
  EventStartTime: Date;
  EventEndTime: Date;
  Destination: ReplayDestination;
}
export interface StartReplayResponse {
  ReplayArn?: string;
  State?: ReplayState;
  StateReason?: string;
  ReplayStartTime?: Date;
}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export interface TestEventPatternRequest {
  EventPattern: string;
  Event: string;
}
export interface TestEventPatternResponse {
  Result?: boolean;
}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateApiDestinationRequest {
  Name: string;
  Description?: string;
  ConnectionArn?: string;
  InvocationEndpoint?: string;
  HttpMethod?: ApiDestinationHttpMethod;
  InvocationRateLimitPerSecond?: number;
}
export interface UpdateApiDestinationResponse {
  ApiDestinationArn?: string;
  ApiDestinationState?: ApiDestinationState;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export interface UpdateArchiveRequest {
  ArchiveName: string;
  Description?: string;
  EventPattern?: string;
  RetentionDays?: number;
  KmsKeyIdentifier?: string;
}
export interface UpdateArchiveResponse {
  ArchiveArn?: string;
  State?: ArchiveState;
  StateReason?: string;
  CreationTime?: Date;
}
export interface UpdateConnectionBasicAuthRequestParameters {
  Username?: string;
  Password?: string | redacted.Redacted<string>;
}
export interface UpdateConnectionOAuthClientRequestParameters {
  ClientID?: string;
  ClientSecret?: string | redacted.Redacted<string>;
}
export interface UpdateConnectionOAuthRequestParameters {
  ClientParameters?: UpdateConnectionOAuthClientRequestParameters;
  AuthorizationEndpoint?: string;
  HttpMethod?: ConnectionOAuthHttpMethod;
  OAuthHttpParameters?: ConnectionHttpParameters;
}
export interface UpdateConnectionApiKeyAuthRequestParameters {
  ApiKeyName?: string;
  ApiKeyValue?: string | redacted.Redacted<string>;
}
export interface UpdateConnectionAuthRequestParameters {
  BasicAuthParameters?: UpdateConnectionBasicAuthRequestParameters;
  OAuthParameters?: UpdateConnectionOAuthRequestParameters;
  ApiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
  ConnectivityParameters?: ConnectivityResourceParameters;
}
export interface UpdateConnectionRequest {
  Name: string;
  Description?: string;
  AuthorizationType?: ConnectionAuthorizationType;
  AuthParameters?: UpdateConnectionAuthRequestParameters;
  InvocationConnectivityParameters?: ConnectivityResourceParameters;
  KmsKeyIdentifier?: string;
}
export interface UpdateConnectionResponse {
  ConnectionArn?: string;
  ConnectionState?: ConnectionState;
  CreationTime?: Date;
  LastModifiedTime?: Date;
  LastAuthorizedTime?: Date;
}
export interface UpdateEndpointRequest {
  Name: string;
  Description?: string;
  RoutingConfig?: RoutingConfig;
  ReplicationConfig?: ReplicationConfig;
  EventBuses?: EndpointEventBus[];
  RoleArn?: string;
}
export interface UpdateEndpointResponse {
  Name?: string;
  Arn?: string;
  RoutingConfig?: RoutingConfig;
  ReplicationConfig?: ReplicationConfig;
  EventBuses?: EndpointEventBus[];
  RoleArn?: string;
  EndpointId?: string;
  EndpointUrl?: string;
  State?: EndpointState;
}
export interface UpdateEventBusRequest {
  Name?: string;
  KmsKeyIdentifier?: string;
  Description?: string;
  DeadLetterConfig?: DeadLetterConfig;
  LogConfig?: LogConfig;
}
export interface UpdateEventBusResponse {
  Arn?: string;
  Name?: string;
  KmsKeyIdentifier?: string;
  Description?: string;
  DeadLetterConfig?: DeadLetterConfig;
  LogConfig?: LogConfig;
}
export type ActivateEventSourceError =
  | ConcurrentModificationException
  | InternalException
  | InvalidStateException
  | OperationDisabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Activates a partner event source that has been deactivated. Once activated, your matching
 * event bus will start receiving events from the event source.
 */
export const activateEventSource: API.OperationMethod<
  ActivateEventSourceRequest,
  ActivateEventSourceResponse,
  ActivateEventSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<ActivateEventSourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<ActivateEventSourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    InvalidStateException,
    OperationDisabledException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ActivateEventSource",
}));

export type CancelReplayError =
  | ConcurrentModificationException
  | IllegalStatusException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Cancels the specified replay.
 */
export const cancelReplay: API.OperationMethod<
  CancelReplayRequest,
  CancelReplayResponse,
  CancelReplayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<CancelReplayRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<CancelReplayResponse>,
  errors: [
    ConcurrentModificationException,
    IllegalStatusException,
    InternalException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelReplay",
}));

export type CreateApiDestinationError =
  | InternalException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an API destination, which is an HTTP invocation endpoint configured as a target
 * for events.
 *
 * API destinations do not support private destinations, such as interface VPC
 * endpoints.
 *
 * For more information, see API destinations in the
 * *EventBridge User Guide*.
 */
export const createApiDestination: API.OperationMethod<
  CreateApiDestinationRequest,
  CreateApiDestinationResponse,
  CreateApiDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<CreateApiDestinationRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<CreateApiDestinationResponse>,
  errors: [
    InternalException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApiDestination",
}));

export type CreateArchiveError =
  | ConcurrentModificationException
  | InternalException
  | InvalidEventPatternException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an archive of events with the specified settings. When you create an archive,
 * incoming events might not immediately start being sent to the archive. Allow a short period of
 * time for changes to take effect. If you do not specify a pattern to filter events sent to the
 * archive, all events are sent to the archive except replayed events. Replayed events are not
 * sent to an archive.
 *
 * If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a
 * customer managed key for any archives for the event bus as well.
 *
 * For more information, see Encrypting archives in the *Amazon EventBridge User Guide*.
 */
export const createArchive: API.OperationMethod<
  CreateArchiveRequest,
  CreateArchiveResponse,
  CreateArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<CreateArchiveRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<CreateArchiveResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    InvalidEventPatternException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateArchive",
}));

export type CreateConnectionError =
  | AccessDeniedException
  | InternalException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a connection. A connection defines the authorization type and credentials to use
 * for authorization with an API destination HTTP endpoint.
 *
 * For more information, see Connections for endpoint targets in the *Amazon EventBridge User Guide*.
 */
export const createConnection: API.OperationMethod<
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<CreateConnectionRequest>,
  output: __S(22, __c2, 6) as any as S.Schema<CreateConnectionResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnection",
}));

export type CreateEndpointError =
  | InternalException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | CommonErrors;
/**
 * Creates a global endpoint. Global endpoints improve your application's availability by
 * making it regional-fault tolerant. To do this, you define a primary and secondary Region with
 * event buses in each Region. You also create a Amazon Route 53 health check that will
 * tell EventBridge to route events to the secondary Region when an "unhealthy" state is
 * encountered and events will be routed back to the primary Region when the health check reports
 * a "healthy" state.
 */
export const createEndpoint: API.OperationMethod<
  CreateEndpointRequest,
  CreateEndpointResponse,
  CreateEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<CreateEndpointRequest>,
  output: __S(31, __c3, 7) as any as S.Schema<CreateEndpointResponse>,
  errors: [InternalException, LimitExceededException, ResourceAlreadyExistsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEndpoint",
}));

export type CreateEventBusError =
  | ConcurrentModificationException
  | InternalException
  | InvalidStateException
  | LimitExceededException
  | OperationDisabledException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a new event bus within your account. This can be a custom event bus which you can
 * use to receive events from your custom applications and services, or it can be a partner event
 * bus which can be matched to a partner event source.
 */
export const createEventBus: API.OperationMethod<
  CreateEventBusRequest,
  CreateEventBusResponse,
  CreateEventBusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<CreateEventBusRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<CreateEventBusResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    InvalidStateException,
    LimitExceededException,
    OperationDisabledException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEventBus",
}));

export type CreatePartnerEventSourceError =
  | ConcurrentModificationException
  | InternalException
  | LimitExceededException
  | OperationDisabledException
  | ResourceAlreadyExistsException
  | CommonErrors;
/**
 * Called by an SaaS partner to create a partner event source. This operation is not used by
 * Amazon Web Services customers.
 *
 * Each partner event source can be used by one Amazon Web Services account to create a
 * matching partner event bus in that Amazon Web Services account. A SaaS partner must create one
 * partner event source for each Amazon Web Services account that wants to receive those event
 * types.
 *
 * A partner event source creates events based on resources within the SaaS partner's service
 * or application.
 *
 * An Amazon Web Services account that creates a partner event bus that matches the partner
 * event source can use that event bus to receive events from the partner, and then process them
 * using Amazon Web Services Events rules and targets.
 *
 * Partner event source names follow this format:
 *
 * *partner_name*\/*event_namespace*\/*event_name*
 *
 * - *partner_name* is determined during partner registration, and
 * identifies the partner to Amazon Web Services customers.
 *
 * - *event_namespace* is determined by the partner, and is a way for
 * the partner to categorize their events.
 *
 * - *event_name* is determined by the partner, and should uniquely
 * identify an event-generating resource within the partner system.
 *
 * The *event_name* must be unique across all Amazon Web Services
 * customers. This is because the event source is a shared resource between the partner and
 * customer accounts, and each partner event source unique in the partner account.
 *
 * The combination of *event_namespace* and
 * *event_name* should help Amazon Web Services customers decide whether to
 * create an event bus to receive these events.
 */
export const createPartnerEventSource: API.OperationMethod<
  CreatePartnerEventSourceRequest,
  CreatePartnerEventSourceResponse,
  CreatePartnerEventSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<CreatePartnerEventSourceRequest>,
  output: __S(39, __c4, 7) as any as S.Schema<CreatePartnerEventSourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    LimitExceededException,
    OperationDisabledException,
    ResourceAlreadyExistsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePartnerEventSource",
}));

export type DeactivateEventSourceError =
  | ConcurrentModificationException
  | InternalException
  | InvalidStateException
  | OperationDisabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * You can use this operation to temporarily stop receiving events from the specified partner
 * event source. The matching event bus is not deleted.
 *
 * When you deactivate a partner event source, the source goes into PENDING state. If it
 * remains in PENDING state for more than two weeks, it is deleted.
 *
 * To activate a deactivated partner event source, use ActivateEventSource.
 */
export const deactivateEventSource: API.OperationMethod<
  DeactivateEventSourceRequest,
  DeactivateEventSourceResponse,
  DeactivateEventSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<DeactivateEventSourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeactivateEventSourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    InvalidStateException,
    OperationDisabledException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeactivateEventSource",
}));

export type DeauthorizeConnectionError =
  | ConcurrentModificationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes all authorization parameters from the connection. This lets you remove the secret
 * from the connection so you can reuse it without having to create a new connection.
 */
export const deauthorizeConnection: API.OperationMethod<
  DeauthorizeConnectionRequest,
  DeauthorizeConnectionResponse,
  DeauthorizeConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41, __c5, 1) as any as S.Schema<DeauthorizeConnectionRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<DeauthorizeConnectionResponse>,
  errors: [ConcurrentModificationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeauthorizeConnection",
}));

export type DeleteApiDestinationError =
  | ConcurrentModificationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified API destination.
 */
export const deleteApiDestination: API.OperationMethod<
  DeleteApiDestinationRequest,
  DeleteApiDestinationResponse,
  DeleteApiDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<DeleteApiDestinationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeleteApiDestinationResponse>,
  errors: [ConcurrentModificationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApiDestination",
}));

export type DeleteArchiveError =
  | ConcurrentModificationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified archive.
 */
export const deleteArchive: API.OperationMethod<
  DeleteArchiveRequest,
  DeleteArchiveResponse,
  DeleteArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<DeleteArchiveRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<DeleteArchiveResponse>,
  errors: [ConcurrentModificationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteArchive",
}));

export type DeleteConnectionError =
  | ConcurrentModificationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a connection.
 */
export const deleteConnection: API.OperationMethod<
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46, __c5, 6) as any as S.Schema<DeleteConnectionRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<DeleteConnectionResponse>,
  errors: [ConcurrentModificationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnection",
}));

export type DeleteEndpointError =
  | ConcurrentModificationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Delete an existing global endpoint. For more information about global endpoints, see
 * Making applications Regional-fault tolerant with global endpoints and event
 * replication in the
 * *Amazon EventBridge User Guide*
 * .
 */
export const deleteEndpoint: API.OperationMethod<
  DeleteEndpointRequest,
  DeleteEndpointResponse,
  DeleteEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<DeleteEndpointRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<DeleteEndpointResponse>,
  errors: [ConcurrentModificationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEndpoint",
}));

export type DeleteEventBusError =
  | ConcurrentModificationException
  | InternalException
  | ResourceNotFoundException
  | EventBusHasRules
  | CommonErrors;
/**
 * Deletes the specified custom event bus or partner event bus. All rules associated with
 * this event bus need to be deleted. You can't delete your account's default event bus.
 */
export const deleteEventBus: API.OperationMethod<
  DeleteEventBusRequest,
  DeleteEventBusResponse,
  DeleteEventBusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<DeleteEventBusRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<DeleteEventBusResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    ResourceNotFoundException,
    EventBusHasRules,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventBus",
}));

export type DeletePartnerEventSourceError =
  | ConcurrentModificationException
  | InternalException
  | OperationDisabledException
  | CommonErrors;
/**
 * This operation is used by SaaS partners to delete a partner event source. This operation
 * is not used by Amazon Web Services customers.
 *
 * When you delete an event source, the status of the corresponding partner event bus in the
 * Amazon Web Services customer account becomes DELETED.
 */
export const deletePartnerEventSource: API.OperationMethod<
  DeletePartnerEventSourceRequest,
  DeletePartnerEventSourceResponse,
  DeletePartnerEventSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<DeletePartnerEventSourceRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<DeletePartnerEventSourceResponse>,
  errors: [ConcurrentModificationException, InternalException, OperationDisabledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePartnerEventSource",
}));

export type DeleteRuleError =
  | ConcurrentModificationException
  | InternalException
  | ManagedRuleException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified rule.
 *
 * Before you can delete the rule, you must remove all targets, using RemoveTargets.
 *
 * When you delete a rule, incoming events might continue to match to the deleted rule. Allow
 * a short period of time for changes to take effect.
 *
 * If you call delete rule multiple times for the same rule, all calls will succeed. When you
 * call delete rule for a non-existent custom eventbus, `ResourceNotFoundException` is
 * returned.
 *
 * Managed rules are rules created and managed by another Amazon Web Services service on your
 * behalf. These rules are created by those other Amazon Web Services services to support
 * functionality in those services. You can delete these rules using the `Force`
 * option, but you should do so only if you are sure the other service is not still using that
 * rule.
 */
export const deleteRule: API.OperationMethod<
  DeleteRuleRequest,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<DeleteRuleRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<DeleteRuleResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    ManagedRuleException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRule",
}));

export type DescribeApiDestinationError =
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves details about an API destination.
 */
export const describeApiDestination: API.OperationMethod<
  DescribeApiDestinationRequest,
  DescribeApiDestinationResponse,
  DescribeApiDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<DescribeApiDestinationRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<DescribeApiDestinationResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApiDestination",
}));

export type DescribeArchiveError =
  | InternalException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves details about an archive.
 */
export const describeArchive: API.OperationMethod<
  DescribeArchiveRequest,
  DescribeArchiveResponse,
  DescribeArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<DescribeArchiveRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<DescribeArchiveResponse>,
  errors: [InternalException, ResourceAlreadyExistsException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeArchive",
}));

export type DescribeConnectionError = InternalException | ResourceNotFoundException | CommonErrors;
/**
 * Retrieves details about a connection.
 */
export const describeConnection: API.OperationMethod<
  DescribeConnectionRequest,
  DescribeConnectionResponse,
  DescribeConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<DescribeConnectionRequest>,
  output: __S(65, __c8, 1) as any as S.Schema<DescribeConnectionResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnection",
}));

export type DescribeEndpointError = InternalException | ResourceNotFoundException | CommonErrors;
/**
 * Get the information about an existing global endpoint. For more information about global
 * endpoints, see Making applications
 * Regional-fault tolerant with global endpoints and event replication in the
 *
 * *Amazon EventBridge User Guide*
 * .
 */
export const describeEndpoint: API.OperationMethod<
  DescribeEndpointRequest,
  DescribeEndpointResponse,
  DescribeEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<DescribeEndpointRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<DescribeEndpointResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEndpoint",
}));

export type DescribeEventBusError = InternalException | ResourceNotFoundException | CommonErrors;
/**
 * Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the
 * associated policy. For custom event buses and partner event buses, it displays the name, ARN,
 * policy, state, and creation time.
 *
 * To enable your account to receive events from other accounts on its default event bus,
 * use PutPermission.
 *
 * For more information about partner event buses, see CreateEventBus.
 */
export const describeEventBus: API.OperationMethod<
  DescribeEventBusRequest,
  DescribeEventBusResponse,
  DescribeEventBusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68, __c8, 4) as any as S.Schema<DescribeEventBusRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<DescribeEventBusResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventBus",
}));

export type DescribeEventSourceError =
  | InternalException
  | OperationDisabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This operation lists details about a partner event source that is shared with your
 * account.
 */
export const describeEventSource: API.OperationMethod<
  DescribeEventSourceRequest,
  DescribeEventSourceResponse,
  DescribeEventSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<DescribeEventSourceRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<DescribeEventSourceResponse>,
  errors: [InternalException, OperationDisabledException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventSource",
}));

export type DescribePartnerEventSourceError =
  | InternalException
  | OperationDisabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * An SaaS partner can use this operation to list details about a partner event source that
 * they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use DescribeEventSource to see details about a partner event source that is shared with
 * them.
 */
export const describePartnerEventSource: API.OperationMethod<
  DescribePartnerEventSourceRequest,
  DescribePartnerEventSourceResponse,
  DescribePartnerEventSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<DescribePartnerEventSourceRequest>,
  output: __S(73, __c9, 1) as any as S.Schema<DescribePartnerEventSourceResponse>,
  errors: [InternalException, OperationDisabledException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePartnerEventSource",
}));

export type DescribeReplayError = InternalException | ResourceNotFoundException | CommonErrors;
/**
 * Retrieves details about a replay. Use `DescribeReplay` to determine the
 * progress of a running replay. A replay processes events to replay based on the time in the
 * event, and replays them using 1 minute intervals. If you use `StartReplay` and
 * specify an `EventStartTime` and an `EventEndTime` that covers a 20
 * minute time range, the events are replayed from the first minute of that 20 minute range
 * first. Then the events from the second minute are replayed. You can use
 * `DescribeReplay` to determine the progress of a replay. The value returned for
 * `EventLastReplayedTime` indicates the time within the specified time range
 * associated with the last event replayed.
 */
export const describeReplay: API.OperationMethod<
  DescribeReplayRequest,
  DescribeReplayResponse,
  DescribeReplayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<DescribeReplayRequest>,
  output: __S(77, __c9, 5) as any as S.Schema<DescribeReplayResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReplay",
}));

export type DescribeRuleError = InternalException | ResourceNotFoundException | CommonErrors;
/**
 * Describes the specified rule.
 *
 * DescribeRule does not list the targets of a rule. To see the targets associated with a
 * rule, use ListTargetsByRule.
 */
export const describeRule: API.OperationMethod<
  DescribeRuleRequest,
  DescribeRuleResponse,
  DescribeRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<DescribeRuleRequest>,
  output: __S(79, __c9, 7) as any as S.Schema<DescribeRuleResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRule",
}));

export type DisableRuleError =
  | ConcurrentModificationException
  | InternalException
  | ManagedRuleException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disables the specified rule. A disabled rule won't match any events, and won't
 * self-trigger if it has a schedule expression.
 *
 * When you disable a rule, incoming events might continue to match to the disabled rule.
 * Allow a short period of time for changes to take effect.
 */
export const disableRule: API.OperationMethod<
  DisableRuleRequest,
  DisableRuleResponse,
  DisableRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<DisableRuleRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<DisableRuleResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    ManagedRuleException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableRule",
}));

export type EnableRuleError =
  | ConcurrentModificationException
  | InternalException
  | ManagedRuleException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Enables the specified rule. If the rule does not exist, the operation fails.
 *
 * When you enable a rule, incoming events might not immediately start matching to a newly
 * enabled rule. Allow a short period of time for changes to take effect.
 */
export const enableRule: API.OperationMethod<
  EnableRuleRequest,
  EnableRuleResponse,
  EnableRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<EnableRuleRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<EnableRuleResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    ManagedRuleException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableRule",
}));

export type ListApiDestinationsError = InternalException | CommonErrors;
/**
 * Retrieves a list of API destination in the account in the current Region.
 */
export const listApiDestinations: API.OperationMethod<
  ListApiDestinationsRequest,
  ListApiDestinationsResponse,
  ListApiDestinationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82, __c10, 2) as any as S.Schema<ListApiDestinationsRequest>,
  output: __S(85, __c10, 5) as any as S.Schema<ListApiDestinationsResponse>,
  errors: [InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApiDestinations",
}));

export type ListArchivesError = InternalException | ResourceNotFoundException | CommonErrors;
/**
 * Lists your archives. You can either list all the archives or you can provide a prefix to
 * match to the archive names. Filter parameters are exclusive.
 */
export const listArchives: API.OperationMethod<
  ListArchivesRequest,
  ListArchivesResponse,
  ListArchivesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<ListArchivesRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<ListArchivesResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListArchives",
}));

export type ListConnectionsError = InternalException | CommonErrors;
/**
 * Retrieves a list of connections from the account.
 */
export const listConnections: API.OperationMethod<
  ListConnectionsRequest,
  ListConnectionsResponse,
  ListConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<ListConnectionsRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<ListConnectionsResponse>,
  errors: [InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnections",
}));

export type ListEndpointsError = InternalException | CommonErrors;
/**
 * List the global endpoints associated with this account. For more information about global
 * endpoints, see Making applications
 * Regional-fault tolerant with global endpoints and event replication in the
 *
 * *Amazon EventBridge User Guide*
 * .
 */
export const listEndpoints: API.OperationMethod<
  ListEndpointsRequest,
  ListEndpointsResponse,
  ListEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<ListEndpointsRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<ListEndpointsResponse>,
  errors: [InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEndpoints",
}));

export type ListEventBusesError = InternalException | CommonErrors;
/**
 * Lists all the event buses in your account, including the default event bus, custom event
 * buses, and partner event buses.
 */
export const listEventBuses: API.OperationMethod<
  ListEventBusesRequest,
  ListEventBusesResponse,
  ListEventBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<ListEventBusesRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<ListEventBusesResponse>,
  errors: [InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventBuses",
}));

export type ListEventSourcesError = InternalException | OperationDisabledException | CommonErrors;
/**
 * You can use this to see all the partner event sources that have been shared with your
 * Amazon Web Services account. For more information about partner event sources, see CreateEventBus.
 */
export const listEventSources: API.OperationMethod<
  ListEventSourcesRequest,
  ListEventSourcesResponse,
  ListEventSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<ListEventSourcesRequest>,
  output: __S(105, __c13, 1) as any as S.Schema<ListEventSourcesResponse>,
  errors: [InternalException, OperationDisabledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventSources",
}));

export type ListPartnerEventSourceAccountsError =
  | InternalException
  | OperationDisabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * An SaaS partner can use this operation to display the Amazon Web Services account ID that a
 * particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.
 */
export const listPartnerEventSourceAccounts: API.OperationMethod<
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsResponse,
  ListPartnerEventSourceAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<ListPartnerEventSourceAccountsRequest>,
  output: __S(109, __c13, 5) as any as S.Schema<ListPartnerEventSourceAccountsResponse>,
  errors: [InternalException, OperationDisabledException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPartnerEventSourceAccounts",
}));

export type ListPartnerEventSourcesError =
  | InternalException
  | OperationDisabledException
  | CommonErrors;
/**
 * An SaaS partner can use this operation to list all the partner event source names that
 * they have created. This operation is not used by Amazon Web Services customers.
 */
export const listPartnerEventSources: API.OperationMethod<
  ListPartnerEventSourcesRequest,
  ListPartnerEventSourcesResponse,
  ListPartnerEventSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<ListPartnerEventSourcesRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<ListPartnerEventSourcesResponse>,
  errors: [InternalException, OperationDisabledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPartnerEventSources",
}));

export type ListReplaysError = InternalException | CommonErrors;
/**
 * Lists your replays. You can either list all the replays or you can provide a prefix to
 * match to the replay names. Filter parameters are exclusive.
 */
export const listReplays: API.OperationMethod<
  ListReplaysRequest,
  ListReplaysResponse,
  ListReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<ListReplaysRequest>,
  output: __S(117, __c14, 5) as any as S.Schema<ListReplaysResponse>,
  errors: [InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReplays",
}));

export type ListRuleNamesByTargetError =
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the rules for the specified target. You can see which of the rules in Amazon
 * EventBridge can invoke a specific target in your account.
 *
 * The maximum number of results per page for requests is 100.
 */
export const listRuleNamesByTarget: API.OperationMethod<
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetResponse,
  ListRuleNamesByTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<ListRuleNamesByTargetRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<ListRuleNamesByTargetResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleNamesByTarget",
}));

export type ListRulesError = InternalException | ResourceNotFoundException | CommonErrors;
/**
 * Lists your Amazon EventBridge rules. You can either list all the rules or you can
 * provide a prefix to match to the rule names.
 *
 * The maximum number of results per page for requests is 100.
 *
 * ListRules does not list the targets of a rule. To see the targets associated with a rule,
 * use ListTargetsByRule.
 */
export const listRules: API.OperationMethod<
  ListRulesRequest,
  ListRulesResponse,
  ListRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<ListRulesRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<ListRulesResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRules",
}));

export type ListTagsForResourceError =
  | InternalException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Displays the tags associated with an EventBridge resource. In EventBridge, rules and event
 * buses can be tagged.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(125, __c15, 5) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalException, ResourceNotFoundException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTargetsByRuleError = InternalException | ResourceNotFoundException | CommonErrors;
/**
 * Lists the targets assigned to the specified rule.
 *
 * The maximum number of results per page for requests is 100.
 */
export const listTargetsByRule: API.OperationMethod<
  ListTargetsByRuleRequest,
  ListTargetsByRuleResponse,
  ListTargetsByRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<ListTargetsByRuleRequest>,
  output: __S(156, __c19, 4) as any as S.Schema<ListTargetsByRuleResponse>,
  errors: [InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargetsByRule",
}));

export type PutEventsError = InternalException | CommonErrors;
/**
 * Sends custom events to Amazon EventBridge so that they can be matched to rules.
 *
 * You can batch multiple event entries into one request for efficiency.
 * However, the total entry size must be less than 1MB. You can calculate the entry size before you send the events.
 * For more information, see Calculating PutEvents event entry
 * size in the
 * *Amazon EventBridge User Guide*
 * .
 *
 * PutEvents accepts the data in JSON format. For the JSON number (integer) data type, the
 * constraints are: a minimum value of -9,223,372,036,854,775,808 and a maximum value of
 * 9,223,372,036,854,775,807.
 *
 * PutEvents will only process nested JSON up to 1000 levels deep.
 */
export const putEvents: API.OperationMethod<
  PutEventsRequest,
  PutEventsResponse,
  PutEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<PutEventsRequest>,
  output: __S(162, __c20, 2) as any as S.Schema<PutEventsResponse>,
  errors: [InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEvents",
}));

export type PutPartnerEventsError = InternalException | OperationDisabledException | CommonErrors;
/**
 * This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.
 *
 * For information on calculating event batch size, see Calculating EventBridge PutEvents event
 * entry size in the *EventBridge User Guide*.
 */
export const putPartnerEvents: API.OperationMethod<
  PutPartnerEventsRequest,
  PutPartnerEventsResponse,
  PutPartnerEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<PutPartnerEventsRequest>,
  output: __S(168, __c21, 0) as any as S.Schema<PutPartnerEventsResponse>,
  errors: [InternalException, OperationDisabledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutPartnerEvents",
}));

export type PutPermissionError =
  | ConcurrentModificationException
  | InternalException
  | OperationDisabledException
  | PolicyLengthExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Running `PutPermission` permits the specified Amazon Web Services account or Amazon Web Services organization
 * to put events to the specified *event bus*. Amazon EventBridge rules in your account are triggered by these events arriving to an event bus in your
 * account.
 *
 * For another account to send events to your account, that external account must have an
 * EventBridge rule with your account's event bus as a target.
 *
 * To enable multiple Amazon Web Services accounts to put events to your event bus, run
 * `PutPermission` once for each of these accounts. Or, if all the accounts are
 * members of the same Amazon Web Services organization, you can run `PutPermission`
 * once specifying `Principal` as "*" and specifying the Amazon Web Services
 * organization ID in `Condition`, to grant permissions to all accounts in that
 * organization.
 *
 * If you grant permissions using an organization, then accounts in that organization must
 * specify a `RoleArn` with proper permissions when they use `PutTarget` to
 * add your account's event bus as a target. For more information, see Sending and
 * Receiving Events Between Amazon Web Services Accounts in the *Amazon EventBridge User Guide*.
 *
 * The permission policy on the event bus cannot exceed 10 KB in size.
 */
export const putPermission: API.OperationMethod<
  PutPermissionRequest,
  PutPermissionResponse,
  PutPermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(170, __c21, 2) as any as S.Schema<PutPermissionRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<PutPermissionResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    OperationDisabledException,
    PolicyLengthExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutPermission",
}));

export type PutRuleError =
  | ConcurrentModificationException
  | InternalException
  | InvalidEventPatternException
  | LimitExceededException
  | ManagedRuleException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates or updates the specified rule. Rules are enabled by default, or based on value of
 * the state. You can disable a rule using DisableRule.
 *
 * A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner
 * services or applications go to the matching partner event bus. If you have custom applications
 * or services, you can specify whether their events go to your default event bus or a custom
 * event bus that you have created. For more information, see CreateEventBus.
 *
 * If you are updating an existing rule, the rule is replaced with what you specify in this
 * `PutRule` command. If you omit arguments in `PutRule`, the old values
 * for those arguments are not kept. Instead, they are replaced with null values.
 *
 * When you create or update a rule, incoming events might not immediately start matching to
 * new or updated rules. Allow a short period of time for changes to take effect.
 *
 * A rule must contain at least an EventPattern or ScheduleExpression. Rules with
 * EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions
 * self-trigger based on the given schedule. A rule can have both an EventPattern and a
 * ScheduleExpression, in which case the rule triggers on matching events as well as on a
 * schedule.
 *
 * When you initially create a rule, you can optionally assign one or more tags to the rule.
 * Tags can help you organize and categorize your resources. You can also use them to scope user
 * permissions, by granting a user permission to access or change only rules with certain tag
 * values. To use the `PutRule` operation and assign tags, you must have both the
 * `events:PutRule` and `events:TagResource` permissions.
 *
 * If you are updating an existing rule, any tags you specify in the `PutRule`
 * operation are ignored. To update the tags of an existing rule, use TagResource and UntagResource.
 *
 * Most services in Amazon Web Services treat : or / as the same character in Amazon Resource
 * Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to
 * use the correct ARN characters when creating event patterns so that they match the ARN syntax
 * in the event you want to match.
 *
 * In EventBridge, it is possible to create rules that lead to infinite loops, where a rule
 * is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket,
 * and trigger software to change them to the desired state. If the rule is not written
 * carefully, the subsequent change to the ACLs fires the rule again, creating an infinite
 * loop.
 *
 * To prevent this, write the rules so that the triggered actions do not re-fire the same
 * rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead
 * of after any change.
 *
 * An infinite loop can quickly cause higher than expected charges. We recommend that you use
 * budgeting, which alerts you when charges exceed your specified limit. For more information,
 * see Managing Your Costs with
 * Budgets.
 *
 * To create a rule that filters for management events from Amazon Web Services services, see
 * Receiving read-only management events from Amazon Web Services services in the
 * *EventBridge User Guide*.
 */
export const putRule: API.OperationMethod<
  PutRuleRequest,
  PutRuleResponse,
  PutRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<PutRuleRequest>,
  output: __S(172, __c21, 4) as any as S.Schema<PutRuleResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    InvalidEventPatternException,
    LimitExceededException,
    ManagedRuleException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRule",
}));

export type PutTargetsError =
  | ConcurrentModificationException
  | InternalException
  | LimitExceededException
  | ManagedRuleException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds the specified targets to the specified rule, or updates the targets if they are
 * already associated with the rule.
 *
 * Targets are the resources that are invoked when a rule is triggered.
 *
 * The maximum number of entries per request is 10.
 *
 * Each rule can have up to five (5) targets associated with it at one time.
 *
 * For a list of services you can configure as targets for events, see EventBridge targets
 * in the
 * *Amazon EventBridge User Guide*
 * .
 *
 * Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The
 * built-in targets are:
 *
 * - `Amazon EBS CreateSnapshot API call`
 *
 * - `Amazon EC2 RebootInstances API call`
 *
 * - `Amazon EC2 StopInstances API call`
 *
 * - `Amazon EC2 TerminateInstances API call`
 *
 * For some target types, `PutTargets` provides target-specific parameters. If the
 * target is a Kinesis data stream, you can optionally specify which shard the event
 * goes to by using the `KinesisParameters` argument. To invoke a command on multiple
 * EC2 instances with one rule, you can use the `RunCommandParameters` field.
 *
 * To be able to make API calls against the resources that you own, Amazon EventBridge
 * needs the appropriate permissions:
 *
 * - For Lambda and Amazon SNS resources, EventBridge relies
 * on resource-based policies.
 *
 * - For EC2 instances, Kinesis Data Streams, Step Functions state machines and
 * API Gateway APIs, EventBridge relies on IAM roles that you specify in the
 * `RoleARN` argument in `PutTargets`.
 *
 * For more information, see Authentication
 * and Access Control in the
 * *Amazon EventBridge User Guide*
 * .
 *
 * If another Amazon Web Services account is in the same region and has granted you permission
 * (using `PutPermission`), you can send events to that account. Set that account's
 * event bus as a target of the rules in your account. To send the matched events to the other
 * account, specify that account's event bus as the `Arn` value when you run
 * `PutTargets`. If your account sends events to another account, your account is
 * charged for each sent event. Each event sent to another account is charged as a custom event.
 * The account receiving the event is not charged. For more information, see Amazon EventBridge Pricing.
 *
 * `Input`, `InputPath`, and `InputTransformer` are not
 * available with `PutTarget` if the target is an event bus of a different Amazon Web Services account.
 *
 * If you are setting the event bus of another account as the target, and that account
 * granted permission to your account through an organization instead of directly by the account
 * ID, then you must specify a `RoleArn` with proper permissions in the
 * `Target` structure. For more information, see Sending and
 * Receiving Events Between Amazon Web Services Accounts in the *Amazon EventBridge User Guide*.
 *
 * If you have an IAM role on a cross-account event bus target, a `PutTargets`
 * call without a role on the same target (same `Id` and `Arn`) will not
 * remove the role.
 *
 * For more information about enabling cross-account events, see PutPermission.
 *
 * **Input**, **InputPath**, and
 * **InputTransformer** are mutually exclusive and optional
 * parameters of a target. When a rule is triggered due to a matched event:
 *
 * - If none of the following arguments are specified for a target, then the entire event
 * is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or
 * Amazon ECS task, in which case nothing from the event is passed to the target).
 *
 * - If **Input** is specified in the form of valid JSON, then
 * the matched event is overridden with this constant.
 *
 * - If **InputPath** is specified in the form of JSONPath
 * (for example, `$.detail`), then only the part of the event specified in the
 * path is passed to the target (for example, only the detail part of the event is
 * passed).
 *
 * - If **InputTransformer** is specified, then one or more
 * specified JSONPaths are extracted from the event and used as values in a template that you
 * specify as the input to the target.
 *
 * When you specify `InputPath` or `InputTransformer`, you must use
 * JSON dot notation, not bracket notation.
 *
 * When you add targets to a rule and the associated rule triggers soon after, new or updated
 * targets might not be immediately invoked. Allow a short period of time for changes to take
 * effect.
 *
 * This action can partially fail if too many requests are made at the same time. If that
 * happens, `FailedEntryCount` is non-zero in the response and each entry in
 * `FailedEntries` provides the ID of the failed target and the error code.
 */
export const putTargets: API.OperationMethod<
  PutTargetsRequest,
  PutTargetsResponse,
  PutTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173, __c21, 5) as any as S.Schema<PutTargetsRequest>,
  output: __S(176, __c22, 0) as any as S.Schema<PutTargetsResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    LimitExceededException,
    ManagedRuleException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutTargets",
}));

export type RemovePermissionError =
  | ConcurrentModificationException
  | InternalException
  | OperationDisabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Revokes the permission of another Amazon Web Services account to be able to put events to
 * the specified event bus. Specify the account to revoke by the `StatementId` value
 * that you associated with the account when you granted it permission with
 * `PutPermission`. You can find the `StatementId` by using DescribeEventBus.
 */
export const removePermission: API.OperationMethod<
  RemovePermissionRequest,
  RemovePermissionResponse,
  RemovePermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177, __c22, 1) as any as S.Schema<RemovePermissionRequest>,
  output: __S(178, __c22, 2) as any as S.Schema<RemovePermissionResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    OperationDisabledException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemovePermission",
}));

export type RemoveTargetsError =
  | ConcurrentModificationException
  | InternalException
  | ManagedRuleException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes the specified targets from the specified rule. When the rule is triggered, those
 * targets are no longer be invoked.
 *
 * A successful execution of `RemoveTargets` doesn't guarantee all targets are
 * removed from the rule, it means that the target(s) listed in the request are removed.
 *
 * When you remove a target, when the associated rule triggers, removed targets might
 * continue to be invoked. Allow a short period of time for changes to take effect.
 *
 * This action can partially fail if too many requests are made at the same time. If that
 * happens, `FailedEntryCount` is non-zero in the response and each entry in
 * `FailedEntries` provides the ID of the failed target and the error code.
 *
 * The maximum number of entries per request is 10.
 */
export const removeTargets: API.OperationMethod<
  RemoveTargetsRequest,
  RemoveTargetsResponse,
  RemoveTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<RemoveTargetsRequest>,
  output: __S(176, __c22, 0) as any as S.Schema<RemoveTargetsResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    ManagedRuleException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTargets",
}));

export type StartReplayError =
  | InternalException
  | InvalidEventPatternException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Starts the specified replay. Events are not necessarily replayed in the exact same order
 * that they were added to the archive. A replay processes events to replay based on the time in
 * the event, and replays them using 1 minute intervals. If you specify an
 * `EventStartTime` and an `EventEndTime` that covers a 20 minute time
 * range, the events are replayed from the first minute of that 20 minute range first. Then the
 * events from the second minute are replayed. You can use `DescribeReplay` to
 * determine the progress of a replay. The value returned for `EventLastReplayedTime`
 * indicates the time within the specified time range associated with the last event
 * replayed.
 */
export const startReplay: API.OperationMethod<
  StartReplayRequest,
  StartReplayResponse,
  StartReplayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180, __c22, 4) as any as S.Schema<StartReplayRequest>,
  output: __S(181, __c22, 5) as any as S.Schema<StartReplayResponse>,
  errors: [
    InternalException,
    InvalidEventPatternException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReplay",
}));

export type TagResourceError =
  | ConcurrentModificationException
  | InternalException
  | ManagedRuleException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can
 * help you organize and categorize your resources. You can also use them to scope user
 * permissions by granting a user permission to access or change only resources with certain tag
 * values. In EventBridge, rules and event buses can be tagged.
 *
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as
 * strings of characters.
 *
 * You can use the `TagResource` action with a resource that already has tags. If
 * you specify a new tag key, this tag is appended to the list of tags associated with the
 * resource. If you specify a tag key that is already associated with the resource, the new tag
 * value that you specify replaces the previous value for that tag.
 *
 * You can associate as many as 50 tags with a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<TagResourceRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<TagResourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    ManagedRuleException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestEventPatternError = InternalException | InvalidEventPatternException | CommonErrors;
/**
 * Tests whether the specified event pattern matches the provided event.
 *
 * Most services in Amazon Web Services treat : or / as the same character in Amazon Resource
 * Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be
 * sure to use the correct ARN characters when creating event patterns so that they match the ARN
 * syntax in the event you want to match.
 */
export const testEventPattern: API.OperationMethod<
  TestEventPatternRequest,
  TestEventPatternResponse,
  TestEventPatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<TestEventPatternRequest>,
  output: __S(184, __c23, 0) as any as S.Schema<TestEventPatternResponse>,
  errors: [InternalException, InvalidEventPatternException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestEventPattern",
}));

export type UntagResourceError =
  | ConcurrentModificationException
  | InternalException
  | ManagedRuleException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge, rules and event buses can be tagged.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<UntagResourceRequest>,
  output: __S(45, __c5, 5) as any as S.Schema<UntagResourceResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    ManagedRuleException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateApiDestinationError =
  | ConcurrentModificationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an API destination.
 */
export const updateApiDestination: API.OperationMethod<
  UpdateApiDestinationRequest,
  UpdateApiDestinationResponse,
  UpdateApiDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186, __c23, 2) as any as S.Schema<UpdateApiDestinationRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<UpdateApiDestinationResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApiDestination",
}));

export type UpdateArchiveError =
  | ConcurrentModificationException
  | InternalException
  | InvalidEventPatternException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the specified archive.
 */
export const updateArchive: API.OperationMethod<
  UpdateArchiveRequest,
  UpdateArchiveResponse,
  UpdateArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<UpdateArchiveRequest>,
  output: __S(7, __c0, 7) as any as S.Schema<UpdateArchiveResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    InvalidEventPatternException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateArchive",
}));

export type UpdateConnectionError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates settings for a connection.
 */
export const updateConnection: API.OperationMethod<
  UpdateConnectionRequest,
  UpdateConnectionResponse,
  UpdateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193, __c24, 1) as any as S.Schema<UpdateConnectionRequest>,
  output: __S(47, __c5, 7) as any as S.Schema<UpdateConnectionResponse>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnection",
}));

export type UpdateEndpointError =
  | ConcurrentModificationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Update an existing endpoint. For more information about global endpoints, see Making
 * applications Regional-fault tolerant with global endpoints and event replication in
 * the
 * *Amazon EventBridge User Guide*
 * .
 */
export const updateEndpoint: API.OperationMethod<
  UpdateEndpointRequest,
  UpdateEndpointResponse,
  UpdateEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194, __c24, 2) as any as S.Schema<UpdateEndpointRequest>,
  output: __S(195, __c24, 3) as any as S.Schema<UpdateEndpointResponse>,
  errors: [ConcurrentModificationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEndpoint",
}));

export type UpdateEventBusError =
  | ConcurrentModificationException
  | InternalException
  | OperationDisabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the specified event bus.
 */
export const updateEventBus: API.OperationMethod<
  UpdateEventBusRequest,
  UpdateEventBusResponse,
  UpdateEventBusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196, __c24, 4) as any as S.Schema<UpdateEventBusRequest>,
  output: __S(197, __c24, 5) as any as S.Schema<UpdateEventBusResponse>,
  errors: [
    ConcurrentModificationException,
    InternalException,
    OperationDisabledException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEventBus",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ActivateEventSourceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ActivateEventSourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ReplayName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelReplayRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReplayArn: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CancelReplayResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          ConnectionArn: S.String,
          InvocationEndpoint: S.String,
          HttpMethod: S.String,
          InvocationRateLimitPerSecond: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateApiDestinationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApiDestinationArn: S.optional(S.String),
          ApiDestinationState: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateApiDestinationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ArchiveName: S.String,
          EventSourceArn: S.String,
          Description: S.optional(S.String),
          EventPattern: S.optional(S.String),
          RetentionDays: S.optional(S.Number),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateArchiveRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ArchiveArn: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "CreateArchiveResponse" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Username: S.String, Password: SensitiveString })).annotate({
        identifier: "CreateConnectionBasicAuthRequestParameters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ClientID: S.String, ClientSecret: SensitiveString }),
      ).annotate({
        identifier: "CreateConnectionOAuthClientRequestParameters",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Value: S.optional(SensitiveString),
          IsValueSecret: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ConnectionHeaderParameter",
      });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.Array(__S(10, __c1, 2));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Value: S.optional(SensitiveString),
          IsValueSecret: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ConnectionBodyParameter" });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          HeaderParameters: S.optional(__S(11, __c1, 3)),
          QueryStringParameters: S.optional(__S(12, __c1, 4)),
          BodyParameters: S.optional(__S(14, __c1, 6)),
        }),
      ).annotate({ identifier: "ConnectionHttpParameters" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientParameters: __S(9, __c1, 1),
          AuthorizationEndpoint: S.String,
          HttpMethod: S.String,
          OAuthHttpParameters: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "CreateConnectionOAuthRequestParameters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApiKeyName: S.String, ApiKeyValue: SensitiveString }),
      ).annotate({
        identifier: "CreateConnectionApiKeyAuthRequestParameters",
      });
    case 2:
      return S.suspend(() => S.Struct({ ResourceConfigurationArn: S.String })).annotate({
        identifier: "ConnectivityResourceConfigurationArn",
      });
    case 3:
      return S.suspend(() => S.Struct({ ResourceParameters: __S(18, __c2, 2) })).annotate({
        identifier: "ConnectivityResourceParameters",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BasicAuthParameters: S.optional(__S(8, __c1, 0)),
          OAuthParameters: S.optional(__S(16, __c2, 0)),
          ApiKeyAuthParameters: S.optional(__S(17, __c2, 1)),
          InvocationHttpParameters: S.optional(__S(15, __c1, 7)),
          ConnectivityParameters: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "CreateConnectionAuthRequestParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          AuthorizationType: S.String,
          AuthParameters: __S(20, __c2, 4),
          InvocationConnectivityParameters: S.optional(__S(19, __c2, 3)),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateConnectionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConnectionArn: S.optional(S.String),
          ConnectionState: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "CreateConnectionResponse" });
    case 7:
      return S.suspend(() => S.Struct({ HealthCheck: S.String })).annotate({
        identifier: "Primary",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Route: S.String })).annotate({
        identifier: "Secondary",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Primary: __S(23, __c2, 7), Secondary: __S(24, __c3, 0) }),
      ).annotate({
        identifier: "FailoverConfig",
      });
    case 2:
      return S.suspend(() => S.Struct({ FailoverConfig: __S(25, __c3, 1) })).annotate({
        identifier: "RoutingConfig",
      });
    case 3:
      return S.suspend(() => S.Struct({ State: S.optional(S.String) })).annotate({
        identifier: "ReplicationConfig",
      });
    case 4:
      return S.suspend(() => S.Struct({ EventBusArn: S.String })).annotate({
        identifier: "EndpointEventBus",
      });
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          RoutingConfig: __S(26, __c3, 2),
          ReplicationConfig: S.optional(__S(27, __c3, 3)),
          EventBuses: __S(29, __c3, 5),
          RoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateEndpointRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          RoutingConfig: S.optional(__S(26, __c3, 2)),
          ReplicationConfig: S.optional(__S(27, __c3, 3)),
          EventBuses: S.optional(__S(29, __c3, 5)),
          RoleArn: S.optional(S.String),
          State: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CreateEndpointResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "DeadLetterConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ IncludeDetail: S.optional(S.String), Level: S.optional(S.String) }),
      ).annotate({ identifier: "LogConfig" });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(34, __c4, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          EventSourceName: S.optional(S.String),
          Description: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
          DeadLetterConfig: S.optional(__S(32, __c4, 0)),
          LogConfig: S.optional(__S(33, __c4, 1)),
          Tags: S.optional(__S(35, __c4, 3)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateEventBusRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EventBusArn: S.optional(S.String),
          Description: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
          DeadLetterConfig: S.optional(__S(32, __c4, 0)),
          LogConfig: S.optional(__S(33, __c4, 1)),
        }).pipe(ns),
      ).annotate({ identifier: "CreateEventBusResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Account: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreatePartnerEventSourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ EventSourceArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreatePartnerEventSourceResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeactivateEventSourceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeauthorizeConnectionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConnectionArn: S.optional(S.String),
          ConnectionState: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastAuthorizedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "DeauthorizeConnectionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteApiDestinationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ArchiveName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteArchiveRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteArchiveResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteConnectionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectionArn: S.optional(S.String),
          ConnectionState: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastAuthorizedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "DeleteConnectionResponse" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEndpointRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteEndpointResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEventBusRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Account: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePartnerEventSourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          EventBusName: S.optional(S.String),
          Force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteRuleRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApiDestinationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApiDestinationArn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ApiDestinationState: S.optional(S.String),
          ConnectionArn: S.optional(S.String),
          InvocationEndpoint: S.optional(S.String),
          HttpMethod: S.optional(S.String),
          InvocationRateLimitPerSecond: S.optional(S.Number),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeApiDestinationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ArchiveName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeArchiveRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ArchiveArn: S.optional(S.String),
          ArchiveName: S.optional(S.String),
          EventSourceArn: S.optional(S.String),
          Description: S.optional(S.String),
          EventPattern: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
          RetentionDays: S.optional(S.Number),
          SizeBytes: S.optional(S.Number),
          EventCount: S.optional(S.Number),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeArchiveResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeConnectionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceConfigurationArn: S.String, ResourceAssociationArn: S.String }),
      ).annotate({
        identifier: "DescribeConnectionResourceParameters",
      });
    case 3:
      return S.suspend(() => S.Struct({ ResourceParameters: __S(58, __c7, 2) })).annotate({
        identifier: "DescribeConnectionConnectivityParameters",
      });
    case 4:
      return S.suspend(() => S.Struct({ Username: S.optional(S.String) })).annotate({
        identifier: "ConnectionBasicAuthResponseParameters",
      });
    case 5:
      return S.suspend(() => S.Struct({ ClientID: S.optional(S.String) })).annotate({
        identifier: "ConnectionOAuthClientResponseParameters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClientParameters: S.optional(__S(61, __c7, 5)),
          AuthorizationEndpoint: S.optional(S.String),
          HttpMethod: S.optional(S.String),
          OAuthHttpParameters: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "ConnectionOAuthResponseParameters",
      });
    case 7:
      return S.suspend(() => S.Struct({ ApiKeyName: S.optional(S.String) })).annotate({
        identifier: "ConnectionApiKeyAuthResponseParameters",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BasicAuthParameters: S.optional(__S(60, __c7, 4)),
          OAuthParameters: S.optional(__S(62, __c7, 6)),
          ApiKeyAuthParameters: S.optional(__S(63, __c7, 7)),
          InvocationHttpParameters: S.optional(__S(15, __c1, 7)),
          ConnectivityParameters: S.optional(__S(59, __c7, 3)),
        }),
      ).annotate({
        identifier: "ConnectionAuthResponseParameters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConnectionArn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          InvocationConnectivityParameters: S.optional(__S(59, __c7, 3)),
          ConnectionState: S.optional(S.String),
          StateReason: S.optional(S.String),
          AuthorizationType: S.optional(S.String),
          SecretArn: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
          AuthParameters: S.optional(__S(64, __c8, 0)),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastAuthorizedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConnectionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.String, HomeRegion: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeEndpointRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Arn: S.optional(S.String),
          RoutingConfig: S.optional(__S(26, __c3, 2)),
          ReplicationConfig: S.optional(__S(27, __c3, 3)),
          EventBuses: S.optional(__S(29, __c3, 5)),
          RoleArn: S.optional(S.String),
          EndpointId: S.optional(S.String),
          EndpointUrl: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeEndpointResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeEventBusRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
          DeadLetterConfig: S.optional(__S(32, __c4, 0)),
          Policy: S.optional(S.String),
          LogConfig: S.optional(__S(33, __c4, 1)),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ManagedBy: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeEventBusResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEventSourceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CreatedBy: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Name: S.optional(S.String),
          State: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeEventSourceResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribePartnerEventSourceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribePartnerEventSourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ReplayName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeReplayRequest" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, FilterArns: S.optional(__S(75, __c9, 3)) }),
      ).annotate({ identifier: "ReplayDestination" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReplayName: S.optional(S.String),
          ReplayArn: S.optional(S.String),
          Description: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
          EventSourceArn: S.optional(S.String),
          Destination: S.optional(__S(76, __c9, 4)),
          EventStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventLastReplayedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplayStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplayEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeReplayResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, EventBusName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeRuleRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          EventPattern: S.optional(S.String),
          ScheduleExpression: S.optional(S.String),
          State: S.optional(S.String),
          Description: S.optional(S.String),
          RoleArn: S.optional(S.String),
          ManagedBy: S.optional(S.String),
          EventBusName: S.optional(S.String),
          CreatedBy: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeRuleResponse" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.String, EventBusName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DisableRuleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.String, EventBusName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "EnableRuleRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String),
          ConnectionArn: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListApiDestinationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApiDestinationArn: S.optional(S.String),
          Name: S.optional(S.String),
          ApiDestinationState: S.optional(S.String),
          ConnectionArn: S.optional(S.String),
          InvocationEndpoint: S.optional(S.String),
          HttpMethod: S.optional(S.String),
          InvocationRateLimitPerSecond: S.optional(S.Number),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ApiDestination" });
    case 4:
      return S.Array(__S(83, __c10, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApiDestinations: S.optional(__S(84, __c10, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListApiDestinationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String),
          EventSourceArn: S.optional(S.String),
          State: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListArchivesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ArchiveName: S.optional(S.String),
          EventSourceArn: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
          RetentionDays: S.optional(S.Number),
          SizeBytes: S.optional(S.Number),
          EventCount: S.optional(S.Number),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Archive" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Archives: S.optional(__S(88, __c11, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListArchivesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String),
          ConnectionState: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListConnectionsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConnectionArn: S.optional(S.String),
          Name: S.optional(S.String),
          ConnectionState: S.optional(S.String),
          StateReason: S.optional(S.String),
          AuthorizationType: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastAuthorizedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Connection" });
    case 4:
      return S.Array(__S(91, __c11, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Connections: S.optional(__S(92, __c11, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListConnectionsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String),
          HomeRegion: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListEndpointsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Arn: S.optional(S.String),
          RoutingConfig: S.optional(__S(26, __c3, 2)),
          ReplicationConfig: S.optional(__S(27, __c3, 3)),
          EventBuses: S.optional(__S(29, __c3, 5)),
          RoleArn: S.optional(S.String),
          EndpointId: S.optional(S.String),
          EndpointUrl: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Endpoint" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Endpoint);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Endpoints: S.optional(__S(96, __c12, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListEndpointsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListEventBusesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
          Policy: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ManagedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventBus" });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          EventBuses: S.optional(__S(100, __c12, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListEventBusesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListEventSourcesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CreatedBy: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Name: S.optional(S.String),
          State: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventSource" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          EventSources: S.optional(__S(104, __c13, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListEventSourcesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EventSourceName: S.String,
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPartnerEventSourceAccountsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Account: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          State: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PartnerEventSourceAccount",
      });
    case 4:
      return S.Array(__S(107, __c13, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          PartnerEventSourceAccounts: S.optional(__S(108, __c13, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPartnerEventSourceAccountsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.String,
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPartnerEventSourcesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({ identifier: "PartnerEventSource" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PartnerEventSources: S.optional(__S(112, __c14, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPartnerEventSourcesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String),
          State: S.optional(S.String),
          EventSourceArn: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListReplaysRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReplayName: S.optional(S.String),
          EventSourceArn: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
          EventStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventLastReplayedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplayStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplayEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Replay" });
    case 4:
      return S.Array(__S(115, __c14, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ Replays: S.optional(__S(116, __c14, 4)), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListReplaysResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TargetArn: S.String,
          EventBusName: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRuleNamesByTargetRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RuleNames: S.optional(__S(75, __c9, 3)), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "ListRuleNamesByTargetResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NamePrefix: S.optional(S.String),
          EventBusName: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRulesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          EventPattern: S.optional(S.String),
          State: S.optional(S.String),
          Description: S.optional(S.String),
          ScheduleExpression: S.optional(S.String),
          RoleArn: S.optional(S.String),
          ManagedBy: S.optional(S.String),
          EventBusName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Rule" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ Rules: S.optional(__S(122, __c15, 2)), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListRulesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(35, __c4, 3)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Rule: S.String,
          EventBusName: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTargetsByRuleRequest" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ InputPathsMap: S.optional(__S(127, __c15, 7)), InputTemplate: S.String }),
      ).annotate({ identifier: "InputTransformer" });
    case 1:
      return S.suspend(() => S.Struct({ PartitionKeyPath: S.String })).annotate({
        identifier: "KinesisParameters",
      });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Values: __S(75, __c9, 3) })).annotate({
        identifier: "RunCommandTarget",
      });
    case 3:
      return S.Array(__S(130, __c16, 2));
    case 4:
      return S.suspend(() => S.Struct({ RunCommandTargets: __S(131, __c16, 3) })).annotate({
        identifier: "RunCommandParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Subnets: __S(75, __c9, 3),
          SecurityGroups: S.optional(__S(75, __c9, 3)),
          AssignPublicIp: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsVpcConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ awsvpcConfiguration: S.optional(__S(133, __c16, 5)) }),
      ).annotate({ identifier: "NetworkConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          capacityProvider: S.String,
          weight: S.optional(S.Number),
          base: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CapacityProviderStrategyItem",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135, __c16, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), expression: S.optional(S.String) }),
      ).annotate({ identifier: "PlacementConstraint" });
    case 2:
      return S.Array(__S(137, __c17, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ type: S.optional(S.String), field: S.optional(S.String) }),
      ).annotate({ identifier: "PlacementStrategy" });
    case 4:
      return S.Array(__S(139, __c17, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          TaskDefinitionArn: S.String,
          TaskCount: S.optional(S.Number),
          LaunchType: S.optional(S.String),
          NetworkConfiguration: S.optional(__S(134, __c16, 6)),
          PlatformVersion: S.optional(S.String),
          Group: S.optional(S.String),
          CapacityProviderStrategy: S.optional(__S(136, __c17, 0)),
          EnableECSManagedTags: S.optional(S.Boolean),
          EnableExecuteCommand: S.optional(S.Boolean),
          PlacementConstraints: S.optional(__S(138, __c17, 2)),
          PlacementStrategy: S.optional(__S(140, __c17, 4)),
          PropagateTags: S.optional(S.String),
          ReferenceId: S.optional(S.String),
          Tags: S.optional(__S(35, __c4, 3)),
        }),
      ).annotate({ identifier: "EcsParameters" });
    case 6:
      return S.suspend(() => S.Struct({ Size: S.optional(S.Number) })).annotate({
        identifier: "BatchArrayProperties",
      });
    case 7:
      return S.suspend(() => S.Struct({ Attempts: S.optional(S.Number) })).annotate({
        identifier: "BatchRetryStrategy",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JobDefinition: S.String,
          JobName: S.String,
          ArrayProperties: S.optional(__S(142, __c17, 6)),
          RetryStrategy: S.optional(__S(143, __c17, 7)),
        }),
      ).annotate({ identifier: "BatchParameters" });
    case 1:
      return S.suspend(() => S.Struct({ MessageGroupId: S.optional(S.String) })).annotate({
        identifier: "SqsParameters",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PathParameterValues: S.optional(__S(75, __c9, 3)),
          HeaderParameters: S.optional(__S(127, __c15, 7)),
          QueryStringParameters: S.optional(__S(127, __c15, 7)),
        }),
      ).annotate({ identifier: "HttpParameters" });
    case 3:
      return S.Array(SensitiveString);
    case 4:
      return S.suspend(() =>
        S.Struct({
          SecretManagerArn: S.optional(S.String),
          Database: S.String,
          DbUser: S.optional(S.String),
          Sql: S.optional(SensitiveString),
          StatementName: S.optional(S.String),
          WithEvent: S.optional(S.Boolean),
          Sqls: S.optional(__S(147, __c18, 3)),
        }),
      ).annotate({ identifier: "RedshiftDataParameters" });
    case 5:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "SageMakerPipelineParameter",
      });
    case 6:
      return S.Array(__S(149, __c18, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ PipelineParameterList: S.optional(__S(150, __c18, 6)) }),
      ).annotate({
        identifier: "SageMakerPipelineParameters",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaximumRetryAttempts: S.optional(S.Number),
          MaximumEventAgeInSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RetryPolicy" });
    case 1:
      return S.suspend(() => S.Struct({ GraphQLOperation: S.optional(SensitiveString) })).annotate({
        identifier: "AppSyncParameters",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Arn: S.String,
          RoleArn: S.optional(S.String),
          Input: S.optional(S.String),
          InputPath: S.optional(S.String),
          InputTransformer: S.optional(__S(128, __c16, 0)),
          KinesisParameters: S.optional(__S(129, __c16, 1)),
          RunCommandParameters: S.optional(__S(132, __c16, 4)),
          EcsParameters: S.optional(__S(141, __c17, 5)),
          BatchParameters: S.optional(__S(144, __c18, 0)),
          SqsParameters: S.optional(__S(145, __c18, 1)),
          HttpParameters: S.optional(__S(146, __c18, 2)),
          RedshiftDataParameters: S.optional(__S(148, __c18, 4)),
          SageMakerPipelineParameters: S.optional(__S(151, __c18, 7)),
          DeadLetterConfig: S.optional(__S(32, __c4, 0)),
          RetryPolicy: S.optional(__S(152, __c19, 0)),
          AppSyncParameters: S.optional(__S(153, __c19, 1)),
        }),
      ).annotate({ identifier: "Target" });
    case 3:
      return S.Array(__S(154, __c19, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Targets: S.optional(__S(155, __c19, 3)), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "ListTargetsByRuleResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Time: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Source: S.optional(S.String),
          Resources: S.optional(__S(75, __c9, 3)),
          DetailType: S.optional(S.String),
          Detail: S.optional(S.String),
          EventBusName: S.optional(S.String),
          TraceHeader: S.optional(S.String),
        }),
      ).annotate({ identifier: "PutEventsRequestEntry" });
    case 6:
      return S.Array(__S(157, __c19, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Entries: __S(158, __c19, 6),
          EndpointId: S.optional(S.String).pipe(T.ContextParam("EndpointId")),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutEventsRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EventId: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "PutEventsResultEntry" });
    case 1:
      return S.Array(__S(160, __c20, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          FailedEntryCount: S.optional(S.Number),
          Entries: S.optional(__S(161, __c20, 1)),
        }).pipe(ns),
      ).annotate({ identifier: "PutEventsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Time: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Source: S.optional(S.String),
          Resources: S.optional(__S(75, __c9, 3)),
          DetailType: S.optional(S.String),
          Detail: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PutPartnerEventsRequestEntry",
      });
    case 4:
      return S.Array(__S(163, __c20, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ Entries: __S(164, __c20, 4) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutPartnerEventsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EventId: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PutPartnerEventsResultEntry",
      });
    case 7:
      return S.Array(__S(166, __c20, 6));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FailedEntryCount: S.optional(S.Number),
          Entries: S.optional(__S(167, __c20, 7)),
        }).pipe(ns),
      ).annotate({ identifier: "PutPartnerEventsResponse" });
    case 1:
      return S.suspend(() => S.Struct({ Type: S.String, Key: S.String, Value: S.String })).annotate(
        { identifier: "Condition" },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          EventBusName: S.optional(S.String),
          Action: S.optional(S.String),
          Principal: S.optional(S.String),
          StatementId: S.optional(S.String),
          Condition: S.optional(__S(169, __c21, 1)),
          Policy: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutPermissionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ScheduleExpression: S.optional(S.String),
          EventPattern: S.optional(S.String),
          State: S.optional(S.String),
          Description: S.optional(S.String),
          RoleArn: S.optional(S.String),
          Tags: S.optional(__S(35, __c4, 3)),
          EventBusName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutRuleRequest" });
    case 4:
      return S.suspend(() => S.Struct({ RuleArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "PutRuleResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Rule: S.String,
          EventBusName: S.optional(S.String),
          Targets: __S(155, __c19, 3),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutTargetsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TargetId: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "PutTargetsResultEntry" });
    case 7:
      return S.Array(__S(174, __c21, 6));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FailedEntryCount: S.optional(S.Number),
          FailedEntries: S.optional(__S(175, __c21, 7)),
        }).pipe(ns),
      ).annotate({ identifier: "PutTargetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StatementId: S.optional(S.String),
          RemoveAllPermissions: S.optional(S.Boolean),
          EventBusName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RemovePermissionRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemovePermissionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Rule: S.String,
          EventBusName: S.optional(S.String),
          Ids: __S(75, __c9, 3),
          Force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RemoveTargetsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReplayName: S.String,
          Description: S.optional(S.String),
          EventSourceArn: S.String,
          EventStartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EventEndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Destination: __S(76, __c9, 4),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartReplayRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReplayArn: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
          ReplayStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "StartReplayResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(35, __c4, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ EventPattern: S.String, Event: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TestEventPatternRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Result: S.optional(S.Boolean) }).pipe(ns)).annotate({
        identifier: "TestEventPatternResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(75, __c9, 3) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          ConnectionArn: S.optional(S.String),
          InvocationEndpoint: S.optional(S.String),
          HttpMethod: S.optional(S.String),
          InvocationRateLimitPerSecond: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateApiDestinationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ArchiveName: S.String,
          Description: S.optional(S.String),
          EventPattern: S.optional(S.String),
          RetentionDays: S.optional(S.Number),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateArchiveRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Username: S.optional(S.String), Password: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "UpdateConnectionBasicAuthRequestParameters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ClientID: S.optional(S.String), ClientSecret: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "UpdateConnectionOAuthClientRequestParameters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClientParameters: S.optional(__S(189, __c23, 5)),
          AuthorizationEndpoint: S.optional(S.String),
          HttpMethod: S.optional(S.String),
          OAuthHttpParameters: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "UpdateConnectionOAuthRequestParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApiKeyName: S.optional(S.String), ApiKeyValue: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "UpdateConnectionApiKeyAuthRequestParameters",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BasicAuthParameters: S.optional(__S(188, __c23, 4)),
          OAuthParameters: S.optional(__S(190, __c23, 6)),
          ApiKeyAuthParameters: S.optional(__S(191, __c23, 7)),
          InvocationHttpParameters: S.optional(__S(15, __c1, 7)),
          ConnectivityParameters: S.optional(__S(19, __c2, 3)),
        }),
      ).annotate({
        identifier: "UpdateConnectionAuthRequestParameters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          AuthorizationType: S.optional(S.String),
          AuthParameters: S.optional(__S(192, __c24, 0)),
          InvocationConnectivityParameters: S.optional(__S(19, __c2, 3)),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateConnectionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          RoutingConfig: S.optional(__S(26, __c3, 2)),
          ReplicationConfig: S.optional(__S(27, __c3, 3)),
          EventBuses: S.optional(__S(29, __c3, 5)),
          RoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateEndpointRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          RoutingConfig: S.optional(__S(26, __c3, 2)),
          ReplicationConfig: S.optional(__S(27, __c3, 3)),
          EventBuses: S.optional(__S(29, __c3, 5)),
          RoleArn: S.optional(S.String),
          EndpointId: S.optional(S.String),
          EndpointUrl: S.optional(S.String),
          State: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "UpdateEndpointResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
          Description: S.optional(S.String),
          DeadLetterConfig: S.optional(__S(32, __c4, 0)),
          LogConfig: S.optional(__S(33, __c4, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateEventBusRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
          Description: S.optional(S.String),
          DeadLetterConfig: S.optional(__S(32, __c4, 0)),
          LogConfig: S.optional(__S(33, __c4, 1)),
        }).pipe(ns),
      ).annotate({ identifier: "UpdateEventBusResponse" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
