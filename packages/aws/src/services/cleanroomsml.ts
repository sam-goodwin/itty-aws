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
const CancelTrainedModelRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<CancelTrainedModelRequest>;
export interface CancelTrainedModelResponse {}
const CancelTrainedModelResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CancelTrainedModelResponse>;
export type TrainedModelInferenceJobArn = string;
export interface CancelTrainedModelInferenceJobRequest {
  membershipIdentifier: string;
  trainedModelInferenceJobArn: string;
}
const CancelTrainedModelInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CancelTrainedModelInferenceJobRequest>;
export interface CancelTrainedModelInferenceJobResponse {}
const CancelTrainedModelInferenceJobResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CancelTrainedModelInferenceJobResponse>;
export type NameString = string;
export type TrainingDatasetArn = string;
export type KmsKeyArn = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 4);
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
const CreateAudienceModelRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CreateAudienceModelRequest>;
export type AudienceModelArn = string;
export interface CreateAudienceModelResponse {
  audienceModelArn: string;
}
const CreateAudienceModelResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateAudienceModelResponse>;
export type S3Path = string;
export interface S3ConfigMap {
  s3Uri: string;
}
const S3ConfigMap = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<S3ConfigMap>;
export interface AudienceDestination {
  s3Destination: S3ConfigMap;
}
const AudienceDestination = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<AudienceDestination>;
export type IamRoleArn = string;
export interface ConfiguredAudienceModelOutputConfig {
  destination: AudienceDestination;
  roleArn: string;
}
const ConfiguredAudienceModelOutputConfig = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<ConfiguredAudienceModelOutputConfig>;
export type SharedAudienceMetrics = "ALL" | "NONE" | (string & {});
const SharedAudienceMetrics = S.String;

export type MetricsList = SharedAudienceMetrics[];
const MetricsList = /*@__PURE__*/ __L.at(__c1, 2);
export type MinMatchingSeedSize = number;
export type AudienceSizeType = "ABSOLUTE" | "PERCENTAGE" | (string & {});
const AudienceSizeType = S.String;

export type AudienceSizeValue = number;
export type AudienceSizeBins = number[];
const AudienceSizeBins = /*@__PURE__*/ __L.at(__c1, 3);
export interface AudienceSizeConfig {
  audienceSizeType: AudienceSizeType;
  audienceSizeBins: number[];
}
const AudienceSizeConfig = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<AudienceSizeConfig>;
export type TagOnCreatePolicy = "FROM_PARENT_RESOURCE" | "NONE" | (string & {});
const TagOnCreatePolicy = S.String;

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
const CreateConfiguredAudienceModelRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateConfiguredAudienceModelRequest>;
export type ConfiguredAudienceModelArn = string;
export interface CreateConfiguredAudienceModelResponse {
  configuredAudienceModelArn: string;
}
const CreateConfiguredAudienceModelResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateConfiguredAudienceModelResponse>;
export type AlgorithmImage = string;
export type ContainerEntrypointString = string;
export type ContainerEntrypoint = string[];
const ContainerEntrypoint = /*@__PURE__*/ __L.at(__c1, 7);
export type ContainerArgument = string;
export type ContainerArguments = string[];
const ContainerArguments = ContainerEntrypoint as any as S.Schema<ContainerArguments>;
export type MetricName = string;
export type MetricRegex = string;
export interface MetricDefinition {
  name: string;
  regex: string;
}
const MetricDefinition = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<MetricDefinition>;
export type MetricDefinitionList = MetricDefinition[];
const MetricDefinitionList = /*@__PURE__*/ __L.at(__c2, 1);
export interface ContainerConfig {
  imageUri: string;
  entrypoint?: string[];
  arguments?: string[];
  metricDefinitions?: MetricDefinition[];
}
const ContainerConfig = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<ContainerConfig>;
export interface InferenceContainerConfig {
  imageUri: string;
}
const InferenceContainerConfig = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<InferenceContainerConfig>;
export interface CreateConfiguredModelAlgorithmRequest {
  name: string;
  description?: string;
  roleArn: string;
  trainingContainerConfig?: ContainerConfig;
  inferenceContainerConfig?: InferenceContainerConfig;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
const CreateConfiguredModelAlgorithmRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateConfiguredModelAlgorithmRequest>;
export type ConfiguredModelAlgorithmArn = string;
export interface CreateConfiguredModelAlgorithmResponse {
  configuredModelAlgorithmArn: string;
}
const CreateConfiguredModelAlgorithmResponse = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateConfiguredModelAlgorithmResponse>;
export type AccountIdList = string[];
const AccountIdList = ContainerEntrypoint as any as S.Schema<AccountIdList>;
export type LogType = "ALL" | "ERROR_SUMMARY" | (string & {});
const LogType = S.String;

export type EntityType =
  | "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION"
  | "NUMBERS"
  | "CUSTOM"
  | (string & {});
export type EntityTypeList = EntityType[];
const EntityTypeList = MetricsList as any as S.Schema<EntityTypeList>;
export type CustomDataIdentifier = string;
export type CustomDataIdentifierList = string[];
const CustomDataIdentifierList = ContainerEntrypoint as any as S.Schema<CustomDataIdentifierList>;
export interface CustomEntityConfig {
  customDataIdentifiers: string[];
}
const CustomEntityConfig = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<CustomEntityConfig>;
export interface LogRedactionConfiguration {
  entitiesToRedact: EntityType[];
  customEntityConfig?: CustomEntityConfig;
}
const LogRedactionConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<LogRedactionConfiguration>;
export interface LogsConfigurationPolicy {
  allowedAccountIds: string[];
  filterPattern?: string;
  logType?: LogType;
  logRedactionConfiguration?: LogRedactionConfiguration;
}
const LogsConfigurationPolicy = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<LogsConfigurationPolicy>;
export type LogsConfigurationPolicyList = LogsConfigurationPolicy[];
const LogsConfigurationPolicyList = /*@__PURE__*/ __L.at(__c3, 1);
export type NoiseLevelType = "HIGH" | "MEDIUM" | "LOW" | "NONE" | (string & {});
const NoiseLevelType = S.String;

export interface MetricsConfigurationPolicy {
  noiseLevel: NoiseLevelType;
}
const MetricsConfigurationPolicy = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<MetricsConfigurationPolicy>;
export type TrainedModelArtifactMaxSizeUnitType = "GB" | (string & {});
const TrainedModelArtifactMaxSizeUnitType = S.String;

export type TrainedModelArtifactMaxSizeValue = number;
export interface TrainedModelArtifactMaxSize {
  unit: TrainedModelArtifactMaxSizeUnitType;
  value: number;
}
const TrainedModelArtifactMaxSize = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<TrainedModelArtifactMaxSize>;
export interface TrainedModelsConfigurationPolicy {
  containerLogs?: LogsConfigurationPolicy[];
  containerMetrics?: MetricsConfigurationPolicy;
  maxArtifactSize?: TrainedModelArtifactMaxSize;
}
const TrainedModelsConfigurationPolicy = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<TrainedModelsConfigurationPolicy>;
export type TrainedModelExportsMaxSizeUnitType = "GB" | (string & {});
export type TrainedModelExportsMaxSizeValue = number;
export interface TrainedModelExportsMaxSize {
  unit: TrainedModelExportsMaxSizeUnitType;
  value: number;
}
const TrainedModelExportsMaxSize =
  TrainedModelArtifactMaxSize as any as S.Schema<TrainedModelExportsMaxSize>;
export type TrainedModelExportFileType = "MODEL" | "OUTPUT" | (string & {});
export type TrainedModelExportFileTypeList = TrainedModelExportFileType[];
const TrainedModelExportFileTypeList =
  MetricsList as any as S.Schema<TrainedModelExportFileTypeList>;
export interface TrainedModelExportsConfigurationPolicy {
  maxSize: TrainedModelExportsMaxSize;
  filesToExport: TrainedModelExportFileType[];
}
const TrainedModelExportsConfigurationPolicy = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<TrainedModelExportsConfigurationPolicy>;
export type TrainedModelInferenceMaxOutputSizeUnitType = "GB" | (string & {});
export type TrainedModelInferenceMaxOutputSizeValue = number;
export interface TrainedModelInferenceMaxOutputSize {
  unit: TrainedModelInferenceMaxOutputSizeUnitType;
  value: number;
}
const TrainedModelInferenceMaxOutputSize =
  TrainedModelArtifactMaxSize as any as S.Schema<TrainedModelInferenceMaxOutputSize>;
export interface TrainedModelInferenceJobsConfigurationPolicy {
  containerLogs?: LogsConfigurationPolicy[];
  maxOutputSize?: TrainedModelInferenceMaxOutputSize;
}
const TrainedModelInferenceJobsConfigurationPolicy = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<TrainedModelInferenceJobsConfigurationPolicy>;
export interface PrivacyConfigurationPolicies {
  trainedModels?: TrainedModelsConfigurationPolicy;
  trainedModelExports?: TrainedModelExportsConfigurationPolicy;
  trainedModelInferenceJobs?: TrainedModelInferenceJobsConfigurationPolicy;
}
const PrivacyConfigurationPolicies = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<PrivacyConfigurationPolicies>;
export interface PrivacyConfiguration {
  policies: PrivacyConfigurationPolicies;
}
const PrivacyConfiguration = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<PrivacyConfiguration>;
export interface CreateConfiguredModelAlgorithmAssociationRequest {
  membershipIdentifier: string;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
  privacyConfiguration?: PrivacyConfiguration;
  tags?: { [key: string]: string | undefined };
}
const CreateConfiguredModelAlgorithmAssociationRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateConfiguredModelAlgorithmAssociationRequest>;
export type ConfiguredModelAlgorithmAssociationArn = string;
export interface CreateConfiguredModelAlgorithmAssociationResponse {
  configuredModelAlgorithmAssociationArn: string;
}
const CreateConfiguredModelAlgorithmAssociationResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateConfiguredModelAlgorithmAssociationResponse>;
export type ConfiguredModelAlgorithmAssociationArnList = string[];
const ConfiguredModelAlgorithmAssociationArnList =
  ContainerEntrypoint as any as S.Schema<ConfiguredModelAlgorithmAssociationArnList>;
export type AnalysisTemplateArn = string;
export type ParameterName = string;
export type ParameterValue = string;
export type ParameterMap = { [key: string]: string | undefined };
const ParameterMap = /*@__PURE__*/ __L.at(__c4, 3);
export interface ProtectedQuerySQLParameters {
  queryString?: string;
  analysisTemplateArn?: string;
  parameters?: { [key: string]: string | undefined };
}
const ProtectedQuerySQLParameters = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<ProtectedQuerySQLParameters>;
export type WorkerComputeType = "CR.1X" | "CR.4X" | "CR.8X" | (string & {});
const WorkerComputeType = S.String;

export type SparkPropertyKey = string;
export type SparkPropertyValue = string;
export type SparkProperties = { [key: string]: string | undefined };
const SparkProperties = ParameterMap as any as S.Schema<SparkProperties>;
export type WorkerComputeConfigurationProperties = { spark: { [key: string]: string | undefined } };
const WorkerComputeConfigurationProperties = /*@__PURE__*/ __L.at(__c4, 5);
export interface WorkerComputeConfiguration {
  type?: WorkerComputeType;
  number?: number;
  properties?: WorkerComputeConfigurationProperties;
}
const WorkerComputeConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<WorkerComputeConfiguration>;
export type ComputeConfiguration = { worker: WorkerComputeConfiguration };
const ComputeConfiguration = /*@__PURE__*/ __L.at(__c4, 7);
export type ResultFormat = "CSV" | "PARQUET" | (string & {});
const ResultFormat = S.String;

export interface ProtectedQueryInputParameters {
  sqlParameters: ProtectedQuerySQLParameters;
  computeConfiguration?: ComputeConfiguration;
  resultFormat?: ResultFormat;
}
const ProtectedQueryInputParameters = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ProtectedQueryInputParameters>;
export type InputChannelDataSource = {
  protectedQueryInputParameters: ProtectedQueryInputParameters;
};
const InputChannelDataSource = /*@__PURE__*/ __L.at(__c5, 1);
export interface InputChannel {
  dataSource: InputChannelDataSource;
  roleArn: string;
}
const InputChannel = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<InputChannel>;
export type AccountId = string;
export interface PayerConfiguration {
  computePayerAccountId?: string;
  syntheticDataPayerAccountId?: string;
}
const PayerConfiguration = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<PayerConfiguration>;
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
const CreateMLInputChannelRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<CreateMLInputChannelRequest>;
export type MLInputChannelArn = string;
export interface CreateMLInputChannelResponse {
  mlInputChannelArn: string;
}
const CreateMLInputChannelResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CreateMLInputChannelResponse>;
export type HyperParameters = { [key: string]: string | undefined };
const HyperParameters = ParameterMap as any as S.Schema<HyperParameters>;
export type Environment = { [key: string]: string | undefined };
const Environment = ParameterMap as any as S.Schema<Environment>;
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
const InstanceType = S.String;

export interface ResourceConfig {
  instanceCount?: number;
  instanceType: InstanceType;
  volumeSizeInGB: number;
}
const ResourceConfig = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<ResourceConfig>;
export interface StoppingCondition {
  maxRuntimeInSeconds?: number;
}
const StoppingCondition = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<StoppingCondition>;
export type ModelTrainingDataChannelName = string;
export interface IncrementalTrainingDataChannel {
  trainedModelArn: string;
  versionIdentifier?: string;
  channelName: string;
}
const IncrementalTrainingDataChannel = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<IncrementalTrainingDataChannel>;
export type IncrementalTrainingDataChannels = IncrementalTrainingDataChannel[];
const IncrementalTrainingDataChannels = /*@__PURE__*/ __L.at(__c6, 1);
export type S3DataDistributionType = "FullyReplicated" | "ShardedByS3Key" | (string & {});
const S3DataDistributionType = S.String;

export interface ModelTrainingDataChannel {
  mlInputChannelArn: string;
  channelName: string;
  s3DataDistributionType?: S3DataDistributionType;
}
const ModelTrainingDataChannel = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ModelTrainingDataChannel>;
export type ModelTrainingDataChannels = ModelTrainingDataChannel[];
const ModelTrainingDataChannels = /*@__PURE__*/ __L.at(__c6, 3);
export type TrainingInputMode = "File" | "FastFile" | "Pipe" | (string & {});
const TrainingInputMode = S.String;

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
const CreateTrainedModelRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateTrainedModelRequest>;
export interface CreateTrainedModelResponse {
  trainedModelArn: string;
  versionIdentifier?: string;
}
const CreateTrainedModelResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateTrainedModelResponse>;
export type DatasetType = "INTERACTIONS" | (string & {});
const DatasetType = S.String;

export type ColumnName = string;
export type ColumnType =
  | "USER_ID"
  | "ITEM_ID"
  | "TIMESTAMP"
  | "CATEGORICAL_FEATURE"
  | "NUMERICAL_FEATURE"
  | (string & {});
export type ColumnTypeList = ColumnType[];
const ColumnTypeList = MetricsList as any as S.Schema<ColumnTypeList>;
export interface ColumnSchema {
  columnName: string;
  columnTypes: ColumnType[];
}
const ColumnSchema = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<ColumnSchema>;
export type DatasetSchemaList = ColumnSchema[];
const DatasetSchemaList = /*@__PURE__*/ __L.at(__c6, 7);
export type GlueTableName = string;
export type GlueDatabaseName = string;
export interface GlueDataSource {
  tableName: string;
  databaseName: string;
  catalogId?: string;
}
const GlueDataSource = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<GlueDataSource>;
export interface DataSource {
  glueDataSource: GlueDataSource;
}
const DataSource = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<DataSource>;
export interface DatasetInputConfig {
  schema: ColumnSchema[];
  dataSource: DataSource;
}
const DatasetInputConfig = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<DatasetInputConfig>;
export interface Dataset {
  type: DatasetType;
  inputConfig: DatasetInputConfig;
}
const Dataset = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<Dataset>;
export type DatasetList = Dataset[];
const DatasetList = /*@__PURE__*/ __L.at(__c7, 4);
export interface CreateTrainingDatasetRequest {
  name: string;
  roleArn: string;
  trainingData: Dataset[];
  tags?: { [key: string]: string | undefined };
  description?: string;
}
const CreateTrainingDatasetRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<CreateTrainingDatasetRequest>;
export interface CreateTrainingDatasetResponse {
  trainingDatasetArn: string;
}
const CreateTrainingDatasetResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<CreateTrainingDatasetResponse>;
export type AudienceGenerationJobArn = string;
export interface DeleteAudienceGenerationJobRequest {
  audienceGenerationJobArn: string;
}
const DeleteAudienceGenerationJobRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DeleteAudienceGenerationJobRequest>;
export interface DeleteAudienceGenerationJobResponse {}
const DeleteAudienceGenerationJobResponse =
  CancelTrainedModelInferenceJobResponse as any as S.Schema<DeleteAudienceGenerationJobResponse>;
export interface DeleteAudienceModelRequest {
  audienceModelArn: string;
}
const DeleteAudienceModelRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DeleteAudienceModelRequest>;
export interface DeleteAudienceModelResponse {}
const DeleteAudienceModelResponse =
  CancelTrainedModelResponse as any as S.Schema<DeleteAudienceModelResponse>;
export interface DeleteConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
}
const DeleteConfiguredAudienceModelRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DeleteConfiguredAudienceModelRequest>;
export interface DeleteConfiguredAudienceModelResponse {}
const DeleteConfiguredAudienceModelResponse =
  CancelTrainedModelInferenceJobResponse as any as S.Schema<DeleteConfiguredAudienceModelResponse>;
export interface DeleteConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
}
const DeleteConfiguredAudienceModelPolicyRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DeleteConfiguredAudienceModelPolicyRequest>;
export interface DeleteConfiguredAudienceModelPolicyResponse {}
const DeleteConfiguredAudienceModelPolicyResponse =
  CancelTrainedModelInferenceJobResponse as any as S.Schema<DeleteConfiguredAudienceModelPolicyResponse>;
export interface DeleteConfiguredModelAlgorithmRequest {
  configuredModelAlgorithmArn: string;
}
const DeleteConfiguredModelAlgorithmRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteConfiguredModelAlgorithmRequest>;
export interface DeleteConfiguredModelAlgorithmResponse {}
const DeleteConfiguredModelAlgorithmResponse =
  CancelTrainedModelInferenceJobResponse as any as S.Schema<DeleteConfiguredModelAlgorithmResponse>;
export interface DeleteConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
}
const DeleteConfiguredModelAlgorithmAssociationRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DeleteConfiguredModelAlgorithmAssociationRequest>;
export interface DeleteConfiguredModelAlgorithmAssociationResponse {}
const DeleteConfiguredModelAlgorithmAssociationResponse =
  CancelTrainedModelInferenceJobResponse as any as S.Schema<DeleteConfiguredModelAlgorithmAssociationResponse>;
export interface DeleteMLConfigurationRequest {
  membershipIdentifier: string;
}
const DeleteMLConfigurationRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DeleteMLConfigurationRequest>;
export interface DeleteMLConfigurationResponse {}
const DeleteMLConfigurationResponse =
  CancelTrainedModelResponse as any as S.Schema<DeleteMLConfigurationResponse>;
export interface DeleteMLInputChannelDataRequest {
  mlInputChannelArn: string;
  membershipIdentifier: string;
}
const DeleteMLInputChannelDataRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DeleteMLInputChannelDataRequest>;
export interface DeleteMLInputChannelDataResponse {}
const DeleteMLInputChannelDataResponse =
  CancelTrainedModelInferenceJobResponse as any as S.Schema<DeleteMLInputChannelDataResponse>;
export interface DeleteTrainedModelOutputRequest {
  trainedModelArn: string;
  membershipIdentifier: string;
  versionIdentifier?: string;
}
const DeleteTrainedModelOutputRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DeleteTrainedModelOutputRequest>;
export interface DeleteTrainedModelOutputResponse {}
const DeleteTrainedModelOutputResponse =
  CancelTrainedModelInferenceJobResponse as any as S.Schema<DeleteTrainedModelOutputResponse>;
export interface DeleteTrainingDatasetRequest {
  trainingDatasetArn: string;
}
const DeleteTrainingDatasetRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DeleteTrainingDatasetRequest>;
export interface DeleteTrainingDatasetResponse {}
const DeleteTrainingDatasetResponse =
  CancelTrainedModelResponse as any as S.Schema<DeleteTrainingDatasetResponse>;
export interface GetAudienceGenerationJobRequest {
  audienceGenerationJobArn: string;
}
const GetAudienceGenerationJobRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<GetAudienceGenerationJobRequest>;
export type AudienceGenerationJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
const AudienceGenerationJobStatus = S.String;

export interface StatusDetails {
  statusCode?: string;
  message?: string;
}
const StatusDetails = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<StatusDetails>;
export interface AudienceGenerationJobDataSource {
  dataSource?: S3ConfigMap;
  roleArn: string;
  sqlParameters?: ProtectedQuerySQLParameters;
  sqlComputeConfiguration?: ComputeConfiguration;
}
const AudienceGenerationJobDataSource = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<AudienceGenerationJobDataSource>;
export interface AudienceSize {
  type: AudienceSizeType;
  value: number;
}
const AudienceSize = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<AudienceSize>;
export interface RelevanceMetric {
  audienceSize: AudienceSize;
  score?: number;
}
const RelevanceMetric = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<RelevanceMetric>;
export type RelevanceMetrics = RelevanceMetric[];
const RelevanceMetrics = /*@__PURE__*/ __L.at(__c9, 6);
export interface AudienceQualityMetrics {
  relevanceMetrics: RelevanceMetric[];
  recallMetric?: number;
}
const AudienceQualityMetrics = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<AudienceQualityMetrics>;
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
const GetAudienceGenerationJobResponse = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetAudienceGenerationJobResponse>;
export interface GetAudienceModelRequest {
  audienceModelArn: string;
}
const GetAudienceModelRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<GetAudienceModelRequest>;
export type AudienceModelStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETE_PENDING"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
const AudienceModelStatus = S.String;

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
const GetAudienceModelResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetAudienceModelResponse>;
export interface GetCollaborationConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  collaborationIdentifier: string;
}
const GetCollaborationConfiguredModelAlgorithmAssociationRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<GetCollaborationConfiguredModelAlgorithmAssociationRequest>;
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
const GetCollaborationConfiguredModelAlgorithmAssociationResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<GetCollaborationConfiguredModelAlgorithmAssociationResponse>;
export interface GetCollaborationMLInputChannelRequest {
  mlInputChannelArn: string;
  collaborationIdentifier: string;
}
const GetCollaborationMLInputChannelRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetCollaborationMLInputChannelRequest>;
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
const MLInputChannelStatus = S.String;

export type BudgetedResourceArn = string;
export type Budget = number;
export type AccessBudgetType =
  | "CALENDAR_DAY"
  | "CALENDAR_MONTH"
  | "CALENDAR_WEEK"
  | "LIFETIME"
  | (string & {});
const AccessBudgetType = S.String;

export type AutoRefreshMode = "ENABLED" | "DISABLED" | (string & {});
const AutoRefreshMode = S.String;

export interface AccessBudgetDetails {
  startTime: Date;
  endTime?: Date;
  remainingBudget: number;
  budget: number;
  budgetType: AccessBudgetType;
  autoRefresh?: AutoRefreshMode;
}
const AccessBudgetDetails = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<AccessBudgetDetails>;
export type AccessBudgetDetailsList = AccessBudgetDetails[];
const AccessBudgetDetailsList = /*@__PURE__*/ __L.at(__c10, 7);
export interface AccessBudget {
  resourceArn: string;
  details: AccessBudgetDetails[];
  aggregateRemainingBudget: number;
}
const AccessBudget = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<AccessBudget>;
export type AccessBudgets = AccessBudget[];
const AccessBudgets = /*@__PURE__*/ __L.at(__c11, 1);
export type PrivacyBudgets = { accessBudgets: AccessBudget[] };
const PrivacyBudgets = /*@__PURE__*/ __L.at(__c11, 2);
export type SyntheticDataColumnName = string;
export type SyntheticDataColumnType = "CATEGORICAL" | "NUMERICAL" | (string & {});
const SyntheticDataColumnType = S.String;

export interface SyntheticDataColumnProperties {
  columnName: string;
  columnType: SyntheticDataColumnType;
  isPredictiveValue: boolean;
}
const SyntheticDataColumnProperties = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<SyntheticDataColumnProperties>;
export type ColumnMappingList = SyntheticDataColumnProperties[];
const ColumnMappingList = /*@__PURE__*/ __L.at(__c11, 4);
export interface ColumnClassificationDetails {
  columnMapping: SyntheticDataColumnProperties[];
}
const ColumnClassificationDetails = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ColumnClassificationDetails>;
export interface MLSyntheticDataParameters {
  epsilon: number;
  maxMembershipInferenceAttackScore: number;
  columnClassification?: ColumnClassificationDetails;
}
const MLSyntheticDataParameters = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<MLSyntheticDataParameters>;
export type MembershipInferenceAttackVersion = "DISTANCE_TO_CLOSEST_RECORD_V1" | (string & {});
const MembershipInferenceAttackVersion = S.String;

export interface MembershipInferenceAttackScore {
  attackVersion: MembershipInferenceAttackVersion;
  score: number;
}
const MembershipInferenceAttackScore = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<MembershipInferenceAttackScore>;
export type MembershipInferenceAttackScoreList = MembershipInferenceAttackScore[];
const MembershipInferenceAttackScoreList = /*@__PURE__*/ __L.at(__c12, 0);
export interface DataPrivacyScores {
  membershipInferenceAttackScores: MembershipInferenceAttackScore[];
}
const DataPrivacyScores = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<DataPrivacyScores>;
export interface SyntheticDataEvaluationScores {
  dataPrivacyScores: DataPrivacyScores;
}
const SyntheticDataEvaluationScores = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<SyntheticDataEvaluationScores>;
export interface SyntheticDataConfiguration {
  syntheticDataParameters: MLSyntheticDataParameters;
  syntheticDataEvaluationScores?: SyntheticDataEvaluationScores;
}
const SyntheticDataConfiguration = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<SyntheticDataConfiguration>;
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
const GetCollaborationMLInputChannelResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<GetCollaborationMLInputChannelResponse>;
export interface GetCollaborationTrainedModelRequest {
  trainedModelArn: string;
  collaborationIdentifier: string;
  versionIdentifier?: string;
}
const GetCollaborationTrainedModelRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<GetCollaborationTrainedModelRequest>;
export interface IncrementalTrainingDataChannelOutput {
  channelName: string;
  versionIdentifier?: string;
  modelName: string;
}
const IncrementalTrainingDataChannelOutput = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<IncrementalTrainingDataChannelOutput>;
export type IncrementalTrainingDataChannelsOutput = IncrementalTrainingDataChannelOutput[];
const IncrementalTrainingDataChannelsOutput = /*@__PURE__*/ __L.at(__c12, 7);
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
const TrainedModelStatus = S.String;

export type MetricsStatus = "PUBLISH_SUCCEEDED" | "PUBLISH_FAILED" | (string & {});
const MetricsStatus = S.String;

export type LogsStatus = "PUBLISH_SUCCEEDED" | "PUBLISH_FAILED" | (string & {});
const LogsStatus = S.String;

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
const GetCollaborationTrainedModelResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<GetCollaborationTrainedModelResponse>;
export interface GetConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
}
const GetConfiguredAudienceModelRequest = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<GetConfiguredAudienceModelRequest>;
export type ConfiguredAudienceModelStatus = "ACTIVE" | (string & {});
const ConfiguredAudienceModelStatus = S.String;

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
const GetConfiguredAudienceModelResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<GetConfiguredAudienceModelResponse>;
export interface GetConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
}
const GetConfiguredAudienceModelPolicyRequest = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<GetConfiguredAudienceModelPolicyRequest>;
export type ResourcePolicy = string;
export type Hash = string;
export interface GetConfiguredAudienceModelPolicyResponse {
  configuredAudienceModelArn: string;
  configuredAudienceModelPolicy: string;
  policyHash: string;
}
const GetConfiguredAudienceModelPolicyResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<GetConfiguredAudienceModelPolicyResponse>;
export interface GetConfiguredModelAlgorithmRequest {
  configuredModelAlgorithmArn: string;
}
const GetConfiguredModelAlgorithmRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<GetConfiguredModelAlgorithmRequest>;
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
const GetConfiguredModelAlgorithmResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<GetConfiguredModelAlgorithmResponse>;
export interface GetConfiguredModelAlgorithmAssociationRequest {
  configuredModelAlgorithmAssociationArn: string;
  membershipIdentifier: string;
}
const GetConfiguredModelAlgorithmAssociationRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<GetConfiguredModelAlgorithmAssociationRequest>;
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
const GetConfiguredModelAlgorithmAssociationResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<GetConfiguredModelAlgorithmAssociationResponse>;
export interface GetMLConfigurationRequest {
  membershipIdentifier: string;
}
const GetMLConfigurationRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<GetMLConfigurationRequest>;
export interface Destination {
  s3Destination: S3ConfigMap;
}
const Destination = AudienceDestination as any as S.Schema<Destination>;
export interface MLOutputConfiguration {
  destination?: Destination;
  roleArn: string;
}
const MLOutputConfiguration = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<MLOutputConfiguration>;
export interface GetMLConfigurationResponse {
  membershipIdentifier: string;
  defaultOutputLocation: MLOutputConfiguration;
  createTime: Date;
  updateTime: Date;
}
const GetMLConfigurationResponse = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<GetMLConfigurationResponse>;
export interface GetMLInputChannelRequest {
  mlInputChannelArn: string;
  membershipIdentifier: string;
}
const GetMLInputChannelRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<GetMLInputChannelRequest>;
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
const GetMLInputChannelResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<GetMLInputChannelResponse>;
export interface GetTrainedModelRequest {
  trainedModelArn: string;
  membershipIdentifier: string;
  versionIdentifier?: string;
}
const GetTrainedModelRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<GetTrainedModelRequest>;
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
const GetTrainedModelResponse = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<GetTrainedModelResponse>;
export interface GetTrainedModelInferenceJobRequest {
  membershipIdentifier: string;
  trainedModelInferenceJobArn: string;
}
const GetTrainedModelInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<GetTrainedModelInferenceJobRequest>;
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
const TrainedModelInferenceJobStatus = S.String;

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
const InferenceInstanceType = S.String;

export interface InferenceResourceConfig {
  instanceType: InferenceInstanceType;
  instanceCount?: number;
}
const InferenceResourceConfig = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<InferenceResourceConfig>;
export interface InferenceReceiverMember {
  accountId: string;
}
const InferenceReceiverMember = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<InferenceReceiverMember>;
export type InferenceReceiverMembers = InferenceReceiverMember[];
const InferenceReceiverMembers = /*@__PURE__*/ __L.at(__c15, 3);
export interface InferenceOutputConfiguration {
  accept?: string;
  members: InferenceReceiverMember[];
}
const InferenceOutputConfiguration = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<InferenceOutputConfiguration>;
export interface ModelInferenceDataSource {
  mlInputChannelArn: string;
}
const ModelInferenceDataSource = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ModelInferenceDataSource>;
export interface InferenceContainerExecutionParameters {
  maxPayloadInMB?: number;
}
const InferenceContainerExecutionParameters = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<InferenceContainerExecutionParameters>;
export type InferenceEnvironmentMap = { [key: string]: string | undefined };
const InferenceEnvironmentMap = ParameterMap as any as S.Schema<InferenceEnvironmentMap>;
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
const GetTrainedModelInferenceJobResponse = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<GetTrainedModelInferenceJobResponse>;
export interface GetTrainingDatasetRequest {
  trainingDatasetArn: string;
}
const GetTrainingDatasetRequest = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<GetTrainingDatasetRequest>;
export type TrainingDatasetStatus = "ACTIVE" | (string & {});
const TrainingDatasetStatus = S.String;

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
const GetTrainingDatasetResponse = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<GetTrainingDatasetResponse>;
export type NextToken = string;
export type MaxResults = number;
export interface ListAudienceExportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  audienceGenerationJobArn?: string;
}
const ListAudienceExportJobsRequest = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<ListAudienceExportJobsRequest>;
export type AudienceExportJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | (string & {});
const AudienceExportJobStatus = S.String;

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
const AudienceExportJobSummary = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<AudienceExportJobSummary>;
export type AudienceExportJobList = AudienceExportJobSummary[];
const AudienceExportJobList = /*@__PURE__*/ __L.at(__c16, 4);
export interface ListAudienceExportJobsResponse {
  nextToken?: string;
  audienceExportJobs: AudienceExportJobSummary[];
}
const ListAudienceExportJobsResponse = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ListAudienceExportJobsResponse>;
export interface ListAudienceGenerationJobsRequest {
  nextToken?: string;
  maxResults?: number;
  configuredAudienceModelArn?: string;
  collaborationId?: string;
}
const ListAudienceGenerationJobsRequest = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<ListAudienceGenerationJobsRequest>;
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
const AudienceGenerationJobSummary = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<AudienceGenerationJobSummary>;
export type AudienceGenerationJobList = AudienceGenerationJobSummary[];
const AudienceGenerationJobList = /*@__PURE__*/ __L.at(__c17, 0);
export interface ListAudienceGenerationJobsResponse {
  nextToken?: string;
  audienceGenerationJobs: AudienceGenerationJobSummary[];
}
const ListAudienceGenerationJobsResponse = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<ListAudienceGenerationJobsResponse>;
export interface ListAudienceModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListAudienceModelsRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<ListAudienceModelsRequest>;
export interface AudienceModelSummary {
  createTime: Date;
  updateTime: Date;
  audienceModelArn: string;
  name: string;
  trainingDatasetArn: string;
  status: AudienceModelStatus;
  description?: string;
}
const AudienceModelSummary = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<AudienceModelSummary>;
export type AudienceModelList = AudienceModelSummary[];
const AudienceModelList = /*@__PURE__*/ __L.at(__c17, 4);
export interface ListAudienceModelsResponse {
  nextToken?: string;
  audienceModels: AudienceModelSummary[];
}
const ListAudienceModelsResponse = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ListAudienceModelsResponse>;
export interface ListCollaborationConfiguredModelAlgorithmAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
const ListCollaborationConfiguredModelAlgorithmAssociationsRequest = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<ListCollaborationConfiguredModelAlgorithmAssociationsRequest>;
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
const CollaborationConfiguredModelAlgorithmAssociationSummary = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<CollaborationConfiguredModelAlgorithmAssociationSummary>;
export type CollaborationConfiguredModelAlgorithmAssociationList =
  CollaborationConfiguredModelAlgorithmAssociationSummary[];
const CollaborationConfiguredModelAlgorithmAssociationList = /*@__PURE__*/ __L.at(__c18, 0);
export interface ListCollaborationConfiguredModelAlgorithmAssociationsResponse {
  nextToken?: string;
  collaborationConfiguredModelAlgorithmAssociations: CollaborationConfiguredModelAlgorithmAssociationSummary[];
}
const ListCollaborationConfiguredModelAlgorithmAssociationsResponse = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<ListCollaborationConfiguredModelAlgorithmAssociationsResponse>;
export interface ListCollaborationMLInputChannelsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
const ListCollaborationMLInputChannelsRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<ListCollaborationMLInputChannelsRequest>;
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
const CollaborationMLInputChannelSummary = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<CollaborationMLInputChannelSummary>;
export type CollaborationMLInputChannelsList = CollaborationMLInputChannelSummary[];
const CollaborationMLInputChannelsList = /*@__PURE__*/ __L.at(__c18, 4);
export interface ListCollaborationMLInputChannelsResponse {
  nextToken?: string;
  collaborationMLInputChannelsList: CollaborationMLInputChannelSummary[];
}
const ListCollaborationMLInputChannelsResponse = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<ListCollaborationMLInputChannelsResponse>;
export interface ListCollaborationTrainedModelExportJobsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
}
const ListCollaborationTrainedModelExportJobsRequest = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<ListCollaborationTrainedModelExportJobsRequest>;
export interface TrainedModelExportReceiverMember {
  accountId: string;
}
const TrainedModelExportReceiverMember = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<TrainedModelExportReceiverMember>;
export type TrainedModelExportReceiverMembers = TrainedModelExportReceiverMember[];
const TrainedModelExportReceiverMembers = /*@__PURE__*/ __L.at(__c19, 0);
export interface TrainedModelExportOutputConfiguration {
  members: TrainedModelExportReceiverMember[];
}
const TrainedModelExportOutputConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<TrainedModelExportOutputConfiguration>;
export type TrainedModelExportJobStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "ACTIVE"
  | (string & {});
const TrainedModelExportJobStatus = S.String;

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
const CollaborationTrainedModelExportJobSummary = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<CollaborationTrainedModelExportJobSummary>;
export type CollaborationTrainedModelExportJobList = CollaborationTrainedModelExportJobSummary[];
const CollaborationTrainedModelExportJobList = /*@__PURE__*/ __L.at(__c19, 3);
export interface ListCollaborationTrainedModelExportJobsResponse {
  nextToken?: string;
  collaborationTrainedModelExportJobs: CollaborationTrainedModelExportJobSummary[];
}
const ListCollaborationTrainedModelExportJobsResponse = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<ListCollaborationTrainedModelExportJobsResponse>;
export interface ListCollaborationTrainedModelInferenceJobsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
  trainedModelArn?: string;
  trainedModelVersionIdentifier?: string;
}
const ListCollaborationTrainedModelInferenceJobsRequest = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<ListCollaborationTrainedModelInferenceJobsRequest>;
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
const CollaborationTrainedModelInferenceJobSummary = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<CollaborationTrainedModelInferenceJobSummary>;
export type CollaborationTrainedModelInferenceJobList =
  CollaborationTrainedModelInferenceJobSummary[];
const CollaborationTrainedModelInferenceJobList = /*@__PURE__*/ __L.at(__c19, 7);
export interface ListCollaborationTrainedModelInferenceJobsResponse {
  nextToken?: string;
  collaborationTrainedModelInferenceJobs: CollaborationTrainedModelInferenceJobSummary[];
}
const ListCollaborationTrainedModelInferenceJobsResponse = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ListCollaborationTrainedModelInferenceJobsResponse>;
export interface ListCollaborationTrainedModelsRequest {
  nextToken?: string;
  maxResults?: number;
  collaborationIdentifier: string;
}
const ListCollaborationTrainedModelsRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ListCollaborationTrainedModelsRequest>;
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
const CollaborationTrainedModelSummary = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<CollaborationTrainedModelSummary>;
export type CollaborationTrainedModelList = CollaborationTrainedModelSummary[];
const CollaborationTrainedModelList = /*@__PURE__*/ __L.at(__c20, 3);
export interface ListCollaborationTrainedModelsResponse {
  nextToken?: string;
  collaborationTrainedModels: CollaborationTrainedModelSummary[];
}
const ListCollaborationTrainedModelsResponse = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ListCollaborationTrainedModelsResponse>;
export interface ListConfiguredAudienceModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListConfiguredAudienceModelsRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ListConfiguredAudienceModelsRequest>;
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
const ConfiguredAudienceModelSummary = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<ConfiguredAudienceModelSummary>;
export type ConfiguredAudienceModelList = ConfiguredAudienceModelSummary[];
const ConfiguredAudienceModelList = /*@__PURE__*/ __L.at(__c20, 7);
export interface ListConfiguredAudienceModelsResponse {
  nextToken?: string;
  configuredAudienceModels: ConfiguredAudienceModelSummary[];
}
const ListConfiguredAudienceModelsResponse = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<ListConfiguredAudienceModelsResponse>;
export interface ListConfiguredModelAlgorithmAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
const ListConfiguredModelAlgorithmAssociationsRequest = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<ListConfiguredModelAlgorithmAssociationsRequest>;
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
const ConfiguredModelAlgorithmAssociationSummary = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<ConfiguredModelAlgorithmAssociationSummary>;
export type ConfiguredModelAlgorithmAssociationList = ConfiguredModelAlgorithmAssociationSummary[];
const ConfiguredModelAlgorithmAssociationList = /*@__PURE__*/ __L.at(__c21, 3);
export interface ListConfiguredModelAlgorithmAssociationsResponse {
  nextToken?: string;
  configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationSummary[];
}
const ListConfiguredModelAlgorithmAssociationsResponse = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<ListConfiguredModelAlgorithmAssociationsResponse>;
export interface ListConfiguredModelAlgorithmsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListConfiguredModelAlgorithmsRequest = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<ListConfiguredModelAlgorithmsRequest>;
export interface ConfiguredModelAlgorithmSummary {
  createTime: Date;
  updateTime: Date;
  configuredModelAlgorithmArn: string;
  name: string;
  description?: string;
}
const ConfiguredModelAlgorithmSummary = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<ConfiguredModelAlgorithmSummary>;
export type ConfiguredModelAlgorithmList = ConfiguredModelAlgorithmSummary[];
const ConfiguredModelAlgorithmList = /*@__PURE__*/ __L.at(__c21, 7);
export interface ListConfiguredModelAlgorithmsResponse {
  nextToken?: string;
  configuredModelAlgorithms: ConfiguredModelAlgorithmSummary[];
}
const ListConfiguredModelAlgorithmsResponse = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<ListConfiguredModelAlgorithmsResponse>;
export interface ListMLInputChannelsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
const ListMLInputChannelsRequest = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<ListMLInputChannelsRequest>;
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
const MLInputChannelSummary = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<MLInputChannelSummary>;
export type MLInputChannelsList = MLInputChannelSummary[];
const MLInputChannelsList = /*@__PURE__*/ __L.at(__c22, 3);
export interface ListMLInputChannelsResponse {
  nextToken?: string;
  mlInputChannelsList: MLInputChannelSummary[];
}
const ListMLInputChannelsResponse = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<ListMLInputChannelsResponse>;
export type TaggableArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTrainedModelInferenceJobsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
  trainedModelArn?: string;
  trainedModelVersionIdentifier?: string;
}
const ListTrainedModelInferenceJobsRequest = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<ListTrainedModelInferenceJobsRequest>;
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
const TrainedModelInferenceJobSummary = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<TrainedModelInferenceJobSummary>;
export type TrainedModelInferenceJobList = TrainedModelInferenceJobSummary[];
const TrainedModelInferenceJobList = /*@__PURE__*/ __L.at(__c23, 1);
export interface ListTrainedModelInferenceJobsResponse {
  nextToken?: string;
  trainedModelInferenceJobs: TrainedModelInferenceJobSummary[];
}
const ListTrainedModelInferenceJobsResponse = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<ListTrainedModelInferenceJobsResponse>;
export interface ListTrainedModelsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
}
const ListTrainedModelsRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<ListTrainedModelsRequest>;
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
const TrainedModelSummary = /*@__PURE__*/ __L.at(__c23, 4) as any as S.Schema<TrainedModelSummary>;
export type TrainedModelList = TrainedModelSummary[];
const TrainedModelList = /*@__PURE__*/ __L.at(__c23, 5);
export interface ListTrainedModelsResponse {
  nextToken?: string;
  trainedModels: TrainedModelSummary[];
}
const ListTrainedModelsResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<ListTrainedModelsResponse>;
export interface ListTrainedModelVersionsRequest {
  nextToken?: string;
  maxResults?: number;
  membershipIdentifier: string;
  trainedModelArn: string;
  status?: TrainedModelStatus;
}
const ListTrainedModelVersionsRequest = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<ListTrainedModelVersionsRequest>;
export interface ListTrainedModelVersionsResponse {
  nextToken?: string;
  trainedModels: TrainedModelSummary[];
}
const ListTrainedModelVersionsResponse =
  ListTrainedModelsResponse as any as S.Schema<ListTrainedModelVersionsResponse>;
export interface ListTrainingDatasetsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListTrainingDatasetsRequest = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<ListTrainingDatasetsRequest>;
export interface TrainingDatasetSummary {
  createTime: Date;
  updateTime: Date;
  trainingDatasetArn: string;
  name: string;
  status: TrainingDatasetStatus;
  description?: string;
}
const TrainingDatasetSummary = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<TrainingDatasetSummary>;
export type TrainingDatasetList = TrainingDatasetSummary[];
const TrainingDatasetList = /*@__PURE__*/ __L.at(__c24, 2);
export interface ListTrainingDatasetsResponse {
  nextToken?: string;
  trainingDatasets: TrainingDatasetSummary[];
}
const ListTrainingDatasetsResponse = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<ListTrainingDatasetsResponse>;
export type PolicyExistenceCondition =
  | "POLICY_MUST_EXIST"
  | "POLICY_MUST_NOT_EXIST"
  | (string & {});
const PolicyExistenceCondition = S.String;

export interface PutConfiguredAudienceModelPolicyRequest {
  configuredAudienceModelArn: string;
  configuredAudienceModelPolicy: string;
  previousPolicyHash?: string;
  policyExistenceCondition?: PolicyExistenceCondition;
}
const PutConfiguredAudienceModelPolicyRequest = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<PutConfiguredAudienceModelPolicyRequest>;
export interface PutConfiguredAudienceModelPolicyResponse {
  configuredAudienceModelPolicy: string;
  policyHash: string;
}
const PutConfiguredAudienceModelPolicyResponse = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<PutConfiguredAudienceModelPolicyResponse>;
export interface PutMLConfigurationRequest {
  membershipIdentifier: string;
  defaultOutputLocation: MLOutputConfiguration;
}
const PutMLConfigurationRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<PutMLConfigurationRequest>;
export interface PutMLConfigurationResponse {}
const PutMLConfigurationResponse =
  CancelTrainedModelResponse as any as S.Schema<PutMLConfigurationResponse>;
export interface StartAudienceExportJobRequest {
  name: string;
  audienceGenerationJobArn: string;
  audienceSize: AudienceSize;
  description?: string;
}
const StartAudienceExportJobRequest = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<StartAudienceExportJobRequest>;
export interface StartAudienceExportJobResponse {}
const StartAudienceExportJobResponse =
  CancelTrainedModelResponse as any as S.Schema<StartAudienceExportJobResponse>;
export interface StartAudienceGenerationJobRequest {
  name: string;
  configuredAudienceModelArn: string;
  seedAudience: AudienceGenerationJobDataSource;
  includeSeedInOutput?: boolean;
  collaborationId?: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
const StartAudienceGenerationJobRequest = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<StartAudienceGenerationJobRequest>;
export interface StartAudienceGenerationJobResponse {
  audienceGenerationJobArn: string;
}
const StartAudienceGenerationJobResponse = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<StartAudienceGenerationJobResponse>;
export interface StartTrainedModelExportJobRequest {
  name: string;
  trainedModelArn: string;
  trainedModelVersionIdentifier?: string;
  membershipIdentifier: string;
  outputConfiguration: TrainedModelExportOutputConfiguration;
  description?: string;
}
const StartTrainedModelExportJobRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<StartTrainedModelExportJobRequest>;
export interface StartTrainedModelExportJobResponse {}
const StartTrainedModelExportJobResponse =
  CancelTrainedModelInferenceJobResponse as any as S.Schema<StartTrainedModelExportJobResponse>;
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
const StartTrainedModelInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<StartTrainedModelInferenceJobRequest>;
export interface StartTrainedModelInferenceJobResponse {
  trainedModelInferenceJobArn: string;
}
const StartTrainedModelInferenceJobResponse = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<StartTrainedModelInferenceJobResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c25, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = CancelTrainedModelResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = ContainerEntrypoint as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = CancelTrainedModelResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateConfiguredAudienceModelRequest {
  configuredAudienceModelArn: string;
  outputConfig?: ConfiguredAudienceModelOutputConfig;
  audienceModelArn?: string;
  sharedAudienceMetrics?: SharedAudienceMetrics[];
  minMatchingSeedSize?: number;
  audienceSizeConfig?: AudienceSizeConfig;
  description?: string;
}
const UpdateConfiguredAudienceModelRequest = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<UpdateConfiguredAudienceModelRequest>;
export interface UpdateConfiguredAudienceModelResponse {
  configuredAudienceModelArn: string;
}
const UpdateConfiguredAudienceModelResponse =
  CreateConfiguredAudienceModelResponse as any as S.Schema<UpdateConfiguredAudienceModelResponse>;
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
  input: CancelTrainedModelRequest,
  output: CancelTrainedModelResponse,
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
  input: CancelTrainedModelInferenceJobRequest,
  output: CancelTrainedModelInferenceJobResponse,
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
  input: CreateAudienceModelRequest,
  output: CreateAudienceModelResponse,
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
  input: CreateConfiguredAudienceModelRequest,
  output: CreateConfiguredAudienceModelResponse,
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
  input: CreateConfiguredModelAlgorithmRequest,
  output: CreateConfiguredModelAlgorithmResponse,
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
  input: CreateConfiguredModelAlgorithmAssociationRequest,
  output: CreateConfiguredModelAlgorithmAssociationResponse,
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
  input: CreateMLInputChannelRequest,
  output: CreateMLInputChannelResponse,
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
  input: CreateTrainedModelRequest,
  output: CreateTrainedModelResponse,
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
  input: CreateTrainingDatasetRequest,
  output: CreateTrainingDatasetResponse,
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
  input: DeleteAudienceGenerationJobRequest,
  output: DeleteAudienceGenerationJobResponse,
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
  input: DeleteAudienceModelRequest,
  output: DeleteAudienceModelResponse,
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
  input: DeleteConfiguredAudienceModelRequest,
  output: DeleteConfiguredAudienceModelResponse,
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
  input: DeleteConfiguredAudienceModelPolicyRequest,
  output: DeleteConfiguredAudienceModelPolicyResponse,
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
  input: DeleteConfiguredModelAlgorithmRequest,
  output: DeleteConfiguredModelAlgorithmResponse,
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
  input: DeleteConfiguredModelAlgorithmAssociationRequest,
  output: DeleteConfiguredModelAlgorithmAssociationResponse,
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
  input: DeleteMLConfigurationRequest,
  output: DeleteMLConfigurationResponse,
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
  input: DeleteMLInputChannelDataRequest,
  output: DeleteMLInputChannelDataResponse,
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
  input: DeleteTrainedModelOutputRequest,
  output: DeleteTrainedModelOutputResponse,
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
  input: DeleteTrainingDatasetRequest,
  output: DeleteTrainingDatasetResponse,
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
  input: GetAudienceGenerationJobRequest,
  output: GetAudienceGenerationJobResponse,
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
  input: GetAudienceModelRequest,
  output: GetAudienceModelResponse,
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
  input: GetCollaborationConfiguredModelAlgorithmAssociationRequest,
  output: GetCollaborationConfiguredModelAlgorithmAssociationResponse,
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
  input: GetCollaborationMLInputChannelRequest,
  output: GetCollaborationMLInputChannelResponse,
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
  input: GetCollaborationTrainedModelRequest,
  output: GetCollaborationTrainedModelResponse,
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
  input: GetConfiguredAudienceModelRequest,
  output: GetConfiguredAudienceModelResponse,
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
  input: GetConfiguredAudienceModelPolicyRequest,
  output: GetConfiguredAudienceModelPolicyResponse,
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
  input: GetConfiguredModelAlgorithmRequest,
  output: GetConfiguredModelAlgorithmResponse,
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
  input: GetConfiguredModelAlgorithmAssociationRequest,
  output: GetConfiguredModelAlgorithmAssociationResponse,
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
  input: GetMLConfigurationRequest,
  output: GetMLConfigurationResponse,
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
  input: GetMLInputChannelRequest,
  output: GetMLInputChannelResponse,
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
  input: GetTrainedModelRequest,
  output: GetTrainedModelResponse,
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
  input: GetTrainedModelInferenceJobRequest,
  output: GetTrainedModelInferenceJobResponse,
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
  input: GetTrainingDatasetRequest,
  output: GetTrainingDatasetResponse,
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
  input: ListAudienceExportJobsRequest,
  output: ListAudienceExportJobsResponse,
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
  input: ListAudienceGenerationJobsRequest,
  output: ListAudienceGenerationJobsResponse,
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
  input: ListAudienceModelsRequest,
  output: ListAudienceModelsResponse,
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
  input: ListCollaborationConfiguredModelAlgorithmAssociationsRequest,
  output: ListCollaborationConfiguredModelAlgorithmAssociationsResponse,
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
  input: ListCollaborationMLInputChannelsRequest,
  output: ListCollaborationMLInputChannelsResponse,
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
  input: ListCollaborationTrainedModelExportJobsRequest,
  output: ListCollaborationTrainedModelExportJobsResponse,
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
  input: ListCollaborationTrainedModelInferenceJobsRequest,
  output: ListCollaborationTrainedModelInferenceJobsResponse,
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
  input: ListCollaborationTrainedModelsRequest,
  output: ListCollaborationTrainedModelsResponse,
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
  input: ListConfiguredAudienceModelsRequest,
  output: ListConfiguredAudienceModelsResponse,
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
  input: ListConfiguredModelAlgorithmAssociationsRequest,
  output: ListConfiguredModelAlgorithmAssociationsResponse,
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
  input: ListConfiguredModelAlgorithmsRequest,
  output: ListConfiguredModelAlgorithmsResponse,
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
  input: ListMLInputChannelsRequest,
  output: ListMLInputChannelsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListTrainedModelInferenceJobsRequest,
  output: ListTrainedModelInferenceJobsResponse,
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
  input: ListTrainedModelsRequest,
  output: ListTrainedModelsResponse,
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
  input: ListTrainedModelVersionsRequest,
  output: ListTrainedModelVersionsResponse,
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
  input: ListTrainingDatasetsRequest,
  output: ListTrainingDatasetsResponse,
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
  input: PutConfiguredAudienceModelPolicyRequest,
  output: PutConfiguredAudienceModelPolicyResponse,
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
  input: PutMLConfigurationRequest,
  output: PutMLConfigurationResponse,
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
  input: StartAudienceExportJobRequest,
  output: StartAudienceExportJobResponse,
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
  input: StartAudienceGenerationJobRequest,
  output: StartAudienceGenerationJobResponse,
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
  input: StartTrainedModelExportJobRequest,
  output: StartTrainedModelExportJobResponse,
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
  input: StartTrainedModelInferenceJobRequest,
  output: StartTrainedModelInferenceJobResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateConfiguredAudienceModelRequest,
  output: UpdateConfiguredAudienceModelResponse,
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
          tags: S.optional(TagMap),
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
      return S.suspend(() => S.Struct({ s3Destination: S3ConfigMap })).annotate({
        identifier: "AudienceDestination",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ destination: AudienceDestination, roleArn: S.String }),
      ).annotate({
        identifier: "ConfiguredAudienceModelOutputConfig",
      });
    case 2:
      return S.Array(SharedAudienceMetrics);
    case 3:
      return S.Array(S.Number);
    case 4:
      return S.suspend(() =>
        S.Struct({ audienceSizeType: AudienceSizeType, audienceSizeBins: AudienceSizeBins }),
      ).annotate({ identifier: "AudienceSizeConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          audienceModelArn: S.String,
          outputConfig: ConfiguredAudienceModelOutputConfig,
          description: S.optional(S.String),
          sharedAudienceMetrics: MetricsList,
          minMatchingSeedSize: S.optional(S.Number),
          audienceSizeConfig: S.optional(AudienceSizeConfig),
          tags: S.optional(TagMap),
          childResourceTagOnCreatePolicy: S.optional(TagOnCreatePolicy),
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
      return S.Array(MetricDefinition);
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageUri: S.String,
          entrypoint: S.optional(ContainerEntrypoint),
          arguments: S.optional(ContainerArguments),
          metricDefinitions: S.optional(MetricDefinitionList),
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
          trainingContainerConfig: S.optional(ContainerConfig),
          inferenceContainerConfig: S.optional(InferenceContainerConfig),
          tags: S.optional(TagMap),
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
      return S.suspend(() =>
        S.Struct({ customDataIdentifiers: CustomDataIdentifierList }),
      ).annotate({ identifier: "CustomEntityConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          entitiesToRedact: EntityTypeList,
          customEntityConfig: S.optional(CustomEntityConfig),
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
          allowedAccountIds: AccountIdList,
          filterPattern: S.optional(S.String),
          logType: S.optional(LogType),
          logRedactionConfiguration: S.optional(LogRedactionConfiguration),
        }),
      ).annotate({ identifier: "LogsConfigurationPolicy" });
    case 1:
      return S.Array(LogsConfigurationPolicy);
    case 2:
      return S.suspend(() => S.Struct({ noiseLevel: NoiseLevelType })).annotate({
        identifier: "MetricsConfigurationPolicy",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ unit: TrainedModelArtifactMaxSizeUnitType, value: S.Number }),
      ).annotate({
        identifier: "TrainedModelArtifactMaxSize",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          containerLogs: S.optional(LogsConfigurationPolicyList),
          containerMetrics: S.optional(MetricsConfigurationPolicy),
          maxArtifactSize: S.optional(TrainedModelArtifactMaxSize),
        }),
      ).annotate({
        identifier: "TrainedModelsConfigurationPolicy",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxSize: TrainedModelExportsMaxSize,
          filesToExport: TrainedModelExportFileTypeList,
        }),
      ).annotate({
        identifier: "TrainedModelExportsConfigurationPolicy",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          containerLogs: S.optional(LogsConfigurationPolicyList),
          maxOutputSize: S.optional(TrainedModelInferenceMaxOutputSize),
        }),
      ).annotate({
        identifier: "TrainedModelInferenceJobsConfigurationPolicy",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          trainedModels: S.optional(TrainedModelsConfigurationPolicy),
          trainedModelExports: S.optional(TrainedModelExportsConfigurationPolicy),
          trainedModelInferenceJobs: S.optional(TrainedModelInferenceJobsConfigurationPolicy),
        }),
      ).annotate({
        identifier: "PrivacyConfigurationPolicies",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ policies: PrivacyConfigurationPolicies })).annotate({
        identifier: "PrivacyConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredModelAlgorithmArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          privacyConfiguration: S.optional(PrivacyConfiguration),
          tags: S.optional(TagMap),
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
          parameters: S.optional(ParameterMap),
        }),
      ).annotate({
        identifier: "ProtectedQuerySQLParameters",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ spark: SparkProperties })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(WorkerComputeType),
          number: S.optional(S.Number),
          properties: S.optional(WorkerComputeConfigurationProperties),
        }),
      ).annotate({
        identifier: "WorkerComputeConfiguration",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ worker: WorkerComputeConfiguration })]);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sqlParameters: ProtectedQuerySQLParameters,
          computeConfiguration: S.optional(ComputeConfiguration),
          resultFormat: S.optional(ResultFormat),
        }),
      ).annotate({
        identifier: "ProtectedQueryInputParameters",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ protectedQueryInputParameters: ProtectedQueryInputParameters }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ dataSource: InputChannelDataSource, roleArn: S.String }),
      ).annotate({ identifier: "InputChannel" });
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
          configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationArnList,
          inputChannel: InputChannel,
          name: S.String,
          retentionInDays: S.Number,
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(TagMap),
          payerConfiguration: S.optional(PayerConfiguration),
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
          instanceType: InstanceType,
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
      return S.Array(IncrementalTrainingDataChannel);
    case 2:
      return S.suspend(() =>
        S.Struct({
          mlInputChannelArn: S.String,
          channelName: S.String,
          s3DataDistributionType: S.optional(S3DataDistributionType),
        }),
      ).annotate({ identifier: "ModelTrainingDataChannel" });
    case 3:
      return S.Array(ModelTrainingDataChannel);
    case 4:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          name: S.String,
          configuredModelAlgorithmAssociationArn: S.String,
          hyperparameters: S.optional(HyperParameters),
          environment: S.optional(Environment),
          resourceConfig: ResourceConfig,
          stoppingCondition: S.optional(StoppingCondition),
          incrementalTrainingDataChannels: S.optional(IncrementalTrainingDataChannels),
          dataChannels: ModelTrainingDataChannels,
          trainingInputMode: S.optional(TrainingInputMode),
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(TagMap),
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
      return S.suspend(() =>
        S.Struct({ columnName: S.String, columnTypes: ColumnTypeList }),
      ).annotate({ identifier: "ColumnSchema" });
    case 7:
      return S.Array(ColumnSchema);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tableName: S.String, databaseName: S.String, catalogId: S.optional(S.String) }),
      ).annotate({ identifier: "GlueDataSource" });
    case 1:
      return S.suspend(() => S.Struct({ glueDataSource: GlueDataSource })).annotate({
        identifier: "DataSource",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ schema: DatasetSchemaList, dataSource: DataSource }),
      ).annotate({ identifier: "DatasetInputConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({ type: DatasetType, inputConfig: DatasetInputConfig }),
      ).annotate({ identifier: "Dataset" });
    case 4:
      return S.Array(Dataset);
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          roleArn: S.String,
          trainingData: DatasetList,
          tags: S.optional(TagMap),
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
          dataSource: S.optional(S3ConfigMap),
          roleArn: S.String,
          sqlParameters: S.optional(ProtectedQuerySQLParameters),
          sqlComputeConfiguration: S.optional(ComputeConfiguration),
        }),
      ).annotate({
        identifier: "AudienceGenerationJobDataSource",
      });
    case 4:
      return S.suspend(() => S.Struct({ type: AudienceSizeType, value: S.Number })).annotate({
        identifier: "AudienceSize",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ audienceSize: AudienceSize, score: S.optional(S.Number) }),
      ).annotate({ identifier: "RelevanceMetric" });
    case 6:
      return S.Array(RelevanceMetric);
    case 7:
      return S.suspend(() =>
        S.Struct({ relevanceMetrics: RelevanceMetrics, recallMetric: S.optional(S.Number) }),
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
          status: AudienceGenerationJobStatus,
          statusDetails: S.optional(StatusDetails),
          configuredAudienceModelArn: S.String,
          seedAudience: S.optional(AudienceGenerationJobDataSource),
          includeSeedInOutput: S.optional(S.Boolean),
          collaborationId: S.optional(S.String),
          metrics: S.optional(AudienceQualityMetrics),
          startedBy: S.optional(S.String),
          tags: S.optional(TagMap),
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
          status: AudienceModelStatus,
          statusDetails: S.optional(StatusDetails),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(TagMap),
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
          privacyConfiguration: S.optional(PrivacyConfiguration),
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
          budgetType: AccessBudgetType,
          autoRefresh: S.optional(AutoRefreshMode),
        }),
      ).annotate({ identifier: "AccessBudgetDetails" });
    case 7:
      return S.Array(AccessBudgetDetails);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          details: AccessBudgetDetailsList,
          aggregateRemainingBudget: S.Number,
        }),
      ).annotate({ identifier: "AccessBudget" });
    case 1:
      return S.Array(AccessBudget);
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ accessBudgets: AccessBudgets })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          columnName: S.String,
          columnType: SyntheticDataColumnType,
          isPredictiveValue: S.Boolean,
        }),
      ).annotate({
        identifier: "SyntheticDataColumnProperties",
      });
    case 4:
      return S.Array(SyntheticDataColumnProperties);
    case 5:
      return S.suspend(() => S.Struct({ columnMapping: ColumnMappingList })).annotate({
        identifier: "ColumnClassificationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          epsilon: S.Number,
          maxMembershipInferenceAttackScore: S.Number,
          columnClassification: S.optional(ColumnClassificationDetails),
        }),
      ).annotate({
        identifier: "MLSyntheticDataParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ attackVersion: MembershipInferenceAttackVersion, score: S.Number }),
      ).annotate({
        identifier: "MembershipInferenceAttackScore",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MembershipInferenceAttackScore);
    case 1:
      return S.suspend(() =>
        S.Struct({ membershipInferenceAttackScores: MembershipInferenceAttackScoreList }),
      ).annotate({ identifier: "DataPrivacyScores" });
    case 2:
      return S.suspend(() => S.Struct({ dataPrivacyScores: DataPrivacyScores })).annotate({
        identifier: "SyntheticDataEvaluationScores",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          syntheticDataParameters: MLSyntheticDataParameters,
          syntheticDataEvaluationScores: S.optional(SyntheticDataEvaluationScores),
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
          configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationArnList,
          status: MLInputChannelStatus,
          statusDetails: S.optional(StatusDetails),
          retentionInDays: S.Number,
          numberOfRecords: S.optional(S.Number),
          privacyBudgets: S.optional(PrivacyBudgets),
          description: S.optional(S.String),
          syntheticDataConfiguration: S.optional(SyntheticDataConfiguration),
          payerConfiguration: S.optional(PayerConfiguration),
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
      return S.Array(IncrementalTrainingDataChannelOutput);
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
          incrementalTrainingDataChannels: S.optional(IncrementalTrainingDataChannelsOutput),
          name: S.String,
          description: S.optional(S.String),
          status: TrainedModelStatus,
          statusDetails: S.optional(StatusDetails),
          configuredModelAlgorithmAssociationArn: S.String,
          resourceConfig: S.optional(ResourceConfig),
          trainingInputMode: S.optional(TrainingInputMode),
          stoppingCondition: S.optional(StoppingCondition),
          metricsStatus: S.optional(MetricsStatus),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(LogsStatus),
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
          outputConfig: ConfiguredAudienceModelOutputConfig,
          description: S.optional(S.String),
          status: ConfiguredAudienceModelStatus,
          sharedAudienceMetrics: MetricsList,
          minMatchingSeedSize: S.optional(S.Number),
          audienceSizeConfig: S.optional(AudienceSizeConfig),
          tags: S.optional(TagMap),
          childResourceTagOnCreatePolicy: S.optional(TagOnCreatePolicy),
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
          trainingContainerConfig: S.optional(ContainerConfig),
          inferenceContainerConfig: S.optional(InferenceContainerConfig),
          roleArn: S.String,
          description: S.optional(S.String),
          tags: S.optional(TagMap),
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
          privacyConfiguration: S.optional(PrivacyConfiguration),
          description: S.optional(S.String),
          tags: S.optional(TagMap),
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
        S.Struct({ destination: S.optional(Destination), roleArn: S.String }),
      ).annotate({ identifier: "MLOutputConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String,
          defaultOutputLocation: MLOutputConfiguration,
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
          configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationArnList,
          status: MLInputChannelStatus,
          statusDetails: S.optional(StatusDetails),
          retentionInDays: S.Number,
          numberOfRecords: S.optional(S.Number),
          privacyBudgets: S.optional(PrivacyBudgets),
          description: S.optional(S.String),
          syntheticDataConfiguration: S.optional(SyntheticDataConfiguration),
          payerConfiguration: S.optional(PayerConfiguration),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          inputChannel: InputChannel,
          protectedQueryIdentifier: S.optional(S.String),
          numberOfFiles: S.optional(S.Number),
          sizeInGb: S.optional(S.Number),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(TagMap),
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
          incrementalTrainingDataChannels: S.optional(IncrementalTrainingDataChannelsOutput),
          name: S.String,
          description: S.optional(S.String),
          status: TrainedModelStatus,
          statusDetails: S.optional(StatusDetails),
          configuredModelAlgorithmAssociationArn: S.String,
          resourceConfig: S.optional(ResourceConfig),
          trainingInputMode: S.optional(TrainingInputMode),
          stoppingCondition: S.optional(StoppingCondition),
          metricsStatus: S.optional(MetricsStatus),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(LogsStatus),
          logsStatusDetails: S.optional(S.String),
          trainingContainerImageDigest: S.optional(S.String),
          mlModelTrainingPayerAccountId: S.optional(S.String),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          hyperparameters: S.optional(HyperParameters),
          environment: S.optional(Environment),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(TagMap),
          dataChannels: ModelTrainingDataChannels,
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
        S.Struct({ instanceType: InferenceInstanceType, instanceCount: S.optional(S.Number) }),
      ).annotate({ identifier: "InferenceResourceConfig" });
    case 2:
      return S.suspend(() => S.Struct({ accountId: S.String })).annotate({
        identifier: "InferenceReceiverMember",
      });
    case 3:
      return S.Array(InferenceReceiverMember);
    case 4:
      return S.suspend(() =>
        S.Struct({ accept: S.optional(S.String), members: InferenceReceiverMembers }),
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
          status: TrainedModelInferenceJobStatus,
          trainedModelArn: S.String,
          trainedModelVersionIdentifier: S.optional(S.String),
          resourceConfig: InferenceResourceConfig,
          outputConfiguration: InferenceOutputConfiguration,
          membershipIdentifier: S.String,
          dataSource: ModelInferenceDataSource,
          containerExecutionParameters: S.optional(InferenceContainerExecutionParameters),
          statusDetails: S.optional(StatusDetails),
          description: S.optional(S.String),
          inferenceContainerImageDigest: S.optional(S.String),
          environment: S.optional(InferenceEnvironmentMap),
          kmsKeyArn: S.optional(S.String),
          metricsStatus: S.optional(MetricsStatus),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(LogsStatus),
          logsStatusDetails: S.optional(S.String),
          tags: S.optional(TagMap),
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
          trainingData: DatasetList,
          status: TrainingDatasetStatus,
          roleArn: S.String,
          tags: S.optional(TagMap),
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
          audienceSize: AudienceSize,
          description: S.optional(S.String),
          status: AudienceExportJobStatus,
          statusDetails: S.optional(StatusDetails),
          outputLocation: S.optional(S.String),
        }),
      ).annotate({ identifier: "AudienceExportJobSummary" });
    case 4:
      return S.Array(AudienceExportJobSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), audienceExportJobs: AudienceExportJobList }),
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
          status: AudienceGenerationJobStatus,
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
      return S.Array(AudienceGenerationJobSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          audienceGenerationJobs: AudienceGenerationJobList,
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
          status: AudienceModelStatus,
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "AudienceModelSummary" });
    case 4:
      return S.Array(AudienceModelSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), audienceModels: AudienceModelList }),
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
      return S.Array(CollaborationConfiguredModelAlgorithmAssociationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationConfiguredModelAlgorithmAssociations:
            CollaborationConfiguredModelAlgorithmAssociationList,
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
          configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationArnList,
          mlInputChannelArn: S.String,
          status: MLInputChannelStatus,
          creatorAccountId: S.String,
          description: S.optional(S.String),
          payerConfiguration: S.optional(PayerConfiguration),
        }),
      ).annotate({
        identifier: "CollaborationMLInputChannelSummary",
      });
    case 4:
      return S.Array(CollaborationMLInputChannelSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationMLInputChannelsList: CollaborationMLInputChannelsList,
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
      return S.Array(TrainedModelExportReceiverMember);
    case 1:
      return S.suspend(() => S.Struct({ members: TrainedModelExportReceiverMembers })).annotate({
        identifier: "TrainedModelExportOutputConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          name: S.String,
          outputConfiguration: TrainedModelExportOutputConfiguration,
          status: TrainedModelExportJobStatus,
          statusDetails: S.optional(StatusDetails),
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
      return S.Array(CollaborationTrainedModelExportJobSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationTrainedModelExportJobs: CollaborationTrainedModelExportJobList,
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
          status: TrainedModelInferenceJobStatus,
          outputConfiguration: InferenceOutputConfiguration,
          name: S.String,
          description: S.optional(S.String),
          metricsStatus: S.optional(MetricsStatus),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(LogsStatus),
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
      return S.Array(CollaborationTrainedModelInferenceJobSummary);
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationTrainedModelInferenceJobs: CollaborationTrainedModelInferenceJobList,
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
          incrementalTrainingDataChannels: S.optional(IncrementalTrainingDataChannelsOutput),
          description: S.optional(S.String),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          status: TrainedModelStatus,
          configuredModelAlgorithmAssociationArn: S.String,
          creatorAccountId: S.String,
          mlModelTrainingPayerAccountId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CollaborationTrainedModelSummary",
      });
    case 3:
      return S.Array(CollaborationTrainedModelSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationTrainedModels: CollaborationTrainedModelList,
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
          outputConfig: ConfiguredAudienceModelOutputConfig,
          description: S.optional(S.String),
          configuredAudienceModelArn: S.String,
          status: ConfiguredAudienceModelStatus,
        }),
      ).annotate({
        identifier: "ConfiguredAudienceModelSummary",
      });
    case 7:
      return S.Array(ConfiguredAudienceModelSummary);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          configuredAudienceModels: ConfiguredAudienceModelList,
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
      return S.Array(ConfiguredModelAlgorithmAssociationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationList,
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
      return S.Array(ConfiguredModelAlgorithmSummary);
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          configuredModelAlgorithms: ConfiguredModelAlgorithmList,
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
          configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationArnList,
          protectedQueryIdentifier: S.optional(S.String),
          mlInputChannelArn: S.String,
          status: MLInputChannelStatus,
          description: S.optional(S.String),
          payerConfiguration: S.optional(PayerConfiguration),
        }),
      ).annotate({ identifier: "MLInputChannelSummary" });
    case 3:
      return S.Array(MLInputChannelSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), mlInputChannelsList: MLInputChannelsList }),
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
      return S.suspend(() => S.Struct({ tags: TagMap })).annotate({
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
          status: TrainedModelInferenceJobStatus,
          outputConfiguration: InferenceOutputConfiguration,
          name: S.String,
          description: S.optional(S.String),
          metricsStatus: S.optional(MetricsStatus),
          metricsStatusDetails: S.optional(S.String),
          logsStatus: S.optional(LogsStatus),
          logsStatusDetails: S.optional(S.String),
          mlModelInferencePayerAccountId: S.optional(S.String),
          createTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "TrainedModelInferenceJobSummary",
      });
    case 1:
      return S.Array(TrainedModelInferenceJobSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          trainedModelInferenceJobs: TrainedModelInferenceJobList,
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
          incrementalTrainingDataChannels: S.optional(IncrementalTrainingDataChannelsOutput),
          name: S.String,
          description: S.optional(S.String),
          membershipIdentifier: S.String,
          collaborationIdentifier: S.String,
          status: TrainedModelStatus,
          configuredModelAlgorithmAssociationArn: S.String,
          mlModelTrainingPayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "TrainedModelSummary" });
    case 5:
      return S.Array(TrainedModelSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), trainedModels: TrainedModelList }),
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
          status: S.optional(TrainedModelStatus).pipe(T.HttpQuery("status")),
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
          status: TrainingDatasetStatus,
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "TrainingDatasetSummary" });
    case 2:
      return S.Array(TrainingDatasetSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), trainingDatasets: TrainingDatasetList }),
      ).annotate({
        identifier: "ListTrainingDatasetsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String.pipe(T.HttpLabel("configuredAudienceModelArn")),
          configuredAudienceModelPolicy: S.String,
          previousPolicyHash: S.optional(S.String),
          policyExistenceCondition: S.optional(PolicyExistenceCondition),
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
          defaultOutputLocation: MLOutputConfiguration,
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
          audienceSize: AudienceSize,
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
          seedAudience: AudienceGenerationJobDataSource,
          includeSeedInOutput: S.optional(S.Boolean),
          collaborationId: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(TagMap),
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
          outputConfiguration: TrainedModelExportOutputConfiguration,
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
          resourceConfig: InferenceResourceConfig,
          outputConfiguration: InferenceOutputConfiguration,
          dataSource: ModelInferenceDataSource,
          description: S.optional(S.String),
          containerExecutionParameters: S.optional(InferenceContainerExecutionParameters),
          environment: S.optional(InferenceEnvironmentMap),
          kmsKeyArn: S.optional(S.String),
          tags: S.optional(TagMap),
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
    case 6:
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelArn: S.String.pipe(T.HttpLabel("configuredAudienceModelArn")),
          outputConfig: S.optional(ConfiguredAudienceModelOutputConfig),
          audienceModelArn: S.optional(S.String),
          sharedAudienceMetrics: S.optional(MetricsList),
          minMatchingSeedSize: S.optional(S.Number),
          audienceSizeConfig: S.optional(AudienceSizeConfig),
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
