// ==========================================================================
// Container Analysis API (containeranalysis v1alpha1)
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
  name: "containeranalysis",
  version: "v1alpha1",
  rootUrl: "https://containeranalysis.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Hash {
  /** The type of hash that was performed. */
  type?: "NONE" | "SHA256" | "GO_MODULE_H1" | "DIRSUM_SHA256" | (string & {});
  /** The hash value. */
  value?: string;
}

export const Hash = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "Hash" });

export interface Resource {
  /** The name of the resource. E.g., the name of a Docker image - "Debian". */
  name?: string;
  /** The unique URI of the resource. E.g., "https://gcr.io/project/image@sha256:foo" for a Docker image. */
  uri?: string;
  /** The hash of the resource content. E.g., the Docker digest. */
  contentHash?: Hash;
}

export const Resource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
  contentHash: Schema.optional(Hash),
}).annotate({ identifier: "Resource" });

export interface CVSS {
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  exploitabilityScore?: number;
  impactScore?: number;
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Defined in CVSS v3, CVSS v2 */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  /** Defined in CVSS v3, CVSS v2 */
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | "ATTACK_COMPLEXITY_MEDIUM"
    | (string & {});
  /** Defined in CVSS v2 */
  authentication?:
    | "AUTHENTICATION_UNSPECIFIED"
    | "AUTHENTICATION_MULTIPLE"
    | "AUTHENTICATION_SINGLE"
    | "AUTHENTICATION_NONE"
    | (string & {});
  /** Defined in CVSS v3 */
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  /** Defined in CVSS v3 */
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  /** Defined in CVSS v3 */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  /** Defined in CVSS v3, CVSS v2 */
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Defined in CVSS v3, CVSS v2 */
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  /** Defined in CVSS v3, CVSS v2 */
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
}

export const CVSS = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baseScore: Schema.optional(Schema.Number),
  exploitabilityScore: Schema.optional(Schema.Number),
  impactScore: Schema.optional(Schema.Number),
  attackVector: Schema.optional(Schema.String),
  attackComplexity: Schema.optional(Schema.String),
  authentication: Schema.optional(Schema.String),
  privilegesRequired: Schema.optional(Schema.String),
  userInteraction: Schema.optional(Schema.String),
  scope: Schema.optional(Schema.String),
  confidentialityImpact: Schema.optional(Schema.String),
  integrityImpact: Schema.optional(Schema.String),
  availabilityImpact: Schema.optional(Schema.String),
}).annotate({ identifier: "CVSS" });

export interface Version {
  /** Used to correct mistakes in the version numbering scheme. */
  epoch?: number;
  /** The main part of the version name. */
  name?: string;
  /** The iteration of the package build from the above version. */
  revision?: string;
  /** Distinguish between sentinel MIN/MAX versions and normal versions. If kind is not NORMAL, then the other fields are ignored. */
  kind?: "NORMAL" | "MINIMUM" | "MAXIMUM" | (string & {});
  /** Whether this version is vulnerable, when defining the version bounds. For example, if the minimum version is 2.0, inclusive=true would say 2.0 is vulnerable, while inclusive=false would say it's not */
  inclusive?: boolean;
}

export const Version = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  epoch: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  revision: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  inclusive: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Version" });

export interface BaseImage {
  /** The name of the base image. */
  name?: string;
  /** The repository name in which the base image is from. */
  repository?: string;
  /** The number of layers that the base image is composed of. */
  layerCount?: number;
  /** The registry of the base image. */
  registry?: string;
}

export const BaseImage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  repository: Schema.optional(Schema.String),
  layerCount: Schema.optional(Schema.Number),
  registry: Schema.optional(Schema.String),
}).annotate({ identifier: "BaseImage" });

export interface LayerDetails {
  /** The index of the layer in the container image. */
  index?: number;
  /** The diff ID (sha256 hash) of the layer in the container image. */
  diffId?: string;
  /** The layer build command that was used to build the layer. This may not be found in all layers depending on how the container image is built. */
  command?: string;
  /** The base images the layer is found within. */
  baseImages?: ReadonlyArray<BaseImage>;
  /** The chain ID of the layer in the container image. */
  chainId?: string;
}

export const LayerDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  index: Schema.optional(Schema.Number),
  diffId: Schema.optional(Schema.String),
  command: Schema.optional(Schema.String),
  baseImages: Schema.optional(Schema.Array(BaseImage)),
  chainId: Schema.optional(Schema.String),
}).annotate({ identifier: "LayerDetails" });

export interface FileLocation {
  /** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
  filePath?: string;
  /** Each package found in a file should have its own layer metadata (that is, information from the origin layer of the package). */
  layerDetails?: LayerDetails;
  /** Line number in the file where the package is found. Optional field that only applies to source repository scanning. */
  lineNumber?: number;
}

export const FileLocation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filePath: Schema.optional(Schema.String),
  layerDetails: Schema.optional(LayerDetails),
  lineNumber: Schema.optional(Schema.Number),
}).annotate({ identifier: "FileLocation" });

export interface VulnerabilityLocation {
  /** The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar. This field can be used as a filter in list requests. */
  cpeUri?: string;
  /** The package being described. */
  package?: string;
  /** The version of the package being described. This field can be used as a filter in list requests. */
  version?: Version;
  /** The file location at which this package was found. */
  fileLocation?: ReadonlyArray<FileLocation>;
}

export const VulnerabilityLocation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpeUri: Schema.optional(Schema.String),
  package: Schema.optional(Schema.String),
  version: Schema.optional(Version),
  fileLocation: Schema.optional(Schema.Array(FileLocation)),
}).annotate({ identifier: "VulnerabilityLocation" });

export interface PackageIssue {
  /** The location of the vulnerability. */
  affectedLocation?: VulnerabilityLocation;
  /** The location of the available fix for vulnerability. */
  fixedLocation?: VulnerabilityLocation;
  severityName?: string;
  /** The type of package (e.g. OS, MAVEN, GO). */
  packageType?: string;
  /** Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when distro or language system has not yet assigned a severity for this vulnerability. */
  effectiveSeverity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
}

export const PackageIssue = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  affectedLocation: Schema.optional(VulnerabilityLocation),
  fixedLocation: Schema.optional(VulnerabilityLocation),
  severityName: Schema.optional(Schema.String),
  packageType: Schema.optional(Schema.String),
  effectiveSeverity: Schema.optional(Schema.String),
}).annotate({ identifier: "PackageIssue" });

export interface URI {
  /** The unique resource identifier. */
  uri?: string;
  /** A label for the URI. */
  label?: string;
}

export const URI = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
}).annotate({ identifier: "URI" });

export interface Remediation {
  /** The type of remediation that can be applied. */
  remediationType?:
    | "REMEDIATION_TYPE_UNSPECIFIED"
    | "MITIGATION"
    | "NO_FIX_PLANNED"
    | "NONE_AVAILABLE"
    | "VENDOR_FIX"
    | "WORKAROUND"
    | (string & {});
  /** Contains a comprehensive human-readable discussion of the remediation. */
  details?: string;
  /** Contains the URL where to obtain the remediation. */
  remediationUri?: URI;
}

export const Remediation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  remediationType: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
  remediationUri: Schema.optional(URI),
}).annotate({ identifier: "Remediation" });

export interface Justification {
  /** The justification type for this vulnerability. */
  justificationType?:
    | "JUSTIFICATION_TYPE_UNSPECIFIED"
    | "COMPONENT_NOT_PRESENT"
    | "VULNERABLE_CODE_NOT_PRESENT"
    | "VULNERABLE_CODE_NOT_IN_EXECUTE_PATH"
    | "VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY"
    | "INLINE_MITIGATIONS_ALREADY_EXIST"
    | (string & {});
  /** Additional details on why this justification was chosen. */
  details?: string;
}

export const Justification = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  justificationType: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
}).annotate({ identifier: "Justification" });

export interface VexAssessment {
  /** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. */
  cve?: string;
  /** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
  vulnerabilityId?: string;
  /** Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability. */
  relatedUris?: ReadonlyArray<URI>;
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
  /** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
  justification?: Justification;
}

export const VexAssessment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cve: Schema.optional(Schema.String),
  vulnerabilityId: Schema.optional(Schema.String),
  relatedUris: Schema.optional(Schema.Array(URI)),
  noteName: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  impacts: Schema.optional(Schema.Array(Schema.String)),
  remediations: Schema.optional(Schema.Array(Remediation)),
  justification: Schema.optional(Justification),
}).annotate({ identifier: "VexAssessment" });

export interface CISAKnownExploitedVulnerabilities {
  /** Optional. Whether the vulnerability is known to have been leveraged as part of a ransomware campaign. */
  knownRansomwareCampaignUse?: string;
}

export const CISAKnownExploitedVulnerabilities =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knownRansomwareCampaignUse: Schema.optional(Schema.String),
  }).annotate({ identifier: "CISAKnownExploitedVulnerabilities" });

export interface ExploitPredictionScoringSystem {
  /** Optional. The percentile of the current score, the proportion of all scored vulnerabilities with the same or a lower EPSS score */
  percentile?: number;
  /** Optional. The EPSS score representing the probability [0-1] of exploitation in the wild in the next 30 days */
  score?: number;
}

export const ExploitPredictionScoringSystem =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    percentile: Schema.optional(Schema.Number),
    score: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExploitPredictionScoringSystem" });

export interface Risk {
  /** Optional. CISA maintains the authoritative source of vulnerabilities that have been exploited in the wild. */
  cisaKev?: CISAKnownExploitedVulnerabilities;
  /** Optional. The Exploit Prediction Scoring System (EPSS) estimates the likelihood (probability) that a software vulnerability will be exploited in the wild. */
  epss?: ExploitPredictionScoringSystem;
}

export const Risk = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cisaKev: Schema.optional(CISAKnownExploitedVulnerabilities),
  epss: Schema.optional(ExploitPredictionScoringSystem),
}).annotate({ identifier: "Risk" });

export interface VulnerabilityDetails {
  /** The type of package; whether native or non native(ruby gems, node.js packages etc). This may be deprecated in the future because we can have multiple PackageIssues with different package types. */
  type?: string;
  /** Output only. The note provider assigned Severity of the vulnerability. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity. */
  cvssScore?: number;
  /** The CVSS v3 score of this vulnerability. */
  cvssV3?: CVSS;
  /** The set of affected locations and their fixes (if available) within the associated resource. */
  packageIssue?: ReadonlyArray<PackageIssue>;
  /** The distro assigned severity for this vulnerability when that is available and note provider assigned severity when distro has not yet assigned a severity for this vulnerability. When there are multiple package issues for this vulnerability, they can have different effective severities because some might come from the distro and some might come from installed language packs (e.g. Maven JARs or Go binaries). For this reason, it is advised to use the effective severity on the PackageIssue level, as this field may eventually be deprecated. In the case where multiple PackageIssues have different effective severities, the one set here will be the highest severity of any of the PackageIssues. */
  effectiveSeverity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** The CVSS v2 score of this vulnerability. */
  cvssV2?: CVSS;
  /** Output only. CVSS version used to populate cvss_score and severity. */
  cvssVersion?:
    | "CVSS_VERSION_UNSPECIFIED"
    | "CVSS_VERSION_2"
    | "CVSS_VERSION_3"
    | (string & {});
  /** VexAssessment provides all publisher provided Vex information that is related to this vulnerability for this resource. */
  vexAssessment?: VexAssessment;
  /** Occurrence-specific extra details about the vulnerability. */
  extraDetails?: string;
  /** Risk information about the vulnerability, such as CISA, EPSS, etc. */
  risk?: Risk;
}

export const VulnerabilityDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  cvssScore: Schema.optional(Schema.Number),
  cvssV3: Schema.optional(CVSS),
  packageIssue: Schema.optional(Schema.Array(PackageIssue)),
  effectiveSeverity: Schema.optional(Schema.String),
  cvssV2: Schema.optional(CVSS),
  cvssVersion: Schema.optional(Schema.String),
  vexAssessment: Schema.optional(VexAssessment),
  extraDetails: Schema.optional(Schema.String),
  risk: Schema.optional(Risk),
}).annotate({ identifier: "VulnerabilityDetails" });

export interface Command {
  /** Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`. */
  name?: string;
  /** Environment variables set before running this Command. */
  env?: ReadonlyArray<string>;
  /** Command-line arguments used when executing this Command. */
  args?: ReadonlyArray<string>;
  /** Working directory (relative to project source root) used when running this Command. */
  dir?: string;
  /** Optional unique identifier for this Command, used in wait_for to reference this Command as a dependency. */
  id?: string;
  /** The ID(s) of the Command(s) that this Command depends on. */
  waitFor?: ReadonlyArray<string>;
}

export const Command = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  env: Schema.optional(Schema.Array(Schema.String)),
  args: Schema.optional(Schema.Array(Schema.String)),
  dir: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  waitFor: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Command" });

export interface Artifact {
  /** Name of the artifact. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. This field is deprecated in favor of the plural `names` field; it continues to exist here to allow existing BuildProvenance serialized to json in google.devtools.containeranalysis.v1alpha1.BuildDetails.provenance_bytes to deserialize back into proto. */
  name?: string;
  /** Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container. */
  checksum?: string;
  /** Artifact ID, if any; for container images, this will be a URL by digest like gcr.io/projectID/imagename@sha256:123456 */
  id?: string;
  /** Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image. */
  names?: ReadonlyArray<string>;
}

export const Artifact = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  checksum: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  names: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Artifact" });

export interface StorageSource {
  /** Google Cloud Storage bucket containing source (see [Bucket Name Requirements] (https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Google Cloud Storage object containing source. */
  object?: string;
  /** Google Cloud Storage generation for the object. */
  generation?: string;
}

export const StorageSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bucket: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
  generation: Schema.optional(Schema.String),
}).annotate({ identifier: "StorageSource" });

export interface RepoSource {
  /** ID of the project that owns the repo. */
  projectId?: string;
  /** Name of the repo. */
  repoName?: string;
  /** Name of the branch to build. */
  branchName?: string;
  /** Name of the tag to build. */
  tagName?: string;
  /** Explicit commit SHA to build. */
  commitSha?: string;
}

export const RepoSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projectId: Schema.optional(Schema.String),
  repoName: Schema.optional(Schema.String),
  branchName: Schema.optional(Schema.String),
  tagName: Schema.optional(Schema.String),
  commitSha: Schema.optional(Schema.String),
}).annotate({ identifier: "RepoSource" });

export interface FileHashes {
  /** Collection of file hashes. */
  fileHash?: ReadonlyArray<Hash>;
}

export const FileHashes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileHash: Schema.optional(Schema.Array(Hash)),
}).annotate({ identifier: "FileHashes" });

export interface GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId {
  /** The ID of the project. */
  projectId?: string;
  /** The name of the repo. Leave empty for the default repo. */
  repoName?: string;
}

export const GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    repoName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1RepoId {
  /** A combination of a project ID and a repo name. */
  projectRepoId?: GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId;
  /** A server-assigned, globally unique identifier. */
  uid?: string;
}

export const GoogleDevtoolsContaineranalysisV1alpha1RepoId =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectRepoId: Schema.optional(
      GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId,
    ),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsContaineranalysisV1alpha1RepoId" });

export interface GoogleDevtoolsContaineranalysisV1alpha1AliasContext {
  /** The alias kind. */
  kind?: "KIND_UNSPECIFIED" | "FIXED" | "MOVABLE" | "OTHER" | (string & {});
  /** The alias name. */
  name?: string;
}

export const GoogleDevtoolsContaineranalysisV1alpha1AliasContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsContaineranalysisV1alpha1AliasContext",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext {
  /** The ID of the repo. */
  repoId?: GoogleDevtoolsContaineranalysisV1alpha1RepoId;
  /** A revision ID. */
  revisionId?: string;
  /** An alias, which may be a branch or tag. */
  aliasContext?: GoogleDevtoolsContaineranalysisV1alpha1AliasContext;
}

export const GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repoId: Schema.optional(GoogleDevtoolsContaineranalysisV1alpha1RepoId),
    revisionId: Schema.optional(Schema.String),
    aliasContext: Schema.optional(
      GoogleDevtoolsContaineranalysisV1alpha1AliasContext,
    ),
  }).annotate({
    identifier: "GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext {
  /** The URI of a running Gerrit instance. */
  hostUri?: string;
  /** The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project. */
  gerritProject?: string;
  /** A revision (commit) ID. */
  revisionId?: string;
  /** An alias, which may be a branch or tag. */
  aliasContext?: GoogleDevtoolsContaineranalysisV1alpha1AliasContext;
}

export const GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostUri: Schema.optional(Schema.String),
    gerritProject: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
    aliasContext: Schema.optional(
      GoogleDevtoolsContaineranalysisV1alpha1AliasContext,
    ),
  }).annotate({
    identifier: "GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext {
  /** Git repository URL. */
  url?: string;
  /** Required. Git commit hash. */
  revisionId?: string;
}

export const GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1SourceContext {
  /** A SourceContext referring to a revision in a Google Cloud Source Repo. */
  cloudRepo?: GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext;
  /** A SourceContext referring to a Gerrit project. */
  gerrit?: GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext;
  /** A SourceContext referring to any third party Git repo (e.g., GitHub). */
  git?: GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext;
  /** Labels with user defined metadata. */
  labels?: Record<string, string>;
}

export const GoogleDevtoolsContaineranalysisV1alpha1SourceContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudRepo: Schema.optional(
      GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext,
    ),
    gerrit: Schema.optional(
      GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext,
    ),
    git: Schema.optional(
      GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext,
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleDevtoolsContaineranalysisV1alpha1SourceContext",
  });

export interface Source {
  /** If provided, get the source from this location in Google Cloud Storage. */
  storageSource?: StorageSource;
  /** If provided, get source from this location in a Cloud Repo. */
  repoSource?: RepoSource;
  /** If provided, the input binary artifacts for the build came from this location. */
  artifactStorageSource?: StorageSource;
  /** Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file. */
  fileHashes?: Record<string, FileHashes>;
  /** If provided, the source code used for the build came from this location. */
  context?: GoogleDevtoolsContaineranalysisV1alpha1SourceContext;
  /** If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field. */
  additionalContexts?: ReadonlyArray<GoogleDevtoolsContaineranalysisV1alpha1SourceContext>;
}

export const Source = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  storageSource: Schema.optional(StorageSource),
  repoSource: Schema.optional(RepoSource),
  artifactStorageSource: Schema.optional(StorageSource),
  fileHashes: Schema.optional(Schema.Record(Schema.String, FileHashes)),
  context: Schema.optional(
    GoogleDevtoolsContaineranalysisV1alpha1SourceContext,
  ),
  additionalContexts: Schema.optional(
    Schema.Array(GoogleDevtoolsContaineranalysisV1alpha1SourceContext),
  ),
}).annotate({ identifier: "Source" });

export interface BuildProvenance {
  /** Unique identifier of the build. */
  id?: string;
  /** ID of the project. */
  projectId?: string;
  /** Commands requested by the build. */
  commands?: ReadonlyArray<Command>;
  /** Output of the build. */
  builtArtifacts?: ReadonlyArray<Artifact>;
  /** Time at which the build was created. */
  createTime?: string;
  /** Time at which execution of the build was started. */
  startTime?: string;
  /** Time at which execution of the build was finished. */
  finishTime?: string;
  /** E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time. */
  creator?: string;
  /** Google Cloud Storage bucket where logs were written. */
  logsBucket?: string;
  /** Details of the Source input to the build. */
  sourceProvenance?: Source;
  /** Trigger identifier if the build was triggered automatically; empty if not. */
  triggerId?: string;
  /** Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details. */
  buildOptions?: Record<string, string>;
  /** Version string of the builder at the time this build was executed. */
  builderVersion?: string;
}

export const BuildProvenance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  projectId: Schema.optional(Schema.String),
  commands: Schema.optional(Schema.Array(Command)),
  builtArtifacts: Schema.optional(Schema.Array(Artifact)),
  createTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  finishTime: Schema.optional(Schema.String),
  creator: Schema.optional(Schema.String),
  logsBucket: Schema.optional(Schema.String),
  sourceProvenance: Schema.optional(Source),
  triggerId: Schema.optional(Schema.String),
  buildOptions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  builderVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "BuildProvenance" });

export interface BuilderConfig {
  id?: string;
}

export const BuilderConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "BuilderConfig" });

export interface Recipe {
  /** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
  type?: string;
  /** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
  definedInMaterial?: string;
  /** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
  entryPoint?: string;
  /** Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. */
  arguments?: ReadonlyArray<Record<string, unknown>>;
  /** Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. */
  environment?: ReadonlyArray<Record<string, unknown>>;
}

export const Recipe = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  definedInMaterial: Schema.optional(Schema.String),
  entryPoint: Schema.optional(Schema.String),
  arguments: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  environment: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "Recipe" });

export interface Completeness {
  /** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
  arguments?: boolean;
  /** If true, the builder claims that recipe.environment is claimed to be complete. */
  environment?: boolean;
  /** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
  materials?: boolean;
}

export const Completeness = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  arguments: Schema.optional(Schema.Boolean),
  environment: Schema.optional(Schema.Boolean),
  materials: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Completeness" });

export interface Metadata {
  /** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
  buildInvocationId?: string;
  /** The timestamp of when the build started. */
  buildStartedOn?: string;
  /** The timestamp of when the build completed. */
  buildFinishedOn?: string;
  /** Indicates that the builder claims certain fields in this message to be complete. */
  completeness?: Completeness;
  /** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
  reproducible?: boolean;
}

export const Metadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  buildInvocationId: Schema.optional(Schema.String),
  buildStartedOn: Schema.optional(Schema.String),
  buildFinishedOn: Schema.optional(Schema.String),
  completeness: Schema.optional(Completeness),
  reproducible: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Metadata" });

export interface InTotoProvenance {
  /** required */
  builderConfig?: BuilderConfig;
  /** Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required */
  recipe?: Recipe;
  metadata?: Metadata;
  /** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. */
  materials?: ReadonlyArray<string>;
}

export const InTotoProvenance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  builderConfig: Schema.optional(BuilderConfig),
  recipe: Schema.optional(Recipe),
  metadata: Schema.optional(Metadata),
  materials: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "InTotoProvenance" });

export interface Subject {
  /** name is the name of the Subject used here */
  name?: string;
  /** "": "" Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/v1/digest_set.md. */
  digest?: Record<string, string>;
}

export const Subject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Subject" });

export interface SlsaBuilder {
  /** id is the id of the slsa provenance builder */
  id?: string;
}

export const SlsaBuilder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const SlsaRecipe = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  definedInMaterial: Schema.optional(Schema.String),
  entryPoint: Schema.optional(Schema.String),
  arguments: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  environment: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "SlsaRecipe" });

export interface SlsaCompleteness {
  /** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
  arguments?: boolean;
  /** If true, the builder claims that recipe.environment is claimed to be complete. */
  environment?: boolean;
  /** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
  materials?: boolean;
}

export const SlsaCompleteness = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  arguments: Schema.optional(Schema.Boolean),
  environment: Schema.optional(Schema.Boolean),
  materials: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SlsaCompleteness" });

export interface SlsaMetadata {
  /** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
  buildInvocationId?: string;
  /** The timestamp of when the build started. */
  buildStartedOn?: string;
  /** The timestamp of when the build completed. */
  buildFinishedOn?: string;
  /** Indicates that the builder claims certain fields in this message to be complete. */
  completeness?: SlsaCompleteness;
  /** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
  reproducible?: boolean;
}

export const SlsaMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  buildInvocationId: Schema.optional(Schema.String),
  buildStartedOn: Schema.optional(Schema.String),
  buildFinishedOn: Schema.optional(Schema.String),
  completeness: Schema.optional(SlsaCompleteness),
  reproducible: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SlsaMetadata" });

export interface Material {
  /** uri is the uri of the material */
  uri?: string;
  /** digest is a map from a hash algorithm (e.g. sha256) to the value in the material */
  digest?: Record<string, string>;
}

export const Material = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Material" });

export interface SlsaProvenance {
  /** builder is the builder of this provenance */
  builder?: SlsaBuilder;
  /** Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). */
  recipe?: SlsaRecipe;
  /** metadata is the metadata of the provenance */
  metadata?: SlsaMetadata;
  /** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. */
  materials?: ReadonlyArray<Material>;
}

export const SlsaProvenance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  builder: Schema.optional(SlsaBuilder),
  recipe: Schema.optional(SlsaRecipe),
  metadata: Schema.optional(SlsaMetadata),
  materials: Schema.optional(Schema.Array(Material)),
}).annotate({ identifier: "SlsaProvenance" });

export interface GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder {
  /** URI indicating the builder’s identity. */
  id?: string;
}

export const GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource {
  /** URI indicating the identity of the source of the config. */
  uri?: string;
  /** Collection of cryptographic digests for the contents of the artifact specified by invocation.configSource.uri. */
  digest?: Record<string, string>;
  /** String identifying the entry point into the build. */
  entryPoint?: string;
}

export const GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    entryPoint: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation {
  /** Describes where the config file that kicked off the build came from. */
  configSource?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource;
  /** Collection of all external inputs that influenced the build on top of invocation.configSource. */
  parameters?: Record<string, unknown>;
  /** Any other builder-controlled inputs necessary for correctly evaluating the build. */
  environment?: Record<string, unknown>;
}

export const GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configSource: Schema.optional(
      GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource,
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    environment: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({
    identifier:
      "GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness {
  /** If true, the builder claims that invocation.parameters is complete. */
  parameters?: boolean;
  /** If true, the builder claims that invocation.environment is complete. */
  environment?: boolean;
  /** If true, the builder claims that materials is complete. */
  materials?: boolean;
}

export const GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Boolean),
    environment: Schema.optional(Schema.Boolean),
    materials: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata {
  /** Identifies this particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. */
  buildInvocationId?: string;
  /** The timestamp of when the build started. */
  buildStartedOn?: string;
  /** The timestamp of when the build completed. */
  buildFinishedOn?: string;
  /** Indicates that the builder claims certain fields in this message to be complete. */
  completeness?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness;
  /** If true, the builder claims that running invocation on materials will produce bit-for-bit identical output. */
  reproducible?: boolean;
}

export const GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildInvocationId: Schema.optional(Schema.String),
    buildStartedOn: Schema.optional(Schema.String),
    buildFinishedOn: Schema.optional(Schema.String),
    completeness: Schema.optional(
      GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness,
    ),
    reproducible: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata",
  });

export interface GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial {
  /** The method by which this artifact was referenced during the build. */
  uri?: string;
  /** Collection of cryptographic digests for the contents of this artifact. */
  digest?: Record<string, string>;
}

export const GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier:
      "GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial",
  });

export interface SlsaProvenanceZeroTwo {
  /** Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance. */
  builder?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder;
  /** URI indicating what type of build was performed. */
  buildType?: string;
  /** Identifies the event that kicked off the build. */
  invocation?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation;
  /** Lists the steps in the build. */
  buildConfig?: Record<string, unknown>;
  /** Other properties of the build. */
  metadata?: GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata;
  /** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. */
  materials?: ReadonlyArray<GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial>;
}

export const SlsaProvenanceZeroTwo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  builder: Schema.optional(
    GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder,
  ),
  buildType: Schema.optional(Schema.String),
  invocation: Schema.optional(
    GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation,
  ),
  buildConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  metadata: Schema.optional(
    GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata,
  ),
  materials: Schema.optional(
    Schema.Array(
      GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial,
    ),
  ),
}).annotate({ identifier: "SlsaProvenanceZeroTwo" });

export interface InTotoStatement {
  /** Always "https://in-toto.io/Statement/v0.1". */
  _type?: string;
  /** subject is the subjects of the intoto statement */
  subject?: ReadonlyArray<Subject>;
  /** "https://slsa.dev/provenance/v0.1" for SlsaProvenance. */
  predicateType?: string;
  /** Generic Grafeas provenance. */
  provenance?: InTotoProvenance;
  /** SLSA 0.1 provenance. */
  slsaProvenance?: SlsaProvenance;
  /** SLSA 0.2 provenance. */
  slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo;
}

export const InTotoStatement = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  _type: Schema.optional(Schema.String),
  subject: Schema.optional(Schema.Array(Subject)),
  predicateType: Schema.optional(Schema.String),
  provenance: Schema.optional(InTotoProvenance),
  slsaProvenance: Schema.optional(SlsaProvenance),
  slsaProvenanceZeroTwo: Schema.optional(SlsaProvenanceZeroTwo),
}).annotate({ identifier: "InTotoStatement" });

export interface ResourceDescriptor {
  name?: string;
  uri?: string;
  digest?: Record<string, string>;
  content?: string;
  downloadLocation?: string;
  mediaType?: string;
  annotations?: Record<string, unknown>;
}

export const ResourceDescriptor = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
  digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  content: Schema.optional(Schema.String),
  downloadLocation: Schema.optional(Schema.String),
  mediaType: Schema.optional(Schema.String),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "ResourceDescriptor" });

export interface BuildDefinition {
  buildType?: string;
  externalParameters?: Record<string, unknown>;
  internalParameters?: Record<string, unknown>;
  resolvedDependencies?: ReadonlyArray<ResourceDescriptor>;
}

export const BuildDefinition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  buildType: Schema.optional(Schema.String),
  externalParameters: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  internalParameters: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  resolvedDependencies: Schema.optional(Schema.Array(ResourceDescriptor)),
}).annotate({ identifier: "BuildDefinition" });

export interface ProvenanceBuilder {
  id?: string;
  version?: Record<string, string>;
  builderDependencies?: ReadonlyArray<ResourceDescriptor>;
}

export const ProvenanceBuilder = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  version: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  builderDependencies: Schema.optional(Schema.Array(ResourceDescriptor)),
}).annotate({ identifier: "ProvenanceBuilder" });

export interface BuildMetadata {
  invocationId?: string;
  startedOn?: string;
  finishedOn?: string;
}

export const BuildMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invocationId: Schema.optional(Schema.String),
  startedOn: Schema.optional(Schema.String),
  finishedOn: Schema.optional(Schema.String),
}).annotate({ identifier: "BuildMetadata" });

export interface RunDetails {
  builder?: ProvenanceBuilder;
  metadata?: BuildMetadata;
  byproducts?: ReadonlyArray<ResourceDescriptor>;
}

export const RunDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  builder: Schema.optional(ProvenanceBuilder),
  metadata: Schema.optional(BuildMetadata),
  byproducts: Schema.optional(Schema.Array(ResourceDescriptor)),
}).annotate({ identifier: "RunDetails" });

export interface SlsaProvenanceV1 {
  buildDefinition?: BuildDefinition;
  runDetails?: RunDetails;
}

export const SlsaProvenanceV1 = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  buildDefinition: Schema.optional(BuildDefinition),
  runDetails: Schema.optional(RunDetails),
}).annotate({ identifier: "SlsaProvenanceV1" });

export interface InTotoSlsaProvenanceV1 {
  /** InToto spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement */
  _type?: string;
  subject?: ReadonlyArray<Subject>;
  predicateType?: string;
  predicate?: SlsaProvenanceV1;
}

export const InTotoSlsaProvenanceV1 = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    _type: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.Array(Subject)),
    predicateType: Schema.optional(Schema.String),
    predicate: Schema.optional(SlsaProvenanceV1),
  },
).annotate({ identifier: "InTotoSlsaProvenanceV1" });

export interface BuildDetails {
  /** The actual provenance */
  provenance?: BuildProvenance;
  /** Serialized JSON representation of the provenance, used in generating the `BuildSignature` in the corresponding Result. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. */
  provenanceBytes?: string;
  /** Deprecated. See InTotoStatement for the replacement. In-toto Provenance representation as defined in spec. */
  intotoProvenance?: InTotoProvenance;
  /** In-toto Statement representation as defined in spec. The intoto_statement can contain any type of provenance. The serialized payload of the statement can be stored and signed in the Occurrence's envelope. */
  intotoStatement?: InTotoStatement;
  /** In-Toto Slsa Provenance V1 represents a slsa provenance meeting the slsa spec, wrapped in an in-toto statement. This allows for direct jsonification of a to-spec in-toto slsa statement with a to-spec slsa provenance. */
  inTotoSlsaProvenanceV1?: InTotoSlsaProvenanceV1;
}

export const BuildDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provenance: Schema.optional(BuildProvenance),
  provenanceBytes: Schema.optional(Schema.String),
  intotoProvenance: Schema.optional(InTotoProvenance),
  intotoStatement: Schema.optional(InTotoStatement),
  inTotoSlsaProvenanceV1: Schema.optional(InTotoSlsaProvenanceV1),
}).annotate({ identifier: "BuildDetails" });

export interface Fingerprint {
  /** The layer-id of the final layer in the Docker image's v1 representation. This field can be used as a filter in list requests. */
  v1Name?: string;
  /** The ordered list of v2 blobs that represent a given image. */
  v2Blob?: ReadonlyArray<string>;
  /** Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept. This field can be used as a filter in list requests. */
  v2Name?: string;
}

export const Fingerprint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  v1Name: Schema.optional(Schema.String),
  v2Blob: Schema.optional(Schema.Array(Schema.String)),
  v2Name: Schema.optional(Schema.String),
}).annotate({ identifier: "Fingerprint" });

export interface Layer {
  /** The recovered Dockerfile directive used to construct this layer. */
  directive?:
    | "DIRECTIVE_UNSPECIFIED"
    | "MAINTAINER"
    | "RUN"
    | "CMD"
    | "LABEL"
    | "EXPOSE"
    | "ENV"
    | "ADD"
    | "COPY"
    | "ENTRYPOINT"
    | "VOLUME"
    | "USER"
    | "WORKDIR"
    | "ARG"
    | "ONBUILD"
    | "STOPSIGNAL"
    | "HEALTHCHECK"
    | "SHELL"
    | (string & {});
  /** The recovered arguments to the Dockerfile directive. */
  arguments?: string;
}

export const Layer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  directive: Schema.optional(Schema.String),
  arguments: Schema.optional(Schema.String),
}).annotate({ identifier: "Layer" });

export interface Derived {
  /** The fingerprint of the derived image. */
  fingerprint?: Fingerprint;
  /** Output only. The number of layers by which this image differs from the associated image basis. */
  distance?: number;
  /** This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer. */
  layerInfo?: ReadonlyArray<Layer>;
  /** Output only. This contains the base image URL for the derived image occurrence. */
  baseResourceUrl?: string;
}

export const Derived = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fingerprint: Schema.optional(Fingerprint),
  distance: Schema.optional(Schema.Number),
  layerInfo: Schema.optional(Schema.Array(Layer)),
  baseResourceUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "Derived" });

export interface Location {
  /** Deprecated. The cpe_uri in [cpe format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
  cpeUri?: string;
  /** Deprecated. The version installed at this location. */
  version?: Version;
  /** The path from which we gathered that this package/version is installed. */
  path?: string;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpeUri: Schema.optional(Schema.String),
  version: Schema.optional(Version),
  path: Schema.optional(Schema.String),
}).annotate({ identifier: "Location" });

export interface License {
  /** Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2". */
  expression?: string;
  /** Comments */
  comments?: string;
}

export const License = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expression: Schema.optional(Schema.String),
  comments: Schema.optional(Schema.String),
}).annotate({ identifier: "License" });

export interface Installation {
  /** Output only. The name of the installed package. */
  name?: string;
  /** All of the places within the filesystem versions of this package have been found. */
  location?: ReadonlyArray<Location>;
  /** Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  packageType?: string;
  /** Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
  cpeUri?: string;
  /** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** Licenses that have been declared by the authors of the package. */
  license?: License;
  /** Output only. The version of the package. */
  version?: Version;
}

export const Installation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.Array(Location)),
  packageType: Schema.optional(Schema.String),
  cpeUri: Schema.optional(Schema.String),
  architecture: Schema.optional(Schema.String),
  license: Schema.optional(License),
  version: Schema.optional(Version),
}).annotate({ identifier: "Installation" });

export interface Deployment {
  /** Identity of the user that triggered this deployment. */
  userEmail?: string;
  /** Beginning of the lifetime of this deployment. */
  deployTime?: string;
  /** End of the lifetime of this deployment. */
  undeployTime?: string;
  /** Configuration used to create this deployment. */
  config?: string;
  /** Address of the runtime element hosting this deployment. */
  address?: string;
  /** Resource URI for the artifact being deployed taken from the deployable field with the same name. */
  resourceUri?: ReadonlyArray<string>;
  /** Platform hosting this deployment. */
  platform?: "PLATFORM_UNSPECIFIED" | "GKE" | "FLEX" | "CUSTOM" | (string & {});
}

export const Deployment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userEmail: Schema.optional(Schema.String),
  deployTime: Schema.optional(Schema.String),
  undeployTime: Schema.optional(Schema.String),
  config: Schema.optional(Schema.String),
  address: Schema.optional(Schema.String),
  resourceUri: Schema.optional(Schema.Array(Schema.String)),
  platform: Schema.optional(Schema.String),
}).annotate({ identifier: "Deployment" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  done: Schema.optional(Schema.Boolean),
  error: Schema.optional(Status),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Operation" });

export interface AnalysisCompleted {
  /** type of analysis that were completed on a resource. */
  analysisType?: ReadonlyArray<string>;
}

export const AnalysisCompleted = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  analysisType: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AnalysisCompleted" });

export interface SBOMStatus {
  /** Output only. The progress of the SBOM generation. */
  sbomState?: "SBOM_STATE_UNSPECIFIED" | "PENDING" | "COMPLETE" | (string & {});
  /** Output only. If there was an error generating an SBOM, this will indicate what that error was. */
  error?: string;
}

export const SBOMStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sbomState: Schema.optional(Schema.String),
  error: Schema.optional(Schema.String),
}).annotate({ identifier: "SBOMStatus" });

export interface VulnerabilityAttestation {
  /** Output only. The last time we attempted to generate an attestation. */
  lastAttemptTime?: string;
  /** Output only. The success/failure state of the latest attestation attempt. */
  state?:
    | "VULNERABILITY_ATTESTATION_STATE_UNSPECIFIED"
    | "SUCCESS"
    | "FAILURE"
    | (string & {});
  /** Output only. If failure, the error reason for why the attestation generation failed. */
  error?: string;
}

export const VulnerabilityAttestation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastAttemptTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilityAttestation" });

export interface File {
  /** Optional. The name of the file. */
  name?: string;
  /** Optional. The digest(s) of the file. */
  digest?: Record<string, string>;
}

export const File = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "File" });

export interface Discovered {
  /** Output only. An operation that indicates the status of the current scan. This field is deprecated, do not use. */
  operation?: Operation;
  /** Whether the resource is continuously analyzed. */
  continuousAnalysis?:
    | "CONTINUOUS_ANALYSIS_UNSPECIFIED"
    | "ACTIVE"
    | "INACTIVE"
    | (string & {});
  /** The list of analysis that were completed for a resource. */
  analysisCompleted?: AnalysisCompleted;
  /** Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors. */
  analysisError?: ReadonlyArray<Status>;
  /** The status of discovery for the resource. */
  analysisStatus?:
    | "ANALYSIS_STATUS_UNSPECIFIED"
    | "PENDING"
    | "SCANNING"
    | "COMPLETE"
    | "FINISHED_SUCCESS"
    | "FINISHED_FAILED"
    | "FINISHED_UNSUPPORTED"
    | (string & {});
  /** When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage output only and populated by the API. */
  analysisStatusError?: Status;
  /** The CPE of the resource being scanned. */
  cpe?: string;
  /** The last time this resource was scanned. */
  lastScanTime?: string;
  /** The time occurrences related to this discovery occurrence were archived. */
  archiveTime?: string;
  /** Output only. The status of an SBOM generation. */
  sbomStatus?: SBOMStatus;
  /** Output only. The status of a vulnerability attestation generation. */
  vulnerabilityAttestation?: VulnerabilityAttestation;
  /** Optional. Files that make up the resource described by the occurrence. */
  files?: ReadonlyArray<File>;
  /** Optional. The last time vulnerability scan results changed. */
  lastVulnerabilityUpdateTime?: string;
}

export const Discovered = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  operation: Schema.optional(Operation),
  continuousAnalysis: Schema.optional(Schema.String),
  analysisCompleted: Schema.optional(AnalysisCompleted),
  analysisError: Schema.optional(Schema.Array(Status)),
  analysisStatus: Schema.optional(Schema.String),
  analysisStatusError: Schema.optional(Status),
  cpe: Schema.optional(Schema.String),
  lastScanTime: Schema.optional(Schema.String),
  archiveTime: Schema.optional(Schema.String),
  sbomStatus: Schema.optional(SBOMStatus),
  vulnerabilityAttestation: Schema.optional(VulnerabilityAttestation),
  files: Schema.optional(Schema.Array(File)),
  lastVulnerabilityUpdateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Discovered" });

export interface PgpSignedAttestation {
  /** The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent. Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload. */
  signature?: string;
  /** Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema). */
  contentType?:
    | "CONTENT_TYPE_UNSPECIFIED"
    | "SIMPLE_SIGNING_JSON"
    | (string & {});
  /** The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexadecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge "LONG", "SHORT", or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons. For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \ --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`. */
  pgpKeyId?: string;
}

export const PgpSignedAttestation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  signature: Schema.optional(Schema.String),
  contentType: Schema.optional(Schema.String),
  pgpKeyId: Schema.optional(Schema.String),
}).annotate({ identifier: "PgpSignedAttestation" });

export interface Attestation {
  pgpSignedAttestation?: PgpSignedAttestation;
}

export const Attestation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pgpSignedAttestation: Schema.optional(PgpSignedAttestation),
}).annotate({ identifier: "Attestation" });

export interface UpgradeDistribution {
  /** Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/. */
  cpeUri?: string;
  /** The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. */
  classification?: string;
  /** The severity as specified by the upstream operating system. */
  severity?: string;
  /** The cve that would be resolved by this upgrade. */
  cve?: ReadonlyArray<string>;
}

export const UpgradeDistribution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpeUri: Schema.optional(Schema.String),
  classification: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  cve: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "UpgradeDistribution" });

export interface UpgradeOccurrence {
  /** Required - The package this Upgrade is for. */
  package?: string;
  /** Required - The version of the package in a machine + human readable form. */
  parsedVersion?: Version;
  /** Metadata about the upgrade for available for the specific operating system for the resource_url. This allows efficient filtering, as well as making it easier to use the occurrence. */
  distribution?: UpgradeDistribution;
}

export const UpgradeOccurrence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  package: Schema.optional(Schema.String),
  parsedVersion: Schema.optional(Version),
  distribution: Schema.optional(UpgradeDistribution),
}).annotate({ identifier: "UpgradeOccurrence" });

export interface NonCompliantFile {
  /** display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'. Empty if `display_command` is set. */
  path?: string;
  /** Command to display the non-compliant files. */
  displayCommand?: string;
  /** Explains why a file is non compliant for a CIS check. */
  reason?: string;
}

export const NonCompliantFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  displayCommand: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
}).annotate({ identifier: "NonCompliantFile" });

export interface ComplianceVersion {
  /** The CPE URI (https://cpe.mitre.org/specification/) this benchmark is applicable to. */
  cpeUri?: string;
  /** The name of the document that defines this benchmark, e.g. "CIS Container-Optimized OS". */
  benchmarkDocument?: string;
  /** The version of the benchmark. This is set to the version of the OS-specific CIS document the benchmark is defined in. */
  version?: string;
}

export const ComplianceVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpeUri: Schema.optional(Schema.String),
  benchmarkDocument: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "ComplianceVersion" });

export interface ComplianceOccurrence {
  /** A list of files which are violating compliance checks. */
  nonCompliantFiles?: ReadonlyArray<NonCompliantFile>;
  /** The reason for non compliance of these files. */
  nonComplianceReason?: string;
  /** The OS and config version the benchmark was run on. */
  version?: ComplianceVersion;
}

export const ComplianceOccurrence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nonCompliantFiles: Schema.optional(Schema.Array(NonCompliantFile)),
  nonComplianceReason: Schema.optional(Schema.String),
  version: Schema.optional(ComplianceVersion),
}).annotate({ identifier: "ComplianceOccurrence" });

export interface DocumentOccurrence {
  /** Identify the current SPDX document which may be referenced in relationships by other files, packages internally and documents externally */
  id?: string;
  /** Identify name of this document as designated by creator */
  title?: string;
  /** Provide an SPDX document specific namespace as a unique absolute Uniform Resource Identifier (URI) as specified in RFC-3986, with the exception of the ‘#’ delimiter */
  namespace?: string;
  /** Identify any external SPDX documents referenced within this SPDX document */
  externalDocumentRefs?: ReadonlyArray<string>;
  /** A field for creators of the SPDX file to provide the version of the SPDX License List used when the SPDX file was created */
  licenseListVersion?: string;
  /** Identify who (or what, in the case of a tool) created the SPDX file. If the SPDX file was created by an individual, indicate the person's name */
  creators?: ReadonlyArray<string>;
  /** Identify when the SPDX file was originally created. The date is to be specified according to combined date and time in UTC format as specified in ISO 8601 standard */
  createTime?: string;
  /** A field for creators of the SPDX file to provide general comments about the creation of the SPDX file or any other relevant comment not included in the other fields */
  creatorComment?: string;
  /** A field for creators of the SPDX file content to provide comments to the consumers of the SPDX document */
  documentComment?: string;
}

export const DocumentOccurrence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  namespace: Schema.optional(Schema.String),
  externalDocumentRefs: Schema.optional(Schema.Array(Schema.String)),
  licenseListVersion: Schema.optional(Schema.String),
  creators: Schema.optional(Schema.Array(Schema.String)),
  createTime: Schema.optional(Schema.String),
  creatorComment: Schema.optional(Schema.String),
  documentComment: Schema.optional(Schema.String),
}).annotate({ identifier: "DocumentOccurrence" });

export interface PackageInfoOccurrence {
  /** Uniquely identify any element in an SPDX document which may be referenced by other elements */
  id?: string;
  /** Provide the actual file name of the package, or path of the directory being treated as a package */
  filename?: string;
  /** Provide a place for the SPDX file creator to record any relevant background information or additional comments about the origin of the package */
  sourceInfo?: string;
  /** package or alternative values, if the governing license cannot be determined */
  licenseConcluded?: License;
  /** A place for the SPDX file creator to record any general comments about the package being described */
  comment?: string;
  /** Output only. The type of package: OS, MAVEN, GO, GO_STDLIB, etc. */
  packageType?: string;
  /** Output only. Identify the full name of the package as given by the Package Originator */
  title?: string;
  /** Output only. Identify the version of the package */
  version?: string;
  /** Output only. Provide a place for the SPDX file creator to record a web site that serves as the package's home page */
  homePage?: string;
  /** Output only. A short description of the package */
  summaryDescription?: string;
}

export const PackageInfoOccurrence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  filename: Schema.optional(Schema.String),
  sourceInfo: Schema.optional(Schema.String),
  licenseConcluded: Schema.optional(License),
  comment: Schema.optional(Schema.String),
  packageType: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  homePage: Schema.optional(Schema.String),
  summaryDescription: Schema.optional(Schema.String),
}).annotate({ identifier: "PackageInfoOccurrence" });

export interface FileOccurrence {
  /** Uniquely identify any element in an SPDX document which may be referenced by other elements */
  id?: string;
  /** This field contains the license the SPDX file creator has concluded as governing the file or alternative values if the governing license cannot be determined */
  licenseConcluded?: License;
  /** This field contains the license information actually found in the file, if any */
  filesLicenseInfo?: ReadonlyArray<string>;
  /** Identify the copyright holder of the file, as well as any dates present */
  copyright?: string;
  /** This field provides a place for the SPDX file creator to record any general comments about the file */
  comment?: string;
  /** This field provides a place for the SPDX file creator to record license notices or other such related notices found in the file */
  notice?: string;
  /** This field provides a place for the SPDX file creator to record file contributors */
  contributors?: ReadonlyArray<string>;
  /** This field provides a place for the SPDX data creator to record, at the file level, acknowledgements that may be needed to be communicated in some contexts */
  attributions?: ReadonlyArray<string>;
}

export const FileOccurrence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  licenseConcluded: Schema.optional(License),
  filesLicenseInfo: Schema.optional(Schema.Array(Schema.String)),
  copyright: Schema.optional(Schema.String),
  comment: Schema.optional(Schema.String),
  notice: Schema.optional(Schema.String),
  contributors: Schema.optional(Schema.Array(Schema.String)),
  attributions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "FileOccurrence" });

export interface RelationshipOccurrence {
  /** Also referred to as SPDXRef-A The source SPDX element (file, package, etc) */
  source?: string;
  /** Also referred to as SPDXRef-B The target SPDC element (file, package, etc) In cases where there are "known unknowns", the use of the keyword NOASSERTION can be used The keywords NONE can be used to indicate that an SPDX element (package/file/snippet) has no other elements connected by some relationship to it */
  target?: string;
  /** Output only. The type of relationship between the source and target SPDX elements */
  type?:
    | "RELATIONSHIP_TYPE_UNSPECIFIED"
    | "DESCRIBES"
    | "DESCRIBED_BY"
    | "CONTAINS"
    | "CONTAINED_BY"
    | "DEPENDS_ON"
    | "DEPENDENCY_OF"
    | "DEPENDENCY_MANIFEST_OF"
    | "BUILD_DEPENDENCY_OF"
    | "DEV_DEPENDENCY_OF"
    | "OPTIONAL_DEPENDENCY_OF"
    | "PROVIDED_DEPENDENCY_OF"
    | "TEST_DEPENDENCY_OF"
    | "RUNTIME_DEPENDENCY_OF"
    | "EXAMPLE_OF"
    | "GENERATES"
    | "GENERATED_FROM"
    | "ANCESTOR_OF"
    | "DESCENDANT_OF"
    | "VARIANT_OF"
    | "DISTRIBUTION_ARTIFACT"
    | "PATCH_FOR"
    | "PATCH_APPLIED"
    | "COPY_OF"
    | "FILE_ADDED"
    | "FILE_DELETED"
    | "FILE_MODIFIED"
    | "EXPANDED_FROM_ARCHIVE"
    | "DYNAMIC_LINK"
    | "STATIC_LINK"
    | "DATA_FILE_OF"
    | "TEST_CASE_OF"
    | "BUILD_TOOL_OF"
    | "DEV_TOOL_OF"
    | "TEST_OF"
    | "TEST_TOOL_OF"
    | "DOCUMENTATION_OF"
    | "OPTIONAL_COMPONENT_OF"
    | "METAFILE_OF"
    | "PACKAGE_OF"
    | "AMENDS"
    | "PREREQUISITE_FOR"
    | "HAS_PREREQUISITE"
    | "OTHER"
    | (string & {});
  /** A place for the SPDX file creator to record any general comments about the relationship */
  comment?: string;
}

export const RelationshipOccurrence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    source: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
  },
).annotate({ identifier: "RelationshipOccurrence" });

export interface EnvelopeSignature {
  /** The signature itself */
  sig?: string;
  /** A reference id to the key being used for signing */
  keyid?: string;
}

export const EnvelopeSignature = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sig: Schema.optional(Schema.String),
  keyid: Schema.optional(Schema.String),
}).annotate({ identifier: "EnvelopeSignature" });

export interface Envelope {
  /** The bytes being signed */
  payload?: string;
  /** The type of payload being signed */
  payloadType?: string;
  /** The signatures over the payload */
  signatures?: ReadonlyArray<EnvelopeSignature>;
}

export const Envelope = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  payload: Schema.optional(Schema.String),
  payloadType: Schema.optional(Schema.String),
  signatures: Schema.optional(Schema.Array(EnvelopeSignature)),
}).annotate({ identifier: "Envelope" });

export interface DSSEAttestationOccurrence {
  /** If doing something security critical, make sure to verify the signatures in this metadata. */
  envelope?: Envelope;
  statement?: InTotoStatement;
}

export const DSSEAttestationOccurrence =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    envelope: Schema.optional(Envelope),
    statement: Schema.optional(InTotoStatement),
  }).annotate({ identifier: "DSSEAttestationOccurrence" });

export interface SbomReferenceIntotoPredicate {
  /** The person or system referring this predicate to the consumer. */
  referrerId?: string;
  /** The location of the SBOM. */
  location?: string;
  /** The mime type of the SBOM. */
  mimeType?: string;
  /** A map of algorithm to digest of the contents of the SBOM. */
  digest?: Record<string, string>;
}

export const SbomReferenceIntotoPredicate =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referrerId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "SbomReferenceIntotoPredicate" });

export interface SbomReferenceIntotoPayload {
  /** Identifier for the schema of the Statement. */
  _type?: string;
  /** URI identifying the type of the Predicate. */
  predicateType?: string;
  /** Set of software artifacts that the attestation applies to. Each element represents a single software artifact. */
  subject?: ReadonlyArray<Subject>;
  /** Additional parameters of the Predicate. Includes the actual data about the SBOM. */
  predicate?: SbomReferenceIntotoPredicate;
}

export const SbomReferenceIntotoPayload =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    _type: Schema.optional(Schema.String),
    predicateType: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.Array(Subject)),
    predicate: Schema.optional(SbomReferenceIntotoPredicate),
  }).annotate({ identifier: "SbomReferenceIntotoPayload" });

export interface SBOMReferenceOccurrence {
  /** The actual payload that contains the SBOM reference data. */
  payload?: SbomReferenceIntotoPayload;
  /** The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'. */
  payloadType?: string;
  /** The signatures over the payload. */
  signatures?: ReadonlyArray<EnvelopeSignature>;
}

export const SBOMReferenceOccurrence =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(SbomReferenceIntotoPayload),
    payloadType: Schema.optional(Schema.String),
    signatures: Schema.optional(Schema.Array(EnvelopeSignature)),
  }).annotate({ identifier: "SBOMReferenceOccurrence" });

export interface SecretLocation {
  /** The secret is found from a file. */
  fileLocation?: FileLocation;
}

export const SecretLocation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileLocation: Schema.optional(FileLocation),
}).annotate({ identifier: "SecretLocation" });

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

export const SecretStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
}).annotate({ identifier: "SecretStatus" });

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
  /** Optional. Locations where the secret is detected. */
  locations?: ReadonlyArray<SecretLocation>;
  /** Optional. Status of the secret. */
  statuses?: ReadonlyArray<SecretStatus>;
}

export const SecretOccurrence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(SecretLocation)),
  statuses: Schema.optional(Schema.Array(SecretStatus)),
}).annotate({ identifier: "SecretOccurrence" });

export interface Occurrence {
  /** Output only. The name of the `Occurrence` in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}" */
  name?: string;
  /** The unique URL of the image or the container for which the `Occurrence` applies. For example, https://gcr.io/project/image@sha256:foo This field can be used as a filter in list requests. */
  resourceUrl?: string;
  /** The resource for which the `Occurrence` applies. */
  resource?: Resource;
  /** An analysis note associated with this image, in the form "providers/{provider_id}/notes/{NOTE_ID}" This field can be used as a filter in list requests. */
  noteName?: string;
  /** Output only. This explicitly denotes which of the `Occurrence` details are specified. This field can be used as a filter in list requests. */
  kind?:
    | "KIND_UNSPECIFIED"
    | "PACKAGE_VULNERABILITY"
    | "BUILD_DETAILS"
    | "IMAGE_BASIS"
    | "PACKAGE_MANAGER"
    | "DEPLOYABLE"
    | "DISCOVERY"
    | "ATTESTATION_AUTHORITY"
    | "UPGRADE"
    | "COMPLIANCE"
    | "SBOM"
    | "SPDX_PACKAGE"
    | "SPDX_FILE"
    | "SPDX_RELATIONSHIP"
    | "DSSE_ATTESTATION"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | (string & {});
  /** Details of a security vulnerability note. */
  vulnerabilityDetails?: VulnerabilityDetails;
  /** Build details for a verifiable build. */
  buildDetails?: BuildDetails;
  /** Describes how this resource derives from the basis in the associated note. */
  derivedImage?: Derived;
  /** Describes the installation of a package on the linked resource. */
  installation?: Installation;
  /** Describes the deployment of an artifact on a runtime. */
  deployment?: Deployment;
  /** Describes the initial scan status for this resource. */
  discovered?: Discovered;
  /** Describes an attestation of an artifact. */
  attestation?: Attestation;
  /** Describes an upgrade. */
  upgrade?: UpgradeOccurrence;
  /** Describes whether or not a resource passes compliance checks. */
  compliance?: ComplianceOccurrence;
  /** Describes a specific software bill of materials document. */
  sbom?: DocumentOccurrence;
  /** Describes a specific SPDX Package. */
  spdxPackage?: PackageInfoOccurrence;
  /** Describes a specific SPDX File. */
  spdxFile?: FileOccurrence;
  /** Describes a specific relationship between SPDX elements. */
  spdxRelationship?: RelationshipOccurrence;
  /** This represents a DSSE attestation occurrence */
  dsseAttestation?: DSSEAttestationOccurrence;
  /** This represents an SBOM reference occurrence */
  sbomReference?: SBOMReferenceOccurrence;
  /** This represents a secret occurrence */
  secret?: SecretOccurrence;
  /** A description of actions that can be taken to remedy the `Note` */
  remediation?: string;
  /** Output only. The time this `Occurrence` was created. */
  createTime?: string;
  /** Output only. The time this `Occurrence` was last updated. */
  updateTime?: string;
  /** https://github.com/secure-systems-lab/dsse */
  envelope?: Envelope;
}

export const Occurrence = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  resourceUrl: Schema.optional(Schema.String),
  resource: Schema.optional(Resource),
  noteName: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  vulnerabilityDetails: Schema.optional(VulnerabilityDetails),
  buildDetails: Schema.optional(BuildDetails),
  derivedImage: Schema.optional(Derived),
  installation: Schema.optional(Installation),
  deployment: Schema.optional(Deployment),
  discovered: Schema.optional(Discovered),
  attestation: Schema.optional(Attestation),
  upgrade: Schema.optional(UpgradeOccurrence),
  compliance: Schema.optional(ComplianceOccurrence),
  sbom: Schema.optional(DocumentOccurrence),
  spdxPackage: Schema.optional(PackageInfoOccurrence),
  spdxFile: Schema.optional(FileOccurrence),
  spdxRelationship: Schema.optional(RelationshipOccurrence),
  dsseAttestation: Schema.optional(DSSEAttestationOccurrence),
  sbomReference: Schema.optional(SBOMReferenceOccurrence),
  secret: Schema.optional(SecretOccurrence),
  remediation: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  envelope: Schema.optional(Envelope),
}).annotate({ identifier: "Occurrence" });

export interface ListOccurrencesResponse {
  /** The occurrences requested. */
  occurrences?: ReadonlyArray<Occurrence>;
  /** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
  nextPageToken?: string;
}

export const ListOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    occurrences: Schema.optional(Schema.Array(Occurrence)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOccurrencesResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface Detail {
  /** The cpe_uri in [cpe format] (https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar. This field can be used as a filter in list requests. */
  cpeUri?: string;
  /** The name of the package where the vulnerability was found. This field can be used as a filter in list requests. */
  package?: string;
  /** The min version of the package in which the vulnerability exists. */
  minAffectedVersion?: Version;
  /** The max version of the package in which the vulnerability exists. */
  maxAffectedVersion?: Version;
  /** The severity (eg: distro assigned severity) for this vulnerability. */
  severityName?: string;
  /** A vendor-specific description of this note. */
  description?: string;
  /** The fix for this specific package version. */
  fixedLocation?: VulnerabilityLocation;
  /** The type of package; whether native or non native(ruby gems, node.js packages etc) */
  packageType?: string;
  /** Whether this Detail is obsolete. Occurrences are expected not to point to obsolete details. */
  isObsolete?: boolean;
  /** The source from which the information in this Detail was obtained. */
  source?: string;
  /** The vendor of the product. e.g. "google" */
  vendor?: string;
}

export const Detail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpeUri: Schema.optional(Schema.String),
  package: Schema.optional(Schema.String),
  minAffectedVersion: Schema.optional(Version),
  maxAffectedVersion: Schema.optional(Version),
  severityName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  fixedLocation: Schema.optional(VulnerabilityLocation),
  packageType: Schema.optional(Schema.String),
  isObsolete: Schema.optional(Schema.Boolean),
  source: Schema.optional(Schema.String),
  vendor: Schema.optional(Schema.String),
}).annotate({ identifier: "Detail" });

export interface VulnerabilityType {
  /** The CVSS score for this Vulnerability. */
  cvssScore?: number;
  /** Note provider assigned impact of the vulnerability */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** All information about the package to specifically identify this vulnerability. One entry per (version range and cpe_uri) the package vulnerability has manifested in. */
  details?: ReadonlyArray<Detail>;
  /** The full description of the CVSS for version 2. */
  cvssV2?: CVSS;
  /** A list of CWE for this vulnerability. For details, see: https://cwe.mitre.org/index.html */
  cwe?: ReadonlyArray<string>;
  /** CVSS version used to populate cvss_score and severity. */
  cvssVersion?:
    | "CVSS_VERSION_UNSPECIFIED"
    | "CVSS_VERSION_2"
    | "CVSS_VERSION_3"
    | (string & {});
  /** Time this advisory was published by the source. */
  advisoryPublishTime?: string;
}

export const VulnerabilityType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cvssScore: Schema.optional(Schema.Number),
  severity: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Detail)),
  cvssV2: Schema.optional(CVSS),
  cwe: Schema.optional(Schema.Array(Schema.String)),
  cvssVersion: Schema.optional(Schema.String),
  advisoryPublishTime: Schema.optional(Schema.String),
}).annotate({ identifier: "VulnerabilityType" });

export interface BuildSignature {
  /** Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys. This field may be empty if `key_id` references an external key. For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin` */
  publicKey?: string;
  /** Signature of the related `BuildProvenance`, encoded in a base64 string. */
  signature?: string;
  /** An Id for the key used to sign. This could be either an Id for the key stored in `public_key` (such as the Id or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service). */
  keyId?: string;
  /** The type of the key, either stored in `public_key` or referenced in `key_id` */
  keyType?:
    | "KEY_TYPE_UNSPECIFIED"
    | "PGP_ASCII_ARMORED"
    | "PKIX_PEM"
    | (string & {});
}

export const BuildSignature = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publicKey: Schema.optional(Schema.String),
  signature: Schema.optional(Schema.String),
  keyId: Schema.optional(Schema.String),
  keyType: Schema.optional(Schema.String),
}).annotate({ identifier: "BuildSignature" });

export interface BuildType {
  /** Version of the builder which produced this Note. */
  builderVersion?: string;
  /** Signature of the build in Occurrences pointing to the Note containing this `BuilderDetails`. */
  signature?: BuildSignature;
}

export const BuildType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  builderVersion: Schema.optional(Schema.String),
  signature: Schema.optional(BuildSignature),
}).annotate({ identifier: "BuildType" });

export interface Basis {
  /** The resource_url for the resource representing the basis of associated occurrence images. */
  resourceUrl?: string;
  /** The fingerprint of the base image. */
  fingerprint?: Fingerprint;
}

export const Basis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUrl: Schema.optional(Schema.String),
  fingerprint: Schema.optional(Fingerprint),
}).annotate({ identifier: "Basis" });

export interface Distribution {
  /** The cpe_uri in [cpe format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
  cpeUri?: string;
  /** The CPU architecture for which packages in this distribution channel were built */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** The latest available version of this package in this distribution channel. */
  latestVersion?: Version;
  /** A freeform string denoting the maintainer of this package. */
  maintainer?: string;
  /** The distribution channel-specific homepage for this package. */
  url?: string;
  /** The distribution channel-specific description of this package. */
  description?: string;
}

export const Distribution = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpeUri: Schema.optional(Schema.String),
  architecture: Schema.optional(Schema.String),
  latestVersion: Schema.optional(Version),
  maintainer: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "Distribution" });

export interface Digest {
  /** `SHA1`, `SHA512` etc. */
  algo?: string;
  /** Value of the digest. */
  digestBytes?: string;
}

export const Digest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  algo: Schema.optional(Schema.String),
  digestBytes: Schema.optional(Schema.String),
}).annotate({ identifier: "Digest" });

export interface Package {
  /** The name of the package. */
  name?: string;
  /** The various channels by which a package is distributed. */
  distribution?: ReadonlyArray<Distribution>;
  /** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  packageType?: string;
  /** The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
  cpeUri?: string;
  /** The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** The version of the package. */
  version?: Version;
  /** A freeform text denoting the maintainer of this package. */
  maintainer?: string;
  /** The homepage for this package. */
  url?: string;
  /** The description of this package. */
  description?: string;
  /** Licenses that have been declared by the authors of the package. */
  license?: License;
  /** Hash value, typically a file digest, that allows unique identification a specific package. */
  digest?: ReadonlyArray<Digest>;
}

export const Package = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  distribution: Schema.optional(Schema.Array(Distribution)),
  packageType: Schema.optional(Schema.String),
  cpeUri: Schema.optional(Schema.String),
  architecture: Schema.optional(Schema.String),
  version: Schema.optional(Version),
  maintainer: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  license: Schema.optional(License),
  digest: Schema.optional(Schema.Array(Digest)),
}).annotate({ identifier: "Package" });

export interface Deployable {
  /** Resource URI for the artifact being deployed. */
  resourceUri?: ReadonlyArray<string>;
}

export const Deployable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Deployable" });

export interface Discovery {
  /** The kind of analysis that is handled by this discovery. */
  analysisKind?:
    | "KIND_UNSPECIFIED"
    | "PACKAGE_VULNERABILITY"
    | "BUILD_DETAILS"
    | "IMAGE_BASIS"
    | "PACKAGE_MANAGER"
    | "DEPLOYABLE"
    | "DISCOVERY"
    | "ATTESTATION_AUTHORITY"
    | "UPGRADE"
    | "COMPLIANCE"
    | "SBOM"
    | "SPDX_PACKAGE"
    | "SPDX_FILE"
    | "SPDX_RELATIONSHIP"
    | "DSSE_ATTESTATION"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | (string & {});
}

export const Discovery = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  analysisKind: Schema.optional(Schema.String),
}).annotate({ identifier: "Discovery" });

export interface AttestationAuthorityHint {
  /** The human readable name of this Attestation Authority, for example "qa". */
  humanReadableName?: string;
}

export const AttestationAuthorityHint =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    humanReadableName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttestationAuthorityHint" });

export interface AttestationAuthority {
  hint?: AttestationAuthorityHint;
}

export const AttestationAuthority = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hint: Schema.optional(AttestationAuthorityHint),
}).annotate({ identifier: "AttestationAuthority" });

export interface UpgradeNote {
  /** Required - The package this Upgrade is for. */
  package?: string;
  /** Required - The version of the package in machine + human readable form. */
  version?: Version;
  /** Metadata about the upgrade for each specific operating system. */
  distributions?: ReadonlyArray<UpgradeDistribution>;
}

export const UpgradeNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  package: Schema.optional(Schema.String),
  version: Schema.optional(Version),
  distributions: Schema.optional(Schema.Array(UpgradeDistribution)),
}).annotate({ identifier: "UpgradeNote" });

export interface CisBenchmark {
  /** The profile level of this CIS benchmark check. */
  profileLevel?: number;
  /** The severity level of this CIS benchmark check. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
}

export const CisBenchmark = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  profileLevel: Schema.optional(Schema.Number),
  severity: Schema.optional(Schema.String),
}).annotate({ identifier: "CisBenchmark" });

export interface ComplianceNote {
  /** The title that identifies this compliance check. */
  title?: string;
  /** A description about this compliance check. */
  description?: string;
  /** The OS and config versions the benchmark applies to. */
  version?: ReadonlyArray<ComplianceVersion>;
  /** A rationale for the existence of this compliance check. */
  rationale?: string;
  /** A description of remediation steps if the compliance check fails. */
  remediation?: string;
  /** Right now we only have one compliance type, but we may add additional types in the future. */
  cisBenchmark?: CisBenchmark;
  /** Serialized scan instructions with a predefined format. */
  scanInstructions?: string;
  /** Potential impact of the suggested remediation */
  impact?: string;
}

export const ComplianceNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  version: Schema.optional(Schema.Array(ComplianceVersion)),
  rationale: Schema.optional(Schema.String),
  remediation: Schema.optional(Schema.String),
  cisBenchmark: Schema.optional(CisBenchmark),
  scanInstructions: Schema.optional(Schema.String),
  impact: Schema.optional(Schema.String),
}).annotate({ identifier: "ComplianceNote" });

export interface DocumentNote {
  /** Provide a reference number that can be used to understand how to parse and interpret the rest of the file */
  spdxVersion?: string;
  /** Compliance with the SPDX specification includes populating the SPDX fields therein with data related to such fields ("SPDX-Metadata") */
  dataLicence?: string;
}

export const DocumentNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spdxVersion: Schema.optional(Schema.String),
  dataLicence: Schema.optional(Schema.String),
}).annotate({ identifier: "DocumentNote" });

export interface ExternalRef {
  /** An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package */
  category?:
    | "CATEGORY_UNSPECIFIED"
    | "SECURITY"
    | "PACKAGE_MANAGER"
    | "PERSISTENT_ID"
    | "OTHER"
    | (string & {});
  /** Type of category (e.g. 'npm' for the PACKAGE_MANAGER category) */
  type?: string;
  /** The unique string with no spaces necessary to access the package-specific information, metadata, or content within the target location */
  locator?: string;
  /** Human-readable information about the purpose and target of the reference */
  comment?: string;
}

export const ExternalRef = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  category: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  locator: Schema.optional(Schema.String),
  comment: Schema.optional(Schema.String),
}).annotate({ identifier: "ExternalRef" });

export interface PackageInfoNote {
  /** Identify the full name of the package as given by the Package Originator */
  title?: string;
  /** Identify the version of the package */
  version?: string;
  /** Identify the actual distribution source for the package/directory identified in the SPDX file */
  supplier?: string;
  /** If the package identified in the SPDX file originated from a different person or organization than identified as Package Supplier, this field identifies from where or whom the package originally came */
  originator?: string;
  /** This section identifies the download Universal Resource Locator (URL), or a specific location within a version control system (VCS) for the package at the time that the SPDX file was created */
  downloadLocation?: string;
  /** Indicates whether the file content of this package has been available for or subjected to analysis when creating the SPDX document */
  analyzed?: boolean;
  /** This field provides an independently reproducible mechanism identifying specific contents of a package based on the actual files (except the SPDX file itself, if it is included in the package) that make up each package and that correlates to the data in this SPDX file */
  verificationCode?: string;
  /** Provide an independently reproducible mechanism that permits unique identification of a specific package that correlates to the data in this SPDX file */
  checksum?: string;
  /** Provide a place for the SPDX file creator to record a web site that serves as the package's home page */
  homePage?: string;
  /** Contain the license the SPDX file creator has concluded as governing the This field is to contain a list of all licenses found in the package. The relationship between licenses (i.e., conjunctive, disjunctive) is not specified in this field – it is simply a listing of all licenses found */
  filesLicenseInfo?: ReadonlyArray<string>;
  /** List the licenses that have been declared by the authors of the package */
  licenseDeclared?: License;
  /** Identify the copyright holders of the package, as well as any dates present */
  copyright?: string;
  /** A short description of the package */
  summaryDescription?: string;
  /** A more detailed description of the package */
  detailedDescription?: string;
  /** ExternalRef */
  externalRefs?: ReadonlyArray<ExternalRef>;
  /** A place for the SPDX data creator to record, at the package level, acknowledgements that may be needed to be communicated in some contexts */
  attribution?: string;
  /** The type of package: OS, MAVEN, GO, GO_STDLIB, etc. */
  packageType?: string;
}

export const PackageInfoNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  supplier: Schema.optional(Schema.String),
  originator: Schema.optional(Schema.String),
  downloadLocation: Schema.optional(Schema.String),
  analyzed: Schema.optional(Schema.Boolean),
  verificationCode: Schema.optional(Schema.String),
  checksum: Schema.optional(Schema.String),
  homePage: Schema.optional(Schema.String),
  filesLicenseInfo: Schema.optional(Schema.Array(Schema.String)),
  licenseDeclared: Schema.optional(License),
  copyright: Schema.optional(Schema.String),
  summaryDescription: Schema.optional(Schema.String),
  detailedDescription: Schema.optional(Schema.String),
  externalRefs: Schema.optional(Schema.Array(ExternalRef)),
  attribution: Schema.optional(Schema.String),
  packageType: Schema.optional(Schema.String),
}).annotate({ identifier: "PackageInfoNote" });

export interface FileNote {
  /** Identify the full path and filename that corresponds to the file information in this section */
  title?: string;
  /** This field provides information about the type of file identified */
  fileType?:
    | "FILE_TYPE_UNSPECIFIED"
    | "SOURCE"
    | "BINARY"
    | "ARCHIVE"
    | "APPLICATION"
    | "AUDIO"
    | "IMAGE"
    | "TEXT"
    | "VIDEO"
    | "DOCUMENTATION"
    | "SPDX"
    | "OTHER"
    | (string & {});
  /** Provide a unique identifier to match analysis information on each specific file in a package */
  checksum?: ReadonlyArray<string>;
}

export const FileNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  fileType: Schema.optional(Schema.String),
  checksum: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "FileNote" });

export interface RelationshipNote {
  /** The type of relationship between the source and target SPDX elements */
  type?:
    | "RELATIONSHIP_TYPE_UNSPECIFIED"
    | "DESCRIBES"
    | "DESCRIBED_BY"
    | "CONTAINS"
    | "CONTAINED_BY"
    | "DEPENDS_ON"
    | "DEPENDENCY_OF"
    | "DEPENDENCY_MANIFEST_OF"
    | "BUILD_DEPENDENCY_OF"
    | "DEV_DEPENDENCY_OF"
    | "OPTIONAL_DEPENDENCY_OF"
    | "PROVIDED_DEPENDENCY_OF"
    | "TEST_DEPENDENCY_OF"
    | "RUNTIME_DEPENDENCY_OF"
    | "EXAMPLE_OF"
    | "GENERATES"
    | "GENERATED_FROM"
    | "ANCESTOR_OF"
    | "DESCENDANT_OF"
    | "VARIANT_OF"
    | "DISTRIBUTION_ARTIFACT"
    | "PATCH_FOR"
    | "PATCH_APPLIED"
    | "COPY_OF"
    | "FILE_ADDED"
    | "FILE_DELETED"
    | "FILE_MODIFIED"
    | "EXPANDED_FROM_ARCHIVE"
    | "DYNAMIC_LINK"
    | "STATIC_LINK"
    | "DATA_FILE_OF"
    | "TEST_CASE_OF"
    | "BUILD_TOOL_OF"
    | "DEV_TOOL_OF"
    | "TEST_OF"
    | "TEST_TOOL_OF"
    | "DOCUMENTATION_OF"
    | "OPTIONAL_COMPONENT_OF"
    | "METAFILE_OF"
    | "PACKAGE_OF"
    | "AMENDS"
    | "PREREQUISITE_FOR"
    | "HAS_PREREQUISITE"
    | "OTHER"
    | (string & {});
}

export const RelationshipNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "RelationshipNote" });

export interface DSSEHint {
  /** Required. The human readable name of this attestation authority, for example "cloudbuild-prod". */
  humanReadableName?: string;
}

export const DSSEHint = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  humanReadableName: Schema.optional(Schema.String),
}).annotate({ identifier: "DSSEHint" });

export interface DSSEAttestationNote {
  /** DSSEHint hints at the purpose of the attestation authority. */
  hint?: DSSEHint;
}

export const DSSEAttestationNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hint: Schema.optional(DSSEHint),
}).annotate({ identifier: "DSSEAttestationNote" });

export interface Publisher {
  /** Name of the publisher. Examples: 'Google', 'Google Cloud Platform'. */
  name?: string;
  /** Provides information about the authority of the issuing party to release the document, in particular, the party's constituency and responsibilities or other obligations. */
  issuingAuthority?: string;
  /** The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io */
  publisherNamespace?: string;
}

export const Publisher = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  issuingAuthority: Schema.optional(Schema.String),
  publisherNamespace: Schema.optional(Schema.String),
}).annotate({ identifier: "Publisher" });

export interface IdentifierHelper {
  /** The field that is set in the API proto. */
  field?: "IDENTIFIER_HELPER_FIELD_UNSPECIFIED" | "GENERIC_URI" | (string & {});
  /** Contains a URI which is vendor-specific. Example: The artifact repository URL of an image. */
  genericUri?: string;
}

export const IdentifierHelper = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  field: Schema.optional(Schema.String),
  genericUri: Schema.optional(Schema.String),
}).annotate({ identifier: "IdentifierHelper" });

export interface Product {
  /** Name of the product. */
  name?: string;
  /** Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document. */
  id?: string;
  /** Helps in identifying the underlying product. */
  identifierHelper?: IdentifierHelper;
}

export const Product = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  identifierHelper: Schema.optional(IdentifierHelper),
}).annotate({ identifier: "Product" });

export interface Assessment {
  /** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. */
  cve?: string;
  /** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
  vulnerabilityId?: string;
  /** A one sentence description of this Vex. */
  shortDescription?: string;
  /** A detailed description of this Vex. */
  longDescription?: string;
  /** Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability. */
  relatedUris?: ReadonlyArray<URI>;
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
  /** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
  justification?: Justification;
  /** Specifies details on how to handle (and presumably, fix) a vulnerability. */
  remediations?: ReadonlyArray<Remediation>;
}

export const Assessment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cve: Schema.optional(Schema.String),
  vulnerabilityId: Schema.optional(Schema.String),
  shortDescription: Schema.optional(Schema.String),
  longDescription: Schema.optional(Schema.String),
  relatedUris: Schema.optional(Schema.Array(URI)),
  state: Schema.optional(Schema.String),
  impacts: Schema.optional(Schema.Array(Schema.String)),
  justification: Schema.optional(Justification),
  remediations: Schema.optional(Schema.Array(Remediation)),
}).annotate({ identifier: "Assessment" });

export interface VulnerabilityAssessmentNote {
  /** The title of the note. E.g. `Vex-Debian-11.4` */
  title?: string;
  /** A one sentence description of this Vex. */
  shortDescription?: string;
  /** A detailed description of this Vex. */
  longDescription?: string;
  /** Identifies the language used by this document, corresponding to IETF BCP 47 / RFC 5646. */
  languageCode?: string;
  /** Publisher details of this Note. */
  publisher?: Publisher;
  /** The product affected by this vex. */
  product?: Product;
  /** Represents a vulnerability assessment for the product. */
  assessment?: Assessment;
}

export const VulnerabilityAssessmentNote =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    shortDescription: Schema.optional(Schema.String),
    longDescription: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    publisher: Schema.optional(Publisher),
    product: Schema.optional(Product),
    assessment: Schema.optional(Assessment),
  }).annotate({ identifier: "VulnerabilityAssessmentNote" });

export interface SBOMReferenceNote {
  /** The format that SBOM takes. E.g. may be spdx, cyclonedx, etc... */
  format?: string;
  /** The version of the format that the SBOM takes. E.g. if the format is spdx, the version may be 2.3. */
  version?: string;
}

export const SBOMReferenceNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  format: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "SBOMReferenceNote" });

export interface SecretNote {}

export const SecretNote = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "SecretNote" });

export interface RelatedUrl {
  /** Specific URL to associate with the note */
  url?: string;
  /** Label to describe usage of the URL */
  label?: string;
}

export const RelatedUrl = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
}).annotate({ identifier: "RelatedUrl" });

export interface Note {
  /** The name of the note in the form "projects/{provider_project_id}/notes/{NOTE_ID}" */
  name?: string;
  /** A one sentence description of this `Note`. */
  shortDescription?: string;
  /** A detailed description of this `Note`. */
  longDescription?: string;
  /** Output only. This explicitly denotes which kind of note is specified. This field can be used as a filter in list requests. */
  kind?:
    | "KIND_UNSPECIFIED"
    | "PACKAGE_VULNERABILITY"
    | "BUILD_DETAILS"
    | "IMAGE_BASIS"
    | "PACKAGE_MANAGER"
    | "DEPLOYABLE"
    | "DISCOVERY"
    | "ATTESTATION_AUTHORITY"
    | "UPGRADE"
    | "COMPLIANCE"
    | "SBOM"
    | "SPDX_PACKAGE"
    | "SPDX_FILE"
    | "SPDX_RELATIONSHIP"
    | "DSSE_ATTESTATION"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | (string & {});
  /** A package vulnerability type of note. */
  vulnerabilityType?: VulnerabilityType;
  /** Build provenance type for a verifiable build. */
  buildType?: BuildType;
  /** A note describing a base image. */
  baseImage?: Basis;
  /** A note describing a package hosted by various package managers. */
  package?: Package;
  /** A note describing something that can be deployed. */
  deployable?: Deployable;
  /** A note describing a provider/analysis type. */
  discovery?: Discovery;
  /** A note describing an attestation role. */
  attestationAuthority?: AttestationAuthority;
  /** A note describing an upgrade. */
  upgrade?: UpgradeNote;
  /** A note describing a compliance check. */
  compliance?: ComplianceNote;
  /** A note describing a software bill of materials. */
  sbom?: DocumentNote;
  /** A note describing an SPDX Package. */
  spdxPackage?: PackageInfoNote;
  /** A note describing an SPDX File. */
  spdxFile?: FileNote;
  /** A note describing a relationship between SPDX elements. */
  spdxRelationship?: RelationshipNote;
  /** A note describing a dsse attestation note. */
  dsseAttestation?: DSSEAttestationNote;
  /** A note describing a vulnerability assessment. */
  vulnerabilityAssessment?: VulnerabilityAssessmentNote;
  /** A note describing a reference to an SBOM. */
  sbomReference?: SBOMReferenceNote;
  /** A note describing a secret. */
  secret?: SecretNote;
  /** URLs associated with this note */
  relatedUrl?: ReadonlyArray<RelatedUrl>;
  /** Time of expiration for this note, null if note does not expire. */
  expirationTime?: string;
  /** Output only. The time this note was created. This field can be used as a filter in list requests. */
  createTime?: string;
  /** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
  updateTime?: string;
}

export const Note = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  shortDescription: Schema.optional(Schema.String),
  longDescription: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  vulnerabilityType: Schema.optional(VulnerabilityType),
  buildType: Schema.optional(BuildType),
  baseImage: Schema.optional(Basis),
  package: Schema.optional(Package),
  deployable: Schema.optional(Deployable),
  discovery: Schema.optional(Discovery),
  attestationAuthority: Schema.optional(AttestationAuthority),
  upgrade: Schema.optional(UpgradeNote),
  compliance: Schema.optional(ComplianceNote),
  sbom: Schema.optional(DocumentNote),
  spdxPackage: Schema.optional(PackageInfoNote),
  spdxFile: Schema.optional(FileNote),
  spdxRelationship: Schema.optional(RelationshipNote),
  dsseAttestation: Schema.optional(DSSEAttestationNote),
  vulnerabilityAssessment: Schema.optional(VulnerabilityAssessmentNote),
  sbomReference: Schema.optional(SBOMReferenceNote),
  secret: Schema.optional(SecretNote),
  relatedUrl: Schema.optional(Schema.Array(RelatedUrl)),
  expirationTime: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Note" });

export interface ListNotesResponse {
  /** The occurrences requested */
  notes?: ReadonlyArray<Note>;
  /** The next pagination token in the list response. It should be used as page_token for the following request. An empty value means no more result. */
  nextPageToken?: string;
}

export const ListNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  notes: Schema.optional(Schema.Array(Note)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListNotesResponse" });

export interface ListNoteOccurrencesResponse {
  /** The occurrences attached to the specified note. */
  occurrences?: ReadonlyArray<Occurrence>;
  /** Token to receive the next page of notes. */
  nextPageToken?: string;
}

export const ListNoteOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    occurrences: Schema.optional(Schema.Array(Occurrence)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNoteOccurrencesResponse" });

export interface SeverityCount {
  /** The severity of the occurrences. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** The number of occurrences with the severity. */
  count?: string;
}

export const SeverityCount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  severity: Schema.optional(Schema.String),
  count: Schema.optional(Schema.String),
}).annotate({ identifier: "SeverityCount" });

export interface GetVulnzOccurrencesSummaryResponse {
  /** A map of how many occurrences were found for each severity. */
  counts?: ReadonlyArray<SeverityCount>;
}

export const GetVulnzOccurrencesSummaryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counts: Schema.optional(Schema.Array(SeverityCount)),
  }).annotate({ identifier: "GetVulnzOccurrencesSummaryResponse" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expression: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
}).annotate({ identifier: "Expr" });

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role: Schema.optional(Schema.String),
  members: Schema.optional(Schema.Array(Schema.String)),
  condition: Schema.optional(Expr),
}).annotate({ identifier: "Binding" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.Number),
  bindings: Schema.optional(Schema.Array(Binding)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policy: Schema.optional(Policy),
}).annotate({ identifier: "SetIamPolicyRequest" });

export interface GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestedPolicyVersion: Schema.optional(Schema.Number),
}).annotate({ identifier: "GetPolicyOptions" });

export interface GetIamPolicyRequest {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  options: Schema.optional(GetPolicyOptions),
}).annotate({ identifier: "GetIamPolicyRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface CreateOperationRequest {
  /** The ID to use for this operation. */
  operationId?: string;
  /** The operation to create. */
  operation?: Operation;
}

export const CreateOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operationId: Schema.optional(Schema.String),
    operation: Schema.optional(Operation),
  },
).annotate({ identifier: "CreateOperationRequest" });

export interface UpdateOperationRequest {
  /** The operation to create. */
  operation?: Operation;
  /** The fields to update. */
  updateMask?: string;
}

export const UpdateOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operation: Schema.optional(Operation),
    updateMask: Schema.optional(Schema.String),
  },
).annotate({ identifier: "UpdateOperationRequest" });

export interface ScanConfig {
  /** Output only. The name of the ScanConfig in the form “projects/{project_id}/scanConfigs/{scan_config_id}". */
  name?: string;
  /** Output only. A human-readable description of what the `ScanConfig` does. */
  description?: string;
  /** Indicates whether the Scan is enabled. */
  enabled?: boolean;
  /** Output only. The time this scan config was created. */
  createTime?: string;
  /** Output only. The time this scan config was last updated. */
  updateTime?: string;
}

export const ScanConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "ScanConfig" });

export interface ListScanConfigsResponse {
  /** The set of scan configs. */
  scanConfigs?: ReadonlyArray<ScanConfig>;
  /** A page token to pass in order to get more scan configs. */
  nextPageToken?: string;
}

export const ListScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scanConfigs: Schema.optional(Schema.Array(ScanConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListScanConfigsResponse" });

export interface GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata {
  /** Output only. The time this operation was created. */
  createTime?: string;
  /** Output only. The time that this operation was marked completed or failed. */
  endTime?: string;
}

export const GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Volume {
  /** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
  name?: string;
  /** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
  path?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Volume =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Volume",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan {
  /** Start of time span. */
  startTime?: string;
  /** End of time span. */
  endTime?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep {
  /** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
  name?: string;
  /** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
  args?: ReadonlyArray<string>;
  /** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
  dir?: string;
  /** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
  id?: string;
  /** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
  waitFor?: ReadonlyArray<string>;
  /** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
  entrypoint?: string;
  /** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
  secretEnv?: ReadonlyArray<string>;
  /** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume>;
  /** Output only. Stores timing information for executing this build step. */
  timing?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Stores timing information for pulling this build step's builder image only. */
  pullTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
  timeout?: string;
  /** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
  status?:
    | "STATUS_UNKNOWN"
    | "PENDING"
    | "QUEUED"
    | "WORKING"
    | "SUCCESS"
    | "FAILURE"
    | "INTERNAL_ERROR"
    | "TIMEOUT"
    | "CANCELLED"
    | "EXPIRED"
    | (string & {});
  /** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
  allowFailure?: boolean;
  /** Output only. Return code from running the step. */
  exitCode?: number;
  /** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
  allowExitCodes?: ReadonlyArray<number>;
  /** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
  script?: string;
  /** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
  automapSubstitutions?: boolean;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    dir: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    entrypoint: Schema.optional(Schema.String),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    volumes: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Volume),
    ),
    timing: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    pullTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    timeout: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    allowFailure: Schema.optional(Schema.Boolean),
    exitCode: Schema.optional(Schema.Number),
    allowExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    script: Schema.optional(Schema.String),
    automapSubstitutions: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep",
  });

export interface Volume {
  /** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
  name?: string;
  /** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
  path?: string;
}

export const Volume = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
}).annotate({ identifier: "Volume" });

export interface TimeSpan {
  /** Start of time span. */
  startTime?: string;
  /** End of time span. */
  endTime?: string;
}

export const TimeSpan = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeSpan" });

export interface StepResult {
  name?: string;
  attestationContentName?: string;
  attestationType?: string;
}

export const StepResult = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  attestationContentName: Schema.optional(Schema.String),
  attestationType: Schema.optional(Schema.String),
}).annotate({ identifier: "StepResult" });

export interface BuildStep {
  /** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
  name?: string;
  /** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
  args?: ReadonlyArray<string>;
  /** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
  dir?: string;
  /** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
  id?: string;
  /** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
  waitFor?: ReadonlyArray<string>;
  /** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
  entrypoint?: string;
  /** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
  secretEnv?: ReadonlyArray<string>;
  /** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<Volume>;
  /** Output only. Stores timing information for executing this build step. */
  timing?: TimeSpan;
  /** Output only. Stores timing information for pulling this build step's builder image only. */
  pullTiming?: TimeSpan;
  /** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
  timeout?: string;
  /** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
  status?:
    | "STATUS_UNKNOWN"
    | "PENDING"
    | "QUEUING"
    | "QUEUED"
    | "WORKING"
    | "SUCCESS"
    | "FAILURE"
    | "INTERNAL_ERROR"
    | "TIMEOUT"
    | "CANCELLED"
    | "EXPIRED"
    | (string & {});
  /** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
  allowFailure?: boolean;
  /** Output only. Return code from running the step. */
  exitCode?: number;
  /** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
  allowExitCodes?: ReadonlyArray<number>;
  /** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
  script?: string;
  /** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
  automapSubstitutions?: boolean;
  results?: ReadonlyArray<StepResult>;
  /** Remote configuration for the build step. */
  remoteConfig?: string;
}

export const BuildStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  env: Schema.optional(Schema.Array(Schema.String)),
  args: Schema.optional(Schema.Array(Schema.String)),
  dir: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  waitFor: Schema.optional(Schema.Array(Schema.String)),
  entrypoint: Schema.optional(Schema.String),
  secretEnv: Schema.optional(Schema.Array(Schema.String)),
  volumes: Schema.optional(Schema.Array(Volume)),
  timing: Schema.optional(TimeSpan),
  pullTiming: Schema.optional(TimeSpan),
  timeout: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  allowFailure: Schema.optional(Schema.Boolean),
  exitCode: Schema.optional(Schema.Number),
  allowExitCodes: Schema.optional(Schema.Array(Schema.Number)),
  script: Schema.optional(Schema.String),
  automapSubstitutions: Schema.optional(Schema.Boolean),
  results: Schema.optional(Schema.Array(StepResult)),
  remoteConfig: Schema.optional(Schema.String),
}).annotate({ identifier: "BuildStep" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource {
  /** Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Required. Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
  object?: string;
  /** Optional. Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
  /** Optional. Option to specify the tool to fetch the source file for the build. */
  sourceFetcher?:
    | "SOURCE_FETCHER_UNSPECIFIED"
    | "GSUTIL"
    | "GCS_FETCHER"
    | (string & {});
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
    sourceFetcher: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource {
  /** Optional. ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
  projectId?: string;
  /** Required. Name of the Cloud Source Repository. */
  repoName?: string;
  /** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  branchName?: string;
  /** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  tagName?: string;
  /** Explicit commit SHA to build. */
  commitSha?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Optional. Only trigger a build if the revision regex does NOT match the revision regex. */
  invertRegex?: boolean;
  /** Optional. Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
  substitutions?: Record<string, string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    repoName: Schema.optional(Schema.String),
    branchName: Schema.optional(Schema.String),
    tagName: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    invertRegex: Schema.optional(Schema.Boolean),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource {
  /** Required. Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
  url?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Optional. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
  revision?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest {
  /** Required. Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Required. Cloud Storage object containing the source manifest. This object must be a JSON file. */
  object?: string;
  /** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository {
  /** Required. Name of the Google Cloud Build repository, formatted as `projects/* /locations/* /connections/* /repositories/*`. */
  repository?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. */
  dir?: string;
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig {
  /** Required. The Developer Connect Git repository link, formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*`. */
  gitRepositoryLink?: string;
  /** Required. Directory, relative to the source root, in which to run the build. */
  dir?: string;
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitRepositoryLink: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Source {
  /** If provided, get the source from this location in Cloud Storage. */
  storageSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;
  /** If provided, get the source from this location in a Cloud Source Repository. */
  repoSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;
  /** If provided, get the source from this Git repository. */
  gitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;
  /** If provided, get the source from this manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
  storageSourceManifest?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
  /** Optional. If provided, get the source from this 2nd-gen Google Cloud Build repository resource. */
  connectedRepository?: ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;
  /** If provided, get the source from this Developer Connect config. */
  developerConnectConfig?: ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Source =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource,
    ),
    repoSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource,
    ),
    gitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource,
    ),
    storageSourceManifest: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
    connectedRepository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository,
    ),
    developerConnectConfig: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Source",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage {
  /** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
  name?: string;
  /** Docker Registry 2.0 digest. */
  digest?: string;
  /** Output only. Stores timing information for pushing the specified image. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Output only. The OCI media type of the artifact. Non-OCI images, such as Docker images, will have an unspecified value. */
  ociMediaType?:
    | "OCI_MEDIA_TYPE_UNSPECIFIED"
    | "IMAGE_MANIFEST"
    | "IMAGE_INDEX"
    | (string & {});
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.String),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
    ociMediaType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Hash {
  /** The type of hash that was performed. */
  type?:
    | "NONE"
    | "SHA256"
    | "MD5"
    | "GO_MODULE_H1"
    | "SHA512"
    | "DIRSUM_SHA256"
    | (string & {});
  /** The hash value. */
  value?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Hash =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Hash",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes {
  /** Collection of file hashes. */
  fileHash?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Hash>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHash: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Hash),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage {
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Hash types and values of the Python Artifact. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact {
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Hash types and values of the Maven Artifact. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule {
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Hash types and values of the Go Module Artifact. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage {
  /** URI of the uploaded npm package. */
  uri?: string;
  /** Hash types and values of the npm package. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Results {
  /** Container images that were built as a part of the build. */
  images?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage>;
  /** List of build step digests, in the order corresponding to build step indices. */
  buildStepImages?: ReadonlyArray<string>;
  /** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  artifactManifest?: string;
  /** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  numArtifacts?: string;
  /** List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. Note that the `$BUILDER_OUTPUT` variable is read-only and can't be substituted. */
  buildStepOutputs?: ReadonlyArray<string>;
  /** Time to push all non-container artifacts to Cloud Storage. */
  artifactTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Python artifacts uploaded to Artifact Registry at the end of the build. */
  pythonPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage>;
  /** Maven artifacts uploaded to Artifact Registry at the end of the build. */
  mavenArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact>;
  /** Optional. Go module artifacts uploaded to Artifact Registry at the end of the build. */
  goModules?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule>;
  /** Npm packages uploaded to Artifact Registry at the end of the build. */
  npmPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Results =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    images: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage),
    ),
    buildStepImages: Schema.optional(Schema.Array(Schema.String)),
    artifactManifest: Schema.optional(Schema.String),
    numArtifacts: Schema.optional(Schema.String),
    buildStepOutputs: Schema.optional(Schema.Array(Schema.String)),
    artifactTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    pythonPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage,
      ),
    ),
    mavenArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact,
      ),
    ),
    goModules: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule),
    ),
    npmPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage,
      ),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Results",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects {
  /** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
  location?: string;
  /** Path globs used to match files in the build's workspace. */
  paths?: ReadonlyArray<string>;
  /** Output only. Stores timing information for pushing all artifact objects. */
  timing?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
    timing: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact {
  /** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Optional. Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
  path?: string;
  /** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
  artifactId?: string;
  /** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
  groupId?: string;
  /** Maven `version` value used when uploading the artifact to Artifact Registry. */
  version?: string;
  /** Optional. Path to a folder containing the files to upload to Artifact Registry. This can be either an absolute path, e.g. `/workspace/my-app/target/`, or a relative path from /workspace, e.g. `my-app/target/`. This field is mutually exclusive with the `path` field. */
  deployFolder?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    artifactId: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    deployFolder: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule {
  /** Optional. Artifact Registry repository name. Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo */
  repositoryName?: string;
  /** Optional. Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location. */
  repositoryLocation?: string;
  /** Optional. Project ID of the Artifact Registry repository. Defaults to the build project. */
  repositoryProjectId?: string;
  /** Optional. Source path of the go.mod file in the build's workspace. If not specified, this will default to the current directory. e.g. ~/code/go/mypackage */
  sourcePath?: string;
  /** Optional. The Go module's "module path". e.g. example.com/foo/v2 */
  modulePath?: string;
  /** Optional. The Go module's semantic version in the form vX.Y.Z. e.g. v0.1.1 Pre-release identifiers can also be added by appending a dash and dot separated ASCII alphanumeric characters and hyphens. e.g. v0.2.3-alpha.x.12m.5 */
  moduleVersion?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositoryName: Schema.optional(Schema.String),
    repositoryLocation: Schema.optional(Schema.String),
    repositoryProjectId: Schema.optional(Schema.String),
    sourcePath: Schema.optional(Schema.String),
    modulePath: Schema.optional(Schema.String),
    moduleVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage {
  /** Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file. */
  paths?: ReadonlyArray<string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage {
  /** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Optional. Path to the package.json. e.g. workspace/path/to/package Only one of `archive` or `package_path` can be specified. */
  packagePath?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    packagePath: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci {
  /** Required. Path on the local file system where to find the container to upload. e.g. /workspace/my-image.tar */
  file?: string;
  /** Required. Registry path to upload the container to. e.g. us-east1-docker.pkg.dev/my-project/my-repo/my-image */
  registryPath?: string;
  /** Optional. Tags to apply to the uploaded image. e.g. latest, 1.0.0 */
  tags?: ReadonlyArray<string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file: Schema.optional(Schema.String),
    registryPath: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts {
  /** A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE. */
  images?: ReadonlyArray<string>;
  /** A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE. */
  objects?: ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects;
  /** A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE. */
  mavenArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact>;
  /** Optional. A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps. If any objects fail to be pushed, the build is marked FAILURE. */
  goModules?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule>;
  /** A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE. */
  pythonPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage>;
  /** A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE. */
  npmPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage>;
  /** Optional. A list of OCI images to be uploaded to Artifact Registry upon successful completion of all build steps. OCI images in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any images fail to be pushed, the build is marked FAILURE. */
  oci?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    images: Schema.optional(Schema.Array(Schema.String)),
    objects: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects,
    ),
    mavenArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact,
      ),
    ),
    goModules: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule,
      ),
    ),
    pythonPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage,
      ),
    ),
    npmPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage,
      ),
    ),
    oci: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance {
  /** A copy of the build's `source.storage_source`, if exists, with any generations resolved. */
  resolvedStorageSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;
  /** A copy of the build's `source.repo_source`, if exists, with any revisions resolved. */
  resolvedRepoSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;
  /** A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview. */
  resolvedStorageSourceManifest?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
  /** Output only. A copy of the build's `source.connected_repository`, if exists, with any revisions resolved. */
  resolvedConnectedRepository?: ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;
  /** Output only. A copy of the build's `source.git_source`, if exists, with any revisions resolved. */
  resolvedGitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;
  /** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
  fileHashes?: Record<
    string,
    ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes
  >;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedStorageSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource,
    ),
    resolvedRepoSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource,
    ),
    resolvedStorageSourceManifest: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
    resolvedConnectedRepository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository,
    ),
    resolvedGitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource,
    ),
    fileHashes: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
      ),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption {
  /** The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} */
  name?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions {
  /** Requested hash for SourceProvenance. */
  sourceProvenanceHash?: ReadonlyArray<
    | "NONE"
    | "SHA256"
    | "MD5"
    | "GO_MODULE_H1"
    | "SHA512"
    | "DIRSUM_SHA256"
    | (string & {})
  >;
  /** Requested verifiability options. */
  requestedVerifyOption?: "NOT_VERIFIED" | "VERIFIED" | (string & {});
  /** Compute Engine machine type on which to run the build. */
  machineType?:
    | "UNSPECIFIED"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_32"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_32"
    | "E2_MEDIUM"
    | (string & {});
  /** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 4000GB; builds that request more than the maximum are rejected with an error. */
  diskSizeGb?: string;
  /** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
  substitutionOption?: "MUST_MATCH" | "ALLOW_LOOSE" | (string & {});
  /** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
  dynamicSubstitutions?: boolean;
  /** Option to include built-in and custom substitutions as env variables for all build steps. */
  automapSubstitutions?: boolean;
  /** Option to define build log streaming behavior to Cloud Storage. */
  logStreamingOption?:
    | "STREAM_DEFAULT"
    | "STREAM_ON"
    | "STREAM_OFF"
    | (string & {});
  /** This field deprecated; please use `pool.name` instead. */
  workerPool?: string;
  /** Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
  pool?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption;
  /** Option to specify the logging mode, which determines if and where build logs are stored. */
  logging?:
    | "LOGGING_UNSPECIFIED"
    | "LEGACY"
    | "GCS_ONLY"
    | "STACKDRIVER_ONLY"
    | "CLOUD_LOGGING_ONLY"
    | "NONE"
    | (string & {});
  /** A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build. */
  secretEnv?: ReadonlyArray<string>;
  /** Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume>;
  /** Optional. Option to specify how default logs buckets are setup. */
  defaultLogsBucketBehavior?:
    | "DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED"
    | "REGIONAL_USER_OWNED_BUCKET"
    | "LEGACY_BUCKET"
    | (string & {});
  /** Optional. Option to specify whether structured logging is enabled. If true, JSON-formatted logs are parsed as structured logs. */
  enableStructuredLogging?: boolean;
  /** Optional. Option to specify the Pub/Sub topic to receive build status updates. */
  pubsubTopic?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceProvenanceHash: Schema.optional(Schema.Array(Schema.String)),
    requestedVerifyOption: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.String),
    substitutionOption: Schema.optional(Schema.String),
    dynamicSubstitutions: Schema.optional(Schema.Boolean),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    logStreamingOption: Schema.optional(Schema.String),
    workerPool: Schema.optional(Schema.String),
    pool: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption,
    ),
    logging: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    volumes: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Volume),
    ),
    defaultLogsBucketBehavior: Schema.optional(Schema.String),
    enableStructuredLogging: Schema.optional(Schema.Boolean),
    pubsubTopic: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Secret {
  /** Cloud KMS key name to use to decrypt these envs. */
  kmsKeyName?: string;
  /** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
  secretEnv?: Record<string, string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Secret =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    secretEnv: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Secret",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig {
  /** Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. */
  approvalRequired?: boolean;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalRequired: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult {
  /** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
  approverAccount?: string;
  /** Output only. The time when the approval decision was made. */
  approvalTime?: string;
  /** Required. The decision of this manual approval. */
  decision?: "DECISION_UNSPECIFIED" | "APPROVED" | "REJECTED" | (string & {});
  /** Optional. An optional comment for this manual approval result. */
  comment?: string;
  /** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
  url?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approverAccount: Schema.optional(Schema.String),
    approvalTime: Schema.optional(Schema.String),
    decision: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval {
  /** Output only. The state of this build's approval. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "CANCELLED"
    | (string & {});
  /** Output only. Configuration for manual approval of this build. */
  config?: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig;
  /** Output only. Result of manual approval for this Build. */
  result?: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    config: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig,
    ),
    result: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret {
  /** Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/* */
  versionName?: string;
  /** Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. */
  env?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionName: Schema.optional(Schema.String),
    env: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret {
  /** Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/* /locations/* /keyRings/* /cryptoKeys/* */
  kmsKeyName?: string;
  /** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
  envMap?: Record<string, string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    envMap: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets {
  /** Secrets in Secret Manager and associated secret environment variable. */
  secretManager?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret>;
  /** Secrets encrypted with KMS key and the associated secret environment variable. */
  inline?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretManager: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret,
      ),
    ),
    inline: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning {
  /** Explanation of the warning generated. */
  text?: string;
  /** The priority for this warning. */
  priority?:
    | "PRIORITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ALERT"
    | (string & {});
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig {
  /** SecretVersion resource of the HTTP proxy URL. The Service Account used in the build (either the default Service Account or user-specified Service Account) should have `secretmanager.versions.access` permissions on this secret. The proxy URL should be in format `protocol://@]proxyhost[:port]`. */
  proxySecretVersionName?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proxySecretVersionName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig {
  /** Configuration for HTTP related git operations. */
  http?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    http: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo {
  /** The name of the failure. */
  type?:
    | "FAILURE_TYPE_UNSPECIFIED"
    | "PUSH_FAILED"
    | "PUSH_IMAGE_NOT_FOUND"
    | "PUSH_NOT_AUTHORIZED"
    | "LOGGING_FAILURE"
    | "USER_BUILD_STEP"
    | "FETCH_SOURCE_FAILED"
    | (string & {});
  /** Explains the failure issue in more detail using hard-coded text. */
  detail?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository {
  /** Location of the Git repository. */
  url?: string;
  /** The Developer Connect Git repository link formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*` */
  developerConnect?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    developerConnect: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency {
  /** Required. The kind of repo (url or dev connect). */
  repository?: ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository;
  /** Required. The revision that we will fetch the repo at. */
  revision?: string;
  /** Optional. True if submodules should be fetched too (default false). */
  recurseSubmodules?: boolean;
  /** Optional. How much history should be fetched for the build (default 1, -1 for all history). */
  depth?: string;
  /** Required. Where should the files be placed on the worker. */
  destPath?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository,
    ),
    revision: Schema.optional(Schema.String),
    recurseSubmodules: Schema.optional(Schema.Boolean),
    depth: Schema.optional(Schema.String),
    destPath: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency {
  /** If set to true disable all dependency fetching (ignoring the default source as well). */
  empty?: boolean;
  /** Represents a git repository as a build dependency. */
  gitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    empty: Schema.optional(Schema.Boolean),
    gitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Build {
  /** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
  name?: string;
  /** Output only. Unique identifier of the build. */
  id?: string;
  /** Output only. ID of the project. */
  projectId?: string;
  /** Output only. Status of the build. */
  status?:
    | "STATUS_UNKNOWN"
    | "PENDING"
    | "QUEUED"
    | "WORKING"
    | "SUCCESS"
    | "FAILURE"
    | "INTERNAL_ERROR"
    | "TIMEOUT"
    | "CANCELLED"
    | "EXPIRED"
    | (string & {});
  /** Output only. Customer-readable message about the current status. */
  statusDetail?: string;
  /** Optional. The location of the source files to build. */
  source?: ContaineranalysisGoogleDevtoolsCloudbuildV1Source;
  /** Required. The operations to be performed on the workspace. */
  steps?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep>;
  /** Output only. Results of the build. */
  results?: ContaineranalysisGoogleDevtoolsCloudbuildV1Results;
  /** Output only. Time at which the request to create the build was received. */
  createTime?: string;
  /** Output only. Time at which execution of the build was started. */
  startTime?: string;
  /** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
  finishTime?: string;
  /** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
  timeout?: string;
  /** A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`. */
  images?: ReadonlyArray<string>;
  /** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
  queueTtl?: string;
  /** Artifacts produced by the build that should be uploaded upon successful completion of all build steps. */
  artifacts?: ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts;
  /** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
  logsBucket?: string;
  /** Output only. A permanent fixed identifier for source. */
  sourceProvenance?: ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance;
  /** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
  buildTriggerId?: string;
  /** Special options for this build. */
  options?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions;
  /** Output only. URL to logs for this build in Google Cloud Console. */
  logUrl?: string;
  /** Substitutions data for `Build` resource. */
  substitutions?: Record<string, string>;
  /** Tags for annotation of a `Build`. These are not docker tags. */
  tags?: ReadonlyArray<string>;
  /** Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets */
  secrets?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Secret>;
  /** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
  timing?: Record<string, ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan>;
  /** Output only. Describes this build's approval configuration, status, and result. */
  approval?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval;
  /** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
  serviceAccount?: string;
  /** Secrets and secret environment variables. */
  availableSecrets?: ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets;
  /** Output only. Non-fatal problems encountered during the execution of the build. */
  warnings?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning>;
  /** Optional. Configuration for git operations. */
  gitConfig?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig;
  /** Output only. Contains information about the build when status=FAILURE. */
  failureInfo?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo;
  /** Optional. Dependencies that the Cloud Build worker will fetch before executing user steps. */
  dependencies?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Build =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    source: Schema.optional(ContaineranalysisGoogleDevtoolsCloudbuildV1Source),
    steps: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep),
    ),
    results: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Results,
    ),
    createTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    finishTime: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    images: Schema.optional(Schema.Array(Schema.String)),
    queueTtl: Schema.optional(Schema.String),
    artifacts: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts,
    ),
    logsBucket: Schema.optional(Schema.String),
    sourceProvenance: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance,
    ),
    buildTriggerId: Schema.optional(Schema.String),
    options: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions,
    ),
    logUrl: Schema.optional(Schema.String),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    secrets: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Secret),
    ),
    timing: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
      ),
    ),
    approval: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval,
    ),
    serviceAccount: Schema.optional(Schema.String),
    availableSecrets: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets,
    ),
    warnings: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning),
    ),
    gitConfig: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig,
    ),
    failureInfo: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo,
    ),
    dependencies: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Build",
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
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface GetProjectsOccurrencesRequest {
  /** The name of the occurrence of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}" */
  name: string;
}

export const GetProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsOccurrencesRequest>;

export type GetProjectsOccurrencesResponse = Occurrence;
export const GetProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Occurrence;

export type GetProjectsOccurrencesError = DefaultErrors | NotFound | Forbidden;

/** Returns the requested `Occurrence`. */
export const getProjectsOccurrences: API.OperationMethod<
  GetProjectsOccurrencesRequest,
  GetProjectsOccurrencesResponse,
  GetProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsOccurrencesRequest,
  output: GetProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsOccurrencesRequest {
  /** This contains the project Id for example: projects/{project_id}. */
  parent: string;
  /** The name field contains the project Id. For example: "projects/{project_id} @Deprecated */
  name?: string;
  /** The filter expression. */
  filter?: string;
  /** Number of occurrences to return in the list. */
  pageSize?: number;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** The kind of occurrences to filter on. */
  kind?:
    | "KIND_UNSPECIFIED"
    | "PACKAGE_VULNERABILITY"
    | "BUILD_DETAILS"
    | "IMAGE_BASIS"
    | "PACKAGE_MANAGER"
    | "DEPLOYABLE"
    | "DISCOVERY"
    | "ATTESTATION_AUTHORITY"
    | "UPGRADE"
    | "COMPLIANCE"
    | "SBOM"
    | "SPDX_PACKAGE"
    | "SPDX_FILE"
    | "SPDX_RELATIONSHIP"
    | "DSSE_ATTESTATION"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | (string & {});
}

export const ListProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    kind: Schema.optional(Schema.String).pipe(T.HttpQuery("kind")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{parent}/occurrences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsOccurrencesRequest>;

export type ListProjectsOccurrencesResponse = ListOccurrencesResponse;
export const ListProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOccurrencesResponse;

export type ListProjectsOccurrencesError = DefaultErrors | NotFound | Forbidden;

/** Lists active `Occurrences` for a given project matching the filters. */
export const listProjectsOccurrences: API.PaginatedOperationMethod<
  ListProjectsOccurrencesRequest,
  ListProjectsOccurrencesResponse,
  ListProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsOccurrencesRequest,
  output: ListProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsOccurrencesRequest {
  /** The name of the occurrence in the form of "projects/{project_id}/occurrences/{OCCURRENCE_ID}" */
  name: string;
}

export const DeleteProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsOccurrencesRequest>;

export type DeleteProjectsOccurrencesResponse = Empty;
export const DeleteProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the given `Occurrence` from the system. Use this when an `Occurrence` is no longer applicable for the given resource. */
export const deleteProjectsOccurrences: API.OperationMethod<
  DeleteProjectsOccurrencesRequest,
  DeleteProjectsOccurrencesResponse,
  DeleteProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsOccurrencesRequest,
  output: DeleteProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsOccurrencesRequest {
  /** This field contains the project Id for example: "projects/{project_id}" */
  parent: string;
  /** The name of the project. Should be of the form "projects/{project_id}". @Deprecated */
  name?: string;
  /** Request body */
  body?: Occurrence;
}

export const CreateProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    body: Schema.optional(Occurrence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{parent}/occurrences",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsOccurrencesRequest>;

export type CreateProjectsOccurrencesResponse = Occurrence;
export const CreateProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Occurrence;

export type CreateProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource. */
export const createProjectsOccurrences: API.OperationMethod<
  CreateProjectsOccurrencesRequest,
  CreateProjectsOccurrencesResponse,
  CreateProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsOccurrencesRequest,
  output: CreateProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsOccurrencesRequest {
  /** The name of the occurrence. Should be of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}". */
  name: string;
  /** The fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Occurrence;
}

export const PatchProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Occurrence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsOccurrencesRequest>;

export type PatchProjectsOccurrencesResponse = Occurrence;
export const PatchProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Occurrence;

export type PatchProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing occurrence. */
export const patchProjectsOccurrences: API.OperationMethod<
  PatchProjectsOccurrencesRequest,
  PatchProjectsOccurrencesResponse,
  PatchProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsOccurrencesRequest,
  output: PatchProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetNotesProjectsOccurrencesRequest {
  /** The name of the occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}" */
  name: string;
}

export const GetNotesProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{name}/notes" }),
    svc,
  ) as unknown as Schema.Schema<GetNotesProjectsOccurrencesRequest>;

export type GetNotesProjectsOccurrencesResponse = Note;
export const GetNotesProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Note;

export type GetNotesProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the `Note` attached to the given `Occurrence`. */
export const getNotesProjectsOccurrences: API.OperationMethod<
  GetNotesProjectsOccurrencesRequest,
  GetNotesProjectsOccurrencesResponse,
  GetNotesProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNotesProjectsOccurrencesRequest,
  output: GetNotesProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetVulnerabilitySummaryProjectsOccurrencesRequest {
  /** This contains the project Id for example: projects/{project_id} */
  parent: string;
  /** The filter expression. */
  filter?: string;
}

export const GetVulnerabilitySummaryProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha1/{parent}/occurrences:vulnerabilitySummary",
    }),
    svc,
  ) as unknown as Schema.Schema<GetVulnerabilitySummaryProjectsOccurrencesRequest>;

export type GetVulnerabilitySummaryProjectsOccurrencesResponse =
  GetVulnzOccurrencesSummaryResponse;
export const GetVulnerabilitySummaryProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetVulnzOccurrencesSummaryResponse;

export type GetVulnerabilitySummaryProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a summary of the number and severity of occurrences. */
export const getVulnerabilitySummaryProjectsOccurrences: API.OperationMethod<
  GetVulnerabilitySummaryProjectsOccurrencesRequest,
  GetVulnerabilitySummaryProjectsOccurrencesResponse,
  GetVulnerabilitySummaryProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVulnerabilitySummaryProjectsOccurrencesRequest,
  output: GetVulnerabilitySummaryProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsOccurrencesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsOccurrencesRequest>;

export type SetIamPolicyProjectsOccurrencesResponse = Policy;
export const SetIamPolicyProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes */
export const setIamPolicyProjectsOccurrences: API.OperationMethod<
  SetIamPolicyProjectsOccurrencesRequest,
  SetIamPolicyProjectsOccurrencesResponse,
  SetIamPolicyProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsOccurrencesRequest,
  output: SetIamPolicyProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsOccurrencesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsOccurrencesRequest>;

export type GetIamPolicyProjectsOccurrencesResponse = Policy;
export const GetIamPolicyProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes */
export const getIamPolicyProjectsOccurrences: API.OperationMethod<
  GetIamPolicyProjectsOccurrencesRequest,
  GetIamPolicyProjectsOccurrencesResponse,
  GetIamPolicyProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsOccurrencesRequest,
  output: GetIamPolicyProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsOccurrencesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsOccurrencesRequest>;

export type TestIamPermissionsProjectsOccurrencesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes` */
export const testIamPermissionsProjectsOccurrences: API.OperationMethod<
  TestIamPermissionsProjectsOccurrencesRequest,
  TestIamPermissionsProjectsOccurrencesResponse,
  TestIamPermissionsProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsOccurrencesRequest,
  output: TestIamPermissionsProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsNotesRequest {
  /** The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}" */
  name: string;
}

export const GetProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsNotesRequest>;

export type GetProjectsNotesResponse = Note;
export const GetProjectsNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type GetProjectsNotesError = DefaultErrors | NotFound | Forbidden;

/** Returns the requested `Note`. */
export const getProjectsNotes: API.OperationMethod<
  GetProjectsNotesRequest,
  GetProjectsNotesResponse,
  GetProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsNotesRequest,
  output: GetProjectsNotesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsNotesRequest {
  /** This field contains the project Id for example: "projects/{PROJECT_ID}". */
  parent: string;
  /** The name field will contain the project Id for example: "providers/{provider_id} @Deprecated */
  name?: string;
  /** The filter expression. */
  filter?: string;
  /** Number of notes to return in the list. */
  pageSize?: number;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
}

export const ListProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{parent}/notes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsNotesRequest>;

export type ListProjectsNotesResponse = ListNotesResponse;
export const ListProjectsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotesResponse;

export type ListProjectsNotesError = DefaultErrors | NotFound | Forbidden;

/** Lists all `Notes` for a given project. */
export const listProjectsNotes: API.PaginatedOperationMethod<
  ListProjectsNotesRequest,
  ListProjectsNotesResponse,
  ListProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsNotesRequest,
  output: ListProjectsNotesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsNotesRequest {
  /** The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}" */
  name: string;
}

export const DeleteProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsNotesRequest>;

export type DeleteProjectsNotesResponse = Empty;
export const DeleteProjectsNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the given `Note` from the system. */
export const deleteProjectsNotes: API.OperationMethod<
  DeleteProjectsNotesRequest,
  DeleteProjectsNotesResponse,
  DeleteProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsNotesRequest,
  output: DeleteProjectsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsNotesRequest {
  /** This field contains the project Id for example: "projects/{project_id} */
  parent: string;
  /** The name of the project. Should be of the form "providers/{provider_id}". @Deprecated */
  name?: string;
  /** The ID to use for this note. */
  noteId?: string;
  /** Request body */
  body?: Note;
}

export const CreateProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    noteId: Schema.optional(Schema.String).pipe(T.HttpQuery("noteId")),
    body: Schema.optional(Note).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{parent}/notes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsNotesRequest>;

export type CreateProjectsNotesResponse = Note;
export const CreateProjectsNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type CreateProjectsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `Note`. */
export const createProjectsNotes: API.OperationMethod<
  CreateProjectsNotesRequest,
  CreateProjectsNotesResponse,
  CreateProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsNotesRequest,
  output: CreateProjectsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsNotesRequest {
  /** The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}". */
  name: string;
  /** The fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Note;
}

export const PatchProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Note).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsNotesRequest>;

export type PatchProjectsNotesResponse = Note;
export const PatchProjectsNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type PatchProjectsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing `Note`. */
export const patchProjectsNotes: API.OperationMethod<
  PatchProjectsNotesRequest,
  PatchProjectsNotesResponse,
  PatchProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsNotesRequest,
  output: PatchProjectsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsNotesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsNotesRequest>;

export type SetIamPolicyProjectsNotesResponse = Policy;
export const SetIamPolicyProjectsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes */
export const setIamPolicyProjectsNotes: API.OperationMethod<
  SetIamPolicyProjectsNotesRequest,
  SetIamPolicyProjectsNotesResponse,
  SetIamPolicyProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsNotesRequest,
  output: SetIamPolicyProjectsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsNotesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsNotesRequest>;

export type GetIamPolicyProjectsNotesResponse = Policy;
export const GetIamPolicyProjectsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes */
export const getIamPolicyProjectsNotes: API.OperationMethod<
  GetIamPolicyProjectsNotesRequest,
  GetIamPolicyProjectsNotesResponse,
  GetIamPolicyProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsNotesRequest,
  output: GetIamPolicyProjectsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsNotesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsNotesRequest>;

export type TestIamPermissionsProjectsNotesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes` */
export const testIamPermissionsProjectsNotes: API.OperationMethod<
  TestIamPermissionsProjectsNotesRequest,
  TestIamPermissionsProjectsNotesResponse,
  TestIamPermissionsProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsNotesRequest,
  output: TestIamPermissionsProjectsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsNotesOccurrencesRequest {
  /** The name field will contain the note name for example: "provider/{provider_id}/notes/{note_id}" */
  name: string;
  /** The filter expression. */
  filter?: string;
  /** Number of notes to return in the list. */
  pageSize?: number;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
}

export const ListProjectsNotesOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{name}/occurrences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsNotesOccurrencesRequest>;

export type ListProjectsNotesOccurrencesResponse = ListNoteOccurrencesResponse;
export const ListProjectsNotesOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNoteOccurrencesResponse;

export type ListProjectsNotesOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects. */
export const listProjectsNotesOccurrences: API.PaginatedOperationMethod<
  ListProjectsNotesOccurrencesRequest,
  ListProjectsNotesOccurrencesResponse,
  ListProjectsNotesOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsNotesOccurrencesRequest,
  output: ListProjectsNotesOccurrencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsOperationsRequest {
  /** The project Id that this operation should be created under. */
  parent: string;
  /** Request body */
  body?: CreateOperationRequest;
}

export const CreateProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CreateOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{parent}/operations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsOperationsRequest>;

export type CreateProjectsOperationsResponse = Operation;
export const CreateProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `Operation`. */
export const createProjectsOperations: API.OperationMethod<
  CreateProjectsOperationsRequest,
  CreateProjectsOperationsResponse,
  CreateProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsOperationsRequest,
  output: CreateProjectsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsOperationsRequest {
  /** The name of the Operation. Should be of the form "projects/{provider_id}/operations/{operation_id}". */
  name: string;
  /** Request body */
  body?: UpdateOperationRequest;
}

export const PatchProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsOperationsRequest>;

export type PatchProjectsOperationsResponse = Operation;
export const PatchProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing operation returns an error if operation does not exist. The only valid operations are to update mark the done bit change the result. */
export const patchProjectsOperations: API.OperationMethod<
  PatchProjectsOperationsRequest,
  PatchProjectsOperationsResponse,
  PatchProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsOperationsRequest,
  output: PatchProjectsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsScanConfigsRequest {
  /** The name of the ScanConfig in the form projects/{project_id}/scanConfigs/{scan_config_id} */
  name: string;
}

export const GetProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsScanConfigsRequest>;

export type GetProjectsScanConfigsResponse = ScanConfig;
export const GetProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanConfig;

export type GetProjectsScanConfigsError = DefaultErrors | NotFound | Forbidden;

/** Gets a specific scan configuration for a project. */
export const getProjectsScanConfigs: API.OperationMethod<
  GetProjectsScanConfigsRequest,
  GetProjectsScanConfigsResponse,
  GetProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsScanConfigsRequest,
  output: GetProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsScanConfigsRequest {
  /** This containers the project Id i.e.: projects/{project_id} */
  parent: string;
  /** The filter expression. */
  filter?: string;
  /** The number of items to return. */
  pageSize?: number;
  /** The page token to use for the next request. */
  pageToken?: string;
}

export const ListProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{parent}/scanConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsScanConfigsRequest>;

export type ListProjectsScanConfigsResponse = ListScanConfigsResponse;
export const ListProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScanConfigsResponse;

export type ListProjectsScanConfigsError = DefaultErrors | NotFound | Forbidden;

/** Lists scan configurations for a project. */
export const listProjectsScanConfigs: API.PaginatedOperationMethod<
  ListProjectsScanConfigsRequest,
  ListProjectsScanConfigsResponse,
  ListProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsScanConfigsRequest,
  output: ListProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsScanConfigsRequest {
  /** The scan config to update of the form projects/{project_id}/scanConfigs/{scan_config_id}. */
  name: string;
  /** The fields to update. */
  updateMask?: string;
  /** Request body */
  body?: ScanConfig;
}

export const PatchProjectsScanConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ScanConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsScanConfigsRequest>;

export type PatchProjectsScanConfigsResponse = ScanConfig;
export const PatchProjectsScanConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScanConfig;

export type PatchProjectsScanConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the scan configuration to a new value. */
export const patchProjectsScanConfigs: API.OperationMethod<
  PatchProjectsScanConfigsRequest,
  PatchProjectsScanConfigsResponse,
  PatchProjectsScanConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsScanConfigsRequest,
  output: PatchProjectsScanConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProvidersNotesRequest {
  /** The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}" */
  name: string;
}

export const GetProvidersNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProvidersNotesRequest>;

export type GetProvidersNotesResponse = Note;
export const GetProvidersNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type GetProvidersNotesError = DefaultErrors | NotFound | Forbidden;

/** Returns the requested `Note`. */
export const getProvidersNotes: API.OperationMethod<
  GetProvidersNotesRequest,
  GetProvidersNotesResponse,
  GetProvidersNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProvidersNotesRequest,
  output: GetProvidersNotesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProvidersNotesRequest {
  /** The name field will contain the project Id for example: "providers/{provider_id} @Deprecated */
  name: string;
  /** This field contains the project Id for example: "projects/{PROJECT_ID}". */
  parent?: string;
  /** The filter expression. */
  filter?: string;
  /** Number of notes to return in the list. */
  pageSize?: number;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
}

export const ListProvidersNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{name}/notes" }),
    svc,
  ) as unknown as Schema.Schema<ListProvidersNotesRequest>;

export type ListProvidersNotesResponse = ListNotesResponse;
export const ListProvidersNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotesResponse;

export type ListProvidersNotesError = DefaultErrors | NotFound | Forbidden;

/** Lists all `Notes` for a given project. */
export const listProvidersNotes: API.PaginatedOperationMethod<
  ListProvidersNotesRequest,
  ListProvidersNotesResponse,
  ListProvidersNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProvidersNotesRequest,
  output: ListProvidersNotesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProvidersNotesRequest {
  /** The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}" */
  name: string;
}

export const DeleteProvidersNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProvidersNotesRequest>;

export type DeleteProvidersNotesResponse = Empty;
export const DeleteProvidersNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProvidersNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the given `Note` from the system. */
export const deleteProvidersNotes: API.OperationMethod<
  DeleteProvidersNotesRequest,
  DeleteProvidersNotesResponse,
  DeleteProvidersNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProvidersNotesRequest,
  output: DeleteProvidersNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProvidersNotesRequest {
  /** The name of the project. Should be of the form "providers/{provider_id}". @Deprecated */
  name: string;
  /** This field contains the project Id for example: "projects/{project_id} */
  parent?: string;
  /** The ID to use for this note. */
  noteId?: string;
  /** Request body */
  body?: Note;
}

export const CreateProvidersNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    noteId: Schema.optional(Schema.String).pipe(T.HttpQuery("noteId")),
    body: Schema.optional(Note).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{name}/notes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProvidersNotesRequest>;

export type CreateProvidersNotesResponse = Note;
export const CreateProvidersNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type CreateProvidersNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new `Note`. */
export const createProvidersNotes: API.OperationMethod<
  CreateProvidersNotesRequest,
  CreateProvidersNotesResponse,
  CreateProvidersNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProvidersNotesRequest,
  output: CreateProvidersNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProvidersNotesRequest {
  /** The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}". */
  name: string;
  /** The fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Note;
}

export const PatchProvidersNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Note).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProvidersNotesRequest>;

export type PatchProvidersNotesResponse = Note;
export const PatchProvidersNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type PatchProvidersNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing `Note`. */
export const patchProvidersNotes: API.OperationMethod<
  PatchProvidersNotesRequest,
  PatchProvidersNotesResponse,
  PatchProvidersNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProvidersNotesRequest,
  output: PatchProvidersNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProvidersNotesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProvidersNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProvidersNotesRequest>;

export type SetIamPolicyProvidersNotesResponse = Policy;
export const SetIamPolicyProvidersNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProvidersNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes */
export const setIamPolicyProvidersNotes: API.OperationMethod<
  SetIamPolicyProvidersNotesRequest,
  SetIamPolicyProvidersNotesResponse,
  SetIamPolicyProvidersNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProvidersNotesRequest,
  output: SetIamPolicyProvidersNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProvidersNotesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProvidersNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProvidersNotesRequest>;

export type GetIamPolicyProvidersNotesResponse = Policy;
export const GetIamPolicyProvidersNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProvidersNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes */
export const getIamPolicyProvidersNotes: API.OperationMethod<
  GetIamPolicyProvidersNotesRequest,
  GetIamPolicyProvidersNotesResponse,
  GetIamPolicyProvidersNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProvidersNotesRequest,
  output: GetIamPolicyProvidersNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProvidersNotesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProvidersNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProvidersNotesRequest>;

export type TestIamPermissionsProvidersNotesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProvidersNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProvidersNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes` */
export const testIamPermissionsProvidersNotes: API.OperationMethod<
  TestIamPermissionsProvidersNotesRequest,
  TestIamPermissionsProvidersNotesResponse,
  TestIamPermissionsProvidersNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProvidersNotesRequest,
  output: TestIamPermissionsProvidersNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProvidersNotesOccurrencesRequest {
  /** The name field will contain the note name for example: "provider/{provider_id}/notes/{note_id}" */
  name: string;
  /** The filter expression. */
  filter?: string;
  /** Number of notes to return in the list. */
  pageSize?: number;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
}

export const ListProvidersNotesOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{name}/occurrences" }),
    svc,
  ) as unknown as Schema.Schema<ListProvidersNotesOccurrencesRequest>;

export type ListProvidersNotesOccurrencesResponse = ListNoteOccurrencesResponse;
export const ListProvidersNotesOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNoteOccurrencesResponse;

export type ListProvidersNotesOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects. */
export const listProvidersNotesOccurrences: API.PaginatedOperationMethod<
  ListProvidersNotesOccurrencesRequest,
  ListProvidersNotesOccurrencesResponse,
  ListProvidersNotesOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProvidersNotesOccurrencesRequest,
  output: ListProvidersNotesOccurrencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
