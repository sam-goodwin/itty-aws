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
  sdkId: "EntityResolution",
  serviceShapeName: "AWSVeniceService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "entityresolution" });
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
              `https://entityresolution-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://entityresolution-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://entityresolution.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://entityresolution.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ExceedsLimitException
  extends /*@__PURE__*/ S.TaggedError<ExceedsLimitException>()(
    "ExceedsLimitException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      quotaName: /*@__PURE__*/ S.optional(S.String),
      quotaValue: /*@__PURE__*/ S.optional(S.Number),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
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
export type VeniceGlobalArn = string;
export type StatementId = string;
export type StatementEffect = "Allow" | "Deny" | (string & {});
const StatementEffect = S.String;

export type StatementAction = string;
export type StatementActionList = string[];
const StatementActionList = /*@__PURE__*/ __L.at(__c0, 0);
export type StatementPrincipal = string;
export type StatementPrincipalList = string[];
const StatementPrincipalList = StatementActionList as any as S.Schema<StatementPrincipalList>;
export type StatementCondition = string;
export interface AddPolicyStatementInput {
  arn: string;
  statementId: string;
  effect: StatementEffect;
  action: string[];
  principal: string[];
  condition?: string;
}
const AddPolicyStatementInput = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AddPolicyStatementInput>;
export type PolicyToken = string;
export type PolicyDocument = string;
export interface AddPolicyStatementOutput {
  arn: string;
  token: string;
  policy?: string;
}
const AddPolicyStatementOutput = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AddPolicyStatementOutput>;
export type EntityName = string;
export type HeaderSafeUniqueId = string;
export type UniqueIdList = string[];
const UniqueIdList = StatementActionList as any as S.Schema<UniqueIdList>;
export interface BatchDeleteUniqueIdInput {
  workflowName: string;
  inputSource?: string;
  uniqueIds: string[];
}
const BatchDeleteUniqueIdInput = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<BatchDeleteUniqueIdInput>;
export type DeleteUniqueIdStatus = "COMPLETED" | "ACCEPTED" | (string & {});
const DeleteUniqueIdStatus = S.String;

export type DeleteUniqueIdErrorType = "SERVICE_ERROR" | "VALIDATION_ERROR" | (string & {});
const DeleteUniqueIdErrorType = S.String;

export interface DeleteUniqueIdError {
  uniqueId: string;
  errorType: DeleteUniqueIdErrorType;
}
const DeleteUniqueIdError = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<DeleteUniqueIdError>;
export type DeleteUniqueIdErrorsList = DeleteUniqueIdError[];
const DeleteUniqueIdErrorsList = /*@__PURE__*/ __L.at(__c0, 5);
export interface DeletedUniqueId {
  uniqueId: string;
}
const DeletedUniqueId = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<DeletedUniqueId>;
export type DeletedUniqueIdList = DeletedUniqueId[];
const DeletedUniqueIdList = /*@__PURE__*/ __L.at(__c0, 7);
export type DisconnectedUniqueIdsList = string[];
const DisconnectedUniqueIdsList = StatementActionList as any as S.Schema<DisconnectedUniqueIdsList>;
export interface BatchDeleteUniqueIdOutput {
  status: DeleteUniqueIdStatus;
  errors?: DeleteUniqueIdError[];
  deleted?: DeletedUniqueId[];
  disconnectedUniqueIds?: string[];
}
const BatchDeleteUniqueIdOutput = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchDeleteUniqueIdOutput>;
export type Description = string;
export type InputSourceARN = string;
export type IdNamespaceType = "SOURCE" | "TARGET" | (string & {});
const IdNamespaceType = S.String;

export interface IdMappingWorkflowInputSource {
  inputSourceARN: string;
  schemaName?: string;
  type?: IdNamespaceType;
}
const IdMappingWorkflowInputSource = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<IdMappingWorkflowInputSource>;
export type IdMappingWorkflowInputSourceConfig = IdMappingWorkflowInputSource[];
const IdMappingWorkflowInputSourceConfig = /*@__PURE__*/ __L.at(__c1, 2);
export type KMSArn = string;
export type S3Path = string;
export interface IdMappingWorkflowOutputSource {
  KMSArn?: string;
  outputS3Path: string;
}
const IdMappingWorkflowOutputSource = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<IdMappingWorkflowOutputSource>;
export type IdMappingWorkflowOutputSourceConfig = IdMappingWorkflowOutputSource[];
const IdMappingWorkflowOutputSourceConfig = /*@__PURE__*/ __L.at(__c1, 4);
export type IdMappingType = "PROVIDER" | "RULE_BASED" | (string & {});
const IdMappingType = S.String;

export type AttributeName = string;
export type MatchingKeys = string[];
const MatchingKeys = StatementActionList as any as S.Schema<MatchingKeys>;
export interface Rule {
  ruleName: string;
  matchingKeys: string[];
}
const Rule = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<Rule>;
export type RuleList = Rule[];
const RuleList = /*@__PURE__*/ __L.at(__c1, 6);
export type IdMappingWorkflowRuleDefinitionType = "SOURCE" | "TARGET" | (string & {});
const IdMappingWorkflowRuleDefinitionType = S.String;

export type AttributeMatchingModel = "ONE_TO_ONE" | "MANY_TO_MANY" | (string & {});
const AttributeMatchingModel = S.String;

export type RecordMatchingModel =
  | "ONE_SOURCE_TO_ONE_TARGET"
  | "MANY_SOURCE_TO_ONE_TARGET"
  | (string & {});
const RecordMatchingModel = S.String;

export interface IdMappingRuleBasedProperties {
  rules?: Rule[];
  ruleDefinitionType: IdMappingWorkflowRuleDefinitionType;
  attributeMatchingModel: AttributeMatchingModel;
  recordMatchingModel: RecordMatchingModel;
}
const IdMappingRuleBasedProperties = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<IdMappingRuleBasedProperties>;
export type ProviderServiceArn = string;
export interface IntermediateSourceConfiguration {
  intermediateS3Path: string;
}
const IntermediateSourceConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<IntermediateSourceConfiguration>;
export interface ProviderProperties {
  providerServiceArn: string;
  providerConfiguration?: any;
  intermediateSourceConfiguration?: IntermediateSourceConfiguration;
}
const ProviderProperties = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<ProviderProperties>;
export interface IdMappingTechniques {
  idMappingType: IdMappingType;
  ruleBasedProperties?: IdMappingRuleBasedProperties;
  providerProperties?: ProviderProperties;
}
const IdMappingTechniques = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<IdMappingTechniques>;
export type IdMappingIncrementalRunType = "ON_DEMAND" | (string & {});
const IdMappingIncrementalRunType = S.String;

export interface IdMappingIncrementalRunConfig {
  incrementalRunType?: IdMappingIncrementalRunType;
}
const IdMappingIncrementalRunConfig = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<IdMappingIncrementalRunConfig>;
export type IdMappingRoleArn = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c2, 4);
export interface CreateIdMappingWorkflowInput {
  workflowName: string;
  description?: string;
  inputSourceConfig: IdMappingWorkflowInputSource[];
  outputSourceConfig?: IdMappingWorkflowOutputSource[];
  idMappingTechniques: IdMappingTechniques;
  incrementalRunConfig?: IdMappingIncrementalRunConfig;
  roleArn?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateIdMappingWorkflowInput = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateIdMappingWorkflowInput>;
export type IdMappingWorkflowArn = string;
export interface CreateIdMappingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: IdMappingWorkflowInputSource[];
  outputSourceConfig?: IdMappingWorkflowOutputSource[];
  idMappingTechniques: IdMappingTechniques;
  incrementalRunConfig?: IdMappingIncrementalRunConfig;
  roleArn?: string;
}
const CreateIdMappingWorkflowOutput = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateIdMappingWorkflowOutput>;
export interface IdNamespaceInputSource {
  inputSourceARN: string;
  schemaName?: string;
}
const IdNamespaceInputSource = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<IdNamespaceInputSource>;
export type IdNamespaceInputSourceConfig = IdNamespaceInputSource[];
const IdNamespaceInputSourceConfig = /*@__PURE__*/ __L.at(__c3, 0);
export type IdMappingWorkflowRuleDefinitionTypeList = IdMappingWorkflowRuleDefinitionType[];
const IdMappingWorkflowRuleDefinitionTypeList = /*@__PURE__*/ __L.at(__c3, 1);
export type RecordMatchingModelList = RecordMatchingModel[];
const RecordMatchingModelList = /*@__PURE__*/ __L.at(__c3, 2);
export interface NamespaceRuleBasedProperties {
  rules?: Rule[];
  ruleDefinitionTypes?: IdMappingWorkflowRuleDefinitionType[];
  attributeMatchingModel?: AttributeMatchingModel;
  recordMatchingModels?: RecordMatchingModel[];
}
const NamespaceRuleBasedProperties = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<NamespaceRuleBasedProperties>;
export interface NamespaceProviderProperties {
  providerServiceArn: string;
  providerConfiguration?: any;
}
const NamespaceProviderProperties = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<NamespaceProviderProperties>;
export interface IdNamespaceIdMappingWorkflowProperties {
  idMappingType: IdMappingType;
  ruleBasedProperties?: NamespaceRuleBasedProperties;
  providerProperties?: NamespaceProviderProperties;
}
const IdNamespaceIdMappingWorkflowProperties = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<IdNamespaceIdMappingWorkflowProperties>;
export type IdNamespaceIdMappingWorkflowPropertiesList = IdNamespaceIdMappingWorkflowProperties[];
const IdNamespaceIdMappingWorkflowPropertiesList = /*@__PURE__*/ __L.at(__c3, 6);
export type RoleArn = string;
export interface CreateIdNamespaceInput {
  idNamespaceName: string;
  description?: string;
  inputSourceConfig?: IdNamespaceInputSource[];
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[];
  type: IdNamespaceType;
  roleArn?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateIdNamespaceInput = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateIdNamespaceInput>;
export type IdNamespaceArn = string;
export interface CreateIdNamespaceOutput {
  idNamespaceName: string;
  idNamespaceArn: string;
  description?: string;
  inputSourceConfig?: IdNamespaceInputSource[];
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[];
  type: IdNamespaceType;
  roleArn?: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: { [key: string]: string | undefined };
}
const CreateIdNamespaceOutput = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateIdNamespaceOutput>;
export interface InputSource {
  inputSourceARN: string;
  schemaName: string;
  applyNormalization?: boolean;
}
const InputSource = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<InputSource>;
export type InputSourceConfig = InputSource[];
const InputSourceConfig = /*@__PURE__*/ __L.at(__c4, 2);
export type OptionalS3Path = string;
export interface OutputAttribute {
  name: string;
  hashed?: boolean;
}
const OutputAttribute = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<OutputAttribute>;
export type OutputAttributes = OutputAttribute[];
const OutputAttributes = /*@__PURE__*/ __L.at(__c4, 4);
export type CustomerProfilesDomainArn = string;
export type CustomerProfilesObjectTypeArn = string;
export interface CustomerProfilesIntegrationConfig {
  domainArn: string;
  objectTypeArn: string;
}
const CustomerProfilesIntegrationConfig = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CustomerProfilesIntegrationConfig>;
export interface OutputSource {
  KMSArn?: string;
  outputS3Path?: string;
  output: OutputAttribute[];
  applyNormalization?: boolean;
  customerProfilesIntegrationConfig?: CustomerProfilesIntegrationConfig;
}
const OutputSource = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<OutputSource>;
export type OutputSourceConfig = OutputSource[];
const OutputSourceConfig = /*@__PURE__*/ __L.at(__c4, 7);
export type ResolutionType = "RULE_MATCHING" | "ML_MATCHING" | "PROVIDER" | (string & {});
const ResolutionType = S.String;

export type MatchPurpose = "IDENTIFIER_GENERATION" | "INDEXING" | (string & {});
const MatchPurpose = S.String;

export interface RuleBasedProperties {
  rules: Rule[];
  attributeMatchingModel: AttributeMatchingModel;
  matchPurpose?: MatchPurpose;
}
const RuleBasedProperties = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<RuleBasedProperties>;
export interface RuleCondition {
  ruleName: string;
  condition: string;
}
const RuleCondition = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<RuleCondition>;
export type RuleConditionList = RuleCondition[];
const RuleConditionList = /*@__PURE__*/ __L.at(__c5, 2);
export interface MatchingConfig {
  enableTransitiveMatching?: boolean;
}
const MatchingConfig = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<MatchingConfig>;
export interface RuleConditionProperties {
  rules: RuleCondition[];
  matchingConfig?: MatchingConfig;
}
const RuleConditionProperties = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<RuleConditionProperties>;
export interface ResolutionTechniques {
  resolutionType: ResolutionType;
  ruleBasedProperties?: RuleBasedProperties;
  ruleConditionProperties?: RuleConditionProperties;
  enableRealTimeMatching?: boolean;
  providerProperties?: ProviderProperties;
}
const ResolutionTechniques = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ResolutionTechniques>;
export type IncrementalRunType = "IMMEDIATE" | (string & {});
const IncrementalRunType = S.String;

export interface IncrementalRunConfig {
  incrementalRunType?: IncrementalRunType;
}
const IncrementalRunConfig = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<IncrementalRunConfig>;
export interface CreateMatchingWorkflowInput {
  workflowName: string;
  description?: string;
  inputSourceConfig: InputSource[];
  outputSourceConfig: OutputSource[];
  resolutionTechniques: ResolutionTechniques;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
  tags?: { [key: string]: string | undefined };
}
const CreateMatchingWorkflowInput = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateMatchingWorkflowInput>;
export type MatchingWorkflowArn = string;
export interface CreateMatchingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: InputSource[];
  outputSourceConfig: OutputSource[];
  resolutionTechniques: ResolutionTechniques;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
}
const CreateMatchingWorkflowOutput = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateMatchingWorkflowOutput>;
export type SchemaAttributeType =
  | "NAME"
  | "NAME_FIRST"
  | "NAME_MIDDLE"
  | "NAME_LAST"
  | "ADDRESS"
  | "ADDRESS_STREET1"
  | "ADDRESS_STREET2"
  | "ADDRESS_STREET3"
  | "ADDRESS_CITY"
  | "ADDRESS_STATE"
  | "ADDRESS_COUNTRY"
  | "ADDRESS_POSTALCODE"
  | "PHONE"
  | "PHONE_NUMBER"
  | "PHONE_COUNTRYCODE"
  | "EMAIL_ADDRESS"
  | "UNIQUE_ID"
  | "DATE"
  | "STRING"
  | "PROVIDER_ID"
  | "IPV4"
  | "IPV6"
  | "MAID"
  | (string & {});
const SchemaAttributeType = S.String;

export interface SchemaInputAttribute {
  fieldName: string;
  type: SchemaAttributeType;
  groupName?: string;
  matchKey?: string;
  subType?: string;
  hashed?: boolean;
}
const SchemaInputAttribute = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<SchemaInputAttribute>;
export type SchemaInputAttributes = SchemaInputAttribute[];
const SchemaInputAttributes = /*@__PURE__*/ __L.at(__c6, 2);
export interface CreateSchemaMappingInput {
  schemaName: string;
  description?: string;
  mappedInputFields: SchemaInputAttribute[];
  tags?: { [key: string]: string | undefined };
}
const CreateSchemaMappingInput = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<CreateSchemaMappingInput>;
export type SchemaMappingArn = string;
export interface CreateSchemaMappingOutput {
  schemaName: string;
  schemaArn: string;
  description?: string;
  mappedInputFields: SchemaInputAttribute[];
}
const CreateSchemaMappingOutput = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateSchemaMappingOutput>;
export interface DeleteIdMappingWorkflowInput {
  workflowName: string;
}
const DeleteIdMappingWorkflowInput = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DeleteIdMappingWorkflowInput>;
export interface DeleteIdMappingWorkflowOutput {
  message: string;
}
const DeleteIdMappingWorkflowOutput = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DeleteIdMappingWorkflowOutput>;
export interface DeleteIdNamespaceInput {
  idNamespaceName: string;
}
const DeleteIdNamespaceInput = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteIdNamespaceInput>;
export interface DeleteIdNamespaceOutput {
  message: string;
}
const DeleteIdNamespaceOutput = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteIdNamespaceOutput>;
export interface DeleteMatchingWorkflowInput {
  workflowName: string;
}
const DeleteMatchingWorkflowInput = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteMatchingWorkflowInput>;
export interface DeleteMatchingWorkflowOutput {
  message: string;
}
const DeleteMatchingWorkflowOutput =
  DeleteIdMappingWorkflowOutput as any as S.Schema<DeleteMatchingWorkflowOutput>;
export interface DeletePolicyStatementInput {
  arn: string;
  statementId: string;
}
const DeletePolicyStatementInput = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeletePolicyStatementInput>;
export interface DeletePolicyStatementOutput {
  arn: string;
  token: string;
  policy?: string;
}
const DeletePolicyStatementOutput = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeletePolicyStatementOutput>;
export interface DeleteSchemaMappingInput {
  schemaName: string;
}
const DeleteSchemaMappingInput = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteSchemaMappingInput>;
export interface DeleteSchemaMappingOutput {
  message: string;
}
const DeleteSchemaMappingOutput =
  DeleteIdMappingWorkflowOutput as any as S.Schema<DeleteSchemaMappingOutput>;
export type UniqueId = string;
export type RecordAttributeMapString255 = { [key: string]: string | undefined };
const RecordAttributeMapString255 = /*@__PURE__*/ __L.at(__c7, 5);
export interface Record {
  inputSourceARN: string;
  uniqueId: string;
  recordAttributeMap: { [key: string]: string | undefined };
}
const Record = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<Record>;
export type RecordList = Record[];
const RecordList = /*@__PURE__*/ __L.at(__c7, 7);
export type ProcessingType = "CONSISTENT" | "EVENTUAL" | "EVENTUAL_NO_LOOKUP" | (string & {});
const ProcessingType = S.String;

export interface GenerateMatchIdInput {
  workflowName: string;
  records: Record[];
  processingType?: ProcessingType;
}
const GenerateMatchIdInput = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<GenerateMatchIdInput>;
export interface MatchedRecord {
  inputSourceARN: string;
  recordId: string;
}
const MatchedRecord = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<MatchedRecord>;
export type MatchedRecordsList = MatchedRecord[];
const MatchedRecordsList = /*@__PURE__*/ __L.at(__c8, 2);
export interface MatchGroup {
  records: MatchedRecord[];
  matchId: string;
  matchRule: string;
}
const MatchGroup = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<MatchGroup>;
export type MatchGroupsList = MatchGroup[];
const MatchGroupsList = /*@__PURE__*/ __L.at(__c8, 4);
export type ErrorMessage = string;
export interface FailedRecord {
  inputSourceARN: string;
  uniqueId: string;
  errorMessage: string;
}
const FailedRecord = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<FailedRecord>;
export type FailedRecordsList = FailedRecord[];
const FailedRecordsList = /*@__PURE__*/ __L.at(__c8, 6);
export interface GenerateMatchIdOutput {
  matchGroups: MatchGroup[];
  failedRecords: FailedRecord[];
}
const GenerateMatchIdOutput = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<GenerateMatchIdOutput>;
export type EntityNameOrIdMappingWorkflowArn = string;
export type JobId = string;
export interface GetIdMappingJobInput {
  workflowName: string;
  jobId: string;
}
const GetIdMappingJobInput = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<GetIdMappingJobInput>;
export type JobStatus = "RUNNING" | "SUCCEEDED" | "FAILED" | "QUEUED" | (string & {});
const JobStatus = S.String;

export interface IdMappingJobMetrics {
  inputRecords?: number;
  totalRecordsProcessed?: number;
  recordsNotProcessed?: number;
  deleteRecordsProcessed?: number;
  totalMappedRecords?: number;
  totalMappedSourceRecords?: number;
  totalMappedTargetRecords?: number;
  uniqueRecordsLoaded?: number;
  newMappedRecords?: number;
  newMappedSourceRecords?: number;
  newMappedTargetRecords?: number;
  newUniqueRecordsLoaded?: number;
  mappedRecordsRemoved?: number;
  mappedSourceRecordsRemoved?: number;
  mappedTargetRecordsRemoved?: number;
}
const IdMappingJobMetrics = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<IdMappingJobMetrics>;
export interface ErrorDetails {
  errorMessage?: string;
}
const ErrorDetails = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<ErrorDetails>;
export interface IdMappingJobOutputSource {
  roleArn: string;
  outputS3Path: string;
  KMSArn?: string;
}
const IdMappingJobOutputSource = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<IdMappingJobOutputSource>;
export type IdMappingJobOutputSourceConfig = IdMappingJobOutputSource[];
const IdMappingJobOutputSourceConfig = /*@__PURE__*/ __L.at(__c9, 4);
export type JobType = "BATCH" | "INCREMENTAL" | "DELETE_ONLY" | (string & {});
const JobType = S.String;

export interface GetIdMappingJobOutput {
  jobId: string;
  status: JobStatus;
  startTime: Date;
  endTime?: Date;
  metrics?: IdMappingJobMetrics;
  errorDetails?: ErrorDetails;
  outputSourceConfig?: IdMappingJobOutputSource[];
  jobType?: JobType;
}
const GetIdMappingJobOutput = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<GetIdMappingJobOutput>;
export interface GetIdMappingWorkflowInput {
  workflowName: string;
}
const GetIdMappingWorkflowInput = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<GetIdMappingWorkflowInput>;
export interface GetIdMappingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: IdMappingWorkflowInputSource[];
  outputSourceConfig?: IdMappingWorkflowOutputSource[];
  idMappingTechniques: IdMappingTechniques;
  createdAt: Date;
  updatedAt: Date;
  incrementalRunConfig?: IdMappingIncrementalRunConfig;
  roleArn?: string;
  tags?: { [key: string]: string | undefined };
}
const GetIdMappingWorkflowOutput = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetIdMappingWorkflowOutput>;
export type EntityNameOrIdNamespaceArn = string;
export interface GetIdNamespaceInput {
  idNamespaceName: string;
}
const GetIdNamespaceInput = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<GetIdNamespaceInput>;
export interface GetIdNamespaceOutput {
  idNamespaceName: string;
  idNamespaceArn: string;
  description?: string;
  inputSourceConfig?: IdNamespaceInputSource[];
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[];
  type: IdNamespaceType;
  roleArn?: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: { [key: string]: string | undefined };
}
const GetIdNamespaceOutput = CreateIdNamespaceOutput as any as S.Schema<GetIdNamespaceOutput>;
export type RecordAttributeMap = { [key: string]: string | undefined };
const RecordAttributeMap = RecordAttributeMapString255 as any as S.Schema<RecordAttributeMap>;
export interface GetMatchIdInput {
  workflowName: string;
  record: { [key: string]: string | undefined };
  applyNormalization?: boolean;
}
const GetMatchIdInput = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<GetMatchIdInput>;
export interface GetMatchIdOutput {
  matchId?: string;
  matchRule?: string;
}
const GetMatchIdOutput = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<GetMatchIdOutput>;
export interface GetMatchingJobInput {
  workflowName: string;
  jobId: string;
}
const GetMatchingJobInput = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<GetMatchingJobInput>;
export interface JobMetrics {
  inputRecords?: number;
  totalRecordsProcessed?: number;
  recordsNotProcessed?: number;
  deleteRecordsProcessed?: number;
  matchIDs?: number;
}
const JobMetrics = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<JobMetrics>;
export interface JobOutputSource {
  roleArn: string;
  outputS3Path: string;
  KMSArn?: string;
}
export type JobOutputSourceConfig = JobOutputSource[];
const JobOutputSourceConfig =
  IdMappingJobOutputSourceConfig as any as S.Schema<JobOutputSourceConfig>;
export interface GetMatchingJobOutput {
  jobId: string;
  status: JobStatus;
  startTime: Date;
  endTime?: Date;
  metrics?: JobMetrics;
  errorDetails?: ErrorDetails;
  outputSourceConfig?: JobOutputSource[];
}
const GetMatchingJobOutput = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetMatchingJobOutput>;
export interface GetMatchingWorkflowInput {
  workflowName: string;
}
const GetMatchingWorkflowInput = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<GetMatchingWorkflowInput>;
export interface GetMatchingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: InputSource[];
  outputSourceConfig: OutputSource[];
  resolutionTechniques: ResolutionTechniques;
  createdAt: Date;
  updatedAt: Date;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
  tags?: { [key: string]: string | undefined };
}
const GetMatchingWorkflowOutput = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<GetMatchingWorkflowOutput>;
export interface GetPolicyInput {
  arn: string;
}
const GetPolicyInput = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<GetPolicyInput>;
export interface GetPolicyOutput {
  arn: string;
  token: string;
  policy?: string;
}
const GetPolicyOutput = AddPolicyStatementOutput as any as S.Schema<GetPolicyOutput>;
export interface GetProviderServiceInput {
  providerName: string;
  providerServiceName: string;
}
const GetProviderServiceInput = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<GetProviderServiceInput>;
export type ProviderServiceDisplayName = string;
export type ServiceType = "ASSIGNMENT" | "ID_MAPPING" | (string & {});
const ServiceType = S.String;

export interface ProviderIdNameSpaceConfiguration {
  description?: string;
  providerTargetConfigurationDefinition?: any;
  providerSourceConfigurationDefinition?: any;
}
const ProviderIdNameSpaceConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ProviderIdNameSpaceConfiguration>;
export interface ProviderMarketplaceConfiguration {
  dataSetId: string;
  revisionId: string;
  assetId: string;
  listingId: string;
}
const ProviderMarketplaceConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<ProviderMarketplaceConfiguration>;
export type ProviderEndpointConfiguration = {
  marketplaceConfiguration: ProviderMarketplaceConfiguration;
};
const ProviderEndpointConfiguration = /*@__PURE__*/ __L.at(__c11, 4);
export type AwsAccountId = string;
export type AwsAccountIdList = string[];
const AwsAccountIdList = StatementActionList as any as S.Schema<AwsAccountIdList>;
export type RequiredBucketActionsList = string[];
const RequiredBucketActionsList = StatementActionList as any as S.Schema<RequiredBucketActionsList>;
export interface ProviderIntermediateDataAccessConfiguration {
  awsAccountIds?: string[];
  requiredBucketActions?: string[];
}
const ProviderIntermediateDataAccessConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ProviderIntermediateDataAccessConfiguration>;
export type SchemaList = string[];
const SchemaList = StatementActionList as any as S.Schema<SchemaList>;
export type Schemas = string[][];
const Schemas = /*@__PURE__*/ __L.at(__c11, 6);
export interface ProviderSchemaAttribute {
  fieldName: string;
  type: SchemaAttributeType;
  subType?: string;
  hashing?: boolean;
}
const ProviderSchemaAttribute = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<ProviderSchemaAttribute>;
export type ProviderSchemaAttributes = ProviderSchemaAttribute[];
const ProviderSchemaAttributes = /*@__PURE__*/ __L.at(__c12, 0);
export interface ProviderComponentSchema {
  schemas?: string[][];
  providerSchemaAttributes?: ProviderSchemaAttribute[];
}
const ProviderComponentSchema = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ProviderComponentSchema>;
export interface GetProviderServiceOutput {
  providerName: string;
  providerServiceName: string;
  providerServiceDisplayName: string;
  providerServiceType: ServiceType;
  providerServiceArn: string;
  providerConfigurationDefinition?: any;
  providerIdNameSpaceConfiguration?: ProviderIdNameSpaceConfiguration;
  providerJobConfiguration?: any;
  providerEndpointConfiguration: ProviderEndpointConfiguration;
  anonymizedOutput: boolean;
  providerEntityOutputDefinition: any;
  providerIntermediateDataAccessConfiguration?: ProviderIntermediateDataAccessConfiguration;
  providerComponentSchema?: ProviderComponentSchema;
}
const GetProviderServiceOutput = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<GetProviderServiceOutput>;
export interface GetSchemaMappingInput {
  schemaName: string;
}
const GetSchemaMappingInput = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<GetSchemaMappingInput>;
export interface GetSchemaMappingOutput {
  schemaName: string;
  schemaArn: string;
  description?: string;
  mappedInputFields: SchemaInputAttribute[];
  createdAt: Date;
  updatedAt: Date;
  tags?: { [key: string]: string | undefined };
  hasWorkflows: boolean;
}
const GetSchemaMappingOutput = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<GetSchemaMappingOutput>;
export type NextToken = string;
export interface ListIdMappingJobsInput {
  workflowName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListIdMappingJobsInput = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ListIdMappingJobsInput>;
export interface JobSummary {
  jobId: string;
  status: JobStatus;
  startTime: Date;
  endTime?: Date;
}
const JobSummary = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<JobSummary>;
export type JobList = JobSummary[];
const JobList = /*@__PURE__*/ __L.at(__c12, 7);
export interface ListIdMappingJobsOutput {
  jobs?: JobSummary[];
  nextToken?: string;
}
const ListIdMappingJobsOutput = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<ListIdMappingJobsOutput>;
export interface ListIdMappingWorkflowsInput {
  nextToken?: string;
  maxResults?: number;
}
const ListIdMappingWorkflowsInput = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<ListIdMappingWorkflowsInput>;
export interface IdMappingWorkflowSummary {
  workflowName: string;
  workflowArn: string;
  createdAt: Date;
  updatedAt: Date;
}
const IdMappingWorkflowSummary = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<IdMappingWorkflowSummary>;
export type IdMappingWorkflowList = IdMappingWorkflowSummary[];
const IdMappingWorkflowList = /*@__PURE__*/ __L.at(__c13, 3);
export interface ListIdMappingWorkflowsOutput {
  workflowSummaries?: IdMappingWorkflowSummary[];
  nextToken?: string;
}
const ListIdMappingWorkflowsOutput = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<ListIdMappingWorkflowsOutput>;
export interface ListIdNamespacesInput {
  nextToken?: string;
  maxResults?: number;
}
const ListIdNamespacesInput = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ListIdNamespacesInput>;
export interface IdNamespaceIdMappingWorkflowMetadata {
  idMappingType: IdMappingType;
}
const IdNamespaceIdMappingWorkflowMetadata = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<IdNamespaceIdMappingWorkflowMetadata>;
export type IdNamespaceIdMappingWorkflowMetadataList = IdNamespaceIdMappingWorkflowMetadata[];
const IdNamespaceIdMappingWorkflowMetadataList = /*@__PURE__*/ __L.at(__c13, 7);
export interface IdNamespaceSummary {
  idNamespaceName: string;
  idNamespaceArn: string;
  description?: string;
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowMetadata[];
  type: IdNamespaceType;
  createdAt: Date;
  updatedAt: Date;
}
const IdNamespaceSummary = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<IdNamespaceSummary>;
export type IdNamespaceList = IdNamespaceSummary[];
const IdNamespaceList = /*@__PURE__*/ __L.at(__c14, 1);
export interface ListIdNamespacesOutput {
  idNamespaceSummaries?: IdNamespaceSummary[];
  nextToken?: string;
}
const ListIdNamespacesOutput = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListIdNamespacesOutput>;
export interface ListMatchingJobsInput {
  workflowName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListMatchingJobsInput = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ListMatchingJobsInput>;
export interface ListMatchingJobsOutput {
  jobs?: JobSummary[];
  nextToken?: string;
}
const ListMatchingJobsOutput = ListIdMappingJobsOutput as any as S.Schema<ListMatchingJobsOutput>;
export interface ListMatchingWorkflowsInput {
  nextToken?: string;
  maxResults?: number;
}
const ListMatchingWorkflowsInput = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<ListMatchingWorkflowsInput>;
export interface MatchingWorkflowSummary {
  workflowName: string;
  workflowArn: string;
  createdAt: Date;
  updatedAt: Date;
  resolutionType: ResolutionType;
}
const MatchingWorkflowSummary = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<MatchingWorkflowSummary>;
export type MatchingWorkflowList = MatchingWorkflowSummary[];
const MatchingWorkflowList = /*@__PURE__*/ __L.at(__c14, 6);
export interface ListMatchingWorkflowsOutput {
  workflowSummaries?: MatchingWorkflowSummary[];
  nextToken?: string;
}
const ListMatchingWorkflowsOutput = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<ListMatchingWorkflowsOutput>;
export interface ListProviderServicesInput {
  nextToken?: string;
  maxResults?: number;
  providerName?: string;
}
const ListProviderServicesInput = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<ListProviderServicesInput>;
export interface ProviderServiceSummary {
  providerServiceArn: string;
  providerName: string;
  providerServiceDisplayName: string;
  providerServiceName: string;
  providerServiceType: ServiceType;
}
const ProviderServiceSummary = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ProviderServiceSummary>;
export type ProviderServiceList = ProviderServiceSummary[];
const ProviderServiceList = /*@__PURE__*/ __L.at(__c15, 2);
export interface ListProviderServicesOutput {
  providerServiceSummaries?: ProviderServiceSummary[];
  nextToken?: string;
}
const ListProviderServicesOutput = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<ListProviderServicesOutput>;
export interface ListSchemaMappingsInput {
  nextToken?: string;
  maxResults?: number;
}
const ListSchemaMappingsInput = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<ListSchemaMappingsInput>;
export interface SchemaMappingSummary {
  schemaName: string;
  schemaArn: string;
  createdAt: Date;
  updatedAt: Date;
  hasWorkflows: boolean;
}
const SchemaMappingSummary = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<SchemaMappingSummary>;
export type SchemaMappingList = SchemaMappingSummary[];
const SchemaMappingList = /*@__PURE__*/ __L.at(__c15, 6);
export interface ListSchemaMappingsOutput {
  schemaList?: SchemaMappingSummary[];
  nextToken?: string;
}
const ListSchemaMappingsOutput = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<ListSchemaMappingsOutput>;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ListTagsForResourceOutput>;
export interface PutPolicyInput {
  arn: string;
  token?: string;
  policy: string;
}
const PutPolicyInput = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<PutPolicyInput>;
export interface PutPolicyOutput {
  arn: string;
  token: string;
  policy?: string;
}
const PutPolicyOutput = AddPolicyStatementOutput as any as S.Schema<PutPolicyOutput>;
export interface StartIdMappingJobInput {
  workflowName: string;
  outputSourceConfig?: IdMappingJobOutputSource[];
  jobType?: JobType;
}
const StartIdMappingJobInput = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<StartIdMappingJobInput>;
export interface StartIdMappingJobOutput {
  jobId: string;
  outputSourceConfig?: IdMappingJobOutputSource[];
  jobType?: JobType;
}
const StartIdMappingJobOutput = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<StartIdMappingJobOutput>;
export interface StartMatchingJobInput {
  workflowName: string;
}
const StartMatchingJobInput = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<StartMatchingJobInput>;
export interface StartMatchingJobOutput {
  jobId: string;
}
const StartMatchingJobOutput = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<StartMatchingJobOutput>;
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
const TagKeyList = StatementActionList as any as S.Schema<TagKeyList>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = TagResourceOutput as any as S.Schema<UntagResourceOutput>;
export interface UpdateIdMappingWorkflowInput {
  workflowName: string;
  description?: string;
  inputSourceConfig: IdMappingWorkflowInputSource[];
  outputSourceConfig?: IdMappingWorkflowOutputSource[];
  idMappingTechniques: IdMappingTechniques;
  incrementalRunConfig?: IdMappingIncrementalRunConfig;
  roleArn?: string;
}
const UpdateIdMappingWorkflowInput = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<UpdateIdMappingWorkflowInput>;
export interface UpdateIdMappingWorkflowOutput {
  workflowName: string;
  workflowArn: string;
  description?: string;
  inputSourceConfig: IdMappingWorkflowInputSource[];
  outputSourceConfig?: IdMappingWorkflowOutputSource[];
  idMappingTechniques: IdMappingTechniques;
  incrementalRunConfig?: IdMappingIncrementalRunConfig;
  roleArn?: string;
}
const UpdateIdMappingWorkflowOutput =
  CreateIdMappingWorkflowOutput as any as S.Schema<UpdateIdMappingWorkflowOutput>;
export interface UpdateIdNamespaceInput {
  idNamespaceName: string;
  description?: string;
  inputSourceConfig?: IdNamespaceInputSource[];
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[];
  roleArn?: string;
}
const UpdateIdNamespaceInput = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<UpdateIdNamespaceInput>;
export interface UpdateIdNamespaceOutput {
  idNamespaceName: string;
  idNamespaceArn: string;
  description?: string;
  inputSourceConfig?: IdNamespaceInputSource[];
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[];
  type: IdNamespaceType;
  roleArn?: string;
  createdAt: Date;
  updatedAt: Date;
}
const UpdateIdNamespaceOutput = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<UpdateIdNamespaceOutput>;
export interface UpdateMatchingWorkflowInput {
  workflowName: string;
  description?: string;
  inputSourceConfig: InputSource[];
  outputSourceConfig: OutputSource[];
  resolutionTechniques: ResolutionTechniques;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
}
const UpdateMatchingWorkflowInput = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<UpdateMatchingWorkflowInput>;
export interface UpdateMatchingWorkflowOutput {
  workflowName: string;
  description?: string;
  inputSourceConfig: InputSource[];
  outputSourceConfig: OutputSource[];
  resolutionTechniques: ResolutionTechniques;
  incrementalRunConfig?: IncrementalRunConfig;
  roleArn: string;
}
const UpdateMatchingWorkflowOutput = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<UpdateMatchingWorkflowOutput>;
export interface UpdateSchemaMappingInput {
  schemaName: string;
  description?: string;
  mappedInputFields: SchemaInputAttribute[];
}
const UpdateSchemaMappingInput = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<UpdateSchemaMappingInput>;
export interface UpdateSchemaMappingOutput {
  schemaName: string;
  schemaArn: string;
  description?: string;
  mappedInputFields: SchemaInputAttribute[];
}
const UpdateSchemaMappingOutput =
  CreateSchemaMappingOutput as any as S.Schema<UpdateSchemaMappingOutput>;
export type AddPolicyStatementError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a policy statement object. To retrieve a list of existing policy statements, use the `GetPolicy` API.
 */
export const addPolicyStatement: API.OperationMethod<
  AddPolicyStatementInput,
  AddPolicyStatementOutput,
  AddPolicyStatementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddPolicyStatementInput,
  output: AddPolicyStatementOutput,
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
  operationName: "AddPolicyStatement",
}));

export type BatchDeleteUniqueIdError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes multiple unique IDs in a matching workflow.
 */
export const batchDeleteUniqueId: API.OperationMethod<
  BatchDeleteUniqueIdInput,
  BatchDeleteUniqueIdOutput,
  BatchDeleteUniqueIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteUniqueIdInput,
  output: BatchDeleteUniqueIdOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteUniqueId",
}));

export type CreateIdMappingWorkflowError =
  | AccessDeniedException
  | ConflictException
  | ExceedsLimitException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an `IdMappingWorkflow` object which stores the configuration of the data processing job to be run. Each `IdMappingWorkflow` must have a unique workflow name. To modify an existing workflow, use the UpdateIdMappingWorkflow API.
 *
 * Incremental processing is not supported for ID mapping workflows.
 */
export const createIdMappingWorkflow: API.OperationMethod<
  CreateIdMappingWorkflowInput,
  CreateIdMappingWorkflowOutput,
  CreateIdMappingWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateIdMappingWorkflowInput,
  output: CreateIdMappingWorkflowOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    ExceedsLimitException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIdMappingWorkflow",
}));

export type CreateIdNamespaceError =
  | AccessDeniedException
  | ConflictException
  | ExceedsLimitException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an ID namespace object which will help customers provide metadata explaining their dataset and how to use it. Each ID namespace must have a unique name. To modify an existing ID namespace, use the UpdateIdNamespace API.
 */
export const createIdNamespace: API.OperationMethod<
  CreateIdNamespaceInput,
  CreateIdNamespaceOutput,
  CreateIdNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateIdNamespaceInput,
  output: CreateIdNamespaceOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    ExceedsLimitException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIdNamespace",
}));

export type CreateMatchingWorkflowError =
  | AccessDeniedException
  | ConflictException
  | ExceedsLimitException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a matching workflow that defines the configuration for a data processing job. The workflow name must be unique. To modify an existing workflow, use `UpdateMatchingWorkflow`.
 *
 * For workflows where `resolutionType` is `PROVIDER`, incremental processing is not supported.
 */
export const createMatchingWorkflow: API.OperationMethod<
  CreateMatchingWorkflowInput,
  CreateMatchingWorkflowOutput,
  CreateMatchingWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMatchingWorkflowInput,
  output: CreateMatchingWorkflowOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    ExceedsLimitException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMatchingWorkflow",
}));

export type CreateSchemaMappingError =
  | AccessDeniedException
  | ConflictException
  | ExceedsLimitException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a schema mapping, which defines the schema of the input customer records table. The `SchemaMapping` also provides Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.
 */
export const createSchemaMapping: API.OperationMethod<
  CreateSchemaMappingInput,
  CreateSchemaMappingOutput,
  CreateSchemaMappingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSchemaMappingInput,
  output: CreateSchemaMappingOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    ExceedsLimitException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSchemaMapping",
}));

export type DeleteIdMappingWorkflowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the `IdMappingWorkflow` with a given name. This operation returns a `ResourceNotFoundException` if a workflow with the given name does not exist.
 */
export const deleteIdMappingWorkflow: API.OperationMethod<
  DeleteIdMappingWorkflowInput,
  DeleteIdMappingWorkflowOutput,
  DeleteIdMappingWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIdMappingWorkflowInput,
  output: DeleteIdMappingWorkflowOutput,
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
  operationName: "DeleteIdMappingWorkflow",
}));

export type DeleteIdNamespaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Deletes the `IdNamespace` with a given name. This operation returns a `ResourceNotFoundException` if an ID namespace with the given name does not exist.
 */
export const deleteIdNamespace: API.OperationMethod<
  DeleteIdNamespaceInput,
  DeleteIdNamespaceOutput,
  DeleteIdNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIdNamespaceInput,
  output: DeleteIdNamespaceOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdNamespace",
}));

export type DeleteMatchingWorkflowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the `MatchingWorkflow` with a given name. This operation returns a `ResourceNotFoundException` if a workflow with the given name does not exist.
 */
export const deleteMatchingWorkflow: API.OperationMethod<
  DeleteMatchingWorkflowInput,
  DeleteMatchingWorkflowOutput,
  DeleteMatchingWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMatchingWorkflowInput,
  output: DeleteMatchingWorkflowOutput,
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
  operationName: "DeleteMatchingWorkflow",
}));

export type DeletePolicyStatementError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the policy statement.
 */
export const deletePolicyStatement: API.OperationMethod<
  DeletePolicyStatementInput,
  DeletePolicyStatementOutput,
  DeletePolicyStatementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePolicyStatementInput,
  output: DeletePolicyStatementOutput,
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
  operationName: "DeletePolicyStatement",
}));

export type DeleteSchemaMappingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the `SchemaMapping` with a given name. This operation returns a `ResourceNotFoundException` if a schema with the given name does not exist. This operation will fail if there is a `MatchingWorkflow` object that references the `SchemaMapping` in the workflow's `InputSourceConfig`.
 */
export const deleteSchemaMapping: API.OperationMethod<
  DeleteSchemaMappingInput,
  DeleteSchemaMappingOutput,
  DeleteSchemaMappingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSchemaMappingInput,
  output: DeleteSchemaMappingOutput,
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
  operationName: "DeleteSchemaMapping",
}));

export type GenerateMatchIdError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Generates or retrieves Match IDs for records using a rule-based matching workflow. When you call this operation, it processes your records against the workflow's matching rules to identify potential matches. For existing records, it retrieves their Match IDs and associated rules. For records without matches, it generates new Match IDs. The operation saves results to Amazon S3.
 *
 * The processing type (`processingType`) you choose affects both the accuracy and response time of the operation. Additional charges apply for each API call, whether made through the Entity Resolution console or directly via the API. The rule-based matching workflow must exist and be active before calling this operation.
 */
export const generateMatchId: API.OperationMethod<
  GenerateMatchIdInput,
  GenerateMatchIdOutput,
  GenerateMatchIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateMatchIdInput,
  output: GenerateMatchIdOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateMatchId",
}));

export type GetIdMappingJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the status, metrics, and errors (if there are any) that are associated with a job.
 */
export const getIdMappingJob: API.OperationMethod<
  GetIdMappingJobInput,
  GetIdMappingJobOutput,
  GetIdMappingJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdMappingJobInput,
  output: GetIdMappingJobOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdMappingJob",
}));

export type GetIdMappingWorkflowError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the `IdMappingWorkflow` with a given name, if it exists.
 */
export const getIdMappingWorkflow: API.OperationMethod<
  GetIdMappingWorkflowInput,
  GetIdMappingWorkflowOutput,
  GetIdMappingWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdMappingWorkflowInput,
  output: GetIdMappingWorkflowOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdMappingWorkflow",
}));

export type GetIdNamespaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the `IdNamespace` with a given name, if it exists.
 */
export const getIdNamespace: API.OperationMethod<
  GetIdNamespaceInput,
  GetIdNamespaceOutput,
  GetIdNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdNamespaceInput,
  output: GetIdNamespaceOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdNamespace",
}));

export type GetMatchIdError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the corresponding Match ID of a customer record if the record has been processed in a rule-based matching workflow.
 *
 * You can call this API as a dry run of an incremental load on the rule-based matching workflow.
 */
export const getMatchId: API.OperationMethod<
  GetMatchIdInput,
  GetMatchIdOutput,
  GetMatchIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMatchIdInput,
  output: GetMatchIdOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMatchId",
}));

export type GetMatchingJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the status, metrics, and errors (if there are any) that are associated with a job.
 */
export const getMatchingJob: API.OperationMethod<
  GetMatchingJobInput,
  GetMatchingJobOutput,
  GetMatchingJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMatchingJobInput,
  output: GetMatchingJobOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMatchingJob",
}));

export type GetMatchingWorkflowError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the `MatchingWorkflow` with a given name, if it exists.
 */
export const getMatchingWorkflow: API.OperationMethod<
  GetMatchingWorkflowInput,
  GetMatchingWorkflowOutput,
  GetMatchingWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMatchingWorkflowInput,
  output: GetMatchingWorkflowOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMatchingWorkflow",
}));

export type GetPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the resource-based policy.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyInput,
  GetPolicyOutput,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyInput,
  output: GetPolicyOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetProviderServiceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the `ProviderService` of a given name.
 */
export const getProviderService: API.OperationMethod<
  GetProviderServiceInput,
  GetProviderServiceOutput,
  GetProviderServiceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProviderServiceInput,
  output: GetProviderServiceOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProviderService",
}));

export type GetSchemaMappingError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the SchemaMapping of a given name.
 */
export const getSchemaMapping: API.OperationMethod<
  GetSchemaMappingInput,
  GetSchemaMappingOutput,
  GetSchemaMappingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSchemaMappingInput,
  output: GetSchemaMappingOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSchemaMapping",
}));

export type ListIdMappingJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all ID mapping jobs for a given workflow.
 */
export const listIdMappingJobs: API.PaginatedOperationMethod<
  ListIdMappingJobsInput,
  ListIdMappingJobsOutput,
  ListIdMappingJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIdMappingJobsInput,
  output: ListIdMappingJobsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdMappingJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIdMappingWorkflowsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all the `IdMappingWorkflows` that have been created for an Amazon Web Services account.
 */
export const listIdMappingWorkflows: API.PaginatedOperationMethod<
  ListIdMappingWorkflowsInput,
  ListIdMappingWorkflowsOutput,
  ListIdMappingWorkflowsError,
  Credentials | HttpClient.HttpClient,
  IdMappingWorkflowSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIdMappingWorkflowsInput,
  output: ListIdMappingWorkflowsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdMappingWorkflows",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workflowSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIdNamespacesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all ID namespaces.
 */
export const listIdNamespaces: API.PaginatedOperationMethod<
  ListIdNamespacesInput,
  ListIdNamespacesOutput,
  ListIdNamespacesError,
  Credentials | HttpClient.HttpClient,
  IdNamespaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIdNamespacesInput,
  output: ListIdNamespacesOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdNamespaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "idNamespaceSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMatchingJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all jobs for a given workflow.
 */
export const listMatchingJobs: API.PaginatedOperationMethod<
  ListMatchingJobsInput,
  ListMatchingJobsOutput,
  ListMatchingJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMatchingJobsInput,
  output: ListMatchingJobsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMatchingJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMatchingWorkflowsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all the `MatchingWorkflows` that have been created for an Amazon Web Services account.
 */
export const listMatchingWorkflows: API.PaginatedOperationMethod<
  ListMatchingWorkflowsInput,
  ListMatchingWorkflowsOutput,
  ListMatchingWorkflowsError,
  Credentials | HttpClient.HttpClient,
  MatchingWorkflowSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMatchingWorkflowsInput,
  output: ListMatchingWorkflowsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMatchingWorkflows",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workflowSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProviderServicesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all the `ProviderServices` that are available in this Amazon Web Services Region.
 */
export const listProviderServices: API.PaginatedOperationMethod<
  ListProviderServicesInput,
  ListProviderServicesOutput,
  ListProviderServicesError,
  Credentials | HttpClient.HttpClient,
  ProviderServiceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProviderServicesInput,
  output: ListProviderServicesOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProviderServices",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "providerServiceSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSchemaMappingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all the `SchemaMappings` that have been created for an Amazon Web Services account.
 */
export const listSchemaMappings: API.PaginatedOperationMethod<
  ListSchemaMappingsInput,
  ListSchemaMappingsOutput,
  ListSchemaMappingsError,
  Credentials | HttpClient.HttpClient,
  SchemaMappingSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSchemaMappingsInput,
  output: ListSchemaMappingsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSchemaMappings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "schemaList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Displays the tags associated with an Entity Resolution resource. In Entity Resolution, `SchemaMapping`, and `MatchingWorkflow` can be tagged.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the resource-based policy.
 */
export const putPolicy: API.OperationMethod<
  PutPolicyInput,
  PutPolicyOutput,
  PutPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutPolicyInput,
  output: PutPolicyOutput,
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
  operationName: "PutPolicy",
}));

export type StartIdMappingJobError =
  | AccessDeniedException
  | ConflictException
  | ExceedsLimitException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the `IdMappingJob` of a workflow. The workflow must have previously been created using the `CreateIdMappingWorkflow` endpoint.
 */
export const startIdMappingJob: API.OperationMethod<
  StartIdMappingJobInput,
  StartIdMappingJobOutput,
  StartIdMappingJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartIdMappingJobInput,
  output: StartIdMappingJobOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    ExceedsLimitException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartIdMappingJob",
}));

export type StartMatchingJobError =
  | AccessDeniedException
  | ConflictException
  | ExceedsLimitException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the `MatchingJob` of a workflow. The workflow must have previously been created using the `CreateMatchingWorkflow` endpoint.
 */
export const startMatchingJob: API.OperationMethod<
  StartMatchingJobInput,
  StartMatchingJobOutput,
  StartMatchingJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartMatchingJobInput,
  output: StartMatchingJobOutput,
  errors: [
    AccessDeniedException,
    ConflictException,
    ExceedsLimitException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMatchingJob",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified Entity Resolution resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Entity Resolution, `SchemaMapping` and `MatchingWorkflow` can be tagged. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the `TagResource` action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceInput,
  output: TagResourceOutput,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = InternalServerException | ResourceNotFoundException | CommonErrors;
/**
 * Removes one or more tags from the specified Entity Resolution resource. In Entity Resolution, `SchemaMapping`, and `MatchingWorkflow` can be tagged.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceOutput,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateIdMappingWorkflowError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing `IdMappingWorkflow`. This method is identical to CreateIdMappingWorkflow, except it uses an HTTP `PUT` request instead of a `POST` request, and the `IdMappingWorkflow` must already exist for the method to succeed.
 *
 * Incremental processing is not supported for ID mapping workflows.
 */
export const updateIdMappingWorkflow: API.OperationMethod<
  UpdateIdMappingWorkflowInput,
  UpdateIdMappingWorkflowOutput,
  UpdateIdMappingWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateIdMappingWorkflowInput,
  output: UpdateIdMappingWorkflowOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIdMappingWorkflow",
}));

export type UpdateIdNamespaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing ID namespace.
 */
export const updateIdNamespace: API.OperationMethod<
  UpdateIdNamespaceInput,
  UpdateIdNamespaceOutput,
  UpdateIdNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateIdNamespaceInput,
  output: UpdateIdNamespaceOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIdNamespace",
}));

export type UpdateMatchingWorkflowError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing matching workflow. The workflow must already exist for this operation to succeed.
 *
 * For workflows where `resolutionType` is `PROVIDER`, incremental processing is not supported.
 */
export const updateMatchingWorkflow: API.OperationMethod<
  UpdateMatchingWorkflowInput,
  UpdateMatchingWorkflowOutput,
  UpdateMatchingWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMatchingWorkflowInput,
  output: UpdateMatchingWorkflowOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMatchingWorkflow",
}));

export type UpdateSchemaMappingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a schema mapping.
 *
 * A schema is immutable if it is being used by a workflow. Therefore, you can't update a schema mapping if it's associated with a workflow.
 */
export const updateSchemaMapping: API.OperationMethod<
  UpdateSchemaMappingInput,
  UpdateSchemaMappingOutput,
  UpdateSchemaMappingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSchemaMappingInput,
  output: UpdateSchemaMappingOutput,
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
  operationName: "UpdateSchemaMapping",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          statementId: S.String.pipe(T.HttpLabel("statementId")),
          effect: StatementEffect,
          action: StatementActionList,
          principal: StatementPrincipalList,
          condition: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policies/{arn}/{statementId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AddPolicyStatementInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String, token: S.String, policy: S.optional(S.String) }),
      ).annotate({ identifier: "AddPolicyStatementOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          inputSource: S.optional(S.String).pipe(T.HttpHeader("inputSource")),
          uniqueIds: UniqueIdList.pipe(T.HttpHeader("uniqueIds")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/matchingworkflows/{workflowName}/uniqueids" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchDeleteUniqueIdInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ uniqueId: S.String, errorType: DeleteUniqueIdErrorType }),
      ).annotate({ identifier: "DeleteUniqueIdError" });
    case 5:
      return S.Array(DeleteUniqueIdError);
    case 6:
      return S.suspend(() => S.Struct({ uniqueId: S.String })).annotate({
        identifier: "DeletedUniqueId",
      });
    case 7:
      return S.Array(DeletedUniqueId);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: DeleteUniqueIdStatus,
          errors: S.optional(DeleteUniqueIdErrorsList),
          deleted: S.optional(DeletedUniqueIdList),
          disconnectedUniqueIds: S.optional(DisconnectedUniqueIdsList),
        }),
      ).annotate({
        identifier: "BatchDeleteUniqueIdOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputSourceARN: S.String,
          schemaName: S.optional(S.String),
          type: S.optional(IdNamespaceType),
        }),
      ).annotate({
        identifier: "IdMappingWorkflowInputSource",
      });
    case 2:
      return S.Array(IdMappingWorkflowInputSource);
    case 3:
      return S.suspend(() =>
        S.Struct({ KMSArn: S.optional(S.String), outputS3Path: S.String }),
      ).annotate({
        identifier: "IdMappingWorkflowOutputSource",
      });
    case 4:
      return S.Array(IdMappingWorkflowOutputSource);
    case 5:
      return S.suspend(() => S.Struct({ ruleName: S.String, matchingKeys: MatchingKeys })).annotate(
        { identifier: "Rule" },
      );
    case 6:
      return S.Array(Rule);
    case 7:
      return S.suspend(() =>
        S.Struct({
          rules: S.optional(RuleList),
          ruleDefinitionType: IdMappingWorkflowRuleDefinitionType,
          attributeMatchingModel: AttributeMatchingModel,
          recordMatchingModel: RecordMatchingModel,
        }),
      ).annotate({
        identifier: "IdMappingRuleBasedProperties",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ intermediateS3Path: S.String })).annotate({
        identifier: "IntermediateSourceConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          providerServiceArn: S.String,
          providerConfiguration: S.optional(S.Any),
          intermediateSourceConfiguration: S.optional(IntermediateSourceConfiguration),
        }),
      ).annotate({ identifier: "ProviderProperties" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          idMappingType: IdMappingType,
          ruleBasedProperties: S.optional(IdMappingRuleBasedProperties),
          providerProperties: S.optional(ProviderProperties),
        }),
      ).annotate({ identifier: "IdMappingTechniques" });
    case 3:
      return S.suspend(() =>
        S.Struct({ incrementalRunType: S.optional(IdMappingIncrementalRunType) }),
      ).annotate({
        identifier: "IdMappingIncrementalRunConfig",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          description: S.optional(S.String),
          inputSourceConfig: IdMappingWorkflowInputSourceConfig,
          outputSourceConfig: S.optional(IdMappingWorkflowOutputSourceConfig),
          idMappingTechniques: IdMappingTechniques,
          incrementalRunConfig: S.optional(IdMappingIncrementalRunConfig),
          roleArn: S.optional(S.String),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/idmappingworkflows" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateIdMappingWorkflowInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          workflowArn: S.String,
          description: S.optional(S.String),
          inputSourceConfig: IdMappingWorkflowInputSourceConfig,
          outputSourceConfig: S.optional(IdMappingWorkflowOutputSourceConfig),
          idMappingTechniques: IdMappingTechniques,
          incrementalRunConfig: S.optional(IdMappingIncrementalRunConfig),
          roleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateIdMappingWorkflowOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ inputSourceARN: S.String, schemaName: S.optional(S.String) }),
      ).annotate({ identifier: "IdNamespaceInputSource" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(IdNamespaceInputSource);
    case 1:
      return S.Array(IdMappingWorkflowRuleDefinitionType);
    case 2:
      return S.Array(RecordMatchingModel);
    case 3:
      return S.suspend(() =>
        S.Struct({
          rules: S.optional(RuleList),
          ruleDefinitionTypes: S.optional(IdMappingWorkflowRuleDefinitionTypeList),
          attributeMatchingModel: S.optional(AttributeMatchingModel),
          recordMatchingModels: S.optional(RecordMatchingModelList),
        }),
      ).annotate({
        identifier: "NamespaceRuleBasedProperties",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ providerServiceArn: S.String, providerConfiguration: S.optional(S.Any) }),
      ).annotate({
        identifier: "NamespaceProviderProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          idMappingType: IdMappingType,
          ruleBasedProperties: S.optional(NamespaceRuleBasedProperties),
          providerProperties: S.optional(NamespaceProviderProperties),
        }),
      ).annotate({
        identifier: "IdNamespaceIdMappingWorkflowProperties",
      });
    case 6:
      return S.Array(IdNamespaceIdMappingWorkflowProperties);
    case 7:
      return S.suspend(() =>
        S.Struct({
          idNamespaceName: S.String,
          description: S.optional(S.String),
          inputSourceConfig: S.optional(IdNamespaceInputSourceConfig),
          idMappingWorkflowProperties: S.optional(IdNamespaceIdMappingWorkflowPropertiesList),
          type: IdNamespaceType,
          roleArn: S.optional(S.String),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/idnamespaces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateIdNamespaceInput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          idNamespaceName: S.String,
          idNamespaceArn: S.String,
          description: S.optional(S.String),
          inputSourceConfig: S.optional(IdNamespaceInputSourceConfig),
          idMappingWorkflowProperties: S.optional(IdNamespaceIdMappingWorkflowPropertiesList),
          type: IdNamespaceType,
          roleArn: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "CreateIdNamespaceOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputSourceARN: S.String,
          schemaName: S.String,
          applyNormalization: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "InputSource" });
    case 2:
      return S.Array(InputSource);
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, hashed: S.optional(S.Boolean) })).annotate({
        identifier: "OutputAttribute",
      });
    case 4:
      return S.Array(OutputAttribute);
    case 5:
      return S.suspend(() => S.Struct({ domainArn: S.String, objectTypeArn: S.String })).annotate({
        identifier: "CustomerProfilesIntegrationConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          KMSArn: S.optional(S.String),
          outputS3Path: S.optional(S.String),
          output: OutputAttributes,
          applyNormalization: S.optional(S.Boolean),
          customerProfilesIntegrationConfig: S.optional(CustomerProfilesIntegrationConfig),
        }),
      ).annotate({ identifier: "OutputSource" });
    case 7:
      return S.Array(OutputSource);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          rules: RuleList,
          attributeMatchingModel: AttributeMatchingModel,
          matchPurpose: S.optional(MatchPurpose),
        }),
      ).annotate({ identifier: "RuleBasedProperties" });
    case 1:
      return S.suspend(() => S.Struct({ ruleName: S.String, condition: S.String })).annotate({
        identifier: "RuleCondition",
      });
    case 2:
      return S.Array(RuleCondition);
    case 3:
      return S.suspend(() =>
        S.Struct({ enableTransitiveMatching: S.optional(S.Boolean) }),
      ).annotate({ identifier: "MatchingConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({ rules: RuleConditionList, matchingConfig: S.optional(MatchingConfig) }),
      ).annotate({ identifier: "RuleConditionProperties" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resolutionType: ResolutionType,
          ruleBasedProperties: S.optional(RuleBasedProperties),
          ruleConditionProperties: S.optional(RuleConditionProperties),
          enableRealTimeMatching: S.optional(S.Boolean),
          providerProperties: S.optional(ProviderProperties),
        }),
      ).annotate({ identifier: "ResolutionTechniques" });
    case 6:
      return S.suspend(() =>
        S.Struct({ incrementalRunType: S.optional(IncrementalRunType) }),
      ).annotate({ identifier: "IncrementalRunConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          description: S.optional(S.String),
          inputSourceConfig: InputSourceConfig,
          outputSourceConfig: OutputSourceConfig,
          resolutionTechniques: ResolutionTechniques,
          incrementalRunConfig: S.optional(IncrementalRunConfig),
          roleArn: S.String,
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/matchingworkflows" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMatchingWorkflowInput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          workflowArn: S.String,
          description: S.optional(S.String),
          inputSourceConfig: InputSourceConfig,
          outputSourceConfig: OutputSourceConfig,
          resolutionTechniques: ResolutionTechniques,
          incrementalRunConfig: S.optional(IncrementalRunConfig),
          roleArn: S.String,
        }),
      ).annotate({
        identifier: "CreateMatchingWorkflowOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          fieldName: S.String,
          type: SchemaAttributeType,
          groupName: S.optional(S.String),
          matchKey: S.optional(S.String),
          subType: S.optional(S.String),
          hashed: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SchemaInputAttribute" });
    case 2:
      return S.Array(SchemaInputAttribute);
    case 3:
      return S.suspend(() =>
        S.Struct({
          schemaName: S.String,
          description: S.optional(S.String),
          mappedInputFields: SchemaInputAttributes,
          tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/schemas" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSchemaMappingInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          schemaName: S.String,
          schemaArn: S.String,
          description: S.optional(S.String),
          mappedInputFields: SchemaInputAttributes,
        }),
      ).annotate({
        identifier: "CreateSchemaMappingOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ workflowName: S.String.pipe(T.HttpLabel("workflowName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/idmappingworkflows/{workflowName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIdMappingWorkflowInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "DeleteIdMappingWorkflowOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ idNamespaceName: S.String.pipe(T.HttpLabel("idNamespaceName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/idnamespaces/{idNamespaceName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteIdNamespaceInput" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ message: S.String })).annotate({
        identifier: "DeleteIdNamespaceOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ workflowName: S.String.pipe(T.HttpLabel("workflowName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/matchingworkflows/{workflowName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMatchingWorkflowInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          statementId: S.String.pipe(T.HttpLabel("statementId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/policies/{arn}/{statementId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePolicyStatementInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.String, token: S.String, policy: S.optional(S.String) }),
      ).annotate({
        identifier: "DeletePolicyStatementOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ schemaName: S.String.pipe(T.HttpLabel("schemaName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/schemas/{schemaName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSchemaMappingInput" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          inputSourceARN: S.String,
          uniqueId: S.String,
          recordAttributeMap: RecordAttributeMapString255,
        }),
      ).annotate({ identifier: "Record" });
    case 7:
      return S.Array(Record);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          records: RecordList,
          processingType: S.optional(ProcessingType),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/matchingworkflows/{workflowName}/generateMatches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GenerateMatchIdInput" });
    case 1:
      return S.suspend(() => S.Struct({ inputSourceARN: S.String, recordId: S.String })).annotate({
        identifier: "MatchedRecord",
      });
    case 2:
      return S.Array(MatchedRecord);
    case 3:
      return S.suspend(() =>
        S.Struct({ records: MatchedRecordsList, matchId: S.String, matchRule: S.String }),
      ).annotate({ identifier: "MatchGroup" });
    case 4:
      return S.Array(MatchGroup);
    case 5:
      return S.suspend(() =>
        S.Struct({ inputSourceARN: S.String, uniqueId: S.String, errorMessage: S.String }),
      ).annotate({ identifier: "FailedRecord" });
    case 6:
      return S.Array(FailedRecord);
    case 7:
      return S.suspend(() =>
        S.Struct({ matchGroups: MatchGroupsList, failedRecords: FailedRecordsList }),
      ).annotate({ identifier: "GenerateMatchIdOutput" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/idmappingworkflows/{workflowName}/jobs/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIdMappingJobInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputRecords: S.optional(S.Number),
          totalRecordsProcessed: S.optional(S.Number),
          recordsNotProcessed: S.optional(S.Number),
          deleteRecordsProcessed: S.optional(S.Number),
          totalMappedRecords: S.optional(S.Number),
          totalMappedSourceRecords: S.optional(S.Number),
          totalMappedTargetRecords: S.optional(S.Number),
          uniqueRecordsLoaded: S.optional(S.Number),
          newMappedRecords: S.optional(S.Number),
          newMappedSourceRecords: S.optional(S.Number),
          newMappedTargetRecords: S.optional(S.Number),
          newUniqueRecordsLoaded: S.optional(S.Number),
          mappedRecordsRemoved: S.optional(S.Number),
          mappedSourceRecordsRemoved: S.optional(S.Number),
          mappedTargetRecordsRemoved: S.optional(S.Number),
        }),
      ).annotate({ identifier: "IdMappingJobMetrics" });
    case 2:
      return S.suspend(() => S.Struct({ errorMessage: S.optional(S.String) })).annotate({
        identifier: "ErrorDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ roleArn: S.String, outputS3Path: S.String, KMSArn: S.optional(S.String) }),
      ).annotate({ identifier: "IdMappingJobOutputSource" });
    case 4:
      return S.Array(IdMappingJobOutputSource);
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: JobStatus,
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          metrics: S.optional(IdMappingJobMetrics),
          errorDetails: S.optional(ErrorDetails),
          outputSourceConfig: S.optional(IdMappingJobOutputSourceConfig),
          jobType: S.optional(JobType),
        }),
      ).annotate({ identifier: "GetIdMappingJobOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ workflowName: S.String.pipe(T.HttpLabel("workflowName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/idmappingworkflows/{workflowName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIdMappingWorkflowInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          workflowArn: S.String,
          description: S.optional(S.String),
          inputSourceConfig: IdMappingWorkflowInputSourceConfig,
          outputSourceConfig: S.optional(IdMappingWorkflowOutputSourceConfig),
          idMappingTechniques: IdMappingTechniques,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          incrementalRunConfig: S.optional(IdMappingIncrementalRunConfig),
          roleArn: S.optional(S.String),
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetIdMappingWorkflowOutput",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ idNamespaceName: S.String.pipe(T.HttpLabel("idNamespaceName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/idnamespaces/{idNamespaceName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIdNamespaceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          record: RecordAttributeMap,
          applyNormalization: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/matchingworkflows/{workflowName}/matches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMatchIdInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ matchId: S.optional(S.String), matchRule: S.optional(S.String) }),
      ).annotate({ identifier: "GetMatchIdOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/matchingworkflows/{workflowName}/jobs/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMatchingJobInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          inputRecords: S.optional(S.Number),
          totalRecordsProcessed: S.optional(S.Number),
          recordsNotProcessed: S.optional(S.Number),
          deleteRecordsProcessed: S.optional(S.Number),
          matchIDs: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobMetrics" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: JobStatus,
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          metrics: S.optional(JobMetrics),
          errorDetails: S.optional(ErrorDetails),
          outputSourceConfig: S.optional(JobOutputSourceConfig),
        }),
      ).annotate({ identifier: "GetMatchingJobOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ workflowName: S.String.pipe(T.HttpLabel("workflowName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/matchingworkflows/{workflowName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMatchingWorkflowInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          workflowArn: S.String,
          description: S.optional(S.String),
          inputSourceConfig: InputSourceConfig,
          outputSourceConfig: OutputSourceConfig,
          resolutionTechniques: ResolutionTechniques,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          incrementalRunConfig: S.optional(IncrementalRunConfig),
          roleArn: S.String,
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetMatchingWorkflowOutput",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/policies/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPolicyInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          providerName: S.String.pipe(T.HttpLabel("providerName")),
          providerServiceName: S.String.pipe(T.HttpLabel("providerServiceName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/providerservices/{providerName}/{providerServiceName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProviderServiceInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          providerTargetConfigurationDefinition: S.optional(S.Any),
          providerSourceConfigurationDefinition: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "ProviderIdNameSpaceConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataSetId: S.String,
          revisionId: S.String,
          assetId: S.String,
          listingId: S.String,
        }),
      ).annotate({
        identifier: "ProviderMarketplaceConfiguration",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ marketplaceConfiguration: ProviderMarketplaceConfiguration }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          awsAccountIds: S.optional(AwsAccountIdList),
          requiredBucketActions: S.optional(RequiredBucketActionsList),
        }),
      ).annotate({
        identifier: "ProviderIntermediateDataAccessConfiguration",
      });
    case 6:
      return S.Array(SchemaList);
    case 7:
      return S.suspend(() =>
        S.Struct({
          fieldName: S.String,
          type: SchemaAttributeType,
          subType: S.optional(S.String),
          hashing: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ProviderSchemaAttribute" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ProviderSchemaAttribute);
    case 1:
      return S.suspend(() =>
        S.Struct({
          schemas: S.optional(Schemas),
          providerSchemaAttributes: S.optional(ProviderSchemaAttributes),
        }),
      ).annotate({ identifier: "ProviderComponentSchema" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          providerName: S.String,
          providerServiceName: S.String,
          providerServiceDisplayName: S.String,
          providerServiceType: ServiceType,
          providerServiceArn: S.String,
          providerConfigurationDefinition: S.optional(S.Any),
          providerIdNameSpaceConfiguration: S.optional(ProviderIdNameSpaceConfiguration),
          providerJobConfiguration: S.optional(S.Any),
          providerEndpointConfiguration: ProviderEndpointConfiguration,
          anonymizedOutput: S.Boolean,
          providerEntityOutputDefinition: S.Any,
          providerIntermediateDataAccessConfiguration: S.optional(
            ProviderIntermediateDataAccessConfiguration,
          ),
          providerComponentSchema: S.optional(ProviderComponentSchema),
        }),
      ).annotate({ identifier: "GetProviderServiceOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ schemaName: S.String.pipe(T.HttpLabel("schemaName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/schemas/{schemaName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSchemaMappingInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          schemaName: S.String,
          schemaArn: S.String,
          description: S.optional(S.String),
          mappedInputFields: SchemaInputAttributes,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(TagMap),
          hasWorkflows: S.Boolean,
        }),
      ).annotate({ identifier: "GetSchemaMappingOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/idmappingworkflows/{workflowName}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIdMappingJobsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: JobStatus,
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "JobSummary" });
    case 7:
      return S.Array(JobSummary);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobs: S.optional(JobList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListIdMappingJobsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/idmappingworkflows" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIdMappingWorkflowsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          workflowArn: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "IdMappingWorkflowSummary" });
    case 3:
      return S.Array(IdMappingWorkflowSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          workflowSummaries: S.optional(IdMappingWorkflowList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIdMappingWorkflowsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/idnamespaces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListIdNamespacesInput" });
    case 6:
      return S.suspend(() => S.Struct({ idMappingType: IdMappingType })).annotate({
        identifier: "IdNamespaceIdMappingWorkflowMetadata",
      });
    case 7:
      return S.Array(IdNamespaceIdMappingWorkflowMetadata);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          idNamespaceName: S.String,
          idNamespaceArn: S.String,
          description: S.optional(S.String),
          idMappingWorkflowProperties: S.optional(IdNamespaceIdMappingWorkflowMetadataList),
          type: IdNamespaceType,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "IdNamespaceSummary" });
    case 1:
      return S.Array(IdNamespaceSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          idNamespaceSummaries: S.optional(IdNamespaceList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListIdNamespacesOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/matchingworkflows/{workflowName}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListMatchingJobsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/matchingworkflows" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListMatchingWorkflowsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          workflowArn: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          resolutionType: ResolutionType,
        }),
      ).annotate({ identifier: "MatchingWorkflowSummary" });
    case 6:
      return S.Array(MatchingWorkflowSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowSummaries: S.optional(MatchingWorkflowList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMatchingWorkflowsOutput",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          providerName: S.optional(S.String).pipe(T.HttpQuery("providerName")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/providerservices" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListProviderServicesInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          providerServiceArn: S.String,
          providerName: S.String,
          providerServiceDisplayName: S.String,
          providerServiceName: S.String,
          providerServiceType: ServiceType,
        }),
      ).annotate({ identifier: "ProviderServiceSummary" });
    case 2:
      return S.Array(ProviderServiceSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          providerServiceSummaries: S.optional(ProviderServiceList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProviderServicesOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/schemas" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSchemaMappingsInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          schemaName: S.String,
          schemaArn: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          hasWorkflows: S.Boolean,
        }),
      ).annotate({ identifier: "SchemaMappingSummary" });
    case 6:
      return S.Array(SchemaMappingSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ schemaList: S.optional(SchemaMappingList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSchemaMappingsOutput" });
  }
}
function __c16(j: number): any {
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
          arn: S.String.pipe(T.HttpLabel("arn")),
          token: S.optional(S.String),
          policy: S.String,
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/policies/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutPolicyInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          outputSourceConfig: S.optional(IdMappingJobOutputSourceConfig),
          jobType: S.optional(JobType),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/idmappingworkflows/{workflowName}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartIdMappingJobInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          outputSourceConfig: S.optional(IdMappingJobOutputSourceConfig),
          jobType: S.optional(JobType),
        }),
      ).annotate({ identifier: "StartIdMappingJobOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ workflowName: S.String.pipe(T.HttpLabel("workflowName")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/matchingworkflows/{workflowName}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartMatchingJobInput" });
    case 6:
      return S.suspend(() => S.Struct({ jobId: S.String })).annotate({
        identifier: "StartMatchingJobOutput",
      });
    case 7:
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
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
    case 2:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          description: S.optional(S.String),
          inputSourceConfig: IdMappingWorkflowInputSourceConfig,
          outputSourceConfig: S.optional(IdMappingWorkflowOutputSourceConfig),
          idMappingTechniques: IdMappingTechniques,
          incrementalRunConfig: S.optional(IdMappingIncrementalRunConfig),
          roleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/idmappingworkflows/{workflowName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIdMappingWorkflowInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          idNamespaceName: S.String.pipe(T.HttpLabel("idNamespaceName")),
          description: S.optional(S.String),
          inputSourceConfig: S.optional(IdNamespaceInputSourceConfig),
          idMappingWorkflowProperties: S.optional(IdNamespaceIdMappingWorkflowPropertiesList),
          roleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/idnamespaces/{idNamespaceName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateIdNamespaceInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          idNamespaceName: S.String,
          idNamespaceArn: S.String,
          description: S.optional(S.String),
          inputSourceConfig: S.optional(IdNamespaceInputSourceConfig),
          idMappingWorkflowProperties: S.optional(IdNamespaceIdMappingWorkflowPropertiesList),
          type: IdNamespaceType,
          roleArn: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "UpdateIdNamespaceOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String.pipe(T.HttpLabel("workflowName")),
          description: S.optional(S.String),
          inputSourceConfig: InputSourceConfig,
          outputSourceConfig: OutputSourceConfig,
          resolutionTechniques: ResolutionTechniques,
          incrementalRunConfig: S.optional(IncrementalRunConfig),
          roleArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/matchingworkflows/{workflowName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMatchingWorkflowInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workflowName: S.String,
          description: S.optional(S.String),
          inputSourceConfig: InputSourceConfig,
          outputSourceConfig: OutputSourceConfig,
          resolutionTechniques: ResolutionTechniques,
          incrementalRunConfig: S.optional(IncrementalRunConfig),
          roleArn: S.String,
        }),
      ).annotate({
        identifier: "UpdateMatchingWorkflowOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          schemaName: S.String.pipe(T.HttpLabel("schemaName")),
          description: S.optional(S.String),
          mappedInputFields: SchemaInputAttributes,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/schemas/{schemaName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSchemaMappingInput" });
  }
}
