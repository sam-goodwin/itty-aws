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
  sdkId: "IoT Wireless",
  serviceShapeName: "iotwireless",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iotwireless" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-11-22");
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
              `https://api.iotwireless-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://api.iotwireless-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://api.iotwireless.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://api.iotwireless.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
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
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type AmazonId = string;
export type AppServerPrivateKey = string | redacted.Redacted<string>;
export interface SidewalkAccountInfo {
  AmazonId?: string;
  AppServerPrivateKey?: string | redacted.Redacted<string>;
}
const SidewalkAccountInfo = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<SidewalkAccountInfo>;
export type ClientRequestToken = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 2);
export interface AssociateAwsAccountWithPartnerAccountRequest {
  Sidewalk: SidewalkAccountInfo;
  ClientRequestToken?: string;
  Tags?: Tag[];
}
const AssociateAwsAccountWithPartnerAccountRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociateAwsAccountWithPartnerAccountRequest>;
export type PartnerAccountArn = string;
export interface AssociateAwsAccountWithPartnerAccountResponse {
  Sidewalk?: SidewalkAccountInfo;
  Arn?: string;
}
const AssociateAwsAccountWithPartnerAccountResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AssociateAwsAccountWithPartnerAccountResponse>;
export type FuotaTaskId = string;
export type MulticastGroupId = string;
export interface AssociateMulticastGroupWithFuotaTaskRequest {
  Id: string;
  MulticastGroupId: string;
}
const AssociateMulticastGroupWithFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AssociateMulticastGroupWithFuotaTaskRequest>;
export interface AssociateMulticastGroupWithFuotaTaskResponse {}
const AssociateMulticastGroupWithFuotaTaskResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AssociateMulticastGroupWithFuotaTaskResponse>;
export type WirelessDeviceId = string;
export interface AssociateWirelessDeviceWithFuotaTaskRequest {
  Id: string;
  WirelessDeviceId: string;
}
const AssociateWirelessDeviceWithFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AssociateWirelessDeviceWithFuotaTaskRequest>;
export interface AssociateWirelessDeviceWithFuotaTaskResponse {}
const AssociateWirelessDeviceWithFuotaTaskResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<AssociateWirelessDeviceWithFuotaTaskResponse>;
export interface AssociateWirelessDeviceWithMulticastGroupRequest {
  Id: string;
  WirelessDeviceId: string;
}
const AssociateWirelessDeviceWithMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<AssociateWirelessDeviceWithMulticastGroupRequest>;
export interface AssociateWirelessDeviceWithMulticastGroupResponse {}
const AssociateWirelessDeviceWithMulticastGroupResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<AssociateWirelessDeviceWithMulticastGroupResponse>;
export type ThingArn = string;
export interface AssociateWirelessDeviceWithThingRequest {
  Id: string;
  ThingArn: string;
}
const AssociateWirelessDeviceWithThingRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<AssociateWirelessDeviceWithThingRequest>;
export interface AssociateWirelessDeviceWithThingResponse {}
const AssociateWirelessDeviceWithThingResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<AssociateWirelessDeviceWithThingResponse>;
export type WirelessGatewayId = string;
export type IotCertificateId = string;
export interface AssociateWirelessGatewayWithCertificateRequest {
  Id: string;
  IotCertificateId: string;
}
const AssociateWirelessGatewayWithCertificateRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AssociateWirelessGatewayWithCertificateRequest>;
export interface AssociateWirelessGatewayWithCertificateResponse {
  IotCertificateId?: string;
}
const AssociateWirelessGatewayWithCertificateResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AssociateWirelessGatewayWithCertificateResponse>;
export interface AssociateWirelessGatewayWithThingRequest {
  Id: string;
  ThingArn: string;
}
const AssociateWirelessGatewayWithThingRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<AssociateWirelessGatewayWithThingRequest>;
export interface AssociateWirelessGatewayWithThingResponse {}
const AssociateWirelessGatewayWithThingResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<AssociateWirelessGatewayWithThingResponse>;
export interface CancelMulticastGroupSessionRequest {
  Id: string;
}
const CancelMulticastGroupSessionRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CancelMulticastGroupSessionRequest>;
export interface CancelMulticastGroupSessionResponse {}
const CancelMulticastGroupSessionResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<CancelMulticastGroupSessionResponse>;
export type DestinationName = string;
export type ExpressionType = "RuleName" | "MqttTopic" | (string & {});
const ExpressionType = S.String;

export type Expression = string;
export type Description = string;
export type RoleArn = string;
export interface CreateDestinationRequest {
  Name: string;
  ExpressionType: ExpressionType;
  Expression: string;
  Description?: string;
  RoleArn: string;
  Tags?: Tag[];
  ClientRequestToken?: string;
}
const CreateDestinationRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateDestinationRequest>;
export type DestinationArn = string;
export interface CreateDestinationResponse {
  Arn?: string;
  Name?: string;
}
const CreateDestinationResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateDestinationResponse>;
export type DeviceProfileName = string;
export type SupportsClassB = boolean;
export type ClassBTimeout = number;
export type PingSlotPeriod = number;
export type PingSlotDr = number;
export type PingSlotFreq = number;
export type SupportsClassC = boolean;
export type ClassCTimeout = number;
export type MacVersion = string;
export type RegParamsRevision = string;
export type RxDelay1 = number;
export type RxDrOffset1 = number;
export type RxDataRate2 = number;
export type RxFreq2 = number;
export type PresetFreq = number;
export type FactoryPresetFreqsList = number[];
const FactoryPresetFreqsList = /*@__PURE__*/ __L.at(__c2, 0);
export type MaxEirp = number;
export type MaxDutyCycle = number;
export type RfRegion = string;
export type SupportsJoin = boolean;
export type Supports32BitFCnt = boolean;
export interface LoRaWANDeviceProfile {
  SupportsClassB?: boolean;
  ClassBTimeout?: number;
  PingSlotPeriod?: number;
  PingSlotDr?: number;
  PingSlotFreq?: number;
  SupportsClassC?: boolean;
  ClassCTimeout?: number;
  MacVersion?: string;
  RegParamsRevision?: string;
  RxDelay1?: number;
  RxDrOffset1?: number;
  RxDataRate2?: number;
  RxFreq2?: number;
  FactoryPresetFreqsList?: number[];
  MaxEirp?: number;
  MaxDutyCycle?: number;
  RfRegion?: string;
  SupportsJoin?: boolean;
  Supports32BitFCnt?: boolean;
}
const LoRaWANDeviceProfile = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<LoRaWANDeviceProfile>;
export interface SidewalkCreateDeviceProfile {}
const SidewalkCreateDeviceProfile = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<SidewalkCreateDeviceProfile>;
export interface CreateDeviceProfileRequest {
  Name?: string;
  LoRaWAN?: LoRaWANDeviceProfile;
  Tags?: Tag[];
  ClientRequestToken?: string;
  Sidewalk?: SidewalkCreateDeviceProfile;
}
const CreateDeviceProfileRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CreateDeviceProfileRequest>;
export type DeviceProfileArn = string;
export type DeviceProfileId = string;
export interface CreateDeviceProfileResponse {
  Arn?: string;
  Id?: string;
}
const CreateDeviceProfileResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateDeviceProfileResponse>;
export type FuotaTaskName = string;
export type SupportedRfRegion =
  | "EU868"
  | "US915"
  | "AU915"
  | "AS923-1"
  | "AS923-2"
  | "AS923-3"
  | "AS923-4"
  | "EU433"
  | "CN470"
  | "CN779"
  | "RU864"
  | "KR920"
  | "IN865"
  | (string & {});
const SupportedRfRegion = S.String;

export interface LoRaWANFuotaTask {
  RfRegion?: SupportedRfRegion;
}
const LoRaWANFuotaTask = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<LoRaWANFuotaTask>;
export type FirmwareUpdateImage = string;
export type FirmwareUpdateRole = string;
export type RedundancyPercent = number;
export type FragmentSizeBytes = number;
export type FragmentIntervalMS = number;
export type FileDescriptor = string;
export interface CreateFuotaTaskRequest {
  Name?: string;
  Description?: string;
  ClientRequestToken?: string;
  LoRaWAN?: LoRaWANFuotaTask;
  FirmwareUpdateImage: string;
  FirmwareUpdateRole: string;
  Tags?: Tag[];
  RedundancyPercent?: number;
  FragmentSizeBytes?: number;
  FragmentIntervalMS?: number;
  Descriptor?: string;
}
const CreateFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateFuotaTaskRequest>;
export type FuotaTaskArn = string;
export interface CreateFuotaTaskResponse {
  Arn?: string;
  Id?: string;
}
const CreateFuotaTaskResponse = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateFuotaTaskResponse>;
export type MulticastGroupName = string;
export type DlClass = "ClassB" | "ClassC" | (string & {});
const DlClass = S.String;

export type GatewayListMulticast = string[];
const GatewayListMulticast = /*@__PURE__*/ __L.at(__c3, 0);
export type TransmissionIntervalMulticast = number;
export interface ParticipatingGatewaysMulticast {
  GatewayList?: string[];
  TransmissionInterval?: number;
}
const ParticipatingGatewaysMulticast = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ParticipatingGatewaysMulticast>;
export type DlDr = number;
export type DlFreq = number;
export interface DefaultSessionParametersMulticast {
  DlDr?: number;
  DlFreq?: number;
}
const DefaultSessionParametersMulticast = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DefaultSessionParametersMulticast>;
export interface LoRaWANMulticast {
  RfRegion?: SupportedRfRegion;
  DlClass?: DlClass;
  ParticipatingGateways?: ParticipatingGatewaysMulticast;
  DefaultSessionParameters?: DefaultSessionParametersMulticast;
}
const LoRaWANMulticast = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<LoRaWANMulticast>;
export interface CreateMulticastGroupRequest {
  Name?: string;
  Description?: string;
  ClientRequestToken?: string;
  LoRaWAN: LoRaWANMulticast;
  Tags?: Tag[];
}
const CreateMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateMulticastGroupRequest>;
export type MulticastGroupArn = string;
export interface CreateMulticastGroupResponse {
  Arn?: string;
  Id?: string;
}
const CreateMulticastGroupResponse =
  CreateDeviceProfileResponse as any as S.Schema<CreateMulticastGroupResponse>;
export type NetworkAnalyzerConfigurationName = string;
export type WirelessDeviceFrameInfo = "ENABLED" | "DISABLED" | (string & {});
const WirelessDeviceFrameInfo = S.String;

export type LogLevel = "INFO" | "ERROR" | "DISABLED" | (string & {});
const LogLevel = S.String;

export type MulticastFrameInfo = "ENABLED" | "DISABLED" | (string & {});
const MulticastFrameInfo = S.String;

export interface TraceContent {
  WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo;
  LogLevel?: LogLevel;
  MulticastFrameInfo?: MulticastFrameInfo;
}
const TraceContent = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<TraceContent>;
export type WirelessDeviceList = string[];
const WirelessDeviceList = GatewayListMulticast as any as S.Schema<WirelessDeviceList>;
export type WirelessGatewayList = string[];
const WirelessGatewayList = GatewayListMulticast as any as S.Schema<WirelessGatewayList>;
export type NetworkAnalyzerMulticastGroupList = string[];
const NetworkAnalyzerMulticastGroupList =
  GatewayListMulticast as any as S.Schema<NetworkAnalyzerMulticastGroupList>;
export interface CreateNetworkAnalyzerConfigurationRequest {
  Name: string;
  TraceContent?: TraceContent;
  WirelessDevices?: string[];
  WirelessGateways?: string[];
  Description?: string;
  Tags?: Tag[];
  ClientRequestToken?: string;
  MulticastGroups?: string[];
}
const CreateNetworkAnalyzerConfigurationRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateNetworkAnalyzerConfigurationRequest>;
export type NetworkAnalyzerConfigurationArn = string;
export interface CreateNetworkAnalyzerConfigurationResponse {
  Arn?: string;
  Name?: string;
}
const CreateNetworkAnalyzerConfigurationResponse =
  CreateDestinationResponse as any as S.Schema<CreateNetworkAnalyzerConfigurationResponse>;
export type ServiceProfileName = string;
export type AddGwMetadata = boolean;
export type DrMinBox = number;
export type DrMaxBox = number;
export type PrAllowed = boolean;
export type RaAllowed = boolean;
export type TxPowerIndexMin = number;
export type TxPowerIndexMax = number;
export type NbTransMin = number;
export type NbTransMax = number;
export interface LoRaWANServiceProfile {
  AddGwMetadata?: boolean;
  DrMin?: number;
  DrMax?: number;
  PrAllowed?: boolean;
  RaAllowed?: boolean;
  TxPowerIndexMin?: number;
  TxPowerIndexMax?: number;
  NbTransMin?: number;
  NbTransMax?: number;
}
const LoRaWANServiceProfile = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<LoRaWANServiceProfile>;
export interface CreateServiceProfileRequest {
  Name?: string;
  LoRaWAN?: LoRaWANServiceProfile;
  Tags?: Tag[];
  ClientRequestToken?: string;
}
const CreateServiceProfileRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateServiceProfileRequest>;
export type ServiceProfileArn = string;
export type ServiceProfileId = string;
export interface CreateServiceProfileResponse {
  Arn?: string;
  Id?: string;
}
const CreateServiceProfileResponse =
  CreateDeviceProfileResponse as any as S.Schema<CreateServiceProfileResponse>;
export type WirelessDeviceType = "Sidewalk" | "LoRaWAN" | (string & {});
const WirelessDeviceType = S.String;

export type WirelessDeviceName = string;
export type DevEui = string;
export type AppKey = string;
export type NwkKey = string;
export type JoinEui = string;
export interface OtaaV1_1 {
  AppKey?: string | redacted.Redacted<string>;
  NwkKey?: string | redacted.Redacted<string>;
  JoinEui?: string;
}
const OtaaV1_1 = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<OtaaV1_1>;
export type AppEui = string;
export type GenAppKey = string;
export interface OtaaV1_0_x {
  AppKey?: string | redacted.Redacted<string>;
  AppEui?: string;
  JoinEui?: string;
  GenAppKey?: string | redacted.Redacted<string>;
}
const OtaaV1_0_x = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<OtaaV1_0_x>;
export type DevAddr = string;
export type FNwkSIntKey = string;
export type SNwkSIntKey = string;
export type NwkSEncKey = string;
export type AppSKey = string;
export interface SessionKeysAbpV1_1 {
  FNwkSIntKey?: string | redacted.Redacted<string>;
  SNwkSIntKey?: string | redacted.Redacted<string>;
  NwkSEncKey?: string | redacted.Redacted<string>;
  AppSKey?: string | redacted.Redacted<string>;
}
const SessionKeysAbpV1_1 = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<SessionKeysAbpV1_1>;
export type FCntStart = number;
export interface AbpV1_1 {
  DevAddr?: string;
  SessionKeys?: SessionKeysAbpV1_1;
  FCntStart?: number;
}
const AbpV1_1 = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<AbpV1_1>;
export type NwkSKey = string;
export interface SessionKeysAbpV1_0_x {
  NwkSKey?: string | redacted.Redacted<string>;
  AppSKey?: string | redacted.Redacted<string>;
}
const SessionKeysAbpV1_0_x = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<SessionKeysAbpV1_0_x>;
export interface AbpV1_0_x {
  DevAddr?: string;
  SessionKeys?: SessionKeysAbpV1_0_x;
  FCntStart?: number;
}
const AbpV1_0_x = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<AbpV1_0_x>;
export type FPort = number;
export interface Positioning {
  ClockSync?: number;
  Stream?: number;
  Gnss?: number;
}
const Positioning = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<Positioning>;
export type ApplicationConfigType = "SemtechGeolocation" | (string & {});
const ApplicationConfigType = S.String;

export interface ApplicationConfig {
  FPort?: number;
  Type?: ApplicationConfigType;
  DestinationName?: string;
}
const ApplicationConfig = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ApplicationConfig>;
export type Applications = ApplicationConfig[];
const Applications = /*@__PURE__*/ __L.at(__c5, 1);
export interface FPorts {
  Fuota?: number;
  Multicast?: number;
  ClockSync?: number;
  Positioning?: Positioning;
  Applications?: ApplicationConfig[];
}
const FPorts = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<FPorts>;
export interface LoRaWANDevice {
  DevEui?: string;
  DeviceProfileId?: string;
  ServiceProfileId?: string;
  OtaaV1_1?: OtaaV1_1;
  OtaaV1_0_x?: OtaaV1_0_x;
  AbpV1_1?: AbpV1_1;
  AbpV1_0_x?: AbpV1_0_x;
  FPorts?: FPorts;
}
const LoRaWANDevice = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<LoRaWANDevice>;
export type PositioningConfigStatus = "Enabled" | "Disabled" | (string & {});
const PositioningConfigStatus = S.String;

export interface SidewalkPositioning {
  DestinationName?: string;
}
const SidewalkPositioning = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<SidewalkPositioning>;
export type SidewalkManufacturingSn = string;
export interface SidewalkCreateWirelessDevice {
  DeviceProfileId?: string;
  Positioning?: SidewalkPositioning;
  SidewalkManufacturingSn?: string;
}
const SidewalkCreateWirelessDevice = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<SidewalkCreateWirelessDevice>;
export interface CreateWirelessDeviceRequest {
  Type: WirelessDeviceType;
  Name?: string;
  Description?: string;
  DestinationName: string;
  ClientRequestToken?: string;
  LoRaWAN?: LoRaWANDevice;
  Tags?: Tag[];
  Positioning?: PositioningConfigStatus;
  Sidewalk?: SidewalkCreateWirelessDevice;
}
const CreateWirelessDeviceRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateWirelessDeviceRequest>;
export type WirelessDeviceArn = string;
export interface CreateWirelessDeviceResponse {
  Arn?: string;
  Id?: string;
}
const CreateWirelessDeviceResponse =
  CreateDeviceProfileResponse as any as S.Schema<CreateWirelessDeviceResponse>;
export type WirelessGatewayName = string;
export type GatewayEui = string;
export type JoinEuiRange = string[];
const JoinEuiRange = GatewayListMulticast as any as S.Schema<JoinEuiRange>;
export type JoinEuiFilters = string[][];
const JoinEuiFilters = /*@__PURE__*/ __L.at(__c5, 7);
export type NetId = string;
export type NetIdFilters = string[];
const NetIdFilters = GatewayListMulticast as any as S.Schema<NetIdFilters>;
export type SubBand = number;
export type SubBands = number[];
const SubBands = FactoryPresetFreqsList as any as S.Schema<SubBands>;
export type BeaconingDataRate = number;
export type BeaconingFrequency = number;
export type BeaconingFrequencies = number[];
const BeaconingFrequencies = FactoryPresetFreqsList as any as S.Schema<BeaconingFrequencies>;
export interface Beaconing {
  DataRate?: number;
  Frequencies?: number[];
}
const Beaconing = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<Beaconing>;
export type GatewayMaxEirp = number;
export interface LoRaWANGateway {
  GatewayEui?: string;
  RfRegion?: string;
  JoinEuiFilters?: string[][];
  NetIdFilters?: string[];
  SubBands?: number[];
  Beaconing?: Beaconing;
  MaxEirp?: number;
}
const LoRaWANGateway = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<LoRaWANGateway>;
export interface CreateWirelessGatewayRequest {
  Name?: string;
  Description?: string;
  LoRaWAN: LoRaWANGateway;
  Tags?: Tag[];
  ClientRequestToken?: string;
}
const CreateWirelessGatewayRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<CreateWirelessGatewayRequest>;
export type WirelessGatewayArn = string;
export interface CreateWirelessGatewayResponse {
  Arn?: string;
  Id?: string;
}
const CreateWirelessGatewayResponse =
  CreateDeviceProfileResponse as any as S.Schema<CreateWirelessGatewayResponse>;
export type WirelessGatewayTaskDefinitionId = string;
export interface CreateWirelessGatewayTaskRequest {
  Id: string;
  WirelessGatewayTaskDefinitionId: string;
}
const CreateWirelessGatewayTaskRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<CreateWirelessGatewayTaskRequest>;
export type WirelessGatewayTaskStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "FIRST_RETRY"
  | "SECOND_RETRY"
  | "COMPLETED"
  | "FAILED"
  | (string & {});
const WirelessGatewayTaskStatus = S.String;

export interface CreateWirelessGatewayTaskResponse {
  WirelessGatewayTaskDefinitionId?: string;
  Status?: WirelessGatewayTaskStatus;
}
const CreateWirelessGatewayTaskResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateWirelessGatewayTaskResponse>;
export type AutoCreateTasks = boolean;
export type WirelessGatewayTaskName = string;
export type UpdateDataSource = string;
export type UpdateSignature = string;
export type Crc = number;
export type PackageVersion = string;
export type Model = string;
export type Station = string;
export interface LoRaWANGatewayVersion {
  PackageVersion?: string;
  Model?: string;
  Station?: string;
}
const LoRaWANGatewayVersion = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<LoRaWANGatewayVersion>;
export interface LoRaWANUpdateGatewayTaskCreate {
  UpdateSignature?: string;
  SigKeyCrc?: number;
  CurrentVersion?: LoRaWANGatewayVersion;
  UpdateVersion?: LoRaWANGatewayVersion;
}
const LoRaWANUpdateGatewayTaskCreate = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<LoRaWANUpdateGatewayTaskCreate>;
export interface UpdateWirelessGatewayTaskCreate {
  UpdateDataSource?: string;
  UpdateDataRole?: string;
  LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
}
const UpdateWirelessGatewayTaskCreate = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<UpdateWirelessGatewayTaskCreate>;
export interface CreateWirelessGatewayTaskDefinitionRequest {
  AutoCreateTasks: boolean;
  Name?: string;
  Update?: UpdateWirelessGatewayTaskCreate;
  ClientRequestToken?: string;
  Tags?: Tag[];
}
const CreateWirelessGatewayTaskDefinitionRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<CreateWirelessGatewayTaskDefinitionRequest>;
export type WirelessGatewayTaskDefinitionArn = string;
export interface CreateWirelessGatewayTaskDefinitionResponse {
  Id?: string;
  Arn?: string;
}
const CreateWirelessGatewayTaskDefinitionResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<CreateWirelessGatewayTaskDefinitionResponse>;
export interface DeleteDestinationRequest {
  Name: string;
}
const DeleteDestinationRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteDestinationRequest>;
export interface DeleteDestinationResponse {}
const DeleteDestinationResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<DeleteDestinationResponse>;
export interface DeleteDeviceProfileRequest {
  Id: string;
}
const DeleteDeviceProfileRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteDeviceProfileRequest>;
export interface DeleteDeviceProfileResponse {}
const DeleteDeviceProfileResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<DeleteDeviceProfileResponse>;
export interface DeleteFuotaTaskRequest {
  Id: string;
}
const DeleteFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteFuotaTaskRequest>;
export interface DeleteFuotaTaskResponse {}
const DeleteFuotaTaskResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<DeleteFuotaTaskResponse>;
export interface DeleteMulticastGroupRequest {
  Id: string;
}
const DeleteMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DeleteMulticastGroupRequest>;
export interface DeleteMulticastGroupResponse {}
const DeleteMulticastGroupResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<DeleteMulticastGroupResponse>;
export interface DeleteNetworkAnalyzerConfigurationRequest {
  ConfigurationName: string;
}
const DeleteNetworkAnalyzerConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DeleteNetworkAnalyzerConfigurationRequest>;
export interface DeleteNetworkAnalyzerConfigurationResponse {}
const DeleteNetworkAnalyzerConfigurationResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DeleteNetworkAnalyzerConfigurationResponse>;
export type MessageId = string;
export interface DeleteQueuedMessagesRequest {
  Id: string;
  MessageId: string;
  WirelessDeviceType?: WirelessDeviceType;
}
const DeleteQueuedMessagesRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DeleteQueuedMessagesRequest>;
export interface DeleteQueuedMessagesResponse {}
const DeleteQueuedMessagesResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<DeleteQueuedMessagesResponse>;
export interface DeleteServiceProfileRequest {
  Id: string;
}
const DeleteServiceProfileRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DeleteServiceProfileRequest>;
export interface DeleteServiceProfileResponse {}
const DeleteServiceProfileResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<DeleteServiceProfileResponse>;
export interface DeleteWirelessDeviceRequest {
  Id: string;
}
const DeleteWirelessDeviceRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DeleteWirelessDeviceRequest>;
export interface DeleteWirelessDeviceResponse {}
const DeleteWirelessDeviceResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<DeleteWirelessDeviceResponse>;
export type ImportTaskId = string;
export interface DeleteWirelessDeviceImportTaskRequest {
  Id: string;
}
const DeleteWirelessDeviceImportTaskRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DeleteWirelessDeviceImportTaskRequest>;
export interface DeleteWirelessDeviceImportTaskResponse {}
const DeleteWirelessDeviceImportTaskResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DeleteWirelessDeviceImportTaskResponse>;
export interface DeleteWirelessGatewayRequest {
  Id: string;
}
const DeleteWirelessGatewayRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteWirelessGatewayRequest>;
export interface DeleteWirelessGatewayResponse {}
const DeleteWirelessGatewayResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<DeleteWirelessGatewayResponse>;
export interface DeleteWirelessGatewayTaskRequest {
  Id: string;
}
const DeleteWirelessGatewayTaskRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DeleteWirelessGatewayTaskRequest>;
export interface DeleteWirelessGatewayTaskResponse {}
const DeleteWirelessGatewayTaskResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DeleteWirelessGatewayTaskResponse>;
export interface DeleteWirelessGatewayTaskDefinitionRequest {
  Id: string;
}
const DeleteWirelessGatewayTaskDefinitionRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DeleteWirelessGatewayTaskDefinitionRequest>;
export interface DeleteWirelessGatewayTaskDefinitionResponse {}
const DeleteWirelessGatewayTaskDefinitionResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DeleteWirelessGatewayTaskDefinitionResponse>;
export type Identifier = string;
export interface DeregisterWirelessDeviceRequest {
  Identifier: string;
  WirelessDeviceType?: WirelessDeviceType;
}
const DeregisterWirelessDeviceRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DeregisterWirelessDeviceRequest>;
export interface DeregisterWirelessDeviceResponse {}
const DeregisterWirelessDeviceResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DeregisterWirelessDeviceResponse>;
export type PartnerAccountId = string;
export type PartnerType = "Sidewalk" | (string & {});
const PartnerType = S.String;

export interface DisassociateAwsAccountFromPartnerAccountRequest {
  PartnerAccountId: string;
  PartnerType: PartnerType;
}
const DisassociateAwsAccountFromPartnerAccountRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DisassociateAwsAccountFromPartnerAccountRequest>;
export interface DisassociateAwsAccountFromPartnerAccountResponse {}
const DisassociateAwsAccountFromPartnerAccountResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DisassociateAwsAccountFromPartnerAccountResponse>;
export interface DisassociateMulticastGroupFromFuotaTaskRequest {
  Id: string;
  MulticastGroupId: string;
}
const DisassociateMulticastGroupFromFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DisassociateMulticastGroupFromFuotaTaskRequest>;
export interface DisassociateMulticastGroupFromFuotaTaskResponse {}
const DisassociateMulticastGroupFromFuotaTaskResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DisassociateMulticastGroupFromFuotaTaskResponse>;
export interface DisassociateWirelessDeviceFromFuotaTaskRequest {
  Id: string;
  WirelessDeviceId: string;
}
const DisassociateWirelessDeviceFromFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DisassociateWirelessDeviceFromFuotaTaskRequest>;
export interface DisassociateWirelessDeviceFromFuotaTaskResponse {}
const DisassociateWirelessDeviceFromFuotaTaskResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DisassociateWirelessDeviceFromFuotaTaskResponse>;
export interface DisassociateWirelessDeviceFromMulticastGroupRequest {
  Id: string;
  WirelessDeviceId: string;
}
const DisassociateWirelessDeviceFromMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DisassociateWirelessDeviceFromMulticastGroupRequest>;
export interface DisassociateWirelessDeviceFromMulticastGroupResponse {}
const DisassociateWirelessDeviceFromMulticastGroupResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DisassociateWirelessDeviceFromMulticastGroupResponse>;
export interface DisassociateWirelessDeviceFromThingRequest {
  Id: string;
}
const DisassociateWirelessDeviceFromThingRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DisassociateWirelessDeviceFromThingRequest>;
export interface DisassociateWirelessDeviceFromThingResponse {}
const DisassociateWirelessDeviceFromThingResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DisassociateWirelessDeviceFromThingResponse>;
export interface DisassociateWirelessGatewayFromCertificateRequest {
  Id: string;
}
const DisassociateWirelessGatewayFromCertificateRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DisassociateWirelessGatewayFromCertificateRequest>;
export interface DisassociateWirelessGatewayFromCertificateResponse {}
const DisassociateWirelessGatewayFromCertificateResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DisassociateWirelessGatewayFromCertificateResponse>;
export interface DisassociateWirelessGatewayFromThingRequest {
  Id: string;
}
const DisassociateWirelessGatewayFromThingRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DisassociateWirelessGatewayFromThingRequest>;
export interface DisassociateWirelessGatewayFromThingResponse {}
const DisassociateWirelessGatewayFromThingResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<DisassociateWirelessGatewayFromThingResponse>;
export interface GetDestinationRequest {
  Name: string;
}
const GetDestinationRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<GetDestinationRequest>;
export interface GetDestinationResponse {
  Arn?: string;
  Name?: string;
  Expression?: string;
  ExpressionType?: ExpressionType;
  Description?: string;
  RoleArn?: string;
}
const GetDestinationResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetDestinationResponse>;
export interface GetDeviceProfileRequest {
  Id: string;
}
const GetDeviceProfileRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetDeviceProfileRequest>;
export type ApplicationServerPublicKey = string | redacted.Redacted<string>;
export type QualificationStatus = boolean;
export type DakCertificateId = string;
export type MaxAllowedSignature = number;
export type FactorySupport = boolean;
export type ApId = string;
export type DeviceTypeId = string;
export interface DakCertificateMetadata {
  CertificateId: string;
  MaxAllowedSignature?: number;
  FactorySupport?: boolean;
  ApId?: string;
  DeviceTypeId?: string;
}
const DakCertificateMetadata = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<DakCertificateMetadata>;
export type DakCertificateMetadataList = DakCertificateMetadata[];
const DakCertificateMetadataList = /*@__PURE__*/ __L.at(__c10, 2);
export interface SidewalkGetDeviceProfile {
  ApplicationServerPublicKey?: string | redacted.Redacted<string>;
  QualificationStatus?: boolean;
  DakCertificateMetadata?: DakCertificateMetadata[];
}
const SidewalkGetDeviceProfile = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<SidewalkGetDeviceProfile>;
export interface GetDeviceProfileResponse {
  Arn?: string;
  Name?: string;
  Id?: string;
  LoRaWAN?: LoRaWANDeviceProfile;
  Sidewalk?: SidewalkGetDeviceProfile;
}
const GetDeviceProfileResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<GetDeviceProfileResponse>;
export interface GetEventConfigurationByResourceTypesRequest {}
const GetEventConfigurationByResourceTypesRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetEventConfigurationByResourceTypesRequest>;
export type EventNotificationTopicStatus = "Enabled" | "Disabled" | (string & {});
const EventNotificationTopicStatus = S.String;

export interface SidewalkResourceTypeEventConfiguration {
  WirelessDeviceEventTopic?: EventNotificationTopicStatus;
}
const SidewalkResourceTypeEventConfiguration = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<SidewalkResourceTypeEventConfiguration>;
export interface DeviceRegistrationStateResourceTypeEventConfiguration {
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}
const DeviceRegistrationStateResourceTypeEventConfiguration = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DeviceRegistrationStateResourceTypeEventConfiguration>;
export interface ProximityResourceTypeEventConfiguration {
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}
const ProximityResourceTypeEventConfiguration =
  DeviceRegistrationStateResourceTypeEventConfiguration as any as S.Schema<ProximityResourceTypeEventConfiguration>;
export interface LoRaWANJoinResourceTypeEventConfiguration {
  WirelessDeviceEventTopic?: EventNotificationTopicStatus;
}
const LoRaWANJoinResourceTypeEventConfiguration =
  SidewalkResourceTypeEventConfiguration as any as S.Schema<LoRaWANJoinResourceTypeEventConfiguration>;
export interface JoinResourceTypeEventConfiguration {
  LoRaWAN?: LoRaWANJoinResourceTypeEventConfiguration;
}
const JoinResourceTypeEventConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<JoinResourceTypeEventConfiguration>;
export interface LoRaWANConnectionStatusResourceTypeEventConfiguration {
  WirelessGatewayEventTopic?: EventNotificationTopicStatus;
}
const LoRaWANConnectionStatusResourceTypeEventConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<LoRaWANConnectionStatusResourceTypeEventConfiguration>;
export interface ConnectionStatusResourceTypeEventConfiguration {
  LoRaWAN?: LoRaWANConnectionStatusResourceTypeEventConfiguration;
}
const ConnectionStatusResourceTypeEventConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ConnectionStatusResourceTypeEventConfiguration>;
export interface MessageDeliveryStatusResourceTypeEventConfiguration {
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}
const MessageDeliveryStatusResourceTypeEventConfiguration =
  DeviceRegistrationStateResourceTypeEventConfiguration as any as S.Schema<MessageDeliveryStatusResourceTypeEventConfiguration>;
export interface GetEventConfigurationByResourceTypesResponse {
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;
  Proximity?: ProximityResourceTypeEventConfiguration;
  Join?: JoinResourceTypeEventConfiguration;
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}
const GetEventConfigurationByResourceTypesResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetEventConfigurationByResourceTypesResponse>;
export interface GetFuotaTaskRequest {
  Id: string;
}
const GetFuotaTaskRequest = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<GetFuotaTaskRequest>;
export type FuotaTaskStatus =
  | "Pending"
  | "FuotaSession_Waiting"
  | "In_FuotaSession"
  | "FuotaDone"
  | "Delete_Waiting"
  | (string & {});
const FuotaTaskStatus = S.String;

export type StartTime = Date;
export interface LoRaWANFuotaTaskGetInfo {
  RfRegion?: string;
  StartTime?: Date;
}
const LoRaWANFuotaTaskGetInfo = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<LoRaWANFuotaTaskGetInfo>;
export type CreatedAt = Date;
export interface GetFuotaTaskResponse {
  Arn?: string;
  Id?: string;
  Status?: FuotaTaskStatus;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANFuotaTaskGetInfo;
  FirmwareUpdateImage?: string;
  FirmwareUpdateRole?: string;
  CreatedAt?: Date;
  RedundancyPercent?: number;
  FragmentSizeBytes?: number;
  FragmentIntervalMS?: number;
  Descriptor?: string;
}
const GetFuotaTaskResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetFuotaTaskResponse>;
export interface GetLogLevelsByResourceTypesRequest {}
const GetLogLevelsByResourceTypesRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetLogLevelsByResourceTypesRequest>;
export type WirelessGatewayType = "LoRaWAN" | (string & {});
const WirelessGatewayType = S.String;

export type WirelessGatewayEvent = "CUPS_Request" | "Certificate" | (string & {});
const WirelessGatewayEvent = S.String;

export interface WirelessGatewayEventLogOption {
  Event: WirelessGatewayEvent;
  LogLevel: LogLevel;
}
const WirelessGatewayEventLogOption = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<WirelessGatewayEventLogOption>;
export type WirelessGatewayEventLogOptionList = WirelessGatewayEventLogOption[];
const WirelessGatewayEventLogOptionList = /*@__PURE__*/ __L.at(__c12, 1);
export interface WirelessGatewayLogOption {
  Type: WirelessGatewayType;
  LogLevel: LogLevel;
  Events?: WirelessGatewayEventLogOption[];
}
const WirelessGatewayLogOption = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<WirelessGatewayLogOption>;
export type WirelessGatewayLogOptionList = WirelessGatewayLogOption[];
const WirelessGatewayLogOptionList = /*@__PURE__*/ __L.at(__c12, 3);
export type WirelessDeviceEvent =
  | "Join"
  | "Rejoin"
  | "Uplink_Data"
  | "Downlink_Data"
  | "Registration"
  | (string & {});
export interface WirelessDeviceEventLogOption {
  Event: WirelessDeviceEvent;
  LogLevel: LogLevel;
}
const WirelessDeviceEventLogOption =
  WirelessGatewayEventLogOption as any as S.Schema<WirelessDeviceEventLogOption>;
export type WirelessDeviceEventLogOptionList = WirelessDeviceEventLogOption[];
const WirelessDeviceEventLogOptionList = /*@__PURE__*/ __L.at(__c12, 4);
export interface WirelessDeviceLogOption {
  Type: WirelessDeviceType;
  LogLevel: LogLevel;
  Events?: WirelessDeviceEventLogOption[];
}
const WirelessDeviceLogOption = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<WirelessDeviceLogOption>;
export type WirelessDeviceLogOptionList = WirelessDeviceLogOption[];
const WirelessDeviceLogOptionList = /*@__PURE__*/ __L.at(__c12, 6);
export type FuotaTaskType = "LoRaWAN" | (string & {});
const FuotaTaskType = S.String;

export type FuotaTaskEvent = "Fuota" | (string & {});
const FuotaTaskEvent = S.String;

export interface FuotaTaskEventLogOption {
  Event: FuotaTaskEvent;
  LogLevel: LogLevel;
}
const FuotaTaskEventLogOption = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<FuotaTaskEventLogOption>;
export type FuotaTaskEventLogOptionList = FuotaTaskEventLogOption[];
const FuotaTaskEventLogOptionList = /*@__PURE__*/ __L.at(__c13, 0);
export interface FuotaTaskLogOption {
  Type: FuotaTaskType;
  LogLevel: LogLevel;
  Events?: FuotaTaskEventLogOption[];
}
const FuotaTaskLogOption = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<FuotaTaskLogOption>;
export type FuotaTaskLogOptionList = FuotaTaskLogOption[];
const FuotaTaskLogOptionList = /*@__PURE__*/ __L.at(__c13, 2);
export interface GetLogLevelsByResourceTypesResponse {
  DefaultLogLevel?: LogLevel;
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[];
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[];
  FuotaTaskLogOptions?: FuotaTaskLogOption[];
}
const GetLogLevelsByResourceTypesResponse = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<GetLogLevelsByResourceTypesResponse>;
export interface GetMetricConfigurationRequest {}
const GetMetricConfigurationRequest = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<GetMetricConfigurationRequest>;
export type SummaryMetricConfigurationStatus = "Enabled" | "Disabled" | (string & {});
const SummaryMetricConfigurationStatus = S.String;

export interface SummaryMetricConfiguration {
  Status?: SummaryMetricConfigurationStatus;
}
const SummaryMetricConfiguration = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<SummaryMetricConfiguration>;
export interface GetMetricConfigurationResponse {
  SummaryMetric?: SummaryMetricConfiguration;
}
const GetMetricConfigurationResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<GetMetricConfigurationResponse>;
export type MetricQueryId = string;
export type MetricName =
  | "DeviceRSSI"
  | "DeviceSNR"
  | "DeviceRoamingRSSI"
  | "DeviceRoamingSNR"
  | "DeviceUplinkCount"
  | "DeviceDownlinkCount"
  | "DeviceUplinkLostCount"
  | "DeviceUplinkLostRate"
  | "DeviceJoinRequestCount"
  | "DeviceJoinAcceptCount"
  | "DeviceRoamingUplinkCount"
  | "DeviceRoamingDownlinkCount"
  | "GatewayUpTime"
  | "GatewayDownTime"
  | "GatewayRSSI"
  | "GatewaySNR"
  | "GatewayUplinkCount"
  | "GatewayDownlinkCount"
  | "GatewayJoinRequestCount"
  | "GatewayJoinAcceptCount"
  | "AwsAccountUplinkCount"
  | "AwsAccountDownlinkCount"
  | "AwsAccountUplinkLostCount"
  | "AwsAccountUplinkLostRate"
  | "AwsAccountJoinRequestCount"
  | "AwsAccountJoinAcceptCount"
  | "AwsAccountRoamingUplinkCount"
  | "AwsAccountRoamingDownlinkCount"
  | "AwsAccountDeviceCount"
  | "AwsAccountGatewayCount"
  | "AwsAccountActiveDeviceCount"
  | "AwsAccountActiveGatewayCount"
  | (string & {});
const MetricName = S.String;

export type DimensionName = "DeviceId" | "GatewayId" | (string & {});
const DimensionName = S.String;

export type DimensionValue = string;
export interface Dimension {
  name?: DimensionName;
  value?: string;
}
const Dimension = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<Dimension>;
export type Dimensions = Dimension[];
const Dimensions = /*@__PURE__*/ __L.at(__c14, 0);
export type AggregationPeriod = "OneHour" | "OneDay" | "OneWeek" | (string & {});
const AggregationPeriod = S.String;

export type MetricQueryStartTimestamp = Date;
export type MetricQueryEndTimestamp = Date;
export interface SummaryMetricQuery {
  QueryId?: string;
  MetricName?: MetricName;
  Dimensions?: Dimension[];
  AggregationPeriod?: AggregationPeriod;
  StartTimestamp?: Date;
  EndTimestamp?: Date;
}
const SummaryMetricQuery = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<SummaryMetricQuery>;
export type SummaryMetricQueries = SummaryMetricQuery[];
const SummaryMetricQueries = /*@__PURE__*/ __L.at(__c14, 2);
export interface GetMetricsRequest {
  SummaryMetricQueries?: SummaryMetricQuery[];
}
const GetMetricsRequest = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<GetMetricsRequest>;
export type MetricQueryStatus = "Succeeded" | "Failed" | (string & {});
const MetricQueryStatus = S.String;

export type MetricQueryError = string;
export type MetricQueryTimestamp = Date;
export type MetricQueryTimestamps = Date[];
const MetricQueryTimestamps = /*@__PURE__*/ __L.at(__c14, 4);
export type Min = number;
export type Max = number;
export type Sum = number;
export type Avg = number;
export type Std = number;
export type P90 = number;
export interface MetricQueryValue {
  Min?: number;
  Max?: number;
  Sum?: number;
  Avg?: number;
  Std?: number;
  P90?: number;
}
const MetricQueryValue = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<MetricQueryValue>;
export type MetricQueryValues = MetricQueryValue[];
const MetricQueryValues = /*@__PURE__*/ __L.at(__c14, 6);
export type MetricUnit = string;
export interface SummaryMetricQueryResult {
  QueryId?: string;
  QueryStatus?: MetricQueryStatus;
  Error?: string;
  MetricName?: MetricName;
  Dimensions?: Dimension[];
  AggregationPeriod?: AggregationPeriod;
  StartTimestamp?: Date;
  EndTimestamp?: Date;
  Timestamps?: Date[];
  Values?: MetricQueryValue[];
  Unit?: string;
}
const SummaryMetricQueryResult = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<SummaryMetricQueryResult>;
export type SummaryMetricQueryResults = SummaryMetricQueryResult[];
const SummaryMetricQueryResults = /*@__PURE__*/ __L.at(__c15, 0);
export interface GetMetricsResponse {
  SummaryMetricQueryResults?: SummaryMetricQueryResult[];
}
const GetMetricsResponse = /*@__PURE__*/ __L.at(__c15, 1) as any as S.Schema<GetMetricsResponse>;
export interface GetMulticastGroupRequest {
  Id: string;
}
const GetMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<GetMulticastGroupRequest>;
export type MulticastGroupStatus = string;
export type NumberOfDevicesRequested = number;
export type NumberOfDevicesInGroup = number;
export interface LoRaWANMulticastGet {
  RfRegion?: SupportedRfRegion;
  DlClass?: DlClass;
  NumberOfDevicesRequested?: number;
  NumberOfDevicesInGroup?: number;
  ParticipatingGateways?: ParticipatingGatewaysMulticast;
  DefaultSessionParameters?: DefaultSessionParametersMulticast;
}
const LoRaWANMulticastGet = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<LoRaWANMulticastGet>;
export interface GetMulticastGroupResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  Status?: string;
  LoRaWAN?: LoRaWANMulticastGet;
  CreatedAt?: Date;
}
const GetMulticastGroupResponse = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<GetMulticastGroupResponse>;
export interface GetMulticastGroupSessionRequest {
  Id: string;
}
const GetMulticastGroupSessionRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<GetMulticastGroupSessionRequest>;
export type SessionStartTimeTimestamp = Date;
export type SessionTimeout = number;
export interface LoRaWANMulticastSession {
  DlDr?: number;
  DlFreq?: number;
  SessionStartTime?: Date;
  SessionTimeout?: number;
  PingSlotPeriod?: number;
}
const LoRaWANMulticastSession = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<LoRaWANMulticastSession>;
export interface GetMulticastGroupSessionResponse {
  LoRaWAN?: LoRaWANMulticastSession;
}
const GetMulticastGroupSessionResponse = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<GetMulticastGroupSessionResponse>;
export interface GetNetworkAnalyzerConfigurationRequest {
  ConfigurationName: string;
}
const GetNetworkAnalyzerConfigurationRequest = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<GetNetworkAnalyzerConfigurationRequest>;
export interface GetNetworkAnalyzerConfigurationResponse {
  TraceContent?: TraceContent;
  WirelessDevices?: string[];
  WirelessGateways?: string[];
  Description?: string;
  Arn?: string;
  Name?: string;
  MulticastGroups?: string[];
}
const GetNetworkAnalyzerConfigurationResponse = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<GetNetworkAnalyzerConfigurationResponse>;
export interface GetPartnerAccountRequest {
  PartnerAccountId: string;
  PartnerType: PartnerType;
}
const GetPartnerAccountRequest = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<GetPartnerAccountRequest>;
export type Fingerprint = string | redacted.Redacted<string>;
export interface SidewalkAccountInfoWithFingerprint {
  AmazonId?: string;
  Fingerprint?: string | redacted.Redacted<string>;
  Arn?: string;
}
const SidewalkAccountInfoWithFingerprint = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<SidewalkAccountInfoWithFingerprint>;
export type AccountLinked = boolean;
export interface GetPartnerAccountResponse {
  Sidewalk?: SidewalkAccountInfoWithFingerprint;
  AccountLinked?: boolean;
}
const GetPartnerAccountResponse = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<GetPartnerAccountResponse>;
export type PositionResourceIdentifier = string;
export type PositionResourceType = "WirelessDevice" | "WirelessGateway" | (string & {});
const PositionResourceType = S.String;

export interface GetPositionRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
}
const GetPositionRequest = /*@__PURE__*/ __L.at(__c16, 5) as any as S.Schema<GetPositionRequest>;
export type PositionCoordinateValue = number;
export type PositionCoordinate = number[];
const PositionCoordinate = FactoryPresetFreqsList as any as S.Schema<PositionCoordinate>;
export type HorizontalAccuracy = number;
export type VerticalAccuracy = number;
export interface Accuracy {
  HorizontalAccuracy?: number;
  VerticalAccuracy?: number;
}
const Accuracy = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<Accuracy>;
export type PositionSolverType = "GNSS" | (string & {});
const PositionSolverType = S.String;

export type PositionSolverProvider = "Semtech" | (string & {});
const PositionSolverProvider = S.String;

export type PositionSolverVersion = string;
export type ISODateTimeString = string;
export interface GetPositionResponse {
  Position?: number[];
  Accuracy?: Accuracy;
  SolverType?: PositionSolverType;
  SolverProvider?: PositionSolverProvider;
  SolverVersion?: string;
  Timestamp?: string;
}
const GetPositionResponse = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<GetPositionResponse>;
export interface GetPositionConfigurationRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
}
const GetPositionConfigurationRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<GetPositionConfigurationRequest>;
export type PositionConfigurationStatus = "Enabled" | "Disabled" | (string & {});
const PositionConfigurationStatus = S.String;

export type PositionConfigurationFec = "ROSE" | "NONE" | (string & {});
const PositionConfigurationFec = S.String;

export interface SemtechGnssDetail {
  Provider?: PositionSolverProvider;
  Type?: PositionSolverType;
  Status?: PositionConfigurationStatus;
  Fec?: PositionConfigurationFec;
}
const SemtechGnssDetail = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<SemtechGnssDetail>;
export interface PositionSolverDetails {
  SemtechGnss?: SemtechGnssDetail;
}
const PositionSolverDetails = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<PositionSolverDetails>;
export interface GetPositionConfigurationResponse {
  Solvers?: PositionSolverDetails;
  Destination?: string;
}
const GetPositionConfigurationResponse = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<GetPositionConfigurationResponse>;
export type MacAddress = string;
export type RSS = number;
export interface WiFiAccessPoint {
  MacAddress: string;
  Rss: number;
}
const WiFiAccessPoint = /*@__PURE__*/ __L.at(__c17, 4) as any as S.Schema<WiFiAccessPoint>;
export type WiFiAccessPoints = WiFiAccessPoint[];
const WiFiAccessPoints = /*@__PURE__*/ __L.at(__c17, 5);
export type MCC = number;
export type MNC = number;
export type LAC = number;
export type GeranCid = number;
export type BSIC = number;
export type BCCH = number;
export interface GsmLocalId {
  Bsic: number;
  Bcch: number;
}
const GsmLocalId = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<GsmLocalId>;
export type GsmTimingAdvance = number;
export type RxLevel = number;
export interface GlobalIdentity {
  Lac: number;
  GeranCid: number;
}
const GlobalIdentity = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<GlobalIdentity>;
export interface GsmNmrObj {
  Bsic: number;
  Bcch: number;
  RxLevel?: number;
  GlobalIdentity?: GlobalIdentity;
}
const GsmNmrObj = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<GsmNmrObj>;
export type GsmNmrList = GsmNmrObj[];
const GsmNmrList = /*@__PURE__*/ __L.at(__c18, 1);
export interface GsmObj {
  Mcc: number;
  Mnc: number;
  Lac: number;
  GeranCid: number;
  GsmLocalId?: GsmLocalId;
  GsmTimingAdvance?: number;
  RxLevel?: number;
  GsmNmr?: GsmNmrObj[];
}
const GsmObj = /*@__PURE__*/ __L.at(__c18, 2) as any as S.Schema<GsmObj>;
export type GsmList = GsmObj[];
const GsmList = /*@__PURE__*/ __L.at(__c18, 3);
export type UtranCid = number;
export type UARFCNDL = number;
export type PSC = number;
export interface WcdmaLocalId {
  Uarfcndl: number;
  Psc: number;
}
const WcdmaLocalId = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<WcdmaLocalId>;
export type RSCP = number;
export type PathLoss = number;
export interface WcdmaNmrObj {
  Uarfcndl: number;
  Psc: number;
  UtranCid: number;
  Rscp?: number;
  PathLoss?: number;
}
const WcdmaNmrObj = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<WcdmaNmrObj>;
export type WcdmaNmrList = WcdmaNmrObj[];
const WcdmaNmrList = /*@__PURE__*/ __L.at(__c18, 6);
export interface WcdmaObj {
  Mcc: number;
  Mnc: number;
  Lac?: number;
  UtranCid: number;
  WcdmaLocalId?: WcdmaLocalId;
  Rscp?: number;
  PathLoss?: number;
  WcdmaNmr?: WcdmaNmrObj[];
}
const WcdmaObj = /*@__PURE__*/ __L.at(__c18, 7) as any as S.Schema<WcdmaObj>;
export type WcdmaList = WcdmaObj[];
const WcdmaList = /*@__PURE__*/ __L.at(__c19, 0);
export type UARFCN = number;
export type CellParams = number;
export interface TdscdmaLocalId {
  Uarfcn: number;
  CellParams: number;
}
const TdscdmaLocalId = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<TdscdmaLocalId>;
export type TdscdmaTimingAdvance = number;
export interface TdscdmaNmrObj {
  Uarfcn: number;
  CellParams: number;
  UtranCid?: number;
  Rscp?: number;
  PathLoss?: number;
}
const TdscdmaNmrObj = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<TdscdmaNmrObj>;
export type TdscdmaNmrList = TdscdmaNmrObj[];
const TdscdmaNmrList = /*@__PURE__*/ __L.at(__c19, 3);
export interface TdscdmaObj {
  Mcc: number;
  Mnc: number;
  Lac?: number;
  UtranCid: number;
  TdscdmaLocalId?: TdscdmaLocalId;
  TdscdmaTimingAdvance?: number;
  Rscp?: number;
  PathLoss?: number;
  TdscdmaNmr?: TdscdmaNmrObj[];
}
const TdscdmaObj = /*@__PURE__*/ __L.at(__c19, 4) as any as S.Schema<TdscdmaObj>;
export type TdscdmaList = TdscdmaObj[];
const TdscdmaList = /*@__PURE__*/ __L.at(__c19, 5);
export type EutranCid = number;
export type TAC = number;
export type PCI = number;
export type EARFCN = number;
export interface LteLocalId {
  Pci: number;
  Earfcn: number;
}
const LteLocalId = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<LteLocalId>;
export type LteTimingAdvance = number;
export type RSRP = number;
export type RSRQ = number;
export type NRCapable = boolean;
export interface LteNmrObj {
  Pci: number;
  Earfcn: number;
  EutranCid?: number;
  Rsrp?: number;
  Rsrq?: number;
}
const LteNmrObj = /*@__PURE__*/ __L.at(__c19, 7) as any as S.Schema<LteNmrObj>;
export type LteNmrList = LteNmrObj[];
const LteNmrList = /*@__PURE__*/ __L.at(__c20, 0);
export interface LteObj {
  Mcc: number;
  Mnc: number;
  EutranCid: number;
  Tac?: number;
  LteLocalId?: LteLocalId;
  LteTimingAdvance?: number;
  Rsrp?: number;
  Rsrq?: number;
  NrCapable?: boolean;
  LteNmr?: LteNmrObj[];
}
const LteObj = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<LteObj>;
export type LteList = LteObj[];
const LteList = /*@__PURE__*/ __L.at(__c20, 2);
export type SystemId = number;
export type NetworkId = number;
export type BaseStationId = number;
export type RegistrationZone = number;
export type PnOffset = number;
export type CdmaChannel = number;
export interface CdmaLocalId {
  PnOffset: number;
  CdmaChannel: number;
}
const CdmaLocalId = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<CdmaLocalId>;
export type PilotPower = number;
export type BaseLat = number;
export type BaseLng = number;
export interface CdmaNmrObj {
  PnOffset: number;
  CdmaChannel: number;
  PilotPower?: number;
  BaseStationId?: number;
}
const CdmaNmrObj = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<CdmaNmrObj>;
export type CdmaNmrList = CdmaNmrObj[];
const CdmaNmrList = /*@__PURE__*/ __L.at(__c20, 5);
export interface CdmaObj {
  SystemId: number;
  NetworkId: number;
  BaseStationId: number;
  RegistrationZone?: number;
  CdmaLocalId?: CdmaLocalId;
  PilotPower?: number;
  BaseLat?: number;
  BaseLng?: number;
  CdmaNmr?: CdmaNmrObj[];
}
const CdmaObj = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<CdmaObj>;
export type CdmaList = CdmaObj[];
const CdmaList = /*@__PURE__*/ __L.at(__c20, 7);
export interface CellTowers {
  Gsm?: GsmObj[];
  Wcdma?: WcdmaObj[];
  Tdscdma?: TdscdmaObj[];
  Lte?: LteObj[];
  Cdma?: CdmaObj[];
}
const CellTowers = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<CellTowers>;
export type IPAddress = string;
export interface Ip {
  IpAddress: string;
}
const Ip = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<Ip>;
export type GnssNav = string;
export type GPST = number;
export type CaptureTimeAccuracy = number;
export type Coordinate = number;
export type AssistPosition = number[];
const AssistPosition = FactoryPresetFreqsList as any as S.Schema<AssistPosition>;
export type Use2DSolver = boolean;
export interface Gnss {
  Payload: string;
  CaptureTime?: number;
  CaptureTimeAccuracy?: number;
  AssistPosition?: number[];
  AssistAltitude?: number;
  Use2DSolver?: boolean;
}
const Gnss = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<Gnss>;
export interface GnssCapture {
  Payload: string;
  CaptureTime?: number;
}
const GnssCapture = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<GnssCapture>;
export type GnssCaptures = GnssCapture[];
const GnssCaptures = /*@__PURE__*/ __L.at(__c21, 4);
export interface GnssMultiFrame {
  Captures: GnssCapture[];
  CaptureTimeAccuracy?: number;
  AssistPosition?: number[];
  AssistAltitude?: number;
  Use2DSolver?: boolean;
}
const GnssMultiFrame = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<GnssMultiFrame>;
export type CreationDate = Date;
export type ConfidencePercent = number;
export interface WiFiCellular {
  ConfidencePercent?: number;
}
const WiFiCellular = /*@__PURE__*/ __L.at(__c21, 6) as any as S.Schema<WiFiCellular>;
export interface AdvancedConfiguration {
  WiFiCellular?: WiFiCellular;
}
const AdvancedConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<AdvancedConfiguration>;
export interface GetPositionEstimateRequest {
  WiFiAccessPoints?: WiFiAccessPoint[];
  CellTowers?: CellTowers;
  Ip?: Ip;
  Gnss?: Gnss;
  GnssMultiFrame?: GnssMultiFrame;
  Timestamp?: Date;
  AdvancedConfiguration?: AdvancedConfiguration;
}
const GetPositionEstimateRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<GetPositionEstimateRequest>;
export interface GetPositionEstimateResponse {
  GeoJsonPayload?: T.StreamingOutputBody;
}
const GetPositionEstimateResponse = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<GetPositionEstimateResponse>;
export type IdentifierType =
  | "PartnerAccountId"
  | "DevEui"
  | "GatewayEui"
  | "WirelessDeviceId"
  | "WirelessGatewayId"
  | (string & {});
const IdentifierType = S.String;

export type EventNotificationPartnerType = "Sidewalk" | (string & {});
const EventNotificationPartnerType = S.String;

export interface GetResourceEventConfigurationRequest {
  Identifier: string;
  IdentifierType: IdentifierType;
  PartnerType?: EventNotificationPartnerType;
}
const GetResourceEventConfigurationRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<GetResourceEventConfigurationRequest>;
export interface SidewalkEventNotificationConfigurations {
  AmazonIdEventTopic?: EventNotificationTopicStatus;
}
const SidewalkEventNotificationConfigurations = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<SidewalkEventNotificationConfigurations>;
export interface DeviceRegistrationStateEventConfiguration {
  Sidewalk?: SidewalkEventNotificationConfigurations;
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}
const DeviceRegistrationStateEventConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<DeviceRegistrationStateEventConfiguration>;
export interface ProximityEventConfiguration {
  Sidewalk?: SidewalkEventNotificationConfigurations;
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}
const ProximityEventConfiguration =
  DeviceRegistrationStateEventConfiguration as any as S.Schema<ProximityEventConfiguration>;
export interface LoRaWANJoinEventNotificationConfigurations {
  DevEuiEventTopic?: EventNotificationTopicStatus;
}
const LoRaWANJoinEventNotificationConfigurations = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<LoRaWANJoinEventNotificationConfigurations>;
export interface JoinEventConfiguration {
  LoRaWAN?: LoRaWANJoinEventNotificationConfigurations;
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}
const JoinEventConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<JoinEventConfiguration>;
export interface LoRaWANConnectionStatusEventNotificationConfigurations {
  GatewayEuiEventTopic?: EventNotificationTopicStatus;
}
const LoRaWANConnectionStatusEventNotificationConfigurations = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<LoRaWANConnectionStatusEventNotificationConfigurations>;
export interface ConnectionStatusEventConfiguration {
  LoRaWAN?: LoRaWANConnectionStatusEventNotificationConfigurations;
  WirelessGatewayIdEventTopic?: EventNotificationTopicStatus;
}
const ConnectionStatusEventConfiguration = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<ConnectionStatusEventConfiguration>;
export interface MessageDeliveryStatusEventConfiguration {
  Sidewalk?: SidewalkEventNotificationConfigurations;
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}
const MessageDeliveryStatusEventConfiguration =
  DeviceRegistrationStateEventConfiguration as any as S.Schema<MessageDeliveryStatusEventConfiguration>;
export interface GetResourceEventConfigurationResponse {
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
  Proximity?: ProximityEventConfiguration;
  Join?: JoinEventConfiguration;
  ConnectionStatus?: ConnectionStatusEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}
const GetResourceEventConfigurationResponse = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<GetResourceEventConfigurationResponse>;
export type ResourceIdentifier = string;
export type ResourceType = string;
export interface GetResourceLogLevelRequest {
  ResourceIdentifier: string;
  ResourceType: string;
}
const GetResourceLogLevelRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<GetResourceLogLevelRequest>;
export interface GetResourceLogLevelResponse {
  LogLevel?: LogLevel;
}
const GetResourceLogLevelResponse = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<GetResourceLogLevelResponse>;
export interface GetResourcePositionRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
}
const GetResourcePositionRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<GetResourcePositionRequest>;
export interface GetResourcePositionResponse {
  GeoJsonPayload?: T.StreamingOutputBody;
}
const GetResourcePositionResponse =
  GetPositionEstimateResponse as any as S.Schema<GetResourcePositionResponse>;
export type WirelessGatewayServiceType = "CUPS" | "LNS" | (string & {});
const WirelessGatewayServiceType = S.String;

export interface GetServiceEndpointRequest {
  ServiceType?: WirelessGatewayServiceType;
}
const GetServiceEndpointRequest = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<GetServiceEndpointRequest>;
export type EndPoint = string;
export type CertificatePEM = string;
export interface GetServiceEndpointResponse {
  ServiceType?: WirelessGatewayServiceType;
  ServiceEndpoint?: string;
  ServerTrust?: string;
}
const GetServiceEndpointResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<GetServiceEndpointResponse>;
export interface GetServiceProfileRequest {
  Id: string;
}
const GetServiceProfileRequest = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<GetServiceProfileRequest>;
export type UlRate = number;
export type UlBucketSize = number;
export type UlRatePolicy = string;
export type DlRate = number;
export type DlBucketSize = number;
export type DlRatePolicy = string;
export type DevStatusReqFreq = number;
export type ReportDevStatusBattery = boolean;
export type ReportDevStatusMargin = boolean;
export type DrMin = number;
export type DrMax = number;
export type ChannelMask = string;
export type HrAllowed = boolean;
export type NwkGeoLoc = boolean;
export type TargetPer = number;
export type MinGwDiversity = number;
export interface LoRaWANGetServiceProfileInfo {
  UlRate?: number;
  UlBucketSize?: number;
  UlRatePolicy?: string;
  DlRate?: number;
  DlBucketSize?: number;
  DlRatePolicy?: string;
  AddGwMetadata?: boolean;
  DevStatusReqFreq?: number;
  ReportDevStatusBattery?: boolean;
  ReportDevStatusMargin?: boolean;
  DrMin?: number;
  DrMax?: number;
  ChannelMask?: string;
  PrAllowed?: boolean;
  HrAllowed?: boolean;
  RaAllowed?: boolean;
  NwkGeoLoc?: boolean;
  TargetPer?: number;
  MinGwDiversity?: number;
  TxPowerIndexMin?: number;
  TxPowerIndexMax?: number;
  NbTransMin?: number;
  NbTransMax?: number;
}
const LoRaWANGetServiceProfileInfo = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<LoRaWANGetServiceProfileInfo>;
export interface GetServiceProfileResponse {
  Arn?: string;
  Name?: string;
  Id?: string;
  LoRaWAN?: LoRaWANGetServiceProfileInfo;
}
const GetServiceProfileResponse = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<GetServiceProfileResponse>;
export type WirelessDeviceIdType =
  | "WirelessDeviceId"
  | "DevEui"
  | "ThingName"
  | "SidewalkManufacturingSn"
  | (string & {});
const WirelessDeviceIdType = S.String;

export interface GetWirelessDeviceRequest {
  Identifier: string;
  IdentifierType: WirelessDeviceIdType;
}
const GetWirelessDeviceRequest = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<GetWirelessDeviceRequest>;
export type ThingName = string;
export type SidewalkId = string;
export type SigningAlg = "Ed25519" | "P256r1" | (string & {});
const SigningAlg = S.String;

export type CertificateValue = string;
export interface CertificateList {
  SigningAlg: SigningAlg;
  Value: string;
}
const CertificateList = /*@__PURE__*/ __L.at(__c24, 3) as any as S.Schema<CertificateList>;
export type DeviceCertificateList = CertificateList[];
const DeviceCertificateList = /*@__PURE__*/ __L.at(__c24, 4);
export type PrivateKeysList = CertificateList[];
const PrivateKeysList = DeviceCertificateList as any as S.Schema<PrivateKeysList>;
export type WirelessDeviceSidewalkStatus =
  | "PROVISIONED"
  | "REGISTERED"
  | "ACTIVATED"
  | "UNKNOWN"
  | (string & {});
const WirelessDeviceSidewalkStatus = S.String;

export interface SidewalkDevice {
  AmazonId?: string;
  SidewalkId?: string;
  SidewalkManufacturingSn?: string;
  DeviceCertificates?: CertificateList[];
  PrivateKeys?: CertificateList[];
  DeviceProfileId?: string;
  CertificateId?: string;
  Status?: WirelessDeviceSidewalkStatus;
  Positioning?: SidewalkPositioning;
}
const SidewalkDevice = /*@__PURE__*/ __L.at(__c24, 5) as any as S.Schema<SidewalkDevice>;
export interface GetWirelessDeviceResponse {
  Type?: WirelessDeviceType;
  Name?: string;
  Description?: string;
  DestinationName?: string;
  Id?: string;
  Arn?: string;
  ThingName?: string;
  ThingArn?: string;
  LoRaWAN?: LoRaWANDevice;
  Sidewalk?: SidewalkDevice;
  Positioning?: PositioningConfigStatus;
}
const GetWirelessDeviceResponse = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<GetWirelessDeviceResponse>;
export interface GetWirelessDeviceImportTaskRequest {
  Id: string;
}
const GetWirelessDeviceImportTaskRequest = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<GetWirelessDeviceImportTaskRequest>;
export type ImportTaskArn = string;
export type DeviceCreationFile = string;
export type DeviceCreationFileList = string[];
const DeviceCreationFileList = GatewayListMulticast as any as S.Schema<DeviceCreationFileList>;
export type Role = string;
export interface SidewalkGetStartImportInfo {
  DeviceCreationFileList?: string[];
  Role?: string;
  Positioning?: SidewalkPositioning;
}
const SidewalkGetStartImportInfo = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<SidewalkGetStartImportInfo>;
export type CreationTime = Date;
export type ImportTaskStatus =
  | "INITIALIZING"
  | "INITIALIZED"
  | "PENDING"
  | "COMPLETE"
  | "FAILED"
  | "DELETING"
  | (string & {});
const ImportTaskStatus = S.String;

export type StatusReason = string;
export type ImportedWirelessDeviceCount = number;
export interface GetWirelessDeviceImportTaskResponse {
  Id?: string;
  Arn?: string;
  DestinationName?: string;
  Positioning?: PositioningConfigStatus;
  Sidewalk?: SidewalkGetStartImportInfo;
  CreationTime?: Date;
  Status?: ImportTaskStatus;
  StatusReason?: string;
  InitializedImportedDeviceCount?: number;
  PendingImportedDeviceCount?: number;
  OnboardedImportedDeviceCount?: number;
  FailedImportedDeviceCount?: number;
}
const GetWirelessDeviceImportTaskResponse = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<GetWirelessDeviceImportTaskResponse>;
export interface GetWirelessDeviceStatisticsRequest {
  WirelessDeviceId: string;
}
const GetWirelessDeviceStatisticsRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<GetWirelessDeviceStatisticsRequest>;
export interface LoRaWANGatewayMetadata {
  GatewayEui?: string;
  Snr?: number;
  Rssi?: number;
}
const LoRaWANGatewayMetadata = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<LoRaWANGatewayMetadata>;
export type LoRaWANGatewayMetadataList = LoRaWANGatewayMetadata[];
const LoRaWANGatewayMetadataList = /*@__PURE__*/ __L.at(__c25, 4);
export type ProviderNetId = string;
export type Id = string;
export type DlAllowed = boolean;
export interface LoRaWANPublicGatewayMetadata {
  ProviderNetId?: string;
  Id?: string;
  Rssi?: number;
  Snr?: number;
  RfRegion?: string;
  DlAllowed?: boolean;
}
const LoRaWANPublicGatewayMetadata = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<LoRaWANPublicGatewayMetadata>;
export type LoRaWANPublicGatewayMetadataList = LoRaWANPublicGatewayMetadata[];
const LoRaWANPublicGatewayMetadataList = /*@__PURE__*/ __L.at(__c25, 6);
export interface LoRaWANDeviceMetadata {
  DevEui?: string;
  FPort?: number;
  DataRate?: number;
  Frequency?: number;
  Timestamp?: string;
  Gateways?: LoRaWANGatewayMetadata[];
  PublicGateways?: LoRaWANPublicGatewayMetadata[];
}
const LoRaWANDeviceMetadata = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<LoRaWANDeviceMetadata>;
export type BatteryLevel = "normal" | "low" | "critical" | (string & {});
const BatteryLevel = S.String;

export type Event = "discovered" | "lost" | "ack" | "nack" | "passthrough" | (string & {});
const Event = S.String;

export type DeviceState =
  | "Provisioned"
  | "RegisteredNotSeen"
  | "RegisteredReachable"
  | "RegisteredUnreachable"
  | (string & {});
const DeviceState = S.String;

export interface SidewalkDeviceMetadata {
  Rssi?: number;
  BatteryLevel?: BatteryLevel;
  Event?: Event;
  DeviceState?: DeviceState;
}
const SidewalkDeviceMetadata = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<SidewalkDeviceMetadata>;
export interface GetWirelessDeviceStatisticsResponse {
  WirelessDeviceId?: string;
  LastUplinkReceivedAt?: string;
  LoRaWAN?: LoRaWANDeviceMetadata;
  Sidewalk?: SidewalkDeviceMetadata;
}
const GetWirelessDeviceStatisticsResponse = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<GetWirelessDeviceStatisticsResponse>;
export type WirelessGatewayIdType =
  | "GatewayEui"
  | "WirelessGatewayId"
  | "ThingName"
  | (string & {});
const WirelessGatewayIdType = S.String;

export interface GetWirelessGatewayRequest {
  Identifier: string;
  IdentifierType: WirelessGatewayIdType;
}
const GetWirelessGatewayRequest = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<GetWirelessGatewayRequest>;
export interface GetWirelessGatewayResponse {
  Name?: string;
  Id?: string;
  Description?: string;
  LoRaWAN?: LoRaWANGateway;
  Arn?: string;
  ThingName?: string;
  ThingArn?: string;
}
const GetWirelessGatewayResponse = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<GetWirelessGatewayResponse>;
export interface GetWirelessGatewayCertificateRequest {
  Id: string;
}
const GetWirelessGatewayCertificateRequest = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<GetWirelessGatewayCertificateRequest>;
export interface GetWirelessGatewayCertificateResponse {
  IotCertificateId?: string;
  LoRaWANNetworkServerCertificateId?: string;
}
const GetWirelessGatewayCertificateResponse = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<GetWirelessGatewayCertificateResponse>;
export interface GetWirelessGatewayFirmwareInformationRequest {
  Id: string;
}
const GetWirelessGatewayFirmwareInformationRequest = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<GetWirelessGatewayFirmwareInformationRequest>;
export interface LoRaWANGatewayCurrentVersion {
  CurrentVersion?: LoRaWANGatewayVersion;
}
const LoRaWANGatewayCurrentVersion = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<LoRaWANGatewayCurrentVersion>;
export interface GetWirelessGatewayFirmwareInformationResponse {
  LoRaWAN?: LoRaWANGatewayCurrentVersion;
}
const GetWirelessGatewayFirmwareInformationResponse = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<GetWirelessGatewayFirmwareInformationResponse>;
export interface GetWirelessGatewayStatisticsRequest {
  WirelessGatewayId: string;
}
const GetWirelessGatewayStatisticsRequest = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<GetWirelessGatewayStatisticsRequest>;
export type ConnectionStatus = "Connected" | "Disconnected" | (string & {});
const ConnectionStatus = S.String;

export interface GetWirelessGatewayStatisticsResponse {
  WirelessGatewayId?: string;
  LastUplinkReceivedAt?: string;
  ConnectionStatus?: ConnectionStatus;
}
const GetWirelessGatewayStatisticsResponse = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<GetWirelessGatewayStatisticsResponse>;
export interface GetWirelessGatewayTaskRequest {
  Id: string;
}
const GetWirelessGatewayTaskRequest = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<GetWirelessGatewayTaskRequest>;
export interface GetWirelessGatewayTaskResponse {
  WirelessGatewayId?: string;
  WirelessGatewayTaskDefinitionId?: string;
  LastUplinkReceivedAt?: string;
  TaskCreatedAt?: string;
  Status?: WirelessGatewayTaskStatus;
}
const GetWirelessGatewayTaskResponse = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<GetWirelessGatewayTaskResponse>;
export interface GetWirelessGatewayTaskDefinitionRequest {
  Id: string;
}
const GetWirelessGatewayTaskDefinitionRequest = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<GetWirelessGatewayTaskDefinitionRequest>;
export interface GetWirelessGatewayTaskDefinitionResponse {
  AutoCreateTasks?: boolean;
  Name?: string;
  Update?: UpdateWirelessGatewayTaskCreate;
  Arn?: string;
}
const GetWirelessGatewayTaskDefinitionResponse = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<GetWirelessGatewayTaskDefinitionResponse>;
export type MaxResults = number;
export type NextToken = string;
export interface ListDestinationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListDestinationsRequest = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<ListDestinationsRequest>;
export interface Destinations {
  Arn?: string;
  Name?: string;
  ExpressionType?: ExpressionType;
  Expression?: string;
  Description?: string;
  RoleArn?: string;
}
const Destinations = /*@__PURE__*/ __L.at(__c28, 0) as any as S.Schema<Destinations>;
export type DestinationList = Destinations[];
const DestinationList = /*@__PURE__*/ __L.at(__c28, 1);
export interface ListDestinationsResponse {
  NextToken?: string;
  DestinationList?: Destinations[];
}
const ListDestinationsResponse = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<ListDestinationsResponse>;
export type DeviceProfileType = "Sidewalk" | "LoRaWAN" | (string & {});
const DeviceProfileType = S.String;

export interface ListDeviceProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
  DeviceProfileType?: DeviceProfileType;
}
const ListDeviceProfilesRequest = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<ListDeviceProfilesRequest>;
export interface DeviceProfile {
  Arn?: string;
  Name?: string;
  Id?: string;
}
const DeviceProfile = /*@__PURE__*/ __L.at(__c28, 4) as any as S.Schema<DeviceProfile>;
export type DeviceProfileList = DeviceProfile[];
const DeviceProfileList = /*@__PURE__*/ __L.at(__c28, 5);
export interface ListDeviceProfilesResponse {
  NextToken?: string;
  DeviceProfileList?: DeviceProfile[];
}
const ListDeviceProfilesResponse = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<ListDeviceProfilesResponse>;
export type OnboardStatus = "INITIALIZED" | "PENDING" | "ONBOARDED" | "FAILED" | (string & {});
const OnboardStatus = S.String;

export interface ListDevicesForWirelessDeviceImportTaskRequest {
  Id: string;
  MaxResults?: number;
  NextToken?: string;
  Status?: OnboardStatus;
}
const ListDevicesForWirelessDeviceImportTaskRequest = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<ListDevicesForWirelessDeviceImportTaskRequest>;
export interface SidewalkListDevicesForImportInfo {
  Positioning?: SidewalkPositioning;
}
const SidewalkListDevicesForImportInfo = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<SidewalkListDevicesForImportInfo>;
export type OnboardStatusReason = string;
export type LastUpdateTime = Date;
export interface ImportedSidewalkDevice {
  SidewalkManufacturingSn?: string;
  OnboardingStatus?: OnboardStatus;
  OnboardingStatusReason?: string;
  LastUpdateTime?: Date;
}
const ImportedSidewalkDevice = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<ImportedSidewalkDevice>;
export interface ImportedWirelessDevice {
  Sidewalk?: ImportedSidewalkDevice;
}
const ImportedWirelessDevice = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<ImportedWirelessDevice>;
export type ImportedWirelessDeviceList = ImportedWirelessDevice[];
const ImportedWirelessDeviceList = /*@__PURE__*/ __L.at(__c29, 3);
export interface ListDevicesForWirelessDeviceImportTaskResponse {
  NextToken?: string;
  DestinationName?: string;
  Positioning?: PositioningConfigStatus;
  Sidewalk?: SidewalkListDevicesForImportInfo;
  ImportedWirelessDeviceList?: ImportedWirelessDevice[];
}
const ListDevicesForWirelessDeviceImportTaskResponse = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<ListDevicesForWirelessDeviceImportTaskResponse>;
export type EventNotificationResourceType =
  | "SidewalkAccount"
  | "WirelessDevice"
  | "WirelessGateway"
  | (string & {});
const EventNotificationResourceType = S.String;

export interface ListEventConfigurationsRequest {
  ResourceType: EventNotificationResourceType;
  MaxResults?: number;
  NextToken?: string;
}
const ListEventConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<ListEventConfigurationsRequest>;
export interface EventNotificationItemConfigurations {
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
  Proximity?: ProximityEventConfiguration;
  Join?: JoinEventConfiguration;
  ConnectionStatus?: ConnectionStatusEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}
const EventNotificationItemConfigurations =
  GetResourceEventConfigurationResponse as any as S.Schema<EventNotificationItemConfigurations>;
export interface EventConfigurationItem {
  Identifier?: string;
  IdentifierType?: IdentifierType;
  PartnerType?: EventNotificationPartnerType;
  Events?: EventNotificationItemConfigurations;
}
const EventConfigurationItem = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<EventConfigurationItem>;
export type EventConfigurationsList = EventConfigurationItem[];
const EventConfigurationsList = /*@__PURE__*/ __L.at(__c29, 7);
export interface ListEventConfigurationsResponse {
  NextToken?: string;
  EventConfigurationsList?: EventConfigurationItem[];
}
const ListEventConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<ListEventConfigurationsResponse>;
export interface ListFuotaTasksRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListFuotaTasksRequest = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<ListFuotaTasksRequest>;
export interface FuotaTask {
  Id?: string;
  Arn?: string;
  Name?: string;
}
const FuotaTask = /*@__PURE__*/ __L.at(__c30, 2) as any as S.Schema<FuotaTask>;
export type FuotaTaskList = FuotaTask[];
const FuotaTaskList = /*@__PURE__*/ __L.at(__c30, 3);
export interface ListFuotaTasksResponse {
  NextToken?: string;
  FuotaTaskList?: FuotaTask[];
}
const ListFuotaTasksResponse = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<ListFuotaTasksResponse>;
export interface ListMulticastGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListMulticastGroupsRequest = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<ListMulticastGroupsRequest>;
export interface MulticastGroup {
  Id?: string;
  Arn?: string;
  Name?: string;
}
export type MulticastGroupList = MulticastGroup[];
const MulticastGroupList = FuotaTaskList as any as S.Schema<MulticastGroupList>;
export interface ListMulticastGroupsResponse {
  NextToken?: string;
  MulticastGroupList?: MulticastGroup[];
}
const ListMulticastGroupsResponse = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<ListMulticastGroupsResponse>;
export interface ListMulticastGroupsByFuotaTaskRequest {
  Id: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListMulticastGroupsByFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<ListMulticastGroupsByFuotaTaskRequest>;
export interface MulticastGroupByFuotaTask {
  Id?: string;
}
const MulticastGroupByFuotaTask = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<MulticastGroupByFuotaTask>;
export type MulticastGroupListByFuotaTask = MulticastGroupByFuotaTask[];
const MulticastGroupListByFuotaTask = /*@__PURE__*/ __L.at(__c31, 1);
export interface ListMulticastGroupsByFuotaTaskResponse {
  NextToken?: string;
  MulticastGroupList?: MulticastGroupByFuotaTask[];
}
const ListMulticastGroupsByFuotaTaskResponse = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<ListMulticastGroupsByFuotaTaskResponse>;
export interface ListNetworkAnalyzerConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListNetworkAnalyzerConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<ListNetworkAnalyzerConfigurationsRequest>;
export interface NetworkAnalyzerConfigurations {
  Arn?: string;
  Name?: string;
}
const NetworkAnalyzerConfigurations =
  CreateDestinationResponse as any as S.Schema<NetworkAnalyzerConfigurations>;
export type NetworkAnalyzerConfigurationList = NetworkAnalyzerConfigurations[];
const NetworkAnalyzerConfigurationList = /*@__PURE__*/ __L.at(__c31, 4);
export interface ListNetworkAnalyzerConfigurationsResponse {
  NextToken?: string;
  NetworkAnalyzerConfigurationList?: NetworkAnalyzerConfigurations[];
}
const ListNetworkAnalyzerConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<ListNetworkAnalyzerConfigurationsResponse>;
export interface ListPartnerAccountsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListPartnerAccountsRequest = /*@__PURE__*/ __L.at(
  __c31,
  6,
) as any as S.Schema<ListPartnerAccountsRequest>;
export type SidewalkAccountList = SidewalkAccountInfoWithFingerprint[];
const SidewalkAccountList = /*@__PURE__*/ __L.at(__c31, 7);
export interface ListPartnerAccountsResponse {
  NextToken?: string;
  Sidewalk?: SidewalkAccountInfoWithFingerprint[];
}
const ListPartnerAccountsResponse = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<ListPartnerAccountsResponse>;
export interface ListPositionConfigurationsRequest {
  ResourceType?: PositionResourceType;
  MaxResults?: number;
  NextToken?: string;
}
const ListPositionConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<ListPositionConfigurationsRequest>;
export interface PositionConfigurationItem {
  ResourceIdentifier?: string;
  ResourceType?: PositionResourceType;
  Solvers?: PositionSolverDetails;
  Destination?: string;
}
const PositionConfigurationItem = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<PositionConfigurationItem>;
export type PositionConfigurationList = PositionConfigurationItem[];
const PositionConfigurationList = /*@__PURE__*/ __L.at(__c32, 3);
export interface ListPositionConfigurationsResponse {
  PositionConfigurationList?: PositionConfigurationItem[];
  NextToken?: string;
}
const ListPositionConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<ListPositionConfigurationsResponse>;
export interface ListQueuedMessagesRequest {
  Id: string;
  NextToken?: string;
  MaxResults?: number;
  WirelessDeviceType?: WirelessDeviceType;
}
const ListQueuedMessagesRequest = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<ListQueuedMessagesRequest>;
export type TransmitMode = number;
export type DownlinkMode = "SEQUENTIAL" | "CONCURRENT" | "USING_UPLINK_GATEWAY" | (string & {});
const DownlinkMode = S.String;

export type DownlinkFrequency = number;
export interface GatewayListItem {
  GatewayId: string;
  DownlinkFrequency: number;
}
const GatewayListItem = /*@__PURE__*/ __L.at(__c32, 6) as any as S.Schema<GatewayListItem>;
export type GatewayList = GatewayListItem[];
const GatewayList = /*@__PURE__*/ __L.at(__c32, 7);
export type TransmissionInterval = number;
export interface ParticipatingGateways {
  DownlinkMode: DownlinkMode;
  GatewayList: GatewayListItem[];
  TransmissionInterval: number;
}
const ParticipatingGateways = /*@__PURE__*/ __L.at(
  __c33,
  0,
) as any as S.Schema<ParticipatingGateways>;
export interface LoRaWANSendDataToDevice {
  FPort?: number;
  ParticipatingGateways?: ParticipatingGateways;
}
const LoRaWANSendDataToDevice = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<LoRaWANSendDataToDevice>;
export interface DownlinkQueueMessage {
  MessageId?: string;
  TransmitMode?: number;
  ReceivedAt?: string;
  LoRaWAN?: LoRaWANSendDataToDevice;
}
const DownlinkQueueMessage = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<DownlinkQueueMessage>;
export type DownlinkQueueMessagesList = DownlinkQueueMessage[];
const DownlinkQueueMessagesList = /*@__PURE__*/ __L.at(__c33, 3);
export interface ListQueuedMessagesResponse {
  NextToken?: string;
  DownlinkQueueMessagesList?: DownlinkQueueMessage[];
}
const ListQueuedMessagesResponse = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<ListQueuedMessagesResponse>;
export interface ListServiceProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListServiceProfilesRequest = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<ListServiceProfilesRequest>;
export interface ServiceProfile {
  Arn?: string;
  Name?: string;
  Id?: string;
}
export type ServiceProfileList = ServiceProfile[];
const ServiceProfileList = DeviceProfileList as any as S.Schema<ServiceProfileList>;
export interface ListServiceProfilesResponse {
  NextToken?: string;
  ServiceProfileList?: ServiceProfile[];
}
const ListServiceProfilesResponse = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<ListServiceProfilesResponse>;
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListWirelessDeviceImportTasksRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListWirelessDeviceImportTasksRequest = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<ListWirelessDeviceImportTasksRequest>;
export interface WirelessDeviceImportTask {
  Id?: string;
  Arn?: string;
  DestinationName?: string;
  Positioning?: PositioningConfigStatus;
  Sidewalk?: SidewalkGetStartImportInfo;
  CreationTime?: Date;
  Status?: ImportTaskStatus;
  StatusReason?: string;
  InitializedImportedDeviceCount?: number;
  PendingImportedDeviceCount?: number;
  OnboardedImportedDeviceCount?: number;
  FailedImportedDeviceCount?: number;
}
const WirelessDeviceImportTask = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<WirelessDeviceImportTask>;
export type WirelessDeviceImportTaskList = WirelessDeviceImportTask[];
const WirelessDeviceImportTaskList = /*@__PURE__*/ __L.at(__c34, 3);
export interface ListWirelessDeviceImportTasksResponse {
  NextToken?: string;
  WirelessDeviceImportTaskList?: WirelessDeviceImportTask[];
}
const ListWirelessDeviceImportTasksResponse = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<ListWirelessDeviceImportTasksResponse>;
export interface ListWirelessDevicesRequest {
  MaxResults?: number;
  NextToken?: string;
  DestinationName?: string;
  DeviceProfileId?: string;
  ServiceProfileId?: string;
  WirelessDeviceType?: WirelessDeviceType;
  FuotaTaskId?: string;
  MulticastGroupId?: string;
}
const ListWirelessDevicesRequest = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<ListWirelessDevicesRequest>;
export interface LoRaWANListDevice {
  DevEui?: string;
}
const LoRaWANListDevice = /*@__PURE__*/ __L.at(__c34, 6) as any as S.Schema<LoRaWANListDevice>;
export interface SidewalkListDevice {
  AmazonId?: string;
  SidewalkId?: string;
  SidewalkManufacturingSn?: string;
  DeviceCertificates?: CertificateList[];
  DeviceProfileId?: string;
  Status?: WirelessDeviceSidewalkStatus;
  Positioning?: SidewalkPositioning;
}
const SidewalkListDevice = /*@__PURE__*/ __L.at(__c34, 7) as any as S.Schema<SidewalkListDevice>;
export type FuotaDeviceStatus =
  | "Initial"
  | "Package_Not_Supported"
  | "FragAlgo_unsupported"
  | "Not_enough_memory"
  | "FragIndex_unsupported"
  | "Wrong_descriptor"
  | "SessionCnt_replay"
  | "MissingFrag"
  | "MemoryError"
  | "MICError"
  | "Successful"
  | "Device_exist_in_conflict_fuota_task"
  | (string & {});
const FuotaDeviceStatus = S.String;

export type MulticastDeviceStatus = string;
export type McGroupId = number;
export interface WirelessDeviceStatistics {
  Arn?: string;
  Id?: string;
  Type?: WirelessDeviceType;
  Name?: string;
  DestinationName?: string;
  LastUplinkReceivedAt?: string;
  LoRaWAN?: LoRaWANListDevice;
  Sidewalk?: SidewalkListDevice;
  FuotaDeviceStatus?: FuotaDeviceStatus;
  MulticastDeviceStatus?: string;
  McGroupId?: number;
  Positioning?: PositioningConfigStatus;
}
const WirelessDeviceStatistics = /*@__PURE__*/ __L.at(
  __c35,
  0,
) as any as S.Schema<WirelessDeviceStatistics>;
export type WirelessDeviceStatisticsList = WirelessDeviceStatistics[];
const WirelessDeviceStatisticsList = /*@__PURE__*/ __L.at(__c35, 1);
export interface ListWirelessDevicesResponse {
  NextToken?: string;
  WirelessDeviceList?: WirelessDeviceStatistics[];
}
const ListWirelessDevicesResponse = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<ListWirelessDevicesResponse>;
export interface ListWirelessGatewaysRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListWirelessGatewaysRequest = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<ListWirelessGatewaysRequest>;
export interface WirelessGatewayStatistics {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANGateway;
  LastUplinkReceivedAt?: string;
}
const WirelessGatewayStatistics = /*@__PURE__*/ __L.at(
  __c35,
  4,
) as any as S.Schema<WirelessGatewayStatistics>;
export type WirelessGatewayStatisticsList = WirelessGatewayStatistics[];
const WirelessGatewayStatisticsList = /*@__PURE__*/ __L.at(__c35, 5);
export interface ListWirelessGatewaysResponse {
  NextToken?: string;
  WirelessGatewayList?: WirelessGatewayStatistics[];
}
const ListWirelessGatewaysResponse = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<ListWirelessGatewaysResponse>;
export type WirelessGatewayTaskDefinitionType = "UPDATE" | (string & {});
const WirelessGatewayTaskDefinitionType = S.String;

export interface ListWirelessGatewayTaskDefinitionsRequest {
  MaxResults?: number;
  NextToken?: string;
  TaskDefinitionType?: WirelessGatewayTaskDefinitionType;
}
const ListWirelessGatewayTaskDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<ListWirelessGatewayTaskDefinitionsRequest>;
export interface LoRaWANUpdateGatewayTaskEntry {
  CurrentVersion?: LoRaWANGatewayVersion;
  UpdateVersion?: LoRaWANGatewayVersion;
}
const LoRaWANUpdateGatewayTaskEntry = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<LoRaWANUpdateGatewayTaskEntry>;
export interface UpdateWirelessGatewayTaskEntry {
  Id?: string;
  LoRaWAN?: LoRaWANUpdateGatewayTaskEntry;
  Arn?: string;
}
const UpdateWirelessGatewayTaskEntry = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<UpdateWirelessGatewayTaskEntry>;
export type WirelessGatewayTaskDefinitionList = UpdateWirelessGatewayTaskEntry[];
const WirelessGatewayTaskDefinitionList = /*@__PURE__*/ __L.at(__c36, 2);
export interface ListWirelessGatewayTaskDefinitionsResponse {
  NextToken?: string;
  TaskDefinitions?: UpdateWirelessGatewayTaskEntry[];
}
const ListWirelessGatewayTaskDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<ListWirelessGatewayTaskDefinitionsResponse>;
export interface SemtechGnssConfiguration {
  Status: PositionConfigurationStatus;
  Fec: PositionConfigurationFec;
}
const SemtechGnssConfiguration = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<SemtechGnssConfiguration>;
export interface PositionSolverConfigurations {
  SemtechGnss?: SemtechGnssConfiguration;
}
const PositionSolverConfigurations = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<PositionSolverConfigurations>;
export interface PutPositionConfigurationRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
  Solvers?: PositionSolverConfigurations;
  Destination?: string;
}
const PutPositionConfigurationRequest = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<PutPositionConfigurationRequest>;
export interface PutPositionConfigurationResponse {}
const PutPositionConfigurationResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<PutPositionConfigurationResponse>;
export interface PutResourceLogLevelRequest {
  ResourceIdentifier: string;
  ResourceType: string;
  LogLevel: LogLevel;
}
const PutResourceLogLevelRequest = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<PutResourceLogLevelRequest>;
export interface PutResourceLogLevelResponse {}
const PutResourceLogLevelResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<PutResourceLogLevelResponse>;
export interface ResetAllResourceLogLevelsRequest {}
const ResetAllResourceLogLevelsRequest = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<ResetAllResourceLogLevelsRequest>;
export interface ResetAllResourceLogLevelsResponse {}
const ResetAllResourceLogLevelsResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<ResetAllResourceLogLevelsResponse>;
export interface ResetResourceLogLevelRequest {
  ResourceIdentifier: string;
  ResourceType: string;
}
const ResetResourceLogLevelRequest = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<ResetResourceLogLevelRequest>;
export interface ResetResourceLogLevelResponse {}
const ResetResourceLogLevelResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<ResetResourceLogLevelResponse>;
export type PayloadData = string;
export interface LoRaWANMulticastMetadata {
  FPort?: number;
}
const LoRaWANMulticastMetadata = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<LoRaWANMulticastMetadata>;
export interface MulticastWirelessMetadata {
  LoRaWAN?: LoRaWANMulticastMetadata;
}
const MulticastWirelessMetadata = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<MulticastWirelessMetadata>;
export interface SendDataToMulticastGroupRequest {
  Id: string;
  PayloadData: string;
  WirelessMetadata: MulticastWirelessMetadata;
}
const SendDataToMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<SendDataToMulticastGroupRequest>;
export type MulticastGroupMessageId = string;
export interface SendDataToMulticastGroupResponse {
  MessageId?: string;
}
const SendDataToMulticastGroupResponse = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<SendDataToMulticastGroupResponse>;
export type Seq = number;
export type MessageType =
  | "CUSTOM_COMMAND_ID_NOTIFY"
  | "CUSTOM_COMMAND_ID_GET"
  | "CUSTOM_COMMAND_ID_SET"
  | "CUSTOM_COMMAND_ID_RESP"
  | (string & {});
const MessageType = S.String;

export type AckModeRetryDurationSecs = number;
export interface SidewalkSendDataToDevice {
  Seq?: number;
  MessageType?: MessageType;
  AckModeRetryDurationSecs?: number;
}
const SidewalkSendDataToDevice = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<SidewalkSendDataToDevice>;
export interface WirelessMetadata {
  LoRaWAN?: LoRaWANSendDataToDevice;
  Sidewalk?: SidewalkSendDataToDevice;
}
const WirelessMetadata = /*@__PURE__*/ __L.at(__c37, 7) as any as S.Schema<WirelessMetadata>;
export interface SendDataToWirelessDeviceRequest {
  Id: string;
  TransmitMode: number;
  PayloadData: string;
  WirelessMetadata?: WirelessMetadata;
}
const SendDataToWirelessDeviceRequest = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<SendDataToWirelessDeviceRequest>;
export interface SendDataToWirelessDeviceResponse {
  MessageId?: string;
}
const SendDataToWirelessDeviceResponse =
  SendDataToMulticastGroupResponse as any as S.Schema<SendDataToWirelessDeviceResponse>;
export type QueryString = string;
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  Id: string;
  QueryString?: string;
  Tags?: Tag[];
}
const StartBulkAssociateWirelessDeviceWithMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<StartBulkAssociateWirelessDeviceWithMulticastGroupRequest>;
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {}
const StartBulkAssociateWirelessDeviceWithMulticastGroupResponse = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<StartBulkAssociateWirelessDeviceWithMulticastGroupResponse>;
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  Id: string;
  QueryString?: string;
  Tags?: Tag[];
}
const StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest>;
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {}
const StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse>;
export interface LoRaWANStartFuotaTask {
  StartTime?: Date;
}
const LoRaWANStartFuotaTask = /*@__PURE__*/ __L.at(
  __c38,
  5,
) as any as S.Schema<LoRaWANStartFuotaTask>;
export interface StartFuotaTaskRequest {
  Id: string;
  LoRaWAN?: LoRaWANStartFuotaTask;
}
const StartFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c38,
  6,
) as any as S.Schema<StartFuotaTaskRequest>;
export interface StartFuotaTaskResponse {}
const StartFuotaTaskResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<StartFuotaTaskResponse>;
export interface StartMulticastGroupSessionRequest {
  Id: string;
  LoRaWAN: LoRaWANMulticastSession;
}
const StartMulticastGroupSessionRequest = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<StartMulticastGroupSessionRequest>;
export interface StartMulticastGroupSessionResponse {}
const StartMulticastGroupSessionResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<StartMulticastGroupSessionResponse>;
export type DeviceName = string;
export interface SidewalkSingleStartImportInfo {
  SidewalkManufacturingSn?: string;
  Positioning?: SidewalkPositioning;
}
const SidewalkSingleStartImportInfo = /*@__PURE__*/ __L.at(
  __c39,
  0,
) as any as S.Schema<SidewalkSingleStartImportInfo>;
export interface StartSingleWirelessDeviceImportTaskRequest {
  DestinationName: string;
  ClientRequestToken?: string;
  DeviceName?: string;
  Tags?: Tag[];
  Positioning?: PositioningConfigStatus;
  Sidewalk: SidewalkSingleStartImportInfo;
}
const StartSingleWirelessDeviceImportTaskRequest = /*@__PURE__*/ __L.at(
  __c39,
  1,
) as any as S.Schema<StartSingleWirelessDeviceImportTaskRequest>;
export interface StartSingleWirelessDeviceImportTaskResponse {
  Id?: string;
  Arn?: string;
}
const StartSingleWirelessDeviceImportTaskResponse =
  CreateWirelessGatewayTaskDefinitionResponse as any as S.Schema<StartSingleWirelessDeviceImportTaskResponse>;
export interface SidewalkStartImportInfo {
  DeviceCreationFile?: string;
  Role?: string;
  Positioning?: SidewalkPositioning;
}
const SidewalkStartImportInfo = /*@__PURE__*/ __L.at(
  __c39,
  2,
) as any as S.Schema<SidewalkStartImportInfo>;
export interface StartWirelessDeviceImportTaskRequest {
  DestinationName: string;
  ClientRequestToken?: string;
  Tags?: Tag[];
  Positioning?: PositioningConfigStatus;
  Sidewalk: SidewalkStartImportInfo;
}
const StartWirelessDeviceImportTaskRequest = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<StartWirelessDeviceImportTaskRequest>;
export interface StartWirelessDeviceImportTaskResponse {
  Id?: string;
  Arn?: string;
}
const StartWirelessDeviceImportTaskResponse =
  CreateWirelessGatewayTaskDefinitionResponse as any as S.Schema<StartWirelessDeviceImportTaskResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c39, 4) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = SidewalkCreateDeviceProfile as any as S.Schema<TagResourceResponse>;
export interface TestWirelessDeviceRequest {
  Id: string;
}
const TestWirelessDeviceRequest = /*@__PURE__*/ __L.at(
  __c39,
  5,
) as any as S.Schema<TestWirelessDeviceRequest>;
export type Result = string;
export interface TestWirelessDeviceResponse {
  Result?: string;
}
const TestWirelessDeviceResponse = /*@__PURE__*/ __L.at(
  __c39,
  6,
) as any as S.Schema<TestWirelessDeviceResponse>;
export type TagKeyList = string[];
const TagKeyList = GatewayListMulticast as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = SidewalkCreateDeviceProfile as any as S.Schema<UntagResourceResponse>;
export interface UpdateDestinationRequest {
  Name: string;
  ExpressionType?: ExpressionType;
  Expression?: string;
  Description?: string;
  RoleArn?: string;
}
const UpdateDestinationRequest = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<UpdateDestinationRequest>;
export interface UpdateDestinationResponse {}
const UpdateDestinationResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<UpdateDestinationResponse>;
export interface UpdateEventConfigurationByResourceTypesRequest {
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;
  Proximity?: ProximityResourceTypeEventConfiguration;
  Join?: JoinResourceTypeEventConfiguration;
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}
const UpdateEventConfigurationByResourceTypesRequest = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<UpdateEventConfigurationByResourceTypesRequest>;
export interface UpdateEventConfigurationByResourceTypesResponse {}
const UpdateEventConfigurationByResourceTypesResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<UpdateEventConfigurationByResourceTypesResponse>;
export interface UpdateFuotaTaskRequest {
  Id: string;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANFuotaTask;
  FirmwareUpdateImage?: string;
  FirmwareUpdateRole?: string;
  RedundancyPercent?: number;
  FragmentSizeBytes?: number;
  FragmentIntervalMS?: number;
  Descriptor?: string;
}
const UpdateFuotaTaskRequest = /*@__PURE__*/ __L.at(
  __c40,
  2,
) as any as S.Schema<UpdateFuotaTaskRequest>;
export interface UpdateFuotaTaskResponse {}
const UpdateFuotaTaskResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<UpdateFuotaTaskResponse>;
export interface UpdateLogLevelsByResourceTypesRequest {
  DefaultLogLevel?: LogLevel;
  FuotaTaskLogOptions?: FuotaTaskLogOption[];
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[];
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[];
}
const UpdateLogLevelsByResourceTypesRequest = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<UpdateLogLevelsByResourceTypesRequest>;
export interface UpdateLogLevelsByResourceTypesResponse {}
const UpdateLogLevelsByResourceTypesResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<UpdateLogLevelsByResourceTypesResponse>;
export interface UpdateMetricConfigurationRequest {
  SummaryMetric?: SummaryMetricConfiguration;
}
const UpdateMetricConfigurationRequest = /*@__PURE__*/ __L.at(
  __c40,
  4,
) as any as S.Schema<UpdateMetricConfigurationRequest>;
export interface UpdateMetricConfigurationResponse {}
const UpdateMetricConfigurationResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<UpdateMetricConfigurationResponse>;
export interface UpdateMulticastGroupRequest {
  Id: string;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANMulticast;
}
const UpdateMulticastGroupRequest = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<UpdateMulticastGroupRequest>;
export interface UpdateMulticastGroupResponse {}
const UpdateMulticastGroupResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<UpdateMulticastGroupResponse>;
export interface UpdateNetworkAnalyzerConfigurationRequest {
  ConfigurationName: string;
  TraceContent?: TraceContent;
  WirelessDevicesToAdd?: string[];
  WirelessDevicesToRemove?: string[];
  WirelessGatewaysToAdd?: string[];
  WirelessGatewaysToRemove?: string[];
  Description?: string;
  MulticastGroupsToAdd?: string[];
  MulticastGroupsToRemove?: string[];
}
const UpdateNetworkAnalyzerConfigurationRequest = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<UpdateNetworkAnalyzerConfigurationRequest>;
export interface UpdateNetworkAnalyzerConfigurationResponse {}
const UpdateNetworkAnalyzerConfigurationResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<UpdateNetworkAnalyzerConfigurationResponse>;
export interface SidewalkUpdateAccount {
  AppServerPrivateKey?: string | redacted.Redacted<string>;
}
const SidewalkUpdateAccount = /*@__PURE__*/ __L.at(
  __c40,
  7,
) as any as S.Schema<SidewalkUpdateAccount>;
export interface UpdatePartnerAccountRequest {
  Sidewalk: SidewalkUpdateAccount;
  PartnerAccountId: string;
  PartnerType: PartnerType;
}
const UpdatePartnerAccountRequest = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<UpdatePartnerAccountRequest>;
export interface UpdatePartnerAccountResponse {}
const UpdatePartnerAccountResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<UpdatePartnerAccountResponse>;
export interface UpdatePositionRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
  Position: number[];
}
const UpdatePositionRequest = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<UpdatePositionRequest>;
export interface UpdatePositionResponse {}
const UpdatePositionResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<UpdatePositionResponse>;
export interface UpdateResourceEventConfigurationRequest {
  Identifier: string;
  IdentifierType: IdentifierType;
  PartnerType?: EventNotificationPartnerType;
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
  Proximity?: ProximityEventConfiguration;
  Join?: JoinEventConfiguration;
  ConnectionStatus?: ConnectionStatusEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}
const UpdateResourceEventConfigurationRequest = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<UpdateResourceEventConfigurationRequest>;
export interface UpdateResourceEventConfigurationResponse {}
const UpdateResourceEventConfigurationResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<UpdateResourceEventConfigurationResponse>;
export interface UpdateResourcePositionRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
  GeoJsonPayload?: T.StreamingInputBody;
}
const UpdateResourcePositionRequest = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<UpdateResourcePositionRequest>;
export interface UpdateResourcePositionResponse {}
const UpdateResourcePositionResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<UpdateResourcePositionResponse>;
export interface UpdateAbpV1_1 {
  FCntStart?: number;
}
const UpdateAbpV1_1 = /*@__PURE__*/ __L.at(__c41, 4) as any as S.Schema<UpdateAbpV1_1>;
export interface UpdateAbpV1_0_x {
  FCntStart?: number;
}
const UpdateAbpV1_0_x = UpdateAbpV1_1 as any as S.Schema<UpdateAbpV1_0_x>;
export interface UpdateFPorts {
  Positioning?: Positioning;
  Applications?: ApplicationConfig[];
}
const UpdateFPorts = /*@__PURE__*/ __L.at(__c41, 5) as any as S.Schema<UpdateFPorts>;
export interface LoRaWANUpdateDevice {
  DeviceProfileId?: string;
  ServiceProfileId?: string;
  AbpV1_1?: UpdateAbpV1_1;
  AbpV1_0_x?: UpdateAbpV1_0_x;
  FPorts?: UpdateFPorts;
}
const LoRaWANUpdateDevice = /*@__PURE__*/ __L.at(__c41, 6) as any as S.Schema<LoRaWANUpdateDevice>;
export interface SidewalkUpdateWirelessDevice {
  Positioning?: SidewalkPositioning;
}
const SidewalkUpdateWirelessDevice =
  SidewalkListDevicesForImportInfo as any as S.Schema<SidewalkUpdateWirelessDevice>;
export interface UpdateWirelessDeviceRequest {
  Id: string;
  DestinationName?: string;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANUpdateDevice;
  Positioning?: PositioningConfigStatus;
  Sidewalk?: SidewalkUpdateWirelessDevice;
}
const UpdateWirelessDeviceRequest = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<UpdateWirelessDeviceRequest>;
export interface UpdateWirelessDeviceResponse {}
const UpdateWirelessDeviceResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<UpdateWirelessDeviceResponse>;
export interface SidewalkUpdateImportInfo {
  DeviceCreationFile?: string;
}
const SidewalkUpdateImportInfo = /*@__PURE__*/ __L.at(
  __c42,
  0,
) as any as S.Schema<SidewalkUpdateImportInfo>;
export interface UpdateWirelessDeviceImportTaskRequest {
  Id: string;
  Sidewalk: SidewalkUpdateImportInfo;
}
const UpdateWirelessDeviceImportTaskRequest = /*@__PURE__*/ __L.at(
  __c42,
  1,
) as any as S.Schema<UpdateWirelessDeviceImportTaskRequest>;
export interface UpdateWirelessDeviceImportTaskResponse {}
const UpdateWirelessDeviceImportTaskResponse =
  AssociateMulticastGroupWithFuotaTaskResponse as any as S.Schema<UpdateWirelessDeviceImportTaskResponse>;
export interface UpdateWirelessGatewayRequest {
  Id: string;
  Name?: string;
  Description?: string;
  JoinEuiFilters?: string[][];
  NetIdFilters?: string[];
  MaxEirp?: number;
}
const UpdateWirelessGatewayRequest = /*@__PURE__*/ __L.at(
  __c42,
  2,
) as any as S.Schema<UpdateWirelessGatewayRequest>;
export interface UpdateWirelessGatewayResponse {}
const UpdateWirelessGatewayResponse =
  SidewalkCreateDeviceProfile as any as S.Schema<UpdateWirelessGatewayResponse>;
export type Message = string;
export type ResourceId = string;
export type AssociateAwsAccountWithPartnerAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a partner account with your AWS account.
 */
export const associateAwsAccountWithPartnerAccount: API.OperationMethod<
  AssociateAwsAccountWithPartnerAccountRequest,
  AssociateAwsAccountWithPartnerAccountResponse,
  AssociateAwsAccountWithPartnerAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateAwsAccountWithPartnerAccountRequest,
  output: AssociateAwsAccountWithPartnerAccountResponse,
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
  operationName: "AssociateAwsAccountWithPartnerAccount",
}));

export type AssociateMulticastGroupWithFuotaTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associate a multicast group with a FUOTA task.
 */
export const associateMulticastGroupWithFuotaTask: API.OperationMethod<
  AssociateMulticastGroupWithFuotaTaskRequest,
  AssociateMulticastGroupWithFuotaTaskResponse,
  AssociateMulticastGroupWithFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateMulticastGroupWithFuotaTaskRequest,
  output: AssociateMulticastGroupWithFuotaTaskResponse,
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
  operationName: "AssociateMulticastGroupWithFuotaTask",
}));

export type AssociateWirelessDeviceWithFuotaTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associate a wireless device with a FUOTA task.
 */
export const associateWirelessDeviceWithFuotaTask: API.OperationMethod<
  AssociateWirelessDeviceWithFuotaTaskRequest,
  AssociateWirelessDeviceWithFuotaTaskResponse,
  AssociateWirelessDeviceWithFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateWirelessDeviceWithFuotaTaskRequest,
  output: AssociateWirelessDeviceWithFuotaTaskResponse,
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
  operationName: "AssociateWirelessDeviceWithFuotaTask",
}));

export type AssociateWirelessDeviceWithMulticastGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a wireless device with a multicast group.
 */
export const associateWirelessDeviceWithMulticastGroup: API.OperationMethod<
  AssociateWirelessDeviceWithMulticastGroupRequest,
  AssociateWirelessDeviceWithMulticastGroupResponse,
  AssociateWirelessDeviceWithMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateWirelessDeviceWithMulticastGroupRequest,
  output: AssociateWirelessDeviceWithMulticastGroupResponse,
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
  operationName: "AssociateWirelessDeviceWithMulticastGroup",
}));

export type AssociateWirelessDeviceWithThingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a wireless device with a thing.
 */
export const associateWirelessDeviceWithThing: API.OperationMethod<
  AssociateWirelessDeviceWithThingRequest,
  AssociateWirelessDeviceWithThingResponse,
  AssociateWirelessDeviceWithThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateWirelessDeviceWithThingRequest,
  output: AssociateWirelessDeviceWithThingResponse,
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
  operationName: "AssociateWirelessDeviceWithThing",
}));

export type AssociateWirelessGatewayWithCertificateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a wireless gateway with a certificate.
 */
export const associateWirelessGatewayWithCertificate: API.OperationMethod<
  AssociateWirelessGatewayWithCertificateRequest,
  AssociateWirelessGatewayWithCertificateResponse,
  AssociateWirelessGatewayWithCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateWirelessGatewayWithCertificateRequest,
  output: AssociateWirelessGatewayWithCertificateResponse,
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
  operationName: "AssociateWirelessGatewayWithCertificate",
}));

export type AssociateWirelessGatewayWithThingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a wireless gateway with a thing.
 */
export const associateWirelessGatewayWithThing: API.OperationMethod<
  AssociateWirelessGatewayWithThingRequest,
  AssociateWirelessGatewayWithThingResponse,
  AssociateWirelessGatewayWithThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateWirelessGatewayWithThingRequest,
  output: AssociateWirelessGatewayWithThingResponse,
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
  operationName: "AssociateWirelessGatewayWithThing",
}));

export type CancelMulticastGroupSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels an existing multicast group session.
 */
export const cancelMulticastGroupSession: API.OperationMethod<
  CancelMulticastGroupSessionRequest,
  CancelMulticastGroupSessionResponse,
  CancelMulticastGroupSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelMulticastGroupSessionRequest,
  output: CancelMulticastGroupSessionResponse,
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
  operationName: "CancelMulticastGroupSession",
}));

export type CreateDestinationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new destination that maps a device message to an AWS IoT rule.
 */
export const createDestination: API.OperationMethod<
  CreateDestinationRequest,
  CreateDestinationResponse,
  CreateDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDestinationRequest,
  output: CreateDestinationResponse,
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
  operationName: "CreateDestination",
}));

export type CreateDeviceProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new device profile.
 */
export const createDeviceProfile: API.OperationMethod<
  CreateDeviceProfileRequest,
  CreateDeviceProfileResponse,
  CreateDeviceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDeviceProfileRequest,
  output: CreateDeviceProfileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDeviceProfile",
}));

export type CreateFuotaTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a FUOTA task.
 */
export const createFuotaTask: API.OperationMethod<
  CreateFuotaTaskRequest,
  CreateFuotaTaskResponse,
  CreateFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFuotaTaskRequest,
  output: CreateFuotaTaskResponse,
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
  operationName: "CreateFuotaTask",
}));

export type CreateMulticastGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a multicast group.
 */
export const createMulticastGroup: API.OperationMethod<
  CreateMulticastGroupRequest,
  CreateMulticastGroupResponse,
  CreateMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMulticastGroupRequest,
  output: CreateMulticastGroupResponse,
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
  operationName: "CreateMulticastGroup",
}));

export type CreateNetworkAnalyzerConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new network analyzer configuration.
 */
export const createNetworkAnalyzerConfiguration: API.OperationMethod<
  CreateNetworkAnalyzerConfigurationRequest,
  CreateNetworkAnalyzerConfigurationResponse,
  CreateNetworkAnalyzerConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNetworkAnalyzerConfigurationRequest,
  output: CreateNetworkAnalyzerConfigurationResponse,
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
  operationName: "CreateNetworkAnalyzerConfiguration",
}));

export type CreateServiceProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new service profile.
 */
export const createServiceProfile: API.OperationMethod<
  CreateServiceProfileRequest,
  CreateServiceProfileResponse,
  CreateServiceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceProfileRequest,
  output: CreateServiceProfileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateServiceProfile",
}));

export type CreateWirelessDeviceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provisions a wireless device.
 */
export const createWirelessDevice: API.OperationMethod<
  CreateWirelessDeviceRequest,
  CreateWirelessDeviceResponse,
  CreateWirelessDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWirelessDeviceRequest,
  output: CreateWirelessDeviceResponse,
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
  operationName: "CreateWirelessDevice",
}));

export type CreateWirelessGatewayError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provisions a wireless gateway.
 *
 * When provisioning a wireless gateway, you might run into duplication errors for
 * the following reasons.
 *
 * - If you specify a `GatewayEui` value that already exists.
 *
 * - If you used a `ClientRequestToken` with the same parameters
 * within the last 10 minutes.
 *
 * To avoid this error, make sure that you use unique identifiers and parameters for
 * each request within the specified time period.
 */
export const createWirelessGateway: API.OperationMethod<
  CreateWirelessGatewayRequest,
  CreateWirelessGatewayResponse,
  CreateWirelessGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWirelessGatewayRequest,
  output: CreateWirelessGatewayResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWirelessGateway",
}));

export type CreateWirelessGatewayTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a task for a wireless gateway.
 */
export const createWirelessGatewayTask: API.OperationMethod<
  CreateWirelessGatewayTaskRequest,
  CreateWirelessGatewayTaskResponse,
  CreateWirelessGatewayTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWirelessGatewayTaskRequest,
  output: CreateWirelessGatewayTaskResponse,
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
  operationName: "CreateWirelessGatewayTask",
}));

export type CreateWirelessGatewayTaskDefinitionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a gateway task definition.
 */
export const createWirelessGatewayTaskDefinition: API.OperationMethod<
  CreateWirelessGatewayTaskDefinitionRequest,
  CreateWirelessGatewayTaskDefinitionResponse,
  CreateWirelessGatewayTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWirelessGatewayTaskDefinitionRequest,
  output: CreateWirelessGatewayTaskDefinitionResponse,
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
  operationName: "CreateWirelessGatewayTaskDefinition",
}));

export type DeleteDestinationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a destination.
 */
export const deleteDestination: API.OperationMethod<
  DeleteDestinationRequest,
  DeleteDestinationResponse,
  DeleteDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDestinationRequest,
  output: DeleteDestinationResponse,
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
  operationName: "DeleteDestination",
}));

export type DeleteDeviceProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a device profile.
 */
export const deleteDeviceProfile: API.OperationMethod<
  DeleteDeviceProfileRequest,
  DeleteDeviceProfileResponse,
  DeleteDeviceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDeviceProfileRequest,
  output: DeleteDeviceProfileResponse,
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
  operationName: "DeleteDeviceProfile",
}));

export type DeleteFuotaTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a FUOTA task.
 */
export const deleteFuotaTask: API.OperationMethod<
  DeleteFuotaTaskRequest,
  DeleteFuotaTaskResponse,
  DeleteFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFuotaTaskRequest,
  output: DeleteFuotaTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFuotaTask",
}));

export type DeleteMulticastGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a multicast group if it is not in use by a FUOTA task.
 */
export const deleteMulticastGroup: API.OperationMethod<
  DeleteMulticastGroupRequest,
  DeleteMulticastGroupResponse,
  DeleteMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMulticastGroupRequest,
  output: DeleteMulticastGroupResponse,
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
  operationName: "DeleteMulticastGroup",
}));

export type DeleteNetworkAnalyzerConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a network analyzer configuration.
 */
export const deleteNetworkAnalyzerConfiguration: API.OperationMethod<
  DeleteNetworkAnalyzerConfigurationRequest,
  DeleteNetworkAnalyzerConfigurationResponse,
  DeleteNetworkAnalyzerConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNetworkAnalyzerConfigurationRequest,
  output: DeleteNetworkAnalyzerConfigurationResponse,
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
  operationName: "DeleteNetworkAnalyzerConfiguration",
}));

export type DeleteQueuedMessagesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Remove queued messages from the downlink queue.
 */
export const deleteQueuedMessages: API.OperationMethod<
  DeleteQueuedMessagesRequest,
  DeleteQueuedMessagesResponse,
  DeleteQueuedMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQueuedMessagesRequest,
  output: DeleteQueuedMessagesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQueuedMessages",
}));

export type DeleteServiceProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a service profile.
 */
export const deleteServiceProfile: API.OperationMethod<
  DeleteServiceProfileRequest,
  DeleteServiceProfileResponse,
  DeleteServiceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceProfileRequest,
  output: DeleteServiceProfileResponse,
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
  operationName: "DeleteServiceProfile",
}));

export type DeleteWirelessDeviceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a wireless device.
 */
export const deleteWirelessDevice: API.OperationMethod<
  DeleteWirelessDeviceRequest,
  DeleteWirelessDeviceResponse,
  DeleteWirelessDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWirelessDeviceRequest,
  output: DeleteWirelessDeviceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWirelessDevice",
}));

export type DeleteWirelessDeviceImportTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an import task.
 */
export const deleteWirelessDeviceImportTask: API.OperationMethod<
  DeleteWirelessDeviceImportTaskRequest,
  DeleteWirelessDeviceImportTaskResponse,
  DeleteWirelessDeviceImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWirelessDeviceImportTaskRequest,
  output: DeleteWirelessDeviceImportTaskResponse,
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
  operationName: "DeleteWirelessDeviceImportTask",
}));

export type DeleteWirelessGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a wireless gateway.
 *
 * When deleting a wireless gateway, you might run into duplication errors for the
 * following reasons.
 *
 * - If you specify a `GatewayEui` value that already exists.
 *
 * - If you used a `ClientRequestToken` with the same parameters
 * within the last 10 minutes.
 *
 * To avoid this error, make sure that you use unique identifiers and parameters for
 * each request within the specified time period.
 */
export const deleteWirelessGateway: API.OperationMethod<
  DeleteWirelessGatewayRequest,
  DeleteWirelessGatewayResponse,
  DeleteWirelessGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWirelessGatewayRequest,
  output: DeleteWirelessGatewayResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWirelessGateway",
}));

export type DeleteWirelessGatewayTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a wireless gateway task.
 */
export const deleteWirelessGatewayTask: API.OperationMethod<
  DeleteWirelessGatewayTaskRequest,
  DeleteWirelessGatewayTaskResponse,
  DeleteWirelessGatewayTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWirelessGatewayTaskRequest,
  output: DeleteWirelessGatewayTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWirelessGatewayTask",
}));

export type DeleteWirelessGatewayTaskDefinitionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a wireless gateway task definition. Deleting this task definition does not
 * affect tasks that are currently in progress.
 */
export const deleteWirelessGatewayTaskDefinition: API.OperationMethod<
  DeleteWirelessGatewayTaskDefinitionRequest,
  DeleteWirelessGatewayTaskDefinitionResponse,
  DeleteWirelessGatewayTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWirelessGatewayTaskDefinitionRequest,
  output: DeleteWirelessGatewayTaskDefinitionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWirelessGatewayTaskDefinition",
}));

export type DeregisterWirelessDeviceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregister a wireless device from AWS IoT Wireless.
 */
export const deregisterWirelessDevice: API.OperationMethod<
  DeregisterWirelessDeviceRequest,
  DeregisterWirelessDeviceResponse,
  DeregisterWirelessDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterWirelessDeviceRequest,
  output: DeregisterWirelessDeviceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterWirelessDevice",
}));

export type DisassociateAwsAccountFromPartnerAccountError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates your AWS account from a partner account. If
 * `PartnerAccountId` and `PartnerType` are `null`,
 * disassociates your AWS account from all partner accounts.
 */
export const disassociateAwsAccountFromPartnerAccount: API.OperationMethod<
  DisassociateAwsAccountFromPartnerAccountRequest,
  DisassociateAwsAccountFromPartnerAccountResponse,
  DisassociateAwsAccountFromPartnerAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateAwsAccountFromPartnerAccountRequest,
  output: DisassociateAwsAccountFromPartnerAccountResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateAwsAccountFromPartnerAccount",
}));

export type DisassociateMulticastGroupFromFuotaTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a multicast group from a FUOTA task.
 */
export const disassociateMulticastGroupFromFuotaTask: API.OperationMethod<
  DisassociateMulticastGroupFromFuotaTaskRequest,
  DisassociateMulticastGroupFromFuotaTaskResponse,
  DisassociateMulticastGroupFromFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateMulticastGroupFromFuotaTaskRequest,
  output: DisassociateMulticastGroupFromFuotaTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMulticastGroupFromFuotaTask",
}));

export type DisassociateWirelessDeviceFromFuotaTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a wireless device from a FUOTA task.
 */
export const disassociateWirelessDeviceFromFuotaTask: API.OperationMethod<
  DisassociateWirelessDeviceFromFuotaTaskRequest,
  DisassociateWirelessDeviceFromFuotaTaskResponse,
  DisassociateWirelessDeviceFromFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateWirelessDeviceFromFuotaTaskRequest,
  output: DisassociateWirelessDeviceFromFuotaTaskResponse,
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
  operationName: "DisassociateWirelessDeviceFromFuotaTask",
}));

export type DisassociateWirelessDeviceFromMulticastGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a wireless device from a multicast group.
 */
export const disassociateWirelessDeviceFromMulticastGroup: API.OperationMethod<
  DisassociateWirelessDeviceFromMulticastGroupRequest,
  DisassociateWirelessDeviceFromMulticastGroupResponse,
  DisassociateWirelessDeviceFromMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateWirelessDeviceFromMulticastGroupRequest,
  output: DisassociateWirelessDeviceFromMulticastGroupResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateWirelessDeviceFromMulticastGroup",
}));

export type DisassociateWirelessDeviceFromThingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a wireless device from its currently associated thing.
 */
export const disassociateWirelessDeviceFromThing: API.OperationMethod<
  DisassociateWirelessDeviceFromThingRequest,
  DisassociateWirelessDeviceFromThingResponse,
  DisassociateWirelessDeviceFromThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateWirelessDeviceFromThingRequest,
  output: DisassociateWirelessDeviceFromThingResponse,
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
  operationName: "DisassociateWirelessDeviceFromThing",
}));

export type DisassociateWirelessGatewayFromCertificateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a wireless gateway from its currently associated certificate.
 */
export const disassociateWirelessGatewayFromCertificate: API.OperationMethod<
  DisassociateWirelessGatewayFromCertificateRequest,
  DisassociateWirelessGatewayFromCertificateResponse,
  DisassociateWirelessGatewayFromCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateWirelessGatewayFromCertificateRequest,
  output: DisassociateWirelessGatewayFromCertificateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateWirelessGatewayFromCertificate",
}));

export type DisassociateWirelessGatewayFromThingError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a wireless gateway from its currently associated thing.
 */
export const disassociateWirelessGatewayFromThing: API.OperationMethod<
  DisassociateWirelessGatewayFromThingRequest,
  DisassociateWirelessGatewayFromThingResponse,
  DisassociateWirelessGatewayFromThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateWirelessGatewayFromThingRequest,
  output: DisassociateWirelessGatewayFromThingResponse,
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
  operationName: "DisassociateWirelessGatewayFromThing",
}));

export type GetDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a destination.
 */
export const getDestination: API.OperationMethod<
  GetDestinationRequest,
  GetDestinationResponse,
  GetDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDestinationRequest,
  output: GetDestinationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDestination",
}));

export type GetDeviceProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a device profile.
 */
export const getDeviceProfile: API.OperationMethod<
  GetDeviceProfileRequest,
  GetDeviceProfileResponse,
  GetDeviceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeviceProfileRequest,
  output: GetDeviceProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeviceProfile",
}));

export type GetEventConfigurationByResourceTypesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Get the event configuration based on resource types.
 */
export const getEventConfigurationByResourceTypes: API.OperationMethod<
  GetEventConfigurationByResourceTypesRequest,
  GetEventConfigurationByResourceTypesResponse,
  GetEventConfigurationByResourceTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEventConfigurationByResourceTypesRequest,
  output: GetEventConfigurationByResourceTypesResponse,
  errors: [AccessDeniedException, InternalServerException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventConfigurationByResourceTypes",
}));

export type GetFuotaTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a FUOTA task.
 */
export const getFuotaTask: API.OperationMethod<
  GetFuotaTaskRequest,
  GetFuotaTaskResponse,
  GetFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFuotaTaskRequest,
  output: GetFuotaTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFuotaTask",
}));

export type GetLogLevelsByResourceTypesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns current default log levels or log levels by resource types. Based on the
 * resource type, log levels can be returned for wireless device, wireless gateway, or
 * FUOTA task log options.
 */
export const getLogLevelsByResourceTypes: API.OperationMethod<
  GetLogLevelsByResourceTypesRequest,
  GetLogLevelsByResourceTypesResponse,
  GetLogLevelsByResourceTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogLevelsByResourceTypesRequest,
  output: GetLogLevelsByResourceTypesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLogLevelsByResourceTypes",
}));

export type GetMetricConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the metric configuration status for this AWS account.
 */
export const getMetricConfiguration: API.OperationMethod<
  GetMetricConfigurationRequest,
  GetMetricConfigurationResponse,
  GetMetricConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMetricConfigurationRequest,
  output: GetMetricConfigurationResponse,
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
  operationName: "GetMetricConfiguration",
}));

export type GetMetricsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the summary metrics for this AWS account.
 */
export const getMetrics: API.OperationMethod<
  GetMetricsRequest,
  GetMetricsResponse,
  GetMetricsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMetricsRequest,
  output: GetMetricsResponse,
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
  operationName: "GetMetrics",
}));

export type GetMulticastGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a multicast group.
 */
export const getMulticastGroup: API.OperationMethod<
  GetMulticastGroupRequest,
  GetMulticastGroupResponse,
  GetMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMulticastGroupRequest,
  output: GetMulticastGroupResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMulticastGroup",
}));

export type GetMulticastGroupSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a multicast group session.
 */
export const getMulticastGroupSession: API.OperationMethod<
  GetMulticastGroupSessionRequest,
  GetMulticastGroupSessionResponse,
  GetMulticastGroupSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMulticastGroupSessionRequest,
  output: GetMulticastGroupSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMulticastGroupSession",
}));

export type GetNetworkAnalyzerConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get network analyzer configuration.
 */
export const getNetworkAnalyzerConfiguration: API.OperationMethod<
  GetNetworkAnalyzerConfigurationRequest,
  GetNetworkAnalyzerConfigurationResponse,
  GetNetworkAnalyzerConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNetworkAnalyzerConfigurationRequest,
  output: GetNetworkAnalyzerConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkAnalyzerConfiguration",
}));

export type GetPartnerAccountError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a partner account. If `PartnerAccountId` and
 * `PartnerType` are `null`, returns all partner accounts.
 */
export const getPartnerAccount: API.OperationMethod<
  GetPartnerAccountRequest,
  GetPartnerAccountResponse,
  GetPartnerAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPartnerAccountRequest,
  output: GetPartnerAccountResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPartnerAccount",
}));

export type GetPositionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the position information for a given resource.
 *
 * This action is no longer supported. Calls to retrieve the position information
 * should use the GetResourcePosition API operation instead.
 */
export const getPosition: API.OperationMethod<
  GetPositionRequest,
  GetPositionResponse,
  GetPositionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPositionRequest,
  output: GetPositionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPosition",
}));

export type GetPositionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get position configuration for a given resource.
 *
 * This action is no longer supported. Calls to retrieve the position configuration
 * should use the GetResourcePosition API operation instead.
 */
export const getPositionConfiguration: API.OperationMethod<
  GetPositionConfigurationRequest,
  GetPositionConfigurationResponse,
  GetPositionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPositionConfigurationRequest,
  output: GetPositionConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPositionConfiguration",
}));

export type GetPositionEstimateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get estimated position information as a payload in GeoJSON format. The payload
 * measurement data is resolved using solvers that are provided by third-party
 * vendors.
 */
export const getPositionEstimate: API.OperationMethod<
  GetPositionEstimateRequest,
  GetPositionEstimateResponse,
  GetPositionEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPositionEstimateRequest,
  output: GetPositionEstimateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPositionEstimate",
}));

export type GetResourceEventConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the event configuration for a particular resource identifier.
 */
export const getResourceEventConfiguration: API.OperationMethod<
  GetResourceEventConfigurationRequest,
  GetResourceEventConfigurationResponse,
  GetResourceEventConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourceEventConfigurationRequest,
  output: GetResourceEventConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceEventConfiguration",
}));

export type GetResourceLogLevelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Fetches the log-level override, if any, for a given resource ID and resource
 * type..
 */
export const getResourceLogLevel: API.OperationMethod<
  GetResourceLogLevelRequest,
  GetResourceLogLevelResponse,
  GetResourceLogLevelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourceLogLevelRequest,
  output: GetResourceLogLevelResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceLogLevel",
}));

export type GetResourcePositionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the position information for a given wireless device or a wireless gateway
 * resource. The position information uses the World Geodetic System
 * (WGS84).
 */
export const getResourcePosition: API.OperationMethod<
  GetResourcePositionRequest,
  GetResourcePositionResponse,
  GetResourcePositionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourcePositionRequest,
  output: GetResourcePositionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePosition",
}));

export type GetServiceEndpointError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol
 * or LoRaWAN Network Server (LNS) connections.
 */
export const getServiceEndpoint: API.OperationMethod<
  GetServiceEndpointRequest,
  GetServiceEndpointResponse,
  GetServiceEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceEndpointRequest,
  output: GetServiceEndpointResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceEndpoint",
}));

export type GetServiceProfileError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a service profile.
 */
export const getServiceProfile: API.OperationMethod<
  GetServiceProfileRequest,
  GetServiceProfileResponse,
  GetServiceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceProfileRequest,
  output: GetServiceProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceProfile",
}));

export type GetWirelessDeviceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a wireless device.
 */
export const getWirelessDevice: API.OperationMethod<
  GetWirelessDeviceRequest,
  GetWirelessDeviceResponse,
  GetWirelessDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessDeviceRequest,
  output: GetWirelessDeviceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWirelessDevice",
}));

export type GetWirelessDeviceImportTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get information about an import task and count of device onboarding summary
 * information for the import task.
 */
export const getWirelessDeviceImportTask: API.OperationMethod<
  GetWirelessDeviceImportTaskRequest,
  GetWirelessDeviceImportTaskResponse,
  GetWirelessDeviceImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessDeviceImportTaskRequest,
  output: GetWirelessDeviceImportTaskResponse,
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
  operationName: "GetWirelessDeviceImportTask",
}));

export type GetWirelessDeviceStatisticsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets operating information about a wireless device.
 */
export const getWirelessDeviceStatistics: API.OperationMethod<
  GetWirelessDeviceStatisticsRequest,
  GetWirelessDeviceStatisticsResponse,
  GetWirelessDeviceStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessDeviceStatisticsRequest,
  output: GetWirelessDeviceStatisticsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWirelessDeviceStatistics",
}));

export type GetWirelessGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a wireless gateway.
 */
export const getWirelessGateway: API.OperationMethod<
  GetWirelessGatewayRequest,
  GetWirelessGatewayResponse,
  GetWirelessGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessGatewayRequest,
  output: GetWirelessGatewayResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWirelessGateway",
}));

export type GetWirelessGatewayCertificateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the ID of the certificate that is currently associated with a wireless
 * gateway.
 */
export const getWirelessGatewayCertificate: API.OperationMethod<
  GetWirelessGatewayCertificateRequest,
  GetWirelessGatewayCertificateResponse,
  GetWirelessGatewayCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessGatewayCertificateRequest,
  output: GetWirelessGatewayCertificateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWirelessGatewayCertificate",
}));

export type GetWirelessGatewayFirmwareInformationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the firmware version and other information about a wireless gateway.
 */
export const getWirelessGatewayFirmwareInformation: API.OperationMethod<
  GetWirelessGatewayFirmwareInformationRequest,
  GetWirelessGatewayFirmwareInformationResponse,
  GetWirelessGatewayFirmwareInformationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessGatewayFirmwareInformationRequest,
  output: GetWirelessGatewayFirmwareInformationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWirelessGatewayFirmwareInformation",
}));

export type GetWirelessGatewayStatisticsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets operating information about a wireless gateway.
 */
export const getWirelessGatewayStatistics: API.OperationMethod<
  GetWirelessGatewayStatisticsRequest,
  GetWirelessGatewayStatisticsResponse,
  GetWirelessGatewayStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessGatewayStatisticsRequest,
  output: GetWirelessGatewayStatisticsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWirelessGatewayStatistics",
}));

export type GetWirelessGatewayTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a wireless gateway task.
 */
export const getWirelessGatewayTask: API.OperationMethod<
  GetWirelessGatewayTaskRequest,
  GetWirelessGatewayTaskResponse,
  GetWirelessGatewayTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessGatewayTaskRequest,
  output: GetWirelessGatewayTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWirelessGatewayTask",
}));

export type GetWirelessGatewayTaskDefinitionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a wireless gateway task definition.
 */
export const getWirelessGatewayTaskDefinition: API.OperationMethod<
  GetWirelessGatewayTaskDefinitionRequest,
  GetWirelessGatewayTaskDefinitionResponse,
  GetWirelessGatewayTaskDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWirelessGatewayTaskDefinitionRequest,
  output: GetWirelessGatewayTaskDefinitionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWirelessGatewayTaskDefinition",
}));

export type ListDestinationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the destinations registered to your AWS account.
 */
export const listDestinations: API.PaginatedOperationMethod<
  ListDestinationsRequest,
  ListDestinationsResponse,
  ListDestinationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDestinationsRequest,
  output: ListDestinationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDestinations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDeviceProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the device profiles registered to your AWS account.
 */
export const listDeviceProfiles: API.PaginatedOperationMethod<
  ListDeviceProfilesRequest,
  ListDeviceProfilesResponse,
  ListDeviceProfilesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDeviceProfilesRequest,
  output: ListDeviceProfilesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeviceProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDevicesForWirelessDeviceImportTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the Sidewalk devices in an import task and their onboarding status.
 */
export const listDevicesForWirelessDeviceImportTask: API.OperationMethod<
  ListDevicesForWirelessDeviceImportTaskRequest,
  ListDevicesForWirelessDeviceImportTaskResponse,
  ListDevicesForWirelessDeviceImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDevicesForWirelessDeviceImportTaskRequest,
  output: ListDevicesForWirelessDeviceImportTaskResponse,
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
  operationName: "ListDevicesForWirelessDeviceImportTask",
}));

export type ListEventConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List event configurations where at least one event topic has been enabled.
 */
export const listEventConfigurations: API.OperationMethod<
  ListEventConfigurationsRequest,
  ListEventConfigurationsResponse,
  ListEventConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEventConfigurationsRequest,
  output: ListEventConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventConfigurations",
}));

export type ListFuotaTasksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the FUOTA tasks registered to your AWS account.
 */
export const listFuotaTasks: API.PaginatedOperationMethod<
  ListFuotaTasksRequest,
  ListFuotaTasksResponse,
  ListFuotaTasksError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFuotaTasksRequest,
  output: ListFuotaTasksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFuotaTasks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMulticastGroupsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the multicast groups registered to your AWS account.
 */
export const listMulticastGroups: API.PaginatedOperationMethod<
  ListMulticastGroupsRequest,
  ListMulticastGroupsResponse,
  ListMulticastGroupsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMulticastGroupsRequest,
  output: ListMulticastGroupsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMulticastGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMulticastGroupsByFuotaTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all multicast groups associated with a FUOTA task.
 */
export const listMulticastGroupsByFuotaTask: API.PaginatedOperationMethod<
  ListMulticastGroupsByFuotaTaskRequest,
  ListMulticastGroupsByFuotaTaskResponse,
  ListMulticastGroupsByFuotaTaskError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMulticastGroupsByFuotaTaskRequest,
  output: ListMulticastGroupsByFuotaTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMulticastGroupsByFuotaTask",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListNetworkAnalyzerConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the network analyzer configurations.
 */
export const listNetworkAnalyzerConfigurations: API.PaginatedOperationMethod<
  ListNetworkAnalyzerConfigurationsRequest,
  ListNetworkAnalyzerConfigurationsResponse,
  ListNetworkAnalyzerConfigurationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListNetworkAnalyzerConfigurationsRequest,
  output: ListNetworkAnalyzerConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkAnalyzerConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPartnerAccountsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the partner accounts associated with your AWS account.
 */
export const listPartnerAccounts: API.OperationMethod<
  ListPartnerAccountsRequest,
  ListPartnerAccountsResponse,
  ListPartnerAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListPartnerAccountsRequest,
  output: ListPartnerAccountsResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPartnerAccounts",
}));

export type ListPositionConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List position configurations for a given resource, such as positioning solvers.
 *
 * This action is no longer supported. Calls to retrieve position information should
 * use the GetResourcePosition API operation instead.
 */
export const listPositionConfigurations: API.PaginatedOperationMethod<
  ListPositionConfigurationsRequest,
  ListPositionConfigurationsResponse,
  ListPositionConfigurationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPositionConfigurationsRequest,
  output: ListPositionConfigurationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPositionConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListQueuedMessagesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List queued messages in the downlink queue.
 */
export const listQueuedMessages: API.PaginatedOperationMethod<
  ListQueuedMessagesRequest,
  ListQueuedMessagesResponse,
  ListQueuedMessagesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQueuedMessagesRequest,
  output: ListQueuedMessagesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQueuedMessages",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceProfilesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the service profiles registered to your AWS account.
 */
export const listServiceProfiles: API.PaginatedOperationMethod<
  ListServiceProfilesRequest,
  ListServiceProfilesResponse,
  ListServiceProfilesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServiceProfilesRequest,
  output: ListServiceProfilesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags (metadata) you have assigned to the resource.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWirelessDeviceImportTasksError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List of import tasks and summary information of onboarding status of devices in each
 * import task.
 */
export const listWirelessDeviceImportTasks: API.OperationMethod<
  ListWirelessDeviceImportTasksRequest,
  ListWirelessDeviceImportTasksResponse,
  ListWirelessDeviceImportTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListWirelessDeviceImportTasksRequest,
  output: ListWirelessDeviceImportTasksResponse,
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
  operationName: "ListWirelessDeviceImportTasks",
}));

export type ListWirelessDevicesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the wireless devices registered to your AWS account.
 */
export const listWirelessDevices: API.PaginatedOperationMethod<
  ListWirelessDevicesRequest,
  ListWirelessDevicesResponse,
  ListWirelessDevicesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWirelessDevicesRequest,
  output: ListWirelessDevicesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWirelessDevices",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListWirelessGatewaysError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the wireless gateways registered to your AWS account.
 */
export const listWirelessGateways: API.PaginatedOperationMethod<
  ListWirelessGatewaysRequest,
  ListWirelessGatewaysResponse,
  ListWirelessGatewaysError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWirelessGatewaysRequest,
  output: ListWirelessGatewaysResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWirelessGateways",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListWirelessGatewayTaskDefinitionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the wireless gateway tasks definitions registered to your AWS account.
 */
export const listWirelessGatewayTaskDefinitions: API.OperationMethod<
  ListWirelessGatewayTaskDefinitionsRequest,
  ListWirelessGatewayTaskDefinitionsResponse,
  ListWirelessGatewayTaskDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListWirelessGatewayTaskDefinitionsRequest,
  output: ListWirelessGatewayTaskDefinitionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWirelessGatewayTaskDefinitions",
}));

export type PutPositionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Put position configuration for a given resource.
 *
 * This action is no longer supported. Calls to update the position configuration
 * should use the UpdateResourcePosition API operation instead.
 */
export const putPositionConfiguration: API.OperationMethod<
  PutPositionConfigurationRequest,
  PutPositionConfigurationResponse,
  PutPositionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutPositionConfigurationRequest,
  output: PutPositionConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutPositionConfiguration",
}));

export type PutResourceLogLevelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets the log-level override for a resource ID and resource type. A limit of 200 log
 * level override can be set per account.
 */
export const putResourceLogLevel: API.OperationMethod<
  PutResourceLogLevelRequest,
  PutResourceLogLevelResponse,
  PutResourceLogLevelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutResourceLogLevelRequest,
  output: PutResourceLogLevelResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourceLogLevel",
}));

export type ResetAllResourceLogLevelsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the log-level overrides for all resources; wireless devices, wireless
 * gateways, and FUOTA tasks.
 */
export const resetAllResourceLogLevels: API.OperationMethod<
  ResetAllResourceLogLevelsRequest,
  ResetAllResourceLogLevelsResponse,
  ResetAllResourceLogLevelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetAllResourceLogLevelsRequest,
  output: ResetAllResourceLogLevelsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetAllResourceLogLevels",
}));

export type ResetResourceLogLevelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the log-level override, if any, for a specific resource ID and resource type.
 * It can be used for a wireless device, a wireless gateway, or a FUOTA task.
 */
export const resetResourceLogLevel: API.OperationMethod<
  ResetResourceLogLevelRequest,
  ResetResourceLogLevelResponse,
  ResetResourceLogLevelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetResourceLogLevelRequest,
  output: ResetResourceLogLevelResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetResourceLogLevel",
}));

export type SendDataToMulticastGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends the specified data to a multicast group.
 */
export const sendDataToMulticastGroup: API.OperationMethod<
  SendDataToMulticastGroupRequest,
  SendDataToMulticastGroupResponse,
  SendDataToMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendDataToMulticastGroupRequest,
  output: SendDataToMulticastGroupResponse,
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
  operationName: "SendDataToMulticastGroup",
}));

export type SendDataToWirelessDeviceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a decrypted application data frame to a device.
 */
export const sendDataToWirelessDevice: API.OperationMethod<
  SendDataToWirelessDeviceRequest,
  SendDataToWirelessDeviceResponse,
  SendDataToWirelessDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendDataToWirelessDeviceRequest,
  output: SendDataToWirelessDeviceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendDataToWirelessDevice",
}));

export type StartBulkAssociateWirelessDeviceWithMulticastGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a bulk association of all qualifying wireless devices with a multicast
 * group.
 */
export const startBulkAssociateWirelessDeviceWithMulticastGroup: API.OperationMethod<
  StartBulkAssociateWirelessDeviceWithMulticastGroupRequest,
  StartBulkAssociateWirelessDeviceWithMulticastGroupResponse,
  StartBulkAssociateWirelessDeviceWithMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartBulkAssociateWirelessDeviceWithMulticastGroupRequest,
  output: StartBulkAssociateWirelessDeviceWithMulticastGroupResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartBulkAssociateWirelessDeviceWithMulticastGroup",
}));

export type StartBulkDisassociateWirelessDeviceFromMulticastGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a bulk disassociatin of all qualifying wireless devices from a multicast
 * group.
 */
export const startBulkDisassociateWirelessDeviceFromMulticastGroup: API.OperationMethod<
  StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest,
  output: StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartBulkDisassociateWirelessDeviceFromMulticastGroup",
}));

export type StartFuotaTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a FUOTA task.
 */
export const startFuotaTask: API.OperationMethod<
  StartFuotaTaskRequest,
  StartFuotaTaskResponse,
  StartFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartFuotaTaskRequest,
  output: StartFuotaTaskResponse,
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
  operationName: "StartFuotaTask",
}));

export type StartMulticastGroupSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a multicast group session.
 */
export const startMulticastGroupSession: API.OperationMethod<
  StartMulticastGroupSessionRequest,
  StartMulticastGroupSessionResponse,
  StartMulticastGroupSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartMulticastGroupSessionRequest,
  output: StartMulticastGroupSessionResponse,
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
  operationName: "StartMulticastGroupSession",
}));

export type StartSingleWirelessDeviceImportTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Start import task for a single wireless device.
 */
export const startSingleWirelessDeviceImportTask: API.OperationMethod<
  StartSingleWirelessDeviceImportTaskRequest,
  StartSingleWirelessDeviceImportTaskResponse,
  StartSingleWirelessDeviceImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartSingleWirelessDeviceImportTaskRequest,
  output: StartSingleWirelessDeviceImportTaskResponse,
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
  operationName: "StartSingleWirelessDeviceImportTask",
}));

export type StartWirelessDeviceImportTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Start import task for provisioning Sidewalk devices in bulk using an S3 CSV
 * file.
 */
export const startWirelessDeviceImportTask: API.OperationMethod<
  StartWirelessDeviceImportTaskRequest,
  StartWirelessDeviceImportTaskResponse,
  StartWirelessDeviceImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartWirelessDeviceImportTaskRequest,
  output: StartWirelessDeviceImportTaskResponse,
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
  operationName: "StartWirelessDeviceImportTask",
}));

export type TagResourceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Adds a tag to a resource.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestWirelessDeviceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Simulates a provisioned device by sending an uplink data payload of
 * `Hello`.
 */
export const testWirelessDevice: API.OperationMethod<
  TestWirelessDeviceRequest,
  TestWirelessDeviceResponse,
  TestWirelessDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestWirelessDeviceRequest,
  output: TestWirelessDeviceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestWirelessDevice",
}));

export type UntagResourceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tags from a resource.
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

export type UpdateDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates properties of a destination.
 */
export const updateDestination: API.OperationMethod<
  UpdateDestinationRequest,
  UpdateDestinationResponse,
  UpdateDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDestinationRequest,
  output: UpdateDestinationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDestination",
}));

export type UpdateEventConfigurationByResourceTypesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the event configuration based on resource types.
 */
export const updateEventConfigurationByResourceTypes: API.OperationMethod<
  UpdateEventConfigurationByResourceTypesRequest,
  UpdateEventConfigurationByResourceTypesResponse,
  UpdateEventConfigurationByResourceTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEventConfigurationByResourceTypesRequest,
  output: UpdateEventConfigurationByResourceTypesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEventConfigurationByResourceTypes",
}));

export type UpdateFuotaTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates properties of a FUOTA task.
 */
export const updateFuotaTask: API.OperationMethod<
  UpdateFuotaTaskRequest,
  UpdateFuotaTaskResponse,
  UpdateFuotaTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFuotaTaskRequest,
  output: UpdateFuotaTaskResponse,
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
  operationName: "UpdateFuotaTask",
}));

export type UpdateLogLevelsByResourceTypesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Set default log level, or log levels by resource types. This can be for wireless
 * device, wireless gateway, or FUOTA task log options, and is used to control the log
 * messages that'll be displayed in CloudWatch.
 */
export const updateLogLevelsByResourceTypes: API.OperationMethod<
  UpdateLogLevelsByResourceTypesRequest,
  UpdateLogLevelsByResourceTypesResponse,
  UpdateLogLevelsByResourceTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLogLevelsByResourceTypesRequest,
  output: UpdateLogLevelsByResourceTypesResponse,
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
  operationName: "UpdateLogLevelsByResourceTypes",
}));

export type UpdateMetricConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the summary metric configuration.
 */
export const updateMetricConfiguration: API.OperationMethod<
  UpdateMetricConfigurationRequest,
  UpdateMetricConfigurationResponse,
  UpdateMetricConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMetricConfigurationRequest,
  output: UpdateMetricConfigurationResponse,
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
  operationName: "UpdateMetricConfiguration",
}));

export type UpdateMulticastGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates properties of a multicast group session.
 */
export const updateMulticastGroup: API.OperationMethod<
  UpdateMulticastGroupRequest,
  UpdateMulticastGroupResponse,
  UpdateMulticastGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMulticastGroupRequest,
  output: UpdateMulticastGroupResponse,
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
  operationName: "UpdateMulticastGroup",
}));

export type UpdateNetworkAnalyzerConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update network analyzer configuration.
 */
export const updateNetworkAnalyzerConfiguration: API.OperationMethod<
  UpdateNetworkAnalyzerConfigurationRequest,
  UpdateNetworkAnalyzerConfigurationResponse,
  UpdateNetworkAnalyzerConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNetworkAnalyzerConfigurationRequest,
  output: UpdateNetworkAnalyzerConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNetworkAnalyzerConfiguration",
}));

export type UpdatePartnerAccountError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates properties of a partner account.
 */
export const updatePartnerAccount: API.OperationMethod<
  UpdatePartnerAccountRequest,
  UpdatePartnerAccountResponse,
  UpdatePartnerAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePartnerAccountRequest,
  output: UpdatePartnerAccountResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePartnerAccount",
}));

export type UpdatePositionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the position information of a resource.
 *
 * This action is no longer supported. Calls to update the position information
 * should use the UpdateResourcePosition API operation instead.
 */
export const updatePosition: API.OperationMethod<
  UpdatePositionRequest,
  UpdatePositionResponse,
  UpdatePositionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePositionRequest,
  output: UpdatePositionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePosition",
}));

export type UpdateResourceEventConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the event configuration for a particular resource identifier.
 */
export const updateResourceEventConfiguration: API.OperationMethod<
  UpdateResourceEventConfigurationRequest,
  UpdateResourceEventConfigurationResponse,
  UpdateResourceEventConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResourceEventConfigurationRequest,
  output: UpdateResourceEventConfigurationResponse,
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
  operationName: "UpdateResourceEventConfiguration",
}));

export type UpdateResourcePositionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the position information of a given wireless device or a wireless gateway
 * resource. The position coordinates are based on the World Geodetic System
 * (WGS84).
 */
export const updateResourcePosition: API.OperationMethod<
  UpdateResourcePositionRequest,
  UpdateResourcePositionResponse,
  UpdateResourcePositionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResourcePositionRequest,
  output: UpdateResourcePositionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResourcePosition",
}));

export type UpdateWirelessDeviceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates properties of a wireless device.
 */
export const updateWirelessDevice: API.OperationMethod<
  UpdateWirelessDeviceRequest,
  UpdateWirelessDeviceResponse,
  UpdateWirelessDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWirelessDeviceRequest,
  output: UpdateWirelessDeviceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWirelessDevice",
}));

export type UpdateWirelessDeviceImportTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update an import task to add more devices to the task.
 */
export const updateWirelessDeviceImportTask: API.OperationMethod<
  UpdateWirelessDeviceImportTaskRequest,
  UpdateWirelessDeviceImportTaskResponse,
  UpdateWirelessDeviceImportTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWirelessDeviceImportTaskRequest,
  output: UpdateWirelessDeviceImportTaskResponse,
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
  operationName: "UpdateWirelessDeviceImportTask",
}));

export type UpdateWirelessGatewayError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates properties of a wireless gateway.
 */
export const updateWirelessGateway: API.OperationMethod<
  UpdateWirelessGatewayRequest,
  UpdateWirelessGatewayResponse,
  UpdateWirelessGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWirelessGatewayRequest,
  output: UpdateWirelessGatewayResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWirelessGateway",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AmazonId: S.optional(S.String),
          AppServerPrivateKey: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "SidewalkAccountInfo" });
    case 1:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 2:
      return S.Array(Tag);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Sidewalk: SidewalkAccountInfo,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/partner-accounts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateAwsAccountWithPartnerAccountRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Sidewalk: S.optional(SidewalkAccountInfo), Arn: S.optional(S.String) }),
      ).annotate({
        identifier: "AssociateAwsAccountWithPartnerAccountResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), MulticastGroupId: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/fuota-tasks/{Id}/multicast-group" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateMulticastGroupWithFuotaTaskRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateMulticastGroupWithFuotaTaskResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), WirelessDeviceId: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/fuota-tasks/{Id}/wireless-device" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateWirelessDeviceWithFuotaTaskRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), WirelessDeviceId: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/multicast-groups/{Id}/wireless-device" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateWirelessDeviceWithMulticastGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), ThingArn: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/wireless-devices/{Id}/thing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateWirelessDeviceWithThingRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), IotCertificateId: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/wireless-gateways/{Id}/certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateWirelessGatewayWithCertificateRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ IotCertificateId: S.optional(S.String) })).annotate({
        identifier: "AssociateWirelessGatewayWithCertificateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), ThingArn: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/wireless-gateways/{Id}/thing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateWirelessGatewayWithThingRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/multicast-groups/{Id}/session" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelMulticastGroupSessionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ExpressionType: ExpressionType,
          Expression: S.String,
          Description: S.optional(S.String),
          RoleArn: S.String,
          Tags: S.optional(TagList),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/destinations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDestinationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateDestinationResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.Number);
    case 1:
      return S.suspend(() =>
        S.Struct({
          SupportsClassB: S.optional(S.Boolean),
          ClassBTimeout: S.optional(S.Number),
          PingSlotPeriod: S.optional(S.Number),
          PingSlotDr: S.optional(S.Number),
          PingSlotFreq: S.optional(S.Number),
          SupportsClassC: S.optional(S.Boolean),
          ClassCTimeout: S.optional(S.Number),
          MacVersion: S.optional(S.String),
          RegParamsRevision: S.optional(S.String),
          RxDelay1: S.optional(S.Number),
          RxDrOffset1: S.optional(S.Number),
          RxDataRate2: S.optional(S.Number),
          RxFreq2: S.optional(S.Number),
          FactoryPresetFreqsList: S.optional(FactoryPresetFreqsList),
          MaxEirp: S.optional(S.Number),
          MaxDutyCycle: S.optional(S.Number),
          RfRegion: S.optional(S.String),
          SupportsJoin: S.optional(S.Boolean),
          Supports32BitFCnt: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LoRaWANDeviceProfile" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "SidewalkCreateDeviceProfile",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANDeviceProfile),
          Tags: S.optional(TagList),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Sidewalk: S.optional(SidewalkCreateDeviceProfile),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/device-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateDeviceProfileRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Id: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateDeviceProfileResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ RfRegion: S.optional(SupportedRfRegion) })).annotate({
        identifier: "LoRaWANFuotaTask",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          LoRaWAN: S.optional(LoRaWANFuotaTask),
          FirmwareUpdateImage: S.String,
          FirmwareUpdateRole: S.String,
          Tags: S.optional(TagList),
          RedundancyPercent: S.optional(S.Number),
          FragmentSizeBytes: S.optional(S.Number),
          FragmentIntervalMS: S.optional(S.Number),
          Descriptor: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/fuota-tasks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateFuotaTaskRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Id: S.optional(S.String) }),
      ).annotate({ identifier: "CreateFuotaTaskResponse" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayList: S.optional(GatewayListMulticast),
          TransmissionInterval: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ParticipatingGatewaysMulticast",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DlDr: S.optional(S.Number), DlFreq: S.optional(S.Number) }),
      ).annotate({
        identifier: "DefaultSessionParametersMulticast",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RfRegion: S.optional(SupportedRfRegion),
          DlClass: S.optional(DlClass),
          ParticipatingGateways: S.optional(ParticipatingGatewaysMulticast),
          DefaultSessionParameters: S.optional(DefaultSessionParametersMulticast),
        }),
      ).annotate({ identifier: "LoRaWANMulticast" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          LoRaWAN: LoRaWANMulticast,
          Tags: S.optional(TagList),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/multicast-groups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateMulticastGroupRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          WirelessDeviceFrameInfo: S.optional(WirelessDeviceFrameInfo),
          LogLevel: S.optional(LogLevel),
          MulticastFrameInfo: S.optional(MulticastFrameInfo),
        }),
      ).annotate({ identifier: "TraceContent" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          TraceContent: S.optional(TraceContent),
          WirelessDevices: S.optional(WirelessDeviceList),
          WirelessGateways: S.optional(WirelessGatewayList),
          Description: S.optional(S.String),
          Tags: S.optional(TagList),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          MulticastGroups: S.optional(NetworkAnalyzerMulticastGroupList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/network-analyzer-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateNetworkAnalyzerConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AddGwMetadata: S.optional(S.Boolean),
          DrMin: S.optional(S.Number),
          DrMax: S.optional(S.Number),
          PrAllowed: S.optional(S.Boolean),
          RaAllowed: S.optional(S.Boolean),
          TxPowerIndexMin: S.optional(S.Number),
          TxPowerIndexMax: S.optional(S.Number),
          NbTransMin: S.optional(S.Number),
          NbTransMax: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LoRaWANServiceProfile" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANServiceProfile),
          Tags: S.optional(TagList),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/service-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateServiceProfileRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AppKey: S.optional(SensitiveString),
          NwkKey: S.optional(SensitiveString),
          JoinEui: S.optional(S.String),
        }),
      ).annotate({ identifier: "OtaaV1_1" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppKey: S.optional(SensitiveString),
          AppEui: S.optional(S.String),
          JoinEui: S.optional(S.String),
          GenAppKey: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "OtaaV1_0_x" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FNwkSIntKey: S.optional(SensitiveString),
          SNwkSIntKey: S.optional(SensitiveString),
          NwkSEncKey: S.optional(SensitiveString),
          AppSKey: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "SessionKeysAbpV1_1" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DevAddr: S.optional(S.String),
          SessionKeys: S.optional(SessionKeysAbpV1_1),
          FCntStart: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AbpV1_1" });
    case 5:
      return S.suspend(() =>
        S.Struct({ NwkSKey: S.optional(SensitiveString), AppSKey: S.optional(SensitiveString) }),
      ).annotate({ identifier: "SessionKeysAbpV1_0_x" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DevAddr: S.optional(S.String),
          SessionKeys: S.optional(SessionKeysAbpV1_0_x),
          FCntStart: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AbpV1_0_x" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClockSync: S.optional(S.Number),
          Stream: S.optional(S.Number),
          Gnss: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Positioning" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FPort: S.optional(S.Number),
          Type: S.optional(ApplicationConfigType),
          DestinationName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ApplicationConfig" });
    case 1:
      return S.Array(ApplicationConfig);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Fuota: S.optional(S.Number),
          Multicast: S.optional(S.Number),
          ClockSync: S.optional(S.Number),
          Positioning: S.optional(Positioning),
          Applications: S.optional(Applications),
        }),
      ).annotate({ identifier: "FPorts" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DevEui: S.optional(S.String),
          DeviceProfileId: S.optional(S.String),
          ServiceProfileId: S.optional(S.String),
          OtaaV1_1: S.optional(OtaaV1_1),
          OtaaV1_0_x: S.optional(OtaaV1_0_x),
          AbpV1_1: S.optional(AbpV1_1),
          AbpV1_0_x: S.optional(AbpV1_0_x),
          FPorts: S.optional(FPorts),
        }),
      ).annotate({ identifier: "LoRaWANDevice" });
    case 4:
      return S.suspend(() => S.Struct({ DestinationName: S.optional(S.String) })).annotate({
        identifier: "SidewalkPositioning",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DeviceProfileId: S.optional(S.String),
          Positioning: S.optional(SidewalkPositioning),
          SidewalkManufacturingSn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SidewalkCreateWirelessDevice",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: WirelessDeviceType,
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DestinationName: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          LoRaWAN: S.optional(LoRaWANDevice),
          Tags: S.optional(TagList),
          Positioning: S.optional(PositioningConfigStatus),
          Sidewalk: S.optional(SidewalkCreateWirelessDevice),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/wireless-devices" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateWirelessDeviceRequest",
      });
    case 7:
      return S.Array(JoinEuiRange);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DataRate: S.optional(S.Number), Frequencies: S.optional(BeaconingFrequencies) }),
      ).annotate({ identifier: "Beaconing" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayEui: S.optional(S.String),
          RfRegion: S.optional(S.String),
          JoinEuiFilters: S.optional(JoinEuiFilters),
          NetIdFilters: S.optional(NetIdFilters),
          SubBands: S.optional(SubBands),
          Beaconing: S.optional(Beaconing),
          MaxEirp: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LoRaWANGateway" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LoRaWAN: LoRaWANGateway,
          Tags: S.optional(TagList),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/wireless-gateways" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWirelessGatewayRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          WirelessGatewayTaskDefinitionId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/wireless-gateways/{Id}/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWirelessGatewayTaskRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          WirelessGatewayTaskDefinitionId: S.optional(S.String),
          Status: S.optional(WirelessGatewayTaskStatus),
        }),
      ).annotate({
        identifier: "CreateWirelessGatewayTaskResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PackageVersion: S.optional(S.String),
          Model: S.optional(S.String),
          Station: S.optional(S.String),
        }),
      ).annotate({ identifier: "LoRaWANGatewayVersion" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UpdateSignature: S.optional(S.String),
          SigKeyCrc: S.optional(S.Number),
          CurrentVersion: S.optional(LoRaWANGatewayVersion),
          UpdateVersion: S.optional(LoRaWANGatewayVersion),
        }),
      ).annotate({
        identifier: "LoRaWANUpdateGatewayTaskCreate",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UpdateDataSource: S.optional(S.String),
          UpdateDataRole: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANUpdateGatewayTaskCreate),
        }),
      ).annotate({
        identifier: "UpdateWirelessGatewayTaskCreate",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AutoCreateTasks: S.Boolean,
          Name: S.optional(S.String),
          Update: S.optional(UpdateWirelessGatewayTaskCreate),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/wireless-gateway-task-definitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWirelessGatewayTaskDefinitionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Arn: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateWirelessGatewayTaskDefinitionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/destinations/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDestinationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/device-profiles/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDeviceProfileRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/fuota-tasks/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFuotaTaskRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/multicast-groups/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMulticastGroupRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConfigurationName: S.String.pipe(T.HttpLabel("ConfigurationName")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/network-analyzer-configurations/{ConfigurationName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteNetworkAnalyzerConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          MessageId: S.String.pipe(T.HttpQuery("messageId")),
          WirelessDeviceType: S.optional(WirelessDeviceType).pipe(
            T.HttpQuery("WirelessDeviceType"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless-devices/{Id}/data" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteQueuedMessagesRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/service-profiles/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteServiceProfileRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless-devices/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWirelessDeviceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless_device_import_task/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWirelessDeviceImportTaskRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless-gateways/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWirelessGatewayRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless-gateways/{Id}/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWirelessGatewayTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless-gateway-task-definitions/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWirelessGatewayTaskDefinitionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          WirelessDeviceType: S.optional(WirelessDeviceType).pipe(
            T.HttpQuery("WirelessDeviceType"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/wireless-devices/{Identifier}/deregister" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterWirelessDeviceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PartnerAccountId: S.String.pipe(T.HttpLabel("PartnerAccountId")),
          PartnerType: PartnerType.pipe(T.HttpQuery("partnerType")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/partner-accounts/{PartnerAccountId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateAwsAccountFromPartnerAccountRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          MulticastGroupId: S.String.pipe(T.HttpLabel("MulticastGroupId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMulticastGroupFromFuotaTaskRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          WirelessDeviceId: S.String.pipe(T.HttpLabel("WirelessDeviceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateWirelessDeviceFromFuotaTaskRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          WirelessDeviceId: S.String.pipe(T.HttpLabel("WirelessDeviceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateWirelessDeviceFromMulticastGroupRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless-devices/{Id}/thing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateWirelessDeviceFromThingRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless-gateways/{Id}/certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateWirelessGatewayFromCertificateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/wireless-gateways/{Id}/thing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateWirelessGatewayFromThingRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String.pipe(T.HttpLabel("Name")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/destinations/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDestinationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Expression: S.optional(S.String),
          ExpressionType: S.optional(ExpressionType),
          Description: S.optional(S.String),
          RoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetDestinationResponse" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/device-profiles/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDeviceProfileRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CertificateId: S.String,
          MaxAllowedSignature: S.optional(S.Number),
          FactorySupport: S.optional(S.Boolean),
          ApId: S.optional(S.String),
          DeviceTypeId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DakCertificateMetadata" });
    case 2:
      return S.Array(DakCertificateMetadata);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationServerPublicKey: S.optional(SensitiveString),
          QualificationStatus: S.optional(S.Boolean),
          DakCertificateMetadata: S.optional(DakCertificateMetadataList),
        }),
      ).annotate({ identifier: "SidewalkGetDeviceProfile" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANDeviceProfile),
          Sidewalk: S.optional(SidewalkGetDeviceProfile),
        }),
      ).annotate({ identifier: "GetDeviceProfileResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/event-configurations-resource-types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEventConfigurationByResourceTypesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ WirelessDeviceEventTopic: S.optional(EventNotificationTopicStatus) }),
      ).annotate({
        identifier: "SidewalkResourceTypeEventConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Sidewalk: S.optional(SidewalkResourceTypeEventConfiguration) }),
      ).annotate({
        identifier: "DeviceRegistrationStateResourceTypeEventConfiguration",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LoRaWAN: S.optional(LoRaWANJoinResourceTypeEventConfiguration) }),
      ).annotate({
        identifier: "JoinResourceTypeEventConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ WirelessGatewayEventTopic: S.optional(EventNotificationTopicStatus) }),
      ).annotate({
        identifier: "LoRaWANConnectionStatusResourceTypeEventConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LoRaWAN: S.optional(LoRaWANConnectionStatusResourceTypeEventConfiguration) }),
      ).annotate({
        identifier: "ConnectionStatusResourceTypeEventConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DeviceRegistrationState: S.optional(
            DeviceRegistrationStateResourceTypeEventConfiguration,
          ),
          Proximity: S.optional(ProximityResourceTypeEventConfiguration),
          Join: S.optional(JoinResourceTypeEventConfiguration),
          ConnectionStatus: S.optional(ConnectionStatusResourceTypeEventConfiguration),
          MessageDeliveryStatus: S.optional(MessageDeliveryStatusResourceTypeEventConfiguration),
        }),
      ).annotate({
        identifier: "GetEventConfigurationByResourceTypesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/fuota-tasks/{Id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetFuotaTaskRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RfRegion: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "LoRaWANFuotaTaskGetInfo" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Status: S.optional(FuotaTaskStatus),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANFuotaTaskGetInfo),
          FirmwareUpdateImage: S.optional(S.String),
          FirmwareUpdateRole: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RedundancyPercent: S.optional(S.Number),
          FragmentSizeBytes: S.optional(S.Number),
          FragmentIntervalMS: S.optional(S.Number),
          Descriptor: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetFuotaTaskResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/log-levels" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLogLevelsByResourceTypesRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Event: WirelessGatewayEvent, LogLevel: LogLevel }),
      ).annotate({
        identifier: "WirelessGatewayEventLogOption",
      });
    case 1:
      return S.Array(WirelessGatewayEventLogOption);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: WirelessGatewayType,
          LogLevel: LogLevel,
          Events: S.optional(WirelessGatewayEventLogOptionList),
        }),
      ).annotate({ identifier: "WirelessGatewayLogOption" });
    case 3:
      return S.Array(WirelessGatewayLogOption);
    case 4:
      return S.Array(WirelessDeviceEventLogOption);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: WirelessDeviceType,
          LogLevel: LogLevel,
          Events: S.optional(WirelessDeviceEventLogOptionList),
        }),
      ).annotate({ identifier: "WirelessDeviceLogOption" });
    case 6:
      return S.Array(WirelessDeviceLogOption);
    case 7:
      return S.suspend(() => S.Struct({ Event: FuotaTaskEvent, LogLevel: LogLevel })).annotate({
        identifier: "FuotaTaskEventLogOption",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(FuotaTaskEventLogOption);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Type: FuotaTaskType,
          LogLevel: LogLevel,
          Events: S.optional(FuotaTaskEventLogOptionList),
        }),
      ).annotate({ identifier: "FuotaTaskLogOption" });
    case 2:
      return S.Array(FuotaTaskLogOption);
    case 3:
      return S.suspend(() =>
        S.Struct({
          DefaultLogLevel: S.optional(LogLevel),
          WirelessGatewayLogOptions: S.optional(WirelessGatewayLogOptionList),
          WirelessDeviceLogOptions: S.optional(WirelessDeviceLogOptionList),
          FuotaTaskLogOptions: S.optional(FuotaTaskLogOptionList),
        }),
      ).annotate({
        identifier: "GetLogLevelsByResourceTypesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/metric-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMetricConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(SummaryMetricConfigurationStatus) }),
      ).annotate({
        identifier: "SummaryMetricConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ SummaryMetric: S.optional(SummaryMetricConfiguration) }),
      ).annotate({
        identifier: "GetMetricConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.optional(DimensionName), value: S.optional(S.String) }),
      ).annotate({ identifier: "Dimension" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Dimension);
    case 1:
      return S.suspend(() =>
        S.Struct({
          QueryId: S.optional(S.String),
          MetricName: S.optional(MetricName),
          Dimensions: S.optional(Dimensions),
          AggregationPeriod: S.optional(AggregationPeriod),
          StartTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SummaryMetricQuery" });
    case 2:
      return S.Array(SummaryMetricQuery);
    case 3:
      return S.suspend(() =>
        S.Struct({ SummaryMetricQueries: S.optional(SummaryMetricQueries) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/metrics" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMetricsRequest" });
    case 4:
      return S.Array(/*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Min: S.optional(S.Number),
          Max: S.optional(S.Number),
          Sum: S.optional(S.Number),
          Avg: S.optional(S.Number),
          Std: S.optional(S.Number),
          P90: S.optional(S.Number),
        }),
      ).annotate({ identifier: "MetricQueryValue" });
    case 6:
      return S.Array(MetricQueryValue);
    case 7:
      return S.suspend(() =>
        S.Struct({
          QueryId: S.optional(S.String),
          QueryStatus: S.optional(MetricQueryStatus),
          Error: S.optional(S.String),
          MetricName: S.optional(MetricName),
          Dimensions: S.optional(Dimensions),
          AggregationPeriod: S.optional(AggregationPeriod),
          StartTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Timestamps: S.optional(MetricQueryTimestamps),
          Values: S.optional(MetricQueryValues),
          Unit: S.optional(S.String),
        }),
      ).annotate({ identifier: "SummaryMetricQueryResult" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SummaryMetricQueryResult);
    case 1:
      return S.suspend(() =>
        S.Struct({ SummaryMetricQueryResults: S.optional(SummaryMetricQueryResults) }),
      ).annotate({ identifier: "GetMetricsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/multicast-groups/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMulticastGroupRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RfRegion: S.optional(SupportedRfRegion),
          DlClass: S.optional(DlClass),
          NumberOfDevicesRequested: S.optional(S.Number),
          NumberOfDevicesInGroup: S.optional(S.Number),
          ParticipatingGateways: S.optional(ParticipatingGatewaysMulticast),
          DefaultSessionParameters: S.optional(DefaultSessionParametersMulticast),
        }),
      ).annotate({ identifier: "LoRaWANMulticastGet" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANMulticastGet),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetMulticastGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/multicast-groups/{Id}/session" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMulticastGroupSessionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DlDr: S.optional(S.Number),
          DlFreq: S.optional(S.Number),
          SessionStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SessionTimeout: S.optional(S.Number),
          PingSlotPeriod: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LoRaWANMulticastSession" });
    case 7:
      return S.suspend(() => S.Struct({ LoRaWAN: S.optional(LoRaWANMulticastSession) })).annotate({
        identifier: "GetMulticastGroupSessionResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConfigurationName: S.String.pipe(T.HttpLabel("ConfigurationName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/network-analyzer-configurations/{ConfigurationName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNetworkAnalyzerConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TraceContent: S.optional(TraceContent),
          WirelessDevices: S.optional(WirelessDeviceList),
          WirelessGateways: S.optional(WirelessGatewayList),
          Description: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          MulticastGroups: S.optional(NetworkAnalyzerMulticastGroupList),
        }),
      ).annotate({
        identifier: "GetNetworkAnalyzerConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PartnerAccountId: S.String.pipe(T.HttpLabel("PartnerAccountId")),
          PartnerType: PartnerType.pipe(T.HttpQuery("partnerType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/partner-accounts/{PartnerAccountId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPartnerAccountRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AmazonId: S.optional(S.String),
          Fingerprint: S.optional(SensitiveString),
          Arn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SidewalkAccountInfoWithFingerprint",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Sidewalk: S.optional(SidewalkAccountInfoWithFingerprint),
          AccountLinked: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "GetPartnerAccountResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: PositionResourceType.pipe(T.HttpQuery("resourceType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/positions/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPositionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          HorizontalAccuracy: S.optional(S.Number),
          VerticalAccuracy: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Accuracy" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Position: S.optional(PositionCoordinate),
          Accuracy: S.optional(Accuracy),
          SolverType: S.optional(PositionSolverType),
          SolverProvider: S.optional(PositionSolverProvider),
          SolverVersion: S.optional(S.String),
          Timestamp: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetPositionResponse" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: PositionResourceType.pipe(T.HttpQuery("resourceType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/position-configurations/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPositionConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Provider: S.optional(PositionSolverProvider),
          Type: S.optional(PositionSolverType),
          Status: S.optional(PositionConfigurationStatus),
          Fec: S.optional(PositionConfigurationFec),
        }),
      ).annotate({ identifier: "SemtechGnssDetail" });
    case 2:
      return S.suspend(() => S.Struct({ SemtechGnss: S.optional(SemtechGnssDetail) })).annotate({
        identifier: "PositionSolverDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Solvers: S.optional(PositionSolverDetails), Destination: S.optional(S.String) }),
      ).annotate({
        identifier: "GetPositionConfigurationResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ MacAddress: S.String, Rss: S.Number })).annotate({
        identifier: "WiFiAccessPoint",
      });
    case 5:
      return S.Array(WiFiAccessPoint);
    case 6:
      return S.suspend(() => S.Struct({ Bsic: S.Number, Bcch: S.Number })).annotate({
        identifier: "GsmLocalId",
      });
    case 7:
      return S.suspend(() => S.Struct({ Lac: S.Number, GeranCid: S.Number })).annotate({
        identifier: "GlobalIdentity",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Bsic: S.Number,
          Bcch: S.Number,
          RxLevel: S.optional(S.Number),
          GlobalIdentity: S.optional(GlobalIdentity),
        }),
      ).annotate({ identifier: "GsmNmrObj" });
    case 1:
      return S.Array(GsmNmrObj);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Mcc: S.Number,
          Mnc: S.Number,
          Lac: S.Number,
          GeranCid: S.Number,
          GsmLocalId: S.optional(GsmLocalId),
          GsmTimingAdvance: S.optional(S.Number),
          RxLevel: S.optional(S.Number),
          GsmNmr: S.optional(GsmNmrList),
        }),
      ).annotate({ identifier: "GsmObj" });
    case 3:
      return S.Array(GsmObj);
    case 4:
      return S.suspend(() => S.Struct({ Uarfcndl: S.Number, Psc: S.Number })).annotate({
        identifier: "WcdmaLocalId",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Uarfcndl: S.Number,
          Psc: S.Number,
          UtranCid: S.Number,
          Rscp: S.optional(S.Number),
          PathLoss: S.optional(S.Number),
        }),
      ).annotate({ identifier: "WcdmaNmrObj" });
    case 6:
      return S.Array(WcdmaNmrObj);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Mcc: S.Number,
          Mnc: S.Number,
          Lac: S.optional(S.Number),
          UtranCid: S.Number,
          WcdmaLocalId: S.optional(WcdmaLocalId),
          Rscp: S.optional(S.Number),
          PathLoss: S.optional(S.Number),
          WcdmaNmr: S.optional(WcdmaNmrList),
        }),
      ).annotate({ identifier: "WcdmaObj" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(WcdmaObj);
    case 1:
      return S.suspend(() => S.Struct({ Uarfcn: S.Number, CellParams: S.Number })).annotate({
        identifier: "TdscdmaLocalId",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Uarfcn: S.Number,
          CellParams: S.Number,
          UtranCid: S.optional(S.Number),
          Rscp: S.optional(S.Number),
          PathLoss: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TdscdmaNmrObj" });
    case 3:
      return S.Array(TdscdmaNmrObj);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Mcc: S.Number,
          Mnc: S.Number,
          Lac: S.optional(S.Number),
          UtranCid: S.Number,
          TdscdmaLocalId: S.optional(TdscdmaLocalId),
          TdscdmaTimingAdvance: S.optional(S.Number),
          Rscp: S.optional(S.Number),
          PathLoss: S.optional(S.Number),
          TdscdmaNmr: S.optional(TdscdmaNmrList),
        }),
      ).annotate({ identifier: "TdscdmaObj" });
    case 5:
      return S.Array(TdscdmaObj);
    case 6:
      return S.suspend(() => S.Struct({ Pci: S.Number, Earfcn: S.Number })).annotate({
        identifier: "LteLocalId",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Pci: S.Number,
          Earfcn: S.Number,
          EutranCid: S.optional(S.Number),
          Rsrp: S.optional(S.Number),
          Rsrq: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LteNmrObj" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(LteNmrObj);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Mcc: S.Number,
          Mnc: S.Number,
          EutranCid: S.Number,
          Tac: S.optional(S.Number),
          LteLocalId: S.optional(LteLocalId),
          LteTimingAdvance: S.optional(S.Number),
          Rsrp: S.optional(S.Number),
          Rsrq: S.optional(S.Number),
          NrCapable: S.optional(S.Boolean),
          LteNmr: S.optional(LteNmrList),
        }),
      ).annotate({ identifier: "LteObj" });
    case 2:
      return S.Array(LteObj);
    case 3:
      return S.suspend(() => S.Struct({ PnOffset: S.Number, CdmaChannel: S.Number })).annotate({
        identifier: "CdmaLocalId",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PnOffset: S.Number,
          CdmaChannel: S.Number,
          PilotPower: S.optional(S.Number),
          BaseStationId: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CdmaNmrObj" });
    case 5:
      return S.Array(CdmaNmrObj);
    case 6:
      return S.suspend(() =>
        S.Struct({
          SystemId: S.Number,
          NetworkId: S.Number,
          BaseStationId: S.Number,
          RegistrationZone: S.optional(S.Number),
          CdmaLocalId: S.optional(CdmaLocalId),
          PilotPower: S.optional(S.Number),
          BaseLat: S.optional(S.Number),
          BaseLng: S.optional(S.Number),
          CdmaNmr: S.optional(CdmaNmrList),
        }),
      ).annotate({ identifier: "CdmaObj" });
    case 7:
      return S.Array(CdmaObj);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Gsm: S.optional(GsmList),
          Wcdma: S.optional(WcdmaList),
          Tdscdma: S.optional(TdscdmaList),
          Lte: S.optional(LteList),
          Cdma: S.optional(CdmaList),
        }),
      ).annotate({ identifier: "CellTowers" });
    case 1:
      return S.suspend(() => S.Struct({ IpAddress: S.String })).annotate({
        identifier: "Ip",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Payload: S.String,
          CaptureTime: S.optional(S.Number),
          CaptureTimeAccuracy: S.optional(S.Number),
          AssistPosition: S.optional(AssistPosition),
          AssistAltitude: S.optional(S.Number),
          Use2DSolver: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Gnss" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Payload: S.String, CaptureTime: S.optional(S.Number) }),
      ).annotate({ identifier: "GnssCapture" });
    case 4:
      return S.Array(GnssCapture);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Captures: GnssCaptures,
          CaptureTimeAccuracy: S.optional(S.Number),
          AssistPosition: S.optional(AssistPosition),
          AssistAltitude: S.optional(S.Number),
          Use2DSolver: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GnssMultiFrame" });
    case 6:
      return S.suspend(() => S.Struct({ ConfidencePercent: S.optional(S.Number) })).annotate({
        identifier: "WiFiCellular",
      });
    case 7:
      return S.suspend(() => S.Struct({ WiFiCellular: S.optional(WiFiCellular) })).annotate({
        identifier: "AdvancedConfiguration",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WiFiAccessPoints: S.optional(WiFiAccessPoints),
          CellTowers: S.optional(CellTowers),
          Ip: S.optional(Ip),
          Gnss: S.optional(Gnss),
          GnssMultiFrame: S.optional(GnssMultiFrame),
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AdvancedConfiguration: S.optional(AdvancedConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/position-estimate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPositionEstimateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GeoJsonPayload: S.optional(T.StreamingOutput).pipe(T.HttpPayload()) }),
      ).annotate({
        identifier: "GetPositionEstimateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          IdentifierType: IdentifierType.pipe(T.HttpQuery("identifierType")),
          PartnerType: S.optional(EventNotificationPartnerType).pipe(T.HttpQuery("partnerType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/event-configurations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceEventConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AmazonIdEventTopic: S.optional(EventNotificationTopicStatus) }),
      ).annotate({
        identifier: "SidewalkEventNotificationConfigurations",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Sidewalk: S.optional(SidewalkEventNotificationConfigurations),
          WirelessDeviceIdEventTopic: S.optional(EventNotificationTopicStatus),
        }),
      ).annotate({
        identifier: "DeviceRegistrationStateEventConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DevEuiEventTopic: S.optional(EventNotificationTopicStatus) }),
      ).annotate({
        identifier: "LoRaWANJoinEventNotificationConfigurations",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LoRaWAN: S.optional(LoRaWANJoinEventNotificationConfigurations),
          WirelessDeviceIdEventTopic: S.optional(EventNotificationTopicStatus),
        }),
      ).annotate({ identifier: "JoinEventConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({ GatewayEuiEventTopic: S.optional(EventNotificationTopicStatus) }),
      ).annotate({
        identifier: "LoRaWANConnectionStatusEventNotificationConfigurations",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LoRaWAN: S.optional(LoRaWANConnectionStatusEventNotificationConfigurations),
          WirelessGatewayIdEventTopic: S.optional(EventNotificationTopicStatus),
        }),
      ).annotate({
        identifier: "ConnectionStatusEventConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeviceRegistrationState: S.optional(DeviceRegistrationStateEventConfiguration),
          Proximity: S.optional(ProximityEventConfiguration),
          Join: S.optional(JoinEventConfiguration),
          ConnectionStatus: S.optional(ConnectionStatusEventConfiguration),
          MessageDeliveryStatus: S.optional(MessageDeliveryStatusEventConfiguration),
        }),
      ).annotate({
        identifier: "GetResourceEventConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: S.String.pipe(T.HttpQuery("resourceType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/log-levels/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceLogLevelRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ LogLevel: S.optional(LogLevel) })).annotate({
        identifier: "GetResourceLogLevelResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: PositionResourceType.pipe(T.HttpQuery("resourceType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/resource-positions/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourcePositionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.optional(WirelessGatewayServiceType).pipe(T.HttpQuery("serviceType")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/service-endpoint" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetServiceEndpointRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ServiceType: S.optional(WirelessGatewayServiceType),
          ServiceEndpoint: S.optional(S.String),
          ServerTrust: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetServiceEndpointResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/service-profiles/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetServiceProfileRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UlRate: S.optional(S.Number),
          UlBucketSize: S.optional(S.Number),
          UlRatePolicy: S.optional(S.String),
          DlRate: S.optional(S.Number),
          DlBucketSize: S.optional(S.Number),
          DlRatePolicy: S.optional(S.String),
          AddGwMetadata: S.optional(S.Boolean),
          DevStatusReqFreq: S.optional(S.Number),
          ReportDevStatusBattery: S.optional(S.Boolean),
          ReportDevStatusMargin: S.optional(S.Boolean),
          DrMin: S.optional(S.Number),
          DrMax: S.optional(S.Number),
          ChannelMask: S.optional(S.String),
          PrAllowed: S.optional(S.Boolean),
          HrAllowed: S.optional(S.Boolean),
          RaAllowed: S.optional(S.Boolean),
          NwkGeoLoc: S.optional(S.Boolean),
          TargetPer: S.optional(S.Number),
          MinGwDiversity: S.optional(S.Number),
          TxPowerIndexMin: S.optional(S.Number),
          TxPowerIndexMax: S.optional(S.Number),
          NbTransMin: S.optional(S.Number),
          NbTransMax: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "LoRaWANGetServiceProfileInfo",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANGetServiceProfileInfo),
        }),
      ).annotate({
        identifier: "GetServiceProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          IdentifierType: WirelessDeviceIdType.pipe(T.HttpQuery("identifierType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-devices/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWirelessDeviceRequest" });
    case 3:
      return S.suspend(() => S.Struct({ SigningAlg: SigningAlg, Value: S.String })).annotate({
        identifier: "CertificateList",
      });
    case 4:
      return S.Array(CertificateList);
    case 5:
      return S.suspend(() =>
        S.Struct({
          AmazonId: S.optional(S.String),
          SidewalkId: S.optional(S.String),
          SidewalkManufacturingSn: S.optional(S.String),
          DeviceCertificates: S.optional(DeviceCertificateList),
          PrivateKeys: S.optional(PrivateKeysList),
          DeviceProfileId: S.optional(S.String),
          CertificateId: S.optional(S.String),
          Status: S.optional(WirelessDeviceSidewalkStatus),
          Positioning: S.optional(SidewalkPositioning),
        }),
      ).annotate({ identifier: "SidewalkDevice" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(WirelessDeviceType),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DestinationName: S.optional(S.String),
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          ThingName: S.optional(S.String),
          ThingArn: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANDevice),
          Sidewalk: S.optional(SidewalkDevice),
          Positioning: S.optional(PositioningConfigStatus),
        }),
      ).annotate({
        identifier: "GetWirelessDeviceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless_device_import_task/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWirelessDeviceImportTaskRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DeviceCreationFileList: S.optional(DeviceCreationFileList),
          Role: S.optional(S.String),
          Positioning: S.optional(SidewalkPositioning),
        }),
      ).annotate({
        identifier: "SidewalkGetStartImportInfo",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          DestinationName: S.optional(S.String),
          Positioning: S.optional(PositioningConfigStatus),
          Sidewalk: S.optional(SidewalkGetStartImportInfo),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(ImportTaskStatus),
          StatusReason: S.optional(S.String),
          InitializedImportedDeviceCount: S.optional(S.Number),
          PendingImportedDeviceCount: S.optional(S.Number),
          OnboardedImportedDeviceCount: S.optional(S.Number),
          FailedImportedDeviceCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetWirelessDeviceImportTaskResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ WirelessDeviceId: S.String.pipe(T.HttpLabel("WirelessDeviceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-devices/{WirelessDeviceId}/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWirelessDeviceStatisticsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GatewayEui: S.optional(S.String),
          Snr: S.optional(S.Number),
          Rssi: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LoRaWANGatewayMetadata" });
    case 4:
      return S.Array(LoRaWANGatewayMetadata);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProviderNetId: S.optional(S.String),
          Id: S.optional(S.String),
          Rssi: S.optional(S.Number),
          Snr: S.optional(S.Number),
          RfRegion: S.optional(S.String),
          DlAllowed: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "LoRaWANPublicGatewayMetadata",
      });
    case 6:
      return S.Array(LoRaWANPublicGatewayMetadata);
    case 7:
      return S.suspend(() =>
        S.Struct({
          DevEui: S.optional(S.String),
          FPort: S.optional(S.Number),
          DataRate: S.optional(S.Number),
          Frequency: S.optional(S.Number),
          Timestamp: S.optional(S.String),
          Gateways: S.optional(LoRaWANGatewayMetadataList),
          PublicGateways: S.optional(LoRaWANPublicGatewayMetadataList),
        }),
      ).annotate({ identifier: "LoRaWANDeviceMetadata" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Rssi: S.optional(S.Number),
          BatteryLevel: S.optional(BatteryLevel),
          Event: S.optional(Event),
          DeviceState: S.optional(DeviceState),
        }),
      ).annotate({ identifier: "SidewalkDeviceMetadata" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          WirelessDeviceId: S.optional(S.String),
          LastUplinkReceivedAt: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANDeviceMetadata),
          Sidewalk: S.optional(SidewalkDeviceMetadata),
        }),
      ).annotate({
        identifier: "GetWirelessDeviceStatisticsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          IdentifierType: WirelessGatewayIdType.pipe(T.HttpQuery("identifierType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-gateways/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWirelessGatewayRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          Description: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANGateway),
          Arn: S.optional(S.String),
          ThingName: S.optional(S.String),
          ThingArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetWirelessGatewayResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-gateways/{Id}/certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWirelessGatewayCertificateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IotCertificateId: S.optional(S.String),
          LoRaWANNetworkServerCertificateId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetWirelessGatewayCertificateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-gateways/{Id}/firmware-information" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWirelessGatewayFirmwareInformationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ CurrentVersion: S.optional(LoRaWANGatewayVersion) }),
      ).annotate({
        identifier: "LoRaWANGatewayCurrentVersion",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LoRaWAN: S.optional(LoRaWANGatewayCurrentVersion) }),
      ).annotate({
        identifier: "GetWirelessGatewayFirmwareInformationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ WirelessGatewayId: S.String.pipe(T.HttpLabel("WirelessGatewayId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-gateways/{WirelessGatewayId}/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWirelessGatewayStatisticsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          WirelessGatewayId: S.optional(S.String),
          LastUplinkReceivedAt: S.optional(S.String),
          ConnectionStatus: S.optional(ConnectionStatus),
        }),
      ).annotate({
        identifier: "GetWirelessGatewayStatisticsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-gateways/{Id}/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWirelessGatewayTaskRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          WirelessGatewayId: S.optional(S.String),
          WirelessGatewayTaskDefinitionId: S.optional(S.String),
          LastUplinkReceivedAt: S.optional(S.String),
          TaskCreatedAt: S.optional(S.String),
          Status: S.optional(WirelessGatewayTaskStatus),
        }),
      ).annotate({
        identifier: "GetWirelessGatewayTaskResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-gateway-task-definitions/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWirelessGatewayTaskDefinitionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AutoCreateTasks: S.optional(S.Boolean),
          Name: S.optional(S.String),
          Update: S.optional(UpdateWirelessGatewayTaskCreate),
          Arn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetWirelessGatewayTaskDefinitionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/destinations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDestinationsRequest" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          ExpressionType: S.optional(ExpressionType),
          Expression: S.optional(S.String),
          Description: S.optional(S.String),
          RoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Destinations" });
    case 1:
      return S.Array(Destinations);
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), DestinationList: S.optional(DestinationList) }),
      ).annotate({ identifier: "ListDestinationsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          DeviceProfileType: S.optional(DeviceProfileType).pipe(T.HttpQuery("deviceProfileType")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/device-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListDeviceProfilesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Id: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeviceProfile" });
    case 5:
      return S.Array(DeviceProfile);
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          DeviceProfileList: S.optional(DeviceProfileList),
        }),
      ).annotate({
        identifier: "ListDeviceProfilesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpQuery("id")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          Status: S.optional(OnboardStatus).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless_device_import_task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDevicesForWirelessDeviceImportTaskRequest",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Positioning: S.optional(SidewalkPositioning) })).annotate({
        identifier: "SidewalkListDevicesForImportInfo",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SidewalkManufacturingSn: S.optional(S.String),
          OnboardingStatus: S.optional(OnboardStatus),
          OnboardingStatusReason: S.optional(S.String),
          LastUpdateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ImportedSidewalkDevice" });
    case 2:
      return S.suspend(() => S.Struct({ Sidewalk: S.optional(ImportedSidewalkDevice) })).annotate({
        identifier: "ImportedWirelessDevice",
      });
    case 3:
      return S.Array(ImportedWirelessDevice);
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          DestinationName: S.optional(S.String),
          Positioning: S.optional(PositioningConfigStatus),
          Sidewalk: S.optional(SidewalkListDevicesForImportInfo),
          ImportedWirelessDeviceList: S.optional(ImportedWirelessDeviceList),
        }),
      ).annotate({
        identifier: "ListDevicesForWirelessDeviceImportTaskResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceType: EventNotificationResourceType.pipe(T.HttpQuery("resourceType")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/event-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEventConfigurationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.optional(S.String),
          IdentifierType: S.optional(IdentifierType),
          PartnerType: S.optional(EventNotificationPartnerType),
          Events: S.optional(EventNotificationItemConfigurations),
        }),
      ).annotate({ identifier: "EventConfigurationItem" });
    case 7:
      return S.Array(EventConfigurationItem);
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          EventConfigurationsList: S.optional(EventConfigurationsList),
        }),
      ).annotate({
        identifier: "ListEventConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/fuota-tasks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListFuotaTasksRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
        }),
      ).annotate({ identifier: "FuotaTask" });
    case 3:
      return S.Array(FuotaTask);
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), FuotaTaskList: S.optional(FuotaTaskList) }),
      ).annotate({ identifier: "ListFuotaTasksResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/multicast-groups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListMulticastGroupsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MulticastGroupList: S.optional(MulticastGroupList),
        }),
      ).annotate({
        identifier: "ListMulticastGroupsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/fuota-tasks/{Id}/multicast-groups" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMulticastGroupsByFuotaTaskRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "MulticastGroupByFuotaTask",
      });
    case 1:
      return S.Array(MulticastGroupByFuotaTask);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MulticastGroupList: S.optional(MulticastGroupListByFuotaTask),
        }),
      ).annotate({
        identifier: "ListMulticastGroupsByFuotaTaskResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/network-analyzer-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListNetworkAnalyzerConfigurationsRequest",
      });
    case 4:
      return S.Array(NetworkAnalyzerConfigurations);
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          NetworkAnalyzerConfigurationList: S.optional(NetworkAnalyzerConfigurationList),
        }),
      ).annotate({
        identifier: "ListNetworkAnalyzerConfigurationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/partner-accounts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPartnerAccountsRequest",
      });
    case 7:
      return S.Array(SidewalkAccountInfoWithFingerprint);
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Sidewalk: S.optional(SidewalkAccountList) }),
      ).annotate({
        identifier: "ListPartnerAccountsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(PositionResourceType).pipe(T.HttpQuery("resourceType")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/position-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPositionConfigurationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.optional(S.String),
          ResourceType: S.optional(PositionResourceType),
          Solvers: S.optional(PositionSolverDetails),
          Destination: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PositionConfigurationItem",
      });
    case 3:
      return S.Array(PositionConfigurationItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          PositionConfigurationList: S.optional(PositionConfigurationList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPositionConfigurationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          WirelessDeviceType: S.optional(WirelessDeviceType).pipe(
            T.HttpQuery("WirelessDeviceType"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-devices/{Id}/data" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListQueuedMessagesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ GatewayId: S.String, DownlinkFrequency: S.Number }),
      ).annotate({ identifier: "GatewayListItem" });
    case 7:
      return S.Array(GatewayListItem);
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DownlinkMode: DownlinkMode,
          GatewayList: GatewayList,
          TransmissionInterval: S.Number,
        }),
      ).annotate({ identifier: "ParticipatingGateways" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FPort: S.optional(S.Number),
          ParticipatingGateways: S.optional(ParticipatingGateways),
        }),
      ).annotate({ identifier: "LoRaWANSendDataToDevice" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MessageId: S.optional(S.String),
          TransmitMode: S.optional(S.Number),
          ReceivedAt: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANSendDataToDevice),
        }),
      ).annotate({ identifier: "DownlinkQueueMessage" });
    case 3:
      return S.Array(DownlinkQueueMessage);
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          DownlinkQueueMessagesList: S.optional(DownlinkQueueMessagesList),
        }),
      ).annotate({
        identifier: "ListQueuedMessagesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/service-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListServiceProfilesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ServiceProfileList: S.optional(ServiceProfileList),
        }),
      ).annotate({
        identifier: "ListServiceProfilesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpQuery("resourceArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless_device_import_tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWirelessDeviceImportTasksRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          DestinationName: S.optional(S.String),
          Positioning: S.optional(PositioningConfigStatus),
          Sidewalk: S.optional(SidewalkGetStartImportInfo),
          CreationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(ImportTaskStatus),
          StatusReason: S.optional(S.String),
          InitializedImportedDeviceCount: S.optional(S.Number),
          PendingImportedDeviceCount: S.optional(S.Number),
          OnboardedImportedDeviceCount: S.optional(S.Number),
          FailedImportedDeviceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "WirelessDeviceImportTask" });
    case 3:
      return S.Array(WirelessDeviceImportTask);
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          WirelessDeviceImportTaskList: S.optional(WirelessDeviceImportTaskList),
        }),
      ).annotate({
        identifier: "ListWirelessDeviceImportTasksResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          DestinationName: S.optional(S.String).pipe(T.HttpQuery("destinationName")),
          DeviceProfileId: S.optional(S.String).pipe(T.HttpQuery("deviceProfileId")),
          ServiceProfileId: S.optional(S.String).pipe(T.HttpQuery("serviceProfileId")),
          WirelessDeviceType: S.optional(WirelessDeviceType).pipe(
            T.HttpQuery("wirelessDeviceType"),
          ),
          FuotaTaskId: S.optional(S.String).pipe(T.HttpQuery("fuotaTaskId")),
          MulticastGroupId: S.optional(S.String).pipe(T.HttpQuery("multicastGroupId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/wireless-devices" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListWirelessDevicesRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ DevEui: S.optional(S.String) })).annotate({
        identifier: "LoRaWANListDevice",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AmazonId: S.optional(S.String),
          SidewalkId: S.optional(S.String),
          SidewalkManufacturingSn: S.optional(S.String),
          DeviceCertificates: S.optional(DeviceCertificateList),
          DeviceProfileId: S.optional(S.String),
          Status: S.optional(WirelessDeviceSidewalkStatus),
          Positioning: S.optional(SidewalkPositioning),
        }),
      ).annotate({ identifier: "SidewalkListDevice" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Type: S.optional(WirelessDeviceType),
          Name: S.optional(S.String),
          DestinationName: S.optional(S.String),
          LastUplinkReceivedAt: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANListDevice),
          Sidewalk: S.optional(SidewalkListDevice),
          FuotaDeviceStatus: S.optional(FuotaDeviceStatus),
          MulticastDeviceStatus: S.optional(S.String),
          McGroupId: S.optional(S.Number),
          Positioning: S.optional(PositioningConfigStatus),
        }),
      ).annotate({ identifier: "WirelessDeviceStatistics" });
    case 1:
      return S.Array(WirelessDeviceStatistics);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          WirelessDeviceList: S.optional(WirelessDeviceStatisticsList),
        }),
      ).annotate({
        identifier: "ListWirelessDevicesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/wireless-gateways" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListWirelessGatewaysRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANGateway),
          LastUplinkReceivedAt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WirelessGatewayStatistics",
      });
    case 5:
      return S.Array(WirelessGatewayStatistics);
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          WirelessGatewayList: S.optional(WirelessGatewayStatisticsList),
        }),
      ).annotate({
        identifier: "ListWirelessGatewaysResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          TaskDefinitionType: S.optional(WirelessGatewayTaskDefinitionType).pipe(
            T.HttpQuery("taskDefinitionType"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/wireless-gateway-task-definitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWirelessGatewayTaskDefinitionsRequest",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CurrentVersion: S.optional(LoRaWANGatewayVersion),
          UpdateVersion: S.optional(LoRaWANGatewayVersion),
        }),
      ).annotate({
        identifier: "LoRaWANUpdateGatewayTaskEntry",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANUpdateGatewayTaskEntry),
          Arn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateWirelessGatewayTaskEntry",
      });
    case 2:
      return S.Array(UpdateWirelessGatewayTaskEntry);
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          TaskDefinitions: S.optional(WirelessGatewayTaskDefinitionList),
        }),
      ).annotate({
        identifier: "ListWirelessGatewayTaskDefinitionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Status: PositionConfigurationStatus, Fec: PositionConfigurationFec }),
      ).annotate({ identifier: "SemtechGnssConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({ SemtechGnss: S.optional(SemtechGnssConfiguration) }),
      ).annotate({
        identifier: "PositionSolverConfigurations",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: PositionResourceType.pipe(T.HttpQuery("resourceType")),
          Solvers: S.optional(PositionSolverConfigurations),
          Destination: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/position-configurations/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutPositionConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: S.String.pipe(T.HttpQuery("resourceType")),
          LogLevel: LogLevel,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/log-levels/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutResourceLogLevelRequest",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/log-levels" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ResetAllResourceLogLevelsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: S.String.pipe(T.HttpQuery("resourceType")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/log-levels/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ResetResourceLogLevelRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ FPort: S.optional(S.Number) })).annotate({
        identifier: "LoRaWANMulticastMetadata",
      });
    case 3:
      return S.suspend(() => S.Struct({ LoRaWAN: S.optional(LoRaWANMulticastMetadata) })).annotate({
        identifier: "MulticastWirelessMetadata",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          PayloadData: S.String,
          WirelessMetadata: MulticastWirelessMetadata,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/multicast-groups/{Id}/data" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendDataToMulticastGroupRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ MessageId: S.optional(S.String) })).annotate({
        identifier: "SendDataToMulticastGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Seq: S.optional(S.Number),
          MessageType: S.optional(MessageType),
          AckModeRetryDurationSecs: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SidewalkSendDataToDevice" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LoRaWAN: S.optional(LoRaWANSendDataToDevice),
          Sidewalk: S.optional(SidewalkSendDataToDevice),
        }),
      ).annotate({ identifier: "WirelessMetadata" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          TransmitMode: S.Number,
          PayloadData: S.String,
          WirelessMetadata: S.optional(WirelessMetadata),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/wireless-devices/{Id}/data" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendDataToWirelessDeviceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          QueryString: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/multicast-groups/{Id}/bulk" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartBulkAssociateWirelessDeviceWithMulticastGroupRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "StartBulkAssociateWirelessDeviceWithMulticastGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          QueryString: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/multicast-groups/{Id}/bulk" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))) }),
      ).annotate({ identifier: "LoRaWANStartFuotaTask" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          LoRaWAN: S.optional(LoRaWANStartFuotaTask),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/fuota-tasks/{Id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartFuotaTaskRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), LoRaWAN: LoRaWANMulticastSession }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/multicast-groups/{Id}/session" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartMulticastGroupSessionRequest",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SidewalkManufacturingSn: S.optional(S.String),
          Positioning: S.optional(SidewalkPositioning),
        }),
      ).annotate({
        identifier: "SidewalkSingleStartImportInfo",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DestinationName: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          DeviceName: S.optional(S.String),
          Tags: S.optional(TagList),
          Positioning: S.optional(PositioningConfigStatus),
          Sidewalk: SidewalkSingleStartImportInfo,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/wireless_single_device_import_task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartSingleWirelessDeviceImportTaskRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeviceCreationFile: S.optional(S.String),
          Role: S.optional(S.String),
          Positioning: S.optional(SidewalkPositioning),
        }),
      ).annotate({ identifier: "SidewalkStartImportInfo" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationName: S.String,
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
          Positioning: S.optional(PositioningConfigStatus),
          Sidewalk: SidewalkStartImportInfo,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/wireless_device_import_task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartWirelessDeviceImportTaskRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpQuery("resourceArn")), Tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/wireless-devices/{Id}/test" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TestWirelessDeviceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Result: S.optional(S.String) })).annotate({
        identifier: "TestWirelessDeviceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          TagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(T.all(T.Http({ method: "DELETE", uri: "/tags" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String.pipe(T.HttpLabel("Name")),
          ExpressionType: S.optional(ExpressionType),
          Expression: S.optional(S.String),
          Description: S.optional(S.String),
          RoleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/destinations/{Name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDestinationRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeviceRegistrationState: S.optional(
            DeviceRegistrationStateResourceTypeEventConfiguration,
          ),
          Proximity: S.optional(ProximityResourceTypeEventConfiguration),
          Join: S.optional(JoinResourceTypeEventConfiguration),
          ConnectionStatus: S.optional(ConnectionStatusResourceTypeEventConfiguration),
          MessageDeliveryStatus: S.optional(MessageDeliveryStatusResourceTypeEventConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/event-configurations-resource-types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEventConfigurationByResourceTypesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANFuotaTask),
          FirmwareUpdateImage: S.optional(S.String),
          FirmwareUpdateRole: S.optional(S.String),
          RedundancyPercent: S.optional(S.Number),
          FragmentSizeBytes: S.optional(S.Number),
          FragmentIntervalMS: S.optional(S.Number),
          Descriptor: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/fuota-tasks/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFuotaTaskRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DefaultLogLevel: S.optional(LogLevel),
          FuotaTaskLogOptions: S.optional(FuotaTaskLogOptionList),
          WirelessDeviceLogOptions: S.optional(WirelessDeviceLogOptionList),
          WirelessGatewayLogOptions: S.optional(WirelessGatewayLogOptionList),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/log-levels" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateLogLevelsByResourceTypesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SummaryMetric: S.optional(SummaryMetricConfiguration) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/metric-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMetricConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANMulticast),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/multicast-groups/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMulticastGroupRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigurationName: S.String.pipe(T.HttpLabel("ConfigurationName")),
          TraceContent: S.optional(TraceContent),
          WirelessDevicesToAdd: S.optional(WirelessDeviceList),
          WirelessDevicesToRemove: S.optional(WirelessDeviceList),
          WirelessGatewaysToAdd: S.optional(WirelessGatewayList),
          WirelessGatewaysToRemove: S.optional(WirelessGatewayList),
          Description: S.optional(S.String),
          MulticastGroupsToAdd: S.optional(NetworkAnalyzerMulticastGroupList),
          MulticastGroupsToRemove: S.optional(NetworkAnalyzerMulticastGroupList),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/network-analyzer-configurations/{ConfigurationName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNetworkAnalyzerConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AppServerPrivateKey: S.optional(SensitiveString) }),
      ).annotate({ identifier: "SidewalkUpdateAccount" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Sidewalk: SidewalkUpdateAccount,
          PartnerAccountId: S.String.pipe(T.HttpLabel("PartnerAccountId")),
          PartnerType: PartnerType.pipe(T.HttpQuery("partnerType")),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/partner-accounts/{PartnerAccountId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePartnerAccountRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: PositionResourceType.pipe(T.HttpQuery("resourceType")),
          Position: PositionCoordinate,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/positions/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePositionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          IdentifierType: IdentifierType.pipe(T.HttpQuery("identifierType")),
          PartnerType: S.optional(EventNotificationPartnerType).pipe(T.HttpQuery("partnerType")),
          DeviceRegistrationState: S.optional(DeviceRegistrationStateEventConfiguration),
          Proximity: S.optional(ProximityEventConfiguration),
          Join: S.optional(JoinEventConfiguration),
          ConnectionStatus: S.optional(ConnectionStatusEventConfiguration),
          MessageDeliveryStatus: S.optional(MessageDeliveryStatusEventConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/event-configurations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResourceEventConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.String.pipe(T.HttpLabel("ResourceIdentifier")),
          ResourceType: PositionResourceType.pipe(T.HttpQuery("resourceType")),
          GeoJsonPayload: S.optional(T.StreamingInput).pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/resource-positions/{ResourceIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateResourcePositionRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ FCntStart: S.optional(S.Number) })).annotate({
        identifier: "UpdateAbpV1_1",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Positioning: S.optional(Positioning), Applications: S.optional(Applications) }),
      ).annotate({ identifier: "UpdateFPorts" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DeviceProfileId: S.optional(S.String),
          ServiceProfileId: S.optional(S.String),
          AbpV1_1: S.optional(UpdateAbpV1_1),
          AbpV1_0_x: S.optional(UpdateAbpV1_0_x),
          FPorts: S.optional(UpdateFPorts),
        }),
      ).annotate({ identifier: "LoRaWANUpdateDevice" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          DestinationName: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LoRaWAN: S.optional(LoRaWANUpdateDevice),
          Positioning: S.optional(PositioningConfigStatus),
          Sidewalk: S.optional(SidewalkUpdateWirelessDevice),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/wireless-devices/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWirelessDeviceRequest",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DeviceCreationFile: S.optional(S.String) })).annotate({
        identifier: "SidewalkUpdateImportInfo",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Id: S.String.pipe(T.HttpLabel("Id")), Sidewalk: SidewalkUpdateImportInfo }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/wireless_device_import_task/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWirelessDeviceImportTaskRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.String.pipe(T.HttpLabel("Id")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          JoinEuiFilters: S.optional(JoinEuiFilters),
          NetIdFilters: S.optional(NetIdFilters),
          MaxEirp: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/wireless-gateways/{Id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWirelessGatewayRequest",
      });
  }
}
