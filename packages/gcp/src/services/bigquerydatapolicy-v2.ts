// ==========================================================================
// BigQuery Data Policy API (bigquerydatapolicy v2)
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
  name: "bigquerydatapolicy",
  version: "v2",
  rootUrl: "https://bigquerydatapolicy.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DataMaskingPolicy {
  /** Optional. A predefined masking expression. */
  predefinedExpression?:
    | "PREDEFINED_EXPRESSION_UNSPECIFIED"
    | "SHA256"
    | "ALWAYS_NULL"
    | "DEFAULT_MASKING_VALUE"
    | "LAST_FOUR_CHARACTERS"
    | "FIRST_FOUR_CHARACTERS"
    | "EMAIL_MASK"
    | "DATE_YEAR_MASK"
    | "RANDOM_HASH"
    | (string & {});
  /** Optional. The name of the BigQuery routine that contains the custom masking routine, in the format of `projects/{project_number}/datasets/{dataset_id}/routines/{routine_id}`. */
  routine?: string;
}

export const DataMaskingPolicy: Schema.Schema<DataMaskingPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    predefinedExpression: Schema.optional(Schema.String),
    routine: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataMaskingPolicy" });

export interface DataGovernanceTag {
  /** Optional. Specifies the tag value as the short name, for example `sensitive`. */
  value?: string;
  /** Optional. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example `parent-id/pii` where `parent-id` is the ID of the parent organization or project resource for this tag key. */
  key?: string;
}

export const DataGovernanceTag: Schema.Schema<DataGovernanceTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataGovernanceTag" });

export interface DataPolicy {
  /** Optional. The data masking policy that specifies the data masking rule to use. It must be set if the data policy type is DATA_MASKING_POLICY. */
  dataMaskingPolicy?: DataMaskingPolicy;
  /** Output only. User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {data_policy_id} in part of the resource name. */
  dataPolicyId?: string;
  /** Output only. Policy tag resource name, in the format of `projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{policyTag_id}`. policy_tag is supported only for V1 data policies. */
  policyTag?: string;
  /** Identifier. Resource name of this data policy, in the format of `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`. */
  name?: string;
  /** Optional. Data Governance tag bound to the Data Policy. */
  dataGovernanceTag?: DataGovernanceTag;
  /** Optional. The list of IAM principals that have Fine Grained Access to the underlying data goverened by this data policy. Uses the [IAM V2 principal syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2) Only supports principal types users, groups, serviceaccounts, cloudidentity. This field is supported in V2 Data Policy only. In case of V1 data policies (i.e. verion = 1 and policy_tag is set), this field is not populated. */
  grantees?: ReadonlyArray<string>;
  /** Output only. The version of the Data Policy resource. */
  version?: "VERSION_UNSPECIFIED" | "V1" | "V2" | (string & {});
  /** The etag for this Data Policy. This field is used for UpdateDataPolicy calls. If Data Policy exists, this field is required and must match the server's etag. It will also be populated in the response of GetDataPolicy, CreateDataPolicy, and UpdateDataPolicy calls. */
  etag?: string;
  /** Required. Type of data policy. */
  dataPolicyType?:
    | "DATA_POLICY_TYPE_UNSPECIFIED"
    | "DATA_MASKING_POLICY"
    | "RAW_DATA_ACCESS_POLICY"
    | "COLUMN_LEVEL_SECURITY_POLICY"
    | (string & {});
}

export const DataPolicy: Schema.Schema<DataPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataMaskingPolicy: Schema.optional(DataMaskingPolicy),
    dataPolicyId: Schema.optional(Schema.String),
    policyTag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dataGovernanceTag: Schema.optional(DataGovernanceTag),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    dataPolicyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataPolicy" });

export interface CreateDataPolicyRequest {
  /** Required. User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {data_policy_id} in part of the resource name. */
  dataPolicyId?: string;
  /** Required. The data policy to create. The `name` field does not need to be provided for the data policy creation. */
  dataPolicy?: DataPolicy;
}

export const CreateDataPolicyRequest: Schema.Schema<CreateDataPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataPolicyId: Schema.optional(Schema.String),
    dataPolicy: Schema.optional(DataPolicy),
  }).annotate({ identifier: "CreateDataPolicyRequest" });

export interface Expr {
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
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

export interface GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Schema<GetPolicyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface GetIamPolicyRequest {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Schema<GetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface RemoveGranteesRequest {
  /** Required. IAM principal that should be revoked from Fine Grained Access to the underlying data goverened by the data policy. The target data policy is determined by the `data_policy` field. Uses the [IAM V2 principal syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2). Supported principal types: * User * Group * Service account */
  grantees?: ReadonlyArray<string>;
}

export const RemoveGranteesRequest: Schema.Schema<RemoveGranteesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grantees: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemoveGranteesRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface AddGranteesRequest {
  /** Required. IAM principal that should be granted Fine Grained Access to the underlying data goverened by the data policy. The target data policy is determined by the `data_policy` field. Uses the [IAM V2 principal syntax](https://cloud.google.com/iam/docs/principal-identifiers#v2). Supported principal types: * User * Group * Service account */
  grantees?: ReadonlyArray<string>;
}

export const AddGranteesRequest: Schema.Schema<AddGranteesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grantees: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AddGranteesRequest" });

export interface ListDataPoliciesResponse {
  /** Data policies that belong to the requested project. */
  dataPolicies?: ReadonlyArray<DataPolicy>;
  /** Token used to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListDataPoliciesResponse: Schema.Schema<ListDataPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataPolicies: Schema.optional(Schema.Array(DataPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDataPoliciesResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

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

export interface ListProjectsLocationsDataPoliciesRequest {
  /** Optional. The maximum number of data policies to return. Must be a value between 1 and 1000. If not set, defaults to 50. */
  pageSize?: number;
  /** Required. Resource name of the project for which to list data policies. Format is `projects/{project_number}/locations/{location_id}`. */
  parent: string;
  /** Optional. The `nextPageToken` value returned from a previous list request, if any. If not set, defaults to an empty string. */
  pageToken?: string;
  /** Optional. Filters the data policies by policy tags that they are associated with. Currently filter only supports "policy_tag" based filtering and OR based predicates. Sample filter can be "policy_tag: projects/1/locations/us/taxonomies/2/policyTags/3". You may also use wildcard such as "policy_tag: projects/1/locations/us/taxonomies/2*". Please note that OR predicates cannot be used with wildcard filters. */
  filter?: string;
}

export const ListProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/dataPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataPoliciesRequest>;

export type ListProjectsLocationsDataPoliciesResponse =
  ListDataPoliciesResponse;
export const ListProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataPoliciesResponse;

export type ListProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all of the data policies in the specified parent project. */
export const listProjectsLocationsDataPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsDataPoliciesRequest,
  ListProjectsLocationsDataPoliciesResponse,
  ListProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataPoliciesRequest,
  output: ListProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsDataPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDataPoliciesRequest>;

export type GetIamPolicyProjectsLocationsDataPoliciesResponse = Policy;
export const GetIamPolicyProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the IAM policy for the specified data policy. */
export const getIamPolicyProjectsLocationsDataPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsDataPoliciesRequest,
  GetIamPolicyProjectsLocationsDataPoliciesResponse,
  GetIamPolicyProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDataPoliciesRequest,
  output: GetIamPolicyProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsDataPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsDataPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsDataPoliciesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the caller's permission on the specified data policy resource. */
export const testIamPermissionsProjectsLocationsDataPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsDataPoliciesRequest,
  TestIamPermissionsProjectsLocationsDataPoliciesResponse,
  TestIamPermissionsProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsDataPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDataPoliciesRequest {
  /** Required. Resource name of the data policy to delete. Format is `projects/{project_number}/locations/{location_id}/dataPolicies/{id}`. */
  name: string;
}

export const DeleteProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDataPoliciesRequest>;

export type DeleteProjectsLocationsDataPoliciesResponse = Empty;
export const DeleteProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the data policy specified by its resource name. */
export const deleteProjectsLocationsDataPolicies: API.OperationMethod<
  DeleteProjectsLocationsDataPoliciesRequest,
  DeleteProjectsLocationsDataPoliciesResponse,
  DeleteProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDataPoliciesRequest,
  output: DeleteProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDataPoliciesRequest {
  /** Required. Resource name of the project that the data policy will belong to. The format is `projects/{project_number}/locations/{location_id}`. */
  parent: string;
  /** Request body */
  body?: CreateDataPolicyRequest;
}

export const CreateProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CreateDataPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/dataPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDataPoliciesRequest>;

export type CreateProjectsLocationsDataPoliciesResponse = DataPolicy;
export const CreateProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataPolicy;

export type CreateProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new data policy under a project with the given `data_policy_id` (used as the display name), and data policy type. */
export const createProjectsLocationsDataPolicies: API.OperationMethod<
  CreateProjectsLocationsDataPoliciesRequest,
  CreateProjectsLocationsDataPoliciesResponse,
  CreateProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDataPoliciesRequest,
  output: CreateProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDataPoliciesRequest {
  /** Required. Resource name of the requested data policy. Format is `projects/{project_number}/locations/{location_id}/dataPolicies/{id}`. */
  name: string;
}

export const GetProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataPoliciesRequest>;

export type GetProjectsLocationsDataPoliciesResponse = DataPolicy;
export const GetProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataPolicy;

export type GetProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the data policy specified by its resource name. */
export const getProjectsLocationsDataPolicies: API.OperationMethod<
  GetProjectsLocationsDataPoliciesRequest,
  GetProjectsLocationsDataPoliciesResponse,
  GetProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataPoliciesRequest,
  output: GetProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsDataPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDataPoliciesRequest>;

export type SetIamPolicyProjectsLocationsDataPoliciesResponse = Policy;
export const SetIamPolicyProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM policy for the specified data policy. */
export const setIamPolicyProjectsLocationsDataPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsDataPoliciesRequest,
  SetIamPolicyProjectsLocationsDataPoliciesResponse,
  SetIamPolicyProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDataPoliciesRequest,
  output: SetIamPolicyProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveGranteesProjectsLocationsDataPoliciesRequest {
  /** Required. Resource name of this data policy, in the format of `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`. */
  dataPolicy: string;
  /** Request body */
  body?: RemoveGranteesRequest;
}

export const RemoveGranteesProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataPolicy: Schema.String.pipe(T.HttpPath("dataPolicy")),
    body: Schema.optional(RemoveGranteesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+dataPolicy}:removeGrantees",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveGranteesProjectsLocationsDataPoliciesRequest>;

export type RemoveGranteesProjectsLocationsDataPoliciesResponse = DataPolicy;
export const RemoveGranteesProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataPolicy;

export type RemoveGranteesProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes grantees from a data policy. The grantees will be removed from the existing grantees. If the request contains a grantee that does not exist, the grantee will be ignored. */
export const removeGranteesProjectsLocationsDataPolicies: API.OperationMethod<
  RemoveGranteesProjectsLocationsDataPoliciesRequest,
  RemoveGranteesProjectsLocationsDataPoliciesResponse,
  RemoveGranteesProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveGranteesProjectsLocationsDataPoliciesRequest,
  output: RemoveGranteesProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddGranteesProjectsLocationsDataPoliciesRequest {
  /** Required. Resource name of this data policy, in the format of `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`. */
  dataPolicy: string;
  /** Request body */
  body?: AddGranteesRequest;
}

export const AddGranteesProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataPolicy: Schema.String.pipe(T.HttpPath("dataPolicy")),
    body: Schema.optional(AddGranteesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+dataPolicy}:addGrantees",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddGranteesProjectsLocationsDataPoliciesRequest>;

export type AddGranteesProjectsLocationsDataPoliciesResponse = DataPolicy;
export const AddGranteesProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataPolicy;

export type AddGranteesProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds new grantees to a data policy. The new grantees will be added to the existing grantees. If the request contains a duplicate grantee, the grantee will be ignored. If the request contains a grantee that already exists, the grantee will be ignored. */
export const addGranteesProjectsLocationsDataPolicies: API.OperationMethod<
  AddGranteesProjectsLocationsDataPoliciesRequest,
  AddGranteesProjectsLocationsDataPoliciesResponse,
  AddGranteesProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddGranteesProjectsLocationsDataPoliciesRequest,
  output: AddGranteesProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDataPoliciesRequest {
  /** Optional. If set to true, and the data policy is not found, a new data policy will be created. In this situation, update_mask is ignored. */
  allowMissing?: boolean;
  /** Identifier. Resource name of this data policy, in the format of `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`. */
  name: string;
  /** Optional. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. Updates to the `name` and `dataPolicyId` fields are not allowed. */
  updateMask?: string;
  /** Request body */
  body?: DataPolicy;
}

export const PatchProjectsLocationsDataPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(DataPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDataPoliciesRequest>;

export type PatchProjectsLocationsDataPoliciesResponse = DataPolicy;
export const PatchProjectsLocationsDataPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataPolicy;

export type PatchProjectsLocationsDataPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the metadata for an existing data policy. The target data policy can be specified by the resource name. */
export const patchProjectsLocationsDataPolicies: API.OperationMethod<
  PatchProjectsLocationsDataPoliciesRequest,
  PatchProjectsLocationsDataPoliciesResponse,
  PatchProjectsLocationsDataPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDataPoliciesRequest,
  output: PatchProjectsLocationsDataPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
