import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface MediaConnect {
  listEntitlements(
    input: ListEntitlementsRequest,
  ): Effect.Effect<
    ListEntitlementsResponse,
    | BadRequestException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
}

export type Mediaconnect = MediaConnect;

export type __listOfAddBridgeOutputRequest = Array<AddBridgeOutputRequest>;
export type __listOfAddBridgeSourceRequest = Array<AddBridgeSourceRequest>;
export type __listOfAddMediaStreamRequest = Array<AddMediaStreamRequest>;
export type __listOfAddOutputRequest = Array<AddOutputRequest>;
export type __listOfAudioMonitoringSetting = Array<AudioMonitoringSetting>;
export type __listOfBridgeOutput = Array<BridgeOutput>;
export type __listOfBridgeSource = Array<BridgeSource>;
export type __listOfDestinationConfiguration = Array<DestinationConfiguration>;
export type __listOfDestinationConfigurationRequest =
  Array<DestinationConfigurationRequest>;
export type __listOfEntitlement = Array<Entitlement>;
export type __listOfGatewayNetwork = Array<GatewayNetwork>;
export type __listOfGrantEntitlementRequest = Array<GrantEntitlementRequest>;
export type __listOfInputConfiguration = Array<InputConfiguration>;
export type __listOfInputConfigurationRequest =
  Array<InputConfigurationRequest>;
export type __listOfInteger = Array<number>;
export type __listOfListedBridge = Array<ListedBridge>;
export type __listOfListedEntitlement = Array<ListedEntitlement>;
export type __listOfListedFlow = Array<ListedFlow>;
export type __listOfListedGateway = Array<ListedGateway>;
export type __listOfListedGatewayInstance = Array<ListedGatewayInstance>;
export type __listOfMediaStream = Array<MediaStream>;
export type __listOfMediaStreamOutputConfiguration =
  Array<MediaStreamOutputConfiguration>;
export type __listOfMediaStreamOutputConfigurationRequest =
  Array<MediaStreamOutputConfigurationRequest>;
export type __listOfMediaStreamSourceConfiguration =
  Array<MediaStreamSourceConfiguration>;
export type __listOfMediaStreamSourceConfigurationRequest =
  Array<MediaStreamSourceConfigurationRequest>;
export type __listOfMessageDetail = Array<MessageDetail>;
export type __listOfNdiDiscoveryServerConfig = Array<NdiDiscoveryServerConfig>;
export type __listOfOffering = Array<Offering>;
export type __listOfOutput = Array<Output>;
export type __listOfReservation = Array<Reservation>;
export type __listOfSetSourceRequest = Array<SetSourceRequest>;
export type __listOfSource = Array<Source>;
export type __listOfString = Array<string>;
export type __listOfTransportStream = Array<TransportStream>;
export type __listOfTransportStreamProgram = Array<TransportStreamProgram>;
export type __listOfVideoMonitoringSetting = Array<VideoMonitoringSetting>;
export type __listOfVpcInterface = Array<VpcInterface>;
export type __listOfVpcInterfaceRequest = Array<VpcInterfaceRequest>;
export type __mapOfString = Record<string, string>;
export interface AddBridgeFlowSourceRequest {
  FlowArn: string;
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
  Name: string;
}
export interface AddBridgeNetworkOutputRequest {
  IpAddress: string;
  Name: string;
  NetworkName: string;
  Port: number;
  Protocol: Protocol;
  Ttl: number;
}
export interface AddBridgeNetworkSourceRequest {
  MulticastIp: string;
  MulticastSourceSettings?: MulticastSourceSettings;
  Name: string;
  NetworkName: string;
  Port: number;
  Protocol: Protocol;
}
export interface AddBridgeOutputRequest {
  NetworkOutput?: AddBridgeNetworkOutputRequest;
}
export interface AddBridgeOutputsRequest {
  BridgeArn: string;
  Outputs: Array<AddBridgeOutputRequest>;
}
export interface AddBridgeOutputsResponse {
  BridgeArn?: string;
  Outputs?: Array<BridgeOutput>;
}
export interface AddBridgeSourceRequest {
  FlowSource?: AddBridgeFlowSourceRequest;
  NetworkSource?: AddBridgeNetworkSourceRequest;
}
export interface AddBridgeSourcesRequest {
  BridgeArn: string;
  Sources: Array<AddBridgeSourceRequest>;
}
export interface AddBridgeSourcesResponse {
  BridgeArn?: string;
  Sources?: Array<BridgeSource>;
}
export interface AddEgressGatewayBridgeRequest {
  MaxBitrate: number;
}
export interface AddFlowMediaStreamsRequest {
  FlowArn: string;
  MediaStreams: Array<AddMediaStreamRequest>;
}
export interface AddFlowMediaStreamsResponse {
  FlowArn?: string;
  MediaStreams?: Array<MediaStream>;
}
export declare class AddFlowOutputs420Exception extends EffectData.TaggedError(
  "AddFlowOutputs420Exception",
)<{
  readonly Message: string;
}> {}
export interface AddFlowOutputsRequest {
  FlowArn: string;
  Outputs: Array<AddOutputRequest>;
}
export interface AddFlowOutputsResponse {
  FlowArn?: string;
  Outputs?: Array<Output>;
}
export interface AddFlowSourcesRequest {
  FlowArn: string;
  Sources: Array<SetSourceRequest>;
}
export interface AddFlowSourcesResponse {
  FlowArn?: string;
  Sources?: Array<Source>;
}
export interface AddFlowVpcInterfacesRequest {
  FlowArn: string;
  VpcInterfaces: Array<VpcInterfaceRequest>;
}
export interface AddFlowVpcInterfacesResponse {
  FlowArn?: string;
  VpcInterfaces?: Array<VpcInterface>;
}
export interface AddIngressGatewayBridgeRequest {
  MaxBitrate: number;
  MaxOutputs: number;
}
export interface AddMaintenance {
  MaintenanceDay: MaintenanceDay;
  MaintenanceStartHour: string;
}
export interface AddMediaStreamRequest {
  Attributes?: MediaStreamAttributesRequest;
  ClockRate?: number;
  Description?: string;
  MediaStreamId: number;
  MediaStreamName: string;
  MediaStreamType: MediaStreamType;
  VideoFormat?: string;
}
export interface AddOutputRequest {
  CidrAllowList?: Array<string>;
  Description?: string;
  Destination?: string;
  Encryption?: Encryption;
  MaxLatency?: number;
  MediaStreamOutputConfigurations?: Array<MediaStreamOutputConfigurationRequest>;
  MinLatency?: number;
  Name?: string;
  Port?: number;
  Protocol: Protocol;
  RemoteId?: string;
  SenderControlPort?: number;
  SmoothingLatency?: number;
  StreamId?: string;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
  OutputStatus?: OutputStatus;
  NdiSpeedHqQuality?: number;
  NdiProgramName?: string;
}
export type Algorithm = "aes128" | "aes192" | "aes256";
export interface AudioMonitoringSetting {
  SilentAudio?: SilentAudio;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message: string;
}> {}
export interface BlackFrames {
  State?: State;
  ThresholdSeconds?: number;
}
export interface Bridge {
  BridgeArn: string;
  BridgeMessages?: Array<MessageDetail>;
  BridgeState: BridgeState;
  EgressGatewayBridge?: EgressGatewayBridge;
  IngressGatewayBridge?: IngressGatewayBridge;
  Name: string;
  Outputs?: Array<BridgeOutput>;
  PlacementArn: string;
  SourceFailoverConfig?: FailoverConfig;
  Sources?: Array<BridgeSource>;
}
export type BridgeArn = string;

export interface BridgeFlowOutput {
  FlowArn: string;
  FlowSourceArn: string;
  Name: string;
}
export interface BridgeFlowSource {
  FlowArn: string;
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
  Name: string;
  OutputArn?: string;
}
export interface BridgeNetworkOutput {
  IpAddress: string;
  Name: string;
  NetworkName: string;
  Port: number;
  Protocol: Protocol;
  Ttl: number;
}
export interface BridgeNetworkSource {
  MulticastIp: string;
  MulticastSourceSettings?: MulticastSourceSettings;
  Name: string;
  NetworkName: string;
  Port: number;
  Protocol: Protocol;
}
export interface BridgeOutput {
  FlowOutput?: BridgeFlowOutput;
  NetworkOutput?: BridgeNetworkOutput;
}
export type BridgePlacement = "AVAILABLE" | "LOCKED";
export interface BridgeSource {
  FlowSource?: BridgeFlowSource;
  NetworkSource?: BridgeNetworkSource;
}
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
  | "UPDATING";
export type Colorimetry =
  | "BT601"
  | "BT709"
  | "BT2020"
  | "BT2100"
  | "ST2065_1"
  | "ST2065_3"
  | "XYZ";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export type ConnectionStatus = "CONNECTED" | "DISCONNECTED";
export type ContentQualityAnalysisState = "ENABLED" | "DISABLED";
export declare class CreateBridge420Exception extends EffectData.TaggedError(
  "CreateBridge420Exception",
)<{
  readonly Message: string;
}> {}
export interface CreateBridgeRequest {
  EgressGatewayBridge?: AddEgressGatewayBridgeRequest;
  IngressGatewayBridge?: AddIngressGatewayBridgeRequest;
  Name: string;
  Outputs?: Array<AddBridgeOutputRequest>;
  PlacementArn: string;
  SourceFailoverConfig?: FailoverConfig;
  Sources: Array<AddBridgeSourceRequest>;
}
export interface CreateBridgeResponse {
  Bridge?: Bridge;
}
export declare class CreateFlow420Exception extends EffectData.TaggedError(
  "CreateFlow420Exception",
)<{
  readonly Message: string;
}> {}
export interface CreateFlowRequest {
  AvailabilityZone?: string;
  Entitlements?: Array<GrantEntitlementRequest>;
  MediaStreams?: Array<AddMediaStreamRequest>;
  Name: string;
  Outputs?: Array<AddOutputRequest>;
  Source?: SetSourceRequest;
  SourceFailoverConfig?: FailoverConfig;
  Sources?: Array<SetSourceRequest>;
  VpcInterfaces?: Array<VpcInterfaceRequest>;
  Maintenance?: AddMaintenance;
  SourceMonitoringConfig?: MonitoringConfig;
  FlowSize?: FlowSize;
  NdiConfig?: NdiConfig;
}
export interface CreateFlowResponse {
  Flow?: Flow;
}
export declare class CreateGateway420Exception extends EffectData.TaggedError(
  "CreateGateway420Exception",
)<{
  readonly Message: string;
}> {}
export interface CreateGatewayRequest {
  EgressCidrBlocks: Array<string>;
  Name: string;
  Networks: Array<GatewayNetwork>;
}
export interface CreateGatewayResponse {
  Gateway?: Gateway;
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
export interface DeleteGatewayRequest {
  GatewayArn: string;
}
export interface DeleteGatewayResponse {
  GatewayArn?: string;
}
export interface DeregisterGatewayInstanceRequest {
  Force?: boolean;
  GatewayInstanceArn: string;
}
export interface DeregisterGatewayInstanceResponse {
  GatewayInstanceArn?: string;
  InstanceState?: InstanceState;
}
export interface DescribeBridgeRequest {
  BridgeArn: string;
}
export interface DescribeBridgeResponse {
  Bridge?: Bridge;
}
export interface DescribeFlowRequest {
  FlowArn: string;
}
export interface DescribeFlowResponse {
  Flow?: Flow;
  Messages?: Messages;
}
export interface DescribeFlowSourceMetadataRequest {
  FlowArn: string;
}
export interface DescribeFlowSourceMetadataResponse {
  FlowArn?: string;
  Messages?: Array<MessageDetail>;
  Timestamp?: Date | string;
  TransportMediaInfo?: TransportMediaInfo;
}
export interface DescribeFlowSourceThumbnailRequest {
  FlowArn: string;
}
export interface DescribeFlowSourceThumbnailResponse {
  ThumbnailDetails?: ThumbnailDetails;
}
export interface DescribeGatewayInstanceRequest {
  GatewayInstanceArn: string;
}
export interface DescribeGatewayInstanceResponse {
  GatewayInstance?: GatewayInstance;
}
export interface DescribeGatewayRequest {
  GatewayArn: string;
}
export interface DescribeGatewayResponse {
  Gateway?: Gateway;
}
export interface DescribeOfferingRequest {
  OfferingArn: string;
}
export interface DescribeOfferingResponse {
  Offering?: Offering;
}
export interface DescribeReservationRequest {
  ReservationArn: string;
}
export interface DescribeReservationResponse {
  Reservation?: Reservation;
}
export type DesiredState = "ACTIVE" | "STANDBY" | "DELETED";
export interface DestinationConfiguration {
  DestinationIp: string;
  DestinationPort: number;
  Interface: Interface;
  OutboundIp: string;
}
export interface DestinationConfigurationRequest {
  DestinationIp: string;
  DestinationPort: number;
  Interface: InterfaceRequest;
}
export type DurationUnits = "MONTHS";
export interface EgressGatewayBridge {
  InstanceId?: string;
  MaxBitrate: number;
}
export type EncoderProfile = "main" | "high";
export type EncodingName = "jxsv" | "raw" | "smpte291" | "pcm";
export interface EncodingParameters {
  CompressionFactor: number;
  EncoderProfile: EncoderProfile;
}
export interface EncodingParametersRequest {
  CompressionFactor: number;
  EncoderProfile: EncoderProfile;
}
export interface Encryption {
  Algorithm?: Algorithm;
  ConstantInitializationVector?: string;
  DeviceId?: string;
  KeyType?: KeyType;
  Region?: string;
  ResourceId?: string;
  RoleArn: string;
  SecretArn?: string;
  Url?: string;
}
export interface Entitlement {
  DataTransferSubscriberFeePercent?: number;
  Description?: string;
  Encryption?: Encryption;
  EntitlementArn: string;
  EntitlementStatus?: EntitlementStatus;
  Name: string;
  Subscribers: Array<string>;
}
export type EntitlementStatus = "ENABLED" | "DISABLED";
export interface FailoverConfig {
  FailoverMode?: FailoverMode;
  RecoveryWindow?: number;
  SourcePriority?: SourcePriority;
  State?: State;
}
export type FailoverMode = "MERGE" | "FAILOVER";
export interface Flow {
  AvailabilityZone: string;
  Description?: string;
  EgressIp?: string;
  Entitlements: Array<Entitlement>;
  FlowArn: string;
  MediaStreams?: Array<MediaStream>;
  Name: string;
  Outputs: Array<Output>;
  Source: Source;
  SourceFailoverConfig?: FailoverConfig;
  Sources?: Array<Source>;
  Status: Status;
  VpcInterfaces?: Array<VpcInterface>;
  Maintenance?: Maintenance;
  SourceMonitoringConfig?: MonitoringConfig;
  FlowSize?: FlowSize;
  NdiConfig?: NdiConfig;
}
export type FlowArn = string;

export type FlowSize = "MEDIUM" | "LARGE";
export interface Fmtp {
  ChannelOrder?: string;
  Colorimetry?: Colorimetry;
  ExactFramerate?: string;
  Par?: string;
  Range?: Range;
  ScanMode?: ScanMode;
  Tcs?: Tcs;
}
export interface FmtpRequest {
  ChannelOrder?: string;
  Colorimetry?: Colorimetry;
  ExactFramerate?: string;
  Par?: string;
  Range?: Range;
  ScanMode?: ScanMode;
  Tcs?: Tcs;
}
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Message: string;
}> {}
export interface FrameResolution {
  FrameHeight: number;
  FrameWidth: number;
}
export interface FrozenFrames {
  State?: State;
  ThresholdSeconds?: number;
}
export interface Gateway {
  EgressCidrBlocks: Array<string>;
  GatewayArn: string;
  GatewayMessages?: Array<MessageDetail>;
  GatewayState?: GatewayState;
  Name: string;
  Networks: Array<GatewayNetwork>;
}
export type GatewayArn = string;

export interface GatewayBridgeSource {
  BridgeArn: string;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}
export interface GatewayInstance {
  BridgePlacement: BridgePlacement;
  ConnectionStatus: ConnectionStatus;
  GatewayArn: string;
  GatewayInstanceArn: string;
  InstanceId: string;
  InstanceMessages?: Array<MessageDetail>;
  InstanceState: InstanceState;
  RunningBridgeCount: number;
}
export type GatewayInstanceArn = string;

export interface GatewayNetwork {
  CidrBlock: string;
  Name: string;
}
export type GatewayState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "ERROR"
  | "DELETING"
  | "DELETED";
export interface GrantEntitlementRequest {
  DataTransferSubscriberFeePercent?: number;
  Description?: string;
  Encryption?: Encryption;
  EntitlementStatus?: EntitlementStatus;
  Name?: string;
  Subscribers: Array<string>;
}
export declare class GrantFlowEntitlements420Exception extends EffectData.TaggedError(
  "GrantFlowEntitlements420Exception",
)<{
  readonly Message: string;
}> {}
export interface GrantFlowEntitlementsRequest {
  Entitlements: Array<GrantEntitlementRequest>;
  FlowArn: string;
}
export interface GrantFlowEntitlementsResponse {
  Entitlements?: Array<Entitlement>;
  FlowArn?: string;
}
export interface IngressGatewayBridge {
  InstanceId?: string;
  MaxBitrate: number;
  MaxOutputs: number;
}
export interface InputConfiguration {
  InputIp: string;
  InputPort: number;
  Interface: Interface;
}
export interface InputConfigurationRequest {
  InputPort: number;
  Interface: InterfaceRequest;
}
export type InstanceState =
  | "REGISTERING"
  | "ACTIVE"
  | "DEREGISTERING"
  | "DEREGISTERED"
  | "REGISTRATION_ERROR"
  | "DEREGISTRATION_ERROR";
export interface Interface {
  Name: string;
}
export interface InterfaceRequest {
  Name: string;
}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Message: string;
}> {}
export type KeyType = "speke" | "static_key" | "srt_password";
export interface ListBridgesRequest {
  FilterArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListBridgesResponse {
  Bridges?: Array<ListedBridge>;
  NextToken?: string;
}
export interface ListedBridge {
  BridgeArn: string;
  BridgeState: BridgeState;
  BridgeType: string;
  Name: string;
  PlacementArn: string;
}
export interface ListedEntitlement {
  DataTransferSubscriberFeePercent?: number;
  EntitlementArn: string;
  EntitlementName: string;
}
export interface ListedFlow {
  AvailabilityZone: string;
  Description: string;
  FlowArn: string;
  Name: string;
  SourceType: SourceType;
  Status: Status;
  Maintenance?: Maintenance;
}
export interface ListedGateway {
  GatewayArn: string;
  GatewayState: GatewayState;
  Name: string;
}
export interface ListedGatewayInstance {
  GatewayArn: string;
  GatewayInstanceArn: string;
  InstanceId: string;
  InstanceState?: InstanceState;
}
export interface ListEntitlementsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListEntitlementsResponse {
  Entitlements?: Array<ListedEntitlement>;
  NextToken?: string;
}
export interface ListFlowsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListFlowsResponse {
  Flows?: Array<ListedFlow>;
  NextToken?: string;
}
export interface ListGatewayInstancesRequest {
  FilterArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListGatewayInstancesResponse {
  Instances?: Array<ListedGatewayInstance>;
  NextToken?: string;
}
export interface ListGatewaysRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListGatewaysResponse {
  Gateways?: Array<ListedGateway>;
  NextToken?: string;
}
export interface ListOfferingsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOfferingsResponse {
  NextToken?: string;
  Offerings?: Array<Offering>;
}
export interface ListReservationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListReservationsResponse {
  NextToken?: string;
  Reservations?: Array<Reservation>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface Maintenance {
  MaintenanceDay?: MaintenanceDay;
  MaintenanceDeadline?: string;
  MaintenanceScheduledDate?: string;
  MaintenanceStartHour?: string;
}
export type MaintenanceDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
export type MaxResults = number;

export interface MediaStream {
  Attributes?: MediaStreamAttributes;
  ClockRate?: number;
  Description?: string;
  Fmt: number;
  MediaStreamId: number;
  MediaStreamName: string;
  MediaStreamType: MediaStreamType;
  VideoFormat?: string;
}
export interface MediaStreamAttributes {
  Fmtp: Fmtp;
  Lang?: string;
}
export interface MediaStreamAttributesRequest {
  Fmtp?: FmtpRequest;
  Lang?: string;
}
export interface MediaStreamOutputConfiguration {
  DestinationConfigurations?: Array<DestinationConfiguration>;
  EncodingName: EncodingName;
  EncodingParameters?: EncodingParameters;
  MediaStreamName: string;
}
export interface MediaStreamOutputConfigurationRequest {
  DestinationConfigurations?: Array<DestinationConfigurationRequest>;
  EncodingName: EncodingName;
  EncodingParameters?: EncodingParametersRequest;
  MediaStreamName: string;
}
export interface MediaStreamSourceConfiguration {
  EncodingName: EncodingName;
  InputConfigurations?: Array<InputConfiguration>;
  MediaStreamName: string;
}
export interface MediaStreamSourceConfigurationRequest {
  EncodingName: EncodingName;
  InputConfigurations?: Array<InputConfigurationRequest>;
  MediaStreamName: string;
}
export type MediaStreamType = "video" | "audio" | "ancillary_data";
export interface MessageDetail {
  Code: string;
  Message: string;
  ResourceName?: string;
}
export interface Messages {
  Errors: Array<string>;
}
export interface MonitoringConfig {
  ThumbnailState?: ThumbnailState;
  AudioMonitoringSettings?: Array<AudioMonitoringSetting>;
  ContentQualityAnalysisState?: ContentQualityAnalysisState;
  VideoMonitoringSettings?: Array<VideoMonitoringSetting>;
}
export interface MulticastSourceSettings {
  MulticastSourceIp?: string;
}
export interface NdiConfig {
  NdiState?: NdiState;
  MachineName?: string;
  NdiDiscoveryServers?: Array<NdiDiscoveryServerConfig>;
}
export interface NdiDiscoveryServerConfig {
  DiscoveryServerAddress: string;
  DiscoveryServerPort?: number;
  VpcInterfaceAdapter: string;
}
export type NdiState = "ENABLED" | "DISABLED";
export type NetworkInterfaceType = "ena" | "efa";
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message: string;
}> {}
export interface Offering {
  CurrencyCode: string;
  Duration: number;
  DurationUnits: DurationUnits;
  OfferingArn: string;
  OfferingDescription: string;
  PricePerUnit: string;
  PriceUnits: PriceUnits;
  ResourceSpecification: ResourceSpecification;
}
export type OfferingArn = string;

export interface Output {
  DataTransferSubscriberFeePercent?: number;
  Description?: string;
  Destination?: string;
  Encryption?: Encryption;
  EntitlementArn?: string;
  ListenerAddress?: string;
  MediaLiveInputArn?: string;
  MediaStreamOutputConfigurations?: Array<MediaStreamOutputConfiguration>;
  Name: string;
  OutputArn: string;
  Port?: number;
  Transport?: Transport;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
  BridgeArn?: string;
  BridgePorts?: Array<number>;
  OutputStatus?: OutputStatus;
  PeerIpAddress?: string;
}
export type OutputStatus = "ENABLED" | "DISABLED";
export type PriceUnits = "HOURLY";
export type Protocol =
  | "zixi_push"
  | "rtp_fec"
  | "rtp"
  | "zixi_pull"
  | "rist"
  | "st2110_jpegxs"
  | "cdi"
  | "srt_listener"
  | "srt_caller"
  | "fujitsu_qos"
  | "udp"
  | "ndi_speed_hq";
export interface PurchaseOfferingRequest {
  OfferingArn: string;
  ReservationName: string;
  Start: string;
}
export interface PurchaseOfferingResponse {
  Reservation?: Reservation;
}
export type Range = "NARROW" | "FULL" | "FULLPROTECT";
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
  NonDeletedNetworkInterfaceIds?: Array<string>;
  VpcInterfaceName?: string;
}
export interface Reservation {
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
  ResourceSpecification: ResourceSpecification;
  Start: string;
}
export type ReservationArn = string;

export type ReservationState = "ACTIVE" | "EXPIRED" | "PROCESSING" | "CANCELED";
export interface ResourceSpecification {
  ReservedBitrate?: number;
  ResourceType: ResourceType;
}
export type ResourceType = "Mbps_Outbound_Bandwidth";
export interface RevokeFlowEntitlementRequest {
  EntitlementArn: string;
  FlowArn: string;
}
export interface RevokeFlowEntitlementResponse {
  EntitlementArn?: string;
  FlowArn?: string;
}
export type ScanMode =
  | "progressive"
  | "interlace"
  | "progressive_segmented_frame";
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message: string;
}> {}
export interface SetGatewayBridgeSourceRequest {
  BridgeArn: string;
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
  MediaStreamSourceConfigurations?: Array<MediaStreamSourceConfigurationRequest>;
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
}
export interface SilentAudio {
  State?: State;
  ThresholdSeconds?: number;
}
export interface Source {
  DataTransferSubscriberFeePercent?: number;
  Decryption?: Encryption;
  Description?: string;
  EntitlementArn?: string;
  IngestIp?: string;
  IngestPort?: number;
  MediaStreamSourceConfigurations?: Array<MediaStreamSourceConfiguration>;
  Name: string;
  SenderControlPort?: number;
  SenderIpAddress?: string;
  SourceArn: string;
  Transport?: Transport;
  VpcInterfaceName?: string;
  WhitelistCidr?: string;
  GatewayBridgeSource?: GatewayBridgeSource;
  PeerIpAddress?: string;
}
export interface SourcePriority {
  PrimarySource?: string;
}
export type SourceType = "OWNED" | "ENTITLED";
export interface StartFlowRequest {
  FlowArn: string;
}
export interface StartFlowResponse {
  FlowArn?: string;
  Status?: Status;
}
export type State = "ENABLED" | "DISABLED";
export type Status =
  | "STANDBY"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "STARTING"
  | "STOPPING"
  | "ERROR";
export interface StopFlowRequest {
  FlowArn: string;
}
export interface StopFlowResponse {
  FlowArn?: string;
  Status?: Status;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tcs =
  | "SDR"
  | "PQ"
  | "HLG"
  | "LINEAR"
  | "BT2100LINPQ"
  | "BT2100LINHLG"
  | "ST2065_1"
  | "ST428_1"
  | "DENSITY";
export interface ThumbnailDetails {
  FlowArn: string;
  Thumbnail?: string;
  ThumbnailMessages: Array<MessageDetail>;
  Timecode?: string;
  Timestamp?: Date | string;
}
export type ThumbnailState = "ENABLED" | "DISABLED";
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message: string;
}> {}
export interface Transport {
  CidrAllowList?: Array<string>;
  MaxBitrate?: number;
  MaxLatency?: number;
  MaxSyncBuffer?: number;
  MinLatency?: number;
  Protocol: Protocol;
  RemoteId?: string;
  SenderControlPort?: number;
  SenderIpAddress?: string;
  SmoothingLatency?: number;
  SourceListenerAddress?: string;
  SourceListenerPort?: number;
  StreamId?: string;
  NdiSpeedHqQuality?: number;
  NdiProgramName?: string;
}
export interface TransportMediaInfo {
  Programs: Array<TransportStreamProgram>;
}
export interface TransportStream {
  Channels?: number;
  Codec?: string;
  FrameRate?: string;
  FrameResolution?: FrameResolution;
  Pid: number;
  SampleRate?: number;
  SampleSize?: number;
  StreamType: string;
}
export interface TransportStreamProgram {
  PcrPid: number;
  ProgramName?: string;
  ProgramNumber: number;
  ProgramPid: number;
  Streams: Array<TransportStream>;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateBridgeFlowSourceRequest {
  FlowArn?: string;
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
}
export interface UpdateBridgeNetworkOutputRequest {
  IpAddress?: string;
  NetworkName?: string;
  Port?: number;
  Protocol?: Protocol;
  Ttl?: number;
}
export interface UpdateBridgeNetworkSourceRequest {
  MulticastIp?: string;
  MulticastSourceSettings?: MulticastSourceSettings;
  NetworkName?: string;
  Port?: number;
  Protocol?: Protocol;
}
export interface UpdateBridgeOutputRequest {
  BridgeArn: string;
  NetworkOutput?: UpdateBridgeNetworkOutputRequest;
  OutputName: string;
}
export interface UpdateBridgeOutputResponse {
  BridgeArn?: string;
  Output?: BridgeOutput;
}
export interface UpdateBridgeRequest {
  BridgeArn: string;
  EgressGatewayBridge?: UpdateEgressGatewayBridgeRequest;
  IngressGatewayBridge?: UpdateIngressGatewayBridgeRequest;
  SourceFailoverConfig?: UpdateFailoverConfig;
}
export interface UpdateBridgeResponse {
  Bridge?: Bridge;
}
export interface UpdateBridgeSourceRequest {
  BridgeArn: string;
  FlowSource?: UpdateBridgeFlowSourceRequest;
  NetworkSource?: UpdateBridgeNetworkSourceRequest;
  SourceName: string;
}
export interface UpdateBridgeSourceResponse {
  BridgeArn?: string;
  Source?: BridgeSource;
}
export interface UpdateBridgeStateRequest {
  BridgeArn: string;
  DesiredState: DesiredState;
}
export interface UpdateBridgeStateResponse {
  BridgeArn?: string;
  DesiredState?: DesiredState;
}
export interface UpdateEgressGatewayBridgeRequest {
  MaxBitrate?: number;
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
export interface UpdateFailoverConfig {
  FailoverMode?: FailoverMode;
  RecoveryWindow?: number;
  SourcePriority?: SourcePriority;
  State?: State;
}
export interface UpdateFlowEntitlementRequest {
  Description?: string;
  Encryption?: UpdateEncryption;
  EntitlementArn: string;
  EntitlementStatus?: EntitlementStatus;
  FlowArn: string;
  Subscribers?: Array<string>;
}
export interface UpdateFlowEntitlementResponse {
  Entitlement?: Entitlement;
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
  MediaStream?: MediaStream;
}
export interface UpdateFlowOutputRequest {
  CidrAllowList?: Array<string>;
  Description?: string;
  Destination?: string;
  Encryption?: UpdateEncryption;
  FlowArn: string;
  MaxLatency?: number;
  MediaStreamOutputConfigurations?: Array<MediaStreamOutputConfigurationRequest>;
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
}
export interface UpdateFlowOutputResponse {
  FlowArn?: string;
  Output?: Output;
}
export interface UpdateFlowRequest {
  FlowArn: string;
  SourceFailoverConfig?: UpdateFailoverConfig;
  Maintenance?: UpdateMaintenance;
  SourceMonitoringConfig?: MonitoringConfig;
  NdiConfig?: NdiConfig;
}
export interface UpdateFlowResponse {
  Flow?: Flow;
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
  MediaStreamSourceConfigurations?: Array<MediaStreamSourceConfigurationRequest>;
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
}
export interface UpdateFlowSourceResponse {
  FlowArn?: string;
  Source?: Source;
}
export interface UpdateGatewayBridgeSourceRequest {
  BridgeArn?: string;
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}
export interface UpdateGatewayInstanceRequest {
  BridgePlacement?: BridgePlacement;
  GatewayInstanceArn: string;
}
export interface UpdateGatewayInstanceResponse {
  BridgePlacement?: BridgePlacement;
  GatewayInstanceArn?: string;
}
export interface UpdateIngressGatewayBridgeRequest {
  MaxBitrate?: number;
  MaxOutputs?: number;
}
export interface UpdateMaintenance {
  MaintenanceDay?: MaintenanceDay;
  MaintenanceScheduledDate?: string;
  MaintenanceStartHour?: string;
}
export interface VideoMonitoringSetting {
  BlackFrames?: BlackFrames;
  FrozenFrames?: FrozenFrames;
}
export interface VpcInterface {
  Name: string;
  NetworkInterfaceIds: Array<string>;
  NetworkInterfaceType: NetworkInterfaceType;
  RoleArn: string;
  SecurityGroupIds: Array<string>;
  SubnetId: string;
}
export interface VpcInterfaceAttachment {
  VpcInterfaceName?: string;
}
export interface VpcInterfaceRequest {
  Name: string;
  NetworkInterfaceType?: NetworkInterfaceType;
  RoleArn: string;
  SecurityGroupIds: Array<string>;
  SubnetId: string;
}
export declare namespace ListEntitlements {
  export type Input = ListEntitlementsRequest;
  export type Output = ListEntitlementsResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | ServiceUnavailableException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}
