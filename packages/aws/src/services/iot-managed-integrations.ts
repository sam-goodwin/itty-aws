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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "IoT Managed Integrations",
  serviceShapeName: "IotManagedIntegrations",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iotmanagedintegrations" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-03-03");
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
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://api.iotmanagedintegrations-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://api.iotmanagedintegrations.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
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
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalFailureException
  extends /*@__PURE__*/ S.TaggedError<InternalFailureException>()(
    "InternalFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ClientToken = string;
export type ConnectorDestinationId = string;
export type AccountAssociationName = string;
export type AccountAssociationDescription = string;
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c0, 0);
export type AuthMaterialName = string;
export interface GeneralAuthorizationName {
  AuthMaterialName?: string;
}
const GeneralAuthorizationName = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<GeneralAuthorizationName>;
export interface CreateAccountAssociationRequest {
  ClientToken?: string;
  ConnectorDestinationId: string;
  Name?: string;
  Description?: string;
  Tags?: { [key: string]: string | undefined };
  GeneralAuthorization?: GeneralAuthorizationName;
}
const CreateAccountAssociationRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CreateAccountAssociationRequest>;
export type OAuthAuthorizationUrlOutput = string | redacted.Redacted<string>;
export type AccountAssociationId = string;
export type AssociationState =
  | "ASSOCIATION_IN_PROGRESS"
  | "ASSOCIATION_FAILED"
  | "ASSOCIATION_SUCCEEDED"
  | "ASSOCIATION_DELETING"
  | "REFRESH_TOKEN_EXPIRED"
  | (string & {});
const AssociationState = S.String;

export type AccountAssociationArn = string;
export interface CreateAccountAssociationResponse {
  OAuthAuthorizationUrl: string | redacted.Redacted<string>;
  AccountAssociationId: string;
  AssociationState: AssociationState;
  Arn?: string;
}
const CreateAccountAssociationResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateAccountAssociationResponse>;
export type DisplayName = string;
export type LambdaArn = string;
export interface LambdaConfig {
  arn: string;
}
const LambdaConfig = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<LambdaConfig>;
export interface EndpointConfig {
  lambda?: LambdaConfig;
}
const EndpointConfig = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<EndpointConfig>;
export type CloudConnectorDescription = string;
export type EndpointType = "LAMBDA" | (string & {});
const EndpointType = S.String;

export interface CreateCloudConnectorRequest {
  Name: string;
  EndpointConfig: EndpointConfig;
  Description?: string;
  EndpointType?: EndpointType;
  ClientToken?: string;
}
const CreateCloudConnectorRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateCloudConnectorRequest>;
export type CloudConnectorId = string;
export interface CreateCloudConnectorResponse {
  Id?: string;
}
const CreateCloudConnectorResponse = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CreateCloudConnectorResponse>;
export type ConnectorDestinationName = string;
export type ConnectorDestinationDescription = string;
export type AuthType = "OAUTH" | (string & {});
const AuthType = S.String;

export type AuthUrl = string;
export type TokenUrl = string;
export type TokenEndpointAuthenticationScheme =
  | "HTTP_BASIC"
  | "REQUEST_BODY_CREDENTIALS"
  | (string & {});
const TokenEndpointAuthenticationScheme = S.String;

export interface ProactiveRefreshTokenRenewal {
  enabled?: boolean;
  DaysBeforeRenewal?: number;
}
const ProactiveRefreshTokenRenewal = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<ProactiveRefreshTokenRenewal>;
export interface OAuthConfig {
  authUrl: string;
  tokenUrl: string;
  scope?: string;
  tokenEndpointAuthenticationScheme: TokenEndpointAuthenticationScheme;
  oAuthCompleteRedirectUrl?: string;
  proactiveRefreshTokenRenewal?: ProactiveRefreshTokenRenewal;
}
const OAuthConfig = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<OAuthConfig>;
export type SecretsManagerArn = string;
export type SecretsManagerVersionId = string;
export interface SecretsManager {
  arn: string;
  versionId: string;
}
const SecretsManager = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<SecretsManager>;
export interface AuthMaterial {
  SecretsManager: SecretsManager;
  AuthMaterialName: string;
}
const AuthMaterial = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<AuthMaterial>;
export type AuthMaterials = AuthMaterial[];
const AuthMaterials = /*@__PURE__*/ __L.at(__c1, 4);
export interface AuthConfig {
  oAuth?: OAuthConfig;
  GeneralAuthorization?: AuthMaterial[];
}
const AuthConfig = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<AuthConfig>;
export interface CreateConnectorDestinationRequest {
  Name?: string;
  Description?: string;
  CloudConnectorId: string;
  AuthType?: AuthType;
  AuthConfig: AuthConfig;
  SecretsManager?: SecretsManager;
  ClientToken?: string;
}
const CreateConnectorDestinationRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateConnectorDestinationRequest>;
export interface CreateConnectorDestinationResponse {
  Id?: string;
}
const CreateConnectorDestinationResponse =
  CreateCloudConnectorResponse as any as S.Schema<CreateConnectorDestinationResponse>;
export type CredentialLockerName = string | redacted.Redacted<string>;
export interface CreateCredentialLockerRequest {
  Name?: string | redacted.Redacted<string>;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateCredentialLockerRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateCredentialLockerRequest>;
export type CredentialLockerId = string;
export type CredentialLockerArn = string;
export type CredentialLockerCreatedAt = Date;
export interface CreateCredentialLockerResponse {
  Id?: string;
  Arn?: string;
  CreatedAt?: Date;
}
const CreateCredentialLockerResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateCredentialLockerResponse>;
export type DeliveryDestinationArn = string;
export type DeliveryDestinationType = "KINESIS" | (string & {});
const DeliveryDestinationType = S.String;

export type DestinationName = string;
export type DeliveryDestinationRoleArn = string;
export type DestinationDescription = string;
export interface CreateDestinationRequest {
  DeliveryDestinationArn: string;
  DeliveryDestinationType: DeliveryDestinationType;
  Name: string;
  RoleArn: string;
  ClientToken?: string;
  Description?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateDestinationRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateDestinationRequest>;
export interface CreateDestinationResponse {
  Name?: string;
}
const CreateDestinationResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateDestinationResponse>;
export type SmartHomeResourceType = string;
export type SmartHomeResourceId = string;
export type LogLevel = "DEBUG" | "ERROR" | "INFO" | "WARN" | (string & {});
const LogLevel = S.String;

export interface CreateEventLogConfigurationRequest {
  ResourceType: string;
  ResourceId?: string;
  EventLogLevel: LogLevel;
  ClientToken?: string;
}
const CreateEventLogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CreateEventLogConfigurationRequest>;
export type LogConfigurationId = string;
export interface CreateEventLogConfigurationResponse {
  Id?: string;
}
const CreateEventLogConfigurationResponse =
  CreateCloudConnectorResponse as any as S.Schema<CreateEventLogConfigurationResponse>;
export type Role = "CONTROLLER" | "DEVICE" | (string & {});
const Role = S.String;

export type Owner = string | redacted.Redacted<string>;
export type AuthMaterialString = string | redacted.Redacted<string>;
export type AuthMaterialType =
  | "CUSTOM_PROTOCOL_QR_BAR_CODE"
  | "WIFI_SETUP_QR_BAR_CODE"
  | "ZWAVE_QR_BAR_CODE"
  | "ZIGBEE_QR_BAR_CODE"
  | "DISCOVERED_DEVICE"
  | "PRE_ONBOARDED_CLOUD"
  | (string & {});
const AuthMaterialType = S.String;

export type EnableAsProvisioner = boolean;
export type EnableAsProvisionee = boolean;
export type TimeoutInMinutes = number;
export interface WiFiSimpleSetupConfiguration {
  EnableAsProvisioner?: boolean;
  EnableAsProvisionee?: boolean;
  TimeoutInMinutes?: number;
}
const WiFiSimpleSetupConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<WiFiSimpleSetupConfiguration>;
export type SerialNumber = string | redacted.Redacted<string>;
export type Brand = string | redacted.Redacted<string>;
export type Model = string | redacted.Redacted<string>;
export type Name = string;
export type CapabilityReportVersion = string;
export type NodeId = string;
export type EndpointId = string;
export type DeviceType = string;
export type DeviceTypes = string[];
const DeviceTypes = /*@__PURE__*/ __L.at(__c2, 5);
export type SchemaVersionedId = string;
export type CapabilityName = string;
export type CapabilityVersion = string;
export type PropertyName = string;
export type CapabilityReportProperties = string[];
const CapabilityReportProperties = DeviceTypes as any as S.Schema<CapabilityReportProperties>;
export type ActionName = string;
export type CapabilityReportActions = string[];
const CapabilityReportActions = DeviceTypes as any as S.Schema<CapabilityReportActions>;
export type EventName = string;
export type CapabilityReportEvents = string[];
const CapabilityReportEvents = DeviceTypes as any as S.Schema<CapabilityReportEvents>;
export interface CapabilityReportCapability {
  id: string;
  name: string;
  version: string;
  properties: string[];
  actions: string[];
  events: string[];
}
const CapabilityReportCapability = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CapabilityReportCapability>;
export type CapabilityReportCapabilities = CapabilityReportCapability[];
const CapabilityReportCapabilities = /*@__PURE__*/ __L.at(__c2, 7);
export interface CapabilityReportEndpoint {
  id: string;
  deviceTypes: string[];
  capabilities: CapabilityReportCapability[];
}
const CapabilityReportEndpoint = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CapabilityReportEndpoint>;
export type CapabilityReportEndpoints = CapabilityReportEndpoint[];
const CapabilityReportEndpoints = /*@__PURE__*/ __L.at(__c3, 1);
export interface CapabilityReport {
  version: string;
  nodeId?: string;
  endpoints: CapabilityReportEndpoint[];
}
const CapabilityReport = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<CapabilityReport>;
export type SchemaVersionFormat = "AWS" | "ZCL" | "CONNECTOR" | (string & {});
const SchemaVersionFormat = S.String;

export type ExtrinsicSchemaId = string;
export type MatterCapabilityReportClusterRevisionId = number;
export type ValidationSchema = unknown;
export interface CapabilitySchemaItem {
  Format: SchemaVersionFormat;
  CapabilityId: string;
  ExtrinsicId: string;
  ExtrinsicVersion: number;
  Schema: any;
}
const CapabilitySchemaItem = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<CapabilitySchemaItem>;
export type CapabilitySchemas = CapabilitySchemaItem[];
const CapabilitySchemas = /*@__PURE__*/ __L.at(__c3, 4);
export type Capabilities = string;
export type Classification = string | redacted.Redacted<string>;
export type AttributeName = string;
export type AttributeValue = string;
export type MetaData = { [key: string]: string | undefined };
const MetaData = TagsMap as any as S.Schema<MetaData>;
export interface CreateManagedThingRequest {
  Role: Role;
  Owner?: string | redacted.Redacted<string>;
  CredentialLockerId?: string;
  AuthenticationMaterial: string | redacted.Redacted<string>;
  AuthenticationMaterialType: AuthMaterialType;
  WiFiSimpleSetupConfiguration?: WiFiSimpleSetupConfiguration;
  SerialNumber?: string | redacted.Redacted<string>;
  Brand?: string | redacted.Redacted<string>;
  Model?: string | redacted.Redacted<string>;
  Name?: string;
  CapabilityReport?: CapabilityReport;
  CapabilitySchemas?: CapabilitySchemaItem[];
  Capabilities?: string;
  ClientToken?: string;
  Classification?: string | redacted.Redacted<string>;
  Tags?: { [key: string]: string | undefined };
  MetaData?: { [key: string]: string | undefined };
}
const CreateManagedThingRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateManagedThingRequest>;
export type ManagedThingId = string;
export type ManagedThingArn = string;
export type CreatedAt = Date;
export interface CreateManagedThingResponse {
  Id?: string;
  Arn?: string;
  CreatedAt?: Date;
}
const CreateManagedThingResponse =
  CreateCredentialLockerResponse as any as S.Schema<CreateManagedThingResponse>;
export type EventType =
  | "DEVICE_COMMAND"
  | "DEVICE_COMMAND_REQUEST"
  | "DEVICE_DISCOVERY_STATUS"
  | "DEVICE_EVENT"
  | "DEVICE_LIFE_CYCLE"
  | "DEVICE_STATE"
  | "DEVICE_OTA"
  | "DEVICE_WSS"
  | "CONNECTOR_ASSOCIATION"
  | "ACCOUNT_ASSOCIATION"
  | "CONNECTOR_ERROR_REPORT"
  | (string & {});
const EventType = S.String;

export interface CreateNotificationConfigurationRequest {
  EventType: EventType;
  DestinationName: string;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateNotificationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateNotificationConfigurationRequest>;
export interface CreateNotificationConfigurationResponse {
  EventType?: EventType;
}
const CreateNotificationConfigurationResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateNotificationConfigurationResponse>;
export type OtaDescription = string;
export type S3Url = string;
export type OtaProtocol = "HTTP" | (string & {});
const OtaProtocol = S.String;

export type Target = string[];
const Target = DeviceTypes as any as S.Schema<Target>;
export type OtaTaskConfigurationId = string;
export type OtaMechanism = "PUSH" | (string & {});
const OtaMechanism = S.String;

export type OtaType = "ONE_TIME" | "CONTINUOUS" | (string & {});
const OtaType = S.String;

export type OtaTargetQueryString = string;
export type SchedulingConfigEndBehavior =
  | "STOP_ROLLOUT"
  | "CANCEL"
  | "FORCE_CANCEL"
  | (string & {});
const SchedulingConfigEndBehavior = S.String;

export type EndTime = string;
export type DurationInMinutes = number;
export type StartTime = string;
export interface ScheduleMaintenanceWindow {
  DurationInMinutes?: number;
  StartTime?: string;
}
const ScheduleMaintenanceWindow = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<ScheduleMaintenanceWindow>;
export type ScheduleMaintenanceWindowList = ScheduleMaintenanceWindow[];
const ScheduleMaintenanceWindowList = /*@__PURE__*/ __L.at(__c4, 1);
export type ScheduleStartTime = string;
export interface OtaTaskSchedulingConfig {
  EndBehavior?: SchedulingConfigEndBehavior;
  EndTime?: string;
  MaintenanceWindows?: ScheduleMaintenanceWindow[];
  StartTime?: string;
}
const OtaTaskSchedulingConfig = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<OtaTaskSchedulingConfig>;
export type RetryCriteriaFailureType = "FAILED" | "TIMED_OUT" | "ALL" | (string & {});
const RetryCriteriaFailureType = S.String;

export type MinNumberOfRetries = number;
export interface RetryConfigCriteria {
  FailureType?: RetryCriteriaFailureType;
  MinNumberOfRetries?: number;
}
const RetryConfigCriteria = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<RetryConfigCriteria>;
export type RetryConfigCriteriaList = RetryConfigCriteria[];
const RetryConfigCriteriaList = /*@__PURE__*/ __L.at(__c4, 4);
export interface OtaTaskExecutionRetryConfig {
  RetryConfigCriteria?: RetryConfigCriteria[];
}
const OtaTaskExecutionRetryConfig = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<OtaTaskExecutionRetryConfig>;
export interface CreateOtaTaskRequest {
  Description?: string;
  S3Url: string;
  Protocol?: OtaProtocol;
  Target?: string[];
  TaskConfigurationId?: string;
  OtaMechanism?: OtaMechanism;
  OtaType: OtaType;
  OtaTargetQueryString?: string;
  ClientToken?: string;
  OtaSchedulingConfig?: OtaTaskSchedulingConfig;
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig;
  Tags?: { [key: string]: string | undefined };
}
const CreateOtaTaskRequest = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<CreateOtaTaskRequest>;
export type OtaTaskId = string;
export type OtaTaskArn = string;
export interface CreateOtaTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  Description?: string;
}
const CreateOtaTaskResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CreateOtaTaskResponse>;
export type OtaTaskConfigurationName = string | redacted.Redacted<string>;
export type AbortCriteriaAction = "CANCEL" | (string & {});
const AbortCriteriaAction = S.String;

export type AbortCriteriaFailureType = "FAILED" | "REJECTED" | "TIMED_OUT" | "ALL" | (string & {});
const AbortCriteriaFailureType = S.String;

export type MinNumberOfExecutedThings = number;
export type ThresholdPercentage = number;
export interface AbortConfigCriteria {
  Action?: AbortCriteriaAction;
  FailureType?: AbortCriteriaFailureType;
  MinNumberOfExecutedThings?: number;
  ThresholdPercentage?: number;
}
const AbortConfigCriteria = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<AbortConfigCriteria>;
export type AbortConfigCriteriaList = AbortConfigCriteria[];
const AbortConfigCriteriaList = /*@__PURE__*/ __L.at(__c5, 1);
export interface OtaTaskAbortConfig {
  AbortConfigCriteriaList?: AbortConfigCriteria[];
}
const OtaTaskAbortConfig = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<OtaTaskAbortConfig>;
export type BaseRatePerMinute = number;
export type IncrementFactor = number;
export type NumberOfNotifiedThings = number;
export type NumberOfSucceededThings = number;
export interface RolloutRateIncreaseCriteria {
  numberOfNotifiedThings?: number;
  numberOfSucceededThings?: number;
}
const RolloutRateIncreaseCriteria = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<RolloutRateIncreaseCriteria>;
export interface ExponentialRolloutRate {
  BaseRatePerMinute?: number;
  IncrementFactor?: number;
  RateIncreaseCriteria?: RolloutRateIncreaseCriteria;
}
const ExponentialRolloutRate = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ExponentialRolloutRate>;
export type MaximumPerMinute = number;
export interface OtaTaskExecutionRolloutConfig {
  ExponentialRolloutRate?: ExponentialRolloutRate;
  MaximumPerMinute?: number;
}
const OtaTaskExecutionRolloutConfig = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<OtaTaskExecutionRolloutConfig>;
export type InProgressTimeoutInMinutes = number;
export interface OtaTaskTimeoutConfig {
  InProgressTimeoutInMinutes?: number;
}
const OtaTaskTimeoutConfig = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<OtaTaskTimeoutConfig>;
export interface PushConfig {
  AbortConfig?: OtaTaskAbortConfig;
  RolloutConfig?: OtaTaskExecutionRolloutConfig;
  TimeoutConfig?: OtaTaskTimeoutConfig;
}
const PushConfig = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<PushConfig>;
export interface CreateOtaTaskConfigurationRequest {
  Description?: string;
  Name?: string | redacted.Redacted<string>;
  PushConfig?: PushConfig;
  ClientToken?: string;
}
const CreateOtaTaskConfigurationRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateOtaTaskConfigurationRequest>;
export interface CreateOtaTaskConfigurationResponse {
  TaskConfigurationId?: string;
}
const CreateOtaTaskConfigurationResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<CreateOtaTaskConfigurationResponse>;
export type ProvisioningType = "FLEET_PROVISIONING" | "JITR" | (string & {});
const ProvisioningType = S.String;

export type CaCertificate = string | redacted.Redacted<string>;
export type ClaimCertificate = string | redacted.Redacted<string>;
export type ProvisioningProfileName = string;
export interface CreateProvisioningProfileRequest {
  ProvisioningType: ProvisioningType;
  CaCertificate?: string | redacted.Redacted<string>;
  ClaimCertificate?: string | redacted.Redacted<string>;
  Name?: string;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateProvisioningProfileRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<CreateProvisioningProfileRequest>;
export type ProvisioningProfileArn = string;
export type ProvisioningProfileId = string;
export type ProvisioningProfileStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
const ProvisioningProfileStatus = S.String;

export type ClaimCertificatePrivateKey = string | redacted.Redacted<string>;
export interface CreateProvisioningProfileResponse {
  Arn?: string;
  Name?: string;
  ProvisioningType?: ProvisioningType;
  Id?: string;
  Status?: ProvisioningProfileStatus;
  ClaimCertificate?: string | redacted.Redacted<string>;
  ClaimCertificatePrivateKey?: string | redacted.Redacted<string>;
}
const CreateProvisioningProfileResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<CreateProvisioningProfileResponse>;
export interface DeleteAccountAssociationRequest {
  AccountAssociationId: string;
}
const DeleteAccountAssociationRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DeleteAccountAssociationRequest>;
export interface DeleteAccountAssociationResponse {}
const DeleteAccountAssociationResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DeleteAccountAssociationResponse>;
export interface DeleteCloudConnectorRequest {
  Identifier: string;
}
const DeleteCloudConnectorRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DeleteCloudConnectorRequest>;
export interface DeleteCloudConnectorResponse {}
const DeleteCloudConnectorResponse = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteCloudConnectorResponse>;
export interface DeleteConnectorDestinationRequest {
  Identifier: string;
}
const DeleteConnectorDestinationRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteConnectorDestinationRequest>;
export interface DeleteConnectorDestinationResponse {}
const DeleteConnectorDestinationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<DeleteConnectorDestinationResponse>;
export interface DeleteCredentialLockerRequest {
  Identifier: string;
}
const DeleteCredentialLockerRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteCredentialLockerRequest>;
export interface DeleteCredentialLockerResponse {}
const DeleteCredentialLockerResponse =
  DeleteCloudConnectorResponse as any as S.Schema<DeleteCredentialLockerResponse>;
export interface DeleteDestinationRequest {
  Name: string;
}
const DeleteDestinationRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteDestinationRequest>;
export interface DeleteDestinationResponse {}
const DeleteDestinationResponse =
  DeleteCloudConnectorResponse as any as S.Schema<DeleteDestinationResponse>;
export interface DeleteEventLogConfigurationRequest {
  Id: string;
}
const DeleteEventLogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteEventLogConfigurationRequest>;
export interface DeleteEventLogConfigurationResponse {}
const DeleteEventLogConfigurationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<DeleteEventLogConfigurationResponse>;
export interface DeleteManagedThingRequest {
  Identifier: string;
  Force?: boolean;
}
const DeleteManagedThingRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteManagedThingRequest>;
export interface DeleteManagedThingResponse {}
const DeleteManagedThingResponse =
  DeleteCloudConnectorResponse as any as S.Schema<DeleteManagedThingResponse>;
export interface DeleteNotificationConfigurationRequest {
  EventType: EventType;
}
const DeleteNotificationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DeleteNotificationConfigurationRequest>;
export interface DeleteNotificationConfigurationResponse {}
const DeleteNotificationConfigurationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<DeleteNotificationConfigurationResponse>;
export interface DeleteOtaTaskRequest {
  Identifier: string;
}
const DeleteOtaTaskRequest = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<DeleteOtaTaskRequest>;
export interface DeleteOtaTaskResponse {}
const DeleteOtaTaskResponse =
  DeleteCloudConnectorResponse as any as S.Schema<DeleteOtaTaskResponse>;
export interface DeleteOtaTaskConfigurationRequest {
  Identifier: string;
}
const DeleteOtaTaskConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DeleteOtaTaskConfigurationRequest>;
export interface DeleteOtaTaskConfigurationResponse {}
const DeleteOtaTaskConfigurationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<DeleteOtaTaskConfigurationResponse>;
export interface DeleteProvisioningProfileRequest {
  Identifier: string;
}
const DeleteProvisioningProfileRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DeleteProvisioningProfileRequest>;
export interface DeleteProvisioningProfileResponse {}
const DeleteProvisioningProfileResponse =
  DeleteAccountAssociationResponse as any as S.Schema<DeleteProvisioningProfileResponse>;
export interface DeregisterAccountAssociationRequest {
  ManagedThingId: string;
  AccountAssociationId: string;
}
const DeregisterAccountAssociationRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DeregisterAccountAssociationRequest>;
export interface DeregisterAccountAssociationResponse {}
const DeregisterAccountAssociationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<DeregisterAccountAssociationResponse>;
export interface GetAccountAssociationRequest {
  AccountAssociationId: string;
}
const GetAccountAssociationRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<GetAccountAssociationRequest>;
export type AccountAssociationErrorMessage = string;
export interface GetAccountAssociationResponse {
  AccountAssociationId: string;
  AssociationState: AssociationState;
  ErrorMessage?: string;
  ConnectorDestinationId?: string;
  Name?: string;
  Description?: string;
  Arn?: string;
  OAuthAuthorizationUrl: string | redacted.Redacted<string>;
  Tags?: { [key: string]: string | undefined };
  GeneralAuthorization?: GeneralAuthorizationName;
}
const GetAccountAssociationResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<GetAccountAssociationResponse>;
export interface GetCloudConnectorRequest {
  Identifier: string;
}
const GetCloudConnectorRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<GetCloudConnectorRequest>;
export type CloudConnectorType = "LISTED" | "UNLISTED" | (string & {});
const CloudConnectorType = S.String;

export interface GetCloudConnectorResponse {
  Name: string;
  EndpointConfig: EndpointConfig;
  Description?: string;
  EndpointType?: EndpointType;
  Id?: string;
  Type?: CloudConnectorType;
}
const GetCloudConnectorResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<GetCloudConnectorResponse>;
export interface GetConnectorDestinationRequest {
  Identifier: string;
}
const GetConnectorDestinationRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<GetConnectorDestinationRequest>;
export type OAuthCompleteRedirectUrl = string;
export interface GetConnectorDestinationResponse {
  Name?: string;
  Description?: string;
  CloudConnectorId?: string;
  Id?: string;
  AuthType?: AuthType;
  AuthConfig?: AuthConfig;
  SecretsManager?: SecretsManager;
  OAuthCompleteRedirectUrl?: string;
}
const GetConnectorDestinationResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<GetConnectorDestinationResponse>;
export interface GetCredentialLockerRequest {
  Identifier: string;
}
const GetCredentialLockerRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<GetCredentialLockerRequest>;
export interface GetCredentialLockerResponse {
  Id?: string;
  Arn?: string;
  Name?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetCredentialLockerResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<GetCredentialLockerResponse>;
export interface GetCustomEndpointRequest {}
const GetCustomEndpointRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<GetCustomEndpointRequest>;
export type EndpointAddress = string;
export interface GetCustomEndpointResponse {
  EndpointAddress: string;
}
const GetCustomEndpointResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<GetCustomEndpointResponse>;
export interface GetDefaultEncryptionConfigurationRequest {}
const GetDefaultEncryptionConfigurationRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<GetDefaultEncryptionConfigurationRequest>;
export type ConfigurationErrorCode = string;
export type ConfigurationErrorMessage = string;
export interface ConfigurationError {
  code?: string;
  message?: string;
}
const ConfigurationError = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<ConfigurationError>;
export type ConfigurationState = "ENABLED" | "UPDATE_IN_PROGRESS" | "UPDATE_FAILED" | (string & {});
const ConfigurationState = S.String;

export interface ConfigurationStatus {
  error?: ConfigurationError;
  state: ConfigurationState;
}
const ConfigurationStatus = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<ConfigurationStatus>;
export type EncryptionType =
  | "MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION"
  | "CUSTOMER_KEY_ENCRYPTION"
  | (string & {});
const EncryptionType = S.String;

export type KmsKeyArn = string;
export interface GetDefaultEncryptionConfigurationResponse {
  configurationStatus: ConfigurationStatus;
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
}
const GetDefaultEncryptionConfigurationResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetDefaultEncryptionConfigurationResponse>;
export interface GetDestinationRequest {
  Name: string;
}
const GetDestinationRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetDestinationRequest>;
export type DestinationCreatedAt = Date;
export type DestinationUpdatedAt = Date;
export interface GetDestinationResponse {
  Description?: string;
  DeliveryDestinationArn?: string;
  DeliveryDestinationType?: DeliveryDestinationType;
  Name?: string;
  RoleArn?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetDestinationResponse = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<GetDestinationResponse>;
export type DeviceDiscoveryId = string;
export interface GetDeviceDiscoveryRequest {
  Identifier: string;
}
const GetDeviceDiscoveryRequest = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetDeviceDiscoveryRequest>;
export type DeviceDiscoveryArn = string;
export type DiscoveryType =
  | "ZWAVE"
  | "ZIGBEE"
  | "CLOUD"
  | "CUSTOM"
  | "CONTROLLER_CAPABILITY_REDISCOVERY"
  | (string & {});
const DiscoveryType = S.String;

export type DeviceDiscoveryStatus =
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | (string & {});
const DeviceDiscoveryStatus = S.String;

export type DiscoveryStartedAt = Date;
export type ConnectorAssociationId = string;
export type DiscoveryFinishedAt = Date;
export interface GetDeviceDiscoveryResponse {
  Id: string;
  Arn: string;
  DiscoveryType: DiscoveryType;
  Status: DeviceDiscoveryStatus;
  StartedAt: Date;
  ControllerId?: string;
  ConnectorAssociationId?: string;
  AccountAssociationId?: string;
  FinishedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetDeviceDiscoveryResponse = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<GetDeviceDiscoveryResponse>;
export interface GetEventLogConfigurationRequest {
  Id: string;
}
const GetEventLogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<GetEventLogConfigurationRequest>;
export interface GetEventLogConfigurationResponse {
  Id?: string;
  ResourceType?: string;
  ResourceId?: string;
  EventLogLevel?: LogLevel;
}
const GetEventLogConfigurationResponse = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetEventLogConfigurationResponse>;
export interface GetHubConfigurationRequest {}
const GetHubConfigurationRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<GetHubConfigurationRequest>;
export type HubTokenTimerExpirySettingInSeconds = number;
export type HubConfigurationUpdatedAt = Date;
export interface GetHubConfigurationResponse {
  HubTokenTimerExpirySettingInSeconds?: number;
  UpdatedAt?: Date;
}
const GetHubConfigurationResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<GetHubConfigurationResponse>;
export interface GetManagedThingRequest {
  Identifier: string;
}
const GetManagedThingRequest = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<GetManagedThingRequest>;
export type AdvertisedProductId = string;
export type ProvisioningStatus =
  | "UNASSOCIATED"
  | "PRE_ASSOCIATED"
  | "DISCOVERED"
  | "ACTIVATED"
  | "DELETION_FAILED"
  | "DELETE_IN_PROGRESS"
  | "ISOLATED"
  | "DELETED"
  | (string & {});
const ProvisioningStatus = S.String;

export type UniversalProductCode = string | redacted.Redacted<string>;
export type InternationalArticleNumber = string | redacted.Redacted<string>;
export type ConnectorPolicyId = string;
export type ConnectorDeviceId = string | redacted.Redacted<string>;
export type DeviceSpecificKey = string | redacted.Redacted<string>;
export type MacAddress = string | redacted.Redacted<string>;
export type ParentControllerId = string;
export type UpdatedAt = Date;
export type SetupAt = Date;
export type HubNetworkMode = "STANDARD" | "NETWORK_WIDE_EXCLUSION" | (string & {});
const HubNetworkMode = S.String;

export interface GetManagedThingResponse {
  Id?: string;
  Arn?: string;
  Owner?: string | redacted.Redacted<string>;
  CredentialLockerId?: string;
  AdvertisedProductId?: string;
  Role?: Role;
  ProvisioningStatus?: ProvisioningStatus;
  Name?: string;
  Model?: string | redacted.Redacted<string>;
  Brand?: string | redacted.Redacted<string>;
  SerialNumber?: string | redacted.Redacted<string>;
  UniversalProductCode?: string | redacted.Redacted<string>;
  InternationalArticleNumber?: string | redacted.Redacted<string>;
  ConnectorPolicyId?: string;
  ConnectorDestinationId?: string;
  ConnectorDeviceId?: string | redacted.Redacted<string>;
  DeviceSpecificKey?: string | redacted.Redacted<string>;
  MacAddress?: string | redacted.Redacted<string>;
  ParentControllerId?: string;
  Classification?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ActivatedAt?: Date;
  HubNetworkMode?: HubNetworkMode;
  MetaData?: { [key: string]: string | undefined };
  Tags?: { [key: string]: string | undefined };
  WiFiSimpleSetupConfiguration?: WiFiSimpleSetupConfiguration;
}
const GetManagedThingResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<GetManagedThingResponse>;
export interface GetManagedThingCapabilitiesRequest {
  Identifier: string;
}
const GetManagedThingCapabilitiesRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<GetManagedThingCapabilitiesRequest>;
export interface GetManagedThingCapabilitiesResponse {
  ManagedThingId?: string;
  Capabilities?: string;
  CapabilityReport?: CapabilityReport;
}
const GetManagedThingCapabilitiesResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetManagedThingCapabilitiesResponse>;
export interface GetManagedThingCertificateRequest {
  Identifier: string;
}
const GetManagedThingCertificateRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetManagedThingCertificateRequest>;
export type CertificatePem = string;
export interface GetManagedThingCertificateResponse {
  ManagedThingId?: string;
  CertificatePem?: string;
}
const GetManagedThingCertificateResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<GetManagedThingCertificateResponse>;
export interface GetManagedThingConnectivityDataRequest {
  Identifier: string;
}
const GetManagedThingConnectivityDataRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetManagedThingConnectivityDataRequest>;
export type ConnectivityStatus = boolean;
export type ConnectivityTimestamp = Date;
export type DisconnectReasonValue =
  | "AUTH_ERROR"
  | "CLIENT_INITIATED_DISCONNECT"
  | "CLIENT_ERROR"
  | "CONNECTION_LOST"
  | "DUPLICATE_CLIENTID"
  | "FORBIDDEN_ACCESS"
  | "MQTT_KEEP_ALIVE_TIMEOUT"
  | "SERVER_ERROR"
  | "SERVER_INITIATED_DISCONNECT"
  | "THROTTLED"
  | "WEBSOCKET_TTL_EXPIRATION"
  | "CUSTOMAUTH_TTL_EXPIRATION"
  | "UNKNOWN"
  | "NONE"
  | (string & {});
const DisconnectReasonValue = S.String;

export interface GetManagedThingConnectivityDataResponse {
  ManagedThingId?: string;
  Connected?: boolean;
  Timestamp?: Date;
  DisconnectReason?: DisconnectReasonValue;
}
const GetManagedThingConnectivityDataResponse = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetManagedThingConnectivityDataResponse>;
export interface GetManagedThingMetaDataRequest {
  Identifier: string;
}
const GetManagedThingMetaDataRequest = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<GetManagedThingMetaDataRequest>;
export interface GetManagedThingMetaDataResponse {
  ManagedThingId?: string;
  MetaData?: { [key: string]: string | undefined };
}
const GetManagedThingMetaDataResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<GetManagedThingMetaDataResponse>;
export interface GetManagedThingStateRequest {
  ManagedThingId: string;
}
const GetManagedThingStateRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<GetManagedThingStateRequest>;
export type CapabilityProperties = unknown;
export interface StateCapability {
  id: string;
  name: string;
  version: string;
  properties?: any;
}
const StateCapability = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<StateCapability>;
export type StateCapabilities = StateCapability[];
const StateCapabilities = /*@__PURE__*/ __L.at(__c12, 4);
export interface StateEndpoint {
  endpointId: string;
  capabilities: StateCapability[];
}
const StateEndpoint = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<StateEndpoint>;
export type StateEndpoints = StateEndpoint[];
const StateEndpoints = /*@__PURE__*/ __L.at(__c12, 6);
export interface GetManagedThingStateResponse {
  Endpoints: StateEndpoint[];
}
const GetManagedThingStateResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<GetManagedThingStateResponse>;
export interface GetNotificationConfigurationRequest {
  EventType: EventType;
}
const GetNotificationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<GetNotificationConfigurationRequest>;
export type NotificationConfigurationCreatedAt = Date;
export type NotificationConfigurationUpdatedAt = Date;
export interface GetNotificationConfigurationResponse {
  EventType?: EventType;
  DestinationName?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetNotificationConfigurationResponse = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<GetNotificationConfigurationResponse>;
export interface GetOtaTaskRequest {
  Identifier: string;
}
const GetOtaTaskRequest = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<GetOtaTaskRequest>;
export type LastUpdatedAt = Date;
export interface TaskProcessingDetails {
  NumberOfCanceledThings?: number;
  NumberOfFailedThings?: number;
  NumberOfInProgressThings?: number;
  numberOfQueuedThings?: number;
  numberOfRejectedThings?: number;
  numberOfRemovedThings?: number;
  numberOfSucceededThings?: number;
  numberOfTimedOutThings?: number;
  processingTargets?: string[];
}
const TaskProcessingDetails = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<TaskProcessingDetails>;
export type OtaStatus =
  | "IN_PROGRESS"
  | "CANCELED"
  | "COMPLETED"
  | "DELETION_IN_PROGRESS"
  | "SCHEDULED"
  | (string & {});
const OtaStatus = S.String;

export interface GetOtaTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  Description?: string;
  S3Url?: string;
  Protocol?: OtaProtocol;
  OtaType?: OtaType;
  OtaTargetQueryString?: string;
  OtaMechanism?: OtaMechanism;
  Target?: string[];
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  TaskConfigurationId?: string;
  TaskProcessingDetails?: TaskProcessingDetails;
  OtaSchedulingConfig?: OtaTaskSchedulingConfig;
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig;
  Status?: OtaStatus;
  Tags?: { [key: string]: string | undefined };
}
const GetOtaTaskResponse = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<GetOtaTaskResponse>;
export interface GetOtaTaskConfigurationRequest {
  Identifier: string;
}
const GetOtaTaskConfigurationRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<GetOtaTaskConfigurationRequest>;
export interface GetOtaTaskConfigurationResponse {
  TaskConfigurationId?: string;
  Name?: string | redacted.Redacted<string>;
  PushConfig?: PushConfig;
  Description?: string;
  CreatedAt?: Date;
}
const GetOtaTaskConfigurationResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<GetOtaTaskConfigurationResponse>;
export interface GetProvisioningProfileRequest {
  Identifier: string;
}
const GetProvisioningProfileRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<GetProvisioningProfileRequest>;
export interface GetProvisioningProfileResponse {
  Arn?: string;
  Name?: string;
  ProvisioningType?: ProvisioningType;
  Id?: string;
  Status?: ProvisioningProfileStatus;
  ClaimCertificate?: string | redacted.Redacted<string>;
  Tags?: { [key: string]: string | undefined };
}
const GetProvisioningProfileResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<GetProvisioningProfileResponse>;
export interface GetRuntimeLogConfigurationRequest {
  ManagedThingId: string;
}
const GetRuntimeLogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<GetRuntimeLogConfigurationRequest>;
export type LocalStoreLocation = string;
export type LocalStoreFileRotationMaxFiles = number;
export type LocalStoreFileRotationMaxBytes = number;
export type UploadLog = boolean;
export type UploadPeriodMinutes = number;
export type DeleteLocalStoreAfterUpload = boolean;
export interface RuntimeLogConfigurations {
  LogLevel?: LogLevel;
  LogFlushLevel?: LogLevel;
  LocalStoreLocation?: string;
  LocalStoreFileRotationMaxFiles?: number;
  LocalStoreFileRotationMaxBytes?: number;
  UploadLog?: boolean;
  UploadPeriodMinutes?: number;
  DeleteLocalStoreAfterUpload?: boolean;
}
const RuntimeLogConfigurations = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<RuntimeLogConfigurations>;
export interface GetRuntimeLogConfigurationResponse {
  ManagedThingId?: string;
  RuntimeLogConfigurations?: RuntimeLogConfigurations;
}
const GetRuntimeLogConfigurationResponse = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<GetRuntimeLogConfigurationResponse>;
export type SchemaVersionType = "capability" | "definition" | (string & {});
const SchemaVersionType = S.String;

export interface GetSchemaVersionRequest {
  Type: SchemaVersionType;
  SchemaVersionedId: string;
  Format?: SchemaVersionFormat;
}
const GetSchemaVersionRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<GetSchemaVersionRequest>;
export type SchemaId = string;
export type SchemaVersionDescription = string;
export type SchemaVersionNamespaceName = string;
export type SchemaVersionVersion = string;
export type SchemaVersionVisibility = "PUBLIC" | "PRIVATE" | (string & {});
const SchemaVersionVisibility = S.String;

export type SchemaVersionSchema = unknown;
export interface GetSchemaVersionResponse {
  SchemaId?: string;
  Type?: SchemaVersionType;
  Description?: string;
  Namespace?: string;
  SemanticVersion?: string;
  Visibility?: SchemaVersionVisibility;
  Schema?: any;
}
const GetSchemaVersionResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<GetSchemaVersionResponse>;
export type MaxResults = number;
export type NextToken = string;
export interface ListAccountAssociationsRequest {
  ConnectorDestinationId?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListAccountAssociationsRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListAccountAssociationsRequest>;
export interface AccountAssociationItem {
  AccountAssociationId: string;
  AssociationState: AssociationState;
  ErrorMessage?: string;
  ConnectorDestinationId?: string;
  Name?: string;
  Description?: string;
  Arn?: string;
}
const AccountAssociationItem = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<AccountAssociationItem>;
export type AccountAssociationListDefinition = AccountAssociationItem[];
const AccountAssociationListDefinition = /*@__PURE__*/ __L.at(__c15, 0);
export interface ListAccountAssociationsResponse {
  Items?: AccountAssociationItem[];
  NextToken?: string;
}
const ListAccountAssociationsResponse = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListAccountAssociationsResponse>;
export interface ListCloudConnectorsRequest {
  Type?: CloudConnectorType;
  LambdaArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListCloudConnectorsRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListCloudConnectorsRequest>;
export interface ConnectorItem {
  Name: string;
  EndpointConfig: EndpointConfig;
  Description?: string;
  EndpointType?: EndpointType;
  Id?: string;
  Type?: CloudConnectorType;
}
const ConnectorItem = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<ConnectorItem>;
export type ConnectorList = ConnectorItem[];
const ConnectorList = /*@__PURE__*/ __L.at(__c15, 4);
export interface ListCloudConnectorsResponse {
  Items?: ConnectorItem[];
  NextToken?: string;
}
const ListCloudConnectorsResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListCloudConnectorsResponse>;
export interface ListConnectorDestinationsRequest {
  CloudConnectorId?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListConnectorDestinationsRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListConnectorDestinationsRequest>;
export interface ConnectorDestinationSummary {
  Name?: string;
  Description?: string;
  CloudConnectorId?: string;
  Id?: string;
}
const ConnectorDestinationSummary = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<ConnectorDestinationSummary>;
export type ConnectorDestinationListDefinition = ConnectorDestinationSummary[];
const ConnectorDestinationListDefinition = /*@__PURE__*/ __L.at(__c16, 0);
export interface ListConnectorDestinationsResponse {
  ConnectorDestinationList?: ConnectorDestinationSummary[];
  NextToken?: string;
}
const ListConnectorDestinationsResponse = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ListConnectorDestinationsResponse>;
export interface ListCredentialLockersRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListCredentialLockersRequest = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<ListCredentialLockersRequest>;
export interface CredentialLockerSummary {
  Id?: string;
  Arn?: string;
  Name?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
}
const CredentialLockerSummary = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<CredentialLockerSummary>;
export type CredentialLockerListDefinition = CredentialLockerSummary[];
const CredentialLockerListDefinition = /*@__PURE__*/ __L.at(__c16, 4);
export interface ListCredentialLockersResponse {
  Items?: CredentialLockerSummary[];
  NextToken?: string;
}
const ListCredentialLockersResponse = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ListCredentialLockersResponse>;
export interface ListDestinationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListDestinationsRequest = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<ListDestinationsRequest>;
export interface DestinationSummary {
  Description?: string;
  DeliveryDestinationArn?: string;
  DeliveryDestinationType?: DeliveryDestinationType;
  Name?: string;
  RoleArn?: string;
}
const DestinationSummary = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<DestinationSummary>;
export type DestinationListDefinition = DestinationSummary[];
const DestinationListDefinition = /*@__PURE__*/ __L.at(__c17, 0);
export interface ListDestinationsResponse {
  DestinationList?: DestinationSummary[];
  NextToken?: string;
}
const ListDestinationsResponse = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<ListDestinationsResponse>;
export interface ListDeviceDiscoveriesRequest {
  NextToken?: string;
  MaxResults?: number;
  TypeFilter?: DiscoveryType;
  StatusFilter?: DeviceDiscoveryStatus;
}
const ListDeviceDiscoveriesRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<ListDeviceDiscoveriesRequest>;
export interface DeviceDiscoverySummary {
  Id?: string;
  DiscoveryType?: DiscoveryType;
  Status?: DeviceDiscoveryStatus;
}
const DeviceDiscoverySummary = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<DeviceDiscoverySummary>;
export type DeviceDiscoveryListDefinition = DeviceDiscoverySummary[];
const DeviceDiscoveryListDefinition = /*@__PURE__*/ __L.at(__c17, 4);
export interface ListDeviceDiscoveriesResponse {
  Items?: DeviceDiscoverySummary[];
  NextToken?: string;
}
const ListDeviceDiscoveriesResponse = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ListDeviceDiscoveriesResponse>;
export interface ListDiscoveredDevicesRequest {
  Identifier: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListDiscoveredDevicesRequest = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<ListDiscoveredDevicesRequest>;
export type ConnectorDeviceName = string;
export type DeviceTypeList = string[];
const DeviceTypeList = DeviceTypes as any as S.Schema<DeviceTypeList>;
export type DiscoveryModification = "DISCOVERED" | "UPDATED" | "NO_CHANGE" | (string & {});
const DiscoveryModification = S.String;

export type DiscoveredAt = Date;
export interface DiscoveredDeviceSummary {
  ConnectorDeviceId?: string | redacted.Redacted<string>;
  ConnectorDeviceName?: string;
  DeviceTypes?: string[];
  ManagedThingId?: string;
  Modification?: DiscoveryModification;
  DiscoveredAt?: Date;
  Brand?: string | redacted.Redacted<string>;
  Model?: string | redacted.Redacted<string>;
  AuthenticationMaterial?: string | redacted.Redacted<string>;
}
const DiscoveredDeviceSummary = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<DiscoveredDeviceSummary>;
export type DiscoveredDeviceListDefinition = DiscoveredDeviceSummary[];
const DiscoveredDeviceListDefinition = /*@__PURE__*/ __L.at(__c18, 0);
export interface ListDiscoveredDevicesResponse {
  Items?: DiscoveredDeviceSummary[];
  NextToken?: string;
}
const ListDiscoveredDevicesResponse = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<ListDiscoveredDevicesResponse>;
export interface ListEventLogConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListEventLogConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<ListEventLogConfigurationsRequest>;
export interface EventLogConfigurationSummary {
  Id?: string;
  ResourceType?: string;
  ResourceId?: string;
  EventLogLevel?: LogLevel;
}
const EventLogConfigurationSummary =
  GetEventLogConfigurationResponse as any as S.Schema<EventLogConfigurationSummary>;
export type EventLogConfigurationListDefinition = EventLogConfigurationSummary[];
const EventLogConfigurationListDefinition = /*@__PURE__*/ __L.at(__c18, 3);
export interface ListEventLogConfigurationsResponse {
  EventLogConfigurationList?: EventLogConfigurationSummary[];
  NextToken?: string;
}
const ListEventLogConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<ListEventLogConfigurationsResponse>;
export interface ListManagedThingAccountAssociationsRequest {
  ManagedThingId?: string;
  AccountAssociationId?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListManagedThingAccountAssociationsRequest = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<ListManagedThingAccountAssociationsRequest>;
export type ManagedThingAssociationStatus = "PRE_ASSOCIATED" | "ASSOCIATED" | (string & {});
const ManagedThingAssociationStatus = S.String;

export interface ManagedThingAssociation {
  ManagedThingId?: string;
  AccountAssociationId?: string;
  ManagedThingAssociationStatus?: ManagedThingAssociationStatus;
}
const ManagedThingAssociation = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<ManagedThingAssociation>;
export type ManagedThingAssociationList = ManagedThingAssociation[];
const ManagedThingAssociationList = /*@__PURE__*/ __L.at(__c18, 7);
export interface ListManagedThingAccountAssociationsResponse {
  Items?: ManagedThingAssociation[];
  NextToken?: string;
}
const ListManagedThingAccountAssociationsResponse = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<ListManagedThingAccountAssociationsResponse>;
export interface ListManagedThingsRequest {
  OwnerFilter?: string | redacted.Redacted<string>;
  CredentialLockerFilter?: string;
  RoleFilter?: Role;
  ParentControllerIdentifierFilter?: string;
  ConnectorPolicyIdFilter?: string;
  ConnectorDestinationIdFilter?: string;
  ConnectorDeviceIdFilter?: string | redacted.Redacted<string>;
  SerialNumberFilter?: string | redacted.Redacted<string>;
  ProvisioningStatusFilter?: ProvisioningStatus;
  NextToken?: string;
  MaxResults?: number;
}
const ListManagedThingsRequest = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<ListManagedThingsRequest>;
export interface ManagedThingSummary {
  Id?: string;
  Arn?: string;
  AdvertisedProductId?: string;
  Brand?: string | redacted.Redacted<string>;
  Classification?: string | redacted.Redacted<string>;
  ConnectorDeviceId?: string | redacted.Redacted<string>;
  ConnectorPolicyId?: string;
  ConnectorDestinationId?: string;
  Model?: string | redacted.Redacted<string>;
  Name?: string;
  Owner?: string | redacted.Redacted<string>;
  CredentialLockerId?: string;
  ParentControllerId?: string;
  ProvisioningStatus?: ProvisioningStatus;
  Role?: Role;
  SerialNumber?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ActivatedAt?: Date;
}
const ManagedThingSummary = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<ManagedThingSummary>;
export type ManagedThingListDefinition = ManagedThingSummary[];
const ManagedThingListDefinition = /*@__PURE__*/ __L.at(__c19, 3);
export interface ListManagedThingsResponse {
  Items?: ManagedThingSummary[];
  NextToken?: string;
}
const ListManagedThingsResponse = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<ListManagedThingsResponse>;
export type CapabilityId = string;
export interface ListManagedThingSchemasRequest {
  Identifier: string;
  EndpointIdFilter?: string;
  CapabilityIdFilter?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListManagedThingSchemasRequest = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<ListManagedThingSchemasRequest>;
export interface ManagedThingSchemaListItem {
  EndpointId?: string;
  CapabilityId?: string;
  Schema?: any;
}
const ManagedThingSchemaListItem = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<ManagedThingSchemaListItem>;
export type ManagedThingSchemaListDefinition = ManagedThingSchemaListItem[];
const ManagedThingSchemaListDefinition = /*@__PURE__*/ __L.at(__c19, 7);
export interface ListManagedThingSchemasResponse {
  Items?: ManagedThingSchemaListItem[];
  NextToken?: string;
}
const ListManagedThingSchemasResponse = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ListManagedThingSchemasResponse>;
export interface ListNotificationConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListNotificationConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ListNotificationConfigurationsRequest>;
export interface NotificationConfigurationSummary {
  EventType?: EventType;
  DestinationName?: string;
}
const NotificationConfigurationSummary = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<NotificationConfigurationSummary>;
export type NotificationConfigurationListDefinition = NotificationConfigurationSummary[];
const NotificationConfigurationListDefinition = /*@__PURE__*/ __L.at(__c20, 3);
export interface ListNotificationConfigurationsResponse {
  NotificationConfigurationList?: NotificationConfigurationSummary[];
  NextToken?: string;
}
const ListNotificationConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ListNotificationConfigurationsResponse>;
export interface ListOtaTaskConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListOtaTaskConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ListOtaTaskConfigurationsRequest>;
export interface OtaTaskConfigurationSummary {
  TaskConfigurationId?: string;
  Name?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
}
const OtaTaskConfigurationSummary = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<OtaTaskConfigurationSummary>;
export type OtaTaskConfigurationListDefinition = OtaTaskConfigurationSummary[];
const OtaTaskConfigurationListDefinition = /*@__PURE__*/ __L.at(__c20, 7);
export interface ListOtaTaskConfigurationsResponse {
  Items?: OtaTaskConfigurationSummary[];
  NextToken?: string;
}
const ListOtaTaskConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<ListOtaTaskConfigurationsResponse>;
export type OtaNextToken = string;
export interface ListOtaTaskExecutionsRequest {
  Identifier: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListOtaTaskExecutionsRequest = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<ListOtaTaskExecutionsRequest>;
export type ExecutionNumber = number;
export type QueuedAt = Date;
export type RetryAttempt = number;
export type StartedAt = Date;
export type OtaTaskExecutionStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | "REJECTED"
  | "REMOVED"
  | "CANCELED"
  | (string & {});
const OtaTaskExecutionStatus = S.String;

export interface OtaTaskExecutionSummary {
  ExecutionNumber?: number;
  LastUpdatedAt?: Date;
  QueuedAt?: Date;
  RetryAttempt?: number;
  StartedAt?: Date;
  Status?: OtaTaskExecutionStatus;
}
const OtaTaskExecutionSummary = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<OtaTaskExecutionSummary>;
export interface OtaTaskExecutionSummaries {
  TaskExecutionSummary?: OtaTaskExecutionSummary;
  ManagedThingId?: string;
}
const OtaTaskExecutionSummaries = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<OtaTaskExecutionSummaries>;
export type OtaTaskExecutionSummariesListDefinition = OtaTaskExecutionSummaries[];
const OtaTaskExecutionSummariesListDefinition = /*@__PURE__*/ __L.at(__c21, 4);
export interface ListOtaTaskExecutionsResponse {
  ExecutionSummaries?: OtaTaskExecutionSummaries[];
  NextToken?: string;
}
const ListOtaTaskExecutionsResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<ListOtaTaskExecutionsResponse>;
export interface ListOtaTasksRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListOtaTasksRequest = /*@__PURE__*/ __L.at(__c21, 6) as any as S.Schema<ListOtaTasksRequest>;
export interface OtaTaskSummary {
  TaskId?: string;
  TaskArn?: string;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  TaskConfigurationId?: string;
  Status?: OtaStatus;
}
const OtaTaskSummary = /*@__PURE__*/ __L.at(__c21, 7) as any as S.Schema<OtaTaskSummary>;
export type OtaTaskListDefinition = OtaTaskSummary[];
const OtaTaskListDefinition = /*@__PURE__*/ __L.at(__c22, 0);
export interface ListOtaTasksResponse {
  Tasks?: OtaTaskSummary[];
  NextToken?: string;
}
const ListOtaTasksResponse = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<ListOtaTasksResponse>;
export interface ListProvisioningProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListProvisioningProfilesRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<ListProvisioningProfilesRequest>;
export interface ProvisioningProfileSummary {
  Name?: string;
  Id?: string;
  Arn?: string;
  ProvisioningType?: ProvisioningType;
  Status?: ProvisioningProfileStatus;
}
const ProvisioningProfileSummary = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<ProvisioningProfileSummary>;
export type ProvisioningProfileListDefinition = ProvisioningProfileSummary[];
const ProvisioningProfileListDefinition = /*@__PURE__*/ __L.at(__c22, 4);
export interface ListProvisioningProfilesResponse {
  Items?: ProvisioningProfileSummary[];
  NextToken?: string;
}
const ListProvisioningProfilesResponse = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<ListProvisioningProfilesResponse>;
export interface ListSchemaVersionsRequest {
  Type: SchemaVersionType;
  MaxResults?: number;
  NextToken?: string;
  SchemaId?: string;
  Namespace?: string;
  Visibility?: SchemaVersionVisibility;
  SemanticVersion?: string;
}
const ListSchemaVersionsRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<ListSchemaVersionsRequest>;
export interface SchemaVersionListItem {
  SchemaId?: string;
  Type?: SchemaVersionType;
  Description?: string;
  Namespace?: string;
  SemanticVersion?: string;
  Visibility?: SchemaVersionVisibility;
}
const SchemaVersionListItem = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<SchemaVersionListItem>;
export type SchemaVersionList = SchemaVersionListItem[];
const SchemaVersionList = /*@__PURE__*/ __L.at(__c23, 0);
export interface ListSchemaVersionsResponse {
  Items?: SchemaVersionListItem[];
  NextToken?: string;
}
const ListSchemaVersionsResponse = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<ListSchemaVersionsResponse>;
export type IoTManagedIntegrationsResourceARN = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutDefaultEncryptionConfigurationRequest {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
}
const PutDefaultEncryptionConfigurationRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<PutDefaultEncryptionConfigurationRequest>;
export interface PutDefaultEncryptionConfigurationResponse {
  configurationStatus: ConfigurationStatus;
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
}
const PutDefaultEncryptionConfigurationResponse =
  GetDefaultEncryptionConfigurationResponse as any as S.Schema<PutDefaultEncryptionConfigurationResponse>;
export interface PutHubConfigurationRequest {
  HubTokenTimerExpirySettingInSeconds: number;
}
const PutHubConfigurationRequest = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<PutHubConfigurationRequest>;
export interface PutHubConfigurationResponse {
  HubTokenTimerExpirySettingInSeconds?: number;
}
const PutHubConfigurationResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<PutHubConfigurationResponse>;
export interface PutRuntimeLogConfigurationRequest {
  ManagedThingId: string;
  RuntimeLogConfigurations: RuntimeLogConfigurations;
}
const PutRuntimeLogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<PutRuntimeLogConfigurationRequest>;
export interface PutRuntimeLogConfigurationResponse {}
const PutRuntimeLogConfigurationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<PutRuntimeLogConfigurationResponse>;
export interface RegisterAccountAssociationRequest {
  ManagedThingId: string;
  AccountAssociationId: string;
  DeviceDiscoveryId: string;
}
const RegisterAccountAssociationRequest = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<RegisterAccountAssociationRequest>;
export interface RegisterAccountAssociationResponse {
  AccountAssociationId?: string;
  DeviceDiscoveryId?: string;
  ManagedThingId?: string;
}
const RegisterAccountAssociationResponse = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<RegisterAccountAssociationResponse>;
export interface RegisterCustomEndpointRequest {}
const RegisterCustomEndpointRequest = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<RegisterCustomEndpointRequest>;
export interface RegisterCustomEndpointResponse {
  EndpointAddress: string;
}
const RegisterCustomEndpointResponse =
  GetCustomEndpointResponse as any as S.Schema<RegisterCustomEndpointResponse>;
export interface ResetRuntimeLogConfigurationRequest {
  ManagedThingId: string;
}
const ResetRuntimeLogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<ResetRuntimeLogConfigurationRequest>;
export interface ResetRuntimeLogConfigurationResponse {}
const ResetRuntimeLogConfigurationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<ResetRuntimeLogConfigurationResponse>;
export type ConnectorId = string;
export type ThirdPartyUserId = string | redacted.Redacted<string>;
export type ConnectorEventOperation =
  | "DEVICE_COMMAND_RESPONSE"
  | "DEVICE_DISCOVERY"
  | "DEVICE_EVENT"
  | "DEVICE_COMMAND_REQUEST"
  | (string & {});
const ConnectorEventOperation = S.String;

export type ConnectorEventOperationVersion = string;
export type ConnectorEventStatusCode = number;
export type ConnectorEventMessage = string | redacted.Redacted<string>;
export type TraceId = string;
export type ClusterId = string;
export type SpecVersion = string;
export type MatterAttributeId = string;
export type MatterCapabilityReportAttributeValue = unknown;
export interface MatterCapabilityReportAttribute {
  id?: string;
  name?: string;
  value?: any;
}
const MatterCapabilityReportAttribute = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<MatterCapabilityReportAttribute>;
export type MatterCapabilityReportAttributes = MatterCapabilityReportAttribute[];
const MatterCapabilityReportAttributes = /*@__PURE__*/ __L.at(__c24, 5);
export type MatterCommandId = string;
export type MatterCapabilityReportCommands = string[];
const MatterCapabilityReportCommands =
  DeviceTypes as any as S.Schema<MatterCapabilityReportCommands>;
export type MatterEventId = string;
export type MatterCapabilityReportEvents = string[];
const MatterCapabilityReportEvents = DeviceTypes as any as S.Schema<MatterCapabilityReportEvents>;
export type MatterCapabilityReportFeatureMap = number;
export type MatterCapabilityReportGeneratedCommands = string[];
const MatterCapabilityReportGeneratedCommands =
  DeviceTypes as any as S.Schema<MatterCapabilityReportGeneratedCommands>;
export type MatterCapabilityReportFabricIndex = number;
export interface MatterCapabilityReportCluster {
  id: string;
  revision: number;
  publicId?: string;
  name?: string;
  specVersion?: string;
  attributes?: MatterCapabilityReportAttribute[];
  commands?: string[];
  events?: string[];
  featureMap?: number;
  generatedCommands?: string[];
  fabricIndex?: number;
}
const MatterCapabilityReportCluster = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<MatterCapabilityReportCluster>;
export type MatterCapabilityReportClusters = MatterCapabilityReportCluster[];
const MatterCapabilityReportClusters = /*@__PURE__*/ __L.at(__c24, 7);
export type MatterCapabilityReportEndpointParts = string[];
const MatterCapabilityReportEndpointParts =
  DeviceTypes as any as S.Schema<MatterCapabilityReportEndpointParts>;
export type EndpointSemanticTag = string;
export type MatterCapabilityReportEndpointSemanticTags = string[];
const MatterCapabilityReportEndpointSemanticTags =
  DeviceTypes as any as S.Schema<MatterCapabilityReportEndpointSemanticTags>;
export type MatterCapabilityReportEndpointClientClusters = string[];
const MatterCapabilityReportEndpointClientClusters =
  DeviceTypes as any as S.Schema<MatterCapabilityReportEndpointClientClusters>;
export interface MatterCapabilityReportEndpoint {
  id: string;
  deviceTypes: string[];
  clusters: MatterCapabilityReportCluster[];
  parts?: string[];
  semanticTags?: string[];
  clientClusters?: string[];
}
const MatterCapabilityReportEndpoint = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<MatterCapabilityReportEndpoint>;
export type MatterCapabilityReportEndpoints = MatterCapabilityReportEndpoint[];
const MatterCapabilityReportEndpoints = /*@__PURE__*/ __L.at(__c25, 1);
export interface MatterCapabilityReport {
  version: string;
  nodeId?: string;
  endpoints: MatterCapabilityReportEndpoint[];
}
const MatterCapabilityReport = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<MatterCapabilityReport>;
export type DeviceMetadata = unknown;
export interface Device {
  ConnectorDeviceId: string | redacted.Redacted<string>;
  ConnectorDeviceName?: string;
  CapabilityReport: MatterCapabilityReport;
  CapabilitySchemas?: CapabilitySchemaItem[];
  DeviceMetadata?: any;
}
const Device = /*@__PURE__*/ __L.at(__c25, 3) as any as S.Schema<Device>;
export type Devices = Device[];
const Devices = /*@__PURE__*/ __L.at(__c25, 4);
export type MatterAttributes = unknown;
export type MatterFields = unknown;
export type MatterCommands = { [key: string]: any | undefined };
const MatterCommands = /*@__PURE__*/ __L.at(__c25, 5);
export type MatterEvents = { [key: string]: any | undefined };
const MatterEvents = /*@__PURE__*/ __L.at(__c25, 6);
export interface MatterCluster {
  id?: string;
  attributes?: any;
  commands?: { [key: string]: any | undefined };
  events?: { [key: string]: any | undefined };
}
const MatterCluster = /*@__PURE__*/ __L.at(__c25, 7) as any as S.Schema<MatterCluster>;
export type MatterClusters = MatterCluster[];
const MatterClusters = /*@__PURE__*/ __L.at(__c26, 0);
export interface MatterEndpoint {
  id?: string;
  clusters?: MatterCluster[];
}
const MatterEndpoint = /*@__PURE__*/ __L.at(__c26, 1) as any as S.Schema<MatterEndpoint>;
export interface SendConnectorEventRequest {
  ConnectorId: string;
  UserId?: string | redacted.Redacted<string>;
  Operation: ConnectorEventOperation;
  OperationVersion?: string;
  StatusCode?: number;
  Message?: string | redacted.Redacted<string>;
  DeviceDiscoveryId?: string;
  ConnectorDeviceId?: string | redacted.Redacted<string>;
  TraceId?: string;
  Devices?: Device[];
  MatterEndpoint?: MatterEndpoint;
}
const SendConnectorEventRequest = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<SendConnectorEventRequest>;
export interface SendConnectorEventResponse {
  ConnectorId: string;
}
const SendConnectorEventResponse = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<SendConnectorEventResponse>;
export type CapabilityActionName = string;
export type ActionReference = string;
export type ActionTraceId = string;
export interface CapabilityAction {
  name: string;
  ref?: string;
  actionTraceId?: string;
  parameters?: any;
}
const CapabilityAction = /*@__PURE__*/ __L.at(__c26, 4) as any as S.Schema<CapabilityAction>;
export type CapabilityActions = CapabilityAction[];
const CapabilityActions = /*@__PURE__*/ __L.at(__c26, 5);
export interface CommandCapability {
  id: string;
  name: string;
  version: string;
  actions: CapabilityAction[];
}
const CommandCapability = /*@__PURE__*/ __L.at(__c26, 6) as any as S.Schema<CommandCapability>;
export type CommandCapabilities = CommandCapability[];
const CommandCapabilities = /*@__PURE__*/ __L.at(__c26, 7);
export interface CommandEndpoint {
  endpointId: string;
  capabilities: CommandCapability[];
}
const CommandEndpoint = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<CommandEndpoint>;
export type CommandEndpoints = CommandEndpoint[];
const CommandEndpoints = /*@__PURE__*/ __L.at(__c27, 1);
export interface SendManagedThingCommandRequest {
  ManagedThingId: string;
  Endpoints: CommandEndpoint[];
  ConnectorAssociationId?: string;
  AccountAssociationId?: string;
}
const SendManagedThingCommandRequest = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<SendManagedThingCommandRequest>;
export interface SendManagedThingCommandResponse {
  TraceId?: string;
}
const SendManagedThingCommandResponse = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<SendManagedThingCommandResponse>;
export interface StartAccountAssociationRefreshRequest {
  AccountAssociationId: string;
}
const StartAccountAssociationRefreshRequest = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<StartAccountAssociationRefreshRequest>;
export interface StartAccountAssociationRefreshResponse {
  OAuthAuthorizationUrl: string | redacted.Redacted<string>;
}
const StartAccountAssociationRefreshResponse = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<StartAccountAssociationRefreshResponse>;
export type CustomProtocolDetailKey = string;
export type CustomProtocolDetailValue = string;
export type CustomProtocolDetail = { [key: string]: string | undefined };
const CustomProtocolDetail = /*@__PURE__*/ __L.at(__c27, 6);
export type DiscoveryAuthMaterialString = string | redacted.Redacted<string>;
export type DiscoveryAuthMaterialType = "ZWAVE_INSTALL_CODE" | (string & {});
const DiscoveryAuthMaterialType = S.String;

export type ConnectorDeviceIdList = (string | redacted.Redacted<string>)[];
const ConnectorDeviceIdList = /*@__PURE__*/ __L.at(__c27, 7);
export type ProtocolType = "ZWAVE" | "ZIGBEE" | "CUSTOM" | (string & {});
const ProtocolType = S.String;

export interface StartDeviceDiscoveryRequest {
  DiscoveryType: DiscoveryType;
  CustomProtocolDetail?: { [key: string]: string | undefined };
  ControllerIdentifier?: string;
  ConnectorAssociationIdentifier?: string;
  AccountAssociationId?: string;
  AuthenticationMaterial?: string | redacted.Redacted<string>;
  AuthenticationMaterialType?: DiscoveryAuthMaterialType;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
  ConnectorDeviceIdList?: (string | redacted.Redacted<string>)[];
  Protocol?: ProtocolType;
  EndDeviceIdentifier?: string;
}
const StartDeviceDiscoveryRequest = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<StartDeviceDiscoveryRequest>;
export interface StartDeviceDiscoveryResponse {
  Id?: string;
  StartedAt?: Date;
}
const StartDeviceDiscoveryResponse = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<StartDeviceDiscoveryResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c28, 2) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteCloudConnectorResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = DeviceTypes as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteCloudConnectorResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAccountAssociationRequest {
  AccountAssociationId: string;
  Name?: string;
  Description?: string;
}
const UpdateAccountAssociationRequest = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<UpdateAccountAssociationRequest>;
export interface UpdateAccountAssociationResponse {}
const UpdateAccountAssociationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<UpdateAccountAssociationResponse>;
export interface UpdateCloudConnectorRequest {
  Identifier: string;
  Name?: string;
  Description?: string;
}
const UpdateCloudConnectorRequest = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<UpdateCloudConnectorRequest>;
export interface UpdateCloudConnectorResponse {}
const UpdateCloudConnectorResponse =
  DeleteCloudConnectorResponse as any as S.Schema<UpdateCloudConnectorResponse>;
export interface OAuthUpdate {
  oAuthCompleteRedirectUrl?: string;
  proactiveRefreshTokenRenewal?: ProactiveRefreshTokenRenewal;
}
const OAuthUpdate = /*@__PURE__*/ __L.at(__c28, 6) as any as S.Schema<OAuthUpdate>;
export interface GeneralAuthorizationUpdate {
  AuthMaterialsToAdd?: AuthMaterial[];
  AuthMaterialsToUpdate?: AuthMaterial[];
}
const GeneralAuthorizationUpdate = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<GeneralAuthorizationUpdate>;
export interface AuthConfigUpdate {
  oAuthUpdate?: OAuthUpdate;
  GeneralAuthorizationUpdate?: GeneralAuthorizationUpdate;
}
const AuthConfigUpdate = /*@__PURE__*/ __L.at(__c29, 0) as any as S.Schema<AuthConfigUpdate>;
export interface UpdateConnectorDestinationRequest {
  Identifier: string;
  Description?: string;
  Name?: string;
  AuthType?: AuthType;
  AuthConfig?: AuthConfigUpdate;
  SecretsManager?: SecretsManager;
}
const UpdateConnectorDestinationRequest = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<UpdateConnectorDestinationRequest>;
export interface UpdateConnectorDestinationResponse {}
const UpdateConnectorDestinationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<UpdateConnectorDestinationResponse>;
export interface UpdateDestinationRequest {
  Name: string;
  DeliveryDestinationArn?: string;
  DeliveryDestinationType?: DeliveryDestinationType;
  RoleArn?: string;
  Description?: string;
}
const UpdateDestinationRequest = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<UpdateDestinationRequest>;
export interface UpdateDestinationResponse {}
const UpdateDestinationResponse =
  DeleteCloudConnectorResponse as any as S.Schema<UpdateDestinationResponse>;
export interface UpdateEventLogConfigurationRequest {
  Id: string;
  EventLogLevel: LogLevel;
}
const UpdateEventLogConfigurationRequest = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<UpdateEventLogConfigurationRequest>;
export interface UpdateEventLogConfigurationResponse {}
const UpdateEventLogConfigurationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<UpdateEventLogConfigurationResponse>;
export interface UpdateManagedThingRequest {
  Identifier: string;
  Owner?: string | redacted.Redacted<string>;
  CredentialLockerId?: string;
  SerialNumber?: string | redacted.Redacted<string>;
  WiFiSimpleSetupConfiguration?: WiFiSimpleSetupConfiguration;
  Brand?: string | redacted.Redacted<string>;
  Model?: string | redacted.Redacted<string>;
  Name?: string;
  CapabilityReport?: CapabilityReport;
  CapabilitySchemas?: CapabilitySchemaItem[];
  Capabilities?: string;
  Classification?: string | redacted.Redacted<string>;
  HubNetworkMode?: HubNetworkMode;
  MetaData?: { [key: string]: string | undefined };
}
const UpdateManagedThingRequest = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<UpdateManagedThingRequest>;
export interface UpdateManagedThingResponse {}
const UpdateManagedThingResponse =
  DeleteCloudConnectorResponse as any as S.Schema<UpdateManagedThingResponse>;
export interface UpdateNotificationConfigurationRequest {
  EventType: EventType;
  DestinationName: string;
}
const UpdateNotificationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<UpdateNotificationConfigurationRequest>;
export interface UpdateNotificationConfigurationResponse {}
const UpdateNotificationConfigurationResponse =
  DeleteAccountAssociationResponse as any as S.Schema<UpdateNotificationConfigurationResponse>;
export interface UpdateOtaTaskRequest {
  Identifier: string;
  Description?: string;
  TaskConfigurationId?: string;
}
const UpdateOtaTaskRequest = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<UpdateOtaTaskRequest>;
export interface UpdateOtaTaskResponse {}
const UpdateOtaTaskResponse =
  DeleteCloudConnectorResponse as any as S.Schema<UpdateOtaTaskResponse>;
export type ErrorMessage = string;
export type ErrorResourceId = string;
export type ErrorResourceType = string;
export type CreateAccountAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new account association via the destination id.
 */
export const createAccountAssociation: API.OperationMethod<
  CreateAccountAssociationRequest,
  CreateAccountAssociationResponse,
  CreateAccountAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccountAssociationRequest,
  output: CreateAccountAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccountAssociation",
}));

export type CreateCloudConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a C2C (cloud-to-cloud) connector.
 */
export const createCloudConnector: API.OperationMethod<
  CreateCloudConnectorRequest,
  CreateCloudConnectorResponse,
  CreateCloudConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCloudConnectorRequest,
  output: CreateCloudConnectorResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCloudConnector",
}));

export type CreateConnectorDestinationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Create a connector destination for connecting a cloud-to-cloud (C2C) connector to the customer's Amazon Web Services account.
 */
export const createConnectorDestination: API.OperationMethod<
  CreateConnectorDestinationRequest,
  CreateConnectorDestinationResponse,
  CreateConnectorDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConnectorDestinationRequest,
  output: CreateConnectorDestinationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnectorDestination",
}));

export type CreateCredentialLockerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a credential locker.
 *
 * This operation will not trigger the creation of all the manufacturing resources.
 */
export const createCredentialLocker: API.OperationMethod<
  CreateCredentialLockerRequest,
  CreateCredentialLockerResponse,
  CreateCredentialLockerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCredentialLockerRequest,
  output: CreateCredentialLockerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCredentialLocker",
}));

export type CreateDestinationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a notification destination such as Kinesis Data Streams that receive events and notifications from Managed integrations. Managed integrations uses the destination to determine where to deliver notifications.
 */
export const createDestination: API.OperationMethod<
  CreateDestinationRequest,
  CreateDestinationResponse,
  CreateDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDestinationRequest,
  output: CreateDestinationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDestination",
}));

export type CreateEventLogConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Set the event log configuration for the account, resource type, or specific resource.
 */
export const createEventLogConfiguration: API.OperationMethod<
  CreateEventLogConfigurationRequest,
  CreateEventLogConfigurationResponse,
  CreateEventLogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEventLogConfigurationRequest,
  output: CreateEventLogConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEventLogConfiguration",
}));

export type CreateManagedThingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a managed thing. A managed thing contains the device identifier, protocol supported, and capabilities of the device in a data model format defined by Managed integrations.
 */
export const createManagedThing: API.OperationMethod<
  CreateManagedThingRequest,
  CreateManagedThingResponse,
  CreateManagedThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateManagedThingRequest,
  output: CreateManagedThingResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateManagedThing",
}));

export type CreateNotificationConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a notification configuration. A configuration is a connection between an event type and a destination that you have already created.
 */
export const createNotificationConfiguration: API.OperationMethod<
  CreateNotificationConfigurationRequest,
  CreateNotificationConfigurationResponse,
  CreateNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNotificationConfigurationRequest,
  output: CreateNotificationConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNotificationConfiguration",
}));

export type CreateOtaTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Create an over-the-air (OTA) task to target a device.
 */
export const createOtaTask: API.OperationMethod<
  CreateOtaTaskRequest,
  CreateOtaTaskResponse,
  CreateOtaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOtaTaskRequest,
  output: CreateOtaTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOtaTask",
}));

export type CreateOtaTaskConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a configuraiton for the over-the-air (OTA) task.
 */
export const createOtaTaskConfiguration: API.OperationMethod<
  CreateOtaTaskConfigurationRequest,
  CreateOtaTaskConfigurationResponse,
  CreateOtaTaskConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOtaTaskConfigurationRequest,
  output: CreateOtaTaskConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOtaTaskConfiguration",
}));

export type CreateProvisioningProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Create a provisioning profile for executing device provisioning flows. The provisioning profile is a document that defines the set of resources and policies applied to a device during the provisioning process.
 */
export const createProvisioningProfile: API.OperationMethod<
  CreateProvisioningProfileRequest,
  CreateProvisioningProfileResponse,
  CreateProvisioningProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProvisioningProfileRequest,
  output: CreateProvisioningProfileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProvisioningProfile",
}));

export type DeleteAccountAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Remove a third-party account association for an end user.
 *
 * You must first call the `DeregisterAccountAssociation` to remove the connection between the managed thing and the third-party account before calling the `DeleteAccountAssociation` API.
 */
export const deleteAccountAssociation: API.OperationMethod<
  DeleteAccountAssociationRequest,
  DeleteAccountAssociationResponse,
  DeleteAccountAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountAssociationRequest,
  output: DeleteAccountAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountAssociation",
}));

export type DeleteCloudConnectorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Delete a cloud connector.
 */
export const deleteCloudConnector: API.OperationMethod<
  DeleteCloudConnectorRequest,
  DeleteCloudConnectorResponse,
  DeleteCloudConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCloudConnectorRequest,
  output: DeleteCloudConnectorResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCloudConnector",
}));

export type DeleteConnectorDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a connector destination linked to a cloud-to-cloud (C2C) connector.
 *
 * Deletion can't be done if the account association has used this connector destination.
 */
export const deleteConnectorDestination: API.OperationMethod<
  DeleteConnectorDestinationRequest,
  DeleteConnectorDestinationResponse,
  DeleteConnectorDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectorDestinationRequest,
  output: DeleteConnectorDestinationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnectorDestination",
}));

export type DeleteCredentialLockerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a credential locker.
 *
 * This operation can't be undone and any existing device won't be able to use IoT managed integrations.
 */
export const deleteCredentialLocker: API.OperationMethod<
  DeleteCredentialLockerRequest,
  DeleteCredentialLockerResponse,
  DeleteCredentialLockerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCredentialLockerRequest,
  output: DeleteCredentialLockerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCredentialLocker",
}));

export type DeleteDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a notification destination specified by name.
 */
export const deleteDestination: API.OperationMethod<
  DeleteDestinationRequest,
  DeleteDestinationResponse,
  DeleteDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDestinationRequest,
  output: DeleteDestinationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDestination",
}));

export type DeleteEventLogConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an event log configuration.
 */
export const deleteEventLogConfiguration: API.OperationMethod<
  DeleteEventLogConfigurationRequest,
  DeleteEventLogConfigurationResponse,
  DeleteEventLogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEventLogConfigurationRequest,
  output: DeleteEventLogConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventLogConfiguration",
}));

export type DeleteManagedThingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Delete a managed thing. For direct-connected and hub-connected devices connecting with Managed integrations via a controller, all of the devices connected to it will have their status changed to `PENDING`. It is not possible to remove a cloud-to-cloud device.
 */
export const deleteManagedThing: API.OperationMethod<
  DeleteManagedThingRequest,
  DeleteManagedThingResponse,
  DeleteManagedThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteManagedThingRequest,
  output: DeleteManagedThingResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteManagedThing",
}));

export type DeleteNotificationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a notification configuration.
 */
export const deleteNotificationConfiguration: API.OperationMethod<
  DeleteNotificationConfigurationRequest,
  DeleteNotificationConfigurationResponse,
  DeleteNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNotificationConfigurationRequest,
  output: DeleteNotificationConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNotificationConfiguration",
}));

export type DeleteOtaTaskError =
  | AccessDeniedException
  | InternalServerException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete the over-the-air (OTA) task.
 */
export const deleteOtaTask: API.OperationMethod<
  DeleteOtaTaskRequest,
  DeleteOtaTaskResponse,
  DeleteOtaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOtaTaskRequest,
  output: DeleteOtaTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOtaTask",
}));

export type DeleteOtaTaskConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete the over-the-air (OTA) task configuration.
 */
export const deleteOtaTaskConfiguration: API.OperationMethod<
  DeleteOtaTaskConfigurationRequest,
  DeleteOtaTaskConfigurationResponse,
  DeleteOtaTaskConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOtaTaskConfigurationRequest,
  output: DeleteOtaTaskConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOtaTaskConfiguration",
}));

export type DeleteProvisioningProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Delete a provisioning profile.
 */
export const deleteProvisioningProfile: API.OperationMethod<
  DeleteProvisioningProfileRequest,
  DeleteProvisioningProfileResponse,
  DeleteProvisioningProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProvisioningProfileRequest,
  output: DeleteProvisioningProfileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProvisioningProfile",
}));

export type DeregisterAccountAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregister an account association from a managed thing.
 */
export const deregisterAccountAssociation: API.OperationMethod<
  DeregisterAccountAssociationRequest,
  DeregisterAccountAssociationResponse,
  DeregisterAccountAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterAccountAssociationRequest,
  output: DeregisterAccountAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterAccountAssociation",
}));

export type GetAccountAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get an account association for an Amazon Web Services account linked to a customer-managed destination.
 */
export const getAccountAssociation: API.OperationMethod<
  GetAccountAssociationRequest,
  GetAccountAssociationResponse,
  GetAccountAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountAssociationRequest,
  output: GetAccountAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountAssociation",
}));

export type GetCloudConnectorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get configuration details for a cloud connector.
 */
export const getCloudConnector: API.OperationMethod<
  GetCloudConnectorRequest,
  GetCloudConnectorResponse,
  GetCloudConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCloudConnectorRequest,
  output: GetCloudConnectorResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCloudConnector",
}));

export type GetConnectorDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get connector destination details linked to a cloud-to-cloud (C2C) connector.
 */
export const getConnectorDestination: API.OperationMethod<
  GetConnectorDestinationRequest,
  GetConnectorDestinationResponse,
  GetConnectorDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConnectorDestinationRequest,
  output: GetConnectorDestinationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnectorDestination",
}));

export type GetCredentialLockerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get information on an existing credential locker
 */
export const getCredentialLocker: API.OperationMethod<
  GetCredentialLockerRequest,
  GetCredentialLockerResponse,
  GetCredentialLockerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCredentialLockerRequest,
  output: GetCredentialLockerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCredentialLocker",
}));

export type GetCustomEndpointError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Returns the IoT managed integrations custom endpoint.
 */
export const getCustomEndpoint: API.OperationMethod<
  GetCustomEndpointRequest,
  GetCustomEndpointResponse,
  GetCustomEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCustomEndpointRequest,
  output: GetCustomEndpointResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCustomEndpoint",
}));

export type GetDefaultEncryptionConfigurationError =
  | AccessDeniedException
  | InternalFailureException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified region. For more information, see Key management in the *AWS IoT SiteWise User Guide*.
 */
export const getDefaultEncryptionConfiguration: API.OperationMethod<
  GetDefaultEncryptionConfigurationRequest,
  GetDefaultEncryptionConfigurationResponse,
  GetDefaultEncryptionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDefaultEncryptionConfigurationRequest,
  output: GetDefaultEncryptionConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDefaultEncryptionConfiguration",
}));

export type GetDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a destination by name.
 */
export const getDestination: API.OperationMethod<
  GetDestinationRequest,
  GetDestinationResponse,
  GetDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDestinationRequest,
  output: GetDestinationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDestination",
}));

export type GetDeviceDiscoveryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Get the current state of a device discovery.
 */
export const getDeviceDiscovery: API.OperationMethod<
  GetDeviceDiscoveryRequest,
  GetDeviceDiscoveryResponse,
  GetDeviceDiscoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeviceDiscoveryRequest,
  output: GetDeviceDiscoveryResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeviceDiscovery",
}));

export type GetEventLogConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get an event log configuration.
 */
export const getEventLogConfiguration: API.OperationMethod<
  GetEventLogConfigurationRequest,
  GetEventLogConfigurationResponse,
  GetEventLogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEventLogConfigurationRequest,
  output: GetEventLogConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventLogConfiguration",
}));

export type GetHubConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a hub configuration.
 */
export const getHubConfiguration: API.OperationMethod<
  GetHubConfigurationRequest,
  GetHubConfigurationResponse,
  GetHubConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetHubConfigurationRequest,
  output: GetHubConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHubConfiguration",
}));

export type GetManagedThingError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Get details of a managed thing including its attributes and capabilities.
 */
export const getManagedThing: API.OperationMethod<
  GetManagedThingRequest,
  GetManagedThingResponse,
  GetManagedThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetManagedThingRequest,
  output: GetManagedThingResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedThing",
}));

export type GetManagedThingCapabilitiesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Get the capabilities for a managed thing using the device ID.
 */
export const getManagedThingCapabilities: API.OperationMethod<
  GetManagedThingCapabilitiesRequest,
  GetManagedThingCapabilitiesResponse,
  GetManagedThingCapabilitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetManagedThingCapabilitiesRequest,
  output: GetManagedThingCapabilitiesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedThingCapabilities",
}));

export type GetManagedThingCertificateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the certificate PEM for a managed IoT thing.
 */
export const getManagedThingCertificate: API.OperationMethod<
  GetManagedThingCertificateRequest,
  GetManagedThingCertificateResponse,
  GetManagedThingCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetManagedThingCertificateRequest,
  output: GetManagedThingCertificateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedThingCertificate",
}));

export type GetManagedThingConnectivityDataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Get the connectivity status of a managed thing.
 */
export const getManagedThingConnectivityData: API.OperationMethod<
  GetManagedThingConnectivityDataRequest,
  GetManagedThingConnectivityDataResponse,
  GetManagedThingConnectivityDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetManagedThingConnectivityDataRequest,
  output: GetManagedThingConnectivityDataResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedThingConnectivityData",
}));

export type GetManagedThingMetaDataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Get the metadata information for a managed thing.
 *
 * The `managedThing` `metadata` parameter is used for associating attributes with a `managedThing` that can be used for grouping over-the-air (OTA) tasks. Name value pairs in `metadata` can be used in the `OtaTargetQueryString` parameter for the `CreateOtaTask` API operation.
 */
export const getManagedThingMetaData: API.OperationMethod<
  GetManagedThingMetaDataRequest,
  GetManagedThingMetaDataResponse,
  GetManagedThingMetaDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetManagedThingMetaDataRequest,
  output: GetManagedThingMetaDataResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedThingMetaData",
}));

export type GetManagedThingStateError =
  | AccessDeniedException
  | InternalFailureException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Returns the managed thing state for the given device Id.
 */
export const getManagedThingState: API.OperationMethod<
  GetManagedThingStateRequest,
  GetManagedThingStateResponse,
  GetManagedThingStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetManagedThingStateRequest,
  output: GetManagedThingStateResponse,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedThingState",
}));

export type GetNotificationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a notification configuration for a specified event type.
 */
export const getNotificationConfiguration: API.OperationMethod<
  GetNotificationConfigurationRequest,
  GetNotificationConfigurationResponse,
  GetNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNotificationConfigurationRequest,
  output: GetNotificationConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotificationConfiguration",
}));

export type GetOtaTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get details of the over-the-air (OTA) task by its task id.
 */
export const getOtaTask: API.OperationMethod<
  GetOtaTaskRequest,
  GetOtaTaskResponse,
  GetOtaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOtaTaskRequest,
  output: GetOtaTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOtaTask",
}));

export type GetOtaTaskConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a configuraiton for the over-the-air (OTA) task.
 */
export const getOtaTaskConfiguration: API.OperationMethod<
  GetOtaTaskConfigurationRequest,
  GetOtaTaskConfigurationResponse,
  GetOtaTaskConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOtaTaskConfigurationRequest,
  output: GetOtaTaskConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOtaTaskConfiguration",
}));

export type GetProvisioningProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Get details of a provisioning profile.
 */
export const getProvisioningProfile: API.OperationMethod<
  GetProvisioningProfileRequest,
  GetProvisioningProfileResponse,
  GetProvisioningProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProvisioningProfileRequest,
  output: GetProvisioningProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProvisioningProfile",
}));

export type GetRuntimeLogConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the runtime log configuration for a specific managed thing.
 */
export const getRuntimeLogConfiguration: API.OperationMethod<
  GetRuntimeLogConfigurationRequest,
  GetRuntimeLogConfigurationResponse,
  GetRuntimeLogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRuntimeLogConfigurationRequest,
  output: GetRuntimeLogConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRuntimeLogConfiguration",
}));

export type GetSchemaVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a schema version with the provided information.
 */
export const getSchemaVersion: API.OperationMethod<
  GetSchemaVersionRequest,
  GetSchemaVersionResponse,
  GetSchemaVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSchemaVersionRequest,
  output: GetSchemaVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSchemaVersion",
}));

export type ListAccountAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all account associations, with optional filtering by connector destination ID.
 */
export const listAccountAssociations: API.PaginatedOperationMethod<
  ListAccountAssociationsRequest,
  ListAccountAssociationsResponse,
  ListAccountAssociationsError,
  Credentials | HttpClient.HttpClient,
  AccountAssociationItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountAssociationsRequest,
  output: ListAccountAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCloudConnectorsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of connectors filtered by its Lambda Amazon Resource Name (ARN) and `type`.
 */
export const listCloudConnectors: API.PaginatedOperationMethod<
  ListCloudConnectorsRequest,
  ListCloudConnectorsResponse,
  ListCloudConnectorsError,
  Credentials | HttpClient.HttpClient,
  ConnectorItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCloudConnectorsRequest,
  output: ListCloudConnectorsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCloudConnectors",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConnectorDestinationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all connector destinations, with optional filtering by cloud connector ID.
 */
export const listConnectorDestinations: API.PaginatedOperationMethod<
  ListConnectorDestinationsRequest,
  ListConnectorDestinationsResponse,
  ListConnectorDestinationsError,
  Credentials | HttpClient.HttpClient,
  ConnectorDestinationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConnectorDestinationsRequest,
  output: ListConnectorDestinationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectorDestinations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ConnectorDestinationList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCredentialLockersError =
  | AccessDeniedException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List information on an existing credential locker.
 */
export const listCredentialLockers: API.PaginatedOperationMethod<
  ListCredentialLockersRequest,
  ListCredentialLockersResponse,
  ListCredentialLockersError,
  Credentials | HttpClient.HttpClient,
  CredentialLockerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCredentialLockersRequest,
  output: ListCredentialLockersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCredentialLockers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDestinationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all notification destinations.
 */
export const listDestinations: API.PaginatedOperationMethod<
  ListDestinationsRequest,
  ListDestinationsResponse,
  ListDestinationsError,
  Credentials | HttpClient.HttpClient,
  DestinationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDestinationsRequest,
  output: ListDestinationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDestinations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DestinationList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDeviceDiscoveriesError =
  | AccessDeniedException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all device discovery tasks, with optional filtering by type and status.
 */
export const listDeviceDiscoveries: API.PaginatedOperationMethod<
  ListDeviceDiscoveriesRequest,
  ListDeviceDiscoveriesResponse,
  ListDeviceDiscoveriesError,
  Credentials | HttpClient.HttpClient,
  DeviceDiscoverySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDeviceDiscoveriesRequest,
  output: ListDeviceDiscoveriesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeviceDiscoveries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDiscoveredDevicesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all devices discovered during a specific device discovery task.
 */
export const listDiscoveredDevices: API.PaginatedOperationMethod<
  ListDiscoveredDevicesRequest,
  ListDiscoveredDevicesResponse,
  ListDiscoveredDevicesError,
  Credentials | HttpClient.HttpClient,
  DiscoveredDeviceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDiscoveredDevicesRequest,
  output: ListDiscoveredDevicesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDiscoveredDevices",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEventLogConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all event log configurations for an account.
 */
export const listEventLogConfigurations: API.PaginatedOperationMethod<
  ListEventLogConfigurationsRequest,
  ListEventLogConfigurationsResponse,
  ListEventLogConfigurationsError,
  Credentials | HttpClient.HttpClient,
  EventLogConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEventLogConfigurationsRequest,
  output: ListEventLogConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventLogConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EventLogConfigurationList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListManagedThingAccountAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all account associations for a specific managed thing.
 */
export const listManagedThingAccountAssociations: API.PaginatedOperationMethod<
  ListManagedThingAccountAssociationsRequest,
  ListManagedThingAccountAssociationsResponse,
  ListManagedThingAccountAssociationsError,
  Credentials | HttpClient.HttpClient,
  ManagedThingAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListManagedThingAccountAssociationsRequest,
  output: ListManagedThingAccountAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedThingAccountAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListManagedThingsError =
  | AccessDeniedException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Listing all managed things with provision for filters.
 */
export const listManagedThings: API.PaginatedOperationMethod<
  ListManagedThingsRequest,
  ListManagedThingsResponse,
  ListManagedThingsError,
  Credentials | HttpClient.HttpClient,
  ManagedThingSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListManagedThingsRequest,
  output: ListManagedThingsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedThings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListManagedThingSchemasError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * List schemas associated with a managed thing.
 */
export const listManagedThingSchemas: API.PaginatedOperationMethod<
  ListManagedThingSchemasRequest,
  ListManagedThingSchemasResponse,
  ListManagedThingSchemasError,
  Credentials | HttpClient.HttpClient,
  ManagedThingSchemaListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListManagedThingSchemasRequest,
  output: ListManagedThingSchemasResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedThingSchemas",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListNotificationConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all notification configurations.
 */
export const listNotificationConfigurations: API.PaginatedOperationMethod<
  ListNotificationConfigurationsRequest,
  ListNotificationConfigurationsResponse,
  ListNotificationConfigurationsError,
  Credentials | HttpClient.HttpClient,
  NotificationConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListNotificationConfigurationsRequest,
  output: ListNotificationConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotificationConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "NotificationConfigurationList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOtaTaskConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all of the over-the-air (OTA) task configurations.
 */
export const listOtaTaskConfigurations: API.PaginatedOperationMethod<
  ListOtaTaskConfigurationsRequest,
  ListOtaTaskConfigurationsResponse,
  ListOtaTaskConfigurationsError,
  Credentials | HttpClient.HttpClient,
  OtaTaskConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOtaTaskConfigurationsRequest,
  output: ListOtaTaskConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOtaTaskConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOtaTaskExecutionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all of the over-the-air (OTA) task executions.
 */
export const listOtaTaskExecutions: API.PaginatedOperationMethod<
  ListOtaTaskExecutionsRequest,
  ListOtaTaskExecutionsResponse,
  ListOtaTaskExecutionsError,
  Credentials | HttpClient.HttpClient,
  OtaTaskExecutionSummaries
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOtaTaskExecutionsRequest,
  output: ListOtaTaskExecutionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOtaTaskExecutions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ExecutionSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOtaTasksError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all of the over-the-air (OTA) tasks.
 */
export const listOtaTasks: API.PaginatedOperationMethod<
  ListOtaTasksRequest,
  ListOtaTasksResponse,
  ListOtaTasksError,
  Credentials | HttpClient.HttpClient,
  OtaTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOtaTasksRequest,
  output: ListOtaTasksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOtaTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Tasks",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProvisioningProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * List the provisioning profiles within the Amazon Web Services account.
 */
export const listProvisioningProfiles: API.PaginatedOperationMethod<
  ListProvisioningProfilesRequest,
  ListProvisioningProfilesResponse,
  ListProvisioningProfilesError,
  Credentials | HttpClient.HttpClient,
  ProvisioningProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProvisioningProfilesRequest,
  output: ListProvisioningProfilesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProvisioningProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSchemaVersionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists schema versions with the provided information.
 */
export const listSchemaVersions: API.PaginatedOperationMethod<
  ListSchemaVersionsRequest,
  ListSchemaVersionsResponse,
  ListSchemaVersionsError,
  Credentials | HttpClient.HttpClient,
  SchemaVersionListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSchemaVersionsRequest,
  output: ListSchemaVersionsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSchemaVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the tags for a specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutDefaultEncryptionConfigurationError =
  | AccessDeniedException
  | InternalFailureException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Sets the default encryption configuration for the Amazon Web Services account. For more information, see Key management in the AWS IoT SiteWise User Guide.
 */
export const putDefaultEncryptionConfiguration: API.OperationMethod<
  PutDefaultEncryptionConfigurationRequest,
  PutDefaultEncryptionConfigurationResponse,
  PutDefaultEncryptionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDefaultEncryptionConfigurationRequest,
  output: PutDefaultEncryptionConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalFailureException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDefaultEncryptionConfiguration",
}));

export type PutHubConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a hub configuration.
 */
export const putHubConfiguration: API.OperationMethod<
  PutHubConfigurationRequest,
  PutHubConfigurationResponse,
  PutHubConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutHubConfigurationRequest,
  output: PutHubConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutHubConfiguration",
}));

export type PutRuntimeLogConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Set the runtime log configuration for a specific managed thing.
 */
export const putRuntimeLogConfiguration: API.OperationMethod<
  PutRuntimeLogConfigurationRequest,
  PutRuntimeLogConfigurationResponse,
  PutRuntimeLogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutRuntimeLogConfigurationRequest,
  output: PutRuntimeLogConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRuntimeLogConfiguration",
}));

export type RegisterAccountAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Registers an account association with a managed thing, establishing a connection between a device and a third-party account.
 */
export const registerAccountAssociation: API.OperationMethod<
  RegisterAccountAssociationRequest,
  RegisterAccountAssociationResponse,
  RegisterAccountAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterAccountAssociationRequest,
  output: RegisterAccountAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterAccountAssociation",
}));

export type RegisterCustomEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Customers can request IoT managed integrations to manage the server trust for them or bring their own external server trusts for the custom domain. Returns an IoT managed integrations endpoint.
 */
export const registerCustomEndpoint: API.OperationMethod<
  RegisterCustomEndpointRequest,
  RegisterCustomEndpointResponse,
  RegisterCustomEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterCustomEndpointRequest,
  output: RegisterCustomEndpointResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterCustomEndpoint",
}));

export type ResetRuntimeLogConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Reset a runtime log configuration for a specific managed thing.
 */
export const resetRuntimeLogConfiguration: API.OperationMethod<
  ResetRuntimeLogConfigurationRequest,
  ResetRuntimeLogConfigurationResponse,
  ResetRuntimeLogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetRuntimeLogConfigurationRequest,
  output: ResetRuntimeLogConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetRuntimeLogConfiguration",
}));

export type SendConnectorEventError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Relays third-party device events for a connector such as a new device or a device state change event.
 */
export const sendConnectorEvent: API.OperationMethod<
  SendConnectorEventRequest,
  SendConnectorEventResponse,
  SendConnectorEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendConnectorEventRequest,
  output: SendConnectorEventResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendConnectorEvent",
}));

export type SendManagedThingCommandError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Send the command to the device represented by the managed thing.
 */
export const sendManagedThingCommand: API.OperationMethod<
  SendManagedThingCommandRequest,
  SendManagedThingCommandResponse,
  SendManagedThingCommandError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendManagedThingCommandRequest,
  output: SendManagedThingCommandResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendManagedThingCommand",
}));

export type StartAccountAssociationRefreshError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a refresh of an existing account association to update its authorization and connection status.
 */
export const startAccountAssociationRefresh: API.OperationMethod<
  StartAccountAssociationRefreshRequest,
  StartAccountAssociationRefreshResponse,
  StartAccountAssociationRefreshError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartAccountAssociationRefreshRequest,
  output: StartAccountAssociationRefreshResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAccountAssociationRefresh",
}));

export type StartDeviceDiscoveryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * This API is used to start device discovery for hub-connected and third-party-connected devices. The authentication material (install code) is delivered as a message to the controller instructing it to start the discovery.
 */
export const startDeviceDiscovery: API.OperationMethod<
  StartDeviceDiscoveryRequest,
  StartDeviceDiscoveryResponse,
  StartDeviceDiscoveryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDeviceDiscoveryRequest,
  output: StartDeviceDiscoveryResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDeviceDiscovery",
}));

export type TagResourceError =
  | ConflictException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Adds tags to a specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    ConflictException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ConflictException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Removes tags from a specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    ConflictException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccountAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of an existing account association.
 */
export const updateAccountAssociation: API.OperationMethod<
  UpdateAccountAssociationRequest,
  UpdateAccountAssociationResponse,
  UpdateAccountAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccountAssociationRequest,
  output: UpdateAccountAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccountAssociation",
}));

export type UpdateCloudConnectorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Update an existing cloud connector.
 */
export const updateCloudConnector: API.OperationMethod<
  UpdateCloudConnectorRequest,
  UpdateCloudConnectorResponse,
  UpdateCloudConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCloudConnectorRequest,
  output: UpdateCloudConnectorResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCloudConnector",
}));

export type UpdateConnectorDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of an existing connector destination.
 */
export const updateConnectorDestination: API.OperationMethod<
  UpdateConnectorDestinationRequest,
  UpdateConnectorDestinationResponse,
  UpdateConnectorDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConnectorDestinationRequest,
  output: UpdateConnectorDestinationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnectorDestination",
}));

export type UpdateDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a destination specified by name.
 */
export const updateDestination: API.OperationMethod<
  UpdateDestinationRequest,
  UpdateDestinationResponse,
  UpdateDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDestinationRequest,
  output: UpdateDestinationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDestination",
}));

export type UpdateEventLogConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an event log configuration by log configuration ID.
 */
export const updateEventLogConfiguration: API.OperationMethod<
  UpdateEventLogConfigurationRequest,
  UpdateEventLogConfigurationResponse,
  UpdateEventLogConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEventLogConfigurationRequest,
  output: UpdateEventLogConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEventLogConfiguration",
}));

export type UpdateManagedThingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Update the attributes and capabilities associated with a managed thing.
 */
export const updateManagedThing: API.OperationMethod<
  UpdateManagedThingRequest,
  UpdateManagedThingResponse,
  UpdateManagedThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateManagedThingRequest,
  output: UpdateManagedThingResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateManagedThing",
}));

export type UpdateNotificationConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a notification configuration.
 */
export const updateNotificationConfiguration: API.OperationMethod<
  UpdateNotificationConfigurationRequest,
  UpdateNotificationConfigurationResponse,
  UpdateNotificationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNotificationConfigurationRequest,
  output: UpdateNotificationConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNotificationConfiguration",
}));

export type UpdateOtaTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an over-the-air (OTA) task.
 */
export const updateOtaTask: API.OperationMethod<
  UpdateOtaTaskRequest,
  UpdateOtaTaskResponse,
  UpdateOtaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateOtaTaskRequest,
  output: UpdateOtaTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOtaTask",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ AuthMaterialName: S.optional(S.String) })).annotate({
        identifier: "GeneralAuthorizationName",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ConnectorDestinationId: S.String,
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(TagsMap),
          GeneralAuthorization: S.optional(GeneralAuthorizationName),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/account-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAccountAssociationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OAuthAuthorizationUrl: SensitiveString,
          AccountAssociationId: S.String,
          AssociationState: AssociationState,
          Arn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateAccountAssociationResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "LambdaConfig",
      });
    case 5:
      return S.suspend(() => S.Struct({ lambda: S.optional(LambdaConfig) })).annotate({
        identifier: "EndpointConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          EndpointConfig: EndpointConfig,
          Description: S.optional(S.String),
          EndpointType: S.optional(EndpointType),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/cloud-connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateCloudConnectorRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "CreateCloudConnectorResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ enabled: S.optional(S.Boolean), DaysBeforeRenewal: S.optional(S.Number) }),
      ).annotate({
        identifier: "ProactiveRefreshTokenRenewal",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          authUrl: S.String,
          tokenUrl: S.String,
          scope: S.optional(S.String),
          tokenEndpointAuthenticationScheme: TokenEndpointAuthenticationScheme,
          oAuthCompleteRedirectUrl: S.optional(S.String),
          proactiveRefreshTokenRenewal: S.optional(ProactiveRefreshTokenRenewal),
        }),
      ).annotate({ identifier: "OAuthConfig" });
    case 2:
      return S.suspend(() => S.Struct({ arn: S.String, versionId: S.String })).annotate({
        identifier: "SecretsManager",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SecretsManager: SecretsManager, AuthMaterialName: S.String }),
      ).annotate({ identifier: "AuthMaterial" });
    case 4:
      return S.Array(AuthMaterial);
    case 5:
      return S.suspend(() =>
        S.Struct({
          oAuth: S.optional(OAuthConfig),
          GeneralAuthorization: S.optional(AuthMaterials),
        }),
      ).annotate({ identifier: "AuthConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CloudConnectorId: S.String,
          AuthType: S.optional(AuthType),
          AuthConfig: AuthConfig,
          SecretsManager: S.optional(SecretsManager),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/connector-destinations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConnectorDestinationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(SensitiveString),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagsMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/credential-lockers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCredentialLockerRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CreateCredentialLockerResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeliveryDestinationArn: S.String,
          DeliveryDestinationType: DeliveryDestinationType,
          Name: S.String,
          RoleArn: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Description: S.optional(S.String),
          Tags: S.optional(TagsMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/destinations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDestinationRequest" });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "CreateDestinationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.String,
          ResourceId: S.optional(S.String),
          EventLogLevel: LogLevel,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/event-log-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEventLogConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EnableAsProvisioner: S.optional(S.Boolean),
          EnableAsProvisionee: S.optional(S.Boolean),
          TimeoutInMinutes: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "WiFiSimpleSetupConfiguration",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          version: S.String,
          properties: CapabilityReportProperties,
          actions: CapabilityReportActions,
          events: CapabilityReportEvents,
        }),
      ).annotate({
        identifier: "CapabilityReportCapability",
      });
    case 7:
      return S.Array(CapabilityReportCapability);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          deviceTypes: DeviceTypes,
          capabilities: CapabilityReportCapabilities,
        }),
      ).annotate({ identifier: "CapabilityReportEndpoint" });
    case 1:
      return S.Array(CapabilityReportEndpoint);
    case 2:
      return S.suspend(() =>
        S.Struct({
          version: S.String,
          nodeId: S.optional(S.String),
          endpoints: CapabilityReportEndpoints,
        }),
      ).annotate({ identifier: "CapabilityReport" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Format: SchemaVersionFormat,
          CapabilityId: S.String,
          ExtrinsicId: S.String,
          ExtrinsicVersion: S.Number,
          Schema: S.Any,
        }),
      ).annotate({ identifier: "CapabilitySchemaItem" });
    case 4:
      return S.Array(CapabilitySchemaItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Role: Role,
          Owner: S.optional(SensitiveString),
          CredentialLockerId: S.optional(S.String),
          AuthenticationMaterial: SensitiveString,
          AuthenticationMaterialType: AuthMaterialType,
          WiFiSimpleSetupConfiguration: S.optional(WiFiSimpleSetupConfiguration),
          SerialNumber: S.optional(SensitiveString),
          Brand: S.optional(SensitiveString),
          Model: S.optional(SensitiveString),
          Name: S.optional(S.String),
          CapabilityReport: S.optional(CapabilityReport),
          CapabilitySchemas: S.optional(CapabilitySchemas),
          Capabilities: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Classification: S.optional(SensitiveString),
          Tags: S.optional(TagsMap),
          MetaData: S.optional(MetaData),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/managed-things" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateManagedThingRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EventType: EventType,
          DestinationName: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagsMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/notification-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateNotificationConfigurationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ EventType: S.optional(EventType) })).annotate({
        identifier: "CreateNotificationConfigurationResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DurationInMinutes: S.optional(S.Number), StartTime: S.optional(S.String) }),
      ).annotate({
        identifier: "ScheduleMaintenanceWindow",
      });
    case 1:
      return S.Array(ScheduleMaintenanceWindow);
    case 2:
      return S.suspend(() =>
        S.Struct({
          EndBehavior: S.optional(SchedulingConfigEndBehavior),
          EndTime: S.optional(S.String),
          MaintenanceWindows: S.optional(ScheduleMaintenanceWindowList),
          StartTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "OtaTaskSchedulingConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FailureType: S.optional(RetryCriteriaFailureType),
          MinNumberOfRetries: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RetryConfigCriteria" });
    case 4:
      return S.Array(RetryConfigCriteria);
    case 5:
      return S.suspend(() =>
        S.Struct({ RetryConfigCriteria: S.optional(RetryConfigCriteriaList) }),
      ).annotate({
        identifier: "OtaTaskExecutionRetryConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          S3Url: S.String,
          Protocol: S.optional(OtaProtocol),
          Target: S.optional(Target),
          TaskConfigurationId: S.optional(S.String),
          OtaMechanism: S.optional(OtaMechanism),
          OtaType: OtaType,
          OtaTargetQueryString: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          OtaSchedulingConfig: S.optional(OtaTaskSchedulingConfig),
          OtaTaskExecutionRetryConfig: S.optional(OtaTaskExecutionRetryConfig),
          Tags: S.optional(TagsMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/ota-tasks" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateOtaTaskRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.optional(S.String),
          TaskArn: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateOtaTaskResponse" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(AbortCriteriaAction),
          FailureType: S.optional(AbortCriteriaFailureType),
          MinNumberOfExecutedThings: S.optional(S.Number),
          ThresholdPercentage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AbortConfigCriteria" });
    case 1:
      return S.Array(AbortConfigCriteria);
    case 2:
      return S.suspend(() =>
        S.Struct({ AbortConfigCriteriaList: S.optional(AbortConfigCriteriaList) }),
      ).annotate({ identifier: "OtaTaskAbortConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          numberOfNotifiedThings: S.optional(S.Number),
          numberOfSucceededThings: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RolloutRateIncreaseCriteria",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BaseRatePerMinute: S.optional(S.Number),
          IncrementFactor: S.optional(S.Number),
          RateIncreaseCriteria: S.optional(RolloutRateIncreaseCriteria),
        }),
      ).annotate({ identifier: "ExponentialRolloutRate" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ExponentialRolloutRate: S.optional(ExponentialRolloutRate),
          MaximumPerMinute: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "OtaTaskExecutionRolloutConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ InProgressTimeoutInMinutes: S.optional(S.Number) }),
      ).annotate({ identifier: "OtaTaskTimeoutConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AbortConfig: S.optional(OtaTaskAbortConfig),
          RolloutConfig: S.optional(OtaTaskExecutionRolloutConfig),
          TimeoutConfig: S.optional(OtaTaskTimeoutConfig),
        }),
      ).annotate({ identifier: "PushConfig" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Name: S.optional(SensitiveString),
          PushConfig: S.optional(PushConfig),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ota-task-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateOtaTaskConfigurationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ TaskConfigurationId: S.optional(S.String) })).annotate({
        identifier: "CreateOtaTaskConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProvisioningType: ProvisioningType,
          CaCertificate: S.optional(SensitiveString),
          ClaimCertificate: S.optional(SensitiveString),
          Name: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagsMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/provisioning-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateProvisioningProfileRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          ProvisioningType: S.optional(ProvisioningType),
          Id: S.optional(S.String),
          Status: S.optional(ProvisioningProfileStatus),
          ClaimCertificate: S.optional(SensitiveString),
          ClaimCertificatePrivateKey: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "CreateProvisioningProfileResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AccountAssociationId: S.String.pipe(T.HttpLabel("AccountAssociationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/account-associations/{AccountAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAccountAssociationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAccountAssociationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/cloud-connectors/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCloudConnectorRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteCloudConnectorResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/connector-destinations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConnectorDestinationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/credential-lockers/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCredentialLockerRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/destinations/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDestinationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/event-log-configurations/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEventLogConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          Force: S.optional(S.Boolean).pipe(T.HttpQuery("Force")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/managed-things/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteManagedThingRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EventType: EventType.pipe(T.HttpLabel("EventType")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/notification-configurations/{EventType}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteNotificationConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/ota-tasks/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteOtaTaskRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/ota-task-configurations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteOtaTaskConfigurationRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/provisioning-profiles/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProvisioningProfileRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ManagedThingId: S.String, AccountAssociationId: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/managed-thing-associations/deregister" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterAccountAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccountAssociationId: S.String.pipe(T.HttpLabel("AccountAssociationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/account-associations/{AccountAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAccountAssociationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountAssociationId: S.String,
          AssociationState: AssociationState,
          ErrorMessage: S.optional(S.String),
          ConnectorDestinationId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Arn: S.optional(S.String),
          OAuthAuthorizationUrl: SensitiveString,
          Tags: S.optional(TagsMap),
          GeneralAuthorization: S.optional(GeneralAuthorizationName),
        }),
      ).annotate({
        identifier: "GetAccountAssociationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/cloud-connectors/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCloudConnectorRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          EndpointConfig: EndpointConfig,
          Description: S.optional(S.String),
          EndpointType: S.optional(EndpointType),
          Id: S.optional(S.String),
          Type: S.optional(CloudConnectorType),
        }),
      ).annotate({
        identifier: "GetCloudConnectorResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/connector-destinations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConnectorDestinationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CloudConnectorId: S.optional(S.String),
          Id: S.optional(S.String),
          AuthType: S.optional(AuthType),
          AuthConfig: S.optional(AuthConfig),
          SecretsManager: S.optional(SecretsManager),
          OAuthCompleteRedirectUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetConnectorDestinationResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/credential-lockers/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCredentialLockerRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagsMap),
        }),
      ).annotate({
        identifier: "GetCredentialLockerResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/custom-endpoint" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetCustomEndpointRequest" });
    case 3:
      return S.suspend(() => S.Struct({ EndpointAddress: S.String })).annotate({
        identifier: "GetCustomEndpointResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configuration/account/encryption" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDefaultEncryptionConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ConfigurationError" });
    case 6:
      return S.suspend(() =>
        S.Struct({ error: S.optional(ConfigurationError), state: ConfigurationState }),
      ).annotate({ identifier: "ConfigurationStatus" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          configurationStatus: ConfigurationStatus,
          encryptionType: EncryptionType,
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetDefaultEncryptionConfigurationResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/destinations/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDestinationRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DeliveryDestinationArn: S.optional(S.String),
          DeliveryDestinationType: S.optional(DeliveryDestinationType),
          Name: S.optional(S.String),
          RoleArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagsMap),
        }),
      ).annotate({ identifier: "GetDestinationResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/device-discoveries/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDeviceDiscoveryRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Arn: S.String,
          DiscoveryType: DiscoveryType,
          Status: DeviceDiscoveryStatus,
          StartedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ControllerId: S.optional(S.String),
          ConnectorAssociationId: S.optional(S.String),
          AccountAssociationId: S.optional(S.String),
          FinishedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagsMap),
        }),
      ).annotate({
        identifier: "GetDeviceDiscoveryResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/event-log-configurations/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEventLogConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ResourceId: S.optional(S.String),
          EventLogLevel: S.optional(LogLevel),
        }),
      ).annotate({
        identifier: "GetEventLogConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/hub-configuration" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetHubConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          HubTokenTimerExpirySettingInSeconds: S.optional(S.Number),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetHubConfigurationResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-things/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetManagedThingRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Owner: S.optional(SensitiveString),
          CredentialLockerId: S.optional(S.String),
          AdvertisedProductId: S.optional(S.String),
          Role: S.optional(Role),
          ProvisioningStatus: S.optional(ProvisioningStatus),
          Name: S.optional(S.String),
          Model: S.optional(SensitiveString),
          Brand: S.optional(SensitiveString),
          SerialNumber: S.optional(SensitiveString),
          UniversalProductCode: S.optional(SensitiveString),
          InternationalArticleNumber: S.optional(SensitiveString),
          ConnectorPolicyId: S.optional(S.String),
          ConnectorDestinationId: S.optional(S.String),
          ConnectorDeviceId: S.optional(SensitiveString),
          DeviceSpecificKey: S.optional(SensitiveString),
          MacAddress: S.optional(SensitiveString),
          ParentControllerId: S.optional(S.String),
          Classification: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ActivatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          HubNetworkMode: S.optional(HubNetworkMode),
          MetaData: S.optional(MetaData),
          Tags: S.optional(TagsMap),
          WiFiSimpleSetupConfiguration: S.optional(WiFiSimpleSetupConfiguration),
        }),
      ).annotate({ identifier: "GetManagedThingResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-things-capabilities/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedThingCapabilitiesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ManagedThingId: S.optional(S.String),
          Capabilities: S.optional(S.String),
          CapabilityReport: S.optional(CapabilityReport),
        }),
      ).annotate({
        identifier: "GetManagedThingCapabilitiesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-things-certificate/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedThingCertificateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ManagedThingId: S.optional(S.String), CertificatePem: S.optional(S.String) }),
      ).annotate({
        identifier: "GetManagedThingCertificateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/managed-things-connectivity-data/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedThingConnectivityDataRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ManagedThingId: S.optional(S.String),
          Connected: S.optional(S.Boolean),
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DisconnectReason: S.optional(DisconnectReasonValue),
        }),
      ).annotate({
        identifier: "GetManagedThingConnectivityDataResponse",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-things-metadata/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedThingMetaDataRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ManagedThingId: S.optional(S.String), MetaData: S.optional(MetaData) }),
      ).annotate({
        identifier: "GetManagedThingMetaDataResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ManagedThingId: S.String.pipe(T.HttpLabel("ManagedThingId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-thing-states/{ManagedThingId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetManagedThingStateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          version: S.String,
          properties: S.optional(S.Any),
        }),
      ).annotate({ identifier: "StateCapability" });
    case 4:
      return S.Array(StateCapability);
    case 5:
      return S.suspend(() =>
        S.Struct({ endpointId: S.String, capabilities: StateCapabilities }),
      ).annotate({ identifier: "StateEndpoint" });
    case 6:
      return S.Array(StateEndpoint);
    case 7:
      return S.suspend(() => S.Struct({ Endpoints: StateEndpoints })).annotate({
        identifier: "GetManagedThingStateResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EventType: EventType.pipe(T.HttpLabel("EventType")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/notification-configurations/{EventType}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNotificationConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EventType: S.optional(EventType),
          DestinationName: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagsMap),
        }),
      ).annotate({
        identifier: "GetNotificationConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/ota-tasks/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetOtaTaskRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NumberOfCanceledThings: S.optional(S.Number),
          NumberOfFailedThings: S.optional(S.Number),
          NumberOfInProgressThings: S.optional(S.Number),
          numberOfQueuedThings: S.optional(S.Number),
          numberOfRejectedThings: S.optional(S.Number),
          numberOfRemovedThings: S.optional(S.Number),
          numberOfSucceededThings: S.optional(S.Number),
          numberOfTimedOutThings: S.optional(S.Number),
          processingTargets: S.optional(Target),
        }),
      ).annotate({ identifier: "TaskProcessingDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.optional(S.String),
          TaskArn: S.optional(S.String),
          Description: S.optional(S.String),
          S3Url: S.optional(S.String),
          Protocol: S.optional(OtaProtocol),
          OtaType: S.optional(OtaType),
          OtaTargetQueryString: S.optional(S.String),
          OtaMechanism: S.optional(OtaMechanism),
          Target: S.optional(Target),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TaskConfigurationId: S.optional(S.String),
          TaskProcessingDetails: S.optional(TaskProcessingDetails),
          OtaSchedulingConfig: S.optional(OtaTaskSchedulingConfig),
          OtaTaskExecutionRetryConfig: S.optional(OtaTaskExecutionRetryConfig),
          Status: S.optional(OtaStatus),
          Tags: S.optional(TagsMap),
        }),
      ).annotate({ identifier: "GetOtaTaskResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/ota-task-configurations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetOtaTaskConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TaskConfigurationId: S.optional(S.String),
          Name: S.optional(SensitiveString),
          PushConfig: S.optional(PushConfig),
          Description: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetOtaTaskConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/provisioning-profiles/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProvisioningProfileRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          ProvisioningType: S.optional(ProvisioningType),
          Id: S.optional(S.String),
          Status: S.optional(ProvisioningProfileStatus),
          ClaimCertificate: S.optional(SensitiveString),
          Tags: S.optional(TagsMap),
        }),
      ).annotate({
        identifier: "GetProvisioningProfileResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ManagedThingId: S.String.pipe(T.HttpLabel("ManagedThingId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/runtime-log-configurations/{ManagedThingId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRuntimeLogConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LogLevel: S.optional(LogLevel),
          LogFlushLevel: S.optional(LogLevel),
          LocalStoreLocation: S.optional(S.String),
          LocalStoreFileRotationMaxFiles: S.optional(S.Number),
          LocalStoreFileRotationMaxBytes: S.optional(S.Number),
          UploadLog: S.optional(S.Boolean),
          UploadPeriodMinutes: S.optional(S.Number),
          DeleteLocalStoreAfterUpload: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RuntimeLogConfigurations" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ManagedThingId: S.optional(S.String),
          RuntimeLogConfigurations: S.optional(RuntimeLogConfigurations),
        }),
      ).annotate({
        identifier: "GetRuntimeLogConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: SchemaVersionType.pipe(T.HttpLabel("Type")),
          SchemaVersionedId: S.String.pipe(T.HttpLabel("SchemaVersionedId")),
          Format: S.optional(SchemaVersionFormat).pipe(T.HttpQuery("Format")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/schema-versions/{Type}/{SchemaVersionedId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSchemaVersionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SchemaId: S.optional(S.String),
          Type: S.optional(SchemaVersionType),
          Description: S.optional(S.String),
          Namespace: S.optional(S.String),
          SemanticVersion: S.optional(S.String),
          Visibility: S.optional(SchemaVersionVisibility),
          Schema: S.optional(S.Any),
        }),
      ).annotate({ identifier: "GetSchemaVersionResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConnectorDestinationId: S.optional(S.String).pipe(T.HttpQuery("ConnectorDestinationId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/account-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAccountAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountAssociationId: S.String,
          AssociationState: AssociationState,
          ErrorMessage: S.optional(S.String),
          ConnectorDestinationId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccountAssociationItem" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AccountAssociationItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(AccountAssociationListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccountAssociationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(CloudConnectorType).pipe(T.HttpQuery("Type")),
          LambdaArn: S.optional(S.String).pipe(T.HttpQuery("LambdaArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/cloud-connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListCloudConnectorsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          EndpointConfig: EndpointConfig,
          Description: S.optional(S.String),
          EndpointType: S.optional(EndpointType),
          Id: S.optional(S.String),
          Type: S.optional(CloudConnectorType),
        }),
      ).annotate({ identifier: "ConnectorItem" });
    case 4:
      return S.Array(ConnectorItem);
    case 5:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(ConnectorList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListCloudConnectorsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CloudConnectorId: S.optional(S.String).pipe(T.HttpQuery("CloudConnectorId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/connector-destinations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConnectorDestinationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CloudConnectorId: S.optional(S.String),
          Id: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConnectorDestinationSummary",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ConnectorDestinationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConnectorDestinationList: S.optional(ConnectorDestinationListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConnectorDestinationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/credential-lockers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCredentialLockersRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CredentialLockerSummary" });
    case 4:
      return S.Array(CredentialLockerSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(CredentialLockerListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCredentialLockersResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/destinations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDestinationsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DeliveryDestinationArn: S.optional(S.String),
          DeliveryDestinationType: S.optional(DeliveryDestinationType),
          Name: S.optional(S.String),
          RoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DestinationSummary" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DestinationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          DestinationList: S.optional(DestinationListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListDestinationsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          TypeFilter: S.optional(DiscoveryType).pipe(T.HttpQuery("TypeFilter")),
          StatusFilter: S.optional(DeviceDiscoveryStatus).pipe(T.HttpQuery("StatusFilter")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/device-discoveries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDeviceDiscoveriesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          DiscoveryType: S.optional(DiscoveryType),
          Status: S.optional(DeviceDiscoveryStatus),
        }),
      ).annotate({ identifier: "DeviceDiscoverySummary" });
    case 4:
      return S.Array(DeviceDiscoverySummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(DeviceDiscoveryListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDeviceDiscoveriesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/device-discoveries/{Identifier}/devices" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDiscoveredDevicesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorDeviceId: S.optional(SensitiveString),
          ConnectorDeviceName: S.optional(S.String),
          DeviceTypes: S.optional(DeviceTypeList),
          ManagedThingId: S.optional(S.String),
          Modification: S.optional(DiscoveryModification),
          DiscoveredAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Brand: S.optional(SensitiveString),
          Model: S.optional(SensitiveString),
          AuthenticationMaterial: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "DiscoveredDeviceSummary" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DiscoveredDeviceSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(DiscoveredDeviceListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDiscoveredDevicesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/event-log-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEventLogConfigurationsRequest",
      });
    case 3:
      return S.Array(EventLogConfigurationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          EventLogConfigurationList: S.optional(EventLogConfigurationListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEventLogConfigurationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ManagedThingId: S.optional(S.String).pipe(T.HttpQuery("ManagedThingId")),
          AccountAssociationId: S.optional(S.String).pipe(T.HttpQuery("AccountAssociationId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-thing-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedThingAccountAssociationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ManagedThingId: S.optional(S.String),
          AccountAssociationId: S.optional(S.String),
          ManagedThingAssociationStatus: S.optional(ManagedThingAssociationStatus),
        }),
      ).annotate({ identifier: "ManagedThingAssociation" });
    case 7:
      return S.Array(ManagedThingAssociation);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ManagedThingAssociationList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListManagedThingAccountAssociationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OwnerFilter: S.optional(SensitiveString).pipe(T.HttpQuery("OwnerFilter")),
          CredentialLockerFilter: S.optional(S.String).pipe(T.HttpQuery("CredentialLockerFilter")),
          RoleFilter: S.optional(Role).pipe(T.HttpQuery("RoleFilter")),
          ParentControllerIdentifierFilter: S.optional(S.String).pipe(
            T.HttpQuery("ParentControllerIdentifierFilter"),
          ),
          ConnectorPolicyIdFilter: S.optional(S.String).pipe(
            T.HttpQuery("ConnectorPolicyIdFilter"),
          ),
          ConnectorDestinationIdFilter: S.optional(S.String).pipe(
            T.HttpQuery("ConnectorDestinationIdFilter"),
          ),
          ConnectorDeviceIdFilter: S.optional(SensitiveString).pipe(
            T.HttpQuery("ConnectorDeviceIdFilter"),
          ),
          SerialNumberFilter: S.optional(SensitiveString).pipe(T.HttpQuery("SerialNumberFilter")),
          ProvisioningStatusFilter: S.optional(ProvisioningStatus).pipe(
            T.HttpQuery("ProvisioningStatusFilter"),
          ),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/managed-things" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListManagedThingsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          AdvertisedProductId: S.optional(S.String),
          Brand: S.optional(SensitiveString),
          Classification: S.optional(SensitiveString),
          ConnectorDeviceId: S.optional(SensitiveString),
          ConnectorPolicyId: S.optional(S.String),
          ConnectorDestinationId: S.optional(S.String),
          Model: S.optional(SensitiveString),
          Name: S.optional(S.String),
          Owner: S.optional(SensitiveString),
          CredentialLockerId: S.optional(S.String),
          ParentControllerId: S.optional(S.String),
          ProvisioningStatus: S.optional(ProvisioningStatus),
          Role: S.optional(Role),
          SerialNumber: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ActivatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ManagedThingSummary" });
    case 3:
      return S.Array(ManagedThingSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ManagedThingListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListManagedThingsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          EndpointIdFilter: S.optional(S.String).pipe(T.HttpQuery("EndpointIdFilter")),
          CapabilityIdFilter: S.optional(S.String).pipe(T.HttpQuery("CapabilityIdFilter")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-thing-schemas/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedThingSchemasRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EndpointId: S.optional(S.String),
          CapabilityId: S.optional(S.String),
          Schema: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "ManagedThingSchemaListItem",
      });
    case 7:
      return S.Array(ManagedThingSchemaListItem);
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ManagedThingSchemaListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListManagedThingSchemasResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/notification-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNotificationConfigurationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ EventType: S.optional(EventType), DestinationName: S.optional(S.String) }),
      ).annotate({
        identifier: "NotificationConfigurationSummary",
      });
    case 3:
      return S.Array(NotificationConfigurationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          NotificationConfigurationList: S.optional(NotificationConfigurationListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNotificationConfigurationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/ota-task-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOtaTaskConfigurationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TaskConfigurationId: S.optional(S.String),
          Name: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "OtaTaskConfigurationSummary",
      });
    case 7:
      return S.Array(OtaTaskConfigurationSummary);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(OtaTaskConfigurationListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOtaTaskConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/ota-tasks/{Identifier}/devices" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOtaTaskExecutionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ExecutionNumber: S.optional(S.Number),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          QueuedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RetryAttempt: S.optional(S.Number),
          StartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(OtaTaskExecutionStatus),
        }),
      ).annotate({ identifier: "OtaTaskExecutionSummary" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TaskExecutionSummary: S.optional(OtaTaskExecutionSummary),
          ManagedThingId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "OtaTaskExecutionSummaries",
      });
    case 4:
      return S.Array(OtaTaskExecutionSummaries);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ExecutionSummaries: S.optional(OtaTaskExecutionSummariesListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOtaTaskExecutionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/ota-tasks" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListOtaTasksRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.optional(S.String),
          TaskArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TaskConfigurationId: S.optional(S.String),
          Status: S.optional(OtaStatus),
        }),
      ).annotate({ identifier: "OtaTaskSummary" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.Array(OtaTaskSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ Tasks: S.optional(OtaTaskListDefinition), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListOtaTasksResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/provisioning-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProvisioningProfilesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          ProvisioningType: S.optional(ProvisioningType),
          Status: S.optional(ProvisioningProfileStatus),
        }),
      ).annotate({
        identifier: "ProvisioningProfileSummary",
      });
    case 4:
      return S.Array(ProvisioningProfileSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ProvisioningProfileListDefinition),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProvisioningProfilesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: SchemaVersionType.pipe(T.HttpLabel("Type")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          SchemaId: S.optional(S.String).pipe(T.HttpQuery("SchemaIdFilter")),
          Namespace: S.optional(S.String).pipe(T.HttpQuery("NamespaceFilter")),
          Visibility: S.optional(SchemaVersionVisibility).pipe(T.HttpQuery("VisibilityFilter")),
          SemanticVersion: S.optional(S.String).pipe(T.HttpQuery("SemanticVersionFilter")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/schema-versions/{Type}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSchemaVersionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SchemaId: S.optional(S.String),
          Type: S.optional(SchemaVersionType),
          Description: S.optional(S.String),
          Namespace: S.optional(S.String),
          SemanticVersion: S.optional(S.String),
          Visibility: S.optional(SchemaVersionVisibility),
        }),
      ).annotate({ identifier: "SchemaVersionListItem" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SchemaVersionListItem);
    case 1:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(SchemaVersionList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSchemaVersionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(TagsMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ encryptionType: EncryptionType, kmsKeyArn: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configuration/account/encryption" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDefaultEncryptionConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ HubTokenTimerExpirySettingInSeconds: S.Number }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/hub-configuration" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutHubConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ HubTokenTimerExpirySettingInSeconds: S.optional(S.Number) }),
      ).annotate({
        identifier: "PutHubConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ManagedThingId: S.String.pipe(T.HttpLabel("ManagedThingId")),
          RuntimeLogConfigurations: RuntimeLogConfigurations,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/runtime-log-configurations/{ManagedThingId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutRuntimeLogConfigurationRequest",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ManagedThingId: S.String,
          AccountAssociationId: S.String,
          DeviceDiscoveryId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/managed-thing-associations/register" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterAccountAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountAssociationId: S.optional(S.String),
          DeviceDiscoveryId: S.optional(S.String),
          ManagedThingId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegisterAccountAssociationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/custom-endpoint" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RegisterCustomEndpointRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ManagedThingId: S.String.pipe(T.HttpLabel("ManagedThingId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/runtime-log-configurations/{ManagedThingId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ResetRuntimeLogConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          value: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "MatterCapabilityReportAttribute",
      });
    case 5:
      return S.Array(MatterCapabilityReportAttribute);
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          revision: S.Number,
          publicId: S.optional(S.String),
          name: S.optional(S.String),
          specVersion: S.optional(S.String),
          attributes: S.optional(MatterCapabilityReportAttributes),
          commands: S.optional(MatterCapabilityReportCommands),
          events: S.optional(MatterCapabilityReportEvents),
          featureMap: S.optional(S.Number),
          generatedCommands: S.optional(MatterCapabilityReportGeneratedCommands),
          fabricIndex: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "MatterCapabilityReportCluster",
      });
    case 7:
      return S.Array(MatterCapabilityReportCluster);
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          deviceTypes: DeviceTypes,
          clusters: MatterCapabilityReportClusters,
          parts: S.optional(MatterCapabilityReportEndpointParts),
          semanticTags: S.optional(MatterCapabilityReportEndpointSemanticTags),
          clientClusters: S.optional(MatterCapabilityReportEndpointClientClusters),
        }),
      ).annotate({
        identifier: "MatterCapabilityReportEndpoint",
      });
    case 1:
      return S.Array(MatterCapabilityReportEndpoint);
    case 2:
      return S.suspend(() =>
        S.Struct({
          version: S.String,
          nodeId: S.optional(S.String),
          endpoints: MatterCapabilityReportEndpoints,
        }),
      ).annotate({ identifier: "MatterCapabilityReport" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConnectorDeviceId: SensitiveString,
          ConnectorDeviceName: S.optional(S.String),
          CapabilityReport: MatterCapabilityReport,
          CapabilitySchemas: S.optional(CapabilitySchemas),
          DeviceMetadata: S.optional(S.Any),
        }),
      ).annotate({ identifier: "Device" });
    case 4:
      return S.Array(Device);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.Any.pipe(S.optional));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.Any.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          attributes: S.optional(S.Any),
          commands: S.optional(MatterCommands),
          events: S.optional(MatterEvents),
        }),
      ).annotate({ identifier: "MatterCluster" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MatterCluster);
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), clusters: S.optional(MatterClusters) }),
      ).annotate({ identifier: "MatterEndpoint" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")),
          UserId: S.optional(SensitiveString),
          Operation: ConnectorEventOperation,
          OperationVersion: S.optional(S.String),
          StatusCode: S.optional(S.Number),
          Message: S.optional(SensitiveString),
          DeviceDiscoveryId: S.optional(S.String),
          ConnectorDeviceId: S.optional(SensitiveString),
          TraceId: S.optional(S.String),
          Devices: S.optional(Devices),
          MatterEndpoint: S.optional(MatterEndpoint),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/connector-event/{ConnectorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendConnectorEventRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ ConnectorId: S.String })).annotate({
        identifier: "SendConnectorEventResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          ref: S.optional(S.String),
          actionTraceId: S.optional(S.String),
          parameters: S.optional(S.Any),
        }),
      ).annotate({ identifier: "CapabilityAction" });
    case 5:
      return S.Array(CapabilityAction);
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String, name: S.String, version: S.String, actions: CapabilityActions }),
      ).annotate({ identifier: "CommandCapability" });
    case 7:
      return S.Array(CommandCapability);
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ endpointId: S.String, capabilities: CommandCapabilities }),
      ).annotate({ identifier: "CommandEndpoint" });
    case 1:
      return S.Array(CommandEndpoint);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ManagedThingId: S.String.pipe(T.HttpLabel("ManagedThingId")),
          Endpoints: CommandEndpoints,
          ConnectorAssociationId: S.optional(S.String),
          AccountAssociationId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/managed-things-command/{ManagedThingId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendManagedThingCommandRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ TraceId: S.optional(S.String) })).annotate({
        identifier: "SendManagedThingCommandResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AccountAssociationId: S.String.pipe(T.HttpLabel("AccountAssociationId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/account-associations/{AccountAssociationId}/refresh" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartAccountAssociationRefreshRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ OAuthAuthorizationUrl: SensitiveString })).annotate({
        identifier: "StartAccountAssociationRefreshResponse",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.Array(SensitiveString);
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DiscoveryType: DiscoveryType,
          CustomProtocolDetail: S.optional(CustomProtocolDetail),
          ControllerIdentifier: S.optional(S.String),
          ConnectorAssociationIdentifier: S.optional(S.String),
          AccountAssociationId: S.optional(S.String),
          AuthenticationMaterial: S.optional(SensitiveString),
          AuthenticationMaterialType: S.optional(DiscoveryAuthMaterialType),
          ClientToken: S.optional(S.String),
          Tags: S.optional(TagsMap),
          ConnectorDeviceIdList: S.optional(ConnectorDeviceIdList),
          Protocol: S.optional(ProtocolType),
          EndDeviceIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/device-discoveries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDeviceDiscoveryRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          StartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "StartDeviceDiscoveryResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: TagsMap }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountAssociationId: S.String.pipe(T.HttpLabel("AccountAssociationId")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/account-associations/{AccountAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAccountAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/cloud-connectors/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCloudConnectorRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          oAuthCompleteRedirectUrl: S.optional(S.String),
          proactiveRefreshTokenRenewal: S.optional(ProactiveRefreshTokenRenewal),
        }),
      ).annotate({ identifier: "OAuthUpdate" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AuthMaterialsToAdd: S.optional(AuthMaterials),
          AuthMaterialsToUpdate: S.optional(AuthMaterials),
        }),
      ).annotate({
        identifier: "GeneralAuthorizationUpdate",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          oAuthUpdate: S.optional(OAuthUpdate),
          GeneralAuthorizationUpdate: S.optional(GeneralAuthorizationUpdate),
        }),
      ).annotate({ identifier: "AuthConfigUpdate" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          Description: S.optional(S.String),
          Name: S.optional(S.String),
          AuthType: S.optional(AuthType),
          AuthConfig: S.optional(AuthConfigUpdate),
          SecretsManager: S.optional(SecretsManager),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/connector-destinations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConnectorDestinationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          DeliveryDestinationArn: S.optional(S.String),
          DeliveryDestinationType: S.optional(DeliveryDestinationType),
          RoleArn: S.optional(S.String),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/destinations/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDestinationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), EventLogLevel: LogLevel }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/event-log-configurations/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEventLogConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          Owner: S.optional(SensitiveString),
          CredentialLockerId: S.optional(S.String),
          SerialNumber: S.optional(SensitiveString),
          WiFiSimpleSetupConfiguration: S.optional(WiFiSimpleSetupConfiguration),
          Brand: S.optional(SensitiveString),
          Model: S.optional(SensitiveString),
          Name: S.optional(S.String),
          CapabilityReport: S.optional(CapabilityReport),
          CapabilitySchemas: S.optional(CapabilitySchemas),
          Capabilities: S.optional(S.String),
          Classification: S.optional(SensitiveString),
          HubNetworkMode: S.optional(HubNetworkMode),
          MetaData: S.optional(MetaData),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/managed-things/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateManagedThingRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EventType: EventType.pipe(T.HttpLabel("EventType")),
          DestinationName: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/notification-configurations/{EventType}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNotificationConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          Description: S.optional(S.String),
          TaskConfigurationId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/ota-tasks/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateOtaTaskRequest" });
  }
}
