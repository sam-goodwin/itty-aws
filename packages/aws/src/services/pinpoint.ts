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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Pinpoint", serviceShapeName: "Pinpoint" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "mobiletargeting" });
const ver = /*@__PURE__*/ T.ServiceVersion("2016-12-01");
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
              `https://pinpoint-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://pinpoint-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://pinpoint.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        if (Region === "us-east-1") {
          return e("https://pinpoint.us-east-1.amazonaws.com");
        }
        if (Region === "us-west-2") {
          return e("https://pinpoint.us-west-2.amazonaws.com");
        }
        if (Region === "us-gov-west-1") {
          return e("https://pinpoint.us-gov-west-1.amazonaws.com");
        }
        if ("aws" === _.getAttr(PartitionResult, "name")) {
          return e(`https://pinpoint.${Region}.amazonaws.com`);
        }
        if ("aws-us-gov" === _.getAttr(PartitionResult, "name")) {
          return e(`https://pinpoint.${Region}.amazonaws.com`);
        }
        return e(`https://pinpoint.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestID: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestID: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestID: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestID: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class MethodNotAllowedException
  extends /*@__PURE__*/ S.TaggedError<MethodNotAllowedException>()(
    "MethodNotAllowedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestID: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(405),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestID: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class PayloadTooLargeException
  extends /*@__PURE__*/ S.TaggedError<PayloadTooLargeException>()(
    "PayloadTooLargeException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestID: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(413),
  ).pipe(C.withBadRequestError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestID: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export type MapOf__string = { [key: string]: string | undefined };
export interface CreateApplicationRequest {
  Name?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateAppRequest {
  CreateApplicationRequest?: CreateApplicationRequest;
}
export interface ApplicationResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  tags?: { [key: string]: string | undefined };
  CreationDate?: string;
}
export interface CreateAppResponse {
  ApplicationResponse: ApplicationResponse & { Arn: string; Id: string; Name: string };
}
export type __EndpointTypesElement =
  | "PUSH"
  | "GCM"
  | "APNS"
  | "APNS_SANDBOX"
  | "APNS_VOIP"
  | "APNS_VOIP_SANDBOX"
  | "ADM"
  | "SMS"
  | "VOICE"
  | "EMAIL"
  | "BAIDU"
  | "CUSTOM"
  | "IN_APP"
  | (string & {});
const __EndpointTypesElement = S.String;

export type ListOf__EndpointTypesElement = __EndpointTypesElement[];
export interface CustomDeliveryConfiguration {
  DeliveryUri?: string;
  EndpointTypes?: __EndpointTypesElement[];
}
export type Action = "OPEN_APP" | "DEEP_LINK" | "URL" | (string & {});
export interface Message {
  Action?: Action;
  Body?: string;
  ImageIconUrl?: string;
  ImageSmallIconUrl?: string;
  ImageUrl?: string;
  JsonBody?: string;
  MediaUrl?: string;
  RawContent?: string;
  SilentPush?: boolean;
  TimeToLive?: number;
  Title?: string;
  Url?: string;
}
export interface CampaignCustomMessage {
  Data?: string;
}
export interface MessageHeader {
  Name?: string;
  Value?: string;
}
export type ListOfMessageHeader = MessageHeader[];
export interface CampaignEmailMessage {
  Body?: string;
  FromAddress?: string;
  Headers?: MessageHeader[];
  HtmlBody?: string;
  Title?: string;
}
export type MessageType = "TRANSACTIONAL" | "PROMOTIONAL" | (string & {});
export interface CampaignSmsMessage {
  Body?: string;
  MessageType?: MessageType;
  OriginationNumber?: string;
  SenderId?: string;
  EntityId?: string;
  TemplateId?: string;
}
export type Alignment = "LEFT" | "CENTER" | "RIGHT" | (string & {});
export interface InAppMessageBodyConfig {
  Alignment?: Alignment;
  Body?: string;
  TextColor?: string;
}
export interface InAppMessageHeaderConfig {
  Alignment?: Alignment;
  Header?: string;
  TextColor?: string;
}
export type ButtonAction = "LINK" | "DEEP_LINK" | "CLOSE" | (string & {});
export interface OverrideButtonConfiguration {
  ButtonAction?: ButtonAction;
  Link?: string;
}
export interface DefaultButtonConfiguration {
  BackgroundColor?: string;
  BorderRadius?: number;
  ButtonAction?: ButtonAction;
  Link?: string;
  Text?: string;
  TextColor?: string;
}
export interface InAppMessageButton {
  Android?: OverrideButtonConfiguration;
  DefaultConfig?: DefaultButtonConfiguration;
  IOS?: OverrideButtonConfiguration;
  Web?: OverrideButtonConfiguration;
}
export interface InAppMessageContent {
  BackgroundColor?: string;
  BodyConfig?: InAppMessageBodyConfig;
  HeaderConfig?: InAppMessageHeaderConfig;
  ImageUrl?: string;
  PrimaryBtn?: InAppMessageButton;
  SecondaryBtn?: InAppMessageButton;
}
export type ListOfInAppMessageContent = InAppMessageContent[];
export type Layout =
  | "BOTTOM_BANNER"
  | "TOP_BANNER"
  | "OVERLAYS"
  | "MOBILE_FEED"
  | "MIDDLE_BANNER"
  | "CAROUSEL"
  | (string & {});
export interface CampaignInAppMessage {
  Body?: string;
  Content?: InAppMessageContent[];
  CustomConfig?: { [key: string]: string | undefined };
  Layout?: Layout;
}
export interface MessageConfiguration {
  ADMMessage?: Message;
  APNSMessage?: Message;
  BaiduMessage?: Message;
  CustomMessage?: CampaignCustomMessage;
  DefaultMessage?: Message;
  EmailMessage?: CampaignEmailMessage;
  GCMMessage?: Message;
  SMSMessage?: CampaignSmsMessage;
  InAppMessage?: CampaignInAppMessage;
}
export type AttributeType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEFORE"
  | "AFTER"
  | "ON"
  | "BETWEEN"
  | (string & {});
export type ListOf__string = string[];
export interface AttributeDimension {
  AttributeType?: AttributeType;
  Values?: string[];
}
export type MapOfAttributeDimension = { [key: string]: AttributeDimension | undefined };
export type DimensionType = "INCLUSIVE" | "EXCLUSIVE" | (string & {});
export interface SetDimension {
  DimensionType?: DimensionType;
  Values?: string[];
}
export interface MetricDimension {
  ComparisonOperator?: string;
  Value?: number;
}
export type MapOfMetricDimension = { [key: string]: MetricDimension | undefined };
export interface EventDimensions {
  Attributes?: { [key: string]: AttributeDimension | undefined };
  EventType?: SetDimension;
  Metrics?: { [key: string]: MetricDimension | undefined };
}
export type FilterType = "SYSTEM" | "ENDPOINT" | (string & {});
export interface CampaignEventFilter {
  Dimensions?: EventDimensions;
  FilterType?: FilterType;
}
export type Frequency =
  | "ONCE"
  | "HOURLY"
  | "DAILY"
  | "WEEKLY"
  | "MONTHLY"
  | "EVENT"
  | "IN_APP_EVENT"
  | (string & {});
export interface QuietTime {
  End?: string;
  Start?: string;
}
export interface Schedule {
  EndTime?: string;
  EventFilter?: CampaignEventFilter;
  Frequency?: Frequency;
  IsLocalTime?: boolean;
  QuietTime?: QuietTime;
  StartTime?: string;
  Timezone?: string;
}
export interface Template {
  Name?: string;
  Version?: string;
}
export interface TemplateConfiguration {
  EmailTemplate?: Template;
  PushTemplate?: Template;
  SMSTemplate?: Template;
  VoiceTemplate?: Template;
  InAppTemplate?: Template;
}
export interface WriteTreatmentResource {
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  MessageConfiguration?: MessageConfiguration;
  Schedule?: Schedule;
  SizePercent?: number;
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
}
export type ListOfWriteTreatmentResource = WriteTreatmentResource[];
export type Mode = "DELIVERY" | "FILTER" | (string & {});
export interface CampaignHook {
  LambdaFunctionName?: string;
  Mode?: Mode;
  WebUrl?: string;
}
export interface CampaignLimits {
  Daily?: number;
  MaximumDuration?: number;
  MessagesPerSecond?: number;
  Total?: number;
  Session?: number;
}
export interface WriteCampaignRequest {
  AdditionalTreatments?: WriteTreatmentResource[];
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  Description?: string;
  HoldoutPercent?: number;
  Hook?: CampaignHook;
  IsPaused?: boolean;
  Limits?: CampaignLimits;
  MessageConfiguration?: MessageConfiguration;
  Name?: string;
  Schedule?: Schedule;
  SegmentId?: string;
  SegmentVersion?: number;
  tags?: { [key: string]: string | undefined };
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
  Priority?: number;
}
export interface CreateCampaignRequest {
  ApplicationId: string;
  WriteCampaignRequest?: WriteCampaignRequest;
}
export type CampaignStatus =
  | "SCHEDULED"
  | "EXECUTING"
  | "PENDING_NEXT_RUN"
  | "COMPLETED"
  | "PAUSED"
  | "DELETED"
  | "INVALID"
  | (string & {});
export interface CampaignState {
  CampaignStatus?: CampaignStatus;
}
export interface TreatmentResource {
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  Id?: string;
  MessageConfiguration?: MessageConfiguration;
  Schedule?: Schedule;
  SizePercent?: number;
  State?: CampaignState;
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
}
export type ListOfTreatmentResource = TreatmentResource[];
export interface CampaignResponse {
  AdditionalTreatments?: TreatmentResource[];
  ApplicationId?: string;
  Arn?: string;
  CreationDate?: string;
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  DefaultState?: CampaignState;
  Description?: string;
  HoldoutPercent?: number;
  Hook?: CampaignHook;
  Id?: string;
  IsPaused?: boolean;
  LastModifiedDate?: string;
  Limits?: CampaignLimits;
  MessageConfiguration?: MessageConfiguration;
  Name?: string;
  Schedule?: Schedule;
  SegmentId?: string;
  SegmentVersion?: number;
  State?: CampaignState;
  tags?: { [key: string]: string | undefined };
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
  Version?: number;
  Priority?: number;
}
export interface CreateCampaignResponse {
  CampaignResponse: CampaignResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    SegmentId: string;
    SegmentVersion: number;
    AdditionalTreatments: (TreatmentResource & {
      Id: string;
      SizePercent: number;
      CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
      MessageConfiguration: MessageConfiguration & {
        InAppMessage: CampaignInAppMessage & {
          Content: (InAppMessageContent & {
            BodyConfig: InAppMessageBodyConfig & {
              Alignment: Alignment;
              Body: string;
              TextColor: string;
            };
            HeaderConfig: InAppMessageHeaderConfig & {
              Alignment: Alignment;
              Header: string;
              TextColor: string;
            };
            PrimaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
            SecondaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
          })[];
        };
      };
      Schedule: Schedule & {
        StartTime: string;
        EventFilter: CampaignEventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
    })[];
    CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
    MessageConfiguration: MessageConfiguration & {
      InAppMessage: CampaignInAppMessage & {
        Content: (InAppMessageContent & {
          BodyConfig: InAppMessageBodyConfig & {
            Alignment: Alignment;
            Body: string;
            TextColor: string;
          };
          HeaderConfig: InAppMessageHeaderConfig & {
            Alignment: Alignment;
            Header: string;
            TextColor: string;
          };
          PrimaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
          SecondaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
        })[];
      };
    };
    Schedule: Schedule & {
      StartTime: string;
      EventFilter: CampaignEventFilter & {
        Dimensions: EventDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          EventType: SetDimension & { Values: ListOf__string };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
        };
        FilterType: FilterType;
      };
    };
  };
}
export interface EmailTemplateRequest {
  DefaultSubstitutions?: string;
  HtmlPart?: string;
  RecommenderId?: string;
  Subject?: string;
  Headers?: MessageHeader[];
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
  TextPart?: string;
}
export interface CreateEmailTemplateRequest {
  EmailTemplateRequest?: EmailTemplateRequest;
  TemplateName: string;
}
export interface CreateTemplateMessageBody {
  Arn?: string;
  Message?: string;
  RequestID?: string;
}
export interface CreateEmailTemplateResponse {
  CreateTemplateMessageBody: CreateTemplateMessageBody;
}
export interface ExportJobRequest {
  RoleArn?: string;
  S3UrlPrefix?: string;
  SegmentId?: string;
  SegmentVersion?: number;
}
export interface CreateExportJobRequest {
  ApplicationId: string;
  ExportJobRequest?: ExportJobRequest;
}
export interface ExportJobResource {
  RoleArn?: string;
  S3UrlPrefix?: string;
  SegmentId?: string;
  SegmentVersion?: number;
}
export type JobStatus =
  | "CREATED"
  | "PREPARING_FOR_INITIALIZATION"
  | "INITIALIZING"
  | "PROCESSING"
  | "PENDING_JOB"
  | "COMPLETING"
  | "COMPLETED"
  | "FAILING"
  | "FAILED"
  | (string & {});
export interface ExportJobResponse {
  ApplicationId?: string;
  CompletedPieces?: number;
  CompletionDate?: string;
  CreationDate?: string;
  Definition?: ExportJobResource;
  FailedPieces?: number;
  Failures?: string[];
  Id?: string;
  JobStatus?: JobStatus;
  TotalFailures?: number;
  TotalPieces?: number;
  TotalProcessed?: number;
  Type?: string;
}
export interface CreateExportJobResponse {
  ExportJobResponse: ExportJobResponse & {
    ApplicationId: string;
    CreationDate: string;
    Definition: ExportJobResource & { RoleArn: string; S3UrlPrefix: string };
    Id: string;
    JobStatus: JobStatus;
    Type: string;
  };
}
export type Format = "CSV" | "JSON" | (string & {});
export interface ImportJobRequest {
  DefineSegment?: boolean;
  ExternalId?: string;
  Format?: Format;
  RegisterEndpoints?: boolean;
  RoleArn?: string;
  S3Url?: string;
  SegmentId?: string;
  SegmentName?: string;
}
export interface CreateImportJobRequest {
  ApplicationId: string;
  ImportJobRequest?: ImportJobRequest;
}
export interface ImportJobResource {
  DefineSegment?: boolean;
  ExternalId?: string;
  Format?: Format;
  RegisterEndpoints?: boolean;
  RoleArn?: string;
  S3Url?: string;
  SegmentId?: string;
  SegmentName?: string;
}
export interface ImportJobResponse {
  ApplicationId?: string;
  CompletedPieces?: number;
  CompletionDate?: string;
  CreationDate?: string;
  Definition?: ImportJobResource;
  FailedPieces?: number;
  Failures?: string[];
  Id?: string;
  JobStatus?: JobStatus;
  TotalFailures?: number;
  TotalPieces?: number;
  TotalProcessed?: number;
  Type?: string;
}
export interface CreateImportJobResponse {
  ImportJobResponse: ImportJobResponse & {
    ApplicationId: string;
    CreationDate: string;
    Definition: ImportJobResource & { Format: Format; RoleArn: string; S3Url: string };
    Id: string;
    JobStatus: JobStatus;
    Type: string;
  };
}
export interface InAppTemplateRequest {
  Content?: InAppMessageContent[];
  CustomConfig?: { [key: string]: string | undefined };
  Layout?: Layout;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
}
export interface CreateInAppTemplateRequest {
  InAppTemplateRequest?: InAppTemplateRequest;
  TemplateName: string;
}
export interface TemplateCreateMessageBody {
  Arn?: string;
  Message?: string;
  RequestID?: string;
}
export interface CreateInAppTemplateResponse {
  TemplateCreateMessageBody: TemplateCreateMessageBody;
}
export interface JourneyCustomMessage {
  Data?: string;
}
export interface CustomMessageActivity {
  DeliveryUri?: string;
  EndpointTypes?: __EndpointTypesElement[];
  MessageConfig?: JourneyCustomMessage;
  NextActivity?: string;
  TemplateName?: string;
  TemplateVersion?: string;
}
export interface EventCondition {
  Dimensions?: EventDimensions;
  MessageActivity?: string;
}
export interface SegmentCondition {
  SegmentId?: string;
}
export type Duration = "HR_24" | "DAY_7" | "DAY_14" | "DAY_30" | (string & {});
export type RecencyType = "ACTIVE" | "INACTIVE" | (string & {});
export interface RecencyDimension {
  Duration?: Duration;
  RecencyType?: RecencyType;
}
export interface SegmentBehaviors {
  Recency?: RecencyDimension;
}
export interface SegmentDemographics {
  AppVersion?: SetDimension;
  Channel?: SetDimension;
  DeviceType?: SetDimension;
  Make?: SetDimension;
  Model?: SetDimension;
  Platform?: SetDimension;
}
export interface GPSCoordinates {
  Latitude?: number;
  Longitude?: number;
}
export interface GPSPointDimension {
  Coordinates?: GPSCoordinates;
  RangeInKilometers?: number;
}
export interface SegmentLocation {
  Country?: SetDimension;
  GPSPoint?: GPSPointDimension;
}
export interface SegmentDimensions {
  Attributes?: { [key: string]: AttributeDimension | undefined };
  Behavior?: SegmentBehaviors;
  Demographic?: SegmentDemographics;
  Location?: SegmentLocation;
  Metrics?: { [key: string]: MetricDimension | undefined };
  UserAttributes?: { [key: string]: AttributeDimension | undefined };
}
export interface SimpleCondition {
  EventCondition?: EventCondition;
  SegmentCondition?: SegmentCondition;
  SegmentDimensions?: SegmentDimensions;
}
export type ListOfSimpleCondition = SimpleCondition[];
export type Operator = "ALL" | "ANY" | (string & {});
export interface Condition {
  Conditions?: SimpleCondition[];
  Operator?: Operator;
}
export interface WaitTime {
  WaitFor?: string;
  WaitUntil?: string;
}
export interface ConditionalSplitActivity {
  Condition?: Condition;
  EvaluationWaitTime?: WaitTime;
  FalseActivity?: string;
  TrueActivity?: string;
}
export interface JourneyEmailMessage {
  FromAddress?: string;
}
export interface EmailMessageActivity {
  MessageConfig?: JourneyEmailMessage;
  NextActivity?: string;
  TemplateName?: string;
  TemplateVersion?: string;
}
export interface HoldoutActivity {
  NextActivity?: string;
  Percentage?: number;
}
export interface MultiConditionalBranch {
  Condition?: SimpleCondition;
  NextActivity?: string;
}
export type ListOfMultiConditionalBranch = MultiConditionalBranch[];
export interface MultiConditionalSplitActivity {
  Branches?: MultiConditionalBranch[];
  DefaultActivity?: string;
  EvaluationWaitTime?: WaitTime;
}
export interface JourneyPushMessage {
  TimeToLive?: string;
}
export interface PushMessageActivity {
  MessageConfig?: JourneyPushMessage;
  NextActivity?: string;
  TemplateName?: string;
  TemplateVersion?: string;
}
export interface RandomSplitEntry {
  NextActivity?: string;
  Percentage?: number;
}
export type ListOfRandomSplitEntry = RandomSplitEntry[];
export interface RandomSplitActivity {
  Branches?: RandomSplitEntry[];
}
export interface JourneySMSMessage {
  MessageType?: MessageType;
  OriginationNumber?: string;
  SenderId?: string;
  EntityId?: string;
  TemplateId?: string;
}
export interface SMSMessageActivity {
  MessageConfig?: JourneySMSMessage;
  NextActivity?: string;
  TemplateName?: string;
  TemplateVersion?: string;
}
export interface WaitActivity {
  NextActivity?: string;
  WaitTime?: WaitTime;
}
export interface ContactCenterActivity {
  NextActivity?: string;
}
export interface Activity {
  CUSTOM?: CustomMessageActivity;
  ConditionalSplit?: ConditionalSplitActivity;
  Description?: string;
  EMAIL?: EmailMessageActivity;
  Holdout?: HoldoutActivity;
  MultiCondition?: MultiConditionalSplitActivity;
  PUSH?: PushMessageActivity;
  RandomSplit?: RandomSplitActivity;
  SMS?: SMSMessageActivity;
  Wait?: WaitActivity;
  ContactCenter?: ContactCenterActivity;
}
export type MapOfActivity = { [key: string]: Activity | undefined };
export interface JourneyTimeframeCap {
  Cap?: number;
  Days?: number;
}
export interface JourneyLimits {
  DailyCap?: number;
  EndpointReentryCap?: number;
  MessagesPerSecond?: number;
  EndpointReentryInterval?: string;
  TimeframeCap?: JourneyTimeframeCap;
  TotalCap?: number;
}
export type __timestampIso8601 = Date;
export interface JourneySchedule {
  EndTime?: Date;
  StartTime?: Date;
  Timezone?: string;
}
export interface EventFilter {
  Dimensions?: EventDimensions;
  FilterType?: FilterType;
}
export interface EventStartCondition {
  EventFilter?: EventFilter;
  SegmentId?: string;
}
export interface StartCondition {
  Description?: string;
  EventStartCondition?: EventStartCondition;
  SegmentStartCondition?: SegmentCondition;
}
export type State =
  | "DRAFT"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED"
  | "CLOSED"
  | "PAUSED"
  | (string & {});
export interface JourneyChannelSettings {
  ConnectCampaignArn?: string;
  ConnectCampaignExecutionRoleArn?: string;
}
export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY"
  | (string & {});
export interface OpenHoursRule {
  StartTime?: string;
  EndTime?: string;
}
export type ListOfOpenHoursRules = OpenHoursRule[];
export type MapOfListOfOpenHoursRules = { [key in DayOfWeek]?: OpenHoursRule[] };
export interface OpenHours {
  EMAIL?: { [key: string]: OpenHoursRule[] | undefined };
  SMS?: { [key: string]: OpenHoursRule[] | undefined };
  PUSH?: { [key: string]: OpenHoursRule[] | undefined };
  VOICE?: { [key: string]: OpenHoursRule[] | undefined };
  CUSTOM?: { [key: string]: OpenHoursRule[] | undefined };
}
export interface ClosedDaysRule {
  Name?: string;
  StartDateTime?: string;
  EndDateTime?: string;
}
export type ListOfClosedDaysRules = ClosedDaysRule[];
export interface ClosedDays {
  EMAIL?: ClosedDaysRule[];
  SMS?: ClosedDaysRule[];
  PUSH?: ClosedDaysRule[];
  VOICE?: ClosedDaysRule[];
  CUSTOM?: ClosedDaysRule[];
}
export type __TimezoneEstimationMethodsElement = "PHONE_NUMBER" | "POSTAL_CODE" | (string & {});
const __TimezoneEstimationMethodsElement = S.String;

export type ListOf__TimezoneEstimationMethodsElement = __TimezoneEstimationMethodsElement[];
export interface WriteJourneyRequest {
  Activities?: { [key: string]: Activity | undefined };
  CreationDate?: string;
  LastModifiedDate?: string;
  Limits?: JourneyLimits;
  LocalTime?: boolean;
  Name?: string;
  QuietTime?: QuietTime;
  RefreshFrequency?: string;
  Schedule?: JourneySchedule;
  StartActivity?: string;
  StartCondition?: StartCondition;
  State?: State;
  WaitForQuietTime?: boolean;
  RefreshOnSegmentUpdate?: boolean;
  JourneyChannelSettings?: JourneyChannelSettings;
  SendingSchedule?: boolean;
  OpenHours?: OpenHours;
  ClosedDays?: ClosedDays;
  TimezoneEstimationMethods?: __TimezoneEstimationMethodsElement[];
}
export interface CreateJourneyRequest {
  ApplicationId: string;
  WriteJourneyRequest?: WriteJourneyRequest;
}
export interface JourneyResponse {
  Activities?: { [key: string]: Activity | undefined };
  ApplicationId?: string;
  CreationDate?: string;
  Id?: string;
  LastModifiedDate?: string;
  Limits?: JourneyLimits;
  LocalTime?: boolean;
  Name?: string;
  QuietTime?: QuietTime;
  RefreshFrequency?: string;
  Schedule?: JourneySchedule;
  StartActivity?: string;
  StartCondition?: StartCondition;
  State?: State;
  tags?: { [key: string]: string | undefined };
  WaitForQuietTime?: boolean;
  RefreshOnSegmentUpdate?: boolean;
  JourneyChannelSettings?: JourneyChannelSettings;
  SendingSchedule?: boolean;
  OpenHours?: OpenHours;
  ClosedDays?: ClosedDays;
  TimezoneEstimationMethods?: __TimezoneEstimationMethodsElement[];
}
export interface CreateJourneyResponse {
  JourneyResponse: JourneyResponse & {
    ApplicationId: string;
    Id: string;
    Name: string;
    Activities: {
      [key: string]:
        | (Activity & {
            ConditionalSplit: ConditionalSplitActivity & {
              Condition: Condition & {
                Conditions: (SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                })[];
              };
            };
            Holdout: HoldoutActivity & { Percentage: number };
            MultiCondition: MultiConditionalSplitActivity & {
              Branches: (MultiConditionalBranch & {
                Condition: SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                };
              })[];
            };
          })
        | undefined;
    };
    StartCondition: StartCondition & {
      EventStartCondition: EventStartCondition & {
        EventFilter: EventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
      SegmentStartCondition: SegmentCondition & { SegmentId: string };
    };
  };
}
export interface AndroidPushNotificationTemplate {
  Action?: Action;
  Body?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  RawContent?: string;
  SmallImageIconUrl?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
}
export interface APNSPushNotificationTemplate {
  Action?: Action;
  Body?: string;
  MediaUrl?: string;
  RawContent?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
}
export interface DefaultPushNotificationTemplate {
  Action?: Action;
  Body?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
}
export interface PushNotificationTemplateRequest {
  ADM?: AndroidPushNotificationTemplate;
  APNS?: APNSPushNotificationTemplate;
  Baidu?: AndroidPushNotificationTemplate;
  Default?: DefaultPushNotificationTemplate;
  DefaultSubstitutions?: string;
  GCM?: AndroidPushNotificationTemplate;
  RecommenderId?: string;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
}
export interface CreatePushTemplateRequest {
  PushNotificationTemplateRequest?: PushNotificationTemplateRequest;
  TemplateName: string;
}
export interface CreatePushTemplateResponse {
  CreateTemplateMessageBody: CreateTemplateMessageBody;
}
export interface CreateRecommenderConfigurationShape {
  Attributes?: { [key: string]: string | undefined };
  Description?: string;
  Name?: string;
  RecommendationProviderIdType?: string;
  RecommendationProviderRoleArn?: string;
  RecommendationProviderUri?: string;
  RecommendationTransformerUri?: string;
  RecommendationsDisplayName?: string;
  RecommendationsPerMessage?: number;
}
export interface CreateRecommenderConfigurationRequest {
  CreateRecommenderConfiguration?: CreateRecommenderConfigurationShape;
}
export interface RecommenderConfigurationResponse {
  Attributes?: { [key: string]: string | undefined };
  CreationDate?: string;
  Description?: string;
  Id?: string;
  LastModifiedDate?: string;
  Name?: string;
  RecommendationProviderIdType?: string;
  RecommendationProviderRoleArn?: string;
  RecommendationProviderUri?: string;
  RecommendationTransformerUri?: string;
  RecommendationsDisplayName?: string;
  RecommendationsPerMessage?: number;
}
export interface CreateRecommenderConfigurationResponse {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse & {
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    RecommendationProviderRoleArn: string;
    RecommendationProviderUri: string;
  };
}
export type ListOfSegmentDimensions = SegmentDimensions[];
export interface SegmentReference {
  Id?: string;
  Version?: number;
}
export type ListOfSegmentReference = SegmentReference[];
export type SourceType = "ALL" | "ANY" | "NONE" | (string & {});
export type Type = "ALL" | "ANY" | "NONE" | (string & {});
export interface SegmentGroup {
  Dimensions?: SegmentDimensions[];
  SourceSegments?: SegmentReference[];
  SourceType?: SourceType;
  Type?: Type;
}
export type ListOfSegmentGroup = SegmentGroup[];
export type Include = "ALL" | "ANY" | "NONE" | (string & {});
export interface SegmentGroupList {
  Groups?: SegmentGroup[];
  Include?: Include;
}
export interface WriteSegmentRequest {
  Dimensions?: SegmentDimensions;
  Name?: string;
  SegmentGroups?: SegmentGroupList;
  tags?: { [key: string]: string | undefined };
}
export interface CreateSegmentRequest {
  ApplicationId: string;
  WriteSegmentRequest?: WriteSegmentRequest;
}
export type MapOf__integer = { [key: string]: number | undefined };
export interface SegmentImportResource {
  ChannelCounts?: { [key: string]: number | undefined };
  ExternalId?: string;
  Format?: Format;
  RoleArn?: string;
  S3Url?: string;
  Size?: number;
}
export type SegmentType = "DIMENSIONAL" | "IMPORT" | (string & {});
export interface SegmentResponse {
  ApplicationId?: string;
  Arn?: string;
  CreationDate?: string;
  Dimensions?: SegmentDimensions;
  Id?: string;
  ImportDefinition?: SegmentImportResource;
  LastModifiedDate?: string;
  Name?: string;
  SegmentGroups?: SegmentGroupList;
  SegmentType?: SegmentType;
  tags?: { [key: string]: string | undefined };
  Version?: number;
}
export interface CreateSegmentResponse {
  SegmentResponse: SegmentResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    SegmentType: SegmentType;
    Dimensions: SegmentDimensions & {
      Attributes: { [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined };
      Behavior: SegmentBehaviors & {
        Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
      };
      Demographic: SegmentDemographics & {
        AppVersion: SetDimension & { Values: ListOf__string };
        Channel: SetDimension & { Values: ListOf__string };
        DeviceType: SetDimension & { Values: ListOf__string };
        Make: SetDimension & { Values: ListOf__string };
        Model: SetDimension & { Values: ListOf__string };
        Platform: SetDimension & { Values: ListOf__string };
      };
      Location: SegmentLocation & {
        Country: SetDimension & { Values: ListOf__string };
        GPSPoint: GPSPointDimension & {
          Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
        };
      };
      Metrics: {
        [key: string]:
          | (MetricDimension & { ComparisonOperator: string; Value: number })
          | undefined;
      };
      UserAttributes: {
        [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
      };
    };
    ImportDefinition: SegmentImportResource & {
      ExternalId: string;
      Format: Format;
      RoleArn: string;
      S3Url: string;
      Size: number;
    };
    SegmentGroups: SegmentGroupList & {
      Groups: (SegmentGroup & {
        Dimensions: (SegmentDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          Behavior: SegmentBehaviors & {
            Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
          };
          Demographic: SegmentDemographics & {
            AppVersion: SetDimension & { Values: ListOf__string };
            Channel: SetDimension & { Values: ListOf__string };
            DeviceType: SetDimension & { Values: ListOf__string };
            Make: SetDimension & { Values: ListOf__string };
            Model: SetDimension & { Values: ListOf__string };
            Platform: SetDimension & { Values: ListOf__string };
          };
          Location: SegmentLocation & {
            Country: SetDimension & { Values: ListOf__string };
            GPSPoint: GPSPointDimension & {
              Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
            };
          };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
          UserAttributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
        })[];
        SourceSegments: (SegmentReference & { Id: string })[];
      })[];
    };
  };
}
export interface SMSTemplateRequest {
  Body?: string;
  DefaultSubstitutions?: string;
  RecommenderId?: string;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
}
export interface CreateSmsTemplateRequest {
  SMSTemplateRequest?: SMSTemplateRequest;
  TemplateName: string;
}
export interface CreateSmsTemplateResponse {
  CreateTemplateMessageBody: CreateTemplateMessageBody;
}
export interface VoiceTemplateRequest {
  Body?: string;
  DefaultSubstitutions?: string;
  LanguageCode?: string;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
  VoiceId?: string;
}
export interface CreateVoiceTemplateRequest {
  TemplateName: string;
  VoiceTemplateRequest?: VoiceTemplateRequest;
}
export interface CreateVoiceTemplateResponse {
  CreateTemplateMessageBody: CreateTemplateMessageBody;
}
export interface DeleteAdmChannelRequest {
  ApplicationId: string;
}
export interface ADMChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  Version?: number;
}
export interface DeleteAdmChannelResponse {
  ADMChannelResponse: ADMChannelResponse & { Platform: string };
}
export interface DeleteApnsChannelRequest {
  ApplicationId: string;
}
export interface APNSChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasTokenKey?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  Version?: number;
}
export interface DeleteApnsChannelResponse {
  APNSChannelResponse: APNSChannelResponse & { Platform: string };
}
export interface DeleteApnsSandboxChannelRequest {
  ApplicationId: string;
}
export interface APNSSandboxChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasTokenKey?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  Version?: number;
}
export interface DeleteApnsSandboxChannelResponse {
  APNSSandboxChannelResponse: APNSSandboxChannelResponse & { Platform: string };
}
export interface DeleteApnsVoipChannelRequest {
  ApplicationId: string;
}
export interface APNSVoipChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasTokenKey?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  Version?: number;
}
export interface DeleteApnsVoipChannelResponse {
  APNSVoipChannelResponse: APNSVoipChannelResponse & { Platform: string };
}
export interface DeleteApnsVoipSandboxChannelRequest {
  ApplicationId: string;
}
export interface APNSVoipSandboxChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasTokenKey?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  Version?: number;
}
export interface DeleteApnsVoipSandboxChannelResponse {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse & { Platform: string };
}
export interface DeleteAppRequest {
  ApplicationId: string;
}
export interface DeleteAppResponse {
  ApplicationResponse: ApplicationResponse & { Arn: string; Id: string; Name: string };
}
export interface DeleteBaiduChannelRequest {
  ApplicationId: string;
}
export interface BaiduChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Credential?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  Version?: number;
}
export interface DeleteBaiduChannelResponse {
  BaiduChannelResponse: BaiduChannelResponse & { Credential: string; Platform: string };
}
export interface DeleteCampaignRequest {
  ApplicationId: string;
  CampaignId: string;
}
export interface DeleteCampaignResponse {
  CampaignResponse: CampaignResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    SegmentId: string;
    SegmentVersion: number;
    AdditionalTreatments: (TreatmentResource & {
      Id: string;
      SizePercent: number;
      CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
      MessageConfiguration: MessageConfiguration & {
        InAppMessage: CampaignInAppMessage & {
          Content: (InAppMessageContent & {
            BodyConfig: InAppMessageBodyConfig & {
              Alignment: Alignment;
              Body: string;
              TextColor: string;
            };
            HeaderConfig: InAppMessageHeaderConfig & {
              Alignment: Alignment;
              Header: string;
              TextColor: string;
            };
            PrimaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
            SecondaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
          })[];
        };
      };
      Schedule: Schedule & {
        StartTime: string;
        EventFilter: CampaignEventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
    })[];
    CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
    MessageConfiguration: MessageConfiguration & {
      InAppMessage: CampaignInAppMessage & {
        Content: (InAppMessageContent & {
          BodyConfig: InAppMessageBodyConfig & {
            Alignment: Alignment;
            Body: string;
            TextColor: string;
          };
          HeaderConfig: InAppMessageHeaderConfig & {
            Alignment: Alignment;
            Header: string;
            TextColor: string;
          };
          PrimaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
          SecondaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
        })[];
      };
    };
    Schedule: Schedule & {
      StartTime: string;
      EventFilter: CampaignEventFilter & {
        Dimensions: EventDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          EventType: SetDimension & { Values: ListOf__string };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
        };
        FilterType: FilterType;
      };
    };
  };
}
export interface DeleteEmailChannelRequest {
  ApplicationId: string;
}
export interface EmailChannelResponse {
  ApplicationId?: string;
  ConfigurationSet?: string;
  CreationDate?: string;
  Enabled?: boolean;
  FromAddress?: string;
  HasCredential?: boolean;
  Id?: string;
  Identity?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  MessagesPerSecond?: number;
  Platform?: string;
  RoleArn?: string;
  OrchestrationSendingRoleArn?: string;
  Version?: number;
}
export interface DeleteEmailChannelResponse {
  EmailChannelResponse: EmailChannelResponse & { Platform: string };
}
export interface DeleteEmailTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface MessageBody {
  Message?: string;
  RequestID?: string;
}
export interface DeleteEmailTemplateResponse {
  MessageBody: MessageBody;
}
export interface DeleteEndpointRequest {
  ApplicationId: string;
  EndpointId: string;
}
export type MapOfListOf__string = { [key: string]: string[] | undefined };
export type ChannelType =
  | "PUSH"
  | "GCM"
  | "APNS"
  | "APNS_SANDBOX"
  | "APNS_VOIP"
  | "APNS_VOIP_SANDBOX"
  | "ADM"
  | "SMS"
  | "VOICE"
  | "EMAIL"
  | "BAIDU"
  | "CUSTOM"
  | "IN_APP"
  | (string & {});
export interface EndpointDemographic {
  AppVersion?: string;
  Locale?: string;
  Make?: string;
  Model?: string;
  ModelVersion?: string;
  Platform?: string;
  PlatformVersion?: string;
  Timezone?: string;
}
export interface EndpointLocation {
  City?: string;
  Country?: string;
  Latitude?: number;
  Longitude?: number;
  PostalCode?: string;
  Region?: string;
}
export type MapOf__double = { [key: string]: number | undefined };
export interface EndpointUser {
  UserAttributes?: { [key: string]: string[] | undefined };
  UserId?: string;
}
export interface EndpointResponse {
  Address?: string;
  ApplicationId?: string;
  Attributes?: { [key: string]: string[] | undefined };
  ChannelType?: ChannelType;
  CohortId?: string;
  CreationDate?: string;
  Demographic?: EndpointDemographic;
  EffectiveDate?: string;
  EndpointStatus?: string;
  Id?: string;
  Location?: EndpointLocation;
  Metrics?: { [key: string]: number | undefined };
  OptOut?: string;
  RequestId?: string;
  User?: EndpointUser;
}
export interface DeleteEndpointResponse {
  EndpointResponse: EndpointResponse;
}
export interface DeleteEventStreamRequest {
  ApplicationId: string;
}
export interface EventStream {
  ApplicationId?: string;
  DestinationStreamArn?: string;
  ExternalId?: string;
  LastModifiedDate?: string;
  LastUpdatedBy?: string;
  RoleArn?: string;
}
export interface DeleteEventStreamResponse {
  EventStream: EventStream & {
    ApplicationId: string;
    DestinationStreamArn: string;
    RoleArn: string;
  };
}
export interface DeleteGcmChannelRequest {
  ApplicationId: string;
}
export interface GCMChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Credential?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasFcmServiceCredentials?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  Version?: number;
}
export interface DeleteGcmChannelResponse {
  GCMChannelResponse: GCMChannelResponse & { Platform: string };
}
export interface DeleteInAppTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeleteInAppTemplateResponse {
  MessageBody: MessageBody;
}
export interface DeleteJourneyRequest {
  ApplicationId: string;
  JourneyId: string;
}
export interface DeleteJourneyResponse {
  JourneyResponse: JourneyResponse & {
    ApplicationId: string;
    Id: string;
    Name: string;
    Activities: {
      [key: string]:
        | (Activity & {
            ConditionalSplit: ConditionalSplitActivity & {
              Condition: Condition & {
                Conditions: (SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                })[];
              };
            };
            Holdout: HoldoutActivity & { Percentage: number };
            MultiCondition: MultiConditionalSplitActivity & {
              Branches: (MultiConditionalBranch & {
                Condition: SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                };
              })[];
            };
          })
        | undefined;
    };
    StartCondition: StartCondition & {
      EventStartCondition: EventStartCondition & {
        EventFilter: EventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
      SegmentStartCondition: SegmentCondition & { SegmentId: string };
    };
  };
}
export interface DeletePushTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeletePushTemplateResponse {
  MessageBody: MessageBody;
}
export interface DeleteRecommenderConfigurationRequest {
  RecommenderId: string;
}
export interface DeleteRecommenderConfigurationResponse {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse & {
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    RecommendationProviderRoleArn: string;
    RecommendationProviderUri: string;
  };
}
export interface DeleteSegmentRequest {
  ApplicationId: string;
  SegmentId: string;
}
export interface DeleteSegmentResponse {
  SegmentResponse: SegmentResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    SegmentType: SegmentType;
    Dimensions: SegmentDimensions & {
      Attributes: { [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined };
      Behavior: SegmentBehaviors & {
        Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
      };
      Demographic: SegmentDemographics & {
        AppVersion: SetDimension & { Values: ListOf__string };
        Channel: SetDimension & { Values: ListOf__string };
        DeviceType: SetDimension & { Values: ListOf__string };
        Make: SetDimension & { Values: ListOf__string };
        Model: SetDimension & { Values: ListOf__string };
        Platform: SetDimension & { Values: ListOf__string };
      };
      Location: SegmentLocation & {
        Country: SetDimension & { Values: ListOf__string };
        GPSPoint: GPSPointDimension & {
          Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
        };
      };
      Metrics: {
        [key: string]:
          | (MetricDimension & { ComparisonOperator: string; Value: number })
          | undefined;
      };
      UserAttributes: {
        [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
      };
    };
    ImportDefinition: SegmentImportResource & {
      ExternalId: string;
      Format: Format;
      RoleArn: string;
      S3Url: string;
      Size: number;
    };
    SegmentGroups: SegmentGroupList & {
      Groups: (SegmentGroup & {
        Dimensions: (SegmentDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          Behavior: SegmentBehaviors & {
            Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
          };
          Demographic: SegmentDemographics & {
            AppVersion: SetDimension & { Values: ListOf__string };
            Channel: SetDimension & { Values: ListOf__string };
            DeviceType: SetDimension & { Values: ListOf__string };
            Make: SetDimension & { Values: ListOf__string };
            Model: SetDimension & { Values: ListOf__string };
            Platform: SetDimension & { Values: ListOf__string };
          };
          Location: SegmentLocation & {
            Country: SetDimension & { Values: ListOf__string };
            GPSPoint: GPSPointDimension & {
              Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
            };
          };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
          UserAttributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
        })[];
        SourceSegments: (SegmentReference & { Id: string })[];
      })[];
    };
  };
}
export interface DeleteSmsChannelRequest {
  ApplicationId: string;
}
export interface SMSChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  PromotionalMessagesPerSecond?: number;
  SenderId?: string;
  ShortCode?: string;
  TransactionalMessagesPerSecond?: number;
  Version?: number;
}
export interface DeleteSmsChannelResponse {
  SMSChannelResponse: SMSChannelResponse & { Platform: string };
}
export interface DeleteSmsTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeleteSmsTemplateResponse {
  MessageBody: MessageBody;
}
export interface DeleteUserEndpointsRequest {
  ApplicationId: string;
  UserId: string;
}
export type ListOfEndpointResponse = EndpointResponse[];
export interface EndpointsResponse {
  Item?: EndpointResponse[];
}
export interface DeleteUserEndpointsResponse {
  EndpointsResponse: EndpointsResponse & { Item: ListOfEndpointResponse };
}
export interface DeleteVoiceChannelRequest {
  ApplicationId: string;
}
export interface VoiceChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform?: string;
  Version?: number;
}
export interface DeleteVoiceChannelResponse {
  VoiceChannelResponse: VoiceChannelResponse & { Platform: string };
}
export interface DeleteVoiceTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeleteVoiceTemplateResponse {
  MessageBody: MessageBody;
}
export interface GetAdmChannelRequest {
  ApplicationId: string;
}
export interface GetAdmChannelResponse {
  ADMChannelResponse: ADMChannelResponse & { Platform: string };
}
export interface GetApnsChannelRequest {
  ApplicationId: string;
}
export interface GetApnsChannelResponse {
  APNSChannelResponse: APNSChannelResponse & { Platform: string };
}
export interface GetApnsSandboxChannelRequest {
  ApplicationId: string;
}
export interface GetApnsSandboxChannelResponse {
  APNSSandboxChannelResponse: APNSSandboxChannelResponse & { Platform: string };
}
export interface GetApnsVoipChannelRequest {
  ApplicationId: string;
}
export interface GetApnsVoipChannelResponse {
  APNSVoipChannelResponse: APNSVoipChannelResponse & { Platform: string };
}
export interface GetApnsVoipSandboxChannelRequest {
  ApplicationId: string;
}
export interface GetApnsVoipSandboxChannelResponse {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse & { Platform: string };
}
export interface GetAppRequest {
  ApplicationId: string;
}
export interface GetAppResponse {
  ApplicationResponse: ApplicationResponse & { Arn: string; Id: string; Name: string };
}
export interface GetApplicationDateRangeKpiRequest {
  ApplicationId: string;
  EndTime?: Date;
  KpiName: string;
  NextToken?: string;
  PageSize?: string;
  StartTime?: Date;
}
export interface ResultRowValue {
  Key?: string;
  Type?: string;
  Value?: string;
}
export type ListOfResultRowValue = ResultRowValue[];
export interface ResultRow {
  GroupedBys?: ResultRowValue[];
  Values?: ResultRowValue[];
}
export type ListOfResultRow = ResultRow[];
export interface BaseKpiResult {
  Rows?: ResultRow[];
}
export interface ApplicationDateRangeKpiResponse {
  ApplicationId?: string;
  EndTime?: Date;
  KpiName?: string;
  KpiResult?: BaseKpiResult;
  NextToken?: string;
  StartTime?: Date;
}
export interface GetApplicationDateRangeKpiResponse {
  ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse & {
    ApplicationId: string;
    EndTime: __timestampIso8601;
    KpiName: string;
    KpiResult: BaseKpiResult & {
      Rows: (ResultRow & {
        GroupedBys: (ResultRowValue & { Key: string; Type: string; Value: string })[];
        Values: (ResultRowValue & { Key: string; Type: string; Value: string })[];
      })[];
    };
    StartTime: __timestampIso8601;
  };
}
export interface GetApplicationSettingsRequest {
  ApplicationId: string;
}
export interface ApplicationSettingsJourneyLimits {
  DailyCap?: number;
  TimeframeCap?: JourneyTimeframeCap;
  TotalCap?: number;
}
export interface ApplicationSettingsResource {
  ApplicationId?: string;
  CampaignHook?: CampaignHook;
  LastModifiedDate?: string;
  Limits?: CampaignLimits;
  QuietTime?: QuietTime;
  JourneyLimits?: ApplicationSettingsJourneyLimits;
}
export interface GetApplicationSettingsResponse {
  ApplicationSettingsResource: ApplicationSettingsResource & { ApplicationId: string };
}
export interface GetAppsRequest {
  PageSize?: string;
  Token?: string;
}
export type ListOfApplicationResponse = ApplicationResponse[];
export interface ApplicationsResponse {
  Item?: ApplicationResponse[];
  NextToken?: string;
}
export interface GetAppsResponse {
  ApplicationsResponse: ApplicationsResponse & {
    Item: (ApplicationResponse & { Arn: string; Id: string; Name: string })[];
  };
}
export interface GetBaiduChannelRequest {
  ApplicationId: string;
}
export interface GetBaiduChannelResponse {
  BaiduChannelResponse: BaiduChannelResponse & { Credential: string; Platform: string };
}
export interface GetCampaignRequest {
  ApplicationId: string;
  CampaignId: string;
}
export interface GetCampaignResponse {
  CampaignResponse: CampaignResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    SegmentId: string;
    SegmentVersion: number;
    AdditionalTreatments: (TreatmentResource & {
      Id: string;
      SizePercent: number;
      CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
      MessageConfiguration: MessageConfiguration & {
        InAppMessage: CampaignInAppMessage & {
          Content: (InAppMessageContent & {
            BodyConfig: InAppMessageBodyConfig & {
              Alignment: Alignment;
              Body: string;
              TextColor: string;
            };
            HeaderConfig: InAppMessageHeaderConfig & {
              Alignment: Alignment;
              Header: string;
              TextColor: string;
            };
            PrimaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
            SecondaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
          })[];
        };
      };
      Schedule: Schedule & {
        StartTime: string;
        EventFilter: CampaignEventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
    })[];
    CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
    MessageConfiguration: MessageConfiguration & {
      InAppMessage: CampaignInAppMessage & {
        Content: (InAppMessageContent & {
          BodyConfig: InAppMessageBodyConfig & {
            Alignment: Alignment;
            Body: string;
            TextColor: string;
          };
          HeaderConfig: InAppMessageHeaderConfig & {
            Alignment: Alignment;
            Header: string;
            TextColor: string;
          };
          PrimaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
          SecondaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
        })[];
      };
    };
    Schedule: Schedule & {
      StartTime: string;
      EventFilter: CampaignEventFilter & {
        Dimensions: EventDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          EventType: SetDimension & { Values: ListOf__string };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
        };
        FilterType: FilterType;
      };
    };
  };
}
export interface GetCampaignActivitiesRequest {
  ApplicationId: string;
  CampaignId: string;
  PageSize?: string;
  Token?: string;
}
export interface ActivityResponse {
  ApplicationId?: string;
  CampaignId?: string;
  End?: string;
  Id?: string;
  Result?: string;
  ScheduledStart?: string;
  Start?: string;
  State?: string;
  SuccessfulEndpointCount?: number;
  TimezonesCompletedCount?: number;
  TimezonesTotalCount?: number;
  TotalEndpointCount?: number;
  TreatmentId?: string;
  ExecutionMetrics?: { [key: string]: string | undefined };
}
export type ListOfActivityResponse = ActivityResponse[];
export interface ActivitiesResponse {
  Item?: ActivityResponse[];
  NextToken?: string;
}
export interface GetCampaignActivitiesResponse {
  ActivitiesResponse: ActivitiesResponse & {
    Item: (ActivityResponse & { ApplicationId: string; CampaignId: string; Id: string })[];
  };
}
export interface GetCampaignDateRangeKpiRequest {
  ApplicationId: string;
  CampaignId: string;
  EndTime?: Date;
  KpiName: string;
  NextToken?: string;
  PageSize?: string;
  StartTime?: Date;
}
export interface CampaignDateRangeKpiResponse {
  ApplicationId?: string;
  CampaignId?: string;
  EndTime?: Date;
  KpiName?: string;
  KpiResult?: BaseKpiResult;
  NextToken?: string;
  StartTime?: Date;
}
export interface GetCampaignDateRangeKpiResponse {
  CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse & {
    ApplicationId: string;
    CampaignId: string;
    EndTime: __timestampIso8601;
    KpiName: string;
    KpiResult: BaseKpiResult & {
      Rows: (ResultRow & {
        GroupedBys: (ResultRowValue & { Key: string; Type: string; Value: string })[];
        Values: (ResultRowValue & { Key: string; Type: string; Value: string })[];
      })[];
    };
    StartTime: __timestampIso8601;
  };
}
export interface GetCampaignsRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export type ListOfCampaignResponse = CampaignResponse[];
export interface CampaignsResponse {
  Item?: CampaignResponse[];
  NextToken?: string;
}
export interface GetCampaignsResponse {
  CampaignsResponse: CampaignsResponse & {
    Item: (CampaignResponse & {
      ApplicationId: string;
      Arn: string;
      CreationDate: string;
      Id: string;
      LastModifiedDate: string;
      SegmentId: string;
      SegmentVersion: number;
      AdditionalTreatments: (TreatmentResource & {
        Id: string;
        SizePercent: number;
        CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
        MessageConfiguration: MessageConfiguration & {
          InAppMessage: CampaignInAppMessage & {
            Content: (InAppMessageContent & {
              BodyConfig: InAppMessageBodyConfig & {
                Alignment: Alignment;
                Body: string;
                TextColor: string;
              };
              HeaderConfig: InAppMessageHeaderConfig & {
                Alignment: Alignment;
                Header: string;
                TextColor: string;
              };
              PrimaryBtn: InAppMessageButton & {
                Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
                DefaultConfig: DefaultButtonConfiguration & {
                  ButtonAction: ButtonAction;
                  Text: string;
                };
                IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
                Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              };
              SecondaryBtn: InAppMessageButton & {
                Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
                DefaultConfig: DefaultButtonConfiguration & {
                  ButtonAction: ButtonAction;
                  Text: string;
                };
                IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
                Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              };
            })[];
          };
        };
        Schedule: Schedule & {
          StartTime: string;
          EventFilter: CampaignEventFilter & {
            Dimensions: EventDimensions & {
              Attributes: {
                [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
              };
              EventType: SetDimension & { Values: ListOf__string };
              Metrics: {
                [key: string]:
                  | (MetricDimension & { ComparisonOperator: string; Value: number })
                  | undefined;
              };
            };
            FilterType: FilterType;
          };
        };
      })[];
      CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
      MessageConfiguration: MessageConfiguration & {
        InAppMessage: CampaignInAppMessage & {
          Content: (InAppMessageContent & {
            BodyConfig: InAppMessageBodyConfig & {
              Alignment: Alignment;
              Body: string;
              TextColor: string;
            };
            HeaderConfig: InAppMessageHeaderConfig & {
              Alignment: Alignment;
              Header: string;
              TextColor: string;
            };
            PrimaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
            SecondaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
          })[];
        };
      };
      Schedule: Schedule & {
        StartTime: string;
        EventFilter: CampaignEventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
    })[];
  };
}
export interface GetCampaignVersionRequest {
  ApplicationId: string;
  CampaignId: string;
  Version: string;
}
export interface GetCampaignVersionResponse {
  CampaignResponse: CampaignResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    SegmentId: string;
    SegmentVersion: number;
    AdditionalTreatments: (TreatmentResource & {
      Id: string;
      SizePercent: number;
      CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
      MessageConfiguration: MessageConfiguration & {
        InAppMessage: CampaignInAppMessage & {
          Content: (InAppMessageContent & {
            BodyConfig: InAppMessageBodyConfig & {
              Alignment: Alignment;
              Body: string;
              TextColor: string;
            };
            HeaderConfig: InAppMessageHeaderConfig & {
              Alignment: Alignment;
              Header: string;
              TextColor: string;
            };
            PrimaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
            SecondaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
          })[];
        };
      };
      Schedule: Schedule & {
        StartTime: string;
        EventFilter: CampaignEventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
    })[];
    CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
    MessageConfiguration: MessageConfiguration & {
      InAppMessage: CampaignInAppMessage & {
        Content: (InAppMessageContent & {
          BodyConfig: InAppMessageBodyConfig & {
            Alignment: Alignment;
            Body: string;
            TextColor: string;
          };
          HeaderConfig: InAppMessageHeaderConfig & {
            Alignment: Alignment;
            Header: string;
            TextColor: string;
          };
          PrimaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
          SecondaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
        })[];
      };
    };
    Schedule: Schedule & {
      StartTime: string;
      EventFilter: CampaignEventFilter & {
        Dimensions: EventDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          EventType: SetDimension & { Values: ListOf__string };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
        };
        FilterType: FilterType;
      };
    };
  };
}
export interface GetCampaignVersionsRequest {
  ApplicationId: string;
  CampaignId: string;
  PageSize?: string;
  Token?: string;
}
export interface GetCampaignVersionsResponse {
  CampaignsResponse: CampaignsResponse & {
    Item: (CampaignResponse & {
      ApplicationId: string;
      Arn: string;
      CreationDate: string;
      Id: string;
      LastModifiedDate: string;
      SegmentId: string;
      SegmentVersion: number;
      AdditionalTreatments: (TreatmentResource & {
        Id: string;
        SizePercent: number;
        CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
        MessageConfiguration: MessageConfiguration & {
          InAppMessage: CampaignInAppMessage & {
            Content: (InAppMessageContent & {
              BodyConfig: InAppMessageBodyConfig & {
                Alignment: Alignment;
                Body: string;
                TextColor: string;
              };
              HeaderConfig: InAppMessageHeaderConfig & {
                Alignment: Alignment;
                Header: string;
                TextColor: string;
              };
              PrimaryBtn: InAppMessageButton & {
                Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
                DefaultConfig: DefaultButtonConfiguration & {
                  ButtonAction: ButtonAction;
                  Text: string;
                };
                IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
                Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              };
              SecondaryBtn: InAppMessageButton & {
                Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
                DefaultConfig: DefaultButtonConfiguration & {
                  ButtonAction: ButtonAction;
                  Text: string;
                };
                IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
                Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              };
            })[];
          };
        };
        Schedule: Schedule & {
          StartTime: string;
          EventFilter: CampaignEventFilter & {
            Dimensions: EventDimensions & {
              Attributes: {
                [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
              };
              EventType: SetDimension & { Values: ListOf__string };
              Metrics: {
                [key: string]:
                  | (MetricDimension & { ComparisonOperator: string; Value: number })
                  | undefined;
              };
            };
            FilterType: FilterType;
          };
        };
      })[];
      CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
      MessageConfiguration: MessageConfiguration & {
        InAppMessage: CampaignInAppMessage & {
          Content: (InAppMessageContent & {
            BodyConfig: InAppMessageBodyConfig & {
              Alignment: Alignment;
              Body: string;
              TextColor: string;
            };
            HeaderConfig: InAppMessageHeaderConfig & {
              Alignment: Alignment;
              Header: string;
              TextColor: string;
            };
            PrimaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
            SecondaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
          })[];
        };
      };
      Schedule: Schedule & {
        StartTime: string;
        EventFilter: CampaignEventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
    })[];
  };
}
export interface GetChannelsRequest {
  ApplicationId: string;
}
export interface ChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Version?: number;
}
export type MapOfChannelResponse = { [key: string]: ChannelResponse | undefined };
export interface ChannelsResponse {
  Channels?: { [key: string]: ChannelResponse | undefined };
}
export interface GetChannelsResponse {
  ChannelsResponse: ChannelsResponse & { Channels: MapOfChannelResponse };
}
export interface GetEmailChannelRequest {
  ApplicationId: string;
}
export interface GetEmailChannelResponse {
  EmailChannelResponse: EmailChannelResponse & { Platform: string };
}
export interface GetEmailTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export type TemplateType = "EMAIL" | "SMS" | "VOICE" | "PUSH" | "INAPP" | (string & {});
export interface EmailTemplateResponse {
  Arn?: string;
  CreationDate?: string;
  DefaultSubstitutions?: string;
  HtmlPart?: string;
  LastModifiedDate?: string;
  RecommenderId?: string;
  Subject?: string;
  Headers?: MessageHeader[];
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
  TemplateName?: string;
  TemplateType?: TemplateType;
  TextPart?: string;
  Version?: string;
}
export interface GetEmailTemplateResponse {
  EmailTemplateResponse: EmailTemplateResponse & {
    CreationDate: string;
    LastModifiedDate: string;
    TemplateName: string;
    TemplateType: TemplateType;
  };
}
export interface GetEndpointRequest {
  ApplicationId: string;
  EndpointId: string;
}
export interface GetEndpointResponse {
  EndpointResponse: EndpointResponse;
}
export interface GetEventStreamRequest {
  ApplicationId: string;
}
export interface GetEventStreamResponse {
  EventStream: EventStream & {
    ApplicationId: string;
    DestinationStreamArn: string;
    RoleArn: string;
  };
}
export interface GetExportJobRequest {
  ApplicationId: string;
  JobId: string;
}
export interface GetExportJobResponse {
  ExportJobResponse: ExportJobResponse & {
    ApplicationId: string;
    CreationDate: string;
    Definition: ExportJobResource & { RoleArn: string; S3UrlPrefix: string };
    Id: string;
    JobStatus: JobStatus;
    Type: string;
  };
}
export interface GetExportJobsRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export type ListOfExportJobResponse = ExportJobResponse[];
export interface ExportJobsResponse {
  Item?: ExportJobResponse[];
  NextToken?: string;
}
export interface GetExportJobsResponse {
  ExportJobsResponse: ExportJobsResponse & {
    Item: (ExportJobResponse & {
      ApplicationId: string;
      CreationDate: string;
      Definition: ExportJobResource & { RoleArn: string; S3UrlPrefix: string };
      Id: string;
      JobStatus: JobStatus;
      Type: string;
    })[];
  };
}
export interface GetGcmChannelRequest {
  ApplicationId: string;
}
export interface GetGcmChannelResponse {
  GCMChannelResponse: GCMChannelResponse & { Platform: string };
}
export interface GetImportJobRequest {
  ApplicationId: string;
  JobId: string;
}
export interface GetImportJobResponse {
  ImportJobResponse: ImportJobResponse & {
    ApplicationId: string;
    CreationDate: string;
    Definition: ImportJobResource & { Format: Format; RoleArn: string; S3Url: string };
    Id: string;
    JobStatus: JobStatus;
    Type: string;
  };
}
export interface GetImportJobsRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export type ListOfImportJobResponse = ImportJobResponse[];
export interface ImportJobsResponse {
  Item?: ImportJobResponse[];
  NextToken?: string;
}
export interface GetImportJobsResponse {
  ImportJobsResponse: ImportJobsResponse & {
    Item: (ImportJobResponse & {
      ApplicationId: string;
      CreationDate: string;
      Definition: ImportJobResource & { Format: Format; RoleArn: string; S3Url: string };
      Id: string;
      JobStatus: JobStatus;
      Type: string;
    })[];
  };
}
export interface GetInAppMessagesRequest {
  ApplicationId: string;
  EndpointId: string;
}
export interface InAppMessage {
  Content?: InAppMessageContent[];
  CustomConfig?: { [key: string]: string | undefined };
  Layout?: Layout;
}
export interface InAppCampaignSchedule {
  EndDate?: string;
  EventFilter?: CampaignEventFilter;
  QuietTime?: QuietTime;
}
export interface InAppMessageCampaign {
  CampaignId?: string;
  DailyCap?: number;
  InAppMessage?: InAppMessage;
  Priority?: number;
  Schedule?: InAppCampaignSchedule;
  SessionCap?: number;
  TotalCap?: number;
  TreatmentId?: string;
}
export type ListOfInAppMessageCampaign = InAppMessageCampaign[];
export interface InAppMessagesResponse {
  InAppMessageCampaigns?: InAppMessageCampaign[];
}
export interface GetInAppMessagesResponse {
  InAppMessagesResponse: InAppMessagesResponse & {
    InAppMessageCampaigns: (InAppMessageCampaign & {
      InAppMessage: InAppMessage & {
        Content: (InAppMessageContent & {
          BodyConfig: InAppMessageBodyConfig & {
            Alignment: Alignment;
            Body: string;
            TextColor: string;
          };
          HeaderConfig: InAppMessageHeaderConfig & {
            Alignment: Alignment;
            Header: string;
            TextColor: string;
          };
          PrimaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
          SecondaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
        })[];
      };
      Schedule: InAppCampaignSchedule & {
        EventFilter: CampaignEventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
    })[];
  };
}
export interface GetInAppTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface InAppTemplateResponse {
  Arn?: string;
  Content?: InAppMessageContent[];
  CreationDate?: string;
  CustomConfig?: { [key: string]: string | undefined };
  LastModifiedDate?: string;
  Layout?: Layout;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
  TemplateName?: string;
  TemplateType?: TemplateType;
  Version?: string;
}
export interface GetInAppTemplateResponse {
  InAppTemplateResponse: InAppTemplateResponse & {
    CreationDate: string;
    LastModifiedDate: string;
    TemplateName: string;
    TemplateType: TemplateType;
    Content: (InAppMessageContent & {
      BodyConfig: InAppMessageBodyConfig & {
        Alignment: Alignment;
        Body: string;
        TextColor: string;
      };
      HeaderConfig: InAppMessageHeaderConfig & {
        Alignment: Alignment;
        Header: string;
        TextColor: string;
      };
      PrimaryBtn: InAppMessageButton & {
        Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
        DefaultConfig: DefaultButtonConfiguration & { ButtonAction: ButtonAction; Text: string };
        IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
        Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
      };
      SecondaryBtn: InAppMessageButton & {
        Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
        DefaultConfig: DefaultButtonConfiguration & { ButtonAction: ButtonAction; Text: string };
        IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
        Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
      };
    })[];
  };
}
export interface GetJourneyRequest {
  ApplicationId: string;
  JourneyId: string;
}
export interface GetJourneyResponse {
  JourneyResponse: JourneyResponse & {
    ApplicationId: string;
    Id: string;
    Name: string;
    Activities: {
      [key: string]:
        | (Activity & {
            ConditionalSplit: ConditionalSplitActivity & {
              Condition: Condition & {
                Conditions: (SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                })[];
              };
            };
            Holdout: HoldoutActivity & { Percentage: number };
            MultiCondition: MultiConditionalSplitActivity & {
              Branches: (MultiConditionalBranch & {
                Condition: SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                };
              })[];
            };
          })
        | undefined;
    };
    StartCondition: StartCondition & {
      EventStartCondition: EventStartCondition & {
        EventFilter: EventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
      SegmentStartCondition: SegmentCondition & { SegmentId: string };
    };
  };
}
export interface GetJourneyDateRangeKpiRequest {
  ApplicationId: string;
  EndTime?: Date;
  JourneyId: string;
  KpiName: string;
  NextToken?: string;
  PageSize?: string;
  StartTime?: Date;
}
export interface JourneyDateRangeKpiResponse {
  ApplicationId?: string;
  EndTime?: Date;
  JourneyId?: string;
  KpiName?: string;
  KpiResult?: BaseKpiResult;
  NextToken?: string;
  StartTime?: Date;
}
export interface GetJourneyDateRangeKpiResponse {
  JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse & {
    ApplicationId: string;
    EndTime: __timestampIso8601;
    JourneyId: string;
    KpiName: string;
    KpiResult: BaseKpiResult & {
      Rows: (ResultRow & {
        GroupedBys: (ResultRowValue & { Key: string; Type: string; Value: string })[];
        Values: (ResultRowValue & { Key: string; Type: string; Value: string })[];
      })[];
    };
    StartTime: __timestampIso8601;
  };
}
export interface GetJourneyExecutionActivityMetricsRequest {
  ApplicationId: string;
  JourneyActivityId: string;
  JourneyId: string;
  NextToken?: string;
  PageSize?: string;
}
export interface JourneyExecutionActivityMetricsResponse {
  ActivityType?: string;
  ApplicationId?: string;
  JourneyActivityId?: string;
  JourneyId?: string;
  LastEvaluatedTime?: string;
  Metrics?: { [key: string]: string | undefined };
}
export interface GetJourneyExecutionActivityMetricsResponse {
  JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse & {
    ActivityType: string;
    ApplicationId: string;
    JourneyActivityId: string;
    JourneyId: string;
    LastEvaluatedTime: string;
    Metrics: MapOf__string;
  };
}
export interface GetJourneyExecutionMetricsRequest {
  ApplicationId: string;
  JourneyId: string;
  NextToken?: string;
  PageSize?: string;
}
export interface JourneyExecutionMetricsResponse {
  ApplicationId?: string;
  JourneyId?: string;
  LastEvaluatedTime?: string;
  Metrics?: { [key: string]: string | undefined };
}
export interface GetJourneyExecutionMetricsResponse {
  JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse & {
    ApplicationId: string;
    JourneyId: string;
    LastEvaluatedTime: string;
    Metrics: MapOf__string;
  };
}
export interface GetJourneyRunExecutionActivityMetricsRequest {
  ApplicationId: string;
  JourneyActivityId: string;
  JourneyId: string;
  NextToken?: string;
  PageSize?: string;
  RunId: string;
}
export interface JourneyRunExecutionActivityMetricsResponse {
  ActivityType?: string;
  ApplicationId?: string;
  JourneyActivityId?: string;
  JourneyId?: string;
  LastEvaluatedTime?: string;
  Metrics?: { [key: string]: string | undefined };
  RunId?: string;
}
export interface GetJourneyRunExecutionActivityMetricsResponse {
  JourneyRunExecutionActivityMetricsResponse: JourneyRunExecutionActivityMetricsResponse & {
    ActivityType: string;
    ApplicationId: string;
    JourneyActivityId: string;
    JourneyId: string;
    LastEvaluatedTime: string;
    Metrics: MapOf__string;
    RunId: string;
  };
}
export interface GetJourneyRunExecutionMetricsRequest {
  ApplicationId: string;
  JourneyId: string;
  NextToken?: string;
  PageSize?: string;
  RunId: string;
}
export interface JourneyRunExecutionMetricsResponse {
  ApplicationId?: string;
  JourneyId?: string;
  LastEvaluatedTime?: string;
  Metrics?: { [key: string]: string | undefined };
  RunId?: string;
}
export interface GetJourneyRunExecutionMetricsResponse {
  JourneyRunExecutionMetricsResponse: JourneyRunExecutionMetricsResponse & {
    ApplicationId: string;
    JourneyId: string;
    LastEvaluatedTime: string;
    Metrics: MapOf__string;
    RunId: string;
  };
}
export interface GetJourneyRunsRequest {
  ApplicationId: string;
  JourneyId: string;
  PageSize?: string;
  Token?: string;
}
export type JourneyRunStatus = "SCHEDULED" | "RUNNING" | "COMPLETED" | "CANCELLED" | (string & {});
export interface JourneyRunResponse {
  CreationTime?: string;
  LastUpdateTime?: string;
  RunId?: string;
  Status?: JourneyRunStatus;
}
export type ListOfJourneyRunResponse = JourneyRunResponse[];
export interface JourneyRunsResponse {
  Item?: JourneyRunResponse[];
  NextToken?: string;
}
export interface GetJourneyRunsResponse {
  JourneyRunsResponse: JourneyRunsResponse & {
    Item: (JourneyRunResponse & {
      CreationTime: string;
      LastUpdateTime: string;
      RunId: string;
      Status: JourneyRunStatus;
    })[];
  };
}
export interface GetPushTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface PushNotificationTemplateResponse {
  ADM?: AndroidPushNotificationTemplate;
  APNS?: APNSPushNotificationTemplate;
  Arn?: string;
  Baidu?: AndroidPushNotificationTemplate;
  CreationDate?: string;
  Default?: DefaultPushNotificationTemplate;
  DefaultSubstitutions?: string;
  GCM?: AndroidPushNotificationTemplate;
  LastModifiedDate?: string;
  RecommenderId?: string;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
  TemplateName?: string;
  TemplateType?: TemplateType;
  Version?: string;
}
export interface GetPushTemplateResponse {
  PushNotificationTemplateResponse: PushNotificationTemplateResponse & {
    CreationDate: string;
    LastModifiedDate: string;
    TemplateName: string;
    TemplateType: TemplateType;
  };
}
export interface GetRecommenderConfigurationRequest {
  RecommenderId: string;
}
export interface GetRecommenderConfigurationResponse {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse & {
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    RecommendationProviderRoleArn: string;
    RecommendationProviderUri: string;
  };
}
export interface GetRecommenderConfigurationsRequest {
  PageSize?: string;
  Token?: string;
}
export type ListOfRecommenderConfigurationResponse = RecommenderConfigurationResponse[];
export interface ListRecommenderConfigurationsResponse {
  Item?: RecommenderConfigurationResponse[];
  NextToken?: string;
}
export interface GetRecommenderConfigurationsResponse {
  ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse & {
    Item: (RecommenderConfigurationResponse & {
      CreationDate: string;
      Id: string;
      LastModifiedDate: string;
      RecommendationProviderRoleArn: string;
      RecommendationProviderUri: string;
    })[];
  };
}
export interface GetSegmentRequest {
  ApplicationId: string;
  SegmentId: string;
}
export interface GetSegmentResponse {
  SegmentResponse: SegmentResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    SegmentType: SegmentType;
    Dimensions: SegmentDimensions & {
      Attributes: { [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined };
      Behavior: SegmentBehaviors & {
        Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
      };
      Demographic: SegmentDemographics & {
        AppVersion: SetDimension & { Values: ListOf__string };
        Channel: SetDimension & { Values: ListOf__string };
        DeviceType: SetDimension & { Values: ListOf__string };
        Make: SetDimension & { Values: ListOf__string };
        Model: SetDimension & { Values: ListOf__string };
        Platform: SetDimension & { Values: ListOf__string };
      };
      Location: SegmentLocation & {
        Country: SetDimension & { Values: ListOf__string };
        GPSPoint: GPSPointDimension & {
          Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
        };
      };
      Metrics: {
        [key: string]:
          | (MetricDimension & { ComparisonOperator: string; Value: number })
          | undefined;
      };
      UserAttributes: {
        [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
      };
    };
    ImportDefinition: SegmentImportResource & {
      ExternalId: string;
      Format: Format;
      RoleArn: string;
      S3Url: string;
      Size: number;
    };
    SegmentGroups: SegmentGroupList & {
      Groups: (SegmentGroup & {
        Dimensions: (SegmentDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          Behavior: SegmentBehaviors & {
            Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
          };
          Demographic: SegmentDemographics & {
            AppVersion: SetDimension & { Values: ListOf__string };
            Channel: SetDimension & { Values: ListOf__string };
            DeviceType: SetDimension & { Values: ListOf__string };
            Make: SetDimension & { Values: ListOf__string };
            Model: SetDimension & { Values: ListOf__string };
            Platform: SetDimension & { Values: ListOf__string };
          };
          Location: SegmentLocation & {
            Country: SetDimension & { Values: ListOf__string };
            GPSPoint: GPSPointDimension & {
              Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
            };
          };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
          UserAttributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
        })[];
        SourceSegments: (SegmentReference & { Id: string })[];
      })[];
    };
  };
}
export interface GetSegmentExportJobsRequest {
  ApplicationId: string;
  PageSize?: string;
  SegmentId: string;
  Token?: string;
}
export interface GetSegmentExportJobsResponse {
  ExportJobsResponse: ExportJobsResponse & {
    Item: (ExportJobResponse & {
      ApplicationId: string;
      CreationDate: string;
      Definition: ExportJobResource & { RoleArn: string; S3UrlPrefix: string };
      Id: string;
      JobStatus: JobStatus;
      Type: string;
    })[];
  };
}
export interface GetSegmentImportJobsRequest {
  ApplicationId: string;
  PageSize?: string;
  SegmentId: string;
  Token?: string;
}
export interface GetSegmentImportJobsResponse {
  ImportJobsResponse: ImportJobsResponse & {
    Item: (ImportJobResponse & {
      ApplicationId: string;
      CreationDate: string;
      Definition: ImportJobResource & { Format: Format; RoleArn: string; S3Url: string };
      Id: string;
      JobStatus: JobStatus;
      Type: string;
    })[];
  };
}
export interface GetSegmentsRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export type ListOfSegmentResponse = SegmentResponse[];
export interface SegmentsResponse {
  Item?: SegmentResponse[];
  NextToken?: string;
}
export interface GetSegmentsResponse {
  SegmentsResponse: SegmentsResponse & {
    Item: (SegmentResponse & {
      ApplicationId: string;
      Arn: string;
      CreationDate: string;
      Id: string;
      SegmentType: SegmentType;
      Dimensions: SegmentDimensions & {
        Attributes: {
          [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
        };
        Behavior: SegmentBehaviors & {
          Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
        };
        Demographic: SegmentDemographics & {
          AppVersion: SetDimension & { Values: ListOf__string };
          Channel: SetDimension & { Values: ListOf__string };
          DeviceType: SetDimension & { Values: ListOf__string };
          Make: SetDimension & { Values: ListOf__string };
          Model: SetDimension & { Values: ListOf__string };
          Platform: SetDimension & { Values: ListOf__string };
        };
        Location: SegmentLocation & {
          Country: SetDimension & { Values: ListOf__string };
          GPSPoint: GPSPointDimension & {
            Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
          };
        };
        Metrics: {
          [key: string]:
            | (MetricDimension & { ComparisonOperator: string; Value: number })
            | undefined;
        };
        UserAttributes: {
          [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
        };
      };
      ImportDefinition: SegmentImportResource & {
        ExternalId: string;
        Format: Format;
        RoleArn: string;
        S3Url: string;
        Size: number;
      };
      SegmentGroups: SegmentGroupList & {
        Groups: (SegmentGroup & {
          Dimensions: (SegmentDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            Behavior: SegmentBehaviors & {
              Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
            };
            Demographic: SegmentDemographics & {
              AppVersion: SetDimension & { Values: ListOf__string };
              Channel: SetDimension & { Values: ListOf__string };
              DeviceType: SetDimension & { Values: ListOf__string };
              Make: SetDimension & { Values: ListOf__string };
              Model: SetDimension & { Values: ListOf__string };
              Platform: SetDimension & { Values: ListOf__string };
            };
            Location: SegmentLocation & {
              Country: SetDimension & { Values: ListOf__string };
              GPSPoint: GPSPointDimension & {
                Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
              };
            };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
            UserAttributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
          })[];
          SourceSegments: (SegmentReference & { Id: string })[];
        })[];
      };
    })[];
  };
}
export interface GetSegmentVersionRequest {
  ApplicationId: string;
  SegmentId: string;
  Version: string;
}
export interface GetSegmentVersionResponse {
  SegmentResponse: SegmentResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    SegmentType: SegmentType;
    Dimensions: SegmentDimensions & {
      Attributes: { [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined };
      Behavior: SegmentBehaviors & {
        Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
      };
      Demographic: SegmentDemographics & {
        AppVersion: SetDimension & { Values: ListOf__string };
        Channel: SetDimension & { Values: ListOf__string };
        DeviceType: SetDimension & { Values: ListOf__string };
        Make: SetDimension & { Values: ListOf__string };
        Model: SetDimension & { Values: ListOf__string };
        Platform: SetDimension & { Values: ListOf__string };
      };
      Location: SegmentLocation & {
        Country: SetDimension & { Values: ListOf__string };
        GPSPoint: GPSPointDimension & {
          Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
        };
      };
      Metrics: {
        [key: string]:
          | (MetricDimension & { ComparisonOperator: string; Value: number })
          | undefined;
      };
      UserAttributes: {
        [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
      };
    };
    ImportDefinition: SegmentImportResource & {
      ExternalId: string;
      Format: Format;
      RoleArn: string;
      S3Url: string;
      Size: number;
    };
    SegmentGroups: SegmentGroupList & {
      Groups: (SegmentGroup & {
        Dimensions: (SegmentDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          Behavior: SegmentBehaviors & {
            Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
          };
          Demographic: SegmentDemographics & {
            AppVersion: SetDimension & { Values: ListOf__string };
            Channel: SetDimension & { Values: ListOf__string };
            DeviceType: SetDimension & { Values: ListOf__string };
            Make: SetDimension & { Values: ListOf__string };
            Model: SetDimension & { Values: ListOf__string };
            Platform: SetDimension & { Values: ListOf__string };
          };
          Location: SegmentLocation & {
            Country: SetDimension & { Values: ListOf__string };
            GPSPoint: GPSPointDimension & {
              Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
            };
          };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
          UserAttributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
        })[];
        SourceSegments: (SegmentReference & { Id: string })[];
      })[];
    };
  };
}
export interface GetSegmentVersionsRequest {
  ApplicationId: string;
  PageSize?: string;
  SegmentId: string;
  Token?: string;
}
export interface GetSegmentVersionsResponse {
  SegmentsResponse: SegmentsResponse & {
    Item: (SegmentResponse & {
      ApplicationId: string;
      Arn: string;
      CreationDate: string;
      Id: string;
      SegmentType: SegmentType;
      Dimensions: SegmentDimensions & {
        Attributes: {
          [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
        };
        Behavior: SegmentBehaviors & {
          Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
        };
        Demographic: SegmentDemographics & {
          AppVersion: SetDimension & { Values: ListOf__string };
          Channel: SetDimension & { Values: ListOf__string };
          DeviceType: SetDimension & { Values: ListOf__string };
          Make: SetDimension & { Values: ListOf__string };
          Model: SetDimension & { Values: ListOf__string };
          Platform: SetDimension & { Values: ListOf__string };
        };
        Location: SegmentLocation & {
          Country: SetDimension & { Values: ListOf__string };
          GPSPoint: GPSPointDimension & {
            Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
          };
        };
        Metrics: {
          [key: string]:
            | (MetricDimension & { ComparisonOperator: string; Value: number })
            | undefined;
        };
        UserAttributes: {
          [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
        };
      };
      ImportDefinition: SegmentImportResource & {
        ExternalId: string;
        Format: Format;
        RoleArn: string;
        S3Url: string;
        Size: number;
      };
      SegmentGroups: SegmentGroupList & {
        Groups: (SegmentGroup & {
          Dimensions: (SegmentDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            Behavior: SegmentBehaviors & {
              Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
            };
            Demographic: SegmentDemographics & {
              AppVersion: SetDimension & { Values: ListOf__string };
              Channel: SetDimension & { Values: ListOf__string };
              DeviceType: SetDimension & { Values: ListOf__string };
              Make: SetDimension & { Values: ListOf__string };
              Model: SetDimension & { Values: ListOf__string };
              Platform: SetDimension & { Values: ListOf__string };
            };
            Location: SegmentLocation & {
              Country: SetDimension & { Values: ListOf__string };
              GPSPoint: GPSPointDimension & {
                Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
              };
            };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
            UserAttributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
          })[];
          SourceSegments: (SegmentReference & { Id: string })[];
        })[];
      };
    })[];
  };
}
export interface GetSmsChannelRequest {
  ApplicationId: string;
}
export interface GetSmsChannelResponse {
  SMSChannelResponse: SMSChannelResponse & { Platform: string };
}
export interface GetSmsTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface SMSTemplateResponse {
  Arn?: string;
  Body?: string;
  CreationDate?: string;
  DefaultSubstitutions?: string;
  LastModifiedDate?: string;
  RecommenderId?: string;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
  TemplateName?: string;
  TemplateType?: TemplateType;
  Version?: string;
}
export interface GetSmsTemplateResponse {
  SMSTemplateResponse: SMSTemplateResponse & {
    CreationDate: string;
    LastModifiedDate: string;
    TemplateName: string;
    TemplateType: TemplateType;
  };
}
export interface GetUserEndpointsRequest {
  ApplicationId: string;
  UserId: string;
}
export interface GetUserEndpointsResponse {
  EndpointsResponse: EndpointsResponse & { Item: ListOfEndpointResponse };
}
export interface GetVoiceChannelRequest {
  ApplicationId: string;
}
export interface GetVoiceChannelResponse {
  VoiceChannelResponse: VoiceChannelResponse & { Platform: string };
}
export interface GetVoiceTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface VoiceTemplateResponse {
  Arn?: string;
  Body?: string;
  CreationDate?: string;
  DefaultSubstitutions?: string;
  LanguageCode?: string;
  LastModifiedDate?: string;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
  TemplateName?: string;
  TemplateType?: TemplateType;
  Version?: string;
  VoiceId?: string;
}
export interface GetVoiceTemplateResponse {
  VoiceTemplateResponse: VoiceTemplateResponse & {
    CreationDate: string;
    LastModifiedDate: string;
    TemplateName: string;
    TemplateType: TemplateType;
  };
}
export interface ListJourneysRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export type ListOfJourneyResponse = JourneyResponse[];
export interface JourneysResponse {
  Item?: JourneyResponse[];
  NextToken?: string;
}
export interface ListJourneysResponse {
  JourneysResponse: JourneysResponse & {
    Item: (JourneyResponse & {
      ApplicationId: string;
      Id: string;
      Name: string;
      Activities: {
        [key: string]:
          | (Activity & {
              ConditionalSplit: ConditionalSplitActivity & {
                Condition: Condition & {
                  Conditions: (SimpleCondition & {
                    EventCondition: EventCondition & {
                      Dimensions: EventDimensions & {
                        Attributes: {
                          [key: string]:
                            | (AttributeDimension & { Values: ListOf__string })
                            | undefined;
                        };
                        EventType: SetDimension & { Values: ListOf__string };
                        Metrics: {
                          [key: string]:
                            | (MetricDimension & { ComparisonOperator: string; Value: number })
                            | undefined;
                        };
                      };
                    };
                    SegmentCondition: SegmentCondition & { SegmentId: string };
                    SegmentDimensions: SegmentDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      Behavior: SegmentBehaviors & {
                        Recency: RecencyDimension & {
                          Duration: Duration;
                          RecencyType: RecencyType;
                        };
                      };
                      Demographic: SegmentDemographics & {
                        AppVersion: SetDimension & { Values: ListOf__string };
                        Channel: SetDimension & { Values: ListOf__string };
                        DeviceType: SetDimension & { Values: ListOf__string };
                        Make: SetDimension & { Values: ListOf__string };
                        Model: SetDimension & { Values: ListOf__string };
                        Platform: SetDimension & { Values: ListOf__string };
                      };
                      Location: SegmentLocation & {
                        Country: SetDimension & { Values: ListOf__string };
                        GPSPoint: GPSPointDimension & {
                          Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                        };
                      };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                      UserAttributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                    };
                  })[];
                };
              };
              Holdout: HoldoutActivity & { Percentage: number };
              MultiCondition: MultiConditionalSplitActivity & {
                Branches: (MultiConditionalBranch & {
                  Condition: SimpleCondition & {
                    EventCondition: EventCondition & {
                      Dimensions: EventDimensions & {
                        Attributes: {
                          [key: string]:
                            | (AttributeDimension & { Values: ListOf__string })
                            | undefined;
                        };
                        EventType: SetDimension & { Values: ListOf__string };
                        Metrics: {
                          [key: string]:
                            | (MetricDimension & { ComparisonOperator: string; Value: number })
                            | undefined;
                        };
                      };
                    };
                    SegmentCondition: SegmentCondition & { SegmentId: string };
                    SegmentDimensions: SegmentDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      Behavior: SegmentBehaviors & {
                        Recency: RecencyDimension & {
                          Duration: Duration;
                          RecencyType: RecencyType;
                        };
                      };
                      Demographic: SegmentDemographics & {
                        AppVersion: SetDimension & { Values: ListOf__string };
                        Channel: SetDimension & { Values: ListOf__string };
                        DeviceType: SetDimension & { Values: ListOf__string };
                        Make: SetDimension & { Values: ListOf__string };
                        Model: SetDimension & { Values: ListOf__string };
                        Platform: SetDimension & { Values: ListOf__string };
                      };
                      Location: SegmentLocation & {
                        Country: SetDimension & { Values: ListOf__string };
                        GPSPoint: GPSPointDimension & {
                          Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                        };
                      };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                      UserAttributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                    };
                  };
                })[];
              };
            })
          | undefined;
      };
      StartCondition: StartCondition & {
        EventStartCondition: EventStartCondition & {
          EventFilter: EventFilter & {
            Dimensions: EventDimensions & {
              Attributes: {
                [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
              };
              EventType: SetDimension & { Values: ListOf__string };
              Metrics: {
                [key: string]:
                  | (MetricDimension & { ComparisonOperator: string; Value: number })
                  | undefined;
              };
            };
            FilterType: FilterType;
          };
        };
        SegmentStartCondition: SegmentCondition & { SegmentId: string };
      };
    })[];
  };
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface TagsModel {
  tags?: { [key: string]: string | undefined };
}
export interface ListTagsForResourceResponse {
  TagsModel: TagsModel & { tags: MapOf__string };
}
export interface ListTemplatesRequest {
  NextToken?: string;
  PageSize?: string;
  Prefix?: string;
  TemplateType?: string;
}
export interface TemplateResponse {
  Arn?: string;
  CreationDate?: string;
  DefaultSubstitutions?: string;
  LastModifiedDate?: string;
  tags?: { [key: string]: string | undefined };
  TemplateDescription?: string;
  TemplateName?: string;
  TemplateType?: TemplateType;
  Version?: string;
}
export type ListOfTemplateResponse = TemplateResponse[];
export interface TemplatesResponse {
  Item?: TemplateResponse[];
  NextToken?: string;
}
export interface ListTemplatesResponse {
  TemplatesResponse: TemplatesResponse & {
    Item: (TemplateResponse & {
      CreationDate: string;
      LastModifiedDate: string;
      TemplateName: string;
      TemplateType: TemplateType;
    })[];
  };
}
export interface ListTemplateVersionsRequest {
  NextToken?: string;
  PageSize?: string;
  TemplateName: string;
  TemplateType: string;
}
export interface TemplateVersionResponse {
  CreationDate?: string;
  DefaultSubstitutions?: string;
  LastModifiedDate?: string;
  TemplateDescription?: string;
  TemplateName?: string;
  TemplateType?: string;
  Version?: string;
}
export type ListOfTemplateVersionResponse = TemplateVersionResponse[];
export interface TemplateVersionsResponse {
  Item?: TemplateVersionResponse[];
  Message?: string;
  NextToken?: string;
  RequestID?: string;
}
export interface ListTemplateVersionsResponse {
  TemplateVersionsResponse: TemplateVersionsResponse & {
    Item: (TemplateVersionResponse & {
      CreationDate: string;
      LastModifiedDate: string;
      TemplateName: string;
      TemplateType: string;
    })[];
  };
}
export interface NumberValidateRequest {
  IsoCountryCode?: string;
  PhoneNumber?: string;
}
export interface PhoneNumberValidateRequest {
  NumberValidateRequest?: NumberValidateRequest;
}
export interface NumberValidateResponse {
  Carrier?: string;
  City?: string;
  CleansedPhoneNumberE164?: string;
  CleansedPhoneNumberNational?: string;
  Country?: string;
  CountryCodeIso2?: string;
  CountryCodeNumeric?: string;
  County?: string;
  OriginalCountryCodeIso2?: string;
  OriginalPhoneNumber?: string;
  PhoneType?: string;
  PhoneTypeCode?: number;
  Timezone?: string;
  ZipCode?: string;
}
export interface PhoneNumberValidateResponse {
  NumberValidateResponse: NumberValidateResponse;
}
export interface PublicEndpoint {
  Address?: string;
  Attributes?: { [key: string]: string[] | undefined };
  ChannelType?: ChannelType;
  Demographic?: EndpointDemographic;
  EffectiveDate?: string;
  EndpointStatus?: string;
  Location?: EndpointLocation;
  Metrics?: { [key: string]: number | undefined };
  OptOut?: string;
  RequestId?: string;
  User?: EndpointUser;
}
export interface Session {
  Duration?: number;
  Id?: string;
  StartTimestamp?: string;
  StopTimestamp?: string;
}
export interface Event {
  AppPackageName?: string;
  AppTitle?: string;
  AppVersionCode?: string;
  Attributes?: { [key: string]: string | undefined };
  ClientSdkVersion?: string;
  EventType?: string;
  Metrics?: { [key: string]: number | undefined };
  SdkName?: string;
  Session?: Session;
  Timestamp?: string;
}
export type MapOfEvent = { [key: string]: Event | undefined };
export interface EventsBatch {
  Endpoint?: PublicEndpoint;
  Events?: { [key: string]: Event | undefined };
}
export type MapOfEventsBatch = { [key: string]: EventsBatch | undefined };
export interface EventsRequest {
  BatchItem?: { [key: string]: EventsBatch | undefined };
}
export interface PutEventsRequest {
  ApplicationId: string;
  EventsRequest?: EventsRequest;
}
export interface EndpointItemResponse {
  Message?: string;
  StatusCode?: number;
}
export interface EventItemResponse {
  Message?: string;
  StatusCode?: number;
}
export type MapOfEventItemResponse = { [key: string]: EventItemResponse | undefined };
export interface ItemResponse {
  EndpointItemResponse?: EndpointItemResponse;
  EventsItemResponse?: { [key: string]: EventItemResponse | undefined };
}
export type MapOfItemResponse = { [key: string]: ItemResponse | undefined };
export interface EventsResponse {
  Results?: { [key: string]: ItemResponse | undefined };
}
export interface PutEventsResponse {
  EventsResponse: EventsResponse;
}
export interface WriteEventStream {
  DestinationStreamArn?: string;
  RoleArn?: string;
}
export interface PutEventStreamRequest {
  ApplicationId: string;
  WriteEventStream?: WriteEventStream;
}
export interface PutEventStreamResponse {
  EventStream: EventStream & {
    ApplicationId: string;
    DestinationStreamArn: string;
    RoleArn: string;
  };
}
export interface UpdateAttributesRequest {
  Blacklist?: string[];
}
export interface RemoveAttributesRequest {
  ApplicationId: string;
  AttributeType: string;
  UpdateAttributesRequest?: UpdateAttributesRequest;
}
export interface AttributesResource {
  ApplicationId?: string;
  AttributeType?: string;
  Attributes?: string[];
}
export interface RemoveAttributesResponse {
  AttributesResource: AttributesResource & { ApplicationId: string; AttributeType: string };
}
export interface AddressConfiguration {
  BodyOverride?: string;
  ChannelType?: ChannelType;
  Context?: { [key: string]: string | undefined };
  RawContent?: string;
  Substitutions?: { [key: string]: string[] | undefined };
  TitleOverride?: string;
}
export type MapOfAddressConfiguration = { [key: string]: AddressConfiguration | undefined };
export interface EndpointSendConfiguration {
  BodyOverride?: string;
  Context?: { [key: string]: string | undefined };
  RawContent?: string;
  Substitutions?: { [key: string]: string[] | undefined };
  TitleOverride?: string;
}
export type MapOfEndpointSendConfiguration = {
  [key: string]: EndpointSendConfiguration | undefined;
};
export interface ADMMessage {
  Action?: Action;
  Body?: string;
  ConsolidationKey?: string;
  Data?: { [key: string]: string | undefined };
  ExpiresAfter?: string;
  IconReference?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  MD5?: string;
  RawContent?: string;
  SilentPush?: boolean;
  SmallImageIconUrl?: string;
  Sound?: string;
  Substitutions?: { [key: string]: string[] | undefined };
  Title?: string;
  Url?: string;
}
export interface APNSMessage {
  APNSPushType?: string;
  Action?: Action;
  Badge?: number;
  Body?: string;
  Category?: string;
  CollapseId?: string;
  Data?: { [key: string]: string | undefined };
  MediaUrl?: string;
  PreferredAuthenticationMethod?: string;
  Priority?: string;
  RawContent?: string;
  SilentPush?: boolean;
  Sound?: string;
  Substitutions?: { [key: string]: string[] | undefined };
  ThreadId?: string;
  TimeToLive?: number;
  Title?: string;
  Url?: string;
}
export interface BaiduMessage {
  Action?: Action;
  Body?: string;
  Data?: { [key: string]: string | undefined };
  IconReference?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  RawContent?: string;
  SilentPush?: boolean;
  SmallImageIconUrl?: string;
  Sound?: string;
  Substitutions?: { [key: string]: string[] | undefined };
  TimeToLive?: number;
  Title?: string;
  Url?: string;
}
export interface DefaultMessage {
  Body?: string;
  Substitutions?: { [key: string]: string[] | undefined };
}
export interface DefaultPushNotificationMessage {
  Action?: Action;
  Body?: string;
  Data?: { [key: string]: string | undefined };
  SilentPush?: boolean;
  Substitutions?: { [key: string]: string[] | undefined };
  Title?: string;
  Url?: string;
}
export type __blob = Uint8Array;
export interface RawEmail {
  Data?: Uint8Array;
}
export interface SimpleEmailPart {
  Charset?: string;
  Data?: string;
}
export interface SimpleEmail {
  HtmlPart?: SimpleEmailPart;
  Subject?: SimpleEmailPart;
  TextPart?: SimpleEmailPart;
  Headers?: MessageHeader[];
}
export interface EmailMessage {
  Body?: string;
  FeedbackForwardingAddress?: string;
  FromAddress?: string;
  RawEmail?: RawEmail;
  ReplyToAddresses?: string[];
  SimpleEmail?: SimpleEmail;
  Substitutions?: { [key: string]: string[] | undefined };
}
export interface GCMMessage {
  Action?: Action;
  Body?: string;
  CollapseKey?: string;
  Data?: { [key: string]: string | undefined };
  IconReference?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  PreferredAuthenticationMethod?: string;
  Priority?: string;
  RawContent?: string;
  RestrictedPackageName?: string;
  SilentPush?: boolean;
  SmallImageIconUrl?: string;
  Sound?: string;
  Substitutions?: { [key: string]: string[] | undefined };
  TimeToLive?: number;
  Title?: string;
  Url?: string;
}
export interface SMSMessage {
  Body?: string;
  Keyword?: string;
  MediaUrl?: string;
  MessageType?: MessageType;
  OriginationNumber?: string;
  SenderId?: string;
  Substitutions?: { [key: string]: string[] | undefined };
  EntityId?: string;
  TemplateId?: string;
}
export interface VoiceMessage {
  Body?: string;
  LanguageCode?: string;
  OriginationNumber?: string;
  Substitutions?: { [key: string]: string[] | undefined };
  VoiceId?: string;
}
export interface DirectMessageConfiguration {
  ADMMessage?: ADMMessage;
  APNSMessage?: APNSMessage;
  BaiduMessage?: BaiduMessage;
  DefaultMessage?: DefaultMessage;
  DefaultPushNotificationMessage?: DefaultPushNotificationMessage;
  EmailMessage?: EmailMessage;
  GCMMessage?: GCMMessage;
  SMSMessage?: SMSMessage;
  VoiceMessage?: VoiceMessage;
}
export interface MessageRequest {
  Addresses?: { [key: string]: AddressConfiguration | undefined };
  Context?: { [key: string]: string | undefined };
  Endpoints?: { [key: string]: EndpointSendConfiguration | undefined };
  MessageConfiguration?: DirectMessageConfiguration;
  TemplateConfiguration?: TemplateConfiguration;
  TraceId?: string;
}
export interface SendMessagesRequest {
  ApplicationId: string;
  MessageRequest?: MessageRequest;
}
export type DeliveryStatus =
  | "SUCCESSFUL"
  | "THROTTLED"
  | "TEMPORARY_FAILURE"
  | "PERMANENT_FAILURE"
  | "UNKNOWN_FAILURE"
  | "OPT_OUT"
  | "DUPLICATE"
  | (string & {});
export interface EndpointMessageResult {
  Address?: string;
  DeliveryStatus?: DeliveryStatus;
  MessageId?: string;
  StatusCode?: number;
  StatusMessage?: string;
  UpdatedToken?: string;
}
export type MapOfEndpointMessageResult = { [key: string]: EndpointMessageResult | undefined };
export interface MessageResult {
  DeliveryStatus?: DeliveryStatus;
  MessageId?: string;
  StatusCode?: number;
  StatusMessage?: string;
  UpdatedToken?: string;
}
export type MapOfMessageResult = { [key: string]: MessageResult | undefined };
export interface MessageResponse {
  ApplicationId?: string;
  EndpointResult?: { [key: string]: EndpointMessageResult | undefined };
  RequestId?: string;
  Result?: { [key: string]: MessageResult | undefined };
}
export interface SendMessagesResponse {
  MessageResponse: MessageResponse & {
    ApplicationId: string;
    EndpointResult: {
      [key: string]:
        | (EndpointMessageResult & { DeliveryStatus: DeliveryStatus; StatusCode: number })
        | undefined;
    };
    Result: {
      [key: string]:
        | (MessageResult & { DeliveryStatus: DeliveryStatus; StatusCode: number })
        | undefined;
    };
  };
}
export interface SendOTPMessageRequestParameters {
  AllowedAttempts?: number;
  BrandName?: string;
  Channel?: string;
  CodeLength?: number;
  DestinationIdentity?: string;
  EntityId?: string;
  Language?: string;
  OriginationIdentity?: string;
  ReferenceId?: string;
  TemplateId?: string;
  ValidityPeriod?: number;
}
export interface SendOTPMessageRequest {
  ApplicationId: string;
  SendOTPMessageRequestParameters?: SendOTPMessageRequestParameters;
}
export interface SendOTPMessageResponse {
  MessageResponse: MessageResponse & {
    ApplicationId: string;
    EndpointResult: {
      [key: string]:
        | (EndpointMessageResult & { DeliveryStatus: DeliveryStatus; StatusCode: number })
        | undefined;
    };
    Result: {
      [key: string]:
        | (MessageResult & { DeliveryStatus: DeliveryStatus; StatusCode: number })
        | undefined;
    };
  };
}
export interface SendUsersMessageRequest {
  Context?: { [key: string]: string | undefined };
  MessageConfiguration?: DirectMessageConfiguration;
  TemplateConfiguration?: TemplateConfiguration;
  TraceId?: string;
  Users?: { [key: string]: EndpointSendConfiguration | undefined };
}
export interface SendUsersMessagesRequest {
  ApplicationId: string;
  SendUsersMessageRequest?: SendUsersMessageRequest;
}
export type MapOfMapOfEndpointMessageResult = {
  [key: string]: { [key: string]: EndpointMessageResult | undefined } | undefined;
};
export interface SendUsersMessageResponse {
  ApplicationId?: string;
  RequestId?: string;
  Result?: { [key: string]: { [key: string]: EndpointMessageResult | undefined } | undefined };
}
export interface SendUsersMessagesResponse {
  SendUsersMessageResponse: SendUsersMessageResponse & {
    ApplicationId: string;
    Result: {
      [key: string]:
        | {
            [key: string]:
              | (EndpointMessageResult & { DeliveryStatus: DeliveryStatus; StatusCode: number })
              | undefined;
          }
        | undefined;
    };
  };
}
export interface TagResourceRequest {
  ResourceArn: string;
  TagsModel?: TagsModel;
}
export interface TagResourceResponse {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys?: string[];
}
export interface UntagResourceResponse {}
export interface ADMChannelRequest {
  ClientId?: string;
  ClientSecret?: string;
  Enabled?: boolean;
}
export interface UpdateAdmChannelRequest {
  ADMChannelRequest?: ADMChannelRequest;
  ApplicationId: string;
}
export interface UpdateAdmChannelResponse {
  ADMChannelResponse: ADMChannelResponse & { Platform: string };
}
export interface APNSChannelRequest {
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
}
export interface UpdateApnsChannelRequest {
  APNSChannelRequest?: APNSChannelRequest;
  ApplicationId: string;
}
export interface UpdateApnsChannelResponse {
  APNSChannelResponse: APNSChannelResponse & { Platform: string };
}
export interface APNSSandboxChannelRequest {
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
}
export interface UpdateApnsSandboxChannelRequest {
  APNSSandboxChannelRequest?: APNSSandboxChannelRequest;
  ApplicationId: string;
}
export interface UpdateApnsSandboxChannelResponse {
  APNSSandboxChannelResponse: APNSSandboxChannelResponse & { Platform: string };
}
export interface APNSVoipChannelRequest {
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
}
export interface UpdateApnsVoipChannelRequest {
  APNSVoipChannelRequest?: APNSVoipChannelRequest;
  ApplicationId: string;
}
export interface UpdateApnsVoipChannelResponse {
  APNSVoipChannelResponse: APNSVoipChannelResponse & { Platform: string };
}
export interface APNSVoipSandboxChannelRequest {
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
}
export interface UpdateApnsVoipSandboxChannelRequest {
  APNSVoipSandboxChannelRequest?: APNSVoipSandboxChannelRequest;
  ApplicationId: string;
}
export interface UpdateApnsVoipSandboxChannelResponse {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse & { Platform: string };
}
export interface WriteApplicationSettingsRequest {
  CampaignHook?: CampaignHook;
  CloudWatchMetricsEnabled?: boolean;
  EventTaggingEnabled?: boolean;
  Limits?: CampaignLimits;
  QuietTime?: QuietTime;
  JourneyLimits?: ApplicationSettingsJourneyLimits;
}
export interface UpdateApplicationSettingsRequest {
  ApplicationId: string;
  WriteApplicationSettingsRequest?: WriteApplicationSettingsRequest;
}
export interface UpdateApplicationSettingsResponse {
  ApplicationSettingsResource: ApplicationSettingsResource & { ApplicationId: string };
}
export interface BaiduChannelRequest {
  ApiKey?: string;
  Enabled?: boolean;
  SecretKey?: string;
}
export interface UpdateBaiduChannelRequest {
  ApplicationId: string;
  BaiduChannelRequest?: BaiduChannelRequest;
}
export interface UpdateBaiduChannelResponse {
  BaiduChannelResponse: BaiduChannelResponse & { Credential: string; Platform: string };
}
export interface UpdateCampaignRequest {
  ApplicationId: string;
  CampaignId: string;
  WriteCampaignRequest?: WriteCampaignRequest;
}
export interface UpdateCampaignResponse {
  CampaignResponse: CampaignResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    SegmentId: string;
    SegmentVersion: number;
    AdditionalTreatments: (TreatmentResource & {
      Id: string;
      SizePercent: number;
      CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
      MessageConfiguration: MessageConfiguration & {
        InAppMessage: CampaignInAppMessage & {
          Content: (InAppMessageContent & {
            BodyConfig: InAppMessageBodyConfig & {
              Alignment: Alignment;
              Body: string;
              TextColor: string;
            };
            HeaderConfig: InAppMessageHeaderConfig & {
              Alignment: Alignment;
              Header: string;
              TextColor: string;
            };
            PrimaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
            SecondaryBtn: InAppMessageButton & {
              Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              DefaultConfig: DefaultButtonConfiguration & {
                ButtonAction: ButtonAction;
                Text: string;
              };
              IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
              Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            };
          })[];
        };
      };
      Schedule: Schedule & {
        StartTime: string;
        EventFilter: CampaignEventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
    })[];
    CustomDeliveryConfiguration: CustomDeliveryConfiguration & { DeliveryUri: string };
    MessageConfiguration: MessageConfiguration & {
      InAppMessage: CampaignInAppMessage & {
        Content: (InAppMessageContent & {
          BodyConfig: InAppMessageBodyConfig & {
            Alignment: Alignment;
            Body: string;
            TextColor: string;
          };
          HeaderConfig: InAppMessageHeaderConfig & {
            Alignment: Alignment;
            Header: string;
            TextColor: string;
          };
          PrimaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
          SecondaryBtn: InAppMessageButton & {
            Android: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            DefaultConfig: DefaultButtonConfiguration & {
              ButtonAction: ButtonAction;
              Text: string;
            };
            IOS: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
            Web: OverrideButtonConfiguration & { ButtonAction: ButtonAction };
          };
        })[];
      };
    };
    Schedule: Schedule & {
      StartTime: string;
      EventFilter: CampaignEventFilter & {
        Dimensions: EventDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          EventType: SetDimension & { Values: ListOf__string };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
        };
        FilterType: FilterType;
      };
    };
  };
}
export interface EmailChannelRequest {
  ConfigurationSet?: string;
  Enabled?: boolean;
  FromAddress?: string;
  Identity?: string;
  RoleArn?: string;
  OrchestrationSendingRoleArn?: string;
}
export interface UpdateEmailChannelRequest {
  ApplicationId: string;
  EmailChannelRequest?: EmailChannelRequest;
}
export interface UpdateEmailChannelResponse {
  EmailChannelResponse: EmailChannelResponse & { Platform: string };
}
export interface UpdateEmailTemplateRequest {
  CreateNewVersion?: boolean;
  EmailTemplateRequest?: EmailTemplateRequest;
  TemplateName: string;
  Version?: string;
}
export interface UpdateEmailTemplateResponse {
  MessageBody: MessageBody;
}
export interface EndpointRequest {
  Address?: string;
  Attributes?: { [key: string]: string[] | undefined };
  ChannelType?: ChannelType;
  Demographic?: EndpointDemographic;
  EffectiveDate?: string;
  EndpointStatus?: string;
  Location?: EndpointLocation;
  Metrics?: { [key: string]: number | undefined };
  OptOut?: string;
  RequestId?: string;
  User?: EndpointUser;
}
export interface UpdateEndpointRequest {
  ApplicationId: string;
  EndpointId: string;
  EndpointRequest?: EndpointRequest;
}
export interface UpdateEndpointResponse {
  MessageBody: MessageBody;
}
export interface EndpointBatchItem {
  Address?: string;
  Attributes?: { [key: string]: string[] | undefined };
  ChannelType?: ChannelType;
  Demographic?: EndpointDemographic;
  EffectiveDate?: string;
  EndpointStatus?: string;
  Id?: string;
  Location?: EndpointLocation;
  Metrics?: { [key: string]: number | undefined };
  OptOut?: string;
  RequestId?: string;
  User?: EndpointUser;
}
export type ListOfEndpointBatchItem = EndpointBatchItem[];
export interface EndpointBatchRequest {
  Item?: EndpointBatchItem[];
}
export interface UpdateEndpointsBatchRequest {
  ApplicationId: string;
  EndpointBatchRequest?: EndpointBatchRequest;
}
export interface UpdateEndpointsBatchResponse {
  MessageBody: MessageBody;
}
export interface GCMChannelRequest {
  ApiKey?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  ServiceJson?: string;
}
export interface UpdateGcmChannelRequest {
  ApplicationId: string;
  GCMChannelRequest?: GCMChannelRequest;
}
export interface UpdateGcmChannelResponse {
  GCMChannelResponse: GCMChannelResponse & { Platform: string };
}
export interface UpdateInAppTemplateRequest {
  CreateNewVersion?: boolean;
  InAppTemplateRequest?: InAppTemplateRequest;
  TemplateName: string;
  Version?: string;
}
export interface UpdateInAppTemplateResponse {
  MessageBody: MessageBody;
}
export interface UpdateJourneyRequest {
  ApplicationId: string;
  JourneyId: string;
  WriteJourneyRequest?: WriteJourneyRequest;
}
export interface UpdateJourneyResponse {
  JourneyResponse: JourneyResponse & {
    ApplicationId: string;
    Id: string;
    Name: string;
    Activities: {
      [key: string]:
        | (Activity & {
            ConditionalSplit: ConditionalSplitActivity & {
              Condition: Condition & {
                Conditions: (SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                })[];
              };
            };
            Holdout: HoldoutActivity & { Percentage: number };
            MultiCondition: MultiConditionalSplitActivity & {
              Branches: (MultiConditionalBranch & {
                Condition: SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                };
              })[];
            };
          })
        | undefined;
    };
    StartCondition: StartCondition & {
      EventStartCondition: EventStartCondition & {
        EventFilter: EventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
      SegmentStartCondition: SegmentCondition & { SegmentId: string };
    };
  };
}
export interface JourneyStateRequest {
  State?: State;
}
export interface UpdateJourneyStateRequest {
  ApplicationId: string;
  JourneyId: string;
  JourneyStateRequest?: JourneyStateRequest;
}
export interface UpdateJourneyStateResponse {
  JourneyResponse: JourneyResponse & {
    ApplicationId: string;
    Id: string;
    Name: string;
    Activities: {
      [key: string]:
        | (Activity & {
            ConditionalSplit: ConditionalSplitActivity & {
              Condition: Condition & {
                Conditions: (SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                })[];
              };
            };
            Holdout: HoldoutActivity & { Percentage: number };
            MultiCondition: MultiConditionalSplitActivity & {
              Branches: (MultiConditionalBranch & {
                Condition: SimpleCondition & {
                  EventCondition: EventCondition & {
                    Dimensions: EventDimensions & {
                      Attributes: {
                        [key: string]:
                          | (AttributeDimension & { Values: ListOf__string })
                          | undefined;
                      };
                      EventType: SetDimension & { Values: ListOf__string };
                      Metrics: {
                        [key: string]:
                          | (MetricDimension & { ComparisonOperator: string; Value: number })
                          | undefined;
                      };
                    };
                  };
                  SegmentCondition: SegmentCondition & { SegmentId: string };
                  SegmentDimensions: SegmentDimensions & {
                    Attributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                    Behavior: SegmentBehaviors & {
                      Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
                    };
                    Demographic: SegmentDemographics & {
                      AppVersion: SetDimension & { Values: ListOf__string };
                      Channel: SetDimension & { Values: ListOf__string };
                      DeviceType: SetDimension & { Values: ListOf__string };
                      Make: SetDimension & { Values: ListOf__string };
                      Model: SetDimension & { Values: ListOf__string };
                      Platform: SetDimension & { Values: ListOf__string };
                    };
                    Location: SegmentLocation & {
                      Country: SetDimension & { Values: ListOf__string };
                      GPSPoint: GPSPointDimension & {
                        Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
                      };
                    };
                    Metrics: {
                      [key: string]:
                        | (MetricDimension & { ComparisonOperator: string; Value: number })
                        | undefined;
                    };
                    UserAttributes: {
                      [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
                    };
                  };
                };
              })[];
            };
          })
        | undefined;
    };
    StartCondition: StartCondition & {
      EventStartCondition: EventStartCondition & {
        EventFilter: EventFilter & {
          Dimensions: EventDimensions & {
            Attributes: {
              [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
            };
            EventType: SetDimension & { Values: ListOf__string };
            Metrics: {
              [key: string]:
                | (MetricDimension & { ComparisonOperator: string; Value: number })
                | undefined;
            };
          };
          FilterType: FilterType;
        };
      };
      SegmentStartCondition: SegmentCondition & { SegmentId: string };
    };
  };
}
export interface UpdatePushTemplateRequest {
  CreateNewVersion?: boolean;
  PushNotificationTemplateRequest?: PushNotificationTemplateRequest;
  TemplateName: string;
  Version?: string;
}
export interface UpdatePushTemplateResponse {
  MessageBody: MessageBody;
}
export interface UpdateRecommenderConfigurationShape {
  Attributes?: { [key: string]: string | undefined };
  Description?: string;
  Name?: string;
  RecommendationProviderIdType?: string;
  RecommendationProviderRoleArn?: string;
  RecommendationProviderUri?: string;
  RecommendationTransformerUri?: string;
  RecommendationsDisplayName?: string;
  RecommendationsPerMessage?: number;
}
export interface UpdateRecommenderConfigurationRequest {
  RecommenderId: string;
  UpdateRecommenderConfiguration?: UpdateRecommenderConfigurationShape;
}
export interface UpdateRecommenderConfigurationResponse {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse & {
    CreationDate: string;
    Id: string;
    LastModifiedDate: string;
    RecommendationProviderRoleArn: string;
    RecommendationProviderUri: string;
  };
}
export interface UpdateSegmentRequest {
  ApplicationId: string;
  SegmentId: string;
  WriteSegmentRequest?: WriteSegmentRequest;
}
export interface UpdateSegmentResponse {
  SegmentResponse: SegmentResponse & {
    ApplicationId: string;
    Arn: string;
    CreationDate: string;
    Id: string;
    SegmentType: SegmentType;
    Dimensions: SegmentDimensions & {
      Attributes: { [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined };
      Behavior: SegmentBehaviors & {
        Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
      };
      Demographic: SegmentDemographics & {
        AppVersion: SetDimension & { Values: ListOf__string };
        Channel: SetDimension & { Values: ListOf__string };
        DeviceType: SetDimension & { Values: ListOf__string };
        Make: SetDimension & { Values: ListOf__string };
        Model: SetDimension & { Values: ListOf__string };
        Platform: SetDimension & { Values: ListOf__string };
      };
      Location: SegmentLocation & {
        Country: SetDimension & { Values: ListOf__string };
        GPSPoint: GPSPointDimension & {
          Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
        };
      };
      Metrics: {
        [key: string]:
          | (MetricDimension & { ComparisonOperator: string; Value: number })
          | undefined;
      };
      UserAttributes: {
        [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
      };
    };
    ImportDefinition: SegmentImportResource & {
      ExternalId: string;
      Format: Format;
      RoleArn: string;
      S3Url: string;
      Size: number;
    };
    SegmentGroups: SegmentGroupList & {
      Groups: (SegmentGroup & {
        Dimensions: (SegmentDimensions & {
          Attributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
          Behavior: SegmentBehaviors & {
            Recency: RecencyDimension & { Duration: Duration; RecencyType: RecencyType };
          };
          Demographic: SegmentDemographics & {
            AppVersion: SetDimension & { Values: ListOf__string };
            Channel: SetDimension & { Values: ListOf__string };
            DeviceType: SetDimension & { Values: ListOf__string };
            Make: SetDimension & { Values: ListOf__string };
            Model: SetDimension & { Values: ListOf__string };
            Platform: SetDimension & { Values: ListOf__string };
          };
          Location: SegmentLocation & {
            Country: SetDimension & { Values: ListOf__string };
            GPSPoint: GPSPointDimension & {
              Coordinates: GPSCoordinates & { Latitude: number; Longitude: number };
            };
          };
          Metrics: {
            [key: string]:
              | (MetricDimension & { ComparisonOperator: string; Value: number })
              | undefined;
          };
          UserAttributes: {
            [key: string]: (AttributeDimension & { Values: ListOf__string }) | undefined;
          };
        })[];
        SourceSegments: (SegmentReference & { Id: string })[];
      })[];
    };
  };
}
export interface SMSChannelRequest {
  Enabled?: boolean;
  SenderId?: string;
  ShortCode?: string;
}
export interface UpdateSmsChannelRequest {
  ApplicationId: string;
  SMSChannelRequest?: SMSChannelRequest;
}
export interface UpdateSmsChannelResponse {
  SMSChannelResponse: SMSChannelResponse & { Platform: string };
}
export interface UpdateSmsTemplateRequest {
  CreateNewVersion?: boolean;
  SMSTemplateRequest?: SMSTemplateRequest;
  TemplateName: string;
  Version?: string;
}
export interface UpdateSmsTemplateResponse {
  MessageBody: MessageBody;
}
export interface TemplateActiveVersionRequest {
  Version?: string;
}
export interface UpdateTemplateActiveVersionRequest {
  TemplateActiveVersionRequest?: TemplateActiveVersionRequest;
  TemplateName: string;
  TemplateType: string;
}
export interface UpdateTemplateActiveVersionResponse {
  MessageBody: MessageBody;
}
export interface VoiceChannelRequest {
  Enabled?: boolean;
}
export interface UpdateVoiceChannelRequest {
  ApplicationId: string;
  VoiceChannelRequest?: VoiceChannelRequest;
}
export interface UpdateVoiceChannelResponse {
  VoiceChannelResponse: VoiceChannelResponse & { Platform: string };
}
export interface UpdateVoiceTemplateRequest {
  CreateNewVersion?: boolean;
  TemplateName: string;
  Version?: string;
  VoiceTemplateRequest?: VoiceTemplateRequest;
}
export interface UpdateVoiceTemplateResponse {
  MessageBody: MessageBody;
}
export interface VerifyOTPMessageRequestParameters {
  DestinationIdentity?: string;
  Otp?: string;
  ReferenceId?: string;
}
export interface VerifyOTPMessageRequest {
  ApplicationId: string;
  VerifyOTPMessageRequestParameters?: VerifyOTPMessageRequestParameters;
}
export interface VerificationResponse {
  Valid?: boolean;
}
export interface VerifyOTPMessageResponse {
  VerificationResponse: VerificationResponse;
}
export type CreateAppError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an application.
 */
export const createApp: API.OperationMethod<
  CreateAppRequest,
  CreateAppResponse,
  CreateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CreateAppRequest>,
  output: __S(4) as any as S.Schema<CreateAppResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApp",
}));

export type CreateCampaignError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new campaign for an application or updates the settings of an existing campaign for an application.
 */
export const createCampaign: API.OperationMethod<
  CreateCampaignRequest,
  CreateCampaignResponse,
  CreateCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39) as any as S.Schema<CreateCampaignRequest>,
  output: __S(44) as any as S.Schema<CreateCampaignResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCampaign",
}));

export type CreateEmailTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a message template for messages that are sent through the email channel.
 */
export const createEmailTemplate: API.OperationMethod<
  CreateEmailTemplateRequest,
  CreateEmailTemplateResponse,
  CreateEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46) as any as S.Schema<CreateEmailTemplateRequest>,
  output: __S(48) as any as S.Schema<CreateEmailTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEmailTemplate",
}));

export type CreateExportJobError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an export job for an application.
 */
export const createExportJob: API.OperationMethod<
  CreateExportJobRequest,
  CreateExportJobResponse,
  CreateExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<CreateExportJobRequest>,
  output: __S(52) as any as S.Schema<CreateExportJobResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExportJob",
}));

export type CreateImportJobError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an import job for an application.
 */
export const createImportJob: API.OperationMethod<
  CreateImportJobRequest,
  CreateImportJobResponse,
  CreateImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<CreateImportJobRequest>,
  output: __S(56) as any as S.Schema<CreateImportJobResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImportJob",
}));

export type CreateInAppTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new message template for messages using the in-app message channel.
 */
export const createInAppTemplate: API.OperationMethod<
  CreateInAppTemplateRequest,
  CreateInAppTemplateResponse,
  CreateInAppTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<CreateInAppTemplateRequest>,
  output: __S(59) as any as S.Schema<CreateInAppTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInAppTemplate",
}));

export type CreateJourneyError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a journey for an application.
 */
export const createJourney: API.OperationMethod<
  CreateJourneyRequest,
  CreateJourneyResponse,
  CreateJourneyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<CreateJourneyRequest>,
  output: __S(108) as any as S.Schema<CreateJourneyResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJourney",
}));

export type CreatePushTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a message template for messages that are sent through a push notification channel.
 */
export const createPushTemplate: API.OperationMethod<
  CreatePushTemplateRequest,
  CreatePushTemplateResponse,
  CreatePushTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<CreatePushTemplateRequest>,
  output: __S(48) as any as S.Schema<CreatePushTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePushTemplate",
}));

export type CreateRecommenderConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an Amazon Pinpoint configuration for a recommender model.
 */
export const createRecommenderConfiguration: API.OperationMethod<
  CreateRecommenderConfigurationRequest,
  CreateRecommenderConfigurationResponse,
  CreateRecommenderConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<CreateRecommenderConfigurationRequest>,
  output: __S(117) as any as S.Schema<CreateRecommenderConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRecommenderConfiguration",
}));

export type CreateSegmentError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
 */
export const createSegment: API.OperationMethod<
  CreateSegmentRequest,
  CreateSegmentResponse,
  CreateSegmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125) as any as S.Schema<CreateSegmentRequest>,
  output: __S(129) as any as S.Schema<CreateSegmentResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSegment",
}));

export type CreateSmsTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a message template for messages that are sent through the SMS channel.
 */
export const createSmsTemplate: API.OperationMethod<
  CreateSmsTemplateRequest,
  CreateSmsTemplateResponse,
  CreateSmsTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131) as any as S.Schema<CreateSmsTemplateRequest>,
  output: __S(48) as any as S.Schema<CreateSmsTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSmsTemplate",
}));

export type CreateVoiceTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a message template for messages that are sent through the voice channel.
 */
export const createVoiceTemplate: API.OperationMethod<
  CreateVoiceTemplateRequest,
  CreateVoiceTemplateResponse,
  CreateVoiceTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133) as any as S.Schema<CreateVoiceTemplateRequest>,
  output: __S(48) as any as S.Schema<CreateVoiceTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVoiceTemplate",
}));

export type DeleteAdmChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the ADM channel for an application and deletes any existing settings for the channel.
 */
export const deleteAdmChannel: API.OperationMethod<
  DeleteAdmChannelRequest,
  DeleteAdmChannelResponse,
  DeleteAdmChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134) as any as S.Schema<DeleteAdmChannelRequest>,
  output: __S(136) as any as S.Schema<DeleteAdmChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAdmChannel",
}));

export type DeleteApnsChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the APNs channel for an application and deletes any existing settings for the channel.
 */
export const deleteApnsChannel: API.OperationMethod<
  DeleteApnsChannelRequest,
  DeleteApnsChannelResponse,
  DeleteApnsChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137) as any as S.Schema<DeleteApnsChannelRequest>,
  output: __S(139) as any as S.Schema<DeleteApnsChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApnsChannel",
}));

export type DeleteApnsSandboxChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
 */
export const deleteApnsSandboxChannel: API.OperationMethod<
  DeleteApnsSandboxChannelRequest,
  DeleteApnsSandboxChannelResponse,
  DeleteApnsSandboxChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140) as any as S.Schema<DeleteApnsSandboxChannelRequest>,
  output: __S(142) as any as S.Schema<DeleteApnsSandboxChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApnsSandboxChannel",
}));

export type DeleteApnsVoipChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
 */
export const deleteApnsVoipChannel: API.OperationMethod<
  DeleteApnsVoipChannelRequest,
  DeleteApnsVoipChannelResponse,
  DeleteApnsVoipChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143) as any as S.Schema<DeleteApnsVoipChannelRequest>,
  output: __S(144) as any as S.Schema<DeleteApnsVoipChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApnsVoipChannel",
}));

export type DeleteApnsVoipSandboxChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
 */
export const deleteApnsVoipSandboxChannel: API.OperationMethod<
  DeleteApnsVoipSandboxChannelRequest,
  DeleteApnsVoipSandboxChannelResponse,
  DeleteApnsVoipSandboxChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145) as any as S.Schema<DeleteApnsVoipSandboxChannelRequest>,
  output: __S(146) as any as S.Schema<DeleteApnsVoipSandboxChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApnsVoipSandboxChannel",
}));

export type DeleteAppError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an application.
 */
export const deleteApp: API.OperationMethod<
  DeleteAppRequest,
  DeleteAppResponse,
  DeleteAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147) as any as S.Schema<DeleteAppRequest>,
  output: __S(4) as any as S.Schema<DeleteAppResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApp",
}));

export type DeleteBaiduChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the Baidu channel for an application and deletes any existing settings for the channel.
 */
export const deleteBaiduChannel: API.OperationMethod<
  DeleteBaiduChannelRequest,
  DeleteBaiduChannelResponse,
  DeleteBaiduChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(148) as any as S.Schema<DeleteBaiduChannelRequest>,
  output: __S(150) as any as S.Schema<DeleteBaiduChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBaiduChannel",
}));

export type DeleteCampaignError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a campaign from an application.
 */
export const deleteCampaign: API.OperationMethod<
  DeleteCampaignRequest,
  DeleteCampaignResponse,
  DeleteCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(151) as any as S.Schema<DeleteCampaignRequest>,
  output: __S(44) as any as S.Schema<DeleteCampaignResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCampaign",
}));

export type DeleteEmailChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the email channel for an application and deletes any existing settings for the channel.
 */
export const deleteEmailChannel: API.OperationMethod<
  DeleteEmailChannelRequest,
  DeleteEmailChannelResponse,
  DeleteEmailChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(152) as any as S.Schema<DeleteEmailChannelRequest>,
  output: __S(154) as any as S.Schema<DeleteEmailChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEmailChannel",
}));

export type DeleteEmailTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a message template for messages that were sent through the email channel.
 */
export const deleteEmailTemplate: API.OperationMethod<
  DeleteEmailTemplateRequest,
  DeleteEmailTemplateResponse,
  DeleteEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155) as any as S.Schema<DeleteEmailTemplateRequest>,
  output: __S(157) as any as S.Schema<DeleteEmailTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEmailTemplate",
}));

export type DeleteEndpointError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an endpoint from an application.
 */
export const deleteEndpoint: API.OperationMethod<
  DeleteEndpointRequest,
  DeleteEndpointResponse,
  DeleteEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(158) as any as S.Schema<DeleteEndpointRequest>,
  output: __S(164) as any as S.Schema<DeleteEndpointResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEndpoint",
}));

export type DeleteEventStreamError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes the event stream for an application.
 */
export const deleteEventStream: API.OperationMethod<
  DeleteEventStreamRequest,
  DeleteEventStreamResponse,
  DeleteEventStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(165) as any as S.Schema<DeleteEventStreamRequest>,
  output: __S(167) as any as S.Schema<DeleteEventStreamResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventStream",
}));

export type DeleteGcmChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the GCM channel for an application and deletes any existing settings for the channel.
 */
export const deleteGcmChannel: API.OperationMethod<
  DeleteGcmChannelRequest,
  DeleteGcmChannelResponse,
  DeleteGcmChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(168) as any as S.Schema<DeleteGcmChannelRequest>,
  output: __S(170) as any as S.Schema<DeleteGcmChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGcmChannel",
}));

export type DeleteInAppTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a message template for messages sent using the in-app message channel.
 */
export const deleteInAppTemplate: API.OperationMethod<
  DeleteInAppTemplateRequest,
  DeleteInAppTemplateResponse,
  DeleteInAppTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171) as any as S.Schema<DeleteInAppTemplateRequest>,
  output: __S(157) as any as S.Schema<DeleteInAppTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInAppTemplate",
}));

export type DeleteJourneyError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a journey from an application.
 */
export const deleteJourney: API.OperationMethod<
  DeleteJourneyRequest,
  DeleteJourneyResponse,
  DeleteJourneyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(172) as any as S.Schema<DeleteJourneyRequest>,
  output: __S(108) as any as S.Schema<DeleteJourneyResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJourney",
}));

export type DeletePushTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a message template for messages that were sent through a push notification channel.
 */
export const deletePushTemplate: API.OperationMethod<
  DeletePushTemplateRequest,
  DeletePushTemplateResponse,
  DeletePushTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<DeletePushTemplateRequest>,
  output: __S(157) as any as S.Schema<DeletePushTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePushTemplate",
}));

export type DeleteRecommenderConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an Amazon Pinpoint configuration for a recommender model.
 */
export const deleteRecommenderConfiguration: API.OperationMethod<
  DeleteRecommenderConfigurationRequest,
  DeleteRecommenderConfigurationResponse,
  DeleteRecommenderConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(174) as any as S.Schema<DeleteRecommenderConfigurationRequest>,
  output: __S(117) as any as S.Schema<DeleteRecommenderConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecommenderConfiguration",
}));

export type DeleteSegmentError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a segment from an application.
 */
export const deleteSegment: API.OperationMethod<
  DeleteSegmentRequest,
  DeleteSegmentResponse,
  DeleteSegmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175) as any as S.Schema<DeleteSegmentRequest>,
  output: __S(129) as any as S.Schema<DeleteSegmentResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSegment",
}));

export type DeleteSmsChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the SMS channel for an application and deletes any existing settings for the channel.
 */
export const deleteSmsChannel: API.OperationMethod<
  DeleteSmsChannelRequest,
  DeleteSmsChannelResponse,
  DeleteSmsChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176) as any as S.Schema<DeleteSmsChannelRequest>,
  output: __S(178) as any as S.Schema<DeleteSmsChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSmsChannel",
}));

export type DeleteSmsTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a message template for messages that were sent through the SMS channel.
 */
export const deleteSmsTemplate: API.OperationMethod<
  DeleteSmsTemplateRequest,
  DeleteSmsTemplateResponse,
  DeleteSmsTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179) as any as S.Schema<DeleteSmsTemplateRequest>,
  output: __S(157) as any as S.Schema<DeleteSmsTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSmsTemplate",
}));

export type DeleteUserEndpointsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes all the endpoints that are associated with a specific user ID.
 */
export const deleteUserEndpoints: API.OperationMethod<
  DeleteUserEndpointsRequest,
  DeleteUserEndpointsResponse,
  DeleteUserEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180) as any as S.Schema<DeleteUserEndpointsRequest>,
  output: __S(183) as any as S.Schema<DeleteUserEndpointsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserEndpoints",
}));

export type DeleteVoiceChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Disables the voice channel for an application and deletes any existing settings for the channel.
 */
export const deleteVoiceChannel: API.OperationMethod<
  DeleteVoiceChannelRequest,
  DeleteVoiceChannelResponse,
  DeleteVoiceChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<DeleteVoiceChannelRequest>,
  output: __S(185) as any as S.Schema<DeleteVoiceChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceChannel",
}));

export type DeleteVoiceTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a message template for messages that were sent through the voice channel.
 */
export const deleteVoiceTemplate: API.OperationMethod<
  DeleteVoiceTemplateRequest,
  DeleteVoiceTemplateResponse,
  DeleteVoiceTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<DeleteVoiceTemplateRequest>,
  output: __S(157) as any as S.Schema<DeleteVoiceTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceTemplate",
}));

export type GetAdmChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the ADM channel for an application.
 */
export const getAdmChannel: API.OperationMethod<
  GetAdmChannelRequest,
  GetAdmChannelResponse,
  GetAdmChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187) as any as S.Schema<GetAdmChannelRequest>,
  output: __S(136) as any as S.Schema<GetAdmChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdmChannel",
}));

export type GetApnsChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the APNs channel for an application.
 */
export const getApnsChannel: API.OperationMethod<
  GetApnsChannelRequest,
  GetApnsChannelResponse,
  GetApnsChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<GetApnsChannelRequest>,
  output: __S(189) as any as S.Schema<GetApnsChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApnsChannel",
}));

export type GetApnsSandboxChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the APNs sandbox channel for an application.
 */
export const getApnsSandboxChannel: API.OperationMethod<
  GetApnsSandboxChannelRequest,
  GetApnsSandboxChannelResponse,
  GetApnsSandboxChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190) as any as S.Schema<GetApnsSandboxChannelRequest>,
  output: __S(142) as any as S.Schema<GetApnsSandboxChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApnsSandboxChannel",
}));

export type GetApnsVoipChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the APNs VoIP channel for an application.
 */
export const getApnsVoipChannel: API.OperationMethod<
  GetApnsVoipChannelRequest,
  GetApnsVoipChannelResponse,
  GetApnsVoipChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191) as any as S.Schema<GetApnsVoipChannelRequest>,
  output: __S(144) as any as S.Schema<GetApnsVoipChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApnsVoipChannel",
}));

export type GetApnsVoipSandboxChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
 */
export const getApnsVoipSandboxChannel: API.OperationMethod<
  GetApnsVoipSandboxChannelRequest,
  GetApnsVoipSandboxChannelResponse,
  GetApnsVoipSandboxChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<GetApnsVoipSandboxChannelRequest>,
  output: __S(146) as any as S.Schema<GetApnsVoipSandboxChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApnsVoipSandboxChannel",
}));

export type GetAppError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about an application.
 */
export const getApp: API.OperationMethod<
  GetAppRequest,
  GetAppResponse,
  GetAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193) as any as S.Schema<GetAppRequest>,
  output: __S(4) as any as S.Schema<GetAppResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApp",
}));

export type GetApplicationDateRangeKpiError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
 */
export const getApplicationDateRangeKpi: API.OperationMethod<
  GetApplicationDateRangeKpiRequest,
  GetApplicationDateRangeKpiResponse,
  GetApplicationDateRangeKpiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194) as any as S.Schema<GetApplicationDateRangeKpiRequest>,
  output: __S(201) as any as S.Schema<GetApplicationDateRangeKpiResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationDateRangeKpi",
}));

export type GetApplicationSettingsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the settings for an application.
 */
export const getApplicationSettings: API.OperationMethod<
  GetApplicationSettingsRequest,
  GetApplicationSettingsResponse,
  GetApplicationSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202) as any as S.Schema<GetApplicationSettingsRequest>,
  output: __S(205) as any as S.Schema<GetApplicationSettingsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationSettings",
}));

export type GetAppsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
 */
export const getApps: API.OperationMethod<
  GetAppsRequest,
  GetAppsResponse,
  GetAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206) as any as S.Schema<GetAppsRequest>,
  output: __S(209) as any as S.Schema<GetAppsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApps",
}));

export type GetBaiduChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the Baidu channel for an application.
 */
export const getBaiduChannel: API.OperationMethod<
  GetBaiduChannelRequest,
  GetBaiduChannelResponse,
  GetBaiduChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210) as any as S.Schema<GetBaiduChannelRequest>,
  output: __S(211) as any as S.Schema<GetBaiduChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBaiduChannel",
}));

export type GetCampaignError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status, configuration, and other settings for a campaign.
 */
export const getCampaign: API.OperationMethod<
  GetCampaignRequest,
  GetCampaignResponse,
  GetCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(212) as any as S.Schema<GetCampaignRequest>,
  output: __S(44) as any as S.Schema<GetCampaignResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCampaign",
}));

export type GetCampaignActivitiesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about all the activities for a campaign.
 */
export const getCampaignActivities: API.OperationMethod<
  GetCampaignActivitiesRequest,
  GetCampaignActivitiesResponse,
  GetCampaignActivitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(213) as any as S.Schema<GetCampaignActivitiesRequest>,
  output: __S(217) as any as S.Schema<GetCampaignActivitiesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCampaignActivities",
}));

export type GetCampaignDateRangeKpiError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
 */
export const getCampaignDateRangeKpi: API.OperationMethod<
  GetCampaignDateRangeKpiRequest,
  GetCampaignDateRangeKpiResponse,
  GetCampaignDateRangeKpiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(218) as any as S.Schema<GetCampaignDateRangeKpiRequest>,
  output: __S(220) as any as S.Schema<GetCampaignDateRangeKpiResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCampaignDateRangeKpi",
}));

export type GetCampaignsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
 */
export const getCampaigns: API.OperationMethod<
  GetCampaignsRequest,
  GetCampaignsResponse,
  GetCampaignsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(221) as any as S.Schema<GetCampaignsRequest>,
  output: __S(224) as any as S.Schema<GetCampaignsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCampaigns",
}));

export type GetCampaignVersionError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
 */
export const getCampaignVersion: API.OperationMethod<
  GetCampaignVersionRequest,
  GetCampaignVersionResponse,
  GetCampaignVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(225) as any as S.Schema<GetCampaignVersionRequest>,
  output: __S(226) as any as S.Schema<GetCampaignVersionResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCampaignVersion",
}));

export type GetCampaignVersionsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status, configuration, and other settings for all versions of a campaign.
 */
export const getCampaignVersions: API.OperationMethod<
  GetCampaignVersionsRequest,
  GetCampaignVersionsResponse,
  GetCampaignVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(227) as any as S.Schema<GetCampaignVersionsRequest>,
  output: __S(228) as any as S.Schema<GetCampaignVersionsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCampaignVersions",
}));

export type GetChannelsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the history and status of each channel for an application.
 */
export const getChannels: API.OperationMethod<
  GetChannelsRequest,
  GetChannelsResponse,
  GetChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(229) as any as S.Schema<GetChannelsRequest>,
  output: __S(233) as any as S.Schema<GetChannelsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChannels",
}));

export type GetEmailChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the email channel for an application.
 */
export const getEmailChannel: API.OperationMethod<
  GetEmailChannelRequest,
  GetEmailChannelResponse,
  GetEmailChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(234) as any as S.Schema<GetEmailChannelRequest>,
  output: __S(235) as any as S.Schema<GetEmailChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEmailChannel",
}));

export type GetEmailTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the content and settings of a message template for messages that are sent through the email channel.
 */
export const getEmailTemplate: API.OperationMethod<
  GetEmailTemplateRequest,
  GetEmailTemplateResponse,
  GetEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(236) as any as S.Schema<GetEmailTemplateRequest>,
  output: __S(238) as any as S.Schema<GetEmailTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEmailTemplate",
}));

export type GetEndpointError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the settings and attributes of a specific endpoint for an application.
 */
export const getEndpoint: API.OperationMethod<
  GetEndpointRequest,
  GetEndpointResponse,
  GetEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239) as any as S.Schema<GetEndpointRequest>,
  output: __S(164) as any as S.Schema<GetEndpointResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEndpoint",
}));

export type GetEventStreamError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the event stream settings for an application.
 */
export const getEventStream: API.OperationMethod<
  GetEventStreamRequest,
  GetEventStreamResponse,
  GetEventStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(240) as any as S.Schema<GetEventStreamRequest>,
  output: __S(241) as any as S.Schema<GetEventStreamResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventStream",
}));

export type GetExportJobError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of a specific export job for an application.
 */
export const getExportJob: API.OperationMethod<
  GetExportJobRequest,
  GetExportJobResponse,
  GetExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(242) as any as S.Schema<GetExportJobRequest>,
  output: __S(52) as any as S.Schema<GetExportJobResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExportJob",
}));

export type GetExportJobsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of all the export jobs for an application.
 */
export const getExportJobs: API.OperationMethod<
  GetExportJobsRequest,
  GetExportJobsResponse,
  GetExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243) as any as S.Schema<GetExportJobsRequest>,
  output: __S(246) as any as S.Schema<GetExportJobsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExportJobs",
}));

export type GetGcmChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the GCM channel for an application.
 */
export const getGcmChannel: API.OperationMethod<
  GetGcmChannelRequest,
  GetGcmChannelResponse,
  GetGcmChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(247) as any as S.Schema<GetGcmChannelRequest>,
  output: __S(170) as any as S.Schema<GetGcmChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGcmChannel",
}));

export type GetImportJobError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of a specific import job for an application.
 */
export const getImportJob: API.OperationMethod<
  GetImportJobRequest,
  GetImportJobResponse,
  GetImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(248) as any as S.Schema<GetImportJobRequest>,
  output: __S(56) as any as S.Schema<GetImportJobResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImportJob",
}));

export type GetImportJobsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of all the import jobs for an application.
 */
export const getImportJobs: API.OperationMethod<
  GetImportJobsRequest,
  GetImportJobsResponse,
  GetImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(249) as any as S.Schema<GetImportJobsRequest>,
  output: __S(252) as any as S.Schema<GetImportJobsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImportJobs",
}));

export type GetInAppMessagesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the in-app messages targeted for the provided endpoint ID.
 */
export const getInAppMessages: API.OperationMethod<
  GetInAppMessagesRequest,
  GetInAppMessagesResponse,
  GetInAppMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(253) as any as S.Schema<GetInAppMessagesRequest>,
  output: __S(259) as any as S.Schema<GetInAppMessagesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInAppMessages",
}));

export type GetInAppTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the content and settings of a message template for messages sent through the in-app channel.
 */
export const getInAppTemplate: API.OperationMethod<
  GetInAppTemplateRequest,
  GetInAppTemplateResponse,
  GetInAppTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(260) as any as S.Schema<GetInAppTemplateRequest>,
  output: __S(262) as any as S.Schema<GetInAppTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInAppTemplate",
}));

export type GetJourneyError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status, configuration, and other settings for a journey.
 */
export const getJourney: API.OperationMethod<
  GetJourneyRequest,
  GetJourneyResponse,
  GetJourneyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(263) as any as S.Schema<GetJourneyRequest>,
  output: __S(108) as any as S.Schema<GetJourneyResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJourney",
}));

export type GetJourneyDateRangeKpiError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
 */
export const getJourneyDateRangeKpi: API.OperationMethod<
  GetJourneyDateRangeKpiRequest,
  GetJourneyDateRangeKpiResponse,
  GetJourneyDateRangeKpiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(264) as any as S.Schema<GetJourneyDateRangeKpiRequest>,
  output: __S(266) as any as S.Schema<GetJourneyDateRangeKpiResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJourneyDateRangeKpi",
}));

export type GetJourneyExecutionActivityMetricsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
 */
export const getJourneyExecutionActivityMetrics: API.OperationMethod<
  GetJourneyExecutionActivityMetricsRequest,
  GetJourneyExecutionActivityMetricsResponse,
  GetJourneyExecutionActivityMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(267) as any as S.Schema<GetJourneyExecutionActivityMetricsRequest>,
  output: __S(269) as any as S.Schema<GetJourneyExecutionActivityMetricsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJourneyExecutionActivityMetrics",
}));

export type GetJourneyExecutionMetricsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
 */
export const getJourneyExecutionMetrics: API.OperationMethod<
  GetJourneyExecutionMetricsRequest,
  GetJourneyExecutionMetricsResponse,
  GetJourneyExecutionMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270) as any as S.Schema<GetJourneyExecutionMetricsRequest>,
  output: __S(272) as any as S.Schema<GetJourneyExecutionMetricsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJourneyExecutionMetrics",
}));

export type GetJourneyRunExecutionActivityMetricsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.
 */
export const getJourneyRunExecutionActivityMetrics: API.OperationMethod<
  GetJourneyRunExecutionActivityMetricsRequest,
  GetJourneyRunExecutionActivityMetricsResponse,
  GetJourneyRunExecutionActivityMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(273) as any as S.Schema<GetJourneyRunExecutionActivityMetricsRequest>,
  output: __S(275) as any as S.Schema<GetJourneyRunExecutionActivityMetricsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJourneyRunExecutionActivityMetrics",
}));

export type GetJourneyRunExecutionMetricsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.
 */
export const getJourneyRunExecutionMetrics: API.OperationMethod<
  GetJourneyRunExecutionMetricsRequest,
  GetJourneyRunExecutionMetricsResponse,
  GetJourneyRunExecutionMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(276) as any as S.Schema<GetJourneyRunExecutionMetricsRequest>,
  output: __S(278) as any as S.Schema<GetJourneyRunExecutionMetricsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJourneyRunExecutionMetrics",
}));

export type GetJourneyRunsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Provides information about the runs of a journey.
 */
export const getJourneyRuns: API.OperationMethod<
  GetJourneyRunsRequest,
  GetJourneyRunsResponse,
  GetJourneyRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(279) as any as S.Schema<GetJourneyRunsRequest>,
  output: __S(283) as any as S.Schema<GetJourneyRunsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJourneyRuns",
}));

export type GetPushTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
 */
export const getPushTemplate: API.OperationMethod<
  GetPushTemplateRequest,
  GetPushTemplateResponse,
  GetPushTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(284) as any as S.Schema<GetPushTemplateRequest>,
  output: __S(286) as any as S.Schema<GetPushTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPushTemplate",
}));

export type GetRecommenderConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about an Amazon Pinpoint configuration for a recommender model.
 */
export const getRecommenderConfiguration: API.OperationMethod<
  GetRecommenderConfigurationRequest,
  GetRecommenderConfigurationResponse,
  GetRecommenderConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(287) as any as S.Schema<GetRecommenderConfigurationRequest>,
  output: __S(117) as any as S.Schema<GetRecommenderConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommenderConfiguration",
}));

export type GetRecommenderConfigurationsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
 */
export const getRecommenderConfigurations: API.OperationMethod<
  GetRecommenderConfigurationsRequest,
  GetRecommenderConfigurationsResponse,
  GetRecommenderConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(288) as any as S.Schema<GetRecommenderConfigurationsRequest>,
  output: __S(291) as any as S.Schema<GetRecommenderConfigurationsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommenderConfigurations",
}));

export type GetSegmentError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
 */
export const getSegment: API.OperationMethod<
  GetSegmentRequest,
  GetSegmentResponse,
  GetSegmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(292) as any as S.Schema<GetSegmentRequest>,
  output: __S(129) as any as S.Schema<GetSegmentResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegment",
}));

export type GetSegmentExportJobsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the export jobs for a segment.
 */
export const getSegmentExportJobs: API.OperationMethod<
  GetSegmentExportJobsRequest,
  GetSegmentExportJobsResponse,
  GetSegmentExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(293) as any as S.Schema<GetSegmentExportJobsRequest>,
  output: __S(294) as any as S.Schema<GetSegmentExportJobsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentExportJobs",
}));

export type GetSegmentImportJobsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the import jobs for a segment.
 */
export const getSegmentImportJobs: API.OperationMethod<
  GetSegmentImportJobsRequest,
  GetSegmentImportJobsResponse,
  GetSegmentImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(295) as any as S.Schema<GetSegmentImportJobsRequest>,
  output: __S(296) as any as S.Schema<GetSegmentImportJobsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentImportJobs",
}));

export type GetSegmentsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
 */
export const getSegments: API.OperationMethod<
  GetSegmentsRequest,
  GetSegmentsResponse,
  GetSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(297) as any as S.Schema<GetSegmentsRequest>,
  output: __S(300) as any as S.Schema<GetSegmentsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegments",
}));

export type GetSegmentVersionError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
 */
export const getSegmentVersion: API.OperationMethod<
  GetSegmentVersionRequest,
  GetSegmentVersionResponse,
  GetSegmentVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(301) as any as S.Schema<GetSegmentVersionRequest>,
  output: __S(302) as any as S.Schema<GetSegmentVersionResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentVersion",
}));

export type GetSegmentVersionsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
 */
export const getSegmentVersions: API.OperationMethod<
  GetSegmentVersionsRequest,
  GetSegmentVersionsResponse,
  GetSegmentVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(303) as any as S.Schema<GetSegmentVersionsRequest>,
  output: __S(304) as any as S.Schema<GetSegmentVersionsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentVersions",
}));

export type GetSmsChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the SMS channel for an application.
 */
export const getSmsChannel: API.OperationMethod<
  GetSmsChannelRequest,
  GetSmsChannelResponse,
  GetSmsChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(305) as any as S.Schema<GetSmsChannelRequest>,
  output: __S(178) as any as S.Schema<GetSmsChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSmsChannel",
}));

export type GetSmsTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
 */
export const getSmsTemplate: API.OperationMethod<
  GetSmsTemplateRequest,
  GetSmsTemplateResponse,
  GetSmsTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(306) as any as S.Schema<GetSmsTemplateRequest>,
  output: __S(308) as any as S.Schema<GetSmsTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSmsTemplate",
}));

export type GetUserEndpointsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about all the endpoints that are associated with a specific user ID.
 */
export const getUserEndpoints: API.OperationMethod<
  GetUserEndpointsRequest,
  GetUserEndpointsResponse,
  GetUserEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(309) as any as S.Schema<GetUserEndpointsRequest>,
  output: __S(310) as any as S.Schema<GetUserEndpointsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserEndpoints",
}));

export type GetVoiceChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status and settings of the voice channel for an application.
 */
export const getVoiceChannel: API.OperationMethod<
  GetVoiceChannelRequest,
  GetVoiceChannelResponse,
  GetVoiceChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(311) as any as S.Schema<GetVoiceChannelRequest>,
  output: __S(312) as any as S.Schema<GetVoiceChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceChannel",
}));

export type GetVoiceTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the content and settings of a message template for messages that are sent through the voice channel.
 */
export const getVoiceTemplate: API.OperationMethod<
  GetVoiceTemplateRequest,
  GetVoiceTemplateResponse,
  GetVoiceTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(313) as any as S.Schema<GetVoiceTemplateRequest>,
  output: __S(315) as any as S.Schema<GetVoiceTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceTemplate",
}));

export type ListJourneysError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
 */
export const listJourneys: API.OperationMethod<
  ListJourneysRequest,
  ListJourneysResponse,
  ListJourneysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(316) as any as S.Schema<ListJourneysRequest>,
  output: __S(319) as any as S.Schema<ListJourneysResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJourneys",
}));

export type ListTagsForResourceError = CommonErrors;
/**
 * Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(320) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(322) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTemplatesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
 */
export const listTemplates: API.OperationMethod<
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(323) as any as S.Schema<ListTemplatesRequest>,
  output: __S(327) as any as S.Schema<ListTemplatesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplates",
}));

export type ListTemplateVersionsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about all the versions of a specific message template.
 */
export const listTemplateVersions: API.OperationMethod<
  ListTemplateVersionsRequest,
  ListTemplateVersionsResponse,
  ListTemplateVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(328) as any as S.Schema<ListTemplateVersionsRequest>,
  output: __S(332) as any as S.Schema<ListTemplateVersionsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplateVersions",
}));

export type PhoneNumberValidateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about a phone number.
 */
export const phoneNumberValidate: API.OperationMethod<
  PhoneNumberValidateRequest,
  PhoneNumberValidateResponse,
  PhoneNumberValidateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(334) as any as S.Schema<PhoneNumberValidateRequest>,
  output: __S(336) as any as S.Schema<PhoneNumberValidateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PhoneNumberValidate",
}));

export type PutEventsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
 */
export const putEvents: API.OperationMethod<
  PutEventsRequest,
  PutEventsResponse,
  PutEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(344) as any as S.Schema<PutEventsRequest>,
  output: __S(350) as any as S.Schema<PutEventsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEvents",
}));

export type PutEventStreamError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
 */
export const putEventStream: API.OperationMethod<
  PutEventStreamRequest,
  PutEventStreamResponse,
  PutEventStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(352) as any as S.Schema<PutEventStreamRequest>,
  output: __S(241) as any as S.Schema<PutEventStreamResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutEventStream",
}));

export type RemoveAttributesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes one or more custom attributes, of the same attribute type, from the application. Existing endpoints still have the attributes but Amazon Pinpoint will stop capturing new or changed values for these attributes.
 */
export const removeAttributes: API.OperationMethod<
  RemoveAttributesRequest,
  RemoveAttributesResponse,
  RemoveAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(354) as any as S.Schema<RemoveAttributesRequest>,
  output: __S(356) as any as S.Schema<RemoveAttributesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveAttributes",
}));

export type SendMessagesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates and sends a direct message.
 */
export const sendMessages: API.OperationMethod<
  SendMessagesRequest,
  SendMessagesResponse,
  SendMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(375) as any as S.Schema<SendMessagesRequest>,
  output: __S(381) as any as S.Schema<SendMessagesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendMessages",
}));

export type SendOTPMessageError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Send an OTP message
 */
export const sendOTPMessage: API.OperationMethod<
  SendOTPMessageRequest,
  SendOTPMessageResponse,
  SendOTPMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(383) as any as S.Schema<SendOTPMessageRequest>,
  output: __S(381) as any as S.Schema<SendOTPMessageResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendOTPMessage",
}));

export type SendUsersMessagesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates and sends a message to a list of users.
 */
export const sendUsersMessages: API.OperationMethod<
  SendUsersMessagesRequest,
  SendUsersMessagesResponse,
  SendUsersMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(385) as any as S.Schema<SendUsersMessagesRequest>,
  output: __S(388) as any as S.Schema<SendUsersMessagesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendUsersMessages",
}));

export type TagResourceError = CommonErrors;
/**
 * Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(389) as any as S.Schema<TagResourceRequest>,
  output: __S(390) as any as S.Schema<TagResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = CommonErrors;
/**
 * Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(391) as any as S.Schema<UntagResourceRequest>,
  output: __S(390) as any as S.Schema<UntagResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAdmChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
 */
export const updateAdmChannel: API.OperationMethod<
  UpdateAdmChannelRequest,
  UpdateAdmChannelResponse,
  UpdateAdmChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(393) as any as S.Schema<UpdateAdmChannelRequest>,
  output: __S(136) as any as S.Schema<UpdateAdmChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAdmChannel",
}));

export type UpdateApnsChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
 */
export const updateApnsChannel: API.OperationMethod<
  UpdateApnsChannelRequest,
  UpdateApnsChannelResponse,
  UpdateApnsChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(395) as any as S.Schema<UpdateApnsChannelRequest>,
  output: __S(139) as any as S.Schema<UpdateApnsChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApnsChannel",
}));

export type UpdateApnsSandboxChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
 */
export const updateApnsSandboxChannel: API.OperationMethod<
  UpdateApnsSandboxChannelRequest,
  UpdateApnsSandboxChannelResponse,
  UpdateApnsSandboxChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(397) as any as S.Schema<UpdateApnsSandboxChannelRequest>,
  output: __S(142) as any as S.Schema<UpdateApnsSandboxChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApnsSandboxChannel",
}));

export type UpdateApnsVoipChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
 */
export const updateApnsVoipChannel: API.OperationMethod<
  UpdateApnsVoipChannelRequest,
  UpdateApnsVoipChannelResponse,
  UpdateApnsVoipChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(398) as any as S.Schema<UpdateApnsVoipChannelRequest>,
  output: __S(144) as any as S.Schema<UpdateApnsVoipChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApnsVoipChannel",
}));

export type UpdateApnsVoipSandboxChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
 */
export const updateApnsVoipSandboxChannel: API.OperationMethod<
  UpdateApnsVoipSandboxChannelRequest,
  UpdateApnsVoipSandboxChannelResponse,
  UpdateApnsVoipSandboxChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(399) as any as S.Schema<UpdateApnsVoipSandboxChannelRequest>,
  output: __S(146) as any as S.Schema<UpdateApnsVoipSandboxChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApnsVoipSandboxChannel",
}));

export type UpdateApplicationSettingsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the settings for an application.
 */
export const updateApplicationSettings: API.OperationMethod<
  UpdateApplicationSettingsRequest,
  UpdateApplicationSettingsResponse,
  UpdateApplicationSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(401) as any as S.Schema<UpdateApplicationSettingsRequest>,
  output: __S(205) as any as S.Schema<UpdateApplicationSettingsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplicationSettings",
}));

export type UpdateBaiduChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
 */
export const updateBaiduChannel: API.OperationMethod<
  UpdateBaiduChannelRequest,
  UpdateBaiduChannelResponse,
  UpdateBaiduChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(403) as any as S.Schema<UpdateBaiduChannelRequest>,
  output: __S(150) as any as S.Schema<UpdateBaiduChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBaiduChannel",
}));

export type UpdateCampaignError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the configuration and other settings for a campaign.
 */
export const updateCampaign: API.OperationMethod<
  UpdateCampaignRequest,
  UpdateCampaignResponse,
  UpdateCampaignError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(404) as any as S.Schema<UpdateCampaignRequest>,
  output: __S(44) as any as S.Schema<UpdateCampaignResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCampaign",
}));

export type UpdateEmailChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the email channel for an application or updates the status and settings of the email channel for an application.
 */
export const updateEmailChannel: API.OperationMethod<
  UpdateEmailChannelRequest,
  UpdateEmailChannelResponse,
  UpdateEmailChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(406) as any as S.Schema<UpdateEmailChannelRequest>,
  output: __S(154) as any as S.Schema<UpdateEmailChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEmailChannel",
}));

export type UpdateEmailTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing message template for messages that are sent through the email channel.
 */
export const updateEmailTemplate: API.OperationMethod<
  UpdateEmailTemplateRequest,
  UpdateEmailTemplateResponse,
  UpdateEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(407) as any as S.Schema<UpdateEmailTemplateRequest>,
  output: __S(157) as any as S.Schema<UpdateEmailTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEmailTemplate",
}));

export type UpdateEndpointError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
 */
export const updateEndpoint: API.OperationMethod<
  UpdateEndpointRequest,
  UpdateEndpointResponse,
  UpdateEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(408) as any as S.Schema<UpdateEndpointRequest>,
  output: __S(409) as any as S.Schema<UpdateEndpointResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEndpoint",
}));

export type UpdateEndpointsBatchError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
 */
export const updateEndpointsBatch: API.OperationMethod<
  UpdateEndpointsBatchRequest,
  UpdateEndpointsBatchResponse,
  UpdateEndpointsBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(413) as any as S.Schema<UpdateEndpointsBatchRequest>,
  output: __S(157) as any as S.Schema<UpdateEndpointsBatchResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEndpointsBatch",
}));

export type UpdateGcmChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
 */
export const updateGcmChannel: API.OperationMethod<
  UpdateGcmChannelRequest,
  UpdateGcmChannelResponse,
  UpdateGcmChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(415) as any as S.Schema<UpdateGcmChannelRequest>,
  output: __S(170) as any as S.Schema<UpdateGcmChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGcmChannel",
}));

export type UpdateInAppTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing message template for messages sent through the in-app message channel.
 */
export const updateInAppTemplate: API.OperationMethod<
  UpdateInAppTemplateRequest,
  UpdateInAppTemplateResponse,
  UpdateInAppTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(416) as any as S.Schema<UpdateInAppTemplateRequest>,
  output: __S(157) as any as S.Schema<UpdateInAppTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInAppTemplate",
}));

export type UpdateJourneyError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the configuration and other settings for a journey.
 */
export const updateJourney: API.OperationMethod<
  UpdateJourneyRequest,
  UpdateJourneyResponse,
  UpdateJourneyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(417) as any as S.Schema<UpdateJourneyRequest>,
  output: __S(108) as any as S.Schema<UpdateJourneyResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateJourney",
}));

export type UpdateJourneyStateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Cancels (stops) an active journey.
 */
export const updateJourneyState: API.OperationMethod<
  UpdateJourneyStateRequest,
  UpdateJourneyStateResponse,
  UpdateJourneyStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(419) as any as S.Schema<UpdateJourneyStateRequest>,
  output: __S(420) as any as S.Schema<UpdateJourneyStateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateJourneyState",
}));

export type UpdatePushTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing message template for messages that are sent through a push notification channel.
 */
export const updatePushTemplate: API.OperationMethod<
  UpdatePushTemplateRequest,
  UpdatePushTemplateResponse,
  UpdatePushTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(421) as any as S.Schema<UpdatePushTemplateRequest>,
  output: __S(157) as any as S.Schema<UpdatePushTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePushTemplate",
}));

export type UpdateRecommenderConfigurationError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an Amazon Pinpoint configuration for a recommender model.
 */
export const updateRecommenderConfiguration: API.OperationMethod<
  UpdateRecommenderConfigurationRequest,
  UpdateRecommenderConfigurationResponse,
  UpdateRecommenderConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(422) as any as S.Schema<UpdateRecommenderConfigurationRequest>,
  output: __S(117) as any as S.Schema<UpdateRecommenderConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRecommenderConfiguration",
}));

export type UpdateSegmentError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
 */
export const updateSegment: API.OperationMethod<
  UpdateSegmentRequest,
  UpdateSegmentResponse,
  UpdateSegmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(423) as any as S.Schema<UpdateSegmentRequest>,
  output: __S(129) as any as S.Schema<UpdateSegmentResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSegment",
}));

export type UpdateSmsChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
 */
export const updateSmsChannel: API.OperationMethod<
  UpdateSmsChannelRequest,
  UpdateSmsChannelResponse,
  UpdateSmsChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(425) as any as S.Schema<UpdateSmsChannelRequest>,
  output: __S(178) as any as S.Schema<UpdateSmsChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSmsChannel",
}));

export type UpdateSmsTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing message template for messages that are sent through the SMS channel.
 */
export const updateSmsTemplate: API.OperationMethod<
  UpdateSmsTemplateRequest,
  UpdateSmsTemplateResponse,
  UpdateSmsTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(426) as any as S.Schema<UpdateSmsTemplateRequest>,
  output: __S(157) as any as S.Schema<UpdateSmsTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSmsTemplate",
}));

export type UpdateTemplateActiveVersionError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Changes the status of a specific version of a message template to *active*.
 */
export const updateTemplateActiveVersion: API.OperationMethod<
  UpdateTemplateActiveVersionRequest,
  UpdateTemplateActiveVersionResponse,
  UpdateTemplateActiveVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(428) as any as S.Schema<UpdateTemplateActiveVersionRequest>,
  output: __S(157) as any as S.Schema<UpdateTemplateActiveVersionResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTemplateActiveVersion",
}));

export type UpdateVoiceChannelError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
 */
export const updateVoiceChannel: API.OperationMethod<
  UpdateVoiceChannelRequest,
  UpdateVoiceChannelResponse,
  UpdateVoiceChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(430) as any as S.Schema<UpdateVoiceChannelRequest>,
  output: __S(185) as any as S.Schema<UpdateVoiceChannelResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVoiceChannel",
}));

export type UpdateVoiceTemplateError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing message template for messages that are sent through the voice channel.
 */
export const updateVoiceTemplate: API.OperationMethod<
  UpdateVoiceTemplateRequest,
  UpdateVoiceTemplateResponse,
  UpdateVoiceTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(431) as any as S.Schema<UpdateVoiceTemplateRequest>,
  output: __S(157) as any as S.Schema<UpdateVoiceTemplateResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVoiceTemplate",
}));

export type VerifyOTPMessageError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | MethodNotAllowedException
  | NotFoundException
  | PayloadTooLargeException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Verify an OTP
 */
export const verifyOTPMessage: API.OperationMethod<
  VerifyOTPMessageRequest,
  VerifyOTPMessageResponse,
  VerifyOTPMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(433) as any as S.Schema<VerifyOTPMessageRequest>,
  output: __S(435) as any as S.Schema<VerifyOTPMessageResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    MethodNotAllowedException,
    NotFoundException,
    PayloadTooLargeException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifyOTPMessage",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), tags: S.optional(__S(0)) }),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreateApplicationRequest: S.optional(__S(1))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CreateApplicationRequest" }),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/v1/apps" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAppRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          tags: S.optional(__S(0)),
          CreationDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApplicationResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationResponse: S.optional(__S(3))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ApplicationResponse" }),
        }),
      ).annotate({ identifier: "CreateAppResponse" });
    case 5:
      return S.Array(__EndpointTypesElement);
    case 6:
      return S.suspend(() =>
        S.Struct({
          DeliveryUri: S.optional(S.String),
          EndpointTypes: S.optional(__S(5)),
        }),
      ).annotate({
        identifier: "CustomDeliveryConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Body: S.optional(S.String),
          ImageIconUrl: S.optional(S.String),
          ImageSmallIconUrl: S.optional(S.String),
          ImageUrl: S.optional(S.String),
          JsonBody: S.optional(S.String),
          MediaUrl: S.optional(S.String),
          RawContent: S.optional(S.String),
          SilentPush: S.optional(S.Boolean),
          TimeToLive: S.optional(S.Number),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({ identifier: "Message" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Data: S.optional(S.String) })).annotate({
        identifier: "CampaignCustomMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "MessageHeader" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Body: S.optional(S.String),
          FromAddress: S.optional(S.String),
          Headers: S.optional(__S(10)),
          HtmlBody: S.optional(S.String),
          Title: S.optional(S.String),
        }),
      ).annotate({ identifier: "CampaignEmailMessage" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Body: S.optional(S.String),
          MessageType: S.optional(S.String),
          OriginationNumber: S.optional(S.String),
          SenderId: S.optional(S.String),
          EntityId: S.optional(S.String),
          TemplateId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CampaignSmsMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Alignment: S.optional(S.String),
          Body: S.optional(S.String),
          TextColor: S.optional(S.String),
        }),
      ).annotate({ identifier: "InAppMessageBodyConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Alignment: S.optional(S.String),
          Header: S.optional(S.String),
          TextColor: S.optional(S.String),
        }),
      ).annotate({ identifier: "InAppMessageHeaderConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ButtonAction: S.optional(S.String), Link: S.optional(S.String) }),
      ).annotate({
        identifier: "OverrideButtonConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BackgroundColor: S.optional(S.String),
          BorderRadius: S.optional(S.Number),
          ButtonAction: S.optional(S.String),
          Link: S.optional(S.String),
          Text: S.optional(S.String),
          TextColor: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DefaultButtonConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Android: S.optional(__S(15)),
          DefaultConfig: S.optional(__S(16)),
          IOS: S.optional(__S(15)),
          Web: S.optional(__S(15)),
        }),
      ).annotate({ identifier: "InAppMessageButton" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BackgroundColor: S.optional(S.String),
          BodyConfig: S.optional(__S(13)),
          HeaderConfig: S.optional(__S(14)),
          ImageUrl: S.optional(S.String),
          PrimaryBtn: S.optional(__S(17)),
          SecondaryBtn: S.optional(__S(17)),
        }),
      ).annotate({ identifier: "InAppMessageContent" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Body: S.optional(S.String),
          Content: S.optional(__S(19)),
          CustomConfig: S.optional(__S(0)),
          Layout: S.optional(S.String),
        }),
      ).annotate({ identifier: "CampaignInAppMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ADMMessage: S.optional(__S(7)),
          APNSMessage: S.optional(__S(7)),
          BaiduMessage: S.optional(__S(7)),
          CustomMessage: S.optional(__S(8)),
          DefaultMessage: S.optional(__S(7)),
          EmailMessage: S.optional(__S(11)),
          GCMMessage: S.optional(__S(7)),
          SMSMessage: S.optional(__S(12)),
          InAppMessage: S.optional(__S(20)),
        }),
      ).annotate({ identifier: "MessageConfiguration" });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ AttributeType: S.optional(S.String), Values: S.optional(__S(22)) }),
      ).annotate({ identifier: "AttributeDimension" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(23).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ DimensionType: S.optional(S.String), Values: S.optional(__S(22)) }),
      ).annotate({ identifier: "SetDimension" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ComparisonOperator: S.optional(S.String), Value: S.optional(S.Number) }),
      ).annotate({ identifier: "MetricDimension" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(26).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(24)),
          EventType: S.optional(__S(25)),
          Metrics: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "EventDimensions" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Dimensions: S.optional(__S(28)), FilterType: S.optional(S.String) }),
      ).annotate({ identifier: "CampaignEventFilter" });
    case 6:
      return S.suspend(() =>
        S.Struct({ End: S.optional(S.String), Start: S.optional(S.String) }),
      ).annotate({ identifier: "QuietTime" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EndTime: S.optional(S.String),
          EventFilter: S.optional(__S(29)),
          Frequency: S.optional(S.String),
          IsLocalTime: S.optional(S.Boolean),
          QuietTime: S.optional(__S(30)),
          StartTime: S.optional(S.String),
          Timezone: S.optional(S.String),
        }),
      ).annotate({ identifier: "Schedule" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Version: S.optional(S.String) }),
      ).annotate({ identifier: "Template" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EmailTemplate: S.optional(__S(32)),
          PushTemplate: S.optional(__S(32)),
          SMSTemplate: S.optional(__S(32)),
          VoiceTemplate: S.optional(__S(32)),
          InAppTemplate: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "TemplateConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CustomDeliveryConfiguration: S.optional(__S(6)),
          MessageConfiguration: S.optional(__S(21)),
          Schedule: S.optional(__S(31)),
          SizePercent: S.optional(S.Number),
          TemplateConfiguration: S.optional(__S(33)),
          TreatmentDescription: S.optional(S.String),
          TreatmentName: S.optional(S.String),
        }),
      ).annotate({ identifier: "WriteTreatmentResource" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          LambdaFunctionName: S.optional(S.String),
          Mode: S.optional(S.String),
          WebUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "CampaignHook" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Daily: S.optional(S.Number),
          MaximumDuration: S.optional(S.Number),
          MessagesPerSecond: S.optional(S.Number),
          Total: S.optional(S.Number),
          Session: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CampaignLimits" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AdditionalTreatments: S.optional(__S(35)),
          CustomDeliveryConfiguration: S.optional(__S(6)),
          Description: S.optional(S.String),
          HoldoutPercent: S.optional(S.Number),
          Hook: S.optional(__S(36)),
          IsPaused: S.optional(S.Boolean),
          Limits: S.optional(__S(37)),
          MessageConfiguration: S.optional(__S(21)),
          Name: S.optional(S.String),
          Schedule: S.optional(__S(31)),
          SegmentId: S.optional(S.String),
          SegmentVersion: S.optional(S.Number),
          tags: S.optional(__S(0)),
          TemplateConfiguration: S.optional(__S(33)),
          TreatmentDescription: S.optional(S.String),
          TreatmentName: S.optional(S.String),
          Priority: S.optional(S.Number),
        }),
      ).annotate({ identifier: "WriteCampaignRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          WriteCampaignRequest: S.optional(__S(38))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "WriteCampaignRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/campaigns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateCampaignRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ CampaignStatus: S.optional(S.String) })).annotate({
        identifier: "CampaignState",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CustomDeliveryConfiguration: S.optional(__S(6)),
          Id: S.optional(S.String),
          MessageConfiguration: S.optional(__S(21)),
          Schedule: S.optional(__S(31)),
          SizePercent: S.optional(S.Number),
          State: S.optional(__S(40)),
          TemplateConfiguration: S.optional(__S(33)),
          TreatmentDescription: S.optional(S.String),
          TreatmentName: S.optional(S.String),
        }),
      ).annotate({ identifier: "TreatmentResource" });
    case 2:
      return S.Array(__S(41));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AdditionalTreatments: S.optional(__S(42)),
          ApplicationId: S.optional(S.String),
          Arn: S.optional(S.String),
          CreationDate: S.optional(S.String),
          CustomDeliveryConfiguration: S.optional(__S(6)),
          DefaultState: S.optional(__S(40)),
          Description: S.optional(S.String),
          HoldoutPercent: S.optional(S.Number),
          Hook: S.optional(__S(36)),
          Id: S.optional(S.String),
          IsPaused: S.optional(S.Boolean),
          LastModifiedDate: S.optional(S.String),
          Limits: S.optional(__S(37)),
          MessageConfiguration: S.optional(__S(21)),
          Name: S.optional(S.String),
          Schedule: S.optional(__S(31)),
          SegmentId: S.optional(S.String),
          SegmentVersion: S.optional(S.Number),
          State: S.optional(__S(40)),
          tags: S.optional(__S(0)),
          TemplateConfiguration: S.optional(__S(33)),
          TreatmentDescription: S.optional(S.String),
          TreatmentName: S.optional(S.String),
          Version: S.optional(S.Number),
          Priority: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CampaignResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CampaignResponse: S.optional(__S(43))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CampaignResponse" }),
        }),
      ).annotate({ identifier: "CreateCampaignResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DefaultSubstitutions: S.optional(S.String),
          HtmlPart: S.optional(S.String),
          RecommenderId: S.optional(S.String),
          Subject: S.optional(S.String),
          Headers: S.optional(__S(10)),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
          TextPart: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmailTemplateRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EmailTemplateRequest: S.optional(__S(45))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EmailTemplateRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/templates/{TemplateName}/email" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEmailTemplateRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Message: S.optional(S.String),
          RequestID: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateTemplateMessageBody",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreateTemplateMessageBody: S.optional(__S(47))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CreateTemplateMessageBody" }),
        }),
      ).annotate({
        identifier: "CreateEmailTemplateResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RoleArn: S.optional(S.String),
          S3UrlPrefix: S.optional(S.String),
          SegmentId: S.optional(S.String),
          SegmentVersion: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ExportJobRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ExportJobRequest: S.optional(__S(49))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ExportJobRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/jobs/export" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateExportJobRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CompletedPieces: S.optional(S.Number),
          CompletionDate: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Definition: S.optional(__S(49)),
          FailedPieces: S.optional(S.Number),
          Failures: S.optional(__S(22)),
          Id: S.optional(S.String),
          JobStatus: S.optional(S.String),
          TotalFailures: S.optional(S.Number),
          TotalPieces: S.optional(S.Number),
          TotalProcessed: S.optional(S.Number),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExportJobResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExportJobResponse: S.optional(__S(51))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ExportJobResponse" }),
        }),
      ).annotate({ identifier: "CreateExportJobResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DefineSegment: S.optional(S.Boolean),
          ExternalId: S.optional(S.String),
          Format: S.optional(S.String),
          RegisterEndpoints: S.optional(S.Boolean),
          RoleArn: S.optional(S.String),
          S3Url: S.optional(S.String),
          SegmentId: S.optional(S.String),
          SegmentName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportJobRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          ImportJobRequest: S.optional(__S(53))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ImportJobRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/jobs/import" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateImportJobRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CompletedPieces: S.optional(S.Number),
          CompletionDate: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Definition: S.optional(__S(53)),
          FailedPieces: S.optional(S.Number),
          Failures: S.optional(__S(22)),
          Id: S.optional(S.String),
          JobStatus: S.optional(S.String),
          TotalFailures: S.optional(S.Number),
          TotalPieces: S.optional(S.Number),
          TotalProcessed: S.optional(S.Number),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportJobResponse" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ImportJobResponse: S.optional(__S(55))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ImportJobResponse" }),
        }),
      ).annotate({ identifier: "CreateImportJobResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Content: S.optional(__S(19)),
          CustomConfig: S.optional(__S(0)),
          Layout: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "InAppTemplateRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InAppTemplateRequest: S.optional(__S(57))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "InAppTemplateRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/templates/{TemplateName}/inapp" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateInAppTemplateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TemplateCreateMessageBody: S.optional(__S(47))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "TemplateCreateMessageBody" }),
        }),
      ).annotate({
        identifier: "CreateInAppTemplateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DeliveryUri: S.optional(S.String),
          EndpointTypes: S.optional(__S(5)),
          MessageConfig: S.optional(__S(8)),
          NextActivity: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "CustomMessageActivity" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Dimensions: S.optional(__S(28)),
          MessageActivity: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventCondition" });
    case 6:
      return S.suspend(() => S.Struct({ SegmentId: S.optional(S.String) })).annotate({
        identifier: "SegmentCondition",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Duration: S.optional(S.String), RecencyType: S.optional(S.String) }),
      ).annotate({ identifier: "RecencyDimension" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Recency: S.optional(__S(63)) })).annotate({
        identifier: "SegmentBehaviors",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AppVersion: S.optional(__S(25)),
          Channel: S.optional(__S(25)),
          DeviceType: S.optional(__S(25)),
          Make: S.optional(__S(25)),
          Model: S.optional(__S(25)),
          Platform: S.optional(__S(25)),
        }),
      ).annotate({ identifier: "SegmentDemographics" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Latitude: S.optional(S.Number), Longitude: S.optional(S.Number) }),
      ).annotate({ identifier: "GPSCoordinates" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Coordinates: S.optional(__S(66)),
          RangeInKilometers: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GPSPointDimension" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Country: S.optional(__S(25)), GPSPoint: S.optional(__S(67)) }),
      ).annotate({ identifier: "SegmentLocation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(24)),
          Behavior: S.optional(__S(64)),
          Demographic: S.optional(__S(65)),
          Location: S.optional(__S(68)),
          Metrics: S.optional(__S(27)),
          UserAttributes: S.optional(__S(24)),
        }),
      ).annotate({ identifier: "SegmentDimensions" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EventCondition: S.optional(__S(61)),
          SegmentCondition: S.optional(__S(62)),
          SegmentDimensions: S.optional(__S(69)),
        }).pipe(S.encodeKeys({ SegmentDimensions: "segmentDimensions" })),
      ).annotate({ identifier: "SimpleCondition" });
    case 7:
      return S.Array(__S(70));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Conditions: S.optional(__S(71)), Operator: S.optional(S.String) }),
      ).annotate({ identifier: "Condition" });
    case 1:
      return S.suspend(() =>
        S.Struct({ WaitFor: S.optional(S.String), WaitUntil: S.optional(S.String) }),
      ).annotate({ identifier: "WaitTime" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Condition: S.optional(__S(72)),
          EvaluationWaitTime: S.optional(__S(73)),
          FalseActivity: S.optional(S.String),
          TrueActivity: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConditionalSplitActivity" });
    case 3:
      return S.suspend(() => S.Struct({ FromAddress: S.optional(S.String) })).annotate({
        identifier: "JourneyEmailMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MessageConfig: S.optional(__S(75)),
          NextActivity: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmailMessageActivity" });
    case 5:
      return S.suspend(() =>
        S.Struct({ NextActivity: S.optional(S.String), Percentage: S.optional(S.Number) }),
      ).annotate({ identifier: "HoldoutActivity" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Condition: S.optional(__S(70)), NextActivity: S.optional(S.String) }),
      ).annotate({ identifier: "MultiConditionalBranch" });
    case 7:
      return S.Array(__S(78));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Branches: S.optional(__S(79)),
          DefaultActivity: S.optional(S.String),
          EvaluationWaitTime: S.optional(__S(73)),
        }),
      ).annotate({
        identifier: "MultiConditionalSplitActivity",
      });
    case 1:
      return S.suspend(() => S.Struct({ TimeToLive: S.optional(S.String) })).annotate({
        identifier: "JourneyPushMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MessageConfig: S.optional(__S(81)),
          NextActivity: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "PushMessageActivity" });
    case 3:
      return S.Array(__S(77));
    case 4:
      return S.suspend(() => S.Struct({ Branches: S.optional(__S(83)) })).annotate({
        identifier: "RandomSplitActivity",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MessageType: S.optional(S.String),
          OriginationNumber: S.optional(S.String),
          SenderId: S.optional(S.String),
          EntityId: S.optional(S.String),
          TemplateId: S.optional(S.String),
        }),
      ).annotate({ identifier: "JourneySMSMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MessageConfig: S.optional(__S(85)),
          NextActivity: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "SMSMessageActivity" });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextActivity: S.optional(S.String), WaitTime: S.optional(__S(73)) }),
      ).annotate({ identifier: "WaitActivity" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ NextActivity: S.optional(S.String) })).annotate({
        identifier: "ContactCenterActivity",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CUSTOM: S.optional(__S(60)),
          ConditionalSplit: S.optional(__S(74)),
          Description: S.optional(S.String),
          EMAIL: S.optional(__S(76)),
          Holdout: S.optional(__S(77)),
          MultiCondition: S.optional(__S(80)),
          PUSH: S.optional(__S(82)),
          RandomSplit: S.optional(__S(84)),
          SMS: S.optional(__S(86)),
          Wait: S.optional(__S(87)),
          ContactCenter: S.optional(__S(88)),
        }),
      ).annotate({ identifier: "Activity" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(89).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ Cap: S.optional(S.Number), Days: S.optional(S.Number) }),
      ).annotate({ identifier: "JourneyTimeframeCap" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DailyCap: S.optional(S.Number),
          EndpointReentryCap: S.optional(S.Number),
          MessagesPerSecond: S.optional(S.Number),
          EndpointReentryInterval: S.optional(S.String),
          TimeframeCap: S.optional(__S(91)),
          TotalCap: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JourneyLimits" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Timezone: S.optional(S.String),
        }),
      ).annotate({ identifier: "JourneySchedule" });
    case 6:
      return S.suspend(() =>
        S.Struct({ EventFilter: S.optional(__S(29)), SegmentId: S.optional(S.String) }),
      ).annotate({ identifier: "EventStartCondition" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          EventStartCondition: S.optional(__S(94)),
          SegmentStartCondition: S.optional(__S(62)),
        }),
      ).annotate({ identifier: "StartCondition" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConnectCampaignArn: S.optional(S.String),
          ConnectCampaignExecutionRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "JourneyChannelSettings" });
    case 1:
      return S.suspend(() =>
        S.Struct({ StartTime: S.optional(S.String), EndTime: S.optional(S.String) }),
      ).annotate({ identifier: "OpenHoursRule" });
    case 2:
      return S.Array(__S(97));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(98).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          EMAIL: S.optional(__S(99)),
          SMS: S.optional(__S(99)),
          PUSH: S.optional(__S(99)),
          VOICE: S.optional(__S(99)),
          CUSTOM: S.optional(__S(99)),
        }),
      ).annotate({ identifier: "OpenHours" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          StartDateTime: S.optional(S.String),
          EndDateTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "ClosedDaysRule" });
    case 6:
      return S.Array(__S(101));
    case 7:
      return S.suspend(() =>
        S.Struct({
          EMAIL: S.optional(__S(102)),
          SMS: S.optional(__S(102)),
          PUSH: S.optional(__S(102)),
          VOICE: S.optional(__S(102)),
          CUSTOM: S.optional(__S(102)),
        }),
      ).annotate({ identifier: "ClosedDays" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__TimezoneEstimationMethodsElement);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Activities: S.optional(__S(90)),
          CreationDate: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Limits: S.optional(__S(92)),
          LocalTime: S.optional(S.Boolean),
          Name: S.optional(S.String),
          QuietTime: S.optional(__S(30)),
          RefreshFrequency: S.optional(S.String),
          Schedule: S.optional(__S(93)),
          StartActivity: S.optional(S.String),
          StartCondition: S.optional(__S(95)),
          State: S.optional(S.String),
          WaitForQuietTime: S.optional(S.Boolean),
          RefreshOnSegmentUpdate: S.optional(S.Boolean),
          JourneyChannelSettings: S.optional(__S(96)),
          SendingSchedule: S.optional(S.Boolean),
          OpenHours: S.optional(__S(100)),
          ClosedDays: S.optional(__S(103)),
          TimezoneEstimationMethods: S.optional(__S(104)),
        }),
      ).annotate({ identifier: "WriteJourneyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          WriteJourneyRequest: S.optional(__S(105))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "WriteJourneyRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/journeys" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateJourneyRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Activities: S.optional(__S(90)),
          ApplicationId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Id: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Limits: S.optional(__S(92)),
          LocalTime: S.optional(S.Boolean),
          Name: S.optional(S.String),
          QuietTime: S.optional(__S(30)),
          RefreshFrequency: S.optional(S.String),
          Schedule: S.optional(__S(93)),
          StartActivity: S.optional(S.String),
          StartCondition: S.optional(__S(95)),
          State: S.optional(S.String),
          tags: S.optional(__S(0)),
          WaitForQuietTime: S.optional(S.Boolean),
          RefreshOnSegmentUpdate: S.optional(S.Boolean),
          JourneyChannelSettings: S.optional(__S(96)),
          SendingSchedule: S.optional(S.Boolean),
          OpenHours: S.optional(__S(100)),
          ClosedDays: S.optional(__S(103)),
          TimezoneEstimationMethods: S.optional(__S(104)),
        }),
      ).annotate({ identifier: "JourneyResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JourneyResponse: S.optional(__S(107))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyResponse" }),
        }),
      ).annotate({ identifier: "CreateJourneyResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Body: S.optional(S.String),
          ImageIconUrl: S.optional(S.String),
          ImageUrl: S.optional(S.String),
          RawContent: S.optional(S.String),
          SmallImageIconUrl: S.optional(S.String),
          Sound: S.optional(S.String),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AndroidPushNotificationTemplate",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Body: S.optional(S.String),
          MediaUrl: S.optional(S.String),
          RawContent: S.optional(S.String),
          Sound: S.optional(S.String),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({
        identifier: "APNSPushNotificationTemplate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Body: S.optional(S.String),
          Sound: S.optional(S.String),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DefaultPushNotificationTemplate",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ADM: S.optional(__S(109)),
          APNS: S.optional(__S(110)),
          Baidu: S.optional(__S(109)),
          Default: S.optional(__S(111)),
          DefaultSubstitutions: S.optional(S.String),
          GCM: S.optional(__S(109)),
          RecommenderId: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PushNotificationTemplateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PushNotificationTemplateRequest: S.optional(__S(112))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "PushNotificationTemplateRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/templates/{TemplateName}/push" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePushTemplateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(0)),
          Description: S.optional(S.String),
          Name: S.optional(S.String),
          RecommendationProviderIdType: S.optional(S.String),
          RecommendationProviderRoleArn: S.optional(S.String),
          RecommendationProviderUri: S.optional(S.String),
          RecommendationTransformerUri: S.optional(S.String),
          RecommendationsDisplayName: S.optional(S.String),
          RecommendationsPerMessage: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CreateRecommenderConfigurationShape",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CreateRecommenderConfiguration: S.optional(__S(114))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CreateRecommenderConfigurationShape" }),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/recommenders" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateRecommenderConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(0)),
          CreationDate: S.optional(S.String),
          Description: S.optional(S.String),
          Id: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Name: S.optional(S.String),
          RecommendationProviderIdType: S.optional(S.String),
          RecommendationProviderRoleArn: S.optional(S.String),
          RecommendationProviderUri: S.optional(S.String),
          RecommendationTransformerUri: S.optional(S.String),
          RecommendationsDisplayName: S.optional(S.String),
          RecommendationsPerMessage: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RecommenderConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RecommenderConfigurationResponse: S.optional(__S(116))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "RecommenderConfigurationResponse" }),
        }),
      ).annotate({
        identifier: "CreateRecommenderConfigurationResponse",
      });
    case 6:
      return S.Array(__S(69));
    case 7:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Version: S.optional(S.Number) }),
      ).annotate({ identifier: "SegmentReference" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(119));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Dimensions: S.optional(__S(118)),
          SourceSegments: S.optional(__S(120)),
          SourceType: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "SegmentGroup" });
    case 2:
      return S.Array(__S(121));
    case 3:
      return S.suspend(() =>
        S.Struct({ Groups: S.optional(__S(122)), Include: S.optional(S.String) }),
      ).annotate({ identifier: "SegmentGroupList" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Dimensions: S.optional(__S(69)),
          Name: S.optional(S.String),
          SegmentGroups: S.optional(__S(123)),
          tags: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "WriteSegmentRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          WriteSegmentRequest: S.optional(__S(124))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "WriteSegmentRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/segments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSegmentRequest" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelCounts: S.optional(__S(126)),
          ExternalId: S.optional(S.String),
          Format: S.optional(S.String),
          RoleArn: S.optional(S.String),
          S3Url: S.optional(S.String),
          Size: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SegmentImportResource" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          Arn: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Dimensions: S.optional(__S(69)),
          Id: S.optional(S.String),
          ImportDefinition: S.optional(__S(127)),
          LastModifiedDate: S.optional(S.String),
          Name: S.optional(S.String),
          SegmentGroups: S.optional(__S(123)),
          SegmentType: S.optional(S.String),
          tags: S.optional(__S(0)),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SegmentResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SegmentResponse: S.optional(__S(128))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SegmentResponse" }),
        }),
      ).annotate({ identifier: "CreateSegmentResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Body: S.optional(S.String),
          DefaultSubstitutions: S.optional(S.String),
          RecommenderId: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "SMSTemplateRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SMSTemplateRequest: S.optional(__S(130))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SMSTemplateRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/templates/{TemplateName}/sms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSmsTemplateRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Body: S.optional(S.String),
          DefaultSubstitutions: S.optional(S.String),
          LanguageCode: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
          VoiceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "VoiceTemplateRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          VoiceTemplateRequest: S.optional(__S(132))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "VoiceTemplateRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/templates/{TemplateName}/voice" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateVoiceTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/adm" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAdmChannelRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          HasCredential: S.optional(S.Boolean),
          Id: S.optional(S.String),
          IsArchived: S.optional(S.Boolean),
          LastModifiedBy: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Platform: S.optional(S.String),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ADMChannelResponse" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ADMChannelResponse: S.optional(__S(135))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ADMChannelResponse" }),
        }),
      ).annotate({ identifier: "DeleteAdmChannelResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/apns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApnsChannelRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          DefaultAuthenticationMethod: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          HasCredential: S.optional(S.Boolean),
          HasTokenKey: S.optional(S.Boolean),
          Id: S.optional(S.String),
          IsArchived: S.optional(S.Boolean),
          LastModifiedBy: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Platform: S.optional(S.String),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "APNSChannelResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          APNSChannelResponse: S.optional(__S(138))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSChannelResponse" }),
        }),
      ).annotate({
        identifier: "DeleteApnsChannelResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/apns_sandbox" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteApnsSandboxChannelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          DefaultAuthenticationMethod: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          HasCredential: S.optional(S.Boolean),
          HasTokenKey: S.optional(S.Boolean),
          Id: S.optional(S.String),
          IsArchived: S.optional(S.Boolean),
          LastModifiedBy: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Platform: S.optional(S.String),
          Version: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "APNSSandboxChannelResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          APNSSandboxChannelResponse: S.optional(__S(141))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSSandboxChannelResponse" }),
        }),
      ).annotate({
        identifier: "DeleteApnsSandboxChannelResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/apns_voip" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteApnsVoipChannelRequest",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          APNSVoipChannelResponse: S.optional(__S(138))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSVoipChannelResponse" }),
        }),
      ).annotate({
        identifier: "DeleteApnsVoipChannelResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteApnsVoipSandboxChannelRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          APNSVoipSandboxChannelResponse: S.optional(__S(141))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSVoipSandboxChannelResponse" }),
        }),
      ).annotate({
        identifier: "DeleteApnsVoipSandboxChannelResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAppRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/baidu" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteBaiduChannelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Credential: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          HasCredential: S.optional(S.Boolean),
          Id: S.optional(S.String),
          IsArchived: S.optional(S.Boolean),
          LastModifiedBy: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Platform: S.optional(S.String),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BaiduChannelResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          BaiduChannelResponse: S.optional(__S(149))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "BaiduChannelResponse" }),
        }),
      ).annotate({
        identifier: "DeleteBaiduChannelResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          CampaignId: S.String.pipe(T.HttpLabel("CampaignId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/campaigns/{CampaignId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteCampaignRequest" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/email" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEmailChannelRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          ConfigurationSet: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          FromAddress: S.optional(S.String),
          HasCredential: S.optional(S.Boolean),
          Id: S.optional(S.String),
          Identity: S.optional(S.String),
          IsArchived: S.optional(S.Boolean),
          LastModifiedBy: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          MessagesPerSecond: S.optional(S.Number),
          Platform: S.optional(S.String),
          RoleArn: S.optional(S.String),
          OrchestrationSendingRoleArn: S.optional(S.String),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EmailChannelResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EmailChannelResponse: S.optional(__S(153))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EmailChannelResponse" }),
        }),
      ).annotate({
        identifier: "DeleteEmailChannelResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/templates/{TemplateName}/email" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEmailTemplateRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Message: S.optional(S.String), RequestID: S.optional(S.String) }),
      ).annotate({ identifier: "MessageBody" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MessageBody: S.optional(__S(156))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "MessageBody" }),
        }),
      ).annotate({
        identifier: "DeleteEmailTemplateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EndpointId: S.String.pipe(T.HttpLabel("EndpointId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/endpoints/{EndpointId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEndpointRequest" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(22).pipe(S.optional));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AppVersion: S.optional(S.String),
          Locale: S.optional(S.String),
          Make: S.optional(S.String),
          Model: S.optional(S.String),
          ModelVersion: S.optional(S.String),
          Platform: S.optional(S.String),
          PlatformVersion: S.optional(S.String),
          Timezone: S.optional(S.String),
        }),
      ).annotate({ identifier: "EndpointDemographic" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(S.String),
          Country: S.optional(S.String),
          Latitude: S.optional(S.Number),
          Longitude: S.optional(S.Number),
          PostalCode: S.optional(S.String),
          Region: S.optional(S.String),
        }),
      ).annotate({ identifier: "EndpointLocation" });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserAttributes: S.optional(__S(159)), UserId: S.optional(S.String) }),
      ).annotate({ identifier: "EndpointUser" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          ApplicationId: S.optional(S.String),
          Attributes: S.optional(__S(159)),
          ChannelType: S.optional(S.String),
          CohortId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Demographic: S.optional(__S(160)),
          EffectiveDate: S.optional(S.String),
          EndpointStatus: S.optional(S.String),
          Id: S.optional(S.String),
          Location: S.optional(__S(161)),
          Metrics: S.optional(__S(126)),
          OptOut: S.optional(S.String),
          RequestId: S.optional(S.String),
          User: S.optional(__S(162)),
        }),
      ).annotate({ identifier: "EndpointResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EndpointResponse: S.optional(__S(163))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EndpointResponse" }),
        }),
      ).annotate({ identifier: "DeleteEndpointResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/eventstream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEventStreamRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          DestinationStreamArn: S.optional(S.String),
          ExternalId: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          LastUpdatedBy: S.optional(S.String),
          RoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventStream" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EventStream: S.optional(__S(166))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EventStream" }),
        }),
      ).annotate({
        identifier: "DeleteEventStreamResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/gcm" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGcmChannelRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Credential: S.optional(S.String),
          DefaultAuthenticationMethod: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          HasCredential: S.optional(S.Boolean),
          HasFcmServiceCredentials: S.optional(S.Boolean),
          Id: S.optional(S.String),
          IsArchived: S.optional(S.Boolean),
          LastModifiedBy: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Platform: S.optional(S.String),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GCMChannelResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          GCMChannelResponse: S.optional(__S(169))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "GCMChannelResponse" }),
        }),
      ).annotate({ identifier: "DeleteGcmChannelResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/templates/{TemplateName}/inapp" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteInAppTemplateRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteJourneyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/templates/{TemplateName}/push" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePushTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ RecommenderId: S.String.pipe(T.HttpLabel("RecommenderId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/recommenders/{RecommenderId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecommenderConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          SegmentId: S.String.pipe(T.HttpLabel("SegmentId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/segments/{SegmentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSegmentRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/sms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSmsChannelRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          HasCredential: S.optional(S.Boolean),
          Id: S.optional(S.String),
          IsArchived: S.optional(S.Boolean),
          LastModifiedBy: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Platform: S.optional(S.String),
          PromotionalMessagesPerSecond: S.optional(S.Number),
          SenderId: S.optional(S.String),
          ShortCode: S.optional(S.String),
          TransactionalMessagesPerSecond: S.optional(S.Number),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SMSChannelResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SMSChannelResponse: S.optional(__S(177))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SMSChannelResponse" }),
        }),
      ).annotate({ identifier: "DeleteSmsChannelResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/templates/{TemplateName}/sms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSmsTemplateRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          UserId: S.String.pipe(T.HttpLabel("UserId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/users/{UserId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteUserEndpointsRequest",
      });
    case 5:
      return S.Array(__S(163));
    case 6:
      return S.suspend(() => S.Struct({ Item: S.optional(__S(181)) })).annotate({
        identifier: "EndpointsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EndpointsResponse: S.optional(__S(182))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EndpointsResponse" }),
        }),
      ).annotate({
        identifier: "DeleteUserEndpointsResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/apps/{ApplicationId}/channels/voice" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceChannelRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VoiceChannelResponse: S.optional(__S(135))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "VoiceChannelResponse" }),
        }),
      ).annotate({
        identifier: "DeleteVoiceChannelResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/templates/{TemplateName}/voice" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceTemplateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/adm" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAdmChannelRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/apns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApnsChannelRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          APNSChannelResponse: S.optional(__S(138))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSChannelResponse" }),
        }),
      ).annotate({ identifier: "GetApnsChannelResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/apns_sandbox" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetApnsSandboxChannelRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/apns_voip" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetApnsVoipChannelRequest",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetApnsVoipSandboxChannelRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAppRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("end-time"),
          ),
          KpiName: S.String.pipe(T.HttpLabel("KpiName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("start-time"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/kpis/daterange/{KpiName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetApplicationDateRangeKpiRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Type: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResultRowValue" });
    case 4:
      return S.Array(__S(195));
    case 5:
      return S.suspend(() =>
        S.Struct({
          GroupedBys: S.optional(__S(196)),
          Values: S.optional(__S(196)),
        }),
      ).annotate({ identifier: "ResultRow" });
    case 6:
      return S.Array(__S(197));
    case 7:
      return S.suspend(() => S.Struct({ Rows: S.optional(__S(198)) })).annotate({
        identifier: "BaseKpiResult",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          KpiName: S.optional(S.String),
          KpiResult: S.optional(__S(199)),
          NextToken: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ApplicationDateRangeKpiResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationDateRangeKpiResponse: S.optional(__S(200))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ApplicationDateRangeKpiResponse" }),
        }),
      ).annotate({
        identifier: "GetApplicationDateRangeKpiResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetApplicationSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DailyCap: S.optional(S.Number),
          TimeframeCap: S.optional(__S(91)),
          TotalCap: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ApplicationSettingsJourneyLimits",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CampaignHook: S.optional(__S(36)),
          LastModifiedDate: S.optional(S.String),
          Limits: S.optional(__S(37)),
          QuietTime: S.optional(__S(30)),
          JourneyLimits: S.optional(__S(203)),
        }),
      ).annotate({
        identifier: "ApplicationSettingsResource",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationSettingsResource: S.optional(__S(204))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ApplicationSettingsResource" }),
        }),
      ).annotate({
        identifier: "GetApplicationSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/v1/apps" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetAppsRequest" });
    case 7:
      return S.Array(__S(3));
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(207)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ApplicationsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationsResponse: S.optional(__S(208))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ApplicationsResponse" }),
        }),
      ).annotate({ identifier: "GetAppsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/baidu" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBaiduChannelRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BaiduChannelResponse: S.optional(__S(149))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "BaiduChannelResponse" }),
        }),
      ).annotate({ identifier: "GetBaiduChannelResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          CampaignId: S.String.pipe(T.HttpLabel("CampaignId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/campaigns/{CampaignId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCampaignRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          CampaignId: S.String.pipe(T.HttpLabel("CampaignId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/activities",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCampaignActivitiesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CampaignId: S.optional(S.String),
          End: S.optional(S.String),
          Id: S.optional(S.String),
          Result: S.optional(S.String),
          ScheduledStart: S.optional(S.String),
          Start: S.optional(S.String),
          State: S.optional(S.String),
          SuccessfulEndpointCount: S.optional(S.Number),
          TimezonesCompletedCount: S.optional(S.Number),
          TimezonesTotalCount: S.optional(S.Number),
          TotalEndpointCount: S.optional(S.Number),
          TreatmentId: S.optional(S.String),
          ExecutionMetrics: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "ActivityResponse" });
    case 7:
      return S.Array(__S(214));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(215)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ActivitiesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ActivitiesResponse: S.optional(__S(216))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ActivitiesResponse" }),
        }),
      ).annotate({
        identifier: "GetCampaignActivitiesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          CampaignId: S.String.pipe(T.HttpLabel("CampaignId")),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("end-time"),
          ),
          KpiName: S.String.pipe(T.HttpLabel("KpiName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("start-time"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/kpis/daterange/{KpiName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCampaignDateRangeKpiRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CampaignId: S.optional(S.String),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          KpiName: S.optional(S.String),
          KpiResult: S.optional(__S(199)),
          NextToken: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CampaignDateRangeKpiResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CampaignDateRangeKpiResponse: S.optional(__S(219))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CampaignDateRangeKpiResponse" }),
        }),
      ).annotate({
        identifier: "GetCampaignDateRangeKpiResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/campaigns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCampaignsRequest" });
    case 6:
      return S.Array(__S(43));
    case 7:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(222)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "CampaignsResponse" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CampaignsResponse: S.optional(__S(223))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CampaignsResponse" }),
        }),
      ).annotate({ identifier: "GetCampaignsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          CampaignId: S.String.pipe(T.HttpLabel("CampaignId")),
          Version: S.String.pipe(T.HttpLabel("Version")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions/{Version}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCampaignVersionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CampaignResponse: S.optional(__S(43))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CampaignResponse" }),
        }),
      ).annotate({
        identifier: "GetCampaignVersionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          CampaignId: S.String.pipe(T.HttpLabel("CampaignId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCampaignVersionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CampaignsResponse: S.optional(__S(223))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "CampaignsResponse" }),
        }),
      ).annotate({
        identifier: "GetCampaignVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetChannelsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          CreationDate: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          HasCredential: S.optional(S.Boolean),
          Id: S.optional(S.String),
          IsArchived: S.optional(S.Boolean),
          LastModifiedBy: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ChannelResponse" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(230).pipe(S.optional));
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Channels: S.optional(__S(231)) })).annotate({
        identifier: "ChannelsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ChannelsResponse: S.optional(__S(232))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ChannelsResponse" }),
        }),
      ).annotate({ identifier: "GetChannelsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/email" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEmailChannelRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EmailChannelResponse: S.optional(__S(153))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EmailChannelResponse" }),
        }),
      ).annotate({ identifier: "GetEmailChannelResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/templates/{TemplateName}/email" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEmailTemplateRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CreationDate: S.optional(S.String),
          DefaultSubstitutions: S.optional(S.String),
          HtmlPart: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          RecommenderId: S.optional(S.String),
          Subject: S.optional(S.String),
          Headers: S.optional(__S(10)),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateType: S.optional(S.String),
          TextPart: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmailTemplateResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EmailTemplateResponse: S.optional(__S(237))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EmailTemplateResponse" }),
        }),
      ).annotate({ identifier: "GetEmailTemplateResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EndpointId: S.String.pipe(T.HttpLabel("EndpointId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/endpoints/{EndpointId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEndpointRequest" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/eventstream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEventStreamRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EventStream: S.optional(__S(166))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EventStream" }),
        }),
      ).annotate({ identifier: "GetEventStreamResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/jobs/export/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetExportJobRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/jobs/export" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetExportJobsRequest" });
    case 4:
      return S.Array(__S(51));
    case 5:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(244)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ExportJobsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ExportJobsResponse: S.optional(__S(245))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ExportJobsResponse" }),
        }),
      ).annotate({ identifier: "GetExportJobsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/gcm" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetGcmChannelRequest" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/jobs/import/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetImportJobRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/jobs/import" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetImportJobsRequest" });
    case 2:
      return S.Array(__S(55));
    case 3:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(250)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ImportJobsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ImportJobsResponse: S.optional(__S(251))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ImportJobsResponse" }),
        }),
      ).annotate({ identifier: "GetImportJobsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EndpointId: S.String.pipe(T.HttpLabel("EndpointId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/endpoints/{EndpointId}/inappmessages",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetInAppMessagesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Content: S.optional(__S(19)),
          CustomConfig: S.optional(__S(0)),
          Layout: S.optional(S.String),
        }),
      ).annotate({ identifier: "InAppMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EndDate: S.optional(S.String),
          EventFilter: S.optional(__S(29)),
          QuietTime: S.optional(__S(30)),
        }),
      ).annotate({ identifier: "InAppCampaignSchedule" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CampaignId: S.optional(S.String),
          DailyCap: S.optional(S.Number),
          InAppMessage: S.optional(__S(254)),
          Priority: S.optional(S.Number),
          Schedule: S.optional(__S(255)),
          SessionCap: S.optional(S.Number),
          TotalCap: S.optional(S.Number),
          TreatmentId: S.optional(S.String),
        }),
      ).annotate({ identifier: "InAppMessageCampaign" });
    case 1:
      return S.Array(__S(256));
    case 2:
      return S.suspend(() => S.Struct({ InAppMessageCampaigns: S.optional(__S(257)) })).annotate({
        identifier: "InAppMessagesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InAppMessagesResponse: S.optional(__S(258))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "InAppMessagesResponse" }),
        }),
      ).annotate({ identifier: "GetInAppMessagesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/templates/{TemplateName}/inapp" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetInAppTemplateRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Content: S.optional(__S(19)),
          CreationDate: S.optional(S.String),
          CustomConfig: S.optional(__S(0)),
          LastModifiedDate: S.optional(S.String),
          Layout: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateType: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "InAppTemplateResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InAppTemplateResponse: S.optional(__S(261))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "InAppTemplateResponse" }),
        }),
      ).annotate({ identifier: "GetInAppTemplateResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetJourneyRequest" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("end-time"),
          ),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
          KpiName: S.String.pipe(T.HttpLabel("KpiName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))).pipe(
            T.HttpQuery("start-time"),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}/kpis/daterange/{KpiName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetJourneyDateRangeKpiRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          JourneyId: S.optional(S.String),
          KpiName: S.optional(S.String),
          KpiResult: S.optional(__S(199)),
          NextToken: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "JourneyDateRangeKpiResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JourneyDateRangeKpiResponse: S.optional(__S(265))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyDateRangeKpiResponse" }),
        }),
      ).annotate({
        identifier: "GetJourneyDateRangeKpiResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyActivityId: S.String.pipe(T.HttpLabel("JourneyActivityId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}/activities/{JourneyActivityId}/execution-metrics",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetJourneyExecutionActivityMetricsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ActivityType: S.optional(S.String),
          ApplicationId: S.optional(S.String),
          JourneyActivityId: S.optional(S.String),
          JourneyId: S.optional(S.String),
          LastEvaluatedTime: S.optional(S.String),
          Metrics: S.optional(__S(0)),
        }),
      ).annotate({
        identifier: "JourneyExecutionActivityMetricsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          JourneyExecutionActivityMetricsResponse: S.optional(__S(268))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyExecutionActivityMetricsResponse" }),
        }),
      ).annotate({
        identifier: "GetJourneyExecutionActivityMetricsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}/execution-metrics",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetJourneyExecutionMetricsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          JourneyId: S.optional(S.String),
          LastEvaluatedTime: S.optional(S.String),
          Metrics: S.optional(__S(0)),
        }),
      ).annotate({
        identifier: "JourneyExecutionMetricsResponse",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JourneyExecutionMetricsResponse: S.optional(__S(271))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyExecutionMetricsResponse" }),
        }),
      ).annotate({
        identifier: "GetJourneyExecutionMetricsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyActivityId: S.String.pipe(T.HttpLabel("JourneyActivityId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          RunId: S.String.pipe(T.HttpLabel("RunId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/activities/{JourneyActivityId}/execution-metrics",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetJourneyRunExecutionActivityMetricsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ActivityType: S.optional(S.String),
          ApplicationId: S.optional(S.String),
          JourneyActivityId: S.optional(S.String),
          JourneyId: S.optional(S.String),
          LastEvaluatedTime: S.optional(S.String),
          Metrics: S.optional(__S(0)),
          RunId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "JourneyRunExecutionActivityMetricsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JourneyRunExecutionActivityMetricsResponse: S.optional(__S(274))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyRunExecutionActivityMetricsResponse" }),
        }),
      ).annotate({
        identifier: "GetJourneyRunExecutionActivityMetricsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          RunId: S.String.pipe(T.HttpLabel("RunId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/execution-metrics",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetJourneyRunExecutionMetricsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          JourneyId: S.optional(S.String),
          LastEvaluatedTime: S.optional(S.String),
          Metrics: S.optional(__S(0)),
          RunId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "JourneyRunExecutionMetricsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          JourneyRunExecutionMetricsResponse: S.optional(__S(277))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyRunExecutionMetricsResponse" }),
        }),
      ).annotate({
        identifier: "GetJourneyRunExecutionMetricsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetJourneyRunsRequest" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreationTime: S.optional(S.String),
          LastUpdateTime: S.optional(S.String),
          RunId: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "JourneyRunResponse" });
    case 1:
      return S.Array(__S(280));
    case 2:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(281)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "JourneyRunsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JourneyRunsResponse: S.optional(__S(282))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyRunsResponse" }),
        }),
      ).annotate({ identifier: "GetJourneyRunsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/templates/{TemplateName}/push" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPushTemplateRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ADM: S.optional(__S(109)),
          APNS: S.optional(__S(110)),
          Arn: S.optional(S.String),
          Baidu: S.optional(__S(109)),
          CreationDate: S.optional(S.String),
          Default: S.optional(__S(111)),
          DefaultSubstitutions: S.optional(S.String),
          GCM: S.optional(__S(109)),
          LastModifiedDate: S.optional(S.String),
          RecommenderId: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateType: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PushNotificationTemplateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PushNotificationTemplateResponse: S.optional(__S(285))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "PushNotificationTemplateResponse" }),
        }),
      ).annotate({ identifier: "GetPushTemplateResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ RecommenderId: S.String.pipe(T.HttpLabel("RecommenderId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/recommenders/{RecommenderId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecommenderConfigurationRequest",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/recommenders" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRecommenderConfigurationsRequest",
      });
    case 1:
      return S.Array(__S(116));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Item: S.optional(__S(289)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecommenderConfigurationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ListRecommenderConfigurationsResponse: S.optional(__S(290))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ListRecommenderConfigurationsResponse" }),
        }),
      ).annotate({
        identifier: "GetRecommenderConfigurationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          SegmentId: S.String.pipe(T.HttpLabel("SegmentId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/segments/{SegmentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSegmentRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          SegmentId: S.String.pipe(T.HttpLabel("SegmentId")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/export",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSegmentExportJobsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ExportJobsResponse: S.optional(__S(245))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ExportJobsResponse" }),
        }),
      ).annotate({
        identifier: "GetSegmentExportJobsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          SegmentId: S.String.pipe(T.HttpLabel("SegmentId")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/import",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSegmentImportJobsRequest",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ImportJobsResponse: S.optional(__S(251))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ImportJobsResponse" }),
        }),
      ).annotate({
        identifier: "GetSegmentImportJobsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/segments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSegmentsRequest" });
    case 2:
      return S.Array(__S(128));
    case 3:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(298)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "SegmentsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SegmentsResponse: S.optional(__S(299))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SegmentsResponse" }),
        }),
      ).annotate({ identifier: "GetSegmentsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          SegmentId: S.String.pipe(T.HttpLabel("SegmentId")),
          Version: S.String.pipe(T.HttpLabel("Version")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions/{Version}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSegmentVersionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SegmentResponse: S.optional(__S(128))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SegmentResponse" }),
        }),
      ).annotate({
        identifier: "GetSegmentVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          SegmentId: S.String.pipe(T.HttpLabel("SegmentId")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSegmentVersionsRequest",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SegmentsResponse: S.optional(__S(299))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SegmentsResponse" }),
        }),
      ).annotate({
        identifier: "GetSegmentVersionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/sms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSmsChannelRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/templates/{TemplateName}/sms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSmsTemplateRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Body: S.optional(S.String),
          CreationDate: S.optional(S.String),
          DefaultSubstitutions: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          RecommenderId: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateType: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "SMSTemplateResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SMSTemplateResponse: S.optional(__S(307))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SMSTemplateResponse" }),
        }),
      ).annotate({ identifier: "GetSmsTemplateResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          UserId: S.String.pipe(T.HttpLabel("UserId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/users/{UserId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetUserEndpointsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EndpointsResponse: S.optional(__S(182))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EndpointsResponse" }),
        }),
      ).annotate({ identifier: "GetUserEndpointsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/channels/voice" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetVoiceChannelRequest" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceChannelResponse: S.optional(__S(135))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "VoiceChannelResponse" }),
        }),
      ).annotate({ identifier: "GetVoiceChannelResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/templates/{TemplateName}/voice" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetVoiceTemplateRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Body: S.optional(S.String),
          CreationDate: S.optional(S.String),
          DefaultSubstitutions: S.optional(S.String),
          LanguageCode: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateType: S.optional(S.String),
          Version: S.optional(S.String),
          VoiceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "VoiceTemplateResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VoiceTemplateResponse: S.optional(__S(314))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "VoiceTemplateResponse" }),
        }),
      ).annotate({ identifier: "GetVoiceTemplateResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Token: S.optional(S.String).pipe(T.HttpQuery("token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/apps/{ApplicationId}/journeys" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListJourneysRequest" });
    case 5:
      return S.Array(__S(107));
    case 6:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(317)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "JourneysResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          JourneysResponse: S.optional(__S(318))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneysResponse" }),
        }),
      ).annotate({ identifier: "ListJourneysResponse" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/tags/{ResourceArn}" }),
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
    case 1:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(0)) })).annotate({
        identifier: "TagsModel",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TagsModel: S.optional(__S(321))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "TagsModel" }),
        }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          Prefix: S.optional(S.String).pipe(T.HttpQuery("prefix")),
          TemplateType: S.optional(S.String).pipe(T.HttpQuery("template-type")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/templates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTemplatesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CreationDate: S.optional(S.String),
          DefaultSubstitutions: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          tags: S.optional(__S(0)),
          TemplateDescription: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateType: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "TemplateResponse" });
    case 5:
      return S.Array(__S(324));
    case 6:
      return S.suspend(() =>
        S.Struct({ Item: S.optional(__S(325)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "TemplatesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TemplatesResponse: S.optional(__S(326))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "TemplatesResponse" }),
        }),
      ).annotate({ identifier: "ListTemplatesResponse" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          PageSize: S.optional(S.String).pipe(T.HttpQuery("page-size")),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          TemplateType: S.String.pipe(T.HttpLabel("TemplateType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/templates/{TemplateName}/{TemplateType}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTemplateVersionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CreationDate: S.optional(S.String),
          DefaultSubstitutions: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          TemplateDescription: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateType: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "TemplateVersionResponse" });
    case 2:
      return S.Array(__S(329));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Item: S.optional(__S(330)),
          Message: S.optional(S.String),
          NextToken: S.optional(S.String),
          RequestID: S.optional(S.String),
        }),
      ).annotate({ identifier: "TemplateVersionsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplateVersionsResponse: S.optional(__S(331))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "TemplateVersionsResponse" }),
        }),
      ).annotate({
        identifier: "ListTemplateVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ IsoCountryCode: S.optional(S.String), PhoneNumber: S.optional(S.String) }),
      ).annotate({ identifier: "NumberValidateRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NumberValidateRequest: S.optional(__S(333))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "NumberValidateRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/phone/number/validate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PhoneNumberValidateRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Carrier: S.optional(S.String),
          City: S.optional(S.String),
          CleansedPhoneNumberE164: S.optional(S.String),
          CleansedPhoneNumberNational: S.optional(S.String),
          Country: S.optional(S.String),
          CountryCodeIso2: S.optional(S.String),
          CountryCodeNumeric: S.optional(S.String),
          County: S.optional(S.String),
          OriginalCountryCodeIso2: S.optional(S.String),
          OriginalPhoneNumber: S.optional(S.String),
          PhoneType: S.optional(S.String),
          PhoneTypeCode: S.optional(S.Number),
          Timezone: S.optional(S.String),
          ZipCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "NumberValidateResponse" });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NumberValidateResponse: S.optional(__S(335))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "NumberValidateResponse" }),
        }),
      ).annotate({
        identifier: "PhoneNumberValidateResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          Attributes: S.optional(__S(159)),
          ChannelType: S.optional(S.String),
          Demographic: S.optional(__S(160)),
          EffectiveDate: S.optional(S.String),
          EndpointStatus: S.optional(S.String),
          Location: S.optional(__S(161)),
          Metrics: S.optional(__S(126)),
          OptOut: S.optional(S.String),
          RequestId: S.optional(S.String),
          User: S.optional(__S(162)),
        }),
      ).annotate({ identifier: "PublicEndpoint" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Duration: S.optional(S.Number),
          Id: S.optional(S.String),
          StartTimestamp: S.optional(S.String),
          StopTimestamp: S.optional(S.String),
        }),
      ).annotate({ identifier: "Session" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppPackageName: S.optional(S.String),
          AppTitle: S.optional(S.String),
          AppVersionCode: S.optional(S.String),
          Attributes: S.optional(__S(0)),
          ClientSdkVersion: S.optional(S.String),
          EventType: S.optional(S.String),
          Metrics: S.optional(__S(126)),
          SdkName: S.optional(S.String),
          Session: S.optional(__S(338)),
          Timestamp: S.optional(S.String),
        }),
      ).annotate({ identifier: "Event" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(339).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ Endpoint: S.optional(__S(337)), Events: S.optional(__S(340)) }),
      ).annotate({ identifier: "EventsBatch" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(341).pipe(S.optional));
    case 7:
      return S.suspend(() => S.Struct({ BatchItem: S.optional(__S(342)) })).annotate({
        identifier: "EventsRequest",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EventsRequest: S.optional(__S(343))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EventsRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/events" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutEventsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Message: S.optional(S.String), StatusCode: S.optional(S.Number) }),
      ).annotate({ identifier: "EndpointItemResponse" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(345).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          EndpointItemResponse: S.optional(__S(345)),
          EventsItemResponse: S.optional(__S(346)),
        }),
      ).annotate({ identifier: "ItemResponse" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(347).pipe(S.optional));
    case 5:
      return S.suspend(() => S.Struct({ Results: S.optional(__S(348)) })).annotate({
        identifier: "EventsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EventsResponse: S.optional(__S(349))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EventsResponse" }),
        }),
      ).annotate({ identifier: "PutEventsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DestinationStreamArn: S.optional(S.String), RoleArn: S.optional(S.String) }),
      ).annotate({ identifier: "WriteEventStream" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          WriteEventStream: S.optional(__S(351))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "WriteEventStream" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/eventstream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutEventStreamRequest" });
    case 1:
      return S.suspend(() => S.Struct({ Blacklist: S.optional(__S(22)) })).annotate({
        identifier: "UpdateAttributesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          AttributeType: S.String.pipe(T.HttpLabel("AttributeType")),
          UpdateAttributesRequest: S.optional(__S(353))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "UpdateAttributesRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/attributes/{AttributeType}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RemoveAttributesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          AttributeType: S.optional(S.String),
          Attributes: S.optional(__S(22)),
        }),
      ).annotate({ identifier: "AttributesResource" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AttributesResource: S.optional(__S(355))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "AttributesResource" }),
        }),
      ).annotate({ identifier: "RemoveAttributesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BodyOverride: S.optional(S.String),
          ChannelType: S.optional(S.String),
          Context: S.optional(__S(0)),
          RawContent: S.optional(S.String),
          Substitutions: S.optional(__S(159)),
          TitleOverride: S.optional(S.String),
        }),
      ).annotate({ identifier: "AddressConfiguration" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(357).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          BodyOverride: S.optional(S.String),
          Context: S.optional(__S(0)),
          RawContent: S.optional(S.String),
          Substitutions: S.optional(__S(159)),
          TitleOverride: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EndpointSendConfiguration",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(359).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Body: S.optional(S.String),
          ConsolidationKey: S.optional(S.String),
          Data: S.optional(__S(0)),
          ExpiresAfter: S.optional(S.String),
          IconReference: S.optional(S.String),
          ImageIconUrl: S.optional(S.String),
          ImageUrl: S.optional(S.String),
          MD5: S.optional(S.String),
          RawContent: S.optional(S.String),
          SilentPush: S.optional(S.Boolean),
          SmallImageIconUrl: S.optional(S.String),
          Sound: S.optional(S.String),
          Substitutions: S.optional(__S(159)),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({ identifier: "ADMMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          APNSPushType: S.optional(S.String),
          Action: S.optional(S.String),
          Badge: S.optional(S.Number),
          Body: S.optional(S.String),
          Category: S.optional(S.String),
          CollapseId: S.optional(S.String),
          Data: S.optional(__S(0)),
          MediaUrl: S.optional(S.String),
          PreferredAuthenticationMethod: S.optional(S.String),
          Priority: S.optional(S.String),
          RawContent: S.optional(S.String),
          SilentPush: S.optional(S.Boolean),
          Sound: S.optional(S.String),
          Substitutions: S.optional(__S(159)),
          ThreadId: S.optional(S.String),
          TimeToLive: S.optional(S.Number),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({ identifier: "APNSMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Body: S.optional(S.String),
          Data: S.optional(__S(0)),
          IconReference: S.optional(S.String),
          ImageIconUrl: S.optional(S.String),
          ImageUrl: S.optional(S.String),
          RawContent: S.optional(S.String),
          SilentPush: S.optional(S.Boolean),
          SmallImageIconUrl: S.optional(S.String),
          Sound: S.optional(S.String),
          Substitutions: S.optional(__S(159)),
          TimeToLive: S.optional(S.Number),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({ identifier: "BaiduMessage" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Body: S.optional(S.String), Substitutions: S.optional(__S(159)) }),
      ).annotate({ identifier: "DefaultMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Body: S.optional(S.String),
          Data: S.optional(__S(0)),
          SilentPush: S.optional(S.Boolean),
          Substitutions: S.optional(__S(159)),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DefaultPushNotificationMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({ Data: S.optional(T.Blob) })).annotate({
        identifier: "RawEmail",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Charset: S.optional(S.String), Data: S.optional(S.String) }),
      ).annotate({ identifier: "SimpleEmailPart" });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HtmlPart: S.optional(__S(367)),
          Subject: S.optional(__S(367)),
          TextPart: S.optional(__S(367)),
          Headers: S.optional(__S(10)),
        }),
      ).annotate({ identifier: "SimpleEmail" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Body: S.optional(S.String),
          FeedbackForwardingAddress: S.optional(S.String),
          FromAddress: S.optional(S.String),
          RawEmail: S.optional(__S(366)),
          ReplyToAddresses: S.optional(__S(22)),
          SimpleEmail: S.optional(__S(368)),
          Substitutions: S.optional(__S(159)),
        }),
      ).annotate({ identifier: "EmailMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Body: S.optional(S.String),
          CollapseKey: S.optional(S.String),
          Data: S.optional(__S(0)),
          IconReference: S.optional(S.String),
          ImageIconUrl: S.optional(S.String),
          ImageUrl: S.optional(S.String),
          PreferredAuthenticationMethod: S.optional(S.String),
          Priority: S.optional(S.String),
          RawContent: S.optional(S.String),
          RestrictedPackageName: S.optional(S.String),
          SilentPush: S.optional(S.Boolean),
          SmallImageIconUrl: S.optional(S.String),
          Sound: S.optional(S.String),
          Substitutions: S.optional(__S(159)),
          TimeToLive: S.optional(S.Number),
          Title: S.optional(S.String),
          Url: S.optional(S.String),
        }),
      ).annotate({ identifier: "GCMMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Body: S.optional(S.String),
          Keyword: S.optional(S.String),
          MediaUrl: S.optional(S.String),
          MessageType: S.optional(S.String),
          OriginationNumber: S.optional(S.String),
          SenderId: S.optional(S.String),
          Substitutions: S.optional(__S(159)),
          EntityId: S.optional(S.String),
          TemplateId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SMSMessage" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Body: S.optional(S.String),
          LanguageCode: S.optional(S.String),
          OriginationNumber: S.optional(S.String),
          Substitutions: S.optional(__S(159)),
          VoiceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "VoiceMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ADMMessage: S.optional(__S(361)),
          APNSMessage: S.optional(__S(362)),
          BaiduMessage: S.optional(__S(363)),
          DefaultMessage: S.optional(__S(364)),
          DefaultPushNotificationMessage: S.optional(__S(365)),
          EmailMessage: S.optional(__S(369)),
          GCMMessage: S.optional(__S(370)),
          SMSMessage: S.optional(__S(371)),
          VoiceMessage: S.optional(__S(372)),
        }),
      ).annotate({
        identifier: "DirectMessageConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Addresses: S.optional(__S(358)),
          Context: S.optional(__S(0)),
          Endpoints: S.optional(__S(360)),
          MessageConfiguration: S.optional(__S(373)),
          TemplateConfiguration: S.optional(__S(33)),
          TraceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "MessageRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          MessageRequest: S.optional(__S(374))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "MessageRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/messages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SendMessagesRequest" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          DeliveryStatus: S.optional(S.String),
          MessageId: S.optional(S.String),
          StatusCode: S.optional(S.Number),
          StatusMessage: S.optional(S.String),
          UpdatedToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "EndpointMessageResult" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(376).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeliveryStatus: S.optional(S.String),
          MessageId: S.optional(S.String),
          StatusCode: S.optional(S.Number),
          StatusMessage: S.optional(S.String),
          UpdatedToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "MessageResult" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(378).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          EndpointResult: S.optional(__S(377)),
          RequestId: S.optional(S.String),
          Result: S.optional(__S(379)),
        }),
      ).annotate({ identifier: "MessageResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MessageResponse: S.optional(__S(380))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "MessageResponse" }),
        }),
      ).annotate({ identifier: "SendMessagesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AllowedAttempts: S.optional(S.Number),
          BrandName: S.optional(S.String),
          Channel: S.optional(S.String),
          CodeLength: S.optional(S.Number),
          DestinationIdentity: S.optional(S.String),
          EntityId: S.optional(S.String),
          Language: S.optional(S.String),
          OriginationIdentity: S.optional(S.String),
          ReferenceId: S.optional(S.String),
          TemplateId: S.optional(S.String),
          ValidityPeriod: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SendOTPMessageRequestParameters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          SendOTPMessageRequestParameters: S.optional(__S(382))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SendOTPMessageRequestParameters" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/otp" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SendOTPMessageRequest" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Context: S.optional(__S(0)),
          MessageConfiguration: S.optional(__S(373)),
          TemplateConfiguration: S.optional(__S(33)),
          TraceId: S.optional(S.String),
          Users: S.optional(__S(360)),
        }),
      ).annotate({ identifier: "SendUsersMessageRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          SendUsersMessageRequest: S.optional(__S(384))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SendUsersMessageRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/users-messages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SendUsersMessagesRequest" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(377).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          RequestId: S.optional(S.String),
          Result: S.optional(__S(386)),
        }),
      ).annotate({ identifier: "SendUsersMessageResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SendUsersMessageResponse: S.optional(__S(387))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SendUsersMessageResponse" }),
        }),
      ).annotate({
        identifier: "SendUsersMessagesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagsModel: S.optional(__S(321))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "TagsModel" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: S.optional(__S(22)).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientId: S.optional(S.String),
          ClientSecret: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ADMChannelRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ADMChannelRequest: S.optional(__S(392))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "ADMChannelRequest" }),
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/adm" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAdmChannelRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BundleId: S.optional(S.String),
          Certificate: S.optional(S.String),
          DefaultAuthenticationMethod: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          PrivateKey: S.optional(S.String),
          TeamId: S.optional(S.String),
          TokenKey: S.optional(S.String),
          TokenKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "APNSChannelRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          APNSChannelRequest: S.optional(__S(394))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSChannelRequest" }),
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/apns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApnsChannelRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BundleId: S.optional(S.String),
          Certificate: S.optional(S.String),
          DefaultAuthenticationMethod: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          PrivateKey: S.optional(S.String),
          TeamId: S.optional(S.String),
          TokenKey: S.optional(S.String),
          TokenKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "APNSSandboxChannelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          APNSSandboxChannelRequest: S.optional(__S(396))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSSandboxChannelRequest" }),
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/apns_sandbox" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateApnsSandboxChannelRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          APNSVoipChannelRequest: S.optional(__S(394))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSVoipChannelRequest" }),
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/apns_voip" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateApnsVoipChannelRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          APNSVoipSandboxChannelRequest: S.optional(__S(396))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "APNSVoipSandboxChannelRequest" }),
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateApnsVoipSandboxChannelRequest",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CampaignHook: S.optional(__S(36)),
          CloudWatchMetricsEnabled: S.optional(S.Boolean),
          EventTaggingEnabled: S.optional(S.Boolean),
          Limits: S.optional(__S(37)),
          QuietTime: S.optional(__S(30)),
          JourneyLimits: S.optional(__S(203)),
        }),
      ).annotate({
        identifier: "WriteApplicationSettingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          WriteApplicationSettingsRequest: S.optional(__S(400))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "WriteApplicationSettingsRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateApplicationSettingsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApiKey: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          SecretKey: S.optional(S.String),
        }),
      ).annotate({ identifier: "BaiduChannelRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          BaiduChannelRequest: S.optional(__S(402))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "BaiduChannelRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/baidu" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateBaiduChannelRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          CampaignId: S.String.pipe(T.HttpLabel("CampaignId")),
          WriteCampaignRequest: S.optional(__S(38))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "WriteCampaignRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/campaigns/{CampaignId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCampaignRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSet: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          FromAddress: S.optional(S.String),
          Identity: S.optional(S.String),
          RoleArn: S.optional(S.String),
          OrchestrationSendingRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmailChannelRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EmailChannelRequest: S.optional(__S(405))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EmailChannelRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/email" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEmailChannelRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CreateNewVersion: S.optional(S.Boolean).pipe(T.HttpQuery("create-new-version")),
          EmailTemplateRequest: S.optional(__S(45))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EmailTemplateRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/templates/{TemplateName}/email" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEmailTemplateRequest",
      });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EndpointId: S.String.pipe(T.HttpLabel("EndpointId")),
          EndpointRequest: S.optional(__S(337))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EndpointRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/endpoints/{EndpointId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateEndpointRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MessageBody: S.optional(__S(156))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "MessageBody" }),
        }),
      ).annotate({ identifier: "UpdateEndpointResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          Attributes: S.optional(__S(159)),
          ChannelType: S.optional(S.String),
          Demographic: S.optional(__S(160)),
          EffectiveDate: S.optional(S.String),
          EndpointStatus: S.optional(S.String),
          Id: S.optional(S.String),
          Location: S.optional(__S(161)),
          Metrics: S.optional(__S(126)),
          OptOut: S.optional(S.String),
          RequestId: S.optional(S.String),
          User: S.optional(__S(162)),
        }),
      ).annotate({ identifier: "EndpointBatchItem" });
    case 3:
      return S.Array(__S(410));
    case 4:
      return S.suspend(() => S.Struct({ Item: S.optional(__S(411)) })).annotate({
        identifier: "EndpointBatchRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          EndpointBatchRequest: S.optional(__S(412))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "EndpointBatchRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEndpointsBatchRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApiKey: S.optional(S.String),
          DefaultAuthenticationMethod: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          ServiceJson: S.optional(S.String),
        }),
      ).annotate({ identifier: "GCMChannelRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          GCMChannelRequest: S.optional(__S(414))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "GCMChannelRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/gcm" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateGcmChannelRequest" });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreateNewVersion: S.optional(S.Boolean).pipe(T.HttpQuery("create-new-version")),
          InAppTemplateRequest: S.optional(__S(57))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "InAppTemplateRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/templates/{TemplateName}/inapp" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateInAppTemplateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
          WriteJourneyRequest: S.optional(__S(105))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "WriteJourneyRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateJourneyRequest" });
    case 2:
      return S.suspend(() => S.Struct({ State: S.optional(S.String) })).annotate({
        identifier: "JourneyStateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          JourneyId: S.String.pipe(T.HttpLabel("JourneyId")),
          JourneyStateRequest: S.optional(__S(418))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyStateRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/journeys/{JourneyId}/state" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateJourneyStateRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JourneyResponse: S.optional(__S(107))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "JourneyResponse" }),
        }),
      ).annotate({
        identifier: "UpdateJourneyStateResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CreateNewVersion: S.optional(S.Boolean).pipe(T.HttpQuery("create-new-version")),
          PushNotificationTemplateRequest: S.optional(__S(112))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "PushNotificationTemplateRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/templates/{TemplateName}/push" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePushTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RecommenderId: S.String.pipe(T.HttpLabel("RecommenderId")),
          UpdateRecommenderConfiguration: S.optional(__S(114))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "UpdateRecommenderConfigurationShape" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/recommenders/{RecommenderId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateRecommenderConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          SegmentId: S.String.pipe(T.HttpLabel("SegmentId")),
          WriteSegmentRequest: S.optional(__S(124))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "WriteSegmentRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/segments/{SegmentId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSegmentRequest" });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          SenderId: S.optional(S.String),
          ShortCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "SMSChannelRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          SMSChannelRequest: S.optional(__S(424))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SMSChannelRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/sms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSmsChannelRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreateNewVersion: S.optional(S.Boolean).pipe(T.HttpQuery("create-new-version")),
          SMSTemplateRequest: S.optional(__S(130))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "SMSTemplateRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/templates/{TemplateName}/sms" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSmsTemplateRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Version: S.optional(S.String) })).annotate({
        identifier: "TemplateActiveVersionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplateActiveVersionRequest: S.optional(__S(427))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "TemplateActiveVersionRequest" }),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          TemplateType: S.String.pipe(T.HttpLabel("TemplateType")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/templates/{TemplateName}/{TemplateType}/active-version",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTemplateActiveVersionRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "VoiceChannelRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          VoiceChannelRequest: S.optional(__S(429))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "VoiceChannelRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/apps/{ApplicationId}/channels/voice" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVoiceChannelRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CreateNewVersion: S.optional(S.Boolean).pipe(T.HttpQuery("create-new-version")),
          TemplateName: S.String.pipe(T.HttpLabel("TemplateName")),
          Version: S.optional(S.String).pipe(T.HttpQuery("version")),
          VoiceTemplateRequest: S.optional(__S(132))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "VoiceTemplateRequest" }),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/templates/{TemplateName}/voice" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVoiceTemplateRequest",
      });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DestinationIdentity: S.optional(S.String),
          Otp: S.optional(S.String),
          ReferenceId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "VerifyOTPMessageRequestParameters",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.String.pipe(T.HttpLabel("ApplicationId")),
          VerifyOTPMessageRequestParameters: S.optional(__S(432))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "VerifyOTPMessageRequestParameters" }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/apps/{ApplicationId}/verify-otp" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "VerifyOTPMessageRequest" });
    case 2:
      return S.suspend(() => S.Struct({ Valid: S.optional(S.Boolean) })).annotate({
        identifier: "VerificationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VerificationResponse: S.optional(__S(434))
            .pipe(T.HttpPayload())
            .annotate({ identifier: "VerificationResponse" }),
        }),
      ).annotate({ identifier: "VerifyOTPMessageResponse" });
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
