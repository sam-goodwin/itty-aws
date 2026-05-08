// ==========================================================================
// Security Command Center API (securitycenter v1beta1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "securitycenter",
  version: "v1beta1",
  rootUrl: "https://securitycenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface GoogleCloudSecuritycenterV1beta1SecurityMarks {
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name?: string;
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
}

export const GoogleCloudSecuritycenterV1beta1SecurityMarks: Schema.Schema<GoogleCloudSecuritycenterV1beta1SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1beta1SecurityMarks" });

export interface GoogleCloudSecuritycenterV1beta1Finding {
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
  /** The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}" */
  name?: string;
  /** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
  resourceName?: string;
  /** The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. */
  eventTime?: string;
  /** The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** Immutable. The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
  parent?: string;
  /** The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
  category?: string;
}

export const GoogleCloudSecuritycenterV1beta1Finding: Schema.Schema<GoogleCloudSecuritycenterV1beta1Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalUri: Schema.optional(Schema.String),
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1beta1SecurityMarks,
    ),
    name: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    parent: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1beta1Finding" });

export interface ListFindingsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
  /** The total number of findings matching the query. */
  totalSize?: number;
  /** Findings matching the list request. */
  findings?: ReadonlyArray<GoogleCloudSecuritycenterV1beta1Finding>;
  /** Time used for executing the list request. */
  readTime?: string;
}

export const ListFindingsResponse: Schema.Schema<ListFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    findings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1beta1Finding),
    ),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFindingsResponse" });

export interface SecurityCenterProperties {
  /** The full resource name of the project the resource belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceProject?: string;
  /** Owners of the Google Cloud resource. */
  resourceOwners?: ReadonlyArray<string>;
  /** The full resource name of the immediate parent of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceParent?: string;
  /** Immutable. The full resource name of the Google Cloud resource this asset represents. This field is immutable after create time. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceName?: string;
  /** The type of the Google Cloud resource. Examples include: APPLICATION, PROJECT, and ORGANIZATION. This is a case insensitive field defined by Security Command Center and/or the producer of the resource and is immutable after create time. */
  resourceType?: string;
}

export const SecurityCenterProperties: Schema.Schema<SecurityCenterProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceProject: Schema.optional(Schema.String),
    resourceOwners: Schema.optional(Schema.Array(Schema.String)),
    resourceParent: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityCenterProperties" });

export interface Asset {
  /** The relative resource name of this asset. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/assets/{asset_id}". */
  name?: string;
  /** The time at which the asset was last updated, added, or deleted in Security Command Center. */
  updateTime?: string;
  /** The time at which the asset was created in Security Command Center. */
  createTime?: string;
  /** Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user. */
  securityCenterProperties?: SecurityCenterProperties;
  /** Resource managed properties. These properties are managed and defined by the Google Cloud resource and cannot be modified by the user. */
  resourceProperties?: Record<string, unknown>;
  /** User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the asset. */
  securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
}

export const Asset: Schema.Schema<Asset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    securityCenterProperties: Schema.optional(SecurityCenterProperties),
    resourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1beta1SecurityMarks,
    ),
  }).annotate({ identifier: "Asset" });

export interface ListAssetsResult {
  /** State of the asset. */
  state?:
    | "STATE_UNSPECIFIED"
    | "UNUSED"
    | "ADDED"
    | "REMOVED"
    | "ACTIVE"
    | (string & {});
  /** Asset matching the search request. */
  asset?: Asset;
}

export const ListAssetsResult: Schema.Schema<ListAssetsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    asset: Schema.optional(Asset),
  }).annotate({ identifier: "ListAssetsResult" });

export interface ListAssetsResponse {
  /** The total number of assets matching the query. */
  totalSize?: number;
  /** Assets matching the list request. */
  listAssetsResults?: ReadonlyArray<ListAssetsResult>;
  /** Time used for executing the list request. */
  readTime?: string;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListAssetsResponse: Schema.Schema<ListAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    listAssetsResults: Schema.optional(Schema.Array(ListAssetsResult)),
    readTime: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAssetsResponse" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleCloudSecuritycenterV1Property {
  /** Name of the property for the custom output. */
  name?: string;
  /** The CEL expression for the custom output. A resource property can be specified to return the value of the property or a text string enclosed in quotation marks. */
  valueExpression?: Expr;
}

export const GoogleCloudSecuritycenterV1Property: Schema.Schema<GoogleCloudSecuritycenterV1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    valueExpression: Schema.optional(Expr),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Property" });

export interface GoogleCloudSecuritycenterV1CustomOutputSpec {
  /** A list of custom output properties to add to the finding. */
  properties?: ReadonlyArray<GoogleCloudSecuritycenterV1Property>;
}

export const GoogleCloudSecuritycenterV1CustomOutputSpec: Schema.Schema<GoogleCloudSecuritycenterV1CustomOutputSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1Property),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomOutputSpec" });

export interface AzureResourceGroup {
  /** The name of the Azure resource group. This is not a UUID. */
  name?: string;
  /** The ID of the Azure resource group. */
  id?: string;
}

export const AzureResourceGroup: Schema.Schema<AzureResourceGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureResourceGroup" });

export interface GoogleCloudSecuritycenterV2BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV2BulkMuteFindingsResponse: Schema.Schema<GoogleCloudSecuritycenterV2BulkMuteFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV2BulkMuteFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV2YaraRuleSignature {
  /** The name of the YARA rule. */
  yaraRule?: string;
}

export const GoogleCloudSecuritycenterV2YaraRuleSignature: Schema.Schema<GoogleCloudSecuritycenterV2YaraRuleSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2YaraRuleSignature" });

export interface GoogleCloudSecuritycenterV2Detection {
  /** The name of the binary associated with the memory hash signature detection. */
  binary?: string;
  /** The percentage of memory page hashes in the signature that were matched. */
  percentPagesMatched?: number;
}

export const GoogleCloudSecuritycenterV2Detection: Schema.Schema<GoogleCloudSecuritycenterV2Detection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binary: Schema.optional(Schema.String),
    percentPagesMatched: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Detection" });

export interface GoogleCloudSecuritycenterV2MemoryHashSignature {
  /** The binary family. */
  binaryFamily?: string;
  /** The list of memory hash detections contributing to the binary family match. */
  detections?: ReadonlyArray<GoogleCloudSecuritycenterV2Detection>;
}

export const GoogleCloudSecuritycenterV2MemoryHashSignature: Schema.Schema<GoogleCloudSecuritycenterV2MemoryHashSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binaryFamily: Schema.optional(Schema.String),
    detections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Detection),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MemoryHashSignature" });

export interface GoogleCloudSecuritycenterV2ProcessSignature {
  /** Signature indicating that a YARA rule was matched. */
  yaraRuleSignature?: GoogleCloudSecuritycenterV2YaraRuleSignature;
  /** Describes the type of resource associated with the signature. */
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
  /** Signature indicating that a binary family was matched. */
  memoryHashSignature?: GoogleCloudSecuritycenterV2MemoryHashSignature;
}

export const GoogleCloudSecuritycenterV2ProcessSignature: Schema.Schema<GoogleCloudSecuritycenterV2ProcessSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yaraRuleSignature: Schema.optional(
      GoogleCloudSecuritycenterV2YaraRuleSignature,
    ),
    signatureType: Schema.optional(Schema.String),
    memoryHashSignature: Schema.optional(
      GoogleCloudSecuritycenterV2MemoryHashSignature,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ProcessSignature" });

export interface GoogleCloudSecuritycenterV2Notebook {
  /** The source notebook service, for example, "Colab Enterprise". */
  service?: string;
  /** The user ID of the latest author to modify the notebook. */
  lastAuthor?: string;
  /** The name of the notebook. */
  name?: string;
  /** The most recent time the notebook was updated. */
  notebookUpdateTime?: string;
}

export const GoogleCloudSecuritycenterV2Notebook: Schema.Schema<GoogleCloudSecuritycenterV2Notebook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Notebook" });

export interface DataRetentionDeletionEvent {
  /** Maximum duration of retention allowed from the DRD control. This comes from the DRD control where users set a max TTL for their data. For example, suppose that a user sets the max TTL for a Cloud Storage bucket to 90 days. However, an object in that bucket is 100 days old. In this case, a DataRetentionDeletionEvent will be generated for that Cloud Storage bucket, and the max_retention_allowed is 90 days. */
  maxRetentionAllowed?: string;
  /** Timestamp indicating when the event was detected. */
  eventDetectionTime?: string;
  /** Min duration of retention allowed from the DSPM retention control. This field is only populated when event type is set to EVENT_TYPE_MIN_TTL_FROM_CREATION. */
  minRetentionAllowed?: string;
  /** Number of objects that violated the policy for this resource. If the number is less than 1,000, then the value of this field is the exact number. If the number of objects that violated the policy is greater than or equal to 1,000, then the value of this field is 1000. */
  dataObjectCount?: string;
  /** Type of the DRD event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
}

export const DataRetentionDeletionEvent: Schema.Schema<DataRetentionDeletionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxRetentionAllowed: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    minRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataRetentionDeletionEvent" });

export interface PolicyDriftDetails {
  /** The value of this field that was configured in a posture, for example, `true` or `allowed_values={"projects/29831892"}`. */
  expectedValue?: string;
  /** The detected value that violates the deployed posture, for example, `false` or `allowed_values={"projects/22831892"}`. */
  detectedValue?: string;
  /** The name of the updated field, for example constraint.implementation.policy_rules[0].enforce */
  field?: string;
}

export const PolicyDriftDetails: Schema.Schema<PolicyDriftDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expectedValue: Schema.optional(Schema.String),
    detectedValue: Schema.optional(Schema.String),
    field: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyDriftDetails" });

export interface GoogleCloudSecuritycenterV2Geolocation {
  /** A CLDR. */
  regionCode?: string;
}

export const GoogleCloudSecuritycenterV2Geolocation: Schema.Schema<GoogleCloudSecuritycenterV2Geolocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Geolocation" });

export interface GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
  /** The state of an asset discovery run. */
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  /** The duration between asset discovery run start and end */
  duration?: string;
}

export const GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse: Schema.Schema<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse",
  });

export interface GoogleCloudSecuritycenterV2AgentDataAccessEvent {
  /** Timestamp of data access event. */
  eventTime?: string;
  /** Unique identifier for data access event. */
  eventId?: string;
  /** The agent principal that accessed the data. */
  principalSubject?: string;
  /** The operation performed by the principal to access the data. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2AgentDataAccessEvent: Schema.Schema<GoogleCloudSecuritycenterV2AgentDataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AgentDataAccessEvent",
  });

export interface AttackExposure {
  /** A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate. */
  score?: number;
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedHighValueResourcesCount?: number;
  /** The most recent time the attack exposure was updated on this finding. */
  latestCalculationTime?: string;
  /** The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: `organizations/123/simulations/456/attackExposureResults/789` */
  attackExposureResult?: string;
  /** The number of medium value resources that are exposed as a result of this finding. */
  exposedMediumValueResourcesCount?: number;
  /** What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. */
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedLowValueResourcesCount?: number;
}

export const AttackExposure: Schema.Schema<AttackExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    latestCalculationTime: Schema.optional(Schema.String),
    attackExposureResult: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AttackExposure" });

export interface GoogleCloudSecuritycenterV2Folder {
  /** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceFolder?: string;
  /** The user defined display name for this folder. */
  resourceFolderDisplayName?: string;
}

export const GoogleCloudSecuritycenterV2Folder: Schema.Schema<GoogleCloudSecuritycenterV2Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Folder" });

export interface GcpMetadata {
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV2Folder>;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
  /** The name of the organization that the resource belongs to. */
  organization?: string;
  /** The project ID that the resource belongs to. */
  projectDisplayName?: string;
  /** The full resource name of resource's parent. */
  parent?: string;
}

export const GcpMetadata: Schema.Schema<GcpMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Folder)),
    parentDisplayName: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcpMetadata" });

export interface PortRange {
  /** Maximum port value. */
  max?: string;
  /** Minimum port value. */
  min?: string;
}

export const PortRange: Schema.Schema<PortRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    max: Schema.optional(Schema.String),
    min: Schema.optional(Schema.String),
  }).annotate({ identifier: "PortRange" });

export interface IpRule {
  /** The IP protocol this rule applies to. This value can either be one of the following well known protocol strings (TCP, UDP, ICMP, ESP, AH, IPIP, SCTP) or a string representation of the integer value. */
  protocol?: string;
  /** Optional. An optional list of ports to which this rule applies. This field is only applicable for the UDP or (S)TCP protocols. Each entry must be either an integer or a range including a min and max port number. */
  portRanges?: ReadonlyArray<PortRange>;
}

export const IpRule: Schema.Schema<IpRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    portRanges: Schema.optional(Schema.Array(PortRange)),
  }).annotate({ identifier: "IpRule" });

export interface Allowed {
  /** Optional. Optional list of allowed IP rules. */
  ipRules?: ReadonlyArray<IpRule>;
}

export const Allowed: Schema.Schema<Allowed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(IpRule)),
  }).annotate({ identifier: "Allowed" });

export interface GoogleCloudSecuritycenterV2Disk {
  /** The name of the disk, for example, "https://www.googleapis.com/compute/v1/projects/{project-id}/zones/{zone-id}/disks/{disk-id}". */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Disk: Schema.Schema<GoogleCloudSecuritycenterV2Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Disk" });

export interface SensitivityScore {
  /** The sensitivity score applied to the resource. */
  score?:
    | "SENSITIVITY_SCORE_LEVEL_UNSPECIFIED"
    | "SENSITIVITY_LOW"
    | "SENSITIVITY_UNKNOWN"
    | "SENSITIVITY_MODERATE"
    | "SENSITIVITY_HIGH"
    | (string & {});
}

export const SensitivityScore: Schema.Schema<SensitivityScore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.String),
  }).annotate({ identifier: "SensitivityScore" });

export interface InfoType {
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`. */
  name?: string;
  /** Optional custom sensitivity for this InfoType. This only applies to data profiling. */
  sensitivityScore?: SensitivityScore;
  /** Optional version name for this InfoType. */
  version?: string;
}

export const InfoType: Schema.Schema<InfoType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(SensitivityScore),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "InfoType" });

export interface CloudDlpDataProfile {
  /** Type of information detected by SDP. Info type includes name, version and sensitivity of the detected information type. */
  infoTypes?: ReadonlyArray<InfoType>;
  /** Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`. */
  dataProfile?: string;
  /** The resource hierarchy level at which the data profile was generated. */
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
}

export const CloudDlpDataProfile: Schema.Schema<CloudDlpDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(Schema.Array(InfoType)),
    dataProfile: Schema.optional(Schema.String),
    parentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudDlpDataProfile" });

export interface GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount {
  /** Aggregation value. */
  value?: number;
  /** Aggregation key. */
  key?: string;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount: Schema.Schema<GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    key: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount",
  });

export interface DiskPath {
  /** Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh */
  relativePath?: string;
  /** UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) */
  partitionUuid?: string;
}

export const DiskPath: Schema.Schema<DiskPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    partitionUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskPath" });

export interface FileOperation {
  /** The type of the operation */
  type?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "OPEN"
    | "READ"
    | "RENAME"
    | "WRITE"
    | "EXECUTE"
    | (string & {});
}

export const FileOperation: Schema.Schema<FileOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileOperation" });

export interface File {
  /** True when the hash covers only a prefix of the file. */
  partiallyHashed?: boolean;
  /** Prefix of the file contents as a JSON-encoded string. */
  contents?: string;
  /** Absolute path of the file as a JSON encoded string. */
  path?: string;
  /** The load state of the file. */
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  /** The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file. */
  hashedSize?: string;
  /** Path of the file in terms of underlying disk/partition identifiers. */
  diskPath?: DiskPath;
  /** Operation(s) performed on a file. */
  operations?: ReadonlyArray<FileOperation>;
  /** Size of the file in bytes. */
  size?: string;
  /** SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file. */
  sha256?: string;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partiallyHashed: Schema.optional(Schema.Boolean),
    contents: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    fileLoadState: Schema.optional(Schema.String),
    hashedSize: Schema.optional(Schema.String),
    diskPath: Schema.optional(DiskPath),
    operations: Schema.optional(Schema.Array(FileOperation)),
    size: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface EnvironmentVariable {
  /** Environment variable name as a JSON encoded string. */
  name?: string;
  /** Environment variable value as a JSON encoded string. */
  val?: string;
}

export const EnvironmentVariable: Schema.Schema<EnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    val: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvironmentVariable" });

export interface Process {
  /** File information for the process executable. */
  binary?: File;
  /** The ID of the user that executed the process. E.g. If this is the root user this will always be 0. */
  userId?: string;
  /** The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`. */
  name?: string;
  /** True if `env_variables` is incomplete. */
  envVariablesTruncated?: boolean;
  /** The parent process ID. */
  parentPid?: string;
  /** When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter. */
  script?: File;
  /** File information for libraries loaded by the process. */
  libraries?: ReadonlyArray<File>;
  /** True if `args` is incomplete. */
  argumentsTruncated?: boolean;
  /** The process ID. */
  pid?: string;
  /** Process arguments as JSON encoded strings. */
  args?: ReadonlyArray<string>;
  /** Process environment variables. */
  envVariables?: ReadonlyArray<EnvironmentVariable>;
}

export const Process: Schema.Schema<Process> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binary: Schema.optional(File),
    userId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    parentPid: Schema.optional(Schema.String),
    script: Schema.optional(File),
    libraries: Schema.optional(Schema.Array(File)),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    pid: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    envVariables: Schema.optional(Schema.Array(EnvironmentVariable)),
  }).annotate({ identifier: "Process" });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo {
  /** Email address of the contacts. */
  email?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo",
  });

export interface GoogleCloudSecuritycenterV2Chokepoint {
  /** List of resource names of findings associated with this chokepoint. For example, organizations/123/sources/456/findings/789. This list will have at most 100 findings. */
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Chokepoint: Schema.Schema<GoogleCloudSecuritycenterV2Chokepoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Chokepoint" });

export interface GoogleCloudSecuritycenterV2DynamicMuteRecord {
  /** The relative resource name of the mute rule, represented by a mute config, that created this record, for example `organizations/123/muteConfigs/mymuteconfig` or `organizations/123/locations/global/muteConfigs/mymuteconfig`. */
  muteConfig?: string;
  /** When the dynamic mute rule first matched the finding. */
  matchTime?: string;
}

export const GoogleCloudSecuritycenterV2DynamicMuteRecord: Schema.Schema<GoogleCloudSecuritycenterV2DynamicMuteRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteConfig: Schema.optional(Schema.String),
    matchTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DynamicMuteRecord" });

export interface GoogleCloudSecuritycenterV2Node {
  /** [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Node: Schema.Schema<GoogleCloudSecuritycenterV2Node> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Node" });

export interface GoogleCloudSecuritycenterV2NodePool {
  /** Nodes associated with the finding. */
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
  /** Kubernetes node pool name. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2NodePool: Schema.Schema<GoogleCloudSecuritycenterV2NodePool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NodePool" });

export interface GoogleCloudSecuritycenterV2Attack {
  /** Total PPS (packets per second) volume of attack. */
  volumePpsLong?: string;
  /** Total PPS (packets per second) volume of attack. Deprecated - refer to volume_pps_long instead. */
  volumePps?: number;
  /** Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'. */
  classification?: string;
  /** Total BPS (bytes per second) volume of attack. Deprecated - refer to volume_bps_long instead. */
  volumeBps?: number;
  /** Total BPS (bytes per second) volume of attack. */
  volumeBpsLong?: string;
}

export const GoogleCloudSecuritycenterV2Attack: Schema.Schema<GoogleCloudSecuritycenterV2Attack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumePpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    classification: Schema.optional(Schema.String),
    volumeBps: Schema.optional(Schema.Number),
    volumeBpsLong: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Attack" });

export interface GoogleCloudSecuritycenterV2SensitivityScore {
  /** The sensitivity score applied to the resource. */
  score?:
    | "SENSITIVITY_SCORE_LEVEL_UNSPECIFIED"
    | "SENSITIVITY_LOW"
    | "SENSITIVITY_UNKNOWN"
    | "SENSITIVITY_MODERATE"
    | "SENSITIVITY_HIGH"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SensitivityScore: Schema.Schema<GoogleCloudSecuritycenterV2SensitivityScore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SensitivityScore" });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality {
  /** Criticality Type. */
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality",
  });

export interface Reference {
  /** Source of the reference e.g. NVD */
  source?: string;
  /** Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527. */
  uri?: string;
}

export const Reference: Schema.Schema<Reference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reference" });

export interface Cwe {
  /** The CWE identifier, e.g. CWE-94 */
  id?: string;
  /** Any reference to the details on the CWE, for example, https://cwe.mitre.org/data/definitions/94.html */
  references?: ReadonlyArray<Reference>;
}

export const Cwe: Schema.Schema<Cwe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    references: Schema.optional(Schema.Array(Reference)),
  }).annotate({ identifier: "Cwe" });

export interface HttpResponse {
  /** The http path for which response code was returned by web application, for example, "https://test-app.a.run.app/test". */
  path?: string;
  /** The http response code returned by the web application, for example, 200. */
  statusCode?: string;
}

export const HttpResponse: Schema.Schema<HttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    statusCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpResponse" });

export interface ExternalExposure {
  /** The full resource name of the forwarding rule, for example, "//compute.googleapis.com/projects/{project-id}/global/forwardingRules/{forwarding-rule-name}". */
  forwardingRule?: string;
  /** Hostname of the exposed application, for example, "https://test-app.a.run.app/" */
  hostnameUri?: string;
  /** The full resource name of the load balancer firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  loadBalancerFirewallPolicy?: string;
  /** The full resource name of the firewall policy of the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  serviceFirewallPolicy?: string;
  /** Public port number of the exposed endpoint. */
  publicPort?: string;
  /** The full resource name of load balancer backend service, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  backendService?: string;
  /** Public IP address of the exposed endpoint. */
  publicIpAddress?: string;
  /** The full resource name of the load balancer backend bucket, for example, "//compute.googleapis.com/projects/{project-id}/global/backendBuckets/{name}" */
  backendBucket?: string;
  /** The full resource name of the PSC (Private Service Connect) service attachment that the load balancer network endpoint group targets, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/serviceAttachments/{name}" */
  pscServiceAttachment?: string;
  /** The name and version of the service, for example, "Jupyter Notebook 6.14.0". */
  exposedService?: string;
  /** The full resource name of the network ingress firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{name}". */
  networkIngressFirewallPolicy?: string;
  /** Private IP address of the exposed endpoint. */
  privateIpAddress?: string;
  /** The full resource name of the instance group, for example, "//compute.googleapis.com/projects/{project-id}/global/instanceGroups/{name}". */
  instanceGroup?: string;
  /** The http response returned by the web application. */
  httpResponse?: ReadonlyArray<HttpResponse>;
  /** The full resource name of load balancer backend service in the internal project having resource exposed via PSC, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  internalBackendService?: string;
  /** Port number associated with private IP address. */
  privatePort?: string;
  /** The full resource name of the PSC (Private Service Connect) network attachment that network interface controller is attached to, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/networkAttachments/{name}" */
  pscNetworkAttachment?: string;
  /** The resource which is running the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/zones/{zone}/instances/{instance}.” */
  exposedEndpoint?: string;
  /** The name and version of the exposed web application, for example, "Jenkins 2.184". */
  exposedApplication?: string;
  /** The full resource name of the network endpoint group, for example, "//compute.googleapis.com/projects/{project-id}/global/networkEndpointGroups/{name}". */
  networkEndpointGroup?: string;
}

export const ExternalExposure: Schema.Schema<ExternalExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forwardingRule: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    httpResponse: Schema.optional(Schema.Array(HttpResponse)),
    internalBackendService: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalExposure" });

export interface AssetDiscoveryConfig {
  /** The project ids to use for filtering asset discovery. */
  projectIds?: ReadonlyArray<string>;
  /** The mode to use for filtering asset discovery. */
  inclusionMode?:
    | "INCLUSION_MODE_UNSPECIFIED"
    | "INCLUDE_ONLY"
    | "EXCLUDE"
    | (string & {});
}

export const AssetDiscoveryConfig: Schema.Schema<AssetDiscoveryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectIds: Schema.optional(Schema.Array(Schema.String)),
    inclusionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetDiscoveryConfig" });

export interface Application {
  /** The base URI that identifies the network location of the application in which the vulnerability was detected. For example, `http://example.com`. */
  baseUri?: string;
  /** The full URI with payload that can be used to reproduce the vulnerability. For example, `http://example.com?p=aMmYgI6H`. */
  fullUri?: string;
}

export const Application: Schema.Schema<Application> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Application" });

export interface Contact {
  /** An email address. For example, "`person123@company.com`". */
  email?: string;
}

export const Contact: Schema.Schema<Contact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Contact" });

export interface Job {
  /** The fully-qualified name for a job. e.g. `projects//jobs/` */
  name?: string;
  /** Output only. State of the job, such as `RUNNING` or `PENDING`. */
  state?:
    | "JOB_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Optional. If the job did not complete successfully, this field describes why. */
  errorCode?: number;
  /** Optional. Gives the location where the job ran, such as `US` or `europe-west1` */
  location?: string;
}

export const Job: Schema.Schema<Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.Number),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Job" });

export interface GoogleCloudSecuritycenterV2Compliance {
  /** Policies within the standard or benchmark, for example, A.12.4.1 */
  ids?: ReadonlyArray<string>;
  /** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
  standard?: string;
  /** Version of the standard or benchmark, for example, 1.1 */
  version?: string;
}

export const GoogleCloudSecuritycenterV2Compliance: Schema.Schema<GoogleCloudSecuritycenterV2Compliance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
    standard: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Compliance" });

export interface Dataset {
  /** The user defined display name of dataset, e.g. plants-dataset */
  displayName?: string;
  /** Data source, such as BigQuery source URI, e.g. bq://scc-nexus-test.AIPPtest.gsod */
  source?: string;
  /** Resource name of the dataset, e.g. projects/{project}/locations/{location}/datasets/2094040236064505856 */
  name?: string;
}

export const Dataset: Schema.Schema<Dataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dataset" });

export interface Pipeline {
  /** Resource name of the pipeline, e.g. projects/{project}/locations/{location}/trainingPipelines/5253428229225578496 */
  name?: string;
  /** The user defined display name of pipeline, e.g. plants-classification */
  displayName?: string;
}

export const Pipeline: Schema.Schema<Pipeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pipeline" });

export interface VertexAi {
  /** Datasets associated with the finding. */
  datasets?: ReadonlyArray<Dataset>;
  /** Pipelines associated with the finding. */
  pipelines?: ReadonlyArray<Pipeline>;
}

export const VertexAi: Schema.Schema<VertexAi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(Schema.Array(Dataset)),
    pipelines: Schema.optional(Schema.Array(Pipeline)),
  }).annotate({ identifier: "VertexAi" });

export interface GoogleCloudSecuritycenterV2ResourcePathNode {
  /** The type of resource this node represents. */
  nodeType?:
    | "RESOURCE_PATH_NODE_TYPE_UNSPECIFIED"
    | "GCP_ORGANIZATION"
    | "GCP_FOLDER"
    | "GCP_PROJECT"
    | "AWS_ORGANIZATION"
    | "AWS_ORGANIZATIONAL_UNIT"
    | "AWS_ACCOUNT"
    | "AZURE_MANAGEMENT_GROUP"
    | "AZURE_SUBSCRIPTION"
    | "AZURE_RESOURCE_GROUP"
    | (string & {});
  /** The display name of the resource this node represents. */
  displayName?: string;
  /** The ID of the resource this node represents. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2ResourcePathNode: Schema.Schema<GoogleCloudSecuritycenterV2ResourcePathNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePathNode" });

export interface GoogleCloudSecuritycenterV2ResourcePath {
  /** The list of nodes that make the up resource path, ordered from lowest level to highest level. */
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourcePathNode>;
}

export const GoogleCloudSecuritycenterV2ResourcePath: Schema.Schema<GoogleCloudSecuritycenterV2ResourcePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ResourcePathNode),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePath" });

export interface ToxicCombination {
  /** The [Attack exposure score](https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_exposure_scores) of this toxic combination. The score is a measure of how much this toxic combination exposes one or more high-value resources to potential attack. */
  attackExposureScore?: number;
  /** List of resource names of findings associated with this toxic combination. For example, `organizations/123/sources/456/findings/789`. */
  relatedFindings?: ReadonlyArray<string>;
}

export const ToxicCombination: Schema.Schema<ToxicCombination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attackExposureScore: Schema.optional(Schema.Number),
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ToxicCombination" });

export interface GoogleCloudSecuritycenterV2Dataset {
  /** Resource name of the dataset, e.g. projects/{project}/locations/{location}/datasets/2094040236064505856 */
  name?: string;
  /** The user defined display name of dataset, e.g. plants-dataset */
  displayName?: string;
  /** Data source, such as a BigQuery source URI, e.g. bq://scc-nexus-test.AIPPtest.gsod */
  source?: string;
}

export const GoogleCloudSecuritycenterV2Dataset: Schema.Schema<GoogleCloudSecuritycenterV2Dataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Dataset" });

export interface GoogleCloudSecuritycenterV2SecretStatus {
  /** The validity of the secret. */
  validity?:
    | "SECRET_VALIDITY_UNSPECIFIED"
    | "SECRET_VALIDITY_UNSUPPORTED"
    | "SECRET_VALIDITY_FAILED"
    | "SECRET_VALIDITY_INVALID"
    | "SECRET_VALIDITY_VALID"
    | (string & {});
  /** Time that the secret was found. */
  lastUpdatedTime?: string;
}

export const GoogleCloudSecuritycenterV2SecretStatus: Schema.Schema<GoogleCloudSecuritycenterV2SecretStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validity: Schema.optional(Schema.String),
    lastUpdatedTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecretStatus" });

export interface GroupAssetsRequest {
  /** Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `resource_properties.size = 100` is a valid filter string. */
  filter?: string;
  /** Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** The value returned by the last `GroupAssetsResponse`; indicates that this is a continuation of a prior `GroupAssets` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** When compare_duration is set, the Asset's "state" property is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state" values when compare_duration is specified: * "ADDED": indicates that the asset was not present before compare_duration, but present at reference_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at reference_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and reference_time. This field is ignored if `state` is not a field in `group_by`. */
  compareDuration?: string;
  /** Required. Expression that defines what assets fields to use for grouping. The string value should follow SQL syntax: comma separated list of fields. For example: "security_center_properties.resource_project,security_center_properties.project". The following fields are supported when compare_duration is not set: * security_center_properties.resource_project * security_center_properties.resource_type * security_center_properties.resource_parent The following fields are supported when compare_duration is set: * security_center_properties.resource_type */
  groupBy?: string;
}

export const GroupAssetsRequest: Schema.Schema<GroupAssetsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    compareDuration: Schema.optional(Schema.String),
    groupBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupAssetsRequest" });

export interface Requests {
  /** For 'Increasing deny ratio', the ratio is the denied traffic divided by the allowed traffic. For 'Allowed traffic spike', the ratio is the allowed traffic in the short term divided by allowed traffic in the long term. */
  ratio?: number;
  /** Denied RPS (requests per second) over the long term. */
  longTermDenied?: number;
  /** Allowed RPS (requests per second) over the long term. */
  longTermAllowed?: number;
  /** Allowed RPS (requests per second) in the short term. */
  shortTermAllowed?: number;
}

export const Requests: Schema.Schema<Requests> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ratio: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Requests" });

export interface GoogleCloudSecuritycenterV2IssueFindingCve {
  /** The CVE name. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingCve: Schema.Schema<GoogleCloudSecuritycenterV2IssueFindingCve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFindingCve" });

export interface GoogleCloudSecuritycenterV2PolicyDriftDetails {
  /** The name of the updated field, for example constraint.implementation.policy_rules[0].enforce */
  field?: string;
  /** The value of this field that was configured in a posture, for example, `true` or `allowed_values={"projects/29831892"}`. */
  expectedValue?: string;
  /** The detected value that violates the deployed posture, for example, `false` or `allowed_values={"projects/22831892"}`. */
  detectedValue?: string;
}

export const GoogleCloudSecuritycenterV2PolicyDriftDetails: Schema.Schema<GoogleCloudSecuritycenterV2PolicyDriftDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    expectedValue: Schema.optional(Schema.String),
    detectedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2PolicyDriftDetails" });

export interface GoogleCloudSecuritycenterV2SecurityPosture {
  /** The version of the posture, for example, `c7cfa2a8`. */
  revisionId?: string;
  /** The details about a change in an updated policy that violates the deployed posture. */
  policyDriftDetails?: ReadonlyArray<GoogleCloudSecuritycenterV2PolicyDriftDetails>;
  /** The project, folder, or organization on which the posture is deployed, for example, `projects/{project_number}`. */
  postureDeploymentResource?: string;
  /** The name of the updated policy, for example, `projects/{project_id}/policies/{constraint_name}`. */
  changedPolicy?: string;
  /** Name of the posture, for example, `CIS-Posture`. */
  name?: string;
  /** The name of the updated policy set, for example, `cis-policyset`. */
  policySet?: string;
  /** The ID of the updated policy, for example, `compute-policy-1`. */
  policy?: string;
  /** The name of the posture deployment, for example, `organizations/{org_id}/posturedeployments/{posture_deployment_id}`. */
  postureDeployment?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPosture: Schema.Schema<GoogleCloudSecuritycenterV2SecurityPosture> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PolicyDriftDetails),
    ),
    postureDeploymentResource: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPosture" });

export interface GoogleCloudSecuritycenterV2DataRetentionDeletionEvent {
  /** Maximum duration of retention allowed from the DRD control. This comes from the DRD control where users set a max TTL for their data. For example, suppose that a user sets the max TTL for a Cloud Storage bucket to 90 days. However, an object in that bucket is 100 days old. In this case, a DataRetentionDeletionEvent will be generated for that Cloud Storage bucket, and the max_retention_allowed is 90 days. */
  maxRetentionAllowed?: string;
  /** Timestamp indicating when the event was detected. */
  eventDetectionTime?: string;
  /** Min duration of retention allowed from the DSPM retention control. This field is only populated when event type is set to EVENT_TYPE_MIN_TTL_FROM_CREATION. */
  minRetentionAllowed?: string;
  /** Number of objects that violated the policy for this resource. If the number is less than 1,000, then the value of this field is the exact number. If the number of objects that violated the policy is greater than or equal to 1,000, then the value of this field is 1000. */
  dataObjectCount?: string;
  /** Type of the DRD event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2DataRetentionDeletionEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxRetentionAllowed: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    minRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2DataRetentionDeletionEvent",
  });

export interface SecurityBulletin {
  /** ID of the bulletin corresponding to the vulnerability. */
  bulletinId?: string;
  /** Submission time of this Security Bulletin. */
  submissionTime?: string;
  /** This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 */
  suggestedUpgradeVersion?: string;
}

export const SecurityBulletin: Schema.Schema<SecurityBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityBulletin" });

export interface GoogleCloudSecuritycenterV2Cvssv3 {
  /** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  /** The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible. */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  /** This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. */
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | (string & {});
  /** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. */
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  /** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  /** This metric measures the impact to integrity of a successfully exploited vulnerability. */
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2Cvssv3: Schema.Schema<GoogleCloudSecuritycenterV2Cvssv3> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userInteraction: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    attackVector: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    privilegesRequired: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cvssv3" });

export interface GoogleCloudSecuritycenterV2Reference {
  /** Source of the reference e.g. NVD */
  source?: string;
  /** Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527. */
  uri?: string;
}

export const GoogleCloudSecuritycenterV2Reference: Schema.Schema<GoogleCloudSecuritycenterV2Reference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Reference" });

export interface GoogleCloudSecuritycenterV2Cve {
  /** The potential impact of the vulnerability if it was to be exploited. */
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Whether or not the vulnerability has been observed in the wild. */
  observedInTheWild?: boolean;
  /** Whether or not the vulnerability was zero day when the finding was published. */
  zeroDay?: boolean;
  /** Date the first publicly available exploit or PoC was released. */
  exploitReleaseDate?: string;
  /** Date of the earliest known exploitation. */
  firstExploitationDate?: string;
  /** Whether upstream fix is available for the CVE. */
  upstreamFixAvailable?: boolean;
  /** The unique identifier for the vulnerability. e.g. CVE-2021-34527 */
  id?: string;
  /** Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document */
  cvssv3?: GoogleCloudSecuritycenterV2Cvssv3;
  /** The exploitation activity of the vulnerability in the wild. */
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  /** Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527 */
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
}

export const GoogleCloudSecuritycenterV2Cve: Schema.Schema<GoogleCloudSecuritycenterV2Cve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    impact: Schema.optional(Schema.String),
    observedInTheWild: Schema.optional(Schema.Boolean),
    zeroDay: Schema.optional(Schema.Boolean),
    exploitReleaseDate: Schema.optional(Schema.String),
    firstExploitationDate: Schema.optional(Schema.String),
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    cvssv3: Schema.optional(GoogleCloudSecuritycenterV2Cvssv3),
    exploitationActivity: Schema.optional(Schema.String),
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cve" });

export interface GoogleCloudSecuritycenterV2DataAccessEvent {
  /** The operation performed by the principal to access the data. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data access event. */
  eventTime?: string;
  /** Unique identifier for data access event. */
  eventId?: string;
  /** The email address of the principal that accessed the data. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
}

export const GoogleCloudSecuritycenterV2DataAccessEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataAccessEvent" });

export interface Folder {
  /** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceFolder?: string;
  /** The user defined display name for this folder. */
  resourceFolderDisplayName?: string;
}

export const Folder: Schema.Schema<Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

export interface Subject {
  /** Name for the subject. */
  name?: string;
  /** Namespace for the subject. */
  ns?: string;
  /** Authentication type for the subject. */
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
}

export const Subject: Schema.Schema<Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subject" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicy {
  /** The reason for the policy failure, for example, "severity=HIGH AND max_vuln_count=2". */
  failureReason?: string;
  /** The ID of the failing policy, for example, "organizations/3392779/locations/global/policies/prod-policy". */
  policyId?: string;
  /** The type of the policy evaluation. */
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicy: Schema.Schema<GoogleCloudSecuritycenterV2ArtifactGuardPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureReason: Schema.optional(Schema.String),
    policyId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicy" });

export interface GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping {
  /** Resource value mapping for high-sensitivity Sensitive Data Protection findings */
  highSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Resource value mapping for medium-sensitivity Sensitive Data Protection findings */
  mediumSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping: Schema.Schema<GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    highSensitivityMapping: Schema.optional(Schema.String),
    mediumSensitivityMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping",
  });

export interface OrganizationSettings {
  /** A flag that indicates if Asset Discovery should be enabled. If the flag is set to `true`, then discovery of assets will occur. If it is set to `false`, all historical assets will remain, but discovery of future assets will not occur. */
  enableAssetDiscovery?: boolean;
  /** The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/organizationSettings". */
  name?: string;
  /** The configuration used for Asset Discovery runs. */
  assetDiscoveryConfig?: AssetDiscoveryConfig;
}

export const OrganizationSettings: Schema.Schema<OrganizationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableAssetDiscovery: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    assetDiscoveryConfig: Schema.optional(AssetDiscoveryConfig),
  }).annotate({ identifier: "OrganizationSettings" });

export interface GoogleCloudSecuritycenterV2AdaptiveProtection {
  /** A score of 0 means that there is low confidence that the detected event is an actual attack. A score of 1 means that there is high confidence that the detected event is an attack. See the [Adaptive Protection documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning) for further explanation. */
  confidence?: number;
}

export const GoogleCloudSecuritycenterV2AdaptiveProtection: Schema.Schema<GoogleCloudSecuritycenterV2AdaptiveProtection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdaptiveProtection" });

export interface GoogleCloudSecuritycenterV2Role {
  /** Role type. */
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  /** Role name. */
  name?: string;
  /** Role namespace. */
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Role: Schema.Schema<GoogleCloudSecuritycenterV2Role> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Role" });

export interface Cvssv3 {
  /** This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. */
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | (string & {});
  /** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. */
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  /** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  /** This metric measures the impact to integrity of a successfully exploited vulnerability. */
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  /** The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible. */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
}

export const Cvssv3: Schema.Schema<Cvssv3> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attackComplexity: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    privilegesRequired: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    attackVector: Schema.optional(Schema.String),
  }).annotate({ identifier: "Cvssv3" });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision {
  /** The resource name of an ADC Application Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision",
  });

export interface AccessReview {
  /** A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all. */
  verb?: string;
  /** The API version of the resource. "*" means all. */
  version?: string;
  /** The optional subresource type. */
  subresource?: string;
  /** The API group of the resource. "*" means all. */
  group?: string;
  /** The optional resource type requested. "*" means all. */
  resource?: string;
  /** The name of the resource being requested. Empty means all. */
  name?: string;
  /** Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty). */
  ns?: string;
}

export const AccessReview: Schema.Schema<AccessReview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessReview" });

export interface GoogleCloudSecuritycenterV2AdcSharedTemplateRevision {
  /** The resource name of an ADC Shared Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcSharedTemplateRevision: Schema.Schema<GoogleCloudSecuritycenterV2AdcSharedTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcSharedTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2AwsOrganizationalUnit {
  /** The friendly name of the OU. */
  name?: string;
  /** The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. For example, "ou-ab12-cd34ef56". */
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganizationalUnit: Schema.Schema<GoogleCloudSecuritycenterV2AwsOrganizationalUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AwsOrganizationalUnit",
  });

export interface GoogleCloudSecuritycenterV2AwsAccount {
  /** The friendly name of this account. */
  name?: string;
  /** The unique identifier (ID) of the account, containing exactly 12 digits. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsAccount: Schema.Schema<GoogleCloudSecuritycenterV2AwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsAccount" });

export interface GoogleCloudSecuritycenterV2AwsOrganization {
  /** The unique identifier (ID) for the organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganization: Schema.Schema<GoogleCloudSecuritycenterV2AwsOrganization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsOrganization" });

export interface GoogleCloudSecuritycenterV2AwsMetadata {
  /** A list of AWS organizational units associated with the resource, ordered from lowest level (closest to the account) to highest level. */
  organizationalUnits?: ReadonlyArray<GoogleCloudSecuritycenterV2AwsOrganizationalUnit>;
  /** The AWS account associated with the resource. */
  account?: GoogleCloudSecuritycenterV2AwsAccount;
  /** The AWS organization associated with the resource. */
  organization?: GoogleCloudSecuritycenterV2AwsOrganization;
}

export const GoogleCloudSecuritycenterV2AwsMetadata: Schema.Schema<GoogleCloudSecuritycenterV2AwsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationalUnits: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AwsOrganizationalUnit),
    ),
    account: Schema.optional(GoogleCloudSecuritycenterV2AwsAccount),
    organization: Schema.optional(GoogleCloudSecuritycenterV2AwsOrganization),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsMetadata" });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo {
  /** Email address of the contacts. */
  email?: string;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality {
  /** Criticality Type. */
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment {
  /** Environment Type. */
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributes {
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality;
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality,
    ),
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
    environment: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment,
    ),
    developerOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ResourceApplicationAttributes",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplication {
  /** The resource name of an Application. Format: `projects/{host-project-id}/locations/{location}/applications/{application-id}` */
  name?: string;
  /** Consumer provided attributes for the application */
  attributes?: GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2ResourceApplication: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceApplication" });

export interface GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision {
  /** The resource name of an ADC Application Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision: Schema.Schema<GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2AdcApplication {
  /** Consumer provided attributes for the AppHub application. */
  attributes?: GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
  /** The resource name of an ADC Application. Format: projects/{project}/locations/{location}/spaces/{space}/applications/{application} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcApplication: Schema.Schema<GoogleCloudSecuritycenterV2AdcApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdcApplication" });

export interface GoogleCloudSecuritycenterV2AzureResourceGroup {
  /** The name of the Azure resource group. This is not a UUID. */
  name?: string;
  /** The ID of the Azure resource group. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2AzureResourceGroup: Schema.Schema<GoogleCloudSecuritycenterV2AzureResourceGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureResourceGroup" });

export interface GoogleCloudSecuritycenterV2AzureManagementGroup {
  /** The UUID of the Azure management group, for example, `20000000-0001-0000-0000-000000000000`. */
  id?: string;
  /** The display name of the Azure management group. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureManagementGroup: Schema.Schema<GoogleCloudSecuritycenterV2AzureManagementGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AzureManagementGroup",
  });

export interface GoogleCloudSecuritycenterV2AzureSubscription {
  /** The UUID of the Azure subscription, for example, `291bba3f-e0a5-47bc-a099-3bdcb2a50a05`. */
  id?: string;
  /** The display name of the Azure subscription. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureSubscription: Schema.Schema<GoogleCloudSecuritycenterV2AzureSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureSubscription" });

export interface GoogleCloudSecuritycenterV2AzureTenant {
  /** The ID of the Microsoft Entra tenant, for example, "a11aaa11-aa11-1aa1-11aa-1aaa11a". */
  id?: string;
  /** The display name of the Azure tenant. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureTenant: Schema.Schema<GoogleCloudSecuritycenterV2AzureTenant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureTenant" });

export interface GoogleCloudSecuritycenterV2AzureMetadata {
  /** The Azure resource group associated with the resource. */
  resourceGroup?: GoogleCloudSecuritycenterV2AzureResourceGroup;
  /** A list of Azure management groups associated with the resource, ordered from lowest level (closest to the subscription) to highest level. */
  managementGroups?: ReadonlyArray<GoogleCloudSecuritycenterV2AzureManagementGroup>;
  /** The Azure subscription associated with the resource. */
  subscription?: GoogleCloudSecuritycenterV2AzureSubscription;
  /** The Azure Entra tenant associated with the resource. */
  tenant?: GoogleCloudSecuritycenterV2AzureTenant;
}

export const GoogleCloudSecuritycenterV2AzureMetadata: Schema.Schema<GoogleCloudSecuritycenterV2AzureMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroup: Schema.optional(
      GoogleCloudSecuritycenterV2AzureResourceGroup,
    ),
    managementGroups: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AzureManagementGroup),
    ),
    subscription: Schema.optional(GoogleCloudSecuritycenterV2AzureSubscription),
    tenant: Schema.optional(GoogleCloudSecuritycenterV2AzureTenant),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureMetadata" });

export interface GoogleCloudSecuritycenterV2Resource {
  /** The human readable name of the resource. */
  displayName?: string;
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: GoogleCloudSecuritycenterV2AdcSharedTemplateRevision;
  /** Indicates which cloud provider the finding is from. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
  /** The full resource type of the resource. */
  type?: string;
  /** The service or resource provider associated with the resource. */
  service?: string;
  /** The AWS metadata associated with the finding. */
  awsMetadata?: GoogleCloudSecuritycenterV2AwsMetadata;
  /** The App Hub application this resource belongs to. */
  application?: GoogleCloudSecuritycenterV2ResourceApplication;
  /** A string representation of the resource path. For Google Cloud, it has the format of `organizations/{organization_id}/folders/{folder_id}/folders/{folder_id}/projects/{project_id}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id}/ou/{organizational_unit_id}/ou/{organizational_unit_id}/account/{account_id}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id}/mg/{management_group_id}/subscription/{subscription_id}/rg/{resource_group_name}` where there can be any number of management groups. */
  resourcePathString?: string;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision;
  /** The ADC application associated with the finding. */
  adcApplication?: GoogleCloudSecuritycenterV2AdcApplication;
  /** The region or location of the service (if applicable). */
  location?: string;
  /** The Google Cloud metadata associated with the finding. */
  gcpMetadata?: GcpMetadata;
  /** Provides the path to the resource within the resource hierarchy. */
  resourcePath?: GoogleCloudSecuritycenterV2ResourcePath;
  /** The Azure metadata associated with the finding. */
  azureMetadata?: GoogleCloudSecuritycenterV2AzureMetadata;
}

export const GoogleCloudSecuritycenterV2Resource: Schema.Schema<GoogleCloudSecuritycenterV2Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcSharedTemplateRevision,
    ),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(GoogleCloudSecuritycenterV2AwsMetadata),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplication,
    ),
    resourcePathString: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision,
    ),
    adcApplication: Schema.optional(GoogleCloudSecuritycenterV2AdcApplication),
    location: Schema.optional(Schema.String),
    gcpMetadata: Schema.optional(GcpMetadata),
    resourcePath: Schema.optional(GoogleCloudSecuritycenterV2ResourcePath),
    azureMetadata: Schema.optional(GoogleCloudSecuritycenterV2AzureMetadata),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Resource" });

export interface GoogleCloudSecuritycenterV2AttackExposure {
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedLowValueResourcesCount?: number;
  /** Output only. What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. */
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  /** The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: `organizations/123/simulations/456/attackExposureResults/789` */
  attackExposureResult?: string;
  /** The number of medium value resources that are exposed as a result of this finding. */
  exposedMediumValueResourcesCount?: number;
  /** The most recent time the attack exposure was updated on this finding. */
  latestCalculationTime?: string;
  /** A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate. */
  score?: number;
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedHighValueResourcesCount?: number;
}

export const GoogleCloudSecuritycenterV2AttackExposure: Schema.Schema<GoogleCloudSecuritycenterV2AttackExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    attackExposureResult: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    latestCalculationTime: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AttackExposure" });

export interface GoogleCloudSecuritycenterV2TicketInfo {
  /** The description of the ticket in the ticket system. */
  description?: string;
  /** The link to the ticket in the ticket system. */
  uri?: string;
  /** The assignee of the ticket in the ticket system. */
  assignee?: string;
  /** The latest status of the ticket, as reported by the ticket system. */
  status?: string;
  /** The identifier of the ticket in the ticket system. */
  id?: string;
  /** The time when the ticket was last updated, as reported by the ticket system. */
  updateTime?: string;
}

export const GoogleCloudSecuritycenterV2TicketInfo: Schema.Schema<GoogleCloudSecuritycenterV2TicketInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2TicketInfo" });

export interface GoogleCloudSecuritycenterV2ExternalSystem {
  /** References primary/secondary etc assignees in the external system. */
  assignees?: ReadonlyArray<string>;
  /** The identifier that's used to track the finding's corresponding case in the external system. */
  externalUid?: string;
  /** The SLA of the finding's corresponding case in the external system. */
  caseSla?: string;
  /** Full resource name of the external system. The following list shows some examples: + `organizations/1234/sources/5678/findings/123456/externalSystems/jira` + `organizations/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` + `folders/1234/sources/5678/findings/123456/externalSystems/jira` + `folders/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` + `projects/1234/sources/5678/findings/123456/externalSystems/jira` + `projects/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` */
  name?: string;
  /** The priority of the finding's corresponding case in the external system. */
  casePriority?: string;
  /** The time when the case was created, as reported by the external system. */
  caseCreateTime?: string;
  /** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
  ticketInfo?: GoogleCloudSecuritycenterV2TicketInfo;
  /** The link to the finding's corresponding case in the external system. */
  caseUri?: string;
  /** The time when the case was closed, as reported by the external system. */
  caseCloseTime?: string;
  /** The most recent status of the finding's corresponding case, as reported by the external system. */
  status?: string;
  /** The time when the case was last updated, as reported by the external system. */
  externalSystemUpdateTime?: string;
}

export const GoogleCloudSecuritycenterV2ExternalSystem: Schema.Schema<GoogleCloudSecuritycenterV2ExternalSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assignees: Schema.optional(Schema.Array(Schema.String)),
    externalUid: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    caseCreateTime: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(GoogleCloudSecuritycenterV2TicketInfo),
    caseUri: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    externalSystemUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalSystem" });

export interface GoogleCloudSecuritycenterV2MitreAttack {
  /** The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`). */
  primaryTechniques?: ReadonlyArray<
    | "TECHNIQUE_UNSPECIFIED"
    | "DATA_OBFUSCATION"
    | "DATA_OBFUSCATION_STEGANOGRAPHY"
    | "OS_CREDENTIAL_DUMPING"
    | "OS_CREDENTIAL_DUMPING_PROC_FILESYSTEM"
    | "OS_CREDENTIAL_DUMPING_ETC_PASSWORD_AND_ETC_SHADOW"
    | "DATA_FROM_LOCAL_SYSTEM"
    | "AUTOMATED_EXFILTRATION"
    | "OBFUSCATED_FILES_OR_INFO"
    | "STEGANOGRAPHY"
    | "COMPILE_AFTER_DELIVERY"
    | "COMMAND_OBFUSCATION"
    | "SCHEDULED_TRANSFER"
    | "SYSTEM_OWNER_USER_DISCOVERY"
    | "MASQUERADING"
    | "MATCH_LEGITIMATE_NAME_OR_LOCATION"
    | "BOOT_OR_LOGON_INITIALIZATION_SCRIPTS"
    | "STARTUP_ITEMS"
    | "NETWORK_SERVICE_DISCOVERY"
    | "SCHEDULED_TASK_JOB"
    | "SCHEDULED_TASK_JOB_CRON"
    | "CONTAINER_ORCHESTRATION_JOB"
    | "PROCESS_INJECTION"
    | "INPUT_CAPTURE"
    | "INPUT_CAPTURE_KEYLOGGING"
    | "PROCESS_DISCOVERY"
    | "COMMAND_AND_SCRIPTING_INTERPRETER"
    | "UNIX_SHELL"
    | "PYTHON"
    | "EXPLOITATION_FOR_PRIVILEGE_ESCALATION"
    | "PERMISSION_GROUPS_DISCOVERY"
    | "CLOUD_GROUPS"
    | "INDICATOR_REMOVAL"
    | "INDICATOR_REMOVAL_CLEAR_LINUX_OR_MAC_SYSTEM_LOGS"
    | "INDICATOR_REMOVAL_CLEAR_COMMAND_HISTORY"
    | "INDICATOR_REMOVAL_FILE_DELETION"
    | "INDICATOR_REMOVAL_TIMESTOMP"
    | "INDICATOR_REMOVAL_CLEAR_MAILBOX_DATA"
    | "APPLICATION_LAYER_PROTOCOL"
    | "DNS"
    | "SOFTWARE_DEPLOYMENT_TOOLS"
    | "VALID_ACCOUNTS"
    | "DEFAULT_ACCOUNTS"
    | "LOCAL_ACCOUNTS"
    | "CLOUD_ACCOUNTS"
    | "FILE_AND_DIRECTORY_DISCOVERY"
    | "ACCOUNT_DISCOVERY_LOCAL_ACCOUNT"
    | "PROXY"
    | "EXTERNAL_PROXY"
    | "MULTI_HOP_PROXY"
    | "ACCOUNT_MANIPULATION"
    | "ADDITIONAL_CLOUD_CREDENTIALS"
    | "ADDITIONAL_CLOUD_ROLES"
    | "SSH_AUTHORIZED_KEYS"
    | "ADDITIONAL_CONTAINER_CLUSTER_ROLES"
    | "MULTI_STAGE_CHANNELS"
    | "INGRESS_TOOL_TRANSFER"
    | "NATIVE_API"
    | "BRUTE_FORCE"
    | "AUTOMATED_COLLECTION"
    | "SHARED_MODULES"
    | "DATA_ENCODING"
    | "STANDARD_ENCODING"
    | "ACCESS_TOKEN_MANIPULATION"
    | "TOKEN_IMPERSONATION_OR_THEFT"
    | "CREATE_ACCOUNT"
    | "LOCAL_ACCOUNT"
    | "DEOBFUSCATE_DECODE_FILES_OR_INFO"
    | "EXPLOIT_PUBLIC_FACING_APPLICATION"
    | "SUPPLY_CHAIN_COMPROMISE"
    | "COMPROMISE_SOFTWARE_DEPENDENCIES_AND_DEVELOPMENT_TOOLS"
    | "EXPLOITATION_FOR_CLIENT_EXECUTION"
    | "USER_EXECUTION"
    | "EXPLOITATION_FOR_CREDENTIAL_ACCESS"
    | "LINUX_AND_MAC_FILE_AND_DIRECTORY_PERMISSIONS_MODIFICATION"
    | "DOMAIN_POLICY_MODIFICATION"
    | "DATA_DESTRUCTION"
    | "DATA_ENCRYPTED_FOR_IMPACT"
    | "SERVICE_STOP"
    | "INHIBIT_SYSTEM_RECOVERY"
    | "FIRMWARE_CORRUPTION"
    | "RESOURCE_HIJACKING"
    | "NETWORK_DENIAL_OF_SERVICE"
    | "CLOUD_SERVICE_DISCOVERY"
    | "STEAL_APPLICATION_ACCESS_TOKEN"
    | "ACCOUNT_ACCESS_REMOVAL"
    | "TRANSFER_DATA_TO_CLOUD_ACCOUNT"
    | "STEAL_WEB_SESSION_COOKIE"
    | "CREATE_OR_MODIFY_SYSTEM_PROCESS"
    | "EVENT_TRIGGERED_EXECUTION"
    | "BOOT_OR_LOGON_AUTOSTART_EXECUTION"
    | "KERNEL_MODULES_AND_EXTENSIONS"
    | "SHORTCUT_MODIFICATION"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM_SETUID_AND_SETGID"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM_SUDO_AND_SUDO_CACHING"
    | "UNSECURED_CREDENTIALS"
    | "CREDENTIALS_IN_FILES"
    | "BASH_HISTORY"
    | "PRIVATE_KEYS"
    | "SUBVERT_TRUST_CONTROL"
    | "INSTALL_ROOT_CERTIFICATE"
    | "COMPROMISE_HOST_SOFTWARE_BINARY"
    | "CREDENTIALS_FROM_PASSWORD_STORES"
    | "MODIFY_AUTHENTICATION_PROCESS"
    | "PLUGGABLE_AUTHENTICATION_MODULES"
    | "MULTI_FACTOR_AUTHENTICATION"
    | "IMPAIR_DEFENSES"
    | "DISABLE_OR_MODIFY_TOOLS"
    | "INDICATOR_BLOCKING"
    | "DISABLE_OR_MODIFY_LINUX_AUDIT_SYSTEM"
    | "HIDE_ARTIFACTS"
    | "HIDDEN_FILES_AND_DIRECTORIES"
    | "HIDDEN_USERS"
    | "EXFILTRATION_OVER_WEB_SERVICE"
    | "EXFILTRATION_TO_CLOUD_STORAGE"
    | "DYNAMIC_RESOLUTION"
    | "LATERAL_TOOL_TRANSFER"
    | "HIJACK_EXECUTION_FLOW"
    | "HIJACK_EXECUTION_FLOW_DYNAMIC_LINKER_HIJACKING"
    | "MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE"
    | "CREATE_SNAPSHOT"
    | "CLOUD_INFRASTRUCTURE_DISCOVERY"
    | "DEVELOP_CAPABILITIES"
    | "DEVELOP_CAPABILITIES_MALWARE"
    | "OBTAIN_CAPABILITIES"
    | "OBTAIN_CAPABILITIES_MALWARE"
    | "OBTAIN_CAPABILITIES_VULNERABILITIES"
    | "ACTIVE_SCANNING"
    | "SCANNING_IP_BLOCKS"
    | "STAGE_CAPABILITIES"
    | "UPLOAD_MALWARE"
    | "CONTAINER_ADMINISTRATION_COMMAND"
    | "DEPLOY_CONTAINER"
    | "ESCAPE_TO_HOST"
    | "CONTAINER_AND_RESOURCE_DISCOVERY"
    | "REFLECTIVE_CODE_LOADING"
    | "STEAL_OR_FORGE_AUTHENTICATION_CERTIFICATES"
    | "FINANCIAL_THEFT"
    | (string & {})
  >;
  /** The MITRE ATT&CK version referenced by the above fields. E.g. "8". */
  version?: string;
  /** Additional MITRE ATT&CK tactics related to this finding, if any. */
  additionalTactics?: ReadonlyArray<
    | "TACTIC_UNSPECIFIED"
    | "RECONNAISSANCE"
    | "RESOURCE_DEVELOPMENT"
    | "INITIAL_ACCESS"
    | "EXECUTION"
    | "PERSISTENCE"
    | "PRIVILEGE_ESCALATION"
    | "DEFENSE_EVASION"
    | "CREDENTIAL_ACCESS"
    | "DISCOVERY"
    | "LATERAL_MOVEMENT"
    | "COLLECTION"
    | "COMMAND_AND_CONTROL"
    | "EXFILTRATION"
    | "IMPACT"
    | (string & {})
  >;
  /** The MITRE ATT&CK tactic most closely represented by this finding, if any. */
  primaryTactic?:
    | "TACTIC_UNSPECIFIED"
    | "RECONNAISSANCE"
    | "RESOURCE_DEVELOPMENT"
    | "INITIAL_ACCESS"
    | "EXECUTION"
    | "PERSISTENCE"
    | "PRIVILEGE_ESCALATION"
    | "DEFENSE_EVASION"
    | "CREDENTIAL_ACCESS"
    | "DISCOVERY"
    | "LATERAL_MOVEMENT"
    | "COLLECTION"
    | "COMMAND_AND_CONTROL"
    | "EXFILTRATION"
    | "IMPACT"
    | (string & {});
  /** Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques. */
  additionalTechniques?: ReadonlyArray<
    | "TECHNIQUE_UNSPECIFIED"
    | "DATA_OBFUSCATION"
    | "DATA_OBFUSCATION_STEGANOGRAPHY"
    | "OS_CREDENTIAL_DUMPING"
    | "OS_CREDENTIAL_DUMPING_PROC_FILESYSTEM"
    | "OS_CREDENTIAL_DUMPING_ETC_PASSWORD_AND_ETC_SHADOW"
    | "DATA_FROM_LOCAL_SYSTEM"
    | "AUTOMATED_EXFILTRATION"
    | "OBFUSCATED_FILES_OR_INFO"
    | "STEGANOGRAPHY"
    | "COMPILE_AFTER_DELIVERY"
    | "COMMAND_OBFUSCATION"
    | "SCHEDULED_TRANSFER"
    | "SYSTEM_OWNER_USER_DISCOVERY"
    | "MASQUERADING"
    | "MATCH_LEGITIMATE_NAME_OR_LOCATION"
    | "BOOT_OR_LOGON_INITIALIZATION_SCRIPTS"
    | "STARTUP_ITEMS"
    | "NETWORK_SERVICE_DISCOVERY"
    | "SCHEDULED_TASK_JOB"
    | "SCHEDULED_TASK_JOB_CRON"
    | "CONTAINER_ORCHESTRATION_JOB"
    | "PROCESS_INJECTION"
    | "INPUT_CAPTURE"
    | "INPUT_CAPTURE_KEYLOGGING"
    | "PROCESS_DISCOVERY"
    | "COMMAND_AND_SCRIPTING_INTERPRETER"
    | "UNIX_SHELL"
    | "PYTHON"
    | "EXPLOITATION_FOR_PRIVILEGE_ESCALATION"
    | "PERMISSION_GROUPS_DISCOVERY"
    | "CLOUD_GROUPS"
    | "INDICATOR_REMOVAL"
    | "INDICATOR_REMOVAL_CLEAR_LINUX_OR_MAC_SYSTEM_LOGS"
    | "INDICATOR_REMOVAL_CLEAR_COMMAND_HISTORY"
    | "INDICATOR_REMOVAL_FILE_DELETION"
    | "INDICATOR_REMOVAL_TIMESTOMP"
    | "INDICATOR_REMOVAL_CLEAR_MAILBOX_DATA"
    | "APPLICATION_LAYER_PROTOCOL"
    | "DNS"
    | "SOFTWARE_DEPLOYMENT_TOOLS"
    | "VALID_ACCOUNTS"
    | "DEFAULT_ACCOUNTS"
    | "LOCAL_ACCOUNTS"
    | "CLOUD_ACCOUNTS"
    | "FILE_AND_DIRECTORY_DISCOVERY"
    | "ACCOUNT_DISCOVERY_LOCAL_ACCOUNT"
    | "PROXY"
    | "EXTERNAL_PROXY"
    | "MULTI_HOP_PROXY"
    | "ACCOUNT_MANIPULATION"
    | "ADDITIONAL_CLOUD_CREDENTIALS"
    | "ADDITIONAL_CLOUD_ROLES"
    | "SSH_AUTHORIZED_KEYS"
    | "ADDITIONAL_CONTAINER_CLUSTER_ROLES"
    | "MULTI_STAGE_CHANNELS"
    | "INGRESS_TOOL_TRANSFER"
    | "NATIVE_API"
    | "BRUTE_FORCE"
    | "AUTOMATED_COLLECTION"
    | "SHARED_MODULES"
    | "DATA_ENCODING"
    | "STANDARD_ENCODING"
    | "ACCESS_TOKEN_MANIPULATION"
    | "TOKEN_IMPERSONATION_OR_THEFT"
    | "CREATE_ACCOUNT"
    | "LOCAL_ACCOUNT"
    | "DEOBFUSCATE_DECODE_FILES_OR_INFO"
    | "EXPLOIT_PUBLIC_FACING_APPLICATION"
    | "SUPPLY_CHAIN_COMPROMISE"
    | "COMPROMISE_SOFTWARE_DEPENDENCIES_AND_DEVELOPMENT_TOOLS"
    | "EXPLOITATION_FOR_CLIENT_EXECUTION"
    | "USER_EXECUTION"
    | "EXPLOITATION_FOR_CREDENTIAL_ACCESS"
    | "LINUX_AND_MAC_FILE_AND_DIRECTORY_PERMISSIONS_MODIFICATION"
    | "DOMAIN_POLICY_MODIFICATION"
    | "DATA_DESTRUCTION"
    | "DATA_ENCRYPTED_FOR_IMPACT"
    | "SERVICE_STOP"
    | "INHIBIT_SYSTEM_RECOVERY"
    | "FIRMWARE_CORRUPTION"
    | "RESOURCE_HIJACKING"
    | "NETWORK_DENIAL_OF_SERVICE"
    | "CLOUD_SERVICE_DISCOVERY"
    | "STEAL_APPLICATION_ACCESS_TOKEN"
    | "ACCOUNT_ACCESS_REMOVAL"
    | "TRANSFER_DATA_TO_CLOUD_ACCOUNT"
    | "STEAL_WEB_SESSION_COOKIE"
    | "CREATE_OR_MODIFY_SYSTEM_PROCESS"
    | "EVENT_TRIGGERED_EXECUTION"
    | "BOOT_OR_LOGON_AUTOSTART_EXECUTION"
    | "KERNEL_MODULES_AND_EXTENSIONS"
    | "SHORTCUT_MODIFICATION"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM_SETUID_AND_SETGID"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM_SUDO_AND_SUDO_CACHING"
    | "UNSECURED_CREDENTIALS"
    | "CREDENTIALS_IN_FILES"
    | "BASH_HISTORY"
    | "PRIVATE_KEYS"
    | "SUBVERT_TRUST_CONTROL"
    | "INSTALL_ROOT_CERTIFICATE"
    | "COMPROMISE_HOST_SOFTWARE_BINARY"
    | "CREDENTIALS_FROM_PASSWORD_STORES"
    | "MODIFY_AUTHENTICATION_PROCESS"
    | "PLUGGABLE_AUTHENTICATION_MODULES"
    | "MULTI_FACTOR_AUTHENTICATION"
    | "IMPAIR_DEFENSES"
    | "DISABLE_OR_MODIFY_TOOLS"
    | "INDICATOR_BLOCKING"
    | "DISABLE_OR_MODIFY_LINUX_AUDIT_SYSTEM"
    | "HIDE_ARTIFACTS"
    | "HIDDEN_FILES_AND_DIRECTORIES"
    | "HIDDEN_USERS"
    | "EXFILTRATION_OVER_WEB_SERVICE"
    | "EXFILTRATION_TO_CLOUD_STORAGE"
    | "DYNAMIC_RESOLUTION"
    | "LATERAL_TOOL_TRANSFER"
    | "HIJACK_EXECUTION_FLOW"
    | "HIJACK_EXECUTION_FLOW_DYNAMIC_LINKER_HIJACKING"
    | "MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE"
    | "CREATE_SNAPSHOT"
    | "CLOUD_INFRASTRUCTURE_DISCOVERY"
    | "DEVELOP_CAPABILITIES"
    | "DEVELOP_CAPABILITIES_MALWARE"
    | "OBTAIN_CAPABILITIES"
    | "OBTAIN_CAPABILITIES_MALWARE"
    | "OBTAIN_CAPABILITIES_VULNERABILITIES"
    | "ACTIVE_SCANNING"
    | "SCANNING_IP_BLOCKS"
    | "STAGE_CAPABILITIES"
    | "UPLOAD_MALWARE"
    | "CONTAINER_ADMINISTRATION_COMMAND"
    | "DEPLOY_CONTAINER"
    | "ESCAPE_TO_HOST"
    | "CONTAINER_AND_RESOURCE_DISCOVERY"
    | "REFLECTIVE_CODE_LOADING"
    | "STEAL_OR_FORGE_AUTHENTICATION_CERTIFICATES"
    | "FINANCIAL_THEFT"
    | (string & {})
  >;
}

export const GoogleCloudSecuritycenterV2MitreAttack: Schema.Schema<GoogleCloudSecuritycenterV2MitreAttack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    primaryTactic: Schema.optional(Schema.String),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MitreAttack" });

export interface GoogleCloudSecuritycenterV2DiskPath {
  /** Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh */
  relativePath?: string;
  /** UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) */
  partitionUuid?: string;
}

export const GoogleCloudSecuritycenterV2DiskPath: Schema.Schema<GoogleCloudSecuritycenterV2DiskPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    partitionUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiskPath" });

export interface GoogleCloudSecuritycenterV2FileOperation {
  /** The type of the operation */
  type?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "OPEN"
    | "READ"
    | "RENAME"
    | "WRITE"
    | "EXECUTE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2FileOperation: Schema.Schema<GoogleCloudSecuritycenterV2FileOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2FileOperation" });

export interface GoogleCloudSecuritycenterV2File {
  /** SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file. */
  sha256?: string;
  /** Size of the file in bytes. */
  size?: string;
  /** Absolute path of the file as a JSON encoded string. */
  path?: string;
  /** True when the hash covers only a prefix of the file. */
  partiallyHashed?: boolean;
  /** Prefix of the file contents as a JSON-encoded string. */
  contents?: string;
  /** The load state of the file. */
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  /** The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file. */
  hashedSize?: string;
  /** Path of the file in terms of underlying disk/partition identifiers. */
  diskPath?: GoogleCloudSecuritycenterV2DiskPath;
  /** Operation(s) performed on a file. */
  operations?: ReadonlyArray<GoogleCloudSecuritycenterV2FileOperation>;
}

export const GoogleCloudSecuritycenterV2File: Schema.Schema<GoogleCloudSecuritycenterV2File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sha256: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    partiallyHashed: Schema.optional(Schema.Boolean),
    contents: Schema.optional(Schema.String),
    fileLoadState: Schema.optional(Schema.String),
    hashedSize: Schema.optional(Schema.String),
    diskPath: Schema.optional(GoogleCloudSecuritycenterV2DiskPath),
    operations: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2FileOperation),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2File" });

export interface GoogleCloudSecuritycenterV2GroupMembership {
  /** Type of group. */
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
  /** ID of the group. */
  groupId?: string;
}

export const GoogleCloudSecuritycenterV2GroupMembership: Schema.Schema<GoogleCloudSecuritycenterV2GroupMembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupType: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2GroupMembership" });

export interface GoogleCloudSecuritycenterV2EnvironmentVariable {
  /** Environment variable name as a JSON encoded string. */
  name?: string;
  /** Environment variable value as a JSON encoded string. */
  val?: string;
}

export const GoogleCloudSecuritycenterV2EnvironmentVariable: Schema.Schema<GoogleCloudSecuritycenterV2EnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    val: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2EnvironmentVariable" });

export interface GoogleCloudSecuritycenterV2Process {
  /** File information for the process executable. */
  binary?: GoogleCloudSecuritycenterV2File;
  /** The ID of the user that executed the process. E.g. If this is the root user this will always be 0. */
  userId?: string;
  /** The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`. */
  name?: string;
  /** When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter. */
  script?: GoogleCloudSecuritycenterV2File;
  /** File information for libraries loaded by the process. */
  libraries?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  /** True if `args` is incomplete. */
  argumentsTruncated?: boolean;
  /** True if `env_variables` is incomplete. */
  envVariablesTruncated?: boolean;
  /** The parent process ID. */
  parentPid?: string;
  /** Process arguments as JSON encoded strings. */
  args?: ReadonlyArray<string>;
  /** Process environment variables. */
  envVariables?: ReadonlyArray<GoogleCloudSecuritycenterV2EnvironmentVariable>;
  /** The process ID. */
  pid?: string;
}

export const GoogleCloudSecuritycenterV2Process: Schema.Schema<GoogleCloudSecuritycenterV2Process> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binary: Schema.optional(GoogleCloudSecuritycenterV2File),
    userId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    script: Schema.optional(GoogleCloudSecuritycenterV2File),
    libraries: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    parentPid: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    envVariables: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2EnvironmentVariable),
    ),
    pid: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Process" });

export interface GoogleCloudSecuritycenterV2Indicator {
  /** The list of URIs associated to the Findings. */
  uris?: ReadonlyArray<string>;
  /** The list of matched signatures indicating that the given process is present in the environment. */
  signatures?: ReadonlyArray<GoogleCloudSecuritycenterV2ProcessSignature>;
  /** The list of IP addresses that are associated with the finding. */
  ipAddresses?: ReadonlyArray<string>;
  /** List of domains associated to the Finding. */
  domains?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Indicator: Schema.Schema<GoogleCloudSecuritycenterV2Indicator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
    signatures: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ProcessSignature),
    ),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    domains: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Indicator" });

export interface GoogleCloudSecuritycenterV2CloudLoggingEntry {
  /** A unique identifier for the log entry. */
  insertId?: string;
  /** The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity` Note that this field is not URL-encoded, unlike in `LogEntry`. */
  logId?: string;
  /** The organization, folder, or project of the monitored resource that produced this log entry. */
  resourceContainer?: string;
  /** The time the event described by the log entry occurred. */
  timestamp?: string;
}

export const GoogleCloudSecuritycenterV2CloudLoggingEntry: Schema.Schema<GoogleCloudSecuritycenterV2CloudLoggingEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insertId: Schema.optional(Schema.String),
    logId: Schema.optional(Schema.String),
    resourceContainer: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudLoggingEntry" });

export interface GoogleCloudSecuritycenterV2LogEntry {
  /** An individual entry in a log stored in Cloud Logging. */
  cloudLoggingEntry?: GoogleCloudSecuritycenterV2CloudLoggingEntry;
}

export const GoogleCloudSecuritycenterV2LogEntry: Schema.Schema<GoogleCloudSecuritycenterV2LogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudLoggingEntry: Schema.optional(
      GoogleCloudSecuritycenterV2CloudLoggingEntry,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LogEntry" });

export interface GoogleCloudSecuritycenterV2ExfilResource {
  /** The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name). */
  name?: string;
  /** Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket. */
  components?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2ExfilResource: Schema.Schema<GoogleCloudSecuritycenterV2ExfilResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExfilResource" });

export interface GoogleCloudSecuritycenterV2Exfiltration {
  /** If there are multiple targets, each target would get a complete copy of the "joined" source data. */
  targets?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
  /** Total exfiltrated bytes processed for the entire job. */
  totalExfiltratedBytes?: string;
  /** If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source. */
  sources?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
}

export const GoogleCloudSecuritycenterV2Exfiltration: Schema.Schema<GoogleCloudSecuritycenterV2Exfiltration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targets: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
    totalExfiltratedBytes: Schema.optional(Schema.String),
    sources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Exfiltration" });

export interface GoogleCloudSecuritycenterV2ToxicCombination {
  /** The [Attack exposure score](https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_exposure_scores) of this toxic combination. The score is a measure of how much this toxic combination exposes one or more high-value resources to potential attack. */
  attackExposureScore?: number;
  /** List of resource names of findings associated with this toxic combination. For example, `organizations/123/sources/456/findings/789`. */
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2ToxicCombination: Schema.Schema<GoogleCloudSecuritycenterV2ToxicCombination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attackExposureScore: Schema.optional(Schema.Number),
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ToxicCombination" });

export interface GoogleCloudSecuritycenterV2InfoType {
  /** Optional version name for this InfoType. */
  version?: string;
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`. */
  name?: string;
  /** Optional custom sensitivity for this InfoType. This only applies to data profiling. */
  sensitivityScore?: GoogleCloudSecuritycenterV2SensitivityScore;
}

export const GoogleCloudSecuritycenterV2InfoType: Schema.Schema<GoogleCloudSecuritycenterV2InfoType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(
      GoogleCloudSecuritycenterV2SensitivityScore,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2InfoType" });

export interface GoogleCloudSecuritycenterV2CloudDlpDataProfile {
  /** Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`. */
  dataProfile?: string;
  /** The resource hierarchy level at which the data profile was generated. */
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
  /** Type of information detected by SDP. Info type includes name, version and sensitivity of the detected information type. */
  infoTypes?: ReadonlyArray<GoogleCloudSecuritycenterV2InfoType>;
}

export const GoogleCloudSecuritycenterV2CloudDlpDataProfile: Schema.Schema<GoogleCloudSecuritycenterV2CloudDlpDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataProfile: Schema.optional(Schema.String),
    parentType: Schema.optional(Schema.String),
    infoTypes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2InfoType),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpDataProfile" });

export interface GoogleCloudSecuritycenterV2Label {
  /** Name of the label. */
  name?: string;
  /** Value that corresponds to the label's name. */
  value?: string;
}

export const GoogleCloudSecuritycenterV2Label: Schema.Schema<GoogleCloudSecuritycenterV2Label> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Label" });

export interface GoogleCloudSecuritycenterV2Container {
  /** Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. */
  imageId?: string;
  /** Container labels, as provided by the container runtime. */
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  /** Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. */
  uri?: string;
  /** Name of the container. */
  name?: string;
  /** The time that the container was created. */
  createTime?: string;
}

export const GoogleCloudSecuritycenterV2Container: Schema.Schema<GoogleCloudSecuritycenterV2Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    uri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Container" });

export interface GoogleCloudSecuritycenterV2Job {
  /** The fully-qualified name for a job. e.g. `projects//jobs/` */
  name?: string;
  /** Output only. State of the job, such as `RUNNING` or `PENDING`. */
  state?:
    | "JOB_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Optional. If the job did not complete successfully, this field describes why. */
  errorCode?: number;
  /** Optional. Gives the location where the job ran, such as `US` or `europe-west1` */
  location?: string;
}

export const GoogleCloudSecuritycenterV2Job: Schema.Schema<GoogleCloudSecuritycenterV2Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.Number),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Job" });

export interface GoogleCloudSecuritycenterV2AffectedResources {
  /** The count of resources affected by the finding. */
  count?: string;
}

export const GoogleCloudSecuritycenterV2AffectedResources: Schema.Schema<GoogleCloudSecuritycenterV2AffectedResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AffectedResources" });

export interface GoogleCloudSecuritycenterV2CloudDlpInspection {
  /** Whether Cloud DLP scanned the complete resource or a sampled subset. */
  fullScan?: boolean;
  /** The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`. */
  infoType?: string;
  /** The number of times Cloud DLP found this infoType within this job and resource. */
  infoTypeCount?: string;
  /** Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`. */
  inspectJob?: string;
}

export const GoogleCloudSecuritycenterV2CloudDlpInspection: Schema.Schema<GoogleCloudSecuritycenterV2CloudDlpInspection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullScan: Schema.optional(Schema.Boolean),
    infoType: Schema.optional(Schema.String),
    infoTypeCount: Schema.optional(Schema.String),
    inspectJob: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpInspection" });

export interface GoogleCloudSecuritycenterV2OrgPolicy {
  /** Identifier. The resource name of the org policy. Example: "organizations/{organization_id}/policies/{constraint_name}" */
  name?: string;
}

export const GoogleCloudSecuritycenterV2OrgPolicy: Schema.Schema<GoogleCloudSecuritycenterV2OrgPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2OrgPolicy" });

export interface GoogleCloudSecuritycenterV2PortRange {
  /** Minimum port value. */
  min?: string;
  /** Maximum port value. */
  max?: string;
}

export const GoogleCloudSecuritycenterV2PortRange: Schema.Schema<GoogleCloudSecuritycenterV2PortRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    min: Schema.optional(Schema.String),
    max: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2PortRange" });

export interface GoogleCloudSecuritycenterV2IpRule {
  /** The IP protocol this rule applies to. This value can either be one of the following well known protocol strings (TCP, UDP, ICMP, ESP, AH, IPIP, SCTP) or a string representation of the integer value. */
  protocol?: string;
  /** Optional. An optional list of ports to which this rule applies. This field is only applicable for the UDP or (S)TCP protocols. Each entry must be either an integer or a range including a min and max port number. */
  portRanges?: ReadonlyArray<GoogleCloudSecuritycenterV2PortRange>;
}

export const GoogleCloudSecuritycenterV2IpRule: Schema.Schema<GoogleCloudSecuritycenterV2IpRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    portRanges: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PortRange),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRule" });

export interface GoogleCloudSecuritycenterV2Denied {
  /** Optional. Optional list of denied IP rules. */
  ipRules?: ReadonlyArray<GoogleCloudSecuritycenterV2IpRule>;
}

export const GoogleCloudSecuritycenterV2Denied: Schema.Schema<GoogleCloudSecuritycenterV2Denied> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2IpRule)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Denied" });

export interface GoogleCloudSecuritycenterV2Allowed {
  /** Optional. Optional list of allowed IP rules. */
  ipRules?: ReadonlyArray<GoogleCloudSecuritycenterV2IpRule>;
}

export const GoogleCloudSecuritycenterV2Allowed: Schema.Schema<GoogleCloudSecuritycenterV2Allowed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2IpRule)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Allowed" });

export interface GoogleCloudSecuritycenterV2IpRules {
  /** Tuple with denied rules. */
  denied?: GoogleCloudSecuritycenterV2Denied;
  /** Name of the network protocol service, such as FTP, that is exposed by the open port. Follows the naming convention available at: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml. */
  exposedServices?: ReadonlyArray<string>;
  /** The direction that the rule is applicable to, one of ingress or egress. */
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  /** Tuple with allowed rules. */
  allowed?: GoogleCloudSecuritycenterV2Allowed;
  /** If destination IP ranges are specified, the firewall rule applies only to traffic that has a destination IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  destinationIpRanges?: ReadonlyArray<string>;
  /** If source IP ranges are specified, the firewall rule applies only to traffic that has a source IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  sourceIpRanges?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2IpRules: Schema.Schema<GoogleCloudSecuritycenterV2IpRules> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    denied: Schema.optional(GoogleCloudSecuritycenterV2Denied),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
    direction: Schema.optional(Schema.String),
    allowed: Schema.optional(GoogleCloudSecuritycenterV2Allowed),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRules" });

export interface GoogleCloudSecuritycenterV2Network {
  /** The name of the VPC network resource, for example, `//compute.googleapis.com/projects/my-project/global/networks/my-network`. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Network: Schema.Schema<GoogleCloudSecuritycenterV2Network> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Network" });

export interface GoogleCloudSecuritycenterV2SecretFilePath {
  /** Path to the file. */
  path?: string;
}

export const GoogleCloudSecuritycenterV2SecretFilePath: Schema.Schema<GoogleCloudSecuritycenterV2SecretFilePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecretFilePath" });

export interface GoogleCloudSecuritycenterV2SecretEnvironmentVariable {
  /** Environment variable name as a JSON encoded string. Note that value is not included since the value contains the secret data, which is sensitive core content. */
  key?: string;
}

export const GoogleCloudSecuritycenterV2SecretEnvironmentVariable: Schema.Schema<GoogleCloudSecuritycenterV2SecretEnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2SecretEnvironmentVariable",
  });

export interface GoogleCloudSecuritycenterV2Secret {
  /** The status of the secret. */
  status?: GoogleCloudSecuritycenterV2SecretStatus;
  /** The file containing the secret. */
  filePath?: GoogleCloudSecuritycenterV2SecretFilePath;
  /** The type of secret, for example, GCP_API_KEY. */
  type?: string;
  /** The environment variable containing the secret. */
  environmentVariable?: GoogleCloudSecuritycenterV2SecretEnvironmentVariable;
}

export const GoogleCloudSecuritycenterV2Secret: Schema.Schema<GoogleCloudSecuritycenterV2Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleCloudSecuritycenterV2SecretStatus),
    filePath: Schema.optional(GoogleCloudSecuritycenterV2SecretFilePath),
    type: Schema.optional(Schema.String),
    environmentVariable: Schema.optional(
      GoogleCloudSecuritycenterV2SecretEnvironmentVariable,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Secret" });

export interface GoogleCloudSecuritycenterV2BackupDisasterRecovery {
  /** The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, `centos7-01`. */
  host?: string;
  /** The backup type of the Backup and DR image. For example, `Snapshot`, `Remote Snapshot`, `OnVault`. */
  backupType?: string;
  /** The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, `snap-ov`. */
  backupTemplate?: string;
  /** The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, `DiskPoolOne`. */
  storagePool?: string;
  /** The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, `skipofflineappsincongrp, nounmap`. */
  policyOptions?: ReadonlyArray<string>;
  /** The timestamp at which the Backup and DR backup was created. */
  backupCreateTime?: string;
  /** The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, `GCP`. */
  profile?: string;
  /** The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, `backup-server-57137`. */
  appliance?: string;
  /** The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, `centos7-01-vol00`, `centos7-01-vol01`, `centos7-01-vol02`. */
  applications?: ReadonlyArray<string>;
  /** The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, `onvaults`. */
  policies?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2BackupDisasterRecovery: Schema.Schema<GoogleCloudSecuritycenterV2BackupDisasterRecovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    backupCreateTime: Schema.optional(Schema.String),
    profile: Schema.optional(Schema.String),
    appliance: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
    policies: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2BackupDisasterRecovery",
  });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicies {
  /** The ID of the resource that has policies configured for it. */
  resourceId?: string;
  /** A list of failing policies. */
  failingPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2ArtifactGuardPolicy>;
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicies: Schema.Schema<GoogleCloudSecuritycenterV2ArtifactGuardPolicies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    failingPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ArtifactGuardPolicy),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicies",
  });

export interface GoogleCloudSecuritycenterV2Contact {
  /** An email address. For example, "`person123@company.com`". */
  email?: string;
}

export const GoogleCloudSecuritycenterV2Contact: Schema.Schema<GoogleCloudSecuritycenterV2Contact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Contact" });

export interface GoogleCloudSecuritycenterV2ContactDetails {
  /** A list of contacts */
  contacts?: ReadonlyArray<GoogleCloudSecuritycenterV2Contact>;
}

export const GoogleCloudSecuritycenterV2ContactDetails: Schema.Schema<GoogleCloudSecuritycenterV2ContactDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Contact)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ContactDetails" });

export interface GoogleCloudSecuritycenterV2HttpResponse {
  /** The http response code returned by the web application, for example, 200. */
  statusCode?: string;
  /** The http path for which response code was returned by web application, for example, "https://test-app.a.run.app/test". */
  path?: string;
}

export const GoogleCloudSecuritycenterV2HttpResponse: Schema.Schema<GoogleCloudSecuritycenterV2HttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2HttpResponse" });

export interface GoogleCloudSecuritycenterV2ExternalExposure {
  /** Port number associated with private IP address. */
  privatePort?: string;
  /** The full resource name of the PSC (Private Service Connect) network attachment that network interface controller is attached to, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/networkAttachments/{name}" */
  pscNetworkAttachment?: string;
  /** The full resource name of the network endpoint group, for example, "//compute.googleapis.com/projects/{project-id}/global/networkEndpointGroups/{name}". */
  networkEndpointGroup?: string;
  /** The resource which is running the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/zones/{zone}/instances/{instance}.” */
  exposedEndpoint?: string;
  /** The name and version of the exposed web application, for example, "Jenkins 2.184". */
  exposedApplication?: string;
  /** The full resource name of the PSC (Private Service Connect) service attachment that the load balancer network endpoint group targets, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/serviceAttachments/{name}" */
  pscServiceAttachment?: string;
  /** The full resource name of the load balancer backend bucket, for example, "//compute.googleapis.com/projects/{project-id}/global/backendBuckets/{name}" */
  backendBucket?: string;
  /** The full resource name of load balancer backend service in the internal project having resource exposed via PSC, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  internalBackendService?: string;
  /** The full resource name of the instance group, for example, "//compute.googleapis.com/projects/{project-id}/global/instanceGroups/{name}". */
  instanceGroup?: string;
  /** The http response returned by the web application. */
  httpResponse?: ReadonlyArray<GoogleCloudSecuritycenterV2HttpResponse>;
  /** Private IP address of the exposed endpoint. */
  privateIpAddress?: string;
  /** The name and version of the service, for example, "Jupyter Notebook 6.14.0". */
  exposedService?: string;
  /** The full resource name of the network ingress firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{name}". */
  networkIngressFirewallPolicy?: string;
  /** The full resource name of load balancer backend service, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  backendService?: string;
  /** Public port number of the exposed endpoint. */
  publicPort?: string;
  /** The full resource name of the load balancer firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  loadBalancerFirewallPolicy?: string;
  /** The full resource name of the firewall policy of the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  serviceFirewallPolicy?: string;
  /** Public IP address of the exposed endpoint. */
  publicIpAddress?: string;
  /** The full resource name of the forwarding rule, for example, "//compute.googleapis.com/projects/{project-id}/global/forwardingRules/{forwarding-rule-name}". */
  forwardingRule?: string;
  /** Hostname of the exposed application, for example, "https://test-app.a.run.app/" */
  hostnameUri?: string;
}

export const GoogleCloudSecuritycenterV2ExternalExposure: Schema.Schema<GoogleCloudSecuritycenterV2ExternalExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privatePort: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    httpResponse: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2HttpResponse),
    ),
    privateIpAddress: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalExposure" });

export interface GoogleCloudSecuritycenterV2Subject {
  /** Authentication type for the subject. */
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  /** Name for the subject. */
  name?: string;
  /** Namespace for the subject. */
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Subject: Schema.Schema<GoogleCloudSecuritycenterV2Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Subject" });

export interface GoogleCloudSecuritycenterV2Binding {
  /** Represents one or more subjects that are bound to the role. Not always available for PATCH requests. */
  subjects?: ReadonlyArray<GoogleCloudSecuritycenterV2Subject>;
  /** Namespace for the binding. */
  ns?: string;
  /** Name for the binding. */
  name?: string;
  /** The Role or ClusterRole referenced by the binding. */
  role?: GoogleCloudSecuritycenterV2Role;
}

export const GoogleCloudSecuritycenterV2Binding: Schema.Schema<GoogleCloudSecuritycenterV2Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subjects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Subject)),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    role: Schema.optional(GoogleCloudSecuritycenterV2Role),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Binding" });

export interface GoogleCloudSecuritycenterV2Pod {
  /** Pod labels. For Kubernetes containers, these are applied to the container. */
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  /** Kubernetes Pod name. */
  name?: string;
  /** Kubernetes Pod namespace. */
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Pod: Schema.Schema<GoogleCloudSecuritycenterV2Pod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pod" });

export interface GoogleCloudSecuritycenterV2Object {
  /** Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. */
  ns?: string;
  /** Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. */
  name?: string;
  /** Kubernetes object group, such as "policy.k8s.io/v1". */
  group?: string;
  /** Kubernetes object kind, such as "Namespace". */
  kind?: string;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
}

export const GoogleCloudSecuritycenterV2Object: Schema.Schema<GoogleCloudSecuritycenterV2Object> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Object" });

export interface GoogleCloudSecuritycenterV2AccessReview {
  /** A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all. */
  verb?: string;
  /** The API version of the resource. "*" means all. */
  version?: string;
  /** The optional subresource type. */
  subresource?: string;
  /** The API group of the resource. "*" means all. */
  group?: string;
  /** The optional resource type requested. "*" means all. */
  resource?: string;
  /** The name of the resource being requested. Empty means all. */
  name?: string;
  /** Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty). */
  ns?: string;
}

export const GoogleCloudSecuritycenterV2AccessReview: Schema.Schema<GoogleCloudSecuritycenterV2AccessReview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AccessReview" });

export interface GoogleCloudSecuritycenterV2Kubernetes {
  /** GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. */
  nodePools?: ReadonlyArray<GoogleCloudSecuritycenterV2NodePool>;
  /** Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV2Binding>;
  /** Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. */
  pods?: ReadonlyArray<GoogleCloudSecuritycenterV2Pod>;
  /** Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. */
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
  /** Kubernetes objects related to the finding. */
  objects?: ReadonlyArray<GoogleCloudSecuritycenterV2Object>;
  /** Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  roles?: ReadonlyArray<GoogleCloudSecuritycenterV2Role>;
  /** Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. */
  accessReviews?: ReadonlyArray<GoogleCloudSecuritycenterV2AccessReview>;
}

export const GoogleCloudSecuritycenterV2Kubernetes: Schema.Schema<GoogleCloudSecuritycenterV2Kubernetes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodePools: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2NodePool),
    ),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Binding)),
    pods: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Pod)),
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
    objects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Object)),
    roles: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Role)),
    accessReviews: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AccessReview),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Kubernetes" });

export interface GoogleCloudSecuritycenterV2PolicyViolationSummary {
  /** Count of child resources in violation of the policy. */
  policyViolationsCount?: string;
  /** Total number of child resources that conform to the policy. */
  conformantResourcesCount?: string;
  /** Number of child resources for which errors during evaluation occurred. The evaluation result for these child resources is effectively "unknown". */
  evaluationErrorsCount?: string;
  /** Total count of child resources which were not in scope for evaluation. */
  outOfScopeResourcesCount?: string;
}

export const GoogleCloudSecuritycenterV2PolicyViolationSummary: Schema.Schema<GoogleCloudSecuritycenterV2PolicyViolationSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyViolationsCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
    evaluationErrorsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2PolicyViolationSummary",
  });

export interface GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo {
  /** A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
  principalSubject?: string;
  /** The email address of a Google account. */
  principalEmail?: string;
}

export const GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo: Schema.Schema<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo",
  });

export interface GoogleCloudSecuritycenterV2Access {
  /** The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
  serviceAccountDelegationInfo?: ReadonlyArray<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo>;
  /** The caller's user agent string associated with the finding. */
  userAgent?: string;
  /** The caller IP's geolocation, which identifies where the call came from. */
  callerIpGeo?: GoogleCloudSecuritycenterV2Geolocation;
  /** This is the API service that the service account made a call to, e.g. "iam.googleapis.com" */
  serviceName?: string;
  /** Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
  principalEmail?: string;
  /** The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". */
  serviceAccountKeyName?: string;
  /** A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`. */
  principalSubject?: string;
  /** A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. */
  userName?: string;
  /** Caller's IP address, such as "1.1.1.1". */
  callerIp?: string;
  /** Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. */
  userAgentFamily?: string;
  /** The method that the service account called, e.g. "SetIamPolicy". */
  methodName?: string;
}

export const GoogleCloudSecuritycenterV2Access: Schema.Schema<GoogleCloudSecuritycenterV2Access> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo),
    ),
    userAgent: Schema.optional(Schema.String),
    callerIpGeo: Schema.optional(GoogleCloudSecuritycenterV2Geolocation),
    serviceName: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    userAgentFamily: Schema.optional(Schema.String),
    methodName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Access" });

export interface GoogleCloudSecuritycenterV2SecurityMarks {
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name The following list shows some examples: + `organizations/{organization_id}/assets/{asset_id}/securityMarks` + `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks` + `organizations/{organization_id}/sources/{source_id}/locations/{location}/findings/{finding_id}/securityMarks` */
  name?: string;
  /** The canonical name of the marks. The following list shows some examples: + `organizations/{organization_id}/assets/{asset_id}/securityMarks` + `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks` + `organizations/{organization_id}/sources/{source_id}/locations/{location}/findings/{finding_id}/securityMarks` + `folders/{folder_id}/assets/{asset_id}/securityMarks` + `folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks` + `folders/{folder_id}/sources/{source_id}/locations/{location}/findings/{finding_id}/securityMarks` + `projects/{project_number}/assets/{asset_id}/securityMarks` + `projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks` + `projects/{project_number}/sources/{source_id}/locations/{location}/findings/{finding_id}/securityMarks` */
  canonicalName?: string;
}

export const GoogleCloudSecuritycenterV2SecurityMarks: Schema.Schema<GoogleCloudSecuritycenterV2SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityMarks" });

export interface GoogleCloudSecuritycenterV2AiModel {
  /** The domain of the model, for example, “image-classification”. */
  domain?: string;
  /** The purpose of the model, for example, "Inteference" or "Training". */
  usageCategory?: string;
  /** The platform on which the model is deployed. */
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  /** The user defined display name of model. Ex. baseline-classification-model */
  displayName?: string;
  /** The region in which the model is used, for example, “us-central1”. */
  location?: string;
  /** The name of the AI model, for example, "gemini:1.0.0". */
  name?: string;
  /** The publisher of the model, for example, “google” or “nvidia”. */
  publisher?: string;
  /** The name of the model library, for example, “transformers”. */
  library?: string;
}

export const GoogleCloudSecuritycenterV2AiModel: Schema.Schema<GoogleCloudSecuritycenterV2AiModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AiModel" });

export interface GoogleCloudSecuritycenterV2Database {
  /** Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. */
  name?: string;
  /** The username used to connect to the database. The username might not be an IAM principal and does not have a set format. */
  userName?: string;
  /** The human-readable name of the database that the user connected to. */
  displayName?: string;
  /** The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
  version?: string;
  /** The SQL statement that is associated with the database access. */
  query?: string;
  /** The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change. */
  grantees?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Database: Schema.Schema<GoogleCloudSecuritycenterV2Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Database" });

export interface GoogleCloudSecuritycenterV2SecurityBulletin {
  /** ID of the bulletin corresponding to the vulnerability. */
  bulletinId?: string;
  /** Submission time of this Security Bulletin. */
  submissionTime?: string;
  /** This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 */
  suggestedUpgradeVersion?: string;
}

export const GoogleCloudSecuritycenterV2SecurityBulletin: Schema.Schema<GoogleCloudSecuritycenterV2SecurityBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityBulletin" });

export interface GoogleCloudSecuritycenterV2Package {
  /** The name of the package where the vulnerability was detected. */
  packageName?: string;
  /** Type of package, for example, os, maven, or go. */
  packageType?: string;
  /** The CPE URI where the vulnerability was detected. */
  cpeUri?: string;
  /** The version of the package. */
  packageVersion?: string;
}

export const GoogleCloudSecuritycenterV2Package: Schema.Schema<GoogleCloudSecuritycenterV2Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Package" });

export interface GoogleCloudSecuritycenterV2Cwe {
  /** The CWE identifier, e.g. CWE-94 */
  id?: string;
  /** Any reference to the details on the CWE, for example, https://cwe.mitre.org/data/definitions/94.html */
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
}

export const GoogleCloudSecuritycenterV2Cwe: Schema.Schema<GoogleCloudSecuritycenterV2Cwe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cwe" });

export interface GoogleCloudSecuritycenterV2Vulnerability {
  /** CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  cve?: GoogleCloudSecuritycenterV2Cve;
  /** The security bulletin is relevant to this finding. */
  securityBulletin?: GoogleCloudSecuritycenterV2SecurityBulletin;
  /** The offending package is relevant to the finding. */
  offendingPackage?: GoogleCloudSecuritycenterV2Package;
  /** Provider provided risk_score based on multiple factors. The higher the risk score, the more risky the vulnerability is. */
  providerRiskScore?: string;
  /** Represents whether the vulnerability is reachable (detected via static analysis) */
  reachable?: boolean;
  /** The fixed package is relevant to the finding. */
  fixedPackage?: GoogleCloudSecuritycenterV2Package;
  /** Represents one or more Common Weakness Enumeration (CWE) information on this vulnerability. */
  cwes?: ReadonlyArray<GoogleCloudSecuritycenterV2Cwe>;
}

export const GoogleCloudSecuritycenterV2Vulnerability: Schema.Schema<GoogleCloudSecuritycenterV2Vulnerability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cve: Schema.optional(GoogleCloudSecuritycenterV2Cve),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityBulletin,
    ),
    offendingPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    providerRiskScore: Schema.optional(Schema.String),
    reachable: Schema.optional(Schema.Boolean),
    fixedPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    cwes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Cwe)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Vulnerability" });

export interface GoogleCloudSecuritycenterV2DiscoveredWorkload {
  /** A boolean flag set to true if installed packages strongly predict the workload type. */
  detectedRelevantPackages?: boolean;
  /** A boolean flag set to true if associated hardware strongly predicts the workload type. */
  detectedRelevantHardware?: boolean;
  /** The type of workload. */
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  /** A boolean flag set to true if associated keywords strongly predict the workload type. */
  detectedRelevantKeywords?: boolean;
  /** The confidence in detection of this workload. */
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
}

export const GoogleCloudSecuritycenterV2DiscoveredWorkload: Schema.Schema<GoogleCloudSecuritycenterV2DiscoveredWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    workloadType: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiscoveredWorkload" });

export interface GoogleCloudSecuritycenterV2IamBinding {
  /** The action that was performed on a Binding. */
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  /** Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner". */
  role?: string;
  /** A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com". */
  member?: string;
}

export const GoogleCloudSecuritycenterV2IamBinding: Schema.Schema<GoogleCloudSecuritycenterV2IamBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamBinding" });

export interface GoogleCloudSecuritycenterV2KernelRootkit {
  /** True if unexpected modifications of kernel code memory are present. */
  unexpectedCodeModification?: boolean;
  /** Rootkit name, when available. */
  name?: string;
  /** True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedKprobeHandler?: boolean;
  /** True if unexpected modifications of kernel read-only data memory are present. */
  unexpectedReadOnlyDataModification?: boolean;
  /** True if kernel code pages that are not in the expected kernel or module code regions are present. */
  unexpectedKernelCodePages?: boolean;
  /** True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedFtraceHandler?: boolean;
  /** True if interrupt handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedInterruptHandler?: boolean;
  /** True if system call handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedSystemCallHandler?: boolean;
  /** True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. */
  unexpectedProcessesInRunqueue?: boolean;
}

export const GoogleCloudSecuritycenterV2KernelRootkit: Schema.Schema<GoogleCloudSecuritycenterV2KernelRootkit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2KernelRootkit" });

export interface GoogleCloudSecuritycenterV2Control {
  /** Name of the Control */
  controlName?: string;
  /** Display name of the control. For example, AU-02. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Control: Schema.Schema<GoogleCloudSecuritycenterV2Control> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Control" });

export interface GoogleCloudSecuritycenterV2Framework {
  /** The controls associated with the framework. */
  controls?: ReadonlyArray<GoogleCloudSecuritycenterV2Control>;
  /** Display name of the framework. For a standard framework, this will look like e.g. PCI DSS 3.2.1, whereas for a custom framework it can be a user defined string like MyFramework */
  displayName?: string;
  /** Name of the framework associated with the finding */
  name?: string;
  /** Category of the framework associated with the finding. E.g. Security Benchmark, or Assured Workloads */
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
  /** Type of the framework associated with the finding, to specify whether the framework is built-in (pre-defined and immutable) or a custom framework defined by the customer (equivalent to security posture) */
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2Framework: Schema.Schema<GoogleCloudSecuritycenterV2Framework> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controls: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Control)),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    category: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Framework" });

export interface GoogleCloudSecuritycenterV2CloudControl {
  /** Name of the CloudControl associated with the finding. */
  cloudControlName?: string;
  /** Type of cloud control. */
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
  /** Policy type of the CloudControl */
  policyType?: string;
  /** Version of the Cloud Control */
  version?: number;
}

export const GoogleCloudSecuritycenterV2CloudControl: Schema.Schema<GoogleCloudSecuritycenterV2CloudControl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudControlName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    policyType: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudControl" });

export interface GoogleCloudSecuritycenterV2ComplianceDetails {
  /** Cloud Control Deployments associated with the finding. For example, organizations/123/locations/global/cloudControlDeployments/deploymentIdentifier */
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  /** Details of Frameworks associated with the finding */
  frameworks?: ReadonlyArray<GoogleCloudSecuritycenterV2Framework>;
  /** CloudControl associated with the finding */
  cloudControl?: GoogleCloudSecuritycenterV2CloudControl;
}

export const GoogleCloudSecuritycenterV2ComplianceDetails: Schema.Schema<GoogleCloudSecuritycenterV2ComplianceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    frameworks: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Framework),
    ),
    cloudControl: Schema.optional(GoogleCloudSecuritycenterV2CloudControl),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ComplianceDetails" });

export interface GoogleCloudSecuritycenterV2LoadBalancer {
  /** The name of the load balancer associated with the finding. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2LoadBalancer: Schema.Schema<GoogleCloudSecuritycenterV2LoadBalancer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LoadBalancer" });

export interface GoogleCloudSecuritycenterV2Pipeline {
  /** Resource name of the pipeline, e.g. projects/{project}/locations/{location}/trainingPipelines/5253428229225578496 */
  name?: string;
  /** The user-defined display name of pipeline, e.g. plants-classification */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Pipeline: Schema.Schema<GoogleCloudSecuritycenterV2Pipeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pipeline" });

export interface GoogleCloudSecuritycenterV2VertexAi {
  /** Datasets associated with the finding. */
  datasets?: ReadonlyArray<GoogleCloudSecuritycenterV2Dataset>;
  /** Pipelines associated with the finding. */
  pipelines?: ReadonlyArray<GoogleCloudSecuritycenterV2Pipeline>;
}

export const GoogleCloudSecuritycenterV2VertexAi: Schema.Schema<GoogleCloudSecuritycenterV2VertexAi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Dataset)),
    pipelines: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Pipeline),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2VertexAi" });

export interface GoogleCloudSecuritycenterV2SecurityPolicy {
  /** The name of the Google Cloud Armor security policy, for example, "my-security-policy". */
  name?: string;
  /** Whether or not the associated rule or policy is in preview mode. */
  preview?: boolean;
  /** The type of Google Cloud Armor security policy for example, 'backend security policy', 'edge security policy', 'network edge security policy', or 'always-on DDoS protection'. */
  type?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPolicy: Schema.Schema<GoogleCloudSecuritycenterV2SecurityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    preview: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPolicy" });

export interface GoogleCloudSecuritycenterV2Requests {
  /** For 'Increasing deny ratio', the ratio is the denied traffic divided by the allowed traffic. For 'Allowed traffic spike', the ratio is the allowed traffic in the short term divided by allowed traffic in the long term. */
  ratio?: number;
  /** Denied RPS (requests per second) over the long term. */
  longTermDenied?: number;
  /** Allowed RPS (requests per second) in the short term. */
  shortTermAllowed?: number;
  /** Allowed RPS (requests per second) over the long term. */
  longTermAllowed?: number;
}

export const GoogleCloudSecuritycenterV2Requests: Schema.Schema<GoogleCloudSecuritycenterV2Requests> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ratio: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Requests" });

export interface GoogleCloudSecuritycenterV2CloudArmor {
  /** Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding. */
  securityPolicy?: GoogleCloudSecuritycenterV2SecurityPolicy;
  /** Distinguish between volumetric & protocol DDoS attack and application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS attacks, or "L_7" for Layer 7 DDoS attacks. */
  threatVector?: string;
  /** Duration of attack from the start until the current moment (updated every 5 minutes). */
  duration?: string;
  /** Information about incoming requests evaluated by [Google Cloud Armor security policies](https://cloud.google.com/armor/docs/security-policy-overview). */
  requests?: GoogleCloudSecuritycenterV2Requests;
  /** Information about potential Layer 7 DDoS attacks identified by [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview). */
  adaptiveProtection?: GoogleCloudSecuritycenterV2AdaptiveProtection;
  /** Information about DDoS attack volume and classification. */
  attack?: GoogleCloudSecuritycenterV2Attack;
}

export const GoogleCloudSecuritycenterV2CloudArmor: Schema.Schema<GoogleCloudSecuritycenterV2CloudArmor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityPolicy: Schema.optional(GoogleCloudSecuritycenterV2SecurityPolicy),
    threatVector: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    requests: Schema.optional(GoogleCloudSecuritycenterV2Requests),
    adaptiveProtection: Schema.optional(
      GoogleCloudSecuritycenterV2AdaptiveProtection,
    ),
    attack: Schema.optional(GoogleCloudSecuritycenterV2Attack),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudArmor" });

export interface GoogleCloudSecuritycenterV2Connection {
  /** Source port. */
  sourcePort?: number;
  /** Destination IP address. Not present for sockets that are listening and not connected. */
  destinationIp?: string;
  /** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
  /** Source IP address. */
  sourceIp?: string;
  /** Destination port. Not present for sockets that are listening and not connected. */
  destinationPort?: number;
}

export const GoogleCloudSecuritycenterV2Connection: Schema.Schema<GoogleCloudSecuritycenterV2Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourcePort: Schema.optional(Schema.Number),
    destinationIp: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    sourceIp: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Connection" });

export interface GoogleCloudSecuritycenterV2StaticMute {
  /** When the static mute was applied. */
  applyTime?: string;
  /** The static mute state. If the value is `MUTED` or `UNMUTED`, then the finding's overall mute state will have the same value. */
  state?:
    | "MUTE_UNSPECIFIED"
    | "MUTED"
    | "UNMUTED"
    | "UNDEFINED"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2StaticMute: Schema.Schema<GoogleCloudSecuritycenterV2StaticMute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applyTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2StaticMute" });

export interface GoogleCloudSecuritycenterV2MuteInfo {
  /** If set, the static mute applied to this finding. Static mutes override dynamic mutes. If unset, there is no static mute. */
  staticMute?: GoogleCloudSecuritycenterV2StaticMute;
  /** The list of dynamic mute rules that currently match the finding. */
  dynamicMuteRecords?: ReadonlyArray<GoogleCloudSecuritycenterV2DynamicMuteRecord>;
}

export const GoogleCloudSecuritycenterV2MuteInfo: Schema.Schema<GoogleCloudSecuritycenterV2MuteInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    staticMute: Schema.optional(GoogleCloudSecuritycenterV2StaticMute),
    dynamicMuteRecords: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DynamicMuteRecord),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteInfo" });

export interface GoogleCloudSecuritycenterV2Application {
  /** The base URI that identifies the network location of the application in which the vulnerability was detected. For example, `http://example.com`. */
  baseUri?: string;
  /** The full URI with payload that could be used to reproduce the vulnerability. For example, `http://example.com?p=aMmYgI6H`. */
  fullUri?: string;
}

export const GoogleCloudSecuritycenterV2Application: Schema.Schema<GoogleCloudSecuritycenterV2Application> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Application" });

export interface GoogleCloudSecuritycenterV2DataFlowEvent {
  /** The email address of the principal that initiated the data flow event. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
  /** Timestamp of data flow event. */
  eventTime?: string;
  /** Unique identifier for data flow event. */
  eventId?: string;
  /** The operation performed by the principal for the data flow event. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Non-compliant location of the principal or the data destination. */
  violatedLocation?: string;
}

export const GoogleCloudSecuritycenterV2DataFlowEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataFlowEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataFlowEvent" });

export interface GoogleCloudSecuritycenterV2Finding {
  /** The results of an attack path simulation relevant to this finding. */
  attackExposure?: GoogleCloudSecuritycenterV2AttackExposure;
  /** Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. */
  externalSystems?: Record<string, GoogleCloudSecuritycenterV2ExternalSystem>;
  /** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
  mitreAttack?: GoogleCloudSecuritycenterV2MitreAttack;
  /** File associated with the finding. */
  files?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  /** Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests. */
  groupMemberships?: ReadonlyArray<GoogleCloudSecuritycenterV2GroupMembership>;
  /** Represents operating system processes associated with the Finding. */
  processes?: ReadonlyArray<GoogleCloudSecuritycenterV2Process>;
  /** Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
  indicator?: GoogleCloudSecuritycenterV2Indicator;
  /** The class of the finding. */
  findingClass?:
    | "FINDING_CLASS_UNSPECIFIED"
    | "THREAT"
    | "VULNERABILITY"
    | "MISCONFIGURATION"
    | "OBSERVATION"
    | "SCC_ERROR"
    | "POSTURE_VIOLATION"
    | "TOXIC_COMBINATION"
    | "SENSITIVE_DATA_RISK"
    | "CHOKEPOINT"
    | "EXTERNAL_EXPOSURE"
    | "SECRET"
    | (string & {});
  /** Log entries that are relevant to the finding. */
  logEntries?: ReadonlyArray<GoogleCloudSecuritycenterV2LogEntry>;
  /** Represents exfiltrations associated with the finding. */
  exfiltration?: GoogleCloudSecuritycenterV2Exfiltration;
  /** Output only. The most recent time this finding was muted or unmuted. */
  muteUpdateTime?: string;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** Notebook associated with the finding. */
  notebook?: GoogleCloudSecuritycenterV2Notebook;
  /** Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests. */
  toxicCombination?: GoogleCloudSecuritycenterV2ToxicCombination;
  /** Agent data access events associated with the finding. */
  agentDataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2AgentDataAccessEvent>;
  /** Cloud DLP data profile that is associated with the finding. */
  cloudDlpDataProfile?: GoogleCloudSecuritycenterV2CloudDlpDataProfile;
  /** Output only. The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Data retention deletion events associated with the finding. */
  dataRetentionDeletionEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent>;
  /** Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  /** Job associated with the finding. */
  job?: GoogleCloudSecuritycenterV2Job;
  /** Steps to address the finding. */
  nextSteps?: string;
  /** Data access events associated with the finding. */
  dataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataAccessEvent>;
  /** Disk associated with the finding. */
  disk?: GoogleCloudSecuritycenterV2Disk;
  /** AffectedResources associated with the finding. */
  affectedResources?: GoogleCloudSecuritycenterV2AffectedResources;
  /** The relative resource name of the source and location the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}` + `folders/{folders_id}/sources/{source_id}` + `projects/{projects_id}/sources/{source_id}` + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}` + `folders/{folders_id}/sources/{source_id}/locations/{location_id}` + `projects/{projects_id}/sources/{source_id}/locations/{location_id}` */
  parent?: string;
  /** Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding. */
  cloudDlpInspection?: GoogleCloudSecuritycenterV2CloudDlpInspection;
  /** Contains information about the org policies associated with the finding. */
  orgPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2OrgPolicy>;
  /** IP rules associated with the finding. */
  ipRules?: GoogleCloudSecuritycenterV2IpRules;
  /** Represents the VPC networks that the resource is attached to. */
  networks?: ReadonlyArray<GoogleCloudSecuritycenterV2Network>;
  /** Secret associated with the finding. */
  secret?: GoogleCloudSecuritycenterV2Secret;
  /** Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests. */
  chokepoint?: GoogleCloudSecuritycenterV2Chokepoint;
  /** Fields related to Backup and DR findings. */
  backupDisasterRecovery?: GoogleCloudSecuritycenterV2BackupDisasterRecovery;
  /** ArtifactGuardPolicies associated with the finding. */
  artifactGuardPolicies?: GoogleCloudSecuritycenterV2ArtifactGuardPolicies;
  /** Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } } */
  contacts?: Record<string, GoogleCloudSecuritycenterV2ContactDetails>;
  /** External exposure associated with the finding. */
  externalExposure?: GoogleCloudSecuritycenterV2ExternalExposure;
  /** Immutable. For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. */
  resourceName?: string;
  /** The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** Output only. The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** Kubernetes resources associated with the finding. */
  kubernetes?: GoogleCloudSecuritycenterV2Kubernetes;
  /** PolicyViolationSummary associated with the finding. */
  policyViolationSummary?: GoogleCloudSecuritycenterV2PolicyViolationSummary;
  /** Access details associated with the finding, such as more information on the caller, which method was accessed, and from where. */
  access?: GoogleCloudSecuritycenterV2Access;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: GoogleCloudSecuritycenterV2SecurityMarks;
  /** Records additional information about the mute operation, for example, the [mute configuration](https://cloud.google.com/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. */
  muteInitiator?: string;
  /** The AI model associated with the finding. */
  aiModel?: GoogleCloudSecuritycenterV2AiModel;
  /** Identifier. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}` + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` */
  name?: string;
  /** Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute. */
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** Database associated with the finding. */
  database?: GoogleCloudSecuritycenterV2Database;
  /** The security posture associated with the finding. */
  securityPosture?: GoogleCloudSecuritycenterV2SecurityPosture;
  /** Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  vulnerability?: GoogleCloudSecuritycenterV2Vulnerability;
  /** DiscoveredWorkload associated with the finding. */
  discoveredWorkload?: GoogleCloudSecuritycenterV2DiscoveredWorkload;
  /** Represents IAM bindings associated with the finding. */
  iamBindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IamBinding>;
  /** Immutable. The additional taxonomy group within findings from a given source. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 */
  moduleName?: string;
  /** Signature of the kernel rootkit. */
  kernelRootkit?: GoogleCloudSecuritycenterV2KernelRootkit;
  /** Details about the compliance implications of the finding. */
  complianceDetails?: GoogleCloudSecuritycenterV2ComplianceDetails;
  /** Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics". */
  parentDisplayName?: string;
  /** Contains compliance information for security standards associated to the finding. */
  compliances?: ReadonlyArray<GoogleCloudSecuritycenterV2Compliance>;
  /** The load balancers associated with the finding. */
  loadBalancers?: ReadonlyArray<GoogleCloudSecuritycenterV2LoadBalancer>;
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** VertexAi associated with the finding. */
  vertexAi?: GoogleCloudSecuritycenterV2VertexAi;
  /** Fields related to Cloud Armor findings. */
  cloudArmor?: GoogleCloudSecuritycenterV2CloudArmor;
  /** Output only. The canonical name of the finding. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` The prefix is the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** Contains information about the IP connection associated with the finding. */
  connections?: ReadonlyArray<GoogleCloudSecuritycenterV2Connection>;
  /** Output only. The name of the Cloud KMS key used to encrypt this finding, if any. */
  cryptoKeyName?: string;
  /** Output only. The mute information regarding this finding. */
  muteInfo?: GoogleCloudSecuritycenterV2MuteInfo;
  /** Contains more details about the finding. */
  description?: string;
  /** Represents an application associated with the finding. */
  application?: GoogleCloudSecuritycenterV2Application;
  /** Data flow events associated with the finding. */
  dataFlowEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataFlowEvent>;
}

export const GoogleCloudSecuritycenterV2Finding: Schema.Schema<GoogleCloudSecuritycenterV2Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attackExposure: Schema.optional(GoogleCloudSecuritycenterV2AttackExposure),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ExternalSystem),
    ),
    mitreAttack: Schema.optional(GoogleCloudSecuritycenterV2MitreAttack),
    files: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    groupMemberships: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2GroupMembership),
    ),
    processes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Process),
    ),
    indicator: Schema.optional(GoogleCloudSecuritycenterV2Indicator),
    findingClass: Schema.optional(Schema.String),
    logEntries: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LogEntry),
    ),
    exfiltration: Schema.optional(GoogleCloudSecuritycenterV2Exfiltration),
    muteUpdateTime: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    notebook: Schema.optional(GoogleCloudSecuritycenterV2Notebook),
    toxicCombination: Schema.optional(
      GoogleCloudSecuritycenterV2ToxicCombination,
    ),
    agentDataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AgentDataAccessEvent),
    ),
    cloudDlpDataProfile: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpDataProfile,
    ),
    state: Schema.optional(Schema.String),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataRetentionDeletionEvent),
    ),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    job: Schema.optional(GoogleCloudSecuritycenterV2Job),
    nextSteps: Schema.optional(Schema.String),
    dataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataAccessEvent),
    ),
    disk: Schema.optional(GoogleCloudSecuritycenterV2Disk),
    affectedResources: Schema.optional(
      GoogleCloudSecuritycenterV2AffectedResources,
    ),
    parent: Schema.optional(Schema.String),
    cloudDlpInspection: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpInspection,
    ),
    orgPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2OrgPolicy),
    ),
    ipRules: Schema.optional(GoogleCloudSecuritycenterV2IpRules),
    networks: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Network)),
    secret: Schema.optional(GoogleCloudSecuritycenterV2Secret),
    chokepoint: Schema.optional(GoogleCloudSecuritycenterV2Chokepoint),
    backupDisasterRecovery: Schema.optional(
      GoogleCloudSecuritycenterV2BackupDisasterRecovery,
    ),
    artifactGuardPolicies: Schema.optional(
      GoogleCloudSecuritycenterV2ArtifactGuardPolicies,
    ),
    contacts: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ContactDetails),
    ),
    externalExposure: Schema.optional(
      GoogleCloudSecuritycenterV2ExternalExposure,
    ),
    resourceName: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    kubernetes: Schema.optional(GoogleCloudSecuritycenterV2Kubernetes),
    policyViolationSummary: Schema.optional(
      GoogleCloudSecuritycenterV2PolicyViolationSummary,
    ),
    access: Schema.optional(GoogleCloudSecuritycenterV2Access),
    securityMarks: Schema.optional(GoogleCloudSecuritycenterV2SecurityMarks),
    muteInitiator: Schema.optional(Schema.String),
    aiModel: Schema.optional(GoogleCloudSecuritycenterV2AiModel),
    name: Schema.optional(Schema.String),
    mute: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    database: Schema.optional(GoogleCloudSecuritycenterV2Database),
    securityPosture: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityPosture,
    ),
    vulnerability: Schema.optional(GoogleCloudSecuritycenterV2Vulnerability),
    discoveredWorkload: Schema.optional(
      GoogleCloudSecuritycenterV2DiscoveredWorkload,
    ),
    iamBindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamBinding),
    ),
    category: Schema.optional(Schema.String),
    moduleName: Schema.optional(Schema.String),
    kernelRootkit: Schema.optional(GoogleCloudSecuritycenterV2KernelRootkit),
    complianceDetails: Schema.optional(
      GoogleCloudSecuritycenterV2ComplianceDetails,
    ),
    parentDisplayName: Schema.optional(Schema.String),
    compliances: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Compliance),
    ),
    loadBalancers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LoadBalancer),
    ),
    externalUri: Schema.optional(Schema.String),
    vertexAi: Schema.optional(GoogleCloudSecuritycenterV2VertexAi),
    cloudArmor: Schema.optional(GoogleCloudSecuritycenterV2CloudArmor),
    canonicalName: Schema.optional(Schema.String),
    connections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Connection),
    ),
    cryptoKeyName: Schema.optional(Schema.String),
    muteInfo: Schema.optional(GoogleCloudSecuritycenterV2MuteInfo),
    description: Schema.optional(Schema.String),
    application: Schema.optional(GoogleCloudSecuritycenterV2Application),
    dataFlowEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataFlowEvent),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Finding" });

export interface GoogleCloudSecuritycenterV2NotificationMessage {
  /** The Cloud resource tied to this notification's Finding. */
  resource?: GoogleCloudSecuritycenterV2Resource;
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: GoogleCloudSecuritycenterV2Finding;
}

export const GoogleCloudSecuritycenterV2NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV2NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GoogleCloudSecuritycenterV2Resource),
    notificationConfigName: Schema.optional(Schema.String),
    finding: Schema.optional(GoogleCloudSecuritycenterV2Finding),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NotificationMessage" });

export interface AffectedResources {
  /** The count of resources affected by the finding. */
  count?: string;
}

export const AffectedResources: Schema.Schema<AffectedResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AffectedResources" });

export interface GoogleCloudSecuritycenterV1BigQueryExport {
  /** Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. */
  createTime?: string;
  /** The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests. */
  name?: string;
  /** The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). */
  dataset?: string;
  /** Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. */
  updateTime?: string;
  /** Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. */
  mostRecentEditor?: string;
  /** Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. */
  principal?: string;
  /** The description of the export (max of 1024 characters). */
  description?: string;
  /** Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
  filter?: string;
}

export const GoogleCloudSecuritycenterV1BigQueryExport: Schema.Schema<GoogleCloudSecuritycenterV1BigQueryExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1BigQueryExport" });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality {
  /** Criticality Type. */
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality",
  });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment {
  /** Environment Type. */
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment",
  });

export interface SetFindingStateRequest {
  /** Optional. The time at which the updated state takes effect. If not set uses the current time. */
  startTime?: string;
  /** Required. The desired State of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
}

export const SetFindingStateRequest: Schema.Schema<SetFindingStateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetFindingStateRequest" });

export interface AgentDataAccessEvent {
  /** The operation performed by the principal to access the data. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** The agent principal that accessed the data. */
  principalSubject?: string;
  /** Unique identifier for data access event. */
  eventId?: string;
  /** Timestamp of data access event. */
  eventTime?: string;
}

export const AgentDataAccessEvent: Schema.Schema<AgentDataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentDataAccessEvent" });

export interface GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription {
  /** The Azure subscription ID of the resource associated with the issue. */
  id?: string;
  /** The Azure subscription display name of the resource associated with the issue. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAzureMetadata {
  /** The Azure subscription of the resource associated with the issue. */
  subscription?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription;
}

export const GoogleCloudSecuritycenterV2IssueResourceAzureMetadata: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAzureMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAzureMetadata",
  });

export interface StaticMute {
  /** The static mute state. If the value is `MUTED` or `UNMUTED`, then the finding's overall mute state will have the same value. */
  state?:
    | "MUTE_UNSPECIFIED"
    | "MUTED"
    | "UNMUTED"
    | "UNDEFINED"
    | (string & {});
  /** When the static mute was applied. */
  applyTime?: string;
}

export const StaticMute: Schema.Schema<StaticMute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    applyTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "StaticMute" });

export interface DynamicMuteRecord {
  /** The relative resource name of the mute rule, represented by a mute config, that created this record, for example `organizations/123/muteConfigs/mymuteconfig` or `organizations/123/locations/global/muteConfigs/mymuteconfig`. */
  muteConfig?: string;
  /** When the dynamic mute rule first matched the finding. */
  matchTime?: string;
}

export const DynamicMuteRecord: Schema.Schema<DynamicMuteRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteConfig: Schema.optional(Schema.String),
    matchTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicMuteRecord" });

export interface MuteInfo {
  /** If set, the static mute applied to this finding. Static mutes override dynamic mutes. If unset, there is no static mute. */
  staticMute?: StaticMute;
  /** The list of dynamic mute rules that currently match the finding. */
  dynamicMuteRecords?: ReadonlyArray<DynamicMuteRecord>;
}

export const MuteInfo: Schema.Schema<MuteInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    staticMute: Schema.optional(StaticMute),
    dynamicMuteRecords: Schema.optional(Schema.Array(DynamicMuteRecord)),
  }).annotate({ identifier: "MuteInfo" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface GroupFindingsRequest {
  /** Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `source_properties.size = 100` is a valid filter string. */
  filter?: string;
  /** Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** The value returned by the last `GroupFindingsResponse`; indicates that this is a continuation of a prior `GroupFindings` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Expression that defines what assets fields to use for grouping (including `state`). The string value should follow SQL syntax: comma separated list of fields. For example: "parent,resource_name". The following fields are supported: * resource_name * category * state * parent */
  groupBy?: string;
}

export const GroupFindingsRequest: Schema.Schema<GroupFindingsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    groupBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupFindingsRequest" });

export interface Geolocation {
  /** A CLDR. */
  regionCode?: string;
}

export const Geolocation: Schema.Schema<Geolocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Geolocation" });

export interface ServiceAccountDelegationInfo {
  /** A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
  principalSubject?: string;
  /** The email address of a Google account. */
  principalEmail?: string;
}

export const ServiceAccountDelegationInfo: Schema.Schema<ServiceAccountDelegationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccountDelegationInfo" });

export interface Access {
  /** The method that the service account called, e.g. "SetIamPolicy". */
  methodName?: string;
  /** Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. */
  userAgentFamily?: string;
  /** Caller's IP address, such as "1.1.1.1". */
  callerIp?: string;
  /** A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`. */
  principalSubject?: string;
  /** A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. */
  userName?: string;
  /** Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
  principalEmail?: string;
  /** The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". */
  serviceAccountKeyName?: string;
  /** The caller IP's geolocation, which identifies where the call came from. */
  callerIpGeo?: Geolocation;
  /** This is the API service that the service account made a call to, e.g. "iam.googleapis.com" */
  serviceName?: string;
  /** The caller's user agent string associated with the finding. */
  userAgent?: string;
  /** The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
  serviceAccountDelegationInfo?: ReadonlyArray<ServiceAccountDelegationInfo>;
}

export const Access: Schema.Schema<Access> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    methodName: Schema.optional(Schema.String),
    userAgentFamily: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
    callerIpGeo: Schema.optional(Geolocation),
    serviceName: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(ServiceAccountDelegationInfo),
    ),
  }).annotate({ identifier: "Access" });

export interface Role {
  /** Role namespace. */
  ns?: string;
  /** Role name. */
  name?: string;
  /** Role type. */
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
}

export const Role: Schema.Schema<Role> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Role" });

export interface GoogleCloudSecuritycenterV2BigQueryExport {
  /** Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. */
  createTime?: string;
  /** Identifier. The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. The following list shows some examples: + `organizations/{organization_id}/locations/{location_id}/bigQueryExports/{export_id}` + `folders/{folder_id}/locations/{location_id}/bigQueryExports/{export_id}` + `projects/{project_id}/locations/{location_id}/bigQueryExports/{export_id}` This field is provided in responses, and is ignored when provided in create requests. */
  name?: string;
  /** The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). */
  dataset?: string;
  /** Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. */
  updateTime?: string;
  /** Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. */
  principal?: string;
  /** Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. */
  mostRecentEditor?: string;
  /** The description of the export (max of 1024 characters). */
  description?: string;
  /** Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
  filter?: string;
  /** Output only. The resource name of the Cloud KMS `CryptoKey` used to protect this configuration's data, if configured during Security Command Center activation. */
  cryptoKeyName?: string;
}

export const GoogleCloudSecuritycenterV2BigQueryExport: Schema.Schema<GoogleCloudSecuritycenterV2BigQueryExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2BigQueryExport" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {
  /** The state of an asset discovery run. */
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  /** The duration between asset discovery run start and end */
  duration?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse",
  });

export interface GoogleCloudSecuritycenterV1ResourceSelector {
  /** The resource types to run the detector on. */
  resourceTypes?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV1ResourceSelector: Schema.Schema<GoogleCloudSecuritycenterV1ResourceSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceSelector" });

export interface GoogleCloudSecuritycenterV1CustomConfig {
  /** The CEL expression to evaluate to produce findings. When the expression evaluates to true against a resource, a finding is generated. */
  predicate?: Expr;
  /** The resource types that the custom module operates on. Each custom module can specify up to 5 resource types. */
  resourceSelector?: GoogleCloudSecuritycenterV1ResourceSelector;
  /** An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON. */
  recommendation?: string;
  /** Custom output properties. */
  customOutput?: GoogleCloudSecuritycenterV1CustomOutputSpec;
  /** Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks. */
  description?: string;
  /** The severity to assign to findings generated by the module. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1CustomConfig: Schema.Schema<GoogleCloudSecuritycenterV1CustomConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    predicate: Schema.optional(Expr),
    resourceSelector: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceSelector,
    ),
    recommendation: Schema.optional(Schema.String),
    customOutput: Schema.optional(GoogleCloudSecuritycenterV1CustomOutputSpec),
    description: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomConfig" });

export interface GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
  /** Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. */
  name?: string;
  /** The user specified custom configuration for the module. */
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  /** The enablement state of the custom module. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "INHERITED"
    | (string & {});
  /** Output only. The time at which the custom module was last updated. */
  updateTime?: string;
  /** The cloud provider of the custom module. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Output only. The editor that last updated the custom module. */
  lastEditor?: string;
  /** The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
  displayName?: string;
  /** Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited. */
  ancestorModule?: string;
}

export const GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule: Schema.Schema<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    enablementState: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    lastEditor: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    ancestorModule: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule",
  });

export interface Detection {
  /** The percentage of memory page hashes in the signature that were matched. */
  percentPagesMatched?: number;
  /** The name of the binary associated with the memory hash signature detection. */
  binary?: string;
}

export const Detection: Schema.Schema<Detection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    percentPagesMatched: Schema.optional(Schema.Number),
    binary: Schema.optional(Schema.String),
  }).annotate({ identifier: "Detection" });

export interface Label {
  /** Name of the label. */
  name?: string;
  /** Value that corresponds to the label's name. */
  value?: string;
}

export const Label: Schema.Schema<Label> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Label" });

export interface Container {
  /** The time that the container was created. */
  createTime?: string;
  /** Name of the container. */
  name?: string;
  /** Container labels, as provided by the container runtime. */
  labels?: ReadonlyArray<Label>;
  /** Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. */
  uri?: string;
  /** Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. */
  imageId?: string;
}

export const Container: Schema.Schema<Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Label)),
    uri: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Container" });

export interface CloudDlpInspection {
  /** Whether Cloud DLP scanned the complete resource or a sampled subset. */
  fullScan?: boolean;
  /** Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`. */
  inspectJob?: string;
  /** The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`. */
  infoType?: string;
  /** The number of times Cloud DLP found this infoType within this job and resource. */
  infoTypeCount?: string;
}

export const CloudDlpInspection: Schema.Schema<CloudDlpInspection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullScan: Schema.optional(Schema.Boolean),
    inspectJob: Schema.optional(Schema.String),
    infoType: Schema.optional(Schema.String),
    infoTypeCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudDlpInspection" });

export interface Control {
  /** Name of the Control */
  controlName?: string;
  /** Display name of the control. For example, AU-02. */
  displayName?: string;
}

export const Control: Schema.Schema<Control> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Control" });

export interface Database {
  /** The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
  version?: string;
  /** The human-readable name of the database that the user connected to. */
  displayName?: string;
  /** The SQL statement that is associated with the database access. */
  query?: string;
  /** The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change. */
  grantees?: ReadonlyArray<string>;
  /** Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. */
  name?: string;
  /** The username used to connect to the database. The username might not be an IAM principal and does not have a set format. */
  userName?: string;
}

export const Database: Schema.Schema<Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Database" });

export interface PolicyViolationSummary {
  /** Count of child resources in violation of the policy. */
  policyViolationsCount?: string;
  /** Total number of child resources that conform to the policy. */
  conformantResourcesCount?: string;
  /** Number of child resources for which errors during evaluation occurred. The evaluation result for these child resources is effectively "unknown". */
  evaluationErrorsCount?: string;
  /** Total count of child resources which were not in scope for evaluation. */
  outOfScopeResourcesCount?: string;
}

export const PolicyViolationSummary: Schema.Schema<PolicyViolationSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyViolationsCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
    evaluationErrorsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyViolationSummary" });

export interface VulnerabilityCountBySeverity {
  /** Key is the Severity enum. */
  severityToFindingCount?: Record<string, string>;
}

export const VulnerabilityCountBySeverity: Schema.Schema<VulnerabilityCountBySeverity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severityToFindingCount: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "VulnerabilityCountBySeverity" });

export interface VulnerabilitySnapshot {
  /** The cloud provider for the vulnerability snapshot. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The vulnerability count by severity. */
  findingCount?: VulnerabilityCountBySeverity;
  /** Identifier. The vulnerability snapshot name. Format: //locations//vulnerabilitySnapshots/ */
  name?: string;
  /** The time that the snapshot was taken. */
  snapshotTime?: string;
}

export const VulnerabilitySnapshot: Schema.Schema<VulnerabilitySnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudProvider: Schema.optional(Schema.String),
    findingCount: Schema.optional(VulnerabilityCountBySeverity),
    name: Schema.optional(Schema.String),
    snapshotTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilitySnapshot" });

export interface AdcApplicationTemplateRevision {
  /** The resource name of an ADC Application Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const AdcApplicationTemplateRevision: Schema.Schema<AdcApplicationTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcApplicationTemplateRevision" });

export interface AuditLogConfig {
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
}

export const AuditLogConfig: Schema.Schema<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuditLogConfig" });

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    condition: Schema.optional(Expr),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Schema<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
    bindings: Schema.optional(Schema.Array(Binding)),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface SecurityPolicy {
  /** Whether or not the associated rule or policy is in preview mode. */
  preview?: boolean;
  /** The name of the Google Cloud Armor security policy, for example, "my-security-policy". */
  name?: string;
  /** The type of Google Cloud Armor security policy for example, 'backend security policy', 'edge security policy', 'network edge security policy', or 'always-on DDoS protection'. */
  type?: string;
}

export const SecurityPolicy: Schema.Schema<SecurityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preview: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPolicy" });

export interface GoogleCloudSecuritycenterV1p1beta1Folder {
  /** The user defined display name for this folder. */
  resourceFolderDisplayName?: string;
  /** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceFolder?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Folder: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceFolderDisplayName: Schema.optional(Schema.String),
    resourceFolder: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Folder" });

export interface GoogleCloudSecuritycenterV1p1beta1Resource {
  /** The full resource name of resource's parent. */
  parent?: string;
  /** The project id that the resource belongs to. */
  projectDisplayName?: string;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV1p1beta1Folder>;
}

export const GoogleCloudSecuritycenterV1p1beta1Resource: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    folders: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1p1beta1Folder),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Resource" });

export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name?: string;
  /** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
  canonicalName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1SecurityMarks: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1SecurityMarks",
  });

export interface GoogleCloudSecuritycenterV1p1beta1Finding {
  /** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
  parent?: string;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
  resourceName?: string;
  /** The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}" */
  name?: string;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Finding: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    canonicalName: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1p1beta1SecurityMarks,
    ),
    externalUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Finding" });

export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
  /** The Cloud resource tied to the notification. */
  resource?: GoogleCloudSecuritycenterV1p1beta1Resource;
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: GoogleCloudSecuritycenterV1p1beta1Finding;
}

export const GoogleCloudSecuritycenterV1p1beta1NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationConfigName: Schema.optional(Schema.String),
    resource: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Resource),
    finding: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Finding),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1NotificationMessage",
  });

export interface AwsOrganization {
  /** The unique identifier (ID) for the organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits. */
  id?: string;
}

export const AwsOrganization: Schema.Schema<AwsOrganization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganization" });

export interface MemoryHashSignature {
  /** The list of memory hash detections contributing to the binary family match. */
  detections?: ReadonlyArray<Detection>;
  /** The binary family. */
  binaryFamily?: string;
}

export const MemoryHashSignature: Schema.Schema<MemoryHashSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detections: Schema.optional(Schema.Array(Detection)),
    binaryFamily: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemoryHashSignature" });

export interface YaraRuleSignature {
  /** The name of the YARA rule. */
  yaraRule?: string;
}

export const YaraRuleSignature: Schema.Schema<YaraRuleSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "YaraRuleSignature" });

export interface ProcessSignature {
  /** Signature indicating that a binary family was matched. */
  memoryHashSignature?: MemoryHashSignature;
  /** Signature indicating that a YARA rule was matched. */
  yaraRuleSignature?: YaraRuleSignature;
  /** Describes the type of resource associated with the signature. */
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
}

export const ProcessSignature: Schema.Schema<ProcessSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memoryHashSignature: Schema.optional(MemoryHashSignature),
    yaraRuleSignature: Schema.optional(YaraRuleSignature),
    signatureType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProcessSignature" });

export interface Indicator {
  /** List of domains associated to the Finding. */
  domains?: ReadonlyArray<string>;
  /** The list of IP addresses that are associated with the finding. */
  ipAddresses?: ReadonlyArray<string>;
  /** The list of matched signatures indicating that the given process is present in the environment. */
  signatures?: ReadonlyArray<ProcessSignature>;
  /** The list of URIs associated to the Findings. */
  uris?: ReadonlyArray<string>;
}

export const Indicator: Schema.Schema<Indicator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domains: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    signatures: Schema.optional(Schema.Array(ProcessSignature)),
    uris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Indicator" });

export interface AwsOrganizationalUnit {
  /** The friendly name of the OU. */
  name?: string;
  /** The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. For example, "ou-ab12-cd34ef56". */
  id?: string;
}

export const AwsOrganizationalUnit: Schema.Schema<AwsOrganizationalUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganizationalUnit" });

export interface AwsAccount {
  /** The unique identifier (ID) of the account, containing exactly 12 digits. */
  id?: string;
  /** The friendly name of this account. */
  name?: string;
}

export const AwsAccount: Schema.Schema<AwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsAccount" });

export interface AwsMetadata {
  /** The AWS organization associated with the resource. */
  organization?: AwsOrganization;
  /** A list of AWS organizational units associated with the resource, ordered from lowest level (closest to the account) to highest level. */
  organizationalUnits?: ReadonlyArray<AwsOrganizationalUnit>;
  /** The AWS account associated with the resource. */
  account?: AwsAccount;
}

export const AwsMetadata: Schema.Schema<AwsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.optional(AwsOrganization),
    organizationalUnits: Schema.optional(Schema.Array(AwsOrganizationalUnit)),
    account: Schema.optional(AwsAccount),
  }).annotate({ identifier: "AwsMetadata" });

export interface AdaptiveProtection {
  /** A score of 0 means that there is low confidence that the detected event is an actual attack. A score of 1 means that there is high confidence that the detected event is an attack. See the [Adaptive Protection documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning) for further explanation. */
  confidence?: number;
}

export const AdaptiveProtection: Schema.Schema<AdaptiveProtection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AdaptiveProtection" });

export interface Attack {
  /** Total PPS (packets per second) volume of attack. Deprecated - refer to volume_pps_long instead. */
  volumePps?: number;
  /** Total BPS (bytes per second) volume of attack. */
  volumeBpsLong?: string;
  /** Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'. */
  classification?: string;
  /** Total BPS (bytes per second) volume of attack. Deprecated - refer to volume_bps_long instead. */
  volumeBps?: number;
  /** Total PPS (packets per second) volume of attack. */
  volumePpsLong?: string;
}

export const Attack: Schema.Schema<Attack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumePps: Schema.optional(Schema.Number),
    volumeBpsLong: Schema.optional(Schema.String),
    classification: Schema.optional(Schema.String),
    volumeBps: Schema.optional(Schema.Number),
    volumePpsLong: Schema.optional(Schema.String),
  }).annotate({ identifier: "Attack" });

export interface CloudArmor {
  /** Information about incoming requests evaluated by [Google Cloud Armor security policies](https://cloud.google.com/armor/docs/security-policy-overview). */
  requests?: Requests;
  /** Information about potential Layer 7 DDoS attacks identified by [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview). */
  adaptiveProtection?: AdaptiveProtection;
  /** Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding. */
  securityPolicy?: SecurityPolicy;
  /** Distinguish between volumetric & protocol DDoS attack and application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS attacks, or "L_7" for Layer 7 DDoS attacks. */
  threatVector?: string;
  /** Duration of attack from the start until the current moment (updated every 5 minutes). */
  duration?: string;
  /** Information about DDoS attack volume and classification. */
  attack?: Attack;
}

export const CloudArmor: Schema.Schema<CloudArmor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Requests),
    adaptiveProtection: Schema.optional(AdaptiveProtection),
    securityPolicy: Schema.optional(SecurityPolicy),
    threatVector: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    attack: Schema.optional(Attack),
  }).annotate({ identifier: "CloudArmor" });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo {
  /** Email address of the contacts. */
  email?: string;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo",
  });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributes {
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality;
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality,
    ),
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
    ),
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
    ),
    environment: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment,
    ),
    developerOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1ResourceApplicationAttributes",
  });

export interface GoogleCloudSecuritycenterV1ResourceApplication {
  /** Consumer provided attributes for the application */
  attributes?: GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
  /** The resource name of an Application. Format: `projects/{host-project-id}/locations/{location}/applications/{application-id}` */
  name?: string;
}

export const GoogleCloudSecuritycenterV1ResourceApplication: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceApplication" });

export interface RunAssetDiscoveryRequest {}

export const RunAssetDiscoveryRequest: Schema.Schema<RunAssetDiscoveryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RunAssetDiscoveryRequest",
  });

export interface GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV1BulkMuteFindingsResponse: Schema.Schema<GoogleCloudSecuritycenterV1BulkMuteFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV1BulkMuteFindingsResponse",
  });

export interface ExportFindingsResponse {}

export const ExportFindingsResponse: Schema.Schema<ExportFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExportFindingsResponse",
  });

export interface Denied {
  /** Optional. Optional list of denied IP rules. */
  ipRules?: ReadonlyArray<IpRule>;
}

export const Denied: Schema.Schema<Denied> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(IpRule)),
  }).annotate({ identifier: "Denied" });

export interface IpRules {
  /** Tuple with denied rules. */
  denied?: Denied;
  /** Name of the network protocol service, such as FTP, that is exposed by the open port. Follows the naming convention available at: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml. */
  exposedServices?: ReadonlyArray<string>;
  /** Tuple with allowed rules. */
  allowed?: Allowed;
  /** If destination IP ranges are specified, the firewall rule applies only to traffic that has a destination IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  destinationIpRanges?: ReadonlyArray<string>;
  /** The direction that the rule is applicable to, one of ingress or egress. */
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  /** If source IP ranges are specified, the firewall rule applies only to traffic that has a source IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  sourceIpRanges?: ReadonlyArray<string>;
}

export const IpRules: Schema.Schema<IpRules> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    denied: Schema.optional(Denied),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
    allowed: Schema.optional(Allowed),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    direction: Schema.optional(Schema.String),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IpRules" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface Framework {
  /** The controls associated with the framework. */
  controls?: ReadonlyArray<Control>;
  /** Display name of the framework. For a standard framework, this will look like e.g. PCI DSS 3.2.1, whereas for a custom framework it can be a user defined string like MyFramework */
  displayName?: string;
  /** Name of the framework associated with the finding */
  name?: string;
  /** Category of the framework associated with the finding. E.g. Security Benchmark, or Assured Workloads */
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
  /** Type of the framework associated with the finding, to specify whether the framework is built-in (pre-defined and immutable) or a custom framework defined by the customer (equivalent to security posture) */
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
}

export const Framework: Schema.Schema<Framework> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controls: Schema.optional(Schema.Array(Control)),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    category: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Framework" });

export interface Disk {
  /** The name of the disk, for example, "https://www.googleapis.com/compute/v1/projects/{project-id}/zones/{zone-id}/disks/{disk-id}". */
  name?: string;
}

export const Disk: Schema.Schema<Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

export interface GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping {
  /** Resource value mapping for high-sensitivity Sensitive Data Protection findings */
  highSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Resource value mapping for medium-sensitivity Sensitive Data Protection findings */
  mediumSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping: Schema.Schema<GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    highSensitivityMapping: Schema.optional(Schema.String),
    mediumSensitivityMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping",
  });

export interface Package {
  /** The name of the package where the vulnerability was detected. */
  packageName?: string;
  /** Type of package, for example, os, maven, or go. */
  packageType?: string;
  /** The CPE URI where the vulnerability was detected. */
  cpeUri?: string;
  /** The version of the package. */
  packageVersion?: string;
}

export const Package: Schema.Schema<Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface SecretEnvironmentVariable {
  /** Environment variable name as a JSON encoded string. Note that value is not included since the value contains the secret data, which is sensitive core content. */
  key?: string;
}

export const SecretEnvironmentVariable: Schema.Schema<SecretEnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretEnvironmentVariable" });

export interface ContactDetails {
  /** A list of contacts */
  contacts?: ReadonlyArray<Contact>;
}

export const ContactDetails: Schema.Schema<ContactDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(Contact)),
  }).annotate({ identifier: "ContactDetails" });

export interface Cve {
  /** Whether upstream fix is available for the CVE. */
  upstreamFixAvailable?: boolean;
  /** The unique identifier for the vulnerability. e.g. CVE-2021-34527 */
  id?: string;
  /** Date the first publicly available exploit or PoC was released. */
  exploitReleaseDate?: string;
  /** Date of the earliest known exploitation. */
  firstExploitationDate?: string;
  /** Whether or not the vulnerability has been observed in the wild. */
  observedInTheWild?: boolean;
  /** Whether or not the vulnerability was zero day when the finding was published. */
  zeroDay?: boolean;
  /** The potential impact of the vulnerability if it was to be exploited. */
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527 */
  references?: ReadonlyArray<Reference>;
  /** The exploitation activity of the vulnerability in the wild. */
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  /** Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document */
  cvssv3?: Cvssv3;
}

export const Cve: Schema.Schema<Cve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    exploitReleaseDate: Schema.optional(Schema.String),
    firstExploitationDate: Schema.optional(Schema.String),
    observedInTheWild: Schema.optional(Schema.Boolean),
    zeroDay: Schema.optional(Schema.Boolean),
    impact: Schema.optional(Schema.String),
    references: Schema.optional(Schema.Array(Reference)),
    exploitationActivity: Schema.optional(Schema.String),
    cvssv3: Schema.optional(Cvssv3),
  }).annotate({ identifier: "Cve" });

export interface Vulnerability {
  /** The fixed package is relevant to the finding. */
  fixedPackage?: Package;
  /** Represents one or more Common Weakness Enumeration (CWE) information on this vulnerability. */
  cwes?: ReadonlyArray<Cwe>;
  /** Represents whether the vulnerability is reachable (detected via static analysis) */
  reachable?: boolean;
  /** CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  cve?: Cve;
  /** The security bulletin is relevant to this finding. */
  securityBulletin?: SecurityBulletin;
  /** The offending package is relevant to the finding. */
  offendingPackage?: Package;
  /** Provider provided risk_score based on multiple factors. The higher the risk score, the more risky the vulnerability is. */
  providerRiskScore?: string;
}

export const Vulnerability: Schema.Schema<Vulnerability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixedPackage: Schema.optional(Package),
    cwes: Schema.optional(Schema.Array(Cwe)),
    reachable: Schema.optional(Schema.Boolean),
    cve: Schema.optional(Cve),
    securityBulletin: Schema.optional(SecurityBulletin),
    offendingPackage: Schema.optional(Package),
    providerRiskScore: Schema.optional(Schema.String),
  }).annotate({ identifier: "Vulnerability" });

export interface Network {
  /** The name of the VPC network resource, for example, `//compute.googleapis.com/projects/my-project/global/networks/my-network`. */
  name?: string;
}

export const Network: Schema.Schema<Network> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Network" });

export interface Pod {
  /** Pod labels. For Kubernetes containers, these are applied to the container. */
  labels?: ReadonlyArray<Label>;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<Container>;
  /** Kubernetes Pod namespace. */
  ns?: string;
  /** Kubernetes Pod name. */
  name?: string;
}

export const Pod: Schema.Schema<Pod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Array(Label)),
    containers: Schema.optional(Schema.Array(Container)),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pod" });

export interface KernelRootkit {
  /** True if unexpected modifications of kernel code memory are present. */
  unexpectedCodeModification?: boolean;
  /** Rootkit name, when available. */
  name?: string;
  /** True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedKprobeHandler?: boolean;
  /** True if unexpected modifications of kernel read-only data memory are present. */
  unexpectedReadOnlyDataModification?: boolean;
  /** True if kernel code pages that are not in the expected kernel or module code regions are present. */
  unexpectedKernelCodePages?: boolean;
  /** True if interrupt handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedInterruptHandler?: boolean;
  /** True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedFtraceHandler?: boolean;
  /** True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. */
  unexpectedProcessesInRunqueue?: boolean;
  /** True if system call handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedSystemCallHandler?: boolean;
}

export const KernelRootkit: Schema.Schema<KernelRootkit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KernelRootkit" });

export interface ResourcePathNode {
  /** The ID of the resource this node represents. */
  id?: string;
  /** The type of resource this node represents. */
  nodeType?:
    | "RESOURCE_PATH_NODE_TYPE_UNSPECIFIED"
    | "GCP_ORGANIZATION"
    | "GCP_FOLDER"
    | "GCP_PROJECT"
    | "AWS_ORGANIZATION"
    | "AWS_ORGANIZATIONAL_UNIT"
    | "AWS_ACCOUNT"
    | "AZURE_MANAGEMENT_GROUP"
    | "AZURE_SUBSCRIPTION"
    | "AZURE_RESOURCE_GROUP"
    | (string & {});
  /** The display name of the resource this node represents. */
  displayName?: string;
}

export const ResourcePathNode: Schema.Schema<ResourcePathNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    nodeType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourcePathNode" });

export interface ResourcePath {
  /** The list of nodes that make the up resource path, ordered from lowest level to highest level. */
  nodes?: ReadonlyArray<ResourcePathNode>;
}

export const ResourcePath: Schema.Schema<ResourcePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(ResourcePathNode)),
  }).annotate({ identifier: "ResourcePath" });

export interface SecurityPosture {
  /** The details about a change in an updated policy that violates the deployed posture. */
  policyDriftDetails?: ReadonlyArray<PolicyDriftDetails>;
  /** The version of the posture, for example, `c7cfa2a8`. */
  revisionId?: string;
  /** The name of the posture deployment, for example, `organizations/{org_id}/posturedeployments/{posture_deployment_id}`. */
  postureDeployment?: string;
  /** The project, folder, or organization on which the posture is deployed, for example, `projects/{project_number}`. */
  postureDeploymentResource?: string;
  /** The name of the updated policy, for example, `projects/{project_id}/policies/{constraint_name}`. */
  changedPolicy?: string;
  /** Name of the posture, for example, `CIS-Posture`. */
  name?: string;
  /** The name of the updated policyset, for example, `cis-policyset`. */
  policySet?: string;
  /** The ID of the updated policy, for example, `compute-policy-1`. */
  policy?: string;
}

export const SecurityPosture: Schema.Schema<SecurityPosture> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyDriftDetails: Schema.optional(Schema.Array(PolicyDriftDetails)),
    revisionId: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    postureDeploymentResource: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPosture" });

export interface AzureTenant {
  /** The ID of the Microsoft Entra tenant, for example, "a11aaa11-aa11-1aa1-11aa-1aaa11a". */
  id?: string;
  /** The display name of the Azure tenant. */
  displayName?: string;
}

export const AzureTenant: Schema.Schema<AzureTenant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureTenant" });

export interface GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Schema<GetPolicyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface ExfilResource {
  /** The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name). */
  name?: string;
  /** Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket. */
  components?: ReadonlyArray<string>;
}

export const ExfilResource: Schema.Schema<ExfilResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ExfilResource" });

export interface Exfiltration {
  /** If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source. */
  sources?: ReadonlyArray<ExfilResource>;
  /** If there are multiple targets, each target would get a complete copy of the "joined" source data. */
  targets?: ReadonlyArray<ExfilResource>;
  /** Total exfiltrated bytes processed for the entire job. */
  totalExfiltratedBytes?: string;
}

export const Exfiltration: Schema.Schema<Exfiltration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(ExfilResource)),
    targets: Schema.optional(Schema.Array(ExfilResource)),
    totalExfiltratedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "Exfiltration" });

export interface Node {
  /** [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node. */
  name?: string;
}

export const Node: Schema.Schema<Node> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Node" });

export interface Securitycenter_Object {
  /** Kubernetes object kind, such as "Namespace". */
  kind?: string;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<Container>;
  /** Kubernetes object group, such as "policy.k8s.io/v1". */
  group?: string;
  /** Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. */
  ns?: string;
  /** Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. */
  name?: string;
}

export const Securitycenter_Object: Schema.Schema<Securitycenter_Object> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(Container)),
    group: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Securitycenter_Object" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface AiModel {
  /** The name of the model library, for example, “transformers”. */
  library?: string;
  /** The publisher of the model, for example, “google” or “nvidia”. */
  publisher?: string;
  /** The name of the AI model, for example, "gemini:1.0.0". */
  name?: string;
  /** The region in which the model is used, for example, “us-central1”. */
  location?: string;
  /** The user defined display name of model. Ex. baseline-classification-model */
  displayName?: string;
  /** The platform on which the model is deployed. */
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  /** The domain of the model, for example, “image-classification”. */
  domain?: string;
  /** The purpose of the model, for example, "Inteference" or "Training". */
  usageCategory?: string;
}

export const AiModel: Schema.Schema<AiModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    library: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
  }).annotate({ identifier: "AiModel" });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment {
  /** Environment Type. */
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes {
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality;
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality,
    ),
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
    environment: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment,
    ),
    developerOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes",
  });

export interface GoogleCloudSecuritycenterV1ResourceValueConfig {
  /** Description of the resource value configuration. */
  description?: string;
  /** A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset". */
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping;
  /** Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope will be checked with `AND` of other resources. */
  scope?: string;
  /** Name for the resource value configuration */
  name?: string;
  /** Required. Resource value level this expression represents */
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Required. Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing */
  tagValues?: ReadonlyArray<string>;
  /** Output only. Timestamp this resource value configuration was last updated. */
  updateTime?: string;
  /** Cloud provider this configuration applies to */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** List of resource labels to search for, evaluated with `AND`. For example, `"resource_labels_selector": {"key": "value", "env": "prod"}` will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels */
  resourceLabelsSelector?: Record<string, string>;
  /** Output only. Timestamp this resource value configuration was created. */
  createTime?: string;
  /** Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources. */
  resourceType?: string;
}

export const GoogleCloudSecuritycenterV1ResourceValueConfig: Schema.Schema<GoogleCloudSecuritycenterV1ResourceValueConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping,
    ),
    scope: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resourceValue: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    createTime: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceValueConfig" });

export interface GoogleCloudSecuritycenterV1Binding {
  /** Namespace for the binding. */
  ns?: string;
  /** Name for the binding. */
  name?: string;
  /** The Role or ClusterRole referenced by the binding. */
  role?: Role;
  /** Represents one or more subjects that are bound to the role. Not always available for PATCH requests. */
  subjects?: ReadonlyArray<Subject>;
}

export const GoogleCloudSecuritycenterV1Binding: Schema.Schema<GoogleCloudSecuritycenterV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    role: Schema.optional(Role),
    subjects: Schema.optional(Schema.Array(Subject)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Binding" });

export interface NodePool {
  /** Kubernetes node pool name. */
  name?: string;
  /** Nodes associated with the finding. */
  nodes?: ReadonlyArray<Node>;
}

export const NodePool: Schema.Schema<NodePool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(Node)),
  }).annotate({ identifier: "NodePool" });

export interface Kubernetes {
  /** Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. */
  nodes?: ReadonlyArray<Node>;
  /** Kubernetes objects related to the finding. */
  objects?: ReadonlyArray<Securitycenter_Object>;
  /** Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  roles?: ReadonlyArray<Role>;
  /** Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. */
  accessReviews?: ReadonlyArray<AccessReview>;
  /** Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV1Binding>;
  /** Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. */
  pods?: ReadonlyArray<Pod>;
  /** GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. */
  nodePools?: ReadonlyArray<NodePool>;
}

export const Kubernetes: Schema.Schema<Kubernetes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(Node)),
    objects: Schema.optional(Schema.Array(Securitycenter_Object)),
    roles: Schema.optional(Schema.Array(Role)),
    accessReviews: Schema.optional(Schema.Array(AccessReview)),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV1Binding)),
    pods: Schema.optional(Schema.Array(Pod)),
    nodePools: Schema.optional(Schema.Array(NodePool)),
  }).annotate({ identifier: "Kubernetes" });

export interface CloudLoggingEntry {
  /** The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity`. Note that this field is not URL-encoded, unlike the `LOG_ID` field in `LogEntry`. */
  logId?: string;
  /** The organization, folder, or project of the monitored resource that produced this log entry. */
  resourceContainer?: string;
  /** The time the event described by the log entry occurred. */
  timestamp?: string;
  /** A unique identifier for the log entry. */
  insertId?: string;
}

export const CloudLoggingEntry: Schema.Schema<CloudLoggingEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logId: Schema.optional(Schema.String),
    resourceContainer: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudLoggingEntry" });

export interface LogEntry {
  /** An individual entry in a log stored in Cloud Logging. */
  cloudLoggingEntry?: CloudLoggingEntry;
}

export const LogEntry: Schema.Schema<LogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudLoggingEntry: Schema.optional(CloudLoggingEntry),
  }).annotate({ identifier: "LogEntry" });

export interface OrgPolicy {
  /** The resource name of the org policy. Example: "organizations/{organization_id}/policies/{constraint_name}" */
  name?: string;
}

export const OrgPolicy: Schema.Schema<OrgPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrgPolicy" });

export interface ArtifactGuardPolicy {
  /** The ID of the failing policy, for example, "organizations/3392779/locations/global/policies/prod-policy". */
  policyId?: string;
  /** The reason for the policy failure, for example, "severity=HIGH AND max_vuln_count=2". */
  failureReason?: string;
  /** The type of the policy evaluation. */
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
}

export const ArtifactGuardPolicy: Schema.Schema<ArtifactGuardPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyId: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactGuardPolicy" });

export interface ArtifactGuardPolicies {
  /** The ID of the resource that has policies configured for it. */
  resourceId?: string;
  /** A list of failing policies. */
  failingPolicies?: ReadonlyArray<ArtifactGuardPolicy>;
}

export const ArtifactGuardPolicies: Schema.Schema<ArtifactGuardPolicies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    failingPolicies: Schema.optional(Schema.Array(ArtifactGuardPolicy)),
  }).annotate({ identifier: "ArtifactGuardPolicies" });

export interface GoogleCloudSecuritycenterV1MuteConfig {
  /** Optional. The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings. */
  expiryTime?: string;
  /** A description of the mute config. */
  description?: string;
  /** Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:` */
  filter?: string;
  /** Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. */
  mostRecentEditor?: string;
  /** Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. */
  updateTime?: string;
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name?: string;
  /** Optional. The type of the mute config, which determines what type of mute state the config affects. The static mute state takes precedence over the dynamic mute state. Immutable after creation. STATIC by default if not set during creation. */
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  /** Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. */
  createTime?: string;
  /** The human readable name to be displayed for the mute config. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV1MuteConfig: Schema.Schema<GoogleCloudSecuritycenterV1MuteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1MuteConfig" });

export interface AdcApplication {
  /** Consumer provided attributes for the AppHub application. */
  attributes?: GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
  /** The resource name of an ADC Application. Format: projects/{project}/locations/{location}/spaces/{space}/applications/{application} */
  name?: string;
}

export const AdcApplication: Schema.Schema<AdcApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcApplication" });

export interface AdcSharedTemplateRevision {
  /** The resource name of an ADC Shared Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const AdcSharedTemplateRevision: Schema.Schema<AdcSharedTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcSharedTemplateRevision" });

export interface AzureManagementGroup {
  /** The UUID of the Azure management group, for example, `20000000-0001-0000-0000-000000000000`. */
  id?: string;
  /** The display name of the Azure management group. */
  displayName?: string;
}

export const AzureManagementGroup: Schema.Schema<AzureManagementGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureManagementGroup" });

export interface AzureSubscription {
  /** The UUID of the Azure subscription, for example, `291bba3f-e0a5-47bc-a099-3bdcb2a50a05`. */
  id?: string;
  /** The display name of the Azure subscription. */
  displayName?: string;
}

export const AzureSubscription: Schema.Schema<AzureSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureSubscription" });

export interface AzureMetadata {
  /** A list of Azure management groups associated with the resource, ordered from lowest level (closest to the subscription) to highest level. */
  managementGroups?: ReadonlyArray<AzureManagementGroup>;
  /** The Azure subscription associated with the resource. */
  subscription?: AzureSubscription;
  /** The Azure Entra tenant associated with the resource. */
  tenant?: AzureTenant;
  /** The Azure resource group associated with the resource. */
  resourceGroup?: AzureResourceGroup;
}

export const AzureMetadata: Schema.Schema<AzureMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managementGroups: Schema.optional(Schema.Array(AzureManagementGroup)),
    subscription: Schema.optional(AzureSubscription),
    tenant: Schema.optional(AzureTenant),
    resourceGroup: Schema.optional(AzureResourceGroup),
  }).annotate({ identifier: "AzureMetadata" });

export interface GoogleCloudSecuritycenterV1Resource {
  /** The human readable name of the resource. */
  displayName?: string;
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: AdcSharedTemplateRevision;
  /** The project ID that the resource belongs to. */
  projectDisplayName?: string;
  /** The full resource type of the resource. */
  type?: string;
  /** Indicates which cloud provider the resource resides in. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
  /** Indicates which organization or tenant in the cloud provider the finding applies to. */
  organization?: string;
  /** A string representation of the resource path. For Google Cloud, it has the format of `organizations/{organization_id}/folders/{folder_id}/folders/{folder_id}/projects/{project_id}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id}/ou/{organizational_unit_id}/ou/{organizational_unit_id}/account/{account_id}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id}/mg/{management_group_id}/subscription/{subscription_id}/rg/{resource_group_name}` where there can be any number of management groups. */
  resourcePathString?: string;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: AdcApplicationTemplateRevision;
  /** The parent service or product from which the resource is provided, for example, GKE or SNS. */
  service?: string;
  /** The AWS metadata associated with the finding. */
  awsMetadata?: AwsMetadata;
  /** The App Hub application this resource belongs to. */
  application?: GoogleCloudSecuritycenterV1ResourceApplication;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<Folder>;
  /** The ADC application associated with the finding. */
  adcApplication?: AdcApplication;
  /** The region or location of the service (if applicable). */
  location?: string;
  /** The Azure metadata associated with the finding. */
  azureMetadata?: AzureMetadata;
  /** The full resource name of resource's parent. */
  parent?: string;
  /** Provides the path to the resource within the resource hierarchy. */
  resourcePath?: ResourcePath;
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
}

export const GoogleCloudSecuritycenterV1Resource: Schema.Schema<GoogleCloudSecuritycenterV1Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(AdcSharedTemplateRevision),
    projectDisplayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    resourcePathString: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(AdcApplicationTemplateRevision),
    service: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(AwsMetadata),
    application: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplication,
    ),
    folders: Schema.optional(Schema.Array(Folder)),
    adcApplication: Schema.optional(AdcApplication),
    location: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(AzureMetadata),
    parent: Schema.optional(Schema.String),
    resourcePath: Schema.optional(ResourcePath),
    project: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Resource" });

export interface GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount {
  /** The AWS account ID of the resource associated with the issue. */
  id?: string;
  /** The AWS account name of the resource associated with the issue. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAwsMetadata {
  /** The AWS account of the resource associated with the issue. */
  account?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount;
}

export const GoogleCloudSecuritycenterV2IssueResourceAwsMetadata: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAwsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAwsMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplication {
  /** The resource name of an Application. Format: `projects/{host-project-id}/locations/{location}/applications/{application-id}` */
  name?: string;
  /** Consumer provided attributes for the application */
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplication: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplication",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata {
  /** The project ID that the resource associated with the issue belongs to. */
  projectId?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcApplication {
  /** Consumer provided attributes for the AppHub application. */
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
  /** The resource name of an ADC Application. Format: projects/{project}/locations/{location}/spaces/{space}/applications/{application} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcApplication: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAdcApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAdcApplication",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision {
  /** The resource name of an ADC Shared Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2IssueResource {
  /** The Azure metadata of the resource associated with the issue. Only populated for Azure resources. */
  azureMetadata?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadata;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision;
  /** The AWS metadata of the resource associated with the issue. Only populated for AWS resources. */
  awsMetadata?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadata;
  /** The AppHub application associated with the resource, if any. Only populated for the primary resource. */
  application?: GoogleCloudSecuritycenterV2IssueResourceApplication;
  /** The Google Cloud metadata of the resource associated with the issue. Only populated for Google Cloud resources. */
  googleCloudMetadata?: GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata;
  /** The resource-type specific display name of the resource associated with the issue. */
  displayName?: string;
  /** The ADC application associated with the finding. */
  adcApplication?: GoogleCloudSecuritycenterV2IssueResourceAdcApplication;
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision;
  /** The type of the resource associated with the issue. */
  type?: string;
  /** The full resource name of the resource associated with the issue. */
  name?: string;
  /** The cloud provider of the resource associated with the issue. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueResource: Schema.Schema<GoogleCloudSecuritycenterV2IssueResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAzureMetadata,
    ),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision,
    ),
    awsMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadata,
    ),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplication,
    ),
    googleCloudMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata,
    ),
    displayName: Schema.optional(Schema.String),
    adcApplication: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplication,
    ),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision,
    ),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueResource" });

export interface GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin {
  /** The security bulletin name. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin: Schema.Schema<GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin",
  });

export interface GoogleCloudSecuritycenterV2IssueFinding {
  /** The name of the finding. */
  name?: string;
  /** The CVE of the finding. */
  cve?: GoogleCloudSecuritycenterV2IssueFindingCve;
  /** The security bulletin of the finding. */
  securityBulletin?: GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin;
}

export const GoogleCloudSecuritycenterV2IssueFinding: Schema.Schema<GoogleCloudSecuritycenterV2IssueFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    cve: Schema.optional(GoogleCloudSecuritycenterV2IssueFindingCve),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFinding" });

export interface GoogleCloudSecuritycenterV2IssueMute {
  /** The time the issue was muted. */
  muteUpdateTime?: string;
  /** The email address of the user who last changed the mute state of the issue. */
  muteInitiator?: string;
  /** The user-provided reason for muting the issue. */
  muteReason?: string;
  /** Output only. The mute state of the issue. */
  muteState?: "MUTE_STATE_UNSPECIFIED" | "NOT_MUTED" | "MUTED" | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueMute: Schema.Schema<GoogleCloudSecuritycenterV2IssueMute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteUpdateTime: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    muteReason: Schema.optional(Schema.String),
    muteState: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueMute" });

export interface GoogleCloudSecuritycenterV2IssueDomain {
  /** The domain category of the issue. */
  domainCategory?:
    | "DOMAIN_CATEGORY_UNSPECIFIED"
    | "AI"
    | "CODE"
    | "CONTAINER"
    | "DATA"
    | "IDENTITY_AND_ACCESS"
    | "VULNERABILITY"
    | "THREAT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueDomain: Schema.Schema<GoogleCloudSecuritycenterV2IssueDomain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainCategory: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueDomain" });

export interface GoogleCloudSecuritycenterV2IssueSecurityContextContext {
  /** Context values. */
  values?: ReadonlyArray<string>;
  /** Context type. */
  type?: string;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContextContext: Schema.Schema<GoogleCloudSecuritycenterV2IssueSecurityContextContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueSecurityContextContext",
  });

export interface GoogleCloudSecuritycenterV2IssueSecurityContext {
  /** The aggregated count of the security context. */
  aggregatedCount?: GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount;
  /** The context of the security context. */
  context?: GoogleCloudSecuritycenterV2IssueSecurityContextContext;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContext: Schema.Schema<GoogleCloudSecuritycenterV2IssueSecurityContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregatedCount: Schema.optional(
      GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount,
    ),
    context: Schema.optional(
      GoogleCloudSecuritycenterV2IssueSecurityContextContext,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueSecurityContext",
  });

export interface GoogleCloudSecuritycenterV2Issue {
  /** Approaches to remediate the issue in Markdown format. */
  remediations?: ReadonlyArray<string>;
  /** The finding category or rule name that generated the issue. */
  detection?: string;
  /** Additional resources associated with the issue. */
  secondaryResources?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResource>;
  /** The findings related to the issue. */
  relatedFindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueFinding>;
  /** The time the issue was last observed. */
  lastObservationTime?: string;
  /** Output only. The time the issue was created. */
  createTime?: string;
  /** Output only. The time the issue was last updated. */
  updateTime?: string;
  /** The mute information of the issue. */
  mute?: GoogleCloudSecuritycenterV2IssueMute;
  /** The severity of the issue. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** The exposure score of the issue. */
  exposureScore?: number;
  /** The description of the issue in Markdown format. */
  description?: string;
  /** Output only. The state of the issue. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** The primary resource associated with the issue. */
  primaryResource?: GoogleCloudSecuritycenterV2IssueResource;
  /** The domains of the issue. */
  domains?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueDomain>;
  /** The security context of the issue. */
  securityContexts?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueSecurityContext>;
  /** Identifier. The name of the issue. Format: organizations/{organization}/locations/{location}/issues/{issue} */
  name?: string;
  /** The type of the issue. */
  issueType?:
    | "ISSUE_TYPE_UNSPECIFIED"
    | "CHOKEPOINT"
    | "TOXIC_COMBINATION"
    | "INSIGHT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2Issue: Schema.Schema<GoogleCloudSecuritycenterV2Issue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remediations: Schema.optional(Schema.Array(Schema.String)),
    detection: Schema.optional(Schema.String),
    secondaryResources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueResource),
    ),
    relatedFindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueFinding),
    ),
    lastObservationTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    mute: Schema.optional(GoogleCloudSecuritycenterV2IssueMute),
    severity: Schema.optional(Schema.String),
    exposureScore: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    primaryResource: Schema.optional(GoogleCloudSecuritycenterV2IssueResource),
    domains: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueDomain),
    ),
    securityContexts: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueSecurityContext),
    ),
    name: Schema.optional(Schema.String),
    issueType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Issue" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface GroupResult {
  /** Properties matching the groupBy fields in the request. */
  properties?: Record<string, unknown>;
  /** Total count of resources for the given properties. */
  count?: string;
}

export const GroupResult: Schema.Schema<GroupResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupResult" });

export interface GroupFindingsResponse {
  /** Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear. */
  groupByResults?: ReadonlyArray<GroupResult>;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
  /** Time used for executing the groupBy request. */
  readTime?: string;
}

export const GroupFindingsResponse: Schema.Schema<GroupFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupByResults: Schema.optional(Schema.Array(GroupResult)),
    nextPageToken: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupFindingsResponse" });

export interface DataAccessEvent {
  /** The operation performed by the principal to access the data. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data access event. */
  eventTime?: string;
  /** Unique identifier for data access event. */
  eventId?: string;
  /** The email address of the principal that accessed the data. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
}

export const DataAccessEvent: Schema.Schema<DataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataAccessEvent" });

export interface IamBinding {
  /** The action that was performed on a Binding. */
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  /** Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner". */
  role?: string;
  /** A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com". */
  member?: string;
}

export const IamBinding: Schema.Schema<IamBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamBinding" });

export interface Chokepoint {
  /** List of resource names of findings associated with this chokepoint. For example, organizations/123/sources/456/findings/789. This list will have at most 100 findings. */
  relatedFindings?: ReadonlyArray<string>;
}

export const Chokepoint: Schema.Schema<Chokepoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Chokepoint" });

export interface CloudControl {
  /** Name of the CloudControl associated with the finding. */
  cloudControlName?: string;
  /** Type of cloud control. */
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
  /** Policy type of the CloudControl */
  policyType?: string;
  /** Version of the Cloud Control */
  version?: number;
}

export const CloudControl: Schema.Schema<CloudControl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudControlName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    policyType: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CloudControl" });

export interface ComplianceDetails {
  /** Details of Frameworks associated with the finding */
  frameworks?: ReadonlyArray<Framework>;
  /** CloudControl associated with the finding */
  cloudControl?: CloudControl;
  /** Cloud Control Deployments associated with the finding. For example, organizations/123/locations/global/cloudControlDeployments/deploymentIdentifier */
  cloudControlDeploymentNames?: ReadonlyArray<string>;
}

export const ComplianceDetails: Schema.Schema<ComplianceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frameworks: Schema.optional(Schema.Array(Framework)),
    cloudControl: Schema.optional(CloudControl),
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ComplianceDetails" });

export interface DiscoveredWorkload {
  /** A boolean flag set to true if installed packages strongly predict the workload type. */
  detectedRelevantPackages?: boolean;
  /** A boolean flag set to true if associated hardware strongly predicts the workload type. */
  detectedRelevantHardware?: boolean;
  /** The type of workload. */
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  /** A boolean flag set to true if associated keywords strongly predict the workload type. */
  detectedRelevantKeywords?: boolean;
  /** The confidence in detection of this workload. */
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
}

export const DiscoveredWorkload: Schema.Schema<DiscoveredWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    workloadType: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveredWorkload" });

export interface DataFlowEvent {
  /** The email address of the principal that initiated the data flow event. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
  /** Timestamp of data flow event. */
  eventTime?: string;
  /** Unique identifier for data flow event. */
  eventId?: string;
  /** The operation performed by the principal for the data flow event. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Non-compliant location of the principal or the data destination. */
  violatedLocation?: string;
}

export const DataFlowEvent: Schema.Schema<DataFlowEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataFlowEvent" });

export interface Connection {
  /** Destination IP address. Not present for sockets that are listening and not connected. */
  destinationIp?: string;
  /** Source port. */
  sourcePort?: number;
  /** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
  /** Destination port. Not present for sockets that are listening and not connected. */
  destinationPort?: number;
  /** Source IP address. */
  sourceIp?: string;
}

export const Connection: Schema.Schema<Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationIp: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    sourceIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connection" });

export interface Compliance {
  /** Version of the standard or benchmark, for example, 1.1 */
  version?: string;
  /** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
  standard?: string;
  /** Policies within the standard or benchmark, for example, A.12.4.1 */
  ids?: ReadonlyArray<string>;
}

export const Compliance: Schema.Schema<Compliance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    standard: Schema.optional(Schema.String),
    ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Compliance" });

export interface LoadBalancer {
  /** The name of the load balancer associated with the finding. */
  name?: string;
}

export const LoadBalancer: Schema.Schema<LoadBalancer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoadBalancer" });

export interface SecurityMarks {
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name?: string;
  /** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
  canonicalName?: string;
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
}

export const SecurityMarks: Schema.Schema<SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "SecurityMarks" });

export interface BackupDisasterRecovery {
  /** The backup type of the Backup and DR image. For example, `Snapshot`, `Remote Snapshot`, `OnVault`. */
  backupType?: string;
  /** The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, `snap-ov`. */
  backupTemplate?: string;
  /** The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, `DiskPoolOne`. */
  storagePool?: string;
  /** The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, `skipofflineappsincongrp, nounmap`. */
  policyOptions?: ReadonlyArray<string>;
  /** The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, `centos7-01`. */
  host?: string;
  /** The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, `centos7-01-vol00`, `centos7-01-vol01`, `centos7-01-vol02`. */
  applications?: ReadonlyArray<string>;
  /** The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, `onvaults`. */
  policies?: ReadonlyArray<string>;
  /** The timestamp at which the Backup and DR backup was created. */
  backupCreateTime?: string;
  /** The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, `GCP`. */
  profile?: string;
  /** The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, `backup-server-57137`. */
  appliance?: string;
}

export const BackupDisasterRecovery: Schema.Schema<BackupDisasterRecovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupType: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    host: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
    policies: Schema.optional(Schema.Array(Schema.String)),
    backupCreateTime: Schema.optional(Schema.String),
    profile: Schema.optional(Schema.String),
    appliance: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDisasterRecovery" });

export interface SecretStatus {
  /** Time that the secret was found. */
  lastUpdatedTime?: string;
  /** The validity of the secret. */
  validity?:
    | "SECRET_VALIDITY_UNSPECIFIED"
    | "SECRET_VALIDITY_UNSUPPORTED"
    | "SECRET_VALIDITY_FAILED"
    | "SECRET_VALIDITY_INVALID"
    | "SECRET_VALIDITY_VALID"
    | (string & {});
}

export const SecretStatus: Schema.Schema<SecretStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdatedTime: Schema.optional(Schema.String),
    validity: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretStatus" });

export interface SecretFilePath {
  /** Path to the file. */
  path?: string;
}

export const SecretFilePath: Schema.Schema<SecretFilePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretFilePath" });

export interface Secret {
  /** The type of secret, for example, GCP_API_KEY. */
  type?: string;
  /** The environment variable containing the secret. */
  environmentVariable?: SecretEnvironmentVariable;
  /** The status of the secret. */
  status?: SecretStatus;
  /** The file containing the secret. */
  filePath?: SecretFilePath;
}

export const Secret: Schema.Schema<Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    environmentVariable: Schema.optional(SecretEnvironmentVariable),
    status: Schema.optional(SecretStatus),
    filePath: Schema.optional(SecretFilePath),
  }).annotate({ identifier: "Secret" });

export interface GroupMembership {
  /** ID of the group. */
  groupId?: string;
  /** Type of group. */
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
}

export const GroupMembership: Schema.Schema<GroupMembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    groupType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupMembership" });

export interface MitreAttack {
  /** The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`). */
  primaryTechniques?: ReadonlyArray<
    | "TECHNIQUE_UNSPECIFIED"
    | "DATA_OBFUSCATION"
    | "DATA_OBFUSCATION_STEGANOGRAPHY"
    | "OS_CREDENTIAL_DUMPING"
    | "OS_CREDENTIAL_DUMPING_PROC_FILESYSTEM"
    | "OS_CREDENTIAL_DUMPING_ETC_PASSWORD_AND_ETC_SHADOW"
    | "DATA_FROM_LOCAL_SYSTEM"
    | "AUTOMATED_EXFILTRATION"
    | "OBFUSCATED_FILES_OR_INFO"
    | "STEGANOGRAPHY"
    | "COMPILE_AFTER_DELIVERY"
    | "COMMAND_OBFUSCATION"
    | "SCHEDULED_TRANSFER"
    | "SYSTEM_OWNER_USER_DISCOVERY"
    | "MASQUERADING"
    | "MATCH_LEGITIMATE_NAME_OR_LOCATION"
    | "BOOT_OR_LOGON_INITIALIZATION_SCRIPTS"
    | "STARTUP_ITEMS"
    | "NETWORK_SERVICE_DISCOVERY"
    | "SCHEDULED_TASK_JOB"
    | "SCHEDULED_TASK_JOB_CRON"
    | "CONTAINER_ORCHESTRATION_JOB"
    | "PROCESS_INJECTION"
    | "INPUT_CAPTURE"
    | "INPUT_CAPTURE_KEYLOGGING"
    | "PROCESS_DISCOVERY"
    | "COMMAND_AND_SCRIPTING_INTERPRETER"
    | "UNIX_SHELL"
    | "PYTHON"
    | "EXPLOITATION_FOR_PRIVILEGE_ESCALATION"
    | "PERMISSION_GROUPS_DISCOVERY"
    | "CLOUD_GROUPS"
    | "INDICATOR_REMOVAL"
    | "INDICATOR_REMOVAL_CLEAR_LINUX_OR_MAC_SYSTEM_LOGS"
    | "INDICATOR_REMOVAL_CLEAR_COMMAND_HISTORY"
    | "INDICATOR_REMOVAL_FILE_DELETION"
    | "INDICATOR_REMOVAL_TIMESTOMP"
    | "INDICATOR_REMOVAL_CLEAR_MAILBOX_DATA"
    | "APPLICATION_LAYER_PROTOCOL"
    | "DNS"
    | "SOFTWARE_DEPLOYMENT_TOOLS"
    | "VALID_ACCOUNTS"
    | "DEFAULT_ACCOUNTS"
    | "LOCAL_ACCOUNTS"
    | "CLOUD_ACCOUNTS"
    | "FILE_AND_DIRECTORY_DISCOVERY"
    | "ACCOUNT_DISCOVERY_LOCAL_ACCOUNT"
    | "PROXY"
    | "EXTERNAL_PROXY"
    | "MULTI_HOP_PROXY"
    | "ACCOUNT_MANIPULATION"
    | "ADDITIONAL_CLOUD_CREDENTIALS"
    | "ADDITIONAL_CLOUD_ROLES"
    | "SSH_AUTHORIZED_KEYS"
    | "ADDITIONAL_CONTAINER_CLUSTER_ROLES"
    | "MULTI_STAGE_CHANNELS"
    | "INGRESS_TOOL_TRANSFER"
    | "NATIVE_API"
    | "BRUTE_FORCE"
    | "AUTOMATED_COLLECTION"
    | "SHARED_MODULES"
    | "DATA_ENCODING"
    | "STANDARD_ENCODING"
    | "ACCESS_TOKEN_MANIPULATION"
    | "TOKEN_IMPERSONATION_OR_THEFT"
    | "CREATE_ACCOUNT"
    | "LOCAL_ACCOUNT"
    | "DEOBFUSCATE_DECODE_FILES_OR_INFO"
    | "EXPLOIT_PUBLIC_FACING_APPLICATION"
    | "SUPPLY_CHAIN_COMPROMISE"
    | "COMPROMISE_SOFTWARE_DEPENDENCIES_AND_DEVELOPMENT_TOOLS"
    | "EXPLOITATION_FOR_CLIENT_EXECUTION"
    | "USER_EXECUTION"
    | "EXPLOITATION_FOR_CREDENTIAL_ACCESS"
    | "LINUX_AND_MAC_FILE_AND_DIRECTORY_PERMISSIONS_MODIFICATION"
    | "DOMAIN_POLICY_MODIFICATION"
    | "DATA_DESTRUCTION"
    | "DATA_ENCRYPTED_FOR_IMPACT"
    | "SERVICE_STOP"
    | "INHIBIT_SYSTEM_RECOVERY"
    | "FIRMWARE_CORRUPTION"
    | "RESOURCE_HIJACKING"
    | "NETWORK_DENIAL_OF_SERVICE"
    | "CLOUD_SERVICE_DISCOVERY"
    | "STEAL_APPLICATION_ACCESS_TOKEN"
    | "ACCOUNT_ACCESS_REMOVAL"
    | "TRANSFER_DATA_TO_CLOUD_ACCOUNT"
    | "STEAL_WEB_SESSION_COOKIE"
    | "CREATE_OR_MODIFY_SYSTEM_PROCESS"
    | "EVENT_TRIGGERED_EXECUTION"
    | "BOOT_OR_LOGON_AUTOSTART_EXECUTION"
    | "KERNEL_MODULES_AND_EXTENSIONS"
    | "SHORTCUT_MODIFICATION"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM_SETUID_AND_SETGID"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM_SUDO_AND_SUDO_CACHING"
    | "UNSECURED_CREDENTIALS"
    | "CREDENTIALS_IN_FILES"
    | "BASH_HISTORY"
    | "PRIVATE_KEYS"
    | "SUBVERT_TRUST_CONTROL"
    | "INSTALL_ROOT_CERTIFICATE"
    | "COMPROMISE_HOST_SOFTWARE_BINARY"
    | "CREDENTIALS_FROM_PASSWORD_STORES"
    | "MODIFY_AUTHENTICATION_PROCESS"
    | "PLUGGABLE_AUTHENTICATION_MODULES"
    | "MULTI_FACTOR_AUTHENTICATION"
    | "IMPAIR_DEFENSES"
    | "DISABLE_OR_MODIFY_TOOLS"
    | "INDICATOR_BLOCKING"
    | "DISABLE_OR_MODIFY_LINUX_AUDIT_SYSTEM"
    | "HIDE_ARTIFACTS"
    | "HIDDEN_FILES_AND_DIRECTORIES"
    | "HIDDEN_USERS"
    | "EXFILTRATION_OVER_WEB_SERVICE"
    | "EXFILTRATION_TO_CLOUD_STORAGE"
    | "DYNAMIC_RESOLUTION"
    | "LATERAL_TOOL_TRANSFER"
    | "HIJACK_EXECUTION_FLOW"
    | "HIJACK_EXECUTION_FLOW_DYNAMIC_LINKER_HIJACKING"
    | "MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE"
    | "CREATE_SNAPSHOT"
    | "CLOUD_INFRASTRUCTURE_DISCOVERY"
    | "DEVELOP_CAPABILITIES"
    | "DEVELOP_CAPABILITIES_MALWARE"
    | "OBTAIN_CAPABILITIES"
    | "OBTAIN_CAPABILITIES_MALWARE"
    | "OBTAIN_CAPABILITIES_VULNERABILITIES"
    | "ACTIVE_SCANNING"
    | "SCANNING_IP_BLOCKS"
    | "STAGE_CAPABILITIES"
    | "UPLOAD_MALWARE"
    | "CONTAINER_ADMINISTRATION_COMMAND"
    | "DEPLOY_CONTAINER"
    | "ESCAPE_TO_HOST"
    | "CONTAINER_AND_RESOURCE_DISCOVERY"
    | "REFLECTIVE_CODE_LOADING"
    | "STEAL_OR_FORGE_AUTHENTICATION_CERTIFICATES"
    | "FINANCIAL_THEFT"
    | (string & {})
  >;
  /** Additional MITRE ATT&CK tactics related to this finding, if any. */
  additionalTactics?: ReadonlyArray<
    | "TACTIC_UNSPECIFIED"
    | "RECONNAISSANCE"
    | "RESOURCE_DEVELOPMENT"
    | "INITIAL_ACCESS"
    | "EXECUTION"
    | "PERSISTENCE"
    | "PRIVILEGE_ESCALATION"
    | "DEFENSE_EVASION"
    | "CREDENTIAL_ACCESS"
    | "DISCOVERY"
    | "LATERAL_MOVEMENT"
    | "COLLECTION"
    | "COMMAND_AND_CONTROL"
    | "EXFILTRATION"
    | "IMPACT"
    | (string & {})
  >;
  /** The MITRE ATT&CK version referenced by the above fields. E.g. "8". */
  version?: string;
  /** Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques. */
  additionalTechniques?: ReadonlyArray<
    | "TECHNIQUE_UNSPECIFIED"
    | "DATA_OBFUSCATION"
    | "DATA_OBFUSCATION_STEGANOGRAPHY"
    | "OS_CREDENTIAL_DUMPING"
    | "OS_CREDENTIAL_DUMPING_PROC_FILESYSTEM"
    | "OS_CREDENTIAL_DUMPING_ETC_PASSWORD_AND_ETC_SHADOW"
    | "DATA_FROM_LOCAL_SYSTEM"
    | "AUTOMATED_EXFILTRATION"
    | "OBFUSCATED_FILES_OR_INFO"
    | "STEGANOGRAPHY"
    | "COMPILE_AFTER_DELIVERY"
    | "COMMAND_OBFUSCATION"
    | "SCHEDULED_TRANSFER"
    | "SYSTEM_OWNER_USER_DISCOVERY"
    | "MASQUERADING"
    | "MATCH_LEGITIMATE_NAME_OR_LOCATION"
    | "BOOT_OR_LOGON_INITIALIZATION_SCRIPTS"
    | "STARTUP_ITEMS"
    | "NETWORK_SERVICE_DISCOVERY"
    | "SCHEDULED_TASK_JOB"
    | "SCHEDULED_TASK_JOB_CRON"
    | "CONTAINER_ORCHESTRATION_JOB"
    | "PROCESS_INJECTION"
    | "INPUT_CAPTURE"
    | "INPUT_CAPTURE_KEYLOGGING"
    | "PROCESS_DISCOVERY"
    | "COMMAND_AND_SCRIPTING_INTERPRETER"
    | "UNIX_SHELL"
    | "PYTHON"
    | "EXPLOITATION_FOR_PRIVILEGE_ESCALATION"
    | "PERMISSION_GROUPS_DISCOVERY"
    | "CLOUD_GROUPS"
    | "INDICATOR_REMOVAL"
    | "INDICATOR_REMOVAL_CLEAR_LINUX_OR_MAC_SYSTEM_LOGS"
    | "INDICATOR_REMOVAL_CLEAR_COMMAND_HISTORY"
    | "INDICATOR_REMOVAL_FILE_DELETION"
    | "INDICATOR_REMOVAL_TIMESTOMP"
    | "INDICATOR_REMOVAL_CLEAR_MAILBOX_DATA"
    | "APPLICATION_LAYER_PROTOCOL"
    | "DNS"
    | "SOFTWARE_DEPLOYMENT_TOOLS"
    | "VALID_ACCOUNTS"
    | "DEFAULT_ACCOUNTS"
    | "LOCAL_ACCOUNTS"
    | "CLOUD_ACCOUNTS"
    | "FILE_AND_DIRECTORY_DISCOVERY"
    | "ACCOUNT_DISCOVERY_LOCAL_ACCOUNT"
    | "PROXY"
    | "EXTERNAL_PROXY"
    | "MULTI_HOP_PROXY"
    | "ACCOUNT_MANIPULATION"
    | "ADDITIONAL_CLOUD_CREDENTIALS"
    | "ADDITIONAL_CLOUD_ROLES"
    | "SSH_AUTHORIZED_KEYS"
    | "ADDITIONAL_CONTAINER_CLUSTER_ROLES"
    | "MULTI_STAGE_CHANNELS"
    | "INGRESS_TOOL_TRANSFER"
    | "NATIVE_API"
    | "BRUTE_FORCE"
    | "AUTOMATED_COLLECTION"
    | "SHARED_MODULES"
    | "DATA_ENCODING"
    | "STANDARD_ENCODING"
    | "ACCESS_TOKEN_MANIPULATION"
    | "TOKEN_IMPERSONATION_OR_THEFT"
    | "CREATE_ACCOUNT"
    | "LOCAL_ACCOUNT"
    | "DEOBFUSCATE_DECODE_FILES_OR_INFO"
    | "EXPLOIT_PUBLIC_FACING_APPLICATION"
    | "SUPPLY_CHAIN_COMPROMISE"
    | "COMPROMISE_SOFTWARE_DEPENDENCIES_AND_DEVELOPMENT_TOOLS"
    | "EXPLOITATION_FOR_CLIENT_EXECUTION"
    | "USER_EXECUTION"
    | "EXPLOITATION_FOR_CREDENTIAL_ACCESS"
    | "LINUX_AND_MAC_FILE_AND_DIRECTORY_PERMISSIONS_MODIFICATION"
    | "DOMAIN_POLICY_MODIFICATION"
    | "DATA_DESTRUCTION"
    | "DATA_ENCRYPTED_FOR_IMPACT"
    | "SERVICE_STOP"
    | "INHIBIT_SYSTEM_RECOVERY"
    | "FIRMWARE_CORRUPTION"
    | "RESOURCE_HIJACKING"
    | "NETWORK_DENIAL_OF_SERVICE"
    | "CLOUD_SERVICE_DISCOVERY"
    | "STEAL_APPLICATION_ACCESS_TOKEN"
    | "ACCOUNT_ACCESS_REMOVAL"
    | "TRANSFER_DATA_TO_CLOUD_ACCOUNT"
    | "STEAL_WEB_SESSION_COOKIE"
    | "CREATE_OR_MODIFY_SYSTEM_PROCESS"
    | "EVENT_TRIGGERED_EXECUTION"
    | "BOOT_OR_LOGON_AUTOSTART_EXECUTION"
    | "KERNEL_MODULES_AND_EXTENSIONS"
    | "SHORTCUT_MODIFICATION"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM_SETUID_AND_SETGID"
    | "ABUSE_ELEVATION_CONTROL_MECHANISM_SUDO_AND_SUDO_CACHING"
    | "UNSECURED_CREDENTIALS"
    | "CREDENTIALS_IN_FILES"
    | "BASH_HISTORY"
    | "PRIVATE_KEYS"
    | "SUBVERT_TRUST_CONTROL"
    | "INSTALL_ROOT_CERTIFICATE"
    | "COMPROMISE_HOST_SOFTWARE_BINARY"
    | "CREDENTIALS_FROM_PASSWORD_STORES"
    | "MODIFY_AUTHENTICATION_PROCESS"
    | "PLUGGABLE_AUTHENTICATION_MODULES"
    | "MULTI_FACTOR_AUTHENTICATION"
    | "IMPAIR_DEFENSES"
    | "DISABLE_OR_MODIFY_TOOLS"
    | "INDICATOR_BLOCKING"
    | "DISABLE_OR_MODIFY_LINUX_AUDIT_SYSTEM"
    | "HIDE_ARTIFACTS"
    | "HIDDEN_FILES_AND_DIRECTORIES"
    | "HIDDEN_USERS"
    | "EXFILTRATION_OVER_WEB_SERVICE"
    | "EXFILTRATION_TO_CLOUD_STORAGE"
    | "DYNAMIC_RESOLUTION"
    | "LATERAL_TOOL_TRANSFER"
    | "HIJACK_EXECUTION_FLOW"
    | "HIJACK_EXECUTION_FLOW_DYNAMIC_LINKER_HIJACKING"
    | "MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE"
    | "CREATE_SNAPSHOT"
    | "CLOUD_INFRASTRUCTURE_DISCOVERY"
    | "DEVELOP_CAPABILITIES"
    | "DEVELOP_CAPABILITIES_MALWARE"
    | "OBTAIN_CAPABILITIES"
    | "OBTAIN_CAPABILITIES_MALWARE"
    | "OBTAIN_CAPABILITIES_VULNERABILITIES"
    | "ACTIVE_SCANNING"
    | "SCANNING_IP_BLOCKS"
    | "STAGE_CAPABILITIES"
    | "UPLOAD_MALWARE"
    | "CONTAINER_ADMINISTRATION_COMMAND"
    | "DEPLOY_CONTAINER"
    | "ESCAPE_TO_HOST"
    | "CONTAINER_AND_RESOURCE_DISCOVERY"
    | "REFLECTIVE_CODE_LOADING"
    | "STEAL_OR_FORGE_AUTHENTICATION_CERTIFICATES"
    | "FINANCIAL_THEFT"
    | (string & {})
  >;
  /** The MITRE ATT&CK tactic most closely represented by this finding, if any. */
  primaryTactic?:
    | "TACTIC_UNSPECIFIED"
    | "RECONNAISSANCE"
    | "RESOURCE_DEVELOPMENT"
    | "INITIAL_ACCESS"
    | "EXECUTION"
    | "PERSISTENCE"
    | "PRIVILEGE_ESCALATION"
    | "DEFENSE_EVASION"
    | "CREDENTIAL_ACCESS"
    | "DISCOVERY"
    | "LATERAL_MOVEMENT"
    | "COLLECTION"
    | "COMMAND_AND_CONTROL"
    | "EXFILTRATION"
    | "IMPACT"
    | (string & {});
}

export const MitreAttack: Schema.Schema<MitreAttack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    primaryTactic: Schema.optional(Schema.String),
  }).annotate({ identifier: "MitreAttack" });

export interface TicketInfo {
  /** The description of the ticket in the ticket system. */
  description?: string;
  /** The link to the ticket in the ticket system. */
  uri?: string;
  /** The assignee of the ticket in the ticket system. */
  assignee?: string;
  /** The latest status of the ticket, as reported by the ticket system. */
  status?: string;
  /** The identifier of the ticket in the ticket system. */
  id?: string;
  /** The time when the ticket was last updated, as reported by the ticket system. */
  updateTime?: string;
}

export const TicketInfo: Schema.Schema<TicketInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TicketInfo" });

export interface GoogleCloudSecuritycenterV1ExternalSystem {
  /** The time when the case was closed, as reported by the external system. */
  caseCloseTime?: string;
  /** The most recent status of the finding's corresponding case, as reported by the external system. */
  status?: string;
  /** The time when the case was last updated, as reported by the external system. */
  externalSystemUpdateTime?: string;
  /** The time when the case was created, as reported by the external system. */
  caseCreateTime?: string;
  /** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
  ticketInfo?: TicketInfo;
  /** The link to the finding's corresponding case in the external system. */
  caseUri?: string;
  /** Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira" */
  name?: string;
  /** The priority of the finding's corresponding case in the external system. */
  casePriority?: string;
  /** References primary/secondary etc assignees in the external system. */
  assignees?: ReadonlyArray<string>;
  /** The identifier that's used to track the finding's corresponding case in the external system. */
  externalUid?: string;
  /** The SLA of the finding's corresponding case in the external system. */
  caseSla?: string;
}

export const GoogleCloudSecuritycenterV1ExternalSystem: Schema.Schema<GoogleCloudSecuritycenterV1ExternalSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caseCloseTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    caseCreateTime: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(TicketInfo),
    caseUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    externalUid: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ExternalSystem" });

export interface Notebook {
  /** The name of the notebook. */
  name?: string;
  /** The most recent time the notebook was updated. */
  notebookUpdateTime?: string;
  /** The source notebook service, for example, "Colab Enterprise". */
  service?: string;
  /** The user ID of the latest author to modify the notebook. */
  lastAuthor?: string;
}

export const Notebook: Schema.Schema<Notebook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
  }).annotate({ identifier: "Notebook" });

export interface Finding {
  /** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 */
  moduleName?: string;
  /** Signature of the kernel rootkit. */
  kernelRootkit?: KernelRootkit;
  /** Details about the compliance implications of the finding. */
  complianceDetails?: ComplianceDetails;
  /** Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics". */
  parentDisplayName?: string;
  /** Represents IAM bindings associated with the finding. */
  iamBindings?: ReadonlyArray<IamBinding>;
  /** DiscoveredWorkload associated with the finding. */
  discoveredWorkload?: DiscoveredWorkload;
  /** Data flow events associated with the finding. */
  dataFlowEvents?: ReadonlyArray<DataFlowEvent>;
  /** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** Contains information about the IP connection associated with the finding. */
  connections?: ReadonlyArray<Connection>;
  /** Output only. The mute information regarding this finding. */
  muteInfo?: MuteInfo;
  /** Contains more details about the finding. */
  description?: string;
  /** Represents an application associated with the finding. */
  application?: Application;
  /** VertexAi associated with the finding. */
  vertexAi?: VertexAi;
  /** Fields related to Cloud Armor findings. */
  cloudArmor?: CloudArmor;
  /** Contains compliance information for security standards associated to the finding. */
  compliances?: ReadonlyArray<Compliance>;
  /** The load balancers associated with the finding. */
  loadBalancers?: ReadonlyArray<LoadBalancer>;
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** Access details associated with the finding, such as more information on the caller, which method was accessed, and from where. */
  access?: Access;
  /** PolicyViolationSummary associated with the finding. */
  policyViolationSummary?: PolicyViolationSummary;
  /** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
  resourceName?: string;
  /** The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** Kubernetes resources associated with the finding. */
  kubernetes?: Kubernetes;
  /** External exposure associated with the finding. */
  externalExposure?: ExternalExposure;
  /** Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  vulnerability?: Vulnerability;
  /** Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute. */
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** Database associated with the finding. */
  database?: Database;
  /** The security posture associated with the finding. */
  securityPosture?: SecurityPosture;
  /** The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}". */
  name?: string;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: SecurityMarks;
  /** Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. */
  muteInitiator?: string;
  /** The AI model associated with the finding. */
  aiModel?: AiModel;
  /** Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding. */
  cloudDlpInspection?: CloudDlpInspection;
  /** AffectedResources associated with the finding. */
  affectedResources?: AffectedResources;
  /** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
  parent?: string;
  /** Data access events associated with the finding. */
  dataAccessEvents?: ReadonlyArray<DataAccessEvent>;
  /** Disk associated with the finding. */
  disk?: Disk;
  /** Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. */
  containers?: ReadonlyArray<Container>;
  /** Job associated with the finding. */
  job?: Job;
  /** Steps to address the finding. */
  nextSteps?: string;
  /** ArtifactGuardPolicies associated with the finding. */
  artifactGuardPolicies?: ArtifactGuardPolicies;
  /** Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } } */
  contacts?: Record<string, ContactDetails>;
  /** Fields related to Backup and DR findings. */
  backupDisasterRecovery?: BackupDisasterRecovery;
  /** Represents the VPC networks that the resource is attached to. */
  networks?: ReadonlyArray<Network>;
  /** Secret associated with the finding. */
  secret?: Secret;
  /** Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests. */
  chokepoint?: Chokepoint;
  /** Contains information about the org policies associated with the finding. */
  orgPolicies?: ReadonlyArray<OrgPolicy>;
  /** IP rules associated with the finding. */
  ipRules?: IpRules;
  /** File associated with the finding. */
  files?: ReadonlyArray<File>;
  /** Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests. */
  groupMemberships?: ReadonlyArray<GroupMembership>;
  /** Represents operating system processes associated with the Finding. */
  processes?: ReadonlyArray<Process>;
  /** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
  mitreAttack?: MitreAttack;
  /** Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. */
  externalSystems?: Record<string, GoogleCloudSecuritycenterV1ExternalSystem>;
  /** The results of an attack path simulation relevant to this finding. */
  attackExposure?: AttackExposure;
  /** Cloud DLP data profile that is associated with the finding. */
  cloudDlpDataProfile?: CloudDlpDataProfile;
  /** The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Data retention deletion events associated with the finding. */
  dataRetentionDeletionEvents?: ReadonlyArray<DataRetentionDeletionEvent>;
  /** Output only. The most recent time this finding was muted or unmuted. */
  muteUpdateTime?: string;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** Notebook associated with the finding. */
  notebook?: Notebook;
  /** Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests. */
  toxicCombination?: ToxicCombination;
  /** Agent data access events associated with the finding. */
  agentDataAccessEvents?: ReadonlyArray<AgentDataAccessEvent>;
  /** Represents exfiltrations associated with the finding. */
  exfiltration?: Exfiltration;
  /** Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
  indicator?: Indicator;
  /** The class of the finding. */
  findingClass?:
    | "FINDING_CLASS_UNSPECIFIED"
    | "THREAT"
    | "VULNERABILITY"
    | "MISCONFIGURATION"
    | "OBSERVATION"
    | "SCC_ERROR"
    | "POSTURE_VIOLATION"
    | "TOXIC_COMBINATION"
    | "SENSITIVE_DATA_RISK"
    | "CHOKEPOINT"
    | "EXTERNAL_EXPOSURE"
    | "SECRET"
    | (string & {});
  /** Log entries that are relevant to the finding. */
  logEntries?: ReadonlyArray<LogEntry>;
}

export const Finding: Schema.Schema<Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    moduleName: Schema.optional(Schema.String),
    kernelRootkit: Schema.optional(KernelRootkit),
    complianceDetails: Schema.optional(ComplianceDetails),
    parentDisplayName: Schema.optional(Schema.String),
    iamBindings: Schema.optional(Schema.Array(IamBinding)),
    discoveredWorkload: Schema.optional(DiscoveredWorkload),
    dataFlowEvents: Schema.optional(Schema.Array(DataFlowEvent)),
    canonicalName: Schema.optional(Schema.String),
    connections: Schema.optional(Schema.Array(Connection)),
    muteInfo: Schema.optional(MuteInfo),
    description: Schema.optional(Schema.String),
    application: Schema.optional(Application),
    vertexAi: Schema.optional(VertexAi),
    cloudArmor: Schema.optional(CloudArmor),
    compliances: Schema.optional(Schema.Array(Compliance)),
    loadBalancers: Schema.optional(Schema.Array(LoadBalancer)),
    externalUri: Schema.optional(Schema.String),
    access: Schema.optional(Access),
    policyViolationSummary: Schema.optional(PolicyViolationSummary),
    resourceName: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    kubernetes: Schema.optional(Kubernetes),
    externalExposure: Schema.optional(ExternalExposure),
    vulnerability: Schema.optional(Vulnerability),
    mute: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    database: Schema.optional(Database),
    securityPosture: Schema.optional(SecurityPosture),
    name: Schema.optional(Schema.String),
    securityMarks: Schema.optional(SecurityMarks),
    muteInitiator: Schema.optional(Schema.String),
    aiModel: Schema.optional(AiModel),
    cloudDlpInspection: Schema.optional(CloudDlpInspection),
    affectedResources: Schema.optional(AffectedResources),
    parent: Schema.optional(Schema.String),
    dataAccessEvents: Schema.optional(Schema.Array(DataAccessEvent)),
    disk: Schema.optional(Disk),
    containers: Schema.optional(Schema.Array(Container)),
    job: Schema.optional(Job),
    nextSteps: Schema.optional(Schema.String),
    artifactGuardPolicies: Schema.optional(ArtifactGuardPolicies),
    contacts: Schema.optional(Schema.Record(Schema.String, ContactDetails)),
    backupDisasterRecovery: Schema.optional(BackupDisasterRecovery),
    networks: Schema.optional(Schema.Array(Network)),
    secret: Schema.optional(Secret),
    chokepoint: Schema.optional(Chokepoint),
    orgPolicies: Schema.optional(Schema.Array(OrgPolicy)),
    ipRules: Schema.optional(IpRules),
    files: Schema.optional(Schema.Array(File)),
    groupMemberships: Schema.optional(Schema.Array(GroupMembership)),
    processes: Schema.optional(Schema.Array(Process)),
    mitreAttack: Schema.optional(MitreAttack),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV1ExternalSystem),
    ),
    attackExposure: Schema.optional(AttackExposure),
    cloudDlpDataProfile: Schema.optional(CloudDlpDataProfile),
    state: Schema.optional(Schema.String),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(DataRetentionDeletionEvent),
    ),
    muteUpdateTime: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    notebook: Schema.optional(Notebook),
    toxicCombination: Schema.optional(ToxicCombination),
    agentDataAccessEvents: Schema.optional(Schema.Array(AgentDataAccessEvent)),
    exfiltration: Schema.optional(Exfiltration),
    indicator: Schema.optional(Indicator),
    findingClass: Schema.optional(Schema.String),
    logEntries: Schema.optional(Schema.Array(LogEntry)),
  }).annotate({ identifier: "Finding" });

export interface GoogleCloudSecuritycenterV1NotificationMessage {
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: Finding;
  /** The Cloud resource tied to this notification's Finding. */
  resource?: GoogleCloudSecuritycenterV1Resource;
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
}

export const GoogleCloudSecuritycenterV1NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV1NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finding: Schema.optional(Finding),
    resource: Schema.optional(GoogleCloudSecuritycenterV1Resource),
    notificationConfigName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1NotificationMessage" });

export interface BigQueryDestination {
  /** Required. The relative resource name of the destination dataset, in the form projects/{projectId}/datasets/{datasetId}. */
  dataset?: string;
}

export const BigQueryDestination: Schema.Schema<BigQueryDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryDestination" });

export interface ExportFindingsMetadata {
  /** Optional. Timestamp at which export was started */
  exportStartTime?: string;
  /** Required. The destination BigQuery dataset to export findings to. */
  bigQueryDestination?: BigQueryDestination;
}

export const ExportFindingsMetadata: Schema.Schema<ExportFindingsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportStartTime: Schema.optional(Schema.String),
    bigQueryDestination: Schema.optional(BigQueryDestination),
  }).annotate({ identifier: "ExportFindingsMetadata" });

export interface GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
  /** Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
  displayName?: string;
  /** Output only. The effective state of enablement for the module at the given level of the hierarchy. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** The cloud provider of the custom module. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Output only. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}" */
  name?: string;
  /** Output only. The user-specified configuration for the module. */
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
}

export const GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule: Schema.Schema<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule",
  });

export interface GoogleCloudSecuritycenterV2ResourceValueConfig {
  /** Resource value level this expression represents Only required when there is no Sensitive Data Protection mapping in the request */
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing */
  tagValues?: ReadonlyArray<string>;
  /** Output only. Timestamp this resource value configuration was last updated. */
  updateTime?: string;
  /** Cloud provider this configuration applies to */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Identifier. Name for the resource value configuration */
  name?: string;
  /** Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources. */
  resourceType?: string;
  /** List of resource labels to search for, evaluated with `AND`. For example, "resource_labels_selector": {"key": "value", "env": "prod"} will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels */
  resourceLabelsSelector?: Record<string, string>;
  /** Output only. Timestamp this resource value configuration was created. */
  createTime?: string;
  /** Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope and will be checked with `AND` of other resources. */
  scope?: string;
  /** A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset". */
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping;
  /** Description of the resource value configuration. */
  description?: string;
}

export const GoogleCloudSecuritycenterV2ResourceValueConfig: Schema.Schema<GoogleCloudSecuritycenterV2ResourceValueConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceValue: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    createTime: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping,
    ),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceValueConfig" });

export interface GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
  /** The state of an asset discovery run. */
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  /** The duration between asset discovery run start and end */
  duration?: string;
}

export const GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse: Schema.Schema<GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse",
  });

export interface GroupAssetsResponse {
  /** Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear. */
  groupByResults?: ReadonlyArray<GroupResult>;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
  /** Time used for executing the groupBy request. */
  readTime?: string;
}

export const GroupAssetsResponse: Schema.Schema<GroupAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupByResults: Schema.optional(Schema.Array(GroupResult)),
    nextPageToken: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupAssetsResponse" });

export interface GoogleCloudSecuritycenterV2MuteConfig {
  /** Identifier. This field will be ignored if provided on config creation. The following list shows some examples of the format: + `organizations/{organization}/muteConfigs/{mute_config}` + `organizations/{organization}locations/{location}//muteConfigs/{mute_config}` + `folders/{folder}/muteConfigs/{mute_config}` + `folders/{folder}/locations/{location}/muteConfigs/{mute_config}` + `projects/{project}/muteConfigs/{mute_config}` + `projects/{project}/locations/{location}/muteConfigs/{mute_config}` */
  name?: string;
  /** Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. */
  updateTime?: string;
  /** Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. */
  createTime?: string;
  /** Required. The type of the mute config, which determines what type of mute state the config affects. Immutable after creation. */
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  /** Optional. The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings. */
  expiryTime?: string;
  /** A description of the mute config. */
  description?: string;
  /** Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:` */
  filter?: string;
  /** Output only. The resource name of the Cloud KMS `CryptoKey` used to encrypt this configuration data, if CMEK was enabled during Security Command Center activation. */
  cryptoKeyName?: string;
  /** Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. */
  mostRecentEditor?: string;
}

export const GoogleCloudSecuritycenterV2MuteConfig: Schema.Schema<GoogleCloudSecuritycenterV2MuteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteConfig" });

export interface GetIamPolicyRequest {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Schema<GetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface Source {
  /** The source's display name. A source's display name must be unique amongst its siblings, for example, two sources with the same parent can't share the same display name. The display name must have a length between 1 and 64 characters (inclusive). */
  displayName?: string;
  /** The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}" */
  name?: string;
  /** The description of the source (max of 1024 characters). Example: "Web Security Scanner is a web security scanner for common vulnerabilities in App Engine applications. It can automatically scan and detect four common vulnerabilities, including cross-site-scripting (XSS), Flash injection, mixed content (HTTP in HTTPS), and outdated/insecure libraries." */
  description?: string;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface ListSourcesResponse {
  /** Sources belonging to the requested parent. */
  sources?: ReadonlyArray<Source>;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListSourcesResponse: Schema.Schema<ListSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(Source)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSourcesResponse" });

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

export interface GetOrganizationSettingsOrganizationsRequest {
  /** Required. Name of the organization to get organization settings for. Its format is "organizations/[organization_id]/organizationSettings". */
  name: string;
}

export const GetOrganizationSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationSettingsOrganizationsRequest>;

export type GetOrganizationSettingsOrganizationsResponse = OrganizationSettings;
export const GetOrganizationSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OrganizationSettings;

export type GetOrganizationSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the settings for an organization. */
export const getOrganizationSettingsOrganizations: API.OperationMethod<
  GetOrganizationSettingsOrganizationsRequest,
  GetOrganizationSettingsOrganizationsResponse,
  GetOrganizationSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationSettingsOrganizationsRequest,
  output: GetOrganizationSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateOrganizationSettingsOrganizationsRequest {
  /** The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/organizationSettings". */
  name: string;
  /** The FieldMask to use when updating the settings resource. */
  updateMask?: string;
  /** Request body */
  body?: OrganizationSettings;
}

export const UpdateOrganizationSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(OrganizationSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateOrganizationSettingsOrganizationsRequest>;

export type UpdateOrganizationSettingsOrganizationsResponse =
  OrganizationSettings;
export const UpdateOrganizationSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OrganizationSettings;

export type UpdateOrganizationSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an organization's settings. */
export const updateOrganizationSettingsOrganizations: API.OperationMethod<
  UpdateOrganizationSettingsOrganizationsRequest,
  UpdateOrganizationSettingsOrganizationsResponse,
  UpdateOrganizationSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOrganizationSettingsOrganizationsRequest,
  output: UpdateOrganizationSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelOrganizationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOrganizationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOrganizationsOperationsRequest>;

export type CancelOrganizationsOperationsResponse = Empty;
export const CancelOrganizationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOrganizationsOperations: API.OperationMethod<
  CancelOrganizationsOperationsRequest,
  CancelOrganizationsOperationsResponse,
  CancelOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOrganizationsOperationsRequest,
  output: CancelOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListOrganizationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsOperationsRequest>;

export type ListOrganizationsOperationsResponse = ListOperationsResponse;
export const ListOrganizationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsOperationsRequest,
  ListOrganizationsOperationsResponse,
  ListOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsOperationsRequest,
  output: ListOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOrganizationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsOperationsRequest>;

export type DeleteOrganizationsOperationsResponse = Empty;
export const DeleteOrganizationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOrganizationsOperations: API.OperationMethod<
  DeleteOrganizationsOperationsRequest,
  DeleteOrganizationsOperationsResponse,
  DeleteOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsOperationsRequest,
  output: DeleteOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsOperationsRequest>;

export type GetOrganizationsOperationsResponse = Operation;
export const GetOrganizationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsOperations: API.OperationMethod<
  GetOrganizationsOperationsRequest,
  GetOrganizationsOperationsResponse,
  GetOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsOperationsRequest,
  output: GetOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsSourcesRequest {
  /** Required. Resource name of the parent of sources to list. Its format should be "organizations/[organization_id]". */
  parent: string;
  /** The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSourcesRequest>;

export type ListOrganizationsSourcesResponse = ListSourcesResponse;
export const ListOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSourcesResponse;

export type ListOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all sources belonging to an organization. */
export const listOrganizationsSources: API.PaginatedOperationMethod<
  ListOrganizationsSourcesRequest,
  ListOrganizationsSourcesResponse,
  ListOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSourcesRequest,
  output: ListOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyOrganizationsSourcesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyOrganizationsSourcesRequest>;

export type SetIamPolicyOrganizationsSourcesResponse = Policy;
export const SetIamPolicyOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified Source. */
export const setIamPolicyOrganizationsSources: API.OperationMethod<
  SetIamPolicyOrganizationsSourcesRequest,
  SetIamPolicyOrganizationsSourcesResponse,
  SetIamPolicyOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyOrganizationsSourcesRequest,
  output: SetIamPolicyOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsSourcesRequest {
  /** The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}" */
  name: string;
  /** The FieldMask to use when updating the source resource. */
  updateMask?: string;
  /** Request body */
  body?: Source;
}

export const PatchOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsSourcesRequest>;

export type PatchOrganizationsSourcesResponse = Source;
export const PatchOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

export type PatchOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a source. */
export const patchOrganizationsSources: API.OperationMethod<
  PatchOrganizationsSourcesRequest,
  PatchOrganizationsSourcesResponse,
  PatchOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSourcesRequest,
  output: PatchOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsSourcesRequest {
  /** Required. Resource name of the new source's parent. Its format should be "organizations/[organization_id]". */
  parent: string;
  /** Request body */
  body?: Source;
}

export const CreateOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/sources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsSourcesRequest>;

export type CreateOrganizationsSourcesResponse = Source;
export const CreateOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

export type CreateOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a source. */
export const createOrganizationsSources: API.OperationMethod<
  CreateOrganizationsSourcesRequest,
  CreateOrganizationsSourcesResponse,
  CreateOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsSourcesRequest,
  output: CreateOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsOrganizationsSourcesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsOrganizationsSourcesRequest>;

export type TestIamPermissionsOrganizationsSourcesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the permissions that a caller has on the specified source. */
export const testIamPermissionsOrganizationsSources: API.OperationMethod<
  TestIamPermissionsOrganizationsSourcesRequest,
  TestIamPermissionsOrganizationsSourcesResponse,
  TestIamPermissionsOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsOrganizationsSourcesRequest,
  output: TestIamPermissionsOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyOrganizationsSourcesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyOrganizationsSourcesRequest>;

export type GetIamPolicyOrganizationsSourcesResponse = Policy;
export const GetIamPolicyOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy on the specified Source. */
export const getIamPolicyOrganizationsSources: API.OperationMethod<
  GetIamPolicyOrganizationsSourcesRequest,
  GetIamPolicyOrganizationsSourcesResponse,
  GetIamPolicyOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyOrganizationsSourcesRequest,
  output: GetIamPolicyOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsSourcesRequest {
  /** Required. Relative resource name of the source. Its format is "organizations/[organization_id]/source/[source_id]". */
  name: string;
}

export const GetOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsSourcesRequest>;

export type GetOrganizationsSourcesResponse = Source;
export const GetOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

export type GetOrganizationsSourcesError = DefaultErrors | NotFound | Forbidden;

/** Gets a source. */
export const getOrganizationsSources: API.OperationMethod<
  GetOrganizationsSourcesRequest,
  GetOrganizationsSourcesResponse,
  GetOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsSourcesRequest,
  output: GetOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetStateOrganizationsSourcesFindingsRequest {
  /** Required. The relative resource name of the finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/finding/{finding_id}". */
  name: string;
  /** Request body */
  body?: SetFindingStateRequest;
}

export const SetStateOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetFindingStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:setState", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetStateOrganizationsSourcesFindingsRequest>;

export type SetStateOrganizationsSourcesFindingsResponse =
  GoogleCloudSecuritycenterV1beta1Finding;
export const SetStateOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1beta1Finding;

export type SetStateOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the state of a finding. */
export const setStateOrganizationsSourcesFindings: API.OperationMethod<
  SetStateOrganizationsSourcesFindingsRequest,
  SetStateOrganizationsSourcesFindingsResponse,
  SetStateOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetStateOrganizationsSourcesFindingsRequest,
  output: SetStateOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityMarksOrganizationsSourcesFindingsRequest {
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name: string;
  /** The FieldMask to use when updating the security marks resource. */
  updateMask?: string;
  /** The time at which the updated SecurityMarks take effect. */
  startTime?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
}

export const UpdateSecurityMarksOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    body: Schema.optional(GoogleCloudSecuritycenterV1beta1SecurityMarks).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityMarksOrganizationsSourcesFindingsRequest>;

export type UpdateSecurityMarksOrganizationsSourcesFindingsResponse =
  GoogleCloudSecuritycenterV1beta1SecurityMarks;
export const UpdateSecurityMarksOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1beta1SecurityMarks;

export type UpdateSecurityMarksOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates security marks. */
export const updateSecurityMarksOrganizationsSourcesFindings: API.OperationMethod<
  UpdateSecurityMarksOrganizationsSourcesFindingsRequest,
  UpdateSecurityMarksOrganizationsSourcesFindingsResponse,
  UpdateSecurityMarksOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksOrganizationsSourcesFindingsRequest,
  output: UpdateSecurityMarksOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupOrganizationsSourcesFindingsRequest {
  /** Required. Name of the source to groupBy. Its format is "organizations/[organization_id]/sources/[source_id]". To groupBy across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/- */
  parent: string;
  /** Request body */
  body?: GroupFindingsRequest;
}

export const GroupOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/findings:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GroupOrganizationsSourcesFindingsRequest>;

export type GroupOrganizationsSourcesFindingsResponse = GroupFindingsResponse;
export const GroupOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupFindingsResponse;

export type GroupOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings */
export const groupOrganizationsSourcesFindings: API.OperationMethod<
  GroupOrganizationsSourcesFindingsRequest,
  GroupOrganizationsSourcesFindingsResponse,
  GroupOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GroupOrganizationsSourcesFindingsRequest,
  output: GroupOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsSourcesFindingsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of the source the findings belong to. Its format is "organizations/[organization_id]/sources/[source_id]". To list across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/- */
  parent: string;
  /** Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `source_properties.size = 100` is a valid filter string. */
  filter?: string;
  /** Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. */
  orderBy?: string;
  /** Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** Optional. A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields. */
  fieldMask?: string;
  /** The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSourcesFindingsRequest>;

export type ListOrganizationsSourcesFindingsResponse = ListFindingsResponse;
export const ListOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingsResponse;

export type ListOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings */
export const listOrganizationsSourcesFindings: API.PaginatedOperationMethod<
  ListOrganizationsSourcesFindingsRequest,
  ListOrganizationsSourcesFindingsResponse,
  ListOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSourcesFindingsRequest,
  output: ListOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsSourcesFindingsRequest {
  /** Required. Resource name of the new finding's parent. Its format should be "organizations/[organization_id]/sources/[source_id]". */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length. */
  findingId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1beta1Finding;
}

export const CreateOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    findingId: Schema.optional(Schema.String).pipe(T.HttpQuery("findingId")),
    body: Schema.optional(GoogleCloudSecuritycenterV1beta1Finding).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/findings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsSourcesFindingsRequest>;

export type CreateOrganizationsSourcesFindingsResponse =
  GoogleCloudSecuritycenterV1beta1Finding;
export const CreateOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1beta1Finding;

export type CreateOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a finding. The corresponding source must exist for finding creation to succeed. */
export const createOrganizationsSourcesFindings: API.OperationMethod<
  CreateOrganizationsSourcesFindingsRequest,
  CreateOrganizationsSourcesFindingsResponse,
  CreateOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsSourcesFindingsRequest,
  output: CreateOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsSourcesFindingsRequest {
  /** The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}" */
  name: string;
  /** The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1beta1Finding;
}

export const PatchOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1beta1Finding).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsSourcesFindingsRequest>;

export type PatchOrganizationsSourcesFindingsResponse =
  GoogleCloudSecuritycenterV1beta1Finding;
export const PatchOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1beta1Finding;

export type PatchOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates a finding. The corresponding source must exist for a finding creation to succeed. */
export const patchOrganizationsSourcesFindings: API.OperationMethod<
  PatchOrganizationsSourcesFindingsRequest,
  PatchOrganizationsSourcesFindingsResponse,
  PatchOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSourcesFindingsRequest,
  output: PatchOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunDiscoveryOrganizationsAssetsRequest {
  /** Required. Name of the organization to run asset discovery for. Its format is "organizations/[organization_id]". */
  parent: string;
  /** Request body */
  body?: RunAssetDiscoveryRequest;
}

export const RunDiscoveryOrganizationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RunAssetDiscoveryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/assets:runDiscovery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunDiscoveryOrganizationsAssetsRequest>;

export type RunDiscoveryOrganizationsAssetsResponse = Operation;
export const RunDiscoveryOrganizationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunDiscoveryOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error. */
export const runDiscoveryOrganizationsAssets: API.OperationMethod<
  RunDiscoveryOrganizationsAssetsRequest,
  RunDiscoveryOrganizationsAssetsResponse,
  RunDiscoveryOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunDiscoveryOrganizationsAssetsRequest,
  output: RunDiscoveryOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupOrganizationsAssetsRequest {
  /** Required. Name of the organization to groupBy. Its format is "organizations/[organization_id]". */
  parent: string;
  /** Request body */
  body?: GroupAssetsRequest;
}

export const GroupOrganizationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/assets:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GroupOrganizationsAssetsRequest>;

export type GroupOrganizationsAssetsResponse = GroupAssetsResponse;
export const GroupOrganizationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupAssetsResponse;

export type GroupOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Filters an organization's assets and groups them by their specified properties. */
export const groupOrganizationsAssets: API.OperationMethod<
  GroupOrganizationsAssetsRequest,
  GroupOrganizationsAssetsResponse,
  GroupOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GroupOrganizationsAssetsRequest,
  output: GroupOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityMarksOrganizationsAssetsRequest {
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name: string;
  /** The FieldMask to use when updating the security marks resource. */
  updateMask?: string;
  /** The time at which the updated SecurityMarks take effect. */
  startTime?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
}

export const UpdateSecurityMarksOrganizationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    body: Schema.optional(GoogleCloudSecuritycenterV1beta1SecurityMarks).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityMarksOrganizationsAssetsRequest>;

export type UpdateSecurityMarksOrganizationsAssetsResponse =
  GoogleCloudSecuritycenterV1beta1SecurityMarks;
export const UpdateSecurityMarksOrganizationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1beta1SecurityMarks;

export type UpdateSecurityMarksOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates security marks. */
export const updateSecurityMarksOrganizationsAssets: API.OperationMethod<
  UpdateSecurityMarksOrganizationsAssetsRequest,
  UpdateSecurityMarksOrganizationsAssetsResponse,
  UpdateSecurityMarksOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksOrganizationsAssetsRequest,
  output: UpdateSecurityMarksOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsAssetsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** When compare_duration is set, the ListAssetResult's "state" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state" values when compare_duration is specified: * "ADDED": indicates that the asset was not present before compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state is "UNUSED", which indicates that the asset is present at read_time. */
  compareDuration?: string;
  /** Required. Name of the organization assets should belong to. Its format is "organizations/[organization_id]". */
  parent: string;
  /** Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `resource_properties.size = 100` is a valid filter string. */
  filter?: string;
  /** Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. */
  orderBy?: string;
  /** Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** Optional. A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields. */
  fieldMask?: string;
  /** The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListOrganizationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsAssetsRequest>;

export type ListOrganizationsAssetsResponse = ListAssetsResponse;
export const ListOrganizationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAssetsResponse;

export type ListOrganizationsAssetsError = DefaultErrors | NotFound | Forbidden;

/** Lists an organization's assets. */
export const listOrganizationsAssets: API.PaginatedOperationMethod<
  ListOrganizationsAssetsRequest,
  ListOrganizationsAssetsResponse,
  ListOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsAssetsRequest,
  output: ListOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
