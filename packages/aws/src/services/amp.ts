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
  sdkId: "amp",
  serviceShapeName: "AmazonPrometheusService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "aps" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-08-01");
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
              `https://aps-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://aps-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://aps.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://aps.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      serviceCode: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: S.String,
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type WorkspaceId = string;
export type AlertManagerDefinitionData = Uint8Array;
export type IdempotencyToken = string;
export interface CreateAlertManagerDefinitionRequest {
  workspaceId: string;
  data: Uint8Array;
  clientToken?: string;
}
const CreateAlertManagerDefinitionRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<CreateAlertManagerDefinitionRequest>;
export type AlertManagerDefinitionStatusCode = string;
export interface AlertManagerDefinitionStatus {
  statusCode: string;
  statusReason?: string;
}
const AlertManagerDefinitionStatus = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AlertManagerDefinitionStatus>;
export interface CreateAlertManagerDefinitionResponse {
  status: AlertManagerDefinitionStatus;
}
const CreateAlertManagerDefinitionResponse = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CreateAlertManagerDefinitionResponse>;
export type AnomalyDetectorAlias = string;
export type AnomalyDetectorEvaluationInterval = number;
export type AnomalyDetectorMissingDataAction =
  | { markAsAnomaly: boolean; skip?: never }
  | { markAsAnomaly?: never; skip: boolean };
const AnomalyDetectorMissingDataAction = /*@__PURE__*/ __L.at(__c0, 3);
export type RandomCutForestQuery = string;
export type IgnoreNearExpected =
  | { amount: number; ratio?: never }
  | { amount?: never; ratio: number };
const IgnoreNearExpected = /*@__PURE__*/ __L.at(__c0, 4);
export interface RandomCutForestConfiguration {
  query: string;
  shingleSize?: number;
  sampleSize?: number;
  ignoreNearExpectedFromAbove?: IgnoreNearExpected;
  ignoreNearExpectedFromBelow?: IgnoreNearExpected;
}
const RandomCutForestConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<RandomCutForestConfiguration>;
export type AnomalyDetectorConfiguration = { randomCutForest: RandomCutForestConfiguration };
const AnomalyDetectorConfiguration = /*@__PURE__*/ __L.at(__c0, 6);
export type PrometheusMetricLabelKey = string;
export type PrometheusMetricLabelValue = string;
export type PrometheusMetricLabelMap = { [key: string]: string | undefined };
const PrometheusMetricLabelMap = /*@__PURE__*/ __L.at(__c0, 7);
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c1, 0);
export interface CreateAnomalyDetectorRequest {
  workspaceId: string;
  alias: string;
  evaluationIntervalInSeconds?: number;
  missingDataAction?: AnomalyDetectorMissingDataAction;
  configuration: AnomalyDetectorConfiguration;
  labels?: { [key: string]: string | undefined };
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateAnomalyDetectorRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateAnomalyDetectorRequest>;
export type AnomalyDetectorId = string;
export type AnomalyDetectorArn = string;
export type AnomalyDetectorStatusCode =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATION_FAILED"
  | "UPDATE_FAILED"
  | "DELETION_FAILED"
  | (string & {});
const AnomalyDetectorStatusCode = S.String;

export interface AnomalyDetectorStatus {
  statusCode: AnomalyDetectorStatusCode;
  statusReason?: string;
}
const AnomalyDetectorStatus = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AnomalyDetectorStatus>;
export interface CreateAnomalyDetectorResponse {
  anomalyDetectorId: string;
  arn: string;
  status: AnomalyDetectorStatus;
  tags?: { [key: string]: string | undefined };
}
const CreateAnomalyDetectorResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateAnomalyDetectorResponse>;
export type LogGroupArn = string;
export interface CreateLoggingConfigurationRequest {
  workspaceId: string;
  logGroupArn: string;
  clientToken?: string;
}
const CreateLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateLoggingConfigurationRequest>;
export type LoggingConfigurationStatusCode = string;
export interface LoggingConfigurationStatus {
  statusCode: string;
  statusReason?: string;
}
const LoggingConfigurationStatus =
  AlertManagerDefinitionStatus as any as S.Schema<LoggingConfigurationStatus>;
export interface CreateLoggingConfigurationResponse {
  status: LoggingConfigurationStatus;
}
const CreateLoggingConfigurationResponse =
  CreateAlertManagerDefinitionResponse as any as S.Schema<CreateLoggingConfigurationResponse>;
export interface CloudWatchLogDestination {
  logGroupArn: string;
}
const CloudWatchLogDestination = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CloudWatchLogDestination>;
export interface LoggingFilter {
  qspThreshold: number;
}
const LoggingFilter = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<LoggingFilter>;
export interface LoggingDestination {
  cloudWatchLogs: CloudWatchLogDestination;
  filters: LoggingFilter;
}
const LoggingDestination = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<LoggingDestination>;
export type LoggingDestinations = LoggingDestination[];
const LoggingDestinations = /*@__PURE__*/ __L.at(__c2, 0);
export interface CreateQueryLoggingConfigurationRequest {
  workspaceId: string;
  destinations: LoggingDestination[];
  clientToken?: string;
}
const CreateQueryLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateQueryLoggingConfigurationRequest>;
export type QueryLoggingConfigurationStatusCode = string;
export interface QueryLoggingConfigurationStatus {
  statusCode: string;
  statusReason?: string;
}
const QueryLoggingConfigurationStatus =
  AlertManagerDefinitionStatus as any as S.Schema<QueryLoggingConfigurationStatus>;
export interface CreateQueryLoggingConfigurationResponse {
  status: QueryLoggingConfigurationStatus;
}
const CreateQueryLoggingConfigurationResponse =
  CreateAlertManagerDefinitionResponse as any as S.Schema<CreateQueryLoggingConfigurationResponse>;
export type RuleGroupsNamespaceName = string;
export type RuleGroupsNamespaceData = Uint8Array;
export interface CreateRuleGroupsNamespaceRequest {
  workspaceId: string;
  name: string;
  data: Uint8Array;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateRuleGroupsNamespaceRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateRuleGroupsNamespaceRequest>;
export type RuleGroupsNamespaceArn = string;
export type RuleGroupsNamespaceStatusCode = string;
export interface RuleGroupsNamespaceStatus {
  statusCode: string;
  statusReason?: string;
}
const RuleGroupsNamespaceStatus =
  AlertManagerDefinitionStatus as any as S.Schema<RuleGroupsNamespaceStatus>;
export interface CreateRuleGroupsNamespaceResponse {
  name: string;
  arn: string;
  status: RuleGroupsNamespaceStatus;
  tags?: { [key: string]: string | undefined };
}
const CreateRuleGroupsNamespaceResponse = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CreateRuleGroupsNamespaceResponse>;
export type ScraperAlias = string;
export type ScrapeConfiguration = { configurationBlob: Uint8Array };
const ScrapeConfiguration = /*@__PURE__*/ __L.at(__c2, 4);
export type ClusterArn = string;
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
const SecurityGroupIds = /*@__PURE__*/ __L.at(__c2, 5);
export type SubnetId = string;
export type SubnetIds = string[];
const SubnetIds = SecurityGroupIds as any as S.Schema<SubnetIds>;
export interface EksConfiguration {
  clusterArn: string;
  securityGroupIds?: string[];
  subnetIds: string[];
}
const EksConfiguration = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<EksConfiguration>;
export interface VpcConfiguration {
  securityGroupIds: string[];
  subnetIds: string[];
}
const VpcConfiguration = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<VpcConfiguration>;
export type Source =
  | { eksConfiguration: EksConfiguration; vpcConfiguration?: never }
  | { eksConfiguration?: never; vpcConfiguration: VpcConfiguration };
const Source = /*@__PURE__*/ __L.at(__c3, 0);
export type WorkspaceArn = string;
export interface AmpConfiguration {
  workspaceArn: string;
}
const AmpConfiguration = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<AmpConfiguration>;
export type CloudWatchDatasetArn = string;
export interface CloudWatchConfiguration {
  datasetArn: string;
}
const CloudWatchConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CloudWatchConfiguration>;
export type Destination =
  | { ampConfiguration: AmpConfiguration; cloudWatchConfiguration?: never }
  | { ampConfiguration?: never; cloudWatchConfiguration: CloudWatchConfiguration };
const Destination = /*@__PURE__*/ __L.at(__c3, 3);
export type IamRoleArn = string;
export interface RoleConfiguration {
  sourceRoleArn?: string;
  targetRoleArn?: string;
}
const RoleConfiguration = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<RoleConfiguration>;
export type OpenSearchDomainArn = string;
export interface OpenSearchExporterConfiguration {
  domainArn: string;
}
const OpenSearchExporterConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<OpenSearchExporterConfiguration>;
export type ExporterConfiguration = { openSearchConfiguration: OpenSearchExporterConfiguration };
const ExporterConfiguration = /*@__PURE__*/ __L.at(__c3, 6);
export type ExporterList = ExporterConfiguration[];
const ExporterList = /*@__PURE__*/ __L.at(__c3, 7);
export interface CreateScraperRequest {
  alias?: string;
  scrapeConfiguration: ScrapeConfiguration;
  source: Source;
  destination: Destination;
  roleConfiguration?: RoleConfiguration;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  exporters?: ExporterConfiguration[];
}
const CreateScraperRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<CreateScraperRequest>;
export type ScraperId = string;
export type ScraperArn = string;
export type ScraperStatusCode = string;
export interface ScraperStatus {
  statusCode: string;
}
const ScraperStatus = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<ScraperStatus>;
export interface CreateScraperResponse {
  scraperId: string;
  arn: string;
  status: ScraperStatus;
  tags?: { [key: string]: string | undefined };
}
const CreateScraperResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateScraperResponse>;
export type WorkspaceAlias = string;
export type KmsKeyArn = string;
export interface CreateWorkspaceRequest {
  alias?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
const CreateWorkspaceRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateWorkspaceRequest>;
export type WorkspaceStatusCode = string;
export interface WorkspaceStatus {
  statusCode: string;
}
const WorkspaceStatus = ScraperStatus as any as S.Schema<WorkspaceStatus>;
export interface CreateWorkspaceResponse {
  workspaceId: string;
  arn: string;
  status: WorkspaceStatus;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
const CreateWorkspaceResponse = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateWorkspaceResponse>;
export interface DeleteAlertManagerDefinitionRequest {
  workspaceId: string;
  clientToken?: string;
}
const DeleteAlertManagerDefinitionRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteAlertManagerDefinitionRequest>;
export interface DeleteAlertManagerDefinitionResponse {}
const DeleteAlertManagerDefinitionResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteAlertManagerDefinitionResponse>;
export interface DeleteAnomalyDetectorRequest {
  workspaceId: string;
  anomalyDetectorId: string;
  clientToken?: string;
}
const DeleteAnomalyDetectorRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteAnomalyDetectorRequest>;
export interface DeleteAnomalyDetectorResponse {}
const DeleteAnomalyDetectorResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DeleteAnomalyDetectorResponse>;
export interface DeleteLoggingConfigurationRequest {
  workspaceId: string;
  clientToken?: string;
}
const DeleteLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeleteLoggingConfigurationRequest>;
export interface DeleteLoggingConfigurationResponse {}
const DeleteLoggingConfigurationResponse =
  DeleteAlertManagerDefinitionResponse as any as S.Schema<DeleteLoggingConfigurationResponse>;
export interface DeleteQueryLoggingConfigurationRequest {
  workspaceId: string;
  clientToken?: string;
}
const DeleteQueryLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteQueryLoggingConfigurationRequest>;
export interface DeleteQueryLoggingConfigurationResponse {}
const DeleteQueryLoggingConfigurationResponse =
  DeleteAlertManagerDefinitionResponse as any as S.Schema<DeleteQueryLoggingConfigurationResponse>;
export interface DeleteResourcePolicyRequest {
  workspaceId: string;
  clientToken?: string;
  revisionId?: string;
}
const DeleteResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeleteResourcePolicyRequest>;
export interface DeleteResourcePolicyResponse {}
const DeleteResourcePolicyResponse =
  DeleteAnomalyDetectorResponse as any as S.Schema<DeleteResourcePolicyResponse>;
export interface DeleteRuleGroupsNamespaceRequest {
  workspaceId: string;
  name: string;
  clientToken?: string;
}
const DeleteRuleGroupsNamespaceRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeleteRuleGroupsNamespaceRequest>;
export interface DeleteRuleGroupsNamespaceResponse {}
const DeleteRuleGroupsNamespaceResponse =
  DeleteAlertManagerDefinitionResponse as any as S.Schema<DeleteRuleGroupsNamespaceResponse>;
export interface DeleteScraperRequest {
  scraperId: string;
  clientToken?: string;
}
const DeleteScraperRequest = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<DeleteScraperRequest>;
export interface DeleteScraperResponse {
  scraperId: string;
  status: ScraperStatus;
}
const DeleteScraperResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DeleteScraperResponse>;
export interface DeleteScraperLoggingConfigurationRequest {
  scraperId: string;
  clientToken?: string;
}
const DeleteScraperLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DeleteScraperLoggingConfigurationRequest>;
export interface DeleteScraperLoggingConfigurationResponse {}
const DeleteScraperLoggingConfigurationResponse =
  DeleteAlertManagerDefinitionResponse as any as S.Schema<DeleteScraperLoggingConfigurationResponse>;
export interface DeleteWorkspaceRequest {
  workspaceId: string;
  clientToken?: string;
}
const DeleteWorkspaceRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteWorkspaceRequest>;
export interface DeleteWorkspaceResponse {}
const DeleteWorkspaceResponse =
  DeleteAnomalyDetectorResponse as any as S.Schema<DeleteWorkspaceResponse>;
export interface DescribeAlertManagerDefinitionRequest {
  workspaceId: string;
}
const DescribeAlertManagerDefinitionRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DescribeAlertManagerDefinitionRequest>;
export interface AlertManagerDefinitionDescription {
  status: AlertManagerDefinitionStatus;
  data?: Uint8Array;
  createdAt: Date;
  modifiedAt: Date;
}
const AlertManagerDefinitionDescription = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<AlertManagerDefinitionDescription>;
export interface DescribeAlertManagerDefinitionResponse {
  alertManagerDefinition: AlertManagerDefinitionDescription;
}
const DescribeAlertManagerDefinitionResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DescribeAlertManagerDefinitionResponse>;
export interface DescribeAnomalyDetectorRequest {
  workspaceId: string;
  anomalyDetectorId: string;
}
const DescribeAnomalyDetectorRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DescribeAnomalyDetectorRequest>;
export interface AnomalyDetectorDescription {
  arn: string;
  anomalyDetectorId: string;
  alias: string;
  evaluationIntervalInSeconds?: number;
  missingDataAction?: AnomalyDetectorMissingDataAction;
  configuration?: AnomalyDetectorConfiguration;
  labels?: { [key: string]: string | undefined };
  status: AnomalyDetectorStatus;
  createdAt: Date;
  modifiedAt: Date;
  tags?: { [key: string]: string | undefined };
}
const AnomalyDetectorDescription = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<AnomalyDetectorDescription>;
export interface DescribeAnomalyDetectorResponse {
  anomalyDetector: AnomalyDetectorDescription;
}
const DescribeAnomalyDetectorResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DescribeAnomalyDetectorResponse>;
export interface DescribeLoggingConfigurationRequest {
  workspaceId: string;
}
const DescribeLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DescribeLoggingConfigurationRequest>;
export interface LoggingConfigurationMetadata {
  status: LoggingConfigurationStatus;
  workspace: string;
  logGroupArn: string;
  createdAt: Date;
  modifiedAt: Date;
}
const LoggingConfigurationMetadata = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<LoggingConfigurationMetadata>;
export interface DescribeLoggingConfigurationResponse {
  loggingConfiguration: LoggingConfigurationMetadata;
}
const DescribeLoggingConfigurationResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DescribeLoggingConfigurationResponse>;
export interface DescribeQueryLoggingConfigurationRequest {
  workspaceId: string;
}
const DescribeQueryLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DescribeQueryLoggingConfigurationRequest>;
export interface QueryLoggingConfigurationMetadata {
  status: QueryLoggingConfigurationStatus;
  workspace: string;
  destinations: LoggingDestination[];
  createdAt: Date;
  modifiedAt: Date;
}
const QueryLoggingConfigurationMetadata = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<QueryLoggingConfigurationMetadata>;
export interface DescribeQueryLoggingConfigurationResponse {
  queryLoggingConfiguration: QueryLoggingConfigurationMetadata;
}
const DescribeQueryLoggingConfigurationResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DescribeQueryLoggingConfigurationResponse>;
export interface DescribeResourcePolicyRequest {
  workspaceId: string;
}
const DescribeResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DescribeResourcePolicyRequest>;
export type WorkspacePolicyStatusCode = string;
export interface DescribeResourcePolicyResponse {
  policyDocument: string;
  policyStatus: string;
  revisionId: string;
}
const DescribeResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DescribeResourcePolicyResponse>;
export interface DescribeRuleGroupsNamespaceRequest {
  workspaceId: string;
  name: string;
}
const DescribeRuleGroupsNamespaceRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeRuleGroupsNamespaceRequest>;
export interface RuleGroupsNamespaceDescription {
  arn: string;
  name: string;
  status: RuleGroupsNamespaceStatus;
  data?: Uint8Array;
  createdAt: Date;
  modifiedAt: Date;
  tags?: { [key: string]: string | undefined };
}
const RuleGroupsNamespaceDescription = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<RuleGroupsNamespaceDescription>;
export interface DescribeRuleGroupsNamespaceResponse {
  ruleGroupsNamespace: RuleGroupsNamespaceDescription;
}
const DescribeRuleGroupsNamespaceResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DescribeRuleGroupsNamespaceResponse>;
export interface DescribeScraperRequest {
  scraperId: string;
}
const DescribeScraperRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DescribeScraperRequest>;
export type StatusReason = string;
export interface ScraperDescription {
  alias?: string;
  scraperId: string;
  arn: string;
  roleArn: string;
  status: ScraperStatus;
  createdAt: Date;
  lastModifiedAt: Date;
  tags?: { [key: string]: string | undefined };
  statusReason?: string;
  scrapeConfiguration: ScrapeConfiguration;
  source: Source;
  destination: Destination;
  roleConfiguration?: RoleConfiguration;
  exporters?: ExporterConfiguration[];
}
const ScraperDescription = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<ScraperDescription>;
export interface DescribeScraperResponse {
  scraper: ScraperDescription;
}
const DescribeScraperResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DescribeScraperResponse>;
export interface DescribeScraperLoggingConfigurationRequest {
  scraperId: string;
}
const DescribeScraperLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeScraperLoggingConfigurationRequest>;
export type ScraperLoggingConfigurationStatusCode = string;
export interface ScraperLoggingConfigurationStatus {
  statusCode: string;
  statusReason?: string;
}
const ScraperLoggingConfigurationStatus =
  AlertManagerDefinitionStatus as any as S.Schema<ScraperLoggingConfigurationStatus>;
export type ScraperLoggingDestination = { cloudWatchLogs: CloudWatchLogDestination };
const ScraperLoggingDestination = /*@__PURE__*/ __L.at(__c8, 6);
export type ScraperComponentType = string;
export type StringMap = { [key: string]: string | undefined };
const StringMap = TagMap as any as S.Schema<StringMap>;
export interface ComponentConfig {
  options?: { [key: string]: string | undefined };
}
const ComponentConfig = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<ComponentConfig>;
export interface ScraperComponent {
  type: string;
  config?: ComponentConfig;
}
const ScraperComponent = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<ScraperComponent>;
export type ScraperComponents = ScraperComponent[];
const ScraperComponents = /*@__PURE__*/ __L.at(__c9, 1);
export interface DescribeScraperLoggingConfigurationResponse {
  status: ScraperLoggingConfigurationStatus;
  scraperId: string;
  loggingDestination: ScraperLoggingDestination;
  scraperComponents: ScraperComponent[];
  modifiedAt: Date;
}
const DescribeScraperLoggingConfigurationResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DescribeScraperLoggingConfigurationResponse>;
export interface DescribeWorkspaceRequest {
  workspaceId: string;
}
const DescribeWorkspaceRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DescribeWorkspaceRequest>;
export type Uri = string;
export interface WorkspaceDescription {
  workspaceId: string;
  alias?: string;
  arn: string;
  status: WorkspaceStatus;
  prometheusEndpoint?: string;
  createdAt: Date;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
const WorkspaceDescription = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<WorkspaceDescription>;
export interface DescribeWorkspaceResponse {
  workspace: WorkspaceDescription;
}
const DescribeWorkspaceResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DescribeWorkspaceResponse>;
export interface DescribeWorkspaceConfigurationRequest {
  workspaceId: string;
}
const DescribeWorkspaceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<DescribeWorkspaceConfigurationRequest>;
export type WorkspaceConfigurationStatusCode = string;
export interface WorkspaceConfigurationStatus {
  statusCode: string;
  statusReason?: string;
}
const WorkspaceConfigurationStatus =
  AlertManagerDefinitionStatus as any as S.Schema<WorkspaceConfigurationStatus>;
export interface LimitsPerLabelSetEntry {
  maxSeries?: number;
}
const LimitsPerLabelSetEntry = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<LimitsPerLabelSetEntry>;
export type LabelName = string;
export type LabelValue = string;
export type LabelSet = { [key: string]: string | undefined };
const LabelSet = TagMap as any as S.Schema<LabelSet>;
export interface LimitsPerLabelSet {
  limits: LimitsPerLabelSetEntry;
  labelSet: { [key: string]: string | undefined };
}
const LimitsPerLabelSet = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<LimitsPerLabelSet>;
export type LimitsPerLabelSetList = LimitsPerLabelSet[];
const LimitsPerLabelSetList = /*@__PURE__*/ __L.at(__c10, 1);
export interface WorkspaceConfigurationDescription {
  status: WorkspaceConfigurationStatus;
  limitsPerLabelSet?: LimitsPerLabelSet[];
  retentionPeriodInDays?: number;
  outOfOrderTimeWindowInSeconds?: number;
  ruleQueryOffsetInSeconds?: number;
}
const WorkspaceConfigurationDescription = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<WorkspaceConfigurationDescription>;
export interface DescribeWorkspaceConfigurationResponse {
  workspaceConfiguration: WorkspaceConfigurationDescription;
}
const DescribeWorkspaceConfigurationResponse = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<DescribeWorkspaceConfigurationResponse>;
export interface GetDefaultScraperConfigurationRequest {}
const GetDefaultScraperConfigurationRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<GetDefaultScraperConfigurationRequest>;
export interface GetDefaultScraperConfigurationResponse {
  configuration: Uint8Array;
}
const GetDefaultScraperConfigurationResponse = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetDefaultScraperConfigurationResponse>;
export type PaginationToken = string;
export interface ListAnomalyDetectorsRequest {
  workspaceId: string;
  alias?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAnomalyDetectorsRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<ListAnomalyDetectorsRequest>;
export interface AnomalyDetectorSummary {
  arn: string;
  anomalyDetectorId: string;
  alias: string;
  status: AnomalyDetectorStatus;
  createdAt: Date;
  modifiedAt: Date;
  tags?: { [key: string]: string | undefined };
}
const AnomalyDetectorSummary = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<AnomalyDetectorSummary>;
export type AnomalyDetectorSummaryList = AnomalyDetectorSummary[];
const AnomalyDetectorSummaryList = /*@__PURE__*/ __L.at(__c11, 0);
export interface ListAnomalyDetectorsResponse {
  anomalyDetectors: AnomalyDetectorSummary[];
  nextToken?: string;
}
const ListAnomalyDetectorsResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<ListAnomalyDetectorsResponse>;
export interface ListRuleGroupsNamespacesRequest {
  workspaceId: string;
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListRuleGroupsNamespacesRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ListRuleGroupsNamespacesRequest>;
export interface RuleGroupsNamespaceSummary {
  arn: string;
  name: string;
  status: RuleGroupsNamespaceStatus;
  createdAt: Date;
  modifiedAt: Date;
  tags?: { [key: string]: string | undefined };
}
const RuleGroupsNamespaceSummary = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<RuleGroupsNamespaceSummary>;
export type RuleGroupsNamespaceSummaryList = RuleGroupsNamespaceSummary[];
const RuleGroupsNamespaceSummaryList = /*@__PURE__*/ __L.at(__c11, 4);
export interface ListRuleGroupsNamespacesResponse {
  ruleGroupsNamespaces: RuleGroupsNamespaceSummary[];
  nextToken?: string;
}
const ListRuleGroupsNamespacesResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ListRuleGroupsNamespacesResponse>;
export type FilterKey = string;
export type FilterValue = string;
export type FilterValues = string[];
const FilterValues = SecurityGroupIds as any as S.Schema<FilterValues>;
export type ScraperFilters = { [key: string]: string[] | undefined };
const ScraperFilters = /*@__PURE__*/ __L.at(__c11, 6);
export interface ListScrapersRequest {
  filters?: { [key: string]: string[] | undefined };
  nextToken?: string;
  maxResults?: number;
}
const ListScrapersRequest = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<ListScrapersRequest>;
export interface ScraperSummary {
  alias?: string;
  scraperId: string;
  arn: string;
  roleArn: string;
  status: ScraperStatus;
  createdAt: Date;
  lastModifiedAt: Date;
  tags?: { [key: string]: string | undefined };
  statusReason?: string;
  source: Source;
  destination: Destination;
  roleConfiguration?: RoleConfiguration;
  exporters?: ExporterConfiguration[];
}
const ScraperSummary = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<ScraperSummary>;
export type ScraperSummaryList = ScraperSummary[];
const ScraperSummaryList = /*@__PURE__*/ __L.at(__c12, 1);
export interface ListScrapersResponse {
  scrapers: ScraperSummary[];
  nextToken?: string;
}
const ListScrapersResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ListScrapersResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListWorkspacesRequest {
  nextToken?: string;
  alias?: string;
  maxResults?: number;
}
const ListWorkspacesRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ListWorkspacesRequest>;
export interface WorkspaceSummary {
  workspaceId: string;
  alias?: string;
  arn: string;
  status: WorkspaceStatus;
  createdAt: Date;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
const WorkspaceSummary = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<WorkspaceSummary>;
export type WorkspaceSummaryList = WorkspaceSummary[];
const WorkspaceSummaryList = /*@__PURE__*/ __L.at(__c12, 7);
export interface ListWorkspacesResponse {
  workspaces: WorkspaceSummary[];
  nextToken?: string;
}
const ListWorkspacesResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<ListWorkspacesResponse>;
export interface PutAlertManagerDefinitionRequest {
  workspaceId: string;
  data: Uint8Array;
  clientToken?: string;
}
const PutAlertManagerDefinitionRequest = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<PutAlertManagerDefinitionRequest>;
export interface PutAlertManagerDefinitionResponse {
  status: AlertManagerDefinitionStatus;
}
const PutAlertManagerDefinitionResponse =
  CreateAlertManagerDefinitionResponse as any as S.Schema<PutAlertManagerDefinitionResponse>;
export interface PutAnomalyDetectorRequest {
  workspaceId: string;
  anomalyDetectorId: string;
  evaluationIntervalInSeconds?: number;
  missingDataAction?: AnomalyDetectorMissingDataAction;
  configuration: AnomalyDetectorConfiguration;
  labels?: { [key: string]: string | undefined };
  clientToken?: string;
}
const PutAnomalyDetectorRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<PutAnomalyDetectorRequest>;
export interface PutAnomalyDetectorResponse {
  anomalyDetectorId: string;
  arn: string;
  status: AnomalyDetectorStatus;
  tags?: { [key: string]: string | undefined };
}
const PutAnomalyDetectorResponse =
  CreateAnomalyDetectorResponse as any as S.Schema<PutAnomalyDetectorResponse>;
export interface PutResourcePolicyRequest {
  workspaceId: string;
  policyDocument: string;
  clientToken?: string;
  revisionId?: string;
}
const PutResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<PutResourcePolicyRequest>;
export interface PutResourcePolicyResponse {
  policyStatus: string;
  revisionId: string;
}
const PutResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<PutResourcePolicyResponse>;
export interface PutRuleGroupsNamespaceRequest {
  workspaceId: string;
  name: string;
  data: Uint8Array;
  clientToken?: string;
}
const PutRuleGroupsNamespaceRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<PutRuleGroupsNamespaceRequest>;
export interface PutRuleGroupsNamespaceResponse {
  name: string;
  arn: string;
  status: RuleGroupsNamespaceStatus;
  tags?: { [key: string]: string | undefined };
}
const PutRuleGroupsNamespaceResponse =
  CreateRuleGroupsNamespaceResponse as any as S.Schema<PutRuleGroupsNamespaceResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAnomalyDetectorResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = SecurityGroupIds as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteAnomalyDetectorResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateLoggingConfigurationRequest {
  workspaceId: string;
  logGroupArn: string;
  clientToken?: string;
}
const UpdateLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<UpdateLoggingConfigurationRequest>;
export interface UpdateLoggingConfigurationResponse {
  status: LoggingConfigurationStatus;
}
const UpdateLoggingConfigurationResponse =
  CreateAlertManagerDefinitionResponse as any as S.Schema<UpdateLoggingConfigurationResponse>;
export interface UpdateQueryLoggingConfigurationRequest {
  workspaceId: string;
  destinations: LoggingDestination[];
  clientToken?: string;
}
const UpdateQueryLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<UpdateQueryLoggingConfigurationRequest>;
export interface UpdateQueryLoggingConfigurationResponse {
  status: QueryLoggingConfigurationStatus;
}
const UpdateQueryLoggingConfigurationResponse =
  CreateAlertManagerDefinitionResponse as any as S.Schema<UpdateQueryLoggingConfigurationResponse>;
export interface UpdateScraperRequest {
  scraperId: string;
  alias?: string;
  scrapeConfiguration?: ScrapeConfiguration;
  destination?: Destination;
  roleConfiguration?: RoleConfiguration;
  clientToken?: string;
  exporters?: ExporterConfiguration[];
}
const UpdateScraperRequest = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<UpdateScraperRequest>;
export interface UpdateScraperResponse {
  scraperId: string;
  arn: string;
  status: ScraperStatus;
  tags?: { [key: string]: string | undefined };
}
const UpdateScraperResponse = CreateScraperResponse as any as S.Schema<UpdateScraperResponse>;
export interface UpdateScraperLoggingConfigurationRequest {
  scraperId: string;
  loggingDestination: ScraperLoggingDestination;
  scraperComponents?: ScraperComponent[];
}
const UpdateScraperLoggingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<UpdateScraperLoggingConfigurationRequest>;
export interface UpdateScraperLoggingConfigurationResponse {
  status: ScraperLoggingConfigurationStatus;
}
const UpdateScraperLoggingConfigurationResponse =
  CreateAlertManagerDefinitionResponse as any as S.Schema<UpdateScraperLoggingConfigurationResponse>;
export interface UpdateWorkspaceAliasRequest {
  workspaceId: string;
  alias?: string;
  clientToken?: string;
}
const UpdateWorkspaceAliasRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<UpdateWorkspaceAliasRequest>;
export interface UpdateWorkspaceAliasResponse {}
const UpdateWorkspaceAliasResponse =
  DeleteAnomalyDetectorResponse as any as S.Schema<UpdateWorkspaceAliasResponse>;
export interface UpdateWorkspaceConfigurationRequest {
  workspaceId: string;
  clientToken?: string;
  limitsPerLabelSet?: LimitsPerLabelSet[];
  retentionPeriodInDays?: number;
  outOfOrderTimeWindowInSeconds?: number;
  ruleQueryOffsetInSeconds?: number;
}
const UpdateWorkspaceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<UpdateWorkspaceConfigurationRequest>;
export interface UpdateWorkspaceConfigurationResponse {
  status: WorkspaceConfigurationStatus;
}
const UpdateWorkspaceConfigurationResponse =
  CreateAlertManagerDefinitionResponse as any as S.Schema<UpdateWorkspaceConfigurationResponse>;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c14, 7);
export type CreateAlertManagerDefinitionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `CreateAlertManagerDefinition` operation creates the alert manager definition in a workspace. If a workspace already has an alert manager definition, don't use this operation to update it. Instead, use `PutAlertManagerDefinition`.
 */
export const createAlertManagerDefinition: API.OperationMethod<
  CreateAlertManagerDefinitionRequest,
  CreateAlertManagerDefinitionResponse,
  CreateAlertManagerDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAlertManagerDefinitionRequest,
  output: CreateAlertManagerDefinitionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAlertManagerDefinition",
}));

export type CreateAnomalyDetectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an anomaly detector within a workspace using the Random Cut Forest algorithm for time-series analysis. The anomaly detector analyzes Amazon Managed Service for Prometheus metrics to identify unusual patterns and behaviors.
 */
export const createAnomalyDetector: API.OperationMethod<
  CreateAnomalyDetectorRequest,
  CreateAnomalyDetectorResponse,
  CreateAnomalyDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAnomalyDetectorRequest,
  output: CreateAnomalyDetectorResponse,
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
  operationName: "CreateAnomalyDetector",
}));

export type CreateLoggingConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * The `CreateLoggingConfiguration` operation creates rules and alerting logging configuration for the workspace. Use this operation to set the CloudWatch log group to which the logs will be published to.
 *
 * These logging configurations are only for rules and alerting logs.
 */
export const createLoggingConfiguration: API.OperationMethod<
  CreateLoggingConfigurationRequest,
  CreateLoggingConfigurationResponse,
  CreateLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLoggingConfigurationRequest,
  output: CreateLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLoggingConfiguration",
}));

export type CreateQueryLoggingConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Creates a query logging configuration for the specified workspace. This operation enables logging of queries that exceed the specified QSP threshold.
 */
export const createQueryLoggingConfiguration: API.OperationMethod<
  CreateQueryLoggingConfigurationRequest,
  CreateQueryLoggingConfigurationResponse,
  CreateQueryLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQueryLoggingConfigurationRequest,
  output: CreateQueryLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQueryLoggingConfiguration",
}));

export type CreateRuleGroupsNamespaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `CreateRuleGroupsNamespace` operation creates a rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces.
 *
 * The combined length of a rule group namespace and a rule group name cannot exceed 721 UTF-8 bytes.
 *
 * Use this operation only to create new rule groups namespaces. To update an existing rule groups namespace, use `PutRuleGroupsNamespace`.
 */
export const createRuleGroupsNamespace: API.OperationMethod<
  CreateRuleGroupsNamespaceRequest,
  CreateRuleGroupsNamespaceResponse,
  CreateRuleGroupsNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRuleGroupsNamespaceRequest,
  output: CreateRuleGroupsNamespaceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRuleGroupsNamespace",
}));

export type CreateScraperError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a scraper to collect metrics from Prometheus-compatible sources. The scraper sends the collected metrics to Amazon Managed Service for Prometheus workspaces or CloudWatch datasets. You can configure scrapers to collect metrics from Amazon EKS clusters, Amazon MSK clusters, or from VPC-based sources that support DNS-based service discovery. Scrapers are flexible. You can configure a scraper to control which metrics to collect, the frequency of collection, which transformations to apply to the metrics, and more.
 *
 * An IAM role will be created for you that Amazon Managed Service for Prometheus uses to access the metrics in your source. You must configure this role with a policy that allows it to scrape metrics from your source. For Amazon EKS sources, see Configuring your Amazon EKS cluster in the *Amazon Managed Service for Prometheus User Guide*.
 *
 * The `scrapeConfiguration` parameter contains the base-64 encoded YAML configuration for the scraper.
 *
 * When creating a scraper, the service creates a `Network Interface` in each **Availability Zone** that are passed into `CreateScraper` through subnets. These network interfaces are used to connect to your source within the VPC for scraping metrics.
 *
 * For more information about collectors, including what metrics are collected, and how to configure the scraper, see Using an Amazon Web Services managed collector in the *Amazon Managed Service for Prometheus User Guide*.
 */
export const createScraper: API.OperationMethod<
  CreateScraperRequest,
  CreateScraperResponse,
  CreateScraperError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScraperRequest,
  output: CreateScraperResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateScraper",
}));

export type CreateWorkspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Prometheus workspace. A workspace is a logical space dedicated to the storage and querying of Prometheus metrics. You can have one or more workspaces in each Region in your account.
 */
export const createWorkspace: API.OperationMethod<
  CreateWorkspaceRequest,
  CreateWorkspaceResponse,
  CreateWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkspaceRequest,
  output: CreateWorkspaceResponse,
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
  operationName: "CreateWorkspace",
}));

export type DeleteAlertManagerDefinitionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the alert manager definition from a workspace.
 */
export const deleteAlertManagerDefinition: API.OperationMethod<
  DeleteAlertManagerDefinitionRequest,
  DeleteAlertManagerDefinitionResponse,
  DeleteAlertManagerDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAlertManagerDefinitionRequest,
  output: DeleteAlertManagerDefinitionResponse,
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
  operationName: "DeleteAlertManagerDefinition",
}));

export type DeleteAnomalyDetectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes an anomaly detector from a workspace. This operation is idempotent.
 */
export const deleteAnomalyDetector: API.OperationMethod<
  DeleteAnomalyDetectorRequest,
  DeleteAnomalyDetectorResponse,
  DeleteAnomalyDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAnomalyDetectorRequest,
  output: DeleteAnomalyDetectorResponse,
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
  operationName: "DeleteAnomalyDetector",
}));

export type DeleteLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the rules and alerting logging configuration for a workspace.
 *
 * These logging configurations are only for rules and alerting logs.
 */
export const deleteLoggingConfiguration: API.OperationMethod<
  DeleteLoggingConfigurationRequest,
  DeleteLoggingConfigurationResponse,
  DeleteLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLoggingConfigurationRequest,
  output: DeleteLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLoggingConfiguration",
}));

export type DeleteQueryLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the query logging configuration for the specified workspace.
 */
export const deleteQueryLoggingConfiguration: API.OperationMethod<
  DeleteQueryLoggingConfigurationRequest,
  DeleteQueryLoggingConfigurationResponse,
  DeleteQueryLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQueryLoggingConfigurationRequest,
  output: DeleteQueryLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQueryLoggingConfiguration",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the resource-based policy attached to an Amazon Managed Service for Prometheus workspace.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourcePolicyRequest,
  output: DeleteResourcePolicyResponse,
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
  operationName: "DeleteResourcePolicy",
}));

export type DeleteRuleGroupsNamespaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes one rule groups namespace and its associated rule groups definition.
 */
export const deleteRuleGroupsNamespace: API.OperationMethod<
  DeleteRuleGroupsNamespaceRequest,
  DeleteRuleGroupsNamespaceResponse,
  DeleteRuleGroupsNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRuleGroupsNamespaceRequest,
  output: DeleteRuleGroupsNamespaceResponse,
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
  operationName: "DeleteRuleGroupsNamespace",
}));

export type DeleteScraperError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `DeleteScraper` operation deletes one scraper, and stops any metrics collection that the scraper performs.
 */
export const deleteScraper: API.OperationMethod<
  DeleteScraperRequest,
  DeleteScraperResponse,
  DeleteScraperError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScraperRequest,
  output: DeleteScraperResponse,
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
  operationName: "DeleteScraper",
}));

export type DeleteScraperLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the logging configuration for a Amazon Managed Service for Prometheus scraper.
 */
export const deleteScraperLoggingConfiguration: API.OperationMethod<
  DeleteScraperLoggingConfigurationRequest,
  DeleteScraperLoggingConfigurationResponse,
  DeleteScraperLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScraperLoggingConfigurationRequest,
  output: DeleteScraperLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScraperLoggingConfiguration",
}));

export type DeleteWorkspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing workspace.
 *
 * When you delete a workspace, the data that has been ingested into it is not immediately deleted. It will be permanently deleted within one month.
 */
export const deleteWorkspace: API.OperationMethod<
  DeleteWorkspaceRequest,
  DeleteWorkspaceResponse,
  DeleteWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkspaceRequest,
  output: DeleteWorkspaceResponse,
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
  operationName: "DeleteWorkspace",
}));

export type DescribeAlertManagerDefinitionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the full information about the alert manager definition for a workspace.
 */
export const describeAlertManagerDefinition: API.OperationMethod<
  DescribeAlertManagerDefinitionRequest,
  DescribeAlertManagerDefinitionResponse,
  DescribeAlertManagerDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAlertManagerDefinitionRequest,
  output: DescribeAlertManagerDefinitionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAlertManagerDefinition",
}));

export type DescribeAnomalyDetectorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific anomaly detector, including its status and configuration.
 */
export const describeAnomalyDetector: API.OperationMethod<
  DescribeAnomalyDetectorRequest,
  DescribeAnomalyDetectorResponse,
  DescribeAnomalyDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAnomalyDetectorRequest,
  output: DescribeAnomalyDetectorResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAnomalyDetector",
}));

export type DescribeLoggingConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns complete information about the current rules and alerting logging configuration of the workspace.
 *
 * These logging configurations are only for rules and alerting logs.
 */
export const describeLoggingConfiguration: API.OperationMethod<
  DescribeLoggingConfigurationRequest,
  DescribeLoggingConfigurationResponse,
  DescribeLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLoggingConfigurationRequest,
  output: DescribeLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoggingConfiguration",
}));

export type DescribeQueryLoggingConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of the query logging configuration for the specified workspace.
 */
export const describeQueryLoggingConfiguration: API.OperationMethod<
  DescribeQueryLoggingConfigurationRequest,
  DescribeQueryLoggingConfigurationResponse,
  DescribeQueryLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeQueryLoggingConfigurationRequest,
  output: DescribeQueryLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeQueryLoggingConfiguration",
}));

export type DescribeResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the resource-based policy attached to an Amazon Managed Service for Prometheus workspace.
 */
export const describeResourcePolicy: API.OperationMethod<
  DescribeResourcePolicyRequest,
  DescribeResourcePolicyResponse,
  DescribeResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeResourcePolicyRequest,
  output: DescribeResourcePolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourcePolicy",
}));

export type DescribeRuleGroupsNamespaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns complete information about one rule groups namespace. To retrieve a list of rule groups namespaces, use `ListRuleGroupsNamespaces`.
 */
export const describeRuleGroupsNamespace: API.OperationMethod<
  DescribeRuleGroupsNamespaceRequest,
  DescribeRuleGroupsNamespaceResponse,
  DescribeRuleGroupsNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeRuleGroupsNamespaceRequest,
  output: DescribeRuleGroupsNamespaceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRuleGroupsNamespace",
}));

export type DescribeScraperError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `DescribeScraper` operation displays information about an existing scraper.
 */
export const describeScraper: API.OperationMethod<
  DescribeScraperRequest,
  DescribeScraperResponse,
  DescribeScraperError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeScraperRequest,
  output: DescribeScraperResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeScraper",
}));

export type DescribeScraperLoggingConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the logging configuration for a Amazon Managed Service for Prometheus scraper.
 */
export const describeScraperLoggingConfiguration: API.OperationMethod<
  DescribeScraperLoggingConfigurationRequest,
  DescribeScraperLoggingConfigurationResponse,
  DescribeScraperLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeScraperLoggingConfigurationRequest,
  output: DescribeScraperLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeScraperLoggingConfiguration",
}));

export type DescribeWorkspaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an existing workspace.
 */
export const describeWorkspace: API.OperationMethod<
  DescribeWorkspaceRequest,
  DescribeWorkspaceResponse,
  DescribeWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWorkspaceRequest,
  output: DescribeWorkspaceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspace",
}));

export type DescribeWorkspaceConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to return information about the configuration of a workspace. The configuration details returned include workspace configuration status, label set limits, and retention period.
 */
export const describeWorkspaceConfiguration: API.OperationMethod<
  DescribeWorkspaceConfigurationRequest,
  DescribeWorkspaceConfigurationResponse,
  DescribeWorkspaceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWorkspaceConfigurationRequest,
  output: DescribeWorkspaceConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaceConfiguration",
}));

export type GetDefaultScraperConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | CommonErrors;
/**
 * The `GetDefaultScraperConfiguration` operation returns the default scraper configuration used when Amazon EKS creates a scraper for you.
 */
export const getDefaultScraperConfiguration: API.OperationMethod<
  GetDefaultScraperConfigurationRequest,
  GetDefaultScraperConfigurationResponse,
  GetDefaultScraperConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDefaultScraperConfigurationRequest,
  output: GetDefaultScraperConfigurationResponse,
  errors: [AccessDeniedException, InternalServerException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDefaultScraperConfiguration",
}));

export type ListAnomalyDetectorsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of anomaly detectors for a workspace with optional filtering by alias.
 */
export const listAnomalyDetectors: API.PaginatedOperationMethod<
  ListAnomalyDetectorsRequest,
  ListAnomalyDetectorsResponse,
  ListAnomalyDetectorsError,
  Credentials | HttpClient.HttpClient,
  AnomalyDetectorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAnomalyDetectorsRequest,
  output: ListAnomalyDetectorsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnomalyDetectors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "anomalyDetectors",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRuleGroupsNamespacesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of rule groups namespaces in a workspace.
 */
export const listRuleGroupsNamespaces: API.PaginatedOperationMethod<
  ListRuleGroupsNamespacesRequest,
  ListRuleGroupsNamespacesResponse,
  ListRuleGroupsNamespacesError,
  Credentials | HttpClient.HttpClient,
  RuleGroupsNamespaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRuleGroupsNamespacesRequest,
  output: ListRuleGroupsNamespacesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleGroupsNamespaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "ruleGroupsNamespaces",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListScrapersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `ListScrapers` operation lists all of the scrapers in your account. This includes scrapers being created or deleted. You can optionally filter the returned list.
 */
export const listScrapers: API.PaginatedOperationMethod<
  ListScrapersRequest,
  ListScrapersResponse,
  ListScrapersError,
  Credentials | HttpClient.HttpClient,
  ScraperSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScrapersRequest,
  output: ListScrapersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScrapers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scrapers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `ListTagsForResource` operation returns the tags that are associated with an Amazon Managed Service for Prometheus resource. Currently, the only resources that can be tagged are scrapers, workspaces, and rule groups namespaces.
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
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWorkspacesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all of the Amazon Managed Service for Prometheus workspaces in your account. This includes workspaces being created or deleted.
 */
export const listWorkspaces: API.PaginatedOperationMethod<
  ListWorkspacesRequest,
  ListWorkspacesResponse,
  ListWorkspacesError,
  Credentials | HttpClient.HttpClient,
  WorkspaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkspacesRequest,
  output: ListWorkspacesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkspaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workspaces",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutAlertManagerDefinitionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing alert manager definition in a workspace. If the workspace does not already have an alert manager definition, don't use this operation to create it. Instead, use `CreateAlertManagerDefinition`.
 */
export const putAlertManagerDefinition: API.OperationMethod<
  PutAlertManagerDefinitionRequest,
  PutAlertManagerDefinitionResponse,
  PutAlertManagerDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAlertManagerDefinitionRequest,
  output: PutAlertManagerDefinitionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAlertManagerDefinition",
}));

export type PutAnomalyDetectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * When you call `PutAnomalyDetector`, the operation creates a new anomaly detector if one doesn't exist, or updates an existing one. Each call to this operation triggers a complete retraining of the detector, which includes querying the minimum required samples and backfilling the detector with historical data. This process occurs regardless of whether you're making a minor change like updating the evaluation interval or making more substantial modifications. The operation serves as the single method for creating, updating, and retraining anomaly detectors.
 */
export const putAnomalyDetector: API.OperationMethod<
  PutAnomalyDetectorRequest,
  PutAnomalyDetectorResponse,
  PutAnomalyDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAnomalyDetectorRequest,
  output: PutAnomalyDetectorResponse,
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
  operationName: "PutAnomalyDetector",
}));

export type PutResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a resource-based policy for an Amazon Managed Service for Prometheus workspace. Use resource-based policies to grant permissions to other AWS accounts or services to access your workspace.
 *
 * Only Prometheus-compatible APIs can be used for workspace sharing. You can add non-Prometheus-compatible APIs to the policy, but they will be ignored. For more information, see Prometheus-compatible APIs in the *Amazon Managed Service for Prometheus User Guide*.
 *
 * If your workspace uses customer-managed KMS keys for encryption, you must grant the principals in your resource-based policy access to those KMS keys. You can do this by creating KMS grants. For more information, see CreateGrant in the *AWS Key Management Service API Reference* and Encryption at rest in the *Amazon Managed Service for Prometheus User Guide*.
 *
 * For more information about working with IAM, see Using Amazon Managed Service for Prometheus with IAM in the *Amazon Managed Service for Prometheus User Guide*.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutResourcePolicyRequest,
  output: PutResourcePolicyResponse,
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
  operationName: "PutResourcePolicy",
}));

export type PutRuleGroupsNamespaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces.
 *
 * The combined length of a rule group namespace and a rule group name cannot exceed 721 UTF-8 bytes.
 *
 * Use this operation only to update existing rule groups namespaces. To create a new rule groups namespace, use `CreateRuleGroupsNamespace`.
 *
 * You can't use this operation to add tags to an existing rule groups namespace. Instead, use `TagResource`.
 */
export const putRuleGroupsNamespace: API.OperationMethod<
  PutRuleGroupsNamespaceRequest,
  PutRuleGroupsNamespaceResponse,
  PutRuleGroupsNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutRuleGroupsNamespaceRequest,
  output: PutRuleGroupsNamespaceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRuleGroupsNamespace",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `TagResource` operation associates tags with an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are rule groups namespaces, scrapers, and workspaces.
 *
 * If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. To remove a tag, use `UntagResource`.
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
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified tags from an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are rule groups namespaces, scrapers, and workspaces.
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
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the log group ARN or the workspace ID of the current rules and alerting logging configuration.
 *
 * These logging configurations are only for rules and alerting logs.
 */
export const updateLoggingConfiguration: API.OperationMethod<
  UpdateLoggingConfigurationRequest,
  UpdateLoggingConfigurationResponse,
  UpdateLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLoggingConfigurationRequest,
  output: UpdateLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLoggingConfiguration",
}));

export type UpdateQueryLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the query logging configuration for the specified workspace.
 */
export const updateQueryLoggingConfiguration: API.OperationMethod<
  UpdateQueryLoggingConfigurationRequest,
  UpdateQueryLoggingConfigurationResponse,
  UpdateQueryLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateQueryLoggingConfigurationRequest,
  output: UpdateQueryLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQueryLoggingConfiguration",
}));

export type UpdateScraperError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing scraper.
 *
 * You can't use this function to update the source from which the scraper is collecting metrics. To change the source, delete the scraper and create a new one.
 */
export const updateScraper: API.OperationMethod<
  UpdateScraperRequest,
  UpdateScraperResponse,
  UpdateScraperError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateScraperRequest,
  output: UpdateScraperResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScraper",
}));

export type UpdateScraperLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the logging configuration for a Amazon Managed Service for Prometheus scraper.
 */
export const updateScraperLoggingConfiguration: API.OperationMethod<
  UpdateScraperLoggingConfigurationRequest,
  UpdateScraperLoggingConfigurationResponse,
  UpdateScraperLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateScraperLoggingConfigurationRequest,
  output: UpdateScraperLoggingConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScraperLoggingConfiguration",
}));

export type UpdateWorkspaceAliasError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the alias of an existing workspace.
 */
export const updateWorkspaceAlias: API.OperationMethod<
  UpdateWorkspaceAliasRequest,
  UpdateWorkspaceAliasResponse,
  UpdateWorkspaceAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkspaceAliasRequest,
  output: UpdateWorkspaceAliasResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkspaceAlias",
}));

export type UpdateWorkspaceConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to create or update the label sets, label set limits, and retention period of a workspace.
 *
 * You must specify at least one of `limitsPerLabelSet` or `retentionPeriodInDays` for the request to be valid.
 */
export const updateWorkspaceConfiguration: API.OperationMethod<
  UpdateWorkspaceConfigurationRequest,
  UpdateWorkspaceConfigurationResponse,
  UpdateWorkspaceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkspaceConfigurationRequest,
  output: UpdateWorkspaceConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkspaceConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          data: T.Blob,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/alertmanager/definition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAlertManagerDefinitionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ statusCode: S.String, statusReason: S.optional(S.String) }),
      ).annotate({
        identifier: "AlertManagerDefinitionStatus",
      });
    case 2:
      return S.suspend(() => S.Struct({ status: AlertManagerDefinitionStatus })).annotate({
        identifier: "CreateAlertManagerDefinitionResponse",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ markAsAnomaly: S.Boolean }),
        /*@__PURE__*/ S.Struct({ skip: S.Boolean }),
      ]);
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ amount: S.Number }),
        /*@__PURE__*/ S.Struct({ ratio: S.Number }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          query: S.String,
          shingleSize: S.optional(S.Number),
          sampleSize: S.optional(S.Number),
          ignoreNearExpectedFromAbove: S.optional(IgnoreNearExpected),
          ignoreNearExpectedFromBelow: S.optional(IgnoreNearExpected),
        }),
      ).annotate({
        identifier: "RandomCutForestConfiguration",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ randomCutForest: RandomCutForestConfiguration })]);
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          alias: S.String,
          evaluationIntervalInSeconds: S.optional(S.Number),
          missingDataAction: S.optional(AnomalyDetectorMissingDataAction),
          configuration: AnomalyDetectorConfiguration,
          labels: S.optional(PrometheusMetricLabelMap),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/anomalydetectors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAnomalyDetectorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ statusCode: AnomalyDetectorStatusCode, statusReason: S.optional(S.String) }),
      ).annotate({ identifier: "AnomalyDetectorStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          anomalyDetectorId: S.String,
          arn: S.String,
          status: AnomalyDetectorStatus,
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "CreateAnomalyDetectorResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          logGroupArn: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/logging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLoggingConfigurationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ logGroupArn: S.String })).annotate({
        identifier: "CloudWatchLogDestination",
      });
    case 6:
      return S.suspend(() => S.Struct({ qspThreshold: S.Number })).annotate({
        identifier: "LoggingFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ cloudWatchLogs: CloudWatchLogDestination, filters: LoggingFilter }),
      ).annotate({ identifier: "LoggingDestination" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(LoggingDestination);
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          destinations: LoggingDestinations,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/logging/query" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateQueryLoggingConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          name: S.String,
          data: T.Blob,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/rulegroupsnamespaces" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRuleGroupsNamespaceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          arn: S.String,
          status: RuleGroupsNamespaceStatus,
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "CreateRuleGroupsNamespaceResponse",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ configurationBlob: T.Blob })]);
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          clusterArn: S.String,
          securityGroupIds: S.optional(SecurityGroupIds),
          subnetIds: SubnetIds,
        }),
      ).annotate({ identifier: "EksConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({ securityGroupIds: SecurityGroupIds, subnetIds: SubnetIds }),
      ).annotate({ identifier: "VpcConfiguration" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ eksConfiguration: EksConfiguration }),
        /*@__PURE__*/ S.Struct({ vpcConfiguration: VpcConfiguration }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ workspaceArn: S.String })).annotate({
        identifier: "AmpConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ datasetArn: S.String })).annotate({
        identifier: "CloudWatchConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ ampConfiguration: AmpConfiguration }),
        /*@__PURE__*/ S.Struct({ cloudWatchConfiguration: CloudWatchConfiguration }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({ sourceRoleArn: S.optional(S.String), targetRoleArn: S.optional(S.String) }),
      ).annotate({ identifier: "RoleConfiguration" });
    case 5:
      return S.suspend(() => S.Struct({ domainArn: S.String })).annotate({
        identifier: "OpenSearchExporterConfiguration",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ openSearchConfiguration: OpenSearchExporterConfiguration }),
      ]);
    case 7:
      return S.Array(ExporterConfiguration);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          alias: S.optional(S.String),
          scrapeConfiguration: ScrapeConfiguration,
          source: Source,
          destination: Destination,
          roleConfiguration: S.optional(RoleConfiguration),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
          exporters: S.optional(ExporterList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/scrapers" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateScraperRequest" });
    case 1:
      return S.suspend(() => S.Struct({ statusCode: S.String })).annotate({
        identifier: "ScraperStatus",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          scraperId: S.String,
          arn: S.String,
          status: ScraperStatus,
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "CreateScraperResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          alias: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/workspaces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateWorkspaceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          arn: S.String,
          status: WorkspaceStatus,
          tags: S.optional(TagMap),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateWorkspaceResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/alertmanager/definition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAlertManagerDefinitionRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAlertManagerDefinitionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          anomalyDetectorId: S.String.pipe(T.HttpLabel("anomalyDetectorId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/workspaces/{workspaceId}/anomalydetectors/{anomalyDetectorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAnomalyDetectorRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAnomalyDetectorResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/logging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLoggingConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/logging/query" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteQueryLoggingConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          revisionId: S.optional(S.String).pipe(T.HttpQuery("revisionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          name: S.String.pipe(T.HttpLabel("name")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRuleGroupsNamespaceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scraperId: S.String.pipe(T.HttpLabel("scraperId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/scrapers/{scraperId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteScraperRequest" });
    case 6:
      return S.suspend(() => S.Struct({ scraperId: S.String, status: ScraperStatus })).annotate({
        identifier: "DeleteScraperResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          scraperId: S.String.pipe(T.HttpLabel("scraperId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/scrapers/{scraperId}/logging-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteScraperLoggingConfigurationRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkspaceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/alertmanager/definition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAlertManagerDefinitionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: AlertManagerDefinitionStatus,
          data: S.optional(T.Blob),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          modifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "AlertManagerDefinitionDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ alertManagerDefinition: AlertManagerDefinitionDescription }),
      ).annotate({
        identifier: "DescribeAlertManagerDefinitionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          anomalyDetectorId: S.String.pipe(T.HttpLabel("anomalyDetectorId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workspaces/{workspaceId}/anomalydetectors/{anomalyDetectorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAnomalyDetectorRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          anomalyDetectorId: S.String,
          alias: S.String,
          evaluationIntervalInSeconds: S.optional(S.Number),
          missingDataAction: S.optional(AnomalyDetectorMissingDataAction),
          configuration: S.optional(AnomalyDetectorConfiguration),
          labels: S.optional(PrometheusMetricLabelMap),
          status: AnomalyDetectorStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          modifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "AnomalyDetectorDescription",
      });
    case 6:
      return S.suspend(() => S.Struct({ anomalyDetector: AnomalyDetectorDescription })).annotate({
        identifier: "DescribeAnomalyDetectorResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/logging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeLoggingConfigurationRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: LoggingConfigurationStatus,
          workspace: S.String,
          logGroupArn: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          modifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "LoggingConfigurationMetadata",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ loggingConfiguration: LoggingConfigurationMetadata }),
      ).annotate({
        identifier: "DescribeLoggingConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/logging/query" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeQueryLoggingConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          status: QueryLoggingConfigurationStatus,
          workspace: S.String,
          destinations: LoggingDestinations,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          modifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "QueryLoggingConfigurationMetadata",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ queryLoggingConfiguration: QueryLoggingConfigurationMetadata }),
      ).annotate({
        identifier: "DescribeQueryLoggingConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeResourcePolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ policyDocument: S.String, policyStatus: S.String, revisionId: S.String }),
      ).annotate({
        identifier: "DescribeResourcePolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeRuleGroupsNamespaceRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          status: RuleGroupsNamespaceStatus,
          data: S.optional(T.Blob),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          modifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "RuleGroupsNamespaceDescription",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ruleGroupsNamespace: RuleGroupsNamespaceDescription }),
      ).annotate({
        identifier: "DescribeRuleGroupsNamespaceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ scraperId: S.String.pipe(T.HttpLabel("scraperId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/scrapers/{scraperId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeScraperRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          alias: S.optional(S.String),
          scraperId: S.String,
          arn: S.String,
          roleArn: S.String,
          status: ScraperStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
          statusReason: S.optional(S.String),
          scrapeConfiguration: ScrapeConfiguration,
          source: Source,
          destination: Destination,
          roleConfiguration: S.optional(RoleConfiguration),
          exporters: S.optional(ExporterList),
        }),
      ).annotate({ identifier: "ScraperDescription" });
    case 4:
      return S.suspend(() => S.Struct({ scraper: ScraperDescription })).annotate({
        identifier: "DescribeScraperResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ scraperId: S.String.pipe(T.HttpLabel("scraperId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/scrapers/{scraperId}/logging-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeScraperLoggingConfigurationRequest",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ cloudWatchLogs: CloudWatchLogDestination })]);
    case 7:
      return S.suspend(() => S.Struct({ options: S.optional(StringMap) })).annotate({
        identifier: "ComponentConfig",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ type: S.String, config: S.optional(ComponentConfig) }),
      ).annotate({ identifier: "ScraperComponent" });
    case 1:
      return S.Array(ScraperComponent);
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: ScraperLoggingConfigurationStatus,
          scraperId: S.String,
          loggingDestination: ScraperLoggingDestination,
          scraperComponents: ScraperComponents,
          modifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DescribeScraperLoggingConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeWorkspaceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          alias: S.optional(S.String),
          arn: S.String,
          status: WorkspaceStatus,
          prometheusEndpoint: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkspaceDescription" });
    case 5:
      return S.suspend(() => S.Struct({ workspace: WorkspaceDescription })).annotate({
        identifier: "DescribeWorkspaceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeWorkspaceConfigurationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ maxSeries: S.optional(S.Number) })).annotate({
        identifier: "LimitsPerLabelSetEntry",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ limits: LimitsPerLabelSetEntry, labelSet: LabelSet }),
      ).annotate({ identifier: "LimitsPerLabelSet" });
    case 1:
      return S.Array(LimitsPerLabelSet);
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: WorkspaceConfigurationStatus,
          limitsPerLabelSet: S.optional(LimitsPerLabelSetList),
          retentionPeriodInDays: S.optional(S.Number),
          outOfOrderTimeWindowInSeconds: S.optional(S.Number),
          ruleQueryOffsetInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "WorkspaceConfigurationDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ workspaceConfiguration: WorkspaceConfigurationDescription }),
      ).annotate({
        identifier: "DescribeWorkspaceConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/scraperconfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDefaultScraperConfigurationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ configuration: T.Blob })).annotate({
        identifier: "GetDefaultScraperConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          alias: S.optional(S.String).pipe(T.HttpQuery("alias")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/anomalydetectors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnomalyDetectorsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          anomalyDetectorId: S.String,
          alias: S.String,
          status: AnomalyDetectorStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          modifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "AnomalyDetectorSummary" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AnomalyDetectorSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ anomalyDetectors: AnomalyDetectorSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAnomalyDetectorsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/rulegroupsnamespaces" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRuleGroupsNamespacesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          status: RuleGroupsNamespaceStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          modifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "RuleGroupsNamespaceSummary",
      });
    case 4:
      return S.Array(RuleGroupsNamespaceSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ruleGroupsNamespaces: RuleGroupsNamespaceSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRuleGroupsNamespacesResponse",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ FilterValues.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(ScraperFilters).pipe(T.HttpQueryParams()),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/scrapers" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListScrapersRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          alias: S.optional(S.String),
          scraperId: S.String,
          arn: S.String,
          roleArn: S.String,
          status: ScraperStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastModifiedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
          statusReason: S.optional(S.String),
          source: Source,
          destination: Destination,
          roleConfiguration: S.optional(RoleConfiguration),
          exporters: S.optional(ExporterList),
        }),
      ).annotate({ identifier: "ScraperSummary" });
    case 1:
      return S.Array(ScraperSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ scrapers: ScraperSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListScrapersResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          alias: S.optional(S.String).pipe(T.HttpQuery("alias")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/workspaces" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWorkspacesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String,
          alias: S.optional(S.String),
          arn: S.String,
          status: WorkspaceStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkspaceSummary" });
    case 7:
      return S.Array(WorkspaceSummary);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ workspaces: WorkspaceSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWorkspacesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          data: T.Blob,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}/alertmanager/definition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAlertManagerDefinitionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          anomalyDetectorId: S.String.pipe(T.HttpLabel("anomalyDetectorId")),
          evaluationIntervalInSeconds: S.optional(S.Number),
          missingDataAction: S.optional(AnomalyDetectorMissingDataAction),
          configuration: AnomalyDetectorConfiguration,
          labels: S.optional(PrometheusMetricLabelMap),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workspaces/{workspaceId}/anomalydetectors/{anomalyDetectorId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAnomalyDetectorRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          policyDocument: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          revisionId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}/policy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 4:
      return S.suspend(() => S.Struct({ policyStatus: S.String, revisionId: S.String })).annotate({
        identifier: "PutResourcePolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          name: S.String.pipe(T.HttpLabel("name")),
          data: T.Blob,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutRuleGroupsNamespaceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          logGroupArn: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}/logging" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLoggingConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          destinations: LoggingDestinations,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}/logging/query" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateQueryLoggingConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          scraperId: S.String.pipe(T.HttpLabel("scraperId")),
          alias: S.optional(S.String),
          scrapeConfiguration: S.optional(ScrapeConfiguration),
          destination: S.optional(Destination),
          roleConfiguration: S.optional(RoleConfiguration),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          exporters: S.optional(ExporterList),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/scrapers/{scraperId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateScraperRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          scraperId: S.String.pipe(T.HttpLabel("scraperId")),
          loggingDestination: ScraperLoggingDestination,
          scraperComponents: S.optional(ScraperComponents),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/scrapers/{scraperId}/logging-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateScraperLoggingConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          alias: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/alias" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWorkspaceAliasRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          limitsPerLabelSet: S.optional(LimitsPerLabelSetList),
          retentionPeriodInDays: S.optional(S.Number),
          outOfOrderTimeWindowInSeconds: S.optional(S.Number),
          ruleQueryOffsetInSeconds: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workspaces/{workspaceId}/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWorkspaceConfigurationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(ValidationExceptionField);
  }
}
