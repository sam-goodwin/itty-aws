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
  sdkId: "Chime SDK Voice",
  serviceShapeName: "ChimeSDKTelephonyService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "chime" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-08-03");
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
              `https://voice-chime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://voice-chime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://voice-chime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://voice-chime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class GoneException
  extends /*@__PURE__*/ S.TaggedError<GoneException>()(
    "GoneException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceFailureException
  extends /*@__PURE__*/ S.TaggedError<ServiceFailureException>()(
    "ServiceFailureException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottledClientException
  extends /*@__PURE__*/ S.TaggedError<ThrottledClientException>()(
    "ThrottledClientException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedClientException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedClientException>()(
    "UnauthorizedClientException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class UnprocessableEntityException
  extends /*@__PURE__*/ S.TaggedError<UnprocessableEntityException>()(
    "UnprocessableEntityException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(422),
  ).pipe(C.withBadRequestError) {}
export type VoiceConnectorId = string;
export type E164PhoneNumber = string | redacted.Redacted<string>;
export type E164PhoneNumberList = (string | redacted.Redacted<string>)[];
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  VoiceConnectorId: string;
  E164PhoneNumbers: (string | redacted.Redacted<string>)[];
  ForceAssociate?: boolean;
}
export type SensitiveNonEmptyString = string | redacted.Redacted<string>;
export type ErrorCode =
  | "BadRequest"
  | "Conflict"
  | "Forbidden"
  | "NotFound"
  | "PreconditionFailed"
  | "ResourceLimitExceeded"
  | "ServiceFailure"
  | "AccessDenied"
  | "ServiceUnavailable"
  | "Throttled"
  | "Throttling"
  | "Unauthorized"
  | "Unprocessable"
  | "VoiceConnectorGroupAssociationsExist"
  | "PhoneNumberAssociationsExist"
  | "Gone"
  | "Validation"
  | (string & {});
export interface PhoneNumberError {
  PhoneNumberId?: string | redacted.Redacted<string>;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type PhoneNumberErrorList = PhoneNumberError[];
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}
export type NonEmptyString = string;
export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
  E164PhoneNumbers: (string | redacted.Redacted<string>)[];
  ForceAssociate?: boolean;
}
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}
export type NonEmptyStringList = string[];
export interface BatchDeletePhoneNumberRequest {
  PhoneNumberIds: string[];
}
export interface BatchDeletePhoneNumberResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}
export type PhoneNumberProductType = "VoiceConnector" | "SipMediaApplicationDialIn" | (string & {});
export type CallingName = string | redacted.Redacted<string>;
export type PhoneNumberName = string | redacted.Redacted<string>;
export interface UpdatePhoneNumberRequestItem {
  PhoneNumberId: string | redacted.Redacted<string>;
  ProductType?: PhoneNumberProductType;
  CallingName?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
}
export type UpdatePhoneNumberRequestItemList = UpdatePhoneNumberRequestItem[];
export interface BatchUpdatePhoneNumberRequest {
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[];
}
export interface BatchUpdatePhoneNumberResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}
export interface CreatePhoneNumberOrderRequest {
  ProductType: PhoneNumberProductType;
  E164PhoneNumbers: (string | redacted.Redacted<string>)[];
  Name?: string | redacted.Redacted<string>;
}
export type GuidString = string;
export type PhoneNumberOrderStatus =
  | "Processing"
  | "Successful"
  | "Failed"
  | "Partial"
  | "PendingDocuments"
  | "Submitted"
  | "FOC"
  | "ChangeRequested"
  | "Exception"
  | "CancelRequested"
  | "Cancelled"
  | (string & {});
export type PhoneNumberOrderType = "New" | "Porting" | (string & {});
export type OrderedPhoneNumberStatus = "Processing" | "Acquired" | "Failed" | (string & {});
export interface OrderedPhoneNumber {
  E164PhoneNumber?: string | redacted.Redacted<string>;
  Status?: OrderedPhoneNumberStatus;
}
export type OrderedPhoneNumberList = OrderedPhoneNumber[];
export type Iso8601Timestamp = Date;
export interface PhoneNumberOrder {
  PhoneNumberOrderId?: string;
  ProductType?: PhoneNumberProductType;
  Status?: PhoneNumberOrderStatus;
  OrderType?: PhoneNumberOrderType;
  OrderedPhoneNumbers?: OrderedPhoneNumber[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  FocDate?: string;
}
export interface CreatePhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}
export type ParticipantPhoneNumberList = (string | redacted.Redacted<string>)[];
export type ProxySessionNameString = string | redacted.Redacted<string>;
export type PositiveInteger = number;
export type Capability = "Voice" | "SMS" | (string & {});
export type CapabilityList = Capability[];
export type NumberSelectionBehavior = "PreferSticky" | "AvoidSticky" | (string & {});
export type GeoMatchLevel = "Country" | "AreaCode" | (string & {});
export type Country = string;
export type AreaCode = string;
export interface GeoMatchParams {
  Country: string;
  AreaCode: string;
}
export interface CreateProxySessionRequest {
  VoiceConnectorId: string;
  ParticipantPhoneNumbers: (string | redacted.Redacted<string>)[];
  Name?: string | redacted.Redacted<string>;
  ExpiryMinutes?: number;
  Capabilities: Capability[];
  NumberSelectionBehavior?: NumberSelectionBehavior;
  GeoMatchLevel?: GeoMatchLevel;
  GeoMatchParams?: GeoMatchParams;
}
export type NonEmptyString128 = string;
export type String128 = string;
export type ProxySessionStatus = "Open" | "InProgress" | "Closed" | (string & {});
export interface Participant {
  PhoneNumber?: string | redacted.Redacted<string>;
  ProxyPhoneNumber?: string | redacted.Redacted<string>;
}
export type Participants = Participant[];
export interface ProxySession {
  VoiceConnectorId?: string;
  ProxySessionId?: string;
  Name?: string;
  Status?: ProxySessionStatus;
  ExpiryMinutes?: number;
  Capabilities?: Capability[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  EndedTimestamp?: Date;
  Participants?: Participant[];
  NumberSelectionBehavior?: NumberSelectionBehavior;
  GeoMatchLevel?: GeoMatchLevel;
  GeoMatchParams?: GeoMatchParams;
}
export interface CreateProxySessionResponse {
  ProxySession?: ProxySession;
}
export type SipMediaApplicationName = string;
export type FunctionArn = string | redacted.Redacted<string>;
export interface SipMediaApplicationEndpoint {
  LambdaArn?: string | redacted.Redacted<string>;
}
export type SipMediaApplicationEndpointList = SipMediaApplicationEndpoint[];
export type TagKey = string | redacted.Redacted<string>;
export type TagValue = string | redacted.Redacted<string>;
export interface Tag {
  Key: string | redacted.Redacted<string>;
  Value: string | redacted.Redacted<string>;
}
export type TagList = Tag[];
export interface CreateSipMediaApplicationRequest {
  AwsRegion: string;
  Name: string;
  Endpoints: SipMediaApplicationEndpoint[];
  Tags?: Tag[];
}
export interface SipMediaApplication {
  SipMediaApplicationId?: string;
  AwsRegion?: string;
  Name?: string;
  Endpoints?: SipMediaApplicationEndpoint[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  SipMediaApplicationArn?: string;
}
export interface CreateSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}
export type SensitiveString = string | redacted.Redacted<string>;
export type SipHeadersMap = { [key: string]: string | redacted.Redacted<string> | undefined };
export type SMACreateCallArgumentsMap = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
export interface CreateSipMediaApplicationCallRequest {
  FromPhoneNumber: string | redacted.Redacted<string>;
  ToPhoneNumber: string | redacted.Redacted<string>;
  SipMediaApplicationId: string;
  SipHeaders?: { [key: string]: string | redacted.Redacted<string> | undefined };
  ArgumentsMap?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface SipMediaApplicationCall {
  TransactionId?: string;
}
export interface CreateSipMediaApplicationCallResponse {
  SipMediaApplicationCall?: SipMediaApplicationCall;
}
export type SipRuleName = string;
export type SipRuleTriggerType = "ToPhoneNumber" | "RequestUriHostname" | (string & {});
export type SipApplicationPriority = number;
export interface SipRuleTargetApplication {
  SipMediaApplicationId?: string;
  Priority?: number;
  AwsRegion?: string;
}
export type SipRuleTargetApplicationList = SipRuleTargetApplication[];
export interface CreateSipRuleRequest {
  Name: string;
  TriggerType: SipRuleTriggerType;
  TriggerValue: string;
  Disabled?: boolean;
  TargetApplications: SipRuleTargetApplication[];
}
export interface SipRule {
  SipRuleId?: string;
  Name?: string;
  Disabled?: boolean;
  TriggerType?: SipRuleTriggerType;
  TriggerValue?: string;
  TargetApplications?: SipRuleTargetApplication[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export interface CreateSipRuleResponse {
  SipRule?: SipRule;
}
export type VoiceConnectorName = string;
export type VoiceConnectorAwsRegion =
  | "us-east-1"
  | "us-west-2"
  | "ca-central-1"
  | "eu-central-1"
  | "eu-west-1"
  | "eu-west-2"
  | "ap-northeast-2"
  | "ap-northeast-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | (string & {});
export type VoiceConnectorIntegrationType =
  | "CONNECT_CALL_TRANSFER_CONNECTOR"
  | "CONNECT_ANALYTICS_CONNECTOR"
  | (string & {});
export type NetworkType = "IPV4_ONLY" | "DUAL_STACK" | (string & {});
export interface CreateVoiceConnectorRequest {
  Name: string;
  AwsRegion?: VoiceConnectorAwsRegion;
  RequireEncryption: boolean;
  Tags?: Tag[];
  IntegrationType?: VoiceConnectorIntegrationType;
  NetworkType?: NetworkType;
}
export interface VoiceConnector {
  VoiceConnectorId?: string;
  AwsRegion?: VoiceConnectorAwsRegion;
  Name?: string;
  OutboundHostName?: string;
  RequireEncryption?: boolean;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  VoiceConnectorArn?: string;
  IntegrationType?: VoiceConnectorIntegrationType;
  NetworkType?: NetworkType;
}
export interface CreateVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}
export type VoiceConnectorGroupName = string;
export type VoiceConnectorItemPriority = number;
export interface VoiceConnectorItem {
  VoiceConnectorId: string;
  Priority?: number;
}
export type VoiceConnectorItemList = VoiceConnectorItem[];
export type CallDistributionType =
  | "PriorityWeightedDistribution"
  | "LoadBalancedDistribution"
  | (string & {});
export interface CreateVoiceConnectorGroupRequest {
  Name: string;
  VoiceConnectorItems?: VoiceConnectorItem[];
  CallDistributionType?: CallDistributionType;
}
export interface VoiceConnectorGroup {
  VoiceConnectorGroupId?: string;
  Name?: string;
  VoiceConnectorItems?: VoiceConnectorItem[];
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  VoiceConnectorGroupArn?: string;
  CallDistributionType?: CallDistributionType;
}
export interface CreateVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export type NonEmptyString256 = string;
export interface CreateVoiceProfileRequest {
  SpeakerSearchTaskId: string;
}
export type Arn = string | redacted.Redacted<string>;
export interface VoiceProfile {
  VoiceProfileId?: string;
  VoiceProfileArn?: string | redacted.Redacted<string>;
  VoiceProfileDomainId?: string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  ExpirationTimestamp?: Date;
}
export interface CreateVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}
export type VoiceProfileDomainName = string;
export type VoiceProfileDomainDescription = string;
export interface ServerSideEncryptionConfiguration {
  KmsKeyArn: string | redacted.Redacted<string>;
}
export type ClientRequestId = string;
export interface CreateVoiceProfileDomainRequest {
  Name: string;
  Description?: string;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
  ClientRequestToken?: string;
  Tags?: Tag[];
}
export interface VoiceProfileDomain {
  VoiceProfileDomainId?: string;
  VoiceProfileDomainArn?: string | redacted.Redacted<string>;
  Name?: string;
  Description?: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export interface CreateVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}
export interface DeletePhoneNumberRequest {
  PhoneNumberId: string | redacted.Redacted<string>;
}
export interface DeletePhoneNumberResponse {}
export interface DeleteProxySessionRequest {
  VoiceConnectorId: string;
  ProxySessionId: string;
}
export interface DeleteProxySessionResponse {}
export interface DeleteSipMediaApplicationRequest {
  SipMediaApplicationId: string;
}
export interface DeleteSipMediaApplicationResponse {}
export interface DeleteSipRuleRequest {
  SipRuleId: string;
}
export interface DeleteSipRuleResponse {}
export interface DeleteVoiceConnectorRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorResponse {}
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorEmergencyCallingConfigurationResponse {}
export interface DeleteVoiceConnectorExternalSystemsConfigurationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorExternalSystemsConfigurationResponse {}
export interface DeleteVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
}
export interface DeleteVoiceConnectorGroupResponse {}
export interface DeleteVoiceConnectorOriginationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorOriginationResponse {}
export interface DeleteVoiceConnectorProxyRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorProxyResponse {}
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorStreamingConfigurationResponse {}
export interface DeleteVoiceConnectorTerminationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorTerminationResponse {}
export type SensitiveStringList = (string | redacted.Redacted<string>)[];
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string;
  Usernames: (string | redacted.Redacted<string>)[];
}
export interface DeleteVoiceConnectorTerminationCredentialsResponse {}
export interface DeleteVoiceProfileRequest {
  VoiceProfileId: string;
}
export interface DeleteVoiceProfileResponse {}
export interface DeleteVoiceProfileDomainRequest {
  VoiceProfileDomainId: string;
}
export interface DeleteVoiceProfileDomainResponse {}
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  VoiceConnectorId: string;
  E164PhoneNumbers: (string | redacted.Redacted<string>)[];
}
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
  E164PhoneNumbers: (string | redacted.Redacted<string>)[];
}
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  PhoneNumberErrors?: PhoneNumberError[];
}
export interface GetGlobalSettingsRequest {}
export type S3BucketName = string;
export interface VoiceConnectorSettings {
  CdrBucket?: string;
}
export interface GetGlobalSettingsResponse {
  VoiceConnector?: VoiceConnectorSettings;
}
export interface GetPhoneNumberRequest {
  PhoneNumberId: string | redacted.Redacted<string>;
}
export type Alpha2CountryCode = string;
export type PhoneNumberType = "Local" | "TollFree" | (string & {});
export type PhoneNumberStatus =
  | "Cancelled"
  | "PortinCancelRequested"
  | "PortinInProgress"
  | "AcquireInProgress"
  | "AcquireFailed"
  | "Unassigned"
  | "Assigned"
  | "ReleaseInProgress"
  | "DeleteInProgress"
  | "ReleaseFailed"
  | "DeleteFailed"
  | (string & {});
export interface PhoneNumberCapabilities {
  InboundCall?: boolean;
  OutboundCall?: boolean;
  InboundSMS?: boolean;
  OutboundSMS?: boolean;
  InboundMMS?: boolean;
  OutboundMMS?: boolean;
}
export type PhoneNumberAssociationName =
  | "VoiceConnectorId"
  | "VoiceConnectorGroupId"
  | "SipRuleId"
  | (string & {});
export interface PhoneNumberAssociation {
  Value?: string;
  Name?: PhoneNumberAssociationName;
  AssociatedTimestamp?: Date;
}
export type PhoneNumberAssociationList = PhoneNumberAssociation[];
export type CallingNameStatus =
  | "Unassigned"
  | "UpdateInProgress"
  | "UpdateSucceeded"
  | "UpdateFailed"
  | (string & {});
export interface PhoneNumber {
  PhoneNumberId?: string | redacted.Redacted<string>;
  E164PhoneNumber?: string | redacted.Redacted<string>;
  PhoneNumberArn?: string;
  Country?: string;
  Type?: PhoneNumberType;
  ProductType?: PhoneNumberProductType;
  Status?: PhoneNumberStatus;
  Capabilities?: PhoneNumberCapabilities;
  Associations?: PhoneNumberAssociation[];
  CallingName?: string | redacted.Redacted<string>;
  CallingNameStatus?: CallingNameStatus;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  DeletionTimestamp?: Date;
  OrderId?: string;
  Name?: string | redacted.Redacted<string>;
}
export interface GetPhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export interface GetPhoneNumberOrderRequest {
  PhoneNumberOrderId: string;
}
export interface GetPhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}
export interface GetPhoneNumberSettingsRequest {}
export interface GetPhoneNumberSettingsResponse {
  CallingName?: string | redacted.Redacted<string>;
  CallingNameUpdatedTimestamp?: Date;
}
export interface GetProxySessionRequest {
  VoiceConnectorId: string;
  ProxySessionId: string;
}
export interface GetProxySessionResponse {
  ProxySession?: ProxySession;
}
export interface GetSipMediaApplicationRequest {
  SipMediaApplicationId: string;
}
export interface GetSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}
export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
  SipMediaApplicationId: string;
}
export type AlexaSkillStatus = "ACTIVE" | "INACTIVE" | (string & {});
export type AlexaSkillId = string | redacted.Redacted<string>;
export type AlexaSkillIdList = (string | redacted.Redacted<string>)[];
export interface SipMediaApplicationAlexaSkillConfiguration {
  AlexaSkillStatus: AlexaSkillStatus;
  AlexaSkillIds: (string | redacted.Redacted<string>)[];
}
export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  SipMediaApplicationId: string;
}
export interface SipMediaApplicationLoggingConfiguration {
  EnableSipMediaApplicationMessageLogs?: boolean;
}
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export interface GetSipRuleRequest {
  SipRuleId: string;
}
export interface GetSipRuleResponse {
  SipRule?: SipRule;
}
export interface GetSpeakerSearchTaskRequest {
  VoiceConnectorId: string;
  SpeakerSearchTaskId: string;
}
export interface CallDetails {
  VoiceConnectorId?: string;
  TransactionId?: string;
  IsCaller?: boolean;
}
export type ConfidenceScore = number;
export interface SpeakerSearchResult {
  ConfidenceScore?: number;
  VoiceProfileId?: string;
}
export type SpeakerSearchResultList = SpeakerSearchResult[];
export interface SpeakerSearchDetails {
  Results?: SpeakerSearchResult[];
  VoiceprintGenerationStatus?: string;
}
export interface SpeakerSearchTask {
  SpeakerSearchTaskId?: string;
  SpeakerSearchTaskStatus?: string;
  CallDetails?: CallDetails;
  SpeakerSearchDetails?: SpeakerSearchDetails;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  StartedTimestamp?: Date;
  StatusMessage?: string;
}
export interface GetSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}
export interface GetVoiceConnectorRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface DNISEmergencyCallingConfiguration {
  EmergencyPhoneNumber: string | redacted.Redacted<string>;
  TestPhoneNumber?: string | redacted.Redacted<string>;
  CallingCountry: string;
}
export type DNISEmergencyCallingConfigurationList = DNISEmergencyCallingConfiguration[];
export interface EmergencyCallingConfiguration {
  DNIS?: DNISEmergencyCallingConfiguration[];
}
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}
export interface GetVoiceConnectorExternalSystemsConfigurationRequest {
  VoiceConnectorId: string;
}
export type SessionBorderControllerType =
  | "RIBBON_SBC"
  | "ORACLE_ACME_PACKET_SBC"
  | "AVAYA_SBCE"
  | "CISCO_UNIFIED_BORDER_ELEMENT"
  | "AUDIOCODES_MEDIANT_SBC"
  | (string & {});
export type SessionBorderControllerTypeList = SessionBorderControllerType[];
export type ContactCenterSystemType =
  | "GENESYS_ENGAGE_ON_PREMISES"
  | "AVAYA_AURA_CALL_CENTER_ELITE"
  | "AVAYA_AURA_CONTACT_CENTER"
  | "CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE"
  | (string & {});
export type ContactCenterSystemTypeList = ContactCenterSystemType[];
export interface ExternalSystemsConfiguration {
  SessionBorderControllerTypes?: SessionBorderControllerType[];
  ContactCenterSystemTypes?: ContactCenterSystemType[];
}
export interface GetVoiceConnectorExternalSystemsConfigurationResponse {
  ExternalSystemsConfiguration?: ExternalSystemsConfiguration;
}
export interface GetVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
}
export interface GetVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export interface GetVoiceConnectorLoggingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface LoggingConfiguration {
  EnableSIPLogs?: boolean;
  EnableMediaMetricLogs?: boolean;
}
export interface GetVoiceConnectorLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface GetVoiceConnectorOriginationRequest {
  VoiceConnectorId: string;
}
export type Port = number;
export type OriginationRouteProtocol = "TCP" | "UDP" | (string & {});
export type OriginationRoutePriority = number;
export type OriginationRouteWeight = number;
export interface OriginationRoute {
  Host?: string;
  Port?: number;
  Protocol?: OriginationRouteProtocol;
  Priority?: number;
  Weight?: number;
}
export type OriginationRouteList = OriginationRoute[];
export interface Origination {
  Routes?: OriginationRoute[];
  Disabled?: boolean;
}
export interface GetVoiceConnectorOriginationResponse {
  Origination?: Origination;
}
export interface GetVoiceConnectorProxyRequest {
  VoiceConnectorId: string;
}
export type StringList = string[];
export interface Proxy {
  DefaultSessionExpiryMinutes?: number;
  Disabled?: boolean;
  FallBackPhoneNumber?: string | redacted.Redacted<string>;
  PhoneNumberCountries?: string[];
}
export interface GetVoiceConnectorProxyResponse {
  Proxy?: Proxy;
}
export interface GetVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string;
}
export type DataRetentionInHours = number;
export type NotificationTarget = "EventBridge" | "SNS" | "SQS" | (string & {});
export interface StreamingNotificationTarget {
  NotificationTarget?: NotificationTarget;
}
export type StreamingNotificationTargetList = StreamingNotificationTarget[];
export interface MediaInsightsConfiguration {
  Disabled?: boolean;
  ConfigurationArn?: string | redacted.Redacted<string>;
}
export interface StreamingConfiguration {
  DataRetentionInHours: number;
  Disabled: boolean;
  StreamingNotificationTargets?: StreamingNotificationTarget[];
  MediaInsightsConfiguration?: MediaInsightsConfiguration;
}
export interface GetVoiceConnectorStreamingConfigurationResponse {
  StreamingConfiguration?: StreamingConfiguration;
}
export interface GetVoiceConnectorTerminationRequest {
  VoiceConnectorId: string;
}
export type CpsLimit = number;
export type CallingRegion = string;
export type CallingRegionList = string[];
export interface Termination {
  CpsLimit?: number;
  DefaultPhoneNumber?: string | redacted.Redacted<string>;
  CallingRegions?: string[];
  CidrAllowedList?: string[];
  Disabled?: boolean;
}
export interface GetVoiceConnectorTerminationResponse {
  Termination?: Termination;
}
export interface GetVoiceConnectorTerminationHealthRequest {
  VoiceConnectorId: string;
}
export interface TerminationHealth {
  Timestamp?: Date;
  Source?: string;
}
export interface GetVoiceConnectorTerminationHealthResponse {
  TerminationHealth?: TerminationHealth;
}
export interface GetVoiceProfileRequest {
  VoiceProfileId: string;
}
export interface GetVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}
export interface GetVoiceProfileDomainRequest {
  VoiceProfileDomainId: string;
}
export interface GetVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}
export interface GetVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string;
  VoiceToneAnalysisTaskId: string;
  IsCaller: boolean;
}
export interface VoiceToneAnalysisTask {
  VoiceToneAnalysisTaskId?: string;
  VoiceToneAnalysisTaskStatus?: string;
  CallDetails?: CallDetails;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  StartedTimestamp?: Date;
  StatusMessage?: string;
}
export interface GetVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}
export interface ListAvailableVoiceConnectorRegionsRequest {}
export type VoiceConnectorAwsRegionList = VoiceConnectorAwsRegion[];
export interface ListAvailableVoiceConnectorRegionsResponse {
  VoiceConnectorRegions?: VoiceConnectorAwsRegion[];
}
export type NextTokenString = string;
export type ResultMax = number;
export interface ListPhoneNumberOrdersRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type PhoneNumberOrderList = PhoneNumberOrder[];
export interface ListPhoneNumberOrdersResponse {
  PhoneNumberOrders?: PhoneNumberOrder[];
  NextToken?: string;
}
export interface ListPhoneNumbersRequest {
  Status?: string;
  ProductType?: PhoneNumberProductType;
  FilterName?: PhoneNumberAssociationName;
  FilterValue?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type PhoneNumberList = PhoneNumber[];
export interface ListPhoneNumbersResponse {
  PhoneNumbers?: PhoneNumber[];
  NextToken?: string;
}
export interface ListProxySessionsRequest {
  VoiceConnectorId: string;
  Status?: ProxySessionStatus;
  NextToken?: string;
  MaxResults?: number;
}
export type ProxySessions = ProxySession[];
export interface ListProxySessionsResponse {
  ProxySessions?: ProxySession[];
  NextToken?: string;
}
export interface ListSipMediaApplicationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type SipMediaApplicationList = SipMediaApplication[];
export interface ListSipMediaApplicationsResponse {
  SipMediaApplications?: SipMediaApplication[];
  NextToken?: string;
}
export interface ListSipRulesRequest {
  SipMediaApplicationId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type SipRuleList = SipRule[];
export interface ListSipRulesResponse {
  SipRules?: SipRule[];
  NextToken?: string;
}
export interface ListSupportedPhoneNumberCountriesRequest {
  ProductType: PhoneNumberProductType;
}
export type PhoneNumberTypeList = PhoneNumberType[];
export interface PhoneNumberCountry {
  CountryCode?: string;
  SupportedPhoneNumberTypes?: PhoneNumberType[];
}
export type PhoneNumberCountriesList = PhoneNumberCountry[];
export interface ListSupportedPhoneNumberCountriesResponse {
  PhoneNumberCountries?: PhoneNumberCountry[];
}
export interface ListTagsForResourceRequest {
  ResourceARN: string | redacted.Redacted<string>;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface ListVoiceConnectorGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type VoiceConnectorGroupList = VoiceConnectorGroup[];
export interface ListVoiceConnectorGroupsResponse {
  VoiceConnectorGroups?: VoiceConnectorGroup[];
  NextToken?: string;
}
export interface ListVoiceConnectorsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type VoiceConnectorList = VoiceConnector[];
export interface ListVoiceConnectorsResponse {
  VoiceConnectors?: VoiceConnector[];
  NextToken?: string;
}
export interface ListVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string;
}
export interface ListVoiceConnectorTerminationCredentialsResponse {
  Usernames?: (string | redacted.Redacted<string>)[];
}
export interface ListVoiceProfileDomainsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface VoiceProfileDomainSummary {
  VoiceProfileDomainId?: string;
  VoiceProfileDomainArn?: string | redacted.Redacted<string>;
  Name?: string;
  Description?: string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export type VoiceProfileDomainSummaryList = VoiceProfileDomainSummary[];
export interface ListVoiceProfileDomainsResponse {
  VoiceProfileDomains?: VoiceProfileDomainSummary[];
  NextToken?: string;
}
export interface ListVoiceProfilesRequest {
  VoiceProfileDomainId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface VoiceProfileSummary {
  VoiceProfileId?: string;
  VoiceProfileArn?: string | redacted.Redacted<string>;
  VoiceProfileDomainId?: string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  ExpirationTimestamp?: Date;
}
export type VoiceProfileSummaryList = VoiceProfileSummary[];
export interface ListVoiceProfilesResponse {
  VoiceProfiles?: VoiceProfileSummary[];
  NextToken?: string;
}
export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
  SipMediaApplicationId: string;
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}
export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  SipMediaApplicationId: string;
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string;
  EmergencyCallingConfiguration: EmergencyCallingConfiguration;
}
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}
export interface PutVoiceConnectorExternalSystemsConfigurationRequest {
  VoiceConnectorId: string;
  SessionBorderControllerTypes?: SessionBorderControllerType[];
  ContactCenterSystemTypes?: ContactCenterSystemType[];
}
export interface PutVoiceConnectorExternalSystemsConfigurationResponse {
  ExternalSystemsConfiguration?: ExternalSystemsConfiguration;
}
export interface PutVoiceConnectorLoggingConfigurationRequest {
  VoiceConnectorId: string;
  LoggingConfiguration: LoggingConfiguration;
}
export interface PutVoiceConnectorLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface PutVoiceConnectorOriginationRequest {
  VoiceConnectorId: string;
  Origination: Origination;
}
export interface PutVoiceConnectorOriginationResponse {
  Origination?: Origination;
}
export type CountryList = string[];
export interface PutVoiceConnectorProxyRequest {
  VoiceConnectorId: string;
  DefaultSessionExpiryMinutes: number;
  PhoneNumberPoolCountries: string[];
  FallBackPhoneNumber?: string | redacted.Redacted<string>;
  Disabled?: boolean;
}
export interface PutVoiceConnectorProxyResponse {
  Proxy?: Proxy;
}
export interface PutVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string;
  StreamingConfiguration: StreamingConfiguration;
}
export interface PutVoiceConnectorStreamingConfigurationResponse {
  StreamingConfiguration?: StreamingConfiguration;
}
export interface PutVoiceConnectorTerminationRequest {
  VoiceConnectorId: string;
  Termination: Termination;
}
export interface PutVoiceConnectorTerminationResponse {
  Termination?: Termination;
}
export interface Credential {
  Username?: string | redacted.Redacted<string>;
  Password?: string | redacted.Redacted<string>;
}
export type CredentialList = Credential[];
export interface PutVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string;
  Credentials?: Credential[];
}
export interface PutVoiceConnectorTerminationCredentialsResponse {}
export interface RestorePhoneNumberRequest {
  PhoneNumberId: string | redacted.Redacted<string>;
}
export interface RestorePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export type TollFreePrefix = string;
export type PhoneNumberMaxResults = number;
export interface SearchAvailablePhoneNumbersRequest {
  AreaCode?: string;
  City?: string;
  Country?: string;
  State?: string;
  TollFreePrefix?: string;
  PhoneNumberType?: PhoneNumberType;
  MaxResults?: number;
  NextToken?: string;
}
export interface SearchAvailablePhoneNumbersResponse {
  E164PhoneNumbers?: (string | redacted.Redacted<string>)[];
  NextToken?: string;
}
export type CallLegType = "Caller" | "Callee" | (string & {});
export interface StartSpeakerSearchTaskRequest {
  VoiceConnectorId: string;
  TransactionId: string;
  VoiceProfileDomainId: string;
  ClientRequestToken?: string;
  CallLeg?: CallLegType;
}
export interface StartSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}
export type LanguageCode = "en-US" | (string & {});
export interface StartVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string;
  TransactionId: string;
  LanguageCode: LanguageCode;
  ClientRequestToken?: string;
}
export interface StartVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}
export interface StopSpeakerSearchTaskRequest {
  VoiceConnectorId: string;
  SpeakerSearchTaskId: string;
}
export interface StopSpeakerSearchTaskResponse {}
export interface StopVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string;
  VoiceToneAnalysisTaskId: string;
}
export interface StopVoiceToneAnalysisTaskResponse {}
export interface TagResourceRequest {
  ResourceARN: string | redacted.Redacted<string>;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = (string | redacted.Redacted<string>)[];
export interface UntagResourceRequest {
  ResourceARN: string | redacted.Redacted<string>;
  TagKeys: (string | redacted.Redacted<string>)[];
}
export interface UntagResourceResponse {}
export interface UpdateGlobalSettingsRequest {
  VoiceConnector: VoiceConnectorSettings;
}
export interface UpdateGlobalSettingsResponse {}
export interface UpdatePhoneNumberRequest {
  PhoneNumberId: string | redacted.Redacted<string>;
  ProductType?: PhoneNumberProductType;
  CallingName?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
}
export interface UpdatePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export interface UpdatePhoneNumberSettingsRequest {
  CallingName: string | redacted.Redacted<string>;
}
export interface UpdatePhoneNumberSettingsResponse {}
export interface UpdateProxySessionRequest {
  VoiceConnectorId: string;
  ProxySessionId: string;
  Capabilities: Capability[];
  ExpiryMinutes?: number;
}
export interface UpdateProxySessionResponse {
  ProxySession?: ProxySession;
}
export interface UpdateSipMediaApplicationRequest {
  SipMediaApplicationId: string;
  Name?: string;
  Endpoints?: SipMediaApplicationEndpoint[];
}
export interface UpdateSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}
export type SMAUpdateCallArgumentsMap = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
export interface UpdateSipMediaApplicationCallRequest {
  SipMediaApplicationId: string;
  TransactionId: string;
  Arguments: { [key: string]: string | redacted.Redacted<string> | undefined };
}
export interface UpdateSipMediaApplicationCallResponse {
  SipMediaApplicationCall?: SipMediaApplicationCall;
}
export interface UpdateSipRuleRequest {
  SipRuleId: string;
  Name: string;
  Disabled?: boolean;
  TargetApplications?: SipRuleTargetApplication[];
}
export interface UpdateSipRuleResponse {
  SipRule?: SipRule;
}
export interface UpdateVoiceConnectorRequest {
  VoiceConnectorId: string;
  Name: string;
  RequireEncryption: boolean;
}
export interface UpdateVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}
export interface UpdateVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
  Name: string;
  VoiceConnectorItems: VoiceConnectorItem[];
  CallDistributionType?: CallDistributionType;
}
export interface UpdateVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export interface UpdateVoiceProfileRequest {
  VoiceProfileId: string;
  SpeakerSearchTaskId: string;
}
export interface UpdateVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}
export interface UpdateVoiceProfileDomainRequest {
  VoiceProfileDomainId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}
export interface ValidateE911AddressRequest {
  AwsAccountId: string;
  StreetNumber: string | redacted.Redacted<string>;
  StreetInfo: string | redacted.Redacted<string>;
  City: string | redacted.Redacted<string>;
  State: string | redacted.Redacted<string>;
  Country: string | redacted.Redacted<string>;
  PostalCode: string | redacted.Redacted<string>;
}
export type ValidationResult = number;
export interface Address {
  streetName?: string | redacted.Redacted<string>;
  streetSuffix?: string | redacted.Redacted<string>;
  postDirectional?: string | redacted.Redacted<string>;
  preDirectional?: string | redacted.Redacted<string>;
  streetNumber?: string | redacted.Redacted<string>;
  city?: string | redacted.Redacted<string>;
  state?: string | redacted.Redacted<string>;
  postalCode?: string | redacted.Redacted<string>;
  postalCodePlus4?: string | redacted.Redacted<string>;
  country?: string | redacted.Redacted<string>;
}
export interface CandidateAddress {
  streetInfo?: string | redacted.Redacted<string>;
  streetNumber?: string | redacted.Redacted<string>;
  city?: string | redacted.Redacted<string>;
  state?: string | redacted.Redacted<string>;
  postalCode?: string | redacted.Redacted<string>;
  postalCodePlus4?: string | redacted.Redacted<string>;
  country?: string | redacted.Redacted<string>;
}
export type CandidateAddressList = CandidateAddress[];
export interface ValidateE911AddressResponse {
  ValidationResult?: number;
  AddressExternalId?: string;
  Address?: Address;
  CandidateAddressList?: CandidateAddress[];
}
export type AssociatePhoneNumbersWithVoiceConnectorError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Associates phone numbers with the specified Amazon Chime SDK Voice Connector.
 */
export const associatePhoneNumbersWithVoiceConnector: API.OperationMethod<
  AssociatePhoneNumbersWithVoiceConnectorRequest,
  AssociatePhoneNumbersWithVoiceConnectorResponse,
  AssociatePhoneNumbersWithVoiceConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<AssociatePhoneNumbersWithVoiceConnectorRequest>,
  output: __S(4) as any as S.Schema<AssociatePhoneNumbersWithVoiceConnectorResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociatePhoneNumbersWithVoiceConnector",
}));

export type AssociatePhoneNumbersWithVoiceConnectorGroupError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Associates phone numbers with the specified Amazon Chime SDK Voice Connector group.
 */
export const associatePhoneNumbersWithVoiceConnectorGroup: API.OperationMethod<
  AssociatePhoneNumbersWithVoiceConnectorGroupRequest,
  AssociatePhoneNumbersWithVoiceConnectorGroupResponse,
  AssociatePhoneNumbersWithVoiceConnectorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<AssociatePhoneNumbersWithVoiceConnectorGroupRequest>,
  output: __S(4) as any as S.Schema<AssociatePhoneNumbersWithVoiceConnectorGroupResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociatePhoneNumbersWithVoiceConnectorGroup",
}));

export type BatchDeletePhoneNumberError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Moves phone numbers into the
 * **Deletion queue**. Phone numbers must be disassociated from any users or Amazon Chime SDK Voice Connectors before they can be deleted.
 *
 * Phone numbers remain in the
 * **Deletion queue** for 7 days before they are deleted permanently.
 */
export const batchDeletePhoneNumber: API.OperationMethod<
  BatchDeletePhoneNumberRequest,
  BatchDeletePhoneNumberResponse,
  BatchDeletePhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<BatchDeletePhoneNumberRequest>,
  output: __S(4) as any as S.Schema<BatchDeletePhoneNumberResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeletePhoneNumber",
}));

export type BatchUpdatePhoneNumberError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates phone number product types, calling names, or phone number names. You can update one attribute at a time for each
 * `UpdatePhoneNumberRequestItem`. For example, you can update the product type, the calling name, or phone name.
 *
 * You cannot have a duplicate `phoneNumberId` in a request.
 */
export const batchUpdatePhoneNumber: API.OperationMethod<
  BatchUpdatePhoneNumberRequest,
  BatchUpdatePhoneNumberResponse,
  BatchUpdatePhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<BatchUpdatePhoneNumberRequest>,
  output: __S(4) as any as S.Schema<BatchUpdatePhoneNumberResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdatePhoneNumber",
}));

export type CreatePhoneNumberOrderError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates an order for phone numbers to be provisioned. For numbers outside the U.S., you must use the Amazon Chime SDK SIP media application dial-in product type.
 */
export const createPhoneNumberOrder: API.OperationMethod<
  CreatePhoneNumberOrderRequest,
  CreatePhoneNumberOrderResponse,
  CreatePhoneNumberOrderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<CreatePhoneNumberOrderRequest>,
  output: __S(15) as any as S.Schema<CreatePhoneNumberOrderResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePhoneNumberOrder",
}));

export type CreateProxySessionError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a proxy session for the specified Amazon Chime SDK Voice Connector for
 * the specified participant phone numbers.
 *
 * End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 */
export const createProxySession: API.OperationMethod<
  CreateProxySessionRequest,
  CreateProxySessionResponse,
  CreateProxySessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<CreateProxySessionRequest>,
  output: __S(22) as any as S.Schema<CreateProxySessionResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProxySession",
}));

export type CreateSipMediaApplicationError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a SIP media application. For more information about SIP media applications, see Managing SIP media applications
 * and rules in the *Amazon Chime SDK Administrator Guide*.
 */
export const createSipMediaApplication: API.OperationMethod<
  CreateSipMediaApplicationRequest,
  CreateSipMediaApplicationResponse,
  CreateSipMediaApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<CreateSipMediaApplicationRequest>,
  output: __S(29) as any as S.Schema<CreateSipMediaApplicationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSipMediaApplication",
}));

export type CreateSipMediaApplicationCallError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates an outbound call to a phone number from the phone number specified
 * in the request, and it invokes the endpoint of the specified
 * `sipMediaApplicationId`.
 */
export const createSipMediaApplicationCall: API.OperationMethod<
  CreateSipMediaApplicationCallRequest,
  CreateSipMediaApplicationCallResponse,
  CreateSipMediaApplicationCallError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<CreateSipMediaApplicationCallRequest>,
  output: __S(33) as any as S.Schema<CreateSipMediaApplicationCallResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSipMediaApplicationCall",
}));

export type CreateSipRuleError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a SIP rule, which can be used to run a SIP media application as a target for a specific trigger type. For more information about SIP rules, see Managing SIP media applications
 * and rules in the *Amazon Chime SDK Administrator Guide*.
 */
export const createSipRule: API.OperationMethod<
  CreateSipRuleRequest,
  CreateSipRuleResponse,
  CreateSipRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<CreateSipRuleRequest>,
  output: __S(38) as any as S.Schema<CreateSipRuleResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSipRule",
}));

export type CreateVoiceConnectorError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates an Amazon Chime SDK Voice Connector. For more information about
 * Voice Connectors,
 * see Managing Amazon Chime SDK Voice Connector groups in the Amazon Chime SDK
 * Administrator Guide.
 */
export const createVoiceConnector: API.OperationMethod<
  CreateVoiceConnectorRequest,
  CreateVoiceConnectorResponse,
  CreateVoiceConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39) as any as S.Schema<CreateVoiceConnectorRequest>,
  output: __S(41) as any as S.Schema<CreateVoiceConnectorResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVoiceConnector",
}));

export type CreateVoiceConnectorGroupError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates an Amazon Chime SDK Voice Connector group under the administrator's
 * AWS account. You can associate Amazon Chime SDK Voice Connectors with the
 * Voice Connector group by including `VoiceConnectorItems` in the
 * request.
 *
 * You can include Voice Connectors from different AWS Regions in your group.
 * This creates a fault tolerant mechanism for fallback in case of availability events.
 */
export const createVoiceConnectorGroup: API.OperationMethod<
  CreateVoiceConnectorGroupRequest,
  CreateVoiceConnectorGroupResponse,
  CreateVoiceConnectorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<CreateVoiceConnectorGroupRequest>,
  output: __S(46) as any as S.Schema<CreateVoiceConnectorGroupResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVoiceConnectorGroup",
}));

export type CreateVoiceProfileError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | GoneException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a voice profile, which consists of an enrolled user and their latest voice print.
 *
 * Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 *
 * For more information about voice profiles and voice analytics, see Using Amazon Chime SDK Voice Analytics
 * in the *Amazon Chime SDK Developer Guide*.
 */
export const createVoiceProfile: API.OperationMethod<
  CreateVoiceProfileRequest,
  CreateVoiceProfileResponse,
  CreateVoiceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<CreateVoiceProfileRequest>,
  output: __S(49) as any as S.Schema<CreateVoiceProfileResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    GoneException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVoiceProfile",
}));

export type CreateVoiceProfileDomainError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a voice profile domain, a collection of voice profiles, their voice prints, and encrypted enrollment audio.
 *
 * Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 *
 * For more information about voice profile domains, see Using Amazon Chime SDK Voice Analytics
 * in the *Amazon Chime SDK Developer Guide*.
 */
export const createVoiceProfileDomain: API.OperationMethod<
  CreateVoiceProfileDomainRequest,
  CreateVoiceProfileDomainResponse,
  CreateVoiceProfileDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<CreateVoiceProfileDomainRequest>,
  output: __S(53) as any as S.Schema<CreateVoiceProfileDomainResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVoiceProfileDomain",
}));

export type DeletePhoneNumberError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Moves the specified phone number into the
 * **Deletion queue**. A phone number must
 * be disassociated from any users or Amazon Chime SDK Voice Connectors before it can be
 * deleted.
 *
 * Deleted phone numbers remain in the
 * **Deletion queue** queue for 7 days before
 * they are deleted permanently.
 */
export const deletePhoneNumber: API.OperationMethod<
  DeletePhoneNumberRequest,
  DeletePhoneNumberResponse,
  DeletePhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<DeletePhoneNumberRequest>,
  output: __S(55) as any as S.Schema<DeletePhoneNumberResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePhoneNumber",
}));

export type DeleteProxySessionError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the specified proxy session from the specified Amazon Chime SDK Voice
 * Connector.
 *
 * End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 */
export const deleteProxySession: API.OperationMethod<
  DeleteProxySessionRequest,
  DeleteProxySessionResponse,
  DeleteProxySessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<DeleteProxySessionRequest>,
  output: __S(55) as any as S.Schema<DeleteProxySessionResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProxySession",
}));

export type DeleteSipMediaApplicationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes a SIP media application.
 */
export const deleteSipMediaApplication: API.OperationMethod<
  DeleteSipMediaApplicationRequest,
  DeleteSipMediaApplicationResponse,
  DeleteSipMediaApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57) as any as S.Schema<DeleteSipMediaApplicationRequest>,
  output: __S(58) as any as S.Schema<DeleteSipMediaApplicationResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSipMediaApplication",
}));

export type DeleteSipRuleError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes a SIP rule.
 */
export const deleteSipRule: API.OperationMethod<
  DeleteSipRuleRequest,
  DeleteSipRuleResponse,
  DeleteSipRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59) as any as S.Schema<DeleteSipRuleRequest>,
  output: __S(55) as any as S.Schema<DeleteSipRuleResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSipRule",
}));

export type DeleteVoiceConnectorError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes an Amazon Chime SDK Voice Connector. Any phone numbers associated
 * with the Amazon Chime SDK Voice Connector must be disassociated from it before it
 * can be deleted.
 */
export const deleteVoiceConnector: API.OperationMethod<
  DeleteVoiceConnectorRequest,
  DeleteVoiceConnectorResponse,
  DeleteVoiceConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<DeleteVoiceConnectorRequest>,
  output: __S(55) as any as S.Schema<DeleteVoiceConnectorResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnector",
}));

export type DeleteVoiceConnectorEmergencyCallingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the emergency calling details from the specified Amazon Chime SDK Voice
 * Connector.
 */
export const deleteVoiceConnectorEmergencyCallingConfiguration: API.OperationMethod<
  DeleteVoiceConnectorEmergencyCallingConfigurationRequest,
  DeleteVoiceConnectorEmergencyCallingConfigurationResponse,
  DeleteVoiceConnectorEmergencyCallingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<DeleteVoiceConnectorEmergencyCallingConfigurationRequest>,
  output: __S(62) as any as S.Schema<DeleteVoiceConnectorEmergencyCallingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnectorEmergencyCallingConfiguration",
}));

export type DeleteVoiceConnectorExternalSystemsConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the external systems configuration for a Voice Connector.
 */
export const deleteVoiceConnectorExternalSystemsConfiguration: API.OperationMethod<
  DeleteVoiceConnectorExternalSystemsConfigurationRequest,
  DeleteVoiceConnectorExternalSystemsConfigurationResponse,
  DeleteVoiceConnectorExternalSystemsConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<DeleteVoiceConnectorExternalSystemsConfigurationRequest>,
  output: __S(62) as any as S.Schema<DeleteVoiceConnectorExternalSystemsConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnectorExternalSystemsConfiguration",
}));

export type DeleteVoiceConnectorGroupError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes an Amazon Chime SDK Voice Connector group. Any `VoiceConnectorItems`
 * and phone numbers associated with the group must be removed before it can be
 * deleted.
 */
export const deleteVoiceConnectorGroup: API.OperationMethod<
  DeleteVoiceConnectorGroupRequest,
  DeleteVoiceConnectorGroupResponse,
  DeleteVoiceConnectorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<DeleteVoiceConnectorGroupRequest>,
  output: __S(58) as any as S.Schema<DeleteVoiceConnectorGroupResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnectorGroup",
}));

export type DeleteVoiceConnectorOriginationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the origination settings for the specified Amazon Chime SDK Voice Connector.
 *
 * If emergency calling is configured for the Voice Connector, it must be
 * deleted prior to deleting the origination settings.
 */
export const deleteVoiceConnectorOrigination: API.OperationMethod<
  DeleteVoiceConnectorOriginationRequest,
  DeleteVoiceConnectorOriginationResponse,
  DeleteVoiceConnectorOriginationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<DeleteVoiceConnectorOriginationRequest>,
  output: __S(58) as any as S.Schema<DeleteVoiceConnectorOriginationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnectorOrigination",
}));

export type DeleteVoiceConnectorProxyError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the proxy configuration from the specified Amazon Chime SDK Voice Connector.
 *
 * End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 */
export const deleteVoiceConnectorProxy: API.OperationMethod<
  DeleteVoiceConnectorProxyRequest,
  DeleteVoiceConnectorProxyResponse,
  DeleteVoiceConnectorProxyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<DeleteVoiceConnectorProxyRequest>,
  output: __S(58) as any as S.Schema<DeleteVoiceConnectorProxyResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnectorProxy",
}));

export type DeleteVoiceConnectorStreamingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes a Voice Connector's streaming configuration.
 */
export const deleteVoiceConnectorStreamingConfiguration: API.OperationMethod<
  DeleteVoiceConnectorStreamingConfigurationRequest,
  DeleteVoiceConnectorStreamingConfigurationResponse,
  DeleteVoiceConnectorStreamingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<DeleteVoiceConnectorStreamingConfigurationRequest>,
  output: __S(58) as any as S.Schema<DeleteVoiceConnectorStreamingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnectorStreamingConfiguration",
}));

export type DeleteVoiceConnectorTerminationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the termination settings for the specified Amazon Chime SDK Voice Connector.
 *
 * If emergency calling is configured for the Voice Connector, it must be
 * deleted prior to deleting the termination settings.
 */
export const deleteVoiceConnectorTermination: API.OperationMethod<
  DeleteVoiceConnectorTerminationRequest,
  DeleteVoiceConnectorTerminationResponse,
  DeleteVoiceConnectorTerminationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<DeleteVoiceConnectorTerminationRequest>,
  output: __S(58) as any as S.Schema<DeleteVoiceConnectorTerminationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnectorTermination",
}));

export type DeleteVoiceConnectorTerminationCredentialsError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the specified SIP credentials used by your equipment to
 * authenticate during call termination.
 */
export const deleteVoiceConnectorTerminationCredentials: API.OperationMethod<
  DeleteVoiceConnectorTerminationCredentialsRequest,
  DeleteVoiceConnectorTerminationCredentialsResponse,
  DeleteVoiceConnectorTerminationCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<DeleteVoiceConnectorTerminationCredentialsRequest>,
  output: __S(58) as any as S.Schema<DeleteVoiceConnectorTerminationCredentialsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceConnectorTerminationCredentials",
}));

export type DeleteVoiceProfileError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes a voice profile, including its voice print and enrollment data. WARNING: This action is not reversible.
 */
export const deleteVoiceProfile: API.OperationMethod<
  DeleteVoiceProfileRequest,
  DeleteVoiceProfileResponse,
  DeleteVoiceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<DeleteVoiceProfileRequest>,
  output: __S(55) as any as S.Schema<DeleteVoiceProfileResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceProfile",
}));

export type DeleteVoiceProfileDomainError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes all voice profiles in the domain. WARNING: This action is not reversible.
 */
export const deleteVoiceProfileDomain: API.OperationMethod<
  DeleteVoiceProfileDomainRequest,
  DeleteVoiceProfileDomainResponse,
  DeleteVoiceProfileDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<DeleteVoiceProfileDomainRequest>,
  output: __S(58) as any as S.Schema<DeleteVoiceProfileDomainResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceProfileDomain",
}));

export type DisassociatePhoneNumbersFromVoiceConnectorError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Disassociates the specified phone numbers from the specified
 * Amazon Chime SDK Voice Connector.
 */
export const disassociatePhoneNumbersFromVoiceConnector: API.OperationMethod<
  DisassociatePhoneNumbersFromVoiceConnectorRequest,
  DisassociatePhoneNumbersFromVoiceConnectorResponse,
  DisassociatePhoneNumbersFromVoiceConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<DisassociatePhoneNumbersFromVoiceConnectorRequest>,
  output: __S(4) as any as S.Schema<DisassociatePhoneNumbersFromVoiceConnectorResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociatePhoneNumbersFromVoiceConnector",
}));

export type DisassociatePhoneNumbersFromVoiceConnectorGroupError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice
 * Connector group.
 */
export const disassociatePhoneNumbersFromVoiceConnectorGroup: API.OperationMethod<
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
  DisassociatePhoneNumbersFromVoiceConnectorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<DisassociatePhoneNumbersFromVoiceConnectorGroupRequest>,
  output: __S(4) as any as S.Schema<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociatePhoneNumbersFromVoiceConnectorGroup",
}));

export type GetGlobalSettingsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the global settings for the Amazon Chime SDK Voice Connectors in an AWS account.
 */
export const getGlobalSettings: API.OperationMethod<
  GetGlobalSettingsRequest,
  GetGlobalSettingsResponse,
  GetGlobalSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<GetGlobalSettingsRequest>,
  output: __S(76) as any as S.Schema<GetGlobalSettingsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGlobalSettings",
}));

export type GetPhoneNumberError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves details for the specified phone number ID, such as associations,
 * capabilities, and product type.
 */
export const getPhoneNumber: API.OperationMethod<
  GetPhoneNumberRequest,
  GetPhoneNumberResponse,
  GetPhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<GetPhoneNumberRequest>,
  output: __S(82) as any as S.Schema<GetPhoneNumberResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPhoneNumber",
}));

export type GetPhoneNumberOrderError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves details for the specified phone number order, such as the order
 * creation timestamp, phone numbers in E.164 format, product type, and
 * order status.
 */
export const getPhoneNumberOrder: API.OperationMethod<
  GetPhoneNumberOrderRequest,
  GetPhoneNumberOrderResponse,
  GetPhoneNumberOrderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<GetPhoneNumberOrderRequest>,
  output: __S(15) as any as S.Schema<GetPhoneNumberOrderResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPhoneNumberOrder",
}));

export type GetPhoneNumberSettingsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the phone number settings for the administrator's AWS account,
 * such as the default outbound calling name.
 */
export const getPhoneNumberSettings: API.OperationMethod<
  GetPhoneNumberSettingsRequest,
  GetPhoneNumberSettingsResponse,
  GetPhoneNumberSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<GetPhoneNumberSettingsRequest>,
  output: __S(85) as any as S.Schema<GetPhoneNumberSettingsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPhoneNumberSettings",
}));

export type GetProxySessionError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the specified proxy session details for the specified Amazon Chime SDK Voice Connector.
 *
 * End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 */
export const getProxySession: API.OperationMethod<
  GetProxySessionRequest,
  GetProxySessionResponse,
  GetProxySessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86) as any as S.Schema<GetProxySessionRequest>,
  output: __S(87) as any as S.Schema<GetProxySessionResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProxySession",
}));

export type GetSipMediaApplicationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the information for a SIP media application, including name,
 * AWS Region, and endpoints.
 */
export const getSipMediaApplication: API.OperationMethod<
  GetSipMediaApplicationRequest,
  GetSipMediaApplicationResponse,
  GetSipMediaApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(88) as any as S.Schema<GetSipMediaApplicationRequest>,
  output: __S(29) as any as S.Schema<GetSipMediaApplicationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSipMediaApplication",
}));

export type GetSipMediaApplicationAlexaSkillConfigurationError =
  | BadRequestException
  | ForbiddenException
  | GoneException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets the Alexa Skill configuration for the SIP media application.
 *
 * Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to
 * the Alexa Smart Properties page.
 */
export const getSipMediaApplicationAlexaSkillConfiguration: API.OperationMethod<
  GetSipMediaApplicationAlexaSkillConfigurationRequest,
  GetSipMediaApplicationAlexaSkillConfigurationResponse,
  GetSipMediaApplicationAlexaSkillConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89) as any as S.Schema<GetSipMediaApplicationAlexaSkillConfigurationRequest>,
  output: __S(91) as any as S.Schema<GetSipMediaApplicationAlexaSkillConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    GoneException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSipMediaApplicationAlexaSkillConfiguration",
}));

export type GetSipMediaApplicationLoggingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the logging configuration for the specified SIP media application.
 */
export const getSipMediaApplicationLoggingConfiguration: API.OperationMethod<
  GetSipMediaApplicationLoggingConfigurationRequest,
  GetSipMediaApplicationLoggingConfigurationResponse,
  GetSipMediaApplicationLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<GetSipMediaApplicationLoggingConfigurationRequest>,
  output: __S(94) as any as S.Schema<GetSipMediaApplicationLoggingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSipMediaApplicationLoggingConfiguration",
}));

export type GetSipRuleError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and
 * target endpoints.
 */
export const getSipRule: API.OperationMethod<
  GetSipRuleRequest,
  GetSipRuleResponse,
  GetSipRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<GetSipRuleRequest>,
  output: __S(38) as any as S.Schema<GetSipRuleResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSipRule",
}));

export type GetSpeakerSearchTaskError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the details of the specified speaker search task.
 */
export const getSpeakerSearchTask: API.OperationMethod<
  GetSpeakerSearchTaskRequest,
  GetSpeakerSearchTaskResponse,
  GetSpeakerSearchTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96) as any as S.Schema<GetSpeakerSearchTaskRequest>,
  output: __S(102) as any as S.Schema<GetSpeakerSearchTaskResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSpeakerSearchTask",
}));

export type GetVoiceConnectorError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves details for the specified Amazon Chime SDK Voice Connector, such as
 * timestamps,name, outbound host, and encryption requirements.
 */
export const getVoiceConnector: API.OperationMethod<
  GetVoiceConnectorRequest,
  GetVoiceConnectorResponse,
  GetVoiceConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103) as any as S.Schema<GetVoiceConnectorRequest>,
  output: __S(41) as any as S.Schema<GetVoiceConnectorResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnector",
}));

export type GetVoiceConnectorEmergencyCallingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the emergency calling configuration details for the specified Voice Connector.
 */
export const getVoiceConnectorEmergencyCallingConfiguration: API.OperationMethod<
  GetVoiceConnectorEmergencyCallingConfigurationRequest,
  GetVoiceConnectorEmergencyCallingConfigurationResponse,
  GetVoiceConnectorEmergencyCallingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<GetVoiceConnectorEmergencyCallingConfigurationRequest>,
  output: __S(108) as any as S.Schema<GetVoiceConnectorEmergencyCallingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorEmergencyCallingConfiguration",
}));

export type GetVoiceConnectorExternalSystemsConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets information about an external systems configuration for a Voice
 * Connector.
 */
export const getVoiceConnectorExternalSystemsConfiguration: API.OperationMethod<
  GetVoiceConnectorExternalSystemsConfigurationRequest,
  GetVoiceConnectorExternalSystemsConfigurationResponse,
  GetVoiceConnectorExternalSystemsConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<GetVoiceConnectorExternalSystemsConfigurationRequest>,
  output: __S(111) as any as S.Schema<GetVoiceConnectorExternalSystemsConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorExternalSystemsConfiguration",
}));

export type GetVoiceConnectorGroupError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves details for the specified Amazon Chime SDK Voice Connector group,
 * such as timestamps,name, and associated `VoiceConnectorItems`.
 */
export const getVoiceConnectorGroup: API.OperationMethod<
  GetVoiceConnectorGroupRequest,
  GetVoiceConnectorGroupResponse,
  GetVoiceConnectorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<GetVoiceConnectorGroupRequest>,
  output: __S(46) as any as S.Schema<GetVoiceConnectorGroupResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorGroup",
}));

export type GetVoiceConnectorLoggingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the logging configuration settings for the specified Voice Connector.
 * Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
 */
export const getVoiceConnectorLoggingConfiguration: API.OperationMethod<
  GetVoiceConnectorLoggingConfigurationRequest,
  GetVoiceConnectorLoggingConfigurationResponse,
  GetVoiceConnectorLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<GetVoiceConnectorLoggingConfigurationRequest>,
  output: __S(115) as any as S.Schema<GetVoiceConnectorLoggingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorLoggingConfiguration",
}));

export type GetVoiceConnectorOriginationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the origination settings for the specified Voice Connector.
 */
export const getVoiceConnectorOrigination: API.OperationMethod<
  GetVoiceConnectorOriginationRequest,
  GetVoiceConnectorOriginationResponse,
  GetVoiceConnectorOriginationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116) as any as S.Schema<GetVoiceConnectorOriginationRequest>,
  output: __S(120) as any as S.Schema<GetVoiceConnectorOriginationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorOrigination",
}));

export type GetVoiceConnectorProxyError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the proxy configuration details for the specified Amazon Chime SDK Voice
 * Connector.
 *
 * End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 */
export const getVoiceConnectorProxy: API.OperationMethod<
  GetVoiceConnectorProxyRequest,
  GetVoiceConnectorProxyResponse,
  GetVoiceConnectorProxyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<GetVoiceConnectorProxyRequest>,
  output: __S(123) as any as S.Schema<GetVoiceConnectorProxyResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorProxy",
}));

export type GetVoiceConnectorStreamingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the streaming configuration details for the specified Amazon Chime SDK
 * Voice Connector. Shows whether media streaming is enabled for sending to Amazon
 * Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.
 */
export const getVoiceConnectorStreamingConfiguration: API.OperationMethod<
  GetVoiceConnectorStreamingConfigurationRequest,
  GetVoiceConnectorStreamingConfigurationResponse,
  GetVoiceConnectorStreamingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124) as any as S.Schema<GetVoiceConnectorStreamingConfigurationRequest>,
  output: __S(129) as any as S.Schema<GetVoiceConnectorStreamingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorStreamingConfiguration",
}));

export type GetVoiceConnectorTerminationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the termination setting details for the specified Voice Connector.
 */
export const getVoiceConnectorTermination: API.OperationMethod<
  GetVoiceConnectorTerminationRequest,
  GetVoiceConnectorTerminationResponse,
  GetVoiceConnectorTerminationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130) as any as S.Schema<GetVoiceConnectorTerminationRequest>,
  output: __S(132) as any as S.Schema<GetVoiceConnectorTerminationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorTermination",
}));

export type GetVoiceConnectorTerminationHealthError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves information about the last time a `SIP OPTIONS` ping
 * was received from your SIP infrastructure for the specified Amazon Chime SDK Voice
 * Connector.
 */
export const getVoiceConnectorTerminationHealth: API.OperationMethod<
  GetVoiceConnectorTerminationHealthRequest,
  GetVoiceConnectorTerminationHealthResponse,
  GetVoiceConnectorTerminationHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133) as any as S.Schema<GetVoiceConnectorTerminationHealthRequest>,
  output: __S(135) as any as S.Schema<GetVoiceConnectorTerminationHealthResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceConnectorTerminationHealth",
}));

export type GetVoiceProfileError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the details of the specified voice profile.
 */
export const getVoiceProfile: API.OperationMethod<
  GetVoiceProfileRequest,
  GetVoiceProfileResponse,
  GetVoiceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136) as any as S.Schema<GetVoiceProfileRequest>,
  output: __S(137) as any as S.Schema<GetVoiceProfileResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceProfile",
}));

export type GetVoiceProfileDomainError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the details of the specified voice profile domain.
 */
export const getVoiceProfileDomain: API.OperationMethod<
  GetVoiceProfileDomainRequest,
  GetVoiceProfileDomainResponse,
  GetVoiceProfileDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(138) as any as S.Schema<GetVoiceProfileDomainRequest>,
  output: __S(53) as any as S.Schema<GetVoiceProfileDomainResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceProfileDomain",
}));

export type GetVoiceToneAnalysisTaskError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the details of a voice tone analysis task.
 */
export const getVoiceToneAnalysisTask: API.OperationMethod<
  GetVoiceToneAnalysisTaskRequest,
  GetVoiceToneAnalysisTaskResponse,
  GetVoiceToneAnalysisTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139) as any as S.Schema<GetVoiceToneAnalysisTaskRequest>,
  output: __S(141) as any as S.Schema<GetVoiceToneAnalysisTaskResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceToneAnalysisTask",
}));

export type ListAvailableVoiceConnectorRegionsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector.
 */
export const listAvailableVoiceConnectorRegions: API.OperationMethod<
  ListAvailableVoiceConnectorRegionsRequest,
  ListAvailableVoiceConnectorRegionsResponse,
  ListAvailableVoiceConnectorRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142) as any as S.Schema<ListAvailableVoiceConnectorRegionsRequest>,
  output: __S(143) as any as S.Schema<ListAvailableVoiceConnectorRegionsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableVoiceConnectorRegions",
}));

export type ListPhoneNumberOrdersError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the phone numbers for an administrator's Amazon Chime SDK account.
 */
export const listPhoneNumberOrders: API.PaginatedOperationMethod<
  ListPhoneNumberOrdersRequest,
  ListPhoneNumberOrdersResponse,
  ListPhoneNumberOrdersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(144) as any as S.Schema<ListPhoneNumberOrdersRequest>,
  output: __S(146) as any as S.Schema<ListPhoneNumberOrdersResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPhoneNumberOrders",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPhoneNumbersError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the phone numbers for the specified Amazon Chime SDK account,
 * Amazon Chime SDK user, Amazon Chime SDK Voice Connector, or Amazon Chime SDK Voice
 * Connector group.
 */
export const listPhoneNumbers: API.PaginatedOperationMethod<
  ListPhoneNumbersRequest,
  ListPhoneNumbersResponse,
  ListPhoneNumbersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(147) as any as S.Schema<ListPhoneNumbersRequest>,
  output: __S(149) as any as S.Schema<ListPhoneNumbersResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPhoneNumbers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProxySessionsError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the proxy sessions for the specified Amazon Chime SDK Voice Connector.
 *
 * End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 */
export const listProxySessions: API.PaginatedOperationMethod<
  ListProxySessionsRequest,
  ListProxySessionsResponse,
  ListProxySessionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(150) as any as S.Schema<ListProxySessionsRequest>,
  output: __S(152) as any as S.Schema<ListProxySessionsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProxySessions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSipMediaApplicationsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the SIP media applications under the administrator's AWS account.
 */
export const listSipMediaApplications: API.PaginatedOperationMethod<
  ListSipMediaApplicationsRequest,
  ListSipMediaApplicationsResponse,
  ListSipMediaApplicationsError,
  Credentials | HttpClient.HttpClient,
  SipMediaApplication
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(153) as any as S.Schema<ListSipMediaApplicationsRequest>,
  output: __S(155) as any as S.Schema<ListSipMediaApplicationsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSipMediaApplications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SipMediaApplications",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSipRulesError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the SIP rules under the administrator's AWS account.
 */
export const listSipRules: API.PaginatedOperationMethod<
  ListSipRulesRequest,
  ListSipRulesResponse,
  ListSipRulesError,
  Credentials | HttpClient.HttpClient,
  SipRule
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(156) as any as S.Schema<ListSipRulesRequest>,
  output: __S(158) as any as S.Schema<ListSipRulesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSipRules",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SipRules",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSupportedPhoneNumberCountriesError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the countries that you can order phone numbers from.
 */
export const listSupportedPhoneNumberCountries: API.OperationMethod<
  ListSupportedPhoneNumberCountriesRequest,
  ListSupportedPhoneNumberCountriesResponse,
  ListSupportedPhoneNumberCountriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159) as any as S.Schema<ListSupportedPhoneNumberCountriesRequest>,
  output: __S(162) as any as S.Schema<ListSupportedPhoneNumberCountriesResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSupportedPhoneNumberCountries",
}));

export type ListTagsForResourceError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns a list of the tags in a given resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(164) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListVoiceConnectorGroupsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the Amazon Chime SDK Voice Connector groups in the administrator's AWS
 * account.
 */
export const listVoiceConnectorGroups: API.PaginatedOperationMethod<
  ListVoiceConnectorGroupsRequest,
  ListVoiceConnectorGroupsResponse,
  ListVoiceConnectorGroupsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165) as any as S.Schema<ListVoiceConnectorGroupsRequest>,
  output: __S(167) as any as S.Schema<ListVoiceConnectorGroupsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVoiceConnectorGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListVoiceConnectorsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the Amazon Chime SDK Voice Connectors in the administrators
 * AWS account.
 */
export const listVoiceConnectors: API.PaginatedOperationMethod<
  ListVoiceConnectorsRequest,
  ListVoiceConnectorsResponse,
  ListVoiceConnectorsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(168) as any as S.Schema<ListVoiceConnectorsRequest>,
  output: __S(170) as any as S.Schema<ListVoiceConnectorsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVoiceConnectors",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListVoiceConnectorTerminationCredentialsError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the SIP credentials for the specified Amazon Chime SDK Voice Connector.
 */
export const listVoiceConnectorTerminationCredentials: API.OperationMethod<
  ListVoiceConnectorTerminationCredentialsRequest,
  ListVoiceConnectorTerminationCredentialsResponse,
  ListVoiceConnectorTerminationCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171) as any as S.Schema<ListVoiceConnectorTerminationCredentialsRequest>,
  output: __S(172) as any as S.Schema<ListVoiceConnectorTerminationCredentialsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVoiceConnectorTerminationCredentials",
}));

export type ListVoiceProfileDomainsError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the specified voice profile domains in the administrator's AWS account.
 */
export const listVoiceProfileDomains: API.PaginatedOperationMethod<
  ListVoiceProfileDomainsRequest,
  ListVoiceProfileDomainsResponse,
  ListVoiceProfileDomainsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(173) as any as S.Schema<ListVoiceProfileDomainsRequest>,
  output: __S(176) as any as S.Schema<ListVoiceProfileDomainsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVoiceProfileDomains",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListVoiceProfilesError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the voice profiles in a voice profile domain.
 */
export const listVoiceProfiles: API.PaginatedOperationMethod<
  ListVoiceProfilesRequest,
  ListVoiceProfilesResponse,
  ListVoiceProfilesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(177) as any as S.Schema<ListVoiceProfilesRequest>,
  output: __S(179) as any as S.Schema<ListVoiceProfilesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVoiceProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutSipMediaApplicationAlexaSkillConfigurationError =
  | BadRequestException
  | ForbiddenException
  | GoneException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the Alexa Skill configuration for the SIP media application.
 *
 * Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to
 * the Alexa Smart Properties page.
 */
export const putSipMediaApplicationAlexaSkillConfiguration: API.OperationMethod<
  PutSipMediaApplicationAlexaSkillConfigurationRequest,
  PutSipMediaApplicationAlexaSkillConfigurationResponse,
  PutSipMediaApplicationAlexaSkillConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180) as any as S.Schema<PutSipMediaApplicationAlexaSkillConfigurationRequest>,
  output: __S(91) as any as S.Schema<PutSipMediaApplicationAlexaSkillConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    GoneException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSipMediaApplicationAlexaSkillConfiguration",
}));

export type PutSipMediaApplicationLoggingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the logging configuration for the specified SIP media application.
 */
export const putSipMediaApplicationLoggingConfiguration: API.OperationMethod<
  PutSipMediaApplicationLoggingConfigurationRequest,
  PutSipMediaApplicationLoggingConfigurationResponse,
  PutSipMediaApplicationLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181) as any as S.Schema<PutSipMediaApplicationLoggingConfigurationRequest>,
  output: __S(94) as any as S.Schema<PutSipMediaApplicationLoggingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSipMediaApplicationLoggingConfiguration",
}));

export type PutVoiceConnectorEmergencyCallingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates a Voice Connector's emergency calling configuration.
 */
export const putVoiceConnectorEmergencyCallingConfiguration: API.OperationMethod<
  PutVoiceConnectorEmergencyCallingConfigurationRequest,
  PutVoiceConnectorEmergencyCallingConfigurationResponse,
  PutVoiceConnectorEmergencyCallingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<PutVoiceConnectorEmergencyCallingConfigurationRequest>,
  output: __S(108) as any as S.Schema<PutVoiceConnectorEmergencyCallingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVoiceConnectorEmergencyCallingConfiguration",
}));

export type PutVoiceConnectorExternalSystemsConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Adds an external systems configuration to a Voice Connector.
 */
export const putVoiceConnectorExternalSystemsConfiguration: API.OperationMethod<
  PutVoiceConnectorExternalSystemsConfigurationRequest,
  PutVoiceConnectorExternalSystemsConfigurationResponse,
  PutVoiceConnectorExternalSystemsConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183) as any as S.Schema<PutVoiceConnectorExternalSystemsConfigurationRequest>,
  output: __S(111) as any as S.Schema<PutVoiceConnectorExternalSystemsConfigurationResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVoiceConnectorExternalSystemsConfiguration",
}));

export type PutVoiceConnectorLoggingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates a Voice Connector's logging configuration.
 */
export const putVoiceConnectorLoggingConfiguration: API.OperationMethod<
  PutVoiceConnectorLoggingConfigurationRequest,
  PutVoiceConnectorLoggingConfigurationResponse,
  PutVoiceConnectorLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<PutVoiceConnectorLoggingConfigurationRequest>,
  output: __S(115) as any as S.Schema<PutVoiceConnectorLoggingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVoiceConnectorLoggingConfiguration",
}));

export type PutVoiceConnectorOriginationError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates a Voice Connector's origination settings.
 */
export const putVoiceConnectorOrigination: API.OperationMethod<
  PutVoiceConnectorOriginationRequest,
  PutVoiceConnectorOriginationResponse,
  PutVoiceConnectorOriginationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185) as any as S.Schema<PutVoiceConnectorOriginationRequest>,
  output: __S(120) as any as S.Schema<PutVoiceConnectorOriginationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVoiceConnectorOrigination",
}));

export type PutVoiceConnectorProxyError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.
 *
 * End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 */
export const putVoiceConnectorProxy: API.OperationMethod<
  PutVoiceConnectorProxyRequest,
  PutVoiceConnectorProxyResponse,
  PutVoiceConnectorProxyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<PutVoiceConnectorProxyRequest>,
  output: __S(123) as any as S.Schema<PutVoiceConnectorProxyResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVoiceConnectorProxy",
}));

export type PutVoiceConnectorStreamingConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates a Voice Connector's streaming configuration settings.
 */
export const putVoiceConnectorStreamingConfiguration: API.OperationMethod<
  PutVoiceConnectorStreamingConfigurationRequest,
  PutVoiceConnectorStreamingConfigurationResponse,
  PutVoiceConnectorStreamingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187) as any as S.Schema<PutVoiceConnectorStreamingConfigurationRequest>,
  output: __S(129) as any as S.Schema<PutVoiceConnectorStreamingConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVoiceConnectorStreamingConfiguration",
}));

export type PutVoiceConnectorTerminationError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates a Voice Connector's termination settings.
 */
export const putVoiceConnectorTermination: API.OperationMethod<
  PutVoiceConnectorTerminationRequest,
  PutVoiceConnectorTerminationResponse,
  PutVoiceConnectorTerminationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<PutVoiceConnectorTerminationRequest>,
  output: __S(132) as any as S.Schema<PutVoiceConnectorTerminationResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVoiceConnectorTermination",
}));

export type PutVoiceConnectorTerminationCredentialsError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates a Voice Connector's termination credentials.
 */
export const putVoiceConnectorTerminationCredentials: API.OperationMethod<
  PutVoiceConnectorTerminationCredentialsRequest,
  PutVoiceConnectorTerminationCredentialsResponse,
  PutVoiceConnectorTerminationCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191) as any as S.Schema<PutVoiceConnectorTerminationCredentialsRequest>,
  output: __S(58) as any as S.Schema<PutVoiceConnectorTerminationCredentialsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVoiceConnectorTerminationCredentials",
}));

export type RestorePhoneNumberError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Restores a deleted phone number.
 */
export const restorePhoneNumber: API.OperationMethod<
  RestorePhoneNumberRequest,
  RestorePhoneNumberResponse,
  RestorePhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<RestorePhoneNumberRequest>,
  output: __S(193) as any as S.Schema<RestorePhoneNumberResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestorePhoneNumber",
}));

export type SearchAvailablePhoneNumbersError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Searches the provisioned phone numbers in an organization.
 */
export const searchAvailablePhoneNumbers: API.PaginatedOperationMethod<
  SearchAvailablePhoneNumbersRequest,
  SearchAvailablePhoneNumbersResponse,
  SearchAvailablePhoneNumbersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(194) as any as S.Schema<SearchAvailablePhoneNumbersRequest>,
  output: __S(195) as any as S.Schema<SearchAvailablePhoneNumbersResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchAvailablePhoneNumbers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type StartSpeakerSearchTaskError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | GoneException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Starts a speaker search task.
 *
 * Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 */
export const startSpeakerSearchTask: API.OperationMethod<
  StartSpeakerSearchTaskRequest,
  StartSpeakerSearchTaskResponse,
  StartSpeakerSearchTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196) as any as S.Schema<StartSpeakerSearchTaskRequest>,
  output: __S(102) as any as S.Schema<StartSpeakerSearchTaskResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    GoneException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSpeakerSearchTask",
}));

export type StartVoiceToneAnalysisTaskError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | GoneException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Starts a voice tone analysis task. For more information about voice tone analysis, see
 * Using Amazon Chime SDK voice analytics
 * in the *Amazon Chime SDK Developer Guide*.
 *
 * Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 */
export const startVoiceToneAnalysisTask: API.OperationMethod<
  StartVoiceToneAnalysisTaskRequest,
  StartVoiceToneAnalysisTaskResponse,
  StartVoiceToneAnalysisTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(197) as any as S.Schema<StartVoiceToneAnalysisTaskRequest>,
  output: __S(141) as any as S.Schema<StartVoiceToneAnalysisTaskResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    GoneException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartVoiceToneAnalysisTask",
}));

export type StopSpeakerSearchTaskError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Stops a speaker search task.
 */
export const stopSpeakerSearchTask: API.OperationMethod<
  StopSpeakerSearchTaskRequest,
  StopSpeakerSearchTaskResponse,
  StopSpeakerSearchTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198) as any as S.Schema<StopSpeakerSearchTaskRequest>,
  output: __S(55) as any as S.Schema<StopSpeakerSearchTaskResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopSpeakerSearchTask",
}));

export type StopVoiceToneAnalysisTaskError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Stops a voice tone analysis task.
 */
export const stopVoiceToneAnalysisTask: API.OperationMethod<
  StopVoiceToneAnalysisTaskRequest,
  StopVoiceToneAnalysisTaskResponse,
  StopVoiceToneAnalysisTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199) as any as S.Schema<StopVoiceToneAnalysisTaskRequest>,
  output: __S(58) as any as S.Schema<StopVoiceToneAnalysisTaskResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopVoiceToneAnalysisTask",
}));

export type TagResourceError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Adds a tag to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200) as any as S.Schema<TagResourceRequest>,
  output: __S(55) as any as S.Schema<TagResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(201) as any as S.Schema<UntagResourceRequest>,
  output: __S(55) as any as S.Schema<UntagResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateGlobalSettingsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates global settings for the Amazon Chime SDK Voice Connectors in an AWS account.
 */
export const updateGlobalSettings: API.OperationMethod<
  UpdateGlobalSettingsRequest,
  UpdateGlobalSettingsResponse,
  UpdateGlobalSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202) as any as S.Schema<UpdateGlobalSettingsRequest>,
  output: __S(55) as any as S.Schema<UpdateGlobalSettingsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGlobalSettings",
}));

export type UpdatePhoneNumberError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates phone number details, such as product type, calling name, or phone number name for the
 * specified phone number ID. You can update one phone number detail at a time. For
 * example, you can update either the product type, calling name, or phone number name in one action.
 *
 * For numbers outside the U.S., you must use the Amazon Chime SDK SIP Media
 * Application Dial-In product type.
 *
 * Updates to outbound calling names can take 72 hours to complete. Pending
 * updates to outbound calling names must be complete before you can request another
 * update.
 */
export const updatePhoneNumber: API.OperationMethod<
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberResponse,
  UpdatePhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203) as any as S.Schema<UpdatePhoneNumberRequest>,
  output: __S(193) as any as S.Schema<UpdatePhoneNumberResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePhoneNumber",
}));

export type UpdatePhoneNumberSettingsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the phone number settings for the administrator's AWS account, such
 * as the default outbound calling name. You can update the default outbound calling
 * name once every seven days. Outbound calling names can take up to 72 hours to
 * update.
 */
export const updatePhoneNumberSettings: API.OperationMethod<
  UpdatePhoneNumberSettingsRequest,
  UpdatePhoneNumberSettingsResponse,
  UpdatePhoneNumberSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204) as any as S.Schema<UpdatePhoneNumberSettingsRequest>,
  output: __S(58) as any as S.Schema<UpdatePhoneNumberSettingsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePhoneNumberSettings",
}));

export type UpdateProxySessionError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the specified proxy session details, such as voice or SMS capabilities.
 *
 * End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 */
export const updateProxySession: API.OperationMethod<
  UpdateProxySessionRequest,
  UpdateProxySessionResponse,
  UpdateProxySessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205) as any as S.Schema<UpdateProxySessionRequest>,
  output: __S(22) as any as S.Schema<UpdateProxySessionResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProxySession",
}));

export type UpdateSipMediaApplicationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the details of the specified SIP media application.
 */
export const updateSipMediaApplication: API.OperationMethod<
  UpdateSipMediaApplicationRequest,
  UpdateSipMediaApplicationResponse,
  UpdateSipMediaApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206) as any as S.Schema<UpdateSipMediaApplicationRequest>,
  output: __S(29) as any as S.Schema<UpdateSipMediaApplicationResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSipMediaApplication",
}));

export type UpdateSipMediaApplicationCallError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Invokes the AWS Lambda function associated with the SIP media application and
 * transaction ID in an update request. The Lambda function can then return a new set
 * of actions.
 */
export const updateSipMediaApplicationCall: API.OperationMethod<
  UpdateSipMediaApplicationCallRequest,
  UpdateSipMediaApplicationCallResponse,
  UpdateSipMediaApplicationCallError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207) as any as S.Schema<UpdateSipMediaApplicationCallRequest>,
  output: __S(33) as any as S.Schema<UpdateSipMediaApplicationCallResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSipMediaApplicationCall",
}));

export type UpdateSipRuleError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the details of the specified SIP rule.
 */
export const updateSipRule: API.OperationMethod<
  UpdateSipRuleRequest,
  UpdateSipRuleResponse,
  UpdateSipRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208) as any as S.Schema<UpdateSipRuleRequest>,
  output: __S(38) as any as S.Schema<UpdateSipRuleResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSipRule",
}));

export type UpdateVoiceConnectorError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the details for the specified Amazon Chime SDK Voice Connector.
 */
export const updateVoiceConnector: API.OperationMethod<
  UpdateVoiceConnectorRequest,
  UpdateVoiceConnectorResponse,
  UpdateVoiceConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209) as any as S.Schema<UpdateVoiceConnectorRequest>,
  output: __S(41) as any as S.Schema<UpdateVoiceConnectorResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVoiceConnector",
}));

export type UpdateVoiceConnectorGroupError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the settings for the specified Amazon Chime SDK Voice Connector group.
 */
export const updateVoiceConnectorGroup: API.OperationMethod<
  UpdateVoiceConnectorGroupRequest,
  UpdateVoiceConnectorGroupResponse,
  UpdateVoiceConnectorGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210) as any as S.Schema<UpdateVoiceConnectorGroupRequest>,
  output: __S(46) as any as S.Schema<UpdateVoiceConnectorGroupResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVoiceConnectorGroup",
}));

export type UpdateVoiceProfileError =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | GoneException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the specified voice profile's voice print and refreshes its expiration timestamp.
 *
 * As a condition of using this feature, you acknowledge that the collection, use, storage, and retention of
 * your caller's biometric identifiers and biometric information ("biometric data") in the form of a digital voiceprint
 * requires the caller's informed consent via a written release. Such consent is required under various state laws,
 * including biometrics laws in Illinois, Texas, Washington and other state privacy laws.
 *
 * You must provide a written release to each caller through a process that clearly reflects each caller's informed
 * consent before using Amazon Chime SDK Voice Insights service, as required under the terms of your agreement
 * with AWS governing your use of the service.
 */
export const updateVoiceProfile: API.OperationMethod<
  UpdateVoiceProfileRequest,
  UpdateVoiceProfileResponse,
  UpdateVoiceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211) as any as S.Schema<UpdateVoiceProfileRequest>,
  output: __S(49) as any as S.Schema<UpdateVoiceProfileResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    GoneException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVoiceProfile",
}));

export type UpdateVoiceProfileDomainError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the settings for the specified voice profile domain.
 */
export const updateVoiceProfileDomain: API.OperationMethod<
  UpdateVoiceProfileDomainRequest,
  UpdateVoiceProfileDomainResponse,
  UpdateVoiceProfileDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(212) as any as S.Schema<UpdateVoiceProfileDomainRequest>,
  output: __S(53) as any as S.Schema<UpdateVoiceProfileDomainResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVoiceProfileDomain",
}));

export type ValidateE911AddressError =
  | AccessDeniedException
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Validates an address to be used for 911 calls made with Amazon Chime SDK Voice
 * Connectors. You can use validated addresses in a Presence Information Data Format
 * Location Object file that you include in SIP requests. That helps ensure that addresses
 * are routed to the appropriate Public Safety Answering Point.
 */
export const validateE911Address: API.OperationMethod<
  ValidateE911AddressRequest,
  ValidateE911AddressResponse,
  ValidateE911AddressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(213) as any as S.Schema<ValidateE911AddressRequest>,
  output: __S(217) as any as S.Schema<ValidateE911AddressResponse>,
  errors: [
    AccessDeniedException,
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateE911Address",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SensitiveString);
    case 1:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          E164PhoneNumbers: __S(0),
          ForceAssociate: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}?operation=associate-phone-numbers",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociatePhoneNumbersWithVoiceConnectorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberId: S.optional(SensitiveString),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "PhoneNumberError" });
    case 3:
      return S.Array(__S(2));
    case 4:
      return S.suspend(() => S.Struct({ PhoneNumberErrors: S.optional(__S(3)) })).annotate({
        identifier: "AssociatePhoneNumbersWithVoiceConnectorResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorGroupId: S.String.pipe(T.HttpLabel("VoiceConnectorGroupId")),
          E164PhoneNumbers: __S(0),
          ForceAssociate: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connector-groups/{VoiceConnectorGroupId}?operation=associate-phone-numbers",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociatePhoneNumbersWithVoiceConnectorGroupRequest",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ PhoneNumberIds: __S(6) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/phone-numbers?operation=batch-delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeletePhoneNumberRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberId: SensitiveString,
          ProductType: S.optional(S.String),
          CallingName: S.optional(SensitiveString),
          Name: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "UpdatePhoneNumberRequestItem",
      });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({ UpdatePhoneNumberRequestItems: __S(9) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/phone-numbers?operation=batch-update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdatePhoneNumberRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProductType: S.String,
          E164PhoneNumbers: __S(0),
          Name: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/phone-number-orders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePhoneNumberOrderRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          E164PhoneNumber: S.optional(SensitiveString),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "OrderedPhoneNumber" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberOrderId: S.optional(S.String),
          ProductType: S.optional(S.String),
          Status: S.optional(S.String),
          OrderType: S.optional(S.String),
          OrderedPhoneNumbers: S.optional(__S(13)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          FocDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "PhoneNumberOrder" });
    case 7:
      return S.suspend(() => S.Struct({ PhoneNumberOrder: S.optional(__S(14)) })).annotate({
        identifier: "CreatePhoneNumberOrderResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ Country: S.String, AreaCode: S.String })).annotate({
        identifier: "GeoMatchParams",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          ParticipantPhoneNumbers: __S(0),
          Name: S.optional(SensitiveString),
          ExpiryMinutes: S.optional(S.Number),
          Capabilities: __S(16),
          NumberSelectionBehavior: S.optional(S.String),
          GeoMatchLevel: S.optional(S.String),
          GeoMatchParams: S.optional(__S(17)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateProxySessionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PhoneNumber: S.optional(SensitiveString),
          ProxyPhoneNumber: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Participant" });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.optional(S.String),
          ProxySessionId: S.optional(S.String),
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          ExpiryMinutes: S.optional(S.Number),
          Capabilities: S.optional(__S(16)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Participants: S.optional(__S(20)),
          NumberSelectionBehavior: S.optional(S.String),
          GeoMatchLevel: S.optional(S.String),
          GeoMatchParams: S.optional(__S(17)),
        }),
      ).annotate({ identifier: "ProxySession" });
    case 6:
      return S.suspend(() => S.Struct({ ProxySession: S.optional(__S(21)) })).annotate({
        identifier: "CreateProxySessionResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ LambdaArn: S.optional(SensitiveString) })).annotate({
        identifier: "SipMediaApplicationEndpoint",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23));
    case 1:
      return S.suspend(() => S.Struct({ Key: SensitiveString, Value: SensitiveString })).annotate({
        identifier: "Tag",
      });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AwsRegion: S.String,
          Name: S.String,
          Endpoints: __S(24),
          Tags: S.optional(__S(26)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sip-media-applications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSipMediaApplicationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.optional(S.String),
          AwsRegion: S.optional(S.String),
          Name: S.optional(S.String),
          Endpoints: S.optional(__S(24)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SipMediaApplicationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SipMediaApplication" });
    case 5:
      return S.suspend(() => S.Struct({ SipMediaApplication: S.optional(__S(28)) })).annotate({
        identifier: "CreateSipMediaApplicationResponse",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          FromPhoneNumber: SensitiveString,
          ToPhoneNumber: SensitiveString,
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
          SipHeaders: S.optional(__S(30)),
          ArgumentsMap: S.optional(__S(30)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/sip-media-applications/{SipMediaApplicationId}/calls",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSipMediaApplicationCallRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ TransactionId: S.optional(S.String) })).annotate({
        identifier: "SipMediaApplicationCall",
      });
    case 1:
      return S.suspend(() => S.Struct({ SipMediaApplicationCall: S.optional(__S(32)) })).annotate({
        identifier: "CreateSipMediaApplicationCallResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.optional(S.String),
          Priority: S.optional(S.Number),
          AwsRegion: S.optional(S.String),
        }),
      ).annotate({ identifier: "SipRuleTargetApplication" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          TriggerType: S.String,
          TriggerValue: S.String,
          Disabled: S.optional(S.Boolean),
          TargetApplications: __S(35),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/sip-rules" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSipRuleRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SipRuleId: S.optional(S.String),
          Name: S.optional(S.String),
          Disabled: S.optional(S.Boolean),
          TriggerType: S.optional(S.String),
          TriggerValue: S.optional(S.String),
          TargetApplications: S.optional(__S(35)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SipRule" });
    case 6:
      return S.suspend(() => S.Struct({ SipRule: S.optional(__S(37)) })).annotate({
        identifier: "CreateSipRuleResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          AwsRegion: S.optional(S.String),
          RequireEncryption: S.Boolean,
          Tags: S.optional(__S(26)),
          IntegrationType: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/voice-connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateVoiceConnectorRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.optional(S.String),
          AwsRegion: S.optional(S.String),
          Name: S.optional(S.String),
          OutboundHostName: S.optional(S.String),
          RequireEncryption: S.optional(S.Boolean),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          VoiceConnectorArn: S.optional(S.String),
          IntegrationType: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }),
      ).annotate({ identifier: "VoiceConnector" });
    case 1:
      return S.suspend(() => S.Struct({ VoiceConnector: S.optional(__S(40)) })).annotate({
        identifier: "CreateVoiceConnectorResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String, Priority: S.optional(S.Number) }),
      ).annotate({ identifier: "VoiceConnectorItem" });
    case 3:
      return S.Array(__S(42));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          VoiceConnectorItems: S.optional(__S(43)),
          CallDistributionType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/voice-connector-groups" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateVoiceConnectorGroupRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorGroupId: S.optional(S.String),
          Name: S.optional(S.String),
          VoiceConnectorItems: S.optional(__S(43)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          VoiceConnectorGroupArn: S.optional(S.String),
          CallDistributionType: S.optional(S.String),
        }),
      ).annotate({ identifier: "VoiceConnectorGroup" });
    case 6:
      return S.suspend(() => S.Struct({ VoiceConnectorGroup: S.optional(__S(45)) })).annotate({
        identifier: "CreateVoiceConnectorGroupResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SpeakerSearchTaskId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/voice-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateVoiceProfileRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceProfileId: S.optional(S.String),
          VoiceProfileArn: S.optional(SensitiveString),
          VoiceProfileDomainId: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpirationTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "VoiceProfile" });
    case 1:
      return S.suspend(() => S.Struct({ VoiceProfile: S.optional(__S(48)) })).annotate({
        identifier: "CreateVoiceProfileResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ KmsKeyArn: SensitiveString })).annotate({
        identifier: "ServerSideEncryptionConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          ServerSideEncryptionConfiguration: __S(50),
          ClientRequestToken: S.optional(S.String),
          Tags: S.optional(__S(26)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/voice-profile-domains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateVoiceProfileDomainRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VoiceProfileDomainId: S.optional(S.String),
          VoiceProfileDomainArn: S.optional(SensitiveString),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ServerSideEncryptionConfiguration: S.optional(__S(50)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "VoiceProfileDomain" });
    case 5:
      return S.suspend(() => S.Struct({ VoiceProfileDomain: S.optional(__S(52)) })).annotate({
        identifier: "CreateVoiceProfileDomainResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ PhoneNumberId: SensitiveString.pipe(T.HttpLabel("PhoneNumberId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/phone-numbers/{PhoneNumberId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePhoneNumberRequest" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeletePhoneNumberResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          ProxySessionId: S.String.pipe(T.HttpLabel("ProxySessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProxySessionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/sip-media-applications/{SipMediaApplicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSipMediaApplicationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteSipMediaApplicationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SipRuleId: S.String.pipe(T.HttpLabel("SipRuleId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/sip-rules/{SipRuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSipRuleRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/voice-connectors/{VoiceConnectorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorEmergencyCallingConfigurationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteVoiceConnectorEmergencyCallingConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/voice-connectors/{VoiceConnectorId}/external-systems-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorExternalSystemsConfigurationRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorGroupId: S.String.pipe(T.HttpLabel("VoiceConnectorGroupId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/voice-connector-groups/{VoiceConnectorGroupId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/voice-connectors/{VoiceConnectorId}/origination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorOriginationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorProxyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/voice-connectors/{VoiceConnectorId}/streaming-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorStreamingConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/voice-connectors/{VoiceConnectorId}/termination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorTerminationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          Usernames: __S(0),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}/termination/credentials?operation=delete",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceConnectorTerminationCredentialsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ VoiceProfileId: S.String.pipe(T.HttpLabel("VoiceProfileId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/voice-profiles/{VoiceProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ VoiceProfileDomainId: S.String.pipe(T.HttpLabel("VoiceProfileDomainId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/voice-profile-domains/{VoiceProfileDomainId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVoiceProfileDomainRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          E164PhoneNumbers: __S(0),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}?operation=disassociate-phone-numbers",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociatePhoneNumbersFromVoiceConnectorRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorGroupId: S.String.pipe(T.HttpLabel("VoiceConnectorGroupId")),
          E164PhoneNumbers: __S(0),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connector-groups/{VoiceConnectorGroupId}?operation=disassociate-phone-numbers",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociatePhoneNumbersFromVoiceConnectorGroupRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/settings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGlobalSettingsRequest" });
    case 3:
      return S.suspend(() => S.Struct({ CdrBucket: S.optional(S.String) })).annotate({
        identifier: "VoiceConnectorSettings",
      });
    case 4:
      return S.suspend(() => S.Struct({ VoiceConnector: S.optional(__S(75)) })).annotate({
        identifier: "GetGlobalSettingsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ PhoneNumberId: SensitiveString.pipe(T.HttpLabel("PhoneNumberId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/phone-numbers/{PhoneNumberId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPhoneNumberRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InboundCall: S.optional(S.Boolean),
          OutboundCall: S.optional(S.Boolean),
          InboundSMS: S.optional(S.Boolean),
          OutboundSMS: S.optional(S.Boolean),
          InboundMMS: S.optional(S.Boolean),
          OutboundMMS: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PhoneNumberCapabilities" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(S.String),
          Name: S.optional(S.String),
          AssociatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PhoneNumberAssociation" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberId: S.optional(SensitiveString),
          E164PhoneNumber: S.optional(SensitiveString),
          PhoneNumberArn: S.optional(S.String),
          Country: S.optional(S.String),
          Type: S.optional(S.String),
          ProductType: S.optional(S.String),
          Status: S.optional(S.String),
          Capabilities: S.optional(__S(78)),
          Associations: S.optional(__S(80)),
          CallingName: S.optional(SensitiveString),
          CallingNameStatus: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DeletionTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          OrderId: S.optional(S.String),
          Name: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "PhoneNumber" });
    case 2:
      return S.suspend(() => S.Struct({ PhoneNumber: S.optional(__S(81)) })).annotate({
        identifier: "GetPhoneNumberResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ PhoneNumberOrderId: S.String.pipe(T.HttpLabel("PhoneNumberOrderId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/phone-number-orders/{PhoneNumberOrderId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPhoneNumberOrderRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/settings/phone-number" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPhoneNumberSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CallingName: S.optional(SensitiveString),
          CallingNameUpdatedTimestamp: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
        }),
      ).annotate({
        identifier: "GetPhoneNumberSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          ProxySessionId: S.String.pipe(T.HttpLabel("ProxySessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProxySessionRequest" });
    case 7:
      return S.suspend(() => S.Struct({ ProxySession: S.optional(__S(21)) })).annotate({
        identifier: "GetProxySessionResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sip-media-applications/{SipMediaApplicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSipMediaApplicationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSipMediaApplicationAlexaSkillConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AlexaSkillStatus: S.String, AlexaSkillIds: __S(0) }),
      ).annotate({
        identifier: "SipMediaApplicationAlexaSkillConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationAlexaSkillConfiguration: S.optional(__S(90)),
        }),
      ).annotate({
        identifier: "GetSipMediaApplicationAlexaSkillConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/sip-media-applications/{SipMediaApplicationId}/logging-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSipMediaApplicationLoggingConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EnableSipMediaApplicationMessageLogs: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "SipMediaApplicationLoggingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationLoggingConfiguration: S.optional(__S(93)),
        }),
      ).annotate({
        identifier: "GetSipMediaApplicationLoggingConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SipRuleId: S.String.pipe(T.HttpLabel("SipRuleId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sip-rules/{SipRuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSipRuleRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          SpeakerSearchTaskId: S.String.pipe(T.HttpLabel("SpeakerSearchTaskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSpeakerSearchTaskRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.optional(S.String),
          TransactionId: S.optional(S.String),
          IsCaller: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CallDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ConfidenceScore: S.optional(S.Number), VoiceProfileId: S.optional(S.String) }),
      ).annotate({ identifier: "SpeakerSearchResult" });
    case 3:
      return S.Array(__S(98));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Results: S.optional(__S(99)),
          VoiceprintGenerationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "SpeakerSearchDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SpeakerSearchTaskId: S.optional(S.String),
          SpeakerSearchTaskStatus: S.optional(S.String),
          CallDetails: S.optional(__S(97)),
          SpeakerSearchDetails: S.optional(__S(100)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StartedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "SpeakerSearchTask" });
    case 6:
      return S.suspend(() => S.Struct({ SpeakerSearchTask: S.optional(__S(101)) })).annotate({
        identifier: "GetSpeakerSearchTaskResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-connectors/{VoiceConnectorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetVoiceConnectorRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorEmergencyCallingConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EmergencyPhoneNumber: SensitiveString,
          TestPhoneNumber: S.optional(SensitiveString),
          CallingCountry: S.String,
        }),
      ).annotate({
        identifier: "DNISEmergencyCallingConfiguration",
      });
    case 2:
      return S.Array(__S(105));
    case 3:
      return S.suspend(() => S.Struct({ DNIS: S.optional(__S(106)) })).annotate({
        identifier: "EmergencyCallingConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ EmergencyCallingConfiguration: S.optional(__S(107)) }),
      ).annotate({
        identifier: "GetVoiceConnectorEmergencyCallingConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/external-systems-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorExternalSystemsConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SessionBorderControllerTypes: S.optional(__S(16)),
          ContactCenterSystemTypes: S.optional(__S(16)),
        }),
      ).annotate({
        identifier: "ExternalSystemsConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ExternalSystemsConfiguration: S.optional(__S(110)) }),
      ).annotate({
        identifier: "GetVoiceConnectorExternalSystemsConfigurationResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorGroupId: S.String.pipe(T.HttpLabel("VoiceConnectorGroupId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-connector-groups/{VoiceConnectorGroupId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/logging-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorLoggingConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EnableSIPLogs: S.optional(S.Boolean),
          EnableMediaMetricLogs: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LoggingConfiguration" });
    case 3:
      return S.suspend(() => S.Struct({ LoggingConfiguration: S.optional(__S(114)) })).annotate({
        identifier: "GetVoiceConnectorLoggingConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-connectors/{VoiceConnectorId}/origination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorOriginationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Host: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
          Priority: S.optional(S.Number),
          Weight: S.optional(S.Number),
        }),
      ).annotate({ identifier: "OriginationRoute" });
    case 6:
      return S.Array(__S(117));
    case 7:
      return S.suspend(() =>
        S.Struct({ Routes: S.optional(__S(118)), Disabled: S.optional(S.Boolean) }),
      ).annotate({ identifier: "Origination" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Origination: S.optional(__S(119)) })).annotate({
        identifier: "GetVoiceConnectorOriginationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorProxyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DefaultSessionExpiryMinutes: S.optional(S.Number),
          Disabled: S.optional(S.Boolean),
          FallBackPhoneNumber: S.optional(SensitiveString),
          PhoneNumberCountries: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "Proxy" });
    case 3:
      return S.suspend(() => S.Struct({ Proxy: S.optional(__S(122)) })).annotate({
        identifier: "GetVoiceConnectorProxyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/streaming-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorStreamingConfigurationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ NotificationTarget: S.optional(S.String) })).annotate({
        identifier: "StreamingNotificationTarget",
      });
    case 6:
      return S.Array(__S(125));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Disabled: S.optional(S.Boolean),
          ConfigurationArn: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "MediaInsightsConfiguration",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DataRetentionInHours: S.Number,
          Disabled: S.Boolean,
          StreamingNotificationTargets: S.optional(__S(126)),
          MediaInsightsConfiguration: S.optional(__S(127)),
        }),
      ).annotate({ identifier: "StreamingConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ StreamingConfiguration: S.optional(__S(128)) })).annotate({
        identifier: "GetVoiceConnectorStreamingConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-connectors/{VoiceConnectorId}/termination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorTerminationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CpsLimit: S.optional(S.Number),
          DefaultPhoneNumber: S.optional(SensitiveString),
          CallingRegions: S.optional(__S(6)),
          CidrAllowedList: S.optional(__S(6)),
          Disabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Termination" });
    case 4:
      return S.suspend(() => S.Struct({ Termination: S.optional(__S(131)) })).annotate({
        identifier: "GetVoiceConnectorTerminationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/termination/health",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceConnectorTerminationHealthRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Source: S.optional(S.String),
        }),
      ).annotate({ identifier: "TerminationHealth" });
    case 7:
      return S.suspend(() => S.Struct({ TerminationHealth: S.optional(__S(134)) })).annotate({
        identifier: "GetVoiceConnectorTerminationHealthResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ VoiceProfileId: S.String.pipe(T.HttpLabel("VoiceProfileId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-profiles/{VoiceProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetVoiceProfileRequest" });
    case 1:
      return S.suspend(() => S.Struct({ VoiceProfile: S.optional(__S(48)) })).annotate({
        identifier: "GetVoiceProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ VoiceProfileDomainId: S.String.pipe(T.HttpLabel("VoiceProfileDomainId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-profile-domains/{VoiceProfileDomainId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceProfileDomainRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          VoiceToneAnalysisTaskId: S.String.pipe(T.HttpLabel("VoiceToneAnalysisTaskId")),
          IsCaller: S.Boolean.pipe(T.HttpQuery("isCaller")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceToneAnalysisTaskRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VoiceToneAnalysisTaskId: S.optional(S.String),
          VoiceToneAnalysisTaskStatus: S.optional(S.String),
          CallDetails: S.optional(__S(97)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StartedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "VoiceToneAnalysisTask" });
    case 5:
      return S.suspend(() => S.Struct({ VoiceToneAnalysisTask: S.optional(__S(140)) })).annotate({
        identifier: "GetVoiceToneAnalysisTaskResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-connector-regions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAvailableVoiceConnectorRegionsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ VoiceConnectorRegions: S.optional(__S(16)) })).annotate({
        identifier: "ListAvailableVoiceConnectorRegionsResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/phone-number-orders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPhoneNumberOrdersRequest",
      });
    case 1:
      return S.Array(__S(14));
    case 2:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberOrders: S.optional(__S(145)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPhoneNumberOrdersResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String).pipe(T.HttpQuery("status")),
          ProductType: S.optional(S.String).pipe(T.HttpQuery("product-type")),
          FilterName: S.optional(S.String).pipe(T.HttpQuery("filter-name")),
          FilterValue: S.optional(S.String).pipe(T.HttpQuery("filter-value")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/phone-numbers" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPhoneNumbersRequest" });
    case 4:
      return S.Array(__S(81));
    case 5:
      return S.suspend(() =>
        S.Struct({ PhoneNumbers: S.optional(__S(148)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPhoneNumbersResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          Status: S.optional(S.String).pipe(T.HttpQuery("status")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListProxySessionsRequest" });
    case 7:
      return S.Array(__S(21));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProxySessions: S.optional(__S(151)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListProxySessionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sip-media-applications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSipMediaApplicationsRequest",
      });
    case 2:
      return S.Array(__S(28));
    case 3:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplications: S.optional(__S(154)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSipMediaApplicationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.optional(S.String).pipe(T.HttpQuery("sip-media-application")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/sip-rules" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSipRulesRequest" });
    case 5:
      return S.Array(__S(37));
    case 6:
      return S.suspend(() =>
        S.Struct({ SipRules: S.optional(__S(157)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSipRulesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ProductType: S.String.pipe(T.HttpQuery("product-type")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/phone-number-countries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSupportedPhoneNumberCountriesRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CountryCode: S.optional(S.String),
          SupportedPhoneNumberTypes: S.optional(__S(16)),
        }),
      ).annotate({ identifier: "PhoneNumberCountry" });
    case 1:
      return S.Array(__S(160));
    case 2:
      return S.suspend(() => S.Struct({ PhoneNumberCountries: S.optional(__S(161)) })).annotate({
        identifier: "ListSupportedPhoneNumberCountriesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: SensitiveString.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(26)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-connector-groups" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListVoiceConnectorGroupsRequest",
      });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorGroups: S.optional(__S(166)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListVoiceConnectorGroupsResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/voice-connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListVoiceConnectorsRequest",
      });
    case 1:
      return S.Array(__S(40));
    case 2:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectors: S.optional(__S(169)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListVoiceConnectorsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/voice-connectors/{VoiceConnectorId}/termination/credentials",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListVoiceConnectorTerminationCredentialsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Usernames: S.optional(__S(0)) })).annotate({
        identifier: "ListVoiceConnectorTerminationCredentialsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/voice-profile-domains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListVoiceProfileDomainsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          VoiceProfileDomainId: S.optional(S.String),
          VoiceProfileDomainArn: S.optional(SensitiveString),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "VoiceProfileDomainSummary",
      });
    case 7:
      return S.Array(__S(174));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceProfileDomains: S.optional(__S(175)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListVoiceProfileDomainsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VoiceProfileDomainId: S.String.pipe(T.HttpQuery("voice-profile-domain-id")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/voice-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListVoiceProfilesRequest" });
    case 2:
      return S.Array(__S(48));
    case 3:
      return S.suspend(() =>
        S.Struct({
          VoiceProfiles: S.optional(__S(178)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListVoiceProfilesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
          SipMediaApplicationAlexaSkillConfiguration: S.optional(__S(90)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutSipMediaApplicationAlexaSkillConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
          SipMediaApplicationLoggingConfiguration: S.optional(__S(93)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/sip-media-applications/{SipMediaApplicationId}/logging-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutSipMediaApplicationLoggingConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          EmergencyCallingConfiguration: __S(107),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVoiceConnectorEmergencyCallingConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          SessionBorderControllerTypes: S.optional(__S(16)),
          ContactCenterSystemTypes: S.optional(__S(16)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/voice-connectors/{VoiceConnectorId}/external-systems-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVoiceConnectorExternalSystemsConfigurationRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          LoggingConfiguration: __S(114),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/voice-connectors/{VoiceConnectorId}/logging-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVoiceConnectorLoggingConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          Origination: __S(119),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/voice-connectors/{VoiceConnectorId}/origination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVoiceConnectorOriginationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          DefaultSessionExpiryMinutes: S.Number,
          PhoneNumberPoolCountries: __S(6),
          FallBackPhoneNumber: S.optional(SensitiveString),
          Disabled: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVoiceConnectorProxyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          StreamingConfiguration: __S(128),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/voice-connectors/{VoiceConnectorId}/streaming-configuration",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVoiceConnectorStreamingConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          Termination: __S(131),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/voice-connectors/{VoiceConnectorId}/termination" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVoiceConnectorTerminationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Username: S.optional(SensitiveString), Password: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Credential" });
    case 6:
      return S.Array(__S(189));
    case 7:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          Credentials: S.optional(__S(190)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}/termination/credentials?operation=put",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVoiceConnectorTerminationCredentialsRequest",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PhoneNumberId: SensitiveString.pipe(T.HttpLabel("PhoneNumberId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/phone-numbers/{PhoneNumberId}?operation=restore" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RestorePhoneNumberRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ PhoneNumber: S.optional(__S(81)) })).annotate({
        identifier: "RestorePhoneNumberResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AreaCode: S.optional(S.String).pipe(T.HttpQuery("area-code")),
          City: S.optional(S.String).pipe(T.HttpQuery("city")),
          Country: S.optional(S.String).pipe(T.HttpQuery("country")),
          State: S.optional(S.String).pipe(T.HttpQuery("state")),
          TollFreePrefix: S.optional(S.String).pipe(T.HttpQuery("toll-free-prefix")),
          PhoneNumberType: S.optional(S.String).pipe(T.HttpQuery("phone-number-type")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/search?type=phone-numbers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchAvailablePhoneNumbersRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          E164PhoneNumbers: S.optional(__S(0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SearchAvailablePhoneNumbersResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          TransactionId: S.String,
          VoiceProfileDomainId: S.String,
          ClientRequestToken: S.optional(S.String),
          CallLeg: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartSpeakerSearchTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          TransactionId: S.String,
          LanguageCode: S.String,
          ClientRequestToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartVoiceToneAnalysisTaskRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          SpeakerSearchTaskId: S.String.pipe(T.HttpLabel("SpeakerSearchTaskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopSpeakerSearchTaskRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          VoiceToneAnalysisTaskId: S.String.pipe(T.HttpLabel("VoiceToneAnalysisTaskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopVoiceToneAnalysisTaskRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceARN: SensitiveString, Tags: __S(26) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags?operation=tag-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: SensitiveString, TagKeys: __S(0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags?operation=untag-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ VoiceConnector: __S(75) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/settings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateGlobalSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberId: SensitiveString.pipe(T.HttpLabel("PhoneNumberId")),
          ProductType: S.optional(S.String),
          CallingName: S.optional(SensitiveString),
          Name: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/phone-numbers/{PhoneNumberId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePhoneNumberRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ CallingName: SensitiveString }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/settings/phone-number" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePhoneNumberSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          ProxySessionId: S.String.pipe(T.HttpLabel("ProxySessionId")),
          Capabilities: __S(16),
          ExpiryMinutes: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateProxySessionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
          Name: S.optional(S.String),
          Endpoints: S.optional(__S(24)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/sip-media-applications/{SipMediaApplicationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSipMediaApplicationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SipMediaApplicationId: S.String.pipe(T.HttpLabel("SipMediaApplicationId")),
          TransactionId: S.String.pipe(T.HttpLabel("TransactionId")),
          Arguments: __S(30),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/sip-media-applications/{SipMediaApplicationId}/calls/{TransactionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSipMediaApplicationCallRequest",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SipRuleId: S.String.pipe(T.HttpLabel("SipRuleId")),
          Name: S.String,
          Disabled: S.optional(S.Boolean),
          TargetApplications: S.optional(__S(35)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/sip-rules/{SipRuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSipRuleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorId: S.String.pipe(T.HttpLabel("VoiceConnectorId")),
          Name: S.String,
          RequireEncryption: S.Boolean,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/voice-connectors/{VoiceConnectorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVoiceConnectorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VoiceConnectorGroupId: S.String.pipe(T.HttpLabel("VoiceConnectorGroupId")),
          Name: S.String,
          VoiceConnectorItems: __S(43),
          CallDistributionType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/voice-connector-groups/{VoiceConnectorGroupId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVoiceConnectorGroupRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VoiceProfileId: S.String.pipe(T.HttpLabel("VoiceProfileId")),
          SpeakerSearchTaskId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/voice-profiles/{VoiceProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVoiceProfileRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VoiceProfileDomainId: S.String.pipe(T.HttpLabel("VoiceProfileDomainId")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/voice-profile-domains/{VoiceProfileDomainId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVoiceProfileDomainRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AwsAccountId: S.String,
          StreetNumber: SensitiveString,
          StreetInfo: SensitiveString,
          City: SensitiveString,
          State: SensitiveString,
          Country: SensitiveString,
          PostalCode: SensitiveString,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/emergency-calling/address" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ValidateE911AddressRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          streetName: S.optional(SensitiveString),
          streetSuffix: S.optional(SensitiveString),
          postDirectional: S.optional(SensitiveString),
          preDirectional: S.optional(SensitiveString),
          streetNumber: S.optional(SensitiveString),
          city: S.optional(SensitiveString),
          state: S.optional(SensitiveString),
          postalCode: S.optional(SensitiveString),
          postalCodePlus4: S.optional(SensitiveString),
          country: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Address" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          streetInfo: S.optional(SensitiveString),
          streetNumber: S.optional(SensitiveString),
          city: S.optional(SensitiveString),
          state: S.optional(SensitiveString),
          postalCode: S.optional(SensitiveString),
          postalCodePlus4: S.optional(SensitiveString),
          country: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "CandidateAddress" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(215).pipe(/*@__PURE__*/ T.XmlName("CandidateAddress")).annotate({
          identifier: "CandidateAddress",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          ValidationResult: S.optional(S.Number),
          AddressExternalId: S.optional(S.String),
          Address: S.optional(__S(214)),
          CandidateAddressList: S.optional(__S(216)),
        }),
      ).annotate({
        identifier: "ValidateE911AddressResponse",
      });
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
  }
}
