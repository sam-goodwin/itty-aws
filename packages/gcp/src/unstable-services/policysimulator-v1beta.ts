// ==========================================================================
// Policy Simulator API (policysimulator v1beta)
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
  name: "policysimulator",
  version: "v1beta",
  rootUrl: "https://policysimulator.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudOrgpolicyV2CustomConstraint {
  /** Immutable. Name of the constraint. This is unique within the organization. The name must be of the form: * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 71 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/custom.` is not counted. */
  name?: string;
  /** All the operations being applied for this constraint. */
  methodTypes?: ReadonlyArray<
    | "METHOD_TYPE_UNSPECIFIED"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | "REMOVE_GRANT"
    | "GOVERN_TAGS"
    | (string & {})
  >;
  /** A Common Expression Language (CEL) condition which is used in the evaluation of the constraint. For example: `resource.instanceName.matches("(production|test)_(.+_)?[\d]+")` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters. */
  condition?: string;
  /** Detailed information about this custom policy constraint. The max length of the description is 2000 characters. */
  description?: string;
  /** Immutable. The resource instance type on which this policy applies. Format will be of the form : `/` Example: * `compute.googleapis.com/Instance`. */
  resourceTypes?: ReadonlyArray<string>;
  /** Allow or deny type. */
  actionType?: "ACTION_TYPE_UNSPECIFIED" | "ALLOW" | "DENY" | (string & {});
  /** Output only. The last time this custom constraint was updated. This represents the last time that the `CreateCustomConstraint` or `UpdateCustomConstraint` methods were called. */
  updateTime?: string;
  /** One line display name for the UI. The max length of the display_name is 200 characters. */
  displayName?: string;
}

export const GoogleCloudOrgpolicyV2CustomConstraint: Schema.Schema<GoogleCloudOrgpolicyV2CustomConstraint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    methodTypes: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    resourceTypes: Schema.optional(Schema.Array(Schema.String)),
    actionType: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV2CustomConstraint" });

export interface GoogleCloudPolicysimulatorV1betaResourceContext {
  /** The asset type of the resource as defined by CAIS. Example: `compute.googleapis.com/Firewall` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
  assetType?: string;
  /** The ancestry path of the resource in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the resource is a project, folder, or organization, the ancestry path starts from the resource itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
  ancestors?: ReadonlyArray<string>;
  /** The full name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
  resource?: string;
}

export const GoogleCloudPolicysimulatorV1betaResourceContext: Schema.Schema<GoogleCloudPolicysimulatorV1betaResourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetType: Schema.optional(Schema.String),
    ancestors: Schema.optional(Schema.Array(Schema.String)),
    resource: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaResourceContext",
  });

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

export interface GoogleCloudPolicysimulatorV1betaOrgPolicyViolation {
  /** The custom constraint being violated. */
  customConstraint?: GoogleCloudOrgpolicyV2CustomConstraint;
  /** The name of the `OrgPolicyViolation`. Example: organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f/orgPolicyViolations/38ce` */
  name?: string;
  /** The resource violating the constraint. */
  resource?: GoogleCloudPolicysimulatorV1betaResourceContext;
  /** Any error encountered during the evaluation. */
  error?: GoogleRpcStatus;
}

export const GoogleCloudPolicysimulatorV1betaOrgPolicyViolation: Schema.Schema<GoogleCloudPolicysimulatorV1betaOrgPolicyViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customConstraint: Schema.optional(GoogleCloudOrgpolicyV2CustomConstraint),
    name: Schema.optional(Schema.String),
    resource: Schema.optional(GoogleCloudPolicysimulatorV1betaResourceContext),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaOrgPolicyViolation",
  });

export interface GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsResponse {
  /** The list of OrgPolicyViolations */
  orgPolicyViolations?: ReadonlyArray<GoogleCloudPolicysimulatorV1betaOrgPolicyViolation>;
  /** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsResponse: Schema.Schema<GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orgPolicyViolations: Schema.optional(
      Schema.Array(GoogleCloudPolicysimulatorV1betaOrgPolicyViolation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsResponse",
  });

export interface GoogleCloudPolicysimulatorV1betaAccessTuple {
  /** Required. The IAM permission to check for the specified principal and resource. For a complete list of IAM permissions, see https://cloud.google.com/iam/help/permissions/reference. For a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference. */
  permission?: string;
  /** Required. The principal whose access you want to check, in the form of the email address that represents that principal. For example, `alice@example.com` or `my-service-account@my-project.iam.gserviceaccount.com`. The principal must be a Google Account or a service account. Other types of principals are not supported. */
  principal?: string;
  /** Required. The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
  fullResourceName?: string;
}

export const GoogleCloudPolicysimulatorV1betaAccessTuple: Schema.Schema<GoogleCloudPolicysimulatorV1betaAccessTuple> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    fullResourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudPolicysimulatorV1betaAccessTuple" });

export interface GoogleTypeExpr {
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
}

export const GoogleTypeExpr: Schema.Schema<GoogleTypeExpr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeExpr" });

export interface GoogleIamV1Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: GoogleTypeExpr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const GoogleIamV1Binding: Schema.Schema<GoogleIamV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(GoogleTypeExpr),
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1Binding" });

export interface GoogleIamV1AuditLogConfig {
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

export const GoogleIamV1AuditLogConfig: Schema.Schema<GoogleIamV1AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1AuditLogConfig" });

export interface GoogleIamV1AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<GoogleIamV1AuditLogConfig>;
}

export const GoogleIamV1AuditConfig: Schema.Schema<GoogleIamV1AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditLogConfig)),
  }).annotate({ identifier: "GoogleIamV1AuditConfig" });

export interface GoogleIamV1Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<GoogleIamV1Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<GoogleIamV1AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const GoogleIamV1Policy: Schema.Schema<GoogleIamV1Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(GoogleIamV1Binding)),
    auditConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditConfig)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1Policy" });

export interface GoogleCloudPolicysimulatorV1betaBindingExplanationAnnotatedMembership {
  /** Indicates whether the binding includes the principal. */
  membership?:
    | "MEMBERSHIP_UNSPECIFIED"
    | "MEMBERSHIP_INCLUDED"
    | "MEMBERSHIP_NOT_INCLUDED"
    | "MEMBERSHIP_UNKNOWN_INFO_DENIED"
    | "MEMBERSHIP_UNKNOWN_UNSUPPORTED"
    | (string & {});
  /** The relevance of the principal's status to the overall determination for the binding. */
  relevance?:
    | "HEURISTIC_RELEVANCE_UNSPECIFIED"
    | "NORMAL"
    | "HIGH"
    | (string & {});
}

export const GoogleCloudPolicysimulatorV1betaBindingExplanationAnnotatedMembership: Schema.Schema<GoogleCloudPolicysimulatorV1betaBindingExplanationAnnotatedMembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    membership: Schema.optional(Schema.String),
    relevance: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudPolicysimulatorV1betaBindingExplanationAnnotatedMembership",
  });

export interface GoogleCloudPolicysimulatorV1betaBindingExplanation {
  /** The role that this binding grants. For example, `roles/compute.serviceAgent`. For a complete list of predefined IAM roles, as well as the permissions in each role, see https://cloud.google.com/iam/help/roles/reference. */
  role?: string;
  /** The relevance of the permission's existence, or nonexistence, in the role to the overall determination for the entire policy. */
  rolePermissionRelevance?:
    | "HEURISTIC_RELEVANCE_UNSPECIFIED"
    | "NORMAL"
    | "HIGH"
    | (string & {});
  /** Indicates whether the role granted by this binding contains the specified permission. */
  rolePermission?:
    | "ROLE_PERMISSION_UNSPECIFIED"
    | "ROLE_PERMISSION_INCLUDED"
    | "ROLE_PERMISSION_NOT_INCLUDED"
    | "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"
    | (string & {});
  /** The relevance of this binding to the overall determination for the entire policy. */
  relevance?:
    | "HEURISTIC_RELEVANCE_UNSPECIFIED"
    | "NORMAL"
    | "HIGH"
    | (string & {});
  /** Required. Indicates whether _this binding_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another binding that overrides this binding. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse. */
  access?:
    | "ACCESS_STATE_UNSPECIFIED"
    | "GRANTED"
    | "NOT_GRANTED"
    | "UNKNOWN_CONDITIONAL"
    | "UNKNOWN_INFO_DENIED"
    | (string & {});
  /** Indicates whether each principal in the binding includes the principal specified in the request, either directly or indirectly. Each key identifies a principal in the binding, and each value indicates whether the principal in the binding includes the principal in the request. For example, suppose that a binding includes the following principals: * `user:alice@example.com` * `group:product-eng@example.com` The principal in the replayed access tuple is `user:bob@example.com`. This user is a principal of the group `group:product-eng@example.com`. For the first principal in the binding, the key is `user:alice@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_NOT_INCLUDED`. For the second principal in the binding, the key is `group:product-eng@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_INCLUDED`. */
  memberships?: Record<
    string,
    GoogleCloudPolicysimulatorV1betaBindingExplanationAnnotatedMembership
  >;
  /** A condition expression that prevents this binding from granting access unless the expression evaluates to `true`. To learn about IAM Conditions, see https://cloud.google.com/iam/docs/conditions-overview. */
  condition?: GoogleTypeExpr;
}

export const GoogleCloudPolicysimulatorV1betaBindingExplanation: Schema.Schema<GoogleCloudPolicysimulatorV1betaBindingExplanation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    rolePermissionRelevance: Schema.optional(Schema.String),
    rolePermission: Schema.optional(Schema.String),
    relevance: Schema.optional(Schema.String),
    access: Schema.optional(Schema.String),
    memberships: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudPolicysimulatorV1betaBindingExplanationAnnotatedMembership,
      ),
    ),
    condition: Schema.optional(GoogleTypeExpr),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaBindingExplanation",
  });

export interface GoogleCloudPolicysimulatorV1betaExplainedPolicy {
  /** The IAM policy attached to the resource. If the user who created the Replay does not have access to the policy, this field is empty. */
  policy?: GoogleIamV1Policy;
  /** Indicates whether _this policy_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse. */
  access?:
    | "ACCESS_STATE_UNSPECIFIED"
    | "GRANTED"
    | "NOT_GRANTED"
    | "UNKNOWN_CONDITIONAL"
    | "UNKNOWN_INFO_DENIED"
    | (string & {});
  /** Details about how each binding in the policy affects the principal's ability, or inability, to use the permission for the resource. If the user who created the Replay does not have access to the policy, this field is omitted. */
  bindingExplanations?: ReadonlyArray<GoogleCloudPolicysimulatorV1betaBindingExplanation>;
  /** The relevance of this policy to the overall determination in the TroubleshootIamPolicyResponse. If the user who created the Replay does not have access to the policy, this field is omitted. */
  relevance?:
    | "HEURISTIC_RELEVANCE_UNSPECIFIED"
    | "NORMAL"
    | "HIGH"
    | (string & {});
  /** The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. If the user who created the Replay does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
  fullResourceName?: string;
}

export const GoogleCloudPolicysimulatorV1betaExplainedPolicy: Schema.Schema<GoogleCloudPolicysimulatorV1betaExplainedPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(GoogleIamV1Policy),
    access: Schema.optional(Schema.String),
    bindingExplanations: Schema.optional(
      Schema.Array(GoogleCloudPolicysimulatorV1betaBindingExplanation),
    ),
    relevance: Schema.optional(Schema.String),
    fullResourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaExplainedPolicy",
  });

export interface GoogleCloudPolicysimulatorV1betaExplainedAccess {
  /** If the AccessState is `UNKNOWN`, this field contains the policies that led to that result. If the `AccessState` is `GRANTED` or `NOT_GRANTED`, this field is omitted. */
  policies?: ReadonlyArray<GoogleCloudPolicysimulatorV1betaExplainedPolicy>;
  /** Whether the principal in the access tuple has permission to access the resource in the access tuple under the given policies. */
  accessState?:
    | "ACCESS_STATE_UNSPECIFIED"
    | "GRANTED"
    | "NOT_GRANTED"
    | "UNKNOWN_CONDITIONAL"
    | "UNKNOWN_INFO_DENIED"
    | (string & {});
  /** If the AccessState is `UNKNOWN`, this field contains a list of errors explaining why the result is `UNKNOWN`. If the `AccessState` is `GRANTED` or `NOT_GRANTED`, this field is omitted. */
  errors?: ReadonlyArray<GoogleRpcStatus>;
}

export const GoogleCloudPolicysimulatorV1betaExplainedAccess: Schema.Schema<GoogleCloudPolicysimulatorV1betaExplainedAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(
      Schema.Array(GoogleCloudPolicysimulatorV1betaExplainedPolicy),
    ),
    accessState: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(GoogleRpcStatus)),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaExplainedAccess",
  });

export interface GoogleCloudPolicysimulatorV1betaAccessStateDiff {
  /** The results of evaluating the access tuple under the current (baseline) policies. If the AccessState couldn't be fully evaluated, this field explains why. */
  baseline?: GoogleCloudPolicysimulatorV1betaExplainedAccess;
  /** The results of evaluating the access tuple under the proposed (simulated) policies. If the AccessState couldn't be fully evaluated, this field explains why. */
  simulated?: GoogleCloudPolicysimulatorV1betaExplainedAccess;
  /** How the principal's access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies. */
  accessChange?:
    | "ACCESS_CHANGE_TYPE_UNSPECIFIED"
    | "NO_CHANGE"
    | "UNKNOWN_CHANGE"
    | "ACCESS_REVOKED"
    | "ACCESS_GAINED"
    | "ACCESS_MAYBE_REVOKED"
    | "ACCESS_MAYBE_GAINED"
    | (string & {});
}

export const GoogleCloudPolicysimulatorV1betaAccessStateDiff: Schema.Schema<GoogleCloudPolicysimulatorV1betaAccessStateDiff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseline: Schema.optional(GoogleCloudPolicysimulatorV1betaExplainedAccess),
    simulated: Schema.optional(GoogleCloudPolicysimulatorV1betaExplainedAccess),
    accessChange: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaAccessStateDiff",
  });

export interface GoogleCloudPolicysimulatorV1betaReplayDiff {
  /** A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple. The evaluation of the principal's access is reported in the AccessState field. */
  accessDiff?: GoogleCloudPolicysimulatorV1betaAccessStateDiff;
}

export const GoogleCloudPolicysimulatorV1betaReplayDiff: Schema.Schema<GoogleCloudPolicysimulatorV1betaReplayDiff> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessDiff: Schema.optional(
      GoogleCloudPolicysimulatorV1betaAccessStateDiff,
    ),
  }).annotate({ identifier: "GoogleCloudPolicysimulatorV1betaReplayDiff" });

export interface GoogleTypeDate {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const GoogleTypeDate: Schema.Schema<GoogleTypeDate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeDate" });

export interface GoogleCloudPolicysimulatorV1betaReplayResult {
  /** The resource name of the `ReplayResult`, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}/results/{replay-result-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36/results/1234` */
  name?: string;
  /** The access tuple that was replayed. This field includes information about the principal, resource, and permission that were involved in the access attempt. */
  accessTuple?: GoogleCloudPolicysimulatorV1betaAccessTuple;
  /** The Replay that the access tuple was included in. */
  parent?: string;
  /** The difference between the principal's access under the current (baseline) policies and the principal's access under the proposed (simulated) policies. This field is only included for access tuples that were successfully replayed and had different results under the current policies and the proposed policies. */
  diff?: GoogleCloudPolicysimulatorV1betaReplayDiff;
  /** The latest date this access tuple was seen in the logs. */
  lastSeenDate?: GoogleTypeDate;
  /** The error that caused the access tuple replay to fail. This field is only included for access tuples that were not replayed successfully. */
  error?: GoogleRpcStatus;
}

export const GoogleCloudPolicysimulatorV1betaReplayResult: Schema.Schema<GoogleCloudPolicysimulatorV1betaReplayResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    accessTuple: Schema.optional(GoogleCloudPolicysimulatorV1betaAccessTuple),
    parent: Schema.optional(Schema.String),
    diff: Schema.optional(GoogleCloudPolicysimulatorV1betaReplayDiff),
    lastSeenDate: Schema.optional(GoogleTypeDate),
    error: Schema.optional(GoogleRpcStatus),
  }).annotate({ identifier: "GoogleCloudPolicysimulatorV1betaReplayResult" });

export interface GoogleLongrunningOperation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(GoogleRpcStatus),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

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

export interface GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues {
  /** List of values allowed at this resource. */
  allowedValues?: ReadonlyArray<string>;
  /** List of values denied at this resource. */
  deniedValues?: ReadonlyArray<string>;
}

export const GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues: Schema.Schema<GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedValues: Schema.optional(Schema.Array(Schema.String)),
    deniedValues: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues",
  });

export interface GoogleCloudOrgpolicyV2PolicySpecPolicyRule {
  /** List of values to be used for this policy rule. This field can be set only in policies for list constraints. */
  values?: GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
  /** Setting this to true means that all values are denied. This field can be set only in policies for list constraints. */
  denyAll?: boolean;
  /** A condition that determines whether this rule is used to evaluate the policy. When set, the google.type.Expr.expression field must contain 1 to 10 subexpressions, joined by the `||` or `&&` operators. Each subexpression must use the `resource.matchTag()`, `resource.matchTagId()`, `resource.hasTagKey()`, or `resource.hasTagKeyId()` Common Expression Language (CEL) function. The `resource.matchTag()` function takes the following arguments: * `key_name`: the namespaced name of the tag key, with the organization ID and a slash (`/`) as a prefix; for example, `123456789012/environment` * `value_name`: the short name of the tag value For example: `resource.matchTag('123456789012/environment, 'prod')` The `resource.matchTagId()` function takes the following arguments: * `key_id`: the permanent ID of the tag key; for example, `tagKeys/123456789012` * `value_id`: the permanent ID of the tag value; for example, `tagValues/567890123456` For example: `resource.matchTagId('tagKeys/123456789012', 'tagValues/567890123456')` The `resource.hasTagKey()` function takes the following argument: * `key_name`: the namespaced name of the tag key, with the organization ID and a slash (`/`) as a prefix; for example, `123456789012/environment` For example: `resource.hasTagKey('123456789012/environment')` The `resource.hasTagKeyId()` function takes the following arguments: * `key_id`: the permanent ID of the tag key; for example, `tagKeys/123456789012` For example: `resource.hasTagKeyId('tagKeys/123456789012')` */
  condition?: GoogleTypeExpr;
  /** If `true`, then the policy is enforced. If `false`, then any configuration is acceptable. This field can be set in policies for boolean constraints, custom constraints and managed constraints. */
  enforce?: boolean;
  /** Optional. Required for managed constraints if parameters are defined. Passes parameter values when policy enforcement is enabled. Ensure that parameter value types match those defined in the constraint definition. For example: ``` { "allowedLocations" : ["us-east1", "us-west1"], "allowAll" : true } ``` */
  parameters?: Record<string, unknown>;
  /** Setting this to true means that all values are allowed. This field can be set only in policies for list constraints. */
  allowAll?: boolean;
}

export const GoogleCloudOrgpolicyV2PolicySpecPolicyRule: Schema.Schema<GoogleCloudOrgpolicyV2PolicySpecPolicyRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(
      GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues,
    ),
    denyAll: Schema.optional(Schema.Boolean),
    condition: Schema.optional(GoogleTypeExpr),
    enforce: Schema.optional(Schema.Boolean),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    allowAll: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV2PolicySpecPolicyRule" });

export interface GoogleCloudOrgpolicyV2PolicySpec {
  /** In policies for boolean constraints, the following requirements apply: - There must be exactly one policy rule where a condition is unset. - Boolean policy rules with conditions must set `enforced` to the opposite of the policy rule without a condition. - During policy evaluation, policy rules with conditions that are true for a target resource take precedence. */
  rules?: ReadonlyArray<GoogleCloudOrgpolicyV2PolicySpecPolicyRule>;
  /** An opaque tag indicating the current version of the policySpec, used for concurrency control. This field is ignored if used in a `CreatePolicy` request. When the policy is returned from either a `GetPolicy` or a `ListPolicies` request, this entity tag (ETag) indicates the version of the current policySpec to use when executing a read-modify-write loop. When the policy is returned from a `GetEffectivePolicy` request, the ETag will be unset. */
  etag?: string;
  /** Determines the inheritance behavior for this policy. If `inherit_from_parent` is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies that configure list constraints. */
  inheritFromParent?: boolean;
  /** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false. */
  reset?: boolean;
  /** Output only. The time stamp this was previously updated. This represents the last time a call to `CreatePolicy` or `UpdatePolicy` was made for that policy. */
  updateTime?: string;
}

export const GoogleCloudOrgpolicyV2PolicySpec: Schema.Schema<GoogleCloudOrgpolicyV2PolicySpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules: Schema.optional(
      Schema.Array(GoogleCloudOrgpolicyV2PolicySpecPolicyRule),
    ),
    etag: Schema.optional(Schema.String),
    inheritFromParent: Schema.optional(Schema.Boolean),
    reset: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV2PolicySpec" });

export interface GoogleCloudOrgpolicyV2AlternatePolicySpec {
  /** Specify constraint for configurations of Google Cloud resources. */
  spec?: GoogleCloudOrgpolicyV2PolicySpec;
  /** Reference to the launch that will be used while audit logging and to control the launch. Set only in the alternate policy. */
  launch?: string;
}

export const GoogleCloudOrgpolicyV2AlternatePolicySpec: Schema.Schema<GoogleCloudOrgpolicyV2AlternatePolicySpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spec: Schema.optional(GoogleCloudOrgpolicyV2PolicySpec),
    launch: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV2AlternatePolicySpec" });

export interface GoogleCloudOrgpolicyV2Policy {
  /** Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced. */
  dryRunSpec?: GoogleCloudOrgpolicyV2PolicySpec;
  /** Optional. An opaque tag indicating the current state of the policy, used for concurrency control. This entity tag (ETag) is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint that this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number. */
  name?: string;
  /** Basic information about the organization policy. */
  spec?: GoogleCloudOrgpolicyV2PolicySpec;
  /** Deprecated. */
  alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpec;
}

export const GoogleCloudOrgpolicyV2Policy: Schema.Schema<GoogleCloudOrgpolicyV2Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRunSpec: Schema.optional(GoogleCloudOrgpolicyV2PolicySpec),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    spec: Schema.optional(GoogleCloudOrgpolicyV2PolicySpec),
    alternate: Schema.optional(GoogleCloudOrgpolicyV2AlternatePolicySpec),
  }).annotate({ identifier: "GoogleCloudOrgpolicyV2Policy" });

export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlay {
  /** Optional. The parent of the policy we are attaching to. Example: "projects/123456" */
  policyParent?: string;
  /** Optional. The new or updated OrgPolicy. */
  policy?: GoogleCloudOrgpolicyV2Policy;
}

export const GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlay: Schema.Schema<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyParent: Schema.optional(Schema.String),
    policy: Schema.optional(GoogleCloudOrgpolicyV2Policy),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlay",
  });

export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay {
  /** Optional. Resource the constraint is attached to. Example: "organization/987654" */
  customConstraintParent?: string;
  /** Optional. The new or updated custom constraint. */
  customConstraint?: GoogleCloudOrgpolicyV2CustomConstraint;
}

export const GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay: Schema.Schema<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customConstraintParent: Schema.optional(Schema.String),
    customConstraint: Schema.optional(GoogleCloudOrgpolicyV2CustomConstraint),
  }).annotate({
    identifier:
      "GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay",
  });

export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay {
  /** Optional. The OrgPolicy changes to preview violations for. Any existing OrgPolicies with the same name will be overridden in the simulation. That is, violations will be determined as if all policies in the overlay were created or updated. */
  policies?: ReadonlyArray<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlay>;
  /** Optional. The OrgPolicy CustomConstraint changes to preview violations for. Any existing CustomConstraints with the same name will be overridden in the simulation. That is, violations will be determined as if all custom constraints in the overlay were instantiated. Only a single custom_constraint is supported in the overlay at a time. For evaluating multiple constraints, multiple `GenerateOrgPolicyViolationsPreview` requests are made, where each request evaluates a single constraint. */
  customConstraints?: ReadonlyArray<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay>;
}

export const GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay: Schema.Schema<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(
      Schema.Array(
        GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlay,
      ),
    ),
    customConstraints: Schema.optional(
      Schema.Array(
        GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay",
  });

export interface GoogleCloudPolicysimulatorV1betaGenerateOrgPolicyViolationsPreviewOperationMetadata {
  /** Time when the request was received. */
  requestTime?: string;
  /** Time when the request started processing, i.e. when the state was set to RUNNING. */
  startTime?: string;
  /** The current state of the operation. */
  state?:
    | "PREVIEW_STATE_UNSPECIFIED"
    | "PREVIEW_PENDING"
    | "PREVIEW_RUNNING"
    | "PREVIEW_SUCCEEDED"
    | "PREVIEW_FAILED"
    | (string & {});
  /** Total number of resources that need scanning. Should equal resource_scanned + resources_pending */
  resourcesFound?: number;
  /** Number of resources already scanned. */
  resourcesScanned?: number;
  /** Number of resources still to scan. */
  resourcesPending?: number;
}

export const GoogleCloudPolicysimulatorV1betaGenerateOrgPolicyViolationsPreviewOperationMetadata: Schema.Schema<GoogleCloudPolicysimulatorV1betaGenerateOrgPolicyViolationsPreviewOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    resourcesFound: Schema.optional(Schema.Number),
    resourcesScanned: Schema.optional(Schema.Number),
    resourcesPending: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudPolicysimulatorV1betaGenerateOrgPolicyViolationsPreviewOperationMetadata",
  });

export interface GoogleCloudPolicysimulatorV1betaReplayResultsSummary {
  /** The number of replayed log entries with a difference between baseline and simulated policies. */
  differenceCount?: number;
  /** The total number of log entries replayed. */
  logCount?: number;
  /** The date of the oldest log entry replayed. */
  oldestDate?: GoogleTypeDate;
  /** The date of the newest log entry replayed. */
  newestDate?: GoogleTypeDate;
  /** The number of replayed log entries with no difference between baseline and simulated policies. */
  unchangedCount?: number;
  /** The number of log entries that could not be replayed. */
  errorCount?: number;
}

export const GoogleCloudPolicysimulatorV1betaReplayResultsSummary: Schema.Schema<GoogleCloudPolicysimulatorV1betaReplayResultsSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    differenceCount: Schema.optional(Schema.Number),
    logCount: Schema.optional(Schema.Number),
    oldestDate: Schema.optional(GoogleTypeDate),
    newestDate: Schema.optional(GoogleTypeDate),
    unchangedCount: Schema.optional(Schema.Number),
    errorCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaReplayResultsSummary",
  });

export interface GoogleCloudPolicysimulatorV1betaReplayConfig {
  /** The logs to use as input for the Replay. */
  logSource?: "LOG_SOURCE_UNSPECIFIED" | "RECENT_ACCESSES" | (string & {});
  /** A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, `//cloudresourcemanager.googleapis.com/projects/my-project`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay. */
  policyOverlay?: Record<string, GoogleIamV1Policy>;
}

export const GoogleCloudPolicysimulatorV1betaReplayConfig: Schema.Schema<GoogleCloudPolicysimulatorV1betaReplayConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logSource: Schema.optional(Schema.String),
    policyOverlay: Schema.optional(
      Schema.Record(Schema.String, GoogleIamV1Policy),
    ),
  }).annotate({ identifier: "GoogleCloudPolicysimulatorV1betaReplayConfig" });

export interface GoogleCloudPolicysimulatorV1betaReplay {
  /** Output only. The current state of the `Replay`. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. Summary statistics about the replayed log entries. */
  resultsSummary?: GoogleCloudPolicysimulatorV1betaReplayResultsSummary;
  /** Output only. The resource name of the `Replay`, which has the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
  name?: string;
  /** Required. The configuration used for the `Replay`. */
  config?: GoogleCloudPolicysimulatorV1betaReplayConfig;
}

export const GoogleCloudPolicysimulatorV1betaReplay: Schema.Schema<GoogleCloudPolicysimulatorV1betaReplay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    resultsSummary: Schema.optional(
      GoogleCloudPolicysimulatorV1betaReplayResultsSummary,
    ),
    name: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudPolicysimulatorV1betaReplayConfig),
  }).annotate({ identifier: "GoogleCloudPolicysimulatorV1betaReplay" });

export interface GoogleCloudPolicysimulatorV1betaListReplaysResponse {
  /** The list of Replay objects. */
  replays?: ReadonlyArray<GoogleCloudPolicysimulatorV1betaReplay>;
  /** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudPolicysimulatorV1betaListReplaysResponse: Schema.Schema<GoogleCloudPolicysimulatorV1betaListReplaysResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replays: Schema.optional(
      Schema.Array(GoogleCloudPolicysimulatorV1betaReplay),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaListReplaysResponse",
  });

export interface GoogleCloudPolicysimulatorV1ReplayResultsSummary {
  /** The number of replayed log entries with no difference between baseline and simulated policies. */
  unchangedCount?: number;
  /** The number of log entries that could not be replayed. */
  errorCount?: number;
  /** The total number of log entries replayed. */
  logCount?: number;
  /** The date of the oldest log entry replayed. */
  oldestDate?: GoogleTypeDate;
  /** The date of the newest log entry replayed. */
  newestDate?: GoogleTypeDate;
  /** The number of replayed log entries with a difference between baseline and simulated policies. */
  differenceCount?: number;
}

export const GoogleCloudPolicysimulatorV1ReplayResultsSummary: Schema.Schema<GoogleCloudPolicysimulatorV1ReplayResultsSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unchangedCount: Schema.optional(Schema.Number),
    errorCount: Schema.optional(Schema.Number),
    logCount: Schema.optional(Schema.Number),
    oldestDate: Schema.optional(GoogleTypeDate),
    newestDate: Schema.optional(GoogleTypeDate),
    differenceCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1ReplayResultsSummary",
  });

export interface GoogleCloudPolicysimulatorV1ReplayConfig {
  /** The logs to use as input for the Replay. */
  logSource?: "LOG_SOURCE_UNSPECIFIED" | "RECENT_ACCESSES" | (string & {});
  /** A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, `//cloudresourcemanager.googleapis.com/projects/my-project`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay. */
  policyOverlay?: Record<string, GoogleIamV1Policy>;
}

export const GoogleCloudPolicysimulatorV1ReplayConfig: Schema.Schema<GoogleCloudPolicysimulatorV1ReplayConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logSource: Schema.optional(Schema.String),
    policyOverlay: Schema.optional(
      Schema.Record(Schema.String, GoogleIamV1Policy),
    ),
  }).annotate({ identifier: "GoogleCloudPolicysimulatorV1ReplayConfig" });

export interface GoogleCloudPolicysimulatorV1Replay {
  /** Output only. The current state of the `Replay`. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. Summary statistics about the replayed log entries. */
  resultsSummary?: GoogleCloudPolicysimulatorV1ReplayResultsSummary;
  /** Output only. The resource name of the `Replay`, which has the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
  name?: string;
  /** Required. The configuration used for the `Replay`. */
  config?: GoogleCloudPolicysimulatorV1ReplayConfig;
}

export const GoogleCloudPolicysimulatorV1Replay: Schema.Schema<GoogleCloudPolicysimulatorV1Replay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    resultsSummary: Schema.optional(
      GoogleCloudPolicysimulatorV1ReplayResultsSummary,
    ),
    name: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudPolicysimulatorV1ReplayConfig),
  }).annotate({ identifier: "GoogleCloudPolicysimulatorV1Replay" });

export interface GoogleCloudPolicysimulatorV1betaListReplayResultsResponse {
  /** A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The results of running a Replay. */
  replayResults?: ReadonlyArray<GoogleCloudPolicysimulatorV1betaReplayResult>;
}

export const GoogleCloudPolicysimulatorV1betaListReplayResultsResponse: Schema.Schema<GoogleCloudPolicysimulatorV1betaListReplayResultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    replayResults: Schema.optional(
      Schema.Array(GoogleCloudPolicysimulatorV1betaReplayResult),
    ),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaListReplayResultsResponse",
  });

export interface GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts {
  /** Output only. Number of resources where the constraint was not enforced, i.e. the Policy set `enforced: false` for that resource. */
  unenforced?: number;
  /** Output only. Number of resources that returned an error when scanned. */
  errors?: number;
  /** Output only. Number of scanned resources with zero violations. */
  compliant?: number;
  /** Output only. Number of resources checked for compliance. Must equal: unenforced + noncompliant + compliant + error */
  scanned?: number;
  /** Output only. Number of scanned resources with at least one violation. */
  noncompliant?: number;
}

export const GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts: Schema.Schema<GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unenforced: Schema.optional(Schema.Number),
    errors: Schema.optional(Schema.Number),
    compliant: Schema.optional(Schema.Number),
    scanned: Schema.optional(Schema.Number),
    noncompliant: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts",
  });

export interface GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview {
  /** Output only. The resource name of the `OrgPolicyViolationsPreview`. It has the following format: `organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}` Example: `organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f` */
  name?: string;
  /** Required. The proposed changes we are previewing violations for. */
  overlay?: GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay;
  /** Output only. The state of the `OrgPolicyViolationsPreview`. */
  state?:
    | "PREVIEW_STATE_UNSPECIFIED"
    | "PREVIEW_PENDING"
    | "PREVIEW_RUNNING"
    | "PREVIEW_SUCCEEDED"
    | "PREVIEW_FAILED"
    | (string & {});
  /** Output only. The names of the constraints against which all `OrgPolicyViolations` were evaluated. If `OrgPolicyOverlay` only contains `PolicyOverlay` then it contains the name of the configured custom constraint, applicable to the specified policies. Otherwise it contains the name of the constraint specified in `CustomConstraintOverlay`. Format: `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` */
  customConstraints?: ReadonlyArray<string>;
  /** Output only. The number of OrgPolicyViolations in this `OrgPolicyViolationsPreview`. This count may differ from `resource_summary.noncompliant_count` because each OrgPolicyViolation is specific to a resource **and** constraint. If there are multiple constraints being evaluated (i.e. multiple policies in the overlay), a single resource may violate multiple constraints. */
  violationsCount?: number;
  /** Output only. Time when this `OrgPolicyViolationsPreview` was created. */
  createTime?: string;
  /** Output only. A summary of the state of all resources scanned for compliance with the changed OrgPolicy. */
  resourceCounts?: GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts;
}

export const GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview: Schema.Schema<GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    overlay: Schema.optional(GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay),
    state: Schema.optional(Schema.String),
    customConstraints: Schema.optional(Schema.Array(Schema.String)),
    violationsCount: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    resourceCounts: Schema.optional(
      GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts,
    ),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview",
  });

export interface GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsPreviewsResponse {
  /** The list of OrgPolicyViolationsPreview */
  orgPolicyViolationsPreviews?: ReadonlyArray<GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview>;
  /** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsPreviewsResponse: Schema.Schema<GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsPreviewsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orgPolicyViolationsPreviews: Schema.optional(
      Schema.Array(GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsPreviewsResponse",
  });

export interface GoogleCloudPolicysimulatorV1ReplayOperationMetadata {
  /** Time when the request was received. */
  startTime?: string;
}

export const GoogleCloudPolicysimulatorV1ReplayOperationMetadata: Schema.Schema<GoogleCloudPolicysimulatorV1ReplayOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudPolicysimulatorV1ReplayOperationMetadata",
  });

export interface GoogleCloudPolicysimulatorV1betaCreateOrgPolicyViolationsPreviewOperationMetadata {
  /** Total number of resources that need scanning. Should equal resource_scanned + resources_pending */
  resourcesFound?: number;
  /** Number of resources already scanned. */
  resourcesScanned?: number;
  /** Number of resources still to scan. */
  resourcesPending?: number;
  /** Output only. The current state of the operation. */
  state?:
    | "PREVIEW_STATE_UNSPECIFIED"
    | "PREVIEW_PENDING"
    | "PREVIEW_RUNNING"
    | "PREVIEW_SUCCEEDED"
    | "PREVIEW_FAILED"
    | (string & {});
  /** Time when the request started processing, i.e., when the state was set to RUNNING. */
  startTime?: string;
  /** Time when the request was received. */
  requestTime?: string;
}

export const GoogleCloudPolicysimulatorV1betaCreateOrgPolicyViolationsPreviewOperationMetadata: Schema.Schema<GoogleCloudPolicysimulatorV1betaCreateOrgPolicyViolationsPreviewOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcesFound: Schema.optional(Schema.Number),
    resourcesScanned: Schema.optional(Schema.Number),
    resourcesPending: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    requestTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudPolicysimulatorV1betaCreateOrgPolicyViolationsPreviewOperationMetadata",
  });

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

export interface ListOrganizationsLocationsOrgPolicyViolationsPreviewsRequest {
  /** Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 5 items will be returned. The maximum value is 10; values above 10 will be coerced to 10. */
  pageSize?: number;
  /** Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent the violations are scoped to. Format: `organizations/{organization}/locations/{location}` Example: `organizations/my-example-org/locations/global` */
  parent: string;
}

export const ListOrganizationsLocationsOrgPolicyViolationsPreviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta/{+parent}/orgPolicyViolationsPreviews",
    }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsOrgPolicyViolationsPreviewsRequest>;

export type ListOrganizationsLocationsOrgPolicyViolationsPreviewsResponse =
  GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsPreviewsResponse;
export const ListOrganizationsLocationsOrgPolicyViolationsPreviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsPreviewsResponse;

export type ListOrganizationsLocationsOrgPolicyViolationsPreviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ListOrgPolicyViolationsPreviews lists each OrgPolicyViolationsPreview in an organization. Each OrgPolicyViolationsPreview is available for at least 7 days. */
export const listOrganizationsLocationsOrgPolicyViolationsPreviews: API.PaginatedOperationMethod<
  ListOrganizationsLocationsOrgPolicyViolationsPreviewsRequest,
  ListOrganizationsLocationsOrgPolicyViolationsPreviewsResponse,
  ListOrganizationsLocationsOrgPolicyViolationsPreviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsOrgPolicyViolationsPreviewsRequest,
  output: ListOrganizationsLocationsOrgPolicyViolationsPreviewsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest {
  /** Required. The organization under which this OrgPolicyViolationsPreview will be created. Example: `organizations/my-example-org/locations/global` */
  parent: string;
  /** Request body */
  body?: GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview;
}

export const GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/orgPolicyViolationsPreviews:generate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest>;

export type GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsResponse =
  GoogleLongrunningOperation;
export const GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** GenerateOrgPolicyViolationsPreview generates an OrgPolicyViolationsPreview for the proposed changes in the provided OrgPolicyViolationsPreview.OrgPolicyOverlay. The changes to OrgPolicy are specified by this `OrgPolicyOverlay`. The resources to scan are inferred from these specified changes. */
export const generateOrganizationsLocationsOrgPolicyViolationsPreviews: API.OperationMethod<
  GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest,
  GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsResponse,
  GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest,
  output: GenerateOrganizationsLocationsOrgPolicyViolationsPreviewsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsOrgPolicyViolationsPreviewsRequest {
  /** Required. The name of the OrgPolicyViolationsPreview to get. */
  name: string;
}

export const GetOrganizationsLocationsOrgPolicyViolationsPreviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsOrgPolicyViolationsPreviewsRequest>;

export type GetOrganizationsLocationsOrgPolicyViolationsPreviewsResponse =
  GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview;
export const GetOrganizationsLocationsOrgPolicyViolationsPreviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview;

export type GetOrganizationsLocationsOrgPolicyViolationsPreviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GetOrgPolicyViolationsPreview gets the specified OrgPolicyViolationsPreview. Each OrgPolicyViolationsPreview is available for at least 7 days. */
export const getOrganizationsLocationsOrgPolicyViolationsPreviews: API.OperationMethod<
  GetOrganizationsLocationsOrgPolicyViolationsPreviewsRequest,
  GetOrganizationsLocationsOrgPolicyViolationsPreviewsResponse,
  GetOrganizationsLocationsOrgPolicyViolationsPreviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsOrgPolicyViolationsPreviewsRequest,
  output: GetOrganizationsLocationsOrgPolicyViolationsPreviewsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest {
  /** Required. The organization under which this OrgPolicyViolationsPreview will be created. Example: `organizations/my-example-org/locations/global` */
  parent: string;
  /** Optional. An optional user-specified ID for the OrgPolicyViolationsPreview. If not provided, a random ID will be generated. */
  orgPolicyViolationsPreviewId?: string;
  /** Request body */
  body?: GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview;
}

export const CreateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orgPolicyViolationsPreviewId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("orgPolicyViolationsPreviewId"),
    ),
    body: Schema.optional(
      GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/orgPolicyViolationsPreviews",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest>;

export type CreateOrganizationsLocationsOrgPolicyViolationsPreviewsResponse =
  GoogleLongrunningOperation;
export const CreateOrganizationsLocationsOrgPolicyViolationsPreviewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateOrganizationsLocationsOrgPolicyViolationsPreviewsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CreateOrgPolicyViolationsPreview creates an OrgPolicyViolationsPreview for the proposed changes in the provided OrgPolicyViolationsPreview.OrgPolicyOverlay. The changes to OrgPolicy are specified by this `OrgPolicyOverlay`. The resources to scan are inferred from these specified changes. */
export const createOrganizationsLocationsOrgPolicyViolationsPreviews: API.OperationMethod<
  CreateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest,
  CreateOrganizationsLocationsOrgPolicyViolationsPreviewsResponse,
  CreateOrganizationsLocationsOrgPolicyViolationsPreviewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsOrgPolicyViolationsPreviewsRequest,
  output: CreateOrganizationsLocationsOrgPolicyViolationsPreviewsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsRequest {
  /** Required. The OrgPolicyViolationsPreview to get OrgPolicyViolations from. Format: organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview} */
  parent: string;
  /** Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 1000 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token. */
  pageToken?: string;
}

export const ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/orgPolicyViolations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsRequest>;

export type ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsResponse =
  GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsResponse;
export const ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaListOrgPolicyViolationsResponse;

export type ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ListOrgPolicyViolations lists the OrgPolicyViolations that are present in an OrgPolicyViolationsPreview. */
export const listOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsRequest,
  ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsResponse,
  ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsRequest,
  output:
    ListOrganizationsLocationsOrgPolicyViolationsPreviewsOrgPolicyViolationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsRequest>;

export type GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsResponse =
  GoogleLongrunningOperation;
export const GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsOrgPolicyViolationsPreviewsOperations: API.OperationMethod<
  GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsRequest,
  GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsResponse,
  GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsRequest,
  output:
    GetOrganizationsLocationsOrgPolicyViolationsPreviewsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsLocationsReplaysRequest {
  /** Required. The name of the Replay to retrieve, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the `Replay`. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
  name: string;
}

export const GetOrganizationsLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsReplaysRequest>;

export type GetOrganizationsLocationsReplaysResponse =
  GoogleCloudPolicysimulatorV1betaReplay;
export const GetOrganizationsLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaReplay;

export type GetOrganizationsLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified Replay. Each `Replay` is available for at least 7 days. */
export const getOrganizationsLocationsReplays: API.OperationMethod<
  GetOrganizationsLocationsReplaysRequest,
  GetOrganizationsLocationsReplaysResponse,
  GetOrganizationsLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsReplaysRequest,
  output: GetOrganizationsLocationsReplaysResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateOrganizationsLocationsReplaysRequest {
  /** Required. The parent resource where this Replay will be created. This resource must be a project, folder, or organization with a location. Example: `projects/my-example-project/locations/global` */
  parent: string;
  /** Request body */
  body?: GoogleCloudPolicysimulatorV1betaReplay;
}

export const CreateOrganizationsLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudPolicysimulatorV1betaReplay).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+parent}/replays", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsReplaysRequest>;

export type CreateOrganizationsLocationsReplaysResponse =
  GoogleLongrunningOperation;
export const CreateOrganizationsLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateOrganizationsLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates and starts a Replay using the given ReplayConfig. */
export const createOrganizationsLocationsReplays: API.OperationMethod<
  CreateOrganizationsLocationsReplaysRequest,
  CreateOrganizationsLocationsReplaysResponse,
  CreateOrganizationsLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsReplaysRequest,
  output: CreateOrganizationsLocationsReplaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsReplaysRequest {
  /** A page token, received from a previous Simulator.ListReplays call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to Simulator.ListReplays must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of Replay objects to return. Defaults to 50. The maximum value is 1000; values above 1000 are rounded down to 1000. */
  pageSize?: number;
  /** Required. The parent resource, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global` Only `Replay` objects that are direct children of the provided parent are listed. In other words, `Replay` objects that are children of a project will not be included when the parent is a folder of that project. */
  parent: string;
}

export const ListOrganizationsLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/replays" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsReplaysRequest>;

export type ListOrganizationsLocationsReplaysResponse =
  GoogleCloudPolicysimulatorV1betaListReplaysResponse;
export const ListOrganizationsLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaListReplaysResponse;

export type ListOrganizationsLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists each Replay in a project, folder, or organization. Each `Replay` is available for at least 7 days. */
export const listOrganizationsLocationsReplays: API.PaginatedOperationMethod<
  ListOrganizationsLocationsReplaysRequest,
  ListOrganizationsLocationsReplaysResponse,
  ListOrganizationsLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsReplaysRequest,
  output: ListOrganizationsLocationsReplaysResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsReplaysOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsReplaysOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsReplaysOperationsRequest>;

export type GetOrganizationsLocationsReplaysOperationsResponse =
  GoogleLongrunningOperation;
export const GetOrganizationsLocationsReplaysOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetOrganizationsLocationsReplaysOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsReplaysOperations: API.OperationMethod<
  GetOrganizationsLocationsReplaysOperationsRequest,
  GetOrganizationsLocationsReplaysOperationsResponse,
  GetOrganizationsLocationsReplaysOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsReplaysOperationsRequest,
  output: GetOrganizationsLocationsReplaysOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsReplaysOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListOrganizationsLocationsReplaysOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsReplaysOperationsRequest>;

export type ListOrganizationsLocationsReplaysOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListOrganizationsLocationsReplaysOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListOrganizationsLocationsReplaysOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsLocationsReplaysOperations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsReplaysOperationsRequest,
  ListOrganizationsLocationsReplaysOperationsResponse,
  ListOrganizationsLocationsReplaysOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsReplaysOperationsRequest,
  output: ListOrganizationsLocationsReplaysOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsLocationsReplaysResultsRequest {
  /** Required. The Replay whose results are listed, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}` Example: `projects/my-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
  parent: string;
  /** A page token, received from a previous Simulator.ListReplayResults call. Provide this token to retrieve the next page of results. When paginating, all other parameters provided to [Simulator.ListReplayResults[] must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of ReplayResult objects to return. Defaults to 5000. The maximum value is 5000; values above 5000 are rounded down to 5000. */
  pageSize?: number;
}

export const ListOrganizationsLocationsReplaysResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/results" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsReplaysResultsRequest>;

export type ListOrganizationsLocationsReplaysResultsResponse =
  GoogleCloudPolicysimulatorV1betaListReplayResultsResponse;
export const ListOrganizationsLocationsReplaysResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaListReplayResultsResponse;

export type ListOrganizationsLocationsReplaysResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the results of running a Replay. */
export const listOrganizationsLocationsReplaysResults: API.PaginatedOperationMethod<
  ListOrganizationsLocationsReplaysResultsRequest,
  ListOrganizationsLocationsReplaysResultsResponse,
  ListOrganizationsLocationsReplaysResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsReplaysResultsRequest,
  output: ListOrganizationsLocationsReplaysResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsAccessPolicySimulationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsAccessPolicySimulationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsAccessPolicySimulationsOperationsRequest>;

export type GetOrganizationsLocationsAccessPolicySimulationsOperationsResponse =
  GoogleLongrunningOperation;
export const GetOrganizationsLocationsAccessPolicySimulationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetOrganizationsLocationsAccessPolicySimulationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsAccessPolicySimulationsOperations: API.OperationMethod<
  GetOrganizationsLocationsAccessPolicySimulationsOperationsRequest,
  GetOrganizationsLocationsAccessPolicySimulationsOperationsResponse,
  GetOrganizationsLocationsAccessPolicySimulationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsAccessPolicySimulationsOperationsRequest,
  output: GetOrganizationsLocationsAccessPolicySimulationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetFoldersLocationsAccessPolicySimulationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetFoldersLocationsAccessPolicySimulationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsAccessPolicySimulationsOperationsRequest>;

export type GetFoldersLocationsAccessPolicySimulationsOperationsResponse =
  GoogleLongrunningOperation;
export const GetFoldersLocationsAccessPolicySimulationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetFoldersLocationsAccessPolicySimulationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getFoldersLocationsAccessPolicySimulationsOperations: API.OperationMethod<
  GetFoldersLocationsAccessPolicySimulationsOperationsRequest,
  GetFoldersLocationsAccessPolicySimulationsOperationsResponse,
  GetFoldersLocationsAccessPolicySimulationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsAccessPolicySimulationsOperationsRequest,
  output: GetFoldersLocationsAccessPolicySimulationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsRequest>;

export type GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsResponse =
  GoogleLongrunningOperation;
export const GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getFoldersLocationsOrgPolicyViolationsPreviewsOperations: API.OperationMethod<
  GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsRequest,
  GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsResponse,
  GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsRequest,
  output: GetFoldersLocationsOrgPolicyViolationsPreviewsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetFoldersLocationsReplaysRequest {
  /** Required. The name of the Replay to retrieve, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the `Replay`. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
  name: string;
}

export const GetFoldersLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsReplaysRequest>;

export type GetFoldersLocationsReplaysResponse =
  GoogleCloudPolicysimulatorV1betaReplay;
export const GetFoldersLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaReplay;

export type GetFoldersLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified Replay. Each `Replay` is available for at least 7 days. */
export const getFoldersLocationsReplays: API.OperationMethod<
  GetFoldersLocationsReplaysRequest,
  GetFoldersLocationsReplaysResponse,
  GetFoldersLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsReplaysRequest,
  output: GetFoldersLocationsReplaysResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateFoldersLocationsReplaysRequest {
  /** Required. The parent resource where this Replay will be created. This resource must be a project, folder, or organization with a location. Example: `projects/my-example-project/locations/global` */
  parent: string;
  /** Request body */
  body?: GoogleCloudPolicysimulatorV1betaReplay;
}

export const CreateFoldersLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudPolicysimulatorV1betaReplay).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+parent}/replays", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateFoldersLocationsReplaysRequest>;

export type CreateFoldersLocationsReplaysResponse = GoogleLongrunningOperation;
export const CreateFoldersLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateFoldersLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates and starts a Replay using the given ReplayConfig. */
export const createFoldersLocationsReplays: API.OperationMethod<
  CreateFoldersLocationsReplaysRequest,
  CreateFoldersLocationsReplaysResponse,
  CreateFoldersLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateFoldersLocationsReplaysRequest,
  output: CreateFoldersLocationsReplaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersLocationsReplaysRequest {
  /** The maximum number of Replay objects to return. Defaults to 50. The maximum value is 1000; values above 1000 are rounded down to 1000. */
  pageSize?: number;
  /** A page token, received from a previous Simulator.ListReplays call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to Simulator.ListReplays must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent resource, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global` Only `Replay` objects that are direct children of the provided parent are listed. In other words, `Replay` objects that are children of a project will not be included when the parent is a folder of that project. */
  parent: string;
}

export const ListFoldersLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/replays" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersLocationsReplaysRequest>;

export type ListFoldersLocationsReplaysResponse =
  GoogleCloudPolicysimulatorV1betaListReplaysResponse;
export const ListFoldersLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaListReplaysResponse;

export type ListFoldersLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists each Replay in a project, folder, or organization. Each `Replay` is available for at least 7 days. */
export const listFoldersLocationsReplays: API.PaginatedOperationMethod<
  ListFoldersLocationsReplaysRequest,
  ListFoldersLocationsReplaysResponse,
  ListFoldersLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersLocationsReplaysRequest,
  output: ListFoldersLocationsReplaysResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetFoldersLocationsReplaysOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetFoldersLocationsReplaysOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsReplaysOperationsRequest>;

export type GetFoldersLocationsReplaysOperationsResponse =
  GoogleLongrunningOperation;
export const GetFoldersLocationsReplaysOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetFoldersLocationsReplaysOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getFoldersLocationsReplaysOperations: API.OperationMethod<
  GetFoldersLocationsReplaysOperationsRequest,
  GetFoldersLocationsReplaysOperationsResponse,
  GetFoldersLocationsReplaysOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsReplaysOperationsRequest,
  output: GetFoldersLocationsReplaysOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersLocationsReplaysOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListFoldersLocationsReplaysOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersLocationsReplaysOperationsRequest>;

export type ListFoldersLocationsReplaysOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListFoldersLocationsReplaysOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListFoldersLocationsReplaysOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listFoldersLocationsReplaysOperations: API.PaginatedOperationMethod<
  ListFoldersLocationsReplaysOperationsRequest,
  ListFoldersLocationsReplaysOperationsResponse,
  ListFoldersLocationsReplaysOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersLocationsReplaysOperationsRequest,
  output: ListFoldersLocationsReplaysOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListFoldersLocationsReplaysResultsRequest {
  /** A page token, received from a previous Simulator.ListReplayResults call. Provide this token to retrieve the next page of results. When paginating, all other parameters provided to [Simulator.ListReplayResults[] must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of ReplayResult objects to return. Defaults to 5000. The maximum value is 5000; values above 5000 are rounded down to 5000. */
  pageSize?: number;
  /** Required. The Replay whose results are listed, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}` Example: `projects/my-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
  parent: string;
}

export const ListFoldersLocationsReplaysResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/results" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersLocationsReplaysResultsRequest>;

export type ListFoldersLocationsReplaysResultsResponse =
  GoogleCloudPolicysimulatorV1betaListReplayResultsResponse;
export const ListFoldersLocationsReplaysResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaListReplayResultsResponse;

export type ListFoldersLocationsReplaysResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the results of running a Replay. */
export const listFoldersLocationsReplaysResults: API.PaginatedOperationMethod<
  ListFoldersLocationsReplaysResultsRequest,
  ListFoldersLocationsReplaysResultsResponse,
  ListFoldersLocationsReplaysResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersLocationsReplaysResultsRequest,
  output: ListFoldersLocationsReplaysResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("returnPartialSuccess"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/{+name}" }),
  svc,
) as unknown as Schema.Schema<ListOperationsRequest>;

export type ListOperationsResponse = GoogleLongrunningListOperationsResponse;
export const ListOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListOperationsError = DefaultErrors | NotFound | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOperations: API.PaginatedOperationMethod<
  ListOperationsRequest,
  ListOperationsResponse,
  ListOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOperationsRequest,
  output: ListOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = GoogleLongrunningOperation;
export const GetOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOperations: API.OperationMethod<
  GetOperationsRequest,
  GetOperationsResponse,
  GetOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperationsRequest,
  output: GetOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAccessPolicySimulationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsAccessPolicySimulationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAccessPolicySimulationsOperationsRequest>;

export type GetProjectsLocationsAccessPolicySimulationsOperationsResponse =
  GoogleLongrunningOperation;
export const GetProjectsLocationsAccessPolicySimulationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsAccessPolicySimulationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsAccessPolicySimulationsOperations: API.OperationMethod<
  GetProjectsLocationsAccessPolicySimulationsOperationsRequest,
  GetProjectsLocationsAccessPolicySimulationsOperationsResponse,
  GetProjectsLocationsAccessPolicySimulationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAccessPolicySimulationsOperationsRequest,
  output: GetProjectsLocationsAccessPolicySimulationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsRequest>;

export type GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsResponse =
  GoogleLongrunningOperation;
export const GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOrgPolicyViolationsPreviewsOperations: API.OperationMethod<
  GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsRequest,
  GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsResponse,
  GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsRequest,
  output: GetProjectsLocationsOrgPolicyViolationsPreviewsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsReplaysRequest {
  /** Required. The name of the Replay to retrieve, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the `Replay`. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
  name: string;
}

export const GetProjectsLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsReplaysRequest>;

export type GetProjectsLocationsReplaysResponse =
  GoogleCloudPolicysimulatorV1betaReplay;
export const GetProjectsLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaReplay;

export type GetProjectsLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified Replay. Each `Replay` is available for at least 7 days. */
export const getProjectsLocationsReplays: API.OperationMethod<
  GetProjectsLocationsReplaysRequest,
  GetProjectsLocationsReplaysResponse,
  GetProjectsLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReplaysRequest,
  output: GetProjectsLocationsReplaysResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsReplaysRequest {
  /** Required. The parent resource where this Replay will be created. This resource must be a project, folder, or organization with a location. Example: `projects/my-example-project/locations/global` */
  parent: string;
  /** Request body */
  body?: GoogleCloudPolicysimulatorV1betaReplay;
}

export const CreateProjectsLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudPolicysimulatorV1betaReplay).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+parent}/replays", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsReplaysRequest>;

export type CreateProjectsLocationsReplaysResponse = GoogleLongrunningOperation;
export const CreateProjectsLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates and starts a Replay using the given ReplayConfig. */
export const createProjectsLocationsReplays: API.OperationMethod<
  CreateProjectsLocationsReplaysRequest,
  CreateProjectsLocationsReplaysResponse,
  CreateProjectsLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReplaysRequest,
  output: CreateProjectsLocationsReplaysResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsReplaysRequest {
  /** The maximum number of Replay objects to return. Defaults to 50. The maximum value is 1000; values above 1000 are rounded down to 1000. */
  pageSize?: number;
  /** A page token, received from a previous Simulator.ListReplays call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to Simulator.ListReplays must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent resource, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global` Only `Replay` objects that are direct children of the provided parent are listed. In other words, `Replay` objects that are children of a project will not be included when the parent is a folder of that project. */
  parent: string;
}

export const ListProjectsLocationsReplaysRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/replays" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReplaysRequest>;

export type ListProjectsLocationsReplaysResponse =
  GoogleCloudPolicysimulatorV1betaListReplaysResponse;
export const ListProjectsLocationsReplaysResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaListReplaysResponse;

export type ListProjectsLocationsReplaysError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists each Replay in a project, folder, or organization. Each `Replay` is available for at least 7 days. */
export const listProjectsLocationsReplays: API.PaginatedOperationMethod<
  ListProjectsLocationsReplaysRequest,
  ListProjectsLocationsReplaysResponse,
  ListProjectsLocationsReplaysError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReplaysRequest,
  output: ListProjectsLocationsReplaysResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsReplaysOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsReplaysOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReplaysOperationsRequest>;

export type ListProjectsLocationsReplaysOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsReplaysOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsLocationsReplaysOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsReplaysOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsReplaysOperationsRequest,
  ListProjectsLocationsReplaysOperationsResponse,
  ListProjectsLocationsReplaysOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReplaysOperationsRequest,
  output: ListProjectsLocationsReplaysOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsReplaysOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsReplaysOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsReplaysOperationsRequest>;

export type GetProjectsLocationsReplaysOperationsResponse =
  GoogleLongrunningOperation;
export const GetProjectsLocationsReplaysOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsReplaysOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsReplaysOperations: API.OperationMethod<
  GetProjectsLocationsReplaysOperationsRequest,
  GetProjectsLocationsReplaysOperationsResponse,
  GetProjectsLocationsReplaysOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReplaysOperationsRequest,
  output: GetProjectsLocationsReplaysOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsReplaysResultsRequest {
  /** Required. The Replay whose results are listed, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}` Example: `projects/my-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
  parent: string;
  /** A page token, received from a previous Simulator.ListReplayResults call. Provide this token to retrieve the next page of results. When paginating, all other parameters provided to [Simulator.ListReplayResults[] must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of ReplayResult objects to return. Defaults to 5000. The maximum value is 5000; values above 5000 are rounded down to 5000. */
  pageSize?: number;
}

export const ListProjectsLocationsReplaysResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/results" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReplaysResultsRequest>;

export type ListProjectsLocationsReplaysResultsResponse =
  GoogleCloudPolicysimulatorV1betaListReplayResultsResponse;
export const ListProjectsLocationsReplaysResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudPolicysimulatorV1betaListReplayResultsResponse;

export type ListProjectsLocationsReplaysResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the results of running a Replay. */
export const listProjectsLocationsReplaysResults: API.PaginatedOperationMethod<
  ListProjectsLocationsReplaysResultsRequest,
  ListProjectsLocationsReplaysResultsResponse,
  ListProjectsLocationsReplaysResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReplaysResultsRequest,
  output: ListProjectsLocationsReplaysResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
