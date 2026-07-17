// ==========================================================================
// Security Command Center API (securitycenter v1beta1)
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
  version: "v1beta1",
  rootUrl: "https://securitycenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

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

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes {
  criticality?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality;
  environment?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality,
    ),
    environment: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment,
    ),
    developerOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes",
  });

export interface Status {
  message?: string;
  code?: number;
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  response?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  done?: boolean;
  name?: string;
  error?: Status;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  unreachable?: ReadonlyArray<string>;
  nextPageToken?: string;
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface Label {
  value?: string;
  name?: string;
}

export const Label: Schema.Codec<Label> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Label" });

export interface Container {
  labels?: ReadonlyArray<Label>;
  createTime?: string;
  uri?: string;
  imageId?: string;
  name?: string;
}

export const Container: Schema.Codec<Container> =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Array(Label)),
    createTime: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Container" });

export interface Securitycenter_Object {
  kind?: string;
  group?: string;
  ns?: string;
  containers?: ReadonlyArray<Container>;
  name?: string;
}

export const Securitycenter_Object: Schema.Codec<Securitycenter_Object> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(Container)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Securitycenter_Object" });

export interface GoogleCloudSecuritycenterV2BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV2BulkMuteFindingsResponse: Schema.Codec<GoogleCloudSecuritycenterV2BulkMuteFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV2BulkMuteFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV2DiskPath {
  relativePath?: string;
  partitionUuid?: string;
}

export const GoogleCloudSecuritycenterV2DiskPath: Schema.Codec<GoogleCloudSecuritycenterV2DiskPath> =
  /*@__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    partitionUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiskPath" });

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

export interface GoogleCloudSecuritycenterV2File {
  sha256?: string;
  hashedSize?: string;
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  partiallyHashed?: boolean;
  path?: string;
  size?: string;
  diskPath?: GoogleCloudSecuritycenterV2DiskPath;
  contents?: string;
  operations?: ReadonlyArray<GoogleCloudSecuritycenterV2FileOperation>;
}

export const GoogleCloudSecuritycenterV2File: Schema.Codec<GoogleCloudSecuritycenterV2File> =
  /*@__PURE__*/ Schema.Struct({
    sha256: Schema.optional(Schema.String),
    hashedSize: Schema.optional(Schema.String),
    fileLoadState: Schema.optional(Schema.String),
    partiallyHashed: Schema.optional(Schema.Boolean),
    path: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    diskPath: Schema.optional(GoogleCloudSecuritycenterV2DiskPath),
    contents: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2FileOperation),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2File" });

export interface GoogleCloudSecuritycenterV2Label {
  value?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2Label: Schema.Codec<GoogleCloudSecuritycenterV2Label> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Label" });

export interface GoogleCloudSecuritycenterV2Node {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Node: Schema.Codec<GoogleCloudSecuritycenterV2Node> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Node" });

export interface GoogleCloudSecuritycenterV2DataAccessEvent {
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  eventId?: string;
  principalEmail?: string;
  eventTime?: string;
}

export const GoogleCloudSecuritycenterV2DataAccessEvent: Schema.Codec<GoogleCloudSecuritycenterV2DataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataAccessEvent" });

export interface Dataset {
  source?: string;
  name?: string;
  displayName?: string;
}

export const Dataset: Schema.Codec<Dataset> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dataset" });

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

export interface TicketInfo {
  assignee?: string;
  uri?: string;
  updateTime?: string;
  description?: string;
  status?: string;
  id?: string;
}

export const TicketInfo: Schema.Codec<TicketInfo> =
  /*@__PURE__*/ Schema.Struct({
    assignee: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "TicketInfo" });

export interface GoogleCloudSecuritycenterV1ExternalSystem {
  assignees?: ReadonlyArray<string>;
  ticketInfo?: TicketInfo;
  externalSystemUpdateTime?: string;
  externalUid?: string;
  status?: string;
  caseCloseTime?: string;
  caseUri?: string;
  caseCreateTime?: string;
  name?: string;
  caseSla?: string;
  casePriority?: string;
}

export const GoogleCloudSecuritycenterV1ExternalSystem: Schema.Codec<GoogleCloudSecuritycenterV1ExternalSystem> =
  /*@__PURE__*/ Schema.Struct({
    assignees: Schema.optional(Schema.Array(Schema.String)),
    ticketInfo: Schema.optional(TicketInfo),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    externalUid: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
    caseUri: Schema.optional(Schema.String),
    caseCreateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ExternalSystem" });

export interface PortRange {
  min?: string;
  max?: string;
}

export const PortRange: Schema.Codec<PortRange> =
  /*@__PURE__*/ Schema.Struct({
    min: Schema.optional(Schema.String),
    max: Schema.optional(Schema.String),
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

export interface GoogleCloudSecuritycenterV2Contact {
  email?: string;
}

export const GoogleCloudSecuritycenterV2Contact: Schema.Codec<GoogleCloudSecuritycenterV2Contact> =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Contact" });

export interface GoogleCloudSecuritycenterV2HttpResponse {
  statusCode?: string;
  path?: string;
}

export const GoogleCloudSecuritycenterV2HttpResponse: Schema.Codec<GoogleCloudSecuritycenterV2HttpResponse> =
  /*@__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2HttpResponse" });

export interface BigQueryDestination {
  dataset?: string;
}

export const BigQueryDestination: Schema.Codec<BigQueryDestination> =
  /*@__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryDestination" });

export interface GetPolicyOptions {
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Codec<GetPolicyOptions> =
  /*@__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface GoogleCloudSecuritycenterV2AiModel {
  location?: string;
  usageCategory?: string;
  name?: string;
  displayName?: string;
  domain?: string;
  library?: string;
  publisher?: string;
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2AiModel: Schema.Codec<GoogleCloudSecuritycenterV2AiModel> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AiModel" });

export interface Reference {
  uri?: string;
  source?: string;
}

export const Reference: Schema.Codec<Reference> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reference" });

export interface Cwe {
  id?: string;
  references?: ReadonlyArray<Reference>;
}

export const Cwe: Schema.Codec<Cwe> = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  references: Schema.optional(Schema.Array(Reference)),
}).annotate({ identifier: "Cwe" });

export interface Package {
  packageName?: string;
  packageVersion?: string;
  cpeUri?: string;
  packageType?: string;
}

export const Package: Schema.Codec<Package> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface Cvssv3 {
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | (string & {});
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  baseScore?: number;
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
}

export const Cvssv3: Schema.Codec<Cvssv3> =
  /*@__PURE__*/ Schema.Struct({
    attackVector: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    availabilityImpact: Schema.optional(Schema.String),
  }).annotate({ identifier: "Cvssv3" });

export interface Cve {
  firstExploitationDate?: string;
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  zeroDay?: boolean;
  upstreamFixAvailable?: boolean;
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  observedInTheWild?: boolean;
  exploitReleaseDate?: string;
  references?: ReadonlyArray<Reference>;
  id?: string;
  cvssv3?: Cvssv3;
}

export const Cve: Schema.Codec<Cve> = /*@__PURE__*/ Schema.Struct({
  firstExploitationDate: Schema.optional(Schema.String),
  exploitationActivity: Schema.optional(Schema.String),
  zeroDay: Schema.optional(Schema.Boolean),
  upstreamFixAvailable: Schema.optional(Schema.Boolean),
  impact: Schema.optional(Schema.String),
  observedInTheWild: Schema.optional(Schema.Boolean),
  exploitReleaseDate: Schema.optional(Schema.String),
  references: Schema.optional(Schema.Array(Reference)),
  id: Schema.optional(Schema.String),
  cvssv3: Schema.optional(Cvssv3),
}).annotate({ identifier: "Cve" });

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

export interface Vulnerability {
  cwes?: ReadonlyArray<Cwe>;
  fixedPackage?: Package;
  cve?: Cve;
  providerRiskScore?: string;
  securityBulletin?: SecurityBulletin;
  reachable?: boolean;
  offendingPackage?: Package;
}

export const Vulnerability: Schema.Codec<Vulnerability> =
  /*@__PURE__*/ Schema.Struct({
    cwes: Schema.optional(Schema.Array(Cwe)),
    fixedPackage: Schema.optional(Package),
    cve: Schema.optional(Cve),
    providerRiskScore: Schema.optional(Schema.String),
    securityBulletin: Schema.optional(SecurityBulletin),
    reachable: Schema.optional(Schema.Boolean),
    offendingPackage: Schema.optional(Package),
  }).annotate({ identifier: "Vulnerability" });

export interface GoogleCloudSecuritycenterV2AdcSharedTemplateRevision {
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcSharedTemplateRevision: Schema.Codec<GoogleCloudSecuritycenterV2AdcSharedTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcSharedTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2IamRolePermission {
  name?: string;
  role?: string;
}

export const GoogleCloudSecuritycenterV2IamRolePermission: Schema.Codec<GoogleCloudSecuritycenterV2IamRolePermission> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamRolePermission" });

export interface GoogleCloudSecuritycenterV2Job {
  errorCode?: number;
  name?: string;
  location?: string;
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
    errorCode: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Job" });

export interface GoogleCloudSecuritycenterV2Container {
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  createTime?: string;
  uri?: string;
  imageId?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2Container: Schema.Codec<GoogleCloudSecuritycenterV2Container> =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    createTime: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Container" });

export interface GoogleCloudSecuritycenterV2Detection {
  percentPagesMatched?: number;
  binary?: string;
}

export const GoogleCloudSecuritycenterV2Detection: Schema.Codec<GoogleCloudSecuritycenterV2Detection> =
  /*@__PURE__*/ Schema.Struct({
    percentPagesMatched: Schema.optional(Schema.Number),
    binary: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Detection" });

export interface GoogleCloudSecuritycenterV2MemoryHashSignature {
  detections?: ReadonlyArray<GoogleCloudSecuritycenterV2Detection>;
  binaryFamily?: string;
}

export const GoogleCloudSecuritycenterV2MemoryHashSignature: Schema.Codec<GoogleCloudSecuritycenterV2MemoryHashSignature> =
  /*@__PURE__*/ Schema.Struct({
    detections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Detection),
    ),
    binaryFamily: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MemoryHashSignature" });

export interface GoogleCloudSecuritycenterV2YaraRuleSignature {
  yaraRule?: string;
}

export const GoogleCloudSecuritycenterV2YaraRuleSignature: Schema.Codec<GoogleCloudSecuritycenterV2YaraRuleSignature> =
  /*@__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2YaraRuleSignature" });

export interface GoogleCloudSecuritycenterV2ProcessSignature {
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
  memoryHashSignature?: GoogleCloudSecuritycenterV2MemoryHashSignature;
  yaraRuleSignature?: GoogleCloudSecuritycenterV2YaraRuleSignature;
}

export const GoogleCloudSecuritycenterV2ProcessSignature: Schema.Codec<GoogleCloudSecuritycenterV2ProcessSignature> =
  /*@__PURE__*/ Schema.Struct({
    signatureType: Schema.optional(Schema.String),
    memoryHashSignature: Schema.optional(
      GoogleCloudSecuritycenterV2MemoryHashSignature,
    ),
    yaraRuleSignature: Schema.optional(
      GoogleCloudSecuritycenterV2YaraRuleSignature,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ProcessSignature" });

export interface GoogleCloudSecuritycenterV2Indicator {
  signatures?: ReadonlyArray<GoogleCloudSecuritycenterV2ProcessSignature>;
  uris?: ReadonlyArray<string>;
  ipAddresses?: ReadonlyArray<string>;
  domains?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Indicator: Schema.Codec<GoogleCloudSecuritycenterV2Indicator> =
  /*@__PURE__*/ Schema.Struct({
    signatures: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ProcessSignature),
    ),
    uris: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    domains: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Indicator" });

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

export interface GoogleCloudSecuritycenterV2ContactDetails {
  contacts?: ReadonlyArray<GoogleCloudSecuritycenterV2Contact>;
}

export const GoogleCloudSecuritycenterV2ContactDetails: Schema.Codec<GoogleCloudSecuritycenterV2ContactDetails> =
  /*@__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Contact)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ContactDetails" });

export interface GoogleCloudSecuritycenterV2DiscoveredWorkload {
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  detectedRelevantKeywords?: boolean;
  detectedRelevantHardware?: boolean;
  detectedRelevantPackages?: boolean;
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
}

export const GoogleCloudSecuritycenterV2DiscoveredWorkload: Schema.Codec<GoogleCloudSecuritycenterV2DiscoveredWorkload> =
  /*@__PURE__*/ Schema.Struct({
    workloadType: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiscoveredWorkload" });

export interface GoogleCloudSecuritycenterV2PolicyViolationSummary {
  evaluationErrorsCount?: string;
  outOfScopeResourcesCount?: string;
  conformantResourcesCount?: string;
  policyViolationsCount?: string;
}

export const GoogleCloudSecuritycenterV2PolicyViolationSummary: Schema.Codec<GoogleCloudSecuritycenterV2PolicyViolationSummary> =
  /*@__PURE__*/ Schema.Struct({
    evaluationErrorsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
    policyViolationsCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2PolicyViolationSummary",
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
  libraries?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  name?: string;
  argumentsTruncated?: boolean;
  pid?: string;
  binary?: GoogleCloudSecuritycenterV2File;
  parentPid?: string;
  args?: ReadonlyArray<string>;
  script?: GoogleCloudSecuritycenterV2File;
  envVariables?: ReadonlyArray<GoogleCloudSecuritycenterV2EnvironmentVariable>;
  envVariablesTruncated?: boolean;
  userId?: string;
}

export const GoogleCloudSecuritycenterV2Process: Schema.Codec<GoogleCloudSecuritycenterV2Process> =
  /*@__PURE__*/ Schema.Struct({
    libraries: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    name: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    pid: Schema.optional(Schema.String),
    binary: Schema.optional(GoogleCloudSecuritycenterV2File),
    parentPid: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    script: Schema.optional(GoogleCloudSecuritycenterV2File),
    envVariables: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2EnvironmentVariable),
    ),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    userId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Process" });

export interface GoogleCloudSecuritycenterV2SecurityMarks {
  name?: string;
  marks?: Record<string, string>;
  canonicalName?: string;
}

export const GoogleCloudSecuritycenterV2SecurityMarks: Schema.Codec<GoogleCloudSecuritycenterV2SecurityMarks> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityMarks" });

export interface GoogleCloudSecuritycenterV2LoadBalancer {
  name?: string;
}

export const GoogleCloudSecuritycenterV2LoadBalancer: Schema.Codec<GoogleCloudSecuritycenterV2LoadBalancer> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LoadBalancer" });

export interface GoogleCloudSecuritycenterV2SecretStatus {
  validity?:
    | "SECRET_VALIDITY_UNSPECIFIED"
    | "SECRET_VALIDITY_UNSUPPORTED"
    | "SECRET_VALIDITY_FAILED"
    | "SECRET_VALIDITY_INVALID"
    | "SECRET_VALIDITY_VALID"
    | (string & {});
  lastUpdatedTime?: string;
}

export const GoogleCloudSecuritycenterV2SecretStatus: Schema.Codec<GoogleCloudSecuritycenterV2SecretStatus> =
  /*@__PURE__*/ Schema.Struct({
    validity: Schema.optional(Schema.String),
    lastUpdatedTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecretStatus" });

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

export interface GoogleCloudSecuritycenterV2Secret {
  type?: string;
  status?: GoogleCloudSecuritycenterV2SecretStatus;
  environmentVariable?: GoogleCloudSecuritycenterV2SecretEnvironmentVariable;
  filePath?: GoogleCloudSecuritycenterV2SecretFilePath;
}

export const GoogleCloudSecuritycenterV2Secret: Schema.Codec<GoogleCloudSecuritycenterV2Secret> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    status: Schema.optional(GoogleCloudSecuritycenterV2SecretStatus),
    environmentVariable: Schema.optional(
      GoogleCloudSecuritycenterV2SecretEnvironmentVariable,
    ),
    filePath: Schema.optional(GoogleCloudSecuritycenterV2SecretFilePath),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Secret" });

export interface GoogleCloudSecuritycenterV2CloudLoggingEntry {
  logId?: string;
  insertId?: string;
  resourceContainer?: string;
  timestamp?: string;
}

export const GoogleCloudSecuritycenterV2CloudLoggingEntry: Schema.Codec<GoogleCloudSecuritycenterV2CloudLoggingEntry> =
  /*@__PURE__*/ Schema.Struct({
    logId: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
    resourceContainer: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
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

export interface GoogleCloudSecuritycenterV2MitreAttack {
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
    primaryTactic: Schema.optional(Schema.String),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MitreAttack" });

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

export interface GoogleCloudSecuritycenterV2Role {
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  ns?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2Role: Schema.Codec<GoogleCloudSecuritycenterV2Role> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Role" });

export interface GoogleCloudSecuritycenterV2Binding {
  subjects?: ReadonlyArray<GoogleCloudSecuritycenterV2Subject>;
  role?: GoogleCloudSecuritycenterV2Role;
  ns?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2Binding: Schema.Codec<GoogleCloudSecuritycenterV2Binding> =
  /*@__PURE__*/ Schema.Struct({
    subjects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Subject)),
    role: Schema.optional(GoogleCloudSecuritycenterV2Role),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Binding" });

export interface GoogleCloudSecuritycenterV2Object {
  kind?: string;
  name?: string;
  ns?: string;
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  group?: string;
}

export const GoogleCloudSecuritycenterV2Object: Schema.Codec<GoogleCloudSecuritycenterV2Object> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    group: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Object" });

export interface GoogleCloudSecuritycenterV2AccessReview {
  group?: string;
  version?: string;
  verb?: string;
  ns?: string;
  name?: string;
  resource?: string;
  subresource?: string;
}

export const GoogleCloudSecuritycenterV2AccessReview: Schema.Codec<GoogleCloudSecuritycenterV2AccessReview> =
  /*@__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AccessReview" });

export interface GoogleCloudSecuritycenterV2Pod {
  ns?: string;
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  name?: string;
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
}

export const GoogleCloudSecuritycenterV2Pod: Schema.Codec<GoogleCloudSecuritycenterV2Pod> =
  /*@__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pod" });

export interface GoogleCloudSecuritycenterV2NodePool {
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
  name?: string;
}

export const GoogleCloudSecuritycenterV2NodePool: Schema.Codec<GoogleCloudSecuritycenterV2NodePool> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NodePool" });

export interface GoogleCloudSecuritycenterV2Kubernetes {
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV2Binding>;
  objects?: ReadonlyArray<GoogleCloudSecuritycenterV2Object>;
  accessReviews?: ReadonlyArray<GoogleCloudSecuritycenterV2AccessReview>;
  pods?: ReadonlyArray<GoogleCloudSecuritycenterV2Pod>;
  roles?: ReadonlyArray<GoogleCloudSecuritycenterV2Role>;
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
  nodePools?: ReadonlyArray<GoogleCloudSecuritycenterV2NodePool>;
}

export const GoogleCloudSecuritycenterV2Kubernetes: Schema.Codec<GoogleCloudSecuritycenterV2Kubernetes> =
  /*@__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Binding)),
    objects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Object)),
    accessReviews: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AccessReview),
    ),
    pods: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Pod)),
    roles: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Role)),
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
    nodePools: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2NodePool),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Kubernetes" });

export interface GoogleCloudSecuritycenterV2DataFlowEvent {
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  eventTime?: string;
  eventId?: string;
  violatedLocation?: string;
  principalEmail?: string;
}

export const GoogleCloudSecuritycenterV2DataFlowEvent: Schema.Codec<GoogleCloudSecuritycenterV2DataFlowEvent> =
  /*@__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataFlowEvent" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicy {
  policyId?: string;
  failureReason?: string;
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicy: Schema.Codec<GoogleCloudSecuritycenterV2ArtifactGuardPolicy> =
  /*@__PURE__*/ Schema.Struct({
    policyId: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicy" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicies {
  failingPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2ArtifactGuardPolicy>;
  resourceId?: string;
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicies: Schema.Codec<GoogleCloudSecuritycenterV2ArtifactGuardPolicies> =
  /*@__PURE__*/ Schema.Struct({
    failingPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ArtifactGuardPolicy),
    ),
    resourceId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicies",
  });

export interface GoogleCloudSecuritycenterV2Geolocation {
  regionCode?: string;
}

export const GoogleCloudSecuritycenterV2Geolocation: Schema.Codec<GoogleCloudSecuritycenterV2Geolocation> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Geolocation" });

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

export interface GoogleCloudSecuritycenterV2Access {
  callerIpGeo?: GoogleCloudSecuritycenterV2Geolocation;
  serviceAccountDelegationInfo?: ReadonlyArray<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo>;
  userAgentFamily?: string;
  principalSubject?: string;
  serviceName?: string;
  serviceAccountKeyName?: string;
  userName?: string;
  principalEmail?: string;
  callerIp?: string;
  userAgent?: string;
  methodName?: string;
}

export const GoogleCloudSecuritycenterV2Access: Schema.Codec<GoogleCloudSecuritycenterV2Access> =
  /*@__PURE__*/ Schema.Struct({
    callerIpGeo: Schema.optional(GoogleCloudSecuritycenterV2Geolocation),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo),
    ),
    userAgentFamily: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    methodName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Access" });

export interface GoogleCloudSecuritycenterV2Notebook {
  notebookUpdateTime?: string;
  name?: string;
  service?: string;
  lastAuthor?: string;
}

export const GoogleCloudSecuritycenterV2Notebook: Schema.Codec<GoogleCloudSecuritycenterV2Notebook> =
  /*@__PURE__*/ Schema.Struct({
    notebookUpdateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Notebook" });

export interface GoogleCloudSecuritycenterV2Database {
  version?: string;
  name?: string;
  displayName?: string;
  query?: string;
  grantees?: ReadonlyArray<string>;
  userName?: string;
}

export const GoogleCloudSecuritycenterV2Database: Schema.Codec<GoogleCloudSecuritycenterV2Database> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    userName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Database" });

export interface GoogleCloudSecuritycenterV2Requests {
  shortTermAllowed?: number;
  ratio?: number;
  longTermAllowed?: number;
  longTermDenied?: number;
}

export const GoogleCloudSecuritycenterV2Requests: Schema.Codec<GoogleCloudSecuritycenterV2Requests> =
  /*@__PURE__*/ Schema.Struct({
    shortTermAllowed: Schema.optional(Schema.Number),
    ratio: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Requests" });

export interface GoogleCloudSecuritycenterV2AdaptiveProtection {
  confidence?: number;
}

export const GoogleCloudSecuritycenterV2AdaptiveProtection: Schema.Codec<GoogleCloudSecuritycenterV2AdaptiveProtection> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdaptiveProtection" });

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

export interface GoogleCloudSecuritycenterV2Attack {
  volumePpsLong?: string;
  volumePps?: number;
  volumeBps?: number;
  classification?: string;
  volumeBpsLong?: string;
}

export const GoogleCloudSecuritycenterV2Attack: Schema.Codec<GoogleCloudSecuritycenterV2Attack> =
  /*@__PURE__*/ Schema.Struct({
    volumePpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    volumeBps: Schema.optional(Schema.Number),
    classification: Schema.optional(Schema.String),
    volumeBpsLong: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Attack" });

export interface GoogleCloudSecuritycenterV2CloudArmor {
  requests?: GoogleCloudSecuritycenterV2Requests;
  adaptiveProtection?: GoogleCloudSecuritycenterV2AdaptiveProtection;
  securityPolicy?: GoogleCloudSecuritycenterV2SecurityPolicy;
  attack?: GoogleCloudSecuritycenterV2Attack;
  duration?: string;
  threatVector?: string;
}

export const GoogleCloudSecuritycenterV2CloudArmor: Schema.Codec<GoogleCloudSecuritycenterV2CloudArmor> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(GoogleCloudSecuritycenterV2Requests),
    adaptiveProtection: Schema.optional(
      GoogleCloudSecuritycenterV2AdaptiveProtection,
    ),
    securityPolicy: Schema.optional(GoogleCloudSecuritycenterV2SecurityPolicy),
    attack: Schema.optional(GoogleCloudSecuritycenterV2Attack),
    duration: Schema.optional(Schema.String),
    threatVector: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudArmor" });

export interface GoogleCloudSecuritycenterV2IamDetails {
  iamRolePermissions?: ReadonlyArray<GoogleCloudSecuritycenterV2IamRolePermission>;
}

export const GoogleCloudSecuritycenterV2IamDetails: Schema.Codec<GoogleCloudSecuritycenterV2IamDetails> =
  /*@__PURE__*/ Schema.Struct({
    iamRolePermissions: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamRolePermission),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamDetails" });

export interface GoogleCloudSecuritycenterV2Disk {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Disk: Schema.Codec<GoogleCloudSecuritycenterV2Disk> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Disk" });

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
  revisionId?: string;
  name?: string;
  policy?: string;
  policySet?: string;
  policyDriftDetails?: ReadonlyArray<GoogleCloudSecuritycenterV2PolicyDriftDetails>;
  postureDeploymentResource?: string;
  postureDeployment?: string;
  changedPolicy?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPosture: Schema.Codec<GoogleCloudSecuritycenterV2SecurityPosture> =
  /*@__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PolicyDriftDetails),
    ),
    postureDeploymentResource: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPosture" });

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
  sensitivityScore?: GoogleCloudSecuritycenterV2SensitivityScore;
  version?: string;
}

export const GoogleCloudSecuritycenterV2InfoType: Schema.Codec<GoogleCloudSecuritycenterV2InfoType> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(
      GoogleCloudSecuritycenterV2SensitivityScore,
    ),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2InfoType" });

export interface GoogleCloudSecuritycenterV2CloudDlpDataProfile {
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
  infoTypes?: ReadonlyArray<GoogleCloudSecuritycenterV2InfoType>;
  dataProfile?: string;
}

export const GoogleCloudSecuritycenterV2CloudDlpDataProfile: Schema.Codec<GoogleCloudSecuritycenterV2CloudDlpDataProfile> =
  /*@__PURE__*/ Schema.Struct({
    parentType: Schema.optional(Schema.String),
    infoTypes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2InfoType),
    ),
    dataProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpDataProfile" });

export interface GoogleCloudSecuritycenterV2Network {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Network: Schema.Codec<GoogleCloudSecuritycenterV2Network> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Network" });

export interface GoogleCloudSecuritycenterV2IamBinding {
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  member?: string;
  role?: string;
}

export const GoogleCloudSecuritycenterV2IamBinding: Schema.Codec<GoogleCloudSecuritycenterV2IamBinding> =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamBinding" });

export interface GoogleCloudSecuritycenterV2ExternalExposure {
  hostnameUri?: string;
  backendBucket?: string;
  networkPathInsightsGenerationTime?: string;
  pscNetworkAttachment?: string;
  backendService?: string;
  publicPort?: string;
  loadBalancerFirewallPolicy?: string;
  httpResponse?: ReadonlyArray<GoogleCloudSecuritycenterV2HttpResponse>;
  privateIpAddress?: string;
  publicIpAddress?: string;
  forwardingRule?: string;
  pscServiceAttachment?: string;
  exposedService?: string;
  networkEndpointGroup?: string;
  networkIngressFirewallPolicy?: string;
  exposedEndpoint?: string;
  instanceGroup?: string;
  internalBackendService?: string;
  privatePort?: string;
  serviceFirewallPolicy?: string;
  exposedApplication?: string;
}

export const GoogleCloudSecuritycenterV2ExternalExposure: Schema.Codec<GoogleCloudSecuritycenterV2ExternalExposure> =
  /*@__PURE__*/ Schema.Struct({
    hostnameUri: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    networkPathInsightsGenerationTime: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    httpResponse: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2HttpResponse),
    ),
    privateIpAddress: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalExposure" });

export interface GoogleCloudSecuritycenterV2Compliance {
  standard?: string;
  ids?: ReadonlyArray<string>;
  version?: string;
}

export const GoogleCloudSecuritycenterV2Compliance: Schema.Codec<GoogleCloudSecuritycenterV2Compliance> =
  /*@__PURE__*/ Schema.Struct({
    standard: Schema.optional(Schema.String),
    ids: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Compliance" });

export interface GoogleCloudSecuritycenterV2AttackExposure {
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  latestCalculationTime?: string;
  score?: number;
  exposedLowValueResourcesCount?: number;
  exposedHighValueResourcesCount?: number;
  attackExposureResult?: string;
  exposedMediumValueResourcesCount?: number;
}

export const GoogleCloudSecuritycenterV2AttackExposure: Schema.Codec<GoogleCloudSecuritycenterV2AttackExposure> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    latestCalculationTime: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    attackExposureResult: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AttackExposure" });

export interface GoogleCloudSecuritycenterV2DataRetentionDeletionEvent {
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
  eventDetectionTime?: string;
  minRetentionAllowed?: string;
  dataObjectCount?: string;
  maxRetentionAllowed?: string;
}

export const GoogleCloudSecuritycenterV2DataRetentionDeletionEvent: Schema.Codec<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    minRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2DataRetentionDeletionEvent",
  });

export interface GoogleCloudSecuritycenterV2AffectedResources {
  count?: string;
}

export const GoogleCloudSecuritycenterV2AffectedResources: Schema.Codec<GoogleCloudSecuritycenterV2AffectedResources> =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AffectedResources" });

export interface GoogleCloudSecuritycenterV2SecurityBulletin {
  bulletinId?: string;
  submissionTime?: string;
  suggestedUpgradeVersion?: string;
}

export const GoogleCloudSecuritycenterV2SecurityBulletin: Schema.Codec<GoogleCloudSecuritycenterV2SecurityBulletin> =
  /*@__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityBulletin" });

export interface GoogleCloudSecuritycenterV2Package {
  packageName?: string;
  packageVersion?: string;
  cpeUri?: string;
  packageType?: string;
}

export const GoogleCloudSecuritycenterV2Package: Schema.Codec<GoogleCloudSecuritycenterV2Package> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Package" });

export interface GoogleCloudSecuritycenterV2Reference {
  uri?: string;
  source?: string;
}

export const GoogleCloudSecuritycenterV2Reference: Schema.Codec<GoogleCloudSecuritycenterV2Reference> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Reference" });

export interface GoogleCloudSecuritycenterV2Cwe {
  id?: string;
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
}

export const GoogleCloudSecuritycenterV2Cwe: Schema.Codec<GoogleCloudSecuritycenterV2Cwe> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cwe" });

export interface GoogleCloudSecuritycenterV2Cvssv3 {
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
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
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | (string & {});
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  baseScore?: number;
}

export const GoogleCloudSecuritycenterV2Cvssv3: Schema.Codec<GoogleCloudSecuritycenterV2Cvssv3> =
  /*@__PURE__*/ Schema.Struct({
    privilegesRequired: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    attackVector: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cvssv3" });

export interface GoogleCloudSecuritycenterV2Cve {
  firstExploitationDate?: string;
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  zeroDay?: boolean;
  upstreamFixAvailable?: boolean;
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  observedInTheWild?: boolean;
  id?: string;
  cvssv3?: GoogleCloudSecuritycenterV2Cvssv3;
  exploitReleaseDate?: string;
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
}

export const GoogleCloudSecuritycenterV2Cve: Schema.Codec<GoogleCloudSecuritycenterV2Cve> =
  /*@__PURE__*/ Schema.Struct({
    firstExploitationDate: Schema.optional(Schema.String),
    exploitationActivity: Schema.optional(Schema.String),
    zeroDay: Schema.optional(Schema.Boolean),
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
    impact: Schema.optional(Schema.String),
    observedInTheWild: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    cvssv3: Schema.optional(GoogleCloudSecuritycenterV2Cvssv3),
    exploitReleaseDate: Schema.optional(Schema.String),
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cve" });

export interface GoogleCloudSecuritycenterV2Vulnerability {
  providerRiskScore?: string;
  securityBulletin?: GoogleCloudSecuritycenterV2SecurityBulletin;
  reachable?: boolean;
  offendingPackage?: GoogleCloudSecuritycenterV2Package;
  cwes?: ReadonlyArray<GoogleCloudSecuritycenterV2Cwe>;
  fixedPackage?: GoogleCloudSecuritycenterV2Package;
  cve?: GoogleCloudSecuritycenterV2Cve;
}

export const GoogleCloudSecuritycenterV2Vulnerability: Schema.Codec<GoogleCloudSecuritycenterV2Vulnerability> =
  /*@__PURE__*/ Schema.Struct({
    providerRiskScore: Schema.optional(Schema.String),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityBulletin,
    ),
    reachable: Schema.optional(Schema.Boolean),
    offendingPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    cwes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Cwe)),
    fixedPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    cve: Schema.optional(GoogleCloudSecuritycenterV2Cve),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Vulnerability" });

export interface GoogleCloudSecuritycenterV2BackupDisasterRecovery {
  profile?: string;
  backupType?: string;
  storagePool?: string;
  policies?: ReadonlyArray<string>;
  host?: string;
  backupTemplate?: string;
  policyOptions?: ReadonlyArray<string>;
  appliance?: string;
  backupCreateTime?: string;
  applications?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2BackupDisasterRecovery: Schema.Codec<GoogleCloudSecuritycenterV2BackupDisasterRecovery> =
  /*@__PURE__*/ Schema.Struct({
    profile: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    host: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    appliance: Schema.optional(Schema.String),
    backupCreateTime: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2BackupDisasterRecovery",
  });

export interface GoogleCloudSecuritycenterV2TicketInfo {
  assignee?: string;
  uri?: string;
  updateTime?: string;
  status?: string;
  id?: string;
  description?: string;
}

export const GoogleCloudSecuritycenterV2TicketInfo: Schema.Codec<GoogleCloudSecuritycenterV2TicketInfo> =
  /*@__PURE__*/ Schema.Struct({
    assignee: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2TicketInfo" });

export interface GoogleCloudSecuritycenterV2ExternalSystem {
  externalUid?: string;
  status?: string;
  caseCloseTime?: string;
  caseUri?: string;
  caseCreateTime?: string;
  assignees?: ReadonlyArray<string>;
  ticketInfo?: GoogleCloudSecuritycenterV2TicketInfo;
  externalSystemUpdateTime?: string;
  casePriority?: string;
  name?: string;
  caseSla?: string;
}

export const GoogleCloudSecuritycenterV2ExternalSystem: Schema.Codec<GoogleCloudSecuritycenterV2ExternalSystem> =
  /*@__PURE__*/ Schema.Struct({
    externalUid: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
    caseUri: Schema.optional(Schema.String),
    caseCreateTime: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    ticketInfo: Schema.optional(GoogleCloudSecuritycenterV2TicketInfo),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalSystem" });

export interface GoogleCloudSecuritycenterV2ToxicCombination {
  relatedFindings?: ReadonlyArray<string>;
  attackExposureScore?: number;
}

export const GoogleCloudSecuritycenterV2ToxicCombination: Schema.Codec<GoogleCloudSecuritycenterV2ToxicCombination> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
    attackExposureScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ToxicCombination" });

export interface GoogleCloudSecuritycenterV2AgentDataAccessEvent {
  eventTime?: string;
  eventId?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  principalSubject?: string;
}

export const GoogleCloudSecuritycenterV2AgentDataAccessEvent: Schema.Codec<GoogleCloudSecuritycenterV2AgentDataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AgentDataAccessEvent",
  });

export interface GoogleCloudSecuritycenterV2Connection {
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
  destinationPort?: number;
  sourcePort?: number;
  destinationIp?: string;
  sourceIp?: string;
}

export const GoogleCloudSecuritycenterV2Connection: Schema.Codec<GoogleCloudSecuritycenterV2Connection> =
  /*@__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    sourcePort: Schema.optional(Schema.Number),
    destinationIp: Schema.optional(Schema.String),
    sourceIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Connection" });

export interface GoogleCloudSecuritycenterV2GroupMembership {
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
  groupId?: string;
}

export const GoogleCloudSecuritycenterV2GroupMembership: Schema.Codec<GoogleCloudSecuritycenterV2GroupMembership> =
  /*@__PURE__*/ Schema.Struct({
    groupType: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2GroupMembership" });

export interface GoogleCloudSecuritycenterV2Chokepoint {
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Chokepoint: Schema.Codec<GoogleCloudSecuritycenterV2Chokepoint> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Chokepoint" });

export interface GoogleCloudSecuritycenterV2ExfilResource {
  name?: string;
  components?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2ExfilResource: Schema.Codec<GoogleCloudSecuritycenterV2ExfilResource> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExfilResource" });

export interface GoogleCloudSecuritycenterV2Exfiltration {
  sources?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
  targets?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
  totalExfiltratedBytes?: string;
}

export const GoogleCloudSecuritycenterV2Exfiltration: Schema.Codec<GoogleCloudSecuritycenterV2Exfiltration> =
  /*@__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
    targets: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
    totalExfiltratedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Exfiltration" });

export interface GoogleCloudSecuritycenterV2Pipeline {
  name?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Pipeline: Schema.Codec<GoogleCloudSecuritycenterV2Pipeline> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pipeline" });

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

export interface GoogleCloudSecuritycenterV2VertexAi {
  pipelines?: ReadonlyArray<GoogleCloudSecuritycenterV2Pipeline>;
  datasets?: ReadonlyArray<GoogleCloudSecuritycenterV2Dataset>;
}

export const GoogleCloudSecuritycenterV2VertexAi: Schema.Codec<GoogleCloudSecuritycenterV2VertexAi> =
  /*@__PURE__*/ Schema.Struct({
    pipelines: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Pipeline),
    ),
    datasets: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Dataset)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2VertexAi" });

export interface GoogleCloudSecuritycenterV2PortRange {
  min?: string;
  max?: string;
}

export const GoogleCloudSecuritycenterV2PortRange: Schema.Codec<GoogleCloudSecuritycenterV2PortRange> =
  /*@__PURE__*/ Schema.Struct({
    min: Schema.optional(Schema.String),
    max: Schema.optional(Schema.String),
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
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  sourceIpRanges?: ReadonlyArray<string>;
  denied?: GoogleCloudSecuritycenterV2Denied;
  exposedServices?: ReadonlyArray<string>;
  allowed?: GoogleCloudSecuritycenterV2Allowed;
  destinationIpRanges?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2IpRules: Schema.Codec<GoogleCloudSecuritycenterV2IpRules> =
  /*@__PURE__*/ Schema.Struct({
    direction: Schema.optional(Schema.String),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
    denied: Schema.optional(GoogleCloudSecuritycenterV2Denied),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
    allowed: Schema.optional(GoogleCloudSecuritycenterV2Allowed),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRules" });

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
  name?: string;
  displayName?: string;
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
  controls?: ReadonlyArray<GoogleCloudSecuritycenterV2Control>;
}

export const GoogleCloudSecuritycenterV2Framework: Schema.Codec<GoogleCloudSecuritycenterV2Framework> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    category: Schema.optional(Schema.Array(Schema.String)),
    controls: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Control)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Framework" });

export interface GoogleCloudSecuritycenterV2CloudControl {
  cloudControlName?: string;
  version?: number;
  policyType?: string;
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2CloudControl: Schema.Codec<GoogleCloudSecuritycenterV2CloudControl> =
  /*@__PURE__*/ Schema.Struct({
    cloudControlName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    policyType: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudControl" });

export interface GoogleCloudSecuritycenterV2ComplianceDetails {
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  frameworks?: ReadonlyArray<GoogleCloudSecuritycenterV2Framework>;
  cloudControl?: GoogleCloudSecuritycenterV2CloudControl;
}

export const GoogleCloudSecuritycenterV2ComplianceDetails: Schema.Codec<GoogleCloudSecuritycenterV2ComplianceDetails> =
  /*@__PURE__*/ Schema.Struct({
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    frameworks: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Framework),
    ),
    cloudControl: Schema.optional(GoogleCloudSecuritycenterV2CloudControl),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ComplianceDetails" });

export interface GoogleCloudSecuritycenterV2KernelRootkit {
  unexpectedReadOnlyDataModification?: boolean;
  unexpectedSystemCallHandler?: boolean;
  unexpectedCodeModification?: boolean;
  unexpectedFtraceHandler?: boolean;
  unexpectedKprobeHandler?: boolean;
  unexpectedKernelCodePages?: boolean;
  name?: string;
  unexpectedInterruptHandler?: boolean;
  unexpectedProcessesInRunqueue?: boolean;
}

export const GoogleCloudSecuritycenterV2KernelRootkit: Schema.Codec<GoogleCloudSecuritycenterV2KernelRootkit> =
  /*@__PURE__*/ Schema.Struct({
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2KernelRootkit" });

export interface GoogleCloudSecuritycenterV2CloudDlpInspection {
  inspectJob?: string;
  infoType?: string;
  fullScan?: boolean;
  infoTypeCount?: string;
}

export const GoogleCloudSecuritycenterV2CloudDlpInspection: Schema.Codec<GoogleCloudSecuritycenterV2CloudDlpInspection> =
  /*@__PURE__*/ Schema.Struct({
    inspectJob: Schema.optional(Schema.String),
    infoType: Schema.optional(Schema.String),
    fullScan: Schema.optional(Schema.Boolean),
    infoTypeCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpInspection" });

export interface GoogleCloudSecuritycenterV2OrgPolicy {
  name?: string;
}

export const GoogleCloudSecuritycenterV2OrgPolicy: Schema.Codec<GoogleCloudSecuritycenterV2OrgPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2OrgPolicy" });

export interface GoogleCloudSecuritycenterV2Application {
  baseUri?: string;
  fullUri?: string;
}

export const GoogleCloudSecuritycenterV2Application: Schema.Codec<GoogleCloudSecuritycenterV2Application> =
  /*@__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Application" });

export interface GoogleCloudSecuritycenterV2Finding {
  job?: GoogleCloudSecuritycenterV2Job;
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  indicator?: GoogleCloudSecuritycenterV2Indicator;
  moduleName?: string;
  muteUpdateTime?: string;
  muteInfo?: GoogleCloudSecuritycenterV2MuteInfo;
  contacts?: Record<string, GoogleCloudSecuritycenterV2ContactDetails>;
  discoveredWorkload?: GoogleCloudSecuritycenterV2DiscoveredWorkload;
  parentDisplayName?: string;
  description?: string;
  policyViolationSummary?: GoogleCloudSecuritycenterV2PolicyViolationSummary;
  dataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataAccessEvent>;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  processes?: ReadonlyArray<GoogleCloudSecuritycenterV2Process>;
  securityMarks?: GoogleCloudSecuritycenterV2SecurityMarks;
  loadBalancers?: ReadonlyArray<GoogleCloudSecuritycenterV2LoadBalancer>;
  aiModel?: GoogleCloudSecuritycenterV2AiModel;
  secret?: GoogleCloudSecuritycenterV2Secret;
  cryptoKeyName?: string;
  logEntries?: ReadonlyArray<GoogleCloudSecuritycenterV2LogEntry>;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  mitreAttack?: GoogleCloudSecuritycenterV2MitreAttack;
  kubernetes?: GoogleCloudSecuritycenterV2Kubernetes;
  dataFlowEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataFlowEvent>;
  externalUri?: string;
  canonicalName?: string;
  parent?: string;
  category?: string;
  artifactGuardPolicies?: GoogleCloudSecuritycenterV2ArtifactGuardPolicies;
  access?: GoogleCloudSecuritycenterV2Access;
  notebook?: GoogleCloudSecuritycenterV2Notebook;
  database?: GoogleCloudSecuritycenterV2Database;
  resourceName?: string;
  cloudArmor?: GoogleCloudSecuritycenterV2CloudArmor;
  iamDetails?: GoogleCloudSecuritycenterV2IamDetails;
  disk?: GoogleCloudSecuritycenterV2Disk;
  securityPosture?: GoogleCloudSecuritycenterV2SecurityPosture;
  cloudDlpDataProfile?: GoogleCloudSecuritycenterV2CloudDlpDataProfile;
  networks?: ReadonlyArray<GoogleCloudSecuritycenterV2Network>;
  iamBindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IamBinding>;
  externalExposure?: GoogleCloudSecuritycenterV2ExternalExposure;
  compliances?: ReadonlyArray<GoogleCloudSecuritycenterV2Compliance>;
  attackExposure?: GoogleCloudSecuritycenterV2AttackExposure;
  files?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  dataRetentionDeletionEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent>;
  affectedResources?: GoogleCloudSecuritycenterV2AffectedResources;
  vulnerability?: GoogleCloudSecuritycenterV2Vulnerability;
  name?: string;
  muteInitiator?: string;
  backupDisasterRecovery?: GoogleCloudSecuritycenterV2BackupDisasterRecovery;
  externalSystems?: Record<string, GoogleCloudSecuritycenterV2ExternalSystem>;
  toxicCombination?: GoogleCloudSecuritycenterV2ToxicCombination;
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  agentDataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2AgentDataAccessEvent>;
  connections?: ReadonlyArray<GoogleCloudSecuritycenterV2Connection>;
  nextSteps?: string;
  groupMemberships?: ReadonlyArray<GoogleCloudSecuritycenterV2GroupMembership>;
  chokepoint?: GoogleCloudSecuritycenterV2Chokepoint;
  exfiltration?: GoogleCloudSecuritycenterV2Exfiltration;
  sourceProperties?: Record<string, unknown>;
  vertexAi?: GoogleCloudSecuritycenterV2VertexAi;
  ipRules?: GoogleCloudSecuritycenterV2IpRules;
  eventTime?: string;
  complianceDetails?: GoogleCloudSecuritycenterV2ComplianceDetails;
  createTime?: string;
  kernelRootkit?: GoogleCloudSecuritycenterV2KernelRootkit;
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
  cloudDlpInspection?: GoogleCloudSecuritycenterV2CloudDlpInspection;
  orgPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2OrgPolicy>;
  application?: GoogleCloudSecuritycenterV2Application;
}

export const GoogleCloudSecuritycenterV2Finding: Schema.Codec<GoogleCloudSecuritycenterV2Finding> =
  /*@__PURE__*/ Schema.Struct({
    job: Schema.optional(GoogleCloudSecuritycenterV2Job),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    indicator: Schema.optional(GoogleCloudSecuritycenterV2Indicator),
    moduleName: Schema.optional(Schema.String),
    muteUpdateTime: Schema.optional(Schema.String),
    muteInfo: Schema.optional(GoogleCloudSecuritycenterV2MuteInfo),
    contacts: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ContactDetails),
    ),
    discoveredWorkload: Schema.optional(
      GoogleCloudSecuritycenterV2DiscoveredWorkload,
    ),
    parentDisplayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    policyViolationSummary: Schema.optional(
      GoogleCloudSecuritycenterV2PolicyViolationSummary,
    ),
    dataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataAccessEvent),
    ),
    state: Schema.optional(Schema.String),
    processes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Process),
    ),
    securityMarks: Schema.optional(GoogleCloudSecuritycenterV2SecurityMarks),
    loadBalancers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LoadBalancer),
    ),
    aiModel: Schema.optional(GoogleCloudSecuritycenterV2AiModel),
    secret: Schema.optional(GoogleCloudSecuritycenterV2Secret),
    cryptoKeyName: Schema.optional(Schema.String),
    logEntries: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LogEntry),
    ),
    severity: Schema.optional(Schema.String),
    mitreAttack: Schema.optional(GoogleCloudSecuritycenterV2MitreAttack),
    kubernetes: Schema.optional(GoogleCloudSecuritycenterV2Kubernetes),
    dataFlowEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataFlowEvent),
    ),
    externalUri: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    artifactGuardPolicies: Schema.optional(
      GoogleCloudSecuritycenterV2ArtifactGuardPolicies,
    ),
    access: Schema.optional(GoogleCloudSecuritycenterV2Access),
    notebook: Schema.optional(GoogleCloudSecuritycenterV2Notebook),
    database: Schema.optional(GoogleCloudSecuritycenterV2Database),
    resourceName: Schema.optional(Schema.String),
    cloudArmor: Schema.optional(GoogleCloudSecuritycenterV2CloudArmor),
    iamDetails: Schema.optional(GoogleCloudSecuritycenterV2IamDetails),
    disk: Schema.optional(GoogleCloudSecuritycenterV2Disk),
    securityPosture: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityPosture,
    ),
    cloudDlpDataProfile: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpDataProfile,
    ),
    networks: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Network)),
    iamBindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamBinding),
    ),
    externalExposure: Schema.optional(
      GoogleCloudSecuritycenterV2ExternalExposure,
    ),
    compliances: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Compliance),
    ),
    attackExposure: Schema.optional(GoogleCloudSecuritycenterV2AttackExposure),
    files: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataRetentionDeletionEvent),
    ),
    affectedResources: Schema.optional(
      GoogleCloudSecuritycenterV2AffectedResources,
    ),
    vulnerability: Schema.optional(GoogleCloudSecuritycenterV2Vulnerability),
    name: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    backupDisasterRecovery: Schema.optional(
      GoogleCloudSecuritycenterV2BackupDisasterRecovery,
    ),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ExternalSystem),
    ),
    toxicCombination: Schema.optional(
      GoogleCloudSecuritycenterV2ToxicCombination,
    ),
    mute: Schema.optional(Schema.String),
    agentDataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AgentDataAccessEvent),
    ),
    connections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Connection),
    ),
    nextSteps: Schema.optional(Schema.String),
    groupMemberships: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2GroupMembership),
    ),
    chokepoint: Schema.optional(GoogleCloudSecuritycenterV2Chokepoint),
    exfiltration: Schema.optional(GoogleCloudSecuritycenterV2Exfiltration),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    vertexAi: Schema.optional(GoogleCloudSecuritycenterV2VertexAi),
    ipRules: Schema.optional(GoogleCloudSecuritycenterV2IpRules),
    eventTime: Schema.optional(Schema.String),
    complianceDetails: Schema.optional(
      GoogleCloudSecuritycenterV2ComplianceDetails,
    ),
    createTime: Schema.optional(Schema.String),
    kernelRootkit: Schema.optional(GoogleCloudSecuritycenterV2KernelRootkit),
    findingClass: Schema.optional(Schema.String),
    cloudDlpInspection: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpInspection,
    ),
    orgPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2OrgPolicy),
    ),
    application: Schema.optional(GoogleCloudSecuritycenterV2Application),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Finding" });

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
  criticality?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality;
  environment?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV2ResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
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
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ResourceApplicationAttributes",
  });

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

export interface GoogleCloudSecuritycenterV2ResourcePathNode {
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
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2ResourcePathNode: Schema.Codec<GoogleCloudSecuritycenterV2ResourcePathNode> =
  /*@__PURE__*/ Schema.Struct({
    nodeType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePathNode" });

export interface GoogleCloudSecuritycenterV2ResourcePath {
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourcePathNode>;
}

export const GoogleCloudSecuritycenterV2ResourcePath: Schema.Codec<GoogleCloudSecuritycenterV2ResourcePath> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ResourcePathNode),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePath" });

export interface GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision {
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision: Schema.Codec<GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2AwsOrganizationalUnit {
  name?: string;
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganizationalUnit: Schema.Codec<GoogleCloudSecuritycenterV2AwsOrganizationalUnit> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AwsOrganizationalUnit",
  });

export interface GoogleCloudSecuritycenterV2AwsAccount {
  name?: string;
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsAccount: Schema.Codec<GoogleCloudSecuritycenterV2AwsAccount> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
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
  projectDisplayName?: string;
  parent?: string;
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV2Folder>;
  parentDisplayName?: string;
  organization?: string;
  project?: string;
}

export const GcpMetadata: Schema.Codec<GcpMetadata> =
  /*@__PURE__*/ Schema.Struct({
    projectDisplayName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Folder)),
    parentDisplayName: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcpMetadata" });

export interface GoogleCloudSecuritycenterV2AzureSubscription {
  id?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureSubscription: Schema.Codec<GoogleCloudSecuritycenterV2AzureSubscription> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureSubscription" });

export interface GoogleCloudSecuritycenterV2AzureResourceGroup {
  id?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2AzureResourceGroup: Schema.Codec<GoogleCloudSecuritycenterV2AzureResourceGroup> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureResourceGroup" });

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
  resourceGroup?: GoogleCloudSecuritycenterV2AzureResourceGroup;
  tenant?: GoogleCloudSecuritycenterV2AzureTenant;
  managementGroups?: ReadonlyArray<GoogleCloudSecuritycenterV2AzureManagementGroup>;
}

export const GoogleCloudSecuritycenterV2AzureMetadata: Schema.Codec<GoogleCloudSecuritycenterV2AzureMetadata> =
  /*@__PURE__*/ Schema.Struct({
    subscription: Schema.optional(GoogleCloudSecuritycenterV2AzureSubscription),
    resourceGroup: Schema.optional(
      GoogleCloudSecuritycenterV2AzureResourceGroup,
    ),
    tenant: Schema.optional(GoogleCloudSecuritycenterV2AzureTenant),
    managementGroups: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AzureManagementGroup),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureMetadata" });

export interface GoogleCloudSecuritycenterV2Resource {
  name?: string;
  displayName?: string;
  type?: string;
  application?: GoogleCloudSecuritycenterV2ResourceApplication;
  adcApplication?: GoogleCloudSecuritycenterV2AdcApplication;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  resourcePath?: GoogleCloudSecuritycenterV2ResourcePath;
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision;
  awsMetadata?: GoogleCloudSecuritycenterV2AwsMetadata;
  location?: string;
  gcpMetadata?: GcpMetadata;
  service?: string;
  resourcePathString?: string;
  azureMetadata?: GoogleCloudSecuritycenterV2AzureMetadata;
  adcSharedTemplate?: GoogleCloudSecuritycenterV2AdcSharedTemplateRevision;
}

export const GoogleCloudSecuritycenterV2Resource: Schema.Codec<GoogleCloudSecuritycenterV2Resource> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplication,
    ),
    adcApplication: Schema.optional(GoogleCloudSecuritycenterV2AdcApplication),
    cloudProvider: Schema.optional(Schema.String),
    resourcePath: Schema.optional(GoogleCloudSecuritycenterV2ResourcePath),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision,
    ),
    awsMetadata: Schema.optional(GoogleCloudSecuritycenterV2AwsMetadata),
    location: Schema.optional(Schema.String),
    gcpMetadata: Schema.optional(GcpMetadata),
    service: Schema.optional(Schema.String),
    resourcePathString: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(GoogleCloudSecuritycenterV2AzureMetadata),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcSharedTemplateRevision,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Resource" });

export interface GoogleCloudSecuritycenterV2NotificationMessage {
  finding?: GoogleCloudSecuritycenterV2Finding;
  notificationConfigName?: string;
  resource?: GoogleCloudSecuritycenterV2Resource;
}

export const GoogleCloudSecuritycenterV2NotificationMessage: Schema.Codec<GoogleCloudSecuritycenterV2NotificationMessage> =
  /*@__PURE__*/ Schema.Struct({
    finding: Schema.optional(GoogleCloudSecuritycenterV2Finding),
    notificationConfigName: Schema.optional(Schema.String),
    resource: Schema.optional(GoogleCloudSecuritycenterV2Resource),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NotificationMessage" });

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
  pipelines?: ReadonlyArray<Pipeline>;
  datasets?: ReadonlyArray<Dataset>;
}

export const VertexAi: Schema.Codec<VertexAi> =
  /*@__PURE__*/ Schema.Struct({
    pipelines: Schema.optional(Schema.Array(Pipeline)),
    datasets: Schema.optional(Schema.Array(Dataset)),
  }).annotate({ identifier: "VertexAi" });

export interface GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin {
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin: Schema.Codec<GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin",
  });

export interface AdcApplicationTemplateRevision {
  name?: string;
}

export const AdcApplicationTemplateRevision: Schema.Codec<AdcApplicationTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcApplicationTemplateRevision" });

export interface GoogleCloudSecuritycenterV1beta1SecurityMarks {
  name?: string;
  marks?: Record<string, string>;
}

export const GoogleCloudSecuritycenterV1beta1SecurityMarks: Schema.Codec<GoogleCloudSecuritycenterV1beta1SecurityMarks> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1beta1SecurityMarks" });

export interface GoogleCloudSecuritycenterV1beta1Finding {
  resourceName?: string;
  createTime?: string;
  eventTime?: string;
  securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
  name?: string;
  sourceProperties?: Record<string, unknown>;
  category?: string;
  parent?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  externalUri?: string;
}

export const GoogleCloudSecuritycenterV1beta1Finding: Schema.Codec<GoogleCloudSecuritycenterV1beta1Finding> =
  /*@__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1beta1SecurityMarks,
    ),
    name: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    category: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    externalUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1beta1Finding" });

export interface BackupDisasterRecovery {
  profile?: string;
  backupType?: string;
  policies?: ReadonlyArray<string>;
  storagePool?: string;
  backupTemplate?: string;
  policyOptions?: ReadonlyArray<string>;
  appliance?: string;
  backupCreateTime?: string;
  host?: string;
  applications?: ReadonlyArray<string>;
}

export const BackupDisasterRecovery: Schema.Codec<BackupDisasterRecovery> =
  /*@__PURE__*/ Schema.Struct({
    profile: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    storagePool: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    appliance: Schema.optional(Schema.String),
    backupCreateTime: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BackupDisasterRecovery" });

export interface DataAccessEvent {
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  eventTime?: string;
  eventId?: string;
  principalEmail?: string;
}

export const DataAccessEvent: Schema.Codec<DataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataAccessEvent" });

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

export interface HttpResponse {
  statusCode?: string;
  path?: string;
}

export const HttpResponse: Schema.Codec<HttpResponse> =
  /*@__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpResponse" });

export interface GetIamPolicyRequest {
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Codec<GetIamPolicyRequest> =
  /*@__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface AzureTenant {
  displayName?: string;
  id?: string;
}

export const AzureTenant: Schema.Codec<AzureTenant> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureTenant" });

export interface ToxicCombination {
  relatedFindings?: ReadonlyArray<string>;
  attackExposureScore?: number;
}

export const ToxicCombination: Schema.Codec<ToxicCombination> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
    attackExposureScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ToxicCombination" });

export interface Connection {
  sourceIp?: string;
  destinationPort?: number;
  sourcePort?: number;
  destinationIp?: string;
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
    destinationPort: Schema.optional(Schema.Number),
    sourcePort: Schema.optional(Schema.Number),
    destinationIp: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connection" });

export interface Detection {
  binary?: string;
  percentPagesMatched?: number;
}

export const Detection: Schema.Codec<Detection> =
  /*@__PURE__*/ Schema.Struct({
    binary: Schema.optional(Schema.String),
    percentPagesMatched: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Detection" });

export interface MemoryHashSignature {
  detections?: ReadonlyArray<Detection>;
  binaryFamily?: string;
}

export const MemoryHashSignature: Schema.Codec<MemoryHashSignature> =
  /*@__PURE__*/ Schema.Struct({
    detections: Schema.optional(Schema.Array(Detection)),
    binaryFamily: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemoryHashSignature" });

export interface SecurityCenterProperties {
  resourceProject?: string;
  resourceOwners?: ReadonlyArray<string>;
  resourceName?: string;
  resourceParent?: string;
  resourceType?: string;
}

export const SecurityCenterProperties: Schema.Codec<SecurityCenterProperties> =
  /*@__PURE__*/ Schema.Struct({
    resourceProject: Schema.optional(Schema.String),
    resourceOwners: Schema.optional(Schema.Array(Schema.String)),
    resourceName: Schema.optional(Schema.String),
    resourceParent: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityCenterProperties" });

export interface Asset {
  name?: string;
  securityCenterProperties?: SecurityCenterProperties;
  securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
  updateTime?: string;
  resourceProperties?: Record<string, unknown>;
  createTime?: string;
}

export const Asset: Schema.Codec<Asset> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    securityCenterProperties: Schema.optional(SecurityCenterProperties),
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1beta1SecurityMarks,
    ),
    updateTime: Schema.optional(Schema.String),
    resourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Asset" });

export interface ListAssetsResult {
  state?:
    | "STATE_UNSPECIFIED"
    | "UNUSED"
    | "ADDED"
    | "REMOVED"
    | "ACTIVE"
    | (string & {});
  asset?: Asset;
}

export const ListAssetsResult: Schema.Codec<ListAssetsResult> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    asset: Schema.optional(Asset),
  }).annotate({ identifier: "ListAssetsResult" });

export interface PolicyViolationSummary {
  evaluationErrorsCount?: string;
  outOfScopeResourcesCount?: string;
  policyViolationsCount?: string;
  conformantResourcesCount?: string;
}

export const PolicyViolationSummary: Schema.Codec<PolicyViolationSummary> =
  /*@__PURE__*/ Schema.Struct({
    evaluationErrorsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    policyViolationsCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyViolationSummary" });

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

export interface AzureResourceGroup {
  name?: string;
  id?: string;
}

export const AzureResourceGroup: Schema.Codec<AzureResourceGroup> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureResourceGroup" });

export interface CloudDlpInspection {
  fullScan?: boolean;
  infoTypeCount?: string;
  inspectJob?: string;
  infoType?: string;
}

export const CloudDlpInspection: Schema.Codec<CloudDlpInspection> =
  /*@__PURE__*/ Schema.Struct({
    fullScan: Schema.optional(Schema.Boolean),
    infoTypeCount: Schema.optional(Schema.String),
    inspectJob: Schema.optional(Schema.String),
    infoType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudDlpInspection" });

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

export interface YaraRuleSignature {
  yaraRule?: string;
}

export const YaraRuleSignature: Schema.Codec<YaraRuleSignature> =
  /*@__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "YaraRuleSignature" });

export interface ExfilResource {
  components?: ReadonlyArray<string>;
  name?: string;
}

export const ExfilResource: Schema.Codec<ExfilResource> =
  /*@__PURE__*/ Schema.Struct({
    components: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExfilResource" });

export interface AzureSubscription {
  displayName?: string;
  id?: string;
}

export const AzureSubscription: Schema.Codec<AzureSubscription> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureSubscription" });

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

export interface GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping {
  mediumSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  highSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping: Schema.Codec<GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping> =
  /*@__PURE__*/ Schema.Struct({
    mediumSensitivityMapping: Schema.optional(Schema.String),
    highSensitivityMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping",
  });

export interface AffectedResources {
  count?: string;
}

export const AffectedResources: Schema.Codec<AffectedResources> =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AffectedResources" });

export interface TestIamPermissionsRequest {
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Codec<TestIamPermissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface GoogleCloudSecuritycenterV1BigQueryExport {
  name?: string;
  dataset?: string;
  filter?: string;
  updateTime?: string;
  mostRecentEditor?: string;
  principal?: string;
  createTime?: string;
  description?: string;
}

export const GoogleCloudSecuritycenterV1BigQueryExport: Schema.Codec<GoogleCloudSecuritycenterV1BigQueryExport> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1BigQueryExport" });

export interface Notebook {
  notebookUpdateTime?: string;
  name?: string;
  service?: string;
  lastAuthor?: string;
}

export const Notebook: Schema.Codec<Notebook> =
  /*@__PURE__*/ Schema.Struct({
    notebookUpdateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
  }).annotate({ identifier: "Notebook" });

export interface AiModel {
  location?: string;
  usageCategory?: string;
  name?: string;
  displayName?: string;
  domain?: string;
  library?: string;
  publisher?: string;
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
}

export const AiModel: Schema.Codec<AiModel> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
  }).annotate({ identifier: "AiModel" });

export interface OrgPolicy {
  name?: string;
}

export const OrgPolicy: Schema.Codec<OrgPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrgPolicy" });

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

export interface GroupFindingsRequest {
  readTime?: string;
  pageToken?: string;
  groupBy?: string;
  filter?: string;
  pageSize?: number;
}

export const GroupFindingsRequest: Schema.Codec<GroupFindingsRequest> =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    groupBy: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GroupFindingsRequest" });

export interface AzureManagementGroup {
  id?: string;
  displayName?: string;
}

export const AzureManagementGroup: Schema.Codec<AzureManagementGroup> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureManagementGroup" });

export interface AccessReview {
  verb?: string;
  group?: string;
  version?: string;
  name?: string;
  ns?: string;
  resource?: string;
  subresource?: string;
}

export const AccessReview: Schema.Codec<AccessReview> =
  /*@__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessReview" });

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
  role?: Role;
  subjects?: ReadonlyArray<Subject>;
  name?: string;
  ns?: string;
}

export const GoogleCloudSecuritycenterV1Binding: Schema.Codec<GoogleCloudSecuritycenterV1Binding> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Role),
    subjects: Schema.optional(Schema.Array(Subject)),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Binding" });

export interface Node {
  name?: string;
}

export const Node: Schema.Codec<Node> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Node" });

export interface NodePool {
  name?: string;
  nodes?: ReadonlyArray<Node>;
}

export const NodePool: Schema.Codec<NodePool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(Node)),
  }).annotate({ identifier: "NodePool" });

export interface Pod {
  ns?: string;
  containers?: ReadonlyArray<Container>;
  name?: string;
  labels?: ReadonlyArray<Label>;
}

export const Pod: Schema.Codec<Pod> = /*@__PURE__*/ Schema.Struct({
  ns: Schema.optional(Schema.String),
  containers: Schema.optional(Schema.Array(Container)),
  name: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Array(Label)),
}).annotate({ identifier: "Pod" });

export interface Kubernetes {
  accessReviews?: ReadonlyArray<AccessReview>;
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV1Binding>;
  objects?: ReadonlyArray<Securitycenter_Object>;
  nodes?: ReadonlyArray<Node>;
  nodePools?: ReadonlyArray<NodePool>;
  pods?: ReadonlyArray<Pod>;
  roles?: ReadonlyArray<Role>;
}

export const Kubernetes: Schema.Codec<Kubernetes> =
  /*@__PURE__*/ Schema.Struct({
    accessReviews: Schema.optional(Schema.Array(AccessReview)),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV1Binding)),
    objects: Schema.optional(Schema.Array(Securitycenter_Object)),
    nodes: Schema.optional(Schema.Array(Node)),
    nodePools: Schema.optional(Schema.Array(NodePool)),
    pods: Schema.optional(Schema.Array(Pod)),
    roles: Schema.optional(Schema.Array(Role)),
  }).annotate({ identifier: "Kubernetes" });

export interface DataFlowEvent {
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  eventId?: string;
  eventTime?: string;
  principalEmail?: string;
  violatedLocation?: string;
}

export const DataFlowEvent: Schema.Codec<DataFlowEvent> =
  /*@__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataFlowEvent" });

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

export interface GoogleCloudSecuritycenterV2IssueResourceApplication {
  name?: string;
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplication: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceApplication> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplication",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcApplication {
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcApplication: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceAdcApplication> =
  /*@__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAdcApplication",
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

export interface GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata {
  projectId?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata> =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResource {
  awsMetadata?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadata;
  name?: string;
  displayName?: string;
  type?: string;
  azureMetadata?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadata;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  application?: GoogleCloudSecuritycenterV2IssueResourceApplication;
  adcApplication?: GoogleCloudSecuritycenterV2IssueResourceAdcApplication;
  adcSharedTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision;
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision;
  googleCloudMetadata?: GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata;
}

export const GoogleCloudSecuritycenterV2IssueResource: Schema.Codec<GoogleCloudSecuritycenterV2IssueResource> =
  /*@__PURE__*/ Schema.Struct({
    awsMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadata,
    ),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAzureMetadata,
    ),
    cloudProvider: Schema.optional(Schema.String),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplication,
    ),
    adcApplication: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplication,
    ),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision,
    ),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision,
    ),
    googleCloudMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueResource" });

export interface GoogleCloudSecuritycenterV2IssueFindingCve {
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingCve: Schema.Codec<GoogleCloudSecuritycenterV2IssueFindingCve> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFindingCve" });

export interface GoogleCloudSecuritycenterV2IssueFinding {
  cve?: GoogleCloudSecuritycenterV2IssueFindingCve;
  securityBulletin?: GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin;
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFinding: Schema.Codec<GoogleCloudSecuritycenterV2IssueFinding> =
  /*@__PURE__*/ Schema.Struct({
    cve: Schema.optional(GoogleCloudSecuritycenterV2IssueFindingCve),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFinding" });

export interface GoogleCloudSecuritycenterV2IssueMute {
  muteState?: "MUTE_STATE_UNSPECIFIED" | "NOT_MUTED" | "MUTED" | (string & {});
  muteReason?: string;
  muteInitiator?: string;
  muteUpdateTime?: string;
}

export const GoogleCloudSecuritycenterV2IssueMute: Schema.Codec<GoogleCloudSecuritycenterV2IssueMute> =
  /*@__PURE__*/ Schema.Struct({
    muteState: Schema.optional(Schema.String),
    muteReason: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    muteUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueMute" });

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
  type?: string;
  values?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContextContext: Schema.Codec<GoogleCloudSecuritycenterV2IssueSecurityContextContext> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueSecurityContextContext",
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
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  updateTime?: string;
  secondaryResources?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResource>;
  relatedFindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueFinding>;
  mute?: GoogleCloudSecuritycenterV2IssueMute;
  description?: string;
  lastObservationTime?: string;
  domains?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueDomain>;
  createTime?: string;
  detection?: string;
  name?: string;
  primaryResource?: GoogleCloudSecuritycenterV2IssueResource;
  remediations?: ReadonlyArray<string>;
  exposureScore?: number;
  issueType?:
    | "ISSUE_TYPE_UNSPECIFIED"
    | "CHOKEPOINT"
    | "TOXIC_COMBINATION"
    | "INSIGHT"
    | (string & {});
  securityContexts?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueSecurityContext>;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2Issue: Schema.Codec<GoogleCloudSecuritycenterV2Issue> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    secondaryResources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueResource),
    ),
    relatedFindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueFinding),
    ),
    mute: Schema.optional(GoogleCloudSecuritycenterV2IssueMute),
    description: Schema.optional(Schema.String),
    lastObservationTime: Schema.optional(Schema.String),
    domains: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueDomain),
    ),
    createTime: Schema.optional(Schema.String),
    detection: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    primaryResource: Schema.optional(GoogleCloudSecuritycenterV2IssueResource),
    remediations: Schema.optional(Schema.Array(Schema.String)),
    exposureScore: Schema.optional(Schema.Number),
    issueType: Schema.optional(Schema.String),
    securityContexts: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueSecurityContext),
    ),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Issue" });

export interface IamBinding {
  role?: string;
  member?: string;
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
}

export const IamBinding: Schema.Codec<IamBinding> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamBinding" });

export interface DiscoveredWorkload {
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  detectedRelevantKeywords?: boolean;
  detectedRelevantHardware?: boolean;
  detectedRelevantPackages?: boolean;
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
}

export const DiscoveredWorkload: Schema.Codec<DiscoveredWorkload> =
  /*@__PURE__*/ Schema.Struct({
    workloadType: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveredWorkload" });

export interface ProcessSignature {
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
  memoryHashSignature?: MemoryHashSignature;
  yaraRuleSignature?: YaraRuleSignature;
}

export const ProcessSignature: Schema.Codec<ProcessSignature> =
  /*@__PURE__*/ Schema.Struct({
    signatureType: Schema.optional(Schema.String),
    memoryHashSignature: Schema.optional(MemoryHashSignature),
    yaraRuleSignature: Schema.optional(YaraRuleSignature),
  }).annotate({ identifier: "ProcessSignature" });

export interface ServiceAccountDelegationInfo {
  principalEmail?: string;
  principalSubject?: string;
}

export const ServiceAccountDelegationInfo: Schema.Codec<ServiceAccountDelegationInfo> =
  /*@__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccountDelegationInfo" });

export interface GroupAssetsRequest {
  compareDuration?: string;
  pageSize?: number;
  readTime?: string;
  pageToken?: string;
  filter?: string;
  groupBy?: string;
}

export const GroupAssetsRequest: Schema.Codec<GroupAssetsRequest> =
  /*@__PURE__*/ Schema.Struct({
    compareDuration: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    readTime: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    groupBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupAssetsRequest" });

export interface GoogleCloudSecuritycenterV1ResourceSelector {
  resourceTypes?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV1ResourceSelector: Schema.Codec<GoogleCloudSecuritycenterV1ResourceSelector> =
  /*@__PURE__*/ Schema.Struct({
    resourceTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceSelector" });

export interface AwsOrganizationalUnit {
  name?: string;
  id?: string;
}

export const AwsOrganizationalUnit: Schema.Codec<AwsOrganizationalUnit> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganizationalUnit" });

export interface Disk {
  name?: string;
}

export const Disk: Schema.Codec<Disk> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

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

export interface EnvironmentVariable {
  name?: string;
  val?: string;
}

export const EnvironmentVariable: Schema.Codec<EnvironmentVariable> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    val: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvironmentVariable" });

export interface SetFindingStateRequest {
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  startTime?: string;
}

export const SetFindingStateRequest: Schema.Codec<SetFindingStateRequest> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetFindingStateRequest" });

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

export interface Expr {
  expression?: string;
  title?: string;
  location?: string;
  description?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  role?: string;
  members?: ReadonlyArray<string>;
  condition?: Expr;
}

export const Binding: Schema.Codec<Binding> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface Geolocation {
  regionCode?: string;
}

export const Geolocation: Schema.Codec<Geolocation> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Geolocation" });

export interface Access {
  serviceAccountKeyName?: string;
  serviceName?: string;
  principalEmail?: string;
  userName?: string;
  callerIp?: string;
  userAgent?: string;
  methodName?: string;
  callerIpGeo?: Geolocation;
  serviceAccountDelegationInfo?: ReadonlyArray<ServiceAccountDelegationInfo>;
  userAgentFamily?: string;
  principalSubject?: string;
}

export const Access: Schema.Codec<Access> =
  /*@__PURE__*/ Schema.Struct({
    serviceAccountKeyName: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    methodName: Schema.optional(Schema.String),
    callerIpGeo: Schema.optional(Geolocation),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(ServiceAccountDelegationInfo),
    ),
    userAgentFamily: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
  }).annotate({ identifier: "Access" });

export interface ExportFindingsMetadata {
  exportStartTime?: string;
  bigQueryDestination?: BigQueryDestination;
}

export const ExportFindingsMetadata: Schema.Codec<ExportFindingsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    exportStartTime: Schema.optional(Schema.String),
    bigQueryDestination: Schema.optional(BigQueryDestination),
  }).annotate({ identifier: "ExportFindingsMetadata" });

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

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributes {
  environment?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment;
  criticality?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality;
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV1ResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment,
    ),
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality,
    ),
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
    ),
    developerOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
    ),
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1ResourceApplicationAttributes",
  });

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

export interface Job {
  errorCode?: number;
  state?:
    | "JOB_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  name?: string;
  location?: string;
}

export const Job: Schema.Codec<Job> = /*@__PURE__*/ Schema.Struct({
  errorCode: Schema.optional(Schema.Number),
  state: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
}).annotate({ identifier: "Job" });

export interface GoogleCloudSecuritycenterV2ResourceValueConfig {
  scope?: string;
  updateTime?: string;
  resourceLabelsSelector?: Record<string, string>;
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  resourceType?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  name?: string;
  tagValues?: ReadonlyArray<string>;
  description?: string;
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping;
  createTime?: string;
}

export const GoogleCloudSecuritycenterV2ResourceValueConfig: Schema.Codec<GoogleCloudSecuritycenterV2ResourceValueConfig> =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    resourceValue: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping,
    ),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceValueConfig" });

export interface Chokepoint {
  relatedFindings?: ReadonlyArray<string>;
}

export const Chokepoint: Schema.Codec<Chokepoint> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Chokepoint" });

export interface Application {
  baseUri?: string;
  fullUri?: string;
}

export const Application: Schema.Codec<Application> =
  /*@__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Application" });

export interface ResourcePathNode {
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
  displayName?: string;
}

export const ResourcePathNode: Schema.Codec<ResourcePathNode> =
  /*@__PURE__*/ Schema.Struct({
    nodeType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourcePathNode" });

export interface ResourcePath {
  nodes?: ReadonlyArray<ResourcePathNode>;
}

export const ResourcePath: Schema.Codec<ResourcePath> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(ResourcePathNode)),
  }).annotate({ identifier: "ResourcePath" });

export interface GoogleCloudSecuritycenterV1Property {
  name?: string;
  valueExpression?: Expr;
}

export const GoogleCloudSecuritycenterV1Property: Schema.Codec<GoogleCloudSecuritycenterV1Property> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    valueExpression: Schema.optional(Expr),
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
  customOutput?: GoogleCloudSecuritycenterV1CustomOutputSpec;
  description?: string;
  predicate?: Expr;
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
    customOutput: Schema.optional(GoogleCloudSecuritycenterV1CustomOutputSpec),
    description: Schema.optional(Schema.String),
    predicate: Schema.optional(Expr),
    severity: Schema.optional(Schema.String),
    resourceSelector: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceSelector,
    ),
    recommendation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomConfig" });

export interface GoogleCloudSecuritycenterV1MuteConfig {
  updateTime?: string;
  mostRecentEditor?: string;
  expiryTime?: string;
  filter?: string;
  name?: string;
  displayName?: string;
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  description?: string;
  createTime?: string;
}

export const GoogleCloudSecuritycenterV1MuteConfig: Schema.Codec<GoogleCloudSecuritycenterV1MuteConfig> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1MuteConfig" });

export interface Contact {
  email?: string;
}

export const Contact: Schema.Codec<Contact> =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Contact" });

export interface AdaptiveProtection {
  confidence?: number;
}

export const AdaptiveProtection: Schema.Codec<AdaptiveProtection> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AdaptiveProtection" });

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

export interface SecretEnvironmentVariable {
  key?: string;
}

export const SecretEnvironmentVariable: Schema.Codec<SecretEnvironmentVariable> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretEnvironmentVariable" });

export interface Secret {
  filePath?: SecretFilePath;
  type?: string;
  status?: SecretStatus;
  environmentVariable?: SecretEnvironmentVariable;
}

export const Secret: Schema.Codec<Secret> =
  /*@__PURE__*/ Schema.Struct({
    filePath: Schema.optional(SecretFilePath),
    type: Schema.optional(Schema.String),
    status: Schema.optional(SecretStatus),
    environmentVariable: Schema.optional(SecretEnvironmentVariable),
  }).annotate({ identifier: "Secret" });

export interface AwsAccount {
  id?: string;
  name?: string;
}

export const AwsAccount: Schema.Codec<AwsAccount> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsAccount" });

export interface AwsOrganization {
  id?: string;
}

export const AwsOrganization: Schema.Codec<AwsOrganization> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganization" });

export interface AwsMetadata {
  organizationalUnits?: ReadonlyArray<AwsOrganizationalUnit>;
  account?: AwsAccount;
  organization?: AwsOrganization;
}

export const AwsMetadata: Schema.Codec<AwsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    organizationalUnits: Schema.optional(Schema.Array(AwsOrganizationalUnit)),
    account: Schema.optional(AwsAccount),
    organization: Schema.optional(AwsOrganization),
  }).annotate({ identifier: "AwsMetadata" });

export interface AttackExposure {
  exposedLowValueResourcesCount?: number;
  score?: number;
  latestCalculationTime?: string;
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  attackExposureResult?: string;
  exposedMediumValueResourcesCount?: number;
  exposedHighValueResourcesCount?: number;
}

export const AttackExposure: Schema.Codec<AttackExposure> =
  /*@__PURE__*/ Schema.Struct({
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    latestCalculationTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    attackExposureResult: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AttackExposure" });

export interface DynamicMuteRecord {
  muteConfig?: string;
  matchTime?: string;
}

export const DynamicMuteRecord: Schema.Codec<DynamicMuteRecord> =
  /*@__PURE__*/ Schema.Struct({
    muteConfig: Schema.optional(Schema.String),
    matchTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicMuteRecord" });

export interface GoogleCloudSecuritycenterV2MuteConfig {
  updateTime?: string;
  mostRecentEditor?: string;
  expiryTime?: string;
  description?: string;
  createTime?: string;
  cryptoKeyName?: string;
  filter?: string;
  name?: string;
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
}

export const GoogleCloudSecuritycenterV2MuteConfig: Schema.Codec<GoogleCloudSecuritycenterV2MuteConfig> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteConfig" });

export interface ExportFindingsResponse {}

export const ExportFindingsResponse: Schema.Codec<ExportFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExportFindingsResponse",
  });

export interface AdcApplication {
  name?: string;
  attributes?: GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
}

export const AdcApplication: Schema.Codec<AdcApplication> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "AdcApplication" });

export interface ListAssetsResponse {
  nextPageToken?: string;
  totalSize?: number;
  listAssetsResults?: ReadonlyArray<ListAssetsResult>;
  readTime?: string;
}

export const ListAssetsResponse: Schema.Codec<ListAssetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    listAssetsResults: Schema.optional(Schema.Array(ListAssetsResult)),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAssetsResponse" });

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

export interface TestIamPermissionsResponse {
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Codec<TestIamPermissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

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

export interface Denied {
  ipRules?: ReadonlyArray<IpRule>;
}

export const Denied: Schema.Codec<Denied> =
  /*@__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(IpRule)),
  }).annotate({ identifier: "Denied" });

export interface InfoType {
  name?: string;
  sensitivityScore?: SensitivityScore;
  version?: string;
}

export const InfoType: Schema.Codec<InfoType> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(SensitivityScore),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "InfoType" });

export interface Folder {
  resourceFolder?: string;
  resourceFolderDisplayName?: string;
}

export const Folder: Schema.Codec<Folder> =
  /*@__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

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

export interface ExternalExposure {
  internalBackendService?: string;
  instanceGroup?: string;
  exposedApplication?: string;
  privatePort?: string;
  serviceFirewallPolicy?: string;
  exposedService?: string;
  networkEndpointGroup?: string;
  exposedEndpoint?: string;
  networkIngressFirewallPolicy?: string;
  backendService?: string;
  publicIpAddress?: string;
  forwardingRule?: string;
  pscServiceAttachment?: string;
  publicPort?: string;
  loadBalancerFirewallPolicy?: string;
  httpResponse?: ReadonlyArray<HttpResponse>;
  privateIpAddress?: string;
  networkPathInsightsGenerationTime?: string;
  hostnameUri?: string;
  backendBucket?: string;
  pscNetworkAttachment?: string;
}

export const ExternalExposure: Schema.Codec<ExternalExposure> =
  /*@__PURE__*/ Schema.Struct({
    internalBackendService: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    httpResponse: Schema.optional(Schema.Array(HttpResponse)),
    privateIpAddress: Schema.optional(Schema.String),
    networkPathInsightsGenerationTime: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalExposure" });

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

export interface LoadBalancer {
  name?: string;
}

export const LoadBalancer: Schema.Codec<LoadBalancer> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoadBalancer" });

export interface Attack {
  classification?: string;
  volumePpsLong?: string;
  volumePps?: number;
  volumeBps?: number;
  volumeBpsLong?: string;
}

export const Attack: Schema.Codec<Attack> =
  /*@__PURE__*/ Schema.Struct({
    classification: Schema.optional(Schema.String),
    volumePpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    volumeBps: Schema.optional(Schema.Number),
    volumeBpsLong: Schema.optional(Schema.String),
  }).annotate({ identifier: "Attack" });

export interface GroupResult {
  properties?: Record<string, unknown>;
  count?: string;
}

export const GroupResult: Schema.Codec<GroupResult> =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupResult" });

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

export interface DiskPath {
  partitionUuid?: string;
  relativePath?: string;
}

export const DiskPath: Schema.Codec<DiskPath> =
  /*@__PURE__*/ Schema.Struct({
    partitionUuid: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskPath" });

export interface File {
  partiallyHashed?: boolean;
  path?: string;
  sha256?: string;
  hashedSize?: string;
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  diskPath?: DiskPath;
  size?: string;
  contents?: string;
  operations?: ReadonlyArray<FileOperation>;
}

export const File: Schema.Codec<File> =
  /*@__PURE__*/ Schema.Struct({
    partiallyHashed: Schema.optional(Schema.Boolean),
    path: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
    hashedSize: Schema.optional(Schema.String),
    fileLoadState: Schema.optional(Schema.String),
    diskPath: Schema.optional(DiskPath),
    size: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(FileOperation)),
  }).annotate({ identifier: "File" });

export interface Source {
  name?: string;
  displayName?: string;
  description?: string;
}

export const Source: Schema.Codec<Source> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
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

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface AzureMetadata {
  managementGroups?: ReadonlyArray<AzureManagementGroup>;
  subscription?: AzureSubscription;
  resourceGroup?: AzureResourceGroup;
  tenant?: AzureTenant;
}

export const AzureMetadata: Schema.Codec<AzureMetadata> =
  /*@__PURE__*/ Schema.Struct({
    managementGroups: Schema.optional(Schema.Array(AzureManagementGroup)),
    subscription: Schema.optional(AzureSubscription),
    resourceGroup: Schema.optional(AzureResourceGroup),
    tenant: Schema.optional(AzureTenant),
  }).annotate({ identifier: "AzureMetadata" });

export interface ContactDetails {
  contacts?: ReadonlyArray<Contact>;
}

export const ContactDetails: Schema.Codec<ContactDetails> =
  /*@__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(Contact)),
  }).annotate({ identifier: "ContactDetails" });

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
  name?: string;
  displayName?: string;
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
  controls?: ReadonlyArray<Control>;
}

export const Framework: Schema.Codec<Framework> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    category: Schema.optional(Schema.Array(Schema.String)),
    controls: Schema.optional(Schema.Array(Control)),
  }).annotate({ identifier: "Framework" });

export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
  marks?: Record<string, string>;
  canonicalName?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1SecurityMarks: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1SecurityMarks> =
  /*@__PURE__*/ Schema.Struct({
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1SecurityMarks",
  });

export interface ArtifactGuardPolicy {
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
  policyId?: string;
  failureReason?: string;
}

export const ArtifactGuardPolicy: Schema.Codec<ArtifactGuardPolicy> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    policyId: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactGuardPolicy" });

export interface GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
  updateTime?: string;
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "INHERITED"
    | (string & {});
  name?: string;
  displayName?: string;
  ancestorModule?: string;
  lastEditor?: string;
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule: Schema.Codec<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    ancestorModule: Schema.optional(Schema.String),
    lastEditor: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    cloudProvider: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule",
  });

export interface GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping {
  mediumSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  highSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping: Schema.Codec<GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping> =
  /*@__PURE__*/ Schema.Struct({
    mediumSensitivityMapping: Schema.optional(Schema.String),
    highSensitivityMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping",
  });

export interface GoogleCloudSecuritycenterV1ResourceValueConfig {
  description?: string;
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping;
  createTime?: string;
  name?: string;
  tagValues?: ReadonlyArray<string>;
  resourceLabelsSelector?: Record<string, string>;
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  resourceType?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  scope?: string;
  updateTime?: string;
}

export const GoogleCloudSecuritycenterV1ResourceValueConfig: Schema.Codec<GoogleCloudSecuritycenterV1ResourceValueConfig> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping,
    ),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    resourceValue: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceValueConfig" });

export interface Policy {
  bindings?: ReadonlyArray<Binding>;
  auditConfigs?: ReadonlyArray<AuditConfig>;
  etag?: string;
  version?: number;
}

export const Policy: Schema.Codec<Policy> =
  /*@__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(Binding)),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  updateMask?: string;
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Codec<SetIamPolicyRequest> =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  name?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule: Schema.Codec<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ Schema.Struct({
    cloudProvider: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    enablementState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule",
  });

export interface Requests {
  longTermAllowed?: number;
  longTermDenied?: number;
  ratio?: number;
  shortTermAllowed?: number;
}

export const Requests: Schema.Codec<Requests> =
  /*@__PURE__*/ Schema.Struct({
    longTermAllowed: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    ratio: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Requests" });

export interface CloudDlpDataProfile {
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
  infoTypes?: ReadonlyArray<InfoType>;
  dataProfile?: string;
}

export const CloudDlpDataProfile: Schema.Codec<CloudDlpDataProfile> =
  /*@__PURE__*/ Schema.Struct({
    parentType: Schema.optional(Schema.String),
    infoTypes: Schema.optional(Schema.Array(InfoType)),
    dataProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudDlpDataProfile" });

export interface AdcSharedTemplateRevision {
  name?: string;
}

export const AdcSharedTemplateRevision: Schema.Codec<AdcSharedTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcSharedTemplateRevision" });

export interface VulnerabilityCountBySeverity {
  severityToFindingCount?: Record<string, string>;
}

export const VulnerabilityCountBySeverity: Schema.Codec<VulnerabilityCountBySeverity> =
  /*@__PURE__*/ Schema.Struct({
    severityToFindingCount: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "VulnerabilityCountBySeverity" });

export interface PolicyDriftDetails {
  detectedValue?: string;
  field?: string;
  expectedValue?: string;
}

export const PolicyDriftDetails: Schema.Codec<PolicyDriftDetails> =
  /*@__PURE__*/ Schema.Struct({
    detectedValue: Schema.optional(Schema.String),
    field: Schema.optional(Schema.String),
    expectedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyDriftDetails" });

export interface GoogleCloudSecuritycenterV2BigQueryExport {
  name?: string;
  dataset?: string;
  filter?: string;
  principal?: string;
  cryptoKeyName?: string;
  createTime?: string;
  description?: string;
  updateTime?: string;
  mostRecentEditor?: string;
}

export const GoogleCloudSecuritycenterV2BigQueryExport: Schema.Codec<GoogleCloudSecuritycenterV2BigQueryExport> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2BigQueryExport" });

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

export interface GoogleCloudSecuritycenterV1Resource {
  project?: string;
  adcSharedTemplate?: AdcSharedTemplateRevision;
  parent?: string;
  folders?: ReadonlyArray<Folder>;
  service?: string;
  resourcePathString?: string;
  organization?: string;
  azureMetadata?: AzureMetadata;
  awsMetadata?: AwsMetadata;
  projectDisplayName?: string;
  location?: string;
  resourcePath?: ResourcePath;
  adcApplicationTemplate?: AdcApplicationTemplateRevision;
  application?: GoogleCloudSecuritycenterV1ResourceApplication;
  adcApplication?: AdcApplication;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  name?: string;
  displayName?: string;
  type?: string;
  parentDisplayName?: string;
}

export const GoogleCloudSecuritycenterV1Resource: Schema.Codec<GoogleCloudSecuritycenterV1Resource> =
  /*@__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(AdcSharedTemplateRevision),
    parent: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(Folder)),
    service: Schema.optional(Schema.String),
    resourcePathString: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(AzureMetadata),
    awsMetadata: Schema.optional(AwsMetadata),
    projectDisplayName: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    resourcePath: Schema.optional(ResourcePath),
    adcApplicationTemplate: Schema.optional(AdcApplicationTemplateRevision),
    application: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplication,
    ),
    adcApplication: Schema.optional(AdcApplication),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Resource" });

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
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV1p1beta1Folder>;
  parentDisplayName?: string;
  name?: string;
  project?: string;
  projectDisplayName?: string;
  parent?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Resource: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1Resource> =
  /*@__PURE__*/ Schema.Struct({
    folders: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1p1beta1Folder),
    ),
    parentDisplayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Resource" });

export interface Network {
  name?: string;
}

export const Network: Schema.Codec<Network> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Network" });

export interface AssetDiscoveryConfig {
  projectIds?: ReadonlyArray<string>;
  inclusionMode?:
    | "INCLUSION_MODE_UNSPECIFIED"
    | "INCLUDE_ONLY"
    | "EXCLUDE"
    | (string & {});
}

export const AssetDiscoveryConfig: Schema.Codec<AssetDiscoveryConfig> =
  /*@__PURE__*/ Schema.Struct({
    projectIds: Schema.optional(Schema.Array(Schema.String)),
    inclusionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetDiscoveryConfig" });

export interface OrganizationSettings {
  name?: string;
  assetDiscoveryConfig?: AssetDiscoveryConfig;
  enableAssetDiscovery?: boolean;
}

export const OrganizationSettings: Schema.Codec<OrganizationSettings> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    assetDiscoveryConfig: Schema.optional(AssetDiscoveryConfig),
    enableAssetDiscovery: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OrganizationSettings" });

export interface KernelRootkit {
  unexpectedReadOnlyDataModification?: boolean;
  unexpectedSystemCallHandler?: boolean;
  unexpectedCodeModification?: boolean;
  name?: string;
  unexpectedInterruptHandler?: boolean;
  unexpectedKprobeHandler?: boolean;
  unexpectedKernelCodePages?: boolean;
  unexpectedProcessesInRunqueue?: boolean;
  unexpectedFtraceHandler?: boolean;
}

export const KernelRootkit: Schema.Codec<KernelRootkit> =
  /*@__PURE__*/ Schema.Struct({
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KernelRootkit" });

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

export interface SecurityPosture {
  revisionId?: string;
  name?: string;
  policy?: string;
  postureDeploymentResource?: string;
  policySet?: string;
  policyDriftDetails?: ReadonlyArray<PolicyDriftDetails>;
  postureDeployment?: string;
  changedPolicy?: string;
}

export const SecurityPosture: Schema.Codec<SecurityPosture> =
  /*@__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    postureDeploymentResource: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(Schema.Array(PolicyDriftDetails)),
    postureDeployment: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPosture" });

export interface CloudArmor {
  securityPolicy?: SecurityPolicy;
  attack?: Attack;
  duration?: string;
  requests?: Requests;
  adaptiveProtection?: AdaptiveProtection;
  threatVector?: string;
}

export const CloudArmor: Schema.Codec<CloudArmor> =
  /*@__PURE__*/ Schema.Struct({
    securityPolicy: Schema.optional(SecurityPolicy),
    attack: Schema.optional(Attack),
    duration: Schema.optional(Schema.String),
    requests: Schema.optional(Requests),
    adaptiveProtection: Schema.optional(AdaptiveProtection),
    threatVector: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudArmor" });

export interface GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV1BulkMuteFindingsResponse: Schema.Codec<GoogleCloudSecuritycenterV1BulkMuteFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV1BulkMuteFindingsResponse",
  });

export interface Database {
  name?: string;
  displayName?: string;
  query?: string;
  version?: string;
  grantees?: ReadonlyArray<string>;
  userName?: string;
}

export const Database: Schema.Codec<Database> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    userName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Database" });

export interface Process {
  envVariables?: ReadonlyArray<EnvironmentVariable>;
  envVariablesTruncated?: boolean;
  userId?: string;
  script?: File;
  args?: ReadonlyArray<string>;
  parentPid?: string;
  binary?: File;
  pid?: string;
  argumentsTruncated?: boolean;
  name?: string;
  libraries?: ReadonlyArray<File>;
}

export const Process: Schema.Codec<Process> =
  /*@__PURE__*/ Schema.Struct({
    envVariables: Schema.optional(Schema.Array(EnvironmentVariable)),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    userId: Schema.optional(Schema.String),
    script: Schema.optional(File),
    args: Schema.optional(Schema.Array(Schema.String)),
    parentPid: Schema.optional(Schema.String),
    binary: Schema.optional(File),
    pid: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    libraries: Schema.optional(Schema.Array(File)),
  }).annotate({ identifier: "Process" });

export interface CloudControl {
  policyType?: string;
  cloudControlName?: string;
  version?: number;
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
}

export const CloudControl: Schema.Codec<CloudControl> =
  /*@__PURE__*/ Schema.Struct({
    policyType: Schema.optional(Schema.String),
    cloudControlName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudControl" });

export interface ComplianceDetails {
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  frameworks?: ReadonlyArray<Framework>;
  cloudControl?: CloudControl;
}

export const ComplianceDetails: Schema.Codec<ComplianceDetails> =
  /*@__PURE__*/ Schema.Struct({
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    frameworks: Schema.optional(Schema.Array(Framework)),
    cloudControl: Schema.optional(CloudControl),
  }).annotate({ identifier: "ComplianceDetails" });

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

export interface DataRetentionDeletionEvent {
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
  eventDetectionTime?: string;
  minRetentionAllowed?: string;
  dataObjectCount?: string;
  maxRetentionAllowed?: string;
}

export const DataRetentionDeletionEvent: Schema.Codec<DataRetentionDeletionEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    minRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataRetentionDeletionEvent" });

export interface IpRules {
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  sourceIpRanges?: ReadonlyArray<string>;
  allowed?: Allowed;
  destinationIpRanges?: ReadonlyArray<string>;
  denied?: Denied;
  exposedServices?: ReadonlyArray<string>;
}

export const IpRules: Schema.Codec<IpRules> =
  /*@__PURE__*/ Schema.Struct({
    direction: Schema.optional(Schema.String),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
    allowed: Schema.optional(Allowed),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    denied: Schema.optional(Denied),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IpRules" });

export interface Exfiltration {
  totalExfiltratedBytes?: string;
  sources?: ReadonlyArray<ExfilResource>;
  targets?: ReadonlyArray<ExfilResource>;
}

export const Exfiltration: Schema.Codec<Exfiltration> =
  /*@__PURE__*/ Schema.Struct({
    totalExfiltratedBytes: Schema.optional(Schema.String),
    sources: Schema.optional(Schema.Array(ExfilResource)),
    targets: Schema.optional(Schema.Array(ExfilResource)),
  }).annotate({ identifier: "Exfiltration" });

export interface MuteInfo {
  staticMute?: StaticMute;
  dynamicMuteRecords?: ReadonlyArray<DynamicMuteRecord>;
}

export const MuteInfo: Schema.Codec<MuteInfo> =
  /*@__PURE__*/ Schema.Struct({
    staticMute: Schema.optional(StaticMute),
    dynamicMuteRecords: Schema.optional(Schema.Array(DynamicMuteRecord)),
  }).annotate({ identifier: "MuteInfo" });

export interface MitreAttack {
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
}

export const MitreAttack: Schema.Codec<MitreAttack> =
  /*@__PURE__*/ Schema.Struct({
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    primaryTactic: Schema.optional(Schema.String),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "MitreAttack" });

export interface ArtifactGuardPolicies {
  failingPolicies?: ReadonlyArray<ArtifactGuardPolicy>;
  resourceId?: string;
}

export const ArtifactGuardPolicies: Schema.Codec<ArtifactGuardPolicies> =
  /*@__PURE__*/ Schema.Struct({
    failingPolicies: Schema.optional(Schema.Array(ArtifactGuardPolicy)),
    resourceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactGuardPolicies" });

export interface Finding {
  vulnerability?: Vulnerability;
  name?: string;
  muteInitiator?: string;
  backupDisasterRecovery?: BackupDisasterRecovery;
  externalSystems?: Record<string, GoogleCloudSecuritycenterV1ExternalSystem>;
  toxicCombination?: ToxicCombination;
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  agentDataAccessEvents?: ReadonlyArray<AgentDataAccessEvent>;
  connections?: ReadonlyArray<Connection>;
  nextSteps?: string;
  networks?: ReadonlyArray<Network>;
  iamBindings?: ReadonlyArray<IamBinding>;
  externalExposure?: ExternalExposure;
  compliances?: ReadonlyArray<Compliance>;
  attackExposure?: AttackExposure;
  files?: ReadonlyArray<File>;
  dataRetentionDeletionEvents?: ReadonlyArray<DataRetentionDeletionEvent>;
  affectedResources?: AffectedResources;
  ipRules?: IpRules;
  eventTime?: string;
  complianceDetails?: ComplianceDetails;
  createTime?: string;
  kernelRootkit?: KernelRootkit;
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
  cloudDlpInspection?: CloudDlpInspection;
  orgPolicies?: ReadonlyArray<OrgPolicy>;
  application?: Application;
  groupMemberships?: ReadonlyArray<GroupMembership>;
  chokepoint?: Chokepoint;
  exfiltration?: Exfiltration;
  sourceProperties?: Record<string, unknown>;
  vertexAi?: VertexAi;
  contacts?: Record<string, ContactDetails>;
  discoveredWorkload?: DiscoveredWorkload;
  parentDisplayName?: string;
  description?: string;
  policyViolationSummary?: PolicyViolationSummary;
  dataAccessEvents?: ReadonlyArray<DataAccessEvent>;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  processes?: ReadonlyArray<Process>;
  job?: Job;
  containers?: ReadonlyArray<Container>;
  indicator?: Indicator;
  moduleName?: string;
  muteUpdateTime?: string;
  muteInfo?: MuteInfo;
  access?: Access;
  notebook?: Notebook;
  database?: Database;
  resourceName?: string;
  cloudArmor?: CloudArmor;
  iamDetails?: GoogleCloudSecuritycenterV1IamDetails;
  disk?: Disk;
  securityPosture?: SecurityPosture;
  cloudDlpDataProfile?: CloudDlpDataProfile;
  securityMarks?: SecurityMarks;
  loadBalancers?: ReadonlyArray<LoadBalancer>;
  aiModel?: AiModel;
  secret?: Secret;
  logEntries?: ReadonlyArray<LogEntry>;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  mitreAttack?: MitreAttack;
  kubernetes?: Kubernetes;
  dataFlowEvents?: ReadonlyArray<DataFlowEvent>;
  externalUri?: string;
  canonicalName?: string;
  parent?: string;
  category?: string;
  artifactGuardPolicies?: ArtifactGuardPolicies;
}

export const Finding: Schema.Codec<Finding> =
  /*@__PURE__*/ Schema.Struct({
    vulnerability: Schema.optional(Vulnerability),
    name: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    backupDisasterRecovery: Schema.optional(BackupDisasterRecovery),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV1ExternalSystem),
    ),
    toxicCombination: Schema.optional(ToxicCombination),
    mute: Schema.optional(Schema.String),
    agentDataAccessEvents: Schema.optional(Schema.Array(AgentDataAccessEvent)),
    connections: Schema.optional(Schema.Array(Connection)),
    nextSteps: Schema.optional(Schema.String),
    networks: Schema.optional(Schema.Array(Network)),
    iamBindings: Schema.optional(Schema.Array(IamBinding)),
    externalExposure: Schema.optional(ExternalExposure),
    compliances: Schema.optional(Schema.Array(Compliance)),
    attackExposure: Schema.optional(AttackExposure),
    files: Schema.optional(Schema.Array(File)),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(DataRetentionDeletionEvent),
    ),
    affectedResources: Schema.optional(AffectedResources),
    ipRules: Schema.optional(IpRules),
    eventTime: Schema.optional(Schema.String),
    complianceDetails: Schema.optional(ComplianceDetails),
    createTime: Schema.optional(Schema.String),
    kernelRootkit: Schema.optional(KernelRootkit),
    findingClass: Schema.optional(Schema.String),
    cloudDlpInspection: Schema.optional(CloudDlpInspection),
    orgPolicies: Schema.optional(Schema.Array(OrgPolicy)),
    application: Schema.optional(Application),
    groupMemberships: Schema.optional(Schema.Array(GroupMembership)),
    chokepoint: Schema.optional(Chokepoint),
    exfiltration: Schema.optional(Exfiltration),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    vertexAi: Schema.optional(VertexAi),
    contacts: Schema.optional(Schema.Record(Schema.String, ContactDetails)),
    discoveredWorkload: Schema.optional(DiscoveredWorkload),
    parentDisplayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    policyViolationSummary: Schema.optional(PolicyViolationSummary),
    dataAccessEvents: Schema.optional(Schema.Array(DataAccessEvent)),
    state: Schema.optional(Schema.String),
    processes: Schema.optional(Schema.Array(Process)),
    job: Schema.optional(Job),
    containers: Schema.optional(Schema.Array(Container)),
    indicator: Schema.optional(Indicator),
    moduleName: Schema.optional(Schema.String),
    muteUpdateTime: Schema.optional(Schema.String),
    muteInfo: Schema.optional(MuteInfo),
    access: Schema.optional(Access),
    notebook: Schema.optional(Notebook),
    database: Schema.optional(Database),
    resourceName: Schema.optional(Schema.String),
    cloudArmor: Schema.optional(CloudArmor),
    iamDetails: Schema.optional(GoogleCloudSecuritycenterV1IamDetails),
    disk: Schema.optional(Disk),
    securityPosture: Schema.optional(SecurityPosture),
    cloudDlpDataProfile: Schema.optional(CloudDlpDataProfile),
    securityMarks: Schema.optional(SecurityMarks),
    loadBalancers: Schema.optional(Schema.Array(LoadBalancer)),
    aiModel: Schema.optional(AiModel),
    secret: Schema.optional(Secret),
    logEntries: Schema.optional(Schema.Array(LogEntry)),
    severity: Schema.optional(Schema.String),
    mitreAttack: Schema.optional(MitreAttack),
    kubernetes: Schema.optional(Kubernetes),
    dataFlowEvents: Schema.optional(Schema.Array(DataFlowEvent)),
    externalUri: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    artifactGuardPolicies: Schema.optional(ArtifactGuardPolicies),
  }).annotate({ identifier: "Finding" });

export interface GoogleCloudSecuritycenterV1NotificationMessage {
  finding?: Finding;
  notificationConfigName?: string;
  resource?: GoogleCloudSecuritycenterV1Resource;
}

export const GoogleCloudSecuritycenterV1NotificationMessage: Schema.Codec<GoogleCloudSecuritycenterV1NotificationMessage> =
  /*@__PURE__*/ Schema.Struct({
    finding: Schema.optional(Finding),
    notificationConfigName: Schema.optional(Schema.String),
    resource: Schema.optional(GoogleCloudSecuritycenterV1Resource),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1NotificationMessage" });

export interface GoogleCloudSecuritycenterV1p1beta1Finding {
  resourceName?: string;
  createTime?: string;
  name?: string;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  eventTime?: string;
  securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
  category?: string;
  parent?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  sourceProperties?: Record<string, unknown>;
  canonicalName?: string;
  externalUri?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Finding: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1Finding> =
  /*@__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1p1beta1SecurityMarks,
    ),
    category: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    canonicalName: Schema.optional(Schema.String),
    externalUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Finding" });

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

export interface ListFindingsResponse {
  nextPageToken?: string;
  findings?: ReadonlyArray<GoogleCloudSecuritycenterV1beta1Finding>;
  readTime?: string;
  totalSize?: number;
}

export const ListFindingsResponse: Schema.Codec<ListFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    findings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1beta1Finding),
    ),
    readTime: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ListFindingsResponse" });

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

export interface GroupAssetsResponse {
  nextPageToken?: string;
  groupByResults?: ReadonlyArray<GroupResult>;
  readTime?: string;
}

export const GroupAssetsResponse: Schema.Codec<GroupAssetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    groupByResults: Schema.optional(Schema.Array(GroupResult)),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupAssetsResponse" });

export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
  finding?: GoogleCloudSecuritycenterV1p1beta1Finding;
  notificationConfigName?: string;
  resource?: GoogleCloudSecuritycenterV1p1beta1Resource;
}

export const GoogleCloudSecuritycenterV1p1beta1NotificationMessage: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1NotificationMessage> =
  /*@__PURE__*/ Schema.Struct({
    finding: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Finding),
    notificationConfigName: Schema.optional(Schema.String),
    resource: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Resource),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1NotificationMessage",
  });

export interface RunAssetDiscoveryRequest {}

export const RunAssetDiscoveryRequest: Schema.Codec<RunAssetDiscoveryRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RunAssetDiscoveryRequest",
  });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

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

export interface GroupFindingsResponse {
  nextPageToken?: string;
  groupByResults?: ReadonlyArray<GroupResult>;
  readTime?: string;
}

export const GroupFindingsResponse: Schema.Codec<GroupFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    groupByResults: Schema.optional(Schema.Array(GroupResult)),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupFindingsResponse" });

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
  name: string;
}

export const GetOrganizationSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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
  updateMask?: string;
  name: string;
  /** Request body */
  body?: OrganizationSettings;
}

export const UpdateOrganizationSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(OrganizationSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/sources",
      hasBody: true,
    }),
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
    T.Http({ method: "GET", path: "v1beta1/{+parent}/sources" }),
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
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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
      path: "v1beta1/{+resource}:setIamPolicy",
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
      path: "v1beta1/{+resource}:getIamPolicy",
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
      path: "v1beta1/{+resource}:testIamPermissions",
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

export interface GetOrganizationsSourcesRequest {
  name: string;
}

export const GetOrganizationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface UpdateSecurityMarksOrganizationsSourcesFindingsRequest {
  updateMask?: string;
  startTime?: string;
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
}

export const UpdateSecurityMarksOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1beta1SecurityMarks).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityMarksOrganizationsSourcesFindingsRequest>;

export type UpdateSecurityMarksOrganizationsSourcesFindingsResponse =
  GoogleCloudSecuritycenterV1beta1SecurityMarks;
export const UpdateSecurityMarksOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1beta1SecurityMarks;

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

export interface CreateOrganizationsSourcesFindingsRequest {
  findingId?: string;
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1beta1Finding;
}

export const CreateOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    findingId: Schema.optional(Schema.String).pipe(T.HttpQuery("findingId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
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
  ) as unknown as Schema.Codec<CreateOrganizationsSourcesFindingsRequest>;

export type CreateOrganizationsSourcesFindingsResponse =
  GoogleCloudSecuritycenterV1beta1Finding;
export const CreateOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1beta1Finding;

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

export interface ListOrganizationsSourcesFindingsRequest {
  readTime?: string;
  fieldMask?: string;
  pageToken?: string;
  filter?: string;
  parent: string;
  pageSize?: number;
  orderBy?: string;
}

export const ListOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/findings" }),
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
    T.Http({ method: "POST", path: "v1beta1/{+name}:setState", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SetStateOrganizationsSourcesFindingsRequest>;

export type SetStateOrganizationsSourcesFindingsResponse =
  GoogleCloudSecuritycenterV1beta1Finding;
export const SetStateOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1beta1Finding;

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
  body?: GoogleCloudSecuritycenterV1beta1Finding;
}

export const PatchOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1beta1Finding).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsSourcesFindingsRequest>;

export type PatchOrganizationsSourcesFindingsResponse =
  GoogleCloudSecuritycenterV1beta1Finding;
export const PatchOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1beta1Finding;

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
      path: "v1beta1/{+parent}/findings:group",
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

export interface ListOrganizationsAssetsRequest {
  readTime?: string;
  fieldMask?: string;
  pageToken?: string;
  filter?: string;
  parent: string;
  compareDuration?: string;
  orderBy?: string;
  pageSize?: number;
}

export const ListOrganizationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/assets" }),
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

export interface UpdateSecurityMarksOrganizationsAssetsRequest {
  name: string;
  updateMask?: string;
  startTime?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
}

export const UpdateSecurityMarksOrganizationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    body: Schema.optional(GoogleCloudSecuritycenterV1beta1SecurityMarks).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityMarksOrganizationsAssetsRequest>;

export type UpdateSecurityMarksOrganizationsAssetsResponse =
  GoogleCloudSecuritycenterV1beta1SecurityMarks;
export const UpdateSecurityMarksOrganizationsAssetsResponse =
  /*@__PURE__*/ GoogleCloudSecuritycenterV1beta1SecurityMarks;

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
      path: "v1beta1/{+parent}/assets:group",
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
      path: "v1beta1/{+parent}/assets:runDiscovery",
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

export interface ListOrganizationsOperationsRequest {
  pageSize?: number;
  returnPartialSuccess?: boolean;
  name: string;
  pageToken?: string;
  filter?: string;
}

export const ListOrganizationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface GetOrganizationsOperationsRequest {
  name: string;
}

export const GetOrganizationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface DeleteOrganizationsOperationsRequest {
  name: string;
}

export const DeleteOrganizationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

export interface CancelOrganizationsOperationsRequest {
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOrganizationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
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
