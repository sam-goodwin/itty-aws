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
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "EndUserMessaging",
  serviceShapeName: "EndUserMessaging",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "end-user-messaging" });
const ver = /*@__PURE__*/ T.ServiceVersion("2026-09-21");
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
              `https://end-user-messaging-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://end-user-messaging-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://end-user-messaging.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://end-user-messaging.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
    fieldList: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
        identifier: "ValidationExceptionFieldList",
      }),
    ),
  }) {}
export type BrandProfileName = string;
export type ClientToken = string | redacted.Redacted<string>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 1);
export interface CreateBrandProfileInput {
  brandProfileName: string;
  clientToken?: string | redacted.Redacted<string>;
  deletionProtectionEnabled?: boolean;
  tags?: Tag[];
}
const CreateBrandProfileInput = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CreateBrandProfileInput>;
export type BrandProfileIdOrArn = string;
export type AmazonResourceName = string;
export type Status = "ACTIVE" | "BLOCKED" | "PAUSED" | "CANCELLED" | "FAILED" | (string & {});
const Status = S.String;

export interface CreateBrandProfileOutput {
  brandProfileId: string;
  brandProfileArn: string;
  brandProfileName: string;
  status: Status;
  deletionProtectionEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  attributesCreated: number;
}
const CreateBrandProfileOutput = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateBrandProfileOutput>;
export type BrandProfileAttributeName = string | redacted.Redacted<string>;
export type BrandProfileAttributeType = "TEXT" | "IMAGE" | "DOCUMENT" | (string & {});
const BrandProfileAttributeType = S.String;

export type BrandProfileAttributeValue = string | redacted.Redacted<string>;
export type AttachmentBody = Uint8Array | redacted.Redacted<Uint8Array>;
export type BrandProfileAttributeDescription = string | redacted.Redacted<string>;
export type BrandProfileAttributeCategory = string;
export interface BrandProfileAttributeInput {
  attributeName: string | redacted.Redacted<string>;
  attributeType: BrandProfileAttributeType;
  attributeValue?: string | redacted.Redacted<string>;
  attachmentBody?: Uint8Array | redacted.Redacted<Uint8Array>;
  description?: string | redacted.Redacted<string>;
  category?: string;
}
const BrandProfileAttributeInput = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<BrandProfileAttributeInput>;
export type BrandProfileAttributeInputList = BrandProfileAttributeInput[];
const BrandProfileAttributeInputList = /*@__PURE__*/ __L.at(__c0, 5);
export interface CreateBrandProfileAttributesInput {
  brandProfileId: string;
  attributes: BrandProfileAttributeInput[];
  clientToken?: string | redacted.Redacted<string>;
}
const CreateBrandProfileAttributesInput = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateBrandProfileAttributesInput>;
export type MediaDownloadUrl = string | redacted.Redacted<string>;
export interface BrandProfileAttributeOutput {
  attributeName: string | redacted.Redacted<string>;
  attributeType: BrandProfileAttributeType;
  mediaDownloadUrl?: string | redacted.Redacted<string>;
}
const BrandProfileAttributeOutput = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BrandProfileAttributeOutput>;
export type BrandProfileAttributeOutputList = BrandProfileAttributeOutput[];
const BrandProfileAttributeOutputList = /*@__PURE__*/ __L.at(__c1, 0);
export interface CreateBrandProfileAttributesOutput {
  attributes: BrandProfileAttributeOutput[];
}
const CreateBrandProfileAttributesOutput = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateBrandProfileAttributesOutput>;
export type RegistrationIdOrArn = string;
export interface CreateBrandProfileFromRegistrationInput {
  registrationId: string;
  brandProfileName: string;
  smartMatch?: boolean;
  tags?: Tag[];
  clientToken?: string | redacted.Redacted<string>;
}
const CreateBrandProfileFromRegistrationInput = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateBrandProfileFromRegistrationInput>;
export type JobId = string;
export type JobResourceIdentifier = string;
export interface JobResult {
  jobId: string;
  resourceIdentifier: string;
}
const JobResult = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<JobResult>;
export type JobResults = JobResult[];
const JobResults = /*@__PURE__*/ __L.at(__c1, 4);
export interface CreateBrandProfileFromRegistrationOutput {
  results: JobResult[];
}
const CreateBrandProfileFromRegistrationOutput = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateBrandProfileFromRegistrationOutput>;
export type NotifyCodeConfigurationName = string;
export type CodeType = "NUMERIC" | "ALPHA" | "ALPHANUMERIC" | (string & {});
const CodeType = S.String;

export type CodeLength = number;
export type ValidityPeriodMinutes = number;
export type MaxVerificationAttempts = number;
export interface CodeConfigurationParameters {
  codeType?: CodeType;
  codeLength?: number;
  validityPeriodMinutes?: number;
  maxAttempts?: number;
}
const CodeConfigurationParameters = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CodeConfigurationParameters>;
export type InlineTemplateBody = string | redacted.Redacted<string>;
export type DestinationCountryParameterKey = string;
export type DestinationCountryParameterValue = string | redacted.Redacted<string>;
export type DestinationCountryParameters = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
const DestinationCountryParameters = /*@__PURE__*/ __L.at(__c1, 7);
export interface TextParameters {
  inlineTemplateBody?: string | redacted.Redacted<string>;
  destinationCountryParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const TextParameters = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<TextParameters>;
export type LanguageCode = string;
export type VoiceId = string;
export type VoiceMessageBodyTextType = "TEXT" | "SSML" | (string & {});
const VoiceMessageBodyTextType = S.String;

export interface VoiceParameters {
  inlineTemplateBody?: string | redacted.Redacted<string>;
  languageCode?: string;
  voiceId?: string;
  voiceMessageBodyTextType?: VoiceMessageBodyTextType;
}
const VoiceParameters = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<VoiceParameters>;
export type NotifyTemplateId = string;
export interface NotifyParameters {
  notifyTemplateId?: string;
  voiceId?: string;
}
const NotifyParameters = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<NotifyParameters>;
export type WhatsAppTemplateName = string;
export interface WhatsAppParameters {
  whatsAppTemplateName?: string;
  languageCode?: string;
}
const WhatsAppParameters = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<WhatsAppParameters>;
export interface ChannelParameters {
  text?: TextParameters;
  voice?: VoiceParameters;
  notify?: NotifyParameters;
  whatsApp?: WhatsAppParameters;
}
const ChannelParameters = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<ChannelParameters>;
export interface CreateNotifyCodeConfigurationInput {
  notifyCodeConfigurationName: string;
  codeConfigurationParameters?: CodeConfigurationParameters;
  channelParameters?: ChannelParameters;
  deletionProtectionEnabled?: boolean;
  clientToken?: string | redacted.Redacted<string>;
  tags?: Tag[];
}
const CreateNotifyCodeConfigurationInput = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateNotifyCodeConfigurationInput>;
export type NotifyCodeConfigurationId = string;
export interface NotifyCodeConfiguration {
  notifyCodeConfigurationId: string;
  notifyCodeConfigurationArn: string;
  notifyCodeConfigurationName: string;
  codeConfigurationParameters?: CodeConfigurationParameters;
  channelParameters?: ChannelParameters;
  deletionProtectionEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
const NotifyCodeConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<NotifyCodeConfiguration>;
export interface CreateNotifyCodeConfigurationOutput {
  notifyCodeConfiguration: NotifyCodeConfiguration;
}
const CreateNotifyCodeConfigurationOutput = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateNotifyCodeConfigurationOutput>;
export type RegistrationType = string;
export type RegistrationTypeList = string[];
const RegistrationTypeList = /*@__PURE__*/ __L.at(__c3, 0);
export interface CreateRegistrationsFromBrandProfileInput {
  brandProfileId: string;
  registrationTypes: string[];
  smartMatch?: boolean;
  clientToken?: string | redacted.Redacted<string>;
}
const CreateRegistrationsFromBrandProfileInput = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateRegistrationsFromBrandProfileInput>;
export interface CreateRegistrationsFromBrandProfileOutput {
  results: JobResult[];
}
const CreateRegistrationsFromBrandProfileOutput =
  CreateBrandProfileFromRegistrationOutput as any as S.Schema<CreateRegistrationsFromBrandProfileOutput>;
export interface DeleteBrandProfileInput {
  brandProfileId: string;
}
const DeleteBrandProfileInput = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DeleteBrandProfileInput>;
export interface DeleteBrandProfileOutput {
  brandProfileId: string;
  brandProfileArn: string;
}
const DeleteBrandProfileOutput = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DeleteBrandProfileOutput>;
export interface DeleteBrandProfileAttributeInput {
  brandProfileId: string;
  attributeName: string | redacted.Redacted<string>;
}
const DeleteBrandProfileAttributeInput = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<DeleteBrandProfileAttributeInput>;
export interface DeleteBrandProfileAttributeOutput {
  brandProfileId: string;
  attributeName: string | redacted.Redacted<string>;
}
const DeleteBrandProfileAttributeOutput = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DeleteBrandProfileAttributeOutput>;
export type NotifyCodeConfigurationIdOrArn = string;
export interface DeleteNotifyCodeConfigurationInput {
  notifyCodeConfigurationId: string;
}
const DeleteNotifyCodeConfigurationInput = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DeleteNotifyCodeConfigurationInput>;
export interface DeleteNotifyCodeConfigurationOutput {}
const DeleteNotifyCodeConfigurationOutput = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<DeleteNotifyCodeConfigurationOutput>;
export interface GetBrandProfileInput {
  brandProfileId: string;
}
const GetBrandProfileInput = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<GetBrandProfileInput>;
export interface GetBrandProfileOutput {
  brandProfileId: string;
  brandProfileArn: string;
  brandProfileName: string;
  status: Status;
  deletionProtectionEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
const GetBrandProfileOutput = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<GetBrandProfileOutput>;
export interface GetBrandProfileAttributeInput {
  brandProfileId: string;
  attributeName: string | redacted.Redacted<string>;
}
const GetBrandProfileAttributeInput = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetBrandProfileAttributeInput>;
export interface GetBrandProfileAttributeOutput {
  attributeName: string | redacted.Redacted<string>;
  attributeType: BrandProfileAttributeType;
  attributeValue?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  category?: string;
  mediaContentType?: string;
  mediaSizeBytes?: number;
  mediaDownloadUrl?: string | redacted.Redacted<string>;
  createdAt: Date;
  updatedAt: Date;
}
const GetBrandProfileAttributeOutput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<GetBrandProfileAttributeOutput>;
export interface GetJobInput {
  jobId: string;
}
const GetJobInput = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<GetJobInput>;
export type JobStatus = "SUCCESS" | "PROCESSING" | "FAILED" | (string & {});
const JobStatus = S.String;

export type JobOperationType = string;
export type JobErrorCode = string;
export type JobErrorMessage = string;
export type JobResourceType = "REGISTRATION" | "BRAND_PROFILE" | (string & {});
const JobResourceType = S.String;

export type JobResourceId = string;
export interface JobResource {
  resourceType: JobResourceType;
  resourceId: string;
  resourceArn: string;
}
const JobResource = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<JobResource>;
export type JobResourceList = JobResource[];
const JobResourceList = /*@__PURE__*/ __L.at(__c4, 6);
export interface Job {
  jobId: string;
  status: JobStatus;
  operationType: string;
  createdAt: Date;
  updatedAt: Date;
  brandProfileId?: string;
  errorCode?: string;
  errorMessage?: string;
  resources?: JobResource[];
}
const Job = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<Job>;
export interface GetNotifyCodeConfigurationInput {
  notifyCodeConfigurationId: string;
}
const GetNotifyCodeConfigurationInput = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<GetNotifyCodeConfigurationInput>;
export interface GetNotifyCodeConfigurationOutput {
  notifyCodeConfiguration: NotifyCodeConfiguration;
}
const GetNotifyCodeConfigurationOutput =
  CreateNotifyCodeConfigurationOutput as any as S.Schema<GetNotifyCodeConfigurationOutput>;
export type NextToken = string;
export type MaxResults = number;
export interface ListBrandProfileAttributesInput {
  brandProfileId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListBrandProfileAttributesInput = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ListBrandProfileAttributesInput>;
export interface BrandProfileAttributeSummary {
  attributeName: string | redacted.Redacted<string>;
  attributeType: BrandProfileAttributeType;
  description?: string | redacted.Redacted<string>;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}
const BrandProfileAttributeSummary = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<BrandProfileAttributeSummary>;
export type BrandProfileAttributeSummaryList = BrandProfileAttributeSummary[];
const BrandProfileAttributeSummaryList = /*@__PURE__*/ __L.at(__c5, 3);
export interface ListBrandProfileAttributesOutput {
  brandProfileAttributes: BrandProfileAttributeSummary[];
  nextToken?: string;
}
const ListBrandProfileAttributesOutput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ListBrandProfileAttributesOutput>;
export interface ListBrandProfilesInput {
  nextToken?: string;
  maxResults?: number;
}
const ListBrandProfilesInput = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<ListBrandProfilesInput>;
export interface BrandProfileInfo {
  brandProfileId: string;
  brandProfileArn: string;
  brandProfileName: string;
  status: Status;
  deletionProtectionEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
const BrandProfileInfo = GetBrandProfileOutput as any as S.Schema<BrandProfileInfo>;
export type BrandProfileInfoList = BrandProfileInfo[];
const BrandProfileInfoList = /*@__PURE__*/ __L.at(__c5, 6);
export interface ListBrandProfilesOutput {
  brandProfiles: BrandProfileInfo[];
  nextToken?: string;
}
const ListBrandProfilesOutput = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<ListBrandProfilesOutput>;
export interface ListJobsInput {
  maxResults?: number;
  nextToken?: string;
  status?: JobStatus;
  brandProfileId?: string;
  operationType?: string;
}
const ListJobsInput = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<ListJobsInput>;
export interface JobSummary {
  jobId: string;
  status: JobStatus;
  operationType: string;
  createdAt: Date;
  updatedAt: Date;
  brandProfileId?: string;
  errorCode?: string;
  errorMessage?: string;
  resources?: JobResource[];
}
const JobSummary = Job as any as S.Schema<JobSummary>;
export type JobSummaryList = JobSummary[];
const JobSummaryList = /*@__PURE__*/ __L.at(__c6, 1);
export interface ListJobsOutput {
  jobs: JobSummary[];
  nextToken?: string;
}
const ListJobsOutput = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<ListJobsOutput>;
export interface ListNotifyCodeConfigurationsInput {
  maxResults?: number;
  nextToken?: string;
}
const ListNotifyCodeConfigurationsInput = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ListNotifyCodeConfigurationsInput>;
export type NotifyCodeConfigurationList = NotifyCodeConfiguration[];
const NotifyCodeConfigurationList = /*@__PURE__*/ __L.at(__c6, 4);
export interface ListNotifyCodeConfigurationsOutput {
  notifyCodeConfigurations: NotifyCodeConfiguration[];
  nextToken?: string;
}
const ListNotifyCodeConfigurationsOutput = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<ListNotifyCodeConfigurationsOutput>;
export interface ListRegistrationsFromBrandProfileInput {
  brandProfileId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListRegistrationsFromBrandProfileInput = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ListRegistrationsFromBrandProfileInput>;
export type RegistrationId = string;
export interface RegistrationAssociationSummary {
  registrationId: string;
  registrationType: string;
  createdAt: Date;
  smartMatchUsed: boolean;
}
const RegistrationAssociationSummary = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<RegistrationAssociationSummary>;
export type RegistrationAssociationSummaryList = RegistrationAssociationSummary[];
const RegistrationAssociationSummaryList = /*@__PURE__*/ __L.at(__c7, 0);
export interface ListRegistrationsFromBrandProfileOutput {
  registrationAssociations: RegistrationAssociationSummary[];
  nextToken?: string;
}
const ListRegistrationsFromBrandProfileOutput = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<ListRegistrationsFromBrandProfileOutput>;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags?: Tag[];
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ListTagsForResourceOutput>;
export type NotifyChannel = "TEXT" | "VOICE" | "WHATSAPP" | (string & {});
const NotifyChannel = S.String;

export type DestinationIdentity = string | redacted.Redacted<string>;
export type OriginationIdentity = string;
export type ConfigurationSetName = string;
export type ContextKey = string | redacted.Redacted<string>;
export type ContextValue = string | redacted.Redacted<string>;
export type ContextMap = { [key: string]: string | redacted.Redacted<string> | undefined };
const ContextMap = DestinationCountryParameters as any as S.Schema<ContextMap>;
export type ReferenceId = string;
export interface SendNotifyCodeVerificationInput {
  channel: NotifyChannel;
  destinationIdentity: string | redacted.Redacted<string>;
  originationIdentity: string;
  notifyCodeConfiguration?: string;
  overrideChannelParameters?: ChannelParameters;
  overrideCodeConfigurationParameters?: CodeConfigurationParameters;
  configurationSetName?: string;
  context?: { [key: string]: string | redacted.Redacted<string> | undefined };
  referenceId?: string;
}
const SendNotifyCodeVerificationInput = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<SendNotifyCodeVerificationInput>;
export type VerificationId = string;
export type MessageId = string;
export interface SendNotifyCodeVerificationOutput {
  verificationId: string;
  messageId: string;
}
const SendNotifyCodeVerificationOutput = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<SendNotifyCodeVerificationOutput>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
const TagKeyList = RegistrationTypeList as any as S.Schema<TagKeyList>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = TagResourceOutput as any as S.Schema<UntagResourceOutput>;
export interface UpdateBrandProfileInput {
  brandProfileId: string;
  brandProfileName?: string;
  deletionProtectionEnabled?: boolean;
}
const UpdateBrandProfileInput = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<UpdateBrandProfileInput>;
export interface UpdateBrandProfileOutput {
  brandProfileId: string;
  brandProfileArn: string;
  brandProfileName: string;
  status: Status;
  deletionProtectionEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
const UpdateBrandProfileOutput = GetBrandProfileOutput as any as S.Schema<UpdateBrandProfileOutput>;
export interface UpdateBrandProfileAttributeInput {
  brandProfileId: string;
  attributeName: string | redacted.Redacted<string>;
  attributeValue?: string | redacted.Redacted<string>;
  attachmentBody?: Uint8Array;
  description?: string | redacted.Redacted<string>;
  category?: string;
}
const UpdateBrandProfileAttributeInput = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<UpdateBrandProfileAttributeInput>;
export interface UpdateBrandProfileAttributeOutput {
  attributeName: string | redacted.Redacted<string>;
  attributeType: BrandProfileAttributeType;
  attributeValue?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  category?: string;
  mediaContentType?: string;
  mediaSizeBytes?: number;
  createdAt: Date;
  updatedAt: Date;
}
const UpdateBrandProfileAttributeOutput = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<UpdateBrandProfileAttributeOutput>;
export type OnAttributeConflict = "REPLACE" | "PRESERVE" | (string & {});
const OnAttributeConflict = S.String;

export interface UpdateBrandProfileFromRegistrationInput {
  brandProfileId: string;
  registrationId: string;
  smartMatch?: boolean;
  onAttributeConflict?: OnAttributeConflict;
  clientToken?: string | redacted.Redacted<string>;
}
const UpdateBrandProfileFromRegistrationInput = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<UpdateBrandProfileFromRegistrationInput>;
export interface UpdateBrandProfileFromRegistrationOutput {
  results: JobResult[];
}
const UpdateBrandProfileFromRegistrationOutput =
  CreateBrandProfileFromRegistrationOutput as any as S.Schema<UpdateBrandProfileFromRegistrationOutput>;
export interface UpdateCodeConfigurationParameters {
  codeType?: CodeType;
  codeLength?: number;
  validityPeriodMinutes?: number;
  maxAttempts?: number;
}
const UpdateCodeConfigurationParameters =
  CodeConfigurationParameters as any as S.Schema<UpdateCodeConfigurationParameters>;
export type UpdateInlineTemplateBody = string | redacted.Redacted<string>;
export type UpdateDestinationCountryParameters = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
export interface UpdateTextParameters {
  inlineTemplateBody?: string | redacted.Redacted<string>;
  destinationCountryParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export type UpdateLanguageCode = string;
export type UpdateVoiceId = string;
export interface UpdateVoiceParameters {
  inlineTemplateBody?: string | redacted.Redacted<string>;
  languageCode?: string;
  voiceId?: string;
  voiceMessageBodyTextType?: VoiceMessageBodyTextType;
}
export type UpdateNotifyTemplateId = string;
export interface UpdateNotifyParameters {
  notifyTemplateId?: string;
  voiceId?: string;
}
export type UpdateWhatsAppTemplateName = string;
export interface UpdateWhatsAppParameters {
  whatsAppTemplateName?: string;
  languageCode?: string;
}
export interface UpdateChannelParameters {
  text?: UpdateTextParameters;
  voice?: UpdateVoiceParameters;
  notify?: UpdateNotifyParameters;
  whatsApp?: UpdateWhatsAppParameters;
}
const UpdateChannelParameters = ChannelParameters as any as S.Schema<UpdateChannelParameters>;
export interface UpdateNotifyCodeConfigurationInput {
  notifyCodeConfigurationId: string;
  notifyCodeConfigurationName?: string;
  codeConfigurationParameters?: UpdateCodeConfigurationParameters;
  channelParameters?: UpdateChannelParameters;
  deletionProtectionEnabled?: boolean;
}
const UpdateNotifyCodeConfigurationInput = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<UpdateNotifyCodeConfigurationInput>;
export interface UpdateNotifyCodeConfigurationOutput {
  notifyCodeConfiguration: NotifyCodeConfiguration;
}
const UpdateNotifyCodeConfigurationOutput =
  CreateNotifyCodeConfigurationOutput as any as S.Schema<UpdateNotifyCodeConfigurationOutput>;
export type RegistrationIdList = string[];
const RegistrationIdList = RegistrationTypeList as any as S.Schema<RegistrationIdList>;
export interface UpdateRegistrationsFromBrandProfileInput {
  brandProfileId: string;
  registrationIds: string[];
  smartMatch?: boolean;
  onAttributeConflict?: OnAttributeConflict;
  clientToken?: string | redacted.Redacted<string>;
}
const UpdateRegistrationsFromBrandProfileInput = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<UpdateRegistrationsFromBrandProfileInput>;
export interface UpdateRegistrationsFromBrandProfileOutput {
  results: JobResult[];
}
const UpdateRegistrationsFromBrandProfileOutput =
  CreateBrandProfileFromRegistrationOutput as any as S.Schema<UpdateRegistrationsFromBrandProfileOutput>;
export type VerificationCode = string | redacted.Redacted<string>;
export interface ValidateNotifyCodeVerificationInput {
  destinationIdentity: string | redacted.Redacted<string>;
  referenceId?: string;
  code: string | redacted.Redacted<string>;
}
const ValidateNotifyCodeVerificationInput = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<ValidateNotifyCodeVerificationInput>;
export type VerificationStatus = "VALID" | "INVALID" | (string & {});
const VerificationStatus = S.String;

export interface ValidateNotifyCodeVerificationOutput {
  status: VerificationStatus;
}
const ValidateNotifyCodeVerificationOutput = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ValidateNotifyCodeVerificationOutput>;
export interface ValidationExceptionField {
  path: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c9, 2);
export type CreateBrandProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a brand profile. A brand profile is a lightweight container that holds your brand identity information as flexible attributes. After you create a brand profile, use the CreateBrandProfileAttributes operation to add company information, addresses, compliance documents, and logos.
 */
export const createBrandProfile: API.OperationMethod<
  CreateBrandProfileInput,
  CreateBrandProfileOutput,
  CreateBrandProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBrandProfileInput,
  output: CreateBrandProfileOutput,
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
  operationName: "CreateBrandProfile",
}));

export type CreateBrandProfileAttributesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates up to 10 attributes for a brand profile in a single request. For attributes of type IMAGE or DOCUMENT, the response includes a presigned Amazon S3 URL that you use to upload the media. This operation is atomic: either all of the attributes are created, or none of them are.
 */
export const createBrandProfileAttributes: API.OperationMethod<
  CreateBrandProfileAttributesInput,
  CreateBrandProfileAttributesOutput,
  CreateBrandProfileAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBrandProfileAttributesInput,
  output: CreateBrandProfileAttributesOutput,
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
  operationName: "CreateBrandProfileAttributes",
}));

export type CreateBrandProfileFromRegistrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a brand profile and populates its attributes from an existing registration. This operation runs asynchronously. Use the GetJob operation to track its progress.
 */
export const createBrandProfileFromRegistration: API.OperationMethod<
  CreateBrandProfileFromRegistrationInput,
  CreateBrandProfileFromRegistrationOutput,
  CreateBrandProfileFromRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBrandProfileFromRegistrationInput,
  output: CreateBrandProfileFromRegistrationOutput,
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
  operationName: "CreateBrandProfileFromRegistration",
}));

export type CreateNotifyCodeConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a notify code configuration. A notify code configuration is a reusable policy that defines how one-time passcodes are generated and rendered, including the code type, length, validity period, maximum number of attempts, and channel templates.
 */
export const createNotifyCodeConfiguration: API.OperationMethod<
  CreateNotifyCodeConfigurationInput,
  CreateNotifyCodeConfigurationOutput,
  CreateNotifyCodeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNotifyCodeConfigurationInput,
  output: CreateNotifyCodeConfigurationOutput,
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
  operationName: "CreateNotifyCodeConfiguration",
}));

export type CreateRegistrationsFromBrandProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates one or more registrations in the DRAFT state and prefills their fields from the attributes of a brand profile. This operation runs asynchronously. Use the GetJob operation to track its progress.
 */
export const createRegistrationsFromBrandProfile: API.OperationMethod<
  CreateRegistrationsFromBrandProfileInput,
  CreateRegistrationsFromBrandProfileOutput,
  CreateRegistrationsFromBrandProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRegistrationsFromBrandProfileInput,
  output: CreateRegistrationsFromBrandProfileOutput,
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
  operationName: "CreateRegistrationsFromBrandProfile",
}));

export type DeleteBrandProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a brand profile. This operation also deletes the attributes of the profile and any associated media. The request fails if deletion protection is enabled for the profile.
 */
export const deleteBrandProfile: API.OperationMethod<
  DeleteBrandProfileInput,
  DeleteBrandProfileOutput,
  DeleteBrandProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBrandProfileInput,
  output: DeleteBrandProfileOutput,
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
  operationName: "DeleteBrandProfile",
}));

export type DeleteBrandProfileAttributeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a brand profile attribute. If the attribute stores media, this operation also deletes the associated media.
 */
export const deleteBrandProfileAttribute: API.OperationMethod<
  DeleteBrandProfileAttributeInput,
  DeleteBrandProfileAttributeOutput,
  DeleteBrandProfileAttributeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBrandProfileAttributeInput,
  output: DeleteBrandProfileAttributeOutput,
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
  operationName: "DeleteBrandProfileAttribute",
}));

export type DeleteNotifyCodeConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a notify code configuration. Verifications that are already in progress are not affected, because they capture the policy at the time that the passcode was sent.
 */
export const deleteNotifyCodeConfiguration: API.OperationMethod<
  DeleteNotifyCodeConfigurationInput,
  DeleteNotifyCodeConfigurationOutput,
  DeleteNotifyCodeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNotifyCodeConfigurationInput,
  output: DeleteNotifyCodeConfigurationOutput,
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
  operationName: "DeleteNotifyCodeConfiguration",
}));

export type GetBrandProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the metadata for a brand profile, including its name, status, deletion protection setting, and timestamps. To retrieve the attributes of the profile, use the ListBrandProfileAttributes operation.
 */
export const getBrandProfile: API.OperationMethod<
  GetBrandProfileInput,
  GetBrandProfileOutput,
  GetBrandProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBrandProfileInput,
  output: GetBrandProfileOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBrandProfile",
}));

export type GetBrandProfileAttributeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a single brand profile attribute.
 */
export const getBrandProfileAttribute: API.OperationMethod<
  GetBrandProfileAttributeInput,
  GetBrandProfileAttributeOutput,
  GetBrandProfileAttributeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBrandProfileAttributeInput,
  output: GetBrandProfileAttributeOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBrandProfileAttribute",
}));

export type GetJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the current state of an asynchronous job, including its status and any resources that it created or updated.
 */
export const getJob: API.OperationMethod<
  GetJobInput,
  Job,
  GetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetJobInput,
  output: Job,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJob",
}));

export type GetNotifyCodeConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a notify code configuration.
 */
export const getNotifyCodeConfiguration: API.OperationMethod<
  GetNotifyCodeConfigurationInput,
  GetNotifyCodeConfigurationOutput,
  GetNotifyCodeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNotifyCodeConfigurationInput,
  output: GetNotifyCodeConfigurationOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNotifyCodeConfiguration",
}));

export type ListBrandProfileAttributesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of the attributes for a brand profile.
 */
export const listBrandProfileAttributes: API.PaginatedOperationMethod<
  ListBrandProfileAttributesInput,
  ListBrandProfileAttributesOutput,
  ListBrandProfileAttributesError,
  Credentials | HttpClient.HttpClient,
  BrandProfileAttributeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBrandProfileAttributesInput,
  output: ListBrandProfileAttributesOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBrandProfileAttributes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "brandProfileAttributes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBrandProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of the brand profiles in your account. Use the nextToken parameter to retrieve additional results.
 */
export const listBrandProfiles: API.PaginatedOperationMethod<
  ListBrandProfilesInput,
  ListBrandProfilesOutput,
  ListBrandProfilesError,
  Credentials | HttpClient.HttpClient,
  BrandProfileInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBrandProfilesInput,
  output: ListBrandProfilesOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBrandProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "brandProfiles",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of the asynchronous jobs in your account. You can filter the results by status, brand profile, or operation type.
 */
export const listJobs: API.PaginatedOperationMethod<
  ListJobsInput,
  ListJobsOutput,
  ListJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobsInput,
  output: ListJobsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNotifyCodeConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of the notify code configurations in your account.
 */
export const listNotifyCodeConfigurations: API.PaginatedOperationMethod<
  ListNotifyCodeConfigurationsInput,
  ListNotifyCodeConfigurationsOutput,
  ListNotifyCodeConfigurationsError,
  Credentials | HttpClient.HttpClient,
  NotifyCodeConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListNotifyCodeConfigurationsInput,
  output: ListNotifyCodeConfigurationsOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotifyCodeConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "notifyCodeConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRegistrationsFromBrandProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a paginated list of the registrations that were created from a brand profile through the synchronization operations.
 */
export const listRegistrationsFromBrandProfile: API.PaginatedOperationMethod<
  ListRegistrationsFromBrandProfileInput,
  ListRegistrationsFromBrandProfileOutput,
  ListRegistrationsFromBrandProfileError,
  Credentials | HttpClient.HttpClient,
  RegistrationAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRegistrationsFromBrandProfileInput,
  output: ListRegistrationsFromBrandProfileOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegistrationsFromBrandProfile",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "registrationAssociations",
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
 * Retrieves the tags that are associated with a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
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

export type SendNotifyCodeVerificationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Generates a one-time passcode and delivers it to a recipient over the requested channel. The passcode policy is captured from the referenced notify code configuration at the time of the request, so later updates to the configuration do not affect verifications that are already in progress.
 */
export const sendNotifyCodeVerification: API.OperationMethod<
  SendNotifyCodeVerificationInput,
  SendNotifyCodeVerificationOutput,
  SendNotifyCodeVerificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendNotifyCodeVerificationInput,
  output: SendNotifyCodeVerificationOutput,
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
  operationName: "SendNotifyCodeVerification",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites the tags on a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceInput,
  output: TagResourceOutput,
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
 * Removes the specified tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceOutput,
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

export type UpdateBrandProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the name or the deletion protection setting of a brand profile. To change the information that is stored in the profile, use the brand profile attribute operations.
 */
export const updateBrandProfile: API.OperationMethod<
  UpdateBrandProfileInput,
  UpdateBrandProfileOutput,
  UpdateBrandProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBrandProfileInput,
  output: UpdateBrandProfileOutput,
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
  operationName: "UpdateBrandProfile",
}));

export type UpdateBrandProfileAttributeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the value, description, or category of an existing brand profile attribute.
 */
export const updateBrandProfileAttribute: API.OperationMethod<
  UpdateBrandProfileAttributeInput,
  UpdateBrandProfileAttributeOutput,
  UpdateBrandProfileAttributeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBrandProfileAttributeInput,
  output: UpdateBrandProfileAttributeOutput,
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
  operationName: "UpdateBrandProfileAttribute",
}));

export type UpdateBrandProfileFromRegistrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports or refreshes the attributes of an existing brand profile from an existing registration. This operation runs asynchronously. Use the GetJob operation to track its progress.
 */
export const updateBrandProfileFromRegistration: API.OperationMethod<
  UpdateBrandProfileFromRegistrationInput,
  UpdateBrandProfileFromRegistrationOutput,
  UpdateBrandProfileFromRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBrandProfileFromRegistrationInput,
  output: UpdateBrandProfileFromRegistrationOutput,
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
  operationName: "UpdateBrandProfileFromRegistration",
}));

export type UpdateNotifyCodeConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the mutable fields of a notify code configuration. Only the fields that you supply are changed. For the template and language fields, supplying an empty value clears the currently stored value.
 */
export const updateNotifyCodeConfiguration: API.OperationMethod<
  UpdateNotifyCodeConfigurationInput,
  UpdateNotifyCodeConfigurationOutput,
  UpdateNotifyCodeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNotifyCodeConfigurationInput,
  output: UpdateNotifyCodeConfigurationOutput,
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
  operationName: "UpdateNotifyCodeConfiguration",
}));

export type UpdateRegistrationsFromBrandProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Repushes the attributes of a brand profile into existing DRAFT registrations. This operation runs asynchronously. Use the GetJob operation to track its progress.
 */
export const updateRegistrationsFromBrandProfile: API.OperationMethod<
  UpdateRegistrationsFromBrandProfileInput,
  UpdateRegistrationsFromBrandProfileOutput,
  UpdateRegistrationsFromBrandProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRegistrationsFromBrandProfileInput,
  output: UpdateRegistrationsFromBrandProfileOutput,
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
  operationName: "UpdateRegistrationsFromBrandProfile",
}));

export type ValidateNotifyCodeVerificationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Validates a one-time passcode that a recipient submitted. Validation succeeds when the passcode matches, the validity period has not elapsed, and the maximum number of attempts has not been exceeded.
 */
export const validateNotifyCodeVerification: API.OperationMethod<
  ValidateNotifyCodeVerificationInput,
  ValidateNotifyCodeVerificationOutput,
  ValidateNotifyCodeVerificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateNotifyCodeVerificationInput,
  output: ValidateNotifyCodeVerificationOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateNotifyCodeVerification",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          brandProfileName: S.String,
          clientToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
          deletionProtectionEnabled: S.optional(S.Boolean),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/brand-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBrandProfileInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String,
          brandProfileArn: S.String,
          brandProfileName: S.String,
          status: Status,
          deletionProtectionEnabled: S.Boolean,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          attributesCreated: S.Number,
        }),
      ).annotate({ identifier: "CreateBrandProfileOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          attributeName: SensitiveString,
          attributeType: BrandProfileAttributeType,
          attributeValue: S.optional(SensitiveString),
          attachmentBody: S.optional(SensitiveBlob),
          description: S.optional(SensitiveString),
          category: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BrandProfileAttributeInput",
      });
    case 5:
      return S.Array(BrandProfileAttributeInput);
    case 6:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          attributes: BrandProfileAttributeInputList,
          clientToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/brand-profiles/{brandProfileId}/attributes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateBrandProfileAttributesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          attributeName: SensitiveString,
          attributeType: BrandProfileAttributeType,
          mediaDownloadUrl: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "BrandProfileAttributeOutput",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BrandProfileAttributeOutput);
    case 1:
      return S.suspend(() => S.Struct({ attributes: BrandProfileAttributeOutputList })).annotate({
        identifier: "CreateBrandProfileAttributesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registrationId: S.String,
          brandProfileName: S.String,
          smartMatch: S.optional(S.Boolean),
          tags: S.optional(TagList),
          clientToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/brand-profiles/create-from-registration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateBrandProfileFromRegistrationInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ jobId: S.String, resourceIdentifier: S.String })).annotate({
        identifier: "JobResult",
      });
    case 4:
      return S.Array(JobResult);
    case 5:
      return S.suspend(() => S.Struct({ results: JobResults })).annotate({
        identifier: "CreateBrandProfileFromRegistrationOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          codeType: S.optional(CodeType),
          codeLength: S.optional(S.Number),
          validityPeriodMinutes: S.optional(S.Number),
          maxAttempts: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CodeConfigurationParameters",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          inlineTemplateBody: S.optional(SensitiveString),
          destinationCountryParameters: S.optional(DestinationCountryParameters),
        }),
      ).annotate({ identifier: "TextParameters" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          inlineTemplateBody: S.optional(SensitiveString),
          languageCode: S.optional(S.String),
          voiceId: S.optional(S.String),
          voiceMessageBodyTextType: S.optional(VoiceMessageBodyTextType),
        }),
      ).annotate({ identifier: "VoiceParameters" });
    case 2:
      return S.suspend(() =>
        S.Struct({ notifyTemplateId: S.optional(S.String), voiceId: S.optional(S.String) }),
      ).annotate({ identifier: "NotifyParameters" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          whatsAppTemplateName: S.optional(S.String),
          languageCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "WhatsAppParameters" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          text: S.optional(TextParameters),
          voice: S.optional(VoiceParameters),
          notify: S.optional(NotifyParameters),
          whatsApp: S.optional(WhatsAppParameters),
        }),
      ).annotate({ identifier: "ChannelParameters" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          notifyCodeConfigurationName: S.String,
          codeConfigurationParameters: S.optional(CodeConfigurationParameters),
          channelParameters: S.optional(ChannelParameters),
          deletionProtectionEnabled: S.optional(S.Boolean),
          clientToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/notify-code-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateNotifyCodeConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          notifyCodeConfigurationId: S.String,
          notifyCodeConfigurationArn: S.String,
          notifyCodeConfigurationName: S.String,
          codeConfigurationParameters: S.optional(CodeConfigurationParameters),
          channelParameters: S.optional(ChannelParameters),
          deletionProtectionEnabled: S.Boolean,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "NotifyCodeConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({ notifyCodeConfiguration: NotifyCodeConfiguration }),
      ).annotate({
        identifier: "CreateNotifyCodeConfigurationOutput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          registrationTypes: RegistrationTypeList,
          smartMatch: S.optional(S.Boolean),
          clientToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/brand-profiles/{brandProfileId}/create-registrations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRegistrationsFromBrandProfileInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/brand-profiles/{brandProfileId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBrandProfileInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ brandProfileId: S.String, brandProfileArn: S.String }),
      ).annotate({ identifier: "DeleteBrandProfileOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          attributeName: SensitiveString.pipe(T.HttpLabel("attributeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/brand-profiles/{brandProfileId}/attributes/{attributeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteBrandProfileAttributeInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ brandProfileId: S.String, attributeName: SensitiveString }),
      ).annotate({
        identifier: "DeleteBrandProfileAttributeOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          notifyCodeConfigurationId: S.String.pipe(T.HttpLabel("notifyCodeConfigurationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/notify-code-configurations/{notifyCodeConfigurationId+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteNotifyCodeConfigurationInput",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteNotifyCodeConfigurationOutput",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/brand-profiles/{brandProfileId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBrandProfileInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String,
          brandProfileArn: S.String,
          brandProfileName: S.String,
          status: Status,
          deletionProtectionEnabled: S.Boolean,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GetBrandProfileOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          attributeName: SensitiveString.pipe(T.HttpLabel("attributeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/brand-profiles/{brandProfileId}/attributes/{attributeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBrandProfileAttributeInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          attributeName: SensitiveString,
          attributeType: BrandProfileAttributeType,
          attributeValue: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          category: S.optional(S.String),
          mediaContentType: S.optional(S.String),
          mediaSizeBytes: S.optional(S.Number),
          mediaDownloadUrl: S.optional(SensitiveString),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "GetBrandProfileAttributeOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ jobId: S.String.pipe(T.HttpLabel("jobId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/jobs/{jobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetJobInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceType: JobResourceType, resourceId: S.String, resourceArn: S.String }),
      ).annotate({ identifier: "JobResource" });
    case 6:
      return S.Array(JobResource);
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: JobStatus,
          operationType: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          brandProfileId: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
          resources: S.optional(JobResourceList),
        }),
      ).annotate({ identifier: "Job" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          notifyCodeConfigurationId: S.String.pipe(T.HttpLabel("notifyCodeConfigurationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/notify-code-configurations/{notifyCodeConfigurationId+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNotifyCodeConfigurationInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/brand-profiles/{brandProfileId}/attributes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBrandProfileAttributesInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          attributeName: SensitiveString,
          attributeType: BrandProfileAttributeType,
          description: S.optional(SensitiveString),
          category: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "BrandProfileAttributeSummary",
      });
    case 3:
      return S.Array(BrandProfileAttributeSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          brandProfileAttributes: BrandProfileAttributeSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBrandProfileAttributesOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/brand-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListBrandProfilesInput" });
    case 6:
      return S.Array(BrandProfileInfo);
    case 7:
      return S.suspend(() =>
        S.Struct({ brandProfiles: BrandProfileInfoList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBrandProfilesOutput" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(JobStatus).pipe(T.HttpQuery("status")),
          brandProfileId: S.optional(S.String).pipe(T.HttpQuery("brandProfileId")),
          operationType: S.optional(S.String).pipe(T.HttpQuery("operationType")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/v1/jobs" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListJobsInput" });
    case 1:
      return S.Array(JobSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ jobs: JobSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListJobsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/notify-code-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNotifyCodeConfigurationsInput",
      });
    case 4:
      return S.Array(NotifyCodeConfiguration);
    case 5:
      return S.suspend(() =>
        S.Struct({
          notifyCodeConfigurations: NotifyCodeConfigurationList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNotifyCodeConfigurationsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/brand-profiles/{brandProfileId}/registrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRegistrationsFromBrandProfileInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          registrationId: S.String,
          registrationType: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          smartMatchUsed: S.Boolean,
        }),
      ).annotate({
        identifier: "RegistrationAssociationSummary",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RegistrationAssociationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          registrationAssociations: RegistrationAssociationSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRegistrationsFromBrandProfileOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          channel: NotifyChannel,
          destinationIdentity: SensitiveString,
          originationIdentity: S.String,
          notifyCodeConfiguration: S.optional(S.String),
          overrideChannelParameters: S.optional(ChannelParameters),
          overrideCodeConfigurationParameters: S.optional(CodeConfigurationParameters),
          configurationSetName: S.optional(S.String),
          context: S.optional(ContextMap),
          referenceId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/notify-code-verifications/send" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendNotifyCodeVerificationInput",
      });
    case 5:
      return S.suspend(() => S.Struct({ verificationId: S.String, messageId: S.String })).annotate({
        identifier: "SendNotifyCodeVerificationOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagList }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceOutput",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          brandProfileName: S.optional(S.String),
          deletionProtectionEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/brand-profiles/{brandProfileId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateBrandProfileInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          attributeName: SensitiveString.pipe(T.HttpLabel("attributeName")),
          attributeValue: S.optional(SensitiveString),
          attachmentBody: S.optional(T.Blob),
          description: S.optional(SensitiveString),
          category: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/brand-profiles/{brandProfileId}/attributes/{attributeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateBrandProfileAttributeInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          attributeName: SensitiveString,
          attributeType: BrandProfileAttributeType,
          attributeValue: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          category: S.optional(S.String),
          mediaContentType: S.optional(S.String),
          mediaSizeBytes: S.optional(S.Number),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "UpdateBrandProfileAttributeOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          registrationId: S.String,
          smartMatch: S.optional(S.Boolean),
          onAttributeConflict: S.optional(OnAttributeConflict),
          clientToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/brand-profiles/{brandProfileId}/update-from-registration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateBrandProfileFromRegistrationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          notifyCodeConfigurationId: S.String.pipe(T.HttpLabel("notifyCodeConfigurationId")),
          notifyCodeConfigurationName: S.optional(S.String),
          codeConfigurationParameters: S.optional(UpdateCodeConfigurationParameters),
          channelParameters: S.optional(UpdateChannelParameters),
          deletionProtectionEnabled: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/notify-code-configurations/{notifyCodeConfigurationId+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNotifyCodeConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          brandProfileId: S.String.pipe(T.HttpLabel("brandProfileId")),
          registrationIds: RegistrationIdList,
          smartMatch: S.optional(S.Boolean),
          onAttributeConflict: S.optional(OnAttributeConflict),
          clientToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/brand-profiles/{brandProfileId}/update-registrations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRegistrationsFromBrandProfileInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          destinationIdentity: SensitiveString,
          referenceId: S.optional(S.String),
          code: SensitiveString,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/notify-code-verifications/validate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ValidateNotifyCodeVerificationInput",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ status: VerificationStatus })).annotate({
        identifier: "ValidateNotifyCodeVerificationOutput",
      });
    case 1:
      return S.suspend(() => S.Struct({ path: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 2:
      return S.Array(ValidationExceptionField);
  }
}
