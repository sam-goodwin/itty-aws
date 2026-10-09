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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Voice ID", serviceShapeName: "VoiceID" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "voiceid" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-09-27");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://voiceid-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://voiceid-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://voiceid.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://voiceid.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ConflictType: /*@__PURE__*/ S.optional(S.String),
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
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
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
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DomainId = string;
export type WatchlistId = string;
export type FraudsterId = string | redacted.Redacted<string>;
export interface AssociateFraudsterRequest {
  DomainId: string;
  WatchlistId: string;
  FraudsterId: string | redacted.Redacted<string>;
}
export type GeneratedFraudsterId = string;
export type ResponseWatchlistIds = string[];
export interface Fraudster {
  DomainId?: string;
  GeneratedFraudsterId?: string;
  CreatedAt?: Date;
  WatchlistIds?: string[];
}
export interface AssociateFraudsterResponse {
  Fraudster?: Fraudster;
}
export type DomainName = string | redacted.Redacted<string>;
export type Description = string | redacted.Redacted<string>;
export type KmsKeyId = string;
export interface ServerSideEncryptionConfiguration {
  KmsKeyId: string;
}
export type ClientTokenString = string;
export type TagKey = string | redacted.Redacted<string>;
export type TagValue = string | redacted.Redacted<string>;
export interface Tag {
  Key: string | redacted.Redacted<string>;
  Value: string | redacted.Redacted<string>;
}
export type TagList = Tag[];
export interface CreateDomainRequest {
  Name: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
  ClientToken?: string;
  Tags?: Tag[];
}
export type Arn = string;
export type DomainStatus = string;
export type ServerSideEncryptionUpdateStatus = string;
export interface ServerSideEncryptionUpdateDetails {
  OldKmsKeyId?: string;
  UpdateStatus?: string;
  Message?: string;
}
export interface WatchlistDetails {
  DefaultWatchlistId: string;
}
export interface Domain {
  DomainId?: string;
  Arn?: string;
  Name?: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
  DomainStatus?: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails;
  WatchlistDetails?: WatchlistDetails;
}
export interface CreateDomainResponse {
  Domain?: Domain;
}
export type WatchlistName = string | redacted.Redacted<string>;
export type WatchlistDescription = string | redacted.Redacted<string>;
export interface CreateWatchlistRequest {
  DomainId: string;
  Name: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
  ClientToken?: string;
}
export interface Watchlist {
  DomainId?: string;
  WatchlistId?: string;
  Name?: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
  DefaultWatchlist?: boolean;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export interface CreateWatchlistResponse {
  Watchlist?: Watchlist;
}
export interface DeleteDomainRequest {
  DomainId: string;
}
export interface DeleteDomainResponse {}
export interface DeleteFraudsterRequest {
  DomainId: string;
  FraudsterId: string | redacted.Redacted<string>;
}
export interface DeleteFraudsterResponse {}
export type SpeakerId = string | redacted.Redacted<string>;
export interface DeleteSpeakerRequest {
  DomainId: string;
  SpeakerId: string | redacted.Redacted<string>;
}
export interface DeleteSpeakerResponse {}
export interface DeleteWatchlistRequest {
  DomainId: string;
  WatchlistId: string;
}
export interface DeleteWatchlistResponse {}
export interface DescribeDomainRequest {
  DomainId: string;
}
export interface DescribeDomainResponse {
  Domain?: Domain;
}
export interface DescribeFraudsterRequest {
  DomainId: string;
  FraudsterId: string | redacted.Redacted<string>;
}
export interface DescribeFraudsterResponse {
  Fraudster?: Fraudster;
}
export type JobId = string;
export interface DescribeFraudsterRegistrationJobRequest {
  DomainId: string;
  JobId: string;
}
export type JobName = string | redacted.Redacted<string>;
export type FraudsterRegistrationJobStatus = string;
export type IamRoleArn = string;
export type DuplicateRegistrationAction = string;
export type Score = number;
export type RegistrationConfigWatchlistIds = string[];
export interface RegistrationConfig {
  DuplicateRegistrationAction?: string;
  FraudsterSimilarityThreshold?: number;
  WatchlistIds?: string[];
}
export type S3Uri = string;
export interface InputDataConfig {
  S3Uri: string;
}
export interface OutputDataConfig {
  S3Uri: string;
  KmsKeyId?: string;
}
export interface FailureDetails {
  StatusCode?: number;
  Message?: string;
}
export interface JobProgress {
  PercentComplete?: number;
}
export interface FraudsterRegistrationJob {
  JobName?: string | redacted.Redacted<string>;
  JobId?: string;
  JobStatus?: string;
  DomainId?: string;
  DataAccessRoleArn?: string;
  RegistrationConfig?: RegistrationConfig;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  CreatedAt?: Date;
  EndedAt?: Date;
  FailureDetails?: FailureDetails;
  JobProgress?: JobProgress;
}
export interface DescribeFraudsterRegistrationJobResponse {
  Job?: FraudsterRegistrationJob;
}
export interface DescribeSpeakerRequest {
  DomainId: string;
  SpeakerId: string | redacted.Redacted<string>;
}
export type CustomerSpeakerId = string | redacted.Redacted<string>;
export type GeneratedSpeakerId = string;
export type SpeakerStatus = string;
export interface Speaker {
  DomainId?: string;
  CustomerSpeakerId?: string | redacted.Redacted<string>;
  GeneratedSpeakerId?: string;
  Status?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  LastAccessedAt?: Date;
}
export interface DescribeSpeakerResponse {
  Speaker?: Speaker;
}
export interface DescribeSpeakerEnrollmentJobRequest {
  DomainId: string;
  JobId: string;
}
export type SpeakerEnrollmentJobStatus = string;
export type ExistingEnrollmentAction = string;
export type FraudDetectionAction = string;
export type EnrollmentJobFraudDetectionConfigWatchlistIds = string[];
export interface EnrollmentJobFraudDetectionConfig {
  FraudDetectionAction?: string;
  RiskThreshold?: number;
  WatchlistIds?: string[];
}
export interface EnrollmentConfig {
  ExistingEnrollmentAction?: string;
  FraudDetectionConfig?: EnrollmentJobFraudDetectionConfig;
}
export interface SpeakerEnrollmentJob {
  JobName?: string | redacted.Redacted<string>;
  JobId?: string;
  JobStatus?: string;
  DomainId?: string;
  DataAccessRoleArn?: string;
  EnrollmentConfig?: EnrollmentConfig;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  CreatedAt?: Date;
  EndedAt?: Date;
  FailureDetails?: FailureDetails;
  JobProgress?: JobProgress;
}
export interface DescribeSpeakerEnrollmentJobResponse {
  Job?: SpeakerEnrollmentJob;
}
export interface DescribeWatchlistRequest {
  DomainId: string;
  WatchlistId: string;
}
export interface DescribeWatchlistResponse {
  Watchlist?: Watchlist;
}
export interface DisassociateFraudsterRequest {
  DomainId: string;
  WatchlistId: string;
  FraudsterId: string | redacted.Redacted<string>;
}
export interface DisassociateFraudsterResponse {
  Fraudster?: Fraudster;
}
export type SessionNameOrId = string;
export interface EvaluateSessionRequest {
  DomainId: string;
  SessionNameOrId: string;
}
export type SessionId = string;
export type SessionName = string;
export type StreamingStatus = string;
export type UniqueIdLarge = string;
export type AuthenticationDecision = string;
export interface AuthenticationConfiguration {
  AcceptanceThreshold: number;
}
export interface AuthenticationResult {
  AuthenticationResultId?: string;
  AudioAggregationStartedAt?: Date;
  AudioAggregationEndedAt?: Date;
  CustomerSpeakerId?: string | redacted.Redacted<string>;
  GeneratedSpeakerId?: string;
  Decision?: string;
  Score?: number;
  Configuration?: AuthenticationConfiguration;
}
export interface FraudDetectionConfiguration {
  RiskThreshold?: number;
  WatchlistId?: string;
}
export type FraudDetectionDecision = string;
export type FraudDetectionReason = string;
export type FraudDetectionReasons = string[];
export interface KnownFraudsterRisk {
  RiskScore: number;
  GeneratedFraudsterId?: string;
}
export interface VoiceSpoofingRisk {
  RiskScore: number;
}
export interface FraudRiskDetails {
  KnownFraudsterRisk: KnownFraudsterRisk;
  VoiceSpoofingRisk: VoiceSpoofingRisk;
}
export interface FraudDetectionResult {
  FraudDetectionResultId?: string;
  AudioAggregationStartedAt?: Date;
  AudioAggregationEndedAt?: Date;
  Configuration?: FraudDetectionConfiguration;
  Decision?: string;
  Reasons?: string[];
  RiskDetails?: FraudRiskDetails;
}
export interface EvaluateSessionResponse {
  DomainId?: string;
  SessionId?: string;
  SessionName?: string;
  StreamingStatus?: string;
  AuthenticationResult?: AuthenticationResult;
  FraudDetectionResult?: FraudDetectionResult;
}
export type MaxResultsForListDomainFe = number;
export type NextToken = string;
export interface ListDomainsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface DomainSummary {
  DomainId?: string;
  Arn?: string;
  Name?: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
  DomainStatus?: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails;
  WatchlistDetails?: WatchlistDetails;
}
export type DomainSummaries = DomainSummary[];
export interface ListDomainsResponse {
  DomainSummaries?: DomainSummary[];
  NextToken?: string;
}
export type MaxResultsForList = number;
export interface ListFraudsterRegistrationJobsRequest {
  DomainId: string;
  JobStatus?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface FraudsterRegistrationJobSummary {
  JobName?: string | redacted.Redacted<string>;
  JobId?: string;
  JobStatus?: string;
  DomainId?: string;
  CreatedAt?: Date;
  EndedAt?: Date;
  FailureDetails?: FailureDetails;
  JobProgress?: JobProgress;
}
export type FraudsterRegistrationJobSummaries = FraudsterRegistrationJobSummary[];
export interface ListFraudsterRegistrationJobsResponse {
  JobSummaries?: FraudsterRegistrationJobSummary[];
  NextToken?: string;
}
export interface ListFraudstersRequest {
  DomainId: string;
  WatchlistId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface FraudsterSummary {
  DomainId?: string;
  GeneratedFraudsterId?: string;
  CreatedAt?: Date;
  WatchlistIds?: string[];
}
export type FraudsterSummaries = FraudsterSummary[];
export interface ListFraudstersResponse {
  FraudsterSummaries?: FraudsterSummary[];
  NextToken?: string;
}
export interface ListSpeakerEnrollmentJobsRequest {
  DomainId: string;
  JobStatus?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface SpeakerEnrollmentJobSummary {
  JobName?: string | redacted.Redacted<string>;
  JobId?: string;
  JobStatus?: string;
  DomainId?: string;
  CreatedAt?: Date;
  EndedAt?: Date;
  FailureDetails?: FailureDetails;
  JobProgress?: JobProgress;
}
export type SpeakerEnrollmentJobSummaries = SpeakerEnrollmentJobSummary[];
export interface ListSpeakerEnrollmentJobsResponse {
  JobSummaries?: SpeakerEnrollmentJobSummary[];
  NextToken?: string;
}
export interface ListSpeakersRequest {
  DomainId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface SpeakerSummary {
  DomainId?: string;
  CustomerSpeakerId?: string | redacted.Redacted<string>;
  GeneratedSpeakerId?: string;
  Status?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  LastAccessedAt?: Date;
}
export type SpeakerSummaries = SpeakerSummary[];
export interface ListSpeakersResponse {
  SpeakerSummaries?: SpeakerSummary[];
  NextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface ListWatchlistsRequest {
  DomainId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface WatchlistSummary {
  DomainId?: string;
  WatchlistId?: string;
  Name?: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
  DefaultWatchlist?: boolean;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type WatchlistSummaries = WatchlistSummary[];
export interface ListWatchlistsResponse {
  WatchlistSummaries?: WatchlistSummary[];
  NextToken?: string;
}
export interface OptOutSpeakerRequest {
  DomainId: string;
  SpeakerId: string | redacted.Redacted<string>;
}
export interface OptOutSpeakerResponse {
  Speaker?: Speaker;
}
export interface StartFraudsterRegistrationJobRequest {
  ClientToken?: string;
  JobName?: string | redacted.Redacted<string>;
  DomainId: string;
  DataAccessRoleArn: string;
  RegistrationConfig?: RegistrationConfig;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
}
export interface StartFraudsterRegistrationJobResponse {
  Job?: FraudsterRegistrationJob;
}
export interface StartSpeakerEnrollmentJobRequest {
  ClientToken?: string;
  JobName?: string | redacted.Redacted<string>;
  DomainId: string;
  DataAccessRoleArn: string;
  EnrollmentConfig?: EnrollmentConfig;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
}
export interface StartSpeakerEnrollmentJobResponse {
  Job?: SpeakerEnrollmentJob;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = (string | redacted.Redacted<string>)[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: (string | redacted.Redacted<string>)[];
}
export interface UntagResourceResponse {}
export interface UpdateDomainRequest {
  DomainId: string;
  Name: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
}
export interface UpdateDomainResponse {
  Domain?: Domain;
}
export interface UpdateWatchlistRequest {
  DomainId: string;
  WatchlistId: string;
  Name?: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
}
export interface UpdateWatchlistResponse {
  Watchlist?: Watchlist;
}
export type ConflictType = string;
export type ResourceType = string;
export type AssociateFraudsterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates the fraudsters with the watchlist specified in the same domain.
 */
export const associateFraudster: API.OperationMethod<
  AssociateFraudsterRequest,
  AssociateFraudsterResponse,
  AssociateFraudsterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateFraudsterRequest>,
  output: __S(3) as any as S.Schema<AssociateFraudsterResponse>,
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
  operationName: "AssociateFraudster",
}));

export type CreateDomainError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters,
 * customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
 */
export const createDomain: API.OperationMethod<
  CreateDomainRequest,
  CreateDomainResponse,
  CreateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<CreateDomainRequest>,
  output: __S(11) as any as S.Schema<CreateDomainResponse>,
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
  operationName: "CreateDomain",
}));

export type CreateWatchlistError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a watchlist that fraudsters can be a part of.
 */
export const createWatchlist: API.OperationMethod<
  CreateWatchlistRequest,
  CreateWatchlistResponse,
  CreateWatchlistError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<CreateWatchlistRequest>,
  output: __S(14) as any as S.Schema<CreateWatchlistResponse>,
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
  operationName: "CreateWatchlist",
}));

export type DeleteDomainError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified domain from Voice ID.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<DeleteDomainRequest>,
  output: __S(16) as any as S.Schema<DeleteDomainResponse>,
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
  operationName: "DeleteDomain",
}));

export type DeleteFraudsterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
 */
export const deleteFraudster: API.OperationMethod<
  DeleteFraudsterRequest,
  DeleteFraudsterResponse,
  DeleteFraudsterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<DeleteFraudsterRequest>,
  output: __S(16) as any as S.Schema<DeleteFraudsterResponse>,
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
  operationName: "DeleteFraudster",
}));

export type DeleteSpeakerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified speaker from Voice ID.
 */
export const deleteSpeaker: API.OperationMethod<
  DeleteSpeakerRequest,
  DeleteSpeakerResponse,
  DeleteSpeakerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<DeleteSpeakerRequest>,
  output: __S(16) as any as S.Schema<DeleteSpeakerResponse>,
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
  operationName: "DeleteSpeaker",
}));

export type DeleteWatchlistError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified watchlist from Voice ID. This API throws an exception when
 * there are fraudsters in the watchlist that you are trying to delete. You must delete the
 * fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted.
 */
export const deleteWatchlist: API.OperationMethod<
  DeleteWatchlistRequest,
  DeleteWatchlistResponse,
  DeleteWatchlistError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19) as any as S.Schema<DeleteWatchlistRequest>,
  output: __S(16) as any as S.Schema<DeleteWatchlistResponse>,
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
  operationName: "DeleteWatchlist",
}));

export type DescribeDomainError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified domain.
 */
export const describeDomain: API.OperationMethod<
  DescribeDomainRequest,
  DescribeDomainResponse,
  DescribeDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<DescribeDomainRequest>,
  output: __S(11) as any as S.Schema<DescribeDomainResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomain",
}));

export type DescribeFraudsterError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified fraudster.
 */
export const describeFraudster: API.OperationMethod<
  DescribeFraudsterRequest,
  DescribeFraudsterResponse,
  DescribeFraudsterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<DescribeFraudsterRequest>,
  output: __S(3) as any as S.Schema<DescribeFraudsterResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFraudster",
}));

export type DescribeFraudsterRegistrationJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified fraudster registration job.
 */
export const describeFraudsterRegistrationJob: API.OperationMethod<
  DescribeFraudsterRegistrationJobRequest,
  DescribeFraudsterRegistrationJobResponse,
  DescribeFraudsterRegistrationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<DescribeFraudsterRegistrationJobRequest>,
  output: __S(29) as any as S.Schema<DescribeFraudsterRegistrationJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFraudsterRegistrationJob",
}));

export type DescribeSpeakerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified speaker.
 */
export const describeSpeaker: API.OperationMethod<
  DescribeSpeakerRequest,
  DescribeSpeakerResponse,
  DescribeSpeakerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<DescribeSpeakerRequest>,
  output: __S(32) as any as S.Schema<DescribeSpeakerResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSpeaker",
}));

export type DescribeSpeakerEnrollmentJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified speaker enrollment job.
 */
export const describeSpeakerEnrollmentJob: API.OperationMethod<
  DescribeSpeakerEnrollmentJobRequest,
  DescribeSpeakerEnrollmentJobResponse,
  DescribeSpeakerEnrollmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<DescribeSpeakerEnrollmentJobRequest>,
  output: __S(37) as any as S.Schema<DescribeSpeakerEnrollmentJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSpeakerEnrollmentJob",
}));

export type DescribeWatchlistError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified watchlist.
 */
export const describeWatchlist: API.OperationMethod<
  DescribeWatchlistRequest,
  DescribeWatchlistResponse,
  DescribeWatchlistError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<DescribeWatchlistRequest>,
  output: __S(39) as any as S.Schema<DescribeWatchlistResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWatchlist",
}));

export type DisassociateFraudsterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates the fraudsters from the watchlist specified. Voice ID always expects a
 * fraudster to be a part of at least one watchlist. If
 * you try to disassociate a fraudster from its only watchlist, a `ValidationException` is thrown.
 */
export const disassociateFraudster: API.OperationMethod<
  DisassociateFraudsterRequest,
  DisassociateFraudsterResponse,
  DisassociateFraudsterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<DisassociateFraudsterRequest>,
  output: __S(3) as any as S.Schema<DisassociateFraudsterResponse>,
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
  operationName: "DisassociateFraudster",
}));

export type EvaluateSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Evaluates a specified session based on audio data accumulated during a streaming
 * Amazon Connect Voice ID call.
 */
export const evaluateSession: API.OperationMethod<
  EvaluateSessionRequest,
  EvaluateSessionResponse,
  EvaluateSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<EvaluateSessionRequest>,
  output: __S(49) as any as S.Schema<EvaluateSessionResponse>,
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
  operationName: "EvaluateSession",
}));

export type ListDomainsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the domains in the Amazon Web Services account.
 */
export const listDomains: API.PaginatedOperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | HttpClient.HttpClient,
  DomainSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(50) as any as S.Schema<ListDomainsRequest>,
  output: __S(52) as any as S.Schema<ListDomainsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomains",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DomainSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFraudsterRegistrationJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the fraudster registration jobs in the domain with the given
 * `JobStatus`. If `JobStatus` is not provided, this lists all
 * fraudster registration jobs in the given domain.
 */
export const listFraudsterRegistrationJobs: API.PaginatedOperationMethod<
  ListFraudsterRegistrationJobsRequest,
  ListFraudsterRegistrationJobsResponse,
  ListFraudsterRegistrationJobsError,
  Credentials | HttpClient.HttpClient,
  FraudsterRegistrationJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(53) as any as S.Schema<ListFraudsterRegistrationJobsRequest>,
  output: __S(56) as any as S.Schema<ListFraudsterRegistrationJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFraudsterRegistrationJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "JobSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFraudstersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all fraudsters in a specified watchlist or domain.
 */
export const listFraudsters: API.PaginatedOperationMethod<
  ListFraudstersRequest,
  ListFraudstersResponse,
  ListFraudstersError,
  Credentials | HttpClient.HttpClient,
  FraudsterSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(57) as any as S.Schema<ListFraudstersRequest>,
  output: __S(59) as any as S.Schema<ListFraudstersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFraudsters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "FraudsterSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSpeakerEnrollmentJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the speaker enrollment jobs in the domain with the specified
 * `JobStatus`. If `JobStatus` is not provided, this lists all
 * jobs with all possible speaker enrollment job statuses.
 */
export const listSpeakerEnrollmentJobs: API.PaginatedOperationMethod<
  ListSpeakerEnrollmentJobsRequest,
  ListSpeakerEnrollmentJobsResponse,
  ListSpeakerEnrollmentJobsError,
  Credentials | HttpClient.HttpClient,
  SpeakerEnrollmentJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(60) as any as S.Schema<ListSpeakerEnrollmentJobsRequest>,
  output: __S(62) as any as S.Schema<ListSpeakerEnrollmentJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSpeakerEnrollmentJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "JobSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSpeakersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all speakers in a specified domain.
 */
export const listSpeakers: API.PaginatedOperationMethod<
  ListSpeakersRequest,
  ListSpeakersResponse,
  ListSpeakersError,
  Credentials | HttpClient.HttpClient,
  SpeakerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(63) as any as S.Schema<ListSpeakersRequest>,
  output: __S(65) as any as S.Schema<ListSpeakersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSpeakers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SpeakerSummaries",
    pageSize: "MaxResults",
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
 * Lists all tags associated with a specified Voice ID resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(67) as any as S.Schema<ListTagsForResourceResponse>,
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

export type ListWatchlistsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all watchlists in a specified domain.
 */
export const listWatchlists: API.PaginatedOperationMethod<
  ListWatchlistsRequest,
  ListWatchlistsResponse,
  ListWatchlistsError,
  Credentials | HttpClient.HttpClient,
  WatchlistSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(68) as any as S.Schema<ListWatchlistsRequest>,
  output: __S(70) as any as S.Schema<ListWatchlistsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWatchlists",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "WatchlistSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type OptOutSpeakerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or
 * not they already exist in Voice ID. If they don't yet exist, a new speaker is created
 * in an opted out state. If they already exist, their existing status is overridden and
 * they are opted out. Enrollment and evaluation authentication requests are rejected for
 * opted out speakers, and opted out speakers have no voice embeddings stored in
 * Voice ID.
 */
export const optOutSpeaker: API.OperationMethod<
  OptOutSpeakerRequest,
  OptOutSpeakerResponse,
  OptOutSpeakerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<OptOutSpeakerRequest>,
  output: __S(32) as any as S.Schema<OptOutSpeakerResponse>,
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
  operationName: "OptOutSpeaker",
}));

export type StartFraudsterRegistrationJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a new batch fraudster registration job using provided details.
 */
export const startFraudsterRegistrationJob: API.OperationMethod<
  StartFraudsterRegistrationJobRequest,
  StartFraudsterRegistrationJobResponse,
  StartFraudsterRegistrationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<StartFraudsterRegistrationJobRequest>,
  output: __S(29) as any as S.Schema<StartFraudsterRegistrationJobResponse>,
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
  operationName: "StartFraudsterRegistrationJob",
}));

export type StartSpeakerEnrollmentJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a new batch speaker enrollment job using specified details.
 */
export const startSpeakerEnrollmentJob: API.OperationMethod<
  StartSpeakerEnrollmentJobRequest,
  StartSpeakerEnrollmentJobResponse,
  StartSpeakerEnrollmentJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<StartSpeakerEnrollmentJobRequest>,
  output: __S(37) as any as S.Schema<StartSpeakerEnrollmentJobResponse>,
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
  operationName: "StartSpeakerEnrollmentJob",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tags a Voice ID resource with the provided list of tags.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<TagResourceRequest>,
  output: __S(16) as any as S.Schema<TagResourceResponse>,
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
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes specified tags from a specified Amazon Connect Voice ID resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<UntagResourceRequest>,
  output: __S(16) as any as S.Schema<UntagResourceResponse>,
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
  operationName: "UntagResource",
}));

export type UpdateDomainError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified domain. This API has clobber behavior, and clears and replaces
 * all attributes. If an optional field, such as 'Description' is not provided, it is
 * removed from the domain.
 */
export const updateDomain: API.OperationMethod<
  UpdateDomainRequest,
  UpdateDomainResponse,
  UpdateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<UpdateDomainRequest>,
  output: __S(11) as any as S.Schema<UpdateDomainResponse>,
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
  operationName: "UpdateDomain",
}));

export type UpdateWatchlistError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.
 */
export const updateWatchlist: API.OperationMethod<
  UpdateWatchlistRequest,
  UpdateWatchlistResponse,
  UpdateWatchlistError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<UpdateWatchlistRequest>,
  output: __S(14) as any as S.Schema<UpdateWatchlistResponse>,
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
  operationName: "UpdateWatchlist",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, WatchlistId: S.String, FraudsterId: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateFraudsterRequest",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.optional(S.String),
          GeneratedFraudsterId: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          WatchlistIds: S.optional(__S(1)),
        }),
      ).annotate({ identifier: "Fraudster" });
    case 3:
      return S.suspend(() => S.Struct({ Fraudster: S.optional(__S(2)) })).annotate({
        identifier: "AssociateFraudsterResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ KmsKeyId: S.String })).annotate({
        identifier: "ServerSideEncryptionConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ Key: SensitiveString, Value: SensitiveString })).annotate({
        identifier: "Tag",
      });
    case 6:
      return S.Array(__S(5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: SensitiveString,
          Description: S.optional(SensitiveString),
          ServerSideEncryptionConfiguration: __S(4),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(6)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDomainRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OldKmsKeyId: S.optional(S.String),
          UpdateStatus: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServerSideEncryptionUpdateDetails",
      });
    case 1:
      return S.suspend(() => S.Struct({ DefaultWatchlistId: S.String })).annotate({
        identifier: "WatchlistDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Description: S.optional(SensitiveString),
          DomainStatus: S.optional(S.String),
          ServerSideEncryptionConfiguration: S.optional(__S(4)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ServerSideEncryptionUpdateDetails: S.optional(__S(8)),
          WatchlistDetails: S.optional(__S(9)),
        }),
      ).annotate({ identifier: "Domain" });
    case 3:
      return S.suspend(() => S.Struct({ Domain: S.optional(__S(10)) })).annotate({
        identifier: "CreateDomainResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          Name: SensitiveString,
          Description: S.optional(SensitiveString),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateWatchlistRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.optional(S.String),
          WatchlistId: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Description: S.optional(SensitiveString),
          DefaultWatchlist: S.optional(S.Boolean),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Watchlist" });
    case 6:
      return S.suspend(() => S.Struct({ Watchlist: S.optional(__S(13)) })).annotate({
        identifier: "CreateWatchlistResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDomainRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteDomainResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, FraudsterId: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteFraudsterRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, SpeakerId: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteSpeakerRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, WatchlistId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWatchlistRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeDomainRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, FraudsterId: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeFraudsterRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeFraudsterRegistrationJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DuplicateRegistrationAction: S.optional(S.String),
          FraudsterSimilarityThreshold: S.optional(S.Number),
          WatchlistIds: S.optional(__S(1)),
        }),
      ).annotate({ identifier: "RegistrationConfig" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ S3Uri: S.String })).annotate({
        identifier: "InputDataConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ S3Uri: S.String, KmsKeyId: S.optional(S.String) }),
      ).annotate({ identifier: "OutputDataConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({ StatusCode: S.optional(S.Number), Message: S.optional(S.String) }),
      ).annotate({ identifier: "FailureDetails" });
    case 3:
      return S.suspend(() => S.Struct({ PercentComplete: S.optional(S.Number) })).annotate({
        identifier: "JobProgress",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(SensitiveString),
          JobId: S.optional(S.String),
          JobStatus: S.optional(S.String),
          DomainId: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          RegistrationConfig: S.optional(__S(23)),
          InputDataConfig: S.optional(__S(24)),
          OutputDataConfig: S.optional(__S(25)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureDetails: S.optional(__S(26)),
          JobProgress: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "FraudsterRegistrationJob" });
    case 5:
      return S.suspend(() => S.Struct({ Job: S.optional(__S(28)) })).annotate({
        identifier: "DescribeFraudsterRegistrationJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, SpeakerId: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeSpeakerRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.optional(S.String),
          CustomerSpeakerId: S.optional(SensitiveString),
          GeneratedSpeakerId: S.optional(S.String),
          Status: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastAccessedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Speaker" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Speaker: S.optional(__S(31)) })).annotate({
        identifier: "DescribeSpeakerResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSpeakerEnrollmentJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FraudDetectionAction: S.optional(S.String),
          RiskThreshold: S.optional(S.Number),
          WatchlistIds: S.optional(__S(1)),
        }),
      ).annotate({
        identifier: "EnrollmentJobFraudDetectionConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ExistingEnrollmentAction: S.optional(S.String),
          FraudDetectionConfig: S.optional(__S(34)),
        }),
      ).annotate({ identifier: "EnrollmentConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(SensitiveString),
          JobId: S.optional(S.String),
          JobStatus: S.optional(S.String),
          DomainId: S.optional(S.String),
          DataAccessRoleArn: S.optional(S.String),
          EnrollmentConfig: S.optional(__S(35)),
          InputDataConfig: S.optional(__S(24)),
          OutputDataConfig: S.optional(__S(25)),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureDetails: S.optional(__S(26)),
          JobProgress: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "SpeakerEnrollmentJob" });
    case 5:
      return S.suspend(() => S.Struct({ Job: S.optional(__S(36)) })).annotate({
        identifier: "DescribeSpeakerEnrollmentJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, WatchlistId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeWatchlistRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Watchlist: S.optional(__S(13)) })).annotate({
        identifier: "DescribeWatchlistResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, WatchlistId: S.String, FraudsterId: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateFraudsterRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, SessionNameOrId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "EvaluateSessionRequest" });
    case 2:
      return S.suspend(() => S.Struct({ AcceptanceThreshold: S.Number })).annotate({
        identifier: "AuthenticationConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AuthenticationResultId: S.optional(S.String),
          AudioAggregationStartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AudioAggregationEndedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CustomerSpeakerId: S.optional(SensitiveString),
          GeneratedSpeakerId: S.optional(S.String),
          Decision: S.optional(S.String),
          Score: S.optional(S.Number),
          Configuration: S.optional(__S(42)),
        }),
      ).annotate({ identifier: "AuthenticationResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({ RiskThreshold: S.optional(S.Number), WatchlistId: S.optional(S.String) }),
      ).annotate({
        identifier: "FraudDetectionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ RiskScore: S.Number, GeneratedFraudsterId: S.optional(S.String) }),
      ).annotate({ identifier: "KnownFraudsterRisk" });
    case 6:
      return S.suspend(() => S.Struct({ RiskScore: S.Number })).annotate({
        identifier: "VoiceSpoofingRisk",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ KnownFraudsterRisk: __S(45), VoiceSpoofingRisk: __S(46) }),
      ).annotate({ identifier: "FraudRiskDetails" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FraudDetectionResultId: S.optional(S.String),
          AudioAggregationStartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AudioAggregationEndedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Configuration: S.optional(__S(44)),
          Decision: S.optional(S.String),
          Reasons: S.optional(__S(1)),
          RiskDetails: S.optional(__S(47)),
        }),
      ).annotate({ identifier: "FraudDetectionResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.optional(S.String),
          SessionId: S.optional(S.String),
          SessionName: S.optional(S.String),
          StreamingStatus: S.optional(S.String),
          AuthenticationResult: S.optional(__S(43)),
          FraudDetectionResult: S.optional(__S(48)),
        }),
      ).annotate({ identifier: "EvaluateSessionResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDomainsRequest" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainSummaries: S.optional(__S(51)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDomainsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          JobStatus: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListFraudsterRegistrationJobsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(SensitiveString),
          JobId: S.optional(S.String),
          JobStatus: S.optional(S.String),
          DomainId: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureDetails: S.optional(__S(26)),
          JobProgress: S.optional(__S(27)),
        }),
      ).annotate({
        identifier: "FraudsterRegistrationJobSummary",
      });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JobSummaries: S.optional(__S(55)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFraudsterRegistrationJobsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          WatchlistId: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFraudstersRequest" });
    case 2:
      return S.Array(__S(2));
    case 3:
      return S.suspend(() =>
        S.Struct({
          FraudsterSummaries: S.optional(__S(58)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListFraudstersResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          JobStatus: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSpeakerEnrollmentJobsRequest",
      });
    case 5:
      return S.Array(__S(54));
    case 6:
      return S.suspend(() =>
        S.Struct({
          JobSummaries: S.optional(__S(61)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSpeakerEnrollmentJobsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSpeakersRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31));
    case 1:
      return S.suspend(() =>
        S.Struct({
          SpeakerSummaries: S.optional(__S(64)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListSpeakersResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(6)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWatchlistsRequest" });
    case 5:
      return S.Array(__S(13));
    case 6:
      return S.suspend(() =>
        S.Struct({
          WatchlistSummaries: S.optional(__S(69)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListWatchlistsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DomainId: S.String, SpeakerId: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "OptOutSpeakerRequest" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          JobName: S.optional(SensitiveString),
          DomainId: S.String,
          DataAccessRoleArn: S.String,
          RegistrationConfig: S.optional(__S(23)),
          InputDataConfig: __S(24),
          OutputDataConfig: __S(25),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartFraudsterRegistrationJobRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          JobName: S.optional(SensitiveString),
          DomainId: S.String,
          DataAccessRoleArn: S.String,
          EnrollmentConfig: S.optional(__S(35)),
          InputDataConfig: __S(24),
          OutputDataConfig: __S(25),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartSpeakerEnrollmentJobRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(6) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.Array(SensitiveString);
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(75) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          Name: SensitiveString,
          Description: S.optional(SensitiveString),
          ServerSideEncryptionConfiguration: __S(4),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateDomainRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          WatchlistId: S.String,
          Name: S.optional(SensitiveString),
          Description: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateWatchlistRequest" });
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
  }
}
