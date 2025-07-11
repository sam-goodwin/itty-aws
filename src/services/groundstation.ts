import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface GroundStation {
  cancelContact(
    input: CancelContactRequest,
  ): Effect.Effect<
    ContactIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  createConfig(
    input: CreateConfigRequest,
  ): Effect.Effect<
    ConfigIdResponse,
    DependencyException | InvalidParameterException | ResourceLimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  createDataflowEndpointGroup(
    input: CreateDataflowEndpointGroupRequest,
  ): Effect.Effect<
    DataflowEndpointGroupIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  createEphemeris(
    input: CreateEphemerisRequest,
  ): Effect.Effect<
    EphemerisIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  createMissionProfile(
    input: CreateMissionProfileRequest,
  ): Effect.Effect<
    MissionProfileIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  deleteConfig(
    input: DeleteConfigRequest,
  ): Effect.Effect<
    ConfigIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  deleteDataflowEndpointGroup(
    input: DeleteDataflowEndpointGroupRequest,
  ): Effect.Effect<
    DataflowEndpointGroupIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  deleteEphemeris(
    input: DeleteEphemerisRequest,
  ): Effect.Effect<
    EphemerisIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  deleteMissionProfile(
    input: DeleteMissionProfileRequest,
  ): Effect.Effect<
    MissionProfileIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  describeContact(
    input: DescribeContactRequest,
  ): Effect.Effect<
    DescribeContactResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  describeEphemeris(
    input: DescribeEphemerisRequest,
  ): Effect.Effect<
    DescribeEphemerisResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getAgentConfiguration(
    input: GetAgentConfigurationRequest,
  ): Effect.Effect<
    GetAgentConfigurationResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getConfig(
    input: GetConfigRequest,
  ): Effect.Effect<
    GetConfigResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getDataflowEndpointGroup(
    input: GetDataflowEndpointGroupRequest,
  ): Effect.Effect<
    GetDataflowEndpointGroupResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getMinuteUsage(
    input: GetMinuteUsageRequest,
  ): Effect.Effect<
    GetMinuteUsageResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getMissionProfile(
    input: GetMissionProfileRequest,
  ): Effect.Effect<
    GetMissionProfileResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  getSatellite(
    input: GetSatelliteRequest,
  ): Effect.Effect<
    GetSatelliteResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listConfigs(
    input: ListConfigsRequest,
  ): Effect.Effect<
    ListConfigsResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listContacts(
    input: ListContactsRequest,
  ): Effect.Effect<
    ListContactsResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listDataflowEndpointGroups(
    input: ListDataflowEndpointGroupsRequest,
  ): Effect.Effect<
    ListDataflowEndpointGroupsResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listEphemerides(
    input: ListEphemeridesRequest,
  ): Effect.Effect<
    ListEphemeridesResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listGroundStations(
    input: ListGroundStationsRequest,
  ): Effect.Effect<
    ListGroundStationsResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listMissionProfiles(
    input: ListMissionProfilesRequest,
  ): Effect.Effect<
    ListMissionProfilesResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listSatellites(
    input: ListSatellitesRequest,
  ): Effect.Effect<
    ListSatellitesResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  registerAgent(
    input: RegisterAgentRequest,
  ): Effect.Effect<
    RegisterAgentResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  reserveContact(
    input: ReserveContactRequest,
  ): Effect.Effect<
    ContactIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  updateAgentStatus(
    input: UpdateAgentStatusRequest,
  ): Effect.Effect<
    UpdateAgentStatusResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  updateConfig(
    input: UpdateConfigRequest,
  ): Effect.Effect<
    ConfigIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  updateEphemeris(
    input: UpdateEphemerisRequest,
  ): Effect.Effect<
    EphemerisIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  updateMissionProfile(
    input: UpdateMissionProfileRequest,
  ): Effect.Effect<
    MissionProfileIdResponse,
    DependencyException | InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
}

export type Groundstation = GroundStation;

export type AgentCpuCoresList = Array<number>;
export interface AgentDetails {
  agentVersion: string;
  instanceId: string;
  instanceType: string;
  reservedCpuCores?: Array<number>;
  agentCpuCores?: Array<number>;
  componentVersions: Array<ComponentVersion>;
}
export type AgentStatus = "SUCCESS" | "FAILED" | "ACTIVE" | "INACTIVE";
export interface AggregateStatus {
  status: AgentStatus;
  signatureMap?: Record<string, boolean>;
}
export type AngleUnits = "DEGREE_ANGLE" | "RADIAN";
export interface AntennaDemodDecodeDetails {
  outputNode?: string;
}
export interface AntennaDownlinkConfig {
  spectrumConfig: SpectrumConfig;
}
export interface AntennaDownlinkDemodDecodeConfig {
  spectrumConfig: SpectrumConfig;
  demodulationConfig: DemodulationConfig;
  decodeConfig: DecodeConfig;
}
export interface AntennaUplinkConfig {
  transmitDisabled?: boolean;
  spectrumConfig: UplinkSpectrumConfig;
  targetEirp: Eirp;
}
export type AnyArn = string;

export type AuditResults = "HEALTHY" | "UNHEALTHY";
export interface AwsGroundStationAgentEndpoint {
  name: string;
  egressAddress: ConnectionDetails;
  ingressAddress: RangedConnectionDetails;
  agentStatus?: AgentStatus;
  auditResults?: AuditResults;
}
export type AWSRegion = string;

export type BandwidthUnits = "GHZ" | "MHZ" | "KHZ";
export type BucketArn = string;

export interface CancelContactRequest {
  contactId: string;
}
export type CapabilityArn = string;

export type CapabilityArnList = Array<string>;
export type CapabilityHealth = "HEALTHY" | "UNHEALTHY";
export type CapabilityHealthReason = "NO_REGISTERED_AGENT" | "INVALID_IP_OWNERSHIP" | "NOT_AUTHORIZED_TO_CREATE_SLR" | "UNVERIFIED_IP_OWNERSHIP" | "INITIALIZING_DATAPLANE" | "DATAPLANE_FAILURE" | "HEALTHY";
export type CapabilityHealthReasonList = Array<CapabilityHealthReason>;
export interface ComponentStatusData {
  componentType: string;
  capabilityArn: string;
  status: AgentStatus;
  bytesSent?: number;
  bytesReceived?: number;
  packetsDropped?: number;
  dataflowId: string;
}
export type ComponentStatusList = Array<ComponentStatusData>;
export type ComponentTypeString = string;

export interface ComponentVersion {
  componentType: string;
  versions: Array<string>;
}
export type ComponentVersionList = Array<ComponentVersion>;
export type ConfigArn = string;

export type ConfigCapabilityType = "ANTENNA_DOWNLINK" | "ANTENNA_DOWNLINK_DEMOD_DECODE" | "TRACKING" | "DATAFLOW_ENDPOINT" | "ANTENNA_UPLINK" | "UPLINK_ECHO" | "S3_RECORDING";
export type ConfigDetails = { endpointDetails: EndpointDetails } | { antennaDemodDecodeDetails: AntennaDemodDecodeDetails } | { s3RecordingDetails: S3RecordingDetails };
export interface ConfigIdResponse {
  configId?: string;
  configType?: ConfigCapabilityType;
  configArn?: string;
}
export type ConfigList = Array<ConfigListItem>;
export interface ConfigListItem {
  configId?: string;
  configType?: ConfigCapabilityType;
  configArn?: string;
  name?: string;
}
export type ConfigTypeData = { antennaDownlinkConfig: AntennaDownlinkConfig } | { trackingConfig: TrackingConfig } | { dataflowEndpointConfig: DataflowEndpointConfig } | { antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfig } | { antennaUplinkConfig: AntennaUplinkConfig } | { uplinkEchoConfig: UplinkEchoConfig } | { s3RecordingConfig: S3RecordingConfig };
export interface ConnectionDetails {
  socketAddress: SocketAddress;
  mtu?: number;
}
export interface ContactData {
  contactId?: string;
  missionProfileArn?: string;
  satelliteArn?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  prePassStartTime?: Date | string;
  postPassEndTime?: Date | string;
  groundStation?: string;
  contactStatus?: ContactStatus;
  errorMessage?: string;
  maximumElevation?: Elevation;
  region?: string;
  tags?: Record<string, string>;
  visibilityStartTime?: Date | string;
  visibilityEndTime?: Date | string;
}
export interface ContactIdResponse {
  contactId?: string;
}
export type ContactList = Array<ContactData>;
export type ContactStatus = "SCHEDULING" | "FAILED_TO_SCHEDULE" | "SCHEDULED" | "CANCELLED" | "AWS_CANCELLED" | "PREPASS" | "PASS" | "POSTPASS" | "COMPLETED" | "FAILED" | "AVAILABLE" | "CANCELLING" | "AWS_FAILED";
export interface CreateConfigRequest {
  name: string;
  configData: ConfigTypeData;
  tags?: Record<string, string>;
}
export interface CreateDataflowEndpointGroupRequest {
  endpointDetails: Array<EndpointDetails>;
  tags?: Record<string, string>;
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
}
export interface CreateEphemerisRequest {
  satelliteId: string;
  enabled?: boolean;
  priority?: number;
  expirationTime?: Date | string;
  name: string;
  kmsKeyArn?: string;
  ephemeris?: EphemerisData;
  tags?: Record<string, string>;
}
export interface CreateMissionProfileRequest {
  name: string;
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
  minimumViableContactDurationSeconds: number;
  dataflowEdges: Array<Array<string>>;
  trackingConfigArn: string;
  tags?: Record<string, string>;
  streamsKmsKey?: KmsKey;
  streamsKmsRole?: string;
}
export type Criticality = "REQUIRED" | "PREFERRED" | "REMOVED";
export type CustomerEphemerisPriority = number;

export interface DataflowDetail {
  source?: Source;
  destination?: Destination;
  errorMessage?: string;
}
export type DataflowEdge = Array<string>;
export type DataflowEdgeList = Array<Array<string>>;
export interface DataflowEndpoint {
  name?: string;
  address?: SocketAddress;
  status?: EndpointStatus;
  mtu?: number;
}
export interface DataflowEndpointConfig {
  dataflowEndpointName: string;
  dataflowEndpointRegion?: string;
}
export type DataflowEndpointGroupArn = string;

export type DataflowEndpointGroupDurationInSeconds = number;

export interface DataflowEndpointGroupIdResponse {
  dataflowEndpointGroupId?: string;
}
export type DataflowEndpointGroupList = Array<DataflowEndpointListItem>;
export interface DataflowEndpointListItem {
  dataflowEndpointGroupId?: string;
  dataflowEndpointGroupArn?: string;
}
export type DataflowList = Array<DataflowDetail>;
export interface DecodeConfig {
  unvalidatedJSON: string;
}
export interface DeleteConfigRequest {
  configId: string;
  configType: ConfigCapabilityType;
}
export interface DeleteDataflowEndpointGroupRequest {
  dataflowEndpointGroupId: string;
}
export interface DeleteEphemerisRequest {
  ephemerisId: string;
}
export interface DeleteMissionProfileRequest {
  missionProfileId: string;
}
export interface DemodulationConfig {
  unvalidatedJSON: string;
}
export declare class DependencyException extends Data.TaggedError(
  "DependencyException",
)<{
  readonly message?: string;
  readonly parameterName?: string;
}> {}
export interface DescribeContactRequest {
  contactId: string;
}
export interface DescribeContactResponse {
  contactId?: string;
  missionProfileArn?: string;
  satelliteArn?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  prePassStartTime?: Date | string;
  postPassEndTime?: Date | string;
  groundStation?: string;
  contactStatus?: ContactStatus;
  errorMessage?: string;
  maximumElevation?: Elevation;
  tags?: Record<string, string>;
  region?: string;
  dataflowList?: Array<DataflowDetail>;
  visibilityStartTime?: Date | string;
  visibilityEndTime?: Date | string;
}
export interface DescribeEphemerisRequest {
  ephemerisId: string;
}
export interface DescribeEphemerisResponse {
  ephemerisId?: string;
  satelliteId?: string;
  status?: EphemerisStatus;
  priority?: number;
  creationTime?: Date | string;
  enabled?: boolean;
  name?: string;
  tags?: Record<string, string>;
  suppliedData?: EphemerisTypeDescription;
  invalidReason?: EphemerisInvalidReason;
}
export interface Destination {
  configType?: ConfigCapabilityType;
  configId?: string;
  configDetails?: ConfigDetails;
  dataflowDestinationRegion?: string;
}
export interface DiscoveryData {
  publicIpAddresses: Array<string>;
  privateIpAddresses: Array<string>;
  capabilityArns: Array<string>;
}
export type DurationInSeconds = number;

export interface Eirp {
  value: number;
  units: EirpUnits;
}
export type EirpUnits = "DBW";
export interface Elevation {
  value: number;
  unit: AngleUnits;
}
export interface EndpointDetails {
  securityDetails?: SecurityDetails;
  endpoint?: DataflowEndpoint;
  awsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint;
  healthStatus?: CapabilityHealth;
  healthReasons?: Array<CapabilityHealthReason>;
}
export type EndpointDetailsList = Array<EndpointDetails>;
export type EndpointStatus = "created" | "creating" | "deleted" | "deleting" | "failed";
export type EphemeridesList = Array<EphemerisItem>;
export type EphemerisData = { tle: TLEEphemeris } | { oem: OEMEphemeris };
export interface EphemerisDescription {
  sourceS3Object?: S3Object;
  ephemerisData?: string;
}
export interface EphemerisIdResponse {
  ephemerisId?: string;
}
export type EphemerisInvalidReason = "METADATA_INVALID" | "TIME_RANGE_INVALID" | "TRAJECTORY_INVALID" | "KMS_KEY_INVALID" | "VALIDATION_ERROR";
export interface EphemerisItem {
  ephemerisId?: string;
  status?: EphemerisStatus;
  priority?: number;
  enabled?: boolean;
  creationTime?: Date | string;
  name?: string;
  sourceS3Object?: S3Object;
}
export interface EphemerisMetaData {
  source: EphemerisSource;
  ephemerisId?: string;
  epoch?: Date | string;
  name?: string;
}
export type EphemerisPriority = number;

export type EphemerisSource = "CUSTOMER_PROVIDED" | "SPACE_TRACK";
export type EphemerisStatus = "VALIDATING" | "INVALID" | "ERROR" | "ENABLED" | "DISABLED" | "EXPIRED";
export type EphemerisStatusList = Array<EphemerisStatus>;
export type EphemerisTypeDescription = { tle: EphemerisDescription } | { oem: EphemerisDescription };
export interface Frequency {
  value: number;
  units: FrequencyUnits;
}
export interface FrequencyBandwidth {
  value: number;
  units: BandwidthUnits;
}
export type FrequencyUnits = "GHZ" | "MHZ" | "KHZ";
export interface GetAgentConfigurationRequest {
  agentId: string;
}
export interface GetAgentConfigurationResponse {
  agentId?: string;
  taskingDocument?: string;
}
export interface GetConfigRequest {
  configId: string;
  configType: ConfigCapabilityType;
}
export interface GetConfigResponse {
  configId: string;
  configArn: string;
  name: string;
  configType?: ConfigCapabilityType;
  configData: ConfigTypeData;
  tags?: Record<string, string>;
}
export interface GetDataflowEndpointGroupRequest {
  dataflowEndpointGroupId: string;
}
export interface GetDataflowEndpointGroupResponse {
  dataflowEndpointGroupId?: string;
  dataflowEndpointGroupArn?: string;
  endpointsDetails?: Array<EndpointDetails>;
  tags?: Record<string, string>;
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
}
export interface GetMinuteUsageRequest {
  month: number;
  year: number;
}
export interface GetMinuteUsageResponse {
  isReservedMinutesCustomer?: boolean;
  totalReservedMinuteAllocation?: number;
  upcomingMinutesScheduled?: number;
  totalScheduledMinutes?: number;
  estimatedMinutesRemaining?: number;
}
export interface GetMissionProfileRequest {
  missionProfileId: string;
}
export interface GetMissionProfileResponse {
  missionProfileId?: string;
  missionProfileArn?: string;
  name?: string;
  region?: string;
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
  minimumViableContactDurationSeconds?: number;
  dataflowEdges?: Array<Array<string>>;
  trackingConfigArn?: string;
  tags?: Record<string, string>;
  streamsKmsKey?: KmsKey;
  streamsKmsRole?: string;
}
export interface GetSatelliteRequest {
  satelliteId: string;
}
export interface GetSatelliteResponse {
  satelliteId?: string;
  satelliteArn?: string;
  noradSatelliteID?: number;
  groundStations?: Array<string>;
  currentEphemeris?: EphemerisMetaData;
}
export interface GroundStationData {
  groundStationId?: string;
  groundStationName?: string;
  region?: string;
}
export type GroundStationIdList = Array<string>;
export type GroundStationList = Array<GroundStationData>;
export type GroundStationName = string;

export type InstanceId = string;

export type InstanceType = string;

export interface IntegerRange {
  minimum: number;
  maximum: number;
}
export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
  readonly parameterName?: string;
}> {}
export type IpAddressList = Array<string>;
export type IpV4Address = string;

export type JsonString = string;

export type KeyAliasArn = string;

export type KeyAliasName = string;

export type KeyArn = string;

export type KmsKey = { kmsKeyArn: string } | { kmsAliasArn: string } | { kmsAliasName: string };
export interface ListConfigsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListConfigsResponse {
  nextToken?: string;
  configList?: Array<ConfigListItem>;
}
export interface ListContactsRequest {
  maxResults?: number;
  nextToken?: string;
  statusList: Array<ContactStatus>;
  startTime: Date | string;
  endTime: Date | string;
  groundStation?: string;
  satelliteArn?: string;
  missionProfileArn?: string;
}
export interface ListContactsResponse {
  nextToken?: string;
  contactList?: Array<ContactData>;
}
export interface ListDataflowEndpointGroupsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListDataflowEndpointGroupsResponse {
  nextToken?: string;
  dataflowEndpointGroupList?: Array<DataflowEndpointListItem>;
}
export interface ListEphemeridesRequest {
  satelliteId: string;
  startTime: Date | string;
  endTime: Date | string;
  statusList?: Array<EphemerisStatus>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListEphemeridesResponse {
  nextToken?: string;
  ephemerides?: Array<EphemerisItem>;
}
export interface ListGroundStationsRequest {
  satelliteId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListGroundStationsResponse {
  nextToken?: string;
  groundStationList?: Array<GroundStationData>;
}
export interface ListMissionProfilesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListMissionProfilesResponse {
  nextToken?: string;
  missionProfileList?: Array<MissionProfileListItem>;
}
export interface ListSatellitesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSatellitesResponse {
  nextToken?: string;
  satellites?: Array<SatelliteListItem>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type MissionProfileArn = string;

export interface MissionProfileIdResponse {
  missionProfileId?: string;
}
export type MissionProfileList = Array<MissionProfileListItem>;
export interface MissionProfileListItem {
  missionProfileId?: string;
  missionProfileArn?: string;
  region?: string;
  name?: string;
}
export type Month = number;

export type noradSatelliteID = number;

export interface OEMEphemeris {
  s3Object?: S3Object;
  oemData?: string;
}
export type PaginationMaxResults = number;

export type PaginationToken = string;

export type Polarization = "RIGHT_HAND" | "LEFT_HAND" | "NONE";
export type PositiveDurationInSeconds = number;

export interface RangedConnectionDetails {
  socketAddress: RangedSocketAddress;
  mtu?: number;
}
export interface RangedSocketAddress {
  name: string;
  portRange: IntegerRange;
}
export interface RegisterAgentRequest {
  discoveryData: DiscoveryData;
  agentDetails: AgentDetails;
  tags?: Record<string, string>;
}
export interface RegisterAgentResponse {
  agentId?: string;
}
export interface ReserveContactRequest {
  missionProfileArn: string;
  satelliteArn: string;
  startTime: Date | string;
  endTime: Date | string;
  groundStation: string;
  tags?: Record<string, string>;
}
export declare class ResourceLimitExceededException extends Data.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly message?: string;
  readonly parameterName?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export type S3BucketName = string;

export type S3KeyPrefix = string;

export interface S3Object {
  bucket?: string;
  key?: string;
  version?: string;
}
export type S3ObjectKey = string;

export interface S3RecordingConfig {
  bucketArn: string;
  roleArn: string;
  prefix?: string;
}
export interface S3RecordingDetails {
  bucketArn?: string;
  keyTemplate?: string;
}
export type S3VersionId = string;

export type SafeName = string;

export type satelliteArn = string;

export type SatelliteList = Array<SatelliteListItem>;
export interface SatelliteListItem {
  satelliteId?: string;
  satelliteArn?: string;
  noradSatelliteID?: number;
  groundStations?: Array<string>;
  currentEphemeris?: EphemerisMetaData;
}
export interface SecurityDetails {
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  roleArn: string;
}
export type SecurityGroupIdList = Array<string>;
export type SignatureMap = Record<string, boolean>;
export interface SocketAddress {
  name: string;
  port: number;
}
export interface Source {
  configType?: ConfigCapabilityType;
  configId?: string;
  configDetails?: ConfigDetails;
  dataflowSourceRegion?: string;
}
export interface SpectrumConfig {
  centerFrequency: Frequency;
  bandwidth: FrequencyBandwidth;
  polarization?: Polarization;
}
export type StatusList = Array<ContactStatus>;
export type SubnetList = Array<string>;
export type TagKeys = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagsMap = Record<string, string>;
export interface TimeRange {
  startTime: Date | string;
  endTime: Date | string;
}
export interface TLEData {
  tleLine1: string;
  tleLine2: string;
  validTimeRange: TimeRange;
}
export type TLEDataList = Array<TLEData>;
export interface TLEEphemeris {
  s3Object?: S3Object;
  tleData?: Array<TLEData>;
}
export type TleLineOne = string;

export type TleLineTwo = string;

export interface TrackingConfig {
  autotrack: Criticality;
}
export type UnboundedString = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateAgentStatusRequest {
  agentId: string;
  taskId: string;
  aggregateStatus: AggregateStatus;
  componentStatuses: Array<ComponentStatusData>;
}
export interface UpdateAgentStatusResponse {
  agentId: string;
}
export interface UpdateConfigRequest {
  configId: string;
  name: string;
  configType: ConfigCapabilityType;
  configData: ConfigTypeData;
}
export interface UpdateEphemerisRequest {
  ephemerisId: string;
  enabled: boolean;
  name?: string;
  priority?: number;
}
export interface UpdateMissionProfileRequest {
  missionProfileId: string;
  name?: string;
  contactPrePassDurationSeconds?: number;
  contactPostPassDurationSeconds?: number;
  minimumViableContactDurationSeconds?: number;
  dataflowEdges?: Array<Array<string>>;
  trackingConfigArn?: string;
  streamsKmsKey?: KmsKey;
  streamsKmsRole?: string;
}
export interface UplinkEchoConfig {
  enabled: boolean;
  antennaUplinkConfigArn: string;
}
export interface UplinkSpectrumConfig {
  centerFrequency: Frequency;
  polarization?: Polarization;
}
export type Uuid = string;

export type VersionString = string;

export type VersionStringList = Array<string>;
export type Year = number;

export declare namespace CancelContact {
  export type Input = CancelContactRequest;
  export type Output = ContactIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateConfig {
  export type Input = CreateConfigRequest;
  export type Output = ConfigIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateDataflowEndpointGroup {
  export type Input = CreateDataflowEndpointGroupRequest;
  export type Output = DataflowEndpointGroupIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateEphemeris {
  export type Input = CreateEphemerisRequest;
  export type Output = EphemerisIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateMissionProfile {
  export type Input = CreateMissionProfileRequest;
  export type Output = MissionProfileIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteConfig {
  export type Input = DeleteConfigRequest;
  export type Output = ConfigIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDataflowEndpointGroup {
  export type Input = DeleteDataflowEndpointGroupRequest;
  export type Output = DataflowEndpointGroupIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteEphemeris {
  export type Input = DeleteEphemerisRequest;
  export type Output = EphemerisIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteMissionProfile {
  export type Input = DeleteMissionProfileRequest;
  export type Output = MissionProfileIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeContact {
  export type Input = DescribeContactRequest;
  export type Output = DescribeContactResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeEphemeris {
  export type Input = DescribeEphemerisRequest;
  export type Output = DescribeEphemerisResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetAgentConfiguration {
  export type Input = GetAgentConfigurationRequest;
  export type Output = GetAgentConfigurationResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetConfig {
  export type Input = GetConfigRequest;
  export type Output = GetConfigResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDataflowEndpointGroup {
  export type Input = GetDataflowEndpointGroupRequest;
  export type Output = GetDataflowEndpointGroupResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMinuteUsage {
  export type Input = GetMinuteUsageRequest;
  export type Output = GetMinuteUsageResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetMissionProfile {
  export type Input = GetMissionProfileRequest;
  export type Output = GetMissionProfileResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSatellite {
  export type Input = GetSatelliteRequest;
  export type Output = GetSatelliteResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListConfigs {
  export type Input = ListConfigsRequest;
  export type Output = ListConfigsResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListContacts {
  export type Input = ListContactsRequest;
  export type Output = ListContactsResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListDataflowEndpointGroups {
  export type Input = ListDataflowEndpointGroupsRequest;
  export type Output = ListDataflowEndpointGroupsResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListEphemerides {
  export type Input = ListEphemeridesRequest;
  export type Output = ListEphemeridesResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListGroundStations {
  export type Input = ListGroundStationsRequest;
  export type Output = ListGroundStationsResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListMissionProfiles {
  export type Input = ListMissionProfilesRequest;
  export type Output = ListMissionProfilesResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListSatellites {
  export type Input = ListSatellitesRequest;
  export type Output = ListSatellitesResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RegisterAgent {
  export type Input = RegisterAgentRequest;
  export type Output = RegisterAgentResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ReserveContact {
  export type Input = ReserveContactRequest;
  export type Output = ContactIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateAgentStatus {
  export type Input = UpdateAgentStatusRequest;
  export type Output = UpdateAgentStatusResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateConfig {
  export type Input = UpdateConfigRequest;
  export type Output = ConfigIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEphemeris {
  export type Input = UpdateEphemerisRequest;
  export type Output = EphemerisIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateMissionProfile {
  export type Input = UpdateMissionProfileRequest;
  export type Output = MissionProfileIdResponse;
  export type Error =
    | DependencyException
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

