// ==========================================================================
// Network Connectivity API (networkconnectivity v1alpha1)
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
  name: "networkconnectivity",
  version: "v1alpha1",
  rootUrl: "https://networkconnectivity.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface AllocationOptions {
  /** Optional. Allocation strategy. Not setting this field when the allocation is requested means an implementation defined strategy is used. */
  allocationStrategy?:
    | "ALLOCATION_STRATEGY_UNSPECIFIED"
    | "RANDOM"
    | "FIRST_AVAILABLE"
    | "RANDOM_FIRST_N_AVAILABLE"
    | "FIRST_SMALLEST_FITTING"
    | (string & {});
  /** Optional. This field must be set only when allocation_strategy is set to RANDOM_FIRST_N_AVAILABLE. The value should be the maximum expected parallelism of range creation requests issued to the same space of peered netwroks. */
  firstAvailableRangesLookupSize?: number;
}

export const AllocationOptions: Schema.Schema<AllocationOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocationStrategy: Schema.optional(Schema.String),
    firstAvailableRangesLookupSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AllocationOptions" });

export interface Migration {
  /** Immutable. Resource path as an URI of the source resource, for example a subnet. The project for the source resource should match the project for the InternalRange. An example: /projects/{project}/regions/{region}/subnetworks/{subnet} */
  source?: string;
  /** Immutable. Resource path of the target resource. The target project can be different, as in the cases when migrating to peer networks. For example: /projects/{project}/regions/{region}/subnetworks/{subnet} */
  target?: string;
}

export const Migration: Schema.Schema<Migration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "Migration" });

export interface InternalRange {
  /** Identifier. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names */
  name?: string;
  /** Output only. The list of resources that refer to this internal range. Resources that use the internal range for their range allocation are referred to as users of the range. Other resources mark themselves as users while doing so by creating a reference to this internal range. Having a user, based on this reference, prevents deletion of the internal range that is referred to. Can be empty. */
  users?: ReadonlyArray<string>;
  /** Output only. Time when the internal range was updated. */
  updateTime?: string;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Optional. Range auto-allocation options, may be set only when auto-allocation is selected by not setting ip_cidr_range (and setting prefix_length). */
  allocationOptions?: AllocationOptions;
  /** Optional. The type of usage set for this internal range. */
  usage?:
    | "USAGE_UNSPECIFIED"
    | "FOR_VPC"
    | "EXTERNAL_TO_VPC"
    | "FOR_MIGRATION"
    | (string & {});
  /** Optional. An alternative to ip_cidr_range. Can be set when trying to create an IPv4 reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size. NOTE: For IPv6 this field only works if ip_cidr_range is set as well, and both fields must match. In other words, with IPv6 this field only works as a redundant parameter. */
  prefixLength?: number;
  /** Optional. Types of resources that are allowed to overlap with the current internal range. */
  overlaps?: ReadonlyArray<
    | "OVERLAP_UNSPECIFIED"
    | "OVERLAP_ROUTE_RANGE"
    | "OVERLAP_EXISTING_SUBNET_RANGE"
    | (string & {})
  >;
  /** Optional. The type of peering set for this internal range. */
  peering?:
    | "PEERING_UNSPECIFIED"
    | "FOR_SELF"
    | "FOR_PEER"
    | "NOT_SHARED"
    | (string & {});
  /** Optional. Immutable ranges cannot have their fields modified, except for labels and description. */
  immutable?: boolean;
  /** Optional. The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. For example: https://www.googleapis.com/compute/v1/projects/{project}/locations/global/networks/{network} projects/{project}/locations/global/networks/{network} {network} */
  network?: string;
  /** Optional. ExcludeCidrRanges flag. Specifies a set of CIDR blocks that allows exclusion of particular CIDR ranges from the auto-allocation process, without having to reserve these blocks */
  excludeCidrRanges?: ReadonlyArray<string>;
  /** Optional. IP range that this internal range defines. NOTE: IPv6 ranges are limited to usage=EXTERNAL_TO_VPC and peering=FOR_SELF. NOTE: For IPv6 Ranges this field is compulsory, i.e. the address range must be specified explicitly. */
  ipCidrRange?: string;
  /** Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"] address space (for auto-mode networks, the "10.0.0.0/9" range is used instead of "10.0.0.0/8"). This can be used to target the search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC. */
  targetCidrRange?: ReadonlyArray<string>;
  /** Optional. A description of this resource. */
  description?: string;
  /** Optional. Must be present if usage is set to FOR_MIGRATION. */
  migration?: Migration;
  /** Output only. Time when the internal range was created. */
  createTime?: string;
}

export const InternalRange: Schema.Schema<InternalRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    users: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    allocationOptions: Schema.optional(AllocationOptions),
    usage: Schema.optional(Schema.String),
    prefixLength: Schema.optional(Schema.Number),
    overlaps: Schema.optional(Schema.Array(Schema.String)),
    peering: Schema.optional(Schema.String),
    immutable: Schema.optional(Schema.Boolean),
    network: Schema.optional(Schema.String),
    excludeCidrRanges: Schema.optional(Schema.Array(Schema.String)),
    ipCidrRange: Schema.optional(Schema.String),
    targetCidrRange: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    migration: Schema.optional(Migration),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "InternalRange" });

export interface ListInternalRangesResponse {
  /** Internal range to be returned. */
  internalRanges?: ReadonlyArray<InternalRange>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
}

export const ListInternalRangesResponse: Schema.Schema<ListInternalRangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalRanges: Schema.optional(Schema.Array(InternalRange)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInternalRangesResponse" });

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
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
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

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
    bindings: Schema.optional(Schema.Array(Binding)),
  }).annotate({ identifier: "Policy" });

export interface GoogleRpcStatus {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleLongrunningOperation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

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

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface GoogleLongrunningListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface RouterApplianceInstance {
  /** The IP address of the network interface to use for peering. */
  ipAddress?: string;
  networkInterface?: string;
  /** The URI of the virtual machine resource */
  virtualMachine?: string;
}

export const RouterApplianceInstance: Schema.Schema<RouterApplianceInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddress: Schema.optional(Schema.String),
    networkInterface: Schema.optional(Schema.String),
    virtualMachine: Schema.optional(Schema.String),
  }).annotate({ identifier: "RouterApplianceInstance" });

export interface GoogleLongrunningCancelOperationRequest {}

export const GoogleLongrunningCancelOperationRequest: Schema.Schema<GoogleLongrunningCancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleLongrunningCancelOperationRequest",
  });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface Hub {
  /** Output only. A list of the URIs of all attached spokes. This field is deprecated and will not be included in future API versions. Call ListSpokes on each region instead. */
  spokes?: ReadonlyArray<string>;
  /** Short description of the hub resource. */
  description?: string;
  /** Output only. Google-generated UUID for this resource. This is unique across all Hub resources. If a Hub resource is deleted and another with the same name is created, it gets a different unique_id. */
  uniqueId?: string;
  /** Time when the Hub was updated. */
  updateTime?: string;
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Time when the Hub was created. */
  createTime?: string;
  /** Immutable. The name of a Hub resource. */
  name?: string;
  /** Output only. The current lifecycle state of this Hub. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "UPDATING"
    | "FAILED"
    | (string & {});
}

export const Hub: Schema.Schema<Hub> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokes: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    uniqueId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "Hub" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface Spoke {
  /** Short description of the spoke resource */
  description?: string;
  /** The URIs of linked interconnect attachment resources */
  linkedInterconnectAttachments?: ReadonlyArray<string>;
  /** The resource URL of the hub resource that the spoke is attached to */
  hub?: string;
  /** The URIs of linked Router appliance resources */
  linkedRouterApplianceInstances?: ReadonlyArray<RouterApplianceInstance>;
  /** The time when the Spoke was updated. */
  updateTime?: string;
  /** User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. The current lifecycle state of this Hub. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "UPDATING"
    | "FAILED"
    | (string & {});
  /** Immutable. The name of a Spoke resource. */
  name?: string;
  /** The URIs of linked VPN tunnel resources */
  linkedVpnTunnels?: ReadonlyArray<string>;
  /** Output only. Google-generated UUID for this resource. This is unique across all Spoke resources. If a Spoke resource is deleted and another with the same name is created, it gets a different unique_id. */
  uniqueId?: string;
  /** The time when the Spoke was created. */
  createTime?: string;
}

export const Spoke: Schema.Schema<Spoke> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    linkedInterconnectAttachments: Schema.optional(Schema.Array(Schema.String)),
    hub: Schema.optional(Schema.String),
    linkedRouterApplianceInstances: Schema.optional(
      Schema.Array(RouterApplianceInstance),
    ),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    linkedVpnTunnels: Schema.optional(Schema.Array(Schema.String)),
    uniqueId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Spoke" });

export interface ListSpokesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Spokes to be returned. */
  spokes?: ReadonlyArray<Spoke>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
}

export const ListSpokesResponse: Schema.Schema<ListSpokesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    spokes: Schema.optional(Schema.Array(Spoke)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSpokesResponse" });

export interface OperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListHubsResponse {
  /** Hubs to be returned. */
  hubs?: ReadonlyArray<Hub>;
  /** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListHubsResponse: Schema.Schema<ListHubsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hubs: Schema.optional(Schema.Array(Hub)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListHubsResponse" });

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

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsSpokesRequest {
  /** Required. The name of Spoke resource. */
  name: string;
}

export const GetProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSpokesRequest>;

export type GetProjectsLocationsSpokesResponse = Spoke;
export const GetProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Spoke;

export type GetProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details about a Network Connectivity Center spoke. */
export const getProjectsLocationsSpokes: API.OperationMethod<
  GetProjectsLocationsSpokesRequest,
  GetProjectsLocationsSpokesResponse,
  GetProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSpokesRequest,
  output: GetProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSpokesRequest {
  /** Optional. Unique id for the Spoke to create. */
  spokeId?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent's resource name of the Spoke. */
  parent: string;
  /** Request body */
  body?: Spoke;
}

export const CreateProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spokeId: Schema.optional(Schema.String).pipe(T.HttpQuery("spokeId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Spoke).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/spokes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSpokesRequest>;

export type CreateProjectsLocationsSpokesResponse = GoogleLongrunningOperation;
export const CreateProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Network Connectivity Center spoke. */
export const createProjectsLocationsSpokes: API.OperationMethod<
  CreateProjectsLocationsSpokesRequest,
  CreateProjectsLocationsSpokesResponse,
  CreateProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSpokesRequest,
  output: CreateProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSpokesRequest {
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
  /** Required. The parent's resource name. */
  parent: string;
  /** The page token. */
  pageToken?: string;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
}

export const ListProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/spokes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSpokesRequest>;

export type ListProjectsLocationsSpokesResponse = ListSpokesResponse;
export const ListProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSpokesResponse;

export type ListProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Network Connectivity Center spokes in a specified project and location. */
export const listProjectsLocationsSpokes: API.PaginatedOperationMethod<
  ListProjectsLocationsSpokesRequest,
  ListProjectsLocationsSpokesResponse,
  ListProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSpokesRequest,
  output: ListProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsSpokesRequest {
  /** Immutable. The name of a Spoke resource. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Spoke resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Spoke;
}

export const PatchProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Spoke).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSpokesRequest>;

export type PatchProjectsLocationsSpokesResponse = GoogleLongrunningOperation;
export const PatchProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a Network Connectivity Center spoke. */
export const patchProjectsLocationsSpokes: API.OperationMethod<
  PatchProjectsLocationsSpokesRequest,
  PatchProjectsLocationsSpokesResponse,
  PatchProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSpokesRequest,
  output: PatchProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsSpokesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsSpokesRequest>;

export type SetIamPolicyProjectsLocationsSpokesResponse = Policy;
export const SetIamPolicyProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsSpokes: API.OperationMethod<
  SetIamPolicyProjectsLocationsSpokesRequest,
  SetIamPolicyProjectsLocationsSpokesResponse,
  SetIamPolicyProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsSpokesRequest,
  output: SetIamPolicyProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsSpokesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsSpokesRequest>;

export type TestIamPermissionsProjectsLocationsSpokesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsSpokes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsSpokesRequest,
  TestIamPermissionsProjectsLocationsSpokesResponse,
  TestIamPermissionsProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsSpokesRequest,
  output: TestIamPermissionsProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsSpokesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsSpokesRequest>;

export type GetIamPolicyProjectsLocationsSpokesResponse = Policy;
export const GetIamPolicyProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsSpokes: API.OperationMethod<
  GetIamPolicyProjectsLocationsSpokesRequest,
  GetIamPolicyProjectsLocationsSpokesResponse,
  GetIamPolicyProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsSpokesRequest,
  output: GetIamPolicyProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSpokesRequest {
  /** Required. The name of the Spoke to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSpokesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSpokesRequest>;

export type DeleteProjectsLocationsSpokesResponse = GoogleLongrunningOperation;
export const DeleteProjectsLocationsSpokesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsSpokesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Network Connectivity Center spoke. */
export const deleteProjectsLocationsSpokes: API.OperationMethod<
  DeleteProjectsLocationsSpokesRequest,
  DeleteProjectsLocationsSpokesResponse,
  DeleteProjectsLocationsSpokesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSpokesRequest,
  output: DeleteProjectsLocationsSpokesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGlobalHubsRequest {
  /** Required. The parent resource's name. */
  parent: string;
  /** The page token. */
  pageToken?: string;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
}

export const ListProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/hubs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalHubsRequest>;

export type ListProjectsLocationsGlobalHubsResponse = ListHubsResponse;
export const ListProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListHubsResponse;

export type ListProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Network Connectivity Center hubs associated with a given project. */
export const listProjectsLocationsGlobalHubs: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalHubsRequest,
  ListProjectsLocationsGlobalHubsResponse,
  ListProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalHubsRequest,
  output: ListProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsGlobalHubsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the Hub resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Immutable. The name of a Hub resource. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Hub;
}

export const PatchProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Hub).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlobalHubsRequest>;

export type PatchProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the description and/or labels of a Network Connectivity Center hub. */
export const patchProjectsLocationsGlobalHubs: API.OperationMethod<
  PatchProjectsLocationsGlobalHubsRequest,
  PatchProjectsLocationsGlobalHubsResponse,
  PatchProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlobalHubsRequest,
  output: PatchProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlobalHubsRequest {
  /** Required. Name of the Hub resource to get. */
  name: string;
}

export const GetProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalHubsRequest>;

export type GetProjectsLocationsGlobalHubsResponse = Hub;
export const GetProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Hub;

export type GetProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details about a Network Connectivity Center hub. */
export const getProjectsLocationsGlobalHubs: API.OperationMethod<
  GetProjectsLocationsGlobalHubsRequest,
  GetProjectsLocationsGlobalHubsResponse,
  GetProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalHubsRequest,
  output: GetProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGlobalHubsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource's name of the Hub. */
  parent: string;
  /** Optional. Unique id for the Hub to create. */
  hubId?: string;
  /** Request body */
  body?: Hub;
}

export const CreateProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    hubId: Schema.optional(Schema.String).pipe(T.HttpQuery("hubId")),
    body: Schema.optional(Hub).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+parent}/hubs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlobalHubsRequest>;

export type CreateProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Network Connectivity Center hub in the specified project. */
export const createProjectsLocationsGlobalHubs: API.OperationMethod<
  CreateProjectsLocationsGlobalHubsRequest,
  CreateProjectsLocationsGlobalHubsResponse,
  CreateProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlobalHubsRequest,
  output: CreateProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGlobalHubsRequest {
  /** Required. The name of the Hub to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlobalHubsRequest>;

export type DeleteProjectsLocationsGlobalHubsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Network Connectivity Center hub. */
export const deleteProjectsLocationsGlobalHubs: API.OperationMethod<
  DeleteProjectsLocationsGlobalHubsRequest,
  DeleteProjectsLocationsGlobalHubsResponse,
  DeleteProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlobalHubsRequest,
  output: DeleteProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGlobalHubsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGlobalHubsRequest>;

export type GetIamPolicyProjectsLocationsGlobalHubsResponse = Policy;
export const GetIamPolicyProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGlobalHubs: API.OperationMethod<
  GetIamPolicyProjectsLocationsGlobalHubsRequest,
  GetIamPolicyProjectsLocationsGlobalHubsResponse,
  GetIamPolicyProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGlobalHubsRequest,
  output: GetIamPolicyProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsGlobalHubsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGlobalHubsRequest>;

export type SetIamPolicyProjectsLocationsGlobalHubsResponse = Policy;
export const SetIamPolicyProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsGlobalHubs: API.OperationMethod<
  SetIamPolicyProjectsLocationsGlobalHubsRequest,
  SetIamPolicyProjectsLocationsGlobalHubsResponse,
  SetIamPolicyProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGlobalHubsRequest,
  output: SetIamPolicyProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsGlobalHubsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGlobalHubsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGlobalHubsRequest>;

export type TestIamPermissionsProjectsLocationsGlobalHubsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGlobalHubsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGlobalHubsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGlobalHubs: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGlobalHubsRequest,
  TestIamPermissionsProjectsLocationsGlobalHubsResponse,
  TestIamPermissionsProjectsLocationsGlobalHubsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGlobalHubsRequest,
  output: TestIamPermissionsProjectsLocationsGlobalHubsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInternalRangesRequest {
  /** Required. The parent resource's name. */
  parent: string;
  /** The page token. */
  pageToken?: string;
  /** A filter expression that filters the results listed in the response. */
  filter?: string;
  /** Sort the results by a certain order. */
  orderBy?: string;
  /** The maximum number of results per page that should be returned. */
  pageSize?: number;
}

export const ListProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/internalRanges" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInternalRangesRequest>;

export type ListProjectsLocationsInternalRangesResponse =
  ListInternalRangesResponse;
export const ListProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInternalRangesResponse;

export type ListProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists internal ranges in a given project and location. */
export const listProjectsLocationsInternalRanges: API.PaginatedOperationMethod<
  ListProjectsLocationsInternalRangesRequest,
  ListProjectsLocationsInternalRangesResponse,
  ListProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInternalRangesRequest,
  output: ListProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsInternalRangesRequest {
  /** Identifier. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the internal range resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: InternalRange;
}

export const PatchProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InternalRange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInternalRangesRequest>;

export type PatchProjectsLocationsInternalRangesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single internal range. */
export const patchProjectsLocationsInternalRanges: API.OperationMethod<
  PatchProjectsLocationsInternalRangesRequest,
  PatchProjectsLocationsInternalRangesResponse,
  PatchProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInternalRangesRequest,
  output: PatchProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInternalRangesRequest {
  /** Required. Name of the InternalRange to get. */
  name: string;
}

export const GetProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInternalRangesRequest>;

export type GetProjectsLocationsInternalRangesResponse = InternalRange;
export const GetProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InternalRange;

export type GetProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single internal range. */
export const getProjectsLocationsInternalRanges: API.OperationMethod<
  GetProjectsLocationsInternalRangesRequest,
  GetProjectsLocationsInternalRangesResponse,
  GetProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInternalRangesRequest,
  output: GetProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsInternalRangesRequest {
  /** Required. The parent resource's name of the InternalRange. */
  parent: string;
  /** Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/internalRanges/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. */
  internalRangeId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: InternalRange;
}

export const CreateProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    internalRangeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("internalRangeId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(InternalRange).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/internalRanges",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInternalRangesRequest>;

export type CreateProjectsLocationsInternalRangesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new internal range in a given project and location. */
export const createProjectsLocationsInternalRanges: API.OperationMethod<
  CreateProjectsLocationsInternalRangesRequest,
  CreateProjectsLocationsInternalRangesResponse,
  CreateProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInternalRangesRequest,
  output: CreateProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsInternalRangesRequest {
  /** Required. The name of the InternalRange to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInternalRangesRequest>;

export type DeleteProjectsLocationsInternalRangesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single internal range. */
export const deleteProjectsLocationsInternalRanges: API.OperationMethod<
  DeleteProjectsLocationsInternalRangesRequest,
  DeleteProjectsLocationsInternalRangesResponse,
  DeleteProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInternalRangesRequest,
  output: DeleteProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsInternalRangesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsInternalRangesRequest>;

export type GetIamPolicyProjectsLocationsInternalRangesResponse = Policy;
export const GetIamPolicyProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsInternalRanges: API.OperationMethod<
  GetIamPolicyProjectsLocationsInternalRangesRequest,
  GetIamPolicyProjectsLocationsInternalRangesResponse,
  GetIamPolicyProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsInternalRangesRequest,
  output: GetIamPolicyProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsInternalRangesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsInternalRangesRequest>;

export type SetIamPolicyProjectsLocationsInternalRangesResponse = Policy;
export const SetIamPolicyProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsInternalRanges: API.OperationMethod<
  SetIamPolicyProjectsLocationsInternalRangesRequest,
  SetIamPolicyProjectsLocationsInternalRangesResponse,
  SetIamPolicyProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsInternalRangesRequest,
  output: SetIamPolicyProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsInternalRangesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsInternalRangesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsInternalRangesRequest>;

export type TestIamPermissionsProjectsLocationsInternalRangesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsInternalRangesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsInternalRangesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsInternalRanges: API.OperationMethod<
  TestIamPermissionsProjectsLocationsInternalRangesRequest,
  TestIamPermissionsProjectsLocationsInternalRangesResponse,
  TestIamPermissionsProjectsLocationsInternalRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsInternalRangesRequest,
  output: TestIamPermissionsProjectsLocationsInternalRangesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
