// ==========================================================================
// Security Command Center API (securitycenter v1beta2)
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
  version: "v1beta2",
  rootUrl: "https://securitycenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

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

export interface GoogleCloudSecuritycenterV2Pipeline {
  name?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Pipeline: Schema.Codec<GoogleCloudSecuritycenterV2Pipeline> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pipeline" });

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
  displayName?: string;
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
  controls?: ReadonlyArray<Control>;
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
}

export const Framework: Schema.Codec<Framework> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    category: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    controls: Schema.optional(Schema.Array(Control)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Framework" });

export interface CloudControl {
  version?: number;
  cloudControlName?: string;
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
  policyType?: string;
}

export const CloudControl: Schema.Codec<CloudControl> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    cloudControlName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    policyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudControl" });

export interface ComplianceDetails {
  frameworks?: ReadonlyArray<Framework>;
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  cloudControl?: CloudControl;
}

export const ComplianceDetails: Schema.Codec<ComplianceDetails> =
  /*@__PURE__*/ Schema.Struct({
    frameworks: Schema.optional(Schema.Array(Framework)),
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    cloudControl: Schema.optional(CloudControl),
  }).annotate({ identifier: "ComplianceDetails" });

export interface Subject {
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  name?: string;
  ns?: string;
}

export const Subject: Schema.Codec<Subject> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subject" });

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
  status?: GoogleCloudSecuritycenterV2SecretStatus;
  environmentVariable?: GoogleCloudSecuritycenterV2SecretEnvironmentVariable;
  filePath?: GoogleCloudSecuritycenterV2SecretFilePath;
  type?: string;
}

export const GoogleCloudSecuritycenterV2Secret: Schema.Codec<GoogleCloudSecuritycenterV2Secret> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleCloudSecuritycenterV2SecretStatus),
    environmentVariable: Schema.optional(
      GoogleCloudSecuritycenterV2SecretEnvironmentVariable,
    ),
    filePath: Schema.optional(GoogleCloudSecuritycenterV2SecretFilePath),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Secret" });

export interface GoogleCloudSecuritycenterV2BackupDisasterRecovery {
  appliance?: string;
  backupTemplate?: string;
  storagePool?: string;
  policies?: ReadonlyArray<string>;
  applications?: ReadonlyArray<string>;
  backupCreateTime?: string;
  profile?: string;
  backupType?: string;
  policyOptions?: ReadonlyArray<string>;
  host?: string;
}

export const GoogleCloudSecuritycenterV2BackupDisasterRecovery: Schema.Codec<GoogleCloudSecuritycenterV2BackupDisasterRecovery> =
  /*@__PURE__*/ Schema.Struct({
    appliance: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    applications: Schema.optional(Schema.Array(Schema.String)),
    backupCreateTime: Schema.optional(Schema.String),
    profile: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    host: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2BackupDisasterRecovery",
  });

export interface Attack {
  classification?: string;
  volumePpsLong?: string;
  volumeBpsLong?: string;
  volumePps?: number;
  volumeBps?: number;
}

export const Attack: Schema.Codec<Attack> =
  /*@__PURE__*/ Schema.Struct({
    classification: Schema.optional(Schema.String),
    volumePpsLong: Schema.optional(Schema.String),
    volumeBpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    volumeBps: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Attack" });

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

export interface GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision {
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision: Schema.Codec<GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision",
  });

export interface KernelRootkit {
  unexpectedCodeModification?: boolean;
  unexpectedFtraceHandler?: boolean;
  unexpectedKernelCodePages?: boolean;
  unexpectedInterruptHandler?: boolean;
  unexpectedReadOnlyDataModification?: boolean;
  unexpectedKprobeHandler?: boolean;
  unexpectedProcessesInRunqueue?: boolean;
  unexpectedSystemCallHandler?: boolean;
  name?: string;
}

export const KernelRootkit: Schema.Codec<KernelRootkit> =
  /*@__PURE__*/ Schema.Struct({
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "KernelRootkit" });

export interface DataAccessEvent {
  eventTime?: string;
  eventId?: string;
  principalEmail?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
}

export const DataAccessEvent: Schema.Codec<DataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataAccessEvent" });

export interface GoogleCloudSecuritycenterV2Label {
  name?: string;
  value?: string;
}

export const GoogleCloudSecuritycenterV2Label: Schema.Codec<GoogleCloudSecuritycenterV2Label> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Label" });

export interface GoogleCloudSecuritycenterV2IssueFindingCve {
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingCve: Schema.Codec<GoogleCloudSecuritycenterV2IssueFindingCve> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFindingCve" });

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

export interface GoogleCloudSecuritycenterV2DataAccessEvent {
  eventTime?: string;
  eventId?: string;
  principalEmail?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2DataAccessEvent: Schema.Codec<GoogleCloudSecuritycenterV2DataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataAccessEvent" });

export interface GoogleCloudSecuritycenterV2DataFlowEvent {
  eventId?: string;
  principalEmail?: string;
  eventTime?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  violatedLocation?: string;
}

export const GoogleCloudSecuritycenterV2DataFlowEvent: Schema.Codec<GoogleCloudSecuritycenterV2DataFlowEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataFlowEvent" });

export interface GoogleCloudSecuritycenterV2AdcSharedTemplateRevision {
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcSharedTemplateRevision: Schema.Codec<GoogleCloudSecuritycenterV2AdcSharedTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcSharedTemplateRevision",
  });

export interface Role {
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  name?: string;
  ns?: string;
}

export const Role: Schema.Codec<Role> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "Role" });

export interface TicketInfo {
  status?: string;
  uri?: string;
  id?: string;
  updateTime?: string;
  description?: string;
  assignee?: string;
}

export const TicketInfo: Schema.Codec<TicketInfo> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
  }).annotate({ identifier: "TicketInfo" });

export interface Cvssv3 {
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  baseScore?: number;
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
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
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
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
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
}

export const Cvssv3: Schema.Codec<Cvssv3> =
  /*@__PURE__*/ Schema.Struct({
    availabilityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    userInteraction: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    attackVector: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
  }).annotate({ identifier: "Cvssv3" });

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
  publicIpAddress?: string;
  exposedEndpoint?: string;
  publicPort?: string;
  backendBucket?: string;
  httpResponse?: ReadonlyArray<HttpResponse>;
  exposedApplication?: string;
  exposedService?: string;
  instanceGroup?: string;
  networkPathInsightsGenerationTime?: string;
  hostnameUri?: string;
  serviceFirewallPolicy?: string;
  pscNetworkAttachment?: string;
  privatePort?: string;
  loadBalancerFirewallPolicy?: string;
  forwardingRule?: string;
  networkIngressFirewallPolicy?: string;
  networkEndpointGroup?: string;
  privateIpAddress?: string;
  pscServiceAttachment?: string;
  internalBackendService?: string;
  backendService?: string;
}

export const ExternalExposure: Schema.Codec<ExternalExposure> =
  /*@__PURE__*/ Schema.Struct({
    publicIpAddress: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    httpResponse: Schema.optional(Schema.Array(HttpResponse)),
    exposedApplication: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    networkPathInsightsGenerationTime: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalExposure" });

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
  imageId?: string;
  name?: string;
  uri?: string;
  labels?: ReadonlyArray<Label>;
}

export const Container: Schema.Codec<Container> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Label)),
  }).annotate({ identifier: "Container" });

export interface Securitycenter_Object {
  containers?: ReadonlyArray<Container>;
  name?: string;
  group?: string;
  kind?: string;
  ns?: string;
}

export const Securitycenter_Object: Schema.Codec<Securitycenter_Object> =
  /*@__PURE__*/ Schema.Struct({
    containers: Schema.optional(Schema.Array(Container)),
    name: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "Securitycenter_Object" });

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
  domains?: ReadonlyArray<string>;
  uris?: ReadonlyArray<string>;
  ipAddresses?: ReadonlyArray<string>;
  signatures?: ReadonlyArray<GoogleCloudSecuritycenterV2ProcessSignature>;
}

export const GoogleCloudSecuritycenterV2Indicator: Schema.Codec<GoogleCloudSecuritycenterV2Indicator> =
  /*@__PURE__*/ Schema.Struct({
    domains: Schema.optional(Schema.Array(Schema.String)),
    uris: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    signatures: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ProcessSignature),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Indicator" });

export interface GoogleCloudSecuritycenterV2ToxicCombination {
  attackExposureScore?: number;
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2ToxicCombination: Schema.Codec<GoogleCloudSecuritycenterV2ToxicCombination> =
  /*@__PURE__*/ Schema.Struct({
    attackExposureScore: Schema.optional(Schema.Number),
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ToxicCombination" });

export interface GoogleCloudSecuritycenterV2PolicyViolationSummary {
  policyViolationsCount?: string;
  outOfScopeResourcesCount?: string;
  conformantResourcesCount?: string;
  evaluationErrorsCount?: string;
}

export const GoogleCloudSecuritycenterV2PolicyViolationSummary: Schema.Codec<GoogleCloudSecuritycenterV2PolicyViolationSummary> =
  /*@__PURE__*/ Schema.Struct({
    policyViolationsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
    evaluationErrorsCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2PolicyViolationSummary",
  });

export interface GoogleCloudSecuritycenterV2Connection {
  destinationIp?: string;
  sourcePort?: number;
  destinationPort?: number;
  sourceIp?: string;
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
    destinationIp: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
    destinationPort: Schema.optional(Schema.Number),
    sourceIp: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Connection" });

export interface GoogleCloudSecuritycenterV2TicketInfo {
  uri?: string;
  status?: string;
  id?: string;
  updateTime?: string;
  description?: string;
  assignee?: string;
}

export const GoogleCloudSecuritycenterV2TicketInfo: Schema.Codec<GoogleCloudSecuritycenterV2TicketInfo> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2TicketInfo" });

export interface GoogleCloudSecuritycenterV2ExternalSystem {
  status?: string;
  assignees?: ReadonlyArray<string>;
  caseCreateTime?: string;
  caseCloseTime?: string;
  casePriority?: string;
  caseUri?: string;
  externalSystemUpdateTime?: string;
  caseSla?: string;
  name?: string;
  externalUid?: string;
  ticketInfo?: GoogleCloudSecuritycenterV2TicketInfo;
}

export const GoogleCloudSecuritycenterV2ExternalSystem: Schema.Codec<GoogleCloudSecuritycenterV2ExternalSystem> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    caseCreateTime: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    caseUri: Schema.optional(Schema.String),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    externalUid: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(GoogleCloudSecuritycenterV2TicketInfo),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalSystem" });

export interface GoogleCloudSecuritycenterV2Disk {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Disk: Schema.Codec<GoogleCloudSecuritycenterV2Disk> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Disk" });

export interface GoogleCloudSecuritycenterV2AttackExposure {
  attackExposureResult?: string;
  exposedMediumValueResourcesCount?: number;
  score?: number;
  exposedHighValueResourcesCount?: number;
  exposedLowValueResourcesCount?: number;
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  latestCalculationTime?: string;
}

export const GoogleCloudSecuritycenterV2AttackExposure: Schema.Codec<GoogleCloudSecuritycenterV2AttackExposure> =
  /*@__PURE__*/ Schema.Struct({
    attackExposureResult: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    latestCalculationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AttackExposure" });

export interface GoogleCloudSecuritycenterV2KernelRootkit {
  unexpectedSystemCallHandler?: boolean;
  name?: string;
  unexpectedCodeModification?: boolean;
  unexpectedFtraceHandler?: boolean;
  unexpectedKernelCodePages?: boolean;
  unexpectedInterruptHandler?: boolean;
  unexpectedReadOnlyDataModification?: boolean;
  unexpectedKprobeHandler?: boolean;
  unexpectedProcessesInRunqueue?: boolean;
}

export const GoogleCloudSecuritycenterV2KernelRootkit: Schema.Codec<GoogleCloudSecuritycenterV2KernelRootkit> =
  /*@__PURE__*/ Schema.Struct({
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2KernelRootkit" });

export interface GoogleCloudSecuritycenterV2Notebook {
  service?: string;
  lastAuthor?: string;
  name?: string;
  notebookUpdateTime?: string;
}

export const GoogleCloudSecuritycenterV2Notebook: Schema.Codec<GoogleCloudSecuritycenterV2Notebook> =
  /*@__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Notebook" });

export interface GoogleCloudSecuritycenterV2CloudDlpInspection {
  infoType?: string;
  infoTypeCount?: string;
  fullScan?: boolean;
  inspectJob?: string;
}

export const GoogleCloudSecuritycenterV2CloudDlpInspection: Schema.Codec<GoogleCloudSecuritycenterV2CloudDlpInspection> =
  /*@__PURE__*/ Schema.Struct({
    infoType: Schema.optional(Schema.String),
    infoTypeCount: Schema.optional(Schema.String),
    fullScan: Schema.optional(Schema.Boolean),
    inspectJob: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpInspection" });

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
  postureDeployment?: string;
  name?: string;
  policySet?: string;
  postureDeploymentResource?: string;
  policy?: string;
  revisionId?: string;
  policyDriftDetails?: ReadonlyArray<GoogleCloudSecuritycenterV2PolicyDriftDetails>;
  changedPolicy?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPosture: Schema.Codec<GoogleCloudSecuritycenterV2SecurityPosture> =
  /*@__PURE__*/ Schema.Struct({
    postureDeployment: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
    postureDeploymentResource: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PolicyDriftDetails),
    ),
    changedPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPosture" });

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

export interface GoogleCloudSecuritycenterV2DiskPath {
  partitionUuid?: string;
  relativePath?: string;
}

export const GoogleCloudSecuritycenterV2DiskPath: Schema.Codec<GoogleCloudSecuritycenterV2DiskPath> =
  /*@__PURE__*/ Schema.Struct({
    partitionUuid: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
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
  partiallyHashed?: boolean;
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  sha256?: string;
  diskPath?: GoogleCloudSecuritycenterV2DiskPath;
  operations?: ReadonlyArray<GoogleCloudSecuritycenterV2FileOperation>;
  path?: string;
  size?: string;
  hashedSize?: string;
  contents?: string;
}

export const GoogleCloudSecuritycenterV2File: Schema.Codec<GoogleCloudSecuritycenterV2File> =
  /*@__PURE__*/ Schema.Struct({
    partiallyHashed: Schema.optional(Schema.Boolean),
    fileLoadState: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
    diskPath: Schema.optional(GoogleCloudSecuritycenterV2DiskPath),
    operations: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2FileOperation),
    ),
    path: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    hashedSize: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2File" });

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
  binary?: GoogleCloudSecuritycenterV2File;
  pid?: string;
  libraries?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  script?: GoogleCloudSecuritycenterV2File;
  name?: string;
  argumentsTruncated?: boolean;
  userId?: string;
  parentPid?: string;
  envVariablesTruncated?: boolean;
  envVariables?: ReadonlyArray<GoogleCloudSecuritycenterV2EnvironmentVariable>;
  args?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Process: Schema.Codec<GoogleCloudSecuritycenterV2Process> =
  /*@__PURE__*/ Schema.Struct({
    binary: Schema.optional(GoogleCloudSecuritycenterV2File),
    pid: Schema.optional(Schema.String),
    libraries: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    script: Schema.optional(GoogleCloudSecuritycenterV2File),
    name: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    userId: Schema.optional(Schema.String),
    parentPid: Schema.optional(Schema.String),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    envVariables: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2EnvironmentVariable),
    ),
    args: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Process" });

export interface GoogleCloudSecuritycenterV2Requests {
  longTermAllowed?: number;
  ratio?: number;
  longTermDenied?: number;
  shortTermAllowed?: number;
}

export const GoogleCloudSecuritycenterV2Requests: Schema.Codec<GoogleCloudSecuritycenterV2Requests> =
  /*@__PURE__*/ Schema.Struct({
    longTermAllowed: Schema.optional(Schema.Number),
    ratio: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Requests" });

export interface GoogleCloudSecuritycenterV2Attack {
  volumeBpsLong?: string;
  volumePps?: number;
  volumeBps?: number;
  volumePpsLong?: string;
  classification?: string;
}

export const GoogleCloudSecuritycenterV2Attack: Schema.Codec<GoogleCloudSecuritycenterV2Attack> =
  /*@__PURE__*/ Schema.Struct({
    volumeBpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    volumeBps: Schema.optional(Schema.Number),
    volumePpsLong: Schema.optional(Schema.String),
    classification: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Attack" });

export interface GoogleCloudSecuritycenterV2SecurityPolicy {
  name?: string;
  preview?: boolean;
  type?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPolicy: Schema.Codec<GoogleCloudSecuritycenterV2SecurityPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    preview: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPolicy" });

export interface GoogleCloudSecuritycenterV2AdaptiveProtection {
  confidence?: number;
}

export const GoogleCloudSecuritycenterV2AdaptiveProtection: Schema.Codec<GoogleCloudSecuritycenterV2AdaptiveProtection> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdaptiveProtection" });

export interface GoogleCloudSecuritycenterV2CloudArmor {
  duration?: string;
  requests?: GoogleCloudSecuritycenterV2Requests;
  attack?: GoogleCloudSecuritycenterV2Attack;
  securityPolicy?: GoogleCloudSecuritycenterV2SecurityPolicy;
  threatVector?: string;
  adaptiveProtection?: GoogleCloudSecuritycenterV2AdaptiveProtection;
}

export const GoogleCloudSecuritycenterV2CloudArmor: Schema.Codec<GoogleCloudSecuritycenterV2CloudArmor> =
  /*@__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    requests: Schema.optional(GoogleCloudSecuritycenterV2Requests),
    attack: Schema.optional(GoogleCloudSecuritycenterV2Attack),
    securityPolicy: Schema.optional(GoogleCloudSecuritycenterV2SecurityPolicy),
    threatVector: Schema.optional(Schema.String),
    adaptiveProtection: Schema.optional(
      GoogleCloudSecuritycenterV2AdaptiveProtection,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudArmor" });

export interface GoogleCloudSecuritycenterV2HttpResponse {
  path?: string;
  statusCode?: string;
}

export const GoogleCloudSecuritycenterV2HttpResponse: Schema.Codec<GoogleCloudSecuritycenterV2HttpResponse> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    statusCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2HttpResponse" });

export interface GoogleCloudSecuritycenterV2ExternalExposure {
  hostnameUri?: string;
  instanceGroup?: string;
  networkPathInsightsGenerationTime?: string;
  serviceFirewallPolicy?: string;
  pscNetworkAttachment?: string;
  privateIpAddress?: string;
  networkEndpointGroup?: string;
  backendService?: string;
  pscServiceAttachment?: string;
  internalBackendService?: string;
  networkIngressFirewallPolicy?: string;
  privatePort?: string;
  loadBalancerFirewallPolicy?: string;
  forwardingRule?: string;
  publicPort?: string;
  backendBucket?: string;
  httpResponse?: ReadonlyArray<GoogleCloudSecuritycenterV2HttpResponse>;
  publicIpAddress?: string;
  exposedEndpoint?: string;
  exposedService?: string;
  exposedApplication?: string;
}

export const GoogleCloudSecuritycenterV2ExternalExposure: Schema.Codec<GoogleCloudSecuritycenterV2ExternalExposure> =
  /*@__PURE__*/ Schema.Struct({
    hostnameUri: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    networkPathInsightsGenerationTime: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    httpResponse: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2HttpResponse),
    ),
    publicIpAddress: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalExposure" });

export interface GoogleCloudSecuritycenterV2IamBinding {
  role?: string;
  member?: string;
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
}

export const GoogleCloudSecuritycenterV2IamBinding: Schema.Codec<GoogleCloudSecuritycenterV2IamBinding> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamBinding" });

export interface GoogleCloudSecuritycenterV2DiscoveredWorkload {
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
  detectedRelevantKeywords?: boolean;
  detectedRelevantPackages?: boolean;
  detectedRelevantHardware?: boolean;
}

export const GoogleCloudSecuritycenterV2DiscoveredWorkload: Schema.Codec<GoogleCloudSecuritycenterV2DiscoveredWorkload> =
  /*@__PURE__*/ Schema.Struct({
    workloadType: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiscoveredWorkload" });

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
  baseScore?: number;
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
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
}

export const GoogleCloudSecuritycenterV2Cvssv3: Schema.Codec<GoogleCloudSecuritycenterV2Cvssv3> =
  /*@__PURE__*/ Schema.Struct({
    attackVector: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    userInteraction: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cvssv3" });

export interface GoogleCloudSecuritycenterV2Cve {
  observedInTheWild?: boolean;
  zeroDay?: boolean;
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  exploitReleaseDate?: string;
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
  firstExploitationDate?: string;
  cvssv3?: GoogleCloudSecuritycenterV2Cvssv3;
  upstreamFixAvailable?: boolean;
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  id?: string;
}

export const GoogleCloudSecuritycenterV2Cve: Schema.Codec<GoogleCloudSecuritycenterV2Cve> =
  /*@__PURE__*/ Schema.Struct({
    observedInTheWild: Schema.optional(Schema.Boolean),
    zeroDay: Schema.optional(Schema.Boolean),
    impact: Schema.optional(Schema.String),
    exploitReleaseDate: Schema.optional(Schema.String),
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
    firstExploitationDate: Schema.optional(Schema.String),
    cvssv3: Schema.optional(GoogleCloudSecuritycenterV2Cvssv3),
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
    exploitationActivity: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cve" });

export interface GoogleCloudSecuritycenterV2Package {
  packageName?: string;
  packageType?: string;
  packageVersion?: string;
  cpeUri?: string;
}

export const GoogleCloudSecuritycenterV2Package: Schema.Codec<GoogleCloudSecuritycenterV2Package> =
  /*@__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Package" });

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

export interface GoogleCloudSecuritycenterV2SecurityBulletin {
  bulletinId?: string;
  suggestedUpgradeVersion?: string;
  submissionTime?: string;
}

export const GoogleCloudSecuritycenterV2SecurityBulletin: Schema.Codec<GoogleCloudSecuritycenterV2SecurityBulletin> =
  /*@__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityBulletin" });

export interface GoogleCloudSecuritycenterV2Vulnerability {
  cve?: GoogleCloudSecuritycenterV2Cve;
  offendingPackage?: GoogleCloudSecuritycenterV2Package;
  cwes?: ReadonlyArray<GoogleCloudSecuritycenterV2Cwe>;
  providerRiskScore?: string;
  fixedPackage?: GoogleCloudSecuritycenterV2Package;
  reachable?: boolean;
  securityBulletin?: GoogleCloudSecuritycenterV2SecurityBulletin;
}

export const GoogleCloudSecuritycenterV2Vulnerability: Schema.Codec<GoogleCloudSecuritycenterV2Vulnerability> =
  /*@__PURE__*/ Schema.Struct({
    cve: Schema.optional(GoogleCloudSecuritycenterV2Cve),
    offendingPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    cwes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Cwe)),
    providerRiskScore: Schema.optional(Schema.String),
    fixedPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    reachable: Schema.optional(Schema.Boolean),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityBulletin,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Vulnerability" });

export interface GoogleCloudSecuritycenterV2Database {
  name?: string;
  displayName?: string;
  userName?: string;
  version?: string;
  grantees?: ReadonlyArray<string>;
  query?: string;
}

export const GoogleCloudSecuritycenterV2Database: Schema.Codec<GoogleCloudSecuritycenterV2Database> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Database" });

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

export interface GoogleCloudSecuritycenterV2CloudLoggingEntry {
  resourceContainer?: string;
  insertId?: string;
  logId?: string;
  timestamp?: string;
}

export const GoogleCloudSecuritycenterV2CloudLoggingEntry: Schema.Codec<GoogleCloudSecuritycenterV2CloudLoggingEntry> =
  /*@__PURE__*/ Schema.Struct({
    resourceContainer: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
    logId: Schema.optional(Schema.String),
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
}

export const GoogleCloudSecuritycenterV2MitreAttack: Schema.Codec<GoogleCloudSecuritycenterV2MitreAttack> =
  /*@__PURE__*/ Schema.Struct({
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    primaryTactic: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MitreAttack" });

export interface GoogleCloudSecuritycenterV2IamRolePermission {
  name?: string;
  role?: string;
}

export const GoogleCloudSecuritycenterV2IamRolePermission: Schema.Codec<GoogleCloudSecuritycenterV2IamRolePermission> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamRolePermission" });

export interface GoogleCloudSecuritycenterV2IamDetails {
  iamRolePermissions?: ReadonlyArray<GoogleCloudSecuritycenterV2IamRolePermission>;
}

export const GoogleCloudSecuritycenterV2IamDetails: Schema.Codec<GoogleCloudSecuritycenterV2IamDetails> =
  /*@__PURE__*/ Schema.Struct({
    iamRolePermissions: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamRolePermission),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamDetails" });

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
  infoTypes?: ReadonlyArray<GoogleCloudSecuritycenterV2InfoType>;
  dataProfile?: string;
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2CloudDlpDataProfile: Schema.Codec<GoogleCloudSecuritycenterV2CloudDlpDataProfile> =
  /*@__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2InfoType),
    ),
    dataProfile: Schema.optional(Schema.String),
    parentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpDataProfile" });

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

export interface GoogleCloudSecuritycenterV2Allowed {
  ipRules?: ReadonlyArray<GoogleCloudSecuritycenterV2IpRule>;
}

export const GoogleCloudSecuritycenterV2Allowed: Schema.Codec<GoogleCloudSecuritycenterV2Allowed> =
  /*@__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2IpRule)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Allowed" });

export interface GoogleCloudSecuritycenterV2Denied {
  ipRules?: ReadonlyArray<GoogleCloudSecuritycenterV2IpRule>;
}

export const GoogleCloudSecuritycenterV2Denied: Schema.Codec<GoogleCloudSecuritycenterV2Denied> =
  /*@__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2IpRule)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Denied" });

export interface GoogleCloudSecuritycenterV2IpRules {
  exposedServices?: ReadonlyArray<string>;
  allowed?: GoogleCloudSecuritycenterV2Allowed;
  destinationIpRanges?: ReadonlyArray<string>;
  sourceIpRanges?: ReadonlyArray<string>;
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  denied?: GoogleCloudSecuritycenterV2Denied;
}

export const GoogleCloudSecuritycenterV2IpRules: Schema.Codec<GoogleCloudSecuritycenterV2IpRules> =
  /*@__PURE__*/ Schema.Struct({
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
    allowed: Schema.optional(GoogleCloudSecuritycenterV2Allowed),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
    direction: Schema.optional(Schema.String),
    denied: Schema.optional(GoogleCloudSecuritycenterV2Denied),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRules" });

export interface GoogleCloudSecuritycenterV2Network {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Network: Schema.Codec<GoogleCloudSecuritycenterV2Network> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Network" });

export interface GoogleCloudSecuritycenterV2LoadBalancer {
  name?: string;
}

export const GoogleCloudSecuritycenterV2LoadBalancer: Schema.Codec<GoogleCloudSecuritycenterV2LoadBalancer> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LoadBalancer" });

export interface GoogleCloudSecuritycenterV2Container {
  createTime?: string;
  imageId?: string;
  name?: string;
  uri?: string;
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
}

export const GoogleCloudSecuritycenterV2Container: Schema.Codec<GoogleCloudSecuritycenterV2Container> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Container" });

export interface GoogleCloudSecuritycenterV2Pod {
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  name?: string;
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Pod: Schema.Codec<GoogleCloudSecuritycenterV2Pod> =
  /*@__PURE__*/ Schema.Struct({
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pod" });

export interface GoogleCloudSecuritycenterV2AccessReview {
  resource?: string;
  name?: string;
  group?: string;
  verb?: string;
  version?: string;
  ns?: string;
  subresource?: string;
}

export const GoogleCloudSecuritycenterV2AccessReview: Schema.Codec<GoogleCloudSecuritycenterV2AccessReview> =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AccessReview" });

export interface GoogleCloudSecuritycenterV2Object {
  ns?: string;
  kind?: string;
  group?: string;
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  name?: string;
}

export const GoogleCloudSecuritycenterV2Object: Schema.Codec<GoogleCloudSecuritycenterV2Object> =
  /*@__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Object" });

export interface GoogleCloudSecuritycenterV2Node {
  name?: string;
}

export const GoogleCloudSecuritycenterV2Node: Schema.Codec<GoogleCloudSecuritycenterV2Node> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Node" });

export interface GoogleCloudSecuritycenterV2Role {
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  name?: string;
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Role: Schema.Codec<GoogleCloudSecuritycenterV2Role> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Role" });

export interface GoogleCloudSecuritycenterV2NodePool {
  name?: string;
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
}

export const GoogleCloudSecuritycenterV2NodePool: Schema.Codec<GoogleCloudSecuritycenterV2NodePool> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NodePool" });

export interface GoogleCloudSecuritycenterV2Subject {
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  name?: string;
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Subject: Schema.Codec<GoogleCloudSecuritycenterV2Subject> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Subject" });

export interface GoogleCloudSecuritycenterV2Binding {
  name?: string;
  subjects?: ReadonlyArray<GoogleCloudSecuritycenterV2Subject>;
  ns?: string;
  role?: GoogleCloudSecuritycenterV2Role;
}

export const GoogleCloudSecuritycenterV2Binding: Schema.Codec<GoogleCloudSecuritycenterV2Binding> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    subjects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Subject)),
    ns: Schema.optional(Schema.String),
    role: Schema.optional(GoogleCloudSecuritycenterV2Role),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Binding" });

export interface GoogleCloudSecuritycenterV2Kubernetes {
  pods?: ReadonlyArray<GoogleCloudSecuritycenterV2Pod>;
  accessReviews?: ReadonlyArray<GoogleCloudSecuritycenterV2AccessReview>;
  objects?: ReadonlyArray<GoogleCloudSecuritycenterV2Object>;
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
  roles?: ReadonlyArray<GoogleCloudSecuritycenterV2Role>;
  nodePools?: ReadonlyArray<GoogleCloudSecuritycenterV2NodePool>;
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV2Binding>;
}

export const GoogleCloudSecuritycenterV2Kubernetes: Schema.Codec<GoogleCloudSecuritycenterV2Kubernetes> =
  /*@__PURE__*/ Schema.Struct({
    pods: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Pod)),
    accessReviews: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AccessReview),
    ),
    objects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Object)),
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
    roles: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Role)),
    nodePools: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2NodePool),
    ),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Binding)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Kubernetes" });

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

export interface GoogleCloudSecuritycenterV2DataRetentionDeletionEvent {
  dataObjectCount?: string;
  eventDetectionTime?: string;
  maxRetentionAllowed?: string;
  minRetentionAllowed?: string;
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
    dataObjectCount: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
    minRetentionAllowed: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2DataRetentionDeletionEvent",
  });

export interface GoogleCloudSecuritycenterV2AiModel {
  domain?: string;
  name?: string;
  location?: string;
  library?: string;
  usageCategory?: string;
  publisher?: string;
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AiModel: Schema.Codec<GoogleCloudSecuritycenterV2AiModel> =
  /*@__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AiModel" });

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

export interface GoogleCloudSecuritycenterV2AffectedResources {
  count?: string;
}

export const GoogleCloudSecuritycenterV2AffectedResources: Schema.Codec<GoogleCloudSecuritycenterV2AffectedResources> =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AffectedResources" });

export interface GoogleCloudSecuritycenterV2Chokepoint {
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Chokepoint: Schema.Codec<GoogleCloudSecuritycenterV2Chokepoint> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Chokepoint" });

export interface GoogleCloudSecuritycenterV2OrgPolicy {
  name?: string;
}

export const GoogleCloudSecuritycenterV2OrgPolicy: Schema.Codec<GoogleCloudSecuritycenterV2OrgPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2OrgPolicy" });

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
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
  controls?: ReadonlyArray<GoogleCloudSecuritycenterV2Control>;
  name?: string;
  displayName?: string;
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
}

export const GoogleCloudSecuritycenterV2Framework: Schema.Codec<GoogleCloudSecuritycenterV2Framework> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    controls: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Control)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    category: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Framework" });

export interface GoogleCloudSecuritycenterV2CloudControl {
  version?: number;
  policyType?: string;
  cloudControlName?: string;
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2CloudControl: Schema.Codec<GoogleCloudSecuritycenterV2CloudControl> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    policyType: Schema.optional(Schema.String),
    cloudControlName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudControl" });

export interface GoogleCloudSecuritycenterV2ComplianceDetails {
  frameworks?: ReadonlyArray<GoogleCloudSecuritycenterV2Framework>;
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  cloudControl?: GoogleCloudSecuritycenterV2CloudControl;
}

export const GoogleCloudSecuritycenterV2ComplianceDetails: Schema.Codec<GoogleCloudSecuritycenterV2ComplianceDetails> =
  /*@__PURE__*/ Schema.Struct({
    frameworks: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Framework),
    ),
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    cloudControl: Schema.optional(GoogleCloudSecuritycenterV2CloudControl),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ComplianceDetails" });

export interface GoogleCloudSecuritycenterV2Geolocation {
  regionCode?: string;
}

export const GoogleCloudSecuritycenterV2Geolocation: Schema.Codec<GoogleCloudSecuritycenterV2Geolocation> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Geolocation" });

export interface GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo {
  principalSubject?: string;
  principalEmail?: string;
}

export const GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo: Schema.Codec<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo> =
  /*@__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo",
  });

export interface GoogleCloudSecuritycenterV2Access {
  userAgentFamily?: string;
  principalEmail?: string;
  userName?: string;
  serviceName?: string;
  callerIp?: string;
  callerIpGeo?: GoogleCloudSecuritycenterV2Geolocation;
  methodName?: string;
  serviceAccountKeyName?: string;
  serviceAccountDelegationInfo?: ReadonlyArray<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo>;
  principalSubject?: string;
  userAgent?: string;
}

export const GoogleCloudSecuritycenterV2Access: Schema.Codec<GoogleCloudSecuritycenterV2Access> =
  /*@__PURE__*/ Schema.Struct({
    userAgentFamily: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    callerIpGeo: Schema.optional(GoogleCloudSecuritycenterV2Geolocation),
    methodName: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo),
    ),
    principalSubject: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Access" });

export interface GoogleCloudSecuritycenterV2AgentDataAccessEvent {
  eventId?: string;
  principalSubject?: string;
  eventTime?: string;
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
    principalSubject: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AgentDataAccessEvent",
  });

export interface GoogleCloudSecuritycenterV2Application {
  fullUri?: string;
  baseUri?: string;
}

export const GoogleCloudSecuritycenterV2Application: Schema.Codec<GoogleCloudSecuritycenterV2Application> =
  /*@__PURE__*/ Schema.Struct({
    fullUri: Schema.optional(Schema.String),
    baseUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Application" });

export interface GoogleCloudSecuritycenterV2Finding {
  securityMarks?: GoogleCloudSecuritycenterV2SecurityMarks;
  indicator?: GoogleCloudSecuritycenterV2Indicator;
  toxicCombination?: GoogleCloudSecuritycenterV2ToxicCombination;
  policyViolationSummary?: GoogleCloudSecuritycenterV2PolicyViolationSummary;
  externalUri?: string;
  connections?: ReadonlyArray<GoogleCloudSecuritycenterV2Connection>;
  secret?: GoogleCloudSecuritycenterV2Secret;
  externalSystems?: Record<string, GoogleCloudSecuritycenterV2ExternalSystem>;
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
  disk?: GoogleCloudSecuritycenterV2Disk;
  cryptoKeyName?: string;
  dataFlowEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataFlowEvent>;
  muteUpdateTime?: string;
  attackExposure?: GoogleCloudSecuritycenterV2AttackExposure;
  kernelRootkit?: GoogleCloudSecuritycenterV2KernelRootkit;
  backupDisasterRecovery?: GoogleCloudSecuritycenterV2BackupDisasterRecovery;
  notebook?: GoogleCloudSecuritycenterV2Notebook;
  cloudDlpInspection?: GoogleCloudSecuritycenterV2CloudDlpInspection;
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  createTime?: string;
  job?: GoogleCloudSecuritycenterV2Job;
  securityPosture?: GoogleCloudSecuritycenterV2SecurityPosture;
  contacts?: Record<string, GoogleCloudSecuritycenterV2ContactDetails>;
  artifactGuardPolicies?: GoogleCloudSecuritycenterV2ArtifactGuardPolicies;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  processes?: ReadonlyArray<GoogleCloudSecuritycenterV2Process>;
  vertexAi?: GoogleCloudSecuritycenterV2VertexAi;
  cloudArmor?: GoogleCloudSecuritycenterV2CloudArmor;
  externalExposure?: GoogleCloudSecuritycenterV2ExternalExposure;
  iamBindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IamBinding>;
  discoveredWorkload?: GoogleCloudSecuritycenterV2DiscoveredWorkload;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  groupMemberships?: ReadonlyArray<GoogleCloudSecuritycenterV2GroupMembership>;
  sourceProperties?: Record<string, unknown>;
  vulnerability?: GoogleCloudSecuritycenterV2Vulnerability;
  database?: GoogleCloudSecuritycenterV2Database;
  exfiltration?: GoogleCloudSecuritycenterV2Exfiltration;
  logEntries?: ReadonlyArray<GoogleCloudSecuritycenterV2LogEntry>;
  mitreAttack?: GoogleCloudSecuritycenterV2MitreAttack;
  iamDetails?: GoogleCloudSecuritycenterV2IamDetails;
  description?: string;
  cloudDlpDataProfile?: GoogleCloudSecuritycenterV2CloudDlpDataProfile;
  files?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  ipRules?: GoogleCloudSecuritycenterV2IpRules;
  networks?: ReadonlyArray<GoogleCloudSecuritycenterV2Network>;
  loadBalancers?: ReadonlyArray<GoogleCloudSecuritycenterV2LoadBalancer>;
  nextSteps?: string;
  kubernetes?: GoogleCloudSecuritycenterV2Kubernetes;
  muteInfo?: GoogleCloudSecuritycenterV2MuteInfo;
  parent?: string;
  eventTime?: string;
  dataRetentionDeletionEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent>;
  aiModel?: GoogleCloudSecuritycenterV2AiModel;
  moduleName?: string;
  compliances?: ReadonlyArray<GoogleCloudSecuritycenterV2Compliance>;
  affectedResources?: GoogleCloudSecuritycenterV2AffectedResources;
  canonicalName?: string;
  resourceName?: string;
  chokepoint?: GoogleCloudSecuritycenterV2Chokepoint;
  orgPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2OrgPolicy>;
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  complianceDetails?: GoogleCloudSecuritycenterV2ComplianceDetails;
  dataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataAccessEvent>;
  access?: GoogleCloudSecuritycenterV2Access;
  agentDataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2AgentDataAccessEvent>;
  category?: string;
  application?: GoogleCloudSecuritycenterV2Application;
  name?: string;
  muteInitiator?: string;
  parentDisplayName?: string;
}

export const GoogleCloudSecuritycenterV2Finding: Schema.Codec<GoogleCloudSecuritycenterV2Finding> =
  /*@__PURE__*/ Schema.Struct({
    securityMarks: Schema.optional(GoogleCloudSecuritycenterV2SecurityMarks),
    indicator: Schema.optional(GoogleCloudSecuritycenterV2Indicator),
    toxicCombination: Schema.optional(
      GoogleCloudSecuritycenterV2ToxicCombination,
    ),
    policyViolationSummary: Schema.optional(
      GoogleCloudSecuritycenterV2PolicyViolationSummary,
    ),
    externalUri: Schema.optional(Schema.String),
    connections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Connection),
    ),
    secret: Schema.optional(GoogleCloudSecuritycenterV2Secret),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ExternalSystem),
    ),
    findingClass: Schema.optional(Schema.String),
    disk: Schema.optional(GoogleCloudSecuritycenterV2Disk),
    cryptoKeyName: Schema.optional(Schema.String),
    dataFlowEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataFlowEvent),
    ),
    muteUpdateTime: Schema.optional(Schema.String),
    attackExposure: Schema.optional(GoogleCloudSecuritycenterV2AttackExposure),
    kernelRootkit: Schema.optional(GoogleCloudSecuritycenterV2KernelRootkit),
    backupDisasterRecovery: Schema.optional(
      GoogleCloudSecuritycenterV2BackupDisasterRecovery,
    ),
    notebook: Schema.optional(GoogleCloudSecuritycenterV2Notebook),
    cloudDlpInspection: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpInspection,
    ),
    mute: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    job: Schema.optional(GoogleCloudSecuritycenterV2Job),
    securityPosture: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityPosture,
    ),
    contacts: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ContactDetails),
    ),
    artifactGuardPolicies: Schema.optional(
      GoogleCloudSecuritycenterV2ArtifactGuardPolicies,
    ),
    severity: Schema.optional(Schema.String),
    processes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Process),
    ),
    vertexAi: Schema.optional(GoogleCloudSecuritycenterV2VertexAi),
    cloudArmor: Schema.optional(GoogleCloudSecuritycenterV2CloudArmor),
    externalExposure: Schema.optional(
      GoogleCloudSecuritycenterV2ExternalExposure,
    ),
    iamBindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamBinding),
    ),
    discoveredWorkload: Schema.optional(
      GoogleCloudSecuritycenterV2DiscoveredWorkload,
    ),
    state: Schema.optional(Schema.String),
    groupMemberships: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2GroupMembership),
    ),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    vulnerability: Schema.optional(GoogleCloudSecuritycenterV2Vulnerability),
    database: Schema.optional(GoogleCloudSecuritycenterV2Database),
    exfiltration: Schema.optional(GoogleCloudSecuritycenterV2Exfiltration),
    logEntries: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LogEntry),
    ),
    mitreAttack: Schema.optional(GoogleCloudSecuritycenterV2MitreAttack),
    iamDetails: Schema.optional(GoogleCloudSecuritycenterV2IamDetails),
    description: Schema.optional(Schema.String),
    cloudDlpDataProfile: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpDataProfile,
    ),
    files: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    ipRules: Schema.optional(GoogleCloudSecuritycenterV2IpRules),
    networks: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Network)),
    loadBalancers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LoadBalancer),
    ),
    nextSteps: Schema.optional(Schema.String),
    kubernetes: Schema.optional(GoogleCloudSecuritycenterV2Kubernetes),
    muteInfo: Schema.optional(GoogleCloudSecuritycenterV2MuteInfo),
    parent: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataRetentionDeletionEvent),
    ),
    aiModel: Schema.optional(GoogleCloudSecuritycenterV2AiModel),
    moduleName: Schema.optional(Schema.String),
    compliances: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Compliance),
    ),
    affectedResources: Schema.optional(
      GoogleCloudSecuritycenterV2AffectedResources,
    ),
    canonicalName: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    chokepoint: Schema.optional(GoogleCloudSecuritycenterV2Chokepoint),
    orgPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2OrgPolicy),
    ),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    complianceDetails: Schema.optional(
      GoogleCloudSecuritycenterV2ComplianceDetails,
    ),
    dataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataAccessEvent),
    ),
    access: Schema.optional(GoogleCloudSecuritycenterV2Access),
    agentDataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AgentDataAccessEvent),
    ),
    category: Schema.optional(Schema.String),
    application: Schema.optional(GoogleCloudSecuritycenterV2Application),
    name: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Finding" });

export interface IamBinding {
  role?: string;
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  member?: string;
}

export const IamBinding: Schema.Codec<IamBinding> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamBinding" });

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

export interface ArtifactGuardPolicy {
  policyId?: string;
  failureReason?: string;
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
}

export const ArtifactGuardPolicy: Schema.Codec<ArtifactGuardPolicy> =
  /*@__PURE__*/ Schema.Struct({
    policyId: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactGuardPolicy" });

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
  version?: string;
}

export const MitreAttack: Schema.Codec<MitreAttack> =
  /*@__PURE__*/ Schema.Struct({
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    primaryTactic: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "MitreAttack" });

export interface AzureSubscription {
  id?: string;
  displayName?: string;
}

export const AzureSubscription: Schema.Codec<AzureSubscription> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureSubscription" });

export interface AttackExposure {
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  latestCalculationTime?: string;
  attackExposureResult?: string;
  exposedMediumValueResourcesCount?: number;
  score?: number;
  exposedHighValueResourcesCount?: number;
  exposedLowValueResourcesCount?: number;
}

export const AttackExposure: Schema.Codec<AttackExposure> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    latestCalculationTime: Schema.optional(Schema.String),
    attackExposureResult: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AttackExposure" });

export interface Config {
  moduleEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  value?: Record<string, unknown>;
}

export const Config: Schema.Codec<Config> =
  /*@__PURE__*/ Schema.Struct({
    moduleEnablementState: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Config" });

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

export interface PolicyViolationSummary {
  conformantResourcesCount?: string;
  evaluationErrorsCount?: string;
  policyViolationsCount?: string;
  outOfScopeResourcesCount?: string;
}

export const PolicyViolationSummary: Schema.Codec<PolicyViolationSummary> =
  /*@__PURE__*/ Schema.Struct({
    conformantResourcesCount: Schema.optional(Schema.String),
    evaluationErrorsCount: Schema.optional(Schema.String),
    policyViolationsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyViolationSummary" });

export interface BackupDisasterRecovery {
  host?: string;
  policyOptions?: ReadonlyArray<string>;
  profile?: string;
  backupType?: string;
  applications?: ReadonlyArray<string>;
  backupCreateTime?: string;
  policies?: ReadonlyArray<string>;
  backupTemplate?: string;
  storagePool?: string;
  appliance?: string;
}

export const BackupDisasterRecovery: Schema.Codec<BackupDisasterRecovery> =
  /*@__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    profile: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
    backupCreateTime: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    backupTemplate: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    appliance: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDisasterRecovery" });

export interface Notebook {
  name?: string;
  notebookUpdateTime?: string;
  service?: string;
  lastAuthor?: string;
}

export const Notebook: Schema.Codec<Notebook> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
  }).annotate({ identifier: "Notebook" });

export interface CloudDlpInspection {
  inspectJob?: string;
  infoType?: string;
  infoTypeCount?: string;
  fullScan?: boolean;
}

export const CloudDlpInspection: Schema.Codec<CloudDlpInspection> =
  /*@__PURE__*/ Schema.Struct({
    inspectJob: Schema.optional(Schema.String),
    infoType: Schema.optional(Schema.String),
    infoTypeCount: Schema.optional(Schema.String),
    fullScan: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CloudDlpInspection" });

export interface ArtifactGuardPolicies {
  resourceId?: string;
  failingPolicies?: ReadonlyArray<ArtifactGuardPolicy>;
}

export const ArtifactGuardPolicies: Schema.Codec<ArtifactGuardPolicies> =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    failingPolicies: Schema.optional(Schema.Array(ArtifactGuardPolicy)),
  }).annotate({ identifier: "ArtifactGuardPolicies" });

export interface Job {
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

export const Job: Schema.Codec<Job> = /*@__PURE__*/ Schema.Struct({
  errorCode: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "Job" });

export interface PolicyDriftDetails {
  field?: string;
  expectedValue?: string;
  detectedValue?: string;
}

export const PolicyDriftDetails: Schema.Codec<PolicyDriftDetails> =
  /*@__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    expectedValue: Schema.optional(Schema.String),
    detectedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyDriftDetails" });

export interface SecurityPosture {
  revisionId?: string;
  postureDeploymentResource?: string;
  policy?: string;
  changedPolicy?: string;
  policyDriftDetails?: ReadonlyArray<PolicyDriftDetails>;
  name?: string;
  postureDeployment?: string;
  policySet?: string;
}

export const SecurityPosture: Schema.Codec<SecurityPosture> =
  /*@__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    postureDeploymentResource: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(Schema.Array(PolicyDriftDetails)),
    name: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPosture" });

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

export interface EnvironmentVariable {
  name?: string;
  val?: string;
}

export const EnvironmentVariable: Schema.Codec<EnvironmentVariable> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    val: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvironmentVariable" });

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
  partitionUuid?: string;
  relativePath?: string;
}

export const DiskPath: Schema.Codec<DiskPath> =
  /*@__PURE__*/ Schema.Struct({
    partitionUuid: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskPath" });

export interface File {
  operations?: ReadonlyArray<FileOperation>;
  diskPath?: DiskPath;
  sha256?: string;
  partiallyHashed?: boolean;
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  contents?: string;
  hashedSize?: string;
  path?: string;
  size?: string;
}

export const File: Schema.Codec<File> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(FileOperation)),
    diskPath: Schema.optional(DiskPath),
    sha256: Schema.optional(Schema.String),
    partiallyHashed: Schema.optional(Schema.Boolean),
    fileLoadState: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
    hashedSize: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface Process {
  parentPid?: string;
  args?: ReadonlyArray<string>;
  envVariables?: ReadonlyArray<EnvironmentVariable>;
  envVariablesTruncated?: boolean;
  libraries?: ReadonlyArray<File>;
  pid?: string;
  binary?: File;
  name?: string;
  argumentsTruncated?: boolean;
  userId?: string;
  script?: File;
}

export const Process: Schema.Codec<Process> =
  /*@__PURE__*/ Schema.Struct({
    parentPid: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    envVariables: Schema.optional(Schema.Array(EnvironmentVariable)),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    libraries: Schema.optional(Schema.Array(File)),
    pid: Schema.optional(Schema.String),
    binary: Schema.optional(File),
    name: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    userId: Schema.optional(Schema.String),
    script: Schema.optional(File),
  }).annotate({ identifier: "Process" });

export interface Requests {
  longTermDenied?: number;
  shortTermAllowed?: number;
  longTermAllowed?: number;
  ratio?: number;
}

export const Requests: Schema.Codec<Requests> =
  /*@__PURE__*/ Schema.Struct({
    longTermDenied: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
    ratio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Requests" });

export interface SecurityPolicy {
  type?: string;
  name?: string;
  preview?: boolean;
}

export const SecurityPolicy: Schema.Codec<SecurityPolicy> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    preview: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SecurityPolicy" });

export interface AdaptiveProtection {
  confidence?: number;
}

export const AdaptiveProtection: Schema.Codec<AdaptiveProtection> =
  /*@__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AdaptiveProtection" });

export interface CloudArmor {
  duration?: string;
  requests?: Requests;
  attack?: Attack;
  securityPolicy?: SecurityPolicy;
  threatVector?: string;
  adaptiveProtection?: AdaptiveProtection;
}

export const CloudArmor: Schema.Codec<CloudArmor> =
  /*@__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    requests: Schema.optional(Requests),
    attack: Schema.optional(Attack),
    securityPolicy: Schema.optional(SecurityPolicy),
    threatVector: Schema.optional(Schema.String),
    adaptiveProtection: Schema.optional(AdaptiveProtection),
  }).annotate({ identifier: "CloudArmor" });

export interface DiscoveredWorkload {
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
  detectedRelevantPackages?: boolean;
  detectedRelevantKeywords?: boolean;
  detectedRelevantHardware?: boolean;
}

export const DiscoveredWorkload: Schema.Codec<DiscoveredWorkload> =
  /*@__PURE__*/ Schema.Struct({
    workloadType: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.String),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DiscoveredWorkload" });

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
  binaryFamily?: string;
  detections?: ReadonlyArray<Detection>;
}

export const MemoryHashSignature: Schema.Codec<MemoryHashSignature> =
  /*@__PURE__*/ Schema.Struct({
    binaryFamily: Schema.optional(Schema.String),
    detections: Schema.optional(Schema.Array(Detection)),
  }).annotate({ identifier: "MemoryHashSignature" });

export interface YaraRuleSignature {
  yaraRule?: string;
}

export const YaraRuleSignature: Schema.Codec<YaraRuleSignature> =
  /*@__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "YaraRuleSignature" });

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

export interface Indicator {
  domains?: ReadonlyArray<string>;
  uris?: ReadonlyArray<string>;
  ipAddresses?: ReadonlyArray<string>;
  signatures?: ReadonlyArray<ProcessSignature>;
}

export const Indicator: Schema.Codec<Indicator> =
  /*@__PURE__*/ Schema.Struct({
    domains: Schema.optional(Schema.Array(Schema.String)),
    uris: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    signatures: Schema.optional(Schema.Array(ProcessSignature)),
  }).annotate({ identifier: "Indicator" });

export interface ToxicCombination {
  attackExposureScore?: number;
  relatedFindings?: ReadonlyArray<string>;
}

export const ToxicCombination: Schema.Codec<ToxicCombination> =
  /*@__PURE__*/ Schema.Struct({
    attackExposureScore: Schema.optional(Schema.Number),
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ToxicCombination" });

export interface SecurityMarks {
  canonicalName?: string;
  name?: string;
  marks?: Record<string, string>;
}

export const SecurityMarks: Schema.Codec<SecurityMarks> =
  /*@__PURE__*/ Schema.Struct({
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "SecurityMarks" });

export interface Connection {
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
  destinationPort?: number;
  sourceIp?: string;
  destinationIp?: string;
  sourcePort?: number;
}

export const Connection: Schema.Codec<Connection> =
  /*@__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    sourceIp: Schema.optional(Schema.String),
    destinationIp: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Connection" });

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

export interface SecretFilePath {
  path?: string;
}

export const SecretFilePath: Schema.Codec<SecretFilePath> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretFilePath" });

export interface Secret {
  type?: string;
  status?: SecretStatus;
  environmentVariable?: SecretEnvironmentVariable;
  filePath?: SecretFilePath;
}

export const Secret: Schema.Codec<Secret> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    status: Schema.optional(SecretStatus),
    environmentVariable: Schema.optional(SecretEnvironmentVariable),
    filePath: Schema.optional(SecretFilePath),
  }).annotate({ identifier: "Secret" });

export interface Disk {
  name?: string;
}

export const Disk: Schema.Codec<Disk> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

export interface GoogleCloudSecuritycenterV1ExternalSystem {
  ticketInfo?: TicketInfo;
  name?: string;
  externalUid?: string;
  caseUri?: string;
  casePriority?: string;
  externalSystemUpdateTime?: string;
  caseSla?: string;
  status?: string;
  assignees?: ReadonlyArray<string>;
  caseCreateTime?: string;
  caseCloseTime?: string;
}

export const GoogleCloudSecuritycenterV1ExternalSystem: Schema.Codec<GoogleCloudSecuritycenterV1ExternalSystem> =
  /*@__PURE__*/ Schema.Struct({
    ticketInfo: Schema.optional(TicketInfo),
    name: Schema.optional(Schema.String),
    externalUid: Schema.optional(Schema.String),
    caseUri: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    caseCreateTime: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ExternalSystem" });

export interface DataFlowEvent {
  eventTime?: string;
  eventId?: string;
  principalEmail?: string;
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  violatedLocation?: string;
}

export const DataFlowEvent: Schema.Codec<DataFlowEvent> =
  /*@__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataFlowEvent" });

export interface DataRetentionDeletionEvent {
  dataObjectCount?: string;
  eventDetectionTime?: string;
  maxRetentionAllowed?: string;
  minRetentionAllowed?: string;
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
}

export const DataRetentionDeletionEvent: Schema.Codec<DataRetentionDeletionEvent> =
  /*@__PURE__*/ Schema.Struct({
    dataObjectCount: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
    minRetentionAllowed: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataRetentionDeletionEvent" });

export interface AiModel {
  publisher?: string;
  library?: string;
  usageCategory?: string;
  displayName?: string;
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  domain?: string;
  name?: string;
  location?: string;
}

export const AiModel: Schema.Codec<AiModel> =
  /*@__PURE__*/ Schema.Struct({
    publisher: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "AiModel" });

export interface AffectedResources {
  count?: string;
}

export const AffectedResources: Schema.Codec<AffectedResources> =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AffectedResources" });

export interface Compliance {
  ids?: ReadonlyArray<string>;
  standard?: string;
  version?: string;
}

export const Compliance: Schema.Codec<Compliance> =
  /*@__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
    standard: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "Compliance" });

export interface Chokepoint {
  relatedFindings?: ReadonlyArray<string>;
}

export const Chokepoint: Schema.Codec<Chokepoint> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Chokepoint" });

export interface OrgPolicy {
  name?: string;
}

export const OrgPolicy: Schema.Codec<OrgPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrgPolicy" });

export interface Geolocation {
  regionCode?: string;
}

export const Geolocation: Schema.Codec<Geolocation> =
  /*@__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Geolocation" });

export interface ServiceAccountDelegationInfo {
  principalSubject?: string;
  principalEmail?: string;
}

export const ServiceAccountDelegationInfo: Schema.Codec<ServiceAccountDelegationInfo> =
  /*@__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccountDelegationInfo" });

export interface Access {
  principalSubject?: string;
  userAgent?: string;
  callerIpGeo?: Geolocation;
  methodName?: string;
  serviceAccountDelegationInfo?: ReadonlyArray<ServiceAccountDelegationInfo>;
  serviceAccountKeyName?: string;
  callerIp?: string;
  principalEmail?: string;
  userAgentFamily?: string;
  serviceName?: string;
  userName?: string;
}

export const Access: Schema.Codec<Access> =
  /*@__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    callerIpGeo: Schema.optional(Geolocation),
    methodName: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(ServiceAccountDelegationInfo),
    ),
    serviceAccountKeyName: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    userAgentFamily: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Access" });

export interface AgentDataAccessEvent {
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  principalSubject?: string;
  eventTime?: string;
  eventId?: string;
}

export const AgentDataAccessEvent: Schema.Codec<AgentDataAccessEvent> =
  /*@__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentDataAccessEvent" });

export interface Application {
  baseUri?: string;
  fullUri?: string;
}

export const Application: Schema.Codec<Application> =
  /*@__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Application" });

export interface GroupMembership {
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
  groupId?: string;
}

export const GroupMembership: Schema.Codec<GroupMembership> =
  /*@__PURE__*/ Schema.Struct({
    groupType: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupMembership" });

export interface Package {
  cpeUri?: string;
  packageType?: string;
  packageVersion?: string;
  packageName?: string;
}

export const Package: Schema.Codec<Package> =
  /*@__PURE__*/ Schema.Struct({
    cpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface SecurityBulletin {
  bulletinId?: string;
  suggestedUpgradeVersion?: string;
  submissionTime?: string;
}

export const SecurityBulletin: Schema.Codec<SecurityBulletin> =
  /*@__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityBulletin" });

export interface Reference {
  source?: string;
  uri?: string;
}

export const Reference: Schema.Codec<Reference> =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reference" });

export interface Cwe {
  id?: string;
  references?: ReadonlyArray<Reference>;
}

export const Cwe: Schema.Codec<Cwe> = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  references: Schema.optional(Schema.Array(Reference)),
}).annotate({ identifier: "Cwe" });

export interface Cve {
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  id?: string;
  upstreamFixAvailable?: boolean;
  references?: ReadonlyArray<Reference>;
  firstExploitationDate?: string;
  cvssv3?: Cvssv3;
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  exploitReleaseDate?: string;
  zeroDay?: boolean;
  observedInTheWild?: boolean;
}

export const Cve: Schema.Codec<Cve> = /*@__PURE__*/ Schema.Struct({
  exploitationActivity: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  upstreamFixAvailable: Schema.optional(Schema.Boolean),
  references: Schema.optional(Schema.Array(Reference)),
  firstExploitationDate: Schema.optional(Schema.String),
  cvssv3: Schema.optional(Cvssv3),
  impact: Schema.optional(Schema.String),
  exploitReleaseDate: Schema.optional(Schema.String),
  zeroDay: Schema.optional(Schema.Boolean),
  observedInTheWild: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Cve" });

export interface Vulnerability {
  fixedPackage?: Package;
  reachable?: boolean;
  securityBulletin?: SecurityBulletin;
  offendingPackage?: Package;
  cwes?: ReadonlyArray<Cwe>;
  cve?: Cve;
  providerRiskScore?: string;
}

export const Vulnerability: Schema.Codec<Vulnerability> =
  /*@__PURE__*/ Schema.Struct({
    fixedPackage: Schema.optional(Package),
    reachable: Schema.optional(Schema.Boolean),
    securityBulletin: Schema.optional(SecurityBulletin),
    offendingPackage: Schema.optional(Package),
    cwes: Schema.optional(Schema.Array(Cwe)),
    cve: Schema.optional(Cve),
    providerRiskScore: Schema.optional(Schema.String),
  }).annotate({ identifier: "Vulnerability" });

export interface ExfilResource {
  name?: string;
  components?: ReadonlyArray<string>;
}

export const ExfilResource: Schema.Codec<ExfilResource> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ExfilResource" });

export interface Exfiltration {
  sources?: ReadonlyArray<ExfilResource>;
  targets?: ReadonlyArray<ExfilResource>;
  totalExfiltratedBytes?: string;
}

export const Exfiltration: Schema.Codec<Exfiltration> =
  /*@__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(ExfilResource)),
    targets: Schema.optional(Schema.Array(ExfilResource)),
    totalExfiltratedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "Exfiltration" });

export interface Database {
  name?: string;
  grantees?: ReadonlyArray<string>;
  displayName?: string;
  userName?: string;
  version?: string;
  query?: string;
}

export const Database: Schema.Codec<Database> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "Database" });

export interface CloudLoggingEntry {
  resourceContainer?: string;
  logId?: string;
  timestamp?: string;
  insertId?: string;
}

export const CloudLoggingEntry: Schema.Codec<CloudLoggingEntry> =
  /*@__PURE__*/ Schema.Struct({
    resourceContainer: Schema.optional(Schema.String),
    logId: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudLoggingEntry" });

export interface LogEntry {
  cloudLoggingEntry?: CloudLoggingEntry;
}

export const LogEntry: Schema.Codec<LogEntry> =
  /*@__PURE__*/ Schema.Struct({
    cloudLoggingEntry: Schema.optional(CloudLoggingEntry),
  }).annotate({ identifier: "LogEntry" });

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
  infoTypes?: ReadonlyArray<InfoType>;
  dataProfile?: string;
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
}

export const CloudDlpDataProfile: Schema.Codec<CloudDlpDataProfile> =
  /*@__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(Schema.Array(InfoType)),
    dataProfile: Schema.optional(Schema.String),
    parentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudDlpDataProfile" });

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
  sourceIpRanges?: ReadonlyArray<string>;
  allowed?: Allowed;
  destinationIpRanges?: ReadonlyArray<string>;
  denied?: Denied;
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  exposedServices?: ReadonlyArray<string>;
}

export const IpRules: Schema.Codec<IpRules> =
  /*@__PURE__*/ Schema.Struct({
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
    allowed: Schema.optional(Allowed),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    denied: Schema.optional(Denied),
    direction: Schema.optional(Schema.String),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IpRules" });

export interface DynamicMuteRecord {
  muteConfig?: string;
  matchTime?: string;
}

export const DynamicMuteRecord: Schema.Codec<DynamicMuteRecord> =
  /*@__PURE__*/ Schema.Struct({
    muteConfig: Schema.optional(Schema.String),
    matchTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicMuteRecord" });

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

export interface MuteInfo {
  dynamicMuteRecords?: ReadonlyArray<DynamicMuteRecord>;
  staticMute?: StaticMute;
}

export const MuteInfo: Schema.Codec<MuteInfo> =
  /*@__PURE__*/ Schema.Struct({
    dynamicMuteRecords: Schema.optional(Schema.Array(DynamicMuteRecord)),
    staticMute: Schema.optional(StaticMute),
  }).annotate({ identifier: "MuteInfo" });

export interface Node {
  name?: string;
}

export const Node: Schema.Codec<Node> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Node" });

export interface AccessReview {
  version?: string;
  ns?: string;
  subresource?: string;
  resource?: string;
  name?: string;
  group?: string;
  verb?: string;
}

export const AccessReview: Schema.Codec<AccessReview> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessReview" });

export interface Pod {
  name?: string;
  labels?: ReadonlyArray<Label>;
  containers?: ReadonlyArray<Container>;
  ns?: string;
}

export const Pod: Schema.Codec<Pod> = /*@__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Array(Label)),
  containers: Schema.optional(Schema.Array(Container)),
  ns: Schema.optional(Schema.String),
}).annotate({ identifier: "Pod" });

export interface NodePool {
  nodes?: ReadonlyArray<Node>;
  name?: string;
}

export const NodePool: Schema.Codec<NodePool> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(Node)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodePool" });

export interface GoogleCloudSecuritycenterV1Binding {
  subjects?: ReadonlyArray<Subject>;
  name?: string;
  ns?: string;
  role?: Role;
}

export const GoogleCloudSecuritycenterV1Binding: Schema.Codec<GoogleCloudSecuritycenterV1Binding> =
  /*@__PURE__*/ Schema.Struct({
    subjects: Schema.optional(Schema.Array(Subject)),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    role: Schema.optional(Role),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Binding" });

export interface Kubernetes {
  nodes?: ReadonlyArray<Node>;
  accessReviews?: ReadonlyArray<AccessReview>;
  objects?: ReadonlyArray<Securitycenter_Object>;
  pods?: ReadonlyArray<Pod>;
  nodePools?: ReadonlyArray<NodePool>;
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV1Binding>;
  roles?: ReadonlyArray<Role>;
}

export const Kubernetes: Schema.Codec<Kubernetes> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(Node)),
    accessReviews: Schema.optional(Schema.Array(AccessReview)),
    objects: Schema.optional(Schema.Array(Securitycenter_Object)),
    pods: Schema.optional(Schema.Array(Pod)),
    nodePools: Schema.optional(Schema.Array(NodePool)),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV1Binding)),
    roles: Schema.optional(Schema.Array(Role)),
  }).annotate({ identifier: "Kubernetes" });

export interface LoadBalancer {
  name?: string;
}

export const LoadBalancer: Schema.Codec<LoadBalancer> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoadBalancer" });

export interface Network {
  name?: string;
}

export const Network: Schema.Codec<Network> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Network" });

export interface Finding {
  backupDisasterRecovery?: BackupDisasterRecovery;
  notebook?: Notebook;
  cloudDlpInspection?: CloudDlpInspection;
  createTime?: string;
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  contacts?: Record<string, ContactDetails>;
  artifactGuardPolicies?: ArtifactGuardPolicies;
  job?: Job;
  securityPosture?: SecurityPosture;
  vertexAi?: VertexAi;
  processes?: ReadonlyArray<Process>;
  cloudArmor?: CloudArmor;
  externalExposure?: ExternalExposure;
  discoveredWorkload?: DiscoveredWorkload;
  iamBindings?: ReadonlyArray<IamBinding>;
  indicator?: Indicator;
  toxicCombination?: ToxicCombination;
  securityMarks?: SecurityMarks;
  externalUri?: string;
  policyViolationSummary?: PolicyViolationSummary;
  connections?: ReadonlyArray<Connection>;
  secret?: Secret;
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
  disk?: Disk;
  externalSystems?: Record<string, GoogleCloudSecuritycenterV1ExternalSystem>;
  dataFlowEvents?: ReadonlyArray<DataFlowEvent>;
  muteUpdateTime?: string;
  attackExposure?: AttackExposure;
  kernelRootkit?: KernelRootkit;
  moduleName?: string;
  eventTime?: string;
  dataRetentionDeletionEvents?: ReadonlyArray<DataRetentionDeletionEvent>;
  aiModel?: AiModel;
  affectedResources?: AffectedResources;
  compliances?: ReadonlyArray<Compliance>;
  chokepoint?: Chokepoint;
  resourceName?: string;
  canonicalName?: string;
  containers?: ReadonlyArray<Container>;
  complianceDetails?: ComplianceDetails;
  orgPolicies?: ReadonlyArray<OrgPolicy>;
  access?: Access;
  agentDataAccessEvents?: ReadonlyArray<AgentDataAccessEvent>;
  dataAccessEvents?: ReadonlyArray<DataAccessEvent>;
  category?: string;
  application?: Application;
  name?: string;
  muteInitiator?: string;
  parentDisplayName?: string;
  groupMemberships?: ReadonlyArray<GroupMembership>;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  vulnerability?: Vulnerability;
  sourceProperties?: Record<string, unknown>;
  exfiltration?: Exfiltration;
  database?: Database;
  logEntries?: ReadonlyArray<LogEntry>;
  description?: string;
  cloudDlpDataProfile?: CloudDlpDataProfile;
  iamDetails?: GoogleCloudSecuritycenterV1IamDetails;
  mitreAttack?: MitreAttack;
  ipRules?: IpRules;
  files?: ReadonlyArray<File>;
  muteInfo?: MuteInfo;
  nextSteps?: string;
  kubernetes?: Kubernetes;
  loadBalancers?: ReadonlyArray<LoadBalancer>;
  networks?: ReadonlyArray<Network>;
  parent?: string;
}

export const Finding: Schema.Codec<Finding> =
  /*@__PURE__*/ Schema.Struct({
    backupDisasterRecovery: Schema.optional(BackupDisasterRecovery),
    notebook: Schema.optional(Notebook),
    cloudDlpInspection: Schema.optional(CloudDlpInspection),
    createTime: Schema.optional(Schema.String),
    mute: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    contacts: Schema.optional(Schema.Record(Schema.String, ContactDetails)),
    artifactGuardPolicies: Schema.optional(ArtifactGuardPolicies),
    job: Schema.optional(Job),
    securityPosture: Schema.optional(SecurityPosture),
    vertexAi: Schema.optional(VertexAi),
    processes: Schema.optional(Schema.Array(Process)),
    cloudArmor: Schema.optional(CloudArmor),
    externalExposure: Schema.optional(ExternalExposure),
    discoveredWorkload: Schema.optional(DiscoveredWorkload),
    iamBindings: Schema.optional(Schema.Array(IamBinding)),
    indicator: Schema.optional(Indicator),
    toxicCombination: Schema.optional(ToxicCombination),
    securityMarks: Schema.optional(SecurityMarks),
    externalUri: Schema.optional(Schema.String),
    policyViolationSummary: Schema.optional(PolicyViolationSummary),
    connections: Schema.optional(Schema.Array(Connection)),
    secret: Schema.optional(Secret),
    findingClass: Schema.optional(Schema.String),
    disk: Schema.optional(Disk),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV1ExternalSystem),
    ),
    dataFlowEvents: Schema.optional(Schema.Array(DataFlowEvent)),
    muteUpdateTime: Schema.optional(Schema.String),
    attackExposure: Schema.optional(AttackExposure),
    kernelRootkit: Schema.optional(KernelRootkit),
    moduleName: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(DataRetentionDeletionEvent),
    ),
    aiModel: Schema.optional(AiModel),
    affectedResources: Schema.optional(AffectedResources),
    compliances: Schema.optional(Schema.Array(Compliance)),
    chokepoint: Schema.optional(Chokepoint),
    resourceName: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(Container)),
    complianceDetails: Schema.optional(ComplianceDetails),
    orgPolicies: Schema.optional(Schema.Array(OrgPolicy)),
    access: Schema.optional(Access),
    agentDataAccessEvents: Schema.optional(Schema.Array(AgentDataAccessEvent)),
    dataAccessEvents: Schema.optional(Schema.Array(DataAccessEvent)),
    category: Schema.optional(Schema.String),
    application: Schema.optional(Application),
    name: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    groupMemberships: Schema.optional(Schema.Array(GroupMembership)),
    state: Schema.optional(Schema.String),
    vulnerability: Schema.optional(Vulnerability),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    exfiltration: Schema.optional(Exfiltration),
    database: Schema.optional(Database),
    logEntries: Schema.optional(Schema.Array(LogEntry)),
    description: Schema.optional(Schema.String),
    cloudDlpDataProfile: Schema.optional(CloudDlpDataProfile),
    iamDetails: Schema.optional(GoogleCloudSecuritycenterV1IamDetails),
    mitreAttack: Schema.optional(MitreAttack),
    ipRules: Schema.optional(IpRules),
    files: Schema.optional(Schema.Array(File)),
    muteInfo: Schema.optional(MuteInfo),
    nextSteps: Schema.optional(Schema.String),
    kubernetes: Schema.optional(Kubernetes),
    loadBalancers: Schema.optional(Schema.Array(LoadBalancer)),
    networks: Schema.optional(Schema.Array(Network)),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "Finding" });

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

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributes {
  criticality?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality;
  environment?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment;
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV1ResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality,
    ),
    environment: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment,
    ),
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
    ),
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
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

export interface AwsOrganization {
  id?: string;
}

export const AwsOrganization: Schema.Codec<AwsOrganization> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganization" });

export interface AwsOrganizationalUnit {
  id?: string;
  name?: string;
}

export const AwsOrganizationalUnit: Schema.Codec<AwsOrganizationalUnit> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganizationalUnit" });

export interface AwsAccount {
  id?: string;
  name?: string;
}

export const AwsAccount: Schema.Codec<AwsAccount> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsAccount" });

export interface AwsMetadata {
  organization?: AwsOrganization;
  organizationalUnits?: ReadonlyArray<AwsOrganizationalUnit>;
  account?: AwsAccount;
}

export const AwsMetadata: Schema.Codec<AwsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.optional(AwsOrganization),
    organizationalUnits: Schema.optional(Schema.Array(AwsOrganizationalUnit)),
    account: Schema.optional(AwsAccount),
  }).annotate({ identifier: "AwsMetadata" });

export interface AdcApplicationTemplateRevision {
  name?: string;
}

export const AdcApplicationTemplateRevision: Schema.Codec<AdcApplicationTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcApplicationTemplateRevision" });

export interface Folder {
  resourceFolder?: string;
  resourceFolderDisplayName?: string;
}

export const Folder: Schema.Codec<Folder> =
  /*@__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

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

export interface AzureMetadata {
  subscription?: AzureSubscription;
  managementGroups?: ReadonlyArray<AzureManagementGroup>;
  resourceGroup?: AzureResourceGroup;
  tenant?: AzureTenant;
}

export const AzureMetadata: Schema.Codec<AzureMetadata> =
  /*@__PURE__*/ Schema.Struct({
    subscription: Schema.optional(AzureSubscription),
    managementGroups: Schema.optional(Schema.Array(AzureManagementGroup)),
    resourceGroup: Schema.optional(AzureResourceGroup),
    tenant: Schema.optional(AzureTenant),
  }).annotate({ identifier: "AzureMetadata" });

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

export interface AdcSharedTemplateRevision {
  name?: string;
}

export const AdcSharedTemplateRevision: Schema.Codec<AdcSharedTemplateRevision> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcSharedTemplateRevision" });

export interface ResourcePathNode {
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

export const ResourcePathNode: Schema.Codec<ResourcePathNode> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    nodeType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourcePathNode" });

export interface ResourcePath {
  nodes?: ReadonlyArray<ResourcePathNode>;
}

export const ResourcePath: Schema.Codec<ResourcePath> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(ResourcePathNode)),
  }).annotate({ identifier: "ResourcePath" });

export interface GoogleCloudSecuritycenterV1Resource {
  projectDisplayName?: string;
  service?: string;
  application?: GoogleCloudSecuritycenterV1ResourceApplication;
  parent?: string;
  name?: string;
  parentDisplayName?: string;
  awsMetadata?: AwsMetadata;
  displayName?: string;
  adcApplicationTemplate?: AdcApplicationTemplateRevision;
  folders?: ReadonlyArray<Folder>;
  azureMetadata?: AzureMetadata;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  organization?: string;
  adcApplication?: AdcApplication;
  adcSharedTemplate?: AdcSharedTemplateRevision;
  project?: string;
  type?: string;
  resourcePathString?: string;
  location?: string;
  resourcePath?: ResourcePath;
}

export const GoogleCloudSecuritycenterV1Resource: Schema.Codec<GoogleCloudSecuritycenterV1Resource> =
  /*@__PURE__*/ Schema.Struct({
    projectDisplayName: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    application: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplication,
    ),
    parent: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(AwsMetadata),
    displayName: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(AdcApplicationTemplateRevision),
    folders: Schema.optional(Schema.Array(Folder)),
    azureMetadata: Schema.optional(AzureMetadata),
    cloudProvider: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    adcApplication: Schema.optional(AdcApplication),
    adcSharedTemplate: Schema.optional(AdcSharedTemplateRevision),
    project: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    resourcePathString: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    resourcePath: Schema.optional(ResourcePath),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Resource" });

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

export interface GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin {
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin: Schema.Codec<GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin",
  });

export interface GoogleCloudSecuritycenterV2AwsOrganization {
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganization: Schema.Codec<GoogleCloudSecuritycenterV2AwsOrganization> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsOrganization" });

export interface GoogleCloudSecuritycenterV2MuteConfig {
  description?: string;
  expiryTime?: string;
  mostRecentEditor?: string;
  cryptoKeyName?: string;
  filter?: string;
  createTime?: string;
  updateTime?: string;
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  name?: string;
}

export const GoogleCloudSecuritycenterV2MuteConfig: Schema.Codec<GoogleCloudSecuritycenterV2MuteConfig> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteConfig" });

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

export interface WebSecurityScannerSettings {
  name?: string;
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  modules?: Record<string, Config>;
  updateTime?: string;
}

export const WebSecurityScannerSettings: Schema.Codec<WebSecurityScannerSettings> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebSecurityScannerSettings" });

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

export interface GoogleCloudSecuritycenterV2AzureResourceGroup {
  id?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV2AzureResourceGroup: Schema.Codec<GoogleCloudSecuritycenterV2AzureResourceGroup> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureResourceGroup" });

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

export interface GoogleCloudSecuritycenterV2AzureMetadata {
  managementGroups?: ReadonlyArray<GoogleCloudSecuritycenterV2AzureManagementGroup>;
  resourceGroup?: GoogleCloudSecuritycenterV2AzureResourceGroup;
  subscription?: GoogleCloudSecuritycenterV2AzureSubscription;
  tenant?: GoogleCloudSecuritycenterV2AzureTenant;
}

export const GoogleCloudSecuritycenterV2AzureMetadata: Schema.Codec<GoogleCloudSecuritycenterV2AzureMetadata> =
  /*@__PURE__*/ Schema.Struct({
    managementGroups: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AzureManagementGroup),
    ),
    resourceGroup: Schema.optional(
      GoogleCloudSecuritycenterV2AzureResourceGroup,
    ),
    subscription: Schema.optional(GoogleCloudSecuritycenterV2AzureSubscription),
    tenant: Schema.optional(GoogleCloudSecuritycenterV2AzureTenant),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureMetadata" });

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
  criticality?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality;
  environment?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment;
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV2ResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
    operatorOwners: Schema.optional(
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
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
    developerOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ResourceApplicationAttributes",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplication {
  name?: string;
  attributes?: GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2ResourceApplication: Schema.Codec<GoogleCloudSecuritycenterV2ResourceApplication> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceApplication" });

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
  organization?: string;
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV2Folder>;
  parent?: string;
  parentDisplayName?: string;
  project?: string;
}

export const GcpMetadata: Schema.Codec<GcpMetadata> =
  /*@__PURE__*/ Schema.Struct({
    projectDisplayName: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Folder)),
    parent: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcpMetadata" });

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

export interface GoogleCloudSecuritycenterV2AwsMetadata {
  organization?: GoogleCloudSecuritycenterV2AwsOrganization;
  organizationalUnits?: ReadonlyArray<GoogleCloudSecuritycenterV2AwsOrganizationalUnit>;
  account?: GoogleCloudSecuritycenterV2AwsAccount;
}

export const GoogleCloudSecuritycenterV2AwsMetadata: Schema.Codec<GoogleCloudSecuritycenterV2AwsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.optional(GoogleCloudSecuritycenterV2AwsOrganization),
    organizationalUnits: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AwsOrganizationalUnit),
    ),
    account: Schema.optional(GoogleCloudSecuritycenterV2AwsAccount),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsMetadata" });

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

export interface GoogleCloudSecuritycenterV2ResourcePath {
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourcePathNode>;
}

export const GoogleCloudSecuritycenterV2ResourcePath: Schema.Codec<GoogleCloudSecuritycenterV2ResourcePath> =
  /*@__PURE__*/ Schema.Struct({
    nodes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ResourcePathNode),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePath" });

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

export interface GoogleCloudSecuritycenterV2Resource {
  displayName?: string;
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision;
  azureMetadata?: GoogleCloudSecuritycenterV2AzureMetadata;
  application?: GoogleCloudSecuritycenterV2ResourceApplication;
  service?: string;
  gcpMetadata?: GcpMetadata;
  name?: string;
  awsMetadata?: GoogleCloudSecuritycenterV2AwsMetadata;
  resourcePathString?: string;
  location?: string;
  resourcePath?: GoogleCloudSecuritycenterV2ResourcePath;
  adcApplication?: GoogleCloudSecuritycenterV2AdcApplication;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  type?: string;
  adcSharedTemplate?: GoogleCloudSecuritycenterV2AdcSharedTemplateRevision;
}

export const GoogleCloudSecuritycenterV2Resource: Schema.Codec<GoogleCloudSecuritycenterV2Resource> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision,
    ),
    azureMetadata: Schema.optional(GoogleCloudSecuritycenterV2AzureMetadata),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplication,
    ),
    service: Schema.optional(Schema.String),
    gcpMetadata: Schema.optional(GcpMetadata),
    name: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(GoogleCloudSecuritycenterV2AwsMetadata),
    resourcePathString: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    resourcePath: Schema.optional(GoogleCloudSecuritycenterV2ResourcePath),
    adcApplication: Schema.optional(GoogleCloudSecuritycenterV2AdcApplication),
    cloudProvider: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcSharedTemplateRevision,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Resource" });

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

export interface Expr {
  expression?: string;
  location?: string;
  title?: string;
  description?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleCloudSecuritycenterV1Property {
  name?: string;
  valueExpression?: Expr;
}

export const GoogleCloudSecuritycenterV1Property: Schema.Codec<GoogleCloudSecuritycenterV1Property> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    valueExpression: Schema.optional(Expr),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Property" });

export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
  canonicalName?: string;
  name?: string;
  marks?: Record<string, string>;
}

export const GoogleCloudSecuritycenterV1p1beta1SecurityMarks: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1SecurityMarks> =
  /*@__PURE__*/ Schema.Struct({
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1SecurityMarks",
  });

export interface GoogleCloudSecuritycenterV1p1beta1Finding {
  securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
  eventTime?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  sourceProperties?: Record<string, unknown>;
  externalUri?: string;
  category?: string;
  createTime?: string;
  canonicalName?: string;
  resourceName?: string;
  name?: string;
  parent?: string;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1p1beta1Finding: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1Finding> =
  /*@__PURE__*/ Schema.Struct({
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1p1beta1SecurityMarks,
    ),
    eventTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    externalUri: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Finding" });

export interface GoogleCloudSecuritycenterV1ResourceSelector {
  resourceTypes?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV1ResourceSelector: Schema.Codec<GoogleCloudSecuritycenterV1ResourceSelector> =
  /*@__PURE__*/ Schema.Struct({
    resourceTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceSelector" });

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

export interface GoogleCloudSecuritycenterV2IssueFinding {
  securityBulletin?: GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin;
  name?: string;
  cve?: GoogleCloudSecuritycenterV2IssueFindingCve;
}

export const GoogleCloudSecuritycenterV2IssueFinding: Schema.Codec<GoogleCloudSecuritycenterV2IssueFinding> =
  /*@__PURE__*/ Schema.Struct({
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin,
    ),
    name: Schema.optional(Schema.String),
    cve: Schema.optional(GoogleCloudSecuritycenterV2IssueFindingCve),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFinding" });

export interface GoogleCloudSecuritycenterV1BigQueryExport {
  name?: string;
  dataset?: string;
  principal?: string;
  updateTime?: string;
  mostRecentEditor?: string;
  filter?: string;
  description?: string;
  createTime?: string;
}

export const GoogleCloudSecuritycenterV1BigQueryExport: Schema.Codec<GoogleCloudSecuritycenterV1BigQueryExport> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1BigQueryExport" });

export interface GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata {
  projectId?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata> =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata",
  });

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

export interface Details {
  endTime?: string;
  type?:
    | "TYPE_UNSPECIFIED"
    | "STANDARD"
    | "TRIAL"
    | "ALPHA"
    | "DEMO"
    | "PAY_AS_YOU_GO"
    | "SUBSCRIPTION"
    | "SUB_FIXED"
    | "SUB_BASE_OVERAGE"
    | (string & {});
  startTime?: string;
}

export const Details: Schema.Codec<Details> =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Details" });

export interface Subscription {
  details?: Details;
  tier?:
    | "TIER_UNSPECIFIED"
    | "STANDARD"
    | "PREMIUM"
    | "ENTERPRISE"
    | "ENTERPRISE_MC"
    | (string & {});
  name?: string;
}

export const Subscription: Schema.Codec<Subscription> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(Details),
    tier: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subscription" });

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

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes {
  criticality?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality;
  environment?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment;
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes: Schema.Codec<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes> =
  /*@__PURE__*/ Schema.Struct({
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality,
    ),
    environment: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment,
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
    developerOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes",
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

export interface GoogleCloudSecuritycenterV2IssueResource {
  displayName?: string;
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision;
  googleCloudMetadata?: GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata;
  azureMetadata?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadata;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  application?: GoogleCloudSecuritycenterV2IssueResourceApplication;
  adcApplication?: GoogleCloudSecuritycenterV2IssueResourceAdcApplication;
  name?: string;
  awsMetadata?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadata;
  adcSharedTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision;
  type?: string;
}

export const GoogleCloudSecuritycenterV2IssueResource: Schema.Codec<GoogleCloudSecuritycenterV2IssueResource> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision,
    ),
    googleCloudMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata,
    ),
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
    name: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadata,
    ),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision,
    ),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueResource" });

export interface ExportFindingsResponse {}

export const ExportFindingsResponse: Schema.Codec<ExportFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExportFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV1CustomOutputSpec {
  properties?: ReadonlyArray<GoogleCloudSecuritycenterV1Property>;
}

export const GoogleCloudSecuritycenterV1CustomOutputSpec: Schema.Codec<GoogleCloudSecuritycenterV1CustomOutputSpec> =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1Property),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomOutputSpec" });

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
  projectDisplayName?: string;
  project?: string;
  parent?: string;
  name?: string;
  parentDisplayName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Resource: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1Resource> =
  /*@__PURE__*/ Schema.Struct({
    folders: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1p1beta1Folder),
    ),
    projectDisplayName: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Resource" });

export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
  finding?: GoogleCloudSecuritycenterV1p1beta1Finding;
  resource?: GoogleCloudSecuritycenterV1p1beta1Resource;
  notificationConfigName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1NotificationMessage: Schema.Codec<GoogleCloudSecuritycenterV1p1beta1NotificationMessage> =
  /*@__PURE__*/ Schema.Struct({
    finding: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Finding),
    resource: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Resource),
    notificationConfigName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1NotificationMessage",
  });

export interface GoogleCloudSecuritycenterV1MuteConfig {
  updateTime?: string;
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  name?: string;
  createTime?: string;
  filter?: string;
  mostRecentEditor?: string;
  description?: string;
  expiryTime?: string;
  displayName?: string;
}

export const GoogleCloudSecuritycenterV1MuteConfig: Schema.Codec<GoogleCloudSecuritycenterV1MuteConfig> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1MuteConfig" });

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
  name?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  findingCount?: VulnerabilityCountBySeverity;
  snapshotTime?: string;
}

export const VulnerabilitySnapshot: Schema.Codec<VulnerabilitySnapshot> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    findingCount: Schema.optional(VulnerabilityCountBySeverity),
    snapshotTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilitySnapshot" });

export interface ContainerThreatDetectionSettings {
  name?: string;
  serviceAccount?: string;
  updateTime?: string;
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  modules?: Record<string, Config>;
}

export const ContainerThreatDetectionSettings: Schema.Codec<ContainerThreatDetectionSettings> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
  }).annotate({ identifier: "ContainerThreatDetectionSettings" });

export interface GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV1BulkMuteFindingsResponse: Schema.Codec<GoogleCloudSecuritycenterV1BulkMuteFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV1BulkMuteFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV2NotificationMessage {
  finding?: GoogleCloudSecuritycenterV2Finding;
  resource?: GoogleCloudSecuritycenterV2Resource;
  notificationConfigName?: string;
}

export const GoogleCloudSecuritycenterV2NotificationMessage: Schema.Codec<GoogleCloudSecuritycenterV2NotificationMessage> =
  /*@__PURE__*/ Schema.Struct({
    finding: Schema.optional(GoogleCloudSecuritycenterV2Finding),
    resource: Schema.optional(GoogleCloudSecuritycenterV2Resource),
    notificationConfigName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NotificationMessage" });

export interface SecurityHealthAnalyticsSettings {
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  modules?: Record<string, Config>;
  serviceAccount?: string;
  name?: string;
  updateTime?: string;
}

export const SecurityHealthAnalyticsSettings: Schema.Codec<SecurityHealthAnalyticsSettings> =
  /*@__PURE__*/ Schema.Struct({
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
    serviceAccount: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityHealthAnalyticsSettings" });

export interface GoogleCloudSecuritycenterV1CustomConfig {
  description?: string;
  predicate?: Expr;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  customOutput?: GoogleCloudSecuritycenterV1CustomOutputSpec;
  resourceSelector?: GoogleCloudSecuritycenterV1ResourceSelector;
  recommendation?: string;
}

export const GoogleCloudSecuritycenterV1CustomConfig: Schema.Codec<GoogleCloudSecuritycenterV1CustomConfig> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    predicate: Schema.optional(Expr),
    severity: Schema.optional(Schema.String),
    customOutput: Schema.optional(GoogleCloudSecuritycenterV1CustomOutputSpec),
    resourceSelector: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceSelector,
    ),
    recommendation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomConfig" });

export interface GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
  displayName?: string;
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
  name?: string;
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
}

export const GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule: Schema.Codec<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule",
  });

export interface GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  duration?: string;
}

export const GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse: Schema.Codec<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse",
  });

export interface GoogleCloudSecuritycenterV2BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV2BulkMuteFindingsResponse: Schema.Codec<GoogleCloudSecuritycenterV2BulkMuteFindingsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV2BulkMuteFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV2IssueMute {
  muteState?: "MUTE_STATE_UNSPECIFIED" | "NOT_MUTED" | "MUTED" | (string & {});
  muteReason?: string;
  muteUpdateTime?: string;
  muteInitiator?: string;
}

export const GoogleCloudSecuritycenterV2IssueMute: Schema.Codec<GoogleCloudSecuritycenterV2IssueMute> =
  /*@__PURE__*/ Schema.Struct({
    muteState: Schema.optional(Schema.String),
    muteReason: Schema.optional(Schema.String),
    muteUpdateTime: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueMute" });

export interface GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  duration?: string;
}

export const GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse: Schema.Codec<GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse",
  });

export interface VirtualMachineThreatDetectionSettings {
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  modules?: Record<string, Config>;
  updateTime?: string;
  serviceAccount?: string;
  name?: string;
}

export const VirtualMachineThreatDetectionSettings: Schema.Codec<VirtualMachineThreatDetectionSettings> =
  /*@__PURE__*/ Schema.Struct({
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
    updateTime: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualMachineThreatDetectionSettings" });

export interface SecurityCenterSettings {
  logSinkProject?: string;
  name?: string;
  onboardingTime?: string;
  orgServiceAccount?: string;
  cryptoKeyName?: string;
}

export const SecurityCenterSettings: Schema.Codec<SecurityCenterSettings> =
  /*@__PURE__*/ Schema.Struct({
    logSinkProject: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    onboardingTime: Schema.optional(Schema.String),
    orgServiceAccount: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityCenterSettings" });

export interface GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "INHERITED"
    | (string & {});
  displayName?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  ancestorModule?: string;
  updateTime?: string;
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  lastEditor?: string;
  name?: string;
}

export const GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule: Schema.Codec<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ Schema.Struct({
    enablementState: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    ancestorModule: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    lastEditor: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule",
  });

export interface EventThreatDetectionSettings {
  name?: string;
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  modules?: Record<string, Config>;
  updateTime?: string;
}

export const EventThreatDetectionSettings: Schema.Codec<EventThreatDetectionSettings> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventThreatDetectionSettings" });

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

export interface GoogleCloudSecuritycenterV2BigQueryExport {
  description?: string;
  dataset?: string;
  mostRecentEditor?: string;
  cryptoKeyName?: string;
  createTime?: string;
  filter?: string;
  principal?: string;
  name?: string;
  updateTime?: string;
}

export const GoogleCloudSecuritycenterV2BigQueryExport: Schema.Codec<GoogleCloudSecuritycenterV2BigQueryExport> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2BigQueryExport" });

export interface RapidVulnerabilityDetectionSettings {
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  modules?: Record<string, Config>;
  updateTime?: string;
  name?: string;
}

export const RapidVulnerabilityDetectionSettings: Schema.Codec<RapidVulnerabilityDetectionSettings> =
  /*@__PURE__*/ Schema.Struct({
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "RapidVulnerabilityDetectionSettings" });

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

export interface GoogleCloudSecuritycenterV2ResourceValueConfig {
  name?: string;
  updateTime?: string;
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  scope?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  createTime?: string;
  tagValues?: ReadonlyArray<string>;
  resourceLabelsSelector?: Record<string, string>;
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping;
  description?: string;
  resourceType?: string;
}

export const GoogleCloudSecuritycenterV2ResourceValueConfig: Schema.Codec<GoogleCloudSecuritycenterV2ResourceValueConfig> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    resourceValue: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping,
    ),
    description: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceValueConfig" });

export interface GoogleCloudSecuritycenterV1ResourceValueConfig {
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping;
  resourceLabelsSelector?: Record<string, string>;
  resourceType?: string;
  description?: string;
  updateTime?: string;
  name?: string;
  tagValues?: ReadonlyArray<string>;
  createTime?: string;
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  scope?: string;
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1ResourceValueConfig: Schema.Codec<GoogleCloudSecuritycenterV1ResourceValueConfig> =
  /*@__PURE__*/ Schema.Struct({
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping,
    ),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    resourceType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    resourceValue: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceValueConfig" });

export interface GoogleCloudSecuritycenterV2Issue {
  relatedFindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueFinding>;
  remediations?: ReadonlyArray<string>;
  exposureScore?: number;
  updateTime?: string;
  name?: string;
  primaryResource?: GoogleCloudSecuritycenterV2IssueResource;
  description?: string;
  secondaryResources?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResource>;
  lastObservationTime?: string;
  mute?: GoogleCloudSecuritycenterV2IssueMute;
  createTime?: string;
  securityContexts?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueSecurityContext>;
  domains?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueDomain>;
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  issueType?:
    | "ISSUE_TYPE_UNSPECIFIED"
    | "CHOKEPOINT"
    | "TOXIC_COMBINATION"
    | "INSIGHT"
    | (string & {});
  detection?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
}

export const GoogleCloudSecuritycenterV2Issue: Schema.Codec<GoogleCloudSecuritycenterV2Issue> =
  /*@__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueFinding),
    ),
    remediations: Schema.optional(Schema.Array(Schema.String)),
    exposureScore: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    primaryResource: Schema.optional(GoogleCloudSecuritycenterV2IssueResource),
    description: Schema.optional(Schema.String),
    secondaryResources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueResource),
    ),
    lastObservationTime: Schema.optional(Schema.String),
    mute: Schema.optional(GoogleCloudSecuritycenterV2IssueMute),
    createTime: Schema.optional(Schema.String),
    securityContexts: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueSecurityContext),
    ),
    domains: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueDomain),
    ),
    severity: Schema.optional(Schema.String),
    issueType: Schema.optional(Schema.String),
    detection: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Issue" });

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

export interface GetVirtualMachineThreatDetectionSettingsFoldersRequest {
  name: string;
}

export const GetVirtualMachineThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetVirtualMachineThreatDetectionSettingsFoldersRequest>;

export type GetVirtualMachineThreatDetectionSettingsFoldersResponse =
  VirtualMachineThreatDetectionSettings;
export const GetVirtualMachineThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type GetVirtualMachineThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getVirtualMachineThreatDetectionSettingsFolders: API.OperationMethod<
  GetVirtualMachineThreatDetectionSettingsFoldersRequest,
  GetVirtualMachineThreatDetectionSettingsFoldersResponse,
  GetVirtualMachineThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetVirtualMachineThreatDetectionSettingsFoldersRequest,
  output: GetVirtualMachineThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSecurityHealthAnalyticsSettingsFoldersRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: SecurityHealthAnalyticsSettings;
}

export const UpdateSecurityHealthAnalyticsSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityHealthAnalyticsSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityHealthAnalyticsSettingsFoldersRequest>;

export type UpdateSecurityHealthAnalyticsSettingsFoldersResponse =
  SecurityHealthAnalyticsSettings;
export const UpdateSecurityHealthAnalyticsSettingsFoldersResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type UpdateSecurityHealthAnalyticsSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityHealthAnalyticsSettingsFolders: API.OperationMethod<
  UpdateSecurityHealthAnalyticsSettingsFoldersRequest,
  UpdateSecurityHealthAnalyticsSettingsFoldersResponse,
  UpdateSecurityHealthAnalyticsSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityHealthAnalyticsSettingsFoldersRequest,
  output: UpdateSecurityHealthAnalyticsSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateRapidVulnerabilityDetectionSettingsFoldersRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: RapidVulnerabilityDetectionSettings;
}

export const UpdateRapidVulnerabilityDetectionSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RapidVulnerabilityDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateRapidVulnerabilityDetectionSettingsFoldersRequest>;

export type UpdateRapidVulnerabilityDetectionSettingsFoldersResponse =
  RapidVulnerabilityDetectionSettings;
export const UpdateRapidVulnerabilityDetectionSettingsFoldersResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type UpdateRapidVulnerabilityDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateRapidVulnerabilityDetectionSettingsFolders: API.OperationMethod<
  UpdateRapidVulnerabilityDetectionSettingsFoldersRequest,
  UpdateRapidVulnerabilityDetectionSettingsFoldersResponse,
  UpdateRapidVulnerabilityDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRapidVulnerabilityDetectionSettingsFoldersRequest,
  output: UpdateRapidVulnerabilityDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetContainerThreatDetectionSettingsFoldersRequest {
  name: string;
}

export const GetContainerThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetContainerThreatDetectionSettingsFoldersRequest>;

export type GetContainerThreatDetectionSettingsFoldersResponse =
  ContainerThreatDetectionSettings;
export const GetContainerThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type GetContainerThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getContainerThreatDetectionSettingsFolders: API.OperationMethod<
  GetContainerThreatDetectionSettingsFoldersRequest,
  GetContainerThreatDetectionSettingsFoldersResponse,
  GetContainerThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContainerThreatDetectionSettingsFoldersRequest,
  output: GetContainerThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateVirtualMachineThreatDetectionSettingsFoldersRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: VirtualMachineThreatDetectionSettings;
}

export const UpdateVirtualMachineThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VirtualMachineThreatDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateVirtualMachineThreatDetectionSettingsFoldersRequest>;

export type UpdateVirtualMachineThreatDetectionSettingsFoldersResponse =
  VirtualMachineThreatDetectionSettings;
export const UpdateVirtualMachineThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type UpdateVirtualMachineThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateVirtualMachineThreatDetectionSettingsFolders: API.OperationMethod<
  UpdateVirtualMachineThreatDetectionSettingsFoldersRequest,
  UpdateVirtualMachineThreatDetectionSettingsFoldersResponse,
  UpdateVirtualMachineThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVirtualMachineThreatDetectionSettingsFoldersRequest,
  output: UpdateVirtualMachineThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateEventThreatDetectionSettingsFoldersRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionSettings;
}

export const UpdateEventThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateEventThreatDetectionSettingsFoldersRequest>;

export type UpdateEventThreatDetectionSettingsFoldersResponse =
  EventThreatDetectionSettings;
export const UpdateEventThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type UpdateEventThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateEventThreatDetectionSettingsFolders: API.OperationMethod<
  UpdateEventThreatDetectionSettingsFoldersRequest,
  UpdateEventThreatDetectionSettingsFoldersResponse,
  UpdateEventThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEventThreatDetectionSettingsFoldersRequest,
  output: UpdateEventThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecurityHealthAnalyticsSettingsFoldersRequest {
  name: string;
}

export const GetSecurityHealthAnalyticsSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSecurityHealthAnalyticsSettingsFoldersRequest>;

export type GetSecurityHealthAnalyticsSettingsFoldersResponse =
  SecurityHealthAnalyticsSettings;
export const GetSecurityHealthAnalyticsSettingsFoldersResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type GetSecurityHealthAnalyticsSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getSecurityHealthAnalyticsSettingsFolders: API.OperationMethod<
  GetSecurityHealthAnalyticsSettingsFoldersRequest,
  GetSecurityHealthAnalyticsSettingsFoldersResponse,
  GetSecurityHealthAnalyticsSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSecurityHealthAnalyticsSettingsFoldersRequest,
  output: GetSecurityHealthAnalyticsSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateContainerThreatDetectionSettingsFoldersRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: ContainerThreatDetectionSettings;
}

export const UpdateContainerThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContainerThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateContainerThreatDetectionSettingsFoldersRequest>;

export type UpdateContainerThreatDetectionSettingsFoldersResponse =
  ContainerThreatDetectionSettings;
export const UpdateContainerThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type UpdateContainerThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateContainerThreatDetectionSettingsFolders: API.OperationMethod<
  UpdateContainerThreatDetectionSettingsFoldersRequest,
  UpdateContainerThreatDetectionSettingsFoldersResponse,
  UpdateContainerThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateContainerThreatDetectionSettingsFoldersRequest,
  output: UpdateContainerThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateWebSecurityScannerSettingsFoldersRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: WebSecurityScannerSettings;
}

export const UpdateWebSecurityScannerSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WebSecurityScannerSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateWebSecurityScannerSettingsFoldersRequest>;

export type UpdateWebSecurityScannerSettingsFoldersResponse =
  WebSecurityScannerSettings;
export const UpdateWebSecurityScannerSettingsFoldersResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type UpdateWebSecurityScannerSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateWebSecurityScannerSettingsFolders: API.OperationMethod<
  UpdateWebSecurityScannerSettingsFoldersRequest,
  UpdateWebSecurityScannerSettingsFoldersResponse,
  UpdateWebSecurityScannerSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWebSecurityScannerSettingsFoldersRequest,
  output: UpdateWebSecurityScannerSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetWebSecurityScannerSettingsFoldersRequest {
  name: string;
}

export const GetWebSecurityScannerSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetWebSecurityScannerSettingsFoldersRequest>;

export type GetWebSecurityScannerSettingsFoldersResponse =
  WebSecurityScannerSettings;
export const GetWebSecurityScannerSettingsFoldersResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type GetWebSecurityScannerSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getWebSecurityScannerSettingsFolders: API.OperationMethod<
  GetWebSecurityScannerSettingsFoldersRequest,
  GetWebSecurityScannerSettingsFoldersResponse,
  GetWebSecurityScannerSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWebSecurityScannerSettingsFoldersRequest,
  output: GetWebSecurityScannerSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetRapidVulnerabilityDetectionSettingsFoldersRequest {
  name: string;
}

export const GetRapidVulnerabilityDetectionSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetRapidVulnerabilityDetectionSettingsFoldersRequest>;

export type GetRapidVulnerabilityDetectionSettingsFoldersResponse =
  RapidVulnerabilityDetectionSettings;
export const GetRapidVulnerabilityDetectionSettingsFoldersResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type GetRapidVulnerabilityDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getRapidVulnerabilityDetectionSettingsFolders: API.OperationMethod<
  GetRapidVulnerabilityDetectionSettingsFoldersRequest,
  GetRapidVulnerabilityDetectionSettingsFoldersResponse,
  GetRapidVulnerabilityDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRapidVulnerabilityDetectionSettingsFoldersRequest,
  output: GetRapidVulnerabilityDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSecurityCenterSettingsFoldersRequest {
  name: string;
}

export const GetSecurityCenterSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSecurityCenterSettingsFoldersRequest>;

export type GetSecurityCenterSettingsFoldersResponse = SecurityCenterSettings;
export const GetSecurityCenterSettingsFoldersResponse =
  /*@__PURE__*/ SecurityCenterSettings;

export type GetSecurityCenterSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getSecurityCenterSettingsFolders: API.OperationMethod<
  GetSecurityCenterSettingsFoldersRequest,
  GetSecurityCenterSettingsFoldersResponse,
  GetSecurityCenterSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSecurityCenterSettingsFoldersRequest,
  output: GetSecurityCenterSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetEventThreatDetectionSettingsFoldersRequest {
  name: string;
}

export const GetEventThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetEventThreatDetectionSettingsFoldersRequest>;

export type GetEventThreatDetectionSettingsFoldersResponse =
  EventThreatDetectionSettings;
export const GetEventThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type GetEventThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getEventThreatDetectionSettingsFolders: API.OperationMethod<
  GetEventThreatDetectionSettingsFoldersRequest,
  GetEventThreatDetectionSettingsFoldersResponse,
  GetEventThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEventThreatDetectionSettingsFoldersRequest,
  output: GetEventThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersWebSecurityScannerSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersWebSecurityScannerSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateFoldersWebSecurityScannerSettingsRequest>;

export type CalculateFoldersWebSecurityScannerSettingsResponse =
  WebSecurityScannerSettings;
export const CalculateFoldersWebSecurityScannerSettingsResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type CalculateFoldersWebSecurityScannerSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateFoldersWebSecurityScannerSettings: API.OperationMethod<
  CalculateFoldersWebSecurityScannerSettingsRequest,
  CalculateFoldersWebSecurityScannerSettingsResponse,
  CalculateFoldersWebSecurityScannerSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateFoldersWebSecurityScannerSettingsRequest,
  output: CalculateFoldersWebSecurityScannerSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersRapidVulnerabilityDetectionSettingsRequest {
  name: string;
}

export const CalculateFoldersRapidVulnerabilityDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateFoldersRapidVulnerabilityDetectionSettingsRequest>;

export type CalculateFoldersRapidVulnerabilityDetectionSettingsResponse =
  RapidVulnerabilityDetectionSettings;
export const CalculateFoldersRapidVulnerabilityDetectionSettingsResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type CalculateFoldersRapidVulnerabilityDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateFoldersRapidVulnerabilityDetectionSettings: API.OperationMethod<
  CalculateFoldersRapidVulnerabilityDetectionSettingsRequest,
  CalculateFoldersRapidVulnerabilityDetectionSettingsResponse,
  CalculateFoldersRapidVulnerabilityDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateFoldersRapidVulnerabilityDetectionSettingsRequest,
  output: CalculateFoldersRapidVulnerabilityDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersSecurityHealthAnalyticsSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersSecurityHealthAnalyticsSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateFoldersSecurityHealthAnalyticsSettingsRequest>;

export type CalculateFoldersSecurityHealthAnalyticsSettingsResponse =
  SecurityHealthAnalyticsSettings;
export const CalculateFoldersSecurityHealthAnalyticsSettingsResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type CalculateFoldersSecurityHealthAnalyticsSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateFoldersSecurityHealthAnalyticsSettings: API.OperationMethod<
  CalculateFoldersSecurityHealthAnalyticsSettingsRequest,
  CalculateFoldersSecurityHealthAnalyticsSettingsResponse,
  CalculateFoldersSecurityHealthAnalyticsSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateFoldersSecurityHealthAnalyticsSettingsRequest,
  output: CalculateFoldersSecurityHealthAnalyticsSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersVirtualMachineThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersVirtualMachineThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateFoldersVirtualMachineThreatDetectionSettingsRequest>;

export type CalculateFoldersVirtualMachineThreatDetectionSettingsResponse =
  VirtualMachineThreatDetectionSettings;
export const CalculateFoldersVirtualMachineThreatDetectionSettingsResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type CalculateFoldersVirtualMachineThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateFoldersVirtualMachineThreatDetectionSettings: API.OperationMethod<
  CalculateFoldersVirtualMachineThreatDetectionSettingsRequest,
  CalculateFoldersVirtualMachineThreatDetectionSettingsResponse,
  CalculateFoldersVirtualMachineThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateFoldersVirtualMachineThreatDetectionSettingsRequest,
  output: CalculateFoldersVirtualMachineThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersContainerThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersContainerThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateFoldersContainerThreatDetectionSettingsRequest>;

export type CalculateFoldersContainerThreatDetectionSettingsResponse =
  ContainerThreatDetectionSettings;
export const CalculateFoldersContainerThreatDetectionSettingsResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type CalculateFoldersContainerThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateFoldersContainerThreatDetectionSettings: API.OperationMethod<
  CalculateFoldersContainerThreatDetectionSettingsRequest,
  CalculateFoldersContainerThreatDetectionSettingsResponse,
  CalculateFoldersContainerThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateFoldersContainerThreatDetectionSettingsRequest,
  output: CalculateFoldersContainerThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersEventThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateFoldersEventThreatDetectionSettingsRequest>;

export type CalculateFoldersEventThreatDetectionSettingsResponse =
  EventThreatDetectionSettings;
export const CalculateFoldersEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type CalculateFoldersEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateFoldersEventThreatDetectionSettings: API.OperationMethod<
  CalculateFoldersEventThreatDetectionSettingsRequest,
  CalculateFoldersEventThreatDetectionSettingsResponse,
  CalculateFoldersEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateFoldersEventThreatDetectionSettingsRequest,
  output: CalculateFoldersEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSecurityCenterSettingsOrganizationsRequest {
  name: string;
}

export const GetSecurityCenterSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSecurityCenterSettingsOrganizationsRequest>;

export type GetSecurityCenterSettingsOrganizationsResponse =
  SecurityCenterSettings;
export const GetSecurityCenterSettingsOrganizationsResponse =
  /*@__PURE__*/ SecurityCenterSettings;

export type GetSecurityCenterSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getSecurityCenterSettingsOrganizations: API.OperationMethod<
  GetSecurityCenterSettingsOrganizationsRequest,
  GetSecurityCenterSettingsOrganizationsResponse,
  GetSecurityCenterSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSecurityCenterSettingsOrganizationsRequest,
  output: GetSecurityCenterSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetEventThreatDetectionSettingsOrganizationsRequest {
  name: string;
}

export const GetEventThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetEventThreatDetectionSettingsOrganizationsRequest>;

export type GetEventThreatDetectionSettingsOrganizationsResponse =
  EventThreatDetectionSettings;
export const GetEventThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type GetEventThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getEventThreatDetectionSettingsOrganizations: API.OperationMethod<
  GetEventThreatDetectionSettingsOrganizationsRequest,
  GetEventThreatDetectionSettingsOrganizationsResponse,
  GetEventThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEventThreatDetectionSettingsOrganizationsRequest,
  output: GetEventThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetRapidVulnerabilityDetectionSettingsOrganizationsRequest {
  name: string;
}

export const GetRapidVulnerabilityDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetRapidVulnerabilityDetectionSettingsOrganizationsRequest>;

export type GetRapidVulnerabilityDetectionSettingsOrganizationsResponse =
  RapidVulnerabilityDetectionSettings;
export const GetRapidVulnerabilityDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type GetRapidVulnerabilityDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getRapidVulnerabilityDetectionSettingsOrganizations: API.OperationMethod<
  GetRapidVulnerabilityDetectionSettingsOrganizationsRequest,
  GetRapidVulnerabilityDetectionSettingsOrganizationsResponse,
  GetRapidVulnerabilityDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRapidVulnerabilityDetectionSettingsOrganizationsRequest,
  output: GetRapidVulnerabilityDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetWebSecurityScannerSettingsOrganizationsRequest {
  name: string;
}

export const GetWebSecurityScannerSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetWebSecurityScannerSettingsOrganizationsRequest>;

export type GetWebSecurityScannerSettingsOrganizationsResponse =
  WebSecurityScannerSettings;
export const GetWebSecurityScannerSettingsOrganizationsResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type GetWebSecurityScannerSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getWebSecurityScannerSettingsOrganizations: API.OperationMethod<
  GetWebSecurityScannerSettingsOrganizationsRequest,
  GetWebSecurityScannerSettingsOrganizationsResponse,
  GetWebSecurityScannerSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWebSecurityScannerSettingsOrganizationsRequest,
  output: GetWebSecurityScannerSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateWebSecurityScannerSettingsOrganizationsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: WebSecurityScannerSettings;
}

export const UpdateWebSecurityScannerSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WebSecurityScannerSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateWebSecurityScannerSettingsOrganizationsRequest>;

export type UpdateWebSecurityScannerSettingsOrganizationsResponse =
  WebSecurityScannerSettings;
export const UpdateWebSecurityScannerSettingsOrganizationsResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type UpdateWebSecurityScannerSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateWebSecurityScannerSettingsOrganizations: API.OperationMethod<
  UpdateWebSecurityScannerSettingsOrganizationsRequest,
  UpdateWebSecurityScannerSettingsOrganizationsResponse,
  UpdateWebSecurityScannerSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWebSecurityScannerSettingsOrganizationsRequest,
  output: UpdateWebSecurityScannerSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateContainerThreatDetectionSettingsOrganizationsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: ContainerThreatDetectionSettings;
}

export const UpdateContainerThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContainerThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateContainerThreatDetectionSettingsOrganizationsRequest>;

export type UpdateContainerThreatDetectionSettingsOrganizationsResponse =
  ContainerThreatDetectionSettings;
export const UpdateContainerThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type UpdateContainerThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateContainerThreatDetectionSettingsOrganizations: API.OperationMethod<
  UpdateContainerThreatDetectionSettingsOrganizationsRequest,
  UpdateContainerThreatDetectionSettingsOrganizationsResponse,
  UpdateContainerThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateContainerThreatDetectionSettingsOrganizationsRequest,
  output: UpdateContainerThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecurityHealthAnalyticsSettingsOrganizationsRequest {
  name: string;
}

export const GetSecurityHealthAnalyticsSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSecurityHealthAnalyticsSettingsOrganizationsRequest>;

export type GetSecurityHealthAnalyticsSettingsOrganizationsResponse =
  SecurityHealthAnalyticsSettings;
export const GetSecurityHealthAnalyticsSettingsOrganizationsResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type GetSecurityHealthAnalyticsSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getSecurityHealthAnalyticsSettingsOrganizations: API.OperationMethod<
  GetSecurityHealthAnalyticsSettingsOrganizationsRequest,
  GetSecurityHealthAnalyticsSettingsOrganizationsResponse,
  GetSecurityHealthAnalyticsSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSecurityHealthAnalyticsSettingsOrganizationsRequest,
  output: GetSecurityHealthAnalyticsSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEventThreatDetectionSettingsOrganizationsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionSettings;
}

export const UpdateEventThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateEventThreatDetectionSettingsOrganizationsRequest>;

export type UpdateEventThreatDetectionSettingsOrganizationsResponse =
  EventThreatDetectionSettings;
export const UpdateEventThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type UpdateEventThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateEventThreatDetectionSettingsOrganizations: API.OperationMethod<
  UpdateEventThreatDetectionSettingsOrganizationsRequest,
  UpdateEventThreatDetectionSettingsOrganizationsResponse,
  UpdateEventThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEventThreatDetectionSettingsOrganizationsRequest,
  output: UpdateEventThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: VirtualMachineThreatDetectionSettings;
}

export const UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VirtualMachineThreatDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest>;

export type UpdateVirtualMachineThreatDetectionSettingsOrganizationsResponse =
  VirtualMachineThreatDetectionSettings;
export const UpdateVirtualMachineThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type UpdateVirtualMachineThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateVirtualMachineThreatDetectionSettingsOrganizations: API.OperationMethod<
  UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest,
  UpdateVirtualMachineThreatDetectionSettingsOrganizationsResponse,
  UpdateVirtualMachineThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest,
  output: UpdateVirtualMachineThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetContainerThreatDetectionSettingsOrganizationsRequest {
  name: string;
}

export const GetContainerThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetContainerThreatDetectionSettingsOrganizationsRequest>;

export type GetContainerThreatDetectionSettingsOrganizationsResponse =
  ContainerThreatDetectionSettings;
export const GetContainerThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type GetContainerThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getContainerThreatDetectionSettingsOrganizations: API.OperationMethod<
  GetContainerThreatDetectionSettingsOrganizationsRequest,
  GetContainerThreatDetectionSettingsOrganizationsResponse,
  GetContainerThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContainerThreatDetectionSettingsOrganizationsRequest,
  output: GetContainerThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSubscriptionOrganizationsRequest {
  name: string;
}

export const GetSubscriptionOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSubscriptionOrganizationsRequest>;

export type GetSubscriptionOrganizationsResponse = Subscription;
export const GetSubscriptionOrganizationsResponse = /*@__PURE__*/ Subscription;

export type GetSubscriptionOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getSubscriptionOrganizations: API.OperationMethod<
  GetSubscriptionOrganizationsRequest,
  GetSubscriptionOrganizationsResponse,
  GetSubscriptionOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSubscriptionOrganizationsRequest,
  output: GetSubscriptionOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: RapidVulnerabilityDetectionSettings;
}

export const UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RapidVulnerabilityDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest>;

export type UpdateRapidVulnerabilityDetectionSettingsOrganizationsResponse =
  RapidVulnerabilityDetectionSettings;
export const UpdateRapidVulnerabilityDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type UpdateRapidVulnerabilityDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateRapidVulnerabilityDetectionSettingsOrganizations: API.OperationMethod<
  UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest,
  UpdateRapidVulnerabilityDetectionSettingsOrganizationsResponse,
  UpdateRapidVulnerabilityDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest,
  output: UpdateRapidVulnerabilityDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: SecurityHealthAnalyticsSettings;
}

export const UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityHealthAnalyticsSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest>;

export type UpdateSecurityHealthAnalyticsSettingsOrganizationsResponse =
  SecurityHealthAnalyticsSettings;
export const UpdateSecurityHealthAnalyticsSettingsOrganizationsResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type UpdateSecurityHealthAnalyticsSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityHealthAnalyticsSettingsOrganizations: API.OperationMethod<
  UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest,
  UpdateSecurityHealthAnalyticsSettingsOrganizationsResponse,
  UpdateSecurityHealthAnalyticsSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest,
  output: UpdateSecurityHealthAnalyticsSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetVirtualMachineThreatDetectionSettingsOrganizationsRequest {
  name: string;
}

export const GetVirtualMachineThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetVirtualMachineThreatDetectionSettingsOrganizationsRequest>;

export type GetVirtualMachineThreatDetectionSettingsOrganizationsResponse =
  VirtualMachineThreatDetectionSettings;
export const GetVirtualMachineThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type GetVirtualMachineThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getVirtualMachineThreatDetectionSettingsOrganizations: API.OperationMethod<
  GetVirtualMachineThreatDetectionSettingsOrganizationsRequest,
  GetVirtualMachineThreatDetectionSettingsOrganizationsResponse,
  GetVirtualMachineThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetVirtualMachineThreatDetectionSettingsOrganizationsRequest,
  output: GetVirtualMachineThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsWebSecurityScannerSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsWebSecurityScannerSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateOrganizationsWebSecurityScannerSettingsRequest>;

export type CalculateOrganizationsWebSecurityScannerSettingsResponse =
  WebSecurityScannerSettings;
export const CalculateOrganizationsWebSecurityScannerSettingsResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type CalculateOrganizationsWebSecurityScannerSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateOrganizationsWebSecurityScannerSettings: API.OperationMethod<
  CalculateOrganizationsWebSecurityScannerSettingsRequest,
  CalculateOrganizationsWebSecurityScannerSettingsResponse,
  CalculateOrganizationsWebSecurityScannerSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsWebSecurityScannerSettingsRequest,
  output: CalculateOrganizationsWebSecurityScannerSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest {
  name: string;
}

export const CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest>;

export type CalculateOrganizationsRapidVulnerabilityDetectionSettingsResponse =
  RapidVulnerabilityDetectionSettings;
export const CalculateOrganizationsRapidVulnerabilityDetectionSettingsResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type CalculateOrganizationsRapidVulnerabilityDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateOrganizationsRapidVulnerabilityDetectionSettings: API.OperationMethod<
  CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest,
  CalculateOrganizationsRapidVulnerabilityDetectionSettingsResponse,
  CalculateOrganizationsRapidVulnerabilityDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest,
  output: CalculateOrganizationsRapidVulnerabilityDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsContainerThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsContainerThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateOrganizationsContainerThreatDetectionSettingsRequest>;

export type CalculateOrganizationsContainerThreatDetectionSettingsResponse =
  ContainerThreatDetectionSettings;
export const CalculateOrganizationsContainerThreatDetectionSettingsResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type CalculateOrganizationsContainerThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateOrganizationsContainerThreatDetectionSettings: API.OperationMethod<
  CalculateOrganizationsContainerThreatDetectionSettingsRequest,
  CalculateOrganizationsContainerThreatDetectionSettingsResponse,
  CalculateOrganizationsContainerThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsContainerThreatDetectionSettingsRequest,
  output: CalculateOrganizationsContainerThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsEventThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateOrganizationsEventThreatDetectionSettingsRequest>;

export type CalculateOrganizationsEventThreatDetectionSettingsResponse =
  EventThreatDetectionSettings;
export const CalculateOrganizationsEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type CalculateOrganizationsEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateOrganizationsEventThreatDetectionSettings: API.OperationMethod<
  CalculateOrganizationsEventThreatDetectionSettingsRequest,
  CalculateOrganizationsEventThreatDetectionSettingsResponse,
  CalculateOrganizationsEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsEventThreatDetectionSettingsRequest,
  output: CalculateOrganizationsEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest>;

export type CalculateOrganizationsSecurityHealthAnalyticsSettingsResponse =
  SecurityHealthAnalyticsSettings;
export const CalculateOrganizationsSecurityHealthAnalyticsSettingsResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type CalculateOrganizationsSecurityHealthAnalyticsSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateOrganizationsSecurityHealthAnalyticsSettings: API.OperationMethod<
  CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest,
  CalculateOrganizationsSecurityHealthAnalyticsSettingsResponse,
  CalculateOrganizationsSecurityHealthAnalyticsSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest,
  output: CalculateOrganizationsSecurityHealthAnalyticsSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest>;

export type CalculateOrganizationsVirtualMachineThreatDetectionSettingsResponse =
  VirtualMachineThreatDetectionSettings;
export const CalculateOrganizationsVirtualMachineThreatDetectionSettingsResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type CalculateOrganizationsVirtualMachineThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateOrganizationsVirtualMachineThreatDetectionSettings: API.OperationMethod<
  CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest,
  CalculateOrganizationsVirtualMachineThreatDetectionSettingsResponse,
  CalculateOrganizationsVirtualMachineThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest,
  output: CalculateOrganizationsVirtualMachineThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateVirtualMachineThreatDetectionSettingsProjectsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: VirtualMachineThreatDetectionSettings;
}

export const UpdateVirtualMachineThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VirtualMachineThreatDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateVirtualMachineThreatDetectionSettingsProjectsRequest>;

export type UpdateVirtualMachineThreatDetectionSettingsProjectsResponse =
  VirtualMachineThreatDetectionSettings;
export const UpdateVirtualMachineThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type UpdateVirtualMachineThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateVirtualMachineThreatDetectionSettingsProjects: API.OperationMethod<
  UpdateVirtualMachineThreatDetectionSettingsProjectsRequest,
  UpdateVirtualMachineThreatDetectionSettingsProjectsResponse,
  UpdateVirtualMachineThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateVirtualMachineThreatDetectionSettingsProjectsRequest,
  output: UpdateVirtualMachineThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateEventThreatDetectionSettingsProjectsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionSettings;
}

export const UpdateEventThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateEventThreatDetectionSettingsProjectsRequest>;

export type UpdateEventThreatDetectionSettingsProjectsResponse =
  EventThreatDetectionSettings;
export const UpdateEventThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type UpdateEventThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateEventThreatDetectionSettingsProjects: API.OperationMethod<
  UpdateEventThreatDetectionSettingsProjectsRequest,
  UpdateEventThreatDetectionSettingsProjectsResponse,
  UpdateEventThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEventThreatDetectionSettingsProjectsRequest,
  output: UpdateEventThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetContainerThreatDetectionSettingsProjectsRequest {
  name: string;
}

export const GetContainerThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetContainerThreatDetectionSettingsProjectsRequest>;

export type GetContainerThreatDetectionSettingsProjectsResponse =
  ContainerThreatDetectionSettings;
export const GetContainerThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type GetContainerThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getContainerThreatDetectionSettingsProjects: API.OperationMethod<
  GetContainerThreatDetectionSettingsProjectsRequest,
  GetContainerThreatDetectionSettingsProjectsResponse,
  GetContainerThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContainerThreatDetectionSettingsProjectsRequest,
  output: GetContainerThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateRapidVulnerabilityDetectionSettingsProjectsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: RapidVulnerabilityDetectionSettings;
}

export const UpdateRapidVulnerabilityDetectionSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RapidVulnerabilityDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateRapidVulnerabilityDetectionSettingsProjectsRequest>;

export type UpdateRapidVulnerabilityDetectionSettingsProjectsResponse =
  RapidVulnerabilityDetectionSettings;
export const UpdateRapidVulnerabilityDetectionSettingsProjectsResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type UpdateRapidVulnerabilityDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateRapidVulnerabilityDetectionSettingsProjects: API.OperationMethod<
  UpdateRapidVulnerabilityDetectionSettingsProjectsRequest,
  UpdateRapidVulnerabilityDetectionSettingsProjectsResponse,
  UpdateRapidVulnerabilityDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRapidVulnerabilityDetectionSettingsProjectsRequest,
  output: UpdateRapidVulnerabilityDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetVirtualMachineThreatDetectionSettingsProjectsRequest {
  name: string;
}

export const GetVirtualMachineThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetVirtualMachineThreatDetectionSettingsProjectsRequest>;

export type GetVirtualMachineThreatDetectionSettingsProjectsResponse =
  VirtualMachineThreatDetectionSettings;
export const GetVirtualMachineThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type GetVirtualMachineThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getVirtualMachineThreatDetectionSettingsProjects: API.OperationMethod<
  GetVirtualMachineThreatDetectionSettingsProjectsRequest,
  GetVirtualMachineThreatDetectionSettingsProjectsResponse,
  GetVirtualMachineThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetVirtualMachineThreatDetectionSettingsProjectsRequest,
  output: GetVirtualMachineThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSecurityHealthAnalyticsSettingsProjectsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: SecurityHealthAnalyticsSettings;
}

export const UpdateSecurityHealthAnalyticsSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityHealthAnalyticsSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSecurityHealthAnalyticsSettingsProjectsRequest>;

export type UpdateSecurityHealthAnalyticsSettingsProjectsResponse =
  SecurityHealthAnalyticsSettings;
export const UpdateSecurityHealthAnalyticsSettingsProjectsResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type UpdateSecurityHealthAnalyticsSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateSecurityHealthAnalyticsSettingsProjects: API.OperationMethod<
  UpdateSecurityHealthAnalyticsSettingsProjectsRequest,
  UpdateSecurityHealthAnalyticsSettingsProjectsResponse,
  UpdateSecurityHealthAnalyticsSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityHealthAnalyticsSettingsProjectsRequest,
  output: UpdateSecurityHealthAnalyticsSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecurityCenterSettingsProjectsRequest {
  name: string;
}

export const GetSecurityCenterSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSecurityCenterSettingsProjectsRequest>;

export type GetSecurityCenterSettingsProjectsResponse = SecurityCenterSettings;
export const GetSecurityCenterSettingsProjectsResponse =
  /*@__PURE__*/ SecurityCenterSettings;

export type GetSecurityCenterSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getSecurityCenterSettingsProjects: API.OperationMethod<
  GetSecurityCenterSettingsProjectsRequest,
  GetSecurityCenterSettingsProjectsResponse,
  GetSecurityCenterSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSecurityCenterSettingsProjectsRequest,
  output: GetSecurityCenterSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetEventThreatDetectionSettingsProjectsRequest {
  name: string;
}

export const GetEventThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetEventThreatDetectionSettingsProjectsRequest>;

export type GetEventThreatDetectionSettingsProjectsResponse =
  EventThreatDetectionSettings;
export const GetEventThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type GetEventThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getEventThreatDetectionSettingsProjects: API.OperationMethod<
  GetEventThreatDetectionSettingsProjectsRequest,
  GetEventThreatDetectionSettingsProjectsResponse,
  GetEventThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEventThreatDetectionSettingsProjectsRequest,
  output: GetEventThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetRapidVulnerabilityDetectionSettingsProjectsRequest {
  name: string;
}

export const GetRapidVulnerabilityDetectionSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetRapidVulnerabilityDetectionSettingsProjectsRequest>;

export type GetRapidVulnerabilityDetectionSettingsProjectsResponse =
  RapidVulnerabilityDetectionSettings;
export const GetRapidVulnerabilityDetectionSettingsProjectsResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type GetRapidVulnerabilityDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getRapidVulnerabilityDetectionSettingsProjects: API.OperationMethod<
  GetRapidVulnerabilityDetectionSettingsProjectsRequest,
  GetRapidVulnerabilityDetectionSettingsProjectsResponse,
  GetRapidVulnerabilityDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRapidVulnerabilityDetectionSettingsProjectsRequest,
  output: GetRapidVulnerabilityDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetWebSecurityScannerSettingsProjectsRequest {
  name: string;
}

export const GetWebSecurityScannerSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetWebSecurityScannerSettingsProjectsRequest>;

export type GetWebSecurityScannerSettingsProjectsResponse =
  WebSecurityScannerSettings;
export const GetWebSecurityScannerSettingsProjectsResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type GetWebSecurityScannerSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getWebSecurityScannerSettingsProjects: API.OperationMethod<
  GetWebSecurityScannerSettingsProjectsRequest,
  GetWebSecurityScannerSettingsProjectsResponse,
  GetWebSecurityScannerSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWebSecurityScannerSettingsProjectsRequest,
  output: GetWebSecurityScannerSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateContainerThreatDetectionSettingsProjectsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: ContainerThreatDetectionSettings;
}

export const UpdateContainerThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContainerThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateContainerThreatDetectionSettingsProjectsRequest>;

export type UpdateContainerThreatDetectionSettingsProjectsResponse =
  ContainerThreatDetectionSettings;
export const UpdateContainerThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type UpdateContainerThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateContainerThreatDetectionSettingsProjects: API.OperationMethod<
  UpdateContainerThreatDetectionSettingsProjectsRequest,
  UpdateContainerThreatDetectionSettingsProjectsResponse,
  UpdateContainerThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateContainerThreatDetectionSettingsProjectsRequest,
  output: UpdateContainerThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateWebSecurityScannerSettingsProjectsRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: WebSecurityScannerSettings;
}

export const UpdateWebSecurityScannerSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WebSecurityScannerSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateWebSecurityScannerSettingsProjectsRequest>;

export type UpdateWebSecurityScannerSettingsProjectsResponse =
  WebSecurityScannerSettings;
export const UpdateWebSecurityScannerSettingsProjectsResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type UpdateWebSecurityScannerSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateWebSecurityScannerSettingsProjects: API.OperationMethod<
  UpdateWebSecurityScannerSettingsProjectsRequest,
  UpdateWebSecurityScannerSettingsProjectsResponse,
  UpdateWebSecurityScannerSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWebSecurityScannerSettingsProjectsRequest,
  output: UpdateWebSecurityScannerSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecurityHealthAnalyticsSettingsProjectsRequest {
  name: string;
}

export const GetSecurityHealthAnalyticsSettingsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSecurityHealthAnalyticsSettingsProjectsRequest>;

export type GetSecurityHealthAnalyticsSettingsProjectsResponse =
  SecurityHealthAnalyticsSettings;
export const GetSecurityHealthAnalyticsSettingsProjectsResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type GetSecurityHealthAnalyticsSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getSecurityHealthAnalyticsSettingsProjects: API.OperationMethod<
  GetSecurityHealthAnalyticsSettingsProjectsRequest,
  GetSecurityHealthAnalyticsSettingsProjectsResponse,
  GetSecurityHealthAnalyticsSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSecurityHealthAnalyticsSettingsProjectsRequest,
  output: GetSecurityHealthAnalyticsSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsContainerThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsContainerThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateProjectsContainerThreatDetectionSettingsRequest>;

export type CalculateProjectsContainerThreatDetectionSettingsResponse =
  ContainerThreatDetectionSettings;
export const CalculateProjectsContainerThreatDetectionSettingsResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type CalculateProjectsContainerThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateProjectsContainerThreatDetectionSettings: API.OperationMethod<
  CalculateProjectsContainerThreatDetectionSettingsRequest,
  CalculateProjectsContainerThreatDetectionSettingsResponse,
  CalculateProjectsContainerThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateProjectsContainerThreatDetectionSettingsRequest,
  output: CalculateProjectsContainerThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsEventThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateProjectsEventThreatDetectionSettingsRequest>;

export type CalculateProjectsEventThreatDetectionSettingsResponse =
  EventThreatDetectionSettings;
export const CalculateProjectsEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ EventThreatDetectionSettings;

export type CalculateProjectsEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateProjectsEventThreatDetectionSettings: API.OperationMethod<
  CalculateProjectsEventThreatDetectionSettingsRequest,
  CalculateProjectsEventThreatDetectionSettingsResponse,
  CalculateProjectsEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateProjectsEventThreatDetectionSettingsRequest,
  output: CalculateProjectsEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest {
  name: string;
}

export const GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest>;

export type GetContainerThreatDetectionSettingsProjectsLocationsClustersResponse =
  ContainerThreatDetectionSettings;
export const GetContainerThreatDetectionSettingsProjectsLocationsClustersResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type GetContainerThreatDetectionSettingsProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getContainerThreatDetectionSettingsProjectsLocationsClusters: API.OperationMethod<
  GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest,
  GetContainerThreatDetectionSettingsProjectsLocationsClustersResponse,
  GetContainerThreatDetectionSettingsProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest,
  output: GetContainerThreatDetectionSettingsProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest {
  name: string;
  updateMask?: string;
  /** Request body */
  body?: ContainerThreatDetectionSettings;
}

export const UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContainerThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest>;

export type UpdateContainerThreatDetectionSettingsProjectsLocationsClustersResponse =
  ContainerThreatDetectionSettings;
export const UpdateContainerThreatDetectionSettingsProjectsLocationsClustersResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type UpdateContainerThreatDetectionSettingsProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

export const updateContainerThreatDetectionSettingsProjectsLocationsClusters: API.OperationMethod<
  UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest,
  UpdateContainerThreatDetectionSettingsProjectsLocationsClustersResponse,
  UpdateContainerThreatDetectionSettingsProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest,
  output:
    UpdateContainerThreatDetectionSettingsProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest>;

export type CalculateProjectsLocationsClustersContainerThreatDetectionSettingsResponse =
  ContainerThreatDetectionSettings;
export const CalculateProjectsLocationsClustersContainerThreatDetectionSettingsResponse =
  /*@__PURE__*/ ContainerThreatDetectionSettings;

export type CalculateProjectsLocationsClustersContainerThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateProjectsLocationsClustersContainerThreatDetectionSettings: API.OperationMethod<
  CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest,
  CalculateProjectsLocationsClustersContainerThreatDetectionSettingsResponse,
  CalculateProjectsLocationsClustersContainerThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest,
  output:
    CalculateProjectsLocationsClustersContainerThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsSecurityHealthAnalyticsSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsSecurityHealthAnalyticsSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateProjectsSecurityHealthAnalyticsSettingsRequest>;

export type CalculateProjectsSecurityHealthAnalyticsSettingsResponse =
  SecurityHealthAnalyticsSettings;
export const CalculateProjectsSecurityHealthAnalyticsSettingsResponse =
  /*@__PURE__*/ SecurityHealthAnalyticsSettings;

export type CalculateProjectsSecurityHealthAnalyticsSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateProjectsSecurityHealthAnalyticsSettings: API.OperationMethod<
  CalculateProjectsSecurityHealthAnalyticsSettingsRequest,
  CalculateProjectsSecurityHealthAnalyticsSettingsResponse,
  CalculateProjectsSecurityHealthAnalyticsSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateProjectsSecurityHealthAnalyticsSettingsRequest,
  output: CalculateProjectsSecurityHealthAnalyticsSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsVirtualMachineThreatDetectionSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsVirtualMachineThreatDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateProjectsVirtualMachineThreatDetectionSettingsRequest>;

export type CalculateProjectsVirtualMachineThreatDetectionSettingsResponse =
  VirtualMachineThreatDetectionSettings;
export const CalculateProjectsVirtualMachineThreatDetectionSettingsResponse =
  /*@__PURE__*/ VirtualMachineThreatDetectionSettings;

export type CalculateProjectsVirtualMachineThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateProjectsVirtualMachineThreatDetectionSettings: API.OperationMethod<
  CalculateProjectsVirtualMachineThreatDetectionSettingsRequest,
  CalculateProjectsVirtualMachineThreatDetectionSettingsResponse,
  CalculateProjectsVirtualMachineThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateProjectsVirtualMachineThreatDetectionSettingsRequest,
  output: CalculateProjectsVirtualMachineThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsWebSecurityScannerSettingsRequest {
  name: string;
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsWebSecurityScannerSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateProjectsWebSecurityScannerSettingsRequest>;

export type CalculateProjectsWebSecurityScannerSettingsResponse =
  WebSecurityScannerSettings;
export const CalculateProjectsWebSecurityScannerSettingsResponse =
  /*@__PURE__*/ WebSecurityScannerSettings;

export type CalculateProjectsWebSecurityScannerSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateProjectsWebSecurityScannerSettings: API.OperationMethod<
  CalculateProjectsWebSecurityScannerSettingsRequest,
  CalculateProjectsWebSecurityScannerSettingsResponse,
  CalculateProjectsWebSecurityScannerSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateProjectsWebSecurityScannerSettingsRequest,
  output: CalculateProjectsWebSecurityScannerSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsRapidVulnerabilityDetectionSettingsRequest {
  name: string;
}

export const CalculateProjectsRapidVulnerabilityDetectionSettingsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Codec<CalculateProjectsRapidVulnerabilityDetectionSettingsRequest>;

export type CalculateProjectsRapidVulnerabilityDetectionSettingsResponse =
  RapidVulnerabilityDetectionSettings;
export const CalculateProjectsRapidVulnerabilityDetectionSettingsResponse =
  /*@__PURE__*/ RapidVulnerabilityDetectionSettings;

export type CalculateProjectsRapidVulnerabilityDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const calculateProjectsRapidVulnerabilityDetectionSettings: API.OperationMethod<
  CalculateProjectsRapidVulnerabilityDetectionSettingsRequest,
  CalculateProjectsRapidVulnerabilityDetectionSettingsResponse,
  CalculateProjectsRapidVulnerabilityDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CalculateProjectsRapidVulnerabilityDetectionSettingsRequest,
  output: CalculateProjectsRapidVulnerabilityDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));
