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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "GroundStation",
  serviceShapeName: "GroundStation",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "groundstation" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-05-23");
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
              `https://groundstation-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://groundstation-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://groundstation.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://groundstation.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class DependencyException
  extends /*@__PURE__*/ S.TaggedError<DependencyException>()(
    "DependencyException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      parameterName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(531),
  ).pipe(C.withServerError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      parameterName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(431),
  ) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      parameterName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(434),
  ) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      parameterName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export type Uuid = string;
export interface CancelContactRequest {
  contactId: string;
}
const CancelContactRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<CancelContactRequest>;
export type VersionId = number;
export interface ContactIdResponse {
  contactId?: string;
  versionId?: number;
}
const ContactIdResponse = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<ContactIdResponse>;
export type SafeName = string;
export type FrequencyUnits = "GHz" | "MHz" | "kHz" | (string & {});
const FrequencyUnits = S.String;

export interface Frequency {
  value: number;
  units: FrequencyUnits;
}
const Frequency = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<Frequency>;
export type BandwidthUnits = "GHz" | "MHz" | "kHz" | (string & {});
export interface FrequencyBandwidth {
  value: number;
  units: BandwidthUnits;
}
const FrequencyBandwidth = Frequency as any as S.Schema<FrequencyBandwidth>;
export type Polarization = "RIGHT_HAND" | "LEFT_HAND" | "NONE" | (string & {});
const Polarization = S.String;

export interface SpectrumConfig {
  centerFrequency: Frequency;
  bandwidth: FrequencyBandwidth;
  polarization?: Polarization;
}
const SpectrumConfig = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<SpectrumConfig>;
export interface AntennaDownlinkConfig {
  spectrumConfig: SpectrumConfig;
}
const AntennaDownlinkConfig = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AntennaDownlinkConfig>;
export type Criticality = "REQUIRED" | "PREFERRED" | "REMOVED" | (string & {});
const Criticality = S.String;

export interface TrackingConfig {
  autotrack: Criticality;
}
const TrackingConfig = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<TrackingConfig>;
export interface DataflowEndpointConfig {
  dataflowEndpointName: string;
  dataflowEndpointRegion?: string;
}
const DataflowEndpointConfig = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<DataflowEndpointConfig>;
export type JsonString = string;
export interface DemodulationConfig {
  unvalidatedJSON: string;
}
const DemodulationConfig = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<DemodulationConfig>;
export interface DecodeConfig {
  unvalidatedJSON: string;
}
const DecodeConfig = DemodulationConfig as any as S.Schema<DecodeConfig>;
export interface AntennaDownlinkDemodDecodeConfig {
  spectrumConfig: SpectrumConfig;
  demodulationConfig: DemodulationConfig;
  decodeConfig: DecodeConfig;
}
const AntennaDownlinkDemodDecodeConfig = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<AntennaDownlinkDemodDecodeConfig>;
export interface UplinkSpectrumConfig {
  centerFrequency: Frequency;
  polarization?: Polarization;
}
const UplinkSpectrumConfig = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<UplinkSpectrumConfig>;
export type EirpUnits = "dBW" | (string & {});
export interface Eirp {
  value: number;
  units: EirpUnits;
}
const Eirp = Frequency as any as S.Schema<Eirp>;
export interface AntennaUplinkConfig {
  transmitDisabled?: boolean;
  spectrumConfig: UplinkSpectrumConfig;
  targetEirp: Eirp;
}
const AntennaUplinkConfig = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<AntennaUplinkConfig>;
export type ConfigArn = string;
export interface UplinkEchoConfig {
  enabled: boolean;
  antennaUplinkConfigArn: string;
}
const UplinkEchoConfig = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<UplinkEchoConfig>;
export type BucketArn = string;
export type RoleArn = string;
export type S3KeyPrefix = string;
export interface S3RecordingConfig {
  bucketArn: string;
  roleArn: string;
  prefix?: string;
}
const S3RecordingConfig = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<S3RecordingConfig>;
export type TelemetrySinkType = "KINESIS_DATA_STREAM" | (string & {});
const TelemetrySinkType = S.String;

export type KinesisDataStreamArn = string;
export interface KinesisDataStreamData {
  kinesisRoleArn: string;
  kinesisDataStreamArn: string;
}
const KinesisDataStreamData = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<KinesisDataStreamData>;
export type TelemetrySinkData = { kinesisDataStreamData: KinesisDataStreamData };
const TelemetrySinkData = /*@__PURE__*/ __L.at(__c1, 6);
export interface TelemetrySinkConfig {
  telemetrySinkType: TelemetrySinkType;
  telemetrySinkData: TelemetrySinkData;
}
const TelemetrySinkConfig = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<TelemetrySinkConfig>;
export type ConfigTypeData =
  | {
      antennaDownlinkConfig: AntennaDownlinkConfig;
      trackingConfig?: never;
      dataflowEndpointConfig?: never;
      antennaDownlinkDemodDecodeConfig?: never;
      antennaUplinkConfig?: never;
      uplinkEchoConfig?: never;
      s3RecordingConfig?: never;
      telemetrySinkConfig?: never;
    }
  | {
      antennaDownlinkConfig?: never;
      trackingConfig: TrackingConfig;
      dataflowEndpointConfig?: never;
      antennaDownlinkDemodDecodeConfig?: never;
      antennaUplinkConfig?: never;
      uplinkEchoConfig?: never;
      s3RecordingConfig?: never;
      telemetrySinkConfig?: never;
    }
  | {
      antennaDownlinkConfig?: never;
      trackingConfig?: never;
      dataflowEndpointConfig: DataflowEndpointConfig;
      antennaDownlinkDemodDecodeConfig?: never;
      antennaUplinkConfig?: never;
      uplinkEchoConfig?: never;
      s3RecordingConfig?: never;
      telemetrySinkConfig?: never;
    }
  | {
      antennaDownlinkConfig?: never;
      trackingConfig?: never;
      dataflowEndpointConfig?: never;
      antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfig;
      antennaUplinkConfig?: never;
      uplinkEchoConfig?: never;
      s3RecordingConfig?: never;
      telemetrySinkConfig?: never;
    }
  | {
      antennaDownlinkConfig?: never;
      trackingConfig?: never;
      dataflowEndpointConfig?: never;
      antennaDownlinkDemodDecodeConfig?: never;
      antennaUplinkConfig: AntennaUplinkConfig;
      uplinkEchoConfig?: never;
      s3RecordingConfig?: never;
      telemetrySinkConfig?: never;
    }
  | {
      antennaDownlinkConfig?: never;
      trackingConfig?: never;
      dataflowEndpointConfig?: never;
      antennaDownlinkDemodDecodeConfig?: never;
      antennaUplinkConfig?: never;
      uplinkEchoConfig: UplinkEchoConfig;
      s3RecordingConfig?: never;
      telemetrySinkConfig?: never;
    }
  | {
      antennaDownlinkConfig?: never;
      trackingConfig?: never;
      dataflowEndpointConfig?: never;
      antennaDownlinkDemodDecodeConfig?: never;
      antennaUplinkConfig?: never;
      uplinkEchoConfig?: never;
      s3RecordingConfig: S3RecordingConfig;
      telemetrySinkConfig?: never;
    }
  | {
      antennaDownlinkConfig?: never;
      trackingConfig?: never;
      dataflowEndpointConfig?: never;
      antennaDownlinkDemodDecodeConfig?: never;
      antennaUplinkConfig?: never;
      uplinkEchoConfig?: never;
      s3RecordingConfig?: never;
      telemetrySinkConfig: TelemetrySinkConfig;
    };
const ConfigTypeData = /*@__PURE__*/ __L.at(__c2, 0);
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c2, 1);
export interface CreateConfigRequest {
  name: string;
  configData: ConfigTypeData;
  tags?: { [key: string]: string | undefined };
}
const CreateConfigRequest = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<CreateConfigRequest>;
export type ConfigCapabilityType =
  | "antenna-downlink"
  | "antenna-downlink-demod-decode"
  | "tracking"
  | "dataflow-endpoint"
  | "antenna-uplink"
  | "uplink-echo"
  | "s3-recording"
  | "telemetry-sink"
  | (string & {});
const ConfigCapabilityType = S.String;

export interface ConfigIdResponse {
  configId?: string;
  configType?: ConfigCapabilityType;
  configArn?: string;
}
const ConfigIdResponse = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<ConfigIdResponse>;
export type SubnetList = string[];
const SubnetList = /*@__PURE__*/ __L.at(__c2, 4);
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = SubnetList as any as S.Schema<SecurityGroupIdList>;
export interface SecurityDetails {
  subnetIds: string[];
  securityGroupIds: string[];
  roleArn: string;
}
const SecurityDetails = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<SecurityDetails>;
export interface SocketAddress {
  name: string;
  port: number;
}
const SocketAddress = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<SocketAddress>;
export type EndpointStatus =
  | "created"
  | "creating"
  | "deleted"
  | "deleting"
  | "failed"
  | (string & {});
const EndpointStatus = S.String;

export interface DataflowEndpoint {
  name?: string;
  address?: SocketAddress;
  status?: EndpointStatus;
  mtu?: number;
}
const DataflowEndpoint = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<DataflowEndpoint>;
export interface ConnectionDetails {
  socketAddress: SocketAddress;
  mtu?: number;
}
const ConnectionDetails = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ConnectionDetails>;
export type IpV4Address = string;
export interface IntegerRange {
  minimum: number;
  maximum: number;
}
const IntegerRange = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<IntegerRange>;
export interface RangedSocketAddress {
  name: string;
  portRange: IntegerRange;
}
const RangedSocketAddress = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<RangedSocketAddress>;
export interface RangedConnectionDetails {
  socketAddress: RangedSocketAddress;
  mtu?: number;
}
const RangedConnectionDetails = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<RangedConnectionDetails>;
export type AgentStatus = "SUCCESS" | "FAILED" | "ACTIVE" | "INACTIVE" | (string & {});
const AgentStatus = S.String;

export type AuditResults = "HEALTHY" | "UNHEALTHY" | (string & {});
const AuditResults = S.String;

export interface AwsGroundStationAgentEndpoint {
  name: string;
  egressAddress: ConnectionDetails;
  ingressAddress: RangedConnectionDetails;
  agentStatus?: AgentStatus;
  auditResults?: AuditResults;
}
const AwsGroundStationAgentEndpoint = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<AwsGroundStationAgentEndpoint>;
export interface UplinkConnectionDetails {
  ingressAddressAndPort: ConnectionDetails;
  agentIpAndPortAddress: RangedConnectionDetails;
}
const UplinkConnectionDetails = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<UplinkConnectionDetails>;
export type UplinkDataflowDetails = { agentConnectionDetails: UplinkConnectionDetails };
const UplinkDataflowDetails = /*@__PURE__*/ __L.at(__c3, 6);
export interface UplinkAwsGroundStationAgentEndpointDetails {
  name: string;
  dataflowDetails: UplinkDataflowDetails;
  agentStatus?: AgentStatus;
  auditResults?: AuditResults;
}
const UplinkAwsGroundStationAgentEndpointDetails = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<UplinkAwsGroundStationAgentEndpointDetails>;
export interface DownlinkConnectionDetails {
  agentIpAndPortAddress: RangedConnectionDetails;
  egressAddressAndPort: ConnectionDetails;
}
const DownlinkConnectionDetails = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<DownlinkConnectionDetails>;
export type DownlinkDataflowDetails = { agentConnectionDetails: DownlinkConnectionDetails };
const DownlinkDataflowDetails = /*@__PURE__*/ __L.at(__c4, 1);
export interface DownlinkAwsGroundStationAgentEndpointDetails {
  name: string;
  dataflowDetails: DownlinkDataflowDetails;
  agentStatus?: AgentStatus;
  auditResults?: AuditResults;
}
const DownlinkAwsGroundStationAgentEndpointDetails = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DownlinkAwsGroundStationAgentEndpointDetails>;
export type CapabilityHealth = "HEALTHY" | "UNHEALTHY" | (string & {});
const CapabilityHealth = S.String;

export type CapabilityHealthReason =
  | "NO_REGISTERED_AGENT"
  | "INVALID_IP_OWNERSHIP"
  | "NOT_AUTHORIZED_TO_CREATE_SLR"
  | "UNVERIFIED_IP_OWNERSHIP"
  | "INITIALIZING_DATAPLANE"
  | "DATAPLANE_FAILURE"
  | "HEALTHY"
  | (string & {});
const CapabilityHealthReason = S.String;

export type CapabilityHealthReasonList = CapabilityHealthReason[];
const CapabilityHealthReasonList = /*@__PURE__*/ __L.at(__c4, 3);
export interface EndpointDetails {
  securityDetails?: SecurityDetails;
  endpoint?: DataflowEndpoint;
  awsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint;
  uplinkAwsGroundStationAgentEndpoint?: UplinkAwsGroundStationAgentEndpointDetails;
  downlinkAwsGroundStationAgentEndpoint?: DownlinkAwsGroundStationAgentEndpointDetails;
  healthStatus?: CapabilityHealth;
  healthReasons?: CapabilityHealthReason[];
}
const EndpointDetails = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<EndpointDetails>;
export type EndpointDetailsList = EndpointDetails[];
const EndpointDetailsList = /*@__PURE__*/ __L.at(__c4, 5);
export type DataflowEndpointGroupDurationInSeconds = number;
export interface CreateDataflowEndpointGroupRequest {
  endpointDetails: EndpointDetails[];
  tags?: { [key: string]: string | undefined };
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
}
const CreateDataflowEndpointGroupRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateDataflowEndpointGroupRequest>;
export interface DataflowEndpointGroupIdResponse {
  dataflowEndpointGroupId?: string;
}
const DataflowEndpointGroupIdResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DataflowEndpointGroupIdResponse>;
export interface UplinkAwsGroundStationAgentEndpoint {
  name: string;
  dataflowDetails: UplinkDataflowDetails;
}
const UplinkAwsGroundStationAgentEndpoint = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<UplinkAwsGroundStationAgentEndpoint>;
export interface DownlinkAwsGroundStationAgentEndpoint {
  name: string;
  dataflowDetails: DownlinkDataflowDetails;
}
const DownlinkAwsGroundStationAgentEndpoint = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DownlinkAwsGroundStationAgentEndpoint>;
export type CreateEndpointDetails =
  | {
      uplinkAwsGroundStationAgentEndpoint: UplinkAwsGroundStationAgentEndpoint;
      downlinkAwsGroundStationAgentEndpoint?: never;
    }
  | {
      uplinkAwsGroundStationAgentEndpoint?: never;
      downlinkAwsGroundStationAgentEndpoint: DownlinkAwsGroundStationAgentEndpoint;
    };
const CreateEndpointDetails = /*@__PURE__*/ __L.at(__c5, 2);
export type CreateEndpointDetailsList = CreateEndpointDetails[];
const CreateEndpointDetailsList = /*@__PURE__*/ __L.at(__c5, 3);
export interface CreateDataflowEndpointGroupV2Request {
  endpoints: CreateEndpointDetails[];
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
  tags?: { [key: string]: string | undefined };
}
const CreateDataflowEndpointGroupV2Request = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<CreateDataflowEndpointGroupV2Request>;
export interface CreateDataflowEndpointGroupV2Response {
  dataflowEndpointGroupId?: string;
}
const CreateDataflowEndpointGroupV2Response =
  DataflowEndpointGroupIdResponse as any as S.Schema<CreateDataflowEndpointGroupV2Response>;
export type CustomerEphemerisPriority = number;
export type KeyArn = string;
export type S3BucketName = string;
export type S3ObjectKey = string;
export type S3VersionId = string;
export interface S3Object {
  bucket?: string;
  key?: string;
  version?: string;
}
const S3Object = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<S3Object>;
export type TleLineOne = string;
export type TleLineTwo = string;
export interface TimeRange {
  startTime: Date;
  endTime: Date;
}
const TimeRange = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<TimeRange>;
export interface TLEData {
  tleLine1: string;
  tleLine2: string;
  validTimeRange: TimeRange;
}
const TLEData = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<TLEData>;
export type TLEDataList = TLEData[];
const TLEDataList = /*@__PURE__*/ __L.at(__c6, 0);
export interface TLEEphemeris {
  s3Object?: S3Object;
  tleData?: TLEData[];
}
const TLEEphemeris = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<TLEEphemeris>;
export type UnboundedString = string;
export interface OEMEphemeris {
  s3Object?: S3Object;
  oemData?: string;
}
const OEMEphemeris = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<OEMEphemeris>;
export type GroundStationName = string;
export type AngleUnits = "DEGREE_ANGLE" | "RADIAN" | (string & {});
const AngleUnits = S.String;

export interface ISO8601TimeRange {
  startTime: Date;
  endTime: Date;
}
const ISO8601TimeRange = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ISO8601TimeRange>;
export interface TimeAzEl {
  dt: number;
  az: number;
  el: number;
}
const TimeAzEl = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<TimeAzEl>;
export type TimeAzElList = TimeAzEl[];
const TimeAzElList = /*@__PURE__*/ __L.at(__c6, 5);
export interface AzElSegment {
  referenceEpoch: Date;
  validTimeRange: ISO8601TimeRange;
  azElList: TimeAzEl[];
}
const AzElSegment = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<AzElSegment>;
export type AzElSegmentList = AzElSegment[];
const AzElSegmentList = /*@__PURE__*/ __L.at(__c6, 7);
export interface AzElSegments {
  angleUnit: AngleUnits;
  azElSegmentList: AzElSegment[];
}
const AzElSegments = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<AzElSegments>;
export type AzElSegmentsData =
  | { s3Object: S3Object; azElData?: never }
  | { s3Object?: never; azElData: AzElSegments };
const AzElSegmentsData = /*@__PURE__*/ __L.at(__c7, 1);
export interface AzElEphemeris {
  groundStation: string;
  data: AzElSegmentsData;
}
const AzElEphemeris = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<AzElEphemeris>;
export type EphemerisData =
  | { tle: TLEEphemeris; oem?: never; azEl?: never }
  | { tle?: never; oem: OEMEphemeris; azEl?: never }
  | { tle?: never; oem?: never; azEl: AzElEphemeris };
const EphemerisData = /*@__PURE__*/ __L.at(__c7, 3);
export interface CreateEphemerisRequest {
  satelliteId?: string;
  enabled?: boolean;
  priority?: number;
  expirationTime?: Date;
  name: string;
  kmsKeyArn?: string;
  ephemeris?: EphemerisData;
  tags?: { [key: string]: string | undefined };
}
const CreateEphemerisRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<CreateEphemerisRequest>;
export interface EphemerisIdResponse {
  ephemerisId?: string;
}
const EphemerisIdResponse = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<EphemerisIdResponse>;
export type DurationInSeconds = number;
export type PositiveDurationInSeconds = number;
export type DataflowEdge = string[];
const DataflowEdge = SubnetList as any as S.Schema<DataflowEdge>;
export type DataflowEdgeList = string[][];
const DataflowEdgeList = /*@__PURE__*/ __L.at(__c7, 6);
export type KeyAliasArn = string;
export type KeyAliasName = string;
export type KmsKey =
  | { kmsKeyArn: string; kmsAliasArn?: never; kmsAliasName?: never }
  | { kmsKeyArn?: never; kmsAliasArn: string; kmsAliasName?: never }
  | { kmsKeyArn?: never; kmsAliasArn?: never; kmsAliasName: string };
const KmsKey = /*@__PURE__*/ __L.at(__c7, 7);
export interface CreateMissionProfileRequest {
  name: string;
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
  minimumViableContactDurationSeconds: number;
  dataflowEdges: string[][];
  trackingConfigArn: string;
  telemetrySinkConfigArn?: string;
  tags?: { [key: string]: string | undefined };
  streamsKmsKey?: KmsKey;
  streamsKmsRole?: string;
}
const CreateMissionProfileRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<CreateMissionProfileRequest>;
export interface MissionProfileIdResponse {
  missionProfileId?: string;
}
const MissionProfileIdResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<MissionProfileIdResponse>;
export interface DeleteConfigRequest {
  configId: string;
  configType: ConfigCapabilityType;
}
const DeleteConfigRequest = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<DeleteConfigRequest>;
export interface DeleteDataflowEndpointGroupRequest {
  dataflowEndpointGroupId: string;
}
const DeleteDataflowEndpointGroupRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteDataflowEndpointGroupRequest>;
export interface DeleteEphemerisRequest {
  ephemerisId: string;
}
const DeleteEphemerisRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DeleteEphemerisRequest>;
export interface DeleteMissionProfileRequest {
  missionProfileId: string;
}
const DeleteMissionProfileRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DeleteMissionProfileRequest>;
export interface DescribeContactRequest {
  contactId: string;
}
const DescribeContactRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeContactRequest>;
export type MissionProfileArn = string;
export type SatelliteArn = string;
export type ContactStatus =
  | "SCHEDULING"
  | "FAILED_TO_SCHEDULE"
  | "SCHEDULED"
  | "CANCELLED"
  | "AWS_CANCELLED"
  | "PREPASS"
  | "PASS"
  | "POSTPASS"
  | "COMPLETED"
  | "FAILED"
  | "AVAILABLE"
  | "CANCELLING"
  | "AWS_FAILED"
  | (string & {});
const ContactStatus = S.String;

export interface Elevation {
  value: number;
  unit: AngleUnits;
}
const Elevation = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<Elevation>;
export interface AntennaDemodDecodeDetails {
  outputNode?: string;
}
const AntennaDemodDecodeDetails = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<AntennaDemodDecodeDetails>;
export interface S3RecordingDetails {
  bucketArn?: string;
  keyTemplate?: string;
}
const S3RecordingDetails = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<S3RecordingDetails>;
export type ConfigDetails =
  | {
      endpointDetails: EndpointDetails;
      antennaDemodDecodeDetails?: never;
      s3RecordingDetails?: never;
    }
  | {
      endpointDetails?: never;
      antennaDemodDecodeDetails: AntennaDemodDecodeDetails;
      s3RecordingDetails?: never;
    }
  | {
      endpointDetails?: never;
      antennaDemodDecodeDetails?: never;
      s3RecordingDetails: S3RecordingDetails;
    };
const ConfigDetails = /*@__PURE__*/ __L.at(__c9, 2);
export interface Source {
  configType?: ConfigCapabilityType;
  configId?: string;
  configDetails?: ConfigDetails;
  dataflowSourceRegion?: string;
}
const Source = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<Source>;
export interface Destination {
  configType?: ConfigCapabilityType;
  configId?: string;
  configDetails?: ConfigDetails;
  dataflowDestinationRegion?: string;
}
const Destination = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<Destination>;
export interface DataflowDetail {
  source?: Source;
  destination?: Destination;
  errorMessage?: string;
}
const DataflowDetail = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<DataflowDetail>;
export type DataflowList = DataflowDetail[];
const DataflowList = /*@__PURE__*/ __L.at(__c9, 6);
export interface AzElProgramTrackSettings {
  ephemerisId: string;
}
const AzElProgramTrackSettings = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<AzElProgramTrackSettings>;
export interface OemProgramTrackSettings {
  ephemerisId: string;
}
const OemProgramTrackSettings =
  AzElProgramTrackSettings as any as S.Schema<OemProgramTrackSettings>;
export interface TleProgramTrackSettings {
  ephemerisId: string;
}
const TleProgramTrackSettings =
  AzElProgramTrackSettings as any as S.Schema<TleProgramTrackSettings>;
export type ProgramTrackSettings =
  | { azEl: AzElProgramTrackSettings; oem?: never; tle?: never }
  | { azEl?: never; oem: OemProgramTrackSettings; tle?: never }
  | { azEl?: never; oem?: never; tle: TleProgramTrackSettings };
const ProgramTrackSettings = /*@__PURE__*/ __L.at(__c10, 0);
export interface TrackingOverrides {
  programTrackSettings?: ProgramTrackSettings;
}
const TrackingOverrides = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<TrackingOverrides>;
export type EphemerisType = "TLE" | "OEM" | "AZ_EL" | "SERVICE_MANAGED" | (string & {});
const EphemerisType = S.String;

export interface EphemerisResponseData {
  ephemerisId?: string;
  ephemerisType: EphemerisType;
}
const EphemerisResponseData = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<EphemerisResponseData>;
export type VersionStatus =
  | "UPDATING"
  | "ACTIVE"
  | "SUPERSEDED"
  | "FAILED_TO_UPDATE"
  | (string & {});
const VersionStatus = S.String;

export type VersionFailureReasonCode =
  | "INTERNAL_ERROR"
  | "INVALID_SATELLITE_ARN"
  | "INVALID_UPDATE_CONTACT_REQUEST"
  | "EPHEMERIS_NOT_FOUND"
  | "EPHEMERIS_TIME_RANGE_INVALID"
  | "EPHEMERIS_NOT_ENABLED"
  | "SATELLITE_DOES_NOT_MATCH_EPHEMERIS"
  | "NOT_ONBOARDED_TO_AZEL_EPHEMERIS"
  | "AZEL_EPHEMERIS_NOT_FOUND"
  | "AZEL_EPHEMERIS_WRONG_GROUND_STATION"
  | "AZEL_EPHEMERIS_INVALID_STATUS"
  | "AZEL_EPHEMERIS_TIME_RANGE_INVALID"
  | (string & {});
export type VersionFailureReasonCodes = VersionFailureReasonCode[];
const VersionFailureReasonCodes =
  CapabilityHealthReasonList as any as S.Schema<VersionFailureReasonCodes>;
export interface ContactVersion {
  versionId?: number;
  created?: Date;
  activated?: Date;
  superseded?: Date;
  lastUpdated?: Date;
  status?: VersionStatus;
  failureCodes?: VersionFailureReasonCode[];
  failureMessage?: string;
}
const ContactVersion = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<ContactVersion>;
export interface DescribeContactResponse {
  contactId?: string;
  missionProfileArn?: string;
  satelliteArn?: string;
  startTime?: Date;
  endTime?: Date;
  prePassStartTime?: Date;
  postPassEndTime?: Date;
  groundStation?: string;
  contactStatus?: ContactStatus;
  errorMessage?: string;
  maximumElevation?: Elevation;
  tags?: { [key: string]: string | undefined };
  region?: string;
  dataflowList?: DataflowDetail[];
  visibilityStartTime?: Date;
  visibilityEndTime?: Date;
  trackingOverrides?: TrackingOverrides;
  ephemeris?: EphemerisResponseData;
  version?: ContactVersion;
}
const DescribeContactResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<DescribeContactResponse>;
export interface DescribeContactVersionRequest {
  contactId: string;
  versionId: number;
}
const DescribeContactVersionRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<DescribeContactVersionRequest>;
export interface DescribeContactVersionResponse {
  contactId?: string;
  missionProfileArn?: string;
  satelliteArn?: string;
  startTime?: Date;
  endTime?: Date;
  prePassStartTime?: Date;
  postPassEndTime?: Date;
  groundStation?: string;
  contactStatus?: ContactStatus;
  errorMessage?: string;
  maximumElevation?: Elevation;
  tags?: { [key: string]: string | undefined };
  region?: string;
  dataflowList?: DataflowDetail[];
  visibilityStartTime?: Date;
  visibilityEndTime?: Date;
  trackingOverrides?: TrackingOverrides;
  ephemeris?: EphemerisResponseData;
  version?: ContactVersion;
}
const DescribeContactVersionResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<DescribeContactVersionResponse>;
export interface DescribeEphemerisRequest {
  ephemerisId: string;
}
const DescribeEphemerisRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DescribeEphemerisRequest>;
export type EphemerisStatus =
  | "VALIDATING"
  | "INVALID"
  | "ERROR"
  | "ENABLED"
  | "DISABLED"
  | "EXPIRED"
  | (string & {});
const EphemerisStatus = S.String;

export type EphemerisPriority = number;
export interface EphemerisDescription {
  sourceS3Object?: S3Object;
  ephemerisData?: string;
}
const EphemerisDescription = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<EphemerisDescription>;
export type EphemerisTypeDescription =
  | { tle: EphemerisDescription; oem?: never; azEl?: never }
  | { tle?: never; oem: EphemerisDescription; azEl?: never }
  | { tle?: never; oem?: never; azEl: EphemerisDescription };
const EphemerisTypeDescription = /*@__PURE__*/ __L.at(__c11, 1);
export type EphemerisInvalidReason =
  | "METADATA_INVALID"
  | "TIME_RANGE_INVALID"
  | "TRAJECTORY_INVALID"
  | "KMS_KEY_INVALID"
  | "VALIDATION_ERROR"
  | (string & {});
const EphemerisInvalidReason = S.String;

export type EphemerisErrorCode =
  | "INTERNAL_ERROR"
  | "MISMATCHED_SATCAT_ID"
  | "OEM_VERSION_UNSUPPORTED"
  | "ORIGINATOR_MISSING"
  | "CREATION_DATE_MISSING"
  | "OBJECT_NAME_MISSING"
  | "OBJECT_ID_MISSING"
  | "REF_FRAME_UNSUPPORTED"
  | "REF_FRAME_EPOCH_UNSUPPORTED"
  | "TIME_SYSTEM_UNSUPPORTED"
  | "CENTER_BODY_UNSUPPORTED"
  | "INTERPOLATION_MISSING"
  | "INTERPOLATION_DEGREE_INVALID"
  | "AZ_EL_SEGMENT_LIST_MISSING"
  | "INSUFFICIENT_TIME_AZ_EL"
  | "START_TIME_IN_FUTURE"
  | "END_TIME_IN_PAST"
  | "EXPIRATION_TIME_TOO_EARLY"
  | "START_TIME_METADATA_TOO_EARLY"
  | "STOP_TIME_METADATA_TOO_LATE"
  | "AZ_EL_SEGMENT_END_TIME_BEFORE_START_TIME"
  | "AZ_EL_SEGMENT_TIMES_OVERLAP"
  | "AZ_EL_SEGMENTS_OUT_OF_ORDER"
  | "TIME_AZ_EL_ITEMS_OUT_OF_ORDER"
  | "MEAN_MOTION_INVALID"
  | "TIME_AZ_EL_AZ_RADIAN_RANGE_INVALID"
  | "TIME_AZ_EL_EL_RADIAN_RANGE_INVALID"
  | "TIME_AZ_EL_AZ_DEGREE_RANGE_INVALID"
  | "TIME_AZ_EL_EL_DEGREE_RANGE_INVALID"
  | "TIME_AZ_EL_ANGLE_UNITS_INVALID"
  | "INSUFFICIENT_KMS_PERMISSIONS"
  | "FILE_FORMAT_INVALID"
  | "AZ_EL_SEGMENT_REFERENCE_EPOCH_INVALID"
  | "AZ_EL_SEGMENT_START_TIME_INVALID"
  | "AZ_EL_SEGMENT_END_TIME_INVALID"
  | "AZ_EL_SEGMENT_VALID_TIME_RANGE_INVALID"
  | "AZ_EL_SEGMENT_END_TIME_TOO_LATE"
  | "AZ_EL_TOTAL_DURATION_EXCEEDED"
  | (string & {});
const EphemerisErrorCode = S.String;

export type ErrorString = string;
export interface EphemerisErrorReason {
  errorCode: EphemerisErrorCode;
  errorMessage: string;
}
const EphemerisErrorReason = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<EphemerisErrorReason>;
export type EphemerisErrorReasonList = EphemerisErrorReason[];
const EphemerisErrorReasonList = /*@__PURE__*/ __L.at(__c11, 3);
export interface DescribeEphemerisResponse {
  ephemerisId?: string;
  satelliteId?: string;
  status?: EphemerisStatus;
  priority?: number;
  creationTime?: Date;
  enabled?: boolean;
  name?: string;
  tags?: { [key: string]: string | undefined };
  suppliedData?: EphemerisTypeDescription;
  invalidReason?: EphemerisInvalidReason;
  errorReasons?: EphemerisErrorReason[];
}
const DescribeEphemerisResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<DescribeEphemerisResponse>;
export interface GetAgentConfigurationRequest {
  agentId: string;
}
const GetAgentConfigurationRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<GetAgentConfigurationRequest>;
export interface GetAgentConfigurationResponse {
  agentId?: string;
  taskingDocument?: string;
}
const GetAgentConfigurationResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetAgentConfigurationResponse>;
export interface GetAgentTaskResponseUrlRequest {
  agentId: string;
  taskId: string;
}
const GetAgentTaskResponseUrlRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetAgentTaskResponseUrlRequest>;
export interface GetAgentTaskResponseUrlResponse {
  agentId: string;
  taskId: string;
  presignedLogUrl: string;
}
const GetAgentTaskResponseUrlResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<GetAgentTaskResponseUrlResponse>;
export interface GetConfigRequest {
  configId: string;
  configType: ConfigCapabilityType;
}
const GetConfigRequest = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<GetConfigRequest>;
export interface GetConfigResponse {
  configId: string;
  configArn: string;
  name: string;
  configType?: ConfigCapabilityType;
  configData: ConfigTypeData;
  tags?: { [key: string]: string | undefined };
}
const GetConfigResponse = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<GetConfigResponse>;
export interface GetDataflowEndpointGroupRequest {
  dataflowEndpointGroupId: string;
}
const GetDataflowEndpointGroupRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<GetDataflowEndpointGroupRequest>;
export type DataflowEndpointGroupArn = string;
export interface GetDataflowEndpointGroupResponse {
  dataflowEndpointGroupId?: string;
  dataflowEndpointGroupArn?: string;
  endpointsDetails?: EndpointDetails[];
  tags?: { [key: string]: string | undefined };
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
}
const GetDataflowEndpointGroupResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<GetDataflowEndpointGroupResponse>;
export type Month = number;
export type Year = number;
export interface GetMinuteUsageRequest {
  month: number;
  year: number;
}
const GetMinuteUsageRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<GetMinuteUsageRequest>;
export interface GetMinuteUsageResponse {
  isReservedMinutesCustomer?: boolean;
  totalReservedMinuteAllocation?: number;
  upcomingMinutesScheduled?: number;
  totalScheduledMinutes?: number;
  estimatedMinutesRemaining?: number;
}
const GetMinuteUsageResponse = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<GetMinuteUsageResponse>;
export interface GetMissionProfileRequest {
  missionProfileId: string;
}
const GetMissionProfileRequest = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<GetMissionProfileRequest>;
export type AWSRegion = string;
export interface GetMissionProfileResponse {
  missionProfileId?: string;
  missionProfileArn?: string;
  name?: string;
  region?: string;
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
  minimumViableContactDurationSeconds?: number;
  dataflowEdges?: string[][];
  trackingConfigArn?: string;
  telemetrySinkConfigArn?: string;
  tags?: { [key: string]: string | undefined };
  streamsKmsKey?: KmsKey;
  streamsKmsRole?: string;
}
const GetMissionProfileResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<GetMissionProfileResponse>;
export interface GetSatelliteRequest {
  satelliteId: string;
}
const GetSatelliteRequest = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<GetSatelliteRequest>;
export type NoradSatelliteID = number;
export type GroundStationIdList = string[];
const GroundStationIdList = SubnetList as any as S.Schema<GroundStationIdList>;
export type EphemerisSource = "CUSTOMER_PROVIDED" | "SPACE_TRACK" | (string & {});
const EphemerisSource = S.String;

export interface EphemerisMetaData {
  source: EphemerisSource;
  ephemerisId?: string;
  epoch?: Date;
  name?: string;
}
const EphemerisMetaData = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<EphemerisMetaData>;
export interface GetSatelliteResponse {
  satelliteId?: string;
  satelliteArn?: string;
  noradSatelliteID?: number;
  groundStations?: string[];
  currentEphemeris?: EphemerisMetaData;
}
const GetSatelliteResponse = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<GetSatelliteResponse>;
export type PaginationMaxResults = number;
export type PaginationToken = string;
export interface ListAntennasRequest {
  groundStationId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAntennasRequest = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<ListAntennasRequest>;
export type AntennaName = string;
export interface AntennaListItem {
  groundStationName: string;
  antennaName: string;
  region: string;
}
const AntennaListItem = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<AntennaListItem>;
export type AntennaList = AntennaListItem[];
const AntennaList = /*@__PURE__*/ __L.at(__c13, 6);
export interface ListAntennasResponse {
  antennaList: AntennaListItem[];
  nextToken?: string;
}
const ListAntennasResponse = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<ListAntennasResponse>;
export interface ListConfigsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListConfigsRequest = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<ListConfigsRequest>;
export interface ConfigListItem {
  configId?: string;
  configType?: ConfigCapabilityType;
  configArn?: string;
  name?: string;
}
const ConfigListItem = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<ConfigListItem>;
export type ConfigList = ConfigListItem[];
const ConfigList = /*@__PURE__*/ __L.at(__c14, 2);
export interface ListConfigsResponse {
  nextToken?: string;
  configList?: ConfigListItem[];
}
const ListConfigsResponse = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<ListConfigsResponse>;
export type StatusList = ContactStatus[];
const StatusList = CapabilityHealthReasonList as any as S.Schema<StatusList>;
export interface AzElEphemerisFilter {
  id: string;
}
const AzElEphemerisFilter = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<AzElEphemerisFilter>;
export type EphemerisFilter = { azEl: AzElEphemerisFilter };
const EphemerisFilter = /*@__PURE__*/ __L.at(__c14, 5);
export interface ListContactsRequest {
  maxResults?: number;
  nextToken?: string;
  statusList: ContactStatus[];
  startTime: Date;
  endTime: Date;
  groundStation?: string;
  satelliteArn?: string;
  missionProfileArn?: string;
  ephemeris?: EphemerisFilter;
}
const ListContactsRequest = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<ListContactsRequest>;
export interface ContactData {
  contactId?: string;
  missionProfileArn?: string;
  satelliteArn?: string;
  startTime?: Date;
  endTime?: Date;
  prePassStartTime?: Date;
  postPassEndTime?: Date;
  groundStation?: string;
  contactStatus?: ContactStatus;
  errorMessage?: string;
  maximumElevation?: Elevation;
  region?: string;
  tags?: { [key: string]: string | undefined };
  visibilityStartTime?: Date;
  visibilityEndTime?: Date;
  ephemeris?: EphemerisResponseData;
  version?: ContactVersion;
}
const ContactData = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<ContactData>;
export type ContactList = ContactData[];
const ContactList = /*@__PURE__*/ __L.at(__c15, 0);
export interface ListContactsResponse {
  nextToken?: string;
  contactList?: ContactData[];
}
const ListContactsResponse = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListContactsResponse>;
export interface ListContactVersionsRequest {
  contactId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListContactVersionsRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListContactVersionsRequest>;
export type ContactVersionsList = ContactVersion[];
const ContactVersionsList = /*@__PURE__*/ __L.at(__c15, 3);
export interface ListContactVersionsResponse {
  nextToken?: string;
  contactVersionsList?: ContactVersion[];
}
const ListContactVersionsResponse = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<ListContactVersionsResponse>;
export interface ListDataflowEndpointGroupsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListDataflowEndpointGroupsRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListDataflowEndpointGroupsRequest>;
export interface DataflowEndpointListItem {
  dataflowEndpointGroupId?: string;
  dataflowEndpointGroupArn?: string;
}
const DataflowEndpointListItem = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<DataflowEndpointListItem>;
export type DataflowEndpointGroupList = DataflowEndpointListItem[];
const DataflowEndpointGroupList = /*@__PURE__*/ __L.at(__c15, 7);
export interface ListDataflowEndpointGroupsResponse {
  nextToken?: string;
  dataflowEndpointGroupList?: DataflowEndpointListItem[];
}
const ListDataflowEndpointGroupsResponse = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ListDataflowEndpointGroupsResponse>;
export type EphemerisStatusList = EphemerisStatus[];
const EphemerisStatusList = CapabilityHealthReasonList as any as S.Schema<EphemerisStatusList>;
export interface ListEphemeridesRequest {
  satelliteId?: string;
  ephemerisType?: EphemerisType;
  startTime: Date;
  endTime: Date;
  statusList?: EphemerisStatus[];
  maxResults?: number;
  nextToken?: string;
}
const ListEphemeridesRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ListEphemeridesRequest>;
export interface EphemerisItem {
  ephemerisId?: string;
  ephemerisType?: EphemerisType;
  status?: EphemerisStatus;
  priority?: number;
  enabled?: boolean;
  creationTime?: Date;
  name?: string;
  sourceS3Object?: S3Object;
}
const EphemerisItem = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<EphemerisItem>;
export type EphemeridesList = EphemerisItem[];
const EphemeridesList = /*@__PURE__*/ __L.at(__c16, 3);
export interface ListEphemeridesResponse {
  nextToken?: string;
  ephemerides?: EphemerisItem[];
}
const ListEphemeridesResponse = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<ListEphemeridesResponse>;
export type ReservationType = "MAINTENANCE" | "CONTACT" | (string & {});
const ReservationType = S.String;

export type ReservationTypeFilterList = ReservationType[];
const ReservationTypeFilterList =
  CapabilityHealthReasonList as any as S.Schema<ReservationTypeFilterList>;
export interface ListGroundStationReservationsRequest {
  groundStationId: string;
  startTime: Date;
  endTime: Date;
  reservationTypes?: ReservationType[];
  maxResults?: number;
  nextToken?: string;
}
const ListGroundStationReservationsRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ListGroundStationReservationsRequest>;
export type MaintenanceType = "PLANNED" | "UNPLANNED" | (string & {});
const MaintenanceType = S.String;

export interface MaintenanceReservationDetails {
  maintenanceType: MaintenanceType;
}
const MaintenanceReservationDetails = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<MaintenanceReservationDetails>;
export interface ContactReservationDetails {
  contactId?: string;
}
const ContactReservationDetails = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<ContactReservationDetails>;
export type ReservationDetails =
  | { maintenance: MaintenanceReservationDetails; contact?: never }
  | { maintenance?: never; contact: ContactReservationDetails };
const ReservationDetails = /*@__PURE__*/ __L.at(__c17, 0);
export interface GroundStationReservationListItem {
  reservationType: ReservationType;
  groundStationId: string;
  antennaName: string;
  startTime: Date;
  endTime: Date;
  reservationDetails: ReservationDetails;
}
const GroundStationReservationListItem = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<GroundStationReservationListItem>;
export type GroundStationReservationList = GroundStationReservationListItem[];
const GroundStationReservationList = /*@__PURE__*/ __L.at(__c17, 2);
export interface ListGroundStationReservationsResponse {
  reservationList: GroundStationReservationListItem[];
  nextToken?: string;
}
const ListGroundStationReservationsResponse = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ListGroundStationReservationsResponse>;
export interface ListGroundStationsRequest {
  satelliteId?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListGroundStationsRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<ListGroundStationsRequest>;
export interface GroundStationData {
  groundStationId?: string;
  groundStationName?: string;
  region?: string;
}
const GroundStationData = /*@__PURE__*/ __L.at(__c17, 5) as any as S.Schema<GroundStationData>;
export type GroundStationList = GroundStationData[];
const GroundStationList = /*@__PURE__*/ __L.at(__c17, 6);
export interface ListGroundStationsResponse {
  nextToken?: string;
  groundStationList?: GroundStationData[];
}
const ListGroundStationsResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ListGroundStationsResponse>;
export interface ListMissionProfilesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListMissionProfilesRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<ListMissionProfilesRequest>;
export interface MissionProfileListItem {
  missionProfileId?: string;
  missionProfileArn?: string;
  region?: string;
  name?: string;
}
const MissionProfileListItem = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<MissionProfileListItem>;
export type MissionProfileList = MissionProfileListItem[];
const MissionProfileList = /*@__PURE__*/ __L.at(__c18, 2);
export interface ListMissionProfilesResponse {
  nextToken?: string;
  missionProfileList?: MissionProfileListItem[];
}
const ListMissionProfilesResponse = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<ListMissionProfilesResponse>;
export interface ListSatellitesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListSatellitesRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<ListSatellitesRequest>;
export interface SatelliteListItem {
  satelliteId?: string;
  satelliteArn?: string;
  noradSatelliteID?: number;
  groundStations?: string[];
  currentEphemeris?: EphemerisMetaData;
}
const SatelliteListItem = GetSatelliteResponse as any as S.Schema<SatelliteListItem>;
export type SatelliteList = SatelliteListItem[];
const SatelliteList = /*@__PURE__*/ __L.at(__c18, 5);
export interface ListSatellitesResponse {
  nextToken?: string;
  satellites?: SatelliteListItem[];
}
const ListSatellitesResponse = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<ListSatellitesResponse>;
export type AnyArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export type IpAddressList = string[];
const IpAddressList = SubnetList as any as S.Schema<IpAddressList>;
export type CapabilityArn = string;
export type CapabilityArnList = string[];
const CapabilityArnList = SubnetList as any as S.Schema<CapabilityArnList>;
export interface DiscoveryData {
  publicIpAddresses: string[];
  privateIpAddresses: string[];
  capabilityArns: string[];
}
const DiscoveryData = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<DiscoveryData>;
export type VersionString = string;
export type InstanceId = string;
export type InstanceType = string;
export type AgentCpuCoresList = number[];
const AgentCpuCoresList = /*@__PURE__*/ __L.at(__c19, 2);
export type ComponentTypeString = string;
export type VersionStringList = string[];
const VersionStringList = SubnetList as any as S.Schema<VersionStringList>;
export interface ComponentVersion {
  componentType: string;
  versions: string[];
}
const ComponentVersion = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<ComponentVersion>;
export type ComponentVersionList = ComponentVersion[];
const ComponentVersionList = /*@__PURE__*/ __L.at(__c19, 4);
export interface AgentDetails {
  agentVersion: string;
  instanceId: string;
  instanceType: string;
  reservedCpuCores?: number[];
  agentCpuCores?: number[];
  componentVersions: ComponentVersion[];
}
const AgentDetails = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<AgentDetails>;
export interface RegisterAgentRequest {
  discoveryData: DiscoveryData;
  agentDetails: AgentDetails;
  tags?: { [key: string]: string | undefined };
}
const RegisterAgentRequest = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<RegisterAgentRequest>;
export interface RegisterAgentResponse {
  agentId?: string;
}
const RegisterAgentResponse = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<RegisterAgentResponse>;
export interface ReserveContactRequest {
  missionProfileArn: string;
  satelliteArn?: string;
  startTime: Date;
  endTime: Date;
  groundStation: string;
  tags?: { [key: string]: string | undefined };
  trackingOverrides?: TrackingOverrides;
}
const ReserveContactRequest = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ReserveContactRequest>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = SubnetList as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export type SignatureMap = { [key: string]: boolean | undefined };
const SignatureMap = /*@__PURE__*/ __L.at(__c20, 4);
export interface AggregateStatus {
  status: AgentStatus;
  signatureMap?: { [key: string]: boolean | undefined };
}
const AggregateStatus = /*@__PURE__*/ __L.at(__c20, 5) as any as S.Schema<AggregateStatus>;
export interface ComponentStatusData {
  componentType: string;
  capabilityArn: string;
  status: AgentStatus;
  bytesSent?: number;
  bytesReceived?: number;
  packetsDropped?: number;
  dataflowId: string;
}
const ComponentStatusData = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<ComponentStatusData>;
export type ComponentStatusList = ComponentStatusData[];
const ComponentStatusList = /*@__PURE__*/ __L.at(__c20, 7);
export interface UpdateAgentStatusRequest {
  agentId: string;
  taskId: string;
  aggregateStatus: AggregateStatus;
  componentStatuses: ComponentStatusData[];
}
const UpdateAgentStatusRequest = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<UpdateAgentStatusRequest>;
export interface UpdateAgentStatusResponse {
  agentId: string;
}
const UpdateAgentStatusResponse = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<UpdateAgentStatusResponse>;
export interface UpdateConfigRequest {
  configId: string;
  name: string;
  configType: ConfigCapabilityType;
  configData: ConfigTypeData;
}
const UpdateConfigRequest = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<UpdateConfigRequest>;
export type ClientToken = string;
export interface UpdateContactRequest {
  contactId: string;
  clientToken?: string;
  trackingOverrides?: TrackingOverrides;
  satelliteArn?: string;
}
const UpdateContactRequest = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<UpdateContactRequest>;
export interface UpdateContactResponse {
  contactId?: string;
  versionId?: number;
}
const UpdateContactResponse = ContactIdResponse as any as S.Schema<UpdateContactResponse>;
export interface UpdateEphemerisRequest {
  ephemerisId: string;
  enabled: boolean;
  name?: string;
  priority?: number;
}
const UpdateEphemerisRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<UpdateEphemerisRequest>;
export interface UpdateMissionProfileRequest {
  missionProfileId: string;
  name?: string;
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
  minimumViableContactDurationSeconds?: number;
  dataflowEdges?: string[][];
  trackingConfigArn?: string;
  telemetrySinkConfigArn?: string;
  streamsKmsKey?: KmsKey;
  streamsKmsRole?: string;
}
const UpdateMissionProfileRequest = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<UpdateMissionProfileRequest>;
export type CancelContactError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Cancels or stops a contact with a specified contact ID based on its position in the contact lifecycle.
 *
 * For contacts that:
 *
 * - Have yet to start, the contact will be cancelled.
 *
 * - Have started but have yet to finish, the contact will be stopped.
 */
export const cancelContact: API.OperationMethod<
  CancelContactRequest,
  ContactIdResponse,
  CancelContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelContactRequest,
  output: ContactIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelContact",
}));

export type CreateConfigError =
  | DependencyException
  | InvalidParameterException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a `Config` with the specified `configData` parameters.
 *
 * Only one type of `configData` can be specified.
 */
export const createConfig: API.OperationMethod<
  CreateConfigRequest,
  ConfigIdResponse,
  CreateConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConfigRequest,
  output: ConfigIdResponse,
  errors: [
    DependencyException,
    InvalidParameterException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfig",
}));

export type CreateDataflowEndpointGroupError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a `DataflowEndpoint` group containing the specified list of ` DataflowEndpoint` objects.
 *
 * The `name` field in each endpoint is used in your mission profile ` DataflowEndpointConfig` to specify which endpoints to use during a contact.
 *
 * When a contact uses multiple `DataflowEndpointConfig` objects, each ` Config` must match a `DataflowEndpoint` in the same group.
 */
export const createDataflowEndpointGroup: API.OperationMethod<
  CreateDataflowEndpointGroupRequest,
  DataflowEndpointGroupIdResponse,
  CreateDataflowEndpointGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDataflowEndpointGroupRequest,
  output: DataflowEndpointGroupIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataflowEndpointGroup",
}));

export type CreateDataflowEndpointGroupV2Error =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Creates a `DataflowEndpoint` group containing the specified list of Ground Station Agent based endpoints.
 *
 * The `name` field in each endpoint is used in your mission profile ` DataflowEndpointConfig` to specify which endpoints to use during a contact.
 *
 * When a contact uses multiple `DataflowEndpointConfig` objects, each ` Config` must match a `DataflowEndpoint` in the same group.
 */
export const createDataflowEndpointGroupV2: API.OperationMethod<
  CreateDataflowEndpointGroupV2Request,
  CreateDataflowEndpointGroupV2Response,
  CreateDataflowEndpointGroupV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDataflowEndpointGroupV2Request,
  output: CreateDataflowEndpointGroupV2Response,
  errors: [
    DependencyException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataflowEndpointGroupV2",
}));

export type CreateEphemerisError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Create an ephemeris with your specified EphemerisData.
 */
export const createEphemeris: API.OperationMethod<
  CreateEphemerisRequest,
  EphemerisIdResponse,
  CreateEphemerisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEphemerisRequest,
  output: EphemerisIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEphemeris",
}));

export type CreateMissionProfileError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a mission profile.
 *
 * `dataflowEdges` is a list of lists of strings. Each lower level list of strings has two elements: a *from* ARN and a *to* ARN.
 */
export const createMissionProfile: API.OperationMethod<
  CreateMissionProfileRequest,
  MissionProfileIdResponse,
  CreateMissionProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMissionProfileRequest,
  output: MissionProfileIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMissionProfile",
}));

export type DeleteConfigError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a `Config`.
 */
export const deleteConfig: API.OperationMethod<
  DeleteConfigRequest,
  ConfigIdResponse,
  DeleteConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConfigRequest,
  output: ConfigIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfig",
}));

export type DeleteDataflowEndpointGroupError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a dataflow endpoint group.
 */
export const deleteDataflowEndpointGroup: API.OperationMethod<
  DeleteDataflowEndpointGroupRequest,
  DataflowEndpointGroupIdResponse,
  DeleteDataflowEndpointGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDataflowEndpointGroupRequest,
  output: DataflowEndpointGroupIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataflowEndpointGroup",
}));

export type DeleteEphemerisError =
  | DependencyException
  | InvalidParameterException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Delete an ephemeris.
 */
export const deleteEphemeris: API.OperationMethod<
  DeleteEphemerisRequest,
  EphemerisIdResponse,
  DeleteEphemerisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEphemerisRequest,
  output: EphemerisIdResponse,
  errors: [
    DependencyException,
    InvalidParameterException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEphemeris",
}));

export type DeleteMissionProfileError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a mission profile.
 */
export const deleteMissionProfile: API.OperationMethod<
  DeleteMissionProfileRequest,
  MissionProfileIdResponse,
  DeleteMissionProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMissionProfileRequest,
  output: MissionProfileIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMissionProfile",
}));

export type DescribeContactError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes an existing contact.
 */
export const describeContact: API.OperationMethod<
  DescribeContactRequest,
  DescribeContactResponse,
  DescribeContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeContactRequest,
  output: DescribeContactResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeContact",
}));

export type DescribeContactVersionError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes a specific version of a contact.
 */
export const describeContactVersion: API.OperationMethod<
  DescribeContactVersionRequest,
  DescribeContactVersionResponse,
  DescribeContactVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeContactVersionRequest,
  output: DescribeContactVersionResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeContactVersion",
}));

export type DescribeEphemerisError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieve information about an existing ephemeris.
 */
export const describeEphemeris: API.OperationMethod<
  DescribeEphemerisRequest,
  DescribeEphemerisResponse,
  DescribeEphemerisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEphemerisRequest,
  output: DescribeEphemerisResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEphemeris",
}));

export type GetAgentConfigurationError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * For use by AWS Ground Station Agent and shouldn't be called directly.
 *
 * Gets the latest configuration information for a registered agent.
 */
export const getAgentConfiguration: API.OperationMethod<
  GetAgentConfigurationRequest,
  GetAgentConfigurationResponse,
  GetAgentConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAgentConfigurationRequest,
  output: GetAgentConfigurationResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentConfiguration",
}));

export type GetAgentTaskResponseUrlError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * For use by AWS Ground Station Agent and shouldn't be called directly.
 *
 * Gets a presigned URL for uploading agent task response logs.
 */
export const getAgentTaskResponseUrl: API.OperationMethod<
  GetAgentTaskResponseUrlRequest,
  GetAgentTaskResponseUrlResponse,
  GetAgentTaskResponseUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAgentTaskResponseUrlRequest,
  output: GetAgentTaskResponseUrlResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentTaskResponseUrl",
}));

export type GetConfigError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns `Config` information.
 *
 * Only one `Config` response can be returned.
 */
export const getConfig: API.OperationMethod<
  GetConfigRequest,
  GetConfigResponse,
  GetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigRequest,
  output: GetConfigResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfig",
}));

export type GetDataflowEndpointGroupError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the dataflow endpoint group.
 */
export const getDataflowEndpointGroup: API.OperationMethod<
  GetDataflowEndpointGroupRequest,
  GetDataflowEndpointGroupResponse,
  GetDataflowEndpointGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDataflowEndpointGroupRequest,
  output: GetDataflowEndpointGroupResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataflowEndpointGroup",
}));

export type GetMinuteUsageError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the number of reserved minutes used by account.
 */
export const getMinuteUsage: API.OperationMethod<
  GetMinuteUsageRequest,
  GetMinuteUsageResponse,
  GetMinuteUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMinuteUsageRequest,
  output: GetMinuteUsageResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMinuteUsage",
}));

export type GetMissionProfileError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a mission profile.
 */
export const getMissionProfile: API.OperationMethod<
  GetMissionProfileRequest,
  GetMissionProfileResponse,
  GetMissionProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMissionProfileRequest,
  output: GetMissionProfileResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMissionProfile",
}));

export type GetSatelliteError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a satellite.
 */
export const getSatellite: API.OperationMethod<
  GetSatelliteRequest,
  GetSatelliteResponse,
  GetSatelliteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSatelliteRequest,
  output: GetSatelliteResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSatellite",
}));

export type ListAntennasError = DependencyException | InvalidParameterException | CommonErrors;
/**
 * Returns a list of antennas at a specified ground station.
 */
export const listAntennas: API.PaginatedOperationMethod<
  ListAntennasRequest,
  ListAntennasResponse,
  ListAntennasError,
  Credentials | HttpClient.HttpClient,
  AntennaListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAntennasRequest,
  output: ListAntennasResponse,
  errors: [DependencyException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAntennas",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "antennaList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListConfigsError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of `Config` objects.
 */
export const listConfigs: API.PaginatedOperationMethod<
  ListConfigsRequest,
  ListConfigsResponse,
  ListConfigsError,
  Credentials | HttpClient.HttpClient,
  ConfigListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConfigsRequest,
  output: ListConfigsResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "configList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListContactsError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of contacts.
 *
 * If `statusList` contains AVAILABLE, the request must include ` groundStation`, `missionprofileArn`, and `satelliteArn`.
 */
export const listContacts: API.PaginatedOperationMethod<
  ListContactsRequest,
  ListContactsResponse,
  ListContactsError,
  Credentials | HttpClient.HttpClient,
  ContactData
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListContactsRequest,
  output: ListContactsResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContacts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "contactList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListContactVersionsError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of versions for a specified contact.
 */
export const listContactVersions: API.PaginatedOperationMethod<
  ListContactVersionsRequest,
  ListContactVersionsResponse,
  ListContactVersionsError,
  Credentials | HttpClient.HttpClient,
  ContactVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListContactVersionsRequest,
  output: ListContactVersionsResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContactVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "contactVersionsList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataflowEndpointGroupsError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of `DataflowEndpoint` groups.
 */
export const listDataflowEndpointGroups: API.PaginatedOperationMethod<
  ListDataflowEndpointGroupsRequest,
  ListDataflowEndpointGroupsResponse,
  ListDataflowEndpointGroupsError,
  Credentials | HttpClient.HttpClient,
  DataflowEndpointListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDataflowEndpointGroupsRequest,
  output: ListDataflowEndpointGroupsResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataflowEndpointGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataflowEndpointGroupList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEphemeridesError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * List your existing ephemerides.
 */
export const listEphemerides: API.PaginatedOperationMethod<
  ListEphemeridesRequest,
  ListEphemeridesResponse,
  ListEphemeridesError,
  Credentials | HttpClient.HttpClient,
  EphemerisItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEphemeridesRequest,
  output: ListEphemeridesResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEphemerides",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "ephemerides",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGroundStationReservationsError =
  | DependencyException
  | InvalidParameterException
  | CommonErrors;
/**
 * Returns a list of reservations for a specified ground station.
 */
export const listGroundStationReservations: API.PaginatedOperationMethod<
  ListGroundStationReservationsRequest,
  ListGroundStationReservationsResponse,
  ListGroundStationReservationsError,
  Credentials | HttpClient.HttpClient,
  GroundStationReservationListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGroundStationReservationsRequest,
  output: ListGroundStationReservationsResponse,
  errors: [DependencyException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroundStationReservations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "reservationList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListGroundStationsError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of ground stations.
 */
export const listGroundStations: API.PaginatedOperationMethod<
  ListGroundStationsRequest,
  ListGroundStationsResponse,
  ListGroundStationsError,
  Credentials | HttpClient.HttpClient,
  GroundStationData
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGroundStationsRequest,
  output: ListGroundStationsResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroundStations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "groundStationList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMissionProfilesError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of mission profiles.
 */
export const listMissionProfiles: API.PaginatedOperationMethod<
  ListMissionProfilesRequest,
  ListMissionProfilesResponse,
  ListMissionProfilesError,
  Credentials | HttpClient.HttpClient,
  MissionProfileListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMissionProfilesRequest,
  output: ListMissionProfilesResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMissionProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "missionProfileList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSatellitesError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of satellites.
 */
export const listSatellites: API.PaginatedOperationMethod<
  ListSatellitesRequest,
  ListSatellitesResponse,
  ListSatellitesError,
  Credentials | HttpClient.HttpClient,
  SatelliteListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSatellitesRequest,
  output: ListSatellitesResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSatellites",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "satellites",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of tags for a specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RegisterAgentError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * For use by AWS Ground Station Agent and shouldn't be called directly.
 *
 * Registers a new agent with AWS Ground Station.
 */
export const registerAgent: API.OperationMethod<
  RegisterAgentRequest,
  RegisterAgentResponse,
  RegisterAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterAgentRequest,
  output: RegisterAgentResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterAgent",
}));

export type ReserveContactError =
  | DependencyException
  | InvalidParameterException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Reserves a contact using specified parameters.
 */
export const reserveContact: API.OperationMethod<
  ReserveContactRequest,
  ContactIdResponse,
  ReserveContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReserveContactRequest,
  output: ContactIdResponse,
  errors: [
    DependencyException,
    InvalidParameterException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReserveContact",
}));

export type TagResourceError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Assigns a tag to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deassigns a resource tag.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAgentStatusError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * For use by AWS Ground Station Agent and shouldn't be called directly.
 *
 * Update the status of the agent.
 */
export const updateAgentStatus: API.OperationMethod<
  UpdateAgentStatusRequest,
  UpdateAgentStatusResponse,
  UpdateAgentStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAgentStatusRequest,
  output: UpdateAgentStatusResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAgentStatus",
}));

export type UpdateConfigError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the `Config` used when scheduling contacts.
 *
 * Updating a `Config` will not update the execution parameters for existing future contacts scheduled with this `Config`.
 */
export const updateConfig: API.OperationMethod<
  UpdateConfigRequest,
  ConfigIdResponse,
  UpdateConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConfigRequest,
  output: ConfigIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfig",
}));

export type UpdateContactError =
  | DependencyException
  | InvalidParameterException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a specific contact.
 */
export const updateContact: API.OperationMethod<
  UpdateContactRequest,
  UpdateContactResponse,
  UpdateContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateContactRequest,
  output: UpdateContactResponse,
  errors: [
    DependencyException,
    InvalidParameterException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContact",
}));

export type UpdateEphemerisError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Update an existing ephemeris.
 */
export const updateEphemeris: API.OperationMethod<
  UpdateEphemerisRequest,
  EphemerisIdResponse,
  UpdateEphemerisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEphemerisRequest,
  output: EphemerisIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEphemeris",
}));

export type UpdateMissionProfileError =
  | DependencyException
  | InvalidParameterException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a mission profile.
 *
 * Updating a mission profile will not update the execution parameters for existing future contacts.
 */
export const updateMissionProfile: API.OperationMethod<
  UpdateMissionProfileRequest,
  MissionProfileIdResponse,
  UpdateMissionProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMissionProfileRequest,
  output: MissionProfileIdResponse,
  errors: [DependencyException, InvalidParameterException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMissionProfile",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ contactId: S.String.pipe(T.HttpLabel("contactId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/contact/{contactId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelContactRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ contactId: S.optional(S.String), versionId: S.optional(S.Number) }),
      ).annotate({ identifier: "ContactIdResponse" });
    case 2:
      return S.suspend(() => S.Struct({ value: S.Number, units: FrequencyUnits })).annotate({
        identifier: "Frequency",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          centerFrequency: Frequency,
          bandwidth: FrequencyBandwidth,
          polarization: S.optional(Polarization),
        }),
      ).annotate({ identifier: "SpectrumConfig" });
    case 4:
      return S.suspend(() => S.Struct({ spectrumConfig: SpectrumConfig })).annotate({
        identifier: "AntennaDownlinkConfig",
      });
    case 5:
      return S.suspend(() => S.Struct({ autotrack: Criticality })).annotate({
        identifier: "TrackingConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ dataflowEndpointName: S.String, dataflowEndpointRegion: S.optional(S.String) }),
      ).annotate({ identifier: "DataflowEndpointConfig" });
    case 7:
      return S.suspend(() => S.Struct({ unvalidatedJSON: S.String })).annotate({
        identifier: "DemodulationConfig",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          spectrumConfig: SpectrumConfig,
          demodulationConfig: DemodulationConfig,
          decodeConfig: DecodeConfig,
        }),
      ).annotate({
        identifier: "AntennaDownlinkDemodDecodeConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ centerFrequency: Frequency, polarization: S.optional(Polarization) }),
      ).annotate({ identifier: "UplinkSpectrumConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          transmitDisabled: S.optional(S.Boolean),
          spectrumConfig: UplinkSpectrumConfig,
          targetEirp: Eirp,
        }),
      ).annotate({ identifier: "AntennaUplinkConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({ enabled: S.Boolean, antennaUplinkConfigArn: S.String }),
      ).annotate({ identifier: "UplinkEchoConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({ bucketArn: S.String, roleArn: S.String, prefix: S.optional(S.String) }),
      ).annotate({ identifier: "S3RecordingConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({ kinesisRoleArn: S.String, kinesisDataStreamArn: S.String }),
      ).annotate({ identifier: "KinesisDataStreamData" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ kinesisDataStreamData: KinesisDataStreamData })]);
    case 7:
      return S.suspend(() =>
        S.Struct({ telemetrySinkType: TelemetrySinkType, telemetrySinkData: TelemetrySinkData }),
      ).annotate({ identifier: "TelemetrySinkConfig" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ antennaDownlinkConfig: AntennaDownlinkConfig }),
        /*@__PURE__*/ S.Struct({ trackingConfig: TrackingConfig }),
        /*@__PURE__*/ S.Struct({ dataflowEndpointConfig: DataflowEndpointConfig }),
        /*@__PURE__*/ S.Struct({
          antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfig,
        }),
        /*@__PURE__*/ S.Struct({ antennaUplinkConfig: AntennaUplinkConfig }),
        /*@__PURE__*/ S.Struct({ uplinkEchoConfig: UplinkEchoConfig }),
        /*@__PURE__*/ S.Struct({ s3RecordingConfig: S3RecordingConfig }),
        /*@__PURE__*/ S.Struct({ telemetrySinkConfig: TelemetrySinkConfig }),
      ]);
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, configData: ConfigTypeData, tags: S.optional(TagsMap) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/config" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConfigRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          configId: S.optional(S.String),
          configType: S.optional(ConfigCapabilityType),
          configArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConfigIdResponse" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          subnetIds: SubnetList,
          securityGroupIds: SecurityGroupIdList,
          roleArn: S.String,
        }),
      ).annotate({ identifier: "SecurityDetails" });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, port: S.Number })).annotate({
        identifier: "SocketAddress",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          address: S.optional(SocketAddress),
          status: S.optional(EndpointStatus),
          mtu: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DataflowEndpoint" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ socketAddress: SocketAddress, mtu: S.optional(S.Number) }),
      ).annotate({ identifier: "ConnectionDetails" });
    case 1:
      return S.suspend(() => S.Struct({ minimum: S.Number, maximum: S.Number })).annotate({
        identifier: "IntegerRange",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, portRange: IntegerRange })).annotate({
        identifier: "RangedSocketAddress",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ socketAddress: RangedSocketAddress, mtu: S.optional(S.Number) }),
      ).annotate({ identifier: "RangedConnectionDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          egressAddress: ConnectionDetails,
          ingressAddress: RangedConnectionDetails,
          agentStatus: S.optional(AgentStatus),
          auditResults: S.optional(AuditResults),
        }),
      ).annotate({
        identifier: "AwsGroundStationAgentEndpoint",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ingressAddressAndPort: ConnectionDetails,
          agentIpAndPortAddress: RangedConnectionDetails,
        }),
      ).annotate({ identifier: "UplinkConnectionDetails" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ agentConnectionDetails: UplinkConnectionDetails })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          dataflowDetails: UplinkDataflowDetails,
          agentStatus: S.optional(AgentStatus),
          auditResults: S.optional(AuditResults),
        }),
      ).annotate({
        identifier: "UplinkAwsGroundStationAgentEndpointDetails",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentIpAndPortAddress: RangedConnectionDetails,
          egressAddressAndPort: ConnectionDetails,
        }),
      ).annotate({
        identifier: "DownlinkConnectionDetails",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ agentConnectionDetails: DownlinkConnectionDetails }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          dataflowDetails: DownlinkDataflowDetails,
          agentStatus: S.optional(AgentStatus),
          auditResults: S.optional(AuditResults),
        }),
      ).annotate({
        identifier: "DownlinkAwsGroundStationAgentEndpointDetails",
      });
    case 3:
      return S.Array(CapabilityHealthReason);
    case 4:
      return S.suspend(() =>
        S.Struct({
          securityDetails: S.optional(SecurityDetails),
          endpoint: S.optional(DataflowEndpoint),
          awsGroundStationAgentEndpoint: S.optional(AwsGroundStationAgentEndpoint),
          uplinkAwsGroundStationAgentEndpoint: S.optional(
            UplinkAwsGroundStationAgentEndpointDetails,
          ),
          downlinkAwsGroundStationAgentEndpoint: S.optional(
            DownlinkAwsGroundStationAgentEndpointDetails,
          ),
          healthStatus: S.optional(CapabilityHealth),
          healthReasons: S.optional(CapabilityHealthReasonList),
        }),
      ).annotate({ identifier: "EndpointDetails" });
    case 5:
      return S.Array(EndpointDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({
          endpointDetails: EndpointDetailsList,
          tags: S.optional(TagsMap),
          contactPrePassDurationSeconds: S.optional(S.Number),
          contactPostPassDurationSeconds: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/dataflowEndpointGroup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataflowEndpointGroupRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ dataflowEndpointGroupId: S.optional(S.String) })).annotate({
        identifier: "DataflowEndpointGroupIdResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String, dataflowDetails: UplinkDataflowDetails }),
      ).annotate({
        identifier: "UplinkAwsGroundStationAgentEndpoint",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, dataflowDetails: DownlinkDataflowDetails }),
      ).annotate({
        identifier: "DownlinkAwsGroundStationAgentEndpoint",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          uplinkAwsGroundStationAgentEndpoint: UplinkAwsGroundStationAgentEndpoint,
        }),
        /*@__PURE__*/ S.Struct({
          downlinkAwsGroundStationAgentEndpoint: DownlinkAwsGroundStationAgentEndpoint,
        }),
      ]);
    case 3:
      return S.Array(CreateEndpointDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          endpoints: CreateEndpointDetailsList,
          contactPrePassDurationSeconds: S.optional(S.Number),
          contactPostPassDurationSeconds: S.optional(S.Number),
          tags: S.optional(TagsMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/dataflowEndpointGroupV2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataflowEndpointGroupV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          bucket: S.optional(S.String),
          key: S.optional(S.String),
          version: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Object" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "TimeRange" });
    case 7:
      return S.suspend(() =>
        S.Struct({ tleLine1: S.String, tleLine2: S.String, validTimeRange: TimeRange }),
      ).annotate({ identifier: "TLEData" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(TLEData);
    case 1:
      return S.suspend(() =>
        S.Struct({ s3Object: S.optional(S3Object), tleData: S.optional(TLEDataList) }),
      ).annotate({ identifier: "TLEEphemeris" });
    case 2:
      return S.suspend(() =>
        S.Struct({ s3Object: S.optional(S3Object), oemData: S.optional(S.String) }),
      ).annotate({ identifier: "OEMEphemeris" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ISO8601TimeRange" });
    case 4:
      return S.suspend(() => S.Struct({ dt: S.Number, az: S.Number, el: S.Number })).annotate({
        identifier: "TimeAzEl",
      });
    case 5:
      return S.Array(TimeAzEl);
    case 6:
      return S.suspend(() =>
        S.Struct({
          referenceEpoch: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          validTimeRange: ISO8601TimeRange,
          azElList: TimeAzElList,
        }),
      ).annotate({ identifier: "AzElSegment" });
    case 7:
      return S.Array(AzElSegment);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ angleUnit: AngleUnits, azElSegmentList: AzElSegmentList }),
      ).annotate({ identifier: "AzElSegments" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3Object: S3Object }),
        /*@__PURE__*/ S.Struct({ azElData: AzElSegments }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ groundStation: S.String, data: AzElSegmentsData }),
      ).annotate({ identifier: "AzElEphemeris" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tle: TLEEphemeris }),
        /*@__PURE__*/ S.Struct({ oem: OEMEphemeris }),
        /*@__PURE__*/ S.Struct({ azEl: AzElEphemeris }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          satelliteId: S.optional(S.String),
          enabled: S.optional(S.Boolean),
          priority: S.optional(S.Number),
          expirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          name: S.String,
          kmsKeyArn: S.optional(S.String),
          ephemeris: S.optional(EphemerisData),
          tags: S.optional(TagsMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/ephemeris" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateEphemerisRequest" });
    case 5:
      return S.suspend(() => S.Struct({ ephemerisId: S.optional(S.String) })).annotate({
        identifier: "EphemerisIdResponse",
      });
    case 6:
      return S.Array(DataflowEdge);
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ kmsKeyArn: S.String }),
        /*@__PURE__*/ S.Struct({ kmsAliasArn: S.String }),
        /*@__PURE__*/ S.Struct({ kmsAliasName: S.String }),
      ]);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          contactPrePassDurationSeconds: S.optional(S.Number),
          contactPostPassDurationSeconds: S.optional(S.Number),
          minimumViableContactDurationSeconds: S.Number,
          dataflowEdges: DataflowEdgeList,
          trackingConfigArn: S.String,
          telemetrySinkConfigArn: S.optional(S.String),
          tags: S.optional(TagsMap),
          streamsKmsKey: S.optional(KmsKey),
          streamsKmsRole: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/missionprofile" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateMissionProfileRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ missionProfileId: S.optional(S.String) })).annotate({
        identifier: "MissionProfileIdResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configId: S.String.pipe(T.HttpLabel("configId")),
          configType: ConfigCapabilityType.pipe(T.HttpLabel("configType")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/config/{configType}/{configId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteConfigRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataflowEndpointGroupId: S.String.pipe(T.HttpLabel("dataflowEndpointGroupId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/dataflowEndpointGroup/{dataflowEndpointGroupId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataflowEndpointGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ephemerisId: S.String.pipe(T.HttpLabel("ephemerisId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/ephemeris/{ephemerisId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEphemerisRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ missionProfileId: S.String.pipe(T.HttpLabel("missionProfileId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/missionprofile/{missionProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMissionProfileRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ contactId: S.String.pipe(T.HttpLabel("contactId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/contact/{contactId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeContactRequest" });
    case 7:
      return S.suspend(() => S.Struct({ value: S.Number, unit: AngleUnits })).annotate({
        identifier: "Elevation",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ outputNode: S.optional(S.String) })).annotate({
        identifier: "AntennaDemodDecodeDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ bucketArn: S.optional(S.String), keyTemplate: S.optional(S.String) }),
      ).annotate({ identifier: "S3RecordingDetails" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ endpointDetails: EndpointDetails }),
        /*@__PURE__*/ S.Struct({ antennaDemodDecodeDetails: AntennaDemodDecodeDetails }),
        /*@__PURE__*/ S.Struct({ s3RecordingDetails: S3RecordingDetails }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          configType: S.optional(ConfigCapabilityType),
          configId: S.optional(S.String),
          configDetails: S.optional(ConfigDetails),
          dataflowSourceRegion: S.optional(S.String),
        }),
      ).annotate({ identifier: "Source" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          configType: S.optional(ConfigCapabilityType),
          configId: S.optional(S.String),
          configDetails: S.optional(ConfigDetails),
          dataflowDestinationRegion: S.optional(S.String),
        }),
      ).annotate({ identifier: "Destination" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          source: S.optional(Source),
          destination: S.optional(Destination),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataflowDetail" });
    case 6:
      return S.Array(DataflowDetail);
    case 7:
      return S.suspend(() => S.Struct({ ephemerisId: S.String })).annotate({
        identifier: "AzElProgramTrackSettings",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ azEl: AzElProgramTrackSettings }),
        /*@__PURE__*/ S.Struct({ oem: OemProgramTrackSettings }),
        /*@__PURE__*/ S.Struct({ tle: TleProgramTrackSettings }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ programTrackSettings: S.optional(ProgramTrackSettings) }),
      ).annotate({ identifier: "TrackingOverrides" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ephemerisId: S.optional(S.String), ephemerisType: EphemerisType }),
      ).annotate({ identifier: "EphemerisResponseData" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          versionId: S.optional(S.Number),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          activated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          superseded: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(VersionStatus),
          failureCodes: S.optional(VersionFailureReasonCodes),
          failureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ContactVersion" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          contactId: S.optional(S.String),
          missionProfileArn: S.optional(S.String),
          satelliteArn: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          prePassStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          postPassEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groundStation: S.optional(S.String),
          contactStatus: S.optional(ContactStatus),
          errorMessage: S.optional(S.String),
          maximumElevation: S.optional(Elevation),
          tags: S.optional(TagsMap),
          region: S.optional(S.String),
          dataflowList: S.optional(DataflowList),
          visibilityStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          visibilityEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          trackingOverrides: S.optional(TrackingOverrides),
          ephemeris: S.optional(EphemerisResponseData),
          version: S.optional(ContactVersion),
        }),
      ).annotate({ identifier: "DescribeContactResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          contactId: S.String.pipe(T.HttpLabel("contactId")),
          versionId: S.Number.pipe(T.HttpLabel("versionId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/contact/{contactId}/versions/{versionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeContactVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          contactId: S.optional(S.String),
          missionProfileArn: S.optional(S.String),
          satelliteArn: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          prePassStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          postPassEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groundStation: S.optional(S.String),
          contactStatus: S.optional(ContactStatus),
          errorMessage: S.optional(S.String),
          maximumElevation: S.optional(Elevation),
          tags: S.optional(TagsMap),
          region: S.optional(S.String),
          dataflowList: S.optional(DataflowList),
          visibilityStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          visibilityEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          trackingOverrides: S.optional(TrackingOverrides),
          ephemeris: S.optional(EphemerisResponseData),
          version: S.optional(ContactVersion),
        }),
      ).annotate({
        identifier: "DescribeContactVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ephemerisId: S.String.pipe(T.HttpLabel("ephemerisId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/ephemeris/{ephemerisId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeEphemerisRequest" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ sourceS3Object: S.optional(S3Object), ephemerisData: S.optional(S.String) }),
      ).annotate({ identifier: "EphemerisDescription" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tle: EphemerisDescription }),
        /*@__PURE__*/ S.Struct({ oem: EphemerisDescription }),
        /*@__PURE__*/ S.Struct({ azEl: EphemerisDescription }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({ errorCode: EphemerisErrorCode, errorMessage: S.String }),
      ).annotate({ identifier: "EphemerisErrorReason" });
    case 3:
      return S.Array(EphemerisErrorReason);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ephemerisId: S.optional(S.String),
          satelliteId: S.optional(S.String),
          status: S.optional(EphemerisStatus),
          priority: S.optional(S.Number),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          enabled: S.optional(S.Boolean),
          name: S.optional(S.String),
          tags: S.optional(TagsMap),
          suppliedData: S.optional(EphemerisTypeDescription),
          invalidReason: S.optional(EphemerisInvalidReason),
          errorReasons: S.optional(EphemerisErrorReasonList),
        }),
      ).annotate({
        identifier: "DescribeEphemerisResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ agentId: S.String.pipe(T.HttpLabel("agentId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/agent/{agentId}/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAgentConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ agentId: S.optional(S.String), taskingDocument: S.optional(S.String) }),
      ).annotate({
        identifier: "GetAgentConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          taskId: S.String.pipe(T.HttpLabel("taskId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/agentResponseUrl/{agentId}/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAgentTaskResponseUrlRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ agentId: S.String, taskId: S.String, presignedLogUrl: S.String }),
      ).annotate({
        identifier: "GetAgentTaskResponseUrlResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          configId: S.String.pipe(T.HttpLabel("configId")),
          configType: ConfigCapabilityType.pipe(T.HttpLabel("configType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/config/{configType}/{configId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConfigRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configId: S.String,
          configArn: S.String,
          name: S.String,
          configType: S.optional(ConfigCapabilityType),
          configData: ConfigTypeData,
          tags: S.optional(TagsMap),
        }),
      ).annotate({ identifier: "GetConfigResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          dataflowEndpointGroupId: S.String.pipe(T.HttpLabel("dataflowEndpointGroupId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/dataflowEndpointGroup/{dataflowEndpointGroupId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataflowEndpointGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          dataflowEndpointGroupId: S.optional(S.String),
          dataflowEndpointGroupArn: S.optional(S.String),
          endpointsDetails: S.optional(EndpointDetailsList),
          tags: S.optional(TagsMap),
          contactPrePassDurationSeconds: S.optional(S.Number),
          contactPostPassDurationSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetDataflowEndpointGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ month: S.Number, year: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/minute-usage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMinuteUsageRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          isReservedMinutesCustomer: S.optional(S.Boolean),
          totalReservedMinuteAllocation: S.optional(S.Number),
          upcomingMinutesScheduled: S.optional(S.Number),
          totalScheduledMinutes: S.optional(S.Number),
          estimatedMinutesRemaining: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GetMinuteUsageResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ missionProfileId: S.String.pipe(T.HttpLabel("missionProfileId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/missionprofile/{missionProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMissionProfileRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          missionProfileId: S.optional(S.String),
          missionProfileArn: S.optional(S.String),
          name: S.optional(S.String),
          region: S.optional(S.String),
          contactPrePassDurationSeconds: S.optional(S.Number),
          contactPostPassDurationSeconds: S.optional(S.Number),
          minimumViableContactDurationSeconds: S.optional(S.Number),
          dataflowEdges: S.optional(DataflowEdgeList),
          trackingConfigArn: S.optional(S.String),
          telemetrySinkConfigArn: S.optional(S.String),
          tags: S.optional(TagsMap),
          streamsKmsKey: S.optional(KmsKey),
          streamsKmsRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetMissionProfileResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ satelliteId: S.String.pipe(T.HttpLabel("satelliteId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/satellite/{satelliteId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSatelliteRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          source: EphemerisSource,
          ephemerisId: S.optional(S.String),
          epoch: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "EphemerisMetaData" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          satelliteId: S.optional(S.String),
          satelliteArn: S.optional(S.String),
          noradSatelliteID: S.optional(S.Number),
          groundStations: S.optional(GroundStationIdList),
          currentEphemeris: S.optional(EphemerisMetaData),
        }),
      ).annotate({ identifier: "GetSatelliteResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          groundStationId: S.String.pipe(T.HttpLabel("groundStationId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/groundstation/{groundStationId}/antenna" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAntennasRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ groundStationName: S.String, antennaName: S.String, region: S.String }),
      ).annotate({ identifier: "AntennaListItem" });
    case 6:
      return S.Array(AntennaListItem);
    case 7:
      return S.suspend(() =>
        S.Struct({ antennaList: AntennaList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAntennasResponse" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/config" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListConfigsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          configId: S.optional(S.String),
          configType: S.optional(ConfigCapabilityType),
          configArn: S.optional(S.String),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConfigListItem" });
    case 2:
      return S.Array(ConfigListItem);
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), configList: S.optional(ConfigList) }),
      ).annotate({ identifier: "ListConfigsResponse" });
    case 4:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "AzElEphemerisFilter",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ azEl: AzElEphemerisFilter })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          statusList: StatusList,
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          groundStation: S.optional(S.String),
          satelliteArn: S.optional(S.String),
          missionProfileArn: S.optional(S.String),
          ephemeris: S.optional(EphemerisFilter),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/contacts" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListContactsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          contactId: S.optional(S.String),
          missionProfileArn: S.optional(S.String),
          satelliteArn: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          prePassStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          postPassEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          groundStation: S.optional(S.String),
          contactStatus: S.optional(ContactStatus),
          errorMessage: S.optional(S.String),
          maximumElevation: S.optional(Elevation),
          region: S.optional(S.String),
          tags: S.optional(TagsMap),
          visibilityStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          visibilityEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ephemeris: S.optional(EphemerisResponseData),
          version: S.optional(ContactVersion),
        }),
      ).annotate({ identifier: "ContactData" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ContactData);
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), contactList: S.optional(ContactList) }),
      ).annotate({ identifier: "ListContactsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          contactId: S.String.pipe(T.HttpLabel("contactId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/contact/{contactId}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListContactVersionsRequest",
      });
    case 3:
      return S.Array(ContactVersion);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          contactVersionsList: S.optional(ContactVersionsList),
        }),
      ).annotate({
        identifier: "ListContactVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/dataflowEndpointGroup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataflowEndpointGroupsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          dataflowEndpointGroupId: S.optional(S.String),
          dataflowEndpointGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataflowEndpointListItem" });
    case 7:
      return S.Array(DataflowEndpointListItem);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          dataflowEndpointGroupList: S.optional(DataflowEndpointGroupList),
        }),
      ).annotate({
        identifier: "ListDataflowEndpointGroupsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          satelliteId: S.optional(S.String),
          ephemerisType: S.optional(EphemerisType),
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          statusList: S.optional(EphemerisStatusList),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ephemerides" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEphemeridesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ephemerisId: S.optional(S.String),
          ephemerisType: S.optional(EphemerisType),
          status: S.optional(EphemerisStatus),
          priority: S.optional(S.Number),
          enabled: S.optional(S.Boolean),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          name: S.optional(S.String),
          sourceS3Object: S.optional(S3Object),
        }),
      ).annotate({ identifier: "EphemerisItem" });
    case 3:
      return S.Array(EphemerisItem);
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), ephemerides: S.optional(EphemeridesList) }),
      ).annotate({ identifier: "ListEphemeridesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          groundStationId: S.String.pipe(T.HttpLabel("groundStationId")),
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("startTime")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("endTime")),
          reservationTypes: S.optional(ReservationTypeFilterList).pipe(
            T.HttpQuery("reservationTypes"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/groundstation/{groundStationId}/reservation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListGroundStationReservationsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ maintenanceType: MaintenanceType })).annotate({
        identifier: "MaintenanceReservationDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ contactId: S.optional(S.String) })).annotate({
        identifier: "ContactReservationDetails",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ maintenance: MaintenanceReservationDetails }),
        /*@__PURE__*/ S.Struct({ contact: ContactReservationDetails }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          reservationType: ReservationType,
          groundStationId: S.String,
          antennaName: S.String,
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          reservationDetails: ReservationDetails,
        }),
      ).annotate({
        identifier: "GroundStationReservationListItem",
      });
    case 2:
      return S.Array(GroundStationReservationListItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          reservationList: GroundStationReservationList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListGroundStationReservationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          satelliteId: S.optional(S.String).pipe(T.HttpQuery("satelliteId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/groundstation" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListGroundStationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          groundStationId: S.optional(S.String),
          groundStationName: S.optional(S.String),
          region: S.optional(S.String),
        }),
      ).annotate({ identifier: "GroundStationData" });
    case 6:
      return S.Array(GroundStationData);
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          groundStationList: S.optional(GroundStationList),
        }),
      ).annotate({
        identifier: "ListGroundStationsResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/missionprofile" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListMissionProfilesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          missionProfileId: S.optional(S.String),
          missionProfileArn: S.optional(S.String),
          region: S.optional(S.String),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "MissionProfileListItem" });
    case 2:
      return S.Array(MissionProfileListItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          missionProfileList: S.optional(MissionProfileList),
        }),
      ).annotate({
        identifier: "ListMissionProfilesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/satellite" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSatellitesRequest" });
    case 5:
      return S.Array(SatelliteListItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), satellites: S.optional(SatelliteList) }),
      ).annotate({ identifier: "ListSatellitesResponse" });
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
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: S.optional(TagsMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          publicIpAddresses: IpAddressList,
          privateIpAddresses: IpAddressList,
          capabilityArns: CapabilityArnList,
        }),
      ).annotate({ identifier: "DiscoveryData" });
    case 2:
      return S.Array(S.Number);
    case 3:
      return S.suspend(() =>
        S.Struct({ componentType: S.String, versions: VersionStringList }),
      ).annotate({ identifier: "ComponentVersion" });
    case 4:
      return S.Array(ComponentVersion);
    case 5:
      return S.suspend(() =>
        S.Struct({
          agentVersion: S.String,
          instanceId: S.String,
          instanceType: S.String,
          reservedCpuCores: S.optional(AgentCpuCoresList),
          agentCpuCores: S.optional(AgentCpuCoresList),
          componentVersions: ComponentVersionList,
        }),
      ).annotate({ identifier: "AgentDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          discoveryData: DiscoveryData,
          agentDetails: AgentDetails,
          tags: S.optional(TagsMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/agent" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RegisterAgentRequest" });
    case 7:
      return S.suspend(() => S.Struct({ agentId: S.optional(S.String) })).annotate({
        identifier: "RegisterAgentResponse",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          missionProfileArn: S.String,
          satelliteArn: S.optional(S.String),
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          groundStation: S.String,
          tags: S.optional(TagsMap),
          trackingOverrides: S.optional(TrackingOverrides),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/contact" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ReserveContactRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagsMap }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
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
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.Boolean.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ status: AgentStatus, signatureMap: S.optional(SignatureMap) }),
      ).annotate({ identifier: "AggregateStatus" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          componentType: S.String,
          capabilityArn: S.String,
          status: AgentStatus,
          bytesSent: S.optional(S.Number),
          bytesReceived: S.optional(S.Number),
          packetsDropped: S.optional(S.Number),
          dataflowId: S.String,
        }),
      ).annotate({ identifier: "ComponentStatusData" });
    case 7:
      return S.Array(ComponentStatusData);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          agentId: S.String.pipe(T.HttpLabel("agentId")),
          taskId: S.String,
          aggregateStatus: AggregateStatus,
          componentStatuses: ComponentStatusList,
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/agent/{agentId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateAgentStatusRequest" });
    case 1:
      return S.suspend(() => S.Struct({ agentId: S.String })).annotate({
        identifier: "UpdateAgentStatusResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          configId: S.String.pipe(T.HttpLabel("configId")),
          name: S.String,
          configType: ConfigCapabilityType.pipe(T.HttpLabel("configType")),
          configData: ConfigTypeData,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/config/{configType}/{configId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateConfigRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          contactId: S.String.pipe(T.HttpLabel("contactId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          trackingOverrides: S.optional(TrackingOverrides),
          satelliteArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/contact/{contactId}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateContactRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ephemerisId: S.String.pipe(T.HttpLabel("ephemerisId")),
          enabled: S.Boolean,
          name: S.optional(S.String),
          priority: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/ephemeris/{ephemerisId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateEphemerisRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          missionProfileId: S.String.pipe(T.HttpLabel("missionProfileId")),
          name: S.optional(S.String),
          contactPrePassDurationSeconds: S.optional(S.Number),
          contactPostPassDurationSeconds: S.optional(S.Number),
          minimumViableContactDurationSeconds: S.optional(S.Number),
          dataflowEdges: S.optional(DataflowEdgeList),
          trackingConfigArn: S.optional(S.String),
          telemetrySinkConfigArn: S.optional(S.String),
          streamsKmsKey: S.optional(KmsKey),
          streamsKmsRole: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/missionprofile/{missionProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMissionProfileRequest",
      });
  }
}
