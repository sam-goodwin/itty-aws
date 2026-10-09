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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CleanRoomsML",
  serviceShapeName: "AWSStarkControlService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cleanrooms-ml" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-09-06");
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
              `https://cleanrooms-ml-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://cleanrooms-ml-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://cleanrooms-ml.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cleanrooms-ml.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServiceException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceException>()(
    "InternalServiceException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      quotaName: /*@__PURE__*/ S.optional(S.String),
      quotaValue: /*@__PURE__*/ S.optional(S.Number),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type UUID = string;
export type TrainedModelArn = string;
export interface CancelTrainedModelRequest {
  membershipIdentifier: string;
  trainedModelArn: string;
  versionIdentifier?: string;
}
export interface CancelTrainedModelResponse {}
export type TrainedModelInferenceJobArn = string;
export interface CancelTrainedModelInferenceJobRequest {
  membershipIdentifier: string;
  trainedModelInferenceJobArn: string;
}
export interface CancelTrainedModelInferenceJobResponse {}
export type NameString = string;
export type TrainingDatasetArn = string;
export type KmsKeyArn = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type ResourceDescription = string;
export interface CreateAudienceModelRequest {
  trainingDataStartTime?: Date;
  trainingDataEndTime?: Date;
  name: string;
  trainingDatasetArn: string;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
  description?: string;
}
export type AudienceModelArn = string;
export interface CreateAudienceModelResponse {
  audienceModelArn: string;
}
export type S3Path = string;
export interface S3ConfigMap {
  s3Uri: string;
}
export interface AudienceDestination {
  s3Destination: S3ConfigMap;
}
export type IamRoleArn = string;
export interface ConfiguredAudienceModelOutputConfig {
  destination: AudienceDestination;
  roleArn: string;
}
export type SharedAudienceMetrics = "ALL" | "NONE" | (string & {});
export type MetricsList = SharedAudienceMetrics[];
export type MinMatchingSeedSize = number;
export type AudienceSizeType = "ABSOLUTE" | "PERCENTAGE" | (string & {});
export type AudienceSizeValue = number;
export type AudienceSizeBins = number[];
export interface AudienceSizeConfig {
  audienceSizeType: AudienceSizeType;
  audienceSizeBins: number[];
}
export type TagOnCreatePolicy = "FROM_PARENT_RESOURCE" | "NONE" | (string & {});
export interface CreateConfiguredAudienceModelRequest {
  name: string;
  audienceModelArn: string;
  outputConfig: ConfiguredAudienceModelOutputConfig;
  description?: string;
  sharedAudienceMetrics: SharedAudienceMetrics[];
  minMatchingSeedSize?: number;
  audienceSizeConfig?: AudienceSizeConfig;
  tags?: { [key: string]: string | undefined };
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
}
export type ConfiguredAudienceModelArn = string;
export interface CreateConfiguredAudienceModelResponse {
  configuredAudienceModelArn: string;
}
export type AlgorithmImage = string;
export type ContainerEntrypointString = string;
export type ContainerEntrypoint = string[];
export type ContainerArgument = string;
export type ContainerArguments = string[];
export type MetricName = string;
export type MetricRegex = string;
export interface MetricDefinition {
  name: string;
  regex: string;
}
export type MetricDefinitionList = MetricDefinition[];
export interface ContainerConfig {
  imageUri: string;
  entrypoint?: string[];
  arguments?: string[];
  metricDefinitions?: MetricDefinition[];
}
export interface InferenceContainerConfig {
  imageUri: string;
}
export interface CreateConfiguredModelAlgorithmRequest {
  name: string;
  description?: string;
  roleArn: string;
  trainingContainerConfig?: ContainerConfig;
  inferenceContainerConfig?: InferenceContainerConfig;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
export type ConfiguredModelAlgorithmArn = string;
export interface CreateConfiguredModelAlgorithmResponse {
  configuredModelAlgorithmArn: string;
}
export type AccountIdList = string[];
export type LogType = "ALL" | "ERROR_SUMMARY" | (string & {});
export type EntityType =
  | "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION"
  | "NUMBERS"
  | "CUSTOM"
  | (string & {});
export type EntityTypeList = EntityType[];
export type CustomDataIdentifier = string;
export type CustomDataIdentifierList = string[];
export interface CustomEntityConfig {
  customDataIdentifiers: string[];
}
export interface LogRedactionConfiguration {
  entitiesToRedact: EntityType[];
  customEntityConfig?: CustomEntityConfig;
}
export interface LogsConfigurationPolicy {
  allowedAccountIds: string[];
  filterPattern?: string;
  logType?: LogType;
  logRedactionConfiguration?: LogRedactionConfiguration;
}
export type LogsConfigurationPolicyList = LogsConfigurationPolicy[];
export type NoiseLevelType = "HIGH" | "MEDIUM" | "LOW" | "NONE" | (string & {});
export interface MetricsConfigurationPolicy {
  noiseLevel: NoiseLevelType;
}
export type TrainedModelArtifactMaxSizeUnitType = "GB" | (string & {});
export type TrainedModelArtifactMaxSizeValue = number;
export interface TrainedModelArtifactMaxSize {
  unit: TrainedModelArtifactMaxSizeUnitType;
  value: number;
}
export interface TrainedModelsConfigurationPolicy {
  containerLogs?: LogsConfigurationPolicy[];
  containerMetrics?: MetricsConfigurationPolicy;
  maxArtifactSize?: TrainedModelArtifactMaxSize;
}
export type TrainedModelExportsMaxSizeUnitType = "GB" | (string & {});
export type TrainedModelExportsMaxSizeValue = number;
export interface TrainedModelExportsMaxSize {
  unit: TrainedModelExportsMaxSizeUnitType;
  value: number;
}
export type TrainedModelExportFileType = "MODEL" | "OUTPUT" | (string & {});
export type TrainedModelExportFileTypeList = TrainedModelExportFileType[];
export interface TrainedModelExportsConfigurationPolicy {
  maxSize: TrainedModelExportsMaxSize;
  filesToExport: TrainedModelExportFileType[];
}
export type TrainedModelInferenceMaxOutputSizeUnitType = "GB" | (string & {});
export type TrainedModelInferenceMaxOutputSizeValue = number;
export interface TrainedModelInferenceMaxOutputSize {
  unit: TrainedModelInferenceMaxOutputSizeUnitType;
  value: number;
}
export interface TrainedModelInferenceJobsConfigurationPolicy {
  containerLogs?: LogsConfigurationPolicy[];
  maxOutputSize?: TrainedModelInferenceMaxOutputSize;
}
export interface PrivacyConfigurationPolicies {
  trainedModels?: TrainedModelsConfigurationPolicy;
  trainedModelExports?: TrainedModelExportsConfigurationPolicy;
  trainedModelInferenceJobs?: TrainedModelInferenceJobsConfigurationPolicy;
}
export interface PrivacyConfiguration {
  policies: PrivacyConfigurationPolicies;
}
export interface CreateConfiguredModelAlgorithmAssociationRequest {
  membershipIdentifier: string;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
  privacyConfiguration?: PrivacyConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type ConfiguredModelAlgorithmAssociationArn = string;
export interface CreateConfiguredModelAlgorithmAssociationResponse {
  configuredModelAlgorithmAssociationArn: string;
}
export type ConfiguredModelAlgorithmAssociationArnList = string[];
export type AnalysisTemplateArn = string;
export type ParameterName = string;
export type ParameterValue = string;
export type ParameterMap = { [key: string]: string | undefined };
export interface ProtectedQuerySQLParameters {
  queryString?: string;
  analysisTemplateArn?: string;
  parameters?: { [key: string]: string | undefined };
}
export type WorkerComputeType = "CR.1X" | "CR.4X" | "CR.8X" | (string & {});
export type SparkPropertyKey = string;
export type SparkPropertyValue = string;
export type SparkProperties = { [key: string]: string | undefined };
export type WorkerComputeConfigurationProperties = { spark: { [key: string]: string | undefined } };
export interface WorkerComputeConfiguration {
  type?: WorkerComputeType;
  number?: number;
  properties?: WorkerComputeConfigurationProperties;
}
export type ComputeConfiguration = { worker: WorkerComputeConfiguration };
export type ResultFormat = "CSV" | "PARQUET" | (string & {});
export interface ProtectedQueryInputParameters {
  sqlParameters: ProtectedQuerySQLParameters;
  computeConfiguration?: ComputeConfiguration;
  resultFormat?: ResultFormat;
}
export type InputChannelDataSource = {
  protectedQueryInputParameters: ProtectedQueryInputParameters;
};
export interface InputChannel {
  dataSource: InputChannelDataSource;
  roleArn: string;
}
export type AccountId = string;
export interface PayerConfiguration {
  computePayerAccountId?: string;
  syntheticDataPayerAccountId?: string;
}
export interface CreateMLInputChannelRequest {
  membershipIdentifier: string;
  configuredModelAlgorithmAssociations: string[];
  inputChannel: InputChannel;
  name: string;
  retentionInDays: number;
  description?: string;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
  payerConfiguration?: PayerConfiguration;
}
export type MLInputChannelArn = string;
export interface CreateMLInputChannelResponse {
  mlInputChannelArn: string;
}
export type HyperParameters = { [key: string]: string | undefined };
export type Environment = { [key: string]: string | undefined };
export type InstanceType =
  | "ml.m4.xlarge"
  | "ml.m4.2xlarge"
  | "ml.m4.4xlarge"
  | "ml.m4.10xlarge"
  | "ml.m4.16xlarge"
  | "ml.g4dn.xlarge"
  | "ml.g4dn.2xlarge"
  | "ml.g4dn.4xlarge"
  | "ml.g4dn.8xlarge"
  | "ml.g4dn.12xlarge"
  | "ml.g4dn.16xlarge"
  | "ml.m5.large"
  | "ml.m5.xlarge"
  | "ml.m5.2xlarge"
  | "ml.m5.4xlarge"
  | "ml.m5.12xlarge"
  | "ml.m5.24xlarge"
  | "ml.c4.xlarge"
  | "ml.c4.2xlarge"
  | "ml.c4.4xlarge"
  | "ml.c4.8xlarge"
  | "ml.p2.xlarge"
  | "ml.p2.8xlarge"
  | "ml.p2.16xlarge"
  | "ml.p4d.24xlarge"
  | "ml.p4de.24xlarge"
  | "ml.p5.48xlarge"
  | "ml.c5.xlarge"
  | "ml.c5.2xlarge"
  | "ml.c5.4xlarge"
  | "ml.c5.9xlarge"
  | "ml.c5.18xlarge"
  | "ml.c5n.xlarge"
  | "ml.c5n.2xlarge"
  | "ml.c5n.4xlarge"
  | "ml.c5n.9xlarge"
  | "ml.c5n.18xlarge"
  | "ml.g5.xlarge"
  | "ml.g5.2xlarge"
  | "ml.g5.4xlarge"
  | "ml.g5.8xlarge"
  | "ml.g5.16xlarge"
  | "ml.g5.12xlarge"
  | "ml.g5.24xlarge"
  | "ml.g5.48xlarge"
  | "ml.trn1.2xlarge"
  | "ml.trn1.32xlarge"
  | "ml.trn1n.32xlarge"
  | "ml.m6i.large"
  | "ml.m6i.xlarge"
  | "ml.m6i.2xlarge"
  | "ml.m6i.4xlarge"
  | "ml.m6i.8xlarge"
  | "ml.m6i.12xlarge"
  | "ml.m6i.16xlarge"
  | "ml.m6i.24xlarge"
  | "ml.m6i.32xlarge"
  | "ml.c6i.xlarge"
  | "ml.c6i.2xlarge"
  | "ml.c6i.8xlarge"
  | "ml.c6i.4xlarge"
  | "ml.c6i.12xlarge"
  | "ml.c6i.16xlarge"
  | "ml.c6i.24xlarge"
  | "ml.c6i.32xlarge"
  | "ml.r5d.large"
  | "ml.r5d.xlarge"
  | "ml.r5d.2xlarge"
  | "ml.r5d.4xlarge"
  | "ml.r5d.8xlarge"
  | "ml.r5d.12xlarge"
  | "ml.r5d.16xlarge"
  | "ml.r5d.24xlarge"
  | "ml.t3.medium"
  | "ml.t3.large"
  | "ml.t3.xlarge"
  | "ml.t3.2xlarge"
  | "ml.r5.large"
  | "ml.r5.xlarge"
  | "ml.r5.2xlarge"
  | "ml.r5.4xlarge"
  | "ml.r5.8xlarge"
  | "ml.r5.12xlarge"
  | "ml.r5.16xlarge"
  | "ml.r5.24xlarge"
  | "ml.c7i.large"
  | "ml.c7i.xlarge"
  | "ml.c7i.2xlarge"
  | "ml.c7i.4xlarge"
  | "ml.c7i.8xlarge"
  | "ml.c7i.12xlarge"
  | "ml.c7i.16xlarge"
  | "ml.c7i.24xlarge"
  | "ml.c7i.48xlarge"
  | "ml.m7i.large"
  | "ml.m7i.xlarge"
  | "ml.m7i.2xlarge"
  | "ml.m7i.4xlarge"
  | "ml.m7i.8xlarge"
  | "ml.m7i.12xlarge"
  | "ml.m7i.16xlarge"
  | "ml.m7i.24xlarge"
  | "ml.m7i.48xlarge"
  | "ml.r7i.large"
  | "ml.r7i.xlarge"
  | "ml.r7i.2xlarge"
  | "ml.r7i.4xlarge"
  | "ml.r7i.8xlarge"
  | "ml.r7i.12xlarge"
  | "ml.r7i.16xlarge"
  | "ml.r7i.24xlarge"
  | "ml.r7i.48xlarge"
  | "ml.g6.xlarge"
  | "ml.g6.2xlarge"
  | "ml.g6.4xlarge"
  | "ml.g6.8xlarge"
  | "ml.g6.12xlarge"
  | "ml.g6.16xlarge"
  | "ml.g6.24xlarge"
  | "ml.g6.48xlarge"
  | "ml.g6e.xlarge"
  | "ml.g6e.2xlarge"
  | "ml.g6e.4xlarge"
  | "ml.g6e.8xlarge"
  | "ml.g6e.12xlarge"
  | "ml.g6e.16xlarge"
  | "ml.g6e.24xlarge"
  | "ml.g6e.48xlarge"
  | "ml.p5en.48xlarge"
  | "ml.p3.2xlarge"
  | "ml.p3.8xlarge"
  | "ml.p3.16xlarge"
  | "ml.p3dn.24xlarge"
  | (string & {});
export interface ResourceConfig {
  instanceCount?: number;
  instanceType: InstanceType;
  volumeSizeInGB: number;
}
export interface StoppingCondition {
  maxRuntimeInSeconds?: number;
}
export type ModelTrainingDataChannelName = string;
export interface IncrementalTrainingDataChannel {
  trainedModelArn: string;
  versionIdentifier?: string;
  channelName: string;
}
export type IncrementalTrainingDataChannels = IncrementalTrainingDataChannel[];
export type S3DataDistributionType = "FullyReplicated" | "ShardedByS3Key" | (string & {});
export interface ModelTrainingDataChannel {
  mlInputChannelArn: string;
  channelName: string;
  s3DataDistributionType?: S3DataDistributionType;
}
export type ModelTrainingDataChannels = ModelTrainingDataChannel[];
export type TrainingInputMode = "File" | "FastFile" | "Pipe" | (string & {});
export interface CreateTrainedModelRequest {
  membershipIdentifier: string;
  name: string;
  configuredModelAlgorithmAssociationArn: string;
  hyperparameters?: { [key: string]: string | undefined };
  environment?: { [key: string]: string | undefined };
  resourceConfig: ResourceConfig;
  stoppingCondition?: StoppingCondition;
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannel[];
  dataChannels: ModelTrainingDataChannel[];
  trainingInputMode?: TrainingInputMode;
  description?: string;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
  mlModelTrainingPayerAccountId?: string;
}
export interface CreateTrainedModelResponse {
  trainedModelArn: string;
  versionIdentifier?: string;
}
export type DatasetType = "INTERACTIONS" | (string & {});
export type ColumnName = string;
export type ColumnType =
  | "USER_ID"
  | "ITEM_ID"
  | "TIMESTAMP"
  | "CATEGORICAL_FEATURE"
  | "NUMERICAL_FEATURE"
  | (string & {});
export type ColumnTypeList = ColumnType[];
export interface ColumnSchema {
  columnName: string;
  columnTypes: ColumnType[];
}
export type DatasetSchemaList = ColumnSchema[];
export type GlueTableName = string;
export type GlueDatabaseName = string;
export interface GlueDataSource {
  tableName: string;
  databaseName: string;
  catalogId?: string;
}
export interface DataSource {
  glueDataSource: GlueDataSource;
}
export interface DatasetInputConfig {
  schema: ColumnSchema[];
  dataSource: DataSource;
}
export interface Dataset {
  type: DatasetType;
  inputConfig: DatasetInputConfig;
}
export type DatasetList = Dataset[];
export interface CreateTrainingDatasetRequest {
  name: string;
  roleArn: string;
  trainingData: Dataset[];
  tags?: { [key: string]: string | undefined };
  description?: string;
}
export interface CreateTrainingDatasetResponse {
  trainingDatasetArn: string;
}
export type AudienceGenerationJobArn = string;
export interface DeleteAudienceGenerationJobRequest {
  audienceGenerationJobArn: string;
}
export interface DeleteAudienceGenerationJobResponse {}
export interface DeleteAudienceModelRequest {
  audienceModelArn: string;
}
export interface DeleteAudienceModelResponse {}
export interface DeleteConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
}
export interface DeleteConfiguredAudienceModelResponse {}
export interface DeleteConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
}
export interface DeleteConfiguredAudienceModelPolicyResponse {}
export interface DeleteConfiguredModelAlgorithmRequest {
  configuredModelAlgorithmArn: string;
}
export interface DeleteConfiguredModelAlgorithmResponse {}
export interface DeleteConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
}
export interface DeleteConfiguredModelAlgorithmAssociationResponse {}
export interface DeleteMLConfigurationRequest {
  membershipIdentifier: string;
}
export interface DeleteMLConfigurationResponse {}
export interface DeleteMLInputChannelDataRequest {
  mlInputChannelArn: string;
  membershipIdentifier: string;
}
export interface DeleteMLInputChannelDataResponse {}
export interface DeleteTrainedModelOutputRequest {
  trainedModelArn: string;
  membershipIdentifier: string;
  versionIdentifier?: string;
}
export interface DeleteTrainedModelOutputResponse {}
export interface DeleteTrainingDatasetRequest {
  trainingDatasetArn: string;
}
export interface DeleteTrainingDatasetResponse {}
export interface GetAudienceGenerationJobRequest {
  audienceGenerationJobArn: string;
}
export type AudienceGenerationJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
export interface StatusDetails {
  statusCode?: string;
  message?: string;
}
export interface AudienceGenerationJobDataSource {
  dataSource?: S3ConfigMap;
  roleArn: string;
  sqlParameters?: ProtectedQuerySQLParameters;
  sqlComputeConfiguration?: ComputeConfiguration;
}
export interface AudienceSize {
  type: AudienceSizeType;
  value: number;
}
export interface RelevanceMetric {
  audienceSize: AudienceSize;
  score?: number;
}
export type RelevanceMetrics = RelevanceMetric[];
export interface AudienceQualityMetrics {
  relevanceMetrics: RelevanceMetric[];
  recallMetric?: number;
}
export interface GetAudienceGenerationJobResponse {
  createTime: Date;
  updateTime: Date;
  audienceGenerationJobArn: string;
  name: string;
  description?: string;
  status: AudienceGenerationJobStatus;
  statusDetails?: StatusDetails;
  configuredAudienceModelArn: string;
  seedAudience?: AudienceGenerationJobDataSource;
  includeSeedInOutput?: boolean;
  collaborationId?: string;
  metrics?: AudienceQualityMetrics;
  startedBy?: string;
  tags?: { [key: string]: string | undefined };
  protectedQueryIdentifier?: string;
}
export interface GetAudienceModelRequest {
  audienceModelArn: string;
}
export type AudienceModelStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
export interface GetAudienceModelResponse {
  createTime: Date;
  updateTime: Date;
  trainingDataStartTime?: Date;
  trainingDataEndTime?: Date;
  audienceModelArn: string;
  name: string;
  trainingDatasetArn: string;
  status: AudienceModelStatus;
  statusDetails?: StatusDetails;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
  description?: string;
}
export interface GetCollaborationConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  collaborationIdentifier: string;
}
export interface GetCollaborationConfiguredModelAlgorithmAssociationResponse {
  createTime: Date;
  updateTime: Date;
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
  creatorAccountId: string;
  privacyConfiguration?: PrivacyConfiguration;
}
export interface GetCollaborationMLInputChannelRequest {
  mlInputChannelArn: string;
  collaborationIdentifier: string;
}
export type MLInputChannelStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "INACTIVE"
  | (string & {});
export type BudgetedResourceArn = string;
export type Budget = number;
export type AccessBudgetType =
  | "CALENDAR_DAY"
  | "CALENDAR_MONTH"
  | "CALENDAR_WEEK"
  | "LIFETIME"
  | (string & {});
export type AutoRefreshMode = "ENABLED" | "DISABLED" | (string & {});
export interface AccessBudgetDetails {
  startTime: Date;
  endTime?: Date;
  remainingBudget: number;
  budget: number;
  budgetType: AccessBudgetType;
  autoRefresh?: AutoRefreshMode;
}
export type AccessBudgetDetailsList = AccessBudgetDetails[];
export interface AccessBudget {
  resourceArn: string;
  details: AccessBudgetDetails[];
  aggregateRemainingBudget: number;
}
export type AccessBudgets = AccessBudget[];
export type PrivacyBudgets = { accessBudgets: AccessBudget[] };
export type SyntheticDataColumnName = string;
export type SyntheticDataColumnType = "CATEGORICAL" | "NUMERICAL" | (string & {});
export interface SyntheticDataColumnProperties {
  columnName: string;
  columnType: SyntheticDataColumnType;
  isPredictiveValue: boolean;
}
export type ColumnMappingList = SyntheticDataColumnProperties[];
export interface ColumnClassificationDetails {
  columnMapping: SyntheticDataColumnProperties[];
}
export interface MLSyntheticDataParameters {
  epsilon: number;
  maxMembershipInferenceAttackScore: number;
  columnClassification?: ColumnClassificationDetails;
}
export type MembershipInferenceAttackVersion = "DISTANCE_TO_CLOSEST_RECORD_V1" | (string & {});
export interface MembershipInferenceAttackScore {
  attackVersion: MembershipInferenceAttackVersion;
  score: number;
}
export type MembershipInferenceAttackScoreList = MembershipInferenceAttackScore[];
export interface DataPrivacyScores {
  membershipInferenceAttackScores: MembershipInferenceAttackScore[];
}
export interface SyntheticDataEvaluationScores {
  dataPrivacyScores: DataPrivacyScores;
}
export interface SyntheticDataConfiguration {
  syntheticDataParameters: MLSyntheticDataParameters;
  syntheticDataEvaluationScores?: SyntheticDataEvaluationScores;
}
export interface GetCollaborationMLInputChannelResponse {
  membershipIdentifier: string;
  collaborationIdentifier: string;
  mlInputChannelArn: string;
  name: string;
  configuredModelAlgorithmAssociations: string[];
  status: MLInputChannelStatus;
  statusDetails?: StatusDetails;
  retentionInDays: number;
  numberOfRecords?: number;
  privacyBudgets?: PrivacyBudgets;
  description?: string;
  syntheticDataConfiguration?: SyntheticDataConfiguration;
  payerConfiguration?: PayerConfiguration;
  createTime: Date;
  updateTime: Date;
  creatorAccountId: string;
}
export interface GetCollaborationTrainedModelRequest {
  trainedModelArn: string;
  collaborationIdentifier: string;
  versionIdentifier?: string;
}
export interface IncrementalTrainingDataChannelOutput {
  channelName: string;
  versionIdentifier?: string;
  modelName: string;
}
export type IncrementalTrainingDataChannelsOutput = IncrementalTrainingDataChannelOutput[];
export type TrainedModelStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "INACTIVE"
  | "CANCEL_PENDING"
  | "CANCEL_IN_PROGRESS"
  | "CANCEL_FAILED"
  | (string & {});
export type MetricsStatus = "PUBLISH_SUCCEEDED" | "PUBLISH_FAILED" | (string & {});
export type LogsStatus = "PUBLISH_SUCCEEDED" | "PUBLISH_FAILED" | (string & {});
export interface GetCollaborationTrainedModelResponse {
  membershipIdentifier: string;
  collaborationIdentifier: string;
  trainedModelArn: string;
  versionIdentifier?: string;
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[];
  name: string;
  description?: string;
  status: TrainedModelStatus;
  statusDetails?: StatusDetails;
  configuredModelAlgorithmAssociationArn: string;
  resourceConfig?: ResourceConfig;
  trainingInputMode?: TrainingInputMode;
  stoppingCondition?: StoppingCondition;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  trainingContainerImageDigest?: string;
  mlModelTrainingPayerAccountId?: string;
  createTime: Date;
  updateTime: Date;
  creatorAccountId: string;
}
export interface GetConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
}
export type ConfiguredAudienceModelStatus = "ACTIVE" | (string & {});
export interface GetConfiguredAudienceModelResponse {
  createTime: Date;
  updateTime: Date;
  configuredAudienceModelArn: string;
  name: string;
  audienceModelArn: string;
  outputConfig: ConfiguredAudienceModelOutputConfig;
  description?: string;
  status: ConfiguredAudienceModelStatus;
  sharedAudienceMetrics: SharedAudienceMetrics[];
  minMatchingSeedSize?: number;
  audienceSizeConfig?: AudienceSizeConfig;
  tags?: { [key: string]: string | undefined };
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
}
export interface GetConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
}
export type ResourcePolicy = string;
export type Hash = string;
export interface GetConfiguredAudienceModelPolicyResponse {
  configuredAudienceModelArn: string;
  configuredAudienceModelPolicy: string;
  policyHash: string;
}
export interface GetConfiguredModelAlgorithmRequest {
  configuredModelAlgorithmArn: string;
}
export interface GetConfiguredModelAlgorithmResponse {
  createTime: Date;
  updateTime: Date;
  configuredModelAlgorithmArn: string;
  name: string;
  trainingContainerConfig?: ContainerConfig;
  inferenceContainerConfig?: InferenceContainerConfig;
  roleArn: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
export interface GetConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
}
export interface GetConfiguredModelAlgorithmAssociationResponse {
  createTime: Date;
  updateTime: Date;
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  configuredModelAlgorithmArn: string;
  name: string;
  privacyConfiguration?: PrivacyConfiguration;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetMLConfigurationRequest {
  membershipIdentifier: string;
}
export interface Destination {
  s3Destination: S3ConfigMap;
}
export interface MLOutputConfiguration {
  destination?: Destination;
  roleArn: string;
}
export interface GetMLConfigurationResponse {
  membershipIdentifier: string;
  defaultOutputLocation: MLOutputConfiguration;
  createTime: Date;
  updateTime: Date;
}
export interface GetMLInputChannelRequest {
  mlInputChannelArn: string;
  membershipIdentifier: string;
}
export interface GetMLInputChannelResponse {
  membershipIdentifier: string;
  collaborationIdentifier: string;
  mlInputChannelArn: string;
  name: string;
  configuredModelAlgorithmAssociations: string[];
  status: MLInputChannelStatus;
  statusDetails?: StatusDetails;
  retentionInDays: number;
  numberOfRecords?: number;
  privacyBudgets?: PrivacyBudgets;
  description?: string;
  syntheticDataConfiguration?: SyntheticDataConfiguration;
  payerConfiguration?: PayerConfiguration;
  createTime: Date;
  updateTime: Date;
  inputChannel: InputChannel;
  protectedQueryIdentifier?: string;
  numberOfFiles?: number;
  sizeInGb?: number;
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetTrainedModelRequest {
  trainedModelArn: string;
  membershipIdentifier: string;
  versionIdentifier?: string;
}
export interface GetTrainedModelResponse {
  membershipIdentifier: string;
  collaborationIdentifier: string;
  trainedModelArn: string;
  versionIdentifier?: string;
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[];
  name: string;
  description?: string;
  status: TrainedModelStatus;
  statusDetails?: StatusDetails;
  configuredModelAlgorithmAssociationArn: string;
  resourceConfig?: ResourceConfig;
  trainingInputMode?: TrainingInputMode;
  stoppingCondition?: StoppingCondition;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  trainingContainerImageDigest?: string;
  mlModelTrainingPayerAccountId?: string;
  createTime: Date;
  updateTime: Date;
  hyperparameters?: { [key: string]: string | undefined };
  environment?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
  dataChannels: ModelTrainingDataChannel[];
}
export interface GetTrainedModelInferenceJobRequest {
  membershipIdentifier: string;
  trainedModelInferenceJobArn: string;
}
export type TrainedModelInferenceJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "CANCEL_PENDING"
  | "CANCEL_IN_PROGRESS"
  | "CANCEL_FAILED"
  | "INACTIVE"
  | (string & {});
export type InferenceInstanceType =
  | "ml.r7i.48xlarge"
  | "ml.r6i.16xlarge"
  | "ml.m6i.xlarge"
  | "ml.m5.4xlarge"
  | "ml.p2.xlarge"
  | "ml.m4.16xlarge"
  | "ml.r7i.16xlarge"
  | "ml.m7i.xlarge"
  | "ml.m6i.12xlarge"
  | "ml.r7i.8xlarge"
  | "ml.r7i.large"
  | "ml.m7i.12xlarge"
  | "ml.m6i.24xlarge"
  | "ml.m7i.24xlarge"
  | "ml.r6i.8xlarge"
  | "ml.r6i.large"
  | "ml.g5.2xlarge"
  | "ml.m5.large"
  | "ml.m7i.48xlarge"
  | "ml.m6i.16xlarge"
  | "ml.p2.16xlarge"
  | "ml.g5.4xlarge"
  | "ml.m7i.16xlarge"
  | "ml.c4.2xlarge"
  | "ml.c5.2xlarge"
  | "ml.c6i.32xlarge"
  | "ml.c4.4xlarge"
  | "ml.g5.8xlarge"
  | "ml.c6i.xlarge"
  | "ml.c5.4xlarge"
  | "ml.g4dn.xlarge"
  | "ml.c7i.xlarge"
  | "ml.c6i.12xlarge"
  | "ml.g4dn.12xlarge"
  | "ml.c7i.12xlarge"
  | "ml.c6i.24xlarge"
  | "ml.g4dn.2xlarge"
  | "ml.c7i.24xlarge"
  | "ml.c7i.2xlarge"
  | "ml.c4.8xlarge"
  | "ml.c6i.2xlarge"
  | "ml.g4dn.4xlarge"
  | "ml.c7i.48xlarge"
  | "ml.c7i.4xlarge"
  | "ml.c6i.16xlarge"
  | "ml.c5.9xlarge"
  | "ml.g4dn.16xlarge"
  | "ml.c7i.16xlarge"
  | "ml.c6i.4xlarge"
  | "ml.c5.xlarge"
  | "ml.c4.xlarge"
  | "ml.g4dn.8xlarge"
  | "ml.c7i.8xlarge"
  | "ml.c7i.large"
  | "ml.g5.xlarge"
  | "ml.c6i.8xlarge"
  | "ml.c6i.large"
  | "ml.g5.12xlarge"
  | "ml.g5.24xlarge"
  | "ml.m7i.2xlarge"
  | "ml.c5.18xlarge"
  | "ml.g5.48xlarge"
  | "ml.m6i.2xlarge"
  | "ml.g5.16xlarge"
  | "ml.m7i.4xlarge"
  | "ml.r6i.32xlarge"
  | "ml.m6i.4xlarge"
  | "ml.m5.xlarge"
  | "ml.m4.10xlarge"
  | "ml.r6i.xlarge"
  | "ml.m5.12xlarge"
  | "ml.m4.xlarge"
  | "ml.r7i.2xlarge"
  | "ml.r7i.xlarge"
  | "ml.r6i.12xlarge"
  | "ml.m5.24xlarge"
  | "ml.r7i.12xlarge"
  | "ml.m7i.8xlarge"
  | "ml.m7i.large"
  | "ml.r6i.24xlarge"
  | "ml.r6i.2xlarge"
  | "ml.m4.2xlarge"
  | "ml.r7i.24xlarge"
  | "ml.r7i.4xlarge"
  | "ml.m6i.8xlarge"
  | "ml.m6i.large"
  | "ml.m5.2xlarge"
  | "ml.p2.8xlarge"
  | "ml.r6i.4xlarge"
  | "ml.m6i.32xlarge"
  | "ml.m4.4xlarge"
  | "ml.p3.16xlarge"
  | "ml.p3.2xlarge"
  | "ml.p3.8xlarge"
  | (string & {});
export interface InferenceResourceConfig {
  instanceType: InferenceInstanceType;
  instanceCount?: number;
}
export interface InferenceReceiverMember {
  accountId: string;
}
export type InferenceReceiverMembers = InferenceReceiverMember[];
export interface InferenceOutputConfiguration {
  accept?: string;
  members: InferenceReceiverMember[];
}
export interface ModelInferenceDataSource {
  mlInputChannelArn: string;
}
export interface InferenceContainerExecutionParameters {
  maxPayloadInMB?: number;
}
export type InferenceEnvironmentMap = { [key: string]: string | undefined };
export interface GetTrainedModelInferenceJobResponse {
  createTime: Date;
  updateTime: Date;
  trainedModelInferenceJobArn: string;
  configuredModelAlgorithmAssociationArn?: string;
  name: string;
  status: TrainedModelInferenceJobStatus;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  resourceConfig: InferenceResourceConfig;
  outputConfiguration: InferenceOutputConfiguration;
  membershipIdentifier: string;
  dataSource: ModelInferenceDataSource;
  containerExecutionParameters?: InferenceContainerExecutionParameters;
  statusDetails?: StatusDetails;
  description?: string;
  inferenceContainerImageDigest?: string;
  environment?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  tags?: { [key: string]: string | undefined };
  mlModelInferencePayerAccountId?: string;
}
export interface GetTrainingDatasetRequest {
  trainingDatasetArn: string;
}
export type TrainingDatasetStatus = "ACTIVE" | (string & {});
export interface GetTrainingDatasetResponse {
  createTime: Date;
  updateTime: Date;
  trainingDatasetArn: string;
  name: string;
  trainingData: Dataset[];
  status: TrainingDatasetStatus;
  roleArn: string;
  tags?: { [key: string]: string | undefined };
  description?: string;
}
export type NextToken = string;
export type MaxResults = number;
export interface ListAudienceExportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  audienceGenerationJobArn?: string;
}
export type AudienceExportJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | (string & {});
export interface AudienceExportJobSummary {
  createTime: Date;
  updateTime: Date;
  name: string;
  audienceGenerationJobArn: string;
  audienceSize: AudienceSize;
  description?: string;
  status: AudienceExportJobStatus;
  statusDetails?: StatusDetails;
  outputLocation?: string;
}
export type AudienceExportJobList = AudienceExportJobSummary[];
export interface ListAudienceExportJobsResponse {
  nextToken?: string;
  audienceExportJobs: AudienceExportJobSummary[];
}
export interface ListAudienceGenerationJobsRequest {
  nextToken?: string;
  maxResults?: number;
  configuredAudienceModelArn?: string;
  collaborationId?: string;
}
export interface AudienceGenerationJobSummary {
  createTime: Date;
  updateTime: Date;
  audienceGenerationJobArn: string;
  name: string;
  description?: string;
  status: AudienceGenerationJobStatus;
  configuredAudienceModelArn: string;
  collaborationId?: string;
  startedBy?: string;
}
export type AudienceGenerationJobList = AudienceGenerationJobSummary[];
export interface ListAudienceGenerationJobsResponse {
  nextToken?: string;
  audienceGenerationJobs: AudienceGenerationJobSummary[];
}
export interface ListAudienceModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface AudienceModelSummary {
  createTime: Date;
  updateTime: Date;
  audienceModelArn: string;
  name: string;
  trainingDatasetArn: string;
  status: AudienceModelStatus;
  description?: string;
}
export type AudienceModelList = AudienceModelSummary[];
export interface ListAudienceModelsResponse {
  nextToken?: string;
  audienceModels: AudienceModelSummary[];
}
export interface ListCollaborationConfiguredModelAlgorithmAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
export interface CollaborationConfiguredModelAlgorithmAssociationSummary {
  createTime: Date;
  updateTime: Date;
  configuredModelAlgorithmAssociationArn: string;
  name: string;
  description?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  configuredModelAlgorithmArn: string;
  creatorAccountId: string;
}
export type CollaborationConfiguredModelAlgorithmAssociationList =
  CollaborationConfiguredModelAlgorithmAssociationSummary[];
export interface ListCollaborationConfiguredModelAlgorithmAssociationsResponse {
  nextToken?: string;
  collaborationConfiguredModelAlgorithmAssociations: CollaborationConfiguredModelAlgorithmAssociationSummary[];
}
export interface ListCollaborationMLInputChannelsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
export interface CollaborationMLInputChannelSummary {
  createTime: Date;
  updateTime: Date;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  name: string;
  configuredModelAlgorithmAssociations: string[];
  mlInputChannelArn: string;
  status: MLInputChannelStatus;
  creatorAccountId: string;
  description?: string;
  payerConfiguration?: PayerConfiguration;
}
export type CollaborationMLInputChannelsList = CollaborationMLInputChannelSummary[];
export interface ListCollaborationMLInputChannelsResponse {
  nextToken?: string;
  collaborationMLInputChannelsList: CollaborationMLInputChannelSummary[];
}
export interface ListCollaborationTrainedModelExportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
}
export interface TrainedModelExportReceiverMember {
  accountId: string;
}
export type TrainedModelExportReceiverMembers = TrainedModelExportReceiverMember[];
export interface TrainedModelExportOutputConfiguration {
  members: TrainedModelExportReceiverMember[];
}
export type TrainedModelExportJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | (string & {});
export interface CollaborationTrainedModelExportJobSummary {
  createTime: Date;
  updateTime: Date;
  name: string;
  outputConfiguration: TrainedModelExportOutputConfiguration;
  status: TrainedModelExportJobStatus;
  statusDetails?: StatusDetails;
  description?: string;
  creatorAccountId: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
}
export type CollaborationTrainedModelExportJobList = CollaborationTrainedModelExportJobSummary[];
export interface ListCollaborationTrainedModelExportJobsResponse {
  nextToken?: string;
  collaborationTrainedModelExportJobs: CollaborationTrainedModelExportJobSummary[];
}
export interface ListCollaborationTrainedModelInferenceJobsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
  trainedModelArn?: string;
  trainedModelVersionIdentifier?: string;
}
export interface CollaborationTrainedModelInferenceJobSummary {
  trainedModelInferenceJobArn: string;
  configuredModelAlgorithmAssociationArn?: string;
  membershipIdentifier: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  collaborationIdentifier: string;
  status: TrainedModelInferenceJobStatus;
  outputConfiguration: InferenceOutputConfiguration;
  name: string;
  description?: string;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  mlModelInferencePayerAccountId?: string;
  createTime: Date;
  updateTime: Date;
  creatorAccountId: string;
}
export type CollaborationTrainedModelInferenceJobList =
  CollaborationTrainedModelInferenceJobSummary[];
export interface ListCollaborationTrainedModelInferenceJobsResponse {
  nextToken?: string;
  collaborationTrainedModelInferenceJobs: CollaborationTrainedModelInferenceJobSummary[];
}
export interface ListCollaborationTrainedModelsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
export interface CollaborationTrainedModelSummary {
  createTime: Date;
  updateTime: Date;
  trainedModelArn: string;
  name: string;
  versionIdentifier?: string;
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[];
  description?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  status: TrainedModelStatus;
  configuredModelAlgorithmAssociationArn: string;
  creatorAccountId: string;
  mlModelTrainingPayerAccountId?: string;
}
export type CollaborationTrainedModelList = CollaborationTrainedModelSummary[];
export interface ListCollaborationTrainedModelsResponse {
  nextToken?: string;
  collaborationTrainedModels: CollaborationTrainedModelSummary[];
}
export interface ListConfiguredAudienceModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ConfiguredAudienceModelSummary {
  createTime: Date;
  updateTime: Date;
  name: string;
  audienceModelArn: string;
  outputConfig: ConfiguredAudienceModelOutputConfig;
  description?: string;
  configuredAudienceModelArn: string;
  status: ConfiguredAudienceModelStatus;
}
export type ConfiguredAudienceModelList = ConfiguredAudienceModelSummary[];
export interface ListConfiguredAudienceModelsResponse {
  nextToken?: string;
  configuredAudienceModels: ConfiguredAudienceModelSummary[];
}
export interface ListConfiguredModelAlgorithmAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
export interface ConfiguredModelAlgorithmAssociationSummary {
  createTime: Date;
  updateTime: Date;
  configuredModelAlgorithmAssociationArn: string;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
}
export type ConfiguredModelAlgorithmAssociationList = ConfiguredModelAlgorithmAssociationSummary[];
export interface ListConfiguredModelAlgorithmAssociationsResponse {
  nextToken?: string;
  configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationSummary[];
}
export interface ListConfiguredModelAlgorithmsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ConfiguredModelAlgorithmSummary {
  createTime: Date;
  updateTime: Date;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
}
export type ConfiguredModelAlgorithmList = ConfiguredModelAlgorithmSummary[];
export interface ListConfiguredModelAlgorithmsResponse {
  nextToken?: string;
  configuredModelAlgorithms: ConfiguredModelAlgorithmSummary[];
}
export interface ListMLInputChannelsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
export interface MLInputChannelSummary {
  createTime: Date;
  updateTime: Date;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  name: string;
  configuredModelAlgorithmAssociations: string[];
  protectedQueryIdentifier?: string;
  mlInputChannelArn: string;
  status: MLInputChannelStatus;
  description?: string;
  payerConfiguration?: PayerConfiguration;
}
export type MLInputChannelsList = MLInputChannelSummary[];
export interface ListMLInputChannelsResponse {
  nextToken?: string;
  mlInputChannelsList: MLInputChannelSummary[];
}
export type TaggableArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
export interface ListTrainedModelInferenceJobsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
  trainedModelArn?: string;
  trainedModelVersionIdentifier?: string;
}
export interface TrainedModelInferenceJobSummary {
  trainedModelInferenceJobArn: string;
  configuredModelAlgorithmAssociationArn?: string;
  membershipIdentifier: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  collaborationIdentifier: string;
  status: TrainedModelInferenceJobStatus;
  outputConfiguration: InferenceOutputConfiguration;
  name: string;
  description?: string;
  metricsStatus?: MetricsStatus;
  metricsStatusDetails?: string;
  logsStatus?: LogsStatus;
  logsStatusDetails?: string;
  mlModelInferencePayerAccountId?: string;
  createTime: Date;
  updateTime: Date;
}
export type TrainedModelInferenceJobList = TrainedModelInferenceJobSummary[];
export interface ListTrainedModelInferenceJobsResponse {
  nextToken?: string;
  trainedModelInferenceJobs: TrainedModelInferenceJobSummary[];
}
export interface ListTrainedModelsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
export interface TrainedModelSummary {
  createTime: Date;
  updateTime: Date;
  trainedModelArn: string;
  versionIdentifier?: string;
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[];
  name: string;
  description?: string;
  membershipIdentifier: string;
  collaborationIdentifier: string;
  status: TrainedModelStatus;
  configuredModelAlgorithmAssociationArn: string;
  mlModelTrainingPayerAccountId?: string;
}
export type TrainedModelList = TrainedModelSummary[];
export interface ListTrainedModelsResponse {
  nextToken?: string;
  trainedModels: TrainedModelSummary[];
}
export interface ListTrainedModelVersionsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
  trainedModelArn: string;
  status?: TrainedModelStatus;
}
export interface ListTrainedModelVersionsResponse {
  nextToken?: string;
  trainedModels: TrainedModelSummary[];
}
export interface ListTrainingDatasetsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface TrainingDatasetSummary {
  createTime: Date;
  updateTime: Date;
  trainingDatasetArn: string;
  name: string;
  status: TrainingDatasetStatus;
  description?: string;
}
export type TrainingDatasetList = TrainingDatasetSummary[];
export interface ListTrainingDatasetsResponse {
  nextToken?: string;
  trainingDatasets: TrainingDatasetSummary[];
}
export type PolicyExistenceCondition =
  | "POLICY_MUST_EXIST"
  | "POLICY_MUST_NOT_EXIST"
  | (string & {});
export interface PutConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
  configuredAudienceModelPolicy: string;
  previousPolicyHash?: string;
  policyExistenceCondition?: PolicyExistenceCondition;
}
export interface PutConfiguredAudienceModelPolicyResponse {
  configuredAudienceModelPolicy: string;
  policyHash: string;
}
export interface PutMLConfigurationRequest {
  membershipIdentifier: string;
  defaultOutputLocation: MLOutputConfiguration;
}
export interface PutMLConfigurationResponse {}
export interface StartAudienceExportJobRequest {
  name: string;
  audienceGenerationJobArn: string;
  audienceSize: AudienceSize;
  description?: string;
}
export interface StartAudienceExportJobResponse {}
export interface StartAudienceGenerationJobRequest {
  name: string;
  configuredAudienceModelArn: string;
  seedAudience: AudienceGenerationJobDataSource;
  includeSeedInOutput?: boolean;
  collaborationId?: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
export interface StartAudienceGenerationJobResponse {
  audienceGenerationJobArn: string;
}
export interface StartTrainedModelExportJobRequest {
  name: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  membershipIdentifier: string;
  outputConfiguration: TrainedModelExportOutputConfiguration;
  description?: string;
}
export interface StartTrainedModelExportJobResponse {}
export interface StartTrainedModelInferenceJobRequest {
  membershipIdentifier: string;
  name: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  configuredModelAlgorithmAssociationArn?: string;
  resourceConfig: InferenceResourceConfig;
  outputConfiguration: InferenceOutputConfiguration;
  dataSource: ModelInferenceDataSource;
  description?: string;
  containerExecutionParameters?: InferenceContainerExecutionParameters;
  environment?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
  tags?: { [key: string]: string | undefined };
  mlModelInferencePayerAccountId?: string;
}
export interface StartTrainedModelInferenceJobResponse {
  trainedModelInferenceJobArn: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
  outputConfig?: ConfiguredAudienceModelOutputConfig;
  audienceModelArn?: string;
  sharedAudienceMetrics?: SharedAudienceMetrics[];
  minMatchingSeedSize?: number;
  audienceSizeConfig?: AudienceSizeConfig;
  description?: string;
}
export interface UpdateConfiguredAudienceModelResponse {
  configuredAudienceModelArn: string;
}
export type CancelTrainedModelError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submits a request to cancel the trained model job.
 */
export const cancelTrainedModel: API.OperationMethod<
  CancelTrainedModelRequest,
  CancelTrainedModelResponse,
  CancelTrainedModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<CancelTrainedModelRequest>,
  output: __S(1) as any as S.Schema<CancelTrainedModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelTrainedModel",
}));

export type CancelTrainedModelInferenceJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submits a request to cancel a trained model inference job.
 */
export const cancelTrainedModelInferenceJob: API.OperationMethod<
  CancelTrainedModelInferenceJobRequest,
  CancelTrainedModelInferenceJobResponse,
  CancelTrainedModelInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CancelTrainedModelInferenceJobRequest>,
  output: __S(3) as any as S.Schema<CancelTrainedModelInferenceJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelTrainedModelInferenceJob",
}));

export type CreateAudienceModelError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Defines the information necessary to create an audience model. An audience model is a machine learning model that Clean Rooms ML trains to measure similarity between users. Clean Rooms ML manages training and storing the audience model. The audience model can be used in multiple calls to the StartAudienceGenerationJob API.
 */
export const createAudienceModel: API.OperationMethod<
  CreateAudienceModelRequest,
  CreateAudienceModelResponse,
  CreateAudienceModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<CreateAudienceModelRequest>,
  output: __S(6) as any as S.Schema<CreateAudienceModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAudienceModel",
}));

export type CreateConfiguredAudienceModelError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Defines the information necessary to create a configured audience model.
 */
export const createConfiguredAudienceModel: API.OperationMethod<
  CreateConfiguredAudienceModelRequest,
  CreateConfiguredAudienceModelResponse,
  CreateConfiguredAudienceModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<CreateConfiguredAudienceModelRequest>,
  output: __S(14) as any as S.Schema<CreateConfiguredAudienceModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfiguredAudienceModel",
}));

export type CreateConfiguredModelAlgorithmError =
  | AccessDeniedException
  | ConflictException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a configured model algorithm using a container image stored in an ECR repository.
 */
export const createConfiguredModelAlgorithm: API.OperationMethod<
  CreateConfiguredModelAlgorithmRequest,
  CreateConfiguredModelAlgorithmResponse,
  CreateConfiguredModelAlgorithmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<CreateConfiguredModelAlgorithmRequest>,
  output: __S(21) as any as S.Schema<CreateConfiguredModelAlgorithmResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfiguredModelAlgorithm",
}));

export type CreateConfiguredModelAlgorithmAssociationError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a configured model algorithm to a collaboration for use by any member of the collaboration.
 */
export const createConfiguredModelAlgorithmAssociation: API.OperationMethod<
  CreateConfiguredModelAlgorithmAssociationRequest,
  CreateConfiguredModelAlgorithmAssociationResponse,
  CreateConfiguredModelAlgorithmAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<CreateConfiguredModelAlgorithmAssociationRequest>,
  output: __S(34) as any as S.Schema<CreateConfiguredModelAlgorithmAssociationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfiguredModelAlgorithmAssociation",
}));

export type CreateMLInputChannelError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the information to create an ML input channel. An ML input channel is the result of a query that can be used for ML modeling.
 */
export const createMLInputChannel: API.OperationMethod<
  CreateMLInputChannelRequest,
  CreateMLInputChannelResponse,
  CreateMLInputChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<CreateMLInputChannelRequest>,
  output: __S(45) as any as S.Schema<CreateMLInputChannelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMLInputChannel",
}));

export type CreateTrainedModelError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a trained model from an associated configured model algorithm using data from any member of the collaboration.
 */
export const createTrainedModel: API.OperationMethod<
  CreateTrainedModelRequest,
  CreateTrainedModelResponse,
  CreateTrainedModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<CreateTrainedModelRequest>,
  output: __S(53) as any as S.Schema<CreateTrainedModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTrainedModel",
}));

export type CreateTrainingDatasetError =
  | AccessDeniedException
  | ConflictException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Defines the information necessary to create a training dataset. In Clean Rooms ML, the `TrainingDataset` is metadata that points to a Glue table, which is read only during `AudienceModel` creation.
 */
export const createTrainingDataset: API.OperationMethod<
  CreateTrainingDatasetRequest,
  CreateTrainingDatasetResponse,
  CreateTrainingDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<CreateTrainingDatasetRequest>,
  output: __S(62) as any as S.Schema<CreateTrainingDatasetResponse>,
  errors: [AccessDeniedException, ConflictException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTrainingDataset",
}));

export type DeleteAudienceGenerationJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified audience generation job, and removes all data associated with the job.
 */
export const deleteAudienceGenerationJob: API.OperationMethod<
  DeleteAudienceGenerationJobRequest,
  DeleteAudienceGenerationJobResponse,
  DeleteAudienceGenerationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<DeleteAudienceGenerationJobRequest>,
  output: __S(3) as any as S.Schema<DeleteAudienceGenerationJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAudienceGenerationJob",
}));

export type DeleteAudienceModelError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Specifies an audience model that you want to delete. You can't delete an audience model if there are any configured audience models that depend on the audience model.
 */
export const deleteAudienceModel: API.OperationMethod<
  DeleteAudienceModelRequest,
  DeleteAudienceModelResponse,
  DeleteAudienceModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<DeleteAudienceModelRequest>,
  output: __S(1) as any as S.Schema<DeleteAudienceModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAudienceModel",
}));

export type DeleteConfiguredAudienceModelError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified configured audience model. You can't delete a configured audience model if there are any lookalike models that use the configured audience model. If you delete a configured audience model, it will be removed from any collaborations that it is associated to.
 */
export const deleteConfiguredAudienceModel: API.OperationMethod<
  DeleteConfiguredAudienceModelRequest,
  DeleteConfiguredAudienceModelResponse,
  DeleteConfiguredAudienceModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<DeleteConfiguredAudienceModelRequest>,
  output: __S(3) as any as S.Schema<DeleteConfiguredAudienceModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfiguredAudienceModel",
}));

export type DeleteConfiguredAudienceModelPolicyError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified configured audience model policy.
 */
export const deleteConfiguredAudienceModelPolicy: API.OperationMethod<
  DeleteConfiguredAudienceModelPolicyRequest,
  DeleteConfiguredAudienceModelPolicyResponse,
  DeleteConfiguredAudienceModelPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<DeleteConfiguredAudienceModelPolicyRequest>,
  output: __S(3) as any as S.Schema<DeleteConfiguredAudienceModelPolicyResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfiguredAudienceModelPolicy",
}));

export type DeleteConfiguredModelAlgorithmError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a configured model algorithm.
 */
export const deleteConfiguredModelAlgorithm: API.OperationMethod<
  DeleteConfiguredModelAlgorithmRequest,
  DeleteConfiguredModelAlgorithmResponse,
  DeleteConfiguredModelAlgorithmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<DeleteConfiguredModelAlgorithmRequest>,
  output: __S(3) as any as S.Schema<DeleteConfiguredModelAlgorithmResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfiguredModelAlgorithm",
}));

export type DeleteConfiguredModelAlgorithmAssociationError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a configured model algorithm association.
 */
export const deleteConfiguredModelAlgorithmAssociation: API.OperationMethod<
  DeleteConfiguredModelAlgorithmAssociationRequest,
  DeleteConfiguredModelAlgorithmAssociationResponse,
  DeleteConfiguredModelAlgorithmAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<DeleteConfiguredModelAlgorithmAssociationRequest>,
  output: __S(3) as any as S.Schema<DeleteConfiguredModelAlgorithmAssociationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfiguredModelAlgorithmAssociation",
}));

export type DeleteMLConfigurationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a ML modeling configuration.
 */
export const deleteMLConfiguration: API.OperationMethod<
  DeleteMLConfigurationRequest,
  DeleteMLConfigurationResponse,
  DeleteMLConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<DeleteMLConfigurationRequest>,
  output: __S(1) as any as S.Schema<DeleteMLConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMLConfiguration",
}));

export type DeleteMLInputChannelDataError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the information necessary to delete an ML input channel.
 */
export const deleteMLInputChannelData: API.OperationMethod<
  DeleteMLInputChannelDataRequest,
  DeleteMLInputChannelDataResponse,
  DeleteMLInputChannelDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<DeleteMLInputChannelDataRequest>,
  output: __S(3) as any as S.Schema<DeleteMLInputChannelDataResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMLInputChannelData",
}));

export type DeleteTrainedModelOutputError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the model artifacts stored by the service.
 */
export const deleteTrainedModelOutput: API.OperationMethod<
  DeleteTrainedModelOutputRequest,
  DeleteTrainedModelOutputResponse,
  DeleteTrainedModelOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<DeleteTrainedModelOutputRequest>,
  output: __S(3) as any as S.Schema<DeleteTrainedModelOutputResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTrainedModelOutput",
}));

export type DeleteTrainingDatasetError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Specifies a training dataset that you want to delete. You can't delete a training dataset if there are any audience models that depend on the training dataset. In Clean Rooms ML, the `TrainingDataset` is metadata that points to a Glue table, which is read only during `AudienceModel` creation. This action deletes the metadata.
 */
export const deleteTrainingDataset: API.OperationMethod<
  DeleteTrainingDatasetRequest,
  DeleteTrainingDatasetResponse,
  DeleteTrainingDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<DeleteTrainingDatasetRequest>,
  output: __S(1) as any as S.Schema<DeleteTrainingDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTrainingDataset",
}));

export type GetAudienceGenerationJobError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an audience generation job.
 */
export const getAudienceGenerationJob: API.OperationMethod<
  GetAudienceGenerationJobRequest,
  GetAudienceGenerationJobResponse,
  GetAudienceGenerationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<GetAudienceGenerationJobRequest>,
  output: __S(80) as any as S.Schema<GetAudienceGenerationJobResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAudienceGenerationJob",
}));

export type GetAudienceModelError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an audience model
 */
export const getAudienceModel: API.OperationMethod<
  GetAudienceModelRequest,
  GetAudienceModelResponse,
  GetAudienceModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81) as any as S.Schema<GetAudienceModelRequest>,
  output: __S(82) as any as S.Schema<GetAudienceModelResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAudienceModel",
}));

export type GetCollaborationConfiguredModelAlgorithmAssociationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the configured model algorithm association in a collaboration.
 */
export const getCollaborationConfiguredModelAlgorithmAssociation: API.OperationMethod<
  GetCollaborationConfiguredModelAlgorithmAssociationRequest,
  GetCollaborationConfiguredModelAlgorithmAssociationResponse,
  GetCollaborationConfiguredModelAlgorithmAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<GetCollaborationConfiguredModelAlgorithmAssociationRequest>,
  output: __S(84) as any as S.Schema<GetCollaborationConfiguredModelAlgorithmAssociationResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaborationConfiguredModelAlgorithmAssociation",
}));

export type GetCollaborationMLInputChannelError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specific ML input channel in a collaboration.
 */
export const getCollaborationMLInputChannel: API.OperationMethod<
  GetCollaborationMLInputChannelRequest,
  GetCollaborationMLInputChannelResponse,
  GetCollaborationMLInputChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85) as any as S.Schema<GetCollaborationMLInputChannelRequest>,
  output: __S(100) as any as S.Schema<GetCollaborationMLInputChannelResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaborationMLInputChannel",
}));

export type GetCollaborationTrainedModelError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a trained model in a collaboration.
 */
export const getCollaborationTrainedModel: API.OperationMethod<
  GetCollaborationTrainedModelRequest,
  GetCollaborationTrainedModelResponse,
  GetCollaborationTrainedModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101) as any as S.Schema<GetCollaborationTrainedModelRequest>,
  output: __S(104) as any as S.Schema<GetCollaborationTrainedModelResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaborationTrainedModel",
}));

export type GetConfiguredAudienceModelError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specified configured audience model.
 */
export const getConfiguredAudienceModel: API.OperationMethod<
  GetConfiguredAudienceModelRequest,
  GetConfiguredAudienceModelResponse,
  GetConfiguredAudienceModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105) as any as S.Schema<GetConfiguredAudienceModelRequest>,
  output: __S(106) as any as S.Schema<GetConfiguredAudienceModelResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredAudienceModel",
}));

export type GetConfiguredAudienceModelPolicyError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a configured audience model policy.
 */
export const getConfiguredAudienceModelPolicy: API.OperationMethod<
  GetConfiguredAudienceModelPolicyRequest,
  GetConfiguredAudienceModelPolicyResponse,
  GetConfiguredAudienceModelPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107) as any as S.Schema<GetConfiguredAudienceModelPolicyRequest>,
  output: __S(108) as any as S.Schema<GetConfiguredAudienceModelPolicyResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredAudienceModelPolicy",
}));

export type GetConfiguredModelAlgorithmError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a configured model algorithm.
 */
export const getConfiguredModelAlgorithm: API.OperationMethod<
  GetConfiguredModelAlgorithmRequest,
  GetConfiguredModelAlgorithmResponse,
  GetConfiguredModelAlgorithmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<GetConfiguredModelAlgorithmRequest>,
  output: __S(110) as any as S.Schema<GetConfiguredModelAlgorithmResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredModelAlgorithm",
}));

export type GetConfiguredModelAlgorithmAssociationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a configured model algorithm association.
 */
export const getConfiguredModelAlgorithmAssociation: API.OperationMethod<
  GetConfiguredModelAlgorithmAssociationRequest,
  GetConfiguredModelAlgorithmAssociationResponse,
  GetConfiguredModelAlgorithmAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111) as any as S.Schema<GetConfiguredModelAlgorithmAssociationRequest>,
  output: __S(112) as any as S.Schema<GetConfiguredModelAlgorithmAssociationResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredModelAlgorithmAssociation",
}));

export type GetMLConfigurationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specific ML configuration.
 */
export const getMLConfiguration: API.OperationMethod<
  GetMLConfigurationRequest,
  GetMLConfigurationResponse,
  GetMLConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<GetMLConfigurationRequest>,
  output: __S(115) as any as S.Schema<GetMLConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMLConfiguration",
}));

export type GetMLInputChannelError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an ML input channel.
 */
export const getMLInputChannel: API.OperationMethod<
  GetMLInputChannelRequest,
  GetMLInputChannelResponse,
  GetMLInputChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116) as any as S.Schema<GetMLInputChannelRequest>,
  output: __S(117) as any as S.Schema<GetMLInputChannelResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMLInputChannel",
}));

export type GetTrainedModelError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a trained model.
 */
export const getTrainedModel: API.OperationMethod<
  GetTrainedModelRequest,
  GetTrainedModelResponse,
  GetTrainedModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118) as any as S.Schema<GetTrainedModelRequest>,
  output: __S(119) as any as S.Schema<GetTrainedModelResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrainedModel",
}));

export type GetTrainedModelInferenceJobError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a trained model inference job.
 */
export const getTrainedModelInferenceJob: API.OperationMethod<
  GetTrainedModelInferenceJobRequest,
  GetTrainedModelInferenceJobResponse,
  GetTrainedModelInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120) as any as S.Schema<GetTrainedModelInferenceJobRequest>,
  output: __S(127) as any as S.Schema<GetTrainedModelInferenceJobResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrainedModelInferenceJob",
}));

export type GetTrainingDatasetError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a training dataset.
 */
export const getTrainingDataset: API.OperationMethod<
  GetTrainingDatasetRequest,
  GetTrainingDatasetResponse,
  GetTrainingDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128) as any as S.Schema<GetTrainingDatasetRequest>,
  output: __S(129) as any as S.Schema<GetTrainingDatasetResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrainingDataset",
}));

export type ListAudienceExportJobsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the audience export jobs.
 */
export const listAudienceExportJobs: API.PaginatedOperationMethod<
  ListAudienceExportJobsRequest,
  ListAudienceExportJobsResponse,
  ListAudienceExportJobsError,
  Credentials | HttpClient.HttpClient,
  AudienceExportJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(130) as any as S.Schema<ListAudienceExportJobsRequest>,
  output: __S(133) as any as S.Schema<ListAudienceExportJobsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAudienceExportJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "audienceExportJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAudienceGenerationJobsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of audience generation jobs.
 */
export const listAudienceGenerationJobs: API.PaginatedOperationMethod<
  ListAudienceGenerationJobsRequest,
  ListAudienceGenerationJobsResponse,
  ListAudienceGenerationJobsError,
  Credentials | HttpClient.HttpClient,
  AudienceGenerationJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(134) as any as S.Schema<ListAudienceGenerationJobsRequest>,
  output: __S(137) as any as S.Schema<ListAudienceGenerationJobsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAudienceGenerationJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "audienceGenerationJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAudienceModelsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of audience models.
 */
export const listAudienceModels: API.PaginatedOperationMethod<
  ListAudienceModelsRequest,
  ListAudienceModelsResponse,
  ListAudienceModelsError,
  Credentials | HttpClient.HttpClient,
  AudienceModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(138) as any as S.Schema<ListAudienceModelsRequest>,
  output: __S(141) as any as S.Schema<ListAudienceModelsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAudienceModels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "audienceModels",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationConfiguredModelAlgorithmAssociationsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the configured model algorithm associations in a collaboration.
 */
export const listCollaborationConfiguredModelAlgorithmAssociations: API.PaginatedOperationMethod<
  ListCollaborationConfiguredModelAlgorithmAssociationsRequest,
  ListCollaborationConfiguredModelAlgorithmAssociationsResponse,
  ListCollaborationConfiguredModelAlgorithmAssociationsError,
  Credentials | HttpClient.HttpClient,
  CollaborationConfiguredModelAlgorithmAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142) as any as S.Schema<ListCollaborationConfiguredModelAlgorithmAssociationsRequest>,
  output: __S(
    145,
  ) as any as S.Schema<ListCollaborationConfiguredModelAlgorithmAssociationsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationConfiguredModelAlgorithmAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationConfiguredModelAlgorithmAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationMLInputChannelsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the ML input channels in a collaboration.
 */
export const listCollaborationMLInputChannels: API.PaginatedOperationMethod<
  ListCollaborationMLInputChannelsRequest,
  ListCollaborationMLInputChannelsResponse,
  ListCollaborationMLInputChannelsError,
  Credentials | HttpClient.HttpClient,
  CollaborationMLInputChannelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(146) as any as S.Schema<ListCollaborationMLInputChannelsRequest>,
  output: __S(149) as any as S.Schema<ListCollaborationMLInputChannelsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationMLInputChannels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationMLInputChannelsList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationTrainedModelExportJobsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the export jobs for a trained model in a collaboration.
 */
export const listCollaborationTrainedModelExportJobs: API.PaginatedOperationMethod<
  ListCollaborationTrainedModelExportJobsRequest,
  ListCollaborationTrainedModelExportJobsResponse,
  ListCollaborationTrainedModelExportJobsError,
  Credentials | HttpClient.HttpClient,
  CollaborationTrainedModelExportJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(150) as any as S.Schema<ListCollaborationTrainedModelExportJobsRequest>,
  output: __S(156) as any as S.Schema<ListCollaborationTrainedModelExportJobsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationTrainedModelExportJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationTrainedModelExportJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationTrainedModelInferenceJobsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of trained model inference jobs in a specified collaboration.
 */
export const listCollaborationTrainedModelInferenceJobs: API.PaginatedOperationMethod<
  ListCollaborationTrainedModelInferenceJobsRequest,
  ListCollaborationTrainedModelInferenceJobsResponse,
  ListCollaborationTrainedModelInferenceJobsError,
  Credentials | HttpClient.HttpClient,
  CollaborationTrainedModelInferenceJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(157) as any as S.Schema<ListCollaborationTrainedModelInferenceJobsRequest>,
  output: __S(160) as any as S.Schema<ListCollaborationTrainedModelInferenceJobsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationTrainedModelInferenceJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationTrainedModelInferenceJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationTrainedModelsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the trained models in a collaboration.
 */
export const listCollaborationTrainedModels: API.PaginatedOperationMethod<
  ListCollaborationTrainedModelsRequest,
  ListCollaborationTrainedModelsResponse,
  ListCollaborationTrainedModelsError,
  Credentials | HttpClient.HttpClient,
  CollaborationTrainedModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161) as any as S.Schema<ListCollaborationTrainedModelsRequest>,
  output: __S(164) as any as S.Schema<ListCollaborationTrainedModelsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationTrainedModels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationTrainedModels",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfiguredAudienceModelsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the configured audience models.
 */
export const listConfiguredAudienceModels: API.PaginatedOperationMethod<
  ListConfiguredAudienceModelsRequest,
  ListConfiguredAudienceModelsResponse,
  ListConfiguredAudienceModelsError,
  Credentials | HttpClient.HttpClient,
  ConfiguredAudienceModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165) as any as S.Schema<ListConfiguredAudienceModelsRequest>,
  output: __S(168) as any as S.Schema<ListConfiguredAudienceModelsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfiguredAudienceModels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configuredAudienceModels",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfiguredModelAlgorithmAssociationsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of configured model algorithm associations.
 */
export const listConfiguredModelAlgorithmAssociations: API.PaginatedOperationMethod<
  ListConfiguredModelAlgorithmAssociationsRequest,
  ListConfiguredModelAlgorithmAssociationsResponse,
  ListConfiguredModelAlgorithmAssociationsError,
  Credentials | HttpClient.HttpClient,
  ConfiguredModelAlgorithmAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(169) as any as S.Schema<ListConfiguredModelAlgorithmAssociationsRequest>,
  output: __S(172) as any as S.Schema<ListConfiguredModelAlgorithmAssociationsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfiguredModelAlgorithmAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configuredModelAlgorithmAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfiguredModelAlgorithmsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of configured model algorithms.
 */
export const listConfiguredModelAlgorithms: API.PaginatedOperationMethod<
  ListConfiguredModelAlgorithmsRequest,
  ListConfiguredModelAlgorithmsResponse,
  ListConfiguredModelAlgorithmsError,
  Credentials | HttpClient.HttpClient,
  ConfiguredModelAlgorithmSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(173) as any as S.Schema<ListConfiguredModelAlgorithmsRequest>,
  output: __S(176) as any as S.Schema<ListConfiguredModelAlgorithmsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfiguredModelAlgorithms",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configuredModelAlgorithms",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMLInputChannelsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of ML input channels.
 */
export const listMLInputChannels: API.PaginatedOperationMethod<
  ListMLInputChannelsRequest,
  ListMLInputChannelsResponse,
  ListMLInputChannelsError,
  Credentials | HttpClient.HttpClient,
  MLInputChannelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(177) as any as S.Schema<ListMLInputChannelsRequest>,
  output: __S(180) as any as S.Schema<ListMLInputChannelsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMLInputChannels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "mlInputChannelsList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tags for a provided resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(182) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTrainedModelInferenceJobsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of trained model inference jobs that match the request parameters.
 */
export const listTrainedModelInferenceJobs: API.PaginatedOperationMethod<
  ListTrainedModelInferenceJobsRequest,
  ListTrainedModelInferenceJobsResponse,
  ListTrainedModelInferenceJobsError,
  Credentials | HttpClient.HttpClient,
  TrainedModelInferenceJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(183) as any as S.Schema<ListTrainedModelInferenceJobsRequest>,
  output: __S(186) as any as S.Schema<ListTrainedModelInferenceJobsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrainedModelInferenceJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "trainedModelInferenceJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTrainedModelsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of trained models.
 */
export const listTrainedModels: API.PaginatedOperationMethod<
  ListTrainedModelsRequest,
  ListTrainedModelsResponse,
  ListTrainedModelsError,
  Credentials | HttpClient.HttpClient,
  TrainedModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(187) as any as S.Schema<ListTrainedModelsRequest>,
  output: __S(190) as any as S.Schema<ListTrainedModelsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrainedModels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "trainedModels",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTrainedModelVersionsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of trained model versions for a specified trained model. This operation allows you to view all versions of a trained model, including information about their status and creation details. You can use this to track the evolution of your trained models and select specific versions for inference or further training.
 */
export const listTrainedModelVersions: API.PaginatedOperationMethod<
  ListTrainedModelVersionsRequest,
  ListTrainedModelVersionsResponse,
  ListTrainedModelVersionsError,
  Credentials | HttpClient.HttpClient,
  TrainedModelSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(191) as any as S.Schema<ListTrainedModelVersionsRequest>,
  output: __S(190) as any as S.Schema<ListTrainedModelVersionsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrainedModelVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "trainedModels",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTrainingDatasetsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of training datasets.
 */
export const listTrainingDatasets: API.PaginatedOperationMethod<
  ListTrainingDatasetsRequest,
  ListTrainingDatasetsResponse,
  ListTrainingDatasetsError,
  Credentials | HttpClient.HttpClient,
  TrainingDatasetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(192) as any as S.Schema<ListTrainingDatasetsRequest>,
  output: __S(195) as any as S.Schema<ListTrainingDatasetsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrainingDatasets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "trainingDatasets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutConfiguredAudienceModelPolicyError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create or update the resource policy for a configured audience model.
 */
export const putConfiguredAudienceModelPolicy: API.OperationMethod<
  PutConfiguredAudienceModelPolicyRequest,
  PutConfiguredAudienceModelPolicyResponse,
  PutConfiguredAudienceModelPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196) as any as S.Schema<PutConfiguredAudienceModelPolicyRequest>,
  output: __S(197) as any as S.Schema<PutConfiguredAudienceModelPolicyResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfiguredAudienceModelPolicy",
}));

export type PutMLConfigurationError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns information about an ML configuration.
 */
export const putMLConfiguration: API.OperationMethod<
  PutMLConfigurationRequest,
  PutMLConfigurationResponse,
  PutMLConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198) as any as S.Schema<PutMLConfigurationRequest>,
  output: __S(1) as any as S.Schema<PutMLConfigurationResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMLConfiguration",
}));

export type StartAudienceExportJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Export an audience of a specified size after you have generated an audience.
 */
export const startAudienceExportJob: API.OperationMethod<
  StartAudienceExportJobRequest,
  StartAudienceExportJobResponse,
  StartAudienceExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199) as any as S.Schema<StartAudienceExportJobRequest>,
  output: __S(1) as any as S.Schema<StartAudienceExportJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAudienceExportJob",
}));

export type StartAudienceGenerationJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Information necessary to start the audience generation job.
 */
export const startAudienceGenerationJob: API.OperationMethod<
  StartAudienceGenerationJobRequest,
  StartAudienceGenerationJobResponse,
  StartAudienceGenerationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200) as any as S.Schema<StartAudienceGenerationJobRequest>,
  output: __S(201) as any as S.Schema<StartAudienceGenerationJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAudienceGenerationJob",
}));

export type StartTrainedModelExportJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the information necessary to start a trained model export job.
 */
export const startTrainedModelExportJob: API.OperationMethod<
  StartTrainedModelExportJobRequest,
  StartTrainedModelExportJobResponse,
  StartTrainedModelExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202) as any as S.Schema<StartTrainedModelExportJobRequest>,
  output: __S(3) as any as S.Schema<StartTrainedModelExportJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTrainedModelExportJob",
}));

export type StartTrainedModelInferenceJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Defines the information necessary to begin a trained model inference job.
 */
export const startTrainedModelInferenceJob: API.OperationMethod<
  StartTrainedModelInferenceJobRequest,
  StartTrainedModelInferenceJobResponse,
  StartTrainedModelInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203) as any as S.Schema<StartTrainedModelInferenceJobRequest>,
  output: __S(204) as any as S.Schema<StartTrainedModelInferenceJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartTrainedModelInferenceJob",
}));

export type TagResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds metadata tags to a specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205) as any as S.Schema<TagResourceRequest>,
  output: __S(1) as any as S.Schema<TagResourceResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes metadata tags from a specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206) as any as S.Schema<UntagResourceRequest>,
  output: __S(1) as any as S.Schema<UntagResourceResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateConfiguredAudienceModelError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the information necessary to update a configured audience model. Updates that impact audience generation jobs take effect when a new job starts, but do not impact currently running jobs.
 */
export const updateConfiguredAudienceModel: API.OperationMethod<
  UpdateConfiguredAudienceModelRequest,
  UpdateConfiguredAudienceModelResponse,
  UpdateConfiguredAudienceModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207) as any as S.Schema<UpdateConfiguredAudienceModelRequest>,
  output: __S(14) as any as S.Schema<UpdateConfiguredAudienceModelResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfiguredAudienceModel",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          trainedModelArn: S.String.pipe(T.HttpLabel("trainedModelArn")),
          versionIdentifier: S.optional(S.String).pipe(T.HttpQuery("versionIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelTrainedModelRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelTrainedModelResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          trainedModelInferenceJobArn: S.String.pipe(T.HttpLabel("trainedModelInferenceJobArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelTrainedModelInferenceJobRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelTrainedModelInferenceJobResponse",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          trainingDataStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          trainingDataEndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          name: S.String,
          trainingDatasetArn: S.String,
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(4)),
          description: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/audience-model" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateAudienceModelRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ audienceModelArn: S.String })).annotate({
        identifier: "CreateAudienceModelResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ s3Uri: S.String })).annotate({
        identifier: "S3ConfigMap",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3Destination: __S(7) })).annotate({
        identifier: "AudienceDestination",
      });
    case 1:
      return S.suspend(() => S.Struct({ destination: __S(8), roleArn: S.String })).annotate({
        identifier: "ConfiguredAudienceModelOutputConfig",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Array(S.Number);
    case 4:
      return S.suspend(() =>
        S.Struct({ audienceSizeType: S.String, audienceSizeBins: __S(11) }),
      ).annotate({ identifier: "AudienceSizeConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          audienceModelArn: S.String,
          outputConfig: __S(9),
          description: S.optional(S.String),
          sharedAudienceMetrics: __S(10),
          minMatchingSeedSize: S.optional(S.Number),
          audienceSizeConfig: S.optional(__S(12)),
          tags: S.optional(__S(4)),
          childResourceTagOnCreatePolicy: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configured-audience-model" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfiguredAudienceModelRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ configuredAudienceModelArn: S.String })).annotate({
        identifier: "CreateConfiguredAudienceModelResponse",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, regex: S.String })).annotate({
        identifier: "MetricDefinition",
      });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageUri: S.String,
          entrypoint: S.optional(__S(15)),
          arguments: S.optional(__S(15)),
          metricDefinitions: S.optional(__S(17)),
        }),
      ).annotate({ identifier: "ContainerConfig" });
    case 3:
      return S.suspend(() => S.Struct({ imageUri: S.String })).annotate({
        identifier: "InferenceContainerConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          roleArn: S.String,
          trainingContainerConfig: S.optional(__S(18)),
          inferenceContainerConfig: S.optional(__S(19)),
          tags: S.optional(__S(4)),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configured-model-algorithms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfiguredModelAlgorithmRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ configuredModelAlgorithmArn: S.String })).annotate({
        identifier: "CreateConfiguredModelAlgorithmResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ customDataIdentifiers: __S(15) })).annotate({
        identifier: "CustomEntityConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          entitiesToRedact: __S(10),
          customEntityConfig: S.optional(__S(22)),
        }),
      ).annotate({
        identifier: "LogRedactionConfiguration",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowedAccountIds: __S(15),
          filterPattern: S.optional(S.String),
          logType: S.optional(S.String),
          logRedactionConfiguration: S.optional(__S(23)),
        }),
      ).annotate({ identifier: "LogsConfigurationPolicy" });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.suspend(() => S.Struct({ noiseLevel: S.String })).annotate({
        identifier: "MetricsConfigurationPolicy",
      });
    case 3:
      return S.suspend(() => S.Struct({ unit: S.String, value: S.Number })).annotate({
        identifier: "TrainedModelArtifactMaxSize",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          containerLogs: S.optional(__S(25)),
          containerMetrics: S.optional(__S(26)),
          maxArtifactSize: S.optional(__S(27)),
        }),
      ).annotate({
        identifier: "TrainedModelsConfigurationPolicy",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxSize: __S(27),
          filesToExport: __S(10),
        }),
      ).annotate({
        identifier: "TrainedModelExportsConfigurationPolicy",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          containerLogs: S.optional(__S(25)),
          maxOutputSize: S.optional(__S(27)),
        }),
      ).annotate({
        identifier: "TrainedModelInferenceJobsConfigurationPolicy",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          trainedModels: S.optional(__S(28)),
          trainedModelExports: S.optional(__S(29)),
          trainedModelInferenceJobs: S.optional(__S(30)),
        }),
      ).annotate({
        identifier: "PrivacyConfigurationPolicies",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ policies: __S(31) })).annotate({
        identifier: "PrivacyConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredModelAlgorithmArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          privacyConfiguration: S.optional(__S(32)),
          tags: S.optional(__S(4)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/configured-model-algorithm-associations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfiguredModelAlgorithmAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ configuredModelAlgorithmAssociationArn: S.String }),
      ).annotate({
        identifier: "CreateConfiguredModelAlgorithmAssociationResponse",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          queryString: S.optional(S.String),
          analysisTemplateArn: S.optional(S.String),
          parameters: S.optional(__S(35)),
        }),
      ).annotate({
        identifier: "ProtectedQuerySQLParameters",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ spark: __S(35) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          number: S.optional(S.Number),
          properties: S.optional(__S(37)),
        }),
      ).annotate({
        identifier: "WorkerComputeConfiguration",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ worker: __S(38) })]);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sqlParameters: __S(36),
          computeConfiguration: S.optional(__S(39)),
          resultFormat: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ProtectedQueryInputParameters",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ protectedQueryInputParameters: __S(40) })]);
    case 2:
      return S.suspend(() => S.Struct({ dataSource: __S(41), roleArn: S.String })).annotate({
        identifier: "InputChannel",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          computePayerAccountId: S.optional(S.String),
          syntheticDataPayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "PayerConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredModelAlgorithmAssociations: __S(15),
          inputChannel: __S(42),
          name: S.String,
          retentionInDays: S.Number,
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(4)),
          payerConfiguration: S.optional(__S(43)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/ml-input-channels",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMLInputChannelRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ mlInputChannelArn: S.String })).annotate({
        identifier: "CreateMLInputChannelResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          instanceCount: S.optional(S.Number),
          instanceType: S.String,
          volumeSizeInGB: S.Number,
        }),
      ).annotate({ identifier: "ResourceConfig" });
    case 7:
      return S.suspend(() => S.Struct({ maxRuntimeInSeconds: S.optional(S.Number) })).annotate({
        identifier: "StoppingCondition",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          trainedModelArn: S.String,
          versionIdentifier: S.optional(S.String),
          channelName: S.String,
        }),
      ).annotate({
        identifier: "IncrementalTrainingDataChannel",
      });
    case 1:
      return S.Array(__S(48));
    case 2:
      return S.suspend(() =>
        S.Struct({
          mlInputChannelArn: S.String,
          channelName: S.String,
          s3DataDistributionType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelTrainingDataChannel" });
    case 3:
      return S.Array(__S(50));
    case 4:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          name: S.String,
          configuredModelAlgorithmAssociationArn: S.String,
          hyperparameters: S.optional(__S(35)),
          environment: S.optional(__S(35)),
          resourceConfig: __S(46),
          stoppingCondition: S.optional(__S(47)),
          incrementalTrainingDataChannels: S.optional(__S(49)),
          dataChannels: __S(51),
          trainingInputMode: S.optional(S.String),
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(4)),
          mlModelTrainingPayerAccountId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memberships/{membershipIdentifier}/trained-models" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTrainedModelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ trainedModelArn: S.String, versionIdentifier: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateTrainedModelResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ columnName: S.String, columnTypes: __S(10) })).annotate({
        identifier: "ColumnSchema",
      });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tableName: S.String, databaseName: S.String, catalogId: S.optional(S.String) }),
      ).annotate({ identifier: "GlueDataSource" });
    case 1:
      return S.suspend(() => S.Struct({ glueDataSource: __S(56) })).annotate({
        identifier: "DataSource",
      });
    case 2:
      return S.suspend(() => S.Struct({ schema: __S(55), dataSource: __S(57) })).annotate({
        identifier: "DatasetInputConfig",
      });
    case 3:
      return S.suspend(() => S.Struct({ type: S.String, inputConfig: __S(58) })).annotate({
        identifier: "Dataset",
      });
    case 4:
      return S.Array(__S(59));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          roleArn: S.String,
          trainingData: __S(60),
          tags: S.optional(__S(4)),
          description: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/training-dataset" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateTrainingDatasetRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ trainingDatasetArn: S.String })).annotate({
        identifier: "CreateTrainingDatasetResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          audienceGenerationJobArn: S.String.pipe(T.HttpLabel("audienceGenerationJobArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/audience-generation-job/{audienceGenerationJobArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAudienceGenerationJobRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ audienceModelArn: S.String.pipe(T.HttpLabel("audienceModelArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/audience-model/{audienceModelArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAudienceModelRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String.pipe(T.HttpLabel("configuredAudienceModelArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/configured-audience-model/{configuredAudienceModelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredAudienceModelRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String.pipe(T.HttpLabel("configuredAudienceModelArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/configured-audience-model/{configuredAudienceModelArn}/policy",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredAudienceModelPolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          configuredModelAlgorithmArn: S.String.pipe(T.HttpLabel("configuredModelAlgorithmArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/configured-model-algorithms/{configuredModelAlgorithmArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredModelAlgorithmRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuredModelAlgorithmAssociationArn: S.String.pipe(
            T.HttpLabel("configuredModelAlgorithmAssociationArn"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredModelAlgorithmAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/ml-configurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMLConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          mlInputChannelArn: S.String.pipe(T.HttpLabel("mlInputChannelArn")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMLInputChannelDataRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          trainedModelArn: S.String.pipe(T.HttpLabel("trainedModelArn")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          versionIdentifier: S.optional(S.String).pipe(T.HttpQuery("versionIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTrainedModelOutputRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ trainingDatasetArn: S.String.pipe(T.HttpLabel("trainingDatasetArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/training-dataset/{trainingDatasetArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTrainingDatasetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          audienceGenerationJobArn: S.String.pipe(T.HttpLabel("audienceGenerationJobArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audience-generation-job/{audienceGenerationJobArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAudienceGenerationJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ statusCode: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "StatusDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataSource: S.optional(__S(7)),
          roleArn: S.String,
          sqlParameters: S.optional(__S(36)),
          sqlComputeConfiguration: S.optional(__S(39)),
        }),
      ).annotate({
        identifier: "AudienceGenerationJobDataSource",
      });
    case 4:
      return S.suspend(() => S.Struct({ type: S.String, value: S.Number })).annotate({
        identifier: "AudienceSize",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ audienceSize: __S(76), score: S.optional(S.Number) }),
      ).annotate({ identifier: "RelevanceMetric" });
    case 6:
      return S.Array(__S(77));
    case 7:
      return S.suspend(() =>
        S.Struct({ relevanceMetrics: __S(78), recallMetric: S.optional(S.Number) }),
      ).annotate({ identifier: "AudienceQualityMetrics" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          audienceGenerationJobArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          status: S.String,
          statusDetails: S.optional(__S(74)),
          configuredAudienceModelArn: S.String,
          seedAudience: S.optional(__S(75)),
          includeSeedInOutput: S.optional(S.Boolean),
          collaborationId: S.optional(S.String),
          metrics: S.optional(__S(79)),
          startedBy: S.optional(S.String),
          tags: S.optional(__S(4)),
          protectedQueryIdentifier: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetAudienceGenerationJobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ audienceModelArn: S.String.pipe(T.HttpLabel("audienceModelArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audience-model/{audienceModelArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAudienceModelRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          trainingDataStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          trainingDataEndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          audienceModelArn: S.String,
          name: S.String,
          trainingDatasetArn: S.String,
          status: S.String,
          statusDetails: S.optional(__S(74)),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(4)),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetAudienceModelResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          configuredModelAlgorithmAssociationArn: S.String.pipe(
            T.HttpLabel("configuredModelAlgorithmAssociationArn"),
          ),
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCollaborationConfiguredModelAlgorithmAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          configuredModelAlgorithmAssociationArn: S.String,
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          configuredModelAlgorithmArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          creatorAccountId: S.String,
          privacyConfiguration: S.optional(__S(32)),
        }),
      ).annotate({
        identifier: "GetCollaborationConfiguredModelAlgorithmAssociationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          mlInputChannelArn: S.String.pipe(T.HttpLabel("mlInputChannelArn")),
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/ml-input-channels/{mlInputChannelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCollaborationMLInputChannelRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          remainingBudget: S.Number,
          budget: S.Number,
          budgetType: S.String,
          autoRefresh: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccessBudgetDetails" });
    case 7:
      return S.Array(__S(86));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          details: __S(87),
          aggregateRemainingBudget: S.Number,
        }),
      ).annotate({ identifier: "AccessBudget" });
    case 1:
      return S.Array(__S(88));
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ accessBudgets: __S(89) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          columnName: S.String,
          columnType: S.String,
          isPredictiveValue: S.Boolean,
        }),
      ).annotate({
        identifier: "SyntheticDataColumnProperties",
      });
    case 4:
      return S.Array(__S(91));
    case 5:
      return S.suspend(() => S.Struct({ columnMapping: __S(92) })).annotate({
        identifier: "ColumnClassificationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          epsilon: S.Number,
          maxMembershipInferenceAttackScore: S.Number,
          columnClassification: S.optional(__S(93)),
        }),
      ).annotate({
        identifier: "MLSyntheticDataParameters",
      });
    case 7:
      return S.suspend(() => S.Struct({ attackVersion: S.String, score: S.Number })).annotate({
        identifier: "MembershipInferenceAttackScore",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95));
    case 1:
      return S.suspend(() => S.Struct({ membershipInferenceAttackScores: __S(96) })).annotate({
        identifier: "DataPrivacyScores",
      });
    case 2:
      return S.suspend(() => S.Struct({ dataPrivacyScores: __S(97) })).annotate({
        identifier: "SyntheticDataEvaluationScores",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          syntheticDataParameters: __S(94),
          syntheticDataEvaluationScores: S.optional(__S(98)),
        }),
      ).annotate({
        identifier: "SyntheticDataConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          mlInputChannelArn: S.String,
          name: S.String,
          configuredModelAlgorithmAssociations: __S(15),
          status: S.String,
          statusDetails: S.optional(__S(74)),
          retentionInDays: S.Number,
          numberOfRecords: S.optional(S.Number),
          privacyBudgets: S.optional(__S(90)),
          description: S.optional(S.String),
          syntheticDataConfiguration: S.optional(__S(99)),
          payerConfiguration: S.optional(__S(43)),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          creatorAccountId: S.String,
        }),
      ).annotate({
        identifier: "GetCollaborationMLInputChannelResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          trainedModelArn: S.String.pipe(T.HttpLabel("trainedModelArn")),
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          versionIdentifier: S.optional(S.String).pipe(T.HttpQuery("versionIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCollaborationTrainedModelRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          channelName: S.String,
          versionIdentifier: S.optional(S.String),
          modelName: S.String,
        }),
      ).annotate({
        identifier: "IncrementalTrainingDataChannelOutput",
      });
    case 7:
      return S.Array(__S(102));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          trainedModelArn: S.String,
          versionIdentifier: S.optional(S.String),
          incrementalTrainingDataChannels: S.optional(__S(103)),
          name: S.String,
          description: S.optional(S.String),
          status: S.String,
          statusDetails: S.optional(__S(74)),
          configuredModelAlgorithmAssociationArn: S.String,
          resourceConfig: S.optional(__S(46)),
          trainingInputMode: S.optional(S.String),
          stoppingCondition: S.optional(__S(47)),
          metricsStatus: S.optional(S.String),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(S.String),
          logsStatusDetails: S.optional(S.String),
          trainingContainerImageDigest: S.optional(S.String),
          mlModelTrainingPayerAccountId: S.optional(S.String),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          creatorAccountId: S.String,
        }),
      ).annotate({
        identifier: "GetCollaborationTrainedModelResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String.pipe(T.HttpLabel("configuredAudienceModelArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/configured-audience-model/{configuredAudienceModelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfiguredAudienceModelRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          configuredAudienceModelArn: S.String,
          name: S.String,
          audienceModelArn: S.String,
          outputConfig: __S(9),
          description: S.optional(S.String),
          status: S.String,
          sharedAudienceMetrics: __S(10),
          minMatchingSeedSize: S.optional(S.Number),
          audienceSizeConfig: S.optional(__S(12)),
          tags: S.optional(__S(4)),
          childResourceTagOnCreatePolicy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetConfiguredAudienceModelResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String.pipe(T.HttpLabel("configuredAudienceModelArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/configured-audience-model/{configuredAudienceModelArn}/policy",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfiguredAudienceModelPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String,
          configuredAudienceModelPolicy: S.String,
          policyHash: S.String,
        }),
      ).annotate({
        identifier: "GetConfiguredAudienceModelPolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          configuredModelAlgorithmArn: S.String.pipe(T.HttpLabel("configuredModelAlgorithmArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/configured-model-algorithms/{configuredModelAlgorithmArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfiguredModelAlgorithmRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          configuredModelAlgorithmArn: S.String,
          name: S.String,
          trainingContainerConfig: S.optional(__S(18)),
          inferenceContainerConfig: S.optional(__S(19)),
          roleArn: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(4)),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetConfiguredModelAlgorithmResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          configuredModelAlgorithmAssociationArn: S.String.pipe(
            T.HttpLabel("configuredModelAlgorithmAssociationArn"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfiguredModelAlgorithmAssociationRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          configuredModelAlgorithmAssociationArn: S.String,
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          configuredModelAlgorithmArn: S.String,
          name: S.String,
          privacyConfiguration: S.optional(__S(32)),
          description: S.optional(S.String),
          tags: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "GetConfiguredModelAlgorithmAssociationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}/ml-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMLConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ destination: S.optional(__S(8)), roleArn: S.String }),
      ).annotate({ identifier: "MLOutputConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String,
          defaultOutputLocation: __S(114),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "GetMLConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          mlInputChannelArn: S.String.pipe(T.HttpLabel("mlInputChannelArn")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMLInputChannelRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          mlInputChannelArn: S.String,
          name: S.String,
          configuredModelAlgorithmAssociations: __S(15),
          status: S.String,
          statusDetails: S.optional(__S(74)),
          retentionInDays: S.Number,
          numberOfRecords: S.optional(S.Number),
          privacyBudgets: S.optional(__S(90)),
          description: S.optional(S.String),
          syntheticDataConfiguration: S.optional(__S(99)),
          payerConfiguration: S.optional(__S(43)),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          inputChannel: __S(42),
          protectedQueryIdentifier: S.optional(S.String),
          numberOfFiles: S.optional(S.Number),
          sizeInGb: S.optional(S.Number),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(4)),
        }),
      ).annotate({
        identifier: "GetMLInputChannelResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          trainedModelArn: S.String.pipe(T.HttpLabel("trainedModelArn")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          versionIdentifier: S.optional(S.String).pipe(T.HttpQuery("versionIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTrainedModelRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          trainedModelArn: S.String,
          versionIdentifier: S.optional(S.String),
          incrementalTrainingDataChannels: S.optional(__S(103)),
          name: S.String,
          description: S.optional(S.String),
          status: S.String,
          statusDetails: S.optional(__S(74)),
          configuredModelAlgorithmAssociationArn: S.String,
          resourceConfig: S.optional(__S(46)),
          trainingInputMode: S.optional(S.String),
          stoppingCondition: S.optional(__S(47)),
          metricsStatus: S.optional(S.String),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(S.String),
          logsStatusDetails: S.optional(S.String),
          trainingContainerImageDigest: S.optional(S.String),
          mlModelTrainingPayerAccountId: S.optional(S.String),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          hyperparameters: S.optional(__S(35)),
          environment: S.optional(__S(35)),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(4)),
          dataChannels: __S(51),
        }),
      ).annotate({ identifier: "GetTrainedModelResponse" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          trainedModelInferenceJobArn: S.String.pipe(T.HttpLabel("trainedModelInferenceJobArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTrainedModelInferenceJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ instanceType: S.String, instanceCount: S.optional(S.Number) }),
      ).annotate({ identifier: "InferenceResourceConfig" });
    case 2:
      return S.suspend(() => S.Struct({ accountId: S.String })).annotate({
        identifier: "InferenceReceiverMember",
      });
    case 3:
      return S.Array(__S(122));
    case 4:
      return S.suspend(() =>
        S.Struct({ accept: S.optional(S.String), members: __S(123) }),
      ).annotate({
        identifier: "InferenceOutputConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ mlInputChannelArn: S.String })).annotate({
        identifier: "ModelInferenceDataSource",
      });
    case 6:
      return S.suspend(() => S.Struct({ maxPayloadInMB: S.optional(S.Number) })).annotate({
        identifier: "InferenceContainerExecutionParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          trainedModelInferenceJobArn: S.String,
          configuredModelAlgorithmAssociationArn: S.optional(S.String),
          name: S.String,
          status: S.String,
          trainedModelArn: S.String,
          trainedModelVersionIdentifier: S.optional(S.String),
          resourceConfig: __S(121),
          outputConfiguration: __S(124),
          membershipIdentifier: S.String,
          dataSource: __S(125),
          containerExecutionParameters: S.optional(__S(126)),
          statusDetails: S.optional(__S(74)),
          description: S.optional(S.String),
          inferenceContainerImageDigest: S.optional(S.String),
          environment: S.optional(__S(35)),
          kmsKeyArn: S.optional(S.String),
          metricsStatus: S.optional(S.String),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(S.String),
          logsStatusDetails: S.optional(S.String),
          tags: S.optional(__S(4)),
          mlModelInferencePayerAccountId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetTrainedModelInferenceJobResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ trainingDatasetArn: S.String.pipe(T.HttpLabel("trainingDatasetArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/training-dataset/{trainingDatasetArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTrainingDatasetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          trainingDatasetArn: S.String,
          name: S.String,
          trainingData: __S(60),
          status: S.String,
          roleArn: S.String,
          tags: S.optional(__S(4)),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetTrainingDatasetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          audienceGenerationJobArn: S.optional(S.String).pipe(
            T.HttpQuery("audienceGenerationJobArn"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audience-export-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAudienceExportJobsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          name: S.String,
          audienceGenerationJobArn: S.String,
          audienceSize: __S(76),
          description: S.optional(S.String),
          status: S.String,
          statusDetails: S.optional(__S(74)),
          outputLocation: S.optional(S.String),
        }),
      ).annotate({ identifier: "AudienceExportJobSummary" });
    case 4:
      return S.Array(__S(131));
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), audienceExportJobs: __S(132) }),
      ).annotate({
        identifier: "ListAudienceExportJobsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          configuredAudienceModelArn: S.optional(S.String).pipe(
            T.HttpQuery("configuredAudienceModelArn"),
          ),
          collaborationId: S.optional(S.String).pipe(T.HttpQuery("collaborationId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audience-generation-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAudienceGenerationJobsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          audienceGenerationJobArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          status: S.String,
          configuredAudienceModelArn: S.String,
          collaborationId: S.optional(S.String),
          startedBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AudienceGenerationJobSummary",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          audienceGenerationJobs: __S(136),
        }),
      ).annotate({
        identifier: "ListAudienceGenerationJobsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/audience-model" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAudienceModelsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          audienceModelArn: S.String,
          name: S.String,
          trainingDatasetArn: S.String,
          status: S.String,
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "AudienceModelSummary" });
    case 4:
      return S.Array(__S(139));
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), audienceModels: __S(140) }),
      ).annotate({
        identifier: "ListAudienceModelsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/configured-model-algorithm-associations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationConfiguredModelAlgorithmAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          configuredModelAlgorithmAssociationArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          configuredModelAlgorithmArn: S.String,
          creatorAccountId: S.String,
        }),
      ).annotate({
        identifier: "CollaborationConfiguredModelAlgorithmAssociationSummary",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationConfiguredModelAlgorithmAssociations: __S(144),
        }),
      ).annotate({
        identifier: "ListCollaborationConfiguredModelAlgorithmAssociationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/ml-input-channels",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationMLInputChannelsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          name: S.String,
          configuredModelAlgorithmAssociations: __S(15),
          mlInputChannelArn: S.String,
          status: S.String,
          creatorAccountId: S.String,
          description: S.optional(S.String),
          payerConfiguration: S.optional(__S(43)),
        }),
      ).annotate({
        identifier: "CollaborationMLInputChannelSummary",
      });
    case 4:
      return S.Array(__S(147));
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationMLInputChannelsList: __S(148),
        }),
      ).annotate({
        identifier: "ListCollaborationMLInputChannelsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          trainedModelArn: S.String.pipe(T.HttpLabel("trainedModelArn")),
          trainedModelVersionIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("trainedModelVersionIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}/export-jobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationTrainedModelExportJobsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ accountId: S.String })).annotate({
        identifier: "TrainedModelExportReceiverMember",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151));
    case 1:
      return S.suspend(() => S.Struct({ members: __S(152) })).annotate({
        identifier: "TrainedModelExportOutputConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          name: S.String,
          outputConfiguration: __S(153),
          status: S.String,
          statusDetails: S.optional(__S(74)),
          description: S.optional(S.String),
          creatorAccountId: S.String,
          trainedModelArn: S.String,
          trainedModelVersionIdentifier: S.optional(S.String),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
        }),
      ).annotate({
        identifier: "CollaborationTrainedModelExportJobSummary",
      });
    case 3:
      return S.Array(__S(154));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationTrainedModelExportJobs: __S(155),
        }),
      ).annotate({
        identifier: "ListCollaborationTrainedModelExportJobsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          trainedModelArn: S.optional(S.String).pipe(T.HttpQuery("trainedModelArn")),
          trainedModelVersionIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("trainedModelVersionIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/trained-model-inference-jobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationTrainedModelInferenceJobsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          trainedModelInferenceJobArn: S.String,
          configuredModelAlgorithmAssociationArn: S.optional(S.String),
          membershipIdentifier: S.String,
          trainedModelArn: S.String,
          trainedModelVersionIdentifier: S.optional(S.String),
          collaborationIdentifier: S.String,
          status: S.String,
          outputConfiguration: __S(124),
          name: S.String,
          description: S.optional(S.String),
          metricsStatus: S.optional(S.String),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(S.String),
          logsStatusDetails: S.optional(S.String),
          mlModelInferencePayerAccountId: S.optional(S.String),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          creatorAccountId: S.String,
        }),
      ).annotate({
        identifier: "CollaborationTrainedModelInferenceJobSummary",
      });
    case 7:
      return S.Array(__S(158));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationTrainedModelInferenceJobs: __S(159),
        }),
      ).annotate({
        identifier: "ListCollaborationTrainedModelInferenceJobsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/trained-models",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationTrainedModelsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          trainedModelArn: S.String,
          name: S.String,
          versionIdentifier: S.optional(S.String),
          incrementalTrainingDataChannels: S.optional(__S(103)),
          description: S.optional(S.String),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          status: S.String,
          configuredModelAlgorithmAssociationArn: S.String,
          creatorAccountId: S.String,
          mlModelTrainingPayerAccountId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CollaborationTrainedModelSummary",
      });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationTrainedModels: __S(163),
        }),
      ).annotate({
        identifier: "ListCollaborationTrainedModelsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configured-audience-model" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfiguredAudienceModelsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          name: S.String,
          audienceModelArn: S.String,
          outputConfig: __S(9),
          description: S.optional(S.String),
          configuredAudienceModelArn: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "ConfiguredAudienceModelSummary",
      });
    case 7:
      return S.Array(__S(166));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          configuredAudienceModels: __S(167),
        }),
      ).annotate({
        identifier: "ListConfiguredAudienceModelsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/configured-model-algorithm-associations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfiguredModelAlgorithmAssociationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          configuredModelAlgorithmAssociationArn: S.String,
          configuredModelAlgorithmArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
        }),
      ).annotate({
        identifier: "ConfiguredModelAlgorithmAssociationSummary",
      });
    case 3:
      return S.Array(__S(170));
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          configuredModelAlgorithmAssociations: __S(171),
        }),
      ).annotate({
        identifier: "ListConfiguredModelAlgorithmAssociationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configured-model-algorithms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfiguredModelAlgorithmsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          configuredModelAlgorithmArn: S.String,
          name: S.String,
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfiguredModelAlgorithmSummary",
      });
    case 7:
      return S.Array(__S(174));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          configuredModelAlgorithms: __S(175),
        }),
      ).annotate({
        identifier: "ListConfiguredModelAlgorithmsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}/ml-input-channels" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMLInputChannelsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          name: S.String,
          configuredModelAlgorithmAssociations: __S(15),
          protectedQueryIdentifier: S.optional(S.String),
          mlInputChannelArn: S.String,
          status: S.String,
          description: S.optional(S.String),
          payerConfiguration: S.optional(__S(43)),
        }),
      ).annotate({ identifier: "MLInputChannelSummary" });
    case 3:
      return S.Array(__S(178));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), mlInputChannelsList: __S(179) }),
      ).annotate({
        identifier: "ListMLInputChannelsResponse",
      });
    case 5:
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
    case 6:
      return S.suspend(() => S.Struct({ tags: __S(4) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          trainedModelArn: S.optional(S.String).pipe(T.HttpQuery("trainedModelArn")),
          trainedModelVersionIdentifier: S.optional(S.String).pipe(
            T.HttpQuery("trainedModelVersionIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/trained-model-inference-jobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTrainedModelInferenceJobsRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          trainedModelInferenceJobArn: S.String,
          configuredModelAlgorithmAssociationArn: S.optional(S.String),
          membershipIdentifier: S.String,
          trainedModelArn: S.String,
          trainedModelVersionIdentifier: S.optional(S.String),
          collaborationIdentifier: S.String,
          status: S.String,
          outputConfiguration: __S(124),
          name: S.String,
          description: S.optional(S.String),
          metricsStatus: S.optional(S.String),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(S.String),
          logsStatusDetails: S.optional(S.String),
          mlModelInferencePayerAccountId: S.optional(S.String),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "TrainedModelInferenceJobSummary",
      });
    case 1:
      return S.Array(__S(184));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          trainedModelInferenceJobs: __S(185),
        }),
      ).annotate({
        identifier: "ListTrainedModelInferenceJobsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}/trained-models" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTrainedModelsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          trainedModelArn: S.String,
          versionIdentifier: S.optional(S.String),
          incrementalTrainingDataChannels: S.optional(__S(103)),
          name: S.String,
          description: S.optional(S.String),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          status: S.String,
          configuredModelAlgorithmAssociationArn: S.String,
          mlModelTrainingPayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "TrainedModelSummary" });
    case 5:
      return S.Array(__S(188));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), trainedModels: __S(189) }),
      ).annotate({
        identifier: "ListTrainedModelsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          trainedModelArn: S.String.pipe(T.HttpLabel("trainedModelArn")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/versions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTrainedModelVersionsRequest",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/training-dataset" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTrainingDatasetsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          trainingDatasetArn: S.String,
          name: S.String,
          status: S.String,
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "TrainingDatasetSummary" });
    case 2:
      return S.Array(__S(193));
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), trainingDatasets: __S(194) }),
      ).annotate({
        identifier: "ListTrainingDatasetsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String.pipe(T.HttpLabel("configuredAudienceModelArn")),
          configuredAudienceModelPolicy: S.String,
          previousPolicyHash: S.optional(S.String),
          policyExistenceCondition: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/configured-audience-model/{configuredAudienceModelArn}/policy",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutConfiguredAudienceModelPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ configuredAudienceModelPolicy: S.String, policyHash: S.String }),
      ).annotate({
        identifier: "PutConfiguredAudienceModelPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          defaultOutputLocation: __S(114),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/memberships/{membershipIdentifier}/ml-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutMLConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          audienceGenerationJobArn: S.String,
          audienceSize: __S(76),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/audience-export-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartAudienceExportJobRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          configuredAudienceModelArn: S.String,
          seedAudience: __S(75),
          includeSeedInOutput: S.optional(S.Boolean),
          collaborationId: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/audience-generation-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartAudienceGenerationJobRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ audienceGenerationJobArn: S.String })).annotate({
        identifier: "StartAudienceGenerationJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          trainedModelArn: S.String.pipe(T.HttpLabel("trainedModelArn")),
          trainedModelVersionIdentifier: S.optional(S.String),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          outputConfiguration: __S(153),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/export-jobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartTrainedModelExportJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          name: S.String,
          trainedModelArn: S.String,
          trainedModelVersionIdentifier: S.optional(S.String),
          configuredModelAlgorithmAssociationArn: S.optional(S.String),
          resourceConfig: __S(121),
          outputConfiguration: __S(124),
          dataSource: __S(125),
          description: S.optional(S.String),
          containerExecutionParameters: S.optional(__S(126)),
          environment: S.optional(__S(35)),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(__S(4)),
          mlModelInferencePayerAccountId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/trained-model-inference-jobs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartTrainedModelInferenceJobRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ trainedModelInferenceJobArn: S.String })).annotate({
        identifier: "StartTrainedModelInferenceJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(4) }).pipe(
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
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(15).pipe(T.HttpQuery("tagKeys")),
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String.pipe(T.HttpLabel("configuredAudienceModelArn")),
          outputConfig: S.optional(__S(9)),
          audienceModelArn: S.optional(S.String),
          sharedAudienceMetrics: S.optional(__S(10)),
          minMatchingSeedSize: S.optional(S.Number),
          audienceSizeConfig: S.optional(__S(12)),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/configured-audience-model/{configuredAudienceModelArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfiguredAudienceModelRequest",
      });
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
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
  }
}
