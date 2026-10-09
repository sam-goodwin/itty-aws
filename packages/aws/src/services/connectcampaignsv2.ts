import * as API from "@distilled.cloud/core/api";
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
  sdkId: "ConnectCampaignsV2",
  serviceShapeName: "AmazonConnectCampaignServiceV2",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "connect-campaigns" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-04-23");
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
              `https://connect-campaigns-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://connect-campaigns-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://connect-campaigns.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://connect-campaigns.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class InvalidCampaignStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidCampaignStateException>()(
    "InvalidCampaignStateException",
    {
      state: S.String,
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InvalidStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidStateException>()(
    "InvalidStateException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      xAmzErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type CampaignName = string;
export type InstanceId = string;
export type Capacity = number;
export type QueueId = string;
export type BandwidthAllocation = number;
export interface ProgressiveConfig {
  bandwidthAllocation: number;
}
const ProgressiveConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bandwidthAllocation: S.Number }),
).annotate({ identifier: "ProgressiveConfig" }) as any as S.Schema<ProgressiveConfig>;
export type TargetRate = number;
export type ConnectionStartPoint = string;
export type EvaluationWindow = string;
export interface AbandonmentRatePacingConfig {
  targetRate: number;
  connectionStartPoint: string;
  connectionThresholdSeconds: number;
  evaluationWindow: string;
}
const AbandonmentRatePacingConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    targetRate: S.Number,
    connectionStartPoint: S.String,
    connectionThresholdSeconds: S.Number,
    evaluationWindow: S.String,
  }),
).annotate({
  identifier: "AbandonmentRatePacingConfig",
}) as any as S.Schema<AbandonmentRatePacingConfig>;
export type PacingStrategy = { abandonmentRate: AbandonmentRatePacingConfig };
const PacingStrategy = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ abandonmentRate: AbandonmentRatePacingConfig }),
]);
export type PacingStrategyList = PacingStrategy[];
const PacingStrategyList = /*@__PURE__*/ S.Array(PacingStrategy);
export interface PredictiveConfig {
  bandwidthAllocation: number;
  pacingStrategies?: PacingStrategy[];
}
const PredictiveConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bandwidthAllocation: S.Number, pacingStrategies: S.optional(PacingStrategyList) }),
).annotate({ identifier: "PredictiveConfig" }) as any as S.Schema<PredictiveConfig>;
export interface AgentlessConfig {}
const AgentlessConfig = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "AgentlessConfig",
}) as any as S.Schema<AgentlessConfig>;
export type TimeoutDuration = number;
export interface TimeoutConfig {
  durationInSeconds: number;
}
const TimeoutConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ durationInSeconds: S.Number }),
).annotate({ identifier: "TimeoutConfig" }) as any as S.Schema<TimeoutConfig>;
export type AgentAction = string;
export type AgentActions = string[];
const AgentActions = /*@__PURE__*/ S.Array(S.String);
export interface PreviewConfig {
  bandwidthAllocation: number;
  timeoutConfig: TimeoutConfig;
  agentActions?: string[];
}
const PreviewConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    bandwidthAllocation: S.Number,
    timeoutConfig: TimeoutConfig,
    agentActions: S.optional(AgentActions),
  }),
).annotate({ identifier: "PreviewConfig" }) as any as S.Schema<PreviewConfig>;
export type TelephonyOutboundMode =
  | { progressive: ProgressiveConfig; predictive?: never; agentless?: never; preview?: never }
  | { progressive?: never; predictive: PredictiveConfig; agentless?: never; preview?: never }
  | { progressive?: never; predictive?: never; agentless: AgentlessConfig; preview?: never }
  | { progressive?: never; predictive?: never; agentless?: never; preview: PreviewConfig };
const TelephonyOutboundMode = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ progressive: ProgressiveConfig }),
  /*@__PURE__*/ S.Struct({ predictive: PredictiveConfig }),
  /*@__PURE__*/ S.Struct({ agentless: AgentlessConfig }),
  /*@__PURE__*/ S.Struct({ preview: PreviewConfig }),
]);
export type ContactFlowId = string;
export type SourcePhoneNumber = string;
export interface AnswerMachineDetectionConfig {
  enableAnswerMachineDetection: boolean;
  awaitAnswerMachinePrompt?: boolean;
}
const AnswerMachineDetectionConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    enableAnswerMachineDetection: S.Boolean,
    awaitAnswerMachinePrompt: S.optional(S.Boolean),
  }),
).annotate({
  identifier: "AnswerMachineDetectionConfig",
}) as any as S.Schema<AnswerMachineDetectionConfig>;
export type RingTimeout = number;
export interface TelephonyOutboundConfig {
  connectContactFlowId: string;
  connectSourcePhoneNumber?: string;
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
  ringTimeout?: number;
}
const TelephonyOutboundConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectContactFlowId: S.String,
    connectSourcePhoneNumber: S.optional(S.String),
    answerMachineDetectionConfig: S.optional(AnswerMachineDetectionConfig),
    ringTimeout: S.optional(S.Number),
  }),
).annotate({ identifier: "TelephonyOutboundConfig" }) as any as S.Schema<TelephonyOutboundConfig>;
export interface TelephonyChannelSubtypeConfig {
  capacity?: number;
  connectQueueId?: string;
  outboundMode: TelephonyOutboundMode;
  defaultOutboundConfig: TelephonyOutboundConfig;
}
const TelephonyChannelSubtypeConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    capacity: S.optional(S.Number),
    connectQueueId: S.optional(S.String),
    outboundMode: TelephonyOutboundMode,
    defaultOutboundConfig: TelephonyOutboundConfig,
  }),
).annotate({
  identifier: "TelephonyChannelSubtypeConfig",
}) as any as S.Schema<TelephonyChannelSubtypeConfig>;
export type SmsOutboundMode = { agentless: AgentlessConfig };
const SmsOutboundMode = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ agentless: AgentlessConfig }),
]);
export type Arn = string;
export interface SmsOutboundConfig {
  connectSourcePhoneNumberArn: string;
  wisdomTemplateArn: string;
}
const SmsOutboundConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectSourcePhoneNumberArn: S.String, wisdomTemplateArn: S.String }),
).annotate({ identifier: "SmsOutboundConfig" }) as any as S.Schema<SmsOutboundConfig>;
export interface SmsChannelSubtypeConfig {
  capacity?: number;
  outboundMode: SmsOutboundMode;
  defaultOutboundConfig: SmsOutboundConfig;
}
const SmsChannelSubtypeConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    capacity: S.optional(S.Number),
    outboundMode: SmsOutboundMode,
    defaultOutboundConfig: SmsOutboundConfig,
  }),
).annotate({ identifier: "SmsChannelSubtypeConfig" }) as any as S.Schema<SmsChannelSubtypeConfig>;
export type EmailOutboundMode = { agentless: AgentlessConfig };
const EmailOutboundMode = SmsOutboundMode as any as S.Schema<EmailOutboundMode>;
export type EmailAddress = string | redacted.Redacted<string>;
export type EmailDisplayName = string | redacted.Redacted<string>;
export interface EmailOutboundConfig {
  connectSourceEmailAddress: string | redacted.Redacted<string>;
  sourceEmailAddressDisplayName?: string | redacted.Redacted<string>;
  wisdomTemplateArn: string;
}
const EmailOutboundConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectSourceEmailAddress: SensitiveString,
    sourceEmailAddressDisplayName: S.optional(SensitiveString),
    wisdomTemplateArn: S.String,
  }),
).annotate({ identifier: "EmailOutboundConfig" }) as any as S.Schema<EmailOutboundConfig>;
export interface EmailChannelSubtypeConfig {
  capacity?: number;
  outboundMode: EmailOutboundMode;
  defaultOutboundConfig: EmailOutboundConfig;
}
const EmailChannelSubtypeConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    capacity: S.optional(S.Number),
    outboundMode: EmailOutboundMode,
    defaultOutboundConfig: EmailOutboundConfig,
  }),
).annotate({
  identifier: "EmailChannelSubtypeConfig",
}) as any as S.Schema<EmailChannelSubtypeConfig>;
export type WhatsAppOutboundMode = { agentless: AgentlessConfig };
const WhatsAppOutboundMode = SmsOutboundMode as any as S.Schema<WhatsAppOutboundMode>;
export interface WhatsAppOutboundConfig {
  connectSourcePhoneNumberArn: string;
  wisdomTemplateArn: string;
}
const WhatsAppOutboundConfig = SmsOutboundConfig as any as S.Schema<WhatsAppOutboundConfig>;
export interface WhatsAppChannelSubtypeConfig {
  capacity?: number;
  outboundMode: WhatsAppOutboundMode;
  defaultOutboundConfig: WhatsAppOutboundConfig;
}
const WhatsAppChannelSubtypeConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    capacity: S.optional(S.Number),
    outboundMode: WhatsAppOutboundMode,
    defaultOutboundConfig: WhatsAppOutboundConfig,
  }),
).annotate({
  identifier: "WhatsAppChannelSubtypeConfig",
}) as any as S.Schema<WhatsAppChannelSubtypeConfig>;
export interface ChannelSubtypeConfig {
  telephony?: TelephonyChannelSubtypeConfig;
  sms?: SmsChannelSubtypeConfig;
  email?: EmailChannelSubtypeConfig;
  whatsApp?: WhatsAppChannelSubtypeConfig;
}
const ChannelSubtypeConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    telephony: S.optional(TelephonyChannelSubtypeConfig),
    sms: S.optional(SmsChannelSubtypeConfig),
    email: S.optional(EmailChannelSubtypeConfig),
    whatsApp: S.optional(WhatsAppChannelSubtypeConfig),
  }),
).annotate({ identifier: "ChannelSubtypeConfig" }) as any as S.Schema<ChannelSubtypeConfig>;
export type ExternalCampaignType = string;
export interface EventTrigger {
  customerProfilesDomainArn?: string;
}
const EventTrigger = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ customerProfilesDomainArn: S.optional(S.String) }),
).annotate({ identifier: "EventTrigger" }) as any as S.Schema<EventTrigger>;
export type Source =
  | { customerProfilesSegmentArn: string; eventTrigger?: never }
  | { customerProfilesSegmentArn?: never; eventTrigger: EventTrigger };
const Source = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ customerProfilesSegmentArn: S.String }),
  /*@__PURE__*/ S.Struct({ eventTrigger: EventTrigger }),
]);
export type Iso8601Duration = string;
export interface Schedule {
  startTime: Date;
  endTime: Date;
  refreshFrequency?: string;
}
const Schedule = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    refreshFrequency: S.optional(S.String),
  }),
).annotate({ identifier: "Schedule" }) as any as S.Schema<Schedule>;
export interface EntryLimitsConfig {
  maxEntryCount: number;
  minEntryInterval: string;
}
const EntryLimitsConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ maxEntryCount: S.Number, minEntryInterval: S.String }),
).annotate({ identifier: "EntryLimitsConfig" }) as any as S.Schema<EntryLimitsConfig>;
export type TimeZone = string;
export type LocalTimeZoneDetectionType = string;
export type LocalTimeZoneDetection = string[];
const LocalTimeZoneDetection = AgentActions as any as S.Schema<LocalTimeZoneDetection>;
export type LocalTimeZoneDetectionScope = string;
export interface LocalTimeZoneConfig {
  defaultTimeZone?: string;
  localTimeZoneDetection?: string[];
  localTimeZoneDetectionScope?: string;
}
const LocalTimeZoneConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    defaultTimeZone: S.optional(S.String),
    localTimeZoneDetection: S.optional(LocalTimeZoneDetection),
    localTimeZoneDetectionScope: S.optional(S.String),
  }),
).annotate({ identifier: "LocalTimeZoneConfig" }) as any as S.Schema<LocalTimeZoneConfig>;
export type DayOfWeek = string;
export type Iso8601Time = string;
export interface TimeRange {
  startTime: string;
  endTime: string;
}
const TimeRange = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ startTime: S.String, endTime: S.String }),
).annotate({ identifier: "TimeRange" }) as any as S.Schema<TimeRange>;
export type TimeRangeList = TimeRange[];
const TimeRangeList = /*@__PURE__*/ S.Array(TimeRange);
export type DailyHours = { [key: string]: TimeRange[] | undefined };
const DailyHours = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ TimeRangeList.pipe(S.optional));
export type OpenHours = { dailyHours: { [key: string]: TimeRange[] | undefined } };
const OpenHours = /*@__PURE__*/ S.Union([/*@__PURE__*/ S.Struct({ dailyHours: DailyHours })]);
export type RestrictedPeriodName = string;
export type Iso8601Date = string;
export interface RestrictedPeriod {
  name?: string;
  startDate: string;
  endDate: string;
}
const RestrictedPeriod = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.optional(S.String), startDate: S.String, endDate: S.String }),
).annotate({ identifier: "RestrictedPeriod" }) as any as S.Schema<RestrictedPeriod>;
export type RestrictedPeriodList = RestrictedPeriod[];
const RestrictedPeriodList = /*@__PURE__*/ S.Array(RestrictedPeriod);
export type RestrictedPeriods = { restrictedPeriodList: RestrictedPeriod[] };
const RestrictedPeriods = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ restrictedPeriodList: RestrictedPeriodList }),
]);
export interface TimeWindow {
  openHours: OpenHours;
  restrictedPeriods?: RestrictedPeriods;
}
const TimeWindow = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ openHours: OpenHours, restrictedPeriods: S.optional(RestrictedPeriods) }),
).annotate({ identifier: "TimeWindow" }) as any as S.Schema<TimeWindow>;
export interface CommunicationTimeConfig {
  localTimeZoneConfig: LocalTimeZoneConfig;
  telephony?: TimeWindow;
  sms?: TimeWindow;
  email?: TimeWindow;
  whatsApp?: TimeWindow;
}
const CommunicationTimeConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    localTimeZoneConfig: LocalTimeZoneConfig,
    telephony: S.optional(TimeWindow),
    sms: S.optional(TimeWindow),
    email: S.optional(TimeWindow),
    whatsApp: S.optional(TimeWindow),
  }),
).annotate({ identifier: "CommunicationTimeConfig" }) as any as S.Schema<CommunicationTimeConfig>;
export type CommunicationLimitTimeUnit = string;
export interface CommunicationLimit {
  maxCountPerRecipient: number;
  frequency: number;
  unit: string;
}
const CommunicationLimit = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ maxCountPerRecipient: S.Number, frequency: S.Number, unit: S.String }),
).annotate({ identifier: "CommunicationLimit" }) as any as S.Schema<CommunicationLimit>;
export type CommunicationLimitList = CommunicationLimit[];
const CommunicationLimitList = /*@__PURE__*/ S.Array(CommunicationLimit);
export type CommunicationLimits = { communicationLimitsList: CommunicationLimit[] };
const CommunicationLimits = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ communicationLimitsList: CommunicationLimitList }),
]);
export type InstanceLimitsHandling = string;
export interface CommunicationLimitsConfig {
  allChannelSubtypes?: CommunicationLimits;
  instanceLimitsHandling?: string;
}
const CommunicationLimitsConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    allChannelSubtypes: S.optional(CommunicationLimits),
    instanceLimitsHandling: S.optional(S.String),
  }),
).annotate({
  identifier: "CommunicationLimitsConfig",
}) as any as S.Schema<CommunicationLimitsConfig>;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export interface CreateCampaignRequest {
  name: string;
  connectInstanceId: string;
  channelSubtypeConfig?: ChannelSubtypeConfig;
  type?: string;
  source?: Source;
  connectCampaignFlowArn?: string;
  schedule?: Schedule;
  entryLimitsConfig?: EntryLimitsConfig;
  communicationTimeConfig?: CommunicationTimeConfig;
  communicationLimitsOverride?: CommunicationLimitsConfig;
  tags?: { [key: string]: string | undefined };
}
const CreateCampaignRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    connectInstanceId: S.String,
    channelSubtypeConfig: S.optional(ChannelSubtypeConfig),
    type: S.optional(S.String),
    source: S.optional(Source),
    connectCampaignFlowArn: S.optional(S.String),
    schedule: S.optional(Schedule),
    entryLimitsConfig: S.optional(EntryLimitsConfig),
    communicationTimeConfig: S.optional(CommunicationTimeConfig),
    communicationLimitsOverride: S.optional(CommunicationLimitsConfig),
    tags: S.optional(TagMap),
  }).pipe(T.all(T.Http({ method: "PUT", uri: "/v2/campaigns" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateCampaignRequest" }) as any as S.Schema<CreateCampaignRequest>;
export type CampaignId = string;
export type CampaignArn = string;
export interface CreateCampaignResponse {
  id?: string;
  arn?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateCampaignResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.optional(S.String), arn: S.optional(S.String), tags: S.optional(TagMap) }),
).annotate({ identifier: "CreateCampaignResponse" }) as any as S.Schema<CreateCampaignResponse>;
export interface DeleteCampaignRequest {
  id: string;
}
const DeleteCampaignRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/v2/campaigns/{id}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DeleteCampaignRequest" }) as any as S.Schema<DeleteCampaignRequest>;
export interface DeleteCampaignResponse {}
const DeleteCampaignResponse = AgentlessConfig as any as S.Schema<DeleteCampaignResponse>;
export type ChannelSubtype = string;
export interface DeleteCampaignChannelSubtypeConfigRequest {
  id: string;
  channelSubtype: string;
}
const DeleteCampaignChannelSubtypeConfigRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String.pipe(T.HttpLabel("id")),
    channelSubtype: S.String.pipe(T.HttpQuery("channelSubtype")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/v2/campaigns/{id}/channel-subtype-config" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCampaignChannelSubtypeConfigRequest",
}) as any as S.Schema<DeleteCampaignChannelSubtypeConfigRequest>;
export interface DeleteCampaignChannelSubtypeConfigResponse {}
const DeleteCampaignChannelSubtypeConfigResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "DeleteCampaignChannelSubtypeConfigResponse",
}) as any as S.Schema<DeleteCampaignChannelSubtypeConfigResponse>;
export type CommunicationLimitsConfigType = string;
export interface DeleteCampaignCommunicationLimitsRequest {
  id: string;
  config: string;
}
const DeleteCampaignCommunicationLimitsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String.pipe(T.HttpLabel("id")),
    config: S.String.pipe(T.HttpQuery("config")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/v2/campaigns/{id}/communication-limits" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCampaignCommunicationLimitsRequest",
}) as any as S.Schema<DeleteCampaignCommunicationLimitsRequest>;
export interface DeleteCampaignCommunicationLimitsResponse {}
const DeleteCampaignCommunicationLimitsResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<DeleteCampaignCommunicationLimitsResponse>;
export type CommunicationTimeConfigType = string;
export interface DeleteCampaignCommunicationTimeRequest {
  id: string;
  config: string;
}
const DeleteCampaignCommunicationTimeRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String.pipe(T.HttpLabel("id")),
    config: S.String.pipe(T.HttpQuery("config")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/v2/campaigns/{id}/communication-time" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCampaignCommunicationTimeRequest",
}) as any as S.Schema<DeleteCampaignCommunicationTimeRequest>;
export interface DeleteCampaignCommunicationTimeResponse {}
const DeleteCampaignCommunicationTimeResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<DeleteCampaignCommunicationTimeResponse>;
export interface DeleteCampaignEntryLimitsRequest {
  id: string;
}
const DeleteCampaignEntryLimitsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/v2/campaigns/{id}/entry-limits" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteCampaignEntryLimitsRequest",
}) as any as S.Schema<DeleteCampaignEntryLimitsRequest>;
export interface DeleteCampaignEntryLimitsResponse {}
const DeleteCampaignEntryLimitsResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<DeleteCampaignEntryLimitsResponse>;
export type CampaignDeletionPolicy = string;
export interface DeleteConnectInstanceConfigRequest {
  connectInstanceId: string;
  campaignDeletionPolicy?: string;
}
const DeleteConnectInstanceConfigRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")),
    campaignDeletionPolicy: S.optional(S.String).pipe(T.HttpQuery("campaignDeletionPolicy")),
  }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/v2/connect-instance/{connectInstanceId}/config" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteConnectInstanceConfigRequest",
}) as any as S.Schema<DeleteConnectInstanceConfigRequest>;
export interface DeleteConnectInstanceConfigResponse {}
const DeleteConnectInstanceConfigResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<DeleteConnectInstanceConfigResponse>;
export interface CustomerProfilesIntegrationIdentifier {
  domainArn: string;
}
const CustomerProfilesIntegrationIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ domainArn: S.String }),
).annotate({
  identifier: "CustomerProfilesIntegrationIdentifier",
}) as any as S.Schema<CustomerProfilesIntegrationIdentifier>;
export interface QConnectIntegrationIdentifier {
  knowledgeBaseArn: string;
}
const QConnectIntegrationIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ knowledgeBaseArn: S.String }),
).annotate({
  identifier: "QConnectIntegrationIdentifier",
}) as any as S.Schema<QConnectIntegrationIdentifier>;
export type LambdaArn = string;
export interface LambdaIntegrationIdentifier {
  functionArn: string;
}
const LambdaIntegrationIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ functionArn: S.String }),
).annotate({
  identifier: "LambdaIntegrationIdentifier",
}) as any as S.Schema<LambdaIntegrationIdentifier>;
export type IntegrationIdentifier =
  | { customerProfiles: CustomerProfilesIntegrationIdentifier; qConnect?: never; lambda?: never }
  | { customerProfiles?: never; qConnect: QConnectIntegrationIdentifier; lambda?: never }
  | { customerProfiles?: never; qConnect?: never; lambda: LambdaIntegrationIdentifier };
const IntegrationIdentifier = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ customerProfiles: CustomerProfilesIntegrationIdentifier }),
  /*@__PURE__*/ S.Struct({ qConnect: QConnectIntegrationIdentifier }),
  /*@__PURE__*/ S.Struct({ lambda: LambdaIntegrationIdentifier }),
]);
export interface DeleteConnectInstanceIntegrationRequest {
  connectInstanceId: string;
  integrationIdentifier: IntegrationIdentifier;
}
const DeleteConnectInstanceIntegrationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")),
    integrationIdentifier: IntegrationIdentifier,
  }).pipe(
    T.all(
      T.Http({
        method: "POST",
        uri: "/v2/connect-instance/{connectInstanceId}/integrations/delete",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteConnectInstanceIntegrationRequest",
}) as any as S.Schema<DeleteConnectInstanceIntegrationRequest>;
export interface DeleteConnectInstanceIntegrationResponse {}
const DeleteConnectInstanceIntegrationResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<DeleteConnectInstanceIntegrationResponse>;
export interface DeleteInstanceOnboardingJobRequest {
  connectInstanceId: string;
}
const DeleteInstanceOnboardingJobRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")) }).pipe(
    T.all(
      T.Http({ method: "DELETE", uri: "/v2/connect-instance/{connectInstanceId}/onboarding" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteInstanceOnboardingJobRequest",
}) as any as S.Schema<DeleteInstanceOnboardingJobRequest>;
export interface DeleteInstanceOnboardingJobResponse {}
const DeleteInstanceOnboardingJobResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<DeleteInstanceOnboardingJobResponse>;
export interface DescribeCampaignRequest {
  id: string;
}
const DescribeCampaignRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/v2/campaigns/{id}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DescribeCampaignRequest" }) as any as S.Schema<DescribeCampaignRequest>;
export interface Campaign {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
  channelSubtypeConfig?: ChannelSubtypeConfig;
  type?: string;
  source?: Source;
  connectCampaignFlowArn?: string;
  schedule?: Schedule;
  entryLimitsConfig?: EntryLimitsConfig;
  communicationTimeConfig?: CommunicationTimeConfig;
  communicationLimitsOverride?: CommunicationLimitsConfig;
  tags?: { [key: string]: string | undefined };
}
const Campaign = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    arn: S.String,
    name: S.String,
    connectInstanceId: S.String,
    channelSubtypeConfig: S.optional(ChannelSubtypeConfig),
    type: S.optional(S.String),
    source: S.optional(Source),
    connectCampaignFlowArn: S.optional(S.String),
    schedule: S.optional(Schedule),
    entryLimitsConfig: S.optional(EntryLimitsConfig),
    communicationTimeConfig: S.optional(CommunicationTimeConfig),
    communicationLimitsOverride: S.optional(CommunicationLimitsConfig),
    tags: S.optional(TagMap),
  }),
).annotate({ identifier: "Campaign" }) as any as S.Schema<Campaign>;
export interface DescribeCampaignResponse {
  campaign?: Campaign;
}
const DescribeCampaignResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ campaign: S.optional(Campaign) }),
).annotate({ identifier: "DescribeCampaignResponse" }) as any as S.Schema<DescribeCampaignResponse>;
export interface GetCampaignStateRequest {
  id: string;
}
const GetCampaignStateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/v2/campaigns/{id}/state" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetCampaignStateRequest" }) as any as S.Schema<GetCampaignStateRequest>;
export type CampaignState = string;
export interface GetCampaignStateResponse {
  state?: string;
}
const GetCampaignStateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ state: S.optional(S.String) }),
).annotate({ identifier: "GetCampaignStateResponse" }) as any as S.Schema<GetCampaignStateResponse>;
export type CampaignIdList = string[];
const CampaignIdList = AgentActions as any as S.Schema<CampaignIdList>;
export interface GetCampaignStateBatchRequest {
  campaignIds: string[];
}
const GetCampaignStateBatchRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ campaignIds: CampaignIdList }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/campaigns-state" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "GetCampaignStateBatchRequest",
}) as any as S.Schema<GetCampaignStateBatchRequest>;
export interface SuccessfulCampaignStateResponse {
  campaignId?: string;
  state?: string;
}
const SuccessfulCampaignStateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ campaignId: S.optional(S.String), state: S.optional(S.String) }),
).annotate({
  identifier: "SuccessfulCampaignStateResponse",
}) as any as S.Schema<SuccessfulCampaignStateResponse>;
export type SuccessfulCampaignStateResponseList = SuccessfulCampaignStateResponse[];
const SuccessfulCampaignStateResponseList = /*@__PURE__*/ S.Array(SuccessfulCampaignStateResponse);
export type GetCampaignStateBatchFailureCode = string;
export interface FailedCampaignStateResponse {
  campaignId?: string;
  failureCode?: string;
}
const FailedCampaignStateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ campaignId: S.optional(S.String), failureCode: S.optional(S.String) }),
).annotate({
  identifier: "FailedCampaignStateResponse",
}) as any as S.Schema<FailedCampaignStateResponse>;
export type FailedCampaignStateResponseList = FailedCampaignStateResponse[];
const FailedCampaignStateResponseList = /*@__PURE__*/ S.Array(FailedCampaignStateResponse);
export interface GetCampaignStateBatchResponse {
  successfulRequests?: SuccessfulCampaignStateResponse[];
  failedRequests?: FailedCampaignStateResponse[];
}
const GetCampaignStateBatchResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    successfulRequests: S.optional(SuccessfulCampaignStateResponseList),
    failedRequests: S.optional(FailedCampaignStateResponseList),
  }),
).annotate({
  identifier: "GetCampaignStateBatchResponse",
}) as any as S.Schema<GetCampaignStateBatchResponse>;
export interface GetConnectInstanceConfigRequest {
  connectInstanceId: string;
}
const GetConnectInstanceConfigRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/v2/connect-instance/{connectInstanceId}/config" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetConnectInstanceConfigRequest",
}) as any as S.Schema<GetConnectInstanceConfigRequest>;
export type ServiceLinkedRoleArn = string;
export type Enabled = boolean;
export type EncryptionType = string;
export type EncryptionKey = string;
export interface EncryptionConfig {
  enabled: boolean;
  encryptionType?: string;
  keyArn?: string;
}
const EncryptionConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    enabled: S.Boolean,
    encryptionType: S.optional(S.String),
    keyArn: S.optional(S.String),
  }),
).annotate({ identifier: "EncryptionConfig" }) as any as S.Schema<EncryptionConfig>;
export interface InstanceConfig {
  connectInstanceId: string;
  serviceLinkedRoleArn: string;
  encryptionConfig: EncryptionConfig;
}
const InstanceConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectInstanceId: S.String,
    serviceLinkedRoleArn: S.String,
    encryptionConfig: EncryptionConfig,
  }),
).annotate({ identifier: "InstanceConfig" }) as any as S.Schema<InstanceConfig>;
export interface GetConnectInstanceConfigResponse {
  connectInstanceConfig?: InstanceConfig;
}
const GetConnectInstanceConfigResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectInstanceConfig: S.optional(InstanceConfig) }),
).annotate({
  identifier: "GetConnectInstanceConfigResponse",
}) as any as S.Schema<GetConnectInstanceConfigResponse>;
export interface GetInstanceCommunicationLimitsRequest {
  connectInstanceId: string;
}
const GetInstanceCommunicationLimitsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")) }).pipe(
    T.all(
      T.Http({
        method: "GET",
        uri: "/v2/connect-instance/{connectInstanceId}/communication-limits",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetInstanceCommunicationLimitsRequest",
}) as any as S.Schema<GetInstanceCommunicationLimitsRequest>;
export interface InstanceCommunicationLimitsConfig {
  allChannelSubtypes?: CommunicationLimits;
}
const InstanceCommunicationLimitsConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ allChannelSubtypes: S.optional(CommunicationLimits) }),
).annotate({
  identifier: "InstanceCommunicationLimitsConfig",
}) as any as S.Schema<InstanceCommunicationLimitsConfig>;
export interface GetInstanceCommunicationLimitsResponse {
  communicationLimitsConfig?: InstanceCommunicationLimitsConfig;
}
const GetInstanceCommunicationLimitsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ communicationLimitsConfig: S.optional(InstanceCommunicationLimitsConfig) }),
).annotate({
  identifier: "GetInstanceCommunicationLimitsResponse",
}) as any as S.Schema<GetInstanceCommunicationLimitsResponse>;
export interface GetInstanceOnboardingJobStatusRequest {
  connectInstanceId: string;
}
const GetInstanceOnboardingJobStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")) }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/v2/connect-instance/{connectInstanceId}/onboarding" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "GetInstanceOnboardingJobStatusRequest",
}) as any as S.Schema<GetInstanceOnboardingJobStatusRequest>;
export type InstanceOnboardingJobStatusCode = string;
export type InstanceOnboardingJobFailureCode = string;
export interface InstanceOnboardingJobStatus {
  connectInstanceId: string;
  status: string;
  failureCode?: string;
}
const InstanceOnboardingJobStatus = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectInstanceId: S.String, status: S.String, failureCode: S.optional(S.String) }),
).annotate({
  identifier: "InstanceOnboardingJobStatus",
}) as any as S.Schema<InstanceOnboardingJobStatus>;
export interface GetInstanceOnboardingJobStatusResponse {
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}
const GetInstanceOnboardingJobStatusResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ connectInstanceOnboardingJobStatus: S.optional(InstanceOnboardingJobStatus) }),
).annotate({
  identifier: "GetInstanceOnboardingJobStatusResponse",
}) as any as S.Schema<GetInstanceOnboardingJobStatusResponse>;
export type MaxResults = number;
export type NextToken = string;
export type InstanceIdFilterOperator = string;
export interface InstanceIdFilter {
  value: string;
  operator: string;
}
const InstanceIdFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ value: S.String, operator: S.String }),
).annotate({ identifier: "InstanceIdFilter" }) as any as S.Schema<InstanceIdFilter>;
export interface CampaignFilters {
  instanceIdFilter?: InstanceIdFilter;
}
const CampaignFilters = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ instanceIdFilter: S.optional(InstanceIdFilter) }),
).annotate({ identifier: "CampaignFilters" }) as any as S.Schema<CampaignFilters>;
export interface ListCampaignsRequest {
  maxResults?: number;
  nextToken?: string;
  filters?: CampaignFilters;
}
const ListCampaignsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
    filters: S.optional(CampaignFilters),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/campaigns-summary" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "ListCampaignsRequest" }) as any as S.Schema<ListCampaignsRequest>;
export type ChannelSubtypeList = string[];
const ChannelSubtypeList = AgentActions as any as S.Schema<ChannelSubtypeList>;
export interface CampaignSummary {
  id: string;
  arn: string;
  name: string;
  connectInstanceId: string;
  channelSubtypes: string[];
  type?: string;
  schedule?: Schedule;
  entryLimitsConfig?: EntryLimitsConfig;
  connectCampaignFlowArn?: string;
}
const CampaignSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String,
    arn: S.String,
    name: S.String,
    connectInstanceId: S.String,
    channelSubtypes: ChannelSubtypeList,
    type: S.optional(S.String),
    schedule: S.optional(Schedule),
    entryLimitsConfig: S.optional(EntryLimitsConfig),
    connectCampaignFlowArn: S.optional(S.String),
  }),
).annotate({ identifier: "CampaignSummary" }) as any as S.Schema<CampaignSummary>;
export type CampaignSummaryList = CampaignSummary[];
const CampaignSummaryList = /*@__PURE__*/ S.Array(CampaignSummary);
export interface ListCampaignsResponse {
  nextToken?: string;
  campaignSummaryList?: CampaignSummary[];
}
const ListCampaignsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    campaignSummaryList: S.optional(CampaignSummaryList),
  }),
).annotate({ identifier: "ListCampaignsResponse" }) as any as S.Schema<ListCampaignsResponse>;
export interface ListConnectInstanceIntegrationsRequest {
  connectInstanceId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListConnectInstanceIntegrationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/v2/connect-instance/{connectInstanceId}/integrations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListConnectInstanceIntegrationsRequest",
}) as any as S.Schema<ListConnectInstanceIntegrationsRequest>;
export type EventType = string;
export type ObjectTypeName = string;
export type ObjectTypeNamesMap = { [key: string]: string | undefined };
const ObjectTypeNamesMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ S.String.pipe(S.optional),
);
export interface CustomerProfilesIntegrationSummary {
  domainArn: string;
  objectTypeNames: { [key: string]: string | undefined };
}
const CustomerProfilesIntegrationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ domainArn: S.String, objectTypeNames: ObjectTypeNamesMap }),
).annotate({
  identifier: "CustomerProfilesIntegrationSummary",
}) as any as S.Schema<CustomerProfilesIntegrationSummary>;
export interface QConnectIntegrationSummary {
  knowledgeBaseArn: string;
}
const QConnectIntegrationSummary =
  QConnectIntegrationIdentifier as any as S.Schema<QConnectIntegrationSummary>;
export interface LambdaIntegrationSummary {
  functionArn: string;
}
const LambdaIntegrationSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ functionArn: S.String }),
).annotate({ identifier: "LambdaIntegrationSummary" }) as any as S.Schema<LambdaIntegrationSummary>;
export type IntegrationSummary =
  | { customerProfiles: CustomerProfilesIntegrationSummary; qConnect?: never; lambda?: never }
  | { customerProfiles?: never; qConnect: QConnectIntegrationSummary; lambda?: never }
  | { customerProfiles?: never; qConnect?: never; lambda: LambdaIntegrationSummary };
const IntegrationSummary = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ customerProfiles: CustomerProfilesIntegrationSummary }),
  /*@__PURE__*/ S.Struct({ qConnect: QConnectIntegrationSummary }),
  /*@__PURE__*/ S.Struct({ lambda: LambdaIntegrationSummary }),
]);
export type IntegrationSummaryList = IntegrationSummary[];
const IntegrationSummaryList = /*@__PURE__*/ S.Array(IntegrationSummary);
export interface ListConnectInstanceIntegrationsResponse {
  nextToken?: string;
  integrationSummaryList?: IntegrationSummary[];
}
const ListConnectInstanceIntegrationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    integrationSummaryList: S.optional(IntegrationSummaryList),
  }),
).annotate({
  identifier: "ListConnectInstanceIntegrationsResponse",
}) as any as S.Schema<ListConnectInstanceIntegrationsResponse>;
export interface ListTagsForResourceRequest {
  arn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/v2/tags/{arn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tags: S.optional(TagMap) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export interface PauseCampaignRequest {
  id: string;
}
const PauseCampaignRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/pause" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "PauseCampaignRequest" }) as any as S.Schema<PauseCampaignRequest>;
export interface PauseCampaignResponse {}
const PauseCampaignResponse = AgentlessConfig as any as S.Schema<PauseCampaignResponse>;
export interface CustomerProfilesIntegrationConfig {
  domainArn: string;
  objectTypeNames: { [key: string]: string | undefined };
}
export interface QConnectIntegrationConfig {
  knowledgeBaseArn: string;
}
export interface LambdaIntegrationConfig {
  functionArn: string;
}
export type IntegrationConfig =
  | { customerProfiles: CustomerProfilesIntegrationConfig; qConnect?: never; lambda?: never }
  | { customerProfiles?: never; qConnect: QConnectIntegrationConfig; lambda?: never }
  | { customerProfiles?: never; qConnect?: never; lambda: LambdaIntegrationConfig };
const IntegrationConfig = IntegrationSummary as any as S.Schema<IntegrationConfig>;
export interface PutConnectInstanceIntegrationRequest {
  connectInstanceId: string;
  integrationConfig: IntegrationConfig;
}
const PutConnectInstanceIntegrationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")),
    integrationConfig: IntegrationConfig,
  }).pipe(
    T.all(
      T.Http({ method: "PUT", uri: "/v2/connect-instance/{connectInstanceId}/integrations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "PutConnectInstanceIntegrationRequest",
}) as any as S.Schema<PutConnectInstanceIntegrationRequest>;
export interface PutConnectInstanceIntegrationResponse {}
const PutConnectInstanceIntegrationResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<PutConnectInstanceIntegrationResponse>;
export interface PutInstanceCommunicationLimitsRequest {
  connectInstanceId: string;
  communicationLimitsConfig: InstanceCommunicationLimitsConfig;
}
const PutInstanceCommunicationLimitsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")),
    communicationLimitsConfig: InstanceCommunicationLimitsConfig,
  }).pipe(
    T.all(
      T.Http({
        method: "PUT",
        uri: "/v2/connect-instance/{connectInstanceId}/communication-limits",
      }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "PutInstanceCommunicationLimitsRequest",
}) as any as S.Schema<PutInstanceCommunicationLimitsRequest>;
export interface PutInstanceCommunicationLimitsResponse {}
const PutInstanceCommunicationLimitsResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<PutInstanceCommunicationLimitsResponse>;
export type ClientToken = string;
export type DestinationPhoneNumber = string | redacted.Redacted<string>;
export type AttributeName = string;
export type AttributeValue = string;
export type Attributes = { [key: string]: string | undefined };
const Attributes = TagMap as any as S.Schema<Attributes>;
export interface TelephonyChannelSubtypeParameters {
  destinationPhoneNumber: string | redacted.Redacted<string>;
  attributes: { [key: string]: string | undefined };
  connectSourcePhoneNumber?: string;
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
  ringTimeout?: number;
}
const TelephonyChannelSubtypeParameters = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    destinationPhoneNumber: SensitiveString,
    attributes: Attributes,
    connectSourcePhoneNumber: S.optional(S.String),
    answerMachineDetectionConfig: S.optional(AnswerMachineDetectionConfig),
    ringTimeout: S.optional(S.Number),
  }),
).annotate({
  identifier: "TelephonyChannelSubtypeParameters",
}) as any as S.Schema<TelephonyChannelSubtypeParameters>;
export interface SmsChannelSubtypeParameters {
  destinationPhoneNumber: string | redacted.Redacted<string>;
  connectSourcePhoneNumberArn?: string;
  templateArn?: string;
  templateParameters: { [key: string]: string | undefined };
}
const SmsChannelSubtypeParameters = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    destinationPhoneNumber: SensitiveString,
    connectSourcePhoneNumberArn: S.optional(S.String),
    templateArn: S.optional(S.String),
    templateParameters: Attributes,
  }),
).annotate({
  identifier: "SmsChannelSubtypeParameters",
}) as any as S.Schema<SmsChannelSubtypeParameters>;
export interface EmailChannelSubtypeParameters {
  destinationEmailAddress: string | redacted.Redacted<string>;
  connectSourceEmailAddress?: string | redacted.Redacted<string>;
  templateArn?: string;
  templateParameters: { [key: string]: string | undefined };
}
const EmailChannelSubtypeParameters = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    destinationEmailAddress: SensitiveString,
    connectSourceEmailAddress: S.optional(SensitiveString),
    templateArn: S.optional(S.String),
    templateParameters: Attributes,
  }),
).annotate({
  identifier: "EmailChannelSubtypeParameters",
}) as any as S.Schema<EmailChannelSubtypeParameters>;
export interface WhatsAppChannelSubtypeParameters {
  destinationPhoneNumber: string | redacted.Redacted<string>;
  connectSourcePhoneNumberArn?: string;
  templateArn?: string;
  templateParameters: { [key: string]: string | undefined };
}
const WhatsAppChannelSubtypeParameters =
  SmsChannelSubtypeParameters as any as S.Schema<WhatsAppChannelSubtypeParameters>;
export type ChannelSubtypeParameters =
  | { telephony: TelephonyChannelSubtypeParameters; sms?: never; email?: never; whatsApp?: never }
  | { telephony?: never; sms: SmsChannelSubtypeParameters; email?: never; whatsApp?: never }
  | { telephony?: never; sms?: never; email: EmailChannelSubtypeParameters; whatsApp?: never }
  | { telephony?: never; sms?: never; email?: never; whatsApp: WhatsAppChannelSubtypeParameters };
const ChannelSubtypeParameters = /*@__PURE__*/ S.Union([
  /*@__PURE__*/ S.Struct({ telephony: TelephonyChannelSubtypeParameters }),
  /*@__PURE__*/ S.Struct({ sms: SmsChannelSubtypeParameters }),
  /*@__PURE__*/ S.Struct({ email: EmailChannelSubtypeParameters }),
  /*@__PURE__*/ S.Struct({ whatsApp: WhatsAppChannelSubtypeParameters }),
]);
export interface OutboundRequest {
  clientToken: string;
  expirationTime: Date;
  channelSubtypeParameters: ChannelSubtypeParameters;
}
const OutboundRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.String,
    expirationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    channelSubtypeParameters: ChannelSubtypeParameters,
  }),
).annotate({ identifier: "OutboundRequest" }) as any as S.Schema<OutboundRequest>;
export type OutboundRequestList = OutboundRequest[];
const OutboundRequestList = /*@__PURE__*/ S.Array(OutboundRequest);
export interface PutOutboundRequestBatchRequest {
  id: string;
  outboundRequests: OutboundRequest[];
}
const PutOutboundRequestBatchRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")), outboundRequests: OutboundRequestList }).pipe(
    T.all(
      T.Http({ method: "PUT", uri: "/v2/campaigns/{id}/outbound-requests" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "PutOutboundRequestBatchRequest",
}) as any as S.Schema<PutOutboundRequestBatchRequest>;
export type DialRequestId = string;
export interface SuccessfulRequest {
  clientToken?: string;
  id?: string;
}
const SuccessfulRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ clientToken: S.optional(S.String), id: S.optional(S.String) }),
).annotate({ identifier: "SuccessfulRequest" }) as any as S.Schema<SuccessfulRequest>;
export type SuccessfulRequestList = SuccessfulRequest[];
const SuccessfulRequestList = /*@__PURE__*/ S.Array(SuccessfulRequest);
export type FailureCode = string;
export interface FailedRequest {
  clientToken?: string;
  id?: string;
  failureCode?: string;
}
const FailedRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String),
    id: S.optional(S.String),
    failureCode: S.optional(S.String),
  }),
).annotate({ identifier: "FailedRequest" }) as any as S.Schema<FailedRequest>;
export type FailedRequestList = FailedRequest[];
const FailedRequestList = /*@__PURE__*/ S.Array(FailedRequest);
export interface PutOutboundRequestBatchResponse {
  successfulRequests?: SuccessfulRequest[];
  failedRequests?: FailedRequest[];
}
const PutOutboundRequestBatchResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    successfulRequests: S.optional(SuccessfulRequestList),
    failedRequests: S.optional(FailedRequestList),
  }),
).annotate({
  identifier: "PutOutboundRequestBatchResponse",
}) as any as S.Schema<PutOutboundRequestBatchResponse>;
export type ProfileId = string;
export type SourceEvent = string;
export type SessionId = string;
export type BrowserId = string;
export interface WebNotificationContext {
  sessionId?: string;
  browserId?: string;
}
const WebNotificationContext = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ sessionId: S.optional(S.String), browserId: S.optional(S.String) }),
).annotate({ identifier: "WebNotificationContext" }) as any as S.Schema<WebNotificationContext>;
export interface ChannelContext {
  webNotificationContext?: WebNotificationContext;
}
const ChannelContext = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ webNotificationContext: S.optional(WebNotificationContext) }),
).annotate({ identifier: "ChannelContext" }) as any as S.Schema<ChannelContext>;
export interface EventTriggerContext {
  sourceEvent?: string;
  channelContext?: ChannelContext;
}
const EventTriggerContext = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ sourceEvent: S.optional(S.String), channelContext: S.optional(ChannelContext) }),
).annotate({ identifier: "EventTriggerContext" }) as any as S.Schema<EventTriggerContext>;
export interface ProfileOutboundRequest {
  clientToken: string;
  profileId: string;
  expirationTime?: Date;
  eventTriggerContext?: EventTriggerContext;
}
const ProfileOutboundRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.String,
    profileId: S.String,
    expirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
    eventTriggerContext: S.optional(EventTriggerContext),
  }),
).annotate({ identifier: "ProfileOutboundRequest" }) as any as S.Schema<ProfileOutboundRequest>;
export type ProfileOutboundRequestList = ProfileOutboundRequest[];
const ProfileOutboundRequestList = /*@__PURE__*/ S.Array(ProfileOutboundRequest);
export interface PutProfileOutboundRequestBatchRequest {
  id: string;
  profileOutboundRequests: ProfileOutboundRequest[];
}
const PutProfileOutboundRequestBatchRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String.pipe(T.HttpLabel("id")),
    profileOutboundRequests: ProfileOutboundRequestList,
  }).pipe(
    T.all(
      T.Http({ method: "PUT", uri: "/v2/campaigns/{id}/profile-outbound-requests" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "PutProfileOutboundRequestBatchRequest",
}) as any as S.Schema<PutProfileOutboundRequestBatchRequest>;
export type ProfileOutboundRequestId = string;
export interface SuccessfulProfileOutboundRequest {
  clientToken?: string;
  id?: string;
}
const SuccessfulProfileOutboundRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ clientToken: S.optional(S.String), id: S.optional(S.String) }),
).annotate({
  identifier: "SuccessfulProfileOutboundRequest",
}) as any as S.Schema<SuccessfulProfileOutboundRequest>;
export type SuccessfulProfileOutboundRequestList = SuccessfulProfileOutboundRequest[];
const SuccessfulProfileOutboundRequestList = /*@__PURE__*/ S.Array(
  SuccessfulProfileOutboundRequest,
);
export type ProfileOutboundRequestFailureCode = string;
export interface FailedProfileOutboundRequest {
  clientToken?: string;
  id?: string;
  failureCode?: string;
}
const FailedProfileOutboundRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.optional(S.String),
    id: S.optional(S.String),
    failureCode: S.optional(S.String),
  }),
).annotate({
  identifier: "FailedProfileOutboundRequest",
}) as any as S.Schema<FailedProfileOutboundRequest>;
export type FailedProfileOutboundRequestList = FailedProfileOutboundRequest[];
const FailedProfileOutboundRequestList = /*@__PURE__*/ S.Array(FailedProfileOutboundRequest);
export interface PutProfileOutboundRequestBatchResponse {
  successfulRequests?: SuccessfulProfileOutboundRequest[];
  failedRequests?: FailedProfileOutboundRequest[];
}
const PutProfileOutboundRequestBatchResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    successfulRequests: S.optional(SuccessfulProfileOutboundRequestList),
    failedRequests: S.optional(FailedProfileOutboundRequestList),
  }),
).annotate({
  identifier: "PutProfileOutboundRequestBatchResponse",
}) as any as S.Schema<PutProfileOutboundRequestBatchResponse>;
export interface ResumeCampaignRequest {
  id: string;
}
const ResumeCampaignRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/resume" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "ResumeCampaignRequest" }) as any as S.Schema<ResumeCampaignRequest>;
export interface ResumeCampaignResponse {}
const ResumeCampaignResponse = AgentlessConfig as any as S.Schema<ResumeCampaignResponse>;
export interface StartCampaignRequest {
  id: string;
}
const StartCampaignRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/start" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "StartCampaignRequest" }) as any as S.Schema<StartCampaignRequest>;
export interface StartCampaignResponse {}
const StartCampaignResponse = AgentlessConfig as any as S.Schema<StartCampaignResponse>;
export interface StartInstanceOnboardingJobRequest {
  connectInstanceId: string;
  encryptionConfig: EncryptionConfig;
}
const StartInstanceOnboardingJobRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    connectInstanceId: S.String.pipe(T.HttpLabel("connectInstanceId")),
    encryptionConfig: EncryptionConfig,
  }).pipe(
    T.all(
      T.Http({ method: "PUT", uri: "/v2/connect-instance/{connectInstanceId}/onboarding" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartInstanceOnboardingJobRequest",
}) as any as S.Schema<StartInstanceOnboardingJobRequest>;
export interface StartInstanceOnboardingJobResponse {
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}
const StartInstanceOnboardingJobResponse =
  GetInstanceOnboardingJobStatusResponse as any as S.Schema<StartInstanceOnboardingJobResponse>;
export interface StopCampaignRequest {
  id: string;
}
const StopCampaignRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/campaigns/{id}/stop" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "StopCampaignRequest" }) as any as S.Schema<StopCampaignRequest>;
export interface StopCampaignResponse {}
const StopCampaignResponse = AgentlessConfig as any as S.Schema<StopCampaignResponse>;
export interface TagResourceRequest {
  arn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")), tags: TagMap }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/tags/{arn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AgentlessConfig as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = AgentActions as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  arn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    arn: S.String.pipe(T.HttpLabel("arn")),
    tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
  }).pipe(T.all(T.Http({ method: "DELETE", uri: "/v2/tags/{arn}" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = AgentlessConfig as any as S.Schema<UntagResourceResponse>;
export interface UpdateCampaignChannelSubtypeConfigRequest {
  id: string;
  channelSubtypeConfig: ChannelSubtypeConfig;
}
const UpdateCampaignChannelSubtypeConfigRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String.pipe(T.HttpLabel("id")),
    channelSubtypeConfig: ChannelSubtypeConfig,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/channel-subtype-config" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCampaignChannelSubtypeConfigRequest",
}) as any as S.Schema<UpdateCampaignChannelSubtypeConfigRequest>;
export interface UpdateCampaignChannelSubtypeConfigResponse {}
const UpdateCampaignChannelSubtypeConfigResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<UpdateCampaignChannelSubtypeConfigResponse>;
export interface UpdateCampaignCommunicationLimitsRequest {
  id: string;
  communicationLimitsOverride: CommunicationLimitsConfig;
}
const UpdateCampaignCommunicationLimitsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String.pipe(T.HttpLabel("id")),
    communicationLimitsOverride: CommunicationLimitsConfig,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/communication-limits" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCampaignCommunicationLimitsRequest",
}) as any as S.Schema<UpdateCampaignCommunicationLimitsRequest>;
export interface UpdateCampaignCommunicationLimitsResponse {}
const UpdateCampaignCommunicationLimitsResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<UpdateCampaignCommunicationLimitsResponse>;
export interface UpdateCampaignCommunicationTimeRequest {
  id: string;
  communicationTimeConfig: CommunicationTimeConfig;
}
const UpdateCampaignCommunicationTimeRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String.pipe(T.HttpLabel("id")),
    communicationTimeConfig: CommunicationTimeConfig,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/communication-time" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCampaignCommunicationTimeRequest",
}) as any as S.Schema<UpdateCampaignCommunicationTimeRequest>;
export interface UpdateCampaignCommunicationTimeResponse {}
const UpdateCampaignCommunicationTimeResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<UpdateCampaignCommunicationTimeResponse>;
export interface UpdateCampaignEntryLimitsRequest {
  id: string;
  entryLimitsConfig: EntryLimitsConfig;
}
const UpdateCampaignEntryLimitsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")), entryLimitsConfig: EntryLimitsConfig }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/entry-limits" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCampaignEntryLimitsRequest",
}) as any as S.Schema<UpdateCampaignEntryLimitsRequest>;
export interface UpdateCampaignEntryLimitsResponse {}
const UpdateCampaignEntryLimitsResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<UpdateCampaignEntryLimitsResponse>;
export interface UpdateCampaignFlowAssociationRequest {
  id: string;
  connectCampaignFlowArn: string;
}
const UpdateCampaignFlowAssociationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")), connectCampaignFlowArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/campaigns/{id}/flow" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "UpdateCampaignFlowAssociationRequest",
}) as any as S.Schema<UpdateCampaignFlowAssociationRequest>;
export interface UpdateCampaignFlowAssociationResponse {}
const UpdateCampaignFlowAssociationResponse =
  DeleteCampaignChannelSubtypeConfigResponse as any as S.Schema<UpdateCampaignFlowAssociationResponse>;
export interface UpdateCampaignNameRequest {
  id: string;
  name: string;
}
const UpdateCampaignNameRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")), name: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/v2/campaigns/{id}/name" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "UpdateCampaignNameRequest",
}) as any as S.Schema<UpdateCampaignNameRequest>;
export interface UpdateCampaignNameResponse {}
const UpdateCampaignNameResponse = AgentlessConfig as any as S.Schema<UpdateCampaignNameResponse>;
export interface UpdateCampaignScheduleRequest {
  id: string;
  schedule: Schedule;
}
const UpdateCampaignScheduleRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")), schedule: Schedule }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/schedule" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCampaignScheduleRequest",
}) as any as S.Schema<UpdateCampaignScheduleRequest>;
export interface UpdateCampaignScheduleResponse {}
const UpdateCampaignScheduleResponse =
  AgentlessConfig as any as S.Schema<UpdateCampaignScheduleResponse>;
export interface UpdateCampaignSourceRequest {
  id: string;
  source: Source;
}
const UpdateCampaignSourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")), source: Source }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/v2/campaigns/{id}/source" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateCampaignSourceRequest",
}) as any as S.Schema<UpdateCampaignSourceRequest>;
export interface UpdateCampaignSourceResponse {}
const UpdateCampaignSourceResponse =
  AgentlessConfig as any as S.Schema<UpdateCampaignSourceResponse>;
export type XAmazonErrorType = string;
export type CreateCampaignError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a campaign for the specified Amazon Connect account. This API is idempotent.
 */
export const createCampaign: API.OperationMethod<
  CreateCampaignRequest,
  CreateCampaignResponse,
  CreateCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCampaignRequest,
  output: CreateCampaignResponse,
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
  operationName: "CreateCampaign",
}));

export type DeleteCampaignError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a campaign from the specified Amazon Connect account.
 */
export const deleteCampaign: API.OperationMethod<
  DeleteCampaignRequest,
  DeleteCampaignResponse,
  DeleteCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCampaignRequest,
  output: DeleteCampaignResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCampaign",
}));

export type DeleteCampaignChannelSubtypeConfigError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the channel subtype config of a campaign. This API is idempotent.
 */
export const deleteCampaignChannelSubtypeConfig: API.OperationMethod<
  DeleteCampaignChannelSubtypeConfigRequest,
  DeleteCampaignChannelSubtypeConfigResponse,
  DeleteCampaignChannelSubtypeConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCampaignChannelSubtypeConfigRequest,
  output: DeleteCampaignChannelSubtypeConfigResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCampaignChannelSubtypeConfig",
}));

export type DeleteCampaignCommunicationLimitsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the communication limits config for a campaign. This API is idempotent.
 */
export const deleteCampaignCommunicationLimits: API.OperationMethod<
  DeleteCampaignCommunicationLimitsRequest,
  DeleteCampaignCommunicationLimitsResponse,
  DeleteCampaignCommunicationLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCampaignCommunicationLimitsRequest,
  output: DeleteCampaignCommunicationLimitsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCampaignCommunicationLimits",
}));

export type DeleteCampaignCommunicationTimeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the communication time config for a campaign. This API is idempotent.
 */
export const deleteCampaignCommunicationTime: API.OperationMethod<
  DeleteCampaignCommunicationTimeRequest,
  DeleteCampaignCommunicationTimeResponse,
  DeleteCampaignCommunicationTimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCampaignCommunicationTimeRequest,
  output: DeleteCampaignCommunicationTimeResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCampaignCommunicationTime",
}));

export type DeleteCampaignEntryLimitsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the entry limits config for a campaign. This API is idempotent.
 */
export const deleteCampaignEntryLimits: API.OperationMethod<
  DeleteCampaignEntryLimitsRequest,
  DeleteCampaignEntryLimitsResponse,
  DeleteCampaignEntryLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCampaignEntryLimitsRequest,
  output: DeleteCampaignEntryLimitsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCampaignEntryLimits",
}));

export type DeleteConnectInstanceConfigError =
  | AccessDeniedException
  | InternalServerException
  | InvalidStateException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a connect instance config from the specified AWS account.
 */
export const deleteConnectInstanceConfig: API.OperationMethod<
  DeleteConnectInstanceConfigRequest,
  DeleteConnectInstanceConfigResponse,
  DeleteConnectInstanceConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectInstanceConfigRequest,
  output: DeleteConnectInstanceConfigResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidStateException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnectInstanceConfig",
}));

export type DeleteConnectInstanceIntegrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete the integration for the specified Amazon Connect instance.
 */
export const deleteConnectInstanceIntegration: API.OperationMethod<
  DeleteConnectInstanceIntegrationRequest,
  DeleteConnectInstanceIntegrationResponse,
  DeleteConnectInstanceIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectInstanceIntegrationRequest,
  output: DeleteConnectInstanceIntegrationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnectInstanceIntegration",
}));

export type DeleteInstanceOnboardingJobError =
  | AccessDeniedException
  | InternalServerException
  | InvalidStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
 */
export const deleteInstanceOnboardingJob: API.OperationMethod<
  DeleteInstanceOnboardingJobRequest,
  DeleteInstanceOnboardingJobResponse,
  DeleteInstanceOnboardingJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInstanceOnboardingJobRequest,
  output: DeleteInstanceOnboardingJobResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInstanceOnboardingJob",
}));

export type DescribeCampaignError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specific campaign.
 */
export const describeCampaign: API.OperationMethod<
  DescribeCampaignRequest,
  DescribeCampaignResponse,
  DescribeCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCampaignRequest,
  output: DescribeCampaignResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCampaign",
}));

export type GetCampaignStateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get state of a campaign for the specified Amazon Connect account.
 */
export const getCampaignState: API.OperationMethod<
  GetCampaignStateRequest,
  GetCampaignStateResponse,
  GetCampaignStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCampaignStateRequest,
  output: GetCampaignStateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCampaignState",
}));

export type GetCampaignStateBatchError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get state of campaigns for the specified Amazon Connect account.
 */
export const getCampaignStateBatch: API.OperationMethod<
  GetCampaignStateBatchRequest,
  GetCampaignStateBatchResponse,
  GetCampaignStateBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCampaignStateBatchRequest,
  output: GetCampaignStateBatchResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCampaignStateBatch",
}));

export type GetConnectInstanceConfigError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Get the specific Connect instance config.
 */
export const getConnectInstanceConfig: API.OperationMethod<
  GetConnectInstanceConfigRequest,
  GetConnectInstanceConfigResponse,
  GetConnectInstanceConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConnectInstanceConfigRequest,
  output: GetConnectInstanceConfigResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnectInstanceConfig",
}));

export type GetInstanceCommunicationLimitsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Get the instance communication limits.
 */
export const getInstanceCommunicationLimits: API.OperationMethod<
  GetInstanceCommunicationLimitsRequest,
  GetInstanceCommunicationLimitsResponse,
  GetInstanceCommunicationLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInstanceCommunicationLimitsRequest,
  output: GetInstanceCommunicationLimitsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInstanceCommunicationLimits",
}));

export type GetInstanceOnboardingJobStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Get the specific instance onboarding job status.
 */
export const getInstanceOnboardingJobStatus: API.OperationMethod<
  GetInstanceOnboardingJobStatusRequest,
  GetInstanceOnboardingJobStatusResponse,
  GetInstanceOnboardingJobStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInstanceOnboardingJobStatusRequest,
  output: GetInstanceOnboardingJobStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInstanceOnboardingJobStatus",
}));

export type ListCampaignsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Provides summary information about the campaigns under the specified Amazon Connect account.
 */
export const listCampaigns: API.PaginatedOperationMethod<
  ListCampaignsRequest,
  ListCampaignsResponse,
  ListCampaignsError,
  Credentials | HttpClient.HttpClient,
  CampaignSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCampaignsRequest,
  output: ListCampaignsResponse,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCampaigns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "campaignSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConnectInstanceIntegrationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides summary information about the integration under the specified Connect instance.
 */
export const listConnectInstanceIntegrations: API.PaginatedOperationMethod<
  ListConnectInstanceIntegrationsRequest,
  ListConnectInstanceIntegrationsResponse,
  ListConnectInstanceIntegrationsError,
  Credentials | HttpClient.HttpClient,
  IntegrationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConnectInstanceIntegrationsRequest,
  output: ListConnectInstanceIntegrationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectInstanceIntegrations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "integrationSummaryList",
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
 * List tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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

export type PauseCampaignError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Pauses a campaign for the specified Amazon Connect account.
 */
export const pauseCampaign: API.OperationMethod<
  PauseCampaignRequest,
  PauseCampaignResponse,
  PauseCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PauseCampaignRequest,
  output: PauseCampaignResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PauseCampaign",
}));

export type PutConnectInstanceIntegrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Put or update the integration for the specified Amazon Connect instance.
 */
export const putConnectInstanceIntegration: API.OperationMethod<
  PutConnectInstanceIntegrationRequest,
  PutConnectInstanceIntegrationResponse,
  PutConnectInstanceIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutConnectInstanceIntegrationRequest,
  output: PutConnectInstanceIntegrationResponse,
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
  operationName: "PutConnectInstanceIntegration",
}));

export type PutInstanceCommunicationLimitsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Put the instance communication limits. This API is idempotent.
 */
export const putInstanceCommunicationLimits: API.OperationMethod<
  PutInstanceCommunicationLimitsRequest,
  PutInstanceCommunicationLimitsResponse,
  PutInstanceCommunicationLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutInstanceCommunicationLimitsRequest,
  output: PutInstanceCommunicationLimitsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutInstanceCommunicationLimits",
}));

export type PutOutboundRequestBatchError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates outbound requests for the specified campaign Amazon Connect account. This API is idempotent.
 */
export const putOutboundRequestBatch: API.OperationMethod<
  PutOutboundRequestBatchRequest,
  PutOutboundRequestBatchResponse,
  PutOutboundRequestBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutOutboundRequestBatchRequest,
  output: PutOutboundRequestBatchResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutOutboundRequestBatch",
}));

export type PutProfileOutboundRequestBatchError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Takes in a list of profile outbound requests to be placed as part of an outbound campaign. This API is idempotent.
 */
export const putProfileOutboundRequestBatch: API.OperationMethod<
  PutProfileOutboundRequestBatchRequest,
  PutProfileOutboundRequestBatchResponse,
  PutProfileOutboundRequestBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutProfileOutboundRequestBatchRequest,
  output: PutProfileOutboundRequestBatchResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutProfileOutboundRequestBatch",
}));

export type ResumeCampaignError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a campaign for the specified Amazon Connect account.
 */
export const resumeCampaign: API.OperationMethod<
  ResumeCampaignRequest,
  ResumeCampaignResponse,
  ResumeCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResumeCampaignRequest,
  output: ResumeCampaignResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResumeCampaign",
}));

export type StartCampaignError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a campaign for the specified Amazon Connect account.
 */
export const startCampaign: API.OperationMethod<
  StartCampaignRequest,
  StartCampaignResponse,
  StartCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartCampaignRequest,
  output: StartCampaignResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCampaign",
}));

export type StartInstanceOnboardingJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Onboard the specific Amazon Connect instance to Connect Campaigns.
 */
export const startInstanceOnboardingJob: API.OperationMethod<
  StartInstanceOnboardingJobRequest,
  StartInstanceOnboardingJobResponse,
  StartInstanceOnboardingJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartInstanceOnboardingJobRequest,
  output: StartInstanceOnboardingJobResponse,
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
  operationName: "StartInstanceOnboardingJob",
}));

export type StopCampaignError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a campaign for the specified Amazon Connect account.
 */
export const stopCampaign: API.OperationMethod<
  StopCampaignRequest,
  StopCampaignResponse,
  StopCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopCampaignRequest,
  output: StopCampaignResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopCampaign",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tag a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
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
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Untag a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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

export type UpdateCampaignChannelSubtypeConfigError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the channel subtype config of a campaign. This API is idempotent.
 */
export const updateCampaignChannelSubtypeConfig: API.OperationMethod<
  UpdateCampaignChannelSubtypeConfigRequest,
  UpdateCampaignChannelSubtypeConfigResponse,
  UpdateCampaignChannelSubtypeConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCampaignChannelSubtypeConfigRequest,
  output: UpdateCampaignChannelSubtypeConfigResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaignChannelSubtypeConfig",
}));

export type UpdateCampaignCommunicationLimitsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the communication limits config for a campaign. This API is idempotent.
 */
export const updateCampaignCommunicationLimits: API.OperationMethod<
  UpdateCampaignCommunicationLimitsRequest,
  UpdateCampaignCommunicationLimitsResponse,
  UpdateCampaignCommunicationLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCampaignCommunicationLimitsRequest,
  output: UpdateCampaignCommunicationLimitsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaignCommunicationLimits",
}));

export type UpdateCampaignCommunicationTimeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the communication time config for a campaign. This API is idempotent.
 */
export const updateCampaignCommunicationTime: API.OperationMethod<
  UpdateCampaignCommunicationTimeRequest,
  UpdateCampaignCommunicationTimeResponse,
  UpdateCampaignCommunicationTimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCampaignCommunicationTimeRequest,
  output: UpdateCampaignCommunicationTimeResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaignCommunicationTime",
}));

export type UpdateCampaignEntryLimitsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the entry limits config for a campaign. This API is idempotent.
 */
export const updateCampaignEntryLimits: API.OperationMethod<
  UpdateCampaignEntryLimitsRequest,
  UpdateCampaignEntryLimitsResponse,
  UpdateCampaignEntryLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCampaignEntryLimitsRequest,
  output: UpdateCampaignEntryLimitsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaignEntryLimits",
}));

export type UpdateCampaignFlowAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the campaign flow associated with a campaign. This API is idempotent.
 */
export const updateCampaignFlowAssociation: API.OperationMethod<
  UpdateCampaignFlowAssociationRequest,
  UpdateCampaignFlowAssociationResponse,
  UpdateCampaignFlowAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCampaignFlowAssociationRequest,
  output: UpdateCampaignFlowAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaignFlowAssociation",
}));

export type UpdateCampaignNameError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the name of a campaign. This API is idempotent.
 */
export const updateCampaignName: API.OperationMethod<
  UpdateCampaignNameRequest,
  UpdateCampaignNameResponse,
  UpdateCampaignNameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCampaignNameRequest,
  output: UpdateCampaignNameResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaignName",
}));

export type UpdateCampaignScheduleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the schedule for a campaign. This API is idempotent.
 */
export const updateCampaignSchedule: API.OperationMethod<
  UpdateCampaignScheduleRequest,
  UpdateCampaignScheduleResponse,
  UpdateCampaignScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCampaignScheduleRequest,
  output: UpdateCampaignScheduleResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaignSchedule",
}));

export type UpdateCampaignSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidCampaignStateException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the campaign source with a campaign. This API is idempotent.
 */
export const updateCampaignSource: API.OperationMethod<
  UpdateCampaignSourceRequest,
  UpdateCampaignSourceResponse,
  UpdateCampaignSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCampaignSourceRequest,
  output: UpdateCampaignSourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidCampaignStateException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaignSource",
}));
