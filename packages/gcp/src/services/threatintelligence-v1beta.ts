// ==========================================================================
// Threat Intelligence API (threatintelligence v1beta)
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
  name: "threatintelligence",
  version: "v1beta",
  rootUrl: "https://threatintelligence.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.Number),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  message: Schema.optional(Schema.String),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  done: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  error: Schema.optional(Status),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Operation" });

export interface Audit {
  /** Output only. Time of creation or last update. */
  updateTime?: string;
  /** Output only. Time of creation. */
  createTime?: string;
  /** Output only. Agent that last updated the record, could be a UserId or a JobId. */
  updater?: string;
  /** Output only. Agent that created or updated the record, could be a UserId or a JobId. */
  creator?: string;
}

export const Audit = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateTime: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updater: Schema.optional(Schema.String),
  creator: Schema.optional(Schema.String),
}).annotate({ identifier: "Audit" });

export interface CustomerProfileCompany {
  /** Required. The name of the company. */
  company?: string;
  /** Optional. The citation ids for the company. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileCompany = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    company: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "CustomerProfileCompany" });

export interface CustomerProfileProduct {
  /** Required. The brand of the product. */
  brand?: string;
  /** Required. The name of the product. */
  product?: string;
  /** Optional. The citation ids for the product. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileProduct = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    brand: Schema.optional(Schema.String),
    product: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "CustomerProfileProduct" });

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

export const CustomerProfileLocation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    facilityType: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
    brand: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerProfileLocation" });

export interface CustomerProfileIndustry {
  /** Required. The name of the industry. */
  industry?: string;
  /** Optional. The citation ids for the industry. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileIndustry =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    industry: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileIndustry" });

export interface CustomerProfilePerson {
  /** Required. The name of the person. */
  name?: string;
  /** Optional. The title of the person. */
  title?: string;
  /** Optional. The citation ids for the person. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfilePerson = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  citationIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "CustomerProfilePerson" });

export interface CustomerProfileSecurityConsiderations {
  /** Optional. A note about the security considerations. */
  note?: string;
  /** Optional. A series of considerations for the security of the organization, such as "high risk of compromise" or "vulnerable to cyberbullying". */
  considerations?: ReadonlyArray<string>;
}

export const CustomerProfileSecurityConsiderations =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    note: Schema.optional(Schema.String),
    considerations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileSecurityConsiderations" });

export interface CustomerProfileContactInfo {
  /** The other contact information. */
  other?: string;
  /** The phone number of the contact. */
  phone?: string;
  /** Optional. The name of the contact. */
  label?: string;
  /** The email address of the contact. */
  email?: string;
  /** Optional. The citation ids for the contact information. */
  citationIds?: ReadonlyArray<string>;
  /** The address of the contact. */
  address?: string;
}

export const CustomerProfileContactInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    other: Schema.optional(Schema.String),
    phone: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
    address: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerProfileContactInfo" });

export interface CustomerProfileCitedString {
  /** Required. The value of the string. */
  value?: string;
  /** Optional. The citation ids for the string. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileCitedString =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileCitedString" });

export interface CustomerProfileSummary {
  /** Optional. The date the customer was founded. */
  founded?: CustomerProfileCitedString;
  /** Optional. The industry the customer is in. */
  industry?: CustomerProfileCitedString;
  /** Optional. The parent company of the customer. */
  parentCompany?: CustomerProfileCitedString;
  /** Optional. The primary website of the customer. */
  primaryWebsite?: CustomerProfileCitedString;
  /** Optional. A narrative summary of services. */
  servicesSummary?: CustomerProfileCitedString;
  /** Optional. The official name of the customer. */
  title?: CustomerProfileCitedString;
  /** Optional. The headquarters of the customer. */
  headquarters?: CustomerProfileCitedString;
  /** Optional. The area the customer serves. */
  areaServed?: CustomerProfileCitedString;
  /** Optional. A narrative summary of brands. */
  brands?: CustomerProfileCitedString;
  /** Optional. The entity type of the customer. */
  entityType?: CustomerProfileCitedString;
  /** Optional. A narrative summary of key people. */
  keyPeopleSummary?: CustomerProfileCitedString;
  /** Optional. A narrative summary of products. */
  productsSummary?: CustomerProfileCitedString;
}

export const CustomerProfileSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    founded: Schema.optional(CustomerProfileCitedString),
    industry: Schema.optional(CustomerProfileCitedString),
    parentCompany: Schema.optional(CustomerProfileCitedString),
    primaryWebsite: Schema.optional(CustomerProfileCitedString),
    servicesSummary: Schema.optional(CustomerProfileCitedString),
    title: Schema.optional(CustomerProfileCitedString),
    headquarters: Schema.optional(CustomerProfileCitedString),
    areaServed: Schema.optional(CustomerProfileCitedString),
    brands: Schema.optional(CustomerProfileCitedString),
    entityType: Schema.optional(CustomerProfileCitedString),
    keyPeopleSummary: Schema.optional(CustomerProfileCitedString),
    productsSummary: Schema.optional(CustomerProfileCitedString),
  },
).annotate({ identifier: "CustomerProfileSummary" });

export interface CustomerProfileCitation {
  /** Optional. The url of the citation. */
  uri?: string;
  /** Required. The name of the document the citation is from. */
  document?: string;
  /** Required. The citation id for the citation. Should be unique within the profile. */
  citationId?: string;
  /** The time the citation was retrieved. */
  retrievalTime?: string;
  /** Required. The source of the citation. */
  source?: string;
}

export const CustomerProfileCitation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    document: Schema.optional(Schema.String),
    citationId: Schema.optional(Schema.String),
    retrievalTime: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerProfileCitation" });

export interface CustomerProfileWebPresence {
  /** Required. The domain name of the web presence. */
  domain?: string;
  /** Optional. The citation ids for the web presence. */
  citationIds?: ReadonlyArray<string>;
}

export const CustomerProfileWebPresence =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    citationIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CustomerProfileWebPresence" });

export interface CustomerProfileConfig {
  /** Optional. The parent companies of the organization. */
  parentCompanies?: ReadonlyArray<CustomerProfileCompany>;
  /** Required. The name of the organization. */
  org?: string;
  /** Optional. Product information for the organization. */
  products?: ReadonlyArray<CustomerProfileProduct>;
  /** Optional. Locations the organization is present or conducts business in. */
  locations?: ReadonlyArray<CustomerProfileLocation>;
  /** Optional. The industries the organization is involved in. */
  industries?: ReadonlyArray<CustomerProfileIndustry>;
  /** Optional. Executives of the organization. */
  executives?: ReadonlyArray<CustomerProfilePerson>;
  /** Optional. Security considerations for the organization. */
  securityConsiderations?: CustomerProfileSecurityConsiderations;
  /** Optional. Technology presence of the organization. */
  technologyPresence?: string;
  /** Optional. Contact information for the organization. */
  contactInfo?: ReadonlyArray<CustomerProfileContactInfo>;
  /** Optional. A summarized version of the customer profile. */
  summary?: CustomerProfileSummary;
  /** Optional. A summary of the organization. */
  orgSummary?: string;
  /** Optional. Citations for the organization profile. */
  citations?: ReadonlyArray<CustomerProfileCitation>;
  /** Optional. Web presence of the organization. */
  webPresences?: ReadonlyArray<CustomerProfileWebPresence>;
}

export const CustomerProfileConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parentCompanies: Schema.optional(Schema.Array(CustomerProfileCompany)),
  org: Schema.optional(Schema.String),
  products: Schema.optional(Schema.Array(CustomerProfileProduct)),
  locations: Schema.optional(Schema.Array(CustomerProfileLocation)),
  industries: Schema.optional(Schema.Array(CustomerProfileIndustry)),
  executives: Schema.optional(Schema.Array(CustomerProfilePerson)),
  securityConsiderations: Schema.optional(
    CustomerProfileSecurityConsiderations,
  ),
  technologyPresence: Schema.optional(Schema.String),
  contactInfo: Schema.optional(Schema.Array(CustomerProfileContactInfo)),
  summary: Schema.optional(CustomerProfileSummary),
  orgSummary: Schema.optional(Schema.String),
  citations: Schema.optional(Schema.Array(CustomerProfileCitation)),
  webPresences: Schema.optional(Schema.Array(CustomerProfileWebPresence)),
}).annotate({ identifier: "CustomerProfileConfig" });

export interface ConfigurationDetail {
  /** Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union. */
  detailType?: string;
  /** Customer Profile detail config. */
  customerProfile?: CustomerProfileConfig;
}

export const ConfigurationDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  detailType: Schema.optional(Schema.String),
  customerProfile: Schema.optional(CustomerProfileConfig),
}).annotate({ identifier: "ConfigurationDetail" });

export interface Configuration {
  /** Optional. State of the configuration. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "DEPRECATED"
    | (string & {});
  /** Optional. A user-manipulatable version. Does not adhere to a specific format */
  version?: string;
  /** Identifier. Server generated name for the configuration. format is projects/{project}/configurations/{configuration} */
  name?: string;
  /** Required. Name of the service that provides the configuration. */
  provider?: string;
  /** Optional. A description of the configuration. */
  description?: string;
  /** Output only. Human readable name for the configuration. */
  displayName?: string;
  /** Output only. Audit information for the configuration. */
  audit?: Audit;
  /** Required. Domain specific details for the configuration. */
  detail?: ConfigurationDetail;
}

export const Configuration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  provider: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  audit: Schema.optional(Audit),
  detail: Schema.optional(ConfigurationDetail),
}).annotate({ identifier: "Configuration" });

export interface ConfigurationRevision {
  /** Output only. The time the Revision was created */
  createTime?: string;
  /** Identifier. The name of the ConfigurationRevision Format: projects//configurations//revisions/ */
  name?: string;
  /** The snapshot of the configuration */
  snapshot?: Configuration;
}

export const ConfigurationRevision = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  snapshot: Schema.optional(Configuration),
}).annotate({ identifier: "ConfigurationRevision" });

export interface ListConfigurationRevisionsResponse {
  /** The Configuration Revisions associated with the specified Configuration */
  revisions?: ReadonlyArray<ConfigurationRevision>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListConfigurationRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisions: Schema.optional(Schema.Array(ConfigurationRevision)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConfigurationRevisionsResponse" });

export interface SeverityAnalysis {
  /** The level of severity. */
  severityLevel?:
    | "SEVERITY_LEVEL_UNSPECIFIED"
    | "SEVERITY_LEVEL_LOW"
    | "SEVERITY_LEVEL_MEDIUM"
    | "SEVERITY_LEVEL_HIGH"
    | (string & {});
  /** Human-readable explanation from the model, detailing why a particular result is considered to have a certain severity. */
  reasoning?: string;
  /** The level of confidence in the given verdict. */
  confidence?:
    | "CONFIDENCE_LEVEL_UNSPECIFIED"
    | "CONFIDENCE_LEVEL_LOW"
    | "CONFIDENCE_LEVEL_MEDIUM"
    | "CONFIDENCE_LEVEL_HIGH"
    | (string & {});
}

export const SeverityAnalysis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  severityLevel: Schema.optional(Schema.String),
  reasoning: Schema.optional(Schema.String),
  confidence: Schema.optional(Schema.String),
}).annotate({ identifier: "SeverityAnalysis" });

export interface MarkAlertAsDuplicateRequest {
  /** Optional. Name of the alert to mark as a duplicate of. Format: projects/{project}/alerts/{alert} */
  duplicateOf?: string;
}

export const MarkAlertAsDuplicateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duplicateOf: Schema.optional(Schema.String),
  }).annotate({ identifier: "MarkAlertAsDuplicateRequest" });

export interface Evidence {
  /** A list of semantic themes or concepts found to be common, related, or aligned between the sources, supporting the verdict. */
  commonThemes?: ReadonlyArray<string>;
  /** A list of semantic themes or descriptions unique to one source or semantically distant. */
  distinctThemes?: ReadonlyArray<string>;
}

export const Evidence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commonThemes: Schema.optional(Schema.Array(Schema.String)),
  distinctThemes: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Evidence" });

export interface RelevanceAnalysis {
  /** Indicates whether the threat is considered relevant. */
  relevant?: boolean;
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
  /** Evidence supporting the verdict, including matched and unmatched items. */
  evidence?: Evidence;
  /** Human-readable explanation from the matcher, detailing why a particular result is considered relevant or not relevant. */
  reasoning?: string;
}

export const RelevanceAnalysis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  relevant: Schema.optional(Schema.Boolean),
  relevanceLevel: Schema.optional(Schema.String),
  confidence: Schema.optional(Schema.String),
  evidence: Schema.optional(Evidence),
  reasoning: Schema.optional(Schema.String),
}).annotate({ identifier: "RelevanceAnalysis" });

export interface InitialAccessBrokerFindingDetail {
  /** Required. The severity of the IAB finding. This indicates the potential impact of the threat. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Required. The unique identifier of the document that triggered the IAB finding. This ID can be used to retrieve the content of the document for further analysis. */
  documentId?: string;
  /** Required. Reference to the match score of the IAB finding. This is a float value between 0 and 1 calculated by the matching engine based on the similarity of the document and the user provided configurations. */
  matchScore?: number;
}

export const InitialAccessBrokerFindingDetail =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    documentId: Schema.optional(Schema.String),
    matchScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InitialAccessBrokerFindingDetail" });

export interface DataLeakFindingDetail {
  /** Required. Reference to the match score of the Data Leak finding. This is a float value greater than 0 and less than or equal to 1 calculated by the matching engine based on the similarity of the document and the user provided configurations. */
  matchScore?: number;
  /** Required. The severity of the Data Leak finding. This indicates the potential impact of the threat. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Required. The unique identifier of the document that triggered the Data Leak finding. This ID can be used to retrieve the content of the document for further analysis. */
  documentId?: string;
}

export const DataLeakFindingDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  matchScore: Schema.optional(Schema.Number),
  severity: Schema.optional(Schema.String),
  documentId: Schema.optional(Schema.String),
}).annotate({ identifier: "DataLeakFindingDetail" });

export interface InsiderThreatFindingDetail {
  /** Required. The severity of the InsiderThreat finding. This indicates the potential impact of the threat. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Required. The unique identifier of the document that triggered the InsiderThreat finding. This ID can be used to retrieve the content of the document for further analysis. */
  documentId?: string;
  /** Required. Reference to the match score of the InsiderThreat finding. This is a float value greater than 0 and less than or equal to 1 calculated by the matching engine based on the similarity of the document and the user provided configurations. */
  matchScore?: number;
}

export const InsiderThreatFindingDetail =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    documentId: Schema.optional(Schema.String),
    matchScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InsiderThreatFindingDetail" });

export interface FindingDetail {
  /** Initial Access Broker finding detail type. */
  initialAccessBroker?: InitialAccessBrokerFindingDetail;
  /** Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union. */
  detailType?: string;
  /** Data Leak finding detail type. */
  dataLeak?: DataLeakFindingDetail;
  /** Insider Threat finding detail type. */
  insiderThreat?: InsiderThreatFindingDetail;
}

export const FindingDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  initialAccessBroker: Schema.optional(InitialAccessBrokerFindingDetail),
  detailType: Schema.optional(Schema.String),
  dataLeak: Schema.optional(DataLeakFindingDetail),
  insiderThreat: Schema.optional(InsiderThreatFindingDetail),
}).annotate({ identifier: "FindingDetail" });

export interface Finding {
  /** Output only. When identical finding (same labels and same details) has re-occurred. */
  reoccurrenceTimes?: ReadonlyArray<string>;
  /** Optional. AI summary of the finding. */
  aiSummary?: string;
  /** Output only. Audit data about the finding. */
  audit?: Audit;
  /** Optional. Name of the alert that this finding is bound to. */
  alert?: string;
  /** Optional. Deprecated: Use the `severity_analysis` field instead. Base severity score from the finding source. */
  severity?: number;
  /** Optional. Configuration names that are bound to this finding. */
  configurations?: ReadonlyArray<string>;
  /** Identifier. Server generated name for the finding (leave clear during creation). Format: projects/{project}/findings/{finding} */
  name?: string;
  /** Required. Logical source of this finding (name of the sub-engine). */
  provider?: string;
  /** Required. A short descriptive title for the finding <= 250 chars. EX: "Actor 'baddy' offering $1000 for credentials of 'goodguy'". */
  displayName?: string;
  /** Output only. High-Precision Relevance Analysis verdict for the finding. */
  relevanceAnalysis?: RelevanceAnalysis;
  /** Output only. High-Precision Severity Analysis verdict for the finding. */
  severityAnalysis?: SeverityAnalysis;
  /** Required. Holder of the domain specific details of the finding. */
  detail?: FindingDetail;
}

export const Finding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reoccurrenceTimes: Schema.optional(Schema.Array(Schema.String)),
  aiSummary: Schema.optional(Schema.String),
  audit: Schema.optional(Audit),
  alert: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.Number),
  configurations: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.optional(Schema.String),
  provider: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  relevanceAnalysis: Schema.optional(RelevanceAnalysis),
  severityAnalysis: Schema.optional(SeverityAnalysis),
  detail: Schema.optional(FindingDetail),
}).annotate({ identifier: "Finding" });

export interface ListFindingsResponse {
  /** List of findings. */
  findings?: ReadonlyArray<Finding>;
  /** Page token. */
  nextPageToken?: string;
}

export const ListFindingsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  findings: Schema.optional(Schema.Array(Finding)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListFindingsResponse" });

export interface FacetCount {
  /** Count of records with the value. */
  count?: number;
  /** Value of the facet stringified. Timestamps will be formatted using RFC3339. */
  value?: string;
}

export const FacetCount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "FacetCount" });

export interface DataLeakAlertDetail {
  /** Required. Array of ids to accommodate multiple discovery documents */
  discoveryDocumentIds?: ReadonlyArray<string>;
  /** Required. Data Leak specific severity This will be the string representation of the DataLeakFindingDetail.Severityenum. (e.g., "LOW", "MEDIUM", "HIGH", "CRITICAL") */
  severity?: string;
}

export const DataLeakAlertDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discoveryDocumentIds: Schema.optional(Schema.Array(Schema.String)),
  severity: Schema.optional(Schema.String),
}).annotate({ identifier: "DataLeakAlertDetail" });

export interface Facet {
  /** Max value of the facet stringified based on type. Will be populated and formatted the same as min_value. */
  maxValue?: string;
  /** Name of the facet. This is also the string that needs to be used in the filtering expression. */
  facet?: string;
  /** Total number of records that contain this facet with ANY value. */
  totalCount?: string;
  /** List of counts for the facet (if categorical). */
  facetCounts?: ReadonlyArray<FacetCount>;
  /** The type of the facet. Options include "string", "int", "float", "bool", "enum", "timestamp", "user" and are useful to show the right sort of UI controls when building a AIP-160 style filtering string. */
  facetType?: string;
  /** Min value of the facet stringified based on type. This is only populated for facets that have a clear ordering, for types like enum it will be left empty. Timestamps will be formatted using RFC3339. */
  minValue?: string;
}

export const Facet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxValue: Schema.optional(Schema.String),
  facet: Schema.optional(Schema.String),
  totalCount: Schema.optional(Schema.String),
  facetCounts: Schema.optional(Schema.Array(FacetCount)),
  facetType: Schema.optional(Schema.String),
  minValue: Schema.optional(Schema.String),
}).annotate({ identifier: "Facet" });

export interface EnumerateAlertFacetsResponse {
  /** List of facets and the counts. */
  facets?: ReadonlyArray<Facet>;
}

export const EnumerateAlertFacetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    facets: Schema.optional(Schema.Array(Facet)),
  }).annotate({ identifier: "EnumerateAlertFacetsResponse" });

export interface MarkAlertAsBenignRequest {}

export const MarkAlertAsBenignRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsBenignRequest",
  });

export interface MarkAlertAsTrackedExternallyRequest {}

export const MarkAlertAsTrackedExternallyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsTrackedExternallyRequest",
  });

export interface InsiderThreatAlertDetail {
  /** Required. Array of ids to accommodate multiple discovery documents */
  discoveryDocumentIds?: ReadonlyArray<string>;
  /** Required. InsiderThreat specific severity This will be the string representation of the InsiderThreatFindingDetail.Severityenum. (e.g., "LOW", "MEDIUM", "HIGH", "CRITICAL") */
  severity?: string;
}

export const InsiderThreatAlertDetail =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryDocumentIds: Schema.optional(Schema.Array(Schema.String)),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "InsiderThreatAlertDetail" });

export interface InitialAccessBrokerAlertDetail {
  /** Required. Array of ids to accommodate multiple discovery documents */
  discoveryDocumentIds?: ReadonlyArray<string>;
  /** Required. IAB specific severity */
  severity?: string;
}

export const InitialAccessBrokerAlertDetail =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryDocumentIds: Schema.optional(Schema.Array(Schema.String)),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "InitialAccessBrokerAlertDetail" });

export interface AlertDetail {
  /** Data Leak alert detail type. */
  dataLeak?: DataLeakAlertDetail;
  /** Insider Threat alert detail type. */
  insiderThreat?: InsiderThreatAlertDetail;
  /** Initial Access Broker alert detail type. */
  initialAccessBroker?: InitialAccessBrokerAlertDetail;
  /** Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union. */
  detailType?: string;
}

export const AlertDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataLeak: Schema.optional(DataLeakAlertDetail),
  insiderThreat: Schema.optional(InsiderThreatAlertDetail),
  initialAccessBroker: Schema.optional(InitialAccessBrokerAlertDetail),
  detailType: Schema.optional(Schema.String),
}).annotate({ identifier: "AlertDetail" });

export interface GenerateOrgProfileConfigurationRequest {
  /** Required. The domain of the organization to generate the profile for. */
  domain?: string;
  /** Required. The display name of the organization to generate the profile for. */
  displayName?: string;
}

export const GenerateOrgProfileConfigurationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateOrgProfileConfigurationRequest" });

export interface SearchFindingsResponse {
  /** List of findings. */
  findings?: ReadonlyArray<Finding>;
  /** Page token. */
  nextPageToken?: string;
}

export const SearchFindingsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    findings: Schema.optional(Schema.Array(Finding)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "SearchFindingsResponse" });

export interface MarkAlertAsFalsePositiveRequest {}

export const MarkAlertAsFalsePositiveRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsFalsePositiveRequest",
  });

export interface MarkAlertAsEscalatedRequest {}

export const MarkAlertAsEscalatedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsEscalatedRequest",
  });

export interface PriorityAnalysis {
  /** The level of confidence in the given verdict. */
  confidence?:
    | "CONFIDENCE_LEVEL_UNSPECIFIED"
    | "CONFIDENCE_LEVEL_LOW"
    | "CONFIDENCE_LEVEL_MEDIUM"
    | "CONFIDENCE_LEVEL_HIGH"
    | (string & {});
  /** The level of Priority. */
  priorityLevel?:
    | "PRIORITY_LEVEL_UNSPECIFIED"
    | "PRIORITY_LEVEL_LOW"
    | "PRIORITY_LEVEL_MEDIUM"
    | "PRIORITY_LEVEL_HIGH"
    | "PRIORITY_LEVEL_CRITICAL"
    | (string & {});
  /** Human-readable explanation from the model, detailing why a particular result is considered to have a certain priority. */
  reasoning?: string;
}

export const PriorityAnalysis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  confidence: Schema.optional(Schema.String),
  priorityLevel: Schema.optional(Schema.String),
  reasoning: Schema.optional(Schema.String),
}).annotate({ identifier: "PriorityAnalysis" });

export interface Alert {
  /** Output only. High-Precision Severity Analysis for the alert. */
  severityAnalysis?: SeverityAnalysis;
  /** Output only. The resource names of the Configurations bound to this alert. Format: projects/{project}/configurations/{configuration} */
  configurations?: ReadonlyArray<string>;
  /** Identifier. Server generated name for the alert. format is projects/{project}/alerts/{alert} */
  name?: string;
  /** Output only. Findings that are covered by this alert. */
  findings?: ReadonlyArray<string>;
  /** Optional. If included when updating an alert, this should be set to the current etag of the alert. If the etags do not match, the update will be rejected and an ABORTED error will be returned. */
  etag?: string;
  /** Output only. The number of findings associated with this alert. */
  findingCount?: string;
  /** Output only. A short title for the alert. */
  displayName?: string;
  /** Output only. High-Precision Relevance Analysis verdict for the alert. */
  relevanceAnalysis?: RelevanceAnalysis;
  /** Output only. Details object for the alert, not all alerts will have a details object. */
  detail?: AlertDetail;
  /** Output only. High-Precision Priority Analysis for the alert. */
  priorityAnalysis?: PriorityAnalysis;
  /** Output only. External ID for the alert. This is used internally to provide protection against out of order updates. */
  externalId?: string;
  /** Output only. Audit information for the alert. */
  audit?: Audit;
  /** Output only. alert names of the alerts that are duplicates of this alert. Format: projects/{project}/alerts/{alert} */
  duplicatedBy?: ReadonlyArray<string>;
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
  /** Output only. alert name of the alert this alert is a duplicate of. Format: projects/{project}/alerts/{alert} */
  duplicateOf?: string;
  /** Optional. AI summary of the finding. */
  aiSummary?: string;
}

export const Alert = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  severityAnalysis: Schema.optional(SeverityAnalysis),
  configurations: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.optional(Schema.String),
  findings: Schema.optional(Schema.Array(Schema.String)),
  etag: Schema.optional(Schema.String),
  findingCount: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  relevanceAnalysis: Schema.optional(RelevanceAnalysis),
  detail: Schema.optional(AlertDetail),
  priorityAnalysis: Schema.optional(PriorityAnalysis),
  externalId: Schema.optional(Schema.String),
  audit: Schema.optional(Audit),
  duplicatedBy: Schema.optional(Schema.Array(Schema.String)),
  state: Schema.optional(Schema.String),
  duplicateOf: Schema.optional(Schema.String),
  aiSummary: Schema.optional(Schema.String),
}).annotate({ identifier: "Alert" });

export interface MarkAlertAsResolvedRequest {}

export const MarkAlertAsResolvedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsResolvedRequest",
  });

export interface ListConfigurationsResponse {
  /** List of configurations. */
  configurations?: ReadonlyArray<Configuration>;
  /** Page token. */
  nextPageToken?: string;
}

export const ListConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurations: Schema.optional(Schema.Array(Configuration)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConfigurationsResponse" });

export interface AlertDocumentTranslation {
  /** Output only. The translated content of the document. */
  translatedContent?: string;
  /** Output only. The translated title of the document. */
  translatedTitle?: string;
}

export const AlertDocumentTranslation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    translatedContent: Schema.optional(Schema.String),
    translatedTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlertDocumentTranslation" });

export interface MarkAlertAsNotActionableRequest {}

export const MarkAlertAsNotActionableRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsNotActionableRequest",
  });

export interface MarkAlertAsTriagedRequest {}

export const MarkAlertAsTriagedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAlertAsTriagedRequest",
  });

export interface UpsertConfigurationResponse {
  /** Output only. Created configuration ID with server assigned id. */
  configuration?: string;
}

export const UpsertConfigurationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpsertConfigurationResponse" });

export interface AlertDocument {
  /** Output only. AI summary of the finding. */
  aiSummary?: string;
  /** Output only. The time the document was created. */
  createTime?: string;
  /** Output only. The language code of the document. */
  languageCode?: string;
  /** Output only. The content of the document. */
  content?: string;
  /** Output only. Time when the intel was last updated by the source. */
  sourceUpdateTime?: string;
  /** Output only. The author of the document. */
  author?: string;
  /** Output only. Source of the intel item, e.g. DarkMarket. */
  source?: string;
  /** Output only. Time when GTI received the intel. */
  ingestTime?: string;
  /** Output only. URI of the intel item from the source. */
  sourceUri?: string;
  /** Output only. Time when the origin source collected the intel. */
  collectionTime?: string;
  /** Output only. The title of the document, if available. */
  title?: string;
  /** Output only. The translation of the document, if available. */
  translation?: AlertDocumentTranslation;
  /** Identifier. Server generated name for the alert document. format is projects/{project}/alerts/{alert}/documents/{document} */
  name?: string;
}

export const AlertDocument = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aiSummary: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
  content: Schema.optional(Schema.String),
  sourceUpdateTime: Schema.optional(Schema.String),
  author: Schema.optional(Schema.String),
  source: Schema.optional(Schema.String),
  ingestTime: Schema.optional(Schema.String),
  sourceUri: Schema.optional(Schema.String),
  collectionTime: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  translation: Schema.optional(AlertDocumentTranslation),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "AlertDocument" });

export interface ListAlertsResponse {
  /** List of alerts. */
  alerts?: ReadonlyArray<Alert>;
  /** Page token. */
  nextPageToken?: string;
}

export const ListAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alerts: Schema.optional(Schema.Array(Alert)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListAlertsResponse" });

export interface MarkAlertAsReadRequest {}

export const MarkAlertAsReadRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "MarkAlertAsReadRequest" });

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
      path: "v1beta/{name}:generateOrgProfile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateOrgProfileProjectsRequest>;

export type GenerateOrgProfileProjectsResponse = Operation;
export const GenerateOrgProfileProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GenerateOrgProfileProjectsError = DefaultErrors;

/** Triggers the generation of a Customer Profile for a project. */
export const generateOrgProfileProjects: API.OperationMethod<
  GenerateOrgProfileProjectsRequest,
  GenerateOrgProfileProjectsResponse,
  GenerateOrgProfileProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateOrgProfileProjectsRequest,
  output: GenerateOrgProfileProjectsResponse,
  errors: [],
}));

export interface ListProjectsAlertsRequest {
  /** Required. Parent of the alerts. Format: projects/{project} */
  parent: string;
  /** Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". */
  orderBy?: string;
  /** Optional. Page token. */
  pageToken?: string;
  /** Optional. Filter criteria. */
  filter?: string;
  /** Optional. Page size. */
  pageSize?: number;
}

export const ListProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/alerts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAlertsRequest>;

export type ListProjectsAlertsResponse = ListAlertsResponse;
export const ListProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAlertsResponse;

export type ListProjectsAlertsError = DefaultErrors;

/** Get a list of alerts that meet the filter criteria. */
export const listProjectsAlerts: API.PaginatedOperationMethod<
  ListProjectsAlertsRequest,
  ListProjectsAlertsResponse,
  ListProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAlertsRequest,
  output: ListProjectsAlertsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    T.Http({ method: "POST", path: "v1beta/{name}:read", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReadProjectsAlertsRequest>;

export type ReadProjectsAlertsResponse = Alert;
export const ReadProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type ReadProjectsAlertsError = DefaultErrors;

/** Marks an alert as read - READ. */
export const readProjectsAlerts: API.OperationMethod<
  ReadProjectsAlertsRequest,
  ReadProjectsAlertsResponse,
  ReadProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadProjectsAlertsRequest,
  output: ReadProjectsAlertsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1beta/{name}:escalate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EscalateProjectsAlertsRequest>;

export type EscalateProjectsAlertsResponse = Alert;
export const EscalateProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type EscalateProjectsAlertsError = DefaultErrors;

/** Marks an alert as escalated - ESCALATED. */
export const escalateProjectsAlerts: API.OperationMethod<
  EscalateProjectsAlertsRequest,
  EscalateProjectsAlertsResponse,
  EscalateProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EscalateProjectsAlertsRequest,
  output: EscalateProjectsAlertsResponse,
  errors: [],
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
      path: "v1beta/{name}:notActionable",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<NotActionableProjectsAlertsRequest>;

export type NotActionableProjectsAlertsResponse = Alert;
export const NotActionableProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Alert;

export type NotActionableProjectsAlertsError = DefaultErrors;

/** Marks an alert as not actionable - NOT_ACTIONABLE. */
export const notActionableProjectsAlerts: API.OperationMethod<
  NotActionableProjectsAlertsRequest,
  NotActionableProjectsAlertsResponse,
  NotActionableProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: NotActionableProjectsAlertsRequest,
  output: NotActionableProjectsAlertsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1beta/{name}:duplicate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DuplicateProjectsAlertsRequest>;

export type DuplicateProjectsAlertsResponse = Alert;
export const DuplicateProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Alert;

export type DuplicateProjectsAlertsError = DefaultErrors;

/** Marks an alert as a duplicate of another alert. - DUPLICATE. */
export const duplicateProjectsAlerts: API.OperationMethod<
  DuplicateProjectsAlertsRequest,
  DuplicateProjectsAlertsResponse,
  DuplicateProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DuplicateProjectsAlertsRequest,
  output: DuplicateProjectsAlertsResponse,
  errors: [],
}));

export interface GetProjectsAlertsRequest {
  /** Required. Name of the alert to get. Format: projects/{project}/alerts/{alert} */
  name: string;
}

export const GetProjectsAlertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAlertsRequest>;

export type GetProjectsAlertsResponse = Alert;
export const GetProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type GetProjectsAlertsError = DefaultErrors;

/** Get an alert by name. */
export const getProjectsAlerts: API.OperationMethod<
  GetProjectsAlertsRequest,
  GetProjectsAlertsResponse,
  GetProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAlertsRequest,
  output: GetProjectsAlertsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1beta/{parent}/alerts:enumerateFacets" }),
    svc,
  ) as unknown as Schema.Schema<EnumerateFacetsProjectsAlertsRequest>;

export type EnumerateFacetsProjectsAlertsResponse =
  EnumerateAlertFacetsResponse;
export const EnumerateFacetsProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EnumerateAlertFacetsResponse;

export type EnumerateFacetsProjectsAlertsError = DefaultErrors;

/** EnumerateAlertFacets returns the facets and the number of alerts that meet the filter criteria and have that value for each facet. */
export const enumerateFacetsProjectsAlerts: API.OperationMethod<
  EnumerateFacetsProjectsAlertsRequest,
  EnumerateFacetsProjectsAlertsResponse,
  EnumerateFacetsProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnumerateFacetsProjectsAlertsRequest,
  output: EnumerateFacetsProjectsAlertsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1beta/{name}:triage", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TriageProjectsAlertsRequest>;

export type TriageProjectsAlertsResponse = Alert;
export const TriageProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type TriageProjectsAlertsError = DefaultErrors;

/** Marks an alert as triaged - TRIAGED. */
export const triageProjectsAlerts: API.OperationMethod<
  TriageProjectsAlertsRequest,
  TriageProjectsAlertsResponse,
  TriageProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TriageProjectsAlertsRequest,
  output: TriageProjectsAlertsResponse,
  errors: [],
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
      path: "v1beta/{name}:trackExternally",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TrackExternallyProjectsAlertsRequest>;

export type TrackExternallyProjectsAlertsResponse = Alert;
export const TrackExternallyProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Alert;

export type TrackExternallyProjectsAlertsError = DefaultErrors;

/** Marks an alert as tracked externally - TRACKED_EXTERNALLY. */
export const trackExternallyProjectsAlerts: API.OperationMethod<
  TrackExternallyProjectsAlertsRequest,
  TrackExternallyProjectsAlertsResponse,
  TrackExternallyProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TrackExternallyProjectsAlertsRequest,
  output: TrackExternallyProjectsAlertsResponse,
  errors: [],
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
      path: "v1beta/{name}:falsePositive",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FalsePositiveProjectsAlertsRequest>;

export type FalsePositiveProjectsAlertsResponse = Alert;
export const FalsePositiveProjectsAlertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Alert;

export type FalsePositiveProjectsAlertsError = DefaultErrors;

/** Marks an alert as a false positive - FALSE_POSITIVE. */
export const falsePositiveProjectsAlerts: API.OperationMethod<
  FalsePositiveProjectsAlertsRequest,
  FalsePositiveProjectsAlertsResponse,
  FalsePositiveProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FalsePositiveProjectsAlertsRequest,
  output: FalsePositiveProjectsAlertsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1beta/{name}:resolve", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResolveProjectsAlertsRequest>;

export type ResolveProjectsAlertsResponse = Alert;
export const ResolveProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type ResolveProjectsAlertsError = DefaultErrors;

/** Marks an alert to closed state - RESOLVED. */
export const resolveProjectsAlerts: API.OperationMethod<
  ResolveProjectsAlertsRequest,
  ResolveProjectsAlertsResponse,
  ResolveProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResolveProjectsAlertsRequest,
  output: ResolveProjectsAlertsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1beta/{name}:benign", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<BenignProjectsAlertsRequest>;

export type BenignProjectsAlertsResponse = Alert;
export const BenignProjectsAlertsResponse = /*@__PURE__*/ /*#__PURE__*/ Alert;

export type BenignProjectsAlertsError = DefaultErrors;

/** Marks an alert as benign - BENIGN. */
export const benignProjectsAlerts: API.OperationMethod<
  BenignProjectsAlertsRequest,
  BenignProjectsAlertsResponse,
  BenignProjectsAlertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BenignProjectsAlertsRequest,
  output: BenignProjectsAlertsResponse,
  errors: [],
}));

export interface GetProjectsAlertsDocumentsRequest {
  /** Required. Name of the alert document to get. Format: projects/{project}/alerts/{alert}/documents/{document} */
  name: string;
}

export const GetProjectsAlertsDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAlertsDocumentsRequest>;

export type GetProjectsAlertsDocumentsResponse = AlertDocument;
export const GetProjectsAlertsDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AlertDocument;

export type GetProjectsAlertsDocumentsError = DefaultErrors;

/** Gets a specific document associated with an alert. */
export const getProjectsAlertsDocuments: API.OperationMethod<
  GetProjectsAlertsDocumentsRequest,
  GetProjectsAlertsDocumentsResponse,
  GetProjectsAlertsDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAlertsDocumentsRequest,
  output: GetProjectsAlertsDocumentsResponse,
  errors: [],
}));

export interface ListProjectsFindingsRequest {
  /** Optional. Filter criteria. */
  filter?: string;
  /** Optional. Page size. */
  pageSize?: number;
  /** Required. Parent of the findings. */
  parent: string;
  /** Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". */
  orderBy?: string;
  /** Optional. Page token. */
  pageToken?: string;
}

export const ListProjectsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/findings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsFindingsRequest>;

export type ListProjectsFindingsResponse = ListFindingsResponse;
export const ListProjectsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFindingsResponse;

export type ListProjectsFindingsError = DefaultErrors;

/** Get a list of findings that meet the filter criteria. The `parent` field in ListFindingsRequest should have the format: projects/{project} */
export const listProjectsFindings: API.PaginatedOperationMethod<
  ListProjectsFindingsRequest,
  ListProjectsFindingsResponse,
  ListProjectsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsFindingsRequest,
  output: ListProjectsFindingsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchProjectsFindingsRequest {
  /** Required. Parent of the findings. Format: vaults/{vault} */
  parent: string;
  /** Optional. Query on what findings will be returned. This supports the same filter criteria as FindingService.ListFindings as well as the following relationship query `has_alert`. Example: - `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")` */
  query?: string;
  /** Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". */
  orderBy?: string;
  /** Optional. Page token. */
  pageToken?: string;
  /** Optional. Page size. */
  pageSize?: number;
}

export const SearchProjectsFindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/findings:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsFindingsRequest>;

export type SearchProjectsFindingsResponse = SearchFindingsResponse;
export const SearchProjectsFindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchFindingsResponse;

export type SearchProjectsFindingsError = DefaultErrors;

/** SearchFindings is a more powerful version of ListFindings that supports complex queries like "findings for alerts" using functions such as `has_alert` in the query string. The `parent` field in SearchFindingsRequest should have the format: projects/{project} Example to search for findings for a specific issue: `has_alert("name=\"projects/gti-12345/alerts/alert-12345\"")` */
export const searchProjectsFindings: API.PaginatedOperationMethod<
  SearchProjectsFindingsRequest,
  SearchProjectsFindingsResponse,
  SearchProjectsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsFindingsRequest,
  output: SearchProjectsFindingsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsFindingsRequest>;

export type GetProjectsFindingsResponse = Finding;
export const GetProjectsFindingsResponse = /*@__PURE__*/ /*#__PURE__*/ Finding;

export type GetProjectsFindingsError = DefaultErrors;

/** Get a finding by name. The `name` field should have the format: `projects/{project}/findings/{finding}` */
export const getProjectsFindings: API.OperationMethod<
  GetProjectsFindingsRequest,
  GetProjectsFindingsResponse,
  GetProjectsFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsFindingsRequest,
  output: GetProjectsFindingsResponse,
  errors: [],
}));

export interface ListProjectsConfigurationsRequest {
  /** Optional. Filter criteria. */
  filter?: string;
  /** Optional. Page size. */
  pageSize?: number;
  /** Required. Parent of the configuration. Format: vaults/{vault} */
  parent: string;
  /** Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2". */
  orderBy?: string;
  /** Optional. Page token. */
  pageToken?: string;
}

export const ListProjectsConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/configurations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConfigurationsRequest>;

export type ListProjectsConfigurationsResponse = ListConfigurationsResponse;
export const ListProjectsConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConfigurationsResponse;

export type ListProjectsConfigurationsError = DefaultErrors;

/** Get a list of configurations that meet the filter criteria. */
export const listProjectsConfigurations: API.PaginatedOperationMethod<
  ListProjectsConfigurationsRequest,
  ListProjectsConfigurationsResponse,
  ListProjectsConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConfigurationsRequest,
  output: ListProjectsConfigurationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsConfigurationsRequest {
  /** Required. Name of the configuration to get. Format: vaults/{vault}/configurations/{configuration} */
  name: string;
}

export const GetProjectsConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsConfigurationsRequest>;

export type GetProjectsConfigurationsResponse = Configuration;
export const GetProjectsConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Configuration;

export type GetProjectsConfigurationsError = DefaultErrors;

/** Get a configuration by name. */
export const getProjectsConfigurations: API.OperationMethod<
  GetProjectsConfigurationsRequest,
  GetProjectsConfigurationsResponse,
  GetProjectsConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsConfigurationsRequest,
  output: GetProjectsConfigurationsResponse,
  errors: [],
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
      path: "v1beta/{parent}/configurations:upsert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpsertProjectsConfigurationsRequest>;

export type UpsertProjectsConfigurationsResponse = UpsertConfigurationResponse;
export const UpsertProjectsConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UpsertConfigurationResponse;

export type UpsertProjectsConfigurationsError = DefaultErrors;

/** Creates or updates a configuration. */
export const upsertProjectsConfigurations: API.OperationMethod<
  UpsertProjectsConfigurationsRequest,
  UpsertProjectsConfigurationsResponse,
  UpsertProjectsConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpsertProjectsConfigurationsRequest,
  output: UpsertProjectsConfigurationsResponse,
  errors: [],
}));

export interface ListProjectsConfigurationsRevisionsRequest {
  /** Required. The name of the Configuration to retrieve Revisions for */
  parent: string;
  /** Optional. Specify ordering of response */
  orderBy?: string;
  /** Optional. A page token provided by the API */
  pageToken?: string;
  /** Optional. An AIP-160 filter string */
  filter?: string;
  /** Optional. Page Size */
  pageSize?: number;
}

export const ListProjectsConfigurationsRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{parent}/revisions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsConfigurationsRevisionsRequest>;

export type ListProjectsConfigurationsRevisionsResponse =
  ListConfigurationRevisionsResponse;
export const ListProjectsConfigurationsRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConfigurationRevisionsResponse;

export type ListProjectsConfigurationsRevisionsError = DefaultErrors;

/** List configuration revisions that meet the filter criteria. */
export const listProjectsConfigurationsRevisions: API.PaginatedOperationMethod<
  ListProjectsConfigurationsRevisionsRequest,
  ListProjectsConfigurationsRevisionsResponse,
  ListProjectsConfigurationsRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsConfigurationsRevisionsRequest,
  output: ListProjectsConfigurationsRevisionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
