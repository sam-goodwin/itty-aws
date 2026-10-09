import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as stream from "effect/Stream";
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
  sdkId: "ConnectHealth",
  serviceShapeName: "ConnectHealth",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "health-agent" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-01-29");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://health-agent-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://health-agent.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
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
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
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
export type DomainId = string;
export type SubscriptionId = string;
export interface ActivateSubscriptionInput {
  domainId: string;
  subscriptionId: string;
}
export type SubscriptionArn = string;
export type SubscriptionStatus = "ACTIVE" | "INACTIVE" | "DELETED" | (string & {});
export interface SubscriptionDescription {
  domainId: string;
  subscriptionId: string;
  arn: string;
  status: SubscriptionStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
  activatedAt?: Date;
  deactivatedAt?: Date;
}
export interface ActivateSubscriptionOutput {
  subscription?: SubscriptionDescription;
}
export type DomainName = string;
export type KmsKeyArn = string;
export interface CreateWebAppConfiguration {
  ehrRole: string;
  idcInstanceId: string;
  idcRegion: string;
}
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateDomainInput {
  name: string;
  kmsKeyArn?: string;
  webAppSetupConfiguration?: CreateWebAppConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type DomainArn = string;
export type EncryptionType = "AWS_OWNED_KEY" | "CUSTOMER_MANAGED_KEY" | (string & {});
export interface EncryptionContext {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
}
export type DomainStatus = "ACTIVE" | "DELETING" | "DELETED" | (string & {});
export type WebAppUrl = string;
export interface WebAppConfiguration {
  ehrRole: string;
  idcApplicationId: string;
  idcRegion: string;
}
export interface CreateDomainOutput {
  domainId: string;
  arn: string;
  name: string;
  kmsKeyArn?: string;
  encryptionContext?: EncryptionContext;
  status: DomainStatus;
  webAppUrl?: string;
  webAppConfiguration?: WebAppConfiguration;
  createdAt: Date;
}
export interface CreateSubscriptionInput {
  domainId: string;
}
export interface CreateSubscriptionOutput {
  domainId: string;
  subscriptionId: string;
  arn: string;
  status: SubscriptionStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
  activatedAt?: Date;
  deactivatedAt?: Date;
}
export interface DeactivateSubscriptionInput {
  domainId: string;
  subscriptionId: string;
}
export interface DeactivateSubscriptionOutput {
  subscription?: SubscriptionDescription;
}
export interface DeleteDomainInput {
  domainId: string;
}
export interface DeleteDomainOutput {
  domainId: string;
  arn: string;
  status: DomainStatus;
}
export interface GetDomainInput {
  domainId: string;
}
export interface GetDomainOutput {
  domainId: string;
  arn: string;
  name: string;
  kmsKeyArn?: string;
  encryptionContext?: EncryptionContext;
  status: DomainStatus;
  webAppUrl?: string;
  webAppConfiguration?: WebAppConfiguration;
  createdAt: Date;
  tags?: { [key: string]: string | undefined };
}
export type ScribeSessionId = string;
export interface GetMedicalScribeListeningSessionInput {
  sessionId: string;
  domainId: string;
  subscriptionId: string;
}
export type MedicalScribeLanguageCode = "en-US" | "multi" | (string & {});
export type MedicalScribeMediaSampleRateHertz = number;
export type MedicalScribeMediaEncoding = "pcm" | "flac" | (string & {});
export type MedicalScribeChannelId = number;
export type MedicalScribeParticipantRole = "PATIENT" | "CLINICIAN" | (string & {});
export interface MedicalScribeChannelDefinition {
  channelId: number;
  participantRole: MedicalScribeParticipantRole;
}
export type MedicalScribeChannelDefinitions = MedicalScribeChannelDefinition[];
export type S3Uri = string;
export type ManagedNoteTemplate =
  | "HISTORY_AND_PHYSICAL"
  | "GIRPP"
  | "DAP"
  | "SIRP"
  | "BIRP"
  | "BEHAVIORAL_SOAP"
  | "PHYSICAL_SOAP"
  | (string & {});
export interface ManagedTemplateResponse {
  templateType?: ManagedNoteTemplate;
}
export type CustomTemplateBase =
  | "HISTORY_AND_PHYSICAL"
  | "GIRPP"
  | "DAP"
  | "SIRP"
  | "BIRP"
  | "BEHAVIORAL_SOAP"
  | (string & {});
export interface CustomTemplateResponse {
  templateType?: CustomTemplateBase;
}
export type NoteTemplateSettingsResponse =
  | { managedTemplate: ManagedTemplateResponse; customTemplate?: never }
  | { managedTemplate?: never; customTemplate: CustomTemplateResponse };
export interface ClinicalNoteGenerationSettingsResponse {
  noteTemplateSettings?: NoteTemplateSettingsResponse;
}
export interface MedicalScribePostStreamActionSettingsResponse {
  outputS3Uri: string;
  clinicalNoteGenerationSettings: ClinicalNoteGenerationSettingsResponse;
}
export type Uri = string;
export type PostStreamArtifactGenerationStatus =
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED"
  | (string & {});
export type ErrorMessage = string;
export interface ArtifactDetails {
  outputLocation?: string;
  status?: PostStreamArtifactGenerationStatus;
  failureReason?: string;
}
export interface ClinicalNoteGenerationResult {
  noteResult?: ArtifactDetails;
  transcriptResult?: ArtifactDetails;
  afterVisitSummaryResult?: ArtifactDetails;
}
export interface MedicalScribePostStreamActionsResult {
  clinicalNoteGenerationResult?: ClinicalNoteGenerationResult;
}
export type NonNullBoolean = boolean;
export type MedicalScribeStreamStatus =
  | "IN_PROGRESS"
  | "PAUSED"
  | "FAILED"
  | "COMPLETED"
  | (string & {});
export interface MedicalScribeListeningSessionDetails {
  sessionId?: string;
  domainId?: string;
  subscriptionId?: string;
  languageCode?: MedicalScribeLanguageCode;
  mediaSampleRateHertz?: number;
  mediaEncoding?: MedicalScribeMediaEncoding;
  channelDefinitions?: MedicalScribeChannelDefinition[];
  postStreamActionSettings?: MedicalScribePostStreamActionSettingsResponse;
  postStreamActionResult?: MedicalScribePostStreamActionsResult;
  encounterContextProvided?: boolean;
  streamStatus?: MedicalScribeStreamStatus;
  streamCreationTime?: Date;
  streamEndTime?: Date;
}
export interface GetMedicalScribeListeningSessionOutput {
  medicalScribeListeningSessionDetails?: MedicalScribeListeningSessionDetails;
}
export type JobId = string;
export interface GetPatientInsightsJobRequest {
  domainId: string;
  jobId: string;
}
export type JobArn = string;
export type JobStatus = "SUBMITTED" | "IN_PROGRESS" | "FAILED" | "SUCCEEDED" | (string & {});
export interface InsightsOutput {
  uri: string;
}
export type NonEmptyString = string;
export type SensitiveNonEmptyString = string | redacted.Redacted<string>;
export type SensitiveIsoDateString = string | redacted.Redacted<string>;
export type Pronouns = "HE_HIM" | "SHE_HER" | "THEY_THEM" | (string & {});
export interface PatientInsightsPatientContext {
  patientId: string | redacted.Redacted<string>;
  dateOfBirth?: string | redacted.Redacted<string>;
  pronouns?: Pronouns;
}
export type InsightsType = "PRE_VISIT" | (string & {});
export interface InsightsContext {
  insightsType: InsightsType;
}
export interface PatientInsightsEncounterContext {
  encounterReason: string | redacted.Redacted<string>;
}
export type ProviderRole = "CLINICIAN" | (string & {});
export type Specialty = "PRIMARY_CARE" | (string & {});
export interface UserContext {
  role: ProviderRole;
  userId: string | redacted.Redacted<string>;
  specialty?: Specialty;
}
export interface FHIRServer {
  fhirEndpoint: string;
  oauthToken?: string | redacted.Redacted<string>;
}
export interface S3Source {
  uri: string;
}
export type S3Sources = S3Source[];
export interface InputDataConfig {
  fhirServer?: FHIRServer;
  s3Sources?: S3Source[];
}
export interface OutputDataConfig {
  s3OutputPath: string;
}
export interface GetPatientInsightsJobResponse {
  jobId: string;
  jobArn: string;
  jobStatus: JobStatus;
  creationTime?: Date;
  updatedTime?: Date;
  insightsOutput?: InsightsOutput;
  statusDetails?: string;
  patientContext: PatientInsightsPatientContext;
  insightsContext: InsightsContext;
  encounterContext: PatientInsightsEncounterContext;
  userContext: UserContext;
  inputDataConfig: InputDataConfig;
  outputDataConfig: OutputDataConfig;
}
export interface GetSubscriptionInput {
  domainId: string;
  subscriptionId: string;
}
export interface GetSubscriptionOutput {
  subscription?: SubscriptionDescription;
}
export interface ListDomainsInput {
  status?: DomainStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface DomainSummary {
  domainId: string;
  arn: string;
  name: string;
  status: DomainStatus;
  createdAt: Date;
}
export type DomainSummaryList = DomainSummary[];
export interface ListDomainsOutput {
  domains: DomainSummary[];
  nextToken?: string;
}
export interface ListSubscriptionsInput {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export type SubscriptionList = SubscriptionDescription[];
export interface ListSubscriptionsOutput {
  subscriptions: SubscriptionDescription[];
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
export type AudioChunk = Uint8Array;
export interface MedicalScribeAudioEvent {
  audioChunk: Uint8Array;
}
export interface MedicalScribeBinaryAudioEvent {
  audioChunk: Uint8Array;
}
export type MedicalScribeSessionControlEventType = "END_OF_SESSION" | (string & {});
export interface MedicalScribeSessionControlEvent {
  type?: MedicalScribeSessionControlEventType;
}
export interface ManagedTemplate {
  templateType: ManagedNoteTemplate;
}
export type SensitiveSectionHeaderString = string | redacted.Redacted<string>;
export type SensitiveMarkdownString = string | redacted.Redacted<string>;
export interface TemplateSectionInstruction {
  sectionHeader: string | redacted.Redacted<string>;
  sectionInstruction: string | redacted.Redacted<string>;
}
export type TemplateInstructions = TemplateSectionInstruction[];
export interface CustomTemplate {
  templateType: CustomTemplateBase;
  templateInstructions: TemplateSectionInstruction[];
}
export type NoteTemplateSettings =
  | { managedTemplate: ManagedTemplate; customTemplate?: never }
  | { managedTemplate?: never; customTemplate: CustomTemplate };
export interface ClinicalNoteGenerationSettings {
  noteTemplateSettings: NoteTemplateSettings;
}
export interface MedicalScribePostStreamActionSettings {
  outputS3Uri: string;
  clinicalNoteGenerationSettings: ClinicalNoteGenerationSettings;
}
export interface EncounterContext {
  unstructuredContext?: string | redacted.Redacted<string>;
}
export interface MedicalScribeConfigurationEvent {
  postStreamActionSettings: MedicalScribePostStreamActionSettings;
  channelDefinitions?: MedicalScribeChannelDefinition[];
  encounterContext?: EncounterContext;
}
export type MedicalScribeInputStream =
  | {
      audioEvent: MedicalScribeAudioEvent;
      binaryAudioEvent?: never;
      sessionControlEvent?: never;
      configurationEvent?: never;
    }
  | {
      audioEvent?: never;
      binaryAudioEvent: MedicalScribeBinaryAudioEvent;
      sessionControlEvent?: never;
      configurationEvent?: never;
    }
  | {
      audioEvent?: never;
      binaryAudioEvent?: never;
      sessionControlEvent: MedicalScribeSessionControlEvent;
      configurationEvent?: never;
    }
  | {
      audioEvent?: never;
      binaryAudioEvent?: never;
      sessionControlEvent?: never;
      configurationEvent: MedicalScribeConfigurationEvent;
    };
export interface StartMedicalScribeListeningSessionInput {
  sessionId: string;
  domainId: string;
  subscriptionId: string;
  languageCode: MedicalScribeLanguageCode;
  mediaSampleRateHertz: number;
  mediaEncoding: MedicalScribeMediaEncoding;
  inputStream?: stream.Stream<MedicalScribeInputStream, Error, never>;
}
export type RequestId = string;
export type AudioOffset = number;
export interface MedicalScribeTranscriptSegment {
  segmentId?: string;
  audioBeginOffset?: number;
  audioEndOffset?: number;
  isPartial?: boolean;
  channelId?: string;
  content?: string;
}
export interface MedicalScribeTranscriptEvent {
  transcriptSegment?: MedicalScribeTranscriptSegment;
}
export type MedicalScribeOutputStream =
  | {
      transcriptEvent: MedicalScribeTranscriptEvent;
      internalFailureException?: never;
      validationException?: never;
    }
  | {
      transcriptEvent?: never;
      internalFailureException: InternalServerException;
      validationException?: never;
    }
  | {
      transcriptEvent?: never;
      internalFailureException?: never;
      validationException: ValidationException;
    };
export interface StartMedicalScribeListeningSessionOutput {
  sessionId?: string;
  domainId?: string;
  subscriptionId?: string;
  requestId?: string;
  languageCode?: MedicalScribeLanguageCode;
  mediaSampleRateHertz?: number;
  mediaEncoding?: MedicalScribeMediaEncoding;
  responseStream?: stream.Stream<MedicalScribeOutputStream, Error, never>;
}
export interface StartPatientInsightsJobRequest {
  domainId: string;
  patientContext: PatientInsightsPatientContext;
  insightsContext: InsightsContext;
  encounterContext: PatientInsightsEncounterContext;
  userContext: UserContext;
  inputDataConfig: InputDataConfig;
  outputDataConfig: OutputDataConfig;
  clientToken?: string;
}
export interface StartPatientInsightsJobResponse {
  jobArn: string;
  jobId: string;
  creationTime?: Date;
}
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export type ActivateSubscriptionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Activates a Subscription to enable billing for a user.
 */
export const activateSubscription: API.OperationMethod<
  ActivateSubscriptionInput,
  ActivateSubscriptionOutput,
  ActivateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<ActivateSubscriptionInput>,
  output: __S(2, __c0, 2) as any as S.Schema<ActivateSubscriptionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ActivateSubscription",
}));

export type CreateDomainError = ServiceQuotaExceededException | CommonErrors;
/**
 * Creates a new Domain for managing HealthAgent resources.
 */
export const createDomain: API.OperationMethod<
  CreateDomainInput,
  CreateDomainOutput,
  CreateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5, __c0, 5) as any as S.Schema<CreateDomainInput>,
  output: __S(8, __c1, 0) as any as S.Schema<CreateDomainOutput>,
  errors: [ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomain",
}));

export type CreateSubscriptionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Subscription within a Domain for billing and user management.
 */
export const createSubscription: API.OperationMethod<
  CreateSubscriptionInput,
  CreateSubscriptionOutput,
  CreateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<CreateSubscriptionInput>,
  output: __S(1, __c0, 1) as any as S.Schema<CreateSubscriptionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSubscription",
}));

export type DeactivateSubscriptionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deactivates a Subscription to stop billing for a user.
 */
export const deactivateSubscription: API.OperationMethod<
  DeactivateSubscriptionInput,
  DeactivateSubscriptionOutput,
  DeactivateSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<DeactivateSubscriptionInput>,
  output: __S(2, __c0, 2) as any as S.Schema<DeactivateSubscriptionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeactivateSubscription",
}));

export type DeleteDomainError = ResourceNotFoundException | CommonErrors;
/**
 * Deletes a Domain and all associated resources.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainInput,
  DeleteDomainOutput,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<DeleteDomainInput>,
  output: __S(12, __c1, 4) as any as S.Schema<DeleteDomainOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomain",
}));

export type GetDomainError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves information about a Domain.
 */
export const getDomain: API.OperationMethod<
  GetDomainInput,
  GetDomainOutput,
  GetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13, __c1, 5) as any as S.Schema<GetDomainInput>,
  output: __S(14, __c1, 6) as any as S.Schema<GetDomainOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomain",
}));

export type GetMedicalScribeListeningSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves details about an existing Medical Scribe listening session
 */
export const getMedicalScribeListeningSession: API.OperationMethod<
  GetMedicalScribeListeningSessionInput,
  GetMedicalScribeListeningSessionOutput,
  GetMedicalScribeListeningSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<GetMedicalScribeListeningSessionInput>,
  output: __S(26, __c3, 2) as any as S.Schema<GetMedicalScribeListeningSessionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMedicalScribeListeningSession",
  endpointHostPrefix: "streaming.",
}));

export type GetPatientInsightsJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get details of a started patient insights job.
 */
export const getPatientInsightsJob: API.OperationMethod<
  GetPatientInsightsJobRequest,
  GetPatientInsightsJobResponse,
  GetPatientInsightsJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<GetPatientInsightsJobRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<GetPatientInsightsJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPatientInsightsJob",
  endpointHostPrefix: "runtime.",
}));

export type GetSubscriptionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a Subscription.
 */
export const getSubscription: API.OperationMethod<
  GetSubscriptionInput,
  GetSubscriptionOutput,
  GetSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<GetSubscriptionInput>,
  output: __S(39, __c4, 7) as any as S.Schema<GetSubscriptionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSubscription",
}));

export type ListDomainsError = CommonErrors;
/**
 * Lists Domains for a given account.
 */
export const listDomains: API.PaginatedOperationMethod<
  ListDomainsInput,
  ListDomainsOutput,
  ListDomainsError,
  Credentials | HttpClient.HttpClient,
  DomainSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(40, __c5, 0) as any as S.Schema<ListDomainsInput>,
  output: __S(43, __c5, 3) as any as S.Schema<ListDomainsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomains",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "domains",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSubscriptionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Subscriptions within a Domain.
 */
export const listSubscriptions: API.PaginatedOperationMethod<
  ListSubscriptionsInput,
  ListSubscriptionsOutput,
  ListSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  SubscriptionDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<ListSubscriptionsInput>,
  output: __S(46, __c5, 6) as any as S.Schema<ListSubscriptionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubscriptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "subscriptions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = CommonErrors;
/**
 * Lists the tags associated with the specified resource
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(48, __c6, 0) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartMedicalScribeListeningSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a new Medical Scribe listening session for real-time audio transcription
 */
export const startMedicalScribeListeningSession: API.OperationMethod<
  StartMedicalScribeListeningSessionInput,
  StartMedicalScribeListeningSessionOutput,
  StartMedicalScribeListeningSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<StartMedicalScribeListeningSessionInput>,
  output: __S(66, __c8, 2) as any as S.Schema<StartMedicalScribeListeningSessionOutput>,
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
  operationName: "StartMedicalScribeListeningSession",
  endpointHostPrefix: "streaming.",
}));

export type StartPatientInsightsJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a new patient insights job.
 */
export const startPatientInsightsJob: API.OperationMethod<
  StartPatientInsightsJobRequest,
  StartPatientInsightsJobResponse,
  StartPatientInsightsJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67, __c8, 3) as any as S.Schema<StartPatientInsightsJobRequest>,
  output: __S(68, __c8, 4) as any as S.Schema<StartPatientInsightsJobResponse>,
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
  operationName: "StartPatientInsightsJob",
  endpointHostPrefix: "runtime.",
}));

export type TagResourceError = CommonErrors;
/**
 * Associates the specified tags with the specified resource
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<TagResourceInput>,
  output: __S(70, __c8, 6) as any as S.Schema<TagResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = CommonErrors;
/**
 * Removes the specified tags from the specified resource
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<UntagResourceInput>,
  output: __S(70, __c8, 6) as any as S.Schema<UntagResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          subscriptionId: S.String.pipe(T.HttpLabel("subscriptionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{domainId}/subscriptions/{subscriptionId}/activate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ActivateSubscriptionInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          subscriptionId: S.String,
          arn: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          activatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deactivatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SubscriptionDescription" });
    case 2:
      return S.suspend(() => S.Struct({ subscription: S.optional(__S(1, __c0, 1)) })).annotate({
        identifier: "ActivateSubscriptionOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ehrRole: S.String, idcInstanceId: S.String, idcRegion: S.String }),
      ).annotate({
        identifier: "CreateWebAppConfiguration",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          kmsKeyArn: S.optional(S.String),
          webAppSetupConfiguration: S.optional(__S(3, __c0, 3)),
          tags: S.optional(__S(4, __c0, 4)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/domain" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDomainInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ encryptionType: S.String, kmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "EncryptionContext" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ehrRole: S.String, idcApplicationId: S.String, idcRegion: S.String }),
      ).annotate({ identifier: "WebAppConfiguration" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          arn: S.String,
          name: S.String,
          kmsKeyArn: S.optional(S.String),
          encryptionContext: S.optional(__S(6, __c0, 6)),
          status: S.String,
          webAppUrl: S.optional(S.String),
          webAppConfiguration: S.optional(__S(7, __c0, 7)),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CreateDomainOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ domainId: S.String.pipe(T.HttpLabel("domainId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/subscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSubscriptionInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          subscriptionId: S.String.pipe(T.HttpLabel("subscriptionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{domainId}/subscriptions/{subscriptionId}/deactivate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeactivateSubscriptionInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ domainId: S.String.pipe(T.HttpLabel("domainId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domain/{domainId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDomainInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ domainId: S.String, arn: S.String, status: S.String }),
      ).annotate({ identifier: "DeleteDomainOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ domainId: S.String.pipe(T.HttpLabel("domainId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/domain/{domainId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDomainInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          arn: S.String,
          name: S.String,
          kmsKeyArn: S.optional(S.String),
          encryptionContext: S.optional(__S(6, __c0, 6)),
          status: S.String,
          webAppUrl: S.optional(S.String),
          webAppConfiguration: S.optional(__S(7, __c0, 7)),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          tags: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "GetDomainOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          subscriptionId: S.String.pipe(T.HttpLabel("subscriptionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/medical-scribe-stream/domain/{domainId}/subscription/{subscriptionId}/session/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMedicalScribeListeningSessionInput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ channelId: S.Number, participantRole: S.String })).annotate(
        {
          identifier: "MedicalScribeChannelDefinition",
        },
      );
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() => S.Struct({ templateType: S.optional(S.String) })).annotate({
        identifier: "ManagedTemplateResponse",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ managedTemplate: __S(18, __c2, 2) }),
        /*@__PURE__*/ S.Struct({ customTemplate: __S(18, __c2, 2) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({ noteTemplateSettings: S.optional(__S(19, __c2, 3)) }),
      ).annotate({
        identifier: "ClinicalNoteGenerationSettingsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          outputS3Uri: S.String,
          clinicalNoteGenerationSettings: __S(20, __c2, 4),
        }),
      ).annotate({
        identifier: "MedicalScribePostStreamActionSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          outputLocation: S.optional(S.String),
          status: S.optional(S.String),
          failureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ArtifactDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          noteResult: S.optional(__S(22, __c2, 6)),
          transcriptResult: S.optional(__S(22, __c2, 6)),
          afterVisitSummaryResult: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({
        identifier: "ClinicalNoteGenerationResult",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ clinicalNoteGenerationResult: S.optional(__S(23, __c2, 7)) }),
      ).annotate({
        identifier: "MedicalScribePostStreamActionsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          domainId: S.optional(S.String),
          subscriptionId: S.optional(S.String),
          languageCode: S.optional(S.String),
          mediaSampleRateHertz: S.optional(S.Number),
          mediaEncoding: S.optional(S.String),
          channelDefinitions: S.optional(__S(17, __c2, 1)),
          postStreamActionSettings: S.optional(__S(21, __c2, 5)),
          postStreamActionResult: S.optional(__S(24, __c3, 0)),
          encounterContextProvided: S.optional(S.Boolean),
          streamStatus: S.optional(S.String),
          streamCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          streamEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "MedicalScribeListeningSessionDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          medicalScribeListeningSessionDetails: S.optional(__S(25, __c3, 1)),
        }),
      ).annotate({
        identifier: "GetMedicalScribeListeningSessionOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domain/{domainId}/patient-insights-job/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPatientInsightsJobRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ uri: S.String })).annotate({
        identifier: "InsightsOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          patientId: SensitiveString,
          dateOfBirth: S.optional(SensitiveString),
          pronouns: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PatientInsightsPatientContext",
      });
    case 6:
      return S.suspend(() => S.Struct({ insightsType: S.String })).annotate({
        identifier: "InsightsContext",
      });
    case 7:
      return S.suspend(() => S.Struct({ encounterReason: SensitiveString })).annotate({
        identifier: "PatientInsightsEncounterContext",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ role: S.String, userId: SensitiveString, specialty: S.optional(S.String) }),
      ).annotate({ identifier: "UserContext" });
    case 1:
      return S.suspend(() =>
        S.Struct({ fhirEndpoint: S.String, oauthToken: S.optional(SensitiveString) }),
      ).annotate({ identifier: "FHIRServer" });
    case 2:
      return S.Array(__S(28, __c3, 4));
    case 3:
      return S.suspend(() =>
        S.Struct({
          fhirServer: S.optional(__S(33, __c4, 1)),
          s3Sources: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({ identifier: "InputDataConfig" });
    case 4:
      return S.suspend(() => S.Struct({ s3OutputPath: S.String })).annotate({
        identifier: "OutputDataConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          jobArn: S.String,
          jobStatus: S.String,
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          insightsOutput: S.optional(__S(28, __c3, 4)),
          statusDetails: S.optional(S.String),
          patientContext: __S(29, __c3, 5),
          insightsContext: __S(30, __c3, 6),
          encounterContext: __S(31, __c3, 7),
          userContext: __S(32, __c4, 0),
          inputDataConfig: __S(35, __c4, 3),
          outputDataConfig: __S(36, __c4, 4),
        }),
      ).annotate({
        identifier: "GetPatientInsightsJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          subscriptionId: S.String.pipe(T.HttpLabel("subscriptionId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{domainId}/subscriptions/{subscriptionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSubscriptionInput" });
    case 7:
      return S.suspend(() => S.Struct({ subscription: S.optional(__S(1, __c0, 1)) })).annotate({
        identifier: "GetSubscriptionOutput",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/domain" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDomainsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          arn: S.String,
          name: S.String,
          status: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DomainSummary" });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ domains: __S(42, __c5, 2), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDomainsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{domainId}/subscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSubscriptionsInput" });
    case 5:
      return S.Array(__S(1, __c0, 1));
    case 6:
      return S.suspend(() =>
        S.Struct({ subscriptions: __S(45, __c5, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSubscriptionsOutput" });
    case 7:
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
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(4, __c0, 4)) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 1:
      return S.suspend(() => S.Struct({ audioChunk: T.Blob })).annotate({
        identifier: "MedicalScribeAudioEvent",
      });
    case 2:
      return S.suspend(() => S.Struct({ audioChunk: T.Blob.pipe(T.EventPayload()) })).annotate({
        identifier: "MedicalScribeBinaryAudioEvent",
      });
    case 3:
      return S.suspend(() => S.Struct({ type: S.optional(S.String) })).annotate({
        identifier: "MedicalScribeSessionControlEvent",
      });
    case 4:
      return S.suspend(() => S.Struct({ templateType: S.String })).annotate({
        identifier: "ManagedTemplate",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ sectionHeader: SensitiveString, sectionInstruction: SensitiveString }),
      ).annotate({
        identifier: "TemplateSectionInstruction",
      });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ templateType: S.String, templateInstructions: __S(54, __c6, 6) }),
      ).annotate({ identifier: "CustomTemplate" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ managedTemplate: __S(52, __c6, 4) }),
        /*@__PURE__*/ S.Struct({ customTemplate: __S(55, __c6, 7) }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ noteTemplateSettings: __S(56, __c7, 0) })).annotate({
        identifier: "ClinicalNoteGenerationSettings",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          outputS3Uri: S.String,
          clinicalNoteGenerationSettings: __S(57, __c7, 1),
        }),
      ).annotate({
        identifier: "MedicalScribePostStreamActionSettings",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ unstructuredContext: S.optional(SensitiveString) }),
      ).annotate({ identifier: "EncounterContext" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          postStreamActionSettings: __S(58, __c7, 2),
          channelDefinitions: S.optional(__S(17, __c2, 1)),
          encounterContext: S.optional(__S(59, __c7, 3)),
        }),
      ).annotate({
        identifier: "MedicalScribeConfigurationEvent",
      });
    case 5:
      return T.InputEventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ audioEvent: __S(49, __c6, 1) }),
          /*@__PURE__*/ S.Struct({ binaryAudioEvent: __S(50, __c6, 2) }),
          /*@__PURE__*/ S.Struct({ sessionControlEvent: __S(51, __c6, 3) }),
          /*@__PURE__*/ S.Struct({ configurationEvent: __S(60, __c7, 4) }),
        ]),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String.pipe(T.HttpHeader("x-amzn-medscribe-session-id")),
          domainId: S.String.pipe(T.HttpHeader("x-amzn-medscribe-domain-id")),
          subscriptionId: S.String.pipe(T.HttpHeader("x-amzn-medscribe-subscription-id")),
          languageCode: S.String.pipe(T.HttpHeader("x-amzn-medscribe-language-code")),
          mediaSampleRateHertz: S.Number.pipe(T.HttpHeader("x-amzn-medscribe-sample-rate")),
          mediaEncoding: S.String.pipe(T.HttpHeader("x-amzn-medscribe-media-encoding")),
          inputStream: S.optional(__S(61, __c7, 5)).pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/medical-scribe-stream/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartMedicalScribeListeningSessionInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          segmentId: S.optional(S.String),
          audioBeginOffset: S.optional(S.Number),
          audioEndOffset: S.optional(S.Number),
          isPartial: S.optional(S.Boolean),
          channelId: S.optional(S.String),
          content: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MedicalScribeTranscriptSegment",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ transcriptSegment: S.optional(__S(63, __c7, 7)) }),
      ).annotate({
        identifier: "MedicalScribeTranscriptEvent",
      });
    case 1:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ transcriptEvent: __S(64, __c8, 0) }),
          /*@__PURE__*/ S.Struct({
            internalFailureException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
        ]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-medscribe-session-id")),
          domainId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-medscribe-domain-id")),
          subscriptionId: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-medscribe-subscription-id"),
          ),
          requestId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-request-id")),
          languageCode: S.optional(S.String).pipe(T.HttpHeader("x-amzn-medscribe-language-code")),
          mediaSampleRateHertz: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-medscribe-sample-rate"),
          ),
          mediaEncoding: S.optional(S.String).pipe(T.HttpHeader("x-amzn-medscribe-media-encoding")),
          responseStream: S.optional(__S(65, __c8, 1)).pipe(T.HttpPayload()),
        }),
      ).annotate({
        identifier: "StartMedicalScribeListeningSessionOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          patientContext: __S(29, __c3, 5),
          insightsContext: __S(30, __c3, 6),
          encounterContext: __S(31, __c3, 7),
          userContext: __S(32, __c4, 0),
          inputDataConfig: __S(35, __c4, 3),
          outputDataConfig: __S(36, __c4, 4),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domain/{domainId}/patient-insights-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartPatientInsightsJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.String,
          jobId: S.String,
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "StartPatientInsightsJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(4, __c0, 4),
        }).pipe(
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
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(71, __c8, 7).pipe(T.HttpQuery("tagKeys")),
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
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
