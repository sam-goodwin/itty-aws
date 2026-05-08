// ==========================================================================
// Security Command Center API (securitycenter v1)
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
  name: "securitycenter",
  version: "v1",
  rootUrl: "https://securitycenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface EventThreatDetectionCustomModule {
  /** Config for the module. For the resident module, its config value is defined at this level. For the inherited module, its config value is inherited from the ancestor module. */
  config?: Record<string, unknown>;
  /** Output only. The closest ancestor module that this module inherits the enablement state from. The format is the same as the EventThreatDetectionCustomModule resource name. */
  ancestorModule?: string;
  /** Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name?: string;
  /** The state of enablement for the module at the given level of the hierarchy. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "INHERITED"
    | (string & {});
  /** The cloud provider of the custom module. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Type for the module. e.g. CONFIGURABLE_BAD_IP. */
  type?: string;
  /** The human readable name to be displayed for the module. */
  displayName?: string;
  /** Output only. The editor the module was last updated by. */
  lastEditor?: string;
  /** Output only. The time the module was last updated. */
  updateTime?: string;
  /** The description for the module. */
  description?: string;
}

export const EventThreatDetectionCustomModule: Schema.Schema<EventThreatDetectionCustomModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    ancestorModule: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    lastEditor: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventThreatDetectionCustomModule" });

export interface GoogleCloudSecuritycenterV1p1beta1Folder {
  /** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceFolder?: string;
  /** The user defined display name for this folder. */
  resourceFolderDisplayName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Folder: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Folder" });

export interface GoogleCloudSecuritycenterV1p1beta1Resource {
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
  /** The full resource name of resource's parent. */
  parent?: string;
  /** The project id that the resource belongs to. */
  projectDisplayName?: string;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV1p1beta1Folder>;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Resource: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
    folders: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1p1beta1Folder),
    ),
    parentDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Resource" });

export interface GoogleCloudSecuritycenterV2HttpResponse {
  /** The http response code returned by the web application, for example, 200. */
  statusCode?: string;
  /** The http path for which response code was returned by web application, for example, "https://test-app.a.run.app/test". */
  path?: string;
}

export const GoogleCloudSecuritycenterV2HttpResponse: Schema.Schema<GoogleCloudSecuritycenterV2HttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2HttpResponse" });

export interface GoogleCloudSecuritycenterV2ExternalExposure {
  /** The full resource name of the PSC (Private Service Connect) service attachment that the load balancer network endpoint group targets, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/serviceAttachments/{name}" */
  pscServiceAttachment?: string;
  /** Public IP address of the exposed endpoint. */
  publicIpAddress?: string;
  /** Private IP address of the exposed endpoint. */
  privateIpAddress?: string;
  /** The resource which is running the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/zones/{zone}/instances/{instance}.” */
  exposedEndpoint?: string;
  /** The full resource name of the load balancer firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  loadBalancerFirewallPolicy?: string;
  /** The http response returned by the web application. */
  httpResponse?: ReadonlyArray<GoogleCloudSecuritycenterV2HttpResponse>;
  /** The full resource name of load balancer backend service, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  backendService?: string;
  /** The full resource name of the load balancer backend bucket, for example, "//compute.googleapis.com/projects/{project-id}/global/backendBuckets/{name}" */
  backendBucket?: string;
  /** Public port number of the exposed endpoint. */
  publicPort?: string;
  /** The full resource name of the network endpoint group, for example, "//compute.googleapis.com/projects/{project-id}/global/networkEndpointGroups/{name}". */
  networkEndpointGroup?: string;
  /** The full resource name of the network ingress firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{name}". */
  networkIngressFirewallPolicy?: string;
  /** The full resource name of the instance group, for example, "//compute.googleapis.com/projects/{project-id}/global/instanceGroups/{name}". */
  instanceGroup?: string;
  /** The full resource name of the PSC (Private Service Connect) network attachment that network interface controller is attached to, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/networkAttachments/{name}" */
  pscNetworkAttachment?: string;
  /** The full resource name of the firewall policy of the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  serviceFirewallPolicy?: string;
  /** The full resource name of the forwarding rule, for example, "//compute.googleapis.com/projects/{project-id}/global/forwardingRules/{forwarding-rule-name}". */
  forwardingRule?: string;
  /** Port number associated with private IP address. */
  privatePort?: string;
  /** The name and version of the exposed web application, for example, "Jenkins 2.184". */
  exposedApplication?: string;
  /** The full resource name of load balancer backend service in the internal project having resource exposed via PSC, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  internalBackendService?: string;
  /** The name and version of the service, for example, "Jupyter Notebook 6.14.0". */
  exposedService?: string;
  /** Hostname of the exposed application, for example, "https://test-app.a.run.app/" */
  hostnameUri?: string;
}

export const GoogleCloudSecuritycenterV2ExternalExposure: Schema.Schema<GoogleCloudSecuritycenterV2ExternalExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pscServiceAttachment: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    httpResponse: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2HttpResponse),
    ),
    backendService: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalExposure" });

export interface BigQueryDestination {
  /** Required. The relative resource name of the destination dataset, in the form projects/{projectId}/datasets/{datasetId}. */
  dataset?: string;
}

export const BigQueryDestination: Schema.Schema<BigQueryDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryDestination" });

export interface ExportFindingsMetadata {
  /** Required. The destination BigQuery dataset to export findings to. */
  bigQueryDestination?: BigQueryDestination;
  /** Optional. Timestamp at which export was started */
  exportStartTime?: string;
}

export const ExportFindingsMetadata: Schema.Schema<ExportFindingsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigQueryDestination: Schema.optional(BigQueryDestination),
    exportStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportFindingsMetadata" });

export interface AssetDiscoveryConfig {
  /** The mode to use for filtering asset discovery. */
  inclusionMode?:
    | "INCLUSION_MODE_UNSPECIFIED"
    | "INCLUDE_ONLY"
    | "EXCLUDE"
    | (string & {});
  /** The folder ids to use for filtering asset discovery. It consists of only digits, e.g., 756619654966. */
  folderIds?: ReadonlyArray<string>;
  /** The project ids to use for filtering asset discovery. */
  projectIds?: ReadonlyArray<string>;
}

export const AssetDiscoveryConfig: Schema.Schema<AssetDiscoveryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inclusionMode: Schema.optional(Schema.String),
    folderIds: Schema.optional(Schema.Array(Schema.String)),
    projectIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AssetDiscoveryConfig" });

export interface GoogleCloudSecuritycenterV1ResourceSelector {
  /** The resource types to run the detector on. */
  resourceTypes?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV1ResourceSelector: Schema.Schema<GoogleCloudSecuritycenterV1ResourceSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceSelector" });

export interface GoogleCloudSecuritycenterV2Label {
  /** Name of the label. */
  name?: string;
  /** Value that corresponds to the label's name. */
  value?: string;
}

export const GoogleCloudSecuritycenterV2Label: Schema.Schema<GoogleCloudSecuritycenterV2Label> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Label" });

export interface GoogleCloudSecuritycenterV2Container {
  /** The time that the container was created. */
  createTime?: string;
  /** Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. */
  uri?: string;
  /** Container labels, as provided by the container runtime. */
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  /** Name of the container. */
  name?: string;
  /** Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. */
  imageId?: string;
}

export const GoogleCloudSecuritycenterV2Container: Schema.Schema<GoogleCloudSecuritycenterV2Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    name: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Container" });

export interface GoogleCloudSecuritycenterV2Object {
  /** Kubernetes object kind, such as "Namespace". */
  kind?: string;
  /** Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. */
  name?: string;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  /** Kubernetes object group, such as "policy.k8s.io/v1". */
  group?: string;
  /** Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. */
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Object: Schema.Schema<GoogleCloudSecuritycenterV2Object> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    group: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Object" });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality {
  /** Criticality Type. */
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality",
  });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment {
  /** Environment Type. */
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment",
  });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo {
  /** Email address of the contacts. */
  email?: string;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo",
  });

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributes {
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality,
    ),
    environment: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment,
    ),
    developerOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo,
      ),
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
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1ResourceApplicationAttributes",
  });

export interface AdcApplication {
  /** The resource name of an ADC Application. Format: projects/{project}/locations/{location}/spaces/{space}/applications/{application} */
  name?: string;
  /** Consumer provided attributes for the AppHub application. */
  attributes?: GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
}

export const AdcApplication: Schema.Schema<AdcApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "AdcApplication" });

export interface AzureSubscription {
  /** The UUID of the Azure subscription, for example, `291bba3f-e0a5-47bc-a099-3bdcb2a50a05`. */
  id?: string;
  /** The display name of the Azure subscription. */
  displayName?: string;
}

export const AzureSubscription: Schema.Schema<AzureSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureSubscription" });

export interface AzureManagementGroup {
  /** The UUID of the Azure management group, for example, `20000000-0001-0000-0000-000000000000`. */
  id?: string;
  /** The display name of the Azure management group. */
  displayName?: string;
}

export const AzureManagementGroup: Schema.Schema<AzureManagementGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureManagementGroup" });

export interface AzureResourceGroup {
  /** The ID of the Azure resource group. */
  id?: string;
  /** The name of the Azure resource group. This is not a UUID. */
  name?: string;
}

export const AzureResourceGroup: Schema.Schema<AzureResourceGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureResourceGroup" });

export interface AzureTenant {
  /** The ID of the Microsoft Entra tenant, for example, "a11aaa11-aa11-1aa1-11aa-1aaa11a". */
  id?: string;
  /** The display name of the Azure tenant. */
  displayName?: string;
}

export const AzureTenant: Schema.Schema<AzureTenant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureTenant" });

export interface AzureMetadata {
  /** The Azure subscription associated with the resource. */
  subscription?: AzureSubscription;
  /** A list of Azure management groups associated with the resource, ordered from lowest level (closest to the subscription) to highest level. */
  managementGroups?: ReadonlyArray<AzureManagementGroup>;
  /** The Azure resource group associated with the resource. */
  resourceGroup?: AzureResourceGroup;
  /** The Azure Entra tenant associated with the resource. */
  tenant?: AzureTenant;
}

export const AzureMetadata: Schema.Schema<AzureMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(AzureSubscription),
    managementGroups: Schema.optional(Schema.Array(AzureManagementGroup)),
    resourceGroup: Schema.optional(AzureResourceGroup),
    tenant: Schema.optional(AzureTenant),
  }).annotate({ identifier: "AzureMetadata" });

export interface AdcSharedTemplateRevision {
  /** The resource name of an ADC Shared Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const AdcSharedTemplateRevision: Schema.Schema<AdcSharedTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcSharedTemplateRevision" });

export interface AdcApplicationTemplateRevision {
  /** The resource name of an ADC Application Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const AdcApplicationTemplateRevision: Schema.Schema<AdcApplicationTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcApplicationTemplateRevision" });

export interface Folder {
  /** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceFolder?: string;
  /** The user defined display name for this folder. */
  resourceFolderDisplayName?: string;
}

export const Folder: Schema.Schema<Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

export interface GoogleCloudSecuritycenterV1ResourceApplication {
  /** The resource name of an Application. Format: `projects/{host-project-id}/locations/{location}/applications/{application-id}` */
  name?: string;
  /** Consumer provided attributes for the application */
  attributes?: GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV1ResourceApplication: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceApplication" });

export interface AwsOrganization {
  /** The unique identifier (ID) for the organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits. */
  id?: string;
}

export const AwsOrganization: Schema.Schema<AwsOrganization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganization" });

export interface AwsOrganizationalUnit {
  /** The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. For example, "ou-ab12-cd34ef56". */
  id?: string;
  /** The friendly name of the OU. */
  name?: string;
}

export const AwsOrganizationalUnit: Schema.Schema<AwsOrganizationalUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganizationalUnit" });

export interface AwsAccount {
  /** The unique identifier (ID) of the account, containing exactly 12 digits. */
  id?: string;
  /** The friendly name of this account. */
  name?: string;
}

export const AwsAccount: Schema.Schema<AwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsAccount" });

export interface AwsMetadata {
  /** The AWS organization associated with the resource. */
  organization?: AwsOrganization;
  /** A list of AWS organizational units associated with the resource, ordered from lowest level (closest to the account) to highest level. */
  organizationalUnits?: ReadonlyArray<AwsOrganizationalUnit>;
  /** The AWS account associated with the resource. */
  account?: AwsAccount;
}

export const AwsMetadata: Schema.Schema<AwsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.optional(AwsOrganization),
    organizationalUnits: Schema.optional(Schema.Array(AwsOrganizationalUnit)),
    account: Schema.optional(AwsAccount),
  }).annotate({ identifier: "AwsMetadata" });

export interface ResourcePathNode {
  /** The ID of the resource this node represents. */
  id?: string;
  /** The display name of the resource this node represents. */
  displayName?: string;
  /** The type of resource this node represents. */
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

export const ResourcePathNode: Schema.Schema<ResourcePathNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    nodeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourcePathNode" });

export interface ResourcePath {
  /** The list of nodes that make the up resource path, ordered from lowest level to highest level. */
  nodes?: ReadonlyArray<ResourcePathNode>;
}

export const ResourcePath: Schema.Schema<ResourcePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(ResourcePathNode)),
  }).annotate({ identifier: "ResourcePath" });

export interface Resource {
  /** The ADC application associated with the finding. */
  adcApplication?: AdcApplication;
  /** The region or location of the service (if applicable). */
  location?: string;
  /** The Azure metadata associated with the finding. */
  azureMetadata?: AzureMetadata;
  /** The full resource type of the resource. */
  type?: string;
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: AdcSharedTemplateRevision;
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
  /** Indicates which organization / tenant the finding is for. */
  organization?: string;
  /** The full resource name of project that the resource belongs to. */
  projectName?: string;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: AdcApplicationTemplateRevision;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
  /** The full resource name of resource's parent. */
  parentName?: string;
  /** The service or resource provider associated with the resource. */
  service?: string;
  /** The human readable name of the resource. */
  displayName?: string;
  /** The project ID that the resource belongs to. */
  projectDisplayName?: string;
  /** Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<Folder>;
  /** Indicates which cloud provider the finding is from. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The App Hub application this resource belongs to. */
  application?: GoogleCloudSecuritycenterV1ResourceApplication;
  /** The AWS metadata associated with the finding. */
  awsMetadata?: AwsMetadata;
  /** Provides the path to the resource within the resource hierarchy. */
  resourcePath?: ResourcePath;
  /** A string representation of the resource path. For Google Cloud, it has the format of `org/{organization_id}/folder/{folder_id}/folder/{folder_id}/project/{project_id}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id}/ou/{organizational_unit_id}/ou/{organizational_unit_id}/account/{account_id}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id}/mg/{management_group_id}/subscription/{subscription_id}/rg/{resource_group_name}` where there can be any number of management groups. */
  resourcePathString?: string;
}

export const Resource: Schema.Schema<Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adcApplication: Schema.optional(AdcApplication),
    location: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(AzureMetadata),
    type: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(AdcSharedTemplateRevision),
    name: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    projectName: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(AdcApplicationTemplateRevision),
    parentDisplayName: Schema.optional(Schema.String),
    parentName: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(Folder)),
    cloudProvider: Schema.optional(Schema.String),
    application: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplication,
    ),
    awsMetadata: Schema.optional(AwsMetadata),
    resourcePath: Schema.optional(ResourcePath),
    resourcePathString: Schema.optional(Schema.String),
  }).annotate({ identifier: "Resource" });

export interface PolicyViolationSummary {
  /** Count of child resources in violation of the policy. */
  policyViolationsCount?: string;
  /** Total number of child resources that conform to the policy. */
  conformantResourcesCount?: string;
  /** Total count of child resources which were not in scope for evaluation. */
  outOfScopeResourcesCount?: string;
  /** Number of child resources for which errors during evaluation occurred. The evaluation result for these child resources is effectively "unknown". */
  evaluationErrorsCount?: string;
}

export const PolicyViolationSummary: Schema.Schema<PolicyViolationSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyViolationsCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    evaluationErrorsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyViolationSummary" });

export interface Geolocation {
  /** A CLDR. */
  regionCode?: string;
}

export const Geolocation: Schema.Schema<Geolocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Geolocation" });

export interface ServiceAccountDelegationInfo {
  /** The email address of a Google account. */
  principalEmail?: string;
  /** A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
  principalSubject?: string;
}

export const ServiceAccountDelegationInfo: Schema.Schema<ServiceAccountDelegationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccountDelegationInfo" });

export interface Access {
  /** The method that the service account called, e.g. "SetIamPolicy". */
  methodName?: string;
  /** A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`. */
  principalSubject?: string;
  /** Caller's IP address, such as "1.1.1.1". */
  callerIp?: string;
  /** The caller's user agent string associated with the finding. */
  userAgent?: string;
  /** This is the API service that the service account made a call to, e.g. "iam.googleapis.com" */
  serviceName?: string;
  /** The caller IP's geolocation, which identifies where the call came from. */
  callerIpGeo?: Geolocation;
  /** Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. */
  userAgentFamily?: string;
  /** Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
  principalEmail?: string;
  /** The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
  serviceAccountDelegationInfo?: ReadonlyArray<ServiceAccountDelegationInfo>;
  /** A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. */
  userName?: string;
  /** The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". */
  serviceAccountKeyName?: string;
}

export const Access: Schema.Schema<Access> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    methodName: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    callerIpGeo: Schema.optional(Geolocation),
    userAgentFamily: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(ServiceAccountDelegationInfo),
    ),
    userName: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Access" });

export interface FileOperation {
  /** The type of the operation */
  type?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "OPEN"
    | "READ"
    | "RENAME"
    | "WRITE"
    | "EXECUTE"
    | (string & {});
}

export const FileOperation: Schema.Schema<FileOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileOperation" });

export interface DiskPath {
  /** UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) */
  partitionUuid?: string;
  /** Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh */
  relativePath?: string;
}

export const DiskPath: Schema.Schema<DiskPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionUuid: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskPath" });

export interface File {
  /** Operation(s) performed on a file. */
  operations?: ReadonlyArray<FileOperation>;
  /** The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file. */
  hashedSize?: string;
  /** Size of the file in bytes. */
  size?: string;
  /** SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file. */
  sha256?: string;
  /** The load state of the file. */
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  /** True when the hash covers only a prefix of the file. */
  partiallyHashed?: boolean;
  /** Absolute path of the file as a JSON encoded string. */
  path?: string;
  /** Prefix of the file contents as a JSON-encoded string. */
  contents?: string;
  /** Path of the file in terms of underlying disk/partition identifiers. */
  diskPath?: DiskPath;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(FileOperation)),
    hashedSize: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
    fileLoadState: Schema.optional(Schema.String),
    partiallyHashed: Schema.optional(Schema.Boolean),
    path: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
    diskPath: Schema.optional(DiskPath),
  }).annotate({ identifier: "File" });

export interface SecurityMarks {
  /** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
  canonicalName?: string;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name?: string;
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
}

export const SecurityMarks: Schema.Schema<SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "SecurityMarks" });

export interface Label {
  /** Name of the label. */
  name?: string;
  /** Value that corresponds to the label's name. */
  value?: string;
}

export const Label: Schema.Schema<Label> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Label" });

export interface Container {
  /** The time that the container was created. */
  createTime?: string;
  /** Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. */
  uri?: string;
  /** Container labels, as provided by the container runtime. */
  labels?: ReadonlyArray<Label>;
  /** Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. */
  imageId?: string;
  /** Name of the container. */
  name?: string;
}

export const Container: Schema.Schema<Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Label)),
    imageId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Container" });

export interface Pod {
  /** Kubernetes Pod namespace. */
  ns?: string;
  /** Pod labels. For Kubernetes containers, these are applied to the container. */
  labels?: ReadonlyArray<Label>;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<Container>;
  /** Kubernetes Pod name. */
  name?: string;
}

export const Pod: Schema.Schema<Pod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Label)),
    containers: Schema.optional(Schema.Array(Container)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pod" });

export interface Role {
  /** Role namespace. */
  ns?: string;
  /** Role type. */
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  /** Role name. */
  name?: string;
}

export const Role: Schema.Schema<Role> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Role" });

export interface Subject {
  /** Namespace for the subject. */
  ns?: string;
  /** Authentication type for the subject. */
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  /** Name for the subject. */
  name?: string;
}

export const Subject: Schema.Schema<Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subject" });

export interface GoogleCloudSecuritycenterV1Binding {
  /** The Role or ClusterRole referenced by the binding. */
  role?: Role;
  /** Namespace for the binding. */
  ns?: string;
  /** Name for the binding. */
  name?: string;
  /** Represents one or more subjects that are bound to the role. Not always available for PATCH requests. */
  subjects?: ReadonlyArray<Subject>;
}

export const GoogleCloudSecuritycenterV1Binding: Schema.Schema<GoogleCloudSecuritycenterV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Role),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    subjects: Schema.optional(Schema.Array(Subject)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Binding" });

export interface Securitycenter_Object {
  /** Kubernetes object kind, such as "Namespace". */
  kind?: string;
  /** Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. */
  name?: string;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<Container>;
  /** Kubernetes object group, such as "policy.k8s.io/v1". */
  group?: string;
  /** Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. */
  ns?: string;
}

export const Securitycenter_Object: Schema.Schema<Securitycenter_Object> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(Container)),
    group: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "Securitycenter_Object" });

export interface Node {
  /** [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node. */
  name?: string;
}

export const Node: Schema.Schema<Node> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Node" });

export interface NodePool {
  /** Nodes associated with the finding. */
  nodes?: ReadonlyArray<Node>;
  /** Kubernetes node pool name. */
  name?: string;
}

export const NodePool: Schema.Schema<NodePool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(Node)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodePool" });

export interface AccessReview {
  /** The name of the resource being requested. Empty means all. */
  name?: string;
  /** The optional resource type requested. "*" means all. */
  resource?: string;
  /** The API version of the resource. "*" means all. */
  version?: string;
  /** The optional subresource type. */
  subresource?: string;
  /** The API group of the resource. "*" means all. */
  group?: string;
  /** Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty). */
  ns?: string;
  /** A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all. */
  verb?: string;
}

export const AccessReview: Schema.Schema<AccessReview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessReview" });

export interface Kubernetes {
  /** Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. */
  pods?: ReadonlyArray<Pod>;
  /** Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV1Binding>;
  /** Kubernetes objects related to the finding. */
  objects?: ReadonlyArray<Securitycenter_Object>;
  /** Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  roles?: ReadonlyArray<Role>;
  /** Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. */
  nodes?: ReadonlyArray<Node>;
  /** GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. */
  nodePools?: ReadonlyArray<NodePool>;
  /** Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. */
  accessReviews?: ReadonlyArray<AccessReview>;
}

export const Kubernetes: Schema.Schema<Kubernetes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pods: Schema.optional(Schema.Array(Pod)),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV1Binding)),
    objects: Schema.optional(Schema.Array(Securitycenter_Object)),
    roles: Schema.optional(Schema.Array(Role)),
    nodes: Schema.optional(Schema.Array(Node)),
    nodePools: Schema.optional(Schema.Array(NodePool)),
    accessReviews: Schema.optional(Schema.Array(AccessReview)),
  }).annotate({ identifier: "Kubernetes" });

export interface DiscoveredWorkload {
  /** A boolean flag set to true if associated hardware strongly predicts the workload type. */
  detectedRelevantHardware?: boolean;
  /** The confidence in detection of this workload. */
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
  /** A boolean flag set to true if installed packages strongly predict the workload type. */
  detectedRelevantPackages?: boolean;
  /** The type of workload. */
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  /** A boolean flag set to true if associated keywords strongly predict the workload type. */
  detectedRelevantKeywords?: boolean;
}

export const DiscoveredWorkload: Schema.Schema<DiscoveredWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.String),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    workloadType: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DiscoveredWorkload" });

export interface SensitivityScore {
  /** The sensitivity score applied to the resource. */
  score?:
    | "SENSITIVITY_SCORE_LEVEL_UNSPECIFIED"
    | "SENSITIVITY_LOW"
    | "SENSITIVITY_UNKNOWN"
    | "SENSITIVITY_MODERATE"
    | "SENSITIVITY_HIGH"
    | (string & {});
}

export const SensitivityScore: Schema.Schema<SensitivityScore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.String),
  }).annotate({ identifier: "SensitivityScore" });

export interface InfoType {
  /** Optional custom sensitivity for this InfoType. This only applies to data profiling. */
  sensitivityScore?: SensitivityScore;
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`. */
  name?: string;
  /** Optional version name for this InfoType. */
  version?: string;
}

export const InfoType: Schema.Schema<InfoType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sensitivityScore: Schema.optional(SensitivityScore),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "InfoType" });

export interface CloudDlpDataProfile {
  /** Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`. */
  dataProfile?: string;
  /** The resource hierarchy level at which the data profile was generated. */
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
  /** Type of information detected by SDP. Info type includes name, version and sensitivity of the detected information type. */
  infoTypes?: ReadonlyArray<InfoType>;
}

export const CloudDlpDataProfile: Schema.Schema<CloudDlpDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataProfile: Schema.optional(Schema.String),
    parentType: Schema.optional(Schema.String),
    infoTypes: Schema.optional(Schema.Array(InfoType)),
  }).annotate({ identifier: "CloudDlpDataProfile" });

export interface CloudDlpInspection {
  /** The number of times Cloud DLP found this infoType within this job and resource. */
  infoTypeCount?: string;
  /** Whether Cloud DLP scanned the complete resource or a sampled subset. */
  fullScan?: boolean;
  /** Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`. */
  inspectJob?: string;
  /** The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`. */
  infoType?: string;
}

export const CloudDlpInspection: Schema.Schema<CloudDlpInspection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypeCount: Schema.optional(Schema.String),
    fullScan: Schema.optional(Schema.Boolean),
    inspectJob: Schema.optional(Schema.String),
    infoType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudDlpInspection" });

export interface Detection {
  /** The name of the binary associated with the memory hash signature detection. */
  binary?: string;
  /** The percentage of memory page hashes in the signature that were matched. */
  percentPagesMatched?: number;
}

export const Detection: Schema.Schema<Detection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binary: Schema.optional(Schema.String),
    percentPagesMatched: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Detection" });

export interface MemoryHashSignature {
  /** The list of memory hash detections contributing to the binary family match. */
  detections?: ReadonlyArray<Detection>;
  /** The binary family. */
  binaryFamily?: string;
}

export const MemoryHashSignature: Schema.Schema<MemoryHashSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detections: Schema.optional(Schema.Array(Detection)),
    binaryFamily: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemoryHashSignature" });

export interface YaraRuleSignature {
  /** The name of the YARA rule. */
  yaraRule?: string;
}

export const YaraRuleSignature: Schema.Schema<YaraRuleSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "YaraRuleSignature" });

export interface ProcessSignature {
  /** Signature indicating that a binary family was matched. */
  memoryHashSignature?: MemoryHashSignature;
  /** Describes the type of resource associated with the signature. */
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
  /** Signature indicating that a YARA rule was matched. */
  yaraRuleSignature?: YaraRuleSignature;
}

export const ProcessSignature: Schema.Schema<ProcessSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memoryHashSignature: Schema.optional(MemoryHashSignature),
    signatureType: Schema.optional(Schema.String),
    yaraRuleSignature: Schema.optional(YaraRuleSignature),
  }).annotate({ identifier: "ProcessSignature" });

export interface Indicator {
  /** The list of matched signatures indicating that the given process is present in the environment. */
  signatures?: ReadonlyArray<ProcessSignature>;
  /** List of domains associated to the Finding. */
  domains?: ReadonlyArray<string>;
  /** The list of URIs associated to the Findings. */
  uris?: ReadonlyArray<string>;
  /** The list of IP addresses that are associated with the finding. */
  ipAddresses?: ReadonlyArray<string>;
}

export const Indicator: Schema.Schema<Indicator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signatures: Schema.optional(Schema.Array(ProcessSignature)),
    domains: Schema.optional(Schema.Array(Schema.String)),
    uris: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Indicator" });

export interface HttpResponse {
  /** The http response code returned by the web application, for example, 200. */
  statusCode?: string;
  /** The http path for which response code was returned by web application, for example, "https://test-app.a.run.app/test". */
  path?: string;
}

export const HttpResponse: Schema.Schema<HttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpResponse" });

export interface ExternalExposure {
  /** Public IP address of the exposed endpoint. */
  publicIpAddress?: string;
  /** The full resource name of the PSC (Private Service Connect) service attachment that the load balancer network endpoint group targets, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/serviceAttachments/{name}" */
  pscServiceAttachment?: string;
  /** The full resource name of load balancer backend service, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  backendService?: string;
  /** Private IP address of the exposed endpoint. */
  privateIpAddress?: string;
  /** The resource which is running the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/zones/{zone}/instances/{instance}.” */
  exposedEndpoint?: string;
  /** The full resource name of the load balancer firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  loadBalancerFirewallPolicy?: string;
  /** The http response returned by the web application. */
  httpResponse?: ReadonlyArray<HttpResponse>;
  /** Public port number of the exposed endpoint. */
  publicPort?: string;
  /** The full resource name of the network endpoint group, for example, "//compute.googleapis.com/projects/{project-id}/global/networkEndpointGroups/{name}". */
  networkEndpointGroup?: string;
  /** The full resource name of the load balancer backend bucket, for example, "//compute.googleapis.com/projects/{project-id}/global/backendBuckets/{name}" */
  backendBucket?: string;
  /** The full resource name of the instance group, for example, "//compute.googleapis.com/projects/{project-id}/global/instanceGroups/{name}". */
  instanceGroup?: string;
  /** The full resource name of the PSC (Private Service Connect) network attachment that network interface controller is attached to, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/networkAttachments/{name}" */
  pscNetworkAttachment?: string;
  /** The full resource name of the network ingress firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{name}". */
  networkIngressFirewallPolicy?: string;
  /** The full resource name of the firewall policy of the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  serviceFirewallPolicy?: string;
  /** The full resource name of the forwarding rule, for example, "//compute.googleapis.com/projects/{project-id}/global/forwardingRules/{forwarding-rule-name}". */
  forwardingRule?: string;
  /** The name and version of the exposed web application, for example, "Jenkins 2.184". */
  exposedApplication?: string;
  /** Port number associated with private IP address. */
  privatePort?: string;
  /** Hostname of the exposed application, for example, "https://test-app.a.run.app/" */
  hostnameUri?: string;
  /** The name and version of the service, for example, "Jupyter Notebook 6.14.0". */
  exposedService?: string;
  /** The full resource name of load balancer backend service in the internal project having resource exposed via PSC, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  internalBackendService?: string;
}

export const ExternalExposure: Schema.Schema<ExternalExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicIpAddress: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    httpResponse: Schema.optional(Schema.Array(HttpResponse)),
    publicPort: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalExposure" });

export interface SecretFilePath {
  /** Path to the file. */
  path?: string;
}

export const SecretFilePath: Schema.Schema<SecretFilePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretFilePath" });

export interface SecretStatus {
  /** The validity of the secret. */
  validity?:
    | "SECRET_VALIDITY_UNSPECIFIED"
    | "SECRET_VALIDITY_UNSUPPORTED"
    | "SECRET_VALIDITY_FAILED"
    | "SECRET_VALIDITY_INVALID"
    | "SECRET_VALIDITY_VALID"
    | (string & {});
  /** Time that the secret was found. */
  lastUpdatedTime?: string;
}

export const SecretStatus: Schema.Schema<SecretStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validity: Schema.optional(Schema.String),
    lastUpdatedTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretStatus" });

export interface SecretEnvironmentVariable {
  /** Environment variable name as a JSON encoded string. Note that value is not included since the value contains the secret data, which is sensitive core content. */
  key?: string;
}

export const SecretEnvironmentVariable: Schema.Schema<SecretEnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretEnvironmentVariable" });

export interface Secret {
  /** The type of secret, for example, GCP_API_KEY. */
  type?: string;
  /** The file containing the secret. */
  filePath?: SecretFilePath;
  /** The status of the secret. */
  status?: SecretStatus;
  /** The environment variable containing the secret. */
  environmentVariable?: SecretEnvironmentVariable;
}

export const Secret: Schema.Schema<Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    filePath: Schema.optional(SecretFilePath),
    status: Schema.optional(SecretStatus),
    environmentVariable: Schema.optional(SecretEnvironmentVariable),
  }).annotate({ identifier: "Secret" });

export interface StaticMute {
  /** The static mute state. If the value is `MUTED` or `UNMUTED`, then the finding's overall mute state will have the same value. */
  state?:
    | "MUTE_UNSPECIFIED"
    | "MUTED"
    | "UNMUTED"
    | "UNDEFINED"
    | (string & {});
  /** When the static mute was applied. */
  applyTime?: string;
}

export const StaticMute: Schema.Schema<StaticMute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    applyTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "StaticMute" });

export interface DynamicMuteRecord {
  /** The relative resource name of the mute rule, represented by a mute config, that created this record, for example `organizations/123/muteConfigs/mymuteconfig` or `organizations/123/locations/global/muteConfigs/mymuteconfig`. */
  muteConfig?: string;
  /** When the dynamic mute rule first matched the finding. */
  matchTime?: string;
}

export const DynamicMuteRecord: Schema.Schema<DynamicMuteRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteConfig: Schema.optional(Schema.String),
    matchTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicMuteRecord" });

export interface MuteInfo {
  /** If set, the static mute applied to this finding. Static mutes override dynamic mutes. If unset, there is no static mute. */
  staticMute?: StaticMute;
  /** The list of dynamic mute rules that currently match the finding. */
  dynamicMuteRecords?: ReadonlyArray<DynamicMuteRecord>;
}

export const MuteInfo: Schema.Schema<MuteInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    staticMute: Schema.optional(StaticMute),
    dynamicMuteRecords: Schema.optional(Schema.Array(DynamicMuteRecord)),
  }).annotate({ identifier: "MuteInfo" });

export interface Disk {
  /** The name of the disk, for example, "https://www.googleapis.com/compute/v1/projects/{project-id}/zones/{zone-id}/disks/{disk-id}". */
  name?: string;
}

export const Disk: Schema.Schema<Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

export interface Network {
  /** The name of the VPC network resource, for example, `//compute.googleapis.com/projects/my-project/global/networks/my-network`. */
  name?: string;
}

export const Network: Schema.Schema<Network> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Network" });

export interface Pipeline {
  /** Resource name of the pipeline, e.g. projects/{project}/locations/{location}/trainingPipelines/5253428229225578496 */
  name?: string;
  /** The user defined display name of pipeline, e.g. plants-classification */
  displayName?: string;
}

export const Pipeline: Schema.Schema<Pipeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pipeline" });

export interface Dataset {
  /** Resource name of the dataset, e.g. projects/{project}/locations/{location}/datasets/2094040236064505856 */
  name?: string;
  /** Data source, such as BigQuery source URI, e.g. bq://scc-nexus-test.AIPPtest.gsod */
  source?: string;
  /** The user defined display name of dataset, e.g. plants-dataset */
  displayName?: string;
}

export const Dataset: Schema.Schema<Dataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dataset" });

export interface VertexAi {
  /** Pipelines associated with the finding. */
  pipelines?: ReadonlyArray<Pipeline>;
  /** Datasets associated with the finding. */
  datasets?: ReadonlyArray<Dataset>;
}

export const VertexAi: Schema.Schema<VertexAi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pipelines: Schema.optional(Schema.Array(Pipeline)),
    datasets: Schema.optional(Schema.Array(Dataset)),
  }).annotate({ identifier: "VertexAi" });

export interface EnvironmentVariable {
  /** Environment variable name as a JSON encoded string. */
  name?: string;
  /** Environment variable value as a JSON encoded string. */
  val?: string;
}

export const EnvironmentVariable: Schema.Schema<EnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    val: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvironmentVariable" });

export interface Process {
  /** File information for libraries loaded by the process. */
  libraries?: ReadonlyArray<File>;
  /** The process ID. */
  pid?: string;
  /** Process arguments as JSON encoded strings. */
  args?: ReadonlyArray<string>;
  /** The parent process ID. */
  parentPid?: string;
  /** True if `args` is incomplete. */
  argumentsTruncated?: boolean;
  /** Process environment variables. */
  envVariables?: ReadonlyArray<EnvironmentVariable>;
  /** The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`. */
  name?: string;
  /** The ID of the user that executed the process. E.g. If this is the root user this will always be 0. */
  userId?: string;
  /** File information for the process executable. */
  binary?: File;
  /** When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter. */
  script?: File;
  /** True if `env_variables` is incomplete. */
  envVariablesTruncated?: boolean;
}

export const Process: Schema.Schema<Process> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    libraries: Schema.optional(Schema.Array(File)),
    pid: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    parentPid: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    envVariables: Schema.optional(Schema.Array(EnvironmentVariable)),
    name: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    binary: Schema.optional(File),
    script: Schema.optional(File),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Process" });

export interface Database {
  /** The username used to connect to the database. The username might not be an IAM principal and does not have a set format. */
  userName?: string;
  /** Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. */
  name?: string;
  /** The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
  version?: string;
  /** The human-readable name of the database that the user connected to. */
  displayName?: string;
  /** The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change. */
  grantees?: ReadonlyArray<string>;
  /** The SQL statement that is associated with the database access. */
  query?: string;
}

export const Database: Schema.Schema<Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "Database" });

export interface PortRange {
  /** Minimum port value. */
  min?: string;
  /** Maximum port value. */
  max?: string;
}

export const PortRange: Schema.Schema<PortRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    min: Schema.optional(Schema.String),
    max: Schema.optional(Schema.String),
  }).annotate({ identifier: "PortRange" });

export interface IpRule {
  /** The IP protocol this rule applies to. This value can either be one of the following well known protocol strings (TCP, UDP, ICMP, ESP, AH, IPIP, SCTP) or a string representation of the integer value. */
  protocol?: string;
  /** Optional. An optional list of ports to which this rule applies. This field is only applicable for the UDP or (S)TCP protocols. Each entry must be either an integer or a range including a min and max port number. */
  portRanges?: ReadonlyArray<PortRange>;
}

export const IpRule: Schema.Schema<IpRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    portRanges: Schema.optional(Schema.Array(PortRange)),
  }).annotate({ identifier: "IpRule" });

export interface Allowed {
  /** Optional. Optional list of allowed IP rules. */
  ipRules?: ReadonlyArray<IpRule>;
}

export const Allowed: Schema.Schema<Allowed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(IpRule)),
  }).annotate({ identifier: "Allowed" });

export interface Denied {
  /** Optional. Optional list of denied IP rules. */
  ipRules?: ReadonlyArray<IpRule>;
}

export const Denied: Schema.Schema<Denied> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(IpRule)),
  }).annotate({ identifier: "Denied" });

export interface IpRules {
  /** The direction that the rule is applicable to, one of ingress or egress. */
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  /** Tuple with allowed rules. */
  allowed?: Allowed;
  /** Name of the network protocol service, such as FTP, that is exposed by the open port. Follows the naming convention available at: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml. */
  exposedServices?: ReadonlyArray<string>;
  /** If destination IP ranges are specified, the firewall rule applies only to traffic that has a destination IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  destinationIpRanges?: ReadonlyArray<string>;
  /** Tuple with denied rules. */
  denied?: Denied;
  /** If source IP ranges are specified, the firewall rule applies only to traffic that has a source IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  sourceIpRanges?: ReadonlyArray<string>;
}

export const IpRules: Schema.Schema<IpRules> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    direction: Schema.optional(Schema.String),
    allowed: Schema.optional(Allowed),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    denied: Schema.optional(Denied),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IpRules" });

export interface AiModel {
  /** The purpose of the model, for example, "Inteference" or "Training". */
  usageCategory?: string;
  /** The platform on which the model is deployed. */
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  /** The domain of the model, for example, “image-classification”. */
  domain?: string;
  /** The name of the model library, for example, “transformers”. */
  library?: string;
  /** The name of the AI model, for example, "gemini:1.0.0". */
  name?: string;
  /** The region in which the model is used, for example, “us-central1”. */
  location?: string;
  /** The publisher of the model, for example, “google” or “nvidia”. */
  publisher?: string;
  /** The user defined display name of model. Ex. baseline-classification-model */
  displayName?: string;
}

export const AiModel: Schema.Schema<AiModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usageCategory: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AiModel" });

export interface MitreAttack {
  /** The MITRE ATT&CK tactic most closely represented by this finding, if any. */
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
  /** The MITRE ATT&CK version referenced by the above fields. E.g. "8". */
  version?: string;
  /** The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`). */
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
  /** Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques. */
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
  /** Additional MITRE ATT&CK tactics related to this finding, if any. */
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

export const MitreAttack: Schema.Schema<MitreAttack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryTactic: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "MitreAttack" });

export interface Connection {
  /** Source IP address. */
  sourceIp?: string;
  /** Source port. */
  sourcePort?: number;
  /** Destination IP address. Not present for sockets that are listening and not connected. */
  destinationIp?: string;
  /** Destination port. Not present for sockets that are listening and not connected. */
  destinationPort?: number;
  /** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
}

export const Connection: Schema.Schema<Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceIp: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
    destinationIp: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connection" });

export interface Compliance {
  /** Policies within the standard or benchmark, for example, A.12.4.1 */
  ids?: ReadonlyArray<string>;
  /** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
  standard?: string;
  /** Version of the standard or benchmark, for example, 1.1 */
  version?: string;
}

export const Compliance: Schema.Schema<Compliance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
    standard: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "Compliance" });

export interface AgentDataAccessEvent {
  /** Unique identifier for data access event. */
  eventId?: string;
  /** The agent principal that accessed the data. */
  principalSubject?: string;
  /** The operation performed by the principal to access the data. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data access event. */
  eventTime?: string;
}

export const AgentDataAccessEvent: Schema.Schema<AgentDataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentDataAccessEvent" });

export interface DataRetentionDeletionEvent {
  /** Min duration of retention allowed from the DSPM retention control. This field is only populated when event type is set to EVENT_TYPE_MIN_TTL_FROM_CREATION. */
  minRetentionAllowed?: string;
  /** Number of objects that violated the policy for this resource. If the number is less than 1,000, then the value of this field is the exact number. If the number of objects that violated the policy is greater than or equal to 1,000, then the value of this field is 1000. */
  dataObjectCount?: string;
  /** Timestamp indicating when the event was detected. */
  eventDetectionTime?: string;
  /** Type of the DRD event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
  /** Maximum duration of retention allowed from the DRD control. This comes from the DRD control where users set a max TTL for their data. For example, suppose that a user sets the max TTL for a Cloud Storage bucket to 90 days. However, an object in that bucket is 100 days old. In this case, a DataRetentionDeletionEvent will be generated for that Cloud Storage bucket, and the max_retention_allowed is 90 days. */
  maxRetentionAllowed?: string;
}

export const DataRetentionDeletionEvent: Schema.Schema<DataRetentionDeletionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataRetentionDeletionEvent" });

export interface Reference {
  /** Source of the reference e.g. NVD */
  source?: string;
  /** Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527. */
  uri?: string;
}

export const Reference: Schema.Schema<Reference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reference" });

export interface Cwe {
  /** The CWE identifier, e.g. CWE-94 */
  id?: string;
  /** Any reference to the details on the CWE, for example, https://cwe.mitre.org/data/definitions/94.html */
  references?: ReadonlyArray<Reference>;
}

export const Cwe: Schema.Schema<Cwe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    references: Schema.optional(Schema.Array(Reference)),
  }).annotate({ identifier: "Cwe" });

export interface Cvssv3 {
  /** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. */
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** This metric measures the impact to integrity of a successfully exploited vulnerability. */
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  /** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible. */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  /** This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. */
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | (string & {});
  /** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
}

export const Cvssv3: Schema.Schema<Cvssv3> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availabilityImpact: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    attackVector: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
  }).annotate({ identifier: "Cvssv3" });

export interface Cve {
  /** The potential impact of the vulnerability if it was to be exploited. */
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Date of the earliest known exploitation. */
  firstExploitationDate?: string;
  /** Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document */
  cvssv3?: Cvssv3;
  /** Whether upstream fix is available for the CVE. */
  upstreamFixAvailable?: boolean;
  /** Whether or not the vulnerability has been observed in the wild. */
  observedInTheWild?: boolean;
  /** Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527 */
  references?: ReadonlyArray<Reference>;
  /** Date the first publicly available exploit or PoC was released. */
  exploitReleaseDate?: string;
  /** The exploitation activity of the vulnerability in the wild. */
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  /** Whether or not the vulnerability was zero day when the finding was published. */
  zeroDay?: boolean;
  /** The unique identifier for the vulnerability. e.g. CVE-2021-34527 */
  id?: string;
}

export const Cve: Schema.Schema<Cve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    impact: Schema.optional(Schema.String),
    firstExploitationDate: Schema.optional(Schema.String),
    cvssv3: Schema.optional(Cvssv3),
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
    observedInTheWild: Schema.optional(Schema.Boolean),
    references: Schema.optional(Schema.Array(Reference)),
    exploitReleaseDate: Schema.optional(Schema.String),
    exploitationActivity: Schema.optional(Schema.String),
    zeroDay: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Cve" });

export interface Package {
  /** The name of the package where the vulnerability was detected. */
  packageName?: string;
  /** The CPE URI where the vulnerability was detected. */
  cpeUri?: string;
  /** Type of package, for example, os, maven, or go. */
  packageType?: string;
  /** The version of the package. */
  packageVersion?: string;
}

export const Package: Schema.Schema<Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface SecurityBulletin {
  /** ID of the bulletin corresponding to the vulnerability. */
  bulletinId?: string;
  /** This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 */
  suggestedUpgradeVersion?: string;
  /** Submission time of this Security Bulletin. */
  submissionTime?: string;
}

export const SecurityBulletin: Schema.Schema<SecurityBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityBulletin" });

export interface Vulnerability {
  /** Represents one or more Common Weakness Enumeration (CWE) information on this vulnerability. */
  cwes?: ReadonlyArray<Cwe>;
  /** Provider provided risk_score based on multiple factors. The higher the risk score, the more risky the vulnerability is. */
  providerRiskScore?: string;
  /** CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  cve?: Cve;
  /** The offending package is relevant to the finding. */
  offendingPackage?: Package;
  /** The fixed package is relevant to the finding. */
  fixedPackage?: Package;
  /** The security bulletin is relevant to this finding. */
  securityBulletin?: SecurityBulletin;
  /** Represents whether the vulnerability is reachable (detected via static analysis) */
  reachable?: boolean;
}

export const Vulnerability: Schema.Schema<Vulnerability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cwes: Schema.optional(Schema.Array(Cwe)),
    providerRiskScore: Schema.optional(Schema.String),
    cve: Schema.optional(Cve),
    offendingPackage: Schema.optional(Package),
    fixedPackage: Schema.optional(Package),
    securityBulletin: Schema.optional(SecurityBulletin),
    reachable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Vulnerability" });

export interface ExfilResource {
  /** The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name). */
  name?: string;
  /** Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket. */
  components?: ReadonlyArray<string>;
}

export const ExfilResource: Schema.Schema<ExfilResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ExfilResource" });

export interface Exfiltration {
  /** If there are multiple targets, each target would get a complete copy of the "joined" source data. */
  targets?: ReadonlyArray<ExfilResource>;
  /** If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source. */
  sources?: ReadonlyArray<ExfilResource>;
  /** Total exfiltrated bytes processed for the entire job. */
  totalExfiltratedBytes?: string;
}

export const Exfiltration: Schema.Schema<Exfiltration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targets: Schema.optional(Schema.Array(ExfilResource)),
    sources: Schema.optional(Schema.Array(ExfilResource)),
    totalExfiltratedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "Exfiltration" });

export interface KernelRootkit {
  /** Rootkit name, when available. */
  name?: string;
  /** True if kernel code pages that are not in the expected kernel or module code regions are present. */
  unexpectedKernelCodePages?: boolean;
  /** True if interrupt handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedInterruptHandler?: boolean;
  /** True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. */
  unexpectedProcessesInRunqueue?: boolean;
  /** True if unexpected modifications of kernel read-only data memory are present. */
  unexpectedReadOnlyDataModification?: boolean;
  /** True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedKprobeHandler?: boolean;
  /** True if unexpected modifications of kernel code memory are present. */
  unexpectedCodeModification?: boolean;
  /** True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedFtraceHandler?: boolean;
  /** True if system call handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedSystemCallHandler?: boolean;
}

export const KernelRootkit: Schema.Schema<KernelRootkit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KernelRootkit" });

export interface Control {
  /** Name of the Control */
  controlName?: string;
  /** Display name of the control. For example, AU-02. */
  displayName?: string;
}

export const Control: Schema.Schema<Control> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Control" });

export interface Framework {
  /** Category of the framework associated with the finding. E.g. Security Benchmark, or Assured Workloads */
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
  /** Display name of the framework. For a standard framework, this will look like e.g. PCI DSS 3.2.1, whereas for a custom framework it can be a user defined string like MyFramework */
  displayName?: string;
  /** Type of the framework associated with the finding, to specify whether the framework is built-in (pre-defined and immutable) or a custom framework defined by the customer (equivalent to security posture) */
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
  /** Name of the framework associated with the finding */
  name?: string;
  /** The controls associated with the framework. */
  controls?: ReadonlyArray<Control>;
}

export const Framework: Schema.Schema<Framework> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    controls: Schema.optional(Schema.Array(Control)),
  }).annotate({ identifier: "Framework" });

export interface CloudControl {
  /** Name of the CloudControl associated with the finding. */
  cloudControlName?: string;
  /** Type of cloud control. */
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
  /** Version of the Cloud Control */
  version?: number;
  /** Policy type of the CloudControl */
  policyType?: string;
}

export const CloudControl: Schema.Schema<CloudControl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudControlName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    policyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudControl" });

export interface ComplianceDetails {
  /** Details of Frameworks associated with the finding */
  frameworks?: ReadonlyArray<Framework>;
  /** CloudControl associated with the finding */
  cloudControl?: CloudControl;
  /** Cloud Control Deployments associated with the finding. For example, organizations/123/locations/global/cloudControlDeployments/deploymentIdentifier */
  cloudControlDeploymentNames?: ReadonlyArray<string>;
}

export const ComplianceDetails: Schema.Schema<ComplianceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frameworks: Schema.optional(Schema.Array(Framework)),
    cloudControl: Schema.optional(CloudControl),
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ComplianceDetails" });

export interface PolicyDriftDetails {
  /** The value of this field that was configured in a posture, for example, `true` or `allowed_values={"projects/29831892"}`. */
  expectedValue?: string;
  /** The name of the updated field, for example constraint.implementation.policy_rules[0].enforce */
  field?: string;
  /** The detected value that violates the deployed posture, for example, `false` or `allowed_values={"projects/22831892"}`. */
  detectedValue?: string;
}

export const PolicyDriftDetails: Schema.Schema<PolicyDriftDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expectedValue: Schema.optional(Schema.String),
    field: Schema.optional(Schema.String),
    detectedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyDriftDetails" });

export interface SecurityPosture {
  /** Name of the posture, for example, `CIS-Posture`. */
  name?: string;
  /** The version of the posture, for example, `c7cfa2a8`. */
  revisionId?: string;
  /** The name of the updated policy, for example, `projects/{project_id}/policies/{constraint_name}`. */
  changedPolicy?: string;
  /** The ID of the updated policy, for example, `compute-policy-1`. */
  policy?: string;
  /** The project, folder, or organization on which the posture is deployed, for example, `projects/{project_number}`. */
  postureDeploymentResource?: string;
  /** The name of the posture deployment, for example, `organizations/{org_id}/posturedeployments/{posture_deployment_id}`. */
  postureDeployment?: string;
  /** The details about a change in an updated policy that violates the deployed posture. */
  policyDriftDetails?: ReadonlyArray<PolicyDriftDetails>;
  /** The name of the updated policyset, for example, `cis-policyset`. */
  policySet?: string;
}

export const SecurityPosture: Schema.Schema<SecurityPosture> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    postureDeploymentResource: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(Schema.Array(PolicyDriftDetails)),
    policySet: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPosture" });

export interface Attack {
  /** Total BPS (bytes per second) volume of attack. */
  volumeBpsLong?: string;
  /** Total BPS (bytes per second) volume of attack. Deprecated - refer to volume_bps_long instead. */
  volumeBps?: number;
  /** Total PPS (packets per second) volume of attack. */
  volumePpsLong?: string;
  /** Total PPS (packets per second) volume of attack. Deprecated - refer to volume_pps_long instead. */
  volumePps?: number;
  /** Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'. */
  classification?: string;
}

export const Attack: Schema.Schema<Attack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeBpsLong: Schema.optional(Schema.String),
    volumeBps: Schema.optional(Schema.Number),
    volumePpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    classification: Schema.optional(Schema.String),
  }).annotate({ identifier: "Attack" });

export interface AdaptiveProtection {
  /** A score of 0 means that there is low confidence that the detected event is an actual attack. A score of 1 means that there is high confidence that the detected event is an attack. See the [Adaptive Protection documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning) for further explanation. */
  confidence?: number;
}

export const AdaptiveProtection: Schema.Schema<AdaptiveProtection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AdaptiveProtection" });

export interface SecurityPolicy {
  /** The name of the Google Cloud Armor security policy, for example, "my-security-policy". */
  name?: string;
  /** The type of Google Cloud Armor security policy for example, 'backend security policy', 'edge security policy', 'network edge security policy', or 'always-on DDoS protection'. */
  type?: string;
  /** Whether or not the associated rule or policy is in preview mode. */
  preview?: boolean;
}

export const SecurityPolicy: Schema.Schema<SecurityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    preview: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SecurityPolicy" });

export interface Requests {
  /** For 'Increasing deny ratio', the ratio is the denied traffic divided by the allowed traffic. For 'Allowed traffic spike', the ratio is the allowed traffic in the short term divided by allowed traffic in the long term. */
  ratio?: number;
  /** Allowed RPS (requests per second) in the short term. */
  shortTermAllowed?: number;
  /** Denied RPS (requests per second) over the long term. */
  longTermDenied?: number;
  /** Allowed RPS (requests per second) over the long term. */
  longTermAllowed?: number;
}

export const Requests: Schema.Schema<Requests> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ratio: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Requests" });

export interface CloudArmor {
  /** Information about DDoS attack volume and classification. */
  attack?: Attack;
  /** Information about potential Layer 7 DDoS attacks identified by [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview). */
  adaptiveProtection?: AdaptiveProtection;
  /** Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding. */
  securityPolicy?: SecurityPolicy;
  /** Information about incoming requests evaluated by [Google Cloud Armor security policies](https://cloud.google.com/armor/docs/security-policy-overview). */
  requests?: Requests;
  /** Distinguish between volumetric & protocol DDoS attack and application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS attacks, or "L_7" for Layer 7 DDoS attacks. */
  threatVector?: string;
  /** Duration of attack from the start until the current moment (updated every 5 minutes). */
  duration?: string;
}

export const CloudArmor: Schema.Schema<CloudArmor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attack: Schema.optional(Attack),
    adaptiveProtection: Schema.optional(AdaptiveProtection),
    securityPolicy: Schema.optional(SecurityPolicy),
    requests: Schema.optional(Requests),
    threatVector: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudArmor" });

export interface ToxicCombination {
  /** The [Attack exposure score](https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_exposure_scores) of this toxic combination. The score is a measure of how much this toxic combination exposes one or more high-value resources to potential attack. */
  attackExposureScore?: number;
  /** List of resource names of findings associated with this toxic combination. For example, `organizations/123/sources/456/findings/789`. */
  relatedFindings?: ReadonlyArray<string>;
}

export const ToxicCombination: Schema.Schema<ToxicCombination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attackExposureScore: Schema.optional(Schema.Number),
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ToxicCombination" });

export interface AffectedResources {
  /** The count of resources affected by the finding. */
  count?: string;
}

export const AffectedResources: Schema.Schema<AffectedResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AffectedResources" });

export interface OrgPolicy {
  /** The resource name of the org policy. Example: "organizations/{organization_id}/policies/{constraint_name}" */
  name?: string;
}

export const OrgPolicy: Schema.Schema<OrgPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrgPolicy" });

export interface CloudLoggingEntry {
  /** The organization, folder, or project of the monitored resource that produced this log entry. */
  resourceContainer?: string;
  /** The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity`. Note that this field is not URL-encoded, unlike the `LOG_ID` field in `LogEntry`. */
  logId?: string;
  /** A unique identifier for the log entry. */
  insertId?: string;
  /** The time the event described by the log entry occurred. */
  timestamp?: string;
}

export const CloudLoggingEntry: Schema.Schema<CloudLoggingEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceContainer: Schema.optional(Schema.String),
    logId: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudLoggingEntry" });

export interface LogEntry {
  /** An individual entry in a log stored in Cloud Logging. */
  cloudLoggingEntry?: CloudLoggingEntry;
}

export const LogEntry: Schema.Schema<LogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudLoggingEntry: Schema.optional(CloudLoggingEntry),
  }).annotate({ identifier: "LogEntry" });

export interface AttackExposure {
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedLowValueResourcesCount?: number;
  /** The most recent time the attack exposure was updated on this finding. */
  latestCalculationTime?: string;
  /** The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: `organizations/123/simulations/456/attackExposureResults/789` */
  attackExposureResult?: string;
  /** What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. */
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedHighValueResourcesCount?: number;
  /** The number of medium value resources that are exposed as a result of this finding. */
  exposedMediumValueResourcesCount?: number;
  /** A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate. */
  score?: number;
}

export const AttackExposure: Schema.Schema<AttackExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
    latestCalculationTime: Schema.optional(Schema.String),
    attackExposureResult: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AttackExposure" });

export interface LoadBalancer {
  /** The name of the load balancer associated with the finding. */
  name?: string;
}

export const LoadBalancer: Schema.Schema<LoadBalancer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoadBalancer" });

export interface Contact {
  /** An email address. For example, "`person123@company.com`". */
  email?: string;
}

export const Contact: Schema.Schema<Contact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Contact" });

export interface ContactDetails {
  /** A list of contacts */
  contacts?: ReadonlyArray<Contact>;
}

export const ContactDetails: Schema.Schema<ContactDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(Contact)),
  }).annotate({ identifier: "ContactDetails" });

export interface Chokepoint {
  /** List of resource names of findings associated with this chokepoint. For example, organizations/123/sources/456/findings/789. This list will have at most 100 findings. */
  relatedFindings?: ReadonlyArray<string>;
}

export const Chokepoint: Schema.Schema<Chokepoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Chokepoint" });

export interface BackupDisasterRecovery {
  /** The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, `skipofflineappsincongrp, nounmap`. */
  policyOptions?: ReadonlyArray<string>;
  /** The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, `centos7-01-vol00`, `centos7-01-vol01`, `centos7-01-vol02`. */
  applications?: ReadonlyArray<string>;
  /** The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, `backup-server-57137`. */
  appliance?: string;
  /** The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, `centos7-01`. */
  host?: string;
  /** The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, `onvaults`. */
  policies?: ReadonlyArray<string>;
  /** The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, `GCP`. */
  profile?: string;
  /** The backup type of the Backup and DR image. For example, `Snapshot`, `Remote Snapshot`, `OnVault`. */
  backupType?: string;
  /** The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, `DiskPoolOne`. */
  storagePool?: string;
  /** The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, `snap-ov`. */
  backupTemplate?: string;
  /** The timestamp at which the Backup and DR backup was created. */
  backupCreateTime?: string;
}

export const BackupDisasterRecovery: Schema.Schema<BackupDisasterRecovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    applications: Schema.optional(Schema.Array(Schema.String)),
    appliance: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    profile: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    backupCreateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDisasterRecovery" });

export interface GroupMembership {
  /** ID of the group. */
  groupId?: string;
  /** Type of group. */
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
}

export const GroupMembership: Schema.Schema<GroupMembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    groupType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupMembership" });

export interface Job {
  /** Optional. If the job did not complete successfully, this field describes why. */
  errorCode?: number;
  /** The fully-qualified name for a job. e.g. `projects//jobs/` */
  name?: string;
  /** Output only. State of the job, such as `RUNNING` or `PENDING`. */
  state?:
    | "JOB_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Optional. Gives the location where the job ran, such as `US` or `europe-west1` */
  location?: string;
}

export const Job: Schema.Schema<Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCode: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Job" });

export interface DataFlowEvent {
  /** The email address of the principal that initiated the data flow event. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
  /** Non-compliant location of the principal or the data destination. */
  violatedLocation?: string;
  /** Unique identifier for data flow event. */
  eventId?: string;
  /** The operation performed by the principal for the data flow event. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data flow event. */
  eventTime?: string;
}

export const DataFlowEvent: Schema.Schema<DataFlowEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataFlowEvent" });

export interface DataAccessEvent {
  /** Unique identifier for data access event. */
  eventId?: string;
  /** The email address of the principal that accessed the data. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
  /** The operation performed by the principal to access the data. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data access event. */
  eventTime?: string;
}

export const DataAccessEvent: Schema.Schema<DataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataAccessEvent" });

export interface Notebook {
  /** The most recent time the notebook was updated. */
  notebookUpdateTime?: string;
  /** The name of the notebook. */
  name?: string;
  /** The source notebook service, for example, "Colab Enterprise". */
  service?: string;
  /** The user ID of the latest author to modify the notebook. */
  lastAuthor?: string;
}

export const Notebook: Schema.Schema<Notebook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notebookUpdateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
  }).annotate({ identifier: "Notebook" });

export interface Application {
  /** The base URI that identifies the network location of the application in which the vulnerability was detected. For example, `http://example.com`. */
  baseUri?: string;
  /** The full URI with payload that can be used to reproduce the vulnerability. For example, `http://example.com?p=aMmYgI6H`. */
  fullUri?: string;
}

export const Application: Schema.Schema<Application> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Application" });

export interface IamBinding {
  /** The action that was performed on a Binding. */
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  /** Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner". */
  role?: string;
  /** A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com". */
  member?: string;
}

export const IamBinding: Schema.Schema<IamBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamBinding" });

export interface TicketInfo {
  /** The time when the ticket was last updated, as reported by the ticket system. */
  updateTime?: string;
  /** The assignee of the ticket in the ticket system. */
  assignee?: string;
  /** The link to the ticket in the ticket system. */
  uri?: string;
  /** The identifier of the ticket in the ticket system. */
  id?: string;
  /** The description of the ticket in the ticket system. */
  description?: string;
  /** The latest status of the ticket, as reported by the ticket system. */
  status?: string;
}

export const TicketInfo: Schema.Schema<TicketInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "TicketInfo" });

export interface GoogleCloudSecuritycenterV1ExternalSystem {
  /** The identifier that's used to track the finding's corresponding case in the external system. */
  externalUid?: string;
  /** Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira" */
  name?: string;
  /** The SLA of the finding's corresponding case in the external system. */
  caseSla?: string;
  /** References primary/secondary etc assignees in the external system. */
  assignees?: ReadonlyArray<string>;
  /** The time when the case was last updated, as reported by the external system. */
  externalSystemUpdateTime?: string;
  /** The time when the case was created, as reported by the external system. */
  caseCreateTime?: string;
  /** The priority of the finding's corresponding case in the external system. */
  casePriority?: string;
  /** The most recent status of the finding's corresponding case, as reported by the external system. */
  status?: string;
  /** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
  ticketInfo?: TicketInfo;
  /** The link to the finding's corresponding case in the external system. */
  caseUri?: string;
  /** The time when the case was closed, as reported by the external system. */
  caseCloseTime?: string;
}

export const GoogleCloudSecuritycenterV1ExternalSystem: Schema.Schema<GoogleCloudSecuritycenterV1ExternalSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalUid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    caseCreateTime: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(TicketInfo),
    caseUri: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ExternalSystem" });

export interface ArtifactGuardPolicy {
  /** The type of the policy evaluation. */
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
  /** The ID of the failing policy, for example, "organizations/3392779/locations/global/policies/prod-policy". */
  policyId?: string;
  /** The reason for the policy failure, for example, "severity=HIGH AND max_vuln_count=2". */
  failureReason?: string;
}

export const ArtifactGuardPolicy: Schema.Schema<ArtifactGuardPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    policyId: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactGuardPolicy" });

export interface ArtifactGuardPolicies {
  /** The ID of the resource that has policies configured for it. */
  resourceId?: string;
  /** A list of failing policies. */
  failingPolicies?: ReadonlyArray<ArtifactGuardPolicy>;
}

export const ArtifactGuardPolicies: Schema.Schema<ArtifactGuardPolicies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    failingPolicies: Schema.optional(Schema.Array(ArtifactGuardPolicy)),
  }).annotate({ identifier: "ArtifactGuardPolicies" });

export interface Finding {
  /** PolicyViolationSummary associated with the finding. */
  policyViolationSummary?: PolicyViolationSummary;
  /** Access details associated with the finding, such as more information on the caller, which method was accessed, and from where. */
  access?: Access;
  /** File associated with the finding. */
  files?: ReadonlyArray<File>;
  /** Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 */
  moduleName?: string;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: SecurityMarks;
  /** Kubernetes resources associated with the finding. */
  kubernetes?: Kubernetes;
  /** DiscoveredWorkload associated with the finding. */
  discoveredWorkload?: DiscoveredWorkload;
  /** Cloud DLP data profile that is associated with the finding. */
  cloudDlpDataProfile?: CloudDlpDataProfile;
  /** Output only. The most recent time this finding was muted or unmuted. */
  muteUpdateTime?: string;
  /** Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding. */
  cloudDlpInspection?: CloudDlpInspection;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
  indicator?: Indicator;
  /** External exposure associated with the finding. */
  externalExposure?: ExternalExposure;
  /** Secret associated with the finding. */
  secret?: Secret;
  /** Output only. The mute information regarding this finding. */
  muteInfo?: MuteInfo;
  /** The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** Disk associated with the finding. */
  disk?: Disk;
  /** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** Represents the VPC networks that the resource is attached to. */
  networks?: ReadonlyArray<Network>;
  /** VertexAi associated with the finding. */
  vertexAi?: VertexAi;
  /** Represents operating system processes associated with the Finding. */
  processes?: ReadonlyArray<Process>;
  /** The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** Database associated with the finding. */
  database?: Database;
  /** IP rules associated with the finding. */
  ipRules?: IpRules;
  /** The AI model associated with the finding. */
  aiModel?: AiModel;
  /** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
  mitreAttack?: MitreAttack;
  /** Contains information about the IP connection associated with the finding. */
  connections?: ReadonlyArray<Connection>;
  /** Contains compliance information for security standards associated to the finding. */
  compliances?: ReadonlyArray<Compliance>;
  /** Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. */
  containers?: ReadonlyArray<Container>;
  /** Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics". */
  parentDisplayName?: string;
  /** Agent data access events associated with the finding. */
  agentDataAccessEvents?: ReadonlyArray<AgentDataAccessEvent>;
  /** Data retention deletion events associated with the finding. */
  dataRetentionDeletionEvents?: ReadonlyArray<DataRetentionDeletionEvent>;
  /** Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  vulnerability?: Vulnerability;
  /** Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. */
  muteInitiator?: string;
  /** Represents exfiltrations associated with the finding. */
  exfiltration?: Exfiltration;
  /** Signature of the kernel rootkit. */
  kernelRootkit?: KernelRootkit;
  /** Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute. */
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  /** Details about the compliance implications of the finding. */
  complianceDetails?: ComplianceDetails;
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}". */
  name?: string;
  /** The security posture associated with the finding. */
  securityPosture?: SecurityPosture;
  /** Fields related to Cloud Armor findings. */
  cloudArmor?: CloudArmor;
  /** The class of the finding. */
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
  /** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests. */
  toxicCombination?: ToxicCombination;
  /** AffectedResources associated with the finding. */
  affectedResources?: AffectedResources;
  /** Contains information about the org policies associated with the finding. */
  orgPolicies?: ReadonlyArray<OrgPolicy>;
  /** Log entries that are relevant to the finding. */
  logEntries?: ReadonlyArray<LogEntry>;
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** The results of an attack path simulation relevant to this finding. */
  attackExposure?: AttackExposure;
  /** The load balancers associated with the finding. */
  loadBalancers?: ReadonlyArray<LoadBalancer>;
  /** Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } } */
  contacts?: Record<string, ContactDetails>;
  /** Contains more details about the finding. */
  description?: string;
  /** Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests. */
  chokepoint?: Chokepoint;
  /** Fields related to Backup and DR findings. */
  backupDisasterRecovery?: BackupDisasterRecovery;
  /** Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests. */
  groupMemberships?: ReadonlyArray<GroupMembership>;
  /** The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Steps to address the finding. */
  nextSteps?: string;
  /** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
  resourceName?: string;
  /** Job associated with the finding. */
  job?: Job;
  /** Data flow events associated with the finding. */
  dataFlowEvents?: ReadonlyArray<DataFlowEvent>;
  /** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
  parent?: string;
  /** Data access events associated with the finding. */
  dataAccessEvents?: ReadonlyArray<DataAccessEvent>;
  /** Notebook associated with the finding. */
  notebook?: Notebook;
  /** Represents an application associated with the finding. */
  application?: Application;
  /** Represents IAM bindings associated with the finding. */
  iamBindings?: ReadonlyArray<IamBinding>;
  /** Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. */
  externalSystems?: Record<string, GoogleCloudSecuritycenterV1ExternalSystem>;
  /** ArtifactGuardPolicies associated with the finding. */
  artifactGuardPolicies?: ArtifactGuardPolicies;
}

export const Finding: Schema.Schema<Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyViolationSummary: Schema.optional(PolicyViolationSummary),
    access: Schema.optional(Access),
    files: Schema.optional(Schema.Array(File)),
    moduleName: Schema.optional(Schema.String),
    securityMarks: Schema.optional(SecurityMarks),
    kubernetes: Schema.optional(Kubernetes),
    discoveredWorkload: Schema.optional(DiscoveredWorkload),
    cloudDlpDataProfile: Schema.optional(CloudDlpDataProfile),
    muteUpdateTime: Schema.optional(Schema.String),
    cloudDlpInspection: Schema.optional(CloudDlpInspection),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    indicator: Schema.optional(Indicator),
    externalExposure: Schema.optional(ExternalExposure),
    secret: Schema.optional(Secret),
    muteInfo: Schema.optional(MuteInfo),
    eventTime: Schema.optional(Schema.String),
    disk: Schema.optional(Disk),
    category: Schema.optional(Schema.String),
    networks: Schema.optional(Schema.Array(Network)),
    vertexAi: Schema.optional(VertexAi),
    processes: Schema.optional(Schema.Array(Process)),
    createTime: Schema.optional(Schema.String),
    database: Schema.optional(Database),
    ipRules: Schema.optional(IpRules),
    aiModel: Schema.optional(AiModel),
    mitreAttack: Schema.optional(MitreAttack),
    connections: Schema.optional(Schema.Array(Connection)),
    compliances: Schema.optional(Schema.Array(Compliance)),
    containers: Schema.optional(Schema.Array(Container)),
    parentDisplayName: Schema.optional(Schema.String),
    agentDataAccessEvents: Schema.optional(Schema.Array(AgentDataAccessEvent)),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(DataRetentionDeletionEvent),
    ),
    vulnerability: Schema.optional(Vulnerability),
    muteInitiator: Schema.optional(Schema.String),
    exfiltration: Schema.optional(Exfiltration),
    kernelRootkit: Schema.optional(KernelRootkit),
    mute: Schema.optional(Schema.String),
    complianceDetails: Schema.optional(ComplianceDetails),
    severity: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    securityPosture: Schema.optional(SecurityPosture),
    cloudArmor: Schema.optional(CloudArmor),
    findingClass: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    toxicCombination: Schema.optional(ToxicCombination),
    affectedResources: Schema.optional(AffectedResources),
    orgPolicies: Schema.optional(Schema.Array(OrgPolicy)),
    logEntries: Schema.optional(Schema.Array(LogEntry)),
    externalUri: Schema.optional(Schema.String),
    attackExposure: Schema.optional(AttackExposure),
    loadBalancers: Schema.optional(Schema.Array(LoadBalancer)),
    contacts: Schema.optional(Schema.Record(Schema.String, ContactDetails)),
    description: Schema.optional(Schema.String),
    chokepoint: Schema.optional(Chokepoint),
    backupDisasterRecovery: Schema.optional(BackupDisasterRecovery),
    groupMemberships: Schema.optional(Schema.Array(GroupMembership)),
    state: Schema.optional(Schema.String),
    nextSteps: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    job: Schema.optional(Job),
    dataFlowEvents: Schema.optional(Schema.Array(DataFlowEvent)),
    parent: Schema.optional(Schema.String),
    dataAccessEvents: Schema.optional(Schema.Array(DataAccessEvent)),
    notebook: Schema.optional(Notebook),
    application: Schema.optional(Application),
    iamBindings: Schema.optional(Schema.Array(IamBinding)),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV1ExternalSystem),
    ),
    artifactGuardPolicies: Schema.optional(ArtifactGuardPolicies),
  }).annotate({ identifier: "Finding" });

export interface ListFindingsResult {
  /** State change of the finding between the points in time. */
  stateChange?:
    | "UNUSED"
    | "CHANGED"
    | "UNCHANGED"
    | "ADDED"
    | "REMOVED"
    | (string & {});
  /** Output only. Resource that is associated with this finding. */
  resource?: Resource;
  /** Finding matching the search request. */
  finding?: Finding;
}

export const ListFindingsResult: Schema.Schema<ListFindingsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateChange: Schema.optional(Schema.String),
    resource: Schema.optional(Resource),
    finding: Schema.optional(Finding),
  }).annotate({ identifier: "ListFindingsResult" });

export interface ListFindingsResponse {
  /** The total number of findings matching the query. */
  totalSize?: number;
  /** Findings matching the list request. */
  listFindingsResults?: ReadonlyArray<ListFindingsResult>;
  /** Time used for executing the list request. */
  readTime?: string;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListFindingsResponse: Schema.Schema<ListFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    listFindingsResults: Schema.optional(Schema.Array(ListFindingsResult)),
    readTime: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFindingsResponse" });

export interface VulnerabilityCountBySeverity {
  /** Key is the Severity enum. */
  severityToFindingCount?: Record<string, string>;
}

export const VulnerabilityCountBySeverity: Schema.Schema<VulnerabilityCountBySeverity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severityToFindingCount: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "VulnerabilityCountBySeverity" });

export interface AttackPathEdge {
  /** The attack node uuid of the destination node. */
  destination?: string;
  /** The attack node uuid of the source node. */
  source?: string;
}

export const AttackPathEdge: Schema.Schema<AttackPathEdge> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttackPathEdge" });

export interface GoogleCloudSecuritycenterV2Contact {
  /** An email address. For example, "`person123@company.com`". */
  email?: string;
}

export const GoogleCloudSecuritycenterV2Contact: Schema.Schema<GoogleCloudSecuritycenterV2Contact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Contact" });

export interface GoogleCloudSecuritycenterV2Dataset {
  /** The user defined display name of dataset, e.g. plants-dataset */
  displayName?: string;
  /** Resource name of the dataset, e.g. projects/{project}/locations/{location}/datasets/2094040236064505856 */
  name?: string;
  /** Data source, such as a BigQuery source URI, e.g. bq://scc-nexus-test.AIPPtest.gsod */
  source?: string;
}

export const GoogleCloudSecuritycenterV2Dataset: Schema.Schema<GoogleCloudSecuritycenterV2Dataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Dataset" });

export interface VulnerabilitySnapshot {
  /** The time that the snapshot was taken. */
  snapshotTime?: string;
  /** The vulnerability count by severity. */
  findingCount?: VulnerabilityCountBySeverity;
  /** Identifier. The vulnerability snapshot name. Format: //locations//vulnerabilitySnapshots/ */
  name?: string;
  /** The cloud provider for the vulnerability snapshot. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
}

export const VulnerabilitySnapshot: Schema.Schema<VulnerabilitySnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshotTime: Schema.optional(Schema.String),
    findingCount: Schema.optional(VulnerabilityCountBySeverity),
    name: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilitySnapshot" });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo {
  /** Email address of the contacts. */
  email?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo",
  });

export interface Position {
  /** The line number. */
  lineNumber?: number;
  /** The column number. */
  columnNumber?: number;
}

export const Position: Schema.Schema<Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lineNumber: Schema.optional(Schema.Number),
    columnNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Position" });

export interface CustomModuleValidationError {
  /** A description of the error, suitable for human consumption. Required. */
  description?: string;
  /** The initial position of the error in the uploaded text version of the module. This field may be omitted if no specific position applies, or if one could not be computed. */
  start?: Position;
  /** The path, in RFC 8901 JSON Pointer format, to the field that failed validation. This may be left empty if no specific field is affected. */
  fieldPath?: string;
  /** The end position of the error in the uploaded text version of the module. This field may be omitted if no specific position applies, or if one could not be computed. */
  end?: Position;
}

export const CustomModuleValidationError: Schema.Schema<CustomModuleValidationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    start: Schema.optional(Position),
    fieldPath: Schema.optional(Schema.String),
    end: Schema.optional(Position),
  }).annotate({ identifier: "CustomModuleValidationError" });

export interface GoogleCloudSecuritycenterV2PortRange {
  /** Maximum port value. */
  max?: string;
  /** Minimum port value. */
  min?: string;
}

export const GoogleCloudSecuritycenterV2PortRange: Schema.Schema<GoogleCloudSecuritycenterV2PortRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    max: Schema.optional(Schema.String),
    min: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2PortRange" });

export interface GoogleCloudSecuritycenterV2IpRule {
  /** The IP protocol this rule applies to. This value can either be one of the following well known protocol strings (TCP, UDP, ICMP, ESP, AH, IPIP, SCTP) or a string representation of the integer value. */
  protocol?: string;
  /** Optional. An optional list of ports to which this rule applies. This field is only applicable for the UDP or (S)TCP protocols. Each entry must be either an integer or a range including a min and max port number. */
  portRanges?: ReadonlyArray<GoogleCloudSecuritycenterV2PortRange>;
}

export const GoogleCloudSecuritycenterV2IpRule: Schema.Schema<GoogleCloudSecuritycenterV2IpRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    portRanges: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PortRange),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRule" });

export interface GoogleCloudSecuritycenterV2FileOperation {
  /** The type of the operation */
  type?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "OPEN"
    | "READ"
    | "RENAME"
    | "WRITE"
    | "EXECUTE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2FileOperation: Schema.Schema<GoogleCloudSecuritycenterV2FileOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2FileOperation" });

export interface GroupAssetsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Expression that defines what assets fields to use for grouping. The string value should follow SQL syntax: comma separated list of fields. For example: "security_center_properties.resource_project,security_center_properties.project". The following fields are supported when compare_duration is not set: * security_center_properties.resource_project * security_center_properties.resource_project_display_name * security_center_properties.resource_type * security_center_properties.resource_parent * security_center_properties.resource_parent_display_name The following fields are supported when compare_duration is set: * security_center_properties.resource_type * security_center_properties.resource_project_display_name * security_center_properties.resource_parent_display_name */
  groupBy?: string;
  /** When compare_duration is set, the GroupResult's "state_change" property is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at reference_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at reference_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and reference_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time. If this field is set then `state_change` must be a specified field in `group_by`. */
  compareDuration?: string;
  /** Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** The value returned by the last `GroupAssetsResponse`; indicates that this is a continuation of a prior `GroupAssets` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""` */
  filter?: string;
}

export const GroupAssetsRequest: Schema.Schema<GroupAssetsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    groupBy: Schema.optional(Schema.String),
    compareDuration: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupAssetsRequest" });

export interface GoogleCloudSecuritycenterV2Cvssv3 {
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible. */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  /** This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. */
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | (string & {});
  /** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  /** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  /** The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  /** This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. */
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** This metric measures the impact to integrity of a successfully exploited vulnerability. */
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2Cvssv3: Schema.Schema<GoogleCloudSecuritycenterV2Cvssv3> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attackVector: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    scope: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cvssv3" });

export interface GoogleCloudSecuritycenterV2Reference {
  /** Source of the reference e.g. NVD */
  source?: string;
  /** Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527. */
  uri?: string;
}

export const GoogleCloudSecuritycenterV2Reference: Schema.Schema<GoogleCloudSecuritycenterV2Reference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Reference" });

export interface GoogleCloudSecuritycenterV2Cve {
  /** Whether or not the vulnerability has been observed in the wild. */
  observedInTheWild?: boolean;
  /** The potential impact of the vulnerability if it was to be exploited. */
  impact?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Date of the earliest known exploitation. */
  firstExploitationDate?: string;
  /** Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document */
  cvssv3?: GoogleCloudSecuritycenterV2Cvssv3;
  /** Whether upstream fix is available for the CVE. */
  upstreamFixAvailable?: boolean;
  /** Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527 */
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
  /** Date the first publicly available exploit or PoC was released. */
  exploitReleaseDate?: string;
  /** The exploitation activity of the vulnerability in the wild. */
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  /** Whether or not the vulnerability was zero day when the finding was published. */
  zeroDay?: boolean;
  /** The unique identifier for the vulnerability. e.g. CVE-2021-34527 */
  id?: string;
}

export const GoogleCloudSecuritycenterV2Cve: Schema.Schema<GoogleCloudSecuritycenterV2Cve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    observedInTheWild: Schema.optional(Schema.Boolean),
    impact: Schema.optional(Schema.String),
    firstExploitationDate: Schema.optional(Schema.String),
    cvssv3: Schema.optional(GoogleCloudSecuritycenterV2Cvssv3),
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
    exploitReleaseDate: Schema.optional(Schema.String),
    exploitationActivity: Schema.optional(Schema.String),
    zeroDay: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cve" });

export interface GoogleCloudSecuritycenterV2Package {
  /** Type of package, for example, os, maven, or go. */
  packageType?: string;
  /** The version of the package. */
  packageVersion?: string;
  /** The name of the package where the vulnerability was detected. */
  packageName?: string;
  /** The CPE URI where the vulnerability was detected. */
  cpeUri?: string;
}

export const GoogleCloudSecuritycenterV2Package: Schema.Schema<GoogleCloudSecuritycenterV2Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageType: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Package" });

export interface GoogleCloudSecuritycenterV2SecurityBulletin {
  /** Submission time of this Security Bulletin. */
  submissionTime?: string;
  /** This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 */
  suggestedUpgradeVersion?: string;
  /** ID of the bulletin corresponding to the vulnerability. */
  bulletinId?: string;
}

export const GoogleCloudSecuritycenterV2SecurityBulletin: Schema.Schema<GoogleCloudSecuritycenterV2SecurityBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    submissionTime: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
    bulletinId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityBulletin" });

export interface GoogleCloudSecuritycenterV2Cwe {
  /** The CWE identifier, e.g. CWE-94 */
  id?: string;
  /** Any reference to the details on the CWE, for example, https://cwe.mitre.org/data/definitions/94.html */
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
}

export const GoogleCloudSecuritycenterV2Cwe: Schema.Schema<GoogleCloudSecuritycenterV2Cwe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cwe" });

export interface GoogleCloudSecuritycenterV2Vulnerability {
  /** Represents whether the vulnerability is reachable (detected via static analysis) */
  reachable?: boolean;
  /** Provider provided risk_score based on multiple factors. The higher the risk score, the more risky the vulnerability is. */
  providerRiskScore?: string;
  /** CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  cve?: GoogleCloudSecuritycenterV2Cve;
  /** The offending package is relevant to the finding. */
  offendingPackage?: GoogleCloudSecuritycenterV2Package;
  /** The fixed package is relevant to the finding. */
  fixedPackage?: GoogleCloudSecuritycenterV2Package;
  /** The security bulletin is relevant to this finding. */
  securityBulletin?: GoogleCloudSecuritycenterV2SecurityBulletin;
  /** Represents one or more Common Weakness Enumeration (CWE) information on this vulnerability. */
  cwes?: ReadonlyArray<GoogleCloudSecuritycenterV2Cwe>;
}

export const GoogleCloudSecuritycenterV2Vulnerability: Schema.Schema<GoogleCloudSecuritycenterV2Vulnerability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reachable: Schema.optional(Schema.Boolean),
    providerRiskScore: Schema.optional(Schema.String),
    cve: Schema.optional(GoogleCloudSecuritycenterV2Cve),
    offendingPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    fixedPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityBulletin,
    ),
    cwes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Cwe)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Vulnerability" });

export interface GoogleCloudSecuritycenterV2Role {
  /** Role namespace. */
  ns?: string;
  /** Role type. */
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  /** Role name. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Role: Schema.Schema<GoogleCloudSecuritycenterV2Role> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Role" });

export interface GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo {
  /** A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
  principalSubject?: string;
  /** The email address of a Google account. */
  principalEmail?: string;
}

export const GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo: Schema.Schema<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment {
  /** Environment Type. */
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment",
  });

export interface GoogleCloudSecuritycenterV1BigQueryExport {
  /** The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). */
  dataset?: string;
  /** Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. */
  updateTime?: string;
  /** Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. */
  principal?: string;
  /** Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
  filter?: string;
  /** Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. */
  createTime?: string;
  /** Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. */
  mostRecentEditor?: string;
  /** The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests. */
  name?: string;
  /** The description of the export (max of 1024 characters). */
  description?: string;
}

export const GoogleCloudSecuritycenterV1BigQueryExport: Schema.Schema<GoogleCloudSecuritycenterV1BigQueryExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1BigQueryExport" });

export interface Expr {
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleCloudSecuritycenterV1Property {
  /** The CEL expression for the custom output. A resource property can be specified to return the value of the property or a text string enclosed in quotation marks. */
  valueExpression?: Expr;
  /** Name of the property for the custom output. */
  name?: string;
}

export const GoogleCloudSecuritycenterV1Property: Schema.Schema<GoogleCloudSecuritycenterV1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueExpression: Schema.optional(Expr),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Property" });

export interface GoogleCloudSecuritycenterV1CustomOutputSpec {
  /** A list of custom output properties to add to the finding. */
  properties?: ReadonlyArray<GoogleCloudSecuritycenterV1Property>;
}

export const GoogleCloudSecuritycenterV1CustomOutputSpec: Schema.Schema<GoogleCloudSecuritycenterV1CustomOutputSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1Property),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomOutputSpec" });

export interface GoogleCloudSecuritycenterV2IssueSecurityContextContext {
  /** Context type. */
  type?: string;
  /** Context values. */
  values?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContextContext: Schema.Schema<GoogleCloudSecuritycenterV2IssueSecurityContextContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueSecurityContextContext",
  });

export interface GoogleCloudSecuritycenterV1CustomConfig {
  /** The CEL expression to evaluate to produce findings. When the expression evaluates to true against a resource, a finding is generated. */
  predicate?: Expr;
  /** Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks. */
  description?: string;
  /** The severity to assign to findings generated by the module. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON. */
  recommendation?: string;
  /** The resource types that the custom module operates on. Each custom module can specify up to 5 resource types. */
  resourceSelector?: GoogleCloudSecuritycenterV1ResourceSelector;
  /** Custom output properties. */
  customOutput?: GoogleCloudSecuritycenterV1CustomOutputSpec;
}

export const GoogleCloudSecuritycenterV1CustomConfig: Schema.Schema<GoogleCloudSecuritycenterV1CustomConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    predicate: Schema.optional(Expr),
    description: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    recommendation: Schema.optional(Schema.String),
    resourceSelector: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceSelector,
    ),
    customOutput: Schema.optional(GoogleCloudSecuritycenterV1CustomOutputSpec),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomConfig" });

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

export const AuditLogConfig: Schema.Schema<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
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

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    condition: Schema.optional(Expr),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    bindings: Schema.optional(Schema.Array(Binding)),
  }).annotate({ identifier: "Policy" });

export interface SimulatedResource {
  /** Required. The type of the resource, for example, `compute.googleapis.com/Disk`. */
  resourceType?: string;
  /** Optional. A representation of the IAM policy. */
  iamPolicyData?: Policy;
  /** Optional. A representation of the Google Cloud resource. Should match the Google Cloud resource JSON format. */
  resourceData?: Record<string, unknown>;
}

export const SimulatedResource: Schema.Schema<SimulatedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    iamPolicyData: Schema.optional(Policy),
    resourceData: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "SimulatedResource" });

export interface SimulateSecurityHealthAnalyticsCustomModuleRequest {
  /** Required. The custom configuration that you need to test. */
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  /** Required. Resource data to simulate custom module against. */
  resource?: SimulatedResource;
}

export const SimulateSecurityHealthAnalyticsCustomModuleRequest: Schema.Schema<SimulateSecurityHealthAnalyticsCustomModuleRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    resource: Schema.optional(SimulatedResource),
  }).annotate({
    identifier: "SimulateSecurityHealthAnalyticsCustomModuleRequest",
  });

export interface GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping {
  /** Resource value mapping for high-sensitivity Sensitive Data Protection findings */
  highSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Resource value mapping for medium-sensitivity Sensitive Data Protection findings */
  mediumSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping: Schema.Schema<GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    highSensitivityMapping: Schema.optional(Schema.String),
    mediumSensitivityMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping",
  });

export interface GoogleCloudSecuritycenterV1ResourceValueConfig {
  /** List of resource labels to search for, evaluated with `AND`. For example, `"resource_labels_selector": {"key": "value", "env": "prod"}` will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels */
  resourceLabelsSelector?: Record<string, string>;
  /** Description of the resource value configuration. */
  description?: string;
  /** Output only. Timestamp this resource value configuration was last updated. */
  updateTime?: string;
  /** Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources. */
  resourceType?: string;
  /** Output only. Timestamp this resource value configuration was created. */
  createTime?: string;
  /** Required. Resource value level this expression represents */
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Required. Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing */
  tagValues?: ReadonlyArray<string>;
  /** Cloud provider this configuration applies to */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Name for the resource value configuration */
  name?: string;
  /** A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset". */
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping;
  /** Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope will be checked with `AND` of other resources. */
  scope?: string;
}

export const GoogleCloudSecuritycenterV1ResourceValueConfig: Schema.Schema<GoogleCloudSecuritycenterV1ResourceValueConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    resourceValue: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping,
    ),
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceValueConfig" });

export interface ListResourceValueConfigsResponse {
  /** The resource value configs from the specified parent. */
  resourceValueConfigs?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceValueConfig>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListResourceValueConfigsResponse: Schema.Schema<ListResourceValueConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceValueConfigs: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1ResourceValueConfig),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListResourceValueConfigsResponse" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface GroupResult {
  /** Properties matching the groupBy fields in the request. */
  properties?: Record<string, unknown>;
  /** Total count of resources for the given properties. */
  count?: string;
}

export const GroupResult: Schema.Schema<GroupResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupResult" });

export interface GroupFindingsResponse {
  /** Time used for executing the groupBy request. */
  readTime?: string;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
  /** The total number of results matching the query. */
  totalSize?: number;
  /** Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear. */
  groupByResults?: ReadonlyArray<GroupResult>;
}

export const GroupFindingsResponse: Schema.Schema<GroupFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    groupByResults: Schema.optional(Schema.Array(GroupResult)),
  }).annotate({ identifier: "GroupFindingsResponse" });

export interface ResourceValueConfigMetadata {
  /** Resource value config name */
  name?: string;
}

export const ResourceValueConfigMetadata: Schema.Schema<ResourceValueConfigMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceValueConfigMetadata" });

export interface ValuedResource {
  /** List of resource value configurations' metadata used to determine the value of this resource. Maximum of 100. */
  resourceValueConfigsUsed?: ReadonlyArray<ResourceValueConfigMetadata>;
  /** The [resource type](https://cloud.google.com/asset-inventory/docs/supported-asset-types) of the valued resource. */
  resourceType?: string;
  /** Human-readable name of the valued resource. */
  displayName?: string;
  /** How valuable this resource is. */
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "RESOURCE_VALUE_LOW"
    | "RESOURCE_VALUE_MEDIUM"
    | "RESOURCE_VALUE_HIGH"
    | (string & {});
  /** Exposed score for this valued resource. A value of 0 means no exposure was detected exposure. */
  exposedScore?: number;
  /** Valued resource name, for example, e.g.: `organizations/123/simulations/456/valuedResources/789` */
  name?: string;
  /** The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the valued resource. */
  resource?: string;
}

export const ValuedResource: Schema.Schema<ValuedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceValueConfigsUsed: Schema.optional(
      Schema.Array(ResourceValueConfigMetadata),
    ),
    resourceType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    resourceValue: Schema.optional(Schema.String),
    exposedScore: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValuedResource" });

export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name?: string;
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
  /** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
  canonicalName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1SecurityMarks: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1SecurityMarks",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount {
  /** The AWS account ID of the resource associated with the issue. */
  id?: string;
  /** The AWS account name of the resource associated with the issue. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount",
  });

export interface GoogleCloudSecuritycenterV1MuteConfig {
  /** Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. */
  updateTime?: string;
  /** Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:` */
  filter?: string;
  /** Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. */
  createTime?: string;
  /** Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. */
  mostRecentEditor?: string;
  /** Optional. The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings. */
  expiryTime?: string;
  /** A description of the mute config. */
  description?: string;
  /** The human readable name to be displayed for the mute config. */
  displayName?: string;
  /** Optional. The type of the mute config, which determines what type of mute state the config affects. The static mute state takes precedence over the dynamic mute state. Immutable after creation. STATIC by default if not set during creation. */
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name?: string;
}

export const GoogleCloudSecuritycenterV1MuteConfig: Schema.Schema<GoogleCloudSecuritycenterV1MuteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1MuteConfig" });

export interface ListMuteConfigsResponse {
  /** The mute configs from the specified parent. */
  muteConfigs?: ReadonlyArray<GoogleCloudSecuritycenterV1MuteConfig>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListMuteConfigsResponse: Schema.Schema<ListMuteConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteConfigs: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1MuteConfig),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMuteConfigsResponse" });

export interface GoogleCloudSecuritycenterV2Node {
  /** [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Node: Schema.Schema<GoogleCloudSecuritycenterV2Node> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Node" });

export interface GoogleCloudSecuritycenterV2NodePool {
  /** Kubernetes node pool name. */
  name?: string;
  /** Nodes associated with the finding. */
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
}

export const GoogleCloudSecuritycenterV2NodePool: Schema.Schema<GoogleCloudSecuritycenterV2NodePool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NodePool" });

export interface GroupAssetsResponse {
  /** Time used for executing the groupBy request. */
  readTime?: string;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
  /** The total number of results matching the query. */
  totalSize?: number;
  /** Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear. */
  groupByResults?: ReadonlyArray<GroupResult>;
}

export const GroupAssetsResponse: Schema.Schema<GroupAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    groupByResults: Schema.optional(Schema.Array(GroupResult)),
  }).annotate({ identifier: "GroupAssetsResponse" });

export interface GoogleCloudSecuritycenterV2SensitivityScore {
  /** The sensitivity score applied to the resource. */
  score?:
    | "SENSITIVITY_SCORE_LEVEL_UNSPECIFIED"
    | "SENSITIVITY_LOW"
    | "SENSITIVITY_UNKNOWN"
    | "SENSITIVITY_MODERATE"
    | "SENSITIVITY_HIGH"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SensitivityScore: Schema.Schema<GoogleCloudSecuritycenterV2SensitivityScore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SensitivityScore" });

export interface GoogleCloudSecuritycenterV2InfoType {
  /** Optional custom sensitivity for this InfoType. This only applies to data profiling. */
  sensitivityScore?: GoogleCloudSecuritycenterV2SensitivityScore;
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`. */
  name?: string;
  /** Optional version name for this InfoType. */
  version?: string;
}

export const GoogleCloudSecuritycenterV2InfoType: Schema.Schema<GoogleCloudSecuritycenterV2InfoType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sensitivityScore: Schema.optional(
      GoogleCloudSecuritycenterV2SensitivityScore,
    ),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2InfoType" });

export interface GoogleCloudSecuritycenterV2DataRetentionDeletionEvent {
  /** Min duration of retention allowed from the DSPM retention control. This field is only populated when event type is set to EVENT_TYPE_MIN_TTL_FROM_CREATION. */
  minRetentionAllowed?: string;
  /** Number of objects that violated the policy for this resource. If the number is less than 1,000, then the value of this field is the exact number. If the number of objects that violated the policy is greater than or equal to 1,000, then the value of this field is 1000. */
  dataObjectCount?: string;
  /** Timestamp indicating when the event was detected. */
  eventDetectionTime?: string;
  /** Maximum duration of retention allowed from the DRD control. This comes from the DRD control where users set a max TTL for their data. For example, suppose that a user sets the max TTL for a Cloud Storage bucket to 90 days. However, an object in that bucket is 100 days old. In this case, a DataRetentionDeletionEvent will be generated for that Cloud Storage bucket, and the max_retention_allowed is 90 days. */
  maxRetentionAllowed?: string;
  /** Type of the DRD event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "EVENT_TYPE_MAX_TTL_EXCEEDED"
    | "EVENT_TYPE_MAX_TTL_FROM_CREATION"
    | "EVENT_TYPE_MAX_TTL_FROM_LAST_MODIFICATION"
    | "EVENT_TYPE_MIN_TTL_FROM_CREATION"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2DataRetentionDeletionEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2DataRetentionDeletionEvent",
  });

export interface GoogleCloudSecuritycenterV2ContactDetails {
  /** A list of contacts */
  contacts?: ReadonlyArray<GoogleCloudSecuritycenterV2Contact>;
}

export const GoogleCloudSecuritycenterV2ContactDetails: Schema.Schema<GoogleCloudSecuritycenterV2ContactDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Contact)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ContactDetails" });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision {
  /** The resource name of an ADC Shared Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV1p1beta1Finding {
  /** The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}" */
  name?: string;
  /** The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
  resourceName?: string;
  /** The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
  parent?: string;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
}

export const GoogleCloudSecuritycenterV1p1beta1Finding: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventTime: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    externalUri: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    resourceName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1p1beta1SecurityMarks,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Finding" });

export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
  /** The Cloud resource tied to the notification. */
  resource?: GoogleCloudSecuritycenterV1p1beta1Resource;
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: GoogleCloudSecuritycenterV1p1beta1Finding;
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Resource),
    finding: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Finding),
    notificationConfigName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1NotificationMessage",
  });

export interface ListEventThreatDetectionCustomModulesResponse {
  /** Custom modules belonging to the requested parent. */
  eventThreatDetectionCustomModules?: ReadonlyArray<EventThreatDetectionCustomModule>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListEventThreatDetectionCustomModulesResponse: Schema.Schema<ListEventThreatDetectionCustomModulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventThreatDetectionCustomModules: Schema.optional(
      Schema.Array(EventThreatDetectionCustomModule),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEventThreatDetectionCustomModulesResponse" });

export interface StreamingConfig {
  /** Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
  filter?: string;
}

export const StreamingConfig: Schema.Schema<StreamingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "StreamingConfig" });

export interface NotificationConfig {
  /** The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket". */
  name?: string;
  /** The description of the notification config (max of 1024 characters). */
  description?: string;
  /** The config for triggering streaming-based notifications. */
  streamingConfig?: StreamingConfig;
  /** The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". */
  pubsubTopic?: string;
  /** Output only. The service account that needs "pubsub.topics.publish" permission to publish to the Pub/Sub topic. */
  serviceAccount?: string;
}

export const NotificationConfig: Schema.Schema<NotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    streamingConfig: Schema.optional(StreamingConfig),
    pubsubTopic: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotificationConfig" });

export interface ListNotificationConfigsResponse {
  /** Notification configs belonging to the requested parent. */
  notificationConfigs?: ReadonlyArray<NotificationConfig>;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListNotificationConfigsResponse: Schema.Schema<ListNotificationConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationConfigs: Schema.optional(Schema.Array(NotificationConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNotificationConfigsResponse" });

export interface GoogleCloudSecuritycenterV2SecurityPolicy {
  /** The type of Google Cloud Armor security policy for example, 'backend security policy', 'edge security policy', 'network edge security policy', or 'always-on DDoS protection'. */
  type?: string;
  /** Whether or not the associated rule or policy is in preview mode. */
  preview?: boolean;
  /** The name of the Google Cloud Armor security policy, for example, "my-security-policy". */
  name?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPolicy: Schema.Schema<GoogleCloudSecuritycenterV2SecurityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    preview: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPolicy" });

export interface RunAssetDiscoveryRequest {}

export const RunAssetDiscoveryRequest: Schema.Schema<RunAssetDiscoveryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RunAssetDiscoveryRequest",
  });

export interface CreateResourceValueConfigRequest {
  /** Required. The resource value config being created. */
  resourceValueConfig?: GoogleCloudSecuritycenterV1ResourceValueConfig;
  /** Required. Resource name of the new ResourceValueConfig's parent. */
  parent?: string;
}

export const CreateResourceValueConfigRequest: Schema.Schema<CreateResourceValueConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceValueConfig: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceValueConfig,
    ),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateResourceValueConfigRequest" });

export interface BatchCreateResourceValueConfigsRequest {
  /** Required. The resource value configs to be created. */
  requests?: ReadonlyArray<CreateResourceValueConfigRequest>;
}

export const BatchCreateResourceValueConfigsRequest: Schema.Schema<BatchCreateResourceValueConfigsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(CreateResourceValueConfigRequest)),
  }).annotate({ identifier: "BatchCreateResourceValueConfigsRequest" });

export interface GoogleCloudSecuritycenterV2IamBinding {
  /** Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner". */
  role?: string;
  /** A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com". */
  member?: string;
  /** The action that was performed on a Binding. */
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
}

export const GoogleCloudSecuritycenterV2IamBinding: Schema.Schema<GoogleCloudSecuritycenterV2IamBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    member: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IamBinding" });

export interface GoogleCloudSecuritycenterV2GroupMembership {
  /** ID of the group. */
  groupId?: string;
  /** Type of group. */
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2GroupMembership: Schema.Schema<GoogleCloudSecuritycenterV2GroupMembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    groupType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2GroupMembership" });

export interface GoogleCloudSecuritycenterV2Detection {
  /** The name of the binary associated with the memory hash signature detection. */
  binary?: string;
  /** The percentage of memory page hashes in the signature that were matched. */
  percentPagesMatched?: number;
}

export const GoogleCloudSecuritycenterV2Detection: Schema.Schema<GoogleCloudSecuritycenterV2Detection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binary: Schema.optional(Schema.String),
    percentPagesMatched: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Detection" });

export interface GoogleCloudSecuritycenterV2MemoryHashSignature {
  /** The binary family. */
  binaryFamily?: string;
  /** The list of memory hash detections contributing to the binary family match. */
  detections?: ReadonlyArray<GoogleCloudSecuritycenterV2Detection>;
}

export const GoogleCloudSecuritycenterV2MemoryHashSignature: Schema.Schema<GoogleCloudSecuritycenterV2MemoryHashSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binaryFamily: Schema.optional(Schema.String),
    detections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Detection),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MemoryHashSignature" });

export interface GoogleCloudSecuritycenterV2YaraRuleSignature {
  /** The name of the YARA rule. */
  yaraRule?: string;
}

export const GoogleCloudSecuritycenterV2YaraRuleSignature: Schema.Schema<GoogleCloudSecuritycenterV2YaraRuleSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2YaraRuleSignature" });

export interface GoogleCloudSecuritycenterV2ProcessSignature {
  /** Signature indicating that a binary family was matched. */
  memoryHashSignature?: GoogleCloudSecuritycenterV2MemoryHashSignature;
  /** Describes the type of resource associated with the signature. */
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
  /** Signature indicating that a YARA rule was matched. */
  yaraRuleSignature?: GoogleCloudSecuritycenterV2YaraRuleSignature;
}

export const GoogleCloudSecuritycenterV2ProcessSignature: Schema.Schema<GoogleCloudSecuritycenterV2ProcessSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memoryHashSignature: Schema.optional(
      GoogleCloudSecuritycenterV2MemoryHashSignature,
    ),
    signatureType: Schema.optional(Schema.String),
    yaraRuleSignature: Schema.optional(
      GoogleCloudSecuritycenterV2YaraRuleSignature,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ProcessSignature" });

export interface GoogleCloudSecuritycenterV2BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV2BulkMuteFindingsResponse: Schema.Schema<GoogleCloudSecuritycenterV2BulkMuteFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV2BulkMuteFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV2CloudDlpInspection {
  /** Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`. */
  inspectJob?: string;
  /** The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`. */
  infoType?: string;
  /** The number of times Cloud DLP found this infoType within this job and resource. */
  infoTypeCount?: string;
  /** Whether Cloud DLP scanned the complete resource or a sampled subset. */
  fullScan?: boolean;
}

export const GoogleCloudSecuritycenterV2CloudDlpInspection: Schema.Schema<GoogleCloudSecuritycenterV2CloudDlpInspection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectJob: Schema.optional(Schema.String),
    infoType: Schema.optional(Schema.String),
    infoTypeCount: Schema.optional(Schema.String),
    fullScan: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpInspection" });

export interface GoogleCloudSecuritycenterV2SecretEnvironmentVariable {
  /** Environment variable name as a JSON encoded string. Note that value is not included since the value contains the secret data, which is sensitive core content. */
  key?: string;
}

export const GoogleCloudSecuritycenterV2SecretEnvironmentVariable: Schema.Schema<GoogleCloudSecuritycenterV2SecretEnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2SecretEnvironmentVariable",
  });

export interface GoogleCloudSecuritycenterV2AwsOrganization {
  /** The unique identifier (ID) for the organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganization: Schema.Schema<GoogleCloudSecuritycenterV2AwsOrganization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsOrganization" });

export interface GoogleCloudSecuritycenterV2AwsOrganizationalUnit {
  /** The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. For example, "ou-ab12-cd34ef56". */
  id?: string;
  /** The friendly name of the OU. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganizationalUnit: Schema.Schema<GoogleCloudSecuritycenterV2AwsOrganizationalUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AwsOrganizationalUnit",
  });

export interface GoogleCloudSecuritycenterV2AwsAccount {
  /** The unique identifier (ID) of the account, containing exactly 12 digits. */
  id?: string;
  /** The friendly name of this account. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AwsAccount: Schema.Schema<GoogleCloudSecuritycenterV2AwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsAccount" });

export interface GoogleCloudSecuritycenterV2AwsMetadata {
  /** The AWS organization associated with the resource. */
  organization?: GoogleCloudSecuritycenterV2AwsOrganization;
  /** A list of AWS organizational units associated with the resource, ordered from lowest level (closest to the account) to highest level. */
  organizationalUnits?: ReadonlyArray<GoogleCloudSecuritycenterV2AwsOrganizationalUnit>;
  /** The AWS account associated with the resource. */
  account?: GoogleCloudSecuritycenterV2AwsAccount;
}

export const GoogleCloudSecuritycenterV2AwsMetadata: Schema.Schema<GoogleCloudSecuritycenterV2AwsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.optional(GoogleCloudSecuritycenterV2AwsOrganization),
    organizationalUnits: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AwsOrganizationalUnit),
    ),
    account: Schema.optional(GoogleCloudSecuritycenterV2AwsAccount),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsMetadata" });

export interface GoogleCloudSecuritycenterV2Chokepoint {
  /** List of resource names of findings associated with this chokepoint. For example, organizations/123/sources/456/findings/789. This list will have at most 100 findings. */
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Chokepoint: Schema.Schema<GoogleCloudSecuritycenterV2Chokepoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Chokepoint" });

export interface GoogleCloudSecuritycenterV2AiModel {
  /** The purpose of the model, for example, "Inteference" or "Training". */
  usageCategory?: string;
  /** The platform on which the model is deployed. */
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  /** The name of the AI model, for example, "gemini:1.0.0". */
  name?: string;
  /** The region in which the model is used, for example, “us-central1”. */
  location?: string;
  /** The publisher of the model, for example, “google” or “nvidia”. */
  publisher?: string;
  /** The domain of the model, for example, “image-classification”. */
  domain?: string;
  /** The name of the model library, for example, “transformers”. */
  library?: string;
  /** The user defined display name of model. Ex. baseline-classification-model */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AiModel: Schema.Schema<GoogleCloudSecuritycenterV2AiModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usageCategory: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AiModel" });

export interface GoogleCloudSecuritycenterV2PolicyViolationSummary {
  /** Count of child resources in violation of the policy. */
  policyViolationsCount?: string;
  /** Total number of child resources that conform to the policy. */
  conformantResourcesCount?: string;
  /** Total count of child resources which were not in scope for evaluation. */
  outOfScopeResourcesCount?: string;
  /** Number of child resources for which errors during evaluation occurred. The evaluation result for these child resources is effectively "unknown". */
  evaluationErrorsCount?: string;
}

export const GoogleCloudSecuritycenterV2PolicyViolationSummary: Schema.Schema<GoogleCloudSecuritycenterV2PolicyViolationSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyViolationsCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    evaluationErrorsCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2PolicyViolationSummary",
  });

export interface GoogleCloudSecuritycenterV1Resource {
  /** The full resource name of resource's parent. */
  parent?: string;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
  /** The parent service or product from which the resource is provided, for example, GKE or SNS. */
  service?: string;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: AdcApplicationTemplateRevision;
  /** Indicates which cloud provider the resource resides in. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The human readable name of the resource. */
  displayName?: string;
  /** The project ID that the resource belongs to. */
  projectDisplayName?: string;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<Folder>;
  /** The AWS metadata associated with the finding. */
  awsMetadata?: AwsMetadata;
  /** Provides the path to the resource within the resource hierarchy. */
  resourcePath?: ResourcePath;
  /** A string representation of the resource path. For Google Cloud, it has the format of `organizations/{organization_id}/folders/{folder_id}/folders/{folder_id}/projects/{project_id}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id}/ou/{organizational_unit_id}/ou/{organizational_unit_id}/account/{account_id}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id}/mg/{management_group_id}/subscription/{subscription_id}/rg/{resource_group_name}` where there can be any number of management groups. */
  resourcePathString?: string;
  /** The App Hub application this resource belongs to. */
  application?: GoogleCloudSecuritycenterV1ResourceApplication;
  /** The region or location of the service (if applicable). */
  location?: string;
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** The ADC application associated with the finding. */
  adcApplication?: AdcApplication;
  /** The Azure metadata associated with the finding. */
  azureMetadata?: AzureMetadata;
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
  /** Indicates which organization or tenant in the cloud provider the finding applies to. */
  organization?: string;
  /** The full resource type of the resource. */
  type?: string;
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: AdcSharedTemplateRevision;
}

export const GoogleCloudSecuritycenterV1Resource: Schema.Schema<GoogleCloudSecuritycenterV1Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    adcApplicationTemplate: Schema.optional(AdcApplicationTemplateRevision),
    cloudProvider: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(Folder)),
    awsMetadata: Schema.optional(AwsMetadata),
    resourcePath: Schema.optional(ResourcePath),
    resourcePathString: Schema.optional(Schema.String),
    application: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplication,
    ),
    location: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    adcApplication: Schema.optional(AdcApplication),
    azureMetadata: Schema.optional(AzureMetadata),
    name: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(AdcSharedTemplateRevision),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Resource" });

export interface GoogleCloudSecuritycenterV1NotificationMessage {
  /** The Cloud resource tied to this notification's Finding. */
  resource?: GoogleCloudSecuritycenterV1Resource;
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: Finding;
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
}

export const GoogleCloudSecuritycenterV1NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV1NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GoogleCloudSecuritycenterV1Resource),
    finding: Schema.optional(Finding),
    notificationConfigName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1NotificationMessage" });

export interface GoogleCloudSecuritycenterV2Geolocation {
  /** A CLDR. */
  regionCode?: string;
}

export const GoogleCloudSecuritycenterV2Geolocation: Schema.Schema<GoogleCloudSecuritycenterV2Geolocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Geolocation" });

export interface GoogleCloudSecuritycenterV2Access {
  /** A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. */
  userName?: string;
  /** The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". */
  serviceAccountKeyName?: string;
  /** Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
  principalEmail?: string;
  /** The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
  serviceAccountDelegationInfo?: ReadonlyArray<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo>;
  /** The caller IP's geolocation, which identifies where the call came from. */
  callerIpGeo?: GoogleCloudSecuritycenterV2Geolocation;
  /** Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. */
  userAgentFamily?: string;
  /** The method that the service account called, e.g. "SetIamPolicy". */
  methodName?: string;
  /** A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`. */
  principalSubject?: string;
  /** Caller's IP address, such as "1.1.1.1". */
  callerIp?: string;
  /** The caller's user agent string associated with the finding. */
  userAgent?: string;
  /** This is the API service that the service account made a call to, e.g. "iam.googleapis.com" */
  serviceName?: string;
}

export const GoogleCloudSecuritycenterV2Access: Schema.Schema<GoogleCloudSecuritycenterV2Access> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userName: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo),
    ),
    callerIpGeo: Schema.optional(GoogleCloudSecuritycenterV2Geolocation),
    userAgentFamily: Schema.optional(Schema.String),
    methodName: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Access" });

export interface GoogleCloudSecuritycenterV2DiskPath {
  /** Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh */
  relativePath?: string;
  /** UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) */
  partitionUuid?: string;
}

export const GoogleCloudSecuritycenterV2DiskPath: Schema.Schema<GoogleCloudSecuritycenterV2DiskPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativePath: Schema.optional(Schema.String),
    partitionUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiskPath" });

export interface GoogleCloudSecuritycenterV2CloudControl {
  /** Policy type of the CloudControl */
  policyType?: string;
  /** Version of the Cloud Control */
  version?: number;
  /** Name of the CloudControl associated with the finding. */
  cloudControlName?: string;
  /** Type of cloud control. */
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2CloudControl: Schema.Schema<GoogleCloudSecuritycenterV2CloudControl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyType: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    cloudControlName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudControl" });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality {
  /** Criticality Type. */
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes {
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment;
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality,
    ),
    environment: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment,
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
    businessOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes",
  });

export interface GoogleCloudSecuritycenterV2ResourcePathNode {
  /** The type of resource this node represents. */
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
  /** The ID of the resource this node represents. */
  id?: string;
  /** The display name of the resource this node represents. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2ResourcePathNode: Schema.Schema<GoogleCloudSecuritycenterV2ResourcePathNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePathNode" });

export interface GoogleCloudSecuritycenterV2IssueDomain {
  /** The domain category of the issue. */
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

export const GoogleCloudSecuritycenterV2IssueDomain: Schema.Schema<GoogleCloudSecuritycenterV2IssueDomain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainCategory: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueDomain" });

export interface GoogleCloudSecuritycenterV2AzureSubscription {
  /** The UUID of the Azure subscription, for example, `291bba3f-e0a5-47bc-a099-3bdcb2a50a05`. */
  id?: string;
  /** The display name of the Azure subscription. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureSubscription: Schema.Schema<GoogleCloudSecuritycenterV2AzureSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureSubscription" });

export interface GoogleCloudSecuritycenterV2AzureManagementGroup {
  /** The UUID of the Azure management group, for example, `20000000-0001-0000-0000-000000000000`. */
  id?: string;
  /** The display name of the Azure management group. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureManagementGroup: Schema.Schema<GoogleCloudSecuritycenterV2AzureManagementGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AzureManagementGroup",
  });

export interface GoogleCloudSecuritycenterV2AzureResourceGroup {
  /** The ID of the Azure resource group. */
  id?: string;
  /** The name of the Azure resource group. This is not a UUID. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AzureResourceGroup: Schema.Schema<GoogleCloudSecuritycenterV2AzureResourceGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureResourceGroup" });

export interface GoogleCloudSecuritycenterV2AzureTenant {
  /** The ID of the Microsoft Entra tenant, for example, "a11aaa11-aa11-1aa1-11aa-1aaa11a". */
  id?: string;
  /** The display name of the Azure tenant. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AzureTenant: Schema.Schema<GoogleCloudSecuritycenterV2AzureTenant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureTenant" });

export interface GoogleCloudSecuritycenterV2AzureMetadata {
  /** The Azure subscription associated with the resource. */
  subscription?: GoogleCloudSecuritycenterV2AzureSubscription;
  /** A list of Azure management groups associated with the resource, ordered from lowest level (closest to the subscription) to highest level. */
  managementGroups?: ReadonlyArray<GoogleCloudSecuritycenterV2AzureManagementGroup>;
  /** The Azure resource group associated with the resource. */
  resourceGroup?: GoogleCloudSecuritycenterV2AzureResourceGroup;
  /** The Azure Entra tenant associated with the resource. */
  tenant?: GoogleCloudSecuritycenterV2AzureTenant;
}

export const GoogleCloudSecuritycenterV2AzureMetadata: Schema.Schema<GoogleCloudSecuritycenterV2AzureMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(GoogleCloudSecuritycenterV2AzureSubscription),
    managementGroups: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AzureManagementGroup),
    ),
    resourceGroup: Schema.optional(
      GoogleCloudSecuritycenterV2AzureResourceGroup,
    ),
    tenant: Schema.optional(GoogleCloudSecuritycenterV2AzureTenant),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureMetadata" });

export interface GoogleCloudSecuritycenterV2SecretFilePath {
  /** Path to the file. */
  path?: string;
}

export const GoogleCloudSecuritycenterV2SecretFilePath: Schema.Schema<GoogleCloudSecuritycenterV2SecretFilePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecretFilePath" });

export interface GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
  /** The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
  displayName?: string;
  /** The user specified custom configuration for the module. */
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  /** The enablement state of the custom module. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "INHERITED"
    | (string & {});
  /** The cloud provider of the custom module. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. */
  name?: string;
  /** Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited. */
  ancestorModule?: string;
  /** Output only. The time at which the custom module was last updated. */
  updateTime?: string;
  /** Output only. The editor that last updated the custom module. */
  lastEditor?: string;
}

export const GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule: Schema.Schema<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    enablementState: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ancestorModule: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    lastEditor: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule",
  });

export interface GoogleCloudSecuritycenterV2Control {
  /** Name of the Control */
  controlName?: string;
  /** Display name of the control. For example, AU-02. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Control: Schema.Schema<GoogleCloudSecuritycenterV2Control> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Control" });

export interface GoogleCloudSecuritycenterV2Framework {
  /** Category of the framework associated with the finding. E.g. Security Benchmark, or Assured Workloads */
  category?: ReadonlyArray<
    | "FRAMEWORK_CATEGORY_UNSPECIFIED"
    | "SECURITY_BENCHMARKS"
    | "ASSURED_WORKLOADS"
    | "DATA_SECURITY"
    | "GOOGLE_BEST_PRACTICES"
    | "CUSTOM_FRAMEWORK"
    | (string & {})
  >;
  /** Display name of the framework. For a standard framework, this will look like e.g. PCI DSS 3.2.1, whereas for a custom framework it can be a user defined string like MyFramework */
  displayName?: string;
  /** Type of the framework associated with the finding, to specify whether the framework is built-in (pre-defined and immutable) or a custom framework defined by the customer (equivalent to security posture) */
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
  /** Name of the framework associated with the finding */
  name?: string;
  /** The controls associated with the framework. */
  controls?: ReadonlyArray<GoogleCloudSecuritycenterV2Control>;
}

export const GoogleCloudSecuritycenterV2Framework: Schema.Schema<GoogleCloudSecuritycenterV2Framework> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    controls: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Control)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Framework" });

export interface GoogleCloudSecuritycenterV2ComplianceDetails {
  /** CloudControl associated with the finding */
  cloudControl?: GoogleCloudSecuritycenterV2CloudControl;
  /** Cloud Control Deployments associated with the finding. For example, organizations/123/locations/global/cloudControlDeployments/deploymentIdentifier */
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  /** Details of Frameworks associated with the finding */
  frameworks?: ReadonlyArray<GoogleCloudSecuritycenterV2Framework>;
}

export const GoogleCloudSecuritycenterV2ComplianceDetails: Schema.Schema<GoogleCloudSecuritycenterV2ComplianceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudControl: Schema.optional(GoogleCloudSecuritycenterV2CloudControl),
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    frameworks: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Framework),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ComplianceDetails" });

export interface GoogleCloudSecuritycenterV2BigQueryExport {
  /** Identifier. The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. The following list shows some examples: + `organizations/{organization_id}/locations/{location_id}/bigQueryExports/{export_id}` + `folders/{folder_id}/locations/{location_id}/bigQueryExports/{export_id}` + `projects/{project_id}/locations/{location_id}/bigQueryExports/{export_id}` This field is provided in responses, and is ignored when provided in create requests. */
  name?: string;
  /** The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). */
  dataset?: string;
  /** The description of the export (max of 1024 characters). */
  description?: string;
  /** Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. */
  principal?: string;
  /** Output only. The resource name of the Cloud KMS `CryptoKey` used to protect this configuration's data, if configured during Security Command Center activation. */
  cryptoKeyName?: string;
  /** Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. */
  updateTime?: string;
  /** Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
  filter?: string;
  /** Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. */
  createTime?: string;
  /** Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. */
  mostRecentEditor?: string;
}

export const GoogleCloudSecuritycenterV2BigQueryExport: Schema.Schema<GoogleCloudSecuritycenterV2BigQueryExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2BigQueryExport" });

export interface GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
  /** The state of an asset discovery run. */
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  /** The duration between asset discovery run start and end */
  duration?: string;
}

export const GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse: Schema.Schema<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse",
  });

export interface GoogleCloudSecuritycenterV2AgentDataAccessEvent {
  /** The agent principal that accessed the data. */
  principalSubject?: string;
  /** The operation performed by the principal to access the data. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data access event. */
  eventTime?: string;
  /** Unique identifier for data access event. */
  eventId?: string;
}

export const GoogleCloudSecuritycenterV2AgentDataAccessEvent: Schema.Schema<GoogleCloudSecuritycenterV2AgentDataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AgentDataAccessEvent",
  });

export interface GoogleCloudSecuritycenterV2ExfilResource {
  /** The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name). */
  name?: string;
  /** Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket. */
  components?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2ExfilResource: Schema.Schema<GoogleCloudSecuritycenterV2ExfilResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExfilResource" });

export interface GoogleCloudSecuritycenterV2Exfiltration {
  /** If there are multiple targets, each target would get a complete copy of the "joined" source data. */
  targets?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
  /** If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source. */
  sources?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
  /** Total exfiltrated bytes processed for the entire job. */
  totalExfiltratedBytes?: string;
}

export const GoogleCloudSecuritycenterV2Exfiltration: Schema.Schema<GoogleCloudSecuritycenterV2Exfiltration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targets: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
    sources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
    totalExfiltratedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Exfiltration" });

export interface GoogleCloudSecuritycenterV2KernelRootkit {
  /** True if unexpected modifications of kernel code memory are present. */
  unexpectedCodeModification?: boolean;
  /** True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedFtraceHandler?: boolean;
  /** True if system call handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedSystemCallHandler?: boolean;
  /** True if unexpected modifications of kernel read-only data memory are present. */
  unexpectedReadOnlyDataModification?: boolean;
  /** True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedKprobeHandler?: boolean;
  /** Rootkit name, when available. */
  name?: string;
  /** True if kernel code pages that are not in the expected kernel or module code regions are present. */
  unexpectedKernelCodePages?: boolean;
  /** True if interrupt handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedInterruptHandler?: boolean;
  /** True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. */
  unexpectedProcessesInRunqueue?: boolean;
}

export const GoogleCloudSecuritycenterV2KernelRootkit: Schema.Schema<GoogleCloudSecuritycenterV2KernelRootkit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2KernelRootkit" });

export interface GoogleCloudSecuritycenterV2MitreAttack {
  /** Additional MITRE ATT&CK tactics related to this finding, if any. */
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
  /** The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`). */
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
  /** Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques. */
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
  /** The MITRE ATT&CK tactic most closely represented by this finding, if any. */
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
  /** The MITRE ATT&CK version referenced by the above fields. E.g. "8". */
  version?: string;
}

export const GoogleCloudSecuritycenterV2MitreAttack: Schema.Schema<GoogleCloudSecuritycenterV2MitreAttack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    primaryTactic: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MitreAttack" });

export interface GoogleCloudSecuritycenterV2Denied {
  /** Optional. Optional list of denied IP rules. */
  ipRules?: ReadonlyArray<GoogleCloudSecuritycenterV2IpRule>;
}

export const GoogleCloudSecuritycenterV2Denied: Schema.Schema<GoogleCloudSecuritycenterV2Denied> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2IpRule)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Denied" });

export interface GoogleCloudSecuritycenterV2Allowed {
  /** Optional. Optional list of allowed IP rules. */
  ipRules?: ReadonlyArray<GoogleCloudSecuritycenterV2IpRule>;
}

export const GoogleCloudSecuritycenterV2Allowed: Schema.Schema<GoogleCloudSecuritycenterV2Allowed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipRules: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2IpRule)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Allowed" });

export interface GoogleCloudSecuritycenterV2IpRules {
  /** Tuple with denied rules. */
  denied?: GoogleCloudSecuritycenterV2Denied;
  /** If source IP ranges are specified, the firewall rule applies only to traffic that has a source IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  sourceIpRanges?: ReadonlyArray<string>;
  /** If destination IP ranges are specified, the firewall rule applies only to traffic that has a destination IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  destinationIpRanges?: ReadonlyArray<string>;
  /** The direction that the rule is applicable to, one of ingress or egress. */
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  /** Tuple with allowed rules. */
  allowed?: GoogleCloudSecuritycenterV2Allowed;
  /** Name of the network protocol service, such as FTP, that is exposed by the open port. Follows the naming convention available at: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml. */
  exposedServices?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2IpRules: Schema.Schema<GoogleCloudSecuritycenterV2IpRules> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    denied: Schema.optional(GoogleCloudSecuritycenterV2Denied),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    direction: Schema.optional(Schema.String),
    allowed: Schema.optional(GoogleCloudSecuritycenterV2Allowed),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRules" });

export interface GoogleCloudSecuritycenterV2Database {
  /** The SQL statement that is associated with the database access. */
  query?: string;
  /** The human-readable name of the database that the user connected to. */
  displayName?: string;
  /** The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change. */
  grantees?: ReadonlyArray<string>;
  /** Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. */
  name?: string;
  /** The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
  version?: string;
  /** The username used to connect to the database. The username might not be an IAM principal and does not have a set format. */
  userName?: string;
}

export const GoogleCloudSecuritycenterV2Database: Schema.Schema<GoogleCloudSecuritycenterV2Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Database" });

export interface GoogleCloudSecuritycenterV2Connection {
  /** Source port. */
  sourcePort?: number;
  /** Destination port. Not present for sockets that are listening and not connected. */
  destinationPort?: number;
  /** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
  /** Destination IP address. Not present for sockets that are listening and not connected. */
  destinationIp?: string;
  /** Source IP address. */
  sourceIp?: string;
}

export const GoogleCloudSecuritycenterV2Connection: Schema.Schema<GoogleCloudSecuritycenterV2Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourcePort: Schema.optional(Schema.Number),
    destinationPort: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
    destinationIp: Schema.optional(Schema.String),
    sourceIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Connection" });

export interface GoogleCloudSecuritycenterV2Compliance {
  /** Policies within the standard or benchmark, for example, A.12.4.1 */
  ids?: ReadonlyArray<string>;
  /** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
  standard?: string;
  /** Version of the standard or benchmark, for example, 1.1 */
  version?: string;
}

export const GoogleCloudSecuritycenterV2Compliance: Schema.Schema<GoogleCloudSecuritycenterV2Compliance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
    standard: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Compliance" });

export interface GoogleCloudSecuritycenterV2Indicator {
  /** The list of matched signatures indicating that the given process is present in the environment. */
  signatures?: ReadonlyArray<GoogleCloudSecuritycenterV2ProcessSignature>;
  /** List of domains associated to the Finding. */
  domains?: ReadonlyArray<string>;
  /** The list of URIs associated to the Findings. */
  uris?: ReadonlyArray<string>;
  /** The list of IP addresses that are associated with the finding. */
  ipAddresses?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Indicator: Schema.Schema<GoogleCloudSecuritycenterV2Indicator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signatures: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ProcessSignature),
    ),
    domains: Schema.optional(Schema.Array(Schema.String)),
    uris: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Indicator" });

export interface GoogleCloudSecuritycenterV2SecretStatus {
  /** Time that the secret was found. */
  lastUpdatedTime?: string;
  /** The validity of the secret. */
  validity?:
    | "SECRET_VALIDITY_UNSPECIFIED"
    | "SECRET_VALIDITY_UNSUPPORTED"
    | "SECRET_VALIDITY_FAILED"
    | "SECRET_VALIDITY_INVALID"
    | "SECRET_VALIDITY_VALID"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SecretStatus: Schema.Schema<GoogleCloudSecuritycenterV2SecretStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdatedTime: Schema.optional(Schema.String),
    validity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecretStatus" });

export interface GoogleCloudSecuritycenterV2Secret {
  /** The type of secret, for example, GCP_API_KEY. */
  type?: string;
  /** The file containing the secret. */
  filePath?: GoogleCloudSecuritycenterV2SecretFilePath;
  /** The status of the secret. */
  status?: GoogleCloudSecuritycenterV2SecretStatus;
  /** The environment variable containing the secret. */
  environmentVariable?: GoogleCloudSecuritycenterV2SecretEnvironmentVariable;
}

export const GoogleCloudSecuritycenterV2Secret: Schema.Schema<GoogleCloudSecuritycenterV2Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    filePath: Schema.optional(GoogleCloudSecuritycenterV2SecretFilePath),
    status: Schema.optional(GoogleCloudSecuritycenterV2SecretStatus),
    environmentVariable: Schema.optional(
      GoogleCloudSecuritycenterV2SecretEnvironmentVariable,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Secret" });

export interface GoogleCloudSecuritycenterV2Pipeline {
  /** Resource name of the pipeline, e.g. projects/{project}/locations/{location}/trainingPipelines/5253428229225578496 */
  name?: string;
  /** The user-defined display name of pipeline, e.g. plants-classification */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Pipeline: Schema.Schema<GoogleCloudSecuritycenterV2Pipeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pipeline" });

export interface GoogleCloudSecuritycenterV2VertexAi {
  /** Pipelines associated with the finding. */
  pipelines?: ReadonlyArray<GoogleCloudSecuritycenterV2Pipeline>;
  /** Datasets associated with the finding. */
  datasets?: ReadonlyArray<GoogleCloudSecuritycenterV2Dataset>;
}

export const GoogleCloudSecuritycenterV2VertexAi: Schema.Schema<GoogleCloudSecuritycenterV2VertexAi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pipelines: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Pipeline),
    ),
    datasets: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Dataset)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2VertexAi" });

export interface GoogleCloudSecuritycenterV2File {
  /** Path of the file in terms of underlying disk/partition identifiers. */
  diskPath?: GoogleCloudSecuritycenterV2DiskPath;
  /** True when the hash covers only a prefix of the file. */
  partiallyHashed?: boolean;
  /** Prefix of the file contents as a JSON-encoded string. */
  contents?: string;
  /** Absolute path of the file as a JSON encoded string. */
  path?: string;
  /** SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file. */
  sha256?: string;
  /** The load state of the file. */
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  /** The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file. */
  hashedSize?: string;
  /** Operation(s) performed on a file. */
  operations?: ReadonlyArray<GoogleCloudSecuritycenterV2FileOperation>;
  /** Size of the file in bytes. */
  size?: string;
}

export const GoogleCloudSecuritycenterV2File: Schema.Schema<GoogleCloudSecuritycenterV2File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskPath: Schema.optional(GoogleCloudSecuritycenterV2DiskPath),
    partiallyHashed: Schema.optional(Schema.Boolean),
    contents: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
    fileLoadState: Schema.optional(Schema.String),
    hashedSize: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2FileOperation),
    ),
    size: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2File" });

export interface GoogleCloudSecuritycenterV2EnvironmentVariable {
  /** Environment variable value as a JSON encoded string. */
  val?: string;
  /** Environment variable name as a JSON encoded string. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2EnvironmentVariable: Schema.Schema<GoogleCloudSecuritycenterV2EnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    val: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2EnvironmentVariable" });

export interface GoogleCloudSecuritycenterV2Process {
  /** File information for libraries loaded by the process. */
  libraries?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  /** The process ID. */
  pid?: string;
  /** Process arguments as JSON encoded strings. */
  args?: ReadonlyArray<string>;
  /** The parent process ID. */
  parentPid?: string;
  /** True if `args` is incomplete. */
  argumentsTruncated?: boolean;
  /** Process environment variables. */
  envVariables?: ReadonlyArray<GoogleCloudSecuritycenterV2EnvironmentVariable>;
  /** The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`. */
  name?: string;
  /** The ID of the user that executed the process. E.g. If this is the root user this will always be 0. */
  userId?: string;
  /** File information for the process executable. */
  binary?: GoogleCloudSecuritycenterV2File;
  /** When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter. */
  script?: GoogleCloudSecuritycenterV2File;
  /** True if `env_variables` is incomplete. */
  envVariablesTruncated?: boolean;
}

export const GoogleCloudSecuritycenterV2Process: Schema.Schema<GoogleCloudSecuritycenterV2Process> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    libraries: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    pid: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    parentPid: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    envVariables: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2EnvironmentVariable),
    ),
    name: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    binary: Schema.optional(GoogleCloudSecuritycenterV2File),
    script: Schema.optional(GoogleCloudSecuritycenterV2File),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Process" });

export interface GoogleCloudSecuritycenterV2Disk {
  /** The name of the disk, for example, "https://www.googleapis.com/compute/v1/projects/{project-id}/zones/{zone-id}/disks/{disk-id}". */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Disk: Schema.Schema<GoogleCloudSecuritycenterV2Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Disk" });

export interface GoogleCloudSecuritycenterV2DynamicMuteRecord {
  /** The relative resource name of the mute rule, represented by a mute config, that created this record, for example `organizations/123/muteConfigs/mymuteconfig` or `organizations/123/locations/global/muteConfigs/mymuteconfig`. */
  muteConfig?: string;
  /** When the dynamic mute rule first matched the finding. */
  matchTime?: string;
}

export const GoogleCloudSecuritycenterV2DynamicMuteRecord: Schema.Schema<GoogleCloudSecuritycenterV2DynamicMuteRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteConfig: Schema.optional(Schema.String),
    matchTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DynamicMuteRecord" });

export interface GoogleCloudSecuritycenterV2StaticMute {
  /** The static mute state. If the value is `MUTED` or `UNMUTED`, then the finding's overall mute state will have the same value. */
  state?:
    | "MUTE_UNSPECIFIED"
    | "MUTED"
    | "UNMUTED"
    | "UNDEFINED"
    | (string & {});
  /** When the static mute was applied. */
  applyTime?: string;
}

export const GoogleCloudSecuritycenterV2StaticMute: Schema.Schema<GoogleCloudSecuritycenterV2StaticMute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    applyTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2StaticMute" });

export interface GoogleCloudSecuritycenterV2MuteInfo {
  /** The list of dynamic mute rules that currently match the finding. */
  dynamicMuteRecords?: ReadonlyArray<GoogleCloudSecuritycenterV2DynamicMuteRecord>;
  /** If set, the static mute applied to this finding. Static mutes override dynamic mutes. If unset, there is no static mute. */
  staticMute?: GoogleCloudSecuritycenterV2StaticMute;
}

export const GoogleCloudSecuritycenterV2MuteInfo: Schema.Schema<GoogleCloudSecuritycenterV2MuteInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamicMuteRecords: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DynamicMuteRecord),
    ),
    staticMute: Schema.optional(GoogleCloudSecuritycenterV2StaticMute),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteInfo" });

export interface GoogleCloudSecuritycenterV2Network {
  /** The name of the VPC network resource, for example, `//compute.googleapis.com/projects/my-project/global/networks/my-network`. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Network: Schema.Schema<GoogleCloudSecuritycenterV2Network> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Network" });

export interface GoogleCloudSecuritycenterV2SecurityMarks {
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name The following list shows some examples: + `organizations/{organization_id}/assets/{asset_id}/securityMarks` + `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks` + `organizations/{organization_id}/sources/{source_id}/locations/{location}/findings/{finding_id}/securityMarks` */
  name?: string;
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
  /** The canonical name of the marks. The following list shows some examples: + `organizations/{organization_id}/assets/{asset_id}/securityMarks` + `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks` + `organizations/{organization_id}/sources/{source_id}/locations/{location}/findings/{finding_id}/securityMarks` + `folders/{folder_id}/assets/{asset_id}/securityMarks` + `folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks` + `folders/{folder_id}/sources/{source_id}/locations/{location}/findings/{finding_id}/securityMarks` + `projects/{project_number}/assets/{asset_id}/securityMarks` + `projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks` + `projects/{project_number}/sources/{source_id}/locations/{location}/findings/{finding_id}/securityMarks` */
  canonicalName?: string;
}

export const GoogleCloudSecuritycenterV2SecurityMarks: Schema.Schema<GoogleCloudSecuritycenterV2SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityMarks" });

export interface GoogleCloudSecuritycenterV2AccessReview {
  /** A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all. */
  verb?: string;
  /** The optional subresource type. */
  subresource?: string;
  /** The API group of the resource. "*" means all. */
  group?: string;
  /** Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty). */
  ns?: string;
  /** The name of the resource being requested. Empty means all. */
  name?: string;
  /** The optional resource type requested. "*" means all. */
  resource?: string;
  /** The API version of the resource. "*" means all. */
  version?: string;
}

export const GoogleCloudSecuritycenterV2AccessReview: Schema.Schema<GoogleCloudSecuritycenterV2AccessReview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AccessReview" });

export interface GoogleCloudSecuritycenterV2Subject {
  /** Authentication type for the subject. */
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  /** Name for the subject. */
  name?: string;
  /** Namespace for the subject. */
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Subject: Schema.Schema<GoogleCloudSecuritycenterV2Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Subject" });

export interface GoogleCloudSecuritycenterV2Binding {
  /** The Role or ClusterRole referenced by the binding. */
  role?: GoogleCloudSecuritycenterV2Role;
  /** Namespace for the binding. */
  ns?: string;
  /** Name for the binding. */
  name?: string;
  /** Represents one or more subjects that are bound to the role. Not always available for PATCH requests. */
  subjects?: ReadonlyArray<GoogleCloudSecuritycenterV2Subject>;
}

export const GoogleCloudSecuritycenterV2Binding: Schema.Schema<GoogleCloudSecuritycenterV2Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(GoogleCloudSecuritycenterV2Role),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    subjects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Subject)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Binding" });

export interface GoogleCloudSecuritycenterV2Pod {
  /** Kubernetes Pod name. */
  name?: string;
  /** Kubernetes Pod namespace. */
  ns?: string;
  /** Pod labels. For Kubernetes containers, these are applied to the container. */
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
}

export const GoogleCloudSecuritycenterV2Pod: Schema.Schema<GoogleCloudSecuritycenterV2Pod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pod" });

export interface GoogleCloudSecuritycenterV2Kubernetes {
  /** Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. */
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
  /** GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. */
  nodePools?: ReadonlyArray<GoogleCloudSecuritycenterV2NodePool>;
  /** Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. */
  accessReviews?: ReadonlyArray<GoogleCloudSecuritycenterV2AccessReview>;
  /** Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV2Binding>;
  /** Kubernetes objects related to the finding. */
  objects?: ReadonlyArray<GoogleCloudSecuritycenterV2Object>;
  /** Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. */
  pods?: ReadonlyArray<GoogleCloudSecuritycenterV2Pod>;
  /** Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  roles?: ReadonlyArray<GoogleCloudSecuritycenterV2Role>;
}

export const GoogleCloudSecuritycenterV2Kubernetes: Schema.Schema<GoogleCloudSecuritycenterV2Kubernetes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
    nodePools: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2NodePool),
    ),
    accessReviews: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AccessReview),
    ),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Binding)),
    objects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Object)),
    pods: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Pod)),
    roles: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Role)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Kubernetes" });

export interface GoogleCloudSecuritycenterV2DiscoveredWorkload {
  /** The type of workload. */
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MCP_SERVER"
    | "AI_INFERENCE"
    | "AGENT"
    | (string & {});
  /** A boolean flag set to true if associated keywords strongly predict the workload type. */
  detectedRelevantKeywords?: boolean;
  /** The confidence in detection of this workload. */
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
  /** A boolean flag set to true if installed packages strongly predict the workload type. */
  detectedRelevantPackages?: boolean;
  /** A boolean flag set to true if associated hardware strongly predicts the workload type. */
  detectedRelevantHardware?: boolean;
}

export const GoogleCloudSecuritycenterV2DiscoveredWorkload: Schema.Schema<GoogleCloudSecuritycenterV2DiscoveredWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workloadType: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
    confidence: Schema.optional(Schema.String),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiscoveredWorkload" });

export interface GoogleCloudSecuritycenterV2CloudDlpDataProfile {
  /** Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`. */
  dataProfile?: string;
  /** The resource hierarchy level at which the data profile was generated. */
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
  /** Type of information detected by SDP. Info type includes name, version and sensitivity of the detected information type. */
  infoTypes?: ReadonlyArray<GoogleCloudSecuritycenterV2InfoType>;
}

export const GoogleCloudSecuritycenterV2CloudDlpDataProfile: Schema.Schema<GoogleCloudSecuritycenterV2CloudDlpDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataProfile: Schema.optional(Schema.String),
    parentType: Schema.optional(Schema.String),
    infoTypes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2InfoType),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpDataProfile" });

export interface GoogleCloudSecuritycenterV2DataFlowEvent {
  /** Unique identifier for data flow event. */
  eventId?: string;
  /** The email address of the principal that initiated the data flow event. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
  /** Non-compliant location of the principal or the data destination. */
  violatedLocation?: string;
  /** The operation performed by the principal for the data flow event. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data flow event. */
  eventTime?: string;
}

export const GoogleCloudSecuritycenterV2DataFlowEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataFlowEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataFlowEvent" });

export interface GoogleCloudSecuritycenterV2Job {
  /** Optional. If the job did not complete successfully, this field describes why. */
  errorCode?: number;
  /** The fully-qualified name for a job. e.g. `projects//jobs/` */
  name?: string;
  /** Output only. State of the job, such as `RUNNING` or `PENDING`. */
  state?:
    | "JOB_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Optional. Gives the location where the job ran, such as `US` or `europe-west1` */
  location?: string;
}

export const GoogleCloudSecuritycenterV2Job: Schema.Schema<GoogleCloudSecuritycenterV2Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCode: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Job" });

export interface GoogleCloudSecuritycenterV2TicketInfo {
  /** The time when the ticket was last updated, as reported by the ticket system. */
  updateTime?: string;
  /** The assignee of the ticket in the ticket system. */
  assignee?: string;
  /** The identifier of the ticket in the ticket system. */
  id?: string;
  /** The link to the ticket in the ticket system. */
  uri?: string;
  /** The description of the ticket in the ticket system. */
  description?: string;
  /** The latest status of the ticket, as reported by the ticket system. */
  status?: string;
}

export const GoogleCloudSecuritycenterV2TicketInfo: Schema.Schema<GoogleCloudSecuritycenterV2TicketInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2TicketInfo" });

export interface GoogleCloudSecuritycenterV2ExternalSystem {
  /** The time when the case was last updated, as reported by the external system. */
  externalSystemUpdateTime?: string;
  /** The time when the case was created, as reported by the external system. */
  caseCreateTime?: string;
  /** The identifier that's used to track the finding's corresponding case in the external system. */
  externalUid?: string;
  /** Full resource name of the external system. The following list shows some examples: + `organizations/1234/sources/5678/findings/123456/externalSystems/jira` + `organizations/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` + `folders/1234/sources/5678/findings/123456/externalSystems/jira` + `folders/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` + `projects/1234/sources/5678/findings/123456/externalSystems/jira` + `projects/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` */
  name?: string;
  /** The SLA of the finding's corresponding case in the external system. */
  caseSla?: string;
  /** References primary/secondary etc assignees in the external system. */
  assignees?: ReadonlyArray<string>;
  /** The link to the finding's corresponding case in the external system. */
  caseUri?: string;
  /** The time when the case was closed, as reported by the external system. */
  caseCloseTime?: string;
  /** The priority of the finding's corresponding case in the external system. */
  casePriority?: string;
  /** The most recent status of the finding's corresponding case, as reported by the external system. */
  status?: string;
  /** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
  ticketInfo?: GoogleCloudSecuritycenterV2TicketInfo;
}

export const GoogleCloudSecuritycenterV2ExternalSystem: Schema.Schema<GoogleCloudSecuritycenterV2ExternalSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalSystemUpdateTime: Schema.optional(Schema.String),
    caseCreateTime: Schema.optional(Schema.String),
    externalUid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    caseUri: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(GoogleCloudSecuritycenterV2TicketInfo),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalSystem" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicy {
  /** The type of the policy evaluation. */
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
  /** The ID of the failing policy, for example, "organizations/3392779/locations/global/policies/prod-policy". */
  policyId?: string;
  /** The reason for the policy failure, for example, "severity=HIGH AND max_vuln_count=2". */
  failureReason?: string;
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicy: Schema.Schema<GoogleCloudSecuritycenterV2ArtifactGuardPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    policyId: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicy" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicies {
  /** The ID of the resource that has policies configured for it. */
  resourceId?: string;
  /** A list of failing policies. */
  failingPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2ArtifactGuardPolicy>;
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicies: Schema.Schema<GoogleCloudSecuritycenterV2ArtifactGuardPolicies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
    failingPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ArtifactGuardPolicy),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicies",
  });

export interface GoogleCloudSecuritycenterV2DataAccessEvent {
  /** The operation performed by the principal to access the data. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data access event. */
  eventTime?: string;
  /** Unique identifier for data access event. */
  eventId?: string;
  /** The email address of the principal that accessed the data. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
}

export const GoogleCloudSecuritycenterV2DataAccessEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataAccessEvent" });

export interface GoogleCloudSecuritycenterV2Application {
  /** The full URI with payload that could be used to reproduce the vulnerability. For example, `http://example.com?p=aMmYgI6H`. */
  fullUri?: string;
  /** The base URI that identifies the network location of the application in which the vulnerability was detected. For example, `http://example.com`. */
  baseUri?: string;
}

export const GoogleCloudSecuritycenterV2Application: Schema.Schema<GoogleCloudSecuritycenterV2Application> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullUri: Schema.optional(Schema.String),
    baseUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Application" });

export interface GoogleCloudSecuritycenterV2Notebook {
  /** The source notebook service, for example, "Colab Enterprise". */
  service?: string;
  /** The user ID of the latest author to modify the notebook. */
  lastAuthor?: string;
  /** The name of the notebook. */
  name?: string;
  /** The most recent time the notebook was updated. */
  notebookUpdateTime?: string;
}

export const GoogleCloudSecuritycenterV2Notebook: Schema.Schema<GoogleCloudSecuritycenterV2Notebook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Notebook" });

export interface GoogleCloudSecuritycenterV2BackupDisasterRecovery {
  /** The backup type of the Backup and DR image. For example, `Snapshot`, `Remote Snapshot`, `OnVault`. */
  backupType?: string;
  /** The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, `onvaults`. */
  policies?: ReadonlyArray<string>;
  /** The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, `GCP`. */
  profile?: string;
  /** The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, `centos7-01`. */
  host?: string;
  /** The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, `backup-server-57137`. */
  appliance?: string;
  /** The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, `centos7-01-vol00`, `centos7-01-vol01`, `centos7-01-vol02`. */
  applications?: ReadonlyArray<string>;
  /** The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, `skipofflineappsincongrp, nounmap`. */
  policyOptions?: ReadonlyArray<string>;
  /** The timestamp at which the Backup and DR backup was created. */
  backupCreateTime?: string;
  /** The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, `snap-ov`. */
  backupTemplate?: string;
  /** The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, `DiskPoolOne`. */
  storagePool?: string;
}

export const GoogleCloudSecuritycenterV2BackupDisasterRecovery: Schema.Schema<GoogleCloudSecuritycenterV2BackupDisasterRecovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupType: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    profile: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    appliance: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    backupCreateTime: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2BackupDisasterRecovery",
  });

export interface GoogleCloudSecuritycenterV2LoadBalancer {
  /** The name of the load balancer associated with the finding. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2LoadBalancer: Schema.Schema<GoogleCloudSecuritycenterV2LoadBalancer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LoadBalancer" });

export interface GoogleCloudSecuritycenterV2PolicyDriftDetails {
  /** The name of the updated field, for example constraint.implementation.policy_rules[0].enforce */
  field?: string;
  /** The detected value that violates the deployed posture, for example, `false` or `allowed_values={"projects/22831892"}`. */
  detectedValue?: string;
  /** The value of this field that was configured in a posture, for example, `true` or `allowed_values={"projects/29831892"}`. */
  expectedValue?: string;
}

export const GoogleCloudSecuritycenterV2PolicyDriftDetails: Schema.Schema<GoogleCloudSecuritycenterV2PolicyDriftDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    detectedValue: Schema.optional(Schema.String),
    expectedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2PolicyDriftDetails" });

export interface GoogleCloudSecuritycenterV2SecurityPosture {
  /** The project, folder, or organization on which the posture is deployed, for example, `projects/{project_number}`. */
  postureDeploymentResource?: string;
  /** The name of the posture deployment, for example, `organizations/{org_id}/posturedeployments/{posture_deployment_id}`. */
  postureDeployment?: string;
  /** The details about a change in an updated policy that violates the deployed posture. */
  policyDriftDetails?: ReadonlyArray<GoogleCloudSecuritycenterV2PolicyDriftDetails>;
  /** The name of the updated policy set, for example, `cis-policyset`. */
  policySet?: string;
  /** The version of the posture, for example, `c7cfa2a8`. */
  revisionId?: string;
  /** The name of the updated policy, for example, `projects/{project_id}/policies/{constraint_name}`. */
  changedPolicy?: string;
  /** Name of the posture, for example, `CIS-Posture`. */
  name?: string;
  /** The ID of the updated policy, for example, `compute-policy-1`. */
  policy?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPosture: Schema.Schema<GoogleCloudSecuritycenterV2SecurityPosture> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postureDeploymentResource: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PolicyDriftDetails),
    ),
    policySet: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPosture" });

export interface GoogleCloudSecuritycenterV2Requests {
  /** Allowed RPS (requests per second) over the long term. */
  longTermAllowed?: number;
  /** Denied RPS (requests per second) over the long term. */
  longTermDenied?: number;
  /** Allowed RPS (requests per second) in the short term. */
  shortTermAllowed?: number;
  /** For 'Increasing deny ratio', the ratio is the denied traffic divided by the allowed traffic. For 'Allowed traffic spike', the ratio is the allowed traffic in the short term divided by allowed traffic in the long term. */
  ratio?: number;
}

export const GoogleCloudSecuritycenterV2Requests: Schema.Schema<GoogleCloudSecuritycenterV2Requests> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    longTermAllowed: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
    ratio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Requests" });

export interface GoogleCloudSecuritycenterV2Attack {
  /** Total BPS (bytes per second) volume of attack. Deprecated - refer to volume_bps_long instead. */
  volumeBps?: number;
  /** Total BPS (bytes per second) volume of attack. */
  volumeBpsLong?: string;
  /** Total PPS (packets per second) volume of attack. Deprecated - refer to volume_pps_long instead. */
  volumePps?: number;
  /** Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'. */
  classification?: string;
  /** Total PPS (packets per second) volume of attack. */
  volumePpsLong?: string;
}

export const GoogleCloudSecuritycenterV2Attack: Schema.Schema<GoogleCloudSecuritycenterV2Attack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeBps: Schema.optional(Schema.Number),
    volumeBpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    classification: Schema.optional(Schema.String),
    volumePpsLong: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Attack" });

export interface GoogleCloudSecuritycenterV2AdaptiveProtection {
  /** A score of 0 means that there is low confidence that the detected event is an actual attack. A score of 1 means that there is high confidence that the detected event is an attack. See the [Adaptive Protection documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning) for further explanation. */
  confidence?: number;
}

export const GoogleCloudSecuritycenterV2AdaptiveProtection: Schema.Schema<GoogleCloudSecuritycenterV2AdaptiveProtection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdaptiveProtection" });

export interface GoogleCloudSecuritycenterV2CloudArmor {
  /** Information about incoming requests evaluated by [Google Cloud Armor security policies](https://cloud.google.com/armor/docs/security-policy-overview). */
  requests?: GoogleCloudSecuritycenterV2Requests;
  /** Distinguish between volumetric & protocol DDoS attack and application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS attacks, or "L_7" for Layer 7 DDoS attacks. */
  threatVector?: string;
  /** Duration of attack from the start until the current moment (updated every 5 minutes). */
  duration?: string;
  /** Information about DDoS attack volume and classification. */
  attack?: GoogleCloudSecuritycenterV2Attack;
  /** Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding. */
  securityPolicy?: GoogleCloudSecuritycenterV2SecurityPolicy;
  /** Information about potential Layer 7 DDoS attacks identified by [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview). */
  adaptiveProtection?: GoogleCloudSecuritycenterV2AdaptiveProtection;
}

export const GoogleCloudSecuritycenterV2CloudArmor: Schema.Schema<GoogleCloudSecuritycenterV2CloudArmor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(GoogleCloudSecuritycenterV2Requests),
    threatVector: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    attack: Schema.optional(GoogleCloudSecuritycenterV2Attack),
    securityPolicy: Schema.optional(GoogleCloudSecuritycenterV2SecurityPolicy),
    adaptiveProtection: Schema.optional(
      GoogleCloudSecuritycenterV2AdaptiveProtection,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudArmor" });

export interface GoogleCloudSecuritycenterV2ToxicCombination {
  /** The [Attack exposure score](https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_exposure_scores) of this toxic combination. The score is a measure of how much this toxic combination exposes one or more high-value resources to potential attack. */
  attackExposureScore?: number;
  /** List of resource names of findings associated with this toxic combination. For example, `organizations/123/sources/456/findings/789`. */
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2ToxicCombination: Schema.Schema<GoogleCloudSecuritycenterV2ToxicCombination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attackExposureScore: Schema.optional(Schema.Number),
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ToxicCombination" });

export interface GoogleCloudSecuritycenterV2AffectedResources {
  /** The count of resources affected by the finding. */
  count?: string;
}

export const GoogleCloudSecuritycenterV2AffectedResources: Schema.Schema<GoogleCloudSecuritycenterV2AffectedResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AffectedResources" });

export interface GoogleCloudSecuritycenterV2AttackExposure {
  /** The number of medium value resources that are exposed as a result of this finding. */
  exposedMediumValueResourcesCount?: number;
  /** A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate. */
  score?: number;
  /** The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: `organizations/123/simulations/456/attackExposureResults/789` */
  attackExposureResult?: string;
  /** Output only. What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. */
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedHighValueResourcesCount?: number;
  /** The most recent time the attack exposure was updated on this finding. */
  latestCalculationTime?: string;
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedLowValueResourcesCount?: number;
}

export const GoogleCloudSecuritycenterV2AttackExposure: Schema.Schema<GoogleCloudSecuritycenterV2AttackExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    attackExposureResult: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    latestCalculationTime: Schema.optional(Schema.String),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AttackExposure" });

export interface GoogleCloudSecuritycenterV2OrgPolicy {
  /** Identifier. The resource name of the org policy. Example: "organizations/{organization_id}/policies/{constraint_name}" */
  name?: string;
}

export const GoogleCloudSecuritycenterV2OrgPolicy: Schema.Schema<GoogleCloudSecuritycenterV2OrgPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2OrgPolicy" });

export interface GoogleCloudSecuritycenterV2CloudLoggingEntry {
  /** The organization, folder, or project of the monitored resource that produced this log entry. */
  resourceContainer?: string;
  /** The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity` Note that this field is not URL-encoded, unlike in `LogEntry`. */
  logId?: string;
  /** A unique identifier for the log entry. */
  insertId?: string;
  /** The time the event described by the log entry occurred. */
  timestamp?: string;
}

export const GoogleCloudSecuritycenterV2CloudLoggingEntry: Schema.Schema<GoogleCloudSecuritycenterV2CloudLoggingEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceContainer: Schema.optional(Schema.String),
    logId: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudLoggingEntry" });

export interface GoogleCloudSecuritycenterV2LogEntry {
  /** An individual entry in a log stored in Cloud Logging. */
  cloudLoggingEntry?: GoogleCloudSecuritycenterV2CloudLoggingEntry;
}

export const GoogleCloudSecuritycenterV2LogEntry: Schema.Schema<GoogleCloudSecuritycenterV2LogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudLoggingEntry: Schema.optional(
      GoogleCloudSecuritycenterV2CloudLoggingEntry,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LogEntry" });

export interface GoogleCloudSecuritycenterV2Finding {
  /** Data retention deletion events associated with the finding. */
  dataRetentionDeletionEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent>;
  /** Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics". */
  parentDisplayName?: string;
  /** Agent data access events associated with the finding. */
  agentDataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2AgentDataAccessEvent>;
  /** Represents exfiltrations associated with the finding. */
  exfiltration?: GoogleCloudSecuritycenterV2Exfiltration;
  /** Signature of the kernel rootkit. */
  kernelRootkit?: GoogleCloudSecuritycenterV2KernelRootkit;
  /** Records additional information about the mute operation, for example, the [mute configuration](https://cloud.google.com/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. */
  muteInitiator?: string;
  /** Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  vulnerability?: GoogleCloudSecuritycenterV2Vulnerability;
  /** The AI model associated with the finding. */
  aiModel?: GoogleCloudSecuritycenterV2AiModel;
  /** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
  mitreAttack?: GoogleCloudSecuritycenterV2MitreAttack;
  /** Output only. The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** IP rules associated with the finding. */
  ipRules?: GoogleCloudSecuritycenterV2IpRules;
  /** Database associated with the finding. */
  database?: GoogleCloudSecuritycenterV2Database;
  /** Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  /** Contains information about the IP connection associated with the finding. */
  connections?: ReadonlyArray<GoogleCloudSecuritycenterV2Connection>;
  /** Contains compliance information for security standards associated to the finding. */
  compliances?: ReadonlyArray<GoogleCloudSecuritycenterV2Compliance>;
  /** Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
  indicator?: GoogleCloudSecuritycenterV2Indicator;
  /** External exposure associated with the finding. */
  externalExposure?: GoogleCloudSecuritycenterV2ExternalExposure;
  /** Secret associated with the finding. */
  secret?: GoogleCloudSecuritycenterV2Secret;
  /** VertexAi associated with the finding. */
  vertexAi?: GoogleCloudSecuritycenterV2VertexAi;
  /** Represents operating system processes associated with the Finding. */
  processes?: ReadonlyArray<GoogleCloudSecuritycenterV2Process>;
  /** The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** Disk associated with the finding. */
  disk?: GoogleCloudSecuritycenterV2Disk;
  /** Output only. The mute information regarding this finding. */
  muteInfo?: GoogleCloudSecuritycenterV2MuteInfo;
  /** Immutable. The additional taxonomy group within findings from a given source. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** Represents the VPC networks that the resource is attached to. */
  networks?: ReadonlyArray<GoogleCloudSecuritycenterV2Network>;
  /** Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 */
  moduleName?: string;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: GoogleCloudSecuritycenterV2SecurityMarks;
  /** PolicyViolationSummary associated with the finding. */
  policyViolationSummary?: GoogleCloudSecuritycenterV2PolicyViolationSummary;
  /** Access details associated with the finding, such as more information on the caller, which method was accessed, and from where. */
  access?: GoogleCloudSecuritycenterV2Access;
  /** File associated with the finding. */
  files?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  /** Output only. The name of the Cloud KMS key used to encrypt this finding, if any. */
  cryptoKeyName?: string;
  /** Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding. */
  cloudDlpInspection?: GoogleCloudSecuritycenterV2CloudDlpInspection;
  /** Output only. The most recent time this finding was muted or unmuted. */
  muteUpdateTime?: string;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** Kubernetes resources associated with the finding. */
  kubernetes?: GoogleCloudSecuritycenterV2Kubernetes;
  /** DiscoveredWorkload associated with the finding. */
  discoveredWorkload?: GoogleCloudSecuritycenterV2DiscoveredWorkload;
  /** Cloud DLP data profile that is associated with the finding. */
  cloudDlpDataProfile?: GoogleCloudSecuritycenterV2CloudDlpDataProfile;
  /** The relative resource name of the source and location the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}` + `folders/{folders_id}/sources/{source_id}` + `projects/{projects_id}/sources/{source_id}` + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}` + `folders/{folders_id}/sources/{source_id}/locations/{location_id}` + `projects/{projects_id}/sources/{source_id}/locations/{location_id}` */
  parent?: string;
  /** Data flow events associated with the finding. */
  dataFlowEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataFlowEvent>;
  /** Job associated with the finding. */
  job?: GoogleCloudSecuritycenterV2Job;
  /** Represents IAM bindings associated with the finding. */
  iamBindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IamBinding>;
  /** Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. */
  externalSystems?: Record<string, GoogleCloudSecuritycenterV2ExternalSystem>;
  /** ArtifactGuardPolicies associated with the finding. */
  artifactGuardPolicies?: GoogleCloudSecuritycenterV2ArtifactGuardPolicies;
  /** Data access events associated with the finding. */
  dataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataAccessEvent>;
  /** Represents an application associated with the finding. */
  application?: GoogleCloudSecuritycenterV2Application;
  /** Notebook associated with the finding. */
  notebook?: GoogleCloudSecuritycenterV2Notebook;
  /** Contains more details about the finding. */
  description?: string;
  /** Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests. */
  chokepoint?: GoogleCloudSecuritycenterV2Chokepoint;
  /** Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests. */
  groupMemberships?: ReadonlyArray<GoogleCloudSecuritycenterV2GroupMembership>;
  /** Fields related to Backup and DR findings. */
  backupDisasterRecovery?: GoogleCloudSecuritycenterV2BackupDisasterRecovery;
  /** The load balancers associated with the finding. */
  loadBalancers?: ReadonlyArray<GoogleCloudSecuritycenterV2LoadBalancer>;
  /** Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } } */
  contacts?: Record<string, GoogleCloudSecuritycenterV2ContactDetails>;
  /** Output only. The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** Steps to address the finding. */
  nextSteps?: string;
  /** Immutable. For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. */
  resourceName?: string;
  /** The security posture associated with the finding. */
  securityPosture?: GoogleCloudSecuritycenterV2SecurityPosture;
  /** Fields related to Cloud Armor findings. */
  cloudArmor?: GoogleCloudSecuritycenterV2CloudArmor;
  /** Output only. The canonical name of the finding. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` The prefix is the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests. */
  toxicCombination?: GoogleCloudSecuritycenterV2ToxicCombination;
  /** AffectedResources associated with the finding. */
  affectedResources?: GoogleCloudSecuritycenterV2AffectedResources;
  /** The class of the finding. */
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
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** The results of an attack path simulation relevant to this finding. */
  attackExposure?: GoogleCloudSecuritycenterV2AttackExposure;
  /** Contains information about the org policies associated with the finding. */
  orgPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2OrgPolicy>;
  /** Log entries that are relevant to the finding. */
  logEntries?: ReadonlyArray<GoogleCloudSecuritycenterV2LogEntry>;
  /** Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute. */
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  /** Identifier. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}` + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` */
  name?: string;
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** Details about the compliance implications of the finding. */
  complianceDetails?: GoogleCloudSecuritycenterV2ComplianceDetails;
}

export const GoogleCloudSecuritycenterV2Finding: Schema.Schema<GoogleCloudSecuritycenterV2Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataRetentionDeletionEvent),
    ),
    parentDisplayName: Schema.optional(Schema.String),
    agentDataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AgentDataAccessEvent),
    ),
    exfiltration: Schema.optional(GoogleCloudSecuritycenterV2Exfiltration),
    kernelRootkit: Schema.optional(GoogleCloudSecuritycenterV2KernelRootkit),
    muteInitiator: Schema.optional(Schema.String),
    vulnerability: Schema.optional(GoogleCloudSecuritycenterV2Vulnerability),
    aiModel: Schema.optional(GoogleCloudSecuritycenterV2AiModel),
    mitreAttack: Schema.optional(GoogleCloudSecuritycenterV2MitreAttack),
    createTime: Schema.optional(Schema.String),
    ipRules: Schema.optional(GoogleCloudSecuritycenterV2IpRules),
    database: Schema.optional(GoogleCloudSecuritycenterV2Database),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    connections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Connection),
    ),
    compliances: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Compliance),
    ),
    indicator: Schema.optional(GoogleCloudSecuritycenterV2Indicator),
    externalExposure: Schema.optional(
      GoogleCloudSecuritycenterV2ExternalExposure,
    ),
    secret: Schema.optional(GoogleCloudSecuritycenterV2Secret),
    vertexAi: Schema.optional(GoogleCloudSecuritycenterV2VertexAi),
    processes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Process),
    ),
    eventTime: Schema.optional(Schema.String),
    disk: Schema.optional(GoogleCloudSecuritycenterV2Disk),
    muteInfo: Schema.optional(GoogleCloudSecuritycenterV2MuteInfo),
    category: Schema.optional(Schema.String),
    networks: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Network)),
    moduleName: Schema.optional(Schema.String),
    securityMarks: Schema.optional(GoogleCloudSecuritycenterV2SecurityMarks),
    policyViolationSummary: Schema.optional(
      GoogleCloudSecuritycenterV2PolicyViolationSummary,
    ),
    access: Schema.optional(GoogleCloudSecuritycenterV2Access),
    files: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    cryptoKeyName: Schema.optional(Schema.String),
    cloudDlpInspection: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpInspection,
    ),
    muteUpdateTime: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    kubernetes: Schema.optional(GoogleCloudSecuritycenterV2Kubernetes),
    discoveredWorkload: Schema.optional(
      GoogleCloudSecuritycenterV2DiscoveredWorkload,
    ),
    cloudDlpDataProfile: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpDataProfile,
    ),
    parent: Schema.optional(Schema.String),
    dataFlowEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataFlowEvent),
    ),
    job: Schema.optional(GoogleCloudSecuritycenterV2Job),
    iamBindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamBinding),
    ),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ExternalSystem),
    ),
    artifactGuardPolicies: Schema.optional(
      GoogleCloudSecuritycenterV2ArtifactGuardPolicies,
    ),
    dataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataAccessEvent),
    ),
    application: Schema.optional(GoogleCloudSecuritycenterV2Application),
    notebook: Schema.optional(GoogleCloudSecuritycenterV2Notebook),
    description: Schema.optional(Schema.String),
    chokepoint: Schema.optional(GoogleCloudSecuritycenterV2Chokepoint),
    groupMemberships: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2GroupMembership),
    ),
    backupDisasterRecovery: Schema.optional(
      GoogleCloudSecuritycenterV2BackupDisasterRecovery,
    ),
    loadBalancers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LoadBalancer),
    ),
    contacts: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ContactDetails),
    ),
    state: Schema.optional(Schema.String),
    nextSteps: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    securityPosture: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityPosture,
    ),
    cloudArmor: Schema.optional(GoogleCloudSecuritycenterV2CloudArmor),
    canonicalName: Schema.optional(Schema.String),
    toxicCombination: Schema.optional(
      GoogleCloudSecuritycenterV2ToxicCombination,
    ),
    affectedResources: Schema.optional(
      GoogleCloudSecuritycenterV2AffectedResources,
    ),
    findingClass: Schema.optional(Schema.String),
    externalUri: Schema.optional(Schema.String),
    attackExposure: Schema.optional(GoogleCloudSecuritycenterV2AttackExposure),
    orgPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2OrgPolicy),
    ),
    logEntries: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LogEntry),
    ),
    mute: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    complianceDetails: Schema.optional(
      GoogleCloudSecuritycenterV2ComplianceDetails,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Finding" });

export interface GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision {
  /** The resource name of an ADC Application Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision: Schema.Schema<GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo {
  /** Email address of the contacts. */
  email?: string;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality {
  /** Criticality Type. */
  type?:
    | "CRITICALITY_TYPE_UNSPECIFIED"
    | "MISSION_CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment {
  /** Environment Type. */
  type?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "PRODUCTION"
    | "STAGING"
    | "TEST"
    | "DEVELOPMENT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributes {
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ResourceApplicationAttributes",
  });

export interface GoogleCloudSecuritycenterV2ResourceApplication {
  /** The resource name of an Application. Format: `projects/{host-project-id}/locations/{location}/applications/{application-id}` */
  name?: string;
  /** Consumer provided attributes for the application */
  attributes?: GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2ResourceApplication: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceApplication" });

export interface GoogleCloudSecuritycenterV2ResourcePath {
  /** The list of nodes that make the up resource path, ordered from lowest level to highest level. */
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourcePathNode>;
}

export const GoogleCloudSecuritycenterV2ResourcePath: Schema.Schema<GoogleCloudSecuritycenterV2ResourcePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ResourcePathNode),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourcePath" });

export interface GoogleCloudSecuritycenterV2AdcApplication {
  /** The resource name of an ADC Application. Format: projects/{project}/locations/{location}/spaces/{space}/applications/{application} */
  name?: string;
  /** Consumer provided attributes for the AppHub application. */
  attributes?: GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2AdcApplication: Schema.Schema<GoogleCloudSecuritycenterV2AdcApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributes,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdcApplication" });

export interface GoogleCloudSecuritycenterV2Folder {
  /** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceFolder?: string;
  /** The user defined display name for this folder. */
  resourceFolderDisplayName?: string;
}

export const GoogleCloudSecuritycenterV2Folder: Schema.Schema<GoogleCloudSecuritycenterV2Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceFolder: Schema.optional(Schema.String),
    resourceFolderDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Folder" });

export interface GcpMetadata {
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
  /** The full resource name of resource's parent. */
  parent?: string;
  /** The name of the organization that the resource belongs to. */
  organization?: string;
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** The project ID that the resource belongs to. */
  projectDisplayName?: string;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV2Folder>;
}

export const GcpMetadata: Schema.Schema<GcpMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentDisplayName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    projectDisplayName: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Folder)),
  }).annotate({ identifier: "GcpMetadata" });

export interface GoogleCloudSecuritycenterV2AdcSharedTemplateRevision {
  /** The resource name of an ADC Shared Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcSharedTemplateRevision: Schema.Schema<GoogleCloudSecuritycenterV2AdcSharedTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AdcSharedTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2Resource {
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision;
  /** The service or resource provider associated with the resource. */
  service?: string;
  /** The App Hub application this resource belongs to. */
  application?: GoogleCloudSecuritycenterV2ResourceApplication;
  /** The AWS metadata associated with the finding. */
  awsMetadata?: GoogleCloudSecuritycenterV2AwsMetadata;
  /** Provides the path to the resource within the resource hierarchy. */
  resourcePath?: GoogleCloudSecuritycenterV2ResourcePath;
  /** A string representation of the resource path. For Google Cloud, it has the format of `organizations/{organization_id}/folders/{folder_id}/folders/{folder_id}/projects/{project_id}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id}/ou/{organizational_unit_id}/ou/{organizational_unit_id}/account/{account_id}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id}/mg/{management_group_id}/subscription/{subscription_id}/rg/{resource_group_name}` where there can be any number of management groups. */
  resourcePathString?: string;
  /** The human readable name of the resource. */
  displayName?: string;
  /** Indicates which cloud provider the finding is from. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The Azure metadata associated with the finding. */
  azureMetadata?: GoogleCloudSecuritycenterV2AzureMetadata;
  /** The ADC application associated with the finding. */
  adcApplication?: GoogleCloudSecuritycenterV2AdcApplication;
  /** The region or location of the service (if applicable). */
  location?: string;
  /** The Google Cloud metadata associated with the finding. */
  gcpMetadata?: GcpMetadata;
  /** The full resource type of the resource. */
  type?: string;
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: GoogleCloudSecuritycenterV2AdcSharedTemplateRevision;
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Resource: Schema.Schema<GoogleCloudSecuritycenterV2Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision,
    ),
    service: Schema.optional(Schema.String),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplication,
    ),
    awsMetadata: Schema.optional(GoogleCloudSecuritycenterV2AwsMetadata),
    resourcePath: Schema.optional(GoogleCloudSecuritycenterV2ResourcePath),
    resourcePathString: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(GoogleCloudSecuritycenterV2AzureMetadata),
    adcApplication: Schema.optional(GoogleCloudSecuritycenterV2AdcApplication),
    location: Schema.optional(Schema.String),
    gcpMetadata: Schema.optional(GcpMetadata),
    type: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcSharedTemplateRevision,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Resource" });

export interface GoogleCloudSecuritycenterV2NotificationMessage {
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: GoogleCloudSecuritycenterV2Finding;
  /** The Cloud resource tied to this notification's Finding. */
  resource?: GoogleCloudSecuritycenterV2Resource;
}

export const GoogleCloudSecuritycenterV2NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV2NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationConfigName: Schema.optional(Schema.String),
    finding: Schema.optional(GoogleCloudSecuritycenterV2Finding),
    resource: Schema.optional(GoogleCloudSecuritycenterV2Resource),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NotificationMessage" });

export interface GoogleCloudSecuritycenterV2IssueResourceAwsMetadata {
  /** The AWS account of the resource associated with the issue. */
  account?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount;
}

export const GoogleCloudSecuritycenterV2IssueResourceAwsMetadata: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAwsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAwsMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplication {
  /** The resource name of an Application. Format: `projects/{host-project-id}/locations/{location}/applications/{application-id}` */
  name?: string;
  /** Consumer provided attributes for the application */
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplication: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplication",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription {
  /** The Azure subscription ID of the resource associated with the issue. */
  id?: string;
  /** The Azure subscription display name of the resource associated with the issue. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAzureMetadata {
  /** The Azure subscription of the resource associated with the issue. */
  subscription?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription;
}

export const GoogleCloudSecuritycenterV2IssueResourceAzureMetadata: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAzureMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAzureMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision {
  /** The resource name of an ADC Application Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata {
  /** The project ID that the resource associated with the issue belongs to. */
  projectId?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceAdcApplication {
  /** The resource name of an ADC Application. Format: projects/{project}/locations/{location}/spaces/{space}/applications/{application} */
  name?: string;
  /** Consumer provided attributes for the AppHub application. */
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
}

export const GoogleCloudSecuritycenterV2IssueResourceAdcApplication: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAdcApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAdcApplication",
  });

export interface GoogleCloudSecuritycenterV2IssueResource {
  /** The AWS metadata of the resource associated with the issue. Only populated for AWS resources. */
  awsMetadata?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadata;
  /** The AppHub application associated with the resource, if any. Only populated for the primary resource. */
  application?: GoogleCloudSecuritycenterV2IssueResourceApplication;
  /** The full resource name of the resource associated with the issue. */
  name?: string;
  /** The cloud provider of the resource associated with the issue. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The resource-type specific display name of the resource associated with the issue. */
  displayName?: string;
  /** The type of the resource associated with the issue. */
  type?: string;
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision;
  /** The Azure metadata of the resource associated with the issue. Only populated for Azure resources. */
  azureMetadata?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadata;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision;
  /** The Google Cloud metadata of the resource associated with the issue. Only populated for Google Cloud resources. */
  googleCloudMetadata?: GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata;
  /** The ADC application associated with the finding. */
  adcApplication?: GoogleCloudSecuritycenterV2IssueResourceAdcApplication;
}

export const GoogleCloudSecuritycenterV2IssueResource: Schema.Schema<GoogleCloudSecuritycenterV2IssueResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    awsMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadata,
    ),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplication,
    ),
    name: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision,
    ),
    azureMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAzureMetadata,
    ),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision,
    ),
    googleCloudMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata,
    ),
    adcApplication: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplication,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueResource" });

export interface GoogleCloudSecuritycenterV2IssueMute {
  /** The user-provided reason for muting the issue. */
  muteReason?: string;
  /** The time the issue was muted. */
  muteUpdateTime?: string;
  /** The email address of the user who last changed the mute state of the issue. */
  muteInitiator?: string;
  /** Output only. The mute state of the issue. */
  muteState?: "MUTE_STATE_UNSPECIFIED" | "NOT_MUTED" | "MUTED" | (string & {});
}

export const GoogleCloudSecuritycenterV2IssueMute: Schema.Schema<GoogleCloudSecuritycenterV2IssueMute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteReason: Schema.optional(Schema.String),
    muteUpdateTime: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    muteState: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueMute" });

export interface GoogleCloudSecuritycenterV2IssueFindingCve {
  /** The CVE name. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingCve: Schema.Schema<GoogleCloudSecuritycenterV2IssueFindingCve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFindingCve" });

export interface GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin {
  /** The security bulletin name. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin: Schema.Schema<GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin",
  });

export interface GoogleCloudSecuritycenterV2IssueFinding {
  /** The name of the finding. */
  name?: string;
  /** The CVE of the finding. */
  cve?: GoogleCloudSecuritycenterV2IssueFindingCve;
  /** The security bulletin of the finding. */
  securityBulletin?: GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin;
}

export const GoogleCloudSecuritycenterV2IssueFinding: Schema.Schema<GoogleCloudSecuritycenterV2IssueFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    cve: Schema.optional(GoogleCloudSecuritycenterV2IssueFindingCve),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueFinding" });

export interface GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount {
  /** Aggregation key. */
  key?: string;
  /** Aggregation value. */
  value?: number;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount: Schema.Schema<GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount",
  });

export interface GoogleCloudSecuritycenterV2IssueSecurityContext {
  /** The context of the security context. */
  context?: GoogleCloudSecuritycenterV2IssueSecurityContextContext;
  /** The aggregated count of the security context. */
  aggregatedCount?: GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContext: Schema.Schema<GoogleCloudSecuritycenterV2IssueSecurityContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  /** Output only. The time the issue was created. */
  createTime?: string;
  /** Additional resources associated with the issue. */
  secondaryResources?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResource>;
  /** The mute information of the issue. */
  mute?: GoogleCloudSecuritycenterV2IssueMute;
  /** The description of the issue in Markdown format. */
  description?: string;
  /** The type of the issue. */
  issueType?:
    | "ISSUE_TYPE_UNSPECIFIED"
    | "CHOKEPOINT"
    | "TOXIC_COMBINATION"
    | "INSIGHT"
    | (string & {});
  /** The finding category or rule name that generated the issue. */
  detection?: string;
  /** Identifier. The name of the issue. Format: organizations/{organization}/locations/{location}/issues/{issue} */
  name?: string;
  /** Output only. The state of the issue. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** The severity of the issue. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** The time the issue was last observed. */
  lastObservationTime?: string;
  /** The findings related to the issue. */
  relatedFindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueFinding>;
  /** Output only. The time the issue was last updated. */
  updateTime?: string;
  /** The exposure score of the issue. */
  exposureScore?: number;
  /** The domains of the issue. */
  domains?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueDomain>;
  /** The security context of the issue. */
  securityContexts?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueSecurityContext>;
  /** Approaches to remediate the issue in Markdown format. */
  remediations?: ReadonlyArray<string>;
  /** The primary resource associated with the issue. */
  primaryResource?: GoogleCloudSecuritycenterV2IssueResource;
}

export const GoogleCloudSecuritycenterV2Issue: Schema.Schema<GoogleCloudSecuritycenterV2Issue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    secondaryResources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueResource),
    ),
    mute: Schema.optional(GoogleCloudSecuritycenterV2IssueMute),
    description: Schema.optional(Schema.String),
    issueType: Schema.optional(Schema.String),
    detection: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    lastObservationTime: Schema.optional(Schema.String),
    relatedFindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueFinding),
    ),
    updateTime: Schema.optional(Schema.String),
    exposureScore: Schema.optional(Schema.Number),
    domains: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueDomain),
    ),
    securityContexts: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueSecurityContext),
    ),
    remediations: Schema.optional(Schema.Array(Schema.String)),
    primaryResource: Schema.optional(GoogleCloudSecuritycenterV2IssueResource),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Issue" });

export interface ValidateEventThreatDetectionCustomModuleRequest {
  /** Required. The raw text of the module's contents. Used to generate error messages. */
  rawText?: string;
  /** Required. The type of the module (e.g. CONFIGURABLE_BAD_IP). */
  type?: string;
}

export const ValidateEventThreatDetectionCustomModuleRequest: Schema.Schema<ValidateEventThreatDetectionCustomModuleRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rawText: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ValidateEventThreatDetectionCustomModuleRequest",
  });

export interface AttackStepNode {
  /** Unique ID for one Node */
  uuid?: string;
  /** Attack step description */
  description?: string;
  /** Attack step type. Can be either AND, OR or DEFENSE */
  type?:
    | "NODE_TYPE_UNSPECIFIED"
    | "NODE_TYPE_AND"
    | "NODE_TYPE_OR"
    | "NODE_TYPE_DEFENSE"
    | "NODE_TYPE_ATTACKER"
    | (string & {});
  /** User friendly name of the attack step */
  displayName?: string;
  /** Attack step labels for metadata */
  labels?: Record<string, string>;
}

export const AttackStepNode: Schema.Schema<AttackStepNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AttackStepNode" });

export interface EffectiveEventThreatDetectionCustomModule {
  /** Output only. Config for the effective module. */
  config?: Record<string, unknown>;
  /** Output only. Type for the module. e.g. CONFIGURABLE_BAD_IP. */
  type?: string;
  /** Output only. The human readable name to be displayed for the module. */
  displayName?: string;
  /** Output only. The effective state of enablement for the module at the given level of the hierarchy. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** The cloud provider of the custom module. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Output only. The resource name of the effective ETD custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. */
  name?: string;
  /** Output only. The description for the module. */
  description?: string;
}

export const EffectiveEventThreatDetectionCustomModule: Schema.Schema<EffectiveEventThreatDetectionCustomModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "EffectiveEventThreatDetectionCustomModule" });

export interface ListEffectiveEventThreatDetectionCustomModulesResponse {
  /** Effective custom modules belonging to the requested parent. */
  effectiveEventThreatDetectionCustomModules?: ReadonlyArray<EffectiveEventThreatDetectionCustomModule>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListEffectiveEventThreatDetectionCustomModulesResponse: Schema.Schema<ListEffectiveEventThreatDetectionCustomModulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effectiveEventThreatDetectionCustomModules: Schema.optional(
      Schema.Array(EffectiveEventThreatDetectionCustomModule),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListEffectiveEventThreatDetectionCustomModulesResponse",
  });

export interface GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Schema<GetPolicyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping {
  /** Resource value mapping for high-sensitivity Sensitive Data Protection findings */
  highSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Resource value mapping for medium-sensitivity Sensitive Data Protection findings */
  mediumSensitivityMapping?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping: Schema.Schema<GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    highSensitivityMapping: Schema.optional(Schema.String),
    mediumSensitivityMapping: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping",
  });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface SimulatedResult {
  /** Finding that would be published for the test case, if a violation is detected. */
  finding?: Finding;
  /** Error encountered during the test. */
  error?: Status;
  /** Indicates that the test case does not trigger any violation. */
  noViolation?: Empty;
}

export const SimulatedResult: Schema.Schema<SimulatedResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finding: Schema.optional(Finding),
    error: Schema.optional(Status),
    noViolation: Schema.optional(Empty),
  }).annotate({ identifier: "SimulatedResult" });

export interface SimulateSecurityHealthAnalyticsCustomModuleResponse {
  /** Result for test case in the corresponding request. */
  result?: SimulatedResult;
}

export const SimulateSecurityHealthAnalyticsCustomModuleResponse: Schema.Schema<SimulateSecurityHealthAnalyticsCustomModuleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(SimulatedResult),
  }).annotate({
    identifier: "SimulateSecurityHealthAnalyticsCustomModuleResponse",
  });

export interface ListBigQueryExportsResponse {
  /** The BigQuery exports from the specified parent. */
  bigQueryExports?: ReadonlyArray<GoogleCloudSecuritycenterV1BigQueryExport>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListBigQueryExportsResponse: Schema.Schema<ListBigQueryExportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigQueryExports: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1BigQueryExport),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBigQueryExportsResponse" });

export interface ListDescendantSecurityHealthAnalyticsCustomModulesResponse {
  /** Custom modules belonging to the requested parent and its descendants. */
  securityHealthAnalyticsCustomModules?: ReadonlyArray<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
  /** If not empty, indicates that there may be more custom modules to be returned. */
  nextPageToken?: string;
}

export const ListDescendantSecurityHealthAnalyticsCustomModulesResponse: Schema.Schema<ListDescendantSecurityHealthAnalyticsCustomModulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityHealthAnalyticsCustomModules: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListDescendantSecurityHealthAnalyticsCustomModulesResponse",
  });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface CustomModuleValidationErrors {
  /** The list of errors. */
  errors?: ReadonlyArray<CustomModuleValidationError>;
}

export const CustomModuleValidationErrors: Schema.Schema<CustomModuleValidationErrors> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(CustomModuleValidationError)),
  }).annotate({ identifier: "CustomModuleValidationErrors" });

export interface PathNodeAssociatedFinding {
  /** Canonical name of the associated findings. Example: `organizations/123/sources/456/findings/789` */
  canonicalFinding?: string;
  /** The additional taxonomy group within findings from a given source. */
  findingCategory?: string;
  /** Full resource name of the finding. */
  name?: string;
}

export const PathNodeAssociatedFinding: Schema.Schema<PathNodeAssociatedFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canonicalFinding: Schema.optional(Schema.String),
    findingCategory: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PathNodeAssociatedFinding" });

export interface AttackPathNode {
  /** Human-readable name of this resource. */
  displayName?: string;
  /** The findings associated with this node in the attack path. */
  associatedFindings?: ReadonlyArray<PathNodeAssociatedFinding>;
  /** The name of the resource at this point in the attack path. The format of the name follows the Cloud Asset Inventory [resource name format](https://cloud.google.com/asset-inventory/docs/resource-name-format) */
  resource?: string;
  /** A list of attack step nodes that exist in this attack path node. */
  attackSteps?: ReadonlyArray<AttackStepNode>;
  /** Unique id of the attack path node. */
  uuid?: string;
  /** The [supported resource type](https://cloud.google.com/asset-inventory/docs/supported-asset-types) */
  resourceType?: string;
}

export const AttackPathNode: Schema.Schema<AttackPathNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    associatedFindings: Schema.optional(
      Schema.Array(PathNodeAssociatedFinding),
    ),
    resource: Schema.optional(Schema.String),
    attackSteps: Schema.optional(Schema.Array(AttackStepNode)),
    uuid: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttackPathNode" });

export interface GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV1BulkMuteFindingsResponse: Schema.Schema<GoogleCloudSecuritycenterV1BulkMuteFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV1BulkMuteFindingsResponse",
  });

export interface BatchCreateResourceValueConfigsResponse {
  /** The resource value configs created */
  resourceValueConfigs?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceValueConfig>;
}

export const BatchCreateResourceValueConfigsResponse: Schema.Schema<BatchCreateResourceValueConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceValueConfigs: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1ResourceValueConfig),
    ),
  }).annotate({ identifier: "BatchCreateResourceValueConfigsResponse" });

export interface GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
  /** The state of an asset discovery run. */
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  /** The duration between asset discovery run start and end */
  duration?: string;
}

export const GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse: Schema.Schema<GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse",
  });

export interface ListDescendantEventThreatDetectionCustomModulesResponse {
  /** Custom modules belonging to the requested parent. */
  eventThreatDetectionCustomModules?: ReadonlyArray<EventThreatDetectionCustomModule>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDescendantEventThreatDetectionCustomModulesResponse: Schema.Schema<ListDescendantEventThreatDetectionCustomModulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventThreatDetectionCustomModules: Schema.optional(
      Schema.Array(EventThreatDetectionCustomModule),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListDescendantEventThreatDetectionCustomModulesResponse",
  });

export interface SetIamPolicyRequest {
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface IamPolicy {
  /** The JSON representation of the Policy associated with the asset. See https://cloud.google.com/iam/reference/rest/v1/Policy for format details. */
  policyBlob?: string;
}

export const IamPolicy: Schema.Schema<IamPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyBlob: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamPolicy" });

export interface SecurityCenterProperties {
  /** Owners of the Google Cloud resource. */
  resourceOwners?: ReadonlyArray<string>;
  /** The user defined display name for this resource. */
  resourceDisplayName?: string;
  /** The user defined display name for the parent of this resource. */
  resourceParentDisplayName?: string;
  /** The type of the Google Cloud resource. Examples include: APPLICATION, PROJECT, and ORGANIZATION. This is a case insensitive field defined by Security Command Center and/or the producer of the resource and is immutable after create time. */
  resourceType?: string;
  /** The user defined display name for the project of this resource. */
  resourceProjectDisplayName?: string;
  /** The full resource name of the project the resource belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceProject?: string;
  /** The full resource name of the immediate parent of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceParent?: string;
  /** The full resource name of the Google Cloud resource this asset represents. This field is immutable after create time. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceName?: string;
  /** Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<Folder>;
}

export const SecurityCenterProperties: Schema.Schema<SecurityCenterProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceOwners: Schema.optional(Schema.Array(Schema.String)),
    resourceDisplayName: Schema.optional(Schema.String),
    resourceParentDisplayName: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    resourceProjectDisplayName: Schema.optional(Schema.String),
    resourceProject: Schema.optional(Schema.String),
    resourceParent: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(Folder)),
  }).annotate({ identifier: "SecurityCenterProperties" });

export interface Asset {
  /** The time at which the asset was last updated or added in Cloud SCC. */
  updateTime?: string;
  /** The canonical name of the resource. It's either "organizations/{organization_id}/assets/{asset_id}", "folders/{folder_id}/assets/{asset_id}" or "projects/{project_number}/assets/{asset_id}", depending on the closest CRM ancestor of the resource. */
  canonicalName?: string;
  /** Resource managed properties. These properties are managed and defined by the Google Cloud resource and cannot be modified by the user. */
  resourceProperties?: Record<string, unknown>;
  /** The time at which the asset was created in Security Command Center. */
  createTime?: string;
  /** User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the asset. */
  securityMarks?: SecurityMarks;
  /** Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user. */
  iamPolicy?: IamPolicy;
  /** The relative resource name of this asset. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/assets/{asset_id}". */
  name?: string;
  /** Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user. */
  securityCenterProperties?: SecurityCenterProperties;
}

export const Asset: Schema.Schema<Asset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    resourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
    securityMarks: Schema.optional(SecurityMarks),
    iamPolicy: Schema.optional(IamPolicy),
    name: Schema.optional(Schema.String),
    securityCenterProperties: Schema.optional(SecurityCenterProperties),
  }).annotate({ identifier: "Asset" });

export interface ValidateEventThreatDetectionCustomModuleResponse {
  /** A list of errors returned by the validator. If the list is empty, there were no errors. */
  errors?: CustomModuleValidationErrors;
}

export const ValidateEventThreatDetectionCustomModuleResponse: Schema.Schema<ValidateEventThreatDetectionCustomModuleResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(CustomModuleValidationErrors),
  }).annotate({
    identifier: "ValidateEventThreatDetectionCustomModuleResponse",
  });

export interface GoogleCloudSecuritycenterV2MuteConfig {
  /** A description of the mute config. */
  description?: string;
  /** Optional. The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings. */
  expiryTime?: string;
  /** Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:` */
  filter?: string;
  /** Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. */
  createTime?: string;
  /** Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. */
  mostRecentEditor?: string;
  /** Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. */
  updateTime?: string;
  /** Output only. The resource name of the Cloud KMS `CryptoKey` used to encrypt this configuration data, if CMEK was enabled during Security Command Center activation. */
  cryptoKeyName?: string;
  /** Identifier. This field will be ignored if provided on config creation. The following list shows some examples of the format: + `organizations/{organization}/muteConfigs/{mute_config}` + `organizations/{organization}locations/{location}//muteConfigs/{mute_config}` + `folders/{folder}/muteConfigs/{mute_config}` + `folders/{folder}/locations/{location}/muteConfigs/{mute_config}` + `projects/{project}/muteConfigs/{mute_config}` + `projects/{project}/locations/{location}/muteConfigs/{mute_config}` */
  name?: string;
  /** Required. The type of the mute config, which determines what type of mute state the config affects. Immutable after creation. */
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
}

export const GoogleCloudSecuritycenterV2MuteConfig: Schema.Schema<GoogleCloudSecuritycenterV2MuteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteConfig" });

export interface GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
  /** Output only. The user-specified configuration for the module. */
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  /** Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
  displayName?: string;
  /** Output only. The effective state of enablement for the module at the given level of the hierarchy. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** The cloud provider of the custom module. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Output only. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}" */
  name?: string;
}

export const GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule: Schema.Schema<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    displayName: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule",
  });

export interface ExportFindingsResponse {}

export const ExportFindingsResponse: Schema.Schema<ExportFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExportFindingsResponse",
  });

export interface ListSecurityHealthAnalyticsCustomModulesResponse {
  /** Custom modules belonging to the requested parent. */
  securityHealthAnalyticsCustomModules?: ReadonlyArray<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule>;
  /** If not empty, indicates that there may be more custom modules to be returned. */
  nextPageToken?: string;
}

export const ListSecurityHealthAnalyticsCustomModulesResponse: Schema.Schema<ListSecurityHealthAnalyticsCustomModulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityHealthAnalyticsCustomModules: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListSecurityHealthAnalyticsCustomModulesResponse",
  });

export interface ListAssetsResult {
  /** State change of the asset between the points in time. */
  stateChange?: "UNUSED" | "ADDED" | "REMOVED" | "ACTIVE" | (string & {});
  /** Asset matching the search request. */
  asset?: Asset;
}

export const ListAssetsResult: Schema.Schema<ListAssetsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateChange: Schema.optional(Schema.String),
    asset: Schema.optional(Asset),
  }).annotate({ identifier: "ListAssetsResult" });

export interface ListAssetsResponse {
  /** Time used for executing the list request. */
  readTime?: string;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
  /** Assets matching the list request. */
  listAssetsResults?: ReadonlyArray<ListAssetsResult>;
  /** The total number of assets matching the query. */
  totalSize?: number;
}

export const ListAssetsResponse: Schema.Schema<ListAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    listAssetsResults: Schema.optional(Schema.Array(ListAssetsResult)),
    totalSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ListAssetsResponse" });

export interface Simulation {
  /** Resource value configurations' metadata used in this simulation. Maximum of 100. */
  resourceValueConfigsMetadata?: ReadonlyArray<ResourceValueConfigMetadata>;
  /** Full resource name of the Simulation: `organizations/123/simulations/456` */
  name?: string;
  /** Output only. Time simulation was created */
  createTime?: string;
  /** Indicates which cloud provider was used in this simulation. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
}

export const Simulation: Schema.Schema<Simulation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceValueConfigsMetadata: Schema.optional(
      Schema.Array(ResourceValueConfigMetadata),
    ),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
  }).annotate({ identifier: "Simulation" });

export interface Source {
  /** The source's display name. A source's display name must be unique amongst its siblings, for example, two sources with the same parent can't share the same display name. The display name must have a length between 1 and 64 characters (inclusive). */
  displayName?: string;
  /** The canonical name of the finding source. It's either "organizations/{organization_id}/sources/{source_id}", "folders/{folder_id}/sources/{source_id}", or "projects/{project_number}/sources/{source_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}" */
  name?: string;
  /** The description of the source (max of 1024 characters). Example: "Web Security Scanner is a web security scanner for common vulnerabilities in App Engine applications. It can automatically scan and detect four common vulnerabilities, including cross-site-scripting (XSS), Flash injection, mixed content (HTTP in HTTPS), and outdated or insecure libraries." */
  description?: string;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface ListSourcesResponse {
  /** Sources belonging to the requested parent. */
  sources?: ReadonlyArray<Source>;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListSourcesResponse: Schema.Schema<ListSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(Schema.Array(Source)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSourcesResponse" });

export interface OrganizationSettings {
  /** The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/organizationSettings". */
  name?: string;
  /** A flag that indicates if Asset Discovery should be enabled. If the flag is set to `true`, then discovery of assets will occur. If it is set to `false`, all historical assets will remain, but discovery of future assets will not occur. */
  enableAssetDiscovery?: boolean;
  /** The configuration used for Asset Discovery runs. */
  assetDiscoveryConfig?: AssetDiscoveryConfig;
}

export const OrganizationSettings: Schema.Schema<OrganizationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    enableAssetDiscovery: Schema.optional(Schema.Boolean),
    assetDiscoveryConfig: Schema.optional(AssetDiscoveryConfig),
  }).annotate({ identifier: "OrganizationSettings" });

export interface GroupFindingsRequest {
  /** Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` */
  filter?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Expression that defines what assets fields to use for grouping (including `state_change`). The string value should follow SQL syntax: comma separated list of fields. For example: "parent,resource_name". The following fields are supported when compare_duration is set: * state_change */
  groupBy?: string;
  /** Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** When compare_duration is set, the GroupResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time. If this field is set then `state_change` must be a specified field in `group_by`. */
  compareDuration?: string;
  /** The value returned by the last `GroupFindingsResponse`; indicates that this is a continuation of a prior `GroupFindings` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const GroupFindingsRequest: Schema.Schema<GroupFindingsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    groupBy: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    compareDuration: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupFindingsRequest" });

export interface ListValuedResourcesResponse {
  /** The estimated total number of results matching the query. */
  totalSize?: number;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
  /** The valued resources that the attack path simulation identified. */
  valuedResources?: ReadonlyArray<ValuedResource>;
}

export const ListValuedResourcesResponse: Schema.Schema<ListValuedResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
    valuedResources: Schema.optional(Schema.Array(ValuedResource)),
  }).annotate({ identifier: "ListValuedResourcesResponse" });

export interface GoogleCloudSecuritycenterV2ResourceValueConfig {
  /** A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset". */
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping;
  /** Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope and will be checked with `AND` of other resources. */
  scope?: string;
  /** Resource value level this expression represents Only required when there is no Sensitive Data Protection mapping in the request */
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing */
  tagValues?: ReadonlyArray<string>;
  /** Cloud provider this configuration applies to */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Identifier. Name for the resource value configuration */
  name?: string;
  /** Output only. Timestamp this resource value configuration was last updated. */
  updateTime?: string;
  /** Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources. */
  resourceType?: string;
  /** Output only. Timestamp this resource value configuration was created. */
  createTime?: string;
  /** List of resource labels to search for, evaluated with `AND`. For example, "resource_labels_selector": {"key": "value", "env": "prod"} will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels */
  resourceLabelsSelector?: Record<string, string>;
  /** Description of the resource value configuration. */
  description?: string;
}

export const GoogleCloudSecuritycenterV2ResourceValueConfig: Schema.Schema<GoogleCloudSecuritycenterV2ResourceValueConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping,
    ),
    scope: Schema.optional(Schema.String),
    resourceValue: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    cloudProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceValueConfig" });

export interface BulkMuteFindingsRequest {
  /** This can be a mute configuration name or any identifier for mute/unmute of findings based on the filter. */
  muteAnnotation?: string;
  /** Expression that identifies findings that should be updated. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
  filter?: string;
  /** Optional. All findings matching the given filter will have their mute state set to this value. The default value is `MUTED`. Setting this to `UNDEFINED` will clear the mute state on all matching findings. */
  muteState?: "MUTE_STATE_UNSPECIFIED" | "MUTED" | "UNDEFINED" | (string & {});
}

export const BulkMuteFindingsRequest: Schema.Schema<BulkMuteFindingsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteAnnotation: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    muteState: Schema.optional(Schema.String),
  }).annotate({ identifier: "BulkMuteFindingsRequest" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface AttackPath {
  /** A list of the edges between nodes in this attack path. */
  edges?: ReadonlyArray<AttackPathEdge>;
  /** A list of nodes that exist in this attack path. */
  pathNodes?: ReadonlyArray<AttackPathNode>;
  /** The attack path name, for example, `organizations/12/simulation/34/valuedResources/56/attackPaths/78` */
  name?: string;
}

export const AttackPath: Schema.Schema<AttackPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    edges: Schema.optional(Schema.Array(AttackPathEdge)),
    pathNodes: Schema.optional(Schema.Array(AttackPathNode)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttackPath" });

export interface ListAttackPathsResponse {
  /** The attack paths that the attack path simulation identified. */
  attackPaths?: ReadonlyArray<AttackPath>;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const ListAttackPathsResponse: Schema.Schema<ListAttackPathsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attackPaths: Schema.optional(Schema.Array(AttackPath)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAttackPathsResponse" });

export interface GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {
  /** The state of an asset discovery run. */
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLETED"
    | "SUPERSEDED"
    | "TERMINATED"
    | (string & {});
  /** The duration between asset discovery run start and end */
  duration?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse",
  });

export interface ListEffectiveSecurityHealthAnalyticsCustomModulesResponse {
  /** Effective custom modules belonging to the requested parent. */
  effectiveSecurityHealthAnalyticsCustomModules?: ReadonlyArray<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule>;
  /** If not empty, indicates that there may be more effective custom modules to be returned. */
  nextPageToken?: string;
}

export const ListEffectiveSecurityHealthAnalyticsCustomModulesResponse: Schema.Schema<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effectiveSecurityHealthAnalyticsCustomModules: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule,
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ListEffectiveSecurityHealthAnalyticsCustomModulesResponse",
  });

export interface SetFindingStateRequest {
  /** Optional. The time at which the updated state takes effect. If unset, defaults to the request time. */
  startTime?: string;
  /** Required. The desired State of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
}

export const SetFindingStateRequest: Schema.Schema<SetFindingStateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetFindingStateRequest" });

export interface GetIamPolicyRequest {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Schema<GetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface SetMuteRequest {
  /** Required. The desired state of the Mute. */
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
}

export const SetMuteRequest: Schema.Schema<SetMuteRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mute: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetMuteRequest" });

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

export interface GetProjectsNotificationConfigsRequest {
  /** Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`. */
  name: string;
}

export const GetProjectsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsNotificationConfigsRequest>;

export type GetProjectsNotificationConfigsResponse = NotificationConfig;
export const GetProjectsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type GetProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a notification config. */
export const getProjectsNotificationConfigs: API.OperationMethod<
  GetProjectsNotificationConfigsRequest,
  GetProjectsNotificationConfigsResponse,
  GetProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsNotificationConfigsRequest,
  output: GetProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsNotificationConfigsRequest {
  /** Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`. */
  name: string;
}

export const DeleteProjectsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsNotificationConfigsRequest>;

export type DeleteProjectsNotificationConfigsResponse = Empty;
export const DeleteProjectsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a notification config. */
export const deleteProjectsNotificationConfigs: API.OperationMethod<
  DeleteProjectsNotificationConfigsRequest,
  DeleteProjectsNotificationConfigsResponse,
  DeleteProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsNotificationConfigsRequest,
  output: DeleteProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsNotificationConfigsRequest {
  /** Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]". */
  parent: string;
  /** The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListProjectsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notificationConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsNotificationConfigsRequest>;

export type ListProjectsNotificationConfigsResponse =
  ListNotificationConfigsResponse;
export const ListProjectsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotificationConfigsResponse;

export type ListProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists notification configs. */
export const listProjectsNotificationConfigs: API.PaginatedOperationMethod<
  ListProjectsNotificationConfigsRequest,
  ListProjectsNotificationConfigsResponse,
  ListProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsNotificationConfigsRequest,
  output: ListProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsNotificationConfigsRequest {
  /** The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket". */
  name: string;
  /** The FieldMask to use when updating the notification config. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const PatchProjectsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsNotificationConfigsRequest>;

export type PatchProjectsNotificationConfigsResponse = NotificationConfig;
export const PatchProjectsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type PatchProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter */
export const patchProjectsNotificationConfigs: API.OperationMethod<
  PatchProjectsNotificationConfigsRequest,
  PatchProjectsNotificationConfigsResponse,
  PatchProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsNotificationConfigsRequest,
  output: PatchProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsNotificationConfigsRequest {
  /** Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only. */
  configId?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const CreateProjectsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateProjectsNotificationConfigsRequest>;

export type CreateProjectsNotificationConfigsResponse = NotificationConfig;
export const CreateProjectsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type CreateProjectsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a notification config. */
export const createProjectsNotificationConfigs: API.OperationMethod<
  CreateProjectsNotificationConfigsRequest,
  CreateProjectsNotificationConfigsResponse,
  CreateProjectsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsNotificationConfigsRequest,
  output: CreateProjectsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest {
  /** Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** Request body */
  body?: ValidateEventThreatDetectionCustomModuleRequest;
}

export const ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest>;

export type ValidateCustomModuleProjectsEventThreatDetectionSettingsResponse =
  ValidateEventThreatDetectionCustomModuleResponse;
export const ValidateCustomModuleProjectsEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ValidateEventThreatDetectionCustomModuleResponse;

export type ValidateCustomModuleProjectsEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates the given Event Threat Detection custom module. */
export const validateCustomModuleProjectsEventThreatDetectionSettings: API.OperationMethod<
  ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest,
  ValidateCustomModuleProjectsEventThreatDetectionSettingsResponse,
  ValidateCustomModuleProjectsEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateCustomModuleProjectsEventThreatDetectionSettingsRequest,
  output: ValidateCustomModuleProjectsEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  /** Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. */
  name: string;
}

export const GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  EffectiveEventThreatDetectionCustomModule;
export const GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EffectiveEventThreatDetectionCustomModule;

export type GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an effective Event Threat Detection custom module at the given level. */
export const getProjectsEventThreatDetectionSettingsEffectiveCustomModules: API.OperationMethod<
  GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output: GetProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  /** A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  ListEffectiveEventThreatDetectionCustomModulesResponse;
export const ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEffectiveEventThreatDetectionCustomModulesResponse;

export type ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors. */
export const listProjectsEventThreatDetectionSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output:
    ListProjectsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsEventThreatDetectionSettingsCustomModulesRequest {
  /** Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const PatchProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type PatchProjectsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const PatchProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type PatchProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed. */
export const patchProjectsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  PatchProjectsEventThreatDetectionSettingsCustomModulesRequest,
  PatchProjectsEventThreatDetectionSettingsCustomModulesResponse,
  PatchProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: PatchProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
}

export const DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type DeleteProjectsEventThreatDetectionSettingsCustomModulesResponse =
  Empty;
export const DeleteProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules. */
export const deleteProjectsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest,
  DeleteProjectsEventThreatDetectionSettingsCustomModulesResponse,
  DeleteProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: DeleteProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsEventThreatDetectionSettingsCustomModulesRequest {
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
}

export const ListProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type ListProjectsEventThreatDetectionSettingsCustomModulesResponse =
  ListEventThreatDetectionCustomModulesResponse;
export const ListProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEventThreatDetectionCustomModulesResponse;

export type ListProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors. */
export const listProjectsEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListProjectsEventThreatDetectionSettingsCustomModulesRequest,
  ListProjectsEventThreatDetectionSettingsCustomModulesResponse,
  ListProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: ListProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const CreateProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type CreateProjectsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const CreateProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type CreateProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default. */
export const createProjectsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  CreateProjectsEventThreatDetectionSettingsCustomModulesRequest,
  CreateProjectsEventThreatDetectionSettingsCustomModulesResponse,
  CreateProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: CreateProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
}

export const GetProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type GetProjectsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const GetProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type GetProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an Event Threat Detection custom module. */
export const getProjectsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  GetProjectsEventThreatDetectionSettingsCustomModulesRequest,
  GetProjectsEventThreatDetectionSettingsCustomModulesResponse,
  GetProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output: GetProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest {
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
}

export const ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest>;

export type ListDescendantProjectsEventThreatDetectionSettingsCustomModulesResponse =
  ListDescendantEventThreatDetectionCustomModulesResponse;
export const ListDescendantProjectsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDescendantEventThreatDetectionCustomModulesResponse;

export type ListDescendantProjectsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants. */
export const listDescendantProjectsEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest,
  ListDescendantProjectsEventThreatDetectionSettingsCustomModulesResponse,
  ListDescendantProjectsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDescendantProjectsEventThreatDetectionSettingsCustomModulesRequest,
  output:
    ListDescendantProjectsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsMuteConfigsRequest {
  /** Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const GetProjectsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsMuteConfigsRequest>;

export type GetProjectsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetProjectsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetProjectsMuteConfigsError = DefaultErrors | NotFound | Forbidden;

/** Gets a mute config. */
export const getProjectsMuteConfigs: API.OperationMethod<
  GetProjectsMuteConfigsRequest,
  GetProjectsMuteConfigsResponse,
  GetProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsMuteConfigsRequest,
  output: GetProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsMuteConfigsRequest {
  /** Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const DeleteProjectsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsMuteConfigsRequest>;

export type DeleteProjectsMuteConfigsResponse = Empty;
export const DeleteProjectsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing mute config. */
export const deleteProjectsMuteConfigs: API.OperationMethod<
  DeleteProjectsMuteConfigsRequest,
  DeleteProjectsMuteConfigsResponse,
  DeleteProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsMuteConfigsRequest,
  output: DeleteProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsMuteConfigsRequest {
  /** The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
  /** A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/muteConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsMuteConfigsRequest>;

export type ListProjectsMuteConfigsResponse = ListMuteConfigsResponse;
export const ListProjectsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMuteConfigsResponse;

export type ListProjectsMuteConfigsError = DefaultErrors | NotFound | Forbidden;

/** Lists mute configs. */
export const listProjectsMuteConfigs: API.PaginatedOperationMethod<
  ListProjectsMuteConfigsRequest,
  ListProjectsMuteConfigsResponse,
  ListProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsMuteConfigsRequest,
  output: ListProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsMuteConfigsRequest {
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchProjectsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsMuteConfigsRequest>;

export type PatchProjectsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchProjectsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchProjectsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a mute config. */
export const patchProjectsMuteConfigs: API.OperationMethod<
  PatchProjectsMuteConfigsRequest,
  PatchProjectsMuteConfigsResponse,
  PatchProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsMuteConfigsRequest,
  output: PatchProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsMuteConfigsRequest {
  /** Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. */
  muteConfigId?: string;
  /** Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const CreateProjectsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("muteConfigId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/muteConfigs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsMuteConfigsRequest>;

export type CreateProjectsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const CreateProjectsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type CreateProjectsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a mute config. */
export const createProjectsMuteConfigs: API.OperationMethod<
  CreateProjectsMuteConfigsRequest,
  CreateProjectsMuteConfigsResponse,
  CreateProjectsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsMuteConfigsRequest,
  output: CreateProjectsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMuteConfigsRequest {
  /** Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const GetProjectsLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMuteConfigsRequest>;

export type GetProjectsLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetProjectsLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetProjectsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a mute config. */
export const getProjectsLocationsMuteConfigs: API.OperationMethod<
  GetProjectsLocationsMuteConfigsRequest,
  GetProjectsLocationsMuteConfigsResponse,
  GetProjectsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMuteConfigsRequest,
  output: GetProjectsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMuteConfigsRequest {
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name: string;
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchProjectsLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMuteConfigsRequest>;

export type PatchProjectsLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchProjectsLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchProjectsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a mute config. */
export const patchProjectsLocationsMuteConfigs: API.OperationMethod<
  PatchProjectsLocationsMuteConfigsRequest,
  PatchProjectsLocationsMuteConfigsResponse,
  PatchProjectsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMuteConfigsRequest,
  output: PatchProjectsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMuteConfigsRequest {
  /** Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const DeleteProjectsLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMuteConfigsRequest>;

export type DeleteProjectsLocationsMuteConfigsResponse = Empty;
export const DeleteProjectsLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing mute config. */
export const deleteProjectsLocationsMuteConfigs: API.OperationMethod<
  DeleteProjectsLocationsMuteConfigsRequest,
  DeleteProjectsLocationsMuteConfigsResponse,
  DeleteProjectsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMuteConfigsRequest,
  output: DeleteProjectsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupProjectsAssetsRequest {
  /** Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Request body */
  body?: GroupAssetsRequest;
}

export const GroupProjectsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GroupProjectsAssetsRequest>;

export type GroupProjectsAssetsResponse = GroupAssetsResponse;
export const GroupProjectsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupAssetsResponse;

export type GroupProjectsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Filters an organization's assets and groups them by their specified properties. */
export const groupProjectsAssets: API.OperationMethod<
  GroupProjectsAssetsRequest,
  GroupProjectsAssetsResponse,
  GroupProjectsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GroupProjectsAssetsRequest,
  output: GroupProjectsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAssetsRequest {
  /** Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type */
  orderBy?: string;
  /** Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""` */
  filter?: string;
  /** A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields. */
  fieldMask?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time. */
  compareDuration?: string;
  /** The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAssetsRequest>;

export type ListProjectsAssetsResponse = ListAssetsResponse;
export const ListProjectsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAssetsResponse;

export type ListProjectsAssetsError = DefaultErrors | NotFound | Forbidden;

/** Lists an organization's assets. */
export const listProjectsAssets: API.PaginatedOperationMethod<
  ListProjectsAssetsRequest,
  ListProjectsAssetsResponse,
  ListProjectsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAssetsRequest,
  output: ListProjectsAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSecurityMarksProjectsAssetsRequest {
  /** The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time. */
  startTime?: string;
  /** The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.". */
  updateMask?: string;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksProjectsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityMarksProjectsAssetsRequest>;

export type UpdateSecurityMarksProjectsAssetsResponse = SecurityMarks;
export const UpdateSecurityMarksProjectsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksProjectsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates security marks. */
export const updateSecurityMarksProjectsAssets: API.OperationMethod<
  UpdateSecurityMarksProjectsAssetsRequest,
  UpdateSecurityMarksProjectsAssetsResponse,
  UpdateSecurityMarksProjectsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksProjectsAssetsRequest,
  output: UpdateSecurityMarksProjectsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BulkMuteProjectsFindingsRequest {
  /** Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
  /** Request body */
  body?: BulkMuteFindingsRequest;
}

export const BulkMuteProjectsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BulkMuteFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:bulkMute",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BulkMuteProjectsFindingsRequest>;

export type BulkMuteProjectsFindingsResponse = Operation;
export const BulkMuteProjectsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BulkMuteProjectsFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done. */
export const bulkMuteProjectsFindings: API.OperationMethod<
  BulkMuteProjectsFindingsRequest,
  BulkMuteProjectsFindingsResponse,
  BulkMuteProjectsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkMuteProjectsFindingsRequest,
  output: BulkMuteProjectsFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsBigQueryExportsRequest {
  /** The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests. */
  name: string;
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const PatchProjectsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsBigQueryExportsRequest>;

export type PatchProjectsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const PatchProjectsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type PatchProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a BigQuery export. */
export const patchProjectsBigQueryExports: API.OperationMethod<
  PatchProjectsBigQueryExportsRequest,
  PatchProjectsBigQueryExportsResponse,
  PatchProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsBigQueryExportsRequest,
  output: PatchProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsBigQueryExportsRequest {
  /** Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}` */
  name: string;
}

export const DeleteProjectsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsBigQueryExportsRequest>;

export type DeleteProjectsBigQueryExportsResponse = Empty;
export const DeleteProjectsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing BigQuery export. */
export const deleteProjectsBigQueryExports: API.OperationMethod<
  DeleteProjectsBigQueryExportsRequest,
  DeleteProjectsBigQueryExportsResponse,
  DeleteProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsBigQueryExportsRequest,
  output: DeleteProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsBigQueryExportsRequest {
  /** A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
  /** The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bigQueryExports" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsBigQueryExportsRequest>;

export type ListProjectsBigQueryExportsResponse = ListBigQueryExportsResponse;
export const ListProjectsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBigQueryExportsResponse;

export type ListProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned. */
export const listProjectsBigQueryExports: API.PaginatedOperationMethod<
  ListProjectsBigQueryExportsRequest,
  ListProjectsBigQueryExportsResponse,
  ListProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsBigQueryExportsRequest,
  output: ListProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsBigQueryExportsRequest {
  /** Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. */
  bigQueryExportId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const CreateProjectsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateProjectsBigQueryExportsRequest>;

export type CreateProjectsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const CreateProjectsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type CreateProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a BigQuery export. */
export const createProjectsBigQueryExports: API.OperationMethod<
  CreateProjectsBigQueryExportsRequest,
  CreateProjectsBigQueryExportsResponse,
  CreateProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsBigQueryExportsRequest,
  output: CreateProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsBigQueryExportsRequest {
  /** Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}` */
  name: string;
}

export const GetProjectsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsBigQueryExportsRequest>;

export type GetProjectsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const GetProjectsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type GetProjectsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a BigQuery export. */
export const getProjectsBigQueryExports: API.OperationMethod<
  GetProjectsBigQueryExportsRequest,
  GetProjectsBigQueryExportsResponse,
  GetProjectsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsBigQueryExportsRequest,
  output: GetProjectsBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsSourcesRequest {
  /** The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListProjectsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsSourcesRequest>;

export type ListProjectsSourcesResponse = ListSourcesResponse;
export const ListProjectsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSourcesResponse;

export type ListProjectsSourcesError = DefaultErrors | NotFound | Forbidden;

/** Lists all sources belonging to an organization. */
export const listProjectsSources: API.PaginatedOperationMethod<
  ListProjectsSourcesRequest,
  ListProjectsSourcesResponse,
  ListProjectsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSourcesRequest,
  output: ListProjectsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSecurityMarksProjectsSourcesFindingsRequest {
  /** The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.". */
  updateMask?: string;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name: string;
  /** The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time. */
  startTime?: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksProjectsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityMarksProjectsSourcesFindingsRequest>;

export type UpdateSecurityMarksProjectsSourcesFindingsResponse = SecurityMarks;
export const UpdateSecurityMarksProjectsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates security marks. */
export const updateSecurityMarksProjectsSourcesFindings: API.OperationMethod<
  UpdateSecurityMarksProjectsSourcesFindingsRequest,
  UpdateSecurityMarksProjectsSourcesFindingsResponse,
  UpdateSecurityMarksProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksProjectsSourcesFindingsRequest,
  output: UpdateSecurityMarksProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetStateProjectsSourcesFindingsRequest {
  /** Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`. */
  name: string;
  /** Request body */
  body?: SetFindingStateRequest;
}

export const SetStateProjectsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetFindingStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setState", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetStateProjectsSourcesFindingsRequest>;

export type SetStateProjectsSourcesFindingsResponse = Finding;
export const SetStateProjectsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type SetStateProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the state of a finding. */
export const setStateProjectsSourcesFindings: API.OperationMethod<
  SetStateProjectsSourcesFindingsRequest,
  SetStateProjectsSourcesFindingsResponse,
  SetStateProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetStateProjectsSourcesFindingsRequest,
  output: SetStateProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupProjectsSourcesFindingsRequest {
  /** Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-` */
  parent: string;
  /** Request body */
  body?: GroupFindingsRequest;
}

export const GroupProjectsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GroupProjectsSourcesFindingsRequest>;

export type GroupProjectsSourcesFindingsResponse = GroupFindingsResponse;
export const GroupProjectsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupFindingsResponse;

export type GroupProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings */
export const groupProjectsSourcesFindings: API.OperationMethod<
  GroupProjectsSourcesFindingsRequest,
  GroupProjectsSourcesFindingsResponse,
  GroupProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GroupProjectsSourcesFindingsRequest,
  output: GroupProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsSourcesFindingsRequest {
  /** The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask. */
  updateMask?: string;
  /** The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}". */
  name: string;
  /** Request body */
  body?: Finding;
}

export const PatchProjectsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Finding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsSourcesFindingsRequest>;

export type PatchProjectsSourcesFindingsResponse = Finding;
export const PatchProjectsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type PatchProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates a finding. The corresponding source must exist for a finding creation to succeed. */
export const patchProjectsSourcesFindings: API.OperationMethod<
  PatchProjectsSourcesFindingsRequest,
  PatchProjectsSourcesFindingsResponse,
  PatchProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsSourcesFindingsRequest,
  output: PatchProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsSourcesFindingsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time. */
  compareDuration?: string;
  /** The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-` */
  parent: string;
  /** Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:` */
  filter?: string;
  /** A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields. */
  fieldMask?: string;
  /** Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks */
  orderBy?: string;
}

export const ListProjectsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsSourcesFindingsRequest>;

export type ListProjectsSourcesFindingsResponse = ListFindingsResponse;
export const ListProjectsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingsResponse;

export type ListProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings */
export const listProjectsSourcesFindings: API.PaginatedOperationMethod<
  ListProjectsSourcesFindingsRequest,
  ListProjectsSourcesFindingsResponse,
  ListProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSourcesFindingsRequest,
  output: ListProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetMuteProjectsSourcesFindingsRequest {
  /** Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`. */
  name: string;
  /** Request body */
  body?: SetMuteRequest;
}

export const SetMuteProjectsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMuteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setMute", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetMuteProjectsSourcesFindingsRequest>;

export type SetMuteProjectsSourcesFindingsResponse = Finding;
export const SetMuteProjectsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type SetMuteProjectsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the mute state of a finding. */
export const setMuteProjectsSourcesFindings: API.OperationMethod<
  SetMuteProjectsSourcesFindingsRequest,
  SetMuteProjectsSourcesFindingsResponse,
  SetMuteProjectsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMuteProjectsSourcesFindingsRequest,
  output: SetMuteProjectsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsSourcesFindingsExternalSystemsRequest {
  /** The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira" */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1ExternalSystem;
}

export const PatchProjectsSourcesFindingsExternalSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1ExternalSystem).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsSourcesFindingsExternalSystemsRequest>;

export type PatchProjectsSourcesFindingsExternalSystemsResponse =
  GoogleCloudSecuritycenterV1ExternalSystem;
export const PatchProjectsSourcesFindingsExternalSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1ExternalSystem;

export type PatchProjectsSourcesFindingsExternalSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates external system. This is for a given finding. */
export const patchProjectsSourcesFindingsExternalSystems: API.OperationMethod<
  PatchProjectsSourcesFindingsExternalSystemsRequest,
  PatchProjectsSourcesFindingsExternalSystemsResponse,
  PatchProjectsSourcesFindingsExternalSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsSourcesFindingsExternalSystemsRequest,
  output: PatchProjectsSourcesFindingsExternalSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  /** Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}` */
  name: string;
}

export const GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;
export const GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;

export type GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves an EffectiveSecurityHealthAnalyticsCustomModule. */
export const getProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.OperationMethod<
  GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    GetProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
}

export const ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;
export const ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

export type ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors. */
export const listProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  ListProjectsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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

export interface PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated. */
  updateMask?: string;
  /** Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only. */
export const patchProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: PatchProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}` */
  name: string;
}

export const DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  Empty;
export const DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules. */
export const deleteProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: DeleteProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
}

export const ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListSecurityHealthAnalyticsCustomModulesResponse;
export const ListProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSecurityHealthAnalyticsCustomModulesResponse;

export type ListProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors. */
export const listProjectsSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: ListProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default. */
export const createProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: CreateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}` */
  name: string;
}

export const GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type GetProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const GetProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type GetProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a SecurityHealthAnalyticsCustomModule. */
export const getProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  GetProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  GetProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: GetProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
}

export const ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListDescendantSecurityHealthAnalyticsCustomModulesResponse;
export const ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

export type ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants. */
export const listDescendantProjectsSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListDescendantProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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

export interface SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}` */
  parent: string;
  /** Request body */
  body?: SimulateSecurityHealthAnalyticsCustomModuleRequest;
}

export const SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  SimulateSecurityHealthAnalyticsCustomModuleResponse;
export const SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SimulateSecurityHealthAnalyticsCustomModuleResponse;

export type SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Simulates a given SecurityHealthAnalyticsCustomModule and Resource. */
export const simulateProjectsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: SimulateProjectsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersNotificationConfigsRequest {
  /** Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`. */
  name: string;
}

export const GetFoldersNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersNotificationConfigsRequest>;

export type GetFoldersNotificationConfigsResponse = NotificationConfig;
export const GetFoldersNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type GetFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a notification config. */
export const getFoldersNotificationConfigs: API.OperationMethod<
  GetFoldersNotificationConfigsRequest,
  GetFoldersNotificationConfigsResponse,
  GetFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersNotificationConfigsRequest,
  output: GetFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchFoldersNotificationConfigsRequest {
  /** The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket". */
  name: string;
  /** The FieldMask to use when updating the notification config. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const PatchFoldersNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersNotificationConfigsRequest>;

export type PatchFoldersNotificationConfigsResponse = NotificationConfig;
export const PatchFoldersNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type PatchFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter */
export const patchFoldersNotificationConfigs: API.OperationMethod<
  PatchFoldersNotificationConfigsRequest,
  PatchFoldersNotificationConfigsResponse,
  PatchFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersNotificationConfigsRequest,
  output: PatchFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersNotificationConfigsRequest {
  /** Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`. */
  name: string;
}

export const DeleteFoldersNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteFoldersNotificationConfigsRequest>;

export type DeleteFoldersNotificationConfigsResponse = Empty;
export const DeleteFoldersNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a notification config. */
export const deleteFoldersNotificationConfigs: API.OperationMethod<
  DeleteFoldersNotificationConfigsRequest,
  DeleteFoldersNotificationConfigsResponse,
  DeleteFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFoldersNotificationConfigsRequest,
  output: DeleteFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersNotificationConfigsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]". */
  parent: string;
}

export const ListFoldersNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notificationConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersNotificationConfigsRequest>;

export type ListFoldersNotificationConfigsResponse =
  ListNotificationConfigsResponse;
export const ListFoldersNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotificationConfigsResponse;

export type ListFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists notification configs. */
export const listFoldersNotificationConfigs: API.PaginatedOperationMethod<
  ListFoldersNotificationConfigsRequest,
  ListFoldersNotificationConfigsResponse,
  ListFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersNotificationConfigsRequest,
  output: ListFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateFoldersNotificationConfigsRequest {
  /** Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only. */
  configId?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const CreateFoldersNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateFoldersNotificationConfigsRequest>;

export type CreateFoldersNotificationConfigsResponse = NotificationConfig;
export const CreateFoldersNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type CreateFoldersNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a notification config. */
export const createFoldersNotificationConfigs: API.OperationMethod<
  CreateFoldersNotificationConfigsRequest,
  CreateFoldersNotificationConfigsResponse,
  CreateFoldersNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateFoldersNotificationConfigsRequest,
  output: CreateFoldersNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest {
  /** Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** Request body */
  body?: ValidateEventThreatDetectionCustomModuleRequest;
}

export const ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest>;

export type ValidateCustomModuleFoldersEventThreatDetectionSettingsResponse =
  ValidateEventThreatDetectionCustomModuleResponse;
export const ValidateCustomModuleFoldersEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ValidateEventThreatDetectionCustomModuleResponse;

export type ValidateCustomModuleFoldersEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates the given Event Threat Detection custom module. */
export const validateCustomModuleFoldersEventThreatDetectionSettings: API.OperationMethod<
  ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest,
  ValidateCustomModuleFoldersEventThreatDetectionSettingsResponse,
  ValidateCustomModuleFoldersEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateCustomModuleFoldersEventThreatDetectionSettingsRequest,
  output: ValidateCustomModuleFoldersEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type ListDescendantFoldersEventThreatDetectionSettingsCustomModulesResponse =
  ListDescendantEventThreatDetectionCustomModulesResponse;
export const ListDescendantFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDescendantEventThreatDetectionCustomModulesResponse;

export type ListDescendantFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants. */
export const listDescendantFoldersEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantFoldersEventThreatDetectionSettingsCustomModulesRequest,
  ListDescendantFoldersEventThreatDetectionSettingsCustomModulesResponse,
  ListDescendantFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
  /** Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
}

export const GetFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type GetFoldersEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const GetFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type GetFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an Event Threat Detection custom module. */
export const getFoldersEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  GetFoldersEventThreatDetectionSettingsCustomModulesRequest,
  GetFoldersEventThreatDetectionSettingsCustomModulesResponse,
  GetFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: GetFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateFoldersEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const CreateFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type CreateFoldersEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const CreateFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type CreateFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default. */
export const createFoldersEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  CreateFoldersEventThreatDetectionSettingsCustomModulesRequest,
  CreateFoldersEventThreatDetectionSettingsCustomModulesResponse,
  CreateFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: CreateFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
}

export const DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type DeleteFoldersEventThreatDetectionSettingsCustomModulesResponse =
  Empty;
export const DeleteFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules. */
export const deleteFoldersEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest,
  DeleteFoldersEventThreatDetectionSettingsCustomModulesResponse,
  DeleteFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: DeleteFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type ListFoldersEventThreatDetectionSettingsCustomModulesResponse =
  ListEventThreatDetectionCustomModulesResponse;
export const ListFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEventThreatDetectionCustomModulesResponse;

export type ListFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors. */
export const listFoldersEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListFoldersEventThreatDetectionSettingsCustomModulesRequest,
  ListFoldersEventThreatDetectionSettingsCustomModulesResponse,
  ListFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: ListFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchFoldersEventThreatDetectionSettingsCustomModulesRequest {
  /** Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const PatchFoldersEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersEventThreatDetectionSettingsCustomModulesRequest>;

export type PatchFoldersEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const PatchFoldersEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type PatchFoldersEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed. */
export const patchFoldersEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  PatchFoldersEventThreatDetectionSettingsCustomModulesRequest,
  PatchFoldersEventThreatDetectionSettingsCustomModulesResponse,
  PatchFoldersEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersEventThreatDetectionSettingsCustomModulesRequest,
  output: PatchFoldersEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  /** Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. */
  name: string;
}

export const GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  EffectiveEventThreatDetectionCustomModule;
export const GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EffectiveEventThreatDetectionCustomModule;

export type GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an effective Event Threat Detection custom module at the given level. */
export const getFoldersEventThreatDetectionSettingsEffectiveCustomModules: API.OperationMethod<
  GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output: GetFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  /** Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  ListEffectiveEventThreatDetectionCustomModulesResponse;
export const ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEffectiveEventThreatDetectionCustomModulesResponse;

export type ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors. */
export const listFoldersEventThreatDetectionSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output: ListFoldersEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetFoldersMuteConfigsRequest {
  /** Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const GetFoldersMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersMuteConfigsRequest>;

export type GetFoldersMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetFoldersMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetFoldersMuteConfigsError = DefaultErrors | NotFound | Forbidden;

/** Gets a mute config. */
export const getFoldersMuteConfigs: API.OperationMethod<
  GetFoldersMuteConfigsRequest,
  GetFoldersMuteConfigsResponse,
  GetFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersMuteConfigsRequest,
  output: GetFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchFoldersMuteConfigsRequest {
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchFoldersMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersMuteConfigsRequest>;

export type PatchFoldersMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchFoldersMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchFoldersMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a mute config. */
export const patchFoldersMuteConfigs: API.OperationMethod<
  PatchFoldersMuteConfigsRequest,
  PatchFoldersMuteConfigsResponse,
  PatchFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersMuteConfigsRequest,
  output: PatchFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersMuteConfigsRequest {
  /** Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const DeleteFoldersMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteFoldersMuteConfigsRequest>;

export type DeleteFoldersMuteConfigsResponse = Empty;
export const DeleteFoldersMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteFoldersMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing mute config. */
export const deleteFoldersMuteConfigs: API.OperationMethod<
  DeleteFoldersMuteConfigsRequest,
  DeleteFoldersMuteConfigsResponse,
  DeleteFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFoldersMuteConfigsRequest,
  output: DeleteFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersMuteConfigsRequest {
  /** Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
  /** A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListFoldersMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/muteConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersMuteConfigsRequest>;

export type ListFoldersMuteConfigsResponse = ListMuteConfigsResponse;
export const ListFoldersMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMuteConfigsResponse;

export type ListFoldersMuteConfigsError = DefaultErrors | NotFound | Forbidden;

/** Lists mute configs. */
export const listFoldersMuteConfigs: API.PaginatedOperationMethod<
  ListFoldersMuteConfigsRequest,
  ListFoldersMuteConfigsResponse,
  ListFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersMuteConfigsRequest,
  output: ListFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateFoldersMuteConfigsRequest {
  /** Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. */
  muteConfigId?: string;
  /** Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const CreateFoldersMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("muteConfigId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/muteConfigs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateFoldersMuteConfigsRequest>;

export type CreateFoldersMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const CreateFoldersMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type CreateFoldersMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a mute config. */
export const createFoldersMuteConfigs: API.OperationMethod<
  CreateFoldersMuteConfigsRequest,
  CreateFoldersMuteConfigsResponse,
  CreateFoldersMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateFoldersMuteConfigsRequest,
  output: CreateFoldersMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersLocationsMuteConfigsRequest {
  /** Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const DeleteFoldersLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteFoldersLocationsMuteConfigsRequest>;

export type DeleteFoldersLocationsMuteConfigsResponse = Empty;
export const DeleteFoldersLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteFoldersLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing mute config. */
export const deleteFoldersLocationsMuteConfigs: API.OperationMethod<
  DeleteFoldersLocationsMuteConfigsRequest,
  DeleteFoldersLocationsMuteConfigsResponse,
  DeleteFoldersLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFoldersLocationsMuteConfigsRequest,
  output: DeleteFoldersLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersLocationsMuteConfigsRequest {
  /** Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const GetFoldersLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsMuteConfigsRequest>;

export type GetFoldersLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetFoldersLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetFoldersLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a mute config. */
export const getFoldersLocationsMuteConfigs: API.OperationMethod<
  GetFoldersLocationsMuteConfigsRequest,
  GetFoldersLocationsMuteConfigsResponse,
  GetFoldersLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsMuteConfigsRequest,
  output: GetFoldersLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchFoldersLocationsMuteConfigsRequest {
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchFoldersLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersLocationsMuteConfigsRequest>;

export type PatchFoldersLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchFoldersLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchFoldersLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a mute config. */
export const patchFoldersLocationsMuteConfigs: API.OperationMethod<
  PatchFoldersLocationsMuteConfigsRequest,
  PatchFoldersLocationsMuteConfigsResponse,
  PatchFoldersLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersLocationsMuteConfigsRequest,
  output: PatchFoldersLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersAssetsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time. */
  compareDuration?: string;
  /** The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type */
  orderBy?: string;
  /** Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""` */
  filter?: string;
  /** A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields. */
  fieldMask?: string;
}

export const ListFoldersAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersAssetsRequest>;

export type ListFoldersAssetsResponse = ListAssetsResponse;
export const ListFoldersAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAssetsResponse;

export type ListFoldersAssetsError = DefaultErrors | NotFound | Forbidden;

/** Lists an organization's assets. */
export const listFoldersAssets: API.PaginatedOperationMethod<
  ListFoldersAssetsRequest,
  ListFoldersAssetsResponse,
  ListFoldersAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersAssetsRequest,
  output: ListFoldersAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSecurityMarksFoldersAssetsRequest {
  /** The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.". */
  updateMask?: string;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name: string;
  /** The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time. */
  startTime?: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksFoldersAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityMarksFoldersAssetsRequest>;

export type UpdateSecurityMarksFoldersAssetsResponse = SecurityMarks;
export const UpdateSecurityMarksFoldersAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksFoldersAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates security marks. */
export const updateSecurityMarksFoldersAssets: API.OperationMethod<
  UpdateSecurityMarksFoldersAssetsRequest,
  UpdateSecurityMarksFoldersAssetsResponse,
  UpdateSecurityMarksFoldersAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksFoldersAssetsRequest,
  output: UpdateSecurityMarksFoldersAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupFoldersAssetsRequest {
  /** Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Request body */
  body?: GroupAssetsRequest;
}

export const GroupFoldersAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GroupFoldersAssetsRequest>;

export type GroupFoldersAssetsResponse = GroupAssetsResponse;
export const GroupFoldersAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupAssetsResponse;

export type GroupFoldersAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Filters an organization's assets and groups them by their specified properties. */
export const groupFoldersAssets: API.OperationMethod<
  GroupFoldersAssetsRequest,
  GroupFoldersAssetsResponse,
  GroupFoldersAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GroupFoldersAssetsRequest,
  output: GroupFoldersAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BulkMuteFoldersFindingsRequest {
  /** Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
  /** Request body */
  body?: BulkMuteFindingsRequest;
}

export const BulkMuteFoldersFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BulkMuteFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:bulkMute",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BulkMuteFoldersFindingsRequest>;

export type BulkMuteFoldersFindingsResponse = Operation;
export const BulkMuteFoldersFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BulkMuteFoldersFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done. */
export const bulkMuteFoldersFindings: API.OperationMethod<
  BulkMuteFoldersFindingsRequest,
  BulkMuteFoldersFindingsResponse,
  BulkMuteFoldersFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkMuteFoldersFindingsRequest,
  output: BulkMuteFoldersFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersBigQueryExportsRequest {
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests. */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const PatchFoldersBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersBigQueryExportsRequest>;

export type PatchFoldersBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const PatchFoldersBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type PatchFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a BigQuery export. */
export const patchFoldersBigQueryExports: API.OperationMethod<
  PatchFoldersBigQueryExportsRequest,
  PatchFoldersBigQueryExportsResponse,
  PatchFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersBigQueryExportsRequest,
  output: PatchFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersBigQueryExportsRequest {
  /** Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}` */
  name: string;
}

export const DeleteFoldersBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteFoldersBigQueryExportsRequest>;

export type DeleteFoldersBigQueryExportsResponse = Empty;
export const DeleteFoldersBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing BigQuery export. */
export const deleteFoldersBigQueryExports: API.OperationMethod<
  DeleteFoldersBigQueryExportsRequest,
  DeleteFoldersBigQueryExportsResponse,
  DeleteFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFoldersBigQueryExportsRequest,
  output: DeleteFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersBigQueryExportsRequest {
  /** The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
}

export const ListFoldersBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bigQueryExports" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersBigQueryExportsRequest>;

export type ListFoldersBigQueryExportsResponse = ListBigQueryExportsResponse;
export const ListFoldersBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBigQueryExportsResponse;

export type ListFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned. */
export const listFoldersBigQueryExports: API.PaginatedOperationMethod<
  ListFoldersBigQueryExportsRequest,
  ListFoldersBigQueryExportsResponse,
  ListFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersBigQueryExportsRequest,
  output: ListFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateFoldersBigQueryExportsRequest {
  /** Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. */
  bigQueryExportId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const CreateFoldersBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateFoldersBigQueryExportsRequest>;

export type CreateFoldersBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const CreateFoldersBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type CreateFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a BigQuery export. */
export const createFoldersBigQueryExports: API.OperationMethod<
  CreateFoldersBigQueryExportsRequest,
  CreateFoldersBigQueryExportsResponse,
  CreateFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateFoldersBigQueryExportsRequest,
  output: CreateFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersBigQueryExportsRequest {
  /** Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}` */
  name: string;
}

export const GetFoldersBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersBigQueryExportsRequest>;

export type GetFoldersBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const GetFoldersBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type GetFoldersBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a BigQuery export. */
export const getFoldersBigQueryExports: API.OperationMethod<
  GetFoldersBigQueryExportsRequest,
  GetFoldersBigQueryExportsResponse,
  GetFoldersBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersBigQueryExportsRequest,
  output: GetFoldersBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersSourcesRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListFoldersSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersSourcesRequest>;

export type ListFoldersSourcesResponse = ListSourcesResponse;
export const ListFoldersSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSourcesResponse;

export type ListFoldersSourcesError = DefaultErrors | NotFound | Forbidden;

/** Lists all sources belonging to an organization. */
export const listFoldersSources: API.PaginatedOperationMethod<
  ListFoldersSourcesRequest,
  ListFoldersSourcesResponse,
  ListFoldersSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersSourcesRequest,
  output: ListFoldersSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSecurityMarksFoldersSourcesFindingsRequest {
  /** The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time. */
  startTime?: string;
  /** The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.". */
  updateMask?: string;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksFoldersSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityMarksFoldersSourcesFindingsRequest>;

export type UpdateSecurityMarksFoldersSourcesFindingsResponse = SecurityMarks;
export const UpdateSecurityMarksFoldersSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates security marks. */
export const updateSecurityMarksFoldersSourcesFindings: API.OperationMethod<
  UpdateSecurityMarksFoldersSourcesFindingsRequest,
  UpdateSecurityMarksFoldersSourcesFindingsResponse,
  UpdateSecurityMarksFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksFoldersSourcesFindingsRequest,
  output: UpdateSecurityMarksFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetStateFoldersSourcesFindingsRequest {
  /** Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`. */
  name: string;
  /** Request body */
  body?: SetFindingStateRequest;
}

export const SetStateFoldersSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetFindingStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setState", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetStateFoldersSourcesFindingsRequest>;

export type SetStateFoldersSourcesFindingsResponse = Finding;
export const SetStateFoldersSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type SetStateFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the state of a finding. */
export const setStateFoldersSourcesFindings: API.OperationMethod<
  SetStateFoldersSourcesFindingsRequest,
  SetStateFoldersSourcesFindingsResponse,
  SetStateFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetStateFoldersSourcesFindingsRequest,
  output: SetStateFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupFoldersSourcesFindingsRequest {
  /** Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-` */
  parent: string;
  /** Request body */
  body?: GroupFindingsRequest;
}

export const GroupFoldersSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GroupFoldersSourcesFindingsRequest>;

export type GroupFoldersSourcesFindingsResponse = GroupFindingsResponse;
export const GroupFoldersSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupFindingsResponse;

export type GroupFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings */
export const groupFoldersSourcesFindings: API.OperationMethod<
  GroupFoldersSourcesFindingsRequest,
  GroupFoldersSourcesFindingsResponse,
  GroupFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GroupFoldersSourcesFindingsRequest,
  output: GroupFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersSourcesFindingsRequest {
  /** The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}". */
  name: string;
  /** The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask. */
  updateMask?: string;
  /** Request body */
  body?: Finding;
}

export const PatchFoldersSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Finding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersSourcesFindingsRequest>;

export type PatchFoldersSourcesFindingsResponse = Finding;
export const PatchFoldersSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type PatchFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates a finding. The corresponding source must exist for a finding creation to succeed. */
export const patchFoldersSourcesFindings: API.OperationMethod<
  PatchFoldersSourcesFindingsRequest,
  PatchFoldersSourcesFindingsResponse,
  PatchFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersSourcesFindingsRequest,
  output: PatchFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersSourcesFindingsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-` */
  parent: string;
  /** Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time. */
  compareDuration?: string;
  /** The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks */
  orderBy?: string;
  /** Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:` */
  filter?: string;
  /** A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields. */
  fieldMask?: string;
}

export const ListFoldersSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersSourcesFindingsRequest>;

export type ListFoldersSourcesFindingsResponse = ListFindingsResponse;
export const ListFoldersSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingsResponse;

export type ListFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings */
export const listFoldersSourcesFindings: API.PaginatedOperationMethod<
  ListFoldersSourcesFindingsRequest,
  ListFoldersSourcesFindingsResponse,
  ListFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersSourcesFindingsRequest,
  output: ListFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetMuteFoldersSourcesFindingsRequest {
  /** Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`. */
  name: string;
  /** Request body */
  body?: SetMuteRequest;
}

export const SetMuteFoldersSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMuteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setMute", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetMuteFoldersSourcesFindingsRequest>;

export type SetMuteFoldersSourcesFindingsResponse = Finding;
export const SetMuteFoldersSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type SetMuteFoldersSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the mute state of a finding. */
export const setMuteFoldersSourcesFindings: API.OperationMethod<
  SetMuteFoldersSourcesFindingsRequest,
  SetMuteFoldersSourcesFindingsResponse,
  SetMuteFoldersSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMuteFoldersSourcesFindingsRequest,
  output: SetMuteFoldersSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersSourcesFindingsExternalSystemsRequest {
  /** Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira" */
  name: string;
  /** The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1ExternalSystem;
}

export const PatchFoldersSourcesFindingsExternalSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1ExternalSystem).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersSourcesFindingsExternalSystemsRequest>;

export type PatchFoldersSourcesFindingsExternalSystemsResponse =
  GoogleCloudSecuritycenterV1ExternalSystem;
export const PatchFoldersSourcesFindingsExternalSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1ExternalSystem;

export type PatchFoldersSourcesFindingsExternalSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates external system. This is for a given finding. */
export const patchFoldersSourcesFindingsExternalSystems: API.OperationMethod<
  PatchFoldersSourcesFindingsExternalSystemsRequest,
  PatchFoldersSourcesFindingsExternalSystemsResponse,
  PatchFoldersSourcesFindingsExternalSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersSourcesFindingsExternalSystemsRequest,
  output: PatchFoldersSourcesFindingsExternalSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default. */
export const createFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: CreateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. */
  name: string;
  /** The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only. */
export const patchFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: PatchFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}` */
  name: string;
}

export const DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  Empty;
export const DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules. */
export const deleteFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: DeleteFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListSecurityHealthAnalyticsCustomModulesResponse;
export const ListFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSecurityHealthAnalyticsCustomModulesResponse;

export type ListFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors. */
export const listFoldersSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: ListFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}` */
  parent: string;
  /** Request body */
  body?: SimulateSecurityHealthAnalyticsCustomModuleRequest;
}

export const SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  SimulateSecurityHealthAnalyticsCustomModuleResponse;
export const SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SimulateSecurityHealthAnalyticsCustomModuleResponse;

export type SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Simulates a given SecurityHealthAnalyticsCustomModule and Resource. */
export const simulateFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: SimulateFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}` */
  name: string;
}

export const GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type GetFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const GetFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type GetFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a SecurityHealthAnalyticsCustomModule. */
export const getFoldersSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  GetFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  GetFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: GetFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListDescendantSecurityHealthAnalyticsCustomModulesResponse;
export const ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

export type ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants. */
export const listDescendantFoldersSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListDescendantFoldersSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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

export interface GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  /** Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}` */
  name: string;
}

export const GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;
export const GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;

export type GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves an EffectiveSecurityHealthAnalyticsCustomModule. */
export const getFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.OperationMethod<
  GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    GetFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
}

export const ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;
export const ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

export type ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors. */
export const listFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  ListFoldersSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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

export interface UpdateOrganizationSettingsOrganizationsRequest {
  /** The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/organizationSettings". */
  name: string;
  /** The FieldMask to use when updating the settings resource. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: OrganizationSettings;
}

export const UpdateOrganizationSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(OrganizationSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateOrganizationSettingsOrganizationsRequest>;

export type UpdateOrganizationSettingsOrganizationsResponse =
  OrganizationSettings;
export const UpdateOrganizationSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OrganizationSettings;

export type UpdateOrganizationSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an organization's settings. */
export const updateOrganizationSettingsOrganizations: API.OperationMethod<
  UpdateOrganizationSettingsOrganizationsRequest,
  UpdateOrganizationSettingsOrganizationsResponse,
  UpdateOrganizationSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateOrganizationSettingsOrganizationsRequest,
  output: UpdateOrganizationSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationSettingsOrganizationsRequest {
  /** Required. Name of the organization to get organization settings for. Its format is `organizations/[organization_id]/organizationSettings`. */
  name: string;
}

export const GetOrganizationSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationSettingsOrganizationsRequest>;

export type GetOrganizationSettingsOrganizationsResponse = OrganizationSettings;
export const GetOrganizationSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OrganizationSettings;

export type GetOrganizationSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the settings for an organization. */
export const getOrganizationSettingsOrganizations: API.OperationMethod<
  GetOrganizationSettingsOrganizationsRequest,
  GetOrganizationSettingsOrganizationsResponse,
  GetOrganizationSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationSettingsOrganizationsRequest,
  output: GetOrganizationSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsMuteConfigsRequest {
  /** Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const DeleteOrganizationsLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsMuteConfigsRequest>;

export type DeleteOrganizationsLocationsMuteConfigsResponse = Empty;
export const DeleteOrganizationsLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing mute config. */
export const deleteOrganizationsLocationsMuteConfigs: API.OperationMethod<
  DeleteOrganizationsLocationsMuteConfigsRequest,
  DeleteOrganizationsLocationsMuteConfigsResponse,
  DeleteOrganizationsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsMuteConfigsRequest,
  output: DeleteOrganizationsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsMuteConfigsRequest {
  /** Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const GetOrganizationsLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsMuteConfigsRequest>;

export type GetOrganizationsLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetOrganizationsLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetOrganizationsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a mute config. */
export const getOrganizationsLocationsMuteConfigs: API.OperationMethod<
  GetOrganizationsLocationsMuteConfigsRequest,
  GetOrganizationsLocationsMuteConfigsResponse,
  GetOrganizationsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsMuteConfigsRequest,
  output: GetOrganizationsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchOrganizationsLocationsMuteConfigsRequest {
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchOrganizationsLocationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsMuteConfigsRequest>;

export type PatchOrganizationsLocationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchOrganizationsLocationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchOrganizationsLocationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a mute config. */
export const patchOrganizationsLocationsMuteConfigs: API.OperationMethod<
  PatchOrganizationsLocationsMuteConfigsRequest,
  PatchOrganizationsLocationsMuteConfigsResponse,
  PatchOrganizationsLocationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsMuteConfigsRequest,
  output: PatchOrganizationsLocationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsAssetsRequest {
  /** Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time. */
  compareDuration?: string;
  /** The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type */
  orderBy?: string;
  /** Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""` */
  filter?: string;
  /** A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields. */
  fieldMask?: string;
}

export const ListOrganizationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsAssetsRequest>;

export type ListOrganizationsAssetsResponse = ListAssetsResponse;
export const ListOrganizationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAssetsResponse;

export type ListOrganizationsAssetsError = DefaultErrors | NotFound | Forbidden;

/** Lists an organization's assets. */
export const listOrganizationsAssets: API.PaginatedOperationMethod<
  ListOrganizationsAssetsRequest,
  ListOrganizationsAssetsResponse,
  ListOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsAssetsRequest,
  output: ListOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSecurityMarksOrganizationsAssetsRequest {
  /** The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.". */
  updateMask?: string;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name: string;
  /** The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time. */
  startTime?: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksOrganizationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityMarksOrganizationsAssetsRequest>;

export type UpdateSecurityMarksOrganizationsAssetsResponse = SecurityMarks;
export const UpdateSecurityMarksOrganizationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates security marks. */
export const updateSecurityMarksOrganizationsAssets: API.OperationMethod<
  UpdateSecurityMarksOrganizationsAssetsRequest,
  UpdateSecurityMarksOrganizationsAssetsResponse,
  UpdateSecurityMarksOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksOrganizationsAssetsRequest,
  output: UpdateSecurityMarksOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupOrganizationsAssetsRequest {
  /** Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Request body */
  body?: GroupAssetsRequest;
}

export const GroupOrganizationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GroupOrganizationsAssetsRequest>;

export type GroupOrganizationsAssetsResponse = GroupAssetsResponse;
export const GroupOrganizationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupAssetsResponse;

export type GroupOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Filters an organization's assets and groups them by their specified properties. */
export const groupOrganizationsAssets: API.OperationMethod<
  GroupOrganizationsAssetsRequest,
  GroupOrganizationsAssetsResponse,
  GroupOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GroupOrganizationsAssetsRequest,
  output: GroupOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunDiscoveryOrganizationsAssetsRequest {
  /** Required. Name of the organization to run asset discovery for. Its format is `organizations/[organization_id]`. */
  parent: string;
  /** Request body */
  body?: RunAssetDiscoveryRequest;
}

export const RunDiscoveryOrganizationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RunAssetDiscoveryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:runDiscovery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunDiscoveryOrganizationsAssetsRequest>;

export type RunDiscoveryOrganizationsAssetsResponse = Operation;
export const RunDiscoveryOrganizationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunDiscoveryOrganizationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error. */
export const runDiscoveryOrganizationsAssets: API.OperationMethod<
  RunDiscoveryOrganizationsAssetsRequest,
  RunDiscoveryOrganizationsAssetsResponse,
  RunDiscoveryOrganizationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunDiscoveryOrganizationsAssetsRequest,
  output: RunDiscoveryOrganizationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsNotificationConfigsRequest {
  /** Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only. */
  configId?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const CreateOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateOrganizationsNotificationConfigsRequest>;

export type CreateOrganizationsNotificationConfigsResponse = NotificationConfig;
export const CreateOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type CreateOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a notification config. */
export const createOrganizationsNotificationConfigs: API.OperationMethod<
  CreateOrganizationsNotificationConfigsRequest,
  CreateOrganizationsNotificationConfigsResponse,
  CreateOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsNotificationConfigsRequest,
  output: CreateOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsNotificationConfigsRequest {
  /** The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket". */
  name: string;
  /** The FieldMask to use when updating the notification config. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: NotificationConfig;
}

export const PatchOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(NotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsNotificationConfigsRequest>;

export type PatchOrganizationsNotificationConfigsResponse = NotificationConfig;
export const PatchOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type PatchOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter */
export const patchOrganizationsNotificationConfigs: API.OperationMethod<
  PatchOrganizationsNotificationConfigsRequest,
  PatchOrganizationsNotificationConfigsResponse,
  PatchOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsNotificationConfigsRequest,
  output: PatchOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsNotificationConfigsRequest {
  /** Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`. */
  name: string;
}

export const DeleteOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsNotificationConfigsRequest>;

export type DeleteOrganizationsNotificationConfigsResponse = Empty;
export const DeleteOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a notification config. */
export const deleteOrganizationsNotificationConfigs: API.OperationMethod<
  DeleteOrganizationsNotificationConfigsRequest,
  DeleteOrganizationsNotificationConfigsResponse,
  DeleteOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsNotificationConfigsRequest,
  output: DeleteOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsNotificationConfigsRequest {
  /** Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]". */
  parent: string;
  /** The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notificationConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsNotificationConfigsRequest>;

export type ListOrganizationsNotificationConfigsResponse =
  ListNotificationConfigsResponse;
export const ListOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotificationConfigsResponse;

export type ListOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists notification configs. */
export const listOrganizationsNotificationConfigs: API.PaginatedOperationMethod<
  ListOrganizationsNotificationConfigsRequest,
  ListOrganizationsNotificationConfigsResponse,
  ListOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsNotificationConfigsRequest,
  output: ListOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsNotificationConfigsRequest {
  /** Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`. */
  name: string;
}

export const GetOrganizationsNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsNotificationConfigsRequest>;

export type GetOrganizationsNotificationConfigsResponse = NotificationConfig;
export const GetOrganizationsNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ NotificationConfig;

export type GetOrganizationsNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a notification config. */
export const getOrganizationsNotificationConfigs: API.OperationMethod<
  GetOrganizationsNotificationConfigsRequest,
  GetOrganizationsNotificationConfigsResponse,
  GetOrganizationsNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsNotificationConfigsRequest,
  output: GetOrganizationsNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsSimulationsRequest {
  /** Required. The organization name or simulation name of this simulation Valid format: `organizations/{organization}/simulations/latest` `organizations/{organization}/simulations/{simulation}` */
  name: string;
}

export const GetOrganizationsSimulationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsSimulationsRequest>;

export type GetOrganizationsSimulationsResponse = Simulation;
export const GetOrganizationsSimulationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Simulation;

export type GetOrganizationsSimulationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the simulation by name or the latest simulation for the given organization. */
export const getOrganizationsSimulations: API.OperationMethod<
  GetOrganizationsSimulationsRequest,
  GetOrganizationsSimulationsResponse,
  GetOrganizationsSimulationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsSimulationsRequest,
  output: GetOrganizationsSimulationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest {
  /** The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports = */
  filter?: string;
  /** Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`. */
  orderBy?: string;
  /** The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` */
  parent: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/valuedResources" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest>;

export type ListOrganizationsSimulationsAttackExposureResultsValuedResourcesResponse =
  ListValuedResourcesResponse;
export const ListOrganizationsSimulationsAttackExposureResultsValuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListValuedResourcesResponse;

export type ListOrganizationsSimulationsAttackExposureResultsValuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the valued resources for a set of simulation results and filter. */
export const listOrganizationsSimulationsAttackExposureResultsValuedResources: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsAttackExposureResultsValuedResourcesRequest,
  ListOrganizationsSimulationsAttackExposureResultsValuedResourcesResponse,
  ListOrganizationsSimulationsAttackExposureResultsValuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}` */
  parent: string;
  /** The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports = */
  filter?: string;
  /** The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attackPaths" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest>;

export type ListOrganizationsSimulationsAttackExposureResultsAttackPathsResponse =
  ListAttackPathsResponse;
export const ListOrganizationsSimulationsAttackExposureResultsAttackPathsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAttackPathsResponse;

export type ListOrganizationsSimulationsAttackExposureResultsAttackPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the attack paths for a set of simulation results or valued resources and filter. */
export const listOrganizationsSimulationsAttackExposureResultsAttackPaths: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest,
  ListOrganizationsSimulationsAttackExposureResultsAttackPathsResponse,
  ListOrganizationsSimulationsAttackExposureResultsAttackPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSimulationsAttackExposureResultsAttackPathsRequest,
  output: ListOrganizationsSimulationsAttackExposureResultsAttackPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsSimulationsAttackPathsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}` */
  parent: string;
  /** The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports = */
  filter?: string;
  /** The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListOrganizationsSimulationsAttackPathsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attackPaths" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSimulationsAttackPathsRequest>;

export type ListOrganizationsSimulationsAttackPathsResponse =
  ListAttackPathsResponse;
export const ListOrganizationsSimulationsAttackPathsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAttackPathsResponse;

export type ListOrganizationsSimulationsAttackPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the attack paths for a set of simulation results or valued resources and filter. */
export const listOrganizationsSimulationsAttackPaths: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsAttackPathsRequest,
  ListOrganizationsSimulationsAttackPathsResponse,
  ListOrganizationsSimulationsAttackPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSimulationsAttackPathsRequest,
  output: ListOrganizationsSimulationsAttackPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsSimulationsValuedResourcesRequest {
  /** Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` */
  parent: string;
  /** The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`. */
  orderBy?: string;
  /** The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports = */
  filter?: string;
}

export const ListOrganizationsSimulationsValuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/valuedResources" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSimulationsValuedResourcesRequest>;

export type ListOrganizationsSimulationsValuedResourcesResponse =
  ListValuedResourcesResponse;
export const ListOrganizationsSimulationsValuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListValuedResourcesResponse;

export type ListOrganizationsSimulationsValuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the valued resources for a set of simulation results and filter. */
export const listOrganizationsSimulationsValuedResources: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsValuedResourcesRequest,
  ListOrganizationsSimulationsValuedResourcesResponse,
  ListOrganizationsSimulationsValuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSimulationsValuedResourcesRequest,
  output: ListOrganizationsSimulationsValuedResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsSimulationsValuedResourcesRequest {
  /** Required. The name of this valued resource Valid format: `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}` */
  name: string;
}

export const GetOrganizationsSimulationsValuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsSimulationsValuedResourcesRequest>;

export type GetOrganizationsSimulationsValuedResourcesResponse = ValuedResource;
export const GetOrganizationsSimulationsValuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ValuedResource;

export type GetOrganizationsSimulationsValuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the valued resource by name */
export const getOrganizationsSimulationsValuedResources: API.OperationMethod<
  GetOrganizationsSimulationsValuedResourcesRequest,
  GetOrganizationsSimulationsValuedResourcesResponse,
  GetOrganizationsSimulationsValuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsSimulationsValuedResourcesRequest,
  output: GetOrganizationsSimulationsValuedResourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsSimulationsValuedResourcesAttackPathsRequest {
  /** The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports = */
  filter?: string;
  /** The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}` */
  parent: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListOrganizationsSimulationsValuedResourcesAttackPathsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attackPaths" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSimulationsValuedResourcesAttackPathsRequest>;

export type ListOrganizationsSimulationsValuedResourcesAttackPathsResponse =
  ListAttackPathsResponse;
export const ListOrganizationsSimulationsValuedResourcesAttackPathsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAttackPathsResponse;

export type ListOrganizationsSimulationsValuedResourcesAttackPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the attack paths for a set of simulation results or valued resources and filter. */
export const listOrganizationsSimulationsValuedResourcesAttackPaths: API.PaginatedOperationMethod<
  ListOrganizationsSimulationsValuedResourcesAttackPathsRequest,
  ListOrganizationsSimulationsValuedResourcesAttackPathsResponse,
  ListOrganizationsSimulationsValuedResourcesAttackPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSimulationsValuedResourcesAttackPathsRequest,
  output: ListOrganizationsSimulationsValuedResourcesAttackPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest {
  /** Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** Request body */
  body?: ValidateEventThreatDetectionCustomModuleRequest;
}

export const ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest>;

export type ValidateCustomModuleOrganizationsEventThreatDetectionSettingsResponse =
  ValidateEventThreatDetectionCustomModuleResponse;
export const ValidateCustomModuleOrganizationsEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ValidateEventThreatDetectionCustomModuleResponse;

export type ValidateCustomModuleOrganizationsEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates the given Event Threat Detection custom module. */
export const validateCustomModuleOrganizationsEventThreatDetectionSettings: API.OperationMethod<
  ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest,
  ValidateCustomModuleOrganizationsEventThreatDetectionSettingsResponse,
  ValidateCustomModuleOrganizationsEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateCustomModuleOrganizationsEventThreatDetectionSettingsRequest,
  output: ValidateCustomModuleOrganizationsEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
}

export const GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type GetOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const GetOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type GetOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an Event Threat Detection custom module. */
export const getOrganizationsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  GetOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  GetOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: GetOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  ListDescendantEventThreatDetectionCustomModulesResponse;
export const ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDescendantEventThreatDetectionCustomModulesResponse;

export type ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants. */
export const listDescendantOrganizationsEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  ListDescendantOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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

export interface CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customModules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type CreateOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const CreateOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type CreateOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default. */
export const createOrganizationsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  CreateOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  CreateOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: CreateOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  /** Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionCustomModule;
}

export const PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionCustomModule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type PatchOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  EventThreatDetectionCustomModule;
export const PatchOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionCustomModule;

export type PatchOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed. */
export const patchOrganizationsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  PatchOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  PatchOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: PatchOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  /** Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`. */
  name: string;
}

export const DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type DeleteOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  Empty;
export const DeleteOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules. */
export const deleteOrganizationsEventThreatDetectionSettingsCustomModules: API.OperationMethod<
  DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  DeleteOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  DeleteOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: DeleteOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest {
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
  /** A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest>;

export type ListOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  ListEventThreatDetectionCustomModulesResponse;
export const ListOrganizationsEventThreatDetectionSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEventThreatDetectionCustomModulesResponse;

export type ListOrganizationsEventThreatDetectionSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors. */
export const listOrganizationsEventThreatDetectionSettingsCustomModules: API.PaginatedOperationMethod<
  ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  ListOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  ListOrganizationsEventThreatDetectionSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsEventThreatDetectionSettingsCustomModulesRequest,
  output: ListOrganizationsEventThreatDetectionSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  /** The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`. */
  parent: string;
}

export const ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  ListEffectiveEventThreatDetectionCustomModulesResponse;
export const ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEffectiveEventThreatDetectionCustomModulesResponse;

export type ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors. */
export const listOrganizationsEventThreatDetectionSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  ListOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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

export interface GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest {
  /** Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. */
  name: string;
}

export const GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest>;

export type GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  EffectiveEventThreatDetectionCustomModule;
export const GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EffectiveEventThreatDetectionCustomModule;

export type GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an effective Event Threat Detection custom module at the given level. */
export const getOrganizationsEventThreatDetectionSettingsEffectiveCustomModules: API.OperationMethod<
  GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesRequest,
  output:
    GetOrganizationsEventThreatDetectionSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsAttackPathsRequest {
  /** The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports = */
  filter?: string;
  /** The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}` */
  parent: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListOrganizationsAttackPathsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attackPaths" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsAttackPathsRequest>;

export type ListOrganizationsAttackPathsResponse = ListAttackPathsResponse;
export const ListOrganizationsAttackPathsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAttackPathsResponse;

export type ListOrganizationsAttackPathsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the attack paths for a set of simulation results or valued resources and filter. */
export const listOrganizationsAttackPaths: API.PaginatedOperationMethod<
  ListOrganizationsAttackPathsRequest,
  ListOrganizationsAttackPathsResponse,
  ListOrganizationsAttackPathsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsAttackPathsRequest,
  output: ListOrganizationsAttackPathsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsMuteConfigsRequest {
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const PatchOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1MuteConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsMuteConfigsRequest>;

export type PatchOrganizationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const PatchOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type PatchOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a mute config. */
export const patchOrganizationsMuteConfigs: API.OperationMethod<
  PatchOrganizationsMuteConfigsRequest,
  PatchOrganizationsMuteConfigsResponse,
  PatchOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsMuteConfigsRequest,
  output: PatchOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsMuteConfigsRequest {
  /** Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const DeleteOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsMuteConfigsRequest>;

export type DeleteOrganizationsMuteConfigsResponse = Empty;
export const DeleteOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing mute config. */
export const deleteOrganizationsMuteConfigs: API.OperationMethod<
  DeleteOrganizationsMuteConfigsRequest,
  DeleteOrganizationsMuteConfigsResponse,
  DeleteOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsMuteConfigsRequest,
  output: DeleteOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsMuteConfigsRequest {
  /** The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
}

export const ListOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/muteConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsMuteConfigsRequest>;

export type ListOrganizationsMuteConfigsResponse = ListMuteConfigsResponse;
export const ListOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMuteConfigsResponse;

export type ListOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists mute configs. */
export const listOrganizationsMuteConfigs: API.PaginatedOperationMethod<
  ListOrganizationsMuteConfigsRequest,
  ListOrganizationsMuteConfigsResponse,
  ListOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsMuteConfigsRequest,
  output: ListOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsMuteConfigsRequest {
  /** Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. */
  muteConfigId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1MuteConfig;
}

export const CreateOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateOrganizationsMuteConfigsRequest>;

export type CreateOrganizationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const CreateOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type CreateOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a mute config. */
export const createOrganizationsMuteConfigs: API.OperationMethod<
  CreateOrganizationsMuteConfigsRequest,
  CreateOrganizationsMuteConfigsResponse,
  CreateOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsMuteConfigsRequest,
  output: CreateOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsMuteConfigsRequest {
  /** Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`. */
  name: string;
}

export const GetOrganizationsMuteConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsMuteConfigsRequest>;

export type GetOrganizationsMuteConfigsResponse =
  GoogleCloudSecuritycenterV1MuteConfig;
export const GetOrganizationsMuteConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1MuteConfig;

export type GetOrganizationsMuteConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a mute config. */
export const getOrganizationsMuteConfigs: API.OperationMethod<
  GetOrganizationsMuteConfigsRequest,
  GetOrganizationsMuteConfigsResponse,
  GetOrganizationsMuteConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsMuteConfigsRequest,
  output: GetOrganizationsMuteConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsOperationsRequest {
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

export const ListOrganizationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsOperationsRequest>;

export type ListOrganizationsOperationsResponse = ListOperationsResponse;
export const ListOrganizationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsOperationsRequest,
  ListOrganizationsOperationsResponse,
  ListOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsOperationsRequest,
  output: ListOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOrganizationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsOperationsRequest>;

export type DeleteOrganizationsOperationsResponse = Empty;
export const DeleteOrganizationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOrganizationsOperations: API.OperationMethod<
  DeleteOrganizationsOperationsRequest,
  DeleteOrganizationsOperationsResponse,
  DeleteOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsOperationsRequest,
  output: DeleteOrganizationsOperationsResponse,
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface CancelOrganizationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelOrganizationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOrganizationsOperationsRequest>;

export type CancelOrganizationsOperationsResponse = Empty;
export const CancelOrganizationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOrganizationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOrganizationsOperations: API.OperationMethod<
  CancelOrganizationsOperationsRequest,
  CancelOrganizationsOperationsResponse,
  CancelOrganizationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOrganizationsOperationsRequest,
  output: CancelOrganizationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsValuedResourcesRequest {
  /** The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports = */
  filter?: string;
  /** Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`. */
  orderBy?: string;
  /** The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` */
  parent: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListOrganizationsValuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/valuedResources" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsValuedResourcesRequest>;

export type ListOrganizationsValuedResourcesResponse =
  ListValuedResourcesResponse;
export const ListOrganizationsValuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListValuedResourcesResponse;

export type ListOrganizationsValuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the valued resources for a set of simulation results and filter. */
export const listOrganizationsValuedResources: API.PaginatedOperationMethod<
  ListOrganizationsValuedResourcesRequest,
  ListOrganizationsValuedResourcesResponse,
  ListOrganizationsValuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsValuedResourcesRequest,
  output: ListOrganizationsValuedResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BulkMuteOrganizationsFindingsRequest {
  /** Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
  /** Request body */
  body?: BulkMuteFindingsRequest;
}

export const BulkMuteOrganizationsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BulkMuteFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:bulkMute",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BulkMuteOrganizationsFindingsRequest>;

export type BulkMuteOrganizationsFindingsResponse = Operation;
export const BulkMuteOrganizationsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BulkMuteOrganizationsFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done. */
export const bulkMuteOrganizationsFindings: API.OperationMethod<
  BulkMuteOrganizationsFindingsRequest,
  BulkMuteOrganizationsFindingsResponse,
  BulkMuteOrganizationsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkMuteOrganizationsFindingsRequest,
  output: BulkMuteOrganizationsFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsBigQueryExportsRequest {
  /** Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}` */
  name: string;
}

export const GetOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsBigQueryExportsRequest>;

export type GetOrganizationsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const GetOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type GetOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a BigQuery export. */
export const getOrganizationsBigQueryExports: API.OperationMethod<
  GetOrganizationsBigQueryExportsRequest,
  GetOrganizationsBigQueryExportsResponse,
  GetOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsBigQueryExportsRequest,
  output: GetOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateOrganizationsBigQueryExportsRequest {
  /** Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less. */
  bigQueryExportId?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const CreateOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateOrganizationsBigQueryExportsRequest>;

export type CreateOrganizationsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const CreateOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type CreateOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a BigQuery export. */
export const createOrganizationsBigQueryExports: API.OperationMethod<
  CreateOrganizationsBigQueryExportsRequest,
  CreateOrganizationsBigQueryExportsResponse,
  CreateOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsBigQueryExportsRequest,
  output: CreateOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsBigQueryExportsRequest {
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests. */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1BigQueryExport;
}

export const PatchOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1BigQueryExport).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsBigQueryExportsRequest>;

export type PatchOrganizationsBigQueryExportsResponse =
  GoogleCloudSecuritycenterV1BigQueryExport;
export const PatchOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1BigQueryExport;

export type PatchOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a BigQuery export. */
export const patchOrganizationsBigQueryExports: API.OperationMethod<
  PatchOrganizationsBigQueryExportsRequest,
  PatchOrganizationsBigQueryExportsResponse,
  PatchOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsBigQueryExportsRequest,
  output: PatchOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsBigQueryExportsRequest {
  /** Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}` */
  name: string;
}

export const DeleteOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsBigQueryExportsRequest>;

export type DeleteOrganizationsBigQueryExportsResponse = Empty;
export const DeleteOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing BigQuery export. */
export const deleteOrganizationsBigQueryExports: API.OperationMethod<
  DeleteOrganizationsBigQueryExportsRequest,
  DeleteOrganizationsBigQueryExportsResponse,
  DeleteOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsBigQueryExportsRequest,
  output: DeleteOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsBigQueryExportsRequest {
  /** The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`. */
  parent: string;
  /** A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListOrganizationsBigQueryExportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/bigQueryExports" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsBigQueryExportsRequest>;

export type ListOrganizationsBigQueryExportsResponse =
  ListBigQueryExportsResponse;
export const ListOrganizationsBigQueryExportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBigQueryExportsResponse;

export type ListOrganizationsBigQueryExportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned. */
export const listOrganizationsBigQueryExports: API.PaginatedOperationMethod<
  ListOrganizationsBigQueryExportsRequest,
  ListOrganizationsBigQueryExportsResponse,
  ListOrganizationsBigQueryExportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsBigQueryExportsRequest,
  output: ListOrganizationsBigQueryExportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchCreateOrganizationsResourceValueConfigsRequest {
  /** Required. Resource name of the new ResourceValueConfig's parent. The parent field in the CreateResourceValueConfigRequest messages must either be empty or match this field. */
  parent: string;
  /** Request body */
  body?: BatchCreateResourceValueConfigsRequest;
}

export const BatchCreateOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<BatchCreateOrganizationsResourceValueConfigsRequest>;

export type BatchCreateOrganizationsResourceValueConfigsResponse =
  BatchCreateResourceValueConfigsResponse;
export const BatchCreateOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreateResourceValueConfigsResponse;

export type BatchCreateOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a ResourceValueConfig for an organization. Maps user's tags to difference resource values for use by the attack path simulation. */
export const batchCreateOrganizationsResourceValueConfigs: API.OperationMethod<
  BatchCreateOrganizationsResourceValueConfigsRequest,
  BatchCreateOrganizationsResourceValueConfigsResponse,
  BatchCreateOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateOrganizationsResourceValueConfigsRequest,
  output: BatchCreateOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsResourceValueConfigsRequest {
  /** Required. Name of the ResourceValueConfig to delete */
  name: string;
}

export const DeleteOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsResourceValueConfigsRequest>;

export type DeleteOrganizationsResourceValueConfigsResponse = Empty;
export const DeleteOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a ResourceValueConfig. */
export const deleteOrganizationsResourceValueConfigs: API.OperationMethod<
  DeleteOrganizationsResourceValueConfigsRequest,
  DeleteOrganizationsResourceValueConfigsResponse,
  DeleteOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsResourceValueConfigsRequest,
  output: DeleteOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsResourceValueConfigsRequest {
  /** The number of results to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListResourceValueConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListResourceValueConfigs` must match the call that provided the page token. page_size can be specified, and the new page_size will be used. */
  pageToken?: string;
  /** Required. The parent, which owns the collection of resource value configs. Its format is `organizations/[organization_id]` */
  parent: string;
}

export const ListOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/resourceValueConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsResourceValueConfigsRequest>;

export type ListOrganizationsResourceValueConfigsResponse =
  ListResourceValueConfigsResponse;
export const ListOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListResourceValueConfigsResponse;

export type ListOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all ResourceValueConfigs. */
export const listOrganizationsResourceValueConfigs: API.PaginatedOperationMethod<
  ListOrganizationsResourceValueConfigsRequest,
  ListOrganizationsResourceValueConfigsResponse,
  ListOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsResourceValueConfigsRequest,
  output: ListOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsResourceValueConfigsRequest {
  /** Name for the resource value configuration */
  name: string;
  /** The list of fields to be updated. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1ResourceValueConfig;
}

export const PatchOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudSecuritycenterV1ResourceValueConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsResourceValueConfigsRequest>;

export type PatchOrganizationsResourceValueConfigsResponse =
  GoogleCloudSecuritycenterV1ResourceValueConfig;
export const PatchOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1ResourceValueConfig;

export type PatchOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing ResourceValueConfigs with new rules. */
export const patchOrganizationsResourceValueConfigs: API.OperationMethod<
  PatchOrganizationsResourceValueConfigsRequest,
  PatchOrganizationsResourceValueConfigsResponse,
  PatchOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsResourceValueConfigsRequest,
  output: PatchOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsResourceValueConfigsRequest {
  /** Required. Name of the resource value config to retrieve. Its format is `organizations/{organization}/resourceValueConfigs/{config_id}`. */
  name: string;
}

export const GetOrganizationsResourceValueConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsResourceValueConfigsRequest>;

export type GetOrganizationsResourceValueConfigsResponse =
  GoogleCloudSecuritycenterV1ResourceValueConfig;
export const GetOrganizationsResourceValueConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1ResourceValueConfig;

export type GetOrganizationsResourceValueConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a ResourceValueConfig. */
export const getOrganizationsResourceValueConfigs: API.OperationMethod<
  GetOrganizationsResourceValueConfigsRequest,
  GetOrganizationsResourceValueConfigsResponse,
  GetOrganizationsResourceValueConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsResourceValueConfigsRequest,
  output: GetOrganizationsResourceValueConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsSourcesRequest {
  /** Required. Relative resource name of the source. Its format is `organizations/[organization_id]/source/[source_id]`. */
  name: string;
}

export const GetOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsSourcesRequest>;

export type GetOrganizationsSourcesResponse = Source;
export const GetOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

export type GetOrganizationsSourcesError = DefaultErrors | NotFound | Forbidden;

/** Gets a source. */
export const getOrganizationsSources: API.OperationMethod<
  GetOrganizationsSourcesRequest,
  GetOrganizationsSourcesResponse,
  GetOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsSourcesRequest,
  output: GetOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyOrganizationsSourcesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyOrganizationsSourcesRequest>;

export type GetIamPolicyOrganizationsSourcesResponse = Policy;
export const GetIamPolicyOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy on the specified Source. */
export const getIamPolicyOrganizationsSources: API.OperationMethod<
  GetIamPolicyOrganizationsSourcesRequest,
  GetIamPolicyOrganizationsSourcesResponse,
  GetIamPolicyOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyOrganizationsSourcesRequest,
  output: GetIamPolicyOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyOrganizationsSourcesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyOrganizationsSourcesRequest>;

export type SetIamPolicyOrganizationsSourcesResponse = Policy;
export const SetIamPolicyOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified Source. */
export const setIamPolicyOrganizationsSources: API.OperationMethod<
  SetIamPolicyOrganizationsSourcesRequest,
  SetIamPolicyOrganizationsSourcesResponse,
  SetIamPolicyOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyOrganizationsSourcesRequest,
  output: SetIamPolicyOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsSourcesRequest {
  /** The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}" */
  name: string;
  /** The FieldMask to use when updating the source resource. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: Source;
}

export const PatchOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsSourcesRequest>;

export type PatchOrganizationsSourcesResponse = Source;
export const PatchOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

export type PatchOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a source. */
export const patchOrganizationsSources: API.OperationMethod<
  PatchOrganizationsSourcesRequest,
  PatchOrganizationsSourcesResponse,
  PatchOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSourcesRequest,
  output: PatchOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsSourcesRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`. */
  parent: string;
}

export const ListOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSourcesRequest>;

export type ListOrganizationsSourcesResponse = ListSourcesResponse;
export const ListOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSourcesResponse;

export type ListOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all sources belonging to an organization. */
export const listOrganizationsSources: API.PaginatedOperationMethod<
  ListOrganizationsSourcesRequest,
  ListOrganizationsSourcesResponse,
  ListOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSourcesRequest,
  output: ListOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsOrganizationsSourcesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsOrganizationsSourcesRequest>;

export type TestIamPermissionsOrganizationsSourcesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the permissions that a caller has on the specified source. */
export const testIamPermissionsOrganizationsSources: API.OperationMethod<
  TestIamPermissionsOrganizationsSourcesRequest,
  TestIamPermissionsOrganizationsSourcesResponse,
  TestIamPermissionsOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsOrganizationsSourcesRequest,
  output: TestIamPermissionsOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsSourcesRequest {
  /** Required. Resource name of the new source's parent. Its format should be `organizations/[organization_id]`. */
  parent: string;
  /** Request body */
  body?: Source;
}

export const CreateOrganizationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/sources", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsSourcesRequest>;

export type CreateOrganizationsSourcesResponse = Source;
export const CreateOrganizationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

export type CreateOrganizationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a source. */
export const createOrganizationsSources: API.OperationMethod<
  CreateOrganizationsSourcesRequest,
  CreateOrganizationsSourcesResponse,
  CreateOrganizationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsSourcesRequest,
  output: CreateOrganizationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GroupOrganizationsSourcesFindingsRequest {
  /** Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-` */
  parent: string;
  /** Request body */
  body?: GroupFindingsRequest;
}

export const GroupOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GroupFindingsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/findings:group",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GroupOrganizationsSourcesFindingsRequest>;

export type GroupOrganizationsSourcesFindingsResponse = GroupFindingsResponse;
export const GroupOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GroupFindingsResponse;

export type GroupOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings */
export const groupOrganizationsSourcesFindings: API.OperationMethod<
  GroupOrganizationsSourcesFindingsRequest,
  GroupOrganizationsSourcesFindingsResponse,
  GroupOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GroupOrganizationsSourcesFindingsRequest,
  output: GroupOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityMarksOrganizationsSourcesFindingsRequest {
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name: string;
  /** The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.". */
  updateMask?: string;
  /** The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time. */
  startTime?: string;
  /** Request body */
  body?: SecurityMarks;
}

export const UpdateSecurityMarksOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    startTime: Schema.optional(Schema.String).pipe(T.HttpQuery("startTime")),
    body: Schema.optional(SecurityMarks).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityMarksOrganizationsSourcesFindingsRequest>;

export type UpdateSecurityMarksOrganizationsSourcesFindingsResponse =
  SecurityMarks;
export const UpdateSecurityMarksOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityMarks;

export type UpdateSecurityMarksOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates security marks. */
export const updateSecurityMarksOrganizationsSourcesFindings: API.OperationMethod<
  UpdateSecurityMarksOrganizationsSourcesFindingsRequest,
  UpdateSecurityMarksOrganizationsSourcesFindingsResponse,
  UpdateSecurityMarksOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityMarksOrganizationsSourcesFindingsRequest,
  output: UpdateSecurityMarksOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetStateOrganizationsSourcesFindingsRequest {
  /** Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`. */
  name: string;
  /** Request body */
  body?: SetFindingStateRequest;
}

export const SetStateOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetFindingStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setState", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetStateOrganizationsSourcesFindingsRequest>;

export type SetStateOrganizationsSourcesFindingsResponse = Finding;
export const SetStateOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type SetStateOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the state of a finding. */
export const setStateOrganizationsSourcesFindings: API.OperationMethod<
  SetStateOrganizationsSourcesFindingsRequest,
  SetStateOrganizationsSourcesFindingsResponse,
  SetStateOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetStateOrganizationsSourcesFindingsRequest,
  output: SetStateOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsSourcesFindingsRequest {
  /** Required. Resource name of the new finding's parent. Its format should be `organizations/[organization_id]/sources/[source_id]`. */
  parent: string;
  /** Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length. */
  findingId?: string;
  /** Request body */
  body?: Finding;
}

export const CreateOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    findingId: Schema.optional(Schema.String).pipe(T.HttpQuery("findingId")),
    body: Schema.optional(Finding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/findings", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsSourcesFindingsRequest>;

export type CreateOrganizationsSourcesFindingsResponse = Finding;
export const CreateOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type CreateOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a finding. The corresponding source must exist for finding creation to succeed. */
export const createOrganizationsSourcesFindings: API.OperationMethod<
  CreateOrganizationsSourcesFindingsRequest,
  CreateOrganizationsSourcesFindingsResponse,
  CreateOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsSourcesFindingsRequest,
  output: CreateOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetMuteOrganizationsSourcesFindingsRequest {
  /** Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`. */
  name: string;
  /** Request body */
  body?: SetMuteRequest;
}

export const SetMuteOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SetMuteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setMute", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetMuteOrganizationsSourcesFindingsRequest>;

export type SetMuteOrganizationsSourcesFindingsResponse = Finding;
export const SetMuteOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type SetMuteOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the mute state of a finding. */
export const setMuteOrganizationsSourcesFindings: API.OperationMethod<
  SetMuteOrganizationsSourcesFindingsRequest,
  SetMuteOrganizationsSourcesFindingsResponse,
  SetMuteOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetMuteOrganizationsSourcesFindingsRequest,
  output: SetMuteOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsSourcesFindingsRequest {
  /** The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask. */
  updateMask?: string;
  /** The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}". */
  name: string;
  /** Request body */
  body?: Finding;
}

export const PatchOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Finding).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsSourcesFindingsRequest>;

export type PatchOrganizationsSourcesFindingsResponse = Finding;
export const PatchOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Finding;

export type PatchOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates a finding. The corresponding source must exist for a finding creation to succeed. */
export const patchOrganizationsSourcesFindings: API.OperationMethod<
  PatchOrganizationsSourcesFindingsRequest,
  PatchOrganizationsSourcesFindingsResponse,
  PatchOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSourcesFindingsRequest,
  output: PatchOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsSourcesFindingsRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-` */
  parent: string;
  /** Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. */
  readTime?: string;
  /** When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time. */
  compareDuration?: string;
  /** The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks */
  orderBy?: string;
  /** Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:` */
  filter?: string;
  /** A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields. */
  fieldMask?: string;
}

export const ListOrganizationsSourcesFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    compareDuration: Schema.optional(Schema.String).pipe(
      T.HttpQuery("compareDuration"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    fieldMask: Schema.optional(Schema.String).pipe(T.HttpQuery("fieldMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSourcesFindingsRequest>;

export type ListOrganizationsSourcesFindingsResponse = ListFindingsResponse;
export const ListOrganizationsSourcesFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingsResponse;

export type ListOrganizationsSourcesFindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings */
export const listOrganizationsSourcesFindings: API.PaginatedOperationMethod<
  ListOrganizationsSourcesFindingsRequest,
  ListOrganizationsSourcesFindingsResponse,
  ListOrganizationsSourcesFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSourcesFindingsRequest,
  output: ListOrganizationsSourcesFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsSourcesFindingsExternalSystemsRequest {
  /** The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated. */
  updateMask?: string;
  /** Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira" */
  name: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1ExternalSystem;
}

export const PatchOrganizationsSourcesFindingsExternalSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudSecuritycenterV1ExternalSystem).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsSourcesFindingsExternalSystemsRequest>;

export type PatchOrganizationsSourcesFindingsExternalSystemsResponse =
  GoogleCloudSecuritycenterV1ExternalSystem;
export const PatchOrganizationsSourcesFindingsExternalSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1ExternalSystem;

export type PatchOrganizationsSourcesFindingsExternalSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates external system. This is for a given finding. */
export const patchOrganizationsSourcesFindingsExternalSystems: API.OperationMethod<
  PatchOrganizationsSourcesFindingsExternalSystemsRequest,
  PatchOrganizationsSourcesFindingsExternalSystemsResponse,
  PatchOrganizationsSourcesFindingsExternalSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSourcesFindingsExternalSystemsRequest,
  output: PatchOrganizationsSourcesFindingsExternalSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  /** Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}` */
  name: string;
}

export const GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;
export const GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule;

export type GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves an EffectiveSecurityHealthAnalyticsCustomModule. */
export const getOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.OperationMethod<
  GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  output:
    GetOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
}

export const ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/effectiveCustomModules" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest>;

export type ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;
export const ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

export type ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors. */
export const listOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModules: API.PaginatedOperationMethod<
  ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesRequest,
  ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesResponse,
  ListOrganizationsSecurityHealthAnalyticsSettingsEffectiveCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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

export interface DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}` */
  name: string;
}

export const DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  Empty;
export const DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules. */
export const deleteOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    DeleteOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
  /** Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
}

export const ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customModules" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListSecurityHealthAnalyticsCustomModulesResponse;
export const ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSecurityHealthAnalyticsCustomModulesResponse;

export type ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors. */
export const listOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: ListOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. */
  name: string;
  /** The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(
      GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only. */
export const patchOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    PatchOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** Request body */
  body?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
}

export const CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default. */
export const createOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    CreateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings` */
  parent: string;
  /** The value returned by the last call indicating a continuation */
  pageToken?: string;
  /** The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. */
  pageSize?: number;
}

export const ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/customModules:listDescendant",
    }),
    svc,
  ) as unknown as Schema.Schema<ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  ListDescendantSecurityHealthAnalyticsCustomModulesResponse;
export const ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

export type ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants. */
export const listDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.PaginatedOperationMethod<
  ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  ListDescendantOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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

export interface GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}` */
  name: string;
}

export const GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;
export const GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule;

export type GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a SecurityHealthAnalyticsCustomModule. */
export const getOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output: GetOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest {
  /** Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}` */
  parent: string;
  /** Request body */
  body?: SimulateSecurityHealthAnalyticsCustomModuleRequest;
}

export const SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest>;

export type SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  SimulateSecurityHealthAnalyticsCustomModuleResponse;
export const SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SimulateSecurityHealthAnalyticsCustomModuleResponse;

export type SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Simulates a given SecurityHealthAnalyticsCustomModule and Resource. */
export const simulateOrganizationsSecurityHealthAnalyticsSettingsCustomModules: API.OperationMethod<
  SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesRequest,
  output:
    SimulateOrganizationsSecurityHealthAnalyticsSettingsCustomModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
