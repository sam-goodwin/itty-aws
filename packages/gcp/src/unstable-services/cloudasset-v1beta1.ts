// ==========================================================================
// Cloud Asset API (cloudasset v1beta1)
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
  version: "v1beta1",
  rootUrl: "https://cloudasset.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

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

export interface GoogleIdentityAccesscontextmanagerV1IngressSource {
  /** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
  accessLevel?: string;
  /** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
  resource?: string;
}

export const GoogleIdentityAccesscontextmanagerV1IngressSource: Schema.Schema<GoogleIdentityAccesscontextmanagerV1IngressSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessLevel: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1IngressSource",
  });

export interface GoogleIdentityAccesscontextmanagerV1IngressFrom {
  /** A list of identities that are allowed access through [IngressPolicy]. Identities can be an individual user, service account, Google group, third-party identity, or agent identity. For the list of supported identity types, see https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities. */
  identities?: ReadonlyArray<string>;
  /** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
  identityType?:
    | "IDENTITY_TYPE_UNSPECIFIED"
    | "ANY_IDENTITY"
    | "ANY_USER_ACCOUNT"
    | "ANY_SERVICE_ACCOUNT"
    | (string & {});
  /** Sources that this IngressPolicy authorizes access from. */
  sources?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1IngressSource>;
}

export const GoogleIdentityAccesscontextmanagerV1IngressFrom: Schema.Schema<GoogleIdentityAccesscontextmanagerV1IngressFrom> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identities: Schema.optional(Schema.Array(Schema.String)),
    identityType: Schema.optional(Schema.String),
    sources: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1IngressSource),
    ),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1IngressFrom",
  });

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
  /** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
  serviceName?: string;
  /** API methods or permissions to allow. Method or permission must belong to the service specified by `service_name` field. A single MethodSelector entry with `*` specified for the `method` field will allow all methods AND permissions for the service specified in `service_name`. */
  methodSelectors?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1MethodSelector>;
}

export const GoogleIdentityAccesscontextmanagerV1ApiOperation: Schema.Schema<GoogleIdentityAccesscontextmanagerV1ApiOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(Schema.String),
    methodSelectors: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1MethodSelector),
    ),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1ApiOperation",
  });

export interface GoogleIdentityAccesscontextmanagerV1IngressTo {
  /** A list of ApiOperations allowed to be performed by the sources specified in corresponding IngressFrom in this ServicePerimeter. */
  operations?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1ApiOperation>;
  /** A list of resources, currently only projects in the form `projects/`, protected by this ServicePerimeter that are allowed to be accessed by sources defined in the corresponding IngressFrom. If a single `*` is specified, then access to all resources inside the perimeter are allowed. */
  resources?: ReadonlyArray<string>;
  /** IAM roles that represent the set of operations that the sources specified in the corresponding IngressFrom are allowed to perform in this ServicePerimeter. */
  roles?: ReadonlyArray<string>;
}

export const GoogleIdentityAccesscontextmanagerV1IngressTo: Schema.Schema<GoogleIdentityAccesscontextmanagerV1IngressTo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1ApiOperation),
    ),
    resources: Schema.optional(Schema.Array(Schema.String)),
    roles: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIdentityAccesscontextmanagerV1IngressTo" });

export interface GoogleIdentityAccesscontextmanagerV1IngressPolicy {
  /** Defines the conditions on the source of a request causing this IngressPolicy to apply. */
  ingressFrom?: GoogleIdentityAccesscontextmanagerV1IngressFrom;
  /** Defines the conditions on the ApiOperation and request destination that cause this IngressPolicy to apply. */
  ingressTo?: GoogleIdentityAccesscontextmanagerV1IngressTo;
  /** Optional. Human-readable title for the ingress rule. The title must be unique within the perimeter and can not exceed 100 characters. Within the access policy, the combined length of all rule titles must not exceed 240,000 characters. */
  title?: string;
}

export const GoogleIdentityAccesscontextmanagerV1IngressPolicy: Schema.Schema<GoogleIdentityAccesscontextmanagerV1IngressPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingressFrom: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1IngressFrom,
    ),
    ingressTo: Schema.optional(GoogleIdentityAccesscontextmanagerV1IngressTo),
    title: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1IngressPolicy",
  });

export interface GoogleIdentityAccesscontextmanagerV1EgressTo {
  /** A list of resources, currently only projects in the form `projects/`, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If `*` is specified for `resources`, then this EgressTo rule will authorize access to all resources outside the perimeter. */
  resources?: ReadonlyArray<string>;
  /** A list of external resources that are allowed to be accessed. Only AWS and Azure resources are supported. For Amazon S3, the supported formats are s3://BUCKET_NAME, s3a://BUCKET_NAME, and s3n://BUCKET_NAME. For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/CONTAINER_NAME. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently '*' is not allowed. */
  externalResources?: ReadonlyArray<string>;
  /** A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list. */
  operations?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1ApiOperation>;
  /** IAM roles that represent the set of operations that the sources specified in the corresponding EgressFrom. are allowed to perform in this ServicePerimeter. */
  roles?: ReadonlyArray<string>;
}

export const GoogleIdentityAccesscontextmanagerV1EgressTo: Schema.Schema<GoogleIdentityAccesscontextmanagerV1EgressTo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Schema.String)),
    externalResources: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1ApiOperation),
    ),
    roles: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIdentityAccesscontextmanagerV1EgressTo" });

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
  /** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
  identityType?:
    | "IDENTITY_TYPE_UNSPECIFIED"
    | "ANY_IDENTITY"
    | "ANY_USER_ACCOUNT"
    | "ANY_SERVICE_ACCOUNT"
    | (string & {});
  /** Whether to enforce traffic restrictions based on `sources` field. If the `sources` fields is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`. */
  sourceRestriction?:
    | "SOURCE_RESTRICTION_UNSPECIFIED"
    | "SOURCE_RESTRICTION_ENABLED"
    | "SOURCE_RESTRICTION_DISABLED"
    | (string & {});
  /** A list of identities that are allowed access through [EgressPolicy]. Identities can be an individual user, service account, Google group, third-party identity, or agent identity. For the list of supported identity types, see https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities. */
  identities?: ReadonlyArray<string>;
}

export const GoogleIdentityAccesscontextmanagerV1EgressFrom: Schema.Schema<GoogleIdentityAccesscontextmanagerV1EgressFrom> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1EgressSource),
    ),
    identityType: Schema.optional(Schema.String),
    sourceRestriction: Schema.optional(Schema.String),
    identities: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIdentityAccesscontextmanagerV1EgressFrom" });

export interface GoogleIdentityAccesscontextmanagerV1EgressPolicy {
  /** Defines the conditions on the ApiOperation and destination resources that cause this EgressPolicy to apply. */
  egressTo?: GoogleIdentityAccesscontextmanagerV1EgressTo;
  /** Optional. Human-readable title for the egress rule. The title must be unique within the perimeter and can not exceed 100 characters. Within the access policy, the combined length of all rule titles must not exceed 240,000 characters. */
  title?: string;
  /** Defines conditions on the source of a request causing this EgressPolicy to apply. */
  egressFrom?: GoogleIdentityAccesscontextmanagerV1EgressFrom;
}

export const GoogleIdentityAccesscontextmanagerV1EgressPolicy: Schema.Schema<GoogleIdentityAccesscontextmanagerV1EgressPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    egressTo: Schema.optional(GoogleIdentityAccesscontextmanagerV1EgressTo),
    title: Schema.optional(Schema.String),
    egressFrom: Schema.optional(GoogleIdentityAccesscontextmanagerV1EgressFrom),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1EgressPolicy",
  });

export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig {
  /** Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions. */
  restrictedServices?: ReadonlyArray<string>;
  /** A list of Google Cloud resources that are inside of the service perimeter. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. */
  resources?: ReadonlyArray<string>;
  /** Configuration for APIs allowed within Perimeter. */
  vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
  /** List of IngressPolicies to apply to the perimeter. A perimeter may have multiple IngressPolicies, each of which is evaluated separately. Access is granted if any Ingress Policy grants it. Must be empty for a perimeter bridge. */
  ingressPolicies?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1IngressPolicy>;
  /** A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty. */
  accessLevels?: ReadonlyArray<string>;
  /** List of EgressPolicies to apply to the perimeter. A perimeter may have multiple EgressPolicies, each of which is evaluated separately. Access is granted if any EgressPolicy grants it. Must be empty for a perimeter bridge. */
  egressPolicies?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1EgressPolicy>;
}

export const GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig: Schema.Schema<GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restrictedServices: Schema.optional(Schema.Array(Schema.String)),
    resources: Schema.optional(Schema.Array(Schema.String)),
    vpcAccessibleServices: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices,
    ),
    ingressPolicies: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1IngressPolicy),
    ),
    accessLevels: Schema.optional(Schema.Array(Schema.String)),
    egressPolicies: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1EgressPolicy),
    ),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig",
  });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface GoogleCloudAssetV1p7beta1RelatedAsset {
  /** The ancestors of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
  ancestors?: ReadonlyArray<string>;
  /** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
  asset?: string;
  /** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
  assetType?: string;
}

export const GoogleCloudAssetV1p7beta1RelatedAsset: Schema.Schema<GoogleCloudAssetV1p7beta1RelatedAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ancestors: Schema.optional(Schema.Array(Schema.String)),
    asset: Schema.optional(Schema.String),
    assetType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssetV1p7beta1RelatedAsset" });

export interface GoogleCloudAssetV1p7beta1RelationshipAttributes {
  /** The detail of the relationship, e.g. `contains`, `attaches` */
  action?: string;
  /** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
  type?: string;
  /** The source asset type. Example: `compute.googleapis.com/Instance` */
  sourceResourceType?: string;
  /** The target asset type. Example: `compute.googleapis.com/Disk` */
  targetResourceType?: string;
}

export const GoogleCloudAssetV1p7beta1RelationshipAttributes: Schema.Schema<GoogleCloudAssetV1p7beta1RelationshipAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    sourceResourceType: Schema.optional(Schema.String),
    targetResourceType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssetV1p7beta1RelationshipAttributes",
  });

export interface GoogleCloudAssetV1p7beta1RelatedAssets {
  /** The peer resources of the relationship. */
  assets?: ReadonlyArray<GoogleCloudAssetV1p7beta1RelatedAsset>;
  /** The detailed relation attributes. */
  relationshipAttributes?: GoogleCloudAssetV1p7beta1RelationshipAttributes;
}

export const GoogleCloudAssetV1p7beta1RelatedAssets: Schema.Schema<GoogleCloudAssetV1p7beta1RelatedAssets> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(
      Schema.Array(GoogleCloudAssetV1p7beta1RelatedAsset),
    ),
    relationshipAttributes: Schema.optional(
      GoogleCloudAssetV1p7beta1RelationshipAttributes,
    ),
  }).annotate({ identifier: "GoogleCloudAssetV1p7beta1RelatedAssets" });

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
  /** Allowed encryptions statuses, an empty list allows all statuses. */
  allowedEncryptionStatuses?: ReadonlyArray<
    | "ENCRYPTION_UNSPECIFIED"
    | "ENCRYPTION_UNSUPPORTED"
    | "UNENCRYPTED"
    | "ENCRYPTED"
    | (string & {})
  >;
  /** Whether the device needs to be approved by the customer admin. */
  requireAdminApproval?: boolean;
  /** Whether the device needs to be corp owned. */
  requireCorpOwned?: boolean;
  /** Allowed device management levels, an empty list allows all management levels. */
  allowedDeviceManagementLevels?: ReadonlyArray<
    "MANAGEMENT_UNSPECIFIED" | "NONE" | "BASIC" | "COMPLETE" | (string & {})
  >;
  /** Allowed OS versions, an empty list allows all types and all versions. */
  osConstraints?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1OsConstraint>;
}

export const GoogleIdentityAccesscontextmanagerV1DevicePolicy: Schema.Schema<GoogleIdentityAccesscontextmanagerV1DevicePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requireScreenlock: Schema.optional(Schema.Boolean),
    allowedEncryptionStatuses: Schema.optional(Schema.Array(Schema.String)),
    requireAdminApproval: Schema.optional(Schema.Boolean),
    requireCorpOwned: Schema.optional(Schema.Boolean),
    allowedDeviceManagementLevels: Schema.optional(Schema.Array(Schema.String)),
    osConstraints: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1OsConstraint),
    ),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1DevicePolicy",
  });

export interface GoogleIdentityAccesscontextmanagerV1VpcSubNetwork {
  /** Required. Network name. If the network is not part of the organization, the `compute.network.get` permission must be granted to the caller. Format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NETWORK_NAME}` Example: `//compute.googleapis.com/projects/my-project/global/networks/network-1` */
  network?: string;
  /** CIDR block IP subnetwork specification. The IP address must be an IPv4 address and can be a public or private IP address. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. If empty, all IP addresses are allowed. */
  vpcIpSubnetworks?: ReadonlyArray<string>;
}

export const GoogleIdentityAccesscontextmanagerV1VpcSubNetwork: Schema.Schema<GoogleIdentityAccesscontextmanagerV1VpcSubNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    vpcIpSubnetworks: Schema.optional(Schema.Array(Schema.String)),
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
  /** A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"` */
  requiredAccessLevels?: ReadonlyArray<string>;
  /** The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes. */
  regions?: ReadonlyArray<string>;
  /** CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32" is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed. */
  ipSubnetworks?: ReadonlyArray<string>;
  /** Device specific restrictions, all restrictions must hold for the Condition to be true. If not specified, all devices are allowed. */
  devicePolicy?: GoogleIdentityAccesscontextmanagerV1DevicePolicy;
  /** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields. Any non-empty field criteria evaluating to false will result in the Condition to be satisfied. Defaults to false. */
  negate?: boolean;
  /** The request must originate from one of the provided VPC networks in Google Cloud. Cannot specify this field together with `ip_subnetworks`. */
  vpcNetworkSources?: ReadonlyArray<GoogleIdentityAccesscontextmanagerV1VpcNetworkSource>;
  /** The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user. */
  members?: ReadonlyArray<string>;
}

export const GoogleIdentityAccesscontextmanagerV1Condition: Schema.Schema<GoogleIdentityAccesscontextmanagerV1Condition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredAccessLevels: Schema.optional(Schema.Array(Schema.String)),
    regions: Schema.optional(Schema.Array(Schema.String)),
    ipSubnetworks: Schema.optional(Schema.Array(Schema.String)),
    devicePolicy: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1DevicePolicy,
    ),
    negate: Schema.optional(Schema.Boolean),
    vpcNetworkSources: Schema.optional(
      Schema.Array(GoogleIdentityAccesscontextmanagerV1VpcNetworkSource),
    ),
    members: Schema.optional(Schema.Array(Schema.String)),
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

export interface Resource {
  /** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
  resourceUrl?: string;
  /** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
  parent?: string;
  /** The content of the resource, in which some sensitive fields are removed and may not be present. */
  data?: Record<string, unknown>;
  /** The API version. Example: `v1` */
  version?: string;
  /** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
  discoveryDocumentUri?: string;
  /** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
  discoveryName?: string;
}

export const Resource: Schema.Schema<Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUrl: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    version: Schema.optional(Schema.String),
    discoveryDocumentUri: Schema.optional(Schema.String),
    discoveryName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Resource" });

export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeter {
  /** Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
  perimeterType?:
    | "PERIMETER_TYPE_REGULAR"
    | "PERIMETER_TYPE_BRIDGE"
    | (string & {});
  /** Current ServicePerimeter configuration. Specifies sets of resources, restricted services and access levels that determine perimeter content and boundaries. */
  status?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;
  /** Proposed (or dry run) ServicePerimeter configuration. This configuration allows to specify and test ServicePerimeter configuration without enforcing actual access restrictions. Only allowed to be set when the "use_explicit_dry_run_spec" flag is set. */
  spec?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;
  /** Human readable title. Must be unique within the Policy. */
  title?: string;
  /** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
  description?: string;
  /** Optional. An opaque identifier for the current version of the `ServicePerimeter`. This identifier does not follow any specific format. If an etag is not provided, the operation will be performed as if a valid etag is provided. */
  etag?: string;
  /** Identifier. Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. */
  name?: string;
  /** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
  useExplicitDryRunSpec?: boolean;
}

export const GoogleIdentityAccesscontextmanagerV1ServicePerimeter: Schema.Schema<GoogleIdentityAccesscontextmanagerV1ServicePerimeter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    perimeterType: Schema.optional(Schema.String),
    status: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig,
    ),
    spec: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig,
    ),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    useExplicitDryRunSpec: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1ServicePerimeter",
  });

export interface GoogleCloudOrgpolicyV1BooleanPolicy {
  /** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
  enforced?: boolean;
}

export const GoogleCloudOrgpolicyV1BooleanPolicy: Schema.Schema<GoogleCloudOrgpolicyV1BooleanPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enforced: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV1BooleanPolicy" });

export interface GoogleCloudOrgpolicyV1ListPolicy {
  /** List of values allowed at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
  allowedValues?: ReadonlyArray<string>;
  /** List of values denied at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
  deniedValues?: ReadonlyArray<string>;
  /** The policy all_values state. */
  allValues?: "ALL_VALUES_UNSPECIFIED" | "ALLOW" | "DENY" | (string & {});
  /** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
  suggestedValue?: string;
  /** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
  inheritFromParent?: boolean;
}

export const GoogleCloudOrgpolicyV1ListPolicy: Schema.Schema<GoogleCloudOrgpolicyV1ListPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedValues: Schema.optional(Schema.Array(Schema.String)),
    deniedValues: Schema.optional(Schema.Array(Schema.String)),
    allValues: Schema.optional(Schema.String),
    suggestedValue: Schema.optional(Schema.String),
    inheritFromParent: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV1ListPolicy" });

export interface GoogleCloudOrgpolicyV1RestoreDefault {}

export const GoogleCloudOrgpolicyV1RestoreDefault: Schema.Schema<GoogleCloudOrgpolicyV1RestoreDefault> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudOrgpolicyV1RestoreDefault",
  });

export interface GoogleCloudOrgpolicyV1Policy {
  /** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
  updateTime?: string;
  /** For boolean `Constraints`, whether to enforce the `Constraint` or not. */
  booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;
  /** List of values either allowed or disallowed. */
  listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;
  /** Version of the `Policy`. Default version is 0; */
  version?: number;
  /** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
  constraint?: string;
  /** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
  etag?: string;
  /** Restores the default behavior of the constraint; independent of `Constraint` type. */
  restoreDefault?: GoogleCloudOrgpolicyV1RestoreDefault;
}

export const GoogleCloudOrgpolicyV1Policy: Schema.Schema<GoogleCloudOrgpolicyV1Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    booleanPolicy: Schema.optional(GoogleCloudOrgpolicyV1BooleanPolicy),
    listPolicy: Schema.optional(GoogleCloudOrgpolicyV1ListPolicy),
    version: Schema.optional(Schema.Number),
    constraint: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    restoreDefault: Schema.optional(GoogleCloudOrgpolicyV1RestoreDefault),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV1Policy" });

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

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface AuditLogConfig {
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
}

export const AuditLogConfig: Schema.Schema<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
    logType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuditLogConfig" });

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

export interface GoogleIdentityAccesscontextmanagerV1AccessPolicy {
  /** Required. Human readable title. Does not affect behavior. */
  title?: string;
  /** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
  parent?: string;
  /** The scopes of the AccessPolicy. Scopes define which resources a policy can restrict and where its resources can be referenced. For example, policy A with `scopes=["folders/123"]` has the following behavior: - ServicePerimeter can only restrict projects within `folders/123`. - ServicePerimeter within policy A can only reference access levels defined within policy A. - Only one policy can include a given scope; thus, attempting to create a second policy which includes `folders/123` will result in an error. If no scopes are provided, then any resource within the organization can be restricted. Scopes cannot be modified after a policy is created. Policies can only have a single scope. Format: list of `folders/{folder_number}` or `projects/{project_number}` */
  scopes?: ReadonlyArray<string>;
  /** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Policies will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
  etag?: string;
  /** Output only. Identifier. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
  name?: string;
}

export const GoogleIdentityAccesscontextmanagerV1AccessPolicy: Schema.Schema<GoogleIdentityAccesscontextmanagerV1AccessPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1AccessPolicy",
  });

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

export interface GoogleIdentityAccesscontextmanagerV1AccessLevel {
  /** Human readable title. Must be unique within the Policy. */
  title?: string;
  /** Description of the `AccessLevel` and its use. Does not affect behavior. */
  description?: string;
  /** A `BasicLevel` composed of `Conditions`. */
  basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;
  /** A `CustomLevel` written in the Common Expression Language. */
  custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;
  /** Identifier. Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. */
  name?: string;
}

export const GoogleIdentityAccesscontextmanagerV1AccessLevel: Schema.Schema<GoogleIdentityAccesscontextmanagerV1AccessLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    basic: Schema.optional(GoogleIdentityAccesscontextmanagerV1BasicLevel),
    custom: Schema.optional(GoogleIdentityAccesscontextmanagerV1CustomLevel),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleIdentityAccesscontextmanagerV1AccessLevel",
  });

export interface Asset {
  /** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
  assetType?: string;
  /** A representation of the resource. */
  resource?: Resource;
  /** Please also refer to the [service perimeter user guide](https://cloud.google.com/vpc-service-controls/docs/overview). */
  servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;
  /** A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource. */
  orgPolicy?: ReadonlyArray<GoogleCloudOrgpolicyV1Policy>;
  /** A representation of the IAM policy set on a Google Cloud resource. There can be a maximum of one IAM policy set on any given resource. In addition, IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource's ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance) for more information. */
  iamPolicy?: Policy;
  /** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
  name?: string;
  /** Please also refer to the [access policy user guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies). */
  accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;
  /** Please also refer to the [access level user guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels). */
  accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;
}

export const Asset: Schema.Schema<Asset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetType: Schema.optional(Schema.String),
    resource: Schema.optional(Resource),
    servicePerimeter: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1ServicePerimeter,
    ),
    orgPolicy: Schema.optional(Schema.Array(GoogleCloudOrgpolicyV1Policy)),
    iamPolicy: Schema.optional(Policy),
    name: Schema.optional(Schema.String),
    accessPolicy: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1AccessPolicy,
    ),
    accessLevel: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1AccessLevel,
    ),
  }).annotate({ identifier: "Asset" });

export interface TimeWindow {
  /** Start time of the time window (exclusive). */
  startTime?: string;
  /** End time of the time window (inclusive). If not specified, the current timestamp is used instead. */
  endTime?: string;
}

export const TimeWindow: Schema.Schema<TimeWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeWindow" });

export interface TemporalAsset {
  /** Whether the asset has been deleted or not. */
  deleted?: boolean;
  /** An asset in Google Cloud. */
  asset?: Asset;
  /** The time window when the asset data and state was observed. */
  window?: TimeWindow;
}

export const TemporalAsset: Schema.Schema<TemporalAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.optional(Schema.Boolean),
    asset: Schema.optional(Asset),
    window: Schema.optional(TimeWindow),
  }).annotate({ identifier: "TemporalAsset" });

export interface BatchGetAssetsHistoryResponse {
  /** A list of assets with valid time windows. */
  assets?: ReadonlyArray<TemporalAsset>;
}

export const BatchGetAssetsHistoryResponse: Schema.Schema<BatchGetAssetsHistoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(TemporalAsset)),
  }).annotate({ identifier: "BatchGetAssetsHistoryResponse" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface GoogleCloudAssetV1p7beta1Resource {
  /** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
  discoveryName?: string;
  /** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
  location?: string;
  /** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
  resourceUrl?: string;
  /** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
  parent?: string;
  /** The content of the resource, in which some sensitive fields are removed and may not be present. */
  data?: Record<string, unknown>;
  /** The API version. Example: `v1` */
  version?: string;
  /** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
  discoveryDocumentUri?: string;
}

export const GoogleCloudAssetV1p7beta1Resource: Schema.Schema<GoogleCloudAssetV1p7beta1Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryName: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    resourceUrl: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    version: Schema.optional(Schema.String),
    discoveryDocumentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssetV1p7beta1Resource" });

export interface GoogleCloudAssetV1p7beta1Asset {
  /** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
  name?: string;
  /** Please also refer to the [access level user guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels). */
  accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;
  /** The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
  ancestors?: ReadonlyArray<string>;
  /** The related assets of the asset of one relationship type. One asset only represents one type of relationship. */
  relatedAssets?: GoogleCloudAssetV1p7beta1RelatedAssets;
  /** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
  assetType?: string;
  /** Please also refer to the [service perimeter user guide](https://cloud.google.com/vpc-service-controls/docs/overview). */
  servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;
  /** Please also refer to the [access policy user guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies). */
  accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;
  /** A representation of the IAM policy set on a Google Cloud resource. There can be a maximum of one IAM policy set on any given resource. In addition, IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource's ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance) for more information. */
  iamPolicy?: Policy;
  /** A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource. */
  orgPolicy?: ReadonlyArray<GoogleCloudOrgpolicyV1Policy>;
  /** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
  updateTime?: string;
  /** A representation of the resource. */
  resource?: GoogleCloudAssetV1p7beta1Resource;
}

export const GoogleCloudAssetV1p7beta1Asset: Schema.Schema<GoogleCloudAssetV1p7beta1Asset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    accessLevel: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1AccessLevel,
    ),
    ancestors: Schema.optional(Schema.Array(Schema.String)),
    relatedAssets: Schema.optional(GoogleCloudAssetV1p7beta1RelatedAssets),
    assetType: Schema.optional(Schema.String),
    servicePerimeter: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1ServicePerimeter,
    ),
    accessPolicy: Schema.optional(
      GoogleIdentityAccesscontextmanagerV1AccessPolicy,
    ),
    iamPolicy: Schema.optional(Policy),
    orgPolicy: Schema.optional(Schema.Array(GoogleCloudOrgpolicyV1Policy)),
    updateTime: Schema.optional(Schema.String),
    resource: Schema.optional(GoogleCloudAssetV1p7beta1Resource),
  }).annotate({ identifier: "GoogleCloudAssetV1p7beta1Asset" });

export interface GcsDestination {
  /** The URI of the Cloud Storage object. It's the same URI that is used by gcloud storage. For example: "gs://bucket_name/object_name". See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information. */
  uri?: string;
  /** The URI prefix of all generated Cloud Storage objects. For example: "gs://bucket_name/object_name_prefix". Each object URI is in format: "gs://bucket_name/object_name_prefix// and only contains assets for that type. starts from 0. For example: "gs://bucket_name/object_name_prefix/google.compute.disk/0" is the first shard of output objects containing all google.compute.disk assets. An INVALID_ARGUMENT error will be returned if file with the same name "gs://bucket_name/object_name_prefix" already exists. */
  uriPrefix?: string;
}

export const GcsDestination: Schema.Schema<GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    uriPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsDestination" });

export interface OutputConfig {
  /** Destination on Cloud Storage. */
  gcsDestination?: GcsDestination;
}

export const OutputConfig: Schema.Schema<OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GcsDestination),
  }).annotate({ identifier: "OutputConfig" });

export interface ExportAssetsRequest {
  /** A list of asset types of which to take a snapshot for. For example: "google.compute.Disk". If specified, only matching assets will be returned. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview) for all supported asset types. */
  assetTypes?: ReadonlyArray<string>;
  /** Asset content type. If not specified, no content but the asset name will be returned. */
  contentType?:
    | "CONTENT_TYPE_UNSPECIFIED"
    | "RESOURCE"
    | "IAM_POLICY"
    | (string & {});
  /** Required. Output configuration indicating where the results will be output to. All results will be in newline delimited JSON format. */
  outputConfig?: OutputConfig;
  /** Timestamp to take an asset snapshot. This can only be set to a timestamp between 2018-10-02 UTC (inclusive) and the current time. If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results. */
  readTime?: string;
}

export const ExportAssetsRequest: Schema.Schema<ExportAssetsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetTypes: Schema.optional(Schema.Array(Schema.String)),
    contentType: Schema.optional(Schema.String),
    outputConfig: Schema.optional(OutputConfig),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportAssetsRequest" });

export interface AnalyzeIamPolicyLongrunningResponse {}

export const AnalyzeIamPolicyLongrunningResponse: Schema.Schema<AnalyzeIamPolicyLongrunningResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AnalyzeIamPolicyLongrunningResponse",
  });

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

export interface ExportAssetsFoldersRequest {
  /** Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), a project number (such as "projects/12345"), or a folder number (such as "folders/123"). */
  parent: string;
  /** Request body */
  body?: ExportAssetsRequest;
}

export const ExportAssetsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExportAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}:exportAssets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportAssetsFoldersRequest>;

export type ExportAssetsFoldersResponse = Operation;
export const ExportAssetsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportAssetsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes. */
export const exportAssetsFolders: API.OperationMethod<
  ExportAssetsFoldersRequest,
  ExportAssetsFoldersResponse,
  ExportAssetsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportAssetsFoldersRequest,
  output: ExportAssetsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetFoldersOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersOperationsRequest>;

export type GetFoldersOperationsResponse = Operation;
export const GetFoldersOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetFoldersOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getFoldersOperations: API.OperationMethod<
  GetFoldersOperationsRequest,
  GetFoldersOperationsResponse,
  GetFoldersOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersOperationsRequest,
  output: GetFoldersOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchGetAssetsHistoryOrganizationsRequest {
  /** Optional. The content type. */
  contentType?:
    | "CONTENT_TYPE_UNSPECIFIED"
    | "RESOURCE"
    | "IAM_POLICY"
    | (string & {});
  /** Start time of the time window (exclusive). */
  "readTimeWindow.startTime"?: string;
  /** Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345"). */
  parent: string;
  /** A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request. */
  assetNames?: string[];
  /** End time of the time window (inclusive). If not specified, the current timestamp is used instead. */
  "readTimeWindow.endTime"?: string;
}

export const BatchGetAssetsHistoryOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("contentType"),
    ),
    "readTimeWindow.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("readTimeWindow.startTime"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    assetNames: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("assetNames"),
    ),
    "readTimeWindow.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("readTimeWindow.endTime"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}:batchGetAssetsHistory" }),
    svc,
  ) as unknown as Schema.Schema<BatchGetAssetsHistoryOrganizationsRequest>;

export type BatchGetAssetsHistoryOrganizationsResponse =
  BatchGetAssetsHistoryResponse;
export const BatchGetAssetsHistoryOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchGetAssetsHistoryResponse;

export type BatchGetAssetsHistoryOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error. */
export const batchGetAssetsHistoryOrganizations: API.OperationMethod<
  BatchGetAssetsHistoryOrganizationsRequest,
  BatchGetAssetsHistoryOrganizationsResponse,
  BatchGetAssetsHistoryOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetAssetsHistoryOrganizationsRequest,
  output: BatchGetAssetsHistoryOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportAssetsOrganizationsRequest {
  /** Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), a project number (such as "projects/12345"), or a folder number (such as "folders/123"). */
  parent: string;
  /** Request body */
  body?: ExportAssetsRequest;
}

export const ExportAssetsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExportAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}:exportAssets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportAssetsOrganizationsRequest>;

export type ExportAssetsOrganizationsResponse = Operation;
export const ExportAssetsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportAssetsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes. */
export const exportAssetsOrganizations: API.OperationMethod<
  ExportAssetsOrganizationsRequest,
  ExportAssetsOrganizationsResponse,
  ExportAssetsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportAssetsOrganizationsRequest,
  output: ExportAssetsOrganizationsResponse,
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

export interface ExportAssetsProjectsRequest {
  /** Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), a project number (such as "projects/12345"), or a folder number (such as "folders/123"). */
  parent: string;
  /** Request body */
  body?: ExportAssetsRequest;
}

export const ExportAssetsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExportAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}:exportAssets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportAssetsProjectsRequest>;

export type ExportAssetsProjectsResponse = Operation;
export const ExportAssetsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportAssetsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes. */
export const exportAssetsProjects: API.OperationMethod<
  ExportAssetsProjectsRequest,
  ExportAssetsProjectsResponse,
  ExportAssetsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportAssetsProjectsRequest,
  output: ExportAssetsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchGetAssetsHistoryProjectsRequest {
  /** Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345"). */
  parent: string;
  /** A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request. */
  assetNames?: string[];
  /** End time of the time window (inclusive). If not specified, the current timestamp is used instead. */
  "readTimeWindow.endTime"?: string;
  /** Start time of the time window (exclusive). */
  "readTimeWindow.startTime"?: string;
  /** Optional. The content type. */
  contentType?:
    | "CONTENT_TYPE_UNSPECIFIED"
    | "RESOURCE"
    | "IAM_POLICY"
    | (string & {});
}

export const BatchGetAssetsHistoryProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    assetNames: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("assetNames"),
    ),
    "readTimeWindow.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("readTimeWindow.endTime"),
    ),
    "readTimeWindow.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("readTimeWindow.startTime"),
    ),
    contentType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("contentType"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}:batchGetAssetsHistory" }),
    svc,
  ) as unknown as Schema.Schema<BatchGetAssetsHistoryProjectsRequest>;

export type BatchGetAssetsHistoryProjectsResponse =
  BatchGetAssetsHistoryResponse;
export const BatchGetAssetsHistoryProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchGetAssetsHistoryResponse;

export type BatchGetAssetsHistoryProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error. */
export const batchGetAssetsHistoryProjects: API.OperationMethod<
  BatchGetAssetsHistoryProjectsRequest,
  BatchGetAssetsHistoryProjectsResponse,
  BatchGetAssetsHistoryProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetAssetsHistoryProjectsRequest,
  output: BatchGetAssetsHistoryProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsOperationsRequest>;

export type GetProjectsOperationsResponse = Operation;
export const GetProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsOperations: API.OperationMethod<
  GetProjectsOperationsRequest,
  GetProjectsOperationsResponse,
  GetProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsOperationsRequest,
  output: GetProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
}));
