// ==========================================================================
// Assured Workloads API (assuredworkloads v1beta1)
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
  version: "v1beta1",
  rootUrl: "https://assuredworkloads.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudAssuredworkloadsV1beta1MoveImpact {
  /** Explanation of the impact. */
  detail?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1MoveImpact: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1MoveImpact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1beta1MoveImpact" });

export interface GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult {
  /** List of warnings. These are risks that may or may not result in compliance violations. */
  warnings?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1MoveImpact>;
  /** List of blockers. If not resolved, these will result in compliance violations in the target. */
  blockers?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1MoveImpact>;
}

export const GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    warnings: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1MoveImpact),
    ),
    blockers: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1MoveImpact),
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult",
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

export interface GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup {
  /** Result of a successful analysis. */
  analysisResult?: GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult;
  /** Error details for a failed analysis. */
  error?: GoogleRpcStatus;
  /** Name of the analysis group. */
  displayName?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analysisResult: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult,
    ),
    error: Schema.optional(GoogleRpcStatus),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup",
  });

export interface GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse {}

export const GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings {
  /** Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google. */
  resourceId?: string;
  /** User-assigned resource display name. If not empty it will be used to create a resource with the specified name. */
  displayName?: string;
  /** Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) */
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "CONSUMER_PROJECT"
    | "CONSUMER_FOLDER"
    | "ENCRYPTION_KEYS_PROJECT"
    | "KEYRING"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings",
  });

export interface GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata {
  /** Optional. Time when the operation was created. */
  createTime?: string;
  /** Optional. The parent of the workload. */
  parent?: string;
  /** Optional. The display name of the workload. */
  displayName?: string;
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
  /** Optional. Resource properties in the input that are used for creating/customizing workload resources. */
  resourceSettings?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings>;
}

export const GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    complianceRegime: Schema.optional(Schema.String),
    resourceSettings: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings),
    ),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadWorkloadOptions {
  /** Optional. Specifies type of KAJ Enrollment if provided. */
  kajEnrollmentType?:
    | "KAJ_ENROLLMENT_TYPE_UNSPECIFIED"
    | "KEY_ACCESS_TRANSPARENCY_OFF"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadWorkloadOptions: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadWorkloadOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kajEnrollmentType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadWorkloadOptions",
  });

export interface GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest {
  /** Required. The type of restriction for using gcp products in the Workload environment. */
  restrictionType?:
    | "RESTRICTION_TYPE_UNSPECIFIED"
    | "ALLOW_ALL_GCP_RESOURCES"
    | "ALLOW_COMPLIANT_RESOURCES"
    | "APPEND_COMPLIANT_RESOURCES"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restrictionType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud {
  /** Steps to resolve violation via gcloud cli */
  steps?: ReadonlyArray<string>;
  /** Additional urls for more information about steps */
  additionalLinks?: ReadonlyArray<string>;
  /** Gcloud command to resolve violation */
  gcloudCommands?: ReadonlyArray<string>;
}

export const GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    steps: Schema.optional(Schema.Array(Schema.String)),
    additionalLinks: Schema.optional(Schema.Array(Schema.String)),
    gcloudCommands: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole {
  /** Link to console page where violations can be resolved */
  consoleUris?: ReadonlyArray<string>;
  /** Steps to resolve violation via cloud console */
  steps?: ReadonlyArray<string>;
  /** Additional urls for more information about steps */
  additionalLinks?: ReadonlyArray<string>;
}

export const GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consoleUris: Schema.optional(Schema.Array(Schema.String)),
    steps: Schema.optional(Schema.Array(Schema.String)),
    additionalLinks: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions {
  /** Remediation instructions to resolve violation via gcloud cli */
  gcloudInstructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud;
  /** Remediation instructions to resolve violation via cloud console */
  consoleInstructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole;
}

export const GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcloudInstructions: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud,
    ),
    consoleInstructions: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole,
    ),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ViolationRemediation {
  /** Required. Remediation instructions to resolve violations */
  instructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions;
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

export const GoogleCloudAssuredworkloadsV1beta1ViolationRemediation: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ViolationRemediation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instructions: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions,
    ),
    compliantValues: Schema.optional(Schema.Array(Schema.String)),
    remediationType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1ViolationRemediation",
  });

export interface GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsResponse {
  /** The total number of events successfully moved to the original table. */
  movedEventsCount?: number;
}

export const GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    movedEventsCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsRequest {
  /** Required. The number of events to process in a single transaction batch. */
  batchSize?: number;
  /** Required. Only events with EventTime earlier than this cutoff will be archived. */
  eventCutoffTime?: string;
  /** Optional. Time to set as ArchiveTime in the archive table. If not provided, the current time is used. */
  archiveTime?: string;
  /** Required. The organization ID for which to archive events. */
  organizationId?: string;
  /** Required. The region of the workload(s) whose events should be archived. This is used to filter workloads based on AssurantWorkloadData.region. */
  region?: string;
  /** Required. The maximum total number of events to move in this request. */
  maxEventsMove?: number;
}

export const GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchSize: Schema.optional(Schema.Number),
    eventCutoffTime: Schema.optional(Schema.String),
    archiveTime: Schema.optional(Schema.String),
    organizationId: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    maxEventsMove: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsRequest",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings {
  /** Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary. */
  nextRotationTime?: string;
  /** Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. */
  rotationPeriod?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextRotationTime: Schema.optional(Schema.String),
    rotationPeriod: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings {
  /** Input only. Immutable. Settings used to create a CMEK crypto key. */
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings,
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings {
  /** Input only. Immutable. Settings used to create a CMEK crypto key. */
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings,
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse {
  /** Indicates Ekm provisioning error if any. */
  ekmProvisioningErrorDomain?:
    | "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED"
    | "UNSPECIFIED_ERROR"
    | "GOOGLE_SERVER_ERROR"
    | "EXTERNAL_USER_ERROR"
    | "EXTERNAL_PARTNER_ERROR"
    | "TIMEOUT_ERROR"
    | (string & {});
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
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ekmProvisioningErrorDomain: Schema.optional(Schema.String),
    ekmProvisioningState: Schema.optional(Schema.String),
    ekmProvisioningErrorMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus {
  /** Number of current resource violations which are acknowledged. */
  activeResourceViolationCount?: number;
  /** Number of current resource violations which are not acknowledged. */
  acknowledgedResourceViolationCount?: number;
  /** Number of current orgPolicy violations which are not acknowledged. */
  activeViolationCount?: number;
  /** Number of current orgPolicy violations which are acknowledged. */
  acknowledgedViolationCount?: number;
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeResourceViolationCount: Schema.optional(Schema.Number),
    acknowledgedResourceViolationCount: Schema.optional(Schema.Number),
    activeViolationCount: Schema.optional(Schema.Number),
    acknowledgedViolationCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus",
  });

export interface GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRuleStringValues {
  /** List of values denied at this resource. */
  deniedValues?: ReadonlyArray<string>;
  /** List of values allowed at this resource. */
  allowedValues?: ReadonlyArray<string>;
}

export const GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRuleStringValues: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRuleStringValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deniedValues: Schema.optional(Schema.Array(Schema.String)),
    allowedValues: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRuleStringValues",
  });

export interface GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRule {
  /** ListPolicy only when all values are allowed. */
  allowAll?: boolean;
  /** ListPolicy only when custom values are specified. */
  values?: GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRuleStringValues;
  /** ListPolicy only when all values are denied. */
  denyAll?: boolean;
  /** BooleanPolicy only. */
  enforce?: boolean;
}

export const GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRule: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowAll: Schema.optional(Schema.Boolean),
    values: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRuleStringValues,
    ),
    denyAll: Schema.optional(Schema.Boolean),
    enforce: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRule",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsResponse {
  /** The total number of events successfully moved to the archive table. */
  movedEventsCount?: number;
}

export const GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    movedEventsCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext {
  /** Business justification provided towards the acknowledgement of the violation. */
  comment?: string;
  /** Name of the user (or service account) who acknowledged the violation. */
  userName?: string;
  /** Timestamp when the violation was acknowledged. */
  acknowledgementTime?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comment: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    acknowledgementTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateOperationMetadata {
  /** Required. The resource name of the update */
  updateName?: string;
  /** Optional. The time the operation was created. */
  action?: "WORKLOAD_UPDATE_ACTION_UNSPECIFIED" | "APPLY" | (string & {});
  /** Optional. Output only. The time the operation was created. */
  createTime?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateOperationMetadata: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateName: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateOperationMetadata",
  });

export interface GoogleCloudAssuredworkloadsV1beta1OrgPolicy {
  /** The constraint name of the OrgPolicy. e.g. "constraints/gcp.resourceLocations". */
  constraint?: string;
  /** Ignores policies set above this resource and restores to the `constraint_default` value. `reset` can only be true when `rules` is empty and `inherit` is false. */
  reset?: boolean;
  /** Resource that the OrgPolicy attaches to. Format: folders/123" projects/123". */
  resource?: string;
  /** The rule of the OrgPolicy. */
  rule?: GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRule;
  /** If `inherit` is true, policy rules of the lowest ancestor in the resource hierarchy chain are inherited. If it is false, policy rules are not inherited. */
  inherit?: boolean;
}

export const GoogleCloudAssuredworkloadsV1beta1OrgPolicy: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1OrgPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    constraint: Schema.optional(Schema.String),
    reset: Schema.optional(Schema.Boolean),
    resource: Schema.optional(Schema.String),
    rule: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1OrgPolicyPolicyRule,
    ),
    inherit: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1beta1OrgPolicy" });

export interface GoogleCloudAssuredworkloadsV1beta1OrgPolicyUpdate {
  /** The suggested org policy that replaces the applied policy. */
  suggestedPolicy?: GoogleCloudAssuredworkloadsV1beta1OrgPolicy;
  /** The org policy currently applied on the assured workload resource. */
  appliedPolicy?: GoogleCloudAssuredworkloadsV1beta1OrgPolicy;
}

export const GoogleCloudAssuredworkloadsV1beta1OrgPolicyUpdate: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1OrgPolicyUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestedPolicy: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1OrgPolicy,
    ),
    appliedPolicy: Schema.optional(GoogleCloudAssuredworkloadsV1beta1OrgPolicy),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1OrgPolicyUpdate",
  });

export interface GoogleCloudAssuredworkloadsV1beta1UpdateDetails {
  /** Update to one org policy, e.g. gcp.resourceLocation. */
  orgPolicyUpdate?: GoogleCloudAssuredworkloadsV1beta1OrgPolicyUpdate;
}

export const GoogleCloudAssuredworkloadsV1beta1UpdateDetails: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1UpdateDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orgPolicyUpdate: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1OrgPolicyUpdate,
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1UpdateDetails",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadUpdate {
  /** The details of the update. */
  details?: GoogleCloudAssuredworkloadsV1beta1UpdateDetails;
  /** Output only. The state of the update. */
  state?:
    | "STATE_UNSPECIFIED"
    | "AVAILABLE"
    | "APPLIED"
    | "WITHDRAWN"
    | (string & {});
  /** The time the update was last updated. */
  updateTime?: string;
  /** Output only. Immutable. Identifier. Resource name of the WorkloadUpdate. Format: organizations/{organization}/locations/{location}/workloads/{workload}/updates/{update} */
  name?: string;
  /** The time the update was created. */
  createTime?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadUpdate: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(GoogleCloudAssuredworkloadsV1beta1UpdateDetails),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadUpdate",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ListWorkloadUpdatesResponse {
  /** The list of workload updates for a given workload. */
  workloadUpdates?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1WorkloadUpdate>;
  /** The next page token. Return empty if reached the last page. */
  nextPageToken?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1ListWorkloadUpdatesResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ListWorkloadUpdatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workloadUpdates: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1WorkloadUpdate),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1ListWorkloadUpdatesResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest {
  /** Required. Business justification explaining the need for violation acknowledgement */
  comment?: string;
  /** Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} */
  nonCompliantOrgPolicy?: string;
  /** Optional. Acknowledge type of specified violation. */
  acknowledgeType?:
    | "ACKNOWLEDGE_TYPE_UNSPECIFIED"
    | "SINGLE_VIOLATION"
    | "EXISTING_CHILD_RESOURCE_VIOLATIONS"
    | (string & {});
}

export const GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comment: Schema.optional(Schema.String),
    nonCompliantOrgPolicy: Schema.optional(Schema.String),
    acknowledgeType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest",
  });

export interface GoogleCloudAssuredworkloadsV1beta1Violation {
  /** Optional. Output only. Parent project number where resource is present. Empty for org-policy violations. */
  parentProjectNumber?: string;
  /** Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder} */
  auditLogLink?: string;
  /** Output only. The last time when the Violation record was updated. */
  updateTime?: string;
  /** Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty. */
  resolveTime?: string;
  /** Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc. */
  category?: string;
  /** Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value. */
  description?: string;
  /** Optional. Output only. Type of the resource like compute.googleapis.com/Disk, etc. Empty for org-policy violations. */
  resourceType?: string;
  /** Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} */
  nonCompliantOrgPolicy?: string;
  /** Optional. Output only. Name of the resource like //storage.googleapis.com/myprojectxyz-testbucket. Empty for org-policy violations. */
  resourceName?: string;
  /** Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id} */
  name?: string;
  /** Output only. Compliance violation remediation */
  remediation?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediation;
  /** Optional. Output only. Violation Id of the org-policy violation due to which the resource violation is caused. Empty for org-policy violations. */
  associatedOrgPolicyViolationId?: string;
  /** Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization} */
  exceptionAuditLogLink?: string;
  /** Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation. */
  orgPolicyConstraint?: string;
  /** A boolean that indicates if the violation is acknowledged */
  acknowledged?: boolean;
  /** Output only. Type of the violation */
  violationType?:
    | "VIOLATION_TYPE_UNSPECIFIED"
    | "ORG_POLICY"
    | "RESOURCE"
    | (string & {});
  /** Output only. Time of the event which triggered the Violation. */
  beginTime?: string;
  /** Output only. State of the violation */
  state?:
    | "STATE_UNSPECIFIED"
    | "RESOLVED"
    | "UNRESOLVED"
    | "EXCEPTION"
    | (string & {});
  /** Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false. */
  acknowledgementTime?: string;
  /** Output only. List of all the exception detail added for the violation. */
  exceptionContexts?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext>;
}

export const GoogleCloudAssuredworkloadsV1beta1Violation: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1Violation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentProjectNumber: Schema.optional(Schema.String),
    auditLogLink: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    resolveTime: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    nonCompliantOrgPolicy: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    remediation: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1ViolationRemediation,
    ),
    associatedOrgPolicyViolationId: Schema.optional(Schema.String),
    exceptionAuditLogLink: Schema.optional(Schema.String),
    orgPolicyConstraint: Schema.optional(Schema.String),
    acknowledged: Schema.optional(Schema.Boolean),
    violationType: Schema.optional(Schema.String),
    beginTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    acknowledgementTime: Schema.optional(Schema.String),
    exceptionContexts: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext),
    ),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1beta1Violation" });

export interface GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse {
  /** List of Violations under a Workload. */
  violations?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1Violation>;
  /** The next page token. Returns empty if reached the last page. */
  nextPageToken?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    violations: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1Violation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1EnableComplianceUpdatesResponse {}

export const GoogleCloudAssuredworkloadsV1beta1EnableComplianceUpdatesResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1EnableComplianceUpdatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1EnableComplianceUpdatesResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions {
  /** Optional. Allow partner to view access approval logs. */
  serviceAccessApprover?: boolean;
  /** Optional. Allow partner to view violation alerts. */
  assuredWorkloadsMonitoring?: boolean;
  /** Optional. Allow the partner to view inspectability logs and monitoring violations. */
  dataLogsViewer?: boolean;
  /** Optional. Allow partner to view support case details for an AXT log */
  accessTransparencyLogsSupportCaseViewer?: boolean;
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccessApprover: Schema.optional(Schema.Boolean),
    assuredWorkloadsMonitoring: Schema.optional(Schema.Boolean),
    dataLogsViewer: Schema.optional(Schema.Boolean),
    accessTransparencyLogsSupportCaseViewer: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions",
  });

export interface GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse {}

export const GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis {
  /** The full resource name of the asset being analyzed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 */
  asset?: string;
  /** List of eligible analyses performed for the asset. */
  analysisGroups?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup>;
  /** Type of the asset being analyzed. Possible values will be among the ones listed [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). */
  assetType?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asset: Schema.optional(Schema.String),
    analysisGroups: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup),
    ),
    assetType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse {
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

export const GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setupErrors: Schema.optional(Schema.Array(Schema.String)),
    setupStatus: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo {
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

export const GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateRequest {
  /** The action to be performed on the update. */
  action?: "WORKLOAD_UPDATE_ACTION_UNSPECIFIED" | "APPLY" | (string & {});
}

export const GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateRequest",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings {
  /** Input only. Immutable. Settings used to create a CMEK crypto key. */
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings,
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings",
  });

export interface GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings {
  /** Input only. Immutable. Settings used to create a CMEK crypto key. */
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
}

export const GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings,
    ),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings",
  });

export interface GoogleCloudAssuredworkloadsV1beta1Workload {
  /** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
  name?: string;
  /** Output only. Represents the Ekm Provisioning State of the given workload. */
  ekmProvisioningResponse?: GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse;
  /** Output only. Indicates whether resource monitoring is enabled for workload or not. It is true when Resource feed is subscribed to AWM topic and AWM Service Agent Role is binded to AW Service Account for resource Assured workload. */
  resourceMonitoringEnabled?: boolean;
  /** Optional. Options to be set for the given created workload. */
  workloadOptions?: GoogleCloudAssuredworkloadsV1beta1WorkloadWorkloadOptions;
  /** Input only. Immutable. Settings specific to resources needed for FedRAMP High. */
  fedrampHighSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;
  /** Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id} */
  provisionedResourcesParent?: string;
  /** Input only. Immutable. Settings specific to resources needed for IL4. */
  il4Settings?: GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings;
  /** Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations. */
  etag?: string;
  /** Output only. Count of active Violations in the Workload. */
  complianceStatus?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus;
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
  /** Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field. */
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  /** Output only. The number of updates available for the workload. */
  availableUpdates?: number;
  /** Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload. */
  violationNotificationsEnabled?: boolean;
  /** Optional. Labels applied to the workload. */
  labels?: Record<string, string>;
  /** Optional. Permissions granted to the AW Partner SA account for the customer workload */
  partnerPermissions?: GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions;
  /** Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate. */
  fedrampModerateSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;
  /** Optional. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT/Telefonica partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC */
  partnerServicesBillingAccount?: string;
  /** Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional. */
  resourceSettings?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings>;
  /** Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page. */
  saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse;
  /** Output only. Indicates whether the compliance updates feature is enabled for a workload. The compliance updates feature can be enabled via the EnableComplianceUpdates endpoint. */
  complianceUpdatesEnabled?: boolean;
  /** Output only. Represents the KAJ enrollment state of the given workload. */
  kajEnrollmentState?:
    | "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
    | "KAJ_ENROLLMENT_STATE_PENDING"
    | "KAJ_ENROLLMENT_STATE_COMPLETE"
    | (string & {});
  /** Input only. Immutable. Settings specific to resources needed for CJIS. */
  cjisSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings;
  /** Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only. */
  resources?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo>;
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
  /** Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload */
  displayName?: string;
  /** Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment. */
  compliantButDisallowedServices?: ReadonlyArray<string>;
  /** Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. */
  enableSovereignControls?: boolean;
  /** Output only. Immutable. The Workload creation timestamp. */
  createTime?: string;
  /** Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`. */
  billingAccount?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1Workload: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1Workload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ekmProvisioningResponse: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse,
    ),
    resourceMonitoringEnabled: Schema.optional(Schema.Boolean),
    workloadOptions: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadWorkloadOptions,
    ),
    fedrampHighSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings,
    ),
    provisionedResourcesParent: Schema.optional(Schema.String),
    il4Settings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings,
    ),
    etag: Schema.optional(Schema.String),
    complianceStatus: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus,
    ),
    partner: Schema.optional(Schema.String),
    kmsSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings,
    ),
    availableUpdates: Schema.optional(Schema.Number),
    violationNotificationsEnabled: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    partnerPermissions: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions,
    ),
    fedrampModerateSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings,
    ),
    partnerServicesBillingAccount: Schema.optional(Schema.String),
    resourceSettings: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings),
    ),
    saaEnrollmentResponse: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse,
    ),
    complianceUpdatesEnabled: Schema.optional(Schema.Boolean),
    kajEnrollmentState: Schema.optional(Schema.String),
    cjisSettings: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings,
    ),
    resources: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo),
    ),
    complianceRegime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    compliantButDisallowedServices: Schema.optional(
      Schema.Array(Schema.String),
    ),
    enableSovereignControls: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    billingAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAssuredworkloadsV1beta1Workload" });

export interface GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse {}

export const GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse",
  });

export interface GoogleLongrunningOperation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    error: Schema.optional(GoogleRpcStatus),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse {
  /** List of analysis results for each asset in scope. */
  assetMoveAnalyses?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis>;
  /** The next page token. Is empty if the last page is reached. */
  nextPageToken?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetMoveAnalyses: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateResponse {
  /** The update that was applied. */
  appliedUpdate?: GoogleCloudAssuredworkloadsV1beta1WorkloadUpdate;
}

export const GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appliedUpdate: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1WorkloadUpdate,
    ),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateResponse",
  });

export interface GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse {
  /** List of Workloads under a given parent. */
  workloads?: ReadonlyArray<GoogleCloudAssuredworkloadsV1beta1Workload>;
  /** The next page token. Return empty if reached the last page. */
  nextPageToken?: string;
}

export const GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workloads: Schema.optional(
      Schema.Array(GoogleCloudAssuredworkloadsV1beta1Workload),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse",
  });

export interface GoogleLongrunningListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsRequest {
  /** Required. The number of events to process in a single transaction batch. */
  batchSize?: number;
  /** Required. The region of the workload(s) whose events should be reverted. This is used to filter workloads based on AssurantWorkloadData.region. */
  region?: string;
  /** Required. Only events within this time range will be reverted. This helps prevent reverting everything when something goes wrong. */
  archiveStartTime?: string;
  /** Required. Only events within this time range will be reverted. This helps prevent reverting everything when something goes wrong. */
  archiveEndTime?: string;
  /** Required. The organization ID for which to revert events. */
  organizationId?: string;
  /** Required. The maximum total number of events to move in this request. */
  maxEventsMove?: number;
}

export const GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsRequest: Schema.Schema<GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batchSize: Schema.optional(Schema.Number),
    region: Schema.optional(Schema.String),
    archiveStartTime: Schema.optional(Schema.String),
    archiveEndTime: Schema.optional(Schema.String),
    organizationId: Schema.optional(Schema.String),
    maxEventsMove: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsRequest",
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

export interface RevertArchivedResourceEventsAssuredworkloadsRequest {
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsRequest;
}

export const RevertArchivedResourceEventsAssuredworkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/assuredworkloads:revertArchivedResourceEvents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RevertArchivedResourceEventsAssuredworkloadsRequest>;

export type RevertArchivedResourceEventsAssuredworkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsResponse;
export const RevertArchivedResourceEventsAssuredworkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1RevertArchivedResourceEventsResponse;

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

export interface ArchiveResourceEventsAssuredworkloadsRequest {
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsRequest;
}

export const ArchiveResourceEventsAssuredworkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/assuredworkloads:archiveResourceEvents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ArchiveResourceEventsAssuredworkloadsRequest>;

export type ArchiveResourceEventsAssuredworkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsResponse;
export const ArchiveResourceEventsAssuredworkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1ArchiveResourceEventsResponse;

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

export interface GetOrganizationsLocationsWorkloadsRequest {
  /** Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1". */
  name: string;
}

export const GetOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsWorkloadsRequest>;

export type GetOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1Workload;
export const GetOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1Workload;

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

export interface PatchOrganizationsLocationsWorkloadsRequest {
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
  name: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1beta1Workload;
}

export const PatchOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudAssuredworkloadsV1beta1Workload).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsWorkloadsRequest>;

export type PatchOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1Workload;
export const PatchOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1Workload;

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

export interface AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsRequest {
  /** The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID. */
  project?: string;
  /** Optional. List of asset types to be analyzed, including and under the source resource. If empty, all assets are analyzed. The complete list of asset types is available [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). */
  assetTypes?: string[];
  /** Optional. Page size. If a value is not specified, the default value of 10 is used. The maximum value is 50. */
  pageSize?: number;
  /** Required. The resource ID of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2" */
  target: string;
  /** Optional. The page token from the previous response. It needs to be passed in the second and following requests. */
  pageToken?: string;
}

export const AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String).pipe(T.HttpQuery("project")),
    assetTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("assetTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    target: Schema.String.pipe(T.HttpPath("target")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+target}:analyzeWorkloadMove" }),
    svc,
  ) as unknown as Schema.Schema<AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsRequest>;

export type AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse;
export const AnalyzeWorkloadMoveOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse;

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

export interface RestrictAllowedResourcesOrganizationsLocationsWorkloadsRequest {
  /** Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1". */
  name: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest;
}

export const RestrictAllowedResourcesOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:restrictAllowedResources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestrictAllowedResourcesOrganizationsLocationsWorkloadsRequest>;

export type RestrictAllowedResourcesOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse;
export const RestrictAllowedResourcesOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse;

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

export interface ListOrganizationsLocationsWorkloadsRequest {
  /** A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported. */
  filter?: string;
  /** Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`. */
  parent: string;
  /** Page size. */
  pageSize?: number;
  /** Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests. */
  pageToken?: string;
}

export const ListOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/workloads" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsWorkloadsRequest>;

export type ListOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse;
export const ListOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse;

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
      path: "v1beta1/{+name}:enableComplianceUpdates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnableComplianceUpdatesOrganizationsLocationsWorkloadsRequest>;

export type EnableComplianceUpdatesOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1EnableComplianceUpdatesResponse;
export const EnableComplianceUpdatesOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1EnableComplianceUpdatesResponse;

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

export interface CreateOrganizationsLocationsWorkloadsRequest {
  /** Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value. */
  externalId?: string;
  /** Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1beta1Workload;
}

export const CreateOrganizationsLocationsWorkloadsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalId: Schema.optional(Schema.String).pipe(T.HttpQuery("externalId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudAssuredworkloadsV1beta1Workload).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/workloads",
      hasBody: true,
    }),
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
      path: "v1beta1/{+name}:enableResourceMonitoring",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnableResourceMonitoringOrganizationsLocationsWorkloadsRequest>;

export type EnableResourceMonitoringOrganizationsLocationsWorkloadsResponse =
  GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse;
export const EnableResourceMonitoringOrganizationsLocationsWorkloadsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse;

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
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

export interface AcknowledgeOrganizationsLocationsWorkloadsViolationsRequest {
  /** Required. The resource name of the Violation to acknowledge. Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation} */
  name: string;
  /** Request body */
  body?: GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest;
}

export const AcknowledgeOrganizationsLocationsWorkloadsViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:acknowledge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AcknowledgeOrganizationsLocationsWorkloadsViolationsRequest>;

export type AcknowledgeOrganizationsLocationsWorkloadsViolationsResponse =
  GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse;
export const AcknowledgeOrganizationsLocationsWorkloadsViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse;

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

export interface ListOrganizationsLocationsWorkloadsViolationsRequest {
  /** The end of the time window. */
  "interval.endTime"?: string;
  /** Required. The Workload name. Format `organizations/{org_id}/locations/{location}/workloads/{workload}`. */
  parent: string;
  /** Optional. Page token returned from previous request. */
  pageToken?: string;
  /** Optional. A custom filter for filtering by the Violations properties. */
  filter?: string;
  /** Optional. Page size. */
  pageSize?: number;
  /** The start of the time window. */
  "interval.startTime"?: string;
}

export const ListOrganizationsLocationsWorkloadsViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "interval.endTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.endTime"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    "interval.startTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("interval.startTime"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/violations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsWorkloadsViolationsRequest>;

export type ListOrganizationsLocationsWorkloadsViolationsResponse =
  GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse;
export const ListOrganizationsLocationsWorkloadsViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse;

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

export interface GetOrganizationsLocationsWorkloadsViolationsRequest {
  /** Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation} */
  name: string;
}

export const GetOrganizationsLocationsWorkloadsViolationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsWorkloadsViolationsRequest>;

export type GetOrganizationsLocationsWorkloadsViolationsResponse =
  GoogleCloudAssuredworkloadsV1beta1Violation;
export const GetOrganizationsLocationsWorkloadsViolationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1Violation;

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
    T.Http({ method: "GET", path: "v1beta1/{+parent}/updates" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsWorkloadsUpdatesRequest>;

export type ListOrganizationsLocationsWorkloadsUpdatesResponse =
  GoogleCloudAssuredworkloadsV1beta1ListWorkloadUpdatesResponse;
export const ListOrganizationsLocationsWorkloadsUpdatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAssuredworkloadsV1beta1ListWorkloadUpdatesResponse;

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
  body?: GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateRequest;
}

export const ApplyOrganizationsLocationsWorkloadsUpdatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudAssuredworkloadsV1beta1ApplyWorkloadUpdateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:apply", hasBody: true }),
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

export interface ListOrganizationsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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
