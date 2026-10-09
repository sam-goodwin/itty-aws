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
  sdkId: "CleanRooms",
  serviceShapeName: "AWSBastionControlPlaneServiceLambda",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cleanrooms" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-02-17");
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
              `https://cleanrooms-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://cleanrooms-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://cleanrooms.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cleanrooms.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      reason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
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
      quotaName: S.String,
      quotaValue: S.Number,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(435)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CollaborationIdentifier = string;
export type AnalysisTemplateArn = string;
export type AnalysisTemplateArnList = string[];
export interface BatchGetCollaborationAnalysisTemplateInput {
  collaborationIdentifier: string;
  analysisTemplateArns: string[];
}
export type AnalysisTemplateIdentifier = string;
export type UUID = string;
export type CollaborationArn = string;
export type ResourceDescription = string;
export type AccountId = string;
export type ResourceAlias = string;
export type TableAlias = string;
export type QueryTables = string[];
export interface AnalysisSchema {
  referencedTables?: string[];
}
export type AnalysisFormat = "SQL" | "PYSPARK_1_0" | (string & {});
export type AnalysisTemplateText = string | redacted.Redacted<string>;
export interface S3Location {
  bucket: string;
  key: string;
}
export interface AnalysisTemplateArtifact {
  location: S3Location;
}
export type AnalysisTemplateArtifactList = AnalysisTemplateArtifact[];
export type RoleArn = string;
export interface AnalysisTemplateArtifacts {
  entryPoint: AnalysisTemplateArtifact;
  additionalArtifacts?: AnalysisTemplateArtifact[];
  roleArn: string;
}
export type AnalysisSource =
  | { text: string | redacted.Redacted<string>; artifacts?: never }
  | { text?: never; artifacts: AnalysisTemplateArtifacts };
export interface Hash {
  sha256?: string;
}
export type HashList = Hash[];
export interface AnalysisTemplateArtifactMetadata {
  entryPointHash: Hash;
  additionalArtifactHashes?: Hash[];
}
export type AnalysisSourceMetadata = { artifacts: AnalysisTemplateArtifactMetadata };
export type ParameterName = string;
export type ParameterType =
  | "SMALLINT"
  | "INTEGER"
  | "BIGINT"
  | "DECIMAL"
  | "REAL"
  | "DOUBLE_PRECISION"
  | "BOOLEAN"
  | "CHAR"
  | "VARCHAR"
  | "DATE"
  | "TIMESTAMP"
  | "TIMESTAMPTZ"
  | "TIME"
  | "TIMETZ"
  | "VARBYTE"
  | "BINARY"
  | "BYTE"
  | "CHARACTER"
  | "DOUBLE"
  | "FLOAT"
  | "INT"
  | "LONG"
  | "NUMERIC"
  | "SHORT"
  | "STRING"
  | "TIMESTAMP_LTZ"
  | "TIMESTAMP_NTZ"
  | "TINYINT"
  | (string & {});
export type ParameterValue = string;
export interface AnalysisParameter {
  name: string;
  type: ParameterType;
  defaultValue?: string;
}
export type AnalysisParameterList = AnalysisParameter[];
export type AnalysisTemplateValidationType = "DIFFERENTIAL_PRIVACY" | (string & {});
export type AnalysisTemplateValidationStatus =
  | "VALID"
  | "INVALID"
  | "UNABLE_TO_VALIDATE"
  | (string & {});
export interface AnalysisTemplateValidationStatusReason {
  message: string;
}
export type AnalysisTemplateValidationStatusReasonList = AnalysisTemplateValidationStatusReason[];
export interface AnalysisTemplateValidationStatusDetail {
  type: AnalysisTemplateValidationType;
  status: AnalysisTemplateValidationStatus;
  reasons?: AnalysisTemplateValidationStatusReason[];
}
export type AnalysisTemplateValidationStatusDetailList = AnalysisTemplateValidationStatusDetail[];
export type ErrorMessageType = "DETAILED" | (string & {});
export interface ErrorMessageConfiguration {
  type: ErrorMessageType;
}
export type MaxMembershipInferenceAttackScore = number;
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
  columnClassification: ColumnClassificationDetails;
}
export type SyntheticDataParameters = { mlSyntheticDataParameters: MLSyntheticDataParameters };
export interface CollaborationAnalysisTemplate {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  description?: string;
  creatorAccountId: string;
  name: string;
  createTime: Date;
  updateTime: Date;
  schema: AnalysisSchema;
  format: AnalysisFormat;
  source?: AnalysisSource;
  sourceMetadata?: AnalysisSourceMetadata;
  analysisParameters?: AnalysisParameter[];
  validations?: AnalysisTemplateValidationStatusDetail[];
  errorMessageConfiguration?: ErrorMessageConfiguration;
  syntheticDataParameters?: SyntheticDataParameters;
}
export type CollaborationAnalysisTemplateList = CollaborationAnalysisTemplate[];
export interface BatchGetCollaborationAnalysisTemplateError_ {
  arn: string;
  code: string;
  message: string;
}
export type BatchGetCollaborationAnalysisTemplateErrorList =
  BatchGetCollaborationAnalysisTemplateError_[];
export interface BatchGetCollaborationAnalysisTemplateOutput {
  collaborationAnalysisTemplates: CollaborationAnalysisTemplate[];
  errors: BatchGetCollaborationAnalysisTemplateError_[];
}
export type TableAliasList = string[];
export interface BatchGetSchemaInput {
  collaborationIdentifier: string;
  names: string[];
}
export type ColumnName = string;
export type ColumnTypeString = string;
export interface Column {
  name: string;
  type: string;
}
export type ColumnList = Column[];
export type AnalysisRuleType =
  | "AGGREGATION"
  | "LIST"
  | "CUSTOM"
  | "ID_MAPPING_TABLE"
  | (string & {});
export type AnalysisRuleTypeList = AnalysisRuleType[];
export type AnalysisMethod = "DIRECT_QUERY" | "DIRECT_JOB" | "MULTIPLE" | (string & {});
export type SelectedAnalysisMethod = "DIRECT_QUERY" | "DIRECT_JOB" | (string & {});
export type SelectedAnalysisMethods = SelectedAnalysisMethod[];
export type TableDescription = string;
export type SchemaType = "TABLE" | "ID_MAPPING_TABLE" | "INTERMEDIATE_TABLE" | (string & {});
export type SchemaStatus = "READY" | "NOT_READY" | (string & {});
export type SchemaStatusReasonCode =
  | "ANALYSIS_RULE_MISSING"
  | "ANALYSIS_TEMPLATES_NOT_CONFIGURED"
  | "ANALYSIS_PROVIDERS_NOT_CONFIGURED"
  | "DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED"
  | "ID_MAPPING_TABLE_NOT_POPULATED"
  | "COLLABORATION_ANALYSIS_RULE_NOT_CONFIGURED"
  | "ADDITIONAL_ANALYSES_NOT_CONFIGURED"
  | "RESULT_RECEIVERS_NOT_CONFIGURED"
  | "ADDITIONAL_ANALYSES_NOT_ALLOWED"
  | "RESULT_RECEIVERS_NOT_ALLOWED"
  | "ANALYSIS_RULE_TYPES_NOT_COMPATIBLE"
  | "INTERMEDIATE_TABLE_NOT_POPULATED"
  | "INTERMEDIATE_TABLE_ANALYSIS_RULE_MISSING"
  | "INTERMEDIATE_TABLE_BASE_TABLE_REMOVED"
  | "INTERMEDIATE_TABLE_INHERITED_CONSTRAINTS_VIOLATED"
  | "INTERMEDIATE_TABLE_DISALLOWED_BY_DATA_PROVIDER"
  | "INTERMEDIATE_TABLE_RETENTION_PERIOD_EXPIRED"
  | (string & {});
export interface SchemaStatusReason {
  code: SchemaStatusReasonCode;
  message: string;
}
export type SchemaStatusReasonList = SchemaStatusReason[];
export type SchemaConfiguration = "DIFFERENTIAL_PRIVACY" | (string & {});
export type SchemaConfigurationList = SchemaConfiguration[];
export type AnalysisType = "DIRECT_ANALYSIS" | "ADDITIONAL_ANALYSIS" | (string & {});
export interface SchemaStatusDetail {
  status: SchemaStatus;
  reasons?: SchemaStatusReason[];
  analysisRuleType?: AnalysisRuleType;
  configurations?: SchemaConfiguration[];
  analysisType: AnalysisType;
}
export type SchemaStatusDetailList = SchemaStatusDetail[];
export type SchemaResourceArn = string;
export type IdNamespaceType = "SOURCE" | "TARGET" | (string & {});
export interface IdMappingTableInputSource {
  idNamespaceAssociationId: string;
  type: IdNamespaceType;
}
export type IdMappingTableInputSourceList = IdMappingTableInputSource[];
export interface IdMappingTableSchemaTypeProperties {
  idMappingTableInputSource: IdMappingTableInputSource[];
  idMappingTableId?: string;
}
export interface IntermediateTableSchemaTypeProperties {
  intermediateTableId: string;
}
export interface ConfiguredTableAssociationSchemaTypeProperties {
  configuredTableAssociationId: string;
}
export type SchemaTypeProperties =
  | {
      idMappingTable: IdMappingTableSchemaTypeProperties;
      intermediateTable?: never;
      configuredTableAssociation?: never;
    }
  | {
      idMappingTable?: never;
      intermediateTable: IntermediateTableSchemaTypeProperties;
      configuredTableAssociation?: never;
    }
  | {
      idMappingTable?: never;
      intermediateTable?: never;
      configuredTableAssociation: ConfiguredTableAssociationSchemaTypeProperties;
    };
export interface Schema {
  columns: Column[];
  partitionKeys: Column[];
  analysisRuleTypes: AnalysisRuleType[];
  analysisMethod?: AnalysisMethod;
  selectedAnalysisMethods?: SelectedAnalysisMethod[];
  creatorAccountId: string;
  name: string;
  collaborationId: string;
  collaborationArn: string;
  description: string;
  createTime: Date;
  updateTime: Date;
  type: SchemaType;
  schemaStatusDetails: SchemaStatusDetail[];
  resourceArn?: string;
  schemaTypeProperties?: SchemaTypeProperties;
}
export type SchemaList = Schema[];
export interface BatchGetSchemaError_ {
  name: string;
  code: string;
  message: string;
}
export type BatchGetSchemaErrorList = BatchGetSchemaError_[];
export interface BatchGetSchemaOutput {
  schemas: Schema[];
  errors: BatchGetSchemaError_[];
}
export interface SchemaAnalysisRuleRequest {
  name: string;
  type: AnalysisRuleType;
}
export type SchemaAnalysisRuleRequestList = SchemaAnalysisRuleRequest[];
export interface BatchGetSchemaAnalysisRuleInput {
  collaborationIdentifier: string;
  schemaAnalysisRuleRequests: SchemaAnalysisRuleRequest[];
}
export type AnalysisRuleColumnName = string;
export type AnalysisRuleColumnList = string[];
export type JoinOperator = string;
export type JoinOperatorsList = string[];
export type AdditionalAnalyses = "ALLOWED" | "REQUIRED" | "NOT_ALLOWED" | (string & {});
export interface AnalysisRuleList {
  joinColumns: string[];
  allowedJoinOperators?: string[];
  listColumns: string[];
  additionalAnalyses?: AdditionalAnalyses;
}
export type AnalysisRuleColumnNameList = string[];
export type AggregateFunctionName = string;
export interface AggregateColumn {
  columnNames: string[];
  function: string;
}
export type AggregateColumnList = AggregateColumn[];
export type JoinRequiredOption = string;
export type ScalarFunctions = string;
export type ScalarFunctionsList = string[];
export type AggregationType = string;
export interface AggregationConstraint {
  columnName: string;
  minimum: number;
  type: string;
}
export type AggregationConstraints = AggregationConstraint[];
export interface AnalysisRuleAggregation {
  aggregateColumns: AggregateColumn[];
  joinColumns: string[];
  joinRequired?: string;
  allowedJoinOperators?: string[];
  dimensionColumns: string[];
  scalarFunctions: string[];
  outputConstraints: AggregationConstraint[];
  additionalAnalyses?: AdditionalAnalyses;
}
export type AnalysisTemplateArnOrQueryWildcard = string;
export type AllowedAnalysesList = string[];
export type AllowedAnalysisProviderList = string[];
export interface DifferentialPrivacyColumn {
  name: string;
}
export type DifferentialPrivacyColumnList = DifferentialPrivacyColumn[];
export interface DifferentialPrivacyConfiguration {
  columns: DifferentialPrivacyColumn[];
}
export type AggregationThresholdType = "COUNT_DISTINCT" | (string & {});
export interface OutputColumnThreshold {
  outputColumnName: string;
  minimumIdentityCount: number;
}
export type OutputColumnThresholdList = OutputColumnThreshold[];
export type AllowedAggregateExpressionType = "COLUMNS_ONLY" | "ANY_EXPRESSION" | (string & {});
export interface AggregationThreshold {
  identityColumns: string[];
  minimumIdentityCount: number;
  type: AggregationThresholdType;
  outputColumnThresholds?: OutputColumnThreshold[];
  allowedAggregateExpressionType: AllowedAggregateExpressionType;
}
export type AggregationThresholdList = AggregationThreshold[];
export interface ComparisonControls {
  allowedLiteralComparisonColumns: string[];
  allowedColumnComparisonColumns: string[];
}
export type AllowedResultReceivers = string[];
export type AdditionalAnalysesResourceArn = string;
export type AllowedAdditionalAnalyses = string[];
export interface AnalysisRuleCustom {
  allowedAnalyses: string[];
  allowedAnalysisProviders?: string[];
  additionalAnalyses?: AdditionalAnalyses;
  disallowedOutputColumns?: string[];
  differentialPrivacy?: DifferentialPrivacyConfiguration;
  aggregationThresholds?: AggregationThreshold[];
  comparisonControls?: ComparisonControls;
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
export interface QueryConstraintRequireOverlap {
  columns?: string[];
}
export type QueryConstraint = { requireOverlap: QueryConstraintRequireOverlap };
export type QueryConstraintList = QueryConstraint[];
export interface AnalysisRuleIdMappingTable {
  joinColumns: string[];
  queryConstraints: QueryConstraint[];
  dimensionColumns?: string[];
}
export type AnalysisRulePolicyV1 =
  | { list: AnalysisRuleList; aggregation?: never; custom?: never; idMappingTable?: never }
  | { list?: never; aggregation: AnalysisRuleAggregation; custom?: never; idMappingTable?: never }
  | { list?: never; aggregation?: never; custom: AnalysisRuleCustom; idMappingTable?: never }
  | {
      list?: never;
      aggregation?: never;
      custom?: never;
      idMappingTable: AnalysisRuleIdMappingTable;
    };
export type AnalysisRulePolicy = { v1: AnalysisRulePolicyV1 };
export interface ConfiguredTableAssociationAnalysisRuleList {
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
export interface ConfiguredTableAssociationAnalysisRuleAggregation {
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
export interface ConfiguredTableAssociationAnalysisRuleCustom {
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
export type ConfiguredTableAssociationAnalysisRulePolicyV1 =
  | { list: ConfiguredTableAssociationAnalysisRuleList; aggregation?: never; custom?: never }
  | { list?: never; aggregation: ConfiguredTableAssociationAnalysisRuleAggregation; custom?: never }
  | { list?: never; aggregation?: never; custom: ConfiguredTableAssociationAnalysisRuleCustom };
export type ConfiguredTableAssociationAnalysisRulePolicy = {
  v1: ConfiguredTableAssociationAnalysisRulePolicyV1;
};
export interface ConsolidatedPolicyList {
  joinColumns: string[];
  allowedJoinOperators?: string[];
  listColumns: string[];
  additionalAnalyses?: AdditionalAnalyses;
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
export interface ConsolidatedPolicyAggregation {
  aggregateColumns: AggregateColumn[];
  joinColumns: string[];
  joinRequired?: string;
  allowedJoinOperators?: string[];
  dimensionColumns: string[];
  scalarFunctions: string[];
  outputConstraints: AggregationConstraint[];
  additionalAnalyses?: AdditionalAnalyses;
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
export interface ConsolidatedPolicyCustom {
  allowedAnalyses: string[];
  allowedAnalysisProviders?: string[];
  additionalAnalyses?: AdditionalAnalyses;
  disallowedOutputColumns?: string[];
  differentialPrivacy?: DifferentialPrivacyConfiguration;
  aggregationThresholds?: AggregationThreshold[];
  comparisonControls?: ComparisonControls;
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
export type ConsolidatedPolicyV1 =
  | { list: ConsolidatedPolicyList; aggregation?: never; custom?: never }
  | { list?: never; aggregation: ConsolidatedPolicyAggregation; custom?: never }
  | { list?: never; aggregation?: never; custom: ConsolidatedPolicyCustom };
export type ConsolidatedPolicy = { v1: ConsolidatedPolicyV1 };
export interface AnalysisRule {
  collaborationId: string;
  type: AnalysisRuleType;
  name: string;
  createTime: Date;
  updateTime: Date;
  policy: AnalysisRulePolicy;
  collaborationPolicy?: ConfiguredTableAssociationAnalysisRulePolicy;
  consolidatedPolicy?: ConsolidatedPolicy;
}
export type SchemaAnalysisRuleList = AnalysisRule[];
export interface BatchGetSchemaAnalysisRuleError_ {
  name: string;
  type: AnalysisRuleType;
  code: string;
  message: string;
}
export type BatchGetSchemaAnalysisRuleErrorList = BatchGetSchemaAnalysisRuleError_[];
export interface BatchGetSchemaAnalysisRuleOutput {
  analysisRules: AnalysisRule[];
  errors: BatchGetSchemaAnalysisRuleError_[];
}
export type MembershipIdentifier = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateAnalysisTemplateInput {
  description?: string;
  membershipIdentifier: string;
  name: string;
  format: AnalysisFormat;
  source: AnalysisSource;
  tags?: { [key: string]: string | undefined };
  analysisParameters?: AnalysisParameter[];
  schema?: AnalysisSchema;
  errorMessageConfiguration?: ErrorMessageConfiguration;
  syntheticDataParameters?: SyntheticDataParameters;
}
export type MembershipArn = string;
export interface AnalysisTemplate {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  membershipId: string;
  membershipArn: string;
  description?: string;
  name: string;
  createTime: Date;
  updateTime: Date;
  schema: AnalysisSchema;
  format: AnalysisFormat;
  source: AnalysisSource;
  sourceMetadata?: AnalysisSourceMetadata;
  analysisParameters?: AnalysisParameter[];
  validations?: AnalysisTemplateValidationStatusDetail[];
  errorMessageConfiguration?: ErrorMessageConfiguration;
  syntheticDataParameters?: SyntheticDataParameters;
}
export interface CreateAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
export type MemberAbility =
  | "CAN_QUERY"
  | "CAN_RECEIVE_RESULTS"
  | "CAN_RUN_JOB"
  | "CAN_EXPORT_QUERY_ANALYSIS_LOG"
  | (string & {});
export type MemberAbilities = MemberAbility[];
export type CustomMLMemberAbility =
  | "CAN_RECEIVE_MODEL_OUTPUT"
  | "CAN_RECEIVE_INFERENCE_OUTPUT"
  | (string & {});
export type CustomMLMemberAbilities = CustomMLMemberAbility[];
export interface MLMemberAbilities {
  customMLMemberAbilities: CustomMLMemberAbility[];
}
export type DisplayName = string;
export interface QueryComputePaymentConfig {
  isResponsible: boolean;
}
export interface ModelTrainingPaymentConfig {
  isResponsible: boolean;
}
export interface ModelInferencePaymentConfig {
  isResponsible: boolean;
}
export interface SyntheticDataGenerationPaymentConfig {
  isResponsible: boolean;
}
export interface MLPaymentConfig {
  modelTraining?: ModelTrainingPaymentConfig;
  modelInference?: ModelInferencePaymentConfig;
  syntheticDataGeneration?: SyntheticDataGenerationPaymentConfig;
}
export interface JobComputePaymentConfig {
  isResponsible: boolean;
}
export interface PaymentConfiguration {
  queryCompute: QueryComputePaymentConfig;
  machineLearning?: MLPaymentConfig;
  jobCompute?: JobComputePaymentConfig;
}
export interface MemberSpecification {
  accountId: string;
  memberAbilities: MemberAbility[];
  mlMemberAbilities?: MLMemberAbilities;
  displayName: string;
  paymentConfiguration?: PaymentConfiguration;
}
export type MemberList = MemberSpecification[];
export type CollaborationName = string;
export type CollaborationDescription = string;
export interface DataEncryptionMetadata {
  allowCleartext: boolean;
  allowDuplicates: boolean;
  allowJoinsOnColumnsWithDifferentNames: boolean;
  preserveNulls: boolean;
}
export type CollaborationQueryLogStatus = "ENABLED" | "DISABLED" | (string & {});
export type CollaborationJobLogStatus = "ENABLED" | "DISABLED" | (string & {});
export type AnalyticsEngine = "SPARK" | "CLEAN_ROOMS_SQL" | (string & {});
export type AutoApprovedChangeType =
  | "ADD_MEMBER"
  | "GRANT_RECEIVE_RESULTS_ABILITY"
  | "REVOKE_RECEIVE_RESULTS_ABILITY"
  | "GRANT_EXPORT_QUERY_ANALYSIS_LOG_ABILITY"
  | "REVOKE_EXPORT_QUERY_ANALYSIS_LOG_ABILITY"
  | (string & {});
export type AutoApprovedChangeTypeList = AutoApprovedChangeType[];
export type SupportedS3Region =
  | "us-west-1"
  | "us-west-2"
  | "us-east-1"
  | "us-east-2"
  | "af-south-1"
  | "ap-east-1"
  | "ap-east-2"
  | "ap-south-2"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-southeast-3"
  | "ap-southeast-5"
  | "ap-southeast-4"
  | "ap-southeast-7"
  | "ap-south-1"
  | "ap-northeast-3"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ca-central-1"
  | "ca-west-1"
  | "eu-south-1"
  | "eu-west-3"
  | "eu-south-2"
  | "eu-central-2"
  | "eu-central-1"
  | "eu-north-1"
  | "eu-west-1"
  | "eu-west-2"
  | "me-south-1"
  | "me-central-1"
  | "il-central-1"
  | "sa-east-1"
  | "mx-central-1"
  | (string & {});
export type AllowedResultRegions = SupportedS3Region[];
export interface CreateCollaborationInput {
  members: MemberSpecification[];
  name: string;
  description?: string;
  creatorMemberAbilities: MemberAbility[];
  creatorMLMemberAbilities?: MLMemberAbilities;
  creatorDisplayName: string;
  dataEncryptionMetadata?: DataEncryptionMetadata;
  queryLogStatus: CollaborationQueryLogStatus;
  jobLogStatus?: CollaborationJobLogStatus;
  tags?: { [key: string]: string | undefined };
  creatorPaymentConfiguration?: PaymentConfiguration;
  analyticsEngine?: AnalyticsEngine;
  autoApprovedChangeRequestTypes?: AutoApprovedChangeType[];
  allowedResultRegions?: SupportedS3Region[];
  isMetricsEnabled?: boolean;
}
export type MemberStatus = string;
export interface Collaboration {
  id: string;
  arn: string;
  name: string;
  description?: string;
  creatorAccountId: string;
  creatorDisplayName: string;
  createTime: Date;
  updateTime: Date;
  memberStatus: string;
  membershipId?: string;
  membershipArn?: string;
  dataEncryptionMetadata?: DataEncryptionMetadata;
  queryLogStatus: CollaborationQueryLogStatus;
  jobLogStatus?: CollaborationJobLogStatus;
  analyticsEngine?: AnalyticsEngine;
  autoApprovedChangeTypes?: AutoApprovedChangeType[];
  allowedResultRegions?: SupportedS3Region[];
  isMetricsEnabled?: boolean;
}
export interface CreateCollaborationOutput {
  collaboration: Collaboration;
}
export type ChangeSpecificationType = "MEMBER" | "COLLABORATION" | (string & {});
export interface MemberChangeSpecification {
  accountId: string;
  memberAbilities: MemberAbility[];
  mlMemberAbilities?: MLMemberAbilities;
  paymentConfiguration?: PaymentConfiguration;
  displayName?: string;
}
export interface CollaborationChangeSpecification {
  autoApprovedChangeTypes?: AutoApprovedChangeType[];
}
export type ChangeSpecification =
  | { member: MemberChangeSpecification; collaboration?: never }
  | { member?: never; collaboration: CollaborationChangeSpecification };
export interface ChangeInput {
  specificationType: ChangeSpecificationType;
  specification: ChangeSpecification;
}
export type ChangeInputList = ChangeInput[];
export interface CreateCollaborationChangeRequestInput {
  collaborationIdentifier: string;
  changes: ChangeInput[];
}
export type ChangeRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "CANCELLED"
  | "DENIED"
  | "COMMITTED"
  | (string & {});
export type ChangeType =
  | "ADD_MEMBER"
  | "GRANT_RECEIVE_RESULTS_ABILITY"
  | "REVOKE_RECEIVE_RESULTS_ABILITY"
  | "EDIT_AUTO_APPROVED_CHANGE_TYPES"
  | "ADD_PAYER_CANDIDATE"
  | "REMOVE_PAYER_CANDIDATE"
  | "GRANT_CAN_RECEIVE_MODEL_OUTPUT"
  | "GRANT_CAN_RECEIVE_INFERENCE_OUTPUT"
  | "REVOKE_CAN_RECEIVE_MODEL_OUTPUT"
  | "REVOKE_CAN_RECEIVE_INFERENCE_OUTPUT"
  | "GRANT_EXPORT_QUERY_ANALYSIS_LOG_ABILITY"
  | "REVOKE_EXPORT_QUERY_ANALYSIS_LOG_ABILITY"
  | (string & {});
export type ChangeTypeList = ChangeType[];
export interface Change {
  specificationType: ChangeSpecificationType;
  specification: ChangeSpecification;
  types: ChangeType[];
}
export type ChangeList = Change[];
export type ApprovalStatus = "APPROVED" | "DENIED" | "PENDING" | (string & {});
export interface ApprovalStatusDetails {
  status: ApprovalStatus;
}
export type ApprovalStatuses = { [key: string]: ApprovalStatusDetails | undefined };
export interface CollaborationChangeRequest {
  id: string;
  collaborationId: string;
  createTime: Date;
  updateTime: Date;
  status: ChangeRequestStatus;
  isAutoApproved: boolean;
  changes: Change[];
  approvals?: { [key: string]: ApprovalStatusDetails | undefined };
}
export interface CreateCollaborationChangeRequestOutput {
  collaborationChangeRequest: CollaborationChangeRequest;
}
export type ConfiguredAudienceModelArn = string;
export type ConfiguredAudienceModelAssociationName = string;
export interface CreateConfiguredAudienceModelAssociationInput {
  membershipIdentifier: string;
  configuredAudienceModelArn: string;
  configuredAudienceModelAssociationName: string;
  manageResourcePolicies: boolean;
  tags?: { [key: string]: string | undefined };
  description?: string;
}
export type ConfiguredAudienceModelAssociationIdentifier = string;
export type ConfiguredAudienceModelAssociationArn = string;
export interface ConfiguredAudienceModelAssociation {
  id: string;
  arn: string;
  configuredAudienceModelArn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  name: string;
  manageResourcePolicies: boolean;
  description?: string;
  createTime: Date;
  updateTime: Date;
}
export interface CreateConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
export type CommercialRegion =
  | "us-west-1"
  | "us-west-2"
  | "us-east-1"
  | "us-east-2"
  | "af-south-1"
  | "ap-east-1"
  | "ap-south-2"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-southeast-3"
  | "ap-southeast-5"
  | "ap-southeast-4"
  | "ap-southeast-7"
  | "ap-south-1"
  | "ap-northeast-3"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ca-central-1"
  | "ca-west-1"
  | "eu-south-1"
  | "eu-west-3"
  | "eu-south-2"
  | "eu-central-2"
  | "eu-central-1"
  | "eu-north-1"
  | "eu-west-1"
  | "eu-west-2"
  | "me-south-1"
  | "me-central-1"
  | "il-central-1"
  | "sa-east-1"
  | "mx-central-1"
  | "ap-east-2"
  | (string & {});
export type GlueTableName = string;
export type GlueDatabaseName = string;
export interface GlueTableReference {
  region?: CommercialRegion;
  tableName: string;
  databaseName: string;
}
export type SecretsManagerArn = string;
export type SnowflakeAccountIdentifier = string;
export type SnowflakeDatabaseName = string;
export type SnowflakeTableName = string;
export type SnowflakeSchemaName = string;
export interface SnowflakeTableSchemaV1 {
  columnName: string;
  columnType: string;
}
export type SnowflakeTableSchemaList = SnowflakeTableSchemaV1[];
export type SnowflakeTableSchema = { v1: SnowflakeTableSchemaV1[] };
export interface SnowflakeTableReference {
  secretArn: string;
  accountIdentifier: string;
  databaseName: string;
  tableName: string;
  schemaName: string;
  tableSchema: SnowflakeTableSchema;
}
export type AthenaWorkGroup = string;
export type AthenaOutputLocation = string;
export type AthenaDatabaseName = string;
export type AthenaTableName = string;
export type AthenaCatalogName = string;
export interface AthenaTableReference {
  region?: CommercialRegion;
  workGroup: string;
  outputLocation?: string;
  databaseName: string;
  tableName: string;
  catalogName?: string;
}
export type TableReference =
  | { glue: GlueTableReference; snowflake?: never; athena?: never }
  | { glue?: never; snowflake: SnowflakeTableReference; athena?: never }
  | { glue?: never; snowflake?: never; athena: AthenaTableReference };
export type AllowedColumnList = string[];
export interface CreateConfiguredTableInput {
  name: string;
  description?: string;
  tableReference: TableReference;
  allowedColumns: string[];
  analysisMethod: AnalysisMethod;
  selectedAnalysisMethods?: SelectedAnalysisMethod[];
  tags?: { [key: string]: string | undefined };
}
export type ConfiguredTableArn = string;
export type ConfiguredTableAnalysisRuleType = "AGGREGATION" | "LIST" | "CUSTOM" | (string & {});
export type ConfiguredTableAnalysisRuleTypeList = ConfiguredTableAnalysisRuleType[];
export interface ConfiguredTable {
  id: string;
  arn: string;
  name: string;
  description?: string;
  tableReference: TableReference;
  createTime: Date;
  updateTime: Date;
  analysisRuleTypes: ConfiguredTableAnalysisRuleType[];
  analysisMethod: AnalysisMethod;
  allowedColumns: string[];
  selectedAnalysisMethods?: SelectedAnalysisMethod[];
}
export interface CreateConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
export type ConfiguredTableIdentifier = string;
export type ConfiguredTableAnalysisRulePolicyV1 =
  | { list: AnalysisRuleList; aggregation?: never; custom?: never }
  | { list?: never; aggregation: AnalysisRuleAggregation; custom?: never }
  | { list?: never; aggregation?: never; custom: AnalysisRuleCustom };
export type ConfiguredTableAnalysisRulePolicy = { v1: ConfiguredTableAnalysisRulePolicyV1 };
export interface CreateConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy;
}
export interface ConfiguredTableAnalysisRule {
  configuredTableId: string;
  configuredTableArn: string;
  policy: ConfiguredTableAnalysisRulePolicy;
  type: ConfiguredTableAnalysisRuleType;
  createTime: Date;
  updateTime: Date;
}
export interface CreateConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
export interface CreateConfiguredTableAssociationInput {
  name: string;
  description?: string;
  membershipIdentifier: string;
  configuredTableIdentifier: string;
  roleArn: string;
  tags?: { [key: string]: string | undefined };
}
export type ConfiguredTableAssociationArn = string;
export type ConfiguredTableAssociationAnalysisRuleType =
  | "AGGREGATION"
  | "LIST"
  | "CUSTOM"
  | (string & {});
export type ConfiguredTableAssociationAnalysisRuleTypeList =
  ConfiguredTableAssociationAnalysisRuleType[];
export type ChildResourceType = "INTERMEDIATE_TABLE" | (string & {});
export type ResourceStatus =
  | "CREATED"
  | "POPULATE_STARTED"
  | "POPULATE_SUCCESS"
  | "POPULATE_FAILED"
  | "DISALLOWED_BY_DATA_PROVIDER"
  | "BASE_TABLE_REMOVED"
  | "RETENTION_PERIOD_EXPIRED"
  | (string & {});
export interface ChildResource {
  resourceId?: string;
  resourceType: ChildResourceType;
  resourceName: string;
  ownerAccountId: string;
  resourceStatus?: ResourceStatus;
}
export type ChildResourceList = ChildResource[];
export interface ConfiguredTableAssociation {
  arn: string;
  id: string;
  configuredTableId: string;
  configuredTableArn: string;
  membershipId: string;
  membershipArn: string;
  roleArn: string;
  name: string;
  description?: string;
  analysisRuleTypes?: ConfiguredTableAssociationAnalysisRuleType[];
  createTime: Date;
  updateTime: Date;
  childResources?: ChildResource[];
}
export interface CreateConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
export type ConfiguredTableAssociationIdentifier = string;
export interface CreateConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy;
}
export interface ConfiguredTableAssociationAnalysisRule {
  membershipIdentifier: string;
  configuredTableAssociationId: string;
  configuredTableAssociationArn: string;
  policy: ConfiguredTableAssociationAnalysisRulePolicy;
  type: ConfiguredTableAssociationAnalysisRuleType;
  createTime: Date;
  updateTime: Date;
}
export interface CreateConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
export type IdMappingTableInputReferenceArn = string;
export interface IdMappingTableInputReferenceConfig {
  inputReferenceArn: string;
  manageResourcePolicies: boolean;
}
export type KMSKeyArn = string;
export interface CreateIdMappingTableInput {
  membershipIdentifier: string;
  name: string;
  description?: string;
  inputReferenceConfig: IdMappingTableInputReferenceConfig;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
export type IdMappingTableArn = string;
export interface IdMappingTableInputReferenceProperties {
  idMappingTableInputSource: IdMappingTableInputSource[];
}
export interface IdMappingTable {
  id: string;
  arn: string;
  inputReferenceConfig: IdMappingTableInputReferenceConfig;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  description?: string;
  name: string;
  createTime: Date;
  updateTime: Date;
  inputReferenceProperties: IdMappingTableInputReferenceProperties;
  kmsKeyArn?: string;
  childResources?: ChildResource[];
}
export interface CreateIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
export type IdNamespaceAssociationInputReferenceArn = string;
export interface IdNamespaceAssociationInputReferenceConfig {
  inputReferenceArn: string;
  manageResourcePolicies: boolean;
}
export type GenericResourceName = string;
export interface IdMappingConfig {
  allowUseAsDimensionColumn: boolean;
}
export interface CreateIdNamespaceAssociationInput {
  membershipIdentifier: string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  tags?: { [key: string]: string | undefined };
  name: string;
  description?: string;
  idMappingConfig?: IdMappingConfig;
}
export type IdNamespaceAssociationIdentifier = string;
export type IdNamespaceAssociationArn = string;
export type IdMappingWorkflowsSupported = any[];
export interface IdNamespaceAssociationInputReferenceProperties {
  idNamespaceType: IdNamespaceType;
  idMappingWorkflowsSupported: any[];
}
export interface IdNamespaceAssociation {
  id: string;
  arn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  name: string;
  description?: string;
  createTime: Date;
  updateTime: Date;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  inputReferenceProperties: IdNamespaceAssociationInputReferenceProperties;
  idMappingConfig?: IdMappingConfig;
}
export interface CreateIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
export interface PopulationAnalysisSqlParameters {
  queryString?: string;
  analysisTemplateArn?: string;
}
export type PopulationAnalysisConfiguration = { sqlParameters: PopulationAnalysisSqlParameters };
export interface CreateIntermediateTableInput {
  membershipIdentifier: string;
  name: string;
  description?: string;
  populationAnalysisConfiguration: PopulationAnalysisConfiguration;
  kmsKeyArn?: string;
  retentionInDays?: number;
  tags?: { [key: string]: string | undefined };
}
export type IntermediateTableArn = string;
export type IntermediateTableStatus =
  | "CREATED"
  | "POPULATE_STARTED"
  | "POPULATE_SUCCESS"
  | "POPULATE_FAILED"
  | "DISALLOWED_BY_DATA_PROVIDER"
  | "BASE_TABLE_REMOVED"
  | "RETENTION_PERIOD_EXPIRED"
  | (string & {});
export type BaseTableDependencyType =
  | "TABLE"
  | "INTERMEDIATE_TABLE"
  | "ID_MAPPING_TABLE"
  | (string & {});
export type BaseTableParentType = "DIRECT" | "INDIRECT" | (string & {});
export interface IntermediateTableDependency {
  id: string;
  name: string;
  type: BaseTableDependencyType;
  parentType: BaseTableParentType;
  creatorAccountId: string;
}
export type DependencyList = IntermediateTableDependency[];
export type AnalysisIdentifier = string;
export type PopulateIntermediateTableAnalysisType = "QUERY" | (string & {});
export type ParameterMap = { [key: string]: string | undefined };
export interface InheritedAdditionalAnalysesSource {
  name: string;
  id: string;
  type: BaseTableDependencyType;
  value: AdditionalAnalyses;
  sourceAccountId: string;
}
export type InheritedAdditionalAnalysesSourceList = InheritedAdditionalAnalysesSource[];
export interface InheritedAdditionalAnalyses {
  value: AdditionalAnalyses;
  sources: InheritedAdditionalAnalysesSource[];
}
export interface InheritedAllowedAdditionalAnalysesSource {
  name: string;
  id: string;
  type: BaseTableDependencyType;
  value: string[];
  sourceAccountId: string;
}
export type InheritedAllowedAdditionalAnalysesSourceList =
  InheritedAllowedAdditionalAnalysesSource[];
export interface InheritedAllowedAdditionalAnalyses {
  value: string[];
  sources: InheritedAllowedAdditionalAnalysesSource[];
}
export type AccountIdList = string[];
export interface InheritedAllowedResultReceiversSource {
  name: string;
  id: string;
  type: BaseTableDependencyType;
  value: string[];
  sourceAccountId: string;
}
export type InheritedAllowedResultReceiversSourceList = InheritedAllowedResultReceiversSource[];
export interface InheritedAllowedResultReceivers {
  value: string[];
  sources: InheritedAllowedResultReceiversSource[];
}
export interface ColumnLineageEntry {
  column: string;
  sourceColumn: string;
  sourceName: string;
  sourceId: string;
  sourceType: BaseTableDependencyType;
  sourceAccountId: string;
}
export type ColumnLineageList = ColumnLineageEntry[];
export interface InheritedDisallowedOutputColumns {
  value: string[];
  columnLineage: ColumnLineageEntry[];
}
export interface IntermediateTableInheritedConstraints {
  additionalAnalyses?: InheritedAdditionalAnalyses;
  allowedAdditionalAnalyses?: InheritedAllowedAdditionalAnalyses;
  allowedResultReceivers?: InheritedAllowedResultReceivers;
  disallowedOutputColumns?: InheritedDisallowedOutputColumns;
}
export interface IntermediateTableActiveVersion {
  versionId: string;
  analysisId: string;
  analysisType: PopulateIntermediateTableAnalysisType;
  kmsKeyArn?: string;
  parameters?: { [key: string]: string | undefined };
  inheritedConstraints: IntermediateTableInheritedConstraints;
  expirationTime?: Date;
}
export type IntermediateTableAnalysisRuleType = "CUSTOM" | (string & {});
export type IntermediateTableAnalysisRuleTypeList = IntermediateTableAnalysisRuleType[];
export interface IntermediateTableSchema {
  columns: Column[];
}
export interface IntermediateTable {
  id: string;
  arn: string;
  name: string;
  description?: string;
  membershipArn: string;
  membershipId: string;
  collaborationArn: string;
  collaborationId: string;
  childResources?: ChildResource[];
  createTime: Date;
  updateTime: Date;
  status: IntermediateTableStatus;
  statusReason?: string;
  kmsKeyArn?: string;
  populationAnalysisConfiguration: PopulationAnalysisConfiguration;
  retentionInDays?: number;
  tableDependencies?: IntermediateTableDependency[];
  intermediateTableVersion?: IntermediateTableActiveVersion;
  analysisRuleTypes?: IntermediateTableAnalysisRuleType[];
  schema?: IntermediateTableSchema;
}
export interface CreateIntermediateTableOutput {
  intermediateTable: IntermediateTable;
}
export type IntermediateTableIdentifier = string;
export interface IntermediateTableAnalysisRuleCustom {
  allowedAnalyses?: string[];
  additionalAnalyses?: AdditionalAnalyses;
  allowedAdditionalAnalyses?: string[];
  allowedAnalysisProviders?: string[];
  allowedResultReceivers?: string[];
  differentialPrivacy?: DifferentialPrivacyConfiguration;
  disallowedOutputColumns?: string[];
  aggregationThresholds?: AggregationThreshold[];
  comparisonControls?: ComparisonControls;
}
export type IntermediateTableAnalysisRulePolicyV1 = { custom: IntermediateTableAnalysisRuleCustom };
export type IntermediateTableAnalysisRulePolicy = { v1: IntermediateTableAnalysisRulePolicyV1 };
export interface CreateIntermediateTableAnalysisRuleInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  analysisRuleType: IntermediateTableAnalysisRuleType;
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy;
}
export interface IntermediateTableAnalysisRule {
  intermediateTableIdentifier: string;
  intermediateTableArn: string;
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy;
  analysisRuleType: IntermediateTableAnalysisRuleType;
  createTime: Date;
  updateTime: Date;
}
export interface CreateIntermediateTableAnalysisRuleOutput {
  analysisRule: IntermediateTableAnalysisRule;
}
export type MembershipQueryLogStatus = "ENABLED" | "DISABLED" | (string & {});
export type MembershipJobLogStatus = "ENABLED" | "DISABLED" | (string & {});
export type ResultFormat = "CSV" | "PARQUET" | (string & {});
export type KeyPrefix = string;
export interface ProtectedQueryS3OutputConfiguration {
  resultFormat: ResultFormat;
  bucket: string;
  keyPrefix?: string;
  singleFileOutput?: boolean;
}
export type MembershipProtectedQueryOutputConfiguration = {
  s3: ProtectedQueryS3OutputConfiguration;
};
export interface MembershipProtectedQueryResultConfiguration {
  outputConfiguration: MembershipProtectedQueryOutputConfiguration;
  roleArn?: string;
}
export interface ProtectedJobS3OutputConfigurationInput {
  bucket: string;
  keyPrefix?: string;
}
export type MembershipProtectedJobOutputConfiguration = {
  s3: ProtectedJobS3OutputConfigurationInput;
};
export interface MembershipProtectedJobResultConfiguration {
  outputConfiguration: MembershipProtectedJobOutputConfiguration;
  roleArn: string;
}
export interface MembershipQueryComputePaymentConfig {
  isResponsible: boolean;
}
export interface MembershipModelTrainingPaymentConfig {
  isResponsible: boolean;
}
export interface MembershipModelInferencePaymentConfig {
  isResponsible: boolean;
}
export interface MembershipSyntheticDataGenerationPaymentConfig {
  isResponsible: boolean;
}
export interface MembershipMLPaymentConfig {
  modelTraining?: MembershipModelTrainingPaymentConfig;
  modelInference?: MembershipModelInferencePaymentConfig;
  syntheticDataGeneration?: MembershipSyntheticDataGenerationPaymentConfig;
}
export interface MembershipJobComputePaymentConfig {
  isResponsible: boolean;
}
export interface MembershipPaymentConfiguration {
  queryCompute: MembershipQueryComputePaymentConfig;
  machineLearning?: MembershipMLPaymentConfig;
  jobCompute?: MembershipJobComputePaymentConfig;
}
export interface CreateMembershipInput {
  collaborationIdentifier: string;
  queryLogStatus: MembershipQueryLogStatus;
  jobLogStatus?: MembershipJobLogStatus;
  tags?: { [key: string]: string | undefined };
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration;
  paymentConfiguration?: MembershipPaymentConfiguration;
  isMetricsEnabled?: boolean;
}
export type MembershipStatus = string;
export interface Membership {
  id: string;
  arn: string;
  collaborationArn: string;
  collaborationId: string;
  collaborationCreatorAccountId: string;
  collaborationCreatorDisplayName: string;
  collaborationName: string;
  createTime: Date;
  updateTime: Date;
  status: string;
  memberAbilities: MemberAbility[];
  mlMemberAbilities?: MLMemberAbilities;
  queryLogStatus: MembershipQueryLogStatus;
  jobLogStatus?: MembershipJobLogStatus;
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration;
  paymentConfiguration: MembershipPaymentConfiguration;
  isMetricsEnabled?: boolean;
}
export interface CreateMembershipOutput {
  membership: Membership;
}
export type PrivacyBudgetTemplateAutoRefresh = "CALENDAR_MONTH" | "NONE" | (string & {});
export type PrivacyBudgetType = "DIFFERENTIAL_PRIVACY" | "ACCESS_BUDGET" | (string & {});
export type Epsilon = number;
export type UsersNoisePerQuery = number;
export interface DifferentialPrivacyTemplateParametersInput {
  epsilon: number;
  usersNoisePerQuery: number;
}
export type AccessBudgetType =
  | "CALENDAR_DAY"
  | "CALENDAR_MONTH"
  | "CALENDAR_WEEK"
  | "LIFETIME"
  | (string & {});
export type Budget = number;
export type AutoRefreshMode = "ENABLED" | "DISABLED" | (string & {});
export interface BudgetParameter {
  type: AccessBudgetType;
  budget: number;
  autoRefresh?: AutoRefreshMode;
}
export type BudgetParameters = BudgetParameter[];
export type BudgetedResourceArn = string;
export interface AccessBudgetsPrivacyTemplateParametersInput {
  budgetParameters: BudgetParameter[];
  resourceArn: string;
}
export type PrivacyBudgetTemplateParametersInput =
  | { differentialPrivacy: DifferentialPrivacyTemplateParametersInput; accessBudget?: never }
  | { differentialPrivacy?: never; accessBudget: AccessBudgetsPrivacyTemplateParametersInput };
export interface CreatePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  autoRefresh?: PrivacyBudgetTemplateAutoRefresh;
  privacyBudgetType: PrivacyBudgetType;
  parameters: PrivacyBudgetTemplateParametersInput;
  tags?: { [key: string]: string | undefined };
}
export type PrivacyBudgetTemplateIdentifier = string;
export type PrivacyBudgetTemplateArn = string;
export interface DifferentialPrivacyTemplateParametersOutput {
  epsilon: number;
  usersNoisePerQuery: number;
}
export interface AccessBudgetsPrivacyTemplateParametersOutput {
  budgetParameters: BudgetParameter[];
  resourceArn: string;
}
export type PrivacyBudgetTemplateParametersOutput =
  | { differentialPrivacy: DifferentialPrivacyTemplateParametersOutput; accessBudget?: never }
  | { differentialPrivacy?: never; accessBudget: AccessBudgetsPrivacyTemplateParametersOutput };
export interface PrivacyBudgetTemplate {
  id: string;
  arn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  createTime: Date;
  updateTime: Date;
  privacyBudgetType: PrivacyBudgetType;
  autoRefresh: PrivacyBudgetTemplateAutoRefresh;
  parameters: PrivacyBudgetTemplateParametersOutput;
}
export interface CreatePrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
export interface DeleteAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
}
export interface DeleteAnalysisTemplateOutput {}
export interface DeleteCollaborationInput {
  collaborationIdentifier: string;
}
export interface DeleteCollaborationOutput {}
export interface DeleteConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface DeleteConfiguredAudienceModelAssociationOutput {}
export interface DeleteConfiguredTableInput {
  configuredTableIdentifier: string;
}
export interface DeleteConfiguredTableOutput {}
export interface DeleteConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
}
export interface DeleteConfiguredTableAnalysisRuleOutput {}
export interface DeleteConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface DeleteConfiguredTableAssociationOutput {}
export interface DeleteConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
}
export interface DeleteConfiguredTableAssociationAnalysisRuleOutput {}
export interface DeleteIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
}
export interface DeleteIdMappingTableOutput {}
export interface DeleteIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface DeleteIdNamespaceAssociationOutput {}
export interface DeleteIntermediateTableInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
}
export interface DeleteIntermediateTableOutput {}
export interface DeleteIntermediateTableAnalysisRuleInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  analysisRuleType: IntermediateTableAnalysisRuleType;
}
export interface DeleteIntermediateTableAnalysisRuleOutput {}
export interface DeleteMemberInput {
  collaborationIdentifier: string;
  accountId: string;
}
export interface DeleteMemberOutput {}
export interface DeleteMembershipInput {
  membershipIdentifier: string;
}
export interface DeleteMembershipOutput {}
export interface DeletePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
export interface DeletePrivacyBudgetTemplateOutput {}
export interface DisallowIntermediateTableInput {
  membershipIdentifier: string;
  intermediateTableName: string;
  includeDescendants?: boolean;
}
export interface DisallowIntermediateTableOutput {}
export type AnalysisLogExportIdentifier = string;
export interface GetAnalysisLogExportInput {
  membershipIdentifier: string;
  analysisLogExportIdentifier: string;
}
export type LogExportAnalysisType = "PROTECTED_QUERY" | (string & {});
export type AnalysisLogExportStatus = "IN_PROGRESS" | "SUCCESS" | "FAILED" | (string & {});
export interface AnalysisLogExportS3OutputConfiguration {
  bucket: string;
  keyPrefix?: string;
}
export interface AnalysisLogExportOutputConfiguration {
  s3: AnalysisLogExportS3OutputConfiguration;
}
export interface AnalysisLogExportResultConfiguration {
  outputConfiguration: AnalysisLogExportOutputConfiguration;
}
export interface AnalysisLogExportError {
  code: string;
  message: string;
}
export interface AnalysisLogExport {
  analysisLogExportId: string;
  analysisId: string;
  analysisType: LogExportAnalysisType;
  membershipId: string;
  status: AnalysisLogExportStatus;
  resultConfiguration: AnalysisLogExportResultConfiguration;
  createTime: Date;
  updateTime: Date;
  error?: AnalysisLogExportError;
}
export interface GetAnalysisLogExportOutput {
  analysisLogExport: AnalysisLogExport;
}
export interface GetAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
}
export interface GetAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
export interface GetCollaborationInput {
  collaborationIdentifier: string;
}
export interface GetCollaborationOutput {
  collaboration: Collaboration;
}
export interface GetCollaborationAnalysisTemplateInput {
  collaborationIdentifier: string;
  analysisTemplateArn: string;
}
export interface GetCollaborationAnalysisTemplateOutput {
  collaborationAnalysisTemplate: CollaborationAnalysisTemplate;
}
export type CollaborationChangeRequestIdentifier = string;
export interface GetCollaborationChangeRequestInput {
  collaborationIdentifier: string;
  changeRequestIdentifier: string;
}
export interface GetCollaborationChangeRequestOutput {
  collaborationChangeRequest: CollaborationChangeRequest;
}
export interface GetCollaborationConfiguredAudienceModelAssociationInput {
  collaborationIdentifier: string;
  configuredAudienceModelAssociationIdentifier: string;
}
export interface CollaborationConfiguredAudienceModelAssociation {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  configuredAudienceModelArn: string;
  name: string;
  description?: string;
  creatorAccountId: string;
  createTime: Date;
  updateTime: Date;
}
export interface GetCollaborationConfiguredAudienceModelAssociationOutput {
  collaborationConfiguredAudienceModelAssociation: CollaborationConfiguredAudienceModelAssociation;
}
export interface GetCollaborationIdNamespaceAssociationInput {
  collaborationIdentifier: string;
  idNamespaceAssociationIdentifier: string;
}
export interface CollaborationIdNamespaceAssociation {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  name: string;
  description?: string;
  creatorAccountId: string;
  createTime: Date;
  updateTime: Date;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  inputReferenceProperties: IdNamespaceAssociationInputReferenceProperties;
  idMappingConfig?: IdMappingConfig;
}
export interface GetCollaborationIdNamespaceAssociationOutput {
  collaborationIdNamespaceAssociation: CollaborationIdNamespaceAssociation;
}
export interface GetCollaborationPrivacyBudgetTemplateInput {
  collaborationIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
export interface CollaborationPrivacyBudgetTemplate {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  creatorAccountId: string;
  createTime: Date;
  updateTime: Date;
  privacyBudgetType: PrivacyBudgetType;
  autoRefresh: PrivacyBudgetTemplateAutoRefresh;
  parameters: PrivacyBudgetTemplateParametersOutput;
}
export interface GetCollaborationPrivacyBudgetTemplateOutput {
  collaborationPrivacyBudgetTemplate: CollaborationPrivacyBudgetTemplate;
}
export interface GetConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface GetConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
export interface GetConfiguredTableInput {
  configuredTableIdentifier: string;
}
export interface GetConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
export interface GetConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
}
export interface GetConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
export interface GetConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface GetConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
export interface GetConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
}
export interface GetConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
export interface GetIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
}
export interface GetIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
export interface GetIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
}
export interface GetIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
export interface GetIntermediateTableInput {
  intermediateTableIdentifier: string;
  membershipIdentifier: string;
}
export interface GetIntermediateTableOutput {
  intermediateTable: IntermediateTable;
}
export interface GetIntermediateTableAnalysisRuleInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  analysisRuleType: IntermediateTableAnalysisRuleType;
}
export interface GetIntermediateTableAnalysisRuleOutput {
  analysisRule: IntermediateTableAnalysisRule;
}
export interface GetMembershipInput {
  membershipIdentifier: string;
}
export interface GetMembershipOutput {
  membership: Membership;
}
export interface GetPrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
export interface GetPrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
export type ProtectedJobIdentifier = string;
export interface GetProtectedJobInput {
  membershipIdentifier: string;
  protectedJobIdentifier: string;
}
export type JobParameterName = string;
export type JobParameterValue = string;
export type JobParameterMap = { [key: string]: string | undefined };
export interface ProtectedJobParameters {
  analysisTemplateArn: string;
  parameters?: { [key: string]: string | undefined };
}
export type ProtectedJobStatus =
  | "SUBMITTED"
  | "STARTED"
  | "CANCELLED"
  | "CANCELLING"
  | "FAILED"
  | "SUCCESS"
  | (string & {});
export interface ProtectedJobS3OutputConfigurationOutput {
  bucket: string;
  keyPrefix?: string;
}
export interface ProtectedJobMemberOutputConfigurationOutput {
  accountId: string;
}
export type ProtectedJobOutputConfigurationOutput =
  | { s3: ProtectedJobS3OutputConfigurationOutput; member?: never }
  | { s3?: never; member: ProtectedJobMemberOutputConfigurationOutput };
export interface ProtectedJobResultConfigurationOutput {
  outputConfiguration: ProtectedJobOutputConfigurationOutput;
}
export interface BilledJobResourceUtilization {
  units: number;
}
export interface ProtectedJobStatistics {
  totalDurationInMillis?: number;
  billedResourceUtilization?: BilledJobResourceUtilization;
}
export interface ProtectedJobS3Output {
  location: string;
}
export interface ProtectedJobSingleMemberOutput {
  accountId: string;
}
export type ProtectedJobMemberOutputList = ProtectedJobSingleMemberOutput[];
export type ProtectedJobOutput =
  | { s3: ProtectedJobS3Output; memberList?: never }
  | { s3?: never; memberList: ProtectedJobSingleMemberOutput[] };
export interface ProtectedJobResult {
  output: ProtectedJobOutput;
}
export interface ProtectedJobError {
  message: string;
  code: string;
}
export type ProtectedJobWorkerComputeType = "CR.1X" | "CR.4X" | (string & {});
export type SparkPropertyKey = string;
export type SparkPropertyValue = string;
export type SparkProperties = { [key: string]: string | undefined };
export type WorkerComputeConfigurationProperties = { spark: { [key: string]: string | undefined } };
export interface ProtectedJobWorkerComputeConfiguration {
  type: ProtectedJobWorkerComputeType;
  number: number;
  properties?: WorkerComputeConfigurationProperties;
}
export type ProtectedJobComputeConfiguration = { worker: ProtectedJobWorkerComputeConfiguration };
export interface ProtectedJob {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date;
  jobParameters?: ProtectedJobParameters;
  status: ProtectedJobStatus;
  resultConfiguration?: ProtectedJobResultConfigurationOutput;
  statistics?: ProtectedJobStatistics;
  result?: ProtectedJobResult;
  error?: ProtectedJobError;
  computeConfiguration?: ProtectedJobComputeConfiguration;
  jobComputePayerAccountId?: string;
}
export interface GetProtectedJobOutput {
  protectedJob: ProtectedJob;
}
export type ProtectedQueryIdentifier = string;
export interface GetProtectedQueryInput {
  membershipIdentifier: string;
  protectedQueryIdentifier: string;
}
export interface ProtectedQuerySQLParameters {
  queryString?: string;
  analysisTemplateArn?: string;
  parameters?: { [key: string]: string | undefined };
}
export type ProtectedQueryStatus = string;
export interface ProtectedQueryMemberOutputConfiguration {
  accountId: string;
}
export type ProtectedQueryDistributeOutputConfigurationLocation =
  | { s3: ProtectedQueryS3OutputConfiguration; member?: never }
  | { s3?: never; member: ProtectedQueryMemberOutputConfiguration };
export type ProtectedQueryDistributeOutputConfigurationLocations =
  ProtectedQueryDistributeOutputConfigurationLocation[];
export interface ProtectedQueryDistributeOutputConfiguration {
  locations: ProtectedQueryDistributeOutputConfigurationLocation[];
}
export interface IntermediateTableOutputConfiguration {
  id: string;
  arn: string;
  name: string;
}
export type ProtectedQueryOutputConfiguration =
  | {
      s3: ProtectedQueryS3OutputConfiguration;
      member?: never;
      distribute?: never;
      intermediateTable?: never;
    }
  | {
      s3?: never;
      member: ProtectedQueryMemberOutputConfiguration;
      distribute?: never;
      intermediateTable?: never;
    }
  | {
      s3?: never;
      member?: never;
      distribute: ProtectedQueryDistributeOutputConfiguration;
      intermediateTable?: never;
    }
  | {
      s3?: never;
      member?: never;
      distribute?: never;
      intermediateTable: IntermediateTableOutputConfiguration;
    };
export interface ProtectedQueryResultConfiguration {
  outputConfiguration: ProtectedQueryOutputConfiguration;
}
export interface BilledResourceUtilization {
  units: number;
}
export interface ProtectedQueryStatistics {
  totalDurationInMillis?: number;
  billedResourceUtilization?: BilledResourceUtilization;
}
export interface ProtectedQueryS3Output {
  location: string;
}
export interface ProtectedQuerySingleMemberOutput {
  accountId: string;
}
export type ProtectedQueryMemberOutputList = ProtectedQuerySingleMemberOutput[];
export interface ProtectedQueryDistributeOutput {
  s3?: ProtectedQueryS3Output;
  memberList?: ProtectedQuerySingleMemberOutput[];
}
export type ProtectedQueryOutput =
  | { s3: ProtectedQueryS3Output; memberList?: never; distribute?: never }
  | { s3?: never; memberList: ProtectedQuerySingleMemberOutput[]; distribute?: never }
  | { s3?: never; memberList?: never; distribute: ProtectedQueryDistributeOutput };
export interface ProtectedQueryResult {
  output: ProtectedQueryOutput;
}
export interface ProtectedQueryError {
  message: string;
  code: string;
}
export type DifferentialPrivacyAggregationType =
  | "AVG"
  | "COUNT"
  | "COUNT_DISTINCT"
  | "SUM"
  | "STDDEV"
  | (string & {});
export type DifferentialPrivacyAggregationExpression = string;
export interface DifferentialPrivacySensitivityParameters {
  aggregationType: DifferentialPrivacyAggregationType;
  aggregationExpression: string;
  userContributionLimit: number;
  minColumnValue?: number;
  maxColumnValue?: number;
}
export type DifferentialPrivacySensitivityParametersList =
  DifferentialPrivacySensitivityParameters[];
export interface DifferentialPrivacyParameters {
  sensitivityParameters: DifferentialPrivacySensitivityParameters[];
}
export type WorkerComputeType = "CR.1X" | "CR.4X" | "CR.8X" | (string & {});
export interface WorkerComputeConfiguration {
  type?: WorkerComputeType;
  number?: number;
  properties?: WorkerComputeConfigurationProperties;
}
export type ComputeConfiguration = { worker: WorkerComputeConfiguration };
export interface ProtectedQuery {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date;
  sqlParameters?: ProtectedQuerySQLParameters;
  status: string;
  resultConfiguration?: ProtectedQueryResultConfiguration;
  statistics?: ProtectedQueryStatistics;
  result?: ProtectedQueryResult;
  error?: ProtectedQueryError;
  differentialPrivacy?: DifferentialPrivacyParameters;
  computeConfiguration?: ComputeConfiguration;
  queryComputePayerAccountId?: string;
}
export interface GetProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
export interface GetSchemaInput {
  collaborationIdentifier: string;
  name: string;
}
export interface GetSchemaOutput {
  schema: Schema;
}
export interface GetSchemaAnalysisRuleInput {
  collaborationIdentifier: string;
  name: string;
  type: AnalysisRuleType;
}
export interface GetSchemaAnalysisRuleOutput {
  analysisRule: AnalysisRule;
}
export type PaginationToken = string;
export type MaxResults = number;
export interface ListAnalysisLogExportsInput {
  membershipIdentifier: string;
  analysisIdentifier?: string;
  status?: AnalysisLogExportStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface AnalysisLogExportSummary {
  analysisLogExportId: string;
  analysisId: string;
  analysisType: LogExportAnalysisType;
  status: AnalysisLogExportStatus;
  createTime: Date;
}
export type AnalysisLogExportSummaryList = AnalysisLogExportSummary[];
export interface ListAnalysisLogExportsOutput {
  nextToken?: string;
  analysisLogExports: AnalysisLogExportSummary[];
}
export interface ListAnalysisTemplatesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface AnalysisTemplateSummary {
  arn: string;
  createTime: Date;
  id: string;
  name: string;
  updateTime: Date;
  membershipArn: string;
  membershipId: string;
  collaborationArn: string;
  collaborationId: string;
  description?: string;
  isSyntheticData?: boolean;
}
export type AnalysisTemplateSummaryList = AnalysisTemplateSummary[];
export interface ListAnalysisTemplatesOutput {
  nextToken?: string;
  analysisTemplateSummaries: AnalysisTemplateSummary[];
}
export interface ListCollaborationAnalysisTemplatesInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface CollaborationAnalysisTemplateSummary {
  arn: string;
  createTime: Date;
  id: string;
  name: string;
  updateTime: Date;
  collaborationArn: string;
  collaborationId: string;
  creatorAccountId: string;
  description?: string;
  isSyntheticData?: boolean;
}
export type CollaborationAnalysisTemplateSummaryList = CollaborationAnalysisTemplateSummary[];
export interface ListCollaborationAnalysisTemplatesOutput {
  nextToken?: string;
  collaborationAnalysisTemplateSummaries: CollaborationAnalysisTemplateSummary[];
}
export interface ListCollaborationChangeRequestsInput {
  collaborationIdentifier: string;
  status?: ChangeRequestStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface CollaborationChangeRequestSummary {
  id: string;
  collaborationId: string;
  createTime: Date;
  updateTime: Date;
  status: ChangeRequestStatus;
  isAutoApproved: boolean;
  changes: Change[];
  approvals?: { [key: string]: ApprovalStatusDetails | undefined };
}
export type CollaborationChangeRequestSummaryList = CollaborationChangeRequestSummary[];
export interface ListCollaborationChangeRequestsOutput {
  collaborationChangeRequestSummaries: CollaborationChangeRequestSummary[];
  nextToken?: string;
}
export interface ListCollaborationConfiguredAudienceModelAssociationsInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface CollaborationConfiguredAudienceModelAssociationSummary {
  arn: string;
  createTime: Date;
  id: string;
  name: string;
  updateTime: Date;
  collaborationArn: string;
  collaborationId: string;
  creatorAccountId: string;
  description?: string;
}
export type CollaborationConfiguredAudienceModelAssociationSummaryList =
  CollaborationConfiguredAudienceModelAssociationSummary[];
export interface ListCollaborationConfiguredAudienceModelAssociationsOutput {
  collaborationConfiguredAudienceModelAssociationSummaries: CollaborationConfiguredAudienceModelAssociationSummary[];
  nextToken?: string;
}
export interface ListCollaborationIdNamespaceAssociationsInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface IdNamespaceAssociationInputReferencePropertiesSummary {
  idNamespaceType: IdNamespaceType;
}
export interface CollaborationIdNamespaceAssociationSummary {
  arn: string;
  createTime: Date;
  id: string;
  updateTime: Date;
  collaborationArn: string;
  collaborationId: string;
  creatorAccountId: string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  name: string;
  description?: string;
  inputReferenceProperties: IdNamespaceAssociationInputReferencePropertiesSummary;
}
export type CollaborationIdNamespaceAssociationSummaryList =
  CollaborationIdNamespaceAssociationSummary[];
export interface ListCollaborationIdNamespaceAssociationsOutput {
  nextToken?: string;
  collaborationIdNamespaceAssociationSummaries: CollaborationIdNamespaceAssociationSummary[];
}
export interface ListCollaborationPrivacyBudgetsInput {
  collaborationIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  maxResults?: number;
  nextToken?: string;
  accessBudgetResourceArn?: string;
}
export interface DifferentialPrivacyPrivacyBudgetAggregation {
  type: DifferentialPrivacyAggregationType;
  maxCount: number;
  remainingCount: number;
}
export type DifferentialPrivacyPrivacyBudgetAggregationList =
  DifferentialPrivacyPrivacyBudgetAggregation[];
export interface DifferentialPrivacyPrivacyBudget {
  aggregations: DifferentialPrivacyPrivacyBudgetAggregation[];
  epsilon: number;
}
export type RemainingBudget = number;
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
export type PrivacyBudget =
  | { differentialPrivacy: DifferentialPrivacyPrivacyBudget; accessBudget?: never }
  | { differentialPrivacy?: never; accessBudget: AccessBudget };
export interface CollaborationPrivacyBudgetSummary {
  id: string;
  privacyBudgetTemplateId: string;
  privacyBudgetTemplateArn: string;
  collaborationId: string;
  collaborationArn: string;
  creatorAccountId: string;
  type: PrivacyBudgetType;
  createTime: Date;
  updateTime: Date;
  budget: PrivacyBudget;
}
export type CollaborationPrivacyBudgetSummaryList = CollaborationPrivacyBudgetSummary[];
export interface ListCollaborationPrivacyBudgetsOutput {
  collaborationPrivacyBudgetSummaries: CollaborationPrivacyBudgetSummary[];
  nextToken?: string;
}
export interface ListCollaborationPrivacyBudgetTemplatesInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface CollaborationPrivacyBudgetTemplateSummary {
  id: string;
  arn: string;
  collaborationId: string;
  collaborationArn: string;
  creatorAccountId: string;
  privacyBudgetType: PrivacyBudgetType;
  createTime: Date;
  updateTime: Date;
}
export type CollaborationPrivacyBudgetTemplateSummaryList =
  CollaborationPrivacyBudgetTemplateSummary[];
export interface ListCollaborationPrivacyBudgetTemplatesOutput {
  nextToken?: string;
  collaborationPrivacyBudgetTemplateSummaries: CollaborationPrivacyBudgetTemplateSummary[];
}
export type FilterableMemberStatus = string;
export interface ListCollaborationsInput {
  nextToken?: string;
  maxResults?: number;
  memberStatus?: string;
}
export interface CollaborationSummary {
  id: string;
  arn: string;
  name: string;
  creatorAccountId: string;
  creatorDisplayName: string;
  createTime: Date;
  updateTime: Date;
  memberStatus: string;
  membershipId?: string;
  membershipArn?: string;
  analyticsEngine?: AnalyticsEngine;
}
export type CollaborationSummaryList = CollaborationSummary[];
export interface ListCollaborationsOutput {
  nextToken?: string;
  collaborationList: CollaborationSummary[];
}
export interface ListConfiguredAudienceModelAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ConfiguredAudienceModelAssociationSummary {
  membershipId: string;
  membershipArn: string;
  collaborationArn: string;
  collaborationId: string;
  createTime: Date;
  updateTime: Date;
  id: string;
  arn: string;
  name: string;
  configuredAudienceModelArn: string;
  description?: string;
}
export type ConfiguredAudienceModelAssociationSummaryList =
  ConfiguredAudienceModelAssociationSummary[];
export interface ListConfiguredAudienceModelAssociationsOutput {
  configuredAudienceModelAssociationSummaries: ConfiguredAudienceModelAssociationSummary[];
  nextToken?: string;
}
export interface ListConfiguredTableAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ConfiguredTableAssociationSummary {
  configuredTableId: string;
  membershipId: string;
  membershipArn: string;
  name: string;
  createTime: Date;
  updateTime: Date;
  id: string;
  arn: string;
  analysisRuleTypes?: ConfiguredTableAssociationAnalysisRuleType[];
}
export type ConfiguredTableAssociationSummaryList = ConfiguredTableAssociationSummary[];
export interface ListConfiguredTableAssociationsOutput {
  configuredTableAssociationSummaries: ConfiguredTableAssociationSummary[];
  nextToken?: string;
}
export interface ListConfiguredTablesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ConfiguredTableSummary {
  id: string;
  arn: string;
  name: string;
  createTime: Date;
  updateTime: Date;
  analysisRuleTypes: ConfiguredTableAnalysisRuleType[];
  analysisMethod: AnalysisMethod;
  selectedAnalysisMethods?: SelectedAnalysisMethod[];
}
export type ConfiguredTableSummaryList = ConfiguredTableSummary[];
export interface ListConfiguredTablesOutput {
  configuredTableSummaries: ConfiguredTableSummary[];
  nextToken?: string;
}
export interface ListIdMappingTablesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface IdMappingTableSummary {
  collaborationArn: string;
  collaborationId: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date;
  updateTime: Date;
  id: string;
  arn: string;
  description?: string;
  inputReferenceConfig: IdMappingTableInputReferenceConfig;
  name: string;
}
export type IdMappingTableSummaryList = IdMappingTableSummary[];
export interface ListIdMappingTablesOutput {
  idMappingTableSummaries: IdMappingTableSummary[];
  nextToken?: string;
}
export interface ListIdNamespaceAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface IdNamespaceAssociationSummary {
  membershipId: string;
  membershipArn: string;
  collaborationArn: string;
  collaborationId: string;
  createTime: Date;
  updateTime: Date;
  id: string;
  arn: string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  name: string;
  description?: string;
  inputReferenceProperties: IdNamespaceAssociationInputReferencePropertiesSummary;
}
export type IdNamespaceAssociationSummaryList = IdNamespaceAssociationSummary[];
export interface ListIdNamespaceAssociationsOutput {
  nextToken?: string;
  idNamespaceAssociationSummaries: IdNamespaceAssociationSummary[];
}
export interface ListIntermediateTablesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface IntermediateTableSummary {
  id: string;
  arn: string;
  name: string;
  description?: string;
  membershipArn: string;
  membershipId: string;
  collaborationArn: string;
  collaborationId: string;
  createTime: Date;
  updateTime: Date;
  status: IntermediateTableStatus;
  retentionInDays?: number;
  analysisRuleTypes?: IntermediateTableAnalysisRuleType[];
}
export type IntermediateTableSummaryList = IntermediateTableSummary[];
export interface ListIntermediateTablesOutput {
  intermediateTableSummaries: IntermediateTableSummary[];
  nextToken?: string;
}
export interface ListIntermediateTableVersionsInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export type IntermediateTableVersionStatus =
  | "POPULATE_STARTED"
  | "POPULATE_SUCCESS"
  | "POPULATE_FAILED"
  | "RETENTION_PERIOD_EXPIRED"
  | (string & {});
export interface IntermediateTableVersionSummary {
  versionId: string;
  tableId: string;
  createTime: Date;
  analysisId: string;
  status: IntermediateTableVersionStatus;
  analysisType: PopulateIntermediateTableAnalysisType;
  kmsKeyArn?: string;
  expirationTime?: Date;
}
export type IntermediateTableVersionSummaryList = IntermediateTableVersionSummary[];
export interface ListIntermediateTableVersionsOutput {
  intermediateTableVersionSummaries: IntermediateTableVersionSummary[];
  nextToken?: string;
}
export interface ListMembersInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface MemberSummary {
  accountId: string;
  status: string;
  displayName: string;
  abilities: MemberAbility[];
  mlAbilities?: MLMemberAbilities;
  createTime: Date;
  updateTime: Date;
  membershipId?: string;
  membershipArn?: string;
  paymentConfiguration: PaymentConfiguration;
}
export type MemberSummaryList = MemberSummary[];
export interface ListMembersOutput {
  nextToken?: string;
  memberSummaries: MemberSummary[];
}
export interface ListMembershipsInput {
  nextToken?: string;
  maxResults?: number;
  status?: string;
}
export interface MembershipSummary {
  id: string;
  arn: string;
  collaborationArn: string;
  collaborationId: string;
  collaborationCreatorAccountId: string;
  collaborationCreatorDisplayName: string;
  collaborationName: string;
  createTime: Date;
  updateTime: Date;
  status: string;
  memberAbilities: MemberAbility[];
  mlMemberAbilities?: MLMemberAbilities;
  paymentConfiguration: MembershipPaymentConfiguration;
}
export type MembershipSummaryList = MembershipSummary[];
export interface ListMembershipsOutput {
  nextToken?: string;
  membershipSummaries: MembershipSummary[];
}
export interface ListPrivacyBudgetsInput {
  membershipIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  nextToken?: string;
  maxResults?: number;
  accessBudgetResourceArn?: string;
}
export interface PrivacyBudgetSummary {
  id: string;
  privacyBudgetTemplateId: string;
  privacyBudgetTemplateArn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  type: PrivacyBudgetType;
  createTime: Date;
  updateTime: Date;
  budget: PrivacyBudget;
}
export type PrivacyBudgetSummaryList = PrivacyBudgetSummary[];
export interface ListPrivacyBudgetsOutput {
  privacyBudgetSummaries: PrivacyBudgetSummary[];
  nextToken?: string;
}
export interface ListPrivacyBudgetTemplatesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
export interface PrivacyBudgetTemplateSummary {
  id: string;
  arn: string;
  membershipId: string;
  membershipArn: string;
  collaborationId: string;
  collaborationArn: string;
  privacyBudgetType: PrivacyBudgetType;
  createTime: Date;
  updateTime: Date;
}
export type PrivacyBudgetTemplateSummaryList = PrivacyBudgetTemplateSummary[];
export interface ListPrivacyBudgetTemplatesOutput {
  nextToken?: string;
  privacyBudgetTemplateSummaries: PrivacyBudgetTemplateSummary[];
}
export interface ListProtectedJobsInput {
  membershipIdentifier: string;
  status?: ProtectedJobStatus;
  nextToken?: string;
  maxResults?: number;
}
export type ProtectedJobAnalysisType = "DIRECT_ANALYSIS" | (string & {});
export type ProtectedJobReceiverAccountIds = string[];
export interface ProtectedJobDirectAnalysisConfigurationDetails {
  receiverAccountIds?: string[];
}
export type ProtectedJobConfigurationDetails = {
  directAnalysisConfigurationDetails: ProtectedJobDirectAnalysisConfigurationDetails;
};
export interface ProtectedJobReceiverConfiguration {
  analysisType: ProtectedJobAnalysisType;
  configurationDetails?: ProtectedJobConfigurationDetails;
}
export type ProtectedJobReceiverConfigurations = ProtectedJobReceiverConfiguration[];
export interface ProtectedJobSummary {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date;
  status: ProtectedJobStatus;
  receiverConfigurations: ProtectedJobReceiverConfiguration[];
  jobComputePayerAccountId?: string;
}
export type ProtectedJobSummaryList = ProtectedJobSummary[];
export interface ListProtectedJobsOutput {
  nextToken?: string;
  protectedJobs: ProtectedJobSummary[];
}
export interface ListProtectedQueriesInput {
  membershipIdentifier: string;
  status?: string;
  nextToken?: string;
  maxResults?: number;
}
export type ReceiverAccountIds = string[];
export interface DirectAnalysisConfigurationDetails {
  receiverAccountIds?: string[];
}
export type ConfigurationDetails = {
  directAnalysisConfigurationDetails: DirectAnalysisConfigurationDetails;
};
export interface ReceiverConfiguration {
  analysisType: AnalysisType;
  configurationDetails?: ConfigurationDetails;
}
export type ReceiverConfigurationsList = ReceiverConfiguration[];
export interface ProtectedQuerySummary {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date;
  status: string;
  receiverConfigurations: ReceiverConfiguration[];
  queryComputePayerAccountId?: string;
  intermediateTableConfiguration?: IntermediateTableOutputConfiguration;
}
export type ProtectedQuerySummaryList = ProtectedQuerySummary[];
export interface ListProtectedQueriesOutput {
  nextToken?: string;
  protectedQueries: ProtectedQuerySummary[];
}
export interface ListSchemasInput {
  collaborationIdentifier: string;
  schemaType?: SchemaType;
  nextToken?: string;
  maxResults?: number;
}
export interface SchemaSummary {
  name: string;
  type: SchemaType;
  creatorAccountId: string;
  createTime: Date;
  updateTime: Date;
  collaborationId: string;
  collaborationArn: string;
  analysisRuleTypes: AnalysisRuleType[];
  analysisMethod?: AnalysisMethod;
  resourceArn?: string;
  selectedAnalysisMethods?: SelectedAnalysisMethod[];
}
export type SchemaSummaryList = SchemaSummary[];
export interface ListSchemasOutput {
  schemaSummaries: SchemaSummary[];
  nextToken?: string;
}
export type CleanroomsArn = string;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags: { [key: string]: string | undefined };
}
export type JobType = "BATCH" | "INCREMENTAL" | "DELETE_ONLY" | (string & {});
export interface PopulateIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
  jobType?: JobType;
}
export interface PopulateIdMappingTableOutput {
  idMappingJobId: string;
}
export type IntermediateTableComputeConfiguration = {
  queryComputeConfiguration: WorkerComputeConfiguration;
};
export interface PopulateIntermediateTableInput {
  intermediateTableIdentifier: string;
  membershipIdentifier: string;
  parameters?: { [key: string]: string | undefined };
  computeConfiguration?: IntermediateTableComputeConfiguration;
  analysisPayerAccountId?: string;
}
export interface PopulateIntermediateTableOutput {
  analysisId: string;
  analysisType: PopulateIntermediateTableAnalysisType;
  versionId: string;
}
export interface DifferentialPrivacyPreviewParametersInput {
  epsilon: number;
  usersNoisePerQuery: number;
}
export type PreviewPrivacyImpactParametersInput = {
  differentialPrivacy: DifferentialPrivacyPreviewParametersInput;
};
export interface PreviewPrivacyImpactInput {
  membershipIdentifier: string;
  parameters: PreviewPrivacyImpactParametersInput;
}
export interface DifferentialPrivacyPreviewAggregation {
  type: DifferentialPrivacyAggregationType;
  maxCount: number;
}
export type DifferentialPrivacyPreviewAggregationList = DifferentialPrivacyPreviewAggregation[];
export interface DifferentialPrivacyPrivacyImpact {
  aggregations: DifferentialPrivacyPreviewAggregation[];
}
export type PrivacyImpact = { differentialPrivacy: DifferentialPrivacyPrivacyImpact };
export interface PreviewPrivacyImpactOutput {
  privacyImpact: PrivacyImpact;
}
export interface StartAnalysisLogExportInput {
  membershipIdentifier: string;
  analysisId: string;
  analysisType: LogExportAnalysisType;
  resultConfiguration: AnalysisLogExportResultConfiguration;
}
export interface StartAnalysisLogExportOutput {
  analysisLogExport: AnalysisLogExport;
}
export type ProtectedJobType = "PYSPARK" | (string & {});
export interface ProtectedJobMemberOutputConfigurationInput {
  accountId: string;
}
export type ProtectedJobOutputConfigurationInput = {
  member: ProtectedJobMemberOutputConfigurationInput;
};
export interface ProtectedJobResultConfigurationInput {
  outputConfiguration: ProtectedJobOutputConfigurationInput;
}
export interface StartProtectedJobInput {
  type: ProtectedJobType;
  membershipIdentifier: string;
  jobParameters: ProtectedJobParameters;
  resultConfiguration?: ProtectedJobResultConfigurationInput;
  computeConfiguration?: ProtectedJobComputeConfiguration;
  jobComputePayerAccountId?: string;
}
export interface StartProtectedJobOutput {
  protectedJob: ProtectedJob;
}
export type ProtectedQueryType = string;
export interface StartProtectedQueryInput {
  type: string;
  membershipIdentifier: string;
  sqlParameters: ProtectedQuerySQLParameters;
  resultConfiguration?: ProtectedQueryResultConfiguration;
  computeConfiguration?: ComputeConfiguration;
  queryComputePayerAccountId?: string;
}
export interface StartProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceOutput {}
export type TagKeys = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceOutput {}
export interface UpdateAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
  description?: string;
}
export interface UpdateAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
export interface UpdateCollaborationInput {
  collaborationIdentifier: string;
  name?: string;
  description?: string;
  analyticsEngine?: AnalyticsEngine;
}
export interface UpdateCollaborationOutput {
  collaboration: Collaboration;
}
export type ChangeRequestAction = "APPROVE" | "DENY" | "CANCEL" | "COMMIT" | (string & {});
export interface UpdateCollaborationChangeRequestInput {
  collaborationIdentifier: string;
  changeRequestIdentifier: string;
  action: ChangeRequestAction;
}
export interface UpdateCollaborationChangeRequestOutput {
  collaborationChangeRequest: CollaborationChangeRequest;
}
export interface UpdateConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  name?: string;
}
export interface UpdateConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
export interface UpdateConfiguredTableInput {
  configuredTableIdentifier: string;
  name?: string;
  description?: string;
  tableReference?: TableReference;
  allowedColumns?: string[];
  analysisMethod?: AnalysisMethod;
  selectedAnalysisMethods?: SelectedAnalysisMethod[];
}
export interface UpdateConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
export interface UpdateConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy;
}
export interface UpdateConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
export interface UpdateConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  roleArn?: string;
}
export interface UpdateConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
export interface UpdateConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy;
}
export interface UpdateConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
export interface UpdateIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  kmsKeyArn?: string;
}
export interface UpdateIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
export interface UpdateIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
  name?: string;
  description?: string;
  idMappingConfig?: IdMappingConfig;
}
export interface UpdateIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
export type IntermediateTableColumnTypeString = string;
export interface IntermediateTableColumn {
  name: string;
  type: string;
}
export type IntermediateTableColumnList = IntermediateTableColumn[];
export interface UpdateIntermediateTableInput {
  intermediateTableIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  kmsKeyArn?: string;
  columns?: IntermediateTableColumn[];
}
export interface UpdateIntermediateTableOutput {
  intermediateTable: IntermediateTable;
}
export interface UpdateIntermediateTableAnalysisRuleInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  analysisRuleType: IntermediateTableAnalysisRuleType;
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy;
}
export interface UpdateIntermediateTableAnalysisRuleOutput {
  analysisRule: IntermediateTableAnalysisRule;
}
export interface UpdateMembershipPaymentConfiguration {
  queryCompute?: MembershipQueryComputePaymentConfig;
  machineLearning?: MembershipMLPaymentConfig;
  jobCompute?: MembershipJobComputePaymentConfig;
}
export interface UpdateMembershipInput {
  membershipIdentifier: string;
  queryLogStatus?: MembershipQueryLogStatus;
  jobLogStatus?: MembershipJobLogStatus;
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration;
  membershipPaymentConfiguration?: UpdateMembershipPaymentConfiguration;
}
export interface UpdateMembershipOutput {
  membership: Membership;
}
export interface DifferentialPrivacyTemplateUpdateParameters {
  epsilon?: number;
  usersNoisePerQuery?: number;
}
export interface AccessBudgetsPrivacyTemplateUpdateParameters {
  budgetParameters: BudgetParameter[];
}
export type PrivacyBudgetTemplateUpdateParameters =
  | { differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters; accessBudget?: never }
  | { differentialPrivacy?: never; accessBudget: AccessBudgetsPrivacyTemplateUpdateParameters };
export interface UpdatePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  parameters?: PrivacyBudgetTemplateUpdateParameters;
}
export interface UpdatePrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
export type TargetProtectedJobStatus = "CANCELLED" | (string & {});
export interface UpdateProtectedJobInput {
  membershipIdentifier: string;
  protectedJobIdentifier: string;
  targetStatus: TargetProtectedJobStatus;
}
export interface UpdateProtectedJobOutput {
  protectedJob: ProtectedJob;
}
export type TargetProtectedQueryStatus = string;
export interface UpdateProtectedQueryInput {
  membershipIdentifier: string;
  protectedQueryIdentifier: string;
  targetStatus: string;
}
export interface UpdateProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
export type AccessDeniedExceptionReason = string;
export type ResourceType = string;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type ConflictExceptionReason = string;
export type BatchGetCollaborationAnalysisTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple analysis templates within a collaboration by their Amazon Resource Names (ARNs).
 */
export const batchGetCollaborationAnalysisTemplate: API.OperationMethod<
  BatchGetCollaborationAnalysisTemplateInput,
  BatchGetCollaborationAnalysisTemplateOutput,
  BatchGetCollaborationAnalysisTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<BatchGetCollaborationAnalysisTemplateInput>,
  output: __S(28) as any as S.Schema<BatchGetCollaborationAnalysisTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCollaborationAnalysisTemplate",
}));

export type BatchGetSchemaError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple schemas by their identifiers.
 */
export const batchGetSchema: API.OperationMethod<
  BatchGetSchemaInput,
  BatchGetSchemaOutput,
  BatchGetSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<BatchGetSchemaInput>,
  output: __S(47) as any as S.Schema<BatchGetSchemaOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetSchema",
}));

export type BatchGetSchemaAnalysisRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple analysis rule schemas.
 */
export const batchGetSchemaAnalysisRule: API.OperationMethod<
  BatchGetSchemaAnalysisRuleInput,
  BatchGetSchemaAnalysisRuleOutput,
  BatchGetSchemaAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<BatchGetSchemaAnalysisRuleInput>,
  output: __S(83) as any as S.Schema<BatchGetSchemaAnalysisRuleOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetSchemaAnalysisRule",
}));

export type CreateAnalysisTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new analysis template.
 */
export const createAnalysisTemplate: API.OperationMethod<
  CreateAnalysisTemplateInput,
  CreateAnalysisTemplateOutput,
  CreateAnalysisTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85) as any as S.Schema<CreateAnalysisTemplateInput>,
  output: __S(87) as any as S.Schema<CreateAnalysisTemplateOutput>,
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
  operationName: "CreateAnalysisTemplate",
}));

export type CreateCollaborationError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new collaboration.
 */
export const createCollaboration: API.OperationMethod<
  CreateCollaborationInput,
  CreateCollaborationOutput,
  CreateCollaborationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96) as any as S.Schema<CreateCollaborationInput>,
  output: __S(98) as any as S.Schema<CreateCollaborationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCollaboration",
}));

export type CreateCollaborationChangeRequestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new change request to modify an existing collaboration. This enables post-creation modifications to collaborations through a structured API-driven approach.
 */
export const createCollaborationChangeRequest: API.OperationMethod<
  CreateCollaborationChangeRequestInput,
  CreateCollaborationChangeRequestOutput,
  CreateCollaborationChangeRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<CreateCollaborationChangeRequestInput>,
  output: __S(110) as any as S.Schema<CreateCollaborationChangeRequestOutput>,
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
  operationName: "CreateCollaborationChangeRequest",
}));

export type CreateConfiguredAudienceModelAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the details necessary to create a configured audience model association.
 */
export const createConfiguredAudienceModelAssociation: API.OperationMethod<
  CreateConfiguredAudienceModelAssociationInput,
  CreateConfiguredAudienceModelAssociationOutput,
  CreateConfiguredAudienceModelAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111) as any as S.Schema<CreateConfiguredAudienceModelAssociationInput>,
  output: __S(113) as any as S.Schema<CreateConfiguredAudienceModelAssociationOutput>,
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
  operationName: "CreateConfiguredAudienceModelAssociation",
}));

export type CreateConfiguredTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new configured table resource.
 */
export const createConfiguredTable: API.OperationMethod<
  CreateConfiguredTableInput,
  CreateConfiguredTableOutput,
  CreateConfiguredTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<CreateConfiguredTableInput>,
  output: __S(124) as any as S.Schema<CreateConfiguredTableOutput>,
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
  operationName: "CreateConfiguredTable",
}));

export type CreateConfiguredTableAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
 */
export const createConfiguredTableAnalysisRule: API.OperationMethod<
  CreateConfiguredTableAnalysisRuleInput,
  CreateConfiguredTableAnalysisRuleOutput,
  CreateConfiguredTableAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127) as any as S.Schema<CreateConfiguredTableAnalysisRuleInput>,
  output: __S(129) as any as S.Schema<CreateConfiguredTableAnalysisRuleOutput>,
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
  operationName: "CreateConfiguredTableAnalysisRule",
}));

export type CreateConfiguredTableAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a configured table association. A configured table association links a configured table with a collaboration.
 */
export const createConfiguredTableAssociation: API.OperationMethod<
  CreateConfiguredTableAssociationInput,
  CreateConfiguredTableAssociationOutput,
  CreateConfiguredTableAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130) as any as S.Schema<CreateConfiguredTableAssociationInput>,
  output: __S(134) as any as S.Schema<CreateConfiguredTableAssociationOutput>,
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
  operationName: "CreateConfiguredTableAssociation",
}));

export type CreateConfiguredTableAssociationAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new analysis rule for an associated configured table.
 */
export const createConfiguredTableAssociationAnalysisRule: API.OperationMethod<
  CreateConfiguredTableAssociationAnalysisRuleInput,
  CreateConfiguredTableAssociationAnalysisRuleOutput,
  CreateConfiguredTableAssociationAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135) as any as S.Schema<CreateConfiguredTableAssociationAnalysisRuleInput>,
  output: __S(137) as any as S.Schema<CreateConfiguredTableAssociationAnalysisRuleOutput>,
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
  operationName: "CreateConfiguredTableAssociationAnalysisRule",
}));

export type CreateIdMappingTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an ID mapping table.
 */
export const createIdMappingTable: API.OperationMethod<
  CreateIdMappingTableInput,
  CreateIdMappingTableOutput,
  CreateIdMappingTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139) as any as S.Schema<CreateIdMappingTableInput>,
  output: __S(142) as any as S.Schema<CreateIdMappingTableOutput>,
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
  operationName: "CreateIdMappingTable",
}));

export type CreateIdNamespaceAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an ID namespace association.
 */
export const createIdNamespaceAssociation: API.OperationMethod<
  CreateIdNamespaceAssociationInput,
  CreateIdNamespaceAssociationOutput,
  CreateIdNamespaceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(144) as any as S.Schema<CreateIdNamespaceAssociationInput>,
  output: __S(148) as any as S.Schema<CreateIdNamespaceAssociationOutput>,
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
  operationName: "CreateIdNamespaceAssociation",
}));

export type CreateIntermediateTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an intermediate table in a membership. The intermediate table is owned by the member with the CAN_QUERY ability. To populate the table with results, use `PopulateIntermediateTable`.
 */
export const createIntermediateTable: API.OperationMethod<
  CreateIntermediateTableInput,
  CreateIntermediateTableOutput,
  CreateIntermediateTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(151) as any as S.Schema<CreateIntermediateTableInput>,
  output: __S(169) as any as S.Schema<CreateIntermediateTableOutput>,
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
  operationName: "CreateIntermediateTable",
}));

export type CreateIntermediateTableAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an analysis rule for an intermediate table. Only the CUSTOM analysis rule type is supported. Only the intermediate table owner can call this operation.
 */
export const createIntermediateTableAnalysisRule: API.OperationMethod<
  CreateIntermediateTableAnalysisRuleInput,
  CreateIntermediateTableAnalysisRuleOutput,
  CreateIntermediateTableAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<CreateIntermediateTableAnalysisRuleInput>,
  output: __S(175) as any as S.Schema<CreateIntermediateTableAnalysisRuleOutput>,
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
  operationName: "CreateIntermediateTableAnalysisRule",
}));

export type CreateMembershipError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a membership for a specific collaboration identifier and joins the collaboration.
 */
export const createMembership: API.OperationMethod<
  CreateMembershipInput,
  CreateMembershipOutput,
  CreateMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<CreateMembershipInput>,
  output: __S(186) as any as S.Schema<CreateMembershipOutput>,
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
  operationName: "CreateMembership",
}));

export type CreatePrivacyBudgetTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a privacy budget template for a specified collaboration. Each collaboration can have only one privacy budget template. If you need to change the privacy budget template, use the UpdatePrivacyBudgetTemplate operation.
 */
export const createPrivacyBudgetTemplate: API.OperationMethod<
  CreatePrivacyBudgetTemplateInput,
  CreatePrivacyBudgetTemplateOutput,
  CreatePrivacyBudgetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<CreatePrivacyBudgetTemplateInput>,
  output: __S(194) as any as S.Schema<CreatePrivacyBudgetTemplateOutput>,
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
  operationName: "CreatePrivacyBudgetTemplate",
}));

export type DeleteAnalysisTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an analysis template.
 */
export const deleteAnalysisTemplate: API.OperationMethod<
  DeleteAnalysisTemplateInput,
  DeleteAnalysisTemplateOutput,
  DeleteAnalysisTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(195) as any as S.Schema<DeleteAnalysisTemplateInput>,
  output: __S(196) as any as S.Schema<DeleteAnalysisTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAnalysisTemplate",
}));

export type DeleteCollaborationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a collaboration. It can only be called by the collaboration owner.
 */
export const deleteCollaboration: API.OperationMethod<
  DeleteCollaborationInput,
  DeleteCollaborationOutput,
  DeleteCollaborationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(197) as any as S.Schema<DeleteCollaborationInput>,
  output: __S(196) as any as S.Schema<DeleteCollaborationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCollaboration",
}));

export type DeleteConfiguredAudienceModelAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the information necessary to delete a configured audience model association.
 */
export const deleteConfiguredAudienceModelAssociation: API.OperationMethod<
  DeleteConfiguredAudienceModelAssociationInput,
  DeleteConfiguredAudienceModelAssociationOutput,
  DeleteConfiguredAudienceModelAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198) as any as S.Schema<DeleteConfiguredAudienceModelAssociationInput>,
  output: __S(199) as any as S.Schema<DeleteConfiguredAudienceModelAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfiguredAudienceModelAssociation",
}));

export type DeleteConfiguredTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a configured table.
 */
export const deleteConfiguredTable: API.OperationMethod<
  DeleteConfiguredTableInput,
  DeleteConfiguredTableOutput,
  DeleteConfiguredTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200) as any as S.Schema<DeleteConfiguredTableInput>,
  output: __S(196) as any as S.Schema<DeleteConfiguredTableOutput>,
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
  operationName: "DeleteConfiguredTable",
}));

export type DeleteConfiguredTableAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a configured table analysis rule.
 */
export const deleteConfiguredTableAnalysisRule: API.OperationMethod<
  DeleteConfiguredTableAnalysisRuleInput,
  DeleteConfiguredTableAnalysisRuleOutput,
  DeleteConfiguredTableAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(201) as any as S.Schema<DeleteConfiguredTableAnalysisRuleInput>,
  output: __S(199) as any as S.Schema<DeleteConfiguredTableAnalysisRuleOutput>,
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
  operationName: "DeleteConfiguredTableAnalysisRule",
}));

export type DeleteConfiguredTableAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a configured table association.
 */
export const deleteConfiguredTableAssociation: API.OperationMethod<
  DeleteConfiguredTableAssociationInput,
  DeleteConfiguredTableAssociationOutput,
  DeleteConfiguredTableAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202) as any as S.Schema<DeleteConfiguredTableAssociationInput>,
  output: __S(199) as any as S.Schema<DeleteConfiguredTableAssociationOutput>,
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
  operationName: "DeleteConfiguredTableAssociation",
}));

export type DeleteConfiguredTableAssociationAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an analysis rule for a configured table association.
 */
export const deleteConfiguredTableAssociationAnalysisRule: API.OperationMethod<
  DeleteConfiguredTableAssociationAnalysisRuleInput,
  DeleteConfiguredTableAssociationAnalysisRuleOutput,
  DeleteConfiguredTableAssociationAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203) as any as S.Schema<DeleteConfiguredTableAssociationAnalysisRuleInput>,
  output: __S(199) as any as S.Schema<DeleteConfiguredTableAssociationAnalysisRuleOutput>,
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
  operationName: "DeleteConfiguredTableAssociationAnalysisRule",
}));

export type DeleteIdMappingTableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an ID mapping table.
 */
export const deleteIdMappingTable: API.OperationMethod<
  DeleteIdMappingTableInput,
  DeleteIdMappingTableOutput,
  DeleteIdMappingTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204) as any as S.Schema<DeleteIdMappingTableInput>,
  output: __S(196) as any as S.Schema<DeleteIdMappingTableOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdMappingTable",
}));

export type DeleteIdNamespaceAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an ID namespace association.
 */
export const deleteIdNamespaceAssociation: API.OperationMethod<
  DeleteIdNamespaceAssociationInput,
  DeleteIdNamespaceAssociationOutput,
  DeleteIdNamespaceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205) as any as S.Schema<DeleteIdNamespaceAssociationInput>,
  output: __S(199) as any as S.Schema<DeleteIdNamespaceAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdNamespaceAssociation",
}));

export type DeleteIntermediateTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an intermediate table. The delete is idempotent. Only the intermediate table owner can call this operation.
 */
export const deleteIntermediateTable: API.OperationMethod<
  DeleteIntermediateTableInput,
  DeleteIntermediateTableOutput,
  DeleteIntermediateTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206) as any as S.Schema<DeleteIntermediateTableInput>,
  output: __S(196) as any as S.Schema<DeleteIntermediateTableOutput>,
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
  operationName: "DeleteIntermediateTable",
}));

export type DeleteIntermediateTableAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an analysis rule from an intermediate table. After the analysis rule is deleted, the intermediate table becomes unqueryable until a new analysis rule is attached. Only the intermediate table owner can call this operation.
 */
export const deleteIntermediateTableAnalysisRule: API.OperationMethod<
  DeleteIntermediateTableAnalysisRuleInput,
  DeleteIntermediateTableAnalysisRuleOutput,
  DeleteIntermediateTableAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207) as any as S.Schema<DeleteIntermediateTableAnalysisRuleInput>,
  output: __S(199) as any as S.Schema<DeleteIntermediateTableAnalysisRuleOutput>,
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
  operationName: "DeleteIntermediateTableAnalysisRule",
}));

export type DeleteMemberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
 */
export const deleteMember: API.OperationMethod<
  DeleteMemberInput,
  DeleteMemberOutput,
  DeleteMemberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208) as any as S.Schema<DeleteMemberInput>,
  output: __S(196) as any as S.Schema<DeleteMemberOutput>,
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
  operationName: "DeleteMember",
}));

export type DeleteMembershipError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specified membership. All resources under a membership must be deleted.
 */
export const deleteMembership: API.OperationMethod<
  DeleteMembershipInput,
  DeleteMembershipOutput,
  DeleteMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209) as any as S.Schema<DeleteMembershipInput>,
  output: __S(196) as any as S.Schema<DeleteMembershipOutput>,
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
  operationName: "DeleteMembership",
}));

export type DeletePrivacyBudgetTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a privacy budget template for a specified collaboration.
 */
export const deletePrivacyBudgetTemplate: API.OperationMethod<
  DeletePrivacyBudgetTemplateInput,
  DeletePrivacyBudgetTemplateOutput,
  DeletePrivacyBudgetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210) as any as S.Schema<DeletePrivacyBudgetTemplateInput>,
  output: __S(199) as any as S.Schema<DeletePrivacyBudgetTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePrivacyBudgetTemplate",
}));

export type DisallowIntermediateTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Marks an intermediate table as invalid when it references the caller's base table. The data provider (base table owner) calls this operation, not the intermediate table owner. By default, the operation also marks all descendant intermediate tables as invalid.
 */
export const disallowIntermediateTable: API.OperationMethod<
  DisallowIntermediateTableInput,
  DisallowIntermediateTableOutput,
  DisallowIntermediateTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211) as any as S.Schema<DisallowIntermediateTableInput>,
  output: __S(212) as any as S.Schema<DisallowIntermediateTableOutput>,
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
  operationName: "DisallowIntermediateTable",
}));

export type GetAnalysisLogExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an analysis log export, including its current status and, if the export failed, the reason for the failure.
 *
 * Poll this operation until the `status` is `SUCCESS` or `FAILED`. An export can't be canceled after it starts.
 */
export const getAnalysisLogExport: API.OperationMethod<
  GetAnalysisLogExportInput,
  GetAnalysisLogExportOutput,
  GetAnalysisLogExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(213) as any as S.Schema<GetAnalysisLogExportInput>,
  output: __S(218) as any as S.Schema<GetAnalysisLogExportOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnalysisLogExport",
}));

export type GetAnalysisTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves an analysis template.
 */
export const getAnalysisTemplate: API.OperationMethod<
  GetAnalysisTemplateInput,
  GetAnalysisTemplateOutput,
  GetAnalysisTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(219) as any as S.Schema<GetAnalysisTemplateInput>,
  output: __S(87) as any as S.Schema<GetAnalysisTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnalysisTemplate",
}));

export type GetCollaborationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns metadata about a collaboration.
 */
export const getCollaboration: API.OperationMethod<
  GetCollaborationInput,
  GetCollaborationOutput,
  GetCollaborationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220) as any as S.Schema<GetCollaborationInput>,
  output: __S(221) as any as S.Schema<GetCollaborationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaboration",
}));

export type GetCollaborationAnalysisTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves an analysis template within a collaboration.
 */
export const getCollaborationAnalysisTemplate: API.OperationMethod<
  GetCollaborationAnalysisTemplateInput,
  GetCollaborationAnalysisTemplateOutput,
  GetCollaborationAnalysisTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222) as any as S.Schema<GetCollaborationAnalysisTemplateInput>,
  output: __S(223) as any as S.Schema<GetCollaborationAnalysisTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaborationAnalysisTemplate",
}));

export type GetCollaborationChangeRequestError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific collaboration change request.
 */
export const getCollaborationChangeRequest: API.OperationMethod<
  GetCollaborationChangeRequestInput,
  GetCollaborationChangeRequestOutput,
  GetCollaborationChangeRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(224) as any as S.Schema<GetCollaborationChangeRequestInput>,
  output: __S(110) as any as S.Schema<GetCollaborationChangeRequestOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaborationChangeRequest",
}));

export type GetCollaborationConfiguredAudienceModelAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a configured audience model association within a collaboration.
 */
export const getCollaborationConfiguredAudienceModelAssociation: API.OperationMethod<
  GetCollaborationConfiguredAudienceModelAssociationInput,
  GetCollaborationConfiguredAudienceModelAssociationOutput,
  GetCollaborationConfiguredAudienceModelAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(225) as any as S.Schema<GetCollaborationConfiguredAudienceModelAssociationInput>,
  output: __S(227) as any as S.Schema<GetCollaborationConfiguredAudienceModelAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaborationConfiguredAudienceModelAssociation",
}));

export type GetCollaborationIdNamespaceAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves an ID namespace association from a specific collaboration.
 */
export const getCollaborationIdNamespaceAssociation: API.OperationMethod<
  GetCollaborationIdNamespaceAssociationInput,
  GetCollaborationIdNamespaceAssociationOutput,
  GetCollaborationIdNamespaceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(228) as any as S.Schema<GetCollaborationIdNamespaceAssociationInput>,
  output: __S(230) as any as S.Schema<GetCollaborationIdNamespaceAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaborationIdNamespaceAssociation",
}));

export type GetCollaborationPrivacyBudgetTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about a specified privacy budget template.
 */
export const getCollaborationPrivacyBudgetTemplate: API.OperationMethod<
  GetCollaborationPrivacyBudgetTemplateInput,
  GetCollaborationPrivacyBudgetTemplateOutput,
  GetCollaborationPrivacyBudgetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(231) as any as S.Schema<GetCollaborationPrivacyBudgetTemplateInput>,
  output: __S(233) as any as S.Schema<GetCollaborationPrivacyBudgetTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCollaborationPrivacyBudgetTemplate",
}));

export type GetConfiguredAudienceModelAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a configured audience model association.
 */
export const getConfiguredAudienceModelAssociation: API.OperationMethod<
  GetConfiguredAudienceModelAssociationInput,
  GetConfiguredAudienceModelAssociationOutput,
  GetConfiguredAudienceModelAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(234) as any as S.Schema<GetConfiguredAudienceModelAssociationInput>,
  output: __S(113) as any as S.Schema<GetConfiguredAudienceModelAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredAudienceModelAssociation",
}));

export type GetConfiguredTableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a configured table.
 */
export const getConfiguredTable: API.OperationMethod<
  GetConfiguredTableInput,
  GetConfiguredTableOutput,
  GetConfiguredTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(235) as any as S.Schema<GetConfiguredTableInput>,
  output: __S(236) as any as S.Schema<GetConfiguredTableOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredTable",
}));

export type GetConfiguredTableAnalysisRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a configured table analysis rule.
 */
export const getConfiguredTableAnalysisRule: API.OperationMethod<
  GetConfiguredTableAnalysisRuleInput,
  GetConfiguredTableAnalysisRuleOutput,
  GetConfiguredTableAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(237) as any as S.Schema<GetConfiguredTableAnalysisRuleInput>,
  output: __S(129) as any as S.Schema<GetConfiguredTableAnalysisRuleOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredTableAnalysisRule",
}));

export type GetConfiguredTableAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a configured table association.
 */
export const getConfiguredTableAssociation: API.OperationMethod<
  GetConfiguredTableAssociationInput,
  GetConfiguredTableAssociationOutput,
  GetConfiguredTableAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(238) as any as S.Schema<GetConfiguredTableAssociationInput>,
  output: __S(134) as any as S.Schema<GetConfiguredTableAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredTableAssociation",
}));

export type GetConfiguredTableAssociationAnalysisRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the analysis rule for a configured table association.
 */
export const getConfiguredTableAssociationAnalysisRule: API.OperationMethod<
  GetConfiguredTableAssociationAnalysisRuleInput,
  GetConfiguredTableAssociationAnalysisRuleOutput,
  GetConfiguredTableAssociationAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239) as any as S.Schema<GetConfiguredTableAssociationAnalysisRuleInput>,
  output: __S(137) as any as S.Schema<GetConfiguredTableAssociationAnalysisRuleOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguredTableAssociationAnalysisRule",
}));

export type GetIdMappingTableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves an ID mapping table.
 */
export const getIdMappingTable: API.OperationMethod<
  GetIdMappingTableInput,
  GetIdMappingTableOutput,
  GetIdMappingTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(240) as any as S.Schema<GetIdMappingTableInput>,
  output: __S(241) as any as S.Schema<GetIdMappingTableOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdMappingTable",
}));

export type GetIdNamespaceAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves an ID namespace association.
 */
export const getIdNamespaceAssociation: API.OperationMethod<
  GetIdNamespaceAssociationInput,
  GetIdNamespaceAssociationOutput,
  GetIdNamespaceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(242) as any as S.Schema<GetIdNamespaceAssociationInput>,
  output: __S(148) as any as S.Schema<GetIdNamespaceAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdNamespaceAssociation",
}));

export type GetIntermediateTableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves an intermediate table. Returns the full details of the intermediate table, including schema, table dependencies, inherited constraints, child resources, and status. Only the intermediate table owner can call this operation.
 */
export const getIntermediateTable: API.OperationMethod<
  GetIntermediateTableInput,
  GetIntermediateTableOutput,
  GetIntermediateTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243) as any as S.Schema<GetIntermediateTableInput>,
  output: __S(169) as any as S.Schema<GetIntermediateTableOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIntermediateTable",
}));

export type GetIntermediateTableAnalysisRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the analysis rule for an intermediate table.
 */
export const getIntermediateTableAnalysisRule: API.OperationMethod<
  GetIntermediateTableAnalysisRuleInput,
  GetIntermediateTableAnalysisRuleOutput,
  GetIntermediateTableAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(244) as any as S.Schema<GetIntermediateTableAnalysisRuleInput>,
  output: __S(175) as any as S.Schema<GetIntermediateTableAnalysisRuleOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIntermediateTableAnalysisRule",
}));

export type GetMembershipError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a specified membership for an identifier.
 */
export const getMembership: API.OperationMethod<
  GetMembershipInput,
  GetMembershipOutput,
  GetMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(245) as any as S.Schema<GetMembershipInput>,
  output: __S(186) as any as S.Schema<GetMembershipOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMembership",
}));

export type GetPrivacyBudgetTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details for a specified privacy budget template.
 */
export const getPrivacyBudgetTemplate: API.OperationMethod<
  GetPrivacyBudgetTemplateInput,
  GetPrivacyBudgetTemplateOutput,
  GetPrivacyBudgetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(246) as any as S.Schema<GetPrivacyBudgetTemplateInput>,
  output: __S(194) as any as S.Schema<GetPrivacyBudgetTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPrivacyBudgetTemplate",
}));

export type GetProtectedJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns job processing metadata.
 */
export const getProtectedJob: API.OperationMethod<
  GetProtectedJobInput,
  GetProtectedJobOutput,
  GetProtectedJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(247) as any as S.Schema<GetProtectedJobInput>,
  output: __S(263) as any as S.Schema<GetProtectedJobOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProtectedJob",
}));

export type GetProtectedQueryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns query processing metadata.
 */
export const getProtectedQuery: API.OperationMethod<
  GetProtectedQueryInput,
  GetProtectedQueryOutput,
  GetProtectedQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(264) as any as S.Schema<GetProtectedQueryInput>,
  output: __S(282) as any as S.Schema<GetProtectedQueryOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProtectedQuery",
}));

export type GetSchemaError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the schema for a relation within a collaboration.
 */
export const getSchema: API.OperationMethod<
  GetSchemaInput,
  GetSchemaOutput,
  GetSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283) as any as S.Schema<GetSchemaInput>,
  output: __S(284) as any as S.Schema<GetSchemaOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSchema",
}));

export type GetSchemaAnalysisRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a schema analysis rule.
 */
export const getSchemaAnalysisRule: API.OperationMethod<
  GetSchemaAnalysisRuleInput,
  GetSchemaAnalysisRuleOutput,
  GetSchemaAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(285) as any as S.Schema<GetSchemaAnalysisRuleInput>,
  output: __S(286) as any as S.Schema<GetSchemaAnalysisRuleOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSchemaAnalysisRule",
}));

export type ListAnalysisLogExportsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists analysis log exports, sorted by the most recent export. Results are paginated. Use the `nextToken` parameter to retrieve additional results.
 */
export const listAnalysisLogExports: API.PaginatedOperationMethod<
  ListAnalysisLogExportsInput,
  ListAnalysisLogExportsOutput,
  ListAnalysisLogExportsError,
  Credentials | HttpClient.HttpClient,
  AnalysisLogExportSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(287) as any as S.Schema<ListAnalysisLogExportsInput>,
  output: __S(290) as any as S.Schema<ListAnalysisLogExportsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnalysisLogExports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "analysisLogExports",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAnalysisTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists analysis templates that the caller owns.
 */
export const listAnalysisTemplates: API.PaginatedOperationMethod<
  ListAnalysisTemplatesInput,
  ListAnalysisTemplatesOutput,
  ListAnalysisTemplatesError,
  Credentials | HttpClient.HttpClient,
  AnalysisTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(291) as any as S.Schema<ListAnalysisTemplatesInput>,
  output: __S(294) as any as S.Schema<ListAnalysisTemplatesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnalysisTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "analysisTemplateSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationAnalysisTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists analysis templates within a collaboration.
 */
export const listCollaborationAnalysisTemplates: API.PaginatedOperationMethod<
  ListCollaborationAnalysisTemplatesInput,
  ListCollaborationAnalysisTemplatesOutput,
  ListCollaborationAnalysisTemplatesError,
  Credentials | HttpClient.HttpClient,
  CollaborationAnalysisTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(295) as any as S.Schema<ListCollaborationAnalysisTemplatesInput>,
  output: __S(298) as any as S.Schema<ListCollaborationAnalysisTemplatesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationAnalysisTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationAnalysisTemplateSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationChangeRequestsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all change requests for a collaboration with pagination support. Returns change requests sorted by creation time.
 */
export const listCollaborationChangeRequests: API.PaginatedOperationMethod<
  ListCollaborationChangeRequestsInput,
  ListCollaborationChangeRequestsOutput,
  ListCollaborationChangeRequestsError,
  Credentials | HttpClient.HttpClient,
  CollaborationChangeRequestSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(299) as any as S.Schema<ListCollaborationChangeRequestsInput>,
  output: __S(301) as any as S.Schema<ListCollaborationChangeRequestsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationChangeRequests",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationChangeRequestSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationConfiguredAudienceModelAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists configured audience model associations within a collaboration.
 */
export const listCollaborationConfiguredAudienceModelAssociations: API.PaginatedOperationMethod<
  ListCollaborationConfiguredAudienceModelAssociationsInput,
  ListCollaborationConfiguredAudienceModelAssociationsOutput,
  ListCollaborationConfiguredAudienceModelAssociationsError,
  Credentials | HttpClient.HttpClient,
  CollaborationConfiguredAudienceModelAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(302) as any as S.Schema<ListCollaborationConfiguredAudienceModelAssociationsInput>,
  output: __S(305) as any as S.Schema<ListCollaborationConfiguredAudienceModelAssociationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationConfiguredAudienceModelAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationConfiguredAudienceModelAssociationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationIdNamespaceAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the ID namespace associations in a collaboration.
 */
export const listCollaborationIdNamespaceAssociations: API.PaginatedOperationMethod<
  ListCollaborationIdNamespaceAssociationsInput,
  ListCollaborationIdNamespaceAssociationsOutput,
  ListCollaborationIdNamespaceAssociationsError,
  Credentials | HttpClient.HttpClient,
  CollaborationIdNamespaceAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(306) as any as S.Schema<ListCollaborationIdNamespaceAssociationsInput>,
  output: __S(310) as any as S.Schema<ListCollaborationIdNamespaceAssociationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationIdNamespaceAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationIdNamespaceAssociationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationPrivacyBudgetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an array that summarizes each privacy budget in a specified collaboration. The summary includes the collaboration ARN, creation time, creating account, and privacy budget details.
 */
export const listCollaborationPrivacyBudgets: API.PaginatedOperationMethod<
  ListCollaborationPrivacyBudgetsInput,
  ListCollaborationPrivacyBudgetsOutput,
  ListCollaborationPrivacyBudgetsError,
  Credentials | HttpClient.HttpClient,
  CollaborationPrivacyBudgetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(311) as any as S.Schema<ListCollaborationPrivacyBudgetsInput>,
  output: __S(321) as any as S.Schema<ListCollaborationPrivacyBudgetsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationPrivacyBudgets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationPrivacyBudgetSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationPrivacyBudgetTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an array that summarizes each privacy budget template in a specified collaboration.
 */
export const listCollaborationPrivacyBudgetTemplates: API.PaginatedOperationMethod<
  ListCollaborationPrivacyBudgetTemplatesInput,
  ListCollaborationPrivacyBudgetTemplatesOutput,
  ListCollaborationPrivacyBudgetTemplatesError,
  Credentials | HttpClient.HttpClient,
  CollaborationPrivacyBudgetTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(322) as any as S.Schema<ListCollaborationPrivacyBudgetTemplatesInput>,
  output: __S(325) as any as S.Schema<ListCollaborationPrivacyBudgetTemplatesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborationPrivacyBudgetTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationPrivacyBudgetTemplateSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCollaborationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists collaborations the caller owns, is active in, or has been invited to.
 */
export const listCollaborations: API.PaginatedOperationMethod<
  ListCollaborationsInput,
  ListCollaborationsOutput,
  ListCollaborationsError,
  Credentials | HttpClient.HttpClient,
  CollaborationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(326) as any as S.Schema<ListCollaborationsInput>,
  output: __S(329) as any as S.Schema<ListCollaborationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCollaborations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "collaborationList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfiguredAudienceModelAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists information about requested configured audience model associations.
 */
export const listConfiguredAudienceModelAssociations: API.PaginatedOperationMethod<
  ListConfiguredAudienceModelAssociationsInput,
  ListConfiguredAudienceModelAssociationsOutput,
  ListConfiguredAudienceModelAssociationsError,
  Credentials | HttpClient.HttpClient,
  ConfiguredAudienceModelAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(330) as any as S.Schema<ListConfiguredAudienceModelAssociationsInput>,
  output: __S(333) as any as S.Schema<ListConfiguredAudienceModelAssociationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfiguredAudienceModelAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configuredAudienceModelAssociationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfiguredTableAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists configured table associations for a membership.
 */
export const listConfiguredTableAssociations: API.PaginatedOperationMethod<
  ListConfiguredTableAssociationsInput,
  ListConfiguredTableAssociationsOutput,
  ListConfiguredTableAssociationsError,
  Credentials | HttpClient.HttpClient,
  ConfiguredTableAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(334) as any as S.Schema<ListConfiguredTableAssociationsInput>,
  output: __S(337) as any as S.Schema<ListConfiguredTableAssociationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfiguredTableAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configuredTableAssociationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfiguredTablesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists configured tables.
 */
export const listConfiguredTables: API.PaginatedOperationMethod<
  ListConfiguredTablesInput,
  ListConfiguredTablesOutput,
  ListConfiguredTablesError,
  Credentials | HttpClient.HttpClient,
  ConfiguredTableSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(338) as any as S.Schema<ListConfiguredTablesInput>,
  output: __S(341) as any as S.Schema<ListConfiguredTablesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfiguredTables",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configuredTableSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIdMappingTablesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of ID mapping tables.
 */
export const listIdMappingTables: API.PaginatedOperationMethod<
  ListIdMappingTablesInput,
  ListIdMappingTablesOutput,
  ListIdMappingTablesError,
  Credentials | HttpClient.HttpClient,
  IdMappingTableSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(342) as any as S.Schema<ListIdMappingTablesInput>,
  output: __S(345) as any as S.Schema<ListIdMappingTablesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdMappingTables",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "idMappingTableSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIdNamespaceAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of ID namespace associations.
 */
export const listIdNamespaceAssociations: API.PaginatedOperationMethod<
  ListIdNamespaceAssociationsInput,
  ListIdNamespaceAssociationsOutput,
  ListIdNamespaceAssociationsError,
  Credentials | HttpClient.HttpClient,
  IdNamespaceAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(346) as any as S.Schema<ListIdNamespaceAssociationsInput>,
  output: __S(349) as any as S.Schema<ListIdNamespaceAssociationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdNamespaceAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "idNamespaceAssociationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIntermediateTablesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists intermediate tables owned by the caller in a membership. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */
export const listIntermediateTables: API.PaginatedOperationMethod<
  ListIntermediateTablesInput,
  ListIntermediateTablesOutput,
  ListIntermediateTablesError,
  Credentials | HttpClient.HttpClient,
  IntermediateTableSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(350) as any as S.Schema<ListIntermediateTablesInput>,
  output: __S(353) as any as S.Schema<ListIntermediateTablesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntermediateTables",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "intermediateTableSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIntermediateTableVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the version history of an intermediate table. Each call to `PopulateIntermediateTable` creates a new version. We recommend using pagination to ensure that the operation returns quickly and successfully.
 */
export const listIntermediateTableVersions: API.PaginatedOperationMethod<
  ListIntermediateTableVersionsInput,
  ListIntermediateTableVersionsOutput,
  ListIntermediateTableVersionsError,
  Credentials | HttpClient.HttpClient,
  IntermediateTableVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(354) as any as S.Schema<ListIntermediateTableVersionsInput>,
  output: __S(357) as any as S.Schema<ListIntermediateTableVersionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntermediateTableVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "intermediateTableVersionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMembersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all members within a collaboration.
 */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersInput,
  ListMembersOutput,
  ListMembersError,
  Credentials | HttpClient.HttpClient,
  MemberSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(358) as any as S.Schema<ListMembersInput>,
  output: __S(361) as any as S.Schema<ListMembersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMembers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "memberSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMembershipsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all memberships resources within the caller's account.
 */
export const listMemberships: API.PaginatedOperationMethod<
  ListMembershipsInput,
  ListMembershipsOutput,
  ListMembershipsError,
  Credentials | HttpClient.HttpClient,
  MembershipSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(362) as any as S.Schema<ListMembershipsInput>,
  output: __S(365) as any as S.Schema<ListMembershipsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMemberships",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "membershipSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPrivacyBudgetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns detailed information about the privacy budgets in a specified membership.
 */
export const listPrivacyBudgets: API.PaginatedOperationMethod<
  ListPrivacyBudgetsInput,
  ListPrivacyBudgetsOutput,
  ListPrivacyBudgetsError,
  Credentials | HttpClient.HttpClient,
  PrivacyBudgetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(366) as any as S.Schema<ListPrivacyBudgetsInput>,
  output: __S(369) as any as S.Schema<ListPrivacyBudgetsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPrivacyBudgets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "privacyBudgetSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPrivacyBudgetTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns detailed information about the privacy budget templates in a specified membership.
 */
export const listPrivacyBudgetTemplates: API.PaginatedOperationMethod<
  ListPrivacyBudgetTemplatesInput,
  ListPrivacyBudgetTemplatesOutput,
  ListPrivacyBudgetTemplatesError,
  Credentials | HttpClient.HttpClient,
  PrivacyBudgetTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(370) as any as S.Schema<ListPrivacyBudgetTemplatesInput>,
  output: __S(373) as any as S.Schema<ListPrivacyBudgetTemplatesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPrivacyBudgetTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "privacyBudgetTemplateSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProtectedJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists protected jobs, sorted by most recent job.
 */
export const listProtectedJobs: API.PaginatedOperationMethod<
  ListProtectedJobsInput,
  ListProtectedJobsOutput,
  ListProtectedJobsError,
  Credentials | HttpClient.HttpClient,
  ProtectedJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(374) as any as S.Schema<ListProtectedJobsInput>,
  output: __S(381) as any as S.Schema<ListProtectedJobsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProtectedJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "protectedJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProtectedQueriesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists protected queries, sorted by the most recent query.
 */
export const listProtectedQueries: API.PaginatedOperationMethod<
  ListProtectedQueriesInput,
  ListProtectedQueriesOutput,
  ListProtectedQueriesError,
  Credentials | HttpClient.HttpClient,
  ProtectedQuerySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(382) as any as S.Schema<ListProtectedQueriesInput>,
  output: __S(387) as any as S.Schema<ListProtectedQueriesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProtectedQueries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "protectedQueries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSchemasError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the schemas for relations within a collaboration.
 */
export const listSchemas: API.PaginatedOperationMethod<
  ListSchemasInput,
  ListSchemasOutput,
  ListSchemasError,
  Credentials | HttpClient.HttpClient,
  SchemaSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(388) as any as S.Schema<ListSchemasInput>,
  output: __S(391) as any as S.Schema<ListSchemasOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSchemas",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "schemaSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all of the tags that have been added to a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(392) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(393) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PopulateIdMappingTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Defines the information that's necessary to populate an ID mapping table.
 */
export const populateIdMappingTable: API.OperationMethod<
  PopulateIdMappingTableInput,
  PopulateIdMappingTableOutput,
  PopulateIdMappingTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(394) as any as S.Schema<PopulateIdMappingTableInput>,
  output: __S(395) as any as S.Schema<PopulateIdMappingTableOutput>,
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
  operationName: "PopulateIdMappingTable",
}));

export type PopulateIntermediateTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Runs the stored query of an intermediate table and makes the results available for querying. Each call creates a new version. Use `GetProtectedQuery` with the returned analysis ID to track progress. Only the intermediate table owner can call this operation.
 */
export const populateIntermediateTable: API.OperationMethod<
  PopulateIntermediateTableInput,
  PopulateIntermediateTableOutput,
  PopulateIntermediateTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(397) as any as S.Schema<PopulateIntermediateTableInput>,
  output: __S(398) as any as S.Schema<PopulateIntermediateTableOutput>,
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
  operationName: "PopulateIntermediateTable",
}));

export type PreviewPrivacyImpactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * An estimate of the number of aggregation functions that the member who can query can run given epsilon and noise parameters.
 */
export const previewPrivacyImpact: API.OperationMethod<
  PreviewPrivacyImpactInput,
  PreviewPrivacyImpactOutput,
  PreviewPrivacyImpactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(400) as any as S.Schema<PreviewPrivacyImpactInput>,
  output: __S(405) as any as S.Schema<PreviewPrivacyImpactOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PreviewPrivacyImpact",
}));

export type StartAnalysisLogExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an export of the Apache Spark logs for a protected query to an Amazon S3 bucket that you own. Use the exported logs to diagnose a query that failed or that ran more slowly than you expected.
 *
 * Clean Rooms exports a redacted copy of the Spark logs instead of the raw logs. Analyze the exported logs with the tooling of your choice, such as Spark History Server. For details about what the exported logs contain, see https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs-contents.html.
 *
 * The export runs asynchronously and returns with a `status` of `IN_PROGRESS`. Call `GetAnalysisLogExport` to poll for the final status.
 *
 * To use this operation, you must have the `CAN_EXPORT_QUERY_ANALYSIS_LOG` ability for your membership. You must also be the query runner or the query payer. Having the ability alone is not sufficient.
 *
 * The query must have reached a terminal state, and it must have reached the execution stage. A query that failed validation or that was canceled before it started produces no Spark logs.
 *
 * Log export isn't supported for queries that use differential privacy, and isn't supported for PySpark jobs.
 *
 * The destination bucket must be in the same Amazon Web Services Region as the collaboration. Cross-Region export isn't supported.
 *
 * For more information, see https://docs.aws.amazon.com/clean-rooms/latest/userguide/export-analysis-logs.html.
 */
export const startAnalysisLogExport: API.OperationMethod<
  StartAnalysisLogExportInput,
  StartAnalysisLogExportOutput,
  StartAnalysisLogExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(406) as any as S.Schema<StartAnalysisLogExportInput>,
  output: __S(218) as any as S.Schema<StartAnalysisLogExportOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAnalysisLogExport",
}));

export type StartProtectedJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a protected job that is started by Clean Rooms.
 */
export const startProtectedJob: API.OperationMethod<
  StartProtectedJobInput,
  StartProtectedJobOutput,
  StartProtectedJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(409) as any as S.Schema<StartProtectedJobInput>,
  output: __S(263) as any as S.Schema<StartProtectedJobOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartProtectedJob",
}));

export type StartProtectedQueryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a protected query that is started by Clean Rooms.
 */
export const startProtectedQuery: API.OperationMethod<
  StartProtectedQueryInput,
  StartProtectedQueryOutput,
  StartProtectedQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(410) as any as S.Schema<StartProtectedQueryInput>,
  output: __S(411) as any as S.Schema<StartProtectedQueryOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartProtectedQuery",
}));

export type TagResourceError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Tags a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(412) as any as S.Schema<TagResourceInput>,
  output: __S(196) as any as S.Schema<TagResourceOutput>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Removes a tag or list of tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(413) as any as S.Schema<UntagResourceInput>,
  output: __S(196) as any as S.Schema<UntagResourceOutput>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAnalysisTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the analysis template metadata.
 */
export const updateAnalysisTemplate: API.OperationMethod<
  UpdateAnalysisTemplateInput,
  UpdateAnalysisTemplateOutput,
  UpdateAnalysisTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(414) as any as S.Schema<UpdateAnalysisTemplateInput>,
  output: __S(87) as any as S.Schema<UpdateAnalysisTemplateOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAnalysisTemplate",
}));

export type UpdateCollaborationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates collaboration metadata and can only be called by the collaboration owner.
 */
export const updateCollaboration: API.OperationMethod<
  UpdateCollaborationInput,
  UpdateCollaborationOutput,
  UpdateCollaborationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(415) as any as S.Schema<UpdateCollaborationInput>,
  output: __S(98) as any as S.Schema<UpdateCollaborationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCollaboration",
}));

export type UpdateCollaborationChangeRequestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing collaboration change request. This operation allows approval actions for pending change requests in collaborations (APPROVE, DENY, CANCEL, COMMIT).
 *
 * For change requests without automatic approval, a member in the collaboration can manually APPROVE or DENY a change request. The collaboration owner can manually CANCEL or COMMIT a change request.
 */
export const updateCollaborationChangeRequest: API.OperationMethod<
  UpdateCollaborationChangeRequestInput,
  UpdateCollaborationChangeRequestOutput,
  UpdateCollaborationChangeRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(416) as any as S.Schema<UpdateCollaborationChangeRequestInput>,
  output: __S(110) as any as S.Schema<UpdateCollaborationChangeRequestOutput>,
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
  operationName: "UpdateCollaborationChangeRequest",
}));

export type UpdateConfiguredAudienceModelAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the details necessary to update a configured audience model association.
 */
export const updateConfiguredAudienceModelAssociation: API.OperationMethod<
  UpdateConfiguredAudienceModelAssociationInput,
  UpdateConfiguredAudienceModelAssociationOutput,
  UpdateConfiguredAudienceModelAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(417) as any as S.Schema<UpdateConfiguredAudienceModelAssociationInput>,
  output: __S(113) as any as S.Schema<UpdateConfiguredAudienceModelAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfiguredAudienceModelAssociation",
}));

export type UpdateConfiguredTableError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a configured table.
 */
export const updateConfiguredTable: API.OperationMethod<
  UpdateConfiguredTableInput,
  UpdateConfiguredTableOutput,
  UpdateConfiguredTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(418) as any as S.Schema<UpdateConfiguredTableInput>,
  output: __S(124) as any as S.Schema<UpdateConfiguredTableOutput>,
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
  operationName: "UpdateConfiguredTable",
}));

export type UpdateConfiguredTableAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a configured table analysis rule.
 */
export const updateConfiguredTableAnalysisRule: API.OperationMethod<
  UpdateConfiguredTableAnalysisRuleInput,
  UpdateConfiguredTableAnalysisRuleOutput,
  UpdateConfiguredTableAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(419) as any as S.Schema<UpdateConfiguredTableAnalysisRuleInput>,
  output: __S(129) as any as S.Schema<UpdateConfiguredTableAnalysisRuleOutput>,
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
  operationName: "UpdateConfiguredTableAnalysisRule",
}));

export type UpdateConfiguredTableAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a configured table association.
 */
export const updateConfiguredTableAssociation: API.OperationMethod<
  UpdateConfiguredTableAssociationInput,
  UpdateConfiguredTableAssociationOutput,
  UpdateConfiguredTableAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(420) as any as S.Schema<UpdateConfiguredTableAssociationInput>,
  output: __S(134) as any as S.Schema<UpdateConfiguredTableAssociationOutput>,
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
  operationName: "UpdateConfiguredTableAssociation",
}));

export type UpdateConfiguredTableAssociationAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the analysis rule for a configured table association.
 */
export const updateConfiguredTableAssociationAnalysisRule: API.OperationMethod<
  UpdateConfiguredTableAssociationAnalysisRuleInput,
  UpdateConfiguredTableAssociationAnalysisRuleOutput,
  UpdateConfiguredTableAssociationAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(421) as any as S.Schema<UpdateConfiguredTableAssociationAnalysisRuleInput>,
  output: __S(137) as any as S.Schema<UpdateConfiguredTableAssociationAnalysisRuleOutput>,
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
  operationName: "UpdateConfiguredTableAssociationAnalysisRule",
}));

export type UpdateIdMappingTableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the details that are necessary to update an ID mapping table.
 */
export const updateIdMappingTable: API.OperationMethod<
  UpdateIdMappingTableInput,
  UpdateIdMappingTableOutput,
  UpdateIdMappingTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(422) as any as S.Schema<UpdateIdMappingTableInput>,
  output: __S(142) as any as S.Schema<UpdateIdMappingTableOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIdMappingTable",
}));

export type UpdateIdNamespaceAssociationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the details that are necessary to update an ID namespace association.
 */
export const updateIdNamespaceAssociation: API.OperationMethod<
  UpdateIdNamespaceAssociationInput,
  UpdateIdNamespaceAssociationOutput,
  UpdateIdNamespaceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(423) as any as S.Schema<UpdateIdNamespaceAssociationInput>,
  output: __S(148) as any as S.Schema<UpdateIdNamespaceAssociationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIdNamespaceAssociation",
}));

export type UpdateIntermediateTableError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an intermediate table. You can update the description, KMS key ARN, and column types of existing columns. Only the intermediate table owner can call this operation.
 */
export const updateIntermediateTable: API.OperationMethod<
  UpdateIntermediateTableInput,
  UpdateIntermediateTableOutput,
  UpdateIntermediateTableError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(424) as any as S.Schema<UpdateIntermediateTableInput>,
  output: __S(169) as any as S.Schema<UpdateIntermediateTableOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIntermediateTable",
}));

export type UpdateIntermediateTableAnalysisRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the analysis rule policy for an intermediate table. Only the intermediate table owner can call this operation.
 */
export const updateIntermediateTableAnalysisRule: API.OperationMethod<
  UpdateIntermediateTableAnalysisRuleInput,
  UpdateIntermediateTableAnalysisRuleOutput,
  UpdateIntermediateTableAnalysisRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(425) as any as S.Schema<UpdateIntermediateTableAnalysisRuleInput>,
  output: __S(175) as any as S.Schema<UpdateIntermediateTableAnalysisRuleOutput>,
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
  operationName: "UpdateIntermediateTableAnalysisRule",
}));

export type UpdateMembershipError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a membership.
 */
export const updateMembership: API.OperationMethod<
  UpdateMembershipInput,
  UpdateMembershipOutput,
  UpdateMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(427) as any as S.Schema<UpdateMembershipInput>,
  output: __S(186) as any as S.Schema<UpdateMembershipOutput>,
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
  operationName: "UpdateMembership",
}));

export type UpdatePrivacyBudgetTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the privacy budget template for the specified collaboration.
 */
export const updatePrivacyBudgetTemplate: API.OperationMethod<
  UpdatePrivacyBudgetTemplateInput,
  UpdatePrivacyBudgetTemplateOutput,
  UpdatePrivacyBudgetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(431) as any as S.Schema<UpdatePrivacyBudgetTemplateInput>,
  output: __S(194) as any as S.Schema<UpdatePrivacyBudgetTemplateOutput>,
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
  operationName: "UpdatePrivacyBudgetTemplate",
}));

export type UpdateProtectedJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the processing of a currently running job.
 */
export const updateProtectedJob: API.OperationMethod<
  UpdateProtectedJobInput,
  UpdateProtectedJobOutput,
  UpdateProtectedJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(432) as any as S.Schema<UpdateProtectedJobInput>,
  output: __S(263) as any as S.Schema<UpdateProtectedJobOutput>,
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
  operationName: "UpdateProtectedJob",
}));

export type UpdateProtectedQueryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the processing of a currently running query.
 */
export const updateProtectedQuery: API.OperationMethod<
  UpdateProtectedQueryInput,
  UpdateProtectedQueryOutput,
  UpdateProtectedQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(433) as any as S.Schema<UpdateProtectedQueryInput>,
  output: __S(411) as any as S.Schema<UpdateProtectedQueryOutput>,
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
  operationName: "UpdateProtectedQuery",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          analysisTemplateArns: __S(0),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/collaborations/{collaborationIdentifier}/batch-analysistemplates",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetCollaborationAnalysisTemplateInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ referencedTables: S.optional(__S(0)) })).annotate({
        identifier: "AnalysisSchema",
      });
    case 3:
      return S.suspend(() => S.Struct({ bucket: S.String, key: S.String })).annotate({
        identifier: "S3Location",
      });
    case 4:
      return S.suspend(() => S.Struct({ location: __S(3) })).annotate({
        identifier: "AnalysisTemplateArtifact",
      });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          entryPoint: __S(4),
          additionalArtifacts: S.optional(__S(5)),
          roleArn: S.String,
        }),
      ).annotate({
        identifier: "AnalysisTemplateArtifacts",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: SensitiveString }),
        /*@__PURE__*/ S.Struct({ artifacts: __S(6) }),
      ]);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ sha256: S.optional(S.String) })).annotate({
        identifier: "Hash",
      });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({ entryPointHash: __S(8), additionalArtifactHashes: S.optional(__S(9)) }),
      ).annotate({
        identifier: "AnalysisTemplateArtifactMetadata",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ artifacts: __S(10) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.String, type: S.String, defaultValue: S.optional(S.String) }),
      ).annotate({ identifier: "AnalysisParameter" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "AnalysisTemplateValidationStatusReason",
      });
    case 7:
      return S.Array(__S(14));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          status: S.String,
          reasons: S.optional(__S(15)),
        }),
      ).annotate({
        identifier: "AnalysisTemplateValidationStatusDetail",
      });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() => S.Struct({ type: S.String })).annotate({
        identifier: "ErrorMessageConfiguration",
      });
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
      return S.Array(__S(19));
    case 5:
      return S.suspend(() => S.Struct({ columnMapping: __S(20) })).annotate({
        identifier: "ColumnClassificationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          epsilon: S.Number,
          maxMembershipInferenceAttackScore: S.Number,
          columnClassification: __S(21),
        }),
      ).annotate({
        identifier: "MLSyntheticDataParameters",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ mlSyntheticDataParameters: __S(22) })]);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          description: S.optional(S.String),
          creatorAccountId: S.String,
          name: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          schema: __S(2),
          format: S.String,
          source: S.optional(__S(7)),
          sourceMetadata: S.optional(__S(11)),
          analysisParameters: S.optional(__S(13)),
          validations: S.optional(__S(17)),
          errorMessageConfiguration: S.optional(__S(18)),
          syntheticDataParameters: S.optional(__S(23)),
        }),
      ).annotate({
        identifier: "CollaborationAnalysisTemplate",
      });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String, code: S.String, message: S.String }),
      ).annotate({
        identifier: "BatchGetCollaborationAnalysisTemplateError",
      });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({
          collaborationAnalysisTemplates: __S(25),
          errors: __S(27),
        }),
      ).annotate({
        identifier: "BatchGetCollaborationAnalysisTemplateOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          names: __S(0),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/collaborations/{collaborationIdentifier}/batch-schema",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetSchemaInput" });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, type: S.String })).annotate({
        identifier: "Column",
      });
    case 7:
      return S.Array(__S(30));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ code: S.String, message: S.String })).annotate({
        identifier: "SchemaStatusReason",
      });
    case 2:
      return S.Array(__S(33));
    case 3:
      return S.suspend(() =>
        S.Struct({
          status: S.String,
          reasons: S.optional(__S(34)),
          analysisRuleType: S.optional(S.String),
          configurations: S.optional(__S(32)),
          analysisType: S.String,
        }),
      ).annotate({ identifier: "SchemaStatusDetail" });
    case 4:
      return S.Array(__S(35));
    case 5:
      return S.suspend(() =>
        S.Struct({ idNamespaceAssociationId: S.String, type: S.String }),
      ).annotate({
        identifier: "IdMappingTableInputSource",
      });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({
          idMappingTableInputSource: __S(38),
          idMappingTableId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IdMappingTableSchemaTypeProperties",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ intermediateTableId: S.String })).annotate({
        identifier: "IntermediateTableSchemaTypeProperties",
      });
    case 1:
      return S.suspend(() => S.Struct({ configuredTableAssociationId: S.String })).annotate({
        identifier: "ConfiguredTableAssociationSchemaTypeProperties",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ idMappingTable: __S(39) }),
        /*@__PURE__*/ S.Struct({ intermediateTable: __S(40) }),
        /*@__PURE__*/ S.Struct({
          configuredTableAssociation: __S(41),
        }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          columns: __S(31),
          partitionKeys: __S(31),
          analysisRuleTypes: __S(32),
          analysisMethod: S.optional(S.String),
          selectedAnalysisMethods: S.optional(__S(32)),
          creatorAccountId: S.String,
          name: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          description: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          type: S.String,
          schemaStatusDetails: __S(36),
          resourceArn: S.optional(S.String),
          schemaTypeProperties: S.optional(__S(42)),
        }),
      ).annotate({ identifier: "Schema" });
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "BatchGetSchemaError" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() => S.Struct({ schemas: __S(44), errors: __S(46) })).annotate({
        identifier: "BatchGetSchemaOutput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, type: S.String })).annotate({
        identifier: "SchemaAnalysisRuleRequest",
      });
    case 1:
      return S.Array(__S(48));
    case 2:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          schemaAnalysisRuleRequests: __S(49),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/collaborations/{collaborationIdentifier}/batch-schema-analysis-rule",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetSchemaAnalysisRuleInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          joinColumns: __S(0),
          allowedJoinOperators: S.optional(__S(0)),
          listColumns: __S(0),
          additionalAnalyses: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalysisRuleList" });
    case 4:
      return S.suspend(() => S.Struct({ columnNames: __S(0), function: S.String })).annotate({
        identifier: "AggregateColumn",
      });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() =>
        S.Struct({ columnName: S.String, minimum: S.Number, type: S.String }),
      ).annotate({ identifier: "AggregationConstraint" });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          aggregateColumns: __S(53),
          joinColumns: __S(0),
          joinRequired: S.optional(S.String),
          allowedJoinOperators: S.optional(__S(0)),
          dimensionColumns: __S(0),
          scalarFunctions: __S(0),
          outputConstraints: __S(55),
          additionalAnalyses: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalysisRuleAggregation" });
    case 1:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "DifferentialPrivacyColumn",
      });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() => S.Struct({ columns: __S(58) })).annotate({
        identifier: "DifferentialPrivacyConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ outputColumnName: S.String, minimumIdentityCount: S.Number }),
      ).annotate({ identifier: "OutputColumnThreshold" });
    case 5:
      return S.Array(__S(60));
    case 6:
      return S.suspend(() =>
        S.Struct({
          identityColumns: __S(0),
          minimumIdentityCount: S.Number,
          type: S.String,
          outputColumnThresholds: S.optional(__S(61)),
          allowedAggregateExpressionType: S.String,
        }),
      ).annotate({ identifier: "AggregationThreshold" });
    case 7:
      return S.Array(__S(62));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowedLiteralComparisonColumns: __S(0),
          allowedColumnComparisonColumns: __S(0),
        }),
      ).annotate({ identifier: "ComparisonControls" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          allowedAnalyses: __S(0),
          allowedAnalysisProviders: S.optional(__S(0)),
          additionalAnalyses: S.optional(S.String),
          disallowedOutputColumns: S.optional(__S(0)),
          differentialPrivacy: S.optional(__S(59)),
          aggregationThresholds: S.optional(__S(63)),
          comparisonControls: S.optional(__S(64)),
          allowedResultReceivers: S.optional(__S(0)),
          allowedAdditionalAnalyses: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "AnalysisRuleCustom" });
    case 2:
      return S.suspend(() => S.Struct({ columns: S.optional(__S(0)) })).annotate({
        identifier: "QueryConstraintRequireOverlap",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ requireOverlap: __S(66) })]);
    case 4:
      return S.Array(__S(67));
    case 5:
      return S.suspend(() =>
        S.Struct({
          joinColumns: __S(0),
          queryConstraints: __S(68),
          dimensionColumns: S.optional(__S(0)),
        }),
      ).annotate({
        identifier: "AnalysisRuleIdMappingTable",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ list: __S(51) }),
        /*@__PURE__*/ S.Struct({ aggregation: __S(56) }),
        /*@__PURE__*/ S.Struct({ custom: __S(65) }),
        /*@__PURE__*/ S.Struct({ idMappingTable: __S(69) }),
      ]);
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: __S(70) })]);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowedResultReceivers: S.optional(__S(0)),
          allowedAdditionalAnalyses: S.optional(__S(0)),
        }),
      ).annotate({
        identifier: "ConfiguredTableAssociationAnalysisRuleList",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ list: __S(72) }),
        /*@__PURE__*/ S.Struct({ aggregation: __S(72) }),
        /*@__PURE__*/ S.Struct({ custom: __S(72) }),
      ]);
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: __S(73) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          joinColumns: __S(0),
          allowedJoinOperators: S.optional(__S(0)),
          listColumns: __S(0),
          additionalAnalyses: S.optional(S.String),
          allowedResultReceivers: S.optional(__S(0)),
          allowedAdditionalAnalyses: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "ConsolidatedPolicyList" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          aggregateColumns: __S(53),
          joinColumns: __S(0),
          joinRequired: S.optional(S.String),
          allowedJoinOperators: S.optional(__S(0)),
          dimensionColumns: __S(0),
          scalarFunctions: __S(0),
          outputConstraints: __S(55),
          additionalAnalyses: S.optional(S.String),
          allowedResultReceivers: S.optional(__S(0)),
          allowedAdditionalAnalyses: S.optional(__S(0)),
        }),
      ).annotate({
        identifier: "ConsolidatedPolicyAggregation",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ list: __S(75) }),
        /*@__PURE__*/ S.Struct({ aggregation: __S(76) }),
        /*@__PURE__*/ S.Struct({ custom: __S(65) }),
      ]);
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: __S(77) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          collaborationId: S.String,
          type: S.String,
          name: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          policy: __S(71),
          collaborationPolicy: S.optional(__S(74)),
          consolidatedPolicy: S.optional(__S(78)),
        }),
      ).annotate({ identifier: "AnalysisRule" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79));
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, type: S.String, code: S.String, message: S.String }),
      ).annotate({
        identifier: "BatchGetSchemaAnalysisRuleError",
      });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({
          analysisRules: __S(80),
          errors: __S(82),
        }),
      ).annotate({
        identifier: "BatchGetSchemaAnalysisRuleOutput",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          name: S.String,
          format: S.String,
          source: __S(7),
          tags: S.optional(__S(84)),
          analysisParameters: S.optional(__S(13)),
          schema: S.optional(__S(2)),
          errorMessageConfiguration: S.optional(__S(18)),
          syntheticDataParameters: S.optional(__S(23)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/analysistemplates",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAnalysisTemplateInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          description: S.optional(S.String),
          name: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          schema: __S(2),
          format: S.String,
          source: __S(7),
          sourceMetadata: S.optional(__S(11)),
          analysisParameters: S.optional(__S(13)),
          validations: S.optional(__S(17)),
          errorMessageConfiguration: S.optional(__S(18)),
          syntheticDataParameters: S.optional(__S(23)),
        }),
      ).annotate({ identifier: "AnalysisTemplate" });
    case 7:
      return S.suspend(() => S.Struct({ analysisTemplate: __S(86) })).annotate({
        identifier: "CreateAnalysisTemplateOutput",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ customMLMemberAbilities: __S(32) })).annotate({
        identifier: "MLMemberAbilities",
      });
    case 1:
      return S.suspend(() => S.Struct({ isResponsible: S.Boolean })).annotate({
        identifier: "QueryComputePaymentConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelTraining: S.optional(__S(89)),
          modelInference: S.optional(__S(89)),
          syntheticDataGeneration: S.optional(__S(89)),
        }),
      ).annotate({ identifier: "MLPaymentConfig" });
    case 3:
      return S.suspend(() => S.Struct({ isResponsible: S.Boolean })).annotate({
        identifier: "JobComputePaymentConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          queryCompute: __S(89),
          machineLearning: S.optional(__S(90)),
          jobCompute: S.optional(__S(91)),
        }),
      ).annotate({ identifier: "PaymentConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          memberAbilities: __S(32),
          mlMemberAbilities: S.optional(__S(88)),
          displayName: S.String,
          paymentConfiguration: S.optional(__S(92)),
        }),
      ).annotate({ identifier: "MemberSpecification" });
    case 6:
      return S.Array(__S(93));
    case 7:
      return S.suspend(() =>
        S.Struct({
          allowCleartext: S.Boolean,
          allowDuplicates: S.Boolean,
          allowJoinsOnColumnsWithDifferentNames: S.Boolean,
          preserveNulls: S.Boolean,
        }),
      ).annotate({ identifier: "DataEncryptionMetadata" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          members: __S(94),
          name: S.String,
          description: S.optional(S.String),
          creatorMemberAbilities: __S(32),
          creatorMLMemberAbilities: S.optional(__S(88)),
          creatorDisplayName: S.String,
          dataEncryptionMetadata: S.optional(__S(95)),
          queryLogStatus: S.String,
          jobLogStatus: S.optional(S.String),
          tags: S.optional(__S(84)),
          creatorPaymentConfiguration: S.optional(__S(92)),
          analyticsEngine: S.optional(S.String),
          autoApprovedChangeRequestTypes: S.optional(__S(32)),
          allowedResultRegions: S.optional(__S(32)),
          isMetricsEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/collaborations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateCollaborationInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          creatorAccountId: S.String,
          creatorDisplayName: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          memberStatus: S.String,
          membershipId: S.optional(S.String),
          membershipArn: S.optional(S.String),
          dataEncryptionMetadata: S.optional(__S(95)),
          queryLogStatus: S.String,
          jobLogStatus: S.optional(S.String),
          analyticsEngine: S.optional(S.String),
          autoApprovedChangeTypes: S.optional(__S(32)),
          allowedResultRegions: S.optional(__S(32)),
          isMetricsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Collaboration" });
    case 2:
      return S.suspend(() => S.Struct({ collaboration: __S(97) })).annotate({
        identifier: "CreateCollaborationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          memberAbilities: __S(32),
          mlMemberAbilities: S.optional(__S(88)),
          paymentConfiguration: S.optional(__S(92)),
          displayName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MemberChangeSpecification",
      });
    case 4:
      return S.suspend(() => S.Struct({ autoApprovedChangeTypes: S.optional(__S(32)) })).annotate({
        identifier: "CollaborationChangeSpecification",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ member: __S(99) }),
        /*@__PURE__*/ S.Struct({ collaboration: __S(100) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          specificationType: S.String,
          specification: __S(101),
        }),
      ).annotate({ identifier: "ChangeInput" });
    case 7:
      return S.Array(__S(102));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          changes: __S(103),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/collaborations/{collaborationIdentifier}/changeRequests",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCollaborationChangeRequestInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          specificationType: S.String,
          specification: __S(101),
          types: __S(32),
        }),
      ).annotate({ identifier: "Change" });
    case 2:
      return S.Array(__S(105));
    case 3:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "ApprovalStatusDetails",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(107).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          collaborationId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          isAutoApproved: S.Boolean,
          changes: __S(106),
          approvals: S.optional(__S(108)),
        }),
      ).annotate({
        identifier: "CollaborationChangeRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ collaborationChangeRequest: __S(109) })).annotate({
        identifier: "CreateCollaborationChangeRequestOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredAudienceModelArn: S.String,
          configuredAudienceModelAssociationName: S.String,
          manageResourcePolicies: S.Boolean,
          tags: S.optional(__S(84)),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfiguredAudienceModelAssociationInput",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          configuredAudienceModelArn: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          name: S.String,
          manageResourcePolicies: S.Boolean,
          description: S.optional(S.String),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ConfiguredAudienceModelAssociation",
      });
    case 1:
      return S.suspend(() => S.Struct({ configuredAudienceModelAssociation: __S(112) })).annotate({
        identifier: "CreateConfiguredAudienceModelAssociationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(S.String),
          tableName: S.String,
          databaseName: S.String,
        }),
      ).annotate({ identifier: "GlueTableReference" });
    case 3:
      return S.suspend(() => S.Struct({ columnName: S.String, columnType: S.String })).annotate({
        identifier: "SnowflakeTableSchemaV1",
      });
    case 4:
      return S.Array(__S(115));
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: __S(116) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          secretArn: S.String,
          accountIdentifier: S.String,
          databaseName: S.String,
          tableName: S.String,
          schemaName: S.String,
          tableSchema: __S(117),
        }),
      ).annotate({ identifier: "SnowflakeTableReference" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(S.String),
          workGroup: S.String,
          outputLocation: S.optional(S.String),
          databaseName: S.String,
          tableName: S.String,
          catalogName: S.optional(S.String),
        }),
      ).annotate({ identifier: "AthenaTableReference" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ glue: __S(114) }),
        /*@__PURE__*/ S.Struct({ snowflake: __S(118) }),
        /*@__PURE__*/ S.Struct({ athena: __S(119) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tableReference: __S(120),
          allowedColumns: __S(0),
          analysisMethod: S.String,
          selectedAnalysisMethods: S.optional(__S(32)),
          tags: S.optional(__S(84)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/configuredTables" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateConfiguredTableInput",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          tableReference: __S(120),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          analysisRuleTypes: __S(122),
          analysisMethod: S.String,
          allowedColumns: __S(0),
          selectedAnalysisMethods: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "ConfiguredTable" });
    case 4:
      return S.suspend(() => S.Struct({ configuredTable: __S(123) })).annotate({
        identifier: "CreateConfiguredTableOutput",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ list: __S(51) }),
        /*@__PURE__*/ S.Struct({ aggregation: __S(56) }),
        /*@__PURE__*/ S.Struct({ custom: __S(65) }),
      ]);
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: __S(125) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
          analysisRuleType: S.String,
          analysisRulePolicy: __S(126),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/configuredTables/{configuredTableIdentifier}/analysisRule",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfiguredTableAnalysisRuleInput",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          configuredTableId: S.String,
          configuredTableArn: S.String,
          policy: __S(126),
          type: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ConfiguredTableAnalysisRule",
      });
    case 1:
      return S.suspend(() => S.Struct({ analysisRule: __S(128) })).annotate({
        identifier: "CreateConfiguredTableAnalysisRuleOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredTableIdentifier: S.String,
          roleArn: S.String,
          tags: S.optional(__S(84)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfiguredTableAssociationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceId: S.optional(S.String),
          resourceType: S.String,
          resourceName: S.String,
          ownerAccountId: S.String,
          resourceStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChildResource" });
    case 4:
      return S.Array(__S(131));
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          id: S.String,
          configuredTableId: S.String,
          configuredTableArn: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          roleArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          analysisRuleTypes: S.optional(__S(122)),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          childResources: S.optional(__S(132)),
        }),
      ).annotate({
        identifier: "ConfiguredTableAssociation",
      });
    case 6:
      return S.suspend(() => S.Struct({ configuredTableAssociation: __S(133) })).annotate({
        identifier: "CreateConfiguredTableAssociationOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredTableAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredTableAssociationIdentifier"),
          ),
          analysisRuleType: S.String,
          analysisRulePolicy: __S(74),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfiguredTableAssociationAnalysisRuleInput",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String,
          configuredTableAssociationId: S.String,
          configuredTableAssociationArn: S.String,
          policy: __S(74),
          type: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ConfiguredTableAssociationAnalysisRule",
      });
    case 1:
      return S.suspend(() => S.Struct({ analysisRule: __S(136) })).annotate({
        identifier: "CreateConfiguredTableAssociationAnalysisRuleOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ inputReferenceArn: S.String, manageResourcePolicies: S.Boolean }),
      ).annotate({
        identifier: "IdMappingTableInputReferenceConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          name: S.String,
          description: S.optional(S.String),
          inputReferenceConfig: __S(138),
          tags: S.optional(__S(84)),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memberships/{membershipIdentifier}/idmappingtables" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateIdMappingTableInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ idMappingTableInputSource: __S(38) })).annotate({
        identifier: "IdMappingTableInputReferenceProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          inputReferenceConfig: __S(138),
          membershipId: S.String,
          membershipArn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          description: S.optional(S.String),
          name: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          inputReferenceProperties: __S(140),
          kmsKeyArn: S.optional(S.String),
          childResources: S.optional(__S(132)),
        }),
      ).annotate({ identifier: "IdMappingTable" });
    case 6:
      return S.suspend(() => S.Struct({ idMappingTable: __S(141) })).annotate({
        identifier: "CreateIdMappingTableOutput",
      });
    case 7:
      return S.suspend(() => S.Struct({ allowUseAsDimensionColumn: S.Boolean })).annotate({
        identifier: "IdMappingConfig",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          inputReferenceConfig: __S(138),
          tags: S.optional(__S(84)),
          name: S.String,
          description: S.optional(S.String),
          idMappingConfig: S.optional(__S(143)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/idnamespaceassociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateIdNamespaceAssociationInput",
      });
    case 1:
      return S.Array(S.Any);
    case 2:
      return S.suspend(() =>
        S.Struct({
          idNamespaceType: S.String,
          idMappingWorkflowsSupported: __S(145),
        }),
      ).annotate({
        identifier: "IdNamespaceAssociationInputReferenceProperties",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          inputReferenceConfig: __S(138),
          inputReferenceProperties: __S(146),
          idMappingConfig: S.optional(__S(143)),
        }),
      ).annotate({ identifier: "IdNamespaceAssociation" });
    case 4:
      return S.suspend(() => S.Struct({ idNamespaceAssociation: __S(147) })).annotate({
        identifier: "CreateIdNamespaceAssociationOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ queryString: S.optional(S.String), analysisTemplateArn: S.optional(S.String) }),
      ).annotate({
        identifier: "PopulationAnalysisSqlParameters",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ sqlParameters: __S(149) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          name: S.String,
          description: S.optional(S.String),
          populationAnalysisConfiguration: __S(150),
          kmsKeyArn: S.optional(S.String),
          retentionInDays: S.optional(S.Number),
          tags: S.optional(__S(84)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/intermediateTables",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateIntermediateTableInput",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          type: S.String,
          parentType: S.String,
          creatorAccountId: S.String,
        }),
      ).annotate({
        identifier: "IntermediateTableDependency",
      });
    case 1:
      return S.Array(__S(152));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          id: S.String,
          type: S.String,
          value: S.String,
          sourceAccountId: S.String,
        }),
      ).annotate({
        identifier: "InheritedAdditionalAnalysesSource",
      });
    case 4:
      return S.Array(__S(155));
    case 5:
      return S.suspend(() => S.Struct({ value: S.String, sources: __S(156) })).annotate({
        identifier: "InheritedAdditionalAnalyses",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          id: S.String,
          type: S.String,
          value: __S(0),
          sourceAccountId: S.String,
        }),
      ).annotate({
        identifier: "InheritedAllowedAdditionalAnalysesSource",
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
          value: __S(0),
          sources: __S(159),
        }),
      ).annotate({
        identifier: "InheritedAllowedAdditionalAnalyses",
      });
    case 1:
      return S.suspend(() => S.Struct({ value: __S(0), sources: __S(159) })).annotate({
        identifier: "InheritedAllowedResultReceivers",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          column: S.String,
          sourceColumn: S.String,
          sourceName: S.String,
          sourceId: S.String,
          sourceType: S.String,
          sourceAccountId: S.String,
        }),
      ).annotate({ identifier: "ColumnLineageEntry" });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() => S.Struct({ value: __S(0), columnLineage: __S(163) })).annotate({
        identifier: "InheritedDisallowedOutputColumns",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          additionalAnalyses: S.optional(__S(157)),
          allowedAdditionalAnalyses: S.optional(__S(160)),
          allowedResultReceivers: S.optional(__S(161)),
          disallowedOutputColumns: S.optional(__S(164)),
        }),
      ).annotate({
        identifier: "IntermediateTableInheritedConstraints",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          versionId: S.String,
          analysisId: S.String,
          analysisType: S.String,
          kmsKeyArn: S.optional(S.String),
          parameters: S.optional(__S(154)),
          inheritedConstraints: __S(165),
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "IntermediateTableActiveVersion",
      });
    case 7:
      return S.suspend(() => S.Struct({ columns: __S(31) })).annotate({
        identifier: "IntermediateTableSchema",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          membershipArn: S.String,
          membershipId: S.String,
          collaborationArn: S.String,
          collaborationId: S.String,
          childResources: S.optional(__S(132)),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          statusReason: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          populationAnalysisConfiguration: __S(150),
          retentionInDays: S.optional(S.Number),
          tableDependencies: S.optional(__S(153)),
          intermediateTableVersion: S.optional(__S(166)),
          analysisRuleTypes: S.optional(__S(122)),
          schema: S.optional(__S(167)),
        }),
      ).annotate({ identifier: "IntermediateTable" });
    case 1:
      return S.suspend(() => S.Struct({ intermediateTable: __S(168) })).annotate({
        identifier: "CreateIntermediateTableOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          allowedAnalyses: S.optional(__S(0)),
          additionalAnalyses: S.optional(S.String),
          allowedAdditionalAnalyses: S.optional(__S(0)),
          allowedAnalysisProviders: S.optional(__S(0)),
          allowedResultReceivers: S.optional(__S(0)),
          differentialPrivacy: S.optional(__S(59)),
          disallowedOutputColumns: S.optional(__S(0)),
          aggregationThresholds: S.optional(__S(63)),
          comparisonControls: S.optional(__S(64)),
        }),
      ).annotate({
        identifier: "IntermediateTableAnalysisRuleCustom",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ custom: __S(170) })]);
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: __S(171) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          analysisRuleType: S.String,
          analysisRulePolicy: __S(172),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}/analysisRule",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateIntermediateTableAnalysisRuleInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          intermediateTableIdentifier: S.String,
          intermediateTableArn: S.String,
          analysisRulePolicy: __S(172),
          analysisRuleType: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "IntermediateTableAnalysisRule",
      });
    case 7:
      return S.suspend(() => S.Struct({ analysisRule: __S(174) })).annotate({
        identifier: "CreateIntermediateTableAnalysisRuleOutput",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resultFormat: S.String,
          bucket: S.String,
          keyPrefix: S.optional(S.String),
          singleFileOutput: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ProtectedQueryS3OutputConfiguration",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: __S(176) })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          outputConfiguration: __S(177),
          roleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MembershipProtectedQueryResultConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ bucket: S.String, keyPrefix: S.optional(S.String) }),
      ).annotate({
        identifier: "ProtectedJobS3OutputConfigurationInput",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: __S(179) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          outputConfiguration: __S(180),
          roleArn: S.String,
        }),
      ).annotate({
        identifier: "MembershipProtectedJobResultConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelTraining: S.optional(__S(89)),
          modelInference: S.optional(__S(89)),
          syntheticDataGeneration: S.optional(__S(89)),
        }),
      ).annotate({
        identifier: "MembershipMLPaymentConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          queryCompute: __S(89),
          machineLearning: S.optional(__S(182)),
          jobCompute: S.optional(__S(89)),
        }),
      ).annotate({
        identifier: "MembershipPaymentConfiguration",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String,
          queryLogStatus: S.String,
          jobLogStatus: S.optional(S.String),
          tags: S.optional(__S(84)),
          defaultResultConfiguration: S.optional(__S(178)),
          defaultJobResultConfiguration: S.optional(__S(181)),
          paymentConfiguration: S.optional(__S(183)),
          isMetricsEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/memberships" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateMembershipInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          collaborationArn: S.String,
          collaborationId: S.String,
          collaborationCreatorAccountId: S.String,
          collaborationCreatorDisplayName: S.String,
          collaborationName: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          memberAbilities: __S(32),
          mlMemberAbilities: S.optional(__S(88)),
          queryLogStatus: S.String,
          jobLogStatus: S.optional(S.String),
          defaultResultConfiguration: S.optional(__S(178)),
          defaultJobResultConfiguration: S.optional(__S(181)),
          paymentConfiguration: __S(183),
          isMetricsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Membership" });
    case 2:
      return S.suspend(() => S.Struct({ membership: __S(185) })).annotate({
        identifier: "CreateMembershipOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ epsilon: S.Number, usersNoisePerQuery: S.Number }),
      ).annotate({
        identifier: "DifferentialPrivacyTemplateParametersInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          budget: S.Number,
          autoRefresh: S.optional(S.String),
        }),
      ).annotate({ identifier: "BudgetParameter" });
    case 5:
      return S.Array(__S(188));
    case 6:
      return S.suspend(() =>
        S.Struct({ budgetParameters: __S(189), resourceArn: S.String }),
      ).annotate({
        identifier: "AccessBudgetsPrivacyTemplateParametersInput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ differentialPrivacy: __S(187) }),
        /*@__PURE__*/ S.Struct({ accessBudget: __S(190) }),
      ]);
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          autoRefresh: S.optional(S.String),
          privacyBudgetType: S.String,
          parameters: __S(191),
          tags: S.optional(__S(84)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/privacybudgettemplates",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePrivacyBudgetTemplateInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          privacyBudgetType: S.String,
          autoRefresh: S.String,
          parameters: __S(191),
        }),
      ).annotate({ identifier: "PrivacyBudgetTemplate" });
    case 2:
      return S.suspend(() => S.Struct({ privacyBudgetTemplate: __S(193) })).annotate({
        identifier: "CreatePrivacyBudgetTemplateOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          analysisTemplateIdentifier: S.String.pipe(T.HttpLabel("analysisTemplateIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAnalysisTemplateInput",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAnalysisTemplateOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/collaborations/{collaborationIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteCollaborationInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredAudienceModelAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredAudienceModelAssociationInput",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteConfiguredAudienceModelAssociationOutput",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/configuredTables/{configuredTableIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredTableInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredTableAnalysisRuleInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configuredTableAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredTableAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredTableAssociationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredTableAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredTableAssociationIdentifier"),
          ),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfiguredTableAssociationAnalysisRuleInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          idMappingTableIdentifier: S.String.pipe(T.HttpLabel("idMappingTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIdMappingTableInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          idNamespaceAssociationIdentifier: S.String.pipe(
            T.HttpLabel("idNamespaceAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIdNamespaceAssociationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIntermediateTableInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIntermediateTableAnalysisRuleInput",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          accountId: S.String.pipe(T.HttpLabel("accountId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/collaborations/{collaborationIdentifier}/member/{accountId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteMemberInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/memberships/{membershipIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteMembershipInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          privacyBudgetTemplateIdentifier: S.String.pipe(
            T.HttpLabel("privacyBudgetTemplateIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePrivacyBudgetTemplateInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          intermediateTableName: S.String,
          includeDescendants: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/disallowIntermediateTable",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisallowIntermediateTableInput",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DisallowIntermediateTableOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          analysisLogExportIdentifier: S.String.pipe(T.HttpLabel("analysisLogExportIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/analysislogexports/{analysisLogExportIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAnalysisLogExportInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ s3: __S(179) })).annotate({
        identifier: "AnalysisLogExportOutputConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ outputConfiguration: __S(214) })).annotate({
        identifier: "AnalysisLogExportResultConfiguration",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ code: S.String, message: S.String })).annotate({
        identifier: "AnalysisLogExportError",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          analysisLogExportId: S.String,
          analysisId: S.String,
          analysisType: S.String,
          membershipId: S.String,
          status: S.String,
          resultConfiguration: __S(215),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          error: S.optional(__S(216)),
        }),
      ).annotate({ identifier: "AnalysisLogExport" });
    case 2:
      return S.suspend(() => S.Struct({ analysisLogExport: __S(217) })).annotate({
        identifier: "GetAnalysisLogExportOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          analysisTemplateIdentifier: S.String.pipe(T.HttpLabel("analysisTemplateIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAnalysisTemplateInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/collaborations/{collaborationIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCollaborationInput" });
    case 5:
      return S.suspend(() => S.Struct({ collaboration: __S(97) })).annotate({
        identifier: "GetCollaborationOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          analysisTemplateArn: S.String.pipe(T.HttpLabel("analysisTemplateArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/analysistemplates/{analysisTemplateArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCollaborationAnalysisTemplateInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ collaborationAnalysisTemplate: __S(24) })).annotate({
        identifier: "GetCollaborationAnalysisTemplateOutput",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          changeRequestIdentifier: S.String.pipe(T.HttpLabel("changeRequestIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/changeRequests/{changeRequestIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCollaborationChangeRequestInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          configuredAudienceModelAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredAudienceModelAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCollaborationConfiguredAudienceModelAssociationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          configuredAudienceModelArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          creatorAccountId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CollaborationConfiguredAudienceModelAssociation",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          collaborationConfiguredAudienceModelAssociation: __S(226),
        }),
      ).annotate({
        identifier: "GetCollaborationConfiguredAudienceModelAssociationOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          idNamespaceAssociationIdentifier: S.String.pipe(
            T.HttpLabel("idNamespaceAssociationIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCollaborationIdNamespaceAssociationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          creatorAccountId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          inputReferenceConfig: __S(138),
          inputReferenceProperties: __S(146),
          idMappingConfig: S.optional(__S(143)),
        }),
      ).annotate({
        identifier: "CollaborationIdNamespaceAssociation",
      });
    case 6:
      return S.suspend(() => S.Struct({ collaborationIdNamespaceAssociation: __S(229) })).annotate({
        identifier: "GetCollaborationIdNamespaceAssociationOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          privacyBudgetTemplateIdentifier: S.String.pipe(
            T.HttpLabel("privacyBudgetTemplateIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCollaborationPrivacyBudgetTemplateInput",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          creatorAccountId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          privacyBudgetType: S.String,
          autoRefresh: S.String,
          parameters: __S(191),
        }),
      ).annotate({
        identifier: "CollaborationPrivacyBudgetTemplate",
      });
    case 1:
      return S.suspend(() => S.Struct({ collaborationPrivacyBudgetTemplate: __S(232) })).annotate({
        identifier: "GetCollaborationPrivacyBudgetTemplateOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredAudienceModelAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfiguredAudienceModelAssociationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configuredTables/{configuredTableIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConfiguredTableInput" });
    case 4:
      return S.suspend(() => S.Struct({ configuredTable: __S(123) })).annotate({
        identifier: "GetConfiguredTableOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfiguredTableAnalysisRuleInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          configuredTableAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredTableAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfiguredTableAssociationInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredTableAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredTableAssociationIdentifier"),
          ),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfiguredTableAssociationAnalysisRuleInput",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          idMappingTableIdentifier: S.String.pipe(T.HttpLabel("idMappingTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIdMappingTableInput" });
    case 1:
      return S.suspend(() => S.Struct({ idMappingTable: __S(141) })).annotate({
        identifier: "GetIdMappingTableOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          idNamespaceAssociationIdentifier: S.String.pipe(
            T.HttpLabel("idNamespaceAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIdNamespaceAssociationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIntermediateTableInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIntermediateTableAnalysisRuleInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMembershipInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          privacyBudgetTemplateIdentifier: S.String.pipe(
            T.HttpLabel("privacyBudgetTemplateIdentifier"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPrivacyBudgetTemplateInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          protectedJobIdentifier: S.String.pipe(T.HttpLabel("protectedJobIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/protectedJobs/{protectedJobIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProtectedJobInput" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ analysisTemplateArn: S.String, parameters: S.optional(__S(154)) }),
      ).annotate({ identifier: "ProtectedJobParameters" });
    case 1:
      return S.suspend(() => S.Struct({ accountId: S.String })).annotate({
        identifier: "ProtectedJobMemberOutputConfigurationOutput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(179) }),
        /*@__PURE__*/ S.Struct({ member: __S(249) }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ outputConfiguration: __S(250) })).annotate({
        identifier: "ProtectedJobResultConfigurationOutput",
      });
    case 4:
      return S.suspend(() => S.Struct({ units: S.Number })).annotate({
        identifier: "BilledJobResourceUtilization",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          totalDurationInMillis: S.optional(S.Number),
          billedResourceUtilization: S.optional(__S(252)),
        }),
      ).annotate({ identifier: "ProtectedJobStatistics" });
    case 6:
      return S.suspend(() => S.Struct({ location: S.String })).annotate({
        identifier: "ProtectedJobS3Output",
      });
    case 7:
      return S.Array(__S(249));
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(254) }),
        /*@__PURE__*/ S.Struct({ memberList: __S(255) }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ output: __S(256) })).annotate({
        identifier: "ProtectedJobResult",
      });
    case 2:
      return S.suspend(() => S.Struct({ message: S.String, code: S.String })).annotate({
        identifier: "ProtectedJobError",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ spark: __S(154) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          number: S.Number,
          properties: S.optional(__S(259)),
        }),
      ).annotate({
        identifier: "ProtectedJobWorkerComputeConfiguration",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ worker: __S(260) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          jobParameters: S.optional(__S(248)),
          status: S.String,
          resultConfiguration: S.optional(__S(251)),
          statistics: S.optional(__S(253)),
          result: S.optional(__S(257)),
          error: S.optional(__S(258)),
          computeConfiguration: S.optional(__S(261)),
          jobComputePayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProtectedJob" });
    case 7:
      return S.suspend(() => S.Struct({ protectedJob: __S(262) })).annotate({
        identifier: "GetProtectedJobOutput",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          protectedQueryIdentifier: S.String.pipe(T.HttpLabel("protectedQueryIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProtectedQueryInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          queryString: S.optional(S.String),
          analysisTemplateArn: S.optional(S.String),
          parameters: S.optional(__S(154)),
        }),
      ).annotate({
        identifier: "ProtectedQuerySQLParameters",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(176) }),
        /*@__PURE__*/ S.Struct({ member: __S(249) }),
      ]);
    case 3:
      return S.Array(__S(266));
    case 4:
      return S.suspend(() => S.Struct({ locations: __S(267) })).annotate({
        identifier: "ProtectedQueryDistributeOutputConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ id: S.String, arn: S.String, name: S.String })).annotate({
        identifier: "IntermediateTableOutputConfiguration",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(176) }),
        /*@__PURE__*/ S.Struct({ member: __S(249) }),
        /*@__PURE__*/ S.Struct({ distribute: __S(268) }),
        /*@__PURE__*/ S.Struct({ intermediateTable: __S(269) }),
      ]);
    case 7:
      return S.suspend(() => S.Struct({ outputConfiguration: __S(270) })).annotate({
        identifier: "ProtectedQueryResultConfiguration",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(249));
    case 1:
      return S.suspend(() =>
        S.Struct({
          s3: S.optional(__S(254)),
          memberList: S.optional(__S(272)),
        }),
      ).annotate({
        identifier: "ProtectedQueryDistributeOutput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(254) }),
        /*@__PURE__*/ S.Struct({ memberList: __S(272) }),
        /*@__PURE__*/ S.Struct({ distribute: __S(273) }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ output: __S(274) })).annotate({
        identifier: "ProtectedQueryResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          aggregationType: S.String,
          aggregationExpression: S.String,
          userContributionLimit: S.Number,
          minColumnValue: S.optional(S.Number),
          maxColumnValue: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DifferentialPrivacySensitivityParameters",
      });
    case 5:
      return S.Array(__S(276));
    case 6:
      return S.suspend(() => S.Struct({ sensitivityParameters: __S(277) })).annotate({
        identifier: "DifferentialPrivacyParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          number: S.optional(S.Number),
          properties: S.optional(__S(259)),
        }),
      ).annotate({
        identifier: "WorkerComputeConfiguration",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ worker: __S(279) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          sqlParameters: S.optional(__S(265)),
          status: S.String,
          resultConfiguration: S.optional(__S(271)),
          statistics: S.optional(__S(253)),
          result: S.optional(__S(275)),
          error: S.optional(__S(258)),
          differentialPrivacy: S.optional(__S(278)),
          computeConfiguration: S.optional(__S(280)),
          queryComputePayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProtectedQuery" });
    case 2:
      return S.suspend(() => S.Struct({ protectedQuery: __S(281) })).annotate({
        identifier: "GetProtectedQueryOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/schemas/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSchemaInput" });
    case 4:
      return S.suspend(() => S.Struct({ schema: __S(43) })).annotate({
        identifier: "GetSchemaOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          name: S.String.pipe(T.HttpLabel("name")),
          type: S.String.pipe(T.HttpLabel("type")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/schemas/{name}/analysisRule/{type}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSchemaAnalysisRuleInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ analysisRule: __S(79) })).annotate({
        identifier: "GetSchemaAnalysisRuleOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          analysisIdentifier: S.optional(S.String).pipe(T.HttpQuery("analysisIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/analysislogexports",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnalysisLogExportsInput",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          analysisLogExportId: S.String,
          analysisId: S.String,
          analysisType: S.String,
          status: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "AnalysisLogExportSummary" });
    case 1:
      return S.Array(__S(288));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          analysisLogExports: __S(289),
        }),
      ).annotate({
        identifier: "ListAnalysisLogExportsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}/analysistemplates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnalysisTemplatesInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          id: S.String,
          name: S.String,
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          membershipArn: S.String,
          membershipId: S.String,
          collaborationArn: S.String,
          collaborationId: S.String,
          description: S.optional(S.String),
          isSyntheticData: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AnalysisTemplateSummary" });
    case 5:
      return S.Array(__S(292));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          analysisTemplateSummaries: __S(293),
        }),
      ).annotate({
        identifier: "ListAnalysisTemplatesOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/analysistemplates",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationAnalysisTemplatesInput",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          id: S.String,
          name: S.String,
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          collaborationArn: S.String,
          collaborationId: S.String,
          creatorAccountId: S.String,
          description: S.optional(S.String),
          isSyntheticData: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "CollaborationAnalysisTemplateSummary",
      });
    case 1:
      return S.Array(__S(296));
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationAnalysisTemplateSummaries: __S(297),
        }),
      ).annotate({
        identifier: "ListCollaborationAnalysisTemplatesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/changeRequests",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationChangeRequestsInput",
      });
    case 4:
      return S.Array(__S(109));
    case 5:
      return S.suspend(() =>
        S.Struct({
          collaborationChangeRequestSummaries: __S(300),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCollaborationChangeRequestsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationConfiguredAudienceModelAssociationsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          id: S.String,
          name: S.String,
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          collaborationArn: S.String,
          collaborationId: S.String,
          creatorAccountId: S.String,
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CollaborationConfiguredAudienceModelAssociationSummary",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(303));
    case 1:
      return S.suspend(() =>
        S.Struct({
          collaborationConfiguredAudienceModelAssociationSummaries: __S(304),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCollaborationConfiguredAudienceModelAssociationsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/idnamespaceassociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationIdNamespaceAssociationsInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ idNamespaceType: S.String })).annotate({
        identifier: "IdNamespaceAssociationInputReferencePropertiesSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          id: S.String,
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          collaborationArn: S.String,
          collaborationId: S.String,
          creatorAccountId: S.String,
          inputReferenceConfig: __S(138),
          name: S.String,
          description: S.optional(S.String),
          inputReferenceProperties: __S(307),
        }),
      ).annotate({
        identifier: "CollaborationIdNamespaceAssociationSummary",
      });
    case 5:
      return S.Array(__S(308));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationIdNamespaceAssociationSummaries: __S(309),
        }),
      ).annotate({
        identifier: "ListCollaborationIdNamespaceAssociationsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          privacyBudgetType: S.String.pipe(T.HttpQuery("privacyBudgetType")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          accessBudgetResourceArn: S.optional(S.String).pipe(
            T.HttpQuery("accessBudgetResourceArn"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/privacybudgets",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationPrivacyBudgetsInput",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          maxCount: S.Number,
          remainingCount: S.Number,
        }),
      ).annotate({
        identifier: "DifferentialPrivacyPrivacyBudgetAggregation",
      });
    case 1:
      return S.Array(__S(312));
    case 2:
      return S.suspend(() =>
        S.Struct({
          aggregations: __S(313),
          epsilon: S.Number,
        }),
      ).annotate({
        identifier: "DifferentialPrivacyPrivacyBudget",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          remainingBudget: S.Number,
          budget: S.Number,
          budgetType: S.String,
          autoRefresh: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccessBudgetDetails" });
    case 4:
      return S.Array(__S(315));
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          details: __S(316),
          aggregateRemainingBudget: S.Number,
        }),
      ).annotate({ identifier: "AccessBudget" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ differentialPrivacy: __S(314) }),
        /*@__PURE__*/ S.Struct({ accessBudget: __S(317) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          privacyBudgetTemplateId: S.String,
          privacyBudgetTemplateArn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          creatorAccountId: S.String,
          type: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          budget: __S(318),
        }),
      ).annotate({
        identifier: "CollaborationPrivacyBudgetSummary",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(319));
    case 1:
      return S.suspend(() =>
        S.Struct({
          collaborationPrivacyBudgetSummaries: __S(320),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCollaborationPrivacyBudgetsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/collaborations/{collaborationIdentifier}/privacybudgettemplates",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCollaborationPrivacyBudgetTemplatesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          creatorAccountId: S.String,
          privacyBudgetType: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CollaborationPrivacyBudgetTemplateSummary",
      });
    case 4:
      return S.Array(__S(323));
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationPrivacyBudgetTemplateSummaries: __S(324),
        }),
      ).annotate({
        identifier: "ListCollaborationPrivacyBudgetTemplatesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          memberStatus: S.optional(S.String).pipe(T.HttpQuery("memberStatus")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/collaborations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCollaborationsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          creatorAccountId: S.String,
          creatorDisplayName: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          memberStatus: S.String,
          membershipId: S.optional(S.String),
          membershipArn: S.optional(S.String),
          analyticsEngine: S.optional(S.String),
        }),
      ).annotate({ identifier: "CollaborationSummary" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(327));
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), collaborationList: __S(328) }),
      ).annotate({ identifier: "ListCollaborationsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfiguredAudienceModelAssociationsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipId: S.String,
          membershipArn: S.String,
          collaborationArn: S.String,
          collaborationId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          id: S.String,
          arn: S.String,
          name: S.String,
          configuredAudienceModelArn: S.String,
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfiguredAudienceModelAssociationSummary",
      });
    case 4:
      return S.Array(__S(331));
    case 5:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelAssociationSummaries: __S(332),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfiguredAudienceModelAssociationsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfiguredTableAssociationsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          configuredTableId: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          name: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          id: S.String,
          arn: S.String,
          analysisRuleTypes: S.optional(__S(122)),
        }),
      ).annotate({
        identifier: "ConfiguredTableAssociationSummary",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(335));
    case 1:
      return S.suspend(() =>
        S.Struct({
          configuredTableAssociationSummaries: __S(336),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfiguredTableAssociationsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/configuredTables" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListConfiguredTablesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          analysisRuleTypes: __S(122),
          analysisMethod: S.String,
          selectedAnalysisMethods: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "ConfiguredTableSummary" });
    case 4:
      return S.Array(__S(339));
    case 5:
      return S.suspend(() =>
        S.Struct({
          configuredTableSummaries: __S(340),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfiguredTablesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}/idmappingtables" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIdMappingTablesInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          collaborationArn: S.String,
          collaborationId: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          id: S.String,
          arn: S.String,
          description: S.optional(S.String),
          inputReferenceConfig: __S(138),
          name: S.String,
        }),
      ).annotate({ identifier: "IdMappingTableSummary" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(343));
    case 1:
      return S.suspend(() =>
        S.Struct({
          idMappingTableSummaries: __S(344),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIdMappingTablesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/idnamespaceassociations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIdNamespaceAssociationsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipId: S.String,
          membershipArn: S.String,
          collaborationArn: S.String,
          collaborationId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          id: S.String,
          arn: S.String,
          inputReferenceConfig: __S(138),
          name: S.String,
          description: S.optional(S.String),
          inputReferenceProperties: __S(307),
        }),
      ).annotate({
        identifier: "IdNamespaceAssociationSummary",
      });
    case 4:
      return S.Array(__S(347));
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          idNamespaceAssociationSummaries: __S(348),
        }),
      ).annotate({
        identifier: "ListIdNamespaceAssociationsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/intermediateTables",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIntermediateTablesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          membershipArn: S.String,
          membershipId: S.String,
          collaborationArn: S.String,
          collaborationId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          retentionInDays: S.optional(S.Number),
          analysisRuleTypes: S.optional(__S(122)),
        }),
      ).annotate({ identifier: "IntermediateTableSummary" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(351));
    case 1:
      return S.suspend(() =>
        S.Struct({
          intermediateTableSummaries: __S(352),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIntermediateTablesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}/versions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIntermediateTableVersionsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          versionId: S.String,
          tableId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          analysisId: S.String,
          status: S.String,
          analysisType: S.String,
          kmsKeyArn: S.optional(S.String),
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "IntermediateTableVersionSummary",
      });
    case 4:
      return S.Array(__S(355));
    case 5:
      return S.suspend(() =>
        S.Struct({
          intermediateTableVersionSummaries: __S(356),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIntermediateTableVersionsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/collaborations/{collaborationIdentifier}/members" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListMembersInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          status: S.String,
          displayName: S.String,
          abilities: __S(32),
          mlAbilities: S.optional(__S(88)),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          membershipId: S.optional(S.String),
          membershipArn: S.optional(S.String),
          paymentConfiguration: __S(92),
        }),
      ).annotate({ identifier: "MemberSummary" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(359));
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), memberSummaries: __S(360) }),
      ).annotate({ identifier: "ListMembersOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/memberships" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListMembershipsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          collaborationArn: S.String,
          collaborationId: S.String,
          collaborationCreatorAccountId: S.String,
          collaborationCreatorDisplayName: S.String,
          collaborationName: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          memberAbilities: __S(32),
          mlMemberAbilities: S.optional(__S(88)),
          paymentConfiguration: __S(183),
        }),
      ).annotate({ identifier: "MembershipSummary" });
    case 4:
      return S.Array(__S(363));
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), membershipSummaries: __S(364) }),
      ).annotate({ identifier: "ListMembershipsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          privacyBudgetType: S.String.pipe(T.HttpQuery("privacyBudgetType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          accessBudgetResourceArn: S.optional(S.String).pipe(
            T.HttpQuery("accessBudgetResourceArn"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}/privacybudgets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPrivacyBudgetsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          privacyBudgetTemplateId: S.String,
          privacyBudgetTemplateArn: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          type: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          budget: __S(318),
        }),
      ).annotate({ identifier: "PrivacyBudgetSummary" });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(367));
    case 1:
      return S.suspend(() =>
        S.Struct({
          privacyBudgetSummaries: __S(368),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListPrivacyBudgetsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memberships/{membershipIdentifier}/privacybudgettemplates",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPrivacyBudgetTemplatesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          privacyBudgetType: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "PrivacyBudgetTemplateSummary",
      });
    case 4:
      return S.Array(__S(371));
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          privacyBudgetTemplateSummaries: __S(372),
        }),
      ).annotate({
        identifier: "ListPrivacyBudgetTemplatesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}/protectedJobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListProtectedJobsInput" });
    case 7:
      return S.suspend(() => S.Struct({ receiverAccountIds: S.optional(__S(0)) })).annotate({
        identifier: "ProtectedJobDirectAnalysisConfigurationDetails",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          directAnalysisConfigurationDetails: __S(375),
        }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          analysisType: S.String,
          configurationDetails: S.optional(__S(376)),
        }),
      ).annotate({
        identifier: "ProtectedJobReceiverConfiguration",
      });
    case 2:
      return S.Array(__S(377));
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          receiverConfigurations: __S(378),
          jobComputePayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProtectedJobSummary" });
    case 4:
      return S.Array(__S(379));
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), protectedJobs: __S(380) }),
      ).annotate({ identifier: "ListProtectedJobsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memberships/{membershipIdentifier}/protectedQueries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProtectedQueriesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          analysisType: S.String,
          configurationDetails: S.optional(__S(376)),
        }),
      ).annotate({ identifier: "ReceiverConfiguration" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(383));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          receiverConfigurations: __S(384),
          queryComputePayerAccountId: S.optional(S.String),
          intermediateTableConfiguration: S.optional(__S(269)),
        }),
      ).annotate({ identifier: "ProtectedQuerySummary" });
    case 2:
      return S.Array(__S(385));
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), protectedQueries: __S(386) }),
      ).annotate({
        identifier: "ListProtectedQueriesOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          schemaType: S.optional(S.String).pipe(T.HttpQuery("schemaType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/collaborations/{collaborationIdentifier}/schemas" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSchemasInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          creatorAccountId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          collaborationId: S.String,
          collaborationArn: S.String,
          analysisRuleTypes: __S(32),
          analysisMethod: S.optional(S.String),
          resourceArn: S.optional(S.String),
          selectedAnalysisMethods: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "SchemaSummary" });
    case 6:
      return S.Array(__S(389));
    case 7:
      return S.suspend(() =>
        S.Struct({ schemaSummaries: __S(390), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSchemasOutput" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
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
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 1:
      return S.suspend(() => S.Struct({ tags: __S(84) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          idMappingTableIdentifier: S.String.pipe(T.HttpLabel("idMappingTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          jobType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}/populate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PopulateIdMappingTableInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ idMappingJobId: S.String })).annotate({
        identifier: "PopulateIdMappingTableOutput",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ queryComputeConfiguration: __S(279) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          parameters: S.optional(__S(154)),
          computeConfiguration: S.optional(__S(396)),
          analysisPayerAccountId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}/populate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PopulateIntermediateTableInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          analysisId: S.String,
          analysisType: S.String,
          versionId: S.String,
        }),
      ).annotate({
        identifier: "PopulateIntermediateTableOutput",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ differentialPrivacy: __S(187) })]);
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          parameters: __S(399),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/previewprivacyimpact",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PreviewPrivacyImpactInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ type: S.String, maxCount: S.Number })).annotate({
        identifier: "DifferentialPrivacyPreviewAggregation",
      });
    case 2:
      return S.Array(__S(401));
    case 3:
      return S.suspend(() => S.Struct({ aggregations: __S(402) })).annotate({
        identifier: "DifferentialPrivacyPrivacyImpact",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ differentialPrivacy: __S(403) })]);
    case 5:
      return S.suspend(() => S.Struct({ privacyImpact: __S(404) })).annotate({
        identifier: "PreviewPrivacyImpactOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          analysisId: S.String,
          analysisType: S.String,
          resultConfiguration: __S(215),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memberships/{membershipIdentifier}/analysislogexports",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartAnalysisLogExportInput",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ member: __S(249) })]);
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ outputConfiguration: __S(407) })).annotate({
        identifier: "ProtectedJobResultConfigurationInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          jobParameters: __S(248),
          resultConfiguration: S.optional(__S(408)),
          computeConfiguration: S.optional(__S(261)),
          jobComputePayerAccountId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memberships/{membershipIdentifier}/protectedJobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartProtectedJobInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          sqlParameters: __S(265),
          resultConfiguration: S.optional(__S(271)),
          computeConfiguration: S.optional(__S(280)),
          queryComputePayerAccountId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memberships/{membershipIdentifier}/protectedQueries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartProtectedQueryInput" });
    case 3:
      return S.suspend(() => S.Struct({ protectedQuery: __S(281) })).annotate({
        identifier: "StartProtectedQueryOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(84) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(0).pipe(T.HttpQuery("tagKeys")),
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
      ).annotate({ identifier: "UntagResourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          analysisTemplateIdentifier: S.String.pipe(T.HttpLabel("analysisTemplateIdentifier")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAnalysisTemplateInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          analyticsEngine: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/collaborations/{collaborationIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCollaborationInput" });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          changeRequestIdentifier: S.String.pipe(T.HttpLabel("changeRequestIdentifier")),
          action: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/collaborations/{collaborationIdentifier}/changeRequests/{changeRequestIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCollaborationChangeRequestInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredAudienceModelAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          description: S.optional(S.String),
          name: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfiguredAudienceModelAssociationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          tableReference: S.optional(__S(120)),
          allowedColumns: S.optional(__S(0)),
          analysisMethod: S.optional(S.String),
          selectedAnalysisMethods: S.optional(__S(32)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/configuredTables/{configuredTableIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfiguredTableInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
          analysisRulePolicy: __S(126),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfiguredTableAnalysisRuleInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configuredTableAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredTableAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          description: S.optional(S.String),
          roleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfiguredTableAssociationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredTableAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredTableAssociationIdentifier"),
          ),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
          analysisRulePolicy: __S(74),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfiguredTableAssociationAnalysisRuleInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          idMappingTableIdentifier: S.String.pipe(T.HttpLabel("idMappingTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIdMappingTableInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          idNamespaceAssociationIdentifier: S.String.pipe(
            T.HttpLabel("idNamespaceAssociationIdentifier"),
          ),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          idMappingConfig: S.optional(__S(143)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIdNamespaceAssociationInput",
      });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          columns: S.optional(__S(31)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIntermediateTableInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          analysisRuleType: S.String.pipe(T.HttpLabel("analysisRuleType")),
          analysisRulePolicy: __S(172),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/intermediateTables/{intermediateTableIdentifier}/analysisRule/{analysisRuleType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIntermediateTableAnalysisRuleInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          queryCompute: S.optional(__S(89)),
          machineLearning: S.optional(__S(182)),
          jobCompute: S.optional(__S(89)),
        }),
      ).annotate({
        identifier: "UpdateMembershipPaymentConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          queryLogStatus: S.optional(S.String),
          jobLogStatus: S.optional(S.String),
          defaultResultConfiguration: S.optional(__S(178)),
          defaultJobResultConfiguration: S.optional(__S(181)),
          membershipPaymentConfiguration: S.optional(__S(426)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/memberships/{membershipIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateMembershipInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ epsilon: S.optional(S.Number), usersNoisePerQuery: S.optional(S.Number) }),
      ).annotate({
        identifier: "DifferentialPrivacyTemplateUpdateParameters",
      });
    case 5:
      return S.suspend(() => S.Struct({ budgetParameters: __S(189) })).annotate({
        identifier: "AccessBudgetsPrivacyTemplateUpdateParameters",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          differentialPrivacy: __S(428),
        }),
        /*@__PURE__*/ S.Struct({ accessBudget: __S(429) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          privacyBudgetTemplateIdentifier: S.String.pipe(
            T.HttpLabel("privacyBudgetTemplateIdentifier"),
          ),
          privacyBudgetType: S.String,
          parameters: S.optional(__S(430)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePrivacyBudgetTemplateInput",
      });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          protectedJobIdentifier: S.String.pipe(T.HttpLabel("protectedJobIdentifier")),
          targetStatus: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/protectedJobs/{protectedJobIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateProtectedJobInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          protectedQueryIdentifier: S.String.pipe(T.HttpLabel("protectedQueryIdentifier")),
          targetStatus: S.String,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateProtectedQueryInput",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 3:
      return S.Array(__S(434));
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
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
    case 39:
      return __c39(i & 7);
    case 40:
      return __c40(i & 7);
    case 41:
      return __c41(i & 7);
    case 42:
      return __c42(i & 7);
    case 43:
      return __c43(i & 7);
    case 44:
      return __c44(i & 7);
    case 45:
      return __c45(i & 7);
    case 46:
      return __c46(i & 7);
    case 47:
      return __c47(i & 7);
    case 48:
      return __c48(i & 7);
    case 49:
      return __c49(i & 7);
    case 50:
      return __c50(i & 7);
    case 51:
      return __c51(i & 7);
    case 52:
      return __c52(i & 7);
    case 53:
      return __c53(i & 7);
    case 54:
      return __c54(i & 7);
  }
}
