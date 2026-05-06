// ==========================================================================
// App Hub API (apphub v1alpha)
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
  name: "apphub",
  version: "v1alpha",
  rootUrl: "https://apphub.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DetachServiceProjectAttachmentRequest {}

export const DetachServiceProjectAttachmentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DetachServiceProjectAttachmentRequest",
  });

export interface Scope {
  /** Required. Scope Type. */
  type?: "TYPE_UNSPECIFIED" | "REGIONAL" | "GLOBAL" | (string & {});
}

export const Scope = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Scope" });

export interface Criticality {
  /** Optional. Criticality level. Can contain only lowercase letters, numeric characters, underscores, and dashes. Can have a maximum length of 63 characters. Deprecated: Please refer to type instead. */
  level?: string;
  /** Optional. Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead. */
  missionCritical?: boolean;
  /** Required. Criticality Type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const Criticality = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  level: Schema.optional(Schema.String),
  missionCritical: Schema.optional(Schema.Boolean),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Criticality" });

export interface Channel {
  /** Required. URI of the channel. */
  uri?: string;
}

export const Channel = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
}).annotate({ identifier: "Channel" });

export interface ContactInfo {
  /** Required. Email address of the contacts. */
  email?: string;
  /** Optional. Contact's name. Can have a maximum length of 63 characters. */
  displayName?: string;
  /** Optional. Communication channel of the contacts. */
  channel?: Channel;
}

export const ContactInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  channel: Schema.optional(Channel),
}).annotate({ identifier: "ContactInfo" });

export interface Environment {
  /** Optional. Environment name. Can contain only lowercase letters, numeric characters, underscores, and dashes. Can have a maximum length of 63 characters. Deprecated: Please refer to type instead. */
  environment?: string;
  /** Required. Environment Type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const Environment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  environment: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Environment" });

export interface Attributes {
  /** Optional. User-defined criticality information. */
  criticality?: Criticality;
  /** Optional. Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<ContactInfo>;
  /** Optional. Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<ContactInfo>;
  /** Optional. Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<ContactInfo>;
  /** Optional. User-defined environment information. */
  environment?: Environment;
}

export const Attributes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  criticality: Schema.optional(Criticality),
  developerOwners: Schema.optional(Schema.Array(ContactInfo)),
  businessOwners: Schema.optional(Schema.Array(ContactInfo)),
  operatorOwners: Schema.optional(Schema.Array(ContactInfo)),
  environment: Schema.optional(Environment),
}).annotate({ identifier: "Attributes" });

export interface Application {
  /** Output only. Application state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | (string & {});
  /** Identifier. The resource name of an Application. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}"` */
  name?: string;
  /** Required. Immutable. Defines what data can be included into this Application. Limits which Services and Workloads can be registered. */
  scope?: Scope;
  /** Output only. Create time. */
  createTime?: string;
  /** Optional. User-defined name for the Application. Can have a maximum length of 63 characters. */
  displayName?: string;
  /** Optional. Consumer provided attributes. */
  attributes?: Attributes;
  /** Output only. Update time. */
  updateTime?: string;
  /** Output only. A universally unique identifier (in UUID4 format) for the `Application`. */
  uid?: string;
  /** Optional. User-defined description of an Application. Can have a maximum length of 2048 characters. */
  description?: string;
}

export const Application = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  scope: Schema.optional(Scope),
  createTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  attributes: Schema.optional(Attributes),
  updateTime: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "Application" });

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

export const AuditLogConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logType: Schema.optional(Schema.String),
  exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  service: Schema.optional(Schema.String),
  auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
}).annotate({ identifier: "AuditConfig" });

export interface Expr {
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
}

export const Expr = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "Expr" });

export interface Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  condition: Schema.optional(Expr),
  role: Schema.optional(Schema.String),
  members: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Binding" });

export interface Policy {
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
  version: Schema.optional(Schema.Number),
  bindings: Schema.optional(Schema.Array(Binding)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Policy" });

export interface ExtendedMetadata {
  /** Output only. The metadata contents. */
  metadataStruct?: Record<string, unknown>;
}

export const ExtendedMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadataStruct: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "ExtendedMetadata" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
  requestedCancellation: Schema.optional(Schema.Boolean),
  statusMessage: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface ServiceProjectAttachment {
  /** Output only. ServiceProjectAttachment state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | (string & {});
  /** Identifier. The resource name of a ServiceProjectAttachment. Format: `"projects/{host-project-id}/locations/global/serviceProjectAttachments/{service-project-id}."` */
  name?: string;
  /** Required. Immutable. Service project name in the format: `"projects/abc"` or `"projects/123"`. As input, project name with either project id or number are accepted. As output, this field will contain project number. */
  serviceProject?: string;
  /** Output only. Create time. */
  createTime?: string;
  /** Output only. A globally unique identifier (in UUID4 format) for the `ServiceProjectAttachment`. */
  uid?: string;
}

export const ServiceProjectAttachment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    serviceProject: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceProjectAttachment" });

export interface ListServiceProjectAttachmentsResponse {
  /** List of service project attachments. */
  serviceProjectAttachments?: ReadonlyArray<ServiceProjectAttachment>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListServiceProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceProjectAttachments: Schema.optional(
      Schema.Array(ServiceProjectAttachment),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListServiceProjectAttachmentsResponse" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.Number),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  done: Schema.optional(Schema.Boolean),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  error: Schema.optional(Status),
}).annotate({ identifier: "Operation" });

export interface ServiceReference {
  /** Output only. The underlying resource URI. For example, URI of Forwarding Rule, URL Map, and Backend Service. */
  uri?: string;
  /** Output only. Additional path under the resource URI (demultiplexing one resource URI into multiple entries). Smallest unit a policy can be attached to. Examples: URL Map path entry. */
  path?: string;
}

export const ServiceReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
}).annotate({ identifier: "ServiceReference" });

export interface RegistrationType {
  /** Output only. The registration type of a service. */
  type?: "TYPE_UNSPECIFIED" | "EXCLUSIVE" | "SHARED" | (string & {});
}

export const RegistrationType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "RegistrationType" });

export interface FunctionalType {
  /** Output only. The functional type of a service or workload. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "AGENT"
    | "MCP_SERVER"
    | "ENDPOINT"
    | (string & {});
}

export const FunctionalType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "FunctionalType" });

export interface Identity {
  /** Output only. The principal of the identity. Supported formats: * `sa://my-sa@PROJECT_ID.iam.gserviceaccount.com` for GCP Service Account * `principal://POOL_ID.global.PROJECT_NUMBER.workload.id.goog/ns/NAMESPACE_ID/sa/MANAGED_IDENTITY_ID` for Managed Workload Identity */
  principal?: string;
}

export const Identity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principal: Schema.optional(Schema.String),
}).annotate({ identifier: "Identity" });

export interface ServiceProperties {
  /** Output only. The service project identifier that the underlying cloud resource resides in. */
  gcpProject?: string;
  /** Output only. The location that the underlying resource resides in, for example, us-west1. */
  location?: string;
  /** Output only. The location that the underlying resource resides in if it is zonal, for example, us-west1-a). */
  zone?: string;
  /** Output only. The registration type of the service. */
  registrationType?: RegistrationType;
  /** Output only. The type of the service. */
  functionalType?: FunctionalType;
  /** Output only. Additional metadata specific to the resource type. The key is a string that identifies the type of metadata and the value is the metadata contents specific to that type. Key format: `apphub.googleapis.com/{metadataType}` */
  extendedMetadata?: Record<string, ExtendedMetadata>;
  /** Output only. The identity associated with the service. */
  identity?: Identity;
}

export const ServiceProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcpProject: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
  registrationType: Schema.optional(RegistrationType),
  functionalType: Schema.optional(FunctionalType),
  extendedMetadata: Schema.optional(
    Schema.Record(Schema.String, ExtendedMetadata),
  ),
  identity: Schema.optional(Identity),
}).annotate({ identifier: "ServiceProperties" });

export interface Service {
  /** Optional. User-defined name for the Service. Can have a maximum length of 63 characters. */
  displayName?: string;
  /** Optional. Consumer provided attributes. */
  attributes?: Attributes;
  /** Output only. Update time. */
  updateTime?: string;
  /** Output only. A universally unique identifier (UUID) for the `Service` in the UUID4 format. */
  uid?: string;
  /** Optional. User-defined description of a Service. Can have a maximum length of 2048 characters. */
  description?: string;
  /** Output only. Reference to an underlying networking resource that can comprise a Service. These are immutable. */
  serviceReference?: ServiceReference;
  /** Required. Immutable. The resource name of the original discovered service. */
  discoveredService?: string;
  /** Output only. Properties of an underlying compute resource that can comprise a Service. These are immutable. */
  serviceProperties?: ServiceProperties;
  /** Output only. Service state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "DETACHED"
    | (string & {});
  /** Identifier. The resource name of a Service. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}/services/{service-id}"` */
  name?: string;
  /** Output only. Create time. */
  createTime?: string;
}

export const Service = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  attributes: Schema.optional(Attributes),
  updateTime: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  serviceReference: Schema.optional(ServiceReference),
  discoveredService: Schema.optional(Schema.String),
  serviceProperties: Schema.optional(ServiceProperties),
  state: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Service" });

export interface ListApplicationsResponse {
  /** List of Applications. */
  applications?: ReadonlyArray<Application>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applications: Schema.optional(Schema.Array(Application)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListApplicationsResponse" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  locationId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(Location)),
}).annotate({ identifier: "ListLocationsResponse" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface LookupServiceProjectAttachmentResponse {
  /** Service project attachment for a project if exists, empty otherwise. */
  serviceProjectAttachment?: ServiceProjectAttachment;
}

export const LookupServiceProjectAttachmentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceProjectAttachment: Schema.optional(ServiceProjectAttachment),
  }).annotate({ identifier: "LookupServiceProjectAttachmentResponse" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policy: Schema.optional(Policy),
  updateMask: Schema.optional(Schema.String),
}).annotate({ identifier: "SetIamPolicyRequest" });

export interface WorkloadProperties {
  /** Output only. The location that the underlying compute resource resides in if it is zonal (for example, us-west1-a). */
  zone?: string;
  /** Output only. The service project identifier that the underlying cloud resource resides in. Empty for non-cloud resources. */
  gcpProject?: string;
  /** Output only. The location that the underlying compute resource resides in (for example, us-west1). */
  location?: string;
  /** Output only. The type of the workload. */
  functionalType?: FunctionalType;
  /** Output only. Additional metadata specific to the resource type. The key is a string that identifies the type of metadata and the value is the metadata contents specific to that type. Key format: `apphub.googleapis.com/{metadataType}` */
  extendedMetadata?: Record<string, ExtendedMetadata>;
  /** Output only. The identity associated with the workload. */
  identity?: Identity;
}

export const WorkloadProperties = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zone: Schema.optional(Schema.String),
  gcpProject: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  functionalType: Schema.optional(FunctionalType),
  extendedMetadata: Schema.optional(
    Schema.Record(Schema.String, ExtendedMetadata),
  ),
  identity: Schema.optional(Identity),
}).annotate({ identifier: "WorkloadProperties" });

export interface WorkloadReference {
  /** Output only. The underlying compute resource uri. */
  uri?: string;
}

export const WorkloadReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
}).annotate({ identifier: "WorkloadReference" });

export interface DiscoveredWorkload {
  /** Identifier. The resource name of the discovered workload. Format: `"projects/{host-project-id}/locations/{location}/discoveredWorkloads/{uuid}"` */
  name?: string;
  /** Output only. Properties of an underlying compute resource represented by the Workload. These are immutable. */
  workloadProperties?: WorkloadProperties;
  /** Output only. Reference of an underlying compute resource represented by the Workload. These are immutable. */
  workloadReference?: WorkloadReference;
}

export const DiscoveredWorkload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  workloadProperties: Schema.optional(WorkloadProperties),
  workloadReference: Schema.optional(WorkloadReference),
}).annotate({ identifier: "DiscoveredWorkload" });

export interface ExtendedMetadataSchema {
  /** Identifier. Resource name of the schema. Format: projects//locations//extendedMetadataSchemas/ */
  name?: string;
  /** Output only. The JSON schema as a string. */
  jsonSchema?: string;
  /** Output only. The version of the schema. New versions are required to be backwards compatible. */
  schemaVersion?: string;
}

export const ExtendedMetadataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    jsonSchema: Schema.optional(Schema.String),
    schemaVersion: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ExtendedMetadataSchema" });

export interface Workload {
  /** Output only. Reference of an underlying compute resource represented by the Workload. These are immutable. */
  workloadReference?: WorkloadReference;
  /** Required. Immutable. The resource name of the original discovered workload. */
  discoveredWorkload?: string;
  /** Optional. User-defined description of a Workload. Can have a maximum length of 2048 characters. */
  description?: string;
  /** Output only. A universally unique identifier (UUID) for the `Workload` in the UUID4 format. */
  uid?: string;
  /** Optional. User-defined name for the Workload. Can have a maximum length of 63 characters. */
  displayName?: string;
  /** Optional. Consumer provided attributes. */
  attributes?: Attributes;
  /** Output only. Update time. */
  updateTime?: string;
  /** Output only. Properties of an underlying compute resource represented by the Workload. These are immutable. */
  workloadProperties?: WorkloadProperties;
  /** Output only. Create time. */
  createTime?: string;
  /** Identifier. The resource name of the Workload. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}/workloads/{workload-id}"` */
  name?: string;
  /** Output only. Workload state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "DETACHED"
    | (string & {});
}

export const Workload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workloadReference: Schema.optional(WorkloadReference),
  discoveredWorkload: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  attributes: Schema.optional(Attributes),
  updateTime: Schema.optional(Schema.String),
  workloadProperties: Schema.optional(WorkloadProperties),
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "Workload" });

export interface ListWorkloadsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** List of Workloads. */
  workloads?: ReadonlyArray<Workload>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWorkloadsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  workloads: Schema.optional(Schema.Array(Workload)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListWorkloadsResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface FindUnregisteredWorkloadsResponse {
  /** List of Discovered Workloads. */
  discoveredWorkloads?: ReadonlyArray<DiscoveredWorkload>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FindUnregisteredWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveredWorkloads: Schema.optional(Schema.Array(DiscoveredWorkload)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FindUnregisteredWorkloadsResponse" });

export interface DetachServiceProjectAttachmentResponse {}

export const DetachServiceProjectAttachmentResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DetachServiceProjectAttachmentResponse",
  });

export interface ListExtendedMetadataSchemasResponse {
  /** List of Extended Metadata Schemas. */
  extendedMetadataSchemas?: ReadonlyArray<ExtendedMetadataSchema>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListExtendedMetadataSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extendedMetadataSchemas: Schema.optional(
      Schema.Array(ExtendedMetadataSchema),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListExtendedMetadataSchemasResponse" });

export interface DiscoveredService {
  /** Identifier. The resource name of the discovered service. Format: `"projects/{host-project-id}/locations/{location}/discoveredServices/{uuid}"` */
  name?: string;
  /** Output only. Properties of an underlying compute resource that can comprise a Service. These are immutable. */
  serviceProperties?: ServiceProperties;
  /** Output only. Reference to an underlying networking resource that can comprise a Service. These are immutable. */
  serviceReference?: ServiceReference;
}

export const DiscoveredService = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  serviceProperties: Schema.optional(ServiceProperties),
  serviceReference: Schema.optional(ServiceReference),
}).annotate({ identifier: "DiscoveredService" });

export interface ListDiscoveredServicesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of Discovered Services. */
  discoveredServices?: ReadonlyArray<DiscoveredService>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDiscoveredServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    discoveredServices: Schema.optional(Schema.Array(DiscoveredService)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDiscoveredServicesResponse" });

export interface ListServicesResponse {
  /** List of Services. */
  services?: ReadonlyArray<Service>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListServicesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  services: Schema.optional(Schema.Array(Service)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListServicesResponse" });

export interface LookupDiscoveredServiceResponse {
  /** Discovered Service if exists, empty otherwise. */
  discoveredService?: DiscoveredService;
}

export const LookupDiscoveredServiceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveredService: Schema.optional(DiscoveredService),
  }).annotate({ identifier: "LookupDiscoveredServiceResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface ListDiscoveredWorkloadsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** List of Discovered Workloads. */
  discoveredWorkloads?: ReadonlyArray<DiscoveredWorkload>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListDiscoveredWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    discoveredWorkloads: Schema.optional(Schema.Array(DiscoveredWorkload)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListDiscoveredWorkloadsResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface Boundary {
  /** Identifier. The resource name of the boundary. Format: "projects/{project}/locations/{location}/boundary" */
  name?: string;
  /** Output only. Boundary type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "AUTOMATIC"
    | "MANUAL"
    | "MANAGED_AUTOMATIC"
    | (string & {});
  /** Output only. Create time. */
  createTime?: string;
  /** Optional. The resource name of the CRM node being attached to the boundary. Format: `projects/{project-number}` or `projects/{project-id}` */
  crmNode?: string;
  /** Output only. Update time. */
  updateTime?: string;
}

export const Boundary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  crmNode: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Boundary" });

export interface LookupDiscoveredWorkloadResponse {
  /** Discovered Workload if exists, empty otherwise. */
  discoveredWorkload?: DiscoveredWorkload;
}

export const LookupDiscoveredWorkloadResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveredWorkload: Schema.optional(DiscoveredWorkload),
  }).annotate({ identifier: "LookupDiscoveredWorkloadResponse" });

export interface FindUnregisteredServicesResponse {
  /** List of Discovered Services. */
  discoveredServices?: ReadonlyArray<DiscoveredService>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const FindUnregisteredServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveredServices: Schema.optional(Schema.Array(DiscoveredService)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FindUnregisteredServicesResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface LookupServiceProjectAttachmentProjectsLocationsRequest {
  /** Required. Service project ID and location to lookup service project attachment for. Only global location is supported. Expected format: `projects/{project}/locations/{location}`. */
  name: string;
}

export const LookupServiceProjectAttachmentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{name}:lookupServiceProjectAttachment",
    }),
    svc,
  ) as unknown as Schema.Schema<LookupServiceProjectAttachmentProjectsLocationsRequest>;

export type LookupServiceProjectAttachmentProjectsLocationsResponse =
  LookupServiceProjectAttachmentResponse;
export const LookupServiceProjectAttachmentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LookupServiceProjectAttachmentResponse;

export type LookupServiceProjectAttachmentProjectsLocationsError =
  DefaultErrors;

/** Lists a service project attachment for a given service project. You can call this API from any project to find if it is attached to a host project. */
export const lookupServiceProjectAttachmentProjectsLocations: API.OperationMethod<
  LookupServiceProjectAttachmentProjectsLocationsRequest,
  LookupServiceProjectAttachmentProjectsLocationsResponse,
  LookupServiceProjectAttachmentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupServiceProjectAttachmentProjectsLocationsRequest,
  output: LookupServiceProjectAttachmentProjectsLocationsResponse,
  errors: [],
}));

export interface UpdateBoundaryProjectsLocationsRequest {
  /** Identifier. The resource name of the boundary. Format: "projects/{project}/locations/{location}/boundary" */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Boundary resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Boundary;
}

export const UpdateBoundaryProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Boundary).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateBoundaryProjectsLocationsRequest>;

export type UpdateBoundaryProjectsLocationsResponse = Operation;
export const UpdateBoundaryProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateBoundaryProjectsLocationsError = DefaultErrors;

/** Updates a Boundary. */
export const updateBoundaryProjectsLocations: API.OperationMethod<
  UpdateBoundaryProjectsLocationsRequest,
  UpdateBoundaryProjectsLocationsResponse,
  UpdateBoundaryProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateBoundaryProjectsLocationsRequest,
  output: UpdateBoundaryProjectsLocationsResponse,
  errors: [],
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [],
}));

export interface DetachServiceProjectAttachmentProjectsLocationsRequest {
  /** Required. Service project id and location to detach from a host project. Only global location is supported. Expected format: `projects/{project}/locations/{location}`. */
  name: string;
  /** Request body */
  body?: DetachServiceProjectAttachmentRequest;
}

export const DetachServiceProjectAttachmentProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DetachServiceProjectAttachmentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{name}:detachServiceProjectAttachment",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DetachServiceProjectAttachmentProjectsLocationsRequest>;

export type DetachServiceProjectAttachmentProjectsLocationsResponse =
  DetachServiceProjectAttachmentResponse;
export const DetachServiceProjectAttachmentProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DetachServiceProjectAttachmentResponse;

export type DetachServiceProjectAttachmentProjectsLocationsError =
  DefaultErrors;

/** Detaches a service project from a host project. You can call this API from any service project without needing access to the host project that it is attached to. */
export const detachServiceProjectAttachmentProjectsLocations: API.OperationMethod<
  DetachServiceProjectAttachmentProjectsLocationsRequest,
  DetachServiceProjectAttachmentProjectsLocationsResponse,
  DetachServiceProjectAttachmentProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DetachServiceProjectAttachmentProjectsLocationsRequest,
  output: DetachServiceProjectAttachmentProjectsLocationsResponse,
  errors: [],
}));

export interface GetBoundaryProjectsLocationsRequest {
  /** Required. The name of the boundary to retrieve. Format: `projects/{project}/locations/{location}/boundary`. */
  name: string;
}

export const GetBoundaryProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBoundaryProjectsLocationsRequest>;

export type GetBoundaryProjectsLocationsResponse = Boundary;
export const GetBoundaryProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Boundary;

export type GetBoundaryProjectsLocationsError = DefaultErrors;

/** Gets a Boundary. */
export const getBoundaryProjectsLocations: API.OperationMethod<
  GetBoundaryProjectsLocationsRequest,
  GetBoundaryProjectsLocationsResponse,
  GetBoundaryProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBoundaryProjectsLocationsRequest,
  output: GetBoundaryProjectsLocationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDiscoveredWorkloadsRequest {
  /** Required. Fully qualified name of the Discovered Workload to fetch. Expected format: `projects/{project}/locations/{location}/discoveredWorkloads/{discoveredWorkload}`. */
  name: string;
}

export const GetProjectsLocationsDiscoveredWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveredWorkloadsRequest>;

export type GetProjectsLocationsDiscoveredWorkloadsResponse =
  DiscoveredWorkload;
export const GetProjectsLocationsDiscoveredWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DiscoveredWorkload;

export type GetProjectsLocationsDiscoveredWorkloadsError = DefaultErrors;

/** Gets a Discovered Workload in a host project and location. */
export const getProjectsLocationsDiscoveredWorkloads: API.OperationMethod<
  GetProjectsLocationsDiscoveredWorkloadsRequest,
  GetProjectsLocationsDiscoveredWorkloadsResponse,
  GetProjectsLocationsDiscoveredWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveredWorkloadsRequest,
  output: GetProjectsLocationsDiscoveredWorkloadsResponse,
  errors: [],
}));

export interface ListProjectsLocationsDiscoveredWorkloadsRequest {
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Project and location to list Discovered Workloads on. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsDiscoveredWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/discoveredWorkloads" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveredWorkloadsRequest>;

export type ListProjectsLocationsDiscoveredWorkloadsResponse =
  ListDiscoveredWorkloadsResponse;
export const ListProjectsLocationsDiscoveredWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDiscoveredWorkloadsResponse;

export type ListProjectsLocationsDiscoveredWorkloadsError = DefaultErrors;

/** Lists Discovered Workloads that can be added to an Application in a host project and location. */
export const listProjectsLocationsDiscoveredWorkloads: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveredWorkloadsRequest,
  ListProjectsLocationsDiscoveredWorkloadsResponse,
  ListProjectsLocationsDiscoveredWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveredWorkloadsRequest,
  output: ListProjectsLocationsDiscoveredWorkloadsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface LookupProjectsLocationsDiscoveredWorkloadsRequest {
  /** Required. Host project ID and location to lookup Discovered Workload in. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. Resource URI to find Discovered Workload for. Accepts both project number and project ID and does translation when needed. */
  uri?: string;
}

export const LookupProjectsLocationsDiscoveredWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    uri: Schema.optional(Schema.String).pipe(T.HttpQuery("uri")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{parent}/discoveredWorkloads:lookup",
    }),
    svc,
  ) as unknown as Schema.Schema<LookupProjectsLocationsDiscoveredWorkloadsRequest>;

export type LookupProjectsLocationsDiscoveredWorkloadsResponse =
  LookupDiscoveredWorkloadResponse;
export const LookupProjectsLocationsDiscoveredWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LookupDiscoveredWorkloadResponse;

export type LookupProjectsLocationsDiscoveredWorkloadsError = DefaultErrors;

/** Lists a Discovered Workload in a host project and location, with a given resource URI. */
export const lookupProjectsLocationsDiscoveredWorkloads: API.OperationMethod<
  LookupProjectsLocationsDiscoveredWorkloadsRequest,
  LookupProjectsLocationsDiscoveredWorkloadsResponse,
  LookupProjectsLocationsDiscoveredWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupProjectsLocationsDiscoveredWorkloadsRequest,
  output: LookupProjectsLocationsDiscoveredWorkloadsResponse,
  errors: [],
}));

export interface FindUnregisteredProjectsLocationsDiscoveredWorkloadsRequest {
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Project and location to find unregistered Discovered Workloads on. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const FindUnregisteredProjectsLocationsDiscoveredWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{parent}/discoveredWorkloads:findUnregistered",
    }),
    svc,
  ) as unknown as Schema.Schema<FindUnregisteredProjectsLocationsDiscoveredWorkloadsRequest>;

export type FindUnregisteredProjectsLocationsDiscoveredWorkloadsResponse =
  FindUnregisteredWorkloadsResponse;
export const FindUnregisteredProjectsLocationsDiscoveredWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FindUnregisteredWorkloadsResponse;

export type FindUnregisteredProjectsLocationsDiscoveredWorkloadsError =
  DefaultErrors;

/** Finds unregistered workloads in a host project and location. */
export const findUnregisteredProjectsLocationsDiscoveredWorkloads: API.PaginatedOperationMethod<
  FindUnregisteredProjectsLocationsDiscoveredWorkloadsRequest,
  FindUnregisteredProjectsLocationsDiscoveredWorkloadsResponse,
  FindUnregisteredProjectsLocationsDiscoveredWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FindUnregisteredProjectsLocationsDiscoveredWorkloadsRequest,
  output: FindUnregisteredProjectsLocationsDiscoveredWorkloadsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsApplicationsRequest {
  /** Required. Fully qualified name of the Application to fetch. Expected format: `projects/{project}/locations/{location}/applications/{application}`. */
  name: string;
}

export const GetProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApplicationsRequest>;

export type GetProjectsLocationsApplicationsResponse = Application;
export const GetProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Application;

export type GetProjectsLocationsApplicationsError = DefaultErrors;

/** Gets an Application in a host project and location. */
export const getProjectsLocationsApplications: API.OperationMethod<
  GetProjectsLocationsApplicationsRequest,
  GetProjectsLocationsApplicationsResponse,
  GetProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApplicationsRequest,
  output: GetProjectsLocationsApplicationsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsApplicationsRequest {
  /** Required. Fully qualified name of the Application to delete. Expected format: `projects/{project}/locations/{location}/applications/{application}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsApplicationsRequest>;

export type DeleteProjectsLocationsApplicationsResponse = Operation;
export const DeleteProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsApplicationsError = DefaultErrors;

/** Deletes an Application in a host project and location. */
export const deleteProjectsLocationsApplications: API.OperationMethod<
  DeleteProjectsLocationsApplicationsRequest,
  DeleteProjectsLocationsApplicationsResponse,
  DeleteProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsApplicationsRequest,
  output: DeleteProjectsLocationsApplicationsResponse,
  errors: [],
}));

export interface TestIamPermissionsProjectsLocationsApplicationsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsApplicationsRequest>;

export type TestIamPermissionsProjectsLocationsApplicationsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsApplicationsError =
  DefaultErrors;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsApplications: API.OperationMethod<
  TestIamPermissionsProjectsLocationsApplicationsRequest,
  TestIamPermissionsProjectsLocationsApplicationsResponse,
  TestIamPermissionsProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsApplicationsRequest,
  output: TestIamPermissionsProjectsLocationsApplicationsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsApplicationsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Project and location to create Application in. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. The Application identifier. Must contain only lowercase letters, numbers or hyphens, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  applicationId?: string;
  /** Request body */
  body?: Application;
}

export const CreateProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    applicationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("applicationId"),
    ),
    body: Schema.optional(Application).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{parent}/applications",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsApplicationsRequest>;

export type CreateProjectsLocationsApplicationsResponse = Operation;
export const CreateProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsApplicationsError = DefaultErrors;

/** Creates an Application in a host project and location. */
export const createProjectsLocationsApplications: API.OperationMethod<
  CreateProjectsLocationsApplicationsRequest,
  CreateProjectsLocationsApplicationsResponse,
  CreateProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsApplicationsRequest,
  output: CreateProjectsLocationsApplicationsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsApplicationsRequest {
  /** Identifier. The resource name of an Application. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}"` */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Application resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. The API changes the values of the fields as specified in the update_mask. The API ignores the values of all fields not covered by the update_mask. You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Application;
}

export const PatchProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Application).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsApplicationsRequest>;

export type PatchProjectsLocationsApplicationsResponse = Operation;
export const PatchProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsApplicationsError = DefaultErrors;

/** Updates an Application in a host project and location. */
export const patchProjectsLocationsApplications: API.OperationMethod<
  PatchProjectsLocationsApplicationsRequest,
  PatchProjectsLocationsApplicationsResponse,
  PatchProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsApplicationsRequest,
  output: PatchProjectsLocationsApplicationsResponse,
  errors: [],
}));

export interface GetIamPolicyProjectsLocationsApplicationsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsApplicationsRequest>;

export type GetIamPolicyProjectsLocationsApplicationsResponse = Policy;
export const GetIamPolicyProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsApplicationsError = DefaultErrors;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsApplications: API.OperationMethod<
  GetIamPolicyProjectsLocationsApplicationsRequest,
  GetIamPolicyProjectsLocationsApplicationsResponse,
  GetIamPolicyProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsApplicationsRequest,
  output: GetIamPolicyProjectsLocationsApplicationsResponse,
  errors: [],
}));

export interface SetIamPolicyProjectsLocationsApplicationsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsApplicationsRequest>;

export type SetIamPolicyProjectsLocationsApplicationsResponse = Policy;
export const SetIamPolicyProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsApplicationsError = DefaultErrors;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsApplications: API.OperationMethod<
  SetIamPolicyProjectsLocationsApplicationsRequest,
  SetIamPolicyProjectsLocationsApplicationsResponse,
  SetIamPolicyProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsApplicationsRequest,
  output: SetIamPolicyProjectsLocationsApplicationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsApplicationsRequest {
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Project and location to list Applications on. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/applications" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsApplicationsRequest>;

export type ListProjectsLocationsApplicationsResponse =
  ListApplicationsResponse;
export const ListProjectsLocationsApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListApplicationsResponse;

export type ListProjectsLocationsApplicationsError = DefaultErrors;

/** Lists Applications in a host project and location. */
export const listProjectsLocationsApplications: API.PaginatedOperationMethod<
  ListProjectsLocationsApplicationsRequest,
  ListProjectsLocationsApplicationsResponse,
  ListProjectsLocationsApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsApplicationsRequest,
  output: ListProjectsLocationsApplicationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsApplicationsServicesRequest {
  /** Required. Fully qualified name of the Service to delete from an Application. Expected format: `projects/{project}/locations/{location}/applications/{application}/services/{service}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsApplicationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsApplicationsServicesRequest>;

export type DeleteProjectsLocationsApplicationsServicesResponse = Operation;
export const DeleteProjectsLocationsApplicationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsApplicationsServicesError = DefaultErrors;

/** Deletes a Service from an Application. */
export const deleteProjectsLocationsApplicationsServices: API.OperationMethod<
  DeleteProjectsLocationsApplicationsServicesRequest,
  DeleteProjectsLocationsApplicationsServicesResponse,
  DeleteProjectsLocationsApplicationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsApplicationsServicesRequest,
  output: DeleteProjectsLocationsApplicationsServicesResponse,
  errors: [],
}));

export interface GetProjectsLocationsApplicationsServicesRequest {
  /** Required. Fully qualified name of the Service to fetch. Expected format: `projects/{project}/locations/{location}/applications/{application}/services/{service}`. */
  name: string;
}

export const GetProjectsLocationsApplicationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApplicationsServicesRequest>;

export type GetProjectsLocationsApplicationsServicesResponse = Service;
export const GetProjectsLocationsApplicationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Service;

export type GetProjectsLocationsApplicationsServicesError = DefaultErrors;

/** Gets a Service in an Application. */
export const getProjectsLocationsApplicationsServices: API.OperationMethod<
  GetProjectsLocationsApplicationsServicesRequest,
  GetProjectsLocationsApplicationsServicesResponse,
  GetProjectsLocationsApplicationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApplicationsServicesRequest,
  output: GetProjectsLocationsApplicationsServicesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsApplicationsServicesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The Service identifier. Must contain only lowercase letters, numbers or hyphens, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  serviceId?: string;
  /** Required. Fully qualified name of the parent Application to create the Service in. Expected format: `projects/{project}/locations/{location}/applications/{application}`. */
  parent: string;
  /** Request body */
  body?: Service;
}

export const CreateProjectsLocationsApplicationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    serviceId: Schema.optional(Schema.String).pipe(T.HttpQuery("serviceId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{parent}/services",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsApplicationsServicesRequest>;

export type CreateProjectsLocationsApplicationsServicesResponse = Operation;
export const CreateProjectsLocationsApplicationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsApplicationsServicesError = DefaultErrors;

/** Creates a Service in an Application. */
export const createProjectsLocationsApplicationsServices: API.OperationMethod<
  CreateProjectsLocationsApplicationsServicesRequest,
  CreateProjectsLocationsApplicationsServicesResponse,
  CreateProjectsLocationsApplicationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsApplicationsServicesRequest,
  output: CreateProjectsLocationsApplicationsServicesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsApplicationsServicesRequest {
  /** Identifier. The resource name of a Service. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}/services/{service-id}"` */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. The API changes the values of the fields as specified in the update_mask. The API ignores the values of all fields not covered by the update_mask. You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Service;
}

export const PatchProjectsLocationsApplicationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsApplicationsServicesRequest>;

export type PatchProjectsLocationsApplicationsServicesResponse = Operation;
export const PatchProjectsLocationsApplicationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsApplicationsServicesError = DefaultErrors;

/** Updates a Service in an Application. */
export const patchProjectsLocationsApplicationsServices: API.OperationMethod<
  PatchProjectsLocationsApplicationsServicesRequest,
  PatchProjectsLocationsApplicationsServicesResponse,
  PatchProjectsLocationsApplicationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsApplicationsServicesRequest,
  output: PatchProjectsLocationsApplicationsServicesResponse,
  errors: [],
}));

export interface ListProjectsLocationsApplicationsServicesRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Fully qualified name of the parent Application to list Services for. Expected format: `projects/{project}/locations/{location}/applications/{application}`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
}

export const ListProjectsLocationsApplicationsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/services" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsApplicationsServicesRequest>;

export type ListProjectsLocationsApplicationsServicesResponse =
  ListServicesResponse;
export const ListProjectsLocationsApplicationsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServicesResponse;

export type ListProjectsLocationsApplicationsServicesError = DefaultErrors;

/** Lists Services in an Application. */
export const listProjectsLocationsApplicationsServices: API.PaginatedOperationMethod<
  ListProjectsLocationsApplicationsServicesRequest,
  ListProjectsLocationsApplicationsServicesResponse,
  ListProjectsLocationsApplicationsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsApplicationsServicesRequest,
  output: ListProjectsLocationsApplicationsServicesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsApplicationsWorkloadsRequest {
  /** Required. Fully qualified name of the parent Application to list Workloads for. Expected format: `projects/{project}/locations/{location}/applications/{application}`. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsApplicationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/workloads" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsApplicationsWorkloadsRequest>;

export type ListProjectsLocationsApplicationsWorkloadsResponse =
  ListWorkloadsResponse;
export const ListProjectsLocationsApplicationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkloadsResponse;

export type ListProjectsLocationsApplicationsWorkloadsError = DefaultErrors;

/** Lists Workloads in an Application. */
export const listProjectsLocationsApplicationsWorkloads: API.PaginatedOperationMethod<
  ListProjectsLocationsApplicationsWorkloadsRequest,
  ListProjectsLocationsApplicationsWorkloadsResponse,
  ListProjectsLocationsApplicationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsApplicationsWorkloadsRequest,
  output: ListProjectsLocationsApplicationsWorkloadsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsApplicationsWorkloadsRequest {
  /** Required. Fully qualified name of the Application to create Workload in. Expected format: `projects/{project}/locations/{location}/applications/{application}`. */
  parent: string;
  /** Required. The Workload identifier. Must contain only lowercase letters, numbers or hyphens, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  workloadId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Workload;
}

export const CreateProjectsLocationsApplicationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    workloadId: Schema.optional(Schema.String).pipe(T.HttpQuery("workloadId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Workload).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{parent}/workloads",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsApplicationsWorkloadsRequest>;

export type CreateProjectsLocationsApplicationsWorkloadsResponse = Operation;
export const CreateProjectsLocationsApplicationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsApplicationsWorkloadsError = DefaultErrors;

/** Creates a Workload in an Application. */
export const createProjectsLocationsApplicationsWorkloads: API.OperationMethod<
  CreateProjectsLocationsApplicationsWorkloadsRequest,
  CreateProjectsLocationsApplicationsWorkloadsResponse,
  CreateProjectsLocationsApplicationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsApplicationsWorkloadsRequest,
  output: CreateProjectsLocationsApplicationsWorkloadsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsApplicationsWorkloadsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name of the Workload. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}/workloads/{workload-id}"` */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Workload resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. The API changes the values of the fields as specified in the update_mask. The API ignores the values of all fields not covered by the update_mask. You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had. */
  updateMask?: string;
  /** Request body */
  body?: Workload;
}

export const PatchProjectsLocationsApplicationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Workload).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsApplicationsWorkloadsRequest>;

export type PatchProjectsLocationsApplicationsWorkloadsResponse = Operation;
export const PatchProjectsLocationsApplicationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsApplicationsWorkloadsError = DefaultErrors;

/** Updates a Workload in an Application. */
export const patchProjectsLocationsApplicationsWorkloads: API.OperationMethod<
  PatchProjectsLocationsApplicationsWorkloadsRequest,
  PatchProjectsLocationsApplicationsWorkloadsResponse,
  PatchProjectsLocationsApplicationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsApplicationsWorkloadsRequest,
  output: PatchProjectsLocationsApplicationsWorkloadsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsApplicationsWorkloadsRequest {
  /** Required. Fully qualified name of the Workload to delete from an Application. Expected format: `projects/{project}/locations/{location}/applications/{application}/workloads/{workload}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsApplicationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsApplicationsWorkloadsRequest>;

export type DeleteProjectsLocationsApplicationsWorkloadsResponse = Operation;
export const DeleteProjectsLocationsApplicationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsApplicationsWorkloadsError = DefaultErrors;

/** Deletes a Workload from an Application. */
export const deleteProjectsLocationsApplicationsWorkloads: API.OperationMethod<
  DeleteProjectsLocationsApplicationsWorkloadsRequest,
  DeleteProjectsLocationsApplicationsWorkloadsResponse,
  DeleteProjectsLocationsApplicationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsApplicationsWorkloadsRequest,
  output: DeleteProjectsLocationsApplicationsWorkloadsResponse,
  errors: [],
}));

export interface GetProjectsLocationsApplicationsWorkloadsRequest {
  /** Required. Fully qualified name of the Workload to fetch. Expected format: `projects/{project}/locations/{location}/applications/{application}/workloads/{workload}`. */
  name: string;
}

export const GetProjectsLocationsApplicationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsApplicationsWorkloadsRequest>;

export type GetProjectsLocationsApplicationsWorkloadsResponse = Workload;
export const GetProjectsLocationsApplicationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workload;

export type GetProjectsLocationsApplicationsWorkloadsError = DefaultErrors;

/** Gets a Workload in an Application. */
export const getProjectsLocationsApplicationsWorkloads: API.OperationMethod<
  GetProjectsLocationsApplicationsWorkloadsRequest,
  GetProjectsLocationsApplicationsWorkloadsResponse,
  GetProjectsLocationsApplicationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsApplicationsWorkloadsRequest,
  output: GetProjectsLocationsApplicationsWorkloadsResponse,
  errors: [],
}));

export interface ListProjectsLocationsExtendedMetadataSchemasRequest {
  /** Required. Project and location to list Extended Metadata Schemas on. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsExtendedMetadataSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/extendedMetadataSchemas" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsExtendedMetadataSchemasRequest>;

export type ListProjectsLocationsExtendedMetadataSchemasResponse =
  ListExtendedMetadataSchemasResponse;
export const ListProjectsLocationsExtendedMetadataSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExtendedMetadataSchemasResponse;

export type ListProjectsLocationsExtendedMetadataSchemasError = DefaultErrors;

/** Lists Extended Metadata Schemas available in a host project and location. */
export const listProjectsLocationsExtendedMetadataSchemas: API.PaginatedOperationMethod<
  ListProjectsLocationsExtendedMetadataSchemasRequest,
  ListProjectsLocationsExtendedMetadataSchemasResponse,
  ListProjectsLocationsExtendedMetadataSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExtendedMetadataSchemasRequest,
  output: ListProjectsLocationsExtendedMetadataSchemasResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsExtendedMetadataSchemasRequest {
  /** Required. Schema resource name. Format: `projects/{project}/locations/{location}/extendedMetadataSchemas/{extended_metadata_schema}`. `{extended_metadata_schema}` has the format `"apphub.googleapis.com/{SchemaName}"`. */
  name: string;
}

export const GetProjectsLocationsExtendedMetadataSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsExtendedMetadataSchemasRequest>;

export type GetProjectsLocationsExtendedMetadataSchemasResponse =
  ExtendedMetadataSchema;
export const GetProjectsLocationsExtendedMetadataSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExtendedMetadataSchema;

export type GetProjectsLocationsExtendedMetadataSchemasError = DefaultErrors;

/** Gets an Extended Metadata Schema. */
export const getProjectsLocationsExtendedMetadataSchemas: API.OperationMethod<
  GetProjectsLocationsExtendedMetadataSchemasRequest,
  GetProjectsLocationsExtendedMetadataSchemasResponse,
  GetProjectsLocationsExtendedMetadataSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsExtendedMetadataSchemasRequest,
  output: GetProjectsLocationsExtendedMetadataSchemasResponse,
  errors: [],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError = DefaultErrors;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError = DefaultErrors;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError = DefaultErrors;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError = DefaultErrors;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface GetProjectsLocationsDiscoveredServicesRequest {
  /** Required. Fully qualified name of the Discovered Service to fetch. Expected format: `projects/{project}/locations/{location}/discoveredServices/{discoveredService}`. */
  name: string;
}

export const GetProjectsLocationsDiscoveredServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveredServicesRequest>;

export type GetProjectsLocationsDiscoveredServicesResponse = DiscoveredService;
export const GetProjectsLocationsDiscoveredServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DiscoveredService;

export type GetProjectsLocationsDiscoveredServicesError = DefaultErrors;

/** Gets a Discovered Service in a host project and location. */
export const getProjectsLocationsDiscoveredServices: API.OperationMethod<
  GetProjectsLocationsDiscoveredServicesRequest,
  GetProjectsLocationsDiscoveredServicesResponse,
  GetProjectsLocationsDiscoveredServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveredServicesRequest,
  output: GetProjectsLocationsDiscoveredServicesResponse,
  errors: [],
}));

export interface FindUnregisteredProjectsLocationsDiscoveredServicesRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Project and location to find unregistered Discovered Services on. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
}

export const FindUnregisteredProjectsLocationsDiscoveredServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{parent}/discoveredServices:findUnregistered",
    }),
    svc,
  ) as unknown as Schema.Schema<FindUnregisteredProjectsLocationsDiscoveredServicesRequest>;

export type FindUnregisteredProjectsLocationsDiscoveredServicesResponse =
  FindUnregisteredServicesResponse;
export const FindUnregisteredProjectsLocationsDiscoveredServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FindUnregisteredServicesResponse;

export type FindUnregisteredProjectsLocationsDiscoveredServicesError =
  DefaultErrors;

/** Finds unregistered services in a host project and location. */
export const findUnregisteredProjectsLocationsDiscoveredServices: API.PaginatedOperationMethod<
  FindUnregisteredProjectsLocationsDiscoveredServicesRequest,
  FindUnregisteredProjectsLocationsDiscoveredServicesResponse,
  FindUnregisteredProjectsLocationsDiscoveredServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FindUnregisteredProjectsLocationsDiscoveredServicesRequest,
  output: FindUnregisteredProjectsLocationsDiscoveredServicesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsDiscoveredServicesRequest {
  /** Required. Project and location to list Discovered Services on. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsDiscoveredServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{parent}/discoveredServices" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveredServicesRequest>;

export type ListProjectsLocationsDiscoveredServicesResponse =
  ListDiscoveredServicesResponse;
export const ListProjectsLocationsDiscoveredServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDiscoveredServicesResponse;

export type ListProjectsLocationsDiscoveredServicesError = DefaultErrors;

/** Lists Discovered Services that can be added to an Application in a host project and location. */
export const listProjectsLocationsDiscoveredServices: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveredServicesRequest,
  ListProjectsLocationsDiscoveredServicesResponse,
  ListProjectsLocationsDiscoveredServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveredServicesRequest,
  output: ListProjectsLocationsDiscoveredServicesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface LookupProjectsLocationsDiscoveredServicesRequest {
  /** Required. Host project ID and location to lookup Discovered Service in. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. Resource URI to find DiscoveredService for. Accepts both project number and project ID and does translation when needed. */
  uri?: string;
}

export const LookupProjectsLocationsDiscoveredServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    uri: Schema.optional(Schema.String).pipe(T.HttpQuery("uri")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{parent}/discoveredServices:lookup",
    }),
    svc,
  ) as unknown as Schema.Schema<LookupProjectsLocationsDiscoveredServicesRequest>;

export type LookupProjectsLocationsDiscoveredServicesResponse =
  LookupDiscoveredServiceResponse;
export const LookupProjectsLocationsDiscoveredServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ LookupDiscoveredServiceResponse;

export type LookupProjectsLocationsDiscoveredServicesError = DefaultErrors;

/** Lists a Discovered Service in a host project and location, with a given resource URI. */
export const lookupProjectsLocationsDiscoveredServices: API.OperationMethod<
  LookupProjectsLocationsDiscoveredServicesRequest,
  LookupProjectsLocationsDiscoveredServicesResponse,
  LookupProjectsLocationsDiscoveredServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupProjectsLocationsDiscoveredServicesRequest,
  output: LookupProjectsLocationsDiscoveredServicesResponse,
  errors: [],
}));

export interface GetProjectsLocationsServiceProjectAttachmentsRequest {
  /** Required. Fully qualified name of the service project attachment to retrieve. Expected format: `projects/{project}/locations/{location}/serviceProjectAttachments/{serviceProjectAttachment}`. */
  name: string;
}

export const GetProjectsLocationsServiceProjectAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsServiceProjectAttachmentsRequest>;

export type GetProjectsLocationsServiceProjectAttachmentsResponse =
  ServiceProjectAttachment;
export const GetProjectsLocationsServiceProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ServiceProjectAttachment;

export type GetProjectsLocationsServiceProjectAttachmentsError = DefaultErrors;

/** Gets a service project attachment. */
export const getProjectsLocationsServiceProjectAttachments: API.OperationMethod<
  GetProjectsLocationsServiceProjectAttachmentsRequest,
  GetProjectsLocationsServiceProjectAttachmentsResponse,
  GetProjectsLocationsServiceProjectAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServiceProjectAttachmentsRequest,
  output: GetProjectsLocationsServiceProjectAttachmentsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsServiceProjectAttachmentsRequest {
  /** Required. Fully qualified name of the service project attachment to delete. Expected format: `projects/{project}/locations/{location}/serviceProjectAttachments/{serviceProjectAttachment}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsServiceProjectAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsServiceProjectAttachmentsRequest>;

export type DeleteProjectsLocationsServiceProjectAttachmentsResponse =
  Operation;
export const DeleteProjectsLocationsServiceProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsServiceProjectAttachmentsError =
  DefaultErrors;

/** Deletes a service project attachment. */
export const deleteProjectsLocationsServiceProjectAttachments: API.OperationMethod<
  DeleteProjectsLocationsServiceProjectAttachmentsRequest,
  DeleteProjectsLocationsServiceProjectAttachmentsResponse,
  DeleteProjectsLocationsServiceProjectAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServiceProjectAttachmentsRequest,
  output: DeleteProjectsLocationsServiceProjectAttachmentsResponse,
  errors: [],
}));

export interface ListProjectsLocationsServiceProjectAttachmentsRequest {
  /** Required. Host project ID and location to list service project attachments. Only global location is supported. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsServiceProjectAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha/{parent}/serviceProjectAttachments",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsServiceProjectAttachmentsRequest>;

export type ListProjectsLocationsServiceProjectAttachmentsResponse =
  ListServiceProjectAttachmentsResponse;
export const ListProjectsLocationsServiceProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListServiceProjectAttachmentsResponse;

export type ListProjectsLocationsServiceProjectAttachmentsError = DefaultErrors;

/** Lists service projects attached to the host project. */
export const listProjectsLocationsServiceProjectAttachments: API.PaginatedOperationMethod<
  ListProjectsLocationsServiceProjectAttachmentsRequest,
  ListProjectsLocationsServiceProjectAttachmentsResponse,
  ListProjectsLocationsServiceProjectAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServiceProjectAttachmentsRequest,
  output: ListProjectsLocationsServiceProjectAttachmentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsServiceProjectAttachmentsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The service project attachment identifier must contain the project id of the service project specified in the service_project_attachment.service_project field. */
  serviceProjectAttachmentId?: string;
  /** Required. Host project ID and location to which service project is being attached. Only global location is supported. Expected format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Request body */
  body?: ServiceProjectAttachment;
}

export const CreateProjectsLocationsServiceProjectAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    serviceProjectAttachmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceProjectAttachmentId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ServiceProjectAttachment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{parent}/serviceProjectAttachments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsServiceProjectAttachmentsRequest>;

export type CreateProjectsLocationsServiceProjectAttachmentsResponse =
  Operation;
export const CreateProjectsLocationsServiceProjectAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsServiceProjectAttachmentsError =
  DefaultErrors;

/** Attaches a service project to the host project. */
export const createProjectsLocationsServiceProjectAttachments: API.OperationMethod<
  CreateProjectsLocationsServiceProjectAttachmentsRequest,
  CreateProjectsLocationsServiceProjectAttachmentsResponse,
  CreateProjectsLocationsServiceProjectAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServiceProjectAttachmentsRequest,
  output: CreateProjectsLocationsServiceProjectAttachmentsResponse,
  errors: [],
}));
