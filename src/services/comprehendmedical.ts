import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface ComprehendMedical_20181030 {
  describeEntitiesDetectionV2Job(
    input: DescribeEntitiesDetectionV2JobRequest,
  ): Effect.Effect<
    DescribeEntitiesDetectionV2JobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeICD10CMInferenceJob(
    input: DescribeICD10CMInferenceJobRequest,
  ): Effect.Effect<
    DescribeICD10CMInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describePHIDetectionJob(
    input: DescribePHIDetectionJobRequest,
  ): Effect.Effect<
    DescribePHIDetectionJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeRxNormInferenceJob(
    input: DescribeRxNormInferenceJobRequest,
  ): Effect.Effect<
    DescribeRxNormInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeSNOMEDCTInferenceJob(
    input: DescribeSNOMEDCTInferenceJobRequest,
  ): Effect.Effect<
    DescribeSNOMEDCTInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  detectEntities(
    input: DetectEntitiesRequest,
  ): Effect.Effect<
    DetectEntitiesResponse,
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  detectEntitiesV2(
    input: DetectEntitiesV2Request,
  ): Effect.Effect<
    DetectEntitiesV2Response,
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  detectPHI(
    input: DetectPHIRequest,
  ): Effect.Effect<
    DetectPHIResponse,
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  inferICD10CM(
    input: InferICD10CMRequest,
  ): Effect.Effect<
    InferICD10CMResponse,
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  inferRxNorm(
    input: InferRxNormRequest,
  ): Effect.Effect<
    InferRxNormResponse,
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  inferSNOMEDCT(
    input: InferSNOMEDCTRequest,
  ): Effect.Effect<
    InferSNOMEDCTResponse,
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listEntitiesDetectionV2Jobs(
    input: ListEntitiesDetectionV2JobsRequest,
  ): Effect.Effect<
    ListEntitiesDetectionV2JobsResponse,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listICD10CMInferenceJobs(
    input: ListICD10CMInferenceJobsRequest,
  ): Effect.Effect<
    ListICD10CMInferenceJobsResponse,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listPHIDetectionJobs(
    input: ListPHIDetectionJobsRequest,
  ): Effect.Effect<
    ListPHIDetectionJobsResponse,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listRxNormInferenceJobs(
    input: ListRxNormInferenceJobsRequest,
  ): Effect.Effect<
    ListRxNormInferenceJobsResponse,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  listSNOMEDCTInferenceJobs(
    input: ListSNOMEDCTInferenceJobsRequest,
  ): Effect.Effect<
    ListSNOMEDCTInferenceJobsResponse,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError
  >;
  startEntitiesDetectionV2Job(
    input: StartEntitiesDetectionV2JobRequest,
  ): Effect.Effect<
    StartEntitiesDetectionV2JobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  startICD10CMInferenceJob(
    input: StartICD10CMInferenceJobRequest,
  ): Effect.Effect<
    StartICD10CMInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  startPHIDetectionJob(
    input: StartPHIDetectionJobRequest,
  ): Effect.Effect<
    StartPHIDetectionJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  startRxNormInferenceJob(
    input: StartRxNormInferenceJobRequest,
  ): Effect.Effect<
    StartRxNormInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  startSNOMEDCTInferenceJob(
    input: StartSNOMEDCTInferenceJobRequest,
  ): Effect.Effect<
    StartSNOMEDCTInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  stopEntitiesDetectionV2Job(
    input: StopEntitiesDetectionV2JobRequest,
  ): Effect.Effect<
    StopEntitiesDetectionV2JobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopICD10CMInferenceJob(
    input: StopICD10CMInferenceJobRequest,
  ): Effect.Effect<
    StopICD10CMInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopPHIDetectionJob(
    input: StopPHIDetectionJobRequest,
  ): Effect.Effect<
    StopPHIDetectionJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopRxNormInferenceJob(
    input: StopRxNormInferenceJobRequest,
  ): Effect.Effect<
    StopRxNormInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopSNOMEDCTInferenceJob(
    input: StopSNOMEDCTInferenceJobRequest,
  ): Effect.Effect<
    StopSNOMEDCTInferenceJobResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type Comprehendmedical = ComprehendMedical_20181030;

export type AnyLengthString = string;

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
  Traits?: Array<Trait>;
}
export type AttributeList = Array<Attribute>;
export type AttributeName =
  | "SIGN"
  | "SYMPTOM"
  | "DIAGNOSIS"
  | "NEGATION"
  | "PERTAINS_TO_FAMILY"
  | "HYPOTHETICAL"
  | "LOW_CONFIDENCE"
  | "PAST_HISTORY"
  | "FUTURE";
export type BoundedLengthString = string;

export interface Characters {
  OriginalTextCharacters?: number;
}
export type ClientRequestTokenString = string;

export interface ComprehendMedicalAsyncJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmitTimeBefore?: Date | string;
  SubmitTimeAfter?: Date | string;
}
export interface ComprehendMedicalAsyncJobProperties {
  JobId?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  Message?: string;
  SubmitTime?: Date | string;
  EndTime?: Date | string;
  ExpirationTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  LanguageCode?: LanguageCode;
  DataAccessRoleArn?: string;
  ManifestFilePath?: string;
  KMSKey?: string;
  ModelVersion?: string;
}
export type ComprehendMedicalAsyncJobPropertiesList =
  Array<ComprehendMedicalAsyncJobProperties>;
export interface DescribeEntitiesDetectionV2JobRequest {
  JobId: string;
}
export interface DescribeEntitiesDetectionV2JobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
export interface DescribeICD10CMInferenceJobRequest {
  JobId: string;
}
export interface DescribeICD10CMInferenceJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
export interface DescribePHIDetectionJobRequest {
  JobId: string;
}
export interface DescribePHIDetectionJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
export interface DescribeRxNormInferenceJobRequest {
  JobId: string;
}
export interface DescribeRxNormInferenceJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
export interface DescribeSNOMEDCTInferenceJobRequest {
  JobId: string;
}
export interface DescribeSNOMEDCTInferenceJobResponse {
  ComprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;
}
export interface DetectEntitiesRequest {
  Text: string;
}
export interface DetectEntitiesResponse {
  Entities: Array<Entity>;
  UnmappedAttributes?: Array<UnmappedAttribute>;
  PaginationToken?: string;
  ModelVersion: string;
}
export interface DetectEntitiesV2Request {
  Text: string;
}
export interface DetectEntitiesV2Response {
  Entities: Array<Entity>;
  UnmappedAttributes?: Array<UnmappedAttribute>;
  PaginationToken?: string;
  ModelVersion: string;
}
export interface DetectPHIRequest {
  Text: string;
}
export interface DetectPHIResponse {
  Entities: Array<Entity>;
  PaginationToken?: string;
  ModelVersion: string;
}
export interface Entity {
  Id?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Score?: number;
  Text?: string;
  Category?: EntityType;
  Type?: EntitySubType;
  Traits?: Array<Trait>;
  Attributes?: Array<Attribute>;
}
export type EntityList = Array<Entity>;
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
  | "REC_DRUG_USE";
export type EntityType =
  | "MEDICATION"
  | "MEDICAL_CONDITION"
  | "PROTECTED_HEALTH_INFORMATION"
  | "TEST_TREATMENT_PROCEDURE"
  | "ANATOMY"
  | "TIME_EXPRESSION"
  | "BEHAVIORAL_ENVIRONMENTAL_SOCIAL";
export type Float = number;

export type IamRoleArn = string;

export interface ICD10CMAttribute {
  Type?: ICD10CMAttributeType;
  Score?: number;
  RelationshipScore?: number;
  Id?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Text?: string;
  Traits?: Array<ICD10CMTrait>;
  Category?: ICD10CMEntityType;
  RelationshipType?: ICD10CMRelationshipType;
}
export type ICD10CMAttributeList = Array<ICD10CMAttribute>;
export type ICD10CMAttributeType =
  | "ACUITY"
  | "DIRECTION"
  | "SYSTEM_ORGAN_SITE"
  | "QUALITY"
  | "QUANTITY"
  | "TIME_TO_DX_NAME"
  | "TIME_EXPRESSION";
export interface ICD10CMConcept {
  Description?: string;
  Code?: string;
  Score?: number;
}
export type ICD10CMConceptList = Array<ICD10CMConcept>;
export interface ICD10CMEntity {
  Id?: number;
  Text?: string;
  Category?: ICD10CMEntityCategory;
  Type?: ICD10CMEntityType;
  Score?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Attributes?: Array<ICD10CMAttribute>;
  Traits?: Array<ICD10CMTrait>;
  ICD10CMConcepts?: Array<ICD10CMConcept>;
}
export type ICD10CMEntityCategory = "MEDICAL_CONDITION";
export type ICD10CMEntityList = Array<ICD10CMEntity>;
export type ICD10CMEntityType = "DX_NAME" | "TIME_EXPRESSION";
export type ICD10CMRelationshipType =
  | "OVERLAP"
  | "SYSTEM_ORGAN_SITE"
  | "QUALITY";
export interface ICD10CMTrait {
  Name?: ICD10CMTraitName;
  Score?: number;
}
export type ICD10CMTraitList = Array<ICD10CMTrait>;
export type ICD10CMTraitName =
  | "NEGATION"
  | "DIAGNOSIS"
  | "SIGN"
  | "SYMPTOM"
  | "PERTAINS_TO_FAMILY"
  | "HYPOTHETICAL"
  | "LOW_CONFIDENCE";
export interface InferICD10CMRequest {
  Text: string;
}
export interface InferICD10CMResponse {
  Entities: Array<ICD10CMEntity>;
  PaginationToken?: string;
  ModelVersion?: string;
}
export interface InferRxNormRequest {
  Text: string;
}
export interface InferRxNormResponse {
  Entities: Array<RxNormEntity>;
  PaginationToken?: string;
  ModelVersion?: string;
}
export interface InferSNOMEDCTRequest {
  Text: string;
}
export interface InferSNOMEDCTResponse {
  Entities: Array<SNOMEDCTEntity>;
  PaginationToken?: string;
  ModelVersion?: string;
  SNOMEDCTDetails?: SNOMEDCTDetails;
  Characters?: Characters;
}
export interface InputDataConfig {
  S3Bucket: string;
  S3Key?: string;
}
export type Integer = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidEncodingException extends Data.TaggedError(
  "InvalidEncodingException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export type JobId = string;

export type JobName = string;

export type JobStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "PARTIAL_SUCCESS"
  | "FAILED"
  | "STOP_REQUESTED"
  | "STOPPED";
export type KMSKey = string;

export type LanguageCode = "EN";
export interface ListEntitiesDetectionV2JobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEntitiesDetectionV2JobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
  NextToken?: string;
}
export interface ListICD10CMInferenceJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListICD10CMInferenceJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
  NextToken?: string;
}
export interface ListPHIDetectionJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPHIDetectionJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
  NextToken?: string;
}
export interface ListRxNormInferenceJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRxNormInferenceJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
  NextToken?: string;
}
export interface ListSNOMEDCTInferenceJobsRequest {
  Filter?: ComprehendMedicalAsyncJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSNOMEDCTInferenceJobsResponse {
  ComprehendMedicalAsyncJobPropertiesList?: Array<ComprehendMedicalAsyncJobProperties>;
  NextToken?: string;
}
export type ManifestFilePath = string;

export type MaxResultsInteger = number;

export type ModelVersion = string;

export type OntologyLinkingBoundedLengthString = string;

export interface OutputDataConfig {
  S3Bucket: string;
  S3Key?: string;
}
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
  | "QUALITY";
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface RxNormAttribute {
  Type?: RxNormAttributeType;
  Score?: number;
  RelationshipScore?: number;
  Id?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Text?: string;
  Traits?: Array<RxNormTrait>;
}
export type RxNormAttributeList = Array<RxNormAttribute>;
export type RxNormAttributeType =
  | "DOSAGE"
  | "DURATION"
  | "FORM"
  | "FREQUENCY"
  | "RATE"
  | "ROUTE_OR_MODE"
  | "STRENGTH";
export interface RxNormConcept {
  Description?: string;
  Code?: string;
  Score?: number;
}
export type RxNormConceptList = Array<RxNormConcept>;
export interface RxNormEntity {
  Id?: number;
  Text?: string;
  Category?: RxNormEntityCategory;
  Type?: RxNormEntityType;
  Score?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Attributes?: Array<RxNormAttribute>;
  Traits?: Array<RxNormTrait>;
  RxNormConcepts?: Array<RxNormConcept>;
}
export type RxNormEntityCategory = "MEDICATION";
export type RxNormEntityList = Array<RxNormEntity>;
export type RxNormEntityType = "BRAND_NAME" | "GENERIC_NAME";
export interface RxNormTrait {
  Name?: RxNormTraitName;
  Score?: number;
}
export type RxNormTraitList = Array<RxNormTrait>;
export type RxNormTraitName = "NEGATION" | "PAST_HISTORY";
export type S3Bucket = string;

export type S3Key = string;

export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
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
  Traits?: Array<SNOMEDCTTrait>;
  SNOMEDCTConcepts?: Array<SNOMEDCTConcept>;
}
export type SNOMEDCTAttributeList = Array<SNOMEDCTAttribute>;
export type SNOMEDCTAttributeType =
  | "ACUITY"
  | "QUALITY"
  | "DIRECTION"
  | "SYSTEM_ORGAN_SITE"
  | "TEST_VALUE"
  | "TEST_UNIT";
export interface SNOMEDCTConcept {
  Description?: string;
  Code?: string;
  Score?: number;
}
export type SNOMEDCTConceptList = Array<SNOMEDCTConcept>;
export interface SNOMEDCTDetails {
  Edition?: string;
  Language?: string;
  VersionDate?: string;
}
export interface SNOMEDCTEntity {
  Id?: number;
  Text?: string;
  Category?: SNOMEDCTEntityCategory;
  Type?: SNOMEDCTEntityType;
  Score?: number;
  BeginOffset?: number;
  EndOffset?: number;
  Attributes?: Array<SNOMEDCTAttribute>;
  Traits?: Array<SNOMEDCTTrait>;
  SNOMEDCTConcepts?: Array<SNOMEDCTConcept>;
}
export type SNOMEDCTEntityCategory =
  | "MEDICAL_CONDITION"
  | "ANATOMY"
  | "TEST_TREATMENT_PROCEDURE";
export type SNOMEDCTEntityList = Array<SNOMEDCTEntity>;
export type SNOMEDCTEntityType =
  | "DX_NAME"
  | "TEST_NAME"
  | "PROCEDURE_NAME"
  | "TREATMENT_NAME";
export type SNOMEDCTRelationshipType =
  | "ACUITY"
  | "QUALITY"
  | "TEST_VALUE"
  | "TEST_UNITS"
  | "DIRECTION"
  | "SYSTEM_ORGAN_SITE"
  | "TEST_UNIT";
export interface SNOMEDCTTrait {
  Name?: SNOMEDCTTraitName;
  Score?: number;
}
export type SNOMEDCTTraitList = Array<SNOMEDCTTrait>;
export type SNOMEDCTTraitName =
  | "NEGATION"
  | "DIAGNOSIS"
  | "SIGN"
  | "SYMPTOM"
  | "PERTAINS_TO_FAMILY"
  | "HYPOTHETICAL"
  | "LOW_CONFIDENCE"
  | "PAST_HISTORY"
  | "FUTURE";
export interface StartEntitiesDetectionV2JobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
export interface StartEntitiesDetectionV2JobResponse {
  JobId?: string;
}
export interface StartICD10CMInferenceJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
export interface StartICD10CMInferenceJobResponse {
  JobId?: string;
}
export interface StartPHIDetectionJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
export interface StartPHIDetectionJobResponse {
  JobId?: string;
}
export interface StartRxNormInferenceJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
export interface StartRxNormInferenceJobResponse {
  JobId?: string;
}
export interface StartSNOMEDCTInferenceJobRequest {
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  JobName?: string;
  ClientRequestToken?: string;
  KMSKey?: string;
  LanguageCode: LanguageCode;
}
export interface StartSNOMEDCTInferenceJobResponse {
  JobId?: string;
}
export interface StopEntitiesDetectionV2JobRequest {
  JobId: string;
}
export interface StopEntitiesDetectionV2JobResponse {
  JobId?: string;
}
export interface StopICD10CMInferenceJobRequest {
  JobId: string;
}
export interface StopICD10CMInferenceJobResponse {
  JobId?: string;
}
export interface StopPHIDetectionJobRequest {
  JobId: string;
}
export interface StopPHIDetectionJobResponse {
  JobId?: string;
}
export interface StopRxNormInferenceJobRequest {
  JobId: string;
}
export interface StopRxNormInferenceJobResponse {
  JobId?: string;
}
export interface StopSNOMEDCTInferenceJobRequest {
  JobId: string;
}
export interface StopSNOMEDCTInferenceJobResponse {
  JobId?: string;
}
export declare class TextSizeLimitExceededException extends Data.TaggedError(
  "TextSizeLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export interface Trait {
  Name?: AttributeName;
  Score?: number;
}
export type TraitList = Array<Trait>;
export interface UnmappedAttribute {
  Type?: EntityType;
  Attribute?: Attribute;
}
export type UnmappedAttributeList = Array<UnmappedAttribute>;
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace DescribeEntitiesDetectionV2Job {
  export type Input = DescribeEntitiesDetectionV2JobRequest;
  export type Output = DescribeEntitiesDetectionV2JobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeICD10CMInferenceJob {
  export type Input = DescribeICD10CMInferenceJobRequest;
  export type Output = DescribeICD10CMInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribePHIDetectionJob {
  export type Input = DescribePHIDetectionJobRequest;
  export type Output = DescribePHIDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeRxNormInferenceJob {
  export type Input = DescribeRxNormInferenceJobRequest;
  export type Output = DescribeRxNormInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeSNOMEDCTInferenceJob {
  export type Input = DescribeSNOMEDCTInferenceJobRequest;
  export type Output = DescribeSNOMEDCTInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DetectEntities {
  export type Input = DetectEntitiesRequest;
  export type Output = DetectEntitiesResponse;
  export type Error =
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DetectEntitiesV2 {
  export type Input = DetectEntitiesV2Request;
  export type Output = DetectEntitiesV2Response;
  export type Error =
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DetectPHI {
  export type Input = DetectPHIRequest;
  export type Output = DetectPHIResponse;
  export type Error =
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace InferICD10CM {
  export type Input = InferICD10CMRequest;
  export type Output = InferICD10CMResponse;
  export type Error =
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace InferRxNorm {
  export type Input = InferRxNormRequest;
  export type Output = InferRxNormResponse;
  export type Error =
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace InferSNOMEDCT {
  export type Input = InferSNOMEDCTRequest;
  export type Output = InferSNOMEDCTResponse;
  export type Error =
    | InternalServerException
    | InvalidEncodingException
    | InvalidRequestException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEntitiesDetectionV2Jobs {
  export type Input = ListEntitiesDetectionV2JobsRequest;
  export type Output = ListEntitiesDetectionV2JobsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListICD10CMInferenceJobs {
  export type Input = ListICD10CMInferenceJobsRequest;
  export type Output = ListICD10CMInferenceJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPHIDetectionJobs {
  export type Input = ListPHIDetectionJobsRequest;
  export type Output = ListPHIDetectionJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRxNormInferenceJobs {
  export type Input = ListRxNormInferenceJobsRequest;
  export type Output = ListRxNormInferenceJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSNOMEDCTInferenceJobs {
  export type Input = ListSNOMEDCTInferenceJobsRequest;
  export type Output = ListSNOMEDCTInferenceJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartEntitiesDetectionV2Job {
  export type Input = StartEntitiesDetectionV2JobRequest;
  export type Output = StartEntitiesDetectionV2JobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartICD10CMInferenceJob {
  export type Input = StartICD10CMInferenceJobRequest;
  export type Output = StartICD10CMInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartPHIDetectionJob {
  export type Input = StartPHIDetectionJobRequest;
  export type Output = StartPHIDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartRxNormInferenceJob {
  export type Input = StartRxNormInferenceJobRequest;
  export type Output = StartRxNormInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartSNOMEDCTInferenceJob {
  export type Input = StartSNOMEDCTInferenceJobRequest;
  export type Output = StartSNOMEDCTInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StopEntitiesDetectionV2Job {
  export type Input = StopEntitiesDetectionV2JobRequest;
  export type Output = StopEntitiesDetectionV2JobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopICD10CMInferenceJob {
  export type Input = StopICD10CMInferenceJobRequest;
  export type Output = StopICD10CMInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopPHIDetectionJob {
  export type Input = StopPHIDetectionJobRequest;
  export type Output = StopPHIDetectionJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopRxNormInferenceJob {
  export type Input = StopRxNormInferenceJobRequest;
  export type Output = StopRxNormInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopSNOMEDCTInferenceJob {
  export type Input = StopSNOMEDCTInferenceJobRequest;
  export type Output = StopSNOMEDCTInferenceJobResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
