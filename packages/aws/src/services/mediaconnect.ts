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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "MediaConnect",
  serviceShapeName: "MediaConnect",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "mediaconnect" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-11-14");
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
              `https://mediaconnect-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://mediaconnect-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://mediaconnect.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://mediaconnect.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AddFlowOutputs420Exception
  extends /*@__PURE__*/ S.TaggedError<AddFlowOutputs420Exception>()(
    "AddFlowOutputs420Exception",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(409), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class CreateBridge420Exception
  extends /*@__PURE__*/ S.TaggedError<CreateBridge420Exception>()(
    "CreateBridge420Exception",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class CreateFlow420Exception
  extends /*@__PURE__*/ S.TaggedError<CreateFlow420Exception>()(
    "CreateFlow420Exception",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class CreateGateway420Exception
  extends /*@__PURE__*/ S.TaggedError<CreateGateway420Exception>()(
    "CreateGateway420Exception",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class GrantFlowEntitlements420Exception
  extends /*@__PURE__*/ S.TaggedError<GrantFlowEntitlements420Exception>()(
    "GrantFlowEntitlements420Exception",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class RouterInputServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<RouterInputServiceQuotaExceededException>()(
    "RouterInputServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class RouterNetworkInterfaceServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<RouterNetworkInterfaceServiceQuotaExceededException>()(
    "RouterNetworkInterfaceServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class RouterOutputServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<RouterOutputServiceQuotaExceededException>()(
    "RouterOutputServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(420),
  ) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(503), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export type BridgeArn = string;
export type Protocol =
  | "zixi-push"
  | "rtp-fec"
  | "rtp"
  | "zixi-pull"
  | "rist"
  | "st2110-jpegxs"
  | "cdi"
  | "srt-listener"
  | "srt-caller"
  | "fujitsu-qos"
  | "udp"
  | "ndi-speed-hq"
  | (string & {});
export interface AddBridgeNetworkOutputRequest {
  IpAddress?: string;
  Name?: string;
  NetworkName?: string;
  Port?: number;
  Protocol?: Protocol;
  Ttl?: number;
}
export interface AddBridgeOutputRequest {
  NetworkOutput?: AddBridgeNetworkOutputRequest;
}
export type __listOfAddBridgeOutputRequest = AddBridgeOutputRequest[];
const __listOfAddBridgeOutputRequest = /*@__PURE__*/ __L.at(__c0, 2);
export interface AddBridgeOutputsRequest {
  BridgeArn: string;
  Outputs?: AddBridgeOutputRequest[];
}
export interface BridgeFlowOutput {
  FlowArn?: string;
  FlowSourceArn?: string;
  Name?: string;
}
export interface BridgeNetworkOutput {
  IpAddress?: string;
  Name?: string;
  NetworkName?: string;
  Port?: number;
  Protocol?: Protocol;
  Ttl?: number;
}
export interface BridgeOutput {
  FlowOutput?: BridgeFlowOutput;
  NetworkOutput?: BridgeNetworkOutput;
}
export type __listOfBridgeOutput = BridgeOutput[];
const __listOfBridgeOutput = /*@__PURE__*/ __L.at(__c0, 7);
export interface AddBridgeOutputsResponse {
  BridgeArn?: string;
  Outputs?: (BridgeOutput & {
    FlowOutput: BridgeFlowOutput & { FlowArn: string; FlowSourceArn: string; Name: string };
    NetworkOutput: BridgeNetworkOutput & {
      IpAddress: string;
      Name: string;
      NetworkName: string;
      Port: number;
      Protocol: Protocol;
      Ttl: number;
    };
  })[];
}
export interface VpcInterfaceAttachment {
  VpcInterfaceName?: string;
}
export interface AddBridgeFlowSourceRequest {
  FlowArn?: string;
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
  Name?: string;
}
export interface MulticastSourceSettings {
  MulticastSourceIp?: string;
}
export interface AddBridgeNetworkSourceRequest {
  MulticastIp?: string;
  MulticastSourceSettings?: MulticastSourceSettings;
  Name?: string;
  NetworkName?: string;
  Port?: number;
  Protocol?: Protocol;
}
export interface AddBridgeSourceRequest {
  FlowSource?: AddBridgeFlowSourceRequest;
  NetworkSource?: AddBridgeNetworkSourceRequest;
}
export type __listOfAddBridgeSourceRequest = AddBridgeSourceRequest[];
const __listOfAddBridgeSourceRequest = /*@__PURE__*/ __L.at(__c1, 6);
export interface AddBridgeSourcesRequest {
  BridgeArn: string;
  Sources?: AddBridgeSourceRequest[];
}
export interface BridgeFlowSource {
  FlowArn?: string;
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
  Name?: string;
  OutputArn?: string;
}
export interface BridgeNetworkSource {
  MulticastIp?: string;
  MulticastSourceSettings?: MulticastSourceSettings;
  Name?: string;
  NetworkName?: string;
  Port?: number;
  Protocol?: Protocol;
}
export interface BridgeSource {
  FlowSource?: BridgeFlowSource;
  NetworkSource?: BridgeNetworkSource;
}
export type __listOfBridgeSource = BridgeSource[];
const __listOfBridgeSource = /*@__PURE__*/ __L.at(__c2, 3);
export interface AddBridgeSourcesResponse {
  BridgeArn?: string;
  Sources?: (BridgeSource & {
    FlowSource: BridgeFlowSource & { FlowArn: string; Name: string };
    NetworkSource: BridgeNetworkSource & {
      MulticastIp: string;
      Name: string;
      NetworkName: string;
      Port: number;
      Protocol: Protocol;
    };
  })[];
}
export type FlowArn = string;
export type Colorimetry =
  | "BT601"
  | "BT709"
  | "BT2020"
  | "BT2100"
  | "ST2065-1"
  | "ST2065-3"
  | "XYZ"
  | (string & {});
export type Range = "NARROW" | "FULL" | "FULLPROTECT" | (string & {});
export type ScanMode = "progressive" | "interlace" | "progressive-segmented-frame" | (string & {});
export type Tcs =
  | "SDR"
  | "PQ"
  | "HLG"
  | "LINEAR"
  | "BT2100LINPQ"
  | "BT2100LINHLG"
  | "ST2065-1"
  | "ST428-1"
  | "DENSITY"
  | (string & {});
export interface FmtpRequest {
  ChannelOrder?: string;
  Colorimetry?: Colorimetry;
  ExactFramerate?: string;
  Par?: string;
  Range?: Range;
  ScanMode?: ScanMode;
  Tcs?: Tcs;
}
export interface MediaStreamAttributesRequest {
  Fmtp?: FmtpRequest;
  Lang?: string;
}
export type MediaStreamType = "video" | "audio" | "ancillary-data" | (string & {});
export type __mapOfString = { [key: string]: string | undefined };
const __mapOfString = /*@__PURE__*/ __L.at(__c2, 7);
export interface AddMediaStreamRequest {
  Attributes?: MediaStreamAttributesRequest;
  ClockRate?: number;
  Description?: string;
  MediaStreamId?: number;
  MediaStreamName?: string;
  MediaStreamType?: MediaStreamType;
  VideoFormat?: string;
  MediaStreamTags?: { [key: string]: string | undefined };
}
export type __listOfAddMediaStreamRequest = AddMediaStreamRequest[];
const __listOfAddMediaStreamRequest = /*@__PURE__*/ __L.at(__c3, 1);
export interface AddFlowMediaStreamsRequest {
  FlowArn: string;
  MediaStreams?: AddMediaStreamRequest[];
}
export interface Fmtp {
  ChannelOrder?: string;
  Colorimetry?: Colorimetry;
  ExactFramerate?: string;
  Par?: string;
  Range?: Range;
  ScanMode?: ScanMode;
  Tcs?: Tcs;
}
export interface MediaStreamAttributes {
  Fmtp?: Fmtp;
  Lang?: string;
}
export interface MediaStream {
  Attributes?: MediaStreamAttributes;
  ClockRate?: number;
  Description?: string;
  Fmt?: number;
  MediaStreamId?: number;
  MediaStreamName?: string;
  MediaStreamType?: MediaStreamType;
  VideoFormat?: string;
}
export type __listOfMediaStream = MediaStream[];
const __listOfMediaStream = /*@__PURE__*/ __L.at(__c3, 5);
export interface AddFlowMediaStreamsResponse {
  FlowArn?: string;
  MediaStreams?: (MediaStream & {
    Fmt: number;
    MediaStreamId: number;
    MediaStreamName: string;
    MediaStreamType: MediaStreamType;
    Attributes: MediaStreamAttributes & { Fmtp: Fmtp };
  })[];
}
export type __listOfString = string[];
const __listOfString = /*@__PURE__*/ __L.at(__c3, 7);
export type Algorithm = "aes128" | "aes192" | "aes256" | (string & {});
export type KeyType = "speke" | "static-key" | "srt-password" | (string & {});
export interface Encryption {
  Algorithm?: Algorithm;
  ConstantInitializationVector?: string;
  DeviceId?: string;
  KeyType?: KeyType;
  Region?: string;
  ResourceId?: string;
  RoleArn?: string;
  SecretArn?: string;
  Url?: string;
}
export interface InterfaceRequest {
  Name?: string;
}
export interface DestinationConfigurationRequest {
  DestinationIp?: string;
  DestinationPort?: number;
  Interface?: InterfaceRequest;
}
export type __listOfDestinationConfigurationRequest = DestinationConfigurationRequest[];
const __listOfDestinationConfigurationRequest = /*@__PURE__*/ __L.at(__c4, 3);
export type EncodingName = "jxsv" | "raw" | "smpte291" | "pcm" | (string & {});
export type EncoderProfile = "main" | "high" | (string & {});
export interface EncodingParametersRequest {
  CompressionFactor?: number;
  EncoderProfile?: EncoderProfile;
}
export interface MediaStreamOutputConfigurationRequest {
  DestinationConfigurations?: DestinationConfigurationRequest[];
  EncodingName?: EncodingName;
  EncodingParameters?: EncodingParametersRequest;
  MediaStreamName?: string;
}
export type __listOfMediaStreamOutputConfigurationRequest = MediaStreamOutputConfigurationRequest[];
const __listOfMediaStreamOutputConfigurationRequest = /*@__PURE__*/ __L.at(__c4, 6);
export type OutputStatus = "ENABLED" | "DISABLED" | (string & {});
export type State = "ENABLED" | "DISABLED" | (string & {});
export type FlowTransitEncryptionKeyType = "SECRETS_MANAGER" | "AUTOMATIC" | (string & {});
export type SecretArn = string;
export type RoleArn = string;
export interface SecretsManagerEncryptionKeyConfiguration {
  SecretArn: string;
  RoleArn: string;
}
export interface AutomaticEncryptionKeyConfiguration {}
export type FlowTransitEncryptionKeyConfiguration =
  | { SecretsManager: SecretsManagerEncryptionKeyConfiguration; Automatic?: never }
  | { SecretsManager?: never; Automatic: AutomaticEncryptionKeyConfiguration };
export interface FlowTransitEncryption {
  EncryptionKeyType?: FlowTransitEncryptionKeyType;
  EncryptionKeyConfiguration: FlowTransitEncryptionKeyConfiguration;
}
export type NdiOutputTimecodeSource = "EMBEDDED_TIMECODE" | "UTC_SYSTEM_TIME" | (string & {});
export interface AddOutputRequest {
  CidrAllowList?: string[];
  Description?: string;
  Destination?: string;
  Encryption?: Encryption;
  MaxLatency?: number;
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[];
  MinLatency?: number;
  Name?: string;
  Port?: number;
  Protocol?: Protocol;
  RemoteId?: string;
  SenderControlPort?: number;
  SmoothingLatency?: number;
  StreamId?: string;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
  OutputStatus?: OutputStatus;
  NdiSpeedHqQuality?: number;
  NdiProgramName?: string;
  OutputTags?: { [key: string]: string | undefined };
  RouterIntegrationState?: State;
  RouterIntegrationTransitEncryption?: FlowTransitEncryption;
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource;
}
export type __listOfAddOutputRequest = AddOutputRequest[];
const __listOfAddOutputRequest = /*@__PURE__*/ __L.at(__c5, 4);
export interface AddFlowOutputsRequest {
  FlowArn: string;
  Outputs?: AddOutputRequest[];
}
export interface Interface {
  Name?: string;
}
export interface DestinationConfiguration {
  DestinationIp?: string;
  DestinationPort?: number;
  Interface?: Interface;
  OutboundIp?: string;
}
export type __listOfDestinationConfiguration = DestinationConfiguration[];
const __listOfDestinationConfiguration = /*@__PURE__*/ __L.at(__c5, 7);
export interface EncodingParameters {
  CompressionFactor?: number;
  EncoderProfile?: EncoderProfile;
}
export interface MediaStreamOutputConfiguration {
  DestinationConfigurations?: DestinationConfiguration[];
  EncodingName?: EncodingName;
  EncodingParameters?: EncodingParameters;
  MediaStreamName?: string;
}
export type __listOfMediaStreamOutputConfiguration = MediaStreamOutputConfiguration[];
const __listOfMediaStreamOutputConfiguration = /*@__PURE__*/ __L.at(__c6, 2);
export interface NdiSourceSettings {
  SourceName?: string;
}
export interface Transport {
  CidrAllowList?: string[];
  MaxBitrate?: number;
  MaxLatency?: number;
  MaxSyncBuffer?: number;
  MinLatency?: number;
  Protocol?: Protocol;
  RemoteId?: string;
  SenderControlPort?: number;
  SenderIpAddress?: string;
  SmoothingLatency?: number;
  SourceListenerAddress?: string;
  SourceListenerPort?: number;
  StreamId?: string;
  NdiSpeedHqQuality?: number;
  NdiProgramName?: string;
  NdiSourceSettings?: NdiSourceSettings;
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource;
}
export type __listOfInteger = number[];
const __listOfInteger = /*@__PURE__*/ __L.at(__c6, 5);
export interface Output {
  DataTransferSubscriberFeePercent?: number;
  Description?: string;
  Destination?: string;
  Encryption?: Encryption;
  EntitlementArn?: string;
  ListenerAddress?: string;
  MediaLiveInputArn?: string;
  MediaStreamOutputConfigurations?: MediaStreamOutputConfiguration[];
  Name?: string;
  OutputArn?: string;
  Port?: number;
  Transport?: Transport;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
  BridgeArn?: string;
  BridgePorts?: number[];
  OutputStatus?: OutputStatus;
  PeerIpAddress?: string;
  RouterIntegrationState?: State;
  RouterIntegrationTransitEncryption?: FlowTransitEncryption;
  ConnectedRouterInputArn?: string;
}
export type __listOfOutput = Output[];
const __listOfOutput = /*@__PURE__*/ __L.at(__c6, 7);
export interface AddFlowOutputsResponse {
  FlowArn?: string;
  Outputs?: (Output & {
    Name: string;
    OutputArn: string;
    Encryption: Encryption & { RoleArn: string };
    MediaStreamOutputConfigurations: (MediaStreamOutputConfiguration & {
      EncodingName: EncodingName;
      MediaStreamName: string;
      DestinationConfigurations: (DestinationConfiguration & {
        DestinationIp: string;
        DestinationPort: number;
        Interface: Interface & { Name: string };
        OutboundIp: string;
      })[];
      EncodingParameters: EncodingParameters & {
        CompressionFactor: number;
        EncoderProfile: EncoderProfile;
      };
    })[];
    Transport: Transport & { Protocol: Protocol };
  })[];
}
export interface InputConfigurationRequest {
  InputPort?: number;
  Interface?: InterfaceRequest;
}
export type __listOfInputConfigurationRequest = InputConfigurationRequest[];
const __listOfInputConfigurationRequest = /*@__PURE__*/ __L.at(__c7, 2);
export interface MediaStreamSourceConfigurationRequest {
  EncodingName?: EncodingName;
  InputConfigurations?: InputConfigurationRequest[];
  MediaStreamName?: string;
}
export type __listOfMediaStreamSourceConfigurationRequest = MediaStreamSourceConfigurationRequest[];
const __listOfMediaStreamSourceConfigurationRequest = /*@__PURE__*/ __L.at(__c7, 4);
export interface SetGatewayBridgeSourceRequest {
  BridgeArn?: string;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}
export interface SetSourceRequest {
  Decryption?: Encryption;
  Description?: string;
  EntitlementArn?: string;
  IngestPort?: number;
  MaxBitrate?: number;
  MaxLatency?: number;
  MaxSyncBuffer?: number;
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[];
  MinLatency?: number;
  Name?: string;
  Protocol?: Protocol;
  SenderControlPort?: number;
  SenderIpAddress?: string;
  SourceListenerAddress?: string;
  SourceListenerPort?: number;
  StreamId?: string;
  VpcInterfaceName?: string;
  WhitelistCidr?: string;
  GatewayBridgeSource?: SetGatewayBridgeSourceRequest;
  NdiSourceSettings?: NdiSourceSettings;
  SourceTags?: { [key: string]: string | undefined };
  RouterIntegrationState?: State;
  RouterIntegrationTransitDecryption?: FlowTransitEncryption;
}
export type __listOfSetSourceRequest = SetSourceRequest[];
const __listOfSetSourceRequest = /*@__PURE__*/ __L.at(__c7, 7);
export interface AddFlowSourcesRequest {
  FlowArn: string;
  Sources?: SetSourceRequest[];
}
export interface InputConfiguration {
  InputIp?: string;
  InputPort?: number;
  Interface?: Interface;
}
export type __listOfInputConfiguration = InputConfiguration[];
const __listOfInputConfiguration = /*@__PURE__*/ __L.at(__c8, 2);
export interface MediaStreamSourceConfiguration {
  EncodingName?: EncodingName;
  InputConfigurations?: InputConfiguration[];
  MediaStreamName?: string;
}
export type __listOfMediaStreamSourceConfiguration = MediaStreamSourceConfiguration[];
const __listOfMediaStreamSourceConfiguration = /*@__PURE__*/ __L.at(__c8, 4);
export interface GatewayBridgeSource {
  BridgeArn?: string;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}
export interface Source {
  DataTransferSubscriberFeePercent?: number;
  Decryption?: Encryption;
  Description?: string;
  EntitlementArn?: string;
  IngestIp?: string;
  IngestPort?: number;
  MediaStreamSourceConfigurations?: MediaStreamSourceConfiguration[];
  Name?: string;
  SenderControlPort?: number;
  SenderIpAddress?: string;
  SourceArn?: string;
  Transport?: Transport;
  VpcInterfaceName?: string;
  WhitelistCidr?: string;
  GatewayBridgeSource?: GatewayBridgeSource;
  PeerIpAddress?: string;
  RouterIntegrationState?: State;
  RouterIntegrationTransitDecryption?: FlowTransitEncryption;
  ConnectedRouterOutputArn?: string;
}
export type __listOfSource = Source[];
const __listOfSource = /*@__PURE__*/ __L.at(__c8, 7);
export interface AddFlowSourcesResponse {
  FlowArn?: string;
  Sources?: (Source & {
    Name: string;
    SourceArn: string;
    Decryption: Encryption & { RoleArn: string };
    MediaStreamSourceConfigurations: (MediaStreamSourceConfiguration & {
      EncodingName: EncodingName;
      MediaStreamName: string;
      InputConfigurations: (InputConfiguration & {
        InputIp: string;
        InputPort: number;
        Interface: Interface & { Name: string };
      })[];
    })[];
    Transport: Transport & { Protocol: Protocol };
    GatewayBridgeSource: GatewayBridgeSource & { BridgeArn: string };
  })[];
}
export type NetworkInterfaceType = "ena" | "efa" | (string & {});
export interface VpcInterfaceRequest {
  Name?: string;
  NetworkInterfaceType?: NetworkInterfaceType;
  RoleArn?: string;
  SecurityGroupIds?: string[];
  SubnetId?: string;
  VpcInterfaceTags?: { [key: string]: string | undefined };
}
export type __listOfVpcInterfaceRequest = VpcInterfaceRequest[];
const __listOfVpcInterfaceRequest = /*@__PURE__*/ __L.at(__c9, 2);
export interface AddFlowVpcInterfacesRequest {
  FlowArn: string;
  VpcInterfaces?: VpcInterfaceRequest[];
}
export interface VpcInterface {
  Name?: string;
  NetworkInterfaceIds?: string[];
  NetworkInterfaceType?: NetworkInterfaceType;
  RoleArn?: string;
  SecurityGroupIds?: string[];
  SubnetId?: string;
}
export type __listOfVpcInterface = VpcInterface[];
const __listOfVpcInterface = /*@__PURE__*/ __L.at(__c9, 5);
export interface AddFlowVpcInterfacesResponse {
  FlowArn?: string;
  VpcInterfaces?: (VpcInterface & {
    Name: string;
    NetworkInterfaceIds: __listOfString;
    NetworkInterfaceType: NetworkInterfaceType;
    RoleArn: string;
    SecurityGroupIds: __listOfString;
    SubnetId: string;
  })[];
}
export type RouterInputArn = string;
export type RouterInputArnList = string[];
const RouterInputArnList = __listOfString as any as S.Schema<RouterInputArnList>;
export interface BatchGetRouterInputRequest {
  Arns: string[];
}
export type RouterInputState =
  | "CREATING"
  | "STANDBY"
  | "STARTING"
  | "ACTIVE"
  | "STOPPING"
  | "DELETING"
  | "UPDATING"
  | "ERROR"
  | "RECOVERING"
  | "MIGRATING"
  | (string & {});
export type RouterInputType =
  | "STANDARD"
  | "FAILOVER"
  | "MERGE"
  | "MEDIACONNECT_FLOW"
  | "MEDIALIVE_CHANNEL"
  | (string & {});
export type RouterNetworkInterfaceArn = string;
export interface RistRouterInputConfiguration {
  Port: number;
  RecoveryLatencyMilliseconds: number;
}
export interface SrtDecryptionConfiguration {
  EncryptionKey: SecretsManagerEncryptionKeyConfiguration;
}
export interface SrtListenerRouterInputConfiguration {
  Port: number;
  MinimumLatencyMilliseconds: number;
  DecryptionConfiguration?: SrtDecryptionConfiguration;
}
export interface SrtCallerRouterInputConfiguration {
  SourceAddress: string;
  SourcePort: number;
  MinimumLatencyMilliseconds: number;
  StreamId?: string;
  DecryptionConfiguration?: SrtDecryptionConfiguration;
}
export type ForwardErrorCorrectionState = "ENABLED" | "DISABLED" | (string & {});
export interface RtpRouterInputConfiguration {
  Port: number;
  ForwardErrorCorrection?: ForwardErrorCorrectionState;
}
export type RouterInputProtocolConfiguration =
  | { Rist: RistRouterInputConfiguration; SrtListener?: never; SrtCaller?: never; Rtp?: never }
  | {
      Rist?: never;
      SrtListener: SrtListenerRouterInputConfiguration;
      SrtCaller?: never;
      Rtp?: never;
    }
  | { Rist?: never; SrtListener?: never; SrtCaller: SrtCallerRouterInputConfiguration; Rtp?: never }
  | { Rist?: never; SrtListener?: never; SrtCaller?: never; Rtp: RtpRouterInputConfiguration };
export type RouterInputProtocol = "RTP" | "RIST" | "SRT_CALLER" | "SRT_LISTENER" | (string & {});
export interface StandardRouterInputConfiguration {
  NetworkInterfaceArn: string;
  ProtocolConfiguration: RouterInputProtocolConfiguration;
  Protocol?: RouterInputProtocol;
}
export type MediaLiveChannelArn = string;
export type MediaLiveChannelPipelineId = "PIPELINE_0" | "PIPELINE_1" | (string & {});
export type MediaLiveTransitEncryptionKeyType = "SECRETS_MANAGER" | "AUTOMATIC" | (string & {});
export type MediaLiveTransitEncryptionKeyConfiguration =
  | { SecretsManager: SecretsManagerEncryptionKeyConfiguration; Automatic?: never }
  | { SecretsManager?: never; Automatic: AutomaticEncryptionKeyConfiguration };
export interface MediaLiveTransitEncryption {
  EncryptionKeyType?: MediaLiveTransitEncryptionKeyType;
  EncryptionKeyConfiguration: MediaLiveTransitEncryptionKeyConfiguration;
}
export interface MediaLiveChannelRouterInputConfiguration {
  MediaLiveChannelArn?: string;
  MediaLivePipelineId?: MediaLiveChannelPipelineId;
  MediaLiveChannelOutputName?: string;
  SourceTransitDecryption: MediaLiveTransitEncryption;
}
export type FailoverRouterInputProtocolConfiguration =
  | { Rist: RistRouterInputConfiguration; SrtListener?: never; SrtCaller?: never; Rtp?: never }
  | {
      Rist?: never;
      SrtListener: SrtListenerRouterInputConfiguration;
      SrtCaller?: never;
      Rtp?: never;
    }
  | { Rist?: never; SrtListener?: never; SrtCaller: SrtCallerRouterInputConfiguration; Rtp?: never }
  | { Rist?: never; SrtListener?: never; SrtCaller?: never; Rtp: RtpRouterInputConfiguration };
export type FailoverRouterInputProtocolConfigurationList =
  FailoverRouterInputProtocolConfiguration[];
export type FailoverInputSourcePriorityMode = "NO_PRIORITY" | "PRIMARY_SECONDARY" | (string & {});
export interface FailoverRouterInputConfiguration {
  NetworkInterfaceArn: string;
  ProtocolConfigurations: FailoverRouterInputProtocolConfiguration[];
  SourcePriorityMode: FailoverInputSourcePriorityMode;
  PrimarySourceIndex?: number;
}
export type FlowOutputArn = string;
export interface MediaConnectFlowRouterInputConfiguration {
  FlowArn?: string;
  FlowOutputArn?: string;
  SourceTransitDecryption: FlowTransitEncryption;
}
export type MergeRouterInputProtocolConfiguration =
  | { Rtp: RtpRouterInputConfiguration; Rist?: never }
  | { Rtp?: never; Rist: RistRouterInputConfiguration };
export type MergeRouterInputProtocolConfigurationList = MergeRouterInputProtocolConfiguration[];
export interface MergeRouterInputConfiguration {
  NetworkInterfaceArn: string;
  ProtocolConfigurations: MergeRouterInputProtocolConfiguration[];
  MergeRecoveryWindowMilliseconds: number;
}
export type RouterInputConfiguration =
  | {
      Standard: StandardRouterInputConfiguration;
      MediaLiveChannel?: never;
      Failover?: never;
      MediaConnectFlow?: never;
      Merge?: never;
    }
  | {
      Standard?: never;
      MediaLiveChannel: MediaLiveChannelRouterInputConfiguration;
      Failover?: never;
      MediaConnectFlow?: never;
      Merge?: never;
    }
  | {
      Standard?: never;
      MediaLiveChannel?: never;
      Failover: FailoverRouterInputConfiguration;
      MediaConnectFlow?: never;
      Merge?: never;
    }
  | {
      Standard?: never;
      MediaLiveChannel?: never;
      Failover?: never;
      MediaConnectFlow: MediaConnectFlowRouterInputConfiguration;
      Merge?: never;
    }
  | {
      Standard?: never;
      MediaLiveChannel?: never;
      Failover?: never;
      MediaConnectFlow?: never;
      Merge: MergeRouterInputConfiguration;
    };
export type RouterInputTier = "INPUT_100" | "INPUT_50" | "INPUT_20" | (string & {});
export type RoutingScope = "REGIONAL" | "GLOBAL" | (string & {});
export interface RouterInputMessage {
  Code: string;
  Message: string;
}
export type RouterInputMessages = RouterInputMessage[];
export type RouterInputTransitEncryptionKeyType = "SECRETS_MANAGER" | "AUTOMATIC" | (string & {});
export type RouterInputTransitEncryptionKeyConfiguration =
  | { SecretsManager: SecretsManagerEncryptionKeyConfiguration; Automatic?: never }
  | { SecretsManager?: never; Automatic: AutomaticEncryptionKeyConfiguration };
export interface RouterInputTransitEncryption {
  EncryptionKeyType?: RouterInputTransitEncryptionKeyType;
  EncryptionKeyConfiguration: RouterInputTransitEncryptionKeyConfiguration;
}
export interface StandardRouterInputStreamDetails {
  SourceIpAddress?: string;
}
export interface MediaLiveChannelRouterInputStreamDetails {}
export interface FailoverRouterInputIndexedStreamDetails {
  SourceIndex: number;
  SourceIpAddress?: string;
}
export interface FailoverRouterInputStreamDetails {
  SourceIndexZeroStreamDetails: FailoverRouterInputIndexedStreamDetails;
  SourceIndexOneStreamDetails: FailoverRouterInputIndexedStreamDetails;
}
export interface MediaConnectFlowRouterInputStreamDetails {}
export interface MergeRouterInputIndexedStreamDetails {
  SourceIndex: number;
  SourceIpAddress?: string;
}
export interface MergeRouterInputStreamDetails {
  SourceIndexZeroStreamDetails: MergeRouterInputIndexedStreamDetails;
  SourceIndexOneStreamDetails: MergeRouterInputIndexedStreamDetails;
}
export type RouterInputStreamDetails =
  | {
      Standard: StandardRouterInputStreamDetails;
      MediaLiveChannel?: never;
      Failover?: never;
      MediaConnectFlow?: never;
      Merge?: never;
    }
  | {
      Standard?: never;
      MediaLiveChannel: MediaLiveChannelRouterInputStreamDetails;
      Failover?: never;
      MediaConnectFlow?: never;
      Merge?: never;
    }
  | {
      Standard?: never;
      MediaLiveChannel?: never;
      Failover: FailoverRouterInputStreamDetails;
      MediaConnectFlow?: never;
      Merge?: never;
    }
  | {
      Standard?: never;
      MediaLiveChannel?: never;
      Failover?: never;
      MediaConnectFlow: MediaConnectFlowRouterInputStreamDetails;
      Merge?: never;
    }
  | {
      Standard?: never;
      MediaLiveChannel?: never;
      Failover?: never;
      MediaConnectFlow?: never;
      Merge: MergeRouterInputStreamDetails;
    };
export type MaintenanceType = "PREFERRED_DAY_TIME" | "DEFAULT" | (string & {});
export type Day =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY"
  | (string & {});
export interface PreferredDayTimeMaintenanceConfiguration {
  Day: Day;
  Time: string;
}
export interface DefaultMaintenanceConfiguration {}
export type MaintenanceConfiguration =
  | { PreferredDayTime: PreferredDayTimeMaintenanceConfiguration; Default?: never }
  | { PreferredDayTime?: never; Default: DefaultMaintenanceConfiguration };
export type MaintenanceScheduleType = "WINDOW" | (string & {});
export interface WindowMaintenanceSchedule {
  Start: Date;
  End: Date;
  ScheduledTime: Date;
}
export type MaintenanceSchedule = { Window: WindowMaintenanceSchedule };
export type RouterContentQualityAnalysisType = "CONTENT_LEVEL" | (string & {});
export type ContentQualityAnalysisState = "ENABLED" | "DISABLED" | (string & {});
export type RouterCqaThresholdSeconds = number;
export interface BlackFramesConfiguration {
  State: ContentQualityAnalysisState;
  ThresholdSeconds: number;
}
export interface FrozenFramesConfiguration {
  State: ContentQualityAnalysisState;
  ThresholdSeconds: number;
}
export interface SilentAudioConfiguration {
  State: ContentQualityAnalysisState;
  ThresholdSeconds: number;
}
export interface ContentQualityAnalysisFeatureConfiguration {
  BlackFrames?: BlackFramesConfiguration;
  FrozenFrames?: FrozenFramesConfiguration;
  SilentAudio?: SilentAudioConfiguration;
}
export type RouterContentQualityAnalysisConfiguration = {
  ContentLevel: ContentQualityAnalysisFeatureConfiguration;
};
export interface RouterInput {
  Name: string;
  Arn: string;
  Id: string;
  State: RouterInputState;
  InputType: RouterInputType;
  Configuration: RouterInputConfiguration;
  RoutedOutputs: number;
  MaximumRoutedOutputs?: number;
  RegionName: string;
  AvailabilityZone: string;
  MaximumBitrate: number;
  Tier: RouterInputTier;
  RoutingScope: RoutingScope;
  CreatedAt: Date;
  UpdatedAt: Date;
  Messages: RouterInputMessage[];
  TransitEncryption: RouterInputTransitEncryption;
  Tags: { [key: string]: string | undefined };
  StreamDetails: RouterInputStreamDetails;
  IpAddress?: string;
  MaintenanceType: MaintenanceType;
  MaintenanceConfiguration: MaintenanceConfiguration;
  MaintenanceScheduleType?: MaintenanceScheduleType;
  MaintenanceSchedule?: MaintenanceSchedule;
  ContentQualityAnalysisType?: RouterContentQualityAnalysisType;
  ContentQualityAnalysisConfiguration?: RouterContentQualityAnalysisConfiguration;
}
export type RouterInputList = RouterInput[];
export interface BatchGetRouterInputError_ {
  Arn: string;
  Code: string;
  Message: string;
}
export type BatchGetRouterInputErrorList = BatchGetRouterInputError_[];
export interface BatchGetRouterInputResponse {
  RouterInputs: (RouterInput & {
    ContentQualityAnalysisType: RouterContentQualityAnalysisType;
    ContentQualityAnalysisConfiguration: RouterContentQualityAnalysisConfiguration;
  })[];
  Errors: BatchGetRouterInputError_[];
}
export type RouterNetworkInterfaceArnList = string[];
const RouterNetworkInterfaceArnList =
  __listOfString as any as S.Schema<RouterNetworkInterfaceArnList>;
export interface BatchGetRouterNetworkInterfaceRequest {
  Arns: string[];
}
export type RouterNetworkInterfaceState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "ERROR"
  | "RECOVERING"
  | (string & {});
export type RouterNetworkInterfaceType = "PUBLIC" | "VPC" | (string & {});
export interface PublicRouterNetworkInterfaceRule {
  Cidr: string;
}
export type NetworkInterfaceRuleList = PublicRouterNetworkInterfaceRule[];
export interface PublicRouterNetworkInterfaceConfiguration {
  AllowRules: PublicRouterNetworkInterfaceRule[];
}
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = __listOfString as any as S.Schema<SecurityGroupIdList>;
export interface VpcRouterNetworkInterfaceConfiguration {
  SecurityGroupIds: string[];
  SubnetId: string;
}
export type RouterNetworkInterfaceConfiguration =
  | { Public: PublicRouterNetworkInterfaceConfiguration; Vpc?: never }
  | { Public?: never; Vpc: VpcRouterNetworkInterfaceConfiguration };
export interface RouterNetworkInterface {
  Name: string;
  Arn: string;
  Id: string;
  State: RouterNetworkInterfaceState;
  NetworkInterfaceType: RouterNetworkInterfaceType;
  Configuration: RouterNetworkInterfaceConfiguration;
  AssociatedOutputCount: number;
  AssociatedInputCount: number;
  RegionName: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  Tags: { [key: string]: string | undefined };
}
export type RouterNetworkInterfaceList = RouterNetworkInterface[];
export interface BatchGetRouterNetworkInterfaceError_ {
  Arn: string;
  Code: string;
  Message: string;
}
export type BatchGetRouterNetworkInterfaceErrorList = BatchGetRouterNetworkInterfaceError_[];
export interface BatchGetRouterNetworkInterfaceResponse {
  RouterNetworkInterfaces: RouterNetworkInterface[];
  Errors: BatchGetRouterNetworkInterfaceError_[];
}
export type RouterOutputArn = string;
export type RouterOutputArnList = string[];
const RouterOutputArnList = __listOfString as any as S.Schema<RouterOutputArnList>;
export interface BatchGetRouterOutputRequest {
  Arns: string[];
}
export type RouterOutputState =
  | "CREATING"
  | "STANDBY"
  | "STARTING"
  | "ACTIVE"
  | "STOPPING"
  | "DELETING"
  | "UPDATING"
  | "ERROR"
  | "RECOVERING"
  | "MIGRATING"
  | (string & {});
export type RouterOutputType = "STANDARD" | "MEDIACONNECT_FLOW" | "MEDIALIVE_INPUT" | (string & {});
export interface RistRouterOutputConfiguration {
  DestinationAddress: string;
  DestinationPort: number;
}
export interface SrtEncryptionConfiguration {
  EncryptionKey: SecretsManagerEncryptionKeyConfiguration;
}
export interface SrtListenerRouterOutputConfiguration {
  Port: number;
  MinimumLatencyMilliseconds: number;
  EncryptionConfiguration?: SrtEncryptionConfiguration;
}
export type TlsEncryptionType = "PUBLIC" | (string & {});
export interface PublicTlsEncryptionConfiguration {}
export type TlsEncryptionConfiguration = { Public: PublicTlsEncryptionConfiguration };
export interface TlsEncryption {
  EncryptionType?: TlsEncryptionType;
  EncryptionConfiguration: TlsEncryptionConfiguration;
}
export interface RtmpPushRouterOutputConfiguration {
  DestinationAddress: string;
  DestinationPort: number;
  ApplicationName: string;
  StreamName: string;
  TlsEncryption?: TlsEncryption;
}
export interface SrtCallerRouterOutputConfiguration {
  DestinationAddress: string;
  DestinationPort: number;
  MinimumLatencyMilliseconds: number;
  StreamId?: string;
  EncryptionConfiguration?: SrtEncryptionConfiguration;
}
export interface RtpRouterOutputConfiguration {
  DestinationAddress: string;
  DestinationPort: number;
  ForwardErrorCorrection?: ForwardErrorCorrectionState;
}
export type RouterOutputProtocolConfiguration =
  | {
      Rist: RistRouterOutputConfiguration;
      SrtListener?: never;
      RtmpPush?: never;
      SrtCaller?: never;
      Rtp?: never;
    }
  | {
      Rist?: never;
      SrtListener: SrtListenerRouterOutputConfiguration;
      RtmpPush?: never;
      SrtCaller?: never;
      Rtp?: never;
    }
  | {
      Rist?: never;
      SrtListener?: never;
      RtmpPush: RtmpPushRouterOutputConfiguration;
      SrtCaller?: never;
      Rtp?: never;
    }
  | {
      Rist?: never;
      SrtListener?: never;
      RtmpPush?: never;
      SrtCaller: SrtCallerRouterOutputConfiguration;
      Rtp?: never;
    }
  | {
      Rist?: never;
      SrtListener?: never;
      RtmpPush?: never;
      SrtCaller?: never;
      Rtp: RtpRouterOutputConfiguration;
    };
export type RouterOutputProtocol =
  | "RTP"
  | "RIST"
  | "SRT_CALLER"
  | "SRT_LISTENER"
  | "RTMP_PUSH"
  | (string & {});
export interface StandardRouterOutputConfiguration {
  NetworkInterfaceArn: string;
  ProtocolConfiguration: RouterOutputProtocolConfiguration;
  Protocol?: RouterOutputProtocol;
}
export type FlowSourceArn = string;
export interface MediaConnectFlowRouterOutputConfiguration {
  FlowArn?: string;
  FlowSourceArn?: string;
  DestinationTransitEncryption: FlowTransitEncryption;
}
export type MediaLiveInputArn = string;
export type MediaLiveInputPipelineId = "PIPELINE_0" | "PIPELINE_1" | (string & {});
export interface MediaLiveInputRouterOutputConfiguration {
  MediaLiveInputArn?: string;
  MediaLivePipelineId?: MediaLiveInputPipelineId;
  DestinationTransitEncryption: MediaLiveTransitEncryption;
}
export type RouterOutputConfiguration =
  | {
      Standard: StandardRouterOutputConfiguration;
      MediaConnectFlow?: never;
      MediaLiveInput?: never;
    }
  | {
      Standard?: never;
      MediaConnectFlow: MediaConnectFlowRouterOutputConfiguration;
      MediaLiveInput?: never;
    }
  | {
      Standard?: never;
      MediaConnectFlow?: never;
      MediaLiveInput: MediaLiveInputRouterOutputConfiguration;
    };
export type RouterOutputRoutedState = "ROUTED" | "ROUTING" | "UNROUTED" | (string & {});
export type RouterOutputTier = "OUTPUT_100" | "OUTPUT_50" | "OUTPUT_20" | (string & {});
export interface RouterOutputMessage {
  Code: string;
  Message: string;
}
export type RouterOutputMessages = RouterOutputMessage[];
export interface StandardRouterOutputStreamDetails {
  DestinationIpAddress?: string;
}
export interface MediaConnectFlowRouterOutputStreamDetails {}
export interface MediaLiveInputRouterOutputStreamDetails {}
export type RouterOutputStreamDetails =
  | {
      Standard: StandardRouterOutputStreamDetails;
      MediaConnectFlow?: never;
      MediaLiveInput?: never;
    }
  | {
      Standard?: never;
      MediaConnectFlow: MediaConnectFlowRouterOutputStreamDetails;
      MediaLiveInput?: never;
    }
  | {
      Standard?: never;
      MediaConnectFlow?: never;
      MediaLiveInput: MediaLiveInputRouterOutputStreamDetails;
    };
export type FabricLatencyMode = "BALANCED" | "LOW_LATENCY" | (string & {});
export interface FabricConfiguration {
  RecoveryLatencyMode: FabricLatencyMode;
}
export interface RouterOutput {
  Name: string;
  Arn: string;
  Id: string;
  State: RouterOutputState;
  OutputType: RouterOutputType;
  Configuration: RouterOutputConfiguration;
  RoutedState: RouterOutputRoutedState;
  RegionName: string;
  AvailabilityZone: string;
  MaximumBitrate: number;
  RoutingScope: RoutingScope;
  Tier: RouterOutputTier;
  CreatedAt: Date;
  UpdatedAt: Date;
  Messages: RouterOutputMessage[];
  Tags: { [key: string]: string | undefined };
  StreamDetails: RouterOutputStreamDetails;
  IpAddress?: string;
  RoutedInputArn?: string;
  MaintenanceType: MaintenanceType;
  MaintenanceConfiguration: MaintenanceConfiguration;
  MaintenanceScheduleType?: MaintenanceScheduleType;
  MaintenanceSchedule?: MaintenanceSchedule;
  FabricConfiguration?: FabricConfiguration;
}
export type RouterOutputList = RouterOutput[];
export interface BatchGetRouterOutputError_ {
  Arn: string;
  Code: string;
  Message: string;
}
export type BatchGetRouterOutputErrorList = BatchGetRouterOutputError_[];
export interface BatchGetRouterOutputResponse {
  RouterOutputs: (RouterOutput & { FabricConfiguration: FabricConfiguration })[];
  Errors: BatchGetRouterOutputError_[];
}
export interface AddEgressGatewayBridgeRequest {
  MaxBitrate?: number;
}
export interface AddIngressGatewayBridgeRequest {
  MaxBitrate?: number;
  MaxOutputs?: number;
}
export type FailoverMode = "MERGE" | "FAILOVER" | (string & {});
export interface SourcePriority {
  PrimarySource?: string;
}
export interface FailoverConfig {
  FailoverMode?: FailoverMode;
  RecoveryWindow?: number;
  SourcePriority?: SourcePriority;
  State?: State;
}
export interface CreateBridgeRequest {
  EgressGatewayBridge?: AddEgressGatewayBridgeRequest;
  IngressGatewayBridge?: AddIngressGatewayBridgeRequest;
  Name?: string;
  Outputs?: AddBridgeOutputRequest[];
  PlacementArn?: string;
  SourceFailoverConfig?: FailoverConfig;
  Sources?: AddBridgeSourceRequest[];
}
export interface MessageDetail {
  Code?: string;
  Message?: string;
  ResourceName?: string;
}
export type __listOfMessageDetail = MessageDetail[];
const __listOfMessageDetail = /*@__PURE__*/ __L.at(__c19, 3);
export type BridgeState =
  | "CREATING"
  | "STANDBY"
  | "STARTING"
  | "DEPLOYING"
  | "ACTIVE"
  | "STOPPING"
  | "DELETING"
  | "DELETED"
  | "START_FAILED"
  | "START_PENDING"
  | "STOP_FAILED"
  | "UPDATING"
  | (string & {});
export interface EgressGatewayBridge {
  InstanceId?: string;
  MaxBitrate?: number;
}
export interface IngressGatewayBridge {
  InstanceId?: string;
  MaxBitrate?: number;
  MaxOutputs?: number;
}
export interface Bridge {
  BridgeArn?: string;
  BridgeMessages?: MessageDetail[];
  BridgeState?: BridgeState;
  EgressGatewayBridge?: EgressGatewayBridge;
  IngressGatewayBridge?: IngressGatewayBridge;
  Name?: string;
  Outputs?: BridgeOutput[];
  PlacementArn?: string;
  SourceFailoverConfig?: FailoverConfig;
  Sources?: BridgeSource[];
}
export interface CreateBridgeResponse {
  Bridge?: Bridge & {
    BridgeArn: string;
    BridgeState: BridgeState;
    Name: string;
    PlacementArn: string;
    BridgeMessages: (MessageDetail & { Code: string; Message: string })[];
    EgressGatewayBridge: EgressGatewayBridge & { MaxBitrate: number };
    IngressGatewayBridge: IngressGatewayBridge & { MaxBitrate: number; MaxOutputs: number };
    Outputs: (BridgeOutput & {
      FlowOutput: BridgeFlowOutput & { FlowArn: string; FlowSourceArn: string; Name: string };
      NetworkOutput: BridgeNetworkOutput & {
        IpAddress: string;
        Name: string;
        NetworkName: string;
        Port: number;
        Protocol: Protocol;
        Ttl: number;
      };
    })[];
    Sources: (BridgeSource & {
      FlowSource: BridgeFlowSource & { FlowArn: string; Name: string };
      NetworkSource: BridgeNetworkSource & {
        MulticastIp: string;
        Name: string;
        NetworkName: string;
        Port: number;
        Protocol: Protocol;
      };
    })[];
  };
}
export type EntitlementStatus = "ENABLED" | "DISABLED" | (string & {});
export interface GrantEntitlementRequest {
  DataTransferSubscriberFeePercent?: number;
  Description?: string;
  Encryption?: Encryption;
  EntitlementStatus?: EntitlementStatus;
  Name?: string;
  Subscribers?: string[];
  EntitlementTags?: { [key: string]: string | undefined };
}
export type __listOfGrantEntitlementRequest = GrantEntitlementRequest[];
const __listOfGrantEntitlementRequest = /*@__PURE__*/ __L.at(__c20, 1);
export type MaintenanceDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"
  | (string & {});
export interface AddMaintenance {
  MaintenanceDay?: MaintenanceDay;
  MaintenanceStartHour?: string;
}
export type ThumbnailState = "ENABLED" | "DISABLED" | (string & {});
export interface SilentAudio {
  State?: State;
  ThresholdSeconds?: number;
}
export interface AudioMonitoringSetting {
  SilentAudio?: SilentAudio;
}
export type __listOfAudioMonitoringSetting = AudioMonitoringSetting[];
const __listOfAudioMonitoringSetting = /*@__PURE__*/ __L.at(__c20, 5);
export interface BlackFrames {
  State?: State;
  ThresholdSeconds?: number;
}
export interface FrozenFrames {
  State?: State;
  ThresholdSeconds?: number;
}
export interface VideoMonitoringSetting {
  BlackFrames?: BlackFrames;
  FrozenFrames?: FrozenFrames;
}
export type __listOfVideoMonitoringSetting = VideoMonitoringSetting[];
const __listOfVideoMonitoringSetting = /*@__PURE__*/ __L.at(__c20, 7);
export interface MonitoringConfig {
  ThumbnailState?: ThumbnailState;
  AudioMonitoringSettings?: AudioMonitoringSetting[];
  ContentQualityAnalysisState?: ContentQualityAnalysisState;
  VideoMonitoringSettings?: VideoMonitoringSetting[];
}
export type FlowSize = "MEDIUM" | "LARGE" | "LARGE_4X" | (string & {});
export type NdiState = "ENABLED" | "DISABLED" | (string & {});
export interface NdiDiscoveryServerConfig {
  DiscoveryServerAddress?: string;
  DiscoveryServerPort?: number;
  VpcInterfaceAdapter?: string;
}
export type __listOfNdiDiscoveryServerConfig = NdiDiscoveryServerConfig[];
const __listOfNdiDiscoveryServerConfig = /*@__PURE__*/ __L.at(__c21, 2);
export interface NdiConfig {
  NdiState?: NdiState;
  MachineName?: string;
  NdiDiscoveryServers?: NdiDiscoveryServerConfig[];
}
export type EncodingProfile =
  | "DISTRIBUTION_H264_DEFAULT"
  | "CONTRIBUTION_H264_DEFAULT"
  | (string & {});
export interface EncodingConfig {
  EncodingProfile?: EncodingProfile;
  VideoMaxBitrate?: number;
}
export interface CreateFlowRequest {
  AvailabilityZone?: string;
  Entitlements?: GrantEntitlementRequest[];
  MediaStreams?: AddMediaStreamRequest[];
  Name?: string;
  Outputs?: AddOutputRequest[];
  Source?: SetSourceRequest;
  SourceFailoverConfig?: FailoverConfig;
  Sources?: SetSourceRequest[];
  VpcInterfaces?: VpcInterfaceRequest[];
  Maintenance?: AddMaintenance;
  SourceMonitoringConfig?: MonitoringConfig;
  FlowSize?: FlowSize;
  NdiConfig?: NdiConfig;
  EncodingConfig?: EncodingConfig;
  FlowTags?: { [key: string]: string | undefined };
}
export interface Entitlement {
  DataTransferSubscriberFeePercent?: number;
  Description?: string;
  Encryption?: Encryption;
  EntitlementArn?: string;
  EntitlementStatus?: EntitlementStatus;
  Name?: string;
  Subscribers?: string[];
}
export type __listOfEntitlement = Entitlement[];
const __listOfEntitlement = /*@__PURE__*/ __L.at(__c21, 7);
export type Status =
  | "STANDBY"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "STARTING"
  | "STOPPING"
  | "ERROR"
  | (string & {});
export interface Maintenance {
  MaintenanceDay?: MaintenanceDay;
  MaintenanceDeadline?: string;
  MaintenanceScheduledDate?: string;
  MaintenanceStartHour?: string;
}
export interface Flow {
  AvailabilityZone?: string;
  Description?: string;
  EgressIp?: string;
  Entitlements?: Entitlement[];
  FlowArn?: string;
  MediaStreams?: MediaStream[];
  Name?: string;
  Outputs?: Output[];
  Source?: Source;
  SourceFailoverConfig?: FailoverConfig;
  Sources?: Source[];
  Status?: Status;
  VpcInterfaces?: VpcInterface[];
  Maintenance?: Maintenance;
  SourceMonitoringConfig?: MonitoringConfig;
  FlowSize?: FlowSize;
  NdiConfig?: NdiConfig;
  EncodingConfig?: EncodingConfig;
}
export interface CreateFlowResponse {
  Flow?: Flow & {
    AvailabilityZone: string;
    Entitlements: (Entitlement & {
      EntitlementArn: string;
      Name: string;
      Subscribers: __listOfString;
      Encryption: Encryption & { RoleArn: string };
    })[];
    FlowArn: string;
    Name: string;
    Outputs: (Output & {
      Name: string;
      OutputArn: string;
      Encryption: Encryption & { RoleArn: string };
      MediaStreamOutputConfigurations: (MediaStreamOutputConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        DestinationConfigurations: (DestinationConfiguration & {
          DestinationIp: string;
          DestinationPort: number;
          Interface: Interface & { Name: string };
          OutboundIp: string;
        })[];
        EncodingParameters: EncodingParameters & {
          CompressionFactor: number;
          EncoderProfile: EncoderProfile;
        };
      })[];
      Transport: Transport & { Protocol: Protocol };
    })[];
    Source: Source & {
      Name: string;
      SourceArn: string;
      Decryption: Encryption & { RoleArn: string };
      MediaStreamSourceConfigurations: (MediaStreamSourceConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        InputConfigurations: (InputConfiguration & {
          InputIp: string;
          InputPort: number;
          Interface: Interface & { Name: string };
        })[];
      })[];
      Transport: Transport & { Protocol: Protocol };
      GatewayBridgeSource: GatewayBridgeSource & { BridgeArn: string };
    };
    Status: Status;
    MediaStreams: (MediaStream & {
      Fmt: number;
      MediaStreamId: number;
      MediaStreamName: string;
      MediaStreamType: MediaStreamType;
      Attributes: MediaStreamAttributes & { Fmtp: Fmtp };
    })[];
    Sources: (Source & {
      Name: string;
      SourceArn: string;
      Decryption: Encryption & { RoleArn: string };
      MediaStreamSourceConfigurations: (MediaStreamSourceConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        InputConfigurations: (InputConfiguration & {
          InputIp: string;
          InputPort: number;
          Interface: Interface & { Name: string };
        })[];
      })[];
      Transport: Transport & { Protocol: Protocol };
      GatewayBridgeSource: GatewayBridgeSource & { BridgeArn: string };
    })[];
    VpcInterfaces: (VpcInterface & {
      Name: string;
      NetworkInterfaceIds: __listOfString;
      NetworkInterfaceType: NetworkInterfaceType;
      RoleArn: string;
      SecurityGroupIds: __listOfString;
      SubnetId: string;
    })[];
    NdiConfig: NdiConfig & {
      NdiDiscoveryServers: (NdiDiscoveryServerConfig & {
        DiscoveryServerAddress: string;
        VpcInterfaceAdapter: string;
      })[];
    };
  };
}
export interface GatewayNetwork {
  CidrBlock?: string;
  Name?: string;
}
export type __listOfGatewayNetwork = GatewayNetwork[];
const __listOfGatewayNetwork = /*@__PURE__*/ __L.at(__c22, 4);
export interface CreateGatewayRequest {
  EgressCidrBlocks?: string[];
  Name?: string;
  Networks?: GatewayNetwork[];
}
export type GatewayState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "ERROR"
  | "DELETING"
  | "DELETED"
  | (string & {});
export interface Gateway {
  EgressCidrBlocks?: string[];
  GatewayArn?: string;
  GatewayMessages?: MessageDetail[];
  GatewayState?: GatewayState;
  Name?: string;
  Networks?: GatewayNetwork[];
}
export interface CreateGatewayResponse {
  Gateway?: Gateway & {
    EgressCidrBlocks: __listOfString;
    GatewayArn: string;
    Name: string;
    Networks: (GatewayNetwork & { CidrBlock: string; Name: string })[];
    GatewayMessages: (MessageDetail & { Code: string; Message: string })[];
  };
}
export type ClientToken = string;
export interface CreateRouterInputRequest {
  Name: string;
  Configuration: RouterInputConfiguration;
  MaximumBitrate: number;
  RoutingScope: RoutingScope;
  Tier: RouterInputTier;
  RegionName?: string;
  AvailabilityZone?: string;
  TransitEncryption?: RouterInputTransitEncryption;
  MaintenanceConfiguration?: MaintenanceConfiguration;
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
  ContentQualityAnalysisConfiguration?: RouterContentQualityAnalysisConfiguration;
}
export interface CreateRouterInputResponse {
  RouterInput: RouterInput & {
    ContentQualityAnalysisType: RouterContentQualityAnalysisType;
    ContentQualityAnalysisConfiguration: RouterContentQualityAnalysisConfiguration;
  };
}
export interface CreateRouterNetworkInterfaceRequest {
  Name: string;
  Configuration: RouterNetworkInterfaceConfiguration;
  RegionName?: string;
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
export interface CreateRouterNetworkInterfaceResponse {
  RouterNetworkInterface: RouterNetworkInterface;
}
export interface CreateRouterOutputRequest {
  Name: string;
  Configuration: RouterOutputConfiguration;
  MaximumBitrate: number;
  RoutingScope: RoutingScope;
  Tier: RouterOutputTier;
  RegionName?: string;
  AvailabilityZone?: string;
  MaintenanceConfiguration?: MaintenanceConfiguration;
  Tags?: { [key: string]: string | undefined };
  FabricConfiguration?: FabricConfiguration;
  ClientToken?: string;
}
export interface CreateRouterOutputResponse {
  RouterOutput: RouterOutput & { FabricConfiguration: FabricConfiguration };
}
export interface DeleteBridgeRequest {
  BridgeArn: string;
}
export interface DeleteBridgeResponse {
  BridgeArn?: string;
}
export interface DeleteFlowRequest {
  FlowArn: string;
}
export interface DeleteFlowResponse {
  FlowArn?: string;
  Status?: Status;
}
export type GatewayArn = string;
export interface DeleteGatewayRequest {
  GatewayArn: string;
}
export interface DeleteGatewayResponse {
  GatewayArn?: string;
}
export interface DeleteRouterInputRequest {
  Arn: string;
}
export interface DeleteRouterInputResponse {
  Arn: string;
  Name: string;
  State: RouterInputState;
}
export interface DeleteRouterNetworkInterfaceRequest {
  Arn: string;
}
export interface DeleteRouterNetworkInterfaceResponse {
  Arn: string;
  Name: string;
  State: RouterNetworkInterfaceState;
}
export interface DeleteRouterOutputRequest {
  Arn: string;
}
export interface DeleteRouterOutputResponse {
  Arn: string;
  Name: string;
  State: RouterOutputState;
}
export type GatewayInstanceArn = string;
export interface DeregisterGatewayInstanceRequest {
  Force?: boolean;
  GatewayInstanceArn: string;
}
export type InstanceState =
  | "REGISTERING"
  | "ACTIVE"
  | "DEREGISTERING"
  | "DEREGISTERED"
  | "REGISTRATION_ERROR"
  | "DEREGISTRATION_ERROR"
  | (string & {});
export interface DeregisterGatewayInstanceResponse {
  GatewayInstanceArn?: string;
  InstanceState?: InstanceState;
}
export interface DescribeBridgeRequest {
  BridgeArn: string;
}
export interface DescribeBridgeResponse {
  Bridge?: Bridge & {
    BridgeArn: string;
    BridgeState: BridgeState;
    Name: string;
    PlacementArn: string;
    BridgeMessages: (MessageDetail & { Code: string; Message: string })[];
    EgressGatewayBridge: EgressGatewayBridge & { MaxBitrate: number };
    IngressGatewayBridge: IngressGatewayBridge & { MaxBitrate: number; MaxOutputs: number };
    Outputs: (BridgeOutput & {
      FlowOutput: BridgeFlowOutput & { FlowArn: string; FlowSourceArn: string; Name: string };
      NetworkOutput: BridgeNetworkOutput & {
        IpAddress: string;
        Name: string;
        NetworkName: string;
        Port: number;
        Protocol: Protocol;
        Ttl: number;
      };
    })[];
    Sources: (BridgeSource & {
      FlowSource: BridgeFlowSource & { FlowArn: string; Name: string };
      NetworkSource: BridgeNetworkSource & {
        MulticastIp: string;
        Name: string;
        NetworkName: string;
        Port: number;
        Protocol: Protocol;
      };
    })[];
  };
}
export interface DescribeFlowRequest {
  FlowArn: string;
}
export interface Messages {
  Errors?: string[];
}
export interface DescribeFlowResponse {
  Flow?: Flow & {
    AvailabilityZone: string;
    Entitlements: (Entitlement & {
      EntitlementArn: string;
      Name: string;
      Subscribers: __listOfString;
      Encryption: Encryption & { RoleArn: string };
    })[];
    FlowArn: string;
    Name: string;
    Outputs: (Output & {
      Name: string;
      OutputArn: string;
      Encryption: Encryption & { RoleArn: string };
      MediaStreamOutputConfigurations: (MediaStreamOutputConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        DestinationConfigurations: (DestinationConfiguration & {
          DestinationIp: string;
          DestinationPort: number;
          Interface: Interface & { Name: string };
          OutboundIp: string;
        })[];
        EncodingParameters: EncodingParameters & {
          CompressionFactor: number;
          EncoderProfile: EncoderProfile;
        };
      })[];
      Transport: Transport & { Protocol: Protocol };
    })[];
    Source: Source & {
      Name: string;
      SourceArn: string;
      Decryption: Encryption & { RoleArn: string };
      MediaStreamSourceConfigurations: (MediaStreamSourceConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        InputConfigurations: (InputConfiguration & {
          InputIp: string;
          InputPort: number;
          Interface: Interface & { Name: string };
        })[];
      })[];
      Transport: Transport & { Protocol: Protocol };
      GatewayBridgeSource: GatewayBridgeSource & { BridgeArn: string };
    };
    Status: Status;
    MediaStreams: (MediaStream & {
      Fmt: number;
      MediaStreamId: number;
      MediaStreamName: string;
      MediaStreamType: MediaStreamType;
      Attributes: MediaStreamAttributes & { Fmtp: Fmtp };
    })[];
    Sources: (Source & {
      Name: string;
      SourceArn: string;
      Decryption: Encryption & { RoleArn: string };
      MediaStreamSourceConfigurations: (MediaStreamSourceConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        InputConfigurations: (InputConfiguration & {
          InputIp: string;
          InputPort: number;
          Interface: Interface & { Name: string };
        })[];
      })[];
      Transport: Transport & { Protocol: Protocol };
      GatewayBridgeSource: GatewayBridgeSource & { BridgeArn: string };
    })[];
    VpcInterfaces: (VpcInterface & {
      Name: string;
      NetworkInterfaceIds: __listOfString;
      NetworkInterfaceType: NetworkInterfaceType;
      RoleArn: string;
      SecurityGroupIds: __listOfString;
      SubnetId: string;
    })[];
    NdiConfig: NdiConfig & {
      NdiDiscoveryServers: (NdiDiscoveryServerConfig & {
        DiscoveryServerAddress: string;
        VpcInterfaceAdapter: string;
      })[];
    };
  };
  Messages?: Messages & { Errors: __listOfString };
}
export interface DescribeFlowSourceMetadataRequest {
  FlowArn: string;
}
export interface FrameResolution {
  FrameHeight?: number;
  FrameWidth?: number;
}
export interface TransportStream {
  Channels?: number;
  Codec?: string;
  FrameRate?: string;
  FrameResolution?: FrameResolution;
  Pid?: number;
  SampleRate?: number;
  SampleSize?: number;
  StreamType?: string;
}
export type __listOfTransportStream = TransportStream[];
const __listOfTransportStream = /*@__PURE__*/ __L.at(__c26, 1);
export interface TransportStreamProgram {
  PcrPid?: number;
  ProgramName?: string;
  ProgramNumber?: number;
  ProgramPid?: number;
  Streams?: TransportStream[];
}
export type __listOfTransportStreamProgram = TransportStreamProgram[];
const __listOfTransportStreamProgram = /*@__PURE__*/ __L.at(__c26, 3);
export interface TransportMediaInfo {
  Programs?: TransportStreamProgram[];
}
export interface NdiSourceInfo {
  SourceName?: string;
}
export type __listOfNdiSourceInfo = NdiSourceInfo[];
const __listOfNdiSourceInfo = /*@__PURE__*/ __L.at(__c26, 5);
export interface NdiMediaStreamInfo {
  StreamType?: string;
  Codec?: string;
  StreamId?: number;
  ScanMode?: ScanMode;
  FrameResolution?: FrameResolution;
  FrameRate?: string;
  Channels?: number;
  SampleRate?: number;
}
export type __listOfNdiMediaStreamInfo = NdiMediaStreamInfo[];
const __listOfNdiMediaStreamInfo = /*@__PURE__*/ __L.at(__c26, 7);
export interface NdiMediaInfo {
  Streams?: NdiMediaStreamInfo[];
}
export interface NdiSourceMetadataInfo {
  ActiveSource?: NdiSourceInfo;
  DiscoveredSources?: NdiSourceInfo[];
  MediaInfo?: NdiMediaInfo;
  Messages?: MessageDetail[];
}
export interface DescribeFlowSourceMetadataResponse {
  FlowArn?: string;
  Messages?: (MessageDetail & { Code: string; Message: string })[];
  Timestamp?: Date;
  TransportMediaInfo?: TransportMediaInfo & {
    Programs: (TransportStreamProgram & {
      PcrPid: number;
      ProgramNumber: number;
      ProgramPid: number;
      Streams: (TransportStream & {
        Pid: number;
        StreamType: string;
        FrameResolution: FrameResolution & { FrameHeight: number; FrameWidth: number };
      })[];
    })[];
  };
  NdiInfo?: NdiSourceMetadataInfo & {
    DiscoveredSources: (NdiSourceInfo & { SourceName: string })[];
    MediaInfo: NdiMediaInfo & {
      Streams: (NdiMediaStreamInfo & {
        StreamType: string;
        Codec: string;
        StreamId: number;
        FrameResolution: FrameResolution & { FrameHeight: number; FrameWidth: number };
      })[];
    };
    Messages: (MessageDetail & { Code: string; Message: string })[];
    ActiveSource: NdiSourceInfo & { SourceName: string };
  };
}
export interface DescribeFlowSourceThumbnailRequest {
  FlowArn: string;
}
export interface ThumbnailDetails {
  FlowArn?: string;
  Thumbnail?: string;
  ThumbnailMessages?: MessageDetail[];
  Timecode?: string;
  Timestamp?: Date;
}
export interface DescribeFlowSourceThumbnailResponse {
  ThumbnailDetails?: ThumbnailDetails & {
    FlowArn: string;
    ThumbnailMessages: (MessageDetail & { Code: string; Message: string })[];
  };
}
export interface DescribeGatewayRequest {
  GatewayArn: string;
}
export interface DescribeGatewayResponse {
  Gateway?: Gateway & {
    EgressCidrBlocks: __listOfString;
    GatewayArn: string;
    Name: string;
    Networks: (GatewayNetwork & { CidrBlock: string; Name: string })[];
    GatewayMessages: (MessageDetail & { Code: string; Message: string })[];
  };
}
export interface DescribeGatewayInstanceRequest {
  GatewayInstanceArn: string;
}
export type BridgePlacement = "AVAILABLE" | "LOCKED" | (string & {});
export type ConnectionStatus = "CONNECTED" | "DISCONNECTED" | (string & {});
export interface GatewayInstance {
  BridgePlacement?: BridgePlacement;
  ConnectionStatus?: ConnectionStatus;
  GatewayArn?: string;
  GatewayInstanceArn?: string;
  InstanceId?: string;
  InstanceMessages?: MessageDetail[];
  InstanceState?: InstanceState;
  RunningBridgeCount?: number;
}
export interface DescribeGatewayInstanceResponse {
  GatewayInstance?: GatewayInstance & {
    BridgePlacement: BridgePlacement;
    ConnectionStatus: ConnectionStatus;
    GatewayArn: string;
    GatewayInstanceArn: string;
    InstanceId: string;
    InstanceState: InstanceState;
    RunningBridgeCount: number;
    InstanceMessages: (MessageDetail & { Code: string; Message: string })[];
  };
}
export type OfferingArn = string;
export interface DescribeOfferingRequest {
  OfferingArn: string;
}
export type DurationUnits = "MONTHS" | (string & {});
export type PriceUnits = "HOURLY" | (string & {});
export type ResourceType = "Mbps_Outbound_Bandwidth" | (string & {});
export interface ResourceSpecification {
  ReservedBitrate?: number;
  ResourceType?: ResourceType;
}
export interface Offering {
  CurrencyCode?: string;
  Duration?: number;
  DurationUnits?: DurationUnits;
  OfferingArn?: string;
  OfferingDescription?: string;
  PricePerUnit?: string;
  PriceUnits?: PriceUnits;
  ResourceSpecification?: ResourceSpecification;
}
export interface DescribeOfferingResponse {
  Offering?: Offering & {
    CurrencyCode: string;
    Duration: number;
    DurationUnits: DurationUnits;
    OfferingArn: string;
    OfferingDescription: string;
    PricePerUnit: string;
    PriceUnits: PriceUnits;
    ResourceSpecification: ResourceSpecification & { ResourceType: ResourceType };
  };
}
export type ReservationArn = string;
export interface DescribeReservationRequest {
  ReservationArn: string;
}
export type ReservationState = "ACTIVE" | "EXPIRED" | "PROCESSING" | "CANCELED" | (string & {});
export interface Reservation {
  CurrencyCode?: string;
  Duration?: number;
  DurationUnits?: DurationUnits;
  End?: string;
  OfferingArn?: string;
  OfferingDescription?: string;
  PricePerUnit?: string;
  PriceUnits?: PriceUnits;
  ReservationArn?: string;
  ReservationName?: string;
  ReservationState?: ReservationState;
  ResourceSpecification?: ResourceSpecification;
  Start?: string;
}
export interface DescribeReservationResponse {
  Reservation?: Reservation & {
    CurrencyCode: string;
    Duration: number;
    DurationUnits: DurationUnits;
    End: string;
    OfferingArn: string;
    OfferingDescription: string;
    PricePerUnit: string;
    PriceUnits: PriceUnits;
    ReservationArn: string;
    ReservationName: string;
    ReservationState: ReservationState;
    ResourceSpecification: ResourceSpecification & { ResourceType: ResourceType };
    Start: string;
  };
}
export interface GetRouterInputRequest {
  Arn: string;
}
export interface GetRouterInputResponse {
  RouterInput: RouterInput & {
    ContentQualityAnalysisType: RouterContentQualityAnalysisType;
    ContentQualityAnalysisConfiguration: RouterContentQualityAnalysisConfiguration;
  };
}
export interface GetRouterInputSourceMetadataRequest {
  Arn: string;
}
export type RouterInputMetadata = { TransportStreamMediaInfo: TransportMediaInfo };
export interface RouterInputSourceMetadataDetails {
  SourceMetadataMessages: RouterInputMessage[];
  Timestamp: Date;
  RouterInputMetadata?: RouterInputMetadata;
}
export interface GetRouterInputSourceMetadataResponse {
  Arn: string;
  Name: string;
  SourceMetadataDetails: RouterInputSourceMetadataDetails;
}
export interface GetRouterInputThumbnailRequest {
  Arn: string;
}
export interface RouterInputThumbnailDetails {
  ThumbnailMessages: RouterInputMessage[];
  Thumbnail?: Uint8Array;
  Timecode?: string;
  Timestamp?: Date;
}
export interface GetRouterInputThumbnailResponse {
  Arn: string;
  Name: string;
  ThumbnailDetails: RouterInputThumbnailDetails;
}
export interface GetRouterNetworkInterfaceRequest {
  Arn: string;
}
export interface GetRouterNetworkInterfaceResponse {
  RouterNetworkInterface: RouterNetworkInterface;
}
export interface GetRouterOutputRequest {
  Arn: string;
}
export interface GetRouterOutputResponse {
  RouterOutput: RouterOutput & { FabricConfiguration: FabricConfiguration };
}
export interface GrantFlowEntitlementsRequest {
  Entitlements?: GrantEntitlementRequest[];
  FlowArn: string;
}
export interface GrantFlowEntitlementsResponse {
  Entitlements?: (Entitlement & {
    EntitlementArn: string;
    Name: string;
    Subscribers: __listOfString;
    Encryption: Encryption & { RoleArn: string };
  })[];
  FlowArn?: string;
}
export type MaxResults = number;
export interface ListBridgesRequest {
  FilterArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListedBridge {
  BridgeArn?: string;
  BridgeState?: BridgeState;
  BridgeType?: string;
  Name?: string;
  PlacementArn?: string;
}
export type __listOfListedBridge = ListedBridge[];
const __listOfListedBridge = /*@__PURE__*/ __L.at(__c31, 1);
export interface ListBridgesResponse {
  Bridges?: (ListedBridge & {
    BridgeArn: string;
    BridgeState: BridgeState;
    BridgeType: string;
    Name: string;
    PlacementArn: string;
  })[];
  NextToken?: string;
}
export interface ListEntitlementsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListedEntitlement {
  DataTransferSubscriberFeePercent?: number;
  EntitlementArn?: string;
  EntitlementName?: string;
}
export type __listOfListedEntitlement = ListedEntitlement[];
const __listOfListedEntitlement = /*@__PURE__*/ __L.at(__c31, 5);
export interface ListEntitlementsResponse {
  Entitlements?: (ListedEntitlement & { EntitlementArn: string; EntitlementName: string })[];
  NextToken?: string;
}
export interface ListFlowsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type SourceType = "OWNED" | "ENTITLED" | (string & {});
export interface ListedFlow {
  AvailabilityZone?: string;
  Description?: string;
  FlowArn?: string;
  Name?: string;
  SourceType?: SourceType;
  Status?: Status;
  Maintenance?: Maintenance;
}
export type __listOfListedFlow = ListedFlow[];
const __listOfListedFlow = /*@__PURE__*/ __L.at(__c32, 1);
export interface ListFlowsResponse {
  Flows?: (ListedFlow & {
    AvailabilityZone: string;
    Description: string;
    FlowArn: string;
    Name: string;
    SourceType: SourceType;
    Status: Status;
  })[];
  NextToken?: string;
}
export interface ListGatewayInstancesRequest {
  FilterArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListedGatewayInstance {
  GatewayArn?: string;
  GatewayInstanceArn?: string;
  InstanceId?: string;
  InstanceState?: InstanceState;
}
export type __listOfListedGatewayInstance = ListedGatewayInstance[];
const __listOfListedGatewayInstance = /*@__PURE__*/ __L.at(__c32, 5);
export interface ListGatewayInstancesResponse {
  Instances?: (ListedGatewayInstance & {
    GatewayArn: string;
    GatewayInstanceArn: string;
    InstanceId: string;
  })[];
  NextToken?: string;
}
export interface ListGatewaysRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListedGateway {
  GatewayArn?: string;
  GatewayState?: GatewayState;
  Name?: string;
}
export type __listOfListedGateway = ListedGateway[];
const __listOfListedGateway = /*@__PURE__*/ __L.at(__c33, 1);
export interface ListGatewaysResponse {
  Gateways?: (ListedGateway & { GatewayArn: string; GatewayState: GatewayState; Name: string })[];
  NextToken?: string;
}
export interface ListOfferingsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type __listOfOffering = Offering[];
const __listOfOffering = /*@__PURE__*/ __L.at(__c33, 4);
export interface ListOfferingsResponse {
  NextToken?: string;
  Offerings?: (Offering & {
    CurrencyCode: string;
    Duration: number;
    DurationUnits: DurationUnits;
    OfferingArn: string;
    OfferingDescription: string;
    PricePerUnit: string;
    PriceUnits: PriceUnits;
    ResourceSpecification: ResourceSpecification & { ResourceType: ResourceType };
  })[];
}
export interface ListReservationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type __listOfReservation = Reservation[];
const __listOfReservation = /*@__PURE__*/ __L.at(__c33, 7);
export interface ListReservationsResponse {
  NextToken?: string;
  Reservations?: (Reservation & {
    CurrencyCode: string;
    Duration: number;
    DurationUnits: DurationUnits;
    End: string;
    OfferingArn: string;
    OfferingDescription: string;
    PricePerUnit: string;
    PriceUnits: PriceUnits;
    ReservationArn: string;
    ReservationName: string;
    ReservationState: ReservationState;
    ResourceSpecification: ResourceSpecification & { ResourceType: ResourceType };
    Start: string;
  })[];
}
export type StringList = string[];
const StringList = __listOfString as any as S.Schema<StringList>;
export type RoutingScopeList = RoutingScope[];
export type RouterInputTypeList = RouterInputType[];
export type RouterInputFilter =
  | {
      NameContains: string[];
      RegionNames?: never;
      NetworkInterfaceArns?: never;
      RoutingScopes?: never;
      InputTypes?: never;
    }
  | {
      NameContains?: never;
      RegionNames: string[];
      NetworkInterfaceArns?: never;
      RoutingScopes?: never;
      InputTypes?: never;
    }
  | {
      NameContains?: never;
      RegionNames?: never;
      NetworkInterfaceArns: string[];
      RoutingScopes?: never;
      InputTypes?: never;
    }
  | {
      NameContains?: never;
      RegionNames?: never;
      NetworkInterfaceArns?: never;
      RoutingScopes: RoutingScope[];
      InputTypes?: never;
    }
  | {
      NameContains?: never;
      RegionNames?: never;
      NetworkInterfaceArns?: never;
      RoutingScopes?: never;
      InputTypes: RouterInputType[];
    };
export type RouterInputFilterList = RouterInputFilter[];
export interface ListRouterInputsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: RouterInputFilter[];
}
export interface ListedRouterInput {
  Name: string;
  Arn: string;
  Id: string;
  InputType: RouterInputType;
  State: RouterInputState;
  RoutedOutputs: number;
  RegionName: string;
  AvailabilityZone: string;
  MaximumBitrate: number;
  RoutingScope: RoutingScope;
  CreatedAt: Date;
  UpdatedAt: Date;
  MessageCount: number;
  NetworkInterfaceArn?: string;
  MaintenanceScheduleType?: MaintenanceScheduleType;
  MaintenanceSchedule?: MaintenanceSchedule;
}
export type ListedRouterInputList = ListedRouterInput[];
export interface ListRouterInputsResponse {
  RouterInputs: ListedRouterInput[];
  NextToken?: string;
}
export type RouterNetworkInterfaceTypeList = RouterNetworkInterfaceType[];
export type RouterNetworkInterfaceFilter =
  | { RegionNames: string[]; NetworkInterfaceTypes?: never; NameContains?: never }
  | {
      RegionNames?: never;
      NetworkInterfaceTypes: RouterNetworkInterfaceType[];
      NameContains?: never;
    }
  | { RegionNames?: never; NetworkInterfaceTypes?: never; NameContains: string[] };
export type RouterNetworkInterfaceFilterList = RouterNetworkInterfaceFilter[];
export interface ListRouterNetworkInterfacesRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: RouterNetworkInterfaceFilter[];
}
export interface ListedRouterNetworkInterface {
  Name: string;
  Arn: string;
  Id: string;
  NetworkInterfaceType: RouterNetworkInterfaceType;
  AssociatedOutputCount: number;
  AssociatedInputCount: number;
  State: RouterNetworkInterfaceState;
  RegionName: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}
export type ListedRouterNetworkInterfaceList = ListedRouterNetworkInterface[];
export interface ListRouterNetworkInterfacesResponse {
  RouterNetworkInterfaces: ListedRouterNetworkInterface[];
  NextToken?: string;
}
export type RouterOutputTypeList = RouterOutputType[];
export type RouterOutputFilter =
  | {
      RegionNames: string[];
      NetworkInterfaceArns?: never;
      RoutingScopes?: never;
      OutputTypes?: never;
      RoutedInputArns?: never;
      NameContains?: never;
    }
  | {
      RegionNames?: never;
      NetworkInterfaceArns: string[];
      RoutingScopes?: never;
      OutputTypes?: never;
      RoutedInputArns?: never;
      NameContains?: never;
    }
  | {
      RegionNames?: never;
      NetworkInterfaceArns?: never;
      RoutingScopes: RoutingScope[];
      OutputTypes?: never;
      RoutedInputArns?: never;
      NameContains?: never;
    }
  | {
      RegionNames?: never;
      NetworkInterfaceArns?: never;
      RoutingScopes?: never;
      OutputTypes: RouterOutputType[];
      RoutedInputArns?: never;
      NameContains?: never;
    }
  | {
      RegionNames?: never;
      NetworkInterfaceArns?: never;
      RoutingScopes?: never;
      OutputTypes?: never;
      RoutedInputArns: string[];
      NameContains?: never;
    }
  | {
      RegionNames?: never;
      NetworkInterfaceArns?: never;
      RoutingScopes?: never;
      OutputTypes?: never;
      RoutedInputArns?: never;
      NameContains: string[];
    };
export type RouterOutputFilterList = RouterOutputFilter[];
export interface ListRouterOutputsRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: RouterOutputFilter[];
}
export interface ListedRouterOutput {
  Name: string;
  Arn: string;
  Id: string;
  OutputType: RouterOutputType;
  State: RouterOutputState;
  RoutedState: RouterOutputRoutedState;
  RegionName: string;
  AvailabilityZone: string;
  MaximumBitrate: number;
  RoutingScope: RoutingScope;
  CreatedAt: Date;
  UpdatedAt: Date;
  MessageCount: number;
  RoutedInputArn?: string;
  NetworkInterfaceArn?: string;
  MaintenanceScheduleType?: MaintenanceScheduleType;
  MaintenanceSchedule?: MaintenanceSchedule;
}
export type ListedRouterOutputList = ListedRouterOutput[];
export interface ListRouterOutputsResponse {
  RouterOutputs: ListedRouterOutput[];
  NextToken?: string;
}
export interface ListTagsForGlobalResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForGlobalResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface PurchaseOfferingRequest {
  OfferingArn: string;
  ReservationName?: string;
  Start?: string;
}
export interface PurchaseOfferingResponse {
  Reservation?: Reservation & {
    CurrencyCode: string;
    Duration: number;
    DurationUnits: DurationUnits;
    End: string;
    OfferingArn: string;
    OfferingDescription: string;
    PricePerUnit: string;
    PriceUnits: PriceUnits;
    ReservationArn: string;
    ReservationName: string;
    ReservationState: ReservationState;
    ResourceSpecification: ResourceSpecification & { ResourceType: ResourceType };
    Start: string;
  };
}
export interface RemoveBridgeOutputRequest {
  BridgeArn: string;
  OutputName: string;
}
export interface RemoveBridgeOutputResponse {
  BridgeArn?: string;
  OutputName?: string;
}
export interface RemoveBridgeSourceRequest {
  BridgeArn: string;
  SourceName: string;
}
export interface RemoveBridgeSourceResponse {
  BridgeArn?: string;
  SourceName?: string;
}
export interface RemoveFlowMediaStreamRequest {
  FlowArn: string;
  MediaStreamName: string;
}
export interface RemoveFlowMediaStreamResponse {
  FlowArn?: string;
  MediaStreamName?: string;
}
export interface RemoveFlowOutputRequest {
  FlowArn: string;
  OutputArn: string;
}
export interface RemoveFlowOutputResponse {
  FlowArn?: string;
  OutputArn?: string;
}
export interface RemoveFlowSourceRequest {
  FlowArn: string;
  SourceArn: string;
}
export interface RemoveFlowSourceResponse {
  FlowArn?: string;
  SourceArn?: string;
}
export interface RemoveFlowVpcInterfaceRequest {
  FlowArn: string;
  VpcInterfaceName: string;
}
export interface RemoveFlowVpcInterfaceResponse {
  FlowArn?: string;
  NonDeletedNetworkInterfaceIds?: string[];
  VpcInterfaceName?: string;
}
export interface RestartRouterInputRequest {
  Arn: string;
}
export interface RestartRouterInputResponse {
  Arn: string;
  Name: string;
  State: RouterInputState;
}
export interface RestartRouterOutputRequest {
  Arn: string;
}
export interface RestartRouterOutputResponse {
  Arn: string;
  Name: string;
  State: RouterOutputState;
}
export interface RevokeFlowEntitlementRequest {
  EntitlementArn: string;
  FlowArn: string;
}
export interface RevokeFlowEntitlementResponse {
  EntitlementArn?: string;
  FlowArn?: string;
}
export interface StartFlowRequest {
  FlowArn: string;
}
export interface StartFlowResponse {
  FlowArn?: string;
  Status?: Status;
}
export interface StartRouterInputRequest {
  Arn: string;
}
export interface StartRouterInputResponse {
  Arn: string;
  Name: string;
  State: RouterInputState;
  MaintenanceScheduleType: MaintenanceScheduleType;
  MaintenanceSchedule: MaintenanceSchedule;
}
export interface StartRouterOutputRequest {
  Arn: string;
}
export interface StartRouterOutputResponse {
  Arn: string;
  Name: string;
  State: RouterOutputState;
  MaintenanceScheduleType: MaintenanceScheduleType;
  MaintenanceSchedule: MaintenanceSchedule;
}
export interface StopFlowRequest {
  FlowArn: string;
}
export interface StopFlowResponse {
  FlowArn?: string;
  Status?: Status;
}
export interface StopRouterInputRequest {
  Arn: string;
}
export interface StopRouterInputResponse {
  Arn: string;
  Name: string;
  State: RouterInputState;
}
export interface StopRouterOutputRequest {
  Arn: string;
}
export interface StopRouterOutputResponse {
  Arn: string;
  Name: string;
  State: RouterOutputState;
}
export interface TagGlobalResourceRequest {
  ResourceArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface TagGlobalResourceResponse {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export interface TakeRouterInputRequest {
  RouterOutputArn: string;
  RouterInputArn?: string;
}
export interface TakeRouterInputResponse {
  RoutedState: RouterOutputRoutedState;
  RouterOutputArn: string;
  RouterOutputName: string;
  RouterInputArn?: string;
  RouterInputName?: string;
}
export interface UntagGlobalResourceRequest {
  ResourceArn: string;
  TagKeys?: string[];
}
export interface UntagGlobalResourceResponse {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys?: string[];
}
export interface UntagResourceResponse {}
export interface UpdateEgressGatewayBridgeRequest {
  MaxBitrate?: number;
}
export interface UpdateIngressGatewayBridgeRequest {
  MaxBitrate?: number;
  MaxOutputs?: number;
}
export interface UpdateFailoverConfig {
  FailoverMode?: FailoverMode;
  RecoveryWindow?: number;
  SourcePriority?: SourcePriority;
  State?: State;
}
export interface UpdateBridgeRequest {
  BridgeArn: string;
  EgressGatewayBridge?: UpdateEgressGatewayBridgeRequest;
  IngressGatewayBridge?: UpdateIngressGatewayBridgeRequest;
  SourceFailoverConfig?: UpdateFailoverConfig;
}
export interface UpdateBridgeResponse {
  Bridge?: Bridge & {
    BridgeArn: string;
    BridgeState: BridgeState;
    Name: string;
    PlacementArn: string;
    BridgeMessages: (MessageDetail & { Code: string; Message: string })[];
    EgressGatewayBridge: EgressGatewayBridge & { MaxBitrate: number };
    IngressGatewayBridge: IngressGatewayBridge & { MaxBitrate: number; MaxOutputs: number };
    Outputs: (BridgeOutput & {
      FlowOutput: BridgeFlowOutput & { FlowArn: string; FlowSourceArn: string; Name: string };
      NetworkOutput: BridgeNetworkOutput & {
        IpAddress: string;
        Name: string;
        NetworkName: string;
        Port: number;
        Protocol: Protocol;
        Ttl: number;
      };
    })[];
    Sources: (BridgeSource & {
      FlowSource: BridgeFlowSource & { FlowArn: string; Name: string };
      NetworkSource: BridgeNetworkSource & {
        MulticastIp: string;
        Name: string;
        NetworkName: string;
        Port: number;
        Protocol: Protocol;
      };
    })[];
  };
}
export interface UpdateBridgeNetworkOutputRequest {
  IpAddress?: string;
  NetworkName?: string;
  Port?: number;
  Protocol?: Protocol;
  Ttl?: number;
}
export interface UpdateBridgeOutputRequest {
  BridgeArn: string;
  NetworkOutput?: UpdateBridgeNetworkOutputRequest;
  OutputName: string;
}
export interface UpdateBridgeOutputResponse {
  BridgeArn?: string;
  Output?: BridgeOutput & {
    FlowOutput: BridgeFlowOutput & { FlowArn: string; FlowSourceArn: string; Name: string };
    NetworkOutput: BridgeNetworkOutput & {
      IpAddress: string;
      Name: string;
      NetworkName: string;
      Port: number;
      Protocol: Protocol;
      Ttl: number;
    };
  };
}
export interface UpdateBridgeFlowSourceRequest {
  FlowArn?: string;
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
}
export interface UpdateBridgeNetworkSourceRequest {
  MulticastIp?: string;
  MulticastSourceSettings?: MulticastSourceSettings;
  NetworkName?: string;
  Port?: number;
  Protocol?: Protocol;
}
export interface UpdateBridgeSourceRequest {
  BridgeArn: string;
  FlowSource?: UpdateBridgeFlowSourceRequest;
  NetworkSource?: UpdateBridgeNetworkSourceRequest;
  SourceName: string;
}
export interface UpdateBridgeSourceResponse {
  BridgeArn?: string;
  Source?: BridgeSource & {
    FlowSource: BridgeFlowSource & { FlowArn: string; Name: string };
    NetworkSource: BridgeNetworkSource & {
      MulticastIp: string;
      Name: string;
      NetworkName: string;
      Port: number;
      Protocol: Protocol;
    };
  };
}
export type DesiredState = "ACTIVE" | "STANDBY" | "DELETED" | (string & {});
export interface UpdateBridgeStateRequest {
  BridgeArn: string;
  DesiredState?: DesiredState;
}
export interface UpdateBridgeStateResponse {
  BridgeArn?: string;
  DesiredState?: DesiredState;
}
export interface UpdateMaintenance {
  MaintenanceDay?: MaintenanceDay;
  MaintenanceScheduledDate?: string;
  MaintenanceStartHour?: string;
}
export interface UpdateFlowRequest {
  FlowArn: string;
  SourceFailoverConfig?: UpdateFailoverConfig;
  Maintenance?: UpdateMaintenance;
  SourceMonitoringConfig?: MonitoringConfig;
  NdiConfig?: NdiConfig;
  FlowSize?: FlowSize;
  EncodingConfig?: EncodingConfig;
}
export interface UpdateFlowResponse {
  Flow?: Flow & {
    AvailabilityZone: string;
    Entitlements: (Entitlement & {
      EntitlementArn: string;
      Name: string;
      Subscribers: __listOfString;
      Encryption: Encryption & { RoleArn: string };
    })[];
    FlowArn: string;
    Name: string;
    Outputs: (Output & {
      Name: string;
      OutputArn: string;
      Encryption: Encryption & { RoleArn: string };
      MediaStreamOutputConfigurations: (MediaStreamOutputConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        DestinationConfigurations: (DestinationConfiguration & {
          DestinationIp: string;
          DestinationPort: number;
          Interface: Interface & { Name: string };
          OutboundIp: string;
        })[];
        EncodingParameters: EncodingParameters & {
          CompressionFactor: number;
          EncoderProfile: EncoderProfile;
        };
      })[];
      Transport: Transport & { Protocol: Protocol };
    })[];
    Source: Source & {
      Name: string;
      SourceArn: string;
      Decryption: Encryption & { RoleArn: string };
      MediaStreamSourceConfigurations: (MediaStreamSourceConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        InputConfigurations: (InputConfiguration & {
          InputIp: string;
          InputPort: number;
          Interface: Interface & { Name: string };
        })[];
      })[];
      Transport: Transport & { Protocol: Protocol };
      GatewayBridgeSource: GatewayBridgeSource & { BridgeArn: string };
    };
    Status: Status;
    MediaStreams: (MediaStream & {
      Fmt: number;
      MediaStreamId: number;
      MediaStreamName: string;
      MediaStreamType: MediaStreamType;
      Attributes: MediaStreamAttributes & { Fmtp: Fmtp };
    })[];
    Sources: (Source & {
      Name: string;
      SourceArn: string;
      Decryption: Encryption & { RoleArn: string };
      MediaStreamSourceConfigurations: (MediaStreamSourceConfiguration & {
        EncodingName: EncodingName;
        MediaStreamName: string;
        InputConfigurations: (InputConfiguration & {
          InputIp: string;
          InputPort: number;
          Interface: Interface & { Name: string };
        })[];
      })[];
      Transport: Transport & { Protocol: Protocol };
      GatewayBridgeSource: GatewayBridgeSource & { BridgeArn: string };
    })[];
    VpcInterfaces: (VpcInterface & {
      Name: string;
      NetworkInterfaceIds: __listOfString;
      NetworkInterfaceType: NetworkInterfaceType;
      RoleArn: string;
      SecurityGroupIds: __listOfString;
      SubnetId: string;
    })[];
    NdiConfig: NdiConfig & {
      NdiDiscoveryServers: (NdiDiscoveryServerConfig & {
        DiscoveryServerAddress: string;
        VpcInterfaceAdapter: string;
      })[];
    };
  };
}
export interface UpdateEncryption {
  Algorithm?: Algorithm;
  ConstantInitializationVector?: string;
  DeviceId?: string;
  KeyType?: KeyType;
  Region?: string;
  ResourceId?: string;
  RoleArn?: string;
  SecretArn?: string;
  Url?: string;
}
export interface UpdateFlowEntitlementRequest {
  Description?: string;
  Encryption?: UpdateEncryption;
  EntitlementArn: string;
  EntitlementStatus?: EntitlementStatus;
  FlowArn: string;
  Subscribers?: string[];
}
export interface UpdateFlowEntitlementResponse {
  Entitlement?: Entitlement & {
    EntitlementArn: string;
    Name: string;
    Subscribers: __listOfString;
    Encryption: Encryption & { RoleArn: string };
  };
  FlowArn?: string;
}
export interface UpdateFlowMediaStreamRequest {
  Attributes?: MediaStreamAttributesRequest;
  ClockRate?: number;
  Description?: string;
  FlowArn: string;
  MediaStreamName: string;
  MediaStreamType?: MediaStreamType;
  VideoFormat?: string;
}
export interface UpdateFlowMediaStreamResponse {
  FlowArn?: string;
  MediaStream?: MediaStream & {
    Fmt: number;
    MediaStreamId: number;
    MediaStreamName: string;
    MediaStreamType: MediaStreamType;
    Attributes: MediaStreamAttributes & { Fmtp: Fmtp };
  };
}
export interface UpdateFlowOutputRequest {
  CidrAllowList?: string[];
  Description?: string;
  Destination?: string;
  Encryption?: UpdateEncryption;
  FlowArn: string;
  MaxLatency?: number;
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[];
  MinLatency?: number;
  OutputArn: string;
  Port?: number;
  Protocol?: Protocol;
  RemoteId?: string;
  SenderControlPort?: number;
  SenderIpAddress?: string;
  SmoothingLatency?: number;
  StreamId?: string;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
  OutputStatus?: OutputStatus;
  NdiProgramName?: string;
  NdiSpeedHqQuality?: number;
  RouterIntegrationState?: State;
  RouterIntegrationTransitEncryption?: FlowTransitEncryption;
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource;
}
export interface UpdateFlowOutputResponse {
  FlowArn?: string;
  Output?: Output & {
    Name: string;
    OutputArn: string;
    Encryption: Encryption & { RoleArn: string };
    MediaStreamOutputConfigurations: (MediaStreamOutputConfiguration & {
      EncodingName: EncodingName;
      MediaStreamName: string;
      DestinationConfigurations: (DestinationConfiguration & {
        DestinationIp: string;
        DestinationPort: number;
        Interface: Interface & { Name: string };
        OutboundIp: string;
      })[];
      EncodingParameters: EncodingParameters & {
        CompressionFactor: number;
        EncoderProfile: EncoderProfile;
      };
    })[];
    Transport: Transport & { Protocol: Protocol };
  };
}
export interface UpdateGatewayBridgeSourceRequest {
  BridgeArn?: string;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}
export interface UpdateFlowSourceRequest {
  Decryption?: UpdateEncryption;
  Description?: string;
  EntitlementArn?: string;
  FlowArn: string;
  IngestPort?: number;
  MaxBitrate?: number;
  MaxLatency?: number;
  MaxSyncBuffer?: number;
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[];
  MinLatency?: number;
  Protocol?: Protocol;
  SenderControlPort?: number;
  SenderIpAddress?: string;
  SourceArn: string;
  SourceListenerAddress?: string;
  SourceListenerPort?: number;
  StreamId?: string;
  VpcInterfaceName?: string;
  WhitelistCidr?: string;
  GatewayBridgeSource?: UpdateGatewayBridgeSourceRequest;
  NdiSourceSettings?: NdiSourceSettings;
  RouterIntegrationState?: State;
  RouterIntegrationTransitDecryption?: FlowTransitEncryption;
}
export interface UpdateFlowSourceResponse {
  FlowArn?: string;
  Source?: Source & {
    Name: string;
    SourceArn: string;
    Decryption: Encryption & { RoleArn: string };
    MediaStreamSourceConfigurations: (MediaStreamSourceConfiguration & {
      EncodingName: EncodingName;
      MediaStreamName: string;
      InputConfigurations: (InputConfiguration & {
        InputIp: string;
        InputPort: number;
        Interface: Interface & { Name: string };
      })[];
    })[];
    Transport: Transport & { Protocol: Protocol };
    GatewayBridgeSource: GatewayBridgeSource & { BridgeArn: string };
  };
}
export interface UpdateGatewayInstanceRequest {
  BridgePlacement?: BridgePlacement;
  GatewayInstanceArn: string;
}
export interface UpdateGatewayInstanceResponse {
  BridgePlacement?: BridgePlacement;
  GatewayInstanceArn?: string;
}
export interface UpdateRouterInputRequest {
  Arn: string;
  Name?: string;
  Configuration?: RouterInputConfiguration;
  MaximumBitrate?: number;
  RoutingScope?: RoutingScope;
  Tier?: RouterInputTier;
  TransitEncryption?: RouterInputTransitEncryption;
  MaintenanceConfiguration?: MaintenanceConfiguration;
  ContentQualityAnalysisConfiguration?: RouterContentQualityAnalysisConfiguration;
}
export interface UpdateRouterInputResponse {
  RouterInput: RouterInput & {
    ContentQualityAnalysisType: RouterContentQualityAnalysisType;
    ContentQualityAnalysisConfiguration: RouterContentQualityAnalysisConfiguration;
  };
}
export interface UpdateRouterNetworkInterfaceRequest {
  Arn: string;
  Name?: string;
  Configuration?: RouterNetworkInterfaceConfiguration;
}
export interface UpdateRouterNetworkInterfaceResponse {
  RouterNetworkInterface: RouterNetworkInterface;
}
export interface UpdateRouterOutputRequest {
  Arn: string;
  Name?: string;
  Configuration?: RouterOutputConfiguration;
  MaximumBitrate?: number;
  RoutingScope?: RoutingScope;
  Tier?: RouterOutputTier;
  MaintenanceConfiguration?: MaintenanceConfiguration;
  FabricConfiguration?: FabricConfiguration;
}
export interface UpdateRouterOutputResponse {
  RouterOutput: RouterOutput & { FabricConfiguration: FabricConfiguration };
}
export type AddBridgeOutputsError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds outputs to an existing bridge.
 */
export const addBridgeOutputs: API.OperationMethod<
  AddBridgeOutputsRequest,
  AddBridgeOutputsResponse,
  AddBridgeOutputsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3) as any as S.Schema<AddBridgeOutputsRequest>,
  output: __S(8) as any as S.Schema<AddBridgeOutputsResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddBridgeOutputs",
}));

export type AddBridgeSourcesError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds sources to an existing bridge.
 */
export const addBridgeSources: API.OperationMethod<
  AddBridgeSourcesRequest,
  AddBridgeSourcesResponse,
  AddBridgeSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<AddBridgeSourcesRequest>,
  output: __S(20) as any as S.Schema<AddBridgeSourcesResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddBridgeSources",
}));

export type AddFlowMediaStreamsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.
 */
export const addFlowMediaStreams: API.OperationMethod<
  AddFlowMediaStreamsRequest,
  AddFlowMediaStreamsResponse,
  AddFlowMediaStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26) as any as S.Schema<AddFlowMediaStreamsRequest>,
  output: __S(30) as any as S.Schema<AddFlowMediaStreamsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddFlowMediaStreams",
}));

export type AddFlowOutputsError =
  | AddFlowOutputs420Exception
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
 */
export const addFlowOutputs: API.OperationMethod<
  AddFlowOutputsRequest,
  AddFlowOutputsResponse,
  AddFlowOutputsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<AddFlowOutputsRequest>,
  output: __S(56) as any as S.Schema<AddFlowOutputsResponse>,
  errors: [
    AddFlowOutputs420Exception,
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddFlowOutputs",
}));

export type AddFlowSourcesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds sources to a flow.
 */
export const addFlowSources: API.OperationMethod<
  AddFlowSourcesRequest,
  AddFlowSourcesResponse,
  AddFlowSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<AddFlowSourcesRequest>,
  output: __S(72) as any as S.Schema<AddFlowSourcesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddFlowSources",
}));

export type AddFlowVpcInterfacesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds VPC interfaces to a flow.
 */
export const addFlowVpcInterfaces: API.OperationMethod<
  AddFlowVpcInterfacesRequest,
  AddFlowVpcInterfacesResponse,
  AddFlowVpcInterfacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<AddFlowVpcInterfacesRequest>,
  output: __S(78) as any as S.Schema<AddFlowVpcInterfacesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddFlowVpcInterfaces",
}));

export type BatchGetRouterInputError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about multiple router inputs in AWS Elemental MediaConnect.
 */
export const batchGetRouterInput: API.OperationMethod<
  BatchGetRouterInputRequest,
  BatchGetRouterInputResponse,
  BatchGetRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<BatchGetRouterInputRequest>,
  output: __S(116) as any as S.Schema<BatchGetRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetRouterInput",
}));

export type BatchGetRouterNetworkInterfaceError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about multiple router network interfaces in AWS Elemental MediaConnect.
 */
export const batchGetRouterNetworkInterface: API.OperationMethod<
  BatchGetRouterNetworkInterfaceRequest,
  BatchGetRouterNetworkInterfaceResponse,
  BatchGetRouterNetworkInterfaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117) as any as S.Schema<BatchGetRouterNetworkInterfaceRequest>,
  output: __S(127) as any as S.Schema<BatchGetRouterNetworkInterfaceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetRouterNetworkInterface",
}));

export type BatchGetRouterOutputError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about multiple router outputs in AWS Elemental MediaConnect.
 */
export const batchGetRouterOutput: API.OperationMethod<
  BatchGetRouterOutputRequest,
  BatchGetRouterOutputResponse,
  BatchGetRouterOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128) as any as S.Schema<BatchGetRouterOutputRequest>,
  output: __S(148) as any as S.Schema<BatchGetRouterOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetRouterOutput",
}));

export type CreateBridgeError =
  | BadRequestException
  | ConflictException
  | CreateBridge420Exception
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new bridge. The request must include one source.
 */
export const createBridge: API.OperationMethod<
  CreateBridgeRequest,
  CreateBridgeResponse,
  CreateBridgeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(153) as any as S.Schema<CreateBridgeRequest>,
  output: __S(159) as any as S.Schema<CreateBridgeResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    CreateBridge420Exception,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBridge",
}));

export type CreateFlowError =
  | BadRequestException
  | CreateFlow420Exception
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
 */
export const createFlow: API.OperationMethod<
  CreateFlowRequest,
  CreateFlowResponse,
  CreateFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<CreateFlowRequest>,
  output: __S(178) as any as S.Schema<CreateFlowResponse>,
  errors: [
    BadRequestException,
    CreateFlow420Exception,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFlow",
}));

export type CreateGatewayError =
  | BadRequestException
  | ConflictException
  | CreateGateway420Exception
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new gateway. The request must include at least one network (up to four).
 */
export const createGateway: API.OperationMethod<
  CreateGatewayRequest,
  CreateGatewayResponse,
  CreateGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181) as any as S.Schema<CreateGatewayRequest>,
  output: __S(183) as any as S.Schema<CreateGatewayResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    CreateGateway420Exception,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGateway",
}));

export type CreateRouterInputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | RouterInputServiceQuotaExceededException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new router input in AWS Elemental MediaConnect.
 */
export const createRouterInput: API.OperationMethod<
  CreateRouterInputRequest,
  CreateRouterInputResponse,
  CreateRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<CreateRouterInputRequest>,
  output: __S(185) as any as S.Schema<CreateRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    RouterInputServiceQuotaExceededException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRouterInput",
}));

export type CreateRouterNetworkInterfaceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | RouterNetworkInterfaceServiceQuotaExceededException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new router network interface in AWS Elemental MediaConnect.
 */
export const createRouterNetworkInterface: API.OperationMethod<
  CreateRouterNetworkInterfaceRequest,
  CreateRouterNetworkInterfaceResponse,
  CreateRouterNetworkInterfaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<CreateRouterNetworkInterfaceRequest>,
  output: __S(187) as any as S.Schema<CreateRouterNetworkInterfaceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    RouterNetworkInterfaceServiceQuotaExceededException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRouterNetworkInterface",
}));

export type CreateRouterOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | RouterOutputServiceQuotaExceededException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new router output in AWS Elemental MediaConnect.
 */
export const createRouterOutput: API.OperationMethod<
  CreateRouterOutputRequest,
  CreateRouterOutputResponse,
  CreateRouterOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<CreateRouterOutputRequest>,
  output: __S(189) as any as S.Schema<CreateRouterOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    RouterOutputServiceQuotaExceededException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRouterOutput",
}));

export type DeleteBridgeError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a bridge. Before you can delete a bridge, you must stop the bridge.
 */
export const deleteBridge: API.OperationMethod<
  DeleteBridgeRequest,
  DeleteBridgeResponse,
  DeleteBridgeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190) as any as S.Schema<DeleteBridgeRequest>,
  output: __S(191) as any as S.Schema<DeleteBridgeResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBridge",
}));

export type DeleteFlowError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a flow. Before you can delete a flow, you must stop the flow.
 */
export const deleteFlow: API.OperationMethod<
  DeleteFlowRequest,
  DeleteFlowResponse,
  DeleteFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<DeleteFlowRequest>,
  output: __S(193) as any as S.Schema<DeleteFlowResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFlow",
}));

export type DeleteGatewayError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a gateway. Before you can delete a gateway, you must deregister its instances and delete its bridges.
 */
export const deleteGateway: API.OperationMethod<
  DeleteGatewayRequest,
  DeleteGatewayResponse,
  DeleteGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194) as any as S.Schema<DeleteGatewayRequest>,
  output: __S(195) as any as S.Schema<DeleteGatewayResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGateway",
}));

export type DeleteRouterInputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a router input from AWS Elemental MediaConnect.
 */
export const deleteRouterInput: API.OperationMethod<
  DeleteRouterInputRequest,
  DeleteRouterInputResponse,
  DeleteRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196) as any as S.Schema<DeleteRouterInputRequest>,
  output: __S(197) as any as S.Schema<DeleteRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRouterInput",
}));

export type DeleteRouterNetworkInterfaceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a router network interface from AWS Elemental MediaConnect.
 */
export const deleteRouterNetworkInterface: API.OperationMethod<
  DeleteRouterNetworkInterfaceRequest,
  DeleteRouterNetworkInterfaceResponse,
  DeleteRouterNetworkInterfaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(198) as any as S.Schema<DeleteRouterNetworkInterfaceRequest>,
  output: __S(197) as any as S.Schema<DeleteRouterNetworkInterfaceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRouterNetworkInterface",
}));

export type DeleteRouterOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a router output from AWS Elemental MediaConnect.
 */
export const deleteRouterOutput: API.OperationMethod<
  DeleteRouterOutputRequest,
  DeleteRouterOutputResponse,
  DeleteRouterOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199) as any as S.Schema<DeleteRouterOutputRequest>,
  output: __S(197) as any as S.Schema<DeleteRouterOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRouterOutput",
}));

export type DeregisterGatewayInstanceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deregisters an instance. Before you deregister an instance, all bridges running on the instance must be stopped. If you want to deregister an instance without stopping the bridges, you must use the --force option.
 */
export const deregisterGatewayInstance: API.OperationMethod<
  DeregisterGatewayInstanceRequest,
  DeregisterGatewayInstanceResponse,
  DeregisterGatewayInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200) as any as S.Schema<DeregisterGatewayInstanceRequest>,
  output: __S(201) as any as S.Schema<DeregisterGatewayInstanceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterGatewayInstance",
}));

export type DescribeBridgeError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the details of a bridge.
 */
export const describeBridge: API.OperationMethod<
  DescribeBridgeRequest,
  DescribeBridgeResponse,
  DescribeBridgeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202) as any as S.Schema<DescribeBridgeRequest>,
  output: __S(159) as any as S.Schema<DescribeBridgeResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBridge",
}));

export type DescribeFlowError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the details of a flow. The response includes the flow Amazon Resource Name (ARN), name, and Availability Zone, as well as details about the source, outputs, and entitlements.
 */
export const describeFlow: API.OperationMethod<
  DescribeFlowRequest,
  DescribeFlowResponse,
  DescribeFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203) as any as S.Schema<DescribeFlowRequest>,
  output: __S(205) as any as S.Schema<DescribeFlowResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFlow",
}));

export type DescribeFlowSourceMetadataError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * The `DescribeFlowSourceMetadata` API is used to view information about the flow's source transport stream and programs. This API displays status messages about the flow's source as well as details about the program's video, audio, and other data.
 */
export const describeFlowSourceMetadata: API.OperationMethod<
  DescribeFlowSourceMetadataRequest,
  DescribeFlowSourceMetadataResponse,
  DescribeFlowSourceMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206) as any as S.Schema<DescribeFlowSourceMetadataRequest>,
  output: __S(218) as any as S.Schema<DescribeFlowSourceMetadataResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFlowSourceMetadata",
}));

export type DescribeFlowSourceThumbnailError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes the thumbnail for the flow source.
 */
export const describeFlowSourceThumbnail: API.OperationMethod<
  DescribeFlowSourceThumbnailRequest,
  DescribeFlowSourceThumbnailResponse,
  DescribeFlowSourceThumbnailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(219) as any as S.Schema<DescribeFlowSourceThumbnailRequest>,
  output: __S(221) as any as S.Schema<DescribeFlowSourceThumbnailResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFlowSourceThumbnail",
}));

export type DescribeGatewayError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the details of a gateway. The response includes the gateway Amazon Resource Name (ARN), name, and CIDR blocks, as well as details about the networks.
 */
export const describeGateway: API.OperationMethod<
  DescribeGatewayRequest,
  DescribeGatewayResponse,
  DescribeGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222) as any as S.Schema<DescribeGatewayRequest>,
  output: __S(183) as any as S.Schema<DescribeGatewayResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGateway",
}));

export type DescribeGatewayInstanceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the details of an instance.
 */
export const describeGatewayInstance: API.OperationMethod<
  DescribeGatewayInstanceRequest,
  DescribeGatewayInstanceResponse,
  DescribeGatewayInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(223) as any as S.Schema<DescribeGatewayInstanceRequest>,
  output: __S(225) as any as S.Schema<DescribeGatewayInstanceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGatewayInstance",
}));

export type DescribeOfferingError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).
 */
export const describeOffering: API.OperationMethod<
  DescribeOfferingRequest,
  DescribeOfferingResponse,
  DescribeOfferingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(226) as any as S.Schema<DescribeOfferingRequest>,
  output: __S(229) as any as S.Schema<DescribeOfferingResponse>,
  errors: [
    BadRequestException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOffering",
}));

export type DescribeReservationError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the details of a reservation. The response includes the reservation name, state, start date and time, and the details of the offering that make up the rest of the reservation (such as price, duration, and outbound bandwidth).
 */
export const describeReservation: API.OperationMethod<
  DescribeReservationRequest,
  DescribeReservationResponse,
  DescribeReservationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(230) as any as S.Schema<DescribeReservationRequest>,
  output: __S(232) as any as S.Schema<DescribeReservationResponse>,
  errors: [
    BadRequestException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReservation",
}));

export type GetRouterInputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about a specific router input in AWS Elemental MediaConnect.
 */
export const getRouterInput: API.OperationMethod<
  GetRouterInputRequest,
  GetRouterInputResponse,
  GetRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(233) as any as S.Schema<GetRouterInputRequest>,
  output: __S(234) as any as S.Schema<GetRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRouterInput",
}));

export type GetRouterInputSourceMetadataError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves detailed metadata information about a specific router input source, including stream details and connection state.
 */
export const getRouterInputSourceMetadata: API.OperationMethod<
  GetRouterInputSourceMetadataRequest,
  GetRouterInputSourceMetadataResponse,
  GetRouterInputSourceMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(235) as any as S.Schema<GetRouterInputSourceMetadataRequest>,
  output: __S(238) as any as S.Schema<GetRouterInputSourceMetadataResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRouterInputSourceMetadata",
}));

export type GetRouterInputThumbnailError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves the thumbnail for a router input in AWS Elemental MediaConnect.
 */
export const getRouterInputThumbnail: API.OperationMethod<
  GetRouterInputThumbnailRequest,
  GetRouterInputThumbnailResponse,
  GetRouterInputThumbnailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239) as any as S.Schema<GetRouterInputThumbnailRequest>,
  output: __S(241) as any as S.Schema<GetRouterInputThumbnailResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRouterInputThumbnail",
}));

export type GetRouterNetworkInterfaceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about a specific router network interface in AWS Elemental MediaConnect.
 */
export const getRouterNetworkInterface: API.OperationMethod<
  GetRouterNetworkInterfaceRequest,
  GetRouterNetworkInterfaceResponse,
  GetRouterNetworkInterfaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(242) as any as S.Schema<GetRouterNetworkInterfaceRequest>,
  output: __S(187) as any as S.Schema<GetRouterNetworkInterfaceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRouterNetworkInterface",
}));

export type GetRouterOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves information about a specific router output in AWS Elemental MediaConnect.
 */
export const getRouterOutput: API.OperationMethod<
  GetRouterOutputRequest,
  GetRouterOutputResponse,
  GetRouterOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243) as any as S.Schema<GetRouterOutputRequest>,
  output: __S(244) as any as S.Schema<GetRouterOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRouterOutput",
}));

export type GrantFlowEntitlementsError =
  | BadRequestException
  | ForbiddenException
  | GrantFlowEntitlements420Exception
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Grants entitlements to an existing flow.
 */
export const grantFlowEntitlements: API.OperationMethod<
  GrantFlowEntitlementsRequest,
  GrantFlowEntitlementsResponse,
  GrantFlowEntitlementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(245) as any as S.Schema<GrantFlowEntitlementsRequest>,
  output: __S(246) as any as S.Schema<GrantFlowEntitlementsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    GrantFlowEntitlements420Exception,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GrantFlowEntitlements",
}));

export type ListBridgesError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays a list of bridges that are associated with this account and an optionally specified Amazon Resource Name (ARN). This request returns a paginated result.
 */
export const listBridges: API.PaginatedOperationMethod<
  ListBridgesRequest,
  ListBridgesResponse,
  ListBridgesError,
  Credentials | HttpClient.HttpClient,
  ListedBridge
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(247) as any as S.Schema<ListBridgesRequest>,
  output: __S(250) as any as S.Schema<ListBridgesResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBridges",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Bridges",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEntitlementsError =
  | BadRequestException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
 */
export const listEntitlements: API.PaginatedOperationMethod<
  ListEntitlementsRequest,
  ListEntitlementsResponse,
  ListEntitlementsError,
  Credentials | HttpClient.HttpClient,
  ListedEntitlement
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(251) as any as S.Schema<ListEntitlementsRequest>,
  output: __S(254) as any as S.Schema<ListEntitlementsResponse>,
  errors: [
    BadRequestException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntitlements",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Entitlements",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFlowsError =
  | BadRequestException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays a list of flows that are associated with this account. This request returns a paginated result.
 */
export const listFlows: API.PaginatedOperationMethod<
  ListFlowsRequest,
  ListFlowsResponse,
  ListFlowsError,
  Credentials | HttpClient.HttpClient,
  ListedFlow
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(255) as any as S.Schema<ListFlowsRequest>,
  output: __S(258) as any as S.Schema<ListFlowsResponse>,
  errors: [
    BadRequestException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlows",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Flows",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListGatewayInstancesError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays a list of instances associated with the Amazon Web Services account. This request returns a paginated result. You can use the filterArn property to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).
 */
export const listGatewayInstances: API.PaginatedOperationMethod<
  ListGatewayInstancesRequest,
  ListGatewayInstancesResponse,
  ListGatewayInstancesError,
  Credentials | HttpClient.HttpClient,
  ListedGatewayInstance
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(259) as any as S.Schema<ListGatewayInstancesRequest>,
  output: __S(262) as any as S.Schema<ListGatewayInstancesResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGatewayInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Instances",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListGatewaysError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays a list of gateways that are associated with this account. This request returns a paginated result.
 */
export const listGateways: API.PaginatedOperationMethod<
  ListGatewaysRequest,
  ListGatewaysResponse,
  ListGatewaysError,
  Credentials | HttpClient.HttpClient,
  ListedGateway
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(263) as any as S.Schema<ListGatewaysRequest>,
  output: __S(266) as any as S.Schema<ListGatewaysResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGateways",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Gateways",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOfferingsError =
  | BadRequestException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays a list of all offerings that are available to this account in the current Amazon Web Services Region. If you have an active reservation (which means you've purchased an offering that has already started and hasn't expired yet), your account isn't eligible for other offerings.
 */
export const listOfferings: API.PaginatedOperationMethod<
  ListOfferingsRequest,
  ListOfferingsResponse,
  ListOfferingsError,
  Credentials | HttpClient.HttpClient,
  Offering
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(267) as any as S.Schema<ListOfferingsRequest>,
  output: __S(269) as any as S.Schema<ListOfferingsResponse>,
  errors: [
    BadRequestException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOfferings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Offerings",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListReservationsError =
  | BadRequestException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays a list of all reservations that have been purchased by this account in the current Amazon Web Services Region. This list includes all reservations in all states (such as active and expired).
 */
export const listReservations: API.PaginatedOperationMethod<
  ListReservationsRequest,
  ListReservationsResponse,
  ListReservationsError,
  Credentials | HttpClient.HttpClient,
  Reservation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(270) as any as S.Schema<ListReservationsRequest>,
  output: __S(272) as any as S.Schema<ListReservationsResponse>,
  errors: [
    BadRequestException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReservations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Reservations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRouterInputsError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves a list of router inputs in AWS Elemental MediaConnect.
 */
export const listRouterInputs: API.PaginatedOperationMethod<
  ListRouterInputsRequest,
  ListRouterInputsResponse,
  ListRouterInputsError,
  Credentials | HttpClient.HttpClient,
  ListedRouterInput
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(276) as any as S.Schema<ListRouterInputsRequest>,
  output: __S(279) as any as S.Schema<ListRouterInputsResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRouterInputs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RouterInputs",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRouterNetworkInterfacesError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves a list of router network interfaces in AWS Elemental MediaConnect.
 */
export const listRouterNetworkInterfaces: API.PaginatedOperationMethod<
  ListRouterNetworkInterfacesRequest,
  ListRouterNetworkInterfacesResponse,
  ListRouterNetworkInterfacesError,
  Credentials | HttpClient.HttpClient,
  ListedRouterNetworkInterface
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(282) as any as S.Schema<ListRouterNetworkInterfacesRequest>,
  output: __S(285) as any as S.Schema<ListRouterNetworkInterfacesResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRouterNetworkInterfaces",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RouterNetworkInterfaces",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRouterOutputsError =
  | BadRequestException
  | ConflictException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Retrieves a list of router outputs in AWS Elemental MediaConnect.
 */
export const listRouterOutputs: API.PaginatedOperationMethod<
  ListRouterOutputsRequest,
  ListRouterOutputsResponse,
  ListRouterOutputsError,
  Credentials | HttpClient.HttpClient,
  ListedRouterOutput
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(288) as any as S.Schema<ListRouterOutputsRequest>,
  output: __S(291) as any as S.Schema<ListRouterOutputsResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRouterOutputs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RouterOutputs",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForGlobalResourceError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Lists the tags associated with a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.
 */
export const listTagsForGlobalResource: API.OperationMethod<
  ListTagsForGlobalResourceRequest,
  ListTagsForGlobalResourceResponse,
  ListTagsForGlobalResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(292) as any as S.Schema<ListTagsForGlobalResourceRequest>,
  output: __S(293) as any as S.Schema<ListTagsForGlobalResourceResponse>,
  errors: [BadRequestException, InternalServerErrorException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForGlobalResource",
}));

export type ListTagsForResourceError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * List all tags on a MediaConnect resource in the current region.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(294) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(293) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [BadRequestException, InternalServerErrorException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PurchaseOfferingError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.
 */
export const purchaseOffering: API.OperationMethod<
  PurchaseOfferingRequest,
  PurchaseOfferingResponse,
  PurchaseOfferingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(295) as any as S.Schema<PurchaseOfferingRequest>,
  output: __S(296) as any as S.Schema<PurchaseOfferingResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PurchaseOffering",
}));

export type RemoveBridgeOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes an output from a bridge.
 */
export const removeBridgeOutput: API.OperationMethod<
  RemoveBridgeOutputRequest,
  RemoveBridgeOutputResponse,
  RemoveBridgeOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(297) as any as S.Schema<RemoveBridgeOutputRequest>,
  output: __S(298) as any as S.Schema<RemoveBridgeOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveBridgeOutput",
}));

export type RemoveBridgeSourceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes a source from a bridge.
 */
export const removeBridgeSource: API.OperationMethod<
  RemoveBridgeSourceRequest,
  RemoveBridgeSourceResponse,
  RemoveBridgeSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(299) as any as S.Schema<RemoveBridgeSourceRequest>,
  output: __S(300) as any as S.Schema<RemoveBridgeSourceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveBridgeSource",
}));

export type RemoveFlowMediaStreamError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.
 */
export const removeFlowMediaStream: API.OperationMethod<
  RemoveFlowMediaStreamRequest,
  RemoveFlowMediaStreamResponse,
  RemoveFlowMediaStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(301) as any as S.Schema<RemoveFlowMediaStreamRequest>,
  output: __S(302) as any as S.Schema<RemoveFlowMediaStreamResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveFlowMediaStream",
}));

export type RemoveFlowOutputError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
 */
export const removeFlowOutput: API.OperationMethod<
  RemoveFlowOutputRequest,
  RemoveFlowOutputResponse,
  RemoveFlowOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(303) as any as S.Schema<RemoveFlowOutputRequest>,
  output: __S(304) as any as S.Schema<RemoveFlowOutputResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveFlowOutput",
}));

export type RemoveFlowSourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
 */
export const removeFlowSource: API.OperationMethod<
  RemoveFlowSourceRequest,
  RemoveFlowSourceResponse,
  RemoveFlowSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(305) as any as S.Schema<RemoveFlowSourceRequest>,
  output: __S(306) as any as S.Schema<RemoveFlowSourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveFlowSource",
}));

export type RemoveFlowVpcInterfaceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
 */
export const removeFlowVpcInterface: API.OperationMethod<
  RemoveFlowVpcInterfaceRequest,
  RemoveFlowVpcInterfaceResponse,
  RemoveFlowVpcInterfaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(307) as any as S.Schema<RemoveFlowVpcInterfaceRequest>,
  output: __S(308) as any as S.Schema<RemoveFlowVpcInterfaceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveFlowVpcInterface",
}));

export type RestartRouterInputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Restarts a router input. This operation can be used to recover from errors or refresh the input state.
 */
export const restartRouterInput: API.OperationMethod<
  RestartRouterInputRequest,
  RestartRouterInputResponse,
  RestartRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(309) as any as S.Schema<RestartRouterInputRequest>,
  output: __S(197) as any as S.Schema<RestartRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestartRouterInput",
}));

export type RestartRouterOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Restarts a router output. This operation can be used to recover from errors or refresh the output state.
 */
export const restartRouterOutput: API.OperationMethod<
  RestartRouterOutputRequest,
  RestartRouterOutputResponse,
  RestartRouterOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(310) as any as S.Schema<RestartRouterOutputRequest>,
  output: __S(197) as any as S.Schema<RestartRouterOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestartRouterOutput",
}));

export type RevokeFlowEntitlementError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
 */
export const revokeFlowEntitlement: API.OperationMethod<
  RevokeFlowEntitlementRequest,
  RevokeFlowEntitlementResponse,
  RevokeFlowEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(311) as any as S.Schema<RevokeFlowEntitlementRequest>,
  output: __S(312) as any as S.Schema<RevokeFlowEntitlementResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokeFlowEntitlement",
}));

export type StartFlowError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts a flow.
 */
export const startFlow: API.OperationMethod<
  StartFlowRequest,
  StartFlowResponse,
  StartFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(313) as any as S.Schema<StartFlowRequest>,
  output: __S(193) as any as S.Schema<StartFlowResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFlow",
}));

export type StartRouterInputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts a router input in AWS Elemental MediaConnect.
 */
export const startRouterInput: API.OperationMethod<
  StartRouterInputRequest,
  StartRouterInputResponse,
  StartRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(314) as any as S.Schema<StartRouterInputRequest>,
  output: __S(315) as any as S.Schema<StartRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRouterInput",
}));

export type StartRouterOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Starts a router output in AWS Elemental MediaConnect.
 */
export const startRouterOutput: API.OperationMethod<
  StartRouterOutputRequest,
  StartRouterOutputResponse,
  StartRouterOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(316) as any as S.Schema<StartRouterOutputRequest>,
  output: __S(317) as any as S.Schema<StartRouterOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRouterOutput",
}));

export type StopFlowError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Stops a flow.
 */
export const stopFlow: API.OperationMethod<
  StopFlowRequest,
  StopFlowResponse,
  StopFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(318) as any as S.Schema<StopFlowRequest>,
  output: __S(193) as any as S.Schema<StopFlowResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopFlow",
}));

export type StopRouterInputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Stops a router input in AWS Elemental MediaConnect.
 */
export const stopRouterInput: API.OperationMethod<
  StopRouterInputRequest,
  StopRouterInputResponse,
  StopRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(319) as any as S.Schema<StopRouterInputRequest>,
  output: __S(320) as any as S.Schema<StopRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopRouterInput",
}));

export type StopRouterOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Stops a router output in AWS Elemental MediaConnect.
 */
export const stopRouterOutput: API.OperationMethod<
  StopRouterOutputRequest,
  StopRouterOutputResponse,
  StopRouterOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(321) as any as S.Schema<StopRouterOutputRequest>,
  output: __S(320) as any as S.Schema<StopRouterOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopRouterOutput",
}));

export type TagGlobalResourceError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Adds tags to a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.
 */
export const tagGlobalResource: API.OperationMethod<
  TagGlobalResourceRequest,
  TagGlobalResourceResponse,
  TagGlobalResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(322) as any as S.Schema<TagGlobalResourceRequest>,
  output: __S(323) as any as S.Schema<TagGlobalResourceResponse>,
  errors: [BadRequestException, InternalServerErrorException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagGlobalResource",
}));

export type TagResourceError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Associates the specified tags to a resource with the specified `resourceArn` in the current region. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(324) as any as S.Schema<TagResourceRequest>,
  output: __S(323) as any as S.Schema<TagResourceResponse>,
  errors: [BadRequestException, InternalServerErrorException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TakeRouterInputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Associates a router input with a router output in AWS Elemental MediaConnect.
 */
export const takeRouterInput: API.OperationMethod<
  TakeRouterInputRequest,
  TakeRouterInputResponse,
  TakeRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(325) as any as S.Schema<TakeRouterInputRequest>,
  output: __S(326) as any as S.Schema<TakeRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TakeRouterInput",
}));

export type UntagGlobalResourceError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Removes tags from a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces.
 */
export const untagGlobalResource: API.OperationMethod<
  UntagGlobalResourceRequest,
  UntagGlobalResourceResponse,
  UntagGlobalResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(327) as any as S.Schema<UntagGlobalResourceRequest>,
  output: __S(323) as any as S.Schema<UntagGlobalResourceResponse>,
  errors: [BadRequestException, InternalServerErrorException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagGlobalResource",
}));

export type UntagResourceError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Deletes specified tags from a resource in the current region.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(328) as any as S.Schema<UntagResourceRequest>,
  output: __S(323) as any as S.Schema<UntagResourceResponse>,
  errors: [BadRequestException, InternalServerErrorException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateBridgeError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the bridge.
 */
export const updateBridge: API.OperationMethod<
  UpdateBridgeRequest,
  UpdateBridgeResponse,
  UpdateBridgeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(329) as any as S.Schema<UpdateBridgeRequest>,
  output: __S(159) as any as S.Schema<UpdateBridgeResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBridge",
}));

export type UpdateBridgeOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing bridge output.
 */
export const updateBridgeOutput: API.OperationMethod<
  UpdateBridgeOutputRequest,
  UpdateBridgeOutputResponse,
  UpdateBridgeOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(331) as any as S.Schema<UpdateBridgeOutputRequest>,
  output: __S(332) as any as S.Schema<UpdateBridgeOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBridgeOutput",
}));

export type UpdateBridgeSourceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing bridge source.
 */
export const updateBridgeSource: API.OperationMethod<
  UpdateBridgeSourceRequest,
  UpdateBridgeSourceResponse,
  UpdateBridgeSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(335) as any as S.Schema<UpdateBridgeSourceRequest>,
  output: __S(336) as any as S.Schema<UpdateBridgeSourceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBridgeSource",
}));

export type UpdateBridgeStateError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the bridge state.
 */
export const updateBridgeState: API.OperationMethod<
  UpdateBridgeStateRequest,
  UpdateBridgeStateResponse,
  UpdateBridgeStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(337) as any as S.Schema<UpdateBridgeStateRequest>,
  output: __S(338) as any as S.Schema<UpdateBridgeStateResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBridgeState",
}));

export type UpdateFlowError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing flow.
 *
 * Because `UpdateFlowSources` and `UpdateFlow` are separate operations, you can't change both the source type AND the flow size in a single request.
 *
 * - If you have a `MEDIUM` flow and you want to change the flow source to NDI®:
 *
 * - First, use the `UpdateFlow` operation to upgrade the flow size to `LARGE`.
 *
 * - After that, you can then use the `UpdateFlowSource` operation to configure the NDI source.
 *
 * - If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size:
 *
 * - First, use the `UpdateFlowSource` operation to change the flow source type.
 *
 * - After that, you can then use the `UpdateFlow` operation to downgrade the flow size to `MEDIUM`.
 */
export const updateFlow: API.OperationMethod<
  UpdateFlowRequest,
  UpdateFlowResponse,
  UpdateFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(340) as any as S.Schema<UpdateFlowRequest>,
  output: __S(178) as any as S.Schema<UpdateFlowResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFlow",
}));

export type UpdateFlowEntitlementError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an entitlement. You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
 */
export const updateFlowEntitlement: API.OperationMethod<
  UpdateFlowEntitlementRequest,
  UpdateFlowEntitlementResponse,
  UpdateFlowEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(341) as any as S.Schema<UpdateFlowEntitlementRequest>,
  output: __S(342) as any as S.Schema<UpdateFlowEntitlementResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFlowEntitlement",
}));

export type UpdateFlowMediaStreamError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing media stream.
 */
export const updateFlowMediaStream: API.OperationMethod<
  UpdateFlowMediaStreamRequest,
  UpdateFlowMediaStreamResponse,
  UpdateFlowMediaStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(343) as any as S.Schema<UpdateFlowMediaStreamRequest>,
  output: __S(344) as any as S.Schema<UpdateFlowMediaStreamResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFlowMediaStream",
}));

export type UpdateFlowOutputError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing flow output.
 */
export const updateFlowOutput: API.OperationMethod<
  UpdateFlowOutputRequest,
  UpdateFlowOutputResponse,
  UpdateFlowOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(345) as any as S.Schema<UpdateFlowOutputRequest>,
  output: __S(346) as any as S.Schema<UpdateFlowOutputResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFlowOutput",
}));

export type UpdateFlowSourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the source of a flow.
 *
 * Because `UpdateFlowSources` and `UpdateFlow` are separate operations, you can't change both the source type AND the flow size in a single request.
 *
 * - If you have a `MEDIUM` flow and you want to change the flow source to NDI®:
 *
 * - First, use the `UpdateFlow` operation to upgrade the flow size to `LARGE`.
 *
 * - After that, you can then use the `UpdateFlowSource` operation to configure the NDI source.
 *
 * - If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size:
 *
 * - First, use the `UpdateFlowSource` operation to change the flow source type.
 *
 * - After that, you can then use the `UpdateFlow` operation to downgrade the flow size to `MEDIUM`.
 */
export const updateFlowSource: API.OperationMethod<
  UpdateFlowSourceRequest,
  UpdateFlowSourceResponse,
  UpdateFlowSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(347) as any as S.Schema<UpdateFlowSourceRequest>,
  output: __S(348) as any as S.Schema<UpdateFlowSourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFlowSource",
}));

export type UpdateGatewayInstanceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates an existing gateway instance.
 */
export const updateGatewayInstance: API.OperationMethod<
  UpdateGatewayInstanceRequest,
  UpdateGatewayInstanceResponse,
  UpdateGatewayInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(349) as any as S.Schema<UpdateGatewayInstanceRequest>,
  output: __S(350) as any as S.Schema<UpdateGatewayInstanceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewayInstance",
}));

export type UpdateRouterInputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the configuration of an existing router input in AWS Elemental MediaConnect.
 */
export const updateRouterInput: API.OperationMethod<
  UpdateRouterInputRequest,
  UpdateRouterInputResponse,
  UpdateRouterInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(351) as any as S.Schema<UpdateRouterInputRequest>,
  output: __S(185) as any as S.Schema<UpdateRouterInputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRouterInput",
}));

export type UpdateRouterNetworkInterfaceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the configuration of an existing router network interface in AWS Elemental MediaConnect.
 */
export const updateRouterNetworkInterface: API.OperationMethod<
  UpdateRouterNetworkInterfaceRequest,
  UpdateRouterNetworkInterfaceResponse,
  UpdateRouterNetworkInterfaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(352) as any as S.Schema<UpdateRouterNetworkInterfaceRequest>,
  output: __S(187) as any as S.Schema<UpdateRouterNetworkInterfaceResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRouterNetworkInterface",
}));

export type UpdateRouterOutputError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the configuration of an existing router output in AWS Elemental MediaConnect.
 */
export const updateRouterOutput: API.OperationMethod<
  UpdateRouterOutputRequest,
  UpdateRouterOutputResponse,
  UpdateRouterOutputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(353) as any as S.Schema<UpdateRouterOutputRequest>,
  output: __S(189) as any as S.Schema<UpdateRouterOutputResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRouterOutput",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IpAddress: S.optional(S.String),
          Name: S.optional(S.String),
          NetworkName: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
          Ttl: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            IpAddress: "ipAddress",
            Name: "name",
            NetworkName: "networkName",
            Port: "port",
            Protocol: "protocol",
            Ttl: "ttl",
          }),
        ),
      ).annotate({
        identifier: "AddBridgeNetworkOutputRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NetworkOutput: S.optional(__S(0)) }).pipe(
          S.encodeKeys({ NetworkOutput: "networkOutput" }),
        ),
      ).annotate({ identifier: "AddBridgeOutputRequest" });
    case 2:
      return S.Array(__S(1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")),
          Outputs: S.optional(__listOfAddBridgeOutputRequest),
        })
          .pipe(S.encodeKeys({ Outputs: "outputs" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/bridges/{BridgeArn}/outputs" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "AddBridgeOutputsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          FlowSourceArn: S.optional(S.String),
          Name: S.optional(S.String),
        }).pipe(S.encodeKeys({ FlowArn: "flowArn", FlowSourceArn: "flowSourceArn", Name: "name" })),
      ).annotate({ identifier: "BridgeFlowOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IpAddress: S.optional(S.String),
          Name: S.optional(S.String),
          NetworkName: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
          Ttl: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            IpAddress: "ipAddress",
            Name: "name",
            NetworkName: "networkName",
            Port: "port",
            Protocol: "protocol",
            Ttl: "ttl",
          }),
        ),
      ).annotate({ identifier: "BridgeNetworkOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FlowOutput: S.optional(__S(4)),
          NetworkOutput: S.optional(__S(5)),
        }).pipe(S.encodeKeys({ FlowOutput: "flowOutput", NetworkOutput: "networkOutput" })),
      ).annotate({ identifier: "BridgeOutput" });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.optional(S.String),
          Outputs: S.optional(__listOfBridgeOutput),
        }).pipe(S.encodeKeys({ BridgeArn: "bridgeArn", Outputs: "outputs" })),
      ).annotate({ identifier: "AddBridgeOutputsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ VpcInterfaceName: S.optional(S.String) }).pipe(
          S.encodeKeys({ VpcInterfaceName: "vpcInterfaceName" }),
        ),
      ).annotate({ identifier: "VpcInterfaceAttachment" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          FlowVpcInterfaceAttachment: S.optional(__S(9)),
          Name: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            FlowArn: "flowArn",
            FlowVpcInterfaceAttachment: "flowVpcInterfaceAttachment",
            Name: "name",
          }),
        ),
      ).annotate({
        identifier: "AddBridgeFlowSourceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MulticastSourceIp: S.optional(S.String) }).pipe(
          S.encodeKeys({ MulticastSourceIp: "multicastSourceIp" }),
        ),
      ).annotate({ identifier: "MulticastSourceSettings" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MulticastIp: S.optional(S.String),
          MulticastSourceSettings: S.optional(__S(11)),
          Name: S.optional(S.String),
          NetworkName: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            MulticastIp: "multicastIp",
            MulticastSourceSettings: "multicastSourceSettings",
            Name: "name",
            NetworkName: "networkName",
            Port: "port",
            Protocol: "protocol",
          }),
        ),
      ).annotate({
        identifier: "AddBridgeNetworkSourceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FlowSource: S.optional(__S(10)),
          NetworkSource: S.optional(__S(12)),
        }).pipe(S.encodeKeys({ FlowSource: "flowSource", NetworkSource: "networkSource" })),
      ).annotate({ identifier: "AddBridgeSourceRequest" });
    case 6:
      return S.Array(__S(13));
    case 7:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")),
          Sources: S.optional(__listOfAddBridgeSourceRequest),
        })
          .pipe(S.encodeKeys({ Sources: "sources" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/bridges/{BridgeArn}/sources" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "AddBridgeSourcesRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          FlowVpcInterfaceAttachment: S.optional(__S(9)),
          Name: S.optional(S.String),
          OutputArn: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            FlowArn: "flowArn",
            FlowVpcInterfaceAttachment: "flowVpcInterfaceAttachment",
            Name: "name",
            OutputArn: "outputArn",
          }),
        ),
      ).annotate({ identifier: "BridgeFlowSource" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MulticastIp: S.optional(S.String),
          MulticastSourceSettings: S.optional(__S(11)),
          Name: S.optional(S.String),
          NetworkName: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            MulticastIp: "multicastIp",
            MulticastSourceSettings: "multicastSourceSettings",
            Name: "name",
            NetworkName: "networkName",
            Port: "port",
            Protocol: "protocol",
          }),
        ),
      ).annotate({ identifier: "BridgeNetworkSource" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FlowSource: S.optional(__S(16)),
          NetworkSource: S.optional(__S(17)),
        }).pipe(S.encodeKeys({ FlowSource: "flowSource", NetworkSource: "networkSource" })),
      ).annotate({ identifier: "BridgeSource" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.optional(S.String),
          Sources: S.optional(__listOfBridgeSource),
        }).pipe(S.encodeKeys({ BridgeArn: "bridgeArn", Sources: "sources" })),
      ).annotate({ identifier: "AddBridgeSourcesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ChannelOrder: S.optional(S.String),
          Colorimetry: S.optional(S.String),
          ExactFramerate: S.optional(S.String),
          Par: S.optional(S.String),
          Range: S.optional(S.String),
          ScanMode: S.optional(S.String),
          Tcs: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            ChannelOrder: "channelOrder",
            Colorimetry: "colorimetry",
            ExactFramerate: "exactFramerate",
            Par: "par",
            Range: "range",
            ScanMode: "scanMode",
            Tcs: "tcs",
          }),
        ),
      ).annotate({ identifier: "FmtpRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Fmtp: S.optional(__S(21)), Lang: S.optional(S.String) }).pipe(
          S.encodeKeys({ Fmtp: "fmtp", Lang: "lang" }),
        ),
      ).annotate({
        identifier: "MediaStreamAttributesRequest",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(22)),
          ClockRate: S.optional(S.Number),
          Description: S.optional(S.String),
          MediaStreamId: S.optional(S.Number),
          MediaStreamName: S.optional(S.String),
          MediaStreamType: S.optional(S.String),
          VideoFormat: S.optional(S.String),
          MediaStreamTags: S.optional(__mapOfString),
        }).pipe(
          S.encodeKeys({
            Attributes: "attributes",
            ClockRate: "clockRate",
            Description: "description",
            MediaStreamId: "mediaStreamId",
            MediaStreamName: "mediaStreamName",
            MediaStreamType: "mediaStreamType",
            VideoFormat: "videoFormat",
            MediaStreamTags: "mediaStreamTags",
          }),
        ),
      ).annotate({ identifier: "AddMediaStreamRequest" });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          MediaStreams: S.optional(__listOfAddMediaStreamRequest),
        })
          .pipe(S.encodeKeys({ MediaStreams: "mediaStreams" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/flows/{FlowArn}/mediaStreams" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "AddFlowMediaStreamsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Fmtp: S.optional(__S(21)), Lang: S.optional(S.String) }).pipe(
          S.encodeKeys({ Fmtp: "fmtp", Lang: "lang" }),
        ),
      ).annotate({ identifier: "MediaStreamAttributes" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(27)),
          ClockRate: S.optional(S.Number),
          Description: S.optional(S.String),
          Fmt: S.optional(S.Number),
          MediaStreamId: S.optional(S.Number),
          MediaStreamName: S.optional(S.String),
          MediaStreamType: S.optional(S.String),
          VideoFormat: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Attributes: "attributes",
            ClockRate: "clockRate",
            Description: "description",
            Fmt: "fmt",
            MediaStreamId: "mediaStreamId",
            MediaStreamName: "mediaStreamName",
            MediaStreamType: "mediaStreamType",
            VideoFormat: "videoFormat",
          }),
        ),
      ).annotate({ identifier: "MediaStream" });
    case 5:
      return S.Array(__S(28));
    case 6:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          MediaStreams: S.optional(__listOfMediaStream),
        }).pipe(S.encodeKeys({ FlowArn: "flowArn", MediaStreams: "mediaStreams" })),
      ).annotate({
        identifier: "AddFlowMediaStreamsResponse",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Algorithm: S.optional(S.String),
          ConstantInitializationVector: S.optional(S.String),
          DeviceId: S.optional(S.String),
          KeyType: S.optional(S.String),
          Region: S.optional(S.String),
          ResourceId: S.optional(S.String),
          RoleArn: S.optional(S.String),
          SecretArn: S.optional(S.String),
          Url: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Algorithm: "algorithm",
            ConstantInitializationVector: "constantInitializationVector",
            DeviceId: "deviceId",
            KeyType: "keyType",
            Region: "region",
            ResourceId: "resourceId",
            RoleArn: "roleArn",
            SecretArn: "secretArn",
            Url: "url",
          }),
        ),
      ).annotate({ identifier: "Encryption" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(S.encodeKeys({ Name: "name" })),
      ).annotate({ identifier: "InterfaceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DestinationIp: S.optional(S.String),
          DestinationPort: S.optional(S.Number),
          Interface: S.optional(__S(33)),
        }).pipe(
          S.encodeKeys({
            DestinationIp: "destinationIp",
            DestinationPort: "destinationPort",
            Interface: "interface",
          }),
        ),
      ).annotate({
        identifier: "DestinationConfigurationRequest",
      });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          CompressionFactor: S.optional(S.Number),
          EncoderProfile: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            CompressionFactor: "compressionFactor",
            EncoderProfile: "encoderProfile",
          }),
        ),
      ).annotate({
        identifier: "EncodingParametersRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DestinationConfigurations: S.optional(__listOfDestinationConfigurationRequest),
          EncodingName: S.optional(S.String),
          EncodingParameters: S.optional(__S(36)),
          MediaStreamName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DestinationConfigurations: "destinationConfigurations",
            EncodingName: "encodingName",
            EncodingParameters: "encodingParameters",
            MediaStreamName: "mediaStreamName",
          }),
        ),
      ).annotate({
        identifier: "MediaStreamOutputConfigurationRequest",
      });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({ SecretArn: S.String, RoleArn: S.String }).pipe(
          S.encodeKeys({ SecretArn: "secretArn", RoleArn: "roleArn" }),
        ),
      ).annotate({
        identifier: "SecretsManagerEncryptionKeyConfiguration",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AutomaticEncryptionKeyConfiguration",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ SecretsManager: __S(39) }),
        /*@__PURE__*/ S.Struct({ Automatic: __S(40) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          EncryptionKeyType: S.optional(S.String),
          EncryptionKeyConfiguration: __S(41),
        }).pipe(
          S.encodeKeys({
            EncryptionKeyType: "encryptionKeyType",
            EncryptionKeyConfiguration: "encryptionKeyConfiguration",
          }),
        ),
      ).annotate({ identifier: "FlowTransitEncryption" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CidrAllowList: S.optional(__listOfString),
          Description: S.optional(S.String),
          Destination: S.optional(S.String),
          Encryption: S.optional(__S(32)),
          MaxLatency: S.optional(S.Number),
          MediaStreamOutputConfigurations: S.optional(
            __listOfMediaStreamOutputConfigurationRequest,
          ),
          MinLatency: S.optional(S.Number),
          Name: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
          RemoteId: S.optional(S.String),
          SenderControlPort: S.optional(S.Number),
          SmoothingLatency: S.optional(S.Number),
          StreamId: S.optional(S.String),
          VpcInterfaceAttachment: S.optional(__S(9)),
          OutputStatus: S.optional(S.String),
          NdiSpeedHqQuality: S.optional(S.Number),
          NdiProgramName: S.optional(S.String),
          OutputTags: S.optional(__mapOfString),
          RouterIntegrationState: S.optional(S.String),
          RouterIntegrationTransitEncryption: S.optional(__S(42)),
          NdiOutputTimecodeSource: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            CidrAllowList: "cidrAllowList",
            Description: "description",
            Destination: "destination",
            Encryption: "encryption",
            MaxLatency: "maxLatency",
            MediaStreamOutputConfigurations: "mediaStreamOutputConfigurations",
            MinLatency: "minLatency",
            Name: "name",
            Port: "port",
            Protocol: "protocol",
            RemoteId: "remoteId",
            SenderControlPort: "senderControlPort",
            SmoothingLatency: "smoothingLatency",
            StreamId: "streamId",
            VpcInterfaceAttachment: "vpcInterfaceAttachment",
            OutputStatus: "outputStatus",
            NdiSpeedHqQuality: "ndiSpeedHqQuality",
            NdiProgramName: "ndiProgramName",
            OutputTags: "outputTags",
            RouterIntegrationState: "routerIntegrationState",
            RouterIntegrationTransitEncryption: "routerIntegrationTransitEncryption",
            NdiOutputTimecodeSource: "ndiOutputTimecodeSource",
          }),
        ),
      ).annotate({ identifier: "AddOutputRequest" });
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          Outputs: S.optional(__listOfAddOutputRequest),
        })
          .pipe(S.encodeKeys({ Outputs: "outputs" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/flows/{FlowArn}/outputs" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "AddFlowOutputsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DestinationIp: S.optional(S.String),
          DestinationPort: S.optional(S.Number),
          Interface: S.optional(__S(33)),
          OutboundIp: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DestinationIp: "destinationIp",
            DestinationPort: "destinationPort",
            Interface: "interface",
            OutboundIp: "outboundIp",
          }),
        ),
      ).annotate({ identifier: "DestinationConfiguration" });
    case 7:
      return S.Array(__S(46));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CompressionFactor: S.optional(S.Number),
          EncoderProfile: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            CompressionFactor: "compressionFactor",
            EncoderProfile: "encoderProfile",
          }),
        ),
      ).annotate({ identifier: "EncodingParameters" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DestinationConfigurations: S.optional(__listOfDestinationConfiguration),
          EncodingName: S.optional(S.String),
          EncodingParameters: S.optional(__S(48)),
          MediaStreamName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DestinationConfigurations: "destinationConfigurations",
            EncodingName: "encodingName",
            EncodingParameters: "encodingParameters",
            MediaStreamName: "mediaStreamName",
          }),
        ),
      ).annotate({
        identifier: "MediaStreamOutputConfiguration",
      });
    case 2:
      return S.Array(__S(49));
    case 3:
      return S.suspend(() =>
        S.Struct({ SourceName: S.optional(S.String) }).pipe(
          S.encodeKeys({ SourceName: "sourceName" }),
        ),
      ).annotate({ identifier: "NdiSourceSettings" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CidrAllowList: S.optional(__listOfString),
          MaxBitrate: S.optional(S.Number),
          MaxLatency: S.optional(S.Number),
          MaxSyncBuffer: S.optional(S.Number),
          MinLatency: S.optional(S.Number),
          Protocol: S.optional(S.String),
          RemoteId: S.optional(S.String),
          SenderControlPort: S.optional(S.Number),
          SenderIpAddress: S.optional(S.String),
          SmoothingLatency: S.optional(S.Number),
          SourceListenerAddress: S.optional(S.String),
          SourceListenerPort: S.optional(S.Number),
          StreamId: S.optional(S.String),
          NdiSpeedHqQuality: S.optional(S.Number),
          NdiProgramName: S.optional(S.String),
          NdiSourceSettings: S.optional(__S(51)),
          NdiOutputTimecodeSource: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            CidrAllowList: "cidrAllowList",
            MaxBitrate: "maxBitrate",
            MaxLatency: "maxLatency",
            MaxSyncBuffer: "maxSyncBuffer",
            MinLatency: "minLatency",
            Protocol: "protocol",
            RemoteId: "remoteId",
            SenderControlPort: "senderControlPort",
            SenderIpAddress: "senderIpAddress",
            SmoothingLatency: "smoothingLatency",
            SourceListenerAddress: "sourceListenerAddress",
            SourceListenerPort: "sourceListenerPort",
            StreamId: "streamId",
            NdiSpeedHqQuality: "ndiSpeedHqQuality",
            NdiProgramName: "ndiProgramName",
            NdiSourceSettings: "ndiSourceSettings",
            NdiOutputTimecodeSource: "ndiOutputTimecodeSource",
          }),
        ),
      ).annotate({ identifier: "Transport" });
    case 5:
      return S.Array(S.Number);
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataTransferSubscriberFeePercent: S.optional(S.Number),
          Description: S.optional(S.String),
          Destination: S.optional(S.String),
          Encryption: S.optional(__S(32)),
          EntitlementArn: S.optional(S.String),
          ListenerAddress: S.optional(S.String),
          MediaLiveInputArn: S.optional(S.String),
          MediaStreamOutputConfigurations: S.optional(__listOfMediaStreamOutputConfiguration),
          Name: S.optional(S.String),
          OutputArn: S.optional(S.String),
          Port: S.optional(S.Number),
          Transport: S.optional(__S(52)),
          VpcInterfaceAttachment: S.optional(__S(9)),
          BridgeArn: S.optional(S.String),
          BridgePorts: S.optional(__listOfInteger),
          OutputStatus: S.optional(S.String),
          PeerIpAddress: S.optional(S.String),
          RouterIntegrationState: S.optional(S.String),
          RouterIntegrationTransitEncryption: S.optional(__S(42)),
          ConnectedRouterInputArn: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DataTransferSubscriberFeePercent: "dataTransferSubscriberFeePercent",
            Description: "description",
            Destination: "destination",
            Encryption: "encryption",
            EntitlementArn: "entitlementArn",
            ListenerAddress: "listenerAddress",
            MediaLiveInputArn: "mediaLiveInputArn",
            MediaStreamOutputConfigurations: "mediaStreamOutputConfigurations",
            Name: "name",
            OutputArn: "outputArn",
            Port: "port",
            Transport: "transport",
            VpcInterfaceAttachment: "vpcInterfaceAttachment",
            BridgeArn: "bridgeArn",
            BridgePorts: "bridgePorts",
            OutputStatus: "outputStatus",
            PeerIpAddress: "peerIpAddress",
            RouterIntegrationState: "routerIntegrationState",
            RouterIntegrationTransitEncryption: "routerIntegrationTransitEncryption",
            ConnectedRouterInputArn: "connectedRouterInputArn",
          }),
        ),
      ).annotate({ identifier: "Output" });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), Outputs: S.optional(__listOfOutput) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", Outputs: "outputs" }),
        ),
      ).annotate({ identifier: "AddFlowOutputsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ InputPort: S.optional(S.Number), Interface: S.optional(__S(33)) }).pipe(
          S.encodeKeys({ InputPort: "inputPort", Interface: "interface" }),
        ),
      ).annotate({
        identifier: "InputConfigurationRequest",
      });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() =>
        S.Struct({
          EncodingName: S.optional(S.String),
          InputConfigurations: S.optional(__listOfInputConfigurationRequest),
          MediaStreamName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            EncodingName: "encodingName",
            InputConfigurations: "inputConfigurations",
            MediaStreamName: "mediaStreamName",
          }),
        ),
      ).annotate({
        identifier: "MediaStreamSourceConfigurationRequest",
      });
    case 4:
      return S.Array(__S(59));
    case 5:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.optional(S.String),
          VpcInterfaceAttachment: S.optional(__S(9)),
        }).pipe(
          S.encodeKeys({
            BridgeArn: "bridgeArn",
            VpcInterfaceAttachment: "vpcInterfaceAttachment",
          }),
        ),
      ).annotate({
        identifier: "SetGatewayBridgeSourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Decryption: S.optional(__S(32)),
          Description: S.optional(S.String),
          EntitlementArn: S.optional(S.String),
          IngestPort: S.optional(S.Number),
          MaxBitrate: S.optional(S.Number),
          MaxLatency: S.optional(S.Number),
          MaxSyncBuffer: S.optional(S.Number),
          MediaStreamSourceConfigurations: S.optional(
            __listOfMediaStreamSourceConfigurationRequest,
          ),
          MinLatency: S.optional(S.Number),
          Name: S.optional(S.String),
          Protocol: S.optional(S.String),
          SenderControlPort: S.optional(S.Number),
          SenderIpAddress: S.optional(S.String),
          SourceListenerAddress: S.optional(S.String),
          SourceListenerPort: S.optional(S.Number),
          StreamId: S.optional(S.String),
          VpcInterfaceName: S.optional(S.String),
          WhitelistCidr: S.optional(S.String),
          GatewayBridgeSource: S.optional(__S(61)),
          NdiSourceSettings: S.optional(__S(51)),
          SourceTags: S.optional(__mapOfString),
          RouterIntegrationState: S.optional(S.String),
          RouterIntegrationTransitDecryption: S.optional(__S(42)),
        }).pipe(
          S.encodeKeys({
            Decryption: "decryption",
            Description: "description",
            EntitlementArn: "entitlementArn",
            IngestPort: "ingestPort",
            MaxBitrate: "maxBitrate",
            MaxLatency: "maxLatency",
            MaxSyncBuffer: "maxSyncBuffer",
            MediaStreamSourceConfigurations: "mediaStreamSourceConfigurations",
            MinLatency: "minLatency",
            Name: "name",
            Protocol: "protocol",
            SenderControlPort: "senderControlPort",
            SenderIpAddress: "senderIpAddress",
            SourceListenerAddress: "sourceListenerAddress",
            SourceListenerPort: "sourceListenerPort",
            StreamId: "streamId",
            VpcInterfaceName: "vpcInterfaceName",
            WhitelistCidr: "whitelistCidr",
            GatewayBridgeSource: "gatewayBridgeSource",
            NdiSourceSettings: "ndiSourceSettings",
            SourceTags: "sourceTags",
            RouterIntegrationState: "routerIntegrationState",
            RouterIntegrationTransitDecryption: "routerIntegrationTransitDecryption",
          }),
        ),
      ).annotate({ identifier: "SetSourceRequest" });
    case 7:
      return S.Array(__S(62));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          Sources: S.optional(__listOfSetSourceRequest),
        })
          .pipe(S.encodeKeys({ Sources: "sources" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/flows/{FlowArn}/source" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "AddFlowSourcesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InputIp: S.optional(S.String),
          InputPort: S.optional(S.Number),
          Interface: S.optional(__S(33)),
        }).pipe(
          S.encodeKeys({ InputIp: "inputIp", InputPort: "inputPort", Interface: "interface" }),
        ),
      ).annotate({ identifier: "InputConfiguration" });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          EncodingName: S.optional(S.String),
          InputConfigurations: S.optional(__listOfInputConfiguration),
          MediaStreamName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            EncodingName: "encodingName",
            InputConfigurations: "inputConfigurations",
            MediaStreamName: "mediaStreamName",
          }),
        ),
      ).annotate({
        identifier: "MediaStreamSourceConfiguration",
      });
    case 4:
      return S.Array(__S(67));
    case 5:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.optional(S.String),
          VpcInterfaceAttachment: S.optional(__S(9)),
        }).pipe(
          S.encodeKeys({
            BridgeArn: "bridgeArn",
            VpcInterfaceAttachment: "vpcInterfaceAttachment",
          }),
        ),
      ).annotate({ identifier: "GatewayBridgeSource" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataTransferSubscriberFeePercent: S.optional(S.Number),
          Decryption: S.optional(__S(32)),
          Description: S.optional(S.String),
          EntitlementArn: S.optional(S.String),
          IngestIp: S.optional(S.String),
          IngestPort: S.optional(S.Number),
          MediaStreamSourceConfigurations: S.optional(__listOfMediaStreamSourceConfiguration),
          Name: S.optional(S.String),
          SenderControlPort: S.optional(S.Number),
          SenderIpAddress: S.optional(S.String),
          SourceArn: S.optional(S.String),
          Transport: S.optional(__S(52)),
          VpcInterfaceName: S.optional(S.String),
          WhitelistCidr: S.optional(S.String),
          GatewayBridgeSource: S.optional(__S(69)),
          PeerIpAddress: S.optional(S.String),
          RouterIntegrationState: S.optional(S.String),
          RouterIntegrationTransitDecryption: S.optional(__S(42)),
          ConnectedRouterOutputArn: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DataTransferSubscriberFeePercent: "dataTransferSubscriberFeePercent",
            Decryption: "decryption",
            Description: "description",
            EntitlementArn: "entitlementArn",
            IngestIp: "ingestIp",
            IngestPort: "ingestPort",
            MediaStreamSourceConfigurations: "mediaStreamSourceConfigurations",
            Name: "name",
            SenderControlPort: "senderControlPort",
            SenderIpAddress: "senderIpAddress",
            SourceArn: "sourceArn",
            Transport: "transport",
            VpcInterfaceName: "vpcInterfaceName",
            WhitelistCidr: "whitelistCidr",
            GatewayBridgeSource: "gatewayBridgeSource",
            PeerIpAddress: "peerIpAddress",
            RouterIntegrationState: "routerIntegrationState",
            RouterIntegrationTransitDecryption: "routerIntegrationTransitDecryption",
            ConnectedRouterOutputArn: "connectedRouterOutputArn",
          }),
        ),
      ).annotate({ identifier: "Source" });
    case 7:
      return S.Array(__S(70));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), Sources: S.optional(__listOfSource) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", Sources: "sources" }),
        ),
      ).annotate({ identifier: "AddFlowSourcesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          NetworkInterfaceType: S.optional(S.String),
          RoleArn: S.optional(S.String),
          SecurityGroupIds: S.optional(__listOfString),
          SubnetId: S.optional(S.String),
          VpcInterfaceTags: S.optional(__mapOfString),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            NetworkInterfaceType: "networkInterfaceType",
            RoleArn: "roleArn",
            SecurityGroupIds: "securityGroupIds",
            SubnetId: "subnetId",
            VpcInterfaceTags: "vpcInterfaceTags",
          }),
        ),
      ).annotate({ identifier: "VpcInterfaceRequest" });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          VpcInterfaces: S.optional(__listOfVpcInterfaceRequest),
        })
          .pipe(S.encodeKeys({ VpcInterfaces: "vpcInterfaces" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/flows/{FlowArn}/vpcInterfaces" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "AddFlowVpcInterfacesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          NetworkInterfaceIds: S.optional(__listOfString),
          NetworkInterfaceType: S.optional(S.String),
          RoleArn: S.optional(S.String),
          SecurityGroupIds: S.optional(__listOfString),
          SubnetId: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            NetworkInterfaceIds: "networkInterfaceIds",
            NetworkInterfaceType: "networkInterfaceType",
            RoleArn: "roleArn",
            SecurityGroupIds: "securityGroupIds",
            SubnetId: "subnetId",
          }),
        ),
      ).annotate({ identifier: "VpcInterface" });
    case 5:
      return S.Array(__S(76));
    case 6:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          VpcInterfaces: S.optional(__listOfVpcInterface),
        }).pipe(S.encodeKeys({ FlowArn: "flowArn", VpcInterfaces: "vpcInterfaces" })),
      ).annotate({
        identifier: "AddFlowVpcInterfacesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arns: RouterInputArnList.pipe(T.HttpQuery("arns")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/routerInputs" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetRouterInputRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Port: S.Number, RecoveryLatencyMilliseconds: S.Number }).pipe(
          S.encodeKeys({
            Port: "port",
            RecoveryLatencyMilliseconds: "recoveryLatencyMilliseconds",
          }),
        ),
      ).annotate({
        identifier: "RistRouterInputConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ EncryptionKey: __S(39) }).pipe(S.encodeKeys({ EncryptionKey: "encryptionKey" })),
      ).annotate({
        identifier: "SrtDecryptionConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Port: S.Number,
          MinimumLatencyMilliseconds: S.Number,
          DecryptionConfiguration: S.optional(__S(81)),
        }).pipe(
          S.encodeKeys({
            Port: "port",
            MinimumLatencyMilliseconds: "minimumLatencyMilliseconds",
            DecryptionConfiguration: "decryptionConfiguration",
          }),
        ),
      ).annotate({
        identifier: "SrtListenerRouterInputConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SourceAddress: S.String,
          SourcePort: S.Number,
          MinimumLatencyMilliseconds: S.Number,
          StreamId: S.optional(S.String),
          DecryptionConfiguration: S.optional(__S(81)),
        }).pipe(
          S.encodeKeys({
            SourceAddress: "sourceAddress",
            SourcePort: "sourcePort",
            MinimumLatencyMilliseconds: "minimumLatencyMilliseconds",
            StreamId: "streamId",
            DecryptionConfiguration: "decryptionConfiguration",
          }),
        ),
      ).annotate({
        identifier: "SrtCallerRouterInputConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Port: S.Number,
          ForwardErrorCorrection: S.optional(S.String),
        }).pipe(S.encodeKeys({ Port: "port", ForwardErrorCorrection: "forwardErrorCorrection" })),
      ).annotate({
        identifier: "RtpRouterInputConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Rist: __S(80) }),
        /*@__PURE__*/ S.Struct({ SrtListener: __S(82) }),
        /*@__PURE__*/ S.Struct({ SrtCaller: __S(83) }),
        /*@__PURE__*/ S.Struct({ Rtp: __S(84) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          NetworkInterfaceArn: S.String,
          ProtocolConfiguration: __S(85),
          Protocol: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            NetworkInterfaceArn: "networkInterfaceArn",
            ProtocolConfiguration: "protocolConfiguration",
            Protocol: "protocol",
          }),
        ),
      ).annotate({
        identifier: "StandardRouterInputConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EncryptionKeyType: S.optional(S.String),
          EncryptionKeyConfiguration: __S(41),
        }).pipe(
          S.encodeKeys({
            EncryptionKeyType: "encryptionKeyType",
            EncryptionKeyConfiguration: "encryptionKeyConfiguration",
          }),
        ),
      ).annotate({
        identifier: "MediaLiveTransitEncryption",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MediaLiveChannelArn: S.optional(S.String),
          MediaLivePipelineId: S.optional(S.String),
          MediaLiveChannelOutputName: S.optional(S.String),
          SourceTransitDecryption: __S(87),
        }).pipe(
          S.encodeKeys({
            MediaLiveChannelArn: "mediaLiveChannelArn",
            MediaLivePipelineId: "mediaLivePipelineId",
            MediaLiveChannelOutputName: "mediaLiveChannelOutputName",
            SourceTransitDecryption: "sourceTransitDecryption",
          }),
        ),
      ).annotate({
        identifier: "MediaLiveChannelRouterInputConfiguration",
      });
    case 1:
      return S.Array(__S(85));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NetworkInterfaceArn: S.String,
          ProtocolConfigurations: __S(89),
          SourcePriorityMode: S.String,
          PrimarySourceIndex: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            NetworkInterfaceArn: "networkInterfaceArn",
            ProtocolConfigurations: "protocolConfigurations",
            SourcePriorityMode: "sourcePriorityMode",
            PrimarySourceIndex: "primarySourceIndex",
          }),
        ),
      ).annotate({
        identifier: "FailoverRouterInputConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          FlowOutputArn: S.optional(S.String),
          SourceTransitDecryption: __S(42),
        }).pipe(
          S.encodeKeys({
            FlowArn: "flowArn",
            FlowOutputArn: "flowOutputArn",
            SourceTransitDecryption: "sourceTransitDecryption",
          }),
        ),
      ).annotate({
        identifier: "MediaConnectFlowRouterInputConfiguration",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Rtp: __S(84) }),
        /*@__PURE__*/ S.Struct({ Rist: __S(80) }),
      ]);
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({
          NetworkInterfaceArn: S.String,
          ProtocolConfigurations: __S(93),
          MergeRecoveryWindowMilliseconds: S.Number,
        }).pipe(
          S.encodeKeys({
            NetworkInterfaceArn: "networkInterfaceArn",
            ProtocolConfigurations: "protocolConfigurations",
            MergeRecoveryWindowMilliseconds: "mergeRecoveryWindowMilliseconds",
          }),
        ),
      ).annotate({
        identifier: "MergeRouterInputConfiguration",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Standard: __S(86) }),
        /*@__PURE__*/ S.Struct({ MediaLiveChannel: __S(88) }),
        /*@__PURE__*/ S.Struct({ Failover: __S(90) }),
        /*@__PURE__*/ S.Struct({ MediaConnectFlow: __S(91) }),
        /*@__PURE__*/ S.Struct({ Merge: __S(94) }),
      ]);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Code: S.String, Message: S.String }).pipe(
          S.encodeKeys({ Code: "code", Message: "message" }),
        ),
      ).annotate({ identifier: "RouterInputMessage" });
    case 1:
      return S.Array(__S(96));
    case 2:
      return S.suspend(() =>
        S.Struct({
          EncryptionKeyType: S.optional(S.String),
          EncryptionKeyConfiguration: __S(41),
        }).pipe(
          S.encodeKeys({
            EncryptionKeyType: "encryptionKeyType",
            EncryptionKeyConfiguration: "encryptionKeyConfiguration",
          }),
        ),
      ).annotate({
        identifier: "RouterInputTransitEncryption",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SourceIpAddress: S.optional(S.String) }).pipe(
          S.encodeKeys({ SourceIpAddress: "sourceIpAddress" }),
        ),
      ).annotate({
        identifier: "StandardRouterInputStreamDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SourceIndex: S.Number, SourceIpAddress: S.optional(S.String) }).pipe(
          S.encodeKeys({ SourceIndex: "sourceIndex", SourceIpAddress: "sourceIpAddress" }),
        ),
      ).annotate({
        identifier: "FailoverRouterInputIndexedStreamDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceIndexZeroStreamDetails: __S(100),
          SourceIndexOneStreamDetails: __S(100),
        }).pipe(
          S.encodeKeys({
            SourceIndexZeroStreamDetails: "sourceIndexZeroStreamDetails",
            SourceIndexOneStreamDetails: "sourceIndexOneStreamDetails",
          }),
        ),
      ).annotate({
        identifier: "FailoverRouterInputStreamDetails",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Standard: __S(99) }),
        /*@__PURE__*/ S.Struct({ MediaLiveChannel: __S(40) }),
        /*@__PURE__*/ S.Struct({ Failover: __S(101) }),
        /*@__PURE__*/ S.Struct({ MediaConnectFlow: __S(40) }),
        /*@__PURE__*/ S.Struct({ Merge: __S(101) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ Day: S.String, Time: S.String }).pipe(
          S.encodeKeys({ Day: "day", Time: "time" }),
        ),
      ).annotate({
        identifier: "PreferredDayTimeMaintenanceConfiguration",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DefaultMaintenanceConfiguration",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ PreferredDayTime: __S(103) }),
        /*@__PURE__*/ S.Struct({ Default: __S(104) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Start: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          End: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ScheduledTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }).pipe(S.encodeKeys({ Start: "start", End: "end", ScheduledTime: "scheduledTime" })),
      ).annotate({
        identifier: "WindowMaintenanceSchedule",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ Window: __S(106) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({ State: S.String, ThresholdSeconds: S.Number }).pipe(
          S.encodeKeys({ State: "state", ThresholdSeconds: "thresholdSeconds" }),
        ),
      ).annotate({ identifier: "BlackFramesConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({ State: S.String, ThresholdSeconds: S.Number }).pipe(
          S.encodeKeys({ State: "state", ThresholdSeconds: "thresholdSeconds" }),
        ),
      ).annotate({
        identifier: "FrozenFramesConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          BlackFrames: S.optional(__S(108)),
          FrozenFrames: S.optional(__S(109)),
          SilentAudio: S.optional(__S(108)),
        }).pipe(
          S.encodeKeys({
            BlackFrames: "blackFrames",
            FrozenFrames: "frozenFrames",
            SilentAudio: "silentAudio",
          }),
        ),
      ).annotate({
        identifier: "ContentQualityAnalysisFeatureConfiguration",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ ContentLevel: __S(110) })]);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Id: S.String,
          State: S.String,
          InputType: S.String,
          Configuration: __S(95),
          RoutedOutputs: S.Number,
          MaximumRoutedOutputs: S.optional(S.Number),
          RegionName: S.String,
          AvailabilityZone: S.String,
          MaximumBitrate: S.Number,
          Tier: S.String,
          RoutingScope: S.String,
          CreatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          UpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          Messages: __S(97),
          TransitEncryption: __S(98),
          Tags: __mapOfString,
          StreamDetails: __S(102),
          IpAddress: S.optional(S.String),
          MaintenanceType: S.String,
          MaintenanceConfiguration: __S(105),
          MaintenanceScheduleType: S.optional(S.String),
          MaintenanceSchedule: S.optional(__S(107)),
          ContentQualityAnalysisType: S.optional(S.String),
          ContentQualityAnalysisConfiguration: S.optional(__S(111)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Arn: "arn",
            Id: "id",
            State: "state",
            InputType: "inputType",
            Configuration: "configuration",
            RoutedOutputs: "routedOutputs",
            MaximumRoutedOutputs: "maximumRoutedOutputs",
            RegionName: "regionName",
            AvailabilityZone: "availabilityZone",
            MaximumBitrate: "maximumBitrate",
            Tier: "tier",
            RoutingScope: "routingScope",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            Messages: "messages",
            TransitEncryption: "transitEncryption",
            Tags: "tags",
            StreamDetails: "streamDetails",
            IpAddress: "ipAddress",
            MaintenanceType: "maintenanceType",
            MaintenanceConfiguration: "maintenanceConfiguration",
            MaintenanceScheduleType: "maintenanceScheduleType",
            MaintenanceSchedule: "maintenanceSchedule",
            ContentQualityAnalysisType: "contentQualityAnalysisType",
            ContentQualityAnalysisConfiguration: "contentQualityAnalysisConfiguration",
          }),
        ),
      ).annotate({ identifier: "RouterInput" });
    case 1:
      return S.Array(__S(112));
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Code: S.String, Message: S.String }).pipe(
          S.encodeKeys({ Arn: "arn", Code: "code", Message: "message" }),
        ),
      ).annotate({
        identifier: "BatchGetRouterInputError",
      });
    case 3:
      return S.Array(__S(114));
    case 4:
      return S.suspend(() =>
        S.Struct({ RouterInputs: __S(113), Errors: __S(115) }).pipe(
          S.encodeKeys({ RouterInputs: "routerInputs", Errors: "errors" }),
        ),
      ).annotate({
        identifier: "BatchGetRouterInputResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arns: RouterNetworkInterfaceArnList.pipe(T.HttpQuery("arns")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/routerNetworkInterfaces" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetRouterNetworkInterfaceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Cidr: S.String }).pipe(S.encodeKeys({ Cidr: "cidr" })),
      ).annotate({
        identifier: "PublicRouterNetworkInterfaceRule",
      });
    case 7:
      return S.Array(__S(118));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AllowRules: __S(119) }).pipe(S.encodeKeys({ AllowRules: "allowRules" })),
      ).annotate({
        identifier: "PublicRouterNetworkInterfaceConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SecurityGroupIds: SecurityGroupIdList, SubnetId: S.String }).pipe(
          S.encodeKeys({ SecurityGroupIds: "securityGroupIds", SubnetId: "subnetId" }),
        ),
      ).annotate({
        identifier: "VpcRouterNetworkInterfaceConfiguration",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Public: __S(120) }),
        /*@__PURE__*/ S.Struct({ Vpc: __S(121) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Id: S.String,
          State: S.String,
          NetworkInterfaceType: S.String,
          Configuration: __S(122),
          AssociatedOutputCount: S.Number,
          AssociatedInputCount: S.Number,
          RegionName: S.String,
          CreatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          UpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          Tags: __mapOfString,
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Arn: "arn",
            Id: "id",
            State: "state",
            NetworkInterfaceType: "networkInterfaceType",
            Configuration: "configuration",
            AssociatedOutputCount: "associatedOutputCount",
            AssociatedInputCount: "associatedInputCount",
            RegionName: "regionName",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            Tags: "tags",
          }),
        ),
      ).annotate({ identifier: "RouterNetworkInterface" });
    case 4:
      return S.Array(__S(123));
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Code: S.String, Message: S.String }).pipe(
          S.encodeKeys({ Arn: "arn", Code: "code", Message: "message" }),
        ),
      ).annotate({
        identifier: "BatchGetRouterNetworkInterfaceError",
      });
    case 6:
      return S.Array(__S(125));
    case 7:
      return S.suspend(() =>
        S.Struct({
          RouterNetworkInterfaces: __S(124),
          Errors: __S(126),
        }).pipe(
          S.encodeKeys({ RouterNetworkInterfaces: "routerNetworkInterfaces", Errors: "errors" }),
        ),
      ).annotate({
        identifier: "BatchGetRouterNetworkInterfaceResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Arns: RouterOutputArnList.pipe(T.HttpQuery("arns")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/routerOutputs" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetRouterOutputRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DestinationAddress: S.String, DestinationPort: S.Number }).pipe(
          S.encodeKeys({
            DestinationAddress: "destinationAddress",
            DestinationPort: "destinationPort",
          }),
        ),
      ).annotate({
        identifier: "RistRouterOutputConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Port: S.Number,
          MinimumLatencyMilliseconds: S.Number,
          EncryptionConfiguration: S.optional(__S(81)),
        }).pipe(
          S.encodeKeys({
            Port: "port",
            MinimumLatencyMilliseconds: "minimumLatencyMilliseconds",
            EncryptionConfiguration: "encryptionConfiguration",
          }),
        ),
      ).annotate({
        identifier: "SrtListenerRouterOutputConfiguration",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ Public: __S(40) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          EncryptionType: S.optional(S.String),
          EncryptionConfiguration: __S(131),
        }).pipe(
          S.encodeKeys({
            EncryptionType: "encryptionType",
            EncryptionConfiguration: "encryptionConfiguration",
          }),
        ),
      ).annotate({ identifier: "TlsEncryption" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DestinationAddress: S.String,
          DestinationPort: S.Number,
          ApplicationName: S.String,
          StreamName: S.String,
          TlsEncryption: S.optional(__S(132)),
        }).pipe(
          S.encodeKeys({
            DestinationAddress: "destinationAddress",
            DestinationPort: "destinationPort",
            ApplicationName: "applicationName",
            StreamName: "streamName",
            TlsEncryption: "tlsEncryption",
          }),
        ),
      ).annotate({
        identifier: "RtmpPushRouterOutputConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DestinationAddress: S.String,
          DestinationPort: S.Number,
          MinimumLatencyMilliseconds: S.Number,
          StreamId: S.optional(S.String),
          EncryptionConfiguration: S.optional(__S(81)),
        }).pipe(
          S.encodeKeys({
            DestinationAddress: "destinationAddress",
            DestinationPort: "destinationPort",
            MinimumLatencyMilliseconds: "minimumLatencyMilliseconds",
            StreamId: "streamId",
            EncryptionConfiguration: "encryptionConfiguration",
          }),
        ),
      ).annotate({
        identifier: "SrtCallerRouterOutputConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DestinationAddress: S.String,
          DestinationPort: S.Number,
          ForwardErrorCorrection: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DestinationAddress: "destinationAddress",
            DestinationPort: "destinationPort",
            ForwardErrorCorrection: "forwardErrorCorrection",
          }),
        ),
      ).annotate({
        identifier: "RtpRouterOutputConfiguration",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Rist: __S(129) }),
        /*@__PURE__*/ S.Struct({ SrtListener: __S(130) }),
        /*@__PURE__*/ S.Struct({ RtmpPush: __S(133) }),
        /*@__PURE__*/ S.Struct({ SrtCaller: __S(134) }),
        /*@__PURE__*/ S.Struct({ Rtp: __S(135) }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          NetworkInterfaceArn: S.String,
          ProtocolConfiguration: __S(136),
          Protocol: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            NetworkInterfaceArn: "networkInterfaceArn",
            ProtocolConfiguration: "protocolConfiguration",
            Protocol: "protocol",
          }),
        ),
      ).annotate({
        identifier: "StandardRouterOutputConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          FlowSourceArn: S.optional(S.String),
          DestinationTransitEncryption: __S(42),
        }).pipe(
          S.encodeKeys({
            FlowArn: "flowArn",
            FlowSourceArn: "flowSourceArn",
            DestinationTransitEncryption: "destinationTransitEncryption",
          }),
        ),
      ).annotate({
        identifier: "MediaConnectFlowRouterOutputConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MediaLiveInputArn: S.optional(S.String),
          MediaLivePipelineId: S.optional(S.String),
          DestinationTransitEncryption: __S(87),
        }).pipe(
          S.encodeKeys({
            MediaLiveInputArn: "mediaLiveInputArn",
            MediaLivePipelineId: "mediaLivePipelineId",
            DestinationTransitEncryption: "destinationTransitEncryption",
          }),
        ),
      ).annotate({
        identifier: "MediaLiveInputRouterOutputConfiguration",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Standard: __S(137) }),
        /*@__PURE__*/ S.Struct({ MediaConnectFlow: __S(138) }),
        /*@__PURE__*/ S.Struct({ MediaLiveInput: __S(139) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ DestinationIpAddress: S.optional(S.String) }).pipe(
          S.encodeKeys({ DestinationIpAddress: "destinationIpAddress" }),
        ),
      ).annotate({
        identifier: "StandardRouterOutputStreamDetails",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Standard: __S(141) }),
        /*@__PURE__*/ S.Struct({ MediaConnectFlow: __S(40) }),
        /*@__PURE__*/ S.Struct({ MediaLiveInput: __S(40) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ RecoveryLatencyMode: S.String }).pipe(
          S.encodeKeys({ RecoveryLatencyMode: "recoveryLatencyMode" }),
        ),
      ).annotate({ identifier: "FabricConfiguration" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Id: S.String,
          State: S.String,
          OutputType: S.String,
          Configuration: __S(140),
          RoutedState: S.String,
          RegionName: S.String,
          AvailabilityZone: S.String,
          MaximumBitrate: S.Number,
          RoutingScope: S.String,
          Tier: S.String,
          CreatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          UpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          Messages: __S(97),
          Tags: __mapOfString,
          StreamDetails: __S(142),
          IpAddress: S.optional(S.String),
          RoutedInputArn: S.optional(S.String),
          MaintenanceType: S.String,
          MaintenanceConfiguration: __S(105),
          MaintenanceScheduleType: S.optional(S.String),
          MaintenanceSchedule: S.optional(__S(107)),
          FabricConfiguration: S.optional(__S(143)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Arn: "arn",
            Id: "id",
            State: "state",
            OutputType: "outputType",
            Configuration: "configuration",
            RoutedState: "routedState",
            RegionName: "regionName",
            AvailabilityZone: "availabilityZone",
            MaximumBitrate: "maximumBitrate",
            RoutingScope: "routingScope",
            Tier: "tier",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            Messages: "messages",
            Tags: "tags",
            StreamDetails: "streamDetails",
            IpAddress: "ipAddress",
            RoutedInputArn: "routedInputArn",
            MaintenanceType: "maintenanceType",
            MaintenanceConfiguration: "maintenanceConfiguration",
            MaintenanceScheduleType: "maintenanceScheduleType",
            MaintenanceSchedule: "maintenanceSchedule",
            FabricConfiguration: "fabricConfiguration",
          }),
        ),
      ).annotate({ identifier: "RouterOutput" });
    case 1:
      return S.Array(__S(144));
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Code: S.String, Message: S.String }).pipe(
          S.encodeKeys({ Arn: "arn", Code: "code", Message: "message" }),
        ),
      ).annotate({
        identifier: "BatchGetRouterOutputError",
      });
    case 3:
      return S.Array(__S(146));
    case 4:
      return S.suspend(() =>
        S.Struct({ RouterOutputs: __S(145), Errors: __S(147) }).pipe(
          S.encodeKeys({ RouterOutputs: "routerOutputs", Errors: "errors" }),
        ),
      ).annotate({
        identifier: "BatchGetRouterOutputResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ MaxBitrate: S.optional(S.Number) }).pipe(
          S.encodeKeys({ MaxBitrate: "maxBitrate" }),
        ),
      ).annotate({
        identifier: "AddEgressGatewayBridgeRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ MaxBitrate: S.optional(S.Number), MaxOutputs: S.optional(S.Number) }).pipe(
          S.encodeKeys({ MaxBitrate: "maxBitrate", MaxOutputs: "maxOutputs" }),
        ),
      ).annotate({
        identifier: "AddIngressGatewayBridgeRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ PrimarySource: S.optional(S.String) }).pipe(
          S.encodeKeys({ PrimarySource: "primarySource" }),
        ),
      ).annotate({ identifier: "SourcePriority" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FailoverMode: S.optional(S.String),
          RecoveryWindow: S.optional(S.Number),
          SourcePriority: S.optional(__S(151)),
          State: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            FailoverMode: "failoverMode",
            RecoveryWindow: "recoveryWindow",
            SourcePriority: "sourcePriority",
            State: "state",
          }),
        ),
      ).annotate({ identifier: "FailoverConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EgressGatewayBridge: S.optional(__S(149)),
          IngressGatewayBridge: S.optional(__S(150)),
          Name: S.optional(S.String),
          Outputs: S.optional(__listOfAddBridgeOutputRequest),
          PlacementArn: S.optional(S.String),
          SourceFailoverConfig: S.optional(__S(152)),
          Sources: S.optional(__listOfAddBridgeSourceRequest),
        })
          .pipe(
            S.encodeKeys({
              EgressGatewayBridge: "egressGatewayBridge",
              IngressGatewayBridge: "ingressGatewayBridge",
              Name: "name",
              Outputs: "outputs",
              PlacementArn: "placementArn",
              SourceFailoverConfig: "sourceFailoverConfig",
              Sources: "sources",
            }),
          )
          .pipe(
            T.all(T.Http({ method: "POST", uri: "/v1/bridges" }), svc, auth, proto, ver, rules),
          ),
      ).annotate({ identifier: "CreateBridgeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(S.String),
          Message: S.optional(S.String),
          ResourceName: S.optional(S.String),
        }).pipe(S.encodeKeys({ Code: "code", Message: "message", ResourceName: "resourceName" })),
      ).annotate({ identifier: "MessageDetail" });
    case 3:
      return S.Array(__S(154));
    case 4:
      return S.suspend(() =>
        S.Struct({ InstanceId: S.optional(S.String), MaxBitrate: S.optional(S.Number) }).pipe(
          S.encodeKeys({ InstanceId: "instanceId", MaxBitrate: "maxBitrate" }),
        ),
      ).annotate({ identifier: "EgressGatewayBridge" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.optional(S.String),
          MaxBitrate: S.optional(S.Number),
          MaxOutputs: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            InstanceId: "instanceId",
            MaxBitrate: "maxBitrate",
            MaxOutputs: "maxOutputs",
          }),
        ),
      ).annotate({ identifier: "IngressGatewayBridge" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.optional(S.String),
          BridgeMessages: S.optional(__listOfMessageDetail),
          BridgeState: S.optional(S.String),
          EgressGatewayBridge: S.optional(__S(156)),
          IngressGatewayBridge: S.optional(__S(157)),
          Name: S.optional(S.String),
          Outputs: S.optional(__listOfBridgeOutput),
          PlacementArn: S.optional(S.String),
          SourceFailoverConfig: S.optional(__S(152)),
          Sources: S.optional(__listOfBridgeSource),
        }).pipe(
          S.encodeKeys({
            BridgeArn: "bridgeArn",
            BridgeMessages: "bridgeMessages",
            BridgeState: "bridgeState",
            EgressGatewayBridge: "egressGatewayBridge",
            IngressGatewayBridge: "ingressGatewayBridge",
            Name: "name",
            Outputs: "outputs",
            PlacementArn: "placementArn",
            SourceFailoverConfig: "sourceFailoverConfig",
            Sources: "sources",
          }),
        ),
      ).annotate({ identifier: "Bridge" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Bridge: S.optional(__S(158)) }).pipe(S.encodeKeys({ Bridge: "bridge" })),
      ).annotate({ identifier: "CreateBridgeResponse" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DataTransferSubscriberFeePercent: S.optional(S.Number),
          Description: S.optional(S.String),
          Encryption: S.optional(__S(32)),
          EntitlementStatus: S.optional(S.String),
          Name: S.optional(S.String),
          Subscribers: S.optional(__listOfString),
          EntitlementTags: S.optional(__mapOfString),
        }).pipe(
          S.encodeKeys({
            DataTransferSubscriberFeePercent: "dataTransferSubscriberFeePercent",
            Description: "description",
            Encryption: "encryption",
            EntitlementStatus: "entitlementStatus",
            Name: "name",
            Subscribers: "subscribers",
            EntitlementTags: "entitlementTags",
          }),
        ),
      ).annotate({ identifier: "GrantEntitlementRequest" });
    case 1:
      return S.Array(__S(160));
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaintenanceDay: S.optional(S.String),
          MaintenanceStartHour: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            MaintenanceDay: "maintenanceDay",
            MaintenanceStartHour: "maintenanceStartHour",
          }),
        ),
      ).annotate({ identifier: "AddMaintenance" });
    case 3:
      return S.suspend(() =>
        S.Struct({ State: S.optional(S.String), ThresholdSeconds: S.optional(S.Number) }).pipe(
          S.encodeKeys({ State: "state", ThresholdSeconds: "thresholdSeconds" }),
        ),
      ).annotate({ identifier: "SilentAudio" });
    case 4:
      return S.suspend(() =>
        S.Struct({ SilentAudio: S.optional(__S(163)) }).pipe(
          S.encodeKeys({ SilentAudio: "silentAudio" }),
        ),
      ).annotate({ identifier: "AudioMonitoringSetting" });
    case 5:
      return S.Array(__S(164));
    case 6:
      return S.suspend(() =>
        S.Struct({
          BlackFrames: S.optional(__S(163)),
          FrozenFrames: S.optional(__S(163)),
        }).pipe(S.encodeKeys({ BlackFrames: "blackFrames", FrozenFrames: "frozenFrames" })),
      ).annotate({ identifier: "VideoMonitoringSetting" });
    case 7:
      return S.Array(__S(166));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ThumbnailState: S.optional(S.String),
          AudioMonitoringSettings: S.optional(__listOfAudioMonitoringSetting),
          ContentQualityAnalysisState: S.optional(S.String),
          VideoMonitoringSettings: S.optional(__listOfVideoMonitoringSetting),
        }).pipe(
          S.encodeKeys({
            ThumbnailState: "thumbnailState",
            AudioMonitoringSettings: "audioMonitoringSettings",
            ContentQualityAnalysisState: "contentQualityAnalysisState",
            VideoMonitoringSettings: "videoMonitoringSettings",
          }),
        ),
      ).annotate({ identifier: "MonitoringConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DiscoveryServerAddress: S.optional(S.String),
          DiscoveryServerPort: S.optional(S.Number),
          VpcInterfaceAdapter: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DiscoveryServerAddress: "discoveryServerAddress",
            DiscoveryServerPort: "discoveryServerPort",
            VpcInterfaceAdapter: "vpcInterfaceAdapter",
          }),
        ),
      ).annotate({ identifier: "NdiDiscoveryServerConfig" });
    case 2:
      return S.Array(__S(169));
    case 3:
      return S.suspend(() =>
        S.Struct({
          NdiState: S.optional(S.String),
          MachineName: S.optional(S.String),
          NdiDiscoveryServers: S.optional(__listOfNdiDiscoveryServerConfig),
        }).pipe(
          S.encodeKeys({
            NdiState: "ndiState",
            MachineName: "machineName",
            NdiDiscoveryServers: "ndiDiscoveryServers",
          }),
        ),
      ).annotate({ identifier: "NdiConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EncodingProfile: S.optional(S.String),
          VideoMaxBitrate: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({ EncodingProfile: "encodingProfile", VideoMaxBitrate: "videoMaxBitrate" }),
        ),
      ).annotate({ identifier: "EncodingConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZone: S.optional(S.String),
          Entitlements: S.optional(__listOfGrantEntitlementRequest),
          MediaStreams: S.optional(__listOfAddMediaStreamRequest),
          Name: S.optional(S.String),
          Outputs: S.optional(__listOfAddOutputRequest),
          Source: S.optional(__S(62)),
          SourceFailoverConfig: S.optional(__S(152)),
          Sources: S.optional(__listOfSetSourceRequest),
          VpcInterfaces: S.optional(__listOfVpcInterfaceRequest),
          Maintenance: S.optional(__S(162)),
          SourceMonitoringConfig: S.optional(__S(168)),
          FlowSize: S.optional(S.String),
          NdiConfig: S.optional(__S(171)),
          EncodingConfig: S.optional(__S(172)),
          FlowTags: S.optional(__mapOfString),
        })
          .pipe(
            S.encodeKeys({
              AvailabilityZone: "availabilityZone",
              Entitlements: "entitlements",
              MediaStreams: "mediaStreams",
              Name: "name",
              Outputs: "outputs",
              Source: "source",
              SourceFailoverConfig: "sourceFailoverConfig",
              Sources: "sources",
              VpcInterfaces: "vpcInterfaces",
              Maintenance: "maintenance",
              SourceMonitoringConfig: "sourceMonitoringConfig",
              FlowSize: "flowSize",
              NdiConfig: "ndiConfig",
              EncodingConfig: "encodingConfig",
              FlowTags: "flowTags",
            }),
          )
          .pipe(T.all(T.Http({ method: "POST", uri: "/v1/flows" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateFlowRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataTransferSubscriberFeePercent: S.optional(S.Number),
          Description: S.optional(S.String),
          Encryption: S.optional(__S(32)),
          EntitlementArn: S.optional(S.String),
          EntitlementStatus: S.optional(S.String),
          Name: S.optional(S.String),
          Subscribers: S.optional(__listOfString),
        }).pipe(
          S.encodeKeys({
            DataTransferSubscriberFeePercent: "dataTransferSubscriberFeePercent",
            Description: "description",
            Encryption: "encryption",
            EntitlementArn: "entitlementArn",
            EntitlementStatus: "entitlementStatus",
            Name: "name",
            Subscribers: "subscribers",
          }),
        ),
      ).annotate({ identifier: "Entitlement" });
    case 7:
      return S.Array(__S(174));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaintenanceDay: S.optional(S.String),
          MaintenanceDeadline: S.optional(S.String),
          MaintenanceScheduledDate: S.optional(S.String),
          MaintenanceStartHour: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            MaintenanceDay: "maintenanceDay",
            MaintenanceDeadline: "maintenanceDeadline",
            MaintenanceScheduledDate: "maintenanceScheduledDate",
            MaintenanceStartHour: "maintenanceStartHour",
          }),
        ),
      ).annotate({ identifier: "Maintenance" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZone: S.optional(S.String),
          Description: S.optional(S.String),
          EgressIp: S.optional(S.String),
          Entitlements: S.optional(__listOfEntitlement),
          FlowArn: S.optional(S.String),
          MediaStreams: S.optional(__listOfMediaStream),
          Name: S.optional(S.String),
          Outputs: S.optional(__listOfOutput),
          Source: S.optional(__S(70)),
          SourceFailoverConfig: S.optional(__S(152)),
          Sources: S.optional(__listOfSource),
          Status: S.optional(S.String),
          VpcInterfaces: S.optional(__listOfVpcInterface),
          Maintenance: S.optional(__S(176)),
          SourceMonitoringConfig: S.optional(__S(168)),
          FlowSize: S.optional(S.String),
          NdiConfig: S.optional(__S(171)),
          EncodingConfig: S.optional(__S(172)),
        }).pipe(
          S.encodeKeys({
            AvailabilityZone: "availabilityZone",
            Description: "description",
            EgressIp: "egressIp",
            Entitlements: "entitlements",
            FlowArn: "flowArn",
            MediaStreams: "mediaStreams",
            Name: "name",
            Outputs: "outputs",
            Source: "source",
            SourceFailoverConfig: "sourceFailoverConfig",
            Sources: "sources",
            Status: "status",
            VpcInterfaces: "vpcInterfaces",
            Maintenance: "maintenance",
            SourceMonitoringConfig: "sourceMonitoringConfig",
            FlowSize: "flowSize",
            NdiConfig: "ndiConfig",
            EncodingConfig: "encodingConfig",
          }),
        ),
      ).annotate({ identifier: "Flow" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Flow: S.optional(__S(177)) }).pipe(S.encodeKeys({ Flow: "flow" })),
      ).annotate({ identifier: "CreateFlowResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ CidrBlock: S.optional(S.String), Name: S.optional(S.String) }).pipe(
          S.encodeKeys({ CidrBlock: "cidrBlock", Name: "name" }),
        ),
      ).annotate({ identifier: "GatewayNetwork" });
    case 4:
      return S.Array(__S(179));
    case 5:
      return S.suspend(() =>
        S.Struct({
          EgressCidrBlocks: S.optional(__listOfString),
          Name: S.optional(S.String),
          Networks: S.optional(__listOfGatewayNetwork),
        })
          .pipe(
            S.encodeKeys({
              EgressCidrBlocks: "egressCidrBlocks",
              Name: "name",
              Networks: "networks",
            }),
          )
          .pipe(
            T.all(T.Http({ method: "POST", uri: "/v1/gateways" }), svc, auth, proto, ver, rules),
          ),
      ).annotate({ identifier: "CreateGatewayRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EgressCidrBlocks: S.optional(__listOfString),
          GatewayArn: S.optional(S.String),
          GatewayMessages: S.optional(__listOfMessageDetail),
          GatewayState: S.optional(S.String),
          Name: S.optional(S.String),
          Networks: S.optional(__listOfGatewayNetwork),
        }).pipe(
          S.encodeKeys({
            EgressCidrBlocks: "egressCidrBlocks",
            GatewayArn: "gatewayArn",
            GatewayMessages: "gatewayMessages",
            GatewayState: "gatewayState",
            Name: "name",
            Networks: "networks",
          }),
        ),
      ).annotate({ identifier: "Gateway" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Gateway: S.optional(__S(182)) }).pipe(S.encodeKeys({ Gateway: "gateway" })),
      ).annotate({ identifier: "CreateGatewayResponse" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Configuration: __S(95),
          MaximumBitrate: S.Number,
          RoutingScope: S.String,
          Tier: S.String,
          RegionName: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          TransitEncryption: S.optional(__S(98)),
          MaintenanceConfiguration: S.optional(__S(105)),
          Tags: S.optional(__mapOfString),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ContentQualityAnalysisConfiguration: S.optional(__S(111)),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Configuration: "configuration",
              MaximumBitrate: "maximumBitrate",
              RoutingScope: "routingScope",
              Tier: "tier",
              RegionName: "regionName",
              AvailabilityZone: "availabilityZone",
              TransitEncryption: "transitEncryption",
              MaintenanceConfiguration: "maintenanceConfiguration",
              Tags: "tags",
              ClientToken: "clientToken",
              ContentQualityAnalysisConfiguration: "contentQualityAnalysisConfiguration",
            }),
          )
          .pipe(
            T.all(T.Http({ method: "POST", uri: "/v1/routerInput" }), svc, auth, proto, ver, rules),
          ),
      ).annotate({ identifier: "CreateRouterInputRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RouterInput: __S(112) }).pipe(S.encodeKeys({ RouterInput: "routerInput" })),
      ).annotate({
        identifier: "CreateRouterInputResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Configuration: __S(122),
          RegionName: S.optional(S.String),
          Tags: S.optional(__mapOfString),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Configuration: "configuration",
              RegionName: "regionName",
              Tags: "tags",
              ClientToken: "clientToken",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/routerNetworkInterface" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateRouterNetworkInterfaceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RouterNetworkInterface: __S(123) }).pipe(
          S.encodeKeys({ RouterNetworkInterface: "routerNetworkInterface" }),
        ),
      ).annotate({
        identifier: "CreateRouterNetworkInterfaceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Configuration: __S(140),
          MaximumBitrate: S.Number,
          RoutingScope: S.String,
          Tier: S.String,
          RegionName: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          MaintenanceConfiguration: S.optional(__S(105)),
          Tags: S.optional(__mapOfString),
          FabricConfiguration: S.optional(__S(143)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Configuration: "configuration",
              MaximumBitrate: "maximumBitrate",
              RoutingScope: "routingScope",
              Tier: "tier",
              RegionName: "regionName",
              AvailabilityZone: "availabilityZone",
              MaintenanceConfiguration: "maintenanceConfiguration",
              Tags: "tags",
              FabricConfiguration: "fabricConfiguration",
              ClientToken: "clientToken",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/routerOutput" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "CreateRouterOutputRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ RouterOutput: __S(144) }).pipe(S.encodeKeys({ RouterOutput: "routerOutput" })),
      ).annotate({
        identifier: "CreateRouterOutputResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/bridges/{BridgeArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBridgeRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ BridgeArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ BridgeArn: "bridgeArn" }),
        ),
      ).annotate({ identifier: "DeleteBridgeResponse" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.String.pipe(T.HttpLabel("FlowArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/flows/{FlowArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFlowRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), Status: S.optional(S.String) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", Status: "status" }),
        ),
      ).annotate({ identifier: "DeleteFlowResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String.pipe(T.HttpLabel("GatewayArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/gateways/{GatewayArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteGatewayRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ GatewayArn: "gatewayArn" }),
        ),
      ).annotate({ identifier: "DeleteGatewayResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/routerInput/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRouterInputRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Name: S.String, State: S.String }).pipe(
          S.encodeKeys({ Arn: "arn", Name: "name", State: "state" }),
        ),
      ).annotate({
        identifier: "DeleteRouterInputResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/routerNetworkInterface/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRouterNetworkInterfaceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/routerOutput/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRouterOutputRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
          GatewayInstanceArn: S.String.pipe(T.HttpLabel("GatewayInstanceArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/gateway-instances/{GatewayInstanceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterGatewayInstanceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayInstanceArn: S.optional(S.String),
          InstanceState: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            GatewayInstanceArn: "gatewayInstanceArn",
            InstanceState: "instanceState",
          }),
        ),
      ).annotate({
        identifier: "DeregisterGatewayInstanceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/bridges/{BridgeArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeBridgeRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.String.pipe(T.HttpLabel("FlowArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/flows/{FlowArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeFlowRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Errors: S.optional(__listOfString) }).pipe(S.encodeKeys({ Errors: "errors" })),
      ).annotate({ identifier: "Messages" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Flow: S.optional(__S(177)), Messages: S.optional(__S(204)) }).pipe(
          S.encodeKeys({ Flow: "flow", Messages: "messages" }),
        ),
      ).annotate({ identifier: "DescribeFlowResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.String.pipe(T.HttpLabel("FlowArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/flows/{FlowArn}/source-metadata" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeFlowSourceMetadataRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ FrameHeight: S.optional(S.Number), FrameWidth: S.optional(S.Number) }).pipe(
          S.encodeKeys({ FrameHeight: "frameHeight", FrameWidth: "frameWidth" }),
        ),
      ).annotate({ identifier: "FrameResolution" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Channels: S.optional(S.Number),
          Codec: S.optional(S.String),
          FrameRate: S.optional(S.String),
          FrameResolution: S.optional(__S(207)),
          Pid: S.optional(S.Number),
          SampleRate: S.optional(S.Number),
          SampleSize: S.optional(S.Number),
          StreamType: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            Channels: "channels",
            Codec: "codec",
            FrameRate: "frameRate",
            FrameResolution: "frameResolution",
            Pid: "pid",
            SampleRate: "sampleRate",
            SampleSize: "sampleSize",
            StreamType: "streamType",
          }),
        ),
      ).annotate({ identifier: "TransportStream" });
    case 1:
      return S.Array(__S(208));
    case 2:
      return S.suspend(() =>
        S.Struct({
          PcrPid: S.optional(S.Number),
          ProgramName: S.optional(S.String),
          ProgramNumber: S.optional(S.Number),
          ProgramPid: S.optional(S.Number),
          Streams: S.optional(__listOfTransportStream),
        }).pipe(
          S.encodeKeys({
            PcrPid: "pcrPid",
            ProgramName: "programName",
            ProgramNumber: "programNumber",
            ProgramPid: "programPid",
            Streams: "streams",
          }),
        ),
      ).annotate({ identifier: "TransportStreamProgram" });
    case 3:
      return S.Array(__S(210));
    case 4:
      return S.suspend(() =>
        S.Struct({ Programs: S.optional(__listOfTransportStreamProgram) }).pipe(
          S.encodeKeys({ Programs: "programs" }),
        ),
      ).annotate({ identifier: "TransportMediaInfo" });
    case 5:
      return S.Array(__S(51));
    case 6:
      return S.suspend(() =>
        S.Struct({
          StreamType: S.optional(S.String),
          Codec: S.optional(S.String),
          StreamId: S.optional(S.Number),
          ScanMode: S.optional(S.String),
          FrameResolution: S.optional(__S(207)),
          FrameRate: S.optional(S.String),
          Channels: S.optional(S.Number),
          SampleRate: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            StreamType: "streamType",
            Codec: "codec",
            StreamId: "streamId",
            ScanMode: "scanMode",
            FrameResolution: "frameResolution",
            FrameRate: "frameRate",
            Channels: "channels",
            SampleRate: "sampleRate",
          }),
        ),
      ).annotate({ identifier: "NdiMediaStreamInfo" });
    case 7:
      return S.Array(__S(214));
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Streams: S.optional(__listOfNdiMediaStreamInfo) }).pipe(
          S.encodeKeys({ Streams: "streams" }),
        ),
      ).annotate({ identifier: "NdiMediaInfo" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ActiveSource: S.optional(__S(51)),
          DiscoveredSources: S.optional(__listOfNdiSourceInfo),
          MediaInfo: S.optional(__S(216)),
          Messages: S.optional(__listOfMessageDetail),
        }).pipe(
          S.encodeKeys({
            ActiveSource: "activeSource",
            DiscoveredSources: "discoveredSources",
            MediaInfo: "mediaInfo",
            Messages: "messages",
          }),
        ),
      ).annotate({ identifier: "NdiSourceMetadataInfo" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          Messages: S.optional(__listOfMessageDetail),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TransportMediaInfo: S.optional(__S(212)),
          NdiInfo: S.optional(__S(217)),
        }).pipe(
          S.encodeKeys({
            FlowArn: "flowArn",
            Messages: "messages",
            Timestamp: "timestamp",
            TransportMediaInfo: "transportMediaInfo",
            NdiInfo: "ndiInfo",
          }),
        ),
      ).annotate({
        identifier: "DescribeFlowSourceMetadataResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.String.pipe(T.HttpLabel("FlowArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/flows/{FlowArn}/source-thumbnail" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeFlowSourceThumbnailRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          Thumbnail: S.optional(S.String),
          ThumbnailMessages: S.optional(__listOfMessageDetail),
          Timecode: S.optional(S.String),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(
          S.encodeKeys({
            FlowArn: "flowArn",
            Thumbnail: "thumbnail",
            ThumbnailMessages: "thumbnailMessages",
            Timecode: "timecode",
            Timestamp: "timestamp",
          }),
        ),
      ).annotate({ identifier: "ThumbnailDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ThumbnailDetails: S.optional(__S(220)) }).pipe(
          S.encodeKeys({ ThumbnailDetails: "thumbnailDetails" }),
        ),
      ).annotate({
        identifier: "DescribeFlowSourceThumbnailResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String.pipe(T.HttpLabel("GatewayArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/gateways/{GatewayArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeGatewayRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ GatewayInstanceArn: S.String.pipe(T.HttpLabel("GatewayInstanceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/gateway-instances/{GatewayInstanceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeGatewayInstanceRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BridgePlacement: S.optional(S.String),
          ConnectionStatus: S.optional(S.String),
          GatewayArn: S.optional(S.String),
          GatewayInstanceArn: S.optional(S.String),
          InstanceId: S.optional(S.String),
          InstanceMessages: S.optional(__listOfMessageDetail),
          InstanceState: S.optional(S.String),
          RunningBridgeCount: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            BridgePlacement: "bridgePlacement",
            ConnectionStatus: "connectionStatus",
            GatewayArn: "gatewayArn",
            GatewayInstanceArn: "gatewayInstanceArn",
            InstanceId: "instanceId",
            InstanceMessages: "instanceMessages",
            InstanceState: "instanceState",
            RunningBridgeCount: "runningBridgeCount",
          }),
        ),
      ).annotate({ identifier: "GatewayInstance" });
    case 1:
      return S.suspend(() =>
        S.Struct({ GatewayInstance: S.optional(__S(224)) }).pipe(
          S.encodeKeys({ GatewayInstance: "gatewayInstance" }),
        ),
      ).annotate({
        identifier: "DescribeGatewayInstanceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ OfferingArn: S.String.pipe(T.HttpLabel("OfferingArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/offerings/{OfferingArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeOfferingRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReservedBitrate: S.optional(S.Number),
          ResourceType: S.optional(S.String),
        }).pipe(S.encodeKeys({ ReservedBitrate: "reservedBitrate", ResourceType: "resourceType" })),
      ).annotate({ identifier: "ResourceSpecification" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CurrencyCode: S.optional(S.String),
          Duration: S.optional(S.Number),
          DurationUnits: S.optional(S.String),
          OfferingArn: S.optional(S.String),
          OfferingDescription: S.optional(S.String),
          PricePerUnit: S.optional(S.String),
          PriceUnits: S.optional(S.String),
          ResourceSpecification: S.optional(__S(227)),
        }).pipe(
          S.encodeKeys({
            CurrencyCode: "currencyCode",
            Duration: "duration",
            DurationUnits: "durationUnits",
            OfferingArn: "offeringArn",
            OfferingDescription: "offeringDescription",
            PricePerUnit: "pricePerUnit",
            PriceUnits: "priceUnits",
            ResourceSpecification: "resourceSpecification",
          }),
        ),
      ).annotate({ identifier: "Offering" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Offering: S.optional(__S(228)) }).pipe(S.encodeKeys({ Offering: "offering" })),
      ).annotate({ identifier: "DescribeOfferingResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ReservationArn: S.String.pipe(T.HttpLabel("ReservationArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/reservations/{ReservationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeReservationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CurrencyCode: S.optional(S.String),
          Duration: S.optional(S.Number),
          DurationUnits: S.optional(S.String),
          End: S.optional(S.String),
          OfferingArn: S.optional(S.String),
          OfferingDescription: S.optional(S.String),
          PricePerUnit: S.optional(S.String),
          PriceUnits: S.optional(S.String),
          ReservationArn: S.optional(S.String),
          ReservationName: S.optional(S.String),
          ReservationState: S.optional(S.String),
          ResourceSpecification: S.optional(__S(227)),
          Start: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            CurrencyCode: "currencyCode",
            Duration: "duration",
            DurationUnits: "durationUnits",
            End: "end",
            OfferingArn: "offeringArn",
            OfferingDescription: "offeringDescription",
            PricePerUnit: "pricePerUnit",
            PriceUnits: "priceUnits",
            ReservationArn: "reservationArn",
            ReservationName: "reservationName",
            ReservationState: "reservationState",
            ResourceSpecification: "resourceSpecification",
            Start: "start",
          }),
        ),
      ).annotate({ identifier: "Reservation" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Reservation: S.optional(__S(231)) }).pipe(
          S.encodeKeys({ Reservation: "reservation" }),
        ),
      ).annotate({
        identifier: "DescribeReservationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/routerInput/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRouterInputRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ RouterInput: __S(112) }).pipe(S.encodeKeys({ RouterInput: "routerInput" })),
      ).annotate({ identifier: "GetRouterInputResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/routerInput/{Arn}/source-metadata" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRouterInputSourceMetadataRequest",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ TransportStreamMediaInfo: __S(212) })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceMetadataMessages: __S(97),
          Timestamp: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          RouterInputMetadata: S.optional(__S(236)),
        }).pipe(
          S.encodeKeys({
            SourceMetadataMessages: "sourceMetadataMessages",
            Timestamp: "timestamp",
            RouterInputMetadata: "routerInputMetadata",
          }),
        ),
      ).annotate({
        identifier: "RouterInputSourceMetadataDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          SourceMetadataDetails: __S(237),
        }).pipe(
          S.encodeKeys({
            Arn: "arn",
            Name: "name",
            SourceMetadataDetails: "sourceMetadataDetails",
          }),
        ),
      ).annotate({
        identifier: "GetRouterInputSourceMetadataResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/routerInput/{Arn}/thumbnail" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRouterInputThumbnailRequest",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ThumbnailMessages: __S(97),
          Thumbnail: S.optional(T.Blob),
          Timecode: S.optional(S.String),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(
          S.encodeKeys({
            ThumbnailMessages: "thumbnailMessages",
            Thumbnail: "thumbnail",
            Timecode: "timecode",
            Timestamp: "timestamp",
          }),
        ),
      ).annotate({
        identifier: "RouterInputThumbnailDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          ThumbnailDetails: __S(240),
        }).pipe(S.encodeKeys({ Arn: "arn", Name: "name", ThumbnailDetails: "thumbnailDetails" })),
      ).annotate({
        identifier: "GetRouterInputThumbnailResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/routerNetworkInterface/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRouterNetworkInterfaceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/routerOutput/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRouterOutputRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ RouterOutput: __S(144) }).pipe(S.encodeKeys({ RouterOutput: "routerOutput" })),
      ).annotate({ identifier: "GetRouterOutputResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Entitlements: S.optional(__listOfGrantEntitlementRequest),
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
        })
          .pipe(S.encodeKeys({ Entitlements: "entitlements" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/flows/{FlowArn}/entitlements" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "GrantFlowEntitlementsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Entitlements: S.optional(__listOfEntitlement),
          FlowArn: S.optional(S.String),
        }).pipe(S.encodeKeys({ Entitlements: "entitlements", FlowArn: "flowArn" })),
      ).annotate({
        identifier: "GrantFlowEntitlementsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FilterArn: S.optional(S.String).pipe(T.HttpQuery("filterArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/v1/bridges" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListBridgesRequest" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.optional(S.String),
          BridgeState: S.optional(S.String),
          BridgeType: S.optional(S.String),
          Name: S.optional(S.String),
          PlacementArn: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            BridgeArn: "bridgeArn",
            BridgeState: "bridgeState",
            BridgeType: "bridgeType",
            Name: "name",
            PlacementArn: "placementArn",
          }),
        ),
      ).annotate({ identifier: "ListedBridge" });
    case 1:
      return S.Array(__S(248));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Bridges: S.optional(__listOfListedBridge),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ Bridges: "bridges", NextToken: "nextToken" })),
      ).annotate({ identifier: "ListBridgesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/entitlements" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEntitlementsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DataTransferSubscriberFeePercent: S.optional(S.Number),
          EntitlementArn: S.optional(S.String),
          EntitlementName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            DataTransferSubscriberFeePercent: "dataTransferSubscriberFeePercent",
            EntitlementArn: "entitlementArn",
            EntitlementName: "entitlementName",
          }),
        ),
      ).annotate({ identifier: "ListedEntitlement" });
    case 5:
      return S.Array(__S(252));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Entitlements: S.optional(__listOfListedEntitlement),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ Entitlements: "entitlements", NextToken: "nextToken" })),
      ).annotate({ identifier: "ListEntitlementsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/v1/flows" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFlowsRequest" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZone: S.optional(S.String),
          Description: S.optional(S.String),
          FlowArn: S.optional(S.String),
          Name: S.optional(S.String),
          SourceType: S.optional(S.String),
          Status: S.optional(S.String),
          Maintenance: S.optional(__S(176)),
        }).pipe(
          S.encodeKeys({
            AvailabilityZone: "availabilityZone",
            Description: "description",
            FlowArn: "flowArn",
            Name: "name",
            SourceType: "sourceType",
            Status: "status",
            Maintenance: "maintenance",
          }),
        ),
      ).annotate({ identifier: "ListedFlow" });
    case 1:
      return S.Array(__S(256));
    case 2:
      return S.suspend(() =>
        S.Struct({ Flows: S.optional(__listOfListedFlow), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ Flows: "flows", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListFlowsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FilterArn: S.optional(S.String).pipe(T.HttpQuery("filterArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/gateway-instances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListGatewayInstancesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GatewayArn: S.optional(S.String),
          GatewayInstanceArn: S.optional(S.String),
          InstanceId: S.optional(S.String),
          InstanceState: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            GatewayArn: "gatewayArn",
            GatewayInstanceArn: "gatewayInstanceArn",
            InstanceId: "instanceId",
            InstanceState: "instanceState",
          }),
        ),
      ).annotate({ identifier: "ListedGatewayInstance" });
    case 5:
      return S.Array(__S(260));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Instances: S.optional(__listOfListedGatewayInstance),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ Instances: "instances", NextToken: "nextToken" })),
      ).annotate({
        identifier: "ListGatewayInstancesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/gateways" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListGatewaysRequest" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GatewayArn: S.optional(S.String),
          GatewayState: S.optional(S.String),
          Name: S.optional(S.String),
        }).pipe(
          S.encodeKeys({ GatewayArn: "gatewayArn", GatewayState: "gatewayState", Name: "name" }),
        ),
      ).annotate({ identifier: "ListedGateway" });
    case 1:
      return S.Array(__S(264));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Gateways: S.optional(__listOfListedGateway),
          NextToken: S.optional(S.String),
        }).pipe(S.encodeKeys({ Gateways: "gateways", NextToken: "nextToken" })),
      ).annotate({ identifier: "ListGatewaysResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/offerings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListOfferingsRequest" });
    case 4:
      return S.Array(__S(228));
    case 5:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Offerings: S.optional(__listOfOffering) }).pipe(
          S.encodeKeys({ NextToken: "nextToken", Offerings: "offerings" }),
        ),
      ).annotate({ identifier: "ListOfferingsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/reservations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListReservationsRequest" });
    case 7:
      return S.Array(__S(231));
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Reservations: S.optional(__listOfReservation),
        }).pipe(S.encodeKeys({ NextToken: "nextToken", Reservations: "reservations" })),
      ).annotate({ identifier: "ListReservationsResponse" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ NameContains: StringList }),
        /*@__PURE__*/ S.Struct({ RegionNames: StringList }),
        /*@__PURE__*/ S.Struct({ NetworkInterfaceArns: RouterNetworkInterfaceArnList }),
        /*@__PURE__*/ S.Struct({ RoutingScopes: __S(273) }),
        /*@__PURE__*/ S.Struct({ InputTypes: __S(273) }),
      ]);
    case 3:
      return S.Array(__S(274));
    case 4:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          Filters: S.optional(__S(275)),
        })
          .pipe(S.encodeKeys({ Filters: "filters" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/routerInputs" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "ListRouterInputsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Id: S.String,
          InputType: S.String,
          State: S.String,
          RoutedOutputs: S.Number,
          RegionName: S.String,
          AvailabilityZone: S.String,
          MaximumBitrate: S.Number,
          RoutingScope: S.String,
          CreatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          UpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          MessageCount: S.Number,
          NetworkInterfaceArn: S.optional(S.String),
          MaintenanceScheduleType: S.optional(S.String),
          MaintenanceSchedule: S.optional(__S(107)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Arn: "arn",
            Id: "id",
            InputType: "inputType",
            State: "state",
            RoutedOutputs: "routedOutputs",
            RegionName: "regionName",
            AvailabilityZone: "availabilityZone",
            MaximumBitrate: "maximumBitrate",
            RoutingScope: "routingScope",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            MessageCount: "messageCount",
            NetworkInterfaceArn: "networkInterfaceArn",
            MaintenanceScheduleType: "maintenanceScheduleType",
            MaintenanceSchedule: "maintenanceSchedule",
          }),
        ),
      ).annotate({ identifier: "ListedRouterInput" });
    case 6:
      return S.Array(__S(277));
    case 7:
      return S.suspend(() =>
        S.Struct({ RouterInputs: __S(278), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ RouterInputs: "routerInputs", NextToken: "nextToken" }),
        ),
      ).annotate({ identifier: "ListRouterInputsResponse" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ RegionNames: StringList }),
        /*@__PURE__*/ S.Struct({ NetworkInterfaceTypes: __S(273) }),
        /*@__PURE__*/ S.Struct({ NameContains: StringList }),
      ]);
    case 1:
      return S.Array(__S(280));
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          Filters: S.optional(__S(281)),
        })
          .pipe(S.encodeKeys({ Filters: "filters" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/routerNetworkInterfaces" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "ListRouterNetworkInterfacesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Id: S.String,
          NetworkInterfaceType: S.String,
          AssociatedOutputCount: S.Number,
          AssociatedInputCount: S.Number,
          State: S.String,
          RegionName: S.String,
          CreatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          UpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Arn: "arn",
            Id: "id",
            NetworkInterfaceType: "networkInterfaceType",
            AssociatedOutputCount: "associatedOutputCount",
            AssociatedInputCount: "associatedInputCount",
            State: "state",
            RegionName: "regionName",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
          }),
        ),
      ).annotate({
        identifier: "ListedRouterNetworkInterface",
      });
    case 4:
      return S.Array(__S(283));
    case 5:
      return S.suspend(() =>
        S.Struct({
          RouterNetworkInterfaces: __S(284),
          NextToken: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            RouterNetworkInterfaces: "routerNetworkInterfaces",
            NextToken: "nextToken",
          }),
        ),
      ).annotate({
        identifier: "ListRouterNetworkInterfacesResponse",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ RegionNames: StringList }),
        /*@__PURE__*/ S.Struct({ NetworkInterfaceArns: RouterNetworkInterfaceArnList }),
        /*@__PURE__*/ S.Struct({ RoutingScopes: __S(273) }),
        /*@__PURE__*/ S.Struct({ OutputTypes: __S(273) }),
        /*@__PURE__*/ S.Struct({ RoutedInputArns: RouterInputArnList }),
        /*@__PURE__*/ S.Struct({ NameContains: StringList }),
      ]);
    case 7:
      return S.Array(__S(286));
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          Filters: S.optional(__S(287)),
        })
          .pipe(S.encodeKeys({ Filters: "filters" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/routerOutputs" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "ListRouterOutputsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Arn: S.String,
          Id: S.String,
          OutputType: S.String,
          State: S.String,
          RoutedState: S.String,
          RegionName: S.String,
          AvailabilityZone: S.String,
          MaximumBitrate: S.Number,
          RoutingScope: S.String,
          CreatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          UpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          MessageCount: S.Number,
          RoutedInputArn: S.optional(S.String),
          NetworkInterfaceArn: S.optional(S.String),
          MaintenanceScheduleType: S.optional(S.String),
          MaintenanceSchedule: S.optional(__S(107)),
        }).pipe(
          S.encodeKeys({
            Name: "name",
            Arn: "arn",
            Id: "id",
            OutputType: "outputType",
            State: "state",
            RoutedState: "routedState",
            RegionName: "regionName",
            AvailabilityZone: "availabilityZone",
            MaximumBitrate: "maximumBitrate",
            RoutingScope: "routingScope",
            CreatedAt: "createdAt",
            UpdatedAt: "updatedAt",
            MessageCount: "messageCount",
            RoutedInputArn: "routedInputArn",
            NetworkInterfaceArn: "networkInterfaceArn",
            MaintenanceScheduleType: "maintenanceScheduleType",
            MaintenanceSchedule: "maintenanceSchedule",
          }),
        ),
      ).annotate({ identifier: "ListedRouterOutput" });
    case 2:
      return S.Array(__S(289));
    case 3:
      return S.suspend(() =>
        S.Struct({ RouterOutputs: __S(290), NextToken: S.optional(S.String) }).pipe(
          S.encodeKeys({ RouterOutputs: "routerOutputs", NextToken: "nextToken" }),
        ),
      ).annotate({
        identifier: "ListRouterOutputsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/global/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForGlobalResourceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(__mapOfString) }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({
        identifier: "ListTagsForGlobalResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          OfferingArn: S.String.pipe(T.HttpLabel("OfferingArn")),
          ReservationName: S.optional(S.String),
          Start: S.optional(S.String),
        })
          .pipe(S.encodeKeys({ ReservationName: "reservationName", Start: "start" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/offerings/{OfferingArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "PurchaseOfferingRequest" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Reservation: S.optional(__S(231)) }).pipe(
          S.encodeKeys({ Reservation: "reservation" }),
        ),
      ).annotate({ identifier: "PurchaseOfferingResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")),
          OutputName: S.String.pipe(T.HttpLabel("OutputName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/bridges/{BridgeArn}/outputs/{OutputName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveBridgeOutputRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ BridgeArn: S.optional(S.String), OutputName: S.optional(S.String) }).pipe(
          S.encodeKeys({ BridgeArn: "bridgeArn", OutputName: "outputName" }),
        ),
      ).annotate({
        identifier: "RemoveBridgeOutputResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")),
          SourceName: S.String.pipe(T.HttpLabel("SourceName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/bridges/{BridgeArn}/sources/{SourceName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveBridgeSourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ BridgeArn: S.optional(S.String), SourceName: S.optional(S.String) }).pipe(
          S.encodeKeys({ BridgeArn: "bridgeArn", SourceName: "sourceName" }),
        ),
      ).annotate({
        identifier: "RemoveBridgeSourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          MediaStreamName: S.String.pipe(T.HttpLabel("MediaStreamName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveFlowMediaStreamRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), MediaStreamName: S.optional(S.String) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", MediaStreamName: "mediaStreamName" }),
        ),
      ).annotate({
        identifier: "RemoveFlowMediaStreamResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          OutputArn: S.String.pipe(T.HttpLabel("OutputArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/flows/{FlowArn}/outputs/{OutputArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RemoveFlowOutputRequest" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), OutputArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", OutputArn: "outputArn" }),
        ),
      ).annotate({ identifier: "RemoveFlowOutputResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          SourceArn: S.String.pipe(T.HttpLabel("SourceArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/flows/{FlowArn}/source/{SourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RemoveFlowSourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), SourceArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", SourceArn: "sourceArn" }),
        ),
      ).annotate({ identifier: "RemoveFlowSourceResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          VpcInterfaceName: S.String.pipe(T.HttpLabel("VpcInterfaceName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/flows/{FlowArn}/vpcInterfaces/{VpcInterfaceName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveFlowVpcInterfaceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          NonDeletedNetworkInterfaceIds: S.optional(__listOfString),
          VpcInterfaceName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            FlowArn: "flowArn",
            NonDeletedNetworkInterfaceIds: "nonDeletedNetworkInterfaceIds",
            VpcInterfaceName: "vpcInterfaceName",
          }),
        ),
      ).annotate({
        identifier: "RemoveFlowVpcInterfaceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/routerInput/restart/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RestartRouterInputRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/routerOutput/restart/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RestartRouterOutputRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EntitlementArn: S.String.pipe(T.HttpLabel("EntitlementArn")),
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RevokeFlowEntitlementRequest",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EntitlementArn: S.optional(S.String), FlowArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ EntitlementArn: "entitlementArn", FlowArn: "flowArn" }),
        ),
      ).annotate({
        identifier: "RevokeFlowEntitlementResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.String.pipe(T.HttpLabel("FlowArn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/flows/start/{FlowArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartFlowRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/routerInput/start/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartRouterInputRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          State: S.String,
          MaintenanceScheduleType: S.String,
          MaintenanceSchedule: __S(107),
        }).pipe(
          S.encodeKeys({
            Arn: "arn",
            Name: "name",
            State: "state",
            MaintenanceScheduleType: "maintenanceScheduleType",
            MaintenanceSchedule: "maintenanceSchedule",
          }),
        ),
      ).annotate({ identifier: "StartRouterInputResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/routerOutput/start/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartRouterOutputRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          State: S.String,
          MaintenanceScheduleType: S.String,
          MaintenanceSchedule: __S(107),
        }).pipe(
          S.encodeKeys({
            Arn: "arn",
            Name: "name",
            State: "state",
            MaintenanceScheduleType: "maintenanceScheduleType",
            MaintenanceSchedule: "maintenanceSchedule",
          }),
        ),
      ).annotate({
        identifier: "StartRouterOutputResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.String.pipe(T.HttpLabel("FlowArn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/flows/stop/{FlowArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopFlowRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/routerInput/stop/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopRouterInputRequest" });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Name: S.String, State: S.String }).pipe(
          S.encodeKeys({ Arn: "arn", Name: "name", State: "state" }),
        ),
      ).annotate({ identifier: "StopRouterInputResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpLabel("Arn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/routerOutput/stop/{Arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopRouterOutputRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: S.optional(__mapOfString),
        })
          .pipe(S.encodeKeys({ Tags: "tags" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/tags/global/{ResourceArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "TagGlobalResourceRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagGlobalResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: S.optional(__mapOfString),
        })
          .pipe(S.encodeKeys({ Tags: "tags" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RouterOutputArn: S.String.pipe(T.HttpLabel("RouterOutputArn")),
          RouterInputArn: S.optional(S.String),
        })
          .pipe(S.encodeKeys({ RouterInputArn: "routerInputArn" }))
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/routerOutput/takeRouterInput/{RouterOutputArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "TakeRouterInputRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RoutedState: S.String,
          RouterOutputArn: S.String,
          RouterOutputName: S.String,
          RouterInputArn: S.optional(S.String),
          RouterInputName: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            RoutedState: "routedState",
            RouterOutputArn: "routerOutputArn",
            RouterOutputName: "routerOutputName",
            RouterInputArn: "routerInputArn",
            RouterInputName: "routerInputName",
          }),
        ),
      ).annotate({ identifier: "TakeRouterInputResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: S.optional(__listOfString).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/global/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UntagGlobalResourceRequest",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: S.optional(__listOfString).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")),
          EgressGatewayBridge: S.optional(__S(149)),
          IngressGatewayBridge: S.optional(__S(150)),
          SourceFailoverConfig: S.optional(__S(152)),
        })
          .pipe(
            S.encodeKeys({
              EgressGatewayBridge: "egressGatewayBridge",
              IngressGatewayBridge: "ingressGatewayBridge",
              SourceFailoverConfig: "sourceFailoverConfig",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/bridges/{BridgeArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateBridgeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          IpAddress: S.optional(S.String),
          NetworkName: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
          Ttl: S.optional(S.Number),
        }).pipe(
          S.encodeKeys({
            IpAddress: "ipAddress",
            NetworkName: "networkName",
            Port: "port",
            Protocol: "protocol",
            Ttl: "ttl",
          }),
        ),
      ).annotate({
        identifier: "UpdateBridgeNetworkOutputRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")),
          NetworkOutput: S.optional(__S(330)),
          OutputName: S.String.pipe(T.HttpLabel("OutputName")),
        })
          .pipe(S.encodeKeys({ NetworkOutput: "networkOutput" }))
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/bridges/{BridgeArn}/outputs/{OutputName}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateBridgeOutputRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ BridgeArn: S.optional(S.String), Output: S.optional(__S(6)) }).pipe(
          S.encodeKeys({ BridgeArn: "bridgeArn", Output: "output" }),
        ),
      ).annotate({
        identifier: "UpdateBridgeOutputResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.optional(S.String),
          FlowVpcInterfaceAttachment: S.optional(__S(9)),
        }).pipe(
          S.encodeKeys({
            FlowArn: "flowArn",
            FlowVpcInterfaceAttachment: "flowVpcInterfaceAttachment",
          }),
        ),
      ).annotate({
        identifier: "UpdateBridgeFlowSourceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MulticastIp: S.optional(S.String),
          MulticastSourceSettings: S.optional(__S(11)),
          NetworkName: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            MulticastIp: "multicastIp",
            MulticastSourceSettings: "multicastSourceSettings",
            NetworkName: "networkName",
            Port: "port",
            Protocol: "protocol",
          }),
        ),
      ).annotate({
        identifier: "UpdateBridgeNetworkSourceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")),
          FlowSource: S.optional(__S(333)),
          NetworkSource: S.optional(__S(334)),
          SourceName: S.String.pipe(T.HttpLabel("SourceName")),
        })
          .pipe(S.encodeKeys({ FlowSource: "flowSource", NetworkSource: "networkSource" }))
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/bridges/{BridgeArn}/sources/{SourceName}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateBridgeSourceRequest",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ BridgeArn: S.optional(S.String), Source: S.optional(__S(18)) }).pipe(
          S.encodeKeys({ BridgeArn: "bridgeArn", Source: "source" }),
        ),
      ).annotate({
        identifier: "UpdateBridgeSourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BridgeArn: S.String.pipe(T.HttpLabel("BridgeArn")),
          DesiredState: S.optional(S.String),
        })
          .pipe(S.encodeKeys({ DesiredState: "desiredState" }))
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/bridges/{BridgeArn}/state" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateBridgeStateRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ BridgeArn: S.optional(S.String), DesiredState: S.optional(S.String) }).pipe(
          S.encodeKeys({ BridgeArn: "bridgeArn", DesiredState: "desiredState" }),
        ),
      ).annotate({
        identifier: "UpdateBridgeStateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaintenanceDay: S.optional(S.String),
          MaintenanceScheduledDate: S.optional(S.String),
          MaintenanceStartHour: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            MaintenanceDay: "maintenanceDay",
            MaintenanceScheduledDate: "maintenanceScheduledDate",
            MaintenanceStartHour: "maintenanceStartHour",
          }),
        ),
      ).annotate({ identifier: "UpdateMaintenance" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          SourceFailoverConfig: S.optional(__S(152)),
          Maintenance: S.optional(__S(339)),
          SourceMonitoringConfig: S.optional(__S(168)),
          NdiConfig: S.optional(__S(171)),
          FlowSize: S.optional(S.String),
          EncodingConfig: S.optional(__S(172)),
        })
          .pipe(
            S.encodeKeys({
              SourceFailoverConfig: "sourceFailoverConfig",
              Maintenance: "maintenance",
              SourceMonitoringConfig: "sourceMonitoringConfig",
              NdiConfig: "ndiConfig",
              FlowSize: "flowSize",
              EncodingConfig: "encodingConfig",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/flows/{FlowArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateFlowRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          Encryption: S.optional(__S(32)),
          EntitlementArn: S.String.pipe(T.HttpLabel("EntitlementArn")),
          EntitlementStatus: S.optional(S.String),
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          Subscribers: S.optional(__listOfString),
        })
          .pipe(
            S.encodeKeys({
              Description: "description",
              Encryption: "encryption",
              EntitlementStatus: "entitlementStatus",
              Subscribers: "subscribers",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateFlowEntitlementRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Entitlement: S.optional(__S(174)), FlowArn: S.optional(S.String) }).pipe(
          S.encodeKeys({ Entitlement: "entitlement", FlowArn: "flowArn" }),
        ),
      ).annotate({
        identifier: "UpdateFlowEntitlementResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(__S(22)),
          ClockRate: S.optional(S.Number),
          Description: S.optional(S.String),
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          MediaStreamName: S.String.pipe(T.HttpLabel("MediaStreamName")),
          MediaStreamType: S.optional(S.String),
          VideoFormat: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              Attributes: "attributes",
              ClockRate: "clockRate",
              Description: "description",
              MediaStreamType: "mediaStreamType",
              VideoFormat: "videoFormat",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateFlowMediaStreamRequest",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), MediaStream: S.optional(__S(28)) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", MediaStream: "mediaStream" }),
        ),
      ).annotate({
        identifier: "UpdateFlowMediaStreamResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CidrAllowList: S.optional(__listOfString),
          Description: S.optional(S.String),
          Destination: S.optional(S.String),
          Encryption: S.optional(__S(32)),
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          MaxLatency: S.optional(S.Number),
          MediaStreamOutputConfigurations: S.optional(
            __listOfMediaStreamOutputConfigurationRequest,
          ),
          MinLatency: S.optional(S.Number),
          OutputArn: S.String.pipe(T.HttpLabel("OutputArn")),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
          RemoteId: S.optional(S.String),
          SenderControlPort: S.optional(S.Number),
          SenderIpAddress: S.optional(S.String),
          SmoothingLatency: S.optional(S.Number),
          StreamId: S.optional(S.String),
          VpcInterfaceAttachment: S.optional(__S(9)),
          OutputStatus: S.optional(S.String),
          NdiProgramName: S.optional(S.String),
          NdiSpeedHqQuality: S.optional(S.Number),
          RouterIntegrationState: S.optional(S.String),
          RouterIntegrationTransitEncryption: S.optional(__S(42)),
          NdiOutputTimecodeSource: S.optional(S.String),
        })
          .pipe(
            S.encodeKeys({
              CidrAllowList: "cidrAllowList",
              Description: "description",
              Destination: "destination",
              Encryption: "encryption",
              MaxLatency: "maxLatency",
              MediaStreamOutputConfigurations: "mediaStreamOutputConfigurations",
              MinLatency: "minLatency",
              Port: "port",
              Protocol: "protocol",
              RemoteId: "remoteId",
              SenderControlPort: "senderControlPort",
              SenderIpAddress: "senderIpAddress",
              SmoothingLatency: "smoothingLatency",
              StreamId: "streamId",
              VpcInterfaceAttachment: "vpcInterfaceAttachment",
              OutputStatus: "outputStatus",
              NdiProgramName: "ndiProgramName",
              NdiSpeedHqQuality: "ndiSpeedHqQuality",
              RouterIntegrationState: "routerIntegrationState",
              RouterIntegrationTransitEncryption: "routerIntegrationTransitEncryption",
              NdiOutputTimecodeSource: "ndiOutputTimecodeSource",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/flows/{FlowArn}/outputs/{OutputArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateFlowOutputRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), Output: S.optional(__S(54)) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", Output: "output" }),
        ),
      ).annotate({ identifier: "UpdateFlowOutputResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Decryption: S.optional(__S(32)),
          Description: S.optional(S.String),
          EntitlementArn: S.optional(S.String),
          FlowArn: S.String.pipe(T.HttpLabel("FlowArn")),
          IngestPort: S.optional(S.Number),
          MaxBitrate: S.optional(S.Number),
          MaxLatency: S.optional(S.Number),
          MaxSyncBuffer: S.optional(S.Number),
          MediaStreamSourceConfigurations: S.optional(
            __listOfMediaStreamSourceConfigurationRequest,
          ),
          MinLatency: S.optional(S.Number),
          Protocol: S.optional(S.String),
          SenderControlPort: S.optional(S.Number),
          SenderIpAddress: S.optional(S.String),
          SourceArn: S.String.pipe(T.HttpLabel("SourceArn")),
          SourceListenerAddress: S.optional(S.String),
          SourceListenerPort: S.optional(S.Number),
          StreamId: S.optional(S.String),
          VpcInterfaceName: S.optional(S.String),
          WhitelistCidr: S.optional(S.String),
          GatewayBridgeSource: S.optional(__S(61)),
          NdiSourceSettings: S.optional(__S(51)),
          RouterIntegrationState: S.optional(S.String),
          RouterIntegrationTransitDecryption: S.optional(__S(42)),
        })
          .pipe(
            S.encodeKeys({
              Decryption: "decryption",
              Description: "description",
              EntitlementArn: "entitlementArn",
              IngestPort: "ingestPort",
              MaxBitrate: "maxBitrate",
              MaxLatency: "maxLatency",
              MaxSyncBuffer: "maxSyncBuffer",
              MediaStreamSourceConfigurations: "mediaStreamSourceConfigurations",
              MinLatency: "minLatency",
              Protocol: "protocol",
              SenderControlPort: "senderControlPort",
              SenderIpAddress: "senderIpAddress",
              SourceListenerAddress: "sourceListenerAddress",
              SourceListenerPort: "sourceListenerPort",
              StreamId: "streamId",
              VpcInterfaceName: "vpcInterfaceName",
              WhitelistCidr: "whitelistCidr",
              GatewayBridgeSource: "gatewayBridgeSource",
              NdiSourceSettings: "ndiSourceSettings",
              RouterIntegrationState: "routerIntegrationState",
              RouterIntegrationTransitDecryption: "routerIntegrationTransitDecryption",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/flows/{FlowArn}/source/{SourceArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateFlowSourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ FlowArn: S.optional(S.String), Source: S.optional(__S(70)) }).pipe(
          S.encodeKeys({ FlowArn: "flowArn", Source: "source" }),
        ),
      ).annotate({ identifier: "UpdateFlowSourceResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BridgePlacement: S.optional(S.String),
          GatewayInstanceArn: S.String.pipe(T.HttpLabel("GatewayInstanceArn")),
        })
          .pipe(S.encodeKeys({ BridgePlacement: "bridgePlacement" }))
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/gateway-instances/{GatewayInstanceArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateGatewayInstanceRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          BridgePlacement: S.optional(S.String),
          GatewayInstanceArn: S.optional(S.String),
        }).pipe(
          S.encodeKeys({
            BridgePlacement: "bridgePlacement",
            GatewayInstanceArn: "gatewayInstanceArn",
          }),
        ),
      ).annotate({
        identifier: "UpdateGatewayInstanceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String.pipe(T.HttpLabel("Arn")),
          Name: S.optional(S.String),
          Configuration: S.optional(__S(95)),
          MaximumBitrate: S.optional(S.Number),
          RoutingScope: S.optional(S.String),
          Tier: S.optional(S.String),
          TransitEncryption: S.optional(__S(98)),
          MaintenanceConfiguration: S.optional(__S(105)),
          ContentQualityAnalysisConfiguration: S.optional(__S(111)),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Configuration: "configuration",
              MaximumBitrate: "maximumBitrate",
              RoutingScope: "routingScope",
              Tier: "tier",
              TransitEncryption: "transitEncryption",
              MaintenanceConfiguration: "maintenanceConfiguration",
              ContentQualityAnalysisConfiguration: "contentQualityAnalysisConfiguration",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/routerInput/{Arn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "UpdateRouterInputRequest" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String.pipe(T.HttpLabel("Arn")),
          Name: S.optional(S.String),
          Configuration: S.optional(__S(122)),
        })
          .pipe(S.encodeKeys({ Name: "name", Configuration: "configuration" }))
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/routerNetworkInterface/{Arn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateRouterNetworkInterfaceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String.pipe(T.HttpLabel("Arn")),
          Name: S.optional(S.String),
          Configuration: S.optional(__S(140)),
          MaximumBitrate: S.optional(S.Number),
          RoutingScope: S.optional(S.String),
          Tier: S.optional(S.String),
          MaintenanceConfiguration: S.optional(__S(105)),
          FabricConfiguration: S.optional(__S(143)),
        })
          .pipe(
            S.encodeKeys({
              Name: "name",
              Configuration: "configuration",
              MaximumBitrate: "maximumBitrate",
              RoutingScope: "routingScope",
              Tier: "tier",
              MaintenanceConfiguration: "maintenanceConfiguration",
              FabricConfiguration: "fabricConfiguration",
            }),
          )
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/v1/routerOutput/{Arn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({
        identifier: "UpdateRouterOutputRequest",
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
  }
}
