// ==========================================================================
// Assured Workloads API (assuredworkloads v1)
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
  name: "assuredworkloads",
  version: "v1",
  rootUrl: "https://assuredworkloads.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRuleStringValues {
  /** List of values allowed at this resource. */
  allowedValues?: ReadonlyArray<string>;
  /** List of values denied at this resource. */
  deniedValues?: ReadonlyArray<string>;
}

export const GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRuleStringValues: Schema.Schema<GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRuleStringValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedValues: Schema.optional(Schema.Array(Schema.String)),
    deniedValues: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRuleStringValues",
  });

export interface GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRule {
  /** ListPolicy only when all values are allowed. */
  allowAll?: boolean;
  /** ListPolicy only when all values are denied. */
  denyAll?: boolean;
  /** ListPolicy only when custom values are specified. */
  values?: GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRuleStringValues;
  /** BooleanPolicy only. */
  enforce?: boolean;
}

export const GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRule: Schema.Schema<GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowAll: Schema.optional(Schema.Boolean),
    denyAll: Schema.optional(Schema.Boolean),
    values: Schema.optional(
      GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRuleStringValues,
    ),
    enforce: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRule",
  });

export interface GoogleCloudAssuredworkloadsV1OrgPolicy {
  /** Ignores policies set above this resource and restores to the `constraint_default` value. `reset` can only be true when `rules` is empty and `inherit` is false. */
  reset?: boolean;
  /** Resource that the OrgPolicy attaches to. Format: folders/123" projects/123". */
  resource?: string;
  /** The rule of the OrgPolicy. */
  rule?: GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRule;
  /** The constraint name of the OrgPolicy. e.g. "constraints/gcp.resourceLocations". */
  constraint?: string;
  /** If `inherit` is true, policy rules of the lowest ancestor in the resource hierarchy chain are inherited. If it is false, policy rules are not inherited. */
  inherit?: boolean;
}

export const GoogleCloudAssuredworkloadsV1OrgPolicy: Schema.Schema<GoogleCloudAssuredworkloadsV1OrgPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reset: Schema.optional(Schema.Boolean),
    resource: Schema.optional(Schema.String),
    rule: Schema.optional(GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRule),
    constraint: Schema.optional(Schema.String),
    inherit: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1OrgPolicy" });

export interface GoogleCloudAssuredworkloadsV1OrgPolicyUpdate {
  /** The suggested org policy that replaces the applied policy. */
  suggestedPolicy?: GoogleCloudAssuredworkloadsV1OrgPolicy;
  /** The org policy currently applied on the assured workload resource. */
  appliedPolicy?: GoogleCloudAssuredworkloadsV1OrgPolicy;
}

export const GoogleCloudAssuredworkloadsV1OrgPolicyUpdate: Schema.Schema<GoogleCloudAssuredworkloadsV1OrgPolicyUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedPolicy: Schema.optional(GoogleCloudAssuredworkloadsV1OrgPolicy),
    appliedPolicy: Schema.optional(GoogleCloudAssuredworkloadsV1OrgPolicy),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1OrgPolicyUpdate" });

export interface GoogleCloudAssuredworkloadsV1UpdateDetails {
  /** Update to one org policy, e.g. gcp.resourceLocation. */
  orgPolicyUpdate?: GoogleCloudAssuredworkloadsV1OrgPolicyUpdate;
}

export const GoogleCloudAssuredworkloadsV1UpdateDetails: Schema.Schema<GoogleCloudAssuredworkloadsV1UpdateDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orgPolicyUpdate: Schema.optional(
      GoogleCloudAssuredworkloadsV1OrgPolicyUpdate,
    ),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1UpdateDetails" });

export interface GoogleCloudAssuredworkloadsV1WorkloadUpdate {
  /** Output only. The state of the update. */
  state?:
    | "STATE_UNSPECIFIED"
    | "AVAILABLE"
    | "APPLIED"
    | "WITHDRAWN"
    | (string & {});
  /** Output only. Immutable. Identifier. Resource name of the WorkloadUpdate. Format: organizations/{organization}/locations/{location}/workloads/{workload}/updates/{update} */
  name?: string;
  /** The details of the update. */
  details?: GoogleCloudAssuredworkloadsV1UpdateDetails;
  /** The time the update was created. */
  createTime?: string;
  /** The time the update was last updated. */
  updateTime?: string;
}

export const GoogleCloudAssuredworkloadsV1WorkloadUpdate: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    details: Schema.optional(GoogleCloudAssuredworkloadsV1UpdateDetails),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1WorkloadUpdate" });

export interface GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateResponse {
  /** The update that was applied. */
  appliedUpdate?: GoogleCloudAssuredworkloadsV1WorkloadUpdate;
}

export const GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appliedUpdate: Schema.optional(GoogleCloudAssuredworkloadsV1WorkloadUpdate),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateResponse",
  });

export interface GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus {
  /** Number of current resource violations which are not acknowledged. */
  acknowledgedResourceViolationCount?: number;
  /** Number of current resource violations which are acknowledged. */
  activeResourceViolationCount?: number;
  /** Number of current orgPolicy violations which are not acknowledged. */
  activeViolationCount?: number;
  /** Number of current orgPolicy violations which are acknowledged. */
  acknowledgedViolationCount?: number;
}

export const GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acknowledgedResourceViolationCount: Schema.optional(Schema.Number),
    activeResourceViolationCount: Schema.optional(Schema.Number),
    activeViolationCount: Schema.optional(Schema.Number),
    acknowledgedViolationCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus",
  });

export interface GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse {}

export const GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse",
  });

export interface GoogleCloudAssuredworkloadsV1MoveImpact {
  /** Explanation of the impact. */
  detail?: string;
}

export const GoogleCloudAssuredworkloadsV1MoveImpact: Schema.Schema<GoogleCloudAssuredworkloadsV1MoveImpact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1MoveImpact" });

export interface GoogleCloudAssuredworkloadsV1MoveAnalysisResult {
  /** List of warnings. These are risks that may or may not result in compliance violations. */
  warnings?: ReadonlyArray<GoogleCloudAssuredworkloadsV1MoveImpact>;
  /** List of blockers. If not resolved, these will result in compliance violations in the target. */
  blockers?: ReadonlyArray<GoogleCloudAssuredworkloadsV1MoveImpact>;
}

export const GoogleCloudAssuredworkloadsV1MoveAnalysisResult: Schema.Schema<GoogleCloudAssuredworkloadsV1MoveAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1MoveImpact),
    ),
    blockers: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1MoveImpact),
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1MoveAnalysisResult",
  });

export interface GoogleRpcStatus {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudAssuredworkloadsV1MoveAnalysisGroup {
  /** Result of a successful analysis. */
  analysisResult?: GoogleCloudAssuredworkloadsV1MoveAnalysisResult;
  /** Error details for a failed analysis. */
  error?: GoogleRpcStatus;
  /** Name of the analysis group. */
  displayName?: string;
}

export const GoogleCloudAssuredworkloadsV1MoveAnalysisGroup: Schema.Schema<GoogleCloudAssuredworkloadsV1MoveAnalysisGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analysisResult: Schema.optional(
      GoogleCloudAssuredworkloadsV1MoveAnalysisResult,
    ),
    error: Schema.optional(GoogleRpcStatus),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1MoveAnalysisGroup" });

export interface GoogleCloudAssuredworkloadsV1AssetMoveAnalysis {
  /** Type of the asset being analyzed. Possible values will be among the ones listed [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). */
  assetType?: string;
  /** The full resource name of the asset being analyzed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 */
  asset?: string;
  /** List of eligible analyses performed for the asset. */
  analysisGroups?: ReadonlyArray<GoogleCloudAssuredworkloadsV1MoveAnalysisGroup>;
}

export const GoogleCloudAssuredworkloadsV1AssetMoveAnalysis: Schema.Schema<GoogleCloudAssuredworkloadsV1AssetMoveAnalysis> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetType: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
    analysisGroups: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1MoveAnalysisGroup),
    ),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1AssetMoveAnalysis" });

export interface GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse {
  /** The next page token. Is empty if the last page is reached. */
  nextPageToken?: string;
  /** List of analysis results for each asset in scope. */
  assetMoveAnalyses?: ReadonlyArray<GoogleCloudAssuredworkloadsV1AssetMoveAnalysis>;
}

export const GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    assetMoveAnalyses: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1AssetMoveAnalysis),
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse",
  });

export interface GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest {
  /** Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} */
  nonCompliantOrgPolicy?: string;
  /** Required. Business justification explaining the need for violation acknowledgement */
  comment?: string;
  /** Optional. Acknowledge type of specified violation. */
  acknowledgeType?:
    | "ACKNOWLEDGE_TYPE_UNSPECIFIED"
    | "SINGLE_VIOLATION"
    | "EXISTING_CHILD_RESOURCE_VIOLATIONS"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonCompliantOrgPolicy: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    acknowledgeType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest",
  });

export interface GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse {
  /** Output only. Indicates Ekm enrollment Provisioning of a given workload. */
  ekmProvisioningState?:
    | "EKM_PROVISIONING_STATE_UNSPECIFIED"
    | "EKM_PROVISIONING_STATE_PENDING"
    | "EKM_PROVISIONING_STATE_FAILED"
    | "EKM_PROVISIONING_STATE_COMPLETED"
    | (string & {});
  /** Detailed error message if Ekm provisioning fails */
  ekmProvisioningErrorMapping?:
    | "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED"
    | "INVALID_SERVICE_ACCOUNT"
    | "MISSING_METRICS_SCOPE_ADMIN_PERMISSION"
    | "MISSING_EKM_CONNECTION_ADMIN_PERMISSION"
    | (string & {});
  /** Indicates Ekm provisioning error if any. */
  ekmProvisioningErrorDomain?:
    | "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED"
    | "UNSPECIFIED_ERROR"
    | "GOOGLE_SERVER_ERROR"
    | "EXTERNAL_USER_ERROR"
    | "EXTERNAL_PARTNER_ERROR"
    | "TIMEOUT_ERROR"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ekmProvisioningState: Schema.optional(Schema.String),
    ekmProvisioningErrorMapping: Schema.optional(Schema.String),
    ekmProvisioningErrorDomain: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse",
  });

export interface GoogleCloudAssuredworkloadsV1ViolationExceptionContext {
  /** Business justification provided towards the acknowledgement of the violation. */
  comment?: string;
  /** Name of the user (or service account) who acknowledged the violation. */
  userName?: string;
  /** Timestamp when the violation was acknowledged. */
  acknowledgementTime?: string;
}

export const GoogleCloudAssuredworkloadsV1ViolationExceptionContext: Schema.Schema<GoogleCloudAssuredworkloadsV1ViolationExceptionContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comment: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    acknowledgementTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ViolationExceptionContext",
  });

export interface GoogleLongrunningOperation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(GoogleRpcStatus),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse {}

export const GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse",
  });

export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud {
  /** Steps to resolve violation via gcloud cli */
  steps?: ReadonlyArray<string>;
  /** Additional urls for more information about steps */
  additionalLinks?: ReadonlyArray<string>;
  /** Gcloud command to resolve violation */
  gcloudCommands?: ReadonlyArray<string>;
}

export const GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud: Schema.Schema<GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    steps: Schema.optional(Schema.Array(Schema.String)),
    additionalLinks: Schema.optional(Schema.Array(Schema.String)),
    gcloudCommands: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud",
  });

export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole {
  /** Steps to resolve violation via cloud console */
  steps?: ReadonlyArray<string>;
  /** Additional urls for more information about steps */
  additionalLinks?: ReadonlyArray<string>;
  /** Link to console page where violations can be resolved */
  consoleUris?: ReadonlyArray<string>;
}

export const GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole: Schema.Schema<GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    steps: Schema.optional(Schema.Array(Schema.String)),
    additionalLinks: Schema.optional(Schema.Array(Schema.String)),
    consoleUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole",
  });

export interface GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions {
  /** Remediation instructions to resolve violation via gcloud cli */
  gcloudInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud;
  /** Remediation instructions to resolve violation via cloud console */
  consoleInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole;
}

export const GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions: Schema.Schema<GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcloudInstructions: Schema.optional(
      GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud,
    ),
    consoleInstructions: Schema.optional(
      GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole,
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions",
  });

export interface GoogleCloudAssuredworkloadsV1ViolationRemediation {
  /** Required. Remediation instructions to resolve violations */
  instructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions;
  /** Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values */
  compliantValues?: ReadonlyArray<string>;
  /** Output only. Reemediation type based on the type of org policy values violated */
  remediationType?:
    | "REMEDIATION_TYPE_UNSPECIFIED"
    | "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION"
    | "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION"
    | "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION"
    | "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"
    | "REMEDIATION_RESOURCE_VIOLATION"
    | "REMEDIATION_RESOURCE_VIOLATION_NON_CMEK_SERVICES"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1ViolationRemediation: Schema.Schema<GoogleCloudAssuredworkloadsV1ViolationRemediation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instructions: Schema.optional(
      GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions,
    ),
    compliantValues: Schema.optional(Schema.Array(Schema.String)),
    remediationType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ViolationRemediation",
  });

export interface GoogleCloudAssuredworkloadsV1Violation {
  /** Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id} */
  name?: string;
  /** Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty. */
  resolveTime?: string;
  /** Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization} */
  exceptionAuditLogLink?: string;
  /** Output only. The last time when the Violation record was updated. */
  updateTime?: string;
  /** Optional. Output only. Name of the resource like //storage.googleapis.com/myprojectxyz-testbucket. Empty for org-policy violations. */
  resourceName?: string;
  /** Output only. List of all the exception detail added for the violation. */
  exceptionContexts?: ReadonlyArray<GoogleCloudAssuredworkloadsV1ViolationExceptionContext>;
  /** Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder} */
  auditLogLink?: string;
  /** Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} */
  nonCompliantOrgPolicy?: string;
  /** Optional. Output only. Parent project number where resource is present. Empty for org-policy violations. */
  parentProjectNumber?: string;
  /** Output only. State of the violation */
  state?:
    | "STATE_UNSPECIFIED"
    | "RESOLVED"
    | "UNRESOLVED"
    | "EXCEPTION"
    | (string & {});
  /** Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation. */
  orgPolicyConstraint?: string;
  /** Optional. Output only. Violation Id of the org-policy violation due to which the resource violation is caused. Empty for org-policy violations. */
  associatedOrgPolicyViolationId?: string;
  /** Optional. Output only. Type of the resource like compute.googleapis.com/Disk, etc. Empty for org-policy violations. */
  resourceType?: string;
  /** Output only. Compliance violation remediation */
  remediation?: GoogleCloudAssuredworkloadsV1ViolationRemediation;
  /** Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false. */
  acknowledgementTime?: string;
  /** Output only. Type of the violation */
  violationType?:
    | "VIOLATION_TYPE_UNSPECIFIED"
    | "ORG_POLICY"
    | "RESOURCE"
    | (string & {});
  /** Output only. Time of the event which triggered the Violation. */
  beginTime?: string;
  /** Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc. */
  category?: string;
  /** A boolean that indicates if the violation is acknowledged */
  acknowledged?: boolean;
  /** Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value. */
  description?: string;
}

export const GoogleCloudAssuredworkloadsV1Violation: Schema.Schema<GoogleCloudAssuredworkloadsV1Violation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    resolveTime: Schema.optional(Schema.String),
    exceptionAuditLogLink: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    exceptionContexts: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1ViolationExceptionContext),
    ),
    auditLogLink: Schema.optional(Schema.String),
    nonCompliantOrgPolicy: Schema.optional(Schema.String),
    parentProjectNumber: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    orgPolicyConstraint: Schema.optional(Schema.String),
    associatedOrgPolicyViolationId: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    remediation: Schema.optional(
      GoogleCloudAssuredworkloadsV1ViolationRemediation,
    ),
    acknowledgementTime: Schema.optional(Schema.String),
    violationType: Schema.optional(Schema.String),
    beginTime: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    acknowledged: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1Violation" });

export interface GoogleCloudAssuredworkloadsV1ListViolationsResponse {
  /** List of Violations under a Workload. */
  violations?: ReadonlyArray<GoogleCloudAssuredworkloadsV1Violation>;
  /** The next page token. Returns empty if reached the last page. */
  nextPageToken?: string;
}

export const GoogleCloudAssuredworkloadsV1ListViolationsResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1ListViolationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    violations: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1Violation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ListViolationsResponse",
  });

export interface GoogleCloudAssuredworkloadsV1WorkloadResourceSettings {
  /** Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) */
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "CONSUMER_PROJECT"
    | "CONSUMER_FOLDER"
    | "ENCRYPTION_KEYS_PROJECT"
    | "KEYRING"
    | (string & {});
  /** User-assigned resource display name. If not empty it will be used to create a resource with the specified name. */
  displayName?: string;
  /** Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google. */
  resourceId?: string;
}

export const GoogleCloudAssuredworkloadsV1WorkloadResourceSettings: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadResourceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1WorkloadResourceSettings",
  });

export interface GoogleCloudAssuredworkloadsV1WorkloadResourceInfo {
  /** Indicates the type of resource. */
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "CONSUMER_PROJECT"
    | "CONSUMER_FOLDER"
    | "ENCRYPTION_KEYS_PROJECT"
    | "KEYRING"
    | (string & {});
  /** Output only. Resource identifier. For a project this represents project_number. */
  resourceId?: string;
}

export const GoogleCloudAssuredworkloadsV1WorkloadResourceInfo: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1WorkloadResourceInfo",
  });

export interface GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse {}

export const GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse",
  });

export interface GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse {
  /** The list of workload updates for a given workload. */
  workloadUpdates?: ReadonlyArray<GoogleCloudAssuredworkloadsV1WorkloadUpdate>;
  /** The next page token. Return empty if reached the last page. */
  nextPageToken?: string;
}

export const GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workloadUpdates: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1WorkloadUpdate),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse",
  });

export interface GoogleCloudAssuredworkloadsV1WorkloadKMSSettings {
  /** Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary. */
  nextRotationTime?: string;
  /** Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. */
  rotationPeriod?: string;
}

export const GoogleCloudAssuredworkloadsV1WorkloadKMSSettings: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadKMSSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextRotationTime: Schema.optional(Schema.String),
    rotationPeriod: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1WorkloadKMSSettings",
  });

export interface GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions {
  /** Optional. Specifies type of KAJ Enrollment if provided. */
  kajEnrollmentType?:
    | "KAJ_ENROLLMENT_TYPE_UNSPECIFIED"
    | "KEY_ACCESS_TRANSPARENCY_OFF"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kajEnrollmentType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions",
  });

export interface GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions {
  /** Optional. Allow partner to view access approval logs. */
  serviceAccessApprover?: boolean;
  /** Optional. Allow the partner to view inspectability logs and monitoring violations. */
  dataLogsViewer?: boolean;
  /** Optional. Allow partner to view violation alerts. */
  assuredWorkloadsMonitoring?: boolean;
  /** Optional. Allow partner to view support case details for an AXT log */
  accessTransparencyLogsSupportCaseViewer?: boolean;
}

export const GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccessApprover: Schema.optional(Schema.Boolean),
    dataLogsViewer: Schema.optional(Schema.Boolean),
    assuredWorkloadsMonitoring: Schema.optional(Schema.Boolean),
    accessTransparencyLogsSupportCaseViewer: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions",
  });

export interface GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse {
  /** Indicates SAA enrollment setup error if any. */
  setupErrors?: ReadonlyArray<
    | "SETUP_ERROR_UNSPECIFIED"
    | "ERROR_INVALID_BASE_SETUP"
    | "ERROR_MISSING_EXTERNAL_SIGNING_KEY"
    | "ERROR_NOT_ALL_SERVICES_ENROLLED"
    | "ERROR_SETUP_CHECK_FAILED"
    | (string & {})
  >;
  /** Output only. Indicates SAA enrollment status of a given workload. */
  setupStatus?:
    | "SETUP_STATE_UNSPECIFIED"
    | "STATUS_PENDING"
    | "STATUS_COMPLETE"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setupErrors: Schema.optional(Schema.Array(Schema.String)),
    setupStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse",
  });

export interface GoogleCloudAssuredworkloadsV1Workload {
  /** Output only. Indicates whether resource monitoring is enabled for workload or not. It is true when Resource feed is subscribed to AWM topic and AWM Service Agent Role is binded to AW Service Account for resource Assured workload. */
  resourceMonitoringEnabled?: boolean;
  /** Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional. */
  resourceSettings?: ReadonlyArray<GoogleCloudAssuredworkloadsV1WorkloadResourceSettings>;
  /** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
  name?: string;
  /** Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`. */
  billingAccount?: string;
  /** Optional. Labels applied to the workload. */
  labels?: Record<string, string>;
  /** Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field. */
  kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
  /** Output only. Represents the Ekm Provisioning State of the given workload. */
  ekmProvisioningResponse?: GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;
  /** Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id} */
  provisionedResourcesParent?: string;
  /** Optional. Partner regime associated with this workload. */
  partner?:
    | "PARTNER_UNSPECIFIED"
    | "LOCAL_CONTROLS_BY_S3NS"
    | "SOVEREIGN_CONTROLS_BY_T_SYSTEMS"
    | "SOVEREIGN_CONTROLS_BY_SIA_MINSAIT"
    | "SOVEREIGN_CONTROLS_BY_PSN"
    | "SOVEREIGN_CONTROLS_BY_CNTXT"
    | "SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM"
    | "SPAIN_DATA_BOUNDARY_BY_TELEFONICA"
    | (string & {});
  /** Required. Immutable. Compliance Regime associated with this workload. */
  complianceRegime?:
    | "COMPLIANCE_REGIME_UNSPECIFIED"
    | "ASSURED_WORKLOADS_FOR_PARTNERS"
    | "AUSTRALIA_DATA_BOUNDARY_AND_SUPPORT"
    | "CANADA_DATA_BOUNDARY_AND_SUPPORT"
    | "DATA_BOUNDARY_FOR_CANADA_CONTROLLED_GOODS"
    | "DATA_BOUNDARY_FOR_CANADA_PROTECTED_B"
    | "DATA_BOUNDARY_FOR_CJIS"
    | "DATA_BOUNDARY_FOR_FEDRAMP_HIGH"
    | "DATA_BOUNDARY_FOR_FEDRAMP_MODERATE"
    | "DATA_BOUNDARY_FOR_IL2"
    | "DATA_BOUNDARY_FOR_IL4"
    | "DATA_BOUNDARY_FOR_IL5"
    | "DATA_BOUNDARY_FOR_IRS_PUBLICATION_1075"
    | "DATA_BOUNDARY_FOR_ITAR"
    | "EU_DATA_BOUNDARY_AND_SUPPORT"
    | "ISRAEL_DATA_BOUNDARY_AND_SUPPORT"
    | "JAPAN_DATA_BOUNDARY"
    | "KSA_DATA_BOUNDARY_WITH_ACCESS_JUSTIFICATIONS"
    | "REGIONAL_DATA_BOUNDARY"
    | "US_DATA_BOUNDARY_AND_SUPPORT"
    | "US_DATA_BOUNDARY_FOR_HEALTHCARE_AND_LIFE_SCIENCES"
    | "US_DATA_BOUNDARY_FOR_HEALTHCARE_AND_LIFE_SCIENCES_WITH_SUPPORT"
    | "AU_REGIONS_AND_US_SUPPORT"
    | "CA_PROTECTED_B"
    | "CA_REGIONS_AND_SUPPORT"
    | "CANADA_CONTROLLED_GOODS"
    | "CJIS"
    | "EU_REGIONS_AND_SUPPORT"
    | "FEDRAMP_HIGH"
    | "FEDRAMP_MODERATE"
    | "HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS"
    | "HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_US_SUPPORT"
    | "HIPAA"
    | "HITRUST"
    | "IL2"
    | "IL4"
    | "IL5"
    | "IRS_1075"
    | "ISR_REGIONS"
    | "ISR_REGIONS_AND_SUPPORT"
    | "ITAR"
    | "JP_REGIONS_AND_SUPPORT"
    | "KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS"
    | "REGIONAL_CONTROLS"
    | "US_REGIONAL_ACCESS"
    | (string & {});
  /** Output only. Immutable. The Workload creation timestamp. */
  createTime?: string;
  /** Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload. */
  violationNotificationsEnabled?: boolean;
  /** Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only. */
  resources?: ReadonlyArray<GoogleCloudAssuredworkloadsV1WorkloadResourceInfo>;
  /** Optional. Options to be set for the given created workload. */
  workloadOptions?: GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions;
  /** Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. */
  enableSovereignControls?: boolean;
  /** Output only. Count of active Violations in the Workload. */
  complianceStatus?: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
  /** Optional. Permissions granted to the AW Partner SA account for the customer workload */
  partnerPermissions?: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;
  /** Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page. */
  saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
  /** Output only. Represents the KAJ enrollment state of the given workload. */
  kajEnrollmentState?:
    | "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
    | "KAJ_ENROLLMENT_STATE_PENDING"
    | "KAJ_ENROLLMENT_STATE_COMPLETE"
    | (string & {});
  /** Optional. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT/Telefonica partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC */
  partnerServicesBillingAccount?: string;
  /** Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload */
  displayName?: string;
  /** Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations. */
  etag?: string;
  /** Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment. */
  compliantButDisallowedServices?: ReadonlyArray<string>;
}

export const GoogleCloudAssuredworkloadsV1Workload: Schema.Schema<GoogleCloudAssuredworkloadsV1Workload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceMonitoringEnabled: Schema.optional(Schema.Boolean),
    resourceSettings: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1WorkloadResourceSettings),
    ),
    name: Schema.optional(Schema.String),
    billingAccount: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    kmsSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1WorkloadKMSSettings,
    ),
    ekmProvisioningResponse: Schema.optional(
      GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse,
    ),
    provisionedResourcesParent: Schema.optional(Schema.String),
    partner: Schema.optional(Schema.String),
    complianceRegime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    violationNotificationsEnabled: Schema.optional(Schema.Boolean),
    resources: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1WorkloadResourceInfo),
    ),
    workloadOptions: Schema.optional(
      GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions,
    ),
    enableSovereignControls: Schema.optional(Schema.Boolean),
    complianceStatus: Schema.optional(
      GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus,
    ),
    partnerPermissions: Schema.optional(
      GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions,
    ),
    saaEnrollmentResponse: Schema.optional(
      GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse,
    ),
    kajEnrollmentState: Schema.optional(Schema.String),
    partnerServicesBillingAccount: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    compliantButDisallowedServices: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1Workload" });

export interface GoogleCloudAssuredworkloadsV1ListWorkloadsResponse {
  /** List of Workloads under a given parent. */
  workloads?: ReadonlyArray<GoogleCloudAssuredworkloadsV1Workload>;
  /** The next page token. Return empty if reached the last page. */
  nextPageToken?: string;
}

export const GoogleCloudAssuredworkloadsV1ListWorkloadsResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1ListWorkloadsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workloads: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1Workload),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ListWorkloadsResponse",
  });

export interface GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata {
  /** Optional. The display name of the workload. */
  displayName?: string;
  /** Optional. The parent of the workload. */
  parent?: string;
  /** Optional. Compliance controls that should be applied to the resources managed by the workload. */
  complianceRegime?:
    | "COMPLIANCE_REGIME_UNSPECIFIED"
    | "ASSURED_WORKLOADS_FOR_PARTNERS"
    | "AUSTRALIA_DATA_BOUNDARY_AND_SUPPORT"
    | "CANADA_DATA_BOUNDARY_AND_SUPPORT"
    | "DATA_BOUNDARY_FOR_CANADA_CONTROLLED_GOODS"
    | "DATA_BOUNDARY_FOR_CANADA_PROTECTED_B"
    | "DATA_BOUNDARY_FOR_CJIS"
    | "DATA_BOUNDARY_FOR_FEDRAMP_HIGH"
    | "DATA_BOUNDARY_FOR_FEDRAMP_MODERATE"
    | "DATA_BOUNDARY_FOR_IL2"
    | "DATA_BOUNDARY_FOR_IL4"
    | "DATA_BOUNDARY_FOR_IL5"
    | "DATA_BOUNDARY_FOR_IRS_PUBLICATION_1075"
    | "DATA_BOUNDARY_FOR_ITAR"
    | "EU_DATA_BOUNDARY_AND_SUPPORT"
    | "ISRAEL_DATA_BOUNDARY_AND_SUPPORT"
    | "JAPAN_DATA_BOUNDARY"
    | "KSA_DATA_BOUNDARY_WITH_ACCESS_JUSTIFICATIONS"
    | "REGIONAL_DATA_BOUNDARY"
    | "US_DATA_BOUNDARY_AND_SUPPORT"
    | "US_DATA_BOUNDARY_FOR_HEALTHCARE_AND_LIFE_SCIENCES"
    | "US_DATA_BOUNDARY_FOR_HEALTHCARE_AND_LIFE_SCIENCES_WITH_SUPPORT"
    | "AU_REGIONS_AND_US_SUPPORT"
    | "CA_PROTECTED_B"
    | "CA_REGIONS_AND_SUPPORT"
    | "CANADA_CONTROLLED_GOODS"
    | "CJIS"
    | "EU_REGIONS_AND_SUPPORT"
    | "FEDRAMP_HIGH"
    | "FEDRAMP_MODERATE"
    | "HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS"
    | "HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_US_SUPPORT"
    | "HIPAA"
    | "HITRUST"
    | "IL2"
    | "IL4"
    | "IL5"
    | "IRS_1075"
    | "ISR_REGIONS"
    | "ISR_REGIONS_AND_SUPPORT"
    | "ITAR"
    | "JP_REGIONS_AND_SUPPORT"
    | "KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS"
    | "REGIONAL_CONTROLS"
    | "US_REGIONAL_ACCESS"
    | (string & {});
  /** Optional. Time when the operation was created. */
  createTime?: string;
}

export const GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata: Schema.Schema<GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    complianceRegime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata",
  });

export interface GoogleCloudAssuredworkloadsV1ArchiveResourceEventsRequest {
  /** Required. The region of the workload(s) whose events should be archived. This is used to filter workloads based on AssurantWorkloadData.region. */
  region?: string;
  /** Required. The maximum total number of events to move in this request. */
  maxEventsMove?: number;
  /** Required. The number of events to process in a single transaction batch. */
  batchSize?: number;
  /** Required. Only events with EventTime earlier than this cutoff will be archived. */
  eventCutoffTime?: string;
  /** Required. The organization ID for which to archive events. */
  organizationId?: string;
  /** Optional. Time to set as ArchiveTime in the archive table. If not provided, the current time is used. */
  archiveTime?: string;
}

export const GoogleCloudAssuredworkloadsV1ArchiveResourceEventsRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1ArchiveResourceEventsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
    maxEventsMove: Schema.optional(Schema.Number),
    batchSize: Schema.optional(Schema.Number),
    eventCutoffTime: Schema.optional(Schema.String),
    organizationId: Schema.optional(Schema.String),
    archiveTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ArchiveResourceEventsRequest",
  });

export interface GoogleLongrunningListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateRequest {
  /** The action to be performed on the update. */
  action?: "WORKLOAD_UPDATE_ACTION_UNSPECIFIED" | "APPLY" | (string & {});
}

export const GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateRequest",
  });

export interface GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse {
  /** The total number of events successfully moved to the archive table. */
  movedEventsCount?: number;
}

export const GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    movedEventsCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse",
  });

export interface GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse {
  /** The total number of events successfully moved to the original table. */
  movedEventsCount?: number;
}

export const GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    movedEventsCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest {
  /** Required. The type of restriction for using gcp products in the Workload environment. */
  restrictionType?:
    | "RESTRICTION_TYPE_UNSPECIFIED"
    | "ALLOW_ALL_GCP_RESOURCES"
    | "ALLOW_COMPLIANT_RESOURCES"
    | "APPEND_COMPLIANT_RESOURCES"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restrictionType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest",
  });

export interface GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateOperationMetadata {
  /** Optional. Output only. The time the operation was created. */
  createTime?: string;
  /** Required. The resource name of the update */
  updateName?: string;
  /** Optional. The time the operation was created. */
  action?: "WORKLOAD_UPDATE_ACTION_UNSPECIFIED" | "APPLY" | (string & {});
}

export const GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateOperationMetadata: Schema.Schema<GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateName: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateOperationMetadata",
  });

export interface GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse {}

export const GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse",
  });

export interface GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest {
  /** Optional. The etag of the workload. If this is provided, it must match the server's etag. */
  etag?: string;
  /** Required. The partner permissions to be updated. */
  partnerPermissions?: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;
  /** Required. The list of fields to be updated. E.g. update_mask { paths: "partner_permissions.data_logs_viewer"} */
  updateMask?: string;
}

export const GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    partnerPermissions: Schema.optional(
      GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions,
    ),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest",
  });

export interface GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsRequest {
  /** Required. The organization ID for which to revert events. */
  organizationId?: string;
  /** Required. Only events within this time range will be reverted. This helps prevent reverting everything when something goes wrong. */
  archiveStartTime?: string;
  /** Required. Only events within this time range will be reverted. This helps prevent reverting everything when something goes wrong. */
  archiveEndTime?: string;
  /** Required. The region of the workload(s) whose events should be reverted. This is used to filter workloads based on AssurantWorkloadData.region. */
  region?: string;
  /** Required. The maximum total number of events to move in this request. */
  maxEventsMove?: number;
  /** Required. The number of events to process in a single transaction batch. */
  batchSize?: number;
}

export const GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.optional(Schema.String),
    archiveStartTime: Schema.optional(Schema.String),
    archiveEndTime: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    maxEventsMove: Schema.optional(Schema.Number),
    batchSize: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsRequest",
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

export interface AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsRequest {
  /** Optional. The page token from the previous response. It needs to be passed in the second and following requests. */
  pageToken?: string;
  /** Optional. List of asset types to be analyzed, including and under the source resource. If empty, all assets are analyzed. The complete list of asset types is available [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). */
  assetTypes?: string[];
  /** The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID. */
  project?: string;
  /** Optional. Page size. If a value is not specified, the default value of 10 is used. The maximum value is 50. */
  pageSize?: number;
  /** Required. The resource ID of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2" */
  target: string;
}

export const AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    assetTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("assetTypes"),
    ),
    project: Schema.optional(Schema.String).pipe(T.HttpQuery("project")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    target: Schema.String.pipe(T.HttpPath("target")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+target}:analyzeWorkloadMove" }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsRequest>;

export type AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse;
export const AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse;

export type AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. The analysis is best effort and is not guaranteed to be exhaustive. */
export const analyzeWorkloadMoveOrganizationsLocationsWorkloads: API.PaginatedOperationMethod<
  AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsRequest,
  AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsResponse,
  AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsRequest,
  output: AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsLocationsWorkloadsRequest {
  /** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
  name: string;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1Workload;
}

export const PatchOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudAssuredworkloadsV1Workload).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsWorkloadsRequest>;

export type PatchOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1Workload;
export const PatchOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1Workload;

export type PatchOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress. */
export const patchOrganizationsLocationsWorkloads: API.OperationMethod<
  PatchOrganizationsLocationsWorkloadsRequest,
  PatchOrganizationsLocationsWorkloadsResponse,
  PatchOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsWorkloadsRequest,
  output: PatchOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsWorkloadsRequest {
  /** Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1". */
  name: string;
}

export const GetOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsWorkloadsRequest>;

export type GetOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1Workload;
export const GetOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1Workload;

export type GetOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets Assured Workload associated with a CRM Node */
export const getOrganizationsLocationsWorkloads: API.OperationMethod<
  GetOrganizationsLocationsWorkloadsRequest,
  GetOrganizationsLocationsWorkloadsResponse,
  GetOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsWorkloadsRequest,
  output: GetOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateOrganizationsLocationsWorkloadsRequest {
  /** Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`. */
  parent: string;
  /** Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value. */
  externalId?: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1Workload;
}

export const CreateOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    externalId: Schema.optional(Schema.String).pipe(T.HttpQuery("externalId")),
    body: Schema.optional(GoogleCloudAssuredworkloadsV1Workload).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/workloads", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsWorkloadsRequest>;

export type CreateOrganizationsLocationsWorkloadsResponse =
  GoogleLongrunningOperation;
export const CreateOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates Assured Workload. */
export const createOrganizationsLocationsWorkloads: API.OperationMethod<
  CreateOrganizationsLocationsWorkloadsRequest,
  CreateOrganizationsLocationsWorkloadsResponse,
  CreateOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsWorkloadsRequest,
  output: CreateOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MutatePartnerPermissionsOrganizationsLocationsWorkloadsRequest {
  /** Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest;
}

export const MutatePartnerPermissionsOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "v1/{+name}:mutatePartnerPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MutatePartnerPermissionsOrganizationsLocationsWorkloadsRequest>;

export type MutatePartnerPermissionsOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1Workload;
export const MutatePartnerPermissionsOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1Workload;

export type MutatePartnerPermissionsOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress. */
export const mutatePartnerPermissionsOrganizationsLocationsWorkloads: API.OperationMethod<
  MutatePartnerPermissionsOrganizationsLocationsWorkloadsRequest,
  MutatePartnerPermissionsOrganizationsLocationsWorkloadsResponse,
  MutatePartnerPermissionsOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MutatePartnerPermissionsOrganizationsLocationsWorkloadsRequest,
  output: MutatePartnerPermissionsOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EnableComplianceUpdatesOrganizationsLocationsWorkloadsRequest {
  /** Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} */
  name: string;
}

export const EnableComplianceUpdatesOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "v1/{+name}:enableComplianceUpdates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnableComplianceUpdatesOrganizationsLocationsWorkloadsRequest>;

export type EnableComplianceUpdatesOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse;
export const EnableComplianceUpdatesOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse;

export type EnableComplianceUpdatesOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. It sets up an Assured Workloads Service Agent, having permissions to read compliance controls (for example: Org Policies) applied on the workload. The caller must have `resourcemanager.folders.getIamPolicy` and `resourcemanager.folders.setIamPolicy` permissions on the assured workload folder. */
export const enableComplianceUpdatesOrganizationsLocationsWorkloads: API.OperationMethod<
  EnableComplianceUpdatesOrganizationsLocationsWorkloadsRequest,
  EnableComplianceUpdatesOrganizationsLocationsWorkloadsResponse,
  EnableComplianceUpdatesOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableComplianceUpdatesOrganizationsLocationsWorkloadsRequest,
  output: EnableComplianceUpdatesOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EnableResourceMonitoringOrganizationsLocationsWorkloadsRequest {
  /** Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} */
  name: string;
}

export const EnableResourceMonitoringOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:enableResourceMonitoring",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnableResourceMonitoringOrganizationsLocationsWorkloadsRequest>;

export type EnableResourceMonitoringOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse;
export const EnableResourceMonitoringOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse;

export type EnableResourceMonitoringOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enable resource violation monitoring for a workload. */
export const enableResourceMonitoringOrganizationsLocationsWorkloads: API.OperationMethod<
  EnableResourceMonitoringOrganizationsLocationsWorkloadsRequest,
  EnableResourceMonitoringOrganizationsLocationsWorkloadsResponse,
  EnableResourceMonitoringOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableResourceMonitoringOrganizationsLocationsWorkloadsRequest,
  output: EnableResourceMonitoringOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestrictAllowedResourcesOrganizationsLocationsWorkloadsRequest {
  /** Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1". */
  name: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest;
}

export const RestrictAllowedResourcesOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:restrictAllowedResources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestrictAllowedResourcesOrganizationsLocationsWorkloadsRequest>;

export type RestrictAllowedResourcesOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse;
export const RestrictAllowedResourcesOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse;

export type RestrictAllowedResourcesOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality. */
export const restrictAllowedResourcesOrganizationsLocationsWorkloads: API.OperationMethod<
  RestrictAllowedResourcesOrganizationsLocationsWorkloadsRequest,
  RestrictAllowedResourcesOrganizationsLocationsWorkloadsResponse,
  RestrictAllowedResourcesOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestrictAllowedResourcesOrganizationsLocationsWorkloadsRequest,
  output: RestrictAllowedResourcesOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsLocationsWorkloadsRequest {
  /** Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} */
  name: string;
  /** Optional. The etag of the workload. If this is provided, it must match the server's etag. */
  etag?: string;
}

export const DeleteOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsWorkloadsRequest>;

export type DeleteOrganizationsLocationsWorkloadsResponse = GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies. */
export const deleteOrganizationsLocationsWorkloads: API.OperationMethod<
  DeleteOrganizationsLocationsWorkloadsRequest,
  DeleteOrganizationsLocationsWorkloadsResponse,
  DeleteOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsWorkloadsRequest,
  output: DeleteOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsWorkloadsRequest {
  /** Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`. */
  parent: string;
  /** Page size. */
  pageSize?: number;
  /** Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests. */
  pageToken?: string;
  /** A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported. */
  filter?: string;
}

export const ListOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workloads" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsWorkloadsRequest>;

export type ListOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1ListWorkloadsResponse;
export const ListOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1ListWorkloadsResponse;

export type ListOrganizationsLocationsWorkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Assured Workloads under a CRM Node. */
export const listOrganizationsLocationsWorkloads: API.PaginatedOperationMethod<
  ListOrganizationsLocationsWorkloadsRequest,
  ListOrganizationsLocationsWorkloadsResponse,
  ListOrganizationsLocationsWorkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsWorkloadsRequest,
  output: ListOrganizationsLocationsWorkloadsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsLocationsWorkloadsUpdatesRequest {
  /** Required. organizations/{org_id}/locations/{location_id}/workloads/{workload_id} */
  parent: string;
  /** Page size. The default value is 20 and the max allowed value is 100. */
  pageSize?: number;
  /** Page token returned from previous request. */
  pageToken?: string;
}

export const ListOrganizationsLocationsWorkloadsUpdatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/updates" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsWorkloadsUpdatesRequest>;

export type ListOrganizationsLocationsWorkloadsUpdatesResponse =
  GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse;
export const ListOrganizationsLocationsWorkloadsUpdatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse;

export type ListOrganizationsLocationsWorkloadsUpdatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** This endpoint lists all updates for the given workload. */
export const listOrganizationsLocationsWorkloadsUpdates: API.PaginatedOperationMethod<
  ListOrganizationsLocationsWorkloadsUpdatesRequest,
  ListOrganizationsLocationsWorkloadsUpdatesResponse,
  ListOrganizationsLocationsWorkloadsUpdatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsWorkloadsUpdatesRequest,
  output: ListOrganizationsLocationsWorkloadsUpdatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ApplyOrganizationsLocationsWorkloadsUpdatesRequest {
  /** Required. The resource name of the update. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}/updates/{update_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateRequest;
}

export const ApplyOrganizationsLocationsWorkloadsUpdatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:apply", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ApplyOrganizationsLocationsWorkloadsUpdatesRequest>;

export type ApplyOrganizationsLocationsWorkloadsUpdatesResponse =
  GoogleLongrunningOperation;
export const ApplyOrganizationsLocationsWorkloadsUpdatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ApplyOrganizationsLocationsWorkloadsUpdatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** This endpoint creates a new operation to apply the given update. */
export const applyOrganizationsLocationsWorkloadsUpdates: API.OperationMethod<
  ApplyOrganizationsLocationsWorkloadsUpdatesRequest,
  ApplyOrganizationsLocationsWorkloadsUpdatesResponse,
  ApplyOrganizationsLocationsWorkloadsUpdatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApplyOrganizationsLocationsWorkloadsUpdatesRequest,
  output: ApplyOrganizationsLocationsWorkloadsUpdatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsWorkloadsViolationsRequest {
  /** Optional. Page size. */
  pageSize?: number;
  /** Optional. Page token returned from previous request. */
  pageToken?: string;
  /** Optional. A custom filter for filtering by the Violations properties. */
  filter?: string;
  /** The end of the time window. */
  "interval.endTime"?: string;
  /** Required. The Workload name. Format `organizations/{org_id}/locations/{location}/workloads/{workload}`. */
  parent: string;
  /** The start of the time window. */
  "interval.startTime"?: string;
}

export const ListOrganizationsLocationsWorkloadsViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    "interval.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.endTime"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "interval.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.startTime"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/violations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsWorkloadsViolationsRequest>;

export type ListOrganizationsLocationsWorkloadsViolationsResponse =
  GoogleCloudAssuredworkloadsV1ListViolationsResponse;
export const ListOrganizationsLocationsWorkloadsViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1ListViolationsResponse;

export type ListOrganizationsLocationsWorkloadsViolationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-` */
export const listOrganizationsLocationsWorkloadsViolations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsWorkloadsViolationsRequest,
  ListOrganizationsLocationsWorkloadsViolationsResponse,
  ListOrganizationsLocationsWorkloadsViolationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsWorkloadsViolationsRequest,
  output: ListOrganizationsLocationsWorkloadsViolationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AcknowledgeOrganizationsLocationsWorkloadsViolationsRequest {
  /** Required. The resource name of the Violation to acknowledge. Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation} */
  name: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest;
}

export const AcknowledgeOrganizationsLocationsWorkloadsViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:acknowledge", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AcknowledgeOrganizationsLocationsWorkloadsViolationsRequest>;

export type AcknowledgeOrganizationsLocationsWorkloadsViolationsResponse =
  GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse;
export const AcknowledgeOrganizationsLocationsWorkloadsViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse;

export type AcknowledgeOrganizationsLocationsWorkloadsViolationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted. */
export const acknowledgeOrganizationsLocationsWorkloadsViolations: API.OperationMethod<
  AcknowledgeOrganizationsLocationsWorkloadsViolationsRequest,
  AcknowledgeOrganizationsLocationsWorkloadsViolationsResponse,
  AcknowledgeOrganizationsLocationsWorkloadsViolationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AcknowledgeOrganizationsLocationsWorkloadsViolationsRequest,
  output: AcknowledgeOrganizationsLocationsWorkloadsViolationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsWorkloadsViolationsRequest {
  /** Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation} */
  name: string;
}

export const GetOrganizationsLocationsWorkloadsViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsWorkloadsViolationsRequest>;

export type GetOrganizationsLocationsWorkloadsViolationsResponse =
  GoogleCloudAssuredworkloadsV1Violation;
export const GetOrganizationsLocationsWorkloadsViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1Violation;

export type GetOrganizationsLocationsWorkloadsViolationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves Assured Workload Violation based on ID. */
export const getOrganizationsLocationsWorkloadsViolations: API.OperationMethod<
  GetOrganizationsLocationsWorkloadsViolationsRequest,
  GetOrganizationsLocationsWorkloadsViolationsResponse,
  GetOrganizationsLocationsWorkloadsViolationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsWorkloadsViolationsRequest,
  output: GetOrganizationsLocationsWorkloadsViolationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsOperationsRequest>;

export type ListOrganizationsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsLocationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsOperationsRequest,
  ListOrganizationsLocationsOperationsResponse,
  ListOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsOperationsRequest,
  output: ListOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsOperationsRequest>;

export type GetOrganizationsLocationsOperationsResponse =
  GoogleLongrunningOperation;
export const GetOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsOperations: API.OperationMethod<
  GetOrganizationsLocationsOperationsRequest,
  GetOrganizationsLocationsOperationsResponse,
  GetOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsOperationsRequest,
  output: GetOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ArchiveResourceEventsAssuredworkloadsRequest {
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1ArchiveResourceEventsRequest;
}

export const ArchiveResourceEventsAssuredworkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1ArchiveResourceEventsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/assuredworkloads:archiveResourceEvents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ArchiveResourceEventsAssuredworkloadsRequest>;

export type ArchiveResourceEventsAssuredworkloadsResponse =
  GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse;
export const ArchiveResourceEventsAssuredworkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse;

export type ArchiveResourceEventsAssuredworkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds orphan ResourceEvents matching the criteria and moves them to the ArchivedResourceEvents table. */
export const archiveResourceEventsAssuredworkloads: API.OperationMethod<
  ArchiveResourceEventsAssuredworkloadsRequest,
  ArchiveResourceEventsAssuredworkloadsResponse,
  ArchiveResourceEventsAssuredworkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ArchiveResourceEventsAssuredworkloadsRequest,
  output: ArchiveResourceEventsAssuredworkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertArchivedResourceEventsAssuredworkloadsRequest {
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsRequest;
}

export const RevertArchivedResourceEventsAssuredworkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/assuredworkloads:revertArchivedResourceEvents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertArchivedResourceEventsAssuredworkloadsRequest>;

export type RevertArchivedResourceEventsAssuredworkloadsResponse =
  GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse;
export const RevertArchivedResourceEventsAssuredworkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse;

export type RevertArchivedResourceEventsAssuredworkloadsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds matching ArchivedResourceEvents and moves them back to the ResourceEvents table. */
export const revertArchivedResourceEventsAssuredworkloads: API.OperationMethod<
  RevertArchivedResourceEventsAssuredworkloadsRequest,
  RevertArchivedResourceEventsAssuredworkloadsResponse,
  RevertArchivedResourceEventsAssuredworkloadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertArchivedResourceEventsAssuredworkloadsRequest,
  output: RevertArchivedResourceEventsAssuredworkloadsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
