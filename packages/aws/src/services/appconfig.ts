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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "AppConfig",
  serviceShapeName: "AmazonAppConfig",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "appconfig" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-10-09");
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
              `https://appconfig-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (Region === "us-gov-east-1") {
              return e("https://appconfig.us-gov-east-1.amazonaws.com");
            }
            if (Region === "us-gov-west-1") {
              return e("https://appconfig.us-gov-west-1.amazonaws.com");
            }
            return e(`https://appconfig-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://appconfig.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://appconfig.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "BadRequestReason",
        }),
      ),
      Details: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(136)).annotate({
          identifier: "BadRequestDetails",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class PayloadTooLargeException
  extends /*@__PURE__*/ S.TaggedError<PayloadTooLargeException>()(
    "PayloadTooLargeException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Measure: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "BytesMeasure" }),
      ),
      Limit: /*@__PURE__*/ S.optional(S.Number),
      Size: /*@__PURE__*/ S.optional(S.Number),
    },
    /*@__PURE__*/ T.HttpError(413),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export type Name = string;
export type Description = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateApplicationRequest {
  Name: string;
  Description?: string;
  Tags?: { [key: string]: string | undefined };
}
export type Id = string;
export interface Application {
  Id?: string;
  Name?: string;
  Description?: string;
}
export type LongName = string;
export type Uri = string;
export type RoleArn = string;
export type ValidatorType = "JSON_SCHEMA" | "LAMBDA" | (string & {});
export type StringWithLengthBetween0And32768 = string | redacted.Redacted<string>;
export interface Validator {
  Type: ValidatorType;
  Content: string | redacted.Redacted<string>;
}
export type ValidatorList = Validator[];
export type ConfigurationProfileType = string;
export type KmsKeyIdentifier = string;
export interface CreateConfigurationProfileRequest {
  ApplicationId: string;
  Name: string;
  Description?: string;
  LocationUri: string;
  RetrievalRoleArn?: string;
  Validators?: Validator[];
  Tags?: { [key: string]: string | undefined };
  Type?: string;
  KmsKeyIdentifier?: string;
}
export type Arn = string;
export interface ConfigurationProfile {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  LocationUri?: string;
  RetrievalRoleArn?: string;
  Validators?: Validator[];
  Type?: string;
  KmsKeyArn?: string;
  KmsKeyIdentifier?: string;
}
export type MinutesBetween0And24Hours = number;
export type GrowthFactor = number;
export type GrowthType = "LINEAR" | "EXPONENTIAL" | (string & {});
export type ReplicateTo = "NONE" | "SSM_DOCUMENT" | (string & {});
export interface CreateDeploymentStrategyRequest {
  Name: string;
  Description?: string;
  DeploymentDurationInMinutes: number;
  FinalBakeTimeInMinutes?: number;
  GrowthFactor: number;
  GrowthType?: GrowthType;
  ReplicateTo?: ReplicateTo;
  Tags?: { [key: string]: string | undefined };
}
export type Percentage = number;
export interface DeploymentStrategy {
  Id?: string;
  Name?: string;
  Description?: string;
  DeploymentDurationInMinutes?: number;
  GrowthType?: GrowthType;
  GrowthFactor?: number;
  FinalBakeTimeInMinutes?: number;
  ReplicateTo?: ReplicateTo;
}
export type StringWithLengthBetween1And2048 = string;
export interface Monitor {
  AlarmArn: string;
  AlarmRoleArn?: string;
}
export type MonitorList = Monitor[];
export interface CreateEnvironmentRequest {
  ApplicationId: string;
  Name: string;
  Description?: string;
  Monitors?: Monitor[];
  Tags?: { [key: string]: string | undefined };
}
export type EnvironmentState =
  | "READY_FOR_DEPLOYMENT"
  | "DEPLOYING"
  | "ROLLING_BACK"
  | "ROLLED_BACK"
  | "REVERTED"
  | (string & {});
export interface Environment {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  State?: EnvironmentState;
  Monitors?: Monitor[];
}
export type Identifier = string;
export type NameWithReservedAwsPrefix = string;
export type FlagKey = string;
export type Weight = number;
export type AttributeKey = string;
export type AttributeString = string;
export type StringList = string[];
export type NumberList = number[];
export type AttributeValue =
  | {
      StringValue: string;
      NumberValue?: never;
      BooleanValue?: never;
      StringArray?: never;
      NumberArray?: never;
    }
  | {
      StringValue?: never;
      NumberValue: number;
      BooleanValue?: never;
      StringArray?: never;
      NumberArray?: never;
    }
  | {
      StringValue?: never;
      NumberValue?: never;
      BooleanValue: boolean;
      StringArray?: never;
      NumberArray?: never;
    }
  | {
      StringValue?: never;
      NumberValue?: never;
      BooleanValue?: never;
      StringArray: string[];
      NumberArray?: never;
    }
  | {
      StringValue?: never;
      NumberValue?: never;
      BooleanValue?: never;
      StringArray?: never;
      NumberArray: number[];
    };
export type AttributeValueMap = { [key: string]: AttributeValue | undefined };
export interface FlagValue {
  Enabled: boolean;
  AttributeValues?: { [key: string]: AttributeValue | undefined };
}
export interface TreatmentInput {
  Weight: number;
  Description?: string;
  FlagValue: FlagValue;
}
export type TreatmentInputList = TreatmentInput[];
export type Rule = string;
export interface CreateExperimentDefinitionRequest {
  ApplicationIdentifier: string;
  Name: string;
  ConfigurationProfileIdentifier: string;
  EnvironmentIdentifier: string;
  FlagKey: string;
  Treatments: TreatmentInput[];
  Control: TreatmentInput;
  AudienceRule: string;
  Hypothesis?: string;
  AudienceDescription?: string;
  LaunchCriteria?: string;
  Tags?: { [key: string]: string | undefined };
}
export type ExperimentDefinitionStatus = "ACTIVE" | "IDLE" | "ARCHIVED" | (string & {});
export type TreatmentKey = string;
export interface Treatment {
  Key?: string;
  Weight: number;
  Description?: string;
  FlagValue: FlagValue;
}
export type TreatmentList = Treatment[];
export type Iso8601DateTime = Date;
export interface ExperimentDefinition {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  Hypothesis?: string;
  Status?: ExperimentDefinitionStatus;
  ConfigurationProfileId?: string;
  EnvironmentId?: string;
  FlagKey?: string;
  AudienceRule?: string;
  AudienceDescription?: string;
  LaunchCriteria?: string;
  Treatments?: Treatment[];
  Control?: Treatment;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  KmsKeyIdentifier?: string;
}
export type ExtensionOrParameterName = string;
export type ActionPoint =
  | "PRE_CREATE_HOSTED_CONFIGURATION_VERSION"
  | "PRE_START_DEPLOYMENT"
  | "AT_DEPLOYMENT_TICK"
  | "ON_DEPLOYMENT_START"
  | "ON_DEPLOYMENT_STEP"
  | "ON_DEPLOYMENT_BAKING"
  | "ON_DEPLOYMENT_COMPLETE"
  | "ON_DEPLOYMENT_ROLLED_BACK"
  | (string & {});
export interface Action {
  Name?: string;
  Description?: string;
  Uri?: string;
  RoleArn?: string;
}
export type ActionList = Action[];
export type ActionsMap = { [key in ActionPoint]?: Action[] };
export interface Parameter {
  Description?: string;
  Required?: boolean;
  Dynamic?: boolean;
}
export type ParameterMap = { [key: string]: Parameter | undefined };
export interface CreateExtensionRequest {
  Name: string;
  Description?: string;
  Actions: { [key: string]: Action[] | undefined };
  Parameters?: { [key: string]: Parameter | undefined };
  Tags?: { [key: string]: string | undefined };
  LatestVersionNumber?: number;
}
export interface Extension {
  Id?: string;
  Name?: string;
  VersionNumber?: number;
  Arn?: string;
  Description?: string;
  Actions?: { [key: string]: Action[] | undefined };
  Parameters?: { [key: string]: Parameter | undefined };
}
export type ParameterValueMap = { [key: string]: string | undefined };
export interface CreateExtensionAssociationRequest {
  ExtensionIdentifier: string;
  ExtensionVersionNumber?: number;
  ResourceIdentifier: string;
  Parameters?: { [key: string]: string | undefined };
  Tags?: { [key: string]: string | undefined };
}
export interface ExtensionAssociation {
  Id?: string;
  ExtensionArn?: string;
  ResourceArn?: string;
  Arn?: string;
  Parameters?: { [key: string]: string | undefined };
  ExtensionVersionNumber?: number;
}
export type StringWithLengthBetween1And255 = string;
export type VersionLabel = string;
export interface CreateHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  Description?: string;
  Content: T.StreamingInputBody;
  ContentType: string;
  LatestVersionNumber?: number;
  VersionLabel?: string;
}
export interface HostedConfigurationVersion {
  ApplicationId?: string;
  ConfigurationProfileId?: string;
  VersionNumber?: number;
  Description?: string;
  Content?: T.StreamingOutputBody;
  ContentType?: string;
  VersionLabel?: string;
  KmsKeyArn?: string;
}
export interface DeleteApplicationRequest {
  ApplicationId: string;
}
export interface DeleteApplicationResponse {}
export type DeletionProtectionCheck = "ACCOUNT_DEFAULT" | "APPLY" | "BYPASS" | (string & {});
export interface DeleteConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  DeletionProtectionCheck?: DeletionProtectionCheck;
}
export interface DeleteConfigurationProfileResponse {}
export type DeploymentStrategyId = string;
export interface DeleteDeploymentStrategyRequest {
  DeploymentStrategyId: string;
}
export interface DeleteDeploymentStrategyResponse {}
export interface DeleteEnvironmentRequest {
  EnvironmentId: string;
  ApplicationId: string;
  DeletionProtectionCheck?: DeletionProtectionCheck;
}
export interface DeleteEnvironmentResponse {}
export type DeleteType = "ARCHIVE" | "DESTROY" | (string & {});
export interface DeleteExperimentDefinitionRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
  DeleteType?: DeleteType;
}
export interface DeleteExperimentDefinitionResponse {}
export interface DeleteExtensionRequest {
  ExtensionIdentifier: string;
  VersionNumber?: number;
}
export interface DeleteExtensionResponse {}
export interface DeleteExtensionAssociationRequest {
  ExtensionAssociationId: string;
}
export interface DeleteExtensionAssociationResponse {}
export interface DeleteHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  VersionNumber: number;
}
export interface DeleteHostedConfigurationVersionResponse {}
export interface GetAccountSettingsRequest {}
export type DeletionProtectionDuration = number;
export interface DeletionProtectionSettings {
  Enabled?: boolean;
  ProtectionPeriodInMinutes?: number;
}
export interface VendedMetricsSettings {
  Enabled?: boolean;
}
export interface AccountSettings {
  DeletionProtection?: DeletionProtectionSettings;
  VendedMetrics?: VendedMetricsSettings;
}
export interface GetApplicationRequest {
  ApplicationId: string;
}
export type StringWithLengthBetween1And64 = string;
export type Version = string;
export interface GetConfigurationRequest {
  Application: string;
  Environment: string;
  Configuration: string;
  ClientId: string;
  ClientConfigurationVersion?: string;
}
export interface Configuration {
  Content?: T.StreamingOutputBody;
  ConfigurationVersion?: string;
  ContentType?: string;
}
export interface GetConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
}
export interface GetDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentNumber: number;
}
export type DeploymentState =
  | "BAKING"
  | "VALIDATING"
  | "DEPLOYING"
  | "COMPLETE"
  | "ROLLING_BACK"
  | "ROLLED_BACK"
  | "REVERTED"
  | (string & {});
export type DeploymentEventType =
  | "PERCENTAGE_UPDATED"
  | "ROLLBACK_STARTED"
  | "ROLLBACK_COMPLETED"
  | "BAKE_TIME_STARTED"
  | "DEPLOYMENT_STARTED"
  | "DEPLOYMENT_COMPLETED"
  | "REVERT_COMPLETED"
  | (string & {});
export type TriggeredBy =
  | "USER"
  | "APPCONFIG"
  | "CLOUDWATCH_ALARM"
  | "INTERNAL_ERROR"
  | (string & {});
export interface ActionInvocation {
  ExtensionIdentifier?: string;
  ActionName?: string;
  Uri?: string;
  RoleArn?: string;
  ErrorMessage?: string;
  ErrorCode?: string;
  InvocationId?: string;
}
export type ActionInvocations = ActionInvocation[];
export interface DeploymentEvent {
  EventType?: DeploymentEventType;
  TriggeredBy?: TriggeredBy;
  Description?: string;
  ActionInvocations?: ActionInvocation[];
  OccurredAt?: Date;
}
export type DeploymentEvents = DeploymentEvent[];
export interface AppliedExtension {
  ExtensionId?: string;
  ExtensionAssociationId?: string;
  VersionNumber?: number;
  Parameters?: { [key: string]: string | undefined };
}
export type AppliedExtensions = AppliedExtension[];
export interface Deployment {
  ApplicationId?: string;
  EnvironmentId?: string;
  DeploymentStrategyId?: string;
  ConfigurationProfileId?: string;
  DeploymentNumber?: number;
  ConfigurationName?: string;
  ConfigurationLocationUri?: string;
  ConfigurationVersion?: string;
  Description?: string;
  DeploymentDurationInMinutes?: number;
  GrowthType?: GrowthType;
  GrowthFactor?: number;
  FinalBakeTimeInMinutes?: number;
  State?: DeploymentState;
  EventLog?: DeploymentEvent[];
  PercentageComplete?: number;
  StartedAt?: Date;
  CompletedAt?: Date;
  AppliedExtensions?: AppliedExtension[];
  KmsKeyArn?: string;
  KmsKeyIdentifier?: string;
  VersionLabel?: string;
}
export interface GetDeploymentStrategyRequest {
  DeploymentStrategyId: string;
}
export interface GetEnvironmentRequest {
  ApplicationId: string;
  EnvironmentId: string;
}
export interface GetExperimentDefinitionRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
}
export type PositiveInteger = number;
export interface GetExperimentRunRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
  Run: number;
}
export type ExperimentRunStatus = "RUNNING" | "DONE" | (string & {});
export type NullablePercentage = number;
export type EntityId = string;
export type TreatmentOverrideMap = { [key: string]: string | undefined };
export type TreatmentOverrides = { Inline: { [key: string]: string | undefined } };
export interface ExperimentRunResult {
  ExecutiveSummary?: string;
  ReasonsToLaunch?: string;
  ReasonsNotToLaunch?: string;
}
export interface ExperimentDefinitionSnapshot {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  Hypothesis?: string;
  ConfigurationProfileId?: string;
  EnvironmentId?: string;
  FlagKey?: string;
  AudienceRule?: string;
  AudienceDescription?: string;
  LaunchCriteria?: string;
  Treatments?: Treatment[];
  Control?: Treatment;
}
export interface ExperimentRun {
  ApplicationId?: string;
  ExperimentDefinitionId?: string;
  Run?: number;
  Description?: string;
  Status?: ExperimentRunStatus;
  ExposurePercentage?: number;
  TreatmentOverrides?: TreatmentOverrides;
  Result?: ExperimentRunResult;
  StartedAt?: Date;
  UpdatedAt?: Date;
  EndedAt?: Date;
  ExperimentDefinitionSnapshot?: ExperimentDefinitionSnapshot;
}
export interface GetExtensionRequest {
  ExtensionIdentifier: string;
  VersionNumber?: number;
}
export interface GetExtensionAssociationRequest {
  ExtensionAssociationId: string;
}
export interface GetHostedConfigurationVersionRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  VersionNumber: number;
}
export type MaxResults = number;
export type NextToken = string;
export interface ListApplicationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type ApplicationList = Application[];
export interface Applications {
  Items?: Application[];
  NextToken?: string;
}
export interface ListConfigurationProfilesRequest {
  ApplicationId: string;
  MaxResults?: number;
  NextToken?: string;
  Type?: string;
}
export type ValidatorTypeList = ValidatorType[];
export interface ConfigurationProfileSummary {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  LocationUri?: string;
  ValidatorTypes?: ValidatorType[];
  Type?: string;
}
export type ConfigurationProfileSummaryList = ConfigurationProfileSummary[];
export interface ConfigurationProfiles {
  Items?: ConfigurationProfileSummary[];
  NextToken?: string;
}
export interface ListDeploymentsRequest {
  ApplicationId: string;
  EnvironmentId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type DeploymentType = "USER" | "MANAGED" | (string & {});
export interface DeploymentSummary {
  DeploymentNumber?: number;
  ConfigurationProfileId?: string;
  ConfigurationName?: string;
  ConfigurationVersion?: string;
  DeploymentDurationInMinutes?: number;
  GrowthType?: GrowthType;
  GrowthFactor?: number;
  FinalBakeTimeInMinutes?: number;
  State?: DeploymentState;
  PercentageComplete?: number;
  StartedAt?: Date;
  CompletedAt?: Date;
  VersionLabel?: string;
  Type?: DeploymentType;
}
export type DeploymentList = DeploymentSummary[];
export interface Deployments {
  Items?: DeploymentSummary[];
  NextToken?: string;
}
export interface ListDeploymentStrategiesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type DeploymentStrategyList = DeploymentStrategy[];
export interface DeploymentStrategies {
  Items?: DeploymentStrategy[];
  NextToken?: string;
}
export interface ListEnvironmentsRequest {
  ApplicationId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type EnvironmentList = Environment[];
export interface Environments {
  Items?: Environment[];
  NextToken?: string;
}
export interface ListExperimentDefinitionsRequest {
  ApplicationIdentifier?: string;
  ConfigurationProfileIdentifier?: string;
  EnvironmentIdentifier?: string;
  Status?: ExperimentDefinitionStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ExperimentDefinitionSummary {
  ApplicationId?: string;
  Id?: string;
  Name?: string;
  Hypothesis?: string;
  Status?: ExperimentDefinitionStatus;
  ConfigurationProfileId?: string;
  EnvironmentId?: string;
  FlagKey?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type ExperimentDefinitionList = ExperimentDefinitionSummary[];
export interface ExperimentDefinitions {
  Items?: ExperimentDefinitionSummary[];
  NextToken?: string;
}
export interface ListExperimentRunEventsRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
  Run: number;
  MaxResults?: number;
  NextToken?: string;
}
export type ExperimentRunEventType =
  | "RUN_STARTED"
  | "EXPOSURE_UPDATED"
  | "OVERRIDES_UPDATED"
  | "RUN_STOPPED"
  | (string & {});
export interface ExperimentRunEvent {
  Description?: string;
  AssociatedDeployment?: string;
  EventType?: ExperimentRunEventType;
  OccurredAt?: Date;
  TriggeredBy?: TriggeredBy;
  ExposurePercentage?: number;
  TreatmentOverrides?: TreatmentOverrides;
}
export type ExperimentRunEventList = ExperimentRunEvent[];
export interface ExperimentRunEvents {
  Items?: ExperimentRunEvent[];
  NextToken?: string;
}
export interface ListExperimentRunsRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
  MaxResults?: number;
  NextToken?: string;
  Status?: ExperimentRunStatus;
}
export interface ExperimentRunSummary {
  ExperimentDefinitionId?: string;
  Run?: number;
  Description?: string;
  Status?: ExperimentRunStatus;
  StartedAt?: Date;
  UpdatedAt?: Date;
  EndedAt?: Date;
}
export type ExperimentRunSummaryList = ExperimentRunSummary[];
export interface ExperimentRuns {
  Items?: ExperimentRunSummary[];
  NextToken?: string;
}
export interface ListExtensionAssociationsRequest {
  ResourceIdentifier?: string;
  ExtensionIdentifier?: string;
  ExtensionVersionNumber?: number;
  MaxResults?: number;
  NextToken?: string;
}
export interface ExtensionAssociationSummary {
  Id?: string;
  ExtensionArn?: string;
  ResourceArn?: string;
}
export type ExtensionAssociationSummaries = ExtensionAssociationSummary[];
export interface ExtensionAssociations {
  Items?: ExtensionAssociationSummary[];
  NextToken?: string;
}
export type QueryName = string;
export interface ListExtensionsRequest {
  MaxResults?: number;
  NextToken?: string;
  Name?: string;
}
export interface ExtensionSummary {
  Id?: string;
  Name?: string;
  VersionNumber?: number;
  Arn?: string;
  Description?: string;
}
export type ExtensionSummaries = ExtensionSummary[];
export interface Extensions {
  Items?: ExtensionSummary[];
  NextToken?: string;
}
export interface ListHostedConfigurationVersionsRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  MaxResults?: number;
  NextToken?: string;
  VersionLabel?: string;
}
export interface HostedConfigurationVersionSummary {
  ApplicationId?: string;
  ConfigurationProfileId?: string;
  VersionNumber?: number;
  Description?: string;
  ContentType?: string;
  VersionLabel?: string;
  KmsKeyArn?: string;
}
export type HostedConfigurationVersionSummaryList = HostedConfigurationVersionSummary[];
export interface HostedConfigurationVersions {
  Items?: HostedConfigurationVersionSummary[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ResourceTags {
  Tags?: { [key: string]: string | undefined };
}
export type DynamicParameterKey = string;
export type DynamicParameterMap = { [key: string]: string | undefined };
export interface StartDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentStrategyId: string;
  ConfigurationProfileId: string;
  ConfigurationVersion: string;
  Description?: string;
  Tags?: { [key: string]: string | undefined };
  KmsKeyIdentifier?: string;
  DynamicExtensionParameters?: { [key: string]: string | undefined };
  LatestDeploymentNumber?: number;
}
export interface DeploymentParameters {
  DynamicExtensionParameters?: { [key: string]: string | undefined };
  Tags?: { [key: string]: string | undefined };
}
export interface StartExperimentRunRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
  Description?: string;
  ExposurePercentage?: number;
  TreatmentOverrides?: TreatmentOverrides;
  Tags?: { [key: string]: string | undefined };
  DeploymentParameters?: DeploymentParameters;
}
export interface StopDeploymentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  DeploymentNumber: number;
  AllowRevert?: boolean;
}
export interface StopExperimentRunRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
  Run: number;
  Result?: ExperimentRunResult;
  DeploymentParameters?: DeploymentParameters;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAccountSettingsRequest {
  DeletionProtection?: DeletionProtectionSettings;
  VendedMetrics?: VendedMetricsSettings;
}
export interface UpdateApplicationRequest {
  ApplicationId: string;
  Name?: string;
  Description?: string;
}
export type KmsKeyIdentifierOrEmpty = string;
export interface UpdateConfigurationProfileRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  Name?: string;
  Description?: string;
  RetrievalRoleArn?: string;
  Validators?: Validator[];
  KmsKeyIdentifier?: string;
}
export interface UpdateDeploymentStrategyRequest {
  DeploymentStrategyId: string;
  Description?: string;
  DeploymentDurationInMinutes?: number;
  FinalBakeTimeInMinutes?: number;
  GrowthFactor?: number;
  GrowthType?: GrowthType;
}
export interface UpdateEnvironmentRequest {
  ApplicationId: string;
  EnvironmentId: string;
  Name?: string;
  Description?: string;
  Monitors?: Monitor[];
}
export interface UpdateExperimentDefinitionRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
  Treatments?: TreatmentInput[];
  Control?: TreatmentInput;
  Hypothesis?: string;
  AudienceRule?: string;
  AudienceDescription?: string;
  LaunchCriteria?: string;
}
export interface UpdateExperimentRunRequest {
  ApplicationIdentifier: string;
  ExperimentDefinitionIdentifier: string;
  Run: number;
  Description?: string;
  ExposurePercentage?: number;
  TreatmentOverrides?: TreatmentOverrides;
  DeploymentParameters?: DeploymentParameters;
}
export interface UpdateExtensionRequest {
  ExtensionIdentifier: string;
  Description?: string;
  Actions?: { [key: string]: Action[] | undefined };
  Parameters?: { [key: string]: Parameter | undefined };
  VersionNumber?: number;
}
export interface UpdateExtensionAssociationRequest {
  ExtensionAssociationId: string;
  Parameters?: { [key: string]: string | undefined };
}
export interface ValidateConfigurationRequest {
  ApplicationId: string;
  ConfigurationProfileId: string;
  ConfigurationVersion: string;
}
export interface ValidateConfigurationResponse {}
export type BadRequestReason = "InvalidConfiguration" | (string & {});
export interface InvalidConfigurationDetail {
  Constraint?: string;
  Location?: string;
  Reason?: string;
  Type?: string;
  Value?: string;
}
export type InvalidConfigurationDetailList = InvalidConfigurationDetail[];
export type BadRequestDetails = { InvalidConfiguration: InvalidConfigurationDetail[] };
export type BytesMeasure = "KILOBYTES" | (string & {});
export type CreateApplicationError =
  | BadRequestException
  | InternalServerException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates an application. In AppConfig, an application is simply an
 * organizational construct like a folder. This organizational construct has a relationship
 * with some unit of executable code. For example, you could create an application called
 * MyMobileApp to organize and manage configuration data for a mobile application installed by
 * your users.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  Application,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<CreateApplicationRequest>,
  output: __S(2) as any as S.Schema<Application>,
  errors: [BadRequestException, InternalServerException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateConfigurationProfileError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a configuration profile, which is information that enables AppConfig
 * to access the configuration source. Valid configuration sources include the
 * following:
 *
 * - Configuration data in YAML, JSON, and other formats stored in the AppConfig hosted configuration store
 *
 * - Configuration data stored as objects in an Amazon Simple Storage Service (Amazon S3)
 * bucket
 *
 * - Pipelines stored in CodePipeline
 *
 * - Secrets stored in Secrets Manager
 *
 * - Standard and secure string parameters stored in Amazon Web Services Systems Manager Parameter Store
 *
 * - Configuration data in SSM documents stored in the Systems Manager document store
 *
 * A configuration profile includes the following information:
 *
 * - The URI location of the configuration data.
 *
 * - The Identity and Access Management (IAM) role that provides access to the configuration data.
 *
 * - A validator for the configuration data. Available validators include either a JSON
 * Schema or an Amazon Web Services Lambda function.
 *
 * For more information, see Create a
 * Configuration and a Configuration Profile in the AppConfig
 * User Guide.
 */
export const createConfigurationProfile: API.OperationMethod<
  CreateConfigurationProfileRequest,
  ConfigurationProfile,
  CreateConfigurationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<CreateConfigurationProfileRequest>,
  output: __S(6) as any as S.Schema<ConfigurationProfile>,
  errors: [
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationProfile",
}));

export type CreateDeploymentStrategyError =
  | BadRequestException
  | InternalServerException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a deployment strategy that defines important criteria for rolling out your
 * configuration to the designated targets. A deployment strategy includes the overall
 * duration required, a percentage of targets to receive the deployment during each interval,
 * an algorithm that defines how percentage grows, and bake time.
 */
export const createDeploymentStrategy: API.OperationMethod<
  CreateDeploymentStrategyRequest,
  DeploymentStrategy,
  CreateDeploymentStrategyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<CreateDeploymentStrategyRequest>,
  output: __S(8) as any as S.Schema<DeploymentStrategy>,
  errors: [BadRequestException, InternalServerException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDeploymentStrategy",
}));

export type CreateEnvironmentError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates an environment. For each application, you define one or more environments. An
 * environment is a deployment group of AppConfig targets, such as applications in a
 * `Beta` or `Production` environment. You can also define
 * environments for application subcomponents such as the `Web`,
 * `Mobile` and `Back-end` components for your application. You can
 * configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a
 * configuration deployment. If an alarm is triggered, the system rolls back the
 * configuration.
 */
export const createEnvironment: API.OperationMethod<
  CreateEnvironmentRequest,
  Environment,
  CreateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<CreateEnvironmentRequest>,
  output: __S(12) as any as S.Schema<Environment>,
  errors: [
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEnvironment",
}));

export type CreateExperimentDefinitionError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates an experiment definition in AppConfig. An experiment definition describes the purpose, scope, and operational configuration of an experiment, including the target audience, feature flag, and treatment configurations.
 */
export const createExperimentDefinition: API.OperationMethod<
  CreateExperimentDefinitionRequest,
  ExperimentDefinition,
  CreateExperimentDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<CreateExperimentDefinitionRequest>,
  output: __S(23) as any as S.Schema<ExperimentDefinition>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExperimentDefinition",
}));

export type CreateExtensionError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates an AppConfig extension. An extension augments your ability to inject
 * logic or behavior at different points during the AppConfig workflow of creating
 * or deploying a configuration.
 *
 * You can create your own extensions or use the Amazon Web Services authored extensions provided by
 * AppConfig. For an AppConfig extension that uses Lambda, you must create a Lambda function to perform any computation and processing
 * defined in the extension. If you plan to create custom versions of the Amazon Web Services
 * authored notification extensions, you only need to specify an Amazon Resource Name (ARN) in
 * the `Uri` field for the new extension version.
 *
 * - For a custom EventBridge notification extension, enter the ARN of the EventBridge
 * default events in the `Uri` field.
 *
 * - For a custom Amazon SNS notification extension, enter the ARN of an Amazon SNS
 * topic in the `Uri` field.
 *
 * - For a custom Amazon SQS notification extension, enter the ARN of an Amazon SQS
 * message queue in the `Uri` field.
 *
 * For more information about extensions, see Extending
 * workflows in the *AppConfig User Guide*.
 */
export const createExtension: API.OperationMethod<
  CreateExtensionRequest,
  Extension,
  CreateExtensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<CreateExtensionRequest>,
  output: __S(30) as any as S.Schema<Extension>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExtension",
}));

export type CreateExtensionAssociationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * When you create an extension or configure an Amazon Web Services authored extension, you
 * associate the extension with an AppConfig application, environment, or
 * configuration profile. For example, you can choose to run the AppConfig
 * deployment events to Amazon SNS
 * Amazon Web Services authored extension and receive notifications on an Amazon SNS
 * topic anytime a configuration deployment is started for a specific application. Defining
 * which extension to associate with an AppConfig resource is called an
 * *extension association*. An extension association is a specified
 * relationship between an extension and an AppConfig resource, such as an
 * application or a configuration profile. For more information about extensions and
 * associations, see Extending
 * workflows in the *AppConfig User Guide*.
 */
export const createExtensionAssociation: API.OperationMethod<
  CreateExtensionAssociationRequest,
  ExtensionAssociation,
  CreateExtensionAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<CreateExtensionAssociationRequest>,
  output: __S(33) as any as S.Schema<ExtensionAssociation>,
  errors: [
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExtensionAssociation",
}));

export type CreateHostedConfigurationVersionError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | PayloadTooLargeException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a new configuration in the AppConfig hosted configuration store. If
 * you're creating a feature flag, we recommend you familiarize yourself with the JSON schema
 * for feature flag data. For more information, see Type reference for AWS.AppConfig.FeatureFlags in the
 * *AppConfig User Guide*.
 */
export const createHostedConfigurationVersion: API.OperationMethod<
  CreateHostedConfigurationVersionRequest,
  HostedConfigurationVersion,
  CreateHostedConfigurationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<CreateHostedConfigurationVersionRequest>,
  output: __S(35) as any as S.Schema<HostedConfigurationVersion>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    PayloadTooLargeException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHostedConfigurationVersion",
}));

export type DeleteApplicationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an application.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(37) as any as S.Schema<DeleteApplicationResponse>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteConfigurationProfileError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a configuration profile.
 *
 * To prevent users from unintentionally deleting actively-used configuration profiles,
 * enable deletion
 * protection.
 */
export const deleteConfigurationProfile: API.OperationMethod<
  DeleteConfigurationProfileRequest,
  DeleteConfigurationProfileResponse,
  DeleteConfigurationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<DeleteConfigurationProfileRequest>,
  output: __S(39) as any as S.Schema<DeleteConfigurationProfileResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationProfile",
}));

export type DeleteDeploymentStrategyError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a deployment strategy.
 */
export const deleteDeploymentStrategy: API.OperationMethod<
  DeleteDeploymentStrategyRequest,
  DeleteDeploymentStrategyResponse,
  DeleteDeploymentStrategyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<DeleteDeploymentStrategyRequest>,
  output: __S(39) as any as S.Schema<DeleteDeploymentStrategyResponse>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDeploymentStrategy",
}));

export type DeleteEnvironmentError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an environment.
 *
 * To prevent users from unintentionally deleting actively-used environments, enable deletion
 * protection.
 */
export const deleteEnvironment: API.OperationMethod<
  DeleteEnvironmentRequest,
  DeleteEnvironmentResponse,
  DeleteEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<DeleteEnvironmentRequest>,
  output: __S(37) as any as S.Schema<DeleteEnvironmentResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEnvironment",
}));

export type DeleteExperimentDefinitionError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an experiment definition. You can archive the definition to hide it from the active list while preserving it for future reference, or permanently delete it along with all associated run history.
 */
export const deleteExperimentDefinition: API.OperationMethod<
  DeleteExperimentDefinitionRequest,
  DeleteExperimentDefinitionResponse,
  DeleteExperimentDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<DeleteExperimentDefinitionRequest>,
  output: __S(39) as any as S.Schema<DeleteExperimentDefinitionResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExperimentDefinition",
}));

export type DeleteExtensionError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an AppConfig extension. You must delete all associations to an
 * extension before you delete the extension.
 */
export const deleteExtension: API.OperationMethod<
  DeleteExtensionRequest,
  DeleteExtensionResponse,
  DeleteExtensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<DeleteExtensionRequest>,
  output: __S(37) as any as S.Schema<DeleteExtensionResponse>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExtension",
}));

export type DeleteExtensionAssociationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an extension association. This action doesn't delete extensions defined in the
 * association.
 */
export const deleteExtensionAssociation: API.OperationMethod<
  DeleteExtensionAssociationRequest,
  DeleteExtensionAssociationResponse,
  DeleteExtensionAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<DeleteExtensionAssociationRequest>,
  output: __S(39) as any as S.Schema<DeleteExtensionAssociationResponse>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExtensionAssociation",
}));

export type DeleteHostedConfigurationVersionError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a version of a configuration from the AppConfig hosted configuration
 * store.
 */
export const deleteHostedConfigurationVersion: API.OperationMethod<
  DeleteHostedConfigurationVersionRequest,
  DeleteHostedConfigurationVersionResponse,
  DeleteHostedConfigurationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<DeleteHostedConfigurationVersionRequest>,
  output: __S(39) as any as S.Schema<DeleteHostedConfigurationVersionResponse>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHostedConfigurationVersion",
}));

export type GetAccountSettingsError = BadRequestException | InternalServerException | CommonErrors;
/**
 * Returns information about the status of the `DeletionProtection`
 * parameter.
 */
export const getAccountSettings: API.OperationMethod<
  GetAccountSettingsRequest,
  AccountSettings,
  GetAccountSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46) as any as S.Schema<GetAccountSettingsRequest>,
  output: __S(49) as any as S.Schema<AccountSettings>,
  errors: [BadRequestException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountSettings",
}));

export type GetApplicationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about an application.
 */
export const getApplication: API.OperationMethod<
  GetApplicationRequest,
  Application,
  GetApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<GetApplicationRequest>,
  output: __S(2) as any as S.Schema<Application>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplication",
}));

export type GetConfigurationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * (Deprecated) Retrieves the latest deployed configuration.
 *
 * Note the following important information.
 *
 * - This API action is deprecated. Calls to receive configuration data should use
 * the StartConfigurationSession and GetLatestConfiguration APIs instead.
 *
 * - GetConfiguration is a priced call. For more information, see
 * Pricing.
 */
export const getConfiguration: API.OperationMethod<
  GetConfigurationRequest,
  Configuration,
  GetConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<GetConfigurationRequest>,
  output: __S(52) as any as S.Schema<Configuration>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguration",
}));

export type GetConfigurationProfileError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about a configuration profile.
 */
export const getConfigurationProfile: API.OperationMethod<
  GetConfigurationProfileRequest,
  ConfigurationProfile,
  GetConfigurationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<GetConfigurationProfileRequest>,
  output: __S(6) as any as S.Schema<ConfigurationProfile>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationProfile",
}));

export type GetDeploymentError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about a configuration deployment.
 */
export const getDeployment: API.OperationMethod<
  GetDeploymentRequest,
  Deployment,
  GetDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<GetDeploymentRequest>,
  output: __S(61) as any as S.Schema<Deployment>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeployment",
}));

export type GetDeploymentStrategyError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about a deployment strategy. A deployment strategy defines
 * important criteria for rolling out your configuration to the designated targets. A
 * deployment strategy includes the overall duration required, a percentage of targets to
 * receive the deployment during each interval, an algorithm that defines how percentage
 * grows, and bake time.
 */
export const getDeploymentStrategy: API.OperationMethod<
  GetDeploymentStrategyRequest,
  DeploymentStrategy,
  GetDeploymentStrategyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<GetDeploymentStrategyRequest>,
  output: __S(8) as any as S.Schema<DeploymentStrategy>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeploymentStrategy",
}));

export type GetEnvironmentError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about an environment. An environment is a deployment group of
 * AppConfig applications, such as applications in a `Production`
 * environment or in an `EU_Region` environment. Each configuration deployment
 * targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If
 * an alarm is triggered during a deployment, AppConfig roles back the
 * configuration.
 */
export const getEnvironment: API.OperationMethod<
  GetEnvironmentRequest,
  Environment,
  GetEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<GetEnvironmentRequest>,
  output: __S(12) as any as S.Schema<Environment>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironment",
}));

export type GetExperimentDefinitionError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about an experiment definition.
 */
export const getExperimentDefinition: API.OperationMethod<
  GetExperimentDefinitionRequest,
  ExperimentDefinition,
  GetExperimentDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<GetExperimentDefinitionRequest>,
  output: __S(23) as any as S.Schema<ExperimentDefinition>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExperimentDefinition",
}));

export type GetExperimentRunError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about an experiment run, including its status, start time, and exposure settings.
 */
export const getExperimentRun: API.OperationMethod<
  GetExperimentRunRequest,
  ExperimentRun,
  GetExperimentRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<GetExperimentRunRequest>,
  output: __S(69) as any as S.Schema<ExperimentRun>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExperimentRun",
}));

export type GetExtensionError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns information about an AppConfig extension.
 */
export const getExtension: API.OperationMethod<
  GetExtensionRequest,
  Extension,
  GetExtensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<GetExtensionRequest>,
  output: __S(30) as any as S.Schema<Extension>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExtension",
}));

export type GetExtensionAssociationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns information about an AppConfig extension association. For more
 * information about extensions and associations, see Extending
 * workflows in the *AppConfig User Guide*.
 */
export const getExtensionAssociation: API.OperationMethod<
  GetExtensionAssociationRequest,
  ExtensionAssociation,
  GetExtensionAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<GetExtensionAssociationRequest>,
  output: __S(33) as any as S.Schema<ExtensionAssociation>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExtensionAssociation",
}));

export type GetHostedConfigurationVersionError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about a specific configuration version.
 */
export const getHostedConfigurationVersion: API.OperationMethod<
  GetHostedConfigurationVersionRequest,
  HostedConfigurationVersion,
  GetHostedConfigurationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<GetHostedConfigurationVersionRequest>,
  output: __S(35) as any as S.Schema<HostedConfigurationVersion>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHostedConfigurationVersion",
}));

export type ListApplicationsError = BadRequestException | InternalServerException | CommonErrors;
/**
 * Lists all applications in your Amazon Web Services account.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  Applications,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  Application
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(73) as any as S.Schema<ListApplicationsRequest>,
  output: __S(75) as any as S.Schema<Applications>,
  errors: [BadRequestException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConfigurationProfilesError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the configuration profiles for an application.
 */
export const listConfigurationProfiles: API.PaginatedOperationMethod<
  ListConfigurationProfilesRequest,
  ConfigurationProfiles,
  ListConfigurationProfilesError,
  Credentials | HttpClient.HttpClient,
  ConfigurationProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(76) as any as S.Schema<ListConfigurationProfilesRequest>,
  output: __S(80) as any as S.Schema<ConfigurationProfiles>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDeploymentsError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the deployments for an environment in descending deployment number order.
 */
export const listDeployments: API.PaginatedOperationMethod<
  ListDeploymentsRequest,
  Deployments,
  ListDeploymentsError,
  Credentials | HttpClient.HttpClient,
  DeploymentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(81) as any as S.Schema<ListDeploymentsRequest>,
  output: __S(84) as any as S.Schema<Deployments>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeployments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDeploymentStrategiesError =
  | BadRequestException
  | InternalServerException
  | CommonErrors;
/**
 * Lists deployment strategies.
 */
export const listDeploymentStrategies: API.PaginatedOperationMethod<
  ListDeploymentStrategiesRequest,
  DeploymentStrategies,
  ListDeploymentStrategiesError,
  Credentials | HttpClient.HttpClient,
  DeploymentStrategy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(85) as any as S.Schema<ListDeploymentStrategiesRequest>,
  output: __S(87) as any as S.Schema<DeploymentStrategies>,
  errors: [BadRequestException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeploymentStrategies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEnvironmentsError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the environments for an application.
 */
export const listEnvironments: API.PaginatedOperationMethod<
  ListEnvironmentsRequest,
  Environments,
  ListEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  Environment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(88) as any as S.Schema<ListEnvironmentsRequest>,
  output: __S(90) as any as S.Schema<Environments>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListExperimentDefinitionsError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the experiment definitions for an account. You can filter results by application, configuration profile, environment, or status.
 */
export const listExperimentDefinitions: API.PaginatedOperationMethod<
  ListExperimentDefinitionsRequest,
  ExperimentDefinitions,
  ListExperimentDefinitionsError,
  Credentials | HttpClient.HttpClient,
  ExperimentDefinitionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(91) as any as S.Schema<ListExperimentDefinitionsRequest>,
  output: __S(94) as any as S.Schema<ExperimentDefinitions>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExperimentDefinitions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListExperimentRunEventsError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the events for a specified experiment run. Events provide a timeline of actions and state changes that occurred during the run.
 */
export const listExperimentRunEvents: API.PaginatedOperationMethod<
  ListExperimentRunEventsRequest,
  ExperimentRunEvents,
  ListExperimentRunEventsError,
  Credentials | HttpClient.HttpClient,
  ExperimentRunEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(95) as any as S.Schema<ListExperimentRunEventsRequest>,
  output: __S(98) as any as S.Schema<ExperimentRunEvents>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExperimentRunEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListExperimentRunsError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the experiment runs for a specified experiment definition. You can filter by status.
 */
export const listExperimentRuns: API.PaginatedOperationMethod<
  ListExperimentRunsRequest,
  ExperimentRuns,
  ListExperimentRunsError,
  Credentials | HttpClient.HttpClient,
  ExperimentRunSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(99) as any as S.Schema<ListExperimentRunsRequest>,
  output: __S(102) as any as S.Schema<ExperimentRuns>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExperimentRuns",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListExtensionAssociationsError =
  | BadRequestException
  | InternalServerException
  | CommonErrors;
/**
 * Lists all AppConfig extension associations in the account. For more
 * information about extensions and associations, see Extending
 * workflows in the *AppConfig User Guide*.
 */
export const listExtensionAssociations: API.PaginatedOperationMethod<
  ListExtensionAssociationsRequest,
  ExtensionAssociations,
  ListExtensionAssociationsError,
  Credentials | HttpClient.HttpClient,
  ExtensionAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(103) as any as S.Schema<ListExtensionAssociationsRequest>,
  output: __S(106) as any as S.Schema<ExtensionAssociations>,
  errors: [BadRequestException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExtensionAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListExtensionsError = BadRequestException | InternalServerException | CommonErrors;
/**
 * Lists all custom and Amazon Web Services authored AppConfig extensions in the
 * account. For more information about extensions, see Extending
 * workflows in the *AppConfig User Guide*.
 */
export const listExtensions: API.PaginatedOperationMethod<
  ListExtensionsRequest,
  Extensions,
  ListExtensionsError,
  Credentials | HttpClient.HttpClient,
  ExtensionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(107) as any as S.Schema<ListExtensionsRequest>,
  output: __S(110) as any as S.Schema<Extensions>,
  errors: [BadRequestException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExtensions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListHostedConfigurationVersionsError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists configurations stored in the AppConfig hosted configuration store by
 * version.
 */
export const listHostedConfigurationVersions: API.PaginatedOperationMethod<
  ListHostedConfigurationVersionsRequest,
  HostedConfigurationVersions,
  ListHostedConfigurationVersionsError,
  Credentials | HttpClient.HttpClient,
  HostedConfigurationVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(111) as any as S.Schema<ListHostedConfigurationVersionsRequest>,
  output: __S(114) as any as S.Schema<HostedConfigurationVersions>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHostedConfigurationVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the list of key-value tags assigned to the resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ResourceTags,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(116) as any as S.Schema<ResourceTags>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartDeploymentError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Starts a deployment.
 *
 * AppConfig Agent supports deploying feature flag or free-form configuration data to specific segments or individual users during a gradual rollout. Entity-based gradual deployments ensure that once a user or segment receives a configuration version, they continue to receive that same version throughout the deployment period, regardless of which compute resource serves their requests. For more information, see Using AppConfig Agent for user-based or entity-based gradual deployments
 */
export const startDeployment: API.OperationMethod<
  StartDeploymentRequest,
  Deployment,
  StartDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117) as any as S.Schema<StartDeploymentRequest>,
  output: __S(61) as any as S.Schema<Deployment>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDeployment",
}));

export type StartExperimentRunError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Starts an experiment run for the specified experiment definition. An experiment run delivers treatments to the target audience and collects metrics. You can start multiple experiment runs from the same experiment definition.
 *
 * Billing for this experiment begins when you call this operation and continues until the experiment is stopped. For pricing details, see AppConfig pricing.
 */
export const startExperimentRun: API.OperationMethod<
  StartExperimentRunRequest,
  ExperimentRun,
  StartExperimentRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119) as any as S.Schema<StartExperimentRunRequest>,
  output: __S(69) as any as S.Schema<ExperimentRun>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartExperimentRun",
}));

export type StopDeploymentError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops a deployment. This API action works only on deployments that have a status of
 * `DEPLOYING`, unless an `AllowRevert` parameter is supplied. If the
 * `AllowRevert` parameter is supplied, the status of an in-progress deployment
 * will be `ROLLED_BACK`. The status of a completed deployment will be
 * `REVERTED`. AppConfig only allows a revert within 72 hours of
 * deployment completion.
 */
export const stopDeployment: API.OperationMethod<
  StopDeploymentRequest,
  Deployment,
  StopDeploymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120) as any as S.Schema<StopDeploymentRequest>,
  output: __S(61) as any as S.Schema<Deployment>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDeployment",
}));

export type StopExperimentRunError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops a running experiment. Stopping an experiment run ends audience exposure and returns users to the currently deployed feature flag configuration.
 */
export const stopExperimentRun: API.OperationMethod<
  StopExperimentRunRequest,
  ExperimentRun,
  StopExperimentRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<StopExperimentRunRequest>,
  output: __S(69) as any as S.Schema<ExperimentRun>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopExperimentRun",
}));

export type TagResourceError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Assigns metadata to an AppConfig resource. Tags help organize and categorize
 * your AppConfig resources. Each tag consists of a key and an optional value, both
 * of which you define. You can specify a maximum of 50 tags for a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122) as any as S.Schema<TagResourceRequest>,
  output: __S(37) as any as S.Schema<TagResourceResponse>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a tag key and value from an AppConfig resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123) as any as S.Schema<UntagResourceRequest>,
  output: __S(37) as any as S.Schema<UntagResourceResponse>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccountSettingsError =
  | BadRequestException
  | InternalServerException
  | CommonErrors;
/**
 * Updates the value of the `DeletionProtection` parameter.
 */
export const updateAccountSettings: API.OperationMethod<
  UpdateAccountSettingsRequest,
  AccountSettings,
  UpdateAccountSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124) as any as S.Schema<UpdateAccountSettingsRequest>,
  output: __S(49) as any as S.Schema<AccountSettings>,
  errors: [BadRequestException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccountSettings",
}));

export type UpdateApplicationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an application.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  Application,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(2) as any as S.Schema<Application>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateConfigurationProfileError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a configuration profile.
 */
export const updateConfigurationProfile: API.OperationMethod<
  UpdateConfigurationProfileRequest,
  ConfigurationProfile,
  UpdateConfigurationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126) as any as S.Schema<UpdateConfigurationProfileRequest>,
  output: __S(6) as any as S.Schema<ConfigurationProfile>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationProfile",
}));

export type UpdateDeploymentStrategyError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a deployment strategy.
 */
export const updateDeploymentStrategy: API.OperationMethod<
  UpdateDeploymentStrategyRequest,
  DeploymentStrategy,
  UpdateDeploymentStrategyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127) as any as S.Schema<UpdateDeploymentStrategyRequest>,
  output: __S(8) as any as S.Schema<DeploymentStrategy>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDeploymentStrategy",
}));

export type UpdateEnvironmentError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an environment.
 */
export const updateEnvironment: API.OperationMethod<
  UpdateEnvironmentRequest,
  Environment,
  UpdateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128) as any as S.Schema<UpdateEnvironmentRequest>,
  output: __S(12) as any as S.Schema<Environment>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEnvironment",
}));

export type UpdateExperimentDefinitionError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an experiment definition. You can update treatments, the control, audience rules, and other properties. You cannot update an experiment definition while an experiment run is active.
 */
export const updateExperimentDefinition: API.OperationMethod<
  UpdateExperimentDefinitionRequest,
  ExperimentDefinition,
  UpdateExperimentDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129) as any as S.Schema<UpdateExperimentDefinitionRequest>,
  output: __S(23) as any as S.Schema<ExperimentDefinition>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExperimentDefinition",
}));

export type UpdateExperimentRunError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a running experiment. Use this operation to increase audience exposure, modify treatment assignment overrides, or update the description of an active experiment run. Audience exposure can only be increased, not decreased.
 */
export const updateExperimentRun: API.OperationMethod<
  UpdateExperimentRunRequest,
  ExperimentRun,
  UpdateExperimentRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130) as any as S.Schema<UpdateExperimentRunRequest>,
  output: __S(69) as any as S.Schema<ExperimentRun>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExperimentRun",
}));

export type UpdateExtensionError =
  | BadRequestException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an AppConfig extension. For more information about extensions, see
 * Extending
 * workflows in the *AppConfig User Guide*.
 */
export const updateExtension: API.OperationMethod<
  UpdateExtensionRequest,
  Extension,
  UpdateExtensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131) as any as S.Schema<UpdateExtensionRequest>,
  output: __S(30) as any as S.Schema<Extension>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExtension",
}));

export type UpdateExtensionAssociationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an association. For more information about extensions and associations, see
 * Extending
 * workflows in the *AppConfig User Guide*.
 */
export const updateExtensionAssociation: API.OperationMethod<
  UpdateExtensionAssociationRequest,
  ExtensionAssociation,
  UpdateExtensionAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132) as any as S.Schema<UpdateExtensionAssociationRequest>,
  output: __S(33) as any as S.Schema<ExtensionAssociation>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExtensionAssociation",
}));

export type ValidateConfigurationError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Uses the validators in a configuration profile to validate a configuration.
 */
export const validateConfiguration: API.OperationMethod<
  ValidateConfigurationRequest,
  ValidateConfigurationResponse,
  ValidateConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133) as any as S.Schema<ValidateConfigurationRequest>,
  output: __S(37) as any as S.Schema<ValidateConfigurationResponse>,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          Tags: S.optional(__S(0)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/applications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "Application" });
    case 3:
      return S.suspend(() => S.Struct({ Type: S.String, Content: SensitiveString })).annotate({
        identifier: "Validator",
      });
    case 4:
      return S.Array(__S(3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          Name: S.String,
          Description: S.optional(S.String),
          LocationUri: S.String,
          RetrievalRoleArn: S.optional(S.String),
          Validators: S.optional(__S(4)),
          Tags: S.optional(__S(0)),
          Type: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{ApplicationId}/configurationprofiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfigurationProfileRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LocationUri: S.optional(S.String),
          RetrievalRoleArn: S.optional(S.String),
          Validators: S.optional(__S(4)),
          Type: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConfigurationProfile" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          DeploymentDurationInMinutes: S.Number,
          FinalBakeTimeInMinutes: S.optional(S.Number),
          GrowthFactor: S.Number,
          GrowthType: S.optional(S.String),
          ReplicateTo: S.optional(S.String),
          Tags: S.optional(__S(0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deploymentstrategies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDeploymentStrategyRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DeploymentDurationInMinutes: S.optional(S.Number),
          GrowthType: S.optional(S.String),
          GrowthFactor: S.optional(S.Number),
          FinalBakeTimeInMinutes: S.optional(S.Number),
          ReplicateTo: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeploymentStrategy" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AlarmArn: S.String, AlarmRoleArn: S.optional(S.String) }),
      ).annotate({ identifier: "Monitor" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          Name: S.String,
          Description: S.optional(S.String),
          Monitors: S.optional(__S(10)),
          Tags: S.optional(__S(0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications/{ApplicationId}/environments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateEnvironmentRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          State: S.optional(S.String),
          Monitors: S.optional(__S(10)),
        }),
      ).annotate({ identifier: "Environment" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.Array(S.Number);
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ StringValue: S.String }),
        /*@__PURE__*/ S.Struct({ NumberValue: S.Number }),
        /*@__PURE__*/ S.Struct({ BooleanValue: S.Boolean }),
        /*@__PURE__*/ S.Struct({ StringArray: __S(13) }),
        /*@__PURE__*/ S.Struct({ NumberArray: __S(14) }),
      ]);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(15).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ Enabled: S.Boolean, AttributeValues: S.optional(__S(16)) }),
      ).annotate({ identifier: "FlagValue" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Weight: S.Number, Description: S.optional(S.String), FlagValue: __S(17) }),
      ).annotate({ identifier: "TreatmentInput" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          Name: S.String,
          ConfigurationProfileIdentifier: S.String,
          EnvironmentIdentifier: S.String,
          FlagKey: S.String,
          Treatments: __S(19),
          Control: __S(18),
          AudienceRule: S.String,
          Hypothesis: S.optional(S.String),
          AudienceDescription: S.optional(S.String),
          LaunchCriteria: S.optional(S.String),
          Tags: S.optional(__S(0)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateExperimentDefinitionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Weight: S.Number,
          Description: S.optional(S.String),
          FlagValue: __S(17),
        }),
      ).annotate({ identifier: "Treatment" });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Hypothesis: S.optional(S.String),
          Status: S.optional(S.String),
          ConfigurationProfileId: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          FlagKey: S.optional(S.String),
          AudienceRule: S.optional(S.String),
          AudienceDescription: S.optional(S.String),
          LaunchCriteria: S.optional(S.String),
          Treatments: S.optional(__S(22)),
          Control: S.optional(__S(21)),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          KmsKeyIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExperimentDefinition" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Uri: S.optional(S.String),
          RoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Action" });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(25).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Required: S.optional(S.Boolean),
          Dynamic: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Parameter" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(27).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          Actions: __S(26),
          Parameters: S.optional(__S(28)),
          Tags: S.optional(__S(0)),
          LatestVersionNumber: S.optional(S.Number).pipe(T.HttpHeader("Latest-Version-Number")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/extensions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateExtensionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          VersionNumber: S.optional(S.Number),
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
          Actions: S.optional(__S(26)),
          Parameters: S.optional(__S(28)),
        }),
      ).annotate({ identifier: "Extension" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ExtensionIdentifier: S.String,
          ExtensionVersionNumber: S.optional(S.Number),
          ResourceIdentifier: S.String,
          Parameters: S.optional(__S(31)),
          Tags: S.optional(__S(0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/extensionassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateExtensionAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          ExtensionArn: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          Arn: S.optional(S.String),
          Parameters: S.optional(__S(31)),
          ExtensionVersionNumber: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExtensionAssociation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ConfigurationProfileId: S.String.pipe(T.HttpLabel("ConfigurationProfileId")),
          Description: S.optional(S.String).pipe(T.HttpHeader("Description")),
          Content: T.StreamingInput.pipe(T.HttpPayload()),
          ContentType: S.String.pipe(T.HttpHeader("Content-Type")),
          LatestVersionNumber: S.optional(S.Number).pipe(T.HttpHeader("Latest-Version-Number")),
          VersionLabel: S.optional(S.String).pipe(T.HttpHeader("VersionLabel")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateHostedConfigurationVersionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String).pipe(T.HttpHeader("Application-Id")),
          ConfigurationProfileId: S.optional(S.String).pipe(
            T.HttpHeader("Configuration-Profile-Id"),
          ),
          VersionNumber: S.optional(S.Number).pipe(T.HttpHeader("Version-Number")),
          Description: S.optional(S.String).pipe(T.HttpHeader("Description")),
          Content: S.optional(T.StreamingOutput).pipe(T.HttpPayload()),
          ContentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
          VersionLabel: S.optional(S.String).pipe(T.HttpHeader("VersionLabel")),
          KmsKeyArn: S.optional(S.String).pipe(T.HttpHeader("KmsKeyArn")),
        }),
      ).annotate({
        identifier: "HostedConfigurationVersion",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/applications/{ApplicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteApplicationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ConfigurationProfileId: S.String.pipe(T.HttpLabel("ConfigurationProfileId")),
          DeletionProtectionCheck: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-deletion-protection-check"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfigurationProfileRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteConfigurationProfileResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DeploymentStrategyId: S.String.pipe(T.HttpLabel("DeploymentStrategyId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/deployementstrategies/{DeploymentStrategyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDeploymentStrategyRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.String.pipe(T.HttpLabel("EnvironmentId")),
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          DeletionProtectionCheck: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-deletion-protection-check"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{ApplicationId}/environments/{EnvironmentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEnvironmentRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
          DeleteType: S.optional(S.String).pipe(T.HttpQuery("delete_type")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteExperimentDefinitionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ExtensionIdentifier: S.String.pipe(T.HttpLabel("ExtensionIdentifier")),
          VersionNumber: S.optional(S.Number).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/extensions/{ExtensionIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteExtensionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExtensionAssociationId: S.String.pipe(T.HttpLabel("ExtensionAssociationId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/extensionassociations/{ExtensionAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteExtensionAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ConfigurationProfileId: S.String.pipe(T.HttpLabel("ConfigurationProfileId")),
          VersionNumber: S.Number.pipe(T.HttpLabel("VersionNumber")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteHostedConfigurationVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/settings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAccountSettingsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          ProtectionPeriodInMinutes: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DeletionProtectionSettings",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "VendedMetricsSettings",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeletionProtection: S.optional(__S(47)),
          VendedMetrics: S.optional(__S(48)),
        }),
      ).annotate({ identifier: "AccountSettings" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{ApplicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApplicationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Application: S.String.pipe(T.HttpLabel("Application")),
          Environment: S.String.pipe(T.HttpLabel("Environment")),
          Configuration: S.String.pipe(T.HttpLabel("Configuration")),
          ClientId: S.String.pipe(T.HttpQuery("client_id")),
          ClientConfigurationVersion: S.optional(S.String).pipe(
            T.HttpQuery("client_configuration_version"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{Application}/environments/{Environment}/configurations/{Configuration}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConfigurationRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Content: S.optional(T.StreamingOutput).pipe(T.HttpPayload()),
          ConfigurationVersion: S.optional(S.String).pipe(T.HttpHeader("Configuration-Version")),
          ContentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
        }),
      ).annotate({ identifier: "Configuration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ConfigurationProfileId: S.String.pipe(T.HttpLabel("ConfigurationProfileId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationProfileRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EnvironmentId: S.String.pipe(T.HttpLabel("EnvironmentId")),
          DeploymentNumber: S.Number.pipe(T.HttpLabel("DeploymentNumber")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDeploymentRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ExtensionIdentifier: S.optional(S.String),
          ActionName: S.optional(S.String),
          Uri: S.optional(S.String),
          RoleArn: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          InvocationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionInvocation" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          EventType: S.optional(S.String),
          TriggeredBy: S.optional(S.String),
          Description: S.optional(S.String),
          ActionInvocations: S.optional(__S(56)),
          OccurredAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "DeploymentEvent" });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ExtensionId: S.optional(S.String),
          ExtensionAssociationId: S.optional(S.String),
          VersionNumber: S.optional(S.Number),
          Parameters: S.optional(__S(31)),
        }),
      ).annotate({ identifier: "AppliedExtension" });
    case 4:
      return S.Array(__S(59));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          DeploymentStrategyId: S.optional(S.String),
          ConfigurationProfileId: S.optional(S.String),
          DeploymentNumber: S.optional(S.Number),
          ConfigurationName: S.optional(S.String),
          ConfigurationLocationUri: S.optional(S.String),
          ConfigurationVersion: S.optional(S.String),
          Description: S.optional(S.String),
          DeploymentDurationInMinutes: S.optional(S.Number),
          GrowthType: S.optional(S.String),
          GrowthFactor: S.optional(S.Number),
          FinalBakeTimeInMinutes: S.optional(S.Number),
          State: S.optional(S.String),
          EventLog: S.optional(__S(58)),
          PercentageComplete: S.optional(S.Number),
          StartedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CompletedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          AppliedExtensions: S.optional(__S(60)),
          KmsKeyArn: S.optional(S.String),
          KmsKeyIdentifier: S.optional(S.String),
          VersionLabel: S.optional(S.String),
        }),
      ).annotate({ identifier: "Deployment" });
    case 6:
      return S.suspend(() =>
        S.Struct({ DeploymentStrategyId: S.String.pipe(T.HttpLabel("DeploymentStrategyId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/deploymentstrategies/{DeploymentStrategyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDeploymentStrategyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EnvironmentId: S.String.pipe(T.HttpLabel("EnvironmentId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationId}/environments/{EnvironmentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEnvironmentRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetExperimentDefinitionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
          Run: S.Number.pipe(T.HttpLabel("Run")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}/experimentruns/{Run}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetExperimentRunRequest" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ Inline: __S(31) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ExecutiveSummary: S.optional(S.String),
          ReasonsToLaunch: S.optional(S.String),
          ReasonsNotToLaunch: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExperimentRunResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Hypothesis: S.optional(S.String),
          ConfigurationProfileId: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          FlagKey: S.optional(S.String),
          AudienceRule: S.optional(S.String),
          AudienceDescription: S.optional(S.String),
          LaunchCriteria: S.optional(S.String),
          Treatments: S.optional(__S(22)),
          Control: S.optional(__S(21)),
        }),
      ).annotate({
        identifier: "ExperimentDefinitionSnapshot",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          ExperimentDefinitionId: S.optional(S.String),
          Run: S.optional(S.Number),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          ExposurePercentage: S.optional(S.Number),
          TreatmentOverrides: S.optional(__S(66)),
          Result: S.optional(__S(67)),
          StartedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExperimentDefinitionSnapshot: S.optional(__S(68)),
        }),
      ).annotate({ identifier: "ExperimentRun" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ExtensionIdentifier: S.String.pipe(T.HttpLabel("ExtensionIdentifier")),
          VersionNumber: S.optional(S.Number).pipe(T.HttpQuery("version_number")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/extensions/{ExtensionIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetExtensionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ExtensionAssociationId: S.String.pipe(T.HttpLabel("ExtensionAssociationId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/extensionassociations/{ExtensionAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetExtensionAssociationRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ConfigurationProfileId: S.String.pipe(T.HttpLabel("ConfigurationProfileId")),
          VersionNumber: S.Number.pipe(T.HttpLabel("VersionNumber")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetHostedConfigurationVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/applications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 2:
      return S.Array(__S(2));
    case 3:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(74)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "Applications" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          Type: S.optional(S.String).pipe(T.HttpQuery("type")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{ApplicationId}/configurationprofiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfigurationProfilesRequest",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          LocationUri: S.optional(S.String),
          ValidatorTypes: S.optional(__S(77)),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfigurationProfileSummary",
      });
    case 7:
      return S.Array(__S(78));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(__S(79)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConfigurationProfiles" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EnvironmentId: S.String.pipe(T.HttpLabel("EnvironmentId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDeploymentsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeploymentNumber: S.optional(S.Number),
          ConfigurationProfileId: S.optional(S.String),
          ConfigurationName: S.optional(S.String),
          ConfigurationVersion: S.optional(S.String),
          DeploymentDurationInMinutes: S.optional(S.Number),
          GrowthType: S.optional(S.String),
          GrowthFactor: S.optional(S.Number),
          FinalBakeTimeInMinutes: S.optional(S.Number),
          State: S.optional(S.String),
          PercentageComplete: S.optional(S.Number),
          StartedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CompletedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          VersionLabel: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeploymentSummary" });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(83)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "Deployments" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/deploymentstrategies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDeploymentStrategiesRequest",
      });
    case 6:
      return S.Array(__S(8));
    case 7:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(86)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DeploymentStrategies" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{ApplicationId}/environments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEnvironmentsRequest" });
    case 1:
      return S.Array(__S(12));
    case 2:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(89)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "Environments" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.optional(S.String).pipe(T.HttpQuery("application_identifier")),
          ConfigurationProfileIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("configuration_profile_identifier"),
          ),
          EnvironmentIdentifier: S.optional(S.String).pipe(T.HttpQuery("environment_identifier")),
          Status: S.optional(S.String).pipe(T.HttpQuery("status")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/experimentdefinitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExperimentDefinitionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Hypothesis: S.optional(S.String),
          Status: S.optional(S.String),
          ConfigurationProfileId: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          FlagKey: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ExperimentDefinitionSummary",
      });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(93)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ExperimentDefinitions" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
          Run: S.Number.pipe(T.HttpLabel("Run")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}/experimentruns/{Run}/events",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExperimentRunEventsRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          AssociatedDeployment: S.optional(S.String),
          EventType: S.optional(S.String),
          OccurredAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TriggeredBy: S.optional(S.String),
          ExposurePercentage: S.optional(S.Number),
          TreatmentOverrides: S.optional(__S(66)),
        }),
      ).annotate({ identifier: "ExperimentRunEvent" });
    case 1:
      return S.Array(__S(96));
    case 2:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(97)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ExperimentRunEvents" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          Status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}/experimentruns",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExperimentRunsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExperimentDefinitionId: S.optional(S.String),
          Run: S.optional(S.Number),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          StartedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ExperimentRunSummary" });
    case 5:
      return S.Array(__S(100));
    case 6:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(101)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ExperimentRuns" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.optional(S.String).pipe(T.HttpQuery("resource_identifier")),
          ExtensionIdentifier: S.optional(S.String).pipe(T.HttpQuery("extension_identifier")),
          ExtensionVersionNumber: S.optional(S.Number).pipe(
            T.HttpQuery("extension_version_number"),
          ),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/extensionassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExtensionAssociationsRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          ExtensionArn: S.optional(S.String),
          ResourceArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ExtensionAssociationSummary",
      });
    case 1:
      return S.Array(__S(104));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(__S(105)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExtensionAssociations" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          Name: S.optional(S.String).pipe(T.HttpQuery("name")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/extensions" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListExtensionsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          VersionNumber: S.optional(S.Number),
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExtensionSummary" });
    case 5:
      return S.Array(__S(108));
    case 6:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(__S(109)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "Extensions" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ConfigurationProfileId: S.String.pipe(T.HttpLabel("ConfigurationProfileId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max_results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next_token")),
          VersionLabel: S.optional(S.String).pipe(T.HttpQuery("version_label")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListHostedConfigurationVersionsRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          ConfigurationProfileId: S.optional(S.String),
          VersionNumber: S.optional(S.Number),
          Description: S.optional(S.String),
          ContentType: S.optional(S.String),
          VersionLabel: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "HostedConfigurationVersionSummary",
      });
    case 1:
      return S.Array(__S(112));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(__S(113)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "HostedConfigurationVersions",
      });
    case 3:
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
    case 4:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(0)) })).annotate({
        identifier: "ResourceTags",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EnvironmentId: S.String.pipe(T.HttpLabel("EnvironmentId")),
          DeploymentStrategyId: S.String,
          ConfigurationProfileId: S.String,
          ConfigurationVersion: S.String,
          Description: S.optional(S.String),
          Tags: S.optional(__S(0)),
          KmsKeyIdentifier: S.optional(S.String),
          DynamicExtensionParameters: S.optional(__S(31)),
          LatestDeploymentNumber: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartDeploymentRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DynamicExtensionParameters: S.optional(__S(31)),
          Tags: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "DeploymentParameters" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
          Description: S.optional(S.String),
          ExposurePercentage: S.optional(S.Number),
          TreatmentOverrides: S.optional(__S(66)),
          Tags: S.optional(__S(0)),
          DeploymentParameters: S.optional(__S(118)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}/experimentruns",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartExperimentRunRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EnvironmentId: S.String.pipe(T.HttpLabel("EnvironmentId")),
          DeploymentNumber: S.Number.pipe(T.HttpLabel("DeploymentNumber")),
          AllowRevert: S.optional(S.Boolean).pipe(T.HttpHeader("Allow-Revert")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopDeploymentRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
          Run: S.Number.pipe(T.HttpLabel("Run")),
          Result: S.optional(__S(67)),
          DeploymentParameters: S.optional(__S(118)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}/experimentruns/{Run}/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopExperimentRunRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: __S(0) }).pipe(
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
          TagKeys: __S(13).pipe(T.HttpQuery("tagKeys")),
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
          DeletionProtection: S.optional(__S(47)),
          VendedMetrics: S.optional(__S(48)),
        }).pipe(T.all(T.Http({ method: "PATCH", uri: "/settings" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAccountSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/applications/{ApplicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ConfigurationProfileId: S.String.pipe(T.HttpLabel("ConfigurationProfileId")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          RetrievalRoleArn: S.optional(S.String),
          Validators: S.optional(__S(4)),
          KmsKeyIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfigurationProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeploymentStrategyId: S.String.pipe(T.HttpLabel("DeploymentStrategyId")),
          Description: S.optional(S.String),
          DeploymentDurationInMinutes: S.optional(S.Number),
          FinalBakeTimeInMinutes: S.optional(S.Number),
          GrowthFactor: S.optional(S.Number),
          GrowthType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/deploymentstrategies/{DeploymentStrategyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDeploymentStrategyRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EnvironmentId: S.String.pipe(T.HttpLabel("EnvironmentId")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Monitors: S.optional(__S(10)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/applications/{ApplicationId}/environments/{EnvironmentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateEnvironmentRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
          Treatments: S.optional(__S(19)),
          Control: S.optional(__S(18)),
          Hypothesis: S.optional(S.String),
          AudienceRule: S.optional(S.String),
          AudienceDescription: S.optional(S.String),
          LaunchCriteria: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateExperimentDefinitionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationIdentifier: S.String.pipe(T.HttpLabel("ApplicationIdentifier")),
          ExperimentDefinitionIdentifier: S.String.pipe(
            T.HttpLabel("ExperimentDefinitionIdentifier"),
          ),
          Run: S.Number.pipe(T.HttpLabel("Run")),
          Description: S.optional(S.String),
          ExposurePercentage: S.optional(S.Number),
          TreatmentOverrides: S.optional(__S(66)),
          DeploymentParameters: S.optional(__S(118)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/applications/{ApplicationIdentifier}/experimentdefinitions/{ExperimentDefinitionIdentifier}/experimentruns/{Run}/update",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateExperimentRunRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ExtensionIdentifier: S.String.pipe(T.HttpLabel("ExtensionIdentifier")),
          Description: S.optional(S.String),
          Actions: S.optional(__S(26)),
          Parameters: S.optional(__S(28)),
          VersionNumber: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/extensions/{ExtensionIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateExtensionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExtensionAssociationId: S.String.pipe(T.HttpLabel("ExtensionAssociationId")),
          Parameters: S.optional(__S(31)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/extensionassociations/{ExtensionAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateExtensionAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ConfigurationProfileId: S.String.pipe(T.HttpLabel("ConfigurationProfileId")),
          ConfigurationVersion: S.String.pipe(T.HttpQuery("configuration_version")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ValidateConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Constraint: S.optional(S.String),
          Location: S.optional(S.String),
          Reason: S.optional(S.String),
          Type: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InvalidConfigurationDetail",
      });
    case 7:
      return S.Array(__S(134));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ InvalidConfiguration: __S(135) })]);
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
  }
}
