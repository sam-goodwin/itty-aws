// ==========================================================================
// Cloud Asset API (cloudasset v1p1beta1)
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
  name: "cloudasset",
  version: "v1p1beta1",
  rootUrl: "https://cloudasset.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudAssetV1p7beta1RelationshipAttributes {
  /** The source asset type. Example: `compute.googleapis.com/Instance` */
  sourceResourceType?: string;
  /** The detail of the relationship, e.g. `contains`, `attaches` */
  action?: string;
  /** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
  type?: string;
  /** The target asset type. Example: `compute.googleapis.com/Disk` */
  targetResourceType?: string;
}

export const GoogleCloudAssetV1p7beta1RelationshipAttributes: Schema.Schema<GoogleCloudAssetV1p7beta1RelationshipAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceResourceType: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    targetResourceType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssetV1p7beta1RelationshipAttributes",
  });

export interface GoogleIdentityAccesscontextmanagerV1OsConstraint {
  /** Required. The allowed OS type. */
  osType?:
    | "OS_UNSPECIFIED"
    | "DESKTOP_MAC"
    | "DESKTOP_WINDOWS"
    | "DESKTOP_LINUX"
    | "DESKTOP_CHROME_OS"
    | "ANDROID"
    | "IOS"
    | (string & {});
  /** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
  minimumVersion?: string;
  /** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
  requireVerifiedChromeOs?: boolean;
}

export const GoogleIdentityAccesscontextmanagerV1OsConstraint: Schema.Schema<GoogleIdentityAccesscontextmanagerV1OsConstraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osType: Schema.optional(Schema.String),
    minimumVersion: Schema.optional(Schema.String),
    requireVerifiedChromeOs: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1OsConstraint",
  });

export interface GoogleIdentityAccesscontextmanagerV1DevicePolicy {
  /** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
  requireScreenlock?: boolean;
  /** Allowed OS versions, an empty list allows all types and all versions. */
  osConstraints?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1OsConstraint>;
  /** Whether the device needs to be approved by the customer admin. */
  requireAdminApproval?: boolean;
  /** Allowed encryptions statuses, an empty list allows all statuses. */
  allowedEncryptionStatuses?: ReadonlyArray<
    | "ENCRYPTION_UNSPECIFIED"
    | "ENCRYPTION_UNSUPPORTED"
    | "UNENCRYPTED"
    | "ENCRYPTED"
    | (string & {})
  >;
  /** Whether the device needs to be corp owned. */
  requireCorpOwned?: boolean;
  /** Allowed device management levels, an empty list allows all management levels. */
  allowedDeviceManagementLevels?: ReadonlyArray<
    "MANAGEMENT_UNSPECIFIED" | "NONE" | "BASIC" | "COMPLETE" | (string & {})
  >;
}

export const GoogleIdentityAccesscontextmanagerV1DevicePolicy: Schema.Schema<GoogleIdentityAccesscontextmanagerV1DevicePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requireScreenlock: Schema.optional(Schema.Boolean),
    osConstraints: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1OsConstraint),
    ),
    requireAdminApproval: Schema.optional(Schema.Boolean),
    allowedEncryptionStatuses: Schema.optional(Schema.Array(Schema.String)),
    requireCorpOwned: Schema.optional(Schema.Boolean),
    allowedDeviceManagementLevels: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1DevicePolicy",
  });

export interface GoogleIdentityAccesscontextmanagerV1VpcSubNetwork {
  /** CIDR block IP subnetwork specification. The IP address must be an IPv4 address and can be a public or private IP address. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. If empty, all IP addresses are allowed. */
  vpcIpSubnetworks?: ReadonlyArray<string>;
  /** Required. Network name. If the network is not part of the organization, the `compute.network.get` permission must be granted to the caller. Format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}` Example: `//compute.googleapis.com/projects/my-project/global/networks/network-1` */
  network?: string;
}

export const GoogleIdentityAccesscontextmanagerV1VpcSubNetwork: Schema.Schema<GoogleIdentityAccesscontextmanagerV1VpcSubNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcIpSubnetworks: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1VpcSubNetwork",
  });

export interface GoogleIdentityAccesscontextmanagerV1VpcNetworkSource {
  /** Sub-segment ranges of a VPC network. */
  vpcSubnetwork?: GoogleIdentityAccesscontextmanagerV1VpcSubNetwork;
}

export const GoogleIdentityAccesscontextmanagerV1VpcNetworkSource: Schema.Schema<GoogleIdentityAccesscontextmanagerV1VpcNetworkSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcSubnetwork: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1VpcSubNetwork,
    ),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1VpcNetworkSource",
  });

export interface GoogleIdentityAccesscontextmanagerV1Condition {
  /** Device specific restrictions, all restrictions must hold for the Condition to be true. If not specified, all devices are allowed. */
  devicePolicy?: GoogleIdentityAccesscontextmanagerV1DevicePolicy;
  /** The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user. */
  members?: ReadonlyArray<string>;
  /** The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes. */
  regions?: ReadonlyArray<string>;
  /** CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32" is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed. */
  ipSubnetworks?: ReadonlyArray<string>;
  /** The request must originate from one of the provided VPC networks in Google Cloud. Cannot specify this field together with `ip_subnetworks`. */
  vpcNetworkSources?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1VpcNetworkSource>;
  /** A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"` */
  requiredAccessLevels?: ReadonlyArray<string>;
  /** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields. Any non-empty field criteria evaluating to false will result in the Condition to be satisfied. Defaults to false. */
  negate?: boolean;
}

export const GoogleIdentityAccesscontextmanagerV1Condition: Schema.Schema<GoogleIdentityAccesscontextmanagerV1Condition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devicePolicy: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1DevicePolicy,
    ),
    members: Schema.optional(Schema.Array(Schema.String)),
    regions: Schema.optional(Schema.Array(Schema.String)),
    ipSubnetworks: Schema.optional(Schema.Array(Schema.String)),
    vpcNetworkSources: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1VpcNetworkSource),
    ),
    requiredAccessLevels: Schema.optional(Schema.Array(Schema.String)),
    negate: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleIdentityAccesscontextmanagerV1Condition" });

export interface GoogleIdentityAccesscontextmanagerV1BasicLevel {
  /** Required. A list of requirements for the `AccessLevel` to be granted. */
  conditions?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1Condition>;
  /** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
  combiningFunction?: "AND" | "OR" | (string & {});
}

export const GoogleIdentityAccesscontextmanagerV1BasicLevel: Schema.Schema<GoogleIdentityAccesscontextmanagerV1BasicLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1Condition),
    ),
    combiningFunction: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIdentityAccesscontextmanagerV1BasicLevel" });

export interface GoogleIdentityAccesscontextmanagerV1EgressSource {
  /** A Google Cloud resource from the service perimeter that you want to allow to access data outside the perimeter. This field supports only projects. The project format is `projects/{project_number}`. You can't use `*` in this field to allow all Google Cloud resources. */
  resource?: string;
  /** An AccessLevel resource name that allows protected resources inside the ServicePerimeters to access outside the ServicePerimeter boundaries. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If an AccessLevel name is not specified, only resources within the perimeter can be accessed through Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all EgressSources will be allowed. */
  accessLevel?: string;
}

export const GoogleIdentityAccesscontextmanagerV1EgressSource: Schema.Schema<GoogleIdentityAccesscontextmanagerV1EgressSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    accessLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1EgressSource",
  });

export interface GoogleIdentityAccesscontextmanagerV1EgressFrom {
  /** Sources that this EgressPolicy authorizes access from. If this field is not empty, then `source_restriction` must be set to `SOURCE_RESTRICTION_ENABLED`. */
  sources?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1EgressSource>;
  /** A list of identities that are allowed access through [EgressPolicy]. Identities can be an individual user, service account, Google group, third-party identity, or agent identity. For the list of supported identity types, see https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities. */
  identities?: ReadonlyArray<string>;
  /** Whether to enforce traffic restrictions based on `sources` field. If the `sources` fields is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`. */
  sourceRestriction?:
    | "SOURCE_RESTRICTION_UNSPECIFIED"
    | "SOURCE_RESTRICTION_ENABLED"
    | "SOURCE_RESTRICTION_DISABLED"
    | (string & {});
  /** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
  identityType?:
    | "IDENTITY_TYPE_UNSPECIFIED"
    | "ANY_IDENTITY"
    | "ANY_USER_ACCOUNT"
    | "ANY_SERVICE_ACCOUNT"
    | (string & {});
}

export const GoogleIdentityAccesscontextmanagerV1EgressFrom: Schema.Schema<GoogleIdentityAccesscontextmanagerV1EgressFrom> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1EgressSource),
    ),
    identities: Schema.optional(Schema.Array(Schema.String)),
    sourceRestriction: Schema.optional(Schema.String),
    identityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIdentityAccesscontextmanagerV1EgressFrom" });

export interface GoogleIdentityAccesscontextmanagerV1MethodSelector {
  /** A valid method name for the corresponding `service_name` in ApiOperation. If `*` is used as the value for the `method`, then ALL methods and permissions are allowed. */
  method?: string;
  /** A valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
  permission?: string;
}

export const GoogleIdentityAccesscontextmanagerV1MethodSelector: Schema.Schema<GoogleIdentityAccesscontextmanagerV1MethodSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    permission: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1MethodSelector",
  });

export interface GoogleIdentityAccesscontextmanagerV1ApiOperation {
  /** API methods or permissions to allow. Method or permission must belong to the service specified by `service_name` field. A single MethodSelector entry with `*` specified for the `method` field will allow all methods AND permissions for the service specified in `service_name`. */
  methodSelectors?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1MethodSelector>;
  /** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
  serviceName?: string;
}

export const GoogleIdentityAccesscontextmanagerV1ApiOperation: Schema.Schema<GoogleIdentityAccesscontextmanagerV1ApiOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    methodSelectors: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1MethodSelector),
    ),
    serviceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1ApiOperation",
  });

export interface GoogleIdentityAccesscontextmanagerV1EgressTo {
  /** A list of resources, currently only projects in the form `projects/`, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If `*` is specified for `resources`, then this EgressTo rule will authorize access to all resources outside the perimeter. */
  resources?: ReadonlyArray<string>;
  /** A list of external resources that are allowed to be accessed. Only AWS and Azure resources are supported. For Amazon S3, the supported formats are s3://BUCKET_NAME, s3a://BUCKET_NAME, and s3n://BUCKET_NAME. For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/CONTAINER_NAME. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently '*' is not allowed. */
  externalResources?: ReadonlyArray<string>;
  /** IAM roles that represent the set of operations that the sources specified in the corresponding EgressFrom. are allowed to perform in this ServicePerimeter. */
  roles?: ReadonlyArray<string>;
  /** A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list. */
  operations?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1ApiOperation>;
}

export const GoogleIdentityAccesscontextmanagerV1EgressTo: Schema.Schema<GoogleIdentityAccesscontextmanagerV1EgressTo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Schema.String)),
    externalResources: Schema.optional(Schema.Array(Schema.String)),
    roles: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1ApiOperation),
    ),
  }).annotate({ identifier: "GoogleIdentityAccesscontextmanagerV1EgressTo" });

export interface GoogleIdentityAccesscontextmanagerV1EgressPolicy {
  /** Defines conditions on the source of a request causing this EgressPolicy to apply. */
  egressFrom?: GoogleIdentityAccesscontextmanagerV1EgressFrom;
  /** Defines the conditions on the ApiOperation and destination resources that cause this EgressPolicy to apply. */
  egressTo?: GoogleIdentityAccesscontextmanagerV1EgressTo;
  /** Optional. Human-readable title for the egress rule. The title must be unique within the perimeter and can not exceed 100 characters. Within the access policy, the combined length of all rule titles must not exceed 240,000 characters. */
  title?: string;
}

export const GoogleIdentityAccesscontextmanagerV1EgressPolicy: Schema.Schema<GoogleIdentityAccesscontextmanagerV1EgressPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    egressFrom: Schema.optional(GoogleIdentityAccesscontextmanagerV1EgressFrom),
    egressTo: Schema.optional(GoogleIdentityAccesscontextmanagerV1EgressTo),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1EgressPolicy",
  });

export interface StandardResourceMetadata {
  /** Network tags associated with this resource. Like labels, network tags are a type of annotations used to group Google Cloud resources. See [Labelling Google Cloud resources](lhttps://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. */
  networkTags?: ReadonlyArray<string>;
  /** One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes. */
  description?: string;
  /** The full resource name. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
  name?: string;
  /** The project that this resource belongs to, in the form of `projects/{project_number}`. */
  project?: string;
  /** Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc. */
  additionalAttributes?: ReadonlyArray<string>;
  /** The type of this resource. For example: "compute.googleapis.com/Disk". */
  assetType?: string;
  /** Labels associated with this resource. See [Labelling and grouping Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information. */
  labels?: Record<string, string>;
  /** The display name of this resource. */
  displayName?: string;
  /** Location can be "global", regional like "us-east1", or zonal like "us-west1-b". */
  location?: string;
}

export const StandardResourceMetadata: Schema.Schema<StandardResourceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkTags: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    additionalAttributes: Schema.optional(Schema.Array(Schema.String)),
    assetType: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "StandardResourceMetadata" });

export interface SearchAllResourcesResponse {
  /** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** A list of resource that match the search query. */
  results?: ReadonlyArray<StandardResourceMetadata>;
}

export const SearchAllResourcesResponse: Schema.Schema<SearchAllResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(StandardResourceMetadata)),
  }).annotate({ identifier: "SearchAllResourcesResponse" });

export interface GoogleCloudOrgpolicyV1BooleanPolicy {
  /** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
  enforced?: boolean;
}

export const GoogleCloudOrgpolicyV1BooleanPolicy: Schema.Schema<GoogleCloudOrgpolicyV1BooleanPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enforced: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV1BooleanPolicy" });

export interface GoogleIdentityAccesscontextmanagerV1IngressTo {
  /** A list of ApiOperations allowed to be performed by the sources specified in corresponding IngressFrom in this ServicePerimeter. */
  operations?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1ApiOperation>;
  /** IAM roles that represent the set of operations that the sources specified in the corresponding IngressFrom are allowed to perform in this ServicePerimeter. */
  roles?: ReadonlyArray<string>;
  /** A list of resources, currently only projects in the form `projects/`, protected by this ServicePerimeter that are allowed to be accessed by sources defined in the corresponding IngressFrom. If a single `*` is specified, then access to all resources inside the perimeter are allowed. */
  resources?: ReadonlyArray<string>;
}

export const GoogleIdentityAccesscontextmanagerV1IngressTo: Schema.Schema<GoogleIdentityAccesscontextmanagerV1IngressTo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1ApiOperation),
    ),
    roles: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIdentityAccesscontextmanagerV1IngressTo" });

export interface GoogleIdentityAccesscontextmanagerV1IngressSource {
  /** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
  resource?: string;
  /** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
  accessLevel?: string;
}

export const GoogleIdentityAccesscontextmanagerV1IngressSource: Schema.Schema<GoogleIdentityAccesscontextmanagerV1IngressSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    accessLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1IngressSource",
  });

export interface GoogleCloudAssetV1p7beta1RelatedAsset {
  /** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
  asset?: string;
  /** The ancestors of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
  ancestors?: ReadonlyArray<string>;
  /** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
  assetType?: string;
}

export const GoogleCloudAssetV1p7beta1RelatedAsset: Schema.Schema<GoogleCloudAssetV1p7beta1RelatedAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asset: Schema.optional(Schema.String),
    ancestors: Schema.optional(Schema.Array(Schema.String)),
    assetType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssetV1p7beta1RelatedAsset" });

export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices {
  /** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
  enableRestriction?: boolean;
  /** The list of APIs usable within the Service Perimeter. Must be empty unless 'enable_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter. */
  allowedServices?: ReadonlyArray<string>;
}

export const GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices: Schema.Schema<GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableRestriction: Schema.optional(Schema.Boolean),
    allowedServices: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices",
  });

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

export interface AuditConfig {
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
}

export const AuditConfig: Schema.Schema<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuditConfig" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleIdentityAccesscontextmanagerV1AccessPolicy {
  /** The scopes of the AccessPolicy. Scopes define which resources a policy can restrict and where its resources can be referenced. For example, policy A with `scopes=["folders/123"]` has the following behavior: - ServicePerimeter can only restrict projects within `folders/123`. - ServicePerimeter within policy A can only reference access levels defined within policy A. - Only one policy can include a given scope; thus, attempting to create a second policy which includes `folders/123` will result in an error. If no scopes are provided, then any resource within the organization can be restricted. Scopes cannot be modified after a policy is created. Policies can only have a single scope. Format: list of `folders/{folder_number}` or `projects/{project_number}` */
  scopes?: ReadonlyArray<string>;
  /** Output only. Identifier. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
  name?: string;
  /** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
  parent?: string;
  /** Required. Human readable title. Does not affect behavior. */
  title?: string;
  /** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Policies will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
  etag?: string;
}

export const GoogleIdentityAccesscontextmanagerV1AccessPolicy: Schema.Schema<GoogleIdentityAccesscontextmanagerV1AccessPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1AccessPolicy",
  });

export interface GoogleCloudOrgpolicyV1ListPolicy {
  /** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
  inheritFromParent?: boolean;
  /** List of values allowed at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
  allowedValues?: ReadonlyArray<string>;
  /** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
  suggestedValue?: string;
  /** List of values denied at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
  deniedValues?: ReadonlyArray<string>;
  /** The policy all_values state. */
  allValues?: "ALL_VALUES_UNSPECIFIED" | "ALLOW" | "DENY" | (string & {});
}

export const GoogleCloudOrgpolicyV1ListPolicy: Schema.Schema<GoogleCloudOrgpolicyV1ListPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inheritFromParent: Schema.optional(Schema.Boolean),
    allowedValues: Schema.optional(Schema.Array(Schema.String)),
    suggestedValue: Schema.optional(Schema.String),
    deniedValues: Schema.optional(Schema.Array(Schema.String)),
    allValues: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV1ListPolicy" });

export interface Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface Permissions {
  /** A list of permissions. Example permission string: "compute.disk.get". */
  permissions?: ReadonlyArray<string>;
}

export const Permissions: Schema.Schema<Permissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Permissions" });

export interface Explanation {
  /** The map from roles to their included permission matching the permission query (e.g. containing `policy.role.permissions:`). Example role string: "roles/compute.instanceAdmin". The roles can also be found in the returned `policy` bindings. Note that the map is populated only if requesting with a permission query. */
  matchedPermissions?: Record<string, Permissions>;
}

export const Explanation: Schema.Schema<Explanation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchedPermissions: Schema.optional(
      Schema.Record(Schema.String, Permissions),
    ),
  }).annotate({ identifier: "Explanation" });

export interface IamPolicySearchResult {
  /** The IAM policy attached to the specified resource. Note that the original IAM policy can contain multiple bindings. This only contains the bindings that match the given query. For queries that don't contain a constraint on policies (e.g. an empty query), this contains all the bindings. */
  policy?: Policy;
  /** The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the resource associated with this IAM policy. */
  resource?: string;
  /** Explanation about the IAM policy search result. It contains additional information that explains why the search result matches the query. */
  explanation?: Explanation;
  /** The project that the associated Google Cloud resource belongs to, in the form of `projects/{project_number}`. If an IAM policy is set on a resource -- such as a Compute Engine instance or a Cloud Storage bucket -- the project field will indicate the project that contains the resource. If an IAM policy is set on a folder or organization, the project field will be empty. */
  project?: string;
}

export const IamPolicySearchResult: Schema.Schema<IamPolicySearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    resource: Schema.optional(Schema.String),
    explanation: Schema.optional(Explanation),
    project: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamPolicySearchResult" });

export interface SearchAllIamPoliciesResponse {
  /** A list of IAM policies that match the search query. Related information such as the associated resource is returned along with the policy. */
  results?: ReadonlyArray<IamPolicySearchResult>;
  /** Set if there are more results than those appearing in this response; to get the next set of results, call this method again, using this value as the `page_token`. */
  nextPageToken?: string;
}

export const SearchAllIamPoliciesResponse: Schema.Schema<SearchAllIamPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(IamPolicySearchResult)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchAllIamPoliciesResponse" });

export interface GoogleIdentityAccesscontextmanagerV1CustomLevel {
  /** Required. A Cloud CEL expression evaluating to a boolean. */
  expr?: Expr;
}

export const GoogleIdentityAccesscontextmanagerV1CustomLevel: Schema.Schema<GoogleIdentityAccesscontextmanagerV1CustomLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expr: Schema.optional(Expr),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1CustomLevel",
  });

export interface GoogleCloudAssetV1p7beta1Resource {
  /** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
  discoveryName?: string;
  /** The API version. Example: `v1` */
  version?: string;
  /** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
  discoveryDocumentUri?: string;
  /** The content of the resource, in which some sensitive fields are removed and may not be present. */
  data?: Record<string, unknown>;
  /** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
  resourceUrl?: string;
  /** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
  parent?: string;
  /** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
  location?: string;
}

export const GoogleCloudAssetV1p7beta1Resource: Schema.Schema<GoogleCloudAssetV1p7beta1Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    discoveryDocumentUri: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    resourceUrl: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssetV1p7beta1Resource" });

export interface AnalyzeIamPolicyLongrunningResponse {}

export const AnalyzeIamPolicyLongrunningResponse: Schema.Schema<AnalyzeIamPolicyLongrunningResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AnalyzeIamPolicyLongrunningResponse",
  });

export interface GoogleCloudAssetV1p7beta1RelatedAssets {
  /** The detailed relation attributes. */
  relationshipAttributes?: GoogleCloudAssetV1p7beta1RelationshipAttributes;
  /** The peer resources of the relationship. */
  assets?: ReadonlyArray<GoogleCloudAssetV1p7beta1RelatedAsset>;
}

export const GoogleCloudAssetV1p7beta1RelatedAssets: Schema.Schema<GoogleCloudAssetV1p7beta1RelatedAssets> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relationshipAttributes: Schema.optional(
      GoogleCloudAssetV1p7beta1RelationshipAttributes,
    ),
    assets: Schema.optional(
      Schema.Array(GoogleCloudAssetV1p7beta1RelatedAsset),
    ),
  }).annotate({ identifier: "GoogleCloudAssetV1p7beta1RelatedAssets" });

export interface GoogleIdentityAccesscontextmanagerV1IngressFrom {
  /** Sources that this IngressPolicy authorizes access from. */
  sources?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1IngressSource>;
  /** A list of identities that are allowed access through [IngressPolicy]. Identities can be an individual user, service account, Google group, third-party identity, or agent identity. For the list of supported identity types, see https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities. */
  identities?: ReadonlyArray<string>;
  /** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
  identityType?:
    | "IDENTITY_TYPE_UNSPECIFIED"
    | "ANY_IDENTITY"
    | "ANY_USER_ACCOUNT"
    | "ANY_SERVICE_ACCOUNT"
    | (string & {});
}

export const GoogleIdentityAccesscontextmanagerV1IngressFrom: Schema.Schema<GoogleIdentityAccesscontextmanagerV1IngressFrom> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1IngressSource),
    ),
    identities: Schema.optional(Schema.Array(Schema.String)),
    identityType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1IngressFrom",
  });

export interface GoogleIdentityAccesscontextmanagerV1IngressPolicy {
  /** Defines the conditions on the source of a request causing this IngressPolicy to apply. */
  ingressFrom?: GoogleIdentityAccesscontextmanagerV1IngressFrom;
  /** Optional. Human-readable title for the ingress rule. The title must be unique within the perimeter and can not exceed 100 characters. Within the access policy, the combined length of all rule titles must not exceed 240,000 characters. */
  title?: string;
  /** Defines the conditions on the ApiOperation and request destination that cause this IngressPolicy to apply. */
  ingressTo?: GoogleIdentityAccesscontextmanagerV1IngressTo;
}

export const GoogleIdentityAccesscontextmanagerV1IngressPolicy: Schema.Schema<GoogleIdentityAccesscontextmanagerV1IngressPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingressFrom: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1IngressFrom,
    ),
    title: Schema.optional(Schema.String),
    ingressTo: Schema.optional(GoogleIdentityAccesscontextmanagerV1IngressTo),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1IngressPolicy",
  });

export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig {
  /** A list of Google Cloud resources that are inside of the service perimeter. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. */
  resources?: ReadonlyArray<string>;
  /** Configuration for APIs allowed within Perimeter. */
  vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
  /** List of IngressPolicies to apply to the perimeter. A perimeter may have multiple IngressPolicies, each of which is evaluated separately. Access is granted if any Ingress Policy grants it. Must be empty for a perimeter bridge. */
  ingressPolicies?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1IngressPolicy>;
  /** List of EgressPolicies to apply to the perimeter. A perimeter may have multiple EgressPolicies, each of which is evaluated separately. Access is granted if any EgressPolicy grants it. Must be empty for a perimeter bridge. */
  egressPolicies?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1EgressPolicy>;
  /** A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty. */
  accessLevels?: ReadonlyArray<string>;
  /** Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions. */
  restrictedServices?: ReadonlyArray<string>;
}

export const GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig: Schema.Schema<GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Schema.String)),
    vpcAccessibleServices: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices,
    ),
    ingressPolicies: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1IngressPolicy),
    ),
    egressPolicies: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1EgressPolicy),
    ),
    accessLevels: Schema.optional(Schema.Array(Schema.String)),
    restrictedServices: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig",
  });

export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeter {
  /** Optional. An opaque identifier for the current version of the `ServicePerimeter`. This identifier does not follow any specific format. If an etag is not provided, the operation will be performed as if a valid etag is provided. */
  etag?: string;
  /** Human readable title. Must be unique within the Policy. */
  title?: string;
  /** Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
  perimeterType?:
    | "PERIMETER_TYPE_REGULAR"
    | "PERIMETER_TYPE_BRIDGE"
    | (string & {});
  /** Current ServicePerimeter configuration. Specifies sets of resources, restricted services and access levels that determine perimeter content and boundaries. */
  status?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;
  /** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
  useExplicitDryRunSpec?: boolean;
  /** Identifier. Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
  name?: string;
  /** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
  description?: string;
  /** Proposed (or dry run) ServicePerimeter configuration. This configuration allows to specify and test ServicePerimeter configuration without enforcing actual access restrictions. Only allowed to be set when the "use_explicit_dry_run_spec" flag is set. */
  spec?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;
}

export const GoogleIdentityAccesscontextmanagerV1ServicePerimeter: Schema.Schema<GoogleIdentityAccesscontextmanagerV1ServicePerimeter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    perimeterType: Schema.optional(Schema.String),
    status: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig,
    ),
    useExplicitDryRunSpec: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    spec: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig,
    ),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1ServicePerimeter",
  });

export interface GoogleIdentityAccesscontextmanagerV1AccessLevel {
  /** Identifier. Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. */
  name?: string;
  /** A `BasicLevel` composed of `Conditions`. */
  basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;
  /** Description of the `AccessLevel` and its use. Does not affect behavior. */
  description?: string;
  /** A `CustomLevel` written in the Common Expression Language. */
  custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;
  /** Human readable title. Must be unique within the Policy. */
  title?: string;
}

export const GoogleIdentityAccesscontextmanagerV1AccessLevel: Schema.Schema<GoogleIdentityAccesscontextmanagerV1AccessLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    basic: Schema.optional(GoogleIdentityAccesscontextmanagerV1BasicLevel),
    description: Schema.optional(Schema.String),
    custom: Schema.optional(GoogleIdentityAccesscontextmanagerV1CustomLevel),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1AccessLevel",
  });

export interface GoogleCloudOrgpolicyV1RestoreDefault {}

export const GoogleCloudOrgpolicyV1RestoreDefault: Schema.Schema<GoogleCloudOrgpolicyV1RestoreDefault> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudOrgpolicyV1RestoreDefault",
  });

export interface GoogleCloudOrgpolicyV1Policy {
  /** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
  updateTime?: string;
  /** Restores the default behavior of the constraint; independent of `Constraint` type. */
  restoreDefault?: GoogleCloudOrgpolicyV1RestoreDefault;
  /** Version of the `Policy`. Default version is 0; */
  version?: number;
  /** List of values either allowed or disallowed. */
  listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;
  /** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
  constraint?: string;
  /** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
  etag?: string;
  /** For boolean `Constraints`, whether to enforce the `Constraint` or not. */
  booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;
}

export const GoogleCloudOrgpolicyV1Policy: Schema.Schema<GoogleCloudOrgpolicyV1Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    restoreDefault: Schema.optional(GoogleCloudOrgpolicyV1RestoreDefault),
    version: Schema.optional(Schema.Number),
    listPolicy: Schema.optional(GoogleCloudOrgpolicyV1ListPolicy),
    constraint: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    booleanPolicy: Schema.optional(GoogleCloudOrgpolicyV1BooleanPolicy),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV1Policy" });

export interface GoogleCloudAssetV1p7beta1Asset {
  /** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
  name?: string;
  /** Please also refer to the [access level user guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels). */
  accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;
  /** The related assets of the asset of one relationship type. One asset only represents one type of relationship. */
  relatedAssets?: GoogleCloudAssetV1p7beta1RelatedAssets;
  /** The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
  ancestors?: ReadonlyArray<string>;
  /** Please also refer to the [service perimeter user guide](https://cloud.google.com/vpc-service-controls/docs/overview). */
  servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;
  /** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
  updateTime?: string;
  /** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
  assetType?: string;
  /** A representation of the IAM policy set on a Google Cloud resource. There can be a maximum of one IAM policy set on any given resource. In addition, IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource's ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance) for more information. */
  iamPolicy?: Policy;
  /** A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource. */
  orgPolicy?: ReadonlyArray<GoogleCloudOrgpolicyV1Policy>;
  /** Please also refer to the [access policy user guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies). */
  accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;
  /** A representation of the resource. */
  resource?: GoogleCloudAssetV1p7beta1Resource;
}

export const GoogleCloudAssetV1p7beta1Asset: Schema.Schema<GoogleCloudAssetV1p7beta1Asset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    accessLevel: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1AccessLevel,
    ),
    relatedAssets: Schema.optional(GoogleCloudAssetV1p7beta1RelatedAssets),
    ancestors: Schema.optional(Schema.Array(Schema.String)),
    servicePerimeter: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1ServicePerimeter,
    ),
    updateTime: Schema.optional(Schema.String),
    assetType: Schema.optional(Schema.String),
    iamPolicy: Schema.optional(Policy),
    orgPolicy: Schema.optional(Schema.Array(GoogleCloudOrgpolicyV1Policy)),
    accessPolicy: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1AccessPolicy,
    ),
    resource: Schema.optional(GoogleCloudAssetV1p7beta1Resource),
  }).annotate({ identifier: "GoogleCloudAssetV1p7beta1Asset" });

export interface AnalyzeIamPolicyLongrunningMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
}

export const AnalyzeIamPolicyLongrunningMetadata: Schema.Schema<AnalyzeIamPolicyLongrunningMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzeIamPolicyLongrunningMetadata" });

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

// ==========================================================================
// Operations
// ==========================================================================

export interface SearchAllResourcesRequest {
  /** Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be: * Organization number (such as "organizations/123") * Folder number (such as "folders/1234") * Project number (such as "projects/12345") * Project ID (such as "projects/abc") */
  scope: string;
  /** Optional. A comma separated list of fields specifying the sorting order of the results. The default order is ascending. Add ` DESC` after the field name to indicate descending order. Redundant space characters are ignored. For example, ` location DESC , name `. */
  orderBy?: string;
  /** Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call. */
  pageToken?: string;
  /** Optional. The query statement. */
  query?: string;
  /** Optional. A list of asset types that this request searches for. If empty, it will search all the supported asset types. */
  assetTypes?: string[];
  /** Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned. */
  pageSize?: number;
}

export const SearchAllResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.HttpPath("scope")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    assetTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("assetTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1p1beta1/{+scope}/resources:searchAll" }),
    svc,
  ) as unknown as Schema.Schema<SearchAllResourcesRequest>;

export type SearchAllResourcesResponse_Op = SearchAllResourcesResponse;
export const SearchAllResourcesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ SearchAllResourcesResponse;

export type SearchAllResourcesError = DefaultErrors | NotFound | Forbidden;

/** Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloudasset.assets.searchAllResources` permission on the requested scope, otherwise the request will be rejected. */
export const searchAllResources: API.PaginatedOperationMethod<
  SearchAllResourcesRequest,
  SearchAllResourcesResponse_Op,
  SearchAllResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchAllResourcesRequest,
  output: SearchAllResourcesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchAllIamPoliciesRequest {
  /** Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned. */
  pageSize?: number;
  /** Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters must be identical to those in the previous call. */
  pageToken?: string;
  /** Optional. The query statement. Examples: * "policy:myuser@mydomain.com" * "policy:(myuser@mydomain.com viewer)" */
  query?: string;
  /** Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be: * Organization number (such as "organizations/123") * Folder number (such as "folders/1234") * Project number (such as "projects/12345") * Project ID (such as "projects/abc") */
  scope: string;
}

export const SearchAllIamPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    scope: Schema.String.pipe(T.HttpPath("scope")),
  }).pipe(
    T.Http({ method: "GET", path: "v1p1beta1/{+scope}/iamPolicies:searchAll" }),
    svc,
  ) as unknown as Schema.Schema<SearchAllIamPoliciesRequest>;

export type SearchAllIamPoliciesResponse_Op = SearchAllIamPoliciesResponse;
export const SearchAllIamPoliciesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ SearchAllIamPoliciesResponse;

export type SearchAllIamPoliciesError = DefaultErrors | NotFound | Forbidden;

/** Searches all the IAM policies within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloudasset.assets.searchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected. */
export const searchAllIamPolicies: API.PaginatedOperationMethod<
  SearchAllIamPoliciesRequest,
  SearchAllIamPoliciesResponse_Op,
  SearchAllIamPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchAllIamPoliciesRequest,
  output: SearchAllIamPoliciesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
