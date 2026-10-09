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
  sdkId: "ComprehendMedical",
  serviceShapeName: "ComprehendMedical_20181030",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "comprehendmedical" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-10-30");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://comprehendmedical-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://comprehendmedical-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://comprehendmedical.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://comprehendmedical.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidEncodingException
  extends /*@__PURE__*/ S.TaggedError<InvalidEncodingException>()(
    "InvalidEncodingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class TextSizeLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<TextSizeLimitExceededException>()(
    "TextSizeLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type JobId = string;
export interface DescribeEntitiesDetectionV2JobRequest {
  JobId: string;
}
const DescribeEntitiesDetectionV2JobRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<DescribeEntitiesDetectionV2JobRequest>;
export type JobName = string;
export type JobStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "PARTIAL_SUCCESS"
  | "FAILED"
  | "STOP_REQUESTED"
  | "STOPPED"
  | (string & {});
const JobStatus = S.String;

export type AnyLengthString = string;
export type S3Bucket = string;
export type S3Key = string;
export interface InputDataConfig {
  S3Bucket: string;
  S3Key?: string;
}
const InputDataConfig = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<InputDataConfig>;
export interface OutputDataConfig {
  S3Bucket: string;
  S3Key?: string;
}
const OutputDataConfig = InputDataConfig as any as S.Schema<OutputDataConfig>;
export type LanguageCode = "en" | (string & {});
const LanguageCode = S.String;

export type IamRoleArn = string;
export type ManifestFilePath = string;
export type KMSKey = string;
export type ModelVersion = string;
export interface ComprehendMedicalAsyncJobProperties {
  JobId?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date;
  EndTime?: Date;
  ExpirationTime?: Date;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  ManifestFilePath?: string;
  KMSKey?: string;
  ModelVersion?: string;
}
const ComprehendMedicalAsyncJobProperties = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<ComprehendMedicalAsyncJobProperties>;
export interface DescribeEntitiesDetectionV2JobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
const DescribeEntitiesDetectionV2JobResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<DescribeEntitiesDetectionV2JobResponse>;
export interface DescribeICD10CMInferenceJobRequest {
  JobId: string;
}
const DescribeICD10CMInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<DescribeICD10CMInferenceJobRequest>;
export interface DescribeICD10CMInferenceJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
const DescribeICD10CMInferenceJobResponse =
  DescribeEntitiesDetectionV2JobResponse as any as S.Schema<DescribeICD10CMInferenceJobResponse>;
export interface DescribePHIDetectionJobRequest {
  JobId: string;
}
const DescribePHIDetectionJobRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<DescribePHIDetectionJobRequest>;
export interface DescribePHIDetectionJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
const DescribePHIDetectionJobResponse =
  DescribeEntitiesDetectionV2JobResponse as any as S.Schema<DescribePHIDetectionJobResponse>;
export interface DescribeRxNormInferenceJobRequest {
  JobId: string;
}
const DescribeRxNormInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<DescribeRxNormInferenceJobRequest>;
export interface DescribeRxNormInferenceJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
const DescribeRxNormInferenceJobResponse =
  DescribeEntitiesDetectionV2JobResponse as any as S.Schema<DescribeRxNormInferenceJobResponse>;
export interface DescribeSNOMEDCTInferenceJobRequest {
  JobId: string;
}
const DescribeSNOMEDCTInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<DescribeSNOMEDCTInferenceJobRequest>;
export interface DescribeSNOMEDCTInferenceJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
const DescribeSNOMEDCTInferenceJobResponse =
  DescribeEntitiesDetectionV2JobResponse as any as S.Schema<DescribeSNOMEDCTInferenceJobResponse>;
export type BoundedLengthString = string;
export interface DetectEntitiesRequest {
  Text: string;
}
const DetectEntitiesRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<DetectEntitiesRequest>;
export type EntityType =
  | "MEDICATION"
  | "MEDICAL_CONDITION"
  | "PROTECTED_HEALTH_INFORMATION"
  | "TEST_TREATMENT_PROCEDURE"
  | "ANATOMY"
  | "TIME_EXPRESSION"
  | "BEHAVIORAL_ENVIRONMENTAL_SOCIAL"
  | (string & {});
const EntityType = S.String;

export type EntitySubType =
  | "NAME"
  | "DX_NAME"
  | "DOSAGE"
  | "ROUTE_OR_MODE"
  | "FORM"
  | "FREQUENCY"
  | "DURATION"
  | "GENERIC_NAME"
  | "BRAND_NAME"
  | "STRENGTH"
  | "RATE"
  | "ACUITY"
  | "TEST_NAME"
  | "TEST_VALUE"
  | "TEST_UNITS"
  | "TEST_UNIT"
  | "PROCEDURE_NAME"
  | "TREATMENT_NAME"
  | "DATE"
  | "AGE"
  | "CONTACT_POINT"
  | "PHONE_OR_FAX"
  | "EMAIL"
  | "IDENTIFIER"
  | "ID"
  | "URL"
  | "ADDRESS"
  | "PROFESSION"
  | "SYSTEM_ORGAN_SITE"
  | "DIRECTION"
  | "QUALITY"
  | "QUANTITY"
  | "TIME_EXPRESSION"
  | "TIME_TO_MEDICATION_NAME"
  | "TIME_TO_DX_NAME"
  | "TIME_TO_TEST_NAME"
  | "TIME_TO_PROCEDURE_NAME"
  | "TIME_TO_TREATMENT_NAME"
  | "AMOUNT"
  | "GENDER"
  | "RACE_ETHNICITY"
  | "ALLERGIES"
  | "TOBACCO_USE"
  | "ALCOHOL_CONSUMPTION"
  | "REC_DRUG_USE"
  | (string & {});
const EntitySubType = S.String;

export type AttributeName =
  | "SIGN"
  | "SYMPTOM"
  | "DIAGNOSIS"
  | "NEGATION"
  | "PERTAINS_TO_FAMILY"
  | "HYPOTHETICAL"
  | "LOW_CONFIDENCE"
  | "PAST_HISTORY"
  | "FUTURE"
  | (string & {});
const AttributeName = S.String;

export interface Trait {
  Name?: AttributeName;
  Score?: number;
}
const Trait = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<Trait>;
export type TraitList = Trait[];
const TraitList = /*@__PURE__*/ __L.at(__c1, 2);
export type RelationshipType =
  | "EVERY"
  | "WITH_DOSAGE"
  | "ADMINISTERED_VIA"
  | "FOR"
  | "NEGATIVE"
  | "OVERLAP"
  | "DOSAGE"
  | "ROUTE_OR_MODE"
  | "FORM"
  | "FREQUENCY"
  | "DURATION"
  | "STRENGTH"
  | "RATE"
  | "ACUITY"
  | "TEST_VALUE"
  | "TEST_UNITS"
  | "TEST_UNIT"
  | "DIRECTION"
  | "SYSTEM_ORGAN_SITE"
  | "AMOUNT"
  | "USAGE"
  | "QUALITY"
  | (string & {});
const RelationshipType = S.String;

export interface Attribute {
  Type?: EntitySubType;
  Score?: number;
  RelationshipScore?: number;
  RelationshipType?: RelationshipType;
  Id?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Text?: string;
  Category?: EntityType;
  Traits?: Trait[];
}
const Attribute = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Attribute>;
export type AttributeList = Attribute[];
const AttributeList = /*@__PURE__*/ __L.at(__c1, 4);
export interface Entity {
  Id?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Score?: number;
  Text?: string;
  Category?: EntityType;
  Type?: EntitySubType;
  Traits?: Trait[];
  Attributes?: Attribute[];
}
const Entity = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<Entity>;
export type EntityList = Entity[];
const EntityList = /*@__PURE__*/ __L.at(__c1, 6);
export interface UnmappedAttribute {
  Type?: EntityType;
  Attribute?: Attribute;
}
const UnmappedAttribute = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<UnmappedAttribute>;
export type UnmappedAttributeList = UnmappedAttribute[];
const UnmappedAttributeList = /*@__PURE__*/ __L.at(__c2, 0);
export interface DetectEntitiesResponse {
  Entities: Entity[];
  UnmappedAttributes?: UnmappedAttribute[];
  PaginationToken?: string;
  ModelVersion: string;
}
const DetectEntitiesResponse = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DetectEntitiesResponse>;
export interface DetectEntitiesV2Request {
  Text: string;
}
const DetectEntitiesV2Request = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<DetectEntitiesV2Request>;
export interface DetectEntitiesV2Response {
  Entities: Entity[];
  UnmappedAttributes?: UnmappedAttribute[];
  PaginationToken?: string;
  ModelVersion: string;
}
const DetectEntitiesV2Response =
  DetectEntitiesResponse as any as S.Schema<DetectEntitiesV2Response>;
export interface DetectPHIRequest {
  Text: string;
}
const DetectPHIRequest = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<DetectPHIRequest>;
export interface DetectPHIResponse {
  Entities: Entity[];
  PaginationToken?: string;
  ModelVersion: string;
}
const DetectPHIResponse = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<DetectPHIResponse>;
export type OntologyLinkingBoundedLengthString = string;
export interface InferICD10CMRequest {
  Text: string;
}
const InferICD10CMRequest = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<InferICD10CMRequest>;
export type ICD10CMEntityCategory = "MEDICAL_CONDITION" | (string & {});
const ICD10CMEntityCategory = S.String;

export type ICD10CMEntityType = "DX_NAME" | "TIME_EXPRESSION" | (string & {});
const ICD10CMEntityType = S.String;

export type ICD10CMAttributeType =
  | "ACUITY"
  | "DIRECTION"
  | "SYSTEM_ORGAN_SITE"
  | "QUALITY"
  | "QUANTITY"
  | "TIME_TO_DX_NAME"
  | "TIME_EXPRESSION"
  | (string & {});
const ICD10CMAttributeType = S.String;

export type ICD10CMTraitName =
  | "NEGATION"
  | "DIAGNOSIS"
  | "SIGN"
  | "SYMPTOM"
  | "PERTAINS_TO_FAMILY"
  | "HYPOTHETICAL"
  | "LOW_CONFIDENCE"
  | (string & {});
export interface ICD10CMTrait {
  Name?: ICD10CMTraitName;
  Score?: number;
}
export type ICD10CMTraitList = ICD10CMTrait[];
const ICD10CMTraitList = TraitList as any as S.Schema<ICD10CMTraitList>;
export type ICD10CMRelationshipType = "OVERLAP" | "SYSTEM_ORGAN_SITE" | "QUALITY" | (string & {});
const ICD10CMRelationshipType = S.String;

export interface ICD10CMAttribute {
  Type?: ICD10CMAttributeType;
  Score?: number;
  RelationshipScore?: number;
  Id?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Text?: string;
  Traits?: ICD10CMTrait[];
  Category?: ICD10CMEntityType;
  RelationshipType?: ICD10CMRelationshipType;
}
const ICD10CMAttribute = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<ICD10CMAttribute>;
export type ICD10CMAttributeList = ICD10CMAttribute[];
const ICD10CMAttributeList = /*@__PURE__*/ __L.at(__c2, 7);
export interface ICD10CMConcept {
  Description?: string;
  Code?: string;
  Score?: number;
}
const ICD10CMConcept = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ICD10CMConcept>;
export type ICD10CMConceptList = ICD10CMConcept[];
const ICD10CMConceptList = /*@__PURE__*/ __L.at(__c3, 1);
export interface ICD10CMEntity {
  Id?: number;
  Text?: string;
  Category?: ICD10CMEntityCategory;
  Type?: ICD10CMEntityType;
  Score?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Attributes?: ICD10CMAttribute[];
  Traits?: ICD10CMTrait[];
  ICD10CMConcepts?: ICD10CMConcept[];
}
const ICD10CMEntity = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ICD10CMEntity>;
export type ICD10CMEntityList = ICD10CMEntity[];
const ICD10CMEntityList = /*@__PURE__*/ __L.at(__c3, 3);
export interface InferICD10CMResponse {
  Entities: ICD10CMEntity[];
  PaginationToken?: string;
  ModelVersion?: string;
}
const InferICD10CMResponse = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<InferICD10CMResponse>;
export interface InferRxNormRequest {
  Text: string;
}
const InferRxNormRequest = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<InferRxNormRequest>;
export type RxNormEntityCategory = "MEDICATION" | (string & {});
const RxNormEntityCategory = S.String;

export type RxNormEntityType = "BRAND_NAME" | "GENERIC_NAME" | (string & {});
const RxNormEntityType = S.String;

export type RxNormAttributeType =
  | "DOSAGE"
  | "DURATION"
  | "FORM"
  | "FREQUENCY"
  | "RATE"
  | "ROUTE_OR_MODE"
  | "STRENGTH"
  | (string & {});
const RxNormAttributeType = S.String;

export type RxNormTraitName = "NEGATION" | "PAST_HISTORY" | (string & {});
export interface RxNormTrait {
  Name?: RxNormTraitName;
  Score?: number;
}
export type RxNormTraitList = RxNormTrait[];
const RxNormTraitList = TraitList as any as S.Schema<RxNormTraitList>;
export interface RxNormAttribute {
  Type?: RxNormAttributeType;
  Score?: number;
  RelationshipScore?: number;
  Id?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Text?: string;
  Traits?: RxNormTrait[];
}
const RxNormAttribute = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<RxNormAttribute>;
export type RxNormAttributeList = RxNormAttribute[];
const RxNormAttributeList = /*@__PURE__*/ __L.at(__c3, 7);
export interface RxNormConcept {
  Description?: string;
  Code?: string;
  Score?: number;
}
export type RxNormConceptList = RxNormConcept[];
const RxNormConceptList = ICD10CMConceptList as any as S.Schema<RxNormConceptList>;
export interface RxNormEntity {
  Id?: number;
  Text?: string;
  Category?: RxNormEntityCategory;
  Type?: RxNormEntityType;
  Score?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Attributes?: RxNormAttribute[];
  Traits?: RxNormTrait[];
  RxNormConcepts?: RxNormConcept[];
}
const RxNormEntity = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<RxNormEntity>;
export type RxNormEntityList = RxNormEntity[];
const RxNormEntityList = /*@__PURE__*/ __L.at(__c4, 1);
export interface InferRxNormResponse {
  Entities: RxNormEntity[];
  PaginationToken?: string;
  ModelVersion?: string;
}
const InferRxNormResponse = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<InferRxNormResponse>;
export interface InferSNOMEDCTRequest {
  Text: string;
}
const InferSNOMEDCTRequest = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<InferSNOMEDCTRequest>;
export type SNOMEDCTEntityCategory =
  | "MEDICAL_CONDITION"
  | "ANATOMY"
  | "TEST_TREATMENT_PROCEDURE"
  | (string & {});
const SNOMEDCTEntityCategory = S.String;

export type SNOMEDCTEntityType =
  | "DX_NAME"
  | "TEST_NAME"
  | "PROCEDURE_NAME"
  | "TREATMENT_NAME"
  | (string & {});
const SNOMEDCTEntityType = S.String;

export type SNOMEDCTAttributeType =
  | "ACUITY"
  | "QUALITY"
  | "DIRECTION"
  | "SYSTEM_ORGAN_SITE"
  | "TEST_VALUE"
  | "TEST_UNIT"
  | (string & {});
const SNOMEDCTAttributeType = S.String;

export type SNOMEDCTRelationshipType =
  | "ACUITY"
  | "QUALITY"
  | "TEST_VALUE"
  | "TEST_UNITS"
  | "DIRECTION"
  | "SYSTEM_ORGAN_SITE"
  | "TEST_UNIT"
  | (string & {});
const SNOMEDCTRelationshipType = S.String;

export type SNOMEDCTTraitName =
  | "NEGATION"
  | "DIAGNOSIS"
  | "SIGN"
  | "SYMPTOM"
  | "PERTAINS_TO_FAMILY"
  | "HYPOTHETICAL"
  | "LOW_CONFIDENCE"
  | "PAST_HISTORY"
  | "FUTURE"
  | (string & {});
export interface SNOMEDCTTrait {
  Name?: SNOMEDCTTraitName;
  Score?: number;
}
export type SNOMEDCTTraitList = SNOMEDCTTrait[];
const SNOMEDCTTraitList = TraitList as any as S.Schema<SNOMEDCTTraitList>;
export interface SNOMEDCTConcept {
  Description?: string;
  Code?: string;
  Score?: number;
}
export type SNOMEDCTConceptList = SNOMEDCTConcept[];
const SNOMEDCTConceptList = ICD10CMConceptList as any as S.Schema<SNOMEDCTConceptList>;
export interface SNOMEDCTAttribute {
  Category?: SNOMEDCTEntityCategory;
  Type?: SNOMEDCTAttributeType;
  Score?: number;
  RelationshipScore?: number;
  RelationshipType?: SNOMEDCTRelationshipType;
  Id?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Text?: string;
  Traits?: SNOMEDCTTrait[];
  SNOMEDCTConcepts?: SNOMEDCTConcept[];
}
const SNOMEDCTAttribute = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<SNOMEDCTAttribute>;
export type SNOMEDCTAttributeList = SNOMEDCTAttribute[];
const SNOMEDCTAttributeList = /*@__PURE__*/ __L.at(__c4, 5);
export interface SNOMEDCTEntity {
  Id?: number;
  Text?: string;
  Category?: SNOMEDCTEntityCategory;
  Type?: SNOMEDCTEntityType;
  Score?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Attributes?: SNOMEDCTAttribute[];
  Traits?: SNOMEDCTTrait[];
  SNOMEDCTConcepts?: SNOMEDCTConcept[];
}
const SNOMEDCTEntity = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<SNOMEDCTEntity>;
export type SNOMEDCTEntityList = SNOMEDCTEntity[];
const SNOMEDCTEntityList = /*@__PURE__*/ __L.at(__c4, 7);
export interface SNOMEDCTDetails {
  Edition?: string;
  Language?: string;
  VersionDate?: string;
}
const SNOMEDCTDetails = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<SNOMEDCTDetails>;
export interface Characters {
  OriginalTextCharacters?: number;
}
const Characters = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<Characters>;
export interface InferSNOMEDCTResponse {
  Entities: SNOMEDCTEntity[];
  PaginationToken?: string;
  ModelVersion?: string;
  SNOMEDCTDetails?: SNOMEDCTDetails;
  Characters?: Characters;
}
const InferSNOMEDCTResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<InferSNOMEDCTResponse>;
export interface ComprehendMedicalAsyncJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date;
  SubmitTimeAfter?: Date;
}
const ComprehendMedicalAsyncJobFilter = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ComprehendMedicalAsyncJobFilter>;
export type MaxResultsInteger = number;
export interface ListEntitiesDetectionV2JobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
const ListEntitiesDetectionV2JobsRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ListEntitiesDetectionV2JobsRequest>;
export type ComprehendMedicalAsyncJobPropertiesList = ComprehendMedicalAsyncJobProperties[];
const ComprehendMedicalAsyncJobPropertiesList = /*@__PURE__*/ __L.at(__c5, 5);
export interface ListEntitiesDetectionV2JobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
  NextToken?: string;
}
const ListEntitiesDetectionV2JobsResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<ListEntitiesDetectionV2JobsResponse>;
export interface ListICD10CMInferenceJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
const ListICD10CMInferenceJobsRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<ListICD10CMInferenceJobsRequest>;
export interface ListICD10CMInferenceJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
  NextToken?: string;
}
const ListICD10CMInferenceJobsResponse =
  ListEntitiesDetectionV2JobsResponse as any as S.Schema<ListICD10CMInferenceJobsResponse>;
export interface ListPHIDetectionJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
const ListPHIDetectionJobsRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<ListPHIDetectionJobsRequest>;
export interface ListPHIDetectionJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
  NextToken?: string;
}
const ListPHIDetectionJobsResponse =
  ListEntitiesDetectionV2JobsResponse as any as S.Schema<ListPHIDetectionJobsResponse>;
export interface ListRxNormInferenceJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
const ListRxNormInferenceJobsRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<ListRxNormInferenceJobsRequest>;
export interface ListRxNormInferenceJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
  NextToken?: string;
}
const ListRxNormInferenceJobsResponse =
  ListEntitiesDetectionV2JobsResponse as any as S.Schema<ListRxNormInferenceJobsResponse>;
export interface ListSNOMEDCTInferenceJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
const ListSNOMEDCTInferenceJobsRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ListSNOMEDCTInferenceJobsRequest>;
export interface ListSNOMEDCTInferenceJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];
  NextToken?: string;
}
const ListSNOMEDCTInferenceJobsResponse =
  ListEntitiesDetectionV2JobsResponse as any as S.Schema<ListSNOMEDCTInferenceJobsResponse>;
export type ClientRequestTokenString = string;
export interface StartEntitiesDetectionV2JobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
const StartEntitiesDetectionV2JobRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<StartEntitiesDetectionV2JobRequest>;
export interface StartEntitiesDetectionV2JobResponse {
  JobId?: string;
}
const StartEntitiesDetectionV2JobResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<StartEntitiesDetectionV2JobResponse>;
export interface StartICD10CMInferenceJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
const StartICD10CMInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<StartICD10CMInferenceJobRequest>;
export interface StartICD10CMInferenceJobResponse {
  JobId?: string;
}
const StartICD10CMInferenceJobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StartICD10CMInferenceJobResponse>;
export interface StartPHIDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
const StartPHIDetectionJobRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<StartPHIDetectionJobRequest>;
export interface StartPHIDetectionJobResponse {
  JobId?: string;
}
const StartPHIDetectionJobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StartPHIDetectionJobResponse>;
export interface StartRxNormInferenceJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
const StartRxNormInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<StartRxNormInferenceJobRequest>;
export interface StartRxNormInferenceJobResponse {
  JobId?: string;
}
const StartRxNormInferenceJobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StartRxNormInferenceJobResponse>;
export interface StartSNOMEDCTInferenceJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
const StartSNOMEDCTInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<StartSNOMEDCTInferenceJobRequest>;
export interface StartSNOMEDCTInferenceJobResponse {
  JobId?: string;
}
const StartSNOMEDCTInferenceJobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StartSNOMEDCTInferenceJobResponse>;
export interface StopEntitiesDetectionV2JobRequest {
  JobId: string;
}
const StopEntitiesDetectionV2JobRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<StopEntitiesDetectionV2JobRequest>;
export interface StopEntitiesDetectionV2JobResponse {
  JobId?: string;
}
const StopEntitiesDetectionV2JobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StopEntitiesDetectionV2JobResponse>;
export interface StopICD10CMInferenceJobRequest {
  JobId: string;
}
const StopICD10CMInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<StopICD10CMInferenceJobRequest>;
export interface StopICD10CMInferenceJobResponse {
  JobId?: string;
}
const StopICD10CMInferenceJobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StopICD10CMInferenceJobResponse>;
export interface StopPHIDetectionJobRequest {
  JobId: string;
}
const StopPHIDetectionJobRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<StopPHIDetectionJobRequest>;
export interface StopPHIDetectionJobResponse {
  JobId?: string;
}
const StopPHIDetectionJobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StopPHIDetectionJobResponse>;
export interface StopRxNormInferenceJobRequest {
  JobId: string;
}
const StopRxNormInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<StopRxNormInferenceJobRequest>;
export interface StopRxNormInferenceJobResponse {
  JobId?: string;
}
const StopRxNormInferenceJobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StopRxNormInferenceJobResponse>;
export interface StopSNOMEDCTInferenceJobRequest {
  JobId: string;
}
const StopSNOMEDCTInferenceJobRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<StopSNOMEDCTInferenceJobRequest>;
export interface StopSNOMEDCTInferenceJobResponse {
  JobId?: string;
}
const StopSNOMEDCTInferenceJobResponse =
  StartEntitiesDetectionV2JobResponse as any as S.Schema<StopSNOMEDCTInferenceJobResponse>;
export type DescribeEntitiesDetectionV2JobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a medical entities detection job. Use this operation
 * to get the status of a detection job.
 */
export const describeEntitiesDetectionV2Job: API.OperationMethod<
  DescribeEntitiesDetectionV2JobRequest,
  DescribeEntitiesDetectionV2JobResponse,
  DescribeEntitiesDetectionV2JobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEntitiesDetectionV2JobRequest,
  output: DescribeEntitiesDetectionV2JobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEntitiesDetectionV2Job",
}));

export type DescribeICD10CMInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with an InferICD10CM job. Use this operation to get the
 * status of an inference job.
 */
export const describeICD10CMInferenceJob: API.OperationMethod<
  DescribeICD10CMInferenceJobRequest,
  DescribeICD10CMInferenceJobResponse,
  DescribeICD10CMInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeICD10CMInferenceJobRequest,
  output: DescribeICD10CMInferenceJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeICD10CMInferenceJob",
}));

export type DescribePHIDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with a protected health information (PHI) detection job.
 * Use this operation to get the status of a detection job.
 */
export const describePHIDetectionJob: API.OperationMethod<
  DescribePHIDetectionJobRequest,
  DescribePHIDetectionJobResponse,
  DescribePHIDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribePHIDetectionJobRequest,
  output: DescribePHIDetectionJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePHIDetectionJob",
}));

export type DescribeRxNormInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with an InferRxNorm job. Use this operation to get the
 * status of an inference job.
 */
export const describeRxNormInferenceJob: API.OperationMethod<
  DescribeRxNormInferenceJobRequest,
  DescribeRxNormInferenceJobResponse,
  DescribeRxNormInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeRxNormInferenceJobRequest,
  output: DescribeRxNormInferenceJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRxNormInferenceJob",
}));

export type DescribeSNOMEDCTInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job.
 */
export const describeSNOMEDCTInferenceJob: API.OperationMethod<
  DescribeSNOMEDCTInferenceJobRequest,
  DescribeSNOMEDCTInferenceJobResponse,
  DescribeSNOMEDCTInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSNOMEDCTInferenceJobRequest,
  output: DescribeSNOMEDCTInferenceJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSNOMEDCTInferenceJob",
}));

export type DetectEntitiesError =
  | InternalServerException
  | InvalidEncodingException
  | InvalidRequestException
  | ServiceUnavailableException
  | TextSizeLimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * The `DetectEntities` operation is deprecated. You should use the DetectEntitiesV2 operation instead.
 *
 * Inspects the clinical text for a variety of medical entities and returns specific
 * information about them such as entity category, location, and confidence score on that
 * information.
 */
export const detectEntities: API.OperationMethod<
  DetectEntitiesRequest,
  DetectEntitiesResponse,
  DetectEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetectEntitiesRequest,
  output: DetectEntitiesResponse,
  errors: [
    InternalServerException,
    InvalidEncodingException,
    InvalidRequestException,
    ServiceUnavailableException,
    TextSizeLimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectEntities",
}));

export type DetectEntitiesV2Error =
  | InternalServerException
  | InvalidEncodingException
  | InvalidRequestException
  | ServiceUnavailableException
  | TextSizeLimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Inspects the clinical text for a variety of medical entities and returns specific
 * information about them such as entity category, location, and confidence score on that
 * information. Amazon Comprehend Medical only detects medical entities in English language
 * texts.
 *
 * The `DetectEntitiesV2` operation replaces the DetectEntities
 * operation. This new action uses a different model for determining the entities in your medical
 * text and changes the way that some entities are returned in the output. You should use the
 * `DetectEntitiesV2` operation in all new applications.
 *
 * The `DetectEntitiesV2` operation returns the `Acuity` and
 * `Direction` entities as attributes instead of types.
 */
export const detectEntitiesV2: API.OperationMethod<
  DetectEntitiesV2Request,
  DetectEntitiesV2Response,
  DetectEntitiesV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetectEntitiesV2Request,
  output: DetectEntitiesV2Response,
  errors: [
    InternalServerException,
    InvalidEncodingException,
    InvalidRequestException,
    ServiceUnavailableException,
    TextSizeLimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectEntitiesV2",
}));

export type DetectPHIError =
  | InternalServerException
  | InvalidEncodingException
  | InvalidRequestException
  | ServiceUnavailableException
  | TextSizeLimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Inspects the clinical text for protected health information (PHI) entities and returns
 * the entity category, location, and confidence score for each entity. Amazon Comprehend Medical
 * only detects entities in English language texts.
 */
export const detectPHI: API.OperationMethod<
  DetectPHIRequest,
  DetectPHIResponse,
  DetectPHIError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetectPHIRequest,
  output: DetectPHIResponse,
  errors: [
    InternalServerException,
    InvalidEncodingException,
    InvalidRequestException,
    ServiceUnavailableException,
    TextSizeLimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectPHI",
}));

export type InferICD10CMError =
  | InternalServerException
  | InvalidEncodingException
  | InvalidRequestException
  | ServiceUnavailableException
  | TextSizeLimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * InferICD10CM detects medical conditions as entities listed in a patient record and links
 * those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the
 * Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in
 * English language texts.
 */
export const inferICD10CM: API.OperationMethod<
  InferICD10CMRequest,
  InferICD10CMResponse,
  InferICD10CMError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InferICD10CMRequest,
  output: InferICD10CMResponse,
  errors: [
    InternalServerException,
    InvalidEncodingException,
    InvalidRequestException,
    ServiceUnavailableException,
    TextSizeLimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InferICD10CM",
}));

export type InferRxNormError =
  | InternalServerException
  | InvalidEncodingException
  | InvalidRequestException
  | ServiceUnavailableException
  | TextSizeLimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * InferRxNorm detects medications as entities listed in a patient record and links to the
 * normalized concept identifiers in the RxNorm database from the National Library of Medicine.
 * Amazon Comprehend Medical only detects medical entities in English language texts.
 */
export const inferRxNorm: API.OperationMethod<
  InferRxNormRequest,
  InferRxNormResponse,
  InferRxNormError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InferRxNormRequest,
  output: InferRxNormResponse,
  errors: [
    InternalServerException,
    InvalidEncodingException,
    InvalidRequestException,
    ServiceUnavailableException,
    TextSizeLimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InferRxNorm",
}));

export type InferSNOMEDCTError =
  | InternalServerException
  | InvalidEncodingException
  | InvalidRequestException
  | ServiceUnavailableException
  | TextSizeLimitExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
 */
export const inferSNOMEDCT: API.OperationMethod<
  InferSNOMEDCTRequest,
  InferSNOMEDCTResponse,
  InferSNOMEDCTError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InferSNOMEDCTRequest,
  output: InferSNOMEDCTResponse,
  errors: [
    InternalServerException,
    InvalidEncodingException,
    InvalidRequestException,
    ServiceUnavailableException,
    TextSizeLimitExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InferSNOMEDCT",
}));

export type ListEntitiesDetectionV2JobsError =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of medical entity detection jobs that you have submitted.
 */
export const listEntitiesDetectionV2Jobs: API.OperationMethod<
  ListEntitiesDetectionV2JobsRequest,
  ListEntitiesDetectionV2JobsResponse,
  ListEntitiesDetectionV2JobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEntitiesDetectionV2JobsRequest,
  output: ListEntitiesDetectionV2JobsResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntitiesDetectionV2Jobs",
}));

export type ListICD10CMInferenceJobsError =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of InferICD10CM jobs that you have submitted.
 */
export const listICD10CMInferenceJobs: API.OperationMethod<
  ListICD10CMInferenceJobsRequest,
  ListICD10CMInferenceJobsResponse,
  ListICD10CMInferenceJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListICD10CMInferenceJobsRequest,
  output: ListICD10CMInferenceJobsResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListICD10CMInferenceJobs",
}));

export type ListPHIDetectionJobsError =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of protected health information (PHI) detection jobs you have
 * submitted.
 */
export const listPHIDetectionJobs: API.OperationMethod<
  ListPHIDetectionJobsRequest,
  ListPHIDetectionJobsResponse,
  ListPHIDetectionJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListPHIDetectionJobsRequest,
  output: ListPHIDetectionJobsResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPHIDetectionJobs",
}));

export type ListRxNormInferenceJobsError =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of InferRxNorm jobs that you have submitted.
 */
export const listRxNormInferenceJobs: API.OperationMethod<
  ListRxNormInferenceJobsRequest,
  ListRxNormInferenceJobsResponse,
  ListRxNormInferenceJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListRxNormInferenceJobsRequest,
  output: ListRxNormInferenceJobsResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRxNormInferenceJobs",
}));

export type ListSNOMEDCTInferenceJobsError =
  | InternalServerException
  | InvalidRequestException
  | TooManyRequestsException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of InferSNOMEDCT jobs a user has submitted.
 */
export const listSNOMEDCTInferenceJobs: API.OperationMethod<
  ListSNOMEDCTInferenceJobsRequest,
  ListSNOMEDCTInferenceJobsResponse,
  ListSNOMEDCTInferenceJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListSNOMEDCTInferenceJobsRequest,
  output: ListSNOMEDCTInferenceJobsResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    TooManyRequestsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSNOMEDCTInferenceJobs",
}));

export type StartEntitiesDetectionV2JobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts an asynchronous medical entity detection job for a collection of documents. Use the
 * `DescribeEntitiesDetectionV2Job` operation to track the status of a job.
 */
export const startEntitiesDetectionV2Job: API.OperationMethod<
  StartEntitiesDetectionV2JobRequest,
  StartEntitiesDetectionV2JobResponse,
  StartEntitiesDetectionV2JobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartEntitiesDetectionV2JobRequest,
  output: StartEntitiesDetectionV2JobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartEntitiesDetectionV2Job",
}));

export type StartICD10CMInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM
 * ontology. Use the `DescribeICD10CMInferenceJob` operation to track the status of a
 * job.
 */
export const startICD10CMInferenceJob: API.OperationMethod<
  StartICD10CMInferenceJobRequest,
  StartICD10CMInferenceJobResponse,
  StartICD10CMInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartICD10CMInferenceJobRequest,
  output: StartICD10CMInferenceJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartICD10CMInferenceJob",
}));

export type StartPHIDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts an asynchronous job to detect protected health information (PHI). Use the
 * `DescribePHIDetectionJob` operation to track the status of a job.
 */
export const startPHIDetectionJob: API.OperationMethod<
  StartPHIDetectionJobRequest,
  StartPHIDetectionJobResponse,
  StartPHIDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartPHIDetectionJobRequest,
  output: StartPHIDetectionJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPHIDetectionJob",
}));

export type StartRxNormInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts an asynchronous job to detect medication entities and link them to the RxNorm
 * ontology. Use the `DescribeRxNormInferenceJob` operation to track the status of a
 * job.
 */
export const startRxNormInferenceJob: API.OperationMethod<
  StartRxNormInferenceJobRequest,
  StartRxNormInferenceJobResponse,
  StartRxNormInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartRxNormInferenceJobRequest,
  output: StartRxNormInferenceJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRxNormInferenceJob",
}));

export type StartSNOMEDCTInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job.
 */
export const startSNOMEDCTInferenceJob: API.OperationMethod<
  StartSNOMEDCTInferenceJobRequest,
  StartSNOMEDCTInferenceJobResponse,
  StartSNOMEDCTInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartSNOMEDCTInferenceJobRequest,
  output: StartSNOMEDCTInferenceJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSNOMEDCTInferenceJob",
}));

export type StopEntitiesDetectionV2JobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops a medical entities detection job in progress.
 */
export const stopEntitiesDetectionV2Job: API.OperationMethod<
  StopEntitiesDetectionV2JobRequest,
  StopEntitiesDetectionV2JobResponse,
  StopEntitiesDetectionV2JobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopEntitiesDetectionV2JobRequest,
  output: StopEntitiesDetectionV2JobResponse,
  errors: [InternalServerException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopEntitiesDetectionV2Job",
}));

export type StopICD10CMInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops an InferICD10CM inference job in progress.
 */
export const stopICD10CMInferenceJob: API.OperationMethod<
  StopICD10CMInferenceJobRequest,
  StopICD10CMInferenceJobResponse,
  StopICD10CMInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopICD10CMInferenceJobRequest,
  output: StopICD10CMInferenceJobResponse,
  errors: [InternalServerException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopICD10CMInferenceJob",
}));

export type StopPHIDetectionJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops a protected health information (PHI) detection job in progress.
 */
export const stopPHIDetectionJob: API.OperationMethod<
  StopPHIDetectionJobRequest,
  StopPHIDetectionJobResponse,
  StopPHIDetectionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopPHIDetectionJobRequest,
  output: StopPHIDetectionJobResponse,
  errors: [InternalServerException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopPHIDetectionJob",
}));

export type StopRxNormInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops an InferRxNorm inference job in progress.
 */
export const stopRxNormInferenceJob: API.OperationMethod<
  StopRxNormInferenceJobRequest,
  StopRxNormInferenceJobResponse,
  StopRxNormInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopRxNormInferenceJobRequest,
  output: StopRxNormInferenceJobResponse,
  errors: [InternalServerException, InvalidRequestException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopRxNormInferenceJob",
}));

export type StopSNOMEDCTInferenceJobError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Stops an InferSNOMEDCT inference job in progress.
 */
export const stopSNOMEDCTInferenceJob: API.OperationMethod<
  StopSNOMEDCTInferenceJobRequest,
  StopSNOMEDCTInferenceJobResponse,
  StopSNOMEDCTInferenceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopSNOMEDCTInferenceJobRequest,
  output: StopSNOMEDCTInferenceJobResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopSNOMEDCTInferenceJob",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEntitiesDetectionV2JobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ S3Bucket: S.String, S3Key: S.optional(S.String) }),
      ).annotate({ identifier: "InputDataConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          JobName: S.optional(S.String),
          JobStatus: S.optional(JobStatus),
          Message: S.optional(S.String),
          SubmitTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          InputDataConfig: S.optional(InputDataConfig),
          OutputDataConfig: S.optional(OutputDataConfig),
          LanguageCode: S.optional(LanguageCode),
          DataAccessRoleArn: S.optional(S.String),
          ManifestFilePath: S.optional(S.String),
          KMSKey: S.optional(S.String),
          ModelVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ComprehendMedicalAsyncJobProperties",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ComprehendMedicalAsyncJobProperties: S.optional(ComprehendMedicalAsyncJobProperties),
        }),
      ).annotate({
        identifier: "DescribeEntitiesDetectionV2JobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeICD10CMInferenceJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribePHIDetectionJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeRxNormInferenceJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSNOMEDCTInferenceJobRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Text: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetectEntitiesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(AttributeName), Score: S.optional(S.Number) }),
      ).annotate({ identifier: "Trait" });
    case 2:
      return S.Array(Trait);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(EntitySubType),
          Score: S.optional(S.Number),
          RelationshipScore: S.optional(S.Number),
          RelationshipType: S.optional(RelationshipType),
          Id: S.optional(S.Number),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          Text: S.optional(S.String),
          Category: S.optional(EntityType),
          Traits: S.optional(TraitList),
        }),
      ).annotate({ identifier: "Attribute" });
    case 4:
      return S.Array(Attribute);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.Number),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          Score: S.optional(S.Number),
          Text: S.optional(S.String),
          Category: S.optional(EntityType),
          Type: S.optional(EntitySubType),
          Traits: S.optional(TraitList),
          Attributes: S.optional(AttributeList),
        }),
      ).annotate({ identifier: "Entity" });
    case 6:
      return S.Array(Entity);
    case 7:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(EntityType), Attribute: S.optional(Attribute) }),
      ).annotate({ identifier: "UnmappedAttribute" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(UnmappedAttribute);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Entities: EntityList,
          UnmappedAttributes: S.optional(UnmappedAttributeList),
          PaginationToken: S.optional(S.String),
          ModelVersion: S.String,
        }),
      ).annotate({ identifier: "DetectEntitiesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Text: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetectEntitiesV2Request" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Text: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetectPHIRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Entities: EntityList,
          PaginationToken: S.optional(S.String),
          ModelVersion: S.String,
        }),
      ).annotate({ identifier: "DetectPHIResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Text: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "InferICD10CMRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(ICD10CMAttributeType),
          Score: S.optional(S.Number),
          RelationshipScore: S.optional(S.Number),
          Id: S.optional(S.Number),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          Text: S.optional(S.String),
          Traits: S.optional(ICD10CMTraitList),
          Category: S.optional(ICD10CMEntityType),
          RelationshipType: S.optional(ICD10CMRelationshipType),
        }),
      ).annotate({ identifier: "ICD10CMAttribute" });
    case 7:
      return S.Array(ICD10CMAttribute);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Code: S.optional(S.String),
          Score: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ICD10CMConcept" });
    case 1:
      return S.Array(ICD10CMConcept);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.Number),
          Text: S.optional(S.String),
          Category: S.optional(ICD10CMEntityCategory),
          Type: S.optional(ICD10CMEntityType),
          Score: S.optional(S.Number),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          Attributes: S.optional(ICD10CMAttributeList),
          Traits: S.optional(ICD10CMTraitList),
          ICD10CMConcepts: S.optional(ICD10CMConceptList),
        }),
      ).annotate({ identifier: "ICD10CMEntity" });
    case 3:
      return S.Array(ICD10CMEntity);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Entities: ICD10CMEntityList,
          PaginationToken: S.optional(S.String),
          ModelVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "InferICD10CMResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Text: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "InferRxNormRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(RxNormAttributeType),
          Score: S.optional(S.Number),
          RelationshipScore: S.optional(S.Number),
          Id: S.optional(S.Number),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          Text: S.optional(S.String),
          Traits: S.optional(RxNormTraitList),
        }),
      ).annotate({ identifier: "RxNormAttribute" });
    case 7:
      return S.Array(RxNormAttribute);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.Number),
          Text: S.optional(S.String),
          Category: S.optional(RxNormEntityCategory),
          Type: S.optional(RxNormEntityType),
          Score: S.optional(S.Number),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          Attributes: S.optional(RxNormAttributeList),
          Traits: S.optional(RxNormTraitList),
          RxNormConcepts: S.optional(RxNormConceptList),
        }),
      ).annotate({ identifier: "RxNormEntity" });
    case 1:
      return S.Array(RxNormEntity);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Entities: RxNormEntityList,
          PaginationToken: S.optional(S.String),
          ModelVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "InferRxNormResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Text: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "InferSNOMEDCTRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Category: S.optional(SNOMEDCTEntityCategory),
          Type: S.optional(SNOMEDCTAttributeType),
          Score: S.optional(S.Number),
          RelationshipScore: S.optional(S.Number),
          RelationshipType: S.optional(SNOMEDCTRelationshipType),
          Id: S.optional(S.Number),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          Text: S.optional(S.String),
          Traits: S.optional(SNOMEDCTTraitList),
          SNOMEDCTConcepts: S.optional(SNOMEDCTConceptList),
        }),
      ).annotate({ identifier: "SNOMEDCTAttribute" });
    case 5:
      return S.Array(SNOMEDCTAttribute);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.Number),
          Text: S.optional(S.String),
          Category: S.optional(SNOMEDCTEntityCategory),
          Type: S.optional(SNOMEDCTEntityType),
          Score: S.optional(S.Number),
          BeginOffset: S.optional(S.Number),
          EndOffset: S.optional(S.Number),
          Attributes: S.optional(SNOMEDCTAttributeList),
          Traits: S.optional(SNOMEDCTTraitList),
          SNOMEDCTConcepts: S.optional(SNOMEDCTConceptList),
        }),
      ).annotate({ identifier: "SNOMEDCTEntity" });
    case 7:
      return S.Array(SNOMEDCTEntity);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Edition: S.optional(S.String),
          Language: S.optional(S.String),
          VersionDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "SNOMEDCTDetails" });
    case 1:
      return S.suspend(() => S.Struct({ OriginalTextCharacters: S.optional(S.Number) })).annotate({
        identifier: "Characters",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Entities: SNOMEDCTEntityList,
          PaginationToken: S.optional(S.String),
          ModelVersion: S.optional(S.String),
          SNOMEDCTDetails: S.optional(SNOMEDCTDetails),
          Characters: S.optional(Characters),
        }),
      ).annotate({ identifier: "InferSNOMEDCTResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(S.String),
          JobStatus: S.optional(JobStatus),
          SubmitTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubmitTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ComprehendMedicalAsyncJobFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(ComprehendMedicalAsyncJobFilter),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListEntitiesDetectionV2JobsRequest",
      });
    case 5:
      return S.Array(ComprehendMedicalAsyncJobProperties);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ComprehendMedicalAsyncJobPropertiesList: S.optional(
            ComprehendMedicalAsyncJobPropertiesList,
          ),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEntitiesDetectionV2JobsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(ComprehendMedicalAsyncJobFilter),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListICD10CMInferenceJobsRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(ComprehendMedicalAsyncJobFilter),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPHIDetectionJobsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(ComprehendMedicalAsyncJobFilter),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRxNormInferenceJobsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(ComprehendMedicalAsyncJobFilter),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSNOMEDCTInferenceJobsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: InputDataConfig,
          OutputDataConfig: OutputDataConfig,
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          KMSKey: S.optional(S.String),
          LanguageCode: LanguageCode,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartEntitiesDetectionV2JobRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ JobId: S.optional(S.String) })).annotate({
        identifier: "StartEntitiesDetectionV2JobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: InputDataConfig,
          OutputDataConfig: OutputDataConfig,
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          KMSKey: S.optional(S.String),
          LanguageCode: LanguageCode,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartICD10CMInferenceJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: InputDataConfig,
          OutputDataConfig: OutputDataConfig,
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          KMSKey: S.optional(S.String),
          LanguageCode: LanguageCode,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartPHIDetectionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: InputDataConfig,
          OutputDataConfig: OutputDataConfig,
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          KMSKey: S.optional(S.String),
          LanguageCode: LanguageCode,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartRxNormInferenceJobRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InputDataConfig: InputDataConfig,
          OutputDataConfig: OutputDataConfig,
          DataAccessRoleArn: S.String,
          JobName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          KMSKey: S.optional(S.String),
          LanguageCode: LanguageCode,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartSNOMEDCTInferenceJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopEntitiesDetectionV2JobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopICD10CMInferenceJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopPHIDetectionJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopRxNormInferenceJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopSNOMEDCTInferenceJobRequest",
      });
  }
}
