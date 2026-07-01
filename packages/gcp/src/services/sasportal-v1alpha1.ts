// ==========================================================================
// SAS Portal API (sasportal v1alpha1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "sasportal",
  version: "v1alpha1",
  rootUrl: "https://sasportal.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SasPortalMoveDeviceRequest {
  /** Required. The name of the new parent resource node or customer to reparent the device under. */
  destination?: string;
}

export const SasPortalMoveDeviceRequest: Schema.Codec<SasPortalMoveDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalMoveDeviceRequest" });

export interface SasPortalMoveNodeRequest {
  /** Required. The name of the new parent resource node or customer to reparent the node under. */
  destination?: string;
}

export const SasPortalMoveNodeRequest: Schema.Codec<SasPortalMoveNodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalMoveNodeRequest" });

export interface SasPortalDeployment {
  /** User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID. */
  sasUserIds?: ReadonlyArray<string>;
  /** Output only. Resource name. */
  name?: string;
  /** Output only. The FCC Registration Numbers (FRNs) copied from its direct parent. */
  frns?: ReadonlyArray<string>;
  /** The deployment's display name. */
  displayName?: string;
}

export const SasPortalDeployment: Schema.Codec<SasPortalDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sasUserIds: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    frns: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalDeployment" });

export interface SasPortalGcpProjectDeployment {
  /** Whether SAS analytics has been enabled. */
  hasEnabledAnalytics?: boolean;
  /** Deployment associated with the GCP project. */
  deployment?: SasPortalDeployment;
}

export const SasPortalGcpProjectDeployment: Schema.Codec<SasPortalGcpProjectDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasEnabledAnalytics: Schema.optional(Schema.Boolean),
    deployment: Schema.optional(SasPortalDeployment),
  }).annotate({ identifier: "SasPortalGcpProjectDeployment" });

export interface SasPortalListGcpProjectDeploymentsResponse {
  /** Optional. Deployments associated with the GCP project */
  deployments?: ReadonlyArray<SasPortalGcpProjectDeployment>;
}

export const SasPortalListGcpProjectDeploymentsResponse: Schema.Codec<SasPortalListGcpProjectDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(Schema.Array(SasPortalGcpProjectDeployment)),
  }).annotate({ identifier: "SasPortalListGcpProjectDeploymentsResponse" });

export interface SasPortalNrqzValidation {
  /** Device longitude that's associated with the validation. */
  longitude?: number;
  /** Validation case ID. */
  caseId?: string;
  /** State of the NRQZ validation info. */
  state?: "STATE_UNSPECIFIED" | "DRAFT" | "FINAL" | (string & {});
  /** Device latitude that's associated with the validation. */
  latitude?: number;
  /** CPI who signed the validation. */
  cpiId?: string;
}

export const SasPortalNrqzValidation: Schema.Codec<SasPortalNrqzValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    longitude: Schema.optional(Schema.Number),
    caseId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    latitude: Schema.optional(Schema.Number),
    cpiId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalNrqzValidation" });

export interface SasPortalListDeploymentsResponse {
  /** The deployments that match the request. */
  deployments?: ReadonlyArray<SasPortalDeployment>;
  /** A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments. */
  nextPageToken?: string;
}

export const SasPortalListDeploymentsResponse: Schema.Codec<SasPortalListDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(Schema.Array(SasPortalDeployment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalListDeploymentsResponse" });

export interface SasPortalUpdateSignedDeviceRequest {
  /** Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set. */
  encodedDevice?: string;
  /** Required. Unique installer ID (CPI ID) from the Certified Professional Installers database. */
  installerId?: string;
}

export const SasPortalUpdateSignedDeviceRequest: Schema.Codec<SasPortalUpdateSignedDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encodedDevice: Schema.optional(Schema.String),
    installerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalUpdateSignedDeviceRequest" });

export interface SasPortalNode {
  /** The node's display name. */
  displayName?: string;
  /** User ids used by the devices belonging to this node. */
  sasUserIds?: ReadonlyArray<string>;
  /** Output only. Resource name. */
  name?: string;
}

export const SasPortalNode: Schema.Codec<SasPortalNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    sasUserIds: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalNode" });

export interface SasPortalFrequencyRange {
  /** The lowest frequency of the frequency range in MHz. */
  lowFrequencyMhz?: number;
  /** The highest frequency of the frequency range in MHz. */
  highFrequencyMhz?: number;
}

export const SasPortalFrequencyRange: Schema.Codec<SasPortalFrequencyRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lowFrequencyMhz: Schema.optional(Schema.Number),
    highFrequencyMhz: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SasPortalFrequencyRange" });

export interface SasPortalInstallationParams {
  /** Device antenna height in meters. When the `heightType` parameter value is "AGL", the antenna height should be given relative to ground level. When the `heightType` parameter value is "AMSL", it is given with respect to WGS84 datum. */
  height?: number;
  /** A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters. */
  horizontalAccuracy?: number;
  /** Peak antenna gain in dBi. This parameter is a double with a value between -127 and +128 (dBi) inclusive. Part of Release 2 to support floating-point value */
  antennaGain?: number;
  /** Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices. */
  antennaAzimuth?: number;
  /** A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters. */
  verticalAccuracy?: number;
  /** Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator. */
  latitude?: number;
  /** Specifies how the height is measured. */
  heightType?:
    | "HEIGHT_TYPE_UNSPECIFIED"
    | "HEIGHT_TYPE_AGL"
    | "HEIGHT_TYPE_AMSL"
    | (string & {});
  /** Whether the device antenna is indoor or not. `true`: indoor. `false`: outdoor. */
  indoorDeployment?: boolean;
  /** This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category. */
  eirpCapability?: number;
  /** If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets. */
  antennaModel?: string;
  /** Longitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian. */
  longitude?: number;
  /** Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices. */
  antennaDowntilt?: number;
  /** 3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices. */
  antennaBeamwidth?: number;
  /** If present, this parameter specifies whether the CBSD is a CPE-CBSD or not. */
  cpeCbsdIndication?: boolean;
}

export const SasPortalInstallationParams: Schema.Codec<SasPortalInstallationParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    height: Schema.optional(Schema.Number),
    horizontalAccuracy: Schema.optional(Schema.Number),
    antennaGain: Schema.optional(Schema.Number),
    antennaAzimuth: Schema.optional(Schema.Number),
    verticalAccuracy: Schema.optional(Schema.Number),
    latitude: Schema.optional(Schema.Number),
    heightType: Schema.optional(Schema.String),
    indoorDeployment: Schema.optional(Schema.Boolean),
    eirpCapability: Schema.optional(Schema.Number),
    antennaModel: Schema.optional(Schema.String),
    longitude: Schema.optional(Schema.Number),
    antennaDowntilt: Schema.optional(Schema.Number),
    antennaBeamwidth: Schema.optional(Schema.Number),
    cpeCbsdIndication: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SasPortalInstallationParams" });

export interface SasPortalDeviceModel {
  /** The name of the device model. */
  name?: string;
  /** The software version of the device. */
  softwareVersion?: string;
  /** The firmware version of the device. */
  firmwareVersion?: string;
  /** The hardware version of the device. */
  hardwareVersion?: string;
  /** The name of the device vendor. */
  vendor?: string;
}

export const SasPortalDeviceModel: Schema.Codec<SasPortalDeviceModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    softwareVersion: Schema.optional(Schema.String),
    firmwareVersion: Schema.optional(Schema.String),
    hardwareVersion: Schema.optional(Schema.String),
    vendor: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalDeviceModel" });

export interface SasPortalDeviceAirInterface {
  /** Optional. This field is related to the `radioTechnology` and provides the air interface specification that the CBSD is compliant with at the time of registration. */
  supportedSpec?: string;
  /** Conditional. This field specifies the radio access technology that is used for the CBSD. */
  radioTechnology?:
    | "RADIO_TECHNOLOGY_UNSPECIFIED"
    | "E_UTRA"
    | "CAMBIUM_NETWORKS"
    | "FOUR_G_BBW_SAA_1"
    | "NR"
    | "DOODLE_CBRS"
    | "CW"
    | "REDLINE"
    | "TARANA_WIRELESS"
    | "FAROS"
    | (string & {});
}

export const SasPortalDeviceAirInterface: Schema.Codec<SasPortalDeviceAirInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportedSpec: Schema.optional(Schema.String),
    radioTechnology: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalDeviceAirInterface" });

export interface SasPortalDeviceConfig {
  /** State of the configuration. */
  state?: "DEVICE_CONFIG_STATE_UNSPECIFIED" | "DRAFT" | "FINAL" | (string & {});
  /** Installation parameters for the device. */
  installationParams?: SasPortalInstallationParams;
  /** Measurement reporting capabilities of the device. */
  measurementCapabilities?: ReadonlyArray<
    | "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    | "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT"
    | "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT"
    | (string & {})
  >;
  /** Information about this device model. */
  model?: SasPortalDeviceModel;
  /** Information about this device's air interface. */
  airInterface?: SasPortalDeviceAirInterface;
  /** The call sign of the device operator. */
  callSign?: string;
  /** Output only. Whether the configuration has been signed by a CPI. */
  isSigned?: boolean;
  /** FCC category of the device. */
  category?:
    | "DEVICE_CATEGORY_UNSPECIFIED"
    | "DEVICE_CATEGORY_A"
    | "DEVICE_CATEGORY_B"
    | (string & {});
  /** The identifier of a device user. */
  userId?: string;
  /** Output only. The last time the device configuration was edited. */
  updateTime?: string;
}

export const SasPortalDeviceConfig: Schema.Codec<SasPortalDeviceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    installationParams: Schema.optional(SasPortalInstallationParams),
    measurementCapabilities: Schema.optional(Schema.Array(Schema.String)),
    model: Schema.optional(SasPortalDeviceModel),
    airInterface: Schema.optional(SasPortalDeviceAirInterface),
    callSign: Schema.optional(Schema.String),
    isSigned: Schema.optional(Schema.Boolean),
    category: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalDeviceConfig" });

export interface SasPortalChannelWithScore {
  /** The frequency range of the channel. */
  frequencyRange?: SasPortalFrequencyRange;
  /** The channel score, normalized to be in the range [0,100]. */
  score?: number;
}

export const SasPortalChannelWithScore: Schema.Codec<SasPortalChannelWithScore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frequencyRange: Schema.optional(SasPortalFrequencyRange),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SasPortalChannelWithScore" });

export interface SasPortalDeviceMetadata {
  /** Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf). */
  interferenceCoordinationGroup?: string;
  /** Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf). */
  commonChannelGroup?: string;
  /** Output only. Set to `true` if a CPI has validated that they have coordinated with the National Quiet Zone office. */
  nrqzValidated?: boolean;
  /** Output only. National Radio Quiet Zone validation info. */
  nrqzValidation?: SasPortalNrqzValidation;
  /** If populated, the Antenna Model Pattern to use. Format is: `RecordCreatorId:PatternId` */
  antennaModel?: string;
}

export const SasPortalDeviceMetadata: Schema.Codec<SasPortalDeviceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interferenceCoordinationGroup: Schema.optional(Schema.String),
    commonChannelGroup: Schema.optional(Schema.String),
    nrqzValidated: Schema.optional(Schema.Boolean),
    nrqzValidation: Schema.optional(SasPortalNrqzValidation),
    antennaModel: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalDeviceMetadata" });

export interface SasPortalDpaMoveList {
  /** The ID of the DPA. */
  dpaId?: string;
  /** The frequency range that the move list affects. */
  frequencyRange?: SasPortalFrequencyRange;
}

export const SasPortalDpaMoveList: Schema.Codec<SasPortalDpaMoveList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dpaId: Schema.optional(Schema.String),
    frequencyRange: Schema.optional(SasPortalFrequencyRange),
  }).annotate({ identifier: "SasPortalDpaMoveList" });

export interface SasPortalDeviceGrant {
  /** Grant Id. */
  grantId?: string;
  /** Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of `maxEirp` represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3). */
  maxEirp?: number;
  /** Type of channel used. */
  channelType?:
    | "CHANNEL_TYPE_UNSPECIFIED"
    | "CHANNEL_TYPE_GAA"
    | "CHANNEL_TYPE_PAL"
    | (string & {});
  /** The expiration time of the grant. */
  expireTime?: string;
  /** The transmit expiration time of the last heartbeat. */
  lastHeartbeatTransmitExpireTime?: string;
  /** If the grant is suspended, the reason(s) for suspension. */
  suspensionReason?: ReadonlyArray<string>;
  /** The transmission frequency range. */
  frequencyRange?: SasPortalFrequencyRange;
  /** State of the grant. */
  state?:
    | "GRANT_STATE_UNSPECIFIED"
    | "GRANT_STATE_GRANTED"
    | "GRANT_STATE_TERMINATED"
    | "GRANT_STATE_SUSPENDED"
    | "GRANT_STATE_AUTHORIZED"
    | "GRANT_STATE_EXPIRED"
    | (string & {});
  /** The DPA move lists on which this grant appears. */
  moveList?: ReadonlyArray<SasPortalDpaMoveList>;
}

export const SasPortalDeviceGrant: Schema.Codec<SasPortalDeviceGrant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grantId: Schema.optional(Schema.String),
    maxEirp: Schema.optional(Schema.Number),
    channelType: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    lastHeartbeatTransmitExpireTime: Schema.optional(Schema.String),
    suspensionReason: Schema.optional(Schema.Array(Schema.String)),
    frequencyRange: Schema.optional(SasPortalFrequencyRange),
    state: Schema.optional(Schema.String),
    moveList: Schema.optional(Schema.Array(SasPortalDpaMoveList)),
  }).annotate({ identifier: "SasPortalDeviceGrant" });

export interface SasPortalDevice {
  /** A serial number assigned to the device by the device manufacturer. */
  serialNumber?: string;
  /** The FCC identifier of the device. Refer to https://www.fcc.gov/oet/ea/fccid for FccID format. Accept underscores and periods because some test-SAS customers use them. */
  fccId?: string;
  /** Only ranges that are within the allowlists are available for new grants. */
  grantRangeAllowlists?: ReadonlyArray<SasPortalFrequencyRange>;
  /** Output only. The resource path name. */
  name?: string;
  /** Output only. Device state. */
  state?:
    | "DEVICE_STATE_UNSPECIFIED"
    | "RESERVED"
    | "REGISTERED"
    | "DEREGISTERED"
    | (string & {});
  /** Configuration of the device, as specified via SAS Portal API. */
  preloadedConfig?: SasPortalDeviceConfig;
  /** Output only. Current configuration of the device as registered to the SAS. */
  activeConfig?: SasPortalDeviceConfig;
  /** Output only. Current channels with scores. */
  currentChannels?: ReadonlyArray<SasPortalChannelWithScore>;
  /** Device parameters that can be overridden by both SAS Portal and SAS registration requests. */
  deviceMetadata?: SasPortalDeviceMetadata;
  /** Output only. Grants held by the device. */
  grants?: ReadonlyArray<SasPortalDeviceGrant>;
  /** Device display name. */
  displayName?: string;
}

export const SasPortalDevice: Schema.Codec<SasPortalDevice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serialNumber: Schema.optional(Schema.String),
    fccId: Schema.optional(Schema.String),
    grantRangeAllowlists: Schema.optional(
      Schema.Array(SasPortalFrequencyRange),
    ),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    preloadedConfig: Schema.optional(SasPortalDeviceConfig),
    activeConfig: Schema.optional(SasPortalDeviceConfig),
    currentChannels: Schema.optional(Schema.Array(SasPortalChannelWithScore)),
    deviceMetadata: Schema.optional(SasPortalDeviceMetadata),
    grants: Schema.optional(Schema.Array(SasPortalDeviceGrant)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalDevice" });

export interface SasPortalAssignment {
  /** Required. Role that is assigned to `members`. */
  role?: string;
  /** The identities the role is assigned to. It can have the following values: * `{user_email}`: An email address that represents a specific Google account. For example: `alice@gmail.com`. * `{group_email}`: An email address that represents a Google group. For example, `viewers@gmail.com`. */
  members?: ReadonlyArray<string>;
}

export const SasPortalAssignment: Schema.Codec<SasPortalAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SasPortalAssignment" });

export interface SasPortalPolicy {
  /** List of assignments */
  assignments?: ReadonlyArray<SasPortalAssignment>;
  /** The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly. */
  etag?: string;
}

export const SasPortalPolicy: Schema.Codec<SasPortalPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assignments: Schema.optional(Schema.Array(SasPortalAssignment)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalPolicy" });

export interface SasPortalSetPolicyRequest {
  /** Required. The resource for which the policy is being specified. This policy replaces any existing policy. */
  resource?: string;
  /** Required. The policy to be applied to the `resource`. */
  policy?: SasPortalPolicy;
  /** Optional. Set the field as `true` to disable the onboarding notification. */
  disableNotification?: boolean;
}

export const SasPortalSetPolicyRequest: Schema.Codec<SasPortalSetPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    policy: Schema.optional(SasPortalPolicy),
    disableNotification: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SasPortalSetPolicyRequest" });

export interface SasPortalEmpty {}

export const SasPortalEmpty: Schema.Codec<SasPortalEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SasPortalEmpty",
  });

export interface SasPortalListDevicesResponse {
  /** The devices that match the request. */
  devices?: ReadonlyArray<SasPortalDevice>;
  /** A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices. */
  nextPageToken?: string;
}

export const SasPortalListDevicesResponse: Schema.Codec<SasPortalListDevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(Schema.Array(SasPortalDevice)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalListDevicesResponse" });

export interface SasPortalGetPolicyRequest {
  /** Required. The resource for which the policy is being requested. */
  resource?: string;
}

export const SasPortalGetPolicyRequest: Schema.Codec<SasPortalGetPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalGetPolicyRequest" });

export interface SasPortalCreateSignedDeviceRequest {
  /** Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set. */
  encodedDevice?: string;
  /** Required. Unique installer id (CPI ID) from the Certified Professional Installers database. */
  installerId?: string;
}

export const SasPortalCreateSignedDeviceRequest: Schema.Codec<SasPortalCreateSignedDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encodedDevice: Schema.optional(Schema.String),
    installerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalCreateSignedDeviceRequest" });

export interface SasPortalDeploymentAssociation {
  /** GCP project id of the associated project. */
  gcpProjectId?: string;
  /** User id of the deployment. */
  userId?: string;
}

export const SasPortalDeploymentAssociation: Schema.Codec<SasPortalDeploymentAssociation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpProjectId: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalDeploymentAssociation" });

export interface SasPortalMigrateOrganizationMetadata {
  /** Output only. Current operation state */
  operationState?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "OPERATION_STATE_PENDING"
    | "OPERATION_STATE_RUNNING"
    | "OPERATION_STATE_SUCCEEDED"
    | "OPERATION_STATE_FAILED"
    | (string & {});
}

export const SasPortalMigrateOrganizationMetadata: Schema.Codec<SasPortalMigrateOrganizationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationState: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalMigrateOrganizationMetadata" });

export interface SasPortalSetupSasAnalyticsResponse {}

export const SasPortalSetupSasAnalyticsResponse: Schema.Codec<SasPortalSetupSasAnalyticsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SasPortalSetupSasAnalyticsResponse",
  });

export interface SasPortalStatus {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const SasPortalStatus: Schema.Codec<SasPortalStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SasPortalStatus" });

export interface SasPortalOperation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: SasPortalStatus;
}

export const SasPortalOperation: Schema.Codec<SasPortalOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(SasPortalStatus),
  }).annotate({ identifier: "SasPortalOperation" });

export interface SasPortalSetupSasAnalyticsRequest {
  /** Optional. User id to setup analytics for, if not provided the user id associated with the project is used. optional */
  userId?: string;
}

export const SasPortalSetupSasAnalyticsRequest: Schema.Codec<SasPortalSetupSasAnalyticsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalSetupSasAnalyticsRequest" });

export interface SasPortalTestPermissionsRequest {
  /** The set of permissions to check for the `resource`. */
  permissions?: ReadonlyArray<string>;
  /** Required. The resource for which the permissions are being requested. */
  resource?: string;
}

export const SasPortalTestPermissionsRequest: Schema.Codec<SasPortalTestPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalTestPermissionsRequest" });

export interface SasPortalMigrateOrganizationResponse {
  /** Optional. A list of deployment association that were created for the migration, or current associations if they already exist. */
  deploymentAssociation?: ReadonlyArray<SasPortalDeploymentAssociation>;
}

export const SasPortalMigrateOrganizationResponse: Schema.Codec<SasPortalMigrateOrganizationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentAssociation: Schema.optional(
      Schema.Array(SasPortalDeploymentAssociation),
    ),
  }).annotate({ identifier: "SasPortalMigrateOrganizationResponse" });

export interface SasPortalTestPermissionsResponse {
  /** A set of permissions that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const SasPortalTestPermissionsResponse: Schema.Codec<SasPortalTestPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SasPortalTestPermissionsResponse" });

export interface SasPortalGenerateSecretResponse {
  /** The secret generated by the string and used by ValidateInstaller. */
  secret?: string;
}

export const SasPortalGenerateSecretResponse: Schema.Codec<SasPortalGenerateSecretResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secret: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalGenerateSecretResponse" });

export interface SasPortalSetupSasAnalyticsMetadata {}

export const SasPortalSetupSasAnalyticsMetadata: Schema.Codec<SasPortalSetupSasAnalyticsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SasPortalSetupSasAnalyticsMetadata",
  });

export interface SasPortalProvisionDeploymentResponse {
  /** Optional. Optional error message if the provisioning request is not successful. */
  errorMessage?: string;
}

export const SasPortalProvisionDeploymentResponse: Schema.Codec<SasPortalProvisionDeploymentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalProvisionDeploymentResponse" });

export interface SasPortalOrganization {
  /** Name of organization */
  displayName?: string;
  /** Id of organization */
  id?: string;
}

export const SasPortalOrganization: Schema.Codec<SasPortalOrganization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalOrganization" });

export interface SasPortalListLegacyOrganizationsResponse {
  /** Optional. Legacy SAS organizations. */
  organizations?: ReadonlyArray<SasPortalOrganization>;
}

export const SasPortalListLegacyOrganizationsResponse: Schema.Codec<SasPortalListLegacyOrganizationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizations: Schema.optional(Schema.Array(SasPortalOrganization)),
  }).annotate({ identifier: "SasPortalListLegacyOrganizationsResponse" });

export interface SasPortalSignDeviceRequest {
  /** Required. The device to sign. The device fields name, fcc_id and serial_number must be set. The user_id field must be set. */
  device?: SasPortalDevice;
}

export const SasPortalSignDeviceRequest: Schema.Codec<SasPortalSignDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(SasPortalDevice),
  }).annotate({ identifier: "SasPortalSignDeviceRequest" });

export interface SasPortalListNodesResponse {
  /** A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes. */
  nextPageToken?: string;
  /** The nodes that match the request. */
  nodes?: ReadonlyArray<SasPortalNode>;
}

export const SasPortalListNodesResponse: Schema.Codec<SasPortalListNodesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(SasPortalNode)),
  }).annotate({ identifier: "SasPortalListNodesResponse" });

export interface SasPortalProvisionDeploymentRequest {
  /** Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field. */
  newDeploymentDisplayName?: string;
  /** Optional. If this field is set then a new deployment will be created under the organization specified by this id. */
  organizationId?: string;
  /** Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field. */
  newOrganizationDisplayName?: string;
}

export const SasPortalProvisionDeploymentRequest: Schema.Codec<SasPortalProvisionDeploymentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newDeploymentDisplayName: Schema.optional(Schema.String),
    organizationId: Schema.optional(Schema.String),
    newOrganizationDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalProvisionDeploymentRequest" });

export interface SasPortalMigrateOrganizationRequest {
  /** Required. Id of the SAS organization to be migrated. */
  organizationId?: string;
}

export const SasPortalMigrateOrganizationRequest: Schema.Codec<SasPortalMigrateOrganizationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalMigrateOrganizationRequest" });

export interface SasPortalCustomer {
  /** Required. Name of the organization that the customer entity represents. */
  displayName?: string;
  /** User IDs used by the devices belonging to this customer. */
  sasUserIds?: ReadonlyArray<string>;
  /** Output only. Resource name of the customer. */
  name?: string;
}

export const SasPortalCustomer: Schema.Codec<SasPortalCustomer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    sasUserIds: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalCustomer" });

export interface SasPortalListCustomersResponse {
  /** A pagination token returned from a previous call to ListCustomers that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers. */
  nextPageToken?: string;
  /** The list of customers that match the request. */
  customers?: ReadonlyArray<SasPortalCustomer>;
}

export const SasPortalListCustomersResponse: Schema.Codec<SasPortalListCustomersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    customers: Schema.optional(Schema.Array(SasPortalCustomer)),
  }).annotate({ identifier: "SasPortalListCustomersResponse" });

export interface SasPortalValidateInstallerResponse {}

export const SasPortalValidateInstallerResponse: Schema.Codec<SasPortalValidateInstallerResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SasPortalValidateInstallerResponse",
  });

export interface SasPortalGenerateSecretRequest {}

export const SasPortalGenerateSecretRequest: Schema.Codec<SasPortalGenerateSecretRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SasPortalGenerateSecretRequest",
  });

export interface SasPortalMoveDeploymentRequest {
  /** Required. The name of the new parent resource node or customer to reparent the deployment under. */
  destination?: string;
}

export const SasPortalMoveDeploymentRequest: Schema.Codec<SasPortalMoveDeploymentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalMoveDeploymentRequest" });

export interface SasPortalValidateInstallerRequest {
  /** Required. Secret returned by the GenerateSecret. */
  secret?: string;
  /** Required. Unique installer id (CPI ID) from the Certified Professional Installers database. */
  installerId?: string;
  /** Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret. */
  encodedSecret?: string;
}

export const SasPortalValidateInstallerRequest: Schema.Codec<SasPortalValidateInstallerRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secret: Schema.optional(Schema.String),
    installerId: Schema.optional(Schema.String),
    encodedSecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "SasPortalValidateInstallerRequest" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface GenerateSecretInstallerRequest {
  /** Request body */
  body?: SasPortalGenerateSecretRequest;
}

export const GenerateSecretInstallerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(SasPortalGenerateSecretRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/installer:generateSecret",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateSecretInstallerRequest>;

export type GenerateSecretInstallerResponse = SasPortalGenerateSecretResponse;
export const GenerateSecretInstallerResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalGenerateSecretResponse;

export type GenerateSecretInstallerError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a secret to be used with the ValidateInstaller. */
export const generateSecretInstaller: API.OperationMethod<
  GenerateSecretInstallerRequest,
  GenerateSecretInstallerResponse,
  GenerateSecretInstallerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateSecretInstallerRequest,
  output: GenerateSecretInstallerResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateInstallerRequest {
  /** Request body */
  body?: SasPortalValidateInstallerRequest;
}

export const ValidateInstallerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(SasPortalValidateInstallerRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/installer:validate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ValidateInstallerRequest>;

export type ValidateInstallerResponse = SasPortalValidateInstallerResponse;
export const ValidateInstallerResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalValidateInstallerResponse;

export type ValidateInstallerError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates the identity of a Certified Professional Installer (CPI). */
export const validateInstaller: API.OperationMethod<
  ValidateInstallerRequest,
  ValidateInstallerResponse,
  ValidateInstallerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateInstallerRequest,
  output: ValidateInstallerResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetPoliciesRequest {
  /** Request body */
  body?: SasPortalSetPolicyRequest;
}

export const SetPoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(SasPortalSetPolicyRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1alpha1/policies:set", hasBody: true }),
  svc,
) as unknown as Schema.Codec<SetPoliciesRequest>;

export type SetPoliciesResponse = SasPortalPolicy;
export const SetPoliciesResponse = /*@__PURE__*/ /*#__PURE__*/ SasPortalPolicy;

export type SetPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. */
export const setPolicies: API.OperationMethod<
  SetPoliciesRequest,
  SetPoliciesResponse,
  SetPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetPoliciesRequest,
  output: SetPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPoliciesRequest {
  /** Request body */
  body?: SasPortalGetPolicyRequest;
}

export const GetPoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(SasPortalGetPolicyRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1alpha1/policies:get", hasBody: true }),
  svc,
) as unknown as Schema.Codec<GetPoliciesRequest>;

export type GetPoliciesResponse = SasPortalPolicy;
export const GetPoliciesResponse = /*@__PURE__*/ /*#__PURE__*/ SasPortalPolicy;

export type GetPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getPolicies: API.OperationMethod<
  GetPoliciesRequest,
  GetPoliciesResponse,
  GetPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPoliciesRequest,
  output: GetPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestPoliciesRequest {
  /** Request body */
  body?: SasPortalTestPermissionsRequest;
}

export const TestPoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(SasPortalTestPermissionsRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1alpha1/policies:test", hasBody: true }),
  svc,
) as unknown as Schema.Codec<TestPoliciesRequest>;

export type TestPoliciesResponse = SasPortalTestPermissionsResponse;
export const TestPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalTestPermissionsResponse;

export type TestPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. */
export const testPolicies: API.OperationMethod<
  TestPoliciesRequest,
  TestPoliciesResponse,
  TestPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestPoliciesRequest,
  output: TestPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCustomersRequest {
  /** Required. The name of the customer. */
  name: string;
}

export const GetCustomersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetCustomersRequest>;

export type GetCustomersResponse = SasPortalCustomer;
export const GetCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalCustomer;

export type GetCustomersError = DefaultErrors | NotFound | Forbidden;

/** Returns a requested customer. */
export const getCustomers: API.OperationMethod<
  GetCustomersRequest,
  GetCustomersResponse,
  GetCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersRequest,
  output: GetCustomersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListGcpProjectDeploymentsCustomersRequest {}

export const ListGcpProjectDeploymentsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha1/customers:listGcpProjectDeployments",
    }),
    svc,
  ) as unknown as Schema.Codec<ListGcpProjectDeploymentsCustomersRequest>;

export type ListGcpProjectDeploymentsCustomersResponse =
  SasPortalListGcpProjectDeploymentsResponse;
export const ListGcpProjectDeploymentsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListGcpProjectDeploymentsResponse;

export type ListGcpProjectDeploymentsCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of SAS deployments associated with current GCP project. Includes whether SAS analytics has been enabled or not. */
export const listGcpProjectDeploymentsCustomers: API.OperationMethod<
  ListGcpProjectDeploymentsCustomersRequest,
  ListGcpProjectDeploymentsCustomersResponse,
  ListGcpProjectDeploymentsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListGcpProjectDeploymentsCustomersRequest,
  output: ListGcpProjectDeploymentsCustomersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetupSasAnalyticsCustomersRequest {
  /** Request body */
  body?: SasPortalSetupSasAnalyticsRequest;
}

export const SetupSasAnalyticsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(SasPortalSetupSasAnalyticsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/customers:setupSasAnalytics",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetupSasAnalyticsCustomersRequest>;

export type SetupSasAnalyticsCustomersResponse = SasPortalOperation;
export const SetupSasAnalyticsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type SetupSasAnalyticsCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Setups the a GCP Project to receive SAS Analytics messages via GCP Pub/Sub with a subscription to BigQuery. All the Pub/Sub topics and BigQuery tables are created automatically as part of this service. */
export const setupSasAnalyticsCustomers: API.OperationMethod<
  SetupSasAnalyticsCustomersRequest,
  SetupSasAnalyticsCustomersResponse,
  SetupSasAnalyticsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetupSasAnalyticsCustomersRequest,
  output: SetupSasAnalyticsCustomersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MigrateOrganizationCustomersRequest {
  /** Request body */
  body?: SasPortalMigrateOrganizationRequest;
}

export const MigrateOrganizationCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(SasPortalMigrateOrganizationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/customers:migrateOrganization",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<MigrateOrganizationCustomersRequest>;

export type MigrateOrganizationCustomersResponse = SasPortalOperation;
export const MigrateOrganizationCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type MigrateOrganizationCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Migrates a SAS organization to the cloud. This will create GCP projects for each deployment and associate them. The SAS Organization is linked to the gcp project that called the command. go/sas-legacy-customer-migration */
export const migrateOrganizationCustomers: API.OperationMethod<
  MigrateOrganizationCustomersRequest,
  MigrateOrganizationCustomersResponse,
  MigrateOrganizationCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MigrateOrganizationCustomersRequest,
  output: MigrateOrganizationCustomersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProvisionDeploymentCustomersRequest {
  /** Request body */
  body?: SasPortalProvisionDeploymentRequest;
}

export const ProvisionDeploymentCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(SasPortalProvisionDeploymentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/customers:provisionDeployment",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ProvisionDeploymentCustomersRequest>;

export type ProvisionDeploymentCustomersResponse =
  SasPortalProvisionDeploymentResponse;
export const ProvisionDeploymentCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalProvisionDeploymentResponse;

export type ProvisionDeploymentCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found. */
export const provisionDeploymentCustomers: API.OperationMethod<
  ProvisionDeploymentCustomersRequest,
  ProvisionDeploymentCustomersResponse,
  ProvisionDeploymentCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ProvisionDeploymentCustomersRequest,
  output: ProvisionDeploymentCustomersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListLegacyOrganizationsCustomersRequest {}

export const ListLegacyOrganizationsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha1/customers:listLegacyOrganizations",
    }),
    svc,
  ) as unknown as Schema.Codec<ListLegacyOrganizationsCustomersRequest>;

export type ListLegacyOrganizationsCustomersResponse =
  SasPortalListLegacyOrganizationsResponse;
export const ListLegacyOrganizationsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListLegacyOrganizationsResponse;

export type ListLegacyOrganizationsCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of legacy organizations. */
export const listLegacyOrganizationsCustomers: API.OperationMethod<
  ListLegacyOrganizationsCustomersRequest,
  ListLegacyOrganizationsCustomersResponse,
  ListLegacyOrganizationsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLegacyOrganizationsCustomersRequest,
  output: ListLegacyOrganizationsCustomersResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchCustomersRequest {
  /** Output only. Resource name of the customer. */
  name: string;
  /** Fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SasPortalCustomer;
}

export const PatchCustomersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  body: Schema.optional(SasPortalCustomer).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
  svc,
) as unknown as Schema.Codec<PatchCustomersRequest>;

export type PatchCustomersResponse = SasPortalCustomer;
export const PatchCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalCustomer;

export type PatchCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing customer. */
export const patchCustomers: API.OperationMethod<
  PatchCustomersRequest,
  PatchCustomersResponse,
  PatchCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomersRequest,
  output: PatchCustomersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersRequest {
  /** The maximum number of customers to return in the response. */
  pageSize?: number;
  /** A pagination token returned from a previous call to ListCustomers that indicates where this listing should continue from. */
  pageToken?: string;
}

export const ListCustomersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1alpha1/customers" }),
  svc,
) as unknown as Schema.Codec<ListCustomersRequest>;

export type ListCustomersResponse = SasPortalListCustomersResponse;
export const ListCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListCustomersResponse;

export type ListCustomersError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of requested customers. */
export const listCustomers: API.PaginatedOperationMethod<
  ListCustomersRequest,
  ListCustomersResponse,
  ListCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersRequest,
  output: ListCustomersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCustomersNodesRequest {
  /** Required. The name of the node. */
  name: string;
}

export const GetCustomersNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetCustomersNodesRequest>;

export type GetCustomersNodesResponse = SasPortalNode;
export const GetCustomersNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type GetCustomersNodesError = DefaultErrors | NotFound | Forbidden;

/** Returns a requested node. */
export const getCustomersNodes: API.OperationMethod<
  GetCustomersNodesRequest,
  GetCustomersNodesResponse,
  GetCustomersNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersNodesRequest,
  output: GetCustomersNodesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteCustomersNodesRequest {
  /** Required. The name of the node. */
  name: string;
}

export const DeleteCustomersNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteCustomersNodesRequest>;

export type DeleteCustomersNodesResponse = SasPortalEmpty;
export const DeleteCustomersNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type DeleteCustomersNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a node. */
export const deleteCustomersNodes: API.OperationMethod<
  DeleteCustomersNodesRequest,
  DeleteCustomersNodesResponse,
  DeleteCustomersNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomersNodesRequest,
  output: DeleteCustomersNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveCustomersNodesRequest {
  /** Required. The name of the node to move. */
  name: string;
  /** Request body */
  body?: SasPortalMoveNodeRequest;
}

export const MoveCustomersNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalMoveNodeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveCustomersNodesRequest>;

export type MoveCustomersNodesResponse = SasPortalOperation;
export const MoveCustomersNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type MoveCustomersNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a node under another node or customer. */
export const moveCustomersNodes: API.OperationMethod<
  MoveCustomersNodesRequest,
  MoveCustomersNodesResponse,
  MoveCustomersNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveCustomersNodesRequest,
  output: MoveCustomersNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCustomersNodesRequest {
  /** Output only. Resource name. */
  name: string;
  /** Fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SasPortalNode;
}

export const PatchCustomersNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SasPortalNode).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchCustomersNodesRequest>;

export type PatchCustomersNodesResponse = SasPortalNode;
export const PatchCustomersNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type PatchCustomersNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing node. */
export const patchCustomersNodes: API.OperationMethod<
  PatchCustomersNodesRequest,
  PatchCustomersNodesResponse,
  PatchCustomersNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomersNodesRequest,
  output: PatchCustomersNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateCustomersNodesRequest {
  /** Required. The parent resource name where the node is to be created. */
  parent: string;
  /** Request body */
  body?: SasPortalNode;
}

export const CreateCustomersNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalNode).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+parent}/nodes", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateCustomersNodesRequest>;

export type CreateCustomersNodesResponse = SasPortalNode;
export const CreateCustomersNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type CreateCustomersNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new node. */
export const createCustomersNodes: API.OperationMethod<
  CreateCustomersNodesRequest,
  CreateCustomersNodesResponse,
  CreateCustomersNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersNodesRequest,
  output: CreateCustomersNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersNodesRequest {
  /** The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered. */
  filter?: string;
  /** A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The parent resource name, for example, "nodes/1". */
  parent: string;
  /** The maximum number of nodes to return in the response. */
  pageSize?: number;
}

export const ListCustomersNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/nodes" }),
    svc,
  ) as unknown as Schema.Codec<ListCustomersNodesRequest>;

export type ListCustomersNodesResponse = SasPortalListNodesResponse;
export const ListCustomersNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListNodesResponse;

export type ListCustomersNodesError = DefaultErrors | NotFound | Forbidden;

/** Lists nodes. */
export const listCustomersNodes: API.PaginatedOperationMethod<
  ListCustomersNodesRequest,
  ListCustomersNodesResponse,
  ListCustomersNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersNodesRequest,
  output: ListCustomersNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateCustomersNodesDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const CreateCustomersNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateCustomersNodesDevicesRequest>;

export type CreateCustomersNodesDevicesResponse = SasPortalDevice;
export const CreateCustomersNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateCustomersNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a device under a node or customer. */
export const createCustomersNodesDevices: API.OperationMethod<
  CreateCustomersNodesDevicesRequest,
  CreateCustomersNodesDevicesResponse,
  CreateCustomersNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersNodesDevicesRequest,
  output: CreateCustomersNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersNodesDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. */
  pageSize?: number;
  /** A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. */
  pageToken?: string;
  /** The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. */
  filter?: string;
}

export const ListCustomersNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Codec<ListCustomersNodesDevicesRequest>;

export type ListCustomersNodesDevicesResponse = SasPortalListDevicesResponse;
export const ListCustomersNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDevicesResponse;

export type ListCustomersNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists devices under a node or customer. */
export const listCustomersNodesDevices: API.PaginatedOperationMethod<
  ListCustomersNodesDevicesRequest,
  ListCustomersNodesDevicesResponse,
  ListCustomersNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersNodesDevicesRequest,
  output: ListCustomersNodesDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateSignedCustomersNodesDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalCreateSignedDeviceRequest;
}

export const CreateSignedCustomersNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalCreateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices:createSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateSignedCustomersNodesDevicesRequest>;

export type CreateSignedCustomersNodesDevicesResponse = SasPortalDevice;
export const CreateSignedCustomersNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateSignedCustomersNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a signed device under a node or customer. */
export const createSignedCustomersNodesDevices: API.OperationMethod<
  CreateSignedCustomersNodesDevicesRequest,
  CreateSignedCustomersNodesDevicesResponse,
  CreateSignedCustomersNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSignedCustomersNodesDevicesRequest,
  output: CreateSignedCustomersNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateCustomersNodesNodesRequest {
  /** Required. The parent resource name where the node is to be created. */
  parent: string;
  /** Request body */
  body?: SasPortalNode;
}

export const CreateCustomersNodesNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalNode).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+parent}/nodes", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateCustomersNodesNodesRequest>;

export type CreateCustomersNodesNodesResponse = SasPortalNode;
export const CreateCustomersNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type CreateCustomersNodesNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new node. */
export const createCustomersNodesNodes: API.OperationMethod<
  CreateCustomersNodesNodesRequest,
  CreateCustomersNodesNodesResponse,
  CreateCustomersNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersNodesNodesRequest,
  output: CreateCustomersNodesNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersNodesNodesRequest {
  /** The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered. */
  filter?: string;
  /** A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The parent resource name, for example, "nodes/1". */
  parent: string;
  /** The maximum number of nodes to return in the response. */
  pageSize?: number;
}

export const ListCustomersNodesNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/nodes" }),
    svc,
  ) as unknown as Schema.Codec<ListCustomersNodesNodesRequest>;

export type ListCustomersNodesNodesResponse = SasPortalListNodesResponse;
export const ListCustomersNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListNodesResponse;

export type ListCustomersNodesNodesError = DefaultErrors | NotFound | Forbidden;

/** Lists nodes. */
export const listCustomersNodesNodes: API.PaginatedOperationMethod<
  ListCustomersNodesNodesRequest,
  ListCustomersNodesNodesResponse,
  ListCustomersNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersNodesNodesRequest,
  output: ListCustomersNodesNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateCustomersNodesDeploymentsRequest {
  /** Required. The parent resource name where the deployment is to be created. */
  parent: string;
  /** Request body */
  body?: SasPortalDeployment;
}

export const CreateCustomersNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/deployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateCustomersNodesDeploymentsRequest>;

export type CreateCustomersNodesDeploymentsResponse = SasPortalDeployment;
export const CreateCustomersNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDeployment;

export type CreateCustomersNodesDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new deployment. */
export const createCustomersNodesDeployments: API.OperationMethod<
  CreateCustomersNodesDeploymentsRequest,
  CreateCustomersNodesDeploymentsResponse,
  CreateCustomersNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersNodesDeploymentsRequest,
  output: CreateCustomersNodesDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersNodesDeploymentsRequest {
  /** Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2. */
  parent: string;
  /** The maximum number of deployments to return in the response. */
  pageSize?: number;
  /** A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from. */
  pageToken?: string;
  /** The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered. */
  filter?: string;
}

export const ListCustomersNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Codec<ListCustomersNodesDeploymentsRequest>;

export type ListCustomersNodesDeploymentsResponse =
  SasPortalListDeploymentsResponse;
export const ListCustomersNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDeploymentsResponse;

export type ListCustomersNodesDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployments. */
export const listCustomersNodesDeployments: API.PaginatedOperationMethod<
  ListCustomersNodesDeploymentsRequest,
  ListCustomersNodesDeploymentsResponse,
  ListCustomersNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersNodesDeploymentsRequest,
  output: ListCustomersNodesDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetCustomersDeploymentsRequest {
  /** Required. The name of the deployment. */
  name: string;
}

export const GetCustomersDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetCustomersDeploymentsRequest>;

export type GetCustomersDeploymentsResponse = SasPortalDeployment;
export const GetCustomersDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDeployment;

export type GetCustomersDeploymentsError = DefaultErrors | NotFound | Forbidden;

/** Returns a requested deployment. */
export const getCustomersDeployments: API.OperationMethod<
  GetCustomersDeploymentsRequest,
  GetCustomersDeploymentsResponse,
  GetCustomersDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersDeploymentsRequest,
  output: GetCustomersDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteCustomersDeploymentsRequest {
  /** Required. The name of the deployment. */
  name: string;
}

export const DeleteCustomersDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteCustomersDeploymentsRequest>;

export type DeleteCustomersDeploymentsResponse = SasPortalEmpty;
export const DeleteCustomersDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type DeleteCustomersDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment. */
export const deleteCustomersDeployments: API.OperationMethod<
  DeleteCustomersDeploymentsRequest,
  DeleteCustomersDeploymentsResponse,
  DeleteCustomersDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomersDeploymentsRequest,
  output: DeleteCustomersDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCustomersDeploymentsRequest {
  /** Output only. Resource name. */
  name: string;
  /** Fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SasPortalDeployment;
}

export const PatchCustomersDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SasPortalDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchCustomersDeploymentsRequest>;

export type PatchCustomersDeploymentsResponse = SasPortalDeployment;
export const PatchCustomersDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDeployment;

export type PatchCustomersDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing deployment. */
export const patchCustomersDeployments: API.OperationMethod<
  PatchCustomersDeploymentsRequest,
  PatchCustomersDeploymentsResponse,
  PatchCustomersDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomersDeploymentsRequest,
  output: PatchCustomersDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveCustomersDeploymentsRequest {
  /** Required. The name of the deployment to move. */
  name: string;
  /** Request body */
  body?: SasPortalMoveDeploymentRequest;
}

export const MoveCustomersDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalMoveDeploymentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveCustomersDeploymentsRequest>;

export type MoveCustomersDeploymentsResponse = SasPortalOperation;
export const MoveCustomersDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type MoveCustomersDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a deployment under another node or customer. */
export const moveCustomersDeployments: API.OperationMethod<
  MoveCustomersDeploymentsRequest,
  MoveCustomersDeploymentsResponse,
  MoveCustomersDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveCustomersDeploymentsRequest,
  output: MoveCustomersDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateCustomersDeploymentsRequest {
  /** Required. The parent resource name where the deployment is to be created. */
  parent: string;
  /** Request body */
  body?: SasPortalDeployment;
}

export const CreateCustomersDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/deployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateCustomersDeploymentsRequest>;

export type CreateCustomersDeploymentsResponse = SasPortalDeployment;
export const CreateCustomersDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDeployment;

export type CreateCustomersDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new deployment. */
export const createCustomersDeployments: API.OperationMethod<
  CreateCustomersDeploymentsRequest,
  CreateCustomersDeploymentsResponse,
  CreateCustomersDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersDeploymentsRequest,
  output: CreateCustomersDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersDeploymentsRequest {
  /** The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered. */
  filter?: string;
  /** Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2. */
  parent: string;
  /** The maximum number of deployments to return in the response. */
  pageSize?: number;
  /** A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from. */
  pageToken?: string;
}

export const ListCustomersDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Codec<ListCustomersDeploymentsRequest>;

export type ListCustomersDeploymentsResponse = SasPortalListDeploymentsResponse;
export const ListCustomersDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDeploymentsResponse;

export type ListCustomersDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployments. */
export const listCustomersDeployments: API.PaginatedOperationMethod<
  ListCustomersDeploymentsRequest,
  ListCustomersDeploymentsResponse,
  ListCustomersDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersDeploymentsRequest,
  output: ListCustomersDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateCustomersDeploymentsDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const CreateCustomersDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateCustomersDeploymentsDevicesRequest>;

export type CreateCustomersDeploymentsDevicesResponse = SasPortalDevice;
export const CreateCustomersDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateCustomersDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a device under a node or customer. */
export const createCustomersDeploymentsDevices: API.OperationMethod<
  CreateCustomersDeploymentsDevicesRequest,
  CreateCustomersDeploymentsDevicesResponse,
  CreateCustomersDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersDeploymentsDevicesRequest,
  output: CreateCustomersDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersDeploymentsDevicesRequest {
  /** A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The name of the parent resource. */
  parent: string;
  /** The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. */
  pageSize?: number;
  /** The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. */
  filter?: string;
}

export const ListCustomersDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Codec<ListCustomersDeploymentsDevicesRequest>;

export type ListCustomersDeploymentsDevicesResponse =
  SasPortalListDevicesResponse;
export const ListCustomersDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDevicesResponse;

export type ListCustomersDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists devices under a node or customer. */
export const listCustomersDeploymentsDevices: API.PaginatedOperationMethod<
  ListCustomersDeploymentsDevicesRequest,
  ListCustomersDeploymentsDevicesResponse,
  ListCustomersDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersDeploymentsDevicesRequest,
  output: ListCustomersDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateSignedCustomersDeploymentsDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalCreateSignedDeviceRequest;
}

export const CreateSignedCustomersDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalCreateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices:createSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateSignedCustomersDeploymentsDevicesRequest>;

export type CreateSignedCustomersDeploymentsDevicesResponse = SasPortalDevice;
export const CreateSignedCustomersDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateSignedCustomersDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a signed device under a node or customer. */
export const createSignedCustomersDeploymentsDevices: API.OperationMethod<
  CreateSignedCustomersDeploymentsDevicesRequest,
  CreateSignedCustomersDeploymentsDevicesResponse,
  CreateSignedCustomersDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSignedCustomersDeploymentsDevicesRequest,
  output: CreateSignedCustomersDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSignedCustomersDevicesRequest {
  /** Required. The name of the device to update. */
  name: string;
  /** Request body */
  body?: SasPortalUpdateSignedDeviceRequest;
}

export const UpdateSignedCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalUpdateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1alpha1/{+name}:updateSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateSignedCustomersDevicesRequest>;

export type UpdateSignedCustomersDevicesResponse = SasPortalDevice;
export const UpdateSignedCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type UpdateSignedCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a signed device. */
export const updateSignedCustomersDevices: API.OperationMethod<
  UpdateSignedCustomersDevicesRequest,
  UpdateSignedCustomersDevicesResponse,
  UpdateSignedCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSignedCustomersDevicesRequest,
  output: UpdateSignedCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SignDeviceCustomersDevicesRequest {
  /** Output only. The resource path name. */
  name: string;
  /** Request body */
  body?: SasPortalSignDeviceRequest;
}

export const SignDeviceCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalSignDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+name}:signDevice",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SignDeviceCustomersDevicesRequest>;

export type SignDeviceCustomersDevicesResponse = SasPortalEmpty;
export const SignDeviceCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type SignDeviceCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Signs a device. */
export const signDeviceCustomersDevices: API.OperationMethod<
  SignDeviceCustomersDevicesRequest,
  SignDeviceCustomersDevicesResponse,
  SignDeviceCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SignDeviceCustomersDevicesRequest,
  output: SignDeviceCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteCustomersDevicesRequest {
  /** Required. The name of the device. */
  name: string;
}

export const DeleteCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteCustomersDevicesRequest>;

export type DeleteCustomersDevicesResponse = SasPortalEmpty;
export const DeleteCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type DeleteCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a device. */
export const deleteCustomersDevices: API.OperationMethod<
  DeleteCustomersDevicesRequest,
  DeleteCustomersDevicesResponse,
  DeleteCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomersDevicesRequest,
  output: DeleteCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveCustomersDevicesRequest {
  /** Required. The name of the device to move. */
  name: string;
  /** Request body */
  body?: SasPortalMoveDeviceRequest;
}

export const MoveCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalMoveDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveCustomersDevicesRequest>;

export type MoveCustomersDevicesResponse = SasPortalOperation;
export const MoveCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type MoveCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a device under another node or customer. */
export const moveCustomersDevices: API.OperationMethod<
  MoveCustomersDevicesRequest,
  MoveCustomersDevicesResponse,
  MoveCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveCustomersDevicesRequest,
  output: MoveCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCustomersDevicesRequest {
  /** Required. The name of the device. */
  name: string;
}

export const GetCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetCustomersDevicesRequest>;

export type GetCustomersDevicesResponse = SasPortalDevice;
export const GetCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type GetCustomersDevicesError = DefaultErrors | NotFound | Forbidden;

/** Gets details about a device. */
export const getCustomersDevices: API.OperationMethod<
  GetCustomersDevicesRequest,
  GetCustomersDevicesResponse,
  GetCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersDevicesRequest,
  output: GetCustomersDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateSignedCustomersDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalCreateSignedDeviceRequest;
}

export const CreateSignedCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalCreateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices:createSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateSignedCustomersDevicesRequest>;

export type CreateSignedCustomersDevicesResponse = SasPortalDevice;
export const CreateSignedCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateSignedCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a signed device under a node or customer. */
export const createSignedCustomersDevices: API.OperationMethod<
  CreateSignedCustomersDevicesRequest,
  CreateSignedCustomersDevicesResponse,
  CreateSignedCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSignedCustomersDevicesRequest,
  output: CreateSignedCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCustomersDevicesRequest {
  /** Output only. The resource path name. */
  name: string;
  /** Fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const PatchCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchCustomersDevicesRequest>;

export type PatchCustomersDevicesResponse = SasPortalDevice;
export const PatchCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type PatchCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a device. */
export const patchCustomersDevices: API.OperationMethod<
  PatchCustomersDevicesRequest,
  PatchCustomersDevicesResponse,
  PatchCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomersDevicesRequest,
  output: PatchCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateCustomersDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const CreateCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateCustomersDevicesRequest>;

export type CreateCustomersDevicesResponse = SasPortalDevice;
export const CreateCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a device under a node or customer. */
export const createCustomersDevices: API.OperationMethod<
  CreateCustomersDevicesRequest,
  CreateCustomersDevicesResponse,
  CreateCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersDevicesRequest,
  output: CreateCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersDevicesRequest {
  /** A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The name of the parent resource. */
  parent: string;
  /** The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. */
  pageSize?: number;
  /** The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. */
  filter?: string;
}

export const ListCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Codec<ListCustomersDevicesRequest>;

export type ListCustomersDevicesResponse = SasPortalListDevicesResponse;
export const ListCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDevicesResponse;

export type ListCustomersDevicesError = DefaultErrors | NotFound | Forbidden;

/** Lists devices under a node or customer. */
export const listCustomersDevices: API.PaginatedOperationMethod<
  ListCustomersDevicesRequest,
  ListCustomersDevicesResponse,
  ListCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersDevicesRequest,
  output: ListCustomersDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetNodesRequest {
  /** Required. The name of the node. */
  name: string;
}

export const GetNodesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetNodesRequest>;

export type GetNodesResponse = SasPortalNode;
export const GetNodesResponse = /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type GetNodesError = DefaultErrors | NotFound | Forbidden;

/** Returns a requested node. */
export const getNodes: API.OperationMethod<
  GetNodesRequest,
  GetNodesResponse,
  GetNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNodesRequest,
  output: GetNodesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetNodesDevicesRequest {
  /** Required. The name of the device. */
  name: string;
}

export const GetNodesDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.HttpPath("name")),
  },
).pipe(
  T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetNodesDevicesRequest>;

export type GetNodesDevicesResponse = SasPortalDevice;
export const GetNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type GetNodesDevicesError = DefaultErrors | NotFound | Forbidden;

/** Gets details about a device. */
export const getNodesDevices: API.OperationMethod<
  GetNodesDevicesRequest,
  GetNodesDevicesResponse,
  GetNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNodesDevicesRequest,
  output: GetNodesDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateSignedNodesDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalCreateSignedDeviceRequest;
}

export const CreateSignedNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalCreateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices:createSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateSignedNodesDevicesRequest>;

export type CreateSignedNodesDevicesResponse = SasPortalDevice;
export const CreateSignedNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateSignedNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a signed device under a node or customer. */
export const createSignedNodesDevices: API.OperationMethod<
  CreateSignedNodesDevicesRequest,
  CreateSignedNodesDevicesResponse,
  CreateSignedNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSignedNodesDevicesRequest,
  output: CreateSignedNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateNodesDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const CreateNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateNodesDevicesRequest>;

export type CreateNodesDevicesResponse = SasPortalDevice;
export const CreateNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a device under a node or customer. */
export const createNodesDevices: API.OperationMethod<
  CreateNodesDevicesRequest,
  CreateNodesDevicesResponse,
  CreateNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNodesDevicesRequest,
  output: CreateNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNodesDevicesRequest {
  /** A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The name of the parent resource. */
  parent: string;
  /** The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. */
  pageSize?: number;
  /** The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. */
  filter?: string;
}

export const ListNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Codec<ListNodesDevicesRequest>;

export type ListNodesDevicesResponse = SasPortalListDevicesResponse;
export const ListNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDevicesResponse;

export type ListNodesDevicesError = DefaultErrors | NotFound | Forbidden;

/** Lists devices under a node or customer. */
export const listNodesDevices: API.PaginatedOperationMethod<
  ListNodesDevicesRequest,
  ListNodesDevicesResponse,
  ListNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNodesDevicesRequest,
  output: ListNodesDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchNodesDevicesRequest {
  /** Output only. The resource path name. */
  name: string;
  /** Fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const PatchNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchNodesDevicesRequest>;

export type PatchNodesDevicesResponse = SasPortalDevice;
export const PatchNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type PatchNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a device. */
export const patchNodesDevices: API.OperationMethod<
  PatchNodesDevicesRequest,
  PatchNodesDevicesResponse,
  PatchNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchNodesDevicesRequest,
  output: PatchNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSignedNodesDevicesRequest {
  /** Required. The name of the device to update. */
  name: string;
  /** Request body */
  body?: SasPortalUpdateSignedDeviceRequest;
}

export const UpdateSignedNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalUpdateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1alpha1/{+name}:updateSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateSignedNodesDevicesRequest>;

export type UpdateSignedNodesDevicesResponse = SasPortalDevice;
export const UpdateSignedNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type UpdateSignedNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a signed device. */
export const updateSignedNodesDevices: API.OperationMethod<
  UpdateSignedNodesDevicesRequest,
  UpdateSignedNodesDevicesResponse,
  UpdateSignedNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSignedNodesDevicesRequest,
  output: UpdateSignedNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SignDeviceNodesDevicesRequest {
  /** Output only. The resource path name. */
  name: string;
  /** Request body */
  body?: SasPortalSignDeviceRequest;
}

export const SignDeviceNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalSignDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+name}:signDevice",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SignDeviceNodesDevicesRequest>;

export type SignDeviceNodesDevicesResponse = SasPortalEmpty;
export const SignDeviceNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type SignDeviceNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Signs a device. */
export const signDeviceNodesDevices: API.OperationMethod<
  SignDeviceNodesDevicesRequest,
  SignDeviceNodesDevicesResponse,
  SignDeviceNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SignDeviceNodesDevicesRequest,
  output: SignDeviceNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteNodesDevicesRequest {
  /** Required. The name of the device. */
  name: string;
}

export const DeleteNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteNodesDevicesRequest>;

export type DeleteNodesDevicesResponse = SasPortalEmpty;
export const DeleteNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type DeleteNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a device. */
export const deleteNodesDevices: API.OperationMethod<
  DeleteNodesDevicesRequest,
  DeleteNodesDevicesResponse,
  DeleteNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNodesDevicesRequest,
  output: DeleteNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveNodesDevicesRequest {
  /** Required. The name of the device to move. */
  name: string;
  /** Request body */
  body?: SasPortalMoveDeviceRequest;
}

export const MoveNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalMoveDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveNodesDevicesRequest>;

export type MoveNodesDevicesResponse = SasPortalOperation;
export const MoveNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type MoveNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a device under another node or customer. */
export const moveNodesDevices: API.OperationMethod<
  MoveNodesDevicesRequest,
  MoveNodesDevicesResponse,
  MoveNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveNodesDevicesRequest,
  output: MoveNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateNodesNodesRequest {
  /** Required. The parent resource name where the node is to be created. */
  parent: string;
  /** Request body */
  body?: SasPortalNode;
}

export const CreateNodesNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalNode).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+parent}/nodes", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateNodesNodesRequest>;

export type CreateNodesNodesResponse = SasPortalNode;
export const CreateNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type CreateNodesNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new node. */
export const createNodesNodes: API.OperationMethod<
  CreateNodesNodesRequest,
  CreateNodesNodesResponse,
  CreateNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNodesNodesRequest,
  output: CreateNodesNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNodesNodesRequest {
  /** The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered. */
  filter?: string;
  /** A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The parent resource name, for example, "nodes/1". */
  parent: string;
  /** The maximum number of nodes to return in the response. */
  pageSize?: number;
}

export const ListNodesNodesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  parent: Schema.String.pipe(T.HttpPath("parent")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
}).pipe(
  T.Http({ method: "GET", path: "v1alpha1/{+parent}/nodes" }),
  svc,
) as unknown as Schema.Codec<ListNodesNodesRequest>;

export type ListNodesNodesResponse = SasPortalListNodesResponse;
export const ListNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListNodesResponse;

export type ListNodesNodesError = DefaultErrors | NotFound | Forbidden;

/** Lists nodes. */
export const listNodesNodes: API.PaginatedOperationMethod<
  ListNodesNodesRequest,
  ListNodesNodesResponse,
  ListNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNodesNodesRequest,
  output: ListNodesNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteNodesNodesRequest {
  /** Required. The name of the node. */
  name: string;
}

export const DeleteNodesNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteNodesNodesRequest>;

export type DeleteNodesNodesResponse = SasPortalEmpty;
export const DeleteNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type DeleteNodesNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a node. */
export const deleteNodesNodes: API.OperationMethod<
  DeleteNodesNodesRequest,
  DeleteNodesNodesResponse,
  DeleteNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNodesNodesRequest,
  output: DeleteNodesNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveNodesNodesRequest {
  /** Required. The name of the node to move. */
  name: string;
  /** Request body */
  body?: SasPortalMoveNodeRequest;
}

export const MoveNodesNodesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(SasPortalMoveNodeRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1alpha1/{+name}:move", hasBody: true }),
  svc,
) as unknown as Schema.Codec<MoveNodesNodesRequest>;

export type MoveNodesNodesResponse = SasPortalOperation;
export const MoveNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type MoveNodesNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a node under another node or customer. */
export const moveNodesNodes: API.OperationMethod<
  MoveNodesNodesRequest,
  MoveNodesNodesResponse,
  MoveNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveNodesNodesRequest,
  output: MoveNodesNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchNodesNodesRequest {
  /** Output only. Resource name. */
  name: string;
  /** Fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SasPortalNode;
}

export const PatchNodesNodesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SasPortalNode).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
  svc,
) as unknown as Schema.Codec<PatchNodesNodesRequest>;

export type PatchNodesNodesResponse = SasPortalNode;
export const PatchNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type PatchNodesNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing node. */
export const patchNodesNodes: API.OperationMethod<
  PatchNodesNodesRequest,
  PatchNodesNodesResponse,
  PatchNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchNodesNodesRequest,
  output: PatchNodesNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetNodesNodesRequest {
  /** Required. The name of the node. */
  name: string;
}

export const GetNodesNodesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetNodesNodesRequest>;

export type GetNodesNodesResponse = SasPortalNode;
export const GetNodesNodesResponse = /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type GetNodesNodesError = DefaultErrors | NotFound | Forbidden;

/** Returns a requested node. */
export const getNodesNodes: API.OperationMethod<
  GetNodesNodesRequest,
  GetNodesNodesResponse,
  GetNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNodesNodesRequest,
  output: GetNodesNodesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateSignedNodesNodesDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalCreateSignedDeviceRequest;
}

export const CreateSignedNodesNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalCreateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices:createSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateSignedNodesNodesDevicesRequest>;

export type CreateSignedNodesNodesDevicesResponse = SasPortalDevice;
export const CreateSignedNodesNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateSignedNodesNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a signed device under a node or customer. */
export const createSignedNodesNodesDevices: API.OperationMethod<
  CreateSignedNodesNodesDevicesRequest,
  CreateSignedNodesNodesDevicesResponse,
  CreateSignedNodesNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSignedNodesNodesDevicesRequest,
  output: CreateSignedNodesNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateNodesNodesDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const CreateNodesNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateNodesNodesDevicesRequest>;

export type CreateNodesNodesDevicesResponse = SasPortalDevice;
export const CreateNodesNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateNodesNodesDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a device under a node or customer. */
export const createNodesNodesDevices: API.OperationMethod<
  CreateNodesNodesDevicesRequest,
  CreateNodesNodesDevicesResponse,
  CreateNodesNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNodesNodesDevicesRequest,
  output: CreateNodesNodesDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNodesNodesDevicesRequest {
  /** The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. */
  filter?: string;
  /** A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The name of the parent resource. */
  parent: string;
  /** The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. */
  pageSize?: number;
}

export const ListNodesNodesDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Codec<ListNodesNodesDevicesRequest>;

export type ListNodesNodesDevicesResponse = SasPortalListDevicesResponse;
export const ListNodesNodesDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDevicesResponse;

export type ListNodesNodesDevicesError = DefaultErrors | NotFound | Forbidden;

/** Lists devices under a node or customer. */
export const listNodesNodesDevices: API.PaginatedOperationMethod<
  ListNodesNodesDevicesRequest,
  ListNodesNodesDevicesResponse,
  ListNodesNodesDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNodesNodesDevicesRequest,
  output: ListNodesNodesDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateNodesNodesNodesRequest {
  /** Required. The parent resource name where the node is to be created. */
  parent: string;
  /** Request body */
  body?: SasPortalNode;
}

export const CreateNodesNodesNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalNode).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+parent}/nodes", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateNodesNodesNodesRequest>;

export type CreateNodesNodesNodesResponse = SasPortalNode;
export const CreateNodesNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalNode;

export type CreateNodesNodesNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new node. */
export const createNodesNodesNodes: API.OperationMethod<
  CreateNodesNodesNodesRequest,
  CreateNodesNodesNodesResponse,
  CreateNodesNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNodesNodesNodesRequest,
  output: CreateNodesNodesNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNodesNodesNodesRequest {
  /** The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered. */
  filter?: string;
  /** Required. The parent resource name, for example, "nodes/1". */
  parent: string;
  /** The maximum number of nodes to return in the response. */
  pageSize?: number;
  /** A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from. */
  pageToken?: string;
}

export const ListNodesNodesNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/nodes" }),
    svc,
  ) as unknown as Schema.Codec<ListNodesNodesNodesRequest>;

export type ListNodesNodesNodesResponse = SasPortalListNodesResponse;
export const ListNodesNodesNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListNodesResponse;

export type ListNodesNodesNodesError = DefaultErrors | NotFound | Forbidden;

/** Lists nodes. */
export const listNodesNodesNodes: API.PaginatedOperationMethod<
  ListNodesNodesNodesRequest,
  ListNodesNodesNodesResponse,
  ListNodesNodesNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNodesNodesNodesRequest,
  output: ListNodesNodesNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateNodesNodesDeploymentsRequest {
  /** Required. The parent resource name where the deployment is to be created. */
  parent: string;
  /** Request body */
  body?: SasPortalDeployment;
}

export const CreateNodesNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/deployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateNodesNodesDeploymentsRequest>;

export type CreateNodesNodesDeploymentsResponse = SasPortalDeployment;
export const CreateNodesNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDeployment;

export type CreateNodesNodesDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new deployment. */
export const createNodesNodesDeployments: API.OperationMethod<
  CreateNodesNodesDeploymentsRequest,
  CreateNodesNodesDeploymentsResponse,
  CreateNodesNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNodesNodesDeploymentsRequest,
  output: CreateNodesNodesDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNodesNodesDeploymentsRequest {
  /** The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered. */
  filter?: string;
  /** A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2. */
  parent: string;
  /** The maximum number of deployments to return in the response. */
  pageSize?: number;
}

export const ListNodesNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Codec<ListNodesNodesDeploymentsRequest>;

export type ListNodesNodesDeploymentsResponse =
  SasPortalListDeploymentsResponse;
export const ListNodesNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDeploymentsResponse;

export type ListNodesNodesDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployments. */
export const listNodesNodesDeployments: API.PaginatedOperationMethod<
  ListNodesNodesDeploymentsRequest,
  ListNodesNodesDeploymentsResponse,
  ListNodesNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNodesNodesDeploymentsRequest,
  output: ListNodesNodesDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetNodesDeploymentsRequest {
  /** Required. The name of the deployment. */
  name: string;
}

export const GetNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetNodesDeploymentsRequest>;

export type GetNodesDeploymentsResponse = SasPortalDeployment;
export const GetNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDeployment;

export type GetNodesDeploymentsError = DefaultErrors | NotFound | Forbidden;

/** Returns a requested deployment. */
export const getNodesDeployments: API.OperationMethod<
  GetNodesDeploymentsRequest,
  GetNodesDeploymentsResponse,
  GetNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNodesDeploymentsRequest,
  output: GetNodesDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListNodesDeploymentsRequest {
  /** The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered. */
  filter?: string;
  /** A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2. */
  parent: string;
  /** The maximum number of deployments to return in the response. */
  pageSize?: number;
}

export const ListNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Codec<ListNodesDeploymentsRequest>;

export type ListNodesDeploymentsResponse = SasPortalListDeploymentsResponse;
export const ListNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDeploymentsResponse;

export type ListNodesDeploymentsError = DefaultErrors | NotFound | Forbidden;

/** Lists deployments. */
export const listNodesDeployments: API.PaginatedOperationMethod<
  ListNodesDeploymentsRequest,
  ListNodesDeploymentsResponse,
  ListNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNodesDeploymentsRequest,
  output: ListNodesDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteNodesDeploymentsRequest {
  /** Required. The name of the deployment. */
  name: string;
}

export const DeleteNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteNodesDeploymentsRequest>;

export type DeleteNodesDeploymentsResponse = SasPortalEmpty;
export const DeleteNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type DeleteNodesDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment. */
export const deleteNodesDeployments: API.OperationMethod<
  DeleteNodesDeploymentsRequest,
  DeleteNodesDeploymentsResponse,
  DeleteNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNodesDeploymentsRequest,
  output: DeleteNodesDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchNodesDeploymentsRequest {
  /** Fields to be updated. */
  updateMask?: string;
  /** Output only. Resource name. */
  name: string;
  /** Request body */
  body?: SasPortalDeployment;
}

export const PatchNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchNodesDeploymentsRequest>;

export type PatchNodesDeploymentsResponse = SasPortalDeployment;
export const PatchNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDeployment;

export type PatchNodesDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing deployment. */
export const patchNodesDeployments: API.OperationMethod<
  PatchNodesDeploymentsRequest,
  PatchNodesDeploymentsResponse,
  PatchNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchNodesDeploymentsRequest,
  output: PatchNodesDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveNodesDeploymentsRequest {
  /** Required. The name of the deployment to move. */
  name: string;
  /** Request body */
  body?: SasPortalMoveDeploymentRequest;
}

export const MoveNodesDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalMoveDeploymentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveNodesDeploymentsRequest>;

export type MoveNodesDeploymentsResponse = SasPortalOperation;
export const MoveNodesDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type MoveNodesDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a deployment under another node or customer. */
export const moveNodesDeployments: API.OperationMethod<
  MoveNodesDeploymentsRequest,
  MoveNodesDeploymentsResponse,
  MoveNodesDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveNodesDeploymentsRequest,
  output: MoveNodesDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateSignedNodesDeploymentsDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalCreateSignedDeviceRequest;
}

export const CreateSignedNodesDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalCreateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices:createSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateSignedNodesDeploymentsDevicesRequest>;

export type CreateSignedNodesDeploymentsDevicesResponse = SasPortalDevice;
export const CreateSignedNodesDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateSignedNodesDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a signed device under a node or customer. */
export const createSignedNodesDeploymentsDevices: API.OperationMethod<
  CreateSignedNodesDeploymentsDevicesRequest,
  CreateSignedNodesDeploymentsDevicesResponse,
  CreateSignedNodesDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSignedNodesDeploymentsDevicesRequest,
  output: CreateSignedNodesDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateNodesDeploymentsDevicesRequest {
  /** Required. The name of the parent resource. */
  parent: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const CreateNodesDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/devices",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateNodesDeploymentsDevicesRequest>;

export type CreateNodesDeploymentsDevicesResponse = SasPortalDevice;
export const CreateNodesDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type CreateNodesDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a device under a node or customer. */
export const createNodesDeploymentsDevices: API.OperationMethod<
  CreateNodesDeploymentsDevicesRequest,
  CreateNodesDeploymentsDevicesResponse,
  CreateNodesDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNodesDeploymentsDevicesRequest,
  output: CreateNodesDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNodesDeploymentsDevicesRequest {
  /** The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive. */
  filter?: string;
  /** Required. The name of the parent resource. */
  parent: string;
  /** The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000]. */
  pageSize?: number;
  /** A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from. */
  pageToken?: string;
}

export const ListNodesDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Codec<ListNodesDeploymentsDevicesRequest>;

export type ListNodesDeploymentsDevicesResponse = SasPortalListDevicesResponse;
export const ListNodesDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalListDevicesResponse;

export type ListNodesDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists devices under a node or customer. */
export const listNodesDeploymentsDevices: API.PaginatedOperationMethod<
  ListNodesDeploymentsDevicesRequest,
  ListNodesDeploymentsDevicesResponse,
  ListNodesDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNodesDeploymentsDevicesRequest,
  output: ListNodesDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetDeploymentsRequest {
  /** Required. The name of the deployment. */
  name: string;
}

export const GetDeploymentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetDeploymentsRequest>;

export type GetDeploymentsResponse = SasPortalDeployment;
export const GetDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDeployment;

export type GetDeploymentsError = DefaultErrors | NotFound | Forbidden;

/** Returns a requested deployment. */
export const getDeployments: API.OperationMethod<
  GetDeploymentsRequest,
  GetDeploymentsResponse,
  GetDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDeploymentsRequest,
  output: GetDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteDeploymentsDevicesRequest {
  /** Required. The name of the device. */
  name: string;
}

export const DeleteDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteDeploymentsDevicesRequest>;

export type DeleteDeploymentsDevicesResponse = SasPortalEmpty;
export const DeleteDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type DeleteDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a device. */
export const deleteDeploymentsDevices: API.OperationMethod<
  DeleteDeploymentsDevicesRequest,
  DeleteDeploymentsDevicesResponse,
  DeleteDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDeploymentsDevicesRequest,
  output: DeleteDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveDeploymentsDevicesRequest {
  /** Required. The name of the device to move. */
  name: string;
  /** Request body */
  body?: SasPortalMoveDeviceRequest;
}

export const MoveDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalMoveDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveDeploymentsDevicesRequest>;

export type MoveDeploymentsDevicesResponse = SasPortalOperation;
export const MoveDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalOperation;

export type MoveDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a device under another node or customer. */
export const moveDeploymentsDevices: API.OperationMethod<
  MoveDeploymentsDevicesRequest,
  MoveDeploymentsDevicesResponse,
  MoveDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveDeploymentsDevicesRequest,
  output: MoveDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchDeploymentsDevicesRequest {
  /** Output only. The resource path name. */
  name: string;
  /** Fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SasPortalDevice;
}

export const PatchDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SasPortalDevice).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchDeploymentsDevicesRequest>;

export type PatchDeploymentsDevicesResponse = SasPortalDevice;
export const PatchDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type PatchDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a device. */
export const patchDeploymentsDevices: API.OperationMethod<
  PatchDeploymentsDevicesRequest,
  PatchDeploymentsDevicesResponse,
  PatchDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchDeploymentsDevicesRequest,
  output: PatchDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDeploymentsDevicesRequest {
  /** Required. The name of the device. */
  name: string;
}

export const GetDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetDeploymentsDevicesRequest>;

export type GetDeploymentsDevicesResponse = SasPortalDevice;
export const GetDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type GetDeploymentsDevicesError = DefaultErrors | NotFound | Forbidden;

/** Gets details about a device. */
export const getDeploymentsDevices: API.OperationMethod<
  GetDeploymentsDevicesRequest,
  GetDeploymentsDevicesResponse,
  GetDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDeploymentsDevicesRequest,
  output: GetDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSignedDeploymentsDevicesRequest {
  /** Required. The name of the device to update. */
  name: string;
  /** Request body */
  body?: SasPortalUpdateSignedDeviceRequest;
}

export const UpdateSignedDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalUpdateSignedDeviceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1alpha1/{+name}:updateSigned",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateSignedDeploymentsDevicesRequest>;

export type UpdateSignedDeploymentsDevicesResponse = SasPortalDevice;
export const UpdateSignedDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalDevice;

export type UpdateSignedDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a signed device. */
export const updateSignedDeploymentsDevices: API.OperationMethod<
  UpdateSignedDeploymentsDevicesRequest,
  UpdateSignedDeploymentsDevicesResponse,
  UpdateSignedDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSignedDeploymentsDevicesRequest,
  output: UpdateSignedDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SignDeviceDeploymentsDevicesRequest {
  /** Output only. The resource path name. */
  name: string;
  /** Request body */
  body?: SasPortalSignDeviceRequest;
}

export const SignDeviceDeploymentsDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SasPortalSignDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+name}:signDevice",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SignDeviceDeploymentsDevicesRequest>;

export type SignDeviceDeploymentsDevicesResponse = SasPortalEmpty;
export const SignDeviceDeploymentsDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SasPortalEmpty;

export type SignDeviceDeploymentsDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Signs a device. */
export const signDeviceDeploymentsDevices: API.OperationMethod<
  SignDeviceDeploymentsDevicesRequest,
  SignDeviceDeploymentsDevicesResponse,
  SignDeviceDeploymentsDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SignDeviceDeploymentsDevicesRequest,
  output: SignDeviceDeploymentsDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
