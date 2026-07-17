// ==========================================================================
// On-Demand Scanning API (ondemandscanning v1beta1)
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
  name: "ondemandscanning",
  version: "v1beta1",
  rootUrl: "https://ondemandscanning.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface FindingLocation {
  /** Relative path of the file containing the finding. */
  filePath?: string;
  /** Line number (1-based), or 0 if whole File / unknown. */
  lineNumber?: string;
}

export const FindingLocation: Schema.Codec<FindingLocation> =
  /*@__PURE__*/ Schema.Struct({
    filePath: Schema.optional(Schema.String),
    lineNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "FindingLocation" });

export interface Finding {
  /** Category of the finding. */
  category?: string;
  /** Location (path and line) where the finding was detected. */
  location?: FindingLocation;
  /** Scanner determines which engine (e.g. static, llm) emitted the finding. */
  scanner?:
    | "SCANNER_UNSPECIFIED"
    | "STATIC"
    | "LLM"
    | "WS_POLICY"
    | (string & {});
  /** Severity of the finding. */
  severity?: "SEVERITY_UNSPECIFIED" | "CRITICAL" | "HIGH" | (string & {});
  /** Description of the finding category. */
  details?: string;
}

export const Finding: Schema.Codec<Finding> =
  /*@__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    location: Schema.optional(FindingLocation),
    scanner: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "Finding" });

export interface AISkillAnalysisOccurrence {
  /** Name of the skill that produced this analysis. */
  skillName?: string;
  /** Findings produced by the analysis. */
  findings?: ReadonlyArray<Finding>;
  /** Maximum severity found among findings. */
  maxSeverity?: "SEVERITY_UNSPECIFIED" | "CRITICAL" | "HIGH" | (string & {});
}

export const AISkillAnalysisOccurrence: Schema.Codec<AISkillAnalysisOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    skillName: Schema.optional(Schema.String),
    findings: Schema.optional(Schema.Array(Finding)),
    maxSeverity: Schema.optional(Schema.String),
  }).annotate({ identifier: "AISkillAnalysisOccurrence" });

export interface DeploymentOccurrence {
  /** End of the lifetime of this deployment. */
  undeployTime?: string;
  /** Identity of the user that triggered this deployment. */
  userEmail?: string;
  /** Platform hosting this deployment. */
  platform?: "PLATFORM_UNSPECIFIED" | "GKE" | "FLEX" | "CUSTOM" | (string & {});
  /** Required. Beginning of the lifetime of this deployment. */
  deployTime?: string;
  /** Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name. */
  resourceUri?: ReadonlyArray<string>;
  /** Configuration used to create this deployment. */
  config?: string;
  /** Address of the runtime element hosting this deployment. */
  address?: string;
}

export const DeploymentOccurrence: Schema.Codec<DeploymentOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    undeployTime: Schema.optional(Schema.String),
    userEmail: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    deployTime: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.Array(Schema.String)),
    config: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeploymentOccurrence" });

export interface EnvelopeSignature {
  keyid?: string;
  sig?: string;
}

export const EnvelopeSignature: Schema.Codec<EnvelopeSignature> =
  /*@__PURE__*/ Schema.Struct({
    keyid: Schema.optional(Schema.String),
    sig: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvelopeSignature" });

export interface Envelope {
  payloadType?: string;
  signatures?: ReadonlyArray<EnvelopeSignature>;
  payload?: string;
}

export const Envelope: Schema.Codec<Envelope> =
  /*@__PURE__*/ Schema.Struct({
    payloadType: Schema.optional(Schema.String),
    signatures: Schema.optional(Schema.Array(EnvelopeSignature)),
    payload: Schema.optional(Schema.String),
  }).annotate({ identifier: "Envelope" });

export interface GrafeasV1BaseImage {
  /** The repository name in which the base image is from. */
  repository?: string;
  /** The number of layers that the base image is composed of. */
  layerCount?: number;
  /** The name of the base image. */
  name?: string;
  /** The registry in which the base image is from. */
  registry?: string;
}

export const GrafeasV1BaseImage: Schema.Codec<GrafeasV1BaseImage> =
  /*@__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    layerCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    registry: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1BaseImage" });

export interface GrafeasV1LayerDetails {
  /** The base images the layer is found within. */
  baseImages?: ReadonlyArray<GrafeasV1BaseImage>;
  /** The index of the layer in the container image. */
  index?: number;
  /** The layer build command that was used to build the layer. This may not be found in all layers depending on how the container image is built. */
  command?: string;
  /** The diff ID (typically a sha256 hash) of the layer in the container image. */
  diffId?: string;
  /** The layer chain ID (sha256 hash) of the layer in the container image. https://github.com/opencontainers/image-spec/blob/main/config.md#layer-chainid */
  chainId?: string;
}

export const GrafeasV1LayerDetails: Schema.Codec<GrafeasV1LayerDetails> =
  /*@__PURE__*/ Schema.Struct({
    baseImages: Schema.optional(Schema.Array(GrafeasV1BaseImage)),
    index: Schema.optional(Schema.Number),
    command: Schema.optional(Schema.String),
    diffId: Schema.optional(Schema.String),
    chainId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1LayerDetails" });

export interface GrafeasV1FileLocation {
  /** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
  filePath?: string;
  /** Each package found in a file should have its own layer metadata (that is, information from the origin layer of the package). */
  layerDetails?: GrafeasV1LayerDetails;
  /** Line number in the file where the package was found. Optional field that only applies to source repository scanning. */
  lineNumber?: number;
}

export const GrafeasV1FileLocation: Schema.Codec<GrafeasV1FileLocation> =
  /*@__PURE__*/ Schema.Struct({
    filePath: Schema.optional(Schema.String),
    layerDetails: Schema.optional(GrafeasV1LayerDetails),
    lineNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GrafeasV1FileLocation" });

export interface Version {
  /** Used to correct mistakes in the version numbering scheme. */
  epoch?: number;
  /** The iteration of the package build from the above version. */
  revision?: string;
  /** Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range. */
  inclusive?: boolean;
  /** Required. Distinguishes between sentinel MIN/MAX versions and normal versions. */
  kind?:
    | "VERSION_KIND_UNSPECIFIED"
    | "NORMAL"
    | "MINIMUM"
    | "MAXIMUM"
    | (string & {});
  /** Required only when version kind is NORMAL. The main part of the version name. */
  name?: string;
  /** Human readable version string. This string is of the form :- and is only set when kind is NORMAL. */
  fullName?: string;
}

export const Version: Schema.Codec<Version> =
  /*@__PURE__*/ Schema.Struct({
    epoch: Schema.optional(Schema.Number),
    revision: Schema.optional(Schema.String),
    inclusive: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    fullName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Version" });

export interface PackageIssue {
  /** Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. */
  effectiveSeverity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** The location at which this package was found. */
  fileLocation?: ReadonlyArray<GrafeasV1FileLocation>;
  /** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in. */
  affectedCpeUri?: string;
  /** The package this vulnerability was fixed in. It is possible for this to be different from the affected_package. */
  fixedPackage?: string;
  /** The type of package (e.g. OS, MAVEN, GO). */
  packageType?: string;
  /** Required. The version of the package that is installed on the resource affected by this vulnerability. */
  affectedVersion?: Version;
  /** The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri. */
  fixedCpeUri?: string;
  /** Required. The package this vulnerability was found in. */
  affectedPackage?: string;
  /** Required. The version of the package this vulnerability was fixed in. Setting this to VersionKind.MAXIMUM means no fix is yet available. */
  fixedVersion?: Version;
  /** Output only. Whether a fix is available for this package. */
  fixAvailable?: boolean;
}

export const PackageIssue: Schema.Codec<PackageIssue> =
  /*@__PURE__*/ Schema.Struct({
    effectiveSeverity: Schema.optional(Schema.String),
    fileLocation: Schema.optional(Schema.Array(GrafeasV1FileLocation)),
    affectedCpeUri: Schema.optional(Schema.String),
    fixedPackage: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    affectedVersion: Schema.optional(Version),
    fixedCpeUri: Schema.optional(Schema.String),
    affectedPackage: Schema.optional(Schema.String),
    fixedVersion: Schema.optional(Version),
    fixAvailable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PackageIssue" });

export interface CVSS {
  /** Scope (S). Defined in CVSS v3. */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  /** Attack Complexity (AC). Defined in CVSS v2, v3, v4. */
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | "ATTACK_COMPLEXITY_MEDIUM"
    | (string & {});
  /** Attack Requirements (AT). Defined in CVSS v4. */
  attackRequirements?:
    | "ATTACK_REQUIREMENTS_UNSPECIFIED"
    | "ATTACK_REQUIREMENTS_NONE"
    | "ATTACK_REQUIREMENTS_PRESENT"
    | (string & {});
  /** Vulnerable System Availability Impact (VA). Defined in CVSS v4. */
  vulnerableSystemAvailabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Attack Vector (AV). Defined in CVSS v2, v3, v4. */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  /** Vulnerable System Confidentiality Impact (VC). Defined in CVSS v4. */
  vulnerableSystemConfidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Exploit Maturity (E). Defined in CVSS v4. */
  exploitMaturity?:
    | "EXPLOIT_MATURITY_UNSPECIFIED"
    | "EXPLOIT_MATURITY_NOT_DEFINED"
    | "EXPLOIT_MATURITY_ATTACKED"
    | "EXPLOIT_MATURITY_POC"
    | "EXPLOIT_MATURITY_UNREPORTED"
    | (string & {});
  /** Integrity Impact (I). Defined in CVSS v2, v3. */
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Subsequent System Availability Impact (SA). Defined in CVSS v4. */
  subsequentSystemAvailabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Authentication (Au). Defined in CVSS v2. */
  authentication?:
    | "AUTHENTICATION_UNSPECIFIED"
    | "AUTHENTICATION_MULTIPLE"
    | "AUTHENTICATION_SINGLE"
    | "AUTHENTICATION_NONE"
    | (string & {});
  /** Availability Impact (A). Defined in CVSS v2, v3. */
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Vulnerable System Integrity Impact (VI). Defined in CVSS v4. */
  vulnerableSystemIntegrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  impactScore?: number;
  /** Subsequent System Integrity Impact (SI). Defined in CVSS v4. */
  subsequentSystemIntegrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Privileges Required (PR). Defined in CVSS v3, v4. */
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  /** Confidentiality Impact (C). Defined in CVSS v2, v3. */
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Subsequent System Confidentiality Impact (SC). Defined in CVSS v4. */
  subsequentSystemConfidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** User Interaction (UI). Defined in CVSS v3, v4. */
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | "USER_INTERACTION_PASSIVE"
    | "USER_INTERACTION_ACTIVE"
    | (string & {});
  exploitabilityScore?: number;
}

export const CVSS: Schema.Codec<CVSS> =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    attackRequirements: Schema.optional(Schema.String),
    vulnerableSystemAvailabilityImpact: Schema.optional(Schema.String),
    attackVector: Schema.optional(Schema.String),
    vulnerableSystemConfidentialityImpact: Schema.optional(Schema.String),
    exploitMaturity: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    subsequentSystemAvailabilityImpact: Schema.optional(Schema.String),
    authentication: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    vulnerableSystemIntegrityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    impactScore: Schema.optional(Schema.Number),
    subsequentSystemIntegrityImpact: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    subsequentSystemConfidentialityImpact: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    exploitabilityScore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CVSS" });

export interface Justification {
  /** Additional details on why this justification was chosen. */
  details?: string;
  /** The justification type for this vulnerability. */
  justificationType?:
    | "JUSTIFICATION_TYPE_UNSPECIFIED"
    | "COMPONENT_NOT_PRESENT"
    | "VULNERABLE_CODE_NOT_PRESENT"
    | "VULNERABLE_CODE_NOT_IN_EXECUTE_PATH"
    | "VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY"
    | "INLINE_MITIGATIONS_ALREADY_EXIST"
    | (string & {});
}

export const Justification: Schema.Codec<Justification> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.String),
    justificationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Justification" });

export interface RelatedUrl {
  /** Label to describe usage of the URL. */
  label?: string;
  /** Specific URL associated with the resource. */
  url?: string;
}

export const RelatedUrl: Schema.Codec<RelatedUrl> =
  /*@__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "RelatedUrl" });

export interface Remediation {
  /** Contains the URL where to obtain the remediation. */
  remediationUri?: RelatedUrl;
  /** Contains a comprehensive human-readable discussion of the remediation. */
  details?: string;
  /** The type of remediation that can be applied. */
  remediationType?:
    | "REMEDIATION_TYPE_UNSPECIFIED"
    | "MITIGATION"
    | "NO_FIX_PLANNED"
    | "NONE_AVAILABLE"
    | "VENDOR_FIX"
    | "WORKAROUND"
    | (string & {});
}

export const Remediation: Schema.Codec<Remediation> =
  /*@__PURE__*/ Schema.Struct({
    remediationUri: Schema.optional(RelatedUrl),
    details: Schema.optional(Schema.String),
    remediationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Remediation" });

export interface VexAssessment {
  /** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
  vulnerabilityId?: string;
  /** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
  justification?: Justification;
  /** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
  cve?: string;
  /** Holds a list of references associated with this vulnerability item and assessment. */
  relatedUris?: ReadonlyArray<RelatedUrl>;
  /** The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`. */
  noteName?: string;
  /** Provides the state of this Vulnerability assessment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "AFFECTED"
    | "NOT_AFFECTED"
    | "FIXED"
    | "UNDER_INVESTIGATION"
    | (string & {});
  /** Contains information about the impact of this vulnerability, this will change with time. */
  impacts?: ReadonlyArray<string>;
  /** Specifies details on how to handle (and presumably, fix) a vulnerability. */
  remediations?: ReadonlyArray<Remediation>;
}

export const VexAssessment: Schema.Codec<VexAssessment> =
  /*@__PURE__*/ Schema.Struct({
    vulnerabilityId: Schema.optional(Schema.String),
    justification: Schema.optional(Justification),
    cve: Schema.optional(Schema.String),
    relatedUris: Schema.optional(Schema.Array(RelatedUrl)),
    noteName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    impacts: Schema.optional(Schema.Array(Schema.String)),
    remediations: Schema.optional(Schema.Array(Remediation)),
  }).annotate({ identifier: "VexAssessment" });

export interface CISAKnownExploitedVulnerabilities {
  /** Whether the vulnerability is known to have been leveraged as part of a ransomware campaign. */
  knownRansomwareCampaignUse?: string;
}

export const CISAKnownExploitedVulnerabilities: Schema.Codec<CISAKnownExploitedVulnerabilities> =
  /*@__PURE__*/ Schema.Struct({
    knownRansomwareCampaignUse: Schema.optional(Schema.String),
  }).annotate({ identifier: "CISAKnownExploitedVulnerabilities" });

export interface ExploitPredictionScoringSystem {
  /** The percentile of the current score, the proportion of all scored vulnerabilities with the same or a lower EPSS score */
  percentile?: number;
  /** The EPSS score representing the probability [0-1] of exploitation in the wild in the next 30 days */
  score?: number;
}

export const ExploitPredictionScoringSystem: Schema.Codec<ExploitPredictionScoringSystem> =
  /*@__PURE__*/ Schema.Struct({
    percentile: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExploitPredictionScoringSystem" });

export interface Risk {
  /** CISA maintains the authoritative source of vulnerabilities that have been exploited in the wild. */
  cisaKev?: CISAKnownExploitedVulnerabilities;
  /** The Exploit Prediction Scoring System (EPSS) estimates the likelihood (probability) that a software vulnerability will be exploited in the wild. */
  epss?: ExploitPredictionScoringSystem;
}

export const Risk: Schema.Codec<Risk> =
  /*@__PURE__*/ Schema.Struct({
    cisaKev: Schema.optional(CISAKnownExploitedVulnerabilities),
    epss: Schema.optional(ExploitPredictionScoringSystem),
  }).annotate({ identifier: "Risk" });

export interface VulnerabilityOccurrence {
  /** Occurrence-specific extra details about the vulnerability. */
  extraDetails?: string;
  /** Output only. A one sentence description of this vulnerability. */
  shortDescription?: string;
  /** Required. The set of affected locations and their fixes (if available) within the associated resource. */
  packageIssue?: ReadonlyArray<PackageIssue>;
  /** Output only. A detailed description of this vulnerability. */
  longDescription?: string;
  /** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  type?: string;
  /** The cvss v4 score for the vulnerability. */
  cvssV4?: CVSS;
  vexAssessment?: VexAssessment;
  /** Risk information about the vulnerability, such as CISA, EPSS, etc. */
  risk?: Risk;
  /** Output only. URLs related to this vulnerability. */
  relatedUrls?: ReadonlyArray<RelatedUrl>;
  /** Output only. The note provider assigned severity of this vulnerability. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Output only. CVSS version used to populate cvss_score and severity. */
  cvssVersion?:
    | "CVSS_VERSION_UNSPECIFIED"
    | "CVSS_VERSION_2"
    | "CVSS_VERSION_3"
    | "CVSS_VERSION_4"
    | (string & {});
  /** The cvss v2 score for the vulnerability. */
  cvssV2?: CVSS;
  /** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
  cvssScore?: number;
  /** Output only. Whether at least one of the affected packages has a fix available. */
  fixAvailable?: boolean;
  /** The cvss v3 score for the vulnerability. */
  cvssv3?: CVSS;
  /** The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
  effectiveSeverity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
}

export const VulnerabilityOccurrence: Schema.Codec<VulnerabilityOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    extraDetails: Schema.optional(Schema.String),
    shortDescription: Schema.optional(Schema.String),
    packageIssue: Schema.optional(Schema.Array(PackageIssue)),
    longDescription: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    cvssV4: Schema.optional(CVSS),
    vexAssessment: Schema.optional(VexAssessment),
    risk: Schema.optional(Risk),
    relatedUrls: Schema.optional(Schema.Array(RelatedUrl)),
    severity: Schema.optional(Schema.String),
    cvssVersion: Schema.optional(Schema.String),
    cvssV2: Schema.optional(CVSS),
    cvssScore: Schema.optional(Schema.Number),
    fixAvailable: Schema.optional(Schema.Boolean),
    cvssv3: Schema.optional(CVSS),
    effectiveSeverity: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilityOccurrence" });

export interface License {
  /** Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2". */
  expression?: string;
  /** Comments */
  comments?: string;
}

export const License: Schema.Codec<License> =
  /*@__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    comments: Schema.optional(Schema.String),
  }).annotate({ identifier: "License" });

export interface Location {
  /** Deprecated. The version installed at this location. */
  version?: Version;
  /** Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) */
  cpeUri?: string;
  /** The path from which we gathered that this package/version is installed. */
  path?: string;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Version),
    cpeUri: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface PackageOccurrence {
  /** Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
  cpeUri?: string;
  /** Licenses that have been declared by the authors of the package. */
  license?: License;
  /** Output only. The version of the package. */
  version?: Version;
  /** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  packageType?: string;
  /** All of the places within the filesystem versions of this package have been found. */
  location?: ReadonlyArray<Location>;
  /** Required. Output only. The name of the installed package. */
  name?: string;
}

export const PackageOccurrence: Schema.Codec<PackageOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    cpeUri: Schema.optional(Schema.String),
    license: Schema.optional(License),
    version: Schema.optional(Version),
    architecture: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    location: Schema.optional(Schema.Array(Location)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PackageOccurrence" });

export interface SbomReferenceIntotoPredicate {
  /** The person or system referring this predicate to the consumer. */
  referrerId?: string;
  /** A map of algorithm to digest of the contents of the SBOM. */
  digest?: Record<string, string>;
  /** The location of the SBOM. */
  location?: string;
  /** The mime type of the SBOM. */
  mimeType?: string;
}

export const SbomReferenceIntotoPredicate: Schema.Codec<SbomReferenceIntotoPredicate> =
  /*@__PURE__*/ Schema.Struct({
    referrerId: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SbomReferenceIntotoPredicate" });

export interface Subject {
  name?: string;
  /** `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet */
  digest?: Record<string, string>;
}

export const Subject: Schema.Codec<Subject> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Subject" });

export interface SbomReferenceIntotoPayload {
  /** Identifier for the schema of the Statement. */
  _type?: string;
  /** Additional parameters of the Predicate. Includes the actual data about the SBOM. */
  predicate?: SbomReferenceIntotoPredicate;
  /** URI identifying the type of the Predicate. */
  predicateType?: string;
  /** Set of software artifacts that the attestation applies to. Each element represents a single software artifact. */
  subject?: ReadonlyArray<Subject>;
}

export const SbomReferenceIntotoPayload: Schema.Codec<SbomReferenceIntotoPayload> =
  /*@__PURE__*/ Schema.Struct({
    _type: Schema.optional(Schema.String),
    predicate: Schema.optional(SbomReferenceIntotoPredicate),
    predicateType: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.Array(Subject)),
  }).annotate({ identifier: "SbomReferenceIntotoPayload" });

export interface SBOMReferenceOccurrence {
  /** The signatures over the payload. */
  signatures?: ReadonlyArray<EnvelopeSignature>;
  /** The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'. */
  payloadType?: string;
  /** The actual payload that contains the SBOM reference data. */
  payload?: SbomReferenceIntotoPayload;
}

export const SBOMReferenceOccurrence: Schema.Codec<SBOMReferenceOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    signatures: Schema.optional(Schema.Array(EnvelopeSignature)),
    payloadType: Schema.optional(Schema.String),
    payload: Schema.optional(SbomReferenceIntotoPayload),
  }).annotate({ identifier: "SBOMReferenceOccurrence" });

export interface NonCompliantFile {
  /** Explains why a file is non compliant for a CIS check. */
  reason?: string;
  /** Command to display the non-compliant files. */
  displayCommand?: string;
  /** Empty if `display_command` is set. */
  path?: string;
}

export const NonCompliantFile: Schema.Codec<NonCompliantFile> =
  /*@__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    displayCommand: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "NonCompliantFile" });

export interface ComplianceVersion {
  /** The CPE URI (https://cpe.mitre.org/specification/) this benchmark is applicable to. */
  cpeUri?: string;
  /** The name of the document that defines this benchmark, e.g. "CIS Container-Optimized OS". */
  benchmarkDocument?: string;
  /** The version of the benchmark. This is set to the version of the OS-specific CIS document the benchmark is defined in. */
  version?: string;
}

export const ComplianceVersion: Schema.Codec<ComplianceVersion> =
  /*@__PURE__*/ Schema.Struct({
    cpeUri: Schema.optional(Schema.String),
    benchmarkDocument: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComplianceVersion" });

export interface ComplianceOccurrence {
  nonCompliantFiles?: ReadonlyArray<NonCompliantFile>;
  /** The OS and config version the benchmark was run on. */
  version?: ComplianceVersion;
  nonComplianceReason?: string;
}

export const ComplianceOccurrence: Schema.Codec<ComplianceOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    nonCompliantFiles: Schema.optional(Schema.Array(NonCompliantFile)),
    version: Schema.optional(ComplianceVersion),
    nonComplianceReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComplianceOccurrence" });

export interface Fingerprint {
  /** Required. The ordered list of v2 blobs that represent a given image. */
  v2Blob?: ReadonlyArray<string>;
  /** Required. The layer ID of the final layer in the Docker image's v1 representation. */
  v1Name?: string;
  /** Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept. */
  v2Name?: string;
}

export const Fingerprint: Schema.Codec<Fingerprint> =
  /*@__PURE__*/ Schema.Struct({
    v2Blob: Schema.optional(Schema.Array(Schema.String)),
    v1Name: Schema.optional(Schema.String),
    v2Name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Fingerprint" });

export interface Layer {
  /** Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information. */
  directive?: string;
  /** The recovered arguments to the Dockerfile directive. */
  arguments?: string;
}

export const Layer: Schema.Codec<Layer> =
  /*@__PURE__*/ Schema.Struct({
    directive: Schema.optional(Schema.String),
    arguments: Schema.optional(Schema.String),
  }).annotate({ identifier: "Layer" });

export interface ImageOccurrence {
  /** Required. The fingerprint of the derived image. */
  fingerprint?: Fingerprint;
  /** Output only. The number of layers by which this image differs from the associated image basis. */
  distance?: number;
  /** This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer. */
  layerInfo?: ReadonlyArray<Layer>;
  /** Output only. This contains the base image URL for the derived image occurrence. */
  baseResourceUrl?: string;
}

export const ImageOccurrence: Schema.Codec<ImageOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Fingerprint),
    distance: Schema.optional(Schema.Number),
    layerInfo: Schema.optional(Schema.Array(Layer)),
    baseResourceUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageOccurrence" });

export interface Command {
  /** Working directory (relative to project source root) used when running this command. */
  dir?: string;
  /** The ID(s) of the command(s) that this command depends on. */
  waitFor?: ReadonlyArray<string>;
  /** Command-line arguments used when executing this command. */
  args?: ReadonlyArray<string>;
  /** Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`. */
  name?: string;
  /** Environment variables set before running this command. */
  env?: ReadonlyArray<string>;
  /** Optional unique identifier for this command, used in wait_for to reference this command as a dependency. */
  id?: string;
}

export const Command: Schema.Codec<Command> =
  /*@__PURE__*/ Schema.Struct({
    dir: Schema.optional(Schema.String),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Command" });

export interface Artifact {
  /** Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container. */
  checksum?: string;
  /** Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`. */
  id?: string;
  /** Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image. */
  names?: ReadonlyArray<string>;
}

export const Artifact: Schema.Codec<Artifact> =
  /*@__PURE__*/ Schema.Struct({
    checksum: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Artifact" });

export interface Hash {
  /** Required. The type of hash that was performed, e.g. "SHA-256". */
  type?: string;
  /** Required. The hash value. */
  value?: string;
}

export const Hash: Schema.Codec<Hash> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Hash" });

export interface FileHashes {
  /** Required. Collection of file hashes. */
  fileHash?: ReadonlyArray<Hash>;
}

export const FileHashes: Schema.Codec<FileHashes> =
  /*@__PURE__*/ Schema.Struct({
    fileHash: Schema.optional(Schema.Array(Hash)),
  }).annotate({ identifier: "FileHashes" });

export interface GitSourceContext {
  /** Git commit hash. */
  revisionId?: string;
  /** Git repository URL. */
  url?: string;
}

export const GitSourceContext: Schema.Codec<GitSourceContext> =
  /*@__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitSourceContext" });

export interface AliasContext {
  /** The alias name. */
  name?: string;
  /** The alias kind. */
  kind?: "KIND_UNSPECIFIED" | "FIXED" | "MOVABLE" | "OTHER" | (string & {});
}

export const AliasContext: Schema.Codec<AliasContext> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AliasContext" });

export interface ProjectRepoId {
  /** The name of the repo. Leave empty for the default repo. */
  repoName?: string;
  /** The ID of the project. */
  projectId?: string;
}

export const ProjectRepoId: Schema.Codec<ProjectRepoId> =
  /*@__PURE__*/ Schema.Struct({
    repoName: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProjectRepoId" });

export interface RepoId {
  /** A combination of a project ID and a repo name. */
  projectRepoId?: ProjectRepoId;
  /** A server-assigned, globally unique identifier. */
  uid?: string;
}

export const RepoId: Schema.Codec<RepoId> =
  /*@__PURE__*/ Schema.Struct({
    projectRepoId: Schema.optional(ProjectRepoId),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "RepoId" });

export interface CloudRepoSourceContext {
  /** An alias, which may be a branch or tag. */
  aliasContext?: AliasContext;
  /** The ID of the repo. */
  repoId?: RepoId;
  /** A revision ID. */
  revisionId?: string;
}

export const CloudRepoSourceContext: Schema.Codec<CloudRepoSourceContext> =
  /*@__PURE__*/ Schema.Struct({
    aliasContext: Schema.optional(AliasContext),
    repoId: Schema.optional(RepoId),
    revisionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudRepoSourceContext" });

export interface GerritSourceContext {
  /** The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project. */
  gerritProject?: string;
  /** A revision (commit) ID. */
  revisionId?: string;
  /** The URI of a running Gerrit instance. */
  hostUri?: string;
  /** An alias, which may be a branch or tag. */
  aliasContext?: AliasContext;
}

export const GerritSourceContext: Schema.Codec<GerritSourceContext> =
  /*@__PURE__*/ Schema.Struct({
    gerritProject: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    hostUri: Schema.optional(Schema.String),
    aliasContext: Schema.optional(AliasContext),
  }).annotate({ identifier: "GerritSourceContext" });

export interface SourceContext {
  /** A SourceContext referring to any third party Git repo (e.g., GitHub). */
  git?: GitSourceContext;
  /** Labels with user defined metadata. */
  labels?: Record<string, string>;
  /** A SourceContext referring to a revision in a Google Cloud Source Repo. */
  cloudRepo?: CloudRepoSourceContext;
  /** A SourceContext referring to a Gerrit project. */
  gerrit?: GerritSourceContext;
}

export const SourceContext: Schema.Codec<SourceContext> =
  /*@__PURE__*/ Schema.Struct({
    git: Schema.optional(GitSourceContext),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    cloudRepo: Schema.optional(CloudRepoSourceContext),
    gerrit: Schema.optional(GerritSourceContext),
  }).annotate({ identifier: "SourceContext" });

export interface Source {
  /** If provided, the input binary artifacts for the build came from this location. */
  artifactStorageSourceUri?: string;
  /** Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file. */
  fileHashes?: Record<string, FileHashes>;
  /** If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field. */
  additionalContexts?: ReadonlyArray<SourceContext>;
  /** If provided, the source code used for the build came from this location. */
  context?: SourceContext;
}

export const Source: Schema.Codec<Source> =
  /*@__PURE__*/ Schema.Struct({
    artifactStorageSourceUri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(Schema.Record(Schema.String, FileHashes)),
    additionalContexts: Schema.optional(Schema.Array(SourceContext)),
    context: Schema.optional(SourceContext),
  }).annotate({ identifier: "Source" });

export interface BuildProvenance {
  /** Required. Unique identifier of the build. */
  id?: string;
  /** Version string of the builder at the time this build was executed. */
  builderVersion?: string;
  /** ID of the project. */
  projectId?: string;
  /** Commands requested by the build. */
  commands?: ReadonlyArray<Command>;
  /** Trigger identifier if the build was triggered automatically; empty if not. */
  triggerId?: string;
  /** Output of the build. */
  builtArtifacts?: ReadonlyArray<Artifact>;
  /** Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details. */
  buildOptions?: Record<string, string>;
  /** E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time. */
  creator?: string;
  /** Details of the Source input to the build. */
  sourceProvenance?: Source;
  /** Time at which the build was created. */
  createTime?: string;
  /** Time at which execution of the build was started. */
  startTime?: string;
  /** Time at which execution of the build was finished. */
  endTime?: string;
  /** URI where any logs for this provenance were written. */
  logsUri?: string;
}

export const BuildProvenance: Schema.Codec<BuildProvenance> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    builderVersion: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    commands: Schema.optional(Schema.Array(Command)),
    triggerId: Schema.optional(Schema.String),
    builtArtifacts: Schema.optional(Schema.Array(Artifact)),
    buildOptions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    creator: Schema.optional(Schema.String),
    sourceProvenance: Schema.optional(Source),
    createTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    logsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildProvenance" });

export interface Recipe {
  /** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
  type?: string;
  /** Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Since the environment field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any". */
  environment?: ReadonlyArray<Record<string, unknown>>;
  /** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
  definedInMaterial?: string;
  /** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
  entryPoint?: string;
  /** Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Since the arguments field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any". */
  arguments?: ReadonlyArray<Record<string, unknown>>;
}

export const Recipe: Schema.Codec<Recipe> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    environment: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    definedInMaterial: Schema.optional(Schema.String),
    entryPoint: Schema.optional(Schema.String),
    arguments: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Recipe" });

export interface Completeness {
  /** If true, the builder claims that recipe.environment is claimed to be complete. */
  environment?: boolean;
  /** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
  arguments?: boolean;
  /** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
  materials?: boolean;
}

export const Completeness: Schema.Codec<Completeness> =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.Boolean),
    arguments: Schema.optional(Schema.Boolean),
    materials: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Completeness" });

export interface Metadata {
  /** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
  buildInvocationId?: string;
  /** The timestamp of when the build started. */
  buildStartedOn?: string;
  /** Indicates that the builder claims certain fields in this message to be complete. */
  completeness?: Completeness;
  /** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
  reproducible?: boolean;
  /** The timestamp of when the build completed. */
  buildFinishedOn?: string;
}

export const Metadata: Schema.Codec<Metadata> =
  /*@__PURE__*/ Schema.Struct({
    buildInvocationId: Schema.optional(Schema.String),
    buildStartedOn: Schema.optional(Schema.String),
    completeness: Schema.optional(Completeness),
    reproducible: Schema.optional(Schema.Boolean),
    buildFinishedOn: Schema.optional(Schema.String),
  }).annotate({ identifier: "Metadata" });

export interface BuilderConfig {
  id?: string;
}

export const BuilderConfig: Schema.Codec<BuilderConfig> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuilderConfig" });

export interface InTotoProvenance {
  /** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. */
  materials?: ReadonlyArray<string>;
  /** Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required */
  recipe?: Recipe;
  metadata?: Metadata;
  /** required */
  builderConfig?: BuilderConfig;
}

export const InTotoProvenance: Schema.Codec<InTotoProvenance> =
  /*@__PURE__*/ Schema.Struct({
    materials: Schema.optional(Schema.Array(Schema.String)),
    recipe: Schema.optional(Recipe),
    metadata: Schema.optional(Metadata),
    builderConfig: Schema.optional(BuilderConfig),
  }).annotate({ identifier: "InTotoProvenance" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness {
  parameters?: boolean;
  environment?: boolean;
  materials?: boolean;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness: Schema.Codec<GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness> =
  /*@__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Boolean),
    environment: Schema.optional(Schema.Boolean),
    materials: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata {
  buildFinishedOn?: string;
  reproducible?: boolean;
  buildStartedOn?: string;
  completeness?: GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness;
  buildInvocationId?: string;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata: Schema.Codec<GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata> =
  /*@__PURE__*/ Schema.Struct({
    buildFinishedOn: Schema.optional(Schema.String),
    reproducible: Schema.optional(Schema.Boolean),
    buildStartedOn: Schema.optional(Schema.String),
    completeness: Schema.optional(
      GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness,
    ),
    buildInvocationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource {
  digest?: Record<string, string>;
  uri?: string;
  entryPoint?: string;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource: Schema.Codec<GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource> =
  /*@__PURE__*/ Schema.Struct({
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uri: Schema.optional(Schema.String),
    entryPoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation {
  configSource?: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource;
  environment?: Record<string, unknown>;
  parameters?: Record<string, unknown>;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation: Schema.Codec<GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation> =
  /*@__PURE__*/ Schema.Struct({
    configSource: Schema.optional(
      GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource,
    ),
    environment: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder {
  id?: string;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder: Schema.Codec<GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial {
  uri?: string;
  digest?: Record<string, string>;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial: Schema.Codec<GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial" });

export interface SlsaProvenanceZeroTwo {
  metadata?: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
  invocation?: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation;
  buildConfig?: Record<string, unknown>;
  builder?: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder;
  buildType?: string;
  materials?: ReadonlyArray<GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial>;
}

export const SlsaProvenanceZeroTwo: Schema.Codec<SlsaProvenanceZeroTwo> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata),
    invocation: Schema.optional(GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation),
    buildConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    builder: Schema.optional(GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder),
    buildType: Schema.optional(Schema.String),
    materials: Schema.optional(
      Schema.Array(GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial),
    ),
  }).annotate({ identifier: "SlsaProvenanceZeroTwo" });

export interface Material {
  uri?: string;
  digest?: Record<string, string>;
}

export const Material: Schema.Codec<Material> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Material" });

export interface SlsaBuilder {
  id?: string;
}

export const SlsaBuilder: Schema.Codec<SlsaBuilder> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "SlsaBuilder" });

export interface SlsaRecipe {
  /** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
  type?: string;
  /** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
  definedInMaterial?: string;
  /** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
  entryPoint?: string;
  /** Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different. */
  arguments?: Record<string, unknown>;
  /** Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different. */
  environment?: Record<string, unknown>;
}

export const SlsaRecipe: Schema.Codec<SlsaRecipe> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    definedInMaterial: Schema.optional(Schema.String),
    entryPoint: Schema.optional(Schema.String),
    arguments: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    environment: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "SlsaRecipe" });

export interface SlsaCompleteness {
  /** If true, the builder claims that recipe.environment is claimed to be complete. */
  environment?: boolean;
  /** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
  arguments?: boolean;
  /** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
  materials?: boolean;
}

export const SlsaCompleteness: Schema.Codec<SlsaCompleteness> =
  /*@__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.Boolean),
    arguments: Schema.optional(Schema.Boolean),
    materials: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SlsaCompleteness" });

export interface SlsaMetadata {
  /** The timestamp of when the build completed. */
  buildFinishedOn?: string;
  /** The timestamp of when the build started. */
  buildStartedOn?: string;
  /** Indicates that the builder claims certain fields in this message to be complete. */
  completeness?: SlsaCompleteness;
  /** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
  reproducible?: boolean;
  /** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
  buildInvocationId?: string;
}

export const SlsaMetadata: Schema.Codec<SlsaMetadata> =
  /*@__PURE__*/ Schema.Struct({
    buildFinishedOn: Schema.optional(Schema.String),
    buildStartedOn: Schema.optional(Schema.String),
    completeness: Schema.optional(SlsaCompleteness),
    reproducible: Schema.optional(Schema.Boolean),
    buildInvocationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SlsaMetadata" });

export interface SlsaProvenance {
  /** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. */
  materials?: ReadonlyArray<Material>;
  /** required */
  builder?: SlsaBuilder;
  /** Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required */
  recipe?: SlsaRecipe;
  metadata?: SlsaMetadata;
}

export const SlsaProvenance: Schema.Codec<SlsaProvenance> =
  /*@__PURE__*/ Schema.Struct({
    materials: Schema.optional(Schema.Array(Material)),
    builder: Schema.optional(SlsaBuilder),
    recipe: Schema.optional(SlsaRecipe),
    metadata: Schema.optional(SlsaMetadata),
  }).annotate({ identifier: "SlsaProvenance" });

export interface InTotoStatement {
  slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo;
  subject?: ReadonlyArray<Subject>;
  provenance?: InTotoProvenance;
  /** Always `https://in-toto.io/Statement/v0.1`. */
  _type?: string;
  slsaProvenance?: SlsaProvenance;
  /** `https://slsa.dev/provenance/v0.1` for SlsaProvenance. */
  predicateType?: string;
}

export const InTotoStatement: Schema.Codec<InTotoStatement> =
  /*@__PURE__*/ Schema.Struct({
    slsaProvenanceZeroTwo: Schema.optional(SlsaProvenanceZeroTwo),
    subject: Schema.optional(Schema.Array(Subject)),
    provenance: Schema.optional(InTotoProvenance),
    _type: Schema.optional(Schema.String),
    slsaProvenance: Schema.optional(SlsaProvenance),
    predicateType: Schema.optional(Schema.String),
  }).annotate({ identifier: "InTotoStatement" });

export interface ResourceDescriptor {
  name?: string;
  content?: string;
  annotations?: Record<string, unknown>;
  uri?: string;
  downloadLocation?: string;
  mediaType?: string;
  digest?: Record<string, string>;
}

export const ResourceDescriptor: Schema.Codec<ResourceDescriptor> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    uri: Schema.optional(Schema.String),
    downloadLocation: Schema.optional(Schema.String),
    mediaType: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ResourceDescriptor" });

export interface BuildDefinition {
  buildType?: string;
  externalParameters?: Record<string, unknown>;
  resolvedDependencies?: ReadonlyArray<ResourceDescriptor>;
  internalParameters?: Record<string, unknown>;
}

export const BuildDefinition: Schema.Codec<BuildDefinition> =
  /*@__PURE__*/ Schema.Struct({
    buildType: Schema.optional(Schema.String),
    externalParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    resolvedDependencies: Schema.optional(Schema.Array(ResourceDescriptor)),
    internalParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "BuildDefinition" });

export interface ProvenanceBuilder {
  version?: Record<string, string>;
  id?: string;
  builderDependencies?: ReadonlyArray<ResourceDescriptor>;
}

export const ProvenanceBuilder: Schema.Codec<ProvenanceBuilder> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    builderDependencies: Schema.optional(Schema.Array(ResourceDescriptor)),
  }).annotate({ identifier: "ProvenanceBuilder" });

export interface BuildMetadata {
  finishedOn?: string;
  invocationId?: string;
  startedOn?: string;
}

export const BuildMetadata: Schema.Codec<BuildMetadata> =
  /*@__PURE__*/ Schema.Struct({
    finishedOn: Schema.optional(Schema.String),
    invocationId: Schema.optional(Schema.String),
    startedOn: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildMetadata" });

export interface RunDetails {
  builder?: ProvenanceBuilder;
  metadata?: BuildMetadata;
  byproducts?: ReadonlyArray<ResourceDescriptor>;
}

export const RunDetails: Schema.Codec<RunDetails> =
  /*@__PURE__*/ Schema.Struct({
    builder: Schema.optional(ProvenanceBuilder),
    metadata: Schema.optional(BuildMetadata),
    byproducts: Schema.optional(Schema.Array(ResourceDescriptor)),
  }).annotate({ identifier: "RunDetails" });

export interface SlsaProvenanceV1 {
  buildDefinition?: BuildDefinition;
  runDetails?: RunDetails;
}

export const SlsaProvenanceV1: Schema.Codec<SlsaProvenanceV1> =
  /*@__PURE__*/ Schema.Struct({
    buildDefinition: Schema.optional(BuildDefinition),
    runDetails: Schema.optional(RunDetails),
  }).annotate({ identifier: "SlsaProvenanceV1" });

export interface InTotoSlsaProvenanceV1 {
  subject?: ReadonlyArray<Subject>;
  /** InToto spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement */
  _type?: string;
  predicate?: SlsaProvenanceV1;
  predicateType?: string;
}

export const InTotoSlsaProvenanceV1: Schema.Codec<InTotoSlsaProvenanceV1> =
  /*@__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.Array(Subject)),
    _type: Schema.optional(Schema.String),
    predicate: Schema.optional(SlsaProvenanceV1),
    predicateType: Schema.optional(Schema.String),
  }).annotate({ identifier: "InTotoSlsaProvenanceV1" });

export interface BuildOccurrence {
  /** Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. */
  provenanceBytes?: string;
  /** The actual provenance for the build. */
  provenance?: BuildProvenance;
  /** Deprecated. See InTotoStatement for the replacement. In-toto Provenance representation as defined in spec. */
  intotoProvenance?: InTotoProvenance;
  /** In-toto Statement representation as defined in spec. The intoto_statement can contain any type of provenance. The serialized payload of the statement can be stored and signed in the Occurrence's envelope. */
  intotoStatement?: InTotoStatement;
  /** In-Toto Slsa Provenance V1 represents a slsa provenance meeting the slsa spec, wrapped in an in-toto statement. This allows for direct jsonification of a to-spec in-toto slsa statement with a to-spec slsa provenance. */
  inTotoSlsaProvenanceV1?: InTotoSlsaProvenanceV1;
}

export const BuildOccurrence: Schema.Codec<BuildOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    provenanceBytes: Schema.optional(Schema.String),
    provenance: Schema.optional(BuildProvenance),
    intotoProvenance: Schema.optional(InTotoProvenance),
    intotoStatement: Schema.optional(InTotoStatement),
    inTotoSlsaProvenanceV1: Schema.optional(InTotoSlsaProvenanceV1),
  }).annotate({ identifier: "BuildOccurrence" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface AnalysisCompleted {
  analysisType?: ReadonlyArray<string>;
}

export const AnalysisCompleted: Schema.Codec<AnalysisCompleted> =
  /*@__PURE__*/ Schema.Struct({
    analysisType: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AnalysisCompleted" });

export interface File {
  name?: string;
  digest?: Record<string, string>;
}

export const File: Schema.Codec<File> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "File" });

export interface SBOMStatus {
  /** If there was an error generating an SBOM, this will indicate what that error was. */
  error?: string;
  /** The progress of the SBOM generation. */
  sbomState?: "SBOM_STATE_UNSPECIFIED" | "PENDING" | "COMPLETE" | (string & {});
}

export const SBOMStatus: Schema.Codec<SBOMStatus> =
  /*@__PURE__*/ Schema.Struct({
    error: Schema.optional(Schema.String),
    sbomState: Schema.optional(Schema.String),
  }).annotate({ identifier: "SBOMStatus" });

export interface DiscoveryOccurrence {
  /** The status of discovery for the resource. */
  analysisStatus?:
    | "ANALYSIS_STATUS_UNSPECIFIED"
    | "PENDING"
    | "SCANNING"
    | "FINISHED_SUCCESS"
    | "COMPLETE"
    | "FINISHED_FAILED"
    | "FINISHED_UNSUPPORTED"
    | (string & {});
  /** Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors. */
  analysisError?: ReadonlyArray<Status>;
  /** The last time this resource was scanned. */
  lastScanTime?: string;
  /** Output only. The time occurrences related to this discovery occurrence were archived. */
  archiveTime?: string;
  /** When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API. */
  analysisStatusError?: Status;
  /** The CPE of the resource being scanned. */
  cpe?: string;
  analysisCompleted?: AnalysisCompleted;
  /** Whether the resource is continuously analyzed. */
  continuousAnalysis?:
    | "CONTINUOUS_ANALYSIS_UNSPECIFIED"
    | "ACTIVE"
    | "INACTIVE"
    | (string & {});
  /** Files that make up the resource described by the occurrence. */
  files?: ReadonlyArray<File>;
  /** The status of an SBOM generation. */
  sbomStatus?: SBOMStatus;
  /** The last time vulnerability scan results changed. */
  lastVulnerabilityUpdateTime?: string;
}

export const DiscoveryOccurrence: Schema.Codec<DiscoveryOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    analysisStatus: Schema.optional(Schema.String),
    analysisError: Schema.optional(Schema.Array(Status)),
    lastScanTime: Schema.optional(Schema.String),
    archiveTime: Schema.optional(Schema.String),
    analysisStatusError: Schema.optional(Status),
    cpe: Schema.optional(Schema.String),
    analysisCompleted: Schema.optional(AnalysisCompleted),
    continuousAnalysis: Schema.optional(Schema.String),
    files: Schema.optional(Schema.Array(File)),
    sbomStatus: Schema.optional(SBOMStatus),
    lastVulnerabilityUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveryOccurrence" });

export interface DSSEAttestationOccurrence {
  /** If doing something security critical, make sure to verify the signatures in this metadata. */
  envelope?: Envelope;
  statement?: InTotoStatement;
}

export const DSSEAttestationOccurrence: Schema.Codec<DSSEAttestationOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    envelope: Schema.optional(Envelope),
    statement: Schema.optional(InTotoStatement),
  }).annotate({ identifier: "DSSEAttestationOccurrence" });

export interface SecretStatus {
  /** Optional. The status of the secret. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "UNKNOWN"
    | "VALID"
    | "INVALID"
    | (string & {});
  /** Optional. The time the secret status was last updated. */
  updateTime?: string;
  /** Optional. Optional message about the status code. */
  message?: string;
}

export const SecretStatus: Schema.Codec<SecretStatus> =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretStatus" });

export interface SecretLocation {
  /** The secret is found from a file. */
  fileLocation?: GrafeasV1FileLocation;
}

export const SecretLocation: Schema.Codec<SecretLocation> =
  /*@__PURE__*/ Schema.Struct({
    fileLocation: Schema.optional(GrafeasV1FileLocation),
  }).annotate({ identifier: "SecretLocation" });

export interface SecretOccurrence {
  /** Required. Type of secret. */
  kind?:
    | "SECRET_KIND_UNSPECIFIED"
    | "SECRET_KIND_UNKNOWN"
    | "SECRET_KIND_GCP_SERVICE_ACCOUNT_KEY"
    | "SECRET_KIND_GCP_API_KEY"
    | "SECRET_KIND_GCP_OAUTH2_CLIENT_CREDENTIALS"
    | "SECRET_KIND_GCP_OAUTH2_ACCESS_TOKEN"
    | "SECRET_KIND_ANTHROPIC_ADMIN_API_KEY"
    | "SECRET_KIND_ANTHROPIC_API_KEY"
    | "SECRET_KIND_AZURE_ACCESS_TOKEN"
    | "SECRET_KIND_AZURE_IDENTITY_TOKEN"
    | "SECRET_KIND_DOCKER_HUB_PERSONAL_ACCESS_TOKEN"
    | "SECRET_KIND_GITHUB_APP_REFRESH_TOKEN"
    | "SECRET_KIND_GITHUB_APP_SERVER_TO_SERVER_TOKEN"
    | "SECRET_KIND_GITHUB_APP_USER_TO_SERVER_TOKEN"
    | "SECRET_KIND_GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN"
    | "SECRET_KIND_GITHUB_FINE_GRAINED_PERSONAL_ACCESS_TOKEN"
    | "SECRET_KIND_GITHUB_OAUTH_TOKEN"
    | "SECRET_KIND_HUGGINGFACE_API_KEY"
    | "SECRET_KIND_OPENAI_API_KEY"
    | "SECRET_KIND_PERPLEXITY_API_KEY"
    | "SECRET_KIND_STRIPE_SECRET_KEY"
    | "SECRET_KIND_STRIPE_RESTRICTED_KEY"
    | "SECRET_KIND_STRIPE_WEBHOOK_SECRET"
    | (string & {});
  /** Optional. Status of the secret. */
  statuses?: ReadonlyArray<SecretStatus>;
  /** Optional. Locations where the secret is detected. */
  locations?: ReadonlyArray<SecretLocation>;
}

export const SecretOccurrence: Schema.Codec<SecretOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    statuses: Schema.optional(Schema.Array(SecretStatus)),
    locations: Schema.optional(Schema.Array(SecretLocation)),
  }).annotate({ identifier: "SecretOccurrence" });

export interface UpgradeDistribution {
  /** The severity as specified by the upstream operating system. */
  severity?: string;
  /** The cve tied to this Upgrade. */
  cve?: ReadonlyArray<string>;
  /** Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/. */
  cpeUri?: string;
  /** The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85) */
  classification?: string;
}

export const UpgradeDistribution: Schema.Codec<UpgradeDistribution> =
  /*@__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    cve: Schema.optional(Schema.Array(Schema.String)),
    cpeUri: Schema.optional(Schema.String),
    classification: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeDistribution" });

export interface Category {
  /** The identifier of the category. */
  categoryId?: string;
  /** The localized name of the category. */
  name?: string;
}

export const Category: Schema.Codec<Category> =
  /*@__PURE__*/ Schema.Struct({
    categoryId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Category" });

export interface Identity {
  /** The revision independent identifier of the update. */
  updateId?: string;
  /** The revision number of the update. */
  revision?: number;
}

export const Identity: Schema.Codec<Identity> =
  /*@__PURE__*/ Schema.Struct({
    updateId: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Identity" });

export interface WindowsUpdate {
  /** The last published timestamp of the update. */
  lastPublishedTimestamp?: string;
  /** The Microsoft Knowledge Base article IDs that are associated with the update. */
  kbArticleIds?: ReadonlyArray<string>;
  /** The localized description of the update. */
  description?: string;
  /** The list of categories to which the update belongs. */
  categories?: ReadonlyArray<Category>;
  /** The hyperlink to the support information for the update. */
  supportUrl?: string;
  /** The localized title of the update. */
  title?: string;
  /** Required - The unique identifier for the update. */
  identity?: Identity;
}

export const WindowsUpdate: Schema.Codec<WindowsUpdate> =
  /*@__PURE__*/ Schema.Struct({
    lastPublishedTimestamp: Schema.optional(Schema.String),
    kbArticleIds: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    categories: Schema.optional(Schema.Array(Category)),
    supportUrl: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    identity: Schema.optional(Identity),
  }).annotate({ identifier: "WindowsUpdate" });

export interface UpgradeOccurrence {
  /** Metadata about the upgrade for available for the specific operating system for the resource_url. This allows efficient filtering, as well as making it easier to use the occurrence. */
  distribution?: UpgradeDistribution;
  /** Required for Windows OS. Represents the metadata about the Windows update. */
  windowsUpdate?: WindowsUpdate;
  /** Required for non-Windows OS. The package this Upgrade is for. */
  package?: string;
  /** Required for non-Windows OS. The version of the package in a machine + human readable form. */
  parsedVersion?: Version;
}

export const UpgradeOccurrence: Schema.Codec<UpgradeOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    distribution: Schema.optional(UpgradeDistribution),
    windowsUpdate: Schema.optional(WindowsUpdate),
    package: Schema.optional(Schema.String),
    parsedVersion: Schema.optional(Version),
  }).annotate({ identifier: "UpgradeOccurrence" });

export interface Jwt {
  /** The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1 */
  compactJwt?: string;
}

export const Jwt: Schema.Codec<Jwt> = /*@__PURE__*/ Schema.Struct({
  compactJwt: Schema.optional(Schema.String),
}).annotate({ identifier: "Jwt" });

export interface Signature {
  /** The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload. */
  signature?: string;
  /** The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5" */
  publicKeyId?: string;
}

export const Signature: Schema.Codec<Signature> =
  /*@__PURE__*/ Schema.Struct({
    signature: Schema.optional(Schema.String),
    publicKeyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Signature" });

export interface AttestationOccurrence {
  /** Required. The serialized payload that is verified by one or more `signatures`. */
  serializedPayload?: string;
  /** One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas. */
  jwts?: ReadonlyArray<Jwt>;
  /** One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification. */
  signatures?: ReadonlyArray<Signature>;
}

export const AttestationOccurrence: Schema.Codec<AttestationOccurrence> =
  /*@__PURE__*/ Schema.Struct({
    serializedPayload: Schema.optional(Schema.String),
    jwts: Schema.optional(Schema.Array(Jwt)),
    signatures: Schema.optional(Schema.Array(Signature)),
  }).annotate({ identifier: "AttestationOccurrence" });

export interface Occurrence {
  /** Output only. The time this occurrence was last updated. */
  updateTime?: string;
  /** Describes an AI skill analysis. */
  aiSkillAnalysis?: AISkillAnalysisOccurrence;
  /** Describes the deployment of an artifact on a runtime. */
  deployment?: DeploymentOccurrence;
  /** https://github.com/secure-systems-lab/dsse */
  envelope?: Envelope;
  /** Describes a security vulnerability. */
  vulnerability?: VulnerabilityOccurrence;
  /** Describes the installation of a package on the linked resource. */
  package?: PackageOccurrence;
  /** Describes a specific SBOM reference occurrences. */
  sbomReference?: SBOMReferenceOccurrence;
  /** Describes a compliance violation on a linked resource. */
  compliance?: ComplianceOccurrence;
  /** Describes how this resource derives from the basis in the associated note. */
  image?: ImageOccurrence;
  /** Describes a verifiable build. */
  build?: BuildOccurrence;
  /** Describes when a resource was discovered. */
  discovery?: DiscoveryOccurrence;
  /** Describes an attestation of an artifact using dsse. */
  dsseAttestation?: DSSEAttestationOccurrence;
  /** Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests. */
  kind?:
    | "NOTE_KIND_UNSPECIFIED"
    | "VULNERABILITY"
    | "BUILD"
    | "IMAGE"
    | "PACKAGE"
    | "DEPLOYMENT"
    | "DISCOVERY"
    | "ATTESTATION"
    | "UPGRADE"
    | "COMPLIANCE"
    | "DSSE_ATTESTATION"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | "AI_SKILL_ANALYSIS"
    | (string & {});
  /** Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name?: string;
  /** Describes a secret. */
  secret?: SecretOccurrence;
  /** Describes an available package upgrade on the linked resource. */
  upgrade?: UpgradeOccurrence;
  /** The time this advisory was published by the source. */
  advisoryPublishTime?: string;
  /** Output only. The time this occurrence was created. */
  createTime?: string;
  /** Describes an attestation of an artifact. */
  attestation?: AttestationOccurrence;
  /** Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image. */
  resourceUri?: string;
  /** Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests. */
  noteName?: string;
  /** A description of actions that can be taken to remedy the note. */
  remediation?: string;
}

export const Occurrence: Schema.Codec<Occurrence> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    aiSkillAnalysis: Schema.optional(AISkillAnalysisOccurrence),
    deployment: Schema.optional(DeploymentOccurrence),
    envelope: Schema.optional(Envelope),
    vulnerability: Schema.optional(VulnerabilityOccurrence),
    package: Schema.optional(PackageOccurrence),
    sbomReference: Schema.optional(SBOMReferenceOccurrence),
    compliance: Schema.optional(ComplianceOccurrence),
    image: Schema.optional(ImageOccurrence),
    build: Schema.optional(BuildOccurrence),
    discovery: Schema.optional(DiscoveryOccurrence),
    dsseAttestation: Schema.optional(DSSEAttestationOccurrence),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    secret: Schema.optional(SecretOccurrence),
    upgrade: Schema.optional(UpgradeOccurrence),
    advisoryPublishTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    attestation: Schema.optional(AttestationOccurrence),
    resourceUri: Schema.optional(Schema.String),
    noteName: Schema.optional(Schema.String),
    remediation: Schema.optional(Schema.String),
  }).annotate({ identifier: "Occurrence" });

export interface PackageVersion {
  /** The licenses associated with this package. Note that this has to go on the PackageVersion level, because we can have cases with images with the same source having different licences. E.g. in Alpine, musl and musl-utils both have the same origin musl, but have different sets of licenses. */
  licenses?: ReadonlyArray<string>;
  name?: string;
  version?: string;
}

export const PackageVersion: Schema.Codec<PackageVersion> =
  /*@__PURE__*/ Schema.Struct({
    licenses: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "PackageVersion" });

export interface Maintainer {
  url?: string;
  kind?: string;
  email?: string;
  name?: string;
}

export const Maintainer: Schema.Codec<Maintainer> =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Maintainer" });

export interface BinarySourceInfo {
  /** The source package. Similar to the above, this is significant when the source is different than the binary itself. Since the top-level package/version fields are based on an if/else, we need a separate field for both binary and source if we want to know definitively where the data is coming from. */
  sourceVersion?: PackageVersion;
  /** The binary package. This is significant when the source is different than the binary itself. Historically if they've differed, we've stored the name of the source and its version in the package/version fields, but we should also store the binary package info, as that's what's actually installed. */
  binaryVersion?: PackageVersion;
}

export const BinarySourceInfo: Schema.Codec<BinarySourceInfo> =
  /*@__PURE__*/ Schema.Struct({
    sourceVersion: Schema.optional(PackageVersion),
    binaryVersion: Schema.optional(PackageVersion),
  }).annotate({ identifier: "BinarySourceInfo" });

export interface BaseImage {
  /** The name of the base image. */
  name?: string;
  /** The registry in which the base image is from. */
  registry?: string;
  /** The repository name in which the base image is from. */
  repository?: string;
  /** The number of layers that the base image is composed of. */
  layerCount?: number;
}

export const BaseImage: Schema.Codec<BaseImage> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    registry: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
    layerCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BaseImage" });

export interface LayerDetails {
  /** The base images the layer is found within. */
  baseImages?: ReadonlyArray<BaseImage>;
  /** The index of the layer in the container image. */
  index?: number;
  /** The diff ID (sha256 hash) of the layer in the container image. */
  diffId?: string;
  /** The layer chain ID (sha256 hash) of the layer in the container image. https://github.com/opencontainers/image-spec/blob/main/config.md#layer-chainid */
  chainId?: string;
  /** The layer build command that was used to build the layer. This may not be found in all layers depending on how the container image is built. */
  command?: string;
}

export const LayerDetails: Schema.Codec<LayerDetails> =
  /*@__PURE__*/ Schema.Struct({
    baseImages: Schema.optional(Schema.Array(BaseImage)),
    index: Schema.optional(Schema.Number),
    diffId: Schema.optional(Schema.String),
    chainId: Schema.optional(Schema.String),
    command: Schema.optional(Schema.String),
  }).annotate({ identifier: "LayerDetails" });

export interface FileLocation {
  /** Line number in the file where the package is found. Applies only to source repository scanning. Note: this field is marked as `optional` in other corresponding protos, but in edition 2023, the "optional" keyword is redundant. */
  lineNumber?: number;
  /** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
  filePath?: string;
  layerDetails?: LayerDetails;
}

export const FileLocation: Schema.Codec<FileLocation> =
  /*@__PURE__*/ Schema.Struct({
    lineNumber: Schema.optional(Schema.Number),
    filePath: Schema.optional(Schema.String),
    layerDetails: Schema.optional(LayerDetails),
  }).annotate({ identifier: "FileLocation" });

export interface LanguagePackageDependency {
  package?: string;
  version?: string;
}

export const LanguagePackageDependency: Schema.Codec<LanguagePackageDependency> =
  /*@__PURE__*/ Schema.Struct({
    package: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "LanguagePackageDependency" });

export interface IngestionSource {
  /** The resource URL of the resource that was scanned to find this package. */
  resourceUrl?: string;
  source?:
    | "SOURCE_UNSPECIFIED"
    | "DOCKER_IMAGE"
    | "SBOM_ATTACHMENT"
    | (string & {});
  /** The attachment URI that this package was extracted from. */
  attachmentUri?: string;
}

export const IngestionSource: Schema.Codec<IngestionSource> =
  /*@__PURE__*/ Schema.Struct({
    resourceUrl: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    attachmentUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestionSource" });

export interface PackageData {
  /** The architecture of the package. */
  architecture?: string;
  /** The version of the package being analysed */
  version?: string;
  /** HashDigest stores the SHA512 hash digest of the jar file if the package is of type Maven. This field will be unset for non Maven packages. */
  hashDigest?: string;
  /** DEPRECATED */
  binaryVersion?: PackageVersion;
  unused?: string;
  /** The maintainer of the package. */
  maintainer?: Maintainer;
  /** The version of the OS Used to generate the cpe_uri for OS packages */
  osVersion?: string;
  /** The list of licenses found that are related to a given package. Note that licenses may also be stored on the BinarySourceInfo. If there is no BinarySourceInfo (because there's no concept of source vs binary), then it will be stored here, while if there are BinarySourceInfos, it will be stored there, as one source can have multiple binaries with different licenses. */
  licenses?: ReadonlyArray<string>;
  /** The type of package: os, maven, go, etc. */
  packageType?:
    | "PACKAGE_TYPE_UNSPECIFIED"
    | "OS"
    | "MAVEN"
    | "GO"
    | "GO_STDLIB"
    | "PYPI"
    | "NPM"
    | "NUGET"
    | "RUBYGEMS"
    | "RUST"
    | "COMPOSER"
    | "SWIFT"
    | (string & {});
  /** The OS affected by a vulnerability Used to generate the cpe_uri for OS packages */
  os?: string;
  /** A bundle containing the binary and source information. */
  binarySourceInfo?: ReadonlyArray<BinarySourceInfo>;
  /** The path to the jar file / go binary file. */
  fileLocation?: ReadonlyArray<FileLocation>;
  /** DEPRECATED */
  sourceVersion?: PackageVersion;
  /** The package being analysed for vulnerabilities */
  package?: string;
  /** The dependency chain between this package and the user's artifact. List in order from the customer's package under review first, to the current package last. Inclusive of the original package and the current package. */
  dependencyChain?: ReadonlyArray<LanguagePackageDependency>;
  /** The list of sources that were scanned to find this package. This can be a Docker image, an SBOM attachment, or both, for example. */
  ingestionSources?: ReadonlyArray<IngestionSource>;
  layerDetails?: LayerDetails;
  /** CVEs that this package is no longer vulnerable to */
  patchedCve?: ReadonlyArray<string>;
  /** The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability may manifest. Examples include distro or storage location for vulnerable jar. */
  cpeUri?: string;
}

export const PackageData: Schema.Codec<PackageData> =
  /*@__PURE__*/ Schema.Struct({
    architecture: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    hashDigest: Schema.optional(Schema.String),
    binaryVersion: Schema.optional(PackageVersion),
    unused: Schema.optional(Schema.String),
    maintainer: Schema.optional(Maintainer),
    osVersion: Schema.optional(Schema.String),
    licenses: Schema.optional(Schema.Array(Schema.String)),
    packageType: Schema.optional(Schema.String),
    os: Schema.optional(Schema.String),
    binarySourceInfo: Schema.optional(Schema.Array(BinarySourceInfo)),
    fileLocation: Schema.optional(Schema.Array(FileLocation)),
    sourceVersion: Schema.optional(PackageVersion),
    package: Schema.optional(Schema.String),
    dependencyChain: Schema.optional(Schema.Array(LanguagePackageDependency)),
    ingestionSources: Schema.optional(Schema.Array(IngestionSource)),
    layerDetails: Schema.optional(LayerDetails),
    patchedCve: Schema.optional(Schema.Array(Schema.String)),
    cpeUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "PackageData" });

export interface AnalyzePackagesRequest {
  /** Required. The resource URI of the container image being scanned. */
  resourceUri?: string;
  /** The packages to analyze. */
  packages?: ReadonlyArray<PackageData>;
}

export const AnalyzePackagesRequest: Schema.Codec<AnalyzePackagesRequest> =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.optional(Schema.String),
    packages: Schema.optional(Schema.Array(PackageData)),
  }).annotate({ identifier: "AnalyzePackagesRequest" });

export interface ListVulnerabilitiesResponse {
  /** The list of Vulnerability Occurrences resulting from a scan. */
  occurrences?: ReadonlyArray<Occurrence>;
  /** A page token that can be used in a subsequent call to ListVulnerabilities to continue retrieving results. */
  nextPageToken?: string;
}

export const ListVulnerabilitiesResponse: Schema.Codec<ListVulnerabilitiesResponse> =
  /*@__PURE__*/ Schema.Struct({
    occurrences: Schema.optional(Schema.Array(Occurrence)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListVulnerabilitiesResponse" });

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

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface AnalyzePackagesResponse {
  /** The name of the scan resource created by this successful scan. */
  scan?: string;
}

export const AnalyzePackagesResponse: Schema.Codec<AnalyzePackagesResponse> =
  /*@__PURE__*/ Schema.Struct({
    scan: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzePackagesResponse" });

export interface AnalyzePackagesMetadataV1 {
  /** When the scan was created. */
  createTime?: string;
  /** The resource URI of the container image being scanned. */
  resourceUri?: string;
}

export const AnalyzePackagesMetadataV1: Schema.Codec<AnalyzePackagesMetadataV1> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzePackagesMetadataV1" });

export interface AnalyzePackagesMetadata {
  /** The resource URI of the container image being scanned. */
  resourceUri?: string;
  /** When the scan was created. */
  createTime?: string;
}

export const AnalyzePackagesMetadata: Schema.Codec<AnalyzePackagesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzePackagesMetadata" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface AnalyzePackagesResponseV1 {
  /** The name of the scan resource created by this successful scan. */
  scan?: string;
}

export const AnalyzePackagesResponseV1: Schema.Codec<AnalyzePackagesResponseV1> =
  /*@__PURE__*/ Schema.Struct({
    scan: Schema.optional(Schema.String),
  }).annotate({ identifier: "AnalyzePackagesResponseV1" });

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

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface WaitProjectsLocationsOperationsRequest {
  /** The name of the operation resource to wait on. */
  name: string;
  /** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
  timeout?: string;
}

export const WaitProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    timeout: Schema.optional(Schema.String).pipe(T.HttpQuery("timeout")),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:wait", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<WaitProjectsLocationsOperationsRequest>;

export type WaitProjectsLocationsOperationsResponse = Operation;
export const WaitProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

export type WaitProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done. */
export const waitProjectsLocationsOperations: API.OperationMethod<
  WaitProjectsLocationsOperationsRequest,
  WaitProjectsLocationsOperationsResponse,
  WaitProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: WaitProjectsLocationsOperationsRequest,
  output: WaitProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AnalyzePackagesProjectsLocationsScansRequest {
  /** Required. The parent of the resource for which analysis is requested. Format: projects/[project_name]/locations/[location] */
  parent: string;
  /** Request body */
  body?: AnalyzePackagesRequest;
}

export const AnalyzePackagesProjectsLocationsScansRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AnalyzePackagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/scans:analyzePackages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AnalyzePackagesProjectsLocationsScansRequest>;

export type AnalyzePackagesProjectsLocationsScansResponse = Operation;
export const AnalyzePackagesProjectsLocationsScansResponse =
  /*@__PURE__*/ Operation;

export type AnalyzePackagesProjectsLocationsScansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates an analysis of the provided packages. */
export const analyzePackagesProjectsLocationsScans: API.OperationMethod<
  AnalyzePackagesProjectsLocationsScansRequest,
  AnalyzePackagesProjectsLocationsScansResponse,
  AnalyzePackagesProjectsLocationsScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AnalyzePackagesProjectsLocationsScansRequest,
  output: AnalyzePackagesProjectsLocationsScansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsScansVulnerabilitiesRequest {
  /** Required. The parent of the collection of Vulnerabilities being requested. Format: projects/[project_name]/locations/[location]/scans/[scan_id] */
  parent: string;
  /** The page token, resulting from a previous call to ListVulnerabilities. */
  pageToken?: string;
  /** The number of vulnerabilities to retrieve. */
  pageSize?: number;
}

export const ListProjectsLocationsScansVulnerabilitiesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/vulnerabilities" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsScansVulnerabilitiesRequest>;

export type ListProjectsLocationsScansVulnerabilitiesResponse =
  ListVulnerabilitiesResponse;
export const ListProjectsLocationsScansVulnerabilitiesResponse =
  /*@__PURE__*/ ListVulnerabilitiesResponse;

export type ListProjectsLocationsScansVulnerabilitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists vulnerabilities resulting from a successfully completed scan. */
export const listProjectsLocationsScansVulnerabilities: API.PaginatedOperationMethod<
  ListProjectsLocationsScansVulnerabilitiesRequest,
  ListProjectsLocationsScansVulnerabilitiesResponse,
  ListProjectsLocationsScansVulnerabilitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsScansVulnerabilitiesRequest,
  output: ListProjectsLocationsScansVulnerabilitiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
