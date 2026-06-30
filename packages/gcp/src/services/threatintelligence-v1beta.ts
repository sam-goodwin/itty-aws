// ==========================================================================
// Threat Intelligence API (threatintelligence v1beta)
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
  name: "threatintelligence",
  version: "v1beta",
  rootUrl: "https://threatintelligence.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface CustomerProfileCompany {
  /** Required. The name of the company. */
  company?: string;
  /** Optional. The citation ids for the company. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileCompany: Schema.Codec<CustomerProfileCompany> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    company: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileCompany" });

export interface UpsertConfigurationResponse {
  /** Output only. Created configuration ID with server assigned id. */
  configuration?: string;
}

export const UpsertConfigurationResponse: Schema.Codec<UpsertConfigurationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpsertConfigurationResponse" });

export interface SeverityAnalysis {
  /** The level of confidence in the given verdict. */
  confidence?:
    | "CONFIDENCE_LEVEL_UNSPECIFIED"
    | "CONFIDENCE_LEVEL_LOW"
    | "CONFIDENCE_LEVEL_MEDIUM"
    | "CONFIDENCE_LEVEL_HIGH"
    | (string & {});
  /** Human-readable explanation from the model, detailing why a particular result is considered to have a certain severity. */
  reasoning?: string;
  /** The level of severity. */
  severityLevel?:
    | "SEVERITY_LEVEL_UNSPECIFIED"
    | "SEVERITY_LEVEL_LOW"
    | "SEVERITY_LEVEL_MEDIUM"
    | "SEVERITY_LEVEL_HIGH"
    | (string & {});
}

export const SeverityAnalysis: Schema.Codec<SeverityAnalysis> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confidence: Schema.optional(Schema.String),
    reasoning: Schema.optional(Schema.String),
    severityLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "SeverityAnalysis" });

export interface PublicExploit {
  /** Optional. The URI of the exploit. */
  uri?: string;
  /** Optional. The grade of the exploit. Ex: "non-weaponized". */
  exploitGrade?:
    | "EXPLOIT_GRADE_UNSPECIFIED"
    | "UNEVALUATED"
    | "PROOF_OF_CONCEPT"
    | "NON_WEAPONIZED"
    | "WEAPONIZED"
    | "SCANNER"
    | "FAKE"
    | (string & {});
  /** Required. The name of the exploit. Ex: "Magentounauth.php.txt". */
  exploitName?: string;
  /** Optional. The release time of the exploit. */
  releaseTime?: string;
  /** Optional. The reliability of the exploit. Ex: "Unreviewed". */
  exploitReliability?:
    | "EXPLOIT_RELIABILITY_UNSPECIFIED"
    | "UNREVIEWED"
    | "REVIEWED"
    | "TESTED"
    | (string & {});
  /** Optional. The size of the exploit. */
  sizeBytes?: string;
}

export const PublicExploit: Schema.Codec<PublicExploit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    exploitGrade: Schema.optional(Schema.String),
    exploitName: Schema.optional(Schema.String),
    releaseTime: Schema.optional(Schema.String),
    exploitReliability: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "PublicExploit" });

export interface ProductFix {
  /** Required. The name of the fix. Ex: "Magento". */
  displayName?: string;
  /** Required. The source ID of the fix. Ex: "APPSEC-1420". */
  sourceId?: string;
  /** Optional. The URI of the fix. */
  uri?: string;
  /** Optional. The published time of the fix. */
  publishTime?: string;
}

export const ProductFix: Schema.Codec<ProductFix> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    sourceId: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    publishTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProductFix" });

export interface Association {
  /** Required. The ID of the association. */
  id?: string;
  /** Required. The type of the association. */
  type?:
    | "THREAT_INTEL_OBJECT_TYPE_UNSPECIFIED"
    | "THREAT_INTEL_OBJECT_TYPE_THREAT_ACTOR"
    | "THREAT_INTEL_OBJECT_TYPE_MALWARE"
    | "THREAT_INTEL_OBJECT_TYPE_REPORT"
    | "THREAT_INTEL_OBJECT_TYPE_CAMPAIGN"
    | "THREAT_INTEL_OBJECT_TYPE_IOC_COLLECTION"
    | "THREAT_INTEL_OBJECT_TYPE_SOFTWARE_AND_TOOLKITS"
    | "THREAT_INTEL_OBJECT_TYPE_VULNERABILITY"
    | (string & {});
}

export const Association: Schema.Codec<Association> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Association" });

export interface VulnerabilityMatch {
  /** Optional. The specific technologies from the configured watchlist that triggered the match. Ex: "Apache Struts". */
  matchedTechnologies?: ReadonlyArray<string>;
  /** Optional. List of exploitation vectors for the vulnerability. */
  exploitationVectors?: ReadonlyArray<
    | "EXPLOITATION_VECTOR_UNSPECIFIED"
    | "ADMINISTRATIVE_INTERFACE"
    | "BLUETOOTH_ACCESS"
    | "BROWSER"
    | "COMPROMISED_COMMUNICATION_CHANNEL"
    | "EMAIL"
    | "EXPOSED_WEB_APPLICATION"
    | "LOCAL_NETWORK_ACCESS"
    | "MALICIOUS_APPLICATION"
    | "MALICIOUS_FILE"
    | "MALICIOUS_SERVER"
    | "OPEN_PORT"
    | "PHYSICAL_ACCESS"
    | "SHORT_RANGE_RADIO"
    | "UNSPECIFIED_LOCAL_VECTOR"
    | "UNSPECIFIED_REMOTE_VECTOR"
    | "VPN_ACCESS"
    | "WIFI_ACCESS"
    | (string & {})
  >;
  /** Required. A description of the vulnerability. */
  description?: string;
  /** Required. All technologies affected by the vulnerability. Ex: "Apache Struts". */
  technologies?: ReadonlyArray<string>;
  /** Required. The risk rating of the vulnerability. */
  riskRating?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | "UNRATED"
    | (string & {});
  /** Optional. List of exploitation consequences for the vulnerability. */
  exploitationConsequences?: ReadonlyArray<
    | "EXPLOITATION_CONSEQUENCE_UNSPECIFIED"
    | "CODE_EXECUTION"
    | "COMMAND_EXECUTION"
    | "DATA_LOSS"
    | "DATA_MANIPULATION"
    | "DENIAL_OF_SERVICE"
    | "INFORMATION_DISCLOSURE"
    | "UNAUTHORIZED_ACCESS"
    | "PRIVILEGE_ESCALATION"
    | "SANDBOX_ESCAPE"
    | "SECURITY_BYPASS"
    | "CONTAINER_ESCAPE"
    | "SPOOFING"
    | (string & {})
  >;
  /** Output only. Whether a publicly available exploit exists. */
  publiclyAvailableExploit?: boolean;
  /** Optional. The disclosure time of the vulnerability. */
  disclosureTime?: string;
  /** Optional. The priority level of the vulnerability data. Ex: "P1". */
  priority?:
    | "PRIORITY_UNSPECIFIED"
    | "P0"
    | "P1"
    | "P2"
    | "P3"
    | "P4"
    | (string & {});
  /** Optional. List of public exploits. */
  publicExploits?: ReadonlyArray<PublicExploit>;
  /** Optional. List of product fixes for the vulnerability. */
  productFixes?: ReadonlyArray<ProductFix>;
  /** Required. The CVE ID of the vulnerability. Ex: "CVE-2025-9876". See https://www.cve.org/ for more information. */
  cveId?: string;
  /** Optional. Associated threat actors, malware, etc. This is embedded as a snapshot because the details of the association at the time of the vulnerability match are important for context and reporting. */
  associations?: ReadonlyArray<Association>;
  /** Required. The collection ID of the vulnerability. Ex: "vulnerability--cve-2025-9876". */
  collectionId?: string;
  /** Required. The CVSS score of the vulnerability. Evaluates to CVSS v3 when available with a fallback to v2 and v4. Example: 6.4. */
  cvss3Score?: number;
  /** Required. The exploitation state of the vulnerability. */
  exploitationState?:
    | "EXPLOITATION_STATE_UNSPECIFIED"
    | "EXPLOITATION_STATE_NO_KNOWN"
    | "EXPLOITATION_STATE_REPORTED"
    | "EXPLOITATION_STATE_SUSPECTED"
    | "EXPLOITATION_STATE_CONFIRMED"
    | "EXPLOITATION_STATE_WIDESPREAD"
    | (string & {});
  /** Optional. The EPSS score, representing the probability of exploitation. Example: 0.87. */
  epssScore?: number;
}

export const VulnerabilityMatch: Schema.Codec<VulnerabilityMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchedTechnologies: Schema.optional(Schema.Array(Schema.String)),
    exploitationVectors: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    technologies: Schema.optional(Schema.Array(Schema.String)),
    riskRating: Schema.optional(Schema.String),
    exploitationConsequences: Schema.optional(Schema.Array(Schema.String)),
    publiclyAvailableExploit: Schema.optional(Schema.Boolean),
    disclosureTime: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
    publicExploits: Schema.optional(Schema.Array(PublicExploit)),
    productFixes: Schema.optional(Schema.Array(ProductFix)),
    cveId: Schema.optional(Schema.String),
    associations: Schema.optional(Schema.Array(Association)),
    collectionId: Schema.optional(Schema.String),
    cvss3Score: Schema.optional(Schema.Number),
    exploitationState: Schema.optional(Schema.String),
    epssScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VulnerabilityMatch" });

export interface TargetTechnologyFindingDetail {
  /** Optional. The vulnerability match details. */
  vulnerabilityMatch?: VulnerabilityMatch;
}

export const TargetTechnologyFindingDetail: Schema.Codec<TargetTechnologyFindingDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vulnerabilityMatch: Schema.optional(VulnerabilityMatch),
  }).annotate({ identifier: "TargetTechnologyFindingDetail" });

export interface AlertDocumentTranslation {
  /** Output only. The translated title of the document. */
  translatedTitle?: string;
  /** Output only. The translated content of the document. */
  translatedContent?: string;
}

export const AlertDocumentTranslation: Schema.Codec<AlertDocumentTranslation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    translatedTitle: Schema.optional(Schema.String),
    translatedContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlertDocumentTranslation" });

export interface CustomerProfileCitation {
  /** Required. The source of the citation. */
  source?: string;
  /** Required. The name of the document the citation is from. */
  document?: string;
  /** Optional. The url of the citation. */
  uri?: string;
  /** The time the citation was retrieved. */
  retrievalTime?: string;
  /** Required. The citation id for the citation. Should be unique within the profile. */
  citationId?: string;
}

export const CustomerProfileCitation: Schema.Codec<CustomerProfileCitation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    document: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    retrievalTime: Schema.optional(Schema.String),
    citationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerProfileCitation" });

export interface CustomerProfileContactInfo {
  /** The address of the contact. */
  address?: string;
  /** The email address of the contact. */
  email?: string;
  /** Optional. The name of the contact. */
  label?: string;
  /** The phone number of the contact. */
  phone?: string;
  /** The other contact information. */
  other?: string;
  /** Optional. The citation ids for the contact information. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileContactInfo: Schema.Codec<CustomerProfileContactInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    phone: Schema.optional(Schema.String),
    other: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileContactInfo" });

export interface CustomerProfileWebPresence {
  /** Required. The domain name of the web presence. */
  domain?: string;
  /** Optional. The citation ids for the web presence. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileWebPresence: Schema.Codec<CustomerProfileWebPresence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileWebPresence" });

export interface CustomerProfileIndustry {
  /** Required. The name of the industry. */
  industry?: string;
  /** Optional. The citation ids for the industry. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileIndustry: Schema.Codec<CustomerProfileIndustry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    industry: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileIndustry" });

export interface CustomerProfilePerson {
  /** Optional. The title of the person. */
  title?: string;
  /** Optional. The citation ids for the person. */
  citationIds?: ReadonlyArray<string>;
  /** Required. The name of the person. */
  name?: string;
}

export const CustomerProfilePerson: Schema.Codec<CustomerProfilePerson> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerProfilePerson" });

export interface CustomerProfileSecurityConsiderations {
  /** Optional. A note about the security considerations. */
  note?: string;
  /** Optional. A series of considerations for the security of the organization, such as "high risk of compromise" or "vulnerable to cyberbullying". */
  considerations?: ReadonlyArray<string>;
}

export const CustomerProfileSecurityConsiderations: Schema.Codec<CustomerProfileSecurityConsiderations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    note: Schema.optional(Schema.String),
    considerations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileSecurityConsiderations" });

export interface CustomerProfileCitedString {
  /** Required. The value of the string. */
  value?: string;
  /** Optional. The citation ids for the string. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileCitedString: Schema.Codec<CustomerProfileCitedString> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileCitedString" });

export interface CustomerProfileSummary {
  /** Optional. The primary website of the customer. */
  primaryWebsite?: CustomerProfileCitedString;
  /** Optional. A narrative summary of key people. */
  keyPeopleSummary?: CustomerProfileCitedString;
  /** Optional. A narrative summary of brands. */
  brands?: CustomerProfileCitedString;
  /** Optional. The area the customer serves. */
  areaServed?: CustomerProfileCitedString;
  /** Optional. The industry the customer is in. */
  industry?: CustomerProfileCitedString;
  /** Optional. A narrative summary of products. */
  productsSummary?: CustomerProfileCitedString;
  /** Optional. The date the customer was founded. */
  founded?: CustomerProfileCitedString;
  /** Optional. A narrative summary of services. */
  servicesSummary?: CustomerProfileCitedString;
  /** Optional. The parent company of the customer. */
  parentCompany?: CustomerProfileCitedString;
  /** Optional. The headquarters of the customer. */
  headquarters?: CustomerProfileCitedString;
  /** Optional. The official name of the customer. */
  title?: CustomerProfileCitedString;
  /** Optional. The entity type of the customer. */
  entityType?: CustomerProfileCitedString;
}

export const CustomerProfileSummary: Schema.Codec<CustomerProfileSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryWebsite: Schema.optional(CustomerProfileCitedString),
    keyPeopleSummary: Schema.optional(CustomerProfileCitedString),
    brands: Schema.optional(CustomerProfileCitedString),
    areaServed: Schema.optional(CustomerProfileCitedString),
    industry: Schema.optional(CustomerProfileCitedString),
    productsSummary: Schema.optional(CustomerProfileCitedString),
    founded: Schema.optional(CustomerProfileCitedString),
    servicesSummary: Schema.optional(CustomerProfileCitedString),
    parentCompany: Schema.optional(CustomerProfileCitedString),
    headquarters: Schema.optional(CustomerProfileCitedString),
    title: Schema.optional(CustomerProfileCitedString),
    entityType: Schema.optional(CustomerProfileCitedString),
  }).annotate({ identifier: "CustomerProfileSummary" });

export interface CustomerProfileProduct {
  /** Optional. The citation ids for the product. */
  citationIds?: ReadonlyArray<string>;
  /** Required. The brand of the product. */
  brand?: string;
  /** Required. The name of the product. */
  product?: string;
}

export const CustomerProfileProduct: Schema.Codec<CustomerProfileProduct> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    citationIds: Schema.optional(Schema.Array(Schema.String)),
    brand: Schema.optional(Schema.String),
    product: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerProfileProduct" });

export interface CustomerProfileLocation {
  /** Optional. The type of location. */
  facilityType?: string;
  /** Required. The address of the location. */
  address?: string;
  /** Optional. The citation ids for the location. */
  citationIds?: ReadonlyArray<string>;
  /** Required. The brand of the location. */
  brand?: string;
}

export const CustomerProfileLocation: Schema.Codec<CustomerProfileLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    facilityType: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
    brand: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerProfileLocation" });

export interface CustomerProfileConfig {
  /** Optional. Citations for the organization profile. */
  citations?: ReadonlyArray<CustomerProfileCitation>;
  /** Optional. The parent companies of the organization. */
  parentCompanies?: ReadonlyArray<CustomerProfileCompany>;
  /** Optional. Contact information for the organization. */
  contactInfo?: ReadonlyArray<CustomerProfileContactInfo>;
  /** Optional. Web presence of the organization. */
  webPresences?: ReadonlyArray<CustomerProfileWebPresence>;
  /** Required. The name of the organization. */
  org?: string;
  /** Optional. The industries the organization is involved in. */
  industries?: ReadonlyArray<CustomerProfileIndustry>;
  /** Optional. A summary of the organization. */
  orgSummary?: string;
  /** Optional. Technology presence of the organization. */
  technologyPresence?: string;
  /** Optional. Executives of the organization. */
  executives?: ReadonlyArray<CustomerProfilePerson>;
  /** Optional. Security considerations for the organization. */
  securityConsiderations?: CustomerProfileSecurityConsiderations;
  /** Optional. A summarized version of the customer profile. */
  summary?: CustomerProfileSummary;
  /** Optional. Product information for the organization. */
  products?: ReadonlyArray<CustomerProfileProduct>;
  /** Optional. Locations the organization is present or conducts business in. */
  locations?: ReadonlyArray<CustomerProfileLocation>;
}

export const CustomerProfileConfig: Schema.Codec<CustomerProfileConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    citations: Schema.optional(Schema.Array(CustomerProfileCitation)),
    parentCompanies: Schema.optional(Schema.Array(CustomerProfileCompany)),
    contactInfo: Schema.optional(Schema.Array(CustomerProfileContactInfo)),
    webPresences: Schema.optional(Schema.Array(CustomerProfileWebPresence)),
    org: Schema.optional(Schema.String),
    industries: Schema.optional(Schema.Array(CustomerProfileIndustry)),
    orgSummary: Schema.optional(Schema.String),
    technologyPresence: Schema.optional(Schema.String),
    executives: Schema.optional(Schema.Array(CustomerProfilePerson)),
    securityConsiderations: Schema.optional(
      CustomerProfileSecurityConsiderations,
    ),
    summary: Schema.optional(CustomerProfileSummary),
    products: Schema.optional(Schema.Array(CustomerProfileProduct)),
    locations: Schema.optional(Schema.Array(CustomerProfileLocation)),
  }).annotate({ identifier: "CustomerProfileConfig" });

export interface TechnologyWatchListAlertThreshold {
  /** Optional. The minimum priority for the alert. */
  priorityMinimum?:
    | "PRIORITY_UNSPECIFIED"
    | "P0"
    | "P1"
    | "P2"
    | "P3"
    | "P4"
    | (string & {});
  /** Optional. The minimum epss score for the alert. Ex: 0.8. Valid range is [0.0, 1.0]. */
  epssScoreMinimum?: number;
  /** Optional. The exploitation states of the alert. */
  exploitationStates?: ReadonlyArray<
    | "EXPLOITATION_STATE_UNSPECIFIED"
    | "EXPLOITATION_STATE_NO_KNOWN"
    | "EXPLOITATION_STATE_REPORTED"
    | "EXPLOITATION_STATE_SUSPECTED"
    | "EXPLOITATION_STATE_CONFIRMED"
    | "EXPLOITATION_STATE_WIDESPREAD"
    | (string & {})
  >;
  /** Optional. The minimum CVSS score for the alert. Evaluates to CVSS v3 when available with a fallback to v2 and v4. Ex: 7.0. Valid range is [0.0, 10.0]. */
  cvssScoreMinimum?: number;
  /** Optional. The minimum risk rating for the alert. */
  riskRatingMinimum?:
    | "RISK_RATING_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | "UNRATED"
    | (string & {});
}

export const TechnologyWatchListAlertThreshold: Schema.Codec<TechnologyWatchListAlertThreshold> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priorityMinimum: Schema.optional(Schema.String),
    epssScoreMinimum: Schema.optional(Schema.Number),
    exploitationStates: Schema.optional(Schema.Array(Schema.String)),
    cvssScoreMinimum: Schema.optional(Schema.Number),
    riskRatingMinimum: Schema.optional(Schema.String),
  }).annotate({ identifier: "TechnologyWatchListAlertThreshold" });

export interface TechnologyWatchListConfig {
  /** Optional. List of vendor, technology or cpe fingerprint. example: Microsoft office 360 Apache Server 3.5 cpe:2.3:a:microsoft:outlook:*:*:*:*:*:*:*:* */
  technologies?: ReadonlyArray<string>;
  /** Optional. Alert thresholds to effectively reduce noise. */
  alertThreshold?: TechnologyWatchListAlertThreshold;
}

export const TechnologyWatchListConfig: Schema.Codec<TechnologyWatchListConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    technologies: Schema.optional(Schema.Array(Schema.String)),
    alertThreshold: Schema.optional(TechnologyWatchListAlertThreshold),
  }).annotate({ identifier: "TechnologyWatchListConfig" });

export interface ConfigurationDetail {
  /** Customer Profile detail config. */
  customerProfile?: CustomerProfileConfig;
  /** Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union. */
  detailType?: string;
  /** Technology Watchlist detail config. */
  technologyWatchlist?: TechnologyWatchListConfig;
}

export const ConfigurationDetail: Schema.Codec<ConfigurationDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerProfile: Schema.optional(CustomerProfileConfig),
    detailType: Schema.optional(Schema.String),
    technologyWatchlist: Schema.optional(TechnologyWatchListConfig),
  }).annotate({ identifier: "ConfigurationDetail" });

export interface Audit {
  /** Output only. Time of creation or last update. */
  updateTime?: string;
  /** Output only. Time of creation. */
  createTime?: string;
  /** Output only. Agent that created or updated the record, could be a UserId or a JobId. */
  creator?: string;
  /** Output only. Agent that last updated the record, could be a UserId or a JobId. */
  updater?: string;
}

export const Audit: Schema.Codec<Audit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    updater: Schema.optional(Schema.String),
  }).annotate({ identifier: "Audit" });

export interface Configuration {
  /** Required. Domain specific details for the configuration. */
  detail?: ConfigurationDetail;
  /** Optional. A description of the configuration. */
  description?: string;
  /** Required. Name of the service that provides the configuration. */
  provider?: string;
  /** Identifier. Server generated name for the configuration. format is projects/{project}/configurations/{configuration} */
  name?: string;
  /** If included when updating a configuration, this should be set to the current etag of the configuration. If the etags do not match, the update will be rejected and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. A user-manipulatable version. Does not adhere to a specific format */
  version?: string;
  /** Output only. Human readable name for the configuration. */
  displayName?: string;
  /** Output only. Audit information for the configuration. */
  audit?: Audit;
  /** Optional. State of the configuration. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "DEPRECATED"
    | (string & {});
}

export const Configuration: Schema.Codec<Configuration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detail: Schema.optional(ConfigurationDetail),
    description: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    audit: Schema.optional(Audit),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "Configuration" });

export interface ConfigurationRevision {
  /** The snapshot of the configuration */
  snapshot?: Configuration;
  /** Output only. The time the Revision was created */
  createTime?: string;
  /** Identifier. The name of the ConfigurationRevision Format: projects//configurations//revisions/ */
  name?: string;
}

export const ConfigurationRevision: Schema.Codec<ConfigurationRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshot: Schema.optional(Configuration),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigurationRevision" });

export interface TargetTechnologyAlertDetail {
  /** Optional. The vulnerability match details. */
  vulnerabilityMatch?: VulnerabilityMatch;
}

export const TargetTechnologyAlertDetail: Schema.Codec<TargetTechnologyAlertDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vulnerabilityMatch: Schema.optional(VulnerabilityMatch),
  }).annotate({ identifier: "TargetTechnologyAlertDetail" });

export interface MarkAlertAsTriagedRequest {}

export const MarkAlertAsTriagedRequest: Schema.Codec<MarkAlertAsTriagedRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsTriagedRequest",
  });

export interface InsiderThreatAlertDetail {
  /** Required. The severity of the Insider Threat alert. Allowed values are: * `LOW` * `MEDIUM` * `HIGH` * `CRITICAL` */
  severity?: string;
  /** Required. Array of ids to accommodate multiple discovery documents */
  discoveryDocumentIds?: ReadonlyArray<string>;
}

export const InsiderThreatAlertDetail: Schema.Codec<InsiderThreatAlertDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    discoveryDocumentIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "InsiderThreatAlertDetail" });

export interface ListConfigurationsResponse {
  /** List of configurations. */
  configurations?: ReadonlyArray<Configuration>;
  /** Page token. */
  nextPageToken?: string;
}

export const ListConfigurationsResponse: Schema.Codec<ListConfigurationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurations: Schema.optional(Schema.Array(Configuration)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConfigurationsResponse" });

export interface InsiderThreatFindingDetail {
  /** Required. The severity of the InsiderThreat finding. This indicates the potential impact of the threat. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Required. Reference to the match score of the InsiderThreat finding. This is a float value greater than 0 and less than or equal to 1 calculated by the matching engine based on the similarity of the document and the user provided configurations. */
  matchScore?: number;
  /** Required. The unique identifier of the document that triggered the InsiderThreat finding. This ID can be used to retrieve the content of the document for further analysis. */
  documentId?: string;
}

export const InsiderThreatFindingDetail: Schema.Codec<InsiderThreatFindingDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    matchScore: Schema.optional(Schema.Number),
    documentId: Schema.optional(Schema.String),
  }).annotate({ identifier: "InsiderThreatFindingDetail" });

export interface MarkAlertAsFalsePositiveRequest {}

export const MarkAlertAsFalsePositiveRequest: Schema.Codec<MarkAlertAsFalsePositiveRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsFalsePositiveRequest",
  });

export interface InitialAccessBrokerFindingDetail {
  /** Required. Reference to the match score of the IAB finding. This is a float value between 0 and 1 calculated by the matching engine based on the similarity of the document and the user provided configurations. */
  matchScore?: number;
  /** Required. The unique identifier of the document that triggered the IAB finding. This ID can be used to retrieve the content of the document for further analysis. */
  documentId?: string;
  /** Required. The severity of the IAB finding. This indicates the potential impact of the threat. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
}

export const InitialAccessBrokerFindingDetail: Schema.Codec<InitialAccessBrokerFindingDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchScore: Schema.optional(Schema.Number),
    documentId: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "InitialAccessBrokerFindingDetail" });

export interface DataLeakFindingDetail {
  /** Required. Reference to the match score of the Data Leak finding. This is a float value greater than 0 and less than or equal to 1 calculated by the matching engine based on the similarity of the document and the user provided configurations. */
  matchScore?: number;
  /** Required. The unique identifier of the document that triggered the Data Leak finding. This ID can be used to retrieve the content of the document for further analysis. */
  documentId?: string;
  /** Required. The severity of the Data Leak finding. This indicates the potential impact of the threat. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
}

export const DataLeakFindingDetail: Schema.Codec<DataLeakFindingDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchScore: Schema.optional(Schema.Number),
    documentId: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataLeakFindingDetail" });

export interface FindingDetail {
  /** Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union. */
  detailType?: string;
  /** Initial Access Broker finding detail type. */
  initialAccessBroker?: InitialAccessBrokerFindingDetail;
  /** Technology Watchlist finding detail type. */
  targetTechnology?: TargetTechnologyFindingDetail;
  /** Data Leak finding detail type. */
  dataLeak?: DataLeakFindingDetail;
  /** Insider Threat finding detail type. */
  insiderThreat?: InsiderThreatFindingDetail;
}

export const FindingDetail: Schema.Codec<FindingDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detailType: Schema.optional(Schema.String),
    initialAccessBroker: Schema.optional(InitialAccessBrokerFindingDetail),
    targetTechnology: Schema.optional(TargetTechnologyFindingDetail),
    dataLeak: Schema.optional(DataLeakFindingDetail),
    insiderThreat: Schema.optional(InsiderThreatFindingDetail),
  }).annotate({ identifier: "FindingDetail" });

export interface AlertDocument {
  /** Output only. The language code of the document. */
  languageCode?: string;
  /** Output only. AI summary of the document. */
  aiSummary?: string;
  /** Output only. Time when GTI received the intel. */
  ingestTime?: string;
  /** Output only. Source of the intel item, e.g. DarkMarket. */
  source?: string;
  /** Output only. Time when the origin source collected the intel. */
  collectionTime?: string;
  /** Output only. The author of the document. */
  author?: string;
  /** Output only. The content of the document. */
  content?: string;
  /** Output only. The title of the document, if available. */
  title?: string;
  /** Output only. The translation of the document, if available. */
  translation?: AlertDocumentTranslation;
  /** Identifier. Server generated name for the alert document. format is projects/{project}/alerts/{alert}/documents/{document} */
  name?: string;
  /** Output only. Time when the intel was last updated by the source. */
  sourceUpdateTime?: string;
  /** Output only. The timestamp of the original external publication of the document. */
  createTime?: string;
  /** Output only. URI of the intel item from the source. */
  sourceUri?: string;
}

export const AlertDocument: Schema.Codec<AlertDocument> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    aiSummary: Schema.optional(Schema.String),
    ingestTime: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    collectionTime: Schema.optional(Schema.String),
    author: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    translation: Schema.optional(AlertDocumentTranslation),
    name: Schema.optional(Schema.String),
    sourceUpdateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    sourceUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlertDocument" });

export interface Evidence {
  /** A list of semantic themes or concepts found to be common, related, or aligned between the sources, supporting the verdict. */
  commonThemes?: ReadonlyArray<string>;
  /** A list of semantic themes or descriptions unique to one source or semantically distant. */
  distinctThemes?: ReadonlyArray<string>;
}

export const Evidence: Schema.Codec<Evidence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commonThemes: Schema.optional(Schema.Array(Schema.String)),
    distinctThemes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Evidence" });

export interface RelevanceAnalysis {
  /** The level of relevance. */
  relevanceLevel?:
    | "RELEVANCE_LEVEL_UNSPECIFIED"
    | "RELEVANCE_LEVEL_LOW"
    | "RELEVANCE_LEVEL_MEDIUM"
    | "RELEVANCE_LEVEL_HIGH"
    | (string & {});
  /** The level of confidence in the given verdict. */
  confidence?:
    | "CONFIDENCE_LEVEL_UNSPECIFIED"
    | "CONFIDENCE_LEVEL_LOW"
    | "CONFIDENCE_LEVEL_MEDIUM"
    | "CONFIDENCE_LEVEL_HIGH"
    | (string & {});
  /** Human-readable explanation from the matcher, detailing why a particular result is considered relevant or not relevant. */
  reasoning?: string;
  /** Indicates whether the threat is considered relevant. */
  relevant?: boolean;
  /** Evidence supporting the verdict, including matched and unmatched items. */
  evidence?: Evidence;
}

export const RelevanceAnalysis: Schema.Codec<RelevanceAnalysis> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relevanceLevel: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.String),
    reasoning: Schema.optional(Schema.String),
    relevant: Schema.optional(Schema.Boolean),
    evidence: Schema.optional(Evidence),
  }).annotate({ identifier: "RelevanceAnalysis" });

export interface Finding {
  /** Output only. When identical finding (same labels and same details) has re-occurred. */
  reoccurrenceTimes?: ReadonlyArray<string>;
  /** Required. A short descriptive title for the finding <= 250 chars. EX: "Actor 'baddy' offering $1000 for credentials of 'goodguy'". */
  displayName?: string;
  /** Output only. High-Precision Severity Analysis verdict for the finding. */
  severityAnalysis?: SeverityAnalysis;
  /** Output only. Audit data about the finding. */
  audit?: Audit;
  /** Output only. High-Precision Relevance Analysis verdict for the finding. */
  relevanceAnalysis?: RelevanceAnalysis;
  /** Required. Holder of the domain specific details of the finding. */
  detail?: FindingDetail;
  /** Optional. Name of the alert that this finding is bound to. */
  alert?: string;
  /** Required. Logical source of this finding (name of the sub-engine). */
  provider?: string;
  /** Optional. Configuration names that are bound to this finding. */
  configurations?: ReadonlyArray<string>;
  /** Optional. AI summary of the finding. */
  aiSummary?: string;
  /** Identifier. Server generated name for the finding (leave clear during creation). Format: projects/{project}/findings/{finding} */
  name?: string;
  /** Optional. Deprecated: Use the `severity_analysis` field instead. Base severity score from the finding source. */
  severity?: number;
}

export const Finding: Schema.Codec<Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reoccurrenceTimes: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    severityAnalysis: Schema.optional(SeverityAnalysis),
    audit: Schema.optional(Audit),
    relevanceAnalysis: Schema.optional(RelevanceAnalysis),
    detail: Schema.optional(FindingDetail),
    alert: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
    configurations: Schema.optional(Schema.Array(Schema.String)),
    aiSummary: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Finding" });

export interface MarkAlertAsBenignRequest {}

export const MarkAlertAsBenignRequest: Schema.Codec<MarkAlertAsBenignRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsBenignRequest",
  });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface DataLeakAlertDetail {
  /** Required. The severity of the Data Leak alert. Allowed values are: * `LOW` * `MEDIUM` * `HIGH` * `CRITICAL` */
  severity?: string;
  /** Required. Array of ids to accommodate multiple discovery documents */
  discoveryDocumentIds?: ReadonlyArray<string>;
}

export const DataLeakAlertDetail: Schema.Codec<DataLeakAlertDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    discoveryDocumentIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DataLeakAlertDetail" });

export interface GenerateOrgProfileConfigurationRequest {
  /** Required. The domain of the organization to generate the profile for. */
  domain?: string;
  /** Required. The display name of the organization to generate the profile for. */
  displayName?: string;
}

export const GenerateOrgProfileConfigurationRequest: Schema.Codec<GenerateOrgProfileConfigurationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateOrgProfileConfigurationRequest" });

export interface FacetCount {
  /** Value of the facet stringified. Timestamps will be formatted using RFC3339. */
  value?: string;
  /** Count of records with the value. */
  count?: number;
}

export const FacetCount: Schema.Codec<FacetCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FacetCount" });

export interface Facet {
  /** List of counts for the facet (if categorical). */
  facetCounts?: ReadonlyArray<FacetCount>;
  /** The type of the facet. Options include "string", "int", "float", "bool", "enum", "timestamp", "user" and are useful to show the right sort of UI controls when building a AIP-160 style filtering string. */
  facetType?: string;
  /** Name of the facet. This is also the string that needs to be used in the filtering expression. */
  facet?: string;
  /** Total number of records that contain this facet with ANY value. */
  totalCount?: string;
  /** Min value of the facet stringified based on type. This is only populated for facets that have a clear ordering, for types like enum it will be left empty. Timestamps will be formatted using RFC3339. */
  minValue?: string;
  /** Max value of the facet stringified based on type. Will be populated and formatted the same as min_value. */
  maxValue?: string;
}

export const Facet: Schema.Codec<Facet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    facetCounts: Schema.optional(Schema.Array(FacetCount)),
    facetType: Schema.optional(Schema.String),
    facet: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.String),
    minValue: Schema.optional(Schema.String),
    maxValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "Facet" });

export interface MarkAlertAsTrackedExternallyRequest {}

export const MarkAlertAsTrackedExternallyRequest: Schema.Codec<MarkAlertAsTrackedExternallyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsTrackedExternallyRequest",
  });

export interface ListConfigurationRevisionsResponse {
  /** The Configuration Revisions associated with the specified Configuration */
  revisions?: ReadonlyArray<ConfigurationRevision>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListConfigurationRevisionsResponse: Schema.Codec<ListConfigurationRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisions: Schema.optional(Schema.Array(ConfigurationRevision)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConfigurationRevisionsResponse" });

export interface SearchFindingsResponse {
  /** List of findings. */
  findings?: ReadonlyArray<Finding>;
  /** Page token. */
  nextPageToken?: string;
}

export const SearchFindingsResponse: Schema.Codec<SearchFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findings: Schema.optional(Schema.Array(Finding)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchFindingsResponse" });

export interface PriorityAnalysis {
  /** The level of Priority. */
  priorityLevel?:
    | "PRIORITY_LEVEL_UNSPECIFIED"
    | "PRIORITY_LEVEL_LOW"
    | "PRIORITY_LEVEL_MEDIUM"
    | "PRIORITY_LEVEL_HIGH"
    | "PRIORITY_LEVEL_CRITICAL"
    | (string & {});
  /** The level of confidence in the given verdict. */
  confidence?:
    | "CONFIDENCE_LEVEL_UNSPECIFIED"
    | "CONFIDENCE_LEVEL_LOW"
    | "CONFIDENCE_LEVEL_MEDIUM"
    | "CONFIDENCE_LEVEL_HIGH"
    | (string & {});
  /** Human-readable explanation from the model, detailing why a particular result is considered to have a certain priority. */
  reasoning?: string;
}

export const PriorityAnalysis: Schema.Codec<PriorityAnalysis> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    priorityLevel: Schema.optional(Schema.String),
    confidence: Schema.optional(Schema.String),
    reasoning: Schema.optional(Schema.String),
  }).annotate({ identifier: "PriorityAnalysis" });

export interface InitialAccessBrokerAlertDetail {
  /** Required. The severity of the Initial Access Broker (IAB) alert. Allowed values are: * `LOW` * `MEDIUM` * `HIGH` * `CRITICAL` */
  severity?: string;
  /** Required. Array of ids to accommodate multiple discovery documents */
  discoveryDocumentIds?: ReadonlyArray<string>;
}

export const InitialAccessBrokerAlertDetail: Schema.Codec<InitialAccessBrokerAlertDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    discoveryDocumentIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "InitialAccessBrokerAlertDetail" });

export interface AlertDetail {
  /** Technology Watchlist alert detail type. */
  targetTechnology?: TargetTechnologyAlertDetail;
  /** Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union. */
  detailType?: string;
  /** Initial Access Broker alert detail type. */
  initialAccessBroker?: InitialAccessBrokerAlertDetail;
  /** Insider Threat alert detail type. */
  insiderThreat?: InsiderThreatAlertDetail;
  /** Data Leak alert detail type. */
  dataLeak?: DataLeakAlertDetail;
}

export const AlertDetail: Schema.Codec<AlertDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetTechnology: Schema.optional(TargetTechnologyAlertDetail),
    detailType: Schema.optional(Schema.String),
    initialAccessBroker: Schema.optional(InitialAccessBrokerAlertDetail),
    insiderThreat: Schema.optional(InsiderThreatAlertDetail),
    dataLeak: Schema.optional(DataLeakAlertDetail),
  }).annotate({ identifier: "AlertDetail" });

export interface Alert {
  /** Output only. State of the alert. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NEW"
    | "READ"
    | "TRIAGED"
    | "ESCALATED"
    | "RESOLVED"
    | "DUPLICATE"
    | "FALSE_POSITIVE"
    | "NOT_ACTIONABLE"
    | "BENIGN"
    | "TRACKED_EXTERNALLY"
    | (string & {});
  /** Output only. Findings that are covered by this alert. */
  findings?: ReadonlyArray<string>;
  /** Output only. A short title for the alert. */
  displayName?: string;
  /** Optional. AI summary of the alert. */
  aiSummary?: string;
  /** Output only. External ID for the alert. This is used internally to provide protection against out of order updates. */
  externalId?: string;
  /** Output only. High-Precision Priority Analysis for the alert. */
  priorityAnalysis?: PriorityAnalysis;
  /** Output only. High-Precision Relevance Analysis verdict for the alert. */
  relevanceAnalysis?: RelevanceAnalysis;
  /** Output only. alert name of the alert this alert is a duplicate of. Format: projects/{project}/alerts/{alert} */
  duplicateOf?: string;
  /** Output only. Audit information for the alert. */
  audit?: Audit;
  /** Output only. High-Precision Severity Analysis for the alert. */
  severityAnalysis?: SeverityAnalysis;
  /** Output only. The number of findings associated with this alert. */
  findingCount?: string;
  /** Identifier. Server generated name for the alert. format is projects/{project}/alerts/{alert} */
  name?: string;
  /** Optional. If included when updating an alert, this should be set to the current etag of the alert. If the etags do not match, the update will be rejected and an ABORTED error will be returned. */
  etag?: string;
  /** Output only. The resource names of the Configurations bound to this alert. Format: projects/{project}/configurations/{configuration} */
  configurations?: ReadonlyArray<string>;
  /** Output only. alert names of the alerts that are duplicates of this alert. Format: projects/{project}/alerts/{alert} */
  duplicatedBy?: ReadonlyArray<string>;
  /** Output only. Details object for the alert, not all alerts will have a details object. */
  detail?: AlertDetail;
}

export const Alert: Schema.Codec<Alert> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    findings: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    aiSummary: Schema.optional(Schema.String),
    externalId: Schema.optional(Schema.String),
    priorityAnalysis: Schema.optional(PriorityAnalysis),
    relevanceAnalysis: Schema.optional(RelevanceAnalysis),
    duplicateOf: Schema.optional(Schema.String),
    audit: Schema.optional(Audit),
    severityAnalysis: Schema.optional(SeverityAnalysis),
    findingCount: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    configurations: Schema.optional(Schema.Array(Schema.String)),
    duplicatedBy: Schema.optional(Schema.Array(Schema.String)),
    detail: Schema.optional(AlertDetail),
  }).annotate({ identifier: "Alert" });

export interface EnumerateAlertFacetsResponse {
  /** List of facets and the counts. */
  facets?: ReadonlyArray<Facet>;
}

export const EnumerateAlertFacetsResponse: Schema.Codec<EnumerateAlertFacetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    facets: Schema.optional(Schema.Array(Facet)),
  }).annotate({ identifier: "EnumerateAlertFacetsResponse" });

export interface MarkAlertAsReadRequest {}

export const MarkAlertAsReadRequest: Schema.Codec<MarkAlertAsReadRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsReadRequest",
  });

export interface ListAlertsResponse {
  /** List of alerts. */
  alerts?: ReadonlyArray<Alert>;
  /** Page token. */
  nextPageToken?: string;
}

export const ListAlertsResponse: Schema.Codec<ListAlertsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alerts: Schema.optional(Schema.Array(Alert)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAlertsResponse" });

export interface MarkAlertAsDuplicateRequest {
  /** Optional. Name of the alert to mark as a duplicate of. Format: projects/{project}/alerts/{alert} */
  duplicateOf?: string;
}

export const MarkAlertAsDuplicateRequest: Schema.Codec<MarkAlertAsDuplicateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duplicateOf: Schema.optional(Schema.String),
  }).annotate({ identifier: "MarkAlertAsDuplicateRequest" });

export interface ListFindingsResponse {
  /** List of findings. */
  findings?: ReadonlyArray<Finding>;
  /** Page token. */
  nextPageToken?: string;
}

export const ListFindingsResponse: Schema.Codec<ListFindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findings: Schema.optional(Schema.Array(Finding)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFindingsResponse" });

export interface MarkAlertAsEscalatedRequest {}

export const MarkAlertAsEscalatedRequest: Schema.Codec<MarkAlertAsEscalatedRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsEscalatedRequest",
  });

export interface MarkAlertAsResolvedRequest {}

export const MarkAlertAsResolvedRequest: Schema.Codec<MarkAlertAsResolvedRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsResolvedRequest",
  });

export interface MarkAlertAsNotActionableRequest {}

export const MarkAlertAsNotActionableRequest: Schema.Codec<MarkAlertAsNotActionableRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsNotActionableRequest",
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

export interface GenerateOrgProfileProjectsRequest {
  /** Required. The name of the project to generate the profile for. Format: projects/{project} */
  name: string;
  /** Request body */
  body?: GenerateOrgProfileConfigurationRequest;
}

export const GenerateOrgProfileProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateOrgProfileConfigurationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:generateOrgProfile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<GenerateOrgProfileProjectsRequest>;

export type GenerateOrgProfileProjectsResponse = Operation;
export const GenerateOrgProfileProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GenerateOrgProfileProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Triggers the generation of a Customer Profile for a project. */
export const generateOrgProfileProjects: API.OperationMethod<
  GenerateOrgProfileProjectsRequest,
  GenerateOrgProfileProjectsResponse,
  GenerateOrgProfileProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateOrgProfileProjectsRequest,
  output: GenerateOrgProfileProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAlertsRequest {
  /** Required. Name of the alert to get. Format: projects/{project}/alerts/{alert} */
  name: string;
}

export const GetProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsAlertsRequest>;

export type GetProjectsAlertsResponse = Alert;
export const GetProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type GetProjectsAlertsError = DefaultErrors | NotFound | Forbidden;

/** Get an alert by name. */
export const getProjectsAlerts: API.OperationMethod<
  GetProjectsAlertsRequest,
  GetProjectsAlertsResponse,
  GetProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAlertsRequest,
  output: GetProjectsAlertsResponse,
  errors: [NotFound, Forbidden],
}));

export interface EscalateProjectsAlertsRequest {
  /** Required. Name of the alert to mark as escalated. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsEscalatedRequest;
}

export const EscalateProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsEscalatedRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:escalate", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<EscalateProjectsAlertsRequest>;

export type EscalateProjectsAlertsResponse = Alert;
export const EscalateProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type EscalateProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert as escalated - ESCALATED. */
export const escalateProjectsAlerts: API.OperationMethod<
  EscalateProjectsAlertsRequest,
  EscalateProjectsAlertsResponse,
  EscalateProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EscalateProjectsAlertsRequest,
  output: EscalateProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FalsePositiveProjectsAlertsRequest {
  /** Required. Name of the alert to mark as a false positive. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsFalsePositiveRequest;
}

export const FalsePositiveProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsFalsePositiveRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:falsePositive",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<FalsePositiveProjectsAlertsRequest>;

export type FalsePositiveProjectsAlertsResponse = Alert;
export const FalsePositiveProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Alert;

export type FalsePositiveProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert as a false positive - FALSE_POSITIVE. */
export const falsePositiveProjectsAlerts: API.OperationMethod<
  FalsePositiveProjectsAlertsRequest,
  FalsePositiveProjectsAlertsResponse,
  FalsePositiveProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FalsePositiveProjectsAlertsRequest,
  output: FalsePositiveProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EnumerateFacetsProjectsAlertsRequest {
  /** Required. Parent of the alerts. */
  parent: string;
  /** Optional. Filter on what alerts will be enumerated. */
  filter?: string;
}

export const EnumerateFacetsProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/alerts:enumerateFacets" }),
    svc,
  ) as unknown as Schema.Codec<EnumerateFacetsProjectsAlertsRequest>;

export type EnumerateFacetsProjectsAlertsResponse =
  EnumerateAlertFacetsResponse;
export const EnumerateFacetsProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EnumerateAlertFacetsResponse;

export type EnumerateFacetsProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** EnumerateAlertFacets returns the facets and the number of alerts that meet the filter criteria and have that value for each facet. */
export const enumerateFacetsProjectsAlerts: API.OperationMethod<
  EnumerateFacetsProjectsAlertsRequest,
  EnumerateFacetsProjectsAlertsResponse,
  EnumerateFacetsProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnumerateFacetsProjectsAlertsRequest,
  output: EnumerateFacetsProjectsAlertsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BenignProjectsAlertsRequest {
  /** Required. Name of the alert to mark as a benign. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsBenignRequest;
}

export const BenignProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsBenignRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:benign", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<BenignProjectsAlertsRequest>;

export type BenignProjectsAlertsResponse = Alert;
export const BenignProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type BenignProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert as benign - BENIGN. */
export const benignProjectsAlerts: API.OperationMethod<
  BenignProjectsAlertsRequest,
  BenignProjectsAlertsResponse,
  BenignProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BenignProjectsAlertsRequest,
  output: BenignProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReadProjectsAlertsRequest {
  /** Required. Name of the alert to mark as read. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsReadRequest;
}

export const ReadProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsReadRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:read", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ReadProjectsAlertsRequest>;

export type ReadProjectsAlertsResponse = Alert;
export const ReadProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type ReadProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert as read - READ. */
export const readProjectsAlerts: API.OperationMethod<
  ReadProjectsAlertsRequest,
  ReadProjectsAlertsResponse,
  ReadProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadProjectsAlertsRequest,
  output: ReadProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface NotActionableProjectsAlertsRequest {
  /** Required. Name of the alert to mark as a not actionable. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsNotActionableRequest;
}

export const NotActionableProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsNotActionableRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:notActionable",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<NotActionableProjectsAlertsRequest>;

export type NotActionableProjectsAlertsResponse = Alert;
export const NotActionableProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Alert;

export type NotActionableProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert as not actionable - NOT_ACTIONABLE. */
export const notActionableProjectsAlerts: API.OperationMethod<
  NotActionableProjectsAlertsRequest,
  NotActionableProjectsAlertsResponse,
  NotActionableProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: NotActionableProjectsAlertsRequest,
  output: NotActionableProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TriageProjectsAlertsRequest {
  /** Required. Name of the alert to mark as a triaged. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsTriagedRequest;
}

export const TriageProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsTriagedRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:triage", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<TriageProjectsAlertsRequest>;

export type TriageProjectsAlertsResponse = Alert;
export const TriageProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type TriageProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert as triaged - TRIAGED. */
export const triageProjectsAlerts: API.OperationMethod<
  TriageProjectsAlertsRequest,
  TriageProjectsAlertsResponse,
  TriageProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TriageProjectsAlertsRequest,
  output: TriageProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResolveProjectsAlertsRequest {
  /** Required. Name of the alert to mark as resolved. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsResolvedRequest;
}

export const ResolveProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsResolvedRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:resolve", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ResolveProjectsAlertsRequest>;

export type ResolveProjectsAlertsResponse = Alert;
export const ResolveProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type ResolveProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert to closed state - RESOLVED. */
export const resolveProjectsAlerts: API.OperationMethod<
  ResolveProjectsAlertsRequest,
  ResolveProjectsAlertsResponse,
  ResolveProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResolveProjectsAlertsRequest,
  output: ResolveProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TrackExternallyProjectsAlertsRequest {
  /** Required. Name of the alert to mark as tracked externally. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsTrackedExternallyRequest;
}

export const TrackExternallyProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsTrackedExternallyRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+name}:trackExternally",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TrackExternallyProjectsAlertsRequest>;

export type TrackExternallyProjectsAlertsResponse = Alert;
export const TrackExternallyProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Alert;

export type TrackExternallyProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert as tracked externally - TRACKED_EXTERNALLY. */
export const trackExternallyProjectsAlerts: API.OperationMethod<
  TrackExternallyProjectsAlertsRequest,
  TrackExternallyProjectsAlertsResponse,
  TrackExternallyProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrackExternallyProjectsAlertsRequest,
  output: TrackExternallyProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DuplicateProjectsAlertsRequest {
  /** Required. Name of the alert to mark as a duplicate. Format: projects/{project}/alerts/{alert} */
  name: string;
  /** Request body */
  body?: MarkAlertAsDuplicateRequest;
}

export const DuplicateProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAlertAsDuplicateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:duplicate", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<DuplicateProjectsAlertsRequest>;

export type DuplicateProjectsAlertsResponse = Alert;
export const DuplicateProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Alert;

export type DuplicateProjectsAlertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an alert as a duplicate of another alert. - DUPLICATE. */
export const duplicateProjectsAlerts: API.OperationMethod<
  DuplicateProjectsAlertsRequest,
  DuplicateProjectsAlertsResponse,
  DuplicateProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DuplicateProjectsAlertsRequest,
  output: DuplicateProjectsAlertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAlertsRequest {
  /** Required. Parent of the alerts. Format: projects/{project} */
  parent: string;
  /** Optional. Page size. Default to 100 alerts per page. Maximum is 1000 alerts per page. */
  pageSize?: number;
  /** Optional. Order by criteria in the csv format: "field1, field2 desc" or "field1, field2" or "field1 asc, field2". If a field is specified without `asc` or `desc`, ascending order is used by default. Supported fields for ordering are identical to those supported for filtering. Examples: * `audit.create_time desc` * `audit.update_time asc` * `audit.create_time desc, severity_analysis.severity_level desc` */
  orderBy?: string;
  /** Optional. Page token to retrieve the next page of results. */
  pageToken?: string;
  /** Optional. Filter criteria. Supported fields for filtering include: * `audit.create_time` * `audit.creator` * `audit.update_time` * `audit.updater` * `detail.data_leak.discovery_document_ids` * `detail.data_leak.severity` * `detail.detail_type` * `detail.initial_access_broker.discovery_document_ids` * `detail.initial_access_broker.severity` * `detail.insider_threat.discovery_document_ids` * `detail.insider_threat.severity` * `finding_count` * `priority_analysis.priority_level` * `relevance_analysis.confidence` * `relevance_analysis.relevance_level` * `relevance_analysis.relevant` * `severity_analysis.severity_level` * `state` Examples: * `detail.detail_type = "initial_access_broker"` * `detail.detail_type != "data_leak"` * `detail.insider_threat.severity = "HIGH"` * `audit.create_time >= "2026-04-03T00:00:00Z" AND audit.create_time < "2026-04-06T00:00:00Z"` * `state = "NEW" OR state = "TRIAGED"` * `severity_analysis.severity_level = "SEVERITY_LEVEL_CRITICAL"` */
  filter?: string;
}

export const ListProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/alerts" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsAlertsRequest>;

export type ListProjectsAlertsResponse = ListAlertsResponse;
export const ListProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAlertsResponse;

export type ListProjectsAlertsError = DefaultErrors | NotFound | Forbidden;

/** Get a list of alerts that meet the filter criteria. */
export const listProjectsAlerts: API.PaginatedOperationMethod<
  ListProjectsAlertsRequest,
  ListProjectsAlertsResponse,
  ListProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAlertsRequest,
  output: ListProjectsAlertsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsAlertsDocumentsRequest {
  /** Required. Name of the alert document to get. Format: projects/{project}/alerts/{alert}/documents/{document} */
  name: string;
}

export const GetProjectsAlertsDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsAlertsDocumentsRequest>;

export type GetProjectsAlertsDocumentsResponse = AlertDocument;
export const GetProjectsAlertsDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AlertDocument;

export type GetProjectsAlertsDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific document associated with an alert. */
export const getProjectsAlertsDocuments: API.OperationMethod<
  GetProjectsAlertsDocumentsRequest,
  GetProjectsAlertsDocumentsResponse,
  GetProjectsAlertsDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAlertsDocumentsRequest,
  output: GetProjectsAlertsDocumentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsFindingsRequest {
  /** Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". */
  orderBy?: string;
  /** Optional. Filter criteria. */
  filter?: string;
  /** Optional. Page token. */
  pageToken?: string;
  /** Required. Parent of the findings. */
  parent: string;
  /** Optional. Page size. */
  pageSize?: number;
}

export const ListProjectsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/findings" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsFindingsRequest>;

export type ListProjectsFindingsResponse = ListFindingsResponse;
export const ListProjectsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingsResponse;

export type ListProjectsFindingsError = DefaultErrors | NotFound | Forbidden;

/** Get a list of findings that meet the filter criteria. The `parent` field in ListFindingsRequest should have the format: projects/{project} */
export const listProjectsFindings: API.PaginatedOperationMethod<
  ListProjectsFindingsRequest,
  ListProjectsFindingsResponse,
  ListProjectsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsFindingsRequest,
  output: ListProjectsFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchProjectsFindingsRequest {
  /** Optional. Page token. */
  pageToken?: string;
  /** Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". */
  orderBy?: string;
  /** Required. Parent of the findings. Format: vaults/{vault} */
  parent: string;
  /** Optional. Page size. */
  pageSize?: number;
  /** Optional. Query on what findings will be returned. This supports the same filter criteria as FindingService.ListFindings as well as the following relationship query `has_alert`. Example: - `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")` */
  query?: string;
}

export const SearchProjectsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/findings:search" }),
    svc,
  ) as unknown as Schema.Codec<SearchProjectsFindingsRequest>;

export type SearchProjectsFindingsResponse = SearchFindingsResponse;
export const SearchProjectsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchFindingsResponse;

export type SearchProjectsFindingsError = DefaultErrors | NotFound | Forbidden;

/** SearchFindings is a more powerful version of ListFindings that supports complex queries like "findings for alerts" using functions such as `has_alert` in the query string. The `parent` field in SearchFindingsRequest should have the format: projects/{project} Example to search for findings for a specific issue: `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")` */
export const searchProjectsFindings: API.PaginatedOperationMethod<
  SearchProjectsFindingsRequest,
  SearchProjectsFindingsResponse,
  SearchProjectsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsFindingsRequest,
  output: SearchProjectsFindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsFindingsRequest {
  /** Required. Name of the finding to get. */
  name: string;
}

export const GetProjectsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsFindingsRequest>;

export type GetProjectsFindingsResponse = Finding;
export const GetProjectsFindingsResponse = /*@__PURE__*/ /*#__PURE__*/ Finding;

export type GetProjectsFindingsError = DefaultErrors | NotFound | Forbidden;

/** Get a finding by name. The `name` field should have the format: `projects/{project}/findings/{finding}` */
export const getProjectsFindings: API.OperationMethod<
  GetProjectsFindingsRequest,
  GetProjectsFindingsResponse,
  GetProjectsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsFindingsRequest,
  output: GetProjectsFindingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsConfigurationsRequest {
  /** Required. Name of the configuration to get. Format: vaults/{vault}/configurations/{configuration} */
  name: string;
}

export const GetProjectsConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsConfigurationsRequest>;

export type GetProjectsConfigurationsResponse = Configuration;
export const GetProjectsConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Configuration;

export type GetProjectsConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a configuration by name. */
export const getProjectsConfigurations: API.OperationMethod<
  GetProjectsConfigurationsRequest,
  GetProjectsConfigurationsResponse,
  GetProjectsConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConfigurationsRequest,
  output: GetProjectsConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsConfigurationsRequest {
  /** Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". */
  orderBy?: string;
  /** Optional. Page token. */
  pageToken?: string;
  /** Optional. Filter criteria. */
  filter?: string;
  /** Required. Parent of the configuration. Format: vaults/{vault} */
  parent: string;
  /** Optional. Page size. */
  pageSize?: number;
}

export const ListProjectsConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/configurations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsConfigurationsRequest>;

export type ListProjectsConfigurationsResponse = ListConfigurationsResponse;
export const ListProjectsConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConfigurationsResponse;

export type ListProjectsConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a list of configurations that meet the filter criteria. */
export const listProjectsConfigurations: API.PaginatedOperationMethod<
  ListProjectsConfigurationsRequest,
  ListProjectsConfigurationsResponse,
  ListProjectsConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConfigurationsRequest,
  output: ListProjectsConfigurationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpsertProjectsConfigurationsRequest {
  /** Required. Parent of the configuration. */
  parent: string;
  /** Optional. Time that the configuration should be considered to have been published. This is an advanced feature used when onboarding and bulk loading data from other systems. Do not set this field without consulting with the API team. */
  publishTime?: string;
  /** Request body */
  body?: Configuration;
}

export const UpsertProjectsConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    publishTime: Schema.optional(Schema.String).pipe(
      T.HttpQuery("publishTime"),
    ),
    body: Schema.optional(Configuration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/configurations:upsert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpsertProjectsConfigurationsRequest>;

export type UpsertProjectsConfigurationsResponse = UpsertConfigurationResponse;
export const UpsertProjectsConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UpsertConfigurationResponse;

export type UpsertProjectsConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates or updates a configuration. */
export const upsertProjectsConfigurations: API.OperationMethod<
  UpsertProjectsConfigurationsRequest,
  UpsertProjectsConfigurationsResponse,
  UpsertProjectsConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpsertProjectsConfigurationsRequest,
  output: UpsertProjectsConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsConfigurationsRevisionsRequest {
  /** Optional. An AIP-160 filter string */
  filter?: string;
  /** Optional. A page token provided by the API */
  pageToken?: string;
  /** Optional. Specify ordering of response */
  orderBy?: string;
  /** Required. The name of the Configuration to retrieve Revisions for */
  parent: string;
  /** Optional. Page Size */
  pageSize?: number;
}

export const ListProjectsConfigurationsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/revisions" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsConfigurationsRevisionsRequest>;

export type ListProjectsConfigurationsRevisionsResponse =
  ListConfigurationRevisionsResponse;
export const ListProjectsConfigurationsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConfigurationRevisionsResponse;

export type ListProjectsConfigurationsRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List configuration revisions that meet the filter criteria. */
export const listProjectsConfigurationsRevisions: API.PaginatedOperationMethod<
  ListProjectsConfigurationsRevisionsRequest,
  ListProjectsConfigurationsRevisionsResponse,
  ListProjectsConfigurationsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConfigurationsRevisionsRequest,
  output: ListProjectsConfigurationsRevisionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
