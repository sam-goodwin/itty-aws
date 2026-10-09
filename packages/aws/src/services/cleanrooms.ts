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
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CollaborationIdentifier = string;
export type AnalysisTemplateArn = string;
export type AnalysisTemplateArnList = string[];
const AnalysisTemplateArnList = /*@__PURE__*/ __L.at(__c0, 0);
export interface BatchGetCollaborationAnalysisTemplateInput {
  collaborationIdentifier: string;
  analysisTemplateArns: string[];
}
const BatchGetCollaborationAnalysisTemplateInput = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<BatchGetCollaborationAnalysisTemplateInput>;
export type AnalysisTemplateIdentifier = string;
export type UUID = string;
export type CollaborationArn = string;
export type ResourceDescription = string;
export type AccountId = string;
export type ResourceAlias = string;
export type TableAlias = string;
export type QueryTables = string[];
const QueryTables = AnalysisTemplateArnList as any as S.Schema<QueryTables>;
export interface AnalysisSchema {
  referencedTables?: string[];
}
const AnalysisSchema = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<AnalysisSchema>;
export type AnalysisFormat = "SQL" | "PYSPARK_1_0" | (string & {});
const AnalysisFormat = S.String;

export type AnalysisTemplateText = string | redacted.Redacted<string>;
export interface S3Location {
  bucket: string;
  key: string;
}
const S3Location = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<S3Location>;
export interface AnalysisTemplateArtifact {
  location: S3Location;
}
const AnalysisTemplateArtifact = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AnalysisTemplateArtifact>;
export type AnalysisTemplateArtifactList = AnalysisTemplateArtifact[];
const AnalysisTemplateArtifactList = /*@__PURE__*/ __L.at(__c0, 5);
export type RoleArn = string;
export interface AnalysisTemplateArtifacts {
  entryPoint: AnalysisTemplateArtifact;
  additionalArtifacts?: AnalysisTemplateArtifact[];
  roleArn: string;
}
const AnalysisTemplateArtifacts = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AnalysisTemplateArtifacts>;
export type AnalysisSource =
  | { text: string | redacted.Redacted<string>; artifacts?: never }
  | { text?: never; artifacts: AnalysisTemplateArtifacts };
const AnalysisSource = /*@__PURE__*/ __L.at(__c0, 7);
export interface Hash {
  sha256?: string;
}
const Hash = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<Hash>;
export type HashList = Hash[];
const HashList = /*@__PURE__*/ __L.at(__c1, 1);
export interface AnalysisTemplateArtifactMetadata {
  entryPointHash: Hash;
  additionalArtifactHashes?: Hash[];
}
const AnalysisTemplateArtifactMetadata = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AnalysisTemplateArtifactMetadata>;
export type AnalysisSourceMetadata = { artifacts: AnalysisTemplateArtifactMetadata };
const AnalysisSourceMetadata = /*@__PURE__*/ __L.at(__c1, 3);
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
const ParameterType = S.String;

export type ParameterValue = string;
export interface AnalysisParameter {
  name: string;
  type: ParameterType;
  defaultValue?: string;
}
const AnalysisParameter = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<AnalysisParameter>;
export type AnalysisParameterList = AnalysisParameter[];
const AnalysisParameterList = /*@__PURE__*/ __L.at(__c1, 5);
export type AnalysisTemplateValidationType = "DIFFERENTIAL_PRIVACY" | (string & {});
const AnalysisTemplateValidationType = S.String;

export type AnalysisTemplateValidationStatus =
  | "VALID"
  | "INVALID"
  | "UNABLE_TO_VALIDATE"
  | (string & {});
const AnalysisTemplateValidationStatus = S.String;

export interface AnalysisTemplateValidationStatusReason {
  message: string;
}
const AnalysisTemplateValidationStatusReason = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<AnalysisTemplateValidationStatusReason>;
export type AnalysisTemplateValidationStatusReasonList = AnalysisTemplateValidationStatusReason[];
const AnalysisTemplateValidationStatusReasonList = /*@__PURE__*/ __L.at(__c1, 7);
export interface AnalysisTemplateValidationStatusDetail {
  type: AnalysisTemplateValidationType;
  status: AnalysisTemplateValidationStatus;
  reasons?: AnalysisTemplateValidationStatusReason[];
}
const AnalysisTemplateValidationStatusDetail = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<AnalysisTemplateValidationStatusDetail>;
export type AnalysisTemplateValidationStatusDetailList = AnalysisTemplateValidationStatusDetail[];
const AnalysisTemplateValidationStatusDetailList = /*@__PURE__*/ __L.at(__c2, 1);
export type ErrorMessageType = "DETAILED" | (string & {});
const ErrorMessageType = S.String;

export interface ErrorMessageConfiguration {
  type: ErrorMessageType;
}
const ErrorMessageConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<ErrorMessageConfiguration>;
export type MaxMembershipInferenceAttackScore = number;
export type SyntheticDataColumnName = string;
export type SyntheticDataColumnType = "CATEGORICAL" | "NUMERICAL" | (string & {});
const SyntheticDataColumnType = S.String;

export interface SyntheticDataColumnProperties {
  columnName: string;
  columnType: SyntheticDataColumnType;
  isPredictiveValue: boolean;
}
const SyntheticDataColumnProperties = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<SyntheticDataColumnProperties>;
export type ColumnMappingList = SyntheticDataColumnProperties[];
const ColumnMappingList = /*@__PURE__*/ __L.at(__c2, 4);
export interface ColumnClassificationDetails {
  columnMapping: SyntheticDataColumnProperties[];
}
const ColumnClassificationDetails = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<ColumnClassificationDetails>;
export interface MLSyntheticDataParameters {
  epsilon: number;
  maxMembershipInferenceAttackScore: number;
  columnClassification: ColumnClassificationDetails;
}
const MLSyntheticDataParameters = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<MLSyntheticDataParameters>;
export type SyntheticDataParameters = { mlSyntheticDataParameters: MLSyntheticDataParameters };
const SyntheticDataParameters = /*@__PURE__*/ __L.at(__c2, 7);
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
const CollaborationAnalysisTemplate = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CollaborationAnalysisTemplate>;
export type CollaborationAnalysisTemplateList = CollaborationAnalysisTemplate[];
const CollaborationAnalysisTemplateList = /*@__PURE__*/ __L.at(__c3, 1);
export interface BatchGetCollaborationAnalysisTemplateError_ {
  arn: string;
  code: string;
  message: string;
}
const BatchGetCollaborationAnalysisTemplateError_ = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<BatchGetCollaborationAnalysisTemplateError_>;
export type BatchGetCollaborationAnalysisTemplateErrorList =
  BatchGetCollaborationAnalysisTemplateError_[];
const BatchGetCollaborationAnalysisTemplateErrorList = /*@__PURE__*/ __L.at(__c3, 3);
export interface BatchGetCollaborationAnalysisTemplateOutput {
  collaborationAnalysisTemplates: CollaborationAnalysisTemplate[];
  errors: BatchGetCollaborationAnalysisTemplateError_[];
}
const BatchGetCollaborationAnalysisTemplateOutput = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<BatchGetCollaborationAnalysisTemplateOutput>;
export type TableAliasList = string[];
const TableAliasList = AnalysisTemplateArnList as any as S.Schema<TableAliasList>;
export interface BatchGetSchemaInput {
  collaborationIdentifier: string;
  names: string[];
}
const BatchGetSchemaInput = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<BatchGetSchemaInput>;
export type ColumnName = string;
export type ColumnTypeString = string;
export interface Column {
  name: string;
  type: string;
}
const Column = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<Column>;
export type ColumnList = Column[];
const ColumnList = /*@__PURE__*/ __L.at(__c3, 7);
export type AnalysisRuleType =
  | "AGGREGATION"
  | "LIST"
  | "CUSTOM"
  | "ID_MAPPING_TABLE"
  | (string & {});
const AnalysisRuleType = S.String;

export type AnalysisRuleTypeList = AnalysisRuleType[];
const AnalysisRuleTypeList = /*@__PURE__*/ __L.at(__c4, 0);
export type AnalysisMethod = "DIRECT_QUERY" | "DIRECT_JOB" | "MULTIPLE" | (string & {});
const AnalysisMethod = S.String;

export type SelectedAnalysisMethod = "DIRECT_QUERY" | "DIRECT_JOB" | (string & {});
export type SelectedAnalysisMethods = SelectedAnalysisMethod[];
const SelectedAnalysisMethods = AnalysisRuleTypeList as any as S.Schema<SelectedAnalysisMethods>;
export type TableDescription = string;
export type SchemaType = "TABLE" | "ID_MAPPING_TABLE" | "INTERMEDIATE_TABLE" | (string & {});
const SchemaType = S.String;

export type SchemaStatus = "READY" | "NOT_READY" | (string & {});
const SchemaStatus = S.String;

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
const SchemaStatusReasonCode = S.String;

export interface SchemaStatusReason {
  code: SchemaStatusReasonCode;
  message: string;
}
const SchemaStatusReason = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<SchemaStatusReason>;
export type SchemaStatusReasonList = SchemaStatusReason[];
const SchemaStatusReasonList = /*@__PURE__*/ __L.at(__c4, 2);
export type SchemaConfiguration = "DIFFERENTIAL_PRIVACY" | (string & {});
export type SchemaConfigurationList = SchemaConfiguration[];
const SchemaConfigurationList = AnalysisRuleTypeList as any as S.Schema<SchemaConfigurationList>;
export type AnalysisType = "DIRECT_ANALYSIS" | "ADDITIONAL_ANALYSIS" | (string & {});
const AnalysisType = S.String;

export interface SchemaStatusDetail {
  status: SchemaStatus;
  reasons?: SchemaStatusReason[];
  analysisRuleType?: AnalysisRuleType;
  configurations?: SchemaConfiguration[];
  analysisType: AnalysisType;
}
const SchemaStatusDetail = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<SchemaStatusDetail>;
export type SchemaStatusDetailList = SchemaStatusDetail[];
const SchemaStatusDetailList = /*@__PURE__*/ __L.at(__c4, 4);
export type SchemaResourceArn = string;
export type IdNamespaceType = "SOURCE" | "TARGET" | (string & {});
const IdNamespaceType = S.String;

export interface IdMappingTableInputSource {
  idNamespaceAssociationId: string;
  type: IdNamespaceType;
}
const IdMappingTableInputSource = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<IdMappingTableInputSource>;
export type IdMappingTableInputSourceList = IdMappingTableInputSource[];
const IdMappingTableInputSourceList = /*@__PURE__*/ __L.at(__c4, 6);
export interface IdMappingTableSchemaTypeProperties {
  idMappingTableInputSource: IdMappingTableInputSource[];
  idMappingTableId?: string;
}
const IdMappingTableSchemaTypeProperties = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<IdMappingTableSchemaTypeProperties>;
export interface IntermediateTableSchemaTypeProperties {
  intermediateTableId: string;
}
const IntermediateTableSchemaTypeProperties = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<IntermediateTableSchemaTypeProperties>;
export interface ConfiguredTableAssociationSchemaTypeProperties {
  configuredTableAssociationId: string;
}
const ConfiguredTableAssociationSchemaTypeProperties = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ConfiguredTableAssociationSchemaTypeProperties>;
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
const SchemaTypeProperties = /*@__PURE__*/ __L.at(__c5, 2);
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
const Schema = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<Schema>;
export type SchemaList = Schema[];
const SchemaList = /*@__PURE__*/ __L.at(__c5, 4);
export interface BatchGetSchemaError_ {
  name: string;
  code: string;
  message: string;
}
const BatchGetSchemaError_ = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<BatchGetSchemaError_>;
export type BatchGetSchemaErrorList = BatchGetSchemaError_[];
const BatchGetSchemaErrorList = /*@__PURE__*/ __L.at(__c5, 6);
export interface BatchGetSchemaOutput {
  schemas: Schema[];
  errors: BatchGetSchemaError_[];
}
const BatchGetSchemaOutput = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<BatchGetSchemaOutput>;
export interface SchemaAnalysisRuleRequest {
  name: string;
  type: AnalysisRuleType;
}
const SchemaAnalysisRuleRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<SchemaAnalysisRuleRequest>;
export type SchemaAnalysisRuleRequestList = SchemaAnalysisRuleRequest[];
const SchemaAnalysisRuleRequestList = /*@__PURE__*/ __L.at(__c6, 1);
export interface BatchGetSchemaAnalysisRuleInput {
  collaborationIdentifier: string;
  schemaAnalysisRuleRequests: SchemaAnalysisRuleRequest[];
}
const BatchGetSchemaAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<BatchGetSchemaAnalysisRuleInput>;
export type AnalysisRuleColumnName = string;
export type AnalysisRuleColumnList = string[];
const AnalysisRuleColumnList = AnalysisTemplateArnList as any as S.Schema<AnalysisRuleColumnList>;
export type JoinOperator = string;
export type JoinOperatorsList = string[];
const JoinOperatorsList = AnalysisTemplateArnList as any as S.Schema<JoinOperatorsList>;
export type AdditionalAnalyses = "ALLOWED" | "REQUIRED" | "NOT_ALLOWED" | (string & {});
const AdditionalAnalyses = S.String;

export interface AnalysisRuleList {
  joinColumns: string[];
  allowedJoinOperators?: string[];
  listColumns: string[];
  additionalAnalyses?: AdditionalAnalyses;
}
const AnalysisRuleList = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<AnalysisRuleList>;
export type AnalysisRuleColumnNameList = string[];
const AnalysisRuleColumnNameList =
  AnalysisTemplateArnList as any as S.Schema<AnalysisRuleColumnNameList>;
export type AggregateFunctionName = string;
export interface AggregateColumn {
  columnNames: string[];
  function: string;
}
const AggregateColumn = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<AggregateColumn>;
export type AggregateColumnList = AggregateColumn[];
const AggregateColumnList = /*@__PURE__*/ __L.at(__c6, 5);
export type JoinRequiredOption = string;
export type ScalarFunctions = string;
export type ScalarFunctionsList = string[];
const ScalarFunctionsList = AnalysisTemplateArnList as any as S.Schema<ScalarFunctionsList>;
export type AggregationType = string;
export interface AggregationConstraint {
  columnName: string;
  minimum: number;
  type: string;
}
const AggregationConstraint = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<AggregationConstraint>;
export type AggregationConstraints = AggregationConstraint[];
const AggregationConstraints = /*@__PURE__*/ __L.at(__c6, 7);
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
const AnalysisRuleAggregation = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<AnalysisRuleAggregation>;
export type AnalysisTemplateArnOrQueryWildcard = string;
export type AllowedAnalysesList = string[];
const AllowedAnalysesList = AnalysisTemplateArnList as any as S.Schema<AllowedAnalysesList>;
export type AllowedAnalysisProviderList = string[];
const AllowedAnalysisProviderList =
  AnalysisTemplateArnList as any as S.Schema<AllowedAnalysisProviderList>;
export interface DifferentialPrivacyColumn {
  name: string;
}
const DifferentialPrivacyColumn = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DifferentialPrivacyColumn>;
export type DifferentialPrivacyColumnList = DifferentialPrivacyColumn[];
const DifferentialPrivacyColumnList = /*@__PURE__*/ __L.at(__c7, 2);
export interface DifferentialPrivacyConfiguration {
  columns: DifferentialPrivacyColumn[];
}
const DifferentialPrivacyConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DifferentialPrivacyConfiguration>;
export type AggregationThresholdType = "COUNT_DISTINCT" | (string & {});
const AggregationThresholdType = S.String;

export interface OutputColumnThreshold {
  outputColumnName: string;
  minimumIdentityCount: number;
}
const OutputColumnThreshold = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<OutputColumnThreshold>;
export type OutputColumnThresholdList = OutputColumnThreshold[];
const OutputColumnThresholdList = /*@__PURE__*/ __L.at(__c7, 5);
export type AllowedAggregateExpressionType = "COLUMNS_ONLY" | "ANY_EXPRESSION" | (string & {});
const AllowedAggregateExpressionType = S.String;

export interface AggregationThreshold {
  identityColumns: string[];
  minimumIdentityCount: number;
  type: AggregationThresholdType;
  outputColumnThresholds?: OutputColumnThreshold[];
  allowedAggregateExpressionType: AllowedAggregateExpressionType;
}
const AggregationThreshold = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<AggregationThreshold>;
export type AggregationThresholdList = AggregationThreshold[];
const AggregationThresholdList = /*@__PURE__*/ __L.at(__c7, 7);
export interface ComparisonControls {
  allowedLiteralComparisonColumns: string[];
  allowedColumnComparisonColumns: string[];
}
const ComparisonControls = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<ComparisonControls>;
export type AllowedResultReceivers = string[];
const AllowedResultReceivers = AnalysisTemplateArnList as any as S.Schema<AllowedResultReceivers>;
export type AdditionalAnalysesResourceArn = string;
export type AllowedAdditionalAnalyses = string[];
const AllowedAdditionalAnalyses =
  AnalysisTemplateArnList as any as S.Schema<AllowedAdditionalAnalyses>;
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
const AnalysisRuleCustom = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<AnalysisRuleCustom>;
export interface QueryConstraintRequireOverlap {
  columns?: string[];
}
const QueryConstraintRequireOverlap = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<QueryConstraintRequireOverlap>;
export type QueryConstraint = { requireOverlap: QueryConstraintRequireOverlap };
const QueryConstraint = /*@__PURE__*/ __L.at(__c8, 3);
export type QueryConstraintList = QueryConstraint[];
const QueryConstraintList = /*@__PURE__*/ __L.at(__c8, 4);
export interface AnalysisRuleIdMappingTable {
  joinColumns: string[];
  queryConstraints: QueryConstraint[];
  dimensionColumns?: string[];
}
const AnalysisRuleIdMappingTable = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<AnalysisRuleIdMappingTable>;
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
const AnalysisRulePolicyV1 = /*@__PURE__*/ __L.at(__c8, 6);
export type AnalysisRulePolicy = { v1: AnalysisRulePolicyV1 };
const AnalysisRulePolicy = /*@__PURE__*/ __L.at(__c8, 7);
export interface ConfiguredTableAssociationAnalysisRuleList {
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
const ConfiguredTableAssociationAnalysisRuleList = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ConfiguredTableAssociationAnalysisRuleList>;
export interface ConfiguredTableAssociationAnalysisRuleAggregation {
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
const ConfiguredTableAssociationAnalysisRuleAggregation =
  ConfiguredTableAssociationAnalysisRuleList as any as S.Schema<ConfiguredTableAssociationAnalysisRuleAggregation>;
export interface ConfiguredTableAssociationAnalysisRuleCustom {
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
const ConfiguredTableAssociationAnalysisRuleCustom =
  ConfiguredTableAssociationAnalysisRuleList as any as S.Schema<ConfiguredTableAssociationAnalysisRuleCustom>;
export type ConfiguredTableAssociationAnalysisRulePolicyV1 =
  | { list: ConfiguredTableAssociationAnalysisRuleList; aggregation?: never; custom?: never }
  | { list?: never; aggregation: ConfiguredTableAssociationAnalysisRuleAggregation; custom?: never }
  | { list?: never; aggregation?: never; custom: ConfiguredTableAssociationAnalysisRuleCustom };
const ConfiguredTableAssociationAnalysisRulePolicyV1 = /*@__PURE__*/ __L.at(__c9, 1);
export type ConfiguredTableAssociationAnalysisRulePolicy = {
  v1: ConfiguredTableAssociationAnalysisRulePolicyV1;
};
const ConfiguredTableAssociationAnalysisRulePolicy = /*@__PURE__*/ __L.at(__c9, 2);
export interface ConsolidatedPolicyList {
  joinColumns: string[];
  allowedJoinOperators?: string[];
  listColumns: string[];
  additionalAnalyses?: AdditionalAnalyses;
  allowedResultReceivers?: string[];
  allowedAdditionalAnalyses?: string[];
}
const ConsolidatedPolicyList = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<ConsolidatedPolicyList>;
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
const ConsolidatedPolicyAggregation = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<ConsolidatedPolicyAggregation>;
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
const ConsolidatedPolicyCustom = AnalysisRuleCustom as any as S.Schema<ConsolidatedPolicyCustom>;
export type ConsolidatedPolicyV1 =
  | { list: ConsolidatedPolicyList; aggregation?: never; custom?: never }
  | { list?: never; aggregation: ConsolidatedPolicyAggregation; custom?: never }
  | { list?: never; aggregation?: never; custom: ConsolidatedPolicyCustom };
const ConsolidatedPolicyV1 = /*@__PURE__*/ __L.at(__c9, 5);
export type ConsolidatedPolicy = { v1: ConsolidatedPolicyV1 };
const ConsolidatedPolicy = /*@__PURE__*/ __L.at(__c9, 6);
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
const AnalysisRule = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<AnalysisRule>;
export type SchemaAnalysisRuleList = AnalysisRule[];
const SchemaAnalysisRuleList = /*@__PURE__*/ __L.at(__c10, 0);
export interface BatchGetSchemaAnalysisRuleError_ {
  name: string;
  type: AnalysisRuleType;
  code: string;
  message: string;
}
const BatchGetSchemaAnalysisRuleError_ = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<BatchGetSchemaAnalysisRuleError_>;
export type BatchGetSchemaAnalysisRuleErrorList = BatchGetSchemaAnalysisRuleError_[];
const BatchGetSchemaAnalysisRuleErrorList = /*@__PURE__*/ __L.at(__c10, 2);
export interface BatchGetSchemaAnalysisRuleOutput {
  analysisRules: AnalysisRule[];
  errors: BatchGetSchemaAnalysisRuleError_[];
}
const BatchGetSchemaAnalysisRuleOutput = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<BatchGetSchemaAnalysisRuleOutput>;
export type MembershipIdentifier = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c10, 4);
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
const CreateAnalysisTemplateInput = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<CreateAnalysisTemplateInput>;
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
const AnalysisTemplate = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<AnalysisTemplate>;
export interface CreateAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
const CreateAnalysisTemplateOutput = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<CreateAnalysisTemplateOutput>;
export type MemberAbility =
  | "CAN_QUERY"
  | "CAN_RECEIVE_RESULTS"
  | "CAN_RUN_JOB"
  | "CAN_EXPORT_QUERY_ANALYSIS_LOG"
  | (string & {});
export type MemberAbilities = MemberAbility[];
const MemberAbilities = AnalysisRuleTypeList as any as S.Schema<MemberAbilities>;
export type CustomMLMemberAbility =
  | "CAN_RECEIVE_MODEL_OUTPUT"
  | "CAN_RECEIVE_INFERENCE_OUTPUT"
  | (string & {});
export type CustomMLMemberAbilities = CustomMLMemberAbility[];
const CustomMLMemberAbilities = AnalysisRuleTypeList as any as S.Schema<CustomMLMemberAbilities>;
export interface MLMemberAbilities {
  customMLMemberAbilities: CustomMLMemberAbility[];
}
const MLMemberAbilities = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<MLMemberAbilities>;
export type DisplayName = string;
export interface QueryComputePaymentConfig {
  isResponsible: boolean;
}
const QueryComputePaymentConfig = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<QueryComputePaymentConfig>;
export interface ModelTrainingPaymentConfig {
  isResponsible: boolean;
}
const ModelTrainingPaymentConfig =
  QueryComputePaymentConfig as any as S.Schema<ModelTrainingPaymentConfig>;
export interface ModelInferencePaymentConfig {
  isResponsible: boolean;
}
const ModelInferencePaymentConfig =
  QueryComputePaymentConfig as any as S.Schema<ModelInferencePaymentConfig>;
export interface SyntheticDataGenerationPaymentConfig {
  isResponsible: boolean;
}
const SyntheticDataGenerationPaymentConfig =
  QueryComputePaymentConfig as any as S.Schema<SyntheticDataGenerationPaymentConfig>;
export interface MLPaymentConfig {
  modelTraining?: ModelTrainingPaymentConfig;
  modelInference?: ModelInferencePaymentConfig;
  syntheticDataGeneration?: SyntheticDataGenerationPaymentConfig;
}
const MLPaymentConfig = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<MLPaymentConfig>;
export interface JobComputePaymentConfig {
  isResponsible: boolean;
}
const JobComputePaymentConfig = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<JobComputePaymentConfig>;
export interface PaymentConfiguration {
  queryCompute: QueryComputePaymentConfig;
  machineLearning?: MLPaymentConfig;
  jobCompute?: JobComputePaymentConfig;
}
const PaymentConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<PaymentConfiguration>;
export interface MemberSpecification {
  accountId: string;
  memberAbilities: MemberAbility[];
  mlMemberAbilities?: MLMemberAbilities;
  displayName: string;
  paymentConfiguration?: PaymentConfiguration;
}
const MemberSpecification = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<MemberSpecification>;
export type MemberList = MemberSpecification[];
const MemberList = /*@__PURE__*/ __L.at(__c11, 6);
export type CollaborationName = string;
export type CollaborationDescription = string;
export interface DataEncryptionMetadata {
  allowCleartext: boolean;
  allowDuplicates: boolean;
  allowJoinsOnColumnsWithDifferentNames: boolean;
  preserveNulls: boolean;
}
const DataEncryptionMetadata = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<DataEncryptionMetadata>;
export type CollaborationQueryLogStatus = "ENABLED" | "DISABLED" | (string & {});
const CollaborationQueryLogStatus = S.String;

export type CollaborationJobLogStatus = "ENABLED" | "DISABLED" | (string & {});
const CollaborationJobLogStatus = S.String;

export type AnalyticsEngine = "SPARK" | "CLEAN_ROOMS_SQL" | (string & {});
const AnalyticsEngine = S.String;

export type AutoApprovedChangeType =
  | "ADD_MEMBER"
  | "GRANT_RECEIVE_RESULTS_ABILITY"
  | "REVOKE_RECEIVE_RESULTS_ABILITY"
  | "GRANT_EXPORT_QUERY_ANALYSIS_LOG_ABILITY"
  | "REVOKE_EXPORT_QUERY_ANALYSIS_LOG_ABILITY"
  | (string & {});
export type AutoApprovedChangeTypeList = AutoApprovedChangeType[];
const AutoApprovedChangeTypeList =
  AnalysisRuleTypeList as any as S.Schema<AutoApprovedChangeTypeList>;
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
const AllowedResultRegions = AnalysisRuleTypeList as any as S.Schema<AllowedResultRegions>;
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
const CreateCollaborationInput = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<CreateCollaborationInput>;
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
const Collaboration = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<Collaboration>;
export interface CreateCollaborationOutput {
  collaboration: Collaboration;
}
const CreateCollaborationOutput = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<CreateCollaborationOutput>;
export type ChangeSpecificationType = "MEMBER" | "COLLABORATION" | (string & {});
const ChangeSpecificationType = S.String;

export interface MemberChangeSpecification {
  accountId: string;
  memberAbilities: MemberAbility[];
  mlMemberAbilities?: MLMemberAbilities;
  paymentConfiguration?: PaymentConfiguration;
  displayName?: string;
}
const MemberChangeSpecification = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<MemberChangeSpecification>;
export interface CollaborationChangeSpecification {
  autoApprovedChangeTypes?: AutoApprovedChangeType[];
}
const CollaborationChangeSpecification = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<CollaborationChangeSpecification>;
export type ChangeSpecification =
  | { member: MemberChangeSpecification; collaboration?: never }
  | { member?: never; collaboration: CollaborationChangeSpecification };
const ChangeSpecification = /*@__PURE__*/ __L.at(__c12, 5);
export interface ChangeInput {
  specificationType: ChangeSpecificationType;
  specification: ChangeSpecification;
}
const ChangeInput = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<ChangeInput>;
export type ChangeInputList = ChangeInput[];
const ChangeInputList = /*@__PURE__*/ __L.at(__c12, 7);
export interface CreateCollaborationChangeRequestInput {
  collaborationIdentifier: string;
  changes: ChangeInput[];
}
const CreateCollaborationChangeRequestInput = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<CreateCollaborationChangeRequestInput>;
export type ChangeRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "CANCELLED"
  | "DENIED"
  | "COMMITTED"
  | (string & {});
const ChangeRequestStatus = S.String;

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
const ChangeTypeList = AnalysisRuleTypeList as any as S.Schema<ChangeTypeList>;
export interface Change {
  specificationType: ChangeSpecificationType;
  specification: ChangeSpecification;
  types: ChangeType[];
}
const Change = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<Change>;
export type ChangeList = Change[];
const ChangeList = /*@__PURE__*/ __L.at(__c13, 2);
export type ApprovalStatus = "APPROVED" | "DENIED" | "PENDING" | (string & {});
const ApprovalStatus = S.String;

export interface ApprovalStatusDetails {
  status: ApprovalStatus;
}
const ApprovalStatusDetails = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<ApprovalStatusDetails>;
export type ApprovalStatuses = { [key: string]: ApprovalStatusDetails | undefined };
const ApprovalStatuses = /*@__PURE__*/ __L.at(__c13, 4);
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
const CollaborationChangeRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<CollaborationChangeRequest>;
export interface CreateCollaborationChangeRequestOutput {
  collaborationChangeRequest: CollaborationChangeRequest;
}
const CreateCollaborationChangeRequestOutput = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<CreateCollaborationChangeRequestOutput>;
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
const CreateConfiguredAudienceModelAssociationInput = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<CreateConfiguredAudienceModelAssociationInput>;
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
const ConfiguredAudienceModelAssociation = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ConfiguredAudienceModelAssociation>;
export interface CreateConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
const CreateConfiguredAudienceModelAssociationOutput = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<CreateConfiguredAudienceModelAssociationOutput>;
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
const CommercialRegion = S.String;

export type GlueTableName = string;
export type GlueDatabaseName = string;
export interface GlueTableReference {
  region?: CommercialRegion;
  tableName: string;
  databaseName: string;
}
const GlueTableReference = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<GlueTableReference>;
export type SecretsManagerArn = string;
export type SnowflakeAccountIdentifier = string;
export type SnowflakeDatabaseName = string;
export type SnowflakeTableName = string;
export type SnowflakeSchemaName = string;
export interface SnowflakeTableSchemaV1 {
  columnName: string;
  columnType: string;
}
const SnowflakeTableSchemaV1 = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<SnowflakeTableSchemaV1>;
export type SnowflakeTableSchemaList = SnowflakeTableSchemaV1[];
const SnowflakeTableSchemaList = /*@__PURE__*/ __L.at(__c14, 4);
export type SnowflakeTableSchema = { v1: SnowflakeTableSchemaV1[] };
const SnowflakeTableSchema = /*@__PURE__*/ __L.at(__c14, 5);
export interface SnowflakeTableReference {
  secretArn: string;
  accountIdentifier: string;
  databaseName: string;
  tableName: string;
  schemaName: string;
  tableSchema: SnowflakeTableSchema;
}
const SnowflakeTableReference = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<SnowflakeTableReference>;
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
const AthenaTableReference = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<AthenaTableReference>;
export type TableReference =
  | { glue: GlueTableReference; snowflake?: never; athena?: never }
  | { glue?: never; snowflake: SnowflakeTableReference; athena?: never }
  | { glue?: never; snowflake?: never; athena: AthenaTableReference };
const TableReference = /*@__PURE__*/ __L.at(__c15, 0);
export type AllowedColumnList = string[];
const AllowedColumnList = AnalysisTemplateArnList as any as S.Schema<AllowedColumnList>;
export interface CreateConfiguredTableInput {
  name: string;
  description?: string;
  tableReference: TableReference;
  allowedColumns: string[];
  analysisMethod: AnalysisMethod;
  selectedAnalysisMethods?: SelectedAnalysisMethod[];
  tags?: { [key: string]: string | undefined };
}
const CreateConfiguredTableInput = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<CreateConfiguredTableInput>;
export type ConfiguredTableArn = string;
export type ConfiguredTableAnalysisRuleType = "AGGREGATION" | "LIST" | "CUSTOM" | (string & {});
const ConfiguredTableAnalysisRuleType = S.String;

export type ConfiguredTableAnalysisRuleTypeList = ConfiguredTableAnalysisRuleType[];
const ConfiguredTableAnalysisRuleTypeList = /*@__PURE__*/ __L.at(__c15, 2);
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
const ConfiguredTable = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<ConfiguredTable>;
export interface CreateConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
const CreateConfiguredTableOutput = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<CreateConfiguredTableOutput>;
export type ConfiguredTableIdentifier = string;
export type ConfiguredTableAnalysisRulePolicyV1 =
  | { list: AnalysisRuleList; aggregation?: never; custom?: never }
  | { list?: never; aggregation: AnalysisRuleAggregation; custom?: never }
  | { list?: never; aggregation?: never; custom: AnalysisRuleCustom };
const ConfiguredTableAnalysisRulePolicyV1 = /*@__PURE__*/ __L.at(__c15, 5);
export type ConfiguredTableAnalysisRulePolicy = { v1: ConfiguredTableAnalysisRulePolicyV1 };
const ConfiguredTableAnalysisRulePolicy = /*@__PURE__*/ __L.at(__c15, 6);
export interface CreateConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy;
}
const CreateConfiguredTableAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<CreateConfiguredTableAnalysisRuleInput>;
export interface ConfiguredTableAnalysisRule {
  configuredTableId: string;
  configuredTableArn: string;
  policy: ConfiguredTableAnalysisRulePolicy;
  type: ConfiguredTableAnalysisRuleType;
  createTime: Date;
  updateTime: Date;
}
const ConfiguredTableAnalysisRule = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ConfiguredTableAnalysisRule>;
export interface CreateConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
const CreateConfiguredTableAnalysisRuleOutput = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<CreateConfiguredTableAnalysisRuleOutput>;
export interface CreateConfiguredTableAssociationInput {
  name: string;
  description?: string;
  membershipIdentifier: string;
  configuredTableIdentifier: string;
  roleArn: string;
  tags?: { [key: string]: string | undefined };
}
const CreateConfiguredTableAssociationInput = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<CreateConfiguredTableAssociationInput>;
export type ConfiguredTableAssociationArn = string;
export type ConfiguredTableAssociationAnalysisRuleType =
  | "AGGREGATION"
  | "LIST"
  | "CUSTOM"
  | (string & {});
const ConfiguredTableAssociationAnalysisRuleType = S.String;

export type ConfiguredTableAssociationAnalysisRuleTypeList =
  ConfiguredTableAssociationAnalysisRuleType[];
const ConfiguredTableAssociationAnalysisRuleTypeList =
  ConfiguredTableAnalysisRuleTypeList as any as S.Schema<ConfiguredTableAssociationAnalysisRuleTypeList>;
export type ChildResourceType = "INTERMEDIATE_TABLE" | (string & {});
const ChildResourceType = S.String;

export type ResourceStatus =
  | "CREATED"
  | "POPULATE_STARTED"
  | "POPULATE_SUCCESS"
  | "POPULATE_FAILED"
  | "DISALLOWED_BY_DATA_PROVIDER"
  | "BASE_TABLE_REMOVED"
  | "RETENTION_PERIOD_EXPIRED"
  | (string & {});
const ResourceStatus = S.String;

export interface ChildResource {
  resourceId?: string;
  resourceType: ChildResourceType;
  resourceName: string;
  ownerAccountId: string;
  resourceStatus?: ResourceStatus;
}
const ChildResource = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<ChildResource>;
export type ChildResourceList = ChildResource[];
const ChildResourceList = /*@__PURE__*/ __L.at(__c16, 4);
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
const ConfiguredTableAssociation = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ConfiguredTableAssociation>;
export interface CreateConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
const CreateConfiguredTableAssociationOutput = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<CreateConfiguredTableAssociationOutput>;
export type ConfiguredTableAssociationIdentifier = string;
export interface CreateConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy;
}
const CreateConfiguredTableAssociationAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<CreateConfiguredTableAssociationAnalysisRuleInput>;
export interface ConfiguredTableAssociationAnalysisRule {
  membershipIdentifier: string;
  configuredTableAssociationId: string;
  configuredTableAssociationArn: string;
  policy: ConfiguredTableAssociationAnalysisRulePolicy;
  type: ConfiguredTableAssociationAnalysisRuleType;
  createTime: Date;
  updateTime: Date;
}
const ConfiguredTableAssociationAnalysisRule = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<ConfiguredTableAssociationAnalysisRule>;
export interface CreateConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
const CreateConfiguredTableAssociationAnalysisRuleOutput = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<CreateConfiguredTableAssociationAnalysisRuleOutput>;
export type IdMappingTableInputReferenceArn = string;
export interface IdMappingTableInputReferenceConfig {
  inputReferenceArn: string;
  manageResourcePolicies: boolean;
}
const IdMappingTableInputReferenceConfig = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<IdMappingTableInputReferenceConfig>;
export type KMSKeyArn = string;
export interface CreateIdMappingTableInput {
  membershipIdentifier: string;
  name: string;
  description?: string;
  inputReferenceConfig: IdMappingTableInputReferenceConfig;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
}
const CreateIdMappingTableInput = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<CreateIdMappingTableInput>;
export type IdMappingTableArn = string;
export interface IdMappingTableInputReferenceProperties {
  idMappingTableInputSource: IdMappingTableInputSource[];
}
const IdMappingTableInputReferenceProperties = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<IdMappingTableInputReferenceProperties>;
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
const IdMappingTable = /*@__PURE__*/ __L.at(__c17, 5) as any as S.Schema<IdMappingTable>;
export interface CreateIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
const CreateIdMappingTableOutput = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<CreateIdMappingTableOutput>;
export type IdNamespaceAssociationInputReferenceArn = string;
export interface IdNamespaceAssociationInputReferenceConfig {
  inputReferenceArn: string;
  manageResourcePolicies: boolean;
}
const IdNamespaceAssociationInputReferenceConfig =
  IdMappingTableInputReferenceConfig as any as S.Schema<IdNamespaceAssociationInputReferenceConfig>;
export type GenericResourceName = string;
export interface IdMappingConfig {
  allowUseAsDimensionColumn: boolean;
}
const IdMappingConfig = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<IdMappingConfig>;
export interface CreateIdNamespaceAssociationInput {
  membershipIdentifier: string;
  inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig;
  tags?: { [key: string]: string | undefined };
  name: string;
  description?: string;
  idMappingConfig?: IdMappingConfig;
}
const CreateIdNamespaceAssociationInput = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<CreateIdNamespaceAssociationInput>;
export type IdNamespaceAssociationIdentifier = string;
export type IdNamespaceAssociationArn = string;
export type IdMappingWorkflowsSupported = any[];
const IdMappingWorkflowsSupported = /*@__PURE__*/ __L.at(__c18, 1);
export interface IdNamespaceAssociationInputReferenceProperties {
  idNamespaceType: IdNamespaceType;
  idMappingWorkflowsSupported: any[];
}
const IdNamespaceAssociationInputReferenceProperties = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<IdNamespaceAssociationInputReferenceProperties>;
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
const IdNamespaceAssociation = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<IdNamespaceAssociation>;
export interface CreateIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
const CreateIdNamespaceAssociationOutput = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<CreateIdNamespaceAssociationOutput>;
export interface PopulationAnalysisSqlParameters {
  queryString?: string;
  analysisTemplateArn?: string;
}
const PopulationAnalysisSqlParameters = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<PopulationAnalysisSqlParameters>;
export type PopulationAnalysisConfiguration = { sqlParameters: PopulationAnalysisSqlParameters };
const PopulationAnalysisConfiguration = /*@__PURE__*/ __L.at(__c18, 6);
export interface CreateIntermediateTableInput {
  membershipIdentifier: string;
  name: string;
  description?: string;
  populationAnalysisConfiguration: PopulationAnalysisConfiguration;
  kmsKeyArn?: string;
  retentionInDays?: number;
  tags?: { [key: string]: string | undefined };
}
const CreateIntermediateTableInput = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<CreateIntermediateTableInput>;
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
const IntermediateTableStatus = S.String;

export type BaseTableDependencyType =
  | "TABLE"
  | "INTERMEDIATE_TABLE"
  | "ID_MAPPING_TABLE"
  | (string & {});
const BaseTableDependencyType = S.String;

export type BaseTableParentType = "DIRECT" | "INDIRECT" | (string & {});
const BaseTableParentType = S.String;

export interface IntermediateTableDependency {
  id: string;
  name: string;
  type: BaseTableDependencyType;
  parentType: BaseTableParentType;
  creatorAccountId: string;
}
const IntermediateTableDependency = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<IntermediateTableDependency>;
export type DependencyList = IntermediateTableDependency[];
const DependencyList = /*@__PURE__*/ __L.at(__c19, 1);
export type AnalysisIdentifier = string;
export type PopulateIntermediateTableAnalysisType = "QUERY" | (string & {});
const PopulateIntermediateTableAnalysisType = S.String;

export type ParameterMap = { [key: string]: string | undefined };
const ParameterMap = /*@__PURE__*/ __L.at(__c19, 2);
export interface InheritedAdditionalAnalysesSource {
  name: string;
  id: string;
  type: BaseTableDependencyType;
  value: AdditionalAnalyses;
  sourceAccountId: string;
}
const InheritedAdditionalAnalysesSource = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<InheritedAdditionalAnalysesSource>;
export type InheritedAdditionalAnalysesSourceList = InheritedAdditionalAnalysesSource[];
const InheritedAdditionalAnalysesSourceList = /*@__PURE__*/ __L.at(__c19, 4);
export interface InheritedAdditionalAnalyses {
  value: AdditionalAnalyses;
  sources: InheritedAdditionalAnalysesSource[];
}
const InheritedAdditionalAnalyses = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<InheritedAdditionalAnalyses>;
export interface InheritedAllowedAdditionalAnalysesSource {
  name: string;
  id: string;
  type: BaseTableDependencyType;
  value: string[];
  sourceAccountId: string;
}
const InheritedAllowedAdditionalAnalysesSource = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<InheritedAllowedAdditionalAnalysesSource>;
export type InheritedAllowedAdditionalAnalysesSourceList =
  InheritedAllowedAdditionalAnalysesSource[];
const InheritedAllowedAdditionalAnalysesSourceList = /*@__PURE__*/ __L.at(__c19, 7);
export interface InheritedAllowedAdditionalAnalyses {
  value: string[];
  sources: InheritedAllowedAdditionalAnalysesSource[];
}
const InheritedAllowedAdditionalAnalyses = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<InheritedAllowedAdditionalAnalyses>;
export type AccountIdList = string[];
const AccountIdList = AnalysisTemplateArnList as any as S.Schema<AccountIdList>;
export interface InheritedAllowedResultReceiversSource {
  name: string;
  id: string;
  type: BaseTableDependencyType;
  value: string[];
  sourceAccountId: string;
}
export type InheritedAllowedResultReceiversSourceList = InheritedAllowedResultReceiversSource[];
const InheritedAllowedResultReceiversSourceList =
  InheritedAllowedAdditionalAnalysesSourceList as any as S.Schema<InheritedAllowedResultReceiversSourceList>;
export interface InheritedAllowedResultReceivers {
  value: string[];
  sources: InheritedAllowedResultReceiversSource[];
}
const InheritedAllowedResultReceivers = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<InheritedAllowedResultReceivers>;
export interface ColumnLineageEntry {
  column: string;
  sourceColumn: string;
  sourceName: string;
  sourceId: string;
  sourceType: BaseTableDependencyType;
  sourceAccountId: string;
}
const ColumnLineageEntry = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<ColumnLineageEntry>;
export type ColumnLineageList = ColumnLineageEntry[];
const ColumnLineageList = /*@__PURE__*/ __L.at(__c20, 3);
export interface InheritedDisallowedOutputColumns {
  value: string[];
  columnLineage: ColumnLineageEntry[];
}
const InheritedDisallowedOutputColumns = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<InheritedDisallowedOutputColumns>;
export interface IntermediateTableInheritedConstraints {
  additionalAnalyses?: InheritedAdditionalAnalyses;
  allowedAdditionalAnalyses?: InheritedAllowedAdditionalAnalyses;
  allowedResultReceivers?: InheritedAllowedResultReceivers;
  disallowedOutputColumns?: InheritedDisallowedOutputColumns;
}
const IntermediateTableInheritedConstraints = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<IntermediateTableInheritedConstraints>;
export interface IntermediateTableActiveVersion {
  versionId: string;
  analysisId: string;
  analysisType: PopulateIntermediateTableAnalysisType;
  kmsKeyArn?: string;
  parameters?: { [key: string]: string | undefined };
  inheritedConstraints: IntermediateTableInheritedConstraints;
  expirationTime?: Date;
}
const IntermediateTableActiveVersion = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<IntermediateTableActiveVersion>;
export type IntermediateTableAnalysisRuleType = "CUSTOM" | (string & {});
const IntermediateTableAnalysisRuleType = S.String;

export type IntermediateTableAnalysisRuleTypeList = IntermediateTableAnalysisRuleType[];
const IntermediateTableAnalysisRuleTypeList =
  ConfiguredTableAnalysisRuleTypeList as any as S.Schema<IntermediateTableAnalysisRuleTypeList>;
export interface IntermediateTableSchema {
  columns: Column[];
}
const IntermediateTableSchema = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<IntermediateTableSchema>;
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
const IntermediateTable = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<IntermediateTable>;
export interface CreateIntermediateTableOutput {
  intermediateTable: IntermediateTable;
}
const CreateIntermediateTableOutput = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<CreateIntermediateTableOutput>;
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
const IntermediateTableAnalysisRuleCustom = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<IntermediateTableAnalysisRuleCustom>;
export type IntermediateTableAnalysisRulePolicyV1 = { custom: IntermediateTableAnalysisRuleCustom };
const IntermediateTableAnalysisRulePolicyV1 = /*@__PURE__*/ __L.at(__c21, 3);
export type IntermediateTableAnalysisRulePolicy = { v1: IntermediateTableAnalysisRulePolicyV1 };
const IntermediateTableAnalysisRulePolicy = /*@__PURE__*/ __L.at(__c21, 4);
export interface CreateIntermediateTableAnalysisRuleInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  analysisRuleType: IntermediateTableAnalysisRuleType;
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy;
}
const CreateIntermediateTableAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<CreateIntermediateTableAnalysisRuleInput>;
export interface IntermediateTableAnalysisRule {
  intermediateTableIdentifier: string;
  intermediateTableArn: string;
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy;
  analysisRuleType: IntermediateTableAnalysisRuleType;
  createTime: Date;
  updateTime: Date;
}
const IntermediateTableAnalysisRule = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<IntermediateTableAnalysisRule>;
export interface CreateIntermediateTableAnalysisRuleOutput {
  analysisRule: IntermediateTableAnalysisRule;
}
const CreateIntermediateTableAnalysisRuleOutput = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<CreateIntermediateTableAnalysisRuleOutput>;
export type MembershipQueryLogStatus = "ENABLED" | "DISABLED" | (string & {});
const MembershipQueryLogStatus = S.String;

export type MembershipJobLogStatus = "ENABLED" | "DISABLED" | (string & {});
const MembershipJobLogStatus = S.String;

export type ResultFormat = "CSV" | "PARQUET" | (string & {});
const ResultFormat = S.String;

export type KeyPrefix = string;
export interface ProtectedQueryS3OutputConfiguration {
  resultFormat: ResultFormat;
  bucket: string;
  keyPrefix?: string;
  singleFileOutput?: boolean;
}
const ProtectedQueryS3OutputConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<ProtectedQueryS3OutputConfiguration>;
export type MembershipProtectedQueryOutputConfiguration = {
  s3: ProtectedQueryS3OutputConfiguration;
};
const MembershipProtectedQueryOutputConfiguration = /*@__PURE__*/ __L.at(__c22, 1);
export interface MembershipProtectedQueryResultConfiguration {
  outputConfiguration: MembershipProtectedQueryOutputConfiguration;
  roleArn?: string;
}
const MembershipProtectedQueryResultConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<MembershipProtectedQueryResultConfiguration>;
export interface ProtectedJobS3OutputConfigurationInput {
  bucket: string;
  keyPrefix?: string;
}
const ProtectedJobS3OutputConfigurationInput = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<ProtectedJobS3OutputConfigurationInput>;
export type MembershipProtectedJobOutputConfiguration = {
  s3: ProtectedJobS3OutputConfigurationInput;
};
const MembershipProtectedJobOutputConfiguration = /*@__PURE__*/ __L.at(__c22, 4);
export interface MembershipProtectedJobResultConfiguration {
  outputConfiguration: MembershipProtectedJobOutputConfiguration;
  roleArn: string;
}
const MembershipProtectedJobResultConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<MembershipProtectedJobResultConfiguration>;
export interface MembershipQueryComputePaymentConfig {
  isResponsible: boolean;
}
const MembershipQueryComputePaymentConfig =
  QueryComputePaymentConfig as any as S.Schema<MembershipQueryComputePaymentConfig>;
export interface MembershipModelTrainingPaymentConfig {
  isResponsible: boolean;
}
const MembershipModelTrainingPaymentConfig =
  QueryComputePaymentConfig as any as S.Schema<MembershipModelTrainingPaymentConfig>;
export interface MembershipModelInferencePaymentConfig {
  isResponsible: boolean;
}
const MembershipModelInferencePaymentConfig =
  QueryComputePaymentConfig as any as S.Schema<MembershipModelInferencePaymentConfig>;
export interface MembershipSyntheticDataGenerationPaymentConfig {
  isResponsible: boolean;
}
const MembershipSyntheticDataGenerationPaymentConfig =
  QueryComputePaymentConfig as any as S.Schema<MembershipSyntheticDataGenerationPaymentConfig>;
export interface MembershipMLPaymentConfig {
  modelTraining?: MembershipModelTrainingPaymentConfig;
  modelInference?: MembershipModelInferencePaymentConfig;
  syntheticDataGeneration?: MembershipSyntheticDataGenerationPaymentConfig;
}
const MembershipMLPaymentConfig = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<MembershipMLPaymentConfig>;
export interface MembershipJobComputePaymentConfig {
  isResponsible: boolean;
}
const MembershipJobComputePaymentConfig =
  QueryComputePaymentConfig as any as S.Schema<MembershipJobComputePaymentConfig>;
export interface MembershipPaymentConfiguration {
  queryCompute: MembershipQueryComputePaymentConfig;
  machineLearning?: MembershipMLPaymentConfig;
  jobCompute?: MembershipJobComputePaymentConfig;
}
const MembershipPaymentConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<MembershipPaymentConfiguration>;
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
const CreateMembershipInput = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<CreateMembershipInput>;
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
const Membership = /*@__PURE__*/ __L.at(__c23, 1) as any as S.Schema<Membership>;
export interface CreateMembershipOutput {
  membership: Membership;
}
const CreateMembershipOutput = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<CreateMembershipOutput>;
export type PrivacyBudgetTemplateAutoRefresh = "CALENDAR_MONTH" | "NONE" | (string & {});
const PrivacyBudgetTemplateAutoRefresh = S.String;

export type PrivacyBudgetType = "DIFFERENTIAL_PRIVACY" | "ACCESS_BUDGET" | (string & {});
const PrivacyBudgetType = S.String;

export type Epsilon = number;
export type UsersNoisePerQuery = number;
export interface DifferentialPrivacyTemplateParametersInput {
  epsilon: number;
  usersNoisePerQuery: number;
}
const DifferentialPrivacyTemplateParametersInput = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<DifferentialPrivacyTemplateParametersInput>;
export type AccessBudgetType =
  | "CALENDAR_DAY"
  | "CALENDAR_MONTH"
  | "CALENDAR_WEEK"
  | "LIFETIME"
  | (string & {});
const AccessBudgetType = S.String;

export type Budget = number;
export type AutoRefreshMode = "ENABLED" | "DISABLED" | (string & {});
const AutoRefreshMode = S.String;

export interface BudgetParameter {
  type: AccessBudgetType;
  budget: number;
  autoRefresh?: AutoRefreshMode;
}
const BudgetParameter = /*@__PURE__*/ __L.at(__c23, 4) as any as S.Schema<BudgetParameter>;
export type BudgetParameters = BudgetParameter[];
const BudgetParameters = /*@__PURE__*/ __L.at(__c23, 5);
export type BudgetedResourceArn = string;
export interface AccessBudgetsPrivacyTemplateParametersInput {
  budgetParameters: BudgetParameter[];
  resourceArn: string;
}
const AccessBudgetsPrivacyTemplateParametersInput = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<AccessBudgetsPrivacyTemplateParametersInput>;
export type PrivacyBudgetTemplateParametersInput =
  | { differentialPrivacy: DifferentialPrivacyTemplateParametersInput; accessBudget?: never }
  | { differentialPrivacy?: never; accessBudget: AccessBudgetsPrivacyTemplateParametersInput };
const PrivacyBudgetTemplateParametersInput = /*@__PURE__*/ __L.at(__c23, 7);
export interface CreatePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  autoRefresh?: PrivacyBudgetTemplateAutoRefresh;
  privacyBudgetType: PrivacyBudgetType;
  parameters: PrivacyBudgetTemplateParametersInput;
  tags?: { [key: string]: string | undefined };
}
const CreatePrivacyBudgetTemplateInput = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<CreatePrivacyBudgetTemplateInput>;
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
const PrivacyBudgetTemplateParametersOutput =
  PrivacyBudgetTemplateParametersInput as any as S.Schema<PrivacyBudgetTemplateParametersOutput>;
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
const PrivacyBudgetTemplate = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<PrivacyBudgetTemplate>;
export interface CreatePrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
const CreatePrivacyBudgetTemplateOutput = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<CreatePrivacyBudgetTemplateOutput>;
export interface DeleteAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
}
const DeleteAnalysisTemplateInput = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<DeleteAnalysisTemplateInput>;
export interface DeleteAnalysisTemplateOutput {}
const DeleteAnalysisTemplateOutput = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<DeleteAnalysisTemplateOutput>;
export interface DeleteCollaborationInput {
  collaborationIdentifier: string;
}
const DeleteCollaborationInput = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<DeleteCollaborationInput>;
export interface DeleteCollaborationOutput {}
const DeleteCollaborationOutput =
  DeleteAnalysisTemplateOutput as any as S.Schema<DeleteCollaborationOutput>;
export interface DeleteConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
}
const DeleteConfiguredAudienceModelAssociationInput = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<DeleteConfiguredAudienceModelAssociationInput>;
export interface DeleteConfiguredAudienceModelAssociationOutput {}
const DeleteConfiguredAudienceModelAssociationOutput = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<DeleteConfiguredAudienceModelAssociationOutput>;
export interface DeleteConfiguredTableInput {
  configuredTableIdentifier: string;
}
const DeleteConfiguredTableInput = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<DeleteConfiguredTableInput>;
export interface DeleteConfiguredTableOutput {}
const DeleteConfiguredTableOutput =
  DeleteAnalysisTemplateOutput as any as S.Schema<DeleteConfiguredTableOutput>;
export interface DeleteConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
}
const DeleteConfiguredTableAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<DeleteConfiguredTableAnalysisRuleInput>;
export interface DeleteConfiguredTableAnalysisRuleOutput {}
const DeleteConfiguredTableAnalysisRuleOutput =
  DeleteConfiguredAudienceModelAssociationOutput as any as S.Schema<DeleteConfiguredTableAnalysisRuleOutput>;
export interface DeleteConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
}
const DeleteConfiguredTableAssociationInput = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<DeleteConfiguredTableAssociationInput>;
export interface DeleteConfiguredTableAssociationOutput {}
const DeleteConfiguredTableAssociationOutput =
  DeleteConfiguredAudienceModelAssociationOutput as any as S.Schema<DeleteConfiguredTableAssociationOutput>;
export interface DeleteConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
}
const DeleteConfiguredTableAssociationAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<DeleteConfiguredTableAssociationAnalysisRuleInput>;
export interface DeleteConfiguredTableAssociationAnalysisRuleOutput {}
const DeleteConfiguredTableAssociationAnalysisRuleOutput =
  DeleteConfiguredAudienceModelAssociationOutput as any as S.Schema<DeleteConfiguredTableAssociationAnalysisRuleOutput>;
export interface DeleteIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
}
const DeleteIdMappingTableInput = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<DeleteIdMappingTableInput>;
export interface DeleteIdMappingTableOutput {}
const DeleteIdMappingTableOutput =
  DeleteAnalysisTemplateOutput as any as S.Schema<DeleteIdMappingTableOutput>;
export interface DeleteIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
}
const DeleteIdNamespaceAssociationInput = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<DeleteIdNamespaceAssociationInput>;
export interface DeleteIdNamespaceAssociationOutput {}
const DeleteIdNamespaceAssociationOutput =
  DeleteConfiguredAudienceModelAssociationOutput as any as S.Schema<DeleteIdNamespaceAssociationOutput>;
export interface DeleteIntermediateTableInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
}
const DeleteIntermediateTableInput = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<DeleteIntermediateTableInput>;
export interface DeleteIntermediateTableOutput {}
const DeleteIntermediateTableOutput =
  DeleteAnalysisTemplateOutput as any as S.Schema<DeleteIntermediateTableOutput>;
export interface DeleteIntermediateTableAnalysisRuleInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  analysisRuleType: IntermediateTableAnalysisRuleType;
}
const DeleteIntermediateTableAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<DeleteIntermediateTableAnalysisRuleInput>;
export interface DeleteIntermediateTableAnalysisRuleOutput {}
const DeleteIntermediateTableAnalysisRuleOutput =
  DeleteConfiguredAudienceModelAssociationOutput as any as S.Schema<DeleteIntermediateTableAnalysisRuleOutput>;
export interface DeleteMemberInput {
  collaborationIdentifier: string;
  accountId: string;
}
const DeleteMemberInput = /*@__PURE__*/ __L.at(__c26, 0) as any as S.Schema<DeleteMemberInput>;
export interface DeleteMemberOutput {}
const DeleteMemberOutput = DeleteAnalysisTemplateOutput as any as S.Schema<DeleteMemberOutput>;
export interface DeleteMembershipInput {
  membershipIdentifier: string;
}
const DeleteMembershipInput = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<DeleteMembershipInput>;
export interface DeleteMembershipOutput {}
const DeleteMembershipOutput =
  DeleteAnalysisTemplateOutput as any as S.Schema<DeleteMembershipOutput>;
export interface DeletePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
const DeletePrivacyBudgetTemplateInput = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<DeletePrivacyBudgetTemplateInput>;
export interface DeletePrivacyBudgetTemplateOutput {}
const DeletePrivacyBudgetTemplateOutput =
  DeleteConfiguredAudienceModelAssociationOutput as any as S.Schema<DeletePrivacyBudgetTemplateOutput>;
export interface DisallowIntermediateTableInput {
  membershipIdentifier: string;
  intermediateTableName: string;
  includeDescendants?: boolean;
}
const DisallowIntermediateTableInput = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<DisallowIntermediateTableInput>;
export interface DisallowIntermediateTableOutput {}
const DisallowIntermediateTableOutput = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<DisallowIntermediateTableOutput>;
export type AnalysisLogExportIdentifier = string;
export interface GetAnalysisLogExportInput {
  membershipIdentifier: string;
  analysisLogExportIdentifier: string;
}
const GetAnalysisLogExportInput = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<GetAnalysisLogExportInput>;
export type LogExportAnalysisType = "PROTECTED_QUERY" | (string & {});
const LogExportAnalysisType = S.String;

export type AnalysisLogExportStatus = "IN_PROGRESS" | "SUCCESS" | "FAILED" | (string & {});
const AnalysisLogExportStatus = S.String;

export interface AnalysisLogExportS3OutputConfiguration {
  bucket: string;
  keyPrefix?: string;
}
const AnalysisLogExportS3OutputConfiguration =
  ProtectedJobS3OutputConfigurationInput as any as S.Schema<AnalysisLogExportS3OutputConfiguration>;
export interface AnalysisLogExportOutputConfiguration {
  s3: AnalysisLogExportS3OutputConfiguration;
}
const AnalysisLogExportOutputConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<AnalysisLogExportOutputConfiguration>;
export interface AnalysisLogExportResultConfiguration {
  outputConfiguration: AnalysisLogExportOutputConfiguration;
}
const AnalysisLogExportResultConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<AnalysisLogExportResultConfiguration>;
export interface AnalysisLogExportError {
  code: string;
  message: string;
}
const AnalysisLogExportError = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<AnalysisLogExportError>;
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
const AnalysisLogExport = /*@__PURE__*/ __L.at(__c27, 1) as any as S.Schema<AnalysisLogExport>;
export interface GetAnalysisLogExportOutput {
  analysisLogExport: AnalysisLogExport;
}
const GetAnalysisLogExportOutput = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<GetAnalysisLogExportOutput>;
export interface GetAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
}
const GetAnalysisTemplateInput = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<GetAnalysisTemplateInput>;
export interface GetAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
const GetAnalysisTemplateOutput =
  CreateAnalysisTemplateOutput as any as S.Schema<GetAnalysisTemplateOutput>;
export interface GetCollaborationInput {
  collaborationIdentifier: string;
}
const GetCollaborationInput = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<GetCollaborationInput>;
export interface GetCollaborationOutput {
  collaboration: Collaboration;
}
const GetCollaborationOutput = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<GetCollaborationOutput>;
export interface GetCollaborationAnalysisTemplateInput {
  collaborationIdentifier: string;
  analysisTemplateArn: string;
}
const GetCollaborationAnalysisTemplateInput = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<GetCollaborationAnalysisTemplateInput>;
export interface GetCollaborationAnalysisTemplateOutput {
  collaborationAnalysisTemplate: CollaborationAnalysisTemplate;
}
const GetCollaborationAnalysisTemplateOutput = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<GetCollaborationAnalysisTemplateOutput>;
export type CollaborationChangeRequestIdentifier = string;
export interface GetCollaborationChangeRequestInput {
  collaborationIdentifier: string;
  changeRequestIdentifier: string;
}
const GetCollaborationChangeRequestInput = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<GetCollaborationChangeRequestInput>;
export interface GetCollaborationChangeRequestOutput {
  collaborationChangeRequest: CollaborationChangeRequest;
}
const GetCollaborationChangeRequestOutput =
  CreateCollaborationChangeRequestOutput as any as S.Schema<GetCollaborationChangeRequestOutput>;
export interface GetCollaborationConfiguredAudienceModelAssociationInput {
  collaborationIdentifier: string;
  configuredAudienceModelAssociationIdentifier: string;
}
const GetCollaborationConfiguredAudienceModelAssociationInput = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<GetCollaborationConfiguredAudienceModelAssociationInput>;
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
const CollaborationConfiguredAudienceModelAssociation = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<CollaborationConfiguredAudienceModelAssociation>;
export interface GetCollaborationConfiguredAudienceModelAssociationOutput {
  collaborationConfiguredAudienceModelAssociation: CollaborationConfiguredAudienceModelAssociation;
}
const GetCollaborationConfiguredAudienceModelAssociationOutput = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<GetCollaborationConfiguredAudienceModelAssociationOutput>;
export interface GetCollaborationIdNamespaceAssociationInput {
  collaborationIdentifier: string;
  idNamespaceAssociationIdentifier: string;
}
const GetCollaborationIdNamespaceAssociationInput = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<GetCollaborationIdNamespaceAssociationInput>;
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
const CollaborationIdNamespaceAssociation = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<CollaborationIdNamespaceAssociation>;
export interface GetCollaborationIdNamespaceAssociationOutput {
  collaborationIdNamespaceAssociation: CollaborationIdNamespaceAssociation;
}
const GetCollaborationIdNamespaceAssociationOutput = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<GetCollaborationIdNamespaceAssociationOutput>;
export interface GetCollaborationPrivacyBudgetTemplateInput {
  collaborationIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
const GetCollaborationPrivacyBudgetTemplateInput = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<GetCollaborationPrivacyBudgetTemplateInput>;
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
const CollaborationPrivacyBudgetTemplate = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<CollaborationPrivacyBudgetTemplate>;
export interface GetCollaborationPrivacyBudgetTemplateOutput {
  collaborationPrivacyBudgetTemplate: CollaborationPrivacyBudgetTemplate;
}
const GetCollaborationPrivacyBudgetTemplateOutput = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<GetCollaborationPrivacyBudgetTemplateOutput>;
export interface GetConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
}
const GetConfiguredAudienceModelAssociationInput = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<GetConfiguredAudienceModelAssociationInput>;
export interface GetConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
const GetConfiguredAudienceModelAssociationOutput =
  CreateConfiguredAudienceModelAssociationOutput as any as S.Schema<GetConfiguredAudienceModelAssociationOutput>;
export interface GetConfiguredTableInput {
  configuredTableIdentifier: string;
}
const GetConfiguredTableInput = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<GetConfiguredTableInput>;
export interface GetConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
const GetConfiguredTableOutput = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<GetConfiguredTableOutput>;
export interface GetConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
}
const GetConfiguredTableAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<GetConfiguredTableAnalysisRuleInput>;
export interface GetConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
const GetConfiguredTableAnalysisRuleOutput =
  CreateConfiguredTableAnalysisRuleOutput as any as S.Schema<GetConfiguredTableAnalysisRuleOutput>;
export interface GetConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
}
const GetConfiguredTableAssociationInput = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<GetConfiguredTableAssociationInput>;
export interface GetConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
const GetConfiguredTableAssociationOutput =
  CreateConfiguredTableAssociationOutput as any as S.Schema<GetConfiguredTableAssociationOutput>;
export interface GetConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
}
const GetConfiguredTableAssociationAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<GetConfiguredTableAssociationAnalysisRuleInput>;
export interface GetConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
const GetConfiguredTableAssociationAnalysisRuleOutput =
  CreateConfiguredTableAssociationAnalysisRuleOutput as any as S.Schema<GetConfiguredTableAssociationAnalysisRuleOutput>;
export interface GetIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
}
const GetIdMappingTableInput = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<GetIdMappingTableInput>;
export interface GetIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
const GetIdMappingTableOutput = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<GetIdMappingTableOutput>;
export interface GetIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
}
const GetIdNamespaceAssociationInput = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<GetIdNamespaceAssociationInput>;
export interface GetIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
const GetIdNamespaceAssociationOutput =
  CreateIdNamespaceAssociationOutput as any as S.Schema<GetIdNamespaceAssociationOutput>;
export interface GetIntermediateTableInput {
  intermediateTableIdentifier: string;
  membershipIdentifier: string;
}
const GetIntermediateTableInput = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<GetIntermediateTableInput>;
export interface GetIntermediateTableOutput {
  intermediateTable: IntermediateTable;
}
const GetIntermediateTableOutput =
  CreateIntermediateTableOutput as any as S.Schema<GetIntermediateTableOutput>;
export interface GetIntermediateTableAnalysisRuleInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  analysisRuleType: IntermediateTableAnalysisRuleType;
}
const GetIntermediateTableAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<GetIntermediateTableAnalysisRuleInput>;
export interface GetIntermediateTableAnalysisRuleOutput {
  analysisRule: IntermediateTableAnalysisRule;
}
const GetIntermediateTableAnalysisRuleOutput =
  CreateIntermediateTableAnalysisRuleOutput as any as S.Schema<GetIntermediateTableAnalysisRuleOutput>;
export interface GetMembershipInput {
  membershipIdentifier: string;
}
const GetMembershipInput = /*@__PURE__*/ __L.at(__c30, 5) as any as S.Schema<GetMembershipInput>;
export interface GetMembershipOutput {
  membership: Membership;
}
const GetMembershipOutput = CreateMembershipOutput as any as S.Schema<GetMembershipOutput>;
export interface GetPrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
}
const GetPrivacyBudgetTemplateInput = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<GetPrivacyBudgetTemplateInput>;
export interface GetPrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
const GetPrivacyBudgetTemplateOutput =
  CreatePrivacyBudgetTemplateOutput as any as S.Schema<GetPrivacyBudgetTemplateOutput>;
export type ProtectedJobIdentifier = string;
export interface GetProtectedJobInput {
  membershipIdentifier: string;
  protectedJobIdentifier: string;
}
const GetProtectedJobInput = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<GetProtectedJobInput>;
export type JobParameterName = string;
export type JobParameterValue = string;
export type JobParameterMap = { [key: string]: string | undefined };
const JobParameterMap = ParameterMap as any as S.Schema<JobParameterMap>;
export interface ProtectedJobParameters {
  analysisTemplateArn: string;
  parameters?: { [key: string]: string | undefined };
}
const ProtectedJobParameters = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<ProtectedJobParameters>;
export type ProtectedJobStatus =
  | "SUBMITTED"
  | "STARTED"
  | "CANCELLED"
  | "CANCELLING"
  | "FAILED"
  | "SUCCESS"
  | (string & {});
const ProtectedJobStatus = S.String;

export interface ProtectedJobS3OutputConfigurationOutput {
  bucket: string;
  keyPrefix?: string;
}
const ProtectedJobS3OutputConfigurationOutput =
  ProtectedJobS3OutputConfigurationInput as any as S.Schema<ProtectedJobS3OutputConfigurationOutput>;
export interface ProtectedJobMemberOutputConfigurationOutput {
  accountId: string;
}
const ProtectedJobMemberOutputConfigurationOutput = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<ProtectedJobMemberOutputConfigurationOutput>;
export type ProtectedJobOutputConfigurationOutput =
  | { s3: ProtectedJobS3OutputConfigurationOutput; member?: never }
  | { s3?: never; member: ProtectedJobMemberOutputConfigurationOutput };
const ProtectedJobOutputConfigurationOutput = /*@__PURE__*/ __L.at(__c31, 2);
export interface ProtectedJobResultConfigurationOutput {
  outputConfiguration: ProtectedJobOutputConfigurationOutput;
}
const ProtectedJobResultConfigurationOutput = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<ProtectedJobResultConfigurationOutput>;
export interface BilledJobResourceUtilization {
  units: number;
}
const BilledJobResourceUtilization = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<BilledJobResourceUtilization>;
export interface ProtectedJobStatistics {
  totalDurationInMillis?: number;
  billedResourceUtilization?: BilledJobResourceUtilization;
}
const ProtectedJobStatistics = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<ProtectedJobStatistics>;
export interface ProtectedJobS3Output {
  location: string;
}
const ProtectedJobS3Output = /*@__PURE__*/ __L.at(
  __c31,
  6,
) as any as S.Schema<ProtectedJobS3Output>;
export interface ProtectedJobSingleMemberOutput {
  accountId: string;
}
const ProtectedJobSingleMemberOutput =
  ProtectedJobMemberOutputConfigurationOutput as any as S.Schema<ProtectedJobSingleMemberOutput>;
export type ProtectedJobMemberOutputList = ProtectedJobSingleMemberOutput[];
const ProtectedJobMemberOutputList = /*@__PURE__*/ __L.at(__c31, 7);
export type ProtectedJobOutput =
  | { s3: ProtectedJobS3Output; memberList?: never }
  | { s3?: never; memberList: ProtectedJobSingleMemberOutput[] };
const ProtectedJobOutput = /*@__PURE__*/ __L.at(__c32, 0);
export interface ProtectedJobResult {
  output: ProtectedJobOutput;
}
const ProtectedJobResult = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<ProtectedJobResult>;
export interface ProtectedJobError {
  message: string;
  code: string;
}
const ProtectedJobError = /*@__PURE__*/ __L.at(__c32, 2) as any as S.Schema<ProtectedJobError>;
export type ProtectedJobWorkerComputeType = "CR.1X" | "CR.4X" | (string & {});
const ProtectedJobWorkerComputeType = S.String;

export type SparkPropertyKey = string;
export type SparkPropertyValue = string;
export type SparkProperties = { [key: string]: string | undefined };
const SparkProperties = ParameterMap as any as S.Schema<SparkProperties>;
export type WorkerComputeConfigurationProperties = { spark: { [key: string]: string | undefined } };
const WorkerComputeConfigurationProperties = /*@__PURE__*/ __L.at(__c32, 3);
export interface ProtectedJobWorkerComputeConfiguration {
  type: ProtectedJobWorkerComputeType;
  number: number;
  properties?: WorkerComputeConfigurationProperties;
}
const ProtectedJobWorkerComputeConfiguration = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<ProtectedJobWorkerComputeConfiguration>;
export type ProtectedJobComputeConfiguration = { worker: ProtectedJobWorkerComputeConfiguration };
const ProtectedJobComputeConfiguration = /*@__PURE__*/ __L.at(__c32, 5);
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
const ProtectedJob = /*@__PURE__*/ __L.at(__c32, 6) as any as S.Schema<ProtectedJob>;
export interface GetProtectedJobOutput {
  protectedJob: ProtectedJob;
}
const GetProtectedJobOutput = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<GetProtectedJobOutput>;
export type ProtectedQueryIdentifier = string;
export interface GetProtectedQueryInput {
  membershipIdentifier: string;
  protectedQueryIdentifier: string;
}
const GetProtectedQueryInput = /*@__PURE__*/ __L.at(
  __c33,
  0,
) as any as S.Schema<GetProtectedQueryInput>;
export interface ProtectedQuerySQLParameters {
  queryString?: string;
  analysisTemplateArn?: string;
  parameters?: { [key: string]: string | undefined };
}
const ProtectedQuerySQLParameters = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<ProtectedQuerySQLParameters>;
export type ProtectedQueryStatus = string;
export interface ProtectedQueryMemberOutputConfiguration {
  accountId: string;
}
const ProtectedQueryMemberOutputConfiguration =
  ProtectedJobMemberOutputConfigurationOutput as any as S.Schema<ProtectedQueryMemberOutputConfiguration>;
export type ProtectedQueryDistributeOutputConfigurationLocation =
  | { s3: ProtectedQueryS3OutputConfiguration; member?: never }
  | { s3?: never; member: ProtectedQueryMemberOutputConfiguration };
const ProtectedQueryDistributeOutputConfigurationLocation = /*@__PURE__*/ __L.at(__c33, 2);
export type ProtectedQueryDistributeOutputConfigurationLocations =
  ProtectedQueryDistributeOutputConfigurationLocation[];
const ProtectedQueryDistributeOutputConfigurationLocations = /*@__PURE__*/ __L.at(__c33, 3);
export interface ProtectedQueryDistributeOutputConfiguration {
  locations: ProtectedQueryDistributeOutputConfigurationLocation[];
}
const ProtectedQueryDistributeOutputConfiguration = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<ProtectedQueryDistributeOutputConfiguration>;
export interface IntermediateTableOutputConfiguration {
  id: string;
  arn: string;
  name: string;
}
const IntermediateTableOutputConfiguration = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<IntermediateTableOutputConfiguration>;
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
const ProtectedQueryOutputConfiguration = /*@__PURE__*/ __L.at(__c33, 6);
export interface ProtectedQueryResultConfiguration {
  outputConfiguration: ProtectedQueryOutputConfiguration;
}
const ProtectedQueryResultConfiguration = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<ProtectedQueryResultConfiguration>;
export interface BilledResourceUtilization {
  units: number;
}
export interface ProtectedQueryStatistics {
  totalDurationInMillis?: number;
  billedResourceUtilization?: BilledResourceUtilization;
}
const ProtectedQueryStatistics =
  ProtectedJobStatistics as any as S.Schema<ProtectedQueryStatistics>;
export interface ProtectedQueryS3Output {
  location: string;
}
const ProtectedQueryS3Output = ProtectedJobS3Output as any as S.Schema<ProtectedQueryS3Output>;
export interface ProtectedQuerySingleMemberOutput {
  accountId: string;
}
const ProtectedQuerySingleMemberOutput =
  ProtectedJobMemberOutputConfigurationOutput as any as S.Schema<ProtectedQuerySingleMemberOutput>;
export type ProtectedQueryMemberOutputList = ProtectedQuerySingleMemberOutput[];
const ProtectedQueryMemberOutputList = /*@__PURE__*/ __L.at(__c34, 0);
export interface ProtectedQueryDistributeOutput {
  s3?: ProtectedQueryS3Output;
  memberList?: ProtectedQuerySingleMemberOutput[];
}
const ProtectedQueryDistributeOutput = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<ProtectedQueryDistributeOutput>;
export type ProtectedQueryOutput =
  | { s3: ProtectedQueryS3Output; memberList?: never; distribute?: never }
  | { s3?: never; memberList: ProtectedQuerySingleMemberOutput[]; distribute?: never }
  | { s3?: never; memberList?: never; distribute: ProtectedQueryDistributeOutput };
const ProtectedQueryOutput = /*@__PURE__*/ __L.at(__c34, 2);
export interface ProtectedQueryResult {
  output: ProtectedQueryOutput;
}
const ProtectedQueryResult = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<ProtectedQueryResult>;
export interface ProtectedQueryError {
  message: string;
  code: string;
}
const ProtectedQueryError = ProtectedJobError as any as S.Schema<ProtectedQueryError>;
export type DifferentialPrivacyAggregationType =
  | "AVG"
  | "COUNT"
  | "COUNT_DISTINCT"
  | "SUM"
  | "STDDEV"
  | (string & {});
const DifferentialPrivacyAggregationType = S.String;

export type DifferentialPrivacyAggregationExpression = string;
export interface DifferentialPrivacySensitivityParameters {
  aggregationType: DifferentialPrivacyAggregationType;
  aggregationExpression: string;
  userContributionLimit: number;
  minColumnValue?: number;
  maxColumnValue?: number;
}
const DifferentialPrivacySensitivityParameters = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<DifferentialPrivacySensitivityParameters>;
export type DifferentialPrivacySensitivityParametersList =
  DifferentialPrivacySensitivityParameters[];
const DifferentialPrivacySensitivityParametersList = /*@__PURE__*/ __L.at(__c34, 5);
export interface DifferentialPrivacyParameters {
  sensitivityParameters: DifferentialPrivacySensitivityParameters[];
}
const DifferentialPrivacyParameters = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<DifferentialPrivacyParameters>;
export type WorkerComputeType = "CR.1X" | "CR.4X" | "CR.8X" | (string & {});
const WorkerComputeType = S.String;

export interface WorkerComputeConfiguration {
  type?: WorkerComputeType;
  number?: number;
  properties?: WorkerComputeConfigurationProperties;
}
const WorkerComputeConfiguration = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<WorkerComputeConfiguration>;
export type ComputeConfiguration = { worker: WorkerComputeConfiguration };
const ComputeConfiguration = /*@__PURE__*/ __L.at(__c35, 0);
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
const ProtectedQuery = /*@__PURE__*/ __L.at(__c35, 1) as any as S.Schema<ProtectedQuery>;
export interface GetProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
const GetProtectedQueryOutput = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<GetProtectedQueryOutput>;
export interface GetSchemaInput {
  collaborationIdentifier: string;
  name: string;
}
const GetSchemaInput = /*@__PURE__*/ __L.at(__c35, 3) as any as S.Schema<GetSchemaInput>;
export interface GetSchemaOutput {
  schema: Schema;
}
const GetSchemaOutput = /*@__PURE__*/ __L.at(__c35, 4) as any as S.Schema<GetSchemaOutput>;
export interface GetSchemaAnalysisRuleInput {
  collaborationIdentifier: string;
  name: string;
  type: AnalysisRuleType;
}
const GetSchemaAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<GetSchemaAnalysisRuleInput>;
export interface GetSchemaAnalysisRuleOutput {
  analysisRule: AnalysisRule;
}
const GetSchemaAnalysisRuleOutput = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<GetSchemaAnalysisRuleOutput>;
export type PaginationToken = string;
export type MaxResults = number;
export interface ListAnalysisLogExportsInput {
  membershipIdentifier: string;
  analysisIdentifier?: string;
  status?: AnalysisLogExportStatus;
  nextToken?: string;
  maxResults?: number;
}
const ListAnalysisLogExportsInput = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<ListAnalysisLogExportsInput>;
export interface AnalysisLogExportSummary {
  analysisLogExportId: string;
  analysisId: string;
  analysisType: LogExportAnalysisType;
  status: AnalysisLogExportStatus;
  createTime: Date;
}
const AnalysisLogExportSummary = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<AnalysisLogExportSummary>;
export type AnalysisLogExportSummaryList = AnalysisLogExportSummary[];
const AnalysisLogExportSummaryList = /*@__PURE__*/ __L.at(__c36, 1);
export interface ListAnalysisLogExportsOutput {
  nextToken?: string;
  analysisLogExports: AnalysisLogExportSummary[];
}
const ListAnalysisLogExportsOutput = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<ListAnalysisLogExportsOutput>;
export interface ListAnalysisTemplatesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAnalysisTemplatesInput = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<ListAnalysisTemplatesInput>;
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
const AnalysisTemplateSummary = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<AnalysisTemplateSummary>;
export type AnalysisTemplateSummaryList = AnalysisTemplateSummary[];
const AnalysisTemplateSummaryList = /*@__PURE__*/ __L.at(__c36, 5);
export interface ListAnalysisTemplatesOutput {
  nextToken?: string;
  analysisTemplateSummaries: AnalysisTemplateSummary[];
}
const ListAnalysisTemplatesOutput = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<ListAnalysisTemplatesOutput>;
export interface ListCollaborationAnalysisTemplatesInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCollaborationAnalysisTemplatesInput = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<ListCollaborationAnalysisTemplatesInput>;
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
const CollaborationAnalysisTemplateSummary = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<CollaborationAnalysisTemplateSummary>;
export type CollaborationAnalysisTemplateSummaryList = CollaborationAnalysisTemplateSummary[];
const CollaborationAnalysisTemplateSummaryList = /*@__PURE__*/ __L.at(__c37, 1);
export interface ListCollaborationAnalysisTemplatesOutput {
  nextToken?: string;
  collaborationAnalysisTemplateSummaries: CollaborationAnalysisTemplateSummary[];
}
const ListCollaborationAnalysisTemplatesOutput = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<ListCollaborationAnalysisTemplatesOutput>;
export interface ListCollaborationChangeRequestsInput {
  collaborationIdentifier: string;
  status?: ChangeRequestStatus;
  nextToken?: string;
  maxResults?: number;
}
const ListCollaborationChangeRequestsInput = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<ListCollaborationChangeRequestsInput>;
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
const CollaborationChangeRequestSummary =
  CollaborationChangeRequest as any as S.Schema<CollaborationChangeRequestSummary>;
export type CollaborationChangeRequestSummaryList = CollaborationChangeRequestSummary[];
const CollaborationChangeRequestSummaryList = /*@__PURE__*/ __L.at(__c37, 4);
export interface ListCollaborationChangeRequestsOutput {
  collaborationChangeRequestSummaries: CollaborationChangeRequestSummary[];
  nextToken?: string;
}
const ListCollaborationChangeRequestsOutput = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<ListCollaborationChangeRequestsOutput>;
export interface ListCollaborationConfiguredAudienceModelAssociationsInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCollaborationConfiguredAudienceModelAssociationsInput = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<ListCollaborationConfiguredAudienceModelAssociationsInput>;
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
const CollaborationConfiguredAudienceModelAssociationSummary = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<CollaborationConfiguredAudienceModelAssociationSummary>;
export type CollaborationConfiguredAudienceModelAssociationSummaryList =
  CollaborationConfiguredAudienceModelAssociationSummary[];
const CollaborationConfiguredAudienceModelAssociationSummaryList = /*@__PURE__*/ __L.at(__c38, 0);
export interface ListCollaborationConfiguredAudienceModelAssociationsOutput {
  collaborationConfiguredAudienceModelAssociationSummaries: CollaborationConfiguredAudienceModelAssociationSummary[];
  nextToken?: string;
}
const ListCollaborationConfiguredAudienceModelAssociationsOutput = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<ListCollaborationConfiguredAudienceModelAssociationsOutput>;
export interface ListCollaborationIdNamespaceAssociationsInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCollaborationIdNamespaceAssociationsInput = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<ListCollaborationIdNamespaceAssociationsInput>;
export interface IdNamespaceAssociationInputReferencePropertiesSummary {
  idNamespaceType: IdNamespaceType;
}
const IdNamespaceAssociationInputReferencePropertiesSummary = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<IdNamespaceAssociationInputReferencePropertiesSummary>;
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
const CollaborationIdNamespaceAssociationSummary = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<CollaborationIdNamespaceAssociationSummary>;
export type CollaborationIdNamespaceAssociationSummaryList =
  CollaborationIdNamespaceAssociationSummary[];
const CollaborationIdNamespaceAssociationSummaryList = /*@__PURE__*/ __L.at(__c38, 5);
export interface ListCollaborationIdNamespaceAssociationsOutput {
  nextToken?: string;
  collaborationIdNamespaceAssociationSummaries: CollaborationIdNamespaceAssociationSummary[];
}
const ListCollaborationIdNamespaceAssociationsOutput = /*@__PURE__*/ __L.at(
  __c38,
  6,
) as any as S.Schema<ListCollaborationIdNamespaceAssociationsOutput>;
export interface ListCollaborationPrivacyBudgetsInput {
  collaborationIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  maxResults?: number;
  nextToken?: string;
  accessBudgetResourceArn?: string;
}
const ListCollaborationPrivacyBudgetsInput = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<ListCollaborationPrivacyBudgetsInput>;
export interface DifferentialPrivacyPrivacyBudgetAggregation {
  type: DifferentialPrivacyAggregationType;
  maxCount: number;
  remainingCount: number;
}
const DifferentialPrivacyPrivacyBudgetAggregation = /*@__PURE__*/ __L.at(
  __c39,
  0,
) as any as S.Schema<DifferentialPrivacyPrivacyBudgetAggregation>;
export type DifferentialPrivacyPrivacyBudgetAggregationList =
  DifferentialPrivacyPrivacyBudgetAggregation[];
const DifferentialPrivacyPrivacyBudgetAggregationList = /*@__PURE__*/ __L.at(__c39, 1);
export interface DifferentialPrivacyPrivacyBudget {
  aggregations: DifferentialPrivacyPrivacyBudgetAggregation[];
  epsilon: number;
}
const DifferentialPrivacyPrivacyBudget = /*@__PURE__*/ __L.at(
  __c39,
  2,
) as any as S.Schema<DifferentialPrivacyPrivacyBudget>;
export type RemainingBudget = number;
export interface AccessBudgetDetails {
  startTime: Date;
  endTime?: Date;
  remainingBudget: number;
  budget: number;
  budgetType: AccessBudgetType;
  autoRefresh?: AutoRefreshMode;
}
const AccessBudgetDetails = /*@__PURE__*/ __L.at(__c39, 3) as any as S.Schema<AccessBudgetDetails>;
export type AccessBudgetDetailsList = AccessBudgetDetails[];
const AccessBudgetDetailsList = /*@__PURE__*/ __L.at(__c39, 4);
export interface AccessBudget {
  resourceArn: string;
  details: AccessBudgetDetails[];
  aggregateRemainingBudget: number;
}
const AccessBudget = /*@__PURE__*/ __L.at(__c39, 5) as any as S.Schema<AccessBudget>;
export type PrivacyBudget =
  | { differentialPrivacy: DifferentialPrivacyPrivacyBudget; accessBudget?: never }
  | { differentialPrivacy?: never; accessBudget: AccessBudget };
const PrivacyBudget = /*@__PURE__*/ __L.at(__c39, 6);
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
const CollaborationPrivacyBudgetSummary = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<CollaborationPrivacyBudgetSummary>;
export type CollaborationPrivacyBudgetSummaryList = CollaborationPrivacyBudgetSummary[];
const CollaborationPrivacyBudgetSummaryList = /*@__PURE__*/ __L.at(__c40, 0);
export interface ListCollaborationPrivacyBudgetsOutput {
  collaborationPrivacyBudgetSummaries: CollaborationPrivacyBudgetSummary[];
  nextToken?: string;
}
const ListCollaborationPrivacyBudgetsOutput = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<ListCollaborationPrivacyBudgetsOutput>;
export interface ListCollaborationPrivacyBudgetTemplatesInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCollaborationPrivacyBudgetTemplatesInput = /*@__PURE__*/ __L.at(
  __c40,
  2,
) as any as S.Schema<ListCollaborationPrivacyBudgetTemplatesInput>;
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
const CollaborationPrivacyBudgetTemplateSummary = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<CollaborationPrivacyBudgetTemplateSummary>;
export type CollaborationPrivacyBudgetTemplateSummaryList =
  CollaborationPrivacyBudgetTemplateSummary[];
const CollaborationPrivacyBudgetTemplateSummaryList = /*@__PURE__*/ __L.at(__c40, 4);
export interface ListCollaborationPrivacyBudgetTemplatesOutput {
  nextToken?: string;
  collaborationPrivacyBudgetTemplateSummaries: CollaborationPrivacyBudgetTemplateSummary[];
}
const ListCollaborationPrivacyBudgetTemplatesOutput = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<ListCollaborationPrivacyBudgetTemplatesOutput>;
export type FilterableMemberStatus = string;
export interface ListCollaborationsInput {
  nextToken?: string;
  maxResults?: number;
  memberStatus?: string;
}
const ListCollaborationsInput = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<ListCollaborationsInput>;
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
const CollaborationSummary = /*@__PURE__*/ __L.at(
  __c40,
  7,
) as any as S.Schema<CollaborationSummary>;
export type CollaborationSummaryList = CollaborationSummary[];
const CollaborationSummaryList = /*@__PURE__*/ __L.at(__c41, 0);
export interface ListCollaborationsOutput {
  nextToken?: string;
  collaborationList: CollaborationSummary[];
}
const ListCollaborationsOutput = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<ListCollaborationsOutput>;
export interface ListConfiguredAudienceModelAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListConfiguredAudienceModelAssociationsInput = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<ListConfiguredAudienceModelAssociationsInput>;
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
const ConfiguredAudienceModelAssociationSummary = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<ConfiguredAudienceModelAssociationSummary>;
export type ConfiguredAudienceModelAssociationSummaryList =
  ConfiguredAudienceModelAssociationSummary[];
const ConfiguredAudienceModelAssociationSummaryList = /*@__PURE__*/ __L.at(__c41, 4);
export interface ListConfiguredAudienceModelAssociationsOutput {
  configuredAudienceModelAssociationSummaries: ConfiguredAudienceModelAssociationSummary[];
  nextToken?: string;
}
const ListConfiguredAudienceModelAssociationsOutput = /*@__PURE__*/ __L.at(
  __c41,
  5,
) as any as S.Schema<ListConfiguredAudienceModelAssociationsOutput>;
export interface ListConfiguredTableAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListConfiguredTableAssociationsInput = /*@__PURE__*/ __L.at(
  __c41,
  6,
) as any as S.Schema<ListConfiguredTableAssociationsInput>;
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
const ConfiguredTableAssociationSummary = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<ConfiguredTableAssociationSummary>;
export type ConfiguredTableAssociationSummaryList = ConfiguredTableAssociationSummary[];
const ConfiguredTableAssociationSummaryList = /*@__PURE__*/ __L.at(__c42, 0);
export interface ListConfiguredTableAssociationsOutput {
  configuredTableAssociationSummaries: ConfiguredTableAssociationSummary[];
  nextToken?: string;
}
const ListConfiguredTableAssociationsOutput = /*@__PURE__*/ __L.at(
  __c42,
  1,
) as any as S.Schema<ListConfiguredTableAssociationsOutput>;
export interface ListConfiguredTablesInput {
  nextToken?: string;
  maxResults?: number;
}
const ListConfiguredTablesInput = /*@__PURE__*/ __L.at(
  __c42,
  2,
) as any as S.Schema<ListConfiguredTablesInput>;
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
const ConfiguredTableSummary = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<ConfiguredTableSummary>;
export type ConfiguredTableSummaryList = ConfiguredTableSummary[];
const ConfiguredTableSummaryList = /*@__PURE__*/ __L.at(__c42, 4);
export interface ListConfiguredTablesOutput {
  configuredTableSummaries: ConfiguredTableSummary[];
  nextToken?: string;
}
const ListConfiguredTablesOutput = /*@__PURE__*/ __L.at(
  __c42,
  5,
) as any as S.Schema<ListConfiguredTablesOutput>;
export interface ListIdMappingTablesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListIdMappingTablesInput = /*@__PURE__*/ __L.at(
  __c42,
  6,
) as any as S.Schema<ListIdMappingTablesInput>;
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
const IdMappingTableSummary = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<IdMappingTableSummary>;
export type IdMappingTableSummaryList = IdMappingTableSummary[];
const IdMappingTableSummaryList = /*@__PURE__*/ __L.at(__c43, 0);
export interface ListIdMappingTablesOutput {
  idMappingTableSummaries: IdMappingTableSummary[];
  nextToken?: string;
}
const ListIdMappingTablesOutput = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<ListIdMappingTablesOutput>;
export interface ListIdNamespaceAssociationsInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListIdNamespaceAssociationsInput = /*@__PURE__*/ __L.at(
  __c43,
  2,
) as any as S.Schema<ListIdNamespaceAssociationsInput>;
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
const IdNamespaceAssociationSummary = /*@__PURE__*/ __L.at(
  __c43,
  3,
) as any as S.Schema<IdNamespaceAssociationSummary>;
export type IdNamespaceAssociationSummaryList = IdNamespaceAssociationSummary[];
const IdNamespaceAssociationSummaryList = /*@__PURE__*/ __L.at(__c43, 4);
export interface ListIdNamespaceAssociationsOutput {
  nextToken?: string;
  idNamespaceAssociationSummaries: IdNamespaceAssociationSummary[];
}
const ListIdNamespaceAssociationsOutput = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<ListIdNamespaceAssociationsOutput>;
export interface ListIntermediateTablesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListIntermediateTablesInput = /*@__PURE__*/ __L.at(
  __c43,
  6,
) as any as S.Schema<ListIntermediateTablesInput>;
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
const IntermediateTableSummary = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<IntermediateTableSummary>;
export type IntermediateTableSummaryList = IntermediateTableSummary[];
const IntermediateTableSummaryList = /*@__PURE__*/ __L.at(__c44, 0);
export interface ListIntermediateTablesOutput {
  intermediateTableSummaries: IntermediateTableSummary[];
  nextToken?: string;
}
const ListIntermediateTablesOutput = /*@__PURE__*/ __L.at(
  __c44,
  1,
) as any as S.Schema<ListIntermediateTablesOutput>;
export interface ListIntermediateTableVersionsInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListIntermediateTableVersionsInput = /*@__PURE__*/ __L.at(
  __c44,
  2,
) as any as S.Schema<ListIntermediateTableVersionsInput>;
export type IntermediateTableVersionStatus =
  | "POPULATE_STARTED"
  | "POPULATE_SUCCESS"
  | "POPULATE_FAILED"
  | "RETENTION_PERIOD_EXPIRED"
  | (string & {});
const IntermediateTableVersionStatus = S.String;

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
const IntermediateTableVersionSummary = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<IntermediateTableVersionSummary>;
export type IntermediateTableVersionSummaryList = IntermediateTableVersionSummary[];
const IntermediateTableVersionSummaryList = /*@__PURE__*/ __L.at(__c44, 4);
export interface ListIntermediateTableVersionsOutput {
  intermediateTableVersionSummaries: IntermediateTableVersionSummary[];
  nextToken?: string;
}
const ListIntermediateTableVersionsOutput = /*@__PURE__*/ __L.at(
  __c44,
  5,
) as any as S.Schema<ListIntermediateTableVersionsOutput>;
export interface ListMembersInput {
  collaborationIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListMembersInput = /*@__PURE__*/ __L.at(__c44, 6) as any as S.Schema<ListMembersInput>;
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
const MemberSummary = /*@__PURE__*/ __L.at(__c44, 7) as any as S.Schema<MemberSummary>;
export type MemberSummaryList = MemberSummary[];
const MemberSummaryList = /*@__PURE__*/ __L.at(__c45, 0);
export interface ListMembersOutput {
  nextToken?: string;
  memberSummaries: MemberSummary[];
}
const ListMembersOutput = /*@__PURE__*/ __L.at(__c45, 1) as any as S.Schema<ListMembersOutput>;
export interface ListMembershipsInput {
  nextToken?: string;
  maxResults?: number;
  status?: string;
}
const ListMembershipsInput = /*@__PURE__*/ __L.at(
  __c45,
  2,
) as any as S.Schema<ListMembershipsInput>;
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
const MembershipSummary = /*@__PURE__*/ __L.at(__c45, 3) as any as S.Schema<MembershipSummary>;
export type MembershipSummaryList = MembershipSummary[];
const MembershipSummaryList = /*@__PURE__*/ __L.at(__c45, 4);
export interface ListMembershipsOutput {
  nextToken?: string;
  membershipSummaries: MembershipSummary[];
}
const ListMembershipsOutput = /*@__PURE__*/ __L.at(
  __c45,
  5,
) as any as S.Schema<ListMembershipsOutput>;
export interface ListPrivacyBudgetsInput {
  membershipIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  nextToken?: string;
  maxResults?: number;
  accessBudgetResourceArn?: string;
}
const ListPrivacyBudgetsInput = /*@__PURE__*/ __L.at(
  __c45,
  6,
) as any as S.Schema<ListPrivacyBudgetsInput>;
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
const PrivacyBudgetSummary = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<PrivacyBudgetSummary>;
export type PrivacyBudgetSummaryList = PrivacyBudgetSummary[];
const PrivacyBudgetSummaryList = /*@__PURE__*/ __L.at(__c46, 0);
export interface ListPrivacyBudgetsOutput {
  privacyBudgetSummaries: PrivacyBudgetSummary[];
  nextToken?: string;
}
const ListPrivacyBudgetsOutput = /*@__PURE__*/ __L.at(
  __c46,
  1,
) as any as S.Schema<ListPrivacyBudgetsOutput>;
export interface ListPrivacyBudgetTemplatesInput {
  membershipIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListPrivacyBudgetTemplatesInput = /*@__PURE__*/ __L.at(
  __c46,
  2,
) as any as S.Schema<ListPrivacyBudgetTemplatesInput>;
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
const PrivacyBudgetTemplateSummary = /*@__PURE__*/ __L.at(
  __c46,
  3,
) as any as S.Schema<PrivacyBudgetTemplateSummary>;
export type PrivacyBudgetTemplateSummaryList = PrivacyBudgetTemplateSummary[];
const PrivacyBudgetTemplateSummaryList = /*@__PURE__*/ __L.at(__c46, 4);
export interface ListPrivacyBudgetTemplatesOutput {
  nextToken?: string;
  privacyBudgetTemplateSummaries: PrivacyBudgetTemplateSummary[];
}
const ListPrivacyBudgetTemplatesOutput = /*@__PURE__*/ __L.at(
  __c46,
  5,
) as any as S.Schema<ListPrivacyBudgetTemplatesOutput>;
export interface ListProtectedJobsInput {
  membershipIdentifier: string;
  status?: ProtectedJobStatus;
  nextToken?: string;
  maxResults?: number;
}
const ListProtectedJobsInput = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<ListProtectedJobsInput>;
export type ProtectedJobAnalysisType = "DIRECT_ANALYSIS" | (string & {});
const ProtectedJobAnalysisType = S.String;

export type ProtectedJobReceiverAccountIds = string[];
const ProtectedJobReceiverAccountIds =
  AnalysisTemplateArnList as any as S.Schema<ProtectedJobReceiverAccountIds>;
export interface ProtectedJobDirectAnalysisConfigurationDetails {
  receiverAccountIds?: string[];
}
const ProtectedJobDirectAnalysisConfigurationDetails = /*@__PURE__*/ __L.at(
  __c46,
  7,
) as any as S.Schema<ProtectedJobDirectAnalysisConfigurationDetails>;
export type ProtectedJobConfigurationDetails = {
  directAnalysisConfigurationDetails: ProtectedJobDirectAnalysisConfigurationDetails;
};
const ProtectedJobConfigurationDetails = /*@__PURE__*/ __L.at(__c47, 0);
export interface ProtectedJobReceiverConfiguration {
  analysisType: ProtectedJobAnalysisType;
  configurationDetails?: ProtectedJobConfigurationDetails;
}
const ProtectedJobReceiverConfiguration = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<ProtectedJobReceiverConfiguration>;
export type ProtectedJobReceiverConfigurations = ProtectedJobReceiverConfiguration[];
const ProtectedJobReceiverConfigurations = /*@__PURE__*/ __L.at(__c47, 2);
export interface ProtectedJobSummary {
  id: string;
  membershipId: string;
  membershipArn: string;
  createTime: Date;
  status: ProtectedJobStatus;
  receiverConfigurations: ProtectedJobReceiverConfiguration[];
  jobComputePayerAccountId?: string;
}
const ProtectedJobSummary = /*@__PURE__*/ __L.at(__c47, 3) as any as S.Schema<ProtectedJobSummary>;
export type ProtectedJobSummaryList = ProtectedJobSummary[];
const ProtectedJobSummaryList = /*@__PURE__*/ __L.at(__c47, 4);
export interface ListProtectedJobsOutput {
  nextToken?: string;
  protectedJobs: ProtectedJobSummary[];
}
const ListProtectedJobsOutput = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<ListProtectedJobsOutput>;
export interface ListProtectedQueriesInput {
  membershipIdentifier: string;
  status?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListProtectedQueriesInput = /*@__PURE__*/ __L.at(
  __c47,
  6,
) as any as S.Schema<ListProtectedQueriesInput>;
export type ReceiverAccountIds = string[];
export interface DirectAnalysisConfigurationDetails {
  receiverAccountIds?: string[];
}
export type ConfigurationDetails = {
  directAnalysisConfigurationDetails: DirectAnalysisConfigurationDetails;
};
const ConfigurationDetails =
  ProtectedJobConfigurationDetails as any as S.Schema<ConfigurationDetails>;
export interface ReceiverConfiguration {
  analysisType: AnalysisType;
  configurationDetails?: ConfigurationDetails;
}
const ReceiverConfiguration = /*@__PURE__*/ __L.at(
  __c47,
  7,
) as any as S.Schema<ReceiverConfiguration>;
export type ReceiverConfigurationsList = ReceiverConfiguration[];
const ReceiverConfigurationsList = /*@__PURE__*/ __L.at(__c48, 0);
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
const ProtectedQuerySummary = /*@__PURE__*/ __L.at(
  __c48,
  1,
) as any as S.Schema<ProtectedQuerySummary>;
export type ProtectedQuerySummaryList = ProtectedQuerySummary[];
const ProtectedQuerySummaryList = /*@__PURE__*/ __L.at(__c48, 2);
export interface ListProtectedQueriesOutput {
  nextToken?: string;
  protectedQueries: ProtectedQuerySummary[];
}
const ListProtectedQueriesOutput = /*@__PURE__*/ __L.at(
  __c48,
  3,
) as any as S.Schema<ListProtectedQueriesOutput>;
export interface ListSchemasInput {
  collaborationIdentifier: string;
  schemaType?: SchemaType;
  nextToken?: string;
  maxResults?: number;
}
const ListSchemasInput = /*@__PURE__*/ __L.at(__c48, 4) as any as S.Schema<ListSchemasInput>;
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
const SchemaSummary = /*@__PURE__*/ __L.at(__c48, 5) as any as S.Schema<SchemaSummary>;
export type SchemaSummaryList = SchemaSummary[];
const SchemaSummaryList = /*@__PURE__*/ __L.at(__c48, 6);
export interface ListSchemasOutput {
  schemaSummaries: SchemaSummary[];
  nextToken?: string;
}
const ListSchemasOutput = /*@__PURE__*/ __L.at(__c48, 7) as any as S.Schema<ListSchemasOutput>;
export type CleanroomsArn = string;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c49,
  0,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c49,
  1,
) as any as S.Schema<ListTagsForResourceOutput>;
export type JobType = "BATCH" | "INCREMENTAL" | "DELETE_ONLY" | (string & {});
const JobType = S.String;

export interface PopulateIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
  jobType?: JobType;
}
const PopulateIdMappingTableInput = /*@__PURE__*/ __L.at(
  __c49,
  2,
) as any as S.Schema<PopulateIdMappingTableInput>;
export interface PopulateIdMappingTableOutput {
  idMappingJobId: string;
}
const PopulateIdMappingTableOutput = /*@__PURE__*/ __L.at(
  __c49,
  3,
) as any as S.Schema<PopulateIdMappingTableOutput>;
export type IntermediateTableComputeConfiguration = {
  queryComputeConfiguration: WorkerComputeConfiguration;
};
const IntermediateTableComputeConfiguration = /*@__PURE__*/ __L.at(__c49, 4);
export interface PopulateIntermediateTableInput {
  intermediateTableIdentifier: string;
  membershipIdentifier: string;
  parameters?: { [key: string]: string | undefined };
  computeConfiguration?: IntermediateTableComputeConfiguration;
  analysisPayerAccountId?: string;
}
const PopulateIntermediateTableInput = /*@__PURE__*/ __L.at(
  __c49,
  5,
) as any as S.Schema<PopulateIntermediateTableInput>;
export interface PopulateIntermediateTableOutput {
  analysisId: string;
  analysisType: PopulateIntermediateTableAnalysisType;
  versionId: string;
}
const PopulateIntermediateTableOutput = /*@__PURE__*/ __L.at(
  __c49,
  6,
) as any as S.Schema<PopulateIntermediateTableOutput>;
export interface DifferentialPrivacyPreviewParametersInput {
  epsilon: number;
  usersNoisePerQuery: number;
}
const DifferentialPrivacyPreviewParametersInput =
  DifferentialPrivacyTemplateParametersInput as any as S.Schema<DifferentialPrivacyPreviewParametersInput>;
export type PreviewPrivacyImpactParametersInput = {
  differentialPrivacy: DifferentialPrivacyPreviewParametersInput;
};
const PreviewPrivacyImpactParametersInput = /*@__PURE__*/ __L.at(__c49, 7);
export interface PreviewPrivacyImpactInput {
  membershipIdentifier: string;
  parameters: PreviewPrivacyImpactParametersInput;
}
const PreviewPrivacyImpactInput = /*@__PURE__*/ __L.at(
  __c50,
  0,
) as any as S.Schema<PreviewPrivacyImpactInput>;
export interface DifferentialPrivacyPreviewAggregation {
  type: DifferentialPrivacyAggregationType;
  maxCount: number;
}
const DifferentialPrivacyPreviewAggregation = /*@__PURE__*/ __L.at(
  __c50,
  1,
) as any as S.Schema<DifferentialPrivacyPreviewAggregation>;
export type DifferentialPrivacyPreviewAggregationList = DifferentialPrivacyPreviewAggregation[];
const DifferentialPrivacyPreviewAggregationList = /*@__PURE__*/ __L.at(__c50, 2);
export interface DifferentialPrivacyPrivacyImpact {
  aggregations: DifferentialPrivacyPreviewAggregation[];
}
const DifferentialPrivacyPrivacyImpact = /*@__PURE__*/ __L.at(
  __c50,
  3,
) as any as S.Schema<DifferentialPrivacyPrivacyImpact>;
export type PrivacyImpact = { differentialPrivacy: DifferentialPrivacyPrivacyImpact };
const PrivacyImpact = /*@__PURE__*/ __L.at(__c50, 4);
export interface PreviewPrivacyImpactOutput {
  privacyImpact: PrivacyImpact;
}
const PreviewPrivacyImpactOutput = /*@__PURE__*/ __L.at(
  __c50,
  5,
) as any as S.Schema<PreviewPrivacyImpactOutput>;
export interface StartAnalysisLogExportInput {
  membershipIdentifier: string;
  analysisId: string;
  analysisType: LogExportAnalysisType;
  resultConfiguration: AnalysisLogExportResultConfiguration;
}
const StartAnalysisLogExportInput = /*@__PURE__*/ __L.at(
  __c50,
  6,
) as any as S.Schema<StartAnalysisLogExportInput>;
export interface StartAnalysisLogExportOutput {
  analysisLogExport: AnalysisLogExport;
}
const StartAnalysisLogExportOutput =
  GetAnalysisLogExportOutput as any as S.Schema<StartAnalysisLogExportOutput>;
export type ProtectedJobType = "PYSPARK" | (string & {});
const ProtectedJobType = S.String;

export interface ProtectedJobMemberOutputConfigurationInput {
  accountId: string;
}
const ProtectedJobMemberOutputConfigurationInput =
  ProtectedJobMemberOutputConfigurationOutput as any as S.Schema<ProtectedJobMemberOutputConfigurationInput>;
export type ProtectedJobOutputConfigurationInput = {
  member: ProtectedJobMemberOutputConfigurationInput;
};
const ProtectedJobOutputConfigurationInput = /*@__PURE__*/ __L.at(__c50, 7);
export interface ProtectedJobResultConfigurationInput {
  outputConfiguration: ProtectedJobOutputConfigurationInput;
}
const ProtectedJobResultConfigurationInput = /*@__PURE__*/ __L.at(
  __c51,
  0,
) as any as S.Schema<ProtectedJobResultConfigurationInput>;
export interface StartProtectedJobInput {
  type: ProtectedJobType;
  membershipIdentifier: string;
  jobParameters: ProtectedJobParameters;
  resultConfiguration?: ProtectedJobResultConfigurationInput;
  computeConfiguration?: ProtectedJobComputeConfiguration;
  jobComputePayerAccountId?: string;
}
const StartProtectedJobInput = /*@__PURE__*/ __L.at(
  __c51,
  1,
) as any as S.Schema<StartProtectedJobInput>;
export interface StartProtectedJobOutput {
  protectedJob: ProtectedJob;
}
const StartProtectedJobOutput = GetProtectedJobOutput as any as S.Schema<StartProtectedJobOutput>;
export type ProtectedQueryType = string;
export interface StartProtectedQueryInput {
  type: string;
  membershipIdentifier: string;
  sqlParameters: ProtectedQuerySQLParameters;
  resultConfiguration?: ProtectedQueryResultConfiguration;
  computeConfiguration?: ComputeConfiguration;
  queryComputePayerAccountId?: string;
}
const StartProtectedQueryInput = /*@__PURE__*/ __L.at(
  __c51,
  2,
) as any as S.Schema<StartProtectedQueryInput>;
export interface StartProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
const StartProtectedQueryOutput = /*@__PURE__*/ __L.at(
  __c51,
  3,
) as any as S.Schema<StartProtectedQueryOutput>;
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c51, 4) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = DeleteAnalysisTemplateOutput as any as S.Schema<TagResourceOutput>;
export type TagKeys = string[];
const TagKeys = AnalysisTemplateArnList as any as S.Schema<TagKeys>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c51, 5) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = DeleteAnalysisTemplateOutput as any as S.Schema<UntagResourceOutput>;
export interface UpdateAnalysisTemplateInput {
  membershipIdentifier: string;
  analysisTemplateIdentifier: string;
  description?: string;
}
const UpdateAnalysisTemplateInput = /*@__PURE__*/ __L.at(
  __c51,
  6,
) as any as S.Schema<UpdateAnalysisTemplateInput>;
export interface UpdateAnalysisTemplateOutput {
  analysisTemplate: AnalysisTemplate;
}
const UpdateAnalysisTemplateOutput =
  CreateAnalysisTemplateOutput as any as S.Schema<UpdateAnalysisTemplateOutput>;
export interface UpdateCollaborationInput {
  collaborationIdentifier: string;
  name?: string;
  description?: string;
  analyticsEngine?: AnalyticsEngine;
}
const UpdateCollaborationInput = /*@__PURE__*/ __L.at(
  __c51,
  7,
) as any as S.Schema<UpdateCollaborationInput>;
export interface UpdateCollaborationOutput {
  collaboration: Collaboration;
}
const UpdateCollaborationOutput =
  CreateCollaborationOutput as any as S.Schema<UpdateCollaborationOutput>;
export type ChangeRequestAction = "APPROVE" | "DENY" | "CANCEL" | "COMMIT" | (string & {});
const ChangeRequestAction = S.String;

export interface UpdateCollaborationChangeRequestInput {
  collaborationIdentifier: string;
  changeRequestIdentifier: string;
  action: ChangeRequestAction;
}
const UpdateCollaborationChangeRequestInput = /*@__PURE__*/ __L.at(
  __c52,
  0,
) as any as S.Schema<UpdateCollaborationChangeRequestInput>;
export interface UpdateCollaborationChangeRequestOutput {
  collaborationChangeRequest: CollaborationChangeRequest;
}
const UpdateCollaborationChangeRequestOutput =
  CreateCollaborationChangeRequestOutput as any as S.Schema<UpdateCollaborationChangeRequestOutput>;
export interface UpdateConfiguredAudienceModelAssociationInput {
  configuredAudienceModelAssociationIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  name?: string;
}
const UpdateConfiguredAudienceModelAssociationInput = /*@__PURE__*/ __L.at(
  __c52,
  1,
) as any as S.Schema<UpdateConfiguredAudienceModelAssociationInput>;
export interface UpdateConfiguredAudienceModelAssociationOutput {
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation;
}
const UpdateConfiguredAudienceModelAssociationOutput =
  CreateConfiguredAudienceModelAssociationOutput as any as S.Schema<UpdateConfiguredAudienceModelAssociationOutput>;
export interface UpdateConfiguredTableInput {
  configuredTableIdentifier: string;
  name?: string;
  description?: string;
  tableReference?: TableReference;
  allowedColumns?: string[];
  analysisMethod?: AnalysisMethod;
  selectedAnalysisMethods?: SelectedAnalysisMethod[];
}
const UpdateConfiguredTableInput = /*@__PURE__*/ __L.at(
  __c52,
  2,
) as any as S.Schema<UpdateConfiguredTableInput>;
export interface UpdateConfiguredTableOutput {
  configuredTable: ConfiguredTable;
}
const UpdateConfiguredTableOutput =
  CreateConfiguredTableOutput as any as S.Schema<UpdateConfiguredTableOutput>;
export interface UpdateConfiguredTableAnalysisRuleInput {
  configuredTableIdentifier: string;
  analysisRuleType: ConfiguredTableAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy;
}
const UpdateConfiguredTableAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c52,
  3,
) as any as S.Schema<UpdateConfiguredTableAnalysisRuleInput>;
export interface UpdateConfiguredTableAnalysisRuleOutput {
  analysisRule: ConfiguredTableAnalysisRule;
}
const UpdateConfiguredTableAnalysisRuleOutput =
  CreateConfiguredTableAnalysisRuleOutput as any as S.Schema<UpdateConfiguredTableAnalysisRuleOutput>;
export interface UpdateConfiguredTableAssociationInput {
  configuredTableAssociationIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  roleArn?: string;
}
const UpdateConfiguredTableAssociationInput = /*@__PURE__*/ __L.at(
  __c52,
  4,
) as any as S.Schema<UpdateConfiguredTableAssociationInput>;
export interface UpdateConfiguredTableAssociationOutput {
  configuredTableAssociation: ConfiguredTableAssociation;
}
const UpdateConfiguredTableAssociationOutput =
  CreateConfiguredTableAssociationOutput as any as S.Schema<UpdateConfiguredTableAssociationOutput>;
export interface UpdateConfiguredTableAssociationAnalysisRuleInput {
  membershipIdentifier: string;
  configuredTableAssociationIdentifier: string;
  analysisRuleType: ConfiguredTableAssociationAnalysisRuleType;
  analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy;
}
const UpdateConfiguredTableAssociationAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c52,
  5,
) as any as S.Schema<UpdateConfiguredTableAssociationAnalysisRuleInput>;
export interface UpdateConfiguredTableAssociationAnalysisRuleOutput {
  analysisRule: ConfiguredTableAssociationAnalysisRule;
}
const UpdateConfiguredTableAssociationAnalysisRuleOutput =
  CreateConfiguredTableAssociationAnalysisRuleOutput as any as S.Schema<UpdateConfiguredTableAssociationAnalysisRuleOutput>;
export interface UpdateIdMappingTableInput {
  idMappingTableIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  kmsKeyArn?: string;
}
const UpdateIdMappingTableInput = /*@__PURE__*/ __L.at(
  __c52,
  6,
) as any as S.Schema<UpdateIdMappingTableInput>;
export interface UpdateIdMappingTableOutput {
  idMappingTable: IdMappingTable;
}
const UpdateIdMappingTableOutput =
  CreateIdMappingTableOutput as any as S.Schema<UpdateIdMappingTableOutput>;
export interface UpdateIdNamespaceAssociationInput {
  idNamespaceAssociationIdentifier: string;
  membershipIdentifier: string;
  name?: string;
  description?: string;
  idMappingConfig?: IdMappingConfig;
}
const UpdateIdNamespaceAssociationInput = /*@__PURE__*/ __L.at(
  __c52,
  7,
) as any as S.Schema<UpdateIdNamespaceAssociationInput>;
export interface UpdateIdNamespaceAssociationOutput {
  idNamespaceAssociation: IdNamespaceAssociation;
}
const UpdateIdNamespaceAssociationOutput =
  CreateIdNamespaceAssociationOutput as any as S.Schema<UpdateIdNamespaceAssociationOutput>;
export type IntermediateTableColumnTypeString = string;
export interface IntermediateTableColumn {
  name: string;
  type: string;
}
export type IntermediateTableColumnList = IntermediateTableColumn[];
const IntermediateTableColumnList = ColumnList as any as S.Schema<IntermediateTableColumnList>;
export interface UpdateIntermediateTableInput {
  intermediateTableIdentifier: string;
  membershipIdentifier: string;
  description?: string;
  kmsKeyArn?: string;
  columns?: IntermediateTableColumn[];
}
const UpdateIntermediateTableInput = /*@__PURE__*/ __L.at(
  __c53,
  0,
) as any as S.Schema<UpdateIntermediateTableInput>;
export interface UpdateIntermediateTableOutput {
  intermediateTable: IntermediateTable;
}
const UpdateIntermediateTableOutput =
  CreateIntermediateTableOutput as any as S.Schema<UpdateIntermediateTableOutput>;
export interface UpdateIntermediateTableAnalysisRuleInput {
  membershipIdentifier: string;
  intermediateTableIdentifier: string;
  analysisRuleType: IntermediateTableAnalysisRuleType;
  analysisRulePolicy: IntermediateTableAnalysisRulePolicy;
}
const UpdateIntermediateTableAnalysisRuleInput = /*@__PURE__*/ __L.at(
  __c53,
  1,
) as any as S.Schema<UpdateIntermediateTableAnalysisRuleInput>;
export interface UpdateIntermediateTableAnalysisRuleOutput {
  analysisRule: IntermediateTableAnalysisRule;
}
const UpdateIntermediateTableAnalysisRuleOutput =
  CreateIntermediateTableAnalysisRuleOutput as any as S.Schema<UpdateIntermediateTableAnalysisRuleOutput>;
export interface UpdateMembershipPaymentConfiguration {
  queryCompute?: MembershipQueryComputePaymentConfig;
  machineLearning?: MembershipMLPaymentConfig;
  jobCompute?: MembershipJobComputePaymentConfig;
}
const UpdateMembershipPaymentConfiguration = /*@__PURE__*/ __L.at(
  __c53,
  2,
) as any as S.Schema<UpdateMembershipPaymentConfiguration>;
export interface UpdateMembershipInput {
  membershipIdentifier: string;
  queryLogStatus?: MembershipQueryLogStatus;
  jobLogStatus?: MembershipJobLogStatus;
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  defaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration;
  membershipPaymentConfiguration?: UpdateMembershipPaymentConfiguration;
}
const UpdateMembershipInput = /*@__PURE__*/ __L.at(
  __c53,
  3,
) as any as S.Schema<UpdateMembershipInput>;
export interface UpdateMembershipOutput {
  membership: Membership;
}
const UpdateMembershipOutput = CreateMembershipOutput as any as S.Schema<UpdateMembershipOutput>;
export interface DifferentialPrivacyTemplateUpdateParameters {
  epsilon?: number;
  usersNoisePerQuery?: number;
}
const DifferentialPrivacyTemplateUpdateParameters = /*@__PURE__*/ __L.at(
  __c53,
  4,
) as any as S.Schema<DifferentialPrivacyTemplateUpdateParameters>;
export interface AccessBudgetsPrivacyTemplateUpdateParameters {
  budgetParameters: BudgetParameter[];
}
const AccessBudgetsPrivacyTemplateUpdateParameters = /*@__PURE__*/ __L.at(
  __c53,
  5,
) as any as S.Schema<AccessBudgetsPrivacyTemplateUpdateParameters>;
export type PrivacyBudgetTemplateUpdateParameters =
  | { differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters; accessBudget?: never }
  | { differentialPrivacy?: never; accessBudget: AccessBudgetsPrivacyTemplateUpdateParameters };
const PrivacyBudgetTemplateUpdateParameters = /*@__PURE__*/ __L.at(__c53, 6);
export interface UpdatePrivacyBudgetTemplateInput {
  membershipIdentifier: string;
  privacyBudgetTemplateIdentifier: string;
  privacyBudgetType: PrivacyBudgetType;
  parameters?: PrivacyBudgetTemplateUpdateParameters;
}
const UpdatePrivacyBudgetTemplateInput = /*@__PURE__*/ __L.at(
  __c53,
  7,
) as any as S.Schema<UpdatePrivacyBudgetTemplateInput>;
export interface UpdatePrivacyBudgetTemplateOutput {
  privacyBudgetTemplate: PrivacyBudgetTemplate;
}
const UpdatePrivacyBudgetTemplateOutput =
  CreatePrivacyBudgetTemplateOutput as any as S.Schema<UpdatePrivacyBudgetTemplateOutput>;
export type TargetProtectedJobStatus = "CANCELLED" | (string & {});
const TargetProtectedJobStatus = S.String;

export interface UpdateProtectedJobInput {
  membershipIdentifier: string;
  protectedJobIdentifier: string;
  targetStatus: TargetProtectedJobStatus;
}
const UpdateProtectedJobInput = /*@__PURE__*/ __L.at(
  __c54,
  0,
) as any as S.Schema<UpdateProtectedJobInput>;
export interface UpdateProtectedJobOutput {
  protectedJob: ProtectedJob;
}
const UpdateProtectedJobOutput = GetProtectedJobOutput as any as S.Schema<UpdateProtectedJobOutput>;
export type TargetProtectedQueryStatus = string;
export interface UpdateProtectedQueryInput {
  membershipIdentifier: string;
  protectedQueryIdentifier: string;
  targetStatus: string;
}
const UpdateProtectedQueryInput = /*@__PURE__*/ __L.at(
  __c54,
  1,
) as any as S.Schema<UpdateProtectedQueryInput>;
export interface UpdateProtectedQueryOutput {
  protectedQuery: ProtectedQuery;
}
const UpdateProtectedQueryOutput =
  StartProtectedQueryOutput as any as S.Schema<UpdateProtectedQueryOutput>;
export type AccessDeniedExceptionReason = string;
export type ResourceType = string;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c54,
  2,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c54, 3);
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
  input: BatchGetCollaborationAnalysisTemplateInput,
  output: BatchGetCollaborationAnalysisTemplateOutput,
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
  input: BatchGetSchemaInput,
  output: BatchGetSchemaOutput,
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
  input: BatchGetSchemaAnalysisRuleInput,
  output: BatchGetSchemaAnalysisRuleOutput,
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
  input: CreateAnalysisTemplateInput,
  output: CreateAnalysisTemplateOutput,
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
  input: CreateCollaborationInput,
  output: CreateCollaborationOutput,
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
  input: CreateCollaborationChangeRequestInput,
  output: CreateCollaborationChangeRequestOutput,
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
  input: CreateConfiguredAudienceModelAssociationInput,
  output: CreateConfiguredAudienceModelAssociationOutput,
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
  input: CreateConfiguredTableInput,
  output: CreateConfiguredTableOutput,
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
  input: CreateConfiguredTableAnalysisRuleInput,
  output: CreateConfiguredTableAnalysisRuleOutput,
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
  input: CreateConfiguredTableAssociationInput,
  output: CreateConfiguredTableAssociationOutput,
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
  input: CreateConfiguredTableAssociationAnalysisRuleInput,
  output: CreateConfiguredTableAssociationAnalysisRuleOutput,
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
  input: CreateIdMappingTableInput,
  output: CreateIdMappingTableOutput,
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
  input: CreateIdNamespaceAssociationInput,
  output: CreateIdNamespaceAssociationOutput,
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
  input: CreateIntermediateTableInput,
  output: CreateIntermediateTableOutput,
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
  input: CreateIntermediateTableAnalysisRuleInput,
  output: CreateIntermediateTableAnalysisRuleOutput,
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
  input: CreateMembershipInput,
  output: CreateMembershipOutput,
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
  input: CreatePrivacyBudgetTemplateInput,
  output: CreatePrivacyBudgetTemplateOutput,
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
  input: DeleteAnalysisTemplateInput,
  output: DeleteAnalysisTemplateOutput,
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
  input: DeleteCollaborationInput,
  output: DeleteCollaborationOutput,
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
  input: DeleteConfiguredAudienceModelAssociationInput,
  output: DeleteConfiguredAudienceModelAssociationOutput,
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
  input: DeleteConfiguredTableInput,
  output: DeleteConfiguredTableOutput,
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
  input: DeleteConfiguredTableAnalysisRuleInput,
  output: DeleteConfiguredTableAnalysisRuleOutput,
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
  input: DeleteConfiguredTableAssociationInput,
  output: DeleteConfiguredTableAssociationOutput,
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
  input: DeleteConfiguredTableAssociationAnalysisRuleInput,
  output: DeleteConfiguredTableAssociationAnalysisRuleOutput,
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
  input: DeleteIdMappingTableInput,
  output: DeleteIdMappingTableOutput,
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
  input: DeleteIdNamespaceAssociationInput,
  output: DeleteIdNamespaceAssociationOutput,
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
  input: DeleteIntermediateTableInput,
  output: DeleteIntermediateTableOutput,
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
  input: DeleteIntermediateTableAnalysisRuleInput,
  output: DeleteIntermediateTableAnalysisRuleOutput,
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
  input: DeleteMemberInput,
  output: DeleteMemberOutput,
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
  input: DeleteMembershipInput,
  output: DeleteMembershipOutput,
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
  input: DeletePrivacyBudgetTemplateInput,
  output: DeletePrivacyBudgetTemplateOutput,
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
  input: DisallowIntermediateTableInput,
  output: DisallowIntermediateTableOutput,
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
  input: GetAnalysisLogExportInput,
  output: GetAnalysisLogExportOutput,
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
  input: GetAnalysisTemplateInput,
  output: GetAnalysisTemplateOutput,
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
  input: GetCollaborationInput,
  output: GetCollaborationOutput,
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
  input: GetCollaborationAnalysisTemplateInput,
  output: GetCollaborationAnalysisTemplateOutput,
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
  input: GetCollaborationChangeRequestInput,
  output: GetCollaborationChangeRequestOutput,
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
  input: GetCollaborationConfiguredAudienceModelAssociationInput,
  output: GetCollaborationConfiguredAudienceModelAssociationOutput,
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
  input: GetCollaborationIdNamespaceAssociationInput,
  output: GetCollaborationIdNamespaceAssociationOutput,
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
  input: GetCollaborationPrivacyBudgetTemplateInput,
  output: GetCollaborationPrivacyBudgetTemplateOutput,
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
  input: GetConfiguredAudienceModelAssociationInput,
  output: GetConfiguredAudienceModelAssociationOutput,
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
  input: GetConfiguredTableInput,
  output: GetConfiguredTableOutput,
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
  input: GetConfiguredTableAnalysisRuleInput,
  output: GetConfiguredTableAnalysisRuleOutput,
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
  input: GetConfiguredTableAssociationInput,
  output: GetConfiguredTableAssociationOutput,
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
  input: GetConfiguredTableAssociationAnalysisRuleInput,
  output: GetConfiguredTableAssociationAnalysisRuleOutput,
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
  input: GetIdMappingTableInput,
  output: GetIdMappingTableOutput,
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
  input: GetIdNamespaceAssociationInput,
  output: GetIdNamespaceAssociationOutput,
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
  input: GetIntermediateTableInput,
  output: GetIntermediateTableOutput,
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
  input: GetIntermediateTableAnalysisRuleInput,
  output: GetIntermediateTableAnalysisRuleOutput,
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
  input: GetMembershipInput,
  output: GetMembershipOutput,
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
  input: GetPrivacyBudgetTemplateInput,
  output: GetPrivacyBudgetTemplateOutput,
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
  input: GetProtectedJobInput,
  output: GetProtectedJobOutput,
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
  input: GetProtectedQueryInput,
  output: GetProtectedQueryOutput,
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
  input: GetSchemaInput,
  output: GetSchemaOutput,
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
  input: GetSchemaAnalysisRuleInput,
  output: GetSchemaAnalysisRuleOutput,
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
  input: ListAnalysisLogExportsInput,
  output: ListAnalysisLogExportsOutput,
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
  input: ListAnalysisTemplatesInput,
  output: ListAnalysisTemplatesOutput,
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
  input: ListCollaborationAnalysisTemplatesInput,
  output: ListCollaborationAnalysisTemplatesOutput,
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
  input: ListCollaborationChangeRequestsInput,
  output: ListCollaborationChangeRequestsOutput,
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
  input: ListCollaborationConfiguredAudienceModelAssociationsInput,
  output: ListCollaborationConfiguredAudienceModelAssociationsOutput,
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
  input: ListCollaborationIdNamespaceAssociationsInput,
  output: ListCollaborationIdNamespaceAssociationsOutput,
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
  input: ListCollaborationPrivacyBudgetsInput,
  output: ListCollaborationPrivacyBudgetsOutput,
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
  input: ListCollaborationPrivacyBudgetTemplatesInput,
  output: ListCollaborationPrivacyBudgetTemplatesOutput,
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
  input: ListCollaborationsInput,
  output: ListCollaborationsOutput,
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
  input: ListConfiguredAudienceModelAssociationsInput,
  output: ListConfiguredAudienceModelAssociationsOutput,
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
  input: ListConfiguredTableAssociationsInput,
  output: ListConfiguredTableAssociationsOutput,
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
  input: ListConfiguredTablesInput,
  output: ListConfiguredTablesOutput,
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
  input: ListIdMappingTablesInput,
  output: ListIdMappingTablesOutput,
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
  input: ListIdNamespaceAssociationsInput,
  output: ListIdNamespaceAssociationsOutput,
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
  input: ListIntermediateTablesInput,
  output: ListIntermediateTablesOutput,
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
  input: ListIntermediateTableVersionsInput,
  output: ListIntermediateTableVersionsOutput,
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
  input: ListMembersInput,
  output: ListMembersOutput,
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
  input: ListMembershipsInput,
  output: ListMembershipsOutput,
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
  input: ListPrivacyBudgetsInput,
  output: ListPrivacyBudgetsOutput,
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
  input: ListPrivacyBudgetTemplatesInput,
  output: ListPrivacyBudgetTemplatesOutput,
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
  input: ListProtectedJobsInput,
  output: ListProtectedJobsOutput,
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
  input: ListProtectedQueriesInput,
  output: ListProtectedQueriesOutput,
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
  input: ListSchemasInput,
  output: ListSchemasOutput,
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
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
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
  input: PopulateIdMappingTableInput,
  output: PopulateIdMappingTableOutput,
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
  input: PopulateIntermediateTableInput,
  output: PopulateIntermediateTableOutput,
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
  input: PreviewPrivacyImpactInput,
  output: PreviewPrivacyImpactOutput,
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
  input: StartAnalysisLogExportInput,
  output: StartAnalysisLogExportOutput,
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
  input: StartProtectedJobInput,
  output: StartProtectedJobOutput,
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
  input: StartProtectedQueryInput,
  output: StartProtectedQueryOutput,
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
  input: TagResourceInput,
  output: TagResourceOutput,
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
  input: UntagResourceInput,
  output: UntagResourceOutput,
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
  input: UpdateAnalysisTemplateInput,
  output: UpdateAnalysisTemplateOutput,
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
  input: UpdateCollaborationInput,
  output: UpdateCollaborationOutput,
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
  input: UpdateCollaborationChangeRequestInput,
  output: UpdateCollaborationChangeRequestOutput,
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
  input: UpdateConfiguredAudienceModelAssociationInput,
  output: UpdateConfiguredAudienceModelAssociationOutput,
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
  input: UpdateConfiguredTableInput,
  output: UpdateConfiguredTableOutput,
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
  input: UpdateConfiguredTableAnalysisRuleInput,
  output: UpdateConfiguredTableAnalysisRuleOutput,
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
  input: UpdateConfiguredTableAssociationInput,
  output: UpdateConfiguredTableAssociationOutput,
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
  input: UpdateConfiguredTableAssociationAnalysisRuleInput,
  output: UpdateConfiguredTableAssociationAnalysisRuleOutput,
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
  input: UpdateIdMappingTableInput,
  output: UpdateIdMappingTableOutput,
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
  input: UpdateIdNamespaceAssociationInput,
  output: UpdateIdNamespaceAssociationOutput,
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
  input: UpdateIntermediateTableInput,
  output: UpdateIntermediateTableOutput,
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
  input: UpdateIntermediateTableAnalysisRuleInput,
  output: UpdateIntermediateTableAnalysisRuleOutput,
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
  input: UpdateMembershipInput,
  output: UpdateMembershipOutput,
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
  input: UpdatePrivacyBudgetTemplateInput,
  output: UpdatePrivacyBudgetTemplateOutput,
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
  input: UpdateProtectedJobInput,
  output: UpdateProtectedJobOutput,
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
  input: UpdateProtectedQueryInput,
  output: UpdateProtectedQueryOutput,
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
          analysisTemplateArns: AnalysisTemplateArnList,
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
      return S.suspend(() => S.Struct({ referencedTables: S.optional(QueryTables) })).annotate({
        identifier: "AnalysisSchema",
      });
    case 3:
      return S.suspend(() => S.Struct({ bucket: S.String, key: S.String })).annotate({
        identifier: "S3Location",
      });
    case 4:
      return S.suspend(() => S.Struct({ location: S3Location })).annotate({
        identifier: "AnalysisTemplateArtifact",
      });
    case 5:
      return S.Array(AnalysisTemplateArtifact);
    case 6:
      return S.suspend(() =>
        S.Struct({
          entryPoint: AnalysisTemplateArtifact,
          additionalArtifacts: S.optional(AnalysisTemplateArtifactList),
          roleArn: S.String,
        }),
      ).annotate({
        identifier: "AnalysisTemplateArtifacts",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: SensitiveString }),
        /*@__PURE__*/ S.Struct({ artifacts: AnalysisTemplateArtifacts }),
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
      return S.Array(Hash);
    case 2:
      return S.suspend(() =>
        S.Struct({ entryPointHash: Hash, additionalArtifactHashes: S.optional(HashList) }),
      ).annotate({
        identifier: "AnalysisTemplateArtifactMetadata",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ artifacts: AnalysisTemplateArtifactMetadata })]);
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.String, type: ParameterType, defaultValue: S.optional(S.String) }),
      ).annotate({ identifier: "AnalysisParameter" });
    case 5:
      return S.Array(AnalysisParameter);
    case 6:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "AnalysisTemplateValidationStatusReason",
      });
    case 7:
      return S.Array(AnalysisTemplateValidationStatusReason);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: AnalysisTemplateValidationType,
          status: AnalysisTemplateValidationStatus,
          reasons: S.optional(AnalysisTemplateValidationStatusReasonList),
        }),
      ).annotate({
        identifier: "AnalysisTemplateValidationStatusDetail",
      });
    case 1:
      return S.Array(AnalysisTemplateValidationStatusDetail);
    case 2:
      return S.suspend(() => S.Struct({ type: ErrorMessageType })).annotate({
        identifier: "ErrorMessageConfiguration",
      });
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
          columnClassification: ColumnClassificationDetails,
        }),
      ).annotate({
        identifier: "MLSyntheticDataParameters",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ mlSyntheticDataParameters: MLSyntheticDataParameters }),
      ]);
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
          schema: AnalysisSchema,
          format: AnalysisFormat,
          source: S.optional(AnalysisSource),
          sourceMetadata: S.optional(AnalysisSourceMetadata),
          analysisParameters: S.optional(AnalysisParameterList),
          validations: S.optional(AnalysisTemplateValidationStatusDetailList),
          errorMessageConfiguration: S.optional(ErrorMessageConfiguration),
          syntheticDataParameters: S.optional(SyntheticDataParameters),
        }),
      ).annotate({
        identifier: "CollaborationAnalysisTemplate",
      });
    case 1:
      return S.Array(CollaborationAnalysisTemplate);
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String, code: S.String, message: S.String }),
      ).annotate({
        identifier: "BatchGetCollaborationAnalysisTemplateError",
      });
    case 3:
      return S.Array(BatchGetCollaborationAnalysisTemplateError_);
    case 4:
      return S.suspend(() =>
        S.Struct({
          collaborationAnalysisTemplates: CollaborationAnalysisTemplateList,
          errors: BatchGetCollaborationAnalysisTemplateErrorList,
        }),
      ).annotate({
        identifier: "BatchGetCollaborationAnalysisTemplateOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          names: TableAliasList,
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
      return S.Array(Column);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AnalysisRuleType);
    case 1:
      return S.suspend(() =>
        S.Struct({ code: SchemaStatusReasonCode, message: S.String }),
      ).annotate({ identifier: "SchemaStatusReason" });
    case 2:
      return S.Array(SchemaStatusReason);
    case 3:
      return S.suspend(() =>
        S.Struct({
          status: SchemaStatus,
          reasons: S.optional(SchemaStatusReasonList),
          analysisRuleType: S.optional(AnalysisRuleType),
          configurations: S.optional(SchemaConfigurationList),
          analysisType: AnalysisType,
        }),
      ).annotate({ identifier: "SchemaStatusDetail" });
    case 4:
      return S.Array(SchemaStatusDetail);
    case 5:
      return S.suspend(() =>
        S.Struct({ idNamespaceAssociationId: S.String, type: IdNamespaceType }),
      ).annotate({
        identifier: "IdMappingTableInputSource",
      });
    case 6:
      return S.Array(IdMappingTableInputSource);
    case 7:
      return S.suspend(() =>
        S.Struct({
          idMappingTableInputSource: IdMappingTableInputSourceList,
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
        /*@__PURE__*/ S.Struct({ idMappingTable: IdMappingTableSchemaTypeProperties }),
        /*@__PURE__*/ S.Struct({ intermediateTable: IntermediateTableSchemaTypeProperties }),
        /*@__PURE__*/ S.Struct({
          configuredTableAssociation: ConfiguredTableAssociationSchemaTypeProperties,
        }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          columns: ColumnList,
          partitionKeys: ColumnList,
          analysisRuleTypes: AnalysisRuleTypeList,
          analysisMethod: S.optional(AnalysisMethod),
          selectedAnalysisMethods: S.optional(SelectedAnalysisMethods),
          creatorAccountId: S.String,
          name: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          description: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          type: SchemaType,
          schemaStatusDetails: SchemaStatusDetailList,
          resourceArn: S.optional(S.String),
          schemaTypeProperties: S.optional(SchemaTypeProperties),
        }),
      ).annotate({ identifier: "Schema" });
    case 4:
      return S.Array(Schema);
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "BatchGetSchemaError" });
    case 6:
      return S.Array(BatchGetSchemaError_);
    case 7:
      return S.suspend(() =>
        S.Struct({ schemas: SchemaList, errors: BatchGetSchemaErrorList }),
      ).annotate({ identifier: "BatchGetSchemaOutput" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, type: AnalysisRuleType })).annotate({
        identifier: "SchemaAnalysisRuleRequest",
      });
    case 1:
      return S.Array(SchemaAnalysisRuleRequest);
    case 2:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          schemaAnalysisRuleRequests: SchemaAnalysisRuleRequestList,
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
          joinColumns: AnalysisRuleColumnList,
          allowedJoinOperators: S.optional(JoinOperatorsList),
          listColumns: AnalysisRuleColumnList,
          additionalAnalyses: S.optional(AdditionalAnalyses),
        }),
      ).annotate({ identifier: "AnalysisRuleList" });
    case 4:
      return S.suspend(() =>
        S.Struct({ columnNames: AnalysisRuleColumnNameList, function: S.String }),
      ).annotate({ identifier: "AggregateColumn" });
    case 5:
      return S.Array(AggregateColumn);
    case 6:
      return S.suspend(() =>
        S.Struct({ columnName: S.String, minimum: S.Number, type: S.String }),
      ).annotate({ identifier: "AggregationConstraint" });
    case 7:
      return S.Array(AggregationConstraint);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          aggregateColumns: AggregateColumnList,
          joinColumns: AnalysisRuleColumnList,
          joinRequired: S.optional(S.String),
          allowedJoinOperators: S.optional(JoinOperatorsList),
          dimensionColumns: AnalysisRuleColumnList,
          scalarFunctions: ScalarFunctionsList,
          outputConstraints: AggregationConstraints,
          additionalAnalyses: S.optional(AdditionalAnalyses),
        }),
      ).annotate({ identifier: "AnalysisRuleAggregation" });
    case 1:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "DifferentialPrivacyColumn",
      });
    case 2:
      return S.Array(DifferentialPrivacyColumn);
    case 3:
      return S.suspend(() => S.Struct({ columns: DifferentialPrivacyColumnList })).annotate({
        identifier: "DifferentialPrivacyConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ outputColumnName: S.String, minimumIdentityCount: S.Number }),
      ).annotate({ identifier: "OutputColumnThreshold" });
    case 5:
      return S.Array(OutputColumnThreshold);
    case 6:
      return S.suspend(() =>
        S.Struct({
          identityColumns: AnalysisRuleColumnList,
          minimumIdentityCount: S.Number,
          type: AggregationThresholdType,
          outputColumnThresholds: S.optional(OutputColumnThresholdList),
          allowedAggregateExpressionType: AllowedAggregateExpressionType,
        }),
      ).annotate({ identifier: "AggregationThreshold" });
    case 7:
      return S.Array(AggregationThreshold);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowedLiteralComparisonColumns: AnalysisRuleColumnList,
          allowedColumnComparisonColumns: AnalysisRuleColumnList,
        }),
      ).annotate({ identifier: "ComparisonControls" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          allowedAnalyses: AllowedAnalysesList,
          allowedAnalysisProviders: S.optional(AllowedAnalysisProviderList),
          additionalAnalyses: S.optional(AdditionalAnalyses),
          disallowedOutputColumns: S.optional(AnalysisRuleColumnList),
          differentialPrivacy: S.optional(DifferentialPrivacyConfiguration),
          aggregationThresholds: S.optional(AggregationThresholdList),
          comparisonControls: S.optional(ComparisonControls),
          allowedResultReceivers: S.optional(AllowedResultReceivers),
          allowedAdditionalAnalyses: S.optional(AllowedAdditionalAnalyses),
        }),
      ).annotate({ identifier: "AnalysisRuleCustom" });
    case 2:
      return S.suspend(() => S.Struct({ columns: S.optional(AnalysisRuleColumnList) })).annotate({
        identifier: "QueryConstraintRequireOverlap",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ requireOverlap: QueryConstraintRequireOverlap })]);
    case 4:
      return S.Array(QueryConstraint);
    case 5:
      return S.suspend(() =>
        S.Struct({
          joinColumns: AnalysisRuleColumnList,
          queryConstraints: QueryConstraintList,
          dimensionColumns: S.optional(AnalysisRuleColumnList),
        }),
      ).annotate({
        identifier: "AnalysisRuleIdMappingTable",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ list: AnalysisRuleList }),
        /*@__PURE__*/ S.Struct({ aggregation: AnalysisRuleAggregation }),
        /*@__PURE__*/ S.Struct({ custom: AnalysisRuleCustom }),
        /*@__PURE__*/ S.Struct({ idMappingTable: AnalysisRuleIdMappingTable }),
      ]);
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: AnalysisRulePolicyV1 })]);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          allowedResultReceivers: S.optional(AllowedResultReceivers),
          allowedAdditionalAnalyses: S.optional(AllowedAdditionalAnalyses),
        }),
      ).annotate({
        identifier: "ConfiguredTableAssociationAnalysisRuleList",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ list: ConfiguredTableAssociationAnalysisRuleList }),
        /*@__PURE__*/ S.Struct({ aggregation: ConfiguredTableAssociationAnalysisRuleAggregation }),
        /*@__PURE__*/ S.Struct({ custom: ConfiguredTableAssociationAnalysisRuleCustom }),
      ]);
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ v1: ConfiguredTableAssociationAnalysisRulePolicyV1 }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          joinColumns: AnalysisRuleColumnList,
          allowedJoinOperators: S.optional(JoinOperatorsList),
          listColumns: AnalysisRuleColumnList,
          additionalAnalyses: S.optional(AdditionalAnalyses),
          allowedResultReceivers: S.optional(AllowedResultReceivers),
          allowedAdditionalAnalyses: S.optional(AllowedAdditionalAnalyses),
        }),
      ).annotate({ identifier: "ConsolidatedPolicyList" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          aggregateColumns: AggregateColumnList,
          joinColumns: AnalysisRuleColumnList,
          joinRequired: S.optional(S.String),
          allowedJoinOperators: S.optional(JoinOperatorsList),
          dimensionColumns: AnalysisRuleColumnList,
          scalarFunctions: ScalarFunctionsList,
          outputConstraints: AggregationConstraints,
          additionalAnalyses: S.optional(AdditionalAnalyses),
          allowedResultReceivers: S.optional(AllowedResultReceivers),
          allowedAdditionalAnalyses: S.optional(AllowedAdditionalAnalyses),
        }),
      ).annotate({
        identifier: "ConsolidatedPolicyAggregation",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ list: ConsolidatedPolicyList }),
        /*@__PURE__*/ S.Struct({ aggregation: ConsolidatedPolicyAggregation }),
        /*@__PURE__*/ S.Struct({ custom: ConsolidatedPolicyCustom }),
      ]);
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: ConsolidatedPolicyV1 })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          collaborationId: S.String,
          type: AnalysisRuleType,
          name: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          policy: AnalysisRulePolicy,
          collaborationPolicy: S.optional(ConfiguredTableAssociationAnalysisRulePolicy),
          consolidatedPolicy: S.optional(ConsolidatedPolicy),
        }),
      ).annotate({ identifier: "AnalysisRule" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AnalysisRule);
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, type: AnalysisRuleType, code: S.String, message: S.String }),
      ).annotate({
        identifier: "BatchGetSchemaAnalysisRuleError",
      });
    case 2:
      return S.Array(BatchGetSchemaAnalysisRuleError_);
    case 3:
      return S.suspend(() =>
        S.Struct({
          analysisRules: SchemaAnalysisRuleList,
          errors: BatchGetSchemaAnalysisRuleErrorList,
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
          format: AnalysisFormat,
          source: AnalysisSource,
          tags: S.optional(TagMap),
          analysisParameters: S.optional(AnalysisParameterList),
          schema: S.optional(AnalysisSchema),
          errorMessageConfiguration: S.optional(ErrorMessageConfiguration),
          syntheticDataParameters: S.optional(SyntheticDataParameters),
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
          schema: AnalysisSchema,
          format: AnalysisFormat,
          source: AnalysisSource,
          sourceMetadata: S.optional(AnalysisSourceMetadata),
          analysisParameters: S.optional(AnalysisParameterList),
          validations: S.optional(AnalysisTemplateValidationStatusDetailList),
          errorMessageConfiguration: S.optional(ErrorMessageConfiguration),
          syntheticDataParameters: S.optional(SyntheticDataParameters),
        }),
      ).annotate({ identifier: "AnalysisTemplate" });
    case 7:
      return S.suspend(() => S.Struct({ analysisTemplate: AnalysisTemplate })).annotate({
        identifier: "CreateAnalysisTemplateOutput",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ customMLMemberAbilities: CustomMLMemberAbilities }),
      ).annotate({ identifier: "MLMemberAbilities" });
    case 1:
      return S.suspend(() => S.Struct({ isResponsible: S.Boolean })).annotate({
        identifier: "QueryComputePaymentConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelTraining: S.optional(ModelTrainingPaymentConfig),
          modelInference: S.optional(ModelInferencePaymentConfig),
          syntheticDataGeneration: S.optional(SyntheticDataGenerationPaymentConfig),
        }),
      ).annotate({ identifier: "MLPaymentConfig" });
    case 3:
      return S.suspend(() => S.Struct({ isResponsible: S.Boolean })).annotate({
        identifier: "JobComputePaymentConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          queryCompute: QueryComputePaymentConfig,
          machineLearning: S.optional(MLPaymentConfig),
          jobCompute: S.optional(JobComputePaymentConfig),
        }),
      ).annotate({ identifier: "PaymentConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          memberAbilities: MemberAbilities,
          mlMemberAbilities: S.optional(MLMemberAbilities),
          displayName: S.String,
          paymentConfiguration: S.optional(PaymentConfiguration),
        }),
      ).annotate({ identifier: "MemberSpecification" });
    case 6:
      return S.Array(MemberSpecification);
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
          members: MemberList,
          name: S.String,
          description: S.optional(S.String),
          creatorMemberAbilities: MemberAbilities,
          creatorMLMemberAbilities: S.optional(MLMemberAbilities),
          creatorDisplayName: S.String,
          dataEncryptionMetadata: S.optional(DataEncryptionMetadata),
          queryLogStatus: CollaborationQueryLogStatus,
          jobLogStatus: S.optional(CollaborationJobLogStatus),
          tags: S.optional(TagMap),
          creatorPaymentConfiguration: S.optional(PaymentConfiguration),
          analyticsEngine: S.optional(AnalyticsEngine),
          autoApprovedChangeRequestTypes: S.optional(AutoApprovedChangeTypeList),
          allowedResultRegions: S.optional(AllowedResultRegions),
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
          dataEncryptionMetadata: S.optional(DataEncryptionMetadata),
          queryLogStatus: CollaborationQueryLogStatus,
          jobLogStatus: S.optional(CollaborationJobLogStatus),
          analyticsEngine: S.optional(AnalyticsEngine),
          autoApprovedChangeTypes: S.optional(AutoApprovedChangeTypeList),
          allowedResultRegions: S.optional(AllowedResultRegions),
          isMetricsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Collaboration" });
    case 2:
      return S.suspend(() => S.Struct({ collaboration: Collaboration })).annotate({
        identifier: "CreateCollaborationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.String,
          memberAbilities: MemberAbilities,
          mlMemberAbilities: S.optional(MLMemberAbilities),
          paymentConfiguration: S.optional(PaymentConfiguration),
          displayName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MemberChangeSpecification",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ autoApprovedChangeTypes: S.optional(AutoApprovedChangeTypeList) }),
      ).annotate({
        identifier: "CollaborationChangeSpecification",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ member: MemberChangeSpecification }),
        /*@__PURE__*/ S.Struct({ collaboration: CollaborationChangeSpecification }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          specificationType: ChangeSpecificationType,
          specification: ChangeSpecification,
        }),
      ).annotate({ identifier: "ChangeInput" });
    case 7:
      return S.Array(ChangeInput);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          changes: ChangeInputList,
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
          specificationType: ChangeSpecificationType,
          specification: ChangeSpecification,
          types: ChangeTypeList,
        }),
      ).annotate({ identifier: "Change" });
    case 2:
      return S.Array(Change);
    case 3:
      return S.suspend(() => S.Struct({ status: ApprovalStatus })).annotate({
        identifier: "ApprovalStatusDetails",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ ApprovalStatusDetails.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          collaborationId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: ChangeRequestStatus,
          isAutoApproved: S.Boolean,
          changes: ChangeList,
          approvals: S.optional(ApprovalStatuses),
        }),
      ).annotate({
        identifier: "CollaborationChangeRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ collaborationChangeRequest: CollaborationChangeRequest }),
      ).annotate({
        identifier: "CreateCollaborationChangeRequestOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredAudienceModelArn: S.String,
          configuredAudienceModelAssociationName: S.String,
          manageResourcePolicies: S.Boolean,
          tags: S.optional(TagMap),
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
      return S.suspend(() =>
        S.Struct({ configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation }),
      ).annotate({
        identifier: "CreateConfiguredAudienceModelAssociationOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(CommercialRegion),
          tableName: S.String,
          databaseName: S.String,
        }),
      ).annotate({ identifier: "GlueTableReference" });
    case 3:
      return S.suspend(() => S.Struct({ columnName: S.String, columnType: S.String })).annotate({
        identifier: "SnowflakeTableSchemaV1",
      });
    case 4:
      return S.Array(SnowflakeTableSchemaV1);
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: SnowflakeTableSchemaList })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          secretArn: S.String,
          accountIdentifier: S.String,
          databaseName: S.String,
          tableName: S.String,
          schemaName: S.String,
          tableSchema: SnowflakeTableSchema,
        }),
      ).annotate({ identifier: "SnowflakeTableReference" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(CommercialRegion),
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
        /*@__PURE__*/ S.Struct({ glue: GlueTableReference }),
        /*@__PURE__*/ S.Struct({ snowflake: SnowflakeTableReference }),
        /*@__PURE__*/ S.Struct({ athena: AthenaTableReference }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          tableReference: TableReference,
          allowedColumns: AllowedColumnList,
          analysisMethod: AnalysisMethod,
          selectedAnalysisMethods: S.optional(SelectedAnalysisMethods),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/configuredTables" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateConfiguredTableInput",
      });
    case 2:
      return S.Array(ConfiguredTableAnalysisRuleType);
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.String,
          description: S.optional(S.String),
          tableReference: TableReference,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          analysisRuleTypes: ConfiguredTableAnalysisRuleTypeList,
          analysisMethod: AnalysisMethod,
          allowedColumns: AllowedColumnList,
          selectedAnalysisMethods: S.optional(SelectedAnalysisMethods),
        }),
      ).annotate({ identifier: "ConfiguredTable" });
    case 4:
      return S.suspend(() => S.Struct({ configuredTable: ConfiguredTable })).annotate({
        identifier: "CreateConfiguredTableOutput",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ list: AnalysisRuleList }),
        /*@__PURE__*/ S.Struct({ aggregation: AnalysisRuleAggregation }),
        /*@__PURE__*/ S.Struct({ custom: AnalysisRuleCustom }),
      ]);
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: ConfiguredTableAnalysisRulePolicyV1 })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
          analysisRuleType: ConfiguredTableAnalysisRuleType,
          analysisRulePolicy: ConfiguredTableAnalysisRulePolicy,
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
          policy: ConfiguredTableAnalysisRulePolicy,
          type: ConfiguredTableAnalysisRuleType,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ConfiguredTableAnalysisRule",
      });
    case 1:
      return S.suspend(() => S.Struct({ analysisRule: ConfiguredTableAnalysisRule })).annotate({
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
          tags: S.optional(TagMap),
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
          resourceType: ChildResourceType,
          resourceName: S.String,
          ownerAccountId: S.String,
          resourceStatus: S.optional(ResourceStatus),
        }),
      ).annotate({ identifier: "ChildResource" });
    case 4:
      return S.Array(ChildResource);
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
          analysisRuleTypes: S.optional(ConfiguredTableAssociationAnalysisRuleTypeList),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          childResources: S.optional(ChildResourceList),
        }),
      ).annotate({
        identifier: "ConfiguredTableAssociation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ configuredTableAssociation: ConfiguredTableAssociation }),
      ).annotate({
        identifier: "CreateConfiguredTableAssociationOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          configuredTableAssociationIdentifier: S.String.pipe(
            T.HttpLabel("configuredTableAssociationIdentifier"),
          ),
          analysisRuleType: ConfiguredTableAssociationAnalysisRuleType,
          analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy,
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
          policy: ConfiguredTableAssociationAnalysisRulePolicy,
          type: ConfiguredTableAssociationAnalysisRuleType,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ConfiguredTableAssociationAnalysisRule",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ analysisRule: ConfiguredTableAssociationAnalysisRule }),
      ).annotate({
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
          inputReferenceConfig: IdMappingTableInputReferenceConfig,
          tags: S.optional(TagMap),
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
      return S.suspend(() =>
        S.Struct({ idMappingTableInputSource: IdMappingTableInputSourceList }),
      ).annotate({
        identifier: "IdMappingTableInputReferenceProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          inputReferenceConfig: IdMappingTableInputReferenceConfig,
          membershipId: S.String,
          membershipArn: S.String,
          collaborationId: S.String,
          collaborationArn: S.String,
          description: S.optional(S.String),
          name: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          inputReferenceProperties: IdMappingTableInputReferenceProperties,
          kmsKeyArn: S.optional(S.String),
          childResources: S.optional(ChildResourceList),
        }),
      ).annotate({ identifier: "IdMappingTable" });
    case 6:
      return S.suspend(() => S.Struct({ idMappingTable: IdMappingTable })).annotate({
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
          inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig,
          tags: S.optional(TagMap),
          name: S.String,
          description: S.optional(S.String),
          idMappingConfig: S.optional(IdMappingConfig),
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
          idNamespaceType: IdNamespaceType,
          idMappingWorkflowsSupported: IdMappingWorkflowsSupported,
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
          inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig,
          inputReferenceProperties: IdNamespaceAssociationInputReferenceProperties,
          idMappingConfig: S.optional(IdMappingConfig),
        }),
      ).annotate({ identifier: "IdNamespaceAssociation" });
    case 4:
      return S.suspend(() => S.Struct({ idNamespaceAssociation: IdNamespaceAssociation })).annotate(
        {
          identifier: "CreateIdNamespaceAssociationOutput",
        },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ queryString: S.optional(S.String), analysisTemplateArn: S.optional(S.String) }),
      ).annotate({
        identifier: "PopulationAnalysisSqlParameters",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ sqlParameters: PopulationAnalysisSqlParameters })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          name: S.String,
          description: S.optional(S.String),
          populationAnalysisConfiguration: PopulationAnalysisConfiguration,
          kmsKeyArn: S.optional(S.String),
          retentionInDays: S.optional(S.Number),
          tags: S.optional(TagMap),
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
          type: BaseTableDependencyType,
          parentType: BaseTableParentType,
          creatorAccountId: S.String,
        }),
      ).annotate({
        identifier: "IntermediateTableDependency",
      });
    case 1:
      return S.Array(IntermediateTableDependency);
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          id: S.String,
          type: BaseTableDependencyType,
          value: AdditionalAnalyses,
          sourceAccountId: S.String,
        }),
      ).annotate({
        identifier: "InheritedAdditionalAnalysesSource",
      });
    case 4:
      return S.Array(InheritedAdditionalAnalysesSource);
    case 5:
      return S.suspend(() =>
        S.Struct({ value: AdditionalAnalyses, sources: InheritedAdditionalAnalysesSourceList }),
      ).annotate({
        identifier: "InheritedAdditionalAnalyses",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          id: S.String,
          type: BaseTableDependencyType,
          value: AllowedAdditionalAnalyses,
          sourceAccountId: S.String,
        }),
      ).annotate({
        identifier: "InheritedAllowedAdditionalAnalysesSource",
      });
    case 7:
      return S.Array(InheritedAllowedAdditionalAnalysesSource);
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          value: AllowedAdditionalAnalyses,
          sources: InheritedAllowedAdditionalAnalysesSourceList,
        }),
      ).annotate({
        identifier: "InheritedAllowedAdditionalAnalyses",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ value: AccountIdList, sources: InheritedAllowedResultReceiversSourceList }),
      ).annotate({
        identifier: "InheritedAllowedResultReceivers",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          column: S.String,
          sourceColumn: S.String,
          sourceName: S.String,
          sourceId: S.String,
          sourceType: BaseTableDependencyType,
          sourceAccountId: S.String,
        }),
      ).annotate({ identifier: "ColumnLineageEntry" });
    case 3:
      return S.Array(ColumnLineageEntry);
    case 4:
      return S.suspend(() =>
        S.Struct({ value: AnalysisRuleColumnNameList, columnLineage: ColumnLineageList }),
      ).annotate({
        identifier: "InheritedDisallowedOutputColumns",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          additionalAnalyses: S.optional(InheritedAdditionalAnalyses),
          allowedAdditionalAnalyses: S.optional(InheritedAllowedAdditionalAnalyses),
          allowedResultReceivers: S.optional(InheritedAllowedResultReceivers),
          disallowedOutputColumns: S.optional(InheritedDisallowedOutputColumns),
        }),
      ).annotate({
        identifier: "IntermediateTableInheritedConstraints",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          versionId: S.String,
          analysisId: S.String,
          analysisType: PopulateIntermediateTableAnalysisType,
          kmsKeyArn: S.optional(S.String),
          parameters: S.optional(ParameterMap),
          inheritedConstraints: IntermediateTableInheritedConstraints,
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "IntermediateTableActiveVersion",
      });
    case 7:
      return S.suspend(() => S.Struct({ columns: ColumnList })).annotate({
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
          childResources: S.optional(ChildResourceList),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: IntermediateTableStatus,
          statusReason: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          populationAnalysisConfiguration: PopulationAnalysisConfiguration,
          retentionInDays: S.optional(S.Number),
          tableDependencies: S.optional(DependencyList),
          intermediateTableVersion: S.optional(IntermediateTableActiveVersion),
          analysisRuleTypes: S.optional(IntermediateTableAnalysisRuleTypeList),
          schema: S.optional(IntermediateTableSchema),
        }),
      ).annotate({ identifier: "IntermediateTable" });
    case 1:
      return S.suspend(() => S.Struct({ intermediateTable: IntermediateTable })).annotate({
        identifier: "CreateIntermediateTableOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          allowedAnalyses: S.optional(AllowedAnalysesList),
          additionalAnalyses: S.optional(AdditionalAnalyses),
          allowedAdditionalAnalyses: S.optional(AllowedAdditionalAnalyses),
          allowedAnalysisProviders: S.optional(AllowedAnalysisProviderList),
          allowedResultReceivers: S.optional(AllowedResultReceivers),
          differentialPrivacy: S.optional(DifferentialPrivacyConfiguration),
          disallowedOutputColumns: S.optional(AnalysisRuleColumnList),
          aggregationThresholds: S.optional(AggregationThresholdList),
          comparisonControls: S.optional(ComparisonControls),
        }),
      ).annotate({
        identifier: "IntermediateTableAnalysisRuleCustom",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ custom: IntermediateTableAnalysisRuleCustom })]);
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ v1: IntermediateTableAnalysisRulePolicyV1 })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          analysisRuleType: IntermediateTableAnalysisRuleType,
          analysisRulePolicy: IntermediateTableAnalysisRulePolicy,
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
          analysisRulePolicy: IntermediateTableAnalysisRulePolicy,
          analysisRuleType: IntermediateTableAnalysisRuleType,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "IntermediateTableAnalysisRule",
      });
    case 7:
      return S.suspend(() => S.Struct({ analysisRule: IntermediateTableAnalysisRule })).annotate({
        identifier: "CreateIntermediateTableAnalysisRuleOutput",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resultFormat: ResultFormat,
          bucket: S.String,
          keyPrefix: S.optional(S.String),
          singleFileOutput: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ProtectedQueryS3OutputConfiguration",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: ProtectedQueryS3OutputConfiguration })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          outputConfiguration: MembershipProtectedQueryOutputConfiguration,
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
      return S.Union([/*@__PURE__*/ S.Struct({ s3: ProtectedJobS3OutputConfigurationInput })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          outputConfiguration: MembershipProtectedJobOutputConfiguration,
          roleArn: S.String,
        }),
      ).annotate({
        identifier: "MembershipProtectedJobResultConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelTraining: S.optional(MembershipModelTrainingPaymentConfig),
          modelInference: S.optional(MembershipModelInferencePaymentConfig),
          syntheticDataGeneration: S.optional(MembershipSyntheticDataGenerationPaymentConfig),
        }),
      ).annotate({
        identifier: "MembershipMLPaymentConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          queryCompute: MembershipQueryComputePaymentConfig,
          machineLearning: S.optional(MembershipMLPaymentConfig),
          jobCompute: S.optional(MembershipJobComputePaymentConfig),
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
          queryLogStatus: MembershipQueryLogStatus,
          jobLogStatus: S.optional(MembershipJobLogStatus),
          tags: S.optional(TagMap),
          defaultResultConfiguration: S.optional(MembershipProtectedQueryResultConfiguration),
          defaultJobResultConfiguration: S.optional(MembershipProtectedJobResultConfiguration),
          paymentConfiguration: S.optional(MembershipPaymentConfiguration),
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
          memberAbilities: MemberAbilities,
          mlMemberAbilities: S.optional(MLMemberAbilities),
          queryLogStatus: MembershipQueryLogStatus,
          jobLogStatus: S.optional(MembershipJobLogStatus),
          defaultResultConfiguration: S.optional(MembershipProtectedQueryResultConfiguration),
          defaultJobResultConfiguration: S.optional(MembershipProtectedJobResultConfiguration),
          paymentConfiguration: MembershipPaymentConfiguration,
          isMetricsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Membership" });
    case 2:
      return S.suspend(() => S.Struct({ membership: Membership })).annotate({
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
          type: AccessBudgetType,
          budget: S.Number,
          autoRefresh: S.optional(AutoRefreshMode),
        }),
      ).annotate({ identifier: "BudgetParameter" });
    case 5:
      return S.Array(BudgetParameter);
    case 6:
      return S.suspend(() =>
        S.Struct({ budgetParameters: BudgetParameters, resourceArn: S.String }),
      ).annotate({
        identifier: "AccessBudgetsPrivacyTemplateParametersInput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ differentialPrivacy: DifferentialPrivacyTemplateParametersInput }),
        /*@__PURE__*/ S.Struct({ accessBudget: AccessBudgetsPrivacyTemplateParametersInput }),
      ]);
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          autoRefresh: S.optional(PrivacyBudgetTemplateAutoRefresh),
          privacyBudgetType: PrivacyBudgetType,
          parameters: PrivacyBudgetTemplateParametersInput,
          tags: S.optional(TagMap),
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
          privacyBudgetType: PrivacyBudgetType,
          autoRefresh: PrivacyBudgetTemplateAutoRefresh,
          parameters: PrivacyBudgetTemplateParametersOutput,
        }),
      ).annotate({ identifier: "PrivacyBudgetTemplate" });
    case 2:
      return S.suspend(() => S.Struct({ privacyBudgetTemplate: PrivacyBudgetTemplate })).annotate({
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
          analysisRuleType: ConfiguredTableAnalysisRuleType.pipe(T.HttpLabel("analysisRuleType")),
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
          analysisRuleType: ConfiguredTableAssociationAnalysisRuleType.pipe(
            T.HttpLabel("analysisRuleType"),
          ),
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
          analysisRuleType: IntermediateTableAnalysisRuleType.pipe(T.HttpLabel("analysisRuleType")),
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
      return S.suspend(() => S.Struct({ s3: AnalysisLogExportS3OutputConfiguration })).annotate({
        identifier: "AnalysisLogExportOutputConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ outputConfiguration: AnalysisLogExportOutputConfiguration }),
      ).annotate({
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
          analysisType: LogExportAnalysisType,
          membershipId: S.String,
          status: AnalysisLogExportStatus,
          resultConfiguration: AnalysisLogExportResultConfiguration,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          error: S.optional(AnalysisLogExportError),
        }),
      ).annotate({ identifier: "AnalysisLogExport" });
    case 2:
      return S.suspend(() => S.Struct({ analysisLogExport: AnalysisLogExport })).annotate({
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
      return S.suspend(() => S.Struct({ collaboration: Collaboration })).annotate({
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
      return S.suspend(() =>
        S.Struct({ collaborationAnalysisTemplate: CollaborationAnalysisTemplate }),
      ).annotate({
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
          collaborationConfiguredAudienceModelAssociation:
            CollaborationConfiguredAudienceModelAssociation,
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
          inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig,
          inputReferenceProperties: IdNamespaceAssociationInputReferenceProperties,
          idMappingConfig: S.optional(IdMappingConfig),
        }),
      ).annotate({
        identifier: "CollaborationIdNamespaceAssociation",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ collaborationIdNamespaceAssociation: CollaborationIdNamespaceAssociation }),
      ).annotate({
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
          privacyBudgetType: PrivacyBudgetType,
          autoRefresh: PrivacyBudgetTemplateAutoRefresh,
          parameters: PrivacyBudgetTemplateParametersOutput,
        }),
      ).annotate({
        identifier: "CollaborationPrivacyBudgetTemplate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ collaborationPrivacyBudgetTemplate: CollaborationPrivacyBudgetTemplate }),
      ).annotate({
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
      return S.suspend(() => S.Struct({ configuredTable: ConfiguredTable })).annotate({
        identifier: "GetConfiguredTableOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          configuredTableIdentifier: S.String.pipe(T.HttpLabel("configuredTableIdentifier")),
          analysisRuleType: ConfiguredTableAnalysisRuleType.pipe(T.HttpLabel("analysisRuleType")),
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
          analysisRuleType: ConfiguredTableAssociationAnalysisRuleType.pipe(
            T.HttpLabel("analysisRuleType"),
          ),
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
      return S.suspend(() => S.Struct({ idMappingTable: IdMappingTable })).annotate({
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
          analysisRuleType: IntermediateTableAnalysisRuleType.pipe(T.HttpLabel("analysisRuleType")),
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
        S.Struct({ analysisTemplateArn: S.String, parameters: S.optional(JobParameterMap) }),
      ).annotate({ identifier: "ProtectedJobParameters" });
    case 1:
      return S.suspend(() => S.Struct({ accountId: S.String })).annotate({
        identifier: "ProtectedJobMemberOutputConfigurationOutput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: ProtectedJobS3OutputConfigurationOutput }),
        /*@__PURE__*/ S.Struct({ member: ProtectedJobMemberOutputConfigurationOutput }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({ outputConfiguration: ProtectedJobOutputConfigurationOutput }),
      ).annotate({
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
          billedResourceUtilization: S.optional(BilledJobResourceUtilization),
        }),
      ).annotate({ identifier: "ProtectedJobStatistics" });
    case 6:
      return S.suspend(() => S.Struct({ location: S.String })).annotate({
        identifier: "ProtectedJobS3Output",
      });
    case 7:
      return S.Array(ProtectedJobSingleMemberOutput);
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: ProtectedJobS3Output }),
        /*@__PURE__*/ S.Struct({ memberList: ProtectedJobMemberOutputList }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ output: ProtectedJobOutput })).annotate({
        identifier: "ProtectedJobResult",
      });
    case 2:
      return S.suspend(() => S.Struct({ message: S.String, code: S.String })).annotate({
        identifier: "ProtectedJobError",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ spark: SparkProperties })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: ProtectedJobWorkerComputeType,
          number: S.Number,
          properties: S.optional(WorkerComputeConfigurationProperties),
        }),
      ).annotate({
        identifier: "ProtectedJobWorkerComputeConfiguration",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ worker: ProtectedJobWorkerComputeConfiguration })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          jobParameters: S.optional(ProtectedJobParameters),
          status: ProtectedJobStatus,
          resultConfiguration: S.optional(ProtectedJobResultConfigurationOutput),
          statistics: S.optional(ProtectedJobStatistics),
          result: S.optional(ProtectedJobResult),
          error: S.optional(ProtectedJobError),
          computeConfiguration: S.optional(ProtectedJobComputeConfiguration),
          jobComputePayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProtectedJob" });
    case 7:
      return S.suspend(() => S.Struct({ protectedJob: ProtectedJob })).annotate({
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
          parameters: S.optional(ParameterMap),
        }),
      ).annotate({
        identifier: "ProtectedQuerySQLParameters",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: ProtectedQueryS3OutputConfiguration }),
        /*@__PURE__*/ S.Struct({ member: ProtectedQueryMemberOutputConfiguration }),
      ]);
    case 3:
      return S.Array(ProtectedQueryDistributeOutputConfigurationLocation);
    case 4:
      return S.suspend(() =>
        S.Struct({ locations: ProtectedQueryDistributeOutputConfigurationLocations }),
      ).annotate({
        identifier: "ProtectedQueryDistributeOutputConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ id: S.String, arn: S.String, name: S.String })).annotate({
        identifier: "IntermediateTableOutputConfiguration",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: ProtectedQueryS3OutputConfiguration }),
        /*@__PURE__*/ S.Struct({ member: ProtectedQueryMemberOutputConfiguration }),
        /*@__PURE__*/ S.Struct({ distribute: ProtectedQueryDistributeOutputConfiguration }),
        /*@__PURE__*/ S.Struct({ intermediateTable: IntermediateTableOutputConfiguration }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ outputConfiguration: ProtectedQueryOutputConfiguration }),
      ).annotate({
        identifier: "ProtectedQueryResultConfiguration",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ProtectedQuerySingleMemberOutput);
    case 1:
      return S.suspend(() =>
        S.Struct({
          s3: S.optional(ProtectedQueryS3Output),
          memberList: S.optional(ProtectedQueryMemberOutputList),
        }),
      ).annotate({
        identifier: "ProtectedQueryDistributeOutput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: ProtectedQueryS3Output }),
        /*@__PURE__*/ S.Struct({ memberList: ProtectedQueryMemberOutputList }),
        /*@__PURE__*/ S.Struct({ distribute: ProtectedQueryDistributeOutput }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ output: ProtectedQueryOutput })).annotate({
        identifier: "ProtectedQueryResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          aggregationType: DifferentialPrivacyAggregationType,
          aggregationExpression: S.String,
          userContributionLimit: S.Number,
          minColumnValue: S.optional(S.Number),
          maxColumnValue: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DifferentialPrivacySensitivityParameters",
      });
    case 5:
      return S.Array(DifferentialPrivacySensitivityParameters);
    case 6:
      return S.suspend(() =>
        S.Struct({ sensitivityParameters: DifferentialPrivacySensitivityParametersList }),
      ).annotate({
        identifier: "DifferentialPrivacyParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(WorkerComputeType),
          number: S.optional(S.Number),
          properties: S.optional(WorkerComputeConfigurationProperties),
        }),
      ).annotate({
        identifier: "WorkerComputeConfiguration",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ worker: WorkerComputeConfiguration })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          sqlParameters: S.optional(ProtectedQuerySQLParameters),
          status: S.String,
          resultConfiguration: S.optional(ProtectedQueryResultConfiguration),
          statistics: S.optional(ProtectedQueryStatistics),
          result: S.optional(ProtectedQueryResult),
          error: S.optional(ProtectedQueryError),
          differentialPrivacy: S.optional(DifferentialPrivacyParameters),
          computeConfiguration: S.optional(ComputeConfiguration),
          queryComputePayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProtectedQuery" });
    case 2:
      return S.suspend(() => S.Struct({ protectedQuery: ProtectedQuery })).annotate({
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
      return S.suspend(() => S.Struct({ schema: Schema })).annotate({
        identifier: "GetSchemaOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          name: S.String.pipe(T.HttpLabel("name")),
          type: AnalysisRuleType.pipe(T.HttpLabel("type")),
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
      return S.suspend(() => S.Struct({ analysisRule: AnalysisRule })).annotate({
        identifier: "GetSchemaAnalysisRuleOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          analysisIdentifier: S.optional(S.String).pipe(T.HttpQuery("analysisIdentifier")),
          status: S.optional(AnalysisLogExportStatus).pipe(T.HttpQuery("status")),
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
          analysisType: LogExportAnalysisType,
          status: AnalysisLogExportStatus,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "AnalysisLogExportSummary" });
    case 1:
      return S.Array(AnalysisLogExportSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          analysisLogExports: AnalysisLogExportSummaryList,
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
      return S.Array(AnalysisTemplateSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          analysisTemplateSummaries: AnalysisTemplateSummaryList,
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
      return S.Array(CollaborationAnalysisTemplateSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationAnalysisTemplateSummaries: CollaborationAnalysisTemplateSummaryList,
        }),
      ).annotate({
        identifier: "ListCollaborationAnalysisTemplatesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          status: S.optional(ChangeRequestStatus).pipe(T.HttpQuery("status")),
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
      return S.Array(CollaborationChangeRequestSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          collaborationChangeRequestSummaries: CollaborationChangeRequestSummaryList,
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
      return S.Array(CollaborationConfiguredAudienceModelAssociationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          collaborationConfiguredAudienceModelAssociationSummaries:
            CollaborationConfiguredAudienceModelAssociationSummaryList,
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
      return S.suspend(() => S.Struct({ idNamespaceType: IdNamespaceType })).annotate({
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
          inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig,
          name: S.String,
          description: S.optional(S.String),
          inputReferenceProperties: IdNamespaceAssociationInputReferencePropertiesSummary,
        }),
      ).annotate({
        identifier: "CollaborationIdNamespaceAssociationSummary",
      });
    case 5:
      return S.Array(CollaborationIdNamespaceAssociationSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationIdNamespaceAssociationSummaries:
            CollaborationIdNamespaceAssociationSummaryList,
        }),
      ).annotate({
        identifier: "ListCollaborationIdNamespaceAssociationsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          privacyBudgetType: PrivacyBudgetType.pipe(T.HttpQuery("privacyBudgetType")),
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
          type: DifferentialPrivacyAggregationType,
          maxCount: S.Number,
          remainingCount: S.Number,
        }),
      ).annotate({
        identifier: "DifferentialPrivacyPrivacyBudgetAggregation",
      });
    case 1:
      return S.Array(DifferentialPrivacyPrivacyBudgetAggregation);
    case 2:
      return S.suspend(() =>
        S.Struct({
          aggregations: DifferentialPrivacyPrivacyBudgetAggregationList,
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
          budgetType: AccessBudgetType,
          autoRefresh: S.optional(AutoRefreshMode),
        }),
      ).annotate({ identifier: "AccessBudgetDetails" });
    case 4:
      return S.Array(AccessBudgetDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          details: AccessBudgetDetailsList,
          aggregateRemainingBudget: S.Number,
        }),
      ).annotate({ identifier: "AccessBudget" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ differentialPrivacy: DifferentialPrivacyPrivacyBudget }),
        /*@__PURE__*/ S.Struct({ accessBudget: AccessBudget }),
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
          type: PrivacyBudgetType,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          budget: PrivacyBudget,
        }),
      ).annotate({
        identifier: "CollaborationPrivacyBudgetSummary",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CollaborationPrivacyBudgetSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          collaborationPrivacyBudgetSummaries: CollaborationPrivacyBudgetSummaryList,
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
          privacyBudgetType: PrivacyBudgetType,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CollaborationPrivacyBudgetTemplateSummary",
      });
    case 4:
      return S.Array(CollaborationPrivacyBudgetTemplateSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          collaborationPrivacyBudgetTemplateSummaries:
            CollaborationPrivacyBudgetTemplateSummaryList,
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
          analyticsEngine: S.optional(AnalyticsEngine),
        }),
      ).annotate({ identifier: "CollaborationSummary" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CollaborationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), collaborationList: CollaborationSummaryList }),
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
      return S.Array(ConfiguredAudienceModelAssociationSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          configuredAudienceModelAssociationSummaries:
            ConfiguredAudienceModelAssociationSummaryList,
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
          analysisRuleTypes: S.optional(ConfiguredTableAssociationAnalysisRuleTypeList),
        }),
      ).annotate({
        identifier: "ConfiguredTableAssociationSummary",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ConfiguredTableAssociationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          configuredTableAssociationSummaries: ConfiguredTableAssociationSummaryList,
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
          analysisRuleTypes: ConfiguredTableAnalysisRuleTypeList,
          analysisMethod: AnalysisMethod,
          selectedAnalysisMethods: S.optional(SelectedAnalysisMethods),
        }),
      ).annotate({ identifier: "ConfiguredTableSummary" });
    case 4:
      return S.Array(ConfiguredTableSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          configuredTableSummaries: ConfiguredTableSummaryList,
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
          inputReferenceConfig: IdMappingTableInputReferenceConfig,
          name: S.String,
        }),
      ).annotate({ identifier: "IdMappingTableSummary" });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(IdMappingTableSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          idMappingTableSummaries: IdMappingTableSummaryList,
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
          inputReferenceConfig: IdNamespaceAssociationInputReferenceConfig,
          name: S.String,
          description: S.optional(S.String),
          inputReferenceProperties: IdNamespaceAssociationInputReferencePropertiesSummary,
        }),
      ).annotate({
        identifier: "IdNamespaceAssociationSummary",
      });
    case 4:
      return S.Array(IdNamespaceAssociationSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          idNamespaceAssociationSummaries: IdNamespaceAssociationSummaryList,
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
          status: IntermediateTableStatus,
          retentionInDays: S.optional(S.Number),
          analysisRuleTypes: S.optional(IntermediateTableAnalysisRuleTypeList),
        }),
      ).annotate({ identifier: "IntermediateTableSummary" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.Array(IntermediateTableSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          intermediateTableSummaries: IntermediateTableSummaryList,
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
          status: IntermediateTableVersionStatus,
          analysisType: PopulateIntermediateTableAnalysisType,
          kmsKeyArn: S.optional(S.String),
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "IntermediateTableVersionSummary",
      });
    case 4:
      return S.Array(IntermediateTableVersionSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          intermediateTableVersionSummaries: IntermediateTableVersionSummaryList,
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
          abilities: MemberAbilities,
          mlAbilities: S.optional(MLMemberAbilities),
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          membershipId: S.optional(S.String),
          membershipArn: S.optional(S.String),
          paymentConfiguration: PaymentConfiguration,
        }),
      ).annotate({ identifier: "MemberSummary" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MemberSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), memberSummaries: MemberSummaryList }),
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
          memberAbilities: MemberAbilities,
          mlMemberAbilities: S.optional(MLMemberAbilities),
          paymentConfiguration: MembershipPaymentConfiguration,
        }),
      ).annotate({ identifier: "MembershipSummary" });
    case 4:
      return S.Array(MembershipSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), membershipSummaries: MembershipSummaryList }),
      ).annotate({ identifier: "ListMembershipsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          privacyBudgetType: PrivacyBudgetType.pipe(T.HttpQuery("privacyBudgetType")),
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
          type: PrivacyBudgetType,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          budget: PrivacyBudget,
        }),
      ).annotate({ identifier: "PrivacyBudgetSummary" });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PrivacyBudgetSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          privacyBudgetSummaries: PrivacyBudgetSummaryList,
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
          privacyBudgetType: PrivacyBudgetType,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "PrivacyBudgetTemplateSummary",
      });
    case 4:
      return S.Array(PrivacyBudgetTemplateSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          privacyBudgetTemplateSummaries: PrivacyBudgetTemplateSummaryList,
        }),
      ).annotate({
        identifier: "ListPrivacyBudgetTemplatesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          status: S.optional(ProtectedJobStatus).pipe(T.HttpQuery("status")),
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
      return S.suspend(() =>
        S.Struct({ receiverAccountIds: S.optional(ProtectedJobReceiverAccountIds) }),
      ).annotate({
        identifier: "ProtectedJobDirectAnalysisConfigurationDetails",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          directAnalysisConfigurationDetails: ProtectedJobDirectAnalysisConfigurationDetails,
        }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          analysisType: ProtectedJobAnalysisType,
          configurationDetails: S.optional(ProtectedJobConfigurationDetails),
        }),
      ).annotate({
        identifier: "ProtectedJobReceiverConfiguration",
      });
    case 2:
      return S.Array(ProtectedJobReceiverConfiguration);
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: ProtectedJobStatus,
          receiverConfigurations: ProtectedJobReceiverConfigurations,
          jobComputePayerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProtectedJobSummary" });
    case 4:
      return S.Array(ProtectedJobSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), protectedJobs: ProtectedJobSummaryList }),
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
          analysisType: AnalysisType,
          configurationDetails: S.optional(ConfigurationDetails),
        }),
      ).annotate({ identifier: "ReceiverConfiguration" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ReceiverConfiguration);
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          membershipId: S.String,
          membershipArn: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
          receiverConfigurations: ReceiverConfigurationsList,
          queryComputePayerAccountId: S.optional(S.String),
          intermediateTableConfiguration: S.optional(IntermediateTableOutputConfiguration),
        }),
      ).annotate({ identifier: "ProtectedQuerySummary" });
    case 2:
      return S.Array(ProtectedQuerySummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), protectedQueries: ProtectedQuerySummaryList }),
      ).annotate({
        identifier: "ListProtectedQueriesOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          collaborationIdentifier: S.String.pipe(T.HttpLabel("collaborationIdentifier")),
          schemaType: S.optional(SchemaType).pipe(T.HttpQuery("schemaType")),
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
          type: SchemaType,
          creatorAccountId: S.String,
          createTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          collaborationId: S.String,
          collaborationArn: S.String,
          analysisRuleTypes: AnalysisRuleTypeList,
          analysisMethod: S.optional(AnalysisMethod),
          resourceArn: S.optional(S.String),
          selectedAnalysisMethods: S.optional(SelectedAnalysisMethods),
        }),
      ).annotate({ identifier: "SchemaSummary" });
    case 6:
      return S.Array(SchemaSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ schemaSummaries: SchemaSummaryList, nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: TagMap })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          idMappingTableIdentifier: S.String.pipe(T.HttpLabel("idMappingTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          jobType: S.optional(JobType),
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
      return S.Union([
        /*@__PURE__*/ S.Struct({ queryComputeConfiguration: WorkerComputeConfiguration }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          intermediateTableIdentifier: S.String.pipe(T.HttpLabel("intermediateTableIdentifier")),
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          parameters: S.optional(ParameterMap),
          computeConfiguration: S.optional(IntermediateTableComputeConfiguration),
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
          analysisType: PopulateIntermediateTableAnalysisType,
          versionId: S.String,
        }),
      ).annotate({
        identifier: "PopulateIntermediateTableOutput",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ differentialPrivacy: DifferentialPrivacyPreviewParametersInput }),
      ]);
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          parameters: PreviewPrivacyImpactParametersInput,
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
      return S.suspend(() =>
        S.Struct({ type: DifferentialPrivacyAggregationType, maxCount: S.Number }),
      ).annotate({
        identifier: "DifferentialPrivacyPreviewAggregation",
      });
    case 2:
      return S.Array(DifferentialPrivacyPreviewAggregation);
    case 3:
      return S.suspend(() =>
        S.Struct({ aggregations: DifferentialPrivacyPreviewAggregationList }),
      ).annotate({
        identifier: "DifferentialPrivacyPrivacyImpact",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ differentialPrivacy: DifferentialPrivacyPrivacyImpact }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ privacyImpact: PrivacyImpact })).annotate({
        identifier: "PreviewPrivacyImpactOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          analysisId: S.String,
          analysisType: LogExportAnalysisType,
          resultConfiguration: AnalysisLogExportResultConfiguration,
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
      return S.Union([
        /*@__PURE__*/ S.Struct({ member: ProtectedJobMemberOutputConfigurationInput }),
      ]);
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ outputConfiguration: ProtectedJobOutputConfigurationInput }),
      ).annotate({
        identifier: "ProtectedJobResultConfigurationInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: ProtectedJobType,
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          jobParameters: ProtectedJobParameters,
          resultConfiguration: S.optional(ProtectedJobResultConfigurationInput),
          computeConfiguration: S.optional(ProtectedJobComputeConfiguration),
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
          sqlParameters: ProtectedQuerySQLParameters,
          resultConfiguration: S.optional(ProtectedQueryResultConfiguration),
          computeConfiguration: S.optional(ComputeConfiguration),
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
      return S.suspend(() => S.Struct({ protectedQuery: ProtectedQuery })).annotate({
        identifier: "StartProtectedQueryOutput",
      });
    case 4:
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
      ).annotate({ identifier: "TagResourceInput" });
    case 5:
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
          analyticsEngine: S.optional(AnalyticsEngine),
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
          action: ChangeRequestAction,
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
          tableReference: S.optional(TableReference),
          allowedColumns: S.optional(AllowedColumnList),
          analysisMethod: S.optional(AnalysisMethod),
          selectedAnalysisMethods: S.optional(SelectedAnalysisMethods),
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
          analysisRuleType: ConfiguredTableAnalysisRuleType.pipe(T.HttpLabel("analysisRuleType")),
          analysisRulePolicy: ConfiguredTableAnalysisRulePolicy,
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
          analysisRuleType: ConfiguredTableAssociationAnalysisRuleType.pipe(
            T.HttpLabel("analysisRuleType"),
          ),
          analysisRulePolicy: ConfiguredTableAssociationAnalysisRulePolicy,
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
          idMappingConfig: S.optional(IdMappingConfig),
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
          columns: S.optional(IntermediateTableColumnList),
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
          analysisRuleType: IntermediateTableAnalysisRuleType.pipe(T.HttpLabel("analysisRuleType")),
          analysisRulePolicy: IntermediateTableAnalysisRulePolicy,
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
          queryCompute: S.optional(MembershipQueryComputePaymentConfig),
          machineLearning: S.optional(MembershipMLPaymentConfig),
          jobCompute: S.optional(MembershipJobComputePaymentConfig),
        }),
      ).annotate({
        identifier: "UpdateMembershipPaymentConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          queryLogStatus: S.optional(MembershipQueryLogStatus),
          jobLogStatus: S.optional(MembershipJobLogStatus),
          defaultResultConfiguration: S.optional(MembershipProtectedQueryResultConfiguration),
          defaultJobResultConfiguration: S.optional(MembershipProtectedJobResultConfiguration),
          membershipPaymentConfiguration: S.optional(UpdateMembershipPaymentConfiguration),
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
      return S.suspend(() => S.Struct({ budgetParameters: BudgetParameters })).annotate({
        identifier: "AccessBudgetsPrivacyTemplateUpdateParameters",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters,
        }),
        /*@__PURE__*/ S.Struct({ accessBudget: AccessBudgetsPrivacyTemplateUpdateParameters }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          membershipIdentifier: S.String.pipe(T.HttpLabel("membershipIdentifier")),
          privacyBudgetTemplateIdentifier: S.String.pipe(
            T.HttpLabel("privacyBudgetTemplateIdentifier"),
          ),
          privacyBudgetType: PrivacyBudgetType,
          parameters: S.optional(PrivacyBudgetTemplateUpdateParameters),
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
          targetStatus: TargetProtectedJobStatus,
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
      return S.Array(ValidationExceptionField);
  }
}
