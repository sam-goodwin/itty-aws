// ==========================================================================
// Security Command Center API (securitycenter v1)
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
  name: "securitycenter",
  version: "v1",
  rootUrl: "https://securitycenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface AuditLogConfig {
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
  exemptedMembers?: ReadonlyArray<string>;
}

export const AuditLogConfig: Schema.Codec<AuditLogConfig> =
  /*@__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  service?: string;
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Codec<AuditConfig> =
  /*@__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping {
  highSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  mediumSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping: Schema.Codec<GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping> =
  /*@__PURE__*/ Schema.Struct({
    highSensitivityMapping: Schema.optional(Schema.String),
    mediumSensitivityMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping",
  });

export interface GoogleCloudSecuritycenterV1ResourceValueConfig {
  name?: string;
  description?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping;
  resourceType?: string;
  updateTime?: string;
  tagValues?: ReadonlyArray<string>;
  resourceLabelsSelector?: Record<string, string>;
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  scope?: string;
  createTime?: string;
}

export const GoogleCloudSecuritycenterV1ResourceValueConfig: Schema.Codec<GoogleCloudSecuritycenterV1ResourceValueConfig> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping,
    ),
    resourceType: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    resourceValue: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceValueConfig" });

export interface ListResourceValueConfigsResponse {
  resourceValueConfigs?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceValueConfig>;
  nextPageToken?: string;
}

export const ListResourceValueConfigsResponse: Schema.Codec<ListResourceValueConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    resourceValueConfigs: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1ResourceValueConfig),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListResourceValueConfigsResponse" });

export interface GoogleCloudSecuritycenterV1IamRolePermission {
  name?: string;
  role?: string;
}

export const GoogleCloudSecuritycenterV1IamRolePermission: Schema.Codec<GoogleCloudSecuritycenterV1IamRolePermission> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1IamRolePermission" });

export interface GoogleCloudSecuritycenterV1IamDetails {
  iamRolePermissions?: ReadonlyArray<GoogleCloudSecuritycenterV1IamRolePermission>;
}

export const GoogleCloudSecuritycenterV1IamDetails: Schema.Codec<GoogleCloudSecuritycenterV1IamDetails> =
  /*@__PURE__*/ Schema.Struct({
    iamRolePermissions: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1IamRolePermission),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1IamDetails" });

export interface AiModel {
  location?: string;
  displayName?: string;
  library?: string;
  name?: string;
  publisher?: string;
  domain?: string;
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  usageCategory?: string;
}

export const AiModel: Schema.Codec<AiModel> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
  }).annotate({ identifier: "AiModel" });

export interface GoogleCloudSecuritycenterV1MuteConfig {
  filter?: string;
  expiryTime?: string;
  createTime?: string;
  mostRecentEditor?: string;
  displayName?: string;
  updateTime?: string;
  description?: string;
  name?: string;
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
}

export const GoogleCloudSecuritycenterV1MuteConfig: Schema.Codec<GoogleCloudSecuritycenterV1MuteConfig> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1MuteConfig" });

export interface AttackExposure {
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  score?: number;
  latestCalculationTime?: string;
  attackExposureResult?: string;
  exposedHighValueResourcesCount?: number;
  exposedLowValueResourcesCount?: number;
  exposedMediumValueResourcesCount?: number;
}

export const AttackExposure: Schema.Codec<AttackExposure> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    latestCalculationTime: Schema.optional(Schema.String),
    attackExposureResult: Schema.optional(Schema.String),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AttackExposure" });

export interface Attack {
  classification?: string;
  volumeBps?: number;
  volumeBpsLong?: string;
  volumePpsLong?: string;
  volumePps?: number;
}

export const Attack: Schema.Codec<Attack> =
  /*@__PURE__*/ Schema.Struct({
    classification: Schema.optional(Schema.String),
    volumeBps: Schema.optional(Schema.Number),
    volumeBpsLong: Schema.optional(Schema.String),
    volumePpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Attack" });

export interface Notebook {
  lastAuthor?: string;
  name?: string;
  service?: string;
  notebookUpdateTime?: string;
}

export const Notebook: Schema.Codec<Notebook> =
  /*@__PURE__*/ Schema.Struct({
    lastAuthor: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Notebook" });

export interface AwsAccount {
  id?: string;
  name?: string;
}

export const AwsAccount: Schema.Codec<AwsAccount> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsAccount" });

export interface AwsOrganizationalUnit {
  id?: string;
  name?: string;
}

export const AwsOrganizationalUnit: Schema.Codec<AwsOrganizationalUnit> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganizationalUnit" });

export interface AwsOrganization {
  id?: string;
}

export const AwsOrganization: Schema.Codec<AwsOrganization> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganization" });

export interface AwsMetadata {
  account?: AwsAccount;
  organizationalUnits?: ReadonlyArray<AwsOrganizationalUnit>;
  organization?: AwsOrganization;
}

export const AwsMetadata: Schema.Codec<AwsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    account: Schema.optional(AwsAccount),
    organizationalUnits: Schema.optional(Schema.Array(AwsOrganizationalUnit)),
    organization: Schema.optional(AwsOrganization),
  }).annotate({ identifier: "AwsMetadata" });

export interface GoogleCloudSecuritycenterV2CloudControl {
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
  version?: number;
  cloudControlName?: string;
  policyType?: string;
}

export const GoogleCloudSecuritycenterV2CloudControl: Schema.Codec<GoogleCloudSecuritycenterV2CloudControl> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    cloudControlName: Schema.optional(Schema.String),
    policyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudControl" });

export interface GoogleCloudSecuritycenterV2Control {
  controlName?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Control: Schema.Codec<GoogleCloudSecuritycenterV2Control> =
  /*@__PURE__*/ Schema.Struct({
    controlName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Control" });

export interface GoogleCloudSecuritycenterV2Framework {
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
  name?: string;
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
  controls?: ReadonlyArray<GoogleCloudSecuritycenterV2Control>;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Framework: Schema.Codec<GoogleCloudSecuritycenterV2Framework> =
  /*@__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    controls: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Control)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Framework" });

export interface GoogleCloudSecuritycenterV2ComplianceDetails {
  cloudControl?: GoogleCloudSecuritycenterV2CloudControl;
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  frameworks?: ReadonlyArray<GoogleCloudSecuritycenterV2Framework>;
}

export const GoogleCloudSecuritycenterV2ComplianceDetails: Schema.Codec<GoogleCloudSecuritycenterV2ComplianceDetails> =
  /*@__PURE__*/ Schema.Struct({
    cloudControl: Schema.optional(GoogleCloudSecuritycenterV2CloudControl),
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    frameworks: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Framework),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ComplianceDetails" });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo {
  email?: string;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo: Schema.Codec<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo",
  });

export interface AssetDiscoveryConfig {
  projectIds?: ReadonlyArray<string>;
  inclusionMode?:
    | "INCLUSION_MODE_UNSPECIFIED"
    | "INCLUDE_ONLY"
    | "EXCLUDE"
    | (string & {});
  folderIds?: ReadonlyArray<string>;
}

export const AssetDiscoveryConfig: Schema.Codec<AssetDiscoveryConfig> =
  /*@__PURE__*/ Schema.Struct({
    projectIds: Schema.optional(Schema.Array(Schema.String)),
    inclusionMode: Schema.optional(Schema.String),
    folderIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AssetDiscoveryConfig" });

export interface OrganizationSettings {
  assetDiscoveryConfig?: AssetDiscoveryConfig;
  name?: string;
  enableAssetDiscovery?: boolean;
}

export const OrganizationSettings: Schema.Codec<OrganizationSettings> =
  /*@__PURE__*/ Schema.Struct({
    assetDiscoveryConfig: Schema.optional(AssetDiscoveryConfig),
    name: Schema.optional(Schema.String),
    enableAssetDiscovery: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OrganizationSettings" });

export interface Position {
  lineNumber?: number;
  columnNumber?: number;
}

export const Position: Schema.Codec<Position> =
  /*@__PURE__*/ Schema.Struct({
    lineNumber: Schema.optional(Schema.Number),
    columnNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Position" });

export interface CustomModuleValidationError {
  fieldPath?: string;
  description?: string;
  start?: Position;
  end?: Position;
}

export const CustomModuleValidationError: Schema.Codec<CustomModuleValidationError> =
  /*@__PURE__*/ Schema.Struct({
    fieldPath: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    start: Schema.optional(Position),
    end: Schema.optional(Position),
  }).annotate({ identifier: "CustomModuleValidationError" });

export interface CustomModuleValidationErrors {
  errors?: ReadonlyArray<CustomModuleValidationError>;
}

export const CustomModuleValidationErrors: Schema.Codec<CustomModuleValidationErrors> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(CustomModuleValidationError)),
  }).annotate({ identifier: "CustomModuleValidationErrors" });

export interface ValidateEventThreatDetectionCustomModuleResponse {
  errors?: CustomModuleValidationErrors;
}

export const ValidateEventThreatDetectionCustomModuleResponse: Schema.Codec<ValidateEventThreatDetectionCustomModuleResponse> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(CustomModuleValidationErrors),
  }).annotate({
    identifier: "ValidateEventThreatDetectionCustomModuleResponse",
  });

export interface GoogleCloudSecuritycenterV1ResourceSelector {
  resourceTypes?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV1ResourceSelector: Schema.Codec<GoogleCloudSecuritycenterV1ResourceSelector> =
  /*@__PURE__*/ Schema.Struct({
    resourceTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceSelector" });

export interface SecurityMarks {
  name?: string;
  marks?: Record<string, string>;
  canonicalName?: string;
}

export const SecurityMarks: Schema.Codec<SecurityMarks> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityMarks" });

export interface Detection {
  percentPagesMatched?: number;
  binary?: string;
}

export const Detection: Schema.Codec<Detection> =
  /*@__PURE__*/ Schema.Struct({
    percentPagesMatched: Schema.optional(Schema.Number),
    binary: Schema.optional(Schema.String),
  }).annotate({ identifier: "Detection" });

export interface MemoryHashSignature {
  binaryFamily?: string;
  detections?: ReadonlyArray<Detection>;
}

export const MemoryHashSignature: Schema.Codec<MemoryHashSignature> =
  /*@__PURE__*/ Schema.Struct({
    binaryFamily: Schema.optional(Schema.String),
    detections: Schema.optional(Schema.Array(Detection)),
  }).annotate({ identifier: "MemoryHashSignature" });

export interface GoogleCloudSecuritycenterV2AdaptiveProtection {
  confidence?: number;
}

export const GoogleCloudSecuritycenterV2AdaptiveProtection: Schema.Codec<GoogleCloudSecuritycenterV2AdaptiveProtection> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdaptiveProtection" });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo {
  email?: string;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo: Schema.Codec<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo",
  });

export interface GoogleCloudSecuritycenterV2DataAccessEvent {
  eventTime?: string;
  principalEmail?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  eventId?: string;
}

export const GoogleCloudSecuritycenterV2DataAccessEvent: Schema.Codec<GoogleCloudSecuritycenterV2DataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataAccessEvent" });

export interface GoogleCloudSecuritycenterV2Folder {
  resourceFolder?: string;
  resourceFolderDisplayName?: string;
}

export const GoogleCloudSecuritycenterV2Folder: Schema.Codec<GoogleCloudSecuritycenterV2Folder> =
  /*@__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Folder" });

export interface GcpMetadata {
  organization?: string;
  parent?: string;
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV2Folder>;
  project?: string;
  parentDisplayName?: string;
  projectDisplayName?: string;
}

export const GcpMetadata: Schema.Codec<GcpMetadata> =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Folder)),
    project: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcpMetadata" });

export interface Expr {
  title?: string;
  description?: string;
  location?: string;
  expression?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleCloudSecuritycenterV1Property {
  valueExpression?: Expr;
  name?: string;
}

export const GoogleCloudSecuritycenterV1Property: Schema.Codec<GoogleCloudSecuritycenterV1Property> =
  /*@__PURE__*/ Schema.Struct({
    valueExpression: Schema.optional(Expr),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Property" });

export interface GoogleCloudSecuritycenterV1CustomOutputSpec {
  properties?: ReadonlyArray<GoogleCloudSecuritycenterV1Property>;
}

export const GoogleCloudSecuritycenterV1CustomOutputSpec: Schema.Codec<GoogleCloudSecuritycenterV1CustomOutputSpec> =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1Property),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomOutputSpec" });

export interface GoogleCloudSecuritycenterV1CustomConfig {
  description?: string;
  predicate?: Expr;
  customOutput?: GoogleCloudSecuritycenterV1CustomOutputSpec;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  resourceSelector?: GoogleCloudSecuritycenterV1ResourceSelector;
  recommendation?: string;
}

export const GoogleCloudSecuritycenterV1CustomConfig: Schema.Codec<GoogleCloudSecuritycenterV1CustomConfig> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    predicate: Schema.optional(Expr),
    customOutput: Schema.optional(GoogleCloudSecuritycenterV1CustomOutputSpec),
    severity: Schema.optional(Schema.String),
    resourceSelector: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceSelector,
    ),
    recommendation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomConfig" });

export interface GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
  lastEditor?: string;
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  displayName?: string;
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "INHERITED"
    | (string & {});
  updateTime?: string;
  ancestorModule?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  name?: string;
}

export const GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule: Schema.Codec<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ Schema.Struct({
    lastEditor: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    displayName: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    ancestorModule: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule",
  });

export interface ListSecurityHealthAnalyticsCustomModulesResponse {
  securityHealthAnalyticsCustomModules?: ReadonlyArray<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
  nextPageToken?: string;
}

export const ListSecurityHealthAnalyticsCustomModulesResponse: Schema.Codec<ListSecurityHealthAnalyticsCustomModulesResponse> =
  /*@__PURE__*/ Schema.Struct({
    securityHealthAnalyticsCustomModules: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListSecurityHealthAnalyticsCustomModulesResponse",
  });

export interface Dataset {
  name?: string;
  displayName?: string;
  source?: string;
}

export const Dataset: Schema.Codec<Dataset> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dataset" });

export interface MitreAttack {
  version?: string;
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

export const MitreAttack: Schema.Codec<MitreAttack> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    primaryTactic: Schema.optional(Schema.String),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "MitreAttack" });

export interface FileOperation {
  type?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "OPEN"
    | "READ"
    | "RENAME"
    | "WRITE"
    | "EXECUTE"
    | (string & {});
}

export const FileOperation: Schema.Codec<FileOperation> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileOperation" });

export interface DiskPath {
  relativePath?: string;
  partitionUuid?: string;
}

export const DiskPath: Schema.Codec<DiskPath> =
  /*@__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    partitionUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskPath" });

export interface File {
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  size?: string;
  operations?: ReadonlyArray<FileOperation>;
  partiallyHashed?: boolean;
  diskPath?: DiskPath;
  hashedSize?: string;
  path?: string;
  contents?: string;
  sha256?: string;
}

export const File: Schema.Codec<File> =
  /*@__PURE__*/ Schema.Struct({
    fileLoadState: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(FileOperation)),
    partiallyHashed: Schema.optional(Schema.Boolean),
    diskPath: Schema.optional(DiskPath),
    hashedSize: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface AzureManagementGroup {
  id?: string;
  displayName?: string;
}

export const AzureManagementGroup: Schema.Codec<AzureManagementGroup> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureManagementGroup" });

export interface AzureResourceGroup {
  id?: string;
  name?: string;
}

export const AzureResourceGroup: Schema.Codec<AzureResourceGroup> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureResourceGroup" });

export interface AzureTenant {
  id?: string;
  displayName?: string;
}

export const AzureTenant: Schema.Codec<AzureTenant> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureTenant" });

export interface AzureSubscription {
  id?: string;
  displayName?: string;
}

export const AzureSubscription: Schema.Codec<AzureSubscription> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureSubscription" });

export interface AzureMetadata {
  managementGroups?: ReadonlyArray<AzureManagementGroup>;
  resourceGroup?: AzureResourceGroup;
  tenant?: AzureTenant;
  subscription?: AzureSubscription;
}

export const AzureMetadata: Schema.Codec<AzureMetadata> =
  /*@__PURE__*/ Schema.Struct({
    managementGroups: Schema.optional(Schema.Array(AzureManagementGroup)),
    resourceGroup: Schema.optional(AzureResourceGroup),
    tenant: Schema.optional(AzureTenant),
    subscription: Schema.optional(AzureSubscription),
  }).annotate({ identifier: "AzureMetadata" });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality {
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality: Schema.Codec<GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality",
  });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment {
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment: Schema.Codec<GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment",
  });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributes {
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  criticality?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality;
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  environment?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV1ResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
    ),
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality,
    ),
    operatorOwners: Schema.optional(
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
  name?: string;
  attributes?: GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV1ResourceApplication: Schema.Codec<GoogleCloudSecuritycenterV1ResourceApplication> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceApplication" });

export interface Folder {
  resourceFolder?: string;
  resourceFolderDisplayName?: string;
}

export const Folder: Schema.Codec<Folder> =
  /*@__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

export interface AdcApplication {
  attributes?: GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
  name?: string;
}

export const AdcApplication: Schema.Codec<AdcApplication> =
  /*@__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcApplication" });

export interface ResourcePathNode {
  displayName?: string;
  id?: string;
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
}

export const ResourcePathNode: Schema.Codec<ResourcePathNode> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    nodeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourcePathNode" });

export interface ResourcePath {
  nodes?: ReadonlyArray<ResourcePathNode>;
}

export const ResourcePath: Schema.Codec<ResourcePath> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(ResourcePathNode)),
  }).annotate({ identifier: "ResourcePath" });

export interface AdcApplicationTemplateRevision {
  name?: string;
}

export const AdcApplicationTemplateRevision: Schema.Codec<AdcApplicationTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcApplicationTemplateRevision" });

export interface AdcSharedTemplateRevision {
  name?: string;
}

export const AdcSharedTemplateRevision: Schema.Codec<AdcSharedTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcSharedTemplateRevision" });

export interface Resource {
  azureMetadata?: AzureMetadata;
  projectDisplayName?: string;
  type?: string;
  resourcePathString?: string;
  displayName?: string;
  organization?: string;
  application?: GoogleCloudSecuritycenterV1ResourceApplication;
  folders?: ReadonlyArray<Folder>;
  projectName?: string;
  service?: string;
  adcApplication?: AdcApplication;
  awsMetadata?: AwsMetadata;
  name?: string;
  resourcePath?: ResourcePath;
  parentName?: string;
  adcApplicationTemplate?: AdcApplicationTemplateRevision;
  adcSharedTemplate?: AdcSharedTemplateRevision;
  parentDisplayName?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  location?: string;
}

export const Resource: Schema.Codec<Resource> =
  /*@__PURE__*/ Schema.Struct({
    azureMetadata: Schema.optional(AzureMetadata),
    projectDisplayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    resourcePathString: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    application: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplication,
    ),
    folders: Schema.optional(Schema.Array(Folder)),
    projectName: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    adcApplication: Schema.optional(AdcApplication),
    awsMetadata: Schema.optional(AwsMetadata),
    name: Schema.optional(Schema.String),
    resourcePath: Schema.optional(ResourcePath),
    parentName: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(AdcApplicationTemplateRevision),
    adcSharedTemplate: Schema.optional(AdcSharedTemplateRevision),
    parentDisplayName: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Resource" });

export interface TicketInfo {
  assignee?: string;
  uri?: string;
  updateTime?: string;
  description?: string;
  id?: string;
  status?: string;
}

export const TicketInfo: Schema.Codec<TicketInfo> =
  /*@__PURE__*/ Schema.Struct({
    assignee: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "TicketInfo" });

export interface GoogleCloudSecuritycenterV1ExternalSystem {
  externalUid?: string;
  status?: string;
  externalSystemUpdateTime?: string;
  caseCloseTime?: string;
  assignees?: ReadonlyArray<string>;
  caseUri?: string;
  casePriority?: string;
  name?: string;
  caseSla?: string;
  ticketInfo?: TicketInfo;
  caseCreateTime?: string;
}

export const GoogleCloudSecuritycenterV1ExternalSystem: Schema.Codec<GoogleCloudSecuritycenterV1ExternalSystem> =
  /*@__PURE__*/ Schema.Struct({
    externalUid: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    caseUri: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(TicketInfo),
    caseCreateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ExternalSystem" });

export interface CloudDlpInspection {
  fullScan?: boolean;
  infoType?: string;
  infoTypeCount?: string;
  inspectJob?: string;
}

export const CloudDlpInspection: Schema.Codec<CloudDlpInspection> =
  /*@__PURE__*/ Schema.Struct({
    fullScan: Schema.optional(Schema.Boolean),
    infoType: Schema.optional(Schema.String),
    infoTypeCount: Schema.optional(Schema.String),
    inspectJob: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudDlpInspection" });

export interface YaraRuleSignature {
  yaraRule?: string;
}

export const YaraRuleSignature: Schema.Codec<YaraRuleSignature> =
  /*@__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "YaraRuleSignature" });

export interface ProcessSignature {
  memoryHashSignature?: MemoryHashSignature;
  yaraRuleSignature?: YaraRuleSignature;
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
}

export const ProcessSignature: Schema.Codec<ProcessSignature> =
  /*@__PURE__*/ Schema.Struct({
    memoryHashSignature: Schema.optional(MemoryHashSignature),
    yaraRuleSignature: Schema.optional(YaraRuleSignature),
    signatureType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProcessSignature" });

export interface Indicator {
  ipAddresses?: ReadonlyArray<string>;
  domains?: ReadonlyArray<string>;
  signatures?: ReadonlyArray<ProcessSignature>;
  uris?: ReadonlyArray<string>;
}

export const Indicator: Schema.Codec<Indicator> =
  /*@__PURE__*/ Schema.Struct({
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    domains: Schema.optional(Schema.Array(Schema.String)),
    signatures: Schema.optional(Schema.Array(ProcessSignature)),
    uris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Indicator" });

export interface SensitivityScore {
  score?:
    | "SENSITIVITY_SCORE_LEVEL_UNSPECIFIED"
    | "SENSITIVITY_LOW"
    | "SENSITIVITY_UNKNOWN"
    | "SENSITIVITY_MODERATE"
    | "SENSITIVITY_HIGH"
    | (string & {});
}

export const SensitivityScore: Schema.Codec<SensitivityScore> =
  /*@__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.String),
  }).annotate({ identifier: "SensitivityScore" });

export interface InfoType {
  name?: string;
  version?: string;
  sensitivityScore?: SensitivityScore;
}

export const InfoType: Schema.Codec<InfoType> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(SensitivityScore),
  }).annotate({ identifier: "InfoType" });

export interface CloudDlpDataProfile {
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
  dataProfile?: string;
  infoTypes?: ReadonlyArray<InfoType>;
}

export const CloudDlpDataProfile: Schema.Codec<CloudDlpDataProfile> =
  /*@__PURE__*/ Schema.Struct({
    parentType: Schema.optional(Schema.String),
    dataProfile: Schema.optional(Schema.String),
    infoTypes: Schema.optional(Schema.Array(InfoType)),
  }).annotate({ identifier: "CloudDlpDataProfile" });

export interface ToxicCombination {
  relatedFindings?: ReadonlyArray<string>;
  attackExposureScore?: number;
}

export const ToxicCombination: Schema.Codec<ToxicCombination> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
    attackExposureScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ToxicCombination" });

export interface CloudControl {
  cloudControlName?: string;
  policyType?: string;
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
  version?: number;
}

export const CloudControl: Schema.Codec<CloudControl> =
  /*@__PURE__*/ Schema.Struct({
    cloudControlName: Schema.optional(Schema.String),
    policyType: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CloudControl" });

export interface Control {
  controlName?: string;
  displayName?: string;
}

export const Control: Schema.Codec<Control> =
  /*@__PURE__*/ Schema.Struct({
    controlName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Control" });

export interface Framework {
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
  name?: string;
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
  displayName?: string;
  controls?: ReadonlyArray<Control>;
}

export const Framework: Schema.Codec<Framework> =
  /*@__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    controls: Schema.optional(Schema.Array(Control)),
  }).annotate({ identifier: "Framework" });

export interface ComplianceDetails {
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  cloudControl?: CloudControl;
  frameworks?: ReadonlyArray<Framework>;
}

export const ComplianceDetails: Schema.Codec<ComplianceDetails> =
  /*@__PURE__*/ Schema.Struct({
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    cloudControl: Schema.optional(CloudControl),
    frameworks: Schema.optional(Schema.Array(Framework)),
  }).annotate({ identifier: "ComplianceDetails" });

export interface Label {
  name?: string;
  value?: string;
}

export const Label: Schema.Codec<Label> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Label" });

export interface Container {
  createTime?: string;
  name?: string;
  imageId?: string;
  labels?: ReadonlyArray<Label>;
  uri?: string;
}

export const Container: Schema.Codec<Container> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Label)),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Container" });

export interface DataAccessEvent {
  eventId?: string;
  principalEmail?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  eventTime?: string;
}

export const DataAccessEvent: Schema.Codec<DataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataAccessEvent" });

export interface Compliance {
  standard?: string;
  ids?: ReadonlyArray<string>;
  version?: string;
}

export const Compliance: Schema.Codec<Compliance> =
  /*@__PURE__*/ Schema.Struct({
    standard: Schema.optional(Schema.String),
    ids: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "Compliance" });

export interface Chokepoint {
  relatedFindings?: ReadonlyArray<string>;
}

export const Chokepoint: Schema.Codec<Chokepoint> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Chokepoint" });

export interface DataFlowEvent {
  principalEmail?: string;
  violatedLocation?: string;
  eventId?: string;
  eventTime?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
}

export const DataFlowEvent: Schema.Codec<DataFlowEvent> =
  /*@__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataFlowEvent" });

export interface EnvironmentVariable {
  name?: string;
  val?: string;
}

export const EnvironmentVariable: Schema.Codec<EnvironmentVariable> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    val: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvironmentVariable" });

export interface Process {
  name?: string;
  args?: ReadonlyArray<string>;
  script?: File;
  userId?: string;
  binary?: File;
  libraries?: ReadonlyArray<File>;
  envVariables?: ReadonlyArray<EnvironmentVariable>;
  envVariablesTruncated?: boolean;
  pid?: string;
  parentPid?: string;
  argumentsTruncated?: boolean;
}

export const Process: Schema.Codec<Process> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    script: Schema.optional(File),
    userId: Schema.optional(Schema.String),
    binary: Schema.optional(File),
    libraries: Schema.optional(Schema.Array(File)),
    envVariables: Schema.optional(Schema.Array(EnvironmentVariable)),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    pid: Schema.optional(Schema.String),
    parentPid: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Process" });

export interface AgentDataAccessEvent {
  eventId?: string;
  eventTime?: string;
  principalSubject?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
}

export const AgentDataAccessEvent: Schema.Codec<AgentDataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentDataAccessEvent" });

export interface BackupDisasterRecovery {
  policies?: ReadonlyArray<string>;
  storagePool?: string;
  backupTemplate?: string;
  host?: string;
  applications?: ReadonlyArray<string>;
  appliance?: string;
  backupType?: string;
  backupCreateTime?: string;
  policyOptions?: ReadonlyArray<string>;
  profile?: string;
}

export const BackupDisasterRecovery: Schema.Codec<BackupDisasterRecovery> =
  /*@__PURE__*/ Schema.Struct({
    policies: Schema.optional(Schema.Array(Schema.String)),
    storagePool: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
    appliance: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    backupCreateTime: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    profile: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDisasterRecovery" });

export interface Network {
  name?: string;
}

export const Network: Schema.Codec<Network> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Network" });

export interface PolicyDriftDetails {
  detectedValue?: string;
  expectedValue?: string;
  field?: string;
}

export const PolicyDriftDetails: Schema.Codec<PolicyDriftDetails> =
  /*@__PURE__*/ Schema.Struct({
    detectedValue: Schema.optional(Schema.String),
    expectedValue: Schema.optional(Schema.String),
    field: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyDriftDetails" });

export interface SecurityPosture {
  postureDeploymentResource?: string;
  policySet?: string;
  changedPolicy?: string;
  revisionId?: string;
  policy?: string;
  name?: string;
  postureDeployment?: string;
  policyDriftDetails?: ReadonlyArray<PolicyDriftDetails>;
}

export const SecurityPosture: Schema.Codec<SecurityPosture> =
  /*@__PURE__*/ Schema.Struct({
    postureDeploymentResource: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(Schema.Array(PolicyDriftDetails)),
  }).annotate({ identifier: "SecurityPosture" });

export interface HttpResponse {
  statusCode?: string;
  path?: string;
}

export const HttpResponse: Schema.Codec<HttpResponse> =
  /*@__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpResponse" });

export interface ExternalExposure {
  exposedService?: string;
  networkEndpointGroup?: string;
  forwardingRule?: string;
  instanceGroup?: string;
  exposedEndpoint?: string;
  backendBucket?: string;
  exposedApplication?: string;
  networkIngressFirewallPolicy?: string;
  publicPort?: string;
  httpResponse?: ReadonlyArray<HttpResponse>;
  pscNetworkAttachment?: string;
  publicIpAddress?: string;
  privatePort?: string;
  hostnameUri?: string;
  backendService?: string;
  networkPathInsightsGenerationTime?: string;
  pscServiceAttachment?: string;
  serviceFirewallPolicy?: string;
  privateIpAddress?: string;
  loadBalancerFirewallPolicy?: string;
  internalBackendService?: string;
}

export const ExternalExposure: Schema.Codec<ExternalExposure> =
  /*@__PURE__*/ Schema.Struct({
    exposedService: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    httpResponse: Schema.optional(Schema.Array(HttpResponse)),
    pscNetworkAttachment: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    networkPathInsightsGenerationTime: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalExposure" });

export interface Connection {
  sourceIp?: string;
  sourcePort?: number;
  destinationIp?: string;
  destinationPort?: number;
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
}

export const Connection: Schema.Codec<Connection> =
  /*@__PURE__*/ Schema.Struct({
    sourceIp: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
    destinationIp: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connection" });

export interface Database {
  userName?: string;
  displayName?: string;
  version?: string;
  query?: string;
  grantees?: ReadonlyArray<string>;
  name?: string;
}

export const Database: Schema.Codec<Database> =
  /*@__PURE__*/ Schema.Struct({
    userName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Database" });

export interface KernelRootkit {
  unexpectedProcessesInRunqueue?: boolean;
  unexpectedReadOnlyDataModification?: boolean;
  unexpectedFtraceHandler?: boolean;
  name?: string;
  unexpectedCodeModification?: boolean;
  unexpectedKprobeHandler?: boolean;
  unexpectedSystemCallHandler?: boolean;
  unexpectedInterruptHandler?: boolean;
  unexpectedKernelCodePages?: boolean;
}

export const KernelRootkit: Schema.Codec<KernelRootkit> =
  /*@__PURE__*/ Schema.Struct({
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KernelRootkit" });

export interface ArtifactGuardPolicy {
  policyId?: string;
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
  failureReason?: string;
}

export const ArtifactGuardPolicy: Schema.Codec<ArtifactGuardPolicy> =
  /*@__PURE__*/ Schema.Struct({
    policyId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactGuardPolicy" });

export interface ArtifactGuardPolicies {
  resourceId?: string;
  failingPolicies?: ReadonlyArray<ArtifactGuardPolicy>;
}

export const ArtifactGuardPolicies: Schema.Codec<ArtifactGuardPolicies> =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    failingPolicies: Schema.optional(Schema.Array(ArtifactGuardPolicy)),
  }).annotate({ identifier: "ArtifactGuardPolicies" });

export interface IamBinding {
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  role?: string;
  member?: string;
}

export const IamBinding: Schema.Codec<IamBinding> =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamBinding" });

export interface Application {
  baseUri?: string;
  fullUri?: string;
}

export const Application: Schema.Codec<Application> =
  /*@__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Application" });

export interface AffectedResources {
  count?: string;
}

export const AffectedResources: Schema.Codec<AffectedResources> =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AffectedResources" });

export interface PortRange {
  max?: string;
  min?: string;
}

export const PortRange: Schema.Codec<PortRange> =
  /*@__PURE__*/ Schema.Struct({
    max: Schema.optional(Schema.String),
    min: Schema.optional(Schema.String),
  }).annotate({ identifier: "PortRange" });

export interface IpRule {
  protocol?: string;
  portRanges?: ReadonlyArray<PortRange>;
}

export const IpRule: Schema.Codec<IpRule> =
  /*@__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    portRanges: Schema.optional(Schema.Array(PortRange)),
  }).annotate({ identifier: "IpRule" });

export interface Allowed {
  ipRules?: ReadonlyArray<IpRule>;
}

export const Allowed: Schema.Codec<Allowed> =
  /*@__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(IpRule)),
  }).annotate({ identifier: "Allowed" });

export interface Denied {
  ipRules?: ReadonlyArray<IpRule>;
}

export const Denied: Schema.Codec<Denied> =
  /*@__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(IpRule)),
  }).annotate({ identifier: "Denied" });

export interface IpRules {
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  destinationIpRanges?: ReadonlyArray<string>;
  exposedServices?: ReadonlyArray<string>;
  allowed?: Allowed;
  sourceIpRanges?: ReadonlyArray<string>;
  denied?: Denied;
}

export const IpRules: Schema.Codec<IpRules> =
  /*@__PURE__*/ Schema.Struct({
    direction: Schema.optional(Schema.String),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
    allowed: Schema.optional(Allowed),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
    denied: Schema.optional(Denied),
  }).annotate({ identifier: "IpRules" });

export interface Geolocation {
  regionCode?: string;
}

export const Geolocation: Schema.Codec<Geolocation> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Geolocation" });

export interface ServiceAccountDelegationInfo {
  principalEmail?: string;
  principalSubject?: string;
}

export const ServiceAccountDelegationInfo: Schema.Codec<ServiceAccountDelegationInfo> =
  /*@__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccountDelegationInfo" });

export interface Access {
  callerIpGeo?: Geolocation;
  userName?: string;
  serviceName?: string;
  serviceAccountDelegationInfo?: ReadonlyArray<ServiceAccountDelegationInfo>;
  principalEmail?: string;
  userAgent?: string;
  methodName?: string;
  serviceAccountKeyName?: string;
  principalSubject?: string;
  userAgentFamily?: string;
  callerIp?: string;
}

export const Access: Schema.Codec<Access> =
  /*@__PURE__*/ Schema.Struct({
    callerIpGeo: Schema.optional(Geolocation),
    userName: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(ServiceAccountDelegationInfo),
    ),
    principalEmail: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    methodName: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    userAgentFamily: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "Access" });

export interface CloudLoggingEntry {
  logId?: string;
  insertId?: string;
  resourceContainer?: string;
  timestamp?: string;
}

export const CloudLoggingEntry: Schema.Codec<CloudLoggingEntry> =
  /*@__PURE__*/ Schema.Struct({
    logId: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
    resourceContainer: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudLoggingEntry" });

export interface LogEntry {
  cloudLoggingEntry?: CloudLoggingEntry;
}

export const LogEntry: Schema.Codec<LogEntry> =
  /*@__PURE__*/ Schema.Struct({
    cloudLoggingEntry: Schema.optional(CloudLoggingEntry),
  }).annotate({ identifier: "LogEntry" });

export interface GroupMembership {
  groupId?: string;
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
}

export const GroupMembership: Schema.Codec<GroupMembership> =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    groupType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupMembership" });

export interface StaticMute {
  state?:
    | "MUTE_UNSPECIFIED"
    | "MUTED"
    | "UNMUTED"
    | "UNDEFINED"
    | (string & {});
  applyTime?: string;
}

export const StaticMute: Schema.Codec<StaticMute> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    applyTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "StaticMute" });

export interface DynamicMuteRecord {
  muteConfig?: string;
  matchTime?: string;
}

export const DynamicMuteRecord: Schema.Codec<DynamicMuteRecord> =
  /*@__PURE__*/ Schema.Struct({
    muteConfig: Schema.optional(Schema.String),
    matchTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicMuteRecord" });

export interface MuteInfo {
  staticMute?: StaticMute;
  dynamicMuteRecords?: ReadonlyArray<DynamicMuteRecord>;
}

export const MuteInfo: Schema.Codec<MuteInfo> =
  /*@__PURE__*/ Schema.Struct({
    staticMute: Schema.optional(StaticMute),
    dynamicMuteRecords: Schema.optional(Schema.Array(DynamicMuteRecord)),
  }).annotate({ identifier: "MuteInfo" });

export interface Reference {
  source?: string;
  uri?: string;
}

export const Reference: Schema.Codec<Reference> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reference" });

export interface Cvssv3 {
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  baseScore?: number;
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | (string & {});
}

export const Cvssv3: Schema.Codec<Cvssv3> =
  /*@__PURE__*/ Schema.Struct({
    availabilityImpact: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    scope: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    attackVector: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
  }).annotate({ identifier: "Cvssv3" });

export interface Cve {
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  firstExploitationDate?: string;
  observedInTheWild?: boolean;
  id?: string;
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  zeroDay?: boolean;
  references?: ReadonlyArray<Reference>;
  cvssv3?: Cvssv3;
  exploitReleaseDate?: string;
  upstreamFixAvailable?: boolean;
}

export const Cve: Schema.Codec<Cve> = /*@__PURE__*/ Schema.Struct({
  exploitationActivity: Schema.optional(Schema.String),
  firstExploitationDate: Schema.optional(Schema.String),
  observedInTheWild: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.String),
  impact: Schema.optional(Schema.String),
  zeroDay: Schema.optional(Schema.Boolean),
  references: Schema.optional(Schema.Array(Reference)),
  cvssv3: Schema.optional(Cvssv3),
  exploitReleaseDate: Schema.optional(Schema.String),
  upstreamFixAvailable: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Cve" });

export interface Package {
  packageName?: string;
  cpeUri?: string;
  packageType?: string;
  packageVersion?: string;
}

export const Package: Schema.Codec<Package> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface SecurityBulletin {
  bulletinId?: string;
  submissionTime?: string;
  suggestedUpgradeVersion?: string;
}

export const SecurityBulletin: Schema.Codec<SecurityBulletin> =
  /*@__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityBulletin" });

export interface Cwe {
  id?: string;
  references?: ReadonlyArray<Reference>;
}

export const Cwe: Schema.Codec<Cwe> = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  references: Schema.optional(Schema.Array(Reference)),
}).annotate({ identifier: "Cwe" });

export interface Vulnerability {
  reachable?: boolean;
  cve?: Cve;
  offendingPackage?: Package;
  fixedPackage?: Package;
  securityBulletin?: SecurityBulletin;
  cwes?: ReadonlyArray<Cwe>;
  providerRiskScore?: string;
}

export const Vulnerability: Schema.Codec<Vulnerability> =
  /*@__PURE__*/ Schema.Struct({
    reachable: Schema.optional(Schema.Boolean),
    cve: Schema.optional(Cve),
    offendingPackage: Schema.optional(Package),
    fixedPackage: Schema.optional(Package),
    securityBulletin: Schema.optional(SecurityBulletin),
    cwes: Schema.optional(Schema.Array(Cwe)),
    providerRiskScore: Schema.optional(Schema.String),
  }).annotate({ identifier: "Vulnerability" });

export interface AdaptiveProtection {
  confidence?: number;
}

export const AdaptiveProtection: Schema.Codec<AdaptiveProtection> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AdaptiveProtection" });

export interface SecurityPolicy {
  name?: string;
  type?: string;
  preview?: boolean;
}

export const SecurityPolicy: Schema.Codec<SecurityPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    preview: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SecurityPolicy" });

export interface Requests {
  ratio?: number;
  longTermDenied?: number;
  shortTermAllowed?: number;
  longTermAllowed?: number;
}

export const Requests: Schema.Codec<Requests> =
  /*@__PURE__*/ Schema.Struct({
    ratio: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Requests" });

export interface CloudArmor {
  duration?: string;
  adaptiveProtection?: AdaptiveProtection;
  attack?: Attack;
  threatVector?: string;
  securityPolicy?: SecurityPolicy;
  requests?: Requests;
}

export const CloudArmor: Schema.Codec<CloudArmor> =
  /*@__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    adaptiveProtection: Schema.optional(AdaptiveProtection),
    attack: Schema.optional(Attack),
    threatVector: Schema.optional(Schema.String),
    securityPolicy: Schema.optional(SecurityPolicy),
    requests: Schema.optional(Requests),
  }).annotate({ identifier: "CloudArmor" });

export interface Disk {
  name?: string;
}

export const Disk: Schema.Codec<Disk> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

export interface OrgPolicy {
  name?: string;
}

export const OrgPolicy: Schema.Codec<OrgPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrgPolicy" });

export interface PolicyViolationSummary {
  outOfScopeResourcesCount?: string;
  policyViolationsCount?: string;
  conformantResourcesCount?: string;
  evaluationErrorsCount?: string;
}

export const PolicyViolationSummary: Schema.Codec<PolicyViolationSummary> =
  /*@__PURE__*/ Schema.Struct({
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    policyViolationsCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
    evaluationErrorsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyViolationSummary" });

export interface DiscoveredWorkload {
  detectedRelevantKeywords?: boolean;
  detectedRelevantPackages?: boolean;
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
  detectedRelevantHardware?: boolean;
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
}

export const DiscoveredWorkload: Schema.Codec<DiscoveredWorkload> =
  /*@__PURE__*/ Schema.Struct({
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.String),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    workloadType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveredWorkload" });

export interface LoadBalancer {
  name?: string;
}

export const LoadBalancer: Schema.Codec<LoadBalancer> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoadBalancer" });

export interface Pipeline {
  name?: string;
  displayName?: string;
}

export const Pipeline: Schema.Codec<Pipeline> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pipeline" });

export interface VertexAi {
  datasets?: ReadonlyArray<Dataset>;
  pipelines?: ReadonlyArray<Pipeline>;
}

export const VertexAi: Schema.Codec<VertexAi> =
  /*@__PURE__*/ Schema.Struct({
    datasets: Schema.optional(Schema.Array(Dataset)),
    pipelines: Schema.optional(Schema.Array(Pipeline)),
  }).annotate({ identifier: "VertexAi" });

export interface DataRetentionDeletionEvent {
  eventDetectionTime?: string;
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
  maxRetentionAllowed?: string;
  dataObjectCount?: string;
  minRetentionAllowed?: string;
}

export const DataRetentionDeletionEvent: Schema.Codec<DataRetentionDeletionEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventDetectionTime: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    minRetentionAllowed: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataRetentionDeletionEvent" });

export interface Job {
  state?:
    | "JOB_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  errorCode?: number;
  location?: string;
  name?: string;
}

export const Job: Schema.Codec<Job> = /*@__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  errorCode: Schema.optional(Schema.Number),
  location: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Job" });

export interface Securitycenter_Object {
  group?: string;
  kind?: string;
  name?: string;
  containers?: ReadonlyArray<Container>;
  ns?: string;
}

export const Securitycenter_Object: Schema.Codec<Securitycenter_Object> =
  /*@__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(Container)),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "Securitycenter_Object" });

export interface Pod {
  containers?: ReadonlyArray<Container>;
  name?: string;
  labels?: ReadonlyArray<Label>;
  ns?: string;
}

export const Pod: Schema.Codec<Pod> = /*@__PURE__*/ Schema.Struct({
  containers: Schema.optional(Schema.Array(Container)),
  name: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Array(Label)),
  ns: Schema.optional(Schema.String),
}).annotate({ identifier: "Pod" });

export interface Node {
  name?: string;
}

export const Node: Schema.Codec<Node> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Node" });

export interface AccessReview {
  ns?: string;
  version?: string;
  verb?: string;
  group?: string;
  name?: string;
  resource?: string;
  subresource?: string;
}

export const AccessReview: Schema.Codec<AccessReview> =
  /*@__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessReview" });

export interface NodePool {
  nodes?: ReadonlyArray<Node>;
  name?: string;
}

export const NodePool: Schema.Codec<NodePool> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(Node)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodePool" });

export interface Role {
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  ns?: string;
  name?: string;
}

export const Role: Schema.Codec<Role> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Role" });

export interface Subject {
  name?: string;
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  ns?: string;
}

export const Subject: Schema.Codec<Subject> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subject" });

export interface GoogleCloudSecuritycenterV1Binding {
  name?: string;
  role?: Role;
  subjects?: ReadonlyArray<Subject>;
  ns?: string;
}

export const GoogleCloudSecuritycenterV1Binding: Schema.Codec<GoogleCloudSecuritycenterV1Binding> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    role: Schema.optional(Role),
    subjects: Schema.optional(Schema.Array(Subject)),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Binding" });

export interface Kubernetes {
  objects?: ReadonlyArray<Securitycenter_Object>;
  pods?: ReadonlyArray<Pod>;
  nodes?: ReadonlyArray<Node>;
  accessReviews?: ReadonlyArray<AccessReview>;
  nodePools?: ReadonlyArray<NodePool>;
  roles?: ReadonlyArray<Role>;
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV1Binding>;
}

export const Kubernetes: Schema.Codec<Kubernetes> =
  /*@__PURE__*/ Schema.Struct({
    objects: Schema.optional(Schema.Array(Securitycenter_Object)),
    pods: Schema.optional(Schema.Array(Pod)),
    nodes: Schema.optional(Schema.Array(Node)),
    accessReviews: Schema.optional(Schema.Array(AccessReview)),
    nodePools: Schema.optional(Schema.Array(NodePool)),
    roles: Schema.optional(Schema.Array(Role)),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV1Binding)),
  }).annotate({ identifier: "Kubernetes" });

export interface SecretEnvironmentVariable {
  key?: string;
}

export const SecretEnvironmentVariable: Schema.Codec<SecretEnvironmentVariable> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretEnvironmentVariable" });

export interface SecretFilePath {
  path?: string;
}

export const SecretFilePath: Schema.Codec<SecretFilePath> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretFilePath" });

export interface SecretStatus {
  lastUpdatedTime?: string;
  validity?:
    | "SECRET_VALIDITY_UNSPECIFIED"
    | "SECRET_VALIDITY_UNSUPPORTED"
    | "SECRET_VALIDITY_FAILED"
    | "SECRET_VALIDITY_INVALID"
    | "SECRET_VALIDITY_VALID"
    | (string & {});
}

export const SecretStatus: Schema.Codec<SecretStatus> =
  /*@__PURE__*/ Schema.Struct({
    lastUpdatedTime: Schema.optional(Schema.String),
    validity: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretStatus" });

export interface Secret {
  environmentVariable?: SecretEnvironmentVariable;
  filePath?: SecretFilePath;
  type?: string;
  status?: SecretStatus;
}

export const Secret: Schema.Codec<Secret> =
  /*@__PURE__*/ Schema.Struct({
    environmentVariable: Schema.optional(SecretEnvironmentVariable),
    filePath: Schema.optional(SecretFilePath),
    type: Schema.optional(Schema.String),
    status: Schema.optional(SecretStatus),
  }).annotate({ identifier: "Secret" });

export interface Contact {
  email?: string;
}

export const Contact: Schema.Codec<Contact> =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Contact" });

export interface ContactDetails {
  contacts?: ReadonlyArray<Contact>;
}

export const ContactDetails: Schema.Codec<ContactDetails> =
  /*@__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(Contact)),
  }).annotate({ identifier: "ContactDetails" });

export interface ExfilResource {
  components?: ReadonlyArray<string>;
  name?: string;
}

export const ExfilResource: Schema.Codec<ExfilResource> =
  /*@__PURE__*/ Schema.Struct({
    components: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExfilResource" });

export interface Exfiltration {
  targets?: ReadonlyArray<ExfilResource>;
  totalExfiltratedBytes?: string;
  sources?: ReadonlyArray<ExfilResource>;
}

export const Exfiltration: Schema.Codec<Exfiltration> =
  /*@__PURE__*/ Schema.Struct({
    targets: Schema.optional(Schema.Array(ExfilResource)),
    totalExfiltratedBytes: Schema.optional(Schema.String),
    sources: Schema.optional(Schema.Array(ExfilResource)),
  }).annotate({ identifier: "Exfiltration" });

export interface Finding {
  externalSystems?: Record<string, GoogleCloudSecuritycenterV1ExternalSystem>;
  createTime?: string;
  cloudDlpInspection?: CloudDlpInspection;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  indicator?: Indicator;
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
  cloudDlpDataProfile?: CloudDlpDataProfile;
  toxicCombination?: ToxicCombination;
  iamDetails?: GoogleCloudSecuritycenterV1IamDetails;
  description?: string;
  complianceDetails?: ComplianceDetails;
  containers?: ReadonlyArray<Container>;
  eventTime?: string;
  dataAccessEvents?: ReadonlyArray<DataAccessEvent>;
  canonicalName?: string;
  compliances?: ReadonlyArray<Compliance>;
  chokepoint?: Chokepoint;
  dataFlowEvents?: ReadonlyArray<DataFlowEvent>;
  processes?: ReadonlyArray<Process>;
  nextSteps?: string;
  agentDataAccessEvents?: ReadonlyArray<AgentDataAccessEvent>;
  backupDisasterRecovery?: BackupDisasterRecovery;
  name?: string;
  files?: ReadonlyArray<File>;
  networks?: ReadonlyArray<Network>;
  securityPosture?: SecurityPosture;
  externalExposure?: ExternalExposure;
  connections?: ReadonlyArray<Connection>;
  database?: Database;
  kernelRootkit?: KernelRootkit;
  artifactGuardPolicies?: ArtifactGuardPolicies;
  iamBindings?: ReadonlyArray<IamBinding>;
  aiModel?: AiModel;
  application?: Application;
  affectedResources?: AffectedResources;
  notebook?: Notebook;
  ipRules?: IpRules;
  resourceName?: string;
  access?: Access;
  logEntries?: ReadonlyArray<LogEntry>;
  groupMemberships?: ReadonlyArray<GroupMembership>;
  muteInfo?: MuteInfo;
  vulnerability?: Vulnerability;
  cloudArmor?: CloudArmor;
  attackExposure?: AttackExposure;
  disk?: Disk;
  orgPolicies?: ReadonlyArray<OrgPolicy>;
  category?: string;
  mitreAttack?: MitreAttack;
  sourceProperties?: Record<string, unknown>;
  policyViolationSummary?: PolicyViolationSummary;
  securityMarks?: SecurityMarks;
  parentDisplayName?: string;
  discoveredWorkload?: DiscoveredWorkload;
  loadBalancers?: ReadonlyArray<LoadBalancer>;
  vertexAi?: VertexAi;
  dataRetentionDeletionEvents?: ReadonlyArray<DataRetentionDeletionEvent>;
  job?: Job;
  muteInitiator?: string;
  kubernetes?: Kubernetes;
  externalUri?: string;
  secret?: Secret;
  contacts?: Record<string, ContactDetails>;
  parent?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  moduleName?: string;
  exfiltration?: Exfiltration;
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  muteUpdateTime?: string;
}

export const Finding: Schema.Codec<Finding> =
  /*@__PURE__*/ Schema.Struct({
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV1ExternalSystem),
    ),
    createTime: Schema.optional(Schema.String),
    cloudDlpInspection: Schema.optional(CloudDlpInspection),
    severity: Schema.optional(Schema.String),
    indicator: Schema.optional(Indicator),
    findingClass: Schema.optional(Schema.String),
    cloudDlpDataProfile: Schema.optional(CloudDlpDataProfile),
    toxicCombination: Schema.optional(ToxicCombination),
    iamDetails: Schema.optional(GoogleCloudSecuritycenterV1IamDetails),
    description: Schema.optional(Schema.String),
    complianceDetails: Schema.optional(ComplianceDetails),
    containers: Schema.optional(Schema.Array(Container)),
    eventTime: Schema.optional(Schema.String),
    dataAccessEvents: Schema.optional(Schema.Array(DataAccessEvent)),
    canonicalName: Schema.optional(Schema.String),
    compliances: Schema.optional(Schema.Array(Compliance)),
    chokepoint: Schema.optional(Chokepoint),
    dataFlowEvents: Schema.optional(Schema.Array(DataFlowEvent)),
    processes: Schema.optional(Schema.Array(Process)),
    nextSteps: Schema.optional(Schema.String),
    agentDataAccessEvents: Schema.optional(Schema.Array(AgentDataAccessEvent)),
    backupDisasterRecovery: Schema.optional(BackupDisasterRecovery),
    name: Schema.optional(Schema.String),
    files: Schema.optional(Schema.Array(File)),
    networks: Schema.optional(Schema.Array(Network)),
    securityPosture: Schema.optional(SecurityPosture),
    externalExposure: Schema.optional(ExternalExposure),
    connections: Schema.optional(Schema.Array(Connection)),
    database: Schema.optional(Database),
    kernelRootkit: Schema.optional(KernelRootkit),
    artifactGuardPolicies: Schema.optional(ArtifactGuardPolicies),
    iamBindings: Schema.optional(Schema.Array(IamBinding)),
    aiModel: Schema.optional(AiModel),
    application: Schema.optional(Application),
    affectedResources: Schema.optional(AffectedResources),
    notebook: Schema.optional(Notebook),
    ipRules: Schema.optional(IpRules),
    resourceName: Schema.optional(Schema.String),
    access: Schema.optional(Access),
    logEntries: Schema.optional(Schema.Array(LogEntry)),
    groupMemberships: Schema.optional(Schema.Array(GroupMembership)),
    muteInfo: Schema.optional(MuteInfo),
    vulnerability: Schema.optional(Vulnerability),
    cloudArmor: Schema.optional(CloudArmor),
    attackExposure: Schema.optional(AttackExposure),
    disk: Schema.optional(Disk),
    orgPolicies: Schema.optional(Schema.Array(OrgPolicy)),
    category: Schema.optional(Schema.String),
    mitreAttack: Schema.optional(MitreAttack),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    policyViolationSummary: Schema.optional(PolicyViolationSummary),
    securityMarks: Schema.optional(SecurityMarks),
    parentDisplayName: Schema.optional(Schema.String),
    discoveredWorkload: Schema.optional(DiscoveredWorkload),
    loadBalancers: Schema.optional(Schema.Array(LoadBalancer)),
    vertexAi: Schema.optional(VertexAi),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(DataRetentionDeletionEvent),
    ),
    job: Schema.optional(Job),
    muteInitiator: Schema.optional(Schema.String),
    kubernetes: Schema.optional(Kubernetes),
    externalUri: Schema.optional(Schema.String),
    secret: Schema.optional(Secret),
    contacts: Schema.optional(Schema.Record(Schema.String, ContactDetails)),
    parent: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    moduleName: Schema.optional(Schema.String),
    exfiltration: Schema.optional(Exfiltration),
    mute: Schema.optional(Schema.String),
    muteUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Finding" });

export interface ListFindingsResult {
  stateChange?:
    | "UNUSED"
    | "CHANGED"
    | "UNCHANGED"
    | "ADDED"
    | "REMOVED"
    | (string & {});
  resource?: Resource;
  finding?: Finding;
}

export const ListFindingsResult: Schema.Codec<ListFindingsResult> =
  /*@__PURE__*/ Schema.Struct({
    stateChange: Schema.optional(Schema.String),
    resource: Schema.optional(Resource),
    finding: Schema.optional(Finding),
  }).annotate({ identifier: "ListFindingsResult" });

export interface ListFindingsResponse {
  totalSize?: number;
  nextPageToken?: string;
  listFindingsResults?: ReadonlyArray<ListFindingsResult>;
  readTime?: string;
}

export const ListFindingsResponse: Schema.Codec<ListFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
    listFindingsResults: Schema.optional(Schema.Array(ListFindingsResult)),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFindingsResponse" });

export interface GoogleCloudSecuritycenterV2Dataset {
  source?: string;
  name?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Dataset: Schema.Codec<GoogleCloudSecuritycenterV2Dataset> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Dataset" });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality {
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality",
  });

export interface GoogleCloudSecuritycenterV2Role {
  name?: string;
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Role: Schema.Codec<GoogleCloudSecuritycenterV2Role> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Role" });

export interface Binding {
  condition?: Expr;
  role?: string;
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Codec<Binding> =
  /*@__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  version?: number;
  auditConfigs?: ReadonlyArray<AuditConfig>;
  bindings?: ReadonlyArray<Binding>;
  etag?: string;
}

export const Policy: Schema.Codec<Policy> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    bindings: Schema.optional(Schema.Array(Binding)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface SimulatedResource {
  iamPolicyData?: Policy;
  resourceType?: string;
  resourceData?: Record<string, unknown>;
}

export const SimulatedResource: Schema.Codec<SimulatedResource> =
  /*@__PURE__*/ Schema.Struct({
    iamPolicyData: Schema.optional(Policy),
    resourceType: Schema.optional(Schema.String),
    resourceData: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "SimulatedResource" });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality {
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality: Schema.Codec<GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment {
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment: Schema.Codec<GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributes {
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  criticality?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality;
  environment?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV2ResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality,
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

export interface GoogleCloudSecuritycenterV2AdcApplication {
  name?: string;
  attributes?: GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2AdcApplication: Schema.Codec<GoogleCloudSecuritycenterV2AdcApplication> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdcApplication" });

export interface GoogleCloudSecuritycenterV2PortRange {
  max?: string;
  min?: string;
}

export const GoogleCloudSecuritycenterV2PortRange: Schema.Codec<GoogleCloudSecuritycenterV2PortRange> =
  /*@__PURE__*/ Schema.Struct({
    max: Schema.optional(Schema.String),
    min: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2PortRange" });

export interface GoogleCloudSecuritycenterV2IpRule {
  protocol?: string;
  portRanges?: ReadonlyArray<GoogleCloudSecuritycenterV2PortRange>;
}

export const GoogleCloudSecuritycenterV2IpRule: Schema.Codec<GoogleCloudSecuritycenterV2IpRule> =
  /*@__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    portRanges: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PortRange),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRule" });

export interface GoogleCloudSecuritycenterV2Denied {
  ipRules?: ReadonlyArray<GoogleCloudSecuritycenterV2IpRule>;
}

export const GoogleCloudSecuritycenterV2Denied: Schema.Codec<GoogleCloudSecuritycenterV2Denied> =
  /*@__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2IpRule)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Denied" });

export interface GoogleCloudSecuritycenterV2Allowed {
  ipRules?: ReadonlyArray<GoogleCloudSecuritycenterV2IpRule>;
}

export const GoogleCloudSecuritycenterV2Allowed: Schema.Codec<GoogleCloudSecuritycenterV2Allowed> =
  /*@__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2IpRule)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Allowed" });

export interface GoogleCloudSecuritycenterV2IpRules {
  destinationIpRanges?: ReadonlyArray<string>;
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  denied?: GoogleCloudSecuritycenterV2Denied;
  exposedServices?: ReadonlyArray<string>;
  allowed?: GoogleCloudSecuritycenterV2Allowed;
  sourceIpRanges?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2IpRules: Schema.Codec<GoogleCloudSecuritycenterV2IpRules> =
  /*@__PURE__*/ Schema.Struct({
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    direction: Schema.optional(Schema.String),
    denied: Schema.optional(GoogleCloudSecuritycenterV2Denied),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
    allowed: Schema.optional(GoogleCloudSecuritycenterV2Allowed),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRules" });

export interface GoogleCloudSecuritycenterV1p1beta1Folder {
  resourceFolder?: string;
  resourceFolderDisplayName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Folder: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1Folder> =
  /*@__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Folder" });

export interface GoogleCloudSecuritycenterV1p1beta1Resource {
  projectDisplayName?: string;
  name?: string;
  project?: string;
  parentDisplayName?: string;
  parent?: string;
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV1p1beta1Folder>;
}

export const GoogleCloudSecuritycenterV1p1beta1Resource: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1Resource> =
  /*@__PURE__*/ Schema.Struct({
    projectDisplayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    folders: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1p1beta1Folder),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Resource" });

export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
  marks?: Record<string, string>;
  name?: string;
  canonicalName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1SecurityMarks: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1SecurityMarks> =
  /*@__PURE__*/ Schema.Struct({
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1SecurityMarks",
  });

export interface GoogleCloudSecuritycenterV1p1beta1Finding {
  securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  externalUri?: string;
  name?: string;
  parent?: string;
  eventTime?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  createTime?: string;
  canonicalName?: string;
  sourceProperties?: Record<string, unknown>;
  resourceName?: string;
  category?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Finding: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1Finding> =
  /*@__PURE__*/ Schema.Struct({
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1p1beta1SecurityMarks,
    ),
    severity: Schema.optional(Schema.String),
    externalUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    resourceName: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Finding" });

export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
  resource?: GoogleCloudSecuritycenterV1p1beta1Resource;
  notificationConfigName?: string;
  finding?: GoogleCloudSecuritycenterV1p1beta1Finding;
}

export const GoogleCloudSecuritycenterV1p1beta1NotificationMessage: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1NotificationMessage> =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Resource),
    notificationConfigName: Schema.optional(Schema.String),
    finding: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Finding),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1NotificationMessage",
  });

export interface GoogleCloudSecuritycenterV2Label {
  name?: string;
  value?: string;
}

export const GoogleCloudSecuritycenterV2Label: Schema.Codec<GoogleCloudSecuritycenterV2Label> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Label" });

export interface GoogleCloudSecuritycenterV2Container {
  uri?: string;
  name?: string;
  imageId?: string;
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  createTime?: string;
}

export const GoogleCloudSecuritycenterV2Container: Schema.Codec<GoogleCloudSecuritycenterV2Container> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Container" });

export interface GoogleCloudSecuritycenterV2Object {
  ns?: string;
  group?: string;
  kind?: string;
  name?: string;
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
}

export const GoogleCloudSecuritycenterV2Object: Schema.Codec<GoogleCloudSecuritycenterV2Object> =
  /*@__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Object" });

export interface GoogleCloudSecuritycenterV2Reference {
  source?: string;
  uri?: string;
}

export const GoogleCloudSecuritycenterV2Reference: Schema.Codec<GoogleCloudSecuritycenterV2Reference> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Reference" });

export interface GoogleCloudSecuritycenterV2Cvssv3 {
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  baseScore?: number;
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | (string & {});
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2Cvssv3: Schema.Codec<GoogleCloudSecuritycenterV2Cvssv3> =
  /*@__PURE__*/ Schema.Struct({
    attackVector: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    scope: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cvssv3" });

export interface GoogleCloudSecuritycenterV2Cve {
  upstreamFixAvailable?: boolean;
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
  cvssv3?: GoogleCloudSecuritycenterV2Cvssv3;
  exploitReleaseDate?: string;
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  zeroDay?: boolean;
  observedInTheWild?: boolean;
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  firstExploitationDate?: string;
  id?: string;
}

export const GoogleCloudSecuritycenterV2Cve: Schema.Codec<GoogleCloudSecuritycenterV2Cve> =
  /*@__PURE__*/ Schema.Struct({
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
    cvssv3: Schema.optional(GoogleCloudSecuritycenterV2Cvssv3),
    exploitReleaseDate: Schema.optional(Schema.String),
    impact: Schema.optional(Schema.String),
    zeroDay: Schema.optional(Schema.Boolean),
    observedInTheWild: Schema.optional(Schema.Boolean),
    exploitationActivity: Schema.optional(Schema.String),
    firstExploitationDate: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cve" });

export interface GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata {
  projectId?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata> =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo {
  email?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment {
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes {
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  criticality?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality;
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  environment?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality,
    ),
    operatorOwners: Schema.optional(
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

export interface GoogleCloudSecuritycenterV2IssueResourceApplication {
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplication: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceApplication> =
  /*@__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplication",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcApplication {
  name?: string;
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcApplication: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceAdcApplication> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAdcApplication",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription {
  id?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAzureMetadata {
  subscription?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription;
}

export const GoogleCloudSecuritycenterV2IssueResourceAzureMetadata: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceAzureMetadata> =
  /*@__PURE__*/ Schema.Struct({
    subscription: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAzureMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount {
  id?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAwsMetadata {
  account?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount;
}

export const GoogleCloudSecuritycenterV2IssueResourceAwsMetadata: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceAwsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    account: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAwsMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision {
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision {
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2IssueResource {
  googleCloudMetadata?: GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata;
  application?: GoogleCloudSecuritycenterV2IssueResourceApplication;
  adcApplication?: GoogleCloudSecuritycenterV2IssueResourceAdcApplication;
  azureMetadata?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadata;
  name?: string;
  type?: string;
  awsMetadata?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadata;
  displayName?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision;
  adcSharedTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision;
}

export const GoogleCloudSecuritycenterV2IssueResource: Schema.Codec<GoogleCloudSecuritycenterV2IssueResource> =
  /*@__PURE__*/ Schema.Struct({
    googleCloudMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata,
    ),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplication,
    ),
    adcApplication: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplication,
    ),
    azureMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAzureMetadata,
    ),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadata,
    ),
    displayName: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision,
    ),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueResource" });

export interface AttackStepNode {
  uuid?: string;
  description?: string;
  type?:
    | "NODE_TYPE_UNSPECIFIED"
    | "NODE_TYPE_AND"
    | "NODE_TYPE_OR"
    | "NODE_TYPE_DEFENSE"
    | "NODE_TYPE_ATTACKER"
    | (string & {});
  labels?: Record<string, string>;
  displayName?: string;
}

export const AttackStepNode: Schema.Codec<AttackStepNode> =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttackStepNode" });

export interface GoogleCloudSecuritycenterV2BackupDisasterRecovery {
  host?: string;
  applications?: ReadonlyArray<string>;
  appliance?: string;
  backupType?: string;
  backupCreateTime?: string;
  policyOptions?: ReadonlyArray<string>;
  profile?: string;
  policies?: ReadonlyArray<string>;
  storagePool?: string;
  backupTemplate?: string;
}

export const GoogleCloudSecuritycenterV2BackupDisasterRecovery: Schema.Codec<GoogleCloudSecuritycenterV2BackupDisasterRecovery> =
  /*@__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
    appliance: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    backupCreateTime: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    profile: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    storagePool: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2BackupDisasterRecovery",
  });

export interface SetFindingStateRequest {
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  startTime?: string;
}

export const SetFindingStateRequest: Schema.Codec<SetFindingStateRequest> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetFindingStateRequest" });

export interface GoogleCloudSecuritycenterV2Detection {
  binary?: string;
  percentPagesMatched?: number;
}

export const GoogleCloudSecuritycenterV2Detection: Schema.Codec<GoogleCloudSecuritycenterV2Detection> =
  /*@__PURE__*/ Schema.Struct({
    binary: Schema.optional(Schema.String),
    percentPagesMatched: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Detection" });

export interface GoogleCloudSecuritycenterV2MemoryHashSignature {
  binaryFamily?: string;
  detections?: ReadonlyArray<GoogleCloudSecuritycenterV2Detection>;
}

export const GoogleCloudSecuritycenterV2MemoryHashSignature: Schema.Codec<GoogleCloudSecuritycenterV2MemoryHashSignature> =
  /*@__PURE__*/ Schema.Struct({
    binaryFamily: Schema.optional(Schema.String),
    detections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Detection),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MemoryHashSignature" });

export interface GoogleCloudSecuritycenterV2FileOperation {
  type?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "OPEN"
    | "READ"
    | "RENAME"
    | "WRITE"
    | "EXECUTE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2FileOperation: Schema.Codec<GoogleCloudSecuritycenterV2FileOperation> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2FileOperation" });

export interface GoogleCloudSecuritycenterV2DiskPath {
  partitionUuid?: string;
  relativePath?: string;
}

export const GoogleCloudSecuritycenterV2DiskPath: Schema.Codec<GoogleCloudSecuritycenterV2DiskPath> =
  /*@__PURE__*/ Schema.Struct({
    partitionUuid: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiskPath" });

export interface GoogleCloudSecuritycenterV2File {
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  size?: string;
  operations?: ReadonlyArray<GoogleCloudSecuritycenterV2FileOperation>;
  partiallyHashed?: boolean;
  diskPath?: GoogleCloudSecuritycenterV2DiskPath;
  hashedSize?: string;
  path?: string;
  sha256?: string;
  contents?: string;
}

export const GoogleCloudSecuritycenterV2File: Schema.Codec<GoogleCloudSecuritycenterV2File> =
  /*@__PURE__*/ Schema.Struct({
    fileLoadState: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2FileOperation),
    ),
    partiallyHashed: Schema.optional(Schema.Boolean),
    diskPath: Schema.optional(GoogleCloudSecuritycenterV2DiskPath),
    hashedSize: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2File" });

export interface RunAssetDiscoveryRequest {}

export const RunAssetDiscoveryRequest: Schema.Codec<RunAssetDiscoveryRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RunAssetDiscoveryRequest",
  });

export interface GoogleCloudSecuritycenterV2Chokepoint {
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Chokepoint: Schema.Codec<GoogleCloudSecuritycenterV2Chokepoint> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Chokepoint" });

export interface GetPolicyOptions {
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Codec<GetPolicyOptions> =
  /*@__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface GetIamPolicyRequest {
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Codec<GetIamPolicyRequest> =
  /*@__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface SetMuteRequest {
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
}

export const SetMuteRequest: Schema.Codec<SetMuteRequest> =
  /*@__PURE__*/ Schema.Struct({
    mute: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetMuteRequest" });

export interface GoogleCloudSecuritycenterV2Compliance {
  version?: string;
  standard?: string;
  ids?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Compliance: Schema.Codec<GoogleCloudSecuritycenterV2Compliance> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    standard: Schema.optional(Schema.String),
    ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Compliance" });

export interface SecurityCenterProperties {
  resourceParentDisplayName?: string;
  resourceProjectDisplayName?: string;
  folders?: ReadonlyArray<Folder>;
  resourceParent?: string;
  resourceName?: string;
  resourceProject?: string;
  resourceOwners?: ReadonlyArray<string>;
  resourceDisplayName?: string;
  resourceType?: string;
}

export const SecurityCenterProperties: Schema.Codec<SecurityCenterProperties> =
  /*@__PURE__*/ Schema.Struct({
    resourceParentDisplayName: Schema.optional(Schema.String),
    resourceProjectDisplayName: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(Folder)),
    resourceParent: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    resourceProject: Schema.optional(Schema.String),
    resourceOwners: Schema.optional(Schema.Array(Schema.String)),
    resourceDisplayName: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityCenterProperties" });

export interface GoogleCloudSecuritycenterV2Contact {
  email?: string;
}

export const GoogleCloudSecuritycenterV2Contact: Schema.Codec<GoogleCloudSecuritycenterV2Contact> =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Contact" });

export interface GoogleCloudSecuritycenterV2ContactDetails {
  contacts?: ReadonlyArray<GoogleCloudSecuritycenterV2Contact>;
}

export const GoogleCloudSecuritycenterV2ContactDetails: Schema.Codec<GoogleCloudSecuritycenterV2ContactDetails> =
  /*@__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Contact)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ContactDetails" });

export interface ExportFindingsResponse {}

export const ExportFindingsResponse: Schema.Codec<ExportFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExportFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV2Package {
  packageName?: string;
  cpeUri?: string;
  packageType?: string;
  packageVersion?: string;
}

export const GoogleCloudSecuritycenterV2Package: Schema.Codec<GoogleCloudSecuritycenterV2Package> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Package" });

export interface GoogleCloudSecuritycenterV2BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV2BulkMuteFindingsResponse: Schema.Codec<GoogleCloudSecuritycenterV2BulkMuteFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV2BulkMuteFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV2Pod {
  name?: string;
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  ns?: string;
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
}

export const GoogleCloudSecuritycenterV2Pod: Schema.Codec<GoogleCloudSecuritycenterV2Pod> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    ns: Schema.optional(Schema.String),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pod" });

export interface GoogleCloudSecuritycenterV2TicketInfo {
  status?: string;
  description?: string;
  id?: string;
  uri?: string;
  updateTime?: string;
  assignee?: string;
}

export const GoogleCloudSecuritycenterV2TicketInfo: Schema.Codec<GoogleCloudSecuritycenterV2TicketInfo> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2TicketInfo" });

export interface GoogleCloudSecuritycenterV1BigQueryExport {
  description?: string;
  createTime?: string;
  name?: string;
  dataset?: string;
  mostRecentEditor?: string;
  filter?: string;
  updateTime?: string;
  principal?: string;
}

export const GoogleCloudSecuritycenterV1BigQueryExport: Schema.Codec<GoogleCloudSecuritycenterV1BigQueryExport> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1BigQueryExport" });

export interface ListBigQueryExportsResponse {
  bigQueryExports?: ReadonlyArray<GoogleCloudSecuritycenterV1BigQueryExport>;
  nextPageToken?: string;
}

export const ListBigQueryExportsResponse: Schema.Codec<ListBigQueryExportsResponse> =
  /*@__PURE__*/ Schema.Struct({
    bigQueryExports: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1BigQueryExport),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBigQueryExportsResponse" });

export interface GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
  duration?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse: Schema.Codec<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse",
  });

export interface IamPolicy {
  policyBlob?: string;
}

export const IamPolicy: Schema.Codec<IamPolicy> =
  /*@__PURE__*/ Schema.Struct({
    policyBlob: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamPolicy" });

export interface Asset {
  createTime?: string;
  iamPolicy?: IamPolicy;
  canonicalName?: string;
  name?: string;
  securityMarks?: SecurityMarks;
  securityCenterProperties?: SecurityCenterProperties;
  updateTime?: string;
  resourceProperties?: Record<string, unknown>;
}

export const Asset: Schema.Codec<Asset> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    iamPolicy: Schema.optional(IamPolicy),
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    securityMarks: Schema.optional(SecurityMarks),
    securityCenterProperties: Schema.optional(SecurityCenterProperties),
    updateTime: Schema.optional(Schema.String),
    resourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "Asset" });

export interface ListAssetsResult {
  asset?: Asset;
  stateChange?: "UNUSED" | "ADDED" | "REMOVED" | "ACTIVE" | (string & {});
}

export const ListAssetsResult: Schema.Codec<ListAssetsResult> =
  /*@__PURE__*/ Schema.Struct({
    asset: Schema.optional(Asset),
    stateChange: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAssetsResult" });

export interface GroupResult {
  count?: string;
  properties?: Record<string, unknown>;
}

export const GroupResult: Schema.Codec<GroupResult> =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GroupResult" });

export interface GroupAssetsResponse {
  readTime?: string;
  totalSize?: number;
  groupByResults?: ReadonlyArray<GroupResult>;
  nextPageToken?: string;
}

export const GroupAssetsResponse: Schema.Codec<GroupAssetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    groupByResults: Schema.optional(Schema.Array(GroupResult)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupAssetsResponse" });

export interface GoogleCloudSecuritycenterV2Requests {
  shortTermAllowed?: number;
  longTermAllowed?: number;
  ratio?: number;
  longTermDenied?: number;
}

export const GoogleCloudSecuritycenterV2Requests: Schema.Codec<GoogleCloudSecuritycenterV2Requests> =
  /*@__PURE__*/ Schema.Struct({
    shortTermAllowed: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
    ratio: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Requests" });

export interface GoogleCloudSecuritycenterV2Pipeline {
  name?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Pipeline: Schema.Codec<GoogleCloudSecuritycenterV2Pipeline> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pipeline" });

export interface GoogleCloudSecuritycenterV2AccessReview {
  verb?: string;
  version?: string;
  ns?: string;
  resource?: string;
  subresource?: string;
  name?: string;
  group?: string;
}

export const GoogleCloudSecuritycenterV2AccessReview: Schema.Codec<GoogleCloudSecuritycenterV2AccessReview> =
  /*@__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AccessReview" });

export interface GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping {
  highSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  mediumSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping: Schema.Codec<GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping> =
  /*@__PURE__*/ Schema.Struct({
    highSensitivityMapping: Schema.optional(Schema.String),
    mediumSensitivityMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping",
  });

export interface GoogleCloudSecuritycenterV2ResourceValueConfig {
  description?: string;
  name?: string;
  tagValues?: ReadonlyArray<string>;
  resourceLabelsSelector?: Record<string, string>;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping;
  resourceType?: string;
  updateTime?: string;
  scope?: string;
  createTime?: string;
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ResourceValueConfig: Schema.Codec<GoogleCloudSecuritycenterV2ResourceValueConfig> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    cloudProvider: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping,
    ),
    resourceType: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    resourceValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceValueConfig" });

export interface GoogleCloudSecuritycenterV2Notebook {
  name?: string;
  lastAuthor?: string;
  service?: string;
  notebookUpdateTime?: string;
}

export const GoogleCloudSecuritycenterV2Notebook: Schema.Codec<GoogleCloudSecuritycenterV2Notebook> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Notebook" });

export interface StreamingConfig {
  filter?: string;
}

export const StreamingConfig: Schema.Codec<StreamingConfig> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingConfig" });

export interface NotificationConfig {
  pubsubTopic?: string;
  name?: string;
  serviceAccount?: string;
  streamingConfig?: StreamingConfig;
  description?: string;
}

export const NotificationConfig: Schema.Codec<NotificationConfig> =
  /*@__PURE__*/ Schema.Struct({
    pubsubTopic: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    streamingConfig: Schema.optional(StreamingConfig),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotificationConfig" });

export interface ListNotificationConfigsResponse {
  notificationConfigs?: ReadonlyArray<NotificationConfig>;
  nextPageToken?: string;
}

export const ListNotificationConfigsResponse: Schema.Codec<ListNotificationConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    notificationConfigs: Schema.optional(Schema.Array(NotificationConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNotificationConfigsResponse" });

export interface GoogleCloudSecuritycenterV2SecretEnvironmentVariable {
  key?: string;
}

export const GoogleCloudSecuritycenterV2SecretEnvironmentVariable: Schema.Codec<GoogleCloudSecuritycenterV2SecretEnvironmentVariable> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2SecretEnvironmentVariable",
  });

export interface GoogleCloudSecuritycenterV2SecretFilePath {
  path?: string;
}

export const GoogleCloudSecuritycenterV2SecretFilePath: Schema.Codec<GoogleCloudSecuritycenterV2SecretFilePath> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecretFilePath" });

export interface GoogleCloudSecuritycenterV2SecretStatus {
  lastUpdatedTime?: string;
  validity?:
    | "SECRET_VALIDITY_UNSPECIFIED"
    | "SECRET_VALIDITY_UNSUPPORTED"
    | "SECRET_VALIDITY_FAILED"
    | "SECRET_VALIDITY_INVALID"
    | "SECRET_VALIDITY_VALID"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SecretStatus: Schema.Codec<GoogleCloudSecuritycenterV2SecretStatus> =
  /*@__PURE__*/ Schema.Struct({
    lastUpdatedTime: Schema.optional(Schema.String),
    validity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecretStatus" });

export interface GoogleCloudSecuritycenterV2Secret {
  environmentVariable?: GoogleCloudSecuritycenterV2SecretEnvironmentVariable;
  filePath?: GoogleCloudSecuritycenterV2SecretFilePath;
  type?: string;
  status?: GoogleCloudSecuritycenterV2SecretStatus;
}

export const GoogleCloudSecuritycenterV2Secret: Schema.Codec<GoogleCloudSecuritycenterV2Secret> =
  /*@__PURE__*/ Schema.Struct({
    environmentVariable: Schema.optional(
      GoogleCloudSecuritycenterV2SecretEnvironmentVariable,
    ),
    filePath: Schema.optional(GoogleCloudSecuritycenterV2SecretFilePath),
    type: Schema.optional(Schema.String),
    status: Schema.optional(GoogleCloudSecuritycenterV2SecretStatus),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Secret" });

export interface GoogleCloudSecuritycenterV2Network {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Network: Schema.Codec<GoogleCloudSecuritycenterV2Network> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Network" });

export interface PathNodeAssociatedFinding {
  canonicalFinding?: string;
  findingCategory?: string;
  name?: string;
}

export const PathNodeAssociatedFinding: Schema.Codec<PathNodeAssociatedFinding> =
  /*@__PURE__*/ Schema.Struct({
    canonicalFinding: Schema.optional(Schema.String),
    findingCategory: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PathNodeAssociatedFinding" });

export interface AttackPathNode {
  resourceType?: string;
  displayName?: string;
  attackSteps?: ReadonlyArray<AttackStepNode>;
  resource?: string;
  associatedFindings?: ReadonlyArray<PathNodeAssociatedFinding>;
  uuid?: string;
}

export const AttackPathNode: Schema.Codec<AttackPathNode> =
  /*@__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    attackSteps: Schema.optional(Schema.Array(AttackStepNode)),
    resource: Schema.optional(Schema.String),
    associatedFindings: Schema.optional(
      Schema.Array(PathNodeAssociatedFinding),
    ),
    uuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttackPathNode" });

export interface AttackPathEdge {
  source?: string;
  destination?: string;
}

export const AttackPathEdge: Schema.Codec<AttackPathEdge> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttackPathEdge" });

export interface AttackPath {
  name?: string;
  pathNodes?: ReadonlyArray<AttackPathNode>;
  edges?: ReadonlyArray<AttackPathEdge>;
}

export const AttackPath: Schema.Codec<AttackPath> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    pathNodes: Schema.optional(Schema.Array(AttackPathNode)),
    edges: Schema.optional(Schema.Array(AttackPathEdge)),
  }).annotate({ identifier: "AttackPath" });

export interface ListAttackPathsResponse {
  attackPaths?: ReadonlyArray<AttackPath>;
  nextPageToken?: string;
}

export const ListAttackPathsResponse: Schema.Codec<ListAttackPathsResponse> =
  /*@__PURE__*/ Schema.Struct({
    attackPaths: Schema.optional(Schema.Array(AttackPath)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAttackPathsResponse" });

export interface GoogleCloudSecuritycenterV2ResourcePathNode {
  displayName?: string;
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
  id?: string;
}

export const GoogleCloudSecuritycenterV2ResourcePathNode: Schema.Codec<GoogleCloudSecuritycenterV2ResourcePathNode> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    nodeType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePathNode" });

export interface GoogleCloudSecuritycenterV2Database {
  query?: string;
  grantees?: ReadonlyArray<string>;
  name?: string;
  userName?: string;
  displayName?: string;
  version?: string;
}

export const GoogleCloudSecuritycenterV2Database: Schema.Codec<GoogleCloudSecuritycenterV2Database> =
  /*@__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Database" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoogleCloudSecuritycenterV1Resource {
  adcApplication?: AdcApplication;
  service?: string;
  parent?: string;
  folders?: ReadonlyArray<Folder>;
  application?: GoogleCloudSecuritycenterV1ResourceApplication;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  location?: string;
  parentDisplayName?: string;
  adcApplicationTemplate?: AdcApplicationTemplateRevision;
  adcSharedTemplate?: AdcSharedTemplateRevision;
  name?: string;
  resourcePath?: ResourcePath;
  awsMetadata?: AwsMetadata;
  project?: string;
  azureMetadata?: AzureMetadata;
  displayName?: string;
  organization?: string;
  resourcePathString?: string;
  type?: string;
  projectDisplayName?: string;
}

export const GoogleCloudSecuritycenterV1Resource: Schema.Codec<GoogleCloudSecuritycenterV1Resource> =
  /*@__PURE__*/ Schema.Struct({
    adcApplication: Schema.optional(AdcApplication),
    service: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(Folder)),
    application: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplication,
    ),
    cloudProvider: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(AdcApplicationTemplateRevision),
    adcSharedTemplate: Schema.optional(AdcSharedTemplateRevision),
    name: Schema.optional(Schema.String),
    resourcePath: Schema.optional(ResourcePath),
    awsMetadata: Schema.optional(AwsMetadata),
    project: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(AzureMetadata),
    displayName: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    resourcePathString: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Resource" });

export interface GoogleCloudSecuritycenterV2HttpResponse {
  statusCode?: string;
  path?: string;
}

export const GoogleCloudSecuritycenterV2HttpResponse: Schema.Codec<GoogleCloudSecuritycenterV2HttpResponse> =
  /*@__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2HttpResponse" });

export interface GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
  name?: string;
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  displayName?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule: Schema.Codec<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    enablementState: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule",
  });

export interface TestIamPermissionsResponse {
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Codec<TestIamPermissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface TestIamPermissionsRequest {
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Codec<TestIamPermissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface GoogleCloudSecuritycenterV2IamRolePermission {
  name?: string;
  role?: string;
}

export const GoogleCloudSecuritycenterV2IamRolePermission: Schema.Codec<GoogleCloudSecuritycenterV2IamRolePermission> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamRolePermission" });

export interface GoogleCloudSecuritycenterV2ExternalSystem {
  externalUid?: string;
  status?: string;
  externalSystemUpdateTime?: string;
  caseCloseTime?: string;
  assignees?: ReadonlyArray<string>;
  caseUri?: string;
  casePriority?: string;
  name?: string;
  caseSla?: string;
  ticketInfo?: GoogleCloudSecuritycenterV2TicketInfo;
  caseCreateTime?: string;
}

export const GoogleCloudSecuritycenterV2ExternalSystem: Schema.Codec<GoogleCloudSecuritycenterV2ExternalSystem> =
  /*@__PURE__*/ Schema.Struct({
    externalUid: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    caseUri: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(GoogleCloudSecuritycenterV2TicketInfo),
    caseCreateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalSystem" });

export interface GoogleCloudSecuritycenterV2AdcSharedTemplateRevision {
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcSharedTemplateRevision: Schema.Codec<GoogleCloudSecuritycenterV2AdcSharedTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcSharedTemplateRevision",
  });

export interface EffectiveEventThreatDetectionCustomModule {
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  displayName?: string;
  description?: string;
  name?: string;
  config?: Record<string, unknown>;
  type?: string;
}

export const EffectiveEventThreatDetectionCustomModule: Schema.Codec<EffectiveEventThreatDetectionCustomModule> =
  /*@__PURE__*/ Schema.Struct({
    cloudProvider: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    config: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "EffectiveEventThreatDetectionCustomModule" });

export interface ListEffectiveEventThreatDetectionCustomModulesResponse {
  effectiveEventThreatDetectionCustomModules?: ReadonlyArray<EffectiveEventThreatDetectionCustomModule>;
  nextPageToken?: string;
}

export const ListEffectiveEventThreatDetectionCustomModulesResponse: Schema.Codec<ListEffectiveEventThreatDetectionCustomModulesResponse> =
  /*@__PURE__*/ Schema.Struct({
    effectiveEventThreatDetectionCustomModules: Schema.optional(
      Schema.Array(EffectiveEventThreatDetectionCustomModule),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListEffectiveEventThreatDetectionCustomModulesResponse",
  });

export interface GoogleCloudSecuritycenterV2Job {
  name?: string;
  location?: string;
  errorCode?: number;
  state?:
    | "JOB_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2Job: Schema.Codec<GoogleCloudSecuritycenterV2Job> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Job" });

export interface GoogleCloudSecuritycenterV2ToxicCombination {
  attackExposureScore?: number;
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2ToxicCombination: Schema.Codec<GoogleCloudSecuritycenterV2ToxicCombination> =
  /*@__PURE__*/ Schema.Struct({
    attackExposureScore: Schema.optional(Schema.Number),
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ToxicCombination" });

export interface GoogleCloudSecuritycenterV2Attack {
  volumeBpsLong?: string;
  volumeBps?: number;
  classification?: string;
  volumePps?: number;
  volumePpsLong?: string;
}

export const GoogleCloudSecuritycenterV2Attack: Schema.Codec<GoogleCloudSecuritycenterV2Attack> =
  /*@__PURE__*/ Schema.Struct({
    volumeBpsLong: Schema.optional(Schema.String),
    volumeBps: Schema.optional(Schema.Number),
    classification: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    volumePpsLong: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Attack" });

export interface GoogleCloudSecuritycenterV2AttackExposure {
  exposedHighValueResourcesCount?: number;
  score?: number;
  latestCalculationTime?: string;
  attackExposureResult?: string;
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  exposedMediumValueResourcesCount?: number;
  exposedLowValueResourcesCount?: number;
}

export const GoogleCloudSecuritycenterV2AttackExposure: Schema.Codec<GoogleCloudSecuritycenterV2AttackExposure> =
  /*@__PURE__*/ Schema.Struct({
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    latestCalculationTime: Schema.optional(Schema.String),
    attackExposureResult: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AttackExposure" });

export interface BulkMuteFindingsRequest {
  filter?: string;
  muteState?: "MUTE_STATE_UNSPECIFIED" | "MUTED" | "UNDEFINED" | (string & {});
  muteAnnotation?: string;
}

export const BulkMuteFindingsRequest: Schema.Codec<BulkMuteFindingsRequest> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    muteState: Schema.optional(Schema.String),
    muteAnnotation: Schema.optional(Schema.String),
  }).annotate({ identifier: "BulkMuteFindingsRequest" });

export interface CreateResourceValueConfigRequest {
  parent?: string;
  resourceValueConfig?: GoogleCloudSecuritycenterV1ResourceValueConfig;
}

export const CreateResourceValueConfigRequest: Schema.Codec<CreateResourceValueConfigRequest> =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    resourceValueConfig: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceValueConfig,
    ),
  }).annotate({ identifier: "CreateResourceValueConfigRequest" });

export interface GoogleCloudSecuritycenterV2AzureResourceGroup {
  id?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2AzureResourceGroup: Schema.Codec<GoogleCloudSecuritycenterV2AzureResourceGroup> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureResourceGroup" });

export interface GroupFindingsResponse {
  readTime?: string;
  totalSize?: number;
  groupByResults?: ReadonlyArray<GroupResult>;
  nextPageToken?: string;
}

export const GroupFindingsResponse: Schema.Codec<GroupFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    groupByResults: Schema.optional(Schema.Array(GroupResult)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupFindingsResponse" });

export interface VulnerabilityCountBySeverity {
  severityToFindingCount?: Record<string, string>;
}

export const VulnerabilityCountBySeverity: Schema.Codec<VulnerabilityCountBySeverity> =
  /*@__PURE__*/ Schema.Struct({
    severityToFindingCount: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "VulnerabilityCountBySeverity" });

export interface VulnerabilitySnapshot {
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  snapshotTime?: string;
  name?: string;
  findingCount?: VulnerabilityCountBySeverity;
}

export const VulnerabilitySnapshot: Schema.Codec<VulnerabilitySnapshot> =
  /*@__PURE__*/ Schema.Struct({
    cloudProvider: Schema.optional(Schema.String),
    snapshotTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    findingCount: Schema.optional(VulnerabilityCountBySeverity),
  }).annotate({ identifier: "VulnerabilitySnapshot" });

export interface Source {
  name?: string;
  displayName?: string;
  description?: string;
  canonicalName?: string;
}

export const Source: Schema.Codec<Source> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface ListSourcesResponse {
  nextPageToken?: string;
  sources?: ReadonlyArray<Source>;
}

export const ListSourcesResponse: Schema.Codec<ListSourcesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    sources: Schema.optional(Schema.Array(Source)),
  }).annotate({ identifier: "ListSourcesResponse" });

export interface GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin {
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin: Schema.Codec<GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin",
  });

export interface GoogleCloudSecuritycenterV2IssueFindingCve {
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingCve: Schema.Codec<GoogleCloudSecuritycenterV2IssueFindingCve> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFindingCve" });

export interface GoogleCloudSecuritycenterV2IssueFinding {
  name?: string;
  securityBulletin?: GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin;
  cve?: GoogleCloudSecuritycenterV2IssueFindingCve;
}

export const GoogleCloudSecuritycenterV2IssueFinding: Schema.Codec<GoogleCloudSecuritycenterV2IssueFinding> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin,
    ),
    cve: Schema.optional(GoogleCloudSecuritycenterV2IssueFindingCve),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFinding" });

export interface ResourceValueConfigMetadata {
  name?: string;
}

export const ResourceValueConfigMetadata: Schema.Codec<ResourceValueConfigMetadata> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceValueConfigMetadata" });

export interface ValuedResource {
  name?: string;
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "RESOURCE_VALUE_LOW"
    | "RESOURCE_VALUE_MEDIUM"
    | "RESOURCE_VALUE_HIGH"
    | (string & {});
  resource?: string;
  exposedScore?: number;
  resourceValueConfigsUsed?: ReadonlyArray<ResourceValueConfigMetadata>;
  resourceType?: string;
  displayName?: string;
}

export const ValuedResource: Schema.Codec<ValuedResource> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    resourceValue: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    exposedScore: Schema.optional(Schema.Number),
    resourceValueConfigsUsed: Schema.optional(
      Schema.Array(ResourceValueConfigMetadata),
    ),
    resourceType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValuedResource" });

export interface ListValuedResourcesResponse {
  valuedResources?: ReadonlyArray<ValuedResource>;
  nextPageToken?: string;
  totalSize?: number;
}

export const ListValuedResourcesResponse: Schema.Codec<ListValuedResourcesResponse> =
  /*@__PURE__*/ Schema.Struct({
    valuedResources: Schema.optional(Schema.Array(ValuedResource)),
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ListValuedResourcesResponse" });

export interface GoogleCloudSecuritycenterV2DataRetentionDeletionEvent {
  minRetentionAllowed?: string;
  dataObjectCount?: string;
  maxRetentionAllowed?: string;
  eventDetectionTime?: string;
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2DataRetentionDeletionEvent: Schema.Codec<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent> =
  /*@__PURE__*/ Schema.Struct({
    minRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2DataRetentionDeletionEvent",
  });

export interface GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision {
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision: Schema.Codec<GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2ExfilResource {
  components?: ReadonlyArray<string>;
  name?: string;
}

export const GoogleCloudSecuritycenterV2ExfilResource: Schema.Codec<GoogleCloudSecuritycenterV2ExfilResource> =
  /*@__PURE__*/ Schema.Struct({
    components: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExfilResource" });

export interface GoogleCloudSecuritycenterV2PolicyDriftDetails {
  detectedValue?: string;
  field?: string;
  expectedValue?: string;
}

export const GoogleCloudSecuritycenterV2PolicyDriftDetails: Schema.Codec<GoogleCloudSecuritycenterV2PolicyDriftDetails> =
  /*@__PURE__*/ Schema.Struct({
    detectedValue: Schema.optional(Schema.String),
    field: Schema.optional(Schema.String),
    expectedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2PolicyDriftDetails" });

export interface GoogleCloudSecuritycenterV2SecurityPosture {
  policy?: string;
  name?: string;
  postureDeployment?: string;
  policyDriftDetails?: ReadonlyArray<GoogleCloudSecuritycenterV2PolicyDriftDetails>;
  postureDeploymentResource?: string;
  policySet?: string;
  changedPolicy?: string;
  revisionId?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPosture: Schema.Codec<GoogleCloudSecuritycenterV2SecurityPosture> =
  /*@__PURE__*/ Schema.Struct({
    policy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PolicyDriftDetails),
    ),
    postureDeploymentResource: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPosture" });

export interface GoogleCloudSecuritycenterV2ResourceApplication {
  attributes?: GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
  name?: string;
}

export const GoogleCloudSecuritycenterV2ResourceApplication: Schema.Codec<GoogleCloudSecuritycenterV2ResourceApplication> =
  /*@__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceApplication" });

export interface GoogleCloudSecuritycenterV2ResourcePath {
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourcePathNode>;
}

export const GoogleCloudSecuritycenterV2ResourcePath: Schema.Codec<GoogleCloudSecuritycenterV2ResourcePath> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ResourcePathNode),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePath" });

export interface GoogleCloudSecuritycenterV2AwsOrganizationalUnit {
  id?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganizationalUnit: Schema.Codec<GoogleCloudSecuritycenterV2AwsOrganizationalUnit> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AwsOrganizationalUnit",
  });

export interface GoogleCloudSecuritycenterV2AwsAccount {
  id?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2AwsAccount: Schema.Codec<GoogleCloudSecuritycenterV2AwsAccount> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsAccount" });

export interface GoogleCloudSecuritycenterV2AwsOrganization {
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganization: Schema.Codec<GoogleCloudSecuritycenterV2AwsOrganization> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsOrganization" });

export interface GoogleCloudSecuritycenterV2AwsMetadata {
  organizationalUnits?: ReadonlyArray<GoogleCloudSecuritycenterV2AwsOrganizationalUnit>;
  account?: GoogleCloudSecuritycenterV2AwsAccount;
  organization?: GoogleCloudSecuritycenterV2AwsOrganization;
}

export const GoogleCloudSecuritycenterV2AwsMetadata: Schema.Codec<GoogleCloudSecuritycenterV2AwsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    organizationalUnits: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AwsOrganizationalUnit),
    ),
    account: Schema.optional(GoogleCloudSecuritycenterV2AwsAccount),
    organization: Schema.optional(GoogleCloudSecuritycenterV2AwsOrganization),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsMetadata" });

export interface GoogleCloudSecuritycenterV2AzureSubscription {
  id?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureSubscription: Schema.Codec<GoogleCloudSecuritycenterV2AzureSubscription> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureSubscription" });

export interface GoogleCloudSecuritycenterV2AzureTenant {
  id?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureTenant: Schema.Codec<GoogleCloudSecuritycenterV2AzureTenant> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureTenant" });

export interface GoogleCloudSecuritycenterV2AzureManagementGroup {
  id?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureManagementGroup: Schema.Codec<GoogleCloudSecuritycenterV2AzureManagementGroup> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AzureManagementGroup",
  });

export interface GoogleCloudSecuritycenterV2AzureMetadata {
  subscription?: GoogleCloudSecuritycenterV2AzureSubscription;
  tenant?: GoogleCloudSecuritycenterV2AzureTenant;
  resourceGroup?: GoogleCloudSecuritycenterV2AzureResourceGroup;
  managementGroups?: ReadonlyArray<GoogleCloudSecuritycenterV2AzureManagementGroup>;
}

export const GoogleCloudSecuritycenterV2AzureMetadata: Schema.Codec<GoogleCloudSecuritycenterV2AzureMetadata> =
  /*@__PURE__*/ Schema.Struct({
    subscription: Schema.optional(GoogleCloudSecuritycenterV2AzureSubscription),
    tenant: Schema.optional(GoogleCloudSecuritycenterV2AzureTenant),
    resourceGroup: Schema.optional(
      GoogleCloudSecuritycenterV2AzureResourceGroup,
    ),
    managementGroups: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AzureManagementGroup),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureMetadata" });

export interface GoogleCloudSecuritycenterV2Resource {
  adcApplication?: GoogleCloudSecuritycenterV2AdcApplication;
  service?: string;
  gcpMetadata?: GcpMetadata;
  application?: GoogleCloudSecuritycenterV2ResourceApplication;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  location?: string;
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision;
  adcSharedTemplate?: GoogleCloudSecuritycenterV2AdcSharedTemplateRevision;
  name?: string;
  resourcePath?: GoogleCloudSecuritycenterV2ResourcePath;
  awsMetadata?: GoogleCloudSecuritycenterV2AwsMetadata;
  azureMetadata?: GoogleCloudSecuritycenterV2AzureMetadata;
  displayName?: string;
  resourcePathString?: string;
  type?: string;
}

export const GoogleCloudSecuritycenterV2Resource: Schema.Codec<GoogleCloudSecuritycenterV2Resource> =
  /*@__PURE__*/ Schema.Struct({
    adcApplication: Schema.optional(GoogleCloudSecuritycenterV2AdcApplication),
    service: Schema.optional(Schema.String),
    gcpMetadata: Schema.optional(GcpMetadata),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplication,
    ),
    cloudProvider: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision,
    ),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcSharedTemplateRevision,
    ),
    name: Schema.optional(Schema.String),
    resourcePath: Schema.optional(GoogleCloudSecuritycenterV2ResourcePath),
    awsMetadata: Schema.optional(GoogleCloudSecuritycenterV2AwsMetadata),
    azureMetadata: Schema.optional(GoogleCloudSecuritycenterV2AzureMetadata),
    displayName: Schema.optional(Schema.String),
    resourcePathString: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Resource" });

export interface GoogleCloudSecuritycenterV2LoadBalancer {
  name?: string;
}

export const GoogleCloudSecuritycenterV2LoadBalancer: Schema.Codec<GoogleCloudSecuritycenterV2LoadBalancer> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LoadBalancer" });

export interface GoogleCloudSecuritycenterV2VertexAi {
  datasets?: ReadonlyArray<GoogleCloudSecuritycenterV2Dataset>;
  pipelines?: ReadonlyArray<GoogleCloudSecuritycenterV2Pipeline>;
}

export const GoogleCloudSecuritycenterV2VertexAi: Schema.Codec<GoogleCloudSecuritycenterV2VertexAi> =
  /*@__PURE__*/ Schema.Struct({
    datasets: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Dataset)),
    pipelines: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Pipeline),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2VertexAi" });

export interface GoogleCloudSecuritycenterV2Node {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Node: Schema.Codec<GoogleCloudSecuritycenterV2Node> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Node" });

export interface GoogleCloudSecuritycenterV2Subject {
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  ns?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2Subject: Schema.Codec<GoogleCloudSecuritycenterV2Subject> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Subject" });

export interface GoogleCloudSecuritycenterV2Binding {
  ns?: string;
  name?: string;
  role?: GoogleCloudSecuritycenterV2Role;
  subjects?: ReadonlyArray<GoogleCloudSecuritycenterV2Subject>;
}

export const GoogleCloudSecuritycenterV2Binding: Schema.Codec<GoogleCloudSecuritycenterV2Binding> =
  /*@__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    role: Schema.optional(GoogleCloudSecuritycenterV2Role),
    subjects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Subject)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Binding" });

export interface GoogleCloudSecuritycenterV2NodePool {
  name?: string;
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
}

export const GoogleCloudSecuritycenterV2NodePool: Schema.Codec<GoogleCloudSecuritycenterV2NodePool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NodePool" });

export interface GoogleCloudSecuritycenterV2Kubernetes {
  accessReviews?: ReadonlyArray<GoogleCloudSecuritycenterV2AccessReview>;
  pods?: ReadonlyArray<GoogleCloudSecuritycenterV2Pod>;
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
  objects?: ReadonlyArray<GoogleCloudSecuritycenterV2Object>;
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV2Binding>;
  nodePools?: ReadonlyArray<GoogleCloudSecuritycenterV2NodePool>;
  roles?: ReadonlyArray<GoogleCloudSecuritycenterV2Role>;
}

export const GoogleCloudSecuritycenterV2Kubernetes: Schema.Codec<GoogleCloudSecuritycenterV2Kubernetes> =
  /*@__PURE__*/ Schema.Struct({
    accessReviews: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AccessReview),
    ),
    pods: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Pod)),
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
    objects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Object)),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Binding)),
    nodePools: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2NodePool),
    ),
    roles: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Role)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Kubernetes" });

export interface GoogleCloudSecuritycenterV2Exfiltration {
  totalExfiltratedBytes?: string;
  sources?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
  targets?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
}

export const GoogleCloudSecuritycenterV2Exfiltration: Schema.Codec<GoogleCloudSecuritycenterV2Exfiltration> =
  /*@__PURE__*/ Schema.Struct({
    totalExfiltratedBytes: Schema.optional(Schema.String),
    sources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
    targets: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Exfiltration" });

export interface GoogleCloudSecuritycenterV2StaticMute {
  state?:
    | "MUTE_UNSPECIFIED"
    | "MUTED"
    | "UNMUTED"
    | "UNDEFINED"
    | (string & {});
  applyTime?: string;
}

export const GoogleCloudSecuritycenterV2StaticMute: Schema.Codec<GoogleCloudSecuritycenterV2StaticMute> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    applyTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2StaticMute" });

export interface GoogleCloudSecuritycenterV2DynamicMuteRecord {
  muteConfig?: string;
  matchTime?: string;
}

export const GoogleCloudSecuritycenterV2DynamicMuteRecord: Schema.Codec<GoogleCloudSecuritycenterV2DynamicMuteRecord> =
  /*@__PURE__*/ Schema.Struct({
    muteConfig: Schema.optional(Schema.String),
    matchTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DynamicMuteRecord" });

export interface GoogleCloudSecuritycenterV2MuteInfo {
  staticMute?: GoogleCloudSecuritycenterV2StaticMute;
  dynamicMuteRecords?: ReadonlyArray<GoogleCloudSecuritycenterV2DynamicMuteRecord>;
}

export const GoogleCloudSecuritycenterV2MuteInfo: Schema.Codec<GoogleCloudSecuritycenterV2MuteInfo> =
  /*@__PURE__*/ Schema.Struct({
    staticMute: Schema.optional(GoogleCloudSecuritycenterV2StaticMute),
    dynamicMuteRecords: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DynamicMuteRecord),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteInfo" });

export interface GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo {
  principalEmail?: string;
  principalSubject?: string;
}

export const GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo: Schema.Codec<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo> =
  /*@__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo",
  });

export interface GoogleCloudSecuritycenterV2Geolocation {
  regionCode?: string;
}

export const GoogleCloudSecuritycenterV2Geolocation: Schema.Codec<GoogleCloudSecuritycenterV2Geolocation> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Geolocation" });

export interface GoogleCloudSecuritycenterV2Access {
  principalSubject?: string;
  userAgentFamily?: string;
  callerIp?: string;
  serviceAccountKeyName?: string;
  serviceName?: string;
  serviceAccountDelegationInfo?: ReadonlyArray<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo>;
  principalEmail?: string;
  userAgent?: string;
  methodName?: string;
  callerIpGeo?: GoogleCloudSecuritycenterV2Geolocation;
  userName?: string;
}

export const GoogleCloudSecuritycenterV2Access: Schema.Codec<GoogleCloudSecuritycenterV2Access> =
  /*@__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    userAgentFamily: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo),
    ),
    principalEmail: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    methodName: Schema.optional(Schema.String),
    callerIpGeo: Schema.optional(GoogleCloudSecuritycenterV2Geolocation),
    userName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Access" });

export interface GoogleCloudSecuritycenterV2CloudLoggingEntry {
  resourceContainer?: string;
  timestamp?: string;
  insertId?: string;
  logId?: string;
}

export const GoogleCloudSecuritycenterV2CloudLoggingEntry: Schema.Codec<GoogleCloudSecuritycenterV2CloudLoggingEntry> =
  /*@__PURE__*/ Schema.Struct({
    resourceContainer: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
    logId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudLoggingEntry" });

export interface GoogleCloudSecuritycenterV2LogEntry {
  cloudLoggingEntry?: GoogleCloudSecuritycenterV2CloudLoggingEntry;
}

export const GoogleCloudSecuritycenterV2LogEntry: Schema.Codec<GoogleCloudSecuritycenterV2LogEntry> =
  /*@__PURE__*/ Schema.Struct({
    cloudLoggingEntry: Schema.optional(
      GoogleCloudSecuritycenterV2CloudLoggingEntry,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LogEntry" });

export interface GoogleCloudSecuritycenterV2GroupMembership {
  groupId?: string;
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2GroupMembership: Schema.Codec<GoogleCloudSecuritycenterV2GroupMembership> =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    groupType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2GroupMembership" });

export interface GoogleCloudSecuritycenterV2SecurityPolicy {
  name?: string;
  type?: string;
  preview?: boolean;
}

export const GoogleCloudSecuritycenterV2SecurityPolicy: Schema.Codec<GoogleCloudSecuritycenterV2SecurityPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    preview: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPolicy" });

export interface GoogleCloudSecuritycenterV2CloudArmor {
  securityPolicy?: GoogleCloudSecuritycenterV2SecurityPolicy;
  requests?: GoogleCloudSecuritycenterV2Requests;
  duration?: string;
  adaptiveProtection?: GoogleCloudSecuritycenterV2AdaptiveProtection;
  attack?: GoogleCloudSecuritycenterV2Attack;
  threatVector?: string;
}

export const GoogleCloudSecuritycenterV2CloudArmor: Schema.Codec<GoogleCloudSecuritycenterV2CloudArmor> =
  /*@__PURE__*/ Schema.Struct({
    securityPolicy: Schema.optional(GoogleCloudSecuritycenterV2SecurityPolicy),
    requests: Schema.optional(GoogleCloudSecuritycenterV2Requests),
    duration: Schema.optional(Schema.String),
    adaptiveProtection: Schema.optional(
      GoogleCloudSecuritycenterV2AdaptiveProtection,
    ),
    attack: Schema.optional(GoogleCloudSecuritycenterV2Attack),
    threatVector: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudArmor" });

export interface GoogleCloudSecuritycenterV2SecurityBulletin {
  submissionTime?: string;
  suggestedUpgradeVersion?: string;
  bulletinId?: string;
}

export const GoogleCloudSecuritycenterV2SecurityBulletin: Schema.Codec<GoogleCloudSecuritycenterV2SecurityBulletin> =
  /*@__PURE__*/ Schema.Struct({
    submissionTime: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
    bulletinId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityBulletin" });

export interface GoogleCloudSecuritycenterV2Cwe {
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
  id?: string;
}

export const GoogleCloudSecuritycenterV2Cwe: Schema.Codec<GoogleCloudSecuritycenterV2Cwe> =
  /*@__PURE__*/ Schema.Struct({
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cwe" });

export interface GoogleCloudSecuritycenterV2Vulnerability {
  securityBulletin?: GoogleCloudSecuritycenterV2SecurityBulletin;
  cwes?: ReadonlyArray<GoogleCloudSecuritycenterV2Cwe>;
  reachable?: boolean;
  cve?: GoogleCloudSecuritycenterV2Cve;
  offendingPackage?: GoogleCloudSecuritycenterV2Package;
  fixedPackage?: GoogleCloudSecuritycenterV2Package;
  providerRiskScore?: string;
}

export const GoogleCloudSecuritycenterV2Vulnerability: Schema.Codec<GoogleCloudSecuritycenterV2Vulnerability> =
  /*@__PURE__*/ Schema.Struct({
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityBulletin,
    ),
    cwes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Cwe)),
    reachable: Schema.optional(Schema.Boolean),
    cve: Schema.optional(GoogleCloudSecuritycenterV2Cve),
    offendingPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    fixedPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    providerRiskScore: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Vulnerability" });

export interface GoogleCloudSecuritycenterV2Disk {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Disk: Schema.Codec<GoogleCloudSecuritycenterV2Disk> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Disk" });

export interface GoogleCloudSecuritycenterV2OrgPolicy {
  name?: string;
}

export const GoogleCloudSecuritycenterV2OrgPolicy: Schema.Codec<GoogleCloudSecuritycenterV2OrgPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2OrgPolicy" });

export interface GoogleCloudSecuritycenterV2MitreAttack {
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
  version?: string;
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
}

export const GoogleCloudSecuritycenterV2MitreAttack: Schema.Codec<GoogleCloudSecuritycenterV2MitreAttack> =
  /*@__PURE__*/ Schema.Struct({
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    primaryTactic: Schema.optional(Schema.String),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MitreAttack" });

export interface GoogleCloudSecuritycenterV2SecurityMarks {
  canonicalName?: string;
  name?: string;
  marks?: Record<string, string>;
}

export const GoogleCloudSecuritycenterV2SecurityMarks: Schema.Codec<GoogleCloudSecuritycenterV2SecurityMarks> =
  /*@__PURE__*/ Schema.Struct({
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityMarks" });

export interface GoogleCloudSecuritycenterV2DiscoveredWorkload {
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  detectedRelevantHardware?: boolean;
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
  detectedRelevantPackages?: boolean;
  detectedRelevantKeywords?: boolean;
}

export const GoogleCloudSecuritycenterV2DiscoveredWorkload: Schema.Codec<GoogleCloudSecuritycenterV2DiscoveredWorkload> =
  /*@__PURE__*/ Schema.Struct({
    workloadType: Schema.optional(Schema.String),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.String),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiscoveredWorkload" });

export interface GoogleCloudSecuritycenterV2PolicyViolationSummary {
  evaluationErrorsCount?: string;
  outOfScopeResourcesCount?: string;
  policyViolationsCount?: string;
  conformantResourcesCount?: string;
}

export const GoogleCloudSecuritycenterV2PolicyViolationSummary: Schema.Codec<GoogleCloudSecuritycenterV2PolicyViolationSummary> =
  /*@__PURE__*/ Schema.Struct({
    evaluationErrorsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    policyViolationsCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2PolicyViolationSummary",
  });

export interface GoogleCloudSecuritycenterV2Connection {
  sourceIp?: string;
  sourcePort?: number;
  destinationIp?: string;
  destinationPort?: number;
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2Connection: Schema.Codec<GoogleCloudSecuritycenterV2Connection> =
  /*@__PURE__*/ Schema.Struct({
    sourceIp: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
    destinationIp: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Connection" });

export interface GoogleCloudSecuritycenterV2ExternalExposure {
  privatePort?: string;
  pscNetworkAttachment?: string;
  publicPort?: string;
  httpResponse?: ReadonlyArray<GoogleCloudSecuritycenterV2HttpResponse>;
  publicIpAddress?: string;
  exposedEndpoint?: string;
  backendBucket?: string;
  instanceGroup?: string;
  networkIngressFirewallPolicy?: string;
  exposedApplication?: string;
  exposedService?: string;
  networkEndpointGroup?: string;
  forwardingRule?: string;
  serviceFirewallPolicy?: string;
  privateIpAddress?: string;
  loadBalancerFirewallPolicy?: string;
  internalBackendService?: string;
  pscServiceAttachment?: string;
  backendService?: string;
  networkPathInsightsGenerationTime?: string;
  hostnameUri?: string;
}

export const GoogleCloudSecuritycenterV2ExternalExposure: Schema.Codec<GoogleCloudSecuritycenterV2ExternalExposure> =
  /*@__PURE__*/ Schema.Struct({
    privatePort: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    httpResponse: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2HttpResponse),
    ),
    publicIpAddress: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    networkPathInsightsGenerationTime: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalExposure" });

export interface GoogleCloudSecuritycenterV2KernelRootkit {
  unexpectedKprobeHandler?: boolean;
  unexpectedSystemCallHandler?: boolean;
  unexpectedKernelCodePages?: boolean;
  unexpectedInterruptHandler?: boolean;
  name?: string;
  unexpectedCodeModification?: boolean;
  unexpectedFtraceHandler?: boolean;
  unexpectedProcessesInRunqueue?: boolean;
  unexpectedReadOnlyDataModification?: boolean;
}

export const GoogleCloudSecuritycenterV2KernelRootkit: Schema.Codec<GoogleCloudSecuritycenterV2KernelRootkit> =
  /*@__PURE__*/ Schema.Struct({
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2KernelRootkit" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicy {
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
  failureReason?: string;
  policyId?: string;
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicy: Schema.Codec<GoogleCloudSecuritycenterV2ArtifactGuardPolicy> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    policyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicy" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicies {
  resourceId?: string;
  failingPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2ArtifactGuardPolicy>;
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicies: Schema.Codec<GoogleCloudSecuritycenterV2ArtifactGuardPolicies> =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    failingPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ArtifactGuardPolicy),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicies",
  });

export interface GoogleCloudSecuritycenterV2IamBinding {
  member?: string;
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  role?: string;
}

export const GoogleCloudSecuritycenterV2IamBinding: Schema.Codec<GoogleCloudSecuritycenterV2IamBinding> =
  /*@__PURE__*/ Schema.Struct({
    member: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamBinding" });

export interface GoogleCloudSecuritycenterV2AffectedResources {
  count?: string;
}

export const GoogleCloudSecuritycenterV2AffectedResources: Schema.Codec<GoogleCloudSecuritycenterV2AffectedResources> =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AffectedResources" });

export interface GoogleCloudSecuritycenterV2AiModel {
  publisher?: string;
  domain?: string;
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  usageCategory?: string;
  name?: string;
  library?: string;
  location?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AiModel: Schema.Codec<GoogleCloudSecuritycenterV2AiModel> =
  /*@__PURE__*/ Schema.Struct({
    publisher: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AiModel" });

export interface GoogleCloudSecuritycenterV2Application {
  baseUri?: string;
  fullUri?: string;
}

export const GoogleCloudSecuritycenterV2Application: Schema.Codec<GoogleCloudSecuritycenterV2Application> =
  /*@__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Application" });

export interface GoogleCloudSecuritycenterV2CloudDlpInspection {
  fullScan?: boolean;
  inspectJob?: string;
  infoType?: string;
  infoTypeCount?: string;
}

export const GoogleCloudSecuritycenterV2CloudDlpInspection: Schema.Codec<GoogleCloudSecuritycenterV2CloudDlpInspection> =
  /*@__PURE__*/ Schema.Struct({
    fullScan: Schema.optional(Schema.Boolean),
    inspectJob: Schema.optional(Schema.String),
    infoType: Schema.optional(Schema.String),
    infoTypeCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpInspection" });

export interface GoogleCloudSecuritycenterV2SensitivityScore {
  score?:
    | "SENSITIVITY_SCORE_LEVEL_UNSPECIFIED"
    | "SENSITIVITY_LOW"
    | "SENSITIVITY_UNKNOWN"
    | "SENSITIVITY_MODERATE"
    | "SENSITIVITY_HIGH"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SensitivityScore: Schema.Codec<GoogleCloudSecuritycenterV2SensitivityScore> =
  /*@__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SensitivityScore" });

export interface GoogleCloudSecuritycenterV2InfoType {
  name?: string;
  version?: string;
  sensitivityScore?: GoogleCloudSecuritycenterV2SensitivityScore;
}

export const GoogleCloudSecuritycenterV2InfoType: Schema.Codec<GoogleCloudSecuritycenterV2InfoType> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(
      GoogleCloudSecuritycenterV2SensitivityScore,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2InfoType" });

export interface GoogleCloudSecuritycenterV2CloudDlpDataProfile {
  dataProfile?: string;
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
  infoTypes?: ReadonlyArray<GoogleCloudSecuritycenterV2InfoType>;
}

export const GoogleCloudSecuritycenterV2CloudDlpDataProfile: Schema.Codec<GoogleCloudSecuritycenterV2CloudDlpDataProfile> =
  /*@__PURE__*/ Schema.Struct({
    dataProfile: Schema.optional(Schema.String),
    parentType: Schema.optional(Schema.String),
    infoTypes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2InfoType),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpDataProfile" });

export interface GoogleCloudSecuritycenterV2IamDetails {
  iamRolePermissions?: ReadonlyArray<GoogleCloudSecuritycenterV2IamRolePermission>;
}

export const GoogleCloudSecuritycenterV2IamDetails: Schema.Codec<GoogleCloudSecuritycenterV2IamDetails> =
  /*@__PURE__*/ Schema.Struct({
    iamRolePermissions: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamRolePermission),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamDetails" });

export interface GoogleCloudSecuritycenterV2YaraRuleSignature {
  yaraRule?: string;
}

export const GoogleCloudSecuritycenterV2YaraRuleSignature: Schema.Codec<GoogleCloudSecuritycenterV2YaraRuleSignature> =
  /*@__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2YaraRuleSignature" });

export interface GoogleCloudSecuritycenterV2ProcessSignature {
  memoryHashSignature?: GoogleCloudSecuritycenterV2MemoryHashSignature;
  yaraRuleSignature?: GoogleCloudSecuritycenterV2YaraRuleSignature;
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ProcessSignature: Schema.Codec<GoogleCloudSecuritycenterV2ProcessSignature> =
  /*@__PURE__*/ Schema.Struct({
    memoryHashSignature: Schema.optional(
      GoogleCloudSecuritycenterV2MemoryHashSignature,
    ),
    yaraRuleSignature: Schema.optional(
      GoogleCloudSecuritycenterV2YaraRuleSignature,
    ),
    signatureType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ProcessSignature" });

export interface GoogleCloudSecuritycenterV2Indicator {
  domains?: ReadonlyArray<string>;
  signatures?: ReadonlyArray<GoogleCloudSecuritycenterV2ProcessSignature>;
  uris?: ReadonlyArray<string>;
  ipAddresses?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Indicator: Schema.Codec<GoogleCloudSecuritycenterV2Indicator> =
  /*@__PURE__*/ Schema.Struct({
    domains: Schema.optional(Schema.Array(Schema.String)),
    signatures: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ProcessSignature),
    ),
    uris: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Indicator" });

export interface GoogleCloudSecuritycenterV2DataFlowEvent {
  principalEmail?: string;
  violatedLocation?: string;
  eventId?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  eventTime?: string;
}

export const GoogleCloudSecuritycenterV2DataFlowEvent: Schema.Codec<GoogleCloudSecuritycenterV2DataFlowEvent> =
  /*@__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataFlowEvent" });

export interface GoogleCloudSecuritycenterV2AgentDataAccessEvent {
  eventId?: string;
  eventTime?: string;
  principalSubject?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2AgentDataAccessEvent: Schema.Codec<GoogleCloudSecuritycenterV2AgentDataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AgentDataAccessEvent",
  });

export interface GoogleCloudSecuritycenterV2EnvironmentVariable {
  name?: string;
  val?: string;
}

export const GoogleCloudSecuritycenterV2EnvironmentVariable: Schema.Codec<GoogleCloudSecuritycenterV2EnvironmentVariable> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    val: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2EnvironmentVariable" });

export interface GoogleCloudSecuritycenterV2Process {
  script?: GoogleCloudSecuritycenterV2File;
  userId?: string;
  name?: string;
  args?: ReadonlyArray<string>;
  parentPid?: string;
  argumentsTruncated?: boolean;
  binary?: GoogleCloudSecuritycenterV2File;
  libraries?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  envVariables?: ReadonlyArray<GoogleCloudSecuritycenterV2EnvironmentVariable>;
  envVariablesTruncated?: boolean;
  pid?: string;
}

export const GoogleCloudSecuritycenterV2Process: Schema.Codec<GoogleCloudSecuritycenterV2Process> =
  /*@__PURE__*/ Schema.Struct({
    script: Schema.optional(GoogleCloudSecuritycenterV2File),
    userId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    parentPid: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    binary: Schema.optional(GoogleCloudSecuritycenterV2File),
    libraries: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    envVariables: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2EnvironmentVariable),
    ),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    pid: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Process" });

export interface GoogleCloudSecuritycenterV2Finding {
  loadBalancers?: ReadonlyArray<GoogleCloudSecuritycenterV2LoadBalancer>;
  vertexAi?: GoogleCloudSecuritycenterV2VertexAi;
  dataRetentionDeletionEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent>;
  muteInitiator?: string;
  job?: GoogleCloudSecuritycenterV2Job;
  externalUri?: string;
  secret?: GoogleCloudSecuritycenterV2Secret;
  kubernetes?: GoogleCloudSecuritycenterV2Kubernetes;
  parent?: string;
  contacts?: Record<string, GoogleCloudSecuritycenterV2ContactDetails>;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  moduleName?: string;
  exfiltration?: GoogleCloudSecuritycenterV2Exfiltration;
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  muteUpdateTime?: string;
  ipRules?: GoogleCloudSecuritycenterV2IpRules;
  muteInfo?: GoogleCloudSecuritycenterV2MuteInfo;
  resourceName?: string;
  access?: GoogleCloudSecuritycenterV2Access;
  logEntries?: ReadonlyArray<GoogleCloudSecuritycenterV2LogEntry>;
  groupMemberships?: ReadonlyArray<GoogleCloudSecuritycenterV2GroupMembership>;
  cloudArmor?: GoogleCloudSecuritycenterV2CloudArmor;
  cryptoKeyName?: string;
  vulnerability?: GoogleCloudSecuritycenterV2Vulnerability;
  disk?: GoogleCloudSecuritycenterV2Disk;
  orgPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2OrgPolicy>;
  attackExposure?: GoogleCloudSecuritycenterV2AttackExposure;
  sourceProperties?: Record<string, unknown>;
  category?: string;
  mitreAttack?: GoogleCloudSecuritycenterV2MitreAttack;
  securityMarks?: GoogleCloudSecuritycenterV2SecurityMarks;
  parentDisplayName?: string;
  discoveredWorkload?: GoogleCloudSecuritycenterV2DiscoveredWorkload;
  policyViolationSummary?: GoogleCloudSecuritycenterV2PolicyViolationSummary;
  securityPosture?: GoogleCloudSecuritycenterV2SecurityPosture;
  connections?: ReadonlyArray<GoogleCloudSecuritycenterV2Connection>;
  externalExposure?: GoogleCloudSecuritycenterV2ExternalExposure;
  kernelRootkit?: GoogleCloudSecuritycenterV2KernelRootkit;
  artifactGuardPolicies?: GoogleCloudSecuritycenterV2ArtifactGuardPolicies;
  iamBindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IamBinding>;
  database?: GoogleCloudSecuritycenterV2Database;
  affectedResources?: GoogleCloudSecuritycenterV2AffectedResources;
  notebook?: GoogleCloudSecuritycenterV2Notebook;
  aiModel?: GoogleCloudSecuritycenterV2AiModel;
  application?: GoogleCloudSecuritycenterV2Application;
  externalSystems?: Record<string, GoogleCloudSecuritycenterV2ExternalSystem>;
  createTime?: string;
  cloudDlpInspection?: GoogleCloudSecuritycenterV2CloudDlpInspection;
  cloudDlpDataProfile?: GoogleCloudSecuritycenterV2CloudDlpDataProfile;
  toxicCombination?: GoogleCloudSecuritycenterV2ToxicCombination;
  iamDetails?: GoogleCloudSecuritycenterV2IamDetails;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  indicator?: GoogleCloudSecuritycenterV2Indicator;
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
  description?: string;
  complianceDetails?: GoogleCloudSecuritycenterV2ComplianceDetails;
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  eventTime?: string;
  canonicalName?: string;
  compliances?: ReadonlyArray<GoogleCloudSecuritycenterV2Compliance>;
  chokepoint?: GoogleCloudSecuritycenterV2Chokepoint;
  dataFlowEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataFlowEvent>;
  dataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataAccessEvent>;
  nextSteps?: string;
  agentDataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2AgentDataAccessEvent>;
  processes?: ReadonlyArray<GoogleCloudSecuritycenterV2Process>;
  networks?: ReadonlyArray<GoogleCloudSecuritycenterV2Network>;
  backupDisasterRecovery?: GoogleCloudSecuritycenterV2BackupDisasterRecovery;
  name?: string;
  files?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
}

export const GoogleCloudSecuritycenterV2Finding: Schema.Codec<GoogleCloudSecuritycenterV2Finding> =
  /*@__PURE__*/ Schema.Struct({
    loadBalancers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LoadBalancer),
    ),
    vertexAi: Schema.optional(GoogleCloudSecuritycenterV2VertexAi),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataRetentionDeletionEvent),
    ),
    muteInitiator: Schema.optional(Schema.String),
    job: Schema.optional(GoogleCloudSecuritycenterV2Job),
    externalUri: Schema.optional(Schema.String),
    secret: Schema.optional(GoogleCloudSecuritycenterV2Secret),
    kubernetes: Schema.optional(GoogleCloudSecuritycenterV2Kubernetes),
    parent: Schema.optional(Schema.String),
    contacts: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ContactDetails),
    ),
    state: Schema.optional(Schema.String),
    moduleName: Schema.optional(Schema.String),
    exfiltration: Schema.optional(GoogleCloudSecuritycenterV2Exfiltration),
    mute: Schema.optional(Schema.String),
    muteUpdateTime: Schema.optional(Schema.String),
    ipRules: Schema.optional(GoogleCloudSecuritycenterV2IpRules),
    muteInfo: Schema.optional(GoogleCloudSecuritycenterV2MuteInfo),
    resourceName: Schema.optional(Schema.String),
    access: Schema.optional(GoogleCloudSecuritycenterV2Access),
    logEntries: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LogEntry),
    ),
    groupMemberships: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2GroupMembership),
    ),
    cloudArmor: Schema.optional(GoogleCloudSecuritycenterV2CloudArmor),
    cryptoKeyName: Schema.optional(Schema.String),
    vulnerability: Schema.optional(GoogleCloudSecuritycenterV2Vulnerability),
    disk: Schema.optional(GoogleCloudSecuritycenterV2Disk),
    orgPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2OrgPolicy),
    ),
    attackExposure: Schema.optional(GoogleCloudSecuritycenterV2AttackExposure),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    category: Schema.optional(Schema.String),
    mitreAttack: Schema.optional(GoogleCloudSecuritycenterV2MitreAttack),
    securityMarks: Schema.optional(GoogleCloudSecuritycenterV2SecurityMarks),
    parentDisplayName: Schema.optional(Schema.String),
    discoveredWorkload: Schema.optional(
      GoogleCloudSecuritycenterV2DiscoveredWorkload,
    ),
    policyViolationSummary: Schema.optional(
      GoogleCloudSecuritycenterV2PolicyViolationSummary,
    ),
    securityPosture: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityPosture,
    ),
    connections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Connection),
    ),
    externalExposure: Schema.optional(
      GoogleCloudSecuritycenterV2ExternalExposure,
    ),
    kernelRootkit: Schema.optional(GoogleCloudSecuritycenterV2KernelRootkit),
    artifactGuardPolicies: Schema.optional(
      GoogleCloudSecuritycenterV2ArtifactGuardPolicies,
    ),
    iamBindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamBinding),
    ),
    database: Schema.optional(GoogleCloudSecuritycenterV2Database),
    affectedResources: Schema.optional(
      GoogleCloudSecuritycenterV2AffectedResources,
    ),
    notebook: Schema.optional(GoogleCloudSecuritycenterV2Notebook),
    aiModel: Schema.optional(GoogleCloudSecuritycenterV2AiModel),
    application: Schema.optional(GoogleCloudSecuritycenterV2Application),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ExternalSystem),
    ),
    createTime: Schema.optional(Schema.String),
    cloudDlpInspection: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpInspection,
    ),
    cloudDlpDataProfile: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpDataProfile,
    ),
    toxicCombination: Schema.optional(
      GoogleCloudSecuritycenterV2ToxicCombination,
    ),
    iamDetails: Schema.optional(GoogleCloudSecuritycenterV2IamDetails),
    severity: Schema.optional(Schema.String),
    indicator: Schema.optional(GoogleCloudSecuritycenterV2Indicator),
    findingClass: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    complianceDetails: Schema.optional(
      GoogleCloudSecuritycenterV2ComplianceDetails,
    ),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    eventTime: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    compliances: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Compliance),
    ),
    chokepoint: Schema.optional(GoogleCloudSecuritycenterV2Chokepoint),
    dataFlowEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataFlowEvent),
    ),
    dataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataAccessEvent),
    ),
    nextSteps: Schema.optional(Schema.String),
    agentDataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AgentDataAccessEvent),
    ),
    processes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Process),
    ),
    networks: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Network)),
    backupDisasterRecovery: Schema.optional(
      GoogleCloudSecuritycenterV2BackupDisasterRecovery,
    ),
    name: Schema.optional(Schema.String),
    files: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Finding" });

export interface GoogleCloudSecuritycenterV2NotificationMessage {
  resource?: GoogleCloudSecuritycenterV2Resource;
  notificationConfigName?: string;
  finding?: GoogleCloudSecuritycenterV2Finding;
}

export const GoogleCloudSecuritycenterV2NotificationMessage: Schema.Codec<GoogleCloudSecuritycenterV2NotificationMessage> =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.optional(GoogleCloudSecuritycenterV2Resource),
    notificationConfigName: Schema.optional(Schema.String),
    finding: Schema.optional(GoogleCloudSecuritycenterV2Finding),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NotificationMessage" });

export interface ListMuteConfigsResponse {
  muteConfigs?: ReadonlyArray<GoogleCloudSecuritycenterV1MuteConfig>;
  nextPageToken?: string;
}

export const ListMuteConfigsResponse: Schema.Codec<ListMuteConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    muteConfigs: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1MuteConfig),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMuteConfigsResponse" });

export interface BigQueryDestination {
  dataset?: string;
}

export const BigQueryDestination: Schema.Codec<BigQueryDestination> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryDestination" });

export interface ExportFindingsMetadata {
  exportStartTime?: string;
  bigQueryDestination?: BigQueryDestination;
}

export const ExportFindingsMetadata: Schema.Codec<ExportFindingsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    exportStartTime: Schema.optional(Schema.String),
    bigQueryDestination: Schema.optional(BigQueryDestination),
  }).annotate({ identifier: "ExportFindingsMetadata" });

export interface ListAssetsResponse {
  readTime?: string;
  nextPageToken?: string;
  listAssetsResults?: ReadonlyArray<ListAssetsResult>;
  totalSize?: number;
}

export const ListAssetsResponse: Schema.Codec<ListAssetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    listAssetsResults: Schema.optional(Schema.Array(ListAssetsResult)),
    totalSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ListAssetsResponse" });

export interface BatchCreateResourceValueConfigsResponse {
  resourceValueConfigs?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceValueConfig>;
}

export const BatchCreateResourceValueConfigsResponse: Schema.Codec<BatchCreateResourceValueConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    resourceValueConfigs: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1ResourceValueConfig),
    ),
  }).annotate({ identifier: "BatchCreateResourceValueConfigsResponse" });

export interface GoogleCloudSecuritycenterV2BigQueryExport {
  filter?: string;
  principal?: string;
  createTime?: string;
  mostRecentEditor?: string;
  cryptoKeyName?: string;
  updateTime?: string;
  description?: string;
  name?: string;
  dataset?: string;
}

export const GoogleCloudSecuritycenterV2BigQueryExport: Schema.Codec<GoogleCloudSecuritycenterV2BigQueryExport> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2BigQueryExport" });

export interface ListDescendantSecurityHealthAnalyticsCustomModulesResponse {
  nextPageToken?: string;
  securityHealthAnalyticsCustomModules?: ReadonlyArray<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
}

export const ListDescendantSecurityHealthAnalyticsCustomModulesResponse: Schema.Codec<ListDescendantSecurityHealthAnalyticsCustomModulesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    securityHealthAnalyticsCustomModules: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
      ),
    ),
  }).annotate({
    identifier: "ListDescendantSecurityHealthAnalyticsCustomModulesResponse",
  });

export interface GoogleCloudSecuritycenterV1NotificationMessage {
  notificationConfigName?: string;
  finding?: Finding;
  resource?: GoogleCloudSecuritycenterV1Resource;
}

export const GoogleCloudSecuritycenterV1NotificationMessage: Schema.Codec<GoogleCloudSecuritycenterV1NotificationMessage> =
  /*@__PURE__*/ Schema.Struct({
    notificationConfigName: Schema.optional(Schema.String),
    finding: Schema.optional(Finding),
    resource: Schema.optional(GoogleCloudSecuritycenterV1Resource),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1NotificationMessage" });

export interface Status {
  details?: ReadonlyArray<Record<string, unknown>>;
  code?: number;
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface Operation {
  metadata?: Record<string, unknown>;
  error?: Status;
  response?: Record<string, unknown>;
  name?: string;
  done?: boolean;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface GoogleCloudSecuritycenterV2IssueDomain {
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

export const GoogleCloudSecuritycenterV2IssueDomain: Schema.Codec<GoogleCloudSecuritycenterV2IssueDomain> =
  /*@__PURE__*/ Schema.Struct({
    domainCategory: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueDomain" });

export interface GoogleCloudSecuritycenterV2IssueSecurityContextContext {
  values?: ReadonlyArray<string>;
  type?: string;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContextContext: Schema.Codec<GoogleCloudSecuritycenterV2IssueSecurityContextContext> =
  /*@__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueSecurityContextContext",
  });

export interface SetIamPolicyRequest {
  policy?: Policy;
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Codec<SetIamPolicyRequest> =
  /*@__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface GroupFindingsRequest {
  groupBy?: string;
  readTime?: string;
  pageToken?: string;
  pageSize?: number;
  filter?: string;
  compareDuration?: string;
}

export const GroupFindingsRequest: Schema.Codec<GroupFindingsRequest> =
  /*@__PURE__*/ Schema.Struct({
    groupBy: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    filter: Schema.optional(Schema.String),
    compareDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupFindingsRequest" });

export interface Simulation {
  name?: string;
  resourceValueConfigsMetadata?: ReadonlyArray<ResourceValueConfigMetadata>;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  createTime?: string;
}

export const Simulation: Schema.Codec<Simulation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    resourceValueConfigsMetadata: Schema.optional(
      Schema.Array(ResourceValueConfigMetadata),
    ),
    cloudProvider: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Simulation" });

export interface SimulatedResult {
  finding?: Finding;
  noViolation?: Empty;
  error?: Status;
}

export const SimulatedResult: Schema.Codec<SimulatedResult> =
  /*@__PURE__*/ Schema.Struct({
    finding: Schema.optional(Finding),
    noViolation: Schema.optional(Empty),
    error: Schema.optional(Status),
  }).annotate({ identifier: "SimulatedResult" });

export interface SimulateSecurityHealthAnalyticsCustomModuleResponse {
  result?: SimulatedResult;
}

export const SimulateSecurityHealthAnalyticsCustomModuleResponse: Schema.Codec<SimulateSecurityHealthAnalyticsCustomModuleResponse> =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(SimulatedResult),
  }).annotate({
    identifier: "SimulateSecurityHealthAnalyticsCustomModuleResponse",
  });

export interface ListOperationsResponse {
  operations?: ReadonlyArray<Operation>;
  nextPageToken?: string;
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface GroupAssetsRequest {
  readTime?: string;
  pageToken?: string;
  pageSize?: number;
  filter?: string;
  compareDuration?: string;
  groupBy?: string;
}

export const GroupAssetsRequest: Schema.Codec<GroupAssetsRequest> =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    filter: Schema.optional(Schema.String),
    compareDuration: Schema.optional(Schema.String),
    groupBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupAssetsRequest" });

export interface GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV1BulkMuteFindingsResponse: Schema.Codec<GoogleCloudSecuritycenterV1BulkMuteFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV1BulkMuteFindingsResponse",
  });

export interface ListEffectiveSecurityHealthAnalyticsCustomModulesResponse {
  nextPageToken?: string;
  effectiveSecurityHealthAnalyticsCustomModules?: ReadonlyArray<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>;
}

export const ListEffectiveSecurityHealthAnalyticsCustomModulesResponse: Schema.Codec<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    effectiveSecurityHealthAnalyticsCustomModules: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule,
      ),
    ),
  }).annotate({
    identifier: "ListEffectiveSecurityHealthAnalyticsCustomModulesResponse",
  });

export interface EventThreatDetectionCustomModule {
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "INHERITED"
    | (string & {});
  displayName?: string;
  updateTime?: string;
  name?: string;
  type?: string;
  description?: string;
  ancestorModule?: string;
  lastEditor?: string;
  config?: Record<string, unknown>;
}

export const EventThreatDetectionCustomModule: Schema.Codec<EventThreatDetectionCustomModule> =
  /*@__PURE__*/ Schema.Struct({
    cloudProvider: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    ancestorModule: Schema.optional(Schema.String),
    lastEditor: Schema.optional(Schema.String),
    config: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "EventThreatDetectionCustomModule" });

export interface ListEventThreatDetectionCustomModulesResponse {
  eventThreatDetectionCustomModules?: ReadonlyArray<EventThreatDetectionCustomModule>;
  nextPageToken?: string;
}

export const ListEventThreatDetectionCustomModulesResponse: Schema.Codec<ListEventThreatDetectionCustomModulesResponse> =
  /*@__PURE__*/ Schema.Struct({
    eventThreatDetectionCustomModules: Schema.optional(
      Schema.Array(EventThreatDetectionCustomModule),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEventThreatDetectionCustomModulesResponse" });

export interface ValidateEventThreatDetectionCustomModuleRequest {
  rawText?: string;
  type?: string;
}

export const ValidateEventThreatDetectionCustomModuleRequest: Schema.Codec<ValidateEventThreatDetectionCustomModuleRequest> =
  /*@__PURE__*/ Schema.Struct({
    rawText: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ValidateEventThreatDetectionCustomModuleRequest",
  });

export interface GoogleCloudSecuritycenterV2MuteConfig {
  expiryTime?: string;
  filter?: string;
  mostRecentEditor?: string;
  createTime?: string;
  updateTime?: string;
  cryptoKeyName?: string;
  name?: string;
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  description?: string;
}

export const GoogleCloudSecuritycenterV2MuteConfig: Schema.Codec<GoogleCloudSecuritycenterV2MuteConfig> =
  /*@__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteConfig" });

export interface GoogleCloudSecuritycenterV2IssueMute {
  muteUpdateTime?: string;
  muteState?: "MUTE_STATE_UNSPECIFIED" | "NOT_MUTED" | "MUTED" | (string & {});
  muteInitiator?: string;
  muteReason?: string;
}

export const GoogleCloudSecuritycenterV2IssueMute: Schema.Codec<GoogleCloudSecuritycenterV2IssueMute> =
  /*@__PURE__*/ Schema.Struct({
    muteUpdateTime: Schema.optional(Schema.String),
    muteState: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    muteReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueMute" });

export interface GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount {
  key?: string;
  value?: number;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount: Schema.Codec<GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount",
  });

export interface GoogleCloudSecuritycenterV2IssueSecurityContext {
  context?: GoogleCloudSecuritycenterV2IssueSecurityContextContext;
  aggregatedCount?: GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContext: Schema.Codec<GoogleCloudSecuritycenterV2IssueSecurityContext> =
  /*@__PURE__*/ Schema.Struct({
    context: Schema.optional(
      GoogleCloudSecuritycenterV2IssueSecurityContextContext,
    ),
    aggregatedCount: Schema.optional(
      GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueSecurityContext",
  });

export interface GoogleCloudSecuritycenterV2Issue {
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  exposureScore?: number;
  domains?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueDomain>;
  updateTime?: string;
  description?: string;
  securityContexts?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueSecurityContext>;
  issueType?:
    | "ISSUE_TYPE_UNSPECIFIED"
    | "CHOKEPOINT"
    | "TOXIC_COMBINATION"
    | "INSIGHT"
    | (string & {});
  createTime?: string;
  remediations?: ReadonlyArray<string>;
  detection?: string;
  mute?: GoogleCloudSecuritycenterV2IssueMute;
  name?: string;
  primaryResource?: GoogleCloudSecuritycenterV2IssueResource;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  secondaryResources?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResource>;
  relatedFindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueFinding>;
  lastObservationTime?: string;
}

export const GoogleCloudSecuritycenterV2Issue: Schema.Codec<GoogleCloudSecuritycenterV2Issue> =
  /*@__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    exposureScore: Schema.optional(Schema.Number),
    domains: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueDomain),
    ),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    securityContexts: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueSecurityContext),
    ),
    issueType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    remediations: Schema.optional(Schema.Array(Schema.String)),
    detection: Schema.optional(Schema.String),
    mute: Schema.optional(GoogleCloudSecuritycenterV2IssueMute),
    name: Schema.optional(Schema.String),
    primaryResource: Schema.optional(GoogleCloudSecuritycenterV2IssueResource),
    state: Schema.optional(Schema.String),
    secondaryResources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueResource),
    ),
    relatedFindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueFinding),
    ),
    lastObservationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Issue" });

export interface GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  duration?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse",
  });

export interface BatchCreateResourceValueConfigsRequest {
  requests?: ReadonlyArray<CreateResourceValueConfigRequest>;
}

export const BatchCreateResourceValueConfigsRequest: Schema.Codec<BatchCreateResourceValueConfigsRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(CreateResourceValueConfigRequest)),
  }).annotate({ identifier: "BatchCreateResourceValueConfigsRequest" });

export interface GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
  duration?: string;
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse: Schema.Codec<GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse",
  });

export interface SimulateSecurityHealthAnalyticsCustomModuleRequest {
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  resource?: SimulatedResource;
}

export const SimulateSecurityHealthAnalyticsCustomModuleRequest: Schema.Codec<SimulateSecurityHealthAnalyticsCustomModuleRequest> =
  /*@__PURE__*/ Schema.Struct({
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    resource: Schema.optional(SimulatedResource),
  }).annotate({
    identifier: "SimulateSecurityHealthAnalyticsCustomModuleRequest",
  });

export interface ListDescendantEventThreatDetectionCustomModulesResponse {
  nextPageToken?: string;
  eventThreatDetectionCustomModules?: ReadonlyArray<EventThreatDetectionCustomModule>;
}

export const ListDescendantEventThreatDetectionCustomModulesResponse: Schema.Codec<ListDescendantEventThreatDetectionCustomModulesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    eventThreatDetectionCustomModules: Schema.optional(
      Schema.Array(EventThreatDetectionCustomModule),
    ),
  }).annotate({
    identifier: "ListDescendantEventThreatDetectionCustomModulesResponse",
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

export interface UpdateSecurityMarksFoldersAssetsRequest {
  updateMask?: string;
  startTime?: string;
  name: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksFoldersAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityMarksFoldersAssetsRequest>;

export type UpdateSecurityMarksFoldersAssetsResponse = SecurityMarks;
export const UpdateSecurityMarksFoldersAssetsResponse =
  /*@__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksFoldersAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityMarksFoldersAssets: API.OperationMethod<
  UpdateSecurityMarksFoldersAssetsRequest,
  UpdateSecurityMarksFoldersAssetsResponse,
  UpdateSecurityMarksFoldersAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksFoldersAssetsRequest,
  output: UpdateSecurityMarksFoldersAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersAssetsRequest {
  fieldMask?: string;
  compareDuration?: string;
  filter?: string;
  parent: string;
  orderBy?: string;
  readTime?: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListFoldersAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersAssetsRequest>;

export type ListFoldersAssetsResponse = ListAssetsResponse;
export const ListFoldersAssetsResponse = /*@__PURE__*/ ListAssetsResponse;

export type ListFoldersAssetsError = DefaultErrors | NotFound | Forbidden;

export const listFoldersAssets: API.PaginatedOperationMethod<
  ListFoldersAssetsRequest,
  ListFoldersAssetsResponse,
  ListFoldersAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersAssetsRequest,
  output: ListFoldersAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GroupFoldersAssetsRequest {
  parent: string;
  /** Request body */
  body?: GroupAssetsRequest;
}

export const GroupFoldersAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GroupFoldersAssetsRequest>;

export type GroupFoldersAssetsResponse = GroupAssetsResponse;
export const GroupFoldersAssetsResponse = /*@__PURE__*/ GroupAssetsResponse;

export type GroupFoldersAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const groupFoldersAssets: API.OperationMethod<
  GroupFoldersAssetsRequest,
  GroupFoldersAssetsResponse,
  GroupFoldersAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GroupFoldersAssetsRequest,
  output: GroupFoldersAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest {
  parent: string;
  /** Request body */
  body?: ValidateEventThreatDetectionCustomModuleRequest;
}

export const ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ValidateEventThreatDetectionCustomModuleRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:validateCustomModule",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest>;

export type ValidateCustomModuleFoldersEventThreatDetectionSettingsResponse =
  ValidateEventThreatDetectionCustomModuleResponse;
export const ValidateCustomModuleFoldersEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ ValidateEventThreatDetectionCustomModuleResponse;

export type ValidateCustomModuleFoldersEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const validateCustomModuleFoldersEventThreatDetectionSettings: API.OperationMethod<
  ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest,
  ValidateCustomModuleFoldersEventThreatDetectionSettingsResponse,
  ValidateCustomModuleFoldersEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest,
  output: ValidateCustomModuleFoldersEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type ListFoldersEventThreatDetectionSettingsCustomModulesResponse =
  ListEventThreatDetectionCustomModulesResponse;
export const ListFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ ListEventThreatDetectionCustomModulesResponse;

export type ListFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listFoldersEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListFoldersEventThreatDetectionSettingsCustomModulesRequest,
  ListFoldersEventThreatDetectionSettingsCustomModulesResponse,
  ListFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: ListFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateFoldersEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const CreateFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type CreateFoldersEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const CreateFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type CreateFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createFoldersEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  CreateFoldersEventThreatDetectionSettingsCustomModulesRequest,
  CreateFoldersEventThreatDetectionSettingsCustomModulesResponse,
  CreateFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: CreateFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersEventThreatDetectionSettingsCustomModulesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const PatchFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type PatchFoldersEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const PatchFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type PatchFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchFoldersEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  PatchFoldersEventThreatDetectionSettingsCustomModulesRequest,
  PatchFoldersEventThreatDetectionSettingsCustomModulesResponse,
  PatchFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: PatchFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Codec<ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type ListDescendantFoldersEventThreatDetectionSettingsCustomModulesResponse =
  ListDescendantEventThreatDetectionCustomModulesResponse;
export const ListDescendantFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ ListDescendantEventThreatDetectionCustomModulesResponse;

export type ListDescendantFoldersEventThreatDetectionSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listDescendantFoldersEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest,
  ListDescendantFoldersEventThreatDetectionSettingsCustomModulesResponse,
  ListDescendantFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output:
    ListDescendantFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetFoldersEventThreatDetectionSettingsCustomModulesRequest {
  name: string;
}

export const GetFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type GetFoldersEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const GetFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type GetFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getFoldersEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  GetFoldersEventThreatDetectionSettingsCustomModulesRequest,
  GetFoldersEventThreatDetectionSettingsCustomModulesResponse,
  GetFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: GetFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest {
  name: string;
}

export const DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type DeleteFoldersEventThreatDetectionSettingsCustomModulesResponse =
  Empty;
export const DeleteFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ Empty;

export type DeleteFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteFoldersEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest,
  DeleteFoldersEventThreatDetectionSettingsCustomModulesResponse,
  DeleteFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: DeleteFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  name: string;
}

export const GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  EffectiveEventThreatDetectionCustomModule;
export const GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ EffectiveEventThreatDetectionCustomModule;

export type GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getFoldersEventThreatDetectionSettingsEffectiveCustomModules: API.OperationMethod<
  GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output: GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  ListEffectiveEventThreatDetectionCustomModulesResponse;
export const ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ ListEffectiveEventThreatDetectionCustomModulesResponse;

export type ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listFoldersEventThreatDetectionSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output: ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetFoldersBigQueryExportsRequest {
  name: string;
}

export const GetFoldersBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetFoldersBigQueryExportsRequest>;

export type GetFoldersBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const GetFoldersBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type GetFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getFoldersBigQueryExports: API.OperationMethod<
  GetFoldersBigQueryExportsRequest,
  GetFoldersBigQueryExportsResponse,
  GetFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFoldersBigQueryExportsRequest,
  output: GetFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteFoldersBigQueryExportsRequest {
  name: string;
}

export const DeleteFoldersBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteFoldersBigQueryExportsRequest>;

export type DeleteFoldersBigQueryExportsResponse = Empty;
export const DeleteFoldersBigQueryExportsResponse = /*@__PURE__*/ Empty;

export type DeleteFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteFoldersBigQueryExports: API.OperationMethod<
  DeleteFoldersBigQueryExportsRequest,
  DeleteFoldersBigQueryExportsResponse,
  DeleteFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFoldersBigQueryExportsRequest,
  output: DeleteFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateFoldersBigQueryExportsRequest {
  parent: string;
  bigQueryExportId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const CreateFoldersBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    bigQueryExportId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bigQueryExportId"),
    ),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bigQueryExports",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateFoldersBigQueryExportsRequest>;

export type CreateFoldersBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const CreateFoldersBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type CreateFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createFoldersBigQueryExports: API.OperationMethod<
  CreateFoldersBigQueryExportsRequest,
  CreateFoldersBigQueryExportsResponse,
  CreateFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFoldersBigQueryExportsRequest,
  output: CreateFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersBigQueryExportsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const PatchFoldersBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchFoldersBigQueryExportsRequest>;

export type PatchFoldersBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const PatchFoldersBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type PatchFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchFoldersBigQueryExports: API.OperationMethod<
  PatchFoldersBigQueryExportsRequest,
  PatchFoldersBigQueryExportsResponse,
  PatchFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchFoldersBigQueryExportsRequest,
  output: PatchFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersBigQueryExportsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListFoldersBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bigQueryExports" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersBigQueryExportsRequest>;

export type ListFoldersBigQueryExportsResponse = ListBigQueryExportsResponse;
export const ListFoldersBigQueryExportsResponse =
  /*@__PURE__*/ ListBigQueryExportsResponse;

export type ListFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listFoldersBigQueryExports: API.PaginatedOperationMethod<
  ListFoldersBigQueryExportsRequest,
  ListFoldersBigQueryExportsResponse,
  ListFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersBigQueryExportsRequest,
  output: ListFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListFoldersSourcesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListFoldersSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersSourcesRequest>;

export type ListFoldersSourcesResponse = ListSourcesResponse;
export const ListFoldersSourcesResponse = /*@__PURE__*/ ListSourcesResponse;

export type ListFoldersSourcesError = DefaultErrors | NotFound | Forbidden;

export const listFoldersSources: API.PaginatedOperationMethod<
  ListFoldersSourcesRequest,
  ListFoldersSourcesResponse,
  ListFoldersSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersSourcesRequest,
  output: ListFoldersSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GroupFoldersSourcesFindingsRequest {
  parent: string;
  /** Request body */
  body?: GroupFindingsRequest;
}

export const GroupFoldersSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GroupFoldersSourcesFindingsRequest>;

export type GroupFoldersSourcesFindingsResponse = GroupFindingsResponse;
export const GroupFoldersSourcesFindingsResponse =
  /*@__PURE__*/ GroupFindingsResponse;

export type GroupFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const groupFoldersSourcesFindings: API.OperationMethod<
  GroupFoldersSourcesFindingsRequest,
  GroupFoldersSourcesFindingsResponse,
  GroupFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GroupFoldersSourcesFindingsRequest,
  output: GroupFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetStateFoldersSourcesFindingsRequest {
  name: string;
  /** Request body */
  body?: SetFindingStateRequest;
}

export const SetStateFoldersSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetFindingStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setState", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SetStateFoldersSourcesFindingsRequest>;

export type SetStateFoldersSourcesFindingsResponse = Finding;
export const SetStateFoldersSourcesFindingsResponse = /*@__PURE__*/ Finding;

export type SetStateFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setStateFoldersSourcesFindings: API.OperationMethod<
  SetStateFoldersSourcesFindingsRequest,
  SetStateFoldersSourcesFindingsResponse,
  SetStateFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetStateFoldersSourcesFindingsRequest,
  output: SetStateFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersSourcesFindingsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: Finding;
}

export const PatchFoldersSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Finding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchFoldersSourcesFindingsRequest>;

export type PatchFoldersSourcesFindingsResponse = Finding;
export const PatchFoldersSourcesFindingsResponse = /*@__PURE__*/ Finding;

export type PatchFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchFoldersSourcesFindings: API.OperationMethod<
  PatchFoldersSourcesFindingsRequest,
  PatchFoldersSourcesFindingsResponse,
  PatchFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchFoldersSourcesFindingsRequest,
  output: PatchFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersSourcesFindingsRequest {
  parent: string;
  orderBy?: string;
  readTime?: string;
  pageToken?: string;
  pageSize?: number;
  filter?: string;
  compareDuration?: string;
  fieldMask?: string;
}

export const ListFoldersSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersSourcesFindingsRequest>;

export type ListFoldersSourcesFindingsResponse = ListFindingsResponse;
export const ListFoldersSourcesFindingsResponse =
  /*@__PURE__*/ ListFindingsResponse;

export type ListFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listFoldersSourcesFindings: API.PaginatedOperationMethod<
  ListFoldersSourcesFindingsRequest,
  ListFoldersSourcesFindingsResponse,
  ListFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersSourcesFindingsRequest,
  output: ListFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSecurityMarksFoldersSourcesFindingsRequest {
  updateMask?: string;
  startTime?: string;
  name: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksFoldersSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityMarksFoldersSourcesFindingsRequest>;

export type UpdateSecurityMarksFoldersSourcesFindingsResponse = SecurityMarks;
export const UpdateSecurityMarksFoldersSourcesFindingsResponse =
  /*@__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityMarksFoldersSourcesFindings: API.OperationMethod<
  UpdateSecurityMarksFoldersSourcesFindingsRequest,
  UpdateSecurityMarksFoldersSourcesFindingsResponse,
  UpdateSecurityMarksFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksFoldersSourcesFindingsRequest,
  output: UpdateSecurityMarksFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMuteFoldersSourcesFindingsRequest {
  name: string;
  /** Request body */
  body?: SetMuteRequest;
}

export const SetMuteFoldersSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMuteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setMute", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SetMuteFoldersSourcesFindingsRequest>;

export type SetMuteFoldersSourcesFindingsResponse = Finding;
export const SetMuteFoldersSourcesFindingsResponse = /*@__PURE__*/ Finding;

export type SetMuteFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setMuteFoldersSourcesFindings: API.OperationMethod<
  SetMuteFoldersSourcesFindingsRequest,
  SetMuteFoldersSourcesFindingsResponse,
  SetMuteFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetMuteFoldersSourcesFindingsRequest,
  output: SetMuteFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersSourcesFindingsExternalSystemsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1ExternalSystem;
}

export const PatchFoldersSourcesFindingsExternalSystemsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1ExternalSystem).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchFoldersSourcesFindingsExternalSystemsRequest>;

export type PatchFoldersSourcesFindingsExternalSystemsResponse =
  GoogleCloudSecuritycenterV1ExternalSystem;
export const PatchFoldersSourcesFindingsExternalSystemsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1ExternalSystem;

export type PatchFoldersSourcesFindingsExternalSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchFoldersSourcesFindingsExternalSystems: API.OperationMethod<
  PatchFoldersSourcesFindingsExternalSystemsRequest,
  PatchFoldersSourcesFindingsExternalSystemsResponse,
  PatchFoldersSourcesFindingsExternalSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchFoldersSourcesFindingsExternalSystemsRequest,
  output: PatchFoldersSourcesFindingsExternalSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersNotificationConfigsRequest {
  name: string;
}

export const DeleteFoldersNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteFoldersNotificationConfigsRequest>;

export type DeleteFoldersNotificationConfigsResponse = Empty;
export const DeleteFoldersNotificationConfigsResponse = /*@__PURE__*/ Empty;

export type DeleteFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteFoldersNotificationConfigs: API.OperationMethod<
  DeleteFoldersNotificationConfigsRequest,
  DeleteFoldersNotificationConfigsResponse,
  DeleteFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFoldersNotificationConfigsRequest,
  output: DeleteFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersNotificationConfigsRequest {
  name: string;
}

export const GetFoldersNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetFoldersNotificationConfigsRequest>;

export type GetFoldersNotificationConfigsResponse = NotificationConfig;
export const GetFoldersNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type GetFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getFoldersNotificationConfigs: API.OperationMethod<
  GetFoldersNotificationConfigsRequest,
  GetFoldersNotificationConfigsResponse,
  GetFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFoldersNotificationConfigsRequest,
  output: GetFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersNotificationConfigsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListFoldersNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notificationConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersNotificationConfigsRequest>;

export type ListFoldersNotificationConfigsResponse =
  ListNotificationConfigsResponse;
export const ListFoldersNotificationConfigsResponse =
  /*@__PURE__*/ ListNotificationConfigsResponse;

export type ListFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listFoldersNotificationConfigs: API.PaginatedOperationMethod<
  ListFoldersNotificationConfigsRequest,
  ListFoldersNotificationConfigsResponse,
  ListFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersNotificationConfigsRequest,
  output: ListFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateFoldersNotificationConfigsRequest {
  configId?: string;
  parent: string;
  /** Request body */
  body?: NotificationConfig;
}

export const CreateFoldersNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    configId: Schema.optional(Schema.String).pipe(T.HttpQuery("configId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/notificationConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateFoldersNotificationConfigsRequest>;

export type CreateFoldersNotificationConfigsResponse = NotificationConfig;
export const CreateFoldersNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type CreateFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createFoldersNotificationConfigs: API.OperationMethod<
  CreateFoldersNotificationConfigsRequest,
  CreateFoldersNotificationConfigsResponse,
  CreateFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFoldersNotificationConfigsRequest,
  output: CreateFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersNotificationConfigsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: NotificationConfig;
}

export const PatchFoldersNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchFoldersNotificationConfigsRequest>;

export type PatchFoldersNotificationConfigsResponse = NotificationConfig;
export const PatchFoldersNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type PatchFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchFoldersNotificationConfigs: API.OperationMethod<
  PatchFoldersNotificationConfigsRequest,
  PatchFoldersNotificationConfigsResponse,
  PatchFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchFoldersNotificationConfigsRequest,
  output: PatchFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersLocationsMuteConfigsRequest {
  name: string;
}

export const DeleteFoldersLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteFoldersLocationsMuteConfigsRequest>;

export type DeleteFoldersLocationsMuteConfigsResponse = Empty;
export const DeleteFoldersLocationsMuteConfigsResponse = /*@__PURE__*/ Empty;

export type DeleteFoldersLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteFoldersLocationsMuteConfigs: API.OperationMethod<
  DeleteFoldersLocationsMuteConfigsRequest,
  DeleteFoldersLocationsMuteConfigsResponse,
  DeleteFoldersLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFoldersLocationsMuteConfigsRequest,
  output: DeleteFoldersLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersLocationsMuteConfigsRequest {
  name: string;
}

export const GetFoldersLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetFoldersLocationsMuteConfigsRequest>;

export type GetFoldersLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetFoldersLocationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetFoldersLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getFoldersLocationsMuteConfigs: API.OperationMethod<
  GetFoldersLocationsMuteConfigsRequest,
  GetFoldersLocationsMuteConfigsResponse,
  GetFoldersLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsMuteConfigsRequest,
  output: GetFoldersLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchFoldersLocationsMuteConfigsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchFoldersLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchFoldersLocationsMuteConfigsRequest>;

export type PatchFoldersLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchFoldersLocationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchFoldersLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchFoldersLocationsMuteConfigs: API.OperationMethod<
  PatchFoldersLocationsMuteConfigsRequest,
  PatchFoldersLocationsMuteConfigsResponse,
  PatchFoldersLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchFoldersLocationsMuteConfigsRequest,
  output: PatchFoldersLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListSecurityHealthAnalyticsCustomModulesResponse;
export const ListFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ ListSecurityHealthAnalyticsCustomModulesResponse;

export type ListFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listFoldersSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: ListFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Codec<ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListDescendantSecurityHealthAnalyticsCustomModulesResponse;
export const ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

export type ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listDescendantFoldersSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: SimulateSecurityHealthAnalyticsCustomModuleRequest;
}

export const SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      SimulateSecurityHealthAnalyticsCustomModuleRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules:simulate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  SimulateSecurityHealthAnalyticsCustomModuleResponse;
export const SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ SimulateSecurityHealthAnalyticsCustomModuleResponse;

export type SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const simulateFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  name: string;
}

export const GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type GetFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const GetFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type GetFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  GetFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  GetFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: GetFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  name: string;
}

export const DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  Empty;
export const DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ Empty;

export type DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  name: string;
}

export const GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;
export const GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;

export type GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const getFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.OperationMethod<
  GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;
export const ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

export type ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateFoldersMuteConfigsRequest {
  parent: string;
  muteConfigId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const CreateFoldersMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    muteConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("muteConfigId"),
    ),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/muteConfigs", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateFoldersMuteConfigsRequest>;

export type CreateFoldersMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const CreateFoldersMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type CreateFoldersMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createFoldersMuteConfigs: API.OperationMethod<
  CreateFoldersMuteConfigsRequest,
  CreateFoldersMuteConfigsResponse,
  CreateFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFoldersMuteConfigsRequest,
  output: CreateFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersMuteConfigsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchFoldersMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchFoldersMuteConfigsRequest>;

export type PatchFoldersMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchFoldersMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchFoldersMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchFoldersMuteConfigs: API.OperationMethod<
  PatchFoldersMuteConfigsRequest,
  PatchFoldersMuteConfigsResponse,
  PatchFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchFoldersMuteConfigsRequest,
  output: PatchFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersMuteConfigsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListFoldersMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/muteConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListFoldersMuteConfigsRequest>;

export type ListFoldersMuteConfigsResponse = ListMuteConfigsResponse;
export const ListFoldersMuteConfigsResponse =
  /*@__PURE__*/ ListMuteConfigsResponse;

export type ListFoldersMuteConfigsError = DefaultErrors | NotFound | Forbidden;

export const listFoldersMuteConfigs: API.PaginatedOperationMethod<
  ListFoldersMuteConfigsRequest,
  ListFoldersMuteConfigsResponse,
  ListFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersMuteConfigsRequest,
  output: ListFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteFoldersMuteConfigsRequest {
  name: string;
}

export const DeleteFoldersMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteFoldersMuteConfigsRequest>;

export type DeleteFoldersMuteConfigsResponse = Empty;
export const DeleteFoldersMuteConfigsResponse = /*@__PURE__*/ Empty;

export type DeleteFoldersMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteFoldersMuteConfigs: API.OperationMethod<
  DeleteFoldersMuteConfigsRequest,
  DeleteFoldersMuteConfigsResponse,
  DeleteFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFoldersMuteConfigsRequest,
  output: DeleteFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersMuteConfigsRequest {
  name: string;
}

export const GetFoldersMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetFoldersMuteConfigsRequest>;

export type GetFoldersMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetFoldersMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetFoldersMuteConfigsError = DefaultErrors | NotFound | Forbidden;

export const getFoldersMuteConfigs: API.OperationMethod<
  GetFoldersMuteConfigsRequest,
  GetFoldersMuteConfigsResponse,
  GetFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFoldersMuteConfigsRequest,
  output: GetFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BulkMuteFoldersFindingsRequest {
  parent: string;
  /** Request body */
  body?: BulkMuteFindingsRequest;
}

export const BulkMuteFoldersFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BulkMuteFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:bulkMute",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BulkMuteFoldersFindingsRequest>;

export type BulkMuteFoldersFindingsResponse = Operation;
export const BulkMuteFoldersFindingsResponse = /*@__PURE__*/ Operation;

export type BulkMuteFoldersFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const bulkMuteFoldersFindings: API.OperationMethod<
  BulkMuteFoldersFindingsRequest,
  BulkMuteFoldersFindingsResponse,
  BulkMuteFoldersFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BulkMuteFoldersFindingsRequest,
  output: BulkMuteFoldersFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationSettingsOrganizationsRequest {
  name: string;
}

export const GetOrganizationSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationSettingsOrganizationsRequest>;

export type GetOrganizationSettingsOrganizationsResponse = OrganizationSettings;
export const GetOrganizationSettingsOrganizationsResponse =
  /*@__PURE__*/ OrganizationSettings;

export type GetOrganizationSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationSettingsOrganizations: API.OperationMethod<
  GetOrganizationSettingsOrganizationsRequest,
  GetOrganizationSettingsOrganizationsResponse,
  GetOrganizationSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationSettingsOrganizationsRequest,
  output: GetOrganizationSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateOrganizationSettingsOrganizationsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: OrganizationSettings;
}

export const UpdateOrganizationSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(OrganizationSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateOrganizationSettingsOrganizationsRequest>;

export type UpdateOrganizationSettingsOrganizationsResponse =
  OrganizationSettings;
export const UpdateOrganizationSettingsOrganizationsResponse =
  /*@__PURE__*/ OrganizationSettings;

export type UpdateOrganizationSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateOrganizationSettingsOrganizations: API.OperationMethod<
  UpdateOrganizationSettingsOrganizationsRequest,
  UpdateOrganizationSettingsOrganizationsResponse,
  UpdateOrganizationSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateOrganizationSettingsOrganizationsRequest,
  output: UpdateOrganizationSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest {
  parent: string;
  /** Request body */
  body?: ValidateEventThreatDetectionCustomModuleRequest;
}

export const ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ValidateEventThreatDetectionCustomModuleRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:validateCustomModule",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest>;

export type ValidateCustomModuleOrganizationsEventThreatDetectionSettingsResponse =
  ValidateEventThreatDetectionCustomModuleResponse;
export const ValidateCustomModuleOrganizationsEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ ValidateEventThreatDetectionCustomModuleResponse;

export type ValidateCustomModuleOrganizationsEventThreatDetectionSettingsError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

export const validateCustomModuleOrganizationsEventThreatDetectionSettings: API.OperationMethod<
  ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest,
  ValidateCustomModuleOrganizationsEventThreatDetectionSettingsResponse,
  ValidateCustomModuleOrganizationsEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest,
  output: ValidateCustomModuleOrganizationsEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  name: string;
}

export const GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  EffectiveEventThreatDetectionCustomModule;
export const GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ EffectiveEventThreatDetectionCustomModule;

export type GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const getOrganizationsEventThreatDetectionSettingsEffectiveCustomModules: API.OperationMethod<
  GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output:
    GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  ListEffectiveEventThreatDetectionCustomModulesResponse;
export const ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ ListEffectiveEventThreatDetectionCustomModulesResponse;

export type ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listOrganizationsEventThreatDetectionSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output:
    ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Codec<ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  ListDescendantEventThreatDetectionCustomModulesResponse;
export const ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ ListDescendantEventThreatDetectionCustomModulesResponse;

export type ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listDescendantOrganizationsEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output:
    ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  name: string;
}

export const DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type DeleteOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  Empty;
export const DeleteOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ Empty;

export type DeleteOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteOrganizationsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  DeleteOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  DeleteOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: DeleteOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  name: string;
}

export const GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type GetOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const GetOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type GetOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  GetOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  GetOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: GetOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type ListOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  ListEventThreatDetectionCustomModulesResponse;
export const ListOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ ListEventThreatDetectionCustomModulesResponse;

export type ListOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  ListOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  ListOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: ListOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type CreateOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const CreateOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type CreateOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createOrganizationsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  CreateOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  CreateOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: CreateOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type PatchOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const PatchOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type PatchOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  PatchOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  PatchOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: PatchOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsBigQueryExportsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bigQueryExports" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsBigQueryExportsRequest>;

export type ListOrganizationsBigQueryExportsResponse =
  ListBigQueryExportsResponse;
export const ListOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ ListBigQueryExportsResponse;

export type ListOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsBigQueryExports: API.PaginatedOperationMethod<
  ListOrganizationsBigQueryExportsRequest,
  ListOrganizationsBigQueryExportsResponse,
  ListOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsBigQueryExportsRequest,
  output: ListOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsBigQueryExportsRequest {
  bigQueryExportId?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const CreateOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    bigQueryExportId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bigQueryExportId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bigQueryExports",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsBigQueryExportsRequest>;

export type CreateOrganizationsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const CreateOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type CreateOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createOrganizationsBigQueryExports: API.OperationMethod<
  CreateOrganizationsBigQueryExportsRequest,
  CreateOrganizationsBigQueryExportsResponse,
  CreateOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsBigQueryExportsRequest,
  output: CreateOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsBigQueryExportsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const PatchOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsBigQueryExportsRequest>;

export type PatchOrganizationsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const PatchOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type PatchOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsBigQueryExports: API.OperationMethod<
  PatchOrganizationsBigQueryExportsRequest,
  PatchOrganizationsBigQueryExportsResponse,
  PatchOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsBigQueryExportsRequest,
  output: PatchOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsBigQueryExportsRequest {
  name: string;
}

export const DeleteOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsBigQueryExportsRequest>;

export type DeleteOrganizationsBigQueryExportsResponse = Empty;
export const DeleteOrganizationsBigQueryExportsResponse = /*@__PURE__*/ Empty;

export type DeleteOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteOrganizationsBigQueryExports: API.OperationMethod<
  DeleteOrganizationsBigQueryExportsRequest,
  DeleteOrganizationsBigQueryExportsResponse,
  DeleteOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsBigQueryExportsRequest,
  output: DeleteOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsBigQueryExportsRequest {
  name: string;
}

export const GetOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsBigQueryExportsRequest>;

export type GetOrganizationsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const GetOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type GetOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsBigQueryExports: API.OperationMethod<
  GetOrganizationsBigQueryExportsRequest,
  GetOrganizationsBigQueryExportsResponse,
  GetOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsBigQueryExportsRequest,
  output: GetOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsResourceValueConfigsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/resourceValueConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsResourceValueConfigsRequest>;

export type ListOrganizationsResourceValueConfigsResponse =
  ListResourceValueConfigsResponse;
export const ListOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ ListResourceValueConfigsResponse;

export type ListOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsResourceValueConfigs: API.PaginatedOperationMethod<
  ListOrganizationsResourceValueConfigsRequest,
  ListOrganizationsResourceValueConfigsResponse,
  ListOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsResourceValueConfigsRequest,
  output: ListOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsResourceValueConfigsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1ResourceValueConfig;
}

export const PatchOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1ResourceValueConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsResourceValueConfigsRequest>;

export type PatchOrganizationsResourceValueConfigsResponse =
  GoogleCloudSecuritycenterV1ResourceValueConfig;
export const PatchOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1ResourceValueConfig;

export type PatchOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsResourceValueConfigs: API.OperationMethod<
  PatchOrganizationsResourceValueConfigsRequest,
  PatchOrganizationsResourceValueConfigsResponse,
  PatchOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsResourceValueConfigsRequest,
  output: PatchOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsResourceValueConfigsRequest {
  name: string;
}

export const GetOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsResourceValueConfigsRequest>;

export type GetOrganizationsResourceValueConfigsResponse =
  GoogleCloudSecuritycenterV1ResourceValueConfig;
export const GetOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1ResourceValueConfig;

export type GetOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsResourceValueConfigs: API.OperationMethod<
  GetOrganizationsResourceValueConfigsRequest,
  GetOrganizationsResourceValueConfigsResponse,
  GetOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsResourceValueConfigsRequest,
  output: GetOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchCreateOrganizationsResourceValueConfigsRequest {
  parent: string;
  /** Request body */
  body?: BatchCreateResourceValueConfigsRequest;
}

export const BatchCreateOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreateResourceValueConfigsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/resourceValueConfigs:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchCreateOrganizationsResourceValueConfigsRequest>;

export type BatchCreateOrganizationsResourceValueConfigsResponse =
  BatchCreateResourceValueConfigsResponse;
export const BatchCreateOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ BatchCreateResourceValueConfigsResponse;

export type BatchCreateOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const batchCreateOrganizationsResourceValueConfigs: API.OperationMethod<
  BatchCreateOrganizationsResourceValueConfigsRequest,
  BatchCreateOrganizationsResourceValueConfigsResponse,
  BatchCreateOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchCreateOrganizationsResourceValueConfigsRequest,
  output: BatchCreateOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsResourceValueConfigsRequest {
  name: string;
}

export const DeleteOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsResourceValueConfigsRequest>;

export type DeleteOrganizationsResourceValueConfigsResponse = Empty;
export const DeleteOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ Empty;

export type DeleteOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteOrganizationsResourceValueConfigs: API.OperationMethod<
  DeleteOrganizationsResourceValueConfigsRequest,
  DeleteOrganizationsResourceValueConfigsResponse,
  DeleteOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsResourceValueConfigsRequest,
  output: DeleteOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsValuedResourcesRequest {
  filter?: string;
  parent: string;
  pageToken?: string;
  pageSize?: number;
  orderBy?: string;
}

export const ListOrganizationsValuedResourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/valuedResources" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsValuedResourcesRequest>;

export type ListOrganizationsValuedResourcesResponse =
  ListValuedResourcesResponse;
export const ListOrganizationsValuedResourcesResponse =
  /*@__PURE__*/ ListValuedResourcesResponse;

export type ListOrganizationsValuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsValuedResources: API.PaginatedOperationMethod<
  ListOrganizationsValuedResourcesRequest,
  ListOrganizationsValuedResourcesResponse,
  ListOrganizationsValuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsValuedResourcesRequest,
  output: ListOrganizationsValuedResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyOrganizationsSourcesRequest {
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyOrganizationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyOrganizationsSourcesRequest>;

export type GetIamPolicyOrganizationsSourcesResponse = Policy;
export const GetIamPolicyOrganizationsSourcesResponse = /*@__PURE__*/ Policy;

export type GetIamPolicyOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const getIamPolicyOrganizationsSources: API.OperationMethod<
  GetIamPolicyOrganizationsSourcesRequest,
  GetIamPolicyOrganizationsSourcesResponse,
  GetIamPolicyOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyOrganizationsSourcesRequest,
  output: GetIamPolicyOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsSourcesRequest {
  name: string;
}

export const GetOrganizationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsSourcesRequest>;

export type GetOrganizationsSourcesResponse = Source;
export const GetOrganizationsSourcesResponse = /*@__PURE__*/ Source;

export type GetOrganizationsSourcesError = DefaultErrors | NotFound | Forbidden;

export const getOrganizationsSources: API.OperationMethod<
  GetOrganizationsSourcesRequest,
  GetOrganizationsSourcesResponse,
  GetOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsSourcesRequest,
  output: GetOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsSourcesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListOrganizationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSourcesRequest>;

export type ListOrganizationsSourcesResponse = ListSourcesResponse;
export const ListOrganizationsSourcesResponse =
  /*@__PURE__*/ ListSourcesResponse;

export type ListOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsSources: API.PaginatedOperationMethod<
  ListOrganizationsSourcesRequest,
  ListOrganizationsSourcesResponse,
  ListOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSourcesRequest,
  output: ListOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsOrganizationsSourcesRequest {
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsOrganizationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsOrganizationsSourcesRequest>;

export type TestIamPermissionsOrganizationsSourcesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsOrganizationsSourcesResponse =
  /*@__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const testIamPermissionsOrganizationsSources: API.OperationMethod<
  TestIamPermissionsOrganizationsSourcesRequest,
  TestIamPermissionsOrganizationsSourcesResponse,
  TestIamPermissionsOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsOrganizationsSourcesRequest,
  output: TestIamPermissionsOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsSourcesRequest {
  parent: string;
  /** Request body */
  body?: Source;
}

export const CreateOrganizationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/sources", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsSourcesRequest>;

export type CreateOrganizationsSourcesResponse = Source;
export const CreateOrganizationsSourcesResponse = /*@__PURE__*/ Source;

export type CreateOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createOrganizationsSources: API.OperationMethod<
  CreateOrganizationsSourcesRequest,
  CreateOrganizationsSourcesResponse,
  CreateOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsSourcesRequest,
  output: CreateOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyOrganizationsSourcesRequest {
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyOrganizationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyOrganizationsSourcesRequest>;

export type SetIamPolicyOrganizationsSourcesResponse = Policy;
export const SetIamPolicyOrganizationsSourcesResponse = /*@__PURE__*/ Policy;

export type SetIamPolicyOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setIamPolicyOrganizationsSources: API.OperationMethod<
  SetIamPolicyOrganizationsSourcesRequest,
  SetIamPolicyOrganizationsSourcesResponse,
  SetIamPolicyOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyOrganizationsSourcesRequest,
  output: SetIamPolicyOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsSourcesRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: Source;
}

export const PatchOrganizationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsSourcesRequest>;

export type PatchOrganizationsSourcesResponse = Source;
export const PatchOrganizationsSourcesResponse = /*@__PURE__*/ Source;

export type PatchOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsSources: API.OperationMethod<
  PatchOrganizationsSourcesRequest,
  PatchOrganizationsSourcesResponse,
  PatchOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSourcesRequest,
  output: PatchOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMuteOrganizationsSourcesFindingsRequest {
  name: string;
  /** Request body */
  body?: SetMuteRequest;
}

export const SetMuteOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMuteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setMute", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SetMuteOrganizationsSourcesFindingsRequest>;

export type SetMuteOrganizationsSourcesFindingsResponse = Finding;
export const SetMuteOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ Finding;

export type SetMuteOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setMuteOrganizationsSourcesFindings: API.OperationMethod<
  SetMuteOrganizationsSourcesFindingsRequest,
  SetMuteOrganizationsSourcesFindingsResponse,
  SetMuteOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetMuteOrganizationsSourcesFindingsRequest,
  output: SetMuteOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityMarksOrganizationsSourcesFindingsRequest {
  updateMask?: string;
  startTime?: string;
  name: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityMarksOrganizationsSourcesFindingsRequest>;

export type UpdateSecurityMarksOrganizationsSourcesFindingsResponse =
  SecurityMarks;
export const UpdateSecurityMarksOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityMarksOrganizationsSourcesFindings: API.OperationMethod<
  UpdateSecurityMarksOrganizationsSourcesFindingsRequest,
  UpdateSecurityMarksOrganizationsSourcesFindingsResponse,
  UpdateSecurityMarksOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksOrganizationsSourcesFindingsRequest,
  output: UpdateSecurityMarksOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsSourcesFindingsRequest {
  compareDuration?: string;
  fieldMask?: string;
  parent: string;
  orderBy?: string;
  readTime?: string;
  pageToken?: string;
  pageSize?: number;
  filter?: string;
}

export const ListOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSourcesFindingsRequest>;

export type ListOrganizationsSourcesFindingsResponse = ListFindingsResponse;
export const ListOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ ListFindingsResponse;

export type ListOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsSourcesFindings: API.PaginatedOperationMethod<
  ListOrganizationsSourcesFindingsRequest,
  ListOrganizationsSourcesFindingsResponse,
  ListOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSourcesFindingsRequest,
  output: ListOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsSourcesFindingsRequest {
  parent: string;
  findingId?: string;
  /** Request body */
  body?: Finding;
}

export const CreateOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    findingId: Schema.optional(Schema.String).pipe(T.HttpQuery("findingId")),
    body: Schema.optional(Finding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/findings", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsSourcesFindingsRequest>;

export type CreateOrganizationsSourcesFindingsResponse = Finding;
export const CreateOrganizationsSourcesFindingsResponse = /*@__PURE__*/ Finding;

export type CreateOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createOrganizationsSourcesFindings: API.OperationMethod<
  CreateOrganizationsSourcesFindingsRequest,
  CreateOrganizationsSourcesFindingsResponse,
  CreateOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsSourcesFindingsRequest,
  output: CreateOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetStateOrganizationsSourcesFindingsRequest {
  name: string;
  /** Request body */
  body?: SetFindingStateRequest;
}

export const SetStateOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetFindingStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setState", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SetStateOrganizationsSourcesFindingsRequest>;

export type SetStateOrganizationsSourcesFindingsResponse = Finding;
export const SetStateOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ Finding;

export type SetStateOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setStateOrganizationsSourcesFindings: API.OperationMethod<
  SetStateOrganizationsSourcesFindingsRequest,
  SetStateOrganizationsSourcesFindingsResponse,
  SetStateOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetStateOrganizationsSourcesFindingsRequest,
  output: SetStateOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsSourcesFindingsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: Finding;
}

export const PatchOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Finding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsSourcesFindingsRequest>;

export type PatchOrganizationsSourcesFindingsResponse = Finding;
export const PatchOrganizationsSourcesFindingsResponse = /*@__PURE__*/ Finding;

export type PatchOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsSourcesFindings: API.OperationMethod<
  PatchOrganizationsSourcesFindingsRequest,
  PatchOrganizationsSourcesFindingsResponse,
  PatchOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSourcesFindingsRequest,
  output: PatchOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupOrganizationsSourcesFindingsRequest {
  parent: string;
  /** Request body */
  body?: GroupFindingsRequest;
}

export const GroupOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GroupOrganizationsSourcesFindingsRequest>;

export type GroupOrganizationsSourcesFindingsResponse = GroupFindingsResponse;
export const GroupOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ GroupFindingsResponse;

export type GroupOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const groupOrganizationsSourcesFindings: API.OperationMethod<
  GroupOrganizationsSourcesFindingsRequest,
  GroupOrganizationsSourcesFindingsResponse,
  GroupOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GroupOrganizationsSourcesFindingsRequest,
  output: GroupOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsSourcesFindingsExternalSystemsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1ExternalSystem;
}

export const PatchOrganizationsSourcesFindingsExternalSystemsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1ExternalSystem).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsSourcesFindingsExternalSystemsRequest>;

export type PatchOrganizationsSourcesFindingsExternalSystemsResponse =
  GoogleCloudSecuritycenterV1ExternalSystem;
export const PatchOrganizationsSourcesFindingsExternalSystemsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1ExternalSystem;

export type PatchOrganizationsSourcesFindingsExternalSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsSourcesFindingsExternalSystems: API.OperationMethod<
  PatchOrganizationsSourcesFindingsExternalSystemsRequest,
  PatchOrganizationsSourcesFindingsExternalSystemsResponse,
  PatchOrganizationsSourcesFindingsExternalSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSourcesFindingsExternalSystemsRequest,
  output: PatchOrganizationsSourcesFindingsExternalSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsOperationsRequest {
  name: string;
}

export const GetOrganizationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsOperationsRequest>;

export type GetOrganizationsOperationsResponse = Operation;
export const GetOrganizationsOperationsResponse = /*@__PURE__*/ Operation;

export type GetOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsOperations: API.OperationMethod<
  GetOrganizationsOperationsRequest,
  GetOrganizationsOperationsResponse,
  GetOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsOperationsRequest,
  output: GetOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelOrganizationsOperationsRequest {
  name: string;
}

export const CancelOrganizationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelOrganizationsOperationsRequest>;

export type CancelOrganizationsOperationsResponse = Empty;
export const CancelOrganizationsOperationsResponse = /*@__PURE__*/ Empty;

export type CancelOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const cancelOrganizationsOperations: API.OperationMethod<
  CancelOrganizationsOperationsRequest,
  CancelOrganizationsOperationsResponse,
  CancelOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelOrganizationsOperationsRequest,
  output: CancelOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsOperationsRequest {
  name: string;
}

export const DeleteOrganizationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsOperationsRequest>;

export type DeleteOrganizationsOperationsResponse = Empty;
export const DeleteOrganizationsOperationsResponse = /*@__PURE__*/ Empty;

export type DeleteOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteOrganizationsOperations: API.OperationMethod<
  DeleteOrganizationsOperationsRequest,
  DeleteOrganizationsOperationsResponse,
  DeleteOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsOperationsRequest,
  output: DeleteOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsOperationsRequest {
  name: string;
  returnPartialSuccess?: boolean;
  pageSize?: number;
  pageToken?: string;
  filter?: string;
}

export const ListOrganizationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsOperationsRequest>;

export type ListOrganizationsOperationsResponse = ListOperationsResponse;
export const ListOrganizationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

export type ListOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsOperationsRequest,
  ListOrganizationsOperationsResponse,
  ListOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsOperationsRequest,
  output: ListOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsLocationsMuteConfigsRequest {
  name: string;
}

export const DeleteOrganizationsLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsLocationsMuteConfigsRequest>;

export type DeleteOrganizationsLocationsMuteConfigsResponse = Empty;
export const DeleteOrganizationsLocationsMuteConfigsResponse =
  /*@__PURE__*/ Empty;

export type DeleteOrganizationsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteOrganizationsLocationsMuteConfigs: API.OperationMethod<
  DeleteOrganizationsLocationsMuteConfigsRequest,
  DeleteOrganizationsLocationsMuteConfigsResponse,
  DeleteOrganizationsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsMuteConfigsRequest,
  output: DeleteOrganizationsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsMuteConfigsRequest {
  name: string;
}

export const GetOrganizationsLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsMuteConfigsRequest>;

export type GetOrganizationsLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetOrganizationsLocationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetOrganizationsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsLocationsMuteConfigs: API.OperationMethod<
  GetOrganizationsLocationsMuteConfigsRequest,
  GetOrganizationsLocationsMuteConfigsResponse,
  GetOrganizationsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsMuteConfigsRequest,
  output: GetOrganizationsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchOrganizationsLocationsMuteConfigsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchOrganizationsLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsLocationsMuteConfigsRequest>;

export type PatchOrganizationsLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchOrganizationsLocationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchOrganizationsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsLocationsMuteConfigs: API.OperationMethod<
  PatchOrganizationsLocationsMuteConfigsRequest,
  PatchOrganizationsLocationsMuteConfigsResponse,
  PatchOrganizationsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsMuteConfigsRequest,
  output: PatchOrganizationsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BulkMuteOrganizationsFindingsRequest {
  parent: string;
  /** Request body */
  body?: BulkMuteFindingsRequest;
}

export const BulkMuteOrganizationsFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BulkMuteFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:bulkMute",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BulkMuteOrganizationsFindingsRequest>;

export type BulkMuteOrganizationsFindingsResponse = Operation;
export const BulkMuteOrganizationsFindingsResponse = /*@__PURE__*/ Operation;

export type BulkMuteOrganizationsFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const bulkMuteOrganizationsFindings: API.OperationMethod<
  BulkMuteOrganizationsFindingsRequest,
  BulkMuteOrganizationsFindingsResponse,
  BulkMuteOrganizationsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BulkMuteOrganizationsFindingsRequest,
  output: BulkMuteOrganizationsFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityMarksOrganizationsAssetsRequest {
  updateMask?: string;
  startTime?: string;
  name: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksOrganizationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityMarksOrganizationsAssetsRequest>;

export type UpdateSecurityMarksOrganizationsAssetsResponse = SecurityMarks;
export const UpdateSecurityMarksOrganizationsAssetsResponse =
  /*@__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityMarksOrganizationsAssets: API.OperationMethod<
  UpdateSecurityMarksOrganizationsAssetsRequest,
  UpdateSecurityMarksOrganizationsAssetsResponse,
  UpdateSecurityMarksOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksOrganizationsAssetsRequest,
  output: UpdateSecurityMarksOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsAssetsRequest {
  parent: string;
  orderBy?: string;
  readTime?: string;
  pageToken?: string;
  pageSize?: number;
  filter?: string;
  compareDuration?: string;
  fieldMask?: string;
}

export const ListOrganizationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsAssetsRequest>;

export type ListOrganizationsAssetsResponse = ListAssetsResponse;
export const ListOrganizationsAssetsResponse = /*@__PURE__*/ ListAssetsResponse;

export type ListOrganizationsAssetsError = DefaultErrors | NotFound | Forbidden;

export const listOrganizationsAssets: API.PaginatedOperationMethod<
  ListOrganizationsAssetsRequest,
  ListOrganizationsAssetsResponse,
  ListOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsAssetsRequest,
  output: ListOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GroupOrganizationsAssetsRequest {
  parent: string;
  /** Request body */
  body?: GroupAssetsRequest;
}

export const GroupOrganizationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GroupOrganizationsAssetsRequest>;

export type GroupOrganizationsAssetsResponse = GroupAssetsResponse;
export const GroupOrganizationsAssetsResponse =
  /*@__PURE__*/ GroupAssetsResponse;

export type GroupOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const groupOrganizationsAssets: API.OperationMethod<
  GroupOrganizationsAssetsRequest,
  GroupOrganizationsAssetsResponse,
  GroupOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GroupOrganizationsAssetsRequest,
  output: GroupOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunDiscoveryOrganizationsAssetsRequest {
  parent: string;
  /** Request body */
  body?: RunAssetDiscoveryRequest;
}

export const RunDiscoveryOrganizationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RunAssetDiscoveryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:runDiscovery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RunDiscoveryOrganizationsAssetsRequest>;

export type RunDiscoveryOrganizationsAssetsResponse = Operation;
export const RunDiscoveryOrganizationsAssetsResponse = /*@__PURE__*/ Operation;

export type RunDiscoveryOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const runDiscoveryOrganizationsAssets: API.OperationMethod<
  RunDiscoveryOrganizationsAssetsRequest,
  RunDiscoveryOrganizationsAssetsResponse,
  RunDiscoveryOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunDiscoveryOrganizationsAssetsRequest,
  output: RunDiscoveryOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsSimulationsRequest {
  name: string;
}

export const GetOrganizationsSimulationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsSimulationsRequest>;

export type GetOrganizationsSimulationsResponse = Simulation;
export const GetOrganizationsSimulationsResponse = /*@__PURE__*/ Simulation;

export type GetOrganizationsSimulationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsSimulations: API.OperationMethod<
  GetOrganizationsSimulationsRequest,
  GetOrganizationsSimulationsResponse,
  GetOrganizationsSimulationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsSimulationsRequest,
  output: GetOrganizationsSimulationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest {
  filter?: string;
  parent: string;
  pageToken?: string;
  pageSize?: number;
  orderBy?: string;
}

export const ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/valuedResources" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest>;

export type ListOrganizationsSimulationsAttackExposureResultsValuedResourcesResponse =
  ListValuedResourcesResponse;
export const ListOrganizationsSimulationsAttackExposureResultsValuedResourcesResponse =
  /*@__PURE__*/ ListValuedResourcesResponse;

export type ListOrganizationsSimulationsAttackExposureResultsValuedResourcesError =
  DefaultErrors | NotFound | Forbidden;

export const listOrganizationsSimulationsAttackExposureResultsValuedResources: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest,
  ListOrganizationsSimulationsAttackExposureResultsValuedResourcesResponse,
  ListOrganizationsSimulationsAttackExposureResultsValuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest,
  output:
    ListOrganizationsSimulationsAttackExposureResultsValuedResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
  filter?: string;
}

export const ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attackPaths" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest>;

export type ListOrganizationsSimulationsAttackExposureResultsAttackPathsResponse =
  ListAttackPathsResponse;
export const ListOrganizationsSimulationsAttackExposureResultsAttackPathsResponse =
  /*@__PURE__*/ ListAttackPathsResponse;

export type ListOrganizationsSimulationsAttackExposureResultsAttackPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsSimulationsAttackExposureResultsAttackPaths: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest,
  ListOrganizationsSimulationsAttackExposureResultsAttackPathsResponse,
  ListOrganizationsSimulationsAttackExposureResultsAttackPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest,
  output: ListOrganizationsSimulationsAttackExposureResultsAttackPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsSimulationsAttackPathsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
  filter?: string;
}

export const ListOrganizationsSimulationsAttackPathsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attackPaths" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSimulationsAttackPathsRequest>;

export type ListOrganizationsSimulationsAttackPathsResponse =
  ListAttackPathsResponse;
export const ListOrganizationsSimulationsAttackPathsResponse =
  /*@__PURE__*/ ListAttackPathsResponse;

export type ListOrganizationsSimulationsAttackPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsSimulationsAttackPaths: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsAttackPathsRequest,
  ListOrganizationsSimulationsAttackPathsResponse,
  ListOrganizationsSimulationsAttackPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSimulationsAttackPathsRequest,
  output: ListOrganizationsSimulationsAttackPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsSimulationsValuedResourcesRequest {
  name: string;
}

export const GetOrganizationsSimulationsValuedResourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsSimulationsValuedResourcesRequest>;

export type GetOrganizationsSimulationsValuedResourcesResponse = ValuedResource;
export const GetOrganizationsSimulationsValuedResourcesResponse =
  /*@__PURE__*/ ValuedResource;

export type GetOrganizationsSimulationsValuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsSimulationsValuedResources: API.OperationMethod<
  GetOrganizationsSimulationsValuedResourcesRequest,
  GetOrganizationsSimulationsValuedResourcesResponse,
  GetOrganizationsSimulationsValuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsSimulationsValuedResourcesRequest,
  output: GetOrganizationsSimulationsValuedResourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsSimulationsValuedResourcesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
  orderBy?: string;
  filter?: string;
}

export const ListOrganizationsSimulationsValuedResourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/valuedResources" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSimulationsValuedResourcesRequest>;

export type ListOrganizationsSimulationsValuedResourcesResponse =
  ListValuedResourcesResponse;
export const ListOrganizationsSimulationsValuedResourcesResponse =
  /*@__PURE__*/ ListValuedResourcesResponse;

export type ListOrganizationsSimulationsValuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsSimulationsValuedResources: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsValuedResourcesRequest,
  ListOrganizationsSimulationsValuedResourcesResponse,
  ListOrganizationsSimulationsValuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSimulationsValuedResourcesRequest,
  output: ListOrganizationsSimulationsValuedResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsSimulationsValuedResourcesAttackPathsRequest {
  filter?: string;
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListOrganizationsSimulationsValuedResourcesAttackPathsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attackPaths" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSimulationsValuedResourcesAttackPathsRequest>;

export type ListOrganizationsSimulationsValuedResourcesAttackPathsResponse =
  ListAttackPathsResponse;
export const ListOrganizationsSimulationsValuedResourcesAttackPathsResponse =
  /*@__PURE__*/ ListAttackPathsResponse;

export type ListOrganizationsSimulationsValuedResourcesAttackPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsSimulationsValuedResourcesAttackPaths: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsValuedResourcesAttackPathsRequest,
  ListOrganizationsSimulationsValuedResourcesAttackPathsResponse,
  ListOrganizationsSimulationsValuedResourcesAttackPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSimulationsValuedResourcesAttackPathsRequest,
  output: ListOrganizationsSimulationsValuedResourcesAttackPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsNotificationConfigsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notificationConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsNotificationConfigsRequest>;

export type ListOrganizationsNotificationConfigsResponse =
  ListNotificationConfigsResponse;
export const ListOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ ListNotificationConfigsResponse;

export type ListOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsNotificationConfigs: API.PaginatedOperationMethod<
  ListOrganizationsNotificationConfigsRequest,
  ListOrganizationsNotificationConfigsResponse,
  ListOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsNotificationConfigsRequest,
  output: ListOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsNotificationConfigsRequest {
  parent: string;
  configId?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const CreateOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    configId: Schema.optional(Schema.String).pipe(T.HttpQuery("configId")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/notificationConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsNotificationConfigsRequest>;

export type CreateOrganizationsNotificationConfigsResponse = NotificationConfig;
export const CreateOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type CreateOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createOrganizationsNotificationConfigs: API.OperationMethod<
  CreateOrganizationsNotificationConfigsRequest,
  CreateOrganizationsNotificationConfigsResponse,
  CreateOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsNotificationConfigsRequest,
  output: CreateOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsNotificationConfigsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: NotificationConfig;
}

export const PatchOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsNotificationConfigsRequest>;

export type PatchOrganizationsNotificationConfigsResponse = NotificationConfig;
export const PatchOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type PatchOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsNotificationConfigs: API.OperationMethod<
  PatchOrganizationsNotificationConfigsRequest,
  PatchOrganizationsNotificationConfigsResponse,
  PatchOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsNotificationConfigsRequest,
  output: PatchOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsNotificationConfigsRequest {
  name: string;
}

export const DeleteOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsNotificationConfigsRequest>;

export type DeleteOrganizationsNotificationConfigsResponse = Empty;
export const DeleteOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ Empty;

export type DeleteOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteOrganizationsNotificationConfigs: API.OperationMethod<
  DeleteOrganizationsNotificationConfigsRequest,
  DeleteOrganizationsNotificationConfigsResponse,
  DeleteOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsNotificationConfigsRequest,
  output: DeleteOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsNotificationConfigsRequest {
  name: string;
}

export const GetOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsNotificationConfigsRequest>;

export type GetOrganizationsNotificationConfigsResponse = NotificationConfig;
export const GetOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type GetOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsNotificationConfigs: API.OperationMethod<
  GetOrganizationsNotificationConfigsRequest,
  GetOrganizationsNotificationConfigsResponse,
  GetOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsNotificationConfigsRequest,
  output: GetOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsAttackPathsRequest {
  filter?: string;
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListOrganizationsAttackPathsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attackPaths" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsAttackPathsRequest>;

export type ListOrganizationsAttackPathsResponse = ListAttackPathsResponse;
export const ListOrganizationsAttackPathsResponse =
  /*@__PURE__*/ ListAttackPathsResponse;

export type ListOrganizationsAttackPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsAttackPaths: API.PaginatedOperationMethod<
  ListOrganizationsAttackPathsRequest,
  ListOrganizationsAttackPathsResponse,
  ListOrganizationsAttackPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsAttackPathsRequest,
  output: ListOrganizationsAttackPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  name: string;
}

export const GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;
export const GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;

export type GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const getOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.OperationMethod<
  GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;
export const ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

export type ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListSecurityHealthAnalyticsCustomModulesResponse;
export const ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ ListSecurityHealthAnalyticsCustomModulesResponse;

export type ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

export const createOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

export const patchOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: SimulateSecurityHealthAnalyticsCustomModuleRequest;
}

export const SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      SimulateSecurityHealthAnalyticsCustomModuleRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules:simulate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  SimulateSecurityHealthAnalyticsCustomModuleResponse;
export const SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ SimulateSecurityHealthAnalyticsCustomModuleResponse;

export type SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

export const simulateOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Codec<ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListDescendantSecurityHealthAnalyticsCustomModulesResponse;
export const ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

export type ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  name: string;
}

export const DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  Empty;
export const DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ Empty;

export type DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden | BadRequest | Conflict;

export const deleteOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  name: string;
}

export const GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsMuteConfigsRequest {
  name: string;
}

export const GetOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsMuteConfigsRequest>;

export type GetOrganizationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getOrganizationsMuteConfigs: API.OperationMethod<
  GetOrganizationsMuteConfigsRequest,
  GetOrganizationsMuteConfigsResponse,
  GetOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsMuteConfigsRequest,
  output: GetOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsMuteConfigsRequest {
  name: string;
}

export const DeleteOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsMuteConfigsRequest>;

export type DeleteOrganizationsMuteConfigsResponse = Empty;
export const DeleteOrganizationsMuteConfigsResponse = /*@__PURE__*/ Empty;

export type DeleteOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteOrganizationsMuteConfigs: API.OperationMethod<
  DeleteOrganizationsMuteConfigsRequest,
  DeleteOrganizationsMuteConfigsResponse,
  DeleteOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsMuteConfigsRequest,
  output: DeleteOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsMuteConfigsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/muteConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsMuteConfigsRequest>;

export type ListOrganizationsMuteConfigsResponse = ListMuteConfigsResponse;
export const ListOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ ListMuteConfigsResponse;

export type ListOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listOrganizationsMuteConfigs: API.PaginatedOperationMethod<
  ListOrganizationsMuteConfigsRequest,
  ListOrganizationsMuteConfigsResponse,
  ListOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsMuteConfigsRequest,
  output: ListOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsMuteConfigsRequest {
  parent: string;
  muteConfigId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const CreateOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    muteConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("muteConfigId"),
    ),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/muteConfigs", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsMuteConfigsRequest>;

export type CreateOrganizationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const CreateOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type CreateOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createOrganizationsMuteConfigs: API.OperationMethod<
  CreateOrganizationsMuteConfigsRequest,
  CreateOrganizationsMuteConfigsResponse,
  CreateOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsMuteConfigsRequest,
  output: CreateOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsMuteConfigsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsMuteConfigsRequest>;

export type PatchOrganizationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchOrganizationsMuteConfigs: API.OperationMethod<
  PatchOrganizationsMuteConfigsRequest,
  PatchOrganizationsMuteConfigsResponse,
  PatchOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsMuteConfigsRequest,
  output: PatchOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsNotificationConfigsRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notificationConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsNotificationConfigsRequest>;

export type ListProjectsNotificationConfigsResponse =
  ListNotificationConfigsResponse;
export const ListProjectsNotificationConfigsResponse =
  /*@__PURE__*/ ListNotificationConfigsResponse;

export type ListProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsNotificationConfigs: API.PaginatedOperationMethod<
  ListProjectsNotificationConfigsRequest,
  ListProjectsNotificationConfigsResponse,
  ListProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsNotificationConfigsRequest,
  output: ListProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsNotificationConfigsRequest {
  parent: string;
  configId?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const CreateProjectsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    configId: Schema.optional(Schema.String).pipe(T.HttpQuery("configId")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/notificationConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsNotificationConfigsRequest>;

export type CreateProjectsNotificationConfigsResponse = NotificationConfig;
export const CreateProjectsNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type CreateProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsNotificationConfigs: API.OperationMethod<
  CreateProjectsNotificationConfigsRequest,
  CreateProjectsNotificationConfigsResponse,
  CreateProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsNotificationConfigsRequest,
  output: CreateProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsNotificationConfigsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const PatchProjectsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsNotificationConfigsRequest>;

export type PatchProjectsNotificationConfigsResponse = NotificationConfig;
export const PatchProjectsNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type PatchProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsNotificationConfigs: API.OperationMethod<
  PatchProjectsNotificationConfigsRequest,
  PatchProjectsNotificationConfigsResponse,
  PatchProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsNotificationConfigsRequest,
  output: PatchProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsNotificationConfigsRequest {
  name: string;
}

export const DeleteProjectsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsNotificationConfigsRequest>;

export type DeleteProjectsNotificationConfigsResponse = Empty;
export const DeleteProjectsNotificationConfigsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsNotificationConfigs: API.OperationMethod<
  DeleteProjectsNotificationConfigsRequest,
  DeleteProjectsNotificationConfigsResponse,
  DeleteProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsNotificationConfigsRequest,
  output: DeleteProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsNotificationConfigsRequest {
  name: string;
}

export const GetProjectsNotificationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsNotificationConfigsRequest>;

export type GetProjectsNotificationConfigsResponse = NotificationConfig;
export const GetProjectsNotificationConfigsResponse =
  /*@__PURE__*/ NotificationConfig;

export type GetProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsNotificationConfigs: API.OperationMethod<
  GetProjectsNotificationConfigsRequest,
  GetProjectsNotificationConfigsResponse,
  GetProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsNotificationConfigsRequest,
  output: GetProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsSourcesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsSourcesRequest>;

export type ListProjectsSourcesResponse = ListSourcesResponse;
export const ListProjectsSourcesResponse = /*@__PURE__*/ ListSourcesResponse;

export type ListProjectsSourcesError = DefaultErrors | NotFound | Forbidden;

export const listProjectsSources: API.PaginatedOperationMethod<
  ListProjectsSourcesRequest,
  ListProjectsSourcesResponse,
  ListProjectsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSourcesRequest,
  output: ListProjectsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetStateProjectsSourcesFindingsRequest {
  name: string;
  /** Request body */
  body?: SetFindingStateRequest;
}

export const SetStateProjectsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetFindingStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setState", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SetStateProjectsSourcesFindingsRequest>;

export type SetStateProjectsSourcesFindingsResponse = Finding;
export const SetStateProjectsSourcesFindingsResponse = /*@__PURE__*/ Finding;

export type SetStateProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setStateProjectsSourcesFindings: API.OperationMethod<
  SetStateProjectsSourcesFindingsRequest,
  SetStateProjectsSourcesFindingsResponse,
  SetStateProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetStateProjectsSourcesFindingsRequest,
  output: SetStateProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsSourcesFindingsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: Finding;
}

export const PatchProjectsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Finding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsSourcesFindingsRequest>;

export type PatchProjectsSourcesFindingsResponse = Finding;
export const PatchProjectsSourcesFindingsResponse = /*@__PURE__*/ Finding;

export type PatchProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsSourcesFindings: API.OperationMethod<
  PatchProjectsSourcesFindingsRequest,
  PatchProjectsSourcesFindingsResponse,
  PatchProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsSourcesFindingsRequest,
  output: PatchProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupProjectsSourcesFindingsRequest {
  parent: string;
  /** Request body */
  body?: GroupFindingsRequest;
}

export const GroupProjectsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GroupProjectsSourcesFindingsRequest>;

export type GroupProjectsSourcesFindingsResponse = GroupFindingsResponse;
export const GroupProjectsSourcesFindingsResponse =
  /*@__PURE__*/ GroupFindingsResponse;

export type GroupProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const groupProjectsSourcesFindings: API.OperationMethod<
  GroupProjectsSourcesFindingsRequest,
  GroupProjectsSourcesFindingsResponse,
  GroupProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GroupProjectsSourcesFindingsRequest,
  output: GroupProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsSourcesFindingsRequest {
  filter?: string;
  parent: string;
  orderBy?: string;
  readTime?: string;
  pageToken?: string;
  pageSize?: number;
  fieldMask?: string;
  compareDuration?: string;
}

export const ListProjectsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsSourcesFindingsRequest>;

export type ListProjectsSourcesFindingsResponse = ListFindingsResponse;
export const ListProjectsSourcesFindingsResponse =
  /*@__PURE__*/ ListFindingsResponse;

export type ListProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsSourcesFindings: API.PaginatedOperationMethod<
  ListProjectsSourcesFindingsRequest,
  ListProjectsSourcesFindingsResponse,
  ListProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSourcesFindingsRequest,
  output: ListProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetMuteProjectsSourcesFindingsRequest {
  name: string;
  /** Request body */
  body?: SetMuteRequest;
}

export const SetMuteProjectsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMuteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setMute", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SetMuteProjectsSourcesFindingsRequest>;

export type SetMuteProjectsSourcesFindingsResponse = Finding;
export const SetMuteProjectsSourcesFindingsResponse = /*@__PURE__*/ Finding;

export type SetMuteProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const setMuteProjectsSourcesFindings: API.OperationMethod<
  SetMuteProjectsSourcesFindingsRequest,
  SetMuteProjectsSourcesFindingsResponse,
  SetMuteProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetMuteProjectsSourcesFindingsRequest,
  output: SetMuteProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityMarksProjectsSourcesFindingsRequest {
  updateMask?: string;
  startTime?: string;
  name: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksProjectsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityMarksProjectsSourcesFindingsRequest>;

export type UpdateSecurityMarksProjectsSourcesFindingsResponse = SecurityMarks;
export const UpdateSecurityMarksProjectsSourcesFindingsResponse =
  /*@__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityMarksProjectsSourcesFindings: API.OperationMethod<
  UpdateSecurityMarksProjectsSourcesFindingsRequest,
  UpdateSecurityMarksProjectsSourcesFindingsResponse,
  UpdateSecurityMarksProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksProjectsSourcesFindingsRequest,
  output: UpdateSecurityMarksProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsSourcesFindingsExternalSystemsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1ExternalSystem;
}

export const PatchProjectsSourcesFindingsExternalSystemsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1ExternalSystem).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsSourcesFindingsExternalSystemsRequest>;

export type PatchProjectsSourcesFindingsExternalSystemsResponse =
  GoogleCloudSecuritycenterV1ExternalSystem;
export const PatchProjectsSourcesFindingsExternalSystemsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1ExternalSystem;

export type PatchProjectsSourcesFindingsExternalSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsSourcesFindingsExternalSystems: API.OperationMethod<
  PatchProjectsSourcesFindingsExternalSystemsRequest,
  PatchProjectsSourcesFindingsExternalSystemsResponse,
  PatchProjectsSourcesFindingsExternalSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsSourcesFindingsExternalSystemsRequest,
  output: PatchProjectsSourcesFindingsExternalSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsMuteConfigsRequest {
  name: string;
}

export const DeleteProjectsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsMuteConfigsRequest>;

export type DeleteProjectsMuteConfigsResponse = Empty;
export const DeleteProjectsMuteConfigsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsMuteConfigs: API.OperationMethod<
  DeleteProjectsMuteConfigsRequest,
  DeleteProjectsMuteConfigsResponse,
  DeleteProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsMuteConfigsRequest,
  output: DeleteProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsMuteConfigsRequest {
  name: string;
}

export const GetProjectsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsMuteConfigsRequest>;

export type GetProjectsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetProjectsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetProjectsMuteConfigsError = DefaultErrors | NotFound | Forbidden;

export const getProjectsMuteConfigs: API.OperationMethod<
  GetProjectsMuteConfigsRequest,
  GetProjectsMuteConfigsResponse,
  GetProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsMuteConfigsRequest,
  output: GetProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsMuteConfigsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/muteConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsMuteConfigsRequest>;

export type ListProjectsMuteConfigsResponse = ListMuteConfigsResponse;
export const ListProjectsMuteConfigsResponse =
  /*@__PURE__*/ ListMuteConfigsResponse;

export type ListProjectsMuteConfigsError = DefaultErrors | NotFound | Forbidden;

export const listProjectsMuteConfigs: API.PaginatedOperationMethod<
  ListProjectsMuteConfigsRequest,
  ListProjectsMuteConfigsResponse,
  ListProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsMuteConfigsRequest,
  output: ListProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsMuteConfigsRequest {
  parent: string;
  muteConfigId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const CreateProjectsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    muteConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("muteConfigId"),
    ),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/muteConfigs", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsMuteConfigsRequest>;

export type CreateProjectsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const CreateProjectsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type CreateProjectsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsMuteConfigs: API.OperationMethod<
  CreateProjectsMuteConfigsRequest,
  CreateProjectsMuteConfigsResponse,
  CreateProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsMuteConfigsRequest,
  output: CreateProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsMuteConfigsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchProjectsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsMuteConfigsRequest>;

export type PatchProjectsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchProjectsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchProjectsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsMuteConfigs: API.OperationMethod<
  PatchProjectsMuteConfigsRequest,
  PatchProjectsMuteConfigsResponse,
  PatchProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsMuteConfigsRequest,
  output: PatchProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BulkMuteProjectsFindingsRequest {
  parent: string;
  /** Request body */
  body?: BulkMuteFindingsRequest;
}

export const BulkMuteProjectsFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BulkMuteFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:bulkMute",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BulkMuteProjectsFindingsRequest>;

export type BulkMuteProjectsFindingsResponse = Operation;
export const BulkMuteProjectsFindingsResponse = /*@__PURE__*/ Operation;

export type BulkMuteProjectsFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const bulkMuteProjectsFindings: API.OperationMethod<
  BulkMuteProjectsFindingsRequest,
  BulkMuteProjectsFindingsResponse,
  BulkMuteProjectsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BulkMuteProjectsFindingsRequest,
  output: BulkMuteProjectsFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMuteConfigsRequest {
  name: string;
}

export const DeleteProjectsLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsMuteConfigsRequest>;

export type DeleteProjectsLocationsMuteConfigsResponse = Empty;
export const DeleteProjectsLocationsMuteConfigsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsLocationsMuteConfigs: API.OperationMethod<
  DeleteProjectsLocationsMuteConfigsRequest,
  DeleteProjectsLocationsMuteConfigsResponse,
  DeleteProjectsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMuteConfigsRequest,
  output: DeleteProjectsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMuteConfigsRequest {
  name: string;
}

export const GetProjectsLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsMuteConfigsRequest>;

export type GetProjectsLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetProjectsLocationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetProjectsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsMuteConfigs: API.OperationMethod<
  GetProjectsLocationsMuteConfigsRequest,
  GetProjectsLocationsMuteConfigsResponse,
  GetProjectsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMuteConfigsRequest,
  output: GetProjectsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMuteConfigsRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchProjectsLocationsMuteConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsMuteConfigsRequest>;

export type PatchProjectsLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchProjectsLocationsMuteConfigsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchProjectsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsLocationsMuteConfigs: API.OperationMethod<
  PatchProjectsLocationsMuteConfigsRequest,
  PatchProjectsLocationsMuteConfigsResponse,
  PatchProjectsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMuteConfigsRequest,
  output: PatchProjectsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  name: string;
}

export const GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;
export const GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;

export type GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const getProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.OperationMethod<
  GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;
export const ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

export type ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListSecurityHealthAnalyticsCustomModulesResponse;
export const ListProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ ListSecurityHealthAnalyticsCustomModulesResponse;

export type ListProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: ListProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  name: string;
}

export const DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  Empty;
export const DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ Empty;

export type DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  name: string;
}

export const GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type GetProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const GetProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type GetProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  GetProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  GetProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: GetProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: SimulateSecurityHealthAnalyticsCustomModuleRequest;
}

export const SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      SimulateSecurityHealthAnalyticsCustomModuleRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules:simulate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  SimulateSecurityHealthAnalyticsCustomModuleResponse;
export const SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ SimulateSecurityHealthAnalyticsCustomModuleResponse;

export type SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const simulateProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Codec<ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListDescendantSecurityHealthAnalyticsCustomModulesResponse;
export const ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

export type ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listDescendantProjectsSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest {
  parent: string;
  /** Request body */
  body?: ValidateEventThreatDetectionCustomModuleRequest;
}

export const ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ValidateEventThreatDetectionCustomModuleRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:validateCustomModule",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest>;

export type ValidateCustomModuleProjectsEventThreatDetectionSettingsResponse =
  ValidateEventThreatDetectionCustomModuleResponse;
export const ValidateCustomModuleProjectsEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ ValidateEventThreatDetectionCustomModuleResponse;

export type ValidateCustomModuleProjectsEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const validateCustomModuleProjectsEventThreatDetectionSettings: API.OperationMethod<
  ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest,
  ValidateCustomModuleProjectsEventThreatDetectionSettingsResponse,
  ValidateCustomModuleProjectsEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest,
  output: ValidateCustomModuleProjectsEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  name: string;
}

export const GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  EffectiveEventThreatDetectionCustomModule;
export const GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ EffectiveEventThreatDetectionCustomModule;

export type GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const getProjectsEventThreatDetectionSettingsEffectiveCustomModules: API.OperationMethod<
  GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output: GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  ListEffectiveEventThreatDetectionCustomModulesResponse;
export const ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ ListEffectiveEventThreatDetectionCustomModulesResponse;

export type ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listProjectsEventThreatDetectionSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output:
    ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Codec<ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type ListDescendantProjectsEventThreatDetectionSettingsCustomModulesResponse =
  ListDescendantEventThreatDetectionCustomModulesResponse;
export const ListDescendantProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ ListDescendantEventThreatDetectionCustomModulesResponse;

export type ListDescendantProjectsEventThreatDetectionSettingsCustomModulesError =
  DefaultErrors | NotFound | Forbidden;

export const listDescendantProjectsEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest,
  ListDescendantProjectsEventThreatDetectionSettingsCustomModulesResponse,
  ListDescendantProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output:
    ListDescendantProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsEventThreatDetectionSettingsCustomModulesRequest {
  name: string;
}

export const GetProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type GetProjectsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const GetProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type GetProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  GetProjectsEventThreatDetectionSettingsCustomModulesRequest,
  GetProjectsEventThreatDetectionSettingsCustomModulesResponse,
  GetProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: GetProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest {
  name: string;
}

export const DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type DeleteProjectsEventThreatDetectionSettingsCustomModulesResponse =
  Empty;
export const DeleteProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ Empty;

export type DeleteProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest,
  DeleteProjectsEventThreatDetectionSettingsCustomModulesResponse,
  DeleteProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: DeleteProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  pageToken?: string;
  pageSize?: number;
}

export const ListProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type ListProjectsEventThreatDetectionSettingsCustomModulesResponse =
  ListEventThreatDetectionCustomModulesResponse;
export const ListProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ ListEventThreatDetectionCustomModulesResponse;

export type ListProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListProjectsEventThreatDetectionSettingsCustomModulesRequest,
  ListProjectsEventThreatDetectionSettingsCustomModulesResponse,
  ListProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: ListProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsEventThreatDetectionSettingsCustomModulesRequest {
  parent: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const CreateProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type CreateProjectsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const CreateProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type CreateProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  CreateProjectsEventThreatDetectionSettingsCustomModulesRequest,
  CreateProjectsEventThreatDetectionSettingsCustomModulesResponse,
  CreateProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: CreateProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsEventThreatDetectionSettingsCustomModulesRequest {
  updateMask?: string;
  name: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const PatchProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type PatchProjectsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const PatchProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ EventThreatDetectionCustomModule;

export type PatchProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  PatchProjectsEventThreatDetectionSettingsCustomModulesRequest,
  PatchProjectsEventThreatDetectionSettingsCustomModulesResponse,
  PatchProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: PatchProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupProjectsAssetsRequest {
  parent: string;
  /** Request body */
  body?: GroupAssetsRequest;
}

export const GroupProjectsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GroupProjectsAssetsRequest>;

export type GroupProjectsAssetsResponse = GroupAssetsResponse;
export const GroupProjectsAssetsResponse = /*@__PURE__*/ GroupAssetsResponse;

export type GroupProjectsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const groupProjectsAssets: API.OperationMethod<
  GroupProjectsAssetsRequest,
  GroupProjectsAssetsResponse,
  GroupProjectsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GroupProjectsAssetsRequest,
  output: GroupProjectsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityMarksProjectsAssetsRequest {
  name: string;
  updateMask?: string;
  startTime?: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksProjectsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityMarksProjectsAssetsRequest>;

export type UpdateSecurityMarksProjectsAssetsResponse = SecurityMarks;
export const UpdateSecurityMarksProjectsAssetsResponse =
  /*@__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksProjectsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityMarksProjectsAssets: API.OperationMethod<
  UpdateSecurityMarksProjectsAssetsRequest,
  UpdateSecurityMarksProjectsAssetsResponse,
  UpdateSecurityMarksProjectsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksProjectsAssetsRequest,
  output: UpdateSecurityMarksProjectsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAssetsRequest {
  filter?: string;
  parent: string;
  orderBy?: string;
  readTime?: string;
  pageToken?: string;
  pageSize?: number;
  fieldMask?: string;
  compareDuration?: string;
}

export const ListProjectsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsAssetsRequest>;

export type ListProjectsAssetsResponse = ListAssetsResponse;
export const ListProjectsAssetsResponse = /*@__PURE__*/ ListAssetsResponse;

export type ListProjectsAssetsError = DefaultErrors | NotFound | Forbidden;

export const listProjectsAssets: API.PaginatedOperationMethod<
  ListProjectsAssetsRequest,
  ListProjectsAssetsResponse,
  ListProjectsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAssetsRequest,
  output: ListProjectsAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsBigQueryExportsRequest {
  name: string;
}

export const GetProjectsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsBigQueryExportsRequest>;

export type GetProjectsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const GetProjectsBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type GetProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsBigQueryExports: API.OperationMethod<
  GetProjectsBigQueryExportsRequest,
  GetProjectsBigQueryExportsResponse,
  GetProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsBigQueryExportsRequest,
  output: GetProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsBigQueryExportsRequest {
  name: string;
}

export const DeleteProjectsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsBigQueryExportsRequest>;

export type DeleteProjectsBigQueryExportsResponse = Empty;
export const DeleteProjectsBigQueryExportsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const deleteProjectsBigQueryExports: API.OperationMethod<
  DeleteProjectsBigQueryExportsRequest,
  DeleteProjectsBigQueryExportsResponse,
  DeleteProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsBigQueryExportsRequest,
  output: DeleteProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsBigQueryExportsRequest {
  parent: string;
  pageSize?: number;
  pageToken?: string;
}

export const ListProjectsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bigQueryExports" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsBigQueryExportsRequest>;

export type ListProjectsBigQueryExportsResponse = ListBigQueryExportsResponse;
export const ListProjectsBigQueryExportsResponse =
  /*@__PURE__*/ ListBigQueryExportsResponse;

export type ListProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const listProjectsBigQueryExports: API.PaginatedOperationMethod<
  ListProjectsBigQueryExportsRequest,
  ListProjectsBigQueryExportsResponse,
  ListProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsBigQueryExportsRequest,
  output: ListProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsBigQueryExportsRequest {
  parent: string;
  bigQueryExportId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const CreateProjectsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    bigQueryExportId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("bigQueryExportId"),
    ),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/bigQueryExports",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsBigQueryExportsRequest>;

export type CreateProjectsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const CreateProjectsBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type CreateProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const createProjectsBigQueryExports: API.OperationMethod<
  CreateProjectsBigQueryExportsRequest,
  CreateProjectsBigQueryExportsResponse,
  CreateProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsBigQueryExportsRequest,
  output: CreateProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsBigQueryExportsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const PatchProjectsBigQueryExportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsBigQueryExportsRequest>;

export type PatchProjectsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const PatchProjectsBigQueryExportsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type PatchProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const patchProjectsBigQueryExports: API.OperationMethod<
  PatchProjectsBigQueryExportsRequest,
  PatchProjectsBigQueryExportsResponse,
  PatchProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsBigQueryExportsRequest,
  output: PatchProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
