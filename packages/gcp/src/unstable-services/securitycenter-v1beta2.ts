// ==========================================================================
// Security Command Center API (securitycenter v1beta2)
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
  version: "v1beta2",
  rootUrl: "https://securitycenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudSecuritycenterV2PortRange {
  /** Minimum port value. */
  min?: string;
  /** Maximum port value. */
  max?: string;
}

export const GoogleCloudSecuritycenterV2PortRange: Schema.Schema<GoogleCloudSecuritycenterV2PortRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    min: Schema.optional(Schema.String),
    max: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2PortRange" });

export interface GoogleCloudSecuritycenterV2IpRule {
  /** Optional. An optional list of ports to which this rule applies. This field is only applicable for the UDP or (S)TCP protocols. Each entry must be either an integer or a range including a min and max port number. */
  portRanges?: ReadonlyArray<GoogleCloudSecuritycenterV2PortRange>;
  /** The IP protocol this rule applies to. This value can either be one of the following well known protocol strings (TCP, UDP, ICMP, ESP, AH, IPIP, SCTP) or a string representation of the integer value. */
  protocol?: string;
}

export const GoogleCloudSecuritycenterV2IpRule: Schema.Schema<GoogleCloudSecuritycenterV2IpRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    portRanges: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PortRange),
    ),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRule" });

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

export interface GoogleCloudSecuritycenterV2ResourceValueConfig {
  /** Cloud provider this configuration applies to */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope and will be checked with `AND` of other resources. */
  scope?: string;
  /** Description of the resource value configuration. */
  description?: string;
  /** Identifier. Name for the resource value configuration */
  name?: string;
  /** Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing */
  tagValues?: ReadonlyArray<string>;
  /** List of resource labels to search for, evaluated with `AND`. For example, "resource_labels_selector": {"key": "value", "env": "prod"} will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels */
  resourceLabelsSelector?: Record<string, string>;
  /** Output only. Timestamp this resource value configuration was created. */
  createTime?: string;
  /** Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources. */
  resourceType?: string;
  /** A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset". */
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping;
  /** Resource value level this expression represents Only required when there is no Sensitive Data Protection mapping in the request */
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Output only. Timestamp this resource value configuration was last updated. */
  updateTime?: string;
}

export const GoogleCloudSecuritycenterV2ResourceValueConfig: Schema.Schema<GoogleCloudSecuritycenterV2ResourceValueConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudProvider: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    createTime: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping,
    ),
    resourceValue: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ResourceValueConfig" });

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

export interface SecretStatus {
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

export const SecretStatus: Schema.Schema<SecretStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdatedTime: Schema.optional(Schema.String),
    validity: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretStatus" });

export interface Package {
  /** The CPE URI where the vulnerability was detected. */
  cpeUri?: string;
  /** Type of package, for example, os, maven, or go. */
  packageType?: string;
  /** The version of the package. */
  packageVersion?: string;
  /** The name of the package where the vulnerability was detected. */
  packageName?: string;
}

export const Package: Schema.Schema<Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    packageVersion: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

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
  /** Tuple with denied rules. */
  denied?: Denied;
  /** Tuple with allowed rules. */
  allowed?: Allowed;
  /** If destination IP ranges are specified, the firewall rule applies only to traffic that has a destination IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  destinationIpRanges?: ReadonlyArray<string>;
  /** If source IP ranges are specified, the firewall rule applies only to traffic that has a source IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  sourceIpRanges?: ReadonlyArray<string>;
  /** The direction that the rule is applicable to, one of ingress or egress. */
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  /** Name of the network protocol service, such as FTP, that is exposed by the open port. Follows the naming convention available at: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml. */
  exposedServices?: ReadonlyArray<string>;
}

export const IpRules: Schema.Schema<IpRules> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    denied: Schema.optional(Denied),
    allowed: Schema.optional(Allowed),
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
    direction: Schema.optional(Schema.String),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IpRules" });

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

export interface GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount {
  /** The AWS account name of the resource associated with the issue. */
  name?: string;
  /** The AWS account ID of the resource associated with the issue. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount",
  });

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
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality;
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    businessOwners: Schema.optional(
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
    criticality: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality,
    ),
    operatorOwners: Schema.optional(
      Schema.Array(
        GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes",
  });

export interface GoogleCloudSecuritycenterV2IssueResourceApplication {
  /** Consumer provided attributes for the application */
  attributes?: GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
  /** The resource name of an Application. Format: `projects/{host-project-id}/locations/{location}/applications/{application-id}` */
  name?: string;
}

export const GoogleCloudSecuritycenterV2IssueResourceApplication: Schema.Schema<GoogleCloudSecuritycenterV2IssueResourceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
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
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision;
  /** The resource-type specific display name of the resource associated with the issue. */
  displayName?: string;
  /** The type of the resource associated with the issue. */
  type?: string;
  /** The AWS metadata of the resource associated with the issue. Only populated for AWS resources. */
  awsMetadata?: GoogleCloudSecuritycenterV2IssueResourceAwsMetadata;
  /** The AppHub application associated with the resource, if any. Only populated for the primary resource. */
  application?: GoogleCloudSecuritycenterV2IssueResourceApplication;
  /** The cloud provider of the resource associated with the issue. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The Azure metadata of the resource associated with the issue. Only populated for Azure resources. */
  azureMetadata?: GoogleCloudSecuritycenterV2IssueResourceAzureMetadata;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision;
  /** The Google Cloud metadata of the resource associated with the issue. Only populated for Google Cloud resources. */
  googleCloudMetadata?: GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata;
  /** The full resource name of the resource associated with the issue. */
  name?: string;
  /** The ADC application associated with the finding. */
  adcApplication?: GoogleCloudSecuritycenterV2IssueResourceAdcApplication;
}

export const GoogleCloudSecuritycenterV2IssueResource: Schema.Schema<GoogleCloudSecuritycenterV2IssueResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision,
    ),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAwsMetadata,
    ),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceApplication,
    ),
    cloudProvider: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAzureMetadata,
    ),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision,
    ),
    googleCloudMetadata: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata,
    ),
    name: Schema.optional(Schema.String),
    adcApplication: Schema.optional(
      GoogleCloudSecuritycenterV2IssueResourceAdcApplication,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueResource" });

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
  /** The project ID that the resource belongs to. */
  projectDisplayName?: string;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV2Folder>;
  /** The name of the organization that the resource belongs to. */
  organization?: string;
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** The full resource name of resource's parent. */
  parent?: string;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
}

export const GcpMetadata: Schema.Schema<GcpMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectDisplayName: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Folder)),
    organization: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcpMetadata" });

export interface Connection {
  /** Source IP address. */
  sourceIp?: string;
  /** Source port. */
  sourcePort?: number;
  /** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
  /** Destination port. Not present for sockets that are listening and not connected. */
  destinationPort?: number;
  /** Destination IP address. Not present for sockets that are listening and not connected. */
  destinationIp?: string;
}

export const Connection: Schema.Schema<Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceIp: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    destinationIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connection" });

export interface ResourcePathNode {
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

export const ResourcePathNode: Schema.Schema<ResourcePathNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourcePathNode" });

export interface ResourcePath {
  /** The list of nodes that make the up resource path, ordered from lowest level to highest level. */
  nodes?: ReadonlyArray<ResourcePathNode>;
}

export const ResourcePath: Schema.Schema<ResourcePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(ResourcePathNode)),
  }).annotate({ identifier: "ResourcePath" });

export interface CloudLoggingEntry {
  /** A unique identifier for the log entry. */
  insertId?: string;
  /** The organization, folder, or project of the monitored resource that produced this log entry. */
  resourceContainer?: string;
  /** The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity`. Note that this field is not URL-encoded, unlike the `LOG_ID` field in `LogEntry`. */
  logId?: string;
  /** The time the event described by the log entry occurred. */
  timestamp?: string;
}

export const CloudLoggingEntry: Schema.Schema<CloudLoggingEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insertId: Schema.optional(Schema.String),
    resourceContainer: Schema.optional(Schema.String),
    logId: Schema.optional(Schema.String),
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

export interface AdaptiveProtection {
  /** A score of 0 means that there is low confidence that the detected event is an actual attack. A score of 1 means that there is high confidence that the detected event is an attack. See the [Adaptive Protection documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning) for further explanation. */
  confidence?: number;
}

export const AdaptiveProtection: Schema.Schema<AdaptiveProtection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AdaptiveProtection" });

export interface GoogleCloudSecuritycenterV2Control {
  /** Display name of the control. For example, AU-02. */
  displayName?: string;
  /** Name of the Control */
  controlName?: string;
}

export const GoogleCloudSecuritycenterV2Control: Schema.Schema<GoogleCloudSecuritycenterV2Control> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    controlName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Control" });

export interface GoogleCloudSecuritycenterV2Framework {
  /** Name of the framework associated with the finding */
  name?: string;
  /** Type of the framework associated with the finding, to specify whether the framework is built-in (pre-defined and immutable) or a custom framework defined by the customer (equivalent to security posture) */
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
  /** Display name of the framework. For a standard framework, this will look like e.g. PCI DSS 3.2.1, whereas for a custom framework it can be a user defined string like MyFramework */
  displayName?: string;
  /** The controls associated with the framework. */
  controls?: ReadonlyArray<GoogleCloudSecuritycenterV2Control>;
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
}

export const GoogleCloudSecuritycenterV2Framework: Schema.Schema<GoogleCloudSecuritycenterV2Framework> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    controls: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Control)),
    category: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Framework" });

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

export interface GoogleCloudSecuritycenterV2ComplianceDetails {
  /** Details of Frameworks associated with the finding */
  frameworks?: ReadonlyArray<GoogleCloudSecuritycenterV2Framework>;
  /** CloudControl associated with the finding */
  cloudControl?: GoogleCloudSecuritycenterV2CloudControl;
  /** Cloud Control Deployments associated with the finding. For example, organizations/123/locations/global/cloudControlDeployments/deploymentIdentifier */
  cloudControlDeploymentNames?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2ComplianceDetails: Schema.Schema<GoogleCloudSecuritycenterV2ComplianceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frameworks: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Framework),
    ),
    cloudControl: Schema.optional(GoogleCloudSecuritycenterV2CloudControl),
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ComplianceDetails" });

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

export interface GoogleCloudSecuritycenterV2CloudDlpInspection {
  /** Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`. */
  inspectJob?: string;
  /** Whether Cloud DLP scanned the complete resource or a sampled subset. */
  fullScan?: boolean;
  /** The number of times Cloud DLP found this infoType within this job and resource. */
  infoTypeCount?: string;
  /** The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`. */
  infoType?: string;
}

export const GoogleCloudSecuritycenterV2CloudDlpInspection: Schema.Schema<GoogleCloudSecuritycenterV2CloudDlpInspection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectJob: Schema.optional(Schema.String),
    fullScan: Schema.optional(Schema.Boolean),
    infoTypeCount: Schema.optional(Schema.String),
    infoType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpInspection" });

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

export interface Cvssv3 {
  /** This metric measures the impact to integrity of a successfully exploited vulnerability. */
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
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
  /** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
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
}

export const Cvssv3: Schema.Schema<Cvssv3> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrityImpact: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    attackVector: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
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
  /** The exploitation activity of the vulnerability in the wild. */
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  /** Date the first publicly available exploit or PoC was released. */
  exploitReleaseDate?: string;
  /** Whether or not the vulnerability has been observed in the wild. */
  observedInTheWild?: boolean;
  /** Whether upstream fix is available for the CVE. */
  upstreamFixAvailable?: boolean;
  /** Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527 */
  references?: ReadonlyArray<Reference>;
  /** Whether or not the vulnerability was zero day when the finding was published. */
  zeroDay?: boolean;
  /** The unique identifier for the vulnerability. e.g. CVE-2021-34527 */
  id?: string;
  /** Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document */
  cvssv3?: Cvssv3;
  /** Date of the earliest known exploitation. */
  firstExploitationDate?: string;
}

export const Cve: Schema.Schema<Cve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    impact: Schema.optional(Schema.String),
    exploitationActivity: Schema.optional(Schema.String),
    exploitReleaseDate: Schema.optional(Schema.String),
    observedInTheWild: Schema.optional(Schema.Boolean),
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
    references: Schema.optional(Schema.Array(Reference)),
    zeroDay: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    cvssv3: Schema.optional(Cvssv3),
    firstExploitationDate: Schema.optional(Schema.String),
  }).annotate({ identifier: "Cve" });

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

export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
  /** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
  canonicalName?: string;
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name?: string;
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
}

export const GoogleCloudSecuritycenterV1p1beta1SecurityMarks: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1SecurityMarks",
  });

export interface GoogleCloudSecuritycenterV2Disk {
  /** The name of the disk, for example, "https://www.googleapis.com/compute/v1/projects/{project-id}/zones/{zone-id}/disks/{disk-id}". */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Disk: Schema.Schema<GoogleCloudSecuritycenterV2Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Disk" });

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
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`. */
  name?: string;
  /** Optional version name for this InfoType. */
  version?: string;
  /** Optional custom sensitivity for this InfoType. This only applies to data profiling. */
  sensitivityScore?: SensitivityScore;
}

export const InfoType: Schema.Schema<InfoType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(SensitivityScore),
  }).annotate({ identifier: "InfoType" });

export interface CloudDlpDataProfile {
  /** The resource hierarchy level at which the data profile was generated. */
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
  /** Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`. */
  dataProfile?: string;
  /** Type of information detected by SDP. Info type includes name, version and sensitivity of the detected information type. */
  infoTypes?: ReadonlyArray<InfoType>;
}

export const CloudDlpDataProfile: Schema.Schema<CloudDlpDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentType: Schema.optional(Schema.String),
    dataProfile: Schema.optional(Schema.String),
    infoTypes: Schema.optional(Schema.Array(InfoType)),
  }).annotate({ identifier: "CloudDlpDataProfile" });

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
  /** Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. */
  uri?: string;
  /** Container labels, as provided by the container runtime. */
  labels?: ReadonlyArray<Label>;
  /** Name of the container. */
  name?: string;
  /** The time that the container was created. */
  createTime?: string;
  /** Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. */
  imageId?: string;
}

export const Container: Schema.Schema<Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Label)),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Container" });

export interface Securitycenter_Object {
  /** Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. */
  name?: string;
  /** Kubernetes object kind, such as "Namespace". */
  kind?: string;
  /** Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. */
  ns?: string;
  /** Kubernetes object group, such as "policy.k8s.io/v1". */
  group?: string;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<Container>;
}

export const Securitycenter_Object: Schema.Schema<Securitycenter_Object> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    containers: Schema.optional(Schema.Array(Container)),
  }).annotate({ identifier: "Securitycenter_Object" });

export interface GoogleCloudSecuritycenterV2Job {
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
  /** Optional. If the job did not complete successfully, this field describes why. */
  errorCode?: number;
}

export const GoogleCloudSecuritycenterV2Job: Schema.Schema<GoogleCloudSecuritycenterV2Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Job" });

export interface GoogleCloudSecuritycenterV2ToxicCombination {
  /** List of resource names of findings associated with this toxic combination. For example, `organizations/123/sources/456/findings/789`. */
  relatedFindings?: ReadonlyArray<string>;
  /** The [Attack exposure score](https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_exposure_scores) of this toxic combination. The score is a measure of how much this toxic combination exposes one or more high-value resources to potential attack. */
  attackExposureScore?: number;
}

export const GoogleCloudSecuritycenterV2ToxicCombination: Schema.Schema<GoogleCloudSecuritycenterV2ToxicCombination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
    attackExposureScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ToxicCombination" });

export interface AccessReview {
  /** Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty). */
  ns?: string;
  /** A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all. */
  verb?: string;
  /** The API group of the resource. "*" means all. */
  group?: string;
  /** The optional subresource type. */
  subresource?: string;
  /** The name of the resource being requested. Empty means all. */
  name?: string;
  /** The API version of the resource. "*" means all. */
  version?: string;
  /** The optional resource type requested. "*" means all. */
  resource?: string;
}

export const AccessReview: Schema.Schema<AccessReview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessReview" });

export interface Network {
  /** The name of the VPC network resource, for example, `//compute.googleapis.com/projects/my-project/global/networks/my-network`. */
  name?: string;
}

export const Network: Schema.Schema<Network> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Network" });

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

export interface GoogleCloudSecuritycenterV2AwsOrganizationalUnit {
  /** The friendly name of the OU. */
  name?: string;
  /** The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. For example, "ou-ab12-cd34ef56". */
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganizationalUnit: Schema.Schema<GoogleCloudSecuritycenterV2AwsOrganizationalUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2AwsOrganizationalUnit",
  });

export interface AwsAccount {
  /** The friendly name of this account. */
  name?: string;
  /** The unique identifier (ID) of the account, containing exactly 12 digits. */
  id?: string;
}

export const AwsAccount: Schema.Schema<AwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsAccount" });

export interface AwsOrganization {
  /** The unique identifier (ID) for the organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits. */
  id?: string;
}

export const AwsOrganization: Schema.Schema<AwsOrganization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganization" });

export interface AwsOrganizationalUnit {
  /** The friendly name of the OU. */
  name?: string;
  /** The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. For example, "ou-ab12-cd34ef56". */
  id?: string;
}

export const AwsOrganizationalUnit: Schema.Schema<AwsOrganizationalUnit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsOrganizationalUnit" });

export interface AwsMetadata {
  /** The AWS account associated with the resource. */
  account?: AwsAccount;
  /** The AWS organization associated with the resource. */
  organization?: AwsOrganization;
  /** A list of AWS organizational units associated with the resource, ordered from lowest level (closest to the account) to highest level. */
  organizationalUnits?: ReadonlyArray<AwsOrganizationalUnit>;
}

export const AwsMetadata: Schema.Schema<AwsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(AwsAccount),
    organization: Schema.optional(AwsOrganization),
    organizationalUnits: Schema.optional(Schema.Array(AwsOrganizationalUnit)),
  }).annotate({ identifier: "AwsMetadata" });

export interface GoogleCloudSecuritycenterV2PolicyDriftDetails {
  /** The detected value that violates the deployed posture, for example, `false` or `allowed_values={"projects/22831892"}`. */
  detectedValue?: string;
  /** The name of the updated field, for example constraint.implementation.policy_rules[0].enforce */
  field?: string;
  /** The value of this field that was configured in a posture, for example, `true` or `allowed_values={"projects/29831892"}`. */
  expectedValue?: string;
}

export const GoogleCloudSecuritycenterV2PolicyDriftDetails: Schema.Schema<GoogleCloudSecuritycenterV2PolicyDriftDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detectedValue: Schema.optional(Schema.String),
    field: Schema.optional(Schema.String),
    expectedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2PolicyDriftDetails" });

export interface GoogleCloudSecuritycenterV2SecurityPosture {
  /** The name of the updated policy, for example, `projects/{project_id}/policies/{constraint_name}`. */
  changedPolicy?: string;
  /** The details about a change in an updated policy that violates the deployed posture. */
  policyDriftDetails?: ReadonlyArray<GoogleCloudSecuritycenterV2PolicyDriftDetails>;
  /** The version of the posture, for example, `c7cfa2a8`. */
  revisionId?: string;
  /** The name of the updated policy set, for example, `cis-policyset`. */
  policySet?: string;
  /** The project, folder, or organization on which the posture is deployed, for example, `projects/{project_number}`. */
  postureDeploymentResource?: string;
  /** The name of the posture deployment, for example, `organizations/{org_id}/posturedeployments/{posture_deployment_id}`. */
  postureDeployment?: string;
  /** The ID of the updated policy, for example, `compute-policy-1`. */
  policy?: string;
  /** Name of the posture, for example, `CIS-Posture`. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPosture: Schema.Schema<GoogleCloudSecuritycenterV2SecurityPosture> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changedPolicy: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2PolicyDriftDetails),
    ),
    revisionId: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
    postureDeploymentResource: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPosture" });

export interface SecurityPolicy {
  /** Whether or not the associated rule or policy is in preview mode. */
  preview?: boolean;
  /** The name of the Google Cloud Armor security policy, for example, "my-security-policy". */
  name?: string;
  /** The type of Google Cloud Armor security policy for example, 'backend security policy', 'edge security policy', 'network edge security policy', or 'always-on DDoS protection'. */
  type?: string;
}

export const SecurityPolicy: Schema.Schema<SecurityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preview: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPolicy" });

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

export interface Config {
  /** The state of enablement for the module at its level of the resource hierarchy. */
  moduleEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** The configuration value for the module. The absence of this field implies its inheritance from the parent. */
  value?: Record<string, unknown>;
}

export const Config: Schema.Schema<Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    moduleEnablementState: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Config" });

export interface WebSecurityScannerSettings {
  /** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration. */
  modules?: Record<string, Config>;
  /** Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name?: string;
  /** Output only. The time the settings were last updated. */
  updateTime?: string;
}

export const WebSecurityScannerSettings: Schema.Schema<WebSecurityScannerSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebSecurityScannerSettings" });

export interface PolicyDriftDetails {
  /** The name of the updated field, for example constraint.implementation.policy_rules[0].enforce */
  field?: string;
  /** The value of this field that was configured in a posture, for example, `true` or `allowed_values={"projects/29831892"}`. */
  expectedValue?: string;
  /** The detected value that violates the deployed posture, for example, `false` or `allowed_values={"projects/22831892"}`. */
  detectedValue?: string;
}

export const PolicyDriftDetails: Schema.Schema<PolicyDriftDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    expectedValue: Schema.optional(Schema.String),
    detectedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyDriftDetails" });

export interface SecurityPosture {
  /** The project, folder, or organization on which the posture is deployed, for example, `projects/{project_number}`. */
  postureDeploymentResource?: string;
  /** The name of the posture deployment, for example, `organizations/{org_id}/posturedeployments/{posture_deployment_id}`. */
  postureDeployment?: string;
  /** The ID of the updated policy, for example, `compute-policy-1`. */
  policy?: string;
  /** Name of the posture, for example, `CIS-Posture`. */
  name?: string;
  /** The name of the updated policy, for example, `projects/{project_id}/policies/{constraint_name}`. */
  changedPolicy?: string;
  /** The details about a change in an updated policy that violates the deployed posture. */
  policyDriftDetails?: ReadonlyArray<PolicyDriftDetails>;
  /** The version of the posture, for example, `c7cfa2a8`. */
  revisionId?: string;
  /** The name of the updated policyset, for example, `cis-policyset`. */
  policySet?: string;
}

export const SecurityPosture: Schema.Schema<SecurityPosture> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postureDeploymentResource: Schema.optional(Schema.String),
    postureDeployment: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    changedPolicy: Schema.optional(Schema.String),
    policyDriftDetails: Schema.optional(Schema.Array(PolicyDriftDetails)),
    revisionId: Schema.optional(Schema.String),
    policySet: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityPosture" });

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

export interface GoogleCloudSecuritycenterV2SecretFilePath {
  /** Path to the file. */
  path?: string;
}

export const GoogleCloudSecuritycenterV2SecretFilePath: Schema.Schema<GoogleCloudSecuritycenterV2SecretFilePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecretFilePath" });

export interface DiscoveredWorkload {
  /** The confidence in detection of this workload. */
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
  /** A boolean flag set to true if associated hardware strongly predicts the workload type. */
  detectedRelevantHardware?: boolean;
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
    confidence: Schema.optional(Schema.String),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    workloadType: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DiscoveredWorkload" });

export interface MitreAttack {
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
  /** The MITRE ATT&CK version referenced by the above fields. E.g. "8". */
  version?: string;
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
}

export const MitreAttack: Schema.Schema<MitreAttack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
    primaryTactic: Schema.optional(Schema.String),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "MitreAttack" });

export interface GoogleCloudSecuritycenterV2DiscoveredWorkload {
  /** The confidence in detection of this workload. */
  confidence?: "CONFIDENCE_UNSPECIFIED" | "CONFIDENCE_HIGH" | (string & {});
  /** A boolean flag set to true if associated hardware strongly predicts the workload type. */
  detectedRelevantHardware?: boolean;
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

export const GoogleCloudSecuritycenterV2DiscoveredWorkload: Schema.Schema<GoogleCloudSecuritycenterV2DiscoveredWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.String),
    detectedRelevantHardware: Schema.optional(Schema.Boolean),
    detectedRelevantPackages: Schema.optional(Schema.Boolean),
    workloadType: Schema.optional(Schema.String),
    detectedRelevantKeywords: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiscoveredWorkload" });

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

export interface GoogleCloudSecuritycenterV2Connection {
  /** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "ICMP"
    | "TCP"
    | "UDP"
    | "GRE"
    | "ESP"
    | (string & {});
  /** Source IP address. */
  sourceIp?: string;
  /** Source port. */
  sourcePort?: number;
  /** Destination IP address. Not present for sockets that are listening and not connected. */
  destinationIp?: string;
  /** Destination port. Not present for sockets that are listening and not connected. */
  destinationPort?: number;
}

export const GoogleCloudSecuritycenterV2Connection: Schema.Schema<GoogleCloudSecuritycenterV2Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    sourceIp: Schema.optional(Schema.String),
    sourcePort: Schema.optional(Schema.Number),
    destinationIp: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Connection" });

export interface GroupMembership {
  /** Type of group. */
  groupType?:
    | "GROUP_TYPE_UNSPECIFIED"
    | "GROUP_TYPE_TOXIC_COMBINATION"
    | "GROUP_TYPE_CHOKEPOINT"
    | (string & {});
  /** ID of the group. */
  groupId?: string;
}

export const GroupMembership: Schema.Schema<GroupMembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupType: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GroupMembership" });

export interface DataRetentionDeletionEvent {
  /** Min duration of retention allowed from the DSPM retention control. This field is only populated when event type is set to EVENT_TYPE_MIN_TTL_FROM_CREATION. */
  minRetentionAllowed?: string;
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
  /** Number of objects that violated the policy for this resource. If the number is less than 1,000, then the value of this field is the exact number. If the number of objects that violated the policy is greater than or equal to 1,000, then the value of this field is 1000. */
  dataObjectCount?: string;
  /** Maximum duration of retention allowed from the DRD control. This comes from the DRD control where users set a max TTL for their data. For example, suppose that a user sets the max TTL for a Cloud Storage bucket to 90 days. However, an object in that bucket is 100 days old. In this case, a DataRetentionDeletionEvent will be generated for that Cloud Storage bucket, and the max_retention_allowed is 90 days. */
  maxRetentionAllowed?: string;
}

export const DataRetentionDeletionEvent: Schema.Schema<DataRetentionDeletionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minRetentionAllowed: Schema.optional(Schema.String),
    eventDetectionTime: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataRetentionDeletionEvent" });

export interface GoogleCloudSecuritycenterV2Role {
  /** Role type. */
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  /** Role namespace. */
  ns?: string;
  /** Role name. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Role: Schema.Schema<GoogleCloudSecuritycenterV2Role> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Role" });

export interface GoogleCloudSecuritycenterV2AdaptiveProtection {
  /** A score of 0 means that there is low confidence that the detected event is an actual attack. A score of 1 means that there is high confidence that the detected event is an attack. See the [Adaptive Protection documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning) for further explanation. */
  confidence?: number;
}

export const GoogleCloudSecuritycenterV2AdaptiveProtection: Schema.Schema<GoogleCloudSecuritycenterV2AdaptiveProtection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdaptiveProtection" });

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

export interface GoogleCloudSecuritycenterV2VertexAi {
  /** Datasets associated with the finding. */
  datasets?: ReadonlyArray<GoogleCloudSecuritycenterV2Dataset>;
  /** Pipelines associated with the finding. */
  pipelines?: ReadonlyArray<GoogleCloudSecuritycenterV2Pipeline>;
}

export const GoogleCloudSecuritycenterV2VertexAi: Schema.Schema<GoogleCloudSecuritycenterV2VertexAi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Dataset)),
    pipelines: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Pipeline),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2VertexAi" });

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
  /** Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. */
  uri?: string;
  /** Container labels, as provided by the container runtime. */
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
  /** Name of the container. */
  name?: string;
  /** Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. */
  imageId?: string;
  /** The time that the container was created. */
  createTime?: string;
}

export const GoogleCloudSecuritycenterV2Container: Schema.Schema<GoogleCloudSecuritycenterV2Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
    name: Schema.optional(Schema.String),
    imageId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Container" });

export interface GoogleCloudSecuritycenterV2IssueMute {
  /** The time the issue was muted. */
  muteUpdateTime?: string;
  /** The email address of the user who last changed the mute state of the issue. */
  muteInitiator?: string;
  /** Output only. The mute state of the issue. */
  muteState?: "MUTE_STATE_UNSPECIFIED" | "NOT_MUTED" | "MUTED" | (string & {});
  /** The user-provided reason for muting the issue. */
  muteReason?: string;
}

export const GoogleCloudSecuritycenterV2IssueMute: Schema.Schema<GoogleCloudSecuritycenterV2IssueMute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    muteUpdateTime: Schema.optional(Schema.String),
    muteInitiator: Schema.optional(Schema.String),
    muteState: Schema.optional(Schema.String),
    muteReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IssueMute" });

export interface GoogleCloudSecuritycenterV2AiModel {
  /** The name of the AI model, for example, "gemini:1.0.0". */
  name?: string;
  /** The domain of the model, for example, “image-classification”. */
  domain?: string;
  /** The name of the model library, for example, “transformers”. */
  library?: string;
  /** The region in which the model is used, for example, “us-central1”. */
  location?: string;
  /** The platform on which the model is deployed. */
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  /** The purpose of the model, for example, "Inteference" or "Training". */
  usageCategory?: string;
  /** The publisher of the model, for example, “google” or “nvidia”. */
  publisher?: string;
  /** The user defined display name of model. Ex. baseline-classification-model */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2AiModel: Schema.Schema<GoogleCloudSecuritycenterV2AiModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
    publisher: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AiModel" });

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

export interface Pod {
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<Container>;
  /** Kubernetes Pod namespace. */
  ns?: string;
  /** Pod labels. For Kubernetes containers, these are applied to the container. */
  labels?: ReadonlyArray<Label>;
  /** Kubernetes Pod name. */
  name?: string;
}

export const Pod: Schema.Schema<Pod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containers: Schema.optional(Schema.Array(Container)),
    ns: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(Label)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pod" });

export interface CloudControl {
  /** Name of the CloudControl associated with the finding. */
  cloudControlName?: string;
  /** Type of cloud control. */
  type?:
    | "CLOUD_CONTROL_TYPE_UNSPECIFIED"
    | "BUILT_IN"
    | "CUSTOM"
    | (string & {});
  /** Policy type of the CloudControl */
  policyType?: string;
  /** Version of the Cloud Control */
  version?: number;
}

export const CloudControl: Schema.Schema<CloudControl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudControlName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    policyType: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CloudControl" });

export interface ExportFindingsResponse {}

export const ExportFindingsResponse: Schema.Schema<ExportFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExportFindingsResponse",
  });

export interface YaraRuleSignature {
  /** The name of the YARA rule. */
  yaraRule?: string;
}

export const YaraRuleSignature: Schema.Schema<YaraRuleSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yaraRule: Schema.optional(Schema.String),
  }).annotate({ identifier: "YaraRuleSignature" });

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
  /** The binary family. */
  binaryFamily?: string;
  /** The list of memory hash detections contributing to the binary family match. */
  detections?: ReadonlyArray<Detection>;
}

export const MemoryHashSignature: Schema.Schema<MemoryHashSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binaryFamily: Schema.optional(Schema.String),
    detections: Schema.optional(Schema.Array(Detection)),
  }).annotate({ identifier: "MemoryHashSignature" });

export interface ProcessSignature {
  /** Signature indicating that a YARA rule was matched. */
  yaraRuleSignature?: YaraRuleSignature;
  /** Signature indicating that a binary family was matched. */
  memoryHashSignature?: MemoryHashSignature;
  /** Describes the type of resource associated with the signature. */
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
}

export const ProcessSignature: Schema.Schema<ProcessSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yaraRuleSignature: Schema.optional(YaraRuleSignature),
    memoryHashSignature: Schema.optional(MemoryHashSignature),
    signatureType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProcessSignature" });

export interface Indicator {
  /** The list of URIs associated to the Findings. */
  uris?: ReadonlyArray<string>;
  /** The list of IP addresses that are associated with the finding. */
  ipAddresses?: ReadonlyArray<string>;
  /** List of domains associated to the Finding. */
  domains?: ReadonlyArray<string>;
  /** The list of matched signatures indicating that the given process is present in the environment. */
  signatures?: ReadonlyArray<ProcessSignature>;
}

export const Indicator: Schema.Schema<Indicator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    domains: Schema.optional(Schema.Array(Schema.String)),
    signatures: Schema.optional(Schema.Array(ProcessSignature)),
  }).annotate({ identifier: "Indicator" });

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

export interface GoogleCloudSecuritycenterV2Requests {
  /** For 'Increasing deny ratio', the ratio is the denied traffic divided by the allowed traffic. For 'Allowed traffic spike', the ratio is the allowed traffic in the short term divided by allowed traffic in the long term. */
  ratio?: number;
  /** Allowed RPS (requests per second) over the long term. */
  longTermAllowed?: number;
  /** Denied RPS (requests per second) over the long term. */
  longTermDenied?: number;
  /** Allowed RPS (requests per second) in the short term. */
  shortTermAllowed?: number;
}

export const GoogleCloudSecuritycenterV2Requests: Schema.Schema<GoogleCloudSecuritycenterV2Requests> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ratio: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Requests" });

export interface GoogleCloudSecuritycenterV2AwsAccount {
  /** The friendly name of this account. */
  name?: string;
  /** The unique identifier (ID) of the account, containing exactly 12 digits. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsAccount: Schema.Schema<GoogleCloudSecuritycenterV2AwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsAccount" });

export interface GoogleCloudSecuritycenterV2AwsOrganization {
  /** The unique identifier (ID) for the organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2AwsOrganization: Schema.Schema<GoogleCloudSecuritycenterV2AwsOrganization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsOrganization" });

export interface GoogleCloudSecuritycenterV2AwsMetadata {
  /** The AWS account associated with the resource. */
  account?: GoogleCloudSecuritycenterV2AwsAccount;
  /** The AWS organization associated with the resource. */
  organization?: GoogleCloudSecuritycenterV2AwsOrganization;
  /** A list of AWS organizational units associated with the resource, ordered from lowest level (closest to the account) to highest level. */
  organizationalUnits?: ReadonlyArray<GoogleCloudSecuritycenterV2AwsOrganizationalUnit>;
}

export const GoogleCloudSecuritycenterV2AwsMetadata: Schema.Schema<GoogleCloudSecuritycenterV2AwsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(GoogleCloudSecuritycenterV2AwsAccount),
    organization: Schema.optional(GoogleCloudSecuritycenterV2AwsOrganization),
    organizationalUnits: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AwsOrganizationalUnit),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AwsMetadata" });

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

export interface GoogleCloudSecuritycenterV2ResourceApplicationAttributes {
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV2ResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV2ResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  /** Consumer provided attributes for the AppHub application. */
  attributes?: GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
  /** The resource name of an ADC Application. Format: projects/{project}/locations/{location}/spaces/{space}/applications/{application} */
  name?: string;
}

export const GoogleCloudSecuritycenterV2AdcApplication: Schema.Schema<GoogleCloudSecuritycenterV2AdcApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AdcApplication" });

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

export interface GoogleCloudSecuritycenterV2AzureMetadata {
  /** The Azure resource group associated with the resource. */
  resourceGroup?: GoogleCloudSecuritycenterV2AzureResourceGroup;
  /** A list of Azure management groups associated with the resource, ordered from lowest level (closest to the subscription) to highest level. */
  managementGroups?: ReadonlyArray<GoogleCloudSecuritycenterV2AzureManagementGroup>;
  /** The Azure subscription associated with the resource. */
  subscription?: GoogleCloudSecuritycenterV2AzureSubscription;
  /** The Azure Entra tenant associated with the resource. */
  tenant?: GoogleCloudSecuritycenterV2AzureTenant;
}

export const GoogleCloudSecuritycenterV2AzureMetadata: Schema.Schema<GoogleCloudSecuritycenterV2AzureMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroup: Schema.optional(
      GoogleCloudSecuritycenterV2AzureResourceGroup,
    ),
    managementGroups: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AzureManagementGroup),
    ),
    subscription: Schema.optional(GoogleCloudSecuritycenterV2AzureSubscription),
    tenant: Schema.optional(GoogleCloudSecuritycenterV2AzureTenant),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AzureMetadata" });

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

export interface GoogleCloudSecuritycenterV2Resource {
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: GoogleCloudSecuritycenterV2AdcSharedTemplateRevision;
  /** The human readable name of the resource. */
  displayName?: string;
  /** The region or location of the service (if applicable). */
  location?: string;
  /** The Google Cloud metadata associated with the finding. */
  gcpMetadata?: GcpMetadata;
  /** Indicates which cloud provider the finding is from. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The full resource type of the resource. */
  type?: string;
  /** The AWS metadata associated with the finding. */
  awsMetadata?: GoogleCloudSecuritycenterV2AwsMetadata;
  /** The App Hub application this resource belongs to. */
  application?: GoogleCloudSecuritycenterV2ResourceApplication;
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
  /** Provides the path to the resource within the resource hierarchy. */
  resourcePath?: GoogleCloudSecuritycenterV2ResourcePath;
  /** A string representation of the resource path. For Google Cloud, it has the format of `organizations/{organization_id}/folders/{folder_id}/folders/{folder_id}/projects/{project_id}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id}/ou/{organizational_unit_id}/ou/{organizational_unit_id}/account/{account_id}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id}/mg/{management_group_id}/subscription/{subscription_id}/rg/{resource_group_name}` where there can be any number of management groups. */
  resourcePathString?: string;
  /** The ADC application associated with the finding. */
  adcApplication?: GoogleCloudSecuritycenterV2AdcApplication;
  /** The service or resource provider associated with the resource. */
  service?: string;
  /** The Azure metadata associated with the finding. */
  azureMetadata?: GoogleCloudSecuritycenterV2AzureMetadata;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision;
}

export const GoogleCloudSecuritycenterV2Resource: Schema.Schema<GoogleCloudSecuritycenterV2Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adcSharedTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcSharedTemplateRevision,
    ),
    displayName: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    gcpMetadata: Schema.optional(GcpMetadata),
    cloudProvider: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(GoogleCloudSecuritycenterV2AwsMetadata),
    application: Schema.optional(
      GoogleCloudSecuritycenterV2ResourceApplication,
    ),
    name: Schema.optional(Schema.String),
    resourcePath: Schema.optional(GoogleCloudSecuritycenterV2ResourcePath),
    resourcePathString: Schema.optional(Schema.String),
    adcApplication: Schema.optional(GoogleCloudSecuritycenterV2AdcApplication),
    service: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(GoogleCloudSecuritycenterV2AzureMetadata),
    adcApplicationTemplate: Schema.optional(
      GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Resource" });

export interface GoogleCloudSecuritycenterV2KernelRootkit {
  /** True if unexpected modifications of kernel read-only data memory are present. */
  unexpectedReadOnlyDataModification?: boolean;
  /** True if unexpected modifications of kernel code memory are present. */
  unexpectedCodeModification?: boolean;
  /** True if interrupt handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedInterruptHandler?: boolean;
  /** Rootkit name, when available. */
  name?: string;
  /** True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedKprobeHandler?: boolean;
  /** True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. */
  unexpectedProcessesInRunqueue?: boolean;
  /** True if kernel code pages that are not in the expected kernel or module code regions are present. */
  unexpectedKernelCodePages?: boolean;
  /** True if system call handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedSystemCallHandler?: boolean;
  /** True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedFtraceHandler?: boolean;
}

export const GoogleCloudSecuritycenterV2KernelRootkit: Schema.Schema<GoogleCloudSecuritycenterV2KernelRootkit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2KernelRootkit" });

export interface ServiceAccountDelegationInfo {
  /** A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
  principalSubject?: string;
  /** The email address of a Google account. */
  principalEmail?: string;
}

export const ServiceAccountDelegationInfo: Schema.Schema<ServiceAccountDelegationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccountDelegationInfo" });

export interface Geolocation {
  /** A CLDR. */
  regionCode?: string;
}

export const Geolocation: Schema.Schema<Geolocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Geolocation" });

export interface Access {
  /** Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
  principalEmail?: string;
  /** The caller's user agent string associated with the finding. */
  userAgent?: string;
  /** Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. */
  userAgentFamily?: string;
  /** The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
  serviceAccountDelegationInfo?: ReadonlyArray<ServiceAccountDelegationInfo>;
  /** The caller IP's geolocation, which identifies where the call came from. */
  callerIpGeo?: Geolocation;
  /** This is the API service that the service account made a call to, e.g. "iam.googleapis.com" */
  serviceName?: string;
  /** A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. */
  userName?: string;
  /** Caller's IP address, such as "1.1.1.1". */
  callerIp?: string;
  /** A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`. */
  principalSubject?: string;
  /** The method that the service account called, e.g. "SetIamPolicy". */
  methodName?: string;
  /** The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". */
  serviceAccountKeyName?: string;
}

export const Access: Schema.Schema<Access> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    userAgentFamily: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(ServiceAccountDelegationInfo),
    ),
    callerIpGeo: Schema.optional(Geolocation),
    serviceName: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    methodName: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Access" });

export interface GoogleCloudSecuritycenterV2IssueSecurityContextContext {
  /** Context values. */
  values?: ReadonlyArray<string>;
  /** Context type. */
  type?: string;
}

export const GoogleCloudSecuritycenterV2IssueSecurityContextContext: Schema.Schema<GoogleCloudSecuritycenterV2IssueSecurityContextContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2IssueSecurityContextContext",
  });

export interface ArtifactGuardPolicy {
  /** The type of the policy evaluation. */
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
  /** The reason for the policy failure, for example, "severity=HIGH AND max_vuln_count=2". */
  failureReason?: string;
  /** The ID of the failing policy, for example, "organizations/3392779/locations/global/policies/prod-policy". */
  policyId?: string;
}

export const ArtifactGuardPolicy: Schema.Schema<ArtifactGuardPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    policyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactGuardPolicy" });

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

export interface AdcApplicationTemplateRevision {
  /** The resource name of an ADC Application Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const AdcApplicationTemplateRevision: Schema.Schema<AdcApplicationTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcApplicationTemplateRevision" });

export interface GoogleCloudSecuritycenterV2MitreAttack {
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
  /** The MITRE ATT&CK version referenced by the above fields. E.g. "8". */
  version?: string;
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

export const GoogleCloudSecuritycenterV2MitreAttack: Schema.Schema<GoogleCloudSecuritycenterV2MitreAttack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryTactic: Schema.optional(Schema.String),
    additionalTechniques: Schema.optional(Schema.Array(Schema.String)),
    primaryTechniques: Schema.optional(Schema.Array(Schema.String)),
    version: Schema.optional(Schema.String),
    additionalTactics: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MitreAttack" });

export interface IamBinding {
  /** A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com". */
  member?: string;
  /** The action that was performed on a Binding. */
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  /** Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner". */
  role?: string;
}

export const IamBinding: Schema.Schema<IamBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    member: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "IamBinding" });

export interface OrgPolicy {
  /** The resource name of the org policy. Example: "organizations/{organization_id}/policies/{constraint_name}" */
  name?: string;
}

export const OrgPolicy: Schema.Schema<OrgPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrgPolicy" });

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
  /** Name of the framework associated with the finding */
  name?: string;
  /** Display name of the framework. For a standard framework, this will look like e.g. PCI DSS 3.2.1, whereas for a custom framework it can be a user defined string like MyFramework */
  displayName?: string;
  /** Type of the framework associated with the finding, to specify whether the framework is built-in (pre-defined and immutable) or a custom framework defined by the customer (equivalent to security posture) */
  type?:
    | "FRAMEWORK_TYPE_UNSPECIFIED"
    | "FRAMEWORK_TYPE_BUILT_IN"
    | "FRAMEWORK_TYPE_CUSTOM"
    | (string & {});
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
  /** The controls associated with the framework. */
  controls?: ReadonlyArray<Control>;
}

export const Framework: Schema.Schema<Framework> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    category: Schema.optional(Schema.Array(Schema.String)),
    controls: Schema.optional(Schema.Array(Control)),
  }).annotate({ identifier: "Framework" });

export interface GoogleCloudSecuritycenterV2Contact {
  /** An email address. For example, "`person123@company.com`". */
  email?: string;
}

export const GoogleCloudSecuritycenterV2Contact: Schema.Schema<GoogleCloudSecuritycenterV2Contact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Contact" });

export interface GoogleCloudSecuritycenterV2ContactDetails {
  /** A list of contacts */
  contacts?: ReadonlyArray<GoogleCloudSecuritycenterV2Contact>;
}

export const GoogleCloudSecuritycenterV2ContactDetails: Schema.Schema<GoogleCloudSecuritycenterV2ContactDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Contact)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ContactDetails" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicy {
  /** The type of the policy evaluation. */
  type?:
    | "ARTIFACT_GUARD_POLICY_TYPE_UNSPECIFIED"
    | "VULNERABILITY"
    | (string & {});
  /** The reason for the policy failure, for example, "severity=HIGH AND max_vuln_count=2". */
  failureReason?: string;
  /** The ID of the failing policy, for example, "organizations/3392779/locations/global/policies/prod-policy". */
  policyId?: string;
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicy: Schema.Schema<GoogleCloudSecuritycenterV2ArtifactGuardPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    policyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicy" });

export interface GoogleCloudSecuritycenterV2ArtifactGuardPolicies {
  /** A list of failing policies. */
  failingPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2ArtifactGuardPolicy>;
  /** The ID of the resource that has policies configured for it. */
  resourceId?: string;
}

export const GoogleCloudSecuritycenterV2ArtifactGuardPolicies: Schema.Schema<GoogleCloudSecuritycenterV2ArtifactGuardPolicies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failingPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ArtifactGuardPolicy),
    ),
    resourceId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2ArtifactGuardPolicies",
  });

export interface GoogleCloudSecuritycenterV2Database {
  /** The SQL statement that is associated with the database access. */
  query?: string;
  /** Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. */
  name?: string;
  /** The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
  version?: string;
  /** The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change. */
  grantees?: ReadonlyArray<string>;
  /** The username used to connect to the database. The username might not be an IAM principal and does not have a set format. */
  userName?: string;
  /** The human-readable name of the database that the user connected to. */
  displayName?: string;
}

export const GoogleCloudSecuritycenterV2Database: Schema.Schema<GoogleCloudSecuritycenterV2Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    userName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Database" });

export interface GoogleCloudSecuritycenterV2HttpResponse {
  /** The http path for which response code was returned by web application, for example, "https://test-app.a.run.app/test". */
  path?: string;
  /** The http response code returned by the web application, for example, 200. */
  statusCode?: string;
}

export const GoogleCloudSecuritycenterV2HttpResponse: Schema.Schema<GoogleCloudSecuritycenterV2HttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    statusCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2HttpResponse" });

export interface GoogleCloudSecuritycenterV2ExternalExposure {
  /** The full resource name of the network endpoint group, for example, "//compute.googleapis.com/projects/{project-id}/global/networkEndpointGroups/{name}". */
  networkEndpointGroup?: string;
  /** The full resource name of the load balancer firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  loadBalancerFirewallPolicy?: string;
  /** The full resource name of the network ingress firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{name}". */
  networkIngressFirewallPolicy?: string;
  /** The http response returned by the web application. */
  httpResponse?: ReadonlyArray<GoogleCloudSecuritycenterV2HttpResponse>;
  /** Public port number of the exposed endpoint. */
  publicPort?: string;
  /** Port number associated with private IP address. */
  privatePort?: string;
  /** The name and version of the service, for example, "Jupyter Notebook 6.14.0". */
  exposedService?: string;
  /** The full resource name of the instance group, for example, "//compute.googleapis.com/projects/{project-id}/global/instanceGroups/{name}". */
  instanceGroup?: string;
  /** The full resource name of the load balancer backend bucket, for example, "//compute.googleapis.com/projects/{project-id}/global/backendBuckets/{name}" */
  backendBucket?: string;
  /** The full resource name of the PSC (Private Service Connect) service attachment that the load balancer network endpoint group targets, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/serviceAttachments/{name}" */
  pscServiceAttachment?: string;
  /** The full resource name of the PSC (Private Service Connect) network attachment that network interface controller is attached to, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/networkAttachments/{name}" */
  pscNetworkAttachment?: string;
  /** The full resource name of the forwarding rule, for example, "//compute.googleapis.com/projects/{project-id}/global/forwardingRules/{forwarding-rule-name}". */
  forwardingRule?: string;
  /** The full resource name of load balancer backend service, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  backendService?: string;
  /** Private IP address of the exposed endpoint. */
  privateIpAddress?: string;
  /** The full resource name of the firewall policy of the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  serviceFirewallPolicy?: string;
  /** The full resource name of load balancer backend service in the internal project having resource exposed via PSC, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  internalBackendService?: string;
  /** Hostname of the exposed application, for example, "https://test-app.a.run.app/" */
  hostnameUri?: string;
  /** The resource which is running the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/zones/{zone}/instances/{instance}.” */
  exposedEndpoint?: string;
  /** The name and version of the exposed web application, for example, "Jenkins 2.184". */
  exposedApplication?: string;
  /** Public IP address of the exposed endpoint. */
  publicIpAddress?: string;
}

export const GoogleCloudSecuritycenterV2ExternalExposure: Schema.Schema<GoogleCloudSecuritycenterV2ExternalExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkEndpointGroup: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    httpResponse: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2HttpResponse),
    ),
    publicPort: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    exposedService: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    backendService: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalExposure" });

export interface GoogleCloudSecuritycenterV2Application {
  /** The base URI that identifies the network location of the application in which the vulnerability was detected. For example, `http://example.com`. */
  baseUri?: string;
  /** The full URI with payload that could be used to reproduce the vulnerability. For example, `http://example.com?p=aMmYgI6H`. */
  fullUri?: string;
}

export const GoogleCloudSecuritycenterV2Application: Schema.Schema<GoogleCloudSecuritycenterV2Application> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseUri: Schema.optional(Schema.String),
    fullUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Application" });

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

export interface GoogleCloudSecuritycenterV2Cvssv3 {
  /** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
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
  /** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
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
    privilegesRequired: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    attackVector: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cvssv3" });

export interface GoogleCloudSecuritycenterV2Cve {
  /** Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527 */
  references?: ReadonlyArray<GoogleCloudSecuritycenterV2Reference>;
  /** Whether or not the vulnerability was zero day when the finding was published. */
  zeroDay?: boolean;
  /** The unique identifier for the vulnerability. e.g. CVE-2021-34527 */
  id?: string;
  /** Date of the earliest known exploitation. */
  firstExploitationDate?: string;
  /** Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document */
  cvssv3?: GoogleCloudSecuritycenterV2Cvssv3;
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
  /** The exploitation activity of the vulnerability in the wild. */
  exploitationActivity?:
    | "EXPLOITATION_ACTIVITY_UNSPECIFIED"
    | "WIDE"
    | "CONFIRMED"
    | "AVAILABLE"
    | "ANTICIPATED"
    | "NO_KNOWN"
    | (string & {});
  /** Date the first publicly available exploit or PoC was released. */
  exploitReleaseDate?: string;
  /** Whether upstream fix is available for the CVE. */
  upstreamFixAvailable?: boolean;
}

export const GoogleCloudSecuritycenterV2Cve: Schema.Schema<GoogleCloudSecuritycenterV2Cve> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    references: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Reference),
    ),
    zeroDay: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
    firstExploitationDate: Schema.optional(Schema.String),
    cvssv3: Schema.optional(GoogleCloudSecuritycenterV2Cvssv3),
    observedInTheWild: Schema.optional(Schema.Boolean),
    impact: Schema.optional(Schema.String),
    exploitationActivity: Schema.optional(Schema.String),
    exploitReleaseDate: Schema.optional(Schema.String),
    upstreamFixAvailable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Cve" });

export interface GoogleCloudSecuritycenterV2Package {
  /** The version of the package. */
  packageVersion?: string;
  /** The CPE URI where the vulnerability was detected. */
  cpeUri?: string;
  /** Type of package, for example, os, maven, or go. */
  packageType?: string;
  /** The name of the package where the vulnerability was detected. */
  packageName?: string;
}

export const GoogleCloudSecuritycenterV2Package: Schema.Schema<GoogleCloudSecuritycenterV2Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageVersion: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Package" });

export interface GoogleCloudSecuritycenterV2SecurityBulletin {
  /** ID of the bulletin corresponding to the vulnerability. */
  bulletinId?: string;
  /** Submission time of this Security Bulletin. */
  submissionTime?: string;
  /** This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 */
  suggestedUpgradeVersion?: string;
}

export const GoogleCloudSecuritycenterV2SecurityBulletin: Schema.Schema<GoogleCloudSecuritycenterV2SecurityBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
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
  /** CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  cve?: GoogleCloudSecuritycenterV2Cve;
  /** The fixed package is relevant to the finding. */
  fixedPackage?: GoogleCloudSecuritycenterV2Package;
  /** Represents whether the vulnerability is reachable (detected via static analysis) */
  reachable?: boolean;
  /** Provider provided risk_score based on multiple factors. The higher the risk score, the more risky the vulnerability is. */
  providerRiskScore?: string;
  /** The security bulletin is relevant to this finding. */
  securityBulletin?: GoogleCloudSecuritycenterV2SecurityBulletin;
  /** The offending package is relevant to the finding. */
  offendingPackage?: GoogleCloudSecuritycenterV2Package;
  /** Represents one or more Common Weakness Enumeration (CWE) information on this vulnerability. */
  cwes?: ReadonlyArray<GoogleCloudSecuritycenterV2Cwe>;
}

export const GoogleCloudSecuritycenterV2Vulnerability: Schema.Schema<GoogleCloudSecuritycenterV2Vulnerability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cve: Schema.optional(GoogleCloudSecuritycenterV2Cve),
    fixedPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    reachable: Schema.optional(Schema.Boolean),
    providerRiskScore: Schema.optional(Schema.String),
    securityBulletin: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityBulletin,
    ),
    offendingPackage: Schema.optional(GoogleCloudSecuritycenterV2Package),
    cwes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Cwe)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Vulnerability" });

export interface GoogleCloudSecuritycenterV2Geolocation {
  /** A CLDR. */
  regionCode?: string;
}

export const GoogleCloudSecuritycenterV2Geolocation: Schema.Schema<GoogleCloudSecuritycenterV2Geolocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Geolocation" });

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

export interface GoogleCloudSecuritycenterV2Access {
  /** The method that the service account called, e.g. "SetIamPolicy". */
  methodName?: string;
  /** The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". */
  serviceAccountKeyName?: string;
  /** Caller's IP address, such as "1.1.1.1". */
  callerIp?: string;
  /** A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`. */
  principalSubject?: string;
  /** A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. */
  userName?: string;
  /** The caller IP's geolocation, which identifies where the call came from. */
  callerIpGeo?: GoogleCloudSecuritycenterV2Geolocation;
  /** This is the API service that the service account made a call to, e.g. "iam.googleapis.com" */
  serviceName?: string;
  /** The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
  serviceAccountDelegationInfo?: ReadonlyArray<GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo>;
  /** Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. */
  userAgentFamily?: string;
  /** Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
  principalEmail?: string;
  /** The caller's user agent string associated with the finding. */
  userAgent?: string;
}

export const GoogleCloudSecuritycenterV2Access: Schema.Schema<GoogleCloudSecuritycenterV2Access> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    methodName: Schema.optional(Schema.String),
    serviceAccountKeyName: Schema.optional(Schema.String),
    callerIp: Schema.optional(Schema.String),
    principalSubject: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    callerIpGeo: Schema.optional(GoogleCloudSecuritycenterV2Geolocation),
    serviceName: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo),
    ),
    userAgentFamily: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Access" });

export interface GoogleCloudSecuritycenterV2CloudLoggingEntry {
  /** The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity` Note that this field is not URL-encoded, unlike in `LogEntry`. */
  logId?: string;
  /** The time the event described by the log entry occurred. */
  timestamp?: string;
  /** A unique identifier for the log entry. */
  insertId?: string;
  /** The organization, folder, or project of the monitored resource that produced this log entry. */
  resourceContainer?: string;
}

export const GoogleCloudSecuritycenterV2CloudLoggingEntry: Schema.Schema<GoogleCloudSecuritycenterV2CloudLoggingEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logId: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
    resourceContainer: Schema.optional(Schema.String),
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

export interface GoogleCloudSecuritycenterV2DiskPath {
  /** UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) */
  partitionUuid?: string;
  /** Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh */
  relativePath?: string;
}

export const GoogleCloudSecuritycenterV2DiskPath: Schema.Schema<GoogleCloudSecuritycenterV2DiskPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionUuid: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DiskPath" });

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

export interface GoogleCloudSecuritycenterV2File {
  /** SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file. */
  sha256?: string;
  /** Prefix of the file contents as a JSON-encoded string. */
  contents?: string;
  /** Path of the file in terms of underlying disk/partition identifiers. */
  diskPath?: GoogleCloudSecuritycenterV2DiskPath;
  /** The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file. */
  hashedSize?: string;
  /** The load state of the file. */
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  /** Absolute path of the file as a JSON encoded string. */
  path?: string;
  /** Operation(s) performed on a file. */
  operations?: ReadonlyArray<GoogleCloudSecuritycenterV2FileOperation>;
  /** Size of the file in bytes. */
  size?: string;
  /** True when the hash covers only a prefix of the file. */
  partiallyHashed?: boolean;
}

export const GoogleCloudSecuritycenterV2File: Schema.Schema<GoogleCloudSecuritycenterV2File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sha256: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
    diskPath: Schema.optional(GoogleCloudSecuritycenterV2DiskPath),
    hashedSize: Schema.optional(Schema.String),
    fileLoadState: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2FileOperation),
    ),
    size: Schema.optional(Schema.String),
    partiallyHashed: Schema.optional(Schema.Boolean),
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
  /** File information for the process executable. */
  binary?: GoogleCloudSecuritycenterV2File;
  /** The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`. */
  name?: string;
  /** Process environment variables. */
  envVariables?: ReadonlyArray<GoogleCloudSecuritycenterV2EnvironmentVariable>;
  /** True if `env_variables` is incomplete. */
  envVariablesTruncated?: boolean;
  /** Process arguments as JSON encoded strings. */
  args?: ReadonlyArray<string>;
  /** The process ID. */
  pid?: string;
  /** The parent process ID. */
  parentPid?: string;
  /** File information for libraries loaded by the process. */
  libraries?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  /** True if `args` is incomplete. */
  argumentsTruncated?: boolean;
  /** The ID of the user that executed the process. E.g. If this is the root user this will always be 0. */
  userId?: string;
  /** When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter. */
  script?: GoogleCloudSecuritycenterV2File;
}

export const GoogleCloudSecuritycenterV2Process: Schema.Schema<GoogleCloudSecuritycenterV2Process> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    binary: Schema.optional(GoogleCloudSecuritycenterV2File),
    name: Schema.optional(Schema.String),
    envVariables: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2EnvironmentVariable),
    ),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    args: Schema.optional(Schema.Array(Schema.String)),
    pid: Schema.optional(Schema.String),
    parentPid: Schema.optional(Schema.String),
    libraries: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    userId: Schema.optional(Schema.String),
    script: Schema.optional(GoogleCloudSecuritycenterV2File),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Process" });

export interface GoogleCloudSecuritycenterV2Subject {
  /** Name for the subject. */
  name?: string;
  /** Authentication type for the subject. */
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  /** Namespace for the subject. */
  ns?: string;
}

export const GoogleCloudSecuritycenterV2Subject: Schema.Schema<GoogleCloudSecuritycenterV2Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Subject" });

export interface GoogleCloudSecuritycenterV2Binding {
  /** Name for the binding. */
  name?: string;
  /** Represents one or more subjects that are bound to the role. Not always available for PATCH requests. */
  subjects?: ReadonlyArray<GoogleCloudSecuritycenterV2Subject>;
  /** Namespace for the binding. */
  ns?: string;
  /** The Role or ClusterRole referenced by the binding. */
  role?: GoogleCloudSecuritycenterV2Role;
}

export const GoogleCloudSecuritycenterV2Binding: Schema.Schema<GoogleCloudSecuritycenterV2Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    subjects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Subject)),
    ns: Schema.optional(Schema.String),
    role: Schema.optional(GoogleCloudSecuritycenterV2Role),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Binding" });

export interface GoogleCloudSecuritycenterV2Object {
  /** Kubernetes object group, such as "policy.k8s.io/v1". */
  group?: string;
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  /** Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. */
  ns?: string;
  /** Kubernetes object kind, such as "Namespace". */
  kind?: string;
  /** Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Object: Schema.Schema<GoogleCloudSecuritycenterV2Object> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    ns: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Object" });

export interface GoogleCloudSecuritycenterV2AccessReview {
  /** The name of the resource being requested. Empty means all. */
  name?: string;
  /** The API version of the resource. "*" means all. */
  version?: string;
  /** The optional resource type requested. "*" means all. */
  resource?: string;
  /** Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty). */
  ns?: string;
  /** A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all. */
  verb?: string;
  /** The API group of the resource. "*" means all. */
  group?: string;
  /** The optional subresource type. */
  subresource?: string;
}

export const GoogleCloudSecuritycenterV2AccessReview: Schema.Schema<GoogleCloudSecuritycenterV2AccessReview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    subresource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AccessReview" });

export interface GoogleCloudSecuritycenterV2Pod {
  /** Pod containers associated with this finding, if any. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  /** Kubernetes Pod name. */
  name?: string;
  /** Kubernetes Pod namespace. */
  ns?: string;
  /** Pod labels. For Kubernetes containers, these are applied to the container. */
  labels?: ReadonlyArray<GoogleCloudSecuritycenterV2Label>;
}

export const GoogleCloudSecuritycenterV2Pod: Schema.Schema<GoogleCloudSecuritycenterV2Pod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    name: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Label)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Pod" });

export interface GoogleCloudSecuritycenterV2Kubernetes {
  /** Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. */
  nodes?: ReadonlyArray<GoogleCloudSecuritycenterV2Node>;
  /** GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. */
  nodePools?: ReadonlyArray<GoogleCloudSecuritycenterV2NodePool>;
  /** Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV2Binding>;
  /** Kubernetes objects related to the finding. */
  objects?: ReadonlyArray<GoogleCloudSecuritycenterV2Object>;
  /** Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  roles?: ReadonlyArray<GoogleCloudSecuritycenterV2Role>;
  /** Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. */
  accessReviews?: ReadonlyArray<GoogleCloudSecuritycenterV2AccessReview>;
  /** Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. */
  pods?: ReadonlyArray<GoogleCloudSecuritycenterV2Pod>;
}

export const GoogleCloudSecuritycenterV2Kubernetes: Schema.Schema<GoogleCloudSecuritycenterV2Kubernetes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Node)),
    nodePools: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2NodePool),
    ),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Binding)),
    objects: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Object)),
    roles: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Role)),
    accessReviews: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AccessReview),
    ),
    pods: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Pod)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Kubernetes" });

export interface GoogleCloudSecuritycenterV2BackupDisasterRecovery {
  /** The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, `onvaults`. */
  policies?: ReadonlyArray<string>;
  /** The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, `DiskPoolOne`. */
  storagePool?: string;
  /** The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, `snap-ov`. */
  backupTemplate?: string;
  /** The timestamp at which the Backup and DR backup was created. */
  backupCreateTime?: string;
  /** The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, `skipofflineappsincongrp, nounmap`. */
  policyOptions?: ReadonlyArray<string>;
  /** The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, `GCP`. */
  profile?: string;
  /** The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, `backup-server-57137`. */
  appliance?: string;
  /** The backup type of the Backup and DR image. For example, `Snapshot`, `Remote Snapshot`, `OnVault`. */
  backupType?: string;
  /** The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, `centos7-01`. */
  host?: string;
  /** The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, `centos7-01-vol00`, `centos7-01-vol01`, `centos7-01-vol02`. */
  applications?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2BackupDisasterRecovery: Schema.Schema<GoogleCloudSecuritycenterV2BackupDisasterRecovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(Schema.Array(Schema.String)),
    storagePool: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    backupCreateTime: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    profile: Schema.optional(Schema.String),
    appliance: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2BackupDisasterRecovery",
  });

export interface GoogleCloudSecuritycenterV2PolicyViolationSummary {
  /** Number of child resources for which errors during evaluation occurred. The evaluation result for these child resources is effectively "unknown". */
  evaluationErrorsCount?: string;
  /** Total count of child resources which were not in scope for evaluation. */
  outOfScopeResourcesCount?: string;
  /** Count of child resources in violation of the policy. */
  policyViolationsCount?: string;
  /** Total number of child resources that conform to the policy. */
  conformantResourcesCount?: string;
}

export const GoogleCloudSecuritycenterV2PolicyViolationSummary: Schema.Schema<GoogleCloudSecuritycenterV2PolicyViolationSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationErrorsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    policyViolationsCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2PolicyViolationSummary",
  });

export interface GoogleCloudSecuritycenterV2AffectedResources {
  /** The count of resources affected by the finding. */
  count?: string;
}

export const GoogleCloudSecuritycenterV2AffectedResources: Schema.Schema<GoogleCloudSecuritycenterV2AffectedResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AffectedResources" });

export interface GoogleCloudSecuritycenterV2AttackExposure {
  /** Output only. What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. */
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  /** The most recent time the attack exposure was updated on this finding. */
  latestCalculationTime?: string;
  /** The number of medium value resources that are exposed as a result of this finding. */
  exposedMediumValueResourcesCount?: number;
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedLowValueResourcesCount?: number;
  /** The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: `organizations/123/simulations/456/attackExposureResults/789` */
  attackExposureResult?: string;
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedHighValueResourcesCount?: number;
  /** A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate. */
  score?: number;
}

export const GoogleCloudSecuritycenterV2AttackExposure: Schema.Schema<GoogleCloudSecuritycenterV2AttackExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    latestCalculationTime: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
    attackExposureResult: Schema.optional(Schema.String),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2AttackExposure" });

export interface GoogleCloudSecuritycenterV2LoadBalancer {
  /** The name of the load balancer associated with the finding. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2LoadBalancer: Schema.Schema<GoogleCloudSecuritycenterV2LoadBalancer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2LoadBalancer" });

export interface GoogleCloudSecuritycenterV2OrgPolicy {
  /** Identifier. The resource name of the org policy. Example: "organizations/{organization_id}/policies/{constraint_name}" */
  name?: string;
}

export const GoogleCloudSecuritycenterV2OrgPolicy: Schema.Schema<GoogleCloudSecuritycenterV2OrgPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2OrgPolicy" });

export interface GoogleCloudSecuritycenterV2DataAccessEvent {
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

export const GoogleCloudSecuritycenterV2DataAccessEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataAccessEvent" });

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

export interface GoogleCloudSecuritycenterV2DynamicMuteRecord {
  /** When the dynamic mute rule first matched the finding. */
  matchTime?: string;
  /** The relative resource name of the mute rule, represented by a mute config, that created this record, for example `organizations/123/muteConfigs/mymuteconfig` or `organizations/123/locations/global/muteConfigs/mymuteconfig`. */
  muteConfig?: string;
}

export const GoogleCloudSecuritycenterV2DynamicMuteRecord: Schema.Schema<GoogleCloudSecuritycenterV2DynamicMuteRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchTime: Schema.optional(Schema.String),
    muteConfig: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DynamicMuteRecord" });

export interface GoogleCloudSecuritycenterV2MuteInfo {
  /** If set, the static mute applied to this finding. Static mutes override dynamic mutes. If unset, there is no static mute. */
  staticMute?: GoogleCloudSecuritycenterV2StaticMute;
  /** The list of dynamic mute rules that currently match the finding. */
  dynamicMuteRecords?: ReadonlyArray<GoogleCloudSecuritycenterV2DynamicMuteRecord>;
}

export const GoogleCloudSecuritycenterV2MuteInfo: Schema.Schema<GoogleCloudSecuritycenterV2MuteInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    staticMute: Schema.optional(GoogleCloudSecuritycenterV2StaticMute),
    dynamicMuteRecords: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DynamicMuteRecord),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteInfo" });

export interface GoogleCloudSecuritycenterV2Network {
  /** The name of the VPC network resource, for example, `//compute.googleapis.com/projects/my-project/global/networks/my-network`. */
  name?: string;
}

export const GoogleCloudSecuritycenterV2Network: Schema.Schema<GoogleCloudSecuritycenterV2Network> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Network" });

export interface GoogleCloudSecuritycenterV2DataFlowEvent {
  /** Unique identifier for data flow event. */
  eventId?: string;
  /** The email address of the principal that initiated the data flow event. The principal could be a user account, service account, Google group, or other. */
  principalEmail?: string;
  /** The operation performed by the principal for the data flow event. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "READ"
    | "MOVE"
    | "COPY"
    | (string & {});
  /** Timestamp of data flow event. */
  eventTime?: string;
  /** Non-compliant location of the principal or the data destination. */
  violatedLocation?: string;
}

export const GoogleCloudSecuritycenterV2DataFlowEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataFlowEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2DataFlowEvent" });

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

export interface GoogleCloudSecuritycenterV2CloudDlpDataProfile {
  /** Type of information detected by SDP. Info type includes name, version and sensitivity of the detected information type. */
  infoTypes?: ReadonlyArray<GoogleCloudSecuritycenterV2InfoType>;
  /** Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`. */
  dataProfile?: string;
  /** The resource hierarchy level at which the data profile was generated. */
  parentType?:
    | "PARENT_TYPE_UNSPECIFIED"
    | "ORGANIZATION"
    | "PROJECT"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2CloudDlpDataProfile: Schema.Schema<GoogleCloudSecuritycenterV2CloudDlpDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2InfoType),
    ),
    dataProfile: Schema.optional(Schema.String),
    parentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudDlpDataProfile" });

export interface GoogleCloudSecuritycenterV2TicketInfo {
  /** The time when the ticket was last updated, as reported by the ticket system. */
  updateTime?: string;
  /** The assignee of the ticket in the ticket system. */
  assignee?: string;
  /** The link to the ticket in the ticket system. */
  uri?: string;
  /** The description of the ticket in the ticket system. */
  description?: string;
  /** The latest status of the ticket, as reported by the ticket system. */
  status?: string;
  /** The identifier of the ticket in the ticket system. */
  id?: string;
}

export const GoogleCloudSecuritycenterV2TicketInfo: Schema.Schema<GoogleCloudSecuritycenterV2TicketInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2TicketInfo" });

export interface GoogleCloudSecuritycenterV2ExternalSystem {
  /** The time when the case was closed, as reported by the external system. */
  caseCloseTime?: string;
  /** The SLA of the finding's corresponding case in the external system. */
  caseSla?: string;
  /** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
  ticketInfo?: GoogleCloudSecuritycenterV2TicketInfo;
  /** The link to the finding's corresponding case in the external system. */
  caseUri?: string;
  /** Full resource name of the external system. The following list shows some examples: + `organizations/1234/sources/5678/findings/123456/externalSystems/jira` + `organizations/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` + `folders/1234/sources/5678/findings/123456/externalSystems/jira` + `folders/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` + `projects/1234/sources/5678/findings/123456/externalSystems/jira` + `projects/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` */
  name?: string;
  /** The identifier that's used to track the finding's corresponding case in the external system. */
  externalUid?: string;
  /** References primary/secondary etc assignees in the external system. */
  assignees?: ReadonlyArray<string>;
  /** The time when the case was created, as reported by the external system. */
  caseCreateTime?: string;
  /** The most recent status of the finding's corresponding case, as reported by the external system. */
  status?: string;
  /** The priority of the finding's corresponding case in the external system. */
  casePriority?: string;
  /** The time when the case was last updated, as reported by the external system. */
  externalSystemUpdateTime?: string;
}

export const GoogleCloudSecuritycenterV2ExternalSystem: Schema.Schema<GoogleCloudSecuritycenterV2ExternalSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caseCloseTime: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(GoogleCloudSecuritycenterV2TicketInfo),
    caseUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    externalUid: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    caseCreateTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    externalSystemUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ExternalSystem" });

export interface GoogleCloudSecuritycenterV2SecurityPolicy {
  /** The name of the Google Cloud Armor security policy, for example, "my-security-policy". */
  name?: string;
  /** Whether or not the associated rule or policy is in preview mode. */
  preview?: boolean;
  /** The type of Google Cloud Armor security policy for example, 'backend security policy', 'edge security policy', 'network edge security policy', or 'always-on DDoS protection'. */
  type?: string;
}

export const GoogleCloudSecuritycenterV2SecurityPolicy: Schema.Schema<GoogleCloudSecuritycenterV2SecurityPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    preview: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2SecurityPolicy" });

export interface GoogleCloudSecuritycenterV2Attack {
  /** Total BPS (bytes per second) volume of attack. Deprecated - refer to volume_bps_long instead. */
  volumeBps?: number;
  /** Total BPS (bytes per second) volume of attack. */
  volumeBpsLong?: string;
  /** Total PPS (packets per second) volume of attack. Deprecated - refer to volume_pps_long instead. */
  volumePps?: number;
  /** Total PPS (packets per second) volume of attack. */
  volumePpsLong?: string;
  /** Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'. */
  classification?: string;
}

export const GoogleCloudSecuritycenterV2Attack: Schema.Schema<GoogleCloudSecuritycenterV2Attack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeBps: Schema.optional(Schema.Number),
    volumeBpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    volumePpsLong: Schema.optional(Schema.String),
    classification: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Attack" });

export interface GoogleCloudSecuritycenterV2CloudArmor {
  /** Information about potential Layer 7 DDoS attacks identified by [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview). */
  adaptiveProtection?: GoogleCloudSecuritycenterV2AdaptiveProtection;
  /** Distinguish between volumetric & protocol DDoS attack and application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS attacks, or "L_7" for Layer 7 DDoS attacks. */
  threatVector?: string;
  /** Duration of attack from the start until the current moment (updated every 5 minutes). */
  duration?: string;
  /** Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding. */
  securityPolicy?: GoogleCloudSecuritycenterV2SecurityPolicy;
  /** Information about incoming requests evaluated by [Google Cloud Armor security policies](https://cloud.google.com/armor/docs/security-policy-overview). */
  requests?: GoogleCloudSecuritycenterV2Requests;
  /** Information about DDoS attack volume and classification. */
  attack?: GoogleCloudSecuritycenterV2Attack;
}

export const GoogleCloudSecuritycenterV2CloudArmor: Schema.Schema<GoogleCloudSecuritycenterV2CloudArmor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adaptiveProtection: Schema.optional(
      GoogleCloudSecuritycenterV2AdaptiveProtection,
    ),
    threatVector: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    securityPolicy: Schema.optional(GoogleCloudSecuritycenterV2SecurityPolicy),
    requests: Schema.optional(GoogleCloudSecuritycenterV2Requests),
    attack: Schema.optional(GoogleCloudSecuritycenterV2Attack),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2CloudArmor" });

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

export interface GoogleCloudSecuritycenterV2Secret {
  /** The status of the secret. */
  status?: GoogleCloudSecuritycenterV2SecretStatus;
  /** The file containing the secret. */
  filePath?: GoogleCloudSecuritycenterV2SecretFilePath;
  /** The type of secret, for example, GCP_API_KEY. */
  type?: string;
  /** The environment variable containing the secret. */
  environmentVariable?: GoogleCloudSecuritycenterV2SecretEnvironmentVariable;
}

export const GoogleCloudSecuritycenterV2Secret: Schema.Schema<GoogleCloudSecuritycenterV2Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleCloudSecuritycenterV2SecretStatus),
    filePath: Schema.optional(GoogleCloudSecuritycenterV2SecretFilePath),
    type: Schema.optional(Schema.String),
    environmentVariable: Schema.optional(
      GoogleCloudSecuritycenterV2SecretEnvironmentVariable,
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Secret" });

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

export interface GoogleCloudSecuritycenterV2Compliance {
  /** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
  standard?: string;
  /** Version of the standard or benchmark, for example, 1.1 */
  version?: string;
  /** Policies within the standard or benchmark, for example, A.12.4.1 */
  ids?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Compliance: Schema.Schema<GoogleCloudSecuritycenterV2Compliance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standard: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Compliance" });

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
  /** Signature indicating that a YARA rule was matched. */
  yaraRuleSignature?: GoogleCloudSecuritycenterV2YaraRuleSignature;
  /** Describes the type of resource associated with the signature. */
  signatureType?:
    | "SIGNATURE_TYPE_UNSPECIFIED"
    | "SIGNATURE_TYPE_PROCESS"
    | "SIGNATURE_TYPE_FILE"
    | (string & {});
}

export const GoogleCloudSecuritycenterV2ProcessSignature: Schema.Schema<GoogleCloudSecuritycenterV2ProcessSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memoryHashSignature: Schema.optional(
      GoogleCloudSecuritycenterV2MemoryHashSignature,
    ),
    yaraRuleSignature: Schema.optional(
      GoogleCloudSecuritycenterV2YaraRuleSignature,
    ),
    signatureType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2ProcessSignature" });

export interface GoogleCloudSecuritycenterV2Indicator {
  /** The list of URIs associated to the Findings. */
  uris?: ReadonlyArray<string>;
  /** The list of IP addresses that are associated with the finding. */
  ipAddresses?: ReadonlyArray<string>;
  /** List of domains associated to the Finding. */
  domains?: ReadonlyArray<string>;
  /** The list of matched signatures indicating that the given process is present in the environment. */
  signatures?: ReadonlyArray<GoogleCloudSecuritycenterV2ProcessSignature>;
}

export const GoogleCloudSecuritycenterV2Indicator: Schema.Schema<GoogleCloudSecuritycenterV2Indicator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    domains: Schema.optional(Schema.Array(Schema.String)),
    signatures: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ProcessSignature),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Indicator" });

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
  /** If destination IP ranges are specified, the firewall rule applies only to traffic that has a destination IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  destinationIpRanges?: ReadonlyArray<string>;
  /** If source IP ranges are specified, the firewall rule applies only to traffic that has a source IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4. */
  sourceIpRanges?: ReadonlyArray<string>;
  /** The direction that the rule is applicable to, one of ingress or egress. */
  direction?: "DIRECTION_UNSPECIFIED" | "INGRESS" | "EGRESS" | (string & {});
  /** Name of the network protocol service, such as FTP, that is exposed by the open port. Follows the naming convention available at: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml. */
  exposedServices?: ReadonlyArray<string>;
  /** Tuple with denied rules. */
  denied?: GoogleCloudSecuritycenterV2Denied;
  /** Tuple with allowed rules. */
  allowed?: GoogleCloudSecuritycenterV2Allowed;
}

export const GoogleCloudSecuritycenterV2IpRules: Schema.Schema<GoogleCloudSecuritycenterV2IpRules> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationIpRanges: Schema.optional(Schema.Array(Schema.String)),
    sourceIpRanges: Schema.optional(Schema.Array(Schema.String)),
    direction: Schema.optional(Schema.String),
    exposedServices: Schema.optional(Schema.Array(Schema.String)),
    denied: Schema.optional(GoogleCloudSecuritycenterV2Denied),
    allowed: Schema.optional(GoogleCloudSecuritycenterV2Allowed),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2IpRules" });

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
  /** If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source. */
  sources?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
  /** Total exfiltrated bytes processed for the entire job. */
  totalExfiltratedBytes?: string;
  /** If there are multiple targets, each target would get a complete copy of the "joined" source data. */
  targets?: ReadonlyArray<GoogleCloudSecuritycenterV2ExfilResource>;
}

export const GoogleCloudSecuritycenterV2Exfiltration: Schema.Schema<GoogleCloudSecuritycenterV2Exfiltration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
    totalExfiltratedBytes: Schema.optional(Schema.String),
    targets: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2ExfilResource),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Exfiltration" });

export interface GoogleCloudSecuritycenterV2Notebook {
  /** The user ID of the latest author to modify the notebook. */
  lastAuthor?: string;
  /** The most recent time the notebook was updated. */
  notebookUpdateTime?: string;
  /** The name of the notebook. */
  name?: string;
  /** The source notebook service, for example, "Colab Enterprise". */
  service?: string;
}

export const GoogleCloudSecuritycenterV2Notebook: Schema.Schema<GoogleCloudSecuritycenterV2Notebook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastAuthor: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Notebook" });

export interface GoogleCloudSecuritycenterV2DataRetentionDeletionEvent {
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
  /** Min duration of retention allowed from the DSPM retention control. This field is only populated when event type is set to EVENT_TYPE_MIN_TTL_FROM_CREATION. */
  minRetentionAllowed?: string;
  /** Number of objects that violated the policy for this resource. If the number is less than 1,000, then the value of this field is the exact number. If the number of objects that violated the policy is greater than or equal to 1,000, then the value of this field is 1000. */
  dataObjectCount?: string;
  /** Maximum duration of retention allowed from the DRD control. This comes from the DRD control where users set a max TTL for their data. For example, suppose that a user sets the max TTL for a Cloud Storage bucket to 90 days. However, an object in that bucket is 100 days old. In this case, a DataRetentionDeletionEvent will be generated for that Cloud Storage bucket, and the max_retention_allowed is 90 days. */
  maxRetentionAllowed?: string;
}

export const GoogleCloudSecuritycenterV2DataRetentionDeletionEvent: Schema.Schema<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventDetectionTime: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    minRetentionAllowed: Schema.optional(Schema.String),
    dataObjectCount: Schema.optional(Schema.String),
    maxRetentionAllowed: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV2DataRetentionDeletionEvent",
  });

export interface GoogleCloudSecuritycenterV2Chokepoint {
  /** List of resource names of findings associated with this chokepoint. For example, organizations/123/sources/456/findings/789. This list will have at most 100 findings. */
  relatedFindings?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV2Chokepoint: Schema.Schema<GoogleCloudSecuritycenterV2Chokepoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Chokepoint" });

export interface GoogleCloudSecuritycenterV2Finding {
  /** Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } } */
  contacts?: Record<string, GoogleCloudSecuritycenterV2ContactDetails>;
  /** ArtifactGuardPolicies associated with the finding. */
  artifactGuardPolicies?: GoogleCloudSecuritycenterV2ArtifactGuardPolicies;
  /** Signature of the kernel rootkit. */
  kernelRootkit?: GoogleCloudSecuritycenterV2KernelRootkit;
  /** Database associated with the finding. */
  database?: GoogleCloudSecuritycenterV2Database;
  /** External exposure associated with the finding. */
  externalExposure?: GoogleCloudSecuritycenterV2ExternalExposure;
  /** Represents an application associated with the finding. */
  application?: GoogleCloudSecuritycenterV2Application;
  /** Disk associated with the finding. */
  disk?: GoogleCloudSecuritycenterV2Disk;
  /** Immutable. For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. */
  resourceName?: string;
  /** Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  vulnerability?: GoogleCloudSecuritycenterV2Vulnerability;
  /** Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute. */
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  /** Access details associated with the finding, such as more information on the caller, which method was accessed, and from where. */
  access?: GoogleCloudSecuritycenterV2Access;
  /** The AI model associated with the finding. */
  aiModel?: GoogleCloudSecuritycenterV2AiModel;
  /** Log entries that are relevant to the finding. */
  logEntries?: ReadonlyArray<GoogleCloudSecuritycenterV2LogEntry>;
  /** The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** Represents operating system processes associated with the Finding. */
  processes?: ReadonlyArray<GoogleCloudSecuritycenterV2Process>;
  /** Kubernetes resources associated with the finding. */
  kubernetes?: GoogleCloudSecuritycenterV2Kubernetes;
  /** Fields related to Backup and DR findings. */
  backupDisasterRecovery?: GoogleCloudSecuritycenterV2BackupDisasterRecovery;
  /** PolicyViolationSummary associated with the finding. */
  policyViolationSummary?: GoogleCloudSecuritycenterV2PolicyViolationSummary;
  /** Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests. */
  toxicCombination?: GoogleCloudSecuritycenterV2ToxicCombination;
  /** AffectedResources associated with the finding. */
  affectedResources?: GoogleCloudSecuritycenterV2AffectedResources;
  /** The results of an attack path simulation relevant to this finding. */
  attackExposure?: GoogleCloudSecuritycenterV2AttackExposure;
  /** The load balancers associated with the finding. */
  loadBalancers?: ReadonlyArray<GoogleCloudSecuritycenterV2LoadBalancer>;
  /** Details about the compliance implications of the finding. */
  complianceDetails?: GoogleCloudSecuritycenterV2ComplianceDetails;
  /** Contains information about the org policies associated with the finding. */
  orgPolicies?: ReadonlyArray<GoogleCloudSecuritycenterV2OrgPolicy>;
  /** Data access events associated with the finding. */
  dataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataAccessEvent>;
  /** Steps to address the finding. */
  nextSteps?: string;
  /** File associated with the finding. */
  files?: ReadonlyArray<GoogleCloudSecuritycenterV2File>;
  /** Output only. The mute information regarding this finding. */
  muteInfo?: GoogleCloudSecuritycenterV2MuteInfo;
  /** Represents the VPC networks that the resource is attached to. */
  networks?: ReadonlyArray<GoogleCloudSecuritycenterV2Network>;
  /** Data flow events associated with the finding. */
  dataFlowEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataFlowEvent>;
  /** VertexAi associated with the finding. */
  vertexAi?: GoogleCloudSecuritycenterV2VertexAi;
  /** Cloud DLP data profile that is associated with the finding. */
  cloudDlpDataProfile?: GoogleCloudSecuritycenterV2CloudDlpDataProfile;
  /** Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. */
  externalSystems?: Record<string, GoogleCloudSecuritycenterV2ExternalSystem>;
  /** Fields related to Cloud Armor findings. */
  cloudArmor?: GoogleCloudSecuritycenterV2CloudArmor;
  /** Output only. The canonical name of the finding. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` The prefix is the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** Contains more details about the finding. */
  description?: string;
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** Secret associated with the finding. */
  secret?: GoogleCloudSecuritycenterV2Secret;
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** Output only. The name of the Cloud KMS key used to encrypt this finding, if any. */
  cryptoKeyName?: string;
  /** The relative resource name of the source and location the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}` + `folders/{folders_id}/sources/{source_id}` + `projects/{projects_id}/sources/{source_id}` + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}` + `folders/{folders_id}/sources/{source_id}/locations/{location_id}` + `projects/{projects_id}/sources/{source_id}/locations/{location_id}` */
  parent?: string;
  /** The security posture associated with the finding. */
  securityPosture?: GoogleCloudSecuritycenterV2SecurityPosture;
  /** Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 */
  moduleName?: string;
  /** Agent data access events associated with the finding. */
  agentDataAccessEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2AgentDataAccessEvent>;
  /** Contains compliance information for security standards associated to the finding. */
  compliances?: ReadonlyArray<GoogleCloudSecuritycenterV2Compliance>;
  /** Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. */
  containers?: ReadonlyArray<GoogleCloudSecuritycenterV2Container>;
  /** Represents IAM bindings associated with the finding. */
  iamBindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IamBinding>;
  /** DiscoveredWorkload associated with the finding. */
  discoveredWorkload?: GoogleCloudSecuritycenterV2DiscoveredWorkload;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: GoogleCloudSecuritycenterV2SecurityMarks;
  /** Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
  indicator?: GoogleCloudSecuritycenterV2Indicator;
  /** Immutable. The additional taxonomy group within findings from a given source. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** Identifier. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. The following list shows some examples: + `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}` + `organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/findings/{finding_id}` + `folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/findings/{finding_id}` + `projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}` */
  name?: string;
  /** Output only. The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** IP rules associated with the finding. */
  ipRules?: GoogleCloudSecuritycenterV2IpRules;
  /** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
  mitreAttack?: GoogleCloudSecuritycenterV2MitreAttack;
  /** Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding. */
  cloudDlpInspection?: GoogleCloudSecuritycenterV2CloudDlpInspection;
  /** Job associated with the finding. */
  job?: GoogleCloudSecuritycenterV2Job;
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
  /** Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics". */
  parentDisplayName?: string;
  /** Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests. */
  groupMemberships?: ReadonlyArray<GoogleCloudSecuritycenterV2GroupMembership>;
  /** Represents exfiltrations associated with the finding. */
  exfiltration?: GoogleCloudSecuritycenterV2Exfiltration;
  /** Notebook associated with the finding. */
  notebook?: GoogleCloudSecuritycenterV2Notebook;
  /** Output only. The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** Data retention deletion events associated with the finding. */
  dataRetentionDeletionEvents?: ReadonlyArray<GoogleCloudSecuritycenterV2DataRetentionDeletionEvent>;
  /** Contains information about the IP connection associated with the finding. */
  connections?: ReadonlyArray<GoogleCloudSecuritycenterV2Connection>;
  /** Output only. The most recent time this finding was muted or unmuted. */
  muteUpdateTime?: string;
  /** Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests. */
  chokepoint?: GoogleCloudSecuritycenterV2Chokepoint;
  /** Records additional information about the mute operation, for example, the [mute configuration](https://cloud.google.com/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. */
  muteInitiator?: string;
}

export const GoogleCloudSecuritycenterV2Finding: Schema.Schema<GoogleCloudSecuritycenterV2Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ContactDetails),
    ),
    artifactGuardPolicies: Schema.optional(
      GoogleCloudSecuritycenterV2ArtifactGuardPolicies,
    ),
    kernelRootkit: Schema.optional(GoogleCloudSecuritycenterV2KernelRootkit),
    database: Schema.optional(GoogleCloudSecuritycenterV2Database),
    externalExposure: Schema.optional(
      GoogleCloudSecuritycenterV2ExternalExposure,
    ),
    application: Schema.optional(GoogleCloudSecuritycenterV2Application),
    disk: Schema.optional(GoogleCloudSecuritycenterV2Disk),
    resourceName: Schema.optional(Schema.String),
    vulnerability: Schema.optional(GoogleCloudSecuritycenterV2Vulnerability),
    mute: Schema.optional(Schema.String),
    access: Schema.optional(GoogleCloudSecuritycenterV2Access),
    aiModel: Schema.optional(GoogleCloudSecuritycenterV2AiModel),
    logEntries: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LogEntry),
    ),
    eventTime: Schema.optional(Schema.String),
    processes: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Process),
    ),
    kubernetes: Schema.optional(GoogleCloudSecuritycenterV2Kubernetes),
    backupDisasterRecovery: Schema.optional(
      GoogleCloudSecuritycenterV2BackupDisasterRecovery,
    ),
    policyViolationSummary: Schema.optional(
      GoogleCloudSecuritycenterV2PolicyViolationSummary,
    ),
    toxicCombination: Schema.optional(
      GoogleCloudSecuritycenterV2ToxicCombination,
    ),
    affectedResources: Schema.optional(
      GoogleCloudSecuritycenterV2AffectedResources,
    ),
    attackExposure: Schema.optional(GoogleCloudSecuritycenterV2AttackExposure),
    loadBalancers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2LoadBalancer),
    ),
    complianceDetails: Schema.optional(
      GoogleCloudSecuritycenterV2ComplianceDetails,
    ),
    orgPolicies: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2OrgPolicy),
    ),
    dataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataAccessEvent),
    ),
    nextSteps: Schema.optional(Schema.String),
    files: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2File)),
    muteInfo: Schema.optional(GoogleCloudSecuritycenterV2MuteInfo),
    networks: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV2Network)),
    dataFlowEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataFlowEvent),
    ),
    vertexAi: Schema.optional(GoogleCloudSecuritycenterV2VertexAi),
    cloudDlpDataProfile: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpDataProfile,
    ),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV2ExternalSystem),
    ),
    cloudArmor: Schema.optional(GoogleCloudSecuritycenterV2CloudArmor),
    canonicalName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    secret: Schema.optional(GoogleCloudSecuritycenterV2Secret),
    externalUri: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    securityPosture: Schema.optional(
      GoogleCloudSecuritycenterV2SecurityPosture,
    ),
    moduleName: Schema.optional(Schema.String),
    agentDataAccessEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2AgentDataAccessEvent),
    ),
    compliances: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Compliance),
    ),
    containers: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Container),
    ),
    iamBindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IamBinding),
    ),
    discoveredWorkload: Schema.optional(
      GoogleCloudSecuritycenterV2DiscoveredWorkload,
    ),
    securityMarks: Schema.optional(GoogleCloudSecuritycenterV2SecurityMarks),
    indicator: Schema.optional(GoogleCloudSecuritycenterV2Indicator),
    category: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    ipRules: Schema.optional(GoogleCloudSecuritycenterV2IpRules),
    mitreAttack: Schema.optional(GoogleCloudSecuritycenterV2MitreAttack),
    cloudDlpInspection: Schema.optional(
      GoogleCloudSecuritycenterV2CloudDlpInspection,
    ),
    job: Schema.optional(GoogleCloudSecuritycenterV2Job),
    findingClass: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    groupMemberships: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2GroupMembership),
    ),
    exfiltration: Schema.optional(GoogleCloudSecuritycenterV2Exfiltration),
    notebook: Schema.optional(GoogleCloudSecuritycenterV2Notebook),
    createTime: Schema.optional(Schema.String),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2DataRetentionDeletionEvent),
    ),
    connections: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2Connection),
    ),
    muteUpdateTime: Schema.optional(Schema.String),
    chokepoint: Schema.optional(GoogleCloudSecuritycenterV2Chokepoint),
    muteInitiator: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Finding" });

export interface SecurityCenterSettings {
  /** Output only. The organization level service account to be used for security center components. */
  orgServiceAccount?: string;
  /** The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is `projects/{project_id}`. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services. This may only be specified for organization level onboarding. */
  logSinkProject?: string;
  /** Output only. Timestamp of when the customer organization was onboarded to SCC. */
  onboardingTime?: string;
  /** The KMS key name used for CMEK encryption. Format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key_name} */
  cryptoKeyName?: string;
  /** The resource name of the SecurityCenterSettings. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings */
  name?: string;
}

export const SecurityCenterSettings: Schema.Schema<SecurityCenterSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orgServiceAccount: Schema.optional(Schema.String),
    logSinkProject: Schema.optional(Schema.String),
    onboardingTime: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityCenterSettings" });

export interface GoogleCloudSecuritycenterV1p1beta1Finding {
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
  /** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
  parent?: string;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}" */
  name?: string;
  /** The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
  resourceName?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Finding: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityMarks: Schema.optional(
      GoogleCloudSecuritycenterV1p1beta1SecurityMarks,
    ),
    category: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    eventTime: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    externalUri: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Finding" });

export interface GoogleCloudSecuritycenterV1p1beta1Folder {
  /** The user defined display name for this folder. */
  resourceFolderDisplayName?: string;
  /** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  resourceFolder?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Folder: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceFolderDisplayName: Schema.optional(Schema.String),
    resourceFolder: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Folder" });

export interface GoogleCloudSecuritycenterV1p1beta1Resource {
  /** The full resource name of resource's parent. */
  parent?: string;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<GoogleCloudSecuritycenterV1p1beta1Folder>;
  /** The project id that the resource belongs to. */
  projectDisplayName?: string;
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
}

export const GoogleCloudSecuritycenterV1p1beta1Resource: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    folders: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV1p1beta1Folder),
    ),
    projectDisplayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1p1beta1Resource" });

export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: GoogleCloudSecuritycenterV1p1beta1Finding;
  /** The Cloud resource tied to the notification. */
  resource?: GoogleCloudSecuritycenterV1p1beta1Resource;
}

export const GoogleCloudSecuritycenterV1p1beta1NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV1p1beta1NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationConfigName: Schema.optional(Schema.String),
    finding: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Finding),
    resource: Schema.optional(GoogleCloudSecuritycenterV1p1beta1Resource),
  }).annotate({
    identifier: "GoogleCloudSecuritycenterV1p1beta1NotificationMessage",
  });

export interface GoogleCloudSecuritycenterV2NotificationMessage {
  /** The Cloud resource tied to this notification's Finding. */
  resource?: GoogleCloudSecuritycenterV2Resource;
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: GoogleCloudSecuritycenterV2Finding;
}

export const GoogleCloudSecuritycenterV2NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV2NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(GoogleCloudSecuritycenterV2Resource),
    notificationConfigName: Schema.optional(Schema.String),
    finding: Schema.optional(GoogleCloudSecuritycenterV2Finding),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2NotificationMessage" });

export interface DataAccessEvent {
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

export const DataAccessEvent: Schema.Schema<DataAccessEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataAccessEvent" });

export interface EventThreatDetectionSettings {
  /** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration. */
  modules?: Record<string, Config>;
  /** Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name?: string;
  /** Output only. The time the settings were last updated. */
  updateTime?: string;
}

export const EventThreatDetectionSettings: Schema.Schema<EventThreatDetectionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventThreatDetectionSettings" });

export interface ContainerThreatDetectionSettings {
  /** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name?: string;
  /** Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project. */
  serviceAccount?: string;
  /** Output only. The time the settings were last updated. */
  updateTime?: string;
  /** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration. */
  modules?: Record<string, Config>;
}

export const ContainerThreatDetectionSettings: Schema.Schema<ContainerThreatDetectionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceEnablementState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
  }).annotate({ identifier: "ContainerThreatDetectionSettings" });

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
  /** SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file. */
  sha256?: string;
  /** Prefix of the file contents as a JSON-encoded string. */
  contents?: string;
  /** Path of the file in terms of underlying disk/partition identifiers. */
  diskPath?: DiskPath;
  /** Absolute path of the file as a JSON encoded string. */
  path?: string;
  /** Operation(s) performed on a file. */
  operations?: ReadonlyArray<FileOperation>;
  /** The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file. */
  hashedSize?: string;
  /** The load state of the file. */
  fileLoadState?:
    | "FILE_LOAD_STATE_UNSPECIFIED"
    | "LOADED_BY_PROCESS"
    | "NOT_LOADED_BY_PROCESS"
    | (string & {});
  /** Size of the file in bytes. */
  size?: string;
  /** True when the hash covers only a prefix of the file. */
  partiallyHashed?: boolean;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sha256: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
    diskPath: Schema.optional(DiskPath),
    path: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(FileOperation)),
    hashedSize: Schema.optional(Schema.String),
    fileLoadState: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    partiallyHashed: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "File" });

export interface EnvironmentVariable {
  /** Environment variable value as a JSON encoded string. */
  val?: string;
  /** Environment variable name as a JSON encoded string. */
  name?: string;
}

export const EnvironmentVariable: Schema.Schema<EnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    val: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvironmentVariable" });

export interface Process {
  /** When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter. */
  script?: File;
  /** The ID of the user that executed the process. E.g. If this is the root user this will always be 0. */
  userId?: string;
  /** True if `args` is incomplete. */
  argumentsTruncated?: boolean;
  /** File information for libraries loaded by the process. */
  libraries?: ReadonlyArray<File>;
  /** Process arguments as JSON encoded strings. */
  args?: ReadonlyArray<string>;
  /** The process ID. */
  pid?: string;
  /** The parent process ID. */
  parentPid?: string;
  /** File information for the process executable. */
  binary?: File;
  /** True if `env_variables` is incomplete. */
  envVariablesTruncated?: boolean;
  /** The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`. */
  name?: string;
  /** Process environment variables. */
  envVariables?: ReadonlyArray<EnvironmentVariable>;
}

export const Process: Schema.Schema<Process> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    script: Schema.optional(File),
    userId: Schema.optional(Schema.String),
    argumentsTruncated: Schema.optional(Schema.Boolean),
    libraries: Schema.optional(Schema.Array(File)),
    args: Schema.optional(Schema.Array(Schema.String)),
    pid: Schema.optional(Schema.String),
    parentPid: Schema.optional(Schema.String),
    binary: Schema.optional(File),
    envVariablesTruncated: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    envVariables: Schema.optional(Schema.Array(EnvironmentVariable)),
  }).annotate({ identifier: "Process" });

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

export interface GoogleCloudSecuritycenterV1ResourceSelector {
  /** The resource types to run the detector on. */
  resourceTypes?: ReadonlyArray<string>;
}

export const GoogleCloudSecuritycenterV1ResourceSelector: Schema.Schema<GoogleCloudSecuritycenterV1ResourceSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceSelector" });

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

export interface Requests {
  /** For 'Increasing deny ratio', the ratio is the denied traffic divided by the allowed traffic. For 'Allowed traffic spike', the ratio is the allowed traffic in the short term divided by allowed traffic in the long term. */
  ratio?: number;
  /** Allowed RPS (requests per second) over the long term. */
  longTermAllowed?: number;
  /** Denied RPS (requests per second) over the long term. */
  longTermDenied?: number;
  /** Allowed RPS (requests per second) in the short term. */
  shortTermAllowed?: number;
}

export const Requests: Schema.Schema<Requests> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ratio: Schema.optional(Schema.Number),
    longTermAllowed: Schema.optional(Schema.Number),
    longTermDenied: Schema.optional(Schema.Number),
    shortTermAllowed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Requests" });

export interface VirtualMachineThreatDetectionSettings {
  /** Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name?: string;
  /** Output only. The service account used by Virtual Machine Threat Detection detectors. */
  serviceAccount?: string;
  /** Output only. The time the settings were last updated. */
  updateTime?: string;
  /** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration. */
  modules?: Record<string, Config>;
  /** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
}

export const VirtualMachineThreatDetectionSettings: Schema.Schema<VirtualMachineThreatDetectionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
    serviceEnablementState: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualMachineThreatDetectionSettings" });

export interface Role {
  /** Role name. */
  name?: string;
  /** Role type. */
  kind?: "KIND_UNSPECIFIED" | "ROLE" | "CLUSTER_ROLE" | (string & {});
  /** Role namespace. */
  ns?: string;
}

export const Role: Schema.Schema<Role> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "Role" });

export interface Subject {
  /** Name for the subject. */
  name?: string;
  /** Authentication type for the subject. */
  kind?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICEACCOUNT"
    | "GROUP"
    | (string & {});
  /** Namespace for the subject. */
  ns?: string;
}

export const Subject: Schema.Schema<Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    ns: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subject" });

export interface GoogleCloudSecuritycenterV1Binding {
  /** Namespace for the binding. */
  ns?: string;
  /** The Role or ClusterRole referenced by the binding. */
  role?: Role;
  /** Name for the binding. */
  name?: string;
  /** Represents one or more subjects that are bound to the role. Not always available for PATCH requests. */
  subjects?: ReadonlyArray<Subject>;
}

export const GoogleCloudSecuritycenterV1Binding: Schema.Schema<GoogleCloudSecuritycenterV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ns: Schema.optional(Schema.String),
    role: Schema.optional(Role),
    name: Schema.optional(Schema.String),
    subjects: Schema.optional(Schema.Array(Subject)),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Binding" });

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

export interface Chokepoint {
  /** List of resource names of findings associated with this chokepoint. For example, organizations/123/sources/456/findings/789. This list will have at most 100 findings. */
  relatedFindings?: ReadonlyArray<string>;
}

export const Chokepoint: Schema.Schema<Chokepoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedFindings: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Chokepoint" });

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

export interface BigQueryDestination {
  /** Required. The relative resource name of the destination dataset, in the form projects/{projectId}/datasets/{datasetId}. */
  dataset?: string;
}

export const BigQueryDestination: Schema.Schema<BigQueryDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryDestination" });

export interface ExportFindingsMetadata {
  /** Optional. Timestamp at which export was started */
  exportStartTime?: string;
  /** Required. The destination BigQuery dataset to export findings to. */
  bigQueryDestination?: BigQueryDestination;
}

export const ExportFindingsMetadata: Schema.Schema<ExportFindingsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportStartTime: Schema.optional(Schema.String),
    bigQueryDestination: Schema.optional(BigQueryDestination),
  }).annotate({ identifier: "ExportFindingsMetadata" });

export interface Details {
  /** The time the subscription has or will start. */
  startTime?: string;
  /** The time the subscription has or will end. */
  endTime?: string;
  /** The type of subscription */
  type?:
    | "TYPE_UNSPECIFIED"
    | "STANDARD"
    | "TRIAL"
    | "ALPHA"
    | "DEMO"
    | "PAY_AS_YOU_GO"
    | (string & {});
}

export const Details: Schema.Schema<Details> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Details" });

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

export interface Expr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleCloudSecuritycenterV1Property {
  /** Name of the property for the custom output. */
  name?: string;
  /** The CEL expression for the custom output. A resource property can be specified to return the value of the property or a text string enclosed in quotation marks. */
  valueExpression?: Expr;
}

export const GoogleCloudSecuritycenterV1Property: Schema.Schema<GoogleCloudSecuritycenterV1Property> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    valueExpression: Schema.optional(Expr),
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

export interface GoogleCloudSecuritycenterV1ResourceApplicationAttributes {
  /** Business team that ensures user needs are met and value is delivered */
  businessOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  /** User-defined criticality information. */
  criticality?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality;
  /** Operator team that ensures runtime and operations. */
  operatorOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
  /** User-defined environment information. */
  environment?: GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment;
  /** Developer team that owns development and coding. */
  developerOwners?: ReadonlyArray<GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo>;
}

export const GoogleCloudSecuritycenterV1ResourceApplicationAttributes: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplicationAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface GoogleCloudSecuritycenterV1CustomConfig {
  /** The resource types that the custom module operates on. Each custom module can specify up to 5 resource types. */
  resourceSelector?: GoogleCloudSecuritycenterV1ResourceSelector;
  /** An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON. */
  recommendation?: string;
  /** Custom output properties. */
  customOutput?: GoogleCloudSecuritycenterV1CustomOutputSpec;
  /** The severity to assign to findings generated by the module. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** The CEL expression to evaluate to produce findings. When the expression evaluates to true against a resource, a finding is generated. */
  predicate?: Expr;
  /** Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks. */
  description?: string;
}

export const GoogleCloudSecuritycenterV1CustomConfig: Schema.Schema<GoogleCloudSecuritycenterV1CustomConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceSelector: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceSelector,
    ),
    recommendation: Schema.optional(Schema.String),
    customOutput: Schema.optional(GoogleCloudSecuritycenterV1CustomOutputSpec),
    severity: Schema.optional(Schema.String),
    predicate: Schema.optional(Expr),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1CustomConfig" });

export interface GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
  /** Output only. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}" */
  name?: string;
  /** Output only. The user-specified configuration for the module. */
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  /** Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
  displayName?: string;
  /** The cloud provider of the custom module. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Output only. The effective state of enablement for the module at the given level of the hierarchy. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule: Schema.Schema<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    displayName: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule",
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

export interface HttpResponse {
  /** The http path for which response code was returned by web application, for example, "https://test-app.a.run.app/test". */
  path?: string;
  /** The http response code returned by the web application, for example, 200. */
  statusCode?: string;
}

export const HttpResponse: Schema.Schema<HttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    statusCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpResponse" });

export interface ExternalExposure {
  /** The full resource name of load balancer backend service, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  backendService?: string;
  /** The full resource name of the forwarding rule, for example, "//compute.googleapis.com/projects/{project-id}/global/forwardingRules/{forwarding-rule-name}". */
  forwardingRule?: string;
  /** Private IP address of the exposed endpoint. */
  privateIpAddress?: string;
  /** The full resource name of the firewall policy of the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  serviceFirewallPolicy?: string;
  /** The full resource name of load balancer backend service in the internal project having resource exposed via PSC, for example, "//compute.googleapis.com/projects/{project-id}/global/backendServices/{name}". */
  internalBackendService?: string;
  /** The resource which is running the exposed service, for example, "//compute.googleapis.com/projects/{project-id}/zones/{zone}/instances/{instance}.” */
  exposedEndpoint?: string;
  /** The name and version of the exposed web application, for example, "Jenkins 2.184". */
  exposedApplication?: string;
  /** Hostname of the exposed application, for example, "https://test-app.a.run.app/" */
  hostnameUri?: string;
  /** Public IP address of the exposed endpoint. */
  publicIpAddress?: string;
  /** The full resource name of the load balancer firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{policy-name}". */
  loadBalancerFirewallPolicy?: string;
  /** The full resource name of the network ingress firewall policy, for example, "//compute.googleapis.com/projects/{project-id}/global/firewallPolicies/{name}". */
  networkIngressFirewallPolicy?: string;
  /** The full resource name of the network endpoint group, for example, "//compute.googleapis.com/projects/{project-id}/global/networkEndpointGroups/{name}". */
  networkEndpointGroup?: string;
  /** Public port number of the exposed endpoint. */
  publicPort?: string;
  /** Port number associated with private IP address. */
  privatePort?: string;
  /** The http response returned by the web application. */
  httpResponse?: ReadonlyArray<HttpResponse>;
  /** The name and version of the service, for example, "Jupyter Notebook 6.14.0". */
  exposedService?: string;
  /** The full resource name of the instance group, for example, "//compute.googleapis.com/projects/{project-id}/global/instanceGroups/{name}". */
  instanceGroup?: string;
  /** The full resource name of the load balancer backend bucket, for example, "//compute.googleapis.com/projects/{project-id}/global/backendBuckets/{name}" */
  backendBucket?: string;
  /** The full resource name of the PSC (Private Service Connect) network attachment that network interface controller is attached to, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/networkAttachments/{name}" */
  pscNetworkAttachment?: string;
  /** The full resource name of the PSC (Private Service Connect) service attachment that the load balancer network endpoint group targets, for example, "//compute.googleapis.com/projects/{project-id}/regions/{region}/serviceAttachments/{name}" */
  pscServiceAttachment?: string;
}

export const ExternalExposure: Schema.Schema<ExternalExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backendService: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    privateIpAddress: Schema.optional(Schema.String),
    serviceFirewallPolicy: Schema.optional(Schema.String),
    internalBackendService: Schema.optional(Schema.String),
    exposedEndpoint: Schema.optional(Schema.String),
    exposedApplication: Schema.optional(Schema.String),
    hostnameUri: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    loadBalancerFirewallPolicy: Schema.optional(Schema.String),
    networkIngressFirewallPolicy: Schema.optional(Schema.String),
    networkEndpointGroup: Schema.optional(Schema.String),
    publicPort: Schema.optional(Schema.String),
    privatePort: Schema.optional(Schema.String),
    httpResponse: Schema.optional(Schema.Array(HttpResponse)),
    exposedService: Schema.optional(Schema.String),
    instanceGroup: Schema.optional(Schema.String),
    backendBucket: Schema.optional(Schema.String),
    pscNetworkAttachment: Schema.optional(Schema.String),
    pscServiceAttachment: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalExposure" });

export interface AttackExposure {
  /** The most recent time the attack exposure was updated on this finding. */
  latestCalculationTime?: string;
  /** The number of medium value resources that are exposed as a result of this finding. */
  exposedMediumValueResourcesCount?: number;
  /** What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. */
  state?: "STATE_UNSPECIFIED" | "CALCULATED" | "NOT_CALCULATED" | (string & {});
  /** The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: `organizations/123/simulations/456/attackExposureResults/789` */
  attackExposureResult?: string;
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedHighValueResourcesCount?: number;
  /** A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate. */
  score?: number;
  /** The number of high value resources that are exposed as a result of this finding. */
  exposedLowValueResourcesCount?: number;
}

export const AttackExposure: Schema.Schema<AttackExposure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestCalculationTime: Schema.optional(Schema.String),
    exposedMediumValueResourcesCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    attackExposureResult: Schema.optional(Schema.String),
    exposedHighValueResourcesCount: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
    exposedLowValueResourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AttackExposure" });

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

export interface SecurityBulletin {
  /** ID of the bulletin corresponding to the vulnerability. */
  bulletinId?: string;
  /** Submission time of this Security Bulletin. */
  submissionTime?: string;
  /** This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 */
  suggestedUpgradeVersion?: string;
}

export const SecurityBulletin: Schema.Schema<SecurityBulletin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bulletinId: Schema.optional(Schema.String),
    submissionTime: Schema.optional(Schema.String),
    suggestedUpgradeVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityBulletin" });

export interface Vulnerability {
  /** Provider provided risk_score based on multiple factors. The higher the risk score, the more risky the vulnerability is. */
  providerRiskScore?: string;
  /** Represents whether the vulnerability is reachable (detected via static analysis) */
  reachable?: boolean;
  /** CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  cve?: Cve;
  /** The fixed package is relevant to the finding. */
  fixedPackage?: Package;
  /** Represents one or more Common Weakness Enumeration (CWE) information on this vulnerability. */
  cwes?: ReadonlyArray<Cwe>;
  /** The offending package is relevant to the finding. */
  offendingPackage?: Package;
  /** The security bulletin is relevant to this finding. */
  securityBulletin?: SecurityBulletin;
}

export const Vulnerability: Schema.Schema<Vulnerability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerRiskScore: Schema.optional(Schema.String),
    reachable: Schema.optional(Schema.Boolean),
    cve: Schema.optional(Cve),
    fixedPackage: Schema.optional(Package),
    cwes: Schema.optional(Schema.Array(Cwe)),
    offendingPackage: Schema.optional(Package),
    securityBulletin: Schema.optional(SecurityBulletin),
  }).annotate({ identifier: "Vulnerability" });

export interface Contact {
  /** An email address. For example, "`person123@company.com`". */
  email?: string;
}

export const Contact: Schema.Schema<Contact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Contact" });

export interface PolicyViolationSummary {
  /** Count of child resources in violation of the policy. */
  policyViolationsCount?: string;
  /** Number of child resources for which errors during evaluation occurred. The evaluation result for these child resources is effectively "unknown". */
  evaluationErrorsCount?: string;
  /** Total count of child resources which were not in scope for evaluation. */
  outOfScopeResourcesCount?: string;
  /** Total number of child resources that conform to the policy. */
  conformantResourcesCount?: string;
}

export const PolicyViolationSummary: Schema.Schema<PolicyViolationSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyViolationsCount: Schema.optional(Schema.String),
    evaluationErrorsCount: Schema.optional(Schema.String),
    outOfScopeResourcesCount: Schema.optional(Schema.String),
    conformantResourcesCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyViolationSummary" });

export interface GoogleCloudSecuritycenterV1ResourceApplication {
  /** Consumer provided attributes for the application */
  attributes?: GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
  /** The resource name of an Application. Format: `projects/{host-project-id}/locations/{location}/applications/{application-id}` */
  name?: string;
}

export const GoogleCloudSecuritycenterV1ResourceApplication: Schema.Schema<GoogleCloudSecuritycenterV1ResourceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplicationAttributes,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceApplication" });

export interface BackupDisasterRecovery {
  /** The backup type of the Backup and DR image. For example, `Snapshot`, `Remote Snapshot`, `OnVault`. */
  backupType?: string;
  /** The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, `centos7-01`. */
  host?: string;
  /** The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, `centos7-01-vol00`, `centos7-01-vol01`, `centos7-01-vol02`. */
  applications?: ReadonlyArray<string>;
  /** The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, `onvaults`. */
  policies?: ReadonlyArray<string>;
  /** The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, `DiskPoolOne`. */
  storagePool?: string;
  /** The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, `snap-ov`. */
  backupTemplate?: string;
  /** The timestamp at which the Backup and DR backup was created. */
  backupCreateTime?: string;
  /** The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, `skipofflineappsincongrp, nounmap`. */
  policyOptions?: ReadonlyArray<string>;
  /** The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, `GCP`. */
  profile?: string;
  /** The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, `backup-server-57137`. */
  appliance?: string;
}

export const BackupDisasterRecovery: Schema.Schema<BackupDisasterRecovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupType: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Schema.String)),
    policies: Schema.optional(Schema.Array(Schema.String)),
    storagePool: Schema.optional(Schema.String),
    backupTemplate: Schema.optional(Schema.String),
    backupCreateTime: Schema.optional(Schema.String),
    policyOptions: Schema.optional(Schema.Array(Schema.String)),
    profile: Schema.optional(Schema.String),
    appliance: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDisasterRecovery" });

export interface CloudDlpInspection {
  /** The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`. */
  infoType?: string;
  /** The number of times Cloud DLP found this infoType within this job and resource. */
  infoTypeCount?: string;
  /** Whether Cloud DLP scanned the complete resource or a sampled subset. */
  fullScan?: boolean;
  /** Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`. */
  inspectJob?: string;
}

export const CloudDlpInspection: Schema.Schema<CloudDlpInspection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoType: Schema.optional(Schema.String),
    infoTypeCount: Schema.optional(Schema.String),
    fullScan: Schema.optional(Schema.Boolean),
    inspectJob: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudDlpInspection" });

export interface Notebook {
  /** The name of the notebook. */
  name?: string;
  /** The source notebook service, for example, "Colab Enterprise". */
  service?: string;
  /** The user ID of the latest author to modify the notebook. */
  lastAuthor?: string;
  /** The most recent time the notebook was updated. */
  notebookUpdateTime?: string;
}

export const Notebook: Schema.Schema<Notebook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    lastAuthor: Schema.optional(Schema.String),
    notebookUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Notebook" });

export interface SecretEnvironmentVariable {
  /** Environment variable name as a JSON encoded string. Note that value is not included since the value contains the secret data, which is sensitive core content. */
  key?: string;
}

export const SecretEnvironmentVariable: Schema.Schema<SecretEnvironmentVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretEnvironmentVariable" });

export interface SecretFilePath {
  /** Path to the file. */
  path?: string;
}

export const SecretFilePath: Schema.Schema<SecretFilePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretFilePath" });

export interface Secret {
  /** The environment variable containing the secret. */
  environmentVariable?: SecretEnvironmentVariable;
  /** The type of secret, for example, GCP_API_KEY. */
  type?: string;
  /** The status of the secret. */
  status?: SecretStatus;
  /** The file containing the secret. */
  filePath?: SecretFilePath;
}

export const Secret: Schema.Schema<Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environmentVariable: Schema.optional(SecretEnvironmentVariable),
    type: Schema.optional(Schema.String),
    status: Schema.optional(SecretStatus),
    filePath: Schema.optional(SecretFilePath),
  }).annotate({ identifier: "Secret" });

export interface Compliance {
  /** Version of the standard or benchmark, for example, 1.1 */
  version?: string;
  /** Policies within the standard or benchmark, for example, A.12.4.1 */
  ids?: ReadonlyArray<string>;
  /** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
  standard?: string;
}

export const Compliance: Schema.Schema<Compliance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    ids: Schema.optional(Schema.Array(Schema.String)),
    standard: Schema.optional(Schema.String),
  }).annotate({ identifier: "Compliance" });

export interface SecurityMarks {
  /** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
  name?: string;
  /** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
  marks?: Record<string, string>;
  /** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
  canonicalName?: string;
}

export const SecurityMarks: Schema.Schema<SecurityMarks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    marks: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    canonicalName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityMarks" });

export interface LoadBalancer {
  /** The name of the load balancer associated with the finding. */
  name?: string;
}

export const LoadBalancer: Schema.Schema<LoadBalancer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoadBalancer" });

export interface AffectedResources {
  /** The count of resources affected by the finding. */
  count?: string;
}

export const AffectedResources: Schema.Schema<AffectedResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AffectedResources" });

export interface ComplianceDetails {
  /** Cloud Control Deployments associated with the finding. For example, organizations/123/locations/global/cloudControlDeployments/deploymentIdentifier */
  cloudControlDeploymentNames?: ReadonlyArray<string>;
  /** Details of Frameworks associated with the finding */
  frameworks?: ReadonlyArray<Framework>;
  /** CloudControl associated with the finding */
  cloudControl?: CloudControl;
}

export const ComplianceDetails: Schema.Schema<ComplianceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudControlDeploymentNames: Schema.optional(Schema.Array(Schema.String)),
    frameworks: Schema.optional(Schema.Array(Framework)),
    cloudControl: Schema.optional(CloudControl),
  }).annotate({ identifier: "ComplianceDetails" });

export interface Attack {
  /** Total BPS (bytes per second) volume of attack. Deprecated - refer to volume_bps_long instead. */
  volumeBps?: number;
  /** Total BPS (bytes per second) volume of attack. */
  volumeBpsLong?: string;
  /** Total PPS (packets per second) volume of attack. Deprecated - refer to volume_pps_long instead. */
  volumePps?: number;
  /** Total PPS (packets per second) volume of attack. */
  volumePpsLong?: string;
  /** Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'. */
  classification?: string;
}

export const Attack: Schema.Schema<Attack> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeBps: Schema.optional(Schema.Number),
    volumeBpsLong: Schema.optional(Schema.String),
    volumePps: Schema.optional(Schema.Number),
    volumePpsLong: Schema.optional(Schema.String),
    classification: Schema.optional(Schema.String),
  }).annotate({ identifier: "Attack" });

export interface CloudArmor {
  /** Information about potential Layer 7 DDoS attacks identified by [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview). */
  adaptiveProtection?: AdaptiveProtection;
  /** Distinguish between volumetric & protocol DDoS attack and application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS attacks, or "L_7" for Layer 7 DDoS attacks. */
  threatVector?: string;
  /** Duration of attack from the start until the current moment (updated every 5 minutes). */
  duration?: string;
  /** Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding. */
  securityPolicy?: SecurityPolicy;
  /** Information about incoming requests evaluated by [Google Cloud Armor security policies](https://cloud.google.com/armor/docs/security-policy-overview). */
  requests?: Requests;
  /** Information about DDoS attack volume and classification. */
  attack?: Attack;
}

export const CloudArmor: Schema.Schema<CloudArmor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adaptiveProtection: Schema.optional(AdaptiveProtection),
    threatVector: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    securityPolicy: Schema.optional(SecurityPolicy),
    requests: Schema.optional(Requests),
    attack: Schema.optional(Attack),
  }).annotate({ identifier: "CloudArmor" });

export interface TicketInfo {
  /** The identifier of the ticket in the ticket system. */
  id?: string;
  /** The latest status of the ticket, as reported by the ticket system. */
  status?: string;
  /** The description of the ticket in the ticket system. */
  description?: string;
  /** The assignee of the ticket in the ticket system. */
  assignee?: string;
  /** The link to the ticket in the ticket system. */
  uri?: string;
  /** The time when the ticket was last updated, as reported by the ticket system. */
  updateTime?: string;
}

export const TicketInfo: Schema.Schema<TicketInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    assignee: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TicketInfo" });

export interface GoogleCloudSecuritycenterV1ExternalSystem {
  /** The link to the finding's corresponding case in the external system. */
  caseUri?: string;
  /** Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira" */
  name?: string;
  /** The identifier that's used to track the finding's corresponding case in the external system. */
  externalUid?: string;
  /** The time when the case was closed, as reported by the external system. */
  caseCloseTime?: string;
  /** The SLA of the finding's corresponding case in the external system. */
  caseSla?: string;
  /** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
  ticketInfo?: TicketInfo;
  /** The most recent status of the finding's corresponding case, as reported by the external system. */
  status?: string;
  /** The priority of the finding's corresponding case in the external system. */
  casePriority?: string;
  /** The time when the case was last updated, as reported by the external system. */
  externalSystemUpdateTime?: string;
  /** References primary/secondary etc assignees in the external system. */
  assignees?: ReadonlyArray<string>;
  /** The time when the case was created, as reported by the external system. */
  caseCreateTime?: string;
}

export const GoogleCloudSecuritycenterV1ExternalSystem: Schema.Schema<GoogleCloudSecuritycenterV1ExternalSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caseUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    externalUid: Schema.optional(Schema.String),
    caseCloseTime: Schema.optional(Schema.String),
    caseSla: Schema.optional(Schema.String),
    ticketInfo: Schema.optional(TicketInfo),
    status: Schema.optional(Schema.String),
    casePriority: Schema.optional(Schema.String),
    externalSystemUpdateTime: Schema.optional(Schema.String),
    assignees: Schema.optional(Schema.Array(Schema.String)),
    caseCreateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ExternalSystem" });

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

export interface DataFlowEvent {
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

export const DataFlowEvent: Schema.Schema<DataFlowEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.optional(Schema.String),
    principalEmail: Schema.optional(Schema.String),
    violatedLocation: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataFlowEvent" });

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
  /** Datasets associated with the finding. */
  datasets?: ReadonlyArray<Dataset>;
  /** Pipelines associated with the finding. */
  pipelines?: ReadonlyArray<Pipeline>;
}

export const VertexAi: Schema.Schema<VertexAi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(Schema.Array(Dataset)),
    pipelines: Schema.optional(Schema.Array(Pipeline)),
  }).annotate({ identifier: "VertexAi" });

export interface ArtifactGuardPolicies {
  /** A list of failing policies. */
  failingPolicies?: ReadonlyArray<ArtifactGuardPolicy>;
  /** The ID of the resource that has policies configured for it. */
  resourceId?: string;
}

export const ArtifactGuardPolicies: Schema.Schema<ArtifactGuardPolicies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failingPolicies: Schema.optional(Schema.Array(ArtifactGuardPolicy)),
    resourceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactGuardPolicies" });

export interface ContactDetails {
  /** A list of contacts */
  contacts?: ReadonlyArray<Contact>;
}

export const ContactDetails: Schema.Schema<ContactDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(Contact)),
  }).annotate({ identifier: "ContactDetails" });

export interface Database {
  /** The SQL statement that is associated with the database access. */
  query?: string;
  /** Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. */
  name?: string;
  /** The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
  version?: string;
  /** The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change. */
  grantees?: ReadonlyArray<string>;
  /** The username used to connect to the database. The username might not be an IAM principal and does not have a set format. */
  userName?: string;
  /** The human-readable name of the database that the user connected to. */
  displayName?: string;
}

export const Database: Schema.Schema<Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    grantees: Schema.optional(Schema.Array(Schema.String)),
    userName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Database" });

export interface KernelRootkit {
  /** True if interrupt handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedInterruptHandler?: boolean;
  /** Rootkit name, when available. */
  name?: string;
  /** True if unexpected modifications of kernel read-only data memory are present. */
  unexpectedReadOnlyDataModification?: boolean;
  /** True if unexpected modifications of kernel code memory are present. */
  unexpectedCodeModification?: boolean;
  /** True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedKprobeHandler?: boolean;
  /** True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. */
  unexpectedProcessesInRunqueue?: boolean;
  /** True if kernel code pages that are not in the expected kernel or module code regions are present. */
  unexpectedKernelCodePages?: boolean;
  /** True if system call handlers that are are not in the expected kernel or module code regions are present. */
  unexpectedSystemCallHandler?: boolean;
  /** True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
  unexpectedFtraceHandler?: boolean;
}

export const KernelRootkit: Schema.Schema<KernelRootkit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unexpectedInterruptHandler: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    unexpectedReadOnlyDataModification: Schema.optional(Schema.Boolean),
    unexpectedCodeModification: Schema.optional(Schema.Boolean),
    unexpectedKprobeHandler: Schema.optional(Schema.Boolean),
    unexpectedProcessesInRunqueue: Schema.optional(Schema.Boolean),
    unexpectedKernelCodePages: Schema.optional(Schema.Boolean),
    unexpectedSystemCallHandler: Schema.optional(Schema.Boolean),
    unexpectedFtraceHandler: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "KernelRootkit" });

export interface AiModel {
  /** The publisher of the model, for example, “google” or “nvidia”. */
  publisher?: string;
  /** The user defined display name of model. Ex. baseline-classification-model */
  displayName?: string;
  /** The region in which the model is used, for example, “us-central1”. */
  location?: string;
  /** The platform on which the model is deployed. */
  deploymentPlatform?:
    | "DEPLOYMENT_PLATFORM_UNSPECIFIED"
    | "VERTEX_AI"
    | "GKE"
    | "GCE"
    | "FINE_TUNED_MODEL"
    | (string & {});
  /** The purpose of the model, for example, "Inteference" or "Training". */
  usageCategory?: string;
  /** The name of the model library, for example, “transformers”. */
  library?: string;
  /** The name of the AI model, for example, "gemini:1.0.0". */
  name?: string;
  /** The domain of the model, for example, “image-classification”. */
  domain?: string;
}

export const AiModel: Schema.Schema<AiModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisher: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    deploymentPlatform: Schema.optional(Schema.String),
    usageCategory: Schema.optional(Schema.String),
    library: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "AiModel" });

export interface Disk {
  /** The name of the disk, for example, "https://www.googleapis.com/compute/v1/projects/{project-id}/zones/{zone-id}/disks/{disk-id}". */
  name?: string;
}

export const Disk: Schema.Schema<Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

export interface Kubernetes {
  /** Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. */
  nodes?: ReadonlyArray<Node>;
  /** GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. */
  nodePools?: ReadonlyArray<NodePool>;
  /** Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  bindings?: ReadonlyArray<GoogleCloudSecuritycenterV1Binding>;
  /** Kubernetes objects related to the finding. */
  objects?: ReadonlyArray<Securitycenter_Object>;
  /** Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
  roles?: ReadonlyArray<Role>;
  /** Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. */
  accessReviews?: ReadonlyArray<AccessReview>;
  /** Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. */
  pods?: ReadonlyArray<Pod>;
}

export const Kubernetes: Schema.Schema<Kubernetes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(Node)),
    nodePools: Schema.optional(Schema.Array(NodePool)),
    bindings: Schema.optional(Schema.Array(GoogleCloudSecuritycenterV1Binding)),
    objects: Schema.optional(Schema.Array(Securitycenter_Object)),
    roles: Schema.optional(Schema.Array(Role)),
    accessReviews: Schema.optional(Schema.Array(AccessReview)),
    pods: Schema.optional(Schema.Array(Pod)),
  }).annotate({ identifier: "Kubernetes" });

export interface Finding {
  /** Job associated with the finding. */
  job?: Job;
  /** Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding. */
  cloudDlpInspection?: CloudDlpInspection;
  /** Notebook associated with the finding. */
  notebook?: Notebook;
  /** Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics". */
  parentDisplayName?: string;
  /** Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests. */
  groupMemberships?: ReadonlyArray<GroupMembership>;
  /** Represents exfiltrations associated with the finding. */
  exfiltration?: Exfiltration;
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
  /** Data retention deletion events associated with the finding. */
  dataRetentionDeletionEvents?: ReadonlyArray<DataRetentionDeletionEvent>;
  /** The time at which the finding was created in Security Command Center. */
  createTime?: string;
  /** Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests. */
  chokepoint?: Chokepoint;
  /** Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. */
  muteInitiator?: string;
  /** Output only. The most recent time this finding was muted or unmuted. */
  muteUpdateTime?: string;
  /** Contains information about the IP connection associated with the finding. */
  connections?: ReadonlyArray<Connection>;
  /** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
  externalUri?: string;
  /** Secret associated with the finding. */
  secret?: Secret;
  /** Agent data access events associated with the finding. */
  agentDataAccessEvents?: ReadonlyArray<AgentDataAccessEvent>;
  /** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
  parent?: string;
  /** The security posture associated with the finding. */
  securityPosture?: SecurityPosture;
  /** Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 */
  moduleName?: string;
  /** Represents IAM bindings associated with the finding. */
  iamBindings?: ReadonlyArray<IamBinding>;
  /** DiscoveredWorkload associated with the finding. */
  discoveredWorkload?: DiscoveredWorkload;
  /** Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. */
  containers?: ReadonlyArray<Container>;
  /** Contains compliance information for security standards associated to the finding. */
  compliances?: ReadonlyArray<Compliance>;
  /** The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}". */
  name?: string;
  /** The state of the finding. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** IP rules associated with the finding. */
  ipRules?: IpRules;
  /** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
  mitreAttack?: MitreAttack;
  /** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
  sourceProperties?: Record<string, unknown>;
  /** Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding. */
  securityMarks?: SecurityMarks;
  /** Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
  indicator?: Indicator;
  /** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
  category?: string;
  /** The load balancers associated with the finding. */
  loadBalancers?: ReadonlyArray<LoadBalancer>;
  /** The results of an attack path simulation relevant to this finding. */
  attackExposure?: AttackExposure;
  /** AffectedResources associated with the finding. */
  affectedResources?: AffectedResources;
  /** File associated with the finding. */
  files?: ReadonlyArray<File>;
  /** Contains information about the org policies associated with the finding. */
  orgPolicies?: ReadonlyArray<OrgPolicy>;
  /** Data access events associated with the finding. */
  dataAccessEvents?: ReadonlyArray<DataAccessEvent>;
  /** Steps to address the finding. */
  nextSteps?: string;
  /** Details about the compliance implications of the finding. */
  complianceDetails?: ComplianceDetails;
  /** Fields related to Cloud Armor findings. */
  cloudArmor?: CloudArmor;
  /** Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. */
  externalSystems?: Record<string, GoogleCloudSecuritycenterV1ExternalSystem>;
  /** Cloud DLP data profile that is associated with the finding. */
  cloudDlpDataProfile?: CloudDlpDataProfile;
  /** Output only. The mute information regarding this finding. */
  muteInfo?: MuteInfo;
  /** Represents the VPC networks that the resource is attached to. */
  networks?: ReadonlyArray<Network>;
  /** Data flow events associated with the finding. */
  dataFlowEvents?: ReadonlyArray<DataFlowEvent>;
  /** VertexAi associated with the finding. */
  vertexAi?: VertexAi;
  /** Contains more details about the finding. */
  description?: string;
  /** The severity of the finding. This field is managed by the source that writes the finding. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
  canonicalName?: string;
  /** ArtifactGuardPolicies associated with the finding. */
  artifactGuardPolicies?: ArtifactGuardPolicies;
  /** Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } } */
  contacts?: Record<string, ContactDetails>;
  /** Database associated with the finding. */
  database?: Database;
  /** Signature of the kernel rootkit. */
  kernelRootkit?: KernelRootkit;
  /** Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute. */
  mute?: "MUTE_UNSPECIFIED" | "MUTED" | "UNMUTED" | "UNDEFINED" | (string & {});
  /** Access details associated with the finding, such as more information on the caller, which method was accessed, and from where. */
  access?: Access;
  /** The AI model associated with the finding. */
  aiModel?: AiModel;
  /** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
  resourceName?: string;
  /** Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/) */
  vulnerability?: Vulnerability;
  /** Represents an application associated with the finding. */
  application?: Application;
  /** Disk associated with the finding. */
  disk?: Disk;
  /** External exposure associated with the finding. */
  externalExposure?: ExternalExposure;
  /** Kubernetes resources associated with the finding. */
  kubernetes?: Kubernetes;
  /** Fields related to Backup and DR findings. */
  backupDisasterRecovery?: BackupDisasterRecovery;
  /** PolicyViolationSummary associated with the finding. */
  policyViolationSummary?: PolicyViolationSummary;
  /** Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests. */
  toxicCombination?: ToxicCombination;
  /** Represents operating system processes associated with the Finding. */
  processes?: ReadonlyArray<Process>;
  /** The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. */
  eventTime?: string;
  /** Log entries that are relevant to the finding. */
  logEntries?: ReadonlyArray<LogEntry>;
}

export const Finding: Schema.Schema<Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    job: Schema.optional(Job),
    cloudDlpInspection: Schema.optional(CloudDlpInspection),
    notebook: Schema.optional(Notebook),
    parentDisplayName: Schema.optional(Schema.String),
    groupMemberships: Schema.optional(Schema.Array(GroupMembership)),
    exfiltration: Schema.optional(Exfiltration),
    findingClass: Schema.optional(Schema.String),
    dataRetentionDeletionEvents: Schema.optional(
      Schema.Array(DataRetentionDeletionEvent),
    ),
    createTime: Schema.optional(Schema.String),
    chokepoint: Schema.optional(Chokepoint),
    muteInitiator: Schema.optional(Schema.String),
    muteUpdateTime: Schema.optional(Schema.String),
    connections: Schema.optional(Schema.Array(Connection)),
    externalUri: Schema.optional(Schema.String),
    secret: Schema.optional(Secret),
    agentDataAccessEvents: Schema.optional(Schema.Array(AgentDataAccessEvent)),
    parent: Schema.optional(Schema.String),
    securityPosture: Schema.optional(SecurityPosture),
    moduleName: Schema.optional(Schema.String),
    iamBindings: Schema.optional(Schema.Array(IamBinding)),
    discoveredWorkload: Schema.optional(DiscoveredWorkload),
    containers: Schema.optional(Schema.Array(Container)),
    compliances: Schema.optional(Schema.Array(Compliance)),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    ipRules: Schema.optional(IpRules),
    mitreAttack: Schema.optional(MitreAttack),
    sourceProperties: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    securityMarks: Schema.optional(SecurityMarks),
    indicator: Schema.optional(Indicator),
    category: Schema.optional(Schema.String),
    loadBalancers: Schema.optional(Schema.Array(LoadBalancer)),
    attackExposure: Schema.optional(AttackExposure),
    affectedResources: Schema.optional(AffectedResources),
    files: Schema.optional(Schema.Array(File)),
    orgPolicies: Schema.optional(Schema.Array(OrgPolicy)),
    dataAccessEvents: Schema.optional(Schema.Array(DataAccessEvent)),
    nextSteps: Schema.optional(Schema.String),
    complianceDetails: Schema.optional(ComplianceDetails),
    cloudArmor: Schema.optional(CloudArmor),
    externalSystems: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudSecuritycenterV1ExternalSystem),
    ),
    cloudDlpDataProfile: Schema.optional(CloudDlpDataProfile),
    muteInfo: Schema.optional(MuteInfo),
    networks: Schema.optional(Schema.Array(Network)),
    dataFlowEvents: Schema.optional(Schema.Array(DataFlowEvent)),
    vertexAi: Schema.optional(VertexAi),
    description: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    canonicalName: Schema.optional(Schema.String),
    artifactGuardPolicies: Schema.optional(ArtifactGuardPolicies),
    contacts: Schema.optional(Schema.Record(Schema.String, ContactDetails)),
    database: Schema.optional(Database),
    kernelRootkit: Schema.optional(KernelRootkit),
    mute: Schema.optional(Schema.String),
    access: Schema.optional(Access),
    aiModel: Schema.optional(AiModel),
    resourceName: Schema.optional(Schema.String),
    vulnerability: Schema.optional(Vulnerability),
    application: Schema.optional(Application),
    disk: Schema.optional(Disk),
    externalExposure: Schema.optional(ExternalExposure),
    kubernetes: Schema.optional(Kubernetes),
    backupDisasterRecovery: Schema.optional(BackupDisasterRecovery),
    policyViolationSummary: Schema.optional(PolicyViolationSummary),
    toxicCombination: Schema.optional(ToxicCombination),
    processes: Schema.optional(Schema.Array(Process)),
    eventTime: Schema.optional(Schema.String),
    logEntries: Schema.optional(Schema.Array(LogEntry)),
  }).annotate({ identifier: "Finding" });

export interface GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV1BulkMuteFindingsResponse: Schema.Schema<GoogleCloudSecuritycenterV1BulkMuteFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV1BulkMuteFindingsResponse",
  });

export interface GoogleCloudSecuritycenterV2BigQueryExport {
  /** The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). */
  dataset?: string;
  /** Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. */
  principal?: string;
  /** The description of the export (max of 1024 characters). */
  description?: string;
  /** Identifier. The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. The following list shows some examples: + `organizations/{organization_id}/locations/{location_id}/bigQueryExports/{export_id}` + `folders/{folder_id}/locations/{location_id}/bigQueryExports/{export_id}` + `projects/{project_id}/locations/{location_id}/bigQueryExports/{export_id}` This field is provided in responses, and is ignored when provided in create requests. */
  name?: string;
  /** Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. */
  createTime?: string;
  /** Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. */
  mostRecentEditor?: string;
  /** Output only. The resource name of the Cloud KMS `CryptoKey` used to protect this configuration's data, if configured during Security Command Center activation. */
  cryptoKeyName?: string;
  /** Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
  filter?: string;
  /** Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. */
  updateTime?: string;
}

export const GoogleCloudSecuritycenterV2BigQueryExport: Schema.Schema<GoogleCloudSecuritycenterV2BigQueryExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2BigQueryExport" });

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

export interface GoogleCloudSecuritycenterV1BigQueryExport {
  /** The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests. */
  name?: string;
  /** Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
  filter?: string;
  /** Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. */
  updateTime?: string;
  /** The description of the export (max of 1024 characters). */
  description?: string;
  /** Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. */
  mostRecentEditor?: string;
  /** The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). */
  dataset?: string;
  /** Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. */
  createTime?: string;
  /** Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. */
  principal?: string;
}

export const GoogleCloudSecuritycenterV1BigQueryExport: Schema.Schema<GoogleCloudSecuritycenterV1BigQueryExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    dataset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    principal: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1BigQueryExport" });

export interface SecurityHealthAnalyticsSettings {
  /** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name?: string;
  /** Output only. The service account used by Security Health Analytics detectors. */
  serviceAccount?: string;
  /** Output only. The time the settings were last updated. */
  updateTime?: string;
  /** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration. */
  modules?: Record<string, Config>;
}

export const SecurityHealthAnalyticsSettings: Schema.Schema<SecurityHealthAnalyticsSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceEnablementState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
  }).annotate({ identifier: "SecurityHealthAnalyticsSettings" });

export interface AdcSharedTemplateRevision {
  /** The resource name of an ADC Shared Template Revision. Format: projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/revisions/{revision} */
  name?: string;
}

export const AdcSharedTemplateRevision: Schema.Schema<AdcSharedTemplateRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdcSharedTemplateRevision" });

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

export interface AzureMetadata {
  /** The Azure resource group associated with the resource. */
  resourceGroup?: AzureResourceGroup;
  /** The Azure Entra tenant associated with the resource. */
  tenant?: AzureTenant;
  /** A list of Azure management groups associated with the resource, ordered from lowest level (closest to the subscription) to highest level. */
  managementGroups?: ReadonlyArray<AzureManagementGroup>;
  /** The Azure subscription associated with the resource. */
  subscription?: AzureSubscription;
}

export const AzureMetadata: Schema.Schema<AzureMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroup: Schema.optional(AzureResourceGroup),
    tenant: Schema.optional(AzureTenant),
    managementGroups: Schema.optional(Schema.Array(AzureManagementGroup)),
    subscription: Schema.optional(AzureSubscription),
  }).annotate({ identifier: "AzureMetadata" });

export interface GoogleCloudSecuritycenterV1Resource {
  /** Indicates which organization or tenant in the cloud provider the finding applies to. */
  organization?: string;
  /** The ADC shared template associated with the finding. */
  adcSharedTemplate?: AdcSharedTemplateRevision;
  /** The full resource name of project that the resource belongs to. */
  project?: string;
  /** The human readable name of the resource. */
  displayName?: string;
  /** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
  folders?: ReadonlyArray<Folder>;
  /** The project ID that the resource belongs to. */
  projectDisplayName?: string;
  /** The region or location of the service (if applicable). */
  location?: string;
  /** The full resource name of resource's parent. */
  parent?: string;
  /** The human readable name of resource's parent. */
  parentDisplayName?: string;
  /** Indicates which cloud provider the resource resides in. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The full resource type of the resource. */
  type?: string;
  /** The AWS metadata associated with the finding. */
  awsMetadata?: AwsMetadata;
  /** The App Hub application this resource belongs to. */
  application?: GoogleCloudSecuritycenterV1ResourceApplication;
  /** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
  name?: string;
  /** Provides the path to the resource within the resource hierarchy. */
  resourcePath?: ResourcePath;
  /** A string representation of the resource path. For Google Cloud, it has the format of `organizations/{organization_id}/folders/{folder_id}/folders/{folder_id}/projects/{project_id}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id}/ou/{organizational_unit_id}/ou/{organizational_unit_id}/account/{account_id}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id}/mg/{management_group_id}/subscription/{subscription_id}/rg/{resource_group_name}` where there can be any number of management groups. */
  resourcePathString?: string;
  /** The ADC application associated with the finding. */
  adcApplication?: AdcApplication;
  /** The parent service or product from which the resource is provided, for example, GKE or SNS. */
  service?: string;
  /** The Azure metadata associated with the finding. */
  azureMetadata?: AzureMetadata;
  /** The ADC template associated with the finding. */
  adcApplicationTemplate?: AdcApplicationTemplateRevision;
}

export const GoogleCloudSecuritycenterV1Resource: Schema.Schema<GoogleCloudSecuritycenterV1Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.optional(Schema.String),
    adcSharedTemplate: Schema.optional(AdcSharedTemplateRevision),
    project: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    folders: Schema.optional(Schema.Array(Folder)),
    projectDisplayName: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    parentDisplayName: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    awsMetadata: Schema.optional(AwsMetadata),
    application: Schema.optional(
      GoogleCloudSecuritycenterV1ResourceApplication,
    ),
    name: Schema.optional(Schema.String),
    resourcePath: Schema.optional(ResourcePath),
    resourcePathString: Schema.optional(Schema.String),
    adcApplication: Schema.optional(AdcApplication),
    service: Schema.optional(Schema.String),
    azureMetadata: Schema.optional(AzureMetadata),
    adcApplicationTemplate: Schema.optional(AdcApplicationTemplateRevision),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1Resource" });

export interface GoogleCloudSecuritycenterV1NotificationMessage {
  /** Name of the notification config that generated current notification. */
  notificationConfigName?: string;
  /** If it's a Finding based notification config, this field will be populated. */
  finding?: Finding;
  /** The Cloud resource tied to this notification's Finding. */
  resource?: GoogleCloudSecuritycenterV1Resource;
}

export const GoogleCloudSecuritycenterV1NotificationMessage: Schema.Schema<GoogleCloudSecuritycenterV1NotificationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notificationConfigName: Schema.optional(Schema.String),
    finding: Schema.optional(Finding),
    resource: Schema.optional(GoogleCloudSecuritycenterV1Resource),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1NotificationMessage" });

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

export interface Subscription {
  /** The resource name of the subscription. Format: organizations/{organization}/subscription */
  name?: string;
  /** The tier of SCC features this organization currently has access to. */
  tier?:
    | "TIER_UNSPECIFIED"
    | "STANDARD"
    | "PREMIUM"
    | "ENTERPRISE"
    | "ENTERPRISE_MC"
    | (string & {});
  /** The details of the most recent active subscription. If there has never been a subscription this will be empty. */
  details?: Details;
}

export const Subscription: Schema.Schema<Subscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    tier: Schema.optional(Schema.String),
    details: Schema.optional(Details),
  }).annotate({ identifier: "Subscription" });

export interface RapidVulnerabilityDetectionSettings {
  /** The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name?: string;
  /** Output only. The time the settings were last updated. */
  updateTime?: string;
  /** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
  serviceEnablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "INHERITED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
  modules?: Record<string, Config>;
}

export const RapidVulnerabilityDetectionSettings: Schema.Schema<RapidVulnerabilityDetectionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    serviceEnablementState: Schema.optional(Schema.String),
    modules: Schema.optional(Schema.Record(Schema.String, Config)),
  }).annotate({ identifier: "RapidVulnerabilityDetectionSettings" });

export interface GoogleCloudSecuritycenterV2Issue {
  /** Output only. The time the issue was last updated. */
  updateTime?: string;
  /** Additional resources associated with the issue. */
  secondaryResources?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueResource>;
  /** The mute information of the issue. */
  mute?: GoogleCloudSecuritycenterV2IssueMute;
  /** The finding category or rule name that generated the issue. */
  detection?: string;
  /** The exposure score of the issue. */
  exposureScore?: number;
  /** Output only. The time the issue was created. */
  createTime?: string;
  /** Identifier. The name of the issue. Format: organizations/{organization}/locations/{location}/issues/{issue} */
  name?: string;
  /** Output only. The state of the issue. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | (string & {});
  /** The description of the issue in Markdown format. */
  description?: string;
  /** The severity of the issue. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
  /** Approaches to remediate the issue in Markdown format. */
  remediations?: ReadonlyArray<string>;
  /** The type of the issue. */
  issueType?:
    | "ISSUE_TYPE_UNSPECIFIED"
    | "CHOKEPOINT"
    | "TOXIC_COMBINATION"
    | "INSIGHT"
    | (string & {});
  /** The findings related to the issue. */
  relatedFindings?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueFinding>;
  /** The primary resource associated with the issue. */
  primaryResource?: GoogleCloudSecuritycenterV2IssueResource;
  /** The security context of the issue. */
  securityContexts?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueSecurityContext>;
  /** The time the issue was last observed. */
  lastObservationTime?: string;
  /** The domains of the issue. */
  domains?: ReadonlyArray<GoogleCloudSecuritycenterV2IssueDomain>;
}

export const GoogleCloudSecuritycenterV2Issue: Schema.Schema<GoogleCloudSecuritycenterV2Issue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    secondaryResources: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueResource),
    ),
    mute: Schema.optional(GoogleCloudSecuritycenterV2IssueMute),
    detection: Schema.optional(Schema.String),
    exposureScore: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    remediations: Schema.optional(Schema.Array(Schema.String)),
    issueType: Schema.optional(Schema.String),
    relatedFindings: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueFinding),
    ),
    primaryResource: Schema.optional(GoogleCloudSecuritycenterV2IssueResource),
    securityContexts: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueSecurityContext),
    ),
    lastObservationTime: Schema.optional(Schema.String),
    domains: Schema.optional(
      Schema.Array(GoogleCloudSecuritycenterV2IssueDomain),
    ),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2Issue" });

export interface GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
  /** Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited. */
  ancestorModule?: string;
  /** Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. */
  name?: string;
  /** Output only. The time at which the custom module was last updated. */
  updateTime?: string;
  /** Output only. The editor that last updated the custom module. */
  lastEditor?: string;
  /** The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
  displayName?: string;
  /** The user specified custom configuration for the module. */
  customConfig?: GoogleCloudSecuritycenterV1CustomConfig;
  /** The cloud provider of the custom module. */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** The enablement state of the custom module. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "INHERITED"
    | (string & {});
}

export const GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule: Schema.Schema<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ancestorModule: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    lastEditor: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    customConfig: Schema.optional(GoogleCloudSecuritycenterV1CustomConfig),
    cloudProvider: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule",
  });

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

export interface GoogleCloudSecuritycenterV2BulkMuteFindingsResponse {}

export const GoogleCloudSecuritycenterV2BulkMuteFindingsResponse: Schema.Schema<GoogleCloudSecuritycenterV2BulkMuteFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudSecuritycenterV2BulkMuteFindingsResponse",
  });

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

export interface GoogleCloudSecuritycenterV1MuteConfig {
  /** Optional. The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings. */
  expiryTime?: string;
  /** This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}` */
  name?: string;
  /** A description of the mute config. */
  description?: string;
  /** Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. */
  mostRecentEditor?: string;
  /** The human readable name to be displayed for the mute config. */
  displayName?: string;
  /** Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. */
  createTime?: string;
  /** Optional. The type of the mute config, which determines what type of mute state the config affects. The static mute state takes precedence over the dynamic mute state. Immutable after creation. STATIC by default if not set during creation. */
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  /** Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:` */
  filter?: string;
  /** Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. */
  updateTime?: string;
}

export const GoogleCloudSecuritycenterV1MuteConfig: Schema.Schema<GoogleCloudSecuritycenterV1MuteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1MuteConfig" });

export interface VulnerabilitySnapshot {
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
  /** The time that the snapshot was taken. */
  snapshotTime?: string;
}

export const VulnerabilitySnapshot: Schema.Schema<VulnerabilitySnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findingCount: Schema.optional(VulnerabilityCountBySeverity),
    name: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    snapshotTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilitySnapshot" });

export interface GoogleCloudSecuritycenterV2MuteConfig {
  /** Optional. The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings. */
  expiryTime?: string;
  /** A description of the mute config. */
  description?: string;
  /** Identifier. This field will be ignored if provided on config creation. The following list shows some examples of the format: + `organizations/{organization}/muteConfigs/{mute_config}` + `organizations/{organization}locations/{location}//muteConfigs/{mute_config}` + `folders/{folder}/muteConfigs/{mute_config}` + `folders/{folder}/locations/{location}/muteConfigs/{mute_config}` + `projects/{project}/muteConfigs/{mute_config}` + `projects/{project}/locations/{location}/muteConfigs/{mute_config}` */
  name?: string;
  /** Required. The type of the mute config, which determines what type of mute state the config affects. Immutable after creation. */
  type?: "MUTE_CONFIG_TYPE_UNSPECIFIED" | "STATIC" | "DYNAMIC" | (string & {});
  /** Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. */
  createTime?: string;
  /** Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. */
  mostRecentEditor?: string;
  /** Output only. The resource name of the Cloud KMS `CryptoKey` used to encrypt this configuration data, if CMEK was enabled during Security Command Center activation. */
  cryptoKeyName?: string;
  /** Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:` */
  filter?: string;
  /** Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. */
  updateTime?: string;
}

export const GoogleCloudSecuritycenterV2MuteConfig: Schema.Schema<GoogleCloudSecuritycenterV2MuteConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    mostRecentEditor: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV2MuteConfig" });

export interface GoogleCloudSecuritycenterV1ResourceValueConfig {
  /** Required. Resource value level this expression represents */
  resourceValue?:
    | "RESOURCE_VALUE_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "NONE"
    | (string & {});
  /** Output only. Timestamp this resource value configuration was last updated. */
  updateTime?: string;
  /** Required. Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing */
  tagValues?: ReadonlyArray<string>;
  /** List of resource labels to search for, evaluated with `AND`. For example, `"resource_labels_selector": {"key": "value", "env": "prod"}` will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels */
  resourceLabelsSelector?: Record<string, string>;
  /** Output only. Timestamp this resource value configuration was created. */
  createTime?: string;
  /** Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources. */
  resourceType?: string;
  /** A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset". */
  sensitiveDataProtectionMapping?: GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping;
  /** Description of the resource value configuration. */
  description?: string;
  /** Name for the resource value configuration */
  name?: string;
  /** Cloud provider this configuration applies to */
  cloudProvider?:
    | "CLOUD_PROVIDER_UNSPECIFIED"
    | "GOOGLE_CLOUD_PLATFORM"
    | "AMAZON_WEB_SERVICES"
    | "MICROSOFT_AZURE"
    | (string & {});
  /** Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope will be checked with `AND` of other resources. */
  scope?: string;
}

export const GoogleCloudSecuritycenterV1ResourceValueConfig: Schema.Schema<GoogleCloudSecuritycenterV1ResourceValueConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceValue: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tagValues: Schema.optional(Schema.Array(Schema.String)),
    resourceLabelsSelector: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    createTime: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    sensitiveDataProtectionMapping: Schema.optional(
      GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping,
    ),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    cloudProvider: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudSecuritycenterV1ResourceValueConfig" });

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

export interface GetContainerThreatDetectionSettingsProjectsRequest {
  /** Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
}

export const GetContainerThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetContainerThreatDetectionSettingsProjectsRequest>;

export type GetContainerThreatDetectionSettingsProjectsResponse =
  ContainerThreatDetectionSettings;
export const GetContainerThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type GetContainerThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose. */
export const getContainerThreatDetectionSettingsProjects: API.OperationMethod<
  GetContainerThreatDetectionSettingsProjectsRequest,
  GetContainerThreatDetectionSettingsProjectsResponse,
  GetContainerThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContainerThreatDetectionSettingsProjectsRequest,
  output: GetContainerThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateRapidVulnerabilityDetectionSettingsProjectsRequest {
  /** The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: RapidVulnerabilityDetectionSettings;
}

export const UpdateRapidVulnerabilityDetectionSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RapidVulnerabilityDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateRapidVulnerabilityDetectionSettingsProjectsRequest>;

export type UpdateRapidVulnerabilityDetectionSettingsProjectsResponse =
  RapidVulnerabilityDetectionSettings;
export const UpdateRapidVulnerabilityDetectionSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type UpdateRapidVulnerabilityDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the RapidVulnerabilityDetectionSettings resource. */
export const updateRapidVulnerabilityDetectionSettingsProjects: API.OperationMethod<
  UpdateRapidVulnerabilityDetectionSettingsProjectsRequest,
  UpdateRapidVulnerabilityDetectionSettingsProjectsResponse,
  UpdateRapidVulnerabilityDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRapidVulnerabilityDetectionSettingsProjectsRequest,
  output: UpdateRapidVulnerabilityDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEventThreatDetectionSettingsProjectsRequest {
  /** Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
}

export const GetEventThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEventThreatDetectionSettingsProjectsRequest>;

export type GetEventThreatDetectionSettingsProjectsResponse =
  EventThreatDetectionSettings;
export const GetEventThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type GetEventThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose. */
export const getEventThreatDetectionSettingsProjects: API.OperationMethod<
  GetEventThreatDetectionSettingsProjectsRequest,
  GetEventThreatDetectionSettingsProjectsResponse,
  GetEventThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventThreatDetectionSettingsProjectsRequest,
  output: GetEventThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetWebSecurityScannerSettingsProjectsRequest {
  /** Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
}

export const GetWebSecurityScannerSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetWebSecurityScannerSettingsProjectsRequest>;

export type GetWebSecurityScannerSettingsProjectsResponse =
  WebSecurityScannerSettings;
export const GetWebSecurityScannerSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type GetWebSecurityScannerSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose. */
export const getWebSecurityScannerSettingsProjects: API.OperationMethod<
  GetWebSecurityScannerSettingsProjectsRequest,
  GetWebSecurityScannerSettingsProjectsResponse,
  GetWebSecurityScannerSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWebSecurityScannerSettingsProjectsRequest,
  output: GetWebSecurityScannerSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetRapidVulnerabilityDetectionSettingsProjectsRequest {
  /** Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
}

export const GetRapidVulnerabilityDetectionSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetRapidVulnerabilityDetectionSettingsProjectsRequest>;

export type GetRapidVulnerabilityDetectionSettingsProjectsResponse =
  RapidVulnerabilityDetectionSettings;
export const GetRapidVulnerabilityDetectionSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type GetRapidVulnerabilityDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose. */
export const getRapidVulnerabilityDetectionSettingsProjects: API.OperationMethod<
  GetRapidVulnerabilityDetectionSettingsProjectsRequest,
  GetRapidVulnerabilityDetectionSettingsProjectsResponse,
  GetRapidVulnerabilityDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRapidVulnerabilityDetectionSettingsProjectsRequest,
  output: GetRapidVulnerabilityDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSecurityCenterSettingsProjectsRequest {
  /** Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings */
  name: string;
}

export const GetSecurityCenterSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSecurityCenterSettingsProjectsRequest>;

export type GetSecurityCenterSettingsProjectsResponse = SecurityCenterSettings;
export const GetSecurityCenterSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityCenterSettings;

export type GetSecurityCenterSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the SecurityCenterSettings resource. */
export const getSecurityCenterSettingsProjects: API.OperationMethod<
  GetSecurityCenterSettingsProjectsRequest,
  GetSecurityCenterSettingsProjectsResponse,
  GetSecurityCenterSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSecurityCenterSettingsProjectsRequest,
  output: GetSecurityCenterSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEventThreatDetectionSettingsProjectsRequest {
  /** Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionSettings;
}

export const UpdateEventThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateEventThreatDetectionSettingsProjectsRequest>;

export type UpdateEventThreatDetectionSettingsProjectsResponse =
  EventThreatDetectionSettings;
export const UpdateEventThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type UpdateEventThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the EventThreatDetectionSettings resource. */
export const updateEventThreatDetectionSettingsProjects: API.OperationMethod<
  UpdateEventThreatDetectionSettingsProjectsRequest,
  UpdateEventThreatDetectionSettingsProjectsResponse,
  UpdateEventThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventThreatDetectionSettingsProjectsRequest,
  output: UpdateEventThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateVirtualMachineThreatDetectionSettingsProjectsRequest {
  /** Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: VirtualMachineThreatDetectionSettings;
}

export const UpdateVirtualMachineThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VirtualMachineThreatDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateVirtualMachineThreatDetectionSettingsProjectsRequest>;

export type UpdateVirtualMachineThreatDetectionSettingsProjectsResponse =
  VirtualMachineThreatDetectionSettings;
export const UpdateVirtualMachineThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type UpdateVirtualMachineThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the VirtualMachineThreatDetectionSettings resource. */
export const updateVirtualMachineThreatDetectionSettingsProjects: API.OperationMethod<
  UpdateVirtualMachineThreatDetectionSettingsProjectsRequest,
  UpdateVirtualMachineThreatDetectionSettingsProjectsResponse,
  UpdateVirtualMachineThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateVirtualMachineThreatDetectionSettingsProjectsRequest,
  output: UpdateVirtualMachineThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateWebSecurityScannerSettingsProjectsRequest {
  /** Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: WebSecurityScannerSettings;
}

export const UpdateWebSecurityScannerSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WebSecurityScannerSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateWebSecurityScannerSettingsProjectsRequest>;

export type UpdateWebSecurityScannerSettingsProjectsResponse =
  WebSecurityScannerSettings;
export const UpdateWebSecurityScannerSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type UpdateWebSecurityScannerSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the WebSecurityScannerSettings resource. */
export const updateWebSecurityScannerSettingsProjects: API.OperationMethod<
  UpdateWebSecurityScannerSettingsProjectsRequest,
  UpdateWebSecurityScannerSettingsProjectsResponse,
  UpdateWebSecurityScannerSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateWebSecurityScannerSettingsProjectsRequest,
  output: UpdateWebSecurityScannerSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetVirtualMachineThreatDetectionSettingsProjectsRequest {
  /** Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
}

export const GetVirtualMachineThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetVirtualMachineThreatDetectionSettingsProjectsRequest>;

export type GetVirtualMachineThreatDetectionSettingsProjectsResponse =
  VirtualMachineThreatDetectionSettings;
export const GetVirtualMachineThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type GetVirtualMachineThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose. */
export const getVirtualMachineThreatDetectionSettingsProjects: API.OperationMethod<
  GetVirtualMachineThreatDetectionSettingsProjectsRequest,
  GetVirtualMachineThreatDetectionSettingsProjectsResponse,
  GetVirtualMachineThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVirtualMachineThreatDetectionSettingsProjectsRequest,
  output: GetVirtualMachineThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateContainerThreatDetectionSettingsProjectsRequest {
  /** Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: ContainerThreatDetectionSettings;
}

export const UpdateContainerThreatDetectionSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContainerThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateContainerThreatDetectionSettingsProjectsRequest>;

export type UpdateContainerThreatDetectionSettingsProjectsResponse =
  ContainerThreatDetectionSettings;
export const UpdateContainerThreatDetectionSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type UpdateContainerThreatDetectionSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the ContainerThreatDetectionSettings resource. */
export const updateContainerThreatDetectionSettingsProjects: API.OperationMethod<
  UpdateContainerThreatDetectionSettingsProjectsRequest,
  UpdateContainerThreatDetectionSettingsProjectsResponse,
  UpdateContainerThreatDetectionSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateContainerThreatDetectionSettingsProjectsRequest,
  output: UpdateContainerThreatDetectionSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecurityHealthAnalyticsSettingsProjectsRequest {
  /** Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
}

export const GetSecurityHealthAnalyticsSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSecurityHealthAnalyticsSettingsProjectsRequest>;

export type GetSecurityHealthAnalyticsSettingsProjectsResponse =
  SecurityHealthAnalyticsSettings;
export const GetSecurityHealthAnalyticsSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type GetSecurityHealthAnalyticsSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose. */
export const getSecurityHealthAnalyticsSettingsProjects: API.OperationMethod<
  GetSecurityHealthAnalyticsSettingsProjectsRequest,
  GetSecurityHealthAnalyticsSettingsProjectsResponse,
  GetSecurityHealthAnalyticsSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSecurityHealthAnalyticsSettingsProjectsRequest,
  output: GetSecurityHealthAnalyticsSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSecurityHealthAnalyticsSettingsProjectsRequest {
  /** Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SecurityHealthAnalyticsSettings;
}

export const UpdateSecurityHealthAnalyticsSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityHealthAnalyticsSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityHealthAnalyticsSettingsProjectsRequest>;

export type UpdateSecurityHealthAnalyticsSettingsProjectsResponse =
  SecurityHealthAnalyticsSettings;
export const UpdateSecurityHealthAnalyticsSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type UpdateSecurityHealthAnalyticsSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the SecurityHealthAnalyticsSettings resource. */
export const updateSecurityHealthAnalyticsSettingsProjects: API.OperationMethod<
  UpdateSecurityHealthAnalyticsSettingsProjectsRequest,
  UpdateSecurityHealthAnalyticsSettingsProjectsResponse,
  UpdateSecurityHealthAnalyticsSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityHealthAnalyticsSettingsProjectsRequest,
  output: UpdateSecurityHealthAnalyticsSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CalculateProjectsContainerThreatDetectionSettingsRequest {
  /** Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsContainerThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateProjectsContainerThreatDetectionSettingsRequest>;

export type CalculateProjectsContainerThreatDetectionSettingsResponse =
  ContainerThreatDetectionSettings;
export const CalculateProjectsContainerThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type CalculateProjectsContainerThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateProjectsContainerThreatDetectionSettings: API.OperationMethod<
  CalculateProjectsContainerThreatDetectionSettingsRequest,
  CalculateProjectsContainerThreatDetectionSettingsResponse,
  CalculateProjectsContainerThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateProjectsContainerThreatDetectionSettingsRequest,
  output: CalculateProjectsContainerThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsWebSecurityScannerSettingsRequest {
  /** Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsWebSecurityScannerSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateProjectsWebSecurityScannerSettingsRequest>;

export type CalculateProjectsWebSecurityScannerSettingsResponse =
  WebSecurityScannerSettings;
export const CalculateProjectsWebSecurityScannerSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type CalculateProjectsWebSecurityScannerSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateProjectsWebSecurityScannerSettings: API.OperationMethod<
  CalculateProjectsWebSecurityScannerSettingsRequest,
  CalculateProjectsWebSecurityScannerSettingsResponse,
  CalculateProjectsWebSecurityScannerSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateProjectsWebSecurityScannerSettingsRequest,
  output: CalculateProjectsWebSecurityScannerSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsVirtualMachineThreatDetectionSettingsRequest {
  /** Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsVirtualMachineThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateProjectsVirtualMachineThreatDetectionSettingsRequest>;

export type CalculateProjectsVirtualMachineThreatDetectionSettingsResponse =
  VirtualMachineThreatDetectionSettings;
export const CalculateProjectsVirtualMachineThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type CalculateProjectsVirtualMachineThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateProjectsVirtualMachineThreatDetectionSettings: API.OperationMethod<
  CalculateProjectsVirtualMachineThreatDetectionSettingsRequest,
  CalculateProjectsVirtualMachineThreatDetectionSettingsResponse,
  CalculateProjectsVirtualMachineThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateProjectsVirtualMachineThreatDetectionSettingsRequest,
  output: CalculateProjectsVirtualMachineThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsRapidVulnerabilityDetectionSettingsRequest {
  /** Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
}

export const CalculateProjectsRapidVulnerabilityDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateProjectsRapidVulnerabilityDetectionSettingsRequest>;

export type CalculateProjectsRapidVulnerabilityDetectionSettingsResponse =
  RapidVulnerabilityDetectionSettings;
export const CalculateProjectsRapidVulnerabilityDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type CalculateProjectsRapidVulnerabilityDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateProjectsRapidVulnerabilityDetectionSettings: API.OperationMethod<
  CalculateProjectsRapidVulnerabilityDetectionSettingsRequest,
  CalculateProjectsRapidVulnerabilityDetectionSettingsResponse,
  CalculateProjectsRapidVulnerabilityDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateProjectsRapidVulnerabilityDetectionSettingsRequest,
  output: CalculateProjectsRapidVulnerabilityDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsEventThreatDetectionSettingsRequest {
  /** Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateProjectsEventThreatDetectionSettingsRequest>;

export type CalculateProjectsEventThreatDetectionSettingsResponse =
  EventThreatDetectionSettings;
export const CalculateProjectsEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type CalculateProjectsEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateProjectsEventThreatDetectionSettings: API.OperationMethod<
  CalculateProjectsEventThreatDetectionSettingsRequest,
  CalculateProjectsEventThreatDetectionSettingsResponse,
  CalculateProjectsEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateProjectsEventThreatDetectionSettingsRequest,
  output: CalculateProjectsEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateProjectsSecurityHealthAnalyticsSettingsRequest {
  /** Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsSecurityHealthAnalyticsSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateProjectsSecurityHealthAnalyticsSettingsRequest>;

export type CalculateProjectsSecurityHealthAnalyticsSettingsResponse =
  SecurityHealthAnalyticsSettings;
export const CalculateProjectsSecurityHealthAnalyticsSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type CalculateProjectsSecurityHealthAnalyticsSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateProjectsSecurityHealthAnalyticsSettings: API.OperationMethod<
  CalculateProjectsSecurityHealthAnalyticsSettingsRequest,
  CalculateProjectsSecurityHealthAnalyticsSettingsResponse,
  CalculateProjectsSecurityHealthAnalyticsSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateProjectsSecurityHealthAnalyticsSettingsRequest,
  output: CalculateProjectsSecurityHealthAnalyticsSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest {
  /** Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
}

export const GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest>;

export type GetContainerThreatDetectionSettingsProjectsLocationsClustersResponse =
  ContainerThreatDetectionSettings;
export const GetContainerThreatDetectionSettingsProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type GetContainerThreatDetectionSettingsProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose. */
export const getContainerThreatDetectionSettingsProjectsLocationsClusters: API.OperationMethod<
  GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest,
  GetContainerThreatDetectionSettingsProjectsLocationsClustersResponse,
  GetContainerThreatDetectionSettingsProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContainerThreatDetectionSettingsProjectsLocationsClustersRequest,
  output: GetContainerThreatDetectionSettingsProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest {
  /** Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: ContainerThreatDetectionSettings;
}

export const UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContainerThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest>;

export type UpdateContainerThreatDetectionSettingsProjectsLocationsClustersResponse =
  ContainerThreatDetectionSettings;
export const UpdateContainerThreatDetectionSettingsProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type UpdateContainerThreatDetectionSettingsProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the ContainerThreatDetectionSettings resource. */
export const updateContainerThreatDetectionSettingsProjectsLocationsClusters: API.OperationMethod<
  UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest,
  UpdateContainerThreatDetectionSettingsProjectsLocationsClustersResponse,
  UpdateContainerThreatDetectionSettingsProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateContainerThreatDetectionSettingsProjectsLocationsClustersRequest,
  output:
    UpdateContainerThreatDetectionSettingsProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest {
  /** Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest>;

export type CalculateProjectsLocationsClustersContainerThreatDetectionSettingsResponse =
  ContainerThreatDetectionSettings;
export const CalculateProjectsLocationsClustersContainerThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type CalculateProjectsLocationsClustersContainerThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateProjectsLocationsClustersContainerThreatDetectionSettings: API.OperationMethod<
  CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest,
  CalculateProjectsLocationsClustersContainerThreatDetectionSettingsResponse,
  CalculateProjectsLocationsClustersContainerThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    CalculateProjectsLocationsClustersContainerThreatDetectionSettingsRequest,
  output:
    CalculateProjectsLocationsClustersContainerThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateWebSecurityScannerSettingsFoldersRequest {
  /** Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: WebSecurityScannerSettings;
}

export const UpdateWebSecurityScannerSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WebSecurityScannerSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateWebSecurityScannerSettingsFoldersRequest>;

export type UpdateWebSecurityScannerSettingsFoldersResponse =
  WebSecurityScannerSettings;
export const UpdateWebSecurityScannerSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type UpdateWebSecurityScannerSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the WebSecurityScannerSettings resource. */
export const updateWebSecurityScannerSettingsFolders: API.OperationMethod<
  UpdateWebSecurityScannerSettingsFoldersRequest,
  UpdateWebSecurityScannerSettingsFoldersResponse,
  UpdateWebSecurityScannerSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateWebSecurityScannerSettingsFoldersRequest,
  output: UpdateWebSecurityScannerSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateSecurityHealthAnalyticsSettingsFoldersRequest {
  /** Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SecurityHealthAnalyticsSettings;
}

export const UpdateSecurityHealthAnalyticsSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityHealthAnalyticsSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityHealthAnalyticsSettingsFoldersRequest>;

export type UpdateSecurityHealthAnalyticsSettingsFoldersResponse =
  SecurityHealthAnalyticsSettings;
export const UpdateSecurityHealthAnalyticsSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type UpdateSecurityHealthAnalyticsSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the SecurityHealthAnalyticsSettings resource. */
export const updateSecurityHealthAnalyticsSettingsFolders: API.OperationMethod<
  UpdateSecurityHealthAnalyticsSettingsFoldersRequest,
  UpdateSecurityHealthAnalyticsSettingsFoldersResponse,
  UpdateSecurityHealthAnalyticsSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityHealthAnalyticsSettingsFoldersRequest,
  output: UpdateSecurityHealthAnalyticsSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateContainerThreatDetectionSettingsFoldersRequest {
  /** Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: ContainerThreatDetectionSettings;
}

export const UpdateContainerThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContainerThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateContainerThreatDetectionSettingsFoldersRequest>;

export type UpdateContainerThreatDetectionSettingsFoldersResponse =
  ContainerThreatDetectionSettings;
export const UpdateContainerThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type UpdateContainerThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the ContainerThreatDetectionSettings resource. */
export const updateContainerThreatDetectionSettingsFolders: API.OperationMethod<
  UpdateContainerThreatDetectionSettingsFoldersRequest,
  UpdateContainerThreatDetectionSettingsFoldersResponse,
  UpdateContainerThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateContainerThreatDetectionSettingsFoldersRequest,
  output: UpdateContainerThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecurityHealthAnalyticsSettingsFoldersRequest {
  /** Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
}

export const GetSecurityHealthAnalyticsSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSecurityHealthAnalyticsSettingsFoldersRequest>;

export type GetSecurityHealthAnalyticsSettingsFoldersResponse =
  SecurityHealthAnalyticsSettings;
export const GetSecurityHealthAnalyticsSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type GetSecurityHealthAnalyticsSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose. */
export const getSecurityHealthAnalyticsSettingsFolders: API.OperationMethod<
  GetSecurityHealthAnalyticsSettingsFoldersRequest,
  GetSecurityHealthAnalyticsSettingsFoldersResponse,
  GetSecurityHealthAnalyticsSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSecurityHealthAnalyticsSettingsFoldersRequest,
  output: GetSecurityHealthAnalyticsSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetVirtualMachineThreatDetectionSettingsFoldersRequest {
  /** Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
}

export const GetVirtualMachineThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetVirtualMachineThreatDetectionSettingsFoldersRequest>;

export type GetVirtualMachineThreatDetectionSettingsFoldersResponse =
  VirtualMachineThreatDetectionSettings;
export const GetVirtualMachineThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type GetVirtualMachineThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose. */
export const getVirtualMachineThreatDetectionSettingsFolders: API.OperationMethod<
  GetVirtualMachineThreatDetectionSettingsFoldersRequest,
  GetVirtualMachineThreatDetectionSettingsFoldersResponse,
  GetVirtualMachineThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVirtualMachineThreatDetectionSettingsFoldersRequest,
  output: GetVirtualMachineThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateVirtualMachineThreatDetectionSettingsFoldersRequest {
  /** Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: VirtualMachineThreatDetectionSettings;
}

export const UpdateVirtualMachineThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VirtualMachineThreatDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateVirtualMachineThreatDetectionSettingsFoldersRequest>;

export type UpdateVirtualMachineThreatDetectionSettingsFoldersResponse =
  VirtualMachineThreatDetectionSettings;
export const UpdateVirtualMachineThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type UpdateVirtualMachineThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the VirtualMachineThreatDetectionSettings resource. */
export const updateVirtualMachineThreatDetectionSettingsFolders: API.OperationMethod<
  UpdateVirtualMachineThreatDetectionSettingsFoldersRequest,
  UpdateVirtualMachineThreatDetectionSettingsFoldersResponse,
  UpdateVirtualMachineThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateVirtualMachineThreatDetectionSettingsFoldersRequest,
  output: UpdateVirtualMachineThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecurityCenterSettingsFoldersRequest {
  /** Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings */
  name: string;
}

export const GetSecurityCenterSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSecurityCenterSettingsFoldersRequest>;

export type GetSecurityCenterSettingsFoldersResponse = SecurityCenterSettings;
export const GetSecurityCenterSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityCenterSettings;

export type GetSecurityCenterSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the SecurityCenterSettings resource. */
export const getSecurityCenterSettingsFolders: API.OperationMethod<
  GetSecurityCenterSettingsFoldersRequest,
  GetSecurityCenterSettingsFoldersResponse,
  GetSecurityCenterSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSecurityCenterSettingsFoldersRequest,
  output: GetSecurityCenterSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEventThreatDetectionSettingsFoldersRequest {
  /** Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionSettings;
}

export const UpdateEventThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateEventThreatDetectionSettingsFoldersRequest>;

export type UpdateEventThreatDetectionSettingsFoldersResponse =
  EventThreatDetectionSettings;
export const UpdateEventThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type UpdateEventThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the EventThreatDetectionSettings resource. */
export const updateEventThreatDetectionSettingsFolders: API.OperationMethod<
  UpdateEventThreatDetectionSettingsFoldersRequest,
  UpdateEventThreatDetectionSettingsFoldersResponse,
  UpdateEventThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventThreatDetectionSettingsFoldersRequest,
  output: UpdateEventThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetRapidVulnerabilityDetectionSettingsFoldersRequest {
  /** Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
}

export const GetRapidVulnerabilityDetectionSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetRapidVulnerabilityDetectionSettingsFoldersRequest>;

export type GetRapidVulnerabilityDetectionSettingsFoldersResponse =
  RapidVulnerabilityDetectionSettings;
export const GetRapidVulnerabilityDetectionSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type GetRapidVulnerabilityDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose. */
export const getRapidVulnerabilityDetectionSettingsFolders: API.OperationMethod<
  GetRapidVulnerabilityDetectionSettingsFoldersRequest,
  GetRapidVulnerabilityDetectionSettingsFoldersResponse,
  GetRapidVulnerabilityDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRapidVulnerabilityDetectionSettingsFoldersRequest,
  output: GetRapidVulnerabilityDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetWebSecurityScannerSettingsFoldersRequest {
  /** Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
}

export const GetWebSecurityScannerSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetWebSecurityScannerSettingsFoldersRequest>;

export type GetWebSecurityScannerSettingsFoldersResponse =
  WebSecurityScannerSettings;
export const GetWebSecurityScannerSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type GetWebSecurityScannerSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose. */
export const getWebSecurityScannerSettingsFolders: API.OperationMethod<
  GetWebSecurityScannerSettingsFoldersRequest,
  GetWebSecurityScannerSettingsFoldersResponse,
  GetWebSecurityScannerSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWebSecurityScannerSettingsFoldersRequest,
  output: GetWebSecurityScannerSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetContainerThreatDetectionSettingsFoldersRequest {
  /** Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
}

export const GetContainerThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetContainerThreatDetectionSettingsFoldersRequest>;

export type GetContainerThreatDetectionSettingsFoldersResponse =
  ContainerThreatDetectionSettings;
export const GetContainerThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type GetContainerThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose. */
export const getContainerThreatDetectionSettingsFolders: API.OperationMethod<
  GetContainerThreatDetectionSettingsFoldersRequest,
  GetContainerThreatDetectionSettingsFoldersResponse,
  GetContainerThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContainerThreatDetectionSettingsFoldersRequest,
  output: GetContainerThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateRapidVulnerabilityDetectionSettingsFoldersRequest {
  /** The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: RapidVulnerabilityDetectionSettings;
}

export const UpdateRapidVulnerabilityDetectionSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RapidVulnerabilityDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateRapidVulnerabilityDetectionSettingsFoldersRequest>;

export type UpdateRapidVulnerabilityDetectionSettingsFoldersResponse =
  RapidVulnerabilityDetectionSettings;
export const UpdateRapidVulnerabilityDetectionSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type UpdateRapidVulnerabilityDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the RapidVulnerabilityDetectionSettings resource. */
export const updateRapidVulnerabilityDetectionSettingsFolders: API.OperationMethod<
  UpdateRapidVulnerabilityDetectionSettingsFoldersRequest,
  UpdateRapidVulnerabilityDetectionSettingsFoldersResponse,
  UpdateRapidVulnerabilityDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRapidVulnerabilityDetectionSettingsFoldersRequest,
  output: UpdateRapidVulnerabilityDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEventThreatDetectionSettingsFoldersRequest {
  /** Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
}

export const GetEventThreatDetectionSettingsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEventThreatDetectionSettingsFoldersRequest>;

export type GetEventThreatDetectionSettingsFoldersResponse =
  EventThreatDetectionSettings;
export const GetEventThreatDetectionSettingsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type GetEventThreatDetectionSettingsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose. */
export const getEventThreatDetectionSettingsFolders: API.OperationMethod<
  GetEventThreatDetectionSettingsFoldersRequest,
  GetEventThreatDetectionSettingsFoldersResponse,
  GetEventThreatDetectionSettingsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventThreatDetectionSettingsFoldersRequest,
  output: GetEventThreatDetectionSettingsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersEventThreatDetectionSettingsRequest {
  /** Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateFoldersEventThreatDetectionSettingsRequest>;

export type CalculateFoldersEventThreatDetectionSettingsResponse =
  EventThreatDetectionSettings;
export const CalculateFoldersEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type CalculateFoldersEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateFoldersEventThreatDetectionSettings: API.OperationMethod<
  CalculateFoldersEventThreatDetectionSettingsRequest,
  CalculateFoldersEventThreatDetectionSettingsResponse,
  CalculateFoldersEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateFoldersEventThreatDetectionSettingsRequest,
  output: CalculateFoldersEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersSecurityHealthAnalyticsSettingsRequest {
  /** Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersSecurityHealthAnalyticsSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateFoldersSecurityHealthAnalyticsSettingsRequest>;

export type CalculateFoldersSecurityHealthAnalyticsSettingsResponse =
  SecurityHealthAnalyticsSettings;
export const CalculateFoldersSecurityHealthAnalyticsSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type CalculateFoldersSecurityHealthAnalyticsSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateFoldersSecurityHealthAnalyticsSettings: API.OperationMethod<
  CalculateFoldersSecurityHealthAnalyticsSettingsRequest,
  CalculateFoldersSecurityHealthAnalyticsSettingsResponse,
  CalculateFoldersSecurityHealthAnalyticsSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateFoldersSecurityHealthAnalyticsSettingsRequest,
  output: CalculateFoldersSecurityHealthAnalyticsSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersWebSecurityScannerSettingsRequest {
  /** Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersWebSecurityScannerSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateFoldersWebSecurityScannerSettingsRequest>;

export type CalculateFoldersWebSecurityScannerSettingsResponse =
  WebSecurityScannerSettings;
export const CalculateFoldersWebSecurityScannerSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type CalculateFoldersWebSecurityScannerSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateFoldersWebSecurityScannerSettings: API.OperationMethod<
  CalculateFoldersWebSecurityScannerSettingsRequest,
  CalculateFoldersWebSecurityScannerSettingsResponse,
  CalculateFoldersWebSecurityScannerSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateFoldersWebSecurityScannerSettingsRequest,
  output: CalculateFoldersWebSecurityScannerSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersContainerThreatDetectionSettingsRequest {
  /** Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersContainerThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateFoldersContainerThreatDetectionSettingsRequest>;

export type CalculateFoldersContainerThreatDetectionSettingsResponse =
  ContainerThreatDetectionSettings;
export const CalculateFoldersContainerThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type CalculateFoldersContainerThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateFoldersContainerThreatDetectionSettings: API.OperationMethod<
  CalculateFoldersContainerThreatDetectionSettingsRequest,
  CalculateFoldersContainerThreatDetectionSettingsResponse,
  CalculateFoldersContainerThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateFoldersContainerThreatDetectionSettingsRequest,
  output: CalculateFoldersContainerThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersVirtualMachineThreatDetectionSettingsRequest {
  /** Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateFoldersVirtualMachineThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateFoldersVirtualMachineThreatDetectionSettingsRequest>;

export type CalculateFoldersVirtualMachineThreatDetectionSettingsResponse =
  VirtualMachineThreatDetectionSettings;
export const CalculateFoldersVirtualMachineThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type CalculateFoldersVirtualMachineThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateFoldersVirtualMachineThreatDetectionSettings: API.OperationMethod<
  CalculateFoldersVirtualMachineThreatDetectionSettingsRequest,
  CalculateFoldersVirtualMachineThreatDetectionSettingsResponse,
  CalculateFoldersVirtualMachineThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateFoldersVirtualMachineThreatDetectionSettingsRequest,
  output: CalculateFoldersVirtualMachineThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateFoldersRapidVulnerabilityDetectionSettingsRequest {
  /** Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
}

export const CalculateFoldersRapidVulnerabilityDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateFoldersRapidVulnerabilityDetectionSettingsRequest>;

export type CalculateFoldersRapidVulnerabilityDetectionSettingsResponse =
  RapidVulnerabilityDetectionSettings;
export const CalculateFoldersRapidVulnerabilityDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type CalculateFoldersRapidVulnerabilityDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateFoldersRapidVulnerabilityDetectionSettings: API.OperationMethod<
  CalculateFoldersRapidVulnerabilityDetectionSettingsRequest,
  CalculateFoldersRapidVulnerabilityDetectionSettingsResponse,
  CalculateFoldersRapidVulnerabilityDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateFoldersRapidVulnerabilityDetectionSettingsRequest,
  output: CalculateFoldersRapidVulnerabilityDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSecurityCenterSettingsOrganizationsRequest {
  /** Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings */
  name: string;
}

export const GetSecurityCenterSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSecurityCenterSettingsOrganizationsRequest>;

export type GetSecurityCenterSettingsOrganizationsResponse =
  SecurityCenterSettings;
export const GetSecurityCenterSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityCenterSettings;

export type GetSecurityCenterSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the SecurityCenterSettings resource. */
export const getSecurityCenterSettingsOrganizations: API.OperationMethod<
  GetSecurityCenterSettingsOrganizationsRequest,
  GetSecurityCenterSettingsOrganizationsResponse,
  GetSecurityCenterSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSecurityCenterSettingsOrganizationsRequest,
  output: GetSecurityCenterSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateEventThreatDetectionSettingsOrganizationsRequest {
  /** Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: EventThreatDetectionSettings;
}

export const UpdateEventThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateEventThreatDetectionSettingsOrganizationsRequest>;

export type UpdateEventThreatDetectionSettingsOrganizationsResponse =
  EventThreatDetectionSettings;
export const UpdateEventThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type UpdateEventThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the EventThreatDetectionSettings resource. */
export const updateEventThreatDetectionSettingsOrganizations: API.OperationMethod<
  UpdateEventThreatDetectionSettingsOrganizationsRequest,
  UpdateEventThreatDetectionSettingsOrganizationsResponse,
  UpdateEventThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateEventThreatDetectionSettingsOrganizationsRequest,
  output: UpdateEventThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest {
  /** Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: VirtualMachineThreatDetectionSettings;
}

export const UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VirtualMachineThreatDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest>;

export type UpdateVirtualMachineThreatDetectionSettingsOrganizationsResponse =
  VirtualMachineThreatDetectionSettings;
export const UpdateVirtualMachineThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type UpdateVirtualMachineThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the VirtualMachineThreatDetectionSettings resource. */
export const updateVirtualMachineThreatDetectionSettingsOrganizations: API.OperationMethod<
  UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest,
  UpdateVirtualMachineThreatDetectionSettingsOrganizationsResponse,
  UpdateVirtualMachineThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateVirtualMachineThreatDetectionSettingsOrganizationsRequest,
  output: UpdateVirtualMachineThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetVirtualMachineThreatDetectionSettingsOrganizationsRequest {
  /** Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
}

export const GetVirtualMachineThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetVirtualMachineThreatDetectionSettingsOrganizationsRequest>;

export type GetVirtualMachineThreatDetectionSettingsOrganizationsResponse =
  VirtualMachineThreatDetectionSettings;
export const GetVirtualMachineThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type GetVirtualMachineThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose. */
export const getVirtualMachineThreatDetectionSettingsOrganizations: API.OperationMethod<
  GetVirtualMachineThreatDetectionSettingsOrganizationsRequest,
  GetVirtualMachineThreatDetectionSettingsOrganizationsResponse,
  GetVirtualMachineThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVirtualMachineThreatDetectionSettingsOrganizationsRequest,
  output: GetVirtualMachineThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateContainerThreatDetectionSettingsOrganizationsRequest {
  /** Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: ContainerThreatDetectionSettings;
}

export const UpdateContainerThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContainerThreatDetectionSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateContainerThreatDetectionSettingsOrganizationsRequest>;

export type UpdateContainerThreatDetectionSettingsOrganizationsResponse =
  ContainerThreatDetectionSettings;
export const UpdateContainerThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type UpdateContainerThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the ContainerThreatDetectionSettings resource. */
export const updateContainerThreatDetectionSettingsOrganizations: API.OperationMethod<
  UpdateContainerThreatDetectionSettingsOrganizationsRequest,
  UpdateContainerThreatDetectionSettingsOrganizationsResponse,
  UpdateContainerThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateContainerThreatDetectionSettingsOrganizationsRequest,
  output: UpdateContainerThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecurityHealthAnalyticsSettingsOrganizationsRequest {
  /** Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
}

export const GetSecurityHealthAnalyticsSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSecurityHealthAnalyticsSettingsOrganizationsRequest>;

export type GetSecurityHealthAnalyticsSettingsOrganizationsResponse =
  SecurityHealthAnalyticsSettings;
export const GetSecurityHealthAnalyticsSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type GetSecurityHealthAnalyticsSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose. */
export const getSecurityHealthAnalyticsSettingsOrganizations: API.OperationMethod<
  GetSecurityHealthAnalyticsSettingsOrganizationsRequest,
  GetSecurityHealthAnalyticsSettingsOrganizationsResponse,
  GetSecurityHealthAnalyticsSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSecurityHealthAnalyticsSettingsOrganizationsRequest,
  output: GetSecurityHealthAnalyticsSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest {
  /** Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: SecurityHealthAnalyticsSettings;
}

export const UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecurityHealthAnalyticsSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest>;

export type UpdateSecurityHealthAnalyticsSettingsOrganizationsResponse =
  SecurityHealthAnalyticsSettings;
export const UpdateSecurityHealthAnalyticsSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type UpdateSecurityHealthAnalyticsSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the SecurityHealthAnalyticsSettings resource. */
export const updateSecurityHealthAnalyticsSettingsOrganizations: API.OperationMethod<
  UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest,
  UpdateSecurityHealthAnalyticsSettingsOrganizationsResponse,
  UpdateSecurityHealthAnalyticsSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecurityHealthAnalyticsSettingsOrganizationsRequest,
  output: UpdateSecurityHealthAnalyticsSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateWebSecurityScannerSettingsOrganizationsRequest {
  /** Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: WebSecurityScannerSettings;
}

export const UpdateWebSecurityScannerSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WebSecurityScannerSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateWebSecurityScannerSettingsOrganizationsRequest>;

export type UpdateWebSecurityScannerSettingsOrganizationsResponse =
  WebSecurityScannerSettings;
export const UpdateWebSecurityScannerSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type UpdateWebSecurityScannerSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the WebSecurityScannerSettings resource. */
export const updateWebSecurityScannerSettingsOrganizations: API.OperationMethod<
  UpdateWebSecurityScannerSettingsOrganizationsRequest,
  UpdateWebSecurityScannerSettingsOrganizationsResponse,
  UpdateWebSecurityScannerSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateWebSecurityScannerSettingsOrganizationsRequest,
  output: UpdateWebSecurityScannerSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEventThreatDetectionSettingsOrganizationsRequest {
  /** Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
}

export const GetEventThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEventThreatDetectionSettingsOrganizationsRequest>;

export type GetEventThreatDetectionSettingsOrganizationsResponse =
  EventThreatDetectionSettings;
export const GetEventThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type GetEventThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose. */
export const getEventThreatDetectionSettingsOrganizations: API.OperationMethod<
  GetEventThreatDetectionSettingsOrganizationsRequest,
  GetEventThreatDetectionSettingsOrganizationsResponse,
  GetEventThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEventThreatDetectionSettingsOrganizationsRequest,
  output: GetEventThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetContainerThreatDetectionSettingsOrganizationsRequest {
  /** Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
}

export const GetContainerThreatDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetContainerThreatDetectionSettingsOrganizationsRequest>;

export type GetContainerThreatDetectionSettingsOrganizationsResponse =
  ContainerThreatDetectionSettings;
export const GetContainerThreatDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type GetContainerThreatDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose. */
export const getContainerThreatDetectionSettingsOrganizations: API.OperationMethod<
  GetContainerThreatDetectionSettingsOrganizationsRequest,
  GetContainerThreatDetectionSettingsOrganizationsResponse,
  GetContainerThreatDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContainerThreatDetectionSettingsOrganizationsRequest,
  output: GetContainerThreatDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest {
  /** The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: RapidVulnerabilityDetectionSettings;
}

export const UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RapidVulnerabilityDetectionSettings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest>;

export type UpdateRapidVulnerabilityDetectionSettingsOrganizationsResponse =
  RapidVulnerabilityDetectionSettings;
export const UpdateRapidVulnerabilityDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type UpdateRapidVulnerabilityDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the RapidVulnerabilityDetectionSettings resource. */
export const updateRapidVulnerabilityDetectionSettingsOrganizations: API.OperationMethod<
  UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest,
  UpdateRapidVulnerabilityDetectionSettingsOrganizationsResponse,
  UpdateRapidVulnerabilityDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRapidVulnerabilityDetectionSettingsOrganizationsRequest,
  output: UpdateRapidVulnerabilityDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSubscriptionOrganizationsRequest {
  /** Required. The name of the subscription to retrieve. Format: organizations/{organization}/subscription */
  name: string;
}

export const GetSubscriptionOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSubscriptionOrganizationsRequest>;

export type GetSubscriptionOrganizationsResponse = Subscription;
export const GetSubscriptionOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Subscription;

export type GetSubscriptionOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the Subscription resource. */
export const getSubscriptionOrganizations: API.OperationMethod<
  GetSubscriptionOrganizationsRequest,
  GetSubscriptionOrganizationsResponse,
  GetSubscriptionOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSubscriptionOrganizationsRequest,
  output: GetSubscriptionOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetWebSecurityScannerSettingsOrganizationsRequest {
  /** Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
}

export const GetWebSecurityScannerSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetWebSecurityScannerSettingsOrganizationsRequest>;

export type GetWebSecurityScannerSettingsOrganizationsResponse =
  WebSecurityScannerSettings;
export const GetWebSecurityScannerSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type GetWebSecurityScannerSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose. */
export const getWebSecurityScannerSettingsOrganizations: API.OperationMethod<
  GetWebSecurityScannerSettingsOrganizationsRequest,
  GetWebSecurityScannerSettingsOrganizationsResponse,
  GetWebSecurityScannerSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWebSecurityScannerSettingsOrganizationsRequest,
  output: GetWebSecurityScannerSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetRapidVulnerabilityDetectionSettingsOrganizationsRequest {
  /** Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
}

export const GetRapidVulnerabilityDetectionSettingsOrganizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetRapidVulnerabilityDetectionSettingsOrganizationsRequest>;

export type GetRapidVulnerabilityDetectionSettingsOrganizationsResponse =
  RapidVulnerabilityDetectionSettings;
export const GetRapidVulnerabilityDetectionSettingsOrganizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type GetRapidVulnerabilityDetectionSettingsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose. */
export const getRapidVulnerabilityDetectionSettingsOrganizations: API.OperationMethod<
  GetRapidVulnerabilityDetectionSettingsOrganizationsRequest,
  GetRapidVulnerabilityDetectionSettingsOrganizationsResponse,
  GetRapidVulnerabilityDetectionSettingsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRapidVulnerabilityDetectionSettingsOrganizationsRequest,
  output: GetRapidVulnerabilityDetectionSettingsOrganizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsWebSecurityScannerSettingsRequest {
  /** Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsWebSecurityScannerSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateOrganizationsWebSecurityScannerSettingsRequest>;

export type CalculateOrganizationsWebSecurityScannerSettingsResponse =
  WebSecurityScannerSettings;
export const CalculateOrganizationsWebSecurityScannerSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WebSecurityScannerSettings;

export type CalculateOrganizationsWebSecurityScannerSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateOrganizationsWebSecurityScannerSettings: API.OperationMethod<
  CalculateOrganizationsWebSecurityScannerSettingsRequest,
  CalculateOrganizationsWebSecurityScannerSettingsResponse,
  CalculateOrganizationsWebSecurityScannerSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsWebSecurityScannerSettingsRequest,
  output: CalculateOrganizationsWebSecurityScannerSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsContainerThreatDetectionSettingsRequest {
  /** Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsContainerThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateOrganizationsContainerThreatDetectionSettingsRequest>;

export type CalculateOrganizationsContainerThreatDetectionSettingsResponse =
  ContainerThreatDetectionSettings;
export const CalculateOrganizationsContainerThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContainerThreatDetectionSettings;

export type CalculateOrganizationsContainerThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateOrganizationsContainerThreatDetectionSettings: API.OperationMethod<
  CalculateOrganizationsContainerThreatDetectionSettingsRequest,
  CalculateOrganizationsContainerThreatDetectionSettingsResponse,
  CalculateOrganizationsContainerThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsContainerThreatDetectionSettingsRequest,
  output: CalculateOrganizationsContainerThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest {
  /** Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest>;

export type CalculateOrganizationsVirtualMachineThreatDetectionSettingsResponse =
  VirtualMachineThreatDetectionSettings;
export const CalculateOrganizationsVirtualMachineThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VirtualMachineThreatDetectionSettings;

export type CalculateOrganizationsVirtualMachineThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateOrganizationsVirtualMachineThreatDetectionSettings: API.OperationMethod<
  CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest,
  CalculateOrganizationsVirtualMachineThreatDetectionSettingsResponse,
  CalculateOrganizationsVirtualMachineThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsVirtualMachineThreatDetectionSettingsRequest,
  output: CalculateOrganizationsVirtualMachineThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest {
  /** Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
  name: string;
}

export const CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest>;

export type CalculateOrganizationsRapidVulnerabilityDetectionSettingsResponse =
  RapidVulnerabilityDetectionSettings;
export const CalculateOrganizationsRapidVulnerabilityDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RapidVulnerabilityDetectionSettings;

export type CalculateOrganizationsRapidVulnerabilityDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateOrganizationsRapidVulnerabilityDetectionSettings: API.OperationMethod<
  CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest,
  CalculateOrganizationsRapidVulnerabilityDetectionSettingsResponse,
  CalculateOrganizationsRapidVulnerabilityDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsRapidVulnerabilityDetectionSettingsRequest,
  output: CalculateOrganizationsRapidVulnerabilityDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsEventThreatDetectionSettingsRequest {
  /** Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsEventThreatDetectionSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateOrganizationsEventThreatDetectionSettingsRequest>;

export type CalculateOrganizationsEventThreatDetectionSettingsResponse =
  EventThreatDetectionSettings;
export const CalculateOrganizationsEventThreatDetectionSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventThreatDetectionSettings;

export type CalculateOrganizationsEventThreatDetectionSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateOrganizationsEventThreatDetectionSettings: API.OperationMethod<
  CalculateOrganizationsEventThreatDetectionSettingsRequest,
  CalculateOrganizationsEventThreatDetectionSettingsResponse,
  CalculateOrganizationsEventThreatDetectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsEventThreatDetectionSettingsRequest,
  output: CalculateOrganizationsEventThreatDetectionSettingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest {
  /** Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
  name: string;
  /** Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown. */
  showEligibleModulesOnly?: boolean;
}

export const CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    showEligibleModulesOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showEligibleModulesOnly"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:calculate" }),
    svc,
  ) as unknown as Schema.Schema<CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest>;

export type CalculateOrganizationsSecurityHealthAnalyticsSettingsResponse =
  SecurityHealthAnalyticsSettings;
export const CalculateOrganizationsSecurityHealthAnalyticsSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecurityHealthAnalyticsSettings;

export type CalculateOrganizationsSecurityHealthAnalyticsSettingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail. */
export const calculateOrganizationsSecurityHealthAnalyticsSettings: API.OperationMethod<
  CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest,
  CalculateOrganizationsSecurityHealthAnalyticsSettingsResponse,
  CalculateOrganizationsSecurityHealthAnalyticsSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CalculateOrganizationsSecurityHealthAnalyticsSettingsRequest,
  output: CalculateOrganizationsSecurityHealthAnalyticsSettingsResponse,
  errors: [NotFound, Forbidden],
}));
